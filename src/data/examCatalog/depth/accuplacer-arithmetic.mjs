const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACCUPLACER Arithmetic subtest structure, scoring bands, and fee policy against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your Arithmetic score decides whether you start in credit-bearing or developmental math — and remedial load is one of the strongest predictors of degree completion and lifetime earnings',
    summary: 'The direct answer is that ACCUPLACER Arithmetic is a placement test, not a job credential, so no BLS occupation corresponds to it and the salary story is about what the placement result unlocks. The test decides, usually before your first semester, whether you place directly into college-level math or are assigned to a developmental (non-credit) arithmetic or pre-algebra course — and that assignment is one of the strongest predictors of whether you graduate. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework and that students who skip remediation complete credentials at substantially higher rates. The reference point for interpreting all of this is BLS: the May 2024 median wage across all occupations was $49,500, while workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers — the completion premium is real and compounding. A student placed into one or two semesters of non-credit arithmetic is measurably more likely to drop out before earning any credential, while a student who clears the placement gate and completes a degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the placement score — precisely because a single cut score misplaces students at both margins. The practical takeaway: treat the Arithmetic subtest as a high-stakes placement decision, prepare deliberately, and if the result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
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
    headline: 'There is no official pass rate — ACCUPLACER Arithmetic is a scaled placement instrument scored 200-300, and only your college\u2019s cut scores matter',
    summary: 'The core fact to internalize is that ACCUPLACER Arithmetic has no pass/fail threshold at the national level, so any claim of a "pass rate" describes something that does not exist. Each subtest is scored on a 200-300 scale, and every college sets its own cut scores that determine placement into developmental math, college-level math, or a specific course. Two students can receive identical scores at different institutions and be placed differently, which is exactly why practice vendors cannot quote a defensible pass rate. What is published is the score scale and, at many schools, the placement table that maps score bands onto course assignments; these tables are public on most college websites but differ by campus. The Arithmetic subtest is a 20-question computer-adaptive test with no time limit by default (most colleges allow up to two hours), covering whole numbers, fractions, decimals, percentages, and applications. Because the test is adaptive, your score reflects a statistical estimate of ability rather than a simple percentage correct, and early answers set the difficulty ceiling. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want. Colleges also vary in retake policy — some allow immediate retests, others impose a waiting period or fee, and some let you contest the placement through a multiple-measures review using high school GPA or transcripts.',
    source: { label: 'College Board — ACCUPLACER scoring', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; only per-college cut scores are published, and they vary by institution.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks and roughly 12 to 20 hours of study for the Arithmetic subtest, and expect the exam to reward fluent mastery of basic arithmetic — whole numbers, fractions, decimals, percentages, and word-problem setup — not advanced algebra. The Arithmetic subtest is a 20-question adaptive test with no default time limit (most colleges allow up to two hours), and it is the most fundamental of the math placement subtests: students who score at the bottom of the Arithmetic band are typically placed into developmental arithmetic itself. Week one should be a diagnostic pass: take the official College Board practice test, log which question types you miss, and map each miss to a skill (fractions operations, decimal conversions, percentage change, ratio and proportion). Week two is targeted skill work on your weakest two or three areas, using the free official question bank and limiting drills to those skills. Week three, if you have it, is for full-length timed practice and stamina — even without a clock on the real exam, practising in 90-minute blocks keeps you fresh. Week four is a light taper: one more official practice test, review of the error log, and rest. The single most useful habit is learning to move on quickly from items you cannot solve, because on an adaptive test the time spent stuck on one item degrades the whole session. Budget hours in proportion to your diagnostic score: someone near the bottom should expect the full 20 hours, while a student already clearing college-level items may need only 6 to 8.',
    totalHours: '12-20 hours (Arithmetic subtest)',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic baseline', tasks: ['Take the official College Board Arithmetic practice test', 'Log every missed item by skill', 'Map misses to the published test description'], hours: 4 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Drill fractions, decimals, and percent operations', 'Practise word-problem setup', 'Re-test only the weak skills'], hours: 7 },
      { label: 'Week 3', focus: 'Full-length stamina', tasks: ['Two full-length practice sessions in one sitting', 'Review the error log patterns', 'Confirm your college\u2019s cut scores'], hours: 6 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final official practice test', 'Light review of the error log', 'Check retest and multiple-measures policy'], hours: 3 }
    ],
    variants: [
      { label: 'Quantitative Reasoning, Algebra & Statistics (QAS)', detail: 'The next subtest up the placement ladder; adds algebra and statistics content.' },
      { label: 'Advanced Algebra & Functions (AAF)', detail: 'The highest math placement subtest, used for STEM-track placement.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves Arithmetic scores is "skill-mapped practice on official items, then adaptive-order simulation," and the single highest-leverage move is obtaining your college\u2019s placement table before you study. Most candidates waste hours reviewing material far above or below their actual band; the placement table tells you exactly which band you need to clear, so you can tune difficulty. Because the test is adaptive, practise in the same mode: use platforms that feed progressively harder items after correct answers, because the real exam punishes dwelling on answered items. A second proven approach is mastering the fraction-decimal-percent conversions cold, since they underpin most Arithmetic items and are the skill that decays fastest without practice. Third, translate word problems into arithmetic setup language early — most items are story problems, and candidates who practise writing the calculation from prose outperform those who jump straight to computing. Fourth, keep an error log organized by skill category rather than question number; patterns show up by category. Fifth, treat the first five items as the most consequential: on an adaptive test, early answers set the difficulty ceiling, so slow down at the start. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited.',
    items: [
      { title: 'Get the placement table first', detail: 'Obtain your college\u2019s cut scores before studying so you calibrate difficulty to your target band.' },
      { title: 'Practise adaptively', detail: 'Use adaptive-order practice so the difficulty progression matches the live test.' },
      { title: 'Master fraction-decimal-percent fluency', detail: 'Conversions underpin most items and decay fastest without practice.' },
      { title: 'Write the math out of word problems', detail: 'Most items are story problems; practise setting up the calculation.' },
      { title: 'Protect the opening items', detail: 'Adaptive tests set difficulty from early answers; slow down at the start.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value ACCUPLACER Arithmetic preparation is almost entirely free, because College Board publishes official practice questions and a full sample test that mirror the adaptive engine better than any third-party bank. The comparison below separates official resources from commercial practice banks and live tutoring, with prices current to this review. Note that College Board periodically updates subtest naming, so verify that a resource references the current Arithmetic subtest rather than retired versions.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official practice questions & sample test', values: ['Free', 'Web-based practice + downloadable PDF', 'The closest match to the real adaptive engine'] },
      { label: 'Khan Academy arithmetic & pre-algebra courses', values: ['Free', 'Video + practice', 'Rebuilding weak fundamentals'] },
      { label: 'ACCUPLACER prep books (e.g. Mometrix, Barron\u2019s)', values: ['~$25-45', 'Printed book + online bank', 'Structured review for self-studiers'] },
      { label: 'Commercial practice apps with adaptive mode', values: ['~$10-30/mo', 'Mobile drills', 'Daily short practice sessions'] },
      { label: 'College readiness tutors', values: ['~$40-90/hr', '1:1 sessions', 'Candidates stuck after self-study'] }
    ],
    footnote: 'Prices approximate and dated to this review; College Board official materials are free and updated with the current subtest set.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is studying the wrong difficulty level — drilling algebra content when the Arithmetic band rewards basic fluency — and the second is ignoring their college\u2019s cut scores entirely. A close third is treating ACCUPLACER like a knowledge test when it is an adaptive placement instrument: pacing matters, early items matter disproportionately, and dwelling on one hard item can cap the whole session. Candidates also routinely lose points on fraction and decimal operations through rusty arithmetic, and many underestimate the word-problem share of the Arithmetic paper, arriving unprepared to translate prose into a calculation. Another recurring error is registering at orientation cold, having done zero practice, and then accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, many students fail to confirm whether their school even uses ACCUPLACER or a competing placement test — preparing for the wrong instrument is the most avoidable failure mode of all.',
    items: [
      { mistake: 'Studying the wrong difficulty band', fix: 'Get your college\u2019s placement table and drill exactly the skills in your target band.' },
      { mistake: 'Ignoring the adaptive nature', fix: 'Practise with adaptive-order items and slow down on the opening questions.' },
      { mistake: 'Rusty fraction and decimal fluency', fix: 'Drill conversions and operations; they underpin most items.' },
      { mistake: 'Skipping word-problem translation', fix: 'Practise setting up calculations from prose.' },
      { mistake: 'Registering cold at orientation', fix: 'Take one official practice test at least two weeks before placement.' }
    ]
  },
  questionTypes: {
    summary: 'The Arithmetic subtest contains 20 adaptive multiple-choice questions with no default time limit, drawn from the published skill areas: operations with whole numbers, fractions and mixed numbers, decimals, percentages, and applications. Because the test is computer-adaptive, question difficulty adjusts to your performance, and each candidate\u2019s question set is unique. The highest-yield preparation is knowing the skill areas and the item style — calculation-light, reasoning-heavy items dominate the upper branch of the scale. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Whole number operations', share: '~25%', detail: 'Addition, subtraction, multiplication, and division with applications.' },
      { name: 'Fractions & mixed numbers', share: '~25%', detail: 'Operations, equivalence, and applications.' },
      { name: 'Decimals', share: '~20%', detail: 'Operations, conversions, and rounding.' },
      { name: 'Percentages', share: '~20%', detail: 'Percent change, discounts, and applications.' },
      { name: 'Applications', share: '~10%', detail: 'Word problems requiring setup and computation.' }
    ],
    samples: [
      {
        prompt: 'What is 3/4 + 1/8?',
        options: ['A. 4/12', 'B. 7/8', 'C. 1/2', 'D. 5/8'],
        answer: 'B',
        explanation: 'Convert 3/4 to 6/8, then add: 6/8 + 1/8 = 7/8.'
      },
      {
        prompt: 'A shirt costs $40 and is discounted 25%. What is the sale price?',
        options: ['A. $30', 'B. $35', 'C. $25', 'D. $32'],
        answer: 'A',
        explanation: '25% of $40 is $10; $40 \u2212 $10 = $30.'
      },
      {
        prompt: 'What is 0.75 expressed as a fraction in simplest form?',
        options: ['A. 3/4', 'B. 7/5', 'C. 75/10', 'D. 3/5'],
        answer: 'A',
        explanation: '0.75 = 75/100, which simplifies to 3/4.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'ACCUPLACER Arithmetic is administered at your college or a testing center, typically during orientation or a scheduled placement session, and is untimed by default — most colleges allow up to two hours per subtest, so pacing pressure is minimal but stamina still matters. The core rules are straightforward: bring a government-issued photo ID and your college-issued registration information, leave calculators at home (an on-screen calculator is built into applicable questions), and expect to be asked to store personal items. There is no cost at most colleges, though retakes may carry a fee, and you will usually see your placement result before you leave. The biggest behavioural trap is finishing in a rush out of habit — there is no clock advantage to speed on an untimed test, so work deliberately, especially on the opening adaptive items. After the session, your score report shows scaled scores and the placement recommendation; if the placement assigns you to developmental coursework and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process using your high school record.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target placement band', 'Patience for an untimed, adaptive session'],
    leave: ['Calculator (on-screen one is provided where applicable)', 'Phone and smartwatch (stored with testing staff)', 'Notes or study materials'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID; store personal items.' },
      { time: 'Start', detail: 'The Arithmetic subtest launches untimed (most colleges allow up to 2 hours).' },
      { time: 'Mid-session', detail: 'Work deliberately; early items carry the most adaptive weight.' },
      { time: 'Finish', detail: 'Placement results typically display immediately; ask for the printed report.' },
      { time: 'After', detail: 'If placed into remediation, ask about retake policy and multiple-measures review.' }
    ],
    rules: ['Untimed by default — speed earns nothing', 'Photo ID required', 'Personal items and devices stored', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your scaled score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review before enrolling in non-credit coursework.'
  }
};

export default data;
