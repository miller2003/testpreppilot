// 内链图谱深度分析：PageRank / 点击深度 / 入链出链 / 锚文本
import fs from 'fs';
import path from 'path';

const DIST = path.resolve('dist');

// ---------- 1. 收集所有 HTML 页面 ----------
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === '_astro' || e.name === 'pagefind') continue;
      walk(p, out);
    } else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// 文件路径 -> 规范 URL 路径
function toUrl(file) {
  let rel = path.relative(DIST, file).split(path.sep).join('/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'/index.html'.length);
  else if (rel === 'index.html') rel = '';
  else if (rel.endsWith('.html')) rel = rel.slice(0, -5);
  return '/' + rel;
}

// href -> 规范 URL 路径（与 toUrl 对齐）
function normHref(href, fromUrl) {
  if (!href) return null;
  href = href.trim();
  if (/^(https?:)?\/\//i.test(href)) {
    if (!/testpreppilot\.com/i.test(href)) return null;   // 外链
    href = href.replace(/^https?:\/\/[^/]+/i, '');
  }
  if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return null;
  href = href.split('#')[0].split('?')[0];
  if (!href) return null;
  if (!href.startsWith('/')) {
    const base = fromUrl === '/' ? '/' : fromUrl + '/';
    href = path.posix.normalize(base + href);
  }
  if (href.length > 1 && href.endsWith('/')) href = href.slice(0, -1);
  if (href.endsWith('/index.html')) href = href.slice(0, -'/index.html'.length) || '/';
  else if (href.endsWith('.html')) href = href.slice(0, -5);
  return href || '/';
}

const files = walk(DIST);
const pages = new Map();  // url -> {file, html}
for (const f of files) pages.set(toUrl(f) || '/', f);
// 首页特殊处理
if (pages.has('/')) { /* ok */ }
console.log(`HTML 页面总数: ${pages.size}`);

// ---------- 2. 解析链接 ----------
const outLinks = new Map();   // url -> Set(url)
const inLinks = new Map();    // url -> Set(url)
const anchors = new Map();    // targetUrl -> [anchorText]
const linkContext = new Map();// url -> {nav:n, main:n, footer:n}
const pageMeta = new Map();

const A_RE = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
const HREF_RE = /href\s*=\s*["']([^"']*)["']/i;

for (const [url, file] of pages) {
  const html = fs.readFileSync(file, 'utf8');

  // 剥离 header / footer 判断正文内链
  const headerEnd = html.indexOf('</header>');
  const footerStart = html.lastIndexOf('<footer');
  const bodyStart = headerEnd > -1 ? headerEnd : 0;
  const bodyEnd = footerStart > -1 ? footerStart : html.length;

  const outs = new Set();
  let m;
  A_RE.lastIndex = 0;
  let navCount = 0, mainCount = 0, footCount = 0;
  while ((m = A_RE.exec(html))) {
    const attrs = m[1];
    const hm = HREF_RE.exec(attrs);
    if (!hm) continue;
    const target = normHref(hm[1], url);
    if (!target || target === url) continue;
    if (!pages.has(target)) continue;   // 只算站内已存在页面
    outs.add(target);

    const pos = m.index;
    if (pos < bodyStart) navCount++;
    else if (pos >= bodyEnd) footCount++;
    else mainCount++;

    // 锚文本
    const text = m[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!anchors.has(target)) anchors.set(target, []);
    anchors.get(target).push({ text, from: url, zone: pos < bodyStart ? 'nav' : pos >= bodyEnd ? 'footer' : 'main' });

    if (!inLinks.has(target)) inLinks.set(target, new Set());
    inLinks.get(target).add(url);
  }
  outLinks.set(url, outs);
  linkContext.set(url, { nav: navCount, main: mainCount, footer: footCount });

  // meta
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) || [])[1] || '';
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) || [])[1] || '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(x => x[1].replace(/<[^>]*>/g, '').trim());
  const h2s = [...html.matchAll(/<h2\b[^>]*>/gi)].length;
  const h3s = [...html.matchAll(/<h3\b[^>]*>/gi)].length;
  const imgs = [...html.matchAll(/<img\b([^>]*)>/gi)];
  const imgNoAlt = imgs.filter(x => !/alt\s*=/i.test(x[1])).length;
  const schemas = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
    .map(x => { try { return JSON.parse(x[1]); } catch { return null; } }).filter(Boolean);
  const schemaTypes = schemas.flatMap(s => Array.isArray(s) ? s.map(y => y['@type']) : [s['@type']]).filter(Boolean);
  // 正文词数
  const bodyText = html.slice(bodyStart, bodyEnd)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ');
  const words = bodyText.split(/\s+/).filter(w => /[a-z]/i.test(w)).length;

  pageMeta.set(url, {
    title: title.trim(), titleLen: title.trim().length,
    desc: desc.trim(), descLen: desc.trim().length,
    canonical, h1Count: h1s.length, h1: h1s[0] || '', h2s, h3s,
    imgTotal: imgs.length, imgNoAlt, schemaTypes, words,
    bytes: Buffer.byteLength(html),
  });
}

// ---------- 3. 点击深度 BFS ----------
const depth = new Map([['/', 0]]);
let frontier = ['/'];
while (frontier.length) {
  const next = [];
  for (const u of frontier) {
    for (const v of (outLinks.get(u) || [])) {
      if (!depth.has(v)) { depth.set(v, depth.get(u) + 1); next.push(v); }
    }
  }
  frontier = next;
}

// ---------- 4. PageRank ----------
const urls = [...pages.keys()];
const N = urls.length;
const idx = new Map(urls.map((u, i) => [u, i]));
let pr = new Array(N).fill(1 / N);
const d = 0.85;
const outCount = urls.map(u => (outLinks.get(u) || new Set()).size);
const inList = urls.map(u => [...(inLinks.get(u) || new Set())].map(x => idx.get(x)));
for (let iter = 0; iter < 60; iter++) {
  const next = new Array(N).fill(0);
  let dangling = 0;
  for (let i = 0; i < N; i++) if (outCount[i] === 0) dangling += pr[i];
  for (let i = 0; i < N; i++) {
    let s = 0;
    for (const j of inList[i]) s += pr[j] / outCount[j];
    next[i] = (1 - d) / N + d * (s + dangling / N);
  }
  pr = next;
}
const prMap = new Map(urls.map((u, i) => [u, pr[i]]));

// ---------- 5. 分类 ----------
function classify(u) {
  if (u === '/') return 'home';
  if (u.startsWith('/exams/')) return 'exam-detail';
  if (u === '/exams') return 'exams-hub';
  if (u.startsWith('/categories/')) return 'category';
  if (u.startsWith('/paths/')) return 'path';
  if (u === '/states') return 'states-hub';
  const seg = u.slice(1).split('/');
  if (seg.length === 1 && ['about','guides','explore','reviews','privacy','disclosure','404','how-it-works','editorial-policy','affiliate-disclosure'].includes(seg[0])) return 'static';
  if (seg.length === 1) return 'state-hub';
  if (seg.length === 2) return 'state-credential';
  return 'other';
}

const byType = {};
for (const u of urls) {
  const t = classify(u);
  (byType[t] ||= []).push(u);
}

// ---------- 输出 ----------
const report = { generated: new Date().toISOString(), totalPages: N };

console.log('\n===== 页面类型分布 =====');
for (const [t, arr] of Object.entries(byType).sort((a,b)=>b[1].length-a[1].length)) {
  const dsum = arr.map(u => depth.get(u) ?? 99);
  const avgD = (dsum.reduce((a,b)=>a+b,0)/arr.length).toFixed(2);
  const maxD = Math.max(...dsum);
  const inAvg = (arr.reduce((a,u)=>a+(inLinks.get(u)?.size||0),0)/arr.length).toFixed(1);
  const outAvg = (arr.reduce((a,u)=>a+(outLinks.get(u)?.size||0),0)/arr.length).toFixed(1);
  const prSum = arr.reduce((a,u)=>a+prMap.get(u),0);
  console.log(`${t.padEnd(18)} n=${String(arr.length).padStart(4)}  深度均值=${avgD} max=${maxD}  入链均值=${inAvg}  出链均值=${outAvg}  PR总和=${(prSum*100).toFixed(2)}%`);
  report[t] = { n: arr.length, avgDepth: +avgD, maxDepth: maxD, avgIn: +inAvg, avgOut: +outAvg, prShare: +(prSum*100).toFixed(2) };
}

console.log('\n===== 点击深度分布 =====');
const depthHist = {};
for (const u of urls) { const dd = depth.has(u) ? depth.get(u) : 'UNREACHABLE'; depthHist[dd] = (depthHist[dd]||0)+1; }
console.log(JSON.stringify(depthHist));
report.depthHist = depthHist;

console.log('\n===== 入链数最少的 25 页（权重黑洞候选）=====');
const sortedIn = urls.map(u=>[u, inLinks.get(u)?.size||0]).sort((a,b)=>a[1]-b[1]);
for (const [u,c] of sortedIn.slice(0,25)) console.log(`  ${String(c).padStart(3)} 入链  d=${depth.get(u)??'X'}  ${u}`);
report.lowestIn = sortedIn.slice(0,40);

console.log('\n===== PageRank Top 20 =====');
const sortedPr = urls.map(u=>[u, prMap.get(u)]).sort((a,b)=>b[1]-a[1]);
for (const [u,p] of sortedPr.slice(0,20)) console.log(`  ${(p*100).toFixed(3)}%  in=${inLinks.get(u)?.size||0}  ${u}`);

console.log('\n===== PageRank Bottom 15 =====');
for (const [u,p] of sortedPr.slice(-15)) console.log(`  ${(p*100).toFixed(4)}%  in=${inLinks.get(u)?.size||0}  d=${depth.get(u)??'X'}  ${u}`);
report.prTop = sortedPr.slice(0,20).map(([u,p])=>[u,+(p*100).toFixed(3)]);
report.prBottom = sortedPr.slice(-20).map(([u,p])=>[u,+(p*100).toFixed(4)]);

console.log('\n===== 出链结构（nav/main/footer 占比）=====');
for (const [t, arr] of Object.entries(byType)) {
  let nav=0,main=0,foot=0;
  for (const u of arr) { const c = linkContext.get(u); nav+=c.nav; main+=c.main; foot+=c.footer; }
  const tot = nav+main+foot || 1;
  console.log(`${t.padEnd(18)} nav=${(nav/tot*100).toFixed(0)}%  正文=${(main/tot*100).toFixed(0)}%  footer=${(foot/tot*100).toFixed(0)}%  (正文内链均值 ${(main/arr.length).toFixed(1)}/页)`);
  report[t] && (report[t].mainLinksPerPage = +(main/arr.length).toFixed(1));
}

fs.writeFileSync('_seo_graph_report.json', JSON.stringify({report, anchors: Object.fromEntries([...anchors].slice(0,0))}, null, 2));

// 导出完整数据给后续脚本
fs.writeFileSync('_seo_graph_data.json', JSON.stringify({
  urls,
  depth: Object.fromEntries(depth),
  inCount: Object.fromEntries(urls.map(u=>[u, inLinks.get(u)?.size||0])),
  outCount: Object.fromEntries(urls.map(u=>[u, outLinks.get(u)?.size||0])),
  pr: Object.fromEntries(urls.map(u=>[u, prMap.get(u)])),
  meta: Object.fromEntries(pageMeta),
  linkContext: Object.fromEntries(linkContext),
  anchors: Object.fromEntries([...anchors].map(([k,v])=>[k, v])),
}));
console.log('\n数据已导出 _seo_graph_data.json');
