// Depth content for: nacpb-cpb
// Sourced from NACPB's CPB program materials (nacpb.org, license application page,
// consortiaaccountingschool.com pricing) and BLS OOH for wage data. Every numeric
// row is sourced. Sample questions are editor-written illustrations of the published
// CPB blueprint, not live exam items. NOTE the sibling distinction from AIPB's CB:
// the CPB is delivered entirely ONLINE (no test center), its three exams carry a
// uniform 75% mark, and the credential splits into certificates that never expire
// versus an annual licence that requires 24 CPE/yr. This file leads with those
// differences rather than repeating the AIPB structure.
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
    headline: '$49,210 median annual wage for bookkeeping clerks (BLS, May 2024)',
    summary: 'The Certified Public Bookkeeper (CPB) maps to the same federal group as the AIPB CB — "Bookkeeping, Accounting, and Auditing Clerks" (SOC 43-3031) — because the U.S. government does not isolate credentialed bookkeepers in a separate wage series. BLS puts the median annual wage at $49,210 (May 2024): the lowest 10 percent earn under $34,600 and the highest 10 percent exceed $72,660. What differs from the AIPB path is the CPB\'s explicit QuickBooks Online exam and its annual licence framing, which positions holders for outsourced and cloud-bookkeeping practices where software fluency is the differentiator. The same honest macro caveat applies: BLS projects a -6 percent decline in this occupation from 2024 to 2034 as automation absorbs routine transaction work, across roughly 1.6 million jobs. The CPB does not reverse that trend, but its QuickBooks Online component and the annual renewal signal current, software-up-to-date competence — exactly the parts of the job least exposed to automation. Candidates should read the credential as a currency-and-tooling signal (especially for solo and small-firm bookkeepers selling cloud services) rather than a guaranteed wage premium, and should expect geography and niche to move the number more than the letters "CPB" alone.',
    rows: [
      { label: 'Median annual wage', value: '$49,210', note: 'BLS OOH, Bookkeeping/Accounting/Auditing Clerks (SOC 43-3031), May 2024' },
      { label: 'Lowest 10%', value: '< $34,600', note: 'BLS OOH, SOC 43-3031, May 2024' },
      { label: 'Highest 10%', value: '> $72,660', note: 'BLS OOH, SOC 43-3031, May 2024' },
      { label: 'Employment', value: '1,613,400', note: 'BLS OOH, SOC 43-3031, May 2024' },
      { label: 'Projected change 2024-2034', value: '-6% (decline)', note: 'BLS OOH — automation/cloud accounting absorbing routine work' }
    ],
    growth: 'Projected -6% decline 2024-2034 (BLS OOH), same occupational group as the AIPB CB. The CPB\'s QuickBooks Online exam and annual licence emphasize cloud-bookkeeping currency. Note the name is misleading: the CPB is a voluntary private credential, not a state-issued licence — no U.S. state requires bookkeepers to be licensed, so it signals competence, not legal authority to practice.',
    source: { label: 'BLS Occupational Outlook Handbook — Bookkeeping, Accounting, and Auditing Clerks', url: 'https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Pass mark: 75% on all three exams (no published pass rate)',
    summary: 'NACPB does not publish a candidate pass rate for the CPB exams — there is no official first-time or cumulative percentage available, so any specific "X% pass" claim is unsourced. What NACPB publishes is the uniform pass MARK of 75 percent across all three exams: Bookkeeping, Payroll, and QuickBooks Online, each a 50-question, two-hour online test. Unlike the AIPB CB, which uses a 75/70 split and mixes Prometric with open-book finals, the CPB applies one consistent bar and is taken entirely online through NACPB\'s testing center. Retake rules are published and cheaper than AIPB\'s: a failed exam may be retaken for $40 (member) or $50 (nonmember), versus the $60 Prometric retake at AIPB. You keep credit for any exam you pass, so a single weak area does not void the others. Plan to clear 75 percent on each of the three; the QuickBooks Online exam is the one many pure "write-the-books" bookkeepers underprepare for, because it tests software mechanics, not just accounting theory. Treat 75 percent as your floor and target low-80s so a few ambiguous items do not drop you below the line.',
    source: { label: 'NACPB CPB program materials (nacpb.org)', url: 'https://www.nacpb.org/certified-public-bookkeeper/' },
    caveat: 'NACPB publishes no candidate pass rate. Only the 75% pass mark and the $40/$50 retake fees are official. Do not cite a specific percentage pass rate for this exam.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Most candidates budget roughly 60-90 total study hours across the three CPB exams, lighter than the AIPB CB because all three are online, open-resource-friendly, and share conceptual ground with everyday bookkeeping. The schedule below assumes 6-8 hours per week over about 10-12 weeks, sitting Bookkeeping, Payroll, and QuickBooks Online in that order. Bookkeeping is the broadest and carries the most recall; Payroll overlaps heavily with the AIPB-style form calendar but is tested at the 75 percent bar; QuickBooks Online is the wildcard and deserves a real software environment, not just reading. Because the exams are online and self-scheduled, the risk is not the test center — it is never booking them; set three firm dates up front. The CPB experience requirement (1 year or 2,000 hours supervised by a CPA, CPB, or accountant) is shorter than AIPB\'s two-year rule, and the licence (not the certificates) is what expires annually, so plan the 24 CPE/year from year one. If you work full-time, stretch to 14-16 weeks at 4-6 hours per week; if you use QuickBooks daily, compress the third exam hard.',
    totalHours: '60-90 hours total (three online exams)',
    weeks: [
      { label: 'Weeks 1-4 — Bookkeeping exam', focus: 'Journal entries, the accounting cycle, financial statements, bank rec', tasks: ['Rebuild the full accounting cycle from source docs', 'Drill adjusting entries and the adjusted trial balance', 'Practice bank reconciliation cold'], hours: '6-8 hrs/week' },
      { label: 'Weeks 5-8 — Payroll exam', focus: 'Classification, withholding, deposits, Forms 941/940/W-2/W-3, payroll journal', tasks: ['Compute employee and employer payroll taxes', 'Memorize deposit frequencies and form deadlines', 'Post payroll entries to the ledger'], hours: '6-8 hrs/week' },
      { label: 'Weeks 9-12 — QuickBooks Online exam', focus: 'Company setup, lists, transactions, reports, bank feeds', tasks: ['Build a sample QBO company and run the cycle', 'Reconcile accounts and produce reports in software', 'Practice the exam in a live QBO session, not from notes'], hours: '6-8 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time', detail: 'Stretch to 14-16 weeks at 4-6 hrs/week; set three firm online exam dates up front to avoid drift.' },
      { label: 'Daily QuickBooks user', detail: 'Compress the QBO exam to 1-2 weeks; spend the saved time on payroll form deadlines, the weakest area for software-native bookkeepers.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The CPB is an online, self-scheduled credential, so the biggest lever is environment discipline, not test-center logistics. First, book all three exam dates before you start studying — the online format removes the external deadline that forces AIPB candidates to show up at Prometric, and unbounded scheduling is how CPB candidates stall. Second, prepare for QuickBooks Online in the actual software: the exam tests where buttons live and how flows connect, which reading alone never teaches. Third, drill the payroll form calendar (941 quarterly, 940 annual, W-2/W-3 by Jan 31, deposit schedules) exactly as you would for any bookkeeping exam — it is tested at the same 75 percent bar. Fourth, use NACPB\'s own courses and the Consortia Accounting School materials, since the exams are written to that curriculum and the bundle pricing rewards buying the set. Fifth, track CPE from day one: unlike the AIPB CB where certificates and renewal move together on a three-year clock, the CPB splits never-expiring certificates from an annual licence requiring 24 CPE per year, so letting December 31 pass without CPE lapses the licence even though your certificates remain valid. That split is the most misunderstood part of the program.',
    items: [
      { title: 'Book all three online exam dates before studying', detail: 'With no test center deadline, self-scheduled exams get postponed indefinitely. Lock three dates up front so the online convenience does not become procrastination.' },
      { title: 'Prep QuickBooks Online inside the software', detail: 'The exam tests real QBO mechanics — company setup, lists, bank feeds, reports. Build a sample company and run the full cycle; reading the curriculum will not teach button placement.' },
      { title: 'Own the payroll form calendar', detail: '941 (quarterly), 940 (annual), W-2/W-3 (Jan 31), and deposit frequencies are tested at the 75% bar. A one-page deadline sheet drilled from memory removes the easiest avoidable losses.' },
      { title: 'Buy the bundle, not single exams', detail: 'The CPB License Bundle (about $1,077.60 member / $1,347 nonmember) covers the courses and exams far cheaper than piecemeal, and the exams track that curriculum.' },
      { title: 'Track CPE from year one — the licence expires, certificates do not', detail: 'CPB certificates never expire, but the licence lapses every Dec 31 without 24 CPE/yr. Log CPE continuously so the annual renewal is automatic, not a scramble.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'NACPB sells a stack of separate products, and the most common mistake is confusing them (see Common Mistakes). The building blocks are three individual certification exams — Bookkeeping, Payroll, and Intuit QuickBooks Online — each $80 (member) / $100 (nonmember) and each earning a certificate that never expires. Stacking all three, plus one year of supervised experience and a $100 application fee, produces the CPB LICENCE, which is the only piece that expires (annually, with 24 CPE/yr and an $80 member / $100 nonmember renewal). The practical low-friction route is the CPB License Bundle, which bundles the three courses, the three exams and the three certificates for $1,077.60 (member) / $1,347 (nonmember); single exams are $80/$100 with $40/$50 retakes. For candidates who want the whole path — courses, exams, two QuickBooks training modules, supervised experience and the licence application — in one 12-month programme, NACPB\'s CPB Program (via Consortia Accounting School) runs $4,320 one-time (member) / $5,400 (nonmember), or $400/$500 per month. Membership is $200/yr and yields the ~20% bundle discount; NACPB has announced that from 1 Jan 2027 only licensed CPBs may hold membership. There is no Prometric fee and no paid workbook, unlike the AIPB CB. Third-party CPB-specific prep is thin, so most candidates use NACPB\'s own materials. We do not rank by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CPB License Bundle (member)', values: ['$1,077.60', 'Online courses + 3 exams + 3 certificates', 'Best value for new candidates (incl. ~20% member discount)'] },
      { label: 'CPB License Bundle (nonmember)', values: ['$1,347.00', 'Online courses + 3 exams + 3 certificates', 'Candidates who skip the $200/yr membership'] },
      { label: 'Single certification exam (Bookkeeping/Payroll/QBO)', values: ['$80 member / $100 nonmember', 'Online exam only', 'Retakers or those with prior prep; retake $40/$50'] },
      { label: 'CPB Program (Consortia, all-in-one)', values: ['$4,320 / $5,400 one-time; or $400/$500 per month', '12-month program: courses + exams + 2 QBO training modules + supervised experience + licence application', 'Candidates wanting the full path with built-in experience'] },
      { label: 'CPB licence — application', values: ['$100 (nonrefundable)', 'One-off, after exams + experience', 'Required to place "CPB" after your name'] },
      { label: 'CPB licence — annual renewal', values: ['$80 member / $100 nonmember + 24 CPE/yr', 'Every Dec 31', 'The part that expires; the certificates do NOT'] },
      { label: 'NACPB membership', values: ['$200/yr', 'Association membership', 'Unlocks ~20% bundle discount; from 2027 members-only for licensed CPBs'] }
    ],
    footnote: 'Prices checked 2026-08 from NACPB public storefronts and the Consortia CPB Program page (list). The $1,077.60/$1,347 bundle and the $4,320/$5,400 program are both current NACPB offerings — the program is the all-in-one 12-month path that also supplies the supervised-experience requirement. Exam fees are per exam; retakes are $40/$50. The licence application ($100) is separate from the annual renewal ($80/$100). We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'CPB candidates fail in ways that mirror the credential\'s structure — especially the certificate-versus-licence split and the all-online format. The dominant error is letting the licence lapse while assuming "I\'m certified forever": the certificates never expire, but the licence expires every December 31 and needs 24 CPE per year, so a holder can be "certified but not licensed" without realizing it. Second is software neglect on the QuickBooks Online exam — bookkeepers who only read theory cannot navigate the live interface and miss mechanics questions. Third is payroll-form drift, the same weakness seen on every bookkeeping exam. Fourth is never scheduling the online exams, since the absence of a Prometric deadline removes the forcing function. Fifth is buying single exams piecemeal instead of the bundle, paying more for the same coverage. None of these are competence gaps; they are planning and structure misunderstandings, and the candidates who stumble usually knew the accounting but misread the programme\'s rules.',
    items: [
      { mistake: 'Conflating NACPB\'s products — a certificate is not the licence', fix: 'NACPB sells three standalone certificates (Bookkeeping, Payroll, Intuit QuickBooks Online) plus the CPB LICENCE. Passing the three exams earns three certificates that never expire; the CPB licence additionally needs 1 year supervised experience + a $100 application and is the only piece that expires (24 CPE/yr, $80/$100 renewal). You can hold all three certificates and still not be "licensed." Know which you are buying.' },
      { mistake: 'Assuming "CPB" is a government-issued licence', fix: 'Despite the name, the CPB is voluntary — no U.S. state requires bookkeepers to be licensed, and it confers no legal authority to practice. It is a private credential that lets you use "CPB" after your name. Do not market it to clients as a state licence.' },
      { mistake: 'Studying QuickBooks Online from a book', fix: 'The exam is software-mechanical. Practice in a live QBO company — setup, lists, bank feeds, reports — so button placement and flows are automatic.' },
      { mistake: 'Neglecting the payroll form calendar', fix: '941/940/W-2/W-3 deadlines and deposit schedules are tested at 75%. Drill them from memory; they are the easiest points to lose.' },
      { mistake: 'Never booking the online exams', fix: 'With no test-center deadline, set three firm dates before you study. The online convenience becomes procrastination without self-imposed dates.' },
      { mistake: 'Buying exams one at a time', fix: 'The License Bundle ($1,077.60 member / $1,347 nonmember) is far cheaper than three single exams plus the licence fee; the CPB Program ($4,320/$5,400) adds the supervised experience. Buy the set unless you only need a retake.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The CPB is three separate online exams — Bookkeeping, Payroll, and QuickBooks Online — each a 50-question, two-hour multiple-choice test with a uniform 75 percent pass mark, delivered through NACPB\'s online testing center (no Prometric, no open-book finals, unlike the AIPB CB). The Bookkeeping exam covers the accounting cycle, journal entries, adjustments, the trial balance, financial statements, and bank reconciliation. The Payroll exam covers worker classification, withholding, employer taxes, deposit rules, and the W-4/941/940/W-2/W-3 cycle. The QuickBooks Online exam covers company setup, the chart of accounts and lists, day-to-day transaction entry, bank feeds and reconciliation, and report generation inside the software. Because all three are closed-book and online, the questions test recall and application under a two-hour clock; the QuickBooks exam additionally tests procedural knowledge of the software. Separately, earning the licence (as opposed to the three standalone certificates) also requires two QuickBooks training modules — Bookkeeping with QuickBooks Online and Payroll with QuickBooks Online — each passed at 75%; these are coursework assessments, not the public certification exams. Samples below are editor-written to match the certification blueprint and are not live exam items.',
    types: [
      { name: 'Multiple-choice — Bookkeeping exam', share: '50 questions / 2 hours', detail: 'Accounting cycle, journal entries, adjustments, financial statements, bank reconciliation. 75% to pass.' },
      { name: 'Multiple-choice — Payroll exam', share: '50 questions / 2 hours', detail: 'Classification, withholding, deposits, Forms W-4/941/940/W-2/W-3. 75% to pass.' },
      { name: 'Multiple-choice — QuickBooks Online exam', share: '50 questions / 2 hours', detail: 'QBO setup, lists, transactions, bank feeds, reports. Software-mechanical; 75% to pass.' }
    ],
    samples: [
      { prompt: 'A company receives a $1,200 utility bill for December but will pay it in January. At December 31, the correct adjusting entry is:', options: ['A. Debit Utilities Expense $1,200; credit Cash $1,200', 'B. Debit Utilities Expense $1,200; credit Accounts Payable $1,200', 'C. Debit Prepaid Utilities $1,200; credit Cash $1,200', 'D. Debit Accounts Payable $1,200; credit Utilities Expense $1,200'], answer: 'B', explanation: 'B is correct: the expense is incurred in December (accrual), so debit Utilities Expense and credit the liability Accounts Payable. A is wrong because cash has not been paid. C treats it as prepaid, which it is not. D reverses the correct accounts.' },
      { prompt: 'Under the monthly deposit schedule, an employer must deposit withheld federal income and FICA taxes by:', options: ['A. The 15th of the following month', 'B. The employer\'s next payroll date', 'C. The quarter-end on Form 941', 'D. December 31'], answer: 'A', explanation: 'A is correct for monthly-deposit-status employers: deposits are due by the 15th of the month after the payroll. B confuses payment timing with deposit timing; C is the reporting form, not the deposit deadline; D is irrelevant.' },
      { prompt: 'In QuickBooks Online, which action records a customer\'s invoice payment received via bank deposit?', options: ['A. Create a Journal Entry debiting Cash and crediting Accounts Receivable', 'B. Use Receive Payment, then match it to the bank deposit', 'C. Enter it directly as a Sales Receipt', 'D. Post to Owner\'s Equity'], answer: 'B', explanation: 'B is correct: in QBO you use Receive Payment to close the open invoice and then match it to the downloaded bank deposit. A bypasses A/R linkage; C is for immediate sale-with-payment, not invoice settlement; D is unrelated.' }
    ],
    note: 'Samples are editor-written illustrations of the published NACPB CPB blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'All three CPB exams are taken online through NACPB\'s testing center, so "exam day" is a scheduled session at your own computer rather than a Prometric visit. You pick the time, which removes travel and check-in friction but also removes the external deadline — book the slot as you would a real appointment. You will need a stable internet connection and a quiet space; NACPB\'s online proctoring rules (if remote proctoring is used for your attempt) generally require a webcam and a clear desk, with phones and notes out of reach. Have your NACPB login and the exam confirmation ready, and confirm your system meets the testing-center requirements before the clock starts. Each exam is 50 questions in two hours, closed-book. Because it is online and self-paced in scheduling, the real discipline is starting on time and not pausing to look things up — the exam is monitored, and leaving the screen is flagged. After finishing, you typically receive a result through the NACPB portal; retakes (if needed) are $40/$50 after you rebook.',
    bring: [
      'A computer with stable internet and the NACPB testing-center requirements met',
      'Your NACPB login and exam confirmation',
      'A valid photo ID if remote proctoring is required'
    ],
    leave: [
      'Phones, notes, and reference books within reach during the session (online proctoring requires a clear desk)',
      'Unapproved browser tabs or second monitors, if proctoring prohibits them'
    ],
    timeline: [
      { time: 'Before scheduled start', detail: 'Verify system check, close distractions, confirm ID if proctored.' },
      { time: 'Start', detail: '50 questions / 2 hours, closed-book, per exam.' },
      { time: 'After submit', detail: 'Result posted to NACPB portal; retake ($40/$50) if below 75%.' }
    ],
    rules: [
      'Closed-book; online proctoring (if applied) requires a webcam and clear desk.',
      'You keep credit for any exam passed at 75%; retake a failed exam for $40 member / $50 nonmember.'
    ],
    afterwards: 'Result appears in the NACPB portal. After all three pass plus the 1-year/2,000-hour supervised experience, pay the $100 nonrefundable licence fee; renew the licence annually (Dec 31) with 24 CPE/yr, while the underlying certificates never expire.'
  }
};

export default data;
