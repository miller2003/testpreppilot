/**
 * One-off: replace the invented personal bylines in src/data/examCatalog/depth/*.mjs
 * with an honest editorial-desk attribution.
 *
 * We will not publish a fabricated person behind schema.org/Person markup. The desk
 * name is true, the review date is true, and the methodology line tells the reader
 * exactly how the numbers on the page were obtained.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve('src/data/examCatalog/depth');
const NAME = 'TestPrepPilot Editorial Desk';
const URL = '/editorial-policy';

/** desk label + methodology bio + verification line, per subject area */
const DESKS = {
  health: {
    title: 'Allied health & clinical credentials desk',
    bio: "This guide is compiled and maintained by our allied-health desk. We work from the certifying board's own published material — the current exam blueprint or content outline, the candidate handbook, the fee schedule and any pass-rate disclosure the board releases — rather than from coaching-school summaries, which routinely lag a blueprint revision by a year or more. Wage and outlook figures come from the Bureau of Labor Statistics occupational series that matches the role, and we name the SOC code so you can check it yourself. Where a board publishes no pass rate, we say so instead of estimating one.",
    verified: 'Blueprint weights, eligibility routes, fees and recertification rules were read from the certifying board\u2019s own documents, not from third-party course pages.'
  },
  fitness: {
    title: 'Fitness & nutrition credentials desk',
    bio: 'This guide is compiled and maintained by our fitness-credentials desk. Certification marketing in this field is unusually aggressive, so we check accreditation claims against the accrediting body or the parent company\u2019s own published register rather than repeating the seller\u2019s wording, and we flag it plainly when the two disagree. Exam mechanics, renewal requirements and fees come from the issuer\u2019s candidate handbook. Wage figures come from the Bureau of Labor Statistics series for fitness trainers and instructors, with the self-employment caveat stated rather than buried.',
    verified: 'Accreditation claims were checked against the accrediting body\u2019s register rather than the seller\u2019s marketing copy.'
  },
  accounting: {
    title: 'Accounting, tax & bookkeeping desk',
    bio: 'This guide is compiled and maintained by our accounting desk. Content comes from the examining body\u2019s current blueprint and candidate bulletin — AICPA and NASBA for the CPA, the IRS for the Special Enrolment Examination, and the certifying association\u2019s own handbook for the bookkeeping credentials. Pass rates are quoted only where the body publishes them, with the reporting window named, because quarter-to-quarter movement in this field is large enough to mislead. Wage data comes from the matching Bureau of Labor Statistics occupational series, cited by SOC code.',
    verified: 'Blueprint weights, window rules, scoring and fees were taken from the examining body\u2019s current bulletin for the stated testing year.'
  },
  tech: {
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor\u2019s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    verified: 'Objectives, exam codes, fees and retirement dates were taken from the vendor\u2019s current certification pages and checked for the revision date shown there.'
  },
  realestate: {
    title: 'Real estate licensing desk',
    bio: 'This guide is compiled and maintained by our licensing desk. Real estate rules are set state by state, so everything here traces to that state\u2019s own commission or department — the licensing statute and rules, the approved education requirement, the fee schedule, and the examination provider\u2019s candidate handbook for that jurisdiction. Pass rates are quoted only where the state or its exam vendor publishes them, split into national and state-law portions where the report separates the two, because the combined figure hides which half candidates actually fail.',
    verified: 'Education hours, fees, application steps and pass rates were taken from the state commission and its contracted exam provider for the stated period.'
  },
  safety: {
    title: 'Workplace safety & trades certifications desk',
    bio: 'This guide is compiled and maintained by our safety and trades desk. Federal programmes are described from the issuing agency\u2019s own material — OSHA\u2019s Outreach Training Program requirements and its published procedures, and the EPA\u2019s Section 608 regulation and certifying-organisation rules. This matters more than usual here, because both areas are crowded with resellers whose claims about card validity, expiry and employer acceptance do not match the agency\u2019s position. Where the agency deliberately publishes no figure — OSHA does not publish Outreach pass rates — we say that rather than invent one.',
    verified: 'Programme requirements, card rules and certification categories were taken from the issuing federal agency\u2019s own published material.'
  }
};

const MAP = {
  'aama-cma': 'health',
  'danb-cda': 'health',
  'certified-dietary-manager-cfpp': 'health',
  'afaa-certified-personal-trainer': 'fitness',
  'nasm-certified-nutrition-coach': 'fitness',
  'aipb-certified-bookkeeper': 'accounting',
  'nacpb-cpb': 'accounting',
  'enrolled-agent': 'accounting',
  'cpa-exam': 'accounting',
  'cisco-ccna-cybersecurity': 'tech',
  'cisco-ccnp-cybersecurity': 'tech',
  'cisco-ccst-cybersecurity': 'tech',
  'comptia-linux-plus': 'tech',
  'microsoft-ai-900': 'tech',
  'microsoft-ai-901': 'tech',
  'microsoft-az-104': 'tech',
  'microsoft-az-140': 'tech',
  'microsoft-az-204': 'tech',
  'microsoft-az-305': 'tech',
  'microsoft-az-500': 'tech',
  'microsoft-az-700': 'tech',
  'microsoft-az-900': 'tech',
  'texas-real-estate-license': 'realestate',
  'california-real-estate-license': 'realestate',
  'florida-real-estate-license': 'realestate',
  'osha-10-construction': 'safety',
  'osha-30-construction': 'safety',
  'epa-608-certification': 'safety'
};

/** JS single-quoted string literal, escaping what matters. */
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

/** Find `author: {` and return [start, endExclusive] of the whole property incl. trailing comma. */
function findAuthorBlock(src) {
  const m = /\n(\s*)author:\s*\{/.exec(src);
  if (!m) return null;
  const braceStart = src.indexOf('{', m.index);
  let depth = 0;
  let inStr = null;
  for (let i = braceStart; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        let end = i + 1;
        if (src[end] === ',') end++;
        return [m.index + 1, end, m[1]];
      }
    }
  }
  return null;
}

/** Replace the whole `reviewedBy: <literal>,` property. */
function replaceReviewedBy(src, value, indent) {
  const m = /\n(\s*)reviewedBy:\s*/.exec(src);
  if (!m) return src;
  const valStart = m.index + m[0].length;
  let i = valStart;
  const c = src[i];
  if (c === "'" || c === '"' || c === '`') {
    const quote = c;
    i++;
    for (; i < src.length; i++) {
      if (src[i] === '\\') { i++; continue; }
      if (src[i] === quote) { i++; break; }
    }
  } else {
    while (i < src.length && src[i] !== ',' && src[i] !== '\n') i++;
  }
  let end = i;
  if (src[end] === ',') end++;
  return src.slice(0, m.index + 1) + `${indent}reviewedBy: ${q(value)},` + src.slice(end);
}

let changed = 0;
const report = [];
for (const [slug, deskKey] of Object.entries(MAP)) {
  const file = path.join(DIR, `${slug}.mjs`);
  if (!fs.existsSync(file)) { report.push(`MISSING ${slug}`); continue; }
  const desk = DESKS[deskKey];
  let src = fs.readFileSync(file, 'utf8');

  const found = findAuthorBlock(src);
  if (!found) { report.push(`NO AUTHOR BLOCK ${slug}`); continue; }
  const [s, e, indent] = found;
  const oldName = (/name:\s*['"`](.*?)['"`]/.exec(src.slice(s, e)) || [, ''])[1];

  const block =
    `${indent}author: {\n` +
    `${indent}  name: ${q(NAME)},\n` +
    `${indent}  title: ${q(desk.title)},\n` +
    `${indent}  bio: ${q(desk.bio)},\n` +
    `${indent}  url: ${q(URL)}\n` +
    `${indent}},`;

  src = src.slice(0, s) + block + src.slice(e);
  src = replaceReviewedBy(src, desk.verified, indent);
  fs.writeFileSync(file, src);
  changed++;
  report.push(`${slug.padEnd(34)} ${deskKey.padEnd(11)} was: ${oldName}`);
}

console.log(report.join('\n'));
console.log(`\nrewritten: ${changed}/${Object.keys(MAP).length}`);
