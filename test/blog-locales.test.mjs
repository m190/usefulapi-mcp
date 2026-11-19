import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadBlog } from "../blog.mjs";
import { blogPath, blogIndexPath, LOCALES } from "../locales.mjs";

const root = new URL("../", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("manifest.json", root)));
const { posts, scheduled, errors } = loadBlog(manifest);
let output;
before(() => {
  assert.deepEqual(errors, []);
  output = mkdtempSync(join(tmpdir(), "usefulapi-blog-locales-"));
  execFileSync(process.execPath, ["build.mjs", output], { cwd: root, stdio: "pipe" });
});
after(() => rmSync(output, { recursive: true, force: true }));
const read = path => readFileSync(join(output, path, "index.html"), "utf8");
const schema = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));

test("each article variant has a self canonical, reciprocal siblings and matching structured facts", () => {
  const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
  for (const p of posts) {
    const path = blogPath(p), html = read(path);
    assert.ok(html.includes(`<html lang="${p.lang}">`));
    assert.ok(html.includes(`<link rel="canonical" href="https://usefulapi.io${path}">`));
    assert.ok(sitemap.includes(`<loc>https://usefulapi.io${path}</loc>`));
    const article = schema(html).find(s => s["@type"] === "BlogPosting");
    assert.equal(article.inLanguage, p.lang);
    assert.equal(article.datePublished, p.date);
    for (const sibling of posts.filter(v => v.id === p.id)) {
      const href = blogPath(sibling);
      assert.ok(html.includes(`<link rel="alternate" hreflang="${sibling.lang}" href="https://usefulapi.io${href}">`));
      assert.ok(html.includes(`<a href="${href}" lang="${sibling.lang}" hreflang="${sibling.lang}"`));
    }
    const original = posts.find(v => v.id === p.id && v.lang === "en");
    assert.ok(html.includes(`hreflang="x-default" href="https://usefulapi.io${blogPath(original)}"`));
    assert.ok(html.includes(`aria-label="${LOCALES[p.lang].languages}"`));
    for (const match of html.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
      const href = match[1];
      assert.ok(existsSync(join(output, href, href.endsWith("/") ? "index.html" : "")), `${path} links to missing ${href}`);
    }
  }
});

test("every language index contains only its language and links to all available indexes", () => {
  for (const lang of Object.keys(LOCALES)) {
    const html = read(blogIndexPath(lang));
    const blog = schema(html).find(s => s["@type"] === "Blog");
    assert.equal(blog.inLanguage, lang);
    assert.deepEqual(blog.blogPost.map(p => p.url), posts.filter(p => p.lang === lang).map(p => `https://usefulapi.io${blogPath(p)}`));
    for (const other of Object.keys(LOCALES)) assert.ok(html.includes(`hreflang="${other}" href="https://usefulapi.io${blogIndexPath(other)}"`));
  }
  // Every English original in blog/ loads as an English post (published or scheduled): none dropped, none moved.
  const originals = readdirSync(new URL("blog/", root)).filter(f => f.endsWith(".md")).map(f => `blog/${f}`).sort();
  assert.ok(originals.length >= 31);
  assert.deepEqual([...posts, ...scheduled].filter(p => p.lang === "en").map(p => p.file).sort(), originals);
  assert.ok(posts.filter(p => p.lang === "de").length >= 2);
});

test("published URLs are preserved or permanently redirected to their equivalent", () => {
  assert.ok(read("/blog/stel-order-sales-by-client-and-product-in-chatgpt/").includes('<html lang="en">'));
  assert.ok(read("/blog/shiftbase-weekly-schedule-overview/").includes('<html lang="en">'));
  const redirects = readFileSync(join(output, "_redirects"), "utf8");
  assert.ok(redirects.includes("/blog/wefact-openstaande-facturen-in-chatgpt/ /nl/blog/wefact-openstaande-facturen-in-chatgpt/ 301"));
  const freshsales = posts.find(p => p.slug === "freshsales-deals-closing-this-month-in-claude");
  assert.equal(freshsales.date, "2026-11-12");
});

test("a scheduled post is checked but left out of the build until its day", () => {
  const dir = new URL(`file://${mkdtempSync(join(tmpdir(), "usefulapi-blog-scheduled-"))}/`);
  try {
    const live = manifest.servers.find(s => s.status === "live");
    const post = (date, extra = "") => `---\ntitle: Check a scheduled post in Claude\ndescription: A test post that checks how the blog treats a date after today.\ndate: ${date}\nproducts: ${live.slug}\n---\nIntro.${extra}\n\n## Which prompt do I start with?\n\n> Check it.\n`;
    const write = (name, text) => writeFileSync(new URL(name, dir), text);
    write("later.md", post("2026-11-20"));
    write("earlier.md", post("2026-11-19", " See [the next post](/blog/later/)."));
    let r = loadBlog(manifest, undefined, "2026-11-19", dir);
    assert.deepEqual(r.posts.map(p => p.slug), ["earlier"]);
    assert.deepEqual(r.scheduled.map(p => p.slug), ["later"]);
    assert.deepEqual(r.errors, ["blog/earlier.md: link /blog/later/: that post is published later (2026-11-20)"]);
    r = loadBlog(manifest, undefined, "2026-11-20", dir);
    assert.deepEqual(r.posts.map(p => p.slug), ["later", "earlier"]);
    assert.deepEqual([r.scheduled, r.errors], [[], []]);
    for (const link of ["https://usefulapi.io/blog/later/#steps", "https://USEFULAPI.io/blog/later", "https://www.usefulapi.io/blog/later/?a=1"]) {
      write("earlier.md", post("2026-11-19", ` See [the next post](${link}).`));
      assert.deepEqual(loadBlog(manifest, undefined, "2026-11-19", dir).errors, [`blog/earlier.md: link ${link}: that post is published later (2026-11-20)`]);
    }
    write("later.md", post("2026-11-20").replace("products:", "aliases: /blog/legacy-later/\nproducts:"));
    write("earlier.md", post("2026-11-19", " See [the next post](https://usefulapi.io/blog/legacy-later/)."));
    assert.deepEqual(loadBlog(manifest, undefined, "2026-11-19", dir).errors, ["blog/earlier.md: link https://usefulapi.io/blog/legacy-later/: that post is published later (2026-11-20)"]);
    // A scheduled post that links to a post of a later day fails now, not on its own publication day.
    write("earlier.md", post("2026-11-19"));
    write("latest.md", post("2026-11-21"));
    write("later.md", post("2026-11-20", " See [the next post](/blog/latest/)."));
    assert.deepEqual(loadBlog(manifest, undefined, "2026-11-19", dir).errors, ["blog/later.md: link /blog/latest/: that post is published later (2026-11-21)"]);
    rmSync(new URL("latest.md", dir));
    write("later.md", post("2026-11-20"));
    write("same-day.md", post("2026-11-20"));
    assert.ok(loadBlog(manifest, undefined, "2026-11-19", dir).errors.some(e => e.includes("one article per day")));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
