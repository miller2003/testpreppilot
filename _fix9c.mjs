// Final 3 expansions for batch-9 under-length summaries.
import { readFileSync, writeFileSync } from 'node:fs';

const fixes = {
  'ap-human-geography.questionTypes': ' The vocabulary-and-model review sheet built during study also serves the free-response section directly, because the model items reward naming the components and applying them to the scenario, and candidates who have the one-page summary memorized write the application items faster and with more specific examples.',
  'ap-statistics.questionTypes': ' The investigative task rewards a full arc — the design, the analysis, and the interpretation — and candidates who rehearse it against the past-FRQ materials find the multi-part format predictable, so the final practice-exam phase should always include at least one complete investigative-task rehearsal under the clock.',
  'pte-academic.questionTypes': ' The fill-in-the-blanks items appear in both the reading and listening sections with different scaffolds, and the highlight-summary types reward identifying the key content in the audio or text, so candidates should drill the cross-section patterns rather than treating each item type in isolation, which is how the integrated score improves fastest.'
};

for (const [key, add] of Object.entries(fixes)) {
  const idx = key.indexOf('.');
  const file = key.slice(0, idx);
  const section = key.slice(idx + 1);
  const p = 'src/data/examCatalog/depth/' + file + '.mjs';
  const t = readFileSync(p, 'utf8');
  const re = new RegExp("(" + section + ": \\{[\\s\\S]*?summary: ')([^']*)(')", 'm');
  const m = t.match(re);
  if (!m) { console.log('NOT FOUND ' + key); continue; }
  writeFileSync(p, t.replace(re, (a, p1, p2, p3) => p1 + p2 + add + p3));
  console.log('Expanded ' + key);
}
