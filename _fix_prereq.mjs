// Fix "Varies by exam" prerequisites placeholders for MOS (batch188) and ITIL 4 (batch173)
import { readFileSync, writeFileSync } from 'node:fs';

function fixFile(path, replacements) {
  const src = readFileSync(path, 'utf8');
  let out = src;
  for (const [from, to] of replacements) {
    if (!out.includes(from)) { console.log('NOT FOUND in', path, ':', from.slice(0, 60)); continue; }
    out = out.split(from).join(to);
    console.log('Replaced in', path, ':', from.slice(0, 50));
  }
  writeFileSync(path, out);
}

// MOS: prerequisites -> open to all, no formal requirement
fixFile('src/data/examCatalog/national-research/batch188.mjs', [
  [
    '"prerequisites": "Varies by exam — see the awarding body. Some require experience or a prior certification."',
    '"prerequisites": "None — open to all candidates; no experience or prior certification required for the Office Specialist exams."'
  ]
]);

// ITIL 4 specialist/strategist/leader: Foundation prerequisite
fixFile('src/data/examCatalog/national-research/batch173.mjs', [
  [
    '"prerequisites": "Varies by exam — see the awarding body. Some require experience or a prior certification."',
    '"prerequisites": "Valid ITIL 4 Foundation certificate required before taking the higher-level modules."'
  ]
]);

// Also check remaining examMeta placeholders in the ITIL records
const b173 = readFileSync('src/data/examCatalog/national-research/batch173.mjs', 'utf8');
const segs = ['itil-4-specialist-high-velocity-it', 'itil-4-strategist-direct-plan-and-improve', 'itil-4-leader-digital-and-it-strategy'];
for (const s of segs) {
  const i = b173.indexOf('"slug": "' + s + '"');
  if (i < 0) { console.log('SLUG NOT FOUND:', s); continue; }
  const block = b173.slice(i, i + 4000);
  if (block.includes('Varies by exam')) {
    console.log('REMAINING VARIES near', s, ':', block.match(/[^"]*Varies by exam[^"]*/g));
  } else {
    console.log('Clean:', s);
  }
}
