const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers financial-services credentials, including designations awarded through the Mortgage Bankers Association. Program structure, course requirements and grading standards come from the MBA Education course pages and the AMP designation materials, which are revised as the School of Mortgage Banking curriculum changes; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When the issuing body does not publish a figure, such as a designation pass rate, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AMP designation structure and the SOMB course grading standard against the MBA Education School of Mortgage Banking pages and the MBA AMP designation announcement, and wage context against BLS OOH Loan Officers (SOC 13-2072), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$74,180 median for loan officers (BLS, May 2024) — the closest occupation to the AMP\u2019s career track',
    summary:
      'The direct answer is that there is no BLS occupation called "accredited mortgage professional", so the AMP salary story is benchmarked to Loan Officers, SOC 13-2072, which had a May 2024 median wage of $74,180. That is the closest official occupation because the AMP designation is earned by mortgage-industry professionals — originators, processors, underwriters, secondary-marketing staff and servicers — who work in the residential real estate finance industry, and loan officers are the largest named occupation in that space. The distribution is wide and production-sensitive: loan officer pay is heavily tied to the volume of loans originated, so BLS classifies the occupation by duties and the wage base is a role benchmark rather than a designation premium. BLS counted about 299,000 loan officer jobs in 2024 and projects roughly 5 percent growth from 2024 to 2034, about as fast as the average for all occupations, with around 19,100 openings a year — almost all from replacement need as originators age out and turnover. The AMP itself is a mid-career credential aimed at people with two or more years of mortgage-industry experience who want the management-track foundation the School of Mortgage Banking provides, so the more relevant long-term comparison is the management layer above loan origination: Financial Managers, SOC 11-3031, carried a May 2024 median of $161,700, and property, real-estate and community association managers a lower median. The honest framing is that the AMP is a human-capital signal for career progression within mortgage banking rather than a licence that changes your BLS classification, and the wage you benchmark is the role, not the designation.',
    rows: [
      { label: 'Median annual wage, loan officers', value: '$74,180', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Lowest 10 percent, loan officers', value: 'Below $43,070', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Highest 10 percent, loan officers', value: 'Above $148,910', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Median, financial managers (management-track comparison)', value: '$161,700', note: 'BLS OOH, SOC 11-3031, May 2024' },
      { label: 'Employment, loan officers, 2024', value: '~299,000 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: 'BLS projects roughly 5 percent growth for loan officers (SOC 13-2072) from 2024 to 2034, with about 19,100 openings a year, almost all from replacement need.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Loan Officers',
      url: 'https://www.bls.gov/ooh/business-and-financial/loan-officers.htm'
    }
  },
  passRate: {
    headline: 'The Mortgage Bankers Association publishes no pass rate for the AMP — the published standard is a 75 percent score on each SOMB course exam',
    summary:
      'The direct answer is that the Mortgage Bankers Association does not publish pass rates for the School of Mortgage Banking courses or the Accredited Mortgage Professional designation, and no authoritative aggregate exists, so the honest headline is the published grading standard. The AMP is earned by completing all three SOMB courses. SOMB I and SOMB II each end in a comprehensive final examination that must be passed with a score of 75 percent or greater, and candidates are given three attempts to pass each course exam; if the exam is not passed after three attempts, the candidate must re-register and retake the entire course. SOMB III is the graduation course, completed on the basis of successful class participation. Each SOMB course is delivered as a four-day classroom programme or a four-week online programme, and passing a course requires both full attendance and the passing exam score. Because the AMP is a designation earned through course completion rather than a single high-stakes licensing exam, there is no one sitting to measure a pass rate against — the meaningful number is the 75 percent course-exam standard, which is the same across SOMB I and II. The practical implication is that the risk profile is different from a licensing exam: the failure mode is missing the course-exam threshold across repeated attempts, which then costs the full course fee to re-register, so a candidate should enter each course exam well above the 75 percent line on practice material rather than targeting it exactly.',
    source: {
      label: 'MBA Education - School of Mortgage Banking (AMP designation)',
      url: 'https://www.mbaa.org/conferences-and-education/education-courses/core-courses/school-of-mortgage-banking/somb-i'
    },
    caveat:
      'The Mortgage Bankers Association publishes no pass rate for the AMP or the SOMB courses. What is published is the 75 percent passing standard on the SOMB I and II final exams, the three-attempt limit, and the re-registration requirement after three failed attempts.'
  },
  studyPlan: {
    summary:
      'The AMP is earned by completing three sequential SOMB courses, so the plan is not "study for one exam" but "schedule and pass SOMB I, II and III in order", with the 75 percent course-exam standard as the bar. SOMB I is the foundation — a four-day classroom or four-week online course covering loan production, underwriting, secondary marketing, warehouse lending and servicing, plus the associated disciplines of ethics, regulatory compliance, real estate law, loan products, quality assurance and fraud detection. SOMB II is the profitability and risk course — technology, profit maximisation through production management and the secondary market, and risk management through pricing and hedging. SOMB III is the graduation course. Each of SOMB I and II ends in a comprehensive final exam that must be passed at 75 percent or higher, with three attempts available before the whole course must be re-registered. The plan below assumes one course at a time over roughly three months, because most candidates complete the programme over several quarters rather than back to back. For each course, the pattern is the same: attend every session, work the case studies, and rehearse against the exam at the end, because attendance alone does not earn the credit — the exam does. The programme is aimed at candidates with two or more years of mortgage-industry experience, so the courses reward connecting the material to the work you already do.',
    totalHours: 'Roughly 100-140 hours across the three SOMB courses, spread over 3-4 months',
    weeks: [
      {
        label: 'Course 1 (4 days or 4 weeks)',
        focus: 'SOMB I - mortgage banking foundations',
        tasks: [
          'Attend every session of the four-day classroom or four-week online course — attendance is a credit requirement',
          'Work the loan-production content: origination, processing, underwriting and the secondary market',
          'Cover the associated disciplines: ethics, regulatory compliance, real estate law, loan products, quality assurance and fraud detection',
          'Prepare for and pass the comprehensive final exam at 75 percent or higher'
        ],
        hours: '40 hrs total'
      },
      {
        label: 'Course 2 (4 days or 4 weeks)',
        focus: 'SOMB II - profitability, technology and risk',
        tasks: [
          'Attend every session and work the profitability content: production management, secondary market strategies and servicing portfolio valuation',
          'Study mortgage technology: evaluation, implementation and management of the platforms lenders run on',
          'Learn the risk-management core: pricing, hedging and the drivers of mortgage-banking risk',
          'Pass the comprehensive final exam at 75 percent or higher'
        ],
        hours: '40 hrs total'
      },
      {
        label: 'Course 3',
        focus: 'SOMB III - graduation',
        tasks: [
          'Attend the graduation course and participate actively — credit is based on successful class participation',
          'Complete any capstone or case assignments the course requires',
          'Confirm with MBA Education that the AMP designation will be awarded at the SOMB graduation ceremony',
          'Update your professional materials and record the designation'
        ],
        hours: '20 hrs total'
      }
    ],
    variants: [
      { label: 'SOMB I exemption eligibility', detail: 'Candidates who meet MBA\u2019s experience criteria may apply for an exemption from SOMB I through the exemption registration form; note that SOMB II says there are no exemptions from it, and SOMB I is required unless you are pursuing a different path.' },
      { label: 'Working professionals over several quarters', detail: 'Most candidates spread the three courses across a year, taking one course per quarter and letting the curriculum settle between courses.' },
      { label: 'CMB-track candidates', detail: 'Each SOMB course also earns 15 points toward the Certified Mortgage Banker (CMB) designation, so AMP completion is a stepping stone if you intend to pursue the CMB later.' }
    ]
  },
  prepStrategies: {
    summary:
      'The strategy that reliably gets candidates through the AMP is "treat attendance as a credit requirement and the course exam as the gate", because completing an SOMB course requires both full attendance and a 75 percent score on the comprehensive final, and a course not passed after three attempts costs the full re-registration fee. Second, connect the material to your own job: the programme is aimed at candidates with two or more years of mortgage-industry experience, and the case studies and exams reward candidates who can see their own workflow in the curriculum — bring your org\u2019s production, servicing or secondary-marketing experience into every discussion. Third, rehearse against the exam from the first day of each course rather than at the end, because the comprehensive final covers the whole course and the three-attempt limit is a real constraint. Fourth, sequence the courses rather than rushing all three: the curriculum builds from foundations to profitability and risk, and each course assumes the one before it. Fifth, plan the logistics — classroom sessions run four consecutive days and online sessions run four days a week for four weeks — so your calendar is cleared before registration, not after. Finally, if you are on the CMB track, remember that each SOMB course also banks 15 CMB points, so the AMP is not a terminal destination but a milestone with a documented next step.',
    items: [
      {
        title: 'Treat attendance as a credit requirement',
        detail: 'Completing SOMB I and II requires full attendance plus the 75 percent course exam. Missing sessions can put the credit out of reach regardless of exam performance.'
      },
      {
        title: 'Connect the curriculum to your own job',
        detail: 'The programme assumes two or more years in the mortgage industry. Bring your production, servicing or secondary-marketing experience into the case studies — the exams reward applied knowledge.'
      },
      {
        title: 'Rehearse against the exam from day one',
        detail: 'The comprehensive final covers the whole course, and the three-attempt limit is real. Study the exam content throughout, not only in the final week.'
      },
      {
        title: 'Sequence the three courses',
        detail: 'SOMB I to II to III. Each course assumes the one before it, and the AMP is awarded only when all three are complete.'
      },
      {
        title: 'Clear the calendar before registration',
        detail: 'Classroom courses run four consecutive days; online courses run four days a week for four weeks. Block the time before you register, not after.'
      },
      {
        title: 'Use the AMP as a CMB stepping stone',
        detail: 'Each SOMB course earns 15 points toward the Certified Mortgage Banker designation, so AMP completion positions you for the CMB if you intend to pursue it.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'The AMP resource picture is simpler than for vendor certification exams because the Mortgage Bankers Association is the sole provider of the three SOMB courses — there is no meaningful substitute curriculum, and the designation cannot be earned by self-study against a blueprint. The primary cost is course tuition for SOMB I, II and III, which is set per course by MBA Education and varies by delivery format; classroom courses add travel and lodging for out-of-town sessions, and online courses remove that cost. MBA\u2019s own course materials, case studies and the final exams are included in each course, so there is no separate study-guide market of comparable authority. Employer sponsorship is the single most common way candidates fund the programme, since many lenders and mortgage companies pay for SOMB attendance as a management-development investment, and the MBA Education site offers corporate training and subscription options such as the Education Advantage seats. Third-party prep is limited to general mortgage-banking texts and industry references, which are useful background but not exam-aligned, because the SOMB exams are written from the course. A defensible budget depends almost entirely on course tuition and whether your employer pays; the plan below lists what MBA publishes, with the caveat that tuition is confirmed at the MBA Education booking page. Prices change frequently and we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SOMB I - School of Mortgage Banking I', values: ['Tuition set by MBA Education (classroom or online)', '4-day classroom or 4-week online course with final exam', 'The foundation course — loan production, secondary marketing, warehousing, servicing'] },
      { label: 'SOMB II - School of Mortgage Banking II', values: ['Tuition set by MBA Education (classroom or online)', '4-day classroom or 4-week online course with final exam', 'Profitability, technology and risk management'] },
      { label: 'SOMB III - graduation course', values: ['Tuition set by MBA Education', 'Classroom course, credit by successful participation', 'Completing the designation at the SOMB graduation ceremony'] },
      { label: 'MBA course materials and case studies', values: ['Included with each course', 'Coursework within the programme', 'The curriculum the final exams are written from'] },
      { label: 'Employer sponsorship / Education Advantage', values: ['Employer-funded or subscription seats', 'Corporate training options', 'Most candidates — confirm reimbursement before registering'] },
      { label: 'General mortgage-banking texts', values: ['$30-$80', 'Print or online reference', 'Background reading — not a substitute for the courses'] }
    ],
    footnote:
      'SOMB tuition is confirmed at the MBA Education booking page and varies by delivery format and date; prices change frequently and we rank nothing by commission.'
  },
  commonMistakes: {
    summary:
      'The most common mistake on the AMP path is treating the designation as a self-study credential and skipping the classroom or online course structure, when the SOMB courses are the designation — there is no exam you can sit without completing the courses first. The second mistake is attending sessions but under-preparing for the comprehensive course exam, then burning attempts against the three-attempt limit and facing full course re-registration after the third failure. Third, candidates underestimate the attendance requirement: SOMB credit is earned only with full attendance plus the passing exam, so missing sessions can void the credit even with a strong exam. Fourth, candidates sequence the courses out of order or take long gaps that leave the foundation cold when SOMB II and III arrive. Fifth, candidates ignore the two-plus-years experience positioning and approach the programme as an entry credential, which misaligns their study focus. Finally, candidates forget that each SOMB course also earns 15 points toward the Certified Mortgage Banker designation, missing the documented next step that AMP completion unlocks.',
    items: [
      { mistake: 'Treating the AMP as a self-study exam', fix: 'The designation is earned by completing the three SOMB courses — there is no standalone exam to sit.' },
      { mistake: 'Under-preparing for the course exam', fix: 'Rehearse against the comprehensive final from day one; you have three attempts before the course must be re-registered in full.' },
      { mistake: 'Missing sessions', fix: 'SOMB credit requires full attendance plus the passing exam score — protect the attendance requirement as hard as the exam.' },
      { mistake: 'Sequencing the courses poorly', fix: 'Take SOMB I before II before III, and avoid long gaps that leave the foundation cold.' },
      { mistake: 'Approaching it as an entry credential', fix: 'The programme assumes two or more years of mortgage-industry experience — connect the material to the work you already do.' },
      { mistake: 'Forgetting the CMB points', fix: 'Each SOMB course earns 15 CMB points, so the AMP is a milestone toward the Certified Mortgage Banker designation, not a dead end.' }
    ]
  },
  questionTypes: {
    summary:
      'The AMP does not publish a question-type breakdown because there is no single public exam paper — the designation is earned by passing the comprehensive final examination at the end of SOMB I and the comprehensive final examination at the end of SOMB II, each written from that course and graded at a 75 percent passing standard, with SOMB III completed by class participation. MBA describes the SOMB finals as comprehensive examinations covering the full course, delivered after full attendance, with three attempts allowed. The practical implication is that candidates should expect the finals to test the course as a whole rather than isolated modules, and that the case-study and practice-activity elements built into each course are the best rehearsal for the applied questions the finals ask. Because the exact item mix is not published, the samples below are editor-written illustrations of the applied style MBA\u2019s curriculum supports — scenario and knowledge items in the mortgage-banking domain — not live exam items. The honest guidance is to prepare for each final by working the course case studies and connecting them to the full course scope, since the comprehensive nature of the exam is the one structural fact MBA publishes.',
    types: [
      { name: 'Comprehensive course finals', share: 'The exam gate for SOMB I and II', detail: 'A final examination covering the full course, graded at 75 percent, with three attempts before the course must be re-registered.' },
      { name: 'Applied scenario items', share: 'Consistent with the case-study curriculum', detail: 'Mortgage-banking situations — production, secondary marketing, servicing, risk — that reward applied industry knowledge.' },
      { name: 'Knowledge and framework items', share: 'Consistent with the course content', detail: 'Direct questions on the disciplines the course covers, such as underwriting, warehousing, hedging, regulatory compliance and fraud detection.' }
    ],
    samples: [
      {
        prompt: 'A lender sells a pool of newly originated loans into the secondary market. Which function within a mortgage-banking firm is most directly responsible for managing the execution and the resulting interest-rate risk?',
        options: [
          'A. Loan servicing',
          'B. Secondary marketing',
          'C. Warehouse lending',
          'D. Quality control'
        ],
        answer: 'B',
        explanation:
          'Secondary marketing is the function that sells loans to investors and manages the interest-rate risk of the pipeline through pricing and hedging. A is wrong because servicing manages loans after closing. C is wrong because warehouse lending funds the loans before sale. D is wrong because quality control reviews loan quality rather than executing the sale.'
      },
      {
        prompt: 'A borrower applies for a mortgage and the originator collects income, asset and credit information. Which stage of the production process does this describe?',
        options: [
          'A. Servicing',
          'B. Origination',
          'C. Secondary marketing',
          'D. Warehousing'
        ],
        answer: 'B',
        explanation:
          'Origination is the stage where the application is taken and the borrower\u2019s income, asset and credit information is collected. A is wrong because servicing begins after closing and covers ongoing loan administration. C is wrong because secondary marketing sells the loan. D is wrong because warehousing provides the funding line before sale.'
      },
      {
        prompt: 'An underwriter applies lender overlays that tighten loan-to-value requirements for a specific product. What is the primary purpose of such overlays?',
        options: [
          'A. To increase loan volume',
          'B. To manage credit risk by tightening eligibility for higher-risk attributes',
          'C. To reduce documentation requirements',
          'D. To accelerate the closing process'
        ],
        answer: 'B',
        explanation:
          'Underwriting overlays tighten eligibility criteria to manage credit risk, typically for products or attributes the base guidelines do not fully address. A is wrong because tighter criteria reduce, not increase, eligible volume. C is wrong because overlays add requirements rather than removing documentation. D is wrong because the purpose is risk control, not speed.'
      }
    ],
    note: 'Samples are editor-written illustrations in the style of MBA\u2019s SOMB curriculum; the exact item mix of the course finals is not published, and these are not live exam items.'
  },
  examDay: {
    summary:
      'The AMP has no single exam day — it has the comprehensive final examination at the end of SOMB I and again at the end of SOMB II, each delivered after full course attendance, with a 75 percent passing standard and three attempts available, followed by SOMB III as the graduation course. For each course, the "exam day" is the comprehensive final at the end of the four-day classroom or four-week online programme, and the most important preparation variable is that the final covers the whole course — so the week leading into it should be a review of the full course scope, the case studies and the disciplines covered, not a single-module cram. Because each final allows three attempts before the course must be re-registered in full, the pressure is on not wasting attempts: if you are not confident after the course material, the better strategy is to use the attempt deliberately with as much preparation as possible rather than sitting early. You will need your registration confirmation for the session, and classroom courses require arranging travel and lodging if the venue is out of town. The afterwards matters as much as the pass: the AMP designation is awarded to students who complete all three SOMB courses, and the designation is recognised at the SOMB graduation ceremony at Course III — so the final exam pass is a milestone, and the designation itself arrives when the full programme is complete.',
    bring: [
      'Registration confirmation and photo identification for the course and final exam session',
      'Your course materials and case-study notes for review before the final',
      'For out-of-town classroom courses, travel and lodging arranged before registration'
    ],
    leave: [
      'Phones and personal devices where the exam session is proctored',
      'The assumption that attendance alone earns the credit — the exam must be passed at 75 percent',
      'The assumption that a failed attempt is free — three attempts, then full course re-registration'
    ],
    timeline: [
      { time: 'The week before the final', detail: 'Review the full course scope and work the case studies again — the comprehensive final covers the whole course.' },
      { time: 'The day before', detail: 'Confirm the venue or online session, your registration, and travel arrangements for classroom courses.' },
      { time: 'Exam session', detail: 'Complete the comprehensive final, working steadily through the full scope rather than concentrating on one module.' },
      { time: 'After the final', detail: 'A passing score banks the course credit; a failed attempt counts against the three-attempt limit before re-registration is required.' },
      { time: 'After SOMB III', detail: 'The AMP designation is awarded at the SOMB graduation ceremony once all three courses are complete.' }
    ],
    rules: [
      'SOMB I and II credit requires full attendance plus a 75 percent passing score on the comprehensive final',
      'Three attempts are allowed on each course exam; a course not passed after three attempts must be re-registered in full',
      'SOMB III credit is earned through successful class participation',
      'The AMP designation is awarded on completion of all three SOMB courses',
      'Each SOMB course also earns 15 points toward the Certified Mortgage Banker designation'
    ],
    afterwards:
      'On a pass of SOMB I and II and completion of SOMB III, the AMP designation is awarded at the SOMB graduation ceremony, and you should record it and confirm any CMB points banked. On a failed course exam, use the remaining attempts deliberately, reviewing the full course scope before re-sitting, because the third failure triggers full course re-registration at the full fee.'
  }
};

export default data;
