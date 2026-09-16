// Deploys the next batch of 30 exam pages (wave of 2026-09-16).
//
// 1. Validates every slug in BATCH: unreleased, carries a research record and a
//    depth-layer entry, and therefore renders as a real indexable page.
//    A page with no record renders 'placeholder' → noindex, so it is rejected.
// 2. Assigns release dates randomly spread across the trailing 30-day window,
//    with a light jitter (6 days carry two articles, 6 days carry none) so the
//    archive does not look like a perfectly regular daily drip.
// 3. Merges into src/data/examCatalog/release-manifest.mjs, preserving the
//    file shape and alphabetical key order, and never touching an existing slug.
//
// Safe to re-run: validation runs before any write, and the merge is additive.
// Run with the managed Node:  node _deploy_batch_30_v2.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST = join(__dirname, 'src', 'data', 'examCatalog', 'release-manifest.mjs');

// ── The batch ──────────────────────────────────────────────────────
// Picked from the 387 unreleased indexable candidates, weighted by where the
// LIVE site is thinnest rather than by where the backlog is largest. Live
// coverage was measured first: technology 24/126 (19%), admissions-academic
// 8/69 (12%), trades 2/23 (9%), insurance 0/7, behavioral-health 0/1,
// animal-agriculture 0/2. Verticals already well covered (legal 75%,
// healthcare-clinical 55%, finance-securities 45%) get a light allocation.
// 14 categories, no single vertical above 4 pages.
const BATCH = [
  // admissions-academic (4) — 12% live coverage, highest U.S. search volume
  'ap-calculus-ab',
  'ap-statistics',
  'ap-biology',
  'ap-psychology',
  // technology (4) — largest inventory, so only high-intent certs
  'aws-certified-solutions-architect-professional',
  'certified-kubernetes-administrator',
  'microsoft-az-400',
  'salesforce-administrator',
  // education-teaching (3) — Praxis is a huge, underserved query family
  'praxis-elementary-education-content-knowledge-5018',
  'praxis-early-childhood-education-5025',
  'cda-preschool',
  // allied-health (2)
  'arrt-radiography',
  'nha-ccma',
  // trades (2) — 9% live coverage; EPA 608 is a mandatory-cert query
  'epa-608-universal',
  'ase-a8-engine-performance',
  // project-business (2)
  'prince2-foundation',
  'pmi-acp',
  // public-safety (2)
  'nims-ics-100',
  'faa-air-traffic-controller',
  // transportation (2)
  'cdl-hazmat-endorsement-knowledge-test',
  'cdl-school-bus-endorsement-knowledge-test',
  // workplace-safety (2)
  'osha-10-general-industry',
  'osha-30-general-industry',
  // food-hospitality (2)
  'servsafe-food-protection-manager',
  'tips-alcohol-certification',
  // finance-securities (2)
  'cfa-level-3',
  'nmls-safe-mlo-national-test',
  // one each: three categories are currently empty on the live site
  'ahip-health-insurance-associate', // insurance (0 live)
  'bcba-board-certified-behavior-analyst', // behavioral-health (0 live)
  'vtne' // animal-agriculture (0 live)
];

// ── Release window: the trailing 30 days, today inclusive ──────────
// 2026-08-18 .. 2026-09-16 = exactly 30 days. Overlaps the previous wave's
// dates (which ended 2026-09-02) by design — the manifest is a slug→date map,
// so several articles may share a day.
const WINDOW_DAYS = 30;
const WINDOW_END = '2026-09-16';
const DOUBLE_DAYS = 6; // days that carry two articles; the same number stay empty

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
const rnd = mulberry32(20260916);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const end = new Date(WINDOW_END + 'T00:00:00Z');
const days = [];
for (let i = WINDOW_DAYS - 1; i >= 0; i--) {
  const d = new Date(end);
  d.setUTCDate(d.getUTCDate() - i);
  days.push(d.toISOString().slice(0, 10));
}

// Light jitter instead of a strict one-per-day drip: 24 distinct days are used,
// 6 of them twice, 6 not at all. Then the pairs are shuffled so the doubled days
// are not clustered at the ends of the window.
const usedDays = shuffle(days).slice(0, WINDOW_DAYS - DOUBLE_DAYS);
const doubledDays = shuffle(usedDays).slice(0, DOUBLE_DAYS);
let dates = shuffle([...usedDays, ...doubledDays]);
while (dates.length < BATCH.length) dates.push(usedDays[Math.floor(rnd() * usedDays.length)]);

// ── Validate the batch before touching anything ────────────────────
const bySlug = new Map(allExamsFull.map((e) => [e.slug, e]));
const problems = [];

for (const slug of BATCH) {
  const exam = bySlug.get(slug);
  if (!exam) { problems.push(`${slug}: not in catalog`); continue; }
  if (releases[slug]) { problems.push(`${slug}: already released ${releases[slug]}`); continue; }
  if (!exam.record) { problems.push(`${slug}: no research record → renders noindex placeholder`); continue; }
  if (!examDepth[slug]) { problems.push(`${slug}: no depth layer`); continue; }
}

if (BATCH.length !== dates.length) problems.push(`internal: ${BATCH.length} slugs vs ${dates.length} dates`);
if (new Set(BATCH).size !== BATCH.length) problems.push('internal: duplicate slug in BATCH');

if (problems.length) {
  console.error('Batch rejected — nothing written.\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}

// ── Assign dates (shuffled, so category does not correlate with date) ─
const order = shuffle(BATCH);
const assignment = new Map();
order.forEach((slug, i) => assignment.set(slug, dates[i]));

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
  console.log(`  ${date}  ${slug.padEnd(52)} [${e.category}]`);
}
const perDay = {};
for (const d of assignment.values()) perDay[d] = (perDay[d] || 0) + 1;
console.log('\nPer-day:', days.map((d) => `${d.slice(5)}=${perDay[d] || 0}`).join(' '));
console.log(`Days used: ${Object.keys(perDay).length}/${WINDOW_DAYS}`);
