import { test, before, after } from "node:test";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadBlog } from "../blog.mjs";
import { sharedPlans } from "../pricing.mjs";
import { PAGE_SIZE, cardsHtml, directoryHref, paginate, paginationHtml, selectServers, staticPagePath } from "../portal/catalog-model.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(readFileSync(join(root, "manifest.json")));
let output, index;
before(() => {
  output = mkdtempSync(join(tmpdir(), "usefulapi-catalog-"));
  execFileSync(process.execPath, ["build.mjs", output], { cwd: root, stdio: "pipe" });
  index = JSON.parse(readFileSync(join(output, "search-index.json")));
});
after(() => rmSync(output, { recursive: true, force: true }));
const read = (path) => readFileSync(join(output, path), "utf8");

test("homepage is a small, static starting point with accurate category counts", () => {
  const home = read("index.html");
  assert.equal((home.match(/class="card"/g) || []).length, 12);
  assert.ok(home.includes(`Search ${manifest.servers.length} integrations`));
  assert.ok(home.includes(`Browse all ${manifest.servers.length} integrations`));
  assert.ok(!home.includes("manifest.json") && !home.includes("search-index.json"));
  assert.ok(Buffer.byteLength(home) < 20000);
  for (const group of index.groups) {
    assert.equal(group.count, index.servers.filter((s) => s.group === group.name).length);
    assert.ok(home.includes(`href="${group.url}"`));
    assert.ok(existsSync(join(output, group.url, "index.html")));
  }
});

test("every integration is reachable exactly once across the static directory pages", () => {
  const slugs = [], totalPages = Math.ceil(manifest.servers.length / PAGE_SIZE);
  for (let page = 1; page <= totalPages; page++) {
    const path = staticPagePath(page), html = read(`${path}index.html`);
    const cards = [...html.matchAll(/class="card" href="\/([^/]+)\/"/g)].map((m) => m[1]);
    assert.equal(cards.length, Math.min(PAGE_SIZE, manifest.servers.length - (page - 1) * PAGE_SIZE));
    assert.ok(html.includes(`<link rel="canonical" href="https://usefulapi.io${path}">`));
    assert.ok(read("sitemap.xml").includes(`<loc>https://usefulapi.io${path}</loc>`));
    if (page < totalPages) assert.ok(html.includes(`href="${staticPagePath(page + 1)}"`));
    slugs.push(...cards);
  }
  assert.equal(new Set(slugs).size, manifest.servers.length);
  assert.deepEqual(slugs.sort(), manifest.servers.map((s) => s.slug).sort());
});

test("search index omits tool payloads and pricing, while searching names and tool words", () => {
  assert.equal(index.servers.length, manifest.servers.length);
  assert.ok(Buffer.byteLength(JSON.stringify(index)) < Buffer.byteLength(JSON.stringify(manifest)) / 8);
  assert.ok(index.servers.every((s) => !s.tools && !s.pricing && !s.login));
  assert.equal(selectServers(index.servers, { q: "Pipedrive", sort: "relevance" })[0].slug, "pipedrive");
  assert.ok(selectServers(index.servers, { q: "create invoice" }).some((s) => s.slug === "freeagent"));
  const exactTool = manifest.servers.find((s) => s.slug === "pipedrive").tools.find((t) => /list.*deal/i.test(t.name));
  assert.ok(exactTool);
  assert.ok(selectServers(index.servers, { q: exactTool.name }).some((s) => s.slug === "pipedrive"));
  assert.ok(selectServers(index.servers, { q: "billing", category: "Payments & Billing" }).every((s) => s.group === "Payments & Billing"));
  assert.deepEqual(selectServers(index.servers, { q: "zzzz-no-such-integration-zzzz" }), []);
});

test("pagination clamps invalid pages and covers results without duplicates", () => {
  const sorted = selectServers(index.servers);
  assert.equal(paginate(sorted, -8).page, 1);
  assert.equal(paginate(sorted, "invalid").page, 1);
  assert.equal(paginate(sorted, 99999).page, Math.ceil(sorted.length / PAGE_SIZE));
  assert.deepEqual(paginate([], 9), { page: 1, pages: 1, total: 0, items: [] });
  const first = paginate(sorted, 1).items, second = paginate(sorted, 2).items;
  assert.equal(first.length, 24);
  assert.ok(!first.some((s) => second.includes(s)));
});

test("filtered pagination preserves search, category and ordering in shareable links", () => {
  const state = { q: "create & update", category: "CRM & Sales", sort: "relevance", page: 2 };
  const url = new URL(directoryHref(state), "https://usefulapi.io");
  for (const [key, value] of Object.entries(state)) assert.equal(url.searchParams.get(key), String(value));
  assert.equal(directoryHref({ page: 2 }), "/servers/page/2/");
  assert.equal(directoryHref(), "/servers/");
  const html = paginationHtml({ page: 2, pages: 6 }, state);
  assert.ok(html.includes("aria-current=\"page\""));
  assert.ok(html.includes("rel=\"prev\"") && html.includes("rel=\"next\""));
  assert.ok(html.includes("category=CRM+%26+Sales"));
});

test("card content is escaped and shows group, tool count and free tier, never tool names or prices", () => {
  const html = cardsHtml([{ slug: "example", name: '<script>alert("x")</script>', description: "A & B", category: "payments", group: "Payments & Billing", toolCount: 7, free: "50 free tool calls a month", tools: [{ name: "secret" }], pricing: [{ monthly: "$9" }] }]);
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;") && html.includes("A &amp; B"));
  assert.ok(html.includes("Payments &amp; Billing") && html.includes("7 tools · 50 free tool calls a month"));
  assert.ok(!html.includes("secret") && !html.includes("$9"));
});

test("homepage and directory cards carry real tool counts; directory pages drop the homepage intro", () => {
  const pipedrive = index.servers.find((s) => s.slug === "pipedrive");
  assert.equal(pipedrive.toolCount, manifest.servers.find((s) => s.slug === "pipedrive").tools.length);
  assert.match(pipedrive.free, /^\d[\d,]* free tool calls a month$/);
  assert.ok(read("index.html").includes(`${pipedrive.toolCount} tools`));
  assert.ok(read("index.html").includes('class="tagline"'));
  assert.ok(!read("servers/index.html").includes('class="tagline"'));
  assert.equal((read("index.html").match(/Browse all \d+/g) || []).length, 1);
});

test("every directory card and every search-index slice renders group and tool metadata", () => {
  const totalPages = Math.ceil(manifest.servers.length / PAGE_SIZE);
  for (let page = 1; page <= totalPages; page++) {
    const html = read(`${staticPagePath(page)}index.html`);
    assert.equal((html.match(/class="meta">\d+ tools · \d[\d,]* free tool calls a month</g) || []).length, (html.match(/class="card"/g) || []).length);
  }
  // catalog.js renders search results from search-index.json entries with the same cardsHtml.
  for (const s of index.servers) {
    const html = cardsHtml([s]);
    assert.ok(html.includes(`<span class="category">${s.group.replace(/&/g, "&amp;")}</span>`), s.slug);
    assert.ok(html.includes(`<span class="meta">${s.toolCount} tools · ${s.free}</span>`), s.slug);
    assert.ok(s.toolCount > 0 && /^\d[\d,]* free tool calls a month$/.test(s.free), s.slug);
  }
});

test("blog index keeps every post in the HTML and adds the show-more button only when needed", () => {
  const html = read("blog/index.html");
  const posts = loadBlog(JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"))).posts.filter((p) => p.lang === "en").length;
  assert.equal((html.match(/<li\b[^>]*><a href="\/blog\//g) || []).length, posts);
  assert.ok(html.includes('id="post-list"'));
  assert.equal(html.includes('id="more-posts"'), posts > 10);
  assert.ok(!/<li[^>]* hidden/.test(html)); // hidden only by the script, so no-JS readers see all posts
});

test("links inside sentences keep an underline (colour alone is not a link cue)", () => {
  const css = readFileSync(join(root, "portal/catalog.css"), "utf8");
  for (const sel of [".empty a", "#catalog-error a", "noscript a"]) assert.match(css, new RegExp(`${sel.replace(/[.#]/g, "\\$&")}[^{]*\\{text-decoration:underline`));
  assert.ok(read("servers/index.html").includes("<noscript>"));
});

test("every page type has the shared top bar with the custom-integration link; the section link is marked current", () => {
  const pages = { "index.html": "", "servers/index.html": "/servers/", "servers/page/2/index.html": "/servers/", "pipedrive/index.html": "",
    "category/crm-and-sales/index.html": "", "blog/index.html": "/blog/", "services/index.html": "/services/", "pricing/index.html": "", "privacy/index.html": "", "terms/index.html": "", "404.html": "" };
  const post = readdirSync(join(output, "blog"), { withFileTypes: true }).find((d) => d.isDirectory()).name;
  pages[`blog/${post}/index.html`] = "/blog/";
  for (const [path, current] of Object.entries(pages)) {
    const html = read(path);
    assert.equal((html.match(/<header class="topbar">/g) || []).length, 1, path);
    assert.ok(html.includes('<a href="/services/" class="nav-cta"'), path);
    const bar = html.match(/<header class="topbar">[\s\S]*?<\/header>/)[0];
    const marked = [...bar.matchAll(/<a href="([^"]+)"[^>]*aria-current="page"[^>]*>/g)].map((m) => m[1]).filter((h) => ["/servers/", "/blog/", "/services/"].includes(h));
    assert.deepEqual(marked, current ? [current] : [], path);
    assert.ok(!/<div class="brand"><svg/.test(html), path);
  }
  for (const path of ["index.html", "servers/index.html"]) assert.match(read(path), /<\/header>\s*<main>\s*<div class="intro">[\s\S]*?<h1>/, path);
  assert.ok(read("catalog.css").includes(".topbar{"));
  assert.ok(read("index.html").includes('<button class="search-submit" type="submit">Search</button>'));
});

test("every page type shares one width, one footer and the same base CSS", () => {
  const post = readdirSync(join(output, "blog"), { withFileTypes: true }).find((d) => d.isDirectory()).name;
  const pages = ["index.html", "servers/index.html", "category/crm-and-sales/index.html", "pipedrive/index.html", "blog/index.html", `blog/${post}/index.html`, "services/index.html", "pricing/index.html", "privacy/index.html", "terms/index.html", "404.html"];
  for (const path of pages) {
    const html = read(path);
    const css = html.includes('href="/catalog.css?v=') ? read("catalog.css") : html.match(/<style>([\s\S]*?)<\/style>/)[1];
    assert.deepEqual([...css.matchAll(/\.wrap\{max-width:(\d+)px/g)].map((m) => m[1]), ["1008"], path);
    assert.equal((html.match(/<footer class="site">/g) || []).length, 1, path);
    assert.ok(!/<footer>/.test(html), path);
  }
});

test("category pages use the directory cards; the 404 page offers search and categories", () => {
  for (const group of index.groups) {
    const html = read(`${group.url.slice(1)}index.html`);
    assert.equal((html.match(/class="card"/g) || []).length, group.count, group.name);
    assert.ok(html.includes(`<h1>${group.name.replace(/&/g, "&amp;")} integrations</h1>`), group.name);
  }
  const notFound = read("404.html");
  assert.ok(notFound.includes('<form class="search-form" action="/servers/"') && notFound.includes('name="q"'));
  assert.equal((notFound.match(/class="category-link"/g) || []).length, index.groups.length);
});

test("text pages use the full column and the phone top bar stays on one row", () => {
  const post = readdirSync(join(output, "blog"), { withFileTypes: true }).find((d) => d.isDirectory()).name;
  for (const path of [`blog/${post}/index.html`, "services/index.html", "privacy/index.html", "404.html"]) assert.ok(!read(path).includes("max-width:720px"), path);
  assert.ok(read("index.html").includes('<a href="/servers/" class="nav-wide">Integrations</a>'));
  assert.match(read("catalog.css"), /\.topbar \.nav-wide\{display:none\}/);
});

test("catalog CSS and JS URLs carry a content hash, so browsers never keep a stale copy", () => {
  const { createHash } = require("node:crypto");
  const hash = (t) => createHash("sha256").update(t).digest("hex").slice(0, 10);
  for (const path of ["index.html", "servers/index.html", "category/crm-and-sales/index.html"])
    assert.ok(read(path).includes(`<link rel="stylesheet" href="/catalog.css?v=${hash(read("catalog.css"))}">`), path);
  assert.ok(read("servers/index.html").includes(`src="/catalog.js?v=${hash(read("catalog.js"))}"`));
  assert.ok(read("catalog.js").includes(`from "/catalog-model.mjs?v=${hash(read("catalog-model.mjs"))}"`));
});

test("phones show six category pills and a Show-all button; without JS every pill is in the HTML", () => {
  const home = read("index.html");
  const block = home.match(/<div class="category-links">([\s\S]*?)<\/div><script>([\s\S]*?)<\/script>/);
  assert.ok(block, "pills followed by their script");
  assert.equal((block[1].match(/class="category-link"/g) || []).length, index.groups.length);
  assert.ok(block[2].includes("Show all") && block[2].includes("collapsible"));
  assert.match(read("catalog.css"), /\.category-links\.collapsible \.category-link:nth-child\(n\+7\)\{display:none\}/);
  assert.ok(!read("catalog.css").includes("overflow-x:auto;margin:-8px"));
});

test("product header shows the Connect button and one short free-tier label only", () => {
  const s = manifest.servers.find((x) => x.status === "live" && (x.pricing || []).some((p) => /free/i.test(p.plan)));
  const html = read(`${s.slug}/index.html`);
  const facts = html.match(/<div class="facts">(.*?)<\/div>/)[1];
  // On phones the name is hidden visually only, so the accessible name stays "Connect <name>".
  assert.match(html, /@media \(max-width:560px\)\{\.facts\{font-size:14px\}\.cta-name\{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect\(0 0 0 0\)/);
  assert.doesNotMatch(html, /\.cta-name\{display:none/);
  assert.match(facts, /<a class="cta" href="#connect">Connect<span class="cta-name"> [^<]+<\/span><\/a>/);
  assert.match(facts, /<span class="f">\d[\d,]* free tool calls a month<\/span>$/);
  assert.doesNotMatch(facts, /\d+ tools|\$/);
});

test("every server has a plain-Markdown llms.txt with its URL, tools and FAQ, and no HTML left", () => {
  for (const s of manifest.servers) {
    const text = read(`${s.slug}/llms.txt`);
    assert.ok(text.startsWith(`# ${s.name} MCP server\n\n> `), `${s.slug}: title and summary`);
    assert.ok(text.includes(`- Server URL: ${s.endpoint}\n`), `${s.slug}: server URL`);
    assert.ok(text.includes(`claude mcp add --transport http ${s.slug} ${s.endpoint}`), `${s.slug}: Claude Code command`);
    if ((s.tools || []).length) assert.ok(text.includes(`## Tools (${s.tools.length})`) && s.tools.every((t) => text.includes(`\`${t.name}\``)), `${s.slug}: every tool`);
    assert.ok(text.includes("## FAQ\n\n### "), `${s.slug}: FAQ`);
    // Code spans may hold placeholders such as `<id>:<code>`. Outside them, every < is escaped and every link is absolute.
    const prose = text.replace(/`[^`\n]*`/g, "");
    assert.doesNotMatch(prose, /(?<!\\)<\/?[A-Za-z]|&(?:amp|lt|gt|quot|rsquo|rsaquo|raquo);/, `${s.slug}: no HTML tags or entities`);
    assert.doesNotMatch(prose, /(?<!\\)\]\((?!https:\/\/)/, `${s.slug}: only absolute https links`);
    assert.doesNotMatch(text.match(/`[^`\n]*`/g)?.join(" ") ?? "", /\\[<>]/, `${s.slug}: code spans stay literal`);
    for (const p of s.pricing || []) if (p.scope) assert.ok(text.includes(`${p.plan}: `) && text.includes(` ${p.scope}, `), `${s.slug}: ${p.plan} scope`);
    assert.doesNotMatch(text, /\]\(#/, `${s.slug}: anchors are absolute links`);
  }
});

test("sign-in hints decode HTML entities once, not as literal text", () => {
  for (const s of manifest.servers.filter((x) => /&(?:rsquo|rsaquo|raquo);/.test(x.login?.hint || ""))) {
    assert.doesNotMatch(read(`${s.slug}/index.html`), /&amp;(?:rsquo|rsaquo|raquo);/, `${s.slug}: page`);
  }
});

test("every live product page and llms.txt links to Claude's prefilled dialog; others do not", () => {
  const params = (u, s) => {
    const url = new URL(u);
    assert.equal(url.origin + url.pathname, "https://claude.ai/customize/connectors", s.slug);
    assert.deepEqual([...url.searchParams], [["modal", "add-custom-connector"], ["connectorName", s.name], ["connectorUrl", s.endpoint]], s.slug);
  };
  let live = 0;
  for (const s of manifest.servers) {
    const page = read(`${s.slug}/index.html`), txt = read(`${s.slug}/llms.txt`);
    const href = page.match(/href="(https:\/\/claude\.ai\/customize\/connectors\?[^"]+)"[^>]*>Add to Claude</)?.[1];
    const line = txt.match(/Prefilled dialog: (\S+)/)?.[1];
    if (s.status !== "live") { assert.equal(href, undefined, s.slug); assert.equal(line, undefined, s.slug); continue; }
    live++;
    assert.ok(href && line, s.slug);
    assert.ok(!/&(?!amp;)/.test(href), `${s.slug}: unescaped & in href`);
    params(href.replaceAll("&amp;", "&"), s);
    params(line, s);
  }
  assert.ok(live > 0);
  assert.ok(manifest.servers.some((s) => /[&'"]|[^\x00-\x7f]/.test(s.name) && s.status === "live"), "fixture: a live name with special characters");
});

test("every server has its static v1 server card and AI Catalog, with the media types set in _headers", () => {
  const headers = read("_headers");
  assert.ok(headers.includes("/*/server-card\n  Content-Type: application/mcp-server-card+json\n"));
  assert.ok(headers.includes("/*/ai-catalog.json\n  Content-Type: application/ai-catalog+json\n"));
  for (const s of manifest.servers) {
    const card = JSON.parse(read(`${s.slug}/server-card`));
    assert.equal(card.name, `io.usefulapi/${s.slug}`, s.slug);
    assert.ok(card.description.length >= 1 && card.description.length <= 100, s.slug);
    assert.deepEqual(card.remotes.map((r) => r.url), [s.endpoint], s.slug);
    const catalog = JSON.parse(read(`${s.slug}/ai-catalog.json`));
    assert.deepEqual(catalog.entries.map((e) => e.url), [`${new URL(s.endpoint).origin}/mcp/server-card`], s.slug);
  }
});

test("/pricing/ shows the shared plans from the manifest and is linked from every footer, the sitemap and llms.txt", () => {
  const html = read("pricing/index.html");
  const plans = manifest.servers[0].pricing;
  for (const p of plans) {
    assert.ok(html.includes(`<h2>${p.plan.replace(/&/g, "&amp;")}</h2>`), p.plan);
    assert.ok(html.includes(p.limit.replace(/\s*\/\s*month$/i, " a month")), p.limit);
    if (p.yearly) assert.ok(html.includes(`${p.monthly}/mo or ${p.yearly}/yr`), p.plan);
  }
  assert.ok(html.includes('<link rel="canonical" href="https://usefulapi.io/pricing/">'));
  assert.ok(html.includes("<code>pipedrive_upgrade</code>") && html.includes("<code>pipedrive_cancel_subscription</code>"));
  // The billing facts must match Terms §3: renewal, trial charge and its Pro+ exception, email from the payer, refunds, VAT.
  for (const fact of ["renew each month or year until you cancel", "charges the first monthly payment when the trial ends",
    "A change to Pro+ during the trial ends the trial and charges the full Pro+ price at once", "from the address that you paid with",
    "We do not refund partial periods, except where the law requires it", "VAT can be added", "once per account on each server"]) assert.ok(html.includes(fact), fact);
  const terms = readFileSync(join(root, "legal/terms.md"), "utf8").replace(/\s+/g, " ");
  for (const fact of ["renew automatically", "**7 days**, once per account on each server", "ends the trial and charges the full Pro+ price at once", "from the address you paid with", "non-refundable"]) assert.ok(terms.includes(fact), `Terms changed: ${fact}`);
  assert.ok(html.includes('href="/terms/#3-plans-billing-and-cancellation"') && read("terms/index.html").includes('id="3-plans-billing-and-cancellation"'));
  for (const path of ["index.html", "pipedrive/index.html", "services/index.html", "pricing/index.html"]) assert.ok(read(path).includes('<a href="/pricing/">Pricing</a>'), path);
  assert.ok(read("sitemap.xml").includes("<loc>https://usefulapi.io/pricing/</loc>"));
  assert.ok(read("llms.txt").includes("All plans: https://usefulapi.io/pricing/"));
});

test("sharedPlans: one plan list for every server; only the billing unit may differ", () => {
  const plans = (scope, pro = "$9") => [{ plan: "Free", limit: "50 tool calls / month", monthly: "$0" },
    { plan: "Pro", limit: "10,000 tool calls / month", monthly: pro, yearly: "$90", scope }, { plan: "Pro+", limit: "100,000 tool calls / month", monthly: "$39", yearly: "$390", scope }];
  assert.equal(sharedPlans([{ pricing: plans("per user") }, { pricing: plans("per account") }]).pt.monthly, "$9");
  assert.throws(() => sharedPlans([{ pricing: plans("per user") }, { pricing: plans("per user", "$12") }]), /one shared plan list/);
  assert.throws(() => sharedPlans([{ pricing: plans().slice(0, 2) }]), /Free, Pro and Pro\+/);
});
