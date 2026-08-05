// Apply the researched AIPB brief into batch01's EXISTING records
// (batch01 already had a placeholder AIPB program + exam record; the
// earlier auto-generated batch190 was a redundant duplicate that lost to
// first-wins). We shallow-merge the rich brief onto batch01, then batch190
// is deleted separately.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const BATCH = join(ROOT, 'src/data/examCatalog/national-research/batch01.mjs');
const brief = JSON.parse(readFileSync(join(ROOT, '_enrich/aipb-certified-bookkeeper.json'), 'utf8'));

const mod = await import(pathToFileURL(BATCH).href);
const programs = mod.programs;
const exams = mod.exams;

const ei = exams.findIndex((e) => e && e.slug === 'aipb-certified-bookkeeper');
if (ei < 0) { console.error('AIPB exam record not found in batch01!'); process.exit(1); }
for (const k of Object.keys(brief.exam)) exams[ei][k] = brief.exam[k];

const pi = programs.findIndex((p) => p && p.body === 'American Institute of Professional Bookkeepers (AIPB)');
if (pi < 0) { console.error('AIPB program dossier not found in batch01!'); process.exit(1); }
const { body, ...pp } = brief.program;
for (const k of Object.keys(pp)) programs[pi][k] = pp[k];

// Preserve the original bodyUrl on the program dossier if present.
if (!programs[pi].bodyUrl) programs[pi].bodyUrl = 'https://www.aipb.org';

const out =
  `export const programs = ${JSON.stringify(programs, null, 2)};\n` +
  `export const exams = ${JSON.stringify(exams, null, 2)};\n` +
  `export default { programs, exams };\n`;
writeFileSync(BATCH, out, 'utf8');
console.log(`Applied AIPB brief to batch01 (exam idx ${ei}, prog idx ${pi}). records: ${exams.length} exams, ${programs.length} programs`);
