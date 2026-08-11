const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACCUPLACER Writing subtest structure, scoring bands, and content categories against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your Writing score decides whether you enter credit-bearing composition or developmental writing — and remedial load is one of the strongest predictors of degree completion and lifetime earnings',
    summary: 'The direct answer is that ACCUPLACER Writing is a placement test, not a job credential, so no BLS occupation corresponds to it and the salary story is about what the placement result unlocks. The multiple-choice test decides, usually before your first semester, whether you place into college-level English or a developmental writing course — and that assignment is one of the strongest predictors of whether you graduate. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework and that students who skip remediation complete credentials at substantially higher rates. The reference point for interpreting this is BLS: the May 2024 median wage across all occupations was $49,500, while workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers. A student placed into one or two semesters of non-credit writing is measurably more likely to drop out before earning any credential, while a student who clears the placement gate and completes a degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the placement score — precisely because a single cut score misplaces students at both margins. The practical takeaway: treat the Writing subtest as a high-stakes placement decision, prepare deliberately, and if the result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
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
    headline: 'There is no official pass rate — ACCUPLACER Writing is a scaled placement instrument scored 200-300, and only your college\u2019s cut scores matter',
    summary: 'The core fact to internalize is that ACCUPLACER Writing has no pass/fail threshold at the national level, so any claim of a "pass rate" describes something that does not exist. The subtest is scored on a 200-300 scale, and every college sets its own cut scores that determine placement into developmental writing, college-level composition, or a higher course. Two students can receive identical scores at different institutions and be placed differently, which is exactly why practice vendors cannot quote a defensible pass rate. What is published is the score scale and, at many schools, the placement table that maps score bands onto course assignments. The Writing subtest is a 25-question computer-adaptive test with no time limit by default (most colleges allow up to two hours), and it measures standard written English: sentence logic, organization, development, and mechanical conventions, presented as passage-edit and sentence-choice items. Because the test is adaptive, your score reflects a statistical estimate of ability rather than a simple percentage correct, and early answers set the difficulty ceiling. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want. Colleges also vary in retake policy, and some let you contest the placement through a multiple-measures review using high school GPA or transcripts.',
    source: { label: 'College Board — ACCUPLACER scoring', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; only per-college cut scores are published, and they vary by institution.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks and roughly 12 to 20 hours of study for the Writing subtest, and expect the exam to reward command of standard written English — sentence logic, organization, development, and conventions — rather than memorized grammar rules alone. The Writing subtest is a 25-question adaptive test with no default time limit (most colleges allow up to two hours), presented largely as passage-edit items where you choose the best revision. Week one should be a diagnostic pass: take the official College Board practice test, log which item types you miss, and map each miss to a skill (sentence logic, organization, development, conventions). Week two is targeted skill work on your weakest two or three areas, using the free official question bank and drilling the passage-edit format. Week three, if you have it, is for full-length timed practice and stamina. Week four is a light taper: one more official practice test, review of the error log, and rest. The single most useful habit is learning to read each passage-edit item as a revision decision: identify what the sentence is trying to say, then choose the option that says it most clearly and correctly. Budget hours in proportion to your diagnostic score: someone near the bottom should expect the full 20 hours, while a student already writing at college level may need only 6 to 8.',
    totalHours: '12-20 hours (Writing subtest)',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic baseline', tasks: ['Take the official College Board Writing practice test', 'Log every missed item by skill', 'Map misses to the published test description'], hours: 4 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Drill sentence-logic and revision items', 'Practise the passage-edit format', 'Review mechanical conventions'], hours: 7 },
      { label: 'Week 3', focus: 'Full-length stamina', tasks: ['Two full-length practice sessions in one sitting', 'Review the error log patterns', 'Confirm your college\u2019s cut scores'], hours: 6 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final official practice test', 'Light review of the error log', 'Check retest and multiple-measures policy'], hours: 3 }
    ],
    variants: [
      { label: 'WritePlacer', detail: 'The essay-based English placement test, scored 1-8 with a rubric.' },
      { label: 'ESL Language Use', detail: 'A companion subtest for English-language learners.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves Writing scores is "practise the revision-decision mindset on official items, then rehearse adaptive-order simulation," and the single highest-leverage move is obtaining your college\u2019s placement table before you study. A second proven approach is mastering the passage-edit format, which dominates the exam: each item presents a sentence or short passage and asks which revision is best, so practise reading for clarity and correctness before looking at the options. Third, drill sentence-logic items specifically — fragments, run-ons, modifier placement, and parallelism are the highest-frequency categories. Fourth, review mechanical conventions — punctuation, agreement, and verb tense — since they are dependable points and the most fixable. Fifth, keep an error log organized by skill category; patterns show up by category. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited.',
    items: [
      { title: 'Get the placement table first', detail: 'Obtain your college\u2019s cut scores before studying so you calibrate difficulty to your target band.' },
      { title: 'Master the passage-edit format', detail: 'Read for clarity and correctness before choosing the best revision.' },
      { title: 'Drill sentence-logic items', detail: 'Fragments, run-ons, modifiers, and parallelism are the highest-frequency categories.' },
      { title: 'Review mechanical conventions', detail: 'Punctuation, agreement, and verb tense are dependable points.' },
      { title: 'Protect the opening items', detail: 'Adaptive tests set difficulty from early answers; slow down at the start.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value ACCUPLACER Writing preparation is almost entirely free, because College Board publishes official practice questions and a full sample test that mirror the adaptive engine better than any third-party bank. The comparison below separates official resources from commercial practice banks and live tutoring, with prices current to this review.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official practice questions & sample test', values: ['Free', 'Web-based practice + downloadable PDF', 'The closest match to the real adaptive engine'] },
      { label: 'Khan Academy SAT Writing & Language', values: ['Free', 'Video + practice', 'Grammar and convention review'] },
      { label: 'ACCUPLACER prep books (e.g. Mometrix, Barron\u2019s)', values: ['~$25-45', 'Printed book + online bank', 'Structured review for self-studiers'] },
      { label: 'Commercial practice apps with adaptive mode', values: ['~$10-30/mo', 'Mobile drills', 'Daily short practice sessions'] },
      { label: 'Writing tutors', values: ['~$40-90/hr', '1:1 sessions', 'Candidates stuck after self-study'] }
    ],
    footnote: 'Prices approximate and dated to this review; College Board official materials are free and updated with the current subtest set.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is treating the Writing subtest as a grammar-trivia test and memorizing rule names instead of practising the revision-decision format; the second is ignoring their college\u2019s cut scores entirely. A close third is missing sentence-logic items — fragments, run-ons, and modifier errors — which are the highest-frequency categories. Candidates also routinely rush the passage-edit items, choosing the option that "sounds right" instead of reading for clarity and correctness, and many neglect mechanical conventions as too basic, losing dependable points. Another recurring error is registering at orientation cold and accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, some students fail to confirm whether their school even uses ACCUPLACER or a competing placement test.',
    items: [
      { mistake: 'Grammar-trivia study', fix: 'Practise the revision-decision format; the exam tests application.' },
      { mistake: 'Missing sentence-logic items', fix: 'Drill fragments, run-ons, modifiers, and parallelism.' },
      { mistake: 'Choosing what sounds right', fix: 'Read for clarity and correctness before picking the revision.' },
      { mistake: 'Neglecting conventions', fix: 'Punctuation and agreement are dependable points.' },
      { mistake: 'Registering cold at orientation', fix: 'Take one official practice test at least two weeks before placement.' }
    ]
  },
  questionTypes: {
    summary: 'The Writing subtest contains 25 adaptive multiple-choice questions with no default time limit, measuring standard written English through sentence-choice and passage-edit items across sentence logic, organization, development, and mechanical conventions. Because the test is computer-adaptive, each candidate\u2019s question set is unique. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Sentence logic', share: '~40%', detail: 'Fragments, run-ons, modifier placement, and parallelism.' },
      { name: 'Organization & development', share: '~25%', detail: 'Sentence order, transitions, and logical flow.' },
      { name: 'Mechanical conventions', share: '~20%', detail: 'Punctuation, agreement, and verb tense.' },
      { name: 'Usage & style', share: '~15%', detail: 'Word choice, clarity, and concision.' }
    ],
    samples: [
      {
        prompt: 'Which revision best corrects the sentence: "The committee approved the budget, they then adjourned."?',
        options: ['A. The committee approved the budget; they then adjourned', 'B. The committee approved the budget, they then, adjourned', 'C. The committee approved the budget they then adjourned', 'D. No revision needed'],
        answer: 'A',
        explanation: 'A semicolon correctly joins the two independent clauses, fixing the comma splice.'
      },
      {
        prompt: 'Which sentence is most clearly written?',
        options: ['A. Running late, the bus was missed by the student', 'B. Running late, the student missed the bus', 'C. The bus, running late, was missed', 'D. Missed by the student was the bus, running late'],
        answer: 'B',
        explanation: 'The modifier "running late" correctly attaches to the student, the sentence\u2019s subject.'
      },
      {
        prompt: 'Choose the best revision for clarity: "The reason why the meeting was postponed is because the room was unavailable."?',
        options: ['A. The meeting was postponed because the room was unavailable', 'B. The reason is because the room was unavailable', 'C. The meeting was postponed, the reason being the room', 'D. No revision needed'],
        answer: 'A',
        explanation: 'The revision removes the redundant "reason why...because" construction for clarity and concision.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'ACCUPLACER Writing is administered at your college or a testing center, typically during orientation or a scheduled placement session, and is untimed by default — most colleges allow up to two hours per subtest. The core rules: bring a government-issued photo ID and your registration information, leave calculators at home (none are needed for Writing), and expect to store personal items. There is no cost at most colleges, and you will usually see your placement result before you leave. The biggest behavioural trap is rushing through the passage-edit items; instead, read each sentence for what it is trying to say, then choose the revision that says it most clearly and correctly. After the session, your score report shows the scaled score and placement recommendation; if the placement assigns you to developmental coursework and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target placement band', 'Patience for an untimed, adaptive session'],
    leave: ['Phone and smartwatch (stored with testing staff)', 'Notes or study materials'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID; store personal items.' },
      { time: 'Start', detail: 'The Writing subtest launches untimed (most colleges allow up to 2 hours).' },
      { time: 'Mid-session', detail: 'Read each item for clarity and correctness; early items carry the most adaptive weight.' },
      { time: 'Finish', detail: 'Placement results typically display immediately; ask for the printed report.' },
      { time: 'After', detail: 'If placed into remediation, ask about retake policy and multiple-measures review.' }
    ],
    rules: ['Untimed by default — speed earns nothing', 'Photo ID required', 'Personal items and devices stored', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your scaled score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review before enrolling in non-credit coursework.'
  }
};

export default data;
