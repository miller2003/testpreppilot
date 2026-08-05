import { nationalExamRecords } from './src/data/examCatalog/national-research/index.mjs';

function isPublishable(r) {
  return !!(r.quickAnswer?.summary && r.examMeta && (r.faqs?.length ?? 0) >= 3 && (r.summaryPoints?.length ?? 0) >= 2 && r.description);
}

const bad = [];
const tally = {};
for (const r of nationalExamRecords) {
  if (!isPublishable(r)) {
    const issues = [];
    if (!r.quickAnswer?.summary) issues.push('noSummary');
    if (!r.examMeta) issues.push('noExamMeta');
    if ((r.faqs?.length ?? 0) < 3) issues.push('faqs<' + (r.faqs?.length ?? 0));
    if ((r.summaryPoints?.length ?? 0) < 2) issues.push('sp<' + (r.summaryPoints?.length ?? 0));
    if (!r.description) issues.push('noDesc');
    bad.push({ slug: r.slug, body: r.body, issues });
    for (const i of issues) tally[i] = (tally[i] || 0) + 1;
  }
}
console.log('TOTAL records:', nationalExamRecords.length);
console.log('NOT publishable:', bad.length);
console.log('issue tally:', JSON.stringify(tally));
console.log('--- bad slugs by body ---');
const byBody = {};
for (const b of bad) (byBody[b.body] = byBody[b.body] || []).push(b.slug + ' [' + b.issues.join(',') + ']');
for (const [body, slugs] of Object.entries(byBody)) {
  console.log('  ' + body + ' (' + slugs.length + '):');
  for (const s of slugs) console.log('      ' + s);
}
