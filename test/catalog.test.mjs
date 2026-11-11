import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, mkdtempSync, rmSync, existsSync } from "node:fs";
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

test("card content is escaped and contains only name, description and category", () => {
  const html = cardsHtml([{ slug: "example", name: '<script>alert("x")</script>', description: "A & B", category: "payments", tools: [{ name: "secret" }], pricing: [{ monthly: "$9" }] }]);
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;") && html.includes("A &amp; B"));
  assert.ok(!html.includes("secret") && !html.includes("$9"));
});
