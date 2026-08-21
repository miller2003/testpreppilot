const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers FINRA and NASAA qualification exams. Fees and exam structure come from the FINRA qualification-exam pages and the NASAA exam outlines, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a regulator does not publish a figure, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against FINRA\'s Series 79 qualification page and BLS OOH Financial and Investment Analysts (SOC 13-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,350 median for financial and investment analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Series 79 representative" — the Series 79 is a FINRA licence for investment-banking representatives, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Financial and Investment Analysts, SOC 13-2051, which had a May 2024 median wage of $101,350, with the lowest 10 percent under $62,410 and the highest 10 percent above $180,550. The fit is deliberate: Series 79 holders work in investment banking, capital markets and M&A advisory, and the licence lets a sponsored individual perform investment-banking activities for a FINRA member firm; the analyst-series wage is the relevant market, with investment-banking compensation heavily bonus-weighted and well above the base median at the senior levels. BLS counted 368,500 financial analyst jobs in 2024 and projects 6 percent growth from 2024 to 2034, with about 29,900 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the licence produces no wage by itself; read the number as the floor of the relevant labour market, and note that total compensation in investment banking is dominated by bonuses, which the BLS base understates.',
    rows: [
      { label: 'Median annual wage, financial and investment analysts', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $62,410', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $180,550', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Median, securities and financial services sales agents (adjacent)', value: '$78,140', note: 'BLS OOH, SOC 41-3031, May 2024' }
    ],
    growth: 'BLS projects 6 percent growth for financial and investment analysts from 2024 to 2034, about 29,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Financial Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm' }
  },
  passRate: {
    headline: 'FINRA publishes no pass rate — it publishes the format and the passing score, with 75 scored questions and a 70% line',
    summary: 'FINRA does not publish cohort pass rates for the Series 79, and third-party surveys are not official data, so we do not treat them as authoritative. What FINRA does publish is the passing standard and the format: the Series 79 currently has 75 scored questions (with some unscored pretest items) and a 5-hour time limit (4 hours of testing plus an optional break), with a passing score of 70 percent. The exam is delivered by computer at Prometric testing centres, and a candidate must be sponsored by a FINRA member firm (Form U4 filing) to sit in most cases. The exam content follows the FINRA content outline: the collection, analysis and evaluation of data for financing and M&A transactions; the underwriting of securities offerings and the related documents; and the mergers, acquisitions and financial-restructuring activities. The absence of a published pass rate is not an absence of standards: the 70 percent line on 75 scored questions is a meaningful bar, and the exam rewards both the regulatory knowledge and the deal-mechanics fluency the investment-banking role requires. The practical reading: prepare with the FINRA outline and a Series 79 prep course, because the exam covers the deal process in depth.',
    source: { label: 'FINRA - Series 79 Investment Banking Representative Exam', url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series79' },
    caveat: 'FINRA publishes the passing score and format but no pass rate; any percentage circulating online is a third-party survey.'
  },
  studyPlan: {
    summary: 'The Series 79 is a 75-scored-question, 5-hour exam with a 70 percent passing line, built on the FINRA content outline: the data collection, analysis and evaluation for financing and M&A; the underwriting of securities offerings; and the mergers, acquisitions and restructuring activities. A defensible plan runs 80 to 120 hours over 6 to 8 weeks. Weeks 1-2: the regulatory and industry framework — the SEC and FINRA rules, the registration requirements and the roles in a transaction — because the exam assumes the regulatory context. Weeks 3-4: the financing side — the capital-markets activities, the securities offerings, the underwriting process and the documents (the registration statement, the prospectus). Weeks 5-6: the M&A side — the acquisition process, the valuation approaches, the deal structures and the financial restructuring. Weeks 7-8: question-bank drilling and full timed practice exams at the real format. The plan is deal-process-heavy because the exam rewards knowing how a transaction works end to end; candidates who study only the regulations miss the deal-mechanics items.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Regulatory framework', tasks: ['SEC and FINRA rules and registration', 'The roles in a transaction', 'The offering and M&A regulations'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Financing and underwriting', tasks: ['Capital-markets activities', 'The underwriting process and documents', 'The registration statement and prospectus'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'M&A and restructuring', tasks: ['The acquisition process and valuation', 'Deal structures', 'Financial restructuring'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Question-bank drilling in volume', 'Two full timed practice exams', 'Review weak outline areas'], hours: 25 }
    ],
    variants: [
      { label: 'Working in investment banking', detail: 'The deal process is familiar from practice; focus study on the regulatory items and the exam format.' },
      { label: 'Career-changer entering the industry', detail: 'Add 2 weeks of capital-markets fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The Series 79 rewards knowing the deal process end to end, so the dominant strategy is learning the transaction lifecycle as a system: the data collection and analysis, the underwriting process and documents, and the M&A and restructuring activities, because the exam tests how the pieces connect. Second, master the regulatory framework precisely — the SEC and FINRA rules and the registration requirements — because the exam assumes it and the regulatory items are exact. Third, drill the documents and their contents: the registration statement, the prospectus and the deal documents are tested directly, and candidates who know what each document contains cover a real block. Fourth, use a Series 79 prep course and question bank, because the exam\'s depth is specific and the prep industry covers it well. Finally, take at least two full timed practice exams at the real 5-hour format; the length is part of the test, and the stamina matters.',
    items: [
      { title: 'Learn the deal lifecycle', detail: 'Data to underwriting to M&A — the exam tests the connections.' },
      { title: 'Master the regulatory framework', detail: 'SEC and FINRA rules are assumed and tested precisely.' },
      { title: 'Drill the documents', detail: 'Registration statement, prospectus and deal documents are tested directly.' },
      { title: 'Use a Series 79 prep course', detail: 'The exam\'s depth is specific; the prep industry covers it.' },
      { title: 'Run two full timed mocks', detail: '5 hours is a long exam; the stamina is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'Series 79 prep is a mature market built around the major securities-prep providers (Kaplan, STC and Pass Perfect), which sell courses, books and test simulators from roughly $400 to $800 for the full suite; the test simulator is the most valuable component because the exam rewards timing and volume. FINRA\'s content outline (free) is the authoritative scope, and the FINRA practice test is the closest official material. Free resources include the outline and FINRA\'s qualification pages. A realistic total budget is $500 to $1,000 including the exam fee (about $295) and the prep materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Kaplan/STC/Pass Perfect courses', values: ['$400-$800', 'Books + video + test simulators', 'The standard structured path'] },
      { label: 'Test simulators', values: ['Included in most suites', 'Online timed practice exams', 'The timing and volume the exam demands'] },
      { label: 'FINRA practice test', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Series 79 exam', values: ['~$295', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the Series 79 fee is about $295; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Series 79 mistake is studying only the regulations: candidates who know the FINRA rules but not the deal process miss the underwriting and M&A items, which are the majority of the exam. The fix is deal-lifecycle study. The second mistake is treating the documents as a list instead of learning what each contains; the exam tests the document contents directly. Third, candidates underestimate the exam\'s length and never run a full 5-hour simulation, then flag under the stamina. Fourth, some candidates rely on a single source instead of a prep course plus the FINRA outline, losing the exact scope. Finally, candidates who sit without firm sponsorship in the required cases are turned away; confirm the sponsorship path before registering.',
    items: [
      { mistake: 'Studying regulations only', fix: 'The underwriting and M&A items are the majority; learn the deal process.' },
      { mistake: 'Treating documents as a list', fix: 'Learn what each document contains; the exam tests the contents.' },
      { mistake: 'Underestimating the length', fix: '5 hours; run two full timed simulations.' },
      { mistake: 'Relying on one source', fix: 'Use a prep course plus the FINRA outline for the exact scope.' },
      { mistake: 'Skipping the sponsorship check', fix: 'Confirm the firm-sponsorship path before registering.' }
    ]
  },
  questionTypes: {
    summary: 'The Series 79 is a 75-scored-question multiple-choice exam in 5 hours. The items test the FINRA content outline: the collection, analysis and evaluation of data for transactions; the underwriting of securities offerings; and the M&A and restructuring activities — with many scenario items presenting a deal situation and asking for the correct document, step, rule or analysis. Samples below are editor-written illustrations of the published outline, not live exam items; they show the deal-process style of the real items.',
    types: [
      { name: 'Underwriting items', share: 'Largest block', detail: 'Offerings, documents and the underwriting process.' },
      { name: 'M&A and restructuring items', share: 'Large block', detail: 'Acquisitions, valuation and deal structures.' },
      { name: 'Regulatory items', share: 'Meaningful block', detail: 'SEC and FINRA rules and the registration requirements.' }
    ],
    samples: [
      {
        prompt: 'A company plans an initial public offering. Which document contains the detailed offering information and must be filed with the SEC?',
        options: ['A. The registration statement', 'B. The engagement letter', 'C. The fairness opinion', 'D. The term sheet'],
        answer: 'A',
        explanation: 'The registration statement is the SEC-filed document containing the detailed offering information — the core IPO document. The engagement letter, fairness opinion and term sheet serve different deal functions.'
      },
      {
        prompt: 'In an M&A transaction, a fairness opinion is primarily intended to:',
        options: ['A. Provide the board with an opinion on the financial fairness of the transaction', 'B. Set the purchase price', 'C. Negotiate the deal', 'D. Replace the legal documents'],
        answer: 'A',
        explanation: 'A fairness opinion provides the board with an independent view on the financial fairness of the transaction — a board-support and diligence function. It does not set the price, negotiate or replace the legal documents.'
      },
      {
        prompt: 'An investment-banking representative recommends a transaction structure that benefits the firm\'s trading desk over the client. Under FINRA conduct rules, this is:',
        options: ['A. A violation of the duty to the client, and it must be disclosed and avoided', 'B. Acceptable if profitable', 'C. Acceptable with client consent after the fact', 'D. Regulated only by state law'],
        answer: 'A',
        explanation: 'Prioritising the firm\'s interests over the client\'s violates the conduct duty; the conflict must be disclosed and avoided. Profitability, after-the-fact consent or state-only regulation each misread the FINRA conduct standard.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The Series 79 is a 75-scored-question, 5-hour computer-based exam at a Prometric testing centre. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. The 5-hour window includes an optional break; pace at about 3-4 minutes per scored item, flag uncertain items for review, and manage the long format deliberately. You receive a preliminary pass/fail on screen, with the official result filed to your firm\'s registration record. If you fail, the standard retake wait applies. On a pass, your Series 79 activates when the firm\'s registration is effective, and the licence must be maintained with continuing education while registered. The afterwards matters: complete the remaining registration steps and keep the licence current.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '45 minutes before', detail: 'Arrive, check in and complete centre security steps.' },
      { time: 'Exam', detail: '75 scored questions in 5 hours; pace for the long format, flag and review.' },
      { time: 'After submit', detail: 'Preliminary pass/fail appears on screen; the official result follows.' },
      { time: 'Next', detail: 'Complete the registration steps and keep the licence current.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '5 hours for 75 scored questions; the clock runs with an optional break',
      'Registration and continuing education apply while the licence is active'
    ],
    afterwards: 'On a pass, your Series 79 activates with the firm\'s registration and renews with continuing education. On a fail, retake after the waiting period and additional study.'
  }
};

export default data;
