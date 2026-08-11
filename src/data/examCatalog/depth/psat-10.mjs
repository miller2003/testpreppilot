const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & standardized-testing desk',
    bio: 'We cover College Board\u2019s PSAT suite for grades 8-10. Format and fee facts come from the College Board official pages and are revised each testing year; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PSAT 10 format, score scale and school-administered delivery against College Board official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'PSAT 10 is a rehearsal with no scholarship stakes: the payoff is readiness, and degree-level earnings remain the wage event (BLS, 2024)',
    summary: 'PSAT 10 is administered to 10th-grade students in schools and is deliberately designed as a checkpoint on the path to the SAT and to college. Unlike the PSAT/NMSQT taken by juniors, PSAT 10 carries no National Merit Scholarship qualification and no direct admissions consequence; its official purpose, as College Board describes it, is to measure readiness for college-level work and to give students and schools a preview of the digital SAT format and scoring scale. Because it is an assessment rather than a credential, there is no BLS SOC code tied to it, and no score maps to a wage. The economic context that matters comes from BLS education data: in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone. PSAT 10 sits at the start of the pipeline that produces those outcomes: it identifies students who are on track, flags gaps that can be remediated while there is still time before the SAT and the college-application cycle, and unlocks free practice tools. For many students the practical value is early calibration - a tenth grader who sees an 1100 baseline with a weak Math subscore has a year of runway to fix it. BLS classifies workers by occupation, not test scores, so the honest statement is that PSAT 10 predicts readiness, not income; the income follows the college completion that readiness makes more likely.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'PSAT 10 score range', value: '320-1520', note: 'College Board, digital PSAT suite' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'PSAT 10 is not pass/fail; it is scored 320-1520 and reported with readiness benchmarks and percentiles',
    summary: 'College Board publishes no pass rate for PSAT 10 because the test has no passing score. The digital PSAT 10 is scored on the same 320-1520 scale as the PSAT/NMSQT, with Reading and Writing and Math each reported 160-760. What students and families receive is a score report with section scores, national percentiles, and two kinds of benchmarks: grade-level readiness benchmarks (which estimate whether a student is on track for college-level work) and, for comparison, the SAT-suite benchmark bands. The test is adaptive: each section\u2019s second module is routed by first-module performance, exactly like the digital SAT, which is why College Board positions PSAT 10 as a format rehearsal as much as a knowledge check. Because there is no cut score, no scholarship linkage, and no admissions use, the score report\u2019s real value is diagnostic: the skill breakdown (Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions, Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry) tells a 10th grader and their school exactly which domains to work on before the junior-year PSAT/NMSQT and the SAT. Schools receive aggregated reports for planning, and College Board links scores to free Khan Academy Official Digital SAT Prep, which generates a personalized practice plan from the score. The honest summary: treat PSAT 10 as a diagnostic with a score, not a pass/fail event; the score report is the deliverable, and the benchmark bands define "on track" for the student\u2019s grade.',
    source: { label: 'College Board - PSAT 10 scoring and benchmarks', url: 'https://www.collegeboard.org/psat-10' },
    caveat: 'No pass rate exists; outcomes are scale scores, percentiles and readiness benchmarks.'
  },
  studyPlan: {
    summary: 'PSAT 10 preparation should be modest and diagnostic, because the test carries no scholarship or admissions consequence and its main job is to identify gaps. The digital PSAT 10 mirrors the SAT structure: about 2 hours 14 minutes, 98 Reading and Writing questions across two 32-minute modules, and 54 Math questions across two 35-minute modules, all in the Bluebook app with adaptive routing. For most 10th graders the right plan is 10-20 hours spread across 4-6 weeks, focused on the skill breakdown from a first official practice test. Week 1: take the official PSAT 10 practice test in Bluebook and record the per-domain breakdown. Weeks 2-4: work the two weakest domains using Khan Academy\u2019s free Official Digital SAT Prep, which accepts the PSAT score and builds a personalized plan; the most common gaps at this stage are Standard English Conventions (punctuation and grammar) and linear-equation word problems, both of which are highly trainable. Weeks 5-6: one more full practice test under timed conditions and a focused retake of every missed item. Students should not over-prepare: because PSAT 10 does not count toward anything, the hours are better spent building the same skills through coursework and reading. The exception is students who will take the PSAT/NMSQT as juniors and want the National Merit pathway; for them, PSAT 10 is a free full-dress rehearsal, and they should treat the Bluebook interface, adaptive pacing and time pressure as the training target. Schools administer PSAT 10 in the spring (typically February-April) on a College Board testing window.',
    totalHours: '10-20 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official Bluebook PSAT 10 practice test', 'Record per-domain breakdown'], hours: 4 },
      { label: 'Weeks 2-4', focus: 'Two weakest domains', tasks: ['Khan Academy Official Digital SAT Prep plan', 'Grammar and algebra drills'], hours: 10 },
      { label: 'Weeks 5-6', focus: 'Timed retest', tasks: ['Full timed practice test', 'Retake every missed item'], hours: 6 }
    ],
    variants: [
      { label: 'Future National Merit path', detail: 'Juniors-to-be use PSAT 10 as a full-dress rehearsal for the NMSQT; practice interface and pacing seriously.' },
      { label: 'Accommodations', detail: 'Students with documented needs use College Board SSD approvals; schools manage requests.' }
    ]
  },
  prepStrategies: {
    summary: 'Because PSAT 10 is a no-stakes diagnostic, the smartest strategies are about extraction of information rather than maximum score. Strategy one: use the official Bluebook practice test first and let the skill breakdown set the agenda; students who study before testing spend hours on domains they already pass. Strategy two: learn the interface properly - annotation tools, the Desmos calculator, module timers, adaptive routing - because the format rehearsal is the test\u2019s main purpose, and juniors who coast through PSAT 10 without mastering Bluebook carry that weakness into the NMSQT. Strategy three: fix the two most trainable weaknesses first: Standard English Conventions (fixed grammar rules, fastest gains) and linear-equation word problems (most common Math error source). Strategy four: use Khan Academy\u2019s free personalized plan, which is built from the actual score report; it removes all planning effort. Strategy five: practice the reading passages the way the digital test demands - shorter passages with single questions - rather than the long-passage habits of older paper tests. Strategy six: debrief with the school counselor after scores arrive; the aggregated school report and the individual benchmark bands are the reason schools administer the test, and the follow-up conversation is where the value lands.',
    items: [
      { title: 'Test first, then study', detail: 'The score report\u2019s skill breakdown should set the agenda.' },
      { title: 'Master Bluebook now', detail: 'The interface rehearsal is the test\u2019s main purpose for future NMSQT takers.' },
      { title: 'Fix trainable gaps', detail: 'Grammar conventions and linear-equation word problems first.' },
      { title: 'Feed the score into Khan Academy', detail: 'The free personalized plan is built from the real report.' }
    ]
  },
  resourceComparison: {
    summary: 'PSAT 10 preparation costs essentially nothing because the official resources dominate. Bluebook contains the official PSAT 10 practice test, which is free and is the only material that exactly matches the adaptive digital format. Khan Academy\u2019s Official Digital SAT Prep is free, built with College Board, and generates a personalized practice plan from the PSAT score report, making it the primary instructional resource. The College Board website adds the PSAT 10 Student Guide (free PDF) and a practice-question bank. Because the test is diagnostic and no-stakes, commercial prep books and courses ($20-$2,000) are rarely justified for PSAT 10 itself; the exception is a student who is also training for the SAT or the National Merit pathway, in which case the SAT-oriented course serves both goals. Many schools provide free in-school preparation sessions and administer PSAT 10 at no charge or a nominal fee (typically about $18, set by the district). The honest ranking: Bluebook + Khan Academy free plan, the official guide, and paid resources only when they double as SAT or NMSQT preparation. Prices here are current as of the 2025-26 testing year and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Bluebook PSAT 10 practice test', values: ['Free', 'Digital adaptive app', 'Exact format rehearsal'] },
      { label: 'Khan Academy Official Digital SAT Prep', values: ['Free', 'Web/mobile', 'Personalized plan from the score report'] },
      { label: 'College Board Student Guide', values: ['Free PDF', 'Downloadable', 'Format and benchmark explanation'] },
      { label: 'Commercial prep book/course', values: ['$20-$2,000', 'Print/online', 'Only if it doubles as SAT/NMSQT prep'] }
    ],
    footnote: 'Prices dated 2025-26; official free resources are sufficient for most students. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common PSAT 10 mistakes come from treating it as either trivial or high-stakes. Mistake one: skipping the official practice test and walking in cold; the adaptive digital format is unfamiliar to most 10th graders, and interface confusion costs points that the diagnostic should not miss. Mistake two: over-preparing. Because PSAT 10 has no scholarship or admissions stakes, hours spent on intensive test prep are usually better spent on coursework; the test is a snapshot, not a gate. Mistake three: ignoring the benchmark bands. The score report\u2019s grade-level benchmarks (on-track versus below-track for college readiness) are the diagnostic heart of the test, and families who only look at the total score miss the signal that matters. Mistake four: not feeding the score into Khan Academy, which turns the report into a free personalized plan; skipping that step discards the main actionable output. Mistake five: using old paper-format practice materials; the digital test has shorter passages and adaptive routing, and paper practice teaches the wrong habits. Mistake six: for future NMSQT candidates, treating PSAT 10 as disposable; juniors who did not use it as a full-dress Bluebook rehearsal arrive at the NMSQT without interface fluency, and that costs real National Merit points.',
    items: [
      { mistake: 'Walking in without the practice test', fix: 'Take the official Bluebook test first; learn the interface.' },
      { mistake: 'Over-preparing for a no-stakes test', fix: 'Keep prep modest and diagnostic; spend hours on coursework.' },
      { mistake: 'Ignoring benchmark bands', fix: 'Read the on-track benchmarks, not just the total score.' },
      { mistake: 'Skipping the Khan Academy plan', fix: 'Feed the score report in; it generates the free study plan.' },
      { mistake: 'Practicing on paper format', fix: 'Train on the digital adaptive format exclusively.' }
    ]
  },
  questionTypes: {
    summary: 'PSAT 10 uses the same two-section structure as the digital SAT. Reading and Writing: 98 questions in 64 minutes (two 32-minute modules), covering Information and Ideas, Craft and Structure, Expression of Ideas, and Standard English Conventions, with shorter passages and single-question items typical of the digital format. Math: 54 questions in 70 minutes (two 35-minute modules), spanning Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry; the Desmos calculator is built into Bluebook. All items are four-option multiple choice, sections are adaptive, and the score range is 320-1520. Samples below are editor-written illustrations of the published skill domains, not live exam items.',
    types: [
      { name: 'Reading and Writing', share: '98 items / 64 min', detail: 'Information, Craft & Structure, Expression, Conventions.' },
      { name: 'Math', share: '54 items / 70 min', detail: 'Algebra, Advanced Math, Problem-Solving & Data, Geometry.' }
    ],
    samples: [
      {
        prompt: 'The author of the passage argues that public libraries "purchase privacy" for patrons who cannot afford internet access. Which statement best captures the meaning of "purchase privacy" as it is used in the passage?',
        options: ['A. Libraries spend money on security software', 'B. Library visits give patrons private internet use they could not otherwise afford', 'C. Patrons must pay a fee to use library computers', 'D. Libraries are quieter than other public spaces'],
        answer: 'B',
        explanation: 'The phrase is used metaphorically: the library\u2019s free services give low-income patrons a private internet environment that buying their own access would cost money to provide.'
      },
      {
        prompt: 'A bakery sells muffins in boxes of 6. If the bakery produces 342 muffins in a day and fills as many full boxes as possible, how many muffins are left over?',
        options: ['A. 0', 'B. 3', 'C. 4', 'D. 6'],
        answer: 'A',
        explanation: '342 divided by 6 equals 57 exactly, so 57 full boxes use all muffins and none are left over.'
      },
      {
        prompt: 'Neither of the reports ______ been filed, so the committee cannot review the findings this week. Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: ['A. have', 'B. has', 'C. were', 'D. are'],
        answer: 'B',
        explanation: 'The subject is "neither of the reports," which is singular, so the singular verb "has" is required.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill domains, not live exam items.'
  },
  examDay: {
    summary: 'PSAT 10 is administered in schools during the College Board testing window (typically February through April), on a weekday determined by the school, using the Bluebook app on school-provided or student-provided devices as the school directs. There is no individual registration fee for students in most districts; the district pays a per-test cost (typically about $18) and sets the administration date. On the day, students check in through their school\u2019s process, bring a fully charged device if using their own, and follow the school\u2019s electronics policy; phones and smartwatches are not permitted in the testing room. The total testing time is about 2 hours 14 minutes plus breaks and instructions, so students should expect a half-day commitment. No calculator is required because Desmos is built into Bluebook; a permitted handheld calculator is allowed if the school permits it. Students with documented disabilities must have College Board SSD accommodations arranged through the school, which handles the application. Scores post in the student\u2019s College Board account typically within two to four weeks, and the school receives an aggregated report; families should review the skill breakdown and benchmark bands together. Afterwards, the student should feed the score into Khan Academy\u2019s free personalized plan and, if they plan to pursue the National Merit pathway, schedule the junior-year PSAT/NMSQT sitting when registration opens in the spring of 11th grade.',
    bring: ['School-issued check-in information', 'Fully charged device if using a personal one', 'Sharpened pencils if the school requires them', 'Approved calculator if desired (Desmos is built in)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Any food or drink beyond what the school allows'],
    timeline: [
      { time: 'Morning check-in', detail: 'School process; device log-in and seating.' },
      { time: 'Module 1', detail: 'Reading and Writing module 1 (32 minutes).' },
      { time: 'Module 2', detail: 'Reading and Writing module 2 (32 minutes).' },
      { time: 'Break', detail: 'Short break as the school schedules.' },
      { time: 'Math modules', detail: 'Math modules 1 and 2 (35 minutes each).' },
      { time: 'After testing', detail: 'Scores post in 2-4 weeks with benchmarks.' }
    ],
    rules: [
      'Administered in schools on the College Board testing window.',
      'The exam runs in Bluebook; answers are entered digitally.',
      'Personal electronics are not permitted in the testing room.',
      'Accommodations are arranged through the school via College Board SSD.'
    ],
    afterwards: 'Scores post in 2-4 weeks with skill breakdowns and grade-level benchmarks; feed the score into Khan Academy\u2019s free plan and schedule the junior-year NMSQT if pursuing National Merit.'
  }
};

export default data;
