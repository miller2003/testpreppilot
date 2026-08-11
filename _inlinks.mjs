import fs from 'fs';
import path from 'path';

const DIST = 'dist';
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(DIST);

const urlOf = (f) => {
  let u = '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  if (u.length > 1) u = u.replace(/\/$/, '');
  return u;
};

const targets = process.argv.slice(2);
const hits = Object.fromEntries(targets.map((t) => [t, []]));

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const src = urlOf(f);
  const footerIdx = html.search(/<footer/i);
  const navEnd = html.search(/<\/header>|<\/nav>/i);
  for (const m of html.matchAll(/<a\s[^>]*href="([^"#?]+)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)) {
    let href = m[1];
    if (!href.startsWith('/')) continue;
    if (href.length > 1) href = href.replace(/\/$/, '');
    if (!(href in hits)) continue;
    const anchor = m[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 50);
    const pos = m.index;
    const zone = footerIdx >= 0 && pos > footerIdx ? 'footer' : navEnd >= 0 && pos < navEnd ? 'nav' : 'body';
    hits[href].push({ src, anchor, zone });
  }
}

for (const t of targets) {
  const list = hits[t];
  console.log(`\n=== ${t}   入链 ${list.length} ===`);
  const zc = {};
  for (const h of list) zc[h.zone] = (zc[h.zone] || 0) + 1;
  console.log('  zone:', JSON.stringify(zc));
  for (const h of list.slice(0, 12)) console.log(`   ${h.src.padEnd(45)} ← "${h.anchor}" [${h.zone}]`);
}
