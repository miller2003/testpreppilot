const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5038 study companion structure and BLS OOH High School Teachers (SOC 25-2031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$64,580 median for high school teachers (BLS, May 2024)',
    summary: 'The Praxis English Language Arts: Content Knowledge (5038) is the English-subject licensure gate for secondary teachers in many states, and the wage question belongs to the occupation you enter with it: teaching. The closest official BLS occupation is High School Teachers, SOC 25-2031, which had a May 2024 median wage of $64,580, with the lowest 10 percent under $47,460 and the highest 10 percent above $107,520. BLS counted 1,084,100 high school teacher jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 65,300 openings a year, almost all replacement demand. Read the median with the standard teacher-market caveats: pay is set by district salary schedules, varies enormously by state, and the exam itself carries no wage premium. The honest framing: the 5038 is a subject-content licensure gate, and the benchmark it unlocks is the English-teacher wage in your specific state and district, not a national figure that applies everywhere.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $47,460', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $107,520', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Projected openings per year', value: '~65,300', note: 'BLS OOH, SOC 25-2031, 2024-2034' }
    ],
    growth: 'BLS projects 1 percent growth for high school teachers from 2024 to 2034, about 65,300 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and each state sets its own passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis English Language Arts: Content Knowledge (5038), and any single percentage you see online is a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5038 produces a scaled score, and the passing score is set by each state education agency — the same exam has different pass lines in different states, which is exactly why no national pass rate exists. Your target is your state\'s published passing score, which you should look up before you study. The exam itself is a computer-based test of selected-response questions built on the content categories: reading (literary analysis of prose, poetry and drama); language use and vocabulary (grammar, usage and word knowledge); writing (the writing process, modes and the research skills); and the teaching and assessment of English language arts. Because state cut scores typically sit in the low-to-mid 160s scaled range for this exam, a candidate who covers all the content categories clears the line in most states — but verify your state\'s number, because the margin changes with it.',
    source: { label: 'ETS - Praxis English Language Arts: Content Knowledge (5038)', url: 'https://praxis.ets.org/test/5038.html' },
    caveat: 'ETS reports scaled scores and each state sets its own passing score; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The Praxis English Language Arts: Content Knowledge (5038) is a computer-based exam of selected-response questions built on the ETS content categories: reading (literary analysis), language use and vocabulary, writing, and the teaching and assessment of ELA. A defensible plan runs 40 to 60 hours over three to four weeks. Week one: the reading category — the literary analysis of prose, poetry and drama, the literary terms and the major works and authors, because the exam tests both analysis and literary knowledge. Week two: language use and vocabulary — grammar, usage, the sentence structure and the vocabulary-in-context items, drilling the error-recognition patterns. Week three: writing and the teaching category — the writing process, the modes of writing and the research skills, plus the teaching-and-assessment content. Week four: two timed practice exams and targeted review of the weak categories. The plan is category-balanced because the exam draws from all four areas; candidates who study only the literature they enjoy miss the language and writing items.',
    totalHours: '40-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Reading and literature', tasks: ['Literary analysis of prose, poetry and drama', 'Literary terms and devices', 'Major works and authors'], hours: 14 },
      { label: 'Week 2', focus: 'Language use and vocabulary', tasks: ['Grammar, usage and sentence structure', 'Vocabulary in context', 'Error-recognition drilling'], hours: 14 },
      { label: 'Week 3', focus: 'Writing and teaching', tasks: ['The writing process and modes', 'Research skills', 'Teaching and assessment of ELA'], hours: 12 },
      { label: 'Week 4', focus: 'Practice and review', tasks: ['Two timed practice exams', 'Review weak categories', 'Schedule the exam'], hours: 12 }
    ],
    variants: [
      { label: 'English teacher in practice', detail: 'The literature content is familiar; focus study on the language-use and teaching categories and the exam format.' },
      { label: 'Recent English degree', detail: 'The content knowledge is fresh; focus study on the exam style and the teaching category.' }
    ]
  },
  prepStrategies: {
    summary: 'The 5038 rewards broad English-content knowledge, so the dominant strategy is category-balanced coverage: the exam draws from reading, language use, writing and the teaching category, and candidates who study only the literature they enjoy miss the language and writing items. Second, master the literary-analysis skills — the terms, the devices and the analysis of prose, poetry and drama — because the reading category is the largest. Third, drill the language-use material: grammar, usage and the vocabulary-in-context items are a distinct category with precise patterns. Fourth, cover the writing and the teaching-and-assessment content deliberately, a category that literature-focused candidates often under-prepare. Finally, use the ETS Study Companion as the scope map and its sample questions for the item style, and look up your state\'s passing score early so practice targets sit above it.',
    items: [
      { title: 'Balance the four categories', detail: 'Literature-only study misses the language and writing items.' },
      { title: 'Master literary analysis', detail: 'Terms, devices and the analysis of the genres are the largest category.' },
      { title: 'Drill the language-use items', detail: 'Grammar, usage and vocabulary are a distinct precise category.' },
      { title: 'Cover writing and teaching', detail: 'A category literature-focused candidates under-prepare.' },
      { title: 'Target your state\'s cut score', detail: 'Look up your state\'s passing line and aim practice above it.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5038 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion lists the content categories and provides sample questions. ETS also sells the official study product (roughly $20-$50). Third-party ELA content guides ($20-$60) and question banks ($20-$80) add volume; an English-literature reference can supplement the literary content. Free resources include the Study Companion and the state department-of-education pages. The exam fee is roughly $130-$156 (confirm at ets.org/praxis). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5038)', values: ['Free', 'Official PDF', 'The authoritative scope and sample items'] },
      { label: 'ETS official study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'ELA content guides', values: ['$20-$60', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$80', 'Online practice items', 'Selected-response volume'] },
      { label: 'State DOE requirement pages', values: ['Free', 'Official state resources', 'Your state\'s passing score and rules'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5038 exam fee is roughly $130-$156; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 5038 mistake is studying only the literature: candidates with an English background focus on the literary content they enjoy and miss the language-use and writing items, which are distinct categories. The fix is category-balanced coverage. The second mistake is treating the language-use material as easy and skipping the grammar drilling; the error-recognition items are precise and cost points. Third, candidates under-prepare the teaching-and-assessment category, treating it as secondary when it is tested. Fourth, some candidates never take a timed practice exam and misjudge the format. Finally, candidates who do not look up their state\'s passing score study toward a vague target; the state cut line is the number that matters.',
    items: [
      { mistake: 'Studying literature only', fix: 'Cover all four categories; language and writing are distinct.' },
      { mistake: 'Skipping the grammar drilling', fix: 'The language-use items are precise; drill the patterns.' },
      { mistake: 'Under-preparing the teaching category', fix: 'A tested category; cover the teaching and assessment content.' },
      { mistake: 'Never timing a practice exam', fix: 'Run two timed practice exams before the real one.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Find your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The 5038 is a computer-based exam of selected-response questions built on the content categories: reading (literary analysis), language use and vocabulary, writing, and the teaching and assessment of ELA. The items test literary terms and analysis, grammar and usage, vocabulary in context, and the writing and teaching concepts. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show the English-content style of the real items.',
    types: [
      { name: 'Literary-analysis items', share: 'Largest category', detail: 'Prose, poetry and drama analysis with the literary terms.' },
      { name: 'Language-use items', share: 'Large category', detail: 'Grammar, usage and vocabulary in context.' },
      { name: 'Writing and teaching items', share: 'Meaningful category', detail: 'The writing process and the teaching of ELA.' }
    ],
    samples: [
      {
        prompt: 'Which literary device is used in the phrase "the wind whispered through the trees"?',
        options: ['A. Personification', 'B. Simile', 'C. Alliteration', 'D. Hyperbole'],
        answer: 'A',
        explanation: 'Personification gives human qualities (whispering) to a non-human thing (the wind). A simile uses "like" or "as", alliteration repeats initial consonant sounds, and hyperbole is deliberate exaggeration.'
      },
      {
        prompt: 'Choose the sentence with correct usage:',
        options: ['A. The teacher gave the assignment to Sarah and me.', 'B. The teacher gave the assignment to Sarah and I.', 'C. The teacher gave the assignment to me and Sarah.', 'D. The teacher gave the assignment to myself.'],
        answer: 'A',
        explanation: '"Me" is the objective-case pronoun for the object of the preposition "to" — "to Sarah and me". "I" is the subjective case, and "myself" is reflexive, both incorrect here.'
      },
      {
        prompt: 'In a research-based argument essay, the purpose of citing sources is primarily to:',
        options: ['A. Support claims with evidence and acknowledge the sources', 'B. Lengthen the essay', 'C. Impress the reader with quantity', 'D. Replace the writer\'s analysis'],
        answer: 'A',
        explanation: 'Citations support claims with evidence and acknowledge sources — the purpose of research-based writing. Length, quantity or replacing the writer\'s own analysis each misstate the citation\'s role.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis English Language Arts: Content Knowledge (5038) is a computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. Pace yourself across the selected-response items, flag uncertain items for review, and finish with time to spare. Your scaled score appears on screen immediately, with the official score report following. If you do not pass, the retake wait is 21 days. On a pass, the score is valid for 10 years subject to your state\'s acceptance window. The afterwards matters: forward your score to your state\'s licensure system through the ETS score-reporting tools, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: 'Work the selected-response items; flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; the official report follows.' },
      { time: 'Next', detail: 'Send the score to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'Computer-based selected-response exam',
      'Retakes require a 21-day wait'
    ],
    afterwards: 'On a pass, your score is valid 10 years subject to your state\'s window; report it to your state education agency. On a fail, wait 21 days and retake after additional category study.'
  }
};

export default data;
