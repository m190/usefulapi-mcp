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

mkdirSync(`${outDir}/privacy`, { recursive: true });
mkdirSync(`${outDir}/terms`, { recursive: true });
copyFileSync(new URL("portal/index.html", ROOT), `${outDir}/index.html`);
writeFileSync(`${outDir}/privacy/index.html`, render("privacy.md", "Privacy Policy"));
writeFileSync(`${outDir}/terms/index.html`, render("terms.md", "Terms of Service"));
console.log(`built portal → ${outDir}/ (index.html, privacy/, terms/)`);
