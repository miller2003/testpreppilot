import { depthFor } from '../src/data/examCatalog/examDepth.mjs';
for (const s of ['microsoft-az-204', 'microsoft-ai-900', 'nic-cosmetology-practical', 'microsoft-ai-901']) {
  const d = depthFor(s) || {};
  console.log(`\n== ${s}`);
  console.log('   pay :', d.salaryOutlook?.headline);
  console.log('   pass:', d.passRate?.headline);
}
