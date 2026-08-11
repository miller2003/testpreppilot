import fs from 'fs';
import path from 'path';

const DIST = 'dist';
const read = (u) => {
  const p1 = path.join(DIST, u, 'index.html');
  const p2 = path.join(DIST, u + '.html');
  const f = fs.existsSync(p1) ? p1 : p2;
  if (!fs.existsSync(f)) return null;
  return fs.readFileSync(f, 'utf8');
};

// strip nav/footer/head, keep main content text
const mainText = (html) => {
  let h = html;
  h = h.replace(/<head[\s\S]*?<\/head>/gi, '');
  h = h.replace(/<script[\s\S]*?<\/script>/gi, '');
  h = h.replace(/<style[\s\S]*?<\/style>/gi, '');
  h = h.replace(/<header[\s\S]*?<\/header>/gi, '');
  h = h.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  h = h.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  return h.replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
};

const shingles = (t, k = 6) => {
  const w = t.split(' ').filter(Boolean);
  const s = new Set();
  for (let i = 0; i + k <= w.length; i++) s.add(w.slice(i, i + k).join(' '));
  return s;
};

const jac = (a, b) => {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};

const pairs = [
  ['/paths/texas-real-estate-license', '/texas/texas-real-estate-license'],
  ['/paths/california-real-estate-license', '/california/california-real-estate-license'],
  ['/paths/florida-real-estate-license', '/florida/florida-real-estate-license'],
  ['/disclosure', '/affiliate-disclosure'],
  ['/paths/osha-10-construction', '/paths/osha-30-construction'],
  ['/paths/cpa-exam', '/paths/enrolled-agent'],
];

console.log('页面对相似度（正文，去掉 nav/footer/head）\n');
for (const [a, b] of pairs) {
  const ha = read(a), hb = read(b);
  if (!ha || !hb) { console.log(`  ?? 缺页: ${a} / ${b}`); continue; }
  const ta = mainText(ha), tb = mainText(hb);
  const sa = shingles(ta), sb = shingles(tb);
  const j = jac(sa, sb);
  const flag = j >= 0.7 ? '🔴 门口页红线' : j >= 0.5 ? '🟠 高' : j >= 0.3 ? '🟡 中' : '🟢 低';
  console.log(`  ${flag}  J=${j.toFixed(3)}  words ${ta.split(' ').length} vs ${tb.split(' ').length}`);
  console.log(`        ${a}`);
  console.log(`        ${b}\n`);
}

// canonical check
console.log('\ncanonical 检查:');
for (const u of ['/paths/texas-real-estate-license', '/texas/texas-real-estate-license', '/disclosure', '/affiliate-disclosure']) {
  const h = read(u);
  const c = h && h.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  console.log(`  ${u.padEnd(45)} -> ${c ? c[1] : '(无)'}`);
}
