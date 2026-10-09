#!/usr/bin/env node
// codegen.mjs [--check] — regenerate the COMMITTED artifacts, so they can never drift from their sources:
//   manifest.json               — version, login and tools[] of each listed server, DERIVED from the fleet
//                                 (fleet/products/<slug>/package.json, scripts/export-login.ts, scripts/export-catalog.ts).
//                                 Listing data (name, category, description, pricing, status) stays hand-edited here.
//   servers/<slug>/server.json  — spec-valid MCP Registry record (io.usefulapi/<slug>)
//   servers/<slug>/README.md    — the ## Connect, ## Tools and ## Pricing sections
//   README.md (root)            — the Servers table
//   portal/_probe/<slug>.json   — static discovery reply for crawlers the zone redirects (from fleet discovery.json)
// Needs the fleet checkout next to this repo (../fleet); a missing fleet input is an error.
// --check: write nothing; list the files that would change and exit 1 if any (use it before a push or in a check).
// Run after editing manifest.json or after a fleet release, then commit. build.mjs (the site) stays separate.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = new URL("./", import.meta.url);
const CHECK = process.argv.includes("--check");
const FLEET = new URL("../fleet/", ROOT);
const die = (msg) => { console.error(`codegen: ${msg}`); process.exit(2); };
if (!existsSync(new URL("products/", FLEET))) die("no fleet checkout at ../fleet (the tools, logins and versions come from it)");
// Per-product artifacts live under this subdir (keeps the repo root uncluttered).
// This value is also the registry `repository.subfolder` prefix, so it must match
// where the folders actually sit in the repo.
const SUBDIR = "servers/";
const manifestText = readFileSync(new URL("manifest.json", ROOT), "utf8");
const manifest = JSON.parse(manifestText);
const { registryNamespace, repository } = manifest.portal;
const slugs = manifest.servers.map((s) => s.slug);

// Every output goes through `out` (path → content) and `remove`, written (or compared) at the end.
const out = new Map();
const remove = new Set();
const emit = (path, content) => out.set(path, content);

// Version: fleet/products/<slug>/package.json is the live version (fleet deploy).
for (const s of manifest.servers) {
  const pkg = new URL(`products/${s.slug}/package.json`, FLEET);
  if (!existsSync(pkg)) die(`${s.slug}: listed in manifest.json but no fleet/products/${s.slug}/package.json`);
  s.version = JSON.parse(readFileSync(pkg, "utf8")).version;
  if (!s.version) die(`${s.slug}: no version in package.json`);
}
// Login data (which credentials the login asks for + where to find them) and the tool catalog (product tools from
// discovery.json + the runtime's own tools) come from the fleet's product.ts files, via two export scripts.
// Only the listed slugs are exported, so an unfinished unlisted product cannot break the run.
const fleetJson = (script) => {
  try {
    return JSON.parse(execFileSync("npx", ["tsx", `scripts/${script}`, ...slugs], {
      cwd: fileURLToPath(FLEET), encoding: "utf8", maxBuffer: 64 << 20, stdio: ["ignore", "pipe", "inherit"],
    }));
  } catch (e) {
    die(`fleet ${script} failed: ${e.message.split("\n")[0]}`);
  }
};
const logins = fleetJson("export-login.ts");
const catalog = fleetJson("export-catalog.ts");
for (const s of manifest.servers) {
  if (!logins[s.slug]) die(`${s.slug}: no login export`);
  if (!catalog[s.slug]?.tools?.length) die(`${s.slug}: no tool catalog`);
  s.login = logins[s.slug];
  s.tools = catalog[s.slug].tools;
}
emit("manifest.json", JSON.stringify(manifest, null, 2) + "\n");
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

// ---- generate ---------------------------------------------------------------
for (const s of manifest.servers) {
  emit(`${SUBDIR}${s.slug}/server.json`, serverJson(s));
  const readmePath = `${SUBDIR}${s.slug}/README.md`;
  if (!existsSync(new URL(readmePath, ROOT))) die(`${s.slug}: no ${readmePath} (scaffold it first, see distribute-mcp)`);
  let md = readFileSync(new URL(readmePath, ROOT), "utf8");
  md = replaceConnect(md, s);
  md = replaceSection(md, "Tools", toolsSection(s));
  md = replaceSection(md, "Pricing", pricingSection(s));
  emit(readmePath, md);
}

// root README: swap the markdown table between "## Servers" and the next "_"/"##".
let root = readFileSync(new URL("README.md", ROOT), "utf8");
root = root.replace(/\| Server \|[\s\S]*?\n(?=\n|_|##)/, rootServersTable() + "\n");
emit("README.md", root);

// portal/_probe/<slug>.json: the Worker's token-less discovery reply as one static JSON-RPC message (id 1; the
// initialize result merged with tools/list, resources/list and prompts/list), from fleet/products/<slug>/discovery.json.
// The zone redirect rule for unrequested crawlers (mcpbeat) sends their /mcp to it, so no Worker runs.
// Files of servers no longer in the manifest are removed.
const probes = new Set();
for (const s of manifest.servers) {
  const src = new URL(`products/${s.slug}/discovery.json`, FLEET);
  if (!existsSync(src)) die(`${s.slug}: no fleet discovery.json`);
  const d = JSON.parse(readFileSync(src, "utf8"));
  const result = { ...d.initialize, tools: d.tools, resources: [], prompts: [] };
  emit(`portal/_probe/${s.slug}.json`, JSON.stringify({ jsonrpc: "2.0", id: 1, result }));
  probes.add(`${s.slug}.json`);
}
const probeDir = new URL("portal/_probe/", ROOT);
if (existsSync(probeDir)) for (const f of readdirSync(probeDir)) if (f.endsWith(".json") && !probes.has(f)) remove.add(`portal/_probe/${f}`);

// ---- write or check -----------------------------------------------------------
const changed = [...out].filter(([path, content]) => {
  const url = new URL(path, ROOT);
  return !existsSync(url) || readFileSync(url, "utf8") !== content;
}).map(([path]) => path);
const removed = [...remove];
if (CHECK) {
  for (const p of changed) console.log(`would change: ${p}`);
  for (const p of removed) console.log(`would remove: ${p}`);
  console.log(`codegen --check: ${changed.length + removed.length} file(s) out of date (${manifest.servers.length} servers)`);
  process.exit(changed.length + removed.length ? 1 : 0);
}
for (const p of changed) {
  mkdirSync(new URL(".", new URL(p, ROOT)), { recursive: true });
  writeFileSync(new URL(p, ROOT), out.get(p));
}
for (const p of removed) unlinkSync(new URL(p, ROOT));
console.log(`codegen: ${manifest.servers.length} servers; wrote ${changed.length} changed file(s), removed ${removed.length}`);
