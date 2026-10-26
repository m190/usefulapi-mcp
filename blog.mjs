// blog.mjs — the portal blog: blog/<slug>.md, one short post per file (a use case, a how-to, a lesson).
// Each post is checked against manifest.json, so a post never names a tool or a server that does not exist.
// build.mjs refuses to build on any error; `node blog.mjs [slug...]` prints the errors (exit 1) while writing.
// File shape:
//   ---
//   title: Plan RotaCloud shifts from ChatGPT          (max 70 chars)
//   description: One sentence for search results.      (50-160 chars)
//   date: 2026-10-26                                    (YYYY-MM-DD, not in the future)
//   products: rotacloud                                 (1+ live server slugs, space- or comma-separated)
//   ---
//   Markdown body: ## and ### headings, paragraphs, "- " and "1. " lists, "> " prompt quotes, ``` code blocks,
//   inline `code`, **bold** and [links](https://... or /path/). No raw HTML: everything is escaped.
//   A `code` span that looks like a tool name (a_b) must be a tool of one of the post's products.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const DIR = new URL("blog/", import.meta.url);
const LIMITS = { title: 70, descMin: 50, descMax: 160 };
// Claims we never make (we are independent; prices and limits come from the manifest and change).
const BANNED = [/\bofficial\b/i, /\bendorsed\b/i, /\bpartner(ship)?\b/i, /\bcertified\b/i, /\bunlimited\b/i, /\$\d/];
const TOOL_LIKE = /^[a-z0-9]+(?:_[a-z0-9]+)+$/;
const SAFE_URL = /^https:\/\/[A-Za-z0-9.-]+(?:\/[A-Za-z0-9._~%\/?#=&+:,;@!-]*)?$/;
// Internal links: the home page, a server page, /privacy/, /terms/, /blog/ or a post (an #anchor is allowed).
const INTERNAL = /^\/(?:(blog)\/(?:([a-z0-9-]+)\/)?|([a-z0-9-]+)\/)?(?:#[a-z0-9-]+)?$/;

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
      const id = m[2].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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

function checkOne(slug, text, bySlug, today) {
  const err = [];
  const { meta, body } = parse(text);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) err.push("file name: use a-z, 0-9 and single hyphens");
  if (!meta) return { err: [...err, "no front matter (--- ... --- at the top)"] };
  if (meta.__bad) err.push(`front matter: bad line "${meta.__bad}"`);
  const extra = Object.keys(meta).filter((k) => !["title", "description", "date", "products", "__bad"].includes(k));
  if (extra.length) err.push(`front matter: unknown keys: ${extra.join(", ")}`);
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
      if (!m) err.push(`link ${l}: use /, /<server>/, /privacy/, /terms/, /blog/ or /blog/<post>/`);
      else if (m[3] && !["privacy", "terms"].includes(m[3]) && !bySlug.has(m[3])) err.push(`link ${l}: no such server page`);
    } else if (!SAFE_URL.test(l)) err.push(`link ${l}: only https:// or /internal/ links`);
  }
  return { err, post: { slug, title: meta.title, description: meta.description, date: d, products, html: r.html, links: r.links } };
}

/** Posts (newest first) for the listed slugs that have a file, plus every error. */
export function loadBlog(manifest, only, today = new Date().toISOString().slice(0, 10)) {
  const bySlug = new Map(manifest.servers.map((s) => [s.slug, s]));
  const posts = [], errors = [];
  const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".md")) : [];
  for (const f of files) {
    const slug = f.replace(/\.md$/, "");
    if (only && !only.includes(slug)) continue;
    const { err, post } = checkOne(slug, readFileSync(new URL(f, DIR), "utf8"), bySlug, today);
    if (err.length) errors.push(...err.map((e) => `blog/${f}: ${e}`)); else posts.push(post);
  }
  // Links between posts must point at a post that exists.
  const known = new Set(posts.map((p) => p.slug));
  if (!only) for (const p of posts) for (const l of p.links) {
    const m = l.match(/^\/blog\/([a-z0-9-]+)\//);
    if (m && !known.has(m[1])) errors.push(`blog/${p.slug}.md: link ${l}: no such post`);
  }
  posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  return { posts, errors };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const manifest = JSON.parse(readFileSync(new URL("manifest.json", import.meta.url), "utf8"));
  const only = process.argv.slice(2);
  const { posts, errors } = loadBlog(manifest, only.length ? only : undefined);
  for (const e of errors) console.log(e);
  console.log(`${posts.length} ok, ${errors.length} error(s)`);
  process.exitCode = errors.length ? 1 : 0;
}
