// Enrich the 50 batch-4 stub records: fill record.time / record.cost /
// record.salaryRange with the researched values used in the depth files.
// Same safe rewrite pattern (restores named + default exports).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/examCatalog/national-research';
const NUM = Array.from({ length: 188 }, (_, i) => i + 1);

const F = {
  'servsafe-food-protection-manager': { time: '2 hours (90 questions)', cost: '~$100-$300 (course + exam)', salary: '$41,000-$112,000' },
  'osha-10-general-industry': { time: '10 hours of authorized training', cost: '~$30-$150', salary: '$30,000-$49,000' },
  'osha-30-general-industry': { time: '30 hours of authorized training', cost: '~$100-$400', salary: '$48,000-$114,000' },
  'casper-test': { time: '~90 minutes', cost: '~$10 + program distribution fees', salary: '$71,000-$174,000 (destination careers)' },
  'nmls-safe-mlo-national-test': { time: '190 minutes (140 questions, 136 scored)', cost: '~$110 + state fees', salary: '$41,000-$160,000' },
  'microsoft-ms-900': { time: '45 minutes (40-60 questions)', cost: '~$99', salary: '$38,000-$101,000' },
  'aapc-cpc': { time: '4 hours (100 questions, open book)', cost: '~$399-$499 + code books', salary: '$32,000-$79,000' },
  'ptcb-cpht': { time: '2 hours (90 questions)', cost: '~$129', salary: '$32,000-$53,000' },
  'epa-609-mvac-certification': { time: '60 minutes (25 questions)', cost: '~$20-$50', salary: '$33,000-$85,000' },
  'safe-agilist': { time: '90 minutes (45 questions)', cost: '~$100 (often included in the course)', salary: '$60,000-$170,000' },
  'eccouncil-ceh': { time: '4 hours (125 questions)', cost: '~$100-$1,199 depending on path', salary: '$71,000-$174,000' },
  'nic-barber-theory': { time: '2 hours (~100 questions)', cost: '~$50-$150 (state-set)', salary: '$27,000-$73,000' },
  'mblex': { time: '2 hours (100 questions)', cost: '~$195', salary: '$29,000-$94,000' },
  'google-cybersecurity-professional-certificate': { time: '3-6 months self-paced (~120-180 study hours)', cost: '~$200-$500 (Coursera subscription)', salary: '$71,000-$174,000 (destination market)' },
  'praxis-teaching-reading-k-12-5206': { time: '3 hours', cost: '~$130-$156', salary: '$44,000-$104,000' },
  'statefoodsafety-food-protection-manager': { time: '2 hours (90 questions)', cost: '~$100-$150', salary: '$41,000-$112,000' },
  'prince2-foundation': { time: '60 minutes (60 questions)', cost: '~$250-$400', salary: '$60,000-$170,000' },
  'aws-certified-data-engineer-associate': { time: '130 minutes (65 questions)', cost: '$150', salary: '$68,000-$172,000' },
  'microsoft-dp-900': { time: '45 minutes (40-60 questions)', cost: '~$99', salary: '$68,000-$172,000 (destination market)' },
  'microsoft-sc-900': { time: '45 minutes (40-60 questions)', cost: '~$99', salary: '$71,000-$174,000 (destination market)' },
  'praxis-teaching-reading-elementary-5205': { time: '3 hours', cost: '~$130-$156', salary: '$44,000-$104,000' },
  'isaca-cisa': { time: '4 hours (150 questions)', cost: '~$575 member / ~$760 non-member', salary: '$55,000-$169,000' },
  'danb-ice': { time: '75 minutes (100 questions)', cost: '~$145-$185', salary: '$34,000-$61,000' },
  'nic-barber-practical': { time: 'Performance session (state-set)', cost: '~$100-$200 (state-set)', salary: '$27,000-$73,000' },
  'nra-range-safety-officer': { time: '8-10 hours (one-day course)', cost: '~$50-$150', salary: 'Varies — often volunteer; no direct BLS series' },
  'praxis-special-education-foundational-knowledge-5355': { time: 'Computer-based selected-response exam', cost: '~$130-$156', salary: '$49,000-$109,000' },
  'aws-certified-ai-practitioner': { time: '130 minutes (65 questions)', cost: '$100', salary: '$68,000-$172,000 (destination market)' },
  'certified-kubernetes-administrator': { time: '2 hours (15-20 hands-on tasks)', cost: '$395 (incl. one retake)', salary: '$56,000-$157,000' },
  'microsoft-az-400': { time: '210 minutes (40-60 questions)', cost: '~$165', salary: '$84,000-$209,000' },
  'microsoft-md-102': { time: '120 minutes (40-60 questions)', cost: '~$165', salary: '$56,000-$157,000' },
  'salesforce-administrator': { time: '105 minutes (60 scored questions)', cost: '$200 (retake $100)', salary: '$84,000-$209,000 (adjacent platform series)' },
  'ase-xev-level-1-electrical-safety': { time: '60 minutes (45 questions)', cost: '~$55-$65', salary: '$33,000-$85,000' },
  'nha-cpct': { time: '1 hour 50 minutes (100 scored questions)', cost: '~$117-$160', salary: '$29,000-$49,000' },
  'danb-rhs': { time: '75 minutes (100 questions)', cost: '~$145-$185', salary: '$34,000-$61,000' },
  'comptia-project-plus': { time: '90 minutes (up to 90 questions)', cost: '~$358', salary: '$59,000-$170,000' },
  'nremt-aemt': { time: 'Up to 2 hours (computer-adaptive)', cost: '~$140-$150 + psychomotor fee', salary: '$31,000-$65,000' },
  'navta-approved-veterinary-assistant': { time: '90 minutes (100 questions)', cost: '~$100-$150', salary: '$27,000-$48,000' },
  'neha-certified-professional-food-safety': { time: '3 hours (125 questions)', cost: '~$350-$500', salary: '$41,000-$112,000' },
  'nsca-cscs': { time: '3.5 hours (220 questions, two sections)', cost: '~$475 member / ~$635 non-member', salary: '$27,000-$88,000' },
  'praxis-communication-and-literacy-combined-5753': { time: 'Two subtests in one sitting', cost: '~$130-$156', salary: '$44,000-$104,000' },
  'praxis-english-language-arts-content-knowledge-5038': { time: 'Computer-based selected-response exam', cost: '~$130-$156', salary: '$47,000-$108,000' },
  'series-79': { time: '5 hours (75 scored questions)', cost: '~$295', salary: '$62,000-$181,000' },
  'osha-510-construction-standards': { time: '30 hours (4-5 day course)', cost: '~$800-$1,200', salary: '$53,000-$126,000' },
  'aws-certified-devops-engineer-professional': { time: '180 minutes (75 questions)', cost: '$300', salary: '$84,000-$209,000' },
  'aws-certified-security-specialty': { time: '170 minutes (65 questions)', cost: '$300', salary: '$71,000-$174,000' },
  'certified-kubernetes-application-developer': { time: '2 hours (15-20 hands-on tasks)', cost: '$395 (incl. one retake)', salary: '$84,000-$209,000' },
  'comptia-ai-essentials': { time: '60 minutes (50 questions)', cost: '~$139', salary: '$68,000-$172,000 (destination market)' },
  'isaca-cism': { time: '4 hours (150 questions)', cost: '~$575 member / ~$760 non-member', salary: '$106,000-$276,000' },
  'google-associate-data-practitioner': { time: '2 hours (50-60 questions)', cost: '~$125', salary: '$68,000-$172,000 (destination market)' },
  'google-professional-data-engineer': { time: '2 hours (50-60 questions)', cost: '~$200', salary: '$68,000-$172,000' }
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
}

console.log('patched fields total: ' + patched);
console.log('files to rewrite: ' + [...perFile.keys()].join(', '));

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
