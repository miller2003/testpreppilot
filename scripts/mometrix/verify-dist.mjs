// Post-build check for the Mometrix affiliate rollout. Reads dist/ only — it
// never requests a ref.mometrix.com URL, so it cannot generate affiliate clicks.
//
//   node scripts/mometrix/verify-dist.mjs
//
// Asserts that:
//   · every mapped exam page carries exactly its mapped links, each with
//     rel="sponsored …", target="_blank" and an affiliate disclosure
//   · no page anywhere links to a ref.mometrix.com URL outside the mapping
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

const allowed = new Set(Object.values(mometrixProducts).map((p) => p.href));
const errors = [];
let pagesWithLinks = 0;
let linkCount = 0;

const anchors = (html) => [...html.matchAll(/<a\b[^>]*\bhref="(https?:\/\/ref\.mometrix\.com[^"]*)"[^>]*>/g)];

for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (/href="#affiliate-placeholder"/.test(html)) errors.push(`${rel}: '#affiliate-placeholder' href`);
  const found = anchors(html);
  if (!found.length) {
    if (/ref\.mometrix\.com/.test(html)) errors.push(`${rel}: ref.mometrix.com outside an <a href>`);
    continue;
  }
  pagesWithLinks++;
  linkCount += found.length;
  for (const [tag, href] of found) {
    if (!allowed.has(href)) errors.push(`${rel}: unexpected link ${href}`);
    if (!/\brel="[^"]*\bsponsored\b/.test(tag)) errors.push(`${rel}: missing rel=sponsored on ${href}`);
    if (!/\btarget="_blank"/.test(tag)) errors.push(`${rel}: missing target=_blank on ${href}`);
  }
  if (!/Affiliate link/i.test(html)) errors.push(`${rel}: affiliate links without a disclosure`);
}

for (const [slug, entry] of Object.entries(mometrixExams)) {
  const base = credentialSlugs.has(slug) ? 'paths' : 'exams';
  const file = path.join(dist, base, slug, 'index.html');
  if (!fs.existsSync(file)) { errors.push(`${base}/${slug}: page not built`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = new Set(anchors(html).map((m) => m[1]));
  const expected = entry.products.map((id) => mometrixProducts[id].href);
  for (const h of expected) if (!hrefs.has(h)) errors.push(`${base}/${slug}: missing ${h}`);
  for (const h of hrefs) if (!expected.includes(h)) errors.push(`${base}/${slug}: link from another exam ${h}`);
  if (!/id="prep"/.test(html)) errors.push(`${base}/${slug}: no #prep block`);
  if (entry.note && !html.includes(entry.note.slice(0, 40).replace(/'/g, '&#39;')) && !html.includes(entry.note.slice(0, 40)))
    errors.push(`${base}/${slug}: caveat note not rendered`);
}

console.log(`pages with Mometrix links: ${pagesWithLinks} (expected ${Object.keys(mometrixExams).length}), links: ${linkCount}`);
if (pagesWithLinks !== Object.keys(mometrixExams).length) errors.push('page count mismatch');
if (errors.length) {
  console.error(`${errors.length} problem(s):\n` + errors.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log('OK — all Mometrix links verified in dist/');
