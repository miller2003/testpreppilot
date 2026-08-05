// genTodos.mjs — from plan.json, write one _todo/bNN.txt per batch with the
// remaining slugs the research subagent must cover.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const plan = JSON.parse(fs.readFileSync(path.join(HERE, 'plan.json'), 'utf8'));
const TODO = path.join(HERE, '_todo');
fs.mkdirSync(TODO, { recursive: true });

let n = 0;
for (const b of plan) {
  const f = path.join(TODO, `b${b.batch}.txt`);
  fs.writeFileSync(f, b.remaining.join('\n') + '\n', 'utf8');
  n += 1;
}
console.log(`wrote ${n} todo files to _todo/ (batches: ${plan.map((b) => b.batch).join(',')})`);
