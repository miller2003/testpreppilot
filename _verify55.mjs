// Post-release verification for the 55-page batch: for every slug in
// _batch55_picks.json, assert the built page is real, indexable, correctly
// dated, and wired into the sitemap. Exit code 1 on any failure.
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { releases } from './src/data/examCatalog/release-manifest.mjs';

const picks = JSON.parse(await readFile('./_batch55_picks.json', 'utf8'));
const sitemap = await readFile('./dist/sitemap-0.xml', 'utf8');

const fails = [];
const check = (cond, slug, msg) => { if (!cond) fails.push(`${slug}: ${msg}`); };

for (const { slug, heat } of picks) {
  const date = releases[slug];
  const file = join('dist', 'exams', slug, 'index.html');

  let html;
  try {
    await stat(file);
    html = await readFile(file, 'utf8');
  } catch {
    fails.push(`${slug}: dist page missing`);
    continue;
  }

  check(!!date, slug, 'not in manifest');
  check(!/name="robots"[^>]*noindex/.test(html), slug, 'has noindex');
  check(html.includes(`content="${date}"`) && html.includes(`<meta property="article:published_time" content="${date}">`),
        slug, `article:published_time != manifest date ${date}`);
  check(new RegExp(`"datePublished":"${date}"`).test(html), slug, `schema datePublished != ${date}`);
  check(!new RegExp(`"datePublished":"(?!${date})`).test(html), slug, 'a second, different datePublished is present');
  check(html.includes(`/exams/${slug}/infographic.svg`), slug, 'infographic not referenced');
  check(html.includes(`rel="canonical" href="https://testpreppilot.com/exams/${slug}"`), slug, 'canonical missing/mismatched');
  check(html.length > 20000, slug, `page suspiciously small (${html.length} bytes)`);

  // sitemap: loc without trailing slash, lastmod == release date (ISO midnight)
  const loc = `<loc>https://testpreppilot.com/exams/${slug}</loc>`;
  check(sitemap.includes(loc), slug, 'sitemap loc missing or has a trailing slash');
  const idx = sitemap.indexOf(loc);
  const after = sitemap.slice(idx, idx + 220);
  check(after.includes(`<lastmod>${date}T00:00:00.000Z</lastmod>`), slug, `sitemap lastmod != ${date}`);
}

// Every lastmod in the sitemap must be a real content date, never a build stamp.
const lastmods = [...sitemap.matchAll(/<lastmod>(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1]);
const realDates = new Set(Object.values(releases));
const buildStamp = new Date().toISOString().slice(0, 10);
const bogus = [...new Set(lastmods.filter((d) => !realDates.has(d) && d >= '2026-01-01'))];
if (bogus.length) fails.push('sitemap: lastmod(s) that match no release date → ' + bogus.join(', '));
// Note: today's date can legitimately appear as a lastmod — two pages in this
// batch were scheduled for it. Only a date that is NOT a release date is a
// build stamp, and that is already covered by `bogus` above.
if (lastmods.includes(buildStamp) && !realDates.has(buildStamp)) {
  fails.push(`sitemap: build-stamp lastmod ${buildStamp} present`);
}

console.log(`Checked ${picks.length} pages.`);
console.log(`Sitemap lastmod entries: ${lastmods.length}`);
if (fails.length) {
  console.error(`\n${fails.length} FAILURE(S):`);
  fails.forEach((f) => console.error('  - ' + f));
  process.exit(1);
}
console.log('All checks passed.');
