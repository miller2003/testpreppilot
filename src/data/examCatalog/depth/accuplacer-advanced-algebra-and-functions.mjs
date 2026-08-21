const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. This desk explains placement-test mechanics and notes plainly when a figure is not published. Wage and education data come from the BLS OEWS series named by code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified ACCUPLACER subtest structure, scoring bands, and fee policy against College Board official pages; wage context against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your ACCUPLACER result decides whether you take credit-bearing or remedial math — the single strongest course-taking predictor of graduation',
    summary: 'The direct answer is that ACCUPLACER does not lead to a salary the way a licensing exam does, and no BLS occupation corresponds to it — so the honest salary story is about what the placement result unlocks. The exam decides, usually before your first semester, whether you enroll directly in college-level mathematics or are assigned to a remedial (developmental) course sequence that carries no degree credit. That assignment matters enormously for earnings because it changes whether you graduate and how long it takes. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework — historically roughly two-thirds of students across the colleges CCRC studied — and that students who skip remediation are substantially more likely to complete a credential. The baseline for interpreting all of this is that the BLS reported a May 2024 median annual wage of $49,500 across all occupations, while workers with an associate degree earn meaningfully more than those with a high school diploma only. In practical terms: a student placed into one or two semesters of non-credit math is more likely to drop out before earning anything, while a student who tests into college-level math and clears an associate degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the placement score — precisely because a single cut score misplaces students at both margins. The practical takeaway for a candidate is to treat the test as a high-stakes placement decision, prepare deliberately, and if the first result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: associate degree holders, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 data ($55,068/yr equivalent)' },
      { label: 'Reference: high school diploma only, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 data ($46,748/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'A placement test, not a credential of record for a job' }
    ],
    growth: 'BLS does not project growth for a placement test; relevant projections follow the occupations students are placed toward.',
    source: { label: 'BLS Occupational Outlook Handbook — Pay overview', url: 'https://www.bls.gov/ooh/about/pay.htm' }
  },
  passRate: {
    headline: 'There is no official pass rate — ACCUPLACER is a scaled placement instrument, and the only numbers that matter are your college\u2019s cut scores',
    summary: 'The core fact to internalize is that ACCUPLACER has no pass/fail threshold at the national level, so any claim of a "pass rate" is describing something that does not exist. Each subtest is scored on a scale of 200 to 300, and every college sets its own cut scores that determine placement into developmental math, college-level math, or a specific course such as college algebra or precalculus. Two students can receive identical scores at different institutions and be placed differently, which is exactly why vendors of practice materials cannot quote a defensible pass rate. What is published is the score scale and, at many schools, the placement table that maps score bands onto course assignments; these tables are public on most college websites but differ by campus. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want, not for an abstract passing line. Because the test is adaptive in the Advanced Algebra and Functions (AAF) subtest — the computer selects later items based on earlier answers — your score reflects a statistical estimate of ability rather than a simple percentage correct. Colleges also vary in retake policy: some allow immediate retests, others impose a waiting period or charge a retake fee, and some let you contest the placement through a multiple-measures review using high school GPA or course transcripts. Treat the official cut-score table from your own college as the only meaningful benchmark, and build your practice around exceeding the top of the band that gates you into credit-bearing coursework.',
    source: { label: 'College Board — ACCUPLACER scoring', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; only per-college cut scores are published, and they vary by institution.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks of focused review and roughly 15 to 25 total study hours for the AAF subtest, which is the version of ACCUPLACER most commonly used for STEM- and math-track placement. The AAF is a 20-question adaptive test with no time limit by default (most colleges allow up to two hours), covering algebraic expressions, linear equations and inequalities, quadratics, geometry, and trigonometry. The dominant mistake students make is studying advanced topics they do not need: if your target is a college algebra or precalculus placement, most of the test rewards solid command of algebra fundamentals — fractions, exponents, factoring, linear functions, and word-problem setup — not calculus preview. Week one should be a diagnostic pass: take one official College Board practice test, record which question types you miss, and map each miss to a skill in the published AAF test description. Week two is targeted skill work on your weakest two or three areas, using the official practice question bank (which is free on the College Board site) and limiting drills to those topics. Week three, if you have it, is for full-length timed practice and stamina work — even without a clock on the real exam, practicing in 90-minute blocks keeps you fresh. Week four is a light taper: one more official practice test, review of error logs, and rest. Because the exam is adaptive, the single most useful habit is learning to move on quickly from items you cannot solve — time spent stuck on one item degrades the rest of the session. Budget the study hours in proportion to your diagnostic score: someone scoring near the bottom of the AAF scale should expect the full 25 hours, while a student already clearing college-algebra-level items may need only 8 to 12.',
    totalHours: '15-25 hours (AAF subtest)',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic baseline', tasks: ['Take the official College Board AAF practice test', 'Log every missed item by skill', 'Map misses to the published test description'], hours: 4 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Drill your 2-3 weakest skill areas from the official question bank', 'Re-test those skills only', 'Begin word-problem setup practice'], hours: 8 },
      { label: 'Week 3', focus: 'Full-length stamina', tasks: ['Two full-length practice sessions in one sitting', 'Review error log patterns', 'Confirm your college\u2019s cut scores'], hours: 8 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final official practice test', 'Light review of error log', 'Check retest and multiple-measures policy at your school'], hours: 4 }
    ],
    variants: [
      { label: 'Quantitative Reasoning, Algebra & Statistics (QAS)', detail: 'A shorter 20-item adaptive subtest used for general placement; a lighter version of the same skill set with less trigonometry.' },
      { label: 'Reading & Writing (Next-Generation)', detail: 'Companion placement subtests for English; preparation focuses on comprehension and grammar, not math.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AAF scores is "skill-mapped practice on official items, followed by adaptive-order simulation," and the single highest-leverage move is obtaining your college\u2019s placement table before you study. Most candidates waste hours reviewing material far above or below their actual band; the placement table tells you exactly which band you need to clear, so you can tune difficulty. Because the test is adaptive, practice in the same mode: use platforms that feed progressively harder items after correct answers, because the real exam punishes the habit of dwelling on items you have already answered. A second proven approach is translating word problems into algebraic setup language early — most AAF items are story problems, and candidates who practice writing equations from prose outperform those who jump straight to computation. Third, keep an error log organized by the official skill categories (expressions, equations, quadratics, geometry/trig) rather than by question number; patterns show up by category. Fourth, learn the arithmetic shortcuts that appear on every version — exponent rules, factoring special products, and unit handling — because these recur across adaptive branches. Fifth, treat the first five items as the most consequential: on an adaptive test, early answers set the difficulty ceiling, so slow down at the start. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited, so the cost of under-preparing is a semester or more of non-credit coursework.',
    items: [
      { title: 'Get the placement table first', detail: 'Obtain your college\u2019s cut scores before studying so you calibrate difficulty to your actual target band.' },
      { title: 'Practise adaptively', detail: 'Use adaptive-order practice so the pacing and difficulty progression match the live test experience.' },
      { title: 'Write the algebra out of word problems', detail: 'Most items are story problems; drill translating prose into equations before computing.' },
      { title: 'Keep a skill-category error log', detail: 'Log misses by published skill category, not question number, so patterns surface.' },
      { title: 'Protect the opening items', detail: 'Adaptive tests set difficulty from early answers; slow down on the first several items.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value ACCUPLACER preparation is almost entirely free, because College Board publishes official practice questions and a full sample test that mirror the adaptive engine better than any third-party bank. The comparison below separates official resources from commercial practice banks and live tutoring, with prices current as of this review. Note that College Board periodically updates subtest names and the adaptive interface, so always verify that a resource references the current "Advanced Algebra and Functions" naming rather than the retired "College-Level Math" subtest.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official practice questions & sample test', values: ['Free', 'Web-based practice + downloadable PDF', 'The closest match to the real adaptive engine'] },
      { label: 'College Board Next-Generation sample questions', values: ['Free', 'PDF question sets', 'Skill-by-skill review'] },
      { label: 'Khan Academy algebra & geometry courses', values: ['Free', 'Video + practice', 'Rebuilding weak fundamentals'] },
      { label: 'ACCUPLACER prep books (e.g. Mometrix, Barron\u2019s)', values: ['~$25-45', 'Printed book + online bank', 'Structured review for self-studiers'] },
      { label: 'Commercial practice apps with adaptive mode', values: ['~$10-30/mo', 'Mobile drills', 'Daily short practice sessions'] },
      { label: 'College readiness tutors (local or online)', values: ['~$40-90/hr', '1:1 sessions', 'Candidates stuck after self-study'] }
    ],
    footnote: 'Prices are approximate and dated to this review; College Board official materials are free and updated with the current subtest set.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is studying the wrong difficulty level — drilling calculus-style content when their target band is solidly algebraic — and the second is ignoring their college\u2019s cut scores entirely. A close third is treating ACCUPLACER like a knowledge test when it is an adaptive placement instrument: pacing matters, early items matter disproportionately, and dwelling on one hard item can cap the whole session. Candidates also routinely underestimate the word-problem share of AAF and arrive unprepared to translate prose into equations, which is the skill most rewarded on the exam. Another recurring error is registering at orientation cold, having done zero practice, and then accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, many students fail to confirm whether their school even uses ACCUPLACER or a competing placement test, or whether the college has moved to GPA-based multiple measures — preparing for the wrong instrument is the most avoidable failure mode of all.',
    items: [
      { mistake: 'Studying the wrong difficulty band', fix: 'Get your college\u2019s placement table and drill exactly the skills in your target band before anything else.' },
      { mistake: 'Ignoring the adaptive nature', fix: 'Practise with adaptive-order items and slow down on the opening questions, which set the difficulty ceiling.' },
      { mistake: 'Skipping word-problem translation practice', fix: 'Drill writing equations from prose; most AAF items are story problems.' },
      { mistake: 'Registering cold at orientation', fix: 'Take one official practice test at least two weeks before placement and log your misses.' },
      { mistake: 'Assuming every school uses ACCUPLACER', fix: 'Confirm the actual placement instrument and whether the college uses multiple measures (GPA + scores).' }
    ]
  },
  questionTypes: {
    summary: 'The AAF subtest contains 20 adaptive multiple-choice questions with no default time limit, drawn from four skill categories in the published test description: algebraic expressions and equations, linear and quadratic functions, geometry and trigonometry, and word problems that require setting up and solving equations. Because the test is computer-adaptive, question difficulty adjusts to your performance: correct answers raise the difficulty of the next item, and incorrect answers lower it, so the question set each candidate sees is unique. College Board describes each item as a standard multiple-choice format with four options. The highest-yield preparation is knowing the four categories and the item style — calculation-light, reasoning-heavy items dominate the upper branch of the scale. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Algebraic expressions & equations', share: '~30%', detail: 'Simplify expressions, solve linear and quadratic equations, apply exponent and factoring rules.' },
      { name: 'Linear & quadratic functions', share: '~30%', detail: 'Interpret graphs, find intercepts and vertices, model real-world relationships.' },
      { name: 'Geometry & trigonometry', share: '~20%', detail: 'Plane geometry, right-triangle ratios, basic trigonometric definitions.' },
      { name: 'Word problems & applied setup', share: '~20%', detail: 'Translate prose into equations and solve; the item type most candidates under-practise.' }
    ],
    samples: [
      {
        prompt: 'If 3x + 7 = 22, what is the value of x?',
        options: ['A. 3', 'B. 5', 'C. 6', 'D. 15'],
        answer: 'B',
        explanation: 'Subtract 7 from both sides: 3x = 15, then divide by 3 to get x = 5.'
      },
      {
        prompt: 'A rectangle has a length of (2x + 3) and a width of x. If the area is 65 square units, which equation could be used to find x?',
        options: ['A. 2x\u00b2 + 3x = 65', 'B. 2x + 3 = 65', 'C. 2x\u00b2 + 3 = 65', 'D. x(2x + 3) = 0'],
        answer: 'A',
        explanation: 'Area is length times width: x(2x + 3) = 65, which expands to 2x\u00b2 + 3x = 65.'
      },
      {
        prompt: 'In a right triangle, one leg is 6 and the hypotenuse is 10. What is the length of the other leg?',
        options: ['A. 4', 'B. 8', 'C. 12', 'D. 16'],
        answer: 'B',
        explanation: 'By the Pythagorean theorem, the missing leg is \u221a(10\u00b2 \u2212 6\u00b2) = \u221a(100 \u2212 36) = \u221a64 = 8.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'ACCUPLACER is administered at your college or a testing center, typically during orientation or at a scheduled placement session, and is untimed by default — most colleges allow up to two hours per subtest, so pacing pressure is minimal but stamina still matters. The core rules are straightforward: bring a government-issued photo ID and your college-issued registration information, leave calculators at home (an on-screen calculator is built into applicable math questions), and expect to be asked to store personal items. There is no essay on the AAF, no cost at most colleges (the test is typically free at the enrolling institution, though retakes may carry a fee), and you will usually see your placement result before you leave. The biggest behavioural trap is finishing in a rush out of habit — there is no clock advantage to speed on an untimed test, so work deliberately, especially on the opening adaptive items. After the session, your score report shows scaled scores and the placement recommendation; if the placement assigns you to developmental coursework and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process using your high school record. The single most useful thing to bring is the placement table you studied against, so you can interpret your result on the spot.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target placement band', 'Patience for an untimed, adaptive session'],
    leave: ['Calculator (on-screen one is provided where applicable)', 'Phone and smartwatch (stored with testing staff)', 'Notes or study materials'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID and registration; store personal items.' },
      { time: 'Start', detail: 'The AAF subtest launches untimed (most colleges allow up to 2 hours); on-screen calculator available.' },
      { time: 'Mid-session', detail: 'Work deliberately; early items carry the most adaptive weight, so slow down at the start.' },
      { time: 'Finish', detail: 'Placement results typically display immediately or within minutes; ask for the printed report.' },
      { time: 'After', detail: 'If placed into remediation, ask about retake policy and multiple-measures review before leaving.' }
    ],
    rules: ['Untimed by default — speed earns nothing', 'Photo ID required', 'Personal items and devices stored', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your scaled score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review, then re-take or appeal before enrolling in non-credit coursework.'
  }
};

export default data;
