// IndexNow submission for testpreppilot.com — notifies Bing (which feeds
// ChatGPT Search + Copilot), Yandex, Naver and Seznam that URLs exist or changed.
// Google does NOT consume IndexNow; for Google keep the sitemap + GSC.
//
// USAGE
//   node scripts/indexnow.mjs                 # FULL push — every URL in the sitemap
//   node scripts/indexnow.mjs --dry           # list what would be sent, send nothing
//   node scripts/indexnow.mjs --live          # read the SITEMAP FROM THE SITE instead
//                                             # of the local build output
//   node scripts/indexnow.mjs --verify        # HEAD-check every URL first (slower)
//   node scripts/indexnow.mjs <url> [<url>…]  # push only the given URLs (subset)
//
// PREREQ: the site must be BUILT + DEPLOYED, and the key file must be reachable:
//   https://testpreppilot.com/0041cb82f5036c8165b4caf1723d44af.txt
// The script preflights that URL and aborts (403 would otherwise be returned for
// every batch).
//
// STATUS CODES
//   200 = accepted        202 = accepted, key validation pending
//   400 = bad request     403 = key file not valid / not reachable
//   422 = URLs don't belong to host, or key mismatch   429 = too many requests
//
// ══ ABSOLUTE RULE: THE APEX HOST ONLY ══════════════════════════════════════
// `dash.testpreppilot.com` is an INTERNAL DASHBOARD, not a public subsite:
//   X-Robots-Tag: noindex, nofollow, noarchive, nosnippet
//   robots.txt:   User-agent: * / Disallow: /          (and it serves no sitemap)
// Submitting it to IndexNow would push internal, deliberately-unindexable URLs
// at four search engines — the opposite of what the site's own policy declares.
// It must NEVER be submitted, by this script or any future one.
//
// That is enforced structurally rather than by remembering: every URL is
// host-locked to HOST below, so a subdomain cannot enter even if a future
// sitemap or a hand-typed subset argument tries to add one. DENY_HOSTS adds an
// explicit, loudly-reported second layer.
//
// WHY THE LOCAL BUILD IS THE DEFAULT URL SOURCE
//   Cloudflare edge-caches /sitemap-0.xml. A plain GET of the live sitemap can
//   return a STALE copy (observed 2026-10-04 on a sibling site: 685 URLs cached
//   vs 1697 real). `astro build` output (dist/sitemap-0.xml) is exactly what
//   gets deployed, so it is the drift-free source of truth. `--live` re-reads
//   the site with a cache-busting query string when you want the deployed view.
//
// KEY (not a secret — it proves domain ownership because only the domain owner
// can host the file at the site root): 0041cb82f5036c8165b4caf1723d44af

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'testpreppilot.com';
const ORIGIN = `https://${HOST}`;
const KEY = '0041cb82f5036c8165b4caf1723d44af';
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Hosts that must never be submitted, whatever the source. See the header.
const DENY_HOSTS = ['dash.testpreppilot.com'];

// IndexNow hard limit is 10,000 URLs per request. Batching keeps each request
// small enough to report per-batch status and to stay well clear of 429s.
const BATCH_SIZE = 500;
const BATCH_DELAY_MS = 1500;
const VERIFY_CONCURRENCY = 8;

const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LOCAL_SITEMAP = resolve(ROOT, 'dist', 'sitemap-0.xml');
const REPORT_DIR = resolve(ROOT, 'scratch', 'indexnow');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- URL filtering -----------------------------------------------------------
// The sitemap already excludes the canonicalised and redirecting pages
// (/affiliate-disclosure, /privacy-policy, /how-it-works, /reviews, /contact and
// the bare /exams index — see the sitemap filter comment in astro.config.mjs),
// but apply a defence-in-depth filter so a future sitemap regression cannot leak
// utility or non-canonical paths into IndexNow.
const BLOCKED_PATTERNS = [
  /\/404\/?$/,
  /\/api\//,
  /\/out\//,
  /\/refer\//,
  /\.(png|jpe?g|webp|svg|ico|css|js|woff2?|xml|txt|json|csv)$/i,
];

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function isSubmittable(url) {
  // Apex-lock: `new URL().hostname` is exact, so dash.testpreppilot.com and any
  // other subdomain fails here regardless of how it got into the list.
  if (hostOf(url) !== HOST) return false;
  if (!url.startsWith(`${ORIGIN}/`) && url !== ORIGIN) return false;
  if (url.includes('?')) return false; // query strings are never canonical
  if (url.includes('#')) return false;
  return !BLOCKED_PATTERNS.some((re) => re.test(url));
}

// --- Sitemap discovery ------------------------------------------------------
async function fetchText(url, attempt = 1) {
  const res = await fetch(url, {
    headers: { 'User-Agent': BROWSER_UA, Accept: 'application/xml,text/xml,*/*' },
  });
  if (res.status === 429 && attempt <= 3) {
    const wait = 3000 * attempt;
    console.warn(`  ! 429 on ${url} — retrying in ${wait}ms`);
    await sleep(wait);
    return fetchText(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  const out = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

async function collectFromLocal() {
  if (!existsSync(LOCAL_SITEMAP)) {
    throw new Error(
      `No local sitemap at ${LOCAL_SITEMAP} — run \`astro build\` first, or pass --live.`
    );
  }
  console.log(`Reading local build output ${LOCAL_SITEMAP}`);
  const xml = readFileSync(LOCAL_SITEMAP, 'utf8');
  const locs = extractLocs(xml);
  console.log(`  -> ${locs.length} URLs`);
  return locs;
}

async function collectFromLive() {
  const indexUrl = `${ORIGIN}/sitemap-index.xml`;
  console.log(`Reading ${indexUrl}`);
  const indexXml = await fetchText(indexUrl);
  const children = extractLocs(indexXml);
  const looksLikeIndex = /<sitemapindex/i.test(indexXml);
  const sitemapUrls = looksLikeIndex ? children : [indexUrl];
  if (!looksLikeIndex) {
    console.log('  (not a sitemap index — reading it as a flat urlset)');
  } else {
    console.log(`  index lists ${sitemapUrls.length} child sitemap(s)`);
  }

  // Cache-bust: Cloudflare serves a STALE /sitemap-0.xml from edge cache.
  const all = [];
  for (const child of sitemapUrls) {
    const bust = `${child}${child.includes('?') ? '&' : '?'}cb=${Date.now()}`;
    const xml = await fetchText(bust);
    const locs = extractLocs(xml);
    console.log(`  ${child} -> ${locs.length} URLs`);
    all.push(...locs);
  }
  return all;
}

// --- Live reachability check (optional) -------------------------------------
async function checkOne(url, attempt = 1) {
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': BROWSER_UA } });
    if (res.status === 429 && attempt <= 2) {
      await sleep(1500 * attempt);
      return checkOne(url, attempt + 1);
    }
    return res.status;
  } catch {
    if (attempt <= 2) {
      await sleep(1000 * attempt);
      return checkOne(url, attempt + 1);
    }
    return 0;
  }
}

async function verifyAll(urls) {
  console.log(`\nVerifying ${urls.length} URLs are live (HEAD, concurrency ${VERIFY_CONCURRENCY})…`);
  const bad = [];
  let cursor = 0;
  let done = 0;
  async function worker() {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      const code = await checkOne(url);
      done++;
      if (done % 200 === 0) process.stdout.write(`  …${done}/${urls.length}\n`);
      if (code !== 200) bad.push({ url, code });
    }
  }
  await Promise.all(Array.from({ length: VERIFY_CONCURRENCY }, worker));
  if (bad.length) {
    console.warn(`\n  ⚠ ${bad.length} URL(s) did not return 200:`);
    bad.slice(0, 20).forEach((b) => console.warn(`    ${b.code}  ${b.url}`));
    if (bad.length > 20) console.warn(`    … and ${bad.length - 20} more`);
  } else {
    console.log('  ✅ all URLs returned 200');
  }
  return bad;
}

// --- Submission ---------------------------------------------------------------
async function submitBatch(urls, batchNo, batchTotal) {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls });
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
  const label = `batch ${batchNo}/${batchTotal} (${urls.length} URLs)`;
  if (res.status === 200 || res.status === 202) {
    console.log(`  ✅ ${label} -> HTTP ${res.status} accepted`);
  } else {
    const text = await res.text().catch(() => '');
    console.error(`  ❌ ${label} -> HTTP ${res.status} ${text.slice(0, 300)}`);
  }
  return res.status;
}

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');
  const live = args.includes('--live');
  const verify = args.includes('--verify');
  const explicit = args.filter((a) => !a.startsWith('--'));

  let urls;
  if (explicit.length > 0) {
    urls = explicit;
    console.log(`\nSubset mode: ${urls.length} URL(s) supplied on the command line`);
  } else {
    urls = live ? await collectFromLive() : await collectFromLocal();
  }

  const seen = new Set();
  const unique = [];
  const dropped = [];
  const deniedHost = [];
  for (const u of urls) {
    if (seen.has(u)) continue;
    seen.add(u);
    const h = hostOf(u);
    if (h !== HOST && (DENY_HOSTS.includes(h) || h.endsWith(`.${HOST}`))) deniedHost.push(u);
    if (isSubmittable(u)) unique.push(u);
    else dropped.push(u);
  }

  console.log(`\nCollected ${urls.length} loc(s) -> ${unique.length} unique submittable`);
  if (dropped.length) {
    console.log(`Filtered out ${dropped.length} non-submittable URL(s):`);
    dropped.slice(0, 10).forEach((u) => console.log(`  - ${u}`));
    if (dropped.length > 10) console.log(`  … and ${dropped.length - 10} more`);
  }
  if (deniedHost.length) {
    console.warn(`\n  ⛔ DENY guard: ${deniedHost.length} URL(s) on a never-submit host were dropped.`);
    deniedHost.slice(0, 10).forEach((u) => console.warn(`     ${u}`));
    console.warn('     dash.testpreppilot.com is an internal dashboard — never submitted. See the header.');
  }

  // Belt and braces: nothing but the apex may ever leave this process.
  const strays = unique.filter((u) => hostOf(u) !== HOST);
  if (strays.length) {
    console.error(`\nFATAL: ${strays.length} URL(s) are not on ${HOST} — aborting.`);
    strays.slice(0, 10).forEach((u) => console.error(`  ${u}`));
    process.exitCode = 1;
    return;
  }

  if (unique.length === 0) {
    console.error('\nNothing to submit — aborting.');
    process.exitCode = 1;
    return;
  }

  if (dry) {
    console.log('\n--dry: no request sent. First 10 URLs:');
    unique.slice(0, 10).forEach((u) => console.log(`  ${u}`));
    return;
  }

  // Optional reachability check first: it verifies the CONTENT we are about to
  // announce, independently of whether we are allowed to submit yet.
  if (verify) {
    const bad = await verifyAll(unique);
    if (bad.length) {
      console.error('\nAborting: fix the unreachable URLs (deploy?) before submitting.');
      process.exitCode = 1;
      return;
    }
  }

  // Preflight: the key file must be live, or every batch will 403.
  console.log(`\nPreflight: ${KEY_LOCATION}`);
  const keyRes = await fetch(KEY_LOCATION, { headers: { 'User-Agent': BROWSER_UA } });
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : '';
  if (!keyRes.ok || keyBody !== KEY) {
    console.error(
      `  ❌ key file check FAILED (HTTP ${keyRes.status}, body="${keyBody.slice(0, 60)}") — aborting before wasting the submit.`
    );
    console.error('     Deploy the site so the key file is published, then retry.');
    process.exitCode = 1;
    return;
  }
  console.log('  ✅ key file live and matches');

  const batches = [];
  for (let i = 0; i < unique.length; i += BATCH_SIZE) batches.push(unique.slice(i, i + BATCH_SIZE));

  const startedAt = new Date();
  console.log(`\nSubmitting ${unique.length} URLs in ${batches.length} batch(es) to ${ENDPOINT}`);
  const statuses = [];
  for (let i = 0; i < batches.length; i++) {
    statuses.push(await submitBatch(batches[i], i + 1, batches.length));
    if (i < batches.length - 1) await sleep(BATCH_DELAY_MS);
  }

  const ok = statuses.filter((s) => s === 200 || s === 202).length;

  mkdirSync(REPORT_DIR, { recursive: true });
  const stamp = startedAt.toISOString().slice(0, 10);
  const reportPath = resolve(REPORT_DIR, `indexnow-run-${stamp}.json`);
  writeFileSync(
    reportPath,
    JSON.stringify(
      {
        runAt: startedAt.toISOString(),
        endpoint: ENDPOINT,
        source: explicit.length ? 'cli-subset' : live ? 'live-sitemap' : 'local-dist-sitemap',
        key: KEY,
        keyLocation: KEY_LOCATION,
        host: HOST,
        denyHosts: DENY_HOSTS,
        totalUnique: unique.length,
        batches: batches.length,
        batchSize: BATCH_SIZE,
        statuses,
        urls: unique,
        filteredOut: dropped,
        deniedHostDropped: deniedHost,
      },
      null,
      2
    )
  );

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Result: ${ok}/${batches.length} batch(es) accepted (HTTP 200/202)`);
  console.log(`URLs submitted: ${unique.length} (apex host only: ${HOST})`);
  console.log(`Report written: ${reportPath}`);
  if (ok !== batches.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error('\nFATAL:', e.message);
  process.exitCode = 1;
});
