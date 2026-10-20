// Fetch O*NET localwages (BLS OEWS May 2025) for one SOC across all 51 jurisdictions.
// Usage: node scripts/quality/fetch-oes.mjs <SOC-with-dash> [ST1,ST2,...]
// Output: reports/oews/<SOC-no-dash>/wages-<SOC-no-dash>.json
//   { _meta: { soc, socName, year, sourceLabel, fetchedOn },
//     AL: { median, p25, p75, usMedian, usP25, usP75, year, sourceUrl }, ... }
import fs from 'node:fs';
import path from 'node:path';

const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' } };
const ALL = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
const STATE_NAMES = { AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming' };

const soc = process.argv[2];
if (!soc || !/^\d{2}-\d{4}$/.test(soc)) { console.error('usage: fetch-oes.mjs <SOC like 33-9021> [states]'); process.exit(1); }
const statesArg = process.argv[3] ? process.argv[3].split(',').map(s => s.trim().toUpperCase()) : ALL;
const socNoDash = soc.replace('-', '');
const outDir = path.resolve('reports/oews', socNoDash);
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `wages-${socNoDash}.json`);
let json = {};
if (fs.existsSync(outFile)) { try { json = JSON.parse(fs.readFileSync(outFile, 'utf8')); } catch {} }
if (!json._meta) json._meta = { soc, socName: '', year: '', sourceLabel: 'O*NET OnLine (BLS OEWS)', fetchedOn: '' };
json._meta.fetchedOn = new Date().toISOString().slice(0, 10);

function cells(tr) { return [...tr.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim()); }
function money(s) { const m = String(s).match(/\$[\d,]+/); return m ? m[0] : null; }

let ok = 0, fail = [];
for (const st of statesArg) {
  const url = `https://www.onetonline.org/link/localwages/${soc}.00?st=${st}`;
  try {
    const res = await fetch(url, UA);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    if (!json._meta.socName) {
      const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      if (h1) json._meta.socName = h1[1].replace(/<[^>]+>/g, '').replace(/Wages for /, '').replace(new RegExp(` in ${STATE_NAMES[st]}$`), '').trim();
    }
    if (!json._meta.year) {
      const y = html.match(/Bureau of Labor Statistics[\s\S]{0,200}?>(\d{4})</);
      if (y) json._meta.year = 'May ' + y[1];
    }
    // Annual table only: rows whose cells contain 5 money values
    const rowRe = /<tr[^>]*>\s*<td[^>]*>([^<]+)<\/td>([\s\S]*?)<\/tr>/g;
    let m, got = {};
    while ((m = rowRe.exec(html))) {
      const label = m[1].trim();
      if (label !== 'United States' && label !== STATE_NAMES[st]) continue;
      const vals = cells(m[0]).slice(1).map(money).filter(Boolean);
      if (vals.length < 5) continue;
      // annual vs hourly: money values with >=3 digits before comma (annual) — hourly like $17.31
      const isAnnual = vals.some(v => /^\$\d{2,},\d{3}$/.test(v));
      if (!isAnnual) continue;
      got[label] = { p10: vals[0], p25: vals[1], median: vals[2], p75: vals[3], p90: vals[4] };
      if (got['United States'] && got[STATE_NAMES[st]]) break;
    }
    const us = got['United States'], stt = got[STATE_NAMES[st]];
    if (!us || !stt) throw new Error('table rows not found');
    json[st] = {
      median: stt.median, p25: stt.p25, p75: stt.p75,
      usMedian: us.median, usP25: us.p25, usP75: us.p75,
      year: json._meta.year || 'May 2025',
      sourceUrl: url
    };
    ok++;
    process.stdout.write(`${st} ok (${stt.median})\n`);
  } catch (e) {
    fail.push(st);
    process.stdout.write(`${st} FAIL ${e.message}\n`);
  }
  await new Promise(r => setTimeout(r, 250));
}
fs.writeFileSync(outFile, JSON.stringify(json, null, 1));
console.log(`done: ${ok} ok, ${fail.length} fail -> ${outFile}`);
if (fail.length) console.log('failed states: ' + fail.join(','));
