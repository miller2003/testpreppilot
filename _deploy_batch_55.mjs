// Deploys the next batch of 55 exam pages — the heat-ranked picks produced by
// _heat_rank.mjs and written to _batch55_picks.json.
//
// 1. Validates every slug: unreleased, present in the catalog, carrying a
//    research record and a depth-layer entry (so it renders as a real indexable
//    page rather than a noindex placeholder). Validation runs before any write;
//    on any problem the script exits without touching the manifest.
// 2. Assigns each page a release date drawn at random from the trailing 30-day
//    window (today inclusive), capped at 3 articles per day, then shuffles so
//    heat does not correlate with date. This reproduces the "dates spread
//    backwards over 30 days" cadence the earlier waves used.
// 3. Merges into src/data/examCatalog/release-manifest.mjs, preserving the file
//    shape and alphabetical key order, and never modifying an existing slug.
//
// Deterministic (seeded PRNG) so a re-run over the same input is reproducible.
// Run with the managed Node:  node _deploy_batch_55.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST = join(__dirname, 'src', 'data', 'examCatalog', 'release-manifest.mjs');
const PICKS = join(__dirname, '_batch55_picks.json');

// ── Release window: the trailing 30 days, today inclusive ───────────
const WINDOW_DAYS = 30;
const WINDOW_END = '2026-10-03'; // today (UTC)
const MAX_PER_DAY = 3;           // cap so no single day looks like a dump
const SEED = 20261003;

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

const picks = JSON.parse(await readFile(PICKS, 'utf8'));
const BATCH = picks.map((p) => p.slug);

// ── Validate the batch before touching anything ────────────────────
const bySlug = new Map(allExamsFull.map((e) => [e.slug, e]));
const problems = [];

if (BATCH.length !== 55) problems.push(`expected 55 picks, JSON holds ${BATCH.length}`);
if (new Set(BATCH).size !== BATCH.length) problems.push('duplicate slug in the batch');

for (const slug of BATCH) {
  const exam = bySlug.get(slug);
  if (!exam) { problems.push(`${slug}: not in catalog`); continue; }
  if (releases[slug]) { problems.push(`${slug}: already released ${releases[slug]}`); continue; }
  if (!exam.record) { problems.push(`${slug}: no research record → renders noindex placeholder`); continue; }
  if (!examDepth[slug]) { problems.push(`${slug}: no depth layer`); continue; }
}

// Near-duplicate guard: these two slugs are the same credential under two names.
const ND_PAIRS = [['notary-signing-agent', 'nna-certified-notary-signing-agent'],
                  ['nccer-electrical', 'nccer-electrician'],
                  ['hubspot-inbound-certification', 'hubspot-inbound-marketing-certification']];
for (const [a, b] of ND_PAIRS) {
  if (BATCH.includes(a) && BATCH.includes(b)) {
    problems.push(`near-duplicate pair shipping together: ${a} + ${b}`);
  }
}

if (problems.length) {
  console.error('Batch rejected — nothing written.\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}

// ── Build the 30-day window ─────────────────────────────────────────
const end = new Date(WINDOW_END + 'T00:00:00Z');
const days = [];
for (let i = WINDOW_DAYS - 1; i >= 0; i--) {
  const d = new Date(end);
  d.setUTCDate(d.getUTCDate() - i);
  days.push(d.toISOString().slice(0, 10));
}

// Random dispersion, capped: each pick draws a uniform day, re-drawing while
// that day already holds MAX_PER_DAY. This yields a natural-looking spread
// (some days 0, most 1-2, a few 3) instead of a rigid one-per-day drip.
const dayCount = {};
const assignment = new Map();
for (const slug of shuffle(BATCH)) {
  let d;
  let guard = 0;
  do {
    d = days[Math.floor(rnd() * days.length)];
    if (++guard > 5000) { console.error('date assignment failed to converge'); process.exit(1); }
  } while ((dayCount[d] || 0) >= MAX_PER_DAY);
  dayCount[d] = (dayCount[d] || 0) + 1;
  assignment.set(slug, d);
}

// ── Rewrite the manifest, preserving its shape and sort order ──────
const src = await readFile(MANIFEST, 'utf8');
const merged = { ...releases };
for (const [slug, date] of assignment) merged[slug] = date;

const sortedKeys = Object.keys(merged).sort((a, b) => a.localeCompare(b));
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

// ── Report ─────────────────────────────────────────────────────────
console.log(`Deployed ${BATCH.length} pages. Manifest now holds ${sortedKeys.length}.\n`);
const rows = [...assignment.entries()].sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
for (const [slug, date] of rows) {
  const e = bySlug.get(slug);
  const heat = picks.find((p) => p.slug === slug)?.heat ?? '?';
  console.log(`  ${date}  heat=${String(heat).padStart(3)}  ${slug.padEnd(52)} [${e.category}]`);
}
console.log('\nPer-day:', days.map((d) => `${d.slice(5)}=${dayCount[d] || 0}`).join(' '));
console.log(`Days used: ${Object.keys(dayCount).length}/${WINDOW_DAYS} | max on one day: ${Math.max(...Object.values(dayCount))}`);
console.log(`Window: ${days[0]} .. ${days[days.length - 1]}`);
