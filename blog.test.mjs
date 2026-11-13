import test from "node:test";
import assert from "node:assert/strict";
import { BLOG_LOCALES, checkOne, promptWords, renderBody } from "./blog.mjs";

const products = new Map([["example", { status: "live", tools: [] }]]);
const post = (lang, heading) => `---
title: Review an example account in ChatGPT
description: Review the records in your example account from an AI assistant.
date: 2026-11-13
products: example
${lang === undefined ? "" : `lang: ${lang}\n`}---
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
