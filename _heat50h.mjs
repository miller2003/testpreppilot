import { writeFileSync } from 'node:fs';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { readdirSync } from 'node:fs';

const done = new Set(readdirSync('src/data/examCatalog/depth').filter(f => f.endsWith('.mjs') && f !== 'index.mjs').map(f => f.replace(/\.mjs$/, '')));

const VOL = {
  // AP (vol: annual test-takers estimate)
  'ap-spanish-language-and-culture': { v: 150000, note: '~150k AP Spanish takers/yr' },
  'ap-calculus-bc': { v: 180000, note: '~180k AP Calculus BC takers/yr' },
  'ap-microeconomics': { v: 100000, note: '~100k AP Micro takers/yr' },
  'ap-european-history': { v: 100000, note: '~100k AP European History takers/yr' },
  'ap-computer-science-a': { v: 80000, note: '~80k AP CSA takers/yr' },
  'ap-physics-c-mechanics': { v: 60000, note: '~60k AP Physics C: Mech takers/yr' },
  'ap-precalculus': { v: 50000, note: '~50k AP Precalculus takers/yr' },
  'ap-physics-2-algebra-based': { v: 40000, note: '~40k AP Physics 2 takers/yr' },
  // CLEP
  'clep-college-mathematics': { v: 25000, note: 'Common CLEP math exam' },
  'clep-chemistry': { v: 20000, note: 'Common CLEP chemistry exam' },
  'clep-principles-of-macroeconomics': { v: 20000, note: 'Common CLEP business-core exam' },
  'clep-financial-accounting': { v: 20000, note: 'Common CLEP business-core exam' },
  'clep-introductory-business-law': { v: 15000, note: 'Common CLEP business-core exam' },
  'clep-precalculus': { v: 15000, note: 'Common CLEP math exam' },
  // IT
  'microsoft-az-800': { v: 50000, note: 'Windows Server hybrid admin — high Azure demand' },
  'microsoft-az-801': { v: 30000, note: 'Windows Server hybrid advanced' },
  'vmware-vcp-data-center-virtualization': { v: 30000, note: 'VCP-DCV — core VMware credential' },
  'microsoft-dp-203': { v: 30000, note: 'Azure Data Engineer Associate' },
  'safe-agile-product-manager': { v: 30000, note: 'SAFe POPM — widely taken SAFe cert' },
  'microsoft-sc-100': { v: 20000, note: 'Cybersecurity Architect Expert' },
  'aws-certified-advanced-networking-specialty': { v: 20000, note: 'AWS Advanced Networking' },
  'comptia-data-plus': { v: 20000, note: 'CompTIA Data+ — data literacy cert' },
  'safe-architect': { v: 20000, note: 'SAFe Architect' },
  'google-professional-cloud-developer': { v: 20000, note: 'GCP Professional Cloud Developer' },
  'aws-certified-database-specialty': { v: 15000, note: 'AWS Database Specialty' },
  'aws-certified-sap-on-aws-specialty': { v: 10000, note: 'AWS SAP on AWS Specialty' },
  // Allied health
  'nha-cmaa': { v: 30000, note: 'NHA medical-administrative assistant' },
  'ncct-pt': { v: 20000, note: 'NCCT patient-care technician' },
  'ncct-ts': { v: 20000, note: 'NCCT surgical technologist' },
  'usmle-step-3': { v: 20000, note: '~20k USMLE Step 3 takers/yr' },
  'ptcb-billing': { v: 15000, note: 'PTCB Billing and Reimbursement cert' },
  'ptcb-immunization': { v: 15000, note: 'PTCB Immunization Administration cert' },
  'nha-mental-health-tech': { v: 10000, note: 'NHA Mental Health Technician' },
  'ptcb-nonsterile-compounding': { v: 10000, note: 'PTCB Nonsterile Compounding cert' },
  'bcen-cfrn': { v: 6000, note: 'BCEN flight nurse credential' },
  'bcen-tcrn': { v: 5000, note: 'BCEN trauma nurse credential' },
  // Praxis
  'praxis-social-studies-5581': { v: 10000, note: 'Social Studies teacher licensure' },
  'praxis-middle-school-science-5442': { v: 8000, note: 'Middle-school science licensure' },
  'praxis-physical-education-content-knowledge-5091': { v: 8000, note: 'Physical education licensure' },
  'praxis-special-education-learning-disabilities-5383': { v: 8000, note: 'Special-education licensure' },
  'praxis-middle-school-social-studies-5089': { v: 6000, note: 'Middle-school social studies licensure' },
  'praxis-government-political-science-5931': { v: 6000, note: 'Government teacher licensure' },
  'praxis-geography-5921': { v: 5000, note: 'Geography teacher licensure' },
  'praxis-reading-specialist-5302': { v: 5000, note: 'Reading-specialist licensure' },
  'praxis-music-content-knowledge-5113': { v: 5000, note: 'Music teacher licensure' },
  'praxis-economics-5911': { v: 4000, note: 'Economics teacher licensure' },
  // Accounting
  'cma-part-1': { v: 30000, note: 'CMA Part 1 — financial planning' },
  'cma-part-2': { v: 25000, note: 'CMA Part 2 — strategic management' },
  'cia-part-1': { v: 15000, note: 'CIA Part 1 — internal audit essentials' },
  'cfe-exam': { v: 10000, note: 'Certified Fraud Examiner' }
};

function familyOf(slug) {
  if (/^ap-/.test(slug)) return 'AP';
  if (/^clep-/.test(slug)) return 'CLEP';
  if (/praxis-/.test(slug)) return 'Praxis';
  if (/^aws-/.test(slug)) return 'AWS';
  if (/^microsoft-/.test(slug)) return 'Microsoft';
  if (/^vmware-/.test(slug)) return 'VMware';
  if (/^safe-/.test(slug)) return 'SAFe';
  if (/^comptia-/.test(slug)) return 'CompTIA';
  if (/^google-/.test(slug)) return 'Google';
  if (/^nha-|^ncct-|^ptcb-|^bcen-/.test(slug)) return 'AlliedHealth';
  if (/^usmle-/.test(slug)) return 'Medical';
  if (/^cma-|^cia-|^cfe-/.test(slug)) return 'Accounting';
  return 'Other';
}

const rows = Object.entries(VOL)
  .map(([slug, vol]) => {
    const e = allExamsFull.find((x) => x.slug === slug);
    if (!e || done.has(slug)) return null;
    const heat = Math.round(40 + 14 * Math.log10(vol.v / 1000));
    return { slug, name: e.name || e.title || slug, v: vol.v, note: vol.note, fam: familyOf(slug), heat };
  })
  .filter(Boolean)
  .sort((a, b) => b.heat - a.heat || b.v - a.v);

const CAP = { AP: 8, CLEP: 6, Praxis: 10, AWS: 3, Microsoft: 4, VMware: 1, SAFe: 2, CompTIA: 1, Google: 1, AlliedHealth: 10, Medical: 1, Accounting: 4, Other: 1 };
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= 50) break;
  const c = famCount[r.fam] || 0;
  if (c >= (CAP[r.fam] || 1)) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates: ' + rows.length + ' | Picked: ' + picked.length);
picked.forEach((r, i) => console.log(String(i + 1).padStart(2) + '. heat=' + r.heat + ' [' + r.fam + '] ' + r.slug + ' — ' + r.note));

writeFileSync('./_next50h.json', JSON.stringify(picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, family: r.fam, note: r.note })), null, 2));
