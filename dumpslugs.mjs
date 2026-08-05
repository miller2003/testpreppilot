import { readFileSync, writeFileSync } from 'fs';
const missing = JSON.parse(readFileSync('./missing_national.json','utf8'));
const cats = {};
for (const m of missing.list) (cats[m.category] ||= []).push(m.slug);
for (const [c, slugs] of Object.entries(cats)) {
  writeFileSync(`slugs_${c}.txt`, slugs.join('\n') + '\n');
}
console.log('wrote', Object.keys(cats).length, 'slug files');
