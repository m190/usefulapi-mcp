#!/usr/bin/env node
// codegen.mjs — regenerate the COMMITTED artifacts from manifest.json (the single
// source of truth), so they can never drift from it:
//   servers/<slug>/server.json  — spec-valid MCP Registry record (io.usefulapi/<slug>)
//   servers/<slug>/README.md    — the ## Tools and ## Pricing sections
//   README.md (root)            — the Servers table
// Run after editing manifest.json, then commit. build.mjs (the site) stays separate.
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = new URL("./", import.meta.url);
// Per-product artifacts live under this subdir (keeps the repo root uncluttered).
// This value is also the registry `repository.subfolder` prefix, so it must match
// where the folders actually sit in the repo.
const SUBDIR = "servers/";
const manifest = JSON.parse(readFileSync(new URL("manifest.json", ROOT), "utf8"));
const { registryNamespace, repository } = manifest.portal;

// Version is DERIVED from each server's package.json — the single source of truth
// (release.sh bumps it via `npm version`, atomically == the git tag; see the
// version-single-source-of-truth memory). Sync it into the manifest here so the
// registry server.json and the portal always reflect the real released version,
// never a stale hand-typed copy. Servers with no local repo keep their manifest value.
// fleet/products/<slug>/package.json is the live version (fleet deploy); servers/<slug>-mcp is legacy.
function pkgVersion(slug) {
  for (const path of [`../fleet/products/${slug}/package.json`, `../servers/${slug}-mcp/package.json`]) {
    try {
      return JSON.parse(readFileSync(new URL(path, ROOT), "utf8")).version || null;
    } catch {}
  }
  return null;
}
let versionSynced = 0;
for (const s of manifest.servers) {
  const v = pkgVersion(s.slug);
  if (v && v !== s.version) { s.version = v; versionSynced++; }
  else if (!s.version) s.version = v || "1.0.0";
}
// Login data (which credentials the login asks for + where to find them) is DERIVED from each
// product's product.ts in the fleet, via fleet/scripts/export-login.ts. The portal renders it from
// manifest.json, because the Pages build has no fleet checkout. Without a fleet checkout, keep the old values.
let loginSynced = 0;
let logins = null;
try {
  logins = JSON.parse(execFileSync("npx", ["tsx", "scripts/export-login.ts"], {
    cwd: fileURLToPath(new URL("../fleet/", ROOT)), encoding: "utf8", maxBuffer: 16 << 20, stdio: ["ignore", "pipe", "inherit"],
  }));
} catch (e) {
  console.warn(`codegen: no fleet login export (${e.message.split("\n")[0]}); keeping manifest login data`);
}
for (const s of logins ? manifest.servers : []) {
  const l = logins[s.slug];
  if (l && JSON.stringify(l) !== JSON.stringify(s.login)) { s.login = l; loginSynced++; }
}
if (versionSynced || loginSynced) {
  writeFileSync(new URL("manifest.json", ROOT), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`codegen: synced ${versionSynced} version(s) + ${loginSynced} login(s) from fleet → manifest.json`);
}
const SCHEMA = "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json";
const SITE = manifest.portal.domain.replace(/\/$/, "");
// The brand mark (portal/), served by the portal. Vendor logos are never used (trademarks).
const ICONS = [
  { src: `${SITE}/icon.svg`, mimeType: "image/svg+xml", sizes: ["any"] },
  { src: `${SITE}/icon-256.png`, mimeType: "image/png", sizes: ["256x256"] },
  { src: `${SITE}/icon-512.png`, mimeType: "image/png", sizes: ["512x512"] },
];

// ---- server.json ------------------------------------------------------------
function serverJson(s) {
  return (
    JSON.stringify(
      {
        $schema: SCHEMA,
        name: `${registryNamespace}/${s.slug}`,
        title: `${s.name} MCP by usefulapi`,
        description: s.description,
        version: s.version || "1.0.0",
        websiteUrl: `${SITE}/${s.slug}/`,
        icons: ICONS,
        repository: { url: repository.url, source: repository.source, subfolder: `${SUBDIR}${s.slug}` },
        remotes: [{ type: s.transport || "streamable-http", url: s.endpoint }],
      },
      null,
      2
    ) + "\n"
  );
}

// ---- README section rendering ----------------------------------------------
const TYPE_CELL = { read: "read", write: "**write**", meta: "meta" };
function toolsSection(s) {
  const rows = s.tools.map((t) => `| \`${t.name}\` | ${TYPE_CELL[t.type]} | ${t.title} |`).join("\n");
  return (
    `## Tools\n\n| Tool | Type | What it does |\n|------|------|--------------|\n${rows}\n\n` +
    "`read` tools are read-only; `write` tools mutate data (clients should confirm them); " +
    "`meta` tools report usage, manage your subscription or send a feature request.\n"
  );
}
function priceCell(p) {
  if (!p.monthly || p.monthly === "$0") return "$0";
  const mo = `**${p.monthly}/mo**`;
  return p.yearly ? `${mo} or **${p.yearly}/yr** (2 months free)` : mo;
}
function pricingSection(s) {
  const rows = s.pricing
    .map((p) => `| **${p.plan}**${p.scope ? ` (${p.scope})` : ""} | ${priceCell(p)} | ${p.limit} |`)
    .join("\n");
  // Billing is per product: say so, and name this server's subscribe/cancel tools.
  const meta = (suffix) => s.tools.find((t) => t.type === "meta" && t.name.endsWith(suffix));
  const up = meta("_upgrade"), cancel = meta("_cancel_subscription");
  const note = up && cancel
    ? `\nPro covers this server only. Subscribe with \`${up.name}\` (it returns a Stripe Checkout link). ` +
      `Cancel any time with \`${cancel.name}\`: Pro continues to the end of the paid period, with no refund ` +
      `for the current period, and running \`${up.name}\` before then undoes the cancel. Or write to support@usefulapi.io.\n`
    : "";
  return `## Pricing\n\n| Plan | Price | Limit |\n|------|-------|-------|\n${rows}\n${note}`;
}

// Replace a "## <Heading>" section (including the blank line up to the next "## "
// heading) with newBody, re-emitting exactly one blank line before that next heading.
// Both regenerated sections (Tools, Pricing) are always followed by another heading.
function replaceSection(md, heading, newBody) {
  const re = new RegExp(`(^|\\n)## ${heading}\\b[\\s\\S]*?\\n+(?=## )`, "");
  if (!re.test(md)) throw new Error(`section "## ${heading}" not found`);
  const body = newBody.replace(/\s+$/, "");
  return md.replace(re, (m, pre) => `${pre === "\n" ? "\n" : ""}${body}\n\n`);
}

// The "## Connect" section: generated client setup above the CONNECT_END marker; the product's own
// login prose below it is kept. The first run converts the old hand-written "## Add to Claude" section
// (its JSON block is dropped, its prose kept).
const CONNECT_END = "<!-- connect:end (generated above, edit below) -->";
// Same rule as the portal: some clients send a configured Authorization header instead of the OAuth token.
function readmeNoHeader(s) {
  const k = s.login?.kind || (s.auth === "oauth" ? "upstream" : s.auth === "none" ? "email" : "key");
  const how = k === "upstream" ? `you sign in with your ${s.name} account`
    : k === "email" ? "the login page asks for your email address and a 6-digit code"
    : `the login page asks for your ${s.name} credentials`;
  return `Add only the URL. Do not add an \`Authorization\` header or an API key to the client config: the server signs you in with OAuth, and ${how}.`;
}
function connectSection(s) {
  const vscode = `https://vscode.dev/redirect/mcp/install?name=${encodeURIComponent(s.slug)}&config=${encodeURIComponent(JSON.stringify({ type: "http", url: s.endpoint }))}`;
  return [
    "## Connect",
    "",
    `- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste \`${s.endpoint}\`.`,
    `- **Claude Code:** \`claude mcp add --transport http ${s.slug} ${s.endpoint}\`, then run \`/mcp\` to log in.`,
    `- **VS Code:** [Add to VS Code](${vscode}).`,
    `- **Cursor and other clients:** add the URL as a remote MCP server:`,
    "",
    "```json",
    JSON.stringify({ mcpServers: { [s.slug]: { url: s.endpoint } } }, null, 2),
    "```",
    "",
    readmeNoHeader(s),
    "",
    `Step-by-step setup, where to find your credentials, and FAQ: ${SITE}/${s.slug}/`,
    "",
    CONNECT_END,
  ].join("\n");
}
function replaceConnect(md, s) {
  const m = md.match(/(^|\n)## (Add to Claude|Connect)\n([\s\S]*?)\n+(?=## )/);
  if (!m) throw new Error(`${s.slug}: no "## Add to Claude" or "## Connect" section`);
  const body = m[3];
  const prose = body.includes(CONNECT_END)
    ? body.slice(body.indexOf(CONNECT_END) + CONNECT_END.length)
    : body.replace(/```json[\s\S]*?```/, "");
  const kept = prose.trim();
  return md.replace(m[0], () => `${m[1]}${connectSection(s)}\n${kept ? `\n${kept}\n` : ""}\n`);
}

// ---- root README Servers table ---------------------------------------------
function rootServersTable() {
  const head = "| Server | Category | Tools | Auth | Docs |\n|--------|----------|------:|------|------|";
  const rows = manifest.servers.map((s) => {
    const auth = s.auth === "oauth" ? "OAuth" : "API token";
    return `| [${s.name}](${SUBDIR}${s.slug}/) | ${s.category} | ${s.tools.length} | ${auth} | [${SUBDIR}${s.slug}/](${SUBDIR}${s.slug}/) |`;
  });
  return `${head}\n${rows.join("\n")}`;
}

// ---- write ------------------------------------------------------------------
let n = 0;
for (const s of manifest.servers) {
  writeFileSync(new URL(`${SUBDIR}${s.slug}/server.json`, ROOT), serverJson(s));
  const readmePath = new URL(`${SUBDIR}${s.slug}/README.md`, ROOT);
  let md = readFileSync(readmePath, "utf8");
  md = replaceConnect(md, s);
  md = replaceSection(md, "Tools", toolsSection(s));
  md = replaceSection(md, "Pricing", pricingSection(s));
  writeFileSync(readmePath, md);
  n++;
}

// root README: swap the markdown table between "## Servers" and the next "_"/"##".
let root = readFileSync(new URL("README.md", ROOT), "utf8");
root = root.replace(/\| Server \|[\s\S]*?\n(?=\n|_|##)/, rootServersTable() + "\n");
writeFileSync(new URL("README.md", ROOT), root);

console.log(`codegen: wrote ${n} server.json + ${n} README section pairs + root README table`);
