// indexnow.mjs [--dry-run] [url...] — tell IndexNow engines (Bing, Yandex, Seznam, Naver...) about usefulapi.io pages.
// No URLs: every <loc> of the LIVE https://usefulapi.io/sitemap.xml. Run after a portal publish (new product, blog post).
// The ownership key is public by design: portal/indexnow-<key>.txt, copied to the site root by build.mjs.
import { readdirSync } from "node:fs";

const SITE = "https://usefulapi.io";
const keyFile = readdirSync(new URL("portal/", import.meta.url)).find((f) => /^indexnow-[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("no portal/indexnow-<key>.txt");
const key = keyFile.slice("indexnow-".length, -".txt".length);
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
let urls = args.filter((a) => a.startsWith("https://"));
if (!urls.length) {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
urls = urls.filter((u) => u.startsWith(`${SITE}/`));
const live = await fetch(`${SITE}/${keyFile}`);
if (!live.ok || (await live.text()).trim() !== key) throw new Error(`${SITE}/${keyFile} is not live yet: publish the portal first`);
console.log(`${urls.length} URL(s)${dry ? " (dry run)" : ""}`);
if (dry) process.exit(0);
for (let i = 0; i < urls.length; i += 10000) {
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: "usefulapi.io", key, keyLocation: `${SITE}/${keyFile}`, urlList: urls.slice(i, i + 10000) }),
  });
  console.log(`IndexNow: HTTP ${r.status} ${(await r.text()).slice(0, 200)}`);
}
