const files = [
  'new-york-real-estate-salesperson-license.mjs',
  'california-journeyman-electrician-license.mjs',
  'california-notary-public-commission.mjs',
  'texas-cosmetology-license.mjs'
];
for (const f of files) {
  const mod = await import('./src/data/examCatalog/depth/' + f);
  const d = mod.default;
  for (const k of ['commonMistakes', 'questionTypes']) {
    const wc = d[k].summary.trim().split(/\s+/).length;
    console.log(f, k, wc);
  }
}
