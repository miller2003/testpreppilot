import { nationalStats, nationalFor, isPublishable } from './src/data/examCatalog/national-research/index.mjs';
console.log('nationalStats:', JSON.stringify(nationalStats));
const slugs = ['google-cloud-digital-leader','google-professional-cloud-architect','google-professional-data-engineer','google-associate-cloud-engineer','comptia-a-plus','cisco-ccna'];
for (const s of slugs) {
  const r = nationalFor(s);
  if (!r) { console.log(s, '-> NO RECORD'); continue; }
  console.log(s, '-> publishable:', isPublishable(r), '| faqs:', r.faqs.length, '| summary:', r.summaryPoints.length, '| hasExamMeta:', !!r.examMeta, '| body:', r.body);
}
