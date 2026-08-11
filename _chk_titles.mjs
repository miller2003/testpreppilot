import fs from 'fs';
const D = JSON.parse(fs.readFileSync('_seo_graph_data.json', 'utf8'));
const { urls, meta } = D;

const long = urls.map(u => [u, meta[u].title, meta[u].titleLen])
  .filter(([, , l]) => l > 60)
  .sort((a, b) => b[2] - a[2]);

console.log(`title > 60 字符: ${long.length} / ${urls.length}`);
console.log('\n最长 15 条:');
for (const [u, t, l] of long.slice(0, 15)) console.log(`  ${String(l).padStart(3)}  ${t}`);

// 后缀分析
const suffix = {};
for (const [, t] of long) {
  const m = /(—|-|\|)\s*([^—|-]{3,40})$/.exec(t);
  if (m) suffix[m[2].trim()] = (suffix[m[2].trim()] || 0) + 1;
}
console.log('\n超长 title 的尾部模式 Top8:');
for (const [s, n] of Object.entries(suffix).sort((a, b) => b[1] - a[1]).slice(0, 8)) {
  console.log(`  ×${String(n).padStart(3)}  "...${s}"`);
}

// 按页面类型
function cls(u) {
  if (u === '/') return 'home';
  if (u.startsWith('/exams/')) return 'exam';
  if (u.startsWith('/categories/')) return 'category';
  if (u.startsWith('/paths/')) return 'path';
  const seg = u.slice(1).split('/');
  if (seg.length === 2) return 'state-cred';
  if (seg.length === 1) return 'state-or-static';
  return 'other';
}
const byType = {};
for (const [u, , l] of long) { const t = cls(u); byType[t] = (byType[t] || 0) + 1; }
console.log('\n超长 title 按类型:', JSON.stringify(byType));

// 带 "— TestPrepPilot" 后缀的数量
const brandSuffix = urls.filter(u => / — TestPrepPilot$/.test(meta[u].title));
console.log(`\n带 " — TestPrepPilot" 后缀: ${brandSuffix.length} 页 (占用 17 字符)`);
const wouldFix = brandSuffix.filter(u => meta[u].titleLen > 60 && meta[u].titleLen - 17 <= 60);
console.log(`  其中去掉后缀即可 <=60 的: ${wouldFix.length} 页`);
