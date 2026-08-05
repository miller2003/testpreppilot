import { readFileSync } from 'fs';
const missing = JSON.parse(readFileSync('./missing_national.json','utf8'));
const byCat = {};
for (const m of missing.list) { byCat[m.category] = (byCat[m.category]||0)+1; }
const entries = Object.entries(byCat).sort((a,b)=>b[1]-a[1]);
console.log('TOTAL GAP:', missing.list.length);
for (const [c,n] of entries) console.log(String(n).padStart(5), c);
