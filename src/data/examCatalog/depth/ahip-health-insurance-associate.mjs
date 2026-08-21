const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Insurance & healthcare coverage desk',
    bio: 'This desk covers insurance and Medicare-related credentials. Exam structure and certification requirements come from AHIP\'s published program pages, which are revised annually around each Annual Election Period; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AHIP\'s certification program pages, Medicare Advantage and Part D product training requirements, and BLS OOH Insurance Sales Agents (SOC 41-3021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$60,370 median for insurance sales agents (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AHIP-certified agent" — the AHIP Health Insurance Associate credential certifies that an agent understands Medicare and health insurance products well enough to sell them compliantly, and the wage question belongs to the occupation the agent performs. The closest official BLS occupation is Insurance Sales Agents, SOC 41-3021, which had a May 2024 median wage of $60,370, with the lowest 10 percent under $30,680 and the highest 10 percent above $131,170. Read the median carefully: compensation for health and Medicare agents is dominated by commissions and renewals, so the BLS wage base understates what producing agents earn, and income varies enormously with product mix and season — Medicare annual election period business concentrates a large share of the year\'s volume into the fall. BLS counted 453,700 insurance sales agent jobs in 2024 and projects 8 percent growth from 2024 to 2034, faster than the average for all occupations, with about 58,600 openings a year, most from replacement need as experienced agents retire. The honest framing: the AHIP credential is a market-access gate — most carriers require it before a producer may sell their Medicare products — and the wage you benchmark is the agent occupation, earned only while the credential and the carrier appointments are current.',
    rows: [
      { label: 'Median annual wage, insurance sales agents', value: '$60,370', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $30,680', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $131,170', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Projected openings per year', value: '~58,600', note: 'BLS OOH, SOC 41-3021, 2024-2034' }
    ],
    growth: 'BLS projects 8 percent growth for insurance sales agents from 2024 to 2034, about 58,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Insurance Sales Agents', url: 'https://www.bls.gov/ooh/sales/insurance-sales-agents.htm' }
  },
  passRate: {
    headline: 'AHIP sets an 80% passing standard per module and does not publish cohort pass rates',
    summary: 'AHIP does not publish cohort pass rates for its certification exams, so any percentage you see online is a third-party estimate, not official data. What AHIP does publish is the passing standard and the format: each module exam contains 50 multiple-choice questions with a 60-minute time limit, and a candidate must answer at least 80 percent correctly to pass the module. The certification is delivered online and is typically taken at home, which makes it structurally different from proctored credential exams: the pass standard is meaningful because the material is product-specific and current-year, and because carriers independently audit producer certification before annual election period appointments. Two things matter more than pass-rate statistics. First, the certification is renewed annually — AHIP\'s health insurance certifications are year-specific, so a certification earned for one plan year must be renewed for the next, with the exams rebuilt around that year\'s product rules, premiums and formularies. Second, most Medicare Advantage and Part D carriers require their own product-specific training and exams in addition to AHIP\'s core certification, so the effective certification burden for a working agent includes both layers. The practical implication: study the current-year material, not last year\'s, and budget a dedicated study block each fall.',
    source: { label: 'AHIP - Health Insurance Associate certification program', url: 'https://www.ahip.org/health-insurance-associate' },
    caveat: 'AHIP publishes the 80% module standard but no cohort pass rates; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The AHIP certification is modular: candidates complete the core Health Insurance Associate curriculum and then the product-specific modules relevant to their work — Medicare Advantage, Medicare Part D, and in some cases supplemental or marketplace products. Each module\'s exam is 50 questions in 60 minutes with an 80 percent pass line, and the material is delivered through AHIP\'s online learning portal, which includes the required reading and practice assessments. A realistic plan is 15 to 30 hours per certification cycle depending on how many product modules you need, concentrated in the six weeks before the Annual Election Period (AEP) opens, because carriers expect certification in place before the selling season. Week one should cover the Medicare framework: the parts of Medicare, enrollment periods, eligibility and the government\'s marketing rules. Week two should cover the product-specific module: Medicare Advantage plan design, cost-sharing, star ratings and the annual notice of change. Week three should cover Part D: formularies, tiers, the coverage gap and the late-enrollment penalty. The final week should be practice assessments and a full run of each module exam at the 60-minute, 80-percent standard. Because the material is current-year specific, study the live portal content rather than archived prep from prior years.',
    totalHours: '15-30 hours per certification cycle',
    weeks: [
      { label: 'Week 1', focus: 'Medicare framework', tasks: ['Parts A/B/C/D and enrollment periods', 'Eligibility, penalties and the federal marketing rules', 'AHIP core curriculum readings and practice quiz'], hours: 8 },
      { label: 'Week 2', focus: 'Medicare Advantage module', tasks: ['Plan design, cost sharing and extra benefits', 'Star ratings and the annual notice of change', '50-question timed practice at the 80% standard'], hours: 8 },
      { label: 'Week 3', focus: 'Part D module', tasks: ['Formularies, tiers and the coverage gap', 'Late-enrollment penalty and creditable coverage', 'Second module exam practice'], hours: 8 },
      { label: 'Week 4', focus: 'Final certification', tasks: ['Re-read weak sections in the live portal', 'Retake practice assessments to 90%+', 'Sit each required module exam'], hours: 6 }
    ],
    variants: [
      { label: 'Medicare-only producer', detail: 'Core + Medicare Advantage + Part D is the standard stack; skip marketplace modules.' },
      { label: 'Multiline agent', detail: 'Add marketplace or supplemental modules; allocate a week per additional module.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant strategy for AHIP is to use the official portal as the primary source, because the certification is current-year specific and third-party summaries routinely lag the live material. Work each module\'s required reading once, then take the built-in practice assessments; the practice items mirror the exam phrasing closely, so performance on them is the best readiness signal. Second, treat the 80 percent standard as a target, not a floor for comfort: aim for 90 percent on practice before sitting, because the real exam includes item variants you have not seen. Third, budget for the annual renewal cycle: the certification is year-specific, so schedule a recurring fall study block rather than treating it as a one-time event, and register early because carrier appointment deadlines cluster before AEP. Fourth, do not rely on memory from prior years — plan design, formularies and the federal rules change annually, and the exam is rebuilt around the current year\'s products. Finally, coordinate with your carrier: many carriers require their own product-specific exams on top of AHIP, and completing those in the same window keeps your appointment active for the selling season.',
    items: [
      { title: 'Use the official portal', detail: 'Third-party summaries lag the current-year material; the portal is the source of truth.' },
      { title: 'Aim for 90% on practice', detail: 'The real exam adds unseen variants; comfort at 80% is not comfort at all.' },
      { title: 'Plan the annual cycle', detail: 'The certification is year-specific; schedule the fall study block every year.' },
      { title: 'Do not reuse prior-year prep', detail: 'Plan design and rules change annually; study the live content.' },
      { title: 'Stack carrier exams', detail: 'Complete any carrier product exams in the same window to keep your appointment active.' }
    ]
  },
  resourceComparison: {
    summary: 'AHIP prep is unusual because the certification content is the course: the required reading, practice assessments and exams all live inside AHIP\'s portal, and the certification fee covers access. There is therefore no meaningful market of third-party prep for the core credential the way there is for, say, the CISSP; the third-party content that exists is mostly broker-oriented training by carriers and field marketing organizations, which is valuable for product strategy but not a substitute for the portal material. Free options include Medicare.gov\'s official publications (the "Medicare & You" handbook and the federal marketing guidelines), which are genuinely useful for the Medicare framework, and carrier training portals, which many carriers open to appointed producers at no charge. A defensible budget is the certification fee itself plus zero to a few hundred dollars for optional broker training. Prices below are list prices as of mid-2026 and change annually; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AHIP portal + exams', values: ['Fee varies by module set', 'Online readings, practice and exams', 'The required path; budget for annual renewal'] },
      { label: 'Medicare.gov publications', values: ['Free', 'Official handbooks and rules', 'The Medicare framework and marketing rules'] },
      { label: 'Carrier training portals', values: ['Often free to appointed producers', 'Product-specific online training', 'The second certification layer carriers require'] },
      { label: 'Field marketing organization training', values: ['$0-$300', 'Broker workshops and materials', 'Product strategy and lead-gen, not exam prep'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; AHIP fees vary by module set and year; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AHIP mistake is studying archived material: candidates who prepare from last year\'s course or a broker\'s older deck discover on exam day that the current-year rules have changed, and the exam is rebuilt around the current year\'s products. The fix is to work only the live portal content. The second mistake is treating the 80 percent pass line as a comfort zone: candidates who pass practice at 80 percent sit the real exam and find the unseen variants push them under the line; target 90 percent on practice. Third, many agents schedule the exams at the last minute and then miss carrier appointment deadlines, because the certification must be in place before AEP selling begins; plan the fall block early. Fourth, candidates forget that most carriers layer their own product exams on top of AHIP and are surprised by the extra burden; check your carrier\'s requirements before you start. Finally, some agents treat the certification as a one-time event and let it lapse, losing carrier appointments mid-year; the annual renewal is part of the job.',
    items: [
      { mistake: 'Studying prior-year material', fix: 'The exam is rebuilt each year; work only the live portal content.' },
      { mistake: 'Aiming for 80% on practice', fix: 'Target 90%+; unseen exam variants push borderline candidates under the line.' },
      { mistake: 'Waiting until AEP to certify', fix: 'Start the fall study block early; carrier deadlines cluster before the selling season.' },
      { mistake: 'Forgetting carrier-layer exams', fix: 'Check carrier product-training requirements before you begin.' },
      { mistake: 'Letting the credential lapse', fix: 'The certification renews annually; schedule the renewal like a recurring appointment.' }
    ]
  },
  questionTypes: {
    summary: 'Each AHIP module exam is 50 multiple-choice questions delivered online with a 60-minute time limit and an 80 percent passing standard. The items test current-year product rules and federal marketing requirements: plan design features, cost-sharing, enrollment periods, penalties, and what an agent may or may not say in marketing materials and to beneficiaries. Many items are scenario-based — a beneficiary profile or a marketing situation — asking for the correct rule, the compliant action, or the correct plan feature. The samples below are editor-written illustrations of the published curriculum, not live exam items; they show the format and the current-year specificity of the questions.',
    types: [
      { name: 'Product rules and plan design', share: 'Majority of items', detail: 'Medicare Advantage and Part D features, cost-sharing, star ratings and benefits.' },
      { name: 'Enrollment and penalties', share: 'Large minority', detail: 'Enrollment periods, eligibility and the late-enrollment penalty.' },
      { name: 'Marketing compliance', share: 'Meaningful share', detail: 'What agents may say, disclose and use in beneficiary marketing.' }
    ],
    samples: [
      {
        prompt: 'A beneficiary with Original Medicare asks an agent whether a Medicare Advantage plan can charge a higher monthly premium than the Part B premium. The correct statement is:',
        options: ['A. Medicare Advantage plans may set their own monthly premiums, including amounts above the Part B premium', 'B. Medicare Advantage premiums cannot exceed the Part B premium', 'C. Medicare Advantage plans do not charge premiums', 'D. Premiums are set by the federal government and are identical nationwide'],
        answer: 'A',
        explanation: 'Medicare Advantage plans are private plans that set their own monthly premiums, which can be above, equal to, or below the Part B premium depending on the plan. The other statements misstate how private plan pricing works.'
      },
      {
        prompt: 'A beneficiary who does not enroll in a Part D plan when first eligible and has no creditable coverage will generally:',
        options: ['A. Pay a late-enrollment penalty added to the monthly premium', 'B. Be barred from enrolling permanently', 'C. Face no penalty but pay higher copays', 'D. Be automatically enrolled at no cost'],
        answer: 'A',
        explanation: 'The Part D late-enrollment penalty is added to the monthly premium for beneficiaries who go without creditable drug coverage after their initial enrollment period. Permanent exclusion, penalty-free late enrollment and automatic free enrollment each misstate the penalty rule.'
      },
      {
        prompt: 'During a marketing call with a beneficiary, an agent may:',
        options: ['A. Use a pre-approved scripted sales presentation that includes required disclosures', 'B. Leave voicemails with plan benefit highlights without identifying as an agent', 'C. Use unsolicited email with plan marketing materials', 'D. Offer a cash incentive to encourage enrollment'],
        answer: 'A',
        explanation: 'Agent marketing must follow the federal marketing rules, including required disclosures and approved sales presentations. Unsolicited contact limits, disclosure requirements, and the prohibition on cash or other inducements make the other options non-compliant.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published curriculum, not live exam items.'
  },
  examDay: {
    summary: 'AHIP module exams are taken online through the AHIP portal at a time you choose, so "exam day" is a block of time you schedule rather than a testing-centre appointment. Confirm your system meets the portal requirements, close other applications, and budget a full 60 minutes per module exam with the 80 percent standard in mind. The exam is not proctored in the traditional sense, but it is current-year locked: you must complete the certification within the plan year it serves, and your certificate is dated for that year. Before you start, have your AHIP account, the module list you need for your carriers, and a quiet workspace ready; notes are not prohibited but the material is specific enough that retrieval beats lookup. On completion you see your result immediately, and the certificate is available in your account. Coordinate the timing with your carrier: carriers require certification before AEP appointments are active, so schedule the exams with enough buffer for any retake. The afterwards: save the certificate, note the renewal month, and add the annual renewal to your calendar before you move on to carrier product training.',
    bring: ['Reliable computer with current browser', 'AHIP account login', '60 uninterrupted minutes per module'],
    leave: ['Distractions — phone notifications, second screens with unrelated content'],
    timeline: [
      { time: 'Before sitting', detail: 'Confirm your module list and carrier deadlines; close unrelated applications.' },
      { time: 'Exam window', detail: '60 minutes per module, 50 questions, 80% pass line.' },
      { time: 'Immediately after', detail: 'Result shows on screen; certificate is dated for the current plan year.' },
      { time: 'Next', detail: 'Save the certificate and complete any carrier product training before AEP.' }
    ],
    rules: [
      'The exam is current-year specific — it serves the plan year you are certifying for',
      'Each module allows 60 minutes; the clock is per module',
      'Carrier deadlines cluster before AEP — schedule with buffer for retakes'
    ],
    afterwards: 'On a pass, your certificate is active for the plan year; complete carrier product training and keep the renewal month on your calendar. On a fail, retake the module after additional portal review.'
  }
};

export default data;
