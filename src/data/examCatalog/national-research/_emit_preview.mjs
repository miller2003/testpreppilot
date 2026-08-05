// Read-only preview of what gen_national.mjs WOULD emit.
// Does not write any file. Reports per-kb-file: total slugs, already emitted,
// to-emit (in missing AND not present), and flags stubs.

import { readFileSync, readdirSync } from 'fs';
import { pathToFileURL } from 'url';

const DIR = './src/data/examCatalog/national-research';
const ROOT = 'C:/Users/samja/Desktop/testpreppilot-v2';

const missing = JSON.parse(readFileSync(`${ROOT}/missing_national.json`, 'utf8'));
const missingSlugs = new Set(missing.list.map((m) => m.slug));

const existingFiles = readdirSync(`${ROOT}/${DIR}`).filter((f) => /^batch\d+\.mjs$/.test(f));
const presentSlugs = new Set();
for (const f of existingFiles) {
  const txt = readFileSync(`${ROOT}/${DIR}/${f}`, 'utf8');
  const re = /slug["']?\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(txt))) presentSlugs.add(m[1]);
}

const kbFiles = readdirSync(`${ROOT}/${DIR}`)
  .filter((f) => /^_kb_.*\.mjs$/.test(f))
  .sort();

function isStub(e) {
  const issues = [];
  if (!e.description || e.description.length < 40) issues.push('no/short description');
  if (!e.quickAnswer || !e.quickAnswer.summary) issues.push('no quickAnswer.summary');
  if (!e.examMeta) issues.push('no examMeta');
  if (!Array.isArray(e.faqs) || e.faqs.length < 3) issues.push('faqs<' + 3);
  if (!Array.isArray(e.summaryPoints) || e.summaryPoints.length < 2) issues.push('summaryPoints<' + 2);
  if (!e.body) issues.push('no body');
  return issues;
}

let grandToEmit = 0;
let grandStub = 0;
for (const f of kbFiles) {
  const mod = await import(pathToFileURL(`${ROOT}/${DIR}/${f}`).href);
  const exams = Array.isArray(mod.kbExams) ? mod.kbExams : [];
  let total = exams.length;
  let emitted = 0, toEmit = 0, stub = 0, notInMissing = 0;
  for (const e of exams) {
    if (presentSlugs.has(e.slug)) { emitted++; continue; }
    if (!missingSlugs.has(e.slug)) { notInMissing++; continue; }
    toEmit++;
    const iss = isStub(e);
    if (iss.length) { stub++; console.log(`    ⚠ STUB ${e.slug}: ${iss.join('; ')}`); }
  }
  console.log(`\n${f}: total=${total} alreadyEmitted=${emitted} toEmit=${toEmit} notInMissing=${notInMissing} stubs=${stub}`);
  grandToEmit += toEmit;
  grandStub += stub;
}

console.log(`\n=== TOTAL to emit across all _kb files: ${grandToEmit} (stubs: ${grandStub}) ===`);
console.log(`present batch slug count: ${presentSlugs.size}`);
