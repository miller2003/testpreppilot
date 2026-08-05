import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { demandScore, demandTier } from './manager/demand.mjs';

// 28 slugs already deep-optimized (must be excluded)
const done = new Set([
  // 20 national (depth) slugs
  'aama-cma','afaa-certified-personal-trainer','aipb-certified-bookkeeper',
  'certified-dietary-manager-cfpp','cisco-ccna-cybersecurity','cisco-ccnp-cybersecurity',
  'cisco-ccst-cybersecurity','comptia-linux-plus','danb-cda','microsoft-ai-900',
  'microsoft-ai-901','microsoft-az-104','microsoft-az-140','microsoft-az-204',
  'microsoft-az-305','microsoft-az-500','microsoft-az-700','microsoft-az-900',
  'nacpb-cpb','nasm-certified-nutrition-coach',
  // 8 flagship slugs
  'cpa-exam','enrolled-agent','epa-608-certification','osha-10-construction',
  'osha-30-construction','texas-real-estate-license','california-real-estate-license',
  'florida-real-estate-license'
]);

const rows = allExamsFull
  .filter(e => e.scope === 'national' && !done.has(e.slug))
  .map(e => ({ slug: e.slug, name: e.name, category: e.category, score: demandScore(e), tier: demandTier(demandScore(e)) }))
  .sort((a, b) => b.score - a.score);

const top = rows.slice(0, 30);
console.log('TOTAL national candidates (excl done):', rows.length);
console.log('Score range of candidate pool:', rows[0].score, '->', rows[rows.length-1].score);
console.log('\n=== NEXT 30 BY HEAT ===');
top.forEach((r, i) => {
  console.log(`${String(i+1).padStart(2,' ')}. ${r.score.toString().padStart(3,' ')} [${r.tier}]  ${r.slug}  —  ${r.name}  (${r.category})`);
});
