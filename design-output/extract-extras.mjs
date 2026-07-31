// Extract the EXTRAS object from build-exam-pages.cjs into a canonical ESM module
// so both the Astro ExamGuide component and the standalone generator share one source of truth.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.join(__dirname, 'build-exam-pages.cjs'), 'utf8');

const start = src.indexOf('const EXTRAS =');
const end = src.indexOf('// ---------- section builders ----------');
if (start < 0 || end < 0) {
  console.error('Could not locate EXTRAS block');
  process.exit(1);
}
let block = src.slice(start, end).trim();
block = block.replace(/^const EXTRAS =/, 'export const examEditorial =');

const header = `// Editorial exam extras — single source of truth.
// Extracted from design-output/build-exam-pages.cjs (EXTRAS). Consumed by
// src/components/ExamGuide.astro and the standalone generator.
// Shape per slug:
//   factStrip: [{label, value}]
//   examMeta: {questions, time, pass, fee, format, admin}
//   examTopicsTitle, examTopicsIntro
//   topics? | parts? | modules?: content breakdown
//   examEssentials: [[label, value]]
//   faqs: [{q, a}]

`;

const out = path.resolve(__dirname, '..', 'src', 'data', 'examEditorial.mjs');
fs.writeFileSync(out, header + block + '\n\nexport default examEditorial;\n');
console.log('WROTE', out);
