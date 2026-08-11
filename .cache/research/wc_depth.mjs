Promise.all([
  import('../../src/data/examCatalog/depth/cpa-exam.mjs'),
  import('../../src/data/examCatalog/depth/enrolled-agent.mjs')
]).then(([cpa, ea]) => {
  const wc = s => (s ? s.trim().split(/\s+/).length : 0);
  const summarize = (name, d) => {
    const r = {};
    r.salary = wc(d.salaryOutlook && d.salaryOutlook.summary);
    r.passRate = wc(d.passRate && d.passRate.summary);
    r.studyPlan = wc(d.studyPlan && d.studyPlan.summary);
    r.prepStrategies = wc(d.prepStrategies && d.prepStrategies.summary);
    r.resourceComparison = wc(d.resourceComparison && d.resourceComparison.summary);
    r.commonMistakes = wc(d.commonMistakes && d.commonMistakes.summary);
    r.questionTypes = wc(d.questionTypes && d.questionTypes.summary);
    r.examDay = wc(d.examDay && d.examDay.summary);
    console.log('=== ' + name + ' ===');
    Object.entries(r).forEach(([k, v]) => console.log('  ' + k + ': ' + v + (v < 250 ? '  <-- UNDER 250' : '  ok')));
  };
  summarize('cpa-exam', cpa.default);
  summarize('enrolled-agent', ea.default);
}).catch(e => { console.error(e); process.exit(2); });
