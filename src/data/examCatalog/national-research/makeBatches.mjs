// Splits the 3,186 national exams into research batches of ~100, keeping
// category/group clusters intact so each researcher works on one coherent domain.
// Writes one JSON input file per batch into ./_input/.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { nationalExams } from '../index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '_input');
fs.mkdirSync(outDir, { recursive: true });

const TARGET = 100;
const MAX = 128;

// category → group → exams
const cats = new Map();
for (const e of nationalExams) {
  if (!cats.has(e.category)) cats.set(e.category, new Map());
  const g = cats.get(e.category);
  if (!g.has(e.group)) g.set(e.group, []);
  g.get(e.group).push(e);
}

const slim = (e) => ({
  slug: e.slug,
  name: e.name,
  short: e.short,
  category: e.category,
  group: e.group,
  body: e.body,
  bodyUrl: e.bodyUrl,
  type: e.type,
  aka: e.aka || [],
  blurb: e.blurb
});

const batches = [];
let current = null;

const flush = () => {
  if (current && current.exams.length) batches.push(current);
  current = null;
};

for (const [category, groups] of [...cats.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  // sort groups largest-first so big groups get their own batch
  const ordered = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);

  for (const [group, exams] of ordered) {
    const sorted = exams.slice().sort((a, b) => a.name.localeCompare(b.name));

    if (sorted.length > MAX) {
      // group too big — split into even chunks of ~TARGET
      flush();
      const parts = Math.ceil(sorted.length / TARGET);
      const size = Math.ceil(sorted.length / parts);
      for (let i = 0; i < parts; i++) {
        batches.push({
          categories: new Set([category]),
          groups: [`${group} (part ${i + 1}/${parts})`],
          exams: sorted.slice(i * size, (i + 1) * size).map(slim)
        });
      }
      continue;
    }

    if (!current) current = { categories: new Set(), groups: [], exams: [] };
    if (current.exams.length + sorted.length > MAX) {
      flush();
      current = { categories: new Set(), groups: [], exams: [] };
    }
    current.categories.add(category);
    current.groups.push(group);
    current.exams.push(...sorted.map(slim));
    if (current.exams.length >= TARGET) flush();
  }
  flush();
}
flush();

const manifest = [];
batches.forEach((b, i) => {
  const n = String(i + 1).padStart(2, '0');
  const bodies = [...new Set(b.exams.map((e) => e.body).filter(Boolean))];
  const payload = {
    batch: n,
    categories: [...b.categories],
    groups: b.groups,
    examCount: b.exams.length,
    bodyCount: bodies.length,
    bodies,
    exams: b.exams
  };
  fs.writeFileSync(path.join(outDir, `batch${n}.json`), JSON.stringify(payload, null, 2));
  manifest.push({
    batch: n,
    categories: [...b.categories].join(', '),
    groups: b.groups.join(' | '),
    exams: b.exams.length,
    bodies: bodies.length
  });
});

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

const total = batches.reduce((s, b) => s + b.exams.length, 0);
console.log(`batches: ${batches.length}   exams: ${total}`);
console.log('');
for (const m of manifest) {
  console.log(
    `${m.batch}  ${String(m.exams).padStart(4)} exams  ${String(m.bodies).padStart(3)} bodies  ${m.categories.padEnd(26)} ${m.groups.slice(0, 90)}`
  );
}
