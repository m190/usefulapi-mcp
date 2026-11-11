import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
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
  const html = cardsHtml([{ slug: "example", name: '<script>alert("x")</script>', description: "A & B", category: "payments", group: "Payments & Billing", toolCount: 7, free: "Free 50 calls/mo", tools: [{ name: "secret" }], pricing: [{ monthly: "$9" }] }]);
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;") && html.includes("A &amp; B"));
  assert.ok(html.includes("Payments &amp; Billing") && html.includes("7 tools · Free 50 calls/mo"));
  assert.ok(!html.includes("secret") && !html.includes("$9"));
});

test("homepage and directory cards carry real tool counts; directory pages drop the homepage intro", () => {
  const pipedrive = index.servers.find((s) => s.slug === "pipedrive");
  assert.equal(pipedrive.toolCount, manifest.servers.find((s) => s.slug === "pipedrive").tools.length);
  assert.match(pipedrive.free, /^Free \d[\d,]* calls\/mo$/);
  assert.ok(read("index.html").includes(`${pipedrive.toolCount} tools`));
  assert.ok(read("index.html").includes('class="tagline"'));
  assert.ok(!read("servers/index.html").includes('class="tagline"'));
  assert.equal((read("index.html").match(/Browse all \d+/g) || []).length, 1);
});

test("every directory card and every search-index slice renders group and tool metadata", () => {
  const totalPages = Math.ceil(manifest.servers.length / PAGE_SIZE);
  for (let page = 1; page <= totalPages; page++) {
    const html = read(`${staticPagePath(page)}index.html`);
    assert.equal((html.match(/class="meta">\d+ tools · Free /g) || []).length, (html.match(/class="card"/g) || []).length);
  }
  // catalog.js renders search results from search-index.json entries with the same cardsHtml.
  for (const s of index.servers) {
    const html = cardsHtml([s]);
    assert.ok(html.includes(`<span class="category">${s.group.replace(/&/g, "&amp;")}</span>`), s.slug);
    assert.ok(html.includes(`<span class="meta">${s.toolCount} tools · ${s.free}</span>`), s.slug);
    assert.ok(s.toolCount > 0 && /^Free \d/.test(s.free), s.slug);
  }
});

test("blog index keeps every post in the HTML and adds the show-more button only when needed", () => {
  const html = read("blog/index.html");
  const posts = readdirSync(join(root, "blog")).filter((f) => f.endsWith(".md")).length;
  assert.equal((html.match(/<li><a href="\/blog\//g) || []).length, posts);
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
    "category/crm-and-sales/index.html": "", "blog/index.html": "/blog/", "services/index.html": "/services/", "privacy/index.html": "", "terms/index.html": "", "404.html": "" };
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
  const pages = ["index.html", "servers/index.html", "category/crm-and-sales/index.html", "pipedrive/index.html", "blog/index.html", `blog/${post}/index.html`, "services/index.html", "privacy/index.html", "terms/index.html", "404.html"];
  for (const path of pages) {
    const html = read(path);
    const css = html.includes('href="/catalog.css"') ? read("catalog.css") : html.match(/<style>([\s\S]*?)<\/style>/)[1];
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
