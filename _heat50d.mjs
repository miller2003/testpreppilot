// Batch 6 heat ranking: exams ranked 151-200 by estimated annual candidate volume.
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { readdirSync, writeFileSync } from 'node:fs';

const done = new Set(
  readdirSync('src/data/examCatalog/depth').filter((f) => f.endsWith('.mjs') && f !== 'index.mjs').map((f) => f.replace(/\.mjs$/, ''))
);

// per-exam estimated annual candidate volume (公开考生量或职业就业代理), src: 'published' | 'estimate'
const VOL = {
  // College admission / placement — millions of administrations
  'accuplacer-advanced-algebra-and-functions': { v: 5000000, src: 'estimate', note: 'ACCUPLACER placement tests are administered to millions of community-college and college students each year' },
  'nasbla-approved-boating-safety-course': { v: 1000000, src: 'estimate', note: 'Most states require a NASBLA-approved course before operating a boat; roughly a million courses a year' },
  'american-red-cross-lifeguarding': { v: 300000, src: 'estimate', note: 'Red Cross lifeguard certification trains hundreds of thousands of lifeguards annually' },
  'nims-ics-300': { v: 200000, src: 'estimate', note: 'Intermediate ICS training required for many incident-management roles' },
  'nremt-emr': { v: 150000, src: 'estimate', note: 'Emergency Medical Responder is the entry EMS certification' },
  'nims-ics-800': { v: 150000, src: 'estimate', note: 'NIMS ICS-800 is a core course for emergency-management personnel' },
  'faa-trust-recreational-uas-safety-test': { v: 100000, src: 'estimate', note: 'FAA TRUST is required for all recreational drone operators' },
  'wset-level-1-award-wines': { v: 100000, src: 'estimate', note: 'WSET Level 1 is the most-taken wine qualification worldwide' },
  'yoga-alliance-ryt-200': { v: 100000, src: 'estimate', note: '~100k+ new RYT-200 registrations per year' },
  'servsafe-alcohol-advanced': { v: 100000, src: 'estimate', note: 'Advanced alcohol server certification' },
  'wset-level-2-award-wines': { v: 80000, src: 'estimate', note: 'WSET Level 2 is the most popular wine qualification by exam volume' },
  'pesticide-applicator-core-exam': { v: 80000, src: 'estimate', note: 'Core pesticide applicator exams run in every state' },
  'nic-esthetics-theory': { v: 50000, src: 'estimate', note: 'Esthetics licensure is one of the largest state board exam categories' },
  'crossfit-level-1-trainer': { v: 50000, src: 'estimate', note: 'CrossFit L1 seminars train ~50k+ coaches a year' },
  'hazwoper-24-hour': { v: 50000, src: 'estimate', note: '24-hour HAZWOPER is common for TSD-facility and some site workers' },
  'imsa-work-zone-traffic-control-safety': { v: 50000, src: 'estimate', note: 'Flagging and traffic-control certifications required for highway work' },
  'cfp-certification-exam': { v: 40000, src: 'published', note: 'CFP Board reports ~40k+ exam administrations per year' },
  'cpcu-designation': { v: 30000, src: 'estimate', note: 'CPCU course exams (8 exams) administered through the Institutes' },
  'microsoft-mb-910': { v: 30000, src: 'estimate', note: 'Dynamics 365 Fundamentals is Microsoft\'s most-taken business-apps exam' },
  'microsoft-ms-102': { v: 30000, src: 'estimate', note: 'Microsoft 365 Administrator is a heavily-taken admin exam' },
  'salesforce-platform-app-builder': { v: 30000, src: 'estimate', note: 'One of the most-taken Salesforce certifications' },
  'google-advanced-data-analytics-certificate': { v: 30000, src: 'estimate', note: 'Google Career Certificate with high enrollment' },
  'praxis-mathematics-5165': { v: 30000, src: 'estimate', note: 'Required for secondary math licensure in many states' },
  'precision-nutrition-level-1': { v: 30000, src: 'estimate', note: 'Pn1 is the most-taken nutrition-coach certification' },
  'npte': { v: 30000, src: 'estimate', note: '~30k first-time candidates for the physical therapist licensing exam each year' },
  'cda-preschool': { v: 30000, src: 'estimate', note: 'CDA credentials are awarded to ~30k+ early educators a year' },
  'cicerone-certified-beer-server': { v: 30000, src: 'estimate', note: 'Cicerone Beer Server is the entry beer credential' },
  'microsoft-ai-102': { v: 25000, src: 'estimate', note: 'Azure AI Engineer Associate is a top Microsoft AI exam' },
  'microsoft-ms-700': { v: 20000, src: 'estimate', note: 'Teams Administrator Associate' },
  'microsoft-sc-200': { v: 20000, src: 'estimate', note: 'Security Operations Analyst Associate' },
  'salesforce-platform-developer-i': { v: 20000, src: 'estimate', note: 'Highly-taken Salesforce developer certification' },
  'bcba-board-certified-behavior-analyst': { v: 20000, src: 'estimate', note: 'BCBA exam ~20k administrations per year' },
  'nic-nail-technology-theory': { v: 20000, src: 'estimate', note: 'Nail technician state board exams' },
  'danb-gc': { v: 20000, src: 'estimate', note: 'DANB Infection Control exam is required by many state boards' },
  'arrt-radiography': { v: 20000, src: 'estimate', note: '~20k new radiography candidates per year' },
  'ace-certified-group-fitness-instructor': { v: 20000, src: 'estimate', note: 'ACE Group Fitness is the leading group-ex certification' },
  'certified-insurance-counselor': { v: 20000, src: 'estimate', note: 'CIC institutes certify ~20k+ a year' },
  'series-9': { v: 15000, src: 'estimate', note: 'FINRA general securities sales supervisor exam' },
  'npte-pta': { v: 15000, src: 'estimate', note: 'Physical therapist assistant licensing exam' },
  'arrt-sonography': { v: 15000, src: 'estimate', note: 'ARDMS sonography exams (SPI + specialty)' },
  'amt-rma': { v: 15000, src: 'estimate', note: 'Registered Medical Assistant is a leading CMA credential' },
  'isaca-crisc': { v: 15000, src: 'estimate', note: 'CRISC is ISACA\'s most-taken certification after CISA' },
  'sca-coffee-skills-professional-diploma': { v: 15000, src: 'estimate', note: 'SCA coffee certification pathway' },
  'praxis-early-childhood-education-5025': { v: 15000, src: 'estimate', note: 'Early childhood licensure Praxis' },
  'nsca-certified-personal-trainer': { v: 15000, src: 'estimate', note: 'NSCA-CPT is a major personal-training cert' },
  'microsoft-pl-200': { v: 15000, src: 'estimate', note: 'Power Platform Functional Consultant' },
  'vtne': { v: 10000, src: 'estimate', note: '~10k VTNE candidates per year for veterinary technician licensure' },
  'isc2-ccsp': { v: 8000, src: 'estimate', note: 'Cloud security professional certification' },
  'isc2-sscp': { v: 10000, src: 'estimate', note: 'Systems security certified practitioner' },
  'aws-certified-machine-learning-specialty': { v: 10000, src: 'estimate', note: 'AWS ML specialty is a top advanced AWS exam' },
  'asha-ccc-slp': { v: 10000, src: 'estimate', note: 'ASHA CCC-SLP is the standard credential for speech-language pathologists (~10k new certificants/year)' },
};

function familyOf(slug) {
  if (/^accuplacer/.test(slug)) return 'CollegeAdmission';
  if (/^nasbla|boating/.test(slug)) return 'Boating';
  if (/american-red-cross/.test(slug)) return 'Lifeguard';
  if (/^nims-|^fema-|^ics-/.test(slug)) return 'FEMA';
  if (/^nremt-/.test(slug)) return 'EMS';
  if (/^faa-/.test(slug)) return 'Aviation';
  if (/^wset-/.test(slug)) return 'Wine';
  if (/yoga/.test(slug)) return 'Yoga';
  if (/servsafe|statefoodsafety|always-food/.test(slug)) return 'FoodSafety';
  if (/pesticide/.test(slug)) return 'Pesticide';
  if (/^nic-/.test(slug)) return 'NIC';
  if (/crossfit/.test(slug)) return 'Fitness';
  if (/^hazwoper-/.test(slug)) return 'HAZWOPER';
  if (/^imsa-|work-zone|flagger/.test(slug)) return 'Traffic';
  if (/cfp|^series-|sie-exam/.test(slug)) return 'FINRA';
  if (/cpcu|insurance-counselor|^associate-in-|accredited-adviser/.test(slug)) return 'Insurance';
  if (/^microsoft-/.test(slug)) return 'Microsoft';
  if (/^salesforce-/.test(slug)) return 'Salesforce';
  if (/^google-/.test(slug)) return 'Google';
  if (/praxis/.test(slug)) return 'Praxis';
  if (/precision-nutrition/.test(slug)) return 'Fitness';
  if (/^npte/.test(slug)) return 'PT';
  if (/^cda-/.test(slug)) return 'CDA';
  if (/cicerone|beer/.test(slug)) return 'Cicerone';
  if (/bcba|bcaba/.test(slug)) return 'ABA';
  if (/^danb-/.test(slug)) return 'DANB';
  if (/^arrt-/.test(slug)) return 'ARRT';
  if (/^amt-/.test(slug)) return 'MedicalAssist';
  if (/^ace-|^afaa-|^acsm-|^nasm-|^nsca-|^issa-|^nfpt-|^ncsf-|^nspa-|^nccpt-|^cooper/.test(slug)) return 'Fitness';
  if (/^amazon|^aws-/.test(slug)) return 'AWS';
  if (/^isaca-/.test(slug)) return 'ISACA';
  if (/^isc2-/.test(slug)) return 'ISC2';
  if (/^sca-|coffee/.test(slug)) return 'Coffee';
  if (/vtne|veterinar/.test(slug)) return 'VetMed';
  if (/^asha-/.test(slug)) return 'Speech';
  if (/^ahima-/.test(slug)) return 'AHIMA';
  return 'Other';
}

const rows = [];
for (const e of allExamsFull) {
  if (e.scope !== 'national' || done.has(e.slug)) continue;
  const vo = VOL[e.slug];
  if (!vo) continue;
  const heat = Math.round(40 + 13 * Math.log10(vo.v / 1000));
  rows.push({ slug: e.slug, name: e.title || e.slug, heat, v: vo.v, src: vo.src, fam: familyOf(e.slug), note: vo.note });
}

rows.sort((a, b) => b.heat - a.heat || b.v - a.v);

const CAP = 5;
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= 50) break;
  const c = famCount[r.fam] || 0;
  if (c >= CAP) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates with volume estimate:', rows.length);
console.log('\n=== NEXT 50 BY ESTIMATED ANNUAL CANDIDATE VOLUME ===');
picked.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(2, ' ')}. heat=${String(r.heat).padStart(3)} vol≈${String(r.v).padStart(7)} [${r.src}] [${r.fam}]  ${r.slug}`);
  console.log(`       ${r.name} — ${r.note}`);
});

writeFileSync('./_next50d.json', JSON.stringify(
  picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })),
  null, 2
));
console.log('\nWrote _next50d.json');
