// Emits a commented TEMPLATE stub for every target slug into ./depth/<slug>.mjs.
// Safe to re-run: it NEVER overwrites an existing file that already has content
// beyond the template markers. Run once to scaffold, then researchers fill in.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const depthDir = join(here, 'depth');

// ---- 8 flagships (from credentials.ts) ----
const flagships = [
  'texas-real-estate-license', 'california-real-estate-license', 'florida-real-estate-license',
  'enrolled-agent', 'osha-10-construction', 'osha-30-construction',
  'epa-608-certification', 'cpa-exam',
];
// ---- 20 national (from release-manifest.mjs) ----
const manifest = readFileSync(join(here, 'release-manifest.mjs'), 'utf8');
const national = [...manifest.matchAll(/"([a-z0-9-]+)":\s*"\d{4}-\d{2}-\d{2}"/g)].map(m => m[1]);
const slugs = [...new Set([...flagships, ...national])];

const tpl = (slug) => `// Depth content for: ${slug}
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: '',                 // real named human, with credential
    title: '',
    bio: '',
    url: ''                   // optional
  },
  reviewedBy: '',             // optional second reviewer
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '',
    summary: '',
    rows: [{ label: '', value: '', note: '' }],
    growth: '',
    source: { label: '', url: '' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: '',
    summary: '',
    rows: [{ label: '', value: '', note: '' }],
    source: { label: '', url: '' },
    caveat: ''
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: '',
    totalHours: '',
    weeks: [
      { label: '', focus: '', tasks: [''], hours: '' }
    ],
    variants: [{ label: '', detail: '' }]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: '',
    items: [{ title: '', detail: '' }]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: '',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [{ label: '', values: ['', '', ''] }],
    footnote: ''
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: '',
    items: [{ mistake: '', fix: '' }]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: '',
    types: [{ name: '', share: '', detail: '' }],
    samples: [{ prompt: '', options: ['A. ', 'B. ', 'C. ', 'D. '], answer: '', explanation: '' }],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: '',
    bring: [''],
    leave: [''],               // items NOT allowed / to leave at home
    timeline: [{ time: '', detail: '' }],
    rules: [''],
    afterwards: ''
  }
};

export default data;
`;

let created = 0, skipped = 0;
for (const slug of slugs) {
  const file = join(depthDir, `${slug}.mjs`);
  if (existsSync(file)) {
    skipped++;
    continue;
  }
  writeFileSync(file, tpl(slug));
  created++;
}
console.log(`depth stubs: created ${created}, skipped ${skipped} (already present). total target slugs ${slugs.length}.`);
