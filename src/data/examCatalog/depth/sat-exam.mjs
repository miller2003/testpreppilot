const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College admissions & standardized-testing desk',
    bio: 'We cover the digital SAT and its role in college admission. Format and fee facts come from the College Board official pages and are revised each testing year; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the digital SAT format, scoring scale, fees and retake policy against College Board official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The SAT gates college access, and degree-level earnings dominate the data: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The SAT is an admissions test, not a job credential, so no BLS SOC code corresponds to a score. The earnings case runs through college completion, and the BLS evidence is unambiguous: in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone. Annualized, the bachelor-level median is roughly $80,000, and the gap compounds over a career. The SAT matters to this picture because it is the most widely used standardized measure in undergraduate admissions, and for many students it directly affects both admission outcomes and merit-aid packages: thousands of colleges use SAT scores in scholarship formulas, and a strong score can reduce net cost by tens of thousands of dollars over four years. It is equally true that the admissions landscape has shifted: hundreds of colleges are test-optional, and the University of California system does not use the SAT at all, so the test is a lever rather than a universal gate. The honest framing for families is that the SAT is worth preparing for seriously when target schools use it for admission or aid, and that the economic payoff the data actually supports is degree completion, not the score itself. BLS classifies workers by occupation and credential, not test scores, so no SAT percentile maps to a salary; the connection runs through the college outcomes the score helps produce.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'SAT score range', value: '400-1600', note: 'College Board, digital SAT' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient remains the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The SAT has no pass/fail line; scores run 400-1600, and "good" is defined by each college\u2019s admitted-student profile',
    summary: 'The College Board publishes no pass rate for the SAT because there is no passing score. The digital SAT is scored on a 400-1600 scale, with Reading and Writing and Math each reported 200-800. What students actually compare against are percentiles (College Board publishes national percentiles by cohort) and each college\u2019s middle-50% score range, which is the band spanning the 25th to 75th percentile of admitted students. A commonly cited benchmark is 1050 (roughly the national median), while competitive four-year colleges typically admit students with middle-50% ranges from about 1200 to 1450, and highly selective programs often see 1450-1550. College Board also provides benchmark scores linked to college readiness (evidence-based reading/writing and math benchmarks tied to first-year course success). Because the score scale is stable, students can set targets by researching their target schools\u2019 published ranges rather than by chasing an arbitrary number. The exam is adaptive: each section\u2019s second module routes to harder or easier items based on first-module performance, which means the difficulty a student sees varies while the score scale stays comparable. There is also no "fail and wait" retake penalty beyond the practical rule that most students take the SAT two or three times; College Board does not impose a limit on the number of sittings, and score choice lets students send only their best scores to most colleges. The honest takeaway: prepare for a target score derived from your college list, not for a pass line that does not exist.',
    source: { label: 'College Board - SAT scoring and benchmarks', url: 'https://satsuite.collegeboard.org/sat' },
    caveat: 'No pass rate exists; targets come from college middle-50% ranges and national percentiles.'
  },
  studyPlan: {
    summary: 'The digital SAT runs about 2 hours 14 minutes and contains 98 Reading and Writing questions (two 32-minute modules) and 54 Math questions (two 35-minute modules), all delivered in the Bluebook app with adaptive routing. A serious plan runs 60-100 hours over 8-12 weeks for students starting near the national median and aiming for competitive colleges. Week 1: take the official full-length practice test in Bluebook to establish a baseline and a skill-tagged error log. Weeks 2-4: drill the highest-yield Reading and Writing domains - Standard English Conventions (grammar and punctuation, the most trainable score), Expression of Ideas (transitions and rhetorical synthesis), and Craft and Structure (words in context and text structure) - using Khan Academy\u2019s free Official Digital SAT Prep, which is built in partnership with College Board. Weeks 5-7: shift to Math, covering Algebra (linear equations and systems), Advanced Math (quadratics and exponentials), Problem-Solving and Data Analysis (ratios, percentages, statistics), and Geometry and Trigonometry, with daily Desmos calculator fluency practice because the built-in calculator is always available. Weeks 8-10: timed section practice with full-length tests in Bluebook; the adaptive design means students must learn to protect accuracy in module 1, which determines module-2 difficulty. Weeks 11-12: two full timed tests per week, error retakes, and test-day logistics (sleep, check-in, Bluebook device setup). Students should also confirm whether their target schools are test-optional and whether they superscore, because that changes how many sittings to budget.',
    totalHours: '60-100 hours over 8-12 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official Bluebook practice test', 'Skill-tagged error log'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'Reading & Writing domains', tasks: ['Standard English Conventions drills', 'Craft and Structure practice'], hours: 24 },
      { label: 'Weeks 5-7', focus: 'Math domains', tasks: ['Algebra and Advanced Math', 'Desmos calculator fluency'], hours: 30 },
      { label: 'Weeks 8-10', focus: 'Timed sections', tasks: ['Full timed sections weekly', 'Adaptive module pacing'], hours: 24 },
      { label: 'Weeks 11-12', focus: 'Full tests and logistics', tasks: ['Two full tests per week', 'Error retakes and logistics'], hours: 16 }
    ],
    variants: [
      { label: 'Test-optional strategy', detail: 'If target schools do not require scores, weigh the score\u2019s likely aid value before investing hundreds of hours.' },
      { label: 'Accommodations', detail: 'Students with documented needs apply through the College Board SSD portal well before registration deadlines.' }
    ]
  },
  prepStrategies: {
    summary: 'The digital SAT rewards a small number of high-leverage habits. Strategy one: train in Bluebook from day one. The adaptive routing, built-in Desmos calculator, annotation tools and module timers are part of the test; students who practice on paper or third-party apps learn the wrong pacing. Strategy two: win module 1. Because module 2 difficulty is set by module 1 performance, careless errors in module 1 cap the achievable score; accuracy in the first module is worth more than speed in the second. Strategy three: exploit the grammar trainability of Standard English Conventions. These items (subject-verb agreement, verb tense, pronoun reference, punctuation, parallel structure) follow fixed rules and are the fastest score gains in the whole test. Strategy four: use official materials almost exclusively - Bluebook practice tests and Khan Academy\u2019s Official Digital SAT Prep - because only College Board items match the question style; third-party banks over-represent easy items and misrepresent the adaptive format. Strategy five: manage the selection of sittings strategically; most students improve most between tests 1 and 2, and many colleges superscore, so plan two or three sittings and send only the best score. Strategy six: protect sleep and build a fixed pre-test routine, since a 2-hour 14-minute adaptive test is an endurance event as much as a knowledge test.',
    items: [
      { title: 'Practice only in Bluebook', detail: 'The adaptive app is the test; paper practice teaches the wrong pacing.' },
      { title: 'Protect module 1 accuracy', detail: 'Module-1 performance sets module-2 difficulty and your ceiling.' },
      { title: 'Mine the grammar section', detail: 'Standard English Conventions are the most trainable items on the exam.' },
      { title: 'Use official materials', detail: 'Khan Academy + Bluebook; third-party banks drift from the real style.' },
      { title: 'Plan multiple sittings', detail: 'Most gains come between tests 1 and 2; superscoring favors retakes.' }
    ]
  },
  resourceComparison: {
    summary: 'The digital SAT prep market has a clear official core and a noisy paid periphery. Free and official first: Bluebook contains full-length adaptive practice tests, and Khan Academy\u2019s Official Digital SAT Prep is free, built with College Board, skill-tagged, and the single best instructional resource; together they cover format, content and practice. The College Board website adds a free practice-question bank and the SAT Student Guide PDF. On the paid side, the major test-prep companies sell books ($15-$40) and courses ($200-$2,000) whose main value is structure and accountability rather than content, since the official question pool is owned by College Board. Many school districts offer free in-school SAT prep or fee waivers for low-income students, including free official practice tests and free college applications through College Board\u2019s fee-waiver program, which also waives the SAT fee itself. Tutoring ($50-$200/hour) is most defensible for students with a specific weak domain or high target-score gap. The honest ranking: official free resources first, a book for structure, a course or tutor only when accountability or a specific weakness justifies the cost. Prices here are current as of the 2025-26 testing year and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Bluebook official practice tests', values: ['Free', 'Digital adaptive app', 'The exact interface; use 4+ tests'] },
      { label: 'Khan Academy Official Digital SAT Prep', values: ['Free', 'Web/mobile course', 'Skill-by-skill instruction and drills'] },
      { label: 'Official practice-question bank', values: ['Free', 'Online', 'Targeted domain practice'] },
      { label: 'Commercial prep book', values: ['$15-$40', 'Print', 'Structure and review'] },
      { label: 'Course or tutor', values: ['$200-$2,000', 'Live/on-demand/1:1', 'Accountability and targeted gaps'] }
    ],
    footnote: 'Prices dated 2025-26; College Board and Khan Academy provide the only official digital-prep content. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common SAT mistakes are format-driven. Mistake one: practicing on paper or third-party apps and never learning Bluebook\u2019s adaptive routing; students routinely lose points on module 2 that their skill level should have earned because they misjudge pacing in the real interface. Mistake two: treating the calculator as an afterthought; the built-in Desmos tool is always available, and fumbling with it during the exam is a silent time leak. Mistake three: grinding vocabulary lists; the digital test emphasizes words in context, and memorized definitions misfire on nuance questions. Mistake four: ignoring the grammar domain because it feels like a small share of the test; Standard English Conventions are the most trainable items and typically repay hours better than any reading strategy. Mistake five: over-relying on a single sitting; most students improve meaningfully between test 1 and test 2, and score choice plus superscoring make retakes a rational strategy. Mistake six: ignoring the research that many target schools are test-optional; families who assume the SAT is mandatory sometimes over-invest, while families who ignore it sometimes leave merit aid on the table - the right move is to check each college\u2019s policy before deciding how many hours to spend.',
    items: [
      { mistake: 'Practicing off-interface', fix: 'Do timed practice in Bluebook from the first week.' },
      { mistake: 'Ignoring the Desmos calculator', fix: 'Practice the built-in tool in every session.' },
      { mistake: 'Grinding vocabulary lists', fix: 'Practice words in context through Craft and Structure items.' },
      { mistake: 'Skipping grammar drills', fix: 'Standard English Conventions are the fastest score gains.' },
      { mistake: 'Assuming one sitting is enough', fix: 'Plan 2-3 sittings; superscoring rewards retakes.' }
    ]
  },
  questionTypes: {
    summary: 'The digital SAT has two sections. Reading and Writing: 98 questions in 64 minutes (two 32-minute modules), testing Information and Ideas (main idea, inference, evidence support), Craft and Structure (words in context, text structure, cross-text connections), Expression of Ideas (transitions, rhetorical synthesis), and Standard English Conventions (grammar, punctuation, usage). Math: 54 questions in 70 minutes (two 35-minute modules), spanning Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry; a calculator is allowed throughout, and the Desmos graphing calculator is built into Bluebook. All items are four-option multiple choice, and both sections use adaptive routing. The total score runs 400-1600. Samples below are editor-written illustrations of the published skill domains, not live exam items.',
    types: [
      { name: 'Reading and Writing', share: '98 items / 64 min', detail: 'Information, Craft & Structure, Expression, Conventions.' },
      { name: 'Math', share: '54 items / 70 min', detail: 'Algebra, Advanced Math, Problem-Solving & Data, Geometry.' }
    ],
    samples: [
      {
        prompt: 'The passage describes a tidepool ecosystem in which sea stars keep mussel populations in check. Which finding would most directly challenge the author\u2019s claim that sea stars are the keystone species?',
        options: ['A. Mussel populations rise sharply when sea stars are removed', 'B. Other predators also consume mussels in the tidepool', 'C. Sea stars are abundant in neighboring pools', 'D. Mussels grow faster in warm water'],
        answer: 'B',
        explanation: 'The claim is that sea stars are the keystone control on mussels. Finding B weakens the claim by showing other predators share that role, so the keystone status is not exclusive.'
      },
      {
        prompt: 'If 5x - 2 = 3x + 8, what is the value of x?',
        options: ['A. 3', 'B. 5', 'C. 6', 'D. 10'],
        answer: 'B',
        explanation: 'Subtract 3x from both sides: 2x - 2 = 8. Add 2: 2x = 10. Divide by 2: x = 5.'
      },
      {
        prompt: 'The researchers found that the new process cut energy use by 18 percent, yet the plant manager questioned whether the savings were ______ because the test ran for only one week. Which choice completes the text with the most logical and precise word?',
        options: ['A. durable', 'B. trivial', 'C. hypothetical', 'D. visible'],
        answer: 'A',
        explanation: 'The manager\u2019s concern is that a one-week test may not prove the savings persist; "durable" captures that concern most precisely.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill domains, not live exam items.'
  },
  examDay: {
    summary: 'The digital SAT is administered on scheduled national test dates, typically seven per year (August, October, November, December, March, May, June), at school and testing-center sites, and registration closes about four weeks before each date with late registration available for a fee. On test day, students check in with a printed or digital admission ticket and a valid photo ID; the exam runs on Bluebook, so students must bring a fully charged laptop or approved device with the Bluebook app installed, or use a school-provided device where offered. No calculator is required because Desmos is built in, but a permitted handheld calculator is allowed. Phones, smartwatches and all personal electronics must be powered off and stored in a bag at the front of the room. The total testing time is about 2 hours 14 minutes plus breaks, and check-in can add 30-45 minutes, so students should arrive by the time printed on the ticket. Students with documented disabilities must have an approved College Board SSD accommodation, applied for well in advance. Scores post in the student\u2019s College Board account roughly two weeks after the test date, and students can choose which scores to send to colleges (score choice), with most colleges also superscoring across sittings. Afterwards, students should review the score report\u2019s skill breakdown to plan any retake, and verify each college\u2019s score-sending and superscore policy.',
    bring: ['Printed or digital admission ticket', 'Valid photo ID', 'Fully charged device with Bluebook installed', 'Approved calculator if desired (Desmos is built in)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes, books, or formula sheets', 'Food and drink (site-dependent breaks)'],
    timeline: [
      { time: '7:30-8:00 AM', detail: 'Arrive; check in and find the testing room.' },
      { time: '8:15-9:00 AM', detail: 'Seating, device setup, and instructions.' },
      { time: '9:00-9:45 AM', detail: 'Reading and Writing module 1 (32 minutes).' },
      { time: '9:45-10:30 AM', detail: 'Reading and Writing module 2 (32 minutes).' },
      { time: '10:30-10:45 AM', detail: 'Break.' },
      { time: '10:45-11:50 AM', detail: 'Math modules 1 and 2 (35 minutes each).' },
      { time: '~12:15 PM', detail: 'Dismissal; scores post in about 2 weeks.' }
    ],
    rules: [
      'The exam runs in Bluebook; answers are entered digitally.',
      'Personal electronics must be powered off and stowed.',
      'Desmos is built into Bluebook; handheld calculators are optional.',
      'Accommodations must be pre-approved through College Board SSD.'
    ],
    afterwards: 'Scores post in about 2 weeks with skill breakdowns; use score choice and verify each college\u2019s superscore policy, then plan any retake.'
  }
};

export default data;
