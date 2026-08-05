// plan.mjs — compute per-batch remaining slugs (what subagents still must write)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const load = (p) => import(pathToFileURL(p).href);
const INPUT = path.join(HERE, '_input');
const CHUNKS = path.join(HERE, '_chunks');

// expected slugs per batch
const expected = {};
for (const f of fs.readdirSync(INPUT)) {
  const m = f.match(/^batch(\d+)\.json$/);
  if (!m) continue;
  const n = m[1];
  const raw = JSON.parse(fs.readFileSync(path.join(INPUT, f), 'utf8'));
  const arr = Array.isArray(raw) ? raw : (raw.exams || raw.items || []);
  expected[n] = new Map(arr.map((e) => [e.slug, e]));
}

// actual slugs per batch from chunk files + existing batchNN.mjs
const actual = {};
const addActual = (n, slugs) => {
  actual[n] = actual[n] || new Set();
  slugs.forEach((s) => actual[n].add(s));
};
for (const f of fs.readdirSync(CHUNKS).filter((x) => x.endsWith('.mjs'))) {
  const bn = f.match(/^b(\d+)/)?.[1];
  if (!bn) continue;
  try {
    const mod = await load(path.join(CHUNKS, f));
    const ex = mod.default?.exams || mod.exams || [];
    addActual(bn, ex.map((e) => e.slug));
  } catch (e) {
    console.log('CHUNK PARSE FAIL', f, e.message.split('\n')[0]);
  }
}
for (let n = 1; n <= 42; n += 1) {
  const f = path.join(HERE, `batch${String(n).padStart(2, '0')}.mjs`);
  if (!fs.existsSync(f)) continue;
  try {
    const mod = await load(f);
    const ex = mod.default?.exams || mod.exams || [];
    addActual(String(n), ex.map((e) => e.slug));
  } catch (e) {
    console.log('BATCH PARSE FAIL', f, e.message.split('\n')[0]);
  }
}

// build plan
const plan = [];
let totalExp = 0, totalDone = 0;
for (const n of Object.keys(expected).sort((a, b) => a - b)) {
  const exp = expected[n];
  const act = actual[n] || new Set();
  const done = [...exp.keys()].filter((s) => act.has(s)).length;
  totalExp += exp.size;
  totalDone += done;
  const remaining = [...exp.keys()].filter((s) => !act.has(s));
  if (remaining.length) {
    plan.push({ batch: n, done, total: exp.size, remaining });
  }
}

console.log(`EXPECTED ${totalExp} | DONE ${totalDone} | REMAINING ${totalExp - totalDone}`);
console.log(`BATCHES WITH WORK: ${plan.length}\n`);
for (const p of plan) {
  console.log(`BATCH ${p.batch}: ${p.done}/${p.total} done, ${p.remaining.length} remaining`);
  console.log(`  ${p.remaining.join(' ')}`);
}
// machine-readable
fs.writeFileSync(path.join(HERE, 'plan.json'), JSON.stringify(plan, null, 1));
console.log(`\nwrote plan.json (${plan.length} batches)`);
