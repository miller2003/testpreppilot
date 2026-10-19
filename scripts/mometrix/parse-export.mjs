// Parse a saved copy of the Mometrix affiliate panel's "HTML Ads" page
// (https://ref.mometrix.com/account.php?page=23, saved as "Webpage, HTML only")
// into scripts/mometrix/ads.json.
//
//   node scripts/mometrix/parse-export.mjs "C:/Users/<you>/Desktop/Mometrix - Affiliate Program.html"
//
// Re-run when Mometrix adds products, then `node scripts/mometrix/build.mjs`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/mometrix/parse-export.mjs <saved HTML Ads page>');
  process.exit(1);
}
const html = fs.readFileSync(src, 'utf8');
const decode = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&amp;/g, '&');

const out = [];
for (const b of html.split('Marketing Group: ').slice(1)) {
  const group = decode(b.slice(0, b.indexOf('<')).trim());
  const adName = decode((b.match(/HTML Ad Name:\s*<\/label>\s*([^<]*)/) || [])[1]?.trim() || '');
  const target = decode((b.match(/Target URL:\s*<\/label>\s*<a href="([^"]+)"/) || [])[1] || '');
  const code = decode((b.match(/<textarea[^>]*>([\s\S]*?)<\/textarea>/) || [])[1] || '');
  const link = (code.match(/href="([^"]+)"/) || [])[1] || '';
  const img = (code.match(/src="([^"]+)"/) || [])[1] || '';
  out.push({ group, adName, target, link, img });
}

const bad = out.filter((o) => !/^https:\/\/ref\.mometrix\.com\/1262-\d+-\d+-\d+\.htm$/.test(o.link) || !o.target);
if (!out.length || bad.length) {
  console.error(`parsed ${out.length} ads, ${bad.length} malformed`, bad.slice(0, 5));
  process.exit(1);
}

const dest = path.join(path.dirname(fileURLToPath(import.meta.url)), 'ads.json');
fs.writeFileSync(dest, '[\n' + out.map((o) => JSON.stringify(o)).join(',\n') + '\n]\n');
console.log(`wrote ${out.length} ads -> ${dest}`);
