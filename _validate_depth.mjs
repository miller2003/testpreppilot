// Depth-layer validator: checks every record in examDepth for the 8 required
// sections, minimum summary length, and placeholder text.
import examDepth from './src/data/examCatalog/examDepth.mjs';

const SECTIONS = ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay'];
const MIN_WORDS = 250;
const PLACEHOLDER = /Varies by exam|Varies by credential|TBD|TODO|to be confirmed|see the official handbook|see the awarding body|^Varies$/i;

function words(s) { return s.trim().split(/\s+/).filter(Boolean).length; }

function stringValues(v, acc = []) {
  if (typeof v === 'string') { acc.push(v); return acc; }
  if (Array.isArray(v)) { for (const x of v) stringValues(x, acc); return acc; }
  if (v && typeof v === 'object') { for (const x of Object.values(v)) stringValues(x, acc); return acc; }
  return acc;
}

function jaccardSim(a, b) {
  const shingle = (text) => {
    const w = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
    const s = new Set();
    for (let i = 0; i + 3 <= w.length; i++) s.add(w.slice(i, i + 3).join(' '));
    return s;
  };
  const sa = shingle(a), sb = shingle(b);
  if (!sa.size || !sb.size) return 0;
  let inter = 0;
  for (const x of sa) if (sb.has(x)) inter++;
  return inter / (sa.size + sb.size - inter);
}

const builtinFams = {
  CDL: ['cdl-general-knowledge-test', 'cdl-combination-vehicles-knowledge-test', 'cdl-air-brakes-knowledge-test'],
  CompTIA: ['comptia-a-plus', 'comptia-network-plus', 'comptia-security-plus', 'comptia-cysa-plus'],
  Praxis: ['praxis-core-combined-5752', 'praxis-elementary-education-multiple-subjects-5001', 'praxis-plt-grades-k-6-5622'],
  FINRA: ['series-7', 'series-65', 'series-66', 'sie-exam'],
  AWS: ['aws-certified-solutions-architect-associate', 'aws-certified-cloud-practitioner'],
  Beauty: ['nic-cosmetology-theory', 'nic-cosmetology-practical'],
  CPT: ['nasm-certified-personal-trainer', 'ace-certified-personal-trainer'],
  Nursing: ['nclex-rn', 'nnaap-cna', 'nremt-emt']
};

const problems = [];
const cache = {};
for (const [slug, d] of Object.entries(examDepth)) {
  if (!d || typeof d !== 'object') { problems.push(slug + ': record is not an object'); continue; }
  for (const s of SECTIONS) {
    if (!d[s] || typeof d[s] !== 'object') { problems.push(slug + ': missing section ' + s); continue; }
    const sum = d[s].summary;
    if (typeof sum !== 'string') { problems.push(slug + '.' + s + ': missing summary'); continue; }
    if (words(sum) < MIN_WORDS) problems.push(slug + '.' + s + ': summary only ' + words(sum) + ' words');
    for (const v of stringValues(d[s])) {
      if (PLACEHOLDER.test(v)) problems.push(slug + '.' + s + ': placeholder text: ' + v.slice(0, 60));
    }
  }
  if (d.author?.name !== 'TestPrepPilot Editorial Desk') problems.push(slug + ': author name mismatch');
  if (d.lastReviewed !== '2026-08') problems.push(slug + ': lastReviewed mismatch: ' + d.lastReviewed);
  cache[slug] = stringValues(d).join(' ');
}

// Builtin sibling similarity (same families as the original validator)
let worstAll = 0, worstPair = '';
for (const [fam, members] of Object.entries(builtinFams)) {
  for (let i = 0; i < members.length; i++) for (let j = i + 1; j < members.length; j++) {
    const a = cache[members[i]], b = cache[members[j]];
    if (!a || !b) continue;
    const v = jaccardSim(a, b);
    if (v > worstAll) { worstAll = v; worstPair = members[i] + ' vs ' + members[j]; }
  }
}

if (problems.length) {
  console.log('=== PROBLEMS ===');
  problems.forEach((p) => console.log('  ' + p));
  console.log('Total problems: ' + problems.length);
} else {
  console.log('None. All ' + Object.keys(examDepth).length + ' records clean.');
}
console.log('Builtin-family worst similarity: ' + worstAll.toFixed(3) + '  ' + worstPair);
