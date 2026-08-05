// gen_national.mjs — turns the human-authored knowledge base (_kb_*.mjs)
// into schema-conformant national-research batch files, then keeps
// national-research/index.mjs's import list in sync.
//
// Safety rules:
//   • Only slugs that are BOTH (a) in missing_national.json and
//     (b) not already present in any existing batch file are emitted.
//     This makes the run idempotent and prevents orphaned/duplicate records.
//   • Each exam must reference a `body` that has a matching program dossier;
//     missing bodies are warned and that exam is skipped (no broken page).
//   • Batch files continue the existing numbering (batch43.mjs, …).
//
// The knowledge base is discovered automatically: every file matching
// _kb_*.mjs in this directory is loaded, so content can be split into as
// many chunk files as needed without touching this script.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { pathToFileURL } from 'url';

const DIR = './src/data/examCatalog/national-research';

// ── load every knowledge base part automatically ──────────────────
const kbFiles = readdirSync(DIR)
  .filter((f) => /^_kb_.*\.mjs$/.test(f))
  .sort();

// Optional KB_FILTER: emit only one exam chunk per run so the batch count
// stays manageable on very large runs. Bones (bodies) + research are always
// loaded; only the matching _kb_exams_skel_<filter> chunk is added.
const kbFilter = process.env.KB_FILTER;
let loadFiles = kbFiles;
if (kbFilter) {
  if (kbFilter === 'research') {
    loadFiles = kbFiles.filter((f) => /_kb_bodies_skel/.test(f) || /_kb_research_/.test(f));
  } else {
    loadFiles = kbFiles.filter((f) => /_kb_bodies_skel/.test(f) || f.includes(`_kb_exams_skel_${kbFilter}`));
  }
}

let allBodies = [];
let allExams = [];
for (const f of loadFiles) {
  const mod = await import(pathToFileURL(`${DIR}/${f}`).href);
  if (Array.isArray(mod.kbBodies)) allBodies.push(...mod.kbBodies);
  if (Array.isArray(mod.kbExams)) allExams.push(...mod.kbExams);
}
console.log(`  Loaded ${kbFiles.length} knowledge-base file(s): ${allBodies.length} bodies, ${allExams.length} exams.`);

// ── missing slugs (the gaps) ──────────────────────────────────────
const missing = JSON.parse(readFileSync('./missing_national.json', 'utf8'));
const missingSlugs = new Set(missing.list.map((m) => m.slug));

// ── slugs already present in existing batch files ──────────────────
const existingFiles = readdirSync(DIR).filter((f) => /^batch\d+\.mjs$/.test(f));
const presentSlugs = new Set();
for (const f of existingFiles) {
  const txt = readFileSync(`${DIR}/${f}`, 'utf8');
  const re = /slug["']?\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(txt))) presentSlugs.add(m[1]);
}

// ── filter to new, valid exams ─────────────────────────────────────
const newExams = allExams.filter(
  (e) => e.slug && e.body && missingSlugs.has(e.slug) && !presentSlugs.has(e.slug)
);
const needBodies = new Set(newExams.map((e) => e.body));

// Bodies that already have a REAL program dossier in an existing batch.
// Scan ONLY the `programs` block — exam-level "body" fields must NOT count
// as a dossier, or those bodies' remaining exams get suppressed (they'd have
// no bodyChunk to attach to and would never be emitted).
const existingBodySet = new Set();
for (const f of existingFiles) {
  const txt = readFileSync(`${DIR}/${f}`, 'utf8');
  const pm = txt.match(/export const programs = \[([\s\S]*?)\];/);
  if (!pm) continue;
  const re = /"body":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(pm[1]))) existingBodySet.add(m[1]);
}

// Every body referenced by a new exam gets a dossier candidate; we only skip
// re-writing one that already exists when emitting (see the programs filter).
const newBodies = allBodies.filter((b) => needBodies.has(b.body));

const missingBodyRefs = [...needBodies].filter((b) => !allBodies.find((x) => x.body === b));
for (const b of missingBodyRefs) console.warn('  ⚠ missing program dossier for body:', b);

// ── chunk into batch files (≤ 40 exams, ≤ 14 programs each) ────────
const MAX_EXAMS = 40;
const MAX_PROGRAMS = 14;

const curMax = existingFiles.length ? Math.max(...existingFiles.map((f) => parseInt(f.match(/\d+/)[0], 10))) : 0;
let batchNum = curMax;
let written = 0;

const bodyChunks = [];
for (let i = 0; i < newBodies.length; i += MAX_PROGRAMS) bodyChunks.push(newBodies.slice(i, i + MAX_PROGRAMS));

for (const bodyChunk of bodyChunks) {
  for (let i = 0; i < newExams.length; i += MAX_EXAMS) {
    const examChunk = newExams.slice(i, i + MAX_EXAMS).filter((e) => bodyChunk.find((b) => b.body === e.body));
    if (!examChunk.length) continue;
    batchNum += 1;
    const programs = bodyChunk.filter((b) => examChunk.find((e) => e.body === b.body) && !existingBodySet.has(b.body));
    const content = emitBatch(batchNum, programs, examChunk);
    const fname = `${DIR}/batch${String(batchNum).padStart(2, '0')}.mjs`;
    writeFileSync(fname, content);
    written += 1;
    console.log(`  ✎ wrote ${fname} (${programs.length} programs, ${examChunk.length} exams)`);
  }
}

console.log(`\nEmitted ${written} new batch file(s); ${newExams.length} exams, ${newBodies.length} program dossiers.`);

// ── resync index.mjs imports ───────────────────────────────────────
syncIndex();

function emitBatch(n, programs, exams) {
  const header = `// AUTO-GENERATED by gen_national.mjs from _kb_*.mjs — do not hand-edit.\n// batch ${String(n).padStart(2, '0')}: ${programs.length} program dossier(s), ${exams.length} exam record(s).\n\n`;
  const progTxt = `export const programs = ${JSON.stringify(programs, null, 2)};\n\n`;
  const examTxt = `export const exams = ${JSON.stringify(exams, null, 2)};\n\n`;
  const defaultTxt = `export default { programs, exams };\n`;
  return header + progTxt + examTxt + defaultTxt;
}

function syncIndex() {
  const files = readdirSync(DIR)
    .filter((f) => /^batch\d+\.mjs$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));
  const imports = files.map((f) => `import ${batchVar(f)} from './${f}';`).join('\n');
  const array = `const BATCHES = [\n  ${files.map(batchVar).join(', ')}\n];`;

  let idx = readFileSync(`${DIR}/index.mjs`, 'utf8');
  idx = idx.replace(
    /\/\/ ==AUTO_BATCH_IMPORTS_START==[\s\S]*?\/\/ ==AUTO_BATCH_IMPORTS_END==/,
    `// ==AUTO_BATCH_IMPORTS_START==\n${imports}\n// ==AUTO_BATCH_IMPORTS_END==`
  );
  idx = idx.replace(
    /\/\/ ==AUTO_BATCH_ARRAY_START==[\s\S]*?\/\/ ==AUTO_BATCH_ARRAY_END==/,
    `// ==AUTO_BATCH_ARRAY_START==\n${array}\n// ==AUTO_BATCH_ARRAY_END==`
  );
  writeFileSync(`${DIR}/index.mjs`, idx);
  console.log(`  ↻ index.mjs now imports ${files.length} batch files.`);
}

function batchVar(f) {
  return 'b' + f.match(/\d+/)[0];
}
