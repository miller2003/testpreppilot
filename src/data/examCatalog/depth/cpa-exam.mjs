// Depth content for: cpa-exam
// Fully populated from primary sources (AICPA Blueprints 2026, AICPA pass-rate
// tables, NASBA, BLS OOH). Every numeric row is sourced. Sample questions are
// editor-written illustrations of the published blueprint, not live exam items.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Accounting, tax & bookkeeping desk',
    bio: 'This guide is compiled and maintained by our accounting desk. Content comes from the examining body’s current blueprint and candidate bulletin — AICPA and NASBA for the CPA, the IRS for the Special Enrolment Examination, and the certifying association’s own handbook for the bookkeeping credentials. Pass rates are quoted only where the body publishes them, with the reporting window named, because quarter-to-quarter movement in this field is large enough to mislead. Wage data comes from the matching Bureau of Labor Statistics occupational series, cited by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Blueprint weights, window rules, scoring and fees were taken from the examining body’s current bulletin for the stated testing year.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$81,680 median annual wage for accountants and auditors (BLS, May 2024)',
    summary: 'The CPA license sits at the top of the accounting pay ladder because it is the credential state boards require for sign-off authority on audited financial statements and for owning a public accounting practice. BLS groups CPAs under "Accountants and Auditors" (SOC 13-2011), the closest occupational category with published federal wage data. The median wage of $81,680 (May 2024) is materially above the all-occupations median, and the spread is wide: the lowest 10 percent earn less than $52,780, while the highest 10 percent exceed $141,420. CPAs concentrate in the top of that band because the license unlocks roles in external audit, tax management, controllership, and assurance that are closed to non-licensees. Geography and industry move the number sharply — CPAs in large metro firms, tech, or financial services typically clear the 75th percentile, and partners at mid-size and national firms routinely exceed the 90th-percentile cutoff. The BLS projects about 124,200 openings per year as 5 percent growth (2024-2034, about as fast as average) combines with retirements and normal turnover. The credential also compounds: many CPAs move into industry controllership, financial planning and analysis, or chief financial officer tracks where the license signals rigor even when sign-off authority is not required. For a credential that commands respect and portability across all 55 U.S. jurisdictions, the CPA remains one of the strongest returns on the ~300-400 study hours the exam demands. Importantly, the median understates the experienced CPA, because partnership tracks and equity shares lift total compensation well beyond the wage series, which excludes bonuses and profit participation.',
    rows: [
      { label: 'Median annual wage', value: '$81,680', note: 'BLS OOH, Accountants and Auditors (SOC 13-2011), May 2024' },
      { label: 'Lowest 10%', value: '< $52,780', note: 'BLS OOH, Accountants and Auditors, May 2024' },
      { label: 'Highest 10%', value: '> $141,420', note: 'BLS OOH, Accountants and Auditors, May 2024' },
      { label: 'Employment', value: '1,579,800', note: 'BLS OOH, Accountants and Auditors, May 2024' },
      { label: 'Projected growth', value: '5% (2024-2034)', note: 'BLS OOH — about as fast as average' },
      { label: 'Annual openings', value: '~124,200', note: 'BLS OOH — growth plus replacements' }
    ],
    growth: '5% projected growth 2024-2034 (about as fast as average); roughly 124,200 openings per year from growth plus replacements.',
    source: { label: 'BLS Occupational Outlook Handbook — Accountants and Auditors', url: 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Section pass rates range ~42% (FAR, BAR) to ~78% (TCP), 2025',
    summary: 'The CPA Exam is a criterion-referenced test: you must reach a scaled score of 75 on the 0-99 scale, and the AICPA does not curve results, so a higher pass rate simply means a better-prepared cohort, not an easier form. Pass rates are published quarterly by section. Full-year 2025 cumulative rates show a clear three-tier pattern: the tax-heavy disciplines TCP (77.65%) and ISC (67.79%) sit well above the Core, while the broad content sections FAR (42.12%) and the discipline BAR (41.94%) are the hardest. AUD (48.21%) and REG (63.12%) land in the middle. The first half of 2026 held the same shape — cumulative through Q2 2026: AUD 48.65%, FAR 42.95%, REG 66.78%, BAR 43.64%, ISC 67.45%, TCP 79.53%. Do not pick a Discipline purely by pass rate: candidates self-select into disciplines by background, and TCP overlaps heavily with REG, so its higher rate partly reflects a tax-ready cohort rather than an easier test. REG climbed from 63.1% in 2025 to nearly 67% in early 2026, while FAR and BAR remained stuck in the low 40s. Retakers are blended into these figures, which is why first-attempt rates would look somewhat higher. The practical takeaway: budget the most hours for FAR and your chosen discipline, and treat the published rates as a difficulty signal, not a prediction of your own outcome, which depends far more on study quality than on the cohort average.',
    rows: [
      { label: 'AUD cumulative 2025', value: '48.21%', note: 'AICPA quarterly pass-rate table, calendar year 2025' },
      { label: 'FAR cumulative 2025', value: '42.12%', note: 'AICPA — consistently the lowest Core section' },
      { label: 'REG cumulative 2025', value: '63.12%', note: 'AICPA' },
      { label: 'BAR cumulative 2025', value: '41.94%', note: 'AICPA — hardest discipline' },
      { label: 'ISC cumulative 2025', value: '67.79%', note: 'AICPA' },
      { label: 'TCP cumulative 2025', value: '77.65%', note: 'AICPA — highest section' },
      { label: 'AUD cumulative H1 2026', value: '48.65%', note: 'AICPA Q1+Q2 2026' },
      { label: 'FAR cumulative H1 2026', value: '42.95%', note: 'AICPA Q1+Q2 2026 — lowest section' },
      { label: 'REG cumulative H1 2026', value: '66.78%', note: 'AICPA Q1+Q2 2026' },
      { label: 'BAR cumulative H1 2026', value: '43.64%', note: 'AICPA Q1+Q2 2026' },
      { label: 'ISC cumulative H1 2026', value: '67.45%', note: 'AICPA Q1+Q2 2026' },
      { label: 'TCP cumulative H1 2026', value: '79.53%', note: 'AICPA Q1+Q2 2026 — highest section' }
    ],
    source: { label: 'AICPA — CPA Exam scoring and pass rates', url: 'https://www.aicpa.org/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates' },
    caveat: 'Rates are aggregate first-attempt-and-retake blended figures by section; the AICPA does not publish a single "overall" first-time-only CPA pass rate. Discipline pass rates partly reflect self-selection, not difficulty alone. Numbers are correct as of the H1-2026 release.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Most candidates budget 300-400 total study hours, or roughly 80-100 hours per section, assuming a bachelor\'s-level accounting background. The schedule below spreads four sections across about 16 weeks at a sustainable ~22-25 hours/week; slow it down if you work full-time or have a weak area. The Core sections (AUD, FAR, REG) test the broadest content and deserve the most hours; pick your Discipline (BAR, ISC, or TCP) to match your background and sit it last while the Core material is still fresh. The order matters because content overlaps: REG feeds TCP, and FAR foundations surface in BAR. A common, efficient sequence is FAR first (broadest, most forgettable), then REG, then AUD, then the Discipline, so the newest material is the most specialized. Protect the calendar against the NASBA 30-month credit window — once you pass your first section, the clock starts, and an expired section must be retaken. Build in one full simulated exam per section in the final week, and pad the plan by 10-15 percent; almost nobody hits the original schedule exactly. If you work full-time, a 22-26 week pace at 12-15 hours/week is realistic and lowers burnout risk. The plan below assumes the four sections are taken one at a time rather than stacked, which keeps each section\'s content isolated and fresh on exam day.',
    totalHours: '300-400 hours total (~80-100 per section)',
    weeks: [
      { label: 'Weeks 1-4 — FAR', focus: 'Financial Accounting & Reporting', tasks: ['Build the conceptual framework: recognition, measurement, presentation', 'Drill governmental/not-for-profit and consolidations', 'Complete one full practice testlet set weekly'], hours: '22-25 hrs/week' },
      { label: 'Weeks 5-8 — REG', focus: 'Taxation & Regulation', tasks: ['Federal income tax (individual + entity) basis and gain', 'Business law and ethics/professional responsibilities', 'Simulate the 8 TBSs under timed conditions'], hours: '22-25 hrs/week' },
      { label: 'Weeks 9-11 — AUD', focus: 'Auditing & Attestation', tasks: ['Risk assessment and internal control (78 MCQs span this heavily)', 'SSAE/SSARS and evidence procedures', 'Practice the 7 TBSs as realistic workpapers'], hours: '18-22 hrs/week' },
      { label: 'Weeks 12-15 — Discipline', focus: 'BAR, ISC, or TCP (pick one)', tasks: ['Focus only on your chosen discipline blueprint', 'Reinforce overlap with the Core you already passed', 'Two full simulated discipline exams'], hours: '18-22 hrs/week' },
      { label: 'Week 16 — Mixed review', focus: 'Weak-area repair & exam simulation', tasks: ['Retake missed TBSs cold', 'Light MCQ mixed sets daily to keep recall sharp', 'Confirm Prometric appointment and ID'], hours: '12-15 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time', detail: 'Stretch to 22-26 weeks at 12-15 hrs/week; sit one section at a time rather than stacking.' },
      { label: 'Accelerated', detail: '10-12 weeks at 30+ hrs/week if recently out of school; keep Core-first, Discipline-last order.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The CPA Exam rewards application, not memorization. Task-based simulations (TBSs) are half the score in every section except ISC, so candidates who only grind multiple-choice consistently underperform. The highest-leverage habits below are drawn from the blueprint design and from top-scorers\' reported routines. The single most common failure is treating the exam like a trivia test; instead, build the reflex of identifying the tested domain, recalling the standard, and computing under time pressure. Spaced retrieval beats re-reading: review missed items the next day and again three days later. Use the authoritative literature tab the way the real exam expects — research and authoring tasks in AUD and REG reward candidates who can navigate the codification quickly. Simulate the exact interface with the free AICPA sample test so the software never costs you points. Finally, track a simple ratio of first-try correct on mixed sets; when it crosses roughly 75-80 percent consistently, you are exam-ready. None of this requires more hours — it requires better hours, which is why adaptive courses that surface weak areas early tend to shorten the path to a passing score.',
    items: [
      { title: 'Treat TBSs as half the exam from day one', detail: 'Every Core and Discipline section weights MCQs and TBSs 50/50 (ISC is 60/40 MCQ). AUD has 78 MCQs and 7 TBSs; FAR 50 MCQs and 7 TBSs; REG 72 MCQs and 8 TBSs. Build a weekly TBS block so the document-heavy simulations feel routine, not foreign, on exam day.' },
      { title: 'Use the AICPA sample test to learn the software', detail: 'The free AICPA sample test mirrors the actual exam interface, authoring tools, and resource screens. Practicing in it removes a real source of test-day friction and is repeatedly cited by Elijah Watt Sells Award winners.' },
      { title: 'Study by blueprint content area, weighted to the percentages', detail: 'The 2026 Blueprints allocate item counts and skill levels per content area. Spend time in proportion to weight — e.g., FAR\'s governmental/NFP and REG\'s federal tax domains carry heavy item counts — rather than reviewing topics in book order.' },
      { title: 'Do mixed, timed sets to build the recognition reflex', detail: 'The real exam never announces which rule it is testing. Mixed timed sets train you to identify the domain, recall the standard, and compute quickly — the exact skill the test measures.' },
      { title: 'Turn every miss into a one-sentence rule', detail: 'After a wrong answer, write the controlling rule in your own words and immediately answer two nearby questions closed-book. If you can only get the original item right after seeing the explanation, you recognized an answer, you did not learn the skill.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'Four providers dominate the U.S. CPA market. Prices below are list/representative prices checked 2026-08 and shift constantly with promotions; the "Best for" column reflects each course\'s established strength. We do not rank by commission. Becker remains the market leader with the most structured program and live/coaching options, best for candidates who want hand-holding and brand recognition; its Concierge tier runs as high as $4,999 but routine promos bring Pro and Pro+ well under list. Gleim offers the deepest question bank and the most detailed books, favored by candidates who want analytics and volume. Surgent\'s adaptive engine and ReadySCORE predict exam readiness and shorten study time for efficient learners. UWorld (Roger) is the pick for video/lecture-driven study with strong simulations. All four cover the full 2026 Blueprint across Core and Discipline sections. Exam fees are separate from course fees: NASBA charges $268.59 per section as of 2026-08-01 (up from $265.57), and most states add a separate application or registration fee. Choose on learning style first, then price — the pass-rate difference between courses is small compared with the difference between studying consistently and not. All prices are U.S. list and exclude sales tax; international candidates should confirm any regional bundle or VAT pricing before buying. Most providers also offer monthly payment plans or affirm-style financing.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Becker', values: ['Pro $2,499 (was $3,845); Pro+ $2,698 (was $4,044); Premium $3,099; Concierge $4,999', 'On-demand video, SIMs, textbooks, coaching', 'All-in-one structure & brand recognition'] },
      { label: 'Gleim', values: ['$2,499 / $2,999 / $3,499 by tier', 'Books + adaptive online, deep question bank', 'Analytics & candidates who want the largest bank'] },
      { label: 'Surgent', values: ['$799 / $1,299 / $1,699 by tier', 'Adaptive ("A.S.A.P.") + ReadySCORE', 'Efficient study, predicts exam readiness'] },
      { label: 'UWorld (Roger)', values: ['~$1,999 / ~$2,299 / ~$2,899 by tier', 'Engaging video + CRUSH sims', 'Visual/lecture learners'] }
    ],
    footnote: 'Prices checked 2026-08 from each provider\'s public U.S. storefront and reflect typical list tiers; promotions routinely cut these 20-35%. NASBA\'s exam section fee is separate ($268.59 per section as of 2026-08-01, up from $265.57) and is not included above. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'The same avoidable errors sink otherwise-capable candidates. The patterns below show up in Candidate Performance Reports and in post-mortems from repeat takers. The dominant one is multiple-choice-only prep: because simulations are half the score, candidates who never practice full TBS testlets under timed conditions freeze when the document-heavy items arrive. The second is credit-clock blindness — passing one section starts the NASBA 30-month window in most jurisdictions, and candidates who drift for two years must retake expired parts. Third is discipline selection by pass rate rather than fit, which strands tax-averse candidates in TCP or systems-averse candidates in ISC. Fourth is skipping the free AICPA sample test, leaving the interface and literature tabs unfamiliar on exam day. Fifth is passive review — re-reading notes without ever producing an answer or computing a number. Each of these is fixable with planning rather than talent; the candidates who fail usually knew the material but mismanaged the format, the clock, or the sequence.',
    items: [
      { mistake: 'Grinding MCQs while neglecting task-based simulations', fix: 'TBSs are 50% of the score (40% for ISC). Build a standing weekly TBS block and simulate full testlets timed; do not save simulations for the final week.' },
      { mistake: 'Cramming all four sections back-to-back without a credit strategy', fix: 'Most states use NASBA\'s 30-month rolling window from your first passed section. Plan the order and dates so you finish inside the window; a failed section still starts the clock in many jurisdictions.' },
      { mistake: 'Choosing a Discipline by pass rate alone', fix: 'TCP\'s ~78% reflects a tax-ready cohort, not an easy test. Pick BAR/ISC/TCP by your background and career goal; a poor fit costs more time than the rate gap saves.' },
      { mistake: 'Skipping the free AICPA sample test', fix: 'The real interface, authoring tools, and authoritative literature tabs are unfamiliar to first-timers. One dry run removes avoidable friction on exam day.' },
      { mistake: 'Memorizing instead of applying', fix: 'The exam drops you into realistic work scenarios. Practice explaining why the distractor is wrong, not just which letter is right.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'Every CPA section is four hours and built from five testlets: two multiple-choice (MCQ) testlets and three task-based simulation (TBS) testlets. Item counts per section (2026 Blueprint): AUD 78 MCQs + 7 TBSs; FAR 50 MCQs + 7 TBSs; REG 72 MCQs + 8 TBSs; BAR 50 MCQs + 7 TBSs; ISC 82 MCQs + 6 TBSs; TCP 68 MCQs + 7 TBSs. Scores are a weighted blend: 50% MCQ / 50% TBS for all sections except ISC (60% MCQ / 40% TBS). The scaled score runs 0-99 with 75 to pass; it is not a percentage and is not curved. MCQs test recognition across the blueprint and are delivered in two testlets, with the second testlet difficulty keyed to your first-testlet performance (multi-stage adaptive within the section). TBSs drop you into a realistic engagement — workpapers, reconciliations, journal entries, and research in the authoritative literature — and test application, not recall. Each TBS testlet may bundle several sub-tasks; the REG section carries eight TBSs, the most of any section. Understanding this architecture changes how you study: you cannot pass on MCQs alone when simulations are half the weight, so every section study plan must reserve real time for full, timed TBS practice in the actual exam software.',
    types: [
      { name: 'Multiple-choice questions (MCQs)', share: '~50% of score (60% for ISC)', detail: 'Two testlets per section; delivered in small batches, with the second testlet difficulty keyed to your first-testlet performance (multi-stage adaptive within the section). Test application and recognition, not trivia.' },
      { name: 'Task-based simulations (TBSs)', share: '~50% of score (40% for ISC)', detail: 'Three testlets per section (REG has up to 8 TBSs). Realistic scenarios using documents, reconciliations, and the authoritative literature; require you to produce or edit entries, memos, or computations.' }
    ],
    samples: [
      { prompt: 'An auditor identifies a significant deficiency in a client\'s internal control over cash disbursements. Which of the following is the auditor\'s required communication?', options: ['A. Communicate in writing to those charged with governance within 60 days of the report release date', 'B. Communicate orally to the audit committee before the next interim review', 'C. Disclose the deficiency only in the notes to the financial statements', 'D. No communication is required for a significant deficiency'], answer: 'A', explanation: 'A is correct: significant deficiencies and material weaknesses must be communicated in writing to those charged with governance, generally within 60 days of the report release date. B is wrong because the required form is written, not merely oral. C is wrong because internal-control communication is a separate governance letter, not a note disclosure. D is wrong — communication is mandatory.' },
      { prompt: 'A taxpayer sells land (a capital asset) with an original basis of $40,000 for $100,000, receiving $20,000 cash and the buyer\'s note for $80,000. What is the taxpayer\'s realized gain?', options: ['A. $0', 'B. $60,000', 'C. $80,000', 'D. $100,000'], answer: 'B', explanation: 'B is correct: realized gain = amount realized ($100,000 total consideration) minus adjusted basis ($40,000) = $60,000. The installment form (cash + note) affects recognition timing under §453, not the realized amount, so C and D confuse proceeds composition with gain. A ignores the gain entirely.' },
      { prompt: 'Under the conceptual framework, which qualitative characteristic makes financial information useful by allowing users to confirm or correct prior expectations?', options: ['A. Relevance', 'B. Faithful representation', 'C. Confirmatory value', 'D. Comparability'], answer: 'C', explanation: 'C is correct: confirmatory value (part of relevance) helps users confirm or correct past assessments. A is the broader component; B is a separate fundamental characteristic about faithfully depicting; D is an enhancing characteristic, not the confirming/feedback function.' }
    ],
    note: 'Samples are editor-written illustrations of the published 2026 CPA Blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'CPA Exam sections are delivered year-round at Prometric test centers (Core sections under continuous testing; Discipline sections in quarterly windows). Arrive early: the seated time includes a tutorial, the exam, and a break, and late arrival by 30 minutes or more forfeits your fee. Know the check-in and break rules before you go. Check-in requires two IDs (at least one government-issued with photo and signature) that match your NASBA registration name exactly — a mismatched middle initial or name change is the most common cause of being turned away. Expect a photograph and a palm-vein or signature biometric scan, then a locker for everything you brought. The exam itself opens with a tutorial; use it to confirm the calculator and literature tools. One optional break is built into the Core sections and stops the clock only if taken as scheduled — an unscheduled break keeps the clock running, which is brutal given TBS testlets run long. Scratch boards are provided and collected; nothing personal may enter the room. After the exit survey you get a receipt; Core scores release in 1-2 weeks, Discipline scores about six weeks after the window closes.',
    bring: [
      'Two forms of ID, at least one government-issued with photo and signature, matching your NASBA registration exactly (name must match)',
      'Your Prometric confirmation number / appointment email'
    ],
    leave: [
      'Phones, smartwatches, bags, books, notes, and calculators (a standard calculator is provided on-screen)',
      'Outerwear with large pockets, hats, and jewelry that could trigger the metal detector — stored in a locker'
    ],
    timeline: [
      { time: '30 min before', detail: 'Arrive; check in at the front desk with ID.' },
      { time: 'Check-in', detail: 'ID verification, digital photo, and a palm-vein or signature biometric scan.' },
      { time: 'Lockers', detail: 'Store all personal items; keep only your ID and locker key.' },
      { time: 'Testing room', detail: 'Begin tutorial, then the five testlets; one optional break (Core) is built in — TBS testlets run longer, so budget time.' },
      { time: 'After', detail: 'Exit survey; receive a receipt. Core scores release in 1-2 weeks; Discipline scores release about 6 weeks after the quarterly window closes.' }
    ],
    rules: [
      'Scratch paper / erasable boards are provided and collected; you may not bring your own.',
      'The optional break stops the clock only if taken as scheduled; an unscheduled break keeps the clock running.',
      'Arriving more than 30 minutes late forfeits the full exam fee.',
      'You may not access personal items or communicate during the exam except with proctor permission.'
    ],
    afterwards: 'Core section scores typically post in 1-2 weeks; Discipline scores post about six weeks after the quarterly testing window closes. You receive a Candidate Performance Report if you fail, broken down by content area and skill level.'
  }
};

export default data;
