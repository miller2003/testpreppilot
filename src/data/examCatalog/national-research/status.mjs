/**
 * status.mjs — which chunks are done, which are still owed.
 *
 *   node status.mjs            # summary + next 12 pending chunk ids
 *   node status.mjs --pending  # bare list of every pending chunk id (for scripting)
 *   node status.mjs --next 8   # next N pending chunk ids, one per line
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CHUNK_IN = path.join(HERE, '_input', 'chunks');
const CHUNK_OUT = path.join(HERE, '_chunks');

const manifest = JSON.parse(fs.readFileSync(path.join(CHUNK_IN, 'manifest.json'), 'utf8'));

/* slugs already present anywhere in the merged data */
const have = new Set();
for (let n = 1; n <= 42; n += 1) {
  const f = path.join(HERE, `batch${String(n).padStart(2, '0')}.mjs`);
  if (!fs.existsSync(f)) continue;
  try {
    const mod = await import(`${pathToFileURL(f).href}?t=${Date.now()}`);
    for (const e of mod.exams || []) if (e?.slug) have.add(e.slug);
  } catch { /* ignore unparseable */ }
}

const rows = [];
for (const c of manifest.chunks) {
  const inFile = path.join(CHUNK_IN, `${c.chunkId}.json`);
  const slugs = JSON.parse(fs.readFileSync(inFile, 'utf8')).exams.map((e) => e.slug);
  const done = slugs.filter((s) => have.has(s)).length;
  const outExists = fs.existsSync(path.join(CHUNK_OUT, `${c.chunkId}.mjs`));
  rows.push({ id: c.chunkId, total: slugs.length, done, outExists, groups: c.groups });
}

const pending = rows.filter((r) => r.done < r.total);
const complete = rows.length - pending.length;
const totalExams = rows.reduce((a, r) => a + r.total, 0);
const doneExams = rows.reduce((a, r) => a + r.done, 0);

if (process.argv.includes('--pending')) {
  for (const r of pending) console.log(r.id);
} else if (process.argv.includes('--next')) {
  const n = Number(process.argv[process.argv.indexOf('--next') + 1]) || 8;
  for (const r of pending.slice(0, n)) console.log(r.id);
} else {
  const pct = ((doneExams / totalExams) * 100).toFixed(1);
  const bar = '█'.repeat(Math.round(doneExams / totalExams * 40)).padEnd(40, '·');
  console.log(`\nNATIONAL RESEARCH PROGRESS\n${bar}  ${pct}%`);
  console.log(`exams   ${doneExams} / ${totalExams}`);
  console.log(`chunks  ${complete} complete, ${pending.length} pending\n`);
  console.log('partially-done chunks (worth finishing first):');
  const partial = pending.filter((r) => r.done > 0);
  if (!partial.length) console.log('  (none)');
  for (const r of partial) console.log(`  ${r.id}  ${r.done}/${r.total}  ${r.groups.slice(0, 2).join(', ')}`);
  console.log('\nnext pending chunks:');
  for (const r of pending.slice(0, 12)) console.log(`  ${r.id}  ${r.total} exams  ${r.groups.slice(0, 2).join(', ')}`);
}
