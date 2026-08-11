import fs from 'fs';
import path from 'path';

const DIST = 'dist';
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(DIST);

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

const urlOf = (f) =>
  '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');

const typeOf = (u) => {
  if (u === '' || u === '/') return 'home';
  if (u.startsWith('/exams/')) return 'exam';
  if (u === '/exams') return 'exams-hub';
  if (u.startsWith('/categories/')) return 'category';
  if (u.startsWith('/paths/')) return 'path';
  const seg = u.split('/').filter(Boolean);
  if (seg.length === 2) return 'state-cred';
  if (seg.length === 1) return 'state-or-static';
  return 'other';
};

const rows = [];
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const d = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!t) continue;
  const title = decode(t[1].trim());
  const desc = d ? decode(d[1].trim()) : '';
  rows.push({ url: urlOf(f), type: typeOf(urlOf(f)), title, tl: title.length, desc, dl: desc.length });
}

const over = rows.filter((r) => r.tl > 60).sort((a, b) => b.tl - a.tl);
const under = rows.filter((r) => r.tl < 30);
console.log(`总页数 ${rows.length}`);
console.log(`title > 60 : ${over.length}  (${((over.length / rows.length) * 100).toFixed(1)}%)`);
console.log(`title < 30 : ${under.length}`);
console.log(`title 长度: min=${Math.min(...rows.map(r=>r.tl))} 中位=${rows.map(r=>r.tl).sort((a,b)=>a-b)[Math.floor(rows.length/2)]} max=${Math.max(...rows.map(r=>r.tl))}`);

const byType = {};
for (const r of over) byType[r.type] = (byType[r.type] || 0) + 1;
console.log('超长按类型:', JSON.stringify(byType));
console.log('\n-- 最长 15 --');
for (const r of over.slice(0, 15)) console.log(`  ${r.tl}  ${r.title}`);

// description
const dOver = rows.filter((r) => r.dl > 160);
const dUnder = rows.filter((r) => r.dl > 0 && r.dl < 70);
const dNone = rows.filter((r) => r.dl === 0);
console.log(`\ndescription >160: ${dOver.length}   <70: ${dUnder.length}   缺失: ${dNone.length}`);
console.log(`description 长度: 中位=${rows.map(r=>r.dl).sort((a,b)=>a-b)[Math.floor(rows.length/2)]} max=${Math.max(...rows.map(r=>r.dl))}`);

// duplicate titles / descriptions
const tMap = {}, dMap = {};
for (const r of rows) {
  (tMap[r.title] ||= []).push(r.url);
  if (r.desc) (dMap[r.desc] ||= []).push(r.url);
}
const dupT = Object.entries(tMap).filter(([, v]) => v.length > 1);
const dupD = Object.entries(dMap).filter(([, v]) => v.length > 1);
console.log(`\n重复 title 组: ${dupT.length}  涉及页面 ${dupT.reduce((s, [, v]) => s + v.length, 0)}`);
for (const [k, v] of dupT.slice(0, 5)) console.log(`   ×${v.length} "${k}"  e.g. ${v.slice(0, 3).join(', ')}`);
console.log(`重复 description 组: ${dupD.length}  涉及页面 ${dupD.reduce((s, [, v]) => s + v.length, 0)}`);
for (const [k, v] of dupD.slice(0, 5)) console.log(`   ×${v.length} "${k.slice(0, 80)}..."  e.g. ${v.slice(0, 3).join(', ')}`);
