// ─────────────────────────────────────────────────────────────────────
//  National exam research — merge + normalise layer
//
//  Each batchNN.mjs exports { programs, exams }:
//    programs  → one dossier per certifying body (registration flow, retake
//                policy, recertification, proctoring, cert-ladder comparison)
//    exams     → one record per exam slug (quick answer, exam meta, topic
//                weights, costs, timeline, FAQs, summary)
//
//  Researchers write slightly different shapes (string arrays vs object
//  arrays, {label,value} vs [k,v]). Everything is coerced here so the render
//  layer only ever sees one shape.
// ─────────────────────────────────────────────────────────────────────

// ==AUTO_BATCH_IMPORTS_START==
import b01 from './batch01.mjs';
import b02 from './batch02.mjs';
import b03 from './batch03.mjs';
import b04 from './batch04.mjs';
import b05 from './batch05.mjs';
import b06 from './batch06.mjs';
import b07 from './batch07.mjs';
import b08 from './batch08.mjs';
import b09 from './batch09.mjs';
import b10 from './batch10.mjs';
import b11 from './batch11.mjs';
import b12 from './batch12.mjs';
import b13 from './batch13.mjs';
import b14 from './batch14.mjs';
import b15 from './batch15.mjs';
import b16 from './batch16.mjs';
import b17 from './batch17.mjs';
import b18 from './batch18.mjs';
import b19 from './batch19.mjs';
import b20 from './batch20.mjs';
import b21 from './batch21.mjs';
import b22 from './batch22.mjs';
import b23 from './batch23.mjs';
import b24 from './batch24.mjs';
import b25 from './batch25.mjs';
import b26 from './batch26.mjs';
import b27 from './batch27.mjs';
import b28 from './batch28.mjs';
import b29 from './batch29.mjs';
import b30 from './batch30.mjs';
import b31 from './batch31.mjs';
import b32 from './batch32.mjs';
import b33 from './batch33.mjs';
import b34 from './batch34.mjs';
import b35 from './batch35.mjs';
import b36 from './batch36.mjs';
import b37 from './batch37.mjs';
import b38 from './batch38.mjs';
import b39 from './batch39.mjs';
import b40 from './batch40.mjs';
import b41 from './batch41.mjs';
import b42 from './batch42.mjs';
import b43 from './batch43.mjs';
import b44 from './batch44.mjs';
import b45 from './batch45.mjs';
import b46 from './batch46.mjs';
import b47 from './batch47.mjs';
import b48 from './batch48.mjs';
import b49 from './batch49.mjs';
import b50 from './batch50.mjs';
import b51 from './batch51.mjs';
import b52 from './batch52.mjs';
import b53 from './batch53.mjs';
import b54 from './batch54.mjs';
import b55 from './batch55.mjs';
import b56 from './batch56.mjs';
import b57 from './batch57.mjs';
import b58 from './batch58.mjs';
import b59 from './batch59.mjs';
import b60 from './batch60.mjs';
import b61 from './batch61.mjs';
import b62 from './batch62.mjs';
import b63 from './batch63.mjs';
import b64 from './batch64.mjs';
import b65 from './batch65.mjs';
import b66 from './batch66.mjs';
import b67 from './batch67.mjs';
import b68 from './batch68.mjs';
import b69 from './batch69.mjs';
import b70 from './batch70.mjs';
import b71 from './batch71.mjs';
import b72 from './batch72.mjs';
import b73 from './batch73.mjs';
import b74 from './batch74.mjs';
import b75 from './batch75.mjs';
import b76 from './batch76.mjs';
import b77 from './batch77.mjs';
import b78 from './batch78.mjs';
import b79 from './batch79.mjs';
import b80 from './batch80.mjs';
import b81 from './batch81.mjs';
import b82 from './batch82.mjs';
import b83 from './batch83.mjs';
import b84 from './batch84.mjs';
import b85 from './batch85.mjs';
import b86 from './batch86.mjs';
import b87 from './batch87.mjs';
import b88 from './batch88.mjs';
import b89 from './batch89.mjs';
import b90 from './batch90.mjs';
import b91 from './batch91.mjs';
import b92 from './batch92.mjs';
import b93 from './batch93.mjs';
import b94 from './batch94.mjs';
import b95 from './batch95.mjs';
import b96 from './batch96.mjs';
import b97 from './batch97.mjs';
import b98 from './batch98.mjs';
import b99 from './batch99.mjs';
import b100 from './batch100.mjs';
import b101 from './batch101.mjs';
import b102 from './batch102.mjs';
import b103 from './batch103.mjs';
import b104 from './batch104.mjs';
import b105 from './batch105.mjs';
import b106 from './batch106.mjs';
import b107 from './batch107.mjs';
import b108 from './batch108.mjs';
import b109 from './batch109.mjs';
import b110 from './batch110.mjs';
import b111 from './batch111.mjs';
import b112 from './batch112.mjs';
import b113 from './batch113.mjs';
import b114 from './batch114.mjs';
import b115 from './batch115.mjs';
import b116 from './batch116.mjs';
import b117 from './batch117.mjs';
import b118 from './batch118.mjs';
import b119 from './batch119.mjs';
import b120 from './batch120.mjs';
import b121 from './batch121.mjs';
import b122 from './batch122.mjs';
import b123 from './batch123.mjs';
import b124 from './batch124.mjs';
import b125 from './batch125.mjs';
import b126 from './batch126.mjs';
import b127 from './batch127.mjs';
import b128 from './batch128.mjs';
import b129 from './batch129.mjs';
import b130 from './batch130.mjs';
import b131 from './batch131.mjs';
import b132 from './batch132.mjs';
import b133 from './batch133.mjs';
import b134 from './batch134.mjs';
import b135 from './batch135.mjs';
import b136 from './batch136.mjs';
import b137 from './batch137.mjs';
import b138 from './batch138.mjs';
import b139 from './batch139.mjs';
import b140 from './batch140.mjs';
import b141 from './batch141.mjs';
import b142 from './batch142.mjs';
import b143 from './batch143.mjs';
import b144 from './batch144.mjs';
import b145 from './batch145.mjs';
import b146 from './batch146.mjs';
import b147 from './batch147.mjs';
import b148 from './batch148.mjs';
import b149 from './batch149.mjs';
import b150 from './batch150.mjs';
import b151 from './batch151.mjs';
import b152 from './batch152.mjs';
import b153 from './batch153.mjs';
import b154 from './batch154.mjs';
import b155 from './batch155.mjs';
import b156 from './batch156.mjs';
import b157 from './batch157.mjs';
import b158 from './batch158.mjs';
import b159 from './batch159.mjs';
import b160 from './batch160.mjs';
import b161 from './batch161.mjs';
import b162 from './batch162.mjs';
import b163 from './batch163.mjs';
import b164 from './batch164.mjs';
import b165 from './batch165.mjs';
import b166 from './batch166.mjs';
import b167 from './batch167.mjs';
import b168 from './batch168.mjs';
import b169 from './batch169.mjs';
import b170 from './batch170.mjs';
import b171 from './batch171.mjs';
import b172 from './batch172.mjs';
import b173 from './batch173.mjs';
import b174 from './batch174.mjs';
import b175 from './batch175.mjs';
import b176 from './batch176.mjs';
import b177 from './batch177.mjs';
import b178 from './batch178.mjs';
import b179 from './batch179.mjs';
import b180 from './batch180.mjs';
import b181 from './batch181.mjs';
import b182 from './batch182.mjs';
import b183 from './batch183.mjs';
import b184 from './batch184.mjs';
import b185 from './batch185.mjs';
import b186 from './batch186.mjs';
import b187 from './batch187.mjs';
import b188 from './batch188.mjs';
// ==AUTO_BATCH_IMPORTS_END==

// ==AUTO_BATCH_ARRAY_START==
const BATCHES = [
  b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60, b61, b62, b63, b64, b65, b66, b67, b68, b69, b70, b71, b72, b73, b74, b75, b76, b77, b78, b79, b80, b81, b82, b83, b84, b85, b86, b87, b88, b89, b90, b91, b92, b93, b94, b95, b96, b97, b98, b99, b100, b101, b102, b103, b104, b105, b106, b107, b108, b109, b110, b111, b112, b113, b114, b115, b116, b117, b118, b119, b120, b121, b122, b123, b124, b125, b126, b127, b128, b129, b130, b131, b132, b133, b134, b135, b136, b137, b138, b139, b140, b141, b142, b143, b144, b145, b146, b147, b148, b149, b150, b151, b152, b153, b154, b155, b156, b157, b158, b159, b160, b161, b162, b163, b164, b165, b166, b167, b168, b169, b170, b171, b172, b173, b174, b175, b176, b177, b178, b179, b180,   b181, b182, b183, b184, b185, b186, b187, b188
];
// ==AUTO_BATCH_ARRAY_END==

// ── coercion helpers ────────────────────────────────────────────────
const str = (v) => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim());
const arr = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

const TIME_WORDS = /\b(day|days|week|weeks|month|months|year|years|hour|hours|minute|minutes|immediate|same[- ]day|ongoing|varies)\b/i;

/** [{stage,duration}] — tolerates plain strings like "Study (6–8 weeks)". */
function normTimeline(list) {
  return arr(list)
    .map((t) => {
      if (t && typeof t === 'object') return { stage: str(t.stage || t.step || t.name), duration: str(t.duration || t.time) };
      const s = str(t);
      const m = s.match(/^(.*?)\s*[（(]([^()（）]*)[)）]\s*\.?$/);
      if (m && TIME_WORDS.test(m[2])) return { stage: m[1].trim(), duration: m[2].trim() };
      const dash = s.split(/\s+[—–]\s+/);
      if (dash.length > 1 && TIME_WORDS.test(dash[dash.length - 1])) {
        return { stage: dash.slice(0, -1).join(' — ').trim(), duration: dash[dash.length - 1].trim() };
      }
      return { stage: s, duration: '' };
    })
    .filter((t) => t.stage);
}

/** [{title,description,subSteps,duration,note}] */
function normSteps(list) {
  return arr(list)
    .map((s) => {
      if (s && typeof s === 'object') {
        return {
          title: str(s.title || s.name || s.step),
          description: str(s.description || s.detail || s.text),
          subSteps: arr(s.subSteps).map(str).filter(Boolean),
          duration: str(s.duration),
          note: str(s.note)
        };
      }
      const t = str(s);
      const dash = t.split(/\s+[—–]\s+/);
      if (dash.length > 1) return { title: dash[0].trim(), description: dash.slice(1).join(' — ').trim(), subSteps: [], duration: '', note: '' };
      const colon = t.match(/^([^:]{4,70}):\s+(.+)$/);
      if (colon) return { title: colon[1].trim(), description: colon[2].trim(), subSteps: [], duration: '', note: '' };
      return { title: t, description: '', subSteps: [], duration: '', note: '' };
    })
    .filter((s) => s.title);
}

/** [{name,weight,note}] */
function normTopics(list) {
  return arr(list)
    .map((t) => {
      if (t && typeof t === 'object') {
        return { name: str(t.name || t.topic || t.domain), weight: str(t.weight || t.percent), note: str(t.note || t.detail) };
      }
      const s = str(t);
      const m = s.match(/^(.*?)\s*[—–-]?\s*(\d{1,3}\s*%)\s*$/);
      if (m) return { name: m[1].trim().replace(/[—–-]\s*$/, ''), weight: m[2].replace(/\s+/g, ''), note: '' };
      return { name: s, weight: '', note: '' };
    })
    .filter((t) => t.name);
}

/** [[label, value]] — tolerates {label,value} / {k,v}. */
function normEssentials(list) {
  return arr(list)
    .map((e) => {
      if (Array.isArray(e)) return [str(e[0]), str(e[1])];
      if (e && typeof e === 'object') return [str(e.label ?? e.k ?? e.name), str(e.value ?? e.v ?? e.detail)];
      const s = str(e);
      const i = s.indexOf(':');
      return i > 0 ? [s.slice(0, i).trim(), s.slice(i + 1).trim()] : ['', s];
    })
    .filter((e) => e[1]);
}

/** {items:[{item,fee}], total, footnote} */
function normCost(c) {
  if (!c) return null;
  const src = Array.isArray(c) ? { items: c } : c;
  const items = arr(src.items)
    .map((i) => {
      if (i && typeof i === 'object') return { item: str(i.item || i.name || i.label), fee: str(i.fee || i.cost || i.value) };
      const s = str(i);
      const m = s.match(/^(.*?)[\s—–-]+(\$[\d,]+.*)$/);
      return m ? { item: m[1].trim(), fee: m[2].trim() } : { item: s, fee: '' };
    })
    .filter((i) => i.item);
  if (!items.length) return null;
  return { items, total: str(src.total), footnote: str(src.footnote) };
}

function normFaqs(list) {
  return arr(list)
    .map((f) => (f && typeof f === 'object' ? { q: str(f.q || f.question), a: str(f.a || f.answer) } : null))
    .filter((f) => f && f.q && f.a);
}

function normComparison(c) {
  if (!c || !Array.isArray(c.rows) || !c.rows.length) return null;
  const rows = c.rows
    .map((r) => (Array.isArray(r) ? { label: str(r[0]), values: r.slice(1).map(str) } : { label: str(r.label), values: arr(r.values).map(str) }))
    .filter((r) => r.label);
  if (!rows.length) return null;
  return {
    title: str(c.title) || 'How it compares',
    columns: arr(c.columns).map(str),
    rows,
    // Optional caveat rendered under the table (e.g. asterisked accreditation notes).
    footnote: str(c.footnote)
  };
}

function normProgram(p) {
  return {
    id: str(p.id) || str(p.body).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    body: str(p.body),
    bodyUrl: str(p.bodyUrl),
    about: str(p.about),
    registrationSteps: normSteps(p.registrationSteps),
    proctoring: str(p.proctoring),
    retakePolicy: str(p.retakePolicy),
    recertification: str(p.recertification),
    scoreReporting: str(p.scoreReporting),
    refundPolicy: str(p.refundPolicy),
    providersNote: str(p.providersNote),
    comparison: normComparison(p.comparison),
    orgFaqs: normFaqs(p.orgFaqs),
    sourceUrl: str(p.sourceUrl),
    confidence: str(p.confidence) || 'medium'
  };
}

function normExam(e) {
  const qa = e.quickAnswer && typeof e.quickAnswer === 'object'
    ? { summary: str(e.quickAnswer.summary), advantages: arr(e.quickAnswer.advantages).map(str).filter(Boolean) }
    : null;
  const meta = e.examMeta && typeof e.examMeta === 'object'
    ? {
        questions: str(e.examMeta.questions),
        time: str(e.examMeta.time || e.examMeta.duration),
        pass: str(e.examMeta.pass || e.examMeta.passing),
        fee: str(e.examMeta.fee),
        format: str(e.examMeta.format),
        admin: str(e.examMeta.admin || e.examMeta.administeredBy)
      }
    : null;

  return {
    slug: str(e.slug),
    body: str(e.body),
    tagline: str(e.tagline),
    description: str(e.description),
    quickAnswer: qa && qa.summary ? qa : null,
    roadmap: arr(e.roadmap).map((r) => (r && typeof r === 'object' ? str(r.title || r.name) : str(r))).filter(Boolean),
    prerequisites: str(e.prerequisites),
    eligibility: str(e.eligibility),
    examMeta: meta,
    topics: normTopics(e.topics),
    examEssentials: normEssentials(e.examEssentials),
    timeline: normTimeline(e.timeline),
    costBreakdown: normCost(e.costBreakdown),
    difficulty: str(e.difficulty),
    audience: str(e.audience),
    time: str(e.time),
    cost: str(e.cost),
    salaryRange: str(e.salaryRange),
    faqs: normFaqs(e.faqs),
    summaryPoints: arr(e.summaryPoints).map(str).filter(Boolean),
    relatedSlugs: arr(e.relatedSlugs).map(str).filter(Boolean),
    sourceUrl: str(e.sourceUrl),
    reviewed: str(e.reviewed) || '2026-08',
    confidence: str(e.confidence) || 'medium'
  };
}

// ── build the indexes ───────────────────────────────────────────────
export const nationalPrograms = [];
export const nationalExamRecords = [];

for (const batch of BATCHES) {
  for (const p of arr(batch?.programs)) {
    const np = normProgram(p);
    if (np.body) nationalPrograms.push(np);
  }
  for (const e of arr(batch?.exams)) {
    const ne = normExam(e);
    if (ne.slug) nationalExamRecords.push(ne);
  }
}

export const programByBody = {};
for (const p of nationalPrograms) {
  if (!programByBody[p.body]) programByBody[p.body] = p;
}

export const programById = {};
for (const p of nationalPrograms) {
  if (!programById[p.id]) programById[p.id] = p;
}

export const nationalBySlug = {};
for (const e of nationalExamRecords) {
  if (!nationalBySlug[e.slug]) nationalBySlug[e.slug] = e;
}

/** The researched record for a national exam slug, or null. */
export function nationalFor(slug) {
  return nationalBySlug[slug] || null;
}

/** The program dossier governing an exam (matched on `body`). */
export function programFor(record, fallbackBody) {
  const body = record?.body || fallbackBody || '';
  return programByBody[body] || null;
}

/**
 * A record is "rich enough to publish" when it carries the four load-bearing
 * pieces: a quick answer, exam mechanics, real FAQs and a summary.
 */
export function isPublishable(record) {
  if (!record) return false;
  return Boolean(
    record.quickAnswer?.summary &&
      record.examMeta &&
      record.faqs.length >= 3 &&
      record.summaryPoints.length >= 2 &&
      record.description
  );
}

export const nationalStats = {
  programs: nationalPrograms.length,
  exams: nationalExamRecords.length,
  publishable: nationalExamRecords.filter(isPublishable).length
};
