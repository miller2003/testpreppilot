// Post-build check for the Mometrix affiliate rollout. Reads dist/ only — it
// never requests a /go/ or ref.mometrix.com URL, so it cannot generate clicks.
//
//   node scripts/mometrix/verify-dist.mjs
//
// Asserts that:
//   · every mapped exam page links exactly its mapped products via /go/mometrix/*,
//     each with rel="sponsored …", target="_blank", data-astro-prefetch="false"
//     and an affiliate disclosure on the page
//   · no built page links to ref.mometrix.com directly (only the Function may)
//   · every /go/ slug resolves in the product table the Function uses
//   · robots.txt disallows /go/ in every User-agent group
//   · no '#affiliate-placeholder' href survives in the built site
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dist = path.join(root, 'dist');
const { mometrixExams, mometrixProducts } = await import(pathToFileURL(path.join(root, 'src/data/mometrix.mjs')).href);
const credentialSlugs = new Set(['texas-real-estate-license', 'california-real-estate-license', 'florida-real-estate-license']);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);

const byGo = new Map(Object.values(mometrixProducts).map((p) => [p.go, p]));
const errors = [];
let pagesWithLinks = 0;
let linkCount = 0;

const goAnchors = (html) => [...html.matchAll(/<a\b[^>]*\bhref="(\/go\/[^"]*)"[^>]*>/g)];

for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (/href="#affiliate-placeholder"/.test(html)) errors.push(`${rel}: '#affiliate-placeholder' href`);
  if (/ref\.mometrix\.com/.test(html)) errors.push(`${rel}: exposes a ref.mometrix.com URL (must go through /go/)`);
  const found = goAnchors(html);
  if (!found.length) continue;
  pagesWithLinks++;
  linkCount += found.length;
  for (const [tag, href] of found) {
    if (!byGo.has(href)) errors.push(`${rel}: /go/ link with no product: ${href}`);
    if (!/\brel="[^"]*\bsponsored\b/.test(tag)) errors.push(`${rel}: missing rel=sponsored on ${href}`);
    if (!/\btarget="_blank"/.test(tag)) errors.push(`${rel}: missing target=_blank on ${href}`);
    if (!/\bdata-astro-prefetch="false"/.test(tag)) errors.push(`${rel}: ${href} is prefetchable`);
  }
  if (!/Affiliate link/i.test(html)) errors.push(`${rel}: affiliate links without a disclosure`);
}

for (const [slug, entry] of Object.entries(mometrixExams)) {
  const base = credentialSlugs.has(slug) ? 'paths' : 'exams';
  const file = path.join(dist, base, slug, 'index.html');
  if (!fs.existsSync(file)) { errors.push(`${base}/${slug}: page not built`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = new Set(goAnchors(html).map((m) => m[1]));
  const expected = entry.products.map((id) => mometrixProducts[id].go);
  for (const h of expected) if (!hrefs.has(h)) errors.push(`${base}/${slug}: missing ${h}`);
  for (const h of hrefs) if (!expected.includes(h)) errors.push(`${base}/${slug}: link from another exam ${h}`);
  if (!/id="prep"/.test(html)) errors.push(`${base}/${slug}: no #prep block`);
  if (entry.note && !html.includes(entry.note.slice(0, 40).replace(/'/g, '&#39;')) && !html.includes(entry.note.slice(0, 40)))
    errors.push(`${base}/${slug}: caveat note not rendered`);
}

for (const p of Object.values(mometrixProducts)) {
  if (!/^https:\/\/ref\.mometrix\.com\/1262-\d+-\d+-\d+\.htm$/.test(p.href)) errors.push(`product ${p.id}: bad target ${p.href}`);
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8').replace(/\r/g, '');
const groups = robots.split(/\n(?=User-agent:)/).filter((g) => g.startsWith('User-agent:'));
const open = groups.filter((g) => !/^Disallow:\s*\/go\/\s*$/m.test(g));
if (!groups.length || open.length) errors.push(`robots.txt: ${open.length} User-agent group(s) without Disallow: /go/`);

if (!fs.existsSync(path.join(root, 'functions/go/mometrix/[slug].js'))) errors.push('functions/go/mometrix/[slug].js missing');

console.log(`pages with Mometrix links: ${pagesWithLinks} (expected ${Object.keys(mometrixExams).length}), /go/ links: ${linkCount}, robots groups: ${groups.length}`);
if (pagesWithLinks !== Object.keys(mometrixExams).length) errors.push('page count mismatch');
if (errors.length) {
  console.error(`${errors.length} problem(s):\n` + errors.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log('OK — all Mometrix links verified in dist/');
