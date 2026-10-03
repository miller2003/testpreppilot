// The published exam catalogue as a flat, citable dataset.
//
// Single source of truth for the three /data endpoints and for the field list
// documented in public/.well-known/openapi.json. `_verify_agent_surface.mjs`
// asserts the emitted objects carry exactly these keys, so the OpenAPI document
// cannot drift from what the endpoints actually serve.
//
// Only RELEASED guides are included — `allExams` is already filtered by the
// release manifest, so nothing unpublished can leak into a machine-readable
// feed (which would be far worse than a missing page: crawlers would index it).

import { allExams } from '../data/examCatalog/index.mjs';
import { releases } from '../data/examCatalog/release-manifest.mjs';

export const SITE = 'https://testpreppilot.com';

/** Field names emitted per exam row. Order is the CSV column order too. */
export const EXAM_FIELDS = [
  'slug',
  'name',
  'url',
  'category',
  'awardingBody',
  'fee',
  'format',
  'questions',
  'length',
  'passMark',
  'costRange',
  'studyTime',
  'salaryRange',
  'topics',
  'published',
  'reviewed',
  'confidence',
  'sourceUrl',
];

const str = (v) => (v == null || v === '' ? null : String(v));

function rowFor(exam) {
  const r = exam.record || {};
  const meta = r.examMeta || {};
  return {
    slug: exam.slug,
    name: exam.name,
    url: `${SITE}/exams/${exam.slug}`,
    category: exam.category,
    awardingBody: str(meta.admin),
    fee: str(meta.fee),
    format: str(meta.format),
    questions: str(meta.questions),
    length: str(meta.time),
    passMark: str(meta.pass),
    costRange: str(r.cost),
    studyTime: str(r.time),
    salaryRange: str(r.salaryRange),
    topics: Array.isArray(r.topics) ? r.topics.map((t) => t.name).filter(Boolean) : [],
    published: releases[exam.slug] || null,
    reviewed: str(r.reviewed),
    confidence: str(r.confidence) || 'low',
    sourceUrl: str(r.sourceUrl),
  };
}

export function buildExamDataset() {
  return allExams
    .filter((e) => e.record)
    .map(rowFor)
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

export function datasetMeta() {
  const rows = buildExamDataset();
  return {
    name: 'TestPrepPilot — published U.S. exam and certification catalogue',
    rows: rows.length,
    fields: EXAM_FIELDS.length,
    categories: [...new Set(rows.map((r) => r.category))].sort(),
    withFee: rows.filter((r) => r.fee).length,
    withPassMark: rows.filter((r) => r.passMark).length,
    withSourceUrl: rows.filter((r) => r.sourceUrl).length,
    confidence: {
      high: rows.filter((r) => r.confidence === 'high').length,
      medium: rows.filter((r) => r.confidence === 'medium').length,
      low: rows.filter((r) => r.confidence === 'low').length,
    },
  };
}

/** RFC 4180 CSV. Every value is quoted, so commas inside fee/salary text are safe. */
export function datasetCsv() {
  const rows = buildExamDataset();
  const esc = (v) => {
    const s = v == null ? '' : Array.isArray(v) ? v.join('; ') : String(v);
    return '"' + s.replace(/"/g, '""') + '"';
  };
  const lines = [EXAM_FIELDS.join(',')];
  for (const r of rows) lines.push(EXAM_FIELDS.map((f) => esc(r[f])).join(','));
  return lines.join('\n') + '\n';
}
