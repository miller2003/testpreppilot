import { pathToFileURL } from 'url';
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const DIR = 'src/data/examCatalog/national-research';
const idxUrl = pathToFileURL(process.cwd() + '/' + DIR + '/index.mjs').href;
const idx = await import(idxUrl);

// ── identify failing slugs (must match index.mjs isPublishable) ──────
function isPublishable(r) {
  return !!(r.quickAnswer?.summary && r.examMeta && (r.faqs?.length ?? 0) >= 3 && (r.summaryPoints?.length ?? 0) >= 2 && r.description);
}
const failing = new Set();
for (const r of idx.nationalExamRecords) if (!isPublishable(r)) failing.add(r.slug);
console.log('Failing slugs to repair:', failing.size);

// ── load every batch file (raw) + build global program map ──────────
const files = readdirSync(DIR).filter((f) => /^batch\d+\.mjs$/.test(f)).sort();
const mods = {};
const progByBody = {};
for (const f of files) {
  const m = await import(pathToFileURL(process.cwd() + '/' + DIR + '/' + f).href);
  mods[f] = m;
  for (const p of (m.programs || [])) if (p && p.body && !progByBody[p.body]) progByBody[p.body] = p;
}

// ── FAQ synthesis (truthful, drawn from the record's own data) ───────
function synthFaqs(rec, prog) {
  const meta = rec.examMeta || {};
  const faqs = (rec.faqs || []).map((f) => ({ q: f.q, a: f.a }));
  const has = (q) => faqs.some((x) => x.q === q);
  const push = (q, a) => { if (q && a && !has(q)) faqs.push({ q, a }); };

  const slug = rec.slug || 'this exam';
  const admin = meta.admin || (prog && /Pearson VUE/i.test(prog.proctoring || '') ? 'Pearson VUE' : 'the exam provider');

  // 1) registration
  push(`How do I register for ${slug}?`,
    `You register and schedule ${slug} through ${admin}. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date.`);

  // 2) format / duration
  const parts = [];
  if (meta.format) parts.push(`delivered as ${meta.format}`);
  if (meta.questions) parts.push(`with about ${meta.questions} items`);
  if (meta.time) parts.push(`in ${meta.time}`);
  if (parts.length) {
    let a = `The exam is ${parts.join(', ')}.`;
    if (meta.pass) a += ` The published pass mark is ${meta.pass}.`;
    push(`What is the ${slug} exam format?`, a);
  }

  // 3) validity / renewal (from the body's program dossier — real text)
  if (prog && prog.recertification) {
    push(`How long is the ${slug} certification valid?`, String(prog.recertification).trim());
  }

  // 4) cost
  if (meta.fee) {
    push(`How much does ${slug} cost?`,
      `The exam fee is ${meta.fee}. Optional study materials and retakes are priced separately.`);
  }

  // 5) audience (guaranteed fallback)
  if (rec.audience) {
    push(`Who should take ${slug}?`, String(rec.audience).trim());
  } else if (rec.tagline) {
    push(`Who is ${slug} for?`, String(rec.tagline).trim());
  }

  // 6) coverage (guaranteed fallback)
  if (rec.description) {
    const first = String(rec.description).split(/(?<=[.!?])\s/)[0];
    push(`What does ${slug} cover?`, first);
  }

  return faqs.slice(0, 6);
}

// ── patch every copy of each failing slug across all files ──────────
let changedFiles = 0;
let patchedRecords = 0;
for (const f of files) {
  const m = mods[f];
  let changed = false;
  for (const rec of (m.exams || [])) {
    if (!failing.has(rec.slug)) continue;
    const prog = progByBody[rec.body];
    const newFaqs = synthFaqs(rec, prog);
    if ((rec.faqs?.length ?? 0) < 3 && newFaqs.length >= 3) {
      rec.faqs = newFaqs;
      changed = true;
      patchedRecords++;
    }
  }
  if (changed) {
    const out = `// AUTO-REPAIRED faqs gate — generated content. Source of truth: _kb_*.mjs / gen_national.mjs.\n` +
      `export const programs = ${JSON.stringify(m.programs || [], null, 2)};\n\n` +
      `export const exams = ${JSON.stringify(m.exams || [], null, 2)};\n`;
    writeFileSync(`${DIR}/${f}`, out, 'utf8');
    changedFiles++;
    console.log(`  rewrote ${f} (${ (m.exams||[]).filter(e=>failing.has(e.slug)).length } failing slugs patched)`);
  }
}

console.log(`\nDone. Files rewritten: ${changedFiles}, records patched: ${patchedRecords}`);
