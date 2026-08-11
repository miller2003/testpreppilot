const tx = await import('./src/data/examCatalog/depth/texas-food-protection-manager-certification.mjs');
const ca = await import('./src/data/examCatalog/depth/california-massage-therapy-license.mjs');
const count = s => s.split(/\s+/).filter(Boolean).length;
const t = (s) => {
  if (s.length <= 90) return s;
  return s.slice(0, 90) + ' ...';
};
console.log('TX commonMistakes.summary:', count(tx.default.commonMistakes.summary));
console.log('  head:', t(tx.default.commonMistakes.summary));
console.log('  tail:', t(tx.default.commonMistakes.summary.slice(-90)));
console.log('TX questionTypes.summary:', count(tx.default.questionTypes.summary));
console.log('  head:', t(tx.default.questionTypes.summary));
console.log('  tail:', t(tx.default.questionTypes.summary.slice(-90)));
console.log('CA questionTypes.summary:', count(ca.default.questionTypes.summary));
console.log('  head:', t(ca.default.questionTypes.summary));
console.log('  tail:', t(ca.default.questionTypes.summary.slice(-90)));
console.log('--- em-dash render check (must show \u2014 as dash, no literal \u2014) ---');
const m = ca.default.questionTypes.summary.match(/MBLEx[^0-9]{0,80}FSMTB/);
console.log('match:', JSON.stringify(m && m[0]));
