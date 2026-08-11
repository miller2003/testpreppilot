Promise.all([
  import('../../src/data/examCatalog/depth/cpa-exam.mjs'),
  import('../../src/data/examCatalog/depth/enrolled-agent.mjs')
]).then(([cpa, ea]) => {
  const wc = s => (s ? s.trim().split(/\s+/).length : 0);
  const sectionProse = d => {
    const out = {};
    if (d.salaryOutlook) out.salaryOutlook = wc(d.salaryOutlook.summary) + wc(d.salaryOutlook.growth);
    if (d.passRate) out.passRate = wc(d.passRate.summary) + wc(d.passRate.caveat);
    if (d.studyPlan) {
      let t = wc(d.studyPlan.summary);
      (d.studyPlan.weeks || []).forEach(w => (w.tasks || []).forEach(x => t += wc(x)));
      (d.studyPlan.variants || []).forEach(v => t += wc(v.detail));
      out.studyPlan = t;
    }
    if (d.prepStrategies) {
      let t = wc(d.prepStrategies.summary);
      (d.prepStrategies.items || []).forEach(i => t += wc(i.detail));
      out.prepStrategies = t;
    }
    if (d.resourceComparison) out.resourceComparison = wc(d.resourceComparison.summary) + wc(d.resourceComparison.footnote);
    if (d.commonMistakes) {
      let t = wc(d.commonMistakes.summary);
      (d.commonMistakes.items || []).forEach(i => t += wc(i.mistake) + wc(i.fix));
      out.commonMistakes = t;
    }
    if (d.questionTypes) {
      let t = wc(d.questionTypes.summary);
      (d.questionTypes.types || []).forEach(x => t += wc(x.detail));
      (d.questionTypes.samples || []).forEach(s => t += wc(s.prompt) + wc(s.explanation));
      out.questionTypes = t;
    }
    if (d.examDay) {
      let t = wc(d.examDay.summary) + wc(d.examDay.afterwards);
      (d.examDay.rules || []).forEach(x => t += wc(x));
      (d.examDay.timeline || []).forEach(x => t += wc(x.detail));
      out.examDay = t;
    }
    return out;
  };
  const report = (name, d) => {
    console.log('=== ' + name + ' ===');
    const p = sectionProse(d);
    Object.entries(p).forEach(([k, v]) => console.log('  ' + k + ': ' + v + (v < 250 ? '  <-- UNDER 250 (section total)' : '  ok')));
  };
  report('cpa-exam', cpa.default);
  report('enrolled-agent', ea.default);
}).catch(e => { console.error(e); process.exit(2); });
