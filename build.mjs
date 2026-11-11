#!/usr/bin/env node
// build.mjs — assemble the usefulapi.io static site into <outDir> (default: dist).
// Run in-repo (Cloudflare Pages build command: `node build.mjs dist`, output dir `dist`).
//   <outDir>/index.html            (homepage with search, categories and 12 featured integrations)
//   <outDir>/servers/              (static directory, 24 integrations per page)
//   <outDir>/search-index.json     (compact search data, derived from manifest.json)
//   <outDir>/privacy/index.html    (rendered from legal/privacy.md)
//   <outDir>/terms/index.html      (rendered from legal/terms.md)
// Minimal md->html tuned to the legal docs. No deps.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from "node:fs";
import { loadContent } from "./content.mjs";
import { loadBlog } from "./blog.mjs";
import { PAGE_SIZE, cardsHtml, normalize, paginate, paginationHtml, selectServers, staticPagePath } from "./portal/catalog-model.mjs";

const ROOT = new URL("./", import.meta.url);          // repo root (this file's dir)
const outDir = process.argv[2] || "dist";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function inline(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, (_, x) => `<code>${x}</code>`);
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, (_, x) => `<strong>${x}</strong>`);
  return s;
}
function mdToHtml(md) {
  md = md.replace(/^\s*<!--[\s\S]*?-->\s*/, "").trim();
  const out = [];
  let para = [], list = [];
  const flushPara = () => { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } };
  const flushList = () => { if (list.length) { out.push("<ul>" + list.map((x) => "<li>" + inline(x) + "</li>").join("") + "</ul>"); list = []; } };
  for (const raw of md.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (/^#{1,4}\s/.test(line)) {
      flushPara(); flushList();
      const lvl = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s/, "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      out.push(`<h${lvl} id="${id}">${inline(text)}</h${lvl}>`);
    } else if (/^\s*-\s+/.test(line)) {
      flushPara(); list.push(line.replace(/^\s*-\s+/, ""));
    } else if (line.trim() === "") {
      flushPara(); flushList();
    } else if (list.length) {
      list[list.length - 1] += " " + line.trim();
    } else {
      if (/^\*\*/.test(line.trim())) flushPara();
      para.push(line.trim());
    }
  }
  flushPara(); flushList();
  return out.join("\n");
}
// Shared top bar on every page: logo (home), main sections, custom work at the top right.
// On phones "Integrations" hides (the logo leads to the search page) so the bar stays on one row.
const NAV = [["/servers/", "Integrations", "nav-wide"], ["/blog/", "Blog"], ["/services/", "Custom integration →", "nav-cta"]];
const topbar = (current = "") => `<header class="topbar"><a class="logo" href="/" aria-label="usefulapi home"><img src="/icon.svg" width="28" height="28" alt=""><span>usefulapi</span></a>` +
  `<nav aria-label="Main">${NAV.map(([href, label, cls]) => `<a href="${href}"${cls ? ` class="${cls}"` : ""}${current === href ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav></header>`;
// SITE_CSS: the one shared base for every page (appended last, so it wins): colours, page width, headings,
// top bar, footer, search field, category pills. Page CSS keeps only page-specific layout.
const CHEV = (c) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23${c}' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
const SITE_CSS = `
:root{--bg:#fbfbfa;--fg:#1a1a1a;--muted:#626262;--card:#fff;--border:#e6e6e3;--accent:#0f766e;--on-accent:#fff;--chip:#f0f0ee;--chev:${CHEV("626262")}}
@media(prefers-color-scheme:dark){:root{--bg:#0f0f11;--fg:#ececec;--muted:#aaa;--card:#17171a;--border:#2e2e33;--accent:#14b8a6;--on-accent:#0f0f11;--chip:#212125;--chev:${CHEV("aaaaaa")}}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:1008px;margin:0 auto;padding:20px 24px 56px}
h1{font-size:32px;line-height:1.2;letter-spacing:-.025em}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.crumbs{margin:0 0 16px;font-size:13px;color:var(--muted)}.crumbs a{color:var(--muted);text-decoration:none}.crumbs a:hover{color:var(--accent);text-decoration:none}
.topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 40px;font-size:14px;line-height:1.3}
.topbar .logo{display:flex;align-items:center;gap:8px;color:var(--fg);font-weight:700;font-size:17px;letter-spacing:-.01em;text-decoration:none}
.topbar .logo img{display:block;border-radius:7px}
.topbar nav{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:6px 18px}
.topbar nav a{color:var(--muted);text-decoration:none}.topbar nav a:hover,.topbar nav a[aria-current]{color:var(--fg);text-decoration:none}
.topbar .nav-cta{color:var(--accent);border:1px solid var(--border);border-radius:999px;padding:6px 12px}.topbar .nav-cta:hover,.topbar .nav-cta[aria-current]{color:var(--accent);border-color:var(--accent)}
footer.site{margin-top:56px;padding-top:22px;border-top:1px solid var(--border);color:var(--muted);font-size:13px;line-height:1.55}
footer.site p{margin:0 0 10px}footer.site nav{display:flex;flex-wrap:wrap;gap:8px 18px}
footer.site a{color:var(--muted);text-decoration:none}footer.site a:hover{color:var(--accent);text-decoration:none}
.search-form{margin:0 0 32px}
.search-field{position:relative;min-width:0}
.search-field svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none}
.search-field input{width:100%;height:46px;margin:0;padding:0 96px 0 40px;background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:10px;font:inherit;font-size:16px;-webkit-appearance:none;appearance:none}
.search-field input::placeholder{color:var(--muted);opacity:1}
.search-field input:focus{border-color:var(--accent)}
.search-field input::-webkit-search-cancel-button{display:none}
.search-submit{position:absolute;top:5px;right:5px;bottom:5px;padding:0 14px;border:0;border-radius:7px;background:var(--accent);color:var(--on-accent);font:inherit;font-size:14px;font-weight:600;cursor:pointer}
.search-submit:hover{filter:brightness(1.08)}
.category-links{display:flex;flex-wrap:wrap;gap:8px}
.category-link{display:inline-flex;gap:8px;align-items:center;border:1px solid var(--border);border-radius:999px;padding:7px 14px;color:var(--fg);font-size:14px;line-height:1.3;background:var(--card);white-space:nowrap;text-decoration:none}
.category-link:hover{border-color:var(--accent);color:var(--accent);text-decoration:none}
.category-link span{color:var(--muted);font-size:13px;font-variant-numeric:tabular-nums}
@media(max-width:560px){
.wrap{padding:16px 16px 44px}h1{font-size:26px}
.topbar{margin-bottom:28px}.topbar .logo span,.topbar .nav-wide{display:none}.topbar nav{flex-wrap:nowrap;gap:14px}.topbar .nav-cta{white-space:nowrap}
.search-form{margin-bottom:26px}
/* One row that scrolls sideways, so the categories do not push the content off the first screen. */
.category-links{flex-wrap:nowrap;overflow-x:auto;margin:-8px -16px 0;padding:8px 56px 8px 16px;scrollbar-width:none;scroll-padding:0 56px 0 16px;-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 48px),transparent);mask-image:linear-gradient(to right,#000 calc(100% - 48px),transparent)}
/* The end padding (56px) is wider than the fade (48px), so the last pill scrolls clear of it; no fade while a pill has focus. */
.category-links:focus-within{-webkit-mask-image:none;mask-image:none}
.category-links::-webkit-scrollbar{display:none}.category-link{flex:none}.category-link:focus-visible{outline-offset:2px}}`;
const SITE_FOOTER = `<footer class="site"><p>Connect from Claude, ChatGPT, Cursor, or any MCP client.</p><nav aria-label="Footer"><a href="/servers/">All integrations</a><a href="/services/">Custom integrations</a><a href="/blog/">Blog</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="mailto:support@usefulapi.io">support@usefulapi.io</a></nav></footer>`;
// One search field (homepage, directory, category pages, 404); it submits to the directory.
const searchField = (n) => `<label class="sr-only" for="search">Search all integrations</label><div class="search-field">` +
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 5 5"></path></svg>` +
  `<input id="search" name="q" type="search" placeholder="Search ${n} integrations" autocomplete="off"><button class="search-submit" type="submit">Search</button></div>`;
const SHELL = (title, body, current = "") => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} — usefulapi</title>
<style>
 a{color:var(--accent)} h1{margin:0 0 24px}
 h2{font-size:20px;margin:36px 0 10px} p{margin:0 0 14px} ul,ol{margin:0 0 14px;padding-left:22px}
 li{margin:4px 0} code{background:var(--chip);padding:2px 6px;border-radius:6px;font-size:13px}
 .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
 .notfound .search-form{margin:20px 0 28px}.notfound h2{font-size:16px;margin:0 0 12px}
${SITE_CSS}
</style></head><body><div class="wrap">
${topbar(current)}
${body}
${SITE_FOOTER}
</div></body></html>`;
const render = (mdName, title) => SHELL(title, mdToHtml(readFileSync(new URL(`legal/${mdName}`, ROOT), "utf8")));

// ---- per-product pages (generated from manifest.json — the single source of truth) ----
const manifest = JSON.parse(readFileSync(new URL("manifest.json", ROOT), "utf8"));
const SITE = manifest.portal.domain.replace(/\/$/, "");
// Portal-owned page text (content/<slug>.json: audience + use cases), checked against each product's real tools.
const { content: CONTENT, errors: contentErrors } = loadContent(manifest);
if (contentErrors.length) throw new Error(`content/ has ${contentErrors.length} error(s):\n${contentErrors.join("\n")}`);
// Blog posts (blog/<slug>.md, newest first), checked against the manifest's servers and tools.
const { posts: POSTS, errors: blogErrors } = loadBlog(manifest);
if (blogErrors.length) throw new Error(`blog/ has ${blogErrors.length} error(s):\n${blogErrors.join("\n")}`);
const postPath = (p) => `/blog/${p.slug}/`;
const postsFor = (s) => POSTS.filter((p) => p.products.includes(s.slug));
const dateText = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// URL + SEO helpers. Canonical page URLs carry the trailing slash: Pages serves /<slug>/index.html
// and 308-redirects /<slug> → /<slug>/, so links/sitemap/canonical all use the final form.
const pagePath = (s) => `/${s.slug}/`;
const groupSlug = (g) => g.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const categoryPath = (g) => `/category/${groupSlug(g)}/`;
const attr = (s) => esc(String(s)).replace(/"/g, "&quot;");
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const headMeta = ({ title, desc, url }) => `<meta name="description" content="${attr(desc)}">
<link rel="canonical" href="${attr(url)}">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="usefulapi">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:url" content="${attr(url)}">
<meta property="og:image" content="${SITE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(desc)}">
<meta name="twitter:image" content="${SITE}/og.png">`;

// Guardrail: the MCP Registry caps server.json `description` at 100 chars. Fail the
// build rather than ship a record the registry will reject.
for (const s of manifest.servers) {
  if ((s.description || "").length > 100) {
    throw new Error(`description for "${s.slug}" is ${s.description.length} chars (max 100): ${s.description}`);
  }
}

// Derived (never stored, so they can't drift): tool count + GitHub docs link.
const toolCount = (s) => (s.tools ? s.tools.length : 0);
const docsUrl = (s) => `${manifest.portal.repository.url}/tree/main/servers/${s.slug}`;
// "$9/mo · $90/yr" — a Free/$0 tier just shows "$0".
const priceText = (p) => {
  if (!p.monthly || p.monthly === "$0") return "$0";
  return [p.monthly && `${p.monthly}/mo`, p.yearly && `${p.yearly}/yr`].filter(Boolean).join(" · ");
};
const proTier = (s) => (s.pricing || []).find((p) => /^pro$/i.test(p.plan));
const plusTier = (s) => (s.pricing || []).find((p) => /^pro\+$/i.test(p.plan));
const freeTier = (s) => (s.pricing || []).find((p) => /free/i.test(p.plan));
// Compatibility for older manifest entries that still describe Pro as "Unlimited".
const PRO_FAIR_USE = "fair use limit: 10,000 tool calls a month";
const isUnlimitedPro = (p) => /pro/i.test(p.plan) && /^unlimited$/i.test(p.limit);
/** The limit as a sentence shows it: Pro's "Unlimited" carries its fair use limit. */
const limitText = (p) => (isUnlimitedPro(p) ? `${p.limit} (${PRO_FAIR_USE})` : p.limit);
const MARK = `<svg class="mark" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14b8a6"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs><rect width="512" height="512" rx="114" fill="url(#tl)"/><g fill="#fff"><circle cx="169" cy="256" r="61"/><circle cx="343" cy="256" r="61"/><rect x="169" y="223" width="174" height="66" rx="33"/></g></svg>`;
const PRODUCT_CSS = `
a{color:inherit}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.brand .mark{width:38px;height:38px;border-radius:10px;flex:none}
h1{margin:0}
.sub{color:var(--muted);font-size:17px;margin:0 0 28px;max-width:52ch}.sub strong{color:var(--fg)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:16px}
.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px 22px}
.card h2{font-size:16px;margin:0 0 4px}.card b{color:var(--fg)}
.lead{color:var(--muted);font-size:14px;margin:0}
ol{margin:8px 0 0;padding-left:18px}li{margin:7px 0}
.url{display:block;margin:0;padding:11px 62px 11px 13px;background:var(--chip);border:1px solid var(--border);border-radius:8px;font:13.5px ui-monospace,SFMono-Regular,Menlo,monospace;word-break:break-all}
.copywrap{position:relative;margin-top:8px}
.copy{position:absolute;right:8px;padding:3px 9px;font:12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:var(--muted);background:var(--bg);border:1px solid var(--border);border-radius:6px;cursor:pointer}
.copy:hover{color:var(--accent);border-color:var(--accent)}.copy.ok{color:#12873f;border-color:#12873f}
@media (prefers-color-scheme:dark){.copy.ok{color:#5fd68a;border-color:#5fd68a}}
.copywrap.line .copy{top:50%;transform:translateY(-50%)}.copywrap.block .copy{top:8px}
pre.code{margin:0;padding:11px 62px 11px 13px;background:var(--chip);border:1px solid var(--border);border-radius:8px;font:13px ui-monospace,SFMono-Regular,Menlo,monospace;overflow-x:auto;white-space:pre-wrap;word-break:break-all}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:18px}
.chip{background:var(--chip);border-radius:999px;padding:3px 10px;font-size:12px;color:var(--muted)}
.chip.live{color:#12873f}@media (prefers-color-scheme:dark){.chip.live{color:#5fd68a}}
.hint{color:var(--muted);font-size:14px;margin:24px 0 0;max-width:560px}
code{background:var(--chip);padding:2px 6px;border-radius:6px;font-size:13px;overflow-wrap:anywhere}
h2.sec{font-size:22px;letter-spacing:-.01em;margin:44px 0 14px}
h2.sec .n{color:var(--muted);font-weight:400;font-size:16px}
table{width:100%;border-collapse:collapse;font-size:14px}
table th{text-align:left;color:var(--muted);font-weight:500;font-size:12px;text-transform:uppercase;letter-spacing:.04em;padding:0 12px 8px 0;border-bottom:1px solid var(--border)}
table td{padding:10px 12px 10px 0;border-bottom:1px solid var(--border);vertical-align:top}
table tr:last-child td{border-bottom:0}
.tools td:first-child{white-space:nowrap}.tools code{font-size:12.5px}
.tag{display:inline-block;font-size:11px;padding:1px 8px;border-radius:999px;text-transform:uppercase;letter-spacing:.03em;background:var(--chip);color:var(--muted)}
.tag.write{color:#b4530a;background:#fbeae0}.tag.read{color:#12873f;background:#e7f5ec}.tag.meta{color:var(--accent);background:var(--chip)}
@media (prefers-color-scheme:dark){.tag.write{color:#f0a978;background:#2a1a10}.tag.read{color:#5fd68a;background:#12241a}}
.pricing td:first-child{font-weight:600}.pricing .scope{font-weight:400;color:var(--muted);font-size:12px;margin-left:6px}
.uses{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:12px}
.use h3{font-size:15px;margin:0 0 6px}.use p{margin:0;font-size:14px}.use .via{color:var(--muted);font-size:12px;margin-top:8px}
.tname{font-weight:600;font-size:13px}.tdesc{color:var(--muted);font-size:13px;margin-top:2px}
.rel{display:flex;flex-wrap:wrap;gap:8px}.rel a{background:var(--chip);border-radius:999px;padding:4px 12px;font-size:13px;text-decoration:none}.rel a:hover{color:var(--accent)}
.hint a{color:var(--accent)}a.tname{text-decoration:none}a.tname:hover{color:var(--accent)}
.card h2 .for{font-weight:400;color:var(--muted);font-size:13px;margin-left:4px}.lead.small{font-size:13px;margin-top:10px}
.lead a{color:var(--accent)}.btn{display:inline-block;margin:2px 0;padding:4px 12px;border-radius:8px;background:var(--accent);color:#fff!important;text-decoration:none;font-size:13px;font-weight:600}
.card .lead+.copywrap{margin-top:10px}.prose p{margin:0 0 10px;font-size:15px}.prose p:last-child{margin:0}.prose a{color:var(--accent)}
.prompts{margin:0;padding:0;list-style:none;display:grid;gap:8px}.prompts li{margin:0;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 14px;font-size:15px}
.prompts li::before{content:"“";color:var(--muted)}.prompts li::after{content:"”";color:var(--muted)}
.faq details{border-bottom:1px solid var(--border);padding:12px 0}.faq summary{cursor:pointer;font-weight:600}.faq p{margin:8px 0 0;color:var(--muted);font-size:15px}.faq a{color:var(--accent)}
.posts{list-style:none;margin:0;padding:0;display:grid;gap:12px}.posts li{margin:0;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 18px}
.posts a{font-weight:600;text-decoration:none}.posts a:hover{color:var(--accent)}.posts p{margin:4px 0 0;color:var(--muted);font-size:14px}.posts .date{color:var(--muted);font-size:12px}
.more-posts{display:block;margin:20px auto 0;padding:10px 18px;border:1px solid var(--border);border-radius:10px;background:var(--card);color:var(--fg);font:inherit;font-size:15px;font-weight:600;cursor:pointer}.more-posts:hover{border-color:var(--accent)}.more-posts:focus-visible{outline:3px solid var(--accent);outline-offset:3px}.more-posts[hidden]{display:none}
.post h1{margin:0 0 8px}.post .meta{color:var(--muted);font-size:14px;margin:0 0 28px}.post .meta a{color:var(--accent)}
.post h2{font-size:21px;letter-spacing:-.01em;margin:34px 0 10px}.post h3{font-size:17px;margin:26px 0 8px}.post p{margin:0 0 14px}
.post ul,.post ol{margin:0 0 14px;padding-left:22px}.post li{margin:5px 0}.post a{color:var(--accent)}.post pre.code{margin:0 0 14px}
.post blockquote.prompt{margin:0 0 14px;background:var(--card);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:10px;padding:10px 14px}
@media (max-width:560px){table td{overflow-wrap:anywhere}.tools td:first-child{white-space:normal;max-width:38vw}.tools code{word-break:break-all}.brand .mark{width:34px;height:34px}h1{font-size:27px}.sub{font-size:15px;margin-bottom:22px}}
${SITE_CSS}`;
// Product page only: the facts bar, the client tabs, the closed tool list.
const PAGE_CSS = `
.url,pre.code{word-break:normal;overflow-wrap:anywhere}
.btn{color:var(--on-accent)!important}
.facts{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;margin:0 0 8px;font-size:15px}
.facts .f{color:var(--muted)}.facts .f b{color:var(--fg)}.facts .f a{color:var(--accent)}
.cta{display:inline-block;padding:10px 18px;border-radius:10px;background:var(--accent);color:var(--on-accent)!important;text-decoration:none;font-weight:600;font-size:15px}
.cta:hover{filter:brightness(1.08)}
.lead-in{color:var(--muted);margin:-4px 0 14px;font-size:15px}
.need{margin-bottom:16px}.need h3{font-size:16px;margin:0 0 8px}
.tabs{display:none;flex-wrap:wrap;gap:6px;margin:0 0 12px}.js .tabs{display:flex}
.tabs button{font:inherit;font-size:14px;padding:6px 14px;border-radius:999px;border:1px solid var(--border);background:var(--card);color:var(--fg);cursor:pointer}
.tabs button[aria-selected="true"]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}
.tabs button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.panels{display:grid;gap:12px}.panel[hidden]{display:none}
.panel>h3{font-size:16px;margin:0 0 4px}.panel>h3 .for{font-weight:400;color:var(--muted);font-size:13px;margin-left:4px}.js .panel>h3{display:none}
.use .chg{display:inline-block;margin-top:10px}
details.all{border:1px solid var(--border);border-radius:14px;background:var(--card);padding:0 18px}
details.all>summary{cursor:pointer;padding:14px 0;font-weight:600}
details.all>summary .n{color:var(--muted);font-weight:400}
.tgroup{margin:4px 0 14px}.tgroup h3{font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;font-weight:500;margin:10px 0 4px}
.tlist{list-style:none;margin:0;padding:0}.tlist li{margin:0;padding:10px 0;border-top:1px solid var(--border);font-size:14px}
.tlist code.tn{color:var(--muted);font-size:12px;margin-left:8px;background:none;padding:0}
@media (max-width:560px){.facts{font-size:14px}.tlist code.tn{display:block;margin:2px 0 0}}`;
// The client tabs: without JavaScript every panel shows (crawlers, AI answer engines); with it, one panel at a time,
// the reader's last choice first (localStorage, optional).
const TABS_JS = `<script>(function(){var bar=document.querySelector(".tabs");if(!bar)return;var bs=[].slice.call(bar.querySelectorAll("[role=tab]")),ps=[].slice.call(document.querySelectorAll(".panel"));
function pick(c,save,focus){bs.forEach(function(b){var on=b.getAttribute("data-c")===c;b.setAttribute("aria-selected",on?"true":"false");b.tabIndex=on?0:-1;if(on&&focus)b.focus();});ps.forEach(function(p){p.hidden=p.getAttribute("data-c")!==c;});if(save){try{localStorage.setItem("ua-client",c);}catch(e){}}}
var saved=null;try{saved=localStorage.getItem("ua-client");}catch(e){}
document.documentElement.classList.add("js");pick(bs.some(function(b){return b.getAttribute("data-c")===saved;})?saved:bs[0].getAttribute("data-c"));
bs.forEach(function(b,i){b.addEventListener("click",function(){pick(b.getAttribute("data-c"),true);});b.addEventListener("keydown",function(e){var d=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!d)return;e.preventDefault();pick(bs[(i+d+bs.length)%bs.length].getAttribute("data-c"),true,true);});});})();</script>`;
// Tool descriptions end with the vendor route ("REST: GET /x.", "(GET /x)."): only for developers, so the page drops a
// last sentence that is only an optional short label and routes, or a closing parenthetical of routes. Prose stays.
const ROUTE_M = "(?:GET|POST|PUT|PATCH|DELETE)", ROUTE_P = "\\/[^\\s(),;]*";
const ROUTE_RE = `${ROUTE_M}\\s+${ROUTE_P}(?:\\s*(?:,|and|or|then|\\+|/)\\s*(?:${ROUTE_M}\\s+)?${ROUTE_P})*`;
const ROUTE_LABEL_WORD = "[A-Za-z][\\w:-]*(?:\\.[\\w:-]+)*"; // "Re:amaze", "JSON:API", "v2.1": a dot only inside a word
const ROUTE_SENTENCE = new RegExp(`(^|(?<!\\b[A-Za-z])\\.)\\s+(?:${ROUTE_LABEL_WORD}(?:\\s+${ROUTE_LABEL_WORD}){0,3}:\\s+)?${ROUTE_RE}\\.?\\s*$`);
const ROUTE_PAREN = new RegExp(`\\s+\\(${ROUTE_RE}\\)(\\.?)\\s*$`);
// A URL that wraps only after "." and "/" (<wbr> adds no text, so Copy still copies the plain URL).
const wrapUrl = (u) => esc(u).replace(/([./])(?=[^/])/g, "$1<wbr>");
const COPY_JS = `<script>for(const b of document.querySelectorAll(".copy")){b.addEventListener("click",function(){var el=b.parentElement.querySelector(".url,pre");navigator.clipboard.writeText((el.textContent||"").trim()).then(function(){var o=b.textContent;b.textContent="Copied";b.classList.add("ok");setTimeout(function(){b.textContent=o;b.classList.remove("ok");},1200);}).catch(function(){});});}</script>`;
// Custom work (professional services): one page, contact by email only, no prices on the site.
const SERVICES_PATH = "/services/";
const SERVICES_MAIL = "mailto:support@usefulapi.io?subject=Custom%20work";
const FOOTER = SITE_FOOTER;
const postList = (list, id = "") => `<ul class="posts"${id ? ` id="${id}"` : ""}>${list.map((p) => `<li><a href="${postPath(p)}">${esc(p.title)}</a><p>${esc(p.description)}</p><span class="date">${dateText(p.date)}</span></li>`).join("")}</ul>`;
const chip = (t, cls) => `<span class="chip${cls ? " " + cls : ""}">${t}</span>`;
// Login kind: "key" (the user pastes vendor credentials), "upstream" (vendor OAuth) or "email" (keyless:
// a 6-digit email code). From s.login (codegen syncs it from fleet product.ts), else from s.auth.
const loginKind = (s) => s.login?.kind || (s.auth === "oauth" ? "upstream" : s.auth === "none" ? "email" : "key");
// "your Acuity User ID and API Key" (required fields only; the labels come from the login page).
const andList = (xs) => xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
const requiredFields = (s) => (s.login?.fields || []).filter((f) => !f.optional).map((f) => f.label);
const optionalFields = (s) => (s.login?.fields || []).filter((f) => f.optional).map((f) => f.label.replace(/\s*[—(-]\s*optional\)?$/i, ""));
const credentialText = (s) => {
  const req = requiredFields(s);
  return req.length ? `your ${andList(req.map((l) => `<b>${esc(l)}</b>`))}` : `your <b>${esc(s.name)}</b> credentials`;
};
// customerClient (fleet runtime): the customer's own vendor app; the login page asks for its client ID + secret first.
const ownApp = (s) => loginKind(s) === "upstream" && !!s.login?.customerClient;
function authStepFor(s, client = "Claude") {
  const k = loginKind(s);
  if (ownApp(s)) return `${client} opens the login page: enter your own <b>${esc(s.name)}</b> app's client ID and secret, then sign in and approve the access`;
  if (k === "upstream") return `${client} opens the <b>${esc(s.name)}</b> login page: sign in and approve the access`;
  if (k === "email") return `${client} opens the login page: enter your email and the 6-digit code from <b>login@usefulapi.io</b> (no ${esc(s.name)} key needed)`;
  return `${client} opens the login page: enter ${credentialText(s)}`;
}
// Some clients send a configured Authorization header instead of the OAuth token (every call → 401).
function loginByOAuth(s) {
  const k = loginKind(s);
  if (ownApp(s)) return `you enter your own ${esc(s.name)} app's client ID and secret, then sign in with your ${esc(s.name)} account`;
  if (k === "upstream") return `you sign in with your ${esc(s.name)} account`;
  if (k === "email") return `the login page asks for your email address and a 6-digit code`;
  return `the login page asks for ${credentialText(s)}`;
}
const noHeaderText = (s) =>
  `Add only the URL. Do not add an <code>Authorization</code> header or an API key to the client config. ` +
  `The server signs you in with OAuth: ${loginByOAuth(s)}. ` +
  `If the config has such a header, remove it: some clients then send that header instead of the login token, and every call fails with 401.`;
// Servers that can return patient data: no PHI, no BAA (Terms §5 "Health data", decided 2026-10-09).
const PATIENT_DATA = new Set(["drchrono", "healthie", "nexhealth", "canvas-medical", "intakeq", "metriport", "particlehealth",
  "health-gorilla", "photon-health", "spruce-health", "cliniko", "nookal", "infermedica",
  "hint-health", "elation-health", "akute-health", "practice-better", "spoke-phone", "appointedd", "goformz", "halaxy", "semble", "cogmento", "feegow", "carelinelive", "open-dental"]);
const PATIENT_DATA_TEXT = `Do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs).`;
// Servers that return personal data about other people (employees, applicants): the user is the controller.
const PERSONAL_DATA = {
  "jackrabbit-class": `This server can return children’s and families’ personal information, including birth dates and health notes. Connect only data you are authorized to process with your chosen AI client and its LLM provider. Do not use it with protected health information (PHI); we do not sign HIPAA BAAs.`,
  "talenox": `This server can return employee and payroll information. Employee lookups hide sensitive identifiers by default; the employee tool can include them when explicitly requested. Connect only a token with access to information you intend to use with your AI client.`,
  "breathe-hr": `This server returns personal data about your employees, including sickness records. Sickness records are health data under GDPR Article 9: you need your own lawful basis to process them with an AI client. Bank details and national insurance numbers are never returned.`,
  "jazzhr": `This server returns personal data about job applicants (contact details, resumes, notes). You need your own lawful basis to process it with an AI client. EEO answers (gender, race, veteran and disability status) are never returned.`,
};
const patientDataNote = (s) => (PATIENT_DATA.has(s.slug)
  ? `<p><b>Patient data:</b> ${PATIENT_DATA_TEXT} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.</p>` : "") +
  (PERSONAL_DATA[s.slug] ? `<p><b>Personal data:</b> ${PERSONAL_DATA[s.slug]} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.</p>` : "");
// "Before you connect": what the login asks for and where to find it in the vendor's app.
function setupSection(s) {
  const k = loginKind(s), opt = optionalFields(s);
  let lead;
  if (ownApp(s)) lead = `<p>You need your own ${esc(s.name)} API app. The login page asks for its <b>Client ID</b> and <b>Client secret</b>; then you sign in with your ${esc(s.name)} account and approve the access (OAuth).</p>` +
    (s.login.appHint ? `<p>${hintHtml(s.login.appHint)}</p>` : "");
  else if (k === "upstream") lead = `<p>You sign in with your ${esc(s.name)} account and approve the access (OAuth). You do not need an API key.</p>`;
  else if (k === "email") lead = `<p>You do not need an account or a key for ${esc(s.name)}. You log in with your email address and a 6-digit code.</p>`;
  else lead = `<p>The login page asks for ${credentialText(s)}.</p>`;
  const optional = opt.length ? `<p>Optional: ${andList(opt.map((l) => `<b>${esc(l)}</b>`))}.</p>` : "";
  const help = [s.keyHelp, s.login?.hint].filter(Boolean).map((h) => `<p>${hintHtml(h)}</p>`).join("");
  return `<div class="card prose need"><h3>Before you connect</h3>${patientDataNote(s)}${lead}${optional}${help}</div>`;
}
// "What you can do": the jobs this server does, each with the tools that do it (content/<slug>.json).
function useCasesSection(s) {
  const c = CONTENT.get(s.slug);
  if (!c) return "";
  const use = (u) => `<div class="card use"><h3>${esc(u.title)}</h3><p>${esc(u.text)}</p>` +
    `${u.changes ? `<span class="tag write chg">Changes data</span>` : ""}</div>`;
  return `<h2 class="sec">What you can do with ${esc(s.name)} in Claude and ChatGPT</h2>\n<p class="lead-in">For ${esc(c.audience)}.</p>\n<div class="uses">${c.useCases.map(use).join("")}</div>`;
}
function examplesSection(s) {
  if (!(s.examples || []).length) return "";
  return `<h2 class="sec">What can I ask?</h2>\n<p class="lead-in">Turn on the ${esc(s.name)} connector, then ask in plain words. The AI picks the tools.</p>\n<ul class="prompts">${s.examples.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>`;
}
// Generic FAQ, built only from facts in the manifest (tools, login kind, pricing). Returns [{q, a}] with `a` as HTML.
function faqFor(s) {
  const n = esc(s.name), k = loginKind(s);
  const tools = s.tools || [];
  const reads = tools.filter((t) => t.type === "read").length, writes = tools.filter((t) => t.type === "write").length;
  const metaTool = (suffix) => tools.find((t) => t.type === "meta" && t.name.endsWith(suffix));
  const up = metaTool("_upgrade"), cancel = metaTool("_cancel_subscription"), usage = metaTool("_usage_status"), feature = metaTool("_request_feature");
  const ft = freeTier(s), pt = proTier(s), plus = plusTier(s);
  const faq = [];
  const c = CONTENT.get(s.slug);
  if (c) faq.push({ q: `What can I do with ${n} in Claude or ChatGPT?`, a:
    `${c.useCases.map((u) => esc(u.title.replace(/\.$/, ""))).join(". ")}. See <a href="#uses">what you can do</a> for the details.` });
  faq.push({ q: `Is this an official ${n} product?`, a:
    `No. usefulapi is an independent service. It is not affiliated with or endorsed by ${n}. ` +
    (k === "email" ? `The server calls the public ${n} API for you.` : `The server calls the ${n} API with your own ${n} access, so it sees only the data that your account can see.`) });
  if (PERSONAL_DATA[s.slug]) faq.push({ q: `Does this server handle personal data?`, a: `Yes. ${PERSONAL_DATA[s.slug]} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.` });
  if (PATIENT_DATA.has(s.slug)) faq.push({ q: `Can I use this server with patient data (PHI)?`, a:
    `No. ${PATIENT_DATA_TEXT} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.` });
  faq.push({ q: `Can I connect ${n} to Claude or ChatGPT?`, a:
    `Yes. In Claude, add this server's URL as a custom connector. In ChatGPT, add it as a custom MCP server in Plugins. ` +
    `Then log in once. Cursor, VS Code, Claude Code and Codex work too. See <a href="#connect">the setup steps</a>.` });
  faq.push({ q: `What do I need to connect?`, a:
    ownApp(s) ? `A ${n} account with API access and your own ${n} API app (its client ID and secret). See <a href="#setup">Before you connect</a> for how to create it.`
    : k === "upstream" ? `A ${n} account. You sign in to ${n} and approve the access. You do not need an API key.`
    : k === "email" ? `Only an email address. You do not need a key for ${n}.`
    : `The login page asks for ${credentialText(s)}. See <a href="#setup">Before you connect</a> for where to find ${requiredFields(s).length > 1 ? "them" : "it"}.` });
  faq.push({ q: k === "key" ? `Do I put my ${n} key or an Authorization header in the client config?` : `Do I add an Authorization header to the client config?`,
    a: `No. ${noHeaderText(s)}` });
  if (k !== "email") faq.push({ q: `How do you keep my ${n} credentials?`, a:
    `The login stores them encrypted in the authorization grant of your connection. The server uses them to call the ${n} API for you and to derive a private account id for usage metering. usefulapi does not show them on any page or in any reply. ` +
    (k === "upstream" ? `You can revoke the access in ${n} at any time.` : `To stop all access, remove the connector and change or delete these credentials in ${n}.`) });
  faq.push({ q: `Can the AI change my ${n} data?`, a: writes
    ? `Yes, if you approve it. ${writes} of the ${reads + writes} ${n} tools can create or change data. The other ${reads} are marked read-only. Most MCP clients ask you to approve a tool call before it runs.`
    : `All ${reads} ${n} tools are marked read-only.` });
  if (ft && pt) faq.push({ q: `What does it cost?`, a:
    `The Free plan gives ${esc(ft.limit)}. Pro costs ${esc(priceText(pt).replace(" · ", " or "))}, with ${esc(limitText(pt))}. ` +
    (plus ? `Pro+ costs ${esc(priceText(plus).replace(" · ", " or "))}, with ${esc(limitText(plus))}. ` : "") +
    `Each subscription covers this ${n} server only. Cancel any time: your paid plan then runs to the end of the paid period.` +
    (usage ? ` Run <code>${esc(usage.name)}</code> to see how many calls you used.` : "") });
  if (up && cancel) faq.push({ q: `How do I subscribe or cancel?`, a:
    `Ask the AI to run <code>${esc(up.name)}</code> and choose Pro or Pro+, billed monthly or yearly: it returns a Stripe Checkout link. ` +
    (plus ? `If you already have Pro, ask to change it to Pro+. After you confirm, your existing subscription changes in place, keeps its billing interval and charges the price difference for the rest of the period immediately. ` : "") +
    `To cancel, run <code>${esc(cancel.name)}</code>. Your paid plan continues to the end of the paid period.` });
  if (feature) faq.push({ q: `What if a ${n} tool that I need is missing?`, a:
    `Tell the AI what you wanted to do. It can send the request with <code>${esc(feature.name)}</code>. We store the text with the server name, the type of AI client and the tool you tried, not with your account, and read every request when we plan new tools. You can send up to 5 requests per day.` });
  faq.push({ q: `Which AI clients can I use?`, a:
    `Any client that supports remote MCP servers (Streamable HTTP) with OAuth login: Claude (web and desktop), Claude Code, ChatGPT, Codex, Cursor, VS Code, Windsurf and others.` });
  return faq;
}
const faqSection = (faq) => `<h2 class="sec">FAQ</h2>\n<div class="faq">${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}</div>`;
// Hint/keyHelp markdown → HTML: everything escaped (quotes too); links only to plain https URLs.
const SAFE_URL = /^https:\/\/[A-Za-z0-9.-]+(?:\/[A-Za-z0-9._~%\/?#=&+:,;@!-]*)?$/;
function hintHtml(md) {
  const parts = String(md).split(/(\[[^\]]+\]\([^)\s]+\))/);
  return parts.map((p) => {
    const m = p.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (m && SAFE_URL.test(m[2])) return `<a href="${attr(m[2])}" rel="nofollow noopener">${esc(m[1])}</a>`;
    return esc(p).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }).join("");
}
const stripTags = (h) => h.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");

// OpenAI's own article, for accounts whose Plugins page has no "Add custom MCP server" (path checked 2026-10-09).
const OPENAI_MCP_GUIDE = "https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt";

function productPage(s) {
  const live = s.status === "live";
  const authStep = authStepFor(s);
  const name = esc(s.name), urlShown = wrapUrl(s.endpoint);
  const copyLine = (text) => `<div class="copywrap line"><span class="url">${text}</span><button class="copy" type="button">Copy</button></div>`;
  const copyBlock = (text) => `<div class="copywrap block"><pre class="code">${text}</pre><button class="copy" type="button">Copy</button></div>`;
  // One-click install links. Cursor: base64 of the server config. VS Code: the vscode.dev redirect to vscode:mcp/install.
  const cursorLink = `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(s.slug)}&config=${Buffer.from(JSON.stringify({ url: s.endpoint })).toString("base64")}`;
  const vscodeLink = `https://vscode.dev/redirect/mcp/install?name=${encodeURIComponent(s.slug)}&config=${encodeURIComponent(JSON.stringify({ type: "http", url: s.endpoint }))}`;
  // One panel per client, shown as tabs (TABS_JS).
  const clients = [
    { c: "claude", label: "Claude", for: "claude.ai · Desktop", html: `<ol><li>Open <b>Customize → Connectors</b>, then click <b>+ Add → Add custom connector</b>.</li>
<li>Enter the name <b>${name}</b> and this URL, then click <b>Add</b>:${copyLine(urlShown)}</li>
<li>${authStep}.</li>
<li>In a chat, click <b>+ → Connectors</b> and turn on <b>${name}</b>.</li></ol>
<p class="lead small">Team and Enterprise: an Owner adds the connector for the organization first.</p>` },
    { c: "chatgpt", label: "ChatGPT", for: "chatgpt.com", html: `<ol><li>Open <a href="https://chatgpt.com/plugins" rel="nofollow noopener">Plugins</a>, click <b>+</b>, then <b>Add custom MCP server</b>.</li>
<li>Enter the name <b>${name}</b> and this URL, choose <b>OAuth</b> as the authentication, confirm the warning and create it:${copyLine(urlShown)}</li>
<li>${authStepFor(s, "ChatGPT")}.</li>
<li>In Plugins, install <b>${name}</b>, then choose it in a chat.</li></ol>
<p class="lead small">No <b>Add custom MCP server</b> option? It depends on your account or workspace settings: see <a href="${OPENAI_MCP_GUIDE}" rel="nofollow noopener">OpenAI's guide</a>.</p>` },
    { c: "claude-code", label: "Claude Code", html: `<p class="lead">Run this command, then run <code>/mcp</code> in Claude Code to log in:</p>
${copyLine(`claude mcp add --transport http ${esc(s.slug)} ${urlShown}`)}` },
    { c: "cursor", label: "Cursor", html: `<p class="lead"><a class="btn" href="${attr(cursorLink)}">Add to Cursor</a> or add this to <code>~/.cursor/mcp.json</code>:</p>
${copyBlock(`{
  "mcpServers": {
    "${esc(s.slug)}": {
      "url": "${urlShown}"
    }
  }
}`)}` },
    { c: "vscode", label: "VS Code", html: `<p class="lead"><a class="btn" href="${attr(vscodeLink)}">Add to VS Code</a> or add this to <code>.vscode/mcp.json</code>:</p>
${copyBlock(`{
  "servers": {
    "${esc(s.slug)}": {
      "type": "http",
      "url": "${urlShown}"
    }
  }
}`)}` },
    { c: "codex", label: "Codex", html: `<p class="lead">Run these commands. The second one opens the login page:</p>
${copyLine(`codex mcp add ${esc(s.slug)} --url ${urlShown}`)}
${copyLine(`codex mcp login ${esc(s.slug)}`)}` },
    { c: "other", label: "Other clients", html: `<p class="lead">Windsurf, Cline, Zed and other MCP clients: add this URL as a remote MCP server (Streamable HTTP). The client then opens the login page in your browser.</p>
${copyLine(urlShown)}
<p class="lead small">${noHeaderText(s)}</p>` },
  ];
  const cards = live ? `<div class="tabs" role="tablist" aria-label="Your AI client">${clients.map((x) =>
    `<button type="button" role="tab" id="tab-${x.c}" aria-controls="p-${x.c}" data-c="${x.c}">${x.label}</button>`).join("")}</div>
<div class="panels">${clients.map((x) =>
    `<div class="card panel" role="tabpanel" tabindex="0" id="p-${x.c}" aria-labelledby="tab-${x.c}" data-c="${x.c}"><h3>${x.label}${x.for ? ` <span class="for">${x.for}</span>` : ""}</h3>
${x.html}</div>`).join("\n")}</div>` : `<div class="card"><h2>Launching soon</h2><p class="lead">This server isn't live yet — check back shortly.</p></div>`;
  const ft = freeTier(s), pt = proTier(s);
  const facts = `<div class="facts">${live ? `<a class="cta" href="#connect">Connect ${name}</a>` : chip("launching soon")}` +
    `${ft ? `<span class="f"><b>Free</b> ${esc(ft.limit)}</span>` : ""}${pt ? `<span class="f"><b>Pro</b> ${esc(priceText(pt))} · <a href="#pricing">pricing</a></span>` : ""}` +
    `<span class="f">${toolCount(s)} tools</span></div>`;

  // All tools in one closed section, grouped by what they do. The "GET /path." suffix is for developers only.
  const plainDesc = (d) => String(d || "").replace(ROUTE_SENTENCE, "$1").replace(ROUTE_PAREN, "$1").trim();
  const toolItem = (t) => {
    const d = plainDesc(t.description);
    return `<li><b>${esc(t.title)}</b><code class="tn">${esc(t.name)}</code>${d && d !== t.title ? `<div class="tdesc">${esc(d)}</div>` : ""}</li>`;
  };
  const TOOL_GROUPS = [["read", "Read only"], ["write", "Changes data"], ["meta", "Your usefulapi plan"], ["other", "Other tools"]];
  const groupOfTool = (t) => (TOOL_GROUPS.some(([k]) => k === t.type) ? t.type : "other");
  const toolsSection = (s.tools || []).length
    ? `<h2 class="sec">Tools <span class="n">${s.tools.length}</span></h2>
<details class="all"><summary>Show all ${s.tools.length} tools <span class="n">(the AI picks them for you)</span></summary>
${TOOL_GROUPS.map(([type, label]) => {
      const list = s.tools.filter((t) => groupOfTool(t) === type);
      return list.length ? `<div class="tgroup"><h3>${label} · ${list.length}</h3><ul class="tlist">${list.map(toolItem).join("")}</ul></div>` : "";
    }).join("")}</details>`
    : "";
  const priceRow = (p) =>
    `<tr><td>${esc(p.plan)}${p.scope ? `<span class="scope">${esc(p.scope)}</span>` : ""}</td>` +
    `<td>${esc(priceText(p))}</td><td>${esc(p.limit)}${isUnlimitedPro(p) ? "*" : ""}</td></tr>`;
  // Billing is per product: say so, and name this server's subscribe/cancel tools.
  const metaTool = (suffix) => (s.tools || []).find((t) => t.type === "meta" && t.name.endsWith(suffix));
  const upTool = metaTool("_upgrade"), cancelTool = metaTool("_cancel_subscription");
  const fairUseNote = pt && isUnlimitedPro(pt) ? `<p class="hint">*Pro ${esc(PRO_FAIR_USE)} on this server. For more, write to <a href="mailto:support@usefulapi.io">support@usefulapi.io</a>.</p>` : "";
  const billingNote = pt && upTool && cancelTool
    ? `<p class="hint">Each paid plan covers this ${esc(s.name)} server only. Ask your AI to run <code>${esc(upTool.name)}</code> and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). ` +
      `If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. ` +
      `Cancel any time with <code>${esc(cancelTool.name)}</code>: your paid plan continues to the end of the paid period, with no refund for the current period, ` +
      `and asking to resume the same plan with <code>${esc(upTool.name)}</code> before then undoes the cancel. Or write to <a href="mailto:support@usefulapi.io">support@usefulapi.io</a>.</p>`
    : "";
  const pricingSection = (s.pricing || []).length
    ? `<h2 class="sec">Pricing</h2>
<table class="pricing"><thead><tr><th>Plan</th><th>Price</th><th>Limit</th></tr></thead>
<tbody>${s.pricing.map(priceRow).join("")}</tbody></table>
${fairUseNote}${billingNote}`
    : "";

  const hint = live ? `<p class="hint">This is a Model Context Protocol endpoint — meant to be connected from an AI client, not opened in a browser. An <code>invalid_token</code> response at the URL is the auth gate working as designed; clients authenticate automatically.</p>` : "";
  const faq = faqFor(s);
  const g = groupOf(s);
  const siblings = manifest.servers.filter((x) => x.slug !== s.slug && groupOf(x) === g).sort((a, b) => a.name.localeCompare(b.name));
  const related = siblings.length
    ? `<h2 class="sec">More ${esc(g)} MCP servers</h2>
<div class="rel">${siblings.map((x) => `<a href="${pagePath(x)}">${esc(x.name)}</a>`).join("")}</div>
<p class="hint"><a href="${categoryPath(g)}">All ${esc(g)} servers →</a></p>`
    : "";
  const body = `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">usefulapi</a> › <a href="${categoryPath(g)}">${esc(g)}</a></nav>
<div class="brand"><h1>${esc(s.name)} MCP server</h1></div>
<p class="sub">${esc(s.description)} Hosted by <strong>usefulapi</strong>: connect it to Claude, ChatGPT, Cursor or any MCP client.</p>
${facts}
${live ? examplesSection(s) : ""}
${live && CONTENT.has(s.slug) ? `<div id="uses">${useCasesSection(s)}</div>\n` : ""}<h2 class="sec" id="connect">How do I connect ${esc(s.name)}?</h2>
${live ? `<div id="setup">${setupSection(s)}</div>` : ""}
${cards}
${live && postsFor(s).length ? `<h2 class="sec">Guides</h2>\n${postList(postsFor(s))}\n` : ""}<div id="pricing">${pricingSection}</div>
${live ? toolsSection : ""}
${live ? faqSection(faq) : ""}
${hint}
<p class="hint">Need a tool this server does not have, or a connection to another system? <a href="${SERVICES_PATH}">We build custom integrations and MCP servers</a>.</p>
${related}
${FOOTER}`;
  const url = `${SITE}${pagePath(s)}`;
  const n = toolCount(s);
  // Worded like the question a user asks an AI assistant ("connect Acuity to ChatGPT"): answer engines bring most users.
  // "connector" too: Claude and ChatGPT call these integrations connectors, and Search Console shows "<vendor> connector" queries.
  const title = `${s.name} MCP server & connector for Claude, ChatGPT | usefulapi`;
  const desc = `${s.description.replace(/\.?$/, ".")} Hosted remote MCP server (connector) for Claude, ChatGPT, Cursor & any MCP client — ${n} tools${ft ? ", free tier" : ""}.`;
  const offers = (s.pricing || []).map((p) => ({
    "@type": "Offer", name: p.plan, priceCurrency: "USD",
    price: String(p.monthly || "$0").replace(/[^0-9.]/g, "") || "0", description: limitText(p)
  }));
  const ld = [
    {
      "@context": "https://schema.org", "@type": "SoftwareApplication",
      name: `${s.name} MCP Server by usefulapi`, url, description: s.description,
      applicationCategory: "DeveloperApplication", operatingSystem: "Any (remote MCP server)",
      offers, publisher: { "@type": "Organization", name: "usefulapi", url: SITE },
      ...(CONTENT.has(s.slug) ? {
        audience: { "@type": "Audience", audienceType: CONTENT.get(s.slug).audience },
        featureList: CONTENT.get(s.slug).useCases.map((u) => `${u.title}: ${u.text}`)
      } : {})
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "usefulapi", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: g, item: `${SITE}${categoryPath(g)}` },
        { "@type": "ListItem", position: 3, name: s.name, item: url }
      ]
    },
    ...(live ? [{
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: stripTags(f.q), acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) } }))
    }] : [])
  ];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${headMeta({ title, desc, url })}
${ld.map(jsonLd).join("\n")}
<style>${PRODUCT_CSS}${PAGE_CSS}</style></head>
<body><div class="wrap">${topbar()}${body}</div>${COPY_JS}${live ? TABS_JS : ""}</body></html>`;
}

// Category landing pages (/category/<group>/): crawlable internal-linking hubs, one per browse group.
function categoryPage(g) { return catalogPage({ category: g }); }

// Blog post pages (/blog/<slug>/) and the blog index (/blog/).
const serverBySlug = new Map(manifest.servers.map((s) => [s.slug, s]));
function postPage(p) {
  const url = `${SITE}${postPath(p)}`;
  const prods = p.products.map((x) => serverBySlug.get(x));
  const connect = prods.map((s) => `<div class="card"><h2>Connect ${esc(s.name)}</h2>` +
    `<p class="lead">Add this URL to Claude, ChatGPT, Cursor or any MCP client, then log in. <a href="${pagePath(s)}">Setup steps, tools and pricing →</a></p>` +
    `<div class="copywrap line"><span class="url">${esc(s.endpoint)}</span><button class="copy" type="button">Copy</button></div></div>`).join("");
  const body = `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">usefulapi</a> › <a href="/blog/">Blog</a></nav>
<article class="post"><h1>${esc(p.title)}</h1>
<p class="meta"><time datetime="${p.date}">${dateText(p.date)}</time> · ${prods.map((s) => `<a href="${pagePath(s)}">${esc(s.name)} MCP server</a>`).join(", ")}</p>
${p.html}</article>
<h2 class="sec">Try it</h2>
<div class="grid">${connect}</div>
${FOOTER}`;
  const title = `${p.title} | usefulapi`;
  const ld = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.description, url, mainEntityOfPage: url,
      datePublished: p.date, author: { "@type": "Organization", name: "usefulapi", url: `${SITE}/` },
      publisher: { "@type": "Organization", name: "usefulapi", url: `${SITE}/`, logo: { "@type": "ImageObject", url: `${SITE}/icon-512.png` } },
      about: prods.map((s) => ({ "@type": "SoftwareApplication", name: `${s.name} MCP Server by usefulapi`, url: `${SITE}${pagePath(s)}` })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "usefulapi", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
      { "@type": "ListItem", position: 3, name: p.title, item: url }] }
  ];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${headMeta({ title, desc: p.description, url }).replace('content="website"', 'content="article"')}
${ld.map(jsonLd).join("\n")}
<style>${PRODUCT_CSS}</style></head>
<body><div class="wrap">${topbar("/blog/")}${body}</div>${COPY_JS}</body></html>`;
}
// Blog index: every post stays in the HTML (crawlable, readable without JS); the script shows BLOG_PAGE at a time.
const BLOG_PAGE = 10;
const MORE_POSTS_JS = `<script>(function(){var items=[].slice.call(document.querySelectorAll("#post-list>li")),btn=document.getElementById("more-posts"),step=${BLOG_PAGE},shown=step;if(!btn)return;function render(){items.forEach(function(li,i){li.hidden=i>=shown;});var left=items.length-shown;btn.hidden=left<=0;}btn.addEventListener("click",function(){var first=items[shown];shown+=step;render();if(first)first.querySelector("a").focus();});render();})();</script>`;
function blogIndexPage() {
  const url = `${SITE}/blog/`;
  const title = "Blog: business tools in Claude and ChatGPT | usefulapi";
  const desc = "Short guides and real use cases: how people use their business tools from Claude, ChatGPT and other AI assistants with usefulapi MCP servers.";
  const ld = { "@context": "https://schema.org", "@type": "Blog", name: "usefulapi blog", url, description: desc,
    blogPost: POSTS.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE}${postPath(p)}`, datePublished: p.date })) };
  const body = `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">usefulapi</a> › Blog</nav>
<div class="brand"><h1>Blog</h1></div>
<p class="sub">Short guides and real use cases: business tools in Claude, ChatGPT and other AI assistants.</p>
${postList(POSTS, "post-list")}
${POSTS.length > BLOG_PAGE ? `<button class="more-posts" id="more-posts" type="button" hidden>Show more posts</button>` : ""}
${FOOTER}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${headMeta({ title, desc, url })}
${jsonLd(ld)}
<style>${PRODUCT_CSS}</style></head>
<body><div class="wrap">${topbar("/blog/")}${body}</div>${MORE_POSTS_JS}</body></html>`;
}

// ---- Catalog groups: shared by category pages, the directory and its compact search index. ----
const GROUP_ORDER = [
  "Payments & Billing", "Fintech", "Accounting & Tax",
  "Commerce & Memberships", "Messaging & Communication", "CRM & Sales",
  "Real Estate", "Customer Support", "Scheduling",
  "HR & Workforce", "Developer Tools & Infrastructure", "Observability",
  "Project Management", "Documents & Delivery", "Business Operations",
  "AI", "Healthcare", "Education & Childcare",
  "Data & Analytics", "Media"
];
const CAT_GROUP = {
  "billing": "Payments & Billing", "payments": "Payments & Billing", "usage-metering": "Payments & Billing",
  "fintech": "Fintech", "payment-operations": "Fintech", "financial-data": "Fintech",
  "fraud-detection": "Fintech",
  "tax": "Accounting & Tax", "accounting": "Accounting & Tax", "accounting-practice": "Accounting & Tax",
  "Finance": "Fintech",
  "ecommerce": "Commerce & Memberships", "membership": "Commerce & Memberships", "fundraising": "Commerce & Memberships",
  "commerce": "Commerce & Memberships", "digital-commerce": "Commerce & Memberships", "retail": "Commerce & Memberships",
  "Food & Beverage": "Business Operations",
  "email": "Messaging & Communication", "chat": "Messaging & Communication", "notifications": "Messaging & Communication",
  "communications": "Messaging & Communication", "marketing": "Messaging & Communication", "messaging": "Messaging & Communication",
  "email-validation": "Messaging & Communication", "email-marketing": "Messaging & Communication",
  "crm": "CRM & Sales",
  "real-estate": "Real Estate", "property-management": "Real Estate", "real-estate-transactions": "Real Estate",
  "support": "Customer Support",
  "calendar": "Scheduling", "scheduling": "Scheduling", "sports": "Scheduling",
  "hr": "HR & Workforce", "time-tracking": "HR & Workforce",
  "devops": "Developer Tools & Infrastructure", "dns": "Developer Tools & Infrastructure", "paas": "Developer Tools & Infrastructure",
  "feature-flags": "Developer Tools & Infrastructure", "localization": "Developer Tools & Infrastructure", "realtime": "Developer Tools & Infrastructure",
  "maps": "Developer Tools & Infrastructure", "no-code-database": "Developer Tools & Infrastructure", "devtools": "Developer Tools & Infrastructure",
  "dev-infra": "Developer Tools & Infrastructure", "cloud": "Developer Tools & Infrastructure", "security": "Developer Tools & Infrastructure",
  "observability": "Observability", "monitoring": "Observability",
  "project-management": "Project Management",
  "documents": "Documents & Delivery", "esignature": "Documents & Delivery", "direct-mail": "Documents & Delivery",
  "shipping": "Documents & Delivery", "knowledge-base": "Documents & Delivery", "e-sign": "Documents & Delivery",
  "logistics": "Documents & Delivery",
  "productivity": "Business Operations", "business-operations": "Business Operations", "rental": "Business Operations",
  "inventory": "Business Operations", "winery-production": "Business Operations", "forms": "Business Operations",
  "forms-surveys": "Business Operations",
  "ai-infra": "AI", "image-generation": "AI", "speech-to-text": "AI",
  "document-ai": "AI",
  "healthcare": "Healthcare", "health-data": "Healthcare",
  "education": "Education & Childcare", "childcare-administration": "Education & Childcare",
  "analytics": "Data & Analytics", "data-enrichment": "Data & Analytics", "data": "Data & Analytics",
  "image-cdn": "Media", "video-hosting": "Media"
};
const groupOf = (s) => CAT_GROUP[s.category] || "Other";
const groupsPresent = GROUP_ORDER.concat(["Other"]).filter((g) => manifest.servers.some((s) => groupOf(s) === g));
const groups = groupsPresent.map((name) => ({ name, count: manifest.servers.filter((s) => groupOf(s) === name).length, url: categoryPath(name) }));
// Search uses deduplicated tool-name/title words, not full tool descriptions or the 9 MB manifest.
const catalog = manifest.servers.map((s) => ({
  slug: s.slug, name: s.name, description: s.description, category: s.category, group: groupOf(s),
  toolCount: toolCount(s), free: freeTier(s) ? `Free ${String(freeTier(s).limit).replace(/\s*tool calls\s*\/\s*month$/i, " calls/mo")}` : "",
  keywords: [...new Set(normalize((s.tools || []).map((t) => `${t.name || ""} ${t.title || ""}`).join(" ")).split(" "))].join(" ")
}));
// An editorial starting point across common business tasks, not a popularity ranking.
const FEATURED_SLUGS = ["pipedrive", "clickup", "mailchimp", "zendesk", "acuity-scheduling", "braintree", "freeagent", "gelato", "betterstack", "plausible-analytics", "mistral", "docraptor"];
const featured = FEATURED_SLUGS.map((slug) => {
  const server = catalog.find((s) => s.slug === slug);
  if (!server || manifest.servers.find((s) => s.slug === slug).status !== "live") throw new Error(`Featured integration is not live: ${slug}`);
  return server;
});
const directoryServers = selectServers(catalog);
const directoryPageCount = Math.ceil(catalog.length / PAGE_SIZE);
const catalogTemplate = readFileSync(new URL("portal/index.html", ROOT), "utf8");
const replaceOnce = (html, from, to) => {
  if (!html.includes(from)) throw new Error(`portal/index.html: marker not found: ${from}`);
  return html.replace(from, () => to);
};
function catalogPage({ directory = false, page = 1, category = "" } = {}) {
  const N = catalog.length;
  const home = !directory && !category;
  const slice = paginate(directoryServers, page);
  const inGroup = category ? catalog.filter((s) => s.group === category).sort((a, b) => a.name.localeCompare(b.name)) : [];
  const path = category ? categoryPath(category) : directory ? staticPagePath(page) : "/";
  const url = `${SITE}${path}`;
  const n = inGroup.length;
  const title = category ? `${category} MCP servers — ${n} hosted servers | usefulapi`
    : directory ? `All ${N} MCP integrations${page > 1 ? ` — page ${page}` : ""} | usefulapi` : `usefulapi — ${N} hosted MCP servers for Claude, Cursor & any MCP client`;
  const desc = category ? `${n} hosted ${category} MCP servers: ${inGroup.slice(0, 6).map((s) => s.name).join(", ")}${n > 6 ? " and more" : ""}. Connect from Claude, ChatGPT, Cursor or any MCP client.`
    : directory ? `Browse ${N} hosted MCP integrations. Search by app, tool or category and connect from Claude, ChatGPT, Cursor or any MCP client.` : `${N} hosted MCP servers for the tools you already use. Find your integration by app or category and connect from Claude, ChatGPT, Cursor or any MCP client.`;
  const visible = category ? inGroup : directory ? slice.items : featured;
  const ld = [
    ...(home ? [
      { "@context": "https://schema.org", "@type": "Organization", name: "usefulapi", url: `${SITE}/`, logo: `${SITE}/icon-512.png`, email: "support@usefulapi.io" },
      { "@context": "https://schema.org", "@type": "WebSite", name: "usefulapi", url: `${SITE}/`, description: desc }
    ] : []),
    { "@context": "https://schema.org", "@type": home ? "WebPage" : "CollectionPage", name: category ? `${category} MCP servers` : title, url, description: desc,
      mainEntity: { "@type": "ItemList", name: category ? `${category} MCP servers` : directory ? "MCP integrations" : "Featured integrations", numberOfItems: visible.length,
        itemListElement: visible.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${SITE}${pagePath(s)}` })) } }
  ];
  const pills = (list) => `<div class="category-links">${list.map((g) => `<a class="category-link" href="${g.url}">${esc(g.name)} <span>${g.count}</span></a>`).join("")}</div>`;
  // Directory: search, category and sort share one row; the labels are for screen readers.
  const search = directory
    ? `<form class="search-form toolbar" action="/servers/" method="get" role="search">${searchField(N)}` +
      `<label class="sr-only" for="category">Category</label><select id="category" name="category"><option value="">All categories</option>${groups.map((g) => `<option value="${attr(g.name)}">${esc(g.name)} (${g.count})</option>`).join("")}</select>` +
      `<label class="sr-only" for="sort">Sort</label><select id="sort" name="sort"><option value="name">Sort: A–Z</option><option value="relevance">Sort: relevance</option><option value="category">Sort: category</option></select></form>`
    : `<form class="search-form" action="/servers/" method="get" role="search">${searchField(N)}</form>`;
  const head = home ? `<div class="section-head"><h2 id="results-heading">Featured integrations</h2></div>`
    : directory ? `<div class="section-head"><h2 id="results-heading" class="sr-only">All integrations</h2><p class="count" id="count" role="status">${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, N)} of ${N} integrations</p><a href="/#categories">Browse categories →</a></div>`
    : `<div class="section-head"><h2 id="results-heading" class="sr-only">${esc(category)} integrations</h2><p class="count">${n} integrations</p><a href="/servers/">All ${N} integrations →</a></div>`;
  const how = `<section class="how" aria-labelledby="how-heading"><h2 id="how-heading">How it works</h2><ol class="steps">` +
    `<li><b>Find your tool</b>Search or browse, open the tool's page and copy its URL, for example <code>https://pipedrive.usefulapi.io/mcp</code>.</li>` +
    `<li><b>Add it to your AI client</b>Add the URL as a connector in Claude, ChatGPT, Cursor or any MCP client.</li>` +
    `<li><b>Log in and ask</b>Log in to your tool once, then ask in plain words. The AI picks the tools.</li></ol></section>`;
  const markers = {
    "<!-- page-meta -->": headMeta({ title, desc, url }) + "\n" + ld.map(jsonLd).join("\n") + (directory ? `${page > 1 ? `<link rel="prev" href="${SITE}${staticPagePath(page - 1)}">` : ""}${page < directoryPageCount ? `<link rel="next" href="${SITE}${staticPagePath(page + 1)}">` : ""}` : ""),
    "<!-- topbar -->": topbar(directory ? "/servers/" : ""),
    "<!-- breadcrumb -->": home ? "" : `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">usefulapi</a> › ${directory ? "All integrations" : esc(category)}</nav>`,
    "<!-- heading -->": category ? `${esc(category)} integrations` : directory ? "All integrations" : "Hosted MCP servers for the tools you already use",
    "<!-- intro -->": category ? `<p class="tagline">${n} hosted MCP servers for ${esc(category)} tools. Add one to Claude, ChatGPT, Cursor or any MCP client, then log in.</p>`
      : directory ? "" : `<p class="tagline">Connect ${N} business tools to Claude, ChatGPT, Cursor or any MCP client.</p>`,
    "<!-- search -->": search,
    "<!-- categories -->": home ? `<section class="categories" id="categories" aria-labelledby="categories-heading"><h2 id="categories-heading">Browse by category</h2>${pills(groups)}</section>` : "",
    "<!-- section-head -->": head,
    "<!-- results -->": cardsHtml(visible),
    "<!-- pagination -->": directory ? paginationHtml(slice) : "",
    "<!-- after -->": home ? `<p class="browse-all"><a class="button" href="/servers/">Browse all ${N} integrations →</a></p>${how}`
      : category ? `<section class="categories other" aria-labelledby="other-heading"><h2 id="other-heading">Other categories</h2>${pills(groups.filter((g) => g.name !== category))}</section>` : "",
    "<!-- footer -->": SITE_FOOTER,
    "<!-- scripts -->": directory ? '<noscript><p class="wrap">Search and filters need JavaScript. You can still follow the page links or <a href="/#categories">browse categories</a>.</p></noscript><script type="module" src="/catalog.js"></script>' : ""
  };
  let html = replaceOnce(catalogTemplate, '<title>usefulapi — hosted MCP servers</title>', `<title>${esc(title)}</title>`);
  for (const [marker, value] of Object.entries(markers)) html = replaceOnce(html, marker, value);
  return html;
}

// /services/: what we build for a customer. Facts only: no prices, no customer names or numbers, no SLA.
function servicesPage() {
  const title = "Custom integrations and MCP servers";
  const desc = "We build and run custom integrations: new MCP servers, extra tools for an existing server, connectors between business systems, AI assistant setups and private deployments. Email us with what you need.";
  const body = `<h1>${title}</h1>
<p>We build connections between business software and AI assistants, and between business systems. This site is our own work: ${manifest.servers.length} hosted MCP servers, each with its tools, a secure sign-in, usage limits and billing, built and run by us.</p>
<h2>What we build</h2>
<ul>
<li><strong>A new MCP server</strong> for a tool that is not in our catalog, including the API of your own product.</li>
<li><strong>Extra tools on an existing server</strong> for a workflow of your own, for example a bulk change with a preview, or a report that combines several API calls.</li>
<li><strong>Custom integrations and connectors</strong> between your systems, also without AI: data syncs, webhooks, internal APIs, and connectors for other platforms.</li>
<li><strong>AI assistant setups</strong> for your team: Claude, ChatGPT, Cursor or another MCP client, connected to the tools you use.</li>
<li><strong>Private deployments</strong>: a server for your company only. Tell us your hosting, region and data-handling requirements, and we confirm what is possible before we agree the scope.</li>
<li><strong>Maintenance</strong>: we keep an integration working when the vendor changes its API.</li>
</ul>
<h2>How it works</h2>
<ol>
<li>Email us what you want to connect, and what the AI assistant or the system must do. Include the systems involved, an example workflow with its inputs and outputs, the API access you have, your target date, and any hosting or data requirements.</li>
<li>We reply with our questions. Then we send a written scope and a price, before any work starts.</li>
<li>We build and test it, and deliver it to you. If you want, we also maintain it.</li>
</ol>
<p>Before we build on a vendor's API, we check the vendor's API terms.</p>
<h2>Contact</h2>
<p>Email <a href="${SERVICES_MAIL}">support@usefulapi.io</a> with the subject "Custom work".</p>
<p>For paid custom work, email us. For a suggestion about one of our hosted servers, ask your AI assistant to use the server's <code>request_feature</code> tool (for example <code>rotacloud_request_feature</code>). We read every suggestion, but a suggestion does not order work and does not guarantee that we build it.</p>`;
  return SHELL(title, body, "/services/")
    .replace(`<title>${title} — usefulapi</title>`, `<title>${title} — usefulapi</title>\n${headMeta({ title: `${title} — usefulapi`, desc, url: `${SITE}${SERVICES_PATH}` })}`)
    .replace("<style>", "<style>\n ol{margin:0 0 14px;padding-left:22px}");
}

mkdirSync(`${outDir}/privacy`, { recursive: true });
mkdirSync(`${outDir}/terms`, { recursive: true });
writeFileSync(`${outDir}/index.html`, catalogPage());
for (let page = 1; page <= directoryPageCount; page++) {
  mkdirSync(`${outDir}${staticPagePath(page)}`, { recursive: true });
  writeFileSync(`${outDir}${staticPagePath(page)}index.html`, catalogPage({ directory: true, page }));
}
writeFileSync(`${outDir}/search-index.json`, JSON.stringify({ groups, servers: catalog }));
for (const f of ["catalog.js", "catalog-model.mjs"]) copyFileSync(new URL(`portal/${f}`, ROOT), `${outDir}/${f}`);
writeFileSync(`${outDir}/catalog.css`, readFileSync(new URL("portal/catalog.css", ROOT), "utf8") + SITE_CSS + "\n"); // shared site base, same as every other page
for (const f of ["icon.svg", "favicon-16.png", "favicon-32.png", "apple-touch-icon.png", "icon-256.png", "icon-512.png", "og.png"]) {
  copyFileSync(new URL(`portal/${f}`, ROOT), `${outDir}/${f}`);
}
copyFileSync(new URL("manifest.json", ROOT), `${outDir}/manifest.json`); // retained for machine clients; browsing uses search-index.json
// IndexNow ownership key (public by design): scripts/indexnow-ping.mjs submits changed URLs to Bing and others.
for (const f of readdirSync(new URL("portal/", ROOT))) if (/^indexnow-[0-9a-f]{32}\.txt$/.test(f)) copyFileSync(new URL(`portal/${f}`, ROOT), `${outDir}/${f}`);
// _probe/<slug>.json: static discovery replies for crawler redirect tests (zone redirect rules; no Worker runs).
mkdirSync(`${outDir}/_probe`, { recursive: true });
for (const f of readdirSync(new URL("portal/_probe/", ROOT))) copyFileSync(new URL(`portal/_probe/${f}`, ROOT), `${outDir}/_probe/${f}`);
// Pages headers: probe files are machine replies, not pages (keep them out of search indexes; short cache).
writeFileSync(`${outDir}/_headers`, `/_probe/*\n  X-Robots-Tag: noindex\n  Cache-Control: public, max-age=300\n`);
writeFileSync(`${outDir}/privacy/index.html`, render("privacy.md", "Privacy Policy"));
writeFileSync(`${outDir}/terms/index.html`, render("terms.md", "Terms of Service"));
mkdirSync(`${outDir}${SERVICES_PATH}`, { recursive: true });
writeFileSync(`${outDir}${SERVICES_PATH}index.html`, servicesPage());
for (const s of manifest.servers) {
  mkdirSync(`${outDir}/${s.slug}`, { recursive: true });
  writeFileSync(`${outDir}/${s.slug}/index.html`, productPage(s));
}
for (const g of groupsPresent) {
  mkdirSync(`${outDir}${categoryPath(g)}`, { recursive: true });
  writeFileSync(`${outDir}${categoryPath(g)}index.html`, categoryPage(g));
}
if (POSTS.length) {
  mkdirSync(`${outDir}/blog`, { recursive: true });
  writeFileSync(`${outDir}/blog/index.html`, blogIndexPage());
  for (const p of POSTS) {
    mkdirSync(`${outDir}${postPath(p)}`, { recursive: true });
    writeFileSync(`${outDir}${postPath(p)}index.html`, postPage(p));
  }
}
// A top-level 404.html makes Cloudflare Pages return a real 404 for unknown paths instead of its
// SPA fallback (serving index.html with 200 for every URL = soft-404s / duplicate content).
writeFileSync(`${outDir}/404.html`, SHELL("Page not found", `<div class="notfound"><h1>Page not found</h1>
<p>That page does not exist. Search for the tool you need, or pick a category.</p>
<form class="search-form" action="/servers/" method="get" role="search">${searchField(manifest.servers.length)}</form>
<h2>Categories</h2>
<div class="category-links">${groups.map((g) => `<a class="category-link" href="${g.url}">${esc(g.name)} <span>${g.count}</span></a>`).join("")}</div></div>`).replace("<head>", '<head><meta name="robots" content="noindex">'));

// ---- sitemap.xml + robots.txt (real files — Cloudflare Pages otherwise serves index.html
// for a missing /sitemap.xml or /robots.txt, so without these search engines get no page list). ----
const base = SITE;
const urls = [`${base}/`, ...Array.from({ length: directoryPageCount }, (_, i) => `${base}${staticPagePath(i + 1)}`), `${base}${SERVICES_PATH}`, `${base}/privacy/`, `${base}/terms/`, ...groupsPresent.map((g) => `${base}${categoryPath(g)}`), ...manifest.servers.map((s) => `${base}${pagePath(s)}`),
  ...(POSTS.length ? [`${base}/blog/`, ...POSTS.map((p) => `${base}${postPath(p)}`)] : [])];
writeFileSync(`${outDir}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") + `\n</urlset>\n`);
writeFileSync(`${outDir}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);

// llms.txt (llmstxt.org): the catalog in plain Markdown for AI answer engines, which are how most users
// find a server. One line per server: the page, what it does, and the URL to add to an MCP client.
const ft0 = freeTier(manifest.servers[0]), pt0 = proTier(manifest.servers[0]), plus0 = plusTier(manifest.servers[0]);
writeFileSync(`${outDir}/llms.txt`,
  `# usefulapi.io\n\n` +
  `> ${manifest.servers.length} hosted MCP servers that connect AI assistants (Claude, ChatGPT, Codex, Cursor and other MCP clients) to business APIs. ` +
  `Each server is a remote MCP endpoint with an OAuth login: add its URL to the client as a custom connector, then sign in ` +
  `with your vendor account or API key (a few public-data servers ask only for an email code). ` +
  (ft0 && pt0 ? `Free: ${ft0.limit}. Pro: ${priceText(pt0)}, ${limitText(pt0)}. ` +
    (plus0 ? `Pro+: ${priceText(plus0)}, ${limitText(plus0)}. ` : "") +
    `Paid plans are per server; each server's page states its billing unit (for example per user or per account).` : "") + `\n\n` +
  groupsPresent.map((g) => `## ${g}\n\n` + manifest.servers.filter((x) => groupOf(x) === g).sort((x, y) => x.name.localeCompare(y.name))
    .map((x) => `- [${x.name} MCP server](${base}${pagePath(x)}): ${x.description.replace(/^MCP server for [^—]+— */, "").replace(/^./, (c) => c.toUpperCase())} Server URL: ${x.endpoint}`).join("\n")).join("\n\n") +
  (POSTS.length ? `\n\n## Blog\n\n` + POSTS.map((p) => `- [${p.title}](${base}${postPath(p)}): ${p.description}`).join("\n") : "") +
  `\n\n## Custom work\n\n- [Custom integrations and MCP servers](${base}${SERVICES_PATH}): we build new MCP servers, extra tools for an existing server, integrations and connectors between business systems (also without AI), AI assistant setups and private deployments. Contact: support@usefulapi.io, subject "Custom work".` +
  `\n\n## Optional\n\n- [Terms of Service](${base}/terms/)\n- [Privacy Policy](${base}/privacy/)\n`);

// robots.txt for the *worker* subdomains (<slug>.usefulapi.io). Those are machine MCP
// endpoints with nothing to index — the indexable surface is this portal's /<slug>/ page.
// A Cloudflare Single Redirect maps <slug>.usefulapi.io/robots.txt here, because the worker
// subdomains have no static-file surface of their own. Crawlers follow robots.txt redirects
// and apply the final body to the requesting host.
writeFileSync(`${outDir}/mcp-robots.txt`,
  `# Applies to the <slug>.usefulapi.io MCP server subdomains (via redirect).\n` +
  `# These hosts are JSON-RPC API endpoints; the human-readable pages live on ${base}.\n` +
  `User-agent: *\nDisallow: /\n\nSitemap: ${base}/sitemap.xml\n`);

// Visit source tag. Most visitors arrive from AI apps that send no Referer, and the Free zone plan
// does not log query strings, so a landing page asks for /_src/<source><path> once: the zone's request
// log then records utm_source (or the referring host, or "none") and the landing page.
// _redirects answers that path with a tiny static file.
const SOURCE_TAG = `<script>(function(){try{var r="";try{r=new URL(document.referrer).hostname}catch(e){}` +
  `if(/(^|\\.)usefulapi\\.io$/.test(r))return;var q=new URLSearchParams(location.search);` +
  `var s=(q.get("utm_source")||q.get("ref")||r||"none").toLowerCase().replace(/[^a-z0-9.-]/g,"").replace(/^\\.+/,"").slice(0,60)||"none";` +
  `fetch("/_src/"+s+location.pathname,{keepalive:true,credentials:"omit"}).catch(function(){})}catch(e){}})()</script>`;
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? htmlFiles(`${dir}/${e.name}`) : e.name.endsWith(".html") ? [`${dir}/${e.name}`] : []);
for (const f of htmlFiles(outDir)) {
  if (f === `${outDir}/404.html`) continue;
  const html = readFileSync(f, "utf8");
  if (!html.includes("</head>")) throw new Error(`${f}: no </head> for the source tag`);
  writeFileSync(f, html.replace("</head>", () => `${SOURCE_TAG}</head>`));
}
writeFileSync(`${outDir}/_src.txt`, "ok\n");
writeFileSync(`${outDir}/_redirects`, `/_src/* /_src.txt 200\n`);
writeFileSync(`${outDir}/_headers`, readFileSync(`${outDir}/_headers`, "utf8") +
  `/_src/*\n  X-Robots-Tag: noindex\n  Cache-Control: no-store\n/_src.txt\n  X-Robots-Tag: noindex\n`);

console.log(`built portal → ${outDir}/ (index.html, privacy/, terms/, ${POSTS.length} blog post(s), robots.txt, mcp-robots.txt, llms.txt, sitemap.xml [${urls.length} urls], ${manifest.servers.length} product page(s): ${manifest.servers.map((s) => s.slug).join(", ")})`);
