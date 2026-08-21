const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College admissions & standardized-testing desk',
    bio: 'We track College Board testing programs and their role in college admission. Fee and format facts come from the College Board official pages and are revised each testing year; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PSAT/NMSQT format, scoring scale and fees against the College Board official pages; verified the education-earnings comparison against BLS data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'A strong NMSQT score is a scholarship gate: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The PSAT/NMSQT does not certify an occupation, so there is no BLS SOC code that a score directly unlocks. What the test does is sit at the very front of the college-admissions pipeline, and the earnings evidence for completing that pipeline is well documented by BLS. In its Education Pays-style comparisons, BLS reported that in 2024 full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 for workers with an associate degree and $998 for workers with a high-school diploma alone. Annualized, the bachelor-level median is roughly $80,000, which is the benchmark families and counselors use when weighing the cost of four-year college against early employment. The PSAT/NMSQT itself is scored on a 320-1520 scale, and its most concrete payoff is entry into the National Merit Scholarship Program: roughly the top 1 percent of juniors by Selection Index become National Merit Semifinalists, a designation that many colleges use to award automatic or near-automatic merit scholarships. Because the stakes are scholarship eligibility rather than admission, the honest framing is that the test converts effort into measurable financial aid leverage, and the BLS data show that degree completion is the wage event that follows. BLS classifies workers by job duty and credential held, not by test scores, so no percentile table from College Board maps to a salary figure; the connection runs through college completion.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time (cited via BLS Education & earnings comparisons)' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'Median weekly earnings, all education levels, 2024', value: '$1,168', note: 'BLS, workers 25+, full time' }
    ],
    growth: 'BLS projects overall employment growth of 3 percent from 2024 to 2034 across all occupations; earnings by education remain the relevant comparison for a college-admissions test.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The PSAT/NMSQT is not pass/fail; it is scored 320-1520 and used for National Merit eligibility',
    summary: 'There is no official pass rate for the PSAT/NMSQT because there is no passing score. College Board reports a scale score from 320 to 1520, and different institutions, districts and scholarship programs use the result differently. The single most consequential use is the National Merit Scholarship Program: every October, roughly 1.5 million juniors take the test, and the top-scoring entrants by Selection Index (Reading + Writing and Language + Math scores, each on a 8-38 scale, doubled) are recognized. Around 50,000 students receive Letters of Commendation, about 16,000 become Semifinalists, and roughly 7,600 become Finalists, from which about 7,000 receive National Merit Scholarships each year. Because the qualifying bar is relative to the national cohort rather than an absolute percentage, no single pass-rate statistic is published or meaningful. For students and parents, the practical score targets come from two sources: the College Board\u2019s percentile tables (a 1000 is roughly the 50th percentile, 1200 roughly the 83rd, 1400 roughly the 97th) and each state\u2019s National Merit cutoff, which varies by roughly 20-30 Selection Index points from year to year. Scores are available to students within two to four weeks, and College Board has a score-reporting timeline that students should check rather than assume. The honest summary is that this test is scored, ranked and percentile-reported, and the National Merit cutoffs are the de facto thresholds students train toward.',
    source: { label: 'College Board PSAT/NMSQT scoring and National Merit info', url: 'https://www.collegeboard.org/psat-nmsqt' },
    caveat: 'College Board does not publish a pass rate; eligibility for National Merit is cohort-relative.'
  },
  studyPlan: {
    summary: 'Because the PSAT/NMSQT mirrors the digital SAT structure, the most efficient preparation is a compact version of SAT preparation. The test runs about 2 hours 14 minutes and contains 98 Reading and Writing questions across two 32-minute modules and 54 Math questions across two 35-minute modules, all delivered on the Bluebook app with adaptive section routing. Reading and Writing is worth roughly half the score and spans Information and Ideas, Craft and Structure, and Expression of Ideas, with vocabulary-in-context items carrying heavy weight. Math spans Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry, with a calculator allowed throughout and the Desmos graphing calculator built into Bluebook. A realistic plan is 30-40 hours across 8 weeks for a student starting from an 800-1000 baseline. Weeks 1-2 establish baseline: take the official full-length practice test in Bluebook, log every error by skill, and build a personal question bank. Weeks 3-5 drill the two highest-yield areas first (typically linear equations and standard English conventions), using the free Khan Academy Official Digital SAT Prep that College Board partners with. Weeks 6-7 shift to full timed sections and pacing drills, because adaptive routing punishes slow first modules. Week 8 is review: two full timed tests, error retakes, and sleep/warm-up routine practice. Students who will be juniors should time the October sitting; sophomores taking PSAT 10 or NMSQT are using it as a rehearsal, and College Board\u2019s practice tests are the only materials that perfectly match the interface.',
    totalHours: '30-40 hours over 8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline and diagnosis', tasks: ['Take official Bluebook practice test', 'Categorize errors by skill and module', 'Create a targeted question list'], hours: 8 },
      { label: 'Weeks 3-5', focus: 'High-yield skill drills', tasks: ['Linear equations and word problems', 'Standard English conventions', 'Craft and Structure reading items'], hours: 14 },
      { label: 'Weeks 6-7', focus: 'Timed sections and pacing', tasks: ['Full Reading/Writing modules under time', 'Full Math modules under time', 'Review adaptive second-module difficulty'], hours: 10 },
      { label: 'Week 8', focus: 'Full tests and review', tasks: ['Two full timed practice tests', 'Retake every missed item', 'Plan October test-day logistics'], hours: 8 }
    ],
    variants: [
      { label: 'Sophomore rehearsal', detail: 'Students taking the NMSQT as sophomores should treat it as interface practice; National Merit eligibility only applies to the junior-year October sitting.' },
      { label: 'Accommodations', detail: 'Students with documented needs apply through the College Board SSD portal; requests must be submitted well before the registration deadline.' }
    ]
  },
  prepStrategies: {
    summary: 'The single most effective preparation move for the PSAT/NMSQT is to use only official College Board materials, because the test is fully digital and adaptive, and third-party banks often misrepresent the adaptive routing. Strategy one: master the Bluebook interface before the first official practice test, including the annotation tool, the Desmos calculator, and the module timer, because interface friction costs real minutes. Strategy two: treat the first module of each subject as a gate. In the adaptive design, doing well on module 1 routes a student into the harder module 2, which caps the score; performance on the easier route has a hard ceiling around 1100 in a section. That makes accuracy in module 1 more valuable than speed in module 2. Strategy three: build a skill-tagged error log and re-test every missed item after a week, because College Board data shows most score growth comes from eliminating repeated error types, not from new content. Strategy four: practice vocabulary in context through reading rather than word lists, since Craft and Structure questions test usage in passages. Strategy five: for the National Merit cutoff specifically, train to the Selection Index by simulating the full 320-1520 test and computing the index from section scores, and compare against the prior year\u2019s state cutoff. Finally, schedule the test for the junior-year October sitting with a backup plan: registration opens in spring, and October\u2019s primary date has limited seats in some regions.',
    items: [
      { title: 'Learn Bluebook cold', detail: 'Practice tests run in the same app as the real exam; interface speed is a score factor.' },
      { title: 'Win module 1', detail: 'The adaptive routing means accuracy on the first module sets your ceiling.' },
      { title: 'Tag every error', detail: 'Retake missed items after a week; repeated error types drive score growth.' },
      { title: 'Target the Selection Index', detail: 'Compute your index after each practice test and compare with your state\u2019s cutoff.' }
    ]
  },
  resourceComparison: {
    summary: 'The PSAT/NMSQT prep market is unusually clean because College Board publishes the only authoritative materials and partners with one free platform. The official full-length practice tests in Bluebook are free and are the closest possible match to the real adaptive experience; students who take fewer than four official tests are leaving points on the table. Khan Academy\u2019s Official Digital SAT Prep is free, tied to College Board, and includes skill-tagged practice and video explanations; it is the standard first resource. The official College Board PSAT/NMSQT Student Guide is a free PDF with one full test and scoring guidance. Among paid options, the major test-prep companies sell courses and books, but their value is coaching and schedule discipline rather than content, because the question pool is owned by College Board. A school counselor or a district partner often provides free practice tests; many high schools administer the PSAT/NMSQT on campus at a nominal fee, which also gives students their only guaranteed seat for the junior-year sitting. The honest ranking: start free and official, add paid coaching only if you need pacing help or accountability. Prices here are current as of the 2025-26 testing year and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official Bluebook practice tests', values: ['Free', 'Digital adaptive app', 'The true interface; use 4+ tests'] },
      { label: 'Khan Academy Official Digital SAT Prep', values: ['Free', 'Web/mobile course', 'Skill-by-skill remediation'] },
      { label: 'College Board Student Guide', values: ['Free PDF', 'Downloadable guide', 'Format overview and one test'] },
      { label: 'Paid test-prep course', values: ['$300-$1,500', 'Live/on-demand', 'Structure and accountability'] },
      { label: 'School-administered sitting', values: ['~$18 (varies by district)', 'In-person proctored', 'The real junior-year test'] }
    ],
    footnote: 'Prices dated 2025-26 and vary; College Board is the only source of official items. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistake students make on the PSAT/NMSQT is studying it as a generic "SAT-lite" and ignoring the adaptive structure. Mistake one: skipping official practice tests because the questions feel familiar. The digital format routes harder items after strong first modules, and students who have never seen the adaptive interface routinely lose points on module 2 that their skill level should have earned. Mistake two: drilling vocabulary lists instead of words in context; Craft and Structure items test usage, and memorized definitions misfire on nuance. Mistake three: treating Math and Reading as equal-time subjects when Reading and Writing carries 98 items and Math carries 54; pacing plans should mirror the item counts. Mistake four: taking the test without a calculator-warm-up; the built-in Desmos tool requires fluency, and fumbling with it during the exam is a silent score leak. Mistake five: ignoring the Selection Index. A student can focus on total score and still miss a National Merit cutoff by a few index points, because the index weights section scores in a specific way; knowing the formula changes strategy. Finally, sophomores often over-train for a test whose only formal payoff (National Merit) applies to juniors; the junior-year October sitting is the one that counts, and preparation should peak there.',
    items: [
      { mistake: 'Skipping official adaptive practice tests', fix: 'Take 4+ Bluebook tests; the routing changes the experience.' },
      { mistake: 'Memorizing vocabulary lists', fix: 'Read widely and practice context-based Craft and Structure items.' },
      { mistake: 'Splitting time evenly between subjects', fix: 'Mirror the item ratio: 98 Reading/Writing vs 54 Math.' },
      { mistake: 'Never using the Desmos calculator', fix: 'Warm up on the built-in tool in every practice session.' },
      { mistake: 'Ignoring the Selection Index', fix: 'Compute the index after each test and compare with your state cutoff.' }
    ]
  },
  questionTypes: {
    summary: 'The PSAT/NMSQT uses two sections: Reading and Writing (98 questions, 64 minutes total, two 32-minute modules) and Math (54 questions, 70 minutes total, two 35-minute modules). All items are multiple choice with four answer choices, and every module is adaptive: performance on module 1 determines the difficulty of module 2. Reading and Writing items cluster into four skill domains: Information and Ideas (main idea, inference, evidence support), Craft and Structure (words in context, text structure, purpose), Expression of Ideas (transitions, rhetorical synthesis), and Standard English Conventions (grammar, punctuation, usage). Math spans Algebra (linear equations, systems, inequalities), Advanced Math (quadratics, exponentials, nonlinear functions), Problem-Solving and Data Analysis (ratios, percentages, statistics, probability), and Geometry and Trigonometry (angles, triangles, circles, right-triangle trig). The score range is 320-1520; each section is reported 160-760. Samples below are editor-written illustrations of the published skill domains, not live exam items.',
    types: [
      { name: 'Reading and Writing - Craft and Structure', share: '~20% of the section', detail: 'Words in context and text-structure questions across passages.' },
      { name: 'Reading and Writing - Information and Ideas', share: '~35% of the section', detail: 'Main idea, inference, and evidence-support items.' },
      { name: 'Reading and Writing - Standard English Conventions', share: '~15% of the section', detail: 'Grammar, punctuation, and usage corrections.' },
      { name: 'Math - Algebra', share: '~35% of the section', detail: 'Linear equations, systems, and word problems.' },
      { name: 'Math - Advanced Math and Data', share: '~45% of the section', detail: 'Quadratics, exponentials, ratios, statistics.' }
    ],
    samples: [
      {
        prompt: 'The author of the passage argues that urban farmers "reclaim" land not primarily to grow food but to change how a neighborhood sees itself. Which finding, if true, would most directly support the author\u2019s argument?',
        options: ['A. Community gardens produce only a small share of a neighborhood\u2019s vegetables', 'B. Residents report feeling more ownership of public space after gardens are planted', 'C. Urban farms require significant volunteer labor to stay open', 'D. Several cities have passed zoning rules that restrict garden sizes'],
        answer: 'B',
        explanation: 'The author claims the deeper effect is on neighborhood identity. Finding B directly tests that claim by measuring residents\u2019 sense of ownership, which is an identity outcome rather than a food-output outcome.'
      },
      {
        prompt: 'If 3x - 7 = 2x + 5, what is the value of x?',
        options: ['A. 2', 'B. 12', 'C. -2', 'D. -12'],
        answer: 'B',
        explanation: 'Subtract 2x from both sides to get x - 7 = 5, then add 7 to both sides: x = 12.'
      },
      {
        prompt: 'The researchers expected the new drug to reduce symptoms, but the trial showed the opposite: patients on the drug reported ______ symptom severity than the placebo group. Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: ['A. greater', 'B. more greater', 'C. most great', 'D. greatest'],
        answer: 'A',
        explanation: 'The sentence sets up a comparison between two groups, so the comparative form "greater" is correct; the other choices are either incorrect comparative forms or superlatives.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill domains, not live exam items.'
  },
  examDay: {
    summary: 'The PSAT/NMSQT is administered on a primary October date each year, most often in schools on a weekday morning; College Board also offers a Saturday administration and an alternate date in some states. Students should arrive with the admission ticket or school registration confirmation, a government- or school-issued photo ID if required by the site, and at least two sharpened No. 2 pencils or an approved pen; the exam runs on Bluebook, so the school provides a managed Chromebook or laptop. Bring a fully charged device only if the site instructs students to use personal devices (most sites provide them). No calculator is required because Desmos is built into Bluebook, but a permitted handheld calculator is allowed; phones, smartwatches, and all personal electronics must be in the student\u2019s bag and powered off. The total test time is about 2 hours 14 minutes plus breaks, so plan for a full morning. Students with documented disabilities must have an approved College Board accommodation (SSD) in place; requests are processed on a fixed timeline, so apply months ahead. Scores post in the student\u2019s College Board account roughly two to four weeks after the test date, and National Merit Semifinalist notifications go out through schools the following September. There is no pass/fail outcome; students receive a score report with section scores, percentiles, and readiness benchmarks. Juniors should immediately compare their Selection Index with their state\u2019s cutoff history, and everyone should review the score report\u2019s skill breakdown to plan SAT preparation, since the PSAT/NMSQT is deliberately a preview of the SAT.',
    bring: ['Admission ticket or school confirmation', 'Photo ID if required by the test site', 'Sharpened No. 2 pencils', 'Approved calculator if desired (Desmos is built in)'],
    leave: ['Phone, smartwatch, and any personal electronics', 'Notes, books, or formula sheets', 'Food and drink (offered at breaks only as the site allows)'],
    timeline: [
      { time: '7:15-7:45 AM', detail: 'Arrive; check in and find your testing room.' },
      { time: '8:00 AM', detail: 'Seating, instructions, and device log-in.' },
      { time: '8:15-9:00 AM', detail: 'Reading and Writing module 1 (32 minutes).' },
      { time: '9:00-9:45 AM', detail: 'Reading and Writing module 2 (32 minutes).' },
      { time: '9:45-10:00 AM', detail: 'Break (varies by site).' },
      { time: '10:00-11:10 AM', detail: 'Math module 1 and module 2 (35 minutes each).' },
      { time: '~11:30 AM', detail: 'Dismissal; results arrive in 2-4 weeks.' }
    ],
    rules: [
      'All answers are entered in the Bluebook app; no paper bubbling.',
      'Personal electronics must be powered off and stowed.',
      'The built-in Desmos calculator is always available.',
      'Accommodations must be pre-approved through College Board SSD.'
    ],
    afterwards: 'Scores post in 2-4 weeks with percentiles and benchmarks; juniors check National Merit eligibility via their Selection Index against their state cutoff, and all students use the skill breakdown to plan SAT prep.'
  }
};

export default data;
