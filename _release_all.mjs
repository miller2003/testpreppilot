// Wholesale release: publishes EVERY unreleased page that would render as a
// real (indexable) exam guide, with each page's date drawn at random from a
// trailing 15-day window.
//
// This supersedes the 55-page / 30-day cadence of _deploy_batch_55.mjs for the
// "put everything live now" wave. Same rules otherwise:
//   1. Validate before writing — every slug must be unreleased, in the catalog,
//      carry a research `record` and an `examDepth` entry. Any problem exits
//      without touching the manifest.
//   2. Dates: uniform random draw over the trailing WINDOW_DAYS days ending
//      WINDOW_END (inclusive), soft-capped at MAX_PER_DAY, then shuffled so
//      heat does not correlate with date.
//   3. Merge into src/data/examCatalog/release-manifest.mjs preserving shape
//      and alphabetical key order; existing slugs are never modified.
//   4. Write _batch55_picks.json for every released slug so _verify55.mjs can
//      check them all (heat values are parsed out of _heat_rank.mjs's VOL map
//      for reporting only — they do not affect selection here).
//
// Deterministic (seeded PRNG): a re-run over the same input is reproducible.
// Usage:  node _release_all.mjs [--dry]
// Run with the managed Node.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST = join(__dirname, 'src', 'data', 'examCatalog', 'release-manifest.mjs');
const PICKS = join(__dirname, '_batch55_picks.json');
const DRY = process.argv.includes('--dry');

// ── Release window: the trailing 15 days, today inclusive ───────────
const WINDOW_DAYS = 15;
const WINDOW_END = '2026-10-09'; // today (UTC)
const MAX_PER_DAY = 25;          // soft cap — 15 * 25 = 375 slots for the pool
const SEED = 20261009;

// Near-duplicate pairs: same credential under two names. They are shipped (the
// user asked for every page), but they are reported so the collision is on the
// record rather than silent.
const ND_PAIRS = [['notary-signing-agent', 'nna-certified-notary-signing-agent'],
                  ['nccer-electrical', 'nccer-electrician'],
                  ['hubspot-inbound-certification', 'hubspot-inbound-marketing-certification']];

// ── Deterministic PRNG so the run is reproducible ──────────────────
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(SEED);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── The pool: every unreleased page that renders as a real guide ────
const bySlug = new Map(allExamsFull.map((e) => [e.slug, e]));
const BATCH = allExamsFull
  .filter((e) => !releases[e.slug] && e.record && examDepth[e.slug])
  .map((e) => e.slug);

// ── Validate before touching anything ──────────────────────────────
const problems = [];
if (!BATCH.length) problems.push('pool is empty — nothing to release');
if (new Set(BATCH).size !== BATCH.length) problems.push('duplicate slug in the batch');
for (const slug of BATCH) {
  const exam = bySlug.get(slug);
  if (!exam) { problems.push(`${slug}: not in catalog`); continue; }
  if (releases[slug]) { problems.push(`${slug}: already released ${releases[slug]}`); continue; }
  if (!exam.record) { problems.push(`${slug}: no research record → renders noindex placeholder`); continue; }
  if (!examDepth[slug]) { problems.push(`${slug}: no depth layer`); continue; }
}
if (WINDOW_DAYS * MAX_PER_DAY < BATCH.length) {
  problems.push(`window too small: ${WINDOW_DAYS} days x ${MAX_PER_DAY}/day < ${BATCH.length} pages`);
}
if (problems.length) {
  console.error('Release rejected — nothing written.\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}

// ── Build the window ───────────────────────────────────────────────
const end = new Date(WINDOW_END + 'T00:00:00Z');
const days = [];
for (let i = WINDOW_DAYS - 1; i >= 0; i--) {
  const d = new Date(end);
  d.setUTCDate(d.getUTCDate() - i);
  days.push(d.toISOString().slice(0, 10));
}

// Random dispersion, soft-capped: draw a uniform day, re-draw while that day
// already holds MAX_PER_DAY. Produces a natural spread rather than a rigid
// per-day drip.
const dayCount = {};
const assignment = new Map();
for (const slug of shuffle(BATCH)) {
  let d;
  let guard = 0;
  do {
    d = days[Math.floor(rnd() * days.length)];
    if (++guard > 20000) { console.error('date assignment failed to converge'); process.exit(1); }
  } while ((dayCount[d] || 0) >= MAX_PER_DAY);
  dayCount[d] = (dayCount[d] || 0) + 1;
  assignment.set(slug, d);
}

// ── Heat values, for the report only (parsed from the VOL model) ───
const heatSrc = await readFile(join(__dirname, '_heat_rank.mjs'), 'utf8');
const volMap = new Map();
for (const m of heatSrc.matchAll(/'([a-z0-9-]+)':\s*\{\s*v:\s*(\d+),\s*src:\s*'([a-z]+)'/g)) {
  volMap.set(m[1], { v: Number(m[2]), src: m[3] });
}
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const heatOf = (v) => clamp(Math.round(45 + 12 * Math.log10(v / 1000)), 10, 100);
const rows = BATCH.map((slug) => {
  const e = bySlug.get(slug);
  const vol = volMap.get(slug);
  return {
    slug,
    name: e.name,
    category: e.category,
    date: assignment.get(slug),
    heat: vol ? heatOf(vol.v) : null,
    vol: vol ? vol.v : null,
    src: vol ? vol.src : 'unmapped'
  };
});

// ── Merge into the manifest, preserving shape and sort order ───────
const merged = { ...releases };
for (const [slug, date] of assignment) merged[slug] = date;
const sortedKeys = Object.keys(merged).sort((a, b) => a.localeCompare(b));

if (!DRY) {
  const src = await readFile(MANIFEST, 'utf8');
  const body = sortedKeys.map((k) => `  "${k}": "${merged[k]}",`).join('\n');
  const next = src.replace(
    /(export const releases = \{)[\s\S]*?(\n\};)/,
    (_m, head, tail) => `${head}\n${body}${tail}`
  );
  if (next === src) {
    console.error('Manifest regex did not match — nothing written.');
    process.exit(1);
  }
  await writeFile(MANIFEST, next, 'utf8');
  await writeFile(
    PICKS,
    JSON.stringify(
      rows
        .slice()
        .sort((a, b) => (b.heat ?? -1) - (a.heat ?? -1) || a.slug.localeCompare(b.slug))
        .map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, category: r.category,
                          heat: r.heat, vol: r.vol, src: r.src, family: null,
                          note: 'full-pool release wave — heat shown for reporting only' })),
      null, 2
    ),
    'utf8'
  );
}

// ── Report ─────────────────────────────────────────────────────────
const dates = [...assignment.values()].sort();
const catCount = {};
for (const r of rows) catCount[r.category] = (catCount[r.category] || 0) + 1;
const collisions = ND_PAIRS.filter(([a, b]) => assignment.has(a) && assignment.has(b));

console.log(`${DRY ? '[DRY RUN] ' : ''}Releasing ${BATCH.length} pages.`);
console.log(`Manifest: ${Object.keys(releases).length} → ${sortedKeys.length} slugs`);
console.log(`Window: ${dates[0]} .. ${dates[dates.length - 1]} (${WINDOW_DAYS} days, cap ${MAX_PER_DAY}/day)`);
console.log(`Days used: ${Object.keys(dayCount).length}/${WINDOW_DAYS} | max on one day: ${Math.max(...Object.values(dayCount))} | mean: ${(BATCH.length / WINDOW_DAYS).toFixed(1)}`);
console.log('\nPer-day:');
for (const d of days) console.log(`  ${d}  ${String(dayCount[d] || 0).padStart(3)}  ${'#'.repeat(dayCount[d] || 0)}`);
console.log('\nBy category:');
Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => console.log(`  ${String(n).padStart(3)}  ${c}`));
console.log(`\nHeat model: ${volMap.size ? rows.filter((r) => r.heat !== null).length : 0}/${BATCH.length} slugs matched`);
if (collisions.length) {
  console.log('\n⚠ near-duplicate pairs shipped in this wave:');
  collisions.forEach(([a, b]) => console.log(`  ${a}  +  ${b}`));
}
console.log(`\nTop 12 by heat:`);
rows.slice().sort((a, b) => (b.heat ?? -1) - (a.heat ?? -1)).slice(0, 12)
  .forEach((r) => console.log(`  heat=${String(r.heat).padStart(3)}  ${r.date}  ${r.slug}`));
if (!DRY) console.log(`\nWrote ${MANIFEST} and ${PICKS}`);
