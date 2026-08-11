const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers FINRA and NASAA qualification exams. Fees and exam structure come from the FINRA qualification-exam pages and the NASAA exam outlines, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a regulator does not publish a figure, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against FINRA\'s Series 6 qualification page, the NASAA Series 6 content outline, and BLS OOH Securities, Commodities, and Financial Services Sales Agents (SOC 41-3031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$78,140 median for securities, commodities and financial services sales agents (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Series 6 representative". The Series 6 is a product licence: it authorises a sponsored individual to sell mutual funds, variable annuities, variable life insurance, unit investment trusts and 529 plans. The closest official BLS occupation is Securities, Commodities, and Financial Services Sales Agents, SOC 41-3031, which had a May 2024 median wage of $78,140. That figure matters as a floor, not a ceiling: pay in this field is heavily commission- and bonus-driven, so the BLS wage base understates what a producing rep earns and the distribution is extremely wide, from part-time bank-channel reps to producers with seven-figure books. BLS counted 514,500 jobs in this occupation in 2024 and projects about 3 percent growth from 2024 to 2034, roughly as fast as the average for all occupations, with about 38,100 openings a year — almost all from replacement need rather than new jobs. We also show the Financial and Investment Analysts series (SOC 13-2051) in the adjacent row because many Series 6 holders move from selling packaged products into research, advisory or back-office analysis roles; that series had a May 2024 median of $101,350. The honest framing is that the Series 6 is a gate, not a career: it lets you transact in a narrow product set while sponsored by a FINRA member firm, and the wage you are benchmarking is the role, not the certificate.',
    rows: [
      { label: 'Median annual wage, securities & financial services sales agents', value: '$78,140', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Below $41,090', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $213,050', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Median, financial and investment analysts (adjacent role)', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' }
    ],
    growth: 'BLS projects 3 percent growth for SOC 41-3031 from 2024 to 2034, with about 38,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Securities, Commodities, and Financial Services Sales Agents', url: 'https://www.bls.gov/ooh/sales/securities-commodities-and-financial-services-sales-agents.htm' }
  },
  passRate: {
    headline: 'FINRA publishes no pass rate — it does publish the cut score: 70% (35 of 50 scored items)',
    summary: 'FINRA does not publish cohort pass rates for the Series 6, and third-party surveys of pass rates are not official data, so we do not treat them as authoritative. What the regulator does publish is the passing standard: the Series 6 currently contains 55 items, of which 50 are scored and 5 are unscored pretest questions, and a candidate must answer at least 35 of the 50 scored items correctly — 70 percent — to pass. The exam window is 90 minutes, delivered by computer at Prometric testing centres. Two structural points matter more than any pass-rate statistic. First, the Series 6 is a co-requisite stack: since 2018 a candidate must also pass the Securities Industry Essentials (SIE) exam, and most firms require the relevant state exam (typically the Series 63) before a licence is activated in that state. Second, the licence is only meaningful while you are sponsored by a FINRA member firm; it lapses when you leave the industry, and continuing-education requirements apply while you are registered. The practical implication for preparation is that pass/fail is binary and the pass line is low enough that a disciplined candidate who scores consistently above 80 percent on practice exams is in a strong position, but the exam rewards breadth across the content outline rather than deep recall of any one product.',
    source: { label: 'FINRA - Series 6 Investment Company and Variable Contracts Products Representative Exam', url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series6' },
    caveat: 'FINRA publishes the passing score but no pass rate; any percentage circulating online is a third-party survey, not regulator data.'
  },
  studyPlan: {
    summary: 'The Series 6 content outline is organised into five functional areas, and roughly 62 percent of scored items sit in the recommendations area: packaged products (mutual funds, variable annuities, variable life, UITs and 529 plans), how they are structured, how they are valued, and suitability analysis for retail customers. The remaining areas cover equity and debt securities fundamentals (because you must understand what sits inside a fund portfolio), rules and regulations governing the sale of packaged products, and communications with customers. A realistic plan runs about 70 to 90 hours across four to six weeks, heavier on the product chapters because the exam asks scenario questions about NAV, sales charges, surrender periods and suitability rather than pure recall. Week one and two should build the product foundation chapter by chapter with written notes; week three should shift to suitability and regulatory rules; weeks four through six should be dominated by question banks, one full-length timed practice exam each weekend, and error-log review. Because the exam window is only 90 minutes for 55 items, pacing is not the primary challenge — coverage is. Candidates who pass tend to be the ones who have seen the exam-style phrasing of suitability questions in practice long before the real sitting.',
    totalHours: '70-90 hours over 4-6 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Packaged products foundation', tasks: ['Work the mutual fund chapter: NAV, loads, classes A/B/C', 'Variable annuities: accumulation vs payout, surrender charges', 'UITs and 529 plans: mechanics and taxation basics'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Suitability and regulation', tasks: ['Suitability analysis frameworks and client profiles', 'FINRA conduct rules and communications with customers', 'Equity/debt fundamentals needed to read fund portfolios'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Question-bank drill and mock exams', tasks: ['500+ practice questions across all areas', 'Two full-length timed mocks, scored and reviewed', 'Error log: re-read the outline section behind every miss'], hours: 30 }
    ],
    variants: [
      { label: 'SIE already passed', detail: 'You can compress weeks 1-2 because the SIE covers securities fundamentals; focus straight onto packaged products and suitability.' },
      { label: 'Series 63 stacked', detail: 'Many candidates sit Series 63 within two weeks of Series 6; schedule them together because the state-law material is compact and memorisation-heavy.' }
    ]
  },
  prepStrategies: {
    summary: 'The single most effective move for the Series 6 is to shift from reading to question practice early, because the exam tests how product features behave in suitability scenarios rather than how they are defined. Treat every missed question as a curriculum pointer: when you miss a variable-annuity surrender-charge item, re-read that section of the outline and write out the rule in your own words before moving on. Second, learn the product features as comparison tables — fund classes, annuity phases, UIT rollover mechanics, 529 plan rules — because the exam often asks you to pick the product feature that matches a described client situation. Third, practise the regulatory distinction between what an agent may say and what is prohibited in customer communications; these items are notoriously answerable only if you have seen the phrasing before. Fourth, take at least two full-length timed exams under test conditions, including the 90-minute window, and review every item you flagged even if you got it right. Finally, be realistic about the sponsor requirement: you cannot take the Series 6 as a hobby in most cases, because sitting generally requires a firm to file a U4 on your behalf, so time your study with your onboarding window and confirm the firm covers the fee.',
    items: [
      { title: 'Drill suitability scenarios', detail: 'The exam is scenario-heavy; convert each product rule into a "which client fits" question.' },
      { title: 'Compare products side by side', detail: 'Funds, annuities, UITs and 529s are tested by contrast; build comparison tables.' },
      { title: 'Run two timed mocks', detail: 'Ninety minutes is short enough that a full practice sitting is essential.' },
      { title: 'Tie study to the sponsorship window', detail: 'Confirm the U4 filing and fee reimbursement with your firm before you invest in prep.' }
    ]
  },
  resourceComparison: {
    summary: 'Prep options for the Series 6 fall into four buckets: the free regulator outline, structured courses, question banks, and full-featured packages. The FINRA outline and the NASAA content outline together cost nothing and are the authoritative list of what can appear, but they are not instructional — you need a course or a book to learn the product mechanics. Third-party courses such as Kaplan, STC, and Pass Perfect dominate the market; they bundle video lectures, a printed book, practice questions and simulated exams, and their flagship packages are the most expensive option but the only one that fully mimics the exam experience. Mid-priced question-bank-only products work well for candidates who already understand products from a firm training programme and just need volume. Free and cheap options — quiz sites, YouTube playlists, vendor trial exams — are useful for orientation but not sufficient alone, because the exam phrasing for suitability items is specific. A defensible budget is $150 to $500 depending on whether you buy a package or assemble a book-plus-bank combo. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA/NASAA outlines', values: ['Free', 'PDF outlines', 'Authoritative scope; syllabus mapping'] },
      { label: 'Kaplan Series 6', values: ['$300-$450', 'Book + video + QBank + simulated exams', 'Structured learners who want the full suite'] },
      { label: 'STC Series 6', values: ['$350-$450', 'Textbook + online lectures + exam simulator', 'Firm-sponsored candidates on a deadline'] },
      { label: 'Question-bank only', values: ['$100-$250', 'Online adaptive questions', 'Candidates who already know the products'] },
      { label: 'Free quiz sites', values: ['$0', 'Web quizzes and YouTube', 'Orientation and vocabulary before a course'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common failure pattern on the Series 6 is studying definitions instead of suitability logic: candidates memorise what a variable annuity is and then miss the items that ask which product fits a 55-year-old with a 15-year horizon. The fix is to restructure study around client-scenario drills. The second mistake is ignoring the unscored items: the exam contains five pretest questions that do not count, but you cannot tell which they are, so you must answer all 55 as if scored — wasting energy trying to identify pretests is self-defeating. Third, many candidates neglect the regulatory and communications material because it feels like smaller share of the outline; in practice those items are where passing candidates separate from failing ones, because they reward precise wording rather than broad familiarity. Fourth, candidates routinely misread suitability items by focusing on the product and ignoring the client facts — age, income, liquidity needs, risk tolerance — which are the actual decision inputs. Finally, going into the exam without a single timed sitting leaves pacing unexamined; at 90 minutes for 55 items it is a comfortable window, but only if you have experienced it once.',
    items: [
      { mistake: 'Memorising definitions instead of suitability logic', fix: 'Convert every product rule into a "which client does this fit" question and drill those.' },
      { mistake: 'Trying to identify the 5 unscored pretest items', fix: 'Treat all 55 items as scored; pretests are indistinguishable by design.' },
      { mistake: 'Skipping communications and regulatory rules', fix: 'These items reward precise wording; read the exact language, not summaries.' },
      { mistake: 'Answering product-first instead of client-first', fix: 'Read suitability items for the client facts first; the product choice follows.' },
      { mistake: 'Never running a timed sitting', fix: 'Do at least two full 90-minute mocks before exam day.' }
    ]
  },
  questionTypes: {
    summary: 'The Series 6 is entirely multiple-choice and delivered by computer. Most items are single-answer, and a meaningful share are scenario-based: you get a client profile and must pick the product, feature or recommendation that fits. The exam also asks regulatory items that test precise rule knowledge — what an agent may or may not say in a communication, what must be disclosed, and what triggers a suitability obligation. A minority of items are pure knowledge questions on product mechanics: NAV calculation, sales-charge classes, surrender schedules, tax treatment of 529 withdrawals. There are no performance-based or simulation tasks on the Series 6. The samples below are editor-written illustrations of the published blueprint, not live exam items; they show the shape of the real questions, including the client-first phrasing of suitability items and the precision required on regulatory items.',
    types: [
      { name: 'Suitability / recommendations', share: 'Roughly 62%', detail: 'Client scenario plus product or recommendation choice; the largest single block of items.' },
      { name: 'Product mechanics', share: 'Roughly 25%', detail: 'NAV, loads, annuity phases, UIT rollovers, 529 rules.' },
      { name: 'Rules and communications', share: 'Roughly 13%', detail: 'FINRA conduct rules, disclosure and prohibited sales practices.' }
    ],
    samples: [
      {
        prompt: 'A 45-year-old investor has $30,000 to invest for college expenses beginning in 12 years. She wants tax-advantaged growth and will not need the money before then. Which recommendation is most suitable?',
        options: ['A. A mutual fund held in a taxable brokerage account', 'B. A 529 plan named with the student as beneficiary', 'C. A non-qualified variable annuity', 'D. A unit investment trust with a 2-year maturity'],
        answer: 'B',
        explanation: 'The 529 plan is designed for education savings with tax-advantaged growth and penalty-free qualified withdrawals, which matches the 12-year college horizon. The taxable account and non-qualified annuity do not target the education purpose, and the short-maturity UIT misaligns with a 12-year time frame.'
      },
      {
        prompt: 'Which statement about Class A mutual fund shares is correct?',
        options: ['A. They impose an ongoing higher 12b-1 fee than Class C shares in most cases', 'B. They charge a front-end sales load and typically lower annual expenses', 'C. They are only available to institutional investors', 'D. They convert to Class B shares automatically after eight years'],
        answer: 'B',
        explanation: 'Class A shares carry a front-end sales charge and, as the load is paid upfront, usually lower annual expenses (including a lower 12b-1 fee) than Class B or C shares. The other statements misstate Class C fee structures, availability, and conversion mechanics.'
      },
      {
        prompt: 'An agent learns that a prospect has stated a long investment horizon and high risk tolerance, then recommends a product that is appropriate but is subject to a surrender charge the prospect did not ask about. What is the agent\'s obligation?',
        options: ['A. None, because the recommendation is suitable', 'B. Recommend a different product regardless of suitability', 'C. Disclose the surrender charge and confirm the recommendation remains suitable', 'D. Only discuss the surrender charge if the prospect asks'],
        answer: 'C',
        explanation: 'Suitability is a baseline, not a ceiling: the agent must disclose material features such as surrender charges, and the recommendation must remain appropriate after full disclosure. Answer A ignores the disclosure duty and D treats disclosure as optional, which it is not.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'On exam day you check in at a Prometric testing centre (or the firm\'s designated venue) with a valid government-issued photo ID, and the computer presents 55 multiple-choice items with a 90-minute clock. There is no scheduled break; the session includes a short tutorial before the exam clock starts. You receive a preliminary pass/fail result immediately on screen, and the official result is filed to your firm\'s registration record through the FINRA system. If you fail, the standard retake wait is 30 days, and after three consecutive failures the wait extends to 180 days; your firm controls scheduling, so coordinate retakes through your compliance department. Bring nothing but your ID and confirmation — phones, notes and smart devices go in the locker. Arrive 30 minutes early; late arrival forfeits the appointment and fee. A comfortable per-question pace is about 95 seconds, leaving time to flag and revisit uncertain items. The afterwards matters as much as the pass: your Series 6 only activates when the state exam (typically Series 63) is also passed and the firm\'s registration is effective, and it must be renewed with annual continuing education while you remain registered. Plan the stack, not just the single exam.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation and any testing-centre paperwork required by your firm'],
    leave: ['Phone, smartwatch and all electronics', 'Notes, books and study materials', 'Wallet contents beyond your ID (centre policy varies)'],
    timeline: [
      { time: '45 minutes before', detail: 'Arrive at the centre; check in and store belongings in the provided locker.' },
      { time: 'At the seat', detail: 'Complete the tutorial, then the 90-minute exam clock starts with item one.' },
      { time: 'Pacing check', detail: 'About 25 items should be done by the 40-minute mark; flag anything uncertain and keep moving.' },
      { time: 'After submit', detail: 'Preliminary pass/fail appears on screen; the official result goes to your firm\'s registration record.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'No breaks — the clock runs continuously',
      'Preliminary results are on screen; official results post through your firm'
    ],
    afterwards: 'On a pass, complete any state exam (typically Series 63) and have the firm activate your registration. On a fail, wait 30 days (180 after three consecutive failures) and retake. While registered, complete FINRA continuing education each year to keep the licence current.'
  }
};

export default data;
