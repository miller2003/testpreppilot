import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const brief = JSON.parse(readFileSync(join(ROOT, '_enrich/aipb-certified-bookkeeper.json'), 'utf8'));
brief.exam.slug = brief.slug; // research record needs its own slug key
const out =
  `// Generated for AIPB Certified Bookkeeper from _enrich/aipb-certified-bookkeeper.json\n` +
  `// batch 190: 1 program dossier, 1 exam record.\n\n` +
  `export const programs = ${JSON.stringify([brief.program], null, 2)};\n` +
  `export const exams = ${JSON.stringify([brief.exam], null, 2)};\n` +
  `export default { programs, exams };\n`;
writeFileSync(join(ROOT, 'src/data/examCatalog/national-research/batch190.mjs'), out, 'utf8');
console.log('wrote batch190.mjs (1 program, 1 exam)');
