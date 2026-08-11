const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers FINRA and NASAA qualification exams. Fees and exam structure come from the FINRA qualification-exam pages and the NASAA exam outlines, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a regulator does not publish a figure, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against FINRA\'s Series 63 exam page, the NASAA Series 63 content outline, and BLS OOH Securities, Commodities, and Financial Services Sales Agents (SOC 41-3031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$78,140 median for securities, commodities and financial services sales agents (BLS, May 2024)',
    summary: 'The Series 63 is a state-registration exam, not a job title, so there is no BLS occupation called "Series 63 representative". It registers you as a securities agent in a given state under the Uniform Securities Act, and it is almost always taken alongside a FINRA representative exam such as the Series 6 or Series 7. The closest official BLS occupation is Securities, Commodities, and Financial Services Sales Agents, SOC 41-3031, which had a May 2024 median wage of $78,140. Read that figure correctly: total cash compensation for registered representatives is heavily commission-based, so the BLS median understates what producing agents earn, and the range is wide — from below $41,090 for the lowest tenth to above $213,050 for the top tenth in the May 2024 data. BLS counted 514,500 jobs in the occupation in 2024 and projects 3 percent growth from 2024 to 2034, with roughly 38,100 openings a year, almost all replacement demand. We also list the Financial and Investment Analysts series (SOC 13-2051, May 2024 median $101,350) because Series 63 holders who later move into advisory or analyst roles benchmark against it. The honest summary: the Series 63 is a permission slip that makes the sales-agent wage accessible in a specific state; it produces no wage by itself, and it must be maintained alongside an active FINRA registration to have value.',
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
    headline: 'NASAA publishes the cut score — 72% (43 of 60 scored items) — and no pass rate',
    summary: 'NASAA, which writes the Series 63, does not publish cohort pass rates, and FINRA does not publish them either, so any percentage you see online is a third-party survey rather than official data; we do not present surveys as authoritative. What is published is the passing standard: the exam contains 60 scored questions plus 5 unscored pretest questions, for 65 total, with a 75-minute time limit, and a candidate must answer at least 43 of the 60 scored items correctly — 72 percent — to pass. The exam is computer-based at Prometric. Two things make the Series 63 structurally different from product exams. First, it tests one statute — the Uniform Securities Act, as adopted by the candidate\'s state — plus the NASAA model rules, so the material is memorisation-heavy: registration of agents and broker-dealers, exempt securities and exempt transactions, prohibited practices, and administrative provisions. Second, there is no sponsorship requirement to sit: candidates can self-register using Form U10, though most candidates are firm-sponsored and file through a U4. The practical takeaway is that the passing standard is achievable with disciplined memorisation of the act\'s definitions and exemptions, but the 75-minute window for 60 scored items leaves little room to research answers — you must know the rules cold.',
    source: { label: 'FINRA - Series 63 Uniform Securities Agent State Law Exam', url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series63' },
    caveat: 'NASAA and FINRA publish the cut score but no pass rate; any percentage circulating online is a third-party survey.'
  },
  studyPlan: {
    summary: 'The Series 63 content outline is compact: roughly 60 percent of items cover state securities acts and related rules and regulations, and roughly 40 percent cover ethical practices and fiduciary obligations, including communication with customers and prospects. Because the scope is one statute plus the model rules, the study plan is shorter than for product exams — most candidates need 25 to 40 hours across two to four weeks. Week one should cover the registration framework: what must register, what is exempt, and the definitions that anchor every item (agent, broker-dealer, security, investment adviser under the act). Week two should cover exempt securities and exempt transactions, the prohibited-practices list, and administrative remedies, using flashcards because the exemptions are tested by precise wording. Week three should switch to question-bank drilling with at least 300 items and one or two timed practice exams at 75 minutes. The material is memorisation-heavy, so the plan rewards repetition: same-day review of every miss, weekly re-test of the exemption lists, and a final pass over the definitions the day before the exam. Candidates who pass typically report that the exam feels like a vocabulary and rule test rather than a reasoning test, so structure your time accordingly — read for exact language, not comprehension summaries.',
    totalHours: '25-40 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Registration framework', tasks: ['Agent and broker-dealer registration requirements', 'Definition of security and investment adviser under the act', 'Administrative structure: administrator powers and remedies'], hours: 12 },
      { label: 'Week 2', focus: 'Exemptions and ethics', tasks: ['Exempt securities and exempt transactions lists', 'Prohibited practices and unethical conduct', 'Fiduciary obligations and communications with customers'], hours: 12 },
      { label: 'Weeks 3-4', focus: 'Drill and timed mocks', tasks: ['300+ practice questions, daily error-log review', 'Two timed 75-minute practice exams', 'Final pass over definitions and exemption lists'], hours: 14 }
    ],
    variants: [
      { label: 'Taken right after Series 6 or Series 7', detail: 'The regulatory vocabulary is fresh; compress to 2 weeks and focus on the exemption lists and ethics items.' },
      { label: 'Self-sponsored (Form U10)', detail: 'Confirm your state accepts self-registration for the exam before buying prep; the study plan is unchanged.' }
    ]
  },
  prepStrategies: {
    summary: 'The Series 63 rewards precision, so the strongest strategy is to build flashcards around the act\'s vocabulary — agent, broker-dealer, security, federal covered security, and the distinction between exempt securities and exempt transactions — because most items hinge on applying those exact definitions. Second, drill the exemption lists until they are automatic: the exam loves to present a described offering and ask whether it is exempt, and the answer usually turns on one fact such as the number of offerees, the dollar threshold, or whether the issuer is a government or a non-profit. Third, treat ethics items as a separate study block: they test conduct — what an agent may say, what must be disclosed, what counts as manipulation or fraud — and the wording is often the difference between two similar answers. Fourth, take at least two timed exams at 75 minutes; the window is short enough that candidates who have never timed themselves run out of minutes on the ethics block. Fifth, use a current outline: the Uniform Securities Act and NASAA model rules are stable, but the exam is updated periodically, so buy prep materials no older than two years and confirm the item-count and scoring rules at registration.',
    items: [
      { title: 'Build definition flashcards', detail: 'Every item leans on the act\'s exact vocabulary; memorise definitions before anything else.' },
      { title: 'Automate the exemption lists', detail: 'Drill exempt securities and exempt transactions until the thresholds are reflexive.' },
      { title: 'Separate the ethics block', detail: 'Conduct and communication items need their own drill session; they reward exact wording.' },
      { title: 'Time yourself twice', detail: 'Two timed 75-minute mocks are the minimum before the real sitting.' },
      { title: 'Use current materials', detail: 'Confirm the outline version at registration; old prep can test retired language.' }
    ]
  },
  resourceComparison: {
    summary: 'Because the Series 63 scope is narrow, prep is cheaper and shorter than for product exams. The authoritative free sources are the NASAA content outline and FINRA\'s exam page, which give the exact scope and scoring rules but no instruction. Third-party packages — Kaplan, STC, Pass Perfect and others — bundle a concise book, practice questions and simulated exams, typically $150 to $400; the question bank is the part that matters most, so a book-plus-bank combo often beats a full video package for this exam. Question-bank-only products are viable for candidates who already understand the act from a Series 7 course, because Series 7 prep already covers much of the federal material and only the state-specific exemptions and NASAA model rules are new. Free quiz sites and YouTube explainers are useful for orientation but insufficient alone for an exam that tests precise statutory wording. A realistic budget is $100 to $400. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NASAA/FINRA outlines', values: ['Free', 'PDF outlines', 'Exact scope and scoring rules'] },
      { label: 'Kaplan Series 63', values: ['$150-$300', 'Book + QBank + simulated exam', 'Structured learners who want a course'] },
      { label: 'STC Series 63', values: ['$200-$350', 'Textbook + online exam simulator', 'Candidates on a short deadline'] },
      { label: 'Question-bank only', values: ['$60-$150', 'Online adaptive questions', 'Series 7-holders who need state-law drill'] },
      { label: 'Free quiz sites', values: ['$0', 'Web quizzes', 'Orientation before buying anything'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The classic Series 63 mistake is studying it like a product exam: candidates spend hours on investment products and then fail on the statutory material, which is the actual test. The fix is to reallocate time to the act\'s definitions and exemptions. The second mistake is confusing exempt securities with exempt transactions — the exam tests both lists, and candidates routinely apply the wrong one to a described offering. Third, many candidates ignore the 5 unscored pretest questions but then waste effort trying to identify them; treat all 65 as scored. Fourth, candidates answer ethics items from intuition instead of the model rules; the exam wants the rule-based answer, not the friendly one, and the two are often different. Fifth, slow reading in the 75-minute window: at 60 scored items, you have 75 seconds per item including review, and candidates who read the scenarios twice fall behind on the ethics block. Finally, using outdated prep is a silent killer, because the act and model rules are revised; always confirm the outline version at registration.',
    items: [
      { mistake: 'Studying products instead of the act', fix: 'Reallocate study to definitions, exemptions and ethics — that is the exam.' },
      { mistake: 'Confusing exempt securities with exempt transactions', fix: 'Maintain two separate lists and drill each with its own threshold facts.' },
      { mistake: 'Trying to spot the 5 pretest questions', fix: 'Treat all 65 items as scored; pretests are indistinguishable.' },
      { mistake: 'Answering ethics from intuition', fix: 'Apply the NASAA model rules; the rule-based answer is the graded one.' },
      { mistake: 'Running out of time on ethics', fix: 'Do two timed 75-minute mocks and practise a steady 70-second pace.' }
    ]
  },
  questionTypes: {
    summary: 'The Series 63 is entirely multiple-choice, with most items single-answer and a meaningful share phrased as described situations: a fact pattern about an offering or an agent\'s conduct, followed by a question about registration, exemption or propriety. Definition items test the act\'s vocabulary directly. Exemption items present a described security or transaction and ask whether it is exempt and why. Ethics items describe an agent\'s behaviour and ask whether it violates the act or model rules. There are no performance-based tasks and no essay items. The samples below are editor-written illustrations of the published blueprint, not live exam items; they demonstrate the precision required on definition and exemption questions and the rule-based nature of the ethics items.',
    types: [
      { name: 'Registration and exemptions', share: 'Roughly 60%', detail: 'Who must register, what is exempt, and administrative provisions under the act.' },
      { name: 'Ethics and fiduciary duty', share: 'Roughly 40%', detail: 'Prohibited practices, disclosure obligations and customer communications.' }
    ],
    samples: [
      {
        prompt: 'Which of the following is an exempt security under the Uniform Securities Act?',
        options: ['A. A limited partnership interest in a start-up oil venture', 'B. A security issued by a government of a foreign country with which the U.S. maintains diplomatic relations', 'C. A promissory note issued in a private offering to 12 accredited investors', 'D. A security issued by a business trust that pays no dividends'],
        answer: 'B',
        explanation: 'Securities issued by governments with which the U.S. maintains diplomatic relations are among the expressly exempt securities under the Uniform Securities Act. The limited partnership interest, the private-offering note, and the business-trust security are not automatically exempt by those facts alone.'
      },
      {
        prompt: 'An agent in State X recommends a product that is not suitable for the customer. Under the Uniform Securities Act, this conduct is:',
        options: ['A. Acceptable if the customer is accredited', 'B. A prohibited practice because the recommendation is unsuitable', 'C. Acceptable if the customer signs a waiver', 'D. Regulated only by FINRA, not by state law'],
        answer: 'B',
        explanation: 'Making unsuitable recommendations is a prohibited practice under state securities law, and the suitability obligation cannot be waived by an accredited-status label or a signed waiver. State law and FINRA rules operate in parallel, so D is incorrect.'
      },
      {
        prompt: 'Which statement about a broker-dealer\'s record-keeping duty under the Uniform Securities Act is correct?',
        options: ['A. Records may be kept outside the state if never examined', 'B. The administrator may inspect records at any time during regular business hours', 'C. Records must be destroyed after two years', 'D. Records are required only for institutional clients'],
        answer: 'B',
        explanation: 'The act gives the state administrator authority to inspect a broker-dealer\'s records during regular business hours. Keeping records beyond the administrator\'s reach, destroying them after a fixed period, or limiting records to institutional clients all contradict the statutory record-keeping and inspection regime.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Series 63 is a 75-minute, 65-question computer-based exam taken at a Prometric testing centre; no sponsorship is required to sit, though most candidates are firm-sponsored. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; everything else — phone, notes, wallet beyond the ID — goes in the locker. Arrive at least 30 minutes early; late arrivals forfeit the appointment and the $147 exam fee. The session includes a tutorial before the clock starts, and there are no scheduled breaks. Your preliminary pass/fail appears on screen immediately; the official result flows to your registration record, and if you fail, the retake wait is 30 days, extending to 180 days after three consecutive failures. Pace yourself at roughly 70 seconds per scored item and flag uncertain items for review rather than lingering. On a pass, the result is valid to register you as an agent in the state where your firm files; the licence has value only alongside an active FINRA registration, and maintaining it is governed by state rules and any continuing-education programme your state adopts.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes, books and study materials', 'Any items the testing centre prohibits beyond an ID'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'At the seat', detail: 'Run the tutorial, then the 75-minute clock starts.' },
      { time: 'Pacing check', detail: 'Aim to clear the registration block in the first half; save review time for the ethics block.' },
      { time: 'After submit', detail: 'Preliminary pass/fail shows immediately; the official result posts to your record.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'No breaks — the 75-minute clock runs continuously',
      'Photo ID must match the registration name exactly'
    ],
    afterwards: 'On a pass, your firm activates your state registration (or you complete a self-registration). On a fail, wait 30 days (180 after three consecutive failures) to retake. Keep the licence current with any state-required continuing education while registered.'
  }
};

export default data;
