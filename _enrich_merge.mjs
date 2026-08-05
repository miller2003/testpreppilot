// ─────────────────────────────────────────────────────────────────────
//  Merge researched "enrichment" briefs into the national-research batch
//  files. Safe: imports each batch module, shallow-merges the brief's
//  fields into the matching exam record and/or program dossier, then
//  rewrites the file with JSON.stringify(..., null, 2) — preserving key
//  order, `null` values and the `export const programs/exams` wrapper.
//
//  Brief file shape (one JSON per exam), placed in _enrich/<slug>.json:
//    {
//      "slug": "aama-cma",
//      "exam":   { ...fields to overwrite on the exam record... },
//      "program": { "body": "<exact program body string>",
//                   ...fields to overwrite on the matching program... }
//    }
//
//  Usage: node _enrich_merge.mjs [--dry]
// ─────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const BATCH_DIR = join(ROOT, 'src/data/examCatalog/national-research');
const ENRICH_DIR = join(ROOT, '_enrich');
const DRY = process.argv.includes('--dry');

const batchFiles = readdirSync(BATCH_DIR).filter((f) => /^batch\d+\.mjs$/.test(f));

function findBatchForSlug(slug) {
  const needle = `"slug": "${slug}"`;
  for (const f of batchFiles) {
    const text = readFileSync(join(BATCH_DIR, f), 'utf8');
    if (text.includes(needle)) return f;
  }
  return null;
}

function shallowMerge(target, patch) {
  for (const k of Object.keys(patch)) {
    // Replace entirely (don't deep-merge nested objects like examMeta) so
    // researched values fully replace vague placeholders.
    target[k] = patch[k];
  }
}

async function main() {
  if (!existsSync(ENRICH_DIR)) {
    console.error('No _enrich/ directory found.');
    process.exit(1);
  }
  const briefs = readdirSync(ENRICH_DIR).filter((f) => f.endsWith('.json'));
  if (!briefs.length) {
    console.error('No brief JSON files in _enrich/.');
    process.exit(1);
  }

  const fileCache = new Map(); // batchFile -> { programs, exams, text }
  const touched = new Set();

  for (const bf of briefs) {
    const brief = JSON.parse(readFileSync(join(ENRICH_DIR, bf), 'utf8'));
    const slug = brief.slug;
    if (!slug) { console.warn(`! ${bf}: missing slug, skip`); continue; }
    const batchFile = findBatchForSlug(slug);
    if (!batchFile) { console.warn(`! ${bf}: slug "${slug}" not found in any batch, skip`); continue; }
    if (!fileCache.has(batchFile)) {
      const mod = await import(pathToFileURL(join(BATCH_DIR, batchFile)).href);
      const text = readFileSync(join(BATCH_DIR, batchFile), 'utf8');
      fileCache.set(batchFile, { programs: mod.programs, exams: mod.exams, text });
    }
    const cache = fileCache.get(batchFile);

    // Merge exam record
    const examIdx = cache.exams.findIndex((e) => e && e.slug === slug);
    if (examIdx === -1) { console.warn(`! ${bf}: exam record "${slug}" missing in ${batchFile}, skip`); continue; }
    if (brief.exam) shallowMerge(cache.exams[examIdx], brief.exam);

    // Merge program dossier (matched by body string)
    if (brief.program && brief.program.body) {
      const pIdx = cache.programs.findIndex((p) => p && p.body === brief.program.body);
      if (pIdx === -1) { console.warn(`! ${bf}: program "${brief.program.body}" not found in ${batchFile}, skip program merge`); }
      else { const { body, ...pPatch } = brief.program; shallowMerge(cache.programs[pIdx], pPatch); }
    }

    touched.add(batchFile);
    console.log(`✓ ${slug}  <- ${batchFile}`);
  }

  // Write back touched files
  for (const batchFile of touched) {
    const { programs, exams } = fileCache.get(batchFile);
    const out =
      `export const programs = ${JSON.stringify(programs, null, 2)};\n` +
      `export const exams = ${JSON.stringify(exams, null, 2)};\n` +
      `export default { programs, exams };\n`;
    if (DRY) {
      console.log(`(dry) would write ${batchFile} (${programs.length} programs, ${exams.length} exams)`);
    } else {
      writeFileSync(join(BATCH_DIR, batchFile), out, 'utf8');
      console.log(`✓ wrote ${batchFile}`);
    }
  }
  console.log(`\nDone. ${touched.size} batch file(s) ${DRY ? 'would be ' : ''}updated from ${briefs.length} brief(s).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
