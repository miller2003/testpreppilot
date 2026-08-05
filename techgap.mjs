import { readFileSync } from 'fs';
const missing = JSON.parse(readFileSync('./missing_national.json','utf8'));
const tech = missing.list.filter(m=>m.category==='technology');
const done = new Set();
const txt = readFileSync('./src/data/examCatalog/national-research/_kb_tech.mjs','utf8');
const re=/slug["']?\s*:\s*["']([^"']+)["']/g; let m; while((m=re.exec(txt))) done.add(m[1]);
const still = tech.filter(t=>!done.has(t.slug));
console.log('tech total:', tech.length, '| done:', tech.length-still.length, '| still:', still.length);
