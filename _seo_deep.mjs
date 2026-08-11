import fs from 'fs';
const D = JSON.parse(fs.readFileSync('_seo_graph_data.json','utf8'));
const { urls, depth, inCount, outCount, pr, meta, anchors, linkContext } = D;

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
const med = a => { const s=[...a].sort((x,y)=>x-y); return s[Math.floor(s.length/2)]; };
const pct = (a,p) => { const s=[...a].sort((x,y)=>x-y); return s[Math.floor(s.length*p)]; };

console.log('===== 1. exam-detail (550页) 入链分布 =====');
const ed = urls.filter(u=>classify(u)==='exam-detail');
const edIn = ed.map(u=>inCount[u]);
console.log(`入链 min=${Math.min(...edIn)} p25=${pct(edIn,.25)} 中位=${med(edIn)} p75=${pct(edIn,.75)} p90=${pct(edIn,.9)} max=${Math.max(...edIn)}`);
const buckets = {'1':0,'2-3':0,'4-9':0,'10-29':0,'30+':0};
for (const c of edIn) { if(c<=1)buckets['1']++; else if(c<=3)buckets['2-3']++; else if(c<=9)buckets['4-9']++; else if(c<=29)buckets['10-29']++; else buckets['30+']++; }
console.log('入链分桶:', JSON.stringify(buckets));
console.log(`只有1个入链(仅靠/exams存活)的考试页: ${buckets['1']} / 550 = ${(buckets['1']/550*100).toFixed(1)}%`);

console.log('\n===== 2. PageRank 分配失衡 =====');
const groups={};
for(const u of urls){const t=classify(u);(groups[t]??=[]).push(u);}
const totalPr = urls.reduce((a,u)=>a+pr[u],0);
const rows=[];
for(const [t,arr] of Object.entries(groups)){
  const s=arr.reduce((a,u)=>a+pr[u],0);
  rows.push([t,arr.length,(s/totalPr*100),(s/totalPr*100/arr.length)]);
}
rows.sort((a,b)=>b[2]-a[2]);
console.log('类型              页数    PR总占比   单页均PR');
for(const [t,n,s,per] of rows) console.log(`${t.padEnd(18)}${String(n).padStart(4)}   ${s.toFixed(2).padStart(6)}%   ${per.toFixed(4)}%`);
const staticPr = rows.find(r=>r[0]==='static');
const examPr = rows.find(r=>r[0]==='exam-detail');
console.log(`\n>>> 10个法务/静态页吃掉 ${staticPr[2].toFixed(1)}% 权重，550个赚钱页只有 ${examPr[2].toFixed(1)}%`);
console.log(`>>> 单页权重比: 静态页是考试页的 ${(staticPr[3]/examPr[3]).toFixed(0)} 倍`);

console.log('\n===== 3. 真·孤儿页（入链=0 / 不可达）=====');
for(const u of urls) if((inCount[u]||0)===0) console.log(`  ${u}   (out=${outCount[u]}, words=${meta[u]?.words})`);
const unreach = urls.filter(u=>depth[u]===undefined);
console.log(`不可达页面数: ${unreach.length} -> ${unreach.join(', ')}`);

console.log('\n===== 4. categories / paths 中间层利用率 =====');
for(const t of ['category','path','states-hub','exams-hub']){
  for(const u of (groups[t]||[])){
    console.log(`  ${u.padEnd(38)} in=${String(inCount[u]).padStart(3)} out=${String(outCount[u]).padStart(3)} PR=${(pr[u]/totalPr*100).toFixed(3)}% words=${meta[u]?.words}`);
  }
}

console.log('\n===== 5. 锚文本多样性（Top 目标页）=====');
const targets = Object.entries(anchors).sort((a,b)=>b[1].length-a[1].length);
function anchorStats(list){
  const c={}; for(const a of list) c[a.text.toLowerCase()]=(c[a.text.toLowerCase()]||0)+1;
  const e=Object.entries(c).sort((x,y)=>y[1]-x[1]);
  return {unique:e.length, top:e[0], topShare:e[0][1]/list.length};
}
for(const [u,list] of targets.slice(0,6)){
  const s=anchorStats(list);
  console.log(`  ${u.padEnd(24)} 链接${String(list.length).padStart(3)}条  唯一锚文本${String(s.unique).padStart(3)}种  最高频"${s.top[0].slice(0,30)}"占${(s.topShare*100).toFixed(0)}%`);
}
// 考试页锚文本
console.log('\n  -- 考试详情页锚文本样本 --');
for(const u of ed.slice(0,8)){
  const list=anchors[u]||[]; if(!list.length){console.log(`  ${u} 无锚`);continue;}
  const s=anchorStats(list);
  console.log(`  ${u.slice(0,44).padEnd(46)} ${String(list.length).padStart(3)}条 唯一${String(s.unique).padStart(2)}种 主锚"${s.top[0].slice(0,34)}"${(s.topShare*100).toFixed(0)}%`);
}
// 全局：锚文本zone分布
let zn={nav:0,main:0,footer:0};
for(const list of Object.values(anchors)) for(const a of list) zn[a.zone]++;
const zt=zn.nav+zn.main+zn.footer;
console.log(`\n  全站内链 zone 分布: nav ${(zn.nav/zt*100).toFixed(1)}% | 正文 ${(zn.main/zt*100).toFixed(1)}% | footer ${(zn.footer/zt*100).toFixed(1)}%  (总 ${zt} 条)`);

console.log('\n===== 6. title / description 质量 =====');
const tl=urls.map(u=>meta[u].titleLen), dl=urls.map(u=>meta[u].descLen);
console.log(`title 长度: min=${Math.min(...tl)} 中位=${med(tl)} max=${Math.max(...tl)}  | >60字符(会被截断): ${tl.filter(x=>x>60).length}  | <30: ${tl.filter(x=>x<30).length}`);
console.log(`desc  长度: min=${Math.min(...dl)} 中位=${med(dl)} max=${Math.max(...dl)}  | >160: ${dl.filter(x=>x>160).length}  | <70(太短): ${dl.filter(x=>x<70).length}  | 空: ${dl.filter(x=>x===0).length}`);
// title 模式化
const titlePat={};
for(const u of urls){ const t=meta[u].title.replace(/[^a-zA-Z| ]/g,'').trim(); const key=t.split('|').slice(1).join('|').trim(); titlePat[key]=(titlePat[key]||0)+1; }
console.log('title 后缀模式 Top5:', Object.entries(titlePat).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v])=>`"${k}"×${v}`).join('  '));

console.log('\n===== 7. H 标签 / 图片 / 字数 =====');
console.log(`H1 缺失: ${urls.filter(u=>meta[u].h1Count===0).length}  多H1: ${urls.filter(u=>meta[u].h1Count>1).length}`);
const h2s=urls.map(u=>meta[u].h2s);
console.log(`H2 数量 中位=${med(h2s)} 无H2页面=${h2s.filter(x=>x===0).length}`);
const totalImg=urls.reduce((a,u)=>a+meta[u].imgTotal,0), noAlt=urls.reduce((a,u)=>a+meta[u].imgNoAlt,0);
console.log(`<img> 总数=${totalImg} 缺alt=${noAlt}`);
const w=urls.map(u=>meta[u].words);
console.log(`正文词数 中位=${med(w)} p10=${pct(w,.1)} p90=${pct(w,.9)}  <500词页面=${w.filter(x=>x<500).length}`);
const thin = urls.filter(u=>meta[u].words<500).map(u=>`${u}(${meta[u].words})`);
console.log('薄页:', thin.slice(0,20).join(' '));

console.log('\n===== 8. schema 覆盖 =====');
const sc={};
for(const u of urls) for(const t of meta[u].schemaTypes) sc[t]=(sc[t]||0)+1;
console.log(Object.entries(sc).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}:${v}`).join('  '));

console.log('\n===== 9. 页面体积 =====');
const by=urls.map(u=>meta[u].bytes);
console.log(`HTML 体积 中位=${(med(by)/1024).toFixed(0)}KB max=${(Math.max(...by)/1024).toFixed(0)}KB`);
const big=urls.map(u=>[u,meta[u].bytes]).sort((a,b)=>b[1]-a[1]).slice(0,6);
for(const [u,b] of big) console.log(`  ${(b/1024).toFixed(0)}KB  ${u}`);
