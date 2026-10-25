// content.mjs — the portal-owned page text of each product: content/<slug>.json (who it is for + use cases).
// The text is checked against the product's real tools in manifest.json, so a page never names a tool that does not
// exist or promises a change that only read tools could make. build.mjs refuses to build on any error;
// `node content.mjs [slug...]` prints the errors (exit 1) for a quick check while writing.
// File shape: { "audience": "...", "useCases": [{ "title": "...", "text": "...", "tools": ["<tool>"], "changes": false }] }
//   audience  — who uses it, finishing "For ..." (no final period), e.g. "Shopify merchants who collect reviews with Loox"
//   changes   — true when the job creates, changes or deletes data: then at least one tool must be a write tool;
//               false: every tool must be a read tool.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const DIR = new URL("content/", import.meta.url);
const LIMITS = { audience: 120, title: 60, text: 240, min: 3, max: 6 };
// Claims we never make on a product page (the FAQ says we are independent; prices and limits come from the manifest).
const BANNED = [/\bofficial\b/i, /\bendorsed\b/i, /\bpartner(ship)?\b/i, /\bcertified\b/i, /\bunlimited\b/i, /\bfree\b/i, /\$\d/, /<|>/, /\*\*|`/];

function checkOne(slug, c, s) {
  const err = [];
  const tools = new Map((s.tools || []).map((t) => [t.name, t.type]));
  const str = (v, max, what) => {
    if (typeof v !== "string" || !v.trim()) return err.push(`${what}: missing`);
    if (v !== v.trim() || /\s{2,}|\n/.test(v)) err.push(`${what}: extra spaces or line breaks`);
    if (v.length > max) err.push(`${what}: ${v.length} chars (max ${max})`);
    for (const b of BANNED) if (b.test(v)) err.push(`${what}: banned text ${b} in "${v}"`);
  };
  const keys = Object.keys(c).filter((k) => !["audience", "useCases"].includes(k));
  if (keys.length) err.push(`unknown keys: ${keys.join(", ")}`);
  str(c.audience, LIMITS.audience, "audience");
  if (/\.$/.test(c.audience || "")) err.push("audience: no final period");
  if (/^for\b/i.test(c.audience || "")) err.push('audience: do not start with "For" (the page adds it)');
  const uc = Array.isArray(c.useCases) ? c.useCases : [];
  if (uc.length < LIMITS.min || uc.length > LIMITS.max) err.push(`useCases: ${uc.length} (need ${LIMITS.min}-${LIMITS.max})`);
  const titles = new Set();
  uc.forEach((u, i) => {
    const at = `useCases[${i}]`;
    const extra = Object.keys(u || {}).filter((k) => !["title", "text", "tools", "changes"].includes(k));
    if (extra.length) err.push(`${at}: unknown keys: ${extra.join(", ")}`);
    str(u?.title, LIMITS.title, `${at}.title`);
    str(u?.text, LIMITS.text, `${at}.text`);
    if (u?.title && titles.has(u.title.toLowerCase())) err.push(`${at}.title: duplicate`);
    titles.add(u?.title?.toLowerCase());
    if (!/[.!?]$/.test(u?.text || "")) err.push(`${at}.text: end with a period`);
    if (typeof u?.changes !== "boolean") err.push(`${at}.changes: must be true or false`);
    if (!Array.isArray(u?.tools) || !u.tools.length || u.tools.length > 4) return err.push(`${at}.tools: 1-4 tool names`);
    if (new Set(u.tools).size !== u.tools.length) err.push(`${at}.tools: duplicate tool`);
    for (const t of u.tools) {
      if (!tools.has(t)) err.push(`${at}.tools: no tool ${t} in ${slug}`);
      else if (tools.get(t) === "meta") err.push(`${at}.tools: ${t} is a meta tool (usage/billing), not a use case`);
    }
    const types = u.tools.map((t) => tools.get(t)).filter(Boolean);
    if (u.changes === true && !types.includes("write")) err.push(`${at}: changes is true but no write tool`);
    if (u.changes === false && types.includes("write")) err.push(`${at}: changes is false but it uses a write tool`);
  });
  return err.map((e) => `${slug}: ${e}`);
}

/** Map slug → content for the listed products that have a file, plus every error (unlisted file, bad shape, bad tool). */
export function loadContent(manifest, only) {
  const bySlug = new Map(manifest.servers.map((s) => [s.slug, s]));
  const content = new Map(), errors = [];
  const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".json")) : [];
  for (const f of files) {
    const slug = f.replace(/\.json$/, "");
    if (only && !only.includes(slug)) continue;
    const s = bySlug.get(slug);
    if (!s) { errors.push(`${slug}: content/${f} but no such server in manifest.json`); continue; }
    let c;
    try { c = JSON.parse(readFileSync(new URL(f, DIR), "utf8")); } catch (e) { errors.push(`${slug}: invalid JSON: ${e.message}`); continue; }
    const err = checkOne(slug, c, s);
    if (err.length) errors.push(...err); else content.set(slug, c);
  }
  return { content, errors };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const manifest = JSON.parse(readFileSync(new URL("manifest.json", import.meta.url), "utf8"));
  // --facts <slug...>: the manifest facts a writer may use (no pricing: the page prints it from the manifest).
  if (process.argv[2] === "--facts") {
    for (const slug of process.argv.slice(3)) {
      const s = manifest.servers.find((x) => x.slug === slug);
      if (!s) { console.log(`${slug}: not in manifest.json`); process.exitCode = 1; continue; }
      console.log(`# ${s.slug} — ${s.name} (category ${s.category}, login ${s.login?.kind ?? s.auth})\n${s.description}`);
      if (s.login?.hint) console.log(`Login hint: ${s.login.hint}`);
      console.log(`Examples:\n${(s.examples || []).map((e) => `- ${e}`).join("\n")}\nTools:`);
      for (const t of s.tools || []) if (t.type !== "meta") console.log(`- ${t.name} [${t.type}] ${t.title}: ${t.description}`);
      console.log("");
    }
    process.exit();
  }
  const only = process.argv.slice(2);
  const { content, errors } = loadContent(manifest, only.length ? only : undefined);
  // Local only (macOS word list): the audience follows "For", so a common first word must be lower case.
  const WORDS = "/usr/share/dict/words";
  if (existsSync(WORDS)) {
    const dict = new Set(readFileSync(WORDS, "utf8").split("\n"));
    for (const [slug, c] of content) {
      const w = c.audience.split(/\s/)[0];
      if (/^[A-Z][a-z]+$/.test(w) && [w, w.replace(/(es|s)$/, "")].some((x) => dict.has(x.toLowerCase()) && !dict.has(x))) errors.push(`${slug}: audience: start with a lower-case "${w.toLowerCase()}" (it follows "For")`);
    }
  }
  for (const e of errors) console.log(e);
  const missing = (only.length ? only : manifest.servers.map((s) => s.slug)).filter((s) => !content.has(s) && !errors.some((e) => e.startsWith(`${s}:`)));
  console.log(`${content.size} ok, ${errors.length} error(s)${missing.length ? `, ${missing.length} without content${only.length ? `: ${missing.join(" ")}` : ""}` : ""}`);
  process.exitCode = errors.length ? 1 : 0;
}
