// indexnow.mjs [--dry-run] [url...] — tell IndexNow engines (Bing, Yandex, Seznam, Naver...) about usefulapi.io pages.
// No URLs: every <loc> of the LIVE https://usefulapi.io/sitemap.xml. The ownership key is public by design:
// portal/indexnow-<key>.txt, copied to the site root by build.mjs.
// --after-push <commit> [--time <unix seconds>]: wait (up to 15 min) until the live site is built from that commit or a later one
// (/_build.json), then send only the pages that are new, removed or have a new <lastmod> since the last sitemap
// this machine sent. fleet sync-portal.mjs and scripts/distribute-loop.sh start it in the background after a push.
// --time is the commit's committer time (default: git log in this checkout, read at start).
// The last sent sitemap is in ~/Library/Caches/usefulapi-indexnow/ (with no file yet: the live sitemap at the start).
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const SITE = "https://usefulapi.io";
const ROOT = new URL("./", import.meta.url);
const STATE_DIR = join(homedir(), "Library", "Caches", "usefulapi-indexnow");
const STATE = join(STATE_DIR, "sitemap.json"), LOCK = join(STATE_DIR, "lock");
const keyFile = readdirSync(new URL("portal/", ROOT)).find((f) => /^indexnow-[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("no portal/indexnow-<key>.txt");
const key = keyFile.slice("indexnow-".length, -".txt".length);
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const ai = args.indexOf("--after-push");
const target = ai >= 0 ? args[ai + 1] : null;
if (ai >= 0 && !/^[0-9a-f]{7,40}$/.test(target ?? "")) throw new Error("--after-push needs a commit sha");
const log = (msg) => console.log(`${new Date().toISOString()} indexnow: ${msg}`);

async function liveSitemap() {
  const r = await fetch(`${SITE}/sitemap.xml`, { cache: "no-store" });
  if (!r.ok) throw new Error(`sitemap.xml: HTTP ${r.status}`);
  const xml = await r.text();
  return new Map([...xml.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?<\/url>/g)].map((m) => [m[1], m[2] ?? ""]));
}
const saveState = (map) => { mkdirSync(STATE_DIR, { recursive: true }); writeFileSync(STATE, JSON.stringify(Object.fromEntries(map))); };

async function submit(urls) {
  urls = urls.filter((u) => u.startsWith(`${SITE}/`));
  const live = await fetch(`${SITE}/${keyFile}`);
  if (!live.ok || (await live.text()).trim() !== key) throw new Error(`${SITE}/${keyFile} is not live yet: publish the portal first`);
  log(`${urls.length} URL(s)${dry ? " (dry run)" : ""}`);
  if (dry || !urls.length) return true;
  let ok = true;
  for (let i = 0; i < urls.length; i += 10000) {
    const r = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: "usefulapi.io", key, keyLocation: `${SITE}/${keyFile}`, urlList: urls.slice(i, i + 10000) }),
    });
    log(`HTTP ${r.status} ${(await r.text()).slice(0, 200)}`);
    ok &&= r.status === 200 || r.status === 202;
  }
  return ok;
}

// Is the live build at `target` or later? A later commit counts: Pages builds every push, and the newest one wins.
// Compare committer times (build.mjs writes the live one), so the wait needs no git checkout. Only a strictly later
// second counts: a commit in the same second may be the parent, so that case waits for the exact commit.
const ti = args.indexOf("--time");
let targetTime = ti >= 0 ? Number(args[ti + 1]) : null;
if (target && !(targetTime > 0)) targetTime = Number(execFileSync("git", ["log", "-1", "--format=%ct", target], { cwd: ROOT, encoding: "utf8" }).trim());
const reached = (live) => !!live.commit && (live.commit.startsWith(target) || (targetTime != null && live.time > targetTime));

async function afterPush() {
  // One run at a time on this machine; a lock older than 30 min is left over from a killed run.
  mkdirSync(STATE_DIR, { recursive: true });
  const deadline = Date.now() + 15 * 60e3;
  for (;;) {
    try { mkdirSync(LOCK); break; } catch {}
    if (existsSync(LOCK) && Date.now() - statSync(LOCK).mtimeMs > 30 * 60e3) { rmSync(LOCK, { recursive: true, force: true }); continue; }
    if (Date.now() > deadline) throw new Error("another indexnow run holds the lock");
    await sleep(10e3);
  }
  try {
    // No state yet: the live sitemap now (before this build) is the base, saved at once so a failed send keeps it.
    let base;
    if (existsSync(STATE)) base = new Map(Object.entries(JSON.parse(readFileSync(STATE, "utf8"))));
    else { base = await liveSitemap(); if (!dry) saveState(base); }
    for (;;) {
      const live = await fetch(`${SITE}/_build.json`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : {}), () => ({}));
      if (reached(live)) { log(`live site is built from ${live.commit.slice(0, 9)}`); break; }
      if (Date.now() > deadline) throw new Error(`the live site is not at ${target} after 15 min (live: ${live.commit ?? "unknown"})`);
      await sleep(15e3);
    }
    const now = await liveSitemap();
    const changed = [...now].filter(([u, d]) => base.get(u) !== d).map(([u]) => u);
    const removed = [...base.keys()].filter((u) => !now.has(u));
    log(`${changed.length} new or changed, ${removed.length} removed of ${now.size} sitemap URL(s)`);
    if (await submit([...changed, ...removed]) && !dry) saveState(now);
  } finally {
    rmSync(LOCK, { recursive: true, force: true });
  }
}

if (target) await afterPush();
else {
  let urls = args.filter((a) => a.startsWith("https://"));
  const all = !urls.length ? await liveSitemap() : null;
  if (all) urls = [...all.keys()];
  if (await submit(urls) && all && !dry) saveState(all);
}
