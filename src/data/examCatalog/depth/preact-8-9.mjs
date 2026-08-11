const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & standardized-testing desk',
    bio: 'We cover ACT\u2019s PreACT suite for grades 8-10. Format and fee facts come from ACT official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PreACT format, score scale and school-administered delivery against ACT official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'PreACT is a no-stakes readiness check: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'PreACT is ACT\u2019s 8th- and 9th-grade readiness assessment, administered in schools, and it carries no admissions or scholarship consequence. It is designed to measure whether a student is on track for college-level work and to preview the ACT format and scoring scale, so it has no direct occupational mapping and no BLS SOC code attaches to it. The economic context is the same one that frames all readiness assessments: BLS reported that in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone. PreACT sits at the start of that pipeline - it identifies skill gaps in middle school and early high school, when remediation is cheapest - and its score report links directly to ACT\u2019s college-readiness benchmarks. For schools, the value is aggregate: the assessment shows which cohorts and which domains need instructional attention. For individual students, the value is calibration: a 9th grader who sees a projected ACT range with a weak Math section has several years to fix it before the real ACT matters. BLS classifies workers by occupation and education, not test scores, so no PreACT score maps to a wage; the honest statement is that PreACT predicts readiness, not income, and the income follows the college completion that readiness makes more likely. Families should treat it as a free diagnostic with a projected ACT score attached, not as an event that needs intensive preparation.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'PreACT score range', value: '1-36 (predicted ACT range)', note: 'ACT, Inc.' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'PreACT is not pass/fail; it is scored 1-36 per subject and reports a predicted ACT range and readiness benchmarks',
    summary: 'ACT publishes no pass rate for PreACT because the assessment has no passing score. PreACT is scored on the same 1-36 scale per subject as the ACT - English, Math, Reading and Science - and the score report includes a projected ACT score range based on the student\u2019s performance, along with ACT readiness benchmarks that estimate the likelihood of success in entry-level college courses. The assessment is delivered on paper in schools during a testing window ACT sets, and it is deliberately lower-stakes than the ACT: there is no essay, the format is a shortened preview, and the score is diagnostic rather than evaluative. What students and families receive is a score report with per-subject scores, the predicted ACT range, readiness benchmarks, and a skills profile that links to ACT\u2019s free practice resources. Because there is no cut score, no college use, and no consequence, the report\u2019s real value is the diagnosis: which subjects are on track, which domains need work, and what ACT score range to expect if the student took the real exam soon. ACT also administers PreACT 8/9 for 8th and 9th graders and PreACT for 10th graders, with the 10th-grade version being the closer preview of the ACT; the two versions have slightly different score reporting. The honest summary: treat PreACT as a free diagnostic with a projected ACT range; the benchmark bands define "on track," and the skills profile defines what to study, but nothing about the score is pass or fail.',
    source: { label: 'ACT PreACT official information', url: 'https://www.act.org/content/act/en/products-and-services/preact.html' },
    caveat: 'No pass rate exists; outcomes are 1-36 subject scores, a predicted ACT range, and readiness benchmarks.'
  },
  studyPlan: {
    summary: 'PreACT does not justify a heavy preparation plan, because it is a diagnostic with no stakes; the right investment is a light, structured approach that produces an accurate reading. The assessment mirrors the ACT structure in shortened form: English, Math, Reading and Science, scored 1-36 each, delivered on paper in school. A sensible plan is 5-10 hours across 2-3 weeks, focused on format familiarity rather than content cramming. Week 1: take ACT\u2019s free PreACT practice materials or a shortened official ACT practice section to learn the timing and item style; record which subjects feel fast and which feel hard. Week 2: do two targeted practice blocks on the weakest subject - typically Math for most 8th/9th graders, since algebra gaps show up early - using ACT\u2019s free practice resources and the skill profile from any prior readiness testing. Week 3: one more timed practice block and a review of the errors, then take the real assessment at school rested. Students should not treat PreACT as the start of test prep: the assessment is a snapshot, and the hours are better spent in regular coursework, which is the actual driver of readiness at this age. The exception is students whose school uses PreACT scores to place them into honors or acceleration pathways; for those students, the score has a real consequence and a slightly more serious practice block is justified. The main preparation goal is to avoid the two failure modes: walking in cold and letting format confusion distort the score, or over-preparing and turning a diagnostic into a stress event.',
    totalHours: '5-10 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Format familiarity', tasks: ['Free practice materials', 'Time the four subjects'], hours: 3 },
      { label: 'Week 2', focus: 'Weakest subject', tasks: ['Two targeted practice blocks', 'Use the skill profile'], hours: 4 },
      { label: 'Week 3', focus: 'Timed block and review', tasks: ['One timed practice block', 'Review errors; rest before test day'], hours: 3 }
    ],
    variants: [
      { label: 'Placement consequence', detail: 'If the school uses PreACT for honors or acceleration placement, treat the score seriously and prepare accordingly.' },
      { label: 'PreACT 8/9 vs PreACT', detail: 'The 8/9 version is for 8th-9th graders; the 10th-grade PreACT is the closer ACT preview.' }
    ]
  },
  prepStrategies: {
    summary: 'The smartest PreACT strategies are about getting an accurate diagnostic rather than maximizing a score. Strategy one: learn the format before test day so the diagnostic measures readiness, not format confusion - a student who has never seen ACT-style timing will score lower than their actual readiness, and that misreads the whole purpose. Strategy two: do not cram content; the assessment is a snapshot of years of learning, and two weeks of cramming will not move it meaningfully, but regular coursework will. Strategy three: use the free ACT practice resources targeted at the skill profile, because the score report\u2019s domain breakdown (not the subject total) tells you what to work on. Strategy four: practice the timing once or twice so pacing feels familiar; ACT-style sections are time-pressured in a way classroom tests are not, and a pacing rehearsal prevents a distorted score. Strategy five: for students whose schools use the score for placement, take the practice blocks more seriously and ask the counselor what the placement thresholds are, because the consequence changes the preparation calculus. Strategy six: after the score arrives, use the predicted ACT range as planning information - it tells a 9th grader how much runway exists before the real ACT, and it should drive course selection (taking Algebra II on time matters more than any test-prep workbook).',
    items: [
      { title: 'Learn the format, not the content', detail: 'A diagnostic should measure readiness, not format confusion.' },
      { title: 'Skip the cramming', detail: 'Coursework is the real driver of readiness at this age.' },
      { title: 'Use the skill profile', detail: 'The domain breakdown, not the subject total, sets the agenda.' },
      { title: 'Rehearse pacing once', detail: 'ACT-style timing distorts scores if it is a surprise.' },
      { title: 'Ask about placement use', detail: 'If the score affects placement, prepare accordingly.' }
    ]
  },
  resourceComparison: {
    summary: 'The PreACT resource market is small because the assessment is a school-administered diagnostic with no stakes. The primary resources are free: ACT\u2019s PreACT practice materials and sample questions on the ACT website, and the free ACT Academy (now part of ACT\u2019s free practice platform), which provides skill-tagged practice tied to readiness benchmarks. The score report itself is the most important resource: the skills profile tells students exactly which domains to work on, and ACT links the report to free practice. Commercial test-prep books and courses exist for the ACT, and a PreACT-taker could use a low-cost ACT book for format familiarity, but full courses are overkill for an 8th-9th grader taking a diagnostic; the honest advice is to spend nothing beyond possibly a used ACT prep book for format exposure. School districts sometimes provide free readiness materials and counseling around the score report. The honest ranking: free ACT practice resources, the score report\u2019s skill profile, and a used ACT book at most. Prices here are current as of the 2025-26 testing year and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ACT free practice resources', values: ['Free', 'Online', 'Format familiarity and skill practice'] },
      { label: 'Score report skills profile', values: ['Included', 'Paper report', 'The diagnostic that sets the study agenda'] },
      { label: 'ACT prep book (used)', values: ['$5-$20', 'Print', 'Format exposure at most'] },
      { label: 'Full ACT prep course', values: ['$200-$2,000', 'Live/on-demand', 'Overkill for a no-stakes diagnostic'] }
    ],
    footnote: 'Prices dated 2025-26; free ACT resources are sufficient. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common PreACT mistakes come from treating a no-stakes diagnostic as if it were the ACT. Mistake one: walking in cold; students who have never seen ACT-style timing score below their true readiness, and the distorted score misleads families and schools. Mistake two: the opposite failure - weeks of intensive prep for a diagnostic, which spends hours that coursework would repay better and converts a snapshot into a stress event. Mistake three: ignoring the score report\u2019s skill profile and looking only at the projected ACT range; the range is informational, while the domain breakdown is actionable. Mistake four: letting one weak subject define the conversation; the report is a profile, and a single low subject is normal at this age. Mistake five: parents treating the predicted ACT range as a ceiling; ACT\u2019s projected range is based on current readiness and should motivate course-taking, not label a student. Mistake six: schools and families ignoring the placement consequence; if the district uses PreACT for honors or acceleration decisions, families should confirm the policy before test day. Finally, students should not compare PreACT scores competitively with peers; the assessment\u2019s only job is to describe readiness, and the follow-up conversation with the counselor is where its value lands.',
    items: [
      { mistake: 'Walking in cold', fix: 'Practice the format once or twice so timing is familiar.' },
      { mistake: 'Over-preparing for a diagnostic', fix: 'Light format practice; coursework is the real driver.' },
      { mistake: 'Ignoring the skill profile', fix: 'Use the domain breakdown, not just the projected range.' },
      { mistake: 'Treating the range as a ceiling', fix: 'The projection motivates course-taking, not labels.' },
      { mistake: 'Missing the placement policy', fix: 'Ask the counselor how the score is used.' }
    ]
  },
  questionTypes: {
    summary: 'PreACT mirrors the ACT structure in shortened form: English (usage/mechanics and rhetorical skills), Math (pre-algebra through intermediate algebra and coordinate geometry), Reading (four passage types), and Science (data representation, research summaries, conflicting viewpoints), each scored 1-36. The assessment is paper-delivered in schools, and there is no essay on the 8/9 version; the 10th-grade PreACT is the closer preview of the full ACT. The score report includes a projected ACT range based on performance. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'English', share: 'Shortened section', detail: 'Grammar, punctuation, and rhetorical skills.' },
      { name: 'Math', share: 'Shortened section', detail: 'Pre-algebra through intermediate algebra.' },
      { name: 'Reading', share: 'Shortened section', detail: 'Four passage types; no calculator.' },
      { name: 'Science', share: 'Shortened section', detail: 'Data interpretation and reasoning.' }
    ],
    samples: [
      {
        prompt: 'English item: "The band practiced every afternoon, [so] the concert went smoothly." Evaluate the bracketed transition.',
        options: ['A. NO CHANGE', 'B. but', 'C. unless', 'D. although'],
        answer: 'A',
        explanation: 'The relationship is cause and effect, so "so" is correct; the other transitions imply contrast or condition.'
      },
      {
        prompt: 'Math item: A rectangle has a length of 8 and a width of 5. What is its area?',
        options: ['A. 13', 'B. 26', 'C. 40', 'D. 45'],
        answer: 'C',
        explanation: 'Area equals length times width: 8 × 5 = 40.'
      },
      {
        prompt: 'Science item: The table shows the melting points of four substances. Which substance would be liquid at 60°C?',
        options: ['A. Substance W (melting point 72°C)', 'B. Substance X (melting point 45°C)', 'C. Substance Y (melting point 80°C)', 'D. Substance Z (melting point 95°C)'],
        answer: 'B',
        explanation: 'A substance is liquid above its melting point; only substance X, at 45°C, is below 60°C and therefore liquid.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'PreACT is administered in schools on a date the school schedules within the ACT testing window (typically a school day in the fall or spring). There is no individual registration fee for students in most districts; the district pays per-student costs and manages logistics. Students check in through the school\u2019s process, bring sharpened No. 2 pencils (the assessment is paper-based), and a calculator is permitted for the Math section under the school\u2019s policy (ACT\u2019s approved-calculator rules apply). The assessment runs about two hours including instructions, shorter than the full ACT because the sections are shortened and there is no essay. Phones and smartwatches are not permitted. Students with documented disabilities should have accommodations arranged through the school in advance. Scores are returned to the school, and families typically receive the score report through the school or the ACT portal; because it is a diagnostic, there is no score-sending process to colleges. Afterwards, the family should review the skill profile and predicted ACT range together, ask the counselor whether the score affects any placement decision, and use the profile to plan coursework and, later, ACT preparation when the student approaches the junior-year testing timeline.',
    bring: ['Sharpened No. 2 pencils', 'Approved calculator for Math (per school policy)', 'A rested morning; the assessment runs about 2 hours'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Stress - the assessment is a diagnostic'],
    timeline: [
      { time: 'School check-in', detail: 'Room assignment and instructions.' },
      { time: 'English', detail: 'Shortened ACT-style section.' },
      { time: 'Math', detail: 'Shortened section with calculator policy.' },
      { time: 'Reading and Science', detail: 'Shortened sections.' },
      { time: '~2 hours total', detail: 'Dismissal; scores return to the school.' }
    ],
    rules: [
      'The assessment is paper-based; fill in bubbles with No. 2 pencils.',
      'Approved calculators only; personal electronics are not permitted.',
      'Accommodations are arranged through the school in advance.',
      'No college score-sending process; the report is diagnostic.'
    ],
    afterwards: 'Review the skill profile and predicted ACT range with the family and counselor; confirm any placement use, and plan coursework (and later ACT prep) from the domain breakdown.'
  }
};

export default data;
