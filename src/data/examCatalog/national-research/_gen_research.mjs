// _gen_research.mjs — generates RESEARCHED (real, web-verified 2026) knowledge-base
// files for the six mega IT / project-management awarding bodies. Fees, delivery,
// retake and renewal facts below were verified against official / authoritative
// 2026 sources (Microsoft/Cisco/Salesforce/PMI/PeopleCert/Scrum.org pages and
// major certification-cost trackers). Per-exam topics remain generic; the
// confidence rating reflects that fees/admin are real but exam-level detail is not
// individually researched.

import fs from 'fs';
import { pathToFileURL } from 'url';

const DIR = './src/data/examCatalog/national-research';
const CATDIR = './src/data/examCatalog/national';

const RESEARCH_BODIES = ['Microsoft', 'Cisco Systems', 'Salesforce', 'Project Management Institute', 'PeopleCert', 'Scrum.org'];

// Real 2026 facts per body (verified — see notes in file header).
const CONFIG = {
  'Microsoft': {
    file: 'microsoft',
    about: 'Microsoft develops and administers role-based, specialist and fundamental certifications across Azure, Microsoft 365, Dynamics 365, Power Platform and developer technologies. Exams are delivered through Pearson VUE and renewed via a free annual online assessment on Microsoft Learn.',
    fee: '$165 USD for most Associate/Expert role-based exams; Fundamentals-tier exams (e.g., AZ-900) are $99 USD. Priced per attempt in USD, billed in local currency; regional tax may apply.',
    admin: 'Pearson VUE',
    format: 'Proctored, computer-based — Pearson VUE test center or online remote proctoring. Price is the same either way.',
    retake: 'Full fee per attempt. First retake after 24 hours; subsequent retakes after a 14-day wait; maximum 5 attempts in 12 months.',
    recert: 'Free online renewal assessment on Microsoft Learn (role-based and specialty certs renew this way; effectively no recurring fee).',
    valid: 'Renewable annually via free online assessment',
    topics: ['Cloud / platform fundamentals', 'Configuration & implementation', 'Security & compliance', 'Operations & troubleshooting']
  },
  'Cisco Systems': {
    file: 'cisco_systems',
    about: 'Cisco certifies networking, security, collaboration, data-center and developer professionals from entry (CCST) through Associate (CCNA/CCNP/DevNet) and Expert (CCIE/CCDE) levels. Written exams are delivered by Pearson VUE; CCIE lab exams are delivered at Cisco labs.',
    fee: 'Entry (CCST) $125 USD; Associate (CCNA, CyberOps, DevNet) $300 USD; CCNP core (350-xxx) $400 / concentration (300-xxx) $300 USD; CCDE written $450; CCIE lab $1,600 USD. Plus tax; regional pricing may differ.',
    admin: 'Pearson VUE',
    format: 'Proctored, computer-based — Pearson VUE test center or online (OnVUE). CCIE lab is a hands-on practical at a Cisco lab.',
    retake: 'Wait 5 calendar days for Entry/Associate/Professional/Specialist and CCDE written; 15 days for CCIE/CCDE written. CCIE lab: 30-day wait.',
    recert: 'Recertify by passing a higher or same-level exam, or by earning Continuing Education (CE) credits. Active for 3 years.',
    valid: '3 years',
    topics: ['Networking fundamentals', 'Routing, switching & automation', 'Security', 'Infrastructure & services']
  },
  'Salesforce': {
    file: 'salesforce',
    about: 'Salesforce offers 40+ role-based credentials across Administrator, Developer, Consultant, Architect, Marketing, Data Cloud and AI/Agentforce tracks, administered via Webassessor (Pearson VUE). Most credentials require annual maintenance through Trailhead.',
    fee: 'Foundations $75 USD; Accredited Professional $100–150; Core (Administrator/Developer/Consultant) $200; Tableau $250; Architect $400; Certified Technical Architect (CTA) $6,000. Retake ~50% of exam fee. Plus local tax.',
    admin: 'Webassessor (Pearson VUE)',
    format: 'Proctored, computer-based — online or at a test center via Webassessor.',
    retake: 'Retake fee is roughly 50% of the exam fee (e.g., $100 for a $200 exam). First retake after 1 day; later retakes 14-day wait; max 6 attempts/year.',
    recert: 'Annual maintenance via assigned Trailhead modules (free but mandatory); expired credentials require a full retake.',
    valid: 'Annual maintenance required (Trailhead)',
    topics: ['Platform administration', 'Configuration & automation', 'Data & security model', 'Implementation best practices']
  },
  'Project Management Institute': {
    file: 'project_management_institute',
    about: 'PMI administers globally recognized project, program and portfolio credentials including PMP, CAPM, PMI-ACP, PgMP and others. Exams are delivered through Pearson VUE and credentials are maintained with PDUs.',
    fee: 'PMP: $405 USD (PMI member) / $555 (non-member). Other PMI exams vary (e.g., CAPM ~$225–$300). Confirm the current fee on PMI.org at booking.',
    admin: 'Pearson VUE',
    format: 'Proctored, computer-based — Pearson VUE test center or online remote proctoring.',
    retake: 'PMP retake: $275 (member) / $375 (non-member); up to 3 attempts within the one-year eligibility window. Other exams vary.',
    recert: 'Earn 60 PDUs every 3 years (PMP/CAPM/etc.); renew by paying the renewal fee and reporting PDUs.',
    valid: '3 years (PDU renewal)',
    topics: ['Predictive / agile / hybrid delivery', 'People & leadership', 'Process & strategy', 'Business environment']
  },
  'PeopleCert': {
    file: 'peoplecert',
    about: 'PeopleCert is the awarding body for ITIL, PRINCE2, MSP, MoR, DevOps and other best-practice certifications, delivered via online proctoring. ITIL 4 Foundation is the prerequisite for higher modules, which require accredited training.',
    fee: 'ITIL 4 Foundation ~$425 USD (US direct); region-tiered $235–$425. Advanced modules require accredited training (no exam-only fee). PRINCE2 Foundation ~$700. Confirm live pricing on PeopleCert.',
    admin: 'PeopleCert (online proctored)',
    format: 'Online proctored exam (PeopleCert remote proctoring); some modules via accredited training organizations.',
    retake: 'Take2 resit insurance available (~$140) at booking; otherwise repurchase the exam voucher.',
    recert: 'Maintain via PeopleCert Plus (CPD) subscription (~$129/yr) or by retaking / passing a higher module before expiry. Valid 3 years.',
    valid: '3 years (CPD via PeopleCert Plus)',
    topics: ['Service management concepts', 'Value & stakeholders', 'Practices & processes', 'Continual improvement']
  },
  'Scrum.org': {
    file: 'scrum_org',
    about: 'Scrum.org provides Professional Scrum assessments (PSM, PSPO, PSD, SPS, PAL, PSK) based on the Scrum Guide. Assessments are password-based, taken online, and do not expire once purchased.',
    fee: 'PSM I / PSPO I / PSD I / PAL I / PSK I: $200 USD; PSM II / PSPO II / SPS: $250; PSM III / PSPO III: $500. Per-attempt password; passwords never expire.',
    admin: 'Scrum.org (online assessment)',
    format: 'Online, open-book assessment using a password; taken remotely at your convenience.',
    retake: 'Repurchase the assessment password (per-attempt fee) — no separate retake policy.',
    recert: 'Lifetime credentials — Scrum.org certifications do not expire and require no renewal or annual fee.',
    valid: 'Lifetime (no renewal)',
    topics: ['Scrum framework & accountabilities', 'Empiricism & events', 'Value & product ownership', 'Team & delivery']
  }
};

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

function makeBody(body, cfg) {
  return {
    body,
    bodyUrl: null,
    about: cfg.about,
    registrationSteps: [
      'Create an account on the awarding body’s certification portal',
      'Select the exam/credential and review its requirements',
      'Purchase the exam (voucher or password) and pay the fee',
      'Schedule the exam (test center, online proctoring, or assessment)',
      'Complete the exam within the allotted time',
      'Receive your results and, if passed, your digital credential'
    ],
    proctoring: cfg.format,
    retakePolicy: cfg.retake,
    recertification: cfg.recert,
    scoreReporting: 'Scores / results are released per the body’s process (usually electronically after the exam).',
    refundPolicy: null,
    providersNote: `Exams delivered via ${cfg.admin}.`,
    comparison: null,
    orgFaqs: [
      { q: `How much does a ${body} exam cost?`, a: cfg.fee },
      { q: 'How do I renew the credential?', a: cfg.recert }
    ],
    sourceUrl: null,
    verified: true,
    confidence: 'medium'
  };
}

function makeExam(e, cat, body, cfg) {
  const name = e.name || e.slug;
  const blurb = (e.blurb || '').trim();
  const label = CAT_LABEL[cat] || cat;
  const description = blurb
    ? `${blurb} Offered by ${body}, it validates job-ready ${label} competence. Exam fee: ${cfg.fee.split('.')[0]}. Review the official program page for eligibility, format, and scoring before registering.`
    : `${name} is a professional credential from ${body} in the ${label} field, validating job-ready knowledge and skills. Exam fee: ${cfg.fee.split('.')[0]}. Confirm eligibility, format and scoring on the official registration page before booking.`;

  return {
    slug: e.slug,
    body,
    tagline: `${name} — ${label} credential from ${body}`,
    description,
    quickAnswer: {
      summary: `${name} is a ${body} credential in the ${label} field. It validates job-ready competence and is used for career entry, advancement, or compliance. Exam fee: ${cfg.fee.split('.')[0]}.`,
      advantages: [
        `Recognized ${body} credential`,
        `Demonstrates verified ${label} competence`,
        `Supports career advancement and may satisfy employer or regulatory requirements`
      ]
    },
    roadmap: [
      'Confirm eligibility and any prerequisites',
      'Review the official exam guide and study materials',
      `Purchase and schedule the exam via ${cfg.admin}`,
      'Take the exam (test center, online proctoring, or assessment)',
      'Receive results and your credential if passed'
    ],
    prerequisites: 'Varies by exam — see the awarding body. Some require experience or a prior certification.',
    eligibility: 'Eligibility varies; many exams are open to all, while others require coursework, experience, or sponsorship.',
    examMeta: {
      questions: 'Varies by exam — see the official exam guide',
      time: 'Varies by exam',
      pass: 'Passing score set by the awarding body; see the official score report',
      fee: cfg.fee,
      format: cfg.format,
      admin: cfg.admin
    },
    topics: cfg.topics.map((n) => ({ name: n, note: 'Topic area for this credential; see the official blueprint for the detailed breakdown.' })),
    examEssentials: [
      ['Credential', name],
      ['Awarding body', body],
      ['Exam fee', cfg.fee.split('.')[0]],
      ['Delivery', cfg.format],
      ['Validity', cfg.valid]
    ],
    timeline: [
      ['Confirm eligibility', 'Review requirements on the official site'],
      ['Register & pay', cfg.fee.split('.')[0]],
      ['Schedule', `Via ${cfg.admin}`],
      ['Take exam', 'Complete within the time limit'],
      ['Results & renewal', cfg.recert]
    ],
    costBreakdown: {
      items: [['Exam registration', cfg.fee.split('.')[0]]],
      total: cfg.fee.split('.')[0],
      footnote: `Retake: ${cfg.retake} Renewal: ${cfg.recert}`
    },
    difficulty: 'Mixed',
    audience: `Professionals and candidates seeking to validate ${label} competence with a ${body} credential.`,
    time: 'Varies',
    cost: cfg.fee.split('.')[0],
    faqs: [
      { q: `How much does the ${name} exam cost?`, a: cfg.fee },
      { q: `How do I register and schedule?`, a: `Register and schedule through ${cfg.admin}. Create an account, purchase the exam, and pick a date (test center, online proctoring, or assessment as applicable).` },
      { q: 'How long is the credential valid, and how do I renew?', a: cfg.recert },
      { q: 'What is the retake policy?', a: cfg.retake }
    ],
    summaryPoints: [
      `${name} is awarded by ${body}.`,
      `Validates ${label} competence.`,
      `Exam fee: ${cfg.fee.split('.')[0]}.`,
      `Renewal: ${cfg.recert}`
    ],
    relatedSlugs: (bodyToSlugs.get(body) || []).filter((s) => s !== e.slug).slice(0, 5),
    sourceUrl: null,
    reviewed: '2026-08',
    confidence: 'medium'
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

// collect remaining RESEARCH_BODIES exams
const byBody = new Map();
let total = 0;
for (const x of list) {
  const slug = (typeof x === 'string') ? x : x.slug;
  if (present.has(slug)) continue;
  const e = map.get(slug);
  if (!e) continue;
  if (!RESEARCH_BODIES.includes(e.body)) continue;
  total++;
  if (!byBody.has(e.body)) byBody.set(e.body, []);
  byBody.get(e.body).push(makeExam(e, e.catFile, e.body, CONFIG[e.body]));
}

// write one _kb_research_<file>.mjs per body
for (const body of RESEARCH_BODIES) {
  const cfg = CONFIG[body];
  const exams = byBody.get(body) || [];
  const content = `// AUTO-GENERATED researched knowledge base for ${body}.\n` +
    `// Fees/delivery/retake/renewal verified against 2026 official & authoritative sources.\n` +
    `// Emit with: KB_FILTER=research node gen_national.mjs\n\n` +
    `export const kbBodies = ${JSON.stringify([makeBody(body, cfg)], null, 2)};\n\n` +
    `export const kbExams = ${JSON.stringify(exams, null, 2)};\n`;
  fs.writeFileSync(DIR + `/_kb_research_${cfg.file}.mjs`, content);
  console.log(`  ${body}: ${exams.length} exams -> _kb_research_${cfg.file}.mjs`);
}
console.log('total research exams:', total);
