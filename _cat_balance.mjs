import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';
const live = allExamsFull.filter(e => releases[e.slug]);
const cand = allExamsFull.filter(e => !releases[e.slug] && e.record && examDepth[e.slug]);
const cnt = (arr) => arr.reduce((m,e)=>(m[e.category]=(m[e.category]||0)+1,m),{});
const L = cnt(live), C = cnt(cand);
const cats = [...new Set([...Object.keys(L),...Object.keys(C)])].sort((a,b)=>((C[b]||0)-(C[a]||0)));
console.log('category'.padEnd(24), 'live'.padStart(5), 'avail'.padStart(6), 'live%');
for (const c of cats) {
  const l=L[c]||0, a=C[c]||0, t=l+a;
  console.log(c.padEnd(24), String(l).padStart(5), String(a).padStart(6), t? ((l/t*100).toFixed(0)+'%').padStart(6):'');
}
