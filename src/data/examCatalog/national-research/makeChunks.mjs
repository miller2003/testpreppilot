/**
 * makeChunks.mjs — split the 42 research batches into small, subagent-sized chunks.
 *
 * Why: a subagent asked to write 100 exam records in one streamed file reliably
 * truncates around record 50-60. Chunks of ~30 finish cleanly, are independently
 * resumable after a rate-limit, and never collide because each writes its own file.
 *
 * Exams are grouped by certifying body so a chunk owns a coherent set of program
 * dossiers (the biggest reuse win in the schema).
 *
 *   node makeChunks.mjs           # write _input/chunks/*.json + manifest
 *   node makeChunks.mjs --dry     # report only
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const INPUT = path.join(HERE, '_input');
const OUT = path.join(INPUT, 'chunks');
const TARGET = 30; // exams per chunk
const HARD_MAX = 38; // never exceed

const dry = process.argv.includes('--dry');

const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

/** Pack bodies (kept intact where possible) into chunks of ~TARGET exams. */
function packChunks(exams) {
  const byBody = new Map();
  for (const e of exams) {
    const k = e.body || '~unknown';
    if (!byBody.has(k)) byBody.set(k, []);
    byBody.get(k).push(e);
  }
  // Largest bodies first so big ones get their own chunks and small ones fill gaps.
  const groups = [...byBody.entries()].sort((a, b) => b[1].length - a[1].length);

  const chunks = [];
  const small = [];

  for (const [body, list] of groups) {
    if (list.length >= TARGET) {
      // Split this body across as many chunks as needed.
      const parts = Math.ceil(list.length / HARD_MAX);
      const per = Math.ceil(list.length / parts);
      for (let i = 0; i < list.length; i += per) chunks.push(list.slice(i, i + per));
    } else {
      small.push([body, list]);
    }
  }

  // First-fit-decreasing the leftovers.
  small.sort((a, b) => b[1].length - a[1].length);
  const bins = [];
  for (const [, list] of small) {
    let bin = bins.find((b) => b.length + list.length <= HARD_MAX);
    if (!bin) {
      bin = [];
      bins.push(bin);
    }
    bin.push(...list);
  }
  return [...chunks, ...bins];
}

const manifest = [];
let totalExams = 0;

if (!dry) {
  fs.mkdirSync(OUT, { recursive: true });
  for (const f of fs.readdirSync(OUT)) if (f.endsWith('.json')) fs.unlinkSync(path.join(OUT, f));
}

for (let n = 1; n <= 42; n += 1) {
  const id = String(n).padStart(2, '0');
  const file = path.join(INPUT, `batch${id}.json`);
  if (!fs.existsSync(file)) continue;
  const data = readJson(file);
  const exams = data.exams || [];
  totalExams += exams.length;

  const chunks = packChunks(exams);
  chunks.forEach((list, i) => {
    const part = String(i + 1).padStart(2, '0');
    const chunkId = `b${id}-p${part}`;
    const bodies = [...new Set(list.map((e) => e.body).filter(Boolean))];
    const payload = {
      chunkId,
      batch: n,
      part: i + 1,
      categories: [...new Set(list.map((e) => e.category).filter(Boolean))],
      groups: [...new Set(list.map((e) => e.group).filter(Boolean))],
      bodies,
      examCount: list.length,
      exams: list,
    };
    manifest.push({ chunkId, batch: n, examCount: list.length, bodies: bodies.length, groups: payload.groups });
    if (!dry) fs.writeFileSync(path.join(OUT, `${chunkId}.json`), JSON.stringify(payload, null, 1), 'utf8');
  });
}

if (!dry) {
  fs.writeFileSync(
    path.join(OUT, 'manifest.json'),
    JSON.stringify({ target: TARGET, hardMax: HARD_MAX, chunkCount: manifest.length, totalExams, chunks: manifest }, null, 1),
    'utf8',
  );
}

const sizes = manifest.map((m) => m.examCount);
console.log(`chunks: ${manifest.length}   exams: ${totalExams}`);
console.log(`size  min ${Math.min(...sizes)}  max ${Math.max(...sizes)}  avg ${(totalExams / manifest.length).toFixed(1)}`);
if (dry) console.log('(dry run — nothing written)');
else console.log(`written → ${path.relative(process.cwd(), OUT)}`);
