#!/usr/bin/env node
// codegen.mjs — regenerate the COMMITTED artifacts from manifest.json (the single
// source of truth), so they can never drift from it:
//   servers/<slug>/server.json  — spec-valid MCP Registry record (io.usefulapi/<slug>)
//   servers/<slug>/README.md    — the ## Tools and ## Pricing sections
//   README.md (root)            — the Servers table
// Run after editing manifest.json, then commit. build.mjs (the site) stays separate.
import { readFileSync, writeFileSync } from "node:fs";

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
function pkgVersion(slug) {
  try {
    return JSON.parse(readFileSync(new URL(`../servers/${slug}-mcp/package.json`, ROOT), "utf8")).version || null;
  } catch {
    return null;
  }
}
let versionSynced = 0;
for (const s of manifest.servers) {
  const v = pkgVersion(s.slug);
  if (v && v !== s.version) { s.version = v; versionSynced++; }
  else if (!s.version) s.version = v || "1.0.0";
}
if (versionSynced) {
  writeFileSync(new URL("manifest.json", ROOT), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`codegen: synced ${versionSynced} version(s) from package.json → manifest.json`);
}
const SCHEMA = "https://static.modelcontextprotocol.io/schemas/2025-07-09/server.schema.json";

// ---- server.json ------------------------------------------------------------
function serverJson(s) {
  return (
    JSON.stringify(
      {
        $schema: SCHEMA,
        name: `${registryNamespace}/${s.slug}`,
        description: s.description,
        version: s.version || "1.0.0",
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
    "`meta` tools report usage or manage your subscription.\n"
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
  return `## Pricing\n\n| Plan | Price | Limit |\n|------|-------|-------|\n${rows}\n`;
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
