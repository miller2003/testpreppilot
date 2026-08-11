const tx = await import('./src/data/examCatalog/depth/texas-food-protection-manager-certification.mjs');
const ca = await import('./src/data/examCatalog/depth/california-massage-therapy-license.mjs');
const count = s => s.split(/\s+/).filter(Boolean).length;
console.log('TX commonMistakes.summary:', count(tx.default.commonMistakes.summary));
console.log('TX questionTypes.summary:', count(tx.default.questionTypes.summary));
console.log('CA questionTypes.summary:', count(ca.default.questionTypes.summary));
