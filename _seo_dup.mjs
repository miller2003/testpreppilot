import fs from 'fs';
import path from 'path';
const DIST='dist';

function bodyText(file){
  const h=fs.readFileSync(file,'utf8');
  const s=h.indexOf('</header>'), e=h.lastIndexOf('<footer');
  return h.slice(s>-1?s:0, e>-1?e:h.length)
    .replace(/<script[\s\S]*?<\/script>/gi,' ')
    .replace(/<style[\s\S]*?<\/style>/gi,' ')
    .replace(/<[^>]*>/g,' ').replace(/&[a-z]+;/gi,' ')
    .replace(/\s+/g,' ').trim().toLowerCase();
}
function shingles(t,n=6){
  const w=t.split(' ').filter(Boolean); const s=new Set();
  for(let i=0;i+n<=w.length;i++) s.add(w.slice(i,i+n).join(' '));
  return s;
}
function jac(a,b){ let i=0; for(const x of a) if(b.has(x)) i++; return i/(a.size+b.size-i); }

// --- 州 hub 页两两相似度 ---
const states = fs.readdirSync(DIST,{withFileTypes:true})
  .filter(d=>d.isDirectory() && fs.existsSync(path.join(DIST,d.name,'index.html')))
  .map(d=>d.name)
  .filter(n=>!['exams','categories','paths','_astro','pagefind','about','guides','explore','reviews','privacy','disclosure','how-it-works','editorial-policy','affiliate-disclosure','states'].includes(n));

console.log(`州 hub 页数: ${states.length}`);
const sh = {};
for(const s of states) sh[s]=shingles(bodyText(path.join(DIST,s,'index.html')));

// 抽样两两
let pairs=[], sum=0, cnt=0;
for(let i=0;i<states.length;i++) for(let j=i+1;j<states.length;j++){
  const v=jac(sh[states[i]],sh[states[j]]); sum+=v; cnt++;
  pairs.push([states[i],states[j],v]);
}
pairs.sort((a,b)=>b[2]-a[2]);
const vals=pairs.map(p=>p[2]).sort((a,b)=>a-b);
console.log(`\n===== 州 hub 页两两 Jaccard（6-gram，${cnt} 对）=====`);
console.log(`均值=${(sum/cnt).toFixed(3)}  中位=${vals[Math.floor(vals.length/2)].toFixed(3)}  min=${vals[0].toFixed(3)}  max=${vals[vals.length-1].toFixed(3)}`);
console.log(`>0.7 的对数: ${pairs.filter(p=>p[2]>0.7).length}  |  >0.5: ${pairs.filter(p=>p[2]>0.5).length}  |  >0.3: ${pairs.filter(p=>p[2]>0.3).length}`);
console.log('最相似 Top5:'); pairs.slice(0,5).forEach(p=>console.log(`  ${p[0]} vs ${p[1]}  ${p[2].toFixed(3)}`));
console.log('最不相似 Top3:'); pairs.slice(-3).forEach(p=>console.log(`  ${p[0]} vs ${p[1]}  ${p[2].toFixed(3)}`));

// 唯一 token 分析：州页面除了州名，还有多少独特内容
const allText = states.map(s=>bodyText(path.join(DIST,s,'index.html')));
const common = shingles(allText[0]);
for(let i=1;i<allText.length;i++){ const s2=shingles(allText[i]); for(const x of [...common]) if(!s2.has(x)) common.delete(x); }
const avgSize = states.reduce((a,s)=>a+sh[s].size,0)/states.length;
console.log(`\n所有 51 州页共有的 6-gram 数: ${common.size} / 平均每页 ${avgSize.toFixed(0)} 个 = ${(common.size/avgSize*100).toFixed(1)}% 是全站统一样板`);

// --- state-credential 3页相似度 ---
console.log('\n===== state-credential 3 页相似度 =====');
const sc=[['california','california-real-estate-license'],['florida','florida-real-estate-license'],['texas','texas-real-estate-license']];
const scs={};
for(const [st,cr] of sc){ const f=path.join(DIST,st,cr,'index.html'); if(fs.existsSync(f)) scs[`${st}/${cr}`]=shingles(bodyText(f)); }
const k=Object.keys(scs);
for(let i=0;i<k.length;i++) for(let j=i+1;j<k.length;j++)
  console.log(`  ${k[i]} vs ${k[j]} = ${jac(scs[k[i]],scs[k[j]]).toFixed(3)}`);

// --- exam-detail 抽样相似度（对照组）---
console.log('\n===== exam-detail 抽样 30 页相似度（对照组）=====');
const exf = fs.readdirSync(path.join(DIST,'exams'),{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
const samp = exf.filter((_,i)=>i%Math.floor(exf.length/30)===0).slice(0,30);
const exs={}; for(const s of samp) exs[s]=shingles(bodyText(path.join(DIST,'exams',s,'index.html')));
let es=[], esum=0,ec=0;
for(let i=0;i<samp.length;i++) for(let j=i+1;j<samp.length;j++){ const v=jac(exs[samp[i]],exs[samp[j]]); esum+=v;ec++; es.push([samp[i],samp[j],v]); }
es.sort((a,b)=>b[2]-a[2]);
console.log(`均值=${(esum/ec).toFixed(4)}  最高对: ${es[0][0]} vs ${es[0][1]} = ${es[0][2].toFixed(3)}`);
console.log(`>0.3 的对数: ${es.filter(p=>p[2]>0.3).length} / ${ec}`);
