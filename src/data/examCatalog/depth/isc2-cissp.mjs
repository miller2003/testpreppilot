const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers ISC2 and other cybersecurity certifications. Exam structure, fees and rules come from the certifying body\'s official pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ISC2\'s CISSP exam page and exam outline, and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CISSP" — the Certified Information Systems Security Professional credential certifies experienced security leadership and engineering, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780. The fit is deliberate: CISSP holders work as security engineers, security architects, managers and consultants — the experienced tier of this occupation — so the realistic benchmark for a CISSP holder sits at or above the median. BLS counted 182,300 information security analyst jobs in 2024 and projects a striking 30 percent growth from 2024 to 2034 — much faster than the average for all occupations — with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the CISSP\'s value is as a seniority and breadth signal; the credential requires five years of paid security experience across two or more of its eight domains, so holders are by definition experienced professionals. Read the number as the market for the occupation, with the CISSP concentrated at its upper half.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $71,280', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $173,780', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Projected openings per year', value: '~17,500', note: 'BLS OOH, SOC 15-1212, 2024-2034' }
    ],
    growth: 'BLS projects 30 percent growth for information security analysts from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'ISC2 publishes no pass rate — it publishes the passing score: 700 of 1000, on an adaptive exam of 125-175 questions in up to 3 hours',
    summary: 'ISC2 does not publish cohort pass rates for the CISSP, and third-party surveys are not official data, so we do not treat them as authoritative. What ISC2 does publish is the format and the passing standard: the CISSP is a computer-adaptive exam of 125 to 175 questions with a time limit of up to 3 hours, and a passing score of 700 on the 100-1000 scale. The adaptive design means the exam adjusts difficulty to your performance and stops when it is confident in your result — a candidate can finish early in as few as 125 questions. The exam is delivered at Pearson VUE centres or through online proctoring, and its content spans the eight CISSP domains: security and risk management; asset security; security architecture and engineering; communication and network security; identity and access management; security assessment and testing; security operations; and software development security. The absence of a published pass rate is not an absence of standards: the CISSP is widely considered one of the hardest exams in the field, and the 700 line on an adaptive paper rewards breadth across all eight domains plus the experience to reason like a security professional. The practical reading: target 80 percent-plus on practice and treat domain coverage and the mindset of "best security practice" as the core of preparation.',
    source: { label: 'ISC2 - CISSP certification', url: 'https://www.isc2.org/certifications/cissp' },
    caveat: 'ISC2 publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CISSP is an adaptive exam of 125-175 questions in up to 3 hours with a 700/1000 passing score, and its curriculum is the eight domains of the ISC2 Common Body of Knowledge. The certification also requires five years of paid security experience across two or more domains (or four years with a qualifying degree), so the exam sits on top of real experience. A defensible plan runs 150 to 250 hours over 3 to 6 months. Phase one (weeks 1-4) builds the foundation: work the first domains — security and risk management, asset security, and security architecture and engineering — with a study guide or official course, taking notes by domain. Phase two (weeks 5-8) covers the technical domains: communication and network security, identity and access management, and security assessment and testing, with hands-on exploration of the technologies. Phase three (weeks 9-12) covers security operations and software development security, then shifts to question-bank drilling in volume. Phase four (weeks 13-16) adds timed practice exams at the adaptive format, at least three full simulations, with error-log review mapped to the domains. The plan is experience-anchored: candidates with real security work accelerate the technical phases, while the domains outside their daily work — often software development security or asset security — need the most study.',
    totalHours: '150-250 hours over 3-6 months (plus the 5-year experience requirement)',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Foundation domains', tasks: ['Security and risk management', 'Asset security', 'Security architecture and engineering'], hours: 60 },
      { label: 'Weeks 5-8', focus: 'Technical domains', tasks: ['Communication and network security', 'Identity and access management', 'Security assessment and testing'], hours: 60 },
      { label: 'Weeks 9-12', focus: 'Operations and development', tasks: ['Security operations', 'Software development security', 'Question-bank drilling in volume'], hours: 60 },
      { label: 'Weeks 13-16', focus: 'Adaptive mocks', tasks: ['Three full timed practice exams', 'Review every miss mapped to the domains', 'Final pass over weak domains'], hours: 50 }
    ],
    variants: [
      { label: 'Five-plus years in security', detail: 'Compress the foundation domains; spend the extra time on the domains outside your daily work.' },
      { label: 'Four years plus degree', detail: 'Confirm the waiver path; the plan is unchanged, but eligibility matters before you study.' }
    ]
  },
  prepStrategies: {
    summary: 'The CISSP rewards breadth plus security judgement, so the dominant strategy is full-domain coverage with applied reasoning: every domain appears, and the exam items ask you to think like an experienced security professional choosing the best practice for a described situation. Second, use official and well-regarded study materials mapped to the eight domains, and take notes by domain so your review is structured. Third, drill the "best answer" mindset: CISSP items frequently have more than one defensible option, and the exam rewards the most appropriate security practice, not the technically clever one — practise choosing the best, not just a correct, answer. Fourth, take at least three full timed practice exams, because the adaptive format and the stamina of up to 3 hours are part of the test. Fifth, master the domains outside your daily work; most candidates find their weakest domain is the one they never touch professionally. Finally, confirm the endorsement and experience requirements early: the credential is awarded only after an endorsement by an ISC2 member and the annual maintenance fee is established.',
    items: [
      { title: 'Cover all eight domains', detail: 'Every domain appears; the exam rewards breadth plus judgement.' },
      { title: 'Take structured domain notes', detail: 'Organise study by the eight domains for efficient review.' },
      { title: 'Drill the best-answer mindset', detail: 'The exam rewards the most appropriate security practice, not the cleverest.' },
      { title: 'Run three full simulations', detail: 'The adaptive format and up to 3 hours of stamina are part of the test.' },
      { title: 'Confirm endorsement early', detail: 'The credential needs a member endorsement and the annual maintenance fee.' }
    ]
  },
  resourceComparison: {
    summary: 'CISSP prep is a mature market with three tiers. Official ISC2 resources include the exam outline (free), the official ISC2 CISSP training course (roughly $600-$1,500 for the instructor-led or self-paced formats) and the official practice tests. The widely used third-party study guides and courses — including the popular CISSP study guides and question banks — run from roughly $50 for a book to $1,000 for a full course bundle; practice-exam products with thousands of questions are the standard supplement. Free resources include the domain outline, ISC2 sample questions, and the security community forums. A realistic total budget is $500 to $2,500 including the exam fee (about $749) and the annual maintenance fee (about $135). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ISC2 exam outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'CISSP study guides (book)', values: ['$50-$100', 'Printed or digital book', 'Structured domain-by-domain reference'] },
      { label: 'ISC2 official training', values: ['$600-$1,500', 'Self-paced or instructor-led', 'The official learning path'] },
      { label: 'Third-party courses', values: ['$200-$1,000', 'Video courses and bundles', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$50-$200', 'Large online question banks', 'The best-answer drilling the exam rewards'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CISSP exam fee is about $749 plus the ~$135 annual maintenance fee; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CISSP mistake is studying the domains you already know and neglecting the rest: candidates with networking backgrounds pass the network domain and fail asset security or software development security, because every domain appears and the exam rewards breadth. The fix is full coverage with extra time on the unfamiliar domains. The second mistake is choosing technically correct but not best-practice answers: the CISSP rewards the most appropriate security response, and candidates who answer like hackers rather than security managers lose the judgement items. Third, many candidates underestimate the exam\'s length and adaptive nature, skipping full simulations and then flagging under the up-to-3-hour format. Fourth, some candidates rely on a single source; the exam draws on the whole Common Body of Knowledge, so a guide plus a large question bank is the standard stack. Finally, forgetting the endorsement and experience requirements means passing the exam but delaying the credential — confirm eligibility before studying, not after.',
    items: [
      { mistake: 'Studying only familiar domains', fix: 'Cover all eight; most failures sit in the domains outside daily work.' },
      { mistake: 'Answering as a hacker, not a manager', fix: 'Choose the best security practice, not the technically clever option.' },
      { mistake: 'Skipping full simulations', fix: 'Three timed mocks; the adaptive format and stamina are part of the test.' },
      { mistake: 'Relying on one source', fix: 'A guide plus a large question bank covers the Common Body of Knowledge.' },
      { mistake: 'Forgetting endorsement and experience', fix: 'Confirm eligibility before studying; the credential needs both.' }
    ]
  },
  questionTypes: {
    summary: 'The CISSP is an adaptive exam of 125-175 questions in up to 3 hours, entirely multiple-choice. The items span the eight domains and are heavily judgement-flavoured: described security situations with multiple defensible options, where the exam rewards the best security practice rather than the only correct answer. A large share of items test risk and management reasoning — policy, governance, compliance, risk analysis — alongside the technical domains, reflecting the credential\'s seniority. Samples below are editor-written illustrations of the published exam outline, not live exam items; they show the best-answer style of the real items.',
    types: [
      { name: 'Best-answer judgement items', share: 'Majority', detail: 'Situations with multiple defensible options; choose the best security practice.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Direct questions on principles, controls and framework concepts.' },
      { name: 'Risk and management items', share: 'Meaningful share', detail: 'Governance, policy, compliance and risk-analysis reasoning.' }
    ],
    samples: [
      {
        prompt: 'An organisation must reduce the risk of a data breach from lost laptops. The most effective control set is:',
        options: ['A. Full-disk encryption, strong authentication and remote wipe capability', 'B. A strong password policy only', 'C. A firewall rule blocking outbound traffic', 'D. Background checks for all employees'],
        answer: 'A',
        explanation: 'Protecting lost-laptop data requires encryption (confidentiality at rest), strong authentication (access control) and remote wipe (remediation) — a layered control set. Password-only, outbound-firewall or background-check-only measures each address a different or insufficient risk.'
      },
      {
        prompt: 'A security manager must decide which business impact drives the recovery time objective (RTO). The RTO is best defined as:',
        options: ['A. The maximum tolerable downtime before unacceptable business impact', 'B. The amount of data loss the business can tolerate', 'C. The time to restore data from backup', 'D. The cost of the recovery solution'],
        answer: 'A',
        explanation: 'The RTO is the maximum acceptable downtime — how quickly systems must be restored to avoid unacceptable business impact. Data-loss tolerance describes the RPO, restore time is a measurement, and cost is a budget constraint.'
      },
      {
        prompt: 'A developer proposes storing passwords as MD5 hashes. The security architect should:',
        options: ['A. Approve it, since hashing protects the passwords', 'B. Require a modern hashing algorithm with salting, such as bcrypt or Argon2', 'C. Require longer passwords instead', 'D. Store them encrypted with a shared key'],
        answer: 'B',
        explanation: 'MD5 is cryptographically weak for password storage; modern practice requires a salted, slow hashing algorithm such as bcrypt or Argon2. Approving MD5, relying on password length alone, or reversible encryption each fail current password-storage standards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam outline, not live exam items.'
  },
  examDay: {
    summary: 'The CISSP is an adaptive computer-based exam of 125-175 questions in up to 3 hours at a Pearson VUE centre or through online proctoring. Bring two forms of ID (including a government-issued photo ID matching your registration name) and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $749 fee. Because the exam is adaptive, it may end early when ISC2 is confident in your result — do not panic if it finishes at 125 questions; that is the design. Pace at about 1 minute per item and treat every question as the best-answer choice. You receive your score on screen at the end, against the 700/1000 line. If you fail, ISC2 requires a waiting period before retaking. On a pass, the credential is awarded after your endorsement application is approved, and it is maintained with 40 continuing professional education (CPE) credits per year plus the annual maintenance fee. The afterwards matters: complete the endorsement promptly, then set up the CPE logging habit, because ISC2 audits.',
    bring: ['Two forms of ID, including a government-issued photo ID', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in with two IDs, store belongings and complete security steps.' },
      { time: 'Exam', detail: 'Adaptive: 125-175 questions in up to 3 hours; pace ~1 minute per item.' },
      { time: 'After submit', detail: 'Score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Submit the endorsement application, then set up CPE logging.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'The exam is adaptive and may end after 125 questions',
      'A waiting period applies before retaking after a fail'
    ],
    afterwards: 'On a pass, complete the endorsement application to be awarded the CISSP, then maintain it with 40 CPEs per year and the annual maintenance fee. On a fail, wait the required period and retake after additional study.'
  }
};

export default data;
