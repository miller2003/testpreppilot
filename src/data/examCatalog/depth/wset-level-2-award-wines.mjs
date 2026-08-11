const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Wine & hospitality education desk',
    bio: 'WSET Level 2 structure and pricing come from the Wine & Spirit Education Trust official pages and are revised with each syllabus update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the WSET Level 2 Award structure, exam format, and pass standard against WSET official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No dedicated occupation — Level 2 is the wine-role credential employers actually recognise, and the roles it feeds (sommelier-track and beverage staff) sit inside food service management at $65,310 median (BLS, May 2024) and higher in fine dining',
    summary: 'The direct answer is that WSET Level 2 has no BLS occupation of its own — it is the industry-recognised wine qualification for hospitality and retail professionals, not a licence — and the roles it supports are classified by BLS within food service management (SOC 35-3031, May 2024 median $65,310) and serving occupations (bartenders, SOC 35-3011, median $29,820). The honest salary story is that Level 2 is where the credential starts to move employment outcomes: while Level 1 is a one-day awareness course, Level 2 is the qualification many restaurants, wine bars, retailers, and distributors list as a hiring or promotion condition for roles that touch wine, and it is the standard entry credential on the sommelier and beverage-management track. Because BLS has no separate sommelier code, the income effect shows up in the fine-dining and management tiers within the food service categories — wine directors and beverage managers in upscale venues earn well above the occupation medians, though no government series isolates them. BLS projects about 5 percent growth for food service managers from 2024 to 2034. The practical read: invest in Level 2 if you are working in or entering a wine-touching role — it typically costs $300 to $500 including the exam, spans about 18 hours of study plus a closed-book exam, and signals a level of wine competence that differentiates you from the general hospitality pool. The progression that compounds the value runs Level 2 to Level 3 (the level at which many sommelier roles and wine-buying positions list the qualification) and then to Level 4 Diploma for serious wine-careerists. For a candidate deciding between the levels, Level 2 is the point where the credential transitions from "took a course" to "holds the recognised qualification."',
    rows: [
      { label: 'Median annual wage, food service managers', value: '$65,310', note: 'BLS OOH, May 2024 (SOC 35-3031)' },
      { label: 'Median annual wage, bartenders', value: '$29,820', note: 'BLS OOH, May 2024 (SOC 35-3011)' },
      { label: 'Projected growth, food service managers, 2024-34', value: '+5%', note: 'BLS Employment Projections' },
      { label: 'The qualification itself', value: 'No direct occupation', note: 'Industry-recognised wine qualification, not a licence' }
    ],
    growth: 'BLS projects about 5% growth for food service managers from 2024 to 2034; sommelier-track roles sit within these occupation categories.',
    source: { label: 'BLS OOH — Food Service Managers', url: 'https://www.bls.gov/ooh/management/food-service-managers.htm' }
  },
  passRate: {
    headline: 'WSET publishes no pass rate — the Level 2 exam is 50 closed-book multiple-choice questions with a 55% pass mark, and the provider-reported reality is a high pass rate for candidates who complete the study materials',
    summary: 'The core fact is that WSET does not publish pass rates for Level 2, and no independent national figure exists, so treat online percentages as anecdotal. What is published is the exam structure: the Level 2 Award in Wines exam is a closed-book paper of 50 multiple-choice questions, with a 55 percent pass mark (28 of 50 correct), about 1 hour allowed, and no practical or written component. The course is typically delivered over two days or as structured self-study plus a study day, covering the main grape varieties and styles, the wines of key regions, factors influencing wine production and quality, sparkling and fortified wines, and food and wine pairing. Because the exam is drawn directly from the official study guide and the pass line is just over half the questions, the realistic pass rate is high among candidates who complete the study materials; the classic failure mode is underestimating the closed-book requirement after the open-book familiarity of Level 1, and freezing on the production-factors questions that require memorised detail. Results come back in a few weeks and are reported as pass, merit, or distinction. The preparation implication is clear: work through the official study guide systematically, since the 50 questions sample the whole syllabus, and practise with sample questions from your provider to confirm you can hold the 55 percent line under closed-book conditions. The step up from Level 1 is real — Level 2 expects recall of region, grape, and style facts, not just recognition — so budget the study hours rather than assuming the one-day Level 1 habit carries over.',
    source: { label: 'WSET — Level 2 Award in Wines', url: 'https://www.wsetglobal.com/' },
    caveat: 'No official pass rate is published; the exam requires 55% (28/50) to pass.'
  },
  studyPlan: {
    summary: 'Plan for roughly 18 to 25 hours of study across three to four weeks, plus the course delivery itself (typically two classroom days or structured self-study), and expect the closed-book 50-question exam to reward systematic syllabus coverage rather than cramming. The Level 2 syllabus covers: the principal grape varieties and their styles; the wines of key regions across France, Italy, Spain, Germany, the New World, and beyond; factors affecting wine production and quality (climate, soil, viticulture, winemaking choices); sparkling wines and Champagne; fortified wines; and food and wine pairing principles. The most effective study sequence is: first, read the official study guide cover to cover, highlighting the region-grape-style facts; second, build a one-page reference for each key region (grape, style, climate influence); third, drill the production-factors section, which is the most detail-heavy and where closed-book candidates lose the most points; fourth, run provider sample papers under timed conditions to confirm the 55 percent line. Because the exam is closed-book, spaced review beats a single pass: schedule two full review sessions in the final week, one for the region-grape mapping and one for sparkling, fortified, and pairing content. The most common study error is over-weighting famous regions and under-studying the less glamorous syllabus sections — sparkling and fortified wines are a dependable share of the paper. Budget the exam day as a quiet, uninterrupted sitting: 50 questions in an hour is manageable if you have done the syllabus work, and the pass line of 28 correct gives you meaningful margin for honest uncertainty.',
    totalHours: '18-25 study hours + course delivery',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Syllabus coverage', tasks: ['Read the official study guide cover to cover', 'Build region-grape-style one-pagers', 'Study production factors and winemaking'], hours: 10 },
      { label: 'Week 3', focus: 'Drilling', tasks: ['Drill sparkling, fortified, and pairing content', 'Run provider sample questions', 'Review weak regions'], hours: 8 },
      { label: 'Final days', focus: 'Timed practice + exam', tasks: ['Take a timed sample paper', 'Review the missed items', 'Sit the closed-book exam'], hours: 5 }
    ],
    variants: [
      { label: 'Level 2 in Spirits / Beer', detail: 'Sister qualifications with the same 50-question closed-book format focused on spirits or beer.' },
      { label: 'Classroom vs self-study delivery', detail: 'Providers offer two-day classes or guided self-study; both lead to the same exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes WSET Level 2 is "systematic syllabus coverage with spaced review, then timed closed-book practice," and the single biggest error is carrying over the Level 1 habit of recognition-based study into an exam that demands recall. A second proven approach is building your own region-grape-style reference sheets, because the exam\u2019s core item type — "which region produces this style" — is answered by the mapping you construct yourself. Third, give the production-factors section its due: climate, soil, and winemaking-choice questions are where closed-book candidates drop the most points, and the material rewards study rather than intuition. Fourth, drill sparkling and fortified wines as a dedicated block; they are a consistent share of the paper and easy points once learned. Fifth, run at least one timed sample paper under closed-book conditions in the final week, because pacing and the discipline of not looking anything up are skills the exam tests as much as knowledge. Finally, use the margin: 28 of 50 passes, so when a question genuinely stumps you, eliminate obviously wrong options, guess, and move on rather than burning time — the margin is designed for that honesty.',
    items: [
      { title: 'Study for recall, not recognition', detail: 'Level 2 is closed-book; build recall of region-grape-style facts.' },
      { title: 'Build your own reference sheets', detail: 'One-pagers per region drive the "which region makes this style" items.' },
      { title: 'Own the production-factors section', detail: 'Climate, soil, and winemaking questions reward study over intuition.' },
      { title: 'Drill sparkling and fortified as a block', detail: 'A consistent share of the paper and easy points once learned.' },
      { title: 'Run one timed closed-book paper', detail: 'Pacing and no-look discipline are tested as much as knowledge.' }
    ]
  },
  resourceComparison: {
    summary: 'WSET Level 2 pricing runs roughly $300 to $500 through approved providers, with the official study guide included, and the guide is the authoritative study source — the exam draws from it. The comparison below separates the official course, the study guide, and optional reinforcement, with prices current to this review. The buying rule is to choose an approved program provider (ATF) and treat the official guide as the syllabus, using other resources only as supplements.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'WSET Level 2 course + exam (approved provider)', values: ['~$300-500', '2-day class or guided self-study + exam', 'The certification itself'] },
      { label: 'WSET Level 2 study guide', values: ['Included', 'Book + online access', 'The exact syllabus the exam draws from'] },
      { label: 'Provider sample papers', values: ['Included', 'Practice exams', 'Confirming the closed-book 55% line'] },
      { label: 'WSET Level 3 (next step)', values: ['~$600-900', 'Multi-day course + written & tasting exam', 'Sommelier-track advancement'] }
    ],
    footnote: 'Prices approximate and dated to this review; only WSET-approved program providers can deliver the exam.'
  },
  commonMistakes: {
    summary: 'The most common mistake is underestimating the closed-book format after Level 1 and failing to build true recall, which surfaces on the production-factors and region items; the second is over-weighting famous regions and under-studying sparkling, fortified, and less glamorous syllabus sections. A third recurring error is skipping timed practice and then running out of composure under the hour-long paper, even though 50 questions at 55 percent is forgiving. Candidates also routinely rely on wine knowledge from drinking rather than the study guide, and answer from experience where the syllabus teaches a specific fact. Finally, many candidates book the exam before finishing the study guide, converting a well-designed pass line into a guessing exercise.',
    items: [
      { mistake: 'Studying for recognition only', fix: 'Level 2 demands recall — build it with spaced review and one-pagers.' },
      { mistake: 'Over-weighting famous regions', fix: 'Sparkling, fortified, and pairing sections are a dependable share of the paper.' },
      { mistake: 'Skipping timed practice', fix: 'Run one closed-book timed paper; pacing is part of the test.' },
      { mistake: 'Answering from drinking experience', fix: 'The exam wants the study guide\u2019s facts, not personal tasting opinion.' },
      { mistake: 'Booking the exam early', fix: 'Finish the guide and a timed paper before scheduling the sitting.' }
    ]
  },
  questionTypes: {
    summary: 'The Level 2 exam is a closed-book 50-question multiple-choice paper with a 55 percent pass mark, answered in about 1 hour. Items test grape varieties and styles, key regions, production factors, sparkling and fortified wines, and food and wine pairing, with a mix of direct factual questions and applied style-matching items. The samples below are editor-written illustrations of the published syllabus, not live exam items.',
    types: [
      { name: 'Grapes & styles', share: '~25%', detail: 'Principal varieties and the styles they produce.' },
      { name: 'Key regions', share: '~25%', detail: 'Region-grape-style mapping across France, Italy, Spain, and the New World.' },
      { name: 'Production factors', share: '~20%', detail: 'Climate, soil, viticulture, and winemaking choices.' },
      { name: 'Sparkling & fortified', share: '~15%', detail: 'Champagne, sparkling methods, and fortified styles.' },
      { name: 'Food & wine pairing', share: '~15%', detail: 'Pairing principles applied to menus and dishes.' }
    ],
    samples: [
      {
        prompt: 'Which region is most associated with Sancerre, a crisp, aromatic Sauvignon Blanc?',
        options: ['A. Bordeaux', 'B. Loire Valley', 'C. Burgundy', 'D. Champagne'],
        answer: 'B',
        explanation: 'Sancerre sits in the Loire Valley, known for its zesty Sauvignon Blancs.'
      },
      {
        prompt: 'A wine labelled "Brut" is best described as:',
        options: ['A. Sweet', 'B. Dry to medium-dry', 'C. Fortified', 'D. Sparkling and very sweet'],
        answer: 'B',
        explanation: 'Brut is the classic dry to medium-dry style of sparkling wine, most associated with Champagne.'
      },
      {
        prompt: 'Which factor most influences a wine\u2019s body and alcohol level?',
        options: ['A. The label design', 'B. Grape ripeness at harvest', 'C. Bottle shape', 'D. The retail price'],
        answer: 'B',
        explanation: 'Riper grapes produce higher sugar, which ferments into more alcohol — the core driver of body and alcohol level.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published syllabus, not live exam items.'
  },
  examDay: {
    summary: 'The Level 2 exam is a closed-book 50-question paper, about 1 hour, administered at the end of your course or at a scheduled date set by the approved provider; bring photo ID and nothing else, since notes are not allowed. The core rules: closed-book, no phones, arrive on time, and answer all 50 questions — there is no penalty for a wrong guess, and 28 correct passes. Results come from WSET in a few weeks, reported as pass, merit, or distinction. The most useful exam-day habits: sleep normally, arrive with the 55 percent margin in mind (you can miss 22 questions and still pass), and pace yourself at about a question per minute, skipping and returning rather than dwelling. Trust the study-guide facts over debate — the exam wants the syllabus answer. After the paper, plan the Level 3 step if you are on the sommelier or buying track, since that is the qualification many wine-career roles list; the Level 2 certificate is your evidence of the recognised baseline.',
    bring: ['Photo ID', 'Arrive on time for the paper'],
    leave: ['Study notes and phones (closed-book exam)', 'The Level 1 assumption that the exam is open-book'],
    timeline: [
      { time: 'Study', detail: '18-25 hours across 3-4 weeks; finish the official guide and one timed paper.' },
      { time: 'Exam', detail: '50 closed-book questions, ~1 hour, 55% (28/50) to pass.' },
      { time: 'Results', detail: 'Pass/merit/distinction from WSET in a few weeks.' },
      { time: 'Next', detail: 'Plan Level 3 for sommelier and buying-track roles.' }
    ],
    rules: ['Closed-book exam', '50 questions, ~1 hour', '55% (28/50) to pass', 'Photo ID required'],
    afterwards: 'Passing earns the WSET Level 2 Award in Wines — the industry-recognised wine credential — and the certificate is the entry qualification for wine-touching roles and the Level 3 step.'
  }
};

export default data;
