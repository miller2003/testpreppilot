// ─────────────────────────────────────────────────────────────────────
//  TestPrepPilot — master exam catalog
//
//  Merges three sources into one flat, de-duplicated array:
//    1. national/*.mjs      — national & multi-state exams (research output)
//    2. stateTemplates.mjs  — credentials issued state-by-state, expanded
//                             across 50 states + DC
//    3. src/data/credentials.ts — the hand-written, fully-researched pages
//                             (referenced by slug only, so this module stays
//                              dependency-free and node-runnable)
//
//  Every entry gets `status`:
//    'complete' → a finished guide already exists at `href`
//    'stub'     → an empty page is generated at /exams/<slug>, awaiting content
// ─────────────────────────────────────────────────────────────────────

import admissionsAcademic from './national/admissions-academic.mjs';
import alliedHealth from './national/allied-health.mjs';
import beautyFoodSecurityRecreation from './national/beauty-food-security-recreation.mjs';
import behavioralHealth from './national/behavioral-health.mjs';
import educationTeaching from './national/education-teaching.mjs';
import engineeringDesign from './national/engineering-design.mjs';
import financeSecurities from './national/finance-securities.mjs';
import healthcareClinical from './national/healthcare-clinical.mjs';
import insuranceRisk from './national/insurance-risk.mjs';
import legalGovernment from './national/legal-government.mjs';
import projectBusiness from './national/project-business.mjs';
import publicSafety from './national/public-safety.mjs';
import safetyEnvironment from './national/safety-environment.mjs';
import technology from './national/technology.mjs';
import tradesConstruction from './national/trades-construction.mjs';
import transportationAviationMaritime from './national/transportation-aviation-maritime.mjs';

import { stateTemplates } from './stateTemplates.mjs';
import { jurisdictions, jurisdictionByCode } from './jurisdictions.mjs';
import { examCategories, categoryById, CATEGORY_MERGES } from './categories.mjs';
import { dossierByKey, factsFor, researchStats } from './research/index.mjs';
import {
  nationalFor,
  programFor,
  isPublishable,
  nationalStats
} from './national-research/index.mjs';
import { compactById } from './compacts.mjs';
import { isReleased } from './release-manifest.mjs';

const nationalSources = [
  admissionsAcademic, alliedHealth, beautyFoodSecurityRecreation, behavioralHealth,
  educationTeaching, engineeringDesign, financeSecurities, healthcareClinical,
  insuranceRisk, legalGovernment, projectBusiness, publicSafety,
  safetyEnvironment, technology, tradesConstruction, transportationAviationMaritime
];

// ── Already-written guides (src/data/credentials.ts) ────────────────
// Listed here so the directory can link straight to the finished page and
// never generate a competing stub.
export const completedGuides = [
  { slug: 'texas-real-estate-license',      name: 'Texas Real Estate Sales Agent License', short: 'TX Real Estate',   category: 'real-estate',       group: 'Real Estate Licensing',   type: 'License',       stateCode: 'TX', href: '/paths/texas-real-estate-license',      blurb: 'Complete 180 hours of TREC-approved education, pass the background check and the two-part state exam, then find a sponsoring broker.' },
  { slug: 'california-real-estate-license', name: 'California Real Estate Salesperson License', short: 'CA Real Estate', category: 'real-estate',    group: 'Real Estate Licensing',   type: 'License',       stateCode: 'CA', href: '/paths/california-real-estate-license', blurb: 'Three 45-hour DRE courses, a 150-question in-person exam at 70%, Live Scan fingerprints and a sponsoring broker to activate.' },
  { slug: 'florida-real-estate-license',    name: 'Florida Real Estate Sales Associate License', short: 'FL Real Estate', category: 'real-estate',   group: 'Real Estate Licensing',   type: 'License',       stateCode: 'FL', href: '/paths/florida-real-estate-license',    blurb: 'Sixty-three hours of FREC-approved pre-licensing, a 100-question state exam at 75% and activation under a licensed broker.' },
  { slug: 'enrolled-agent',                 name: 'Enrolled Agent (Special Enrollment Examination)', short: 'EA',       category: 'accounting',        group: 'Tax Practice',            type: 'Certification', href: '/paths/enrolled-agent',                 blurb: 'The IRS credential granting unlimited representation rights, earned by passing all three parts of the Special Enrollment Examination.' },
  { slug: 'cpa-exam',                       name: 'Uniform CPA Examination',                  short: 'CPA',            category: 'accounting',        group: 'Public Accounting',       type: 'Exam',          href: '/paths/cpa-exam',                       blurb: 'Three Core sections plus one Discipline section under CPA Evolution, taken alongside the 150-credit-hour education requirement.' },
  { slug: 'osha-10-construction',           name: 'OSHA 10-Hour Construction',                short: 'OSHA 10',        category: 'workplace-safety',  group: 'OSHA Outreach & Trainer', type: 'Training',      href: '/paths/osha-10-construction',           blurb: 'Ten-hour entry-level outreach course covering the Focus Four hazards, required on many construction sites and by several states.' },
  { slug: 'osha-30-construction',           name: 'OSHA 30-Hour Construction',                short: 'OSHA 30',        category: 'workplace-safety',  group: 'OSHA Outreach & Trainer', type: 'Training',      href: '/paths/osha-30-construction',           blurb: 'Supervisor-level outreach training covering hazard recognition, OSHA standards and site safety management responsibilities.' },
  { slug: 'epa-608-certification',          name: 'EPA Section 608 Technician Certification', short: 'EPA 608',        category: 'trades',            group: 'HVAC & Refrigeration',    type: 'Certification', href: '/paths/epa-608-certification',          blurb: 'Federally mandated certification for anyone who maintains, services or disposes of equipment containing regulated refrigerants.' }
];

const completedSlugs = new Set(completedGuides.map((g) => g.slug));

// ── Build the state matrix ──────────────────────────────────────────
function fill(pattern, state) {
  return pattern
    .replaceAll('{state}', state.slug)
    .replaceAll('{State}', state.name)
    .replaceAll('{CODE}', state.code);
}

function buildStateExams() {
  const rows = [];
  for (const tpl of stateTemplates) {
    const dossier = dossierByKey[tpl.key] || null;
    for (const state of jurisdictions) {
      if (tpl.skip?.includes(state.code)) continue;
      if (tpl.replacedBy?.[state.code]) continue; // a finished guide covers this

      // Verified facts from the research dossier. `offered:false` means this
      // jurisdiction does NOT issue the credential — we keep the page (long-tail
      // traffic) but the template must say so plainly instead of implying it exists.
      const facts = factsFor(tpl.key, state.code);
      const offered = facts ? facts.offered : null; // null = not yet researched

      rows.push({
        slug: fill(tpl.slug, state),
        name: fill(tpl.name, state),
        short: tpl.short ? fill(tpl.short, state) : undefined,
        category: tpl.category,
        group: tpl.group,
        type: tpl.type,
        blurb: offered === false && dossier
          ? `${state.name} does not issue a state-level ${dossier.name.toLowerCase()}. Here is what actually applies in ${state.name} and how the credential works in the states that do require it.`
          : fill(tpl.blurb, state),
        aka: (tpl.aka || []).map((a) => fill(a, state)),
        scope: 'state',
        stateCode: state.code,
        stateName: state.name,
        stateSlug: state.slug,
        region: state.region,
        templateKey: tpl.key,
        researched: Boolean(facts),
        offered,
        facts
      });
    }
  }
  return rows;
}

// ── Merge + de-duplicate (first file wins) ──────────────────────────
function buildCatalog() {
  const seen = new Map();
  const push = (row) => {
    if (!row?.slug || seen.has(row.slug) || completedSlugs.has(row.slug)) return;
    seen.set(row.slug, row);
  };

  for (const src of nationalSources) {
    for (const row of src) {
      // Deep research output, when it exists, upgrades the row from a stub
      // blurb to a full guide (quick answer, exam mechanics, costs, FAQs).
      const record = nationalFor(row.slug);
      const rich = isPublishable(record);
      push({
        ...row,
        aka: row.aka || [],
        scope: 'national',
        status: 'stub',
        href: `/exams/${row.slug}`,
        researched: rich,
        record: rich ? record : null,
        blurb: rich && record.tagline ? record.tagline : row.blurb
      });
    }
  }

  for (const row of buildStateExams()) {
    push({ ...row, status: 'stub', href: `/exams/${row.slug}` });
  }

  const stubs = [...seen.values()];
  const complete = completedGuides.map((g) => ({
    ...g,
    aka: g.aka || [],
    scope: g.stateCode ? 'state' : 'national',
    stateName: g.stateCode ? jurisdictionByCode[g.stateCode]?.name : undefined,
    stateSlug: g.stateCode ? jurisdictionByCode[g.stateCode]?.slug : undefined,
    status: 'complete'
  }));

  // Apply the 2026-09-02 category consolidation (see categories.mjs) so every
  // consumer — directory, category pages, filters, stats — sees the merged
  // taxonomy no matter what the raw research files say.
  return [...complete, ...stubs].map((row) =>
    CATEGORY_MERGES[row.category]
      ? { ...row, category: CATEGORY_MERGES[row.category] }
      : row
  );
}

// Build the FULL catalog once (used by the content manager to list every
// page regardless of release state), then derive the build-time view that
// only includes pages whose release date has arrived. The 8 hand-written
// flagship guides are always live (they route through credentials.ts and
// must stay listed in the directory).
const allExamsFull = buildCatalog();
export const allExams = allExamsFull.filter(
  (e) => isReleased(e.slug) || completedSlugs.has(e.slug)
);
export { allExamsFull };

export const stubExams = allExams.filter((e) => e.status === 'stub');
export const nationalExams = allExams.filter((e) => e.scope === 'national');
export const stateExams = allExams.filter((e) => e.scope === 'state');

const bySlug = new Map(allExams.map((e) => [e.slug, e]));
export function getExamBySlug(slug) {
  return bySlug.get(slug);
}

export function getExamsByCategory(categoryId) {
  return allExams.filter((e) => e.category === categoryId);
}

/**
 * Everything a state-exam page needs: the catalog row, the researched dossier
 * (deep prose written once at template level), the compact that governs
 * cross-state portability, and the peer jurisdictions that also issue it.
 */
export function getExamDetail(slug) {
  const exam = bySlug.get(slug);
  if (!exam) return null;

  // ── national exams: rich record + the program dossier for its body ──
  if (exam.scope === 'national') {
    const record = exam.record || null;
    const program = record ? programFor(record, exam.body) : null;

    const siblings = record
      ? allExams
          .filter((e) => e.scope === 'national' && e.slug !== slug && e.body === exam.body && e.researched)
          .sort((a, b) => a.name.localeCompare(b.name))
      : [];

    const relatedResolved = (record?.relatedSlugs || [])
      .map((s) => bySlug.get(s))
      .filter(Boolean)
      .filter((e) => e.slug !== slug);

    return {
      exam,
      record,
      program,
      siblings,
      relatedResolved,
      dossier: null,
      compact: null,
      peers: [],
      memberStates: []
    };
  }

  const dossier = exam.templateKey ? dossierByKey[exam.templateKey] || null : null;
  if (!dossier) return { exam, dossier: null, compact: null, peers: [], memberStates: [] };

  const compactId = dossier.reciprocity?.compact || null;
  const compact = compactId ? compactById[compactId] || null : null;

  const offeringCodes = Object.keys(dossier.states || {});
  const memberStates = offeringCodes
    .filter((c) => dossier.states[c].compactMember === true)
    .map((c) => jurisdictionByCode[c])
    .filter(Boolean);

  // Sibling pages for the same credential in other states (for internal linking).
  const peers = allExams
    .filter((e) => e.templateKey === exam.templateKey && e.slug !== slug && e.offered !== false)
    .sort((a, b) => (a.stateName || '').localeCompare(b.stateName || ''));

  return {
    exam,
    dossier,
    compact,
    compactNote: dossier.reciprocity?.note || null,
    peers,
    memberStates,
    offeringCount: offeringCodes.length
  };
}

export function getExamsByState(stateCode) {
  const code = String(stateCode || '').toUpperCase();
  return allExams.filter((e) => e.stateCode === code);
}

/** Category → ordered groups → exams, for rendering the directory. */
export function buildDirectory() {
  return examCategories
    .map((cat) => {
      const items = allExams.filter((e) => e.category === cat.id);
      const groupMap = new Map();
      for (const item of items) {
        if (!groupMap.has(item.group)) groupMap.set(item.group, []);
        groupMap.get(item.group).push(item);
      }
      const groups = [...groupMap.entries()]
        .map(([name, exams]) => ({
          name,
          exams: exams.sort((a, b) => a.name.localeCompare(b.name))
        }))
        .sort((a, b) => b.exams.length - a.exams.length || a.name.localeCompare(b.name));
      return { ...cat, total: items.length, groups };
    })
    .filter((cat) => cat.total > 0)
    .sort((a, b) => a.order - b.order);
}

export const catalogStats = {
  total: allExams.length,
  complete: allExams.filter((e) => e.status === 'complete').length,
  stubs: stubExams.length,
  national: nationalExams.length,
  state: stateExams.length,
  categories: new Set(allExams.map((e) => e.category)).size,
  jurisdictions: jurisdictions.length,
  // research coverage
  researched: allExams.filter((e) => e.researched).length,
  offered: allExams.filter((e) => e.offered === true).length,
  notOffered: allExams.filter((e) => e.offered === false).length,
  dossiers: researchStats.dossiers,
  // national research coverage
  nationalResearched: allExams.filter((e) => e.scope === 'national' && e.researched).length,
  nationalPrograms: nationalStats.programs,
  nationalRecords: nationalStats.exams
};

export { examCategories, categoryById, jurisdictions, jurisdictionByCode, stateTemplates };
export { dossierByKey, factsFor, researchStats } from './research/index.mjs';
export {
  nationalFor,
  programFor,
  programByBody,
  nationalStats,
  isPublishable
} from './national-research/index.mjs';
export { compacts, compactById, compactFor } from './compacts.mjs';
