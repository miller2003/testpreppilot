// Groups failing released national slugs into writer work packages.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const { allExamsFull } = await import(pathToFileURL(path.join(ROOT, 'src/data/examCatalog/index.mjs')).href);
const gate = JSON.parse(fs.readFileSync(path.join(ROOT, 'reports/quality/national-gate.json'), 'utf8'));
const failing = new Set(gate.results.filter((r) => r.failures.length).map((r) => r.slug));
const exams = allExamsFull.filter((e) => e.scope === 'national' && failing.has(e.slug));

const MAX = 7;
const byBody = new Map();
for (const e of exams) (byBody.get(e.body) || byBody.set(e.body, []).get(e.body)).push(e);

const packages = [];
const small = []; // bodies with few slugs, clustered by category
for (const [body, list] of [...byBody].sort((a, b) => b[1].length - a[1].length)) {
  list.sort((a, b) => a.slug.localeCompare(b.slug));
  if (list.length > MAX) {
    const n = Math.ceil(list.length / MAX);
    const size = Math.ceil(list.length / n);
    for (let i = 0; i < n; i += 1) packages.push({ bodies: [body], exams: list.slice(i * size, (i + 1) * size), ownsPrograms: i === 0 ? [body] : [] });
  } else if (list.length >= 5) {
    packages.push({ bodies: [body], exams: list, ownsPrograms: [body] });
  } else {
    small.push({ body, list, cat: list[0].category });
  }
}
// cluster small bodies by category
small.sort((a, b) => a.cat.localeCompare(b.cat) || a.body.localeCompare(b.body));
let cur = null;
for (const s of small) {
  if (!cur || cur.exams.length + s.list.length > MAX + 1) {
    cur = { bodies: [], exams: [], ownsPrograms: [] };
    packages.push(cur);
  }
  cur.bodies.push(s.body); cur.exams.push(...s.list); cur.ownsPrograms.push(s.body);
}
fs.mkdirSync(path.join(ROOT, 'reports/quality/packages'), { recursive: true });
packages.forEach((p, i) => {
  const id = `pkg${String(i + 1).padStart(2, '0')}`;
  const out = {
    id,
    bodies: p.bodies,
    ownsPrograms: p.ownsPrograms,
    slugs: p.exams.map((e) => e.slug),
    exams: p.exams.map((e) => ({ slug: e.slug, name: e.name, category: e.category, body: e.body }))
  };
  fs.writeFileSync(path.join(ROOT, 'reports/quality/packages', `${id}.json`), JSON.stringify(out, null, 2));
  console.log(id, p.exams.length, p.bodies.join(' | ').slice(0, 110));
});
console.log('packages', packages.length, 'slugs', exams.length);
