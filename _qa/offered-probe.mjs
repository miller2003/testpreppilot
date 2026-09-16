// Is there a structured "no longer offered" flag to exclude from the ranking?
import { buildDirectory, getExamDetail, allExamsFull } from '../src/data/examCatalog/index.mjs';

const hits = [];
for (const e of allExamsFull) {
  if (e.offered === false) hits.push(e.slug);
}
console.log('allExamsFull with offered === false:', hits.length);
console.log(hits.slice(0, 40).join(', '));

const az = allExamsFull.find((e) => e.slug === 'microsoft-az-204');
console.log('\nmicrosoft-az-204:', JSON.stringify({ slug: az?.slug, offered: az?.offered, status: az?.status, researched: az?.researched }));

const dir = buildDirectory();
const inDir = dir.flatMap((c) => c.groups.flatMap((g) => g.exams)).filter((e) => e.offered === false);
console.log('\nreleased + offered===false (what the category pages see):', inDir.map((e) => e.slug).join(', ') || '(none)');

// Does the release manifest include them?
const { releases } = await import('../src/data/examCatalog/release-manifest.mjs');
console.log('\nof those, released:', inDir.filter((e) => releases[e.slug]).map((e) => `${e.slug} (${releases[e.slug]})`).join(', ') || '(none)');

// Keyword scan as a fallback signal
const kws = ['no longer obtainable', 'no further attempts', 'discontinued', 'retired', 'no longer offered'];
for (const slug of ['microsoft-az-204', 'microsoft-ai-901', 'microsoft-az-500']) {
  const d = getExamDetail(slug);
  const text = JSON.stringify(d?.record || '') + JSON.stringify(d?.dossier || '');
  const found = kws.filter((k) => text.toLowerCase().includes(k));
  console.log(`${slug}: offered=${allExamsFull.find((e) => e.slug === slug)?.offered} keywords=${found.join(' | ') || '-'}`);
}
