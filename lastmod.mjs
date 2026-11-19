// lastmod.mjs — the sitemap <lastmod> of each product page, kept in portal/lastmod.json ({ slug: { hash, date } }).
// `date` is a W3C datetime in UTC to the second (older entries: a day), so a second change on one day is a new value.
// The hash covers the page's own data: the manifest entry (without `version`: a version-only release changes no page
// text) and content/<slug>.json. codegen.mjs records a new date
// (now, UTC) only when that hash changes, so a template change or another product's launch does not move it.
// build.mjs reads the file; a page whose data changed after the last codegen run gets the built commit's time instead.
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

export const LASTMOD_FILE = "portal/lastmod.json";
export const w3cTime = (ms = Date.now()) => new Date(ms).toISOString().slice(0, 19) + "Z";

export function pageHash(server, root) {
  const content = new URL(`content/${server.slug}.json`, root);
  const { version, ...data } = server;
  return createHash("sha256").update(JSON.stringify(data)).update("\0")
    .update(existsSync(content) ? readFileSync(content, "utf8") : "").digest("hex").slice(0, 16);
}

export function readLastmod(root) {
  const file = new URL(LASTMOD_FILE, root);
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : {};
}

/** The next portal/lastmod.json: same date for an unchanged page, `day` for a new or changed one. */
export function nextLastmod(servers, prev, root, day = w3cTime()) {
  const next = {};
  for (const s of [...servers].sort((a, b) => a.slug.localeCompare(b.slug))) {
    const hash = pageHash(s, root);
    next[s.slug] = prev[s.slug]?.hash === hash ? prev[s.slug] : { hash, date: day };
  }
  return next;
}

export const lastmodText = (map) => JSON.stringify(map, null, 1) + "\n";
