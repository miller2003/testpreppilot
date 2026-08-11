Promise.all([
  import('../../src/data/examCatalog/depth/cpa-exam.mjs'),
  import('../../src/data/examCatalog/depth/enrolled-agent.mjs')
]).then(([cpa, ea]) => {
  const check = (name, d) => {
    const issues = [];
    const sec = [];
    if (d.salaryOutlook) {
      sec.push('salary');
      const s = d.salaryOutlook;
      if (!s.headline) issues.push('salary.headline empty');
      if (!s.summary || s.summary.length < 250) issues.push('salary.summary<250');
      if (!s.rows.length) issues.push('salary.rows empty');
      s.rows.forEach(r => { if (!r.note) issues.push('salary row missing note: ' + r.label); });
      if (!s.source || !s.source.url) issues.push('salary.source missing');
    }
    if (d.passRate) {
      sec.push('passRate');
      const p = d.passRate;
      if (!p.headline) issues.push('passRate.headline');
      if (!p.summary || p.summary.length < 250) issues.push('passRate.summary<250');
      if (!p.rows.length) issues.push('passRate.rows empty');
      p.rows.forEach(r => { if (!r.note) issues.push('passRate row missing note: ' + r.label); });
      if (!p.source) issues.push('passRate.source');
    }
    if (d.studyPlan && d.studyPlan.weeks && d.studyPlan.weeks.length) {
      sec.push('studyPlan');
      if (!d.studyPlan.summary || d.studyPlan.summary.length < 50) issues.push('studyPlan.summary short');
      if (!d.studyPlan.totalHours) issues.push('studyPlan.totalHours');
    }
    if (d.prepStrategies && d.prepStrategies.items && d.prepStrategies.items.length) {
      sec.push('prepStrategies');
      if (!d.prepStrategies.summary || d.prepStrategies.summary.length < 50) issues.push('prepStrategies.summary short');
    }
    if (d.resourceComparison && d.resourceComparison.rows && d.resourceComparison.rows.length) {
      sec.push('resourceComparison');
      if (!d.resourceComparison.footnote) issues.push('resourceComparison.footnote');
    }
    if (d.commonMistakes && d.commonMistakes.items && d.commonMistakes.items.length) sec.push('commonMistakes');
    if (d.questionTypes) {
      sec.push('questionTypes');
      if (!d.questionTypes.summary || d.questionTypes.summary.length < 200) issues.push('questionTypes.summary short');
      if (!d.questionTypes.samples.length) issues.push('questionTypes.samples empty');
      d.questionTypes.samples.forEach((s, i) => { if (!s.answer) issues.push('sample ' + i + ' missing answer'); });
    }
    if (d.examDay) {
      sec.push('examDay');
      if (!d.examDay.bring.length) issues.push('examDay.bring empty');
      if (!d.examDay.timeline.length) issues.push('examDay.timeline empty');
    }
    if (!d.author || !d.author.name) issues.push('author.name empty');

    console.log('=== ' + name + ' ===');
    console.log('sections present (' + sec.length + '):', sec.join(', '));
    console.log('salary rows:', (d.salaryOutlook && d.salaryOutlook.rows.length) || 0,
      '| passRate rows:', (d.passRate && d.passRate.rows.length) || 0,
      '| studyPlan weeks:', (d.studyPlan && d.studyPlan.weeks.length) || 0,
      '| prep items:', (d.prepStrategies && d.prepStrategies.items.length) || 0,
      '| resources:', (d.resourceComparison && d.resourceComparison.rows.length) || 0,
      '| mistakes:', (d.commonMistakes && d.commonMistakes.items.length) || 0,
      '| samples:', (d.questionTypes && d.questionTypes.samples.length) || 0,
      '| examDay timeline:', (d.examDay && d.examDay.timeline.length) || 0);
    console.log('salary.summary words:', d.salaryOutlook ? d.salaryOutlook.summary.split(/\s+/).length : 0,
      '| passRate.summary words:', d.passRate ? d.passRate.summary.split(/\s+/).length : 0);
    if (issues.length) { console.log('ISSUES:'); issues.forEach(i => console.log('  - ' + i)); }
    else console.log('OK: no empty placeholders, all counts non-zero, all sourced.');
    return issues.length;
  };
  let total = 0;
  total += check('cpa-exam', cpa.default);
  total += check('enrolled-agent', ea.default);
  process.exit(total > 0 ? 1 : 0);
}).catch(e => { console.error(e); process.exit(2); });
