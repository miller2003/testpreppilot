import { pathToFileURL } from 'url';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const file = process.argv[2];
const mod = await import(pathToFileURL(file).href);
const d = mod.default;

const fields = ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay'];
let ok = true;
for (const f of fields) {
  const summary = d[f] && d[f].summary;
  if (typeof summary !== 'string') {
    console.log(`MISSING summary in ${f}`);
    ok = false;
    continue;
  }
  const words = summary.split(/\s+/).filter(Boolean).length;
  const flag = words < 250 ? ' <-- FAIL' : '';
  if (words < 250) ok = false;
  console.log(`${f}: ${words} words${flag}`);
}

// check resourceComparison rows
if (d.resourceComparison && Array.isArray(d.resourceComparison.rows)) {
  for (const r of d.resourceComparison.rows) {
    if (!Array.isArray(r.values)) {
      console.log(`resourceComparison row "${r.label}" has non-array values`);
      ok = false;
    }
  }
}

// check commonMistakes items
if (d.commonMistakes && Array.isArray(d.commonMistakes.items)) {
  for (const it of d.commonMistakes.items) {
    const keys = Object.keys(it).sort();
    if (keys.join(',') !== 'fix,mistake') {
      console.log(`commonMistakes item has keys ${keys.join(',')}`);
      ok = false;
    }
  }
}

// check CJK characters in raw file
const raw = fs.readFileSync(file, 'utf8');
if (/[\u4e00-\u9fff]/.test(raw)) {
  console.log('CJK characters found in file');
  ok = false;
}

// check for bare apostrophes inside single-quoted strings (approximate check: apostrophe preceded by letter inside single-quoted context)
const lines = raw.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // find single-quoted strings that contain a bare ' preceded by a word char and followed by s/word (common apostrophe pattern)
  const m = line.match(/'[^']*[A-Za-z0-9]'[A-Za-z]/);
  if (m) {
    console.log(`Possible bare apostrophe at line ${i + 1}: ${line.trim()}`);
    ok = false;
  }
}

console.log(ok ? 'ALL CHECKS PASS' : 'CHECKS FAILED');
process.exit(ok ? 0 : 1);
