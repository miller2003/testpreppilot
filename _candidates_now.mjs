// Enumerates every UNRELEASED page that would render as a real (indexable,
// 'national'/'researched') exam page: it needs a research record AND a depth
// layer entry. Prints them grouped by category so a batch can be picked with
// topical spread instead of letting one vertical dominate.
//
// STATE ROWS (flagship plan S4): excluded from the default pool. They enter
// ONLY with --include-states, and only if reports/quality/state-gate.json
// marks their page as passed (gate runs on built dist HTML, so build first).
//
// Run with the managed Node:  node _candidates_now.mjs [--include-states]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GATE_REPORT = path.join(__dirname, 'reports', 'quality', 'state-gate.json');
const includeStates = process.argv.includes('--include-states');

// A state row is a real candidate only when v2 per-state research exists.
const hasV2State = (e) => {
  const s = e.facts?.state;
  return !!(s && (s.exam || s.stateFaqs || s.sources));
};

// Gate-passed state slugs (opt-in via --include-states).
const gatePassed = (() => {
  if (!includeStates) return null;
  if (!fs.existsSync(GATE_REPORT)) {
    console.error('--include-states given but no state-gate.json report found — state rows stay excluded.');
    return new Set();
  }
  const rep = JSON.parse(fs.readFileSync(GATE_REPORT, 'utf8'));
  const passed = new Set();
  for (const p of rep.perPage || []) if (p.passed) passed.add(p.slug);
  return passed;
})();

const nationalRows = allExamsFull.filter(
  (e) => e.scope !== 'state' && !releases[e.slug] && e.record && examDepth[e.slug]
);
const stateRows = includeStates && gatePassed
  ? allExamsFull.filter(
      (e) => e.scope === 'state' && !releases[e.slug] && e.buildPage !== false && hasV2State(e) && gatePassed.has(e.slug)
    )
  : [];

const rows = [...nationalRows, ...stateRows];

const byCat = new Map();
for (const e of rows) {
  if (!byCat.has(e.category)) byCat.set(e.category, []);
  byCat.get(e.category).push(e.slug);
}

const totals = [...byCat.entries()].sort((a, b) => b[1].length - a[1].length);
console.log(`Unreleased, indexable candidates: ${rows.length} (${stateRows.length} state rows${includeStates ? ', gate opt-in' : ' — gated off, use --include-states'})\n`);
for (const [cat, slugs] of totals) {
  console.log(`${cat} (${slugs.length})`);
  console.log('  ' + slugs.join(' '));
}

// Also report what gets excluded and why, so the numbers are auditable.
const unreleased = allExamsFull.filter((e) => !releases[e.slug]);
const noDepth = unreleased.filter((e) => e.scope !== 'state' && e.record && !examDepth[e.slug]).length;
const noRecord = unreleased.filter((e) => e.scope !== 'state' && !e.record).length;
const stateGated = unreleased.filter((e) => e.scope === 'state').length;
console.log(`\nExcluded: ${noDepth} no depth layer, ${noRecord} no record (would render noindex placeholder), ${stateGated} state rows (gate${includeStates ? (gatePassed.size ? ' — some passed' : ' — none passed yet') : ' off'})`);
console.log(`Already released: ${Object.keys(releases).length}`);
