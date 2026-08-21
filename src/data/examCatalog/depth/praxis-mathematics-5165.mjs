const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'Praxis test structure comes from the ETS Praxis official pages and varies by state; passing scores are set by each state. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Praxis Mathematics 5165 test structure and content categories against ETS official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect high-school-teacher pay at a May 2024 median of $64,580 (BLS) — Praxis 5165 is the mathematics licensure gate for secondary math teachers, and math-teacher roles sit at the top of the teaching pay range',
    summary: 'The direct answer is that Praxis Mathematics: Content Knowledge (5165) is the licensure test many states require for secondary mathematics teachers, and the occupation it gates, high school teachers (SOC 25-2031), earned a May 2024 median annual wage of $64,580, with the lowest 10 percent under about $48,000 and the highest 10 percent above about $102,000. The honest framing is that the test does not set pay — teaching salaries are set by district salary schedules, unions, and state funding — but mathematics is one of the highest-demand teaching fields, and math teachers are consistently among the harder-to-staff positions, which translates into stronger job prospects, signing bonuses in some districts, and faster pathways through shortage-area incentives in many states. BLS counted about 1,084,100 high school teachers in 2024 and projects about 1 percent decline in employment from 2024 to 2034, with about 67,400 annual openings driven almost entirely by retirement and turnover — the shortage is in replacements, not growth. The practical read: passing 5165 is the credential gate for the profession, and the pay story is about entering a stable, union-protected occupation with the demand-side leverage math teachers hold. The test itself is 80 questions over 2.5 hours, covering number and quantity, algebra, functions, calculus, geometry, statistics and probability, and discrete mathematics, with a passing score set by each state (commonly in the 150 to 170 range of the 100-200 scale). For candidates deciding whether to pursue math teaching, the test is the licensure barrier, and the occupation\u2019s demand dynamics make it one of the more employable teaching credentials.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 25-2031)' },
      { label: 'Lowest 10 percent', value: 'less than $48,180', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $102,000', note: 'BLS OOH, May 2024' },
      { label: 'Annual openings, 2024-34', value: '~67,400', note: 'BLS Employment Projections' },
      { label: 'The test itself', value: 'Licensure gate', note: 'Passing score set by each state' }
    ],
    growth: 'BLS projects about 1% employment change for high school teachers from 2024 to 2034, with ~67,400 annual openings, mostly from replacement.',
    source: { label: 'BLS OOH — High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS publishes no national pass rate for 5165 — passing scores are set by each state on the 100-200 scale, and ETS reports score information rather than cohort pass data',
    summary: 'The core fact is that ETS does not publish a national pass rate for Praxis 5165, because passing standards are set by each state and ETS reports scaled scores rather than cohort pass percentages. What is published is the test structure: 5165 contains 80 selected-response questions with 150 minutes allowed, scored on a 100-200 scale, with each state setting its passing score — for Mathematics: Content Knowledge, state passing scores commonly fall in the 150s to 160s range, though they vary and have changed over time (some states have used different cut scores at different periods). The test covers seven content categories: number and quantity, algebra, functions, calculus, geometry, probability and statistics, and discrete mathematics, weighted across the paper. Because ETS publishes score scales and state passing-score requirements (available through the Praxis State Requirements page), the practical preparation target is your specific state\u2019s passing score, not a national average. The honest advice is to look up your state\u2019s current required score on the ETS site before studying, aim comfortably above it, and use the ETS official practice tests, which mirror the real exam\u2019s content distribution. Note also that ETS reports that passing standards vary — a score that clears one state may not clear another — so candidates moving between states should re-check requirements. The 5165 exam can be retaken after a 21-day waiting period, per Praxis policy.',
    source: { label: 'ETS — Praxis Mathematics: Content Knowledge (5165)', url: 'https://www.ets.org/praxis/5165' },
    caveat: 'ETS publishes no national pass rate; each state sets its own passing score on the 100-200 scale.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 60 to 100 hours of study for Praxis 5165, weighted to the exam\u2019s content categories — algebra, functions, and geometry carry the largest shares — with official ETS practice tests as the calibration tool. The 80-question, 2.5-hour exam covers number and quantity, algebra, functions, calculus, geometry, statistics and probability, and discrete mathematics. The most effective sequence is: first, take the official ETS practice test to locate your weak categories; second, work the highest-weight areas — algebra and functions — until fluency; third, drill geometry and statistics, where many candidates lose points on application items; fourth, review calculus and discrete math to the level the test requires (foundational, not advanced); and fifth, take two more official practice tests under timed conditions in the final two weeks. Because the exam is multiple-choice and rewards fluent, accurate computation, the highest-yield habit is timed practice: 80 questions in 150 minutes is about 1.9 minutes per item, and candidates who rehearse the pace outperform those who study content alone. The common study error is over-investing in calculus, which is a smaller content share, and under-practising statistics and discrete math. Budget the final week for formula review and light practice rather than new content, and confirm your state\u2019s passing score so you know your target margin.',
    totalHours: '60-100 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Diagnostic + algebra/functions', tasks: ['Take an official practice test', 'Drill algebra and functions content', 'Log weak categories'], hours: 20 },
      { label: 'Weeks 3-6', focus: 'Full content coverage', tasks: ['Work geometry, statistics, and probability', 'Review calculus and discrete math', 'Take a second practice test'], hours: 40 },
      { label: 'Weeks 7-8', focus: 'Timed practice', tasks: ['Take official practice tests under timing', 'Re-study weak areas', 'Confirm state passing score'], hours: 20 },
      { label: 'Final week', focus: 'Taper', tasks: ['Formula review', 'Light practice', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'State-specific passing scores', detail: 'Passing standards for 5165 vary by state; check the ETS state-requirements page.' },
      { label: 'Alternative tests', detail: 'Some states accept other math licensure tests (e.g. Praxis 7003/7004 or state-specific exams).' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes Praxis 5165 is "calibrate with official practice tests, weight study to algebra and functions, and rehearse the 1.9-minute-per-question pace," and the single biggest error is studying content evenly and skipping timed practice. A second proven approach is using the ETS official practice tests as the anchor — they mirror the content distribution and difficulty, and score conversion lets you know your state-target margin. Third, build fluency in the highest-weight categories — algebra and functions — because the exam rewards speed and accuracy there, and candidates who are not fluent run out of time. Fourth, drill the application items in geometry and statistics, which are the categories where candidates lose the most points despite adequate content knowledge. Fifth, keep a formula sheet from the exam\u2019s first practice test and refine it as you study, since the final-week formula review is the highest-yield taper activity. Finally, look up your state\u2019s exact passing score before the exam and know your margin: if your practice scores are within 5 points of the passing line, extend the study plan rather than sitting early.',
    items: [
      { title: 'Anchor on official practice tests', detail: 'ETS practice tests mirror the content distribution and give score targets.' },
      { title: 'Weight algebra and functions', detail: 'The largest content shares reward fluent, accurate computation.' },
      { title: 'Rehearse the pacing', detail: '80 questions in 150 minutes — timed practice is non-negotiable.' },
      { title: 'Drill geometry and statistics applications', detail: 'The categories where adequate content still loses points.' },
      { title: 'Know your state\u2019s passing score', detail: 'Check the ETS state-requirements page and aim for a real margin.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5165 preparation is anchored by the ETS official practice tests (about $20 each) and the free ETS study companion, with commercial courses as optional structured support. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to spend on the official practice tests first, and treat commercial Q-banks as reinforcement for pacing work.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS 5165 Study Companion', values: ['Free', 'PDF with content outline', 'The authoritative content list'] },
      { label: 'ETS official practice test', values: ['~$20', 'Online practice exam', 'Score calibration and pacing'] },
      { label: 'ETS state passing-score page', values: ['Free', 'Online lookup', 'Your exact target score'] },
      { label: 'Commercial Praxis math prep (e.g. Mometrix, Praxis Math content)', values: ['~$30-60', 'Book or online course', 'Structured review'] },
      { label: 'Math review courses (Khan Academy)', values: ['Free', 'Video + practice', 'Rebuilding weak content areas'] }
    ],
    footnote: 'Prices approximate and dated to this review; retake policy allows re-testing after 21 days.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying content evenly and skipping timed practice, then running out of time on the 80-question paper; the second is over-investing in calculus and under-practising statistics and discrete math, which flips the exam\u2019s point distribution. A third recurring error is not checking the state-specific passing score and studying without a target margin. Candidates also routinely ignore the application items in geometry and statistics, losing points despite content knowledge, and many sit for the exam before their practice scores clear the passing line. Finally, some candidates rely on general math knowledge from teaching rather than the exam\u2019s specific format, and misjudge the pacing.',
    items: [
      { mistake: 'Skipping timed practice', fix: '80 questions in 150 minutes demands rehearsal; run timed papers.' },
      { mistake: 'Over-investing in calculus', fix: 'Weight algebra and functions first; calculus is a smaller share.' },
      { mistake: 'Ignoring the state cut score', fix: 'Check your state\u2019s passing score and aim for a real margin.' },
      { mistake: 'Missing application items', fix: 'Drill geometry and statistics application problems.' },
      { mistake: 'Sitting before practice passes', fix: 'Extend study until practice scores clear the passing line.' }
    ]
  },
  questionTypes: {
    summary: 'Praxis 5165 contains 80 selected-response questions over 150 minutes, covering seven content categories: number and quantity, algebra, functions, calculus, geometry, statistics and probability, and discrete mathematics. Item formats include direct computation, conceptual reasoning, and applied problems. The samples below are editor-written illustrations of the published content categories, not live exam items.',
    types: [
      { name: 'Algebra', share: '~25%', detail: 'Expressions, equations, inequalities, and functions in algebraic form.' },
      { name: 'Functions', share: '~20%', detail: 'Function properties, transformations, and applications.' },
      { name: 'Geometry', share: '~15%', detail: 'Plane and coordinate geometry, proofs, and measurement.' },
      { name: 'Statistics & probability', share: '~15%', detail: 'Data analysis, distributions, and probability.' },
      { name: 'Calculus', share: '~10%', detail: 'Limits, derivatives, and integrals at the foundational level.' },
      { name: 'Number & quantity / discrete math', share: '~15%', detail: 'Number systems, ratios, and discrete structures.' }
    ],
    samples: [
      {
        prompt: 'If f(x) = 2x\u00b2 \u2212 3x + 1, what is f(\u22121)?',
        options: ['A. 6', 'B. 0', 'C. 4', 'D. \u22126'],
        answer: 'A',
        explanation: 'f(\u22121) = 2(1) \u2212 3(\u22121) + 1 = 2 + 3 + 1 = 6.'
      },
      {
        prompt: 'A bag contains 4 red and 6 blue marbles. If one marble is drawn at random, what is the probability it is red?',
        options: ['A. 1/10', 'B. 2/5', 'C. 3/5', 'D. 2/3'],
        answer: 'B',
        explanation: 'The probability is 4 red marbles out of 10 total, or 4/10 = 2/5.'
      },
      {
        prompt: 'What is the slope of the line through (1, 3) and (4, 9)?',
        options: ['A. 2', 'B. 3', 'C. 1/2', 'D. \u22122'],
        answer: 'A',
        explanation: 'Slope = (9 \u2212 3)/(4 \u2212 1) = 6/3 = 2.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content categories, not live exam items.'
  },
  examDay: {
    summary: 'Praxis 5165 is taken on computer at a Pearson VUE testing center: 80 selected-response questions with 150 minutes, scored on the 100-200 scale, with your state\u2019s passing score determining the outcome. The core rules: bring valid photo ID and your admission ticket, arrive 30 minutes early, and follow testing-center rules; a basic on-screen calculator is available (5165 permits a graphing calculator in many versions — confirm the current calculator policy on the ETS site). Scores are typically available within a few weeks, and the passing standard is your state\u2019s cut score. The most useful exam-day habits: pace at about 1.9 minutes per question, flag and return to hard items rather than dwelling, and use the on-screen calculator for computational items. After the exam, results go to your state\u2019s educator-licensure office automatically if you selected it at registration; if you do not pass, the 21-day retake rule applies. The passing score is set by the state, so if you are close, review the ETS score report and target the weak categories for the retake.',
    bring: ['Valid photo ID', 'Admission ticket', 'Arrival 30 minutes early'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal calculators if the exam provides on-screen tools'],
    timeline: [
      { time: 'Before', detail: 'Confirm state passing score and exam center logistics.' },
      { time: 'Exam', detail: '80 questions in 150 minutes; pace ~1.9 min/question.' },
      { time: 'Results', detail: 'Scores in a few weeks; state receives them if selected.' },
      { time: 'Retake', detail: '21-day wait if needed; target weak categories from the score report.' }
    ],
    rules: ['80 questions, 150 minutes', '100-200 score scale', 'State-set passing score', '21-day retake wait'],
    afterwards: 'Passing at your state\u2019s cut score satisfies the mathematics licensure requirement for secondary math teachers; results flow to the state educator-licensure office.'
  }
};

export default data;
