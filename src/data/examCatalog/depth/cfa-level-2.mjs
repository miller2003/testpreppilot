const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Finance & investment certifications desk',
    bio: 'This desk covers the CFA Program and related investment credentials. Exam structure, fees and pass rates come from CFA Institute\'s published program pages and candidate resources, which are revised each year; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CFA Institute\'s Level II exam pages, the 2026 Level II curriculum weighting, and BLS OOH Financial Analysts (SOC 13-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,350 median for financial and investment analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CFA charterholder" — the charter is a credential, not a job, and holders work across portfolio management, equity and credit research, risk, wealth management and corporate finance. The closest official BLS occupation is Financial and Investment Analysts, SOC 13-2051, which had a May 2024 median wage of $101,350, with the lowest 10 percent under $62,410 and the highest 10 percent over $180,550. The spread is wide because the occupation spans junior reporting roles to senior buy-side and sell-side analysis, and the charter matters most at the upper end of that distribution, where it is either required or strongly preferred for portfolio-manager and research tracks. BLS counted 368,500 financial analyst jobs in 2024 and projects 6 percent growth to 389,600 by 2034, faster than the average for all occupations, with roughly 29,900 openings a year. The limitation to state plainly: this median covers everyone in the occupation, chartered or not, and the charter\'s wage premium is documented in CFA Institute member compensation surveys, which are member self-reports rather than a BLS series, so we do not present them as government data. Read the BLS number as the floor of the relevant labour market, not as the charter\'s value, and note that Level II is an intermediate gate: the analyst-wage discussion properly applies to charterholders and near-charterholders, not to Level I or II candidates still in the pipeline.',
    rows: [
      { label: 'Median annual wage, financial and investment analysts', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $62,410', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Over $180,550', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Projected openings per year', value: '~29,900', note: 'BLS OOH, SOC 13-2051, 2024-2034' }
    ],
    growth: 'BLS projects 6 percent growth for financial analysts from 2024 to 2034, about 29,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Financial Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm' }
  },
  passRate: {
    headline: 'CFA Level II publishes pass rates — roughly 44-47% in recent windows (2024-2025)',
    summary: 'CFA Institute is one of the few credentialing bodies that publishes cohort pass rates for every examination window, so the Level II pass rate is official data rather than rumour. Recent published figures have clustered in the mid-40s: the August 2024 window reported about 47 percent, and the November 2024 window reported about 39 percent, with other 2024-2025 windows ranging in the low-to-mid 40s. The long-run average is broadly similar — Level II has historically been the level with the lowest pass rates of the three at times, and the second-lowest at others. What this means for candidates is not "the exam is designed to fail you" but that the passing standard is a fixed, psychometrically calibrated line: CFA Institute sets the minimum passing score using a standard-setting process, and the pass rate fluctuates with candidate quality in each window. Practically, a candidate should target performance well above the historical pass line on mock exams — scoring in the 70 percent-plus range on practice items is the commonly cited readiness heuristic — because the real exam rewards depth across the full curriculum, and the item-set (vignette) format punishes shallow preparation. The single most important number, though, is the pass rate of candidates who complete the full mock-exam programme, which is consistently far higher than the overall rate in CFA Institute\'s own candidate surveys.',
    source: { label: 'CFA Institute - Level II exam results and pass rates', url: 'https://www.cfainstitute.org/en/programs/cfa/exam/results' },
    caveat: 'Pass rates are published per window and fluctuate with candidate quality; the figures above are 2024-2025 reported windows, not a guarantee of future rates.'
  },
  studyPlan: {
    summary: 'CFA Level II shifts from the breadth of Level I to depth: the curriculum is organised into ten topic areas, and the exam is delivered entirely as item sets — vignettes followed by four to six questions each — across two sessions of 2 hours 12 minutes, for a total of 88 items over about 4.4 hours of testing. The heavy topics by curriculum weight are Financial Statement Analysis, Equity Investments, Fixed Income and Derivatives, with Ethics as a smaller but mandatory block that appears in every session. A defensible plan allocates 250 to 350 hours over roughly 12 to 16 weeks. The first phase (weeks 1-6) is concept mastery with the official curriculum or a major prep provider, reading the assigned readings and doing the end-of-chapter questions immediately; the second phase (weeks 7-10) is topic-specific drilling, especially the item-set format, because learning to extract facts from a vignette is a skill of its own; the third phase (weeks 11-14) is mock exams — two full mock exams minimum, ideally three — followed by error-log review of the official learning outcome statements you keep missing. The format difference is the biggest adjustment from Level I: time management inside each item set matters, because the vignette must be read once, efficiently, and then answered as a block.',
    totalHours: '250-350 hours over 12-16 weeks',
    weeks: [
      { label: 'Weeks 1-6', focus: 'Concept mastery', tasks: ['Work the curriculum readings for the ten topic areas', 'Do end-of-chapter questions immediately after each reading', 'Build formula sheets for FSA, fixed income and derivatives'], hours: 140 },
      { label: 'Weeks 7-10', focus: 'Item-set drilling', tasks: ['Drill vignette-based question sets by topic', 'Practise extracting facts from the vignette before reading the questions', 'Re-study Ethics with the Code and Standards'], hours: 90 },
      { label: 'Weeks 11-14', focus: 'Mocks and error review', tasks: ['Two to three full mock exams under timed conditions', 'Review every miss against the learning outcome statements', 'Final formula-sheet and Ethics pass in the last week'], hours: 80 }
    ],
    variants: [
      { label: 'Level I recently passed', detail: 'You can compress the ethics review and focus new time on depth topics; the vignette format is the real new skill.' },
      { label: 'Working full time', detail: 'Stretch to 16-18 weeks at 18-20 hours per week; protect the mock-exam phase over the reading phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant skill at Level II is reading vignettes efficiently, and the strongest preparation is to practise the item-set format deliberately: read the vignette once, mark the quantitative facts, then answer the block of questions — most candidates who run out of time at Level II are re-reading vignettes two or three times. Second, prioritise by curriculum weight and by your mock performance: Financial Statement Analysis, Equity and Fixed Income carry the largest weights, and Ethics, despite its smaller weight, is the highest-yield improvement for most candidates because it is rule-based and learnable in a few focused sessions. Third, do the official end-of-chapter and online learning questions even if you use a prep provider, because the item sets are built from the curriculum and provider questions drift from the source material. Fourth, build your own formula sheets rather than buying someone else\'s — the act of compressing the material is where the learning happens, and your sheet is what you will review in the final week. Fifth, take mocks seriously: CFA Institute\'s own candidate surveys consistently show that candidates who complete the mock programme pass at far higher rates, so treat the two full mocks as non-negotiable appointments, and schedule them three weeks and one week out respectively.',
    items: [
      { title: 'Practise vignette reading', detail: 'One pass through the vignette, facts marked, then answer the block; never re-read mid-set.' },
      { title: 'Weight by topic importance', detail: 'FSA, Equity and Fixed Income carry the biggest weights; Ethics is the fastest win.' },
      { title: 'Do the official questions', detail: 'The item sets come from the curriculum; provider-only prep drifts from the source.' },
      { title: 'Build your own formula sheets', detail: 'Compressing the material yourself is where the learning happens.' },
      { title: 'Complete two full mocks', detail: 'Mock completers pass at far higher rates per CFA Institute candidate surveys.' }
    ]
  },
  resourceComparison: {
    summary: 'Level II prep splits between the official curriculum and third-party providers, and most serious candidates use both. The official curriculum is the source of truth for item-set construction and is included in the registration fee as the digital learning ecosystem; it is long, so few candidates read every page, and most supplement it. The three major providers — Kaplan Schweser, Wiley and CFA Institute\'s own prep packages — offer condensed notes, video, question banks and mocks at prices from roughly $350 to $1,200; Schweser\'s notes are the most widely used compression, while Wiley\'s offering competes on video depth. Question-bank products can be bought separately. Free options — the CFA Institute candidate forum, the free mocks that come with registration, and YouTube topic reviews — are genuinely useful for targeted gaps. The total registration fee is about $1,000 to $1,600 depending on registration window, and prep adds several hundred more; a realistic total budget is $1,400 to $2,800. Prices below are list prices as of mid-2026 and change annually; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CFA Institute curriculum + ecosystem', values: ['Included with registration', 'Digital readings + official questions + free mocks', 'The source of truth; do the official questions regardless'] },
      { label: 'Kaplan Schweser Level II', values: ['$500-$1,200', 'Condensed notes + video + QBank + mock exams', 'Candidates who want the standard compression'] },
      { label: 'Wiley Level II', values: ['$400-$1,000', 'Video lectures + notes + question bank', 'Video-first learners'] },
      { label: 'Standalone question banks', values: ['$200-$400', 'Online item-set drilling', 'Extra volume after the official questions'] },
      { label: 'Free forum and topic reviews', values: ['$0', 'Candidate forum, YouTube', 'Targeted gap-filling between paid blocks'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; registration fees vary by window; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Level II mistake is carrying Level I habits into the new format: studying for recognition-level recall when the exam demands application inside vignettes, then running out of time on the item sets. The fix is to switch to vignette drilling early in the plan. The second mistake is reading the vignette question-by-question instead of once as a block, which triples reading time and causes careless misreads of the quantitative facts. Third, candidates over-weight the topics they enjoy and under-weight the largest ones; the exam follows the curriculum weights, so FSA and Fixed Income cannot be skipped. Fourth, many candidates ignore the official questions in favour of provider questions and are then surprised that the real item sets feel different; the curriculum questions are the closest thing to the exam. Fifth, treating mocks as optional is the highest-cost error — candidates who skip the mock programme historically pass at materially lower rates per CFA Institute\'s own surveys. Finally, last-week cramming of new topics instead of reviewing the formula sheet and Ethics loses more points than it gains.',
    items: [
      { mistake: 'Studying for recognition instead of application', fix: 'Switch to vignette drilling early; the exam tests application inside case facts.' },
      { mistake: 'Reading vignettes question-by-question', fix: 'Read the vignette once, mark the facts, then answer the block.' },
      { mistake: 'Skewing study toward favourite topics', fix: 'Follow the curriculum weights; FSA and Fixed Income are non-negotiable.' },
      { mistake: 'Skipping the official questions', fix: 'The item sets are built from the curriculum; do those questions first.' },
      { mistake: 'Treating mocks as optional', fix: 'Schedule two full mocks at weeks 11 and 13; mock completers pass at far higher rates.' }
    ]
  },
  questionTypes: {
    summary: 'Level II is 100 percent item sets: each set opens with a vignette — a company description, financial statements, a portfolio scenario or a research note — followed by four to six multiple-choice items, with 44 item sets and 88 items total across two 2-hour-12-minute sessions. The vignette format is the defining feature of the level: every item in a set draws on the same case facts, so a misread of one number can cascade across the whole set. Item types within sets include calculation items (compute a ratio, an option value or a portfolio statistic), application items (choose the correct analytical treatment under the curriculum), and Ethics items (identify the violation of the Code and Standards). Samples are editor-written illustrations of the published blueprint, not live exam items; they show the case-plus-block structure candidates must master.',
    types: [
      { name: 'Calculation items within vignettes', share: 'Majority of quantitative sets', detail: 'Compute ratios, valuations, option or fixed-income analytics from case data.' },
      { name: 'Application / judgement items', share: 'Large minority', detail: 'Select the correct treatment, conclusion or recommendation under the curriculum.' },
      { name: 'Ethics items', share: 'Roughly 10-15% of total', detail: 'Identify Code and Standards violations in described conduct.' }
    ],
    samples: [
      {
        prompt: 'A company reports revenue of $500 million, COGS of $300 million, operating expenses of $100 million and interest expense of $20 million, with a 25% tax rate. Its operating profit margin is closest to:',
        options: ['A. 16%', 'B. 20%', 'C. 25%', 'D. 40%'],
        answer: 'B',
        explanation: 'Operating profit is revenue minus COGS minus operating expenses: 500 - 300 - 100 = $100 million, and 100 / 500 = 20%. Interest is below the operating line, and the tax rate is irrelevant to operating margin.'
      },
      {
        prompt: 'Under the CFA Institute Code and Standards, an analyst who relies on a draft research report written by a colleague should:',
        options: ['A. Cite only the final report in client communications', 'B. Take responsibility for the content and cite the source appropriately', 'C. Disclose the colleague\'s draft only if asked', 'D. Not use the report because it is a draft'],
        answer: 'B',
        explanation: 'Standards require members to take responsibility for the content they use in their work product and to cite sources appropriately. Using a colleague\'s draft is acceptable with proper attribution and responsibility; hiding it or refusing it outright misreads the standard.'
      },
      {
        prompt: 'An investor buys a bond at 98.5 with a 5% coupon and holds it for one year, selling at 99.2. The holding period return is closest to:',
        options: ['A. 5.00%', 'B. 5.71%', 'C. 5.79%', 'D. 6.15%'],
        answer: 'C',
        explanation: 'Total return = coupon (5.0) plus price change (99.2 - 98.5 = 0.7), divided by the purchase price: 5.7 / 98.5 = 0.05787, or about 5.79%. Answers that ignore the price gain (A), misplace the denominator (B) or mis-add (D) are the common traps.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'Level II is a computer-based exam taken at a Pearson VUE centre during set windows (February, May, August and November in most years). You sit two sessions of 2 hours 12 minutes each, separated by a scheduled break, for roughly 4.4 hours of testing on 88 items. Bring your valid passport (the only accepted ID for CFA exams) and your appointment confirmation; personal electronics, notes and bags go in the locker. Arrive 30 minutes early — late arrivals cannot enter. The computer presents the item sets in order, and you can flag and navigate between questions within the available time; there is no pause during a session. Bring a calculator from the approved list (Texas Instruments BA II Plus or HP 12C families) and know how to use it — the exam software has no financial calculator built in. Results are released approximately 6 to 8 weeks after the window closes, through your CFA Institute account, along with your banded performance by topic. On a pass, you register for Level III; on a fail, you retake in a later window. The afterwards: Level II is the middle gate of three, and the credential — and the analyst-market wage it unlocks — comes only after passing Level III and completing the required work experience.',
    bring: ['Valid passport (the only accepted ID for CFA exams)', 'Approved calculator (TI BA II Plus or HP 12C family) and batteries', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes, books and formula sheets', 'Bags and personal items beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Check in with passport, store belongings, complete security checks.' },
      { time: 'Session 1', detail: '2h12m of item sets; pace roughly 3 minutes per item including vignette reading.' },
      { time: 'Break', detail: 'Scheduled break between sessions; do not discuss the exam content in the waiting area.' },
      { time: 'Session 2', detail: '2h12m of item sets; finish, then confirm submission.' },
      { time: 'Afterwards', detail: 'Results post to your CFA Institute account 6-8 weeks later with banded topic performance.' }
    ],
    rules: [
      'Passport required; other IDs are not accepted',
      'Only approved calculators may be brought into the room',
      'No personal electronics; no unscheduled pauses during a session'
    ],
    afterwards: 'On a pass, register for Level III. On a fail, retake in a later window. The charter requires passing all three levels plus the work-experience and ethics requirements before you may use the CFA designation.'
  }
};

export default data;
