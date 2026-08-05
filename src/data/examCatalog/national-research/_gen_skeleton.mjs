// _gen_skeleton.mjs — generates generic (low/medium confidence) knowledge-base
// chunks for all REMAINING national exams, EXCLUDING RESEARCH_BODIES which are
// authored separately with real web-researched data.
//
// Output (all under ./src/data/examCatalog/national-research):
//   _kb_bodies_skel.mjs        — generic dossier for every non-research awarding body
//   _kb_exams_skel_<cat>.mjs   — generic exam records per catalog category
//
// These are honest "we don't fabricate specifics" placeholders: fees, question
// counts, durations and pass scores are described as varying and pointed at the
// official body, while descriptions/taglines/FAQs use the real catalog name,
// body and blurb. confidence = 'medium' for large bodies, 'low' otherwise.

import fs from 'fs';
import { pathToFileURL } from 'url';

const DIR = './src/data/examCatalog/national-research';
const CATDIR = './src/data/examCatalog/national';

const RESEARCH_BODIES = new Set([
  'Microsoft', 'Cisco Systems', 'Salesforce',
  'Project Management Institute', 'PeopleCert', 'Scrum.org'
]);

// Top-30 awarding bodies (by remaining exam count) get 'medium' confidence;
// the rest get 'low'. Research bodies are handled elsewhere.
const BIG_BODIES = new Set([
  'ETS', 'Federal Aviation Administration',
  'National Institute for Automotive Service Excellence (ASE)',
  'Microsoft', 'U.S. Coast Guard National Maritime Center',
  'OSHA Training Institute Education Centers', 'The Institutes',
  'National-Interstate Council of State Boards of Cosmetology',
  'National Fire Protection Association', 'International Code Council (ICC)',
  'NCCER', 'National Council of Examiners for Engineering and Surveying (NCEES)',
  'Financial Industry Regulatory Authority (FINRA)', 'Prometric',
  'National Board for Professional Teaching Standards',
  'National Institute for Certification in Engineering Technologies (NICET)',
  'American Society for Quality',
  'Association of Boards of Certification (Water Professionals International)',
  'PeopleCert', 'American Board of Professional Psychology',
  'American Osteopathic Association, Bureau of Osteopathic Specialists',
  'Scaled Agile, Inc.', 'State Lead Agencies under U.S. EPA 40 CFR Part 171',
  'Board of Pharmacy Specialties (BPS)', 'Scrum.org',
  'Project Management Institute', 'Salesforce',
  'U.S. Coast Guard-Approved Training Providers',
  'Pharmacy Technician Certification Board (PTCB)',
  'American Culinary Federation', 'North American Technician Excellence (NATE)'
]);

const CAT_LABEL = {
  'admissions-academic': 'Academic Admissions',
  'allied-health': 'Allied Health',
  'beauty-food-security-recreation': 'Beauty, Food, Security & Recreation',
  'behavioral-health': 'Behavioral Health',
  'education-teaching': 'Education & Teaching',
  'engineering-design': 'Engineering & Design',
  'finance-securities': 'Finance & Securities',
  'healthcare-clinical': 'Healthcare (Clinical)',
  'insurance-risk': 'Insurance & Risk',
  'legal-government': 'Legal & Government',
  'project-business': 'Project & Business',
  'public-safety': 'Public Safety',
  'safety-environment': 'Safety & Environment',
  'technology': 'Technology',
  'trades-construction': 'Trades & Construction',
  'transportation-aviation-maritime': 'Transportation, Aviation & Maritime'
};

function topicsFor(cat) {
  const common = {
    'technology': ['Foundational concepts', 'Configuration & deployment', 'Security & compliance', 'Operations & troubleshooting'],
    'trades-construction': ['Trade fundamentals', 'Tools & materials', 'Codes & safety', 'Hands-on procedures'],
    'transportation-aviation-maritime': ['Regulations & procedures', 'Systems & operations', 'Safety & emergency', 'Navigation & logistics'],
    'allied-health': ['Anatomy & physiology', 'Clinical procedures', 'Patient care & safety', 'Documentation & ethics'],
    'healthcare-clinical': ['Clinical knowledge', 'Diagnosis & treatment', 'Patient safety', 'Professional practice'],
    'education-teaching': ['Subject content', 'Instruction & pedagogy', 'Assessment', 'Classroom management'],
    'finance-securities': ['Markets & products', 'Regulation & ethics', 'Analysis & valuation', 'Client & risk management'],
    'insurance-risk': ['Products & coverage', 'Underwriting', 'Regulation & ethics', 'Claims & risk management'],
    'engineering-design': ['Engineering fundamentals', 'Design & analysis', 'Codes & standards', 'Project execution'],
    'behavioral-health': ['Theory & models', 'Assessment & diagnosis', 'Intervention', 'Ethics & law'],
    'public-safety': ['Legal authority & procedures', 'Emergency response', 'Investigation', 'Community & safety'],
    'safety-environment': ['Hazards & controls', 'Regulations & standards', 'Monitoring & remediation', 'Emergency response'],
    'legal-government': ['Substantive law / procedure', 'Research & writing', 'Ethics & rules', 'Practice & compliance'],
    'project-business': ['Methodology & frameworks', 'Planning & execution', 'Stakeholders & communication', 'Value & governance'],
    'beauty-food-security-recreation': ['Core techniques', 'Sanitation & safety', 'Client / guest service', 'Regulations'],
    'admissions-academic': ['Subject proficiency', 'Test-taking strategy', 'Academic readiness', 'Application process']
  };
  const names = common[cat] || ['Core knowledge', 'Applied skills', 'Best practices', 'Assessment'];
  return names.map((n) => ({ name: n, note: 'Topic area tested on the exam; see the official blueprint for the detailed breakdown.' }));
}

function difficultyFor(cat) {
  const map = {
    'technology': 'Intermediate', 'trades-construction': 'Hands-on / Applied',
    'transportation-aviation-maritime': 'Regulated / Specialized', 'allied-health': 'Applied',
    'healthcare-clinical': 'Advanced', 'education-teaching': 'Mixed',
    'finance-securities': 'Regulated', 'insurance-risk': 'Regulated',
    'engineering-design': 'Advanced', 'behavioral-health': 'Graduate-level',
    'public-safety': 'Specialized', 'safety-environment': 'Applied',
    'legal-government': 'Specialized', 'project-business': 'Mixed',
    'beauty-food-security-recreation': 'Entry to Applied', 'admissions-academic': 'Academic'
  };
  return map[cat] || 'Mixed';
}

function adminFor(body) {
  if (/pearson/i.test(body)) return 'Pearson VUE';
  if (/prometric/i.test(body)) return 'Prometric';
  return body; // the awarding body administers its own exam
}

function makeBody(body) {
  const big = BIG_BODIES.has(body);
  return {
    body,
    bodyUrl: null,
    about: `${body} is the awarding organization for the credentials listed on this page. It develops, administers, and maintains professional certification and examination programs within its field. Specific eligibility, fees, and renewal terms vary by individual credential — always confirm on the official program page.`,
    registrationSteps: [
      'Visit the awarding body’s official website and create an account',
      'Select the credential and review its specific requirements',
      'Complete any required eligibility (education, experience, or training)',
      'Pay the registration fee',
      'Schedule the exam at a test center or online',
      'Take the exam and receive your results'
    ],
    proctoring: 'Proctored, computer-based delivery (test center or remote online proctoring), varying by exam.',
    retakePolicy: 'Varies by credential — most bodies permit retakes after a waiting period and full or partial fee.',
    recertification: 'Varies; many credentials require renewal every 2–3 years via continuing education or a recertification exam.',
    scoreReporting: 'Scores are reported per the body’s timeline, typically electronically after the exam.',
    refundPolicy: null,
    providersNote: 'Exams are delivered through the awarding body and/or authorized test providers such as Pearson VUE or Prometric where applicable.',
    comparison: null,
    orgFaqs: [
      { q: `How do I register for a ${body} credential?`, a: 'Register through the official website, select your exam, pay the fee, and schedule a date.' },
      { q: 'How do I renew a credential?', a: 'Renewal policies vary by credential; check the specific program page for requirements and cycles.' }
    ],
    sourceUrl: null,
    verified: false,
    confidence: big ? 'medium' : 'low'
  };
}

function makeExam(e, cat) {
  const name = e.name || e.slug;
  const body = e.body;
  const blurb = (e.blurb || '').trim();
  const label = CAT_LABEL[cat] || cat;
  const big = BIG_BODIES.has(body);
  const conf = big ? 'medium' : 'low';
  const rel = (bodyToSlugs.get(body) || []).filter((s) => s !== e.slug).slice(0, 5);

  const description = blurb
    ? `${blurb} Offered by ${body}, it is designed for candidates who need to demonstrate verified competence in the ${label} field. The credential is commonly used for career entry, advancement, regulatory compliance, or employer requirements. Candidates should review the official handbook for eligibility, exam format, and scoring before registering.`
    : `${name} is a professional credential administered by ${body} in the ${label} field. It validates job-ready knowledge and skills for candidates seeking career entry, advancement, or compliance. Review the official program page for eligibility, exam format, fees, and scoring details before registering.`;

  return {
    slug: e.slug,
    body,
    tagline: `${name} — ${label} credential from ${body}`,
    description,
    quickAnswer: {
      summary: `${name} is a professional credential administered by ${body}. It validates job-ready knowledge and skills in the ${label} field and is used for career entry, advancement, or compliance.`,
      advantages: [
        `Recognized credential from ${body}`,
        `Demonstrates verified competence in ${label}`,
        `Supports career advancement and may satisfy licensing or employer requirements`
      ]
    },
    roadmap: [
      'Confirm you meet any eligibility or prerequisites',
      'Review the official handbook and study materials',
      'Register and pay through the awarding body or authorized provider',
      'Schedule and take the exam (test center or online proctoring)',
      'Receive your score and, if passed, your credential'
    ],
    prerequisites: 'Varies by credential — see the awarding body. Some require education, experience, or a prior certification.',
    eligibility: 'Eligibility varies; many credentials are open to all, while others require coursework, work experience, or sponsorship.',
    examMeta: {
      questions: 'Varies by exam — see the official handbook',
      time: 'Varies by exam',
      pass: 'Passing score set by the awarding body; see the official score report',
      fee: 'Varies by location and currency — confirm on the official registration page',
      format: 'Proctored, computer-based (test center or online remote proctoring)',
      admin: adminFor(body)
    },
    topics: topicsFor(cat),
    examEssentials: [
      ['Credential', name],
      ['Awarding body', body],
      ['Exam format', 'Proctored, computer-based'],
      ['Validity', 'Varies by credential (commonly 2–3 years)'],
      ['Languages', 'Varies — see awarding body']
    ],
    timeline: [
      ['Confirm eligibility', 'Review requirements on the official site'],
      ['Register', 'Create an account and pay the fee'],
      ['Schedule', 'Pick a date at a test center or online'],
      ['Take exam', 'Complete assigned sections within the time limit'],
      ['Results', 'Score released per the body’s timeline']
    ],
    costBreakdown: {
      items: [['Exam registration', 'Varies — confirm with the certifying body']],
      total: 'Varies',
      footnote: 'Fees change; verify the current amount on the official registration page before scheduling.'
    },
    difficulty: difficultyFor(cat),
    audience: `Professionals and candidates seeking to validate ${label} competence.`,
    time: 'Varies',
    cost: 'Varies',
    faqs: [
      { q: `How do I register for the ${name} exam?`, a: `Register through ${body}'s official portal or an authorized test provider (e.g., Pearson VUE or Prometric where applicable). Create an account, select the exam, pay the fee, and schedule a date.` },
      { q: 'How much does the exam cost?', a: 'Fees vary by location and currency. Confirm the current fee on the official registration page before scheduling.' },
      { q: 'How long is the credential valid, and how do I renew?', a: `Validity varies by credential (commonly 2–3 years). Renewal usually requires continuing education or a recertification exam — see ${body}'s policy.` },
      { q: 'What if I do not pass?', a: `Most bodies allow retakes after a waiting period and payment of the full or partial fee. Check ${body}'s retake policy before rescheduling.` }
    ],
    summaryPoints: [
      `${name} is awarded by ${body}.`,
      `Validates job-ready competence in ${label}.`,
      'Registration is through the awarding body or an authorized test provider.',
      'Renewal and retake policies vary — confirm before scheduling.'
    ],
    relatedSlugs: rel,
    sourceUrl: null,
    reviewed: '2026-08',
    confidence: conf
  };
}

// ── load master catalog ────────────────────────────────────────────
const catFiles = fs.readdirSync(CATDIR).filter((f) => f.endsWith('.mjs'));
const map = new Map();
for (const f of catFiles) {
  const mod = await import(pathToFileURL(process.cwd() + '/' + CATDIR + '/' + f).href);
  const arr = mod.default;
  if (!Array.isArray(arr)) continue;
  for (const e of arr) if (e && e.slug) map.set(e.slug, { ...e, catFile: f.replace('.mjs', '') });
}

// ── remaining (gap) slugs, minus already-published ─────────────────
const data = JSON.parse(fs.readFileSync('./missing_national.json', 'utf8'));
const list = data.list || [];
const batchFiles = fs.readdirSync(DIR).filter((f) => /^batch\d+\.mjs$/.test(f));
const present = new Set();
for (const bf of batchFiles) {
  const t = fs.readFileSync(DIR + '/' + bf, 'utf8');
  const re = /slug["']?\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(t))) present.add(m[1]);
}

const bodyToSlugs = new Map();
for (const [slug, e] of map) {
  if (!bodyToSlugs.has(e.body)) bodyToSlugs.set(e.body, []);
  bodyToSlugs.get(e.body).push(slug);
}

const examsByCat = new Map();
const bodiesSet = new Set();
let skippedResearch = 0, skippedPresent = 0, unmapped = 0, total = 0;
for (const x of list) {
  const slug = (typeof x === 'string') ? x : x.slug;
  if (present.has(slug)) { skippedPresent++; continue; }
  const e = map.get(slug);
  if (!e) { unmapped++; continue; }
  if (RESEARCH_BODIES.has(e.body)) { skippedResearch++; continue; }
  total++;
  const cat = e.catFile;
  if (!examsByCat.has(cat)) examsByCat.set(cat, []);
  examsByCat.get(cat).push(makeExam(e, cat));
  bodiesSet.add(e.body);
}

// ── write bodies skeleton ──────────────────────────────────────────
const bodies = [...bodiesSet].map((b) => makeBody(b));
fs.writeFileSync(
  DIR + '/_kb_bodies_skel.mjs',
  `// AUTO-GENERATED skeleton program dossiers (generic, low/medium confidence).\n` +
  `// Excludes RESEARCH_BODIES (authored separately with real web-researched data).\n` +
  `// Always loaded by gen_national.mjs; supplies the body dossier for every\n` +
  `// non-researched exam chunk.\n\n` +
  `export const kbBodies = ${JSON.stringify(bodies, null, 2)};\n`
);

// ── write per-category exam chunks ─────────────────────────────────
for (const [cat, exams] of examsByCat) {
  fs.writeFileSync(
    DIR + `/_kb_exams_skel_${cat}.mjs`,
    `// AUTO-GENERATED skeleton exam records for ${CAT_LABEL[cat] || cat} (generic, low/medium confidence).\n` +
    `// Excludes RESEARCH_BODIES. Emit with: KB_FILTER=${cat} node gen_national.mjs\n\n` +
    `export const kbExams = ${JSON.stringify(exams, null, 2)};\n`
  );
}

console.log('skeleton exams emitted :', total);
console.log(' skipped (research)    :', skippedResearch);
console.log(' skipped (present)     :', skippedPresent);
console.log(' unmapped (no catalog) :', unmapped);
console.log(' bodies (dossiers)     :', bodies.length);
console.log(' categories            :', examsByCat.size);
