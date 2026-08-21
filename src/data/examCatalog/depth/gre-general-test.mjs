const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Graduate admissions & standardized-testing desk',
    bio: 'We cover the GRE General Test and its role in graduate admission. Format and fee facts come from ETS official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the GRE General Test format, scoring scale, fees and retake policy against ETS official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The GRE gates graduate access: master\u2019s-degree median weekly earnings were $1,732 in 2024 (BLS)',
    summary: 'The GRE General Test is a graduate-admissions test, not a job credential, so no BLS SOC code corresponds to a score. The economic case runs through the advanced degrees the test helps secure, and the BLS evidence is direct: in 2024, full-time workers age 25 and older with a master\u2019s degree earned median weekly wages of $1,732, versus $1,543 with a bachelor\u2019s degree and $1,109 with an associate degree - an annualized master\u2019s-level median of roughly $90,000. The GRE matters to this picture because it is used by thousands of graduate programs in the US and internationally, including master\u2019s, doctoral and professional programs across the humanities, social sciences, and many STEM fields (though a growing number of programs are test-optional or have dropped the requirement). For many candidates the score directly affects admission and funding decisions - assistantships and fellowships often hinge on the application package that includes the GRE - so the test can influence both the credential earned and the cost of earning it. It is equally true that the landscape is shifting: law and medical school admissions use other tests, many business schools now accept the GMAT or GRE interchangeably, and a substantial share of graduate programs no longer require the GRE. The honest framing is the same as for any admissions test: prepare seriously when target programs use the score, and understand that the wage payoff the data supports runs through the graduate degree, not the score itself. BLS classifies workers by occupation and education, not test scores, so no GRE percentile maps to a salary.',
    rows: [
      { label: 'Master\u2019s-degree median weekly earnings, 2024', value: '$1,732', note: 'BLS, workers 25+, full time' },
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'GRE score range', value: '260-340 (Verbal+Quant)', note: 'ETS, plus Analytical Writing 0-6' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The GRE has no pass/fail line; Verbal and Quantitative run 130-170 each and targets are set by each program',
    summary: 'ETS publishes no pass rate for the GRE General Test because there is no passing score. Under the shortened format that took effect in September 2023, the test runs about 1 hour 58 minutes and contains: an Analytical Writing section (one Issue essay, 30 minutes), two Verbal Reasoning sections (12 questions each, 18 minutes each), and two Quantitative Reasoning sections (12 questions each, 21 minutes each); the sections are adaptive at the section level - the second Verbal and Quant sections are routed by performance on the first. Verbal and Quantitative each score 130-170 in one-point increments, and Analytical Writing scores 0-6 in half-point increments; the reported total is the Verbal+Quant sum (260-340). What candidates compare against are program percentiles and each program\u2019s stated or typical score ranges; competitive STEM doctoral programs often expect Quant in the 160s, while humanities programs weigh Verbal and Analytical Writing more heavily, and many programs publish average scores for admitted cohorts. The September 2023 format cut the test from about 3 hours 45 minutes and removed the two long essays, which changed pacing substantially, so candidates must practice the current format rather than older materials. There is no limit on retakes, but ETS requires at least 21 days between attempts and candidates may take the test at most five times in any rolling 12-month period. Scores are reported 8-10 days after the test, and ScoreSelect lets candidates send only their best scores. The honest takeaway: build the target from program averages and percentiles, not from a pass line that does not exist.',
    source: { label: 'ETS GRE General Test information', url: 'https://www.ets.org/gre' },
    caveat: 'No pass rate exists; targets come from program averages and percentiles. Practice the current shortened format (since Sept 2023).'
  },
  studyPlan: {
    summary: 'A serious GRE plan runs 80-150 hours over 8-16 weeks. The current test is about 1 hour 58 minutes: Analytical Writing (1 Issue essay, 30 minutes), two Verbal sections (12 questions each, 18 minutes each), and two Quantitative sections (12 questions each, 21 minutes each), with section-level adaptivity. Week 1: take the free official POWERPREP test and record Verbal, Quant and Writing scores plus an error log. Weeks 2-5: build Quant foundations - the test covers arithmetic, algebra, geometry and data analysis at a level below calculus, and most candidates lose points on careless errors and pacing rather than missing concepts; drill the four Quant question types (multiple choice with one answer, multiple choice with several answers, numeric entry, quantitative comparison). Weeks 5-8: Verbal - build vocabulary in context (the test\u2019s Text Completion and Sentence Equivalence items reward word knowledge plus logic), and drill Reading Comprehension strategies, which favor structured reading over speed. Weeks 9-11: Analytical Writing - study the scoring rubric for the Issue essay, practice outlining and writing one essay weekly, and get feedback; the essay is scored by a mix of human raters and e-rater. Weeks 12-14: timed full tests weekly using POWERPREP, which replicates the adaptivity. Weeks 15-16: taper, error retakes, and test-day logistics. Candidates should confirm each target program\u2019s GRE policy, because a growing number of programs are test-optional and the hours are better spent elsewhere if no target program requires the score.',
    totalHours: '80-150 hours over 8-16 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official POWERPREP test', 'Score and error log'], hours: 6 },
      { label: 'Weeks 2-5', focus: 'Quant foundations', tasks: ['Four question types', 'Quantitative comparison drills'], hours: 40 },
      { label: 'Weeks 5-8', focus: 'Verbal', tasks: ['Vocabulary in context', 'Reading Comprehension strategies'], hours: 40 },
      { label: 'Weeks 9-11', focus: 'Analytical Writing', tasks: ['Rubric study', 'Weekly essay with feedback'], hours: 18 },
      { label: 'Weeks 12-14', focus: 'Timed full tests', tasks: ['Weekly POWERPREP tests', 'Target weak sections'], hours: 24 },
      { label: 'Weeks 15-16', focus: 'Taper and logistics', tasks: ['Two final tests', 'Retake missed items'], hours: 16 }
    ],
    variants: [
      { label: 'Test-optional programs', detail: 'A growing share of graduate programs do not require the GRE; confirm the policy before investing hundreds of hours.' },
      { label: 'GMAT vs GRE', detail: 'Many business schools accept either; the choice depends on whether you want the GMAT\u2019s Data Insights weighting or the GRE\u2019s Verbal weighting.' }
    ]
  },
  prepStrategies: {
    summary: 'The GRE rewards a handful of high-leverage habits. Strategy one: learn Quantitative Comparison cold - it is a GRE-specific question type (compare two quantities, decide which is larger, equal, or indeterminate) and it rewards reasoning over calculation; practicing it is the fastest Quant gain for most candidates. Strategy two: build vocabulary through reading and context rather than raw lists, because the Text Completion and Sentence Equivalence items reward knowing usage and logic; a curated list of high-frequency GRE words is still useful, but the words must be learned with example sentences. Strategy three: train Reading Comprehension as structured reading - the test rewards identifying the passage\u2019s purpose, structure and author attitude - and practice on real passages, because the item style differs from ordinary reading tests. Strategy four: for Analytical Writing, study the rubric and write to a timer; the Issue essay is scored on task response, organization and language, and candidates who outline before writing consistently beat those who free-write. Strategy five: use official ETS materials first - POWERPREP tests replicate the section-level adaptivity, and the official guide and question bank are the accuracy standard; third-party materials drift from the style and cannot replicate the adaptive scoring. Strategy six: respect the 21-day retake rule and the five-tests-per-12-months limit, and use ScoreSelect to send only the best score. Finally, verify each program\u2019s requirement before spending hours, because test-optional programs change the calculus entirely.',
    items: [
      { title: 'Mine Quantitative Comparison', detail: 'The GRE-specific type rewards reasoning over calculation.' },
      { title: 'Learn vocabulary in context', detail: 'Text Completion and Sentence Equivalence reward usage and logic.' },
      { title: 'Read for structure', detail: 'Purpose, structure and attitude drive GRE Reading items.' },
      { title: 'Write to the rubric', detail: 'Outline-then-write beats free-writing for the Issue essay.' },
      { title: 'Respect the retake rules', detail: '21-day spacing, 5 tests per 12 months, ScoreSelect for best scores.' }
    ]
  },
  resourceComparison: {
    summary: 'The GRE prep market has a clear official core: ETS publishes the only materials that replicate the section-level adaptivity, and they dominate the recommendation list. The free POWERPREP practice tests (two full-length tests in the current format) are the single most important resource and the only free tests that reproduce the adaptive scoring. The Official GRE Super Power Pack (about $50-60, with the official guide, the quantitative reasoning practice questions and the verbal reasoning practice questions) and the official question bank provide the rest of the official item pool. Commercial prep books ($20-$40) and courses ($200-$2,000) add structure and practice volume, and tutoring ($60-$200/hour) is most defensible for candidates with a specific weak section or a high target gap; the major test-prep companies\u2019 adaptive platforms can be useful for Quant practice volume. Free vocabulary resources and the ETS \u201cMath Review\u201d PDF cover the Quant content review. The honest ranking: POWERPREP first, the official Super Power Pack second, a commercial platform for practice volume, and tutoring only for targeted gaps. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'POWERPREP practice tests', values: ['Free (2 tests)', 'Online', 'The only free adaptive-format tests'] },
      { label: 'Official GRE Super Power Pack', values: ['$50-$60', 'Print/ebook', 'The official question pool'] },
      { label: 'ETS Math Review', values: ['Free PDF', 'Downloadable', 'Quant content review'] },
      { label: 'Commercial prep book/course', values: ['$20-$2,000', 'Print/online', 'Structure and practice volume'] },
      { label: 'Tutor', values: ['$60-$200/hr', '1:1', 'Targeted section gaps'] }
    ],
    footnote: 'Prices dated 2025-26; ETS materials are the accuracy standard. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common GRE mistakes are format-specific. Mistake one: practicing with pre-2023 materials; the shortened format has different section lengths (12 questions per Verbal and Quant section), and pacing practice on the old 20-question sections misleads. Mistake two: grinding vocabulary lists without context; Sentence Equivalence and Text Completion reward usage and logic, and memorized definitions misfire on nuance. Mistake three: skipping Quantitative Comparison practice; it is the most unusual question type and the one most candidates under-train, yet it typically forms a large share of the Quant section. Mistake four: free-writing the Issue essay; candidates who outline first and write to the rubric consistently score higher than those who draft spontaneously, and the essay counts toward applications even when programs say they "consider" it. Mistake five: ignoring the section-level adaptivity - the second Verbal and Quant sections are routed by the first, so careless errors in the first section cap the achievable score. Mistake six: overlooking the retake rules (21-day spacing, five tests per 12 months) when planning application timelines; candidates who assume unlimited quick retakes can get stuck. Finally, candidates should not assume every program requires the GRE; verifying each program\u2019s policy before the investment is the single biggest time-saver.',
    items: [
      { mistake: 'Practicing the old format', fix: 'Use current-format materials (12 questions per section).' },
      { mistake: 'Vocabulary without context', fix: 'Learn words in sentences; the items test usage.' },
      { mistake: 'Skipping Quantitative Comparison', fix: 'It is a large share of Quant and the most trainable type.' },
      { mistake: 'Free-writing the essay', fix: 'Outline first; write to the rubric.' },
      { mistake: 'Ignoring the 21-day retake rule', fix: 'Plan application timelines around the retake spacing.' }
    ]
  },
  questionTypes: {
    summary: 'The GRE General Test (current format) has three measures. Analytical Writing: one Issue essay in 30 minutes, scored 0-6 in half-points by a mix of human raters and e-rater. Verbal Reasoning: two sections of 12 questions each (18 minutes each), covering Text Completion, Sentence Equivalence, and Reading Comprehension (multiple choice, select-all, and sentence-selection types). Quantitative Reasoning: two sections of 12 questions each (21 minutes each), covering arithmetic, algebra, geometry and data analysis with four types - multiple choice (one answer), multiple choice (several answers), numeric entry, and Quantitative Comparison. Verbal and Quant each score 130-170; the total is 260-340. Sections are adaptive: the second Verbal and Quant sections are routed by first-section performance. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'Analytical Writing', share: '1 essay / 30 min', detail: 'Issue essay, scored 0-6.' },
      { name: 'Verbal Reasoning', share: '24 items / 36 min', detail: 'Text Completion, Sentence Equivalence, Reading.' },
      { name: 'Quantitative Reasoning', share: '24 items / 42 min', detail: 'Four types including Quantitative Comparison.' }
    ],
    samples: [
      {
        prompt: 'Text Completion: "The committee\u2019s report was so ______ that even the project\u2019s strongest supporters could not find a single actionable recommendation in it."',
        options: ['A. comprehensive', 'B. vague', 'C. concise', 'D. persuasive'],
        answer: 'B',
        explanation: 'The clause "could not find a single actionable recommendation" signals a lack of specificity, so "vague" fits; the other choices contradict the clue.'
      },
      {
        prompt: 'Quantitative Comparison: Quantity A: the value of x if 2x + 5 = 13. Quantity B: 4.',
        options: ['A. Quantity A is greater', 'B. Quantity B is greater', 'C. The two quantities are equal', 'D. The relationship cannot be determined'],
        answer: 'C',
        explanation: 'Solving 2x + 5 = 13 gives x = 4, so the quantities are equal.'
      },
      {
        prompt: 'Reading Comprehension: The passage argues that urban renewal programs of the 1960s "displaced the very communities they claimed to serve." The author\u2019s primary purpose is to ______.',
        options: ['A. propose a new funding model', 'B. criticize a historical policy\u2019s effect on communities', 'C. praise the architects of the programs', 'D. compare two cities\u2019 outcomes'],
        answer: 'B',
        explanation: 'The quoted claim is evaluative and negative, indicating the purpose is to criticize the programs\u2019 community impact.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'The GRE General Test is delivered at authorized ETS test centers and in a proctored at-home format. At a test center, arrive 30 minutes early with a valid ID (the requirements vary by country; check ETS\u2019s ID policy), and personal electronics are stored; the test is computer-adaptive and runs about 1 hour 58 minutes with one optional 10-minute break between the second and third sections. For the at-home version, complete the equipment check ahead of time, use a quiet private room, and follow the proctor\u2019s rules (no phones, notes or second monitors). Scores are reported 8-10 days after the test, and the report includes Verbal, Quant and Analytical Writing scores plus percentiles. Candidates may take the test at most five times in 12 months with at least 21 days between attempts, and ScoreSelect allows sending only the best scores to programs. Afterwards, send scores to target programs before deadlines (four free score reports on test day; additional reports cost a fee), confirm each program\u2019s policy, and if a retake is needed, target the weakest measure with current-format practice.',
    bring: ['Valid ID per ETS country requirements', 'Appointment confirmation', 'At-home version: verified system and quiet room', 'Optional approved items for the break (center-dependent)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for the at-home version'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in with valid ID.' },
      { time: 'Section 1', detail: 'Analytical Writing (1 Issue essay, 30 minutes).' },
      { time: 'Sections 2-3', detail: 'Verbal sections (12 items each, 18 min each).' },
      { time: 'Break', detail: 'Optional 10-minute break.' },
      { time: 'Sections 4-5', detail: 'Quantitative sections (12 items each, 21 min each).' },
      { time: '8-10 days later', detail: 'Scores reported; ScoreSelect available.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The test is computer-adaptive at the section level.',
      'Maximum 5 tests per 12 months with 21 days between attempts.',
      'ScoreSelect lets you send only your best scores.'
    ],
    afterwards: 'Send scores before deadlines (4 free reports on test day), verify each program\u2019s policy, and plan any retake with current-format practice on the weakest measure.'
  }
};

export default data;
