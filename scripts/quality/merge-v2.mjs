// Merge research/v2/_frag/<key>*.mjs fragment files into research/v2/<key>.mjs
// and register the template in research/v2/index.mjs (alphabetical).
//
// Usage: node scripts/quality/merge-v2.mjs <template-key>
//
// Fragment contract: each _frag file default-exports { key, states: { CODE: {...} } }.
// State sets across fragments of one key must be disjoint. Fragments are never
// imported by the site; only the merged file is.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const key = process.argv[2];
// optional third arg: comma list of states where OEWS publishes no estimate (wages may be omitted)
const noWage = new Set((process.argv[3] || '').split(',').map(s => s.trim().toUpperCase()).filter(Boolean));
if (!key) { console.error('usage: merge-v2.mjs <template-key> [no-wage-states]'); process.exit(1); }

const fragDir = path.join(root, 'src/data/examCatalog/research/v2/_frag');
const outFile = path.join(root, 'src/data/examCatalog/research/v2', `${key}.mjs`);
const indexFile = path.join(root, 'src/data/examCatalog/research/v2/index.mjs');

const fragFiles = fs.readdirSync(fragDir).filter(f => f.startsWith(`${key}-`) && f.endsWith('.mjs'));
if (!fragFiles.length) { console.error(`no fragments for ${key} in ${fragDir}`); process.exit(1); }

const BANNED = /\bverify\b|\bTBD\b|\u2248|check with the state/i;
const URL_KEYS = new Set(['url', 'sourceUrl', 'portalUrl', 'vendorUrl', 'agencyUrl', 'sourceNote']);

function walkStrings(v, pathStr, out) {
  if (typeof v === 'string') { out.push([pathStr, v]); return; }
  if (Array.isArray(v)) { v.forEach((x, i) => walkStrings(x, `${pathStr}[${i}]`, out)); return; }
  if (v && typeof v === 'object') { for (const [k, x] of Object.entries(v)) walkStrings(x, pathStr ? `${pathStr}.${k}` : k, out); }
}

const states = {};
const issues = [];
let stateCount = 0;

for (const f of fragFiles) {
  const mod = await import(pathToFileURL(path.join(fragDir, f)).href);
  const frag = mod.default;
  if (!frag || frag.key !== key) { issues.push(`${f}: key mismatch (${frag && frag.key})`); continue; }
  for (const [code, inc] of Object.entries(frag.states || {})) {
    const C = String(code).toUpperCase();
    if (states[C]) { issues.push(`${f}: duplicate state ${C} (also in another fragment)`); continue; }
    // quality gate
    const strs = [];
    walkStrings(inc, C, strs);
    for (const [p, s] of strs) {
      const isUrl = /\.(url|sourceUrl|portalUrl|vendorUrl|agencyUrl)$/.test(p) || /sources\[\d+\]\.url$/.test(p);
      if (!isUrl && BANNED.test(s)) issues.push(`${C} (${p}): draft language -> ${JSON.stringify(s.slice(0, 90))}`);
    }
    const faqs = inc.stateFaqs || [];
    if (faqs.length < 4) issues.push(`${C}: stateFaqs ${faqs.length} < 4`);
    const srcs = inc.sources || [];
    if (srcs.length < 3) issues.push(`${C}: sources ${srcs.length} < 3`);
    if (!inc.wages && !noWage.has(C)) issues.push(`${C}: no wages block`);
    if (!inc.recentChanges || !inc.recentChanges.length) issues.push(`${C}: no recentChanges`);
    states[C] = inc;
    stateCount++;
  }
}

// cross-check against v1 dossier
const { dossiers } = await import(pathToFileURL(path.join(root, 'src/data/examCatalog/research/index.mjs')).href).catch(() => ({ dossiers: null }));
if (dossiers) {
  const d = dossiers.find(x => x.key === key);
  if (!d) issues.push('template key not found in v1 dossiers');
  else {
    const v1 = new Set(Object.keys(d.states || {}));
    for (const C of Object.keys(states)) {
      if (!v1.has(C)) issues.push(`${C}: not in v1 dossier states map (must not resurrect dropped jurisdictions)`);
    }
    for (const C of Object.keys(d.states || {})) {
      if (d.states[C].offered === false && states[C]) issues.push(`${C}: v1 says offered=false but v2 provides data`);
    }
  }
}

if (issues.length) {
  console.log(`MERGE ${key}: ${stateCount} states, ${issues.length} issue(s):`);
  for (const i of issues) console.log('  ! ' + i);
  if (issues.some(i => /: stateFaqs|: sources|: no wages|: no recentChanges|draft language|duplicate state|not in v1|offered=false/.test(i))) {
    console.log('ABORT: quality gate failed. Nothing written.');
    process.exit(2);
  }
}

const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const header = `// v2 per-state research increment — ${key}
// Merged from ${fragFiles.length} research fragment(s) on ${new Date().toISOString().slice(0, 10)}
// by the state-pages flagship program (see reports/STATE-PAGES-FLAGSHIP-PLAN-2026-10-20.md).
// Wages: BLS OEWS May 2025 state tables via O*NET OnLine localwages pages.
// Field contract: src/data/examCatalog/RESEARCH_SCHEMA.md ("v2 per-state research increment").

export default {
  key: '${key}',
  compiledOn: '${new Date().toISOString().slice(0, 10)}',
  states: ${JSON.stringify(states, null, 2)}
};
`;

fs.writeFileSync(outFile, header);
console.log(`wrote ${outFile} (${stateCount} states, ${Math.round(header.length / 1024)} KB)`);

// register in index.mjs if absent
let idx = fs.readFileSync(indexFile, 'utf8');
if (!idx.includes(`'${key}'`)) {
  const importLine = `import ${camel} from './${key}.mjs';\n`;
  const arrEntry = camel;
  // insert import after the last existing import line
  const lines = idx.split('\n');
  let lastImport = 0;
  lines.forEach((l, i) => { if (/^import /.test(l)) lastImport = i; });
  lines.splice(lastImport + 1, 0, importLine.trimEnd());
  idx = lines.join('\n');
  // rebuild v2Files array alphabetically
  idx = idx.replace(/export const v2Files = \[([^\]]*)\];/, (_, list) => {
    const names = list.split(',').map(s => s.trim()).filter(Boolean);
    names.push(arrEntry);
    names.sort();
    return `export const v2Files = [${names.join(', ')}];`;
  });
  fs.writeFileSync(indexFile, idx);
  console.log(`registered ${camel} in v2/index.mjs`);
} else {
  console.log('already registered in v2/index.mjs');
}

// final smoke check
const { v2Stats } = await import(pathToFileURL(indexFile).href).then(m => import(pathToFileURL(path.join(root, 'src/data/examCatalog/research/index.mjs')).href));
console.log('v2Stats:', JSON.stringify(v2Stats));
console.log(`MERGE ${key}: OK (${stateCount} states)`);
