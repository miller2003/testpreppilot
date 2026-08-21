const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers ISC2 and other cybersecurity certifications. Exam structure, fees and rules come from the certifying body\'s official pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ISC2\'s Certified in Cybersecurity (CC) exam page and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "ISC2 CC" — the Certified in Cybersecurity credential certifies entry-level cybersecurity knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780. The fit is deliberate: ISC2 CC holders typically enter security-support, SOC and junior analyst roles that sit inside this occupation, though the realistic benchmark for a brand-new holder is the lower part of the distribution, climbing with experience and further certification. BLS counted 182,300 information security analyst jobs in 2024 and projects a striking 30 percent growth from 2024 to 2034 — much faster than the average for all occupations — with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, and the CC is explicitly an entry-level credential; read the number as the market for the occupation you are entering, not the value of the entry certification, and note that employers typically require more than an entry credential for the analyst-level roles at the median.',
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
    headline: 'ISC2 publishes no pass rate — it publishes the passing score: 700 of 1000, with a 100-question, 2-hour exam',
    summary: 'ISC2 does not publish cohort pass rates for the Certified in Cybersecurity exam, and third-party surveys are not official data, so we do not treat them as authoritative. What ISC2 does publish is the format and the passing standard: the CC exam has 100 questions, a 2-hour time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring. The exam content follows the published domain outline: security principles; business continuity, disaster recovery and incident response concepts; access control concepts; network security; and security operations. The absence of a published pass rate is not an absence of standards: the 700 line is a meaningful bar, and the exam rewards understanding of security fundamentals across the domains rather than memorised trivia. The practical reading: target well above 700 on practice — 80 percent-plus — and use ISC2\'s official training and practice materials, the closest thing to the real item style. The CC is ISC2\'s entry credential, designed as an on-ramp to the field and to the broader ISC2 portfolio that includes the CISSP.',
    source: { label: 'ISC2 - Certified in Cybersecurity (CC) certification', url: 'https://www.isc2.org/certifications/cc' },
    caveat: 'ISC2 publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CC exam is a 100-question, 2-hour exam with a 700/1000 passing score, built on five published domains: security principles; business continuity, disaster recovery and incident response concepts; access control concepts; network security; and security operations. The credential is ISC2\'s entry certification, and the exam rewards a working understanding of security fundamentals rather than vendor-specific depth. A defensible plan runs 40 to 80 hours over 4 to 6 weeks. Weeks 1-2 cover security principles and access control: the core concepts of confidentiality, integrity and availability, risk management basics, and how authentication and authorisation work. Weeks 3-4 cover network security and security operations: network components, common attacks and defences, and the operational practices of monitoring and response. Week 5 covers business continuity, disaster recovery and incident response concepts. Week 6 adds practice-question drilling and a full timed simulation at the real 2-hour format. The plan is compact because the scope is entry-level, but the exam rewards applied understanding, so hands-on exploration of security concepts and systematic drilling matter more than reading volume.',
    totalHours: '40-80 hours over 4-6 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Principles and access control', tasks: ['CIA triad and risk management basics', 'Authentication, authorisation and accounting', 'Identity and access concepts'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Network security and operations', tasks: ['Network components and common attacks', 'Defences and monitoring practices', 'Security operations scenarios'], hours: 25 },
      { label: 'Week 5', focus: 'BC, DR and incident response', tasks: ['Business continuity concepts', 'Disaster recovery planning', 'Incident response fundamentals'], hours: 10 },
      { label: 'Week 6', focus: 'Drill and simulate', tasks: ['Practice-question drilling in volume', 'One full timed 2-hour simulation', 'Review weak domains'], hours: 15 }
    ],
    variants: [
      { label: 'IT professional cross-training', detail: 'Compress the principles phase; spend the extra time on network security and operations scenarios.' },
      { label: 'Complete beginner', detail: 'Add 2 weeks of IT fundamentals; the CC assumes basic computer and network literacy.' }
    ]
  },
  prepStrategies: {
    summary: 'The CC exam rewards understanding across five domains, so the dominant strategy is broad coverage with applied drilling: work every domain rather than going deep on favourites, because the exam draws from all five. Second, use ISC2\'s official training materials and the published domain outline as the scope map; ISC2\'s entry-level training course is designed specifically for this exam. Third, drill the scenario items — described security situations with the correct principle, control or response — because the exam applies concepts rather than testing recall alone. Fourth, hold yourself to 80 percent-plus on practice exams, because the 700 line on a 100-question paper leaves no margin. Fifth, take at least one full timed simulation; 100 questions in 2 hours is about 72 seconds per item, and the pacing matters. Finally, treat the CC as the on-ramp it is designed to be: the material maps toward the CISSP and other ISC2 credentials, so study for understanding and plan the next certification while the momentum is fresh.',
    items: [
      { title: 'Cover all five domains', detail: 'The exam draws from every domain; broad coverage beats deep dives.' },
      { title: 'Use ISC2 official training', detail: 'The domain outline and official course are the scope map.' },
      { title: 'Drill the scenario items', detail: 'The exam applies concepts; practise described situations.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 700/1000 line on 100 questions leaves no margin.' },
      { title: 'Plan the ISC2 path', detail: 'The CC maps toward the CISSP; study for understanding.' }
    ]
  },
  resourceComparison: {
    summary: 'CC prep is inexpensive because ISC2 designed the entry credential with accessible resources. ISC2\'s official training course (roughly $300-$500, and historically offered free during promotional periods), the free exam outline and practice questions cover most of the scope; the exam fee itself is about $199. Third-party providers sell CC courses and question banks at $50-$250, and the free cybersecurity fundamentals resources — NIST publications, online security courses and practice-question sites — add useful depth. A realistic total budget is $250 to $800 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ISC2 exam outline + domain docs', values: ['Free', 'Official PDFs', 'The authoritative scope; read them first'] },
      { label: 'ISC2 official training course', values: ['$300-$500', 'Self-paced online course', 'The official entry-level learning path'] },
      { label: 'Third-party CC courses', values: ['$50-$250', 'Video courses and quizzes', 'Structured walkthrough of the domains'] },
      { label: 'Question banks', values: ['$30-$150', 'Online practice items', 'Volume drilling before the exam'] },
      { label: 'Free security fundamentals resources', values: ['$0', 'NIST docs, online courses', 'Supplementary depth for beginners'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CC exam fee is about $199; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CC mistake is memorising security vocabulary without understanding the principles: candidates who can recite definitions but cannot apply the right control to a described situation fail the applied items. The fix is scenario drilling from the start. The second mistake is skipping domains — the exam draws from all five, and candidates with a networking background routinely under-prepare the BC/DR and operations groups. Third, some candidates over-invest in expensive third-party courses when the official training and free resources suffice for an entry exam; scope discipline matters more than spend. Fourth, candidates misjudge the pace — 100 questions in 2 hours is 72 seconds per item, and slow readers run out of minutes. Finally, treating the CC as the end of the path is the quiet mistake: the credential is ISC2\'s on-ramp, and the analyst-level market the BLS numbers describe is served by the CISSP and experience, so plan the next step.',
    items: [
      { mistake: 'Memorising vocabulary', fix: 'Drill applied scenarios; the exam rewards the right control for the situation.' },
      { mistake: 'Skipping domains', fix: 'Cover all five; networking-only candidates under-prepare BC/DR and operations.' },
      { mistake: 'Over-investing in courses', fix: 'Official training plus free resources suffice for an entry exam.' },
      { mistake: 'Misjudging the pace', fix: '100 questions in 2 hours; run a timed simulation.' },
      { mistake: 'Treating CC as the finish', fix: 'It is the on-ramp; plan the CISSP and the experience path.' }
    ]
  },
  questionTypes: {
    summary: 'The CC exam is a 100-question multiple-choice exam in 2 hours. The items test security fundamentals across the five domains — security principles, BC/DR and incident response concepts, access control, network security, and security operations — with a large share of scenario items presenting a described situation and asking for the correct principle, control or response. The exam rewards applied understanding of security concepts rather than vendor-specific recall. Samples below are editor-written illustrations of the published domain outline, not live exam items; they show the applied style of the real items.',
    types: [
      { name: 'Concept items', share: 'Roughly half', detail: 'Principles, controls and terminology across the five domains.' },
      { name: 'Applied scenario items', share: 'Roughly half', detail: 'Described situations with the correct security response.' }
    ],
    samples: [
      {
        prompt: 'A security analyst must protect data in transit between a browser and a web server. The most appropriate control is:',
        options: ['A. Encryption using TLS', 'B. A firewall rule allowing all traffic', 'C. Password complexity policy', 'D. Full-disk encryption on the server'],
        answer: 'A',
        explanation: 'TLS encrypts data in transit between client and server, protecting it from interception. Firewall rules allowing all traffic, password policy and full-disk encryption address different risks — none protects the transit channel.'
      },
      {
        prompt: 'An organisation\'s primary data centre is destroyed in a flood. Which plan defines how the organisation resumes critical operations?',
        options: ['A. The disaster recovery plan', 'B. The password policy', 'C. The acceptable use policy', 'D. The network diagram'],
        answer: 'A',
        explanation: 'The disaster recovery plan defines how an organisation recovers critical systems and resumes operations after a disaster. Password policy, acceptable use and network diagrams are operational documents, not recovery plans.'
      },
      {
        prompt: 'Which authentication factor is an example of "something you have"?',
        options: ['A. A hardware token', 'B. A password', 'C. A fingerprint', 'D. A PIN'],
        answer: 'A',
        explanation: 'A hardware token is "something you have" — a possession factor. Passwords and PINs are knowledge factors, and fingerprints are biometric (inherence) factors.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published domain outline, not live exam items.'
  },
  examDay: {
    summary: 'The CC exam is a 100-question, 2-hour computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 72 seconds per item, flag uncertain items for review, and finish with time to spare. You receive your score on screen immediately, with the official result following; ISC2 reports your scaled score against the 700 line. If you fail, retake per ISC2 rules. On a pass, the certification requires an annual maintenance fee to stay current, and ISC2\'s entry credential has lighter maintenance than the professional credentials. The afterwards matters: the CC is an on-ramp — plan the next ISC2 credential (commonly the CISSP once experience accumulates) and begin building the security experience the analyst market rewards.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '100 questions in 2 hours; pace ~72 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Plan the annual maintenance and the next ISC2 credential.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 100 questions; the clock does not pause',
      'Retake rules apply after a fail'
    ],
    afterwards: 'On a pass, keep the CC current with the annual maintenance fee. On a fail, retake after additional domain study. Use the credential as the on-ramp to the CISSP and the analyst market.'
  }
};

export default data;
