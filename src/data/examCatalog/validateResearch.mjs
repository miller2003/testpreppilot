// Research-dossier integrity checker.
//   node src/data/examCatalog/validateResearch.mjs
//
// Verifies that every state template has a researched dossier, that the dossier
// schema is complete, that compact ids resolve, and reports coverage of the
// per-state facts that make each page unique.

import { stateTemplates } from './stateTemplates.mjs';
import { jurisdictions } from './jurisdictions.mjs';
import { compactById } from './compacts.mjs';
import { dossiers, dossierByKey } from './research/index.mjs';

const CODES = new Set(jurisdictions.map((j) => j.code));
const REQUIRED_STRINGS = ['key', 'name', 'category', 'group', 'type', 'blurb',
  'overview', 'eligibility', 'prerequisites', 'providersNote', 'defaultAgency', 'sourceUrl'];
const REQUIRED_ARRAYS = ['timeline', 'route', 'faqs'];

let errors = 0;
let warnings = 0;
const err = (m) => { errors++; console.log('  ERROR  ' + m); };
const warn = (m) => { warnings++; console.log('  warn   ' + m); };

console.log('='.repeat(64));
console.log('RESEARCH DOSSIER VALIDATION');
console.log('='.repeat(64));

// ── 1. template coverage ────────────────────────────────────────────
const tplKeys = stateTemplates.map((t) => t.key);
const dosKeys = dossiers.map((d) => d.key);
const missing = tplKeys.filter((k) => !dosKeys.includes(k));
const orphan = dosKeys.filter((k) => !tplKeys.includes(k));
const dupe = dosKeys.filter((k, i) => dosKeys.indexOf(k) !== i);

console.log(`\ntemplates: ${tplKeys.length}   dossiers: ${dossiers.length}`);
missing.forEach((k) => err(`no dossier for template "${k}"`));
orphan.forEach((k) => err(`dossier "${k}" matches no template`));
dupe.forEach((k) => err(`duplicate dossier key "${k}"`));

// ── 2. per-dossier schema ───────────────────────────────────────────
console.log('\nschema check');
for (const d of dossiers) {
  for (const f of REQUIRED_STRINGS) {
    if (typeof d[f] !== 'string' || !d[f].trim()) err(`${d.key}: missing string field "${f}"`);
  }
  for (const f of REQUIRED_ARRAYS) {
    if (!Array.isArray(d[f]) || d[f].length === 0) err(`${d.key}: missing/empty array "${f}"`);
  }
  if (d.overview && d.overview.length < 400) warn(`${d.key}: overview is thin (${d.overview.length} chars)`);
  if ((d.faqs || []).length < 5) warn(`${d.key}: only ${(d.faqs || []).length} FAQs`);

  for (const [obj, keys] of [
    ['exam', ['admin', 'questions', 'time', 'pass', 'fee', 'format']],
    ['education', ['hours', 'note']],
    ['costBreakdown', ['items', 'total']]
  ]) {
    if (!d[obj] || typeof d[obj] !== 'object') { err(`${d.key}: missing object "${obj}"`); continue; }
    for (const k of keys) if (d[obj][k] === undefined) err(`${d.key}: ${obj}.${k} missing`);
  }
  if (!Array.isArray(d.costBreakdown?.items) || !d.costBreakdown.items.length) {
    err(`${d.key}: costBreakdown.items empty`);
  }
  (d.timeline || []).forEach((t, i) => {
    if (!t.stage) err(`${d.key}: timeline[${i}] has no stage`);
    else if (!t.duration) warn(`${d.key}: timeline[${i}] "${t.stage.slice(0, 40)}…" has no duration`);
  });
  (d.route || []).forEach((r, i) => {
    if (!r.title) err(`${d.key}: route[${i}] has no title`);
    else if (!r.description) warn(`${d.key}: route[${i}] "${r.title.slice(0, 40)}…" has no description`);
  });
  (d.faqs || []).forEach((f, i) => {
    if (!f.q || !f.a) err(`${d.key}: faqs[${i}] needs {q,a}`);
  });

  // compact id must resolve
  const cid = d.reciprocity?.compact;
  if (cid && !compactById[cid]) err(`${d.key}: unknown compact id "${cid}"`);
  if (!d.reciprocity || typeof d.reciprocity.note !== 'string' || !d.reciprocity.note.trim()) {
    warn(`${d.key}: no reciprocity note`);
  }

  // states
  const codes = Object.keys(d.states || {});
  if (!codes.length) { err(`${d.key}: states {} is empty`); continue; }
  for (const c of codes) {
    if (!CODES.has(c)) err(`${d.key}: "${c}" is not a valid jurisdiction code`);
    const s = d.states[c];
    if (!s.agencyUrl) err(`${d.key}.${c}: no agencyUrl`);
    if (!s.agency) warn(`${d.key}.${c}: no agency name`);
    if (cid && s.compactMember === undefined) warn(`${d.key}.${c}: compactMember not set (compact=${cid})`);
    if (s.agencyUrl && !/^https?:\/\//.test(s.agencyUrl)) err(`${d.key}.${c}: agencyUrl not absolute`);
  }
}

// ── 3. coverage report ──────────────────────────────────────────────
console.log('\n' + '-'.repeat(64));
console.log('COVERAGE');
console.log('-'.repeat(64));

let inst = 0, fee = 0, note = 0, member = 0;
const rows = [];
for (const d of dossiers) {
  const codes = Object.keys(d.states || {});
  const f = codes.filter((c) => d.states[c].fee).length;
  const n = codes.filter((c) => d.states[c].note).length;
  const m = codes.filter((c) => d.states[c].compactMember === true).length;
  inst += codes.length; fee += f; note += n; member += m;
  rows.push({ key: d.key, states: codes.length, fee: f, note: n, member: m, conf: d.confidence });
}

rows.sort((a, b) => a.states - b.states);
console.log('template'.padEnd(30) + 'states  fee  note  compact  conf');
for (const r of rows) {
  console.log(
    r.key.padEnd(30) +
    String(r.states).padStart(5) +
    String(r.fee).padStart(6) +
    String(r.note).padStart(6) +
    String(r.member).padStart(8) +
    '  ' + r.conf
  );
}

const pct = (x) => `${Math.round((x / inst) * 100)}%`;
console.log('-'.repeat(64));
console.log(`verified state instances : ${inst}  (of ${tplKeys.length * 51} mechanical combinations)`);
console.log(`false positives removed  : ${tplKeys.length * 51 - inst}`);
console.log(`  with per-state fee     : ${fee} (${pct(fee)})`);
console.log(`  with per-state note    : ${note} (${pct(note)})`);
console.log(`  compact members        : ${member}`);
console.log(`high-confidence dossiers : ${dossiers.filter((d) => d.confidence === 'high').length}/${dossiers.length}`);

console.log('\n' + '='.repeat(64));
console.log(errors === 0 ? `PASS — 0 errors, ${warnings} warnings` : `FAIL — ${errors} errors, ${warnings} warnings`);
console.log('='.repeat(64));
process.exit(errors === 0 ? 0 : 1);
