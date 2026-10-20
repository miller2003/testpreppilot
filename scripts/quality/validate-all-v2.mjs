// One-off full validation over every research/v2/<key>.mjs (registered or not).
// Checks: key match, state coverage vs v1 dossier, banned draft language in
// reader-facing strings, per-state required fields, source hygiene.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const v2Dir = path.join(root, 'src/data/examCatalog/research/v2');
const files = fs.readdirSync(v2Dir).filter(f => f.endsWith('.mjs') && f !== 'index.mjs');

const BANNED = /\bverify\b|\bTBD\b|\u2248|check with the state/i;
const URL_KEYS = /(\.url|sourceUrl|portalUrl|vendorUrl|agencyUrl)$/;

function walkStrings(v, pathStr, out) {
  if (typeof v === 'string') { out.push([pathStr, v]); return; }
  if (Array.isArray(v)) { v.forEach((x, i) => walkStrings(x, `${pathStr}[${i}]`, out)); return; }
  if (v && typeof v === 'object') { for (const [k, x] of Object.entries(v)) walkStrings(x, pathStr ? `${pathStr}.${k}` : k, out); }
}

const { dossiers } = await import(pathToFileURL(path.join(root, 'src/data/examCatalog/research/index.mjs')).href);
const v1ByKey = Object.fromEntries(dossiers.map(d => [d.key, d]));
const registered = fs.readFileSync(path.join(v2Dir, 'index.mjs'), 'utf8');

let totalStates = 0;
const problems = [];
const summary = [];

for (const f of files) {
  const key = f.replace(/\.mjs$/, '');
  const mod = await import(pathToFileURL(path.join(v2Dir, f)).href);
  const data = mod.default;
  const isReg = registered.includes(`'${key}'`) || registered.includes(`./${key}.mjs`);
  const row = { key, registered: isReg, states: 0, noWages: [], noExam: [], thinSources: [] };

  if (!data || data.key !== key) { problems.push(`${key}: bad/missing export or key mismatch`); summary.push(row); continue; }
  if (!v1ByKey[key]) { problems.push(`${key}: no v1 dossier for this key`); summary.push(row); continue; }

  const v1States = v1ByKey[key].states || {};
  for (const [code, inc] of Object.entries(data.states || {})) {
    row.states++;
    totalStates++;
    const C = code;
    if (!v1States[C]) problems.push(`${key}/${C}: state not in v1 dossier`);
    else if (v1States[C].offered === false) problems.push(`${key}/${C}: v1 says offered=false`);
    if (!(inc.stateFaqs || []).length || inc.stateFaqs.length < 4) problems.push(`${key}/${C}: stateFaqs ${(inc.stateFaqs || []).length} < 4`);
    if ((inc.sources || []).length < 3) problems.push(`${key}/${C}: sources ${(inc.sources || []).length} < 3`);
    for (const s of inc.sources || []) {
      if (!s.url || !/^https:\/\//.test(s.url)) problems.push(`${key}/${C}: source url not https -> ${s.url}`);
      if (!s.checkedOn) problems.push(`${key}/${C}: source missing checkedOn -> ${s.label}`);
    }
    if (!inc.wages) row.noWages.push(C);
    if (!inc.exam) row.noExam.push(C);
    if ((inc.sources || []).length === 3) row.thinSources.push(C);
    const strs = [];
    walkStrings(inc, C, strs);
    for (const [p, s] of strs) {
      const isUrl = URL_KEYS.test(p) || /sources\[\d+\]\.url$/.test(p);
      if (!isUrl && BANNED.test(s)) problems.push(`${key}/${C}@${p}: draft language -> ${s.slice(0, 70)}`);
    }
  }
  summary.push(row);
}

console.log('=== v2 FILE SUMMARY ===');
for (const s of summary) {
  console.log(`${s.registered ? '[REG ]' : '[UNREG]'}`.padEnd(8), s.key.padEnd(30), `${s.states} states`,
    s.noWages.length ? `| no wages: ${s.noWages.join(',')}` : '', s.noExam.length ? `| no exam obj: ${s.noExam.length}` : '');
}
console.log('total states:', totalStates);
console.log('=== PROBLEMS ===');
if (!problems.length) console.log('NONE');
else for (const p of problems) console.log(' !', p);
console.log(problems.length ? `RESULT: ${problems.length} problem(s)` : 'RESULT: ALL CLEAN');
