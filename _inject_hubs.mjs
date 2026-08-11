// Inject <TopicHubs /> into the static pages that were acting as PageRank sinks.
import fs from 'fs';

const targets = [
  'about', 'guides', 'explore', 'reviews', 'how-it-works',
  'editorial-policy', 'disclosure', 'privacy', 'affiliate-disclosure',
];

const IMPORT = "import TopicHubs from '../components/TopicHubs.astro';";

let done = 0, skipped = 0;
for (const name of targets) {
  const file = `src/pages/${name}.astro`;
  if (!fs.existsSync(file)) { console.log(`  MISS  ${file}`); continue; }
  let src = fs.readFileSync(file, 'utf8');

  if (src.includes('TopicHubs')) { console.log(`  SKIP  ${name} (已存在)`); skipped++; continue; }

  // 1. add import at end of frontmatter import block
  const fmEnd = src.indexOf('---', 3);
  if (fmEnd < 0) { console.log(`  FAIL  ${name} (无 frontmatter)`); continue; }
  const fm = src.slice(0, fmEnd);
  const lastImport = fm.lastIndexOf('\nimport ');
  if (lastImport < 0) { console.log(`  FAIL  ${name} (无 import)`); continue; }
  const lineEnd = fm.indexOf('\n', lastImport + 1);
  src = src.slice(0, lineEnd) + '\n' + IMPORT + src.slice(lineEnd);

  // 2. insert component before closing </BaseLayout>
  const close = src.lastIndexOf('</BaseLayout>');
  if (close < 0) { console.log(`  FAIL  ${name} (无 BaseLayout)`); continue; }
  src = src.slice(0, close) + '\n  <TopicHubs />\n' + src.slice(close);

  fs.writeFileSync(file, src);
  console.log(`  OK    ${name}`);
  done++;
}
console.log(`\n注入完成: ${done} 个, 跳过 ${skipped} 个`);
