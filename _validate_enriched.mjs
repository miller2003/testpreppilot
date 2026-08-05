// Validate the 20 enriched top-heat national exam records.
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { nationalFor, programFor, isPublishable, nationalBySlug } from './src/data/examCatalog/national-research/index.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const slugs = readdirSync(join(ROOT, '_enrich'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(ROOT, '_enrich', f), 'utf8')).slug);

// Fields whose string content must not contain placeholder "Varies".
const TEXT_FIELDS = ['description', 'prerequisites', 'eligibility', 'tagline'];
const VARIES_RE = /varies\s+by\s+(exam|credential)|varies\s*[—–-]\s*see|varies;\s*many|varies\s+by\s+location/i;

let problems = 0;
const report = [];
for (const slug of slugs) {
  const rec = nationalFor(slug);
  const issues = [];
  if (!rec) { issues.push('NO RECORD (nationalFor returned null)'); }
  else {
    if (!isPublishable(rec)) issues.push('NOT PUBLISHABLE');
    // examMeta
    if (rec.examMeta) {
      for (const [k, v] of Object.entries(rec.examMeta)) {
        if (typeof v === 'string' && VARIES_RE.test(v)) issues.push(`examMeta.${k} has Varies placeholder`);
      }
    }
    for (const f of TEXT_FIELDS) {
      if (typeof rec[f] === 'string' && VARIES_RE.test(rec[f])) issues.push(`${f} has Varies placeholder`);
    }
    if (Array.isArray(rec.faqs)) {
      for (const faq of rec.faqs) {
        if (faq?.a && VARIES_RE.test(faq.a)) issues.push(`faq "${faq.q?.slice(0,40)}" has Varies placeholder`);
      }
    }
    if (Array.isArray(rec.topics)) {
      for (const t of rec.topics) {
        if (t?.note && VARIES_RE.test(t.note)) issues.push(`topic "${t.name?.slice(0,40)}" has Varies placeholder`);
      }
    }
    // program resolution + registrationSteps type
    const prog = programFor(rec, null);
    if (!prog) issues.push('PROGRAM NOT RESOLVED');
    else {
      const steps = prog.registrationSteps;
      if (!Array.isArray(steps)) issues.push('program.registrationSteps missing');
      else if (typeof steps[0] === 'string') issues.push('program.registrationSteps are STRINGS (Step-by-Step Render empty)');
    }
  }
  if (issues.length) { problems += issues.length; report.push(`✗ ${slug}\n    - ${issues.join('\n    - ')}`); }
  else report.push(`✓ ${slug}`);
}

console.log(report.join('\n'));
console.log(`\n${problems === 0 ? 'ALL CLEAN' : problems + ' PROBLEM(S)'} across ${slugs.length} records.`);
process.exit(problems ? 1 : 0);
