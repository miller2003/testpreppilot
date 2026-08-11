// Enrich the 50 batch-4 stub records: fill prerequisites / examMeta.questions /
// examMeta.time / examEssentials[3][1] / faqs[2].a with the researched values
// used in the depth files. Same safe rewrite pattern (named + default exports).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/examCatalog/national-research';
const NUM = Array.from({ length: 188 }, (_, i) => i + 1);

const F = {
  'servsafe-food-protection-manager': { prerequisites: 'None required by ServSafe; employers and health departments typically require the certification for food-safety-manager roles.', q: '90 (68 of 90, 75%, to pass)', time: '2 hours', validity: '5 years — renew by retaking the exam.', faq: 'ServSafe Food Protection Manager certification is valid for 5 years and is renewed by retaking the exam; there is no continuing-education renewal path.' },
  'osha-10-general-industry': { prerequisites: 'None — the 10-hour course is open to all workers.', q: 'No scored exam — completion-based training', time: '10 hours of training', validity: 'The card does not expire under OSHA rules.', faq: 'OSHA 10-hour cards do not expire under OSHA rules, though some employers and jurisdictions impose their own renewal expectations.' },
  'osha-30-general-industry': { prerequisites: 'None — the 30-hour course is designed for supervisors and safety-responsible workers.', q: 'No scored exam — completion-based training', time: '30 hours of training', validity: 'The card does not expire under OSHA rules.', faq: 'OSHA 30-hour cards do not expire under OSHA rules, though some employers and jurisdictions impose their own renewal expectations.' },
  'casper-test': { prerequisites: 'None — the test is taken as part of your program application.', q: 'No scored exam — scenario-based with typed responses', time: '~90 minutes', validity: 'Scores serve the admissions cycle you apply in.', faq: 'CASPer scores are reported as a percentile for the admissions cycle you apply in; programs decide how long they consider the result.' },
  'nmls-safe-mlo-national-test': { prerequisites: 'Pre-licensure education, the national test, the state test, a credit report and a criminal background check.', q: '140 (136 scored)', time: '190 minutes', validity: 'The test score is valid per the NMLS rules; the MLO licence renews annually.', faq: 'The SAFE national test score is valid for the period the NMLS rules specify; the MLO licence itself renews annually with continuing education.' },
  'microsoft-ms-900': { prerequisites: 'None — Fundamentals certifications have no prerequisites.', q: '40-60', time: '45 minutes', validity: 'Fundamentals certifications do not expire.', faq: 'Microsoft Fundamentals certifications such as MS-900 do not expire and require no renewal.' },
  'aapc-cpc': { prerequisites: 'None required by AAPC, though a coding education or experience is strongly recommended.', q: '100 (open book)', time: '4 hours', validity: 'Maintained with 36 CEUs every 2 years (or the annual update).', faq: 'The CPC is maintained with 36 continuing education units every two years, or the AAPC annual member update; the AAPC audits renewals.' },
  'ptcb-cpht': { prerequisites: 'Meet one PTCB eligibility route — such as a recognised education program or equivalent experience.', q: '90', time: '2 hours', validity: '2 years — renew with 20 CE hours (including 1 law hour) or a retake.', faq: 'The CPhT is valid for 2 years and renews with 20 continuing education hours (including at least 1 hour of pharmacy law) or by retaking the exam.' },
  'epa-609-mvac-certification': { prerequisites: 'None — the certification is earned by passing the Section 609 test.', q: '25', time: '60 minutes', validity: 'Valid for life.', faq: 'The Section 609 certification is valid for life and does not expire.' },
  'safe-agilist': { prerequisites: 'Successful completion of the Leading SAFe course.', q: '45', time: '90 minutes', validity: 'Confirm the current validity policy on the Scaled Agile site.', faq: 'SAFe Agilist validity follows Scaled Agile\'s current policy, which has changed across framework releases; confirm the renewal rules on the Scaled Agile site.' },
  'eccouncil-ceh': { prerequisites: 'EC-Council training or the approved self-study path; 2 years of security experience recommended.', q: '125', time: '4 hours', validity: '3 years — renew with 120 ECEs or a retake.', faq: 'The CEH is valid for 3 years and renews with 120 continuing education credits (ECEs) or by retaking; EC-Council audits renewals.' },
  'nic-barber-theory': { prerequisites: 'Completion of the state-required barber training hours and state board eligibility.', q: '~100', time: '2 hours', validity: 'The licence renews per the state board; the exam result serves initial licensure.', faq: 'Once licensed, the barber licence renews on your state board\'s cycle (commonly every 1-2 years); the theory exam result itself does not expire for initial licensure.' },
  'mblex': { prerequisites: 'Completion of an accredited massage program (commonly 600-1,000 hours) and state eligibility.', q: '100', time: '2 hours', validity: 'The MBLEx result is used for state licensure; the licence renews per state.', faq: 'The MBLEx result is used for state licensure, and the licence renews on your state\'s cycle; the exam result itself does not expire for licensing purposes.' },
  'google-cybersecurity-professional-certificate': { prerequisites: 'None — the certificate is open to beginners.', q: 'No single exam — graded courses and a capstone', time: '3-6 months self-paced', validity: 'The certificate does not expire.', faq: 'The Google Cybersecurity Certificate does not expire; its value is the demonstrated skills and portfolio you present to employers.' },
  'praxis-teaching-reading-k-12-5206': { prerequisites: 'State or program requirement for teaching licensure; ETS sets no prerequisites.', q: 'Selected-response and constructed-response items', time: '3 hours', validity: 'Praxis scores are valid for 10 years.', faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; the state sets the passing score.' },
  'statefoodsafety-food-protection-manager': { prerequisites: 'None required by StateFoodSafety; employers and health departments typically require the certification.', q: '90 (68 of 90, 75%, to pass)', time: '2 hours', validity: '5 years — renew by retaking.', faq: 'The StateFoodSafety Food Protection Manager certification is valid for 5 years and is renewed by retaking the exam.' },
  'prince2-foundation': { prerequisites: 'None — the Foundation has no prerequisites.', q: '60', time: '60 minutes', validity: 'The credential does not expire in the traditional sense.', faq: 'The PRINCE2 Foundation credential does not require renewal; the Practitioner is the applied follow-on.' },
  'aws-certified-data-engineer-associate': { prerequisites: 'Recommended: AWS experience with the data services.', q: '65', time: '130 minutes', validity: '3 years — recertify by exam.', faq: 'The AWS Data Engineer certification is valid for 3 years and is renewed by passing the current exam or the recertification path.' },
  'microsoft-dp-900': { prerequisites: 'None — Fundamentals certifications have no prerequisites.', q: '40-60', time: '45 minutes', validity: 'Fundamentals certifications do not expire.', faq: 'DP-900 is a Fundamentals certification that does not expire and requires no renewal.' },
  'microsoft-sc-900': { prerequisites: 'None — Fundamentals certifications have no prerequisites.', q: '40-60', time: '45 minutes', validity: 'Fundamentals certifications do not expire.', faq: 'SC-900 is a Fundamentals certification that does not expire and requires no renewal.' },
  'praxis-teaching-reading-elementary-5205': { prerequisites: 'State or program requirement for elementary licensure; ETS sets no prerequisites.', q: 'Selected-response and constructed-response items', time: '3 hours', validity: 'Praxis scores are valid for 10 years.', faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; the state sets the passing score.' },
  'isaca-cisa': { prerequisites: '5 years of relevant work experience (with education waivers).', q: '150', time: '4 hours', validity: '3 years — renew with 120 CPEs.', faq: 'The CISA is valid for 3 years and renews with 120 continuing professional education hours every three years; ISACA audits renewals.' },
  'danb-ice': { prerequisites: 'Completion of a dental-assisting education or the DANB-approved experience path.', q: '100', time: '75 minutes', validity: 'DANB certifications renew on a cycle with continuing education.', faq: 'DANB credentials such as the ICE component renew on the DANB cycle with continuing education; the ICE also counts toward the CDA.' },
  'nic-barber-practical': { prerequisites: 'Completion of the state-required barber training hours and state board eligibility.', q: 'Performance-based session', time: 'State-set', validity: 'The licence renews per the state board; the practical result serves initial licensure.', faq: 'Once licensed, the barber licence renews on your state board\'s cycle; the practical exam result itself does not expire for initial licensure.' },
  'nra-range-safety-officer': { prerequisites: 'None — the one-day course is open to all.', q: 'No written exam — course completion and evaluation', time: '8-10 hours (one day)', validity: 'The NRA certification does not expire.', faq: 'The NRA RSO certification is earned on course completion and does not expire; each range adds its own rules to the base credential.' },
  'praxis-special-education-foundational-knowledge-5355': { prerequisites: 'State or program requirement for special-education licensure; ETS sets no prerequisites.', q: 'Selected-response items', time: 'Computer-based exam', validity: 'Praxis scores are valid for 10 years.', faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; the state sets the passing score.' },
  'aws-certified-ai-practitioner': { prerequisites: 'Recommended: basic familiarity with AI concepts.', q: '65', time: '130 minutes', validity: '3 years — recertify by exam.', faq: 'The AWS AI Practitioner certification is valid for 3 years and is renewed by passing the current exam or the recertification path.' },
  'certified-kubernetes-administrator': { prerequisites: 'Recommended: hands-on Kubernetes experience.', q: '15-20 hands-on tasks', time: '2 hours', validity: '3 years — recertify by exam.', faq: 'The CKA is valid for 3 years and is renewed by passing the current exam; the purchase includes one free retake in most paths.' },
  'microsoft-az-400': { prerequisites: 'Recommended: AZ-104-level Azure experience.', q: '40-60', time: '210 minutes', validity: '1 year — renew with the renewal assessment.', faq: 'The AZ-400 Expert certification is valid for one year and is renewed by passing the free renewal assessment.' },
  'microsoft-md-102': { prerequisites: 'Recommended: Windows endpoint administration experience.', q: '40-60', time: '120 minutes', validity: '1 year — renew with the renewal assessment.', faq: 'The MD-102 Associate certification is valid for one year and is renewed by passing the free renewal assessment.' },
  'salesforce-administrator': { prerequisites: 'None required, though Salesforce experience is strongly recommended.', q: '60 scored', time: '105 minutes', validity: '3 years — renew by exam or maintenance.', faq: 'The Salesforce Administrator certification is valid for 3 years and is renewed by passing the current exam or the maintenance path.' },
  'ase-xev-level-1-electrical-safety': { prerequisites: 'None — the safety certification is open to technicians.', q: '45', time: '60 minutes', validity: '5 years — renew by recertification exam.', faq: 'The ASE xEV Level 1 certification is valid for 5 years and is renewed by passing the current recertification exam.' },
  'nha-cpct': { prerequisites: 'Completion of an approved training program or equivalent experience.', q: '100 scored', time: '1 hour 50 minutes', validity: '2 years — renew with CE credits or a retake.', faq: 'The CPCT/A is valid for 2 years and renews with continuing education credits or by retaking; NHA audits renewals.' },
  'danb-rhs': { prerequisites: 'Completion of a dental-assisting education or the DANB-approved experience path.', q: '100', time: '75 minutes', validity: 'DANB certifications renew on a cycle with continuing education.', faq: 'DANB credentials such as the RHS component renew on the DANB cycle with continuing education; the RHS also counts toward the CDA.' },
  'comptia-project-plus': { prerequisites: 'Recommended: 6-12 months of project experience.', q: 'Up to 90', time: '90 minutes', validity: '3 years — renew with CEUs or a retake.', faq: 'The Project+ certification is valid for 3 years and renews with continuing education units or by retaking; CompTIA audits renewals.' },
  'nremt-aemt': { prerequisites: 'Completion of an accredited AEMT program and the clinical requirements.', q: '~100-110 (adaptive)', time: 'Up to 2 hours', validity: '2 years — renew with continuing education or the recertification exam.', faq: 'NREMT AEMT certification is valid for 2 years and renews through the National Continued Competency Program or the recertification exam; state licensure runs alongside.' },
  'navta-approved-veterinary-assistant': { prerequisites: 'Completion of a NAVTA-approved veterinary-assistant training program.', q: '100', time: '90 minutes', validity: '2 years — renew with continuing education.', faq: 'The AVA is valid for 2 years and renews with continuing education through NAVTA.' },
  'neha-certified-professional-food-safety': { prerequisites: 'Food-safety work experience is strongly recommended.', q: '125', time: '3 hours', validity: '2 years — renew with continuing education.', faq: 'The CP-FS is valid for 2 years and renews with continuing education credits; NEHA audits renewals.' },
  'nsca-cscs': { prerequisites: 'Recommended: a bachelor\'s degree and strength-and-conditioning experience.', q: '220 (two sections)', time: '3.5 hours', validity: '3 years — renew with CEUs.', faq: 'The CSCS is valid for 3 years and renews with continuing education units; the NSCA audits renewals.' },
  'praxis-communication-and-literacy-combined-5753': { prerequisites: 'State or program requirement for licensure; ETS sets no prerequisites.', q: 'Two subtests: reading and writing', time: 'Two subtests in one sitting', validity: 'Praxis scores are valid for 10 years.', faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; each subtest has its own passing line.' },
  'praxis-english-language-arts-content-knowledge-5038': { prerequisites: 'State or program requirement for English licensure; ETS sets no prerequisites.', q: 'Selected-response items', time: 'Computer-based exam', validity: 'Praxis scores are valid for 10 years.', faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; the state sets the passing score.' },
  'series-79': { prerequisites: 'Sponsorship by a FINRA member firm (Form U4 filing) in most cases.', q: '75 scored', time: '5 hours', validity: 'The licence renews annually via Form U4 while registered.', faq: 'Series 79 registration renews annually through the Form U4 process while you are associated with a member firm; the exam result serves the initial registration.' },
  'osha-510-construction-standards': { prerequisites: 'Recommended: construction industry experience.', q: 'Final exam (standards application)', time: '30 hours (4-5 day course)', validity: 'The trainer authorisation is maintained with the 502/503 update courses.', faq: 'The 510 qualifies you for the Outreach trainer authorisation, which is maintained with the 502 (construction) and 503 (general industry) update courses.' },
  'aws-certified-devops-engineer-professional': { prerequisites: 'Recommended: AWS DevOps experience at the associate level.', q: '75', time: '180 minutes', validity: '3 years — recertify by exam.', faq: 'The AWS DevOps Engineer Professional certification is valid for 3 years and is renewed by passing the current exam or the recertification path.' },
  'aws-certified-security-specialty': { prerequisites: 'Recommended: 5+ years of security experience including AWS.', q: '65', time: '170 minutes', validity: '3 years — recertify by exam.', faq: 'The AWS Security Specialty certification is valid for 3 years and is renewed by passing the current exam or the recertification path.' },
  'certified-kubernetes-application-developer': { prerequisites: 'Recommended: hands-on Kubernetes development experience.', q: '15-20 hands-on tasks', time: '2 hours', validity: '3 years — recertify by exam.', faq: 'The CKAD is valid for 3 years and is renewed by passing the current exam; the purchase includes one free retake in most paths.' },
  'comptia-ai-essentials': { prerequisites: 'None — the literacy credential is open to all.', q: '50', time: '60 minutes', validity: 'The entry credential has no traditional renewal.', faq: 'The AI Essentials entry credential has no traditional renewal; confirm the current policy on the CompTIA site.' },
  'isaca-cism': { prerequisites: '5 years of security work including 3 years of management (with waivers).', q: '150', time: '4 hours', validity: '3 years — renew with 120 CPEs.', faq: 'The CISM is valid for 3 years and renews with 120 continuing professional education hours every three years; ISACA audits renewals.' },
  'google-associate-data-practitioner': { prerequisites: 'None required; recommended familiarity with data concepts.', q: '50-60', time: '2 hours', validity: '2 years — renew by exam or the renewal path.', faq: 'The Associate Data Practitioner certification is valid for 2 years and is renewed by passing the current version or the renewal path.' },
  'google-professional-data-engineer': { prerequisites: 'Recommended: hands-on data-engineering experience on Google Cloud.', q: '50-60', time: '2 hours', validity: '2 years — renew by exam or the renewal path.', faq: 'The Professional Data Engineer certification is valid for 2 years and is renewed by passing the current version or the renewal path.' }
};

const GENERIC = /Varies by (exam|credential|state)|see the official handbook|see the awarding body|to be confirmed/i;

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
  const set = (path, value) => {
    const toks = path.split('.').map((t) => {
      const idx = [...t.matchAll(/\[(\d+)\]/g)].map((x) => +x[1]);
      const name = t.replace(/\[\d+\]/g, '');
      return { name, idx };
    });
    let o = r;
    for (let i = 0; i < toks.length; i++) {
      const { name, idx } = toks[i];
      if (i < toks.length - 1) {
        if (o[name] == null) return;
        o = o[name];
        for (const ix of idx) { if (o[ix] == null) return; o = o[ix]; }
      } else {
        const holder = o[name];
        if (holder == null) return;
        if (idx.length === 0) { o[name] = value; }
        else {
          let h = holder;
          for (let j = 0; j < idx.length - 1; j++) { h = h[idx[j]]; if (h == null) return; }
          h[idx[idx.length - 1]] = value;
        }
      }
    }
    patched++;
  };
  if (typeof r.prerequisites === 'string' && GENERIC.test(r.prerequisites)) set('prerequisites', f.prerequisites);
  if (r.examMeta && typeof r.examMeta.questions === 'string' && GENERIC.test(r.examMeta.questions)) set('examMeta.questions', f.q);
  if (r.examMeta && typeof r.examMeta.time === 'string' && GENERIC.test(r.examMeta.time)) set('examMeta.time', f.time);
  if (Array.isArray(r.examEssentials) && r.examEssentials[3] && GENERIC.test(String(r.examEssentials[3][1]))) set('examEssentials[3][1]', f.validity);
  if (Array.isArray(r.faqs) && r.faqs[2] && typeof r.faqs[2].a === 'string' && GENERIC.test(r.faqs[2].a)) set('faqs[2].a', f.faq);
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
