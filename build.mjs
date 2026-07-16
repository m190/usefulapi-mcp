#!/usr/bin/env node
// build.mjs — assemble the usefulapi.io static site into <outDir> (default: dist).
// Run in-repo (Cloudflare Pages build command: `node build.mjs dist`, output dir `dist`).
//   <outDir>/index.html            (portal, copied from portal/index.html)
//   <outDir>/privacy/index.html    (rendered from legal/privacy.md)
//   <outDir>/terms/index.html      (rendered from legal/terms.md)
// Minimal md->html tuned to the legal docs. No deps.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";

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
      out.push(`<h${lvl}>${inline(line.replace(/^#+\s/, ""))}</h${lvl}>`);
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
const SHELL = (title, body) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} — usefulapi</title>
<style>
 :root{--bg:#fbfbfa;--fg:#1a1a1a;--muted:#6b6b6b;--border:#e6e6e3;--accent:#4f46e5;--chip:#f0f0ee}
 @media(prefers-color-scheme:dark){:root{--bg:#0f0f11;--fg:#ececec;--muted:#9a9a9a;--border:#262629;--accent:#8b83f8;--chip:#212125}}
 *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
 .wrap{max-width:720px;margin:0 auto;padding:56px 24px 96px}
 a{color:var(--accent)} h1{font-size:30px;letter-spacing:-.02em;margin:0 0 24px}
 h2{font-size:20px;margin:36px 0 10px} p{margin:0 0 14px} ul{margin:0 0 14px;padding-left:22px}
 li{margin:4px 0} code{background:var(--chip);padding:2px 6px;border-radius:6px;font-size:13px}
 .home{display:inline-block;margin-bottom:28px;color:var(--muted);text-decoration:none;font-size:14px}.home:hover{color:var(--accent)}
</style></head><body><div class="wrap">
<a class="home" href="/">← usefulapi</a>
${body}
</div></body></html>`;
const render = (mdName, title) => SHELL(title, mdToHtml(readFileSync(new URL(`legal/${mdName}`, ROOT), "utf8")));

// ---- per-product pages (generated from manifest.json — the single source of truth) ----
const manifest = JSON.parse(readFileSync(new URL("manifest.json", ROOT), "utf8"));
const MARK = `<svg class="mark" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14b8a6"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs><rect width="512" height="512" rx="114" fill="url(#tl)"/><g fill="#fff"><circle cx="169" cy="256" r="61"/><circle cx="343" cy="256" r="61"/><rect x="169" y="223" width="174" height="66" rx="33"/></g></svg>`;
const PRODUCT_CSS = `
:root{--bg:#fbfbfa;--fg:#1a1a1a;--muted:#6b6b6b;--card:#fff;--border:#e6e6e3;--accent:#4f46e5;--chip:#f0f0ee}
@media (prefers-color-scheme:dark){:root{--bg:#0f0f11;--fg:#ececec;--muted:#9a9a9a;--card:#17171a;--border:#262629;--accent:#8b83f8;--chip:#212125}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
a{color:inherit}
.wrap{max-width:920px;margin:0 auto;padding:72px 24px 96px}
.brand{display:flex;align-items:center;gap:14px;margin-bottom:10px}
.brand .mark{width:44px;height:44px;border-radius:11px;flex:none}
h1{font-size:40px;letter-spacing:-.02em;margin:0}
.sub{color:var(--muted);font-size:18px;margin:0 0 40px;max-width:52ch}.sub strong{color:var(--fg)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
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
pre.code{margin:0;padding:11px 62px 11px 13px;background:var(--chip);border:1px solid var(--border);border-radius:8px;font:13px ui-monospace,SFMono-Regular,Menlo,monospace;overflow-x:auto}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:18px}
.chip{background:var(--chip);border-radius:999px;padding:3px 10px;font-size:12px;color:var(--muted)}
.chip.live{color:#12873f}@media (prefers-color-scheme:dark){.chip.live{color:#5fd68a}}
.hint{color:var(--muted);font-size:14px;margin:24px 0 0;max-width:560px}
code{background:var(--chip);padding:2px 6px;border-radius:6px;font-size:13px}
footer{margin-top:44px;color:var(--muted);font-size:13px}footer a{color:var(--muted)}`;
const COPY_JS = `<script>for(const b of document.querySelectorAll(".copy")){b.addEventListener("click",function(){var el=b.parentElement.querySelector(".url,pre");navigator.clipboard.writeText((el.textContent||"").trim()).then(function(){var o=b.textContent;b.textContent="Copied";b.classList.add("ok");setTimeout(function(){b.textContent=o;b.classList.remove("ok");},1200);}).catch(function(){});});}</script>`;
const chip = (t, cls) => `<span class="chip${cls ? " " + cls : ""}">${t}</span>`;
function productPage(s) {
  const live = s.status === "live";
  const authStep = s.auth === "oauth"
    ? `Authorize with your <b>${esc(s.name)}</b> account`
    : `Authenticate with <b>${esc(s.name)}</b> when prompted`;
  const cards = live ? `<div class="grid">
<div class="card"><h2>Claude</h2>
<ol><li>Open <b>Settings → Connectors → Add custom connector</b></li>
<li>Paste this URL:<div class="copywrap line"><span class="url">${esc(s.endpoint)}</span><button class="copy" type="button">Copy</button></div></li>
<li>${authStep}</li></ol></div>
<div class="card"><h2>Cursor · VS Code · Windsurf · Cline</h2>
<p class="lead">Add to your MCP config, then reload &amp; authorize:</p>
<div class="copywrap block"><pre class="code">{
  "mcpServers": {
    "${esc(s.slug)}": {
      "url": "${esc(s.endpoint)}"
    }
  }
}</pre><button class="copy" type="button">Copy</button></div></div>
</div>` : `<div class="card"><h2>Launching soon</h2><p class="lead">This server isn't live yet — check back shortly.</p></div>`;
  const chips = `<div class="chips">${live ? chip("live", "live") : chip("launching soon")}${s.tool_count ? chip(`${s.tool_count} tools`) : ""}${s.free_limit ? chip(`Free ${esc(s.free_limit)}`) : ""}${s.pro ? chip(`Pro ${esc(s.pro)}`) : ""}</div>`;
  const hint = live ? `<p class="hint">This is a Model Context Protocol endpoint — meant to be connected from an AI client, not opened in a browser. An <code>invalid_token</code> response at the URL is the auth gate working as designed; clients authenticate automatically.</p>` : "";
  const body = `<div class="brand">${MARK}<h1>usefulapi</h1></div>
<p class="sub"><strong>${esc(s.name)} MCP server.</strong> ${esc(s.description)}</p>
${cards}
${chips}
${hint}
<footer><a href="/">← Browse all usefulapi servers</a> &nbsp;·&nbsp; <a href="/privacy">Privacy</a> &nbsp;·&nbsp; <a href="/terms">Terms</a> &nbsp;·&nbsp; <a href="mailto:support@usefulapi.io">support@usefulapi.io</a></footer>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(s.name)} — usefulapi MCP server</title>
<meta name="description" content="${esc(s.description)}">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<style>${PRODUCT_CSS}</style></head>
<body><div class="wrap">${body}</div>${COPY_JS}</body></html>`;
}

mkdirSync(`${outDir}/privacy`, { recursive: true });
mkdirSync(`${outDir}/terms`, { recursive: true });
// Inject manifest.json (source of truth) into the portal, overriding its dev-fallback MANIFEST.
let indexHtml = readFileSync(new URL("portal/index.html", ROOT), "utf8");
indexHtml = indexHtml.replace(/const MANIFEST = [\s\S]*?\n {2}\};/, `const MANIFEST = ${JSON.stringify(manifest, null, 2)};`);
writeFileSync(`${outDir}/index.html`, indexHtml);
for (const f of ["icon.svg", "favicon-16.png", "favicon-32.png", "apple-touch-icon.png", "icon-256.png", "icon-512.png", "og.png"]) {
  copyFileSync(new URL(`portal/${f}`, ROOT), `${outDir}/${f}`);
}
copyFileSync(new URL("manifest.json", ROOT), `${outDir}/manifest.json`); // homepage fetches this
writeFileSync(`${outDir}/privacy/index.html`, render("privacy.md", "Privacy Policy"));
writeFileSync(`${outDir}/terms/index.html`, render("terms.md", "Terms of Service"));
for (const s of manifest.servers) {
  mkdirSync(`${outDir}/${s.slug}`, { recursive: true });
  writeFileSync(`${outDir}/${s.slug}/index.html`, productPage(s));
}
console.log(`built portal → ${outDir}/ (index.html, privacy/, terms/, ${manifest.servers.length} product page(s): ${manifest.servers.map((s) => s.slug).join(", ")})`);
