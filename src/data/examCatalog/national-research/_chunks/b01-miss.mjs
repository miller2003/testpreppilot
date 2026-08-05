export const programs = [
  {
    id: 'nacpb',
    body: 'National Association of Certified Public Bookkeepers (NACPB)',
    bodyUrl: 'https://www.nacpb.org',
    about: 'NACPB is a U.S. professional association for bookkeepers that develops education, certification and licensing programs for working bookkeepers and small-business accounting practitioners. Its CPB license is a nationally recognized voluntary credential that lets holders use the "CPB" title.',
    registrationSteps: [
      { title: 'Complete required coursework', description: 'Finish the three foundational courses (Accounting Fundamentals, Intuit QuickBooks Fundamentals, Payroll Fundamentals) or submit equivalent transcripts for approval.' },
      { title: 'Pass the three certification exams', description: 'Book the Bookkeeping, QuickBooks and Payroll certification exams through the NACPB platform; each is 50 questions in two hours at 75%.' },
      { title: 'Complete QuickBooks training modules', description: 'Finish the Bookkeeping with QuickBooks Online and Payroll with QuickBooks Online training modules at 75%.' },
      { title: 'Verify one year of experience', description: 'Document 2,000 hours of bookkeeping experience supervised by a CPA, licensed CPB or approved bookkeeper via the Work Experience Verification form.' },
      { title: 'Submit the license application', description: 'Pay the $100 non-refundable application processing fee and agree to the Professional Code of Conduct.' }
    ],
    proctoring: 'Exams are delivered online through the NACPB platform as computer-based multiple-choice tests; results are scored electronically and shown immediately.',
    retakePolicy: 'Retakes cost $40 for members and $50 for non-members per part; candidates may resit a failed part after preparing again.',
    recertification: 'Individual certifications do not expire, but the CPB license carries annual membership and continuing-education maintenance obligations; confirm current CPE rules on nacpb.org.',
    scoreReporting: 'Scores are available immediately on screen after each exam, with a cumulative percentage; a 75% per part is required to pass.',
    providersNote: 'NACPB sells its own courses and the all-in-one CPB Program through Consortia Accounting School; third-party bookkeeping study guides also exist.',
    sourceUrl: 'https://www.nacpb.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'gfoa',
    body: 'Government Finance Officers Association (GFOA)',
    bodyUrl: 'https://www.gfoa.org/cpfo',
    about: 'GFOA is a professional association of public finance officers in the United States and Canada. Its Certified Public Finance Officer (CPFO) program is a self-study credential that validates mastery across the core disciplines of state and local government finance.',
    registrationSteps: [
      { title: 'Hold or obtain GFOA membership', description: 'Membership in GFOA is required to enroll; non-members must pay the annual membership fee first.' },
      { title: 'Pay the enrollment fee', description: 'Pay the $1,200 two-year enrollment fee, which includes up to 10 exam attempts across the seven exams.' },
      { title: 'Access the exam prep product', description: 'Use the LMS to reach recorded GFOA seminars, practice exams and the Clarus scheduling tool.' },
      { title: 'Schedule exams with Pearson VUE', description: 'Book each exam at a Pearson VUE centre or by remote proctoring through the Clarus platform.' },
      { title: 'Pass all seven exams within five years', description: 'Complete Accounting and Financial Reporting, Planning and Budgeting, Debt Management, Treasury and Investment Management, Compensation and Benefits, Risk Assessment and Procurement.' }
    ],
    proctoring: 'Exams are computer-based and delivered by Pearson VUE at U.S. and Canadian test centres or by online remote proctoring; formats may include multiple choice, free response and ranking.',
    retakePolicy: 'After a fail, wait two weeks before the second attempt and four weeks before any later attempt; five free attempts are included, then $200 per additional exam.',
    recertification: 'Once certified, CPFOs pay a $175 annual CPFO membership and complete 15 hours of CPE plus three engagement credits each year.',
    scoreReporting: 'Results are provided through the Clarus/Pearson VUE system; GFOA announces certification once all seven exams are passed.',
    providersNote: 'Prep is self-study using GFOA publications (many discounted 25%); the enrollment fee includes practice exams and recorded seminars.',
    sourceUrl: 'https://www.gfoa.org/cpfo',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'aicpa-cima',
    body: 'AICPA & CIMA',
    bodyUrl: 'https://www.aicpa-cima.com',
    about: 'AICPA & CIMA jointly award the Chartered Global Management Accountant (CGMA) designation. The CGMA Finance Leadership Programme (FLP) is a digital, continuous-assessment pathway to the CGMA Professional Qualification, ending in case study exams at three levels.',
    registrationSteps: [
      { title: 'Confirm your entry level', description: 'Based on prior qualifications and experience, you enter the FLP at the Foundational, Operational, Management or Strategic level.' },
      { title: 'Choose a subscription', description: 'Select a one, two or three year subscription; the fee covers CIMA registration, membership, learning, assessments and case study exam entry.' },
      { title: 'Complete topic assessments', description: 'Work through the digital modules and pass the topic-level assessments that gate progression at each level.' },
      { title: 'Book the case study exam', description: 'Schedule the three-hour case study exam for your level in one of the four annual windows (Feb, May, Aug, Nov) via Pearson VUE.' },
      { title: 'Pass all three case studies', description: 'Pass the Operational, Management and Strategic case study exams and meet the practical experience requirement for CGMA membership.' }
    ],
    proctoring: 'Case study exams are proctored at Pearson VUE test centres or online; they are human-marked, with results in 6-8 weeks.',
    retakePolicy: 'Failed case study exams can be retaken in a later window; higher-level learning progress is retained while you resit.',
    recertification: 'The CGMA designation requires ongoing CPD and relevant practical experience per CIMA/AICPA & CIMA rules; confirm current requirements on aicpa-cima.com.',
    scoreReporting: 'Case study results are released on My CIMA/Profile 6-8 weeks after the window closes; topic assessments are marked within the platform.',
    providersNote: 'The FLP is sold directly by AICPA & CIMA as an all-in-one subscription; traditional objective-test routes use separate CIMA exam fees.',
    sourceUrl: 'https://www.aicpa-cima.com/about/landing/the-cgma-finance-leadership-university-program',
    verified: true,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'nacpb-cpb',
    body: 'National Association of Certified Public Bookkeepers (NACPB)',
    tagline: 'Earn the right to put "CPB" after your name with a three-exam bookkeeping license built for small-business practice.',
    description: 'The Certified Public Bookkeeper (CPB) license from NACPB is a voluntary, nationally recognized U.S. credential for working bookkeepers. Candidates pass three 50-question exams covering bookkeeping, payroll and QuickBooks, complete two QuickBooks training modules, and document one year of supervised bookkeeping experience. Unlike a state CPA license, no jurisdiction requires it, but it signals verified competence and ethics to employers and small-business clients. It sits at the practitioner level beneath the CPA ladder and pairs naturally with QuickBooks consulting work.',
    quickAnswer: {
      summary: 'The CPB license requires passing three computer-based exams (Bookkeeping, Payroll and Intuit QuickBooks), each 50 multiple-choice questions in two hours with a 75% pass mark, plus one year of supervised bookkeeping experience and a $100 license application. Exam fees are $80 per part for NACPB members and $100 for non-members. The all-in-one CPB Program bundles coursework, exams, training and experience.',
      advantages: [
        'Use the protected "CPB" title after your name to signal verified bookkeeping skill.',
        'Three focused exams map directly to daily bookkeeping, payroll and QuickBooks work.',
        'Open to anyone who completes the coursework or approved equivalent transcripts - no degree required.',
        'Immediate electronic scoring means you know your result the moment you finish.',
        'Pairs with QuickBooks expertise for solo and small-firm bookkeeping practices.'
      ]
    },
    roadmap: ['Complete the three foundational courses', 'Pass the Bookkeeping, Payroll and QuickBooks exams', 'Finish the two QuickBooks training modules', 'Verify 2,000 hours of experience', 'Submit the license application'],
    prerequisites: 'None beyond completing NACPB coursework (or approved equivalent transcripts); a degree is not required.',
    eligibility: 'Candidates must complete Accounting Fundamentals, Intuit QuickBooks Fundamentals and Payroll Fundamentals (or equivalents) and document one year (2,000 hours) of bookkeeping experience supervised by a CPA, licensed CPB or approved bookkeeper.',
    examMeta: {
      questions: '50 per part (3 parts)',
      time: '2 hours per part',
      pass: '75% per part',
      fee: '$80 member / $100 non-member per part',
      format: 'Multiple choice, computer-based',
      admin: 'NACPB online platform'
    },
    topics: [
      { name: 'Bookkeeping Certification', note: 'Accounting fundamentals, adjusting entries, financial statements' },
      { name: 'Payroll Certification', note: 'Payroll calculations, tax forms, compliance' },
      { name: 'Intuit QuickBooks Certification', note: 'QBO setup, banking, reporting, client management' }
    ],
    examEssentials: [
      ['Parts', 'Three separate exams: Bookkeeping, Payroll, QuickBooks'],
      ['Pass mark', '75% on each part'],
      ['Experience', '1 year / 2,000 hours supervised bookkeeping'],
      ['Application fee', '$100 non-refundable']
    ],
    timeline: [
      { stage: 'Coursework', duration: '3-6 months' },
      { stage: 'Study and sit exams', duration: '1-3 months' },
      { stage: 'QuickBooks training modules', duration: '1-2 months' },
      { stage: 'Experience verification', duration: 'Up to 1 year (or Consortia program)' },
      { stage: 'License application', duration: '2-4 weeks' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (3 parts)', fee: '$240 member / $300 non-member' },
        { item: 'License application', fee: '$100' },
        { item: 'NACPB membership (optional)', fee: '$200/year' },
        { item: 'Prep courses / CPB Program', fee: 'Varies ($400-$500/month or bundle)' }
      ],
      total: '$340-$600+ (excludes optional courses/program)',
      footnote: 'All-in-one CPB Program pricing is separate; members receive exam discounts. Confirm current fees on nacpb.org.'
    },
    difficulty: 'Moderate',
    audience: 'Working and aspiring bookkeepers serving small businesses.',
    time: '6-12 months',
    cost: '$340-$600+',
    faqs: [
      { q: 'How hard is the CPB exam?', a: 'Each part is 50 multiple-choice questions in two hours and requires 75%, so you can miss only about 12 questions. Most candidates who complete the coursework and study part-time for a few weeks per part pass on the first attempt. The Bookkeeping part is generally considered the toughest because it tests the underlying accounting cycle.' },
      { q: 'How long does it take to get the CPB license?', a: 'Studying part-time, most candidates finish the three exams in roughly 6-9 months, with the one-year experience requirement running in parallel or afterwards. The Consortia bookkeeping experience program can satisfy the experience portion in about six months for program students.' },
      { q: 'Does the CPB license expire?', a: 'Individual NACPB certifications do not expire, but maintaining the CPB license requires annual membership and continuing-education obligations. Check the current CPE and renewal rules on the NACPB site before relying on this for long-term planning.' },
      { q: 'Is the CPB worth it?', a: 'For bookkeepers serving small businesses, the CPB signals verified competence and lets you use a protected title that builds client trust. It is less widely known than the AIPB Certified Bookkeeper but is strongly oriented to QuickBooks-heavy and solo practice.' },
      { q: 'What is the difference between CPB and CB?', a: 'CPB is issued by NACPB and emphasizes coursework plus QuickBooks, while the AIPB Certified Bookkeeper (CB) leans on two years of experience and a four-part exam. CPB requires one year of experience; both are voluntary U.S. credentials with no state mandate.' }
    ],
    summaryPoints: [
      'Three 50-question exams at 75% each: Bookkeeping, Payroll, QuickBooks.',
      'One year of supervised bookkeeping experience is required for the license.',
      'Exam fees are $80 (member) or $100 (non-member) per part.',
      'Open to anyone completing the coursework - no degree needed.'
    ],
    relatedSlugs: ['aipb-certified-bookkeeper', 'quickbooks-certified-proadvisor'],
    sourceUrl: 'https://www.nacpb.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cpfo-exams',
    body: 'Government Finance Officers Association (GFOA)',
    tagline: 'The broad self-study credential that proves mastery across every discipline of state and local government finance.',
    description: 'The Certified Public Finance Officer (CPFO) program from GFOA is a self-study credential for professionals in public-sector finance. Candidates pass seven computer-based exams spanning accounting and financial reporting, budgeting, debt, treasury, compensation and benefits, risk assessment and procurement, typically within a two-year enrollment. It is aimed at government finance officers rather than public accountants, and it complements the CGFM credential. GFOA membership is required to enroll, and the program is administered with Pearson VUE.',
    quickAnswer: {
      summary: 'CPFO requires passing seven exams across the core disciplines of government finance, completed within a five-year window (most finish in about two years). Enrollment is $1,200 for a two-year period and includes up to 10 exam attempts; GFOA membership is required. Exams are computer-based through Pearson VUE, and candidates typically study 2-3 months per exam. After certification, annual dues are $175 plus CPE.',
      advantages: [
        'Validates broad competence across all seven government finance disciplines in one credential.',
        'Self-study format with GFOA seminars and practice exams included in enrollment.',
        'Up to 10 exam attempts are bundled into the two-year enrollment fee.',
        'Recognized specifically by public-sector employers and finance officers.',
        'Pearson VUE delivery means convenient test centres or online remote proctoring.'
      ]
    },
    roadmap: ['Join GFOA', 'Pay $1,200 enrollment', 'Study 2-3 months per exam', 'Pass all seven exams in five years', 'Maintain with CPE and dues'],
    prerequisites: 'GFOA membership is required; a role in or interest in public finance is expected, but there is no fixed degree or experience gate to begin.',
    eligibility: 'Open to anyone working in or interested in a career in public finance. GFOA membership must be active to enroll, and candidates generally have government finance responsibilities, though the program sets no mandatory prior experience to start.',
    examMeta: {
      questions: 'Varies by exam (commonly 75-100 items)',
      time: 'Varies by exam',
      pass: 'GFOA-set passing score per exam',
      fee: '$1,200 enrollment (up to 10 attempts); $200 per extra exam',
      format: 'Computer-based: multiple choice, free response, ranking',
      admin: 'Pearson VUE test centre or online proctoring'
    },
    topics: [
      { name: 'Accounting and Financial Reporting', note: 'Governmental accounting and reporting standards' },
      { name: 'Planning and Budgeting', note: 'Operating and capital budgeting' },
      { name: 'Debt Management', note: 'Debt issuance and administration' },
      { name: 'Treasury and Investment Management', note: 'Cash, investments, banking' },
      { name: 'Compensation and Benefits', note: 'Public-sector pay and benefits' },
      { name: 'Risk Assessment', note: 'Risk management and internal control' },
      { name: 'Procurement', note: 'Purchasing and contracting' }
    ],
    examEssentials: [
      ['Exams', 'Seven required exams'],
      ['Enrollment', '$1,200 two-year (up to 10 attempts)'],
      ['Time limit', 'Five years to pass all exams'],
      ['Membership', 'GFOA membership required to enroll']
    ],
    timeline: [
      { stage: 'Enroll and join GFOA', duration: '1-2 weeks' },
      { stage: 'Study per exam', duration: '2-3 months each' },
      { stage: 'Sit seven exams', duration: '12-24 months' },
      { stage: 'Certification awarded', duration: 'On passing all seven' },
      { stage: 'Annual maintenance', duration: 'Ongoing (CPE + dues)' }
    ],
    costBreakdown: {
      items: [
        { item: 'Two-year enrollment (up to 10 attempts)', fee: '$1,200' },
        { item: 'GFOA membership (required)', fee: 'Varies by category' },
        { item: 'Extra exam after 10 attempts', fee: '$200 each' },
        { item: 'Annual CPFO membership after cert', fee: '$175/year' }
      ],
      total: '$1,200+ (plus GFOA membership)',
      footnote: 'GFOA membership is mandatory to enroll and its fee varies by category; reading materials are largely included except some publications.'
    },
    difficulty: 'Challenging',
    audience: 'Government and public-sector finance officers.',
    time: '2 years average (up to 5)',
    cost: '$1,200+',
    faqs: [
      { q: 'How hard is the CPFO?', a: 'The program is broad rather than deep, covering seven distinct disciplines, so the challenge is volume and consistency over time. GFOA reports an overall historical pass rate around 70%. Most candidates take each exam once after 2-3 months of self-study.' },
      { q: 'How long does it take to finish CPFO?', a: 'Most candidates complete all seven exams in about two years, which is the standard enrollment period. You are allowed up to five years from enrollment, and re-enrollment after year two costs $600 annually until you certify.' },
      { q: 'Does CPFO require a degree or government experience?', a: 'To begin, no specific degree or experience is required beyond GFOA membership and an interest in public finance. Historically some materials referenced a degree and government experience, but the current program is open to anyone in the field.' },
      { q: 'Is CPFO worth it for a government accountant?', a: 'For public-sector finance professionals it is the dedicated credential that signals mastery across all government finance disciplines and is recognized by public employers. It complements, rather than replaces, the CGFM and CPA credentials.' },
      { q: 'What happens if I fail an exam?', a: 'You wait two weeks before a second attempt and four weeks before later attempts. The enrollment includes up to 10 attempts across all exams; beyond that, each extra exam costs $200. No-shows forfeit the attempt.' }
    ],
    summaryPoints: [
      'Seven exams covering every government finance discipline.',
      'Two-year enrollment is $1,200 and includes up to 10 attempts.',
      'GFOA membership is required to enroll.',
      'Most candidates finish in about two years; up to five allowed.'
    ],
    relatedSlugs: ['cgfm-exams', 'cdfm-exams', 'cpa-exam'],
    sourceUrl: 'https://www.gfoa.org/cpfo',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cgma-finance-leadership-exam',
    body: 'AICPA & CIMA',
    tagline: 'A continuous-assessment fast path to the CGMA designation, capped by three-hour case study exams at each level.',
    description: 'The CGMA Finance Leadership Programme (FLP) is a digital, all-in-one pathway to the CGMA Professional Qualification offered jointly by AICPA and CIMA. Instead of sitting many objective tests, candidates learn and are assessed topic-by-topic inside the platform, then prove mastery with a three-hour case study exam at the Operational, Management and Strategic levels. It is built for professionals who prefer continuous assessment and remote study, and it converges with the traditional CIMA route at the case study exams. Passing all three, plus practical experience, earns the CGMA designation.',
    quickAnswer: {
      summary: 'The CGMA FLP delivers the CGMA Professional Qualification through continuous topic assessments and three three-hour case study exams (Operational, Management, Strategic), each offered in four windows per year. A subscription fee covers CIMA registration, membership, learning, assessments and case study exam entry; case study results arrive 6-8 weeks after the window. Most candidates complete the program within about a year of focused study.',
      advantages: [
        'Fewer exams than the traditional route - knowledge is assessed continuously, not by many objective tests.',
        'Fully remote, self-paced learning inside one platform.',
        'All-in-one subscription includes CIMA registration, membership and exam entry.',
        'Same CGMA designation and case study exams as every other CIMA pathway.',
        'Higher-level progress is retained if you need to resit an earlier case study.'
      ]
    },
    roadmap: ['Confirm entry level', 'Pick a subscription', 'Pass topic assessments', 'Book case study exams', 'Meet experience for CGMA'],
    prerequisites: 'An interest in management accounting; entry level is set by your prior qualifications and experience. No CPA or degree is required to start.',
    eligibility: 'Open to candidates worldwide. Your starting level (Foundational through Strategic) depends on prior learning and professional experience; relevant qualifications can grant entry partway through the program.',
    examMeta: {
      questions: 'Topic assessments vary; case study is task-based',
      time: '3 hours per case study exam',
      pass: 'CIMA-set pass mark per case study',
      fee: 'Subscription-based (includes exam entry)',
      format: 'Continuous assessment plus 3-hour case study',
      admin: 'Pearson VUE test centre or online proctoring'
    },
    topics: [
      { name: 'Operational level', note: 'Foundational management accounting; first case study' },
      { name: 'Management level', note: 'Mid-term monitoring and implementation; second case study' },
      { name: 'Strategic level', note: 'Long-term strategy; final case study' }
    ],
    examEssentials: [
      ['Case study exams', 'Three, one per professional level'],
      ['Case study length', '3 hours each'],
      ['Windows', 'Four per year (Feb, May, Aug, Nov)'],
      ['Results', '6-8 weeks after the window']
    ],
    timeline: [
      { stage: 'Subscribe and start', duration: 'Week 1' },
      { stage: 'Operational level', duration: '3-4 months' },
      { stage: 'Management level', duration: '3-4 months' },
      { stage: 'Strategic level', duration: '3-4 months' },
      { stage: 'Case studies and experience', duration: 'Ongoing to CGMA' }
    ],
    costBreakdown: {
      items: [
        { item: 'FLP subscription (1/2/3 year)', fee: 'Varies by length and region' },
        { item: 'CIMA registration & membership', fee: 'Included' },
        { item: 'Case study exam entry', fee: 'Included' }
      ],
      total: 'Subscription-based (confirm on aicpa-cima.com)',
      footnote: 'Exact subscription price is not uniformly published and varies by region and length; the fee includes registration, membership and exams.'
    },
    difficulty: 'Challenging',
    audience: 'Management accounting professionals seeking the CGMA designation.',
    time: 'About 1 year focused',
    cost: 'Subscription-based',
    faqs: [
      { q: 'How is the CGMA FLP different from the traditional CIMA route?', a: 'The FLP replaces most objective tests with continuous topic-by-topic assessment inside one platform, so there are far fewer exams. Both routes end at the same three-hour case study exams and award the identical CGMA designation, so the standard is unchanged.' },
      { q: 'How long does the FLP take?', a: 'Studying consistently, most candidates work through all three levels and their case study exams within about a year, though one, two or three year subscriptions are available. You control the pace because the learning is self-directed and remote.' },
      { q: 'What does the FLP cost?', a: 'The only direct cost is the subscription, which bundles CIMA registration, membership, all learning, assessments and case study exam entry. The published price varies by subscription length and region, so confirm the current figure on the AICPA & CIMA site.' },
      { q: 'Can I resit a case study exam?', a: 'Yes. If you fail a case study you can retake it in a later window, and your progress on higher levels is kept. Case study exams are offered four times a year, giving regular opportunities to resit.' },
      { q: 'Is the CGMA designation worth it?', a: 'For management accountants, CGMA is a globally recognized designation jointly backed by AICPA and CIMA. The FLP is attractive if you prefer continuous assessment and remote study over sitting many separate objective tests.' }
    ],
    summaryPoints: [
      'Continuous assessment plus three 3-hour case study exams.',
      'Subscription includes CIMA registration, membership and exam entry.',
      'Case study exams run four times a year; results in 6-8 weeks.',
      'Awards the same CGMA designation as the traditional CIMA route.'
    ],
    relatedSlugs: ['cma-part-1', 'cma-part-2', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/about/landing/the-cgma-finance-leadership-university-program',
    reviewed: '2026-08',
    confidence: 'medium'
  }
];

export default { programs, exams };
