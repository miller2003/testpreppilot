// Generates a branded, per-exam infographic SVG for every released exam page
// and writes it to public/exams/<slug>/infographic.svg.
//
// Why: the built site had zero <img> elements, which closes off Google Images
// and Discover and weakens on-page engagement. A unique, source-derived graphic
// per money page fixes that at scale and is crawlable as an image.
//
// Run with the managed Node:  node _gen_infographics.mjs
// Safe to re-run — it overwrites existing files idempotently.

import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { allExams, getExamDetail, categoryById } from './src/data/examCatalog/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = join(__dirname, 'public', 'exams');

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// Greedy word-wrap to a max char width.
function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    if (!line) line = w;
    else if ((line + ' ' + w).length <= max) line += ' ' + w;
    else {
      lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function statRows(exam, detail) {
  const rows = [];
  if (exam.scope === 'national') {
    const r = detail.record;
    if (r?.cost) rows.push(['All-in cost', r.cost]);
    const len = r?.time || (r?.examMeta && r.examMeta.time);
    if (len) rows.push(['Length', len]);
    if (detail.program?.body) rows.push(['Awarded by', detail.program.body]);
  } else {
    const f = exam.facts || detail.facts;
    const ag = f?.agency || detail.dossier?.defaultAgency;
    if (ag) rows.push(['Issuing agency', ag]);
    if (exam.stateName) rows.push(['Jurisdiction', exam.stateName]);
    if (f?.fee) rows.push(['State fees', f.fee]);
  }
  rows.push(['Credential type', exam.type]);
  const cat = categoryById[exam.category];
  if (cat) rows.push(['Profession', cat.name]);
  return rows;
}

function buildSvg(exam, detail) {
  const W = 760;
  const rows = statRows(exam, detail);
  const nameLines = wrap(exam.name, 24).slice(0, 4);
  const headerH = 120;
  const nameY = headerH + 70;
  const nameGap = 44;
  const chipsY = nameY + nameLines.length * nameGap + 10;
  const dividerY = chipsY + 50;
  const rowStart = dividerY + 56;
  const rowGap = 78;
  const footerH = 64;
  const H = rowStart + rows.length * rowGap + footerH + 30;

  const rowSvg = rows
    .map(([label, value], i) => {
      const y = rowStart + i * rowGap;
      const valLines = wrap(value, 30).slice(0, 2);
      const valText = valLines
        .map(
          (v, j) =>
            `<text x="44" y="${y + 30 + j * 26}" font-family="Georgia, 'Times New Roman', serif" font-size="25" font-weight="700" fill="#111e1f">${esc(
              v
            )}</text>`
        )
        .join('');
      return `<text x="44" y="${y}" font-family="'Courier New', monospace" font-size="13" letter-spacing="1.5" fill="#1d4ed8">${esc(
        label.toUpperCase()
      )}</text>${valText}<line x1="44" y1="${y + 30 + valLines.length * 26 + 8}" x2="${
        W - 44
      }" y2="${y + 30 + valLines.length * 26 + 8}" stroke="#e3e4df" stroke-width="1"/>`;
    })
    .join('');

  const nameText = nameLines
    .map(
      (l, i) =>
        `<text x="44" y="${nameY + i * nameGap}" font-family="Georgia, 'Times New Roman', serif" font-size="36" font-weight="700" fill="#111e1f">${esc(
          l
        )}</text>`
    )
    .join('');

  const chips = [
    `<rect x="44" y="${chipsY}" width="${esc((exam.type.length + 2) * 9)}" height="30" rx="15" fill="#eaf0fb"/>`,
    `<text x="44" y="${chipsY + 20}" font-family="'Courier New', monospace" font-size="13" fill="#1d4ed8">${esc(
      exam.type
    )}</text>`,
  ].join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(
    exam.name
  )} — quick facts">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect width="${W}" height="${headerH}" fill="#1d4ed8"/>
  <text x="44" y="58" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#ffffff">TestPrepPilot</text>
  <text x="46" y="88" font-family="'Courier New', monospace" font-size="13" letter-spacing="2" fill="#bcd0f7">EXAM SNAPSHOT</text>
  ${nameText}
  ${chips}
  <line x1="44" y1="${dividerY}" x2="${W - 44}" y2="${dividerY}" stroke="#111e1f" stroke-width="2"/>
  ${rowSvg}
  <rect x="0" y="${H - footerH}" width="${W}" height="${footerH}" fill="#f0eee5"/>
  <text x="44" y="${H - 24}" font-family="'Courier New', monospace" font-size="12" fill="#6b7280">Verified against primary sources · testpreppilot.com</text>
</svg>`;
}

let count = 0;
for (const exam of allExams) {
  const detail = getExamDetail(exam.slug) || {};
  const svg = buildSvg(exam, detail);
  const dir = join(OUT_ROOT, exam.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'infographic.svg'), svg, 'utf8');
  count++;
}
console.log(`Generated ${count} exam infographics into public/exams/<slug>/infographic.svg`);
