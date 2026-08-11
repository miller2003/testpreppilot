// 全量扫描 550 个考试页，用 MinHash 近似找高相似对
import fs from 'fs';
import path from 'path';
const DIST='dist/exams';

function bodyText(file){
  const h=fs.readFileSync(file,'utf8');
  const s=h.indexOf('</header>'), e=h.lastIndexOf('<footer');
  return h.slice(s>-1?s:0, e>-1?e:h.length)
    .replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ')
    .replace(/<[^>]*>/g,' ').replace(/&[a-z]+;/gi,' ').replace(/\s+/g,' ').trim().toLowerCase();
}
function shingles(t,n=6){
  const w=t.split(' ').filter(Boolean); const s=new Set();
  for(let i=0;i+n<=w.length;i++) s.add(w.slice(i,i+n).join(' '));
  return s;
}
function h32(str){ let h=2166136261; for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);} return h>>>0; }
const K=128;
const seeds=Array.from({length:K},(_,i)=>Math.imul(i+1,2654435761)>>>0);
function minhash(set){
  const sig=new Array(K).fill(0xFFFFFFFF);
  for(const s of set){ const base=h32(s); for(let i=0;i<K;i++){ const v=(base^seeds[i])>>>0; if(v<sig[i]) sig[i]=v; } }
  return sig;
}
function sigSim(a,b){ let c=0; for(let i=0;i<K;i++) if(a[i]===b[i]) c++; return c/K; }
function jac(a,b){ let i=0; for(const x of a) if(b.has(x)) i++; return i/(a.size+b.size-i); }

const slugs = fs.readdirSync(DIST,{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
console.log(`扫描考试页: ${slugs.length}`);
const sets={}, sigs={};
for(const s of slugs){ const f=path.join(DIST,s,'index.html'); if(!fs.existsSync(f))continue; sets[s]=shingles(bodyText(f)); sigs[s]=minhash(sets[s]); }
const ok=Object.keys(sigs);

// LSH banding: 32 bands × 4 rows
const B=32,R=4, cand=new Set();
for(let b=0;b<B;b++){
  const buckets=new Map();
  for(const s of ok){ const key=sigs[s].slice(b*R,(b+1)*R).join(','); (buckets.get(key)??buckets.set(key,[]).get(key)).push(s); }
  for(const arr of buckets.values()) if(arr.length>1&&arr.length<60)
    for(let i=0;i<arr.length;i++) for(let j=i+1;j<arr.length;j++) cand.add(arr[i]<arr[j]?arr[i]+'\u0000'+arr[j]:arr[j]+'\u0000'+arr[i]);
}
console.log(`LSH 候选对: ${cand.size}`);
const hits=[];
for(const c of cand){ const [a,b]=c.split('\u0000'); const v=jac(sets[a],sets[b]); if(v>=0.30) hits.push([a,b,v]); }
hits.sort((x,y)=>y[2]-x[2]);

console.log(`\n===== 高相似考试页对 (Jaccard >= 0.30) =====`);
console.log(`>=0.70 (doorway 红线): ${hits.filter(h=>h[2]>=0.7).length}`);
console.log(`0.50-0.70 (高危)      : ${hits.filter(h=>h[2]>=0.5&&h[2]<0.7).length}`);
console.log(`0.30-0.50 (需关注)    : ${hits.filter(h=>h[2]>=0.3&&h[2]<0.5).length}`);
console.log('');
for(const [a,b,v] of hits.slice(0,40)) console.log(`  ${v.toFixed(3)}  ${a}  ×  ${b}`);

// 聚类：把高相似页面归组
const parent={}; const find=x=>parent[x]===x?x:(parent[x]=find(parent[x]));
for(const s of ok) parent[s]=s;
for(const [a,b,v] of hits) if(v>=0.5){ const ra=find(a),rb=find(b); if(ra!==rb) parent[ra]=rb; }
const cl={}; for(const s of ok){ const r=find(s); (cl[r]??=[]).push(s); }
const groups=Object.values(cl).filter(g=>g.length>1).sort((a,b)=>b.length-a.length);
console.log(`\n===== 高相似簇 (Jaccard>=0.5 连通分量) =====`);
console.log(`簇数: ${groups.length}  受影响页面: ${groups.reduce((a,g)=>a+g.length,0)}`);
for(const g of groups.slice(0,12)) console.log(`  [${g.length}页] ${g.slice(0,6).join(', ')}${g.length>6?' ...':''}`);

fs.writeFileSync('_seo_dup_pairs.json', JSON.stringify({hits:hits.slice(0,200), groups}, null, 1));
