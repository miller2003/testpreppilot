/**
 * repairBatch.mjs — salvage a research batch file that a writer truncated or
 * mis-quoted.
 *
 * Subagents write these files in one long streaming pass. Two failure modes
 * show up over and over:
 *
 *   1. The write is cut off mid-object, so the file ends with something like
 *      `fee: '~` and the whole module fails to parse.
 *   2. A single property loses its opening quote
 *      (`summary: The CCAK is ...'`), which also kills the whole module.
 *
 * Either one destroys hundreds of otherwise-good exam records. This tool
 * recovers everything that is intact:
 *
 *   - splits the file into its `programs` and `exams` arrays
 *   - walks each array with a string-aware bracket scanner to isolate
 *     individual top-level objects
 *   - tries to parse each object on its own; applies targeted auto-fixes and
 *     retries; drops it only if it is genuinely unrecoverable
 *   - rewrites a clean, valid ESM module
 *
 * Usage:
 *   node repairBatch.mjs              # scan and repair every broken batch
 *   node repairBatch.mjs 32 36        # repair specific batches
 *   node repairBatch.mjs --dry        # report only, write nothing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));

/* ------------------------------------------------------------------ *
 * String-aware scanning
 * ------------------------------------------------------------------ */

/**
 * Find the top-level `[ ... ]` that follows `marker`, returning its inner
 * text plus the slice offsets. Quote- and comment-aware so brackets inside
 * strings do not throw off the depth count.
 */
function extractArray(src, marker) {
  const at = src.indexOf(marker);
  if (at === -1) return null;

  const open = src.indexOf('[', at);
  if (open === -1) return null;

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = open; i < src.length; i += 1) {
    const ch = src[i];

    if (escaped) {
      escaped = false;
      continue;
    }
    if (quote) {
      if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      continue;
    }
    // skip line comments so a `//` URL fragment cannot confuse us
    if (ch === '/' && src[i + 1] === '/') {
      const nl = src.indexOf('\n', i);
      i = nl === -1 ? src.length : nl;
      continue;
    }
    if (ch === '[' || ch === '{') depth += 1;
    else if (ch === ']' || ch === '}') {
      depth -= 1;
      if (depth === 0) {
        return { inner: src.slice(open + 1, i), start: open + 1, end: i, closed: true };
      }
    }
  }

  // Never closed — the file was truncated. Hand back everything we have.
  return { inner: src.slice(open + 1), start: open + 1, end: src.length, closed: false };
}

/**
 * Split an array body into the text of each top-level `{...}` object.
 * A trailing unterminated object is returned separately as `partial`.
 */
function splitObjects(inner) {
  const objects = [];
  let depth = 0;
  let quote = null;
  let escaped = false;
  let objStart = -1;

  for (let i = 0; i < inner.length; i += 1) {
    const ch = inner[i];

    if (escaped) {
      escaped = false;
      continue;
    }
    if (quote) {
      if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '/' && inner[i + 1] === '/') {
      const nl = inner.indexOf('\n', i);
      i = nl === -1 ? inner.length : nl;
      continue;
    }

    if (ch === '{') {
      if (depth === 0) objStart = i;
      depth += 1;
    } else if (ch === '}') {
      depth -= 1;
      if (depth === 0 && objStart !== -1) {
        objects.push(inner.slice(objStart, i + 1));
        objStart = -1;
      }
      if (depth < 0) depth = 0; // defensive: stray brace
    }
  }

  const partial = depth > 0 && objStart !== -1 ? inner.slice(objStart) : null;
  return { objects, partial };
}

/* ------------------------------------------------------------------ *
 * Auto-fixes
 * ------------------------------------------------------------------ */

function parseObject(text) {
  // eslint-disable-next-line no-new-func
  return new Function(`return (${text});`)();
}

/**
 * `summary: The CCAK is ...'`  ->  `summary: 'The CCAK is ...'`
 * A value that ends in a quote but does not start with one lost its opener.
 */
function fixMissingOpenQuote(text) {
  // The negative lookahead deliberately consumes the whitespace after the
  // colon itself. Writing it as `:\s*(?!['"])` looks equivalent but is not —
  // `\s*` backtracks to zero width, the lookahead then evaluates at a space
  // instead of at the quote, and perfectly valid lines like `id: 'iapp',`
  // get wrapped a second time into `id: ' \'iapp'`.
  return text.replace(
    /^(\s*)([A-Za-z_$][\w$]*)\s*:(?![ \t]*(?:['"`[{]|\d|true\b|false\b|null\b|undefined\b))[ \t]*([^\n]*?)(['"])[ \t]*(,?)[ \t]*$/gm,
    (match, indent, key, body, closer, comma) => {
      if (!body.trim()) return match;
      const safe = closer === "'" ? body.replace(/'/g, "\\'") : body.replace(/"/g, '\\"');
      return `${indent}${key}: ${closer}${safe}${closer}${comma}`;
    }
  );
}

/**
 * `note: 'it's fine'` -> `note: 'it\'s fine'`
 * Only touches single-quoted one-line values where the inner apostrophe count
 * is odd, which is the signature of an unescaped apostrophe.
 */
function fixUnescapedApostrophes(text) {
  return text.replace(
    /^(\s*)([A-Za-z_$][\w$]*)\s*:\s*'(.*)'(,?)\s*$/gm,
    (match, indent, key, body, comma) => {
      if (!body.includes("'")) return match;
      if (/\\'/.test(body)) return match; // already escaped by the author
      return `${indent}${key}: '${body.replace(/'/g, "\\'")}'${comma}`;
    }
  );
}

function fixTrailingComma(text) {
  return text.replace(/,(\s*[}\]])/g, '$1');
}

const FIXES = [
  ['missing open quote', fixMissingOpenQuote],
  ['unescaped apostrophe', fixUnescapedApostrophes],
  ['trailing comma', fixTrailingComma]
];

/**
 * Count quote characters on a line that actually open/close a string,
 * ignoring escaped ones. Used to spot lines with broken quote parity.
 */
function unescapedCount(line, quote) {
  let n = 0;
  for (let i = 0; i < line.length; i += 1) {
    if (line[i] === '\\') {
      i += 1;
      continue;
    }
    if (line[i] === quote) n += 1;
  }
  return n;
}

/**
 * Whole-file pre-pass, run BEFORE any bracket scanning.
 *
 * This matters more than it looks. The scanners below track whether they are
 * inside a string so that braces in prose do not corrupt the depth count. A
 * single line with odd quote parity — one missing opening quote, say —
 * inverts that state for the entire rest of the file, so every object after
 * it gets mis-split and thrown away. Repairing at the object level is too
 * late; by then the damage is done. So we normalise line-by-line first, where
 * each line can be judged on its own.
 */
function prescrub(src) {
  const notes = [];

  // Artifact seen in streamed writer output: every scalar comes through as
  // `key: ' \'value'`, i.e. the real value gains a leading space+apostrophe.
  // It parses as valid JS, so nothing complains — the corruption only shows up
  // later as slugs like " 'giac-gwapt" that match no catalog row. The shape is
  // exact and only ever follows a colon, so stripping it is lossless.
  const deArtifact = src.replace(/([A-Za-z_$][\w$]*\s*:)[ \t]*'[ \t]\\'/g, "$1 '");
  if (deArtifact !== src) {
    notes.push(`${(src.match(/'[ \t]\\'/g) || []).length} quote artifacts`);
  }

  let out = fixMissingOpenQuote(deArtifact);
  if (out !== deArtifact) notes.push('missing open quote');

  // Second sweep: any single-line property whose quote parity is still odd
  // gets its stray apostrophes escaped, so scanning stays in sync.
  const lines = out.split('\n');
  let balanced = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const m = line.match(/^(\s*)([A-Za-z_$][\w$]*)\s*:\s*'(.*)$/);
    if (!m) continue;
    if (unescapedCount(line, "'") % 2 === 0) continue;

    // Odd parity on a `key: '...` line. Close it at end of line, escaping
    // any interior apostrophes so the value survives intact.
    const [, indent, key, rest] = m;
    const comma = /,\s*$/.test(rest) ? ',' : '';
    const body = rest.replace(/,\s*$/, '').replace(/'/g, "\\'");
    lines[i] = `${indent}${key}: '${body}'${comma}`;
    balanced += 1;
  }
  if (balanced) notes.push(`${balanced} quote parity`);

  return { text: lines.join('\n'), notes };
}

/**
 * Parse an object, applying fixes cumulatively until it works.
 * Returns { value, text, applied[] } or null if unrecoverable.
 */
function parseWithRepair(text) {
  try {
    return { value: parseObject(text), text, applied: [] };
  } catch {
    /* fall through to repair attempts */
  }

  let current = text;
  const applied = [];

  for (const [label, fix] of FIXES) {
    const next = fix(current);
    if (next === current) continue;
    current = next;
    applied.push(label);
    try {
      return { value: parseObject(current), text: current, applied };
    } catch {
      /* keep stacking fixes */
    }
  }

  return null;
}

/* ------------------------------------------------------------------ *
 * Serialisation
 * ------------------------------------------------------------------ */

function serialise(value, indent = 2) {
  const pad = ' '.repeat(indent);

  if (value === null) return 'null';
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const scalar = value.every((v) => typeof v === 'string' && v.length < 60);
    if (scalar && value.length <= 3) return `[${value.map((v) => serialise(v)).join(', ')}]`;
    const items = value.map((v) => `${pad}  ${serialise(v, indent + 2)}`);
    return `[\n${items.join(',\n')}\n${pad}]`;
  }

  const entries = Object.entries(value).filter(([, v]) => v !== undefined);
  if (entries.length === 0) return '{}';
  const body = entries.map(([k, v]) => {
    const key = /^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k}'`;
    return `${pad}  ${key}: ${serialise(v, indent + 2)}`;
  });
  return `{\n${body.join(',\n')}\n${pad}}`;
}

function renderModule(batchId, programs, exams) {
  const head = `// batch${batchId} — repaired by repairBatch.mjs\n`;
  const p = programs.length
    ? `export const programs = [\n${programs.map((x) => `  ${serialise(x, 2)}`).join(',\n')}\n];\n`
    : 'export const programs = [];\n';
  const e = exams.length
    ? `export const exams = [\n${exams.map((x) => `  ${serialise(x, 2)}`).join(',\n')}\n];\n`
    : 'export const exams = [];\n';
  return `${head}\n${p}\n${e}\nexport default { programs, exams };\n`;
}

/* ------------------------------------------------------------------ *
 * Driver
 * ------------------------------------------------------------------ */

async function parses(file) {
  try {
    await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
    return true;
  } catch {
    return false;
  }
}

async function repairFile(batchId, { dry }) {
  const file = path.join(DIR, `batch${batchId}.mjs`);
  if (!fs.existsSync(file)) return { batchId, skipped: 'missing' };

  const original = fs.readFileSync(file, 'utf8');
  if (original.length < 400) return { batchId, skipped: 'placeholder' };

  if (await parses(file)) return { batchId, skipped: 'already valid' };

  // Normalise quote parity across the whole file before scanning, otherwise
  // one bad line silently invalidates everything after it.
  const { text: src, notes: scrubNotes } = prescrub(original);

  const programsArr = extractArray(src, 'export const programs');
  const examsArr = extractArray(src, 'export const exams');

  const out = { batchId, programs: 0, exams: 0, dropped: 0, fixed: 0, truncated: false, scrubNotes };

  const collect = (arr) => {
    if (!arr) return [];
    const { objects, partial } = splitObjects(arr.inner);
    if (partial) out.truncated = true;
    const kept = [];
    for (const text of objects) {
      const res = parseWithRepair(text);
      if (!res) {
        out.dropped += 1;
        continue;
      }
      if (res.applied.length) out.fixed += 1;
      kept.push(res.value);
    }
    return kept;
  };

  const programs = collect(programsArr);
  const exams = collect(examsArr);

  out.programs = programs.length;
  out.exams = exams.length;

  if (dry) return out;

  // Back up the file exactly as it arrived. Writing the prescrubbed text here
  // instead makes every "restore and retry" cycle compound the previous pass's
  // mistakes, which is how a bad regex silently became permanent damage.
  if (!fs.existsSync(`${file}.orig`)) fs.writeFileSync(`${file}.orig`, original, 'utf8');
  fs.writeFileSync(file, renderModule(batchId, programs, exams), 'utf8');
  out.ok = await parses(file);
  return out;
}

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const explicit = args.filter((a) => /^\d+$/.test(a)).map((a) => a.padStart(2, '0'));

const targets = explicit.length
  ? explicit
  : fs
      .readdirSync(DIR)
      .filter((f) => /^batch\d{2}\.mjs$/.test(f))
      .map((f) => f.slice(5, 7))
      .sort();

console.log(`repairBatch — ${targets.length} candidate file(s)${dry ? ' [dry run]' : ''}\n`);

let repaired = 0;
for (const id of targets) {
  const r = await repairFile(id, { dry });
  if (r.skipped) continue;
  repaired += 1;
  const flags = [
    r.truncated ? 'TRUNCATED' : null,
    r.fixed ? `${r.fixed} auto-fixed` : null,
    r.dropped ? `${r.dropped} dropped` : null,
    r.ok === false ? 'STILL BROKEN' : null
  ]
    .filter(Boolean)
    .join(', ');
  console.log(`  batch${id}: recovered ${r.programs} programs / ${r.exams} exams${flags ? `  (${flags})` : ''}`);
}

if (repaired === 0) console.log('  nothing to repair — all batches parse cleanly');
console.log('\ndone');
