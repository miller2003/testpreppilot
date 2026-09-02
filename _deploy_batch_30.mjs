// Deploys the next batch of exam pages.
//
// 1. Merges 30 new slugs into src/data/examCatalog/release-manifest.mjs with
//    publish dates randomly spread across the release window.
// 2. Prints the assignment so the run is auditable.
//
// Safe to re-run: it never touches slugs that already carry a release date.
// Run with the managed Node:  node _deploy_batch_30.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { allExamsFull, getExamDetail } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST = join(__dirname, 'src', 'data', 'examCatalog', 'release-manifest.mjs');

// ── The batch ──────────────────────────────────────────────────────
// Chosen from the 417 national-scope pages that (a) have a full depth layer and
// (b) are NOT 'placeholder' mode. Placeholder pages render noindex, so
// releasing them would add thin pages rather than indexable ones.
// Selection biases toward the verticals the live site covers least —
// admissions-academic was at zero despite being the highest-volume exam
// category in the U.S.
const BATCH = [
  // admissions-academic (8) — biggest gap, highest search volume
  'sat-exam',
  'act-test',
  'gre-general-test',
  'gmat-focus-edition',
  'toefl-ibt',
  'ielts-academic',
  'mcat-exam',
  'ged-test',
  // healthcare-clinical (4)
  'usmle-step-1',
  'nclex-pn',
  'pance',
  'mblex',
  // legal (3)
  'california-bar-exam',
  'uniform-bar-exam',
  'mpre',
  // finance-securities (3)
  'cfp-certification-exam',
  'series-63',
  'series-6',
  // technology (3)
  'isc2-cissp',
  'isaca-cisa',
  'comptia-data-plus',
  // allied-health (2)
  'aapc-cpc',
  'ptcb-cpht',
  // project-business (2)
  'pmi-capm',
  'shrm-cp',
  // one each, for topical spread
  'usps-vea-474',
  'nypd-police-officer-exam',
  'faa-part-107-initial-training-alc-451',
  'praxis-mathematics-5165',
  'epa-lead-renovator-rrp'
];

// ── Release window (inclusive) ─────────────────────────────────────
const WINDOW_START = '2026-08-08';
const WINDOW_END = '2026-09-02'; // today

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
const rnd = mulberry32(20260902);

function dayList(start, end) {
  const out = [];
  const d = new Date(start + 'T00:00:00Z');
  const last = new Date(end + 'T00:00:00Z');
  while (d <= last) {
    out.push(d.toISOString().slice(0, 10));
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return out;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const days = dayList(WINDOW_START, WINDOW_END);

// Stratified spread: every day in the window gets at least one article, then
// the remainder is drawn at random. Pure uniform sampling clumps badly at
// n=30 over 26 days and leaves visible gaps in the archive.
const dates = shuffle(days);
while (dates.length < BATCH.length) {
  dates.push(days[Math.floor(rnd() * days.length)]);
}

// ── Validate the batch before touching anything ────────────────────
const bySlug = new Map(allExamsFull.map((e) => [e.slug, e]));
const problems = [];

for (const slug of BATCH) {
  const exam = bySlug.get(slug);
  if (!exam) { problems.push(`${slug}: not in catalog`); continue; }
  if (releases[slug]) { problems.push(`${slug}: already released ${releases[slug]}`); continue; }
  if (!examDepth[slug]) { problems.push(`${slug}: no depth layer`); continue; }
  const detail = getExamDetail(slug) || {};
  const mode = detail.dossier
    ? exam.offered === false ? 'not-offered' : 'researched'
    : exam.record ? 'national' : 'placeholder';
  if (mode === 'placeholder') problems.push(`${slug}: renders as noindex placeholder`);
}

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
  console.log(`  ${date}  ${slug.padEnd(38)} [${e.category}]`);
}
const perDay = {};
for (const d of assignment.values()) perDay[d] = (perDay[d] || 0) + 1;
console.log('\nArticles per day in window:', Object.keys(perDay).sort().map((d) => `${d.slice(5)}=${perDay[d]}`).join(' '));
