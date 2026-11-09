import { chromium } from "playwright";
import fs from "node:fs";

const ORIGIN = "http://localhost";
const BASE_PATH = "/SGECO-Industries";
const START = ORIGIN + BASE_PATH + "/";
const WIDTHS = [375, 768, 1440];
const MAX_PAGES = 200;

fs.mkdirSync("shots", { recursive: true });

const slug = (u) =>
  (new URL(u).pathname.replace(BASE_PATH, "") + new URL(u).search)
    .replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home";

// Skip junk links such as product-service?page=about
const skip = (u) => {
  const x = new URL(u);
  return x.searchParams.has("page") || /\.(pdf|jpg|jpeg|png|webp|svg|mp4|zip)$/i.test(x.pathname);
};

const seen = new Set();
const queue = [START];
try {
  const xml = fs.readFileSync("../sitemap.xml", "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const p = new URL(m[1].trim()).pathname.replace(/^\//, "");
    queue.push(START + p);
  }
} catch {}

const HEADER = "url,status,finalUrl,title,description,canonical,robots,h1\n";
fs.writeFileSync("crawl.csv", HEADER);
const toCsv = (r) =>
  [r.url, r.status, r.finalUrl, r.title, r.description, r.canonical, r.robots, r.h1 ?? r.error]
    .map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",") + "\n";

const browser = await chromium.launch();
const results = [];

while (queue.length && results.length < MAX_PAGES) {
  const url = queue.shift().split("#")[0];
  if (seen.has(url) || skip(url)) continue;
  seen.add(url);

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  let row;
  try {
    const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    row = {
      url,
      status: resp?.status(),
      finalUrl: page.url(),
      title: await page.title(),
      description: await page.locator('meta[name="description"]').getAttribute("content").catch(() => null),
      canonical: await page.locator('link[rel="canonical"]').getAttribute("href").catch(() => null),
      robots: await page.locator('meta[name="robots"]').getAttribute("content").catch(() => null),
      h1: await page.locator("h1").first().innerText().catch(() => null),
    };

    const hrefs = await page.$$eval("a[href]", (as) => as.map((a) => a.href));
    for (const h of hrefs) {
      try {
        const u = new URL(h);
        if (u.origin === ORIGIN && u.pathname.startsWith(BASE_PATH + "/")) {
          const next = u.origin + u.pathname + u.search;
          if (!skip(next)) queue.push(next);
        }
      } catch {}
    }

    for (const w of WIDTHS) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.addStyleTag({ content: "*{animation:none!important;transition:none!important}" });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 80));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(400);
      await page.screenshot({ path: `shots/${slug(url)}-${w}.png`, fullPage: true });
    }
  } catch (e) {
    row = { url, status: "ERROR", error: String(e).slice(0, 200) };
  }
  results.push(row);
  fs.appendFileSync("crawl.csv", toCsv(row));
  fs.writeFileSync("crawl.json", JSON.stringify(results, null, 2));
  await page.close();
  console.log(results.length, url);
}

await browser.close();
console.log("DONE. Pages crawled:", results.length);
