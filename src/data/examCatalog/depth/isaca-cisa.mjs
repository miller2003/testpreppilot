const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers ISACA and other IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ISACA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ISACA\'s CISA program pages and BLS OOH Auditors (SOC 13-2011) and Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$94,060 median for accountants and auditors — with information security analysts ($124,910) as the adjacent security benchmark (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CISA" — the Certified Information Systems Auditor credential validates IT audit, control and assurance skill, and the wage question belongs to the role you perform with it. The closest official BLS occupations are Accountants and Auditors, SOC 13-2011, which had a May 2024 median wage of $94,060, and Information Security Analysts, SOC 15-1212, at a May 2024 median of $124,910. The fit is deliberate: CISA holders work as IT auditors, information-systems auditors, security auditors and compliance professionals, and the role sits between the audit and security series in the labour market. BLS counted 1,631,900 accountant and auditor jobs in 2024 and projects a 6 percent decline from 2024 to 2034 (driven by automation of traditional accounting work), while the information-security series projects a striking 30 percent growth with about 17,500 openings a year — and the IT-audit niche the CISA serves tracks the security side of that market. The limitation to state plainly: the BLS figures cover the whole occupations at all levels, credentialed or not, and the CISA\'s value is as a recognised IT-audit and security-governance signal that employers use for audit, compliance and security-assurance roles. Read the numbers as the market for the roles the credential serves.',
    rows: [
      { label: 'Median annual wage, accountants and auditors', value: '$94,060', note: 'BLS OOH, SOC 13-2011, May 2024' },
      { label: 'Median, information security analysts (adjacent security benchmark)', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent, accountants and auditors', value: 'Under $55,290', note: 'BLS OOH, SOC 13-2011, May 2024' },
      { label: 'Highest 10 percent, accountants and auditors', value: 'Above $169,150', note: 'BLS OOH, SOC 13-2011, May 2024' }
    ],
    growth: 'BLS projects a 6 percent decline for accountants and auditors from 2024 to 2034, while the adjacent information-security series projects 30 percent growth.',
    source: { label: 'BLS Occupational Outlook Handbook - Accountants and Auditors', url: 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm' }
  },
  passRate: {
    headline: 'ISACA publishes pass rates — the reported CISA pass rate is around 50% in recent published data',
    summary: 'ISACA publishes pass-rate information for its certification exams, and the reported CISA pass rate has historically clustered around 50 percent in recent published cycles; we present it as the body\'s own reporting, noting the figure varies by exam window and candidate pool. What ISACA also publishes is the format: the CISA exam has 150 multiple-choice questions with a 4-hour time limit, delivered by computer at ISACA-approved test centres or through remote proctoring, and the result is reported as pass/fail. The exam content follows the published CISA job practice areas: the process of auditing information systems; governance and management of IT; information systems acquisition, development and implementation; information systems operations and business resilience; and protection of information assets. The practical reading: the published pass rate reflects a demanding professional exam, and the strongest predictor of success is structured preparation — candidates who complete the review course, work the question database and meet the experience requirement (5 years of relevant work, with waivers) pass at higher rates than the overall cohort.',
    source: { label: 'ISACA - Certified Information Systems Auditor (CISA)', url: 'https://www.isaca.org/credentialing/cisa' },
    caveat: 'ISACA publishes pass-rate data that varies by window; the figure above is the recent reported range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The CISA exam is a 150-question, 4-hour exam built on the five job practice areas: auditing information systems, governance and management of IT, acquisition and implementation, operations and business resilience, and protection of information assets. A defensible plan runs 150 to 250 hours over 3 to 6 months, built around the ISACA review materials and the 5-year experience requirement. Months 1-2: the audit domain and governance — the IS audit process, standards and risk-based auditing, then IT governance, the frameworks and the organisational roles. Months 3-4: acquisition and implementation, and operations and resilience — the SDLC and the acquisition process, then operations management, business continuity and disaster recovery. Months 5: protection of information assets — security standards, access controls, cryptography and the protection frameworks. Month 6: the question database and full timed practice exams at the real 150-question, 4-hour format. The plan is domain-driven because the exam covers all five areas; candidates who study only the security domain fail the audit and governance items.',
    totalHours: '150-250 hours over 3-6 months (plus the 5-year experience requirement)',
    weeks: [
      { label: 'Months 1-2', focus: 'Audit process and governance', tasks: ['The IS audit process and standards', 'Risk-based auditing', 'IT governance, frameworks and roles'], hours: 70 },
      { label: 'Months 3-4', focus: 'Acquisition, operations, resilience', tasks: ['The SDLC and acquisition process', 'Operations management and service delivery', 'Business continuity and DR'], hours: 70 },
      { label: 'Month 5', focus: 'Protection of information assets', tasks: ['Security standards and access controls', 'Cryptography and network security', 'Physical and environmental controls'], hours: 45 },
      { label: 'Month 6', focus: 'Database and mocks', tasks: ['The ISACA question database', 'Two full timed practice exams', 'Review weak domains'], hours: 40 }
    ],
    variants: [
      { label: 'IT auditor in practice', detail: 'The audit domain accelerates; spend extra time on acquisition, governance and the exam format.' },
      { label: 'Security professional adding audit', detail: 'The protection domain is familiar; the audit-process and governance material is the new content.' }
    ]
  },
  prepStrategies: {
    summary: 'The CISA rewards breadth across all five job practice areas, so the dominant strategy is domain-driven coverage with the ISACA review materials as the scope map: the exam draws from every area, and candidates who study only the security domain fail the audit and governance items. Second, master the audit process domain first — the IS audit standards, the risk-based audit approach and the audit lifecycle — because it anchors the credential\'s identity. Third, use the ISACA QAE (Questions and Answers Database) as the primary practice resource; it is the closest thing to the real item style and includes the answer rationales that build the reasoning the exam rewards. Fourth, confirm the experience requirement early: the CISA requires 5 years of relevant work experience (with education waivers), and certification cannot proceed without it. Finally, take at least two full timed practice exams at the real 150-question, 4-hour format; the length and stamina are part of the test.',
    items: [
      { title: 'Cover all five domains', detail: 'The exam draws from every area; audit and governance cannot be skipped.' },
      { title: 'Master the audit process first', detail: 'The IS audit standards and lifecycle anchor the credential.' },
      { title: 'Use the ISACA QAE', detail: 'The closest item style, with the rationales that build the reasoning.' },
      { title: 'Confirm the experience requirement', detail: '5 years of relevant work (with waivers) gates certification.' },
      { title: 'Run two full timed mocks', detail: '150 questions in 4 hours; the stamina is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CISA prep is dominated by ISACA\'s official materials. The ISACA CISA Review Manual ($100-$150) and the QAE database (about $200-$250, or included in the review course) are the standard stack; the review course runs roughly $500-$2,500 depending on format (self-paced, virtual or in-person). Third-party books ($40-$100) and question banks ($50-$200) add alternatives. Free resources include the job practice areas outline and ISACA\'s sample questions. A realistic total budget is $600 to $3,000 including the exam fee (about $575 for ISACA members, $760 for non-members). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CISA Review Manual', values: ['$100-$150', 'Printed or digital book', 'The authoritative domain coverage'] },
      { label: 'ISACA QAE database', values: ['$200-$250', 'Online question database', 'The closest item style and rationales'] },
      { label: 'ISACA review course', values: ['$500-$2,500', 'Self-paced, virtual or in-person', 'Structured preparation'] },
      { label: 'Third-party books and banks', values: ['$40-$200', 'Books and practice items', 'Alternatives and extra volume'] },
      { label: 'CISA exam', values: ['~$575 member / ~$760 non-member', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ISACA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CISA mistake is studying only the technical security domain: candidates with a security background focus on the protection-of-information-assets material and fail the audit-process and governance items, which are a large share of the exam. The fix is full five-domain coverage. The second mistake is relying on practice questions without the review manual\'s domain depth; the QAE is essential, but it works best after the manual. Third, candidates under-prepare the acquisition-and-implementation and operations-and-resilience domains, treating them as minor when they are distinct tested areas. Fourth, some candidates ignore the experience requirement until after passing and then wait years for certification; confirm it early. Finally, candidates who never run a full timed exam underestimate the 150-question, 4-hour stamina.',
    items: [
      { mistake: 'Studying security only', fix: 'Cover all five domains; audit and governance are a large share.' },
      { mistake: 'Using questions without the manual', fix: 'The QAE works best after the review manual\'s domain depth.' },
      { mistake: 'Under-preparing acquisition and operations', fix: 'Distinct tested areas; cover them fully.' },
      { mistake: 'Ignoring the experience requirement', fix: 'Confirm the 5-year requirement early; it gates certification.' },
      { mistake: 'Skipping full timed mocks', fix: '150 questions in 4 hours; run two full timed practice exams.' }
    ]
  },
  questionTypes: {
    summary: 'The CISA exam is a 150-question multiple-choice exam in 4 hours. The items span the five job practice areas with a heavy concentration on the audit process, governance, and the reasoning behind audit and control decisions — many items present an audit or control situation and ask for the best practice or the correct conclusion. Samples below are editor-written illustrations of the published job practice areas, not live exam items; they show the audit-reasoning style of the real items.',
    types: [
      { name: 'Audit process items', share: 'Largest block', detail: 'Audit standards, risk-based auditing and the audit lifecycle.' },
      { name: 'Governance and management items', share: 'Large block', detail: 'IT governance, frameworks, roles and responsibilities.' },
      { name: 'Security and resilience items', share: 'Large block', detail: 'Protection of assets, access controls, BC and DR.' }
    ],
    samples: [
      {
        prompt: 'An IS auditor is planning an audit of a critical financial system. The most appropriate first step is to:',
        options: ['A. Perform a risk assessment to prioritise the audit scope and objectives', 'B. Test all controls equally', 'C. Report findings before the fieldwork', 'D. Skip documentation to save time'],
        answer: 'A',
        explanation: 'Risk-based auditing begins with a risk assessment that drives the scope and objectives — the IS audit standard approach. Uniform testing, premature reporting or skipped documentation each violate the audit process.'
      },
      {
        prompt: 'Which control is most appropriate to detect unauthorised changes to application code?',
        options: ['A. Change-management controls with segregation of duties and code review', 'B. A strong firewall rule', 'C. Password complexity alone', 'D. Annual training'],
        answer: 'A',
        explanation: 'Detecting unauthorised code changes requires change-management controls — segregation of duties, approvals and code review. Firewalls, password policy and training address different risks and do not detect code changes.'
      },
      {
        prompt: 'A business continuity plan must specify the maximum acceptable downtime for a system. This requirement is the:',
        options: ['A. Recovery time objective (RTO)', 'B. Recovery point objective (RPO)', 'C. Service level agreement (SLA)', 'D. Business impact analysis (BIA)'],
        answer: 'A',
        explanation: 'The RTO is the maximum acceptable downtime — how quickly systems must be restored. The RPO is data-loss tolerance, the SLA is the service contract, and the BIA is the analysis that informs the objectives.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published job practice areas, not live exam items.'
  },
  examDay: {
    summary: 'The CISA exam is a 150-question, 4-hour computer-based exam at an ISACA-approved test centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 1.6 minutes per item, flag uncertain items for review, and budget time for the reading-heavy scenario items. Your result is reported as pass/fail after the exam, with the official report following. If you do not pass, the retake policy and fee apply. On a pass, the CISA is valid for three years and is renewed by earning 120 continuing professional education (CPE) hours every three years. The afterwards matters: log your CPEs as you earn them, because ISACA audits renewals, and submit the certification application if you have not already completed it.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '150 questions in 4 hours; pace ~1.6 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Pass/fail is reported; the official report follows.' },
      { time: 'Next', detail: 'Complete the certification application and start the CPE log.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '4 hours for 150 questions; the clock does not pause',
      'The certification renews every 3 years with 120 CPEs'
    ],
    afterwards: 'On a pass, complete the certification application and log 120 CPEs every three years. On a fail, retake per the ISACA policy after additional domain study.'
  }
};

export default data;
