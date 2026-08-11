const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5753 study companion structure and BLS OOH Elementary School Teachers (SOC 25-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$62,340 median for kindergarten and elementary school teachers (BLS, May 2024)',
    summary: 'The Praxis Communication and Literacy Skills (5753) is the combined reading-and-writing gate for teaching licensure in Massachusetts and some other states, and the wage question belongs to the occupation you enter with it: teaching. The closest official BLS occupation is Kindergarten and Elementary School Teachers, SOC 25-2021, which had a May 2024 median wage of $62,340, with the lowest 10 percent under $44,470 and the highest 10 percent above $103,540, with the secondary series (25-2031, $64,580) as the adjacent level. BLS counted 1,570,100 kindergarten and elementary teacher jobs in 2024 and projects a 1 percent decline from 2024 to 2034, with about 104,600 openings a year, almost all replacement demand. Read the median with the standard teacher-market caveats: pay is set by district salary schedules, varies enormously by state, and the exam itself carries no wage premium. The honest framing: the 5753 is a licensure gate, and the benchmark it unlocks is the teacher wage in your specific state and district, not a national figure that applies everywhere.',
    rows: [
      { label: 'Median annual wage, kindergarten and elementary teachers', value: '$62,340', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $44,470', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $103,540', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Median, high school teachers (adjacent level)', value: '$64,580', note: 'BLS OOH, SOC 25-2031, May 2024' }
    ],
    growth: 'BLS projects a 1 percent decline for kindergarten and elementary teachers from 2024 to 2034, about 104,600 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Kindergarten and Elementary School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and the state sets the passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis Communication and Literacy Skills (5753), and any single percentage you see online is a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5753 produces scaled scores, and the passing scores are set by the state education agency that requires it — most prominently Massachusetts, which uses the exam for educator licensure. The exam combines two subtests in one sitting: the reading subtest and the writing subtest, each with its own scaled score and passing line, and the candidate must pass both. The exam content follows the ETS content categories: reading comprehension, vocabulary and the critical-analysis skills for the reading subtest, and the grammar, usage and sentence-structure skills plus the written essays for the writing subtest. Because the state sets the passing scores, your target is the state\'s published lines for each subtest, which you should look up before you study. A candidate who is strong in reading but weak in writing must prepare both, because the pass requires both subtests.',
    source: { label: 'ETS - Praxis Communication and Literacy Skills (5753)', url: 'https://praxis.ets.org/test/5753.html' },
    caveat: 'ETS reports scaled scores per subtest and the state sets the passing lines; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The Praxis Communication and Literacy Skills (5753) is a computer-based exam with two subtests — reading and writing — each with its own passing line, so the plan must cover both. A defensible plan runs 30 to 50 hours over three to four weeks. Week one: the reading subtest — reading comprehension, vocabulary in context and the critical-analysis skills, using practice passages to build the reading speed and the analysis patterns the exam rewards. Week two: the writing subtest\'s multiple-choice component — grammar, usage, sentence structure and the revision skills, drilling the error-recognition items. Week three: the essays — the writing subtest includes constructed-response items, so practise writing the essays against the scoring criteria: clear structure, developed ideas and correct mechanics. Week four: two full timed practice exams covering both subtests, and targeted review of the weak areas. The plan is subtest-balanced because the pass requires both; candidates who are strong readers but weak writers must spend the extra time on the writing component.',
    totalHours: '30-50 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Reading subtest', tasks: ['Reading comprehension and vocabulary', 'Critical-analysis skills', 'Timed passage practice'], hours: 12 },
      { label: 'Week 2', focus: 'Writing multiple choice', tasks: ['Grammar, usage and sentence structure', 'Error-recognition and revision items', 'Usage drilling'], hours: 12 },
      { label: 'Week 3', focus: 'Essays', tasks: ['The essay structure the criteria reward', 'Timed essay writing practice', 'Grammar and mechanics review'], hours: 12 },
      { label: 'Week 4', focus: 'Full mocks', tasks: ['Two full timed practice exams', 'Review weak subtest areas', 'Schedule the exam'], hours: 12 }
    ],
    variants: [
      { label: 'Strong writer, weaker reader', detail: 'Balance the time toward the reading subtest; practise timed passages.' },
      { label: 'Strong reader, weaker writer', detail: 'Spend the extra time on grammar drilling and timed essays.' }
    ]
  },
  prepStrategies: {
    summary: 'The 5753 requires passing both subtests, so the dominant strategy is diagnosing your weak subtest first: take a practice exam early to see whether reading or writing is the risk, then allocate the study time accordingly, because the pass requires both lines. Second, practise the reading subtest with timed passages — the exam rewards reading speed and the critical-analysis patterns, and candidates who never time their reading meet the pace unprepared. Third, drill the writing multiple-choice component: grammar, usage and sentence structure are tested with error-recognition items, and targeted grammar review fixes the most common errors. Fourth, practise the essays against the scoring criteria: clear structure, developed ideas and correct mechanics, written under the time constraint. Finally, use the ETS Study Companion as the scope map and its sample questions for the item style, and target practice scores comfortably above your state\'s passing lines for both subtests.',
    items: [
      { title: 'Diagnose the weak subtest', detail: 'The pass requires both lines; allocate time to the risk.' },
      { title: 'Practise timed reading', detail: 'The reading subtest rewards speed and the analysis patterns.' },
      { title: 'Drill the grammar items', detail: 'Usage and sentence structure are tested with error recognition.' },
      { title: 'Practise essays against the criteria', detail: 'Structure, development and mechanics under the time limit.' },
      { title: 'Use the Study Companion', detail: 'The authoritative scope and the item-style reference.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5753 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion lists the content categories and provides sample items for both subtests. ETS also sells the official study product with additional practice questions (roughly $20-$50). Third-party communication-and-literacy study guides ($20-$50) and question banks ($20-$60) add volume. Free resources include the Study Companion and the state department-of-education pages with the passing scores. The exam fee is roughly $130-$156 (confirm at ets.org/praxis). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5753)', values: ['Free', 'Official PDF', 'The authoritative scope for both subtests'] },
      { label: 'ETS official study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'Communication and literacy guides', values: ['$20-$50', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$60', 'Online practice items', 'Subtest drilling volume'] },
      { label: 'State DOE pages', values: ['Free', 'Official state resources', 'Your state\'s passing lines'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5753 exam fee is roughly $130-$156; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 5753 mistake is studying only your strong subtest: candidates who are strong readers ignore the writing component and fail the pass-both requirement, because the exam requires passing both the reading and the writing lines. The fix is diagnosing the weak subtest early and allocating time to it. The second mistake is never timing the reading passages — the pace is part of the reading subtest\'s difficulty. Third, candidates treat the essays as optional and skip the timed writing practice, losing a real share of the writing score. Fourth, some candidates do not look up their state\'s passing lines and study toward a vague target; the state numbers for both subtests are what matter. Finally, candidates who prepare with only one subtest\'s materials meet the other cold.',
    items: [
      { mistake: 'Studying only the strong subtest', fix: 'The pass requires both lines; allocate time to the weak subtest.' },
      { mistake: 'Never timing the reading', fix: 'The reading subtest rewards speed; practise timed passages.' },
      { mistake: 'Skipping the essay practice', fix: 'The essays are a real share of the writing score; practise them.' },
      { mistake: 'Ignoring your state\'s passing lines', fix: 'Look up both subtest lines and target practice above them.' },
      { mistake: 'Preparing for one subtest', fix: 'Cover both subtests with their own materials.' }
    ]
  },
  questionTypes: {
    summary: 'The 5753 is a computer-based exam with two subtests. The reading subtest uses selected-response items testing comprehension, vocabulary and critical analysis of passages; the writing subtest combines selected-response items on grammar, usage and sentence structure with constructed-response essay items. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show both subtest formats.',
    types: [
      { name: 'Reading subtest items', share: 'One subtest', detail: 'Comprehension, vocabulary and critical-analysis questions.' },
      { name: 'Writing selected-response items', share: 'One subtest', detail: 'Grammar, usage and sentence-structure questions.' },
      { name: 'Writing essays', share: 'Constructed-response component', detail: 'Timed essays scored against the criteria.' }
    ],
    samples: [
      {
        prompt: 'In the sentence "The committee, which meets monthly, reviews the budget", the clause "which meets monthly" is:',
        options: ['A. A non-restrictive relative clause', 'B. A restrictive clause', 'C. An independent clause', 'D. A prepositional phrase'],
        answer: 'A',
        explanation: '"Which meets monthly" is a non-restrictive relative clause — it adds information without limiting the noun, and it is set off by commas. Restrictive clauses are not comma-set-off, independent clauses stand alone, and prepositional phrases begin with prepositions.'
      },
      {
        prompt: 'A passage states that a study "correlates exercise with improved sleep" and later claims it "proves exercise improves sleep". This shift is best described as:',
        options: ['A. Overstating correlation as causation', 'B. An appropriate conclusion', 'C. A vocabulary error', 'D. A punctuation issue'],
        answer: 'A',
        explanation: 'Moving from "correlates" to "proves" overstates correlation as causation — the critical-analysis pattern the reading subtest rewards identifying. The other options misdescribe the reasoning error.'
      },
      {
        prompt: 'Choose the sentence with correct usage:',
        options: ['A. The report is due tomorrow, and it must include the data.', 'B. The report is due tomorrow and, it must include the data.', 'C. The report is due tomorrow, it must include the data.', 'D. The report is due tomorrow and it must, include the data.'],
        answer: 'A',
        explanation: 'Option A correctly joins two independent clauses with a comma and the conjunction "and". The other options misplace the comma or create a comma splice.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Communication and Literacy Skills (5753) is a computer-based exam at a Pearson VUE centre or through online proctoring, with two subtests in one sitting. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. Budget the time across both subtests, with the essays planned early in the writing section so they are not rushed. Your scaled scores appear on screen immediately, with the official score report following. If you do not pass a subtest, the retake wait is 21 days, and you retake the failed subtest. On a pass of both, the scores are valid for 10 years subject to your state\'s acceptance window. The afterwards matters: forward the scores to your state\'s licensure system, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Reading subtest', detail: 'Work the passage items; flag and review.' },
      { time: 'Writing subtest', detail: 'Complete the selected-response items, then the essays with time to spare.' },
      { time: 'After submit', detail: 'Scaled scores appear on screen; the official report follows.' },
      { time: 'Next', detail: 'Send the scores to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'Two subtests in one sitting; each has its own passing line',
      'Retakes require a 21-day wait for the failed subtest'
    ],
    afterwards: 'On passing both, your scores are valid 10 years subject to your state\'s window; report them to your state education agency. On a fail, wait 21 days and retake the failed subtest.'
  }
};

export default data;
