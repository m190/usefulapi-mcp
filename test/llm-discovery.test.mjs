import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { nextLastmod, readLastmod } from "../lastmod.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const rootUrl = pathToFileURL(root + "/");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json")));
let output;
before(() => {
  output = mkdtempSync(join(tmpdir(), "usefulapi-llm-"));
  execFileSync(process.execPath, ["build.mjs", output], { cwd: root, stdio: "pipe" });
});
after(() => rmSync(output, { recursive: true, force: true }));
const read = (path) => readFileSync(join(output, path), "utf8");

test("lastmod: a changed page gets the new day, an unchanged or version-only change keeps its date", () => {
  const [a, b] = manifest.servers;
  const prev = nextLastmod([a, b], {}, rootUrl, "2026-01-01");
  const next = nextLastmod([{ ...a, version: "99.0.0" }, { ...b, description: b.description + " More." }], prev, rootUrl, "2026-02-02");
  assert.equal(next[a.slug].date, "2026-01-01");
  assert.equal(next[b.slug].date, "2026-02-02");
  assert.notEqual(next[b.slug].hash, prev[b.slug].hash);
});

test("portal/lastmod.json covers every listed server", () => {
  // A hash that no longer matches is allowed (a hand edit before the next codegen run): build.mjs uses the build day.
  assert.deepEqual(Object.keys(readLastmod(rootUrl)).sort(), manifest.servers.map((s) => s.slug).sort());
});

test("sitemap: every product page has its recorded <lastmod> (or a later blog post date)", () => {
  const lm = readLastmod(rootUrl);
  const map = new Map([...read("sitemap.xml").matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?<\/url>/g)].map((m) => [m[1], m[2]]));
  for (const s of manifest.servers) {
    const d = map.get(`https://usefulapi.io/${s.slug}/`);
    assert.match(d ?? "", /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}Z)?$/, s.slug);
    assert.ok(d >= lm[s.slug].date, `${s.slug}: ${d} < ${lm[s.slug].date}`);
  }
  const newest = [...map.values()].filter(Boolean).sort().at(-1);
  assert.equal(map.get("https://usefulapi.io/"), newest);
});

test("Markdown alternates: each product page links its llms.txt, the homepage links the catalog", () => {
  const s = manifest.servers[0];
  assert.ok(read(`${s.slug}/index.html`).includes(`<link rel="alternate" type="text/markdown" href="https://usefulapi.io/${s.slug}/llms.txt"`));
  assert.ok(read("index.html").includes(`<link rel="alternate" type="text/markdown" href="https://usefulapi.io/llms.txt"`));
});

test("site AI Catalog lists every server's own catalog entries once", () => {
  const c = JSON.parse(read(".well-known/ai-catalog.json"));
  assert.equal(c.specVersion, "1.0");
  assert.equal(c.entries.length, manifest.servers.length);
  assert.equal(new Set(c.entries.map((e) => e.identifier)).size, c.entries.length);
  const own = JSON.parse(read(`${manifest.servers[0].slug}/ai-catalog.json`));
  assert.deepEqual(c.entries[0], own.entries[0]);
  assert.match(read("_headers"), /\/\*\/ai-catalog\.json\n  Content-Type: application\/ai-catalog\+json\n/);
});

test("_build.json names the built commit and its time, never cached", () => {
  const b = JSON.parse(read("_build.json"));
  assert.match(b.commit, /^[0-9a-f]{40}$/);
  assert.ok(Number.isInteger(b.time) && b.time > 1.7e9);
  assert.match(read("_headers"), /\/_build\.json\n  X-Robots-Tag: noindex\n  Cache-Control: no-store\n/);
});
