// Depth content for: enrolled-agent
// Fully populated from primary sources (IRS Enrolled Agent FAQ, IRS Internal
// Revenue Bulletin 2026-21, NAEA, BLS OEWS). Every numeric row is sourced.
// Sample questions are editor-written illustrations of the SEE content outlines,
// not live exam items. NOTE: the IRS does not publish official per-part SEE
// pass rates — see the passRate caveat.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Accounting, tax & bookkeeping desk',
    bio: 'This guide is compiled and maintained by our accounting desk. Content comes from the examining body’s current blueprint and candidate bulletin — AICPA and NASBA for the CPA, the IRS for the Special Enrolment Examination, and the certifying association’s own handbook for the bookkeeping credentials. Pass rates are quoted only where the body publishes them, with the reporting window named, because quarter-to-quarter movement in this field is large enough to mislead. Wage data comes from the matching Bureau of Labor Statistics occupational series, cited by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Blueprint weights, window rules, scoring and fees were taken from the examining body’s current bulletin for the stated testing year.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$54,920 median for Tax Preparers (BLS OEWS, May 2025) — the closest BLS proxy for EA work',
    summary: 'The IRS does not track "Enrolled Agent" as a standalone occupation, so the most relevant BLS wage series is Tax Preparers (SOC 13-2082), compiled in the Occupational Employment and Wage Statistics (OEWS) survey, May 2025. The national median is $54,920, with the 10th percentile at $33,760 and the 90th percentile at $99,270 — a roughly 3x spread driven by experience, client base, and credential. Enrolled Agents typically sit in the upper half of that band: the EA credential grants unlimited practice rights before the IRS (any tax matter, any IRS office) without the degree or 150-credit requirements of a CPA, so EAs can build independent representation and resolution practices that pure preparers cannot. EAs also layer the credential onto existing bookkeeping or preparing work to add audit representation, penalty abatement, and collections defense — billable services that lift earnings above the median preparer. Employment in the Tax Preparers series is about 76,480, and BLS projects +4.5% growth (2024-2034, about as fast as average) with roughly 10,400 openings per year from growth plus replacements. Geography matters: New York ($71,850) and California ($70,030) lead state medians, while rural states sit near $34,000. Treat the $54,920 figure as a floor for credentialed EAs rather than a ceiling; experienced EAs with a book of representation clients commonly exceed the 90th-percentile mark. The EA therefore converts seasonal tax work into a year-round advisory business, which is the durable driver of the credential\'s wage premium.',
    rows: [
      { label: 'Median annual wage (Tax Preparers)', value: '$54,920', note: 'BLS OEWS, Tax Preparers (SOC 13-2082), May 2025' },
      { label: '10th percentile', value: '$33,760', note: 'BLS OEWS, May 2025' },
      { label: '90th percentile', value: '$99,270', note: 'BLS OEWS, May 2025' },
      { label: 'Mean annual wage', value: '$60,930', note: 'BLS OEWS, May 2025 — right-skewed by top earners' },
      { label: 'Employment', value: '76,480', note: 'BLS OEWS, Tax Preparers, May 2025' },
      { label: 'Projected growth', value: '+4.5% (2024-2034)', note: 'BLS OEWS — about as fast as average' },
      { label: 'Annual openings', value: '~10,400', note: 'BLS — growth plus replacements' }
    ],
    growth: '+4.5% projected growth 2024-2034 (about as fast as average); roughly 10,400 openings per year. "Enrolled Agent" is not a separate BLS occupation; Tax Preparers (13-2082) is the closest published series.',
    source: { label: 'BLS Occupational Employment and Wage Statistics — Tax Preparers (13-2082), May 2025', url: 'https://www.bls.gov/oes/current/oes_nat.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'IRS publishes NO official per-part SEE pass rate',
    summary: 'Unlike the CPA Exam, the IRS does not publish official pass rates for the Special Enrollment Examination (SEE). The only IRS-produced performance data are candidates\' own diagnostic score reports. Prep providers sometimes cite aggregate figures drawn from the prior Prometric administration; for the 2024-25 window those commonly cited ranges were roughly Part 1 (Individuals) 58%, Part 2 (Businesses) 71%, and Part 3 (Representation, Practices & Procedures) 70%. Treat these as informal provider estimates, not government statistics, and expect them to shift under the new PSI administration that began in 2026. The exam is also self-paced by part and attempted up to four times per window, which further muddies any single "pass rate" number because retakers are blended in. What is certain from the IRS: each part is 100 questions (85 scored plus 15 unscored experimental), scored on a 200-800 scale with 500 to pass, and you may carry passed parts for three years. A pragmatic read: Part 1 and Part 3 are commonly the higher-rate parts, while Part 2\'s heavier business content trips more candidates — but none of these percentages should drive your study plan the way the content-outline domain weights should. Plan around the published outline, not the rumor mill.',
    rows: [
      { label: 'Part 1 — Individuals (provider estimate)', value: '~58%', note: 'Commonly cited by prep providers for 2024-25 Prometric window; NOT an IRS figure' },
      { label: 'Part 2 — Businesses (provider estimate)', value: '~71%', note: 'Commonly cited by prep providers for 2024-25; NOT an IRS figure' },
      { label: 'Part 3 — Representation (provider estimate)', value: '~70%', note: 'Commonly cited by prep providers for 2024-25; NOT an IRS figure' },
      { label: 'Scaled passing score', value: '500 (scale 200-800)', note: 'Per PSI Candidate Information Bulletin; Prometric era used 40-130 scale, pass 105' },
      { label: 'Attempts per part, per window', value: '4', note: 'IRS EA FAQ' },
      { label: 'Score carryover', value: '3 years', note: 'IRS EA FAQ — pass all three within a rolling 3-year window' }
    ],
    source: { label: 'IRS — Enrolled Agents Frequently Asked Questions', url: 'https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agents-frequently-asked-questions' },
    caveat: 'The IRS does NOT publish official SEE pass rates. The Part 1-3 percentages above are informal figures cited by commercial prep providers for the 2024-25 Prometric administration and are not government statistics. No verified official per-part rate exists, and the 2026 PSI transition may change outcomes. Do not present these as IRS-issued.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Most candidates need 130-200 total study hours across the three parts, or about 40-70 hours per part depending on tax background. Part 2 (Businesses) is the heaviest and where most candidates spend the most time; Part 1 (Individuals) builds the foundation; Part 3 (Representation) is conceptual and often the quickest. PSI lets you schedule parts in any order, and you have a generous 3-year carryover, so spread the parts out rather than cramming all three. The schedule below assumes a 12-week, ~12-15 hr/week pace. A sensible order is Part 1 first (it establishes individual income, basis, and filing mechanics that Part 2 and Part 3 assume), then Part 2 (entity types, basis, depreciation — the densest block), then Part 3 (Circular 230 and IRS procedure, which is more memory than computation). Because the 2026 testing window opens July 1 after a March-June blackout, plan your finish before the blackout if you start early, or aim for a July-February window. Protect at least one full 100-question timed simulation per part in the final week, and pad the plan by 10-15 percent; working candidates should stretch to 18-22 weeks at 8-10 hours/week to avoid burnout. Each part is a standalone 100-question exam, so treat them as three separate campaigns rather than one marathon.',
    totalHours: '130-200 hours total (~40-70 per part)',
    weeks: [
      { label: 'Weeks 1-4 — Part 1', focus: 'Individuals (income, deductions, credits, filing status)', tasks: ['Anchor on the IRS content outline domain weights', 'Drill basis, dependency, and credit phase-outs', 'Timed 100-question mixed sets weekly'], hours: '12-15 hrs/week' },
      { label: 'Weeks 5-9 — Part 2', focus: 'Businesses (entities, income, assets, deductions)', tasks: ['Basis, depreciation, and entity-level tax', 'Net operating losses and accounting methods', 'Practice with IRS publications as the source'], hours: '14-16 hrs/week' },
      { label: 'Weeks 10-11 — Part 3', focus: 'Representation, Practices & Procedures', tasks: ['Circular 230: practice standards, due diligence, penalties', 'IRS procedures, appeals, and collections', 'Know who may do what before the IRS'], hours: '10-12 hrs/week' },
      { label: 'Week 12 — Mixed review', focus: 'Weak-area repair & timed exams', tasks: ['Retake missed questions closed-book', 'Two full 100-question timed simulations', 'Confirm PSI appointment and ID'], hours: '8-10 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time', detail: 'Stretch to 18-22 weeks at 8-10 hrs/week; take parts one at a time as you finish each. Note the 2026 testing blackout (Mar 1-Jun 30) — schedule around the Jul 1 reopening.' },
      { label: 'Accelerated', detail: '8-10 weeks at 20+ hrs/week if you prepare returns professionally; keep Part 2 as the longest block.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The SEE is built directly from the IRS content outlines, and questions follow the Internal Revenue Code, IRS publications, and instructions — not a commercial author\'s interpretation. That single fact drives every high-leverage study habit below. The most common mistake is studying secondary summaries and then being surprised when the exam wording tracks the statute exactly; always return to the primary IRS source for any rule you miss. Weight your time to the content-outline domain percentages, because that is where the 85 scored questions actually live — Part 2 business tax preparation and Part 1 income and deductions carry the heaviest load. Drill calculations (basis, depreciation, capital-gain netting, credit phase-outs, self-employment tax) until they are automatic, since the exam tests application at speed. For Part 3, master Circular 230 cold: practice standards, due-diligence rules, and penalties appear constantly and are pure memory. Use mixed, timed sets early to build the domain-recognition reflex, and tag every miss as a content gap, a reading error, or a pacing problem so your next block targets the real weakness rather than re-reading material you already know.',
    items: [
      { title: 'Anchor on the IRS content outline, not a textbook', detail: 'The domain weights in the SEE content outlines tell you where the 85 scored questions live. Spend time in proportion to weight (e.g., Part 2 business tax preparation and Part 1 income/deductions carry the heaviest load).' },
      { title: 'Learn from IRS sources, not commentary', detail: 'Questions are written to the Code, publications, and forms. When you miss one, go to the underlying IRS publication or form instruction; commercial summaries can drift from the exact language the exam tests.' },
      { title: 'Drill the calculations until automatic', detail: 'Basis, depreciation, capital-gain netting, credit phase-outs, and self-employment tax appear constantly. Practice the math cold so exam-day computes are fast and error-free.' },
      { title: 'Master Circular 230 for Part 3', detail: 'Part 3 leans heavily on practice standards, due diligence, and penalties. Know who may represent whom, when disclosure is required, and the consequences of disreputable conduct.' },
      { title: 'Use mixed, timed sets early', detail: 'The real exam never announces the rule it is testing. Mixed timed sets build the domain-recognition reflex; tag each miss as content gap, careless reading, or pacing, then let the tags drive the next block.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'Five providers cover the SEE. Prices below are representative list tiers checked 2026-08 and move with promotions; the "Best for" column reflects each course\'s established strength. We do not rank by commission. Exam fees are separate (see examDay): $317 per part paid to PSI plus a $140 Form 23 enrollment fee. Gleim offers the deepest bank and detailed books, favored by candidates who want analytics. Surgent\'s adaptive engine and ReadySCORE predict readiness and shorten study time. Fast Forward Academy is strong on self-study video and audio. Lambers is the budget pick, often bundling all three parts near $399 with video courseware and flashcards. Becker enters the EA market with a single ~$499 tier for brand-familiar buyers. All five map to the current SEE content outlines. Choose on learning style first: video learners lean Lambers or Fast Forward, adaptive learners lean Surgent, depth seekers lean Gleim. None of the course prices includes the IRS/PSI fees, so budget roughly $1,111 in exam and enrollment costs on top of the course before counting continuing education. Although the EA exam is cheaper than the CPA, the course you pick still affects first-pass efficiency, and many candidates recover the course cost in billable hours saved by passing each part the first time. Watch for bundle deals that include the IRS enrollment fee, and confirm the access-until-you-pass terms before purchasing.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Gleim', values: ['~$499 / ~$699 / ~$799 by tier', 'Books + adaptive online, large question bank', 'Analytics & candidates wanting depth'], },
      { label: 'Surgent', values: ['Test Bank $299; Premier $499; Ultimate $699', 'Adaptive ("A.S.A.P.") + ReadySCORE', 'Efficient study & readiness prediction'], },
      { label: 'Fast Forward Academy', values: ['Online $549; Smart Bundle $649; +Bootcamp $699', 'Adaptive + video + audio lectures', 'Self-study with strong video'], },
      { label: 'Lambers', values: ['All-3-part bundle ~$399 (limited-time); ~$199.95/part test prep', 'Video courseware + flashcards', 'Budget buyers & video learners'], },
      { label: 'Becker', values: ['~$499', 'On-demand video + practice', 'All-in-one brand familiarity'], }
    ],
    footnote: 'Prices checked 2026-08 from each provider\'s public U.S. storefront and reflect typical list tiers; promotions cut these routinely. Exam fees are separate: $317 per part (PSI, 2026) + $140 Form 23 enrollment. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'EA candidates fail most often by studying the wrong source material or mishandling the logistics of the new PSI administration. The patterns below are the recurring, avoidable ones. First, studying commercial summaries instead of IRS publications — questions follow the Code, publications, and forms, so the primary source is where the answer lives. Second, underestimating Part 2 (Businesses), the heaviest content block; candidates who shortchange it run out of time and miss the densely weighted business-tax items. Third, ignoring the 2026 PSI transition and the March-June testing blackout — Prometric no longer administers the exam, scheduling moves to the PSI portal, and there is no testing between March 1 and June 30, 2026. Fourth, forgetting the three-year carryover clock: you must pass all three parts within a rolling three-year window measured from your first passed part. Fifth, burning attempts without diagnosis — after a fail you must wait 24 hours before rescheduling that part, and you get only four attempts per window, so analyze the diagnostic report before rebooking rather than repeating the same approach.',
    items: [
      { mistake: 'Studying commercial summaries instead of IRS publications', fix: 'Questions follow the Code, publications, and forms. When in doubt, go to the primary IRS source the exam is written from.' },
      { mistake: 'Underestimating Part 2 (Businesses)', fix: 'Part 2 is the heaviest content block and where candidates spend the most hours. Budget the largest study block for it, not Part 1.' },
      { mistake: 'Ignoring the 2026 PSI transition and testing blackout', fix: 'PSI replaced Prometric effective March 1, 2026. The 2026 cycle opens July 1, 2026 (Sept 1 internationally); the Mar 1-Jun 30 window is a blackout with no testing. Schedule on PSI\'s portal, not Prometric.' },
      { mistake: 'Forgetting the 3-year carryover clock', fix: 'You must pass all three parts within a rolling three-year window. Track your first passed part\'s date; an expired part must be retaken.' },
      { mistake: 'Burning attempts without 24-hour spacing', fix: 'After a fail you must wait 24 hours before rescheduling that same part, and you get only four attempts per window — diagnose the miss before rebooking.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'Every SEE part is 100 multiple-choice questions, of which 85 are scored and 15 are unscored experimental items used to gather statistics. All questions are multiple choice in three published formats: the direct question, the incomplete sentence, and "all of the following except." There are no simulations or essays. Questions follow the IRS content outlines for the part: Part 1 (Individuals), Part 2 (Businesses), Part 3 (Representation, Practices & Procedures). The exam is scored on a 200-800 scale with 500 to pass under the new PSI administration (the prior Prometric era used a 40-130 scale with 105 to pass). The direct-question format asks for the correct figure, rule, or procedure; the incomplete-sentence format reverses this by having you complete a statement with the correct option; the "all of the following except" format identifies the one outlier among otherwise-correct statements and rewards careful reading. Because every item is multiple choice, pacing is the core skill: 100 questions in 3.5 hours is just over two minutes each, so you must recognize the domain quickly, compute or recall, and move. Experimental items are scattered and unmarked, so treat every question as though it counts and never waste time guessing which are unscored.',
    types: [
      { name: 'Direct question', share: 'One of three MCQ formats', detail: 'A straightforward stem asking for the correct figure, rule, or procedure (e.g., "What is the taxpayer\'s allowable deduction?").' },
      { name: 'Incomplete sentence', share: 'One of three MCQ formats', detail: 'A stem completed by the correct option (e.g., "The basis of inherited property is generally ___."). Tests the same knowledge in reverse.' },
      { name: 'All of the following except', share: 'One of three MCQ formats', detail: 'Identifies the one outlier among otherwise-correct statements; rewards careful reading and full knowledge of the domain.' }
    ],
    samples: [
      { prompt: 'A single taxpayer with AGI of $30,000 paid $4,000 of qualified tuition and related expenses and $1,500 for a course not required for a degree. What is the maximum American Opportunity Tax Credit (AOTC) available for 2026, assuming the taxpayer otherwise qualifies?', options: ['A. $0', 'B. $1,500', 'C. $2,000', 'D. $2,500'], answer: 'D', explanation: 'D is correct: AOTC is 100% of the first $2,000 of qualified expenses plus 25% of the next $2,000, for a maximum $2,500. Only the $4,000 qualified tuition counts — the $1,500 non-degree course is not a qualified expense for AOTC. A, B, and C understate or zero out the credit.' },
      { prompt: 'Under Circular 230, which of the following is a practitioner required to do before signing a tax return as preparer of record?', options: ['A. Verify every factual statement the client provides by independent source', 'B. Possess a reasonable belief that the position is not frivolous and has a basis', 'C. Obtain a power of attorney before any representation', 'D. Guarantee the correctness of the reported tax liability'], answer: 'B', explanation: 'B is correct: a practitioner may sign a return only if there is a reasonable basis for each position and a good-faith belief it is not frivolous (due-diligence standard). A overstates the duty (reliance on client info is permitted with inquiry); C is wrong (POA is for representation, not signing); D is wrong — no guarantee of correctness is required.' },
      { prompt: 'A partner\'s outside basis in a partnership interest is $10,000. The partner receives a nonliquidating distribution of property with an inside fair market value of $16,000 and an inside basis to the partnership of $4,000. What is the partner\'s recognized gain?', options: ['A. $0', 'B. $6,000', 'C. $10,000', 'D. $12,000'], answer: 'A', explanation: 'A is correct under §732: a nonliquidating distribution generally causes no gain recognition; the partner takes the property\'s $4,000 inside basis and reduces outside basis accordingly. B confuses FMV with gain; C/D wrongly recognize distribution gain that the nonliquidating rule suspends.' }
    ],
    note: 'Samples are editor-written illustrations of the published SEE content outlines, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'As of 2026 the SEE is delivered by PSI Services (replacing Prometric). Appointments are scheduled on PSI\'s portal; the fee is $317 per part, paid by credit card at booking. Domestic testing runs July 1, 2026-February 28, 2027 (international starts September 1, 2026). Each part is 3.5 hours of testing inside a 4-hour seat (tutorial + two 10-minute breaks + survey). Know the check-in and break rules before you go. Check-in requires a government-issued photo ID matching your PSI registration name exactly — a name mismatch is the top reason candidates are turned away. Expect a photograph and biometric/credential validation, then a locker for all personal items; a calculator is provided on-screen, so none may be brought in. The two scheduled 10-minute breaks stop the clock; unscheduled breaks keep it running. Scratch materials are provided and collected. Critically, reschedule or cancel at least 48 hours before the appointment or you forfeit the entire $317 fee, and arriving more than 30 minutes late also forfeits it. After the survey you receive your 200-800 result (500 to pass); those who fail get diagnostic detail by content area.',
    bring: [
      'Government-issued photo ID matching your PSI registration name exactly (name must match, including middle initial)',
      'Your PSI appointment confirmation number / email'
    ],
    leave: [
      'Phones, smartwatches, bags, books, notes, and calculators — a calculator is provided on-screen',
      'Outerwear with large pockets, hats, and excess jewelry — stored in a locker'
    ],
    timeline: [
      { time: '30 min before', detail: 'Arrive; check in at the PSI desk with ID.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and biometric/credential validation.' },
      { time: 'Lockers', detail: 'Store all personal items; keep only ID and locker key.' },
      { time: 'Testing room', detail: 'Tutorial, then 100 questions across the 3.5-hour clock with two scheduled 10-minute breaks.' },
      { time: 'After', detail: 'Complete the survey; receive your result. Reschedule/cancel free only 48+ hours ahead — inside 48 hours you forfeit the full $317 fee, and arriving 30+ minutes late forfeits it too.' }
    ],
    rules: [
      'Scratch materials are provided and collected; you may not bring your own.',
      'Two scheduled 10-minute breaks are included; unscheduled breaks keep the clock running.',
      'Reschedule or cancel at least 48 hours before the appointment or you forfeit the entire $317 fee.',
      'Arriving more than 30 minutes late forfeits the full fee; you may take each part up to 4 times per window with a 24-hour wait after a fail.'
    ],
    afterwards: 'Your result on the 200-800 scale (500 to pass) is reported by PSI; candidates who fail also receive diagnostic information by content area. After passing all three parts within the 3-year window, file Form 23 and pay the $140 enrollment fee, then pass the IRS suitability (tax-compliance and background) check to be licensed.'
  }
};

export default data;
