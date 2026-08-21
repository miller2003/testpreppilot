const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACCUPLACER QAS subtest structure, scoring bands, and content categories against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your QAS score decides whether you enter credit-bearing statistics-level math or developmental algebra — and remedial load is one of the strongest predictors of degree completion and lifetime earnings',
    summary: 'The direct answer is that ACCUPLACER Quantitative Reasoning, Algebra, and Statistics (QAS) is a placement test, not a job credential, so no BLS occupation corresponds to it and the salary story is about what the placement result unlocks. The test decides, usually before your first semester, whether you place into college-level math such as statistics or college algebra, or into a developmental algebra sequence — and that assignment is one of the strongest predictors of whether you graduate. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework and that students who skip remediation complete credentials at substantially higher rates. The reference point for interpreting this is BLS: the May 2024 median wage across all occupations was $49,500, while workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers. A student placed into one or two semesters of non-credit algebra is measurably more likely to drop out before earning any credential, while a student who clears the placement gate and completes a degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the placement score — precisely because a single cut score misplaces students at both margins. The practical takeaway: treat the QAS subtest as a high-stakes placement decision, prepare deliberately, and if the result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'Reference: high school diploma, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 ($46,748/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'A placement subtest, not a credential of record' }
    ],
    growth: 'BLS does not project growth for a placement test; relevant projections follow the occupations students are placed toward.',
    source: { label: 'BLS OOH — Pay overview', url: 'https://www.bls.gov/ooh/about/pay.htm' }
  },
  passRate: {
    headline: 'There is no official pass rate — ACCUPLACER QAS is a scaled placement instrument scored 200-300, and only your college\u2019s cut scores matter',
    summary: 'The core fact to internalize is that ACCUPLACER QAS has no pass/fail threshold at the national level, so any claim of a "pass rate" describes something that does not exist. Each subtest is scored on a 200-300 scale, and every college sets its own cut scores that determine placement into developmental algebra, college-level statistics, or a higher math course. Two students can receive identical scores at different institutions and be placed differently, which is exactly why practice vendors cannot quote a defensible pass rate. What is published is the score scale and, at many schools, the placement table that maps score bands onto course assignments. The QAS subtest is a 20-question computer-adaptive test with no time limit by default (most colleges allow up to two hours), covering four content areas: rational numbers and ratio/proportion, algebra (linear equations and inequalities, expressions, and functions), descriptive statistics, and geometry concepts. Because the test is adaptive, your score reflects a statistical estimate of ability rather than a simple percentage correct, and early answers set the difficulty ceiling. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want. Colleges also vary in retake policy, and some let you contest the placement through a multiple-measures review.',
    source: { label: 'College Board — ACCUPLACER scoring', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; only per-college cut scores are published, and they vary by institution.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks and roughly 15 to 25 hours of study for the QAS subtest, and expect the exam to reward fluent command of algebra fundamentals — linear equations, inequalities, expressions, and functions — plus ratio and proportion, basic statistics, and geometry. The QAS is a 20-question adaptive test with no default time limit (most colleges allow up to two hours), and it sits between the Arithmetic subtest and the Advanced Algebra and Functions (AAF) subtest on the placement ladder. Week one should be a diagnostic pass: take the official College Board practice test, log which question types you miss, and map each miss to a content area. Week two is targeted skill work on your weakest two or three areas, using the free official question bank and drilling linear-equation solving and word-problem setup. Week three, if you have it, is for full-length timed practice and stamina. Week four is a light taper: one more official practice test, review of the error log, and rest. The single most useful habit is learning to move on quickly from items you cannot solve, because on an adaptive test the time spent stuck on one item degrades the whole session. Budget hours in proportion to your diagnostic score: someone near the bottom should expect the full 25 hours, while a student already clearing algebra-level items may need only 8 to 10.',
    totalHours: '15-25 hours (QAS subtest)',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic baseline', tasks: ['Take the official College Board QAS practice test', 'Log every missed item by content area', 'Map misses to the published test description'], hours: 5 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Drill linear equations and inequalities', 'Practise ratio/proportion and word-problem setup', 'Re-test only the weak skills'], hours: 8 },
      { label: 'Week 3', focus: 'Full-length stamina', tasks: ['Two full-length practice sessions in one sitting', 'Review statistics and geometry content', 'Confirm your college\u2019s cut scores'], hours: 8 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final official practice test', 'Light review of the error log', 'Check retest and multiple-measures policy'], hours: 4 }
    ],
    variants: [
      { label: 'Arithmetic subtest', detail: 'The more fundamental placement subtest, for students at the bottom of the math ladder.' },
      { label: 'Advanced Algebra & Functions (AAF)', detail: 'The highest math placement subtest, used for STEM-track placement.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves QAS scores is "skill-mapped practice on official items, then adaptive-order simulation," and the single highest-leverage move is obtaining your college\u2019s placement table before you study. Because the test is adaptive, practise in the same mode: use platforms that feed progressively harder items after correct answers. A second proven approach is mastering linear-equation fluency — solving equations, interpreting graphs, and setting up word problems — since algebra carries the largest content share and the statistics and geometry items build on it. Third, drill the ratio-and-proportion items, which are dependable points and a common weak spot. Fourth, keep an error log organized by content area rather than question number; patterns show up by area. Fifth, treat the first five items as the most consequential: on an adaptive test, early answers set the difficulty ceiling, so slow down at the start. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited.',
    items: [
      { title: 'Get the placement table first', detail: 'Obtain your college\u2019s cut scores before studying so you calibrate difficulty to your target band.' },
      { title: 'Master linear-equation fluency', detail: 'Algebra carries the largest share; practise solving, graphing, and setup.' },
      { title: 'Drill ratio and proportion', detail: 'A dependable content block and a common weak spot.' },
      { title: 'Practise adaptively', detail: 'Use adaptive-order practice so the difficulty progression matches the live test.' },
      { title: 'Protect the opening items', detail: 'Adaptive tests set difficulty from early answers; slow down at the start.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value ACCUPLACER QAS preparation is almost entirely free, because College Board publishes official practice questions and a full sample test that mirror the adaptive engine better than any third-party bank. The comparison below separates official resources from commercial practice banks and live tutoring, with prices current to this review.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official practice questions & sample test', values: ['Free', 'Web-based practice + downloadable PDF', 'The closest match to the real adaptive engine'] },
      { label: 'Khan Academy algebra & statistics courses', values: ['Free', 'Video + practice', 'Rebuilding weak fundamentals'] },
      { label: 'ACCUPLACER prep books (e.g. Mometrix, Barron\u2019s)', values: ['~$25-45', 'Printed book + online bank', 'Structured review for self-studiers'] },
      { label: 'Commercial practice apps with adaptive mode', values: ['~$10-30/mo', 'Mobile drills', 'Daily short practice sessions'] },
      { label: 'College readiness tutors', values: ['~$40-90/hr', '1:1 sessions', 'Candidates stuck after self-study'] }
    ],
    footnote: 'Prices approximate and dated to this review; College Board official materials are free and updated with the current subtest set.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is studying the wrong difficulty level — drilling AAF-level trigonometry when the QAS band rewards algebra fundamentals — and the second is ignoring their college\u2019s cut scores entirely. A close third is being rusty on linear-equation solving, the largest content share. Candidates also routinely skip the ratio-and-proportion items, treating them as easy, and then lose dependable points, and many under-practise word-problem setup. Another recurring error is registering at orientation cold and then accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, some students fail to confirm whether their school even uses ACCUPLACER or a competing placement test.',
    items: [
      { mistake: 'Studying the wrong difficulty band', fix: 'Get your college\u2019s placement table and drill exactly the skills in your target band.' },
      { mistake: 'Rusty linear-equation solving', fix: 'Drill solving, graphing, and word-problem setup for algebra items.' },
      { mistake: 'Skipping ratio and proportion', fix: 'A dependable content block; give it study time.' },
      { mistake: 'Ignoring the adaptive nature', fix: 'Practise with adaptive-order items and slow down on the opening questions.' },
      { mistake: 'Registering cold at orientation', fix: 'Take one official practice test at least two weeks before placement.' }
    ]
  },
  questionTypes: {
    summary: 'The QAS subtest contains 20 adaptive multiple-choice questions with no default time limit, covering rational numbers and ratio/proportion, algebra (linear equations, inequalities, expressions, and functions), descriptive statistics, and geometry. Because the test is computer-adaptive, each candidate\u2019s question set is unique. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Rational numbers & ratio/proportion', share: '~25%', detail: 'Rates, ratios, and proportional reasoning.' },
      { name: 'Algebra: expressions & equations', share: '~35%', detail: 'Linear equations, inequalities, and expressions.' },
      { name: 'Functions', share: '~15%', detail: 'Function concepts, graphs, and applications.' },
      { name: 'Descriptive statistics & geometry', share: '~25%', detail: 'Data analysis and basic geometry concepts.' }
    ],
    samples: [
      {
        prompt: 'If 3x + 5 = 20, what is the value of x?',
        options: ['A. 5', 'B. 6', 'C. 15', 'D. 25'],
        answer: 'A',
        explanation: 'Subtract 5 from both sides: 3x = 15, then divide by 3 to get x = 5.'
      },
      {
        prompt: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 9 cups of sugar, how many cups of flour are needed?',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'],
        answer: 'B',
        explanation: 'The ratio is 2:3, so 9 cups of sugar (3\u00d73) requires 2\u00d73 = 6 cups of flour.'
      },
      {
        prompt: 'What is the median of the data set 4, 8, 3, 9, 6?',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 9'],
        answer: 'B',
        explanation: 'Sorted: 3, 4, 6, 8, 9 — the middle value is 6.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'ACCUPLACER QAS is administered at your college or a testing center, typically during orientation or a scheduled placement session, and is untimed by default — most colleges allow up to two hours per subtest. The core rules: bring a government-issued photo ID and your registration information, leave calculators at home (an on-screen calculator is built into applicable questions), and expect to store personal items. There is no cost at most colleges, and you will usually see your placement result before you leave. The biggest behavioural trap is finishing in a rush out of habit — there is no clock advantage to speed on an untimed test, so work deliberately, especially on the opening adaptive items. After the session, your score report shows the scaled score and placement recommendation; if the placement assigns you to developmental coursework and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target placement band', 'Patience for an untimed, adaptive session'],
    leave: ['Calculator (on-screen one is provided where applicable)', 'Phone and smartwatch (stored with testing staff)', 'Notes or study materials'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID; store personal items.' },
      { time: 'Start', detail: 'The QAS subtest launches untimed (most colleges allow up to 2 hours).' },
      { time: 'Mid-session', detail: 'Work deliberately; early items carry the most adaptive weight.' },
      { time: 'Finish', detail: 'Placement results typically display immediately; ask for the printed report.' },
      { time: 'After', detail: 'If placed into remediation, ask about retake policy and multiple-measures review.' }
    ],
    rules: ['Untimed by default — speed earns nothing', 'Photo ID required', 'Personal items and devices stored', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your scaled score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review before enrolling in non-credit coursework.'
  }
};

export default data;
