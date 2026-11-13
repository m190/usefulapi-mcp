import test from "node:test";
import assert from "node:assert/strict";
import { BLOG_LOCALES, checkOne, promptWords, renderBody, validateTranslations, sourceHash } from "./blog.mjs";
import { localizedPath, blogPath, alternates } from "./locales.mjs";

const products = new Map([["example", { status: "live", tools: [] }]]);
const post = (lang, heading) => `---
title: Review an example account in ChatGPT
description: Review the records in your example account from an AI assistant.
date: 2026-11-13
products: example
${lang === undefined ? "" : `lang: ${lang}\n`}${lang && lang !== "en" ? `translation: example\nsource: ${"0".repeat(64)}\n` : ""}---
## ${heading}

> Show the records in my account.
`;

test("existing posts default to English; supported languages accept their start question", () => {
  const old = checkOne("example", post(undefined, BLOG_LOCALES.en.promptHeading), products, "2026-11-13");
  assert.deepEqual(old.err, []);
  assert.equal(old.post.lang, "en");
  for (const [lang, copy] of Object.entries(BLOG_LOCALES)) {
    const checked = checkOne("example", post(lang, copy.promptHeading), products, "2026-11-13");
    assert.deepEqual(checked.err, [], lang);
    assert.equal(checked.post.lang, lang);
  }
});

const original = { id: "example", slug: "example", lang: "en", date: "2026-11-13", products: ["example"], file: "blog/example.md", hash: sourceHash("English original"), aliases: [], links: [] };
const translation = { ...original, slug: "beispiel", lang: "de", file: "blog/de/beispiel.md", source: original.hash };

test("translations share a publication day; unrelated originals cannot", () => {
  assert.deepEqual(validateTranslations([original, translation]), []);
  const other = { ...original, id: "another", slug: "another" };
  assert.ok(validateTranslations([original, other]).some(e => e.includes("multiple originals")));
});

test("registry rejects stale, missing, inconsistent and duplicate translations", () => {
  const cases = [
    [{ ...translation, source: "0".repeat(64) }, "needs review"],
    [{ ...translation, id: "missing" }, "no English original"],
    [{ ...translation, date: "2026-11-12" }, "publication date"],
    [{ ...translation, products: ["other"] }, "products must match"],
  ];
  for (const [variant, message] of cases)
    assert.ok(validateTranslations([original, variant]).some(e => e.includes(message)), message);
  assert.ok(validateTranslations([original, translation, translation]).some(e => e.includes("duplicate language")));
});

test("language URLs and alternate mappings preserve the unprefixed English route", () => {
  assert.equal(blogPath(original), "/blog/example/");
  assert.equal(blogPath(translation), "/de/blog/beispiel/");
  const variants = [original, translation].map(p => ({ lang: p.lang, path: blogPath(p) }));
  assert.deepEqual(alternates(variants), [...variants, { lang: "x-default", path: "/blog/example/" }]);
  assert.equal(localizedPath("/wefact/", "nl"), "/nl/wefact/");
  for (const lang of ["constructor", "__proto__", "fr"]) assert.throws(() => localizedPath("/blog/", lang));
  for (const path of ["//example.com/", "/../blog/", "/blog/?lang=de"]) assert.throws(() => localizedPath(path, "de"));
});

test("legacy aliases cannot collide and localized links must resolve", () => {
  assert.ok(validateTranslations([original, { ...translation, aliases: ["/blog/example/"] }]).some(e => e.includes("conflicts")));
  assert.ok(validateTranslations([original, { ...translation, links: ["/de/blog/missing/"] }]).some(e => e.includes("no such blog page")));
  assert.deepEqual(validateTranslations([original, { ...translation, links: ["/blog/example/", "/de/blog/beispiel/#details"] }]), []);
});

test("a post must use its declared language's start question", () => {
  const checked = checkOne("example", post("nl", BLOG_LOCALES.en.promptHeading), products, "2026-11-13");
  assert.ok(checked.err.some(e => e.includes("no start prompt")));
});

test("unsupported, inherited and attribute-injection languages fail validation without throwing", () => {
  for (const lang of ["fr", "constructor", "__proto__", 'nl\" onload=\"alert(1)']) {
    const checked = checkOne("example", post(lang, BLOG_LOCALES.en.promptHeading), products, "2026-11-13");
    assert.ok(checked.err.some(e => e.startsWith("lang:")), lang);
  }
});

test("localized prompts require a following quote and keep word counts", () => {
  for (const [lang, copy] of Object.entries(BLOG_LOCALES)) {
    const good = renderBody(`## ${copy.promptHeading}\n\n> Lees deze drie woorden.`).html;
    assert.deepEqual(promptWords(good, lang), { hasStart: true, words: [4] });
    const missing = renderBody(`## ${copy.promptHeading}\n\nAn explanatory paragraph.`).html;
    assert.equal(promptWords(missing, lang).hasStart, false);
  }
});
