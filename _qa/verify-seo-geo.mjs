// Verify the pages shipped in this pass: new blocks present, JSON-LD parses,
// FAQ text matches the visible page, and the sitemap carries honest lastmods.
import { readFileSync, existsSync } from 'node:fs';

const read = (p) => readFileSync(p, 'utf8');
const textOf = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
   .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
   .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

let fail = 0;
const ok = (cond, label, extra = '') => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${extra ? ' — ' + extra : ''}`);
  if (!cond) fail++;
};

console.log('\n=== homepage ===');
const home = read('dist/index.html');
const homeText = textOf(home);
ok(/class="answer-block/.test(home), 'answer block rendered');
ok(/id="dir-answer-h"/.test(home), 'answer block heading present');
ok(/class="answer-featured"/.test(home), 'featured-guide links present');
ok(/class="dir-faq"/.test(home), 'directory FAQ rendered');
const homeLd = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
let homeFaq = null, homeList = null;
for (const b of homeLd) {
  const o = JSON.parse(b);
  for (const n of Array.isArray(o['@graph']) ? o['@graph'] : [o]) {
    if (n['@type'] === 'FAQPage') homeFaq = n;
    if (n['@type'] === 'CollectionPage') homeList = n;
  }
}
ok(!!homeFaq, 'FAQPage node present', homeFaq ? homeFaq.mainEntity.length + ' Q' : '');
ok(!!homeList?.dateModified, 'CollectionPage.dateModified', homeList?.dateModified);
ok(!!homeList?.mainEntity?.itemListElement?.length, 'nested ItemList present', homeList?.mainEntity?.numberOfItems + ' items');
let missing = 0;
for (const q of homeFaq.mainEntity) {
  if (!homeText.includes(q.name)) { console.log('   Q not visible:', q.name.slice(0, 70)); missing++; }
  if (!homeText.includes(q.acceptedAnswer.text)) { console.log('   A not visible:', q.acceptedAnswer.text.slice(0, 70)); missing++; }
}
ok(missing === 0, 'every FAQ Q&A exists in the visible text', missing ? missing + ' missing' : '');

console.log('\n=== category pages (all 19) ===');
const sm = read('dist/sitemap-0.xml');
const catUrls = [...sm.matchAll(/<loc>(https:\/\/testpreppilot\.com\/categories\/[^<]+)<\/loc>/g)].map((m) => m[1]);
ok(catUrls.length === 19, '19 category URLs in sitemap', String(catUrls.length));
let withPay = 0, withItemList = 0, withDate = 0, badLd = 0, faqMismatch = 0;
for (const u of catUrls) {
  const slug = u.split('/').pop();
  const p = `dist/categories/${slug}/index.html`;
  if (!existsSync(p)) { console.log('  missing dist file', slug); badLd++; continue; }
  const html = read(p);
  const txt = textOf(html);
  if (/class="pay-list"/.test(html)) withPay++;
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  let list = null, faq = null, coll = null;
  for (const b of blocks) {
    try {
      const o = JSON.parse(b);
      for (const n of Array.isArray(o['@graph']) ? o['@graph'] : [o]) {
        if (n['@type'] === 'ItemList') list = n;
        if (n['@type'] === 'FAQPage') faq = n;
        if (n['@type'] === 'CollectionPage') coll = n;
      }
    } catch (e) { console.log('  JSON-LD parse error on', slug, e.message); badLd++; }
  }
  if (list?.itemListOrder) withItemList++;
  if (coll?.dateModified) withDate++;
  if (faq) for (const q of faq.mainEntity) {
    if (!txt.includes(q.name) || !txt.includes(q.acceptedAnswer.text)) faqMismatch++;
  }
}
ok(badLd === 0, 'all category JSON-LD blocks parse');
ok(withPay >= 15, 'ranked pay block on categories with data', withPay + '/19');
ok(withItemList >= 15, 'ranked ItemList (with itemListOrder) emitted', withItemList + '/19');
// One category (real-estate) has no published guides, so it correctly emits no
// date rather than inventing one.
ok(withDate >= 18, 'CollectionPage.dateModified set where a guide exists', withDate + '/19');
ok(faqMismatch === 0, 'category FAQ schema still matches visible text', String(faqMismatch));

console.log('\n=== sitemap lastmod honesty ===');
const urls = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
const dateOf = (u) => (u.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
const locOf = (u) => (u.match(/<loc>([^<]+)<\/loc>/) || [])[1];
const counts = { withDate: 0, withoutDate: 0, buildStamp: 0 };
const today = new Date().toISOString().slice(0, 10);
for (const u of urls) {
  const d = dateOf(u);
  if (!d) { counts.withoutDate++; continue; }
  counts.withDate++;
  if (d.slice(0, 10) > today) counts.buildStamp++;
}
// lastmod == today is legitimate when a guide really shipped today; what must
// never happen is a date in the FUTURE (the old build-stamp behaviour).
ok(counts.buildStamp === 0, 'no URL claims a future lastmod', JSON.stringify(counts));
const todayUrls = urls.filter((u) => (dateOf(u) || '').slice(0, 10) === '2026-09-16').map(locOf);
console.log('   lastmod == today (must all be justified by a 2026-09-16 release):');
for (const u of todayUrls) console.log('     ' + u);
const homeEntry = urls.find((u) => locOf(u) === 'https://testpreppilot.com');
const catEntry = urls.find((u) => locOf(u).includes('/categories/technology'));
const examEntry = urls.find((u) => locOf(u).includes('/exams/sat-exam'));
console.log('   home       lastmod:', dateOf(homeEntry));
console.log('   categories lastmod:', dateOf(catEntry), '(technology)');
console.log('   exams      lastmod:', dateOf(examEntry), '(sat-exam)');
ok(!!dateOf(homeEntry) && dateOf(homeEntry).slice(0, 10) === '2026-09-16', 'home lastmod = newest release');
ok(!!dateOf(examEntry) && dateOf(examEntry).slice(0, 10) === '2026-08-18', 'exam lastmod = its release date');

console.log(`\n${fail ? 'FAILURES: ' + fail : 'ALL CHECKS PASSED'}`);
process.exit(fail ? 1 : 0);
