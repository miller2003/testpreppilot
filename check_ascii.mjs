import fs from 'fs';
const files = [
  'new-york-real-estate-salesperson-license.mjs',
  'california-journeyman-electrician-license.mjs',
  'california-notary-public-commission.mjs',
  'texas-cosmetology-license.mjs'
];
for (const f of files) {
  const txt = fs.readFileSync('src/data/examCatalog/depth/' + f, 'utf8');
  const nonAscii = [...txt].filter(ch => ch.charCodeAt(0) > 127);
  console.log(f, 'non-ascii chars:', nonAscii.length, nonAscii.length ? [...new Set(nonAscii)] : '');
}
