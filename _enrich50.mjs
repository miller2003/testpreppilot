// Enrich the 50 next-batch stub records: fill record.time / record.cost /
// record.salaryRange with the researched values used in the depth files.
// Same safe rewrite pattern as _enrich30.mjs (restores named + default exports).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/examCatalog/national-research';
const NUM = Array.from({ length: 188 }, (_, i) => i + 1);

const F = {
  'praxis-elementary-education-content-knowledge-5018': { time: '2.5 hours (130 questions)', cost: '~$156 (confirm at ets.org/praxis)', salary: '$45,000-$80,000' },
  'praxis-plt-grades-7-12-5624': { time: '2 hours (70 selected-response + 4 constructed-response)', cost: '~$130 (confirm at ets.org/praxis)', salary: '$40,000-$85,000' },
  'google-it-support-professional-certificate': { time: 'Self-paced — roughly 120-150 study hours across 5 courses', cost: '~$49-$99/month via Coursera (financial aid available)', salary: '$35,000-$70,000' },
  'google-data-analytics-professional-certificate': { time: 'Self-paced — roughly 180-200 study hours across 8 courses', cost: '~$49-$99/month via Coursera (financial aid available)', salary: '$55,000-$120,000' },
  'nccer-electrician': { time: 'Per-module: 10-15 hours study plus hands-on rehearsal', cost: '~$30-$100 per module (varies by testing centre)', salary: '$45,000-$90,000' },
  'acsm-certified-personal-trainer': { time: '150 minutes (135 questions)', cost: '~$349-$399 (exam-only pricing)', salary: '$30,000-$65,000' },
  'comptia-pentest-plus': { time: '165 minutes (up to 85 questions)', cost: '~$392', salary: '$85,000-$150,000' },
  'nccer-welding': { time: 'Per-module: 10-15 hours study plus lab practice', cost: '~$30-$100 per module (varies by testing centre)', salary: '$38,000-$70,000' },
  'nccer-plumbing': { time: 'Per-module: 10-15 hours study plus hands-on rehearsal', cost: '~$30-$100 per module (varies by testing centre)', salary: '$45,000-$85,000' },
  'nccer-hvac': { time: 'Per-module: 10-15 hours study plus hands-on rehearsal', cost: '~$30-$100 per module (varies by testing centre)', salary: '$42,000-$80,000' },
  'nclex-pn': { time: 'Up to 5 hours (computer-adaptive, variable per candidate)', cost: '~$200 (NCSBN) plus state board fees', salary: '$45,000-$75,000' },
  'issa-certified-personal-trainer': { time: '180 minutes (200 questions)', cost: '~$500-$1,000 depending on tier and promotions', salary: '$30,000-$65,000' },
  'pe-civil': { time: '8 hours (two sessions of 4 hours; 80 questions)', cost: '~$375-$400 (NCEES) plus state application fees', salary: '$75,000-$130,000' },
  'series-6': { time: '90 minutes (55 questions)', cost: '~$100 (confirm at registration)', salary: '$45,000-$120,000' },
  'cfa-level-2': { time: '4.4 hours (two sessions; 88 items)', cost: '~$1,000-$1,600 by registration window', salary: '$75,000-$150,000' },
  'ahip-health-insurance-associate': { time: '60 minutes per module (50 questions each)', cost: '~$50-$300 depending on module set (annual)', salary: '$35,000-$100,000' },
  'scrum-org-psm-i': { time: '60 minutes (80 questions)', cost: '$200', salary: '$70,000-$130,000' },
  'shrm-cp': { time: '3 hours 40 minutes (134 questions, two sections)', cost: '~$350-$500 depending on membership and timing', salary: '$50,000-$95,000' },
  'pmi-capm': { time: '3 hours (150 questions)', cost: '$225 member / $300 non-member', salary: '$60,000-$120,000' },
  'pmi-acp': { time: '3 hours (120 questions)', cost: '$435 member / $495 non-member', salary: '$70,000-$130,000' },
  'aws-certified-solutions-architect-professional': { time: '180 minutes (75 questions)', cost: '$300', salary: '$100,000-$180,000' },
  'cisco-ccnp-enterprise': { time: 'Core exam: 120 minutes (102 questions) plus a concentration exam', cost: '$400 core + ~$300 concentration', salary: '$70,000-$130,000' },
  'comptia-server-plus': { time: '90 minutes (up to 100 questions)', cost: '~$369', salary: '$60,000-$120,000' },
  'google-cloud-digital-leader': { time: '90 minutes (50-60 questions)', cost: '~$99', salary: '$60,000-$120,000' },
  'aws-certified-welder': { time: 'Performance test — varies by positions and facility', cost: '~$100-$300 per session (varies by facility)', salary: '$38,000-$70,000' },
  'series-63': { time: '75 minutes (65 questions)', cost: '$147', salary: '$45,000-$120,000' },
  'hrci-phr': { time: '2 hours (115 questions, 90 scored)', cost: '$395 exam + $100 application', salary: '$50,000-$95,000' },
  'aws-certified-developer-associate': { time: '130 minutes (65 questions)', cost: '$150', salary: '$90,000-$170,000' },
  'comptia-cloud-plus': { time: '90 minutes (up to 90 questions)', cost: '~$358', salary: '$65,000-$120,000' },
  'comptia-it-fundamentals': { time: '60 minutes (75 questions)', cost: '~$134', salary: '$35,000-$65,000' },
  'isc2-certified-in-cybersecurity': { time: '2 hours (100 questions)', cost: '~$199', salary: '$55,000-$100,000' },
  'google-associate-cloud-engineer': { time: '2 hours (50-60 questions)', cost: '~$125', salary: '$70,000-$120,000' },
  'aab-phlebotomy': { time: 'Computer-based exam (approximately 2 hours)', cost: '~$100-$150', salary: '$34,000-$57,000' },
  'nna-certified-notary-signing-agent': { time: 'Certification course plus online exam (typically 1-2 weeks total with the commission)', cost: '~$100-$200 (NNA package; state commission costs extra)', salary: '$30,000-$80,000 (transaction-based)' },
  'cfa-level-3': { time: '4.4 hours (two sessions; ~44 items incl. constructed response)', cost: '~$1,000-$1,600 by registration window', salary: '$75,000-$150,000' },
  'scrum-org-pspo-i': { time: '60 minutes (80 questions)', cost: '$200', salary: '$70,000-$130,000' },
  'asq-certified-six-sigma-black-belt': { time: '4 hours 18 minutes (165 questions, 150 scored)', cost: '~$538 member / ~$638 non-member', salary: '$70,000-$140,000' },
  'asq-certified-six-sigma-green-belt': { time: '4 hours 18 minutes (110 questions, 100 scored)', cost: '~$398 member / ~$498 non-member', salary: '$60,000-$120,000' },
  'aws-certified-sysops-administrator-associate': { time: '130 minutes (65 questions)', cost: '$150', salary: '$70,000-$120,000' },
  'cisco-ccst-networking': { time: '60 minutes (~50 questions)', cost: '~$125', salary: '$38,000-$70,000' },
  'isc2-cissp': { time: 'Up to 3 hours (adaptive, 125-175 questions)', cost: '~$749 plus the ~$135 annual maintenance fee', salary: '$110,000-$170,000' },
  'google-professional-cloud-architect': { time: '2 hours (50-60 questions incl. case studies)', cost: '~$200', salary: '$110,000-$180,000' },
  'python-institute-pcep': { time: '45 minutes (30 questions)', cost: '~$59 (US; varies by region)', salary: '$60,000-$100,000' },
  'nremt-paramedic': { time: 'Up to 2.5 hours (adaptive, ~80-150 questions)', cost: '~$140-$150 (cognitive) plus psychomotor fee', salary: '$35,000-$65,000' },
  'safe-scrum-master': { time: '90 minutes (45 questions)', cost: '~$100 (often included in the course)', salary: '$75,000-$130,000' },
  'hrci-sphr': { time: '2 hours (115 questions, 90 scored)', cost: '$495 exam + $100 application', salary: '$100,000-$180,000' },
  'shrm-scp': { time: '3 hours 40 minutes (134 questions, two sections)', cost: '~$350-$500 depending on membership and timing', salary: '$100,000-$180,000' },
  'asq-certified-quality-engineer': { time: '5 hours 18 minutes (175 questions, 160 scored)', cost: '~$538 member / ~$638 non-member', salary: '$70,000-$140,000' },
  'lpi-linux-essentials': { time: '60 minutes (40 questions)', cost: '~$120 (US; varies by country)', salary: '$55,000-$100,000' },
  'ahima-cca': { time: '2 hours (100 questions)', cost: '~$199-$299 depending on membership', salary: '$35,000-$60,000' }
};

const GENERIC = /^Varies$/i;

const slugToFile = new Map();
const cache = new Map();
async function batch(n) {
  if (!cache.has(n)) cache.set(n, await import('./src/data/examCatalog/national-research/batch' + String(n).padStart(2, '0') + '.mjs'));
  return cache.get(n);
}

for (const slug of Object.keys(F)) {
  for (const n of NUM) {
    const m = await batch(n);
    const list = m.default?.exams || m.exams || [];
    const rec = list.find((e) => e && e.slug === slug);
    if (rec) { slugToFile.set(slug, { file: 'batch' + String(n).padStart(2, '0') + '.mjs', record: rec }); break; }
  }
}

const perFile = new Map();
let patched = 0;
for (const [slug, f] of Object.entries(F)) {
  const loc = slugToFile.get(slug);
  if (!loc) { console.log('!! no winning batch for ' + slug); continue; }
  const r = loc.record;
  const patch = (field, value) => {
    const cur = r[field];
    const isGeneric = (typeof cur === 'string' && (GENERIC.test(cur.trim()) || (field === 'salaryRange' && cur.trim() === '')));
    if (isGeneric || (field === 'salaryRange' && typeof cur !== 'string')) {
      r[field] = value;
      patched++;
    }
  };
  patch('time', f.time);
  patch('cost', f.cost);
  patch('salaryRange', f.salary);
  if (!perFile.has(loc.file)) perFile.set(loc.file, []);
  perFile.get(loc.file).push(slug);
  console.log('patched ' + slug + ' -> ' + loc.file);
}

console.log('\npatched fields total:', patched);
console.log('files to rewrite:', [...perFile.keys()].join(', '));

for (const [file, slugs] of perFile) {
  const m = await batch(parseInt(file.match(/\d+/)[0]));
  const programs = m.default?.programs ?? m.programs ?? [];
  const exams = m.default?.exams ?? m.exams ?? [];
  const out =
    'export const programs = ' + JSON.stringify(programs, null, 2) + ';\n' +
    'export const exams = ' + JSON.stringify(exams, null, 2) + ';\n' +
    'export default { programs, exams };\n';
  writeFileSync(join(DIR, file), out);
  console.log('rewrote ' + file + ' (' + slugs.join(', ') + ')');
}
