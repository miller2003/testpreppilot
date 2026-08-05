// ─────────────────────────────────────────────────────────────────────
//  Research dossiers — merged index
//
//  Each dossier is ONE state template researched once (deep prose written
//  at template level) plus per-state overrides in `states`.
//
//  CRITICAL SEMANTICS:
//    states[CODE] present  → that jurisdiction really issues this credential
//    states[CODE] absent   → it does NOT. The page is still generated (we keep
//                            the long-tail URL) but must say so honestly.
//
//  See RESEARCH_SCHEMA.md for the field contract.
// ─────────────────────────────────────────────────────────────────────

import batch1 from './batch1.mjs';
import batch2 from './batch2.mjs';
import batch3 from './batch3.mjs';
import batch4 from './batch4.mjs';
import batch5 from './batch5.mjs';
import batch6 from './batch6.mjs';
import batch7 from './batch7.mjs';
import batch8 from './batch8.mjs';
import batch9 from './batch9.mjs';
import batch10 from './batch10.mjs';

// ── Normalisation ───────────────────────────────────────────────────
// A few dossiers came back with `timeline` / `route` as plain string arrays
// instead of objects. Normalise on load so the render layer only ever sees one
// shape, and so future research batches can't break the templates.

const TIME_WORDS = /\b(day|days|week|weeks|month|months|year|years|hour|hours|immediate|same.day|ongoing|varies)\b/i;

function normaliseTimeline(list) {
  if (!Array.isArray(list)) return [];
  return list.map((t) => {
    if (t && typeof t === 'object') return { stage: t.stage || '', duration: t.duration || '' };
    const s = String(t || '').trim();
    // "Complete the course (2–3 months)" → stage + duration
    const m = s.match(/^(.*?)\s*\(([^()]*)\)\s*\.?$/);
    if (m && TIME_WORDS.test(m[2])) return { stage: m[1].trim(), duration: m[2].trim() };
    return { stage: s, duration: '' };
  }).filter((t) => t.stage);
}

function normaliseRoute(list) {
  if (!Array.isArray(list)) return [];
  return list.map((r) => {
    if (r && typeof r === 'object') return { title: r.title || '', description: r.description || '' };
    const s = String(r || '').trim();
    // "Pass the exam — book through PSI…" → title + description
    const dash = s.split(/\s+[—–]\s+/);
    if (dash.length > 1) return { title: dash[0].trim(), description: dash.slice(1).join(' — ').trim() };
    const colon = s.match(/^([^:]{6,70}):\s+(.+)$/);
    if (colon) return { title: colon[1].trim(), description: colon[2].trim() };
    const stop = s.match(/^([^.!?]{6,90}[.!?])\s+(.+)$/);
    if (stop) return { title: stop[1].replace(/[.!?]$/, '').trim(), description: stop[2].trim() };
    return { title: s.replace(/\.$/, ''), description: '' };
  }).filter((r) => r.title);
}

// The site covers 50 states + DC. Territories occasionally slipped into the
// research output; drop them so `states` can never contain a code with no page.
const VALID_CODES = new Set([
  'AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM',
  'NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA',
  'WV','WI','WY'
]);

function normalise(d) {
  const states = {};
  for (const [code, v] of Object.entries(d.states || {})) {
    const c = String(code).toUpperCase();
    if (VALID_CODES.has(c)) states[c] = v;
  }
  return {
    ...d,
    timeline: normaliseTimeline(d.timeline),
    route: normaliseRoute(d.route),
    faqs: (Array.isArray(d.faqs) ? d.faqs : []).filter((f) => f && f.q && f.a),
    states,
    reciprocity: d.reciprocity || { compact: null, note: '' }
  };
}

export const dossiers = [
  ...batch1, ...batch2, ...batch3, ...batch4, ...batch5,
  ...batch6, ...batch7, ...batch8, ...batch9, ...batch10
].map(normalise);

export const dossierByKey = Object.fromEntries(dossiers.map((d) => [d.key, d]));

/** Facts for one template in one jurisdiction, or null if unresearched. */
export function factsFor(templateKey, stateCode) {
  const d = dossierByKey[templateKey];
  if (!d) return null;
  const code = String(stateCode || '').toUpperCase();
  const s = d.states?.[code] || null;
  return {
    offered: Boolean(s),
    agency: s?.agency || d.defaultAgency || null,
    agencyUrl: s?.agencyUrl || d.sourceUrl || null,
    fee: s?.fee || null,
    stateNote: s?.note || null,
    compactMember: s?.compactMember === true,
    confidence: d.confidence || 'medium',
    verified: d.verified === true
  };
}

/** Every jurisdiction that actually issues a given credential. */
export function statesOffering(templateKey) {
  return Object.keys(dossierByKey[templateKey]?.states || {}).sort();
}

export const researchStats = (() => {
  let instances = 0;
  let withFee = 0;
  let withNote = 0;
  let compactMembers = 0;
  for (const d of dossiers) {
    for (const code of Object.keys(d.states || {})) {
      instances++;
      if (d.states[code].fee) withFee++;
      if (d.states[code].note) withNote++;
      if (d.states[code].compactMember === true) compactMembers++;
    }
  }
  return {
    dossiers: dossiers.length,
    instances,
    withFee,
    withNote,
    compactMembers,
    highConfidence: dossiers.filter((d) => d.confidence === 'high').length
  };
})();

export default dossiers;
