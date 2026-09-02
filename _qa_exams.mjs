// Post-build QA for the exam pages. Run after `astro build`.
//
//   node _qa_exams.mjs
//
// Checks the things that silently rot a programmatic-SEO site and that a
// successful build does not guarantee:
//   1. every released page actually produced HTML
//   2. no page is noindex (thin/placeholder mode)
//   3. its infographic exists — [slug].astro renders that <img>
//      unconditionally, so a missing asset is a broken image
//   4. schema datePublished matches the manifest, and dateModified never
//      precedes datePublished (schema.org treats that as contradictory)
//   5. the "Last reviewed" byline line survives (E-E-A-T)
//   6. page substance: word count, heading count, internal + external links
//   7. no orphan pages — linked from the homepage and from a category hub
//   8. sitemap lastmod agrees with the manifest

import fs from 'node:fs';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { releases } from './src/data/examCatalog/release-manifest.mjs';

const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/g, ' ')
   .replace(/<style[\s\S]*?<\/style>/g, ' ')
   .replace(/<[^>]+>/g, ' ')
   .replace(/&nbsp;/g, ' ')
   .replace(/\s+/g, ' ')
   .trim();

const fail = [];
const warn = [];

// ── 1-6. per-page checks ───────────────────────────────────────────
const built = readdirSync('dist/exams').filter((d) =>
  existsSync(join('dist/exams', d, 'index.html'))
);

for (const slug of Object.keys(releases)) {
  const dir = join('dist/exams', slug);
  if (!built.includes(slug)) { fail.push(`${slug}: no HTML produced`); continue; }

  const html = fs.readFileSync(join(dir, 'index.html'), 'utf8');

  // 2. indexability
  if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) fail.push(`${slug}: noindex`);

  // 3. infographic
  if (!existsSync(join(dir, 'infographic.svg'))) fail.push(`${slug}: infographic.svg missing`);

  // 4. dates
  const pub = html.match(/"datePublished":"([^"]+)"/)?.[1];
  const mod = html.match(/"dateModified":"([^"]+)"/)?.[1];
  if (!pub) fail.push(`${slug}: no datePublished`);
  else if (pub !== releases[slug]) fail.push(`${slug}: datePublished ${pub} != manifest ${releases[slug]}`);
  if (pub && mod && mod < pub) fail.push(`${slug}: dateModified ${mod} < datePublished ${pub}`);

  // 5. E-E-A-T byline
  if (!/Last reviewed\s*20\d\d-\d\d/.test(html)) warn.push(`${slug}: no visible "Last reviewed" line`);

  // 6. substance
  const words = strip(html).split(/\s+/).length;
  const internal = new Set([...html.matchAll(/href="\/(exams|paths|guides|states|categories)\/[a-z0-9-]+"/g)]).size;
  const external = (html.match(/href="https?:\/\/(?!testpreppilot\.com)/g) || []).length;
  if (words < 1200) warn.push(`${slug}: only ${words} words`);
  if (internal < 3) warn.push(`${slug}: only ${internal} internal links`);
  if (external < 1) warn.push(`${slug}: no external source links`);
}

// ── 7. orphan check ────────────────────────────────────────────────
const home = fs.readFileSync('dist/index.html', 'utf8');
let cats = '';
for (const d of readdirSync('dist/categories')) {
  const p = join('dist/categories', d, 'index.html');
  if (existsSync(p)) cats += fs.readFileSync(p, 'utf8');
}
const peerLinked = new Set();
for (const d of built) {
  const h = fs.readFileSync(join('dist/exams', d, 'index.html'), 'utf8');
  for (const m of h.matchAll(/href="\/exams\/([a-z0-9-]+)"/g)) peerLinked.add(m[1]);
}
for (const slug of Object.keys(releases)) {
  if (!home.includes(`/exams/${slug}"`)) fail.push(`${slug}: not linked from homepage`);
  if (!cats.includes(`/exams/${slug}"`)) fail.push(`${slug}: not linked from any category hub`);
  if (!peerLinked.has(slug)) warn.push(`${slug}: no inbound link from another exam page (sole page in its category?)`);
}

// ── 8. sitemap agreement ───────────────────────────────────────────
const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const entries = [...xml.matchAll(/<loc>[^<]*\/exams\/([a-z0-9-]+)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g)]
  .map((m) => ({ slug: m[1], lastmod: m[2].slice(0, 10) }));
if (entries.length !== Object.keys(releases).length) {
  fail.push(`sitemap has ${entries.length} exam entries, manifest has ${Object.keys(releases).length}`);
}
for (const e of entries) {
  if (releases[e.slug] !== e.lastmod) fail.push(`sitemap ${e.slug}: lastmod ${e.lastmod} != manifest ${releases[e.slug]}`);
}

// ── report ─────────────────────────────────────────────────────────
console.log(`released pages : ${Object.keys(releases).length}`);
console.log(`built pages    : ${built.length}`);
console.log(`\nFAIL (${fail.length})`);
console.log(fail.length ? fail.map((f) => '  - ' + f).join('\n') : '  none');
console.log(`\nWARN (${warn.length})`);
console.log(warn.length ? warn.map((w) => '  - ' + w).join('\n') : '  none');
process.exit(fail.length ? 1 : 0);
