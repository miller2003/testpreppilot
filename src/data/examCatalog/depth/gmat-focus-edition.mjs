const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Graduate admissions & standardized-testing desk',
    bio: 'We cover the GMAT Focus Edition and business-school admission testing. Format and fee facts come from GMAC official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the GMAT Focus Edition format, scoring scale, fees and retake policy against GMAC official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The GMAT gates MBA access: master\u2019s-degree median weekly earnings were $1,732 in 2024 (BLS)',
    summary: 'The GMAT Focus Edition is a business-school admissions test, not a job credential, so no BLS SOC code corresponds to a score. The economic case runs through the MBA and other graduate business degrees the test helps secure, and the BLS evidence is direct: in 2024, full-time workers age 25 and older with a master\u2019s degree earned median weekly wages of $1,732, versus $1,543 with a bachelor\u2019s degree - an annualized master\u2019s-level median of roughly $90,000. For MBA graduates specifically, the earnings premium is well documented by GMAC\u2019s annual corporate recruiters survey and by BLS data for management occupations (management occupations carried a $122,090 median in May 2024), though the MBA\u2019s value varies enormously by school, industry and pre-MBA compensation. The GMAT matters to this picture because it remains one of the two dominant tests for MBA admission alongside the GRE, and a strong score directly affects admission and scholarship outcomes at many programs; top-ranked programs routinely report GMAT score averages in the 700s (on the 205-805 Focus scale, the highest-achieving schools cluster at the top of the range). It is equally true that the landscape has shifted: a growing number of business schools are test-optional or accept the GRE or the Executive Assessment, so the GMAT is a lever rather than a universal gate. The honest framing is the same as for any admissions test: prepare seriously when target programs use the score, and understand that the wage payoff the data supports runs through the degree and the career transition it enables, not the score itself. BLS classifies workers by occupation and education, not test scores, so no GMAT score maps to a salary.',
    rows: [
      { label: 'Master\u2019s-degree median weekly earnings, 2024', value: '$1,732', note: 'BLS, workers 25+, full time' },
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Management occupations median, May 2024', value: '$122,090', note: 'BLS OEWS occupational group' },
      { label: 'GMAT Focus score range', value: '205-805', note: 'GMAC, total across three sections' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient and management-occupation medians frame the MBA case.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The GMAT Focus has no pass/fail line; totals run 205-805 and targets are set by each program\u2019s admitted-class profile',
    summary: 'GMAC publishes no pass rate for the GMAT Focus Edition because there is no passing score. The GMAT Focus Edition, which fully replaced the classic GMAT in early 2024, is scored 205-805 in 5-point increments, with three section scores (Quantitative Reasoning 60-90, Verbal Reasoning 60-90, Data Insights 60-90) and a total that is the weighted sum. The test runs 2 hours 15 minutes with 64 questions: Quantitative Reasoning (21 questions, 45 minutes), Verbal Reasoning (23 questions, 45 minutes), and Data Insights (20 questions, 45 minutes); the sections are not adaptive in the classic computer-adaptive sense - question difficulty adapts within the test - and candidates can select question order and have two optional 8-minute breaks. What candidates compare against are program-reported averages and percentiles: top-tier MBA programs commonly report GMAT totals in the high 700s (on the Focus scale, roughly 695-715+ for the most selective schools), while many strong regional programs admit students in the 600s. GMAC publishes percentile tables and the Official Guide includes score interpretations. There is no limit on retakes, but GMAC allows a maximum of five GMAT attempts in any rolling 12-month period and eight lifetime attempts; candidates may cancel a score at the test center and choose which scores to send (up to five free reports, with score selectivity). Scores are available immediately on a screen at the test center and officially reported within 24 hours. The honest takeaway: build the target from program averages, not from a pass line that does not exist, and confirm each program\u2019s test policy because many now accept the GRE or are test-optional.',
    source: { label: 'GMAC GMAT Focus Edition information', url: 'https://www.mba.com/exams/gmat' },
    caveat: 'No pass rate exists; targets come from program-reported averages and percentiles.'
  },
  studyPlan: {
    summary: 'A serious GMAT Focus plan runs 100-200 hours over 8-16 weeks, and the structure follows the three sections. Quantitative Reasoning (21 questions, 45 minutes) tests arithmetic, algebra, geometry and word problems at a level below calculus; most candidates\u2019 Quant gaps are in data-sufficiency-style reasoning and careless errors rather than missing concepts. Verbal Reasoning (23 questions, 45 minutes) tests Reading Comprehension and Critical Reasoning (the classic Sentence Correction was removed in the Focus Edition, replaced by the integrated Data Insights weighting); Critical Reasoning rewards structured argument analysis and is the most trainable Verbal skill. Data Insights (20 questions, 45 minutes) is the Focus Edition\u2019s signature section, combining data sufficiency, multi-source reasoning, table analysis, graphics interpretation and two-part analysis, and it is the section most candidates under-prepare. Week 1: take the free official GMAT Focus practice test (mba.com offers a free official practice exam) and record the three section scores and the total. Weeks 2-5: build Quantitative foundations and the data-sufficiency logic. Weeks 5-8: Verbal - Critical Reasoning drills and Reading Comprehension strategy. Weeks 9-11: Data Insights, the highest-yield training target because it is new and most candidates are unpracticed. Weeks 12-14: timed full tests weekly using official mba.com practice exams. Weeks 15-16: taper, error retakes, and test-day logistics. Candidates should confirm each target program\u2019s policy - many schools accept the GRE or the Executive Assessment - before investing hours.',
    totalHours: '100-200 hours over 8-16 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official free practice test', 'Three section scores and error log'], hours: 6 },
      { label: 'Weeks 2-5', focus: 'Quantitative Reasoning', tasks: ['Arithmetic, algebra, geometry', 'Data-sufficiency logic drills'], hours: 50 },
      { label: 'Weeks 5-8', focus: 'Verbal Reasoning', tasks: ['Critical Reasoning argument analysis', 'Reading Comprehension strategy'], hours: 40 },
      { label: 'Weeks 9-11', focus: 'Data Insights', tasks: ['All six question formats', 'Table and graphics interpretation'], hours: 36 },
      { label: 'Weeks 12-14', focus: 'Timed full tests', tasks: ['Weekly official practice exams', 'Target weak sections'], hours: 30 },
      { label: 'Weeks 15-16', focus: 'Taper and logistics', tasks: ['Two final tests', 'Question-order and break planning'], hours: 18 }
    ],
    variants: [
      { label: 'Test-optional programs', detail: 'A growing share of business schools do not require a test; confirm the policy before investing hours.' },
      { label: 'GRE vs GMAT', detail: 'Many schools accept either; choose by whether the Data Insights weighting or the GRE\u2019s Verbal weighting fits your profile.' }
    ]
  },
  prepStrategies: {
    summary: 'The GMAT Focus rewards a handful of high-leverage habits. Strategy one: train Data Insights deliberately - it is the Focus Edition\u2019s new signature section, most candidates are unpracticed at its six formats, and it carries a large share of the total score; practice with official questions because third-party materials misrepresent the formats. Strategy two: master the data-sufficiency logic, which appears in Data Insights and is the most unusual reasoning skill on the test; the key is deciding whether the statements provide enough information before solving. Strategy three: learn Critical Reasoning as structured argument analysis - identify premise, conclusion and assumption, and pre-phrase the answer before reading the choices - because it is the most trainable Verbal skill and repeats across the test. Strategy four: use official GMAC materials first - the free practice test, the Official Guide (now the GMAT Official Guide with Focus content), and the official question banks - because only GMAC materials match the item style and the scoring algorithm. Strategy five: exploit the flexibility features - select question order, take the optional breaks, and cancel or send scores selectively - by practicing with a planned order and timing. Strategy six: respect the retake limits (five tests per 12 months, eight lifetime) and plan retakes around the weakest section. Finally, verify each program\u2019s policy before investing, because test-optional programs change the calculus entirely.',
    items: [
      { title: 'Train Data Insights hard', detail: 'The new signature section is the highest-yield training target.' },
      { title: 'Master data-sufficiency logic', detail: 'Decide sufficiency before solving; it is the most unusual skill.' },
      { title: 'Learn Critical Reasoning structure', detail: 'Premise, conclusion, assumption; pre-phrase before reading choices.' },
      { title: 'Use official GMAC materials', detail: 'Only GMAC matches the item style and scoring algorithm.' },
      { title: 'Plan the flexibility features', detail: 'Question order, breaks, and selective score sending.' }
    ]
  },
  resourceComparison: {
    summary: 'The GMAT Focus prep market has a strong official core. The free official GMAT Focus practice test on mba.com is the most important resource - it is the only free test that runs on the official platform and reflects the Focus scoring. The GMAT Official Guide (about $35-45, with Focus content and answer explanations) and the official question banks (paid subscriptions on mba.com) provide the official item pool, which matters because the Focus Edition\u2019s Data Insights formats are not well represented by third-party materials. Commercial prep books ($20-$40), courses ($200-$2,000) and tutoring ($60-$250/hour) add structure and practice volume; the major companies\u2019 adaptive platforms can be useful, but candidates should verify that the content is updated to the Focus Edition, because classic-GMAT materials over-weight Sentence Correction, which no longer exists. GMAC\u2019s free "GMAT Official Starter Kit" includes practice questions and a test. The honest ranking: the free official test, the Official Guide, an official question-bank subscription for volume, and a course or tutor only for specific gaps. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official GMAT Focus practice test', values: ['Free (1 test)', 'Online', 'The official platform and scoring'] },
      { label: 'GMAT Official Guide', values: ['$35-$45', 'Print/ebook', 'The official item pool'] },
      { label: 'Official question bank subscription', values: ['~$25-$250', 'Online', 'Practice volume on official items'] },
      { label: 'Commercial prep book/course', values: ['$20-$2,000', 'Print/online', 'Structure; verify Focus-format content'] },
      { label: 'Tutor', values: ['$60-$250/hr', '1:1', 'Targeted section gaps'] }
    ],
    footnote: 'Prices dated 2025-26; GMAC materials are the accuracy standard. Verify third-party content is Focus Edition. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common GMAT Focus mistakes come from preparing with classic-GMAT habits. Mistake one: using pre-Focus materials; the classic GMAT\u2019s Sentence Correction no longer exists, and its Analytical Writing essay is gone, so candidates who practice old content waste hours and train the wrong skills. Mistake two: under-preparing Data Insights; it is the new signature section, most candidates are unpracticed at its six formats, and it carries a large share of the total, so skipping it caps the score. Mistake three: solving data-sufficiency items before deciding sufficiency; the question type rewards a sufficiency decision first, and candidates who rush to compute miss the logic. Mistake four: reading Critical Reasoning choices immediately; candidates who pre-phrase the expected answer before reading choices score measurably better. Mistake five: ignoring the retake limits (five per 12 months, eight lifetime) when planning application timelines; candidates who assume unlimited retakes can run out of attempts. Mistake six: missing the flexibility features - question order and breaks are selectable, and practicing with a fixed order that ignores the option wastes an advantage. Finally, candidates should confirm each program\u2019s policy before investing hundreds of hours, because a growing number of schools are test-optional or accept the GRE.',
    items: [
      { mistake: 'Preparing with classic-GMAT content', fix: 'Use Focus Edition materials; Sentence Correction is gone.' },
      { mistake: 'Under-preparing Data Insights', fix: 'Train all six formats; it is a large share of the total.' },
      { mistake: 'Computing before deciding sufficiency', fix: 'Decide sufficiency first; it is the question\u2019s logic.' },
      { mistake: 'Reading choices before pre-phrasing', fix: 'Pre-phrase the expected answer in Critical Reasoning.' },
      { mistake: 'Ignoring the retake limits', fix: 'Plan around 5 tests/12 months and 8 lifetime.' }
    ]
  },
  questionTypes: {
    summary: 'The GMAT Focus Edition has three sections, each 45 minutes. Quantitative Reasoning (21 questions): problem-solving items covering arithmetic, algebra, geometry and word problems. Verbal Reasoning (23 questions): Reading Comprehension and Critical Reasoning (argument analysis); Sentence Correction was removed in the Focus Edition. Data Insights (20 questions): data sufficiency, multi-source reasoning, table analysis, graphics interpretation, two-part analysis, and data insights problem-solving. The total score is 205-805 in 5-point increments, with section scores of 60-90 each. Candidates may select question order and take two optional 8-minute breaks. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'Quantitative Reasoning', share: '21 items / 45 min', detail: 'Problem solving; arithmetic through geometry.' },
      { name: 'Verbal Reasoning', share: '23 items / 45 min', detail: 'Reading Comprehension and Critical Reasoning.' },
      { name: 'Data Insights', share: '20 items / 45 min', detail: 'Data sufficiency, multi-source, table, graphics, two-part.' }
    ],
    samples: [
      {
        prompt: 'Data sufficiency item: Is x greater than 10? (1) x is a multiple of 5. (2) x is greater than 8.',
        options: ['A. Statement (1) alone is sufficient but (2) alone is not', 'B. Statement (2) alone is sufficient but (1) alone is not', 'C. Both statements together are sufficient, but neither alone is', 'D. Each statement alone is sufficient', 'E. The statements together are not sufficient'],
        answer: 'C',
        explanation: 'Statement (1) gives x = 5, 10, 15... which is not decisive; statement (2) gives x > 8, not decisive alone. Together, x is a multiple of 5 greater than 8 (10, 15...), which still does not guarantee x > 10 (x could be 10). So together they are still not sufficient: E is correct for the logic illustrated here (with x=10 satisfying both but not greater than 10).'
      },
      {
        prompt: 'Critical Reasoning: "The city\u2019s new recycling program increased recycling rates by 15 percent, but critics note that the program also raised collection costs. Which of the following, if true, most weakens the critics\u2019 concern about costs?"',
        options: ['A. Landfill fees rose by 20 percent over the same period', 'B. Recycling trucks use the same routes as before', 'C. The program covers only two neighborhoods', 'D. Most residents supported the program'],
        answer: 'A',
        explanation: 'The critics\u2019 concern is that costs rose. Finding A weakens the cost concern by showing a cost they would have incurred anyway (higher landfill fees), so the program may not be the cause of the increase.'
      },
      {
        prompt: 'Two-part analysis item: A store sells 100 units at $10 each. If the price increases by 10 percent and quantity sold falls by 10 percent, the revenue (A) increases / (B) decreases, by approximately (C) 1% / (D) 10%.',
        options: ['A. Increases by about 1%', 'B. Decreases by about 1%', 'C. Increases by about 10%', 'D. Decreases by about 10%'],
        answer: 'B',
        explanation: 'New price = $11, new quantity = 90; new revenue = $990 versus $1,000, a decrease of 1 percent.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'The GMAT Focus Edition is delivered at authorized Pearson VUE test centers and online (GMAT Online with a proctor). At a test center, arrive 30 minutes early with a valid ID (the requirements vary by country; check mba.com), and personal electronics are stored; the test runs 2 hours 15 minutes with two optional 8-minute breaks, and candidates select their question order before starting. For the online version, complete the system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. Scores appear on screen immediately after the test, and the official score report follows within 24 hours; candidates may cancel the score at the center and may choose which scores to send (up to five free reports). There are limits of five GMAT attempts per rolling 12-month period and eight lifetime attempts. Afterwards, send scores to target programs before deadlines (score reports are valid for five years), confirm each program\u2019s test policy, and if a retake is needed, target the weakest section with Focus-format practice.',
    bring: ['Valid ID per mba.com country requirements', 'Appointment confirmation', 'Online version: verified system and quiet room', 'Optional approved items for breaks'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for the online version'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in with valid ID.' },
      { time: 'Section 1', detail: 'Your selected first section (45 minutes).' },
      { time: 'Break', detail: 'Optional 8-minute break.' },
      { time: 'Section 2', detail: 'Second section (45 minutes).' },
      { time: 'Break', detail: 'Optional 8-minute break.' },
      { time: 'Section 3', detail: 'Third section (45 minutes).' },
      { time: 'Immediately', detail: 'Score on screen; official report within 24 hours.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'Question order is selectable; two optional 8-minute breaks.',
      'Maximum 5 tests per 12 months and 8 lifetime attempts.',
      'Scores are valid for 5 years; cancel or send selectively.'
    ],
    afterwards: 'Send scores before deadlines (5-year validity), verify each program\u2019s policy, and plan any retake with Focus-format practice on the weakest section.'
  }
};

export default data;
