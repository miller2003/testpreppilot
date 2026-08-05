import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const file = process.argv[2] || 'batch32.mjs.broken';
const src = fs.readFileSync(path.join(DIR, file), 'utf8');
const lines = src.split('\n');

const ARTIFACT = /:\s*'\s+\\'/; // key: ' \'value'
const MISSING_OPEN = /^\s*[A-Za-z_$][\w$]*\s*:\s+(?!['"`[{\d])[A-Za-z][^\n]*'\s*,?\s*$/;

let artifact = 0;
let missingOpen = 0;
const samples = { artifact: [], missingOpen: [] };

lines.forEach((line, i) => {
  if (ARTIFACT.test(line)) {
    artifact += 1;
    if (samples.artifact.length < 4) samples.artifact.push(`${i + 1}: ${line.slice(0, 100)}`);
  } else if (MISSING_OPEN.test(line)) {
    missingOpen += 1;
    if (samples.missingOpen.length < 4) samples.missingOpen.push(`${i + 1}: ${line.slice(0, 100)}`);
  }
});

// Quote parity per line
let oddParity = 0;
const oddSamples = [];
lines.forEach((line, i) => {
  let n = 0;
  for (let j = 0; j < line.length; j += 1) {
    if (line[j] === '\\') {
      j += 1;
      continue;
    }
    if (line[j] === "'") n += 1;
  }
  if (n % 2 === 1) {
    oddParity += 1;
    if (oddSamples.length < 5) oddSamples.push(`${i + 1}: ${line.slice(0, 100)}`);
  }
});

// Where does the `' \'` artifact appear — only after `key:`, or in arrays too?
const positions = {
  'after key:': /:[ \t]*'[ \t]\\'/g,
  'after [': /\[[ \t]*'[ \t]\\'/g,
  'after ,': /,[ \t]*'[ \t]\\'/g,
  'anywhere': /'[ \t]\\'/g
};
console.log('artifact positions:');
for (const [k, re] of Object.entries(positions)) {
  console.log(`  ${k.padEnd(12)} ${(src.match(re) || []).length}`);
}
console.log('');

console.log(`file: ${file}  (${lines.length} lines, ${src.length} bytes)`);
console.log(`  "key: ' \\'value'" artifact : ${artifact}`);
console.log(`  missing opening quote      : ${missingOpen}`);
console.log(`  odd single-quote parity    : ${oddParity}`);
if (samples.artifact.length) console.log('\n  artifact samples:\n    ' + samples.artifact.join('\n    '));
if (samples.missingOpen.length) console.log('\n  missing-open samples:\n    ' + samples.missingOpen.join('\n    '));
if (oddSamples.length) console.log('\n  odd-parity samples:\n    ' + oddSamples.join('\n    '));
