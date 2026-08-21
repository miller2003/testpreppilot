const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'The Praxis Economics exam structure is drawn from the ETS Praxis official test information for test code 5911, which is updated on a published revision cycle; ETS does not publish pass rates, and each state sets its own passing score, which we state plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the ETS Praxis test information for Economics (5911) and the BLS OOH High School Teachers page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'High school teachers earned a May 2024 BLS median of $64,580, and the Praxis Economics score is the licensure gate for high school economics teaching roles.',
    summary: 'The salary answer for the Praxis Economics exam is a teacher-licensure story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $64,580 for SOC 25-2031 High School Teachers, with the lowest 10 percent earning below $48,250 and the highest 10 percent above $108,150, and the Praxis score itself does not appear in wage data because the BLS classifies by job duty, not by certification. The exam is the licensure gate for high school economics teaching roles in the states that use the Praxis series: candidates must pass the state-set passing score — each state publishes its own cut score on the ETS portal, and the exact number varies by state and year — before they can hold an economics teaching position in a public school, and in many states economics is taught as part of a social-studies assignment, so some candidates take additional social-studies exams for the license. Teacher pay varies substantially by state and district, with the BLS noting that the highest-paying states for secondary teachers sit well above the national median, and economics teachers follow the same schedule-based compensation system as other secondary teachers, with pay rising with years of service and advanced degrees. The BLS projects about 1 percent decline in high-school-teacher employment from 2024 to 2034, but roughly 60,000 openings per year from replacement demand, so the job market for licensed economics teachers is steady rather than booming, and the license — not the subject — is the employment gate. Two caveats anchor the picture: first, the Praxis score is a state-licensure requirement, not an employment credential, so its value is realized through the license; second, economics is a required course in most states now, which supports demand, but the position is often bundled into a social-studies department assignment. For a candidate asking whether Praxis Economics pays, the direct answer is that it pays through the teaching license it enables, and the earnings follow the state salary schedule rather than the score itself.',
    rows: [
      { label: 'Median annual wage', value: '$64,580', note: 'BLS OOH, High School Teachers (SOC 25-2031), May 2024' },
      { label: 'Lowest 10%', value: '$48,250', note: 'Entry-level and low-paying states' },
      { label: 'Highest 10%', value: '$108,150', note: 'Senior teachers in high-paying states' },
      { label: 'Job openings', value: '~60,000/year', note: 'Mostly replacement demand (BLS 2024-2034)' }
    ],
    growth: 'BLS projects about 1 percent change in high-school-teacher employment (2024-2034) with roughly 60,000 openings per year, driven by replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish Praxis pass rates — each state sets its own passing score for Economics (5911), so "passing" varies by licensure state.',
    summary: 'The direct answer on pass rates is that ETS does not publish cohort pass-rate statistics for Praxis exams, including Economics (5911), so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the reporting structure: each state that uses the Praxis series sets its own passing score on the ETS scaled-score scale, and the passing mark for Economics varies by state and is published on each state\u2019s teacher-licensure page and on the ETS state requirements tool — so the same score can clear one state\u2019s requirement and fall short at another, and the candidate\u2019s target is the licensure state\u2019s cut, not a national number. The exam itself, under the current ETS test information for 5911, is a computer-based test of 110 selected-response questions, with the ETS test page listing the session as 2 hours 30 minutes, delivered at Pearson VUE centers, with content spanning three major categories — fundamental economic concepts, microeconomics, and macroeconomics — and calculators are not allowed, with the content based largely on the Voluntary National Standards in Economics developed by the Council for Economic Education — the exact specification should be confirmed on the current ETS page, because ETS revises test specifications on a published cycle. The practical read on difficulty: the exam rewards both economic content knowledge and the graph-and-model interpretation the items require, and candidates who study the ETS test-at-a-glance and the official study companion, then drill a current question bank, reliably clear the state-set passing mark, while candidates who sit cold underperform on the macroeconomic-model and graph items. Because the passing mark is state-set, the smart approach is to confirm the target state\u2019s cut score first, study to that target, and retake after the ETS-mandated waiting period if the first attempt falls short.',
    source: { label: 'ETS Praxis test information for Economics (5911)', url: 'https://praxis.ets.org/test/5911' },
    caveat: 'ETS publishes no pass rates for Praxis exams; the passing score for Economics (5911) is set by each state and varies, so confirm the target state\u2019s cut score on the ETS state requirements tool.'
  },
  studyPlan: {
    summary: 'An efficient Praxis Economics study plan is 40-60 hours over 4-6 weeks, because the exam is a content-breadth test and the fastest score gains come from covering the three content categories in the ETS test-at-a-glance — fundamental economic concepts, microeconomics, and macroeconomics — while drilling the graph-and-model interpretation skills the items reward. The ETS official materials are the scope map: the test-at-a-glance for 5911 lists the content categories and their approximate weights, and studying the categories in proportion to their weight is the highest-yield planning decision, with microeconomics and macroeconomics receiving the largest share and the fundamental-concepts category receiving a deliberate pass. The study window should split into content coverage (weeks 1-3) and question-bank and graph drilling (weeks 4-5), followed by a full practice test (week 6): the graph and model items reward hands-on practice with supply-demand diagrams, production possibilities curves, and the macroeconomic models, and candidates who drill the formats against a current bank score higher than candidates who only read economics texts. Candidates with a strong economics or social-studies background should budget the lower end; candidates refreshing after years away from the subject should budget the upper end and add graph practice. The final week should include at least one full timed practice test at the real format, because the pacing and the question mix are the two things candidates underestimate, and the state-set passing mark is best targeted when practice scores clear it with margin.',
    totalHours: '40-60 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Microeconomics and fundamental concepts', tasks: ['Study supply and demand, elasticity, and market structures', 'Cover costs, production, and the behavior of firms and consumers', 'Review fundamental concepts: scarcity, opportunity cost, and economic systems'], hours: 16 },
      { label: 'Week 3', focus: 'Macroeconomics', tasks: ['Study GDP, inflation, and unemployment measurement', 'Cover monetary and fiscal policy and the aggregate models', 'Review international trade and the global economy'], hours: 12 },
      { label: 'Week 4-5', focus: 'Question-bank and graph drilling', tasks: ['Drill 300-500 items from a current Praxis Economics bank', 'Practice graph and model interpretation items', 'Log every miss and re-read the associated content category'], hours: 16 },
      { label: 'Week 6', focus: 'Full test and readiness', tasks: ['Take a full timed practice test scoring above the target cut', 'Re-drill the miss log until clean', 'Confirm the Pearson VUE booking and the target state\u2019s passing score'], hours: 8 }
    ],
    variants: [
      { label: 'Strong economics background', detail: 'Budget the lower end and weight time toward the question formats and graph-skills drilling.' },
      { label: 'Returning candidates', detail: 'Budget the upper end and add graph and model review to refresh the interpretation skills.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for Praxis Economics is studying the ETS content categories in weight order and drilling a current question bank with a miss log, because the exam rewards applied graph-and-model interpretation as much as content knowledge, and the state-set passing mark is best targeted with proportional coverage. First, confirm the target licensure state\u2019s passing score on the ETS state requirements tool, because the cut varies by state and the study target should be that number with margin. Second, use the official ETS materials — the test-at-a-glance, the study companion, and the ETS practice test — because they define the content categories and item style precisely, and the official practice test is the most reliable readiness check. Third, study the content categories in weight order, with microeconomics and macroeconomics receiving the largest share, and the fundamental-concepts items receiving a deliberate pass because they underpin the rest of the exam. Fourth, drill a current question bank, 300-500 items with explanations, and build a miss log tied to the content categories; the bank rehearsal converts the reading into recall. Fifth, practice the graph and model interpretation deliberately — supply-demand diagrams, production possibilities curves, and the aggregate macroeconomic models — because the exam rewards the ability to read and interpret economic graphs, and calculators are not allowed, so the arithmetic is simple by design. Finally, schedule the exam when practice scores clear the state cut with margin, and protect the ETS retake waiting period by not burning the first attempt unprepared. A further high-yield tactic is to build a one-page model sheet during study — the key diagrams and their shifts, labeled — because the graph items reward the consolidated reference, and the sheet becomes the final review tool.',
    items: [
      { title: 'Confirm the state cut score first', detail: 'Each state sets its own passing score; target that number with margin.' },
      { title: 'Use the official ETS materials', detail: 'The test-at-a-glance and study companion define the content categories and item style.' },
      { title: 'Study the categories in weight order', detail: 'Micro and macro carry the exam; fundamental concepts underpin the rest.' },
      { title: 'Drill a current bank with a miss log', detail: '300-500 items with explanations, tied to the content categories.' },
      { title: 'Practice graph and model interpretation', detail: 'Supply-demand, PPC, and aggregate models are format-specific and coachable.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis Economics prep resources split into the ETS official set, review books, and question banks, and the buying logic is anchored by the official materials because ETS publishes the test-at-a-glance, the study companion, and an official practice test that define the content and the item style precisely. The official ETS set — free to roughly $30-50 for the practice test — is the foundation of every plan and the most reliable readiness check. Review books for Praxis economics, roughly $25-40, add structured content coverage, which helps candidates refreshing the micro and macro content; the well-regarded options track the current test code and content categories. Question banks from reputable providers, roughly $30-60, add volume and explanations, which helps candidates who need more reps than the official practice test provides; the banks that reference the current 5911 test code are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is $130 for Economics (ETS sets the fee), with the exact amount on the ETS registration page. A cheap readiness check is the free test-at-a-glance and the sample questions before buying anything, because candidates with a strong economics background often need only the official practice test and a bank, not a full review course. Candidates should also confirm the retake policy and waiting period, because ETS sets the retake rules and the licensure timeline depends on them.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS official materials + practice test', values: ['Free to ~$50', 'Official documents + practice test', 'The authoritative scope and readiness check'], note: '' },
      { label: 'Praxis economics review book', values: ['$25-40', 'Book with content coverage', 'Candidates refreshing micro and macro'], note: '' },
      { label: 'Question bank', values: ['$30-60', 'Online, current items', 'Extra reps beyond the official set'], note: '' },
      { label: 'Praxis registration', values: ['$130', 'ETS/Pearson VUE', 'The real test'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The Praxis fee for Economics is $130 (confirm on the ETS page).'
  },
  commonMistakes: {
    summary: 'The most common mistake on Praxis Economics is studying the content without the graph and model interpretation skills the exam rewards, because the applied items are format-specific and candidates who only read economics texts lose points on the diagram questions; the second is treating the exam like a national-standard test, when the passing score is set by each state and the real target is the licensure state\u2019s cut. A third recurring error is skipping the official practice test and sitting cold, when the official readiness check is the cheapest way to target the study plan. Candidates also routinely mis-pace the 110-question session, spending too long on the fundamental-concept items and rushing the macro-model items. Another pattern is using an outdated review source that references an older test code or content outline, when ETS revises specifications on a published cycle. Finally, some candidates retake too quickly after a failed attempt, forgetting the ETS-mandated waiting period and re-sitting without the targeted re-study the miss log should have guided.',
    items: [
      { mistake: 'Skipping graph and model practice', fix: 'Drill the diagram items; supply-demand, PPC, and aggregate models are coachable.' },
      { mistake: 'Aiming at a national standard', fix: 'Confirm the licensure state\u2019s cut score and study to that target with margin.' },
      { mistake: 'Skipping the official practice test', fix: 'Take the ETS practice test first; it is the most reliable readiness check.' },
      { mistake: 'Using outdated materials', fix: 'Verify that any review source references the current 5911 test code and content outline.' },
      { mistake: 'Retaking without targeted study', fix: 'Use the miss log to re-study weak categories before the next attempt within the ETS waiting rules.' }
    ]
  },
  questionTypes: {
    summary: 'The Praxis Economics exam (5911) is a computer-based multiple-choice test of 110 selected-response questions, with the ETS test page listing the session as 2 hours 30 minutes, delivered at Pearson VUE centers, with content spanning three major categories — fundamental economic concepts, microeconomics, and macroeconomics — and calculators are not allowed, with the content based largely on the CEE Voluntary National Standards in Economics. The item style is single-best-answer with four choices per question, and the mix spans knowledge-recall items, applied items, and graph-and-model interpretation items. The samples below illustrate three of the content areas — a fundamental-concepts item, a microeconomics item, and a macroeconomics item. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'Fundamental concepts items', share: 'Core category', detail: 'Scarcity, opportunity cost, and economic systems.' },
      { name: 'Microeconomics items', share: 'Core category', detail: 'Supply and demand, elasticity, and market structures.' },
      { name: 'Macroeconomics items', share: 'Core category', detail: 'GDP, inflation, unemployment, and policy models.' }
    ],
    samples: [
      {
        prompt: 'A student must choose between studying for a test and working a shift at a part-time job. The value of the best forgone alternative — the shift wages given up — is best described as the:',
        options: [
          'A. Opportunity cost',
          'B. Sunk cost',
          'C. Marginal cost',
          'D. Fixed cost'
        ],
        answer: 'A',
        explanation: 'Opportunity cost is the value of the best alternative forgone when a choice is made. The lost shift wages are the forgone alternative. Sunk costs are already incurred, marginal cost is the cost of one more unit, and fixed costs do not vary with output.'
      },
      {
        prompt: 'A drought sharply reduces the supply of wheat. Holding demand constant, the most likely market outcome is:',
        options: [
          'A. A higher equilibrium price and a lower equilibrium quantity',
          'B. A lower equilibrium price and a higher equilibrium quantity',
          'C. An unchanged equilibrium price with a higher quantity',
          'D. A lower equilibrium price and a lower equilibrium quantity'
        ],
        answer: 'A',
        explanation: 'A leftward shift of supply, with demand unchanged, raises the equilibrium price and reduces the equilibrium quantity. The other combinations describe demand shifts or impossible outcomes.'
      },
      {
        prompt: 'To reduce unemployment during a recession, the federal government increases spending on infrastructure. This action is best classified as:',
        options: [
          'A. Expansionary fiscal policy',
          'B. Contractionary monetary policy',
          'C. Expansionary monetary policy',
          'D. Supply-side tax indexing'
        ],
        answer: 'A',
        explanation: 'Increased government spending is a fiscal policy tool; spending increases during a recession are expansionary fiscal policy. Monetary policy is set by the central bank, and tax indexing is not a recession-fighting spending measure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Economics exam is a computer-based test delivered at Pearson VUE centers, and the direct exam-day answer is that you will sit 110 multiple-choice questions in a session the ETS test page lists as 2 hours 30 minutes (confirm the current specification on the ETS page), with a scaled score reported to the licensure state and the result shown as pass/fail based on the state-set passing score. Arrive with the required government-issued photo ID and your ETS admission ticket, and follow the Pearson VUE check-in rules, because the center enforces strict identification procedures. The appointment begins with a tutorial on the testing software, then the exam clock starts; there are no scheduled breaks, so the timed-practice discipline matters. All items are single-best-answer with four choices, calculators are not allowed, and the software supports flagging items for review — use the flag feature rather than leaving items blank. Expect a quiet, proctored environment with a visible countdown clock; pace at roughly 60-70 seconds per question to leave review margin. A preliminary pass/fail result appears at the end of the appointment, with the official score report following in the ETS account within a short window, and the score is reported to the licensure state per the registration selection. If the score falls short of the state\u2019s cut, the exam can be retaken after the ETS-mandated waiting period, so confirm the retake rules and re-study the miss log before the next attempt. Afterwards, the passing score supports the state teaching license application, and the teacher-licensure process continues with the state\u2019s other requirements, which in many states pair the economics exam with a social-studies licensure test.',
    bring: ['Government-issued photo ID', 'ETS admission ticket and Pearson VUE booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the test (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Calculators (not allowed on the test)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present ID and admission ticket, and check in' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '2 hr 30 min session', detail: 'Work the 110 multiple-choice items; flag for review and pace' },
      { time: 'After the test', detail: 'Preliminary pass/fail on screen; official report in the ETS account' }
    ],
    rules: ['Valid photo ID and ETS admission ticket required', 'No scheduled breaks; the exam clock runs continuously', 'No calculators allowed', 'Answer every item; flagging for review is supported'],
    afterwards: 'A passing score supports the state teaching license. Confirm the licensure state\u2019s other requirements — often including a social-studies licensure test — and retake after the ETS waiting period with targeted miss-log study if the score falls short of the cut.'
  }
};

export default data;
