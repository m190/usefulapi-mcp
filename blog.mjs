// blog.mjs — the portal blog: blog/<slug>.md, one short post per file (a use case, a how-to, a lesson).
// Each post is checked against manifest.json, so a post never names a tool or a server that does not exist.
// build.mjs refuses to build on any error; `node blog.mjs [slug...]` prints the errors (exit 1) while writing.
// File shape:
//   ---
//   title: Plan RotaCloud shifts from ChatGPT          (max 70 chars)
//   description: One sentence for search results.      (50-160 chars)
//   date: 2026-10-26                                    (YYYY-MM-DD; one original article per day)
//   products: rotacloud                                 (1+ live server slugs, space- or comma-separated)
//   lang: en                                           (optional: en, nl, es or de; defaults to en)
//   ---
// Titles name the workflow and a supported AI assistant. Rotate Claude, ChatGPT and Cursor across posts
// rather than repeatedly using the same assistant; check the most recent titles before choosing one.
// English originals live at blog/<slug>.md. Full translations live at blog/<lang>/<localized-slug>.md.
// Translations declare lang, translation (English slug), and source (SHA-256 of the English file).
// Run `node blog.mjs --sources` for current hashes. Keep dates/products identical across variants.
// Prioritize languages by the product audience, not vendor headquarters; retain English originals.
// Review the full translation after changing an original, then update its source hash. The build blocks
// stale translations. An optional aliases field permanently redirects published /blog/<slug>/ URLs.
//   Markdown body: ## and ### headings, paragraphs, "- " and "1. " lists, "> " prompt quotes, ``` code blocks,
//   inline `code`, **bold** and [links](https://... or /path/). No raw HTML: everything is escaped.
//   A `code` span that looks like a tool name (a_b) must be a tool of one of the post's products.
// Section order (AI answer engines quote the top of a page; a human decides in seconds): answer first, setup last.
//   1. intro: what you can do, in which assistant, and the server URL   2. ## Which prompt do I start with? (a > quote)
//   A prompt is what a user types: each > quote has at most PROMPT_MAX_WORDS words; options go in the text below it.
//   3. ## What does the AI do, step by step? (the tools)   4. ## a safety question (approvals, previews, what it never does)
//   5. ## What do I need? (1-2 lines + link to /<server>/). Headings are the questions users ask.
// Never publish usage numbers: with few users per server they show one customer's activity.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const DIR = new URL("blog/", import.meta.url);
const LIMITS = { title: 70, descMin: 50, descMax: 160 };
export { LOCALES as BLOG_LOCALES } from "./locales.mjs";
import { LOCALES as BLOG_LOCALES, blogPath, blogIndexPath } from "./locales.mjs";
import { createHash } from "node:crypto";
const headingId = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Claims we never make (we are independent; prices and limits come from the manifest and change).
const BANNED = [/\bofficial\b/i, /\bendorsed\b/i, /\bpartner(ship)?\b/i, /\bcertified\b/i, /\bunlimited\b/i, /\$\d/];
const TOOL_LIKE = /^[a-z0-9]+(?:_[a-z0-9]+)+$/;
const SAFE_URL = /^https:\/\/[A-Za-z0-9.-]+(?:\/[A-Za-z0-9._~%\/?#=&+:,;@!-]*)?$/;
// Internal links: the home page, a server page, /privacy/, /terms/, /blog/ or a post (an #anchor is allowed).
const INTERNAL = /^\/(?:(blog)\/(?:([a-z0-9-]+)\/)?|([a-z0-9-]+)\/)?(?:#[a-z0-9-]+)?$/;
const LOCALIZED_BLOG = new RegExp(`^/(${Object.keys(BLOG_LOCALES).filter(lang => lang !== "en").join("|")})/blog/(?:[a-z0-9-]+/)?(?:#[a-z0-9-]+)?$`);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function parse(text) {
  text = text.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: null, body: text };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim();
    else if (line.trim()) meta.__bad = line;
  }
  return { meta, body: m[2] };
}

// Inline Markdown → HTML. `code` spans are cut out first, so ** and [] inside them stay literal.
function inline(s, links) {
  const parts = s.split(/(`[^`]+`)/);
  return parts.map((p) => {
    if (/^`[^`]+`$/.test(p)) return `<code>${esc(p.slice(1, -1))}</code>`;
    return p.split(/(\[[^\]]+\]\([^)\s]+\))/).map((q) => {
      const l = q.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (l) {
        links.push(l[2]);
        const ext = !l[2].startsWith("/");
        return `<a href="${esc(l[2])}"${ext ? ' rel="nofollow noopener"' : ""}>${esc(l[1]).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")}</a>`;
      }
      return esc(q).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    }).join("");
  }).join("");
}

/** Markdown body → { html, codes: inline code texts, links: link targets, errors }. */
export function renderBody(md) {
  const out = [], codes = [], links = [], errors = [];
  let para = [], list = null, quote = [], fence = null;
  const il = (s) => { for (const c of s.match(/`[^`]+`/g) || []) codes.push(c.slice(1, -1)); return inline(s, links); };
  const flush = () => {
    if (para.length) { out.push(`<p>${il(para.join(" "))}</p>`); para = []; }
    if (list) { out.push(`<${list.tag}>${list.items.map((x) => `<li>${il(x)}</li>`).join("")}</${list.tag}>`); list = null; }
    if (quote.length) { out.push(`<blockquote class="prompt">${il(quote.join(" "))}</blockquote>`); quote = []; }
  };
  for (const raw of md.replace(/\r/g, "").split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (fence) {
      if (/^```\s*$/.test(line)) { out.push(`<pre class="code">${esc(fence.join("\n"))}</pre>`); fence = null; }
      else fence.push(raw);
      continue;
    }
    let m;
    if (/^```/.test(line)) { flush(); fence = []; }
    else if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      flush();
      const lvl = m[1].length;
      if (lvl < 2 || lvl > 3) errors.push(`heading "${m[2]}": use ## or ### (the title is the only h1)`);
      const id = headingId(m[2]);
      out.push(`<h${lvl} id="${id}">${il(m[2])}</h${lvl}>`);
    } else if (/^\s+([-*]|\d+\.)\s/.test(line)) {
      errors.push(`nested list item "${line.trim()}": nested lists are not supported`);
    } else if ((m = line.match(/^([-*]|\d+\.)\s+(.*)$/))) {
      const tag = /\d/.test(m[1]) ? "ol" : "ul";
      if (para.length || quote.length || (list && list.tag !== tag)) flush();
      list = list || { tag, items: [] };
      list.items.push(m[2]);
    } else if ((m = line.match(/^>\s?(.*)$/))) {
      if (para.length || list) flush();
      quote.push(m[1]);
    } else if (line.trim() === "") flush();
    else if (list) list.items[list.items.length - 1] += " " + line.trim();
    else if (quote.length) quote.push(line.trim());
    else para.push(line.trim());
  }
  if (fence) errors.push("a ``` code block is not closed");
  flush();
  if (/<[a-z/!]/i.test(md.replace(/```[\s\S]*?```/g, "").replace(/`[^`]+`/g, ""))) errors.push("raw HTML is not allowed (it is shown as text)");
  return { html: out.join("\n"), codes, links, errors };
}

const PROMPT_MAX_WORDS = 30;

/** Word counts of every > quote (prompt) in the rendered HTML; hasStart: one comes right after "## Which prompt ...". */
export function promptWords(html, lang = "en") {
  const words = [...html.matchAll(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g)].map((m) => m[1].replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length);
  const copy = Object.hasOwn(BLOG_LOCALES, lang) ? BLOG_LOCALES[lang] : BLOG_LOCALES.en;
  const startId = lang === "en" ? "which-prompt[^\"]*" : headingId(copy.promptHeading);
  return { hasStart: new RegExp(`<h2 id="${startId}">(?:(?!<\\/h2>)[\\s\\S])*<\\/h2>\\s*<blockquote`).test(html), words };
}

export function checkOne(slug, text, bySlug, today) {
  const err = [];
  const { meta, body } = parse(text);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) err.push("file name: use a-z, 0-9 and single hyphens");
  if (!meta) return { err: [...err, "no front matter (--- ... --- at the top)"] };
  if (meta.__bad) err.push(`front matter: bad line "${meta.__bad}"`);
  const extra = Object.keys(meta).filter((k) => !["title", "description", "date", "products", "lang", "translation", "source", "aliases", "__bad"].includes(k));
  if (extra.length) err.push(`front matter: unknown keys: ${extra.join(", ")}`);
  const lang = meta.lang ?? "en";
  if (!Object.hasOwn(BLOG_LOCALES, lang)) err.push(`lang: "${lang}" is not supported (use en, nl, es or de)`);
  const copy = Object.hasOwn(BLOG_LOCALES, lang) ? BLOG_LOCALES[lang] : BLOG_LOCALES.en;
  if (lang === "en" && (meta.translation || meta.source)) err.push("English originals cannot declare translation or source");
  if (lang !== "en") {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(meta.translation ?? "")) err.push("translation: name the English original's slug");
    if (!/^[a-f0-9]{64}$/.test(meta.source ?? "")) err.push("source: provide the English file's SHA-256 hash");
  }
  const aliases = (meta.aliases || "").split(/\s+/).filter(Boolean);
  if (aliases.some(a => !/^\/blog\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(a))) err.push("aliases: use legacy /blog/<slug>/ paths");
  const str = (v, min, max, what) => {
    if (!v) return err.push(`${what}: missing`);
    if (v.length < min || v.length > max) err.push(`${what}: ${v.length} chars (need ${min}-${max})`);
  };
  str(meta.title, 10, LIMITS.title, "title");
  str(meta.description, LIMITS.descMin, LIMITS.descMax, "description");
  if (meta.description && !/[.!?]$/.test(meta.description)) err.push("description: end with a period");
  const d = meta.date || "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || isNaN(Date.parse(d + "T00:00:00Z")) || new Date(d + "T00:00:00Z").toISOString().slice(0, 10) !== d) err.push(`date: "${d}" is not YYYY-MM-DD`);
  else if (d > today) err.push(`date: ${d} is in the future`);
  const products = (meta.products || "").split(/[\s,]+/).filter(Boolean);
  if (!products.length) err.push("products: name at least one server slug");
  for (const p of products) {
    const s = bySlug.get(p);
    if (!s) err.push(`products: no server ${p} in manifest.json`);
    else if (s.status !== "live") err.push(`products: ${p} is not live`);
  }
  const r = renderBody(body);
  const pw = promptWords(r.html, lang);
  if (!pw.hasStart) err.push(`body: no start prompt (a "> " quote right under "## ${copy.promptHeading}")`);
  for (const n of pw.words) {
    if (n === 0) err.push("prompt: an empty > quote");
    else if (n > PROMPT_MAX_WORDS) err.push(`prompt: ${n} words (max ${PROMPT_MAX_WORDS}): write it as a user types it; put options in the text below`);
  }
  err.push(...r.errors);
  if (!r.html.trim()) err.push("body: empty");
  for (const v of [meta.title, meta.description, body.replace(/```[\s\S]*?```/g, "")]) {
    for (const b of BANNED) if (v && b.test(v)) err.push(`banned text ${b} in "${(v.match(b) || [""])[0]}"`);
  }
  const tools = new Set(products.flatMap((p) => (bySlug.get(p)?.tools || []).map((t) => t.name)));
  for (const c of r.codes) if (TOOL_LIKE.test(c) && !tools.has(c)) err.push(`\`${c}\` is not a tool of ${products.join(", ") || "the post's products"}`);
  for (const l of r.links) {
    if (l.startsWith("/")) {
      const m = l.match(INTERNAL);
      if (LOCALIZED_BLOG.test(l)) continue;
      if (!m) err.push(`link ${l}: use /, /<server>/, /privacy/, /terms/, /blog/ or /blog/<post>/`);
      else if (m[3] && !["privacy", "terms"].includes(m[3]) && !bySlug.has(m[3])) err.push(`link ${l}: no such server page`);
    } else if (!SAFE_URL.test(l)) err.push(`link ${l}: only https:// or /internal/ links`);
  }
  return { err, post: { slug, title: meta.title, description: meta.description, date: d, products, lang, id: meta.translation || slug, source: meta.source, aliases, html: r.html, links: r.links } };
}

/** Validate the article registry: translations are siblings, never extra publication days. */
export function validateTranslations(posts) {
  const errors = [], originals = new Map(posts.filter(p => p.lang === "en").map(p => [p.id, p]));
  const identities = new Set(), paths = new Set(posts.map(blogPath));
  const dates = new Map(), aliases = new Set();
  for (const p of posts) {
    const key = `${p.id}:${p.lang}`;
    if (identities.has(key)) errors.push(`${p.file}: duplicate language ${p.lang} for ${p.id}`);
    identities.add(key);
    const original = originals.get(p.id);
    if (p.lang !== "en") {
      if (!original) errors.push(`${p.file}: no English original ${p.id}`);
      else {
        if (p.date !== original.date) errors.push(`${p.file}: publication date must match ${p.id}`);
        if ([...p.products].sort().join(",") !== [...original.products].sort().join(",")) errors.push(`${p.file}: products must match ${p.id}`);
        if (p.source !== original.hash) errors.push(`${p.file}: translation needs review; source hash differs from ${p.id}`);
      }
    } else {
      if (dates.has(p.date)) errors.push(`date ${p.date}: multiple originals (${dates.get(p.date)}, ${p.id}): use one article per day`);
      dates.set(p.date, p.id);
    }
    for (const alias of p.aliases || []) {
      if (paths.has(alias) || aliases.has(alias)) errors.push(`${p.file}: alias ${alias} conflicts with another page`);
      aliases.add(alias);
    }
    for (const link of p.links || []) {
      const path = link.split("#")[0];
      if (/^\/(?:[a-z]{2}\/)?blog\//.test(path) && !paths.has(path) && !Object.keys(BLOG_LOCALES).some(lang => blogIndexPath(lang) === path))
        errors.push(`${p.file}: link ${link}: no such blog page`);
    }
  }
  return errors;
}

/** Load originals and full translations; only controls output, never bypasses registry validation. */
export function loadBlog(manifest, only, today = new Date().toISOString().slice(0, 10), dir = DIR) {
  const bySlug = new Map(manifest.servers.map((s) => [s.slug, s]));
  const posts = [], errors = [], files = [];
  if (existsSync(dir)) for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".md")) files.push({ file: entry.name, folderLang: "en" });
    else if (entry.isDirectory()) {
      if (!Object.hasOwn(BLOG_LOCALES, entry.name) || entry.name === "en") { errors.push(`blog/${entry.name}: unsupported language folder`); continue; }
      for (const name of readdirSync(new URL(`${entry.name}/`, dir)))
        if (name.endsWith(".md")) files.push({ file: `${entry.name}/${name}`, folderLang: entry.name });
    }
  }
  for (const { file, folderLang } of files) {
    const slug = file.split("/").at(-1).replace(/\.md$/, "");
    const text = readFileSync(new URL(file, dir), "utf8");
    const { err, post } = checkOne(slug, text, bySlug, today);
    if (post && post.lang !== folderLang) err.push(`lang: must match folder language ${folderLang}`);
    if (err.length) errors.push(...err.map(e => `blog/${file}: ${e}`));
    else posts.push({ ...post, file: `blog/${file}`, hash: sourceHash(text) });
  }
  errors.push(...validateTranslations(posts));
  posts.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id) || a.lang.localeCompare(b.lang));
  return { posts: only ? posts.filter(p => only.includes(p.slug) || only.includes(p.id)) : posts, errors };
}
export const sourceHash = text => createHash("sha256").update(text.replace(/\r\n?/g, "\n")).digest("hex");

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const manifest = JSON.parse(readFileSync(new URL("manifest.json", import.meta.url), "utf8"));
  const sources = process.argv.includes("--sources");
  const only = process.argv.slice(2).filter(a => a !== "--sources");
  const { posts, errors } = loadBlog(manifest, only.length ? only : undefined);
  if (sources) for (const p of posts.filter(p => p.lang === "en")) console.log(`${p.id} ${p.hash}`);
  for (const e of errors) console.log(e);
  console.log(`${posts.length} ok, ${errors.length} error(s)`);
  process.exitCode = errors.length ? 1 : 0;
}
