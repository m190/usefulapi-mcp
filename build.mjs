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
const SITE = manifest.portal.domain.replace(/\/$/, "");

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
const proTier = (s) => (s.pricing || []).find((p) => /pro/i.test(p.plan));
const freeTier = (s) => (s.pricing || []).find((p) => /free/i.test(p.plan));
const MARK = `<svg class="mark" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14b8a6"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs><rect width="512" height="512" rx="114" fill="url(#tl)"/><g fill="#fff"><circle cx="169" cy="256" r="61"/><circle cx="343" cy="256" r="61"/><rect x="169" y="223" width="174" height="66" rx="33"/></g></svg>`;
const PRODUCT_CSS = `
:root{--bg:#fbfbfa;--fg:#1a1a1a;--muted:#6b6b6b;--card:#fff;--border:#e6e6e3;--accent:#4f46e5;--chip:#f0f0ee}
@media (prefers-color-scheme:dark){:root{--bg:#0f0f11;--fg:#ececec;--muted:#9a9a9a;--card:#17171a;--border:#262629;--accent:#8b83f8;--chip:#212125}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
a{color:inherit}
.wrap{max-width:920px;margin:0 auto;padding:52px 24px 96px}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.brand .mark{width:38px;height:38px;border-radius:10px;flex:none}
h1{font-size:32px;letter-spacing:-.02em;margin:0}
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
.tname{font-weight:600;font-size:13px}.tdesc{color:var(--muted);font-size:13px;margin-top:2px}
footer{margin-top:44px;color:var(--muted);font-size:13px}footer a{color:var(--muted)}
.crumbs{font-size:13px;color:var(--muted);margin:0 0 14px}.crumbs a{color:var(--muted);text-decoration:none}.crumbs a:hover{color:var(--accent)}
.rel{display:flex;flex-wrap:wrap;gap:8px}.rel a{background:var(--chip);border-radius:999px;padding:4px 12px;font-size:13px;text-decoration:none}.rel a:hover{color:var(--accent)}
.hint a{color:var(--accent)}a.tname{text-decoration:none}a.tname:hover{color:var(--accent)}
.card h2 .for{font-weight:400;color:var(--muted);font-size:13px;margin-left:4px}.lead.small{font-size:13px;margin-top:10px}
.lead a{color:var(--accent)}.btn{display:inline-block;margin:2px 0;padding:4px 12px;border-radius:8px;background:var(--accent);color:#fff!important;text-decoration:none;font-size:13px;font-weight:600}
.card .lead+.copywrap{margin-top:10px}.prose p{margin:0 0 10px;font-size:15px}.prose p:last-child{margin:0}.prose a{color:var(--accent)}
.prompts{margin:0;padding:0;list-style:none;display:grid;gap:8px}.prompts li{margin:0;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 14px;font-size:15px}
.prompts li::before{content:"“";color:var(--muted)}.prompts li::after{content:"”";color:var(--muted)}
.faq details{border-bottom:1px solid var(--border);padding:12px 0}.faq summary{cursor:pointer;font-weight:600}.faq p{margin:8px 0 0;color:var(--muted);font-size:15px}.faq a{color:var(--accent)}
@media (max-width:560px){table td{overflow-wrap:anywhere}.tools td:first-child{white-space:normal;max-width:38vw}.tools code{word-break:break-all}.wrap{padding:32px 16px 72px}.brand .mark{width:34px;height:34px}h1{font-size:27px}.sub{font-size:15px;margin-bottom:22px}}`;
const COPY_JS = `<script>for(const b of document.querySelectorAll(".copy")){b.addEventListener("click",function(){var el=b.parentElement.querySelector(".url,pre");navigator.clipboard.writeText((el.textContent||"").trim()).then(function(){var o=b.textContent;b.textContent="Copied";b.classList.add("ok");setTimeout(function(){b.textContent=o;b.classList.remove("ok");},1200);}).catch(function(){});});}</script>`;
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
function authStepFor(s) {
  const k = loginKind(s);
  if (k === "upstream") return `Claude opens the <b>${esc(s.name)}</b> login page: sign in and approve the access`;
  if (k === "email") return `Claude opens the login page: enter your email and the 6-digit code from <b>login@usefulapi.io</b> (no ${esc(s.name)} key needed)`;
  return `Claude opens the login page: enter ${credentialText(s)}`;
}
// Some clients send a configured Authorization header instead of the OAuth token (every call → 401).
function loginByOAuth(s) {
  const k = loginKind(s);
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
  "health-gorilla", "photon-health", "spruce-health", "cliniko", "nookal", "infermedica"]);
const PATIENT_DATA_TEXT = `Do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs).`;
const patientDataNote = (s) => PATIENT_DATA.has(s.slug)
  ? `<p><b>Patient data:</b> ${PATIENT_DATA_TEXT} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.</p>` : "";
// "Before you connect": what the login asks for and where to find it in the vendor's app.
function setupSection(s) {
  const k = loginKind(s), opt = optionalFields(s);
  let lead;
  if (k === "upstream") lead = `<p>You sign in with your ${esc(s.name)} account and approve the access (OAuth). You do not need an API key.</p>`;
  else if (k === "email") lead = `<p>You do not need an account or a key for ${esc(s.name)}. You log in with your email address and a 6-digit code.</p>`;
  else lead = `<p>The login page asks for ${credentialText(s)}.</p>`;
  const optional = opt.length ? `<p>Optional: ${andList(opt.map((l) => `<b>${esc(l)}</b>`))}.</p>` : "";
  const help = [s.keyHelp, s.login?.hint].filter(Boolean).map((h) => `<p>${hintHtml(h)}</p>`).join("");
  return `<h2 class="sec">Before you connect</h2>\n<div class="card prose">${patientDataNote(s)}${lead}${optional}${help}<p>${noHeaderText(s)}</p></div>`;
}
function examplesSection(s) {
  if (!(s.examples || []).length) return "";
  return `<h2 class="sec">Example prompts</h2>\n<ul class="prompts">${s.examples.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>\n` +
    `<p class="hint">Turn on the ${esc(s.name)} connector, then ask in plain words. The AI picks the tools.</p>`;
}
// Generic FAQ, built only from facts in the manifest (tools, login kind, pricing). Returns [{q, a}] with `a` as HTML.
function faqFor(s) {
  const n = esc(s.name), k = loginKind(s);
  const tools = s.tools || [];
  const reads = tools.filter((t) => t.type === "read").length, writes = tools.filter((t) => t.type === "write").length;
  const metaTool = (suffix) => tools.find((t) => t.type === "meta" && t.name.endsWith(suffix));
  const up = metaTool("_upgrade"), cancel = metaTool("_cancel_subscription"), usage = metaTool("_usage_status"), feature = metaTool("_request_feature");
  const ft = freeTier(s), pt = proTier(s);
  const faq = [];
  faq.push({ q: `Is this an official ${n} product?`, a:
    `No. usefulapi is an independent service. It is not affiliated with or endorsed by ${n}. ` +
    (k === "email" ? `The server calls the public ${n} API for you.` : `The server calls the ${n} API with your own ${n} access, so it sees only the data that your account can see.`) });
  if (PATIENT_DATA.has(s.slug)) faq.push({ q: `Can I use this server with patient data (PHI)?`, a:
    `No. ${PATIENT_DATA_TEXT} See <a href="/terms/#5-acceptable-use">Terms, Health data</a>.` });
  faq.push({ q: `What do I need to connect?`, a:
    k === "upstream" ? `A ${n} account. You sign in to ${n} and approve the access. You do not need an API key.`
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
    `The Free plan gives ${esc(ft.limit)}. Pro costs ${esc(priceText(pt).replace(" · ", " or "))}, with ${esc(pt.limit.toLowerCase())} tool calls, for this ${n} server only.` +
    (usage ? ` Run <code>${esc(usage.name)}</code> to see how many calls you used.` : "") });
  if (up && cancel) faq.push({ q: `How do I subscribe or cancel?`, a:
    `Ask the AI to run <code>${esc(up.name)}</code>: it returns a Stripe Checkout link. To cancel, run <code>${esc(cancel.name)}</code>. Pro continues to the end of the paid period.` });
  if (feature) faq.push({ q: `What if a ${n} tool that I need is missing?`, a:
    `Tell the AI what you wanted to do. It can send the request with <code>${esc(feature.name)}</code>. We store the text with the server name, the type of AI client and the tool you tried, not with your account, and read every request when we plan new tools. You can send up to 5 requests per day.` });
  faq.push({ q: `Which AI clients can I use?`, a:
    `Any client that supports remote MCP servers (Streamable HTTP) with OAuth login: Claude (web and desktop), Claude Code, Cursor, VS Code, Windsurf and others.` });
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

function productPage(s) {
  const live = s.status === "live";
  const authStep = authStepFor(s);
  const name = esc(s.name), endpoint = esc(s.endpoint);
  const copyLine = (text) => `<div class="copywrap line"><span class="url">${text}</span><button class="copy" type="button">Copy</button></div>`;
  const copyBlock = (text) => `<div class="copywrap block"><pre class="code">${text}</pre><button class="copy" type="button">Copy</button></div>`;
  // One-click install links. Cursor: base64 of the server config. VS Code: the vscode.dev redirect to vscode:mcp/install.
  const cursorLink = `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(s.slug)}&config=${Buffer.from(JSON.stringify({ url: s.endpoint })).toString("base64")}`;
  const vscodeLink = `https://vscode.dev/redirect/mcp/install?name=${encodeURIComponent(s.slug)}&config=${encodeURIComponent(JSON.stringify({ type: "http", url: s.endpoint }))}`;
  const cards = live ? `<div class="grid">
<div class="card"><h2>Claude <span class="for">claude.ai · Desktop</span></h2>
<ol><li>Open <b>Customize → Connectors</b>, then click <b>+ Add → Add custom connector</b>.</li>
<li>Enter the name <b>${name}</b> and this URL, then click <b>Add</b>:${copyLine(endpoint)}</li>
<li>${authStep}.</li>
<li>In a chat, click <b>+ → Connectors</b> and turn on <b>${name}</b>.</li></ol>
<p class="lead small">Team and Enterprise: an Owner adds the connector for the organization first.</p></div>
<div class="card"><h2>Claude Code</h2>
<p class="lead">Run this command, then run <code>/mcp</code> in Claude Code to log in:</p>
${copyLine(`claude mcp add --transport http ${esc(s.slug)} ${endpoint}`)}</div>
<div class="card"><h2>Cursor</h2>
<p class="lead"><a class="btn" href="${attr(cursorLink)}">Add to Cursor</a> or add this to <code>~/.cursor/mcp.json</code>:</p>
${copyBlock(`{
  "mcpServers": {
    "${esc(s.slug)}": {
      "url": "${endpoint}"
    }
  }
}`)}</div>
<div class="card"><h2>VS Code</h2>
<p class="lead"><a class="btn" href="${attr(vscodeLink)}">Add to VS Code</a> or add this to <code>.vscode/mcp.json</code>:</p>
${copyBlock(`{
  "servers": {
    "${esc(s.slug)}": {
      "type": "http",
      "url": "${endpoint}"
    }
  }
}`)}</div>
</div>
<p class="hint">Other MCP clients (Windsurf, Cline, Zed and more): add the URL as a remote MCP server (Streamable HTTP). The client then opens the login page in your browser. Do not add an <code>Authorization</code> header: see <a href="#setup">Before you connect</a>.</p>` : `<div class="card"><h2>Launching soon</h2><p class="lead">This server isn't live yet — check back shortly.</p></div>`;
  const ft = freeTier(s), pt = proTier(s);
  const chips = `<div class="chips">${live ? chip("live", "live") : chip("launching soon")}${chip(`${toolCount(s)} tools`)}${ft ? chip(`Free ${esc(ft.limit)}`) : ""}${pt ? chip(`Pro ${esc(priceText(pt))}`) : ""}</div>`;

  const tagOf = (t) => `<span class="tag ${t.type}">${t.type}</span>`;
  const toolRow = (t) =>
    `<tr><td><code>${esc(t.name)}</code></td><td>${tagOf(t)}</td><td><div class="tname">${esc(t.title)}</div>` +
    `${t.description && t.description !== t.title ? `<div class="tdesc">${esc(t.description)}</div>` : ""}</td></tr>`;
  const toolsSection = (s.tools || []).length
    ? `<h2 class="sec">Tools <span class="n">${s.tools.length}</span></h2>
<table class="tools"><thead><tr><th>Tool</th><th>Type</th><th>What it does</th></tr></thead>
<tbody>${s.tools.map(toolRow).join("")}</tbody></table>`
    : "";
  const priceRow = (p) =>
    `<tr><td>${esc(p.plan)}${p.scope ? `<span class="scope">${esc(p.scope)}</span>` : ""}</td>` +
    `<td>${esc(priceText(p))}</td><td>${esc(p.limit)}</td></tr>`;
  // Billing is per product: say so, and name this server's subscribe/cancel tools.
  const metaTool = (suffix) => (s.tools || []).find((t) => t.type === "meta" && t.name.endsWith(suffix));
  const upTool = metaTool("_upgrade"), cancelTool = metaTool("_cancel_subscription");
  const billingNote = pt && upTool && cancelTool
    ? `<p class="hint">Pro covers this ${esc(s.name)} server only. Subscribe with <code>${esc(upTool.name)}</code> (it returns a Stripe Checkout link). ` +
      `Cancel any time with <code>${esc(cancelTool.name)}</code>: Pro continues to the end of the paid period, with no refund for the current period, ` +
      `and running <code>${esc(upTool.name)}</code> before then undoes the cancel. Or write to <a href="mailto:support@usefulapi.io">support@usefulapi.io</a>.</p>`
    : "";
  const pricingSection = (s.pricing || []).length
    ? `<h2 class="sec">Pricing</h2>
<table class="pricing"><thead><tr><th>Plan</th><th>Price</th><th>Limit</th></tr></thead>
<tbody>${s.pricing.map(priceRow).join("")}</tbody></table>
${billingNote}`
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
<div class="brand">${MARK}<h1>${esc(s.name)} MCP server</h1></div>
<p class="sub">${esc(s.description)} Hosted by <strong>usefulapi</strong> — connect from Claude, Cursor, or any MCP client.</p>
${cards}
${chips}
${live ? `<div id="setup">${setupSection(s)}</div>` : ""}
${live ? examplesSection(s) : ""}
${live ? toolsSection : ""}
${pricingSection}
${live ? faqSection(faq) : ""}
${hint}
${related}
<footer><a href="/">← Browse all usefulapi servers</a> &nbsp;·&nbsp; <a href="/privacy/">Privacy</a> &nbsp;·&nbsp; <a href="/terms/">Terms</a> &nbsp;·&nbsp; <a href="mailto:support@usefulapi.io">support@usefulapi.io</a></footer>`;
  const url = `${SITE}${pagePath(s)}`;
  const n = toolCount(s);
  const title = `${s.name} MCP Server — hosted, ${n} tools | usefulapi`;
  const desc = `${s.description.replace(/\.?$/, ".")} Hosted remote MCP server for Claude, Cursor & any MCP client — ${n} tools${ft ? ", free tier" : ""}.`;
  const offers = (s.pricing || []).map((p) => ({
    "@type": "Offer", name: p.plan, priceCurrency: "USD",
    price: String(p.monthly || "$0").replace(/[^0-9.]/g, "") || "0", description: p.limit
  }));
  const ld = [
    {
      "@context": "https://schema.org", "@type": "SoftwareApplication",
      name: `${s.name} MCP Server by usefulapi`, url, description: s.description,
      applicationCategory: "DeveloperApplication", operatingSystem: "Any (remote MCP server)",
      offers, publisher: { "@type": "Organization", name: "usefulapi", url: SITE }
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
<style>${PRODUCT_CSS}</style></head>
<body><div class="wrap">${body}</div>${COPY_JS}</body></html>`;
}

// Category landing pages (/category/<group>/): crawlable internal-linking hubs, one per browse group.
function categoryPage(g, list) {
  const url = `${SITE}${categoryPath(g)}`;
  const title = `${g} MCP servers — ${list.length} hosted servers | usefulapi`;
  const desc = `${list.length} hosted ${g} MCP servers: ${list.slice(0, 6).map((s) => s.name).join(", ")}${list.length > 6 ? " and more" : ""}. Connect from Claude, Cursor or any MCP client.`;
  const rows = list.map((s) =>
    `<tr><td><a class="tname" href="${pagePath(s)}">${esc(s.name)}</a></td><td><div class="tdesc">${esc(s.description)}</div></td><td>${toolCount(s)}</td></tr>`).join("");
  const others = GROUP_ORDER.filter((x) => x !== g && manifest.servers.some((s) => groupOf(s) === x));
  const ld = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: `${g} MCP servers`, url, description: desc,
    mainEntity: { "@type": "ItemList", itemListElement: list.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${SITE}${pagePath(s)}` })) }
  };
  const body = `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">usefulapi</a> › ${esc(g)}</nav>
<div class="brand">${MARK}<h1>${esc(g)} MCP servers</h1></div>
<p class="sub">${list.length} hosted, remote MCP servers for ${esc(g)} tools. Each is a Streamable HTTP endpoint with a free tier — paste the URL into Claude, Cursor, or any MCP client.</p>
<table class="tools"><thead><tr><th>Server</th><th>What it does</th><th>Tools</th></tr></thead><tbody>${rows}</tbody></table>
<h2 class="sec">Other categories</h2>
<div class="rel">${others.map((x) => `<a href="${categoryPath(x)}">${esc(x)}</a>`).join("")}</div>
<footer><a href="/">← Browse all usefulapi servers</a> &nbsp;·&nbsp; <a href="/privacy/">Privacy</a> &nbsp;·&nbsp; <a href="/terms/">Terms</a> &nbsp;·&nbsp; <a href="mailto:support@usefulapi.io">support@usefulapi.io</a></footer>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${headMeta({ title, desc, url })}
${jsonLd(ld)}
<style>${PRODUCT_CSS}</style></head>
<body><div class="wrap">${body}</div></body></html>`;
}

// ---- homepage browse groups (SINGLE SOURCE) — injected into the homepage JS AND used to
// statically pre-render the tiles so the server list is crawlable without JavaScript. ----
const GROUP_ORDER = [
  "Payments & Billing", "Fintech", "Commerce & Memberships",
  "Messaging & Communication", "CRM & Sales", "Customer Support", "Scheduling",
  "Developer Tools & Infrastructure", "Observability", "Project Management",
  "Documents & Delivery", "Business Operations", "AI", "Healthcare", "Data & Analytics", "Media"
];
const CAT_GROUP = {
  billing: "Payments & Billing", payments: "Payments & Billing", "usage-metering": "Payments & Billing",
  fintech: "Fintech", "payment-operations": "Fintech", "financial-data": "Fintech", "fraud-detection": "Fintech", tax: "Fintech",
  ecommerce: "Commerce & Memberships", membership: "Commerce & Memberships", fundraising: "Commerce & Memberships",
  email: "Messaging & Communication", chat: "Messaging & Communication", notifications: "Messaging & Communication",
  communications: "Messaging & Communication", marketing: "Messaging & Communication",
  calendar: "Scheduling",
  devops: "Developer Tools & Infrastructure", dns: "Developer Tools & Infrastructure",
  paas: "Developer Tools & Infrastructure", "feature-flags": "Developer Tools & Infrastructure",
  localization: "Developer Tools & Infrastructure", realtime: "Developer Tools & Infrastructure",
  maps: "Developer Tools & Infrastructure", "no-code-database": "Developer Tools & Infrastructure",
  devtools: "Developer Tools & Infrastructure", "dev-infra": "Developer Tools & Infrastructure",
  cloud: "Developer Tools & Infrastructure", security: "Developer Tools & Infrastructure",
  crm: "CRM & Sales", support: "Customer Support", productivity: "Business Operations",
  observability: "Observability",
  "project-management": "Project Management",
  documents: "Documents & Delivery", esignature: "Documents & Delivery", "direct-mail": "Documents & Delivery", shipping: "Documents & Delivery",
  "knowledge-base": "Documents & Delivery",
  "ai-infra": "AI", "image-generation": "AI", "speech-to-text": "AI", "document-ai": "AI",
  analytics: "Data & Analytics", "data-enrichment": "Data & Analytics",
  healthcare: "Healthcare", "health-data": "Healthcare",
  "image-cdn": "Media", "video-hosting": "Media"
};
const groupOf = (s) => CAT_GROUP[s.category] || "Other";
const groupRank = (g) => { const i = GROUP_ORDER.indexOf(g); return i === -1 ? GROUP_ORDER.length : i; };
const prettyCat = (c) => (c || "").replace(/-/g, " ").replace(/^\w/, (m) => m.toUpperCase());
// Static tile — mirrors the homepage JS card(); the client re-renders identically on load.
const homeCard = (s) => {
  const live = s.status === "live";
  const statusChip = live ? '<span class="chip live">live</span>' : '<span class="chip soon">launching soon</span>';
  const ft = freeTier(s), pt = proTier(s);
  return `<a class="card${live ? "" : " soon"}" href="${pagePath(s)}">` +
    `<div class="top"><h2>${esc(s.name)}</h2>${statusChip}</div>` +
    `<p>${esc(s.description)}</p>` +
    `<div class="chips"><span class="chip">${toolCount(s)} tools</span>` +
    `<span class="chip">${esc(prettyCat(s.category))}</span>` +
    (ft ? `<span class="chip">Free ${esc(ft.limit)}</span>` : "") +
    (pt ? `<span class="chip">Pro ${esc(priceText(pt))}</span>` : "") +
    `</div></a>`;
};
// Default (grouped) view, sectioned in GROUP_ORDER with servers A–Z — matches the JS default.
const homeResults = () => {
  const buckets = {};
  for (const s of manifest.servers) { const g = groupOf(s); (buckets[g] = buckets[g] || []).push(s); }
  return Object.keys(buckets).sort((a, b) => groupRank(a) - groupRank(b)).map((g) =>
    `<h2 class="group-head"><a href="${categoryPath(g)}">${esc(g)}</a> <span class="n">${buckets[g].length}</span></h2>` +
    `<div class="grid">${buckets[g].sort((a, b) => a.name.localeCompare(b.name)).map(homeCard).join("")}</div>`
  ).join("");
};

mkdirSync(`${outDir}/privacy`, { recursive: true });
mkdirSync(`${outDir}/terms`, { recursive: true });
// Inject manifest.json (source of truth) into the portal, overriding its dev-fallback MANIFEST.
let indexHtml = readFileSync(new URL("portal/index.html", ROOT), "utf8");
indexHtml = indexHtml.replace(/const MANIFEST = [\s\S]*?\n {2}\};/, `const MANIFEST = ${JSON.stringify(manifest, null, 2).replace(/</g, "\\u003c")};`);
// Make build.mjs authoritative for the browse groups: overwrite the page's inline dev-fallback
// GROUP_ORDER/CAT_GROUP with the copies above (single source, no drift).
indexHtml = indexHtml.replace(
  /const GROUP_ORDER = \[[\s\S]*?const CAT_GROUP = \{[\s\S]*?\n {2}\};/,
  `const GROUP_ORDER = ${JSON.stringify(GROUP_ORDER)};\n  const CAT_GROUP = ${JSON.stringify(CAT_GROUP)};`
);
// Statically pre-render the default grouped view so crawlers / no-JS clients see every product
// link and description. The homepage JS re-renders the same content on load (progressive enhancement).
indexHtml = indexHtml.replace('<main id="results"></main>', `<main id="results">${homeResults()}</main>`);
indexHtml = indexHtml.replace('<p class="count" id="count"></p>', `<p class="count" id="count">${manifest.servers.length} servers</p>`);
// SEO: server count in the title/description, canonical, structured data, and a static
// "Browse by category" footer nav (crawlable hub links; not touched by the homepage JS).
const N = manifest.servers.length;
const homeTitle = `usefulapi — ${N} hosted MCP servers for Claude, Cursor & any MCP client`;
const homeDesc = `${N} hosted, remote MCP servers for the SaaS and developer tools you already use — CRM, payments, messaging, healthcare, DevOps and more. Free tier on every server.`;
const replaceOnce = (html, from, to) => { if (!html.includes(from)) throw new Error(`portal/index.html: marker not found: ${from}`); return html.replace(from, to); };
indexHtml = replaceOnce(indexHtml, "<title>usefulapi — hosted MCP servers</title>", `<title>${esc(homeTitle)}</title>`);
indexHtml = indexHtml.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(homeDesc)}">`);
indexHtml = indexHtml.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(homeTitle)}">`);
indexHtml = indexHtml.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(homeDesc)}">`);
indexHtml = indexHtml.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${SITE}/">`);
const groupsPresent = GROUP_ORDER.concat(["Other"]).filter((g) => manifest.servers.some((s) => groupOf(s) === g));
const homeLd = [
  { "@context": "https://schema.org", "@type": "Organization", name: "usefulapi", url: `${SITE}/`, logo: `${SITE}/icon-512.png`, email: "support@usefulapi.io" },
  { "@context": "https://schema.org", "@type": "WebSite", name: "usefulapi", url: `${SITE}/`, description: homeDesc },
  { "@context": "https://schema.org", "@type": "ItemList", name: "Hosted MCP servers", numberOfItems: N,
    itemListElement: manifest.servers.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: `${s.name} MCP Server`, url: `${SITE}${pagePath(s)}` })) }
];
indexHtml = replaceOnce(indexHtml, "</head>", `<link rel="canonical" href="${SITE}/">\n${homeLd.map(jsonLd).join("\n")}\n</head>`);
indexHtml = replaceOnce(indexHtml, "  <footer>",
  `  <nav class="cats" aria-label="Browse by category"><h2 class="group-head">Browse by category</h2>` +
  groupsPresent.map((g) => `<a href="${categoryPath(g)}">${esc(g)}</a>`).join("") + `</nav>\n  <footer>`);
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
for (const g of groupsPresent) {
  const list = manifest.servers.filter((s) => groupOf(s) === g).sort((a, b) => a.name.localeCompare(b.name));
  mkdirSync(`${outDir}${categoryPath(g)}`, { recursive: true });
  writeFileSync(`${outDir}${categoryPath(g)}index.html`, categoryPage(g, list));
}
// A top-level 404.html makes Cloudflare Pages return a real 404 for unknown paths instead of its
// SPA fallback (serving index.html with 200 for every URL = soft-404s / duplicate content).
writeFileSync(`${outDir}/404.html`, SHELL("Page not found", `<h1>Page not found</h1>
<p>That page doesn't exist. <a href="/">Browse all ${manifest.servers.length} usefulapi MCP servers</a>, or pick a category:</p>
<ul>${groupsPresent.map((g) => `<li><a href="${categoryPath(g)}">${esc(g)}</a></li>`).join("")}</ul>`).replace("<head>", '<head><meta name="robots" content="noindex">'));

// ---- sitemap.xml + robots.txt (real files — Cloudflare Pages otherwise serves index.html
// for a missing /sitemap.xml or /robots.txt, so without these search engines get no page list). ----
const base = SITE;
const urls = [`${base}/`, `${base}/privacy/`, `${base}/terms/`, ...groupsPresent.map((g) => `${base}${categoryPath(g)}`), ...manifest.servers.map((s) => `${base}${pagePath(s)}`)];
writeFileSync(`${outDir}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") + `\n</urlset>\n`);
writeFileSync(`${outDir}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);

// robots.txt for the *worker* subdomains (<slug>.usefulapi.io). Those are machine MCP
// endpoints with nothing to index — the indexable surface is this portal's /<slug>/ page.
// A Cloudflare Single Redirect maps <slug>.usefulapi.io/robots.txt here, because the worker
// subdomains have no static-file surface of their own. Crawlers follow robots.txt redirects
// and apply the final body to the requesting host.
writeFileSync(`${outDir}/mcp-robots.txt`,
  `# Applies to the <slug>.usefulapi.io MCP server subdomains (via redirect).\n` +
  `# These hosts are JSON-RPC API endpoints; the human-readable pages live on ${base}.\n` +
  `User-agent: *\nDisallow: /\n\nSitemap: ${base}/sitemap.xml\n`);

console.log(`built portal → ${outDir}/ (index.html, privacy/, terms/, robots.txt, mcp-robots.txt, sitemap.xml [${urls.length} urls], ${manifest.servers.length} product page(s): ${manifest.servers.map((s) => s.slug).join(", ")})`);
