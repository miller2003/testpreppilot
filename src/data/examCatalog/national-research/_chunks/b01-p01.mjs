export const programs = [
  {
    id: 'aicpa-nasba',
    body: 'AICPA & NASBA',
    bodyUrl: 'https://www.aicpa-cima.com',
    about: 'The Uniform CPA Examination is jointly owned by the American Institute of CPAs (AICPA), which develops the content, and the National Association of State Boards of Accountancy (NASBA), which coordinates the 55 state and jurisdiction boards of accountancy that license CPAs. Passing the exam is one of three requirements for the CPA license everywhere in the US, alongside the 150-hour education rule and relevant experience.',
    registrationSteps: [
      { title: 'Confirm your jurisdiction requirements', description: 'Each state board sets its own education rules, typically 150 semester hours, and its own experience requirement. Check your board before you apply so you sit the right sections.', duration: '1 hour' },
      { title: 'Apply and receive a Notice to Schedule', description: 'Submit transcripts to your state board or NASBA, pay the application fee, and receive a Notice to Schedule (NTS) valid for a set window, commonly six to nine months.', duration: '2 to 6 weeks' },
      { title: 'Schedule each section', description: 'Using the NTS, book AUD, FAR and REG (the three Core sections) and your chosen Discipline (BAR, ISC or TCP) at a Prometric test center.', duration: '15 minutes' },
      { title: 'Pay the exam fees', description: 'Fees are charged per section and vary by jurisdiction; a typical section runs about $262 plus a one-time application fee around $96.', duration: '5 minutes' },
      { title: 'Sit the exam and get scores', description: 'Each section is four hours at a Prometric center. Scores release on a fixed schedule through NASBA and post to your candidate account.', duration: 'test day' }
    ],
    proctoring: 'The CPA Exam is delivered at Prometric test centers under strict security: photo ID, a palm-vein or digital signature check, and a closed-book environment with a permitted calculator and authorized reference sheets.',
    retakePolicy: 'A failed section may be retaken after a short wait, but the Notice to Schedule window limits how long you can sit. All four sections must be passed within an 18- or 30-month rolling window depending on the jurisdiction.',
    recertification: 'The exam itself does not expire, but CPA licensure does. Once licensed, CPAs complete continuing professional education each year (commonly 40 hours) per their state board to renew the license.',
    scoreReporting: 'Each section is scored 0 to 99; a scaled score of 75 is required to pass. Multiple-choice and task-based simulations each count, and a written communication component appears in some sections.',
    providersNote: 'AICPA publishes free sample tests and the Content and Skill Outlines. Commercial review providers such as Becker, Gleim, Surgent and Roger are widely used but are not affiliated with the exam.',
    comparison: {
      title: 'CPA Exam sections compared',
      columns: ['Section', 'Type', 'Focus'],
      rows: [
        { label: 'AUD', values: ['Core (required)', 'Audit, attestation, ethics'] },
        { label: 'FAR', values: ['Core (required)', 'Financial reporting'] },
        { label: 'REG', values: ['Core (required)', 'Tax, business law'] },
        { label: 'BAR / ISC / TCP', values: ['Discipline (pick one)', 'Reporting, systems, or tax'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I take the sections in any order?', a: 'Yes. You may sit the three Core sections in any sequence, then choose and sit one Discipline. Most candidates do FAR or AUD first, but the order is your call.' },
      { q: 'What happens if my NTS expires?', a: 'An expired NTS means you forfeit that section fee and must reapply and repay to get a new one. Track the validity window carefully so you do not lose paid attempts.' }
    ],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'irs',
    body: 'Internal Revenue Service (IRS)',
    bodyUrl: 'https://www.irs.gov',
    about: 'The Internal Revenue Service administers the federal tax system and grants the Enrolled Agent credential, runs the Annual Filing Season Program for unenrolled preparers, and authorizes Certifying Acceptance Agents for ITIN work. These credentials, together with the Special Enrollment Examination, define who may represent taxpayers before the IRS.',
    registrationSteps: [
      { title: 'Obtain a Preparer Tax Identification Number (PTIN)', description: 'Anyone who prepares federal returns for pay must hold an active PTIN from IRS.gov before they can sit the SEE or renew credentials.', duration: '15 minutes' },
      { title: 'Prepare for the SEE', description: 'Study the three parts using the IRS published examination topics and commercial materials; there is no formal class requirement to sit.', duration: 'months' },
      { title: 'Schedule each part', description: 'Book Part 1, 2 and 3 of the Special Enrollment Examination with the current vendor (PSI, which replaced Prometric in 2026) at a testing center or online.', duration: '15 minutes' },
      { title: 'Pass all three parts', description: 'Each part is a 100-question, 3.5-hour exam. You may take them in any order, and parts passed stay valid while you finish the rest.', duration: 'per part' },
      { title: 'Apply for enrollment', description: 'Submit Form 23 and the enrollment fee to the IRS, pass a tax-compliance check, then receive enrolled-agent status with unlimited representation rights.', duration: 'weeks' }
    ],
    proctoring: 'SEE parts are delivered by PSI at test centers and via online proctoring after the March 2026 transition from Prometric. A government photo ID and a secure check-in apply.',
    retakePolicy: 'A failed part may be retaken, with limits on attempts within a testing window; each attempt carries the full part fee. Parts already passed remain valid while you complete the others.',
    recertification: 'Enrolled Agents renew their status each year through the PTIN system and complete 72 hours of continuing education (including ethics) every three years to stay active.',
    scoreReporting: 'Under the current PSI scale each part is scored 200 to 800, with a passing scaled score of 500. Results are available at the test center and in the candidate account.',
    providersNote: 'The IRS publishes the SEE content outlines and a candidate information bulletin. Commercial EA review courses such as Gleim and PassKey are common but unofficial.',
    comparison: {
      title: 'IRS preparer credentials compared',
      columns: ['Credential', 'Represent', 'Prep'],
      rows: [
        { label: 'AFSP Record of Completion', values: ['Limited (current-year returns)', '18 hours CE + AFTR test'] },
        { label: 'Certifying Acceptance Agent', values: ['ITIN document certification', 'Forensic + ITIN training'] },
        { label: 'Enrolled Agent', values: ['Unlimited before the IRS', 'Pass all 3 SEE parts'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I need the SEE to become an Enrolled Agent?', a: 'Almost always. You either pass all three parts of the Special Enrollment Examination or qualify through certain recent IRS employment. The exam route is the standard path.' },
      { q: 'What changed with the 2026 PSI transition?', a: 'Starting March 1, 2026 the SEE moved from Prometric to PSI for delivery, and scoring shifted to a 200 to 800 scale with a 500 passing mark. The content and part structure stayed the same.' }
    ],
    sourceUrl: 'https://www.irs.gov/tax-professionals',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'aicpa-credentials',
    body: 'American Institute of CPAs (AICPA)',
    bodyUrl: 'https://www.aicpa-cima.com',
    about: 'The American Institute of CPAs offers specialty credentials that build on CPA licensure and signal depth in business valuation, fair-value measurement, financial forensics and personal financial planning. These credentials are pursued by CPAs who want to market a niche practice area beyond the core license.',
    registrationSteps: [
      { title: 'Hold or pursue a CPA license', description: 'Most AICPA specialty credentials require an active CPA (CFF and PFS are CPA-only), though some valuation credentials also accept qualified non-CPAs with equivalent experience.', duration: 'n/a' },
      { title: 'Meet education and experience gates', description: 'Each credential sets its own hours of relevant experience and, for PFS, a block of personal-financial-planning CPE before you may sit.', duration: 'varies' },
      { title: 'Complete the exam or case requirement', description: 'ABV, CFF and PFS include a proctored exam; CEIV centers on a performance framework and attestation. Some allow a qualifying experience pathway instead.', duration: 'varies' },
      { title: 'Apply and maintain', description: 'Submit the application with fees and, once awarded, keep the credential current with AICPA CPE and membership rules.', duration: 'per credential' }
    ],
    proctoring: 'AICPA specialty exams are delivered through a proctoring partner; some include open-book case-study or report-submission components alongside multiple-choice modules.',
    retakePolicy: 'Retake rules vary by credential; failed exam sections can usually be retaken for a fee after a wait, with limits set in the candidate guide.',
    recertification: 'Holders maintain the credential with AICPA membership and relevant CPE each year, plus any specialty-specific reporting such as valuation engagements performed.',
    scoreReporting: 'Exams are scored pass/fail or on a scaled basis per the candidate bulletin; case submissions are evaluated against published rubrics.',
    providersNote: 'AICPA sells its own study materials and conferences for each credential. Third-party providers such as NACVA and training firms also cover overlapping valuation and forensics topics.',
    comparison: {
      title: 'AICPA specialty credentials',
      columns: ['Credential', 'Focus', 'CPA required'],
      rows: [
        { label: 'ABV', values: ['Business valuation', 'Preferred'] },
        { label: 'CEIV', values: ['Entity and intangible valuation', 'Preferred'] },
        { label: 'CFF', values: ['Financial forensics', 'Yes'] },
        { label: 'PFS', values: ['Personal financial planning', 'Yes'] }
      ]
    },
    orgFaqs: [
      { q: 'Can a non-CPA earn an AICPA credential?', a: 'The ABV and CEIV valuation credentials accept qualified non-CPAs with the right education and experience, but CFF and PFS are restricted to active CPAs.' },
      { q: 'Are these the same as the CPA license?', a: 'No. They are add-on specialties that sit on top of an active CPA or comparable license and show depth in one practice area. They do not replace the CPA.' }
    ],
    sourceUrl: 'https://www.aicpa-cima.com',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'iia',
    body: 'Institute of Internal Auditors (IIA)',
    bodyUrl: 'https://www.theiia.org',
    about: 'The Institute of Internal Auditors is the global standard-setter for the internal audit profession and awards the Certified Internal Auditor (CIA), the CGAP for public-sector auditors, and specialty certificates. The CIA is the only globally recognized internal audit certification.',
    registrationSteps: [
      { title: 'Create an IIA account and apply', description: 'Apply through theiia.org, submitting education and character references; approval opens a three-year window to pass all CIA parts.', duration: 'weeks' },
      { title: 'Pay the application and exam fees', description: 'Fees differ for IIA members and non-members and are paid per part; a one-time application fee applies.', duration: '5 minutes' },
      { title: 'Schedule each part', description: 'Book Part 1, 2 and 3 with Pearson VUE at a center or online, in any order you choose.', duration: '15 minutes' },
      { title: 'Sit and pass the parts', description: 'Parts are computer-based multiple-choice exams of 100 to 125 questions. Scores post immediately at the center.', duration: 'per part' }
    ],
    proctoring: 'CIA and CGAP exams are delivered by Pearson VUE at test centers and through online proctoring. A valid photo ID is required and personal items are stored.',
    retakePolicy: 'A failed part may be retaken after a short wait for a new exam fee. Candidates must complete all parts within three years of application approval.',
    recertification: 'CIAs maintain certification with 40 hours of continuing professional education each year and an annual renewal fee; lapsed certification can be reinstated within limits.',
    scoreReporting: 'Each part is scored on a scale with a published pass mark; results appear on screen at the test center immediately after the exam.',
    providersNote: 'The IIA sells the CIA Learning System and the official exam study materials. Many third-party providers also offer CIA review courses.',
    comparison: {
      title: 'IIA certifications compared',
      columns: ['Credential', 'Audience', 'Parts'],
      rows: [
        { label: 'CIA', values: ['All internal auditors', '3 parts'] },
        { label: 'CGAP', values: ['Government internal auditors', 'Retired 2021'] }
      ]
    },
    orgFaqs: [
      { q: 'Is the CIA recognized outside the US?', a: 'Yes. The CIA is the only globally recognized internal audit certification and is respected by employers in more than 170 countries.' },
      { q: 'What happened to the CGAP?', a: 'The CGAP was retired; the last exams were offered through June 30, 2021 and existing holders maintain it through IIA CPE. It is no longer bookable.' }
    ],
    sourceUrl: 'https://www.theiia.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'acat',
    body: 'Accreditation Council for Accountancy and Taxation (ACAT)',
    bodyUrl: 'https://www.acatcredentials.org',
    about: 'The Accreditation Council for Accountancy and Taxation is an independent accrediting body that offers credentials for accounting and tax practitioners who may not hold a CPA, including the Accredited Business Accountant (ABA), Accredited Tax Advisor (ATA) and Accredited Tax Preparer (ATP). These signal competence in small-business and individual tax work.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Each ACAT credential has its own experience or education path; the ABA generally expects about three years of accounting practice, while the ATP is open to active preparers.', duration: 'varies' },
      { title: 'Apply and pay', description: 'Submit the application with the credential fee; some credentials require an annual membership or active-status fee on top of the exam fee.', duration: 'day' },
      { title: 'Schedule the exam', description: 'Book the computer-based exam at a Pearson VUE or partner center; the ABA spans two parts.', duration: '15 minutes' },
      { title: 'Pass and maintain', description: 'A scaled score of 70 is required. Holders keep the credential with annual CPE and an active-status fee.', duration: 'per exam' }
    ],
    proctoring: 'ACAT exams are delivered at Pearson VUE or designated testing centers under standard ID and security rules.',
    retakePolicy: 'Failed exams may be retaken after a wait for a new fee, subject to ACAT rules and the credential validity window.',
    recertification: 'ACAT credential holders complete continuing education each year (about 40 hours for ATA and 120 for ABA over three years) and pay an annual active-status fee.',
    scoreReporting: 'Exams are scored pass/fail against a scaled cut score of 70; results are provided by the testing vendor.',
    providersNote: 'ACAT publishes content outlines and candidate handbooks. Review providers and some community colleges offer prep for the ABA, ATA and ATP.',
    comparison: {
      title: 'ACAT credentials compared',
      columns: ['Credential', 'Level', 'Focus'],
      rows: [
        { label: 'ABA', values: ['Senior', 'Full small-business accounting'] },
        { label: 'ATA', values: ['Advanced tax', 'Complex tax planning'] },
        { label: 'ATP', values: ['Entry tax', 'Individual return prep'] }
      ]
    },
    orgFaqs: [
      { q: 'Do ACAT credentials replace a CPA?', a: 'No. They accredit practitioners who may not be CPAs and demonstrate a defined scope of competence, often for small-business and individual tax work.' },
      { q: 'Is the ATP exempt from the AFSP requirements?', a: 'The ATP is recognized by the IRS as satisfying the AFSP continuing-education expectations for unenrolled preparers, which eases the annual filing-season program for holders.' }
    ],
    sourceUrl: 'https://www.acatcredentials.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'asa',
    body: 'American Society of Appraisers (ASA)',
    bodyUrl: 'https://www.appraisers.org',
    about: 'The American Society of Appraisers is a multidisciplinary appraisal organization whose Accredited Member (AM) and Accredited Senior Appraiser (ASA) designations in business valuation are recognized for valuation engagements, expert testimony and litigation support. The BV disciplines require both exams and demonstrated experience.',
    registrationSteps: [
      { title: 'Complete principles coursework', description: 'Aspiring BV designees take the ASA principles of valuation series (BV 201 through 204) or an approved challenge route before sitting the exams.', duration: 'months' },
      { title: 'Meet the experience requirement', description: 'The AM requires about two years of full-time valuation experience; the senior ASA requires about five years plus a report-review demonstration.', duration: 'years' },
      { title: 'Pass the examinations', description: 'Sit the ASA business valuation exams, which combine multiple-choice testing with case or report components depending on the level.', duration: 'per exam' },
      { title: 'Apply and reaccredit', description: 'Submit the designation application with experience evidence; reaccredit every five years with continuing education and an ethics attestation.', duration: 'per cycle' }
    ],
    proctoring: 'ASA examinations are delivered under proctored conditions, with some components evaluated as submitted valuation demonstrations.',
    retakePolicy: 'Retake rules follow the ASA education and designation guides; candidates needing to repeat an exam or report review do so within their candidacy window.',
    recertification: 'Designees reaccredit every five years, documenting continuing education and active practice, and attesting to the ASA code of ethics.',
    scoreReporting: 'Exams and report reviews are graded against published ASA rubrics; candidates receive a pass result and feedback relevant to the designation.',
    providersNote: 'ASA offers its own principles and advanced education, conferences and study materials. The society also maintains a directory of designated members for referrals.',
    comparison: {
      title: 'ASA business valuation designations',
      columns: ['Designation', 'Experience', 'Demonstration'],
      rows: [
        { label: 'AM (BV)', values: ['~2 years', 'Principles exams'] },
        { label: 'ASA (BV)', values: ['~5 years', 'Report review'] }
      ]
    },
    orgFaqs: [
      { q: 'What is the difference between AM and ASA?', a: 'The Accredited Member is the entry BV designation requiring about two years of experience, while the Accredited Senior Appraiser requires about five years and a reviewed valuation report.' },
      { q: 'Do I need the principles courses?', a: 'Most candidates complete the BV 201 to 204 principles series, though an approved challenge route can substitute for experienced valuators.' }
    ],
    sourceUrl: 'https://www.appraisers.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'payrollorg',
    body: 'PayrollOrg',
    bodyUrl: 'https://www.payroll.org',
    about: 'PayrollOrg (formerly the American Payroll Association) is the leading US body for payroll professionals and awards the Certified Payroll Professional (CPP) and Fundamental Payroll Certification (FPC). These credentials span compliance, taxation, systems and accounting for payroll.',
    registrationSteps: [
      { title: 'Choose CPP or FPC', description: 'The FPC has no experience requirement and suits entry-level staff, while the CPP expects three of the last five years in payroll or a related degree.', duration: 'n/a' },
      { title: 'Prepare with the outline', description: 'Study the official PayrollOrg content outline covering Core, Compliance, Calculations, Systems, Administration, Audit and Accounting.', duration: 'weeks to months' },
      { title: 'Register for the exam', description: 'Book the exam through PayrollOrg during a window; members pay a lower fee than non-members.', duration: '15 minutes' },
      { title: 'Sit and maintain', description: 'The CPP is 190 questions in four hours; the FPC is 150 questions in three hours. Renew by recertification before expiry.', duration: 'test day' }
    ],
    proctoring: 'PayrollOrg exams are delivered at computer-based testing centers under standard ID and security protocols.',
    retakePolicy: 'Failed candidates may retake the exam in a later window for the applicable fee, subject to PayrollOrg rules.',
    recertification: 'The CPP is valid five years and renewed with 120 recertification credits (RCH) or by retesting; the FPC is valid three years with a simpler renewal.',
    scoreReporting: 'Exams use a scaled scoring model; candidates receive a pass/fail result and a score report by content area.',
    providersNote: 'PayrollOrg sells its own study manuals, the PayTrain programs and a practice exam; many employers sponsor prep through the APA Foundation.',
    comparison: {
      title: 'CPP vs FPC',
      columns: ['Credential', 'Experience', 'Length'],
      rows: [
        { label: 'FPC', values: ['None required', '150 Q / 3 hrs'] },
        { label: 'CPP', values: ['3 of 5 yrs', '190 Q / 4 hrs'] }
      ]
    },
    orgFaqs: [
      { q: 'Which should I take first, FPC or CPP?', a: 'If you are new to payroll, the FPC has no experience barrier and builds fundamentals. The CPP is the senior credential and expects three years of recent payroll work.' },
      { q: 'How do I keep the CPP current?', a: 'You renew every five years with 120 recertification credits through PayrollOrg-approved education, or by retaking the exam before it lapses.' }
    ],
    sourceUrl: 'https://www.payroll.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'nacva',
    body: 'National Association of Certified Valuators and Analysts (NACVA)',
    bodyUrl: 'https://www.nacva.com',
    about: 'The National Association of Certified Valuators and Analysts awards the Certified Valuation Analyst (CVA) and the Master Analyst in Financial Forensics (MAFF), credentials for CPAs and other professionals who perform business valuations and forensic accounting. The CVA pairs an exam with a practical case requirement.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'The CVA generally requires a CPA or a business degree with valuation experience; the MAFF builds on the CVA core with a specialty track.', duration: 'n/a' },
      { title: 'Train and submit the case', description: 'Complete the required NACVA training and submit a case study or a sanitized valuation report demonstrating real engagement work.', duration: 'months' },
      { title: 'Sit the proctored exam', description: 'Take the CVA proctored multiple-choice examination; the MAFF adds a specialty exam once the core is met.', duration: 'per exam' },
      { title: 'Maintain the credential', description: 'Keep current with NACVA membership, continuing education and the annual credential fee.', duration: 'per year' }
    ],
    proctoring: 'NACVA exams are proctored, and the credential also requires a portfolio-style case or report submission evaluated by the association.',
    retakePolicy: 'Candidates who do not pass the exam may retake it per NACVA policy, typically after additional study, for a fee.',
    recertification: 'Holders maintain the designation with NACVA continuing education and membership; the case or report requirement is a one-time demonstration.',
    scoreReporting: 'The exam is scored pass/fail; the case submission is graded against the NACVA valuation standards rubric.',
    providersNote: 'NACVA provides its own training, the Business Valuation and Financial Forensics body of knowledge, and a member discount on exam fees.',
    comparison: {
      title: 'CVA vs MAFF',
      columns: ['Credential', 'Base', 'Add-on'],
      rows: [
        { label: 'CVA', values: ['Valuation exam + case', 'Core designation'] },
        { label: 'MAFF', values: ['CVA core', 'Forensics specialty track'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I need a CPA for the CVA?', a: 'A CPA is the most common path, but NACVA also accepts candidates with a business degree and sufficient valuation experience, so non-CPAs can qualify.' },
      { q: 'What is the case requirement?', a: 'Beyond the exam, the CVA requires a submitted case study or a sanitized valuation report that shows you can perform a real engagement to standard.' }
    ],
    sourceUrl: 'https://www.nacva.com',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'ima',
    body: 'Institute of Management Accountants (IMA)',
    bodyUrl: 'https://www.imanet.org',
    about: 'The Institute of Management Accountants awards the Certified Management Accountant (CMA), the leading global management accounting credential focused on financial planning, analysis, control and decision support. The CMA is pursued by accountants who work inside companies rather than in public practice.',
    registrationSteps: [
      { title: 'Join IMA and register', description: 'Pay the IMA membership and the CMA entrance fee, then enroll in the two-part program through imanet.org.', duration: '15 minutes' },
      { title: 'Meet the education and experience rule', description: 'Hold a bachelor degree or qualifying professional credential; you may sit the exam before finishing the two years of management accounting experience, which is required to certify.', duration: 'varies' },
      { title: 'Schedule each part', description: 'Book Part 1 and Part 2 with Prometric at a center or online; each is four hours with multiple-choice and essays.', duration: '15 minutes' },
      { title: 'Pass and certify', description: 'Score 360 or higher on the 0 to 500 scale for each part, then submit proof of the required experience to be certified.', duration: 'per part' }
    ],
    proctoring: 'CMA exams are delivered by Prometric at test centers and via online proctoring, with photo ID and a secure check-in.',
    retakePolicy: 'A failed part may be retaken in any testing window for the exam fee; candidates have a set period from entrance to complete both parts.',
    recertification: 'CMAs maintain the credential with 30 hours of continuing education per year (120 over three years) and an annual IMA membership and CPE fee.',
    scoreReporting: 'Each part is scored 0 to 500, with 360 required to pass; a score report breaks down performance by content area.',
    providersNote: 'IMA sells the official CMA Part 1 and Part 2 study systems and a practice question bank. Gleim and Wiley also offer CMA review courses.',
    comparison: {
      title: 'CMA Part 1 vs Part 2',
      columns: ['Part', 'Theme', 'Topics'],
      rows: [
        { label: 'Part 1', values: ['Planning and performance', 'Reporting, budgeting, cost, controls'] },
        { label: 'Part 2', values: ['Strategic finance', 'Analysis, corporate finance, ethics'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I sit the CMA before I have the experience?', a: 'Yes. You may pass both parts first and then submit the two years of management accounting experience later to be certified; the exam result stays valid.' },
      { q: 'How is the CMA different from the CPA?', a: 'The CPA centers on audit, tax and assurance in public practice, while the CMA focuses on internal management accounting, planning and decision support inside organizations.' }
    ],
    sourceUrl: 'https://www.imanet.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'intuit',
    body: 'Intuit',
    bodyUrl: 'https://www.intuit.com',
    about: 'Intuit, the maker of TurboTax and QuickBooks, runs free training and product certifications that function as a hiring and skills pathway for tax preparers and bookkeepers. The Intuit Academy Tax route feeds seasonal preparer roles, while QuickBooks Online ProAdvisor certifies product proficiency.',
    registrationSteps: [
      { title: 'Create an Intuit account', description: 'Sign up at the Intuit Academy or QuickBooks Training portal with the account you will use for hiring or client work.', duration: '10 minutes' },
      { title: 'Complete the training', description: 'Work through the free lessons for Intuit Academy Tax (Level 1 and Level 2) or the QuickBooks Online ProAdvisor modules at your own pace.', duration: 'hours to weeks' },
      { title: 'Pass the assessment', description: 'Take the online assessment; the Academy Tax track is used as a screening step for remote seasonal preparer roles.', duration: 'per exam' },
      { title: 'Maintain the credential', description: 'Renew product certifications as new versions release and keep skills current for marketplace or client work.', duration: 'yearly' }
    ],
    proctoring: 'These are untimed, open-book online assessments rather than high-stakes proctored exams; you complete them from your own computer.',
    retakePolicy: 'Failed assessments can usually be retaken after reviewing the material; Intuit sets the specific wait and attempt limits in the portal.',
    recertification: 'Product certifications expire with new software versions; Intuit Academy Tax and ProAdvisor require refreshing as the training updates each season.',
    scoreReporting: 'Results are shown immediately on screen as pass/fail or a completion badge; no scaled score is published.',
    providersNote: 'All Intuit Academy and ProAdvisor training and exams are free and official, which is unusual for the industry; third-party QuickBooks courses exist but are unnecessary.',
    comparison: {
      title: 'Intuit pathways compared',
      columns: ['Path', 'Outcome', 'Cost'],
      rows: [
        { label: 'Intuit Academy Tax', values: ['Tax preparer hiring route', 'Free'] },
        { label: 'QuickBooks ProAdvisor', values: ['Product certification', 'Free'] }
      ]
    },
    orgFaqs: [
      { q: 'Is Intuit Academy Tax a real certification?', a: 'It is a free training-and-assessment track Intuit uses to screen candidates for seasonal tax preparer roles; it signals readiness but is not a state license.' },
      { q: 'Does the ProAdvisor cert help me get bookkeeping clients?', a: 'Yes. The QuickBooks ProAdvisor badge is widely recognized by small businesses and appears in Intuit’s advisor directory that clients search.' }
    ],
    sourceUrl: 'https://www.intuit.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'aipb',
    body: 'American Institute of Professional Bookkeepers (AIPB)',
    bodyUrl: 'https://www.aipb.org',
    about: 'The American Institute of Professional Bookkeepers certifies bookkeepers through the Certified Bookkeeper (CB) program, a four-part national credential covering the adjustments and controls that distinguish a professional bookkeeper. The CB signals mastery beyond basic data entry.',
    registrationSteps: [
      { title: 'Meet the experience rule', description: 'Candidates generally need about two years (3,000 hours) of bookkeeping experience, or a mix of experience and education, before certification.', duration: 'varies' },
      { title: 'Register for the program', description: 'Enroll through aipb.org and order the workbooks for the parts completed by mail and the two Prometric exams.', duration: 'day' },
      { title: 'Complete the four parts', description: 'Two parts are closed-book Prometric exams (adjusting entries, error correction); two are open-book workbooks (payroll, depreciation, inventory, internal controls).', duration: 'weeks' },
      { title: 'Agree to the Code and certify', description: 'Pass all parts and sign the AIPB Code of Ethics to earn the CB designation.', duration: 'per part' }
    ],
    proctoring: 'The two exam parts are delivered at Prometric centers under standard security; the workbook parts are completed and submitted under the AIPB honor provisions.',
    retakePolicy: 'Failed Prometric parts may be retaken for a fee; workbook parts may be resubmitted per AIPB rules within the program window.',
    recertification: 'CBs renew with continuing education each year and an annual fee, and must keep to the AIPB Code of Ethics.',
    scoreReporting: 'Prometric parts are scored pass/fail; workbook parts are graded by AIPB against the published answer sets.',
    providersNote: 'AIPB sells its own CB workbooks and a free study guide; community colleges and bookkeeping schools often use AIPB materials.',
    comparison: {
      title: 'CB at a glance',
      columns: ['Component', 'Format', 'Topic'],
      rows: [
        { label: 'Part 1', values: ['Prometric exam', 'Adjusting entries'] },
        { label: 'Part 2', values: ['Prometric exam', 'Error correction'] },
        { label: 'Parts 3-4', values: ['Workbooks', 'Payroll, depreciation, controls'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I need a degree for the CB?', a: 'No. The CB is experience-based; about two years (3,000 hours) of bookkeeping work generally satisfies the eligibility, with education able to substitute for part of it.' },
      { q: 'What is the difference between the CB and a CPA?', a: 'The CB certifies bookkeeping competence for staff and full-charge bookkeepers, while the CPA is a state license covering audit, tax and attestation with a 150-hour education rule.' }
    ],
    sourceUrl: 'https://www.aipb.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'asmc',
    body: 'American Society of Military Comptrollers (ASMC)',
    bodyUrl: 'https://www.asmconline.org',
    about: 'The American Society of Military Comptrollers awards the Certified Defense Financial Manager (CDFM), the standard credential for defense and federal financial management professionals. The three-module exam covers resource management, budget and cost, and accounting and finance in the Department of Defense context.',
    registrationSteps: [
      { title: 'Join ASMC and enroll', description: 'Register through the ASMC CDFM program; members receive a discount on the enrollment and exam fees.', duration: 'day' },
      { title: 'Study the three modules', description: 'Prepare for Module 1 (defense resource management), Module 2 (budget and cost analysis) and Module 3 (accounting and finance), using the official body of knowledge.', duration: 'weeks' },
      { title: 'Schedule the exams', description: 'Book each module exam at a testing center or online; modules may be taken separately or together.', duration: '15 minutes' },
      { title: 'Certify and maintain', description: 'Pass all three modules and keep the credential current with continuing education and the annual fee.', duration: 'per module' }
    ],
    proctoring: 'CDFM module exams are delivered at computer-based testing centers or online proctoring with standard ID checks.',
    retakePolicy: 'Failed modules may be retaken after a wait for the exam fee, subject to ASMC policy.',
    recertification: 'CDFMs complete continuing education and pay an annual maintenance fee to keep the credential active.',
    scoreReporting: 'Each module is scored pass/fail; candidates receive a result and, where applicable, a diagnostic by topic.',
    providersNote: 'ASMC publishes the CDFM body of knowledge and study materials; many DoD financial management offices sponsor study groups.',
    comparison: {
      title: 'CDFM modules',
      columns: ['Module', 'Theme', 'Coverage'],
      rows: [
        { label: 'Module 1', values: ['Resource mgmt', 'Defense financial system'] },
        { label: 'Module 2', values: ['Budget and cost', 'PPBE process'] },
        { label: 'Module 3', values: ['Accounting and finance', 'DoD accounting'] }
      ]
    },
    orgFaqs: [
      { q: 'Who should pursue the CDFM?', a: 'Defense and federal financial management professionals, including civilians, military and contractors working in DoD comptroller functions, are the primary audience.' },
      { q: 'Can I take the modules separately?', a: 'Yes. Most candidates schedule the three module exams individually as they study, though they may also sit them together within the enrollment window.' }
    ],
    sourceUrl: 'https://www.asmconline.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'acfe',
    body: 'Association of Certified Fraud Examiners (ACFE)',
    bodyUrl: 'https://www.acfe.com',
    about: 'The Association of Certified Fraud Examiners is the world’s largest anti-fraud organization and awards the Certified Fraud Examiner (CFE) credential. The CFE signals expertise in fraud prevention, detection, investigation and deterrence, and ACFE membership is required to hold it.',
    registrationSteps: [
      { title: 'Become an ACFE member', description: 'Join the ACFE as an Associate member; membership is required to sit for and hold the CFE credential.', duration: 'day' },
      { title: 'Meet the points requirement', description: 'Earn CFE eligibility points from a mix of education, professional certifications and fraud-related experience; a bachelor degree plus two years of relevant experience is typical.', duration: 'varies' },
      { title: 'Prepare for the exam', description: 'Study the Fraud Examiners Manual across the exam sections; as of the 2026 update the exam has three sections rather than four.', duration: 'weeks to months' },
      { title: 'Sit and maintain', description: 'Pass the computer-based exam and keep the credential with annual CPE and ACFE membership.', duration: 'test day' }
    ],
    proctoring: 'The CFE exam is delivered through a proctoring partner at centers or online, with ID verification and a secure environment.',
    retakePolicy: 'A failed section may be retaken for a fee after a wait, per ACFE rules, until the credential is earned.',
    recertification: 'CFEs complete 20 hours of anti-fraud CPE each year and maintain ACFE membership to keep the credential in good standing.',
    scoreReporting: 'The exam is scored against a published pass standard; candidates receive a result by section after testing.',
    providersNote: 'ACFE sells the Fraud Examiners Manual and a CFE Exam Prep Course; the manual is the core study text.',
    comparison: {
      title: 'CFE structure (2026)',
      columns: ['Section', 'Hours', 'Questions'],
      rows: [
        { label: 'Fraud Schemes', values: ['2.5 hrs', '120'] },
        { label: 'Investigation and Legal', values: ['2.5 hrs', '120'] },
        { label: 'Prevention and Deterrence', values: ['1.5 hrs', '70'] }
      ]
    },
    orgFaqs: [
      { q: 'Did the CFE exam change in 2026?', a: 'Yes. As of June 2, 2026 the exam moved from four sections to three (Fraud Schemes; Investigation and Legal; Prevention and Deterrence), with adjusted lengths and question counts.' },
      { q: 'Must I be an ACFE member to call myself a CFE?', a: 'Yes. Active ACFE membership is a condition of holding the CFE credential, and you must keep membership current along with annual CPE.' }
    ],
    sourceUrl: 'https://www.acfe.com',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'aga',
    body: 'Association of Government Accountants (AGA)',
    bodyUrl: 'https://www.agacgfm.org',
    about: 'The Association of Government Accountants awards the Certified Government Financial Manager (CGFM), the recognized credential for federal, state and local government financial professionals. The three-exam program covers the governmental environment, accounting and reporting, and financial management and control.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Candidates need a bachelor degree from an accredited school plus two years of government financial management experience, or equivalent combinations.', duration: 'varies' },
      { title: 'Apply and pay', description: 'Submit the AGA application with the one-time fee and the per-exam fee for each of the three CGFM exams.', duration: 'day' },
      { title: 'Schedule the three exams', description: 'Book Exam 1, 2 and 3 with the testing vendor at a center or online, in any order.', duration: '15 minutes' },
      { title: 'Pass and maintain', description: 'Each exam is 115 questions in 135 minutes; pass all three and keep current with CPE and the annual fee.', duration: 'per exam' }
    ],
    proctoring: 'CGFM exams are delivered at computer-based testing centers or online proctoring under standard security and ID rules.',
    retakePolicy: 'Failed exams may be retaken in a later window for the exam fee, subject to AGA policy, until all three are passed.',
    recertification: 'CGFMs complete 80 hours of CPE every two years and pay an annual fee to maintain the credential.',
    scoreReporting: 'Each exam is scored on a 200 to 700 scale with a passing scaled score of 500; candidates receive a result by content area.',
    providersNote: 'AGA sells the Governmental Accounting, Auditing and Financial Reporting (GAAFR, the Green Book) and other study materials; many agencies sponsor CGFM study.',
    comparison: {
      title: 'CGFM exams',
      columns: ['Exam', 'Content', 'Minutes'],
      rows: [
        { label: 'Exam 1', values: ['Governmental environment', '135'] },
        { label: 'Exam 2', values: ['Accounting and reporting', '135'] },
        { label: 'Exam 3', values: ['Financial management and control', '135'] }
      ]
    },
    orgFaqs: [
      { q: 'Is the CGFM only for federal workers?', a: 'No. The CGFM serves federal, state and local government financial professionals, and the three exams cover all levels of the governmental environment.' },
      { q: 'How long are CGFM scores valid?', a: 'You must pass all three exams within a set eligibility window, and once certified you maintain the credential with 80 CPE hours every two years.' }
    ],
    sourceUrl: 'https://www.agacgfm.org',
    verified: true,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'cpa-exam-aud',
    body: 'AICPA & NASBA',
    tagline: 'The core CPA section that proves you can plan an audit, gather evidence and report on financial statements.',
    description: 'AUD is one of the three Core sections of the Uniform CPA Examination under CPA Evolution and tests the skills every newly licensed CPA needs around auditing, attestation, ethics and professional responsibility. Candidates sit AUD whether they intend to work in public accounting, industry or government, because it is mandatory for all candidates. The section blends multiple-choice questions with task-based simulations that mimic real audit workpapers, and it is the gateway to the audit and attestation services a CPA may legally perform.',
    quickAnswer: {
      summary: 'AUD is a mandatory four-hour Core CPA section covering ethics, risk assessment, evidence and reporting, scored 0 to 99 with a passing mark of 75. It mixes multiple-choice questions with task-based simulations and, in 2026, costs about $262 per section plus a state application fee.',
      advantages: [
        'Required for every CPA candidate, regardless of discipline choice',
        'Covers the attestation services that define public accounting',
        'Simulations mirror real audit workpapers and judgments',
        'Transfers directly to audit, review and compilation engagements',
        'Pairs with REG for a strong assurance and tax foundation'
      ]
    },
    roadmap: ['Confirm state eligibility', 'Apply and get your NTS', 'Study the four AUD content areas', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'None beyond meeting your state board’s education requirement to sit the CPA Exam; the section is open to all candidates.',
    examMeta: {
      questions: 'Multiple-choice and task-based simulations (about 50% each)',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Ethics, Professional Responsibilities and General Principles', weight: '15-25%' },
      { name: 'Assessing Risk and Developing a Planned Response', weight: '25-35%' },
      { name: 'Performing Further Procedures and Obtaining Evidence', weight: '30-40%' },
      { name: 'Forming Conclusions and Reporting', weight: '10-20%' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Format', 'MCQs and task-based simulations'],
      ['Validity', 'All 4 sections within your jurisdiction window (18 or 30 months)'],
      ['Weighting', 'MCQ and TBS each about 50%']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction; some states bundle the application fee per section.' },
    difficulty: 'Hard',
    audience: 'All CPA candidates; especially aspiring auditors',
    time: '8 to 12 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'How hard is AUD?', a: 'Most candidates find AUD moderately hard. The conceptual material, especially risk assessment and internal control, is less mechanical than FAR, but the simulations demand professional judgment. Candidates with audit experience usually score higher.' },
      { q: 'How long should I study?', a: 'A typical plan is 80 to 120 hours over eight to twelve weeks, with heavy time on task-based simulations in the final two weeks. Those weak in auditing usually add more.' },
      { q: 'Is AUD required for everyone?', a: 'Yes. AUD is one of the three Core sections that every CPA candidate must pass, along with FAR and REG. Your Discipline choice (BAR, ISC or TCP) is the only elective.' },
      { q: 'What score do I need?', a: 'The passing scaled score is 75 on a 0 to 99 scale. Because the scale is not a percentage, a 75 reflects the established standard of competence, not 75 percent correct.' },
      { q: 'Does AUD expire?', a: 'Yes, like all sections. You must pass all four CPA sections within your state’s rolling window, commonly 18 or 30 months from your first passed section.' }
    ],
    summaryPoints: [
      'Mandatory Core CPA section on audit, attestation and ethics',
      'Four hours, 0 to 99 scaled, pass at 75',
      'Multiple-choice and task-based simulations each about half',
      'One of three Core sections everyone must pass'
    ],
    relatedSlugs: ['cpa-exam-far', 'cpa-exam-reg', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cpa-exam-far',
    body: 'AICPA & NASBA',
    tagline: 'The core CPA section on financial reporting, the broadest and often hardest test of accounting knowledge.',
    description: 'FAR is a mandatory Core CPA section that examines the financial reporting framework from the perspective of US GAAP and IFRS, along with select transactions and state and local government accounting. It is widely regarded as the most content-heavy section because it reaches nearly every financial statement account and many specialized transactions. Every CPA candidate must pass FAR, and strong performance underpins the financial-statement work CPAs perform in audit, industry and advisory roles.',
    quickAnswer: {
      summary: 'FAR is a required four-hour Core CPA section testing financial reporting under GAAP and IFRS, government accounting and select transactions, scored 0 to 99 with a pass mark of 75. It combines multiple-choice questions and task-based simulations and costs about $262 per section in 2026.',
      advantages: [
        'Mandatory for all CPA candidates',
        'Covers the full financial reporting framework CPAs use daily',
        'Weighted toward the accounts and transactions most tested',
        'Builds the foundation for audit and industry roles',
        'Pairs naturally with AUD for assurance careers'
      ]
    },
    roadmap: ['Confirm state eligibility', 'Apply and get your NTS', 'Master the FAR blueprint areas', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'None beyond your state board’s education requirement; open to all candidates.',
    examMeta: {
      questions: 'MCQs and task-based simulations',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Financial Reporting', weight: '25-35%' },
      { name: 'Select Financial Statement Accounts', weight: '30-40%' },
      { name: 'Select Transactions', weight: '20-30%' },
      { name: 'State and Local Governments', weight: '5-15%' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Format', 'MCQs and task-based simulations'],
      ['Government', 'Includes a state and local government component'],
      ['Window', 'All 4 sections within 18 or 30 months per state']
    ],
    timeline: [{ stage: 'Study', duration: '10 to 16 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction.' },
    difficulty: 'Hard',
    audience: 'All CPA candidates; especially aspiring auditors and controllers',
    time: '10 to 16 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'How hard is FAR?', a: 'FAR is consistently the hardest section for most candidates because of its breadth. It covers more material than any other section, from pensions to leases to governmental accounting, so memorization and repetition matter.' },
      { q: 'How long should I study?', a: 'Most candidates spend 120 to 180 hours across ten to sixteen weeks. The volume of topics means spreading study out beats cramming, and simulations need dedicated practice.' },
      { q: 'Is FAR required?', a: 'Yes, FAR is a Core section every CPA candidate must pass, together with AUD and REG. Only your fourth section, the Discipline, is an elective.' },
      { q: 'What is the pass mark?', a: 'A scaled score of 75 on the 0 to 99 scale is required. The score is not a percentage; it reflects the published competency standard.' },
      { q: 'Why does FAR include government accounting?', a: 'Because CPAs in public practice and government frequently encounter state and local government financial statements, a portion of FAR tests that framework even for candidates who choose a different Discipline.' }
    ],
    summaryPoints: [
      'Mandatory Core section on financial reporting under GAAP/IFRS',
      'Four hours, pass at scaled 75',
      'MCQs and simulations; includes government accounting',
      'Usually the most content-heavy CPA section'
    ],
    relatedSlugs: ['cpa-exam-aud', 'cpa-exam-reg', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cpa-exam-reg',
    body: 'AICPA & NASBA',
    tagline: 'The core CPA section covering federal taxation, business law and professional responsibility.',
    description: 'REG is a mandatory Core CPA section focused on federal taxation of individuals and entities, business law and the professional and ethical responsibilities of a CPA. It is the section most relevant to tax return preparation and tax planning, and it pairs with the TCP Discipline for candidates who want a tax-heavy path. REG blends multiple-choice questions with task-based simulations that test applied tax and legal reasoning rather than rote rules.',
    quickAnswer: {
      summary: 'REG is a required four-hour Core CPA section on federal taxation, business law and professional responsibility, scored 0 to 99 with a pass mark of 75. It mixes multiple-choice questions with task-based simulations and costs about $262 per section in 2026.',
      advantages: [
        'Required for every CPA candidate',
        'Covers the tax and law CPAs use in practice',
        'Gateway to the TCP tax Discipline',
        'Simulations test applied tax reasoning',
        'Directly relevant to tax-season and advisory work'
      ]
    },
    roadmap: ['Confirm state eligibility', 'Apply and get your NTS', 'Study the five REG areas', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'None beyond your state board’s education requirement; open to all candidates.',
    examMeta: {
      questions: 'MCQs and task-based simulations',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Ethics, Professional Responsibilities and Federal Tax Procedures', weight: '10-20%' },
      { name: 'Business Law', weight: '15-25%' },
      { name: 'Federal Taxation of Property Transactions', weight: '5-15%' },
      { name: 'Federal Taxation of Individuals', weight: '22-32%' },
      { name: 'Federal Taxation of Entities', weight: '23-33%' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Format', 'MCQs and task-based simulations'],
      ['Focus', 'Tax of individuals and entities plus business law'],
      ['Window', 'All 4 sections within 18 or 30 months']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction.' },
    difficulty: 'Hard',
    audience: 'All CPA candidates; especially aspiring tax practitioners',
    time: '8 to 12 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'How hard is REG?', a: 'REG is moderately hard. The tax calculations are learnable, but the volume of rules and the business-law portion trip up candidates who focus only on math. Strong candidates drill both the code mechanics and the legal concepts.' },
      { q: 'How long should I study?', a: 'Plan on 90 to 130 hours over eight to twelve weeks, with extra time on entity taxation and the simulations that integrate multiple topics.' },
      { q: 'Is REG required?', a: 'Yes. REG is a Core section every candidate must pass, with AUD and FAR. Your Discipline (BAR, ISC or TCP) is the only choice.' },
      { q: 'What score is needed?', a: 'A scaled 75 out of 99 is the passing standard, which is a competency benchmark rather than 75 percent of questions.' },
      { q: 'Does REG help with the EA exam?', a: 'The federal tax content overlaps with the Special Enrollment Examination, so CPA candidates who pass REG carry useful knowledge toward the enrolled-agent credential, though the EA tests tax more deeply across three parts.' }
    ],
    summaryPoints: [
      'Mandatory Core section on federal tax, business law and ethics',
      'Four hours, pass at scaled 75',
      'MCQs and simulations; entity tax is the heaviest area',
      'Pairs with the TCP Discipline for tax-focused CPAs'
    ],
    relatedSlugs: ['cpa-exam-tcp', 'cpa-exam-aud', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cpa-exam-bar',
    body: 'AICPA & NASBA',
    tagline: 'The BAR Discipline for CPAs who want deep financial reporting, governmental and data-analytics skills.',
    description: 'BAR is one of three Discipline sections a CPA candidate chooses after the three Core sections, alongside ISC and TCP. It emphasizes advanced financial reporting topics such as derivatives, hedging, consolidations and state and local government accounting, plus managerial accounting and data analytics. BAR suits candidates aiming at technical accounting, corporate controllership or governmental finance roles where the deepest reporting knowledge is valued.',
    quickAnswer: {
      summary: 'BAR is an elective four-hour CPA Discipline section on advanced financial reporting, government accounting and data analytics, scored 0 to 99 with a pass mark of 75. You choose it instead of ISC or TCP, and it costs about $262 per section in 2026.',
      advantages: [
        'One of three Discipline choices after the Core',
        'Deepest coverage of financial reporting and consolidations',
        'Includes state and local government accounting',
        'Adds managerial accounting and data analytics',
        'Strong fit for controllership and technical accounting'
      ]
    },
    roadmap: ['Pass the 3 Core sections', 'Choose BAR as your Discipline', 'Study advanced reporting topics', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'You must complete the three Core sections (AUD, FAR, REG); BAR is selected as the fourth and final section.',
    examMeta: {
      questions: 'MCQs and task-based simulations',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Advanced financial reporting: derivatives, hedging, consolidations and investments' },
      { name: 'State and local government accounting' },
      { name: 'Managerial accounting and data analytics' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Type', 'Elective Discipline (pick one of BAR, ISC, TCP)'],
      ['Prerequisite', 'All three Core sections first'],
      ['Weighting', 'MCQ and TBS each about 50%']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction.' },
    difficulty: 'Hard',
    audience: 'CPA candidates targeting technical accounting or controllership',
    time: '8 to 12 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'Who should choose BAR?', a: 'Candidates who enjoyed FAR and want the deepest reporting content, especially those heading into technical accounting, corporate controllership or governmental finance, tend to choose BAR.' },
      { q: 'Can I switch Discipline after starting?', a: 'Your Discipline is locked once you schedule it, but you may sit a different Discipline only if you have not yet passed one; check your jurisdiction rules before booking.' },
      { q: 'How does BAR differ from FAR?', a: 'FAR is a required Core covering the broad reporting framework, while BAR is an elective that goes further into consolidations, derivatives, governmental and managerial topics.' },
      { q: 'Is BAR harder than ISC or TCP?', a: 'Difficulty is personal. BAR is content-heavy like FAR, ISC is systems-oriented, and TCP is tax-oriented; pick the one matching your strengths rather than chasing an easy label.' },
      { q: 'What score do I need?', a: 'A scaled 75 on the 0 to 99 scale, the same passing standard as every CPA section.' }
    ],
    summaryPoints: [
      'Elective CPA Discipline on advanced reporting and government',
      'Four hours, pass at scaled 75',
      'Choose one of BAR, ISC or TCP after the Core',
      'Best fit for technical accounting and controllership'
    ],
    relatedSlugs: ['cpa-exam-far', 'cpa-exam-isc', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cpa-exam-isc',
    body: 'AICPA & NASBA',
    tagline: 'The ISC Discipline for CPAs who live at the intersection of accounting and information systems.',
    description: 'ISC is one of three Discipline sections chosen after the Core, alongside BAR and TCP, and focuses on information systems, data management, security, confidentiality and System and Organization Controls (SOC) engagements. It suits candidates moving into IT audit, controls advisory or the growing overlap between accounting and technology. ISC rewards the candidate who thinks about how systems produce the numbers, not just the numbers themselves.',
    quickAnswer: {
      summary: 'ISC is an elective four-hour CPA Discipline section on information systems, data, security and SOC engagements, scored 0 to 99 with a pass mark of 75. You choose it instead of BAR or TCP, and it costs about $262 per section in 2026.',
      advantages: [
        'One of three Discipline choices after the Core',
        'Covers IT governance, security and privacy',
        'Includes SOC examination concepts',
        'Aligns accounting with data and systems',
        'Strong fit for IT audit and controls advisory'
      ]
    },
    roadmap: ['Pass the 3 Core sections', 'Choose ISC as your Discipline', 'Study systems, security and SOC', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'You must complete the three Core sections (AUD, FAR, REG); ISC is selected as the fourth and final section.',
    examMeta: {
      questions: 'MCQs and task-based simulations',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Information systems and data management' },
      { name: 'Security, confidentiality and privacy' },
      { name: 'System and organization (SOC) engagements' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Type', 'Elective Discipline (pick one of BAR, ISC, TCP)'],
      ['Prerequisite', 'All three Core sections first'],
      ['Weighting', 'MCQ and TBS each about 50%']
    ],
    timeline: [{ stage: 'Study', duration: '7 to 11 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction.' },
    difficulty: 'Hard',
    audience: 'CPA candidates targeting IT audit and systems controls',
    time: '7 to 11 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'Who should choose ISC?', a: 'Candidates comfortable with technology, data and controls, and those aiming at IT audit or SOC advisory work, tend to choose ISC over the reporting- or tax-heavy disciplines.' },
      { q: 'Do I need a tech background?', a: 'Not formally, but ISC assumes comfort with information systems concepts. A background in IT audit or ERP work helps, while pure tax people may prefer TCP.' },
      { q: 'How does ISC relate to AUD?', a: 'AUD covers audit fundamentals including some controls, while ISC goes deeper into IT governance, security and SOC engagements, so the two reinforce each other.' },
      { q: 'Is ISC easier than FAR?', a: 'It is narrower than FAR, but the systems vocabulary is new to many accountants. Choose it for fit, not perceived ease.' },
      { q: 'What score do I need?', a: 'A scaled 75 on the 0 to 99 scale, the same standard as every CPA section.' }
    ],
    summaryPoints: [
      'Elective CPA Discipline on systems, security and SOC',
      'Four hours, pass at scaled 75',
      'Choose one of BAR, ISC or TCP after the Core',
      'Best fit for IT audit and controls advisory'
    ],
    relatedSlugs: ['cpa-exam-aud', 'cpa-exam-bar', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cpa-exam-tcp',
    body: 'AICPA & NASBA',
    tagline: 'The TCP Discipline for CPAs who want advanced tax compliance and planning depth.',
    description: 'TCP is one of three Discipline sections chosen after the Core, alongside BAR and ISC, and concentrates on advanced individual and entity tax compliance plus tax and personal financial planning. It is the natural extension of REG for candidates who intend to build a tax practice or advise clients on strategy. TCP rewards candidates who enjoyed the tax portions of REG and want to go further than the Core requires.',
    quickAnswer: {
      summary: 'TCP is an elective four-hour CPA Discipline section on advanced tax compliance and planning, scored 0 to 99 with a pass mark of 75. You choose it instead of BAR or ISC, and it costs about $262 per section in 2026.',
      advantages: [
        'One of three Discipline choices after the Core',
        'Deepest tax coverage of the CPA Exam',
        'Extends REG into planning and strategy',
        'Aligns with tax-season and advisory careers',
        'Strong fit for prospective tax practitioners'
      ]
    },
    roadmap: ['Pass the 3 Core sections', 'Choose TCP as your Discipline', 'Study advanced tax topics', 'Sit the 4-hour exam', 'Score 75 or higher'],
    prerequisites: 'You must complete the three Core sections (AUD, FAR, REG); TCP is selected as the fourth and final section.',
    examMeta: {
      questions: 'MCQs and task-based simulations',
      time: '4 hours',
      pass: 'Scaled 75 / 99',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Individual and personal financial planning tax compliance' },
      { name: 'Entity tax compliance' },
      { name: 'Entity tax planning' },
      { name: 'Property transactions and specialized tax topics' }
    ],
    examEssentials: [
      ['Scoring', '0 to 99 scaled; 75 to pass'],
      ['Type', 'Elective Discipline (pick one of BAR, ISC, TCP)'],
      ['Prerequisite', 'All three Core sections first'],
      ['Weighting', 'MCQ and TBS each about 50%']
    ],
    timeline: [{ stage: 'Study', duration: '7 to 11 weeks' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (per section)', fee: '$262' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction.' },
    difficulty: 'Hard',
    audience: 'CPA candidates targeting tax compliance and planning',
    time: '7 to 11 weeks typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'Who should choose TCP?', a: 'Candidates who liked the tax content in REG and plan to practice tax or advise on planning usually choose TCP, the most tax-intensive of the three disciplines.' },
      { q: 'Does TCP overlap with the EA exam?', a: 'Yes, there is real overlap with the Special Enrollment Examination, so a CPA who passes TCP carries strong knowledge toward the enrolled-agent credential.' },
      { q: 'How is TCP different from REG?', a: 'REG is the required Core introducing federal tax; TCP is the elective that goes deeper into entity planning, individual strategy and specialized transactions.' },
      { q: 'Is TCP the easiest discipline?', a: 'Not necessarily. It is familiar to tax-minded candidates, but the planning simulations are demanding. Choose it for strengths, not the rumor of ease.' },
      { q: 'What score do I need?', a: 'A scaled 75 on the 0 to 99 scale, the same passing standard as every CPA section.' }
    ],
    summaryPoints: [
      'Elective CPA Discipline on advanced tax and planning',
      'Four hours, pass at scaled 75',
      'Choose one of BAR, ISC or TCP after the Core',
      'Best fit for tax-focused CPA careers'
    ],
    relatedSlugs: ['cpa-exam-reg', 'enrolled-agent', 'cpa-exam'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cpa-exam',
    body: 'AICPA & NASBA',
    tagline: 'The Uniform CPA Examination: three Core sections plus one Discipline that opens the door to the CPA license.',
    description: 'The Uniform CPA Examination is the four-section exam every CPA candidate must pass, structured under CPA Evolution as three Core sections (AUD, FAR, REG) plus one Discipline the candidate chooses (BAR, ISC or TCP). It is the central hurdle of the CPA license across all 55 US jurisdictions, sitting alongside the 150-hour education rule and the experience requirement. Passing all four sections within the state window earns the right to call yourself a CPA once the license is granted by your board.',
    quickAnswer: {
      summary: 'The Uniform CPA Examination is a four-section exam: three Core sections (AUD, FAR, REG) plus one Discipline (BAR, ISC or TCP), each four hours and scored 0 to 99 with a 75 pass. In 2026 it costs about $262 per section plus a state application fee.',
      advantages: [
        'Required for the CPA license in every US jurisdiction',
        'Three Core sections everyone takes, then one Discipline of choice',
        'Each section is four hours of MCQs and task-based simulations',
        'Pass all four within your state window (18 or 30 months)',
        'Pairs with the 150-hour rule and experience to certify'
      ]
    },
    roadmap: ['Confirm state education rule', 'Apply and get your NTS', 'Pass the three Core sections', 'Choose and pass one Discipline', 'Meet experience to be licensed'],
    prerequisites: 'Varies by state; most require 150 semester hours to be licensed, though many states let you sit the exam before finishing the credits.',
    examMeta: {
      questions: '4 sections of MCQs and task-based simulations',
      time: '4 hours per section',
      pass: 'Scaled 75 / 99 per section',
      fee: 'About $262 per section plus a state application fee',
      format: 'Multiple-choice and task-based simulations',
      admin: 'Prometric test centers'
    },
    topics: [
      { name: 'Core: Auditing and Attestation (AUD)' },
      { name: 'Core: Financial Accounting and Reporting (FAR)' },
      { name: 'Core: Taxation and Regulation (REG)' },
      { name: 'Discipline: choose BAR, ISC or TCP' }
    ],
    examEssentials: [
      ['Sections', '3 Core + 1 Discipline'],
      ['Pass mark', 'Scaled 75 per section'],
      ['Window', '18 or 30 months to pass all 4'],
      ['Credential', 'Leads to the CPA license']
    ],
    timeline: [{ stage: 'Study', duration: '12 to 18 months total' }, { stage: 'Test', duration: '4 hours per section' }, { stage: 'Scores', duration: 'fixed release schedule' }],
    costBreakdown: { items: [{ item: 'Exam fee (4 sections)', fee: '~$1,050' }, { item: 'State application fee', fee: '~$96 one-time' }], total: '$358 to $1,100 for all four', footnote: 'Fees vary by jurisdiction; review courses are an additional cost.' },
    difficulty: 'Hard',
    audience: 'Aspiring CPAs in all 55 jurisdictions',
    time: '12 to 18 months typical prep',
    cost: '$262 per section plus application fee',
    faqs: [
      { q: 'How is the CPA Exam structured?', a: 'Under CPA Evolution it is three Core sections (AUD, FAR, REG) that everyone takes, plus one Discipline (BAR, ISC or TCP) you choose based on your strengths and career aim.' },
      { q: 'Can I take the sections in any order?', a: 'Yes. Most candidates do the three Core sections first and then the Discipline, but you may schedule them in any sequence within your Notice to Schedule window.' },
      { q: 'How much does it cost?', a: 'About $262 per section plus a one-time state application fee around $96, so the four sections run roughly $1,050 to $1,100 excluding review course fees.' },
      { q: 'Do the sections expire?', a: 'Yes. You must pass all four within your state’s rolling window, commonly 18 or 30 months from your first passed section, or earlier passes lapse.' },
      { q: 'What happens after I pass?', a: 'Passing the exam lets your state board certify you as a CPA once you also meet the education and experience requirements and any ethics exam the state requires.' }
    ],
    summaryPoints: [
      'Four sections: three Core plus one chosen Discipline',
      'Each four hours, scored 0 to 99, pass at 75',
      'Central requirement for the CPA license nationwide',
      'Must be completed within a state rolling window'
    ],
    relatedSlugs: ['cpa-exam-aud', 'cpa-exam-far', 'cpa-exam-reg', 'cpa-exam-tcp'],
    sourceUrl: 'https://www.aicpa-cima.com/cpa-certification/exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'enrolled-agent',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'The IRS credential with unlimited representation rights before the agency, earned by passing the three-part SEE.',
    description: 'The Enrolled Agent is the only credential the IRS itself grants, carrying unlimited rights to represent taxpayers before the agency at any level. Candidates earn it by passing all three parts of the Special Enrollment Examination (or by qualifying through certain IRS experience) and then applying via Form 23. Unlike the CPA or attorney, the EA’s authority comes solely from the IRS, making it the most portable tax-representation credential and a strong route for preparers who do not want the full CPA path.',
    quickAnswer: {
      summary: 'An Enrolled Agent is an IRS-credentialed tax professional with unlimited representation rights, earned by passing all three parts of the Special Enrollment Examination or qualifying through IRS experience, then filing Form 23. As of 2026 the SEE is delivered by PSI and costs about $317 per part.',
      advantages: [
        'Unlimited representation rights before the IRS',
        'Granted directly by the IRS, portable across states',
        'No degree requirement; the SEE is the main gate',
        'Renewed with 72 CPE hours every three years',
        'Pairs well with a tax-prep or bookkeeping practice'
      ]
    },
    roadmap: ['Get a PTIN', 'Study the three SEE parts', 'Pass Part 1, 2 and 3', 'File Form 23 and fee', 'Maintain with 72 CPE / 3 yrs'],
    prerequisites: 'An active PTIN and a clean tax-compliance history; no degree is required, though you must pass all three SEE parts (or qualify via IRS employment).',
    examMeta: {
      questions: '3 parts, 100 questions each (85 scored + 15 pretest)',
      time: '3.5 hours per part',
      pass: 'Scaled 500 / 800 (PSI, 2026)',
      fee: 'About $317 per part',
      format: 'Multiple-choice, computer-based',
      admin: 'PSI test centers and online'
    },
    topics: [
      { name: 'Part 1: Individuals' },
      { name: 'Part 2: Businesses' },
      { name: 'Part 3: Representation, Practices and Procedures' }
    ],
    examEssentials: [
      ['Credential', 'Granted by the IRS'],
      ['Rights', 'Unlimited representation before the IRS'],
      ['Parts', '3 parts, any order'],
      ['Renewal', '72 CPE hours / 3 years']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '3.5 hrs per part' }, { stage: 'Enrollment', duration: 'weeks after Form 23' }],
    costBreakdown: { items: [{ item: 'SEE per part', fee: '$317' }, { item: 'Form 23 enrollment', fee: '$140' }], total: '$1,000 to $1,200', footnote: 'Part fee reflects the 2026 IRS-plus-PSI rate; it rose effective April 9, 2026.' },
    difficulty: 'Moderate',
    audience: 'Tax preparers seeking representation rights',
    time: '3 to 6 months typical prep',
    cost: '$1,000 to $1,200 all-in',
    faqs: [
      { q: 'How hard is the EA exam?', a: 'Most candidates rate the SEE moderate. The material is broad but conceptual rather than calculation-heavy; Part 3 on procedures is often the easiest and Part 2 on businesses the hardest.' },
      { q: 'How long does it take?', a: 'Plan three to six months while working, with each part needing a few weeks. Many candidates sit one part at a time and roll the result forward.' },
      { q: 'Do I need a degree?', a: 'No. The SEE is the gate, not a degree. You do need an active PTIN and to pass a tax-compliance check when you apply for enrollment.' },
      { q: 'How is the EA different from a CPA?', a: 'The CPA is a state license covering audit, tax and attestation with a 150-hour education rule, while the EA is an IRS credential focused on tax representation with no degree requirement.' },
      { q: 'Does the EA expire?', a: 'Enrollment renews each year with the PTIN and requires 72 CPE hours over three years; letting CPE lapse can suspend your rights.' }
    ],
    summaryPoints: [
      'IRS-granted credential with unlimited representation rights',
      'Earn by passing all three SEE parts or IRS experience',
      'SEE delivered by PSI in 2026, scaled 200-800, pass 500',
      'Renew with 72 CPE hours every three years'
    ],
    relatedSlugs: ['see-part-1', 'see-part-2', 'see-part-3', 'cpa-exam-reg'],
    sourceUrl: 'https://www.irs.gov/tax-professionals/enrolled-agents',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'irs-afsp-record-of-completion',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'The annual IRS recognition for unenrolled preparers who complete the refresher and continuing education.',
    description: 'The Annual Filing Season Program Record of Completion is a voluntary yearly credential for tax return preparers who are not CPAs, EAs or attorneys. It requires 18 hours of continuing education including a six-hour federal tax refresher course and exam, plus a consent to the rules in Circular 230. Holders earn limited representation rights for the returns they prepared and are listed in the IRS public directory, which helps them stand out during filing season.',
    quickAnswer: {
      summary: 'The AFSP Record of Completion is a voluntary annual IRS program for unenrolled preparers, requiring 18 hours of CE including a six-hour federal tax refresher course and exam. Holders gain limited representation rights and a listing in the IRS directory; it must be renewed each year.',
      advantages: [
        'Recognized by the IRS as a qualified preparer',
        'Limited representation rights for returns you prepared',
        'Listing in the public IRS directory of return preparers',
        'Signals commitment to continuing education',
        'No degree or license required to participate'
      ]
    },
    roadmap: ['Get a PTIN', 'Complete 18 hours of CE', 'Pass the 6-hour AFTR course and exam', 'Consent to Circular 230', 'Receive the annual Record of Completion'],
    prerequisites: 'An active PTIN and the completion of the required continuing education; open to unenrolled preparers without a CPA, EA or attorney license.',
    examMeta: {
      questions: 'AFTR exam (part of 18 hours CE)',
      time: '6-hour refresher course plus exam',
      pass: 'Pass the AFTR exam',
      fee: 'Course and CE fees vary by provider',
      format: 'Online course and exam',
      admin: 'IRS-approved CE providers'
    },
    topics: [
      { name: 'Federal Tax Law (10 hours)' },
      { name: 'Federal Tax Refresher (6 hours + exam)' },
      { name: 'Ethics (2 hours)' }
    ],
    examEssentials: [
      ['Requirement', '18 hours CE: 10 tax, 6 AFTR, 2 ethics'],
      ['Rights', 'Limited representation for returns prepared'],
      ['Validity', 'One filing season; renew annually'],
      ['Directory', 'Listed in the IRS public directory']
    ],
    timeline: [{ stage: 'Study', duration: 'a few weeks' }, { stage: 'AFTR exam', duration: '6-hour course' }, { stage: 'Issued', duration: 'each filing season' }],
    costBreakdown: { items: [{ item: 'AFTR course and exam', fee: '$100 to $200' }, { item: 'Additional CE', fee: '$50 to $150' }], total: '$150 to $350', footnote: 'Costs depend on the IRS-approved CE provider chosen.' },
    difficulty: 'Easy',
    audience: 'Unenrolled tax return preparers',
    time: 'A few weeks of study',
    cost: '$150 to $350 per year',
    faqs: [
      { q: 'Is the AFSP required to prepare returns?', a: 'No. Unenrolled preparers may file returns without it, but the AFSP gives limited representation rights and a directory listing that many clients look for.' },
      { q: 'How is it different from the EA?', a: 'The EA requires passing the three-part SEE and grants unlimited representation; the AFSP is annual, lighter, and grants only limited rights for returns you prepared.' },
      { q: 'Does it expire?', a: 'Yes. It is valid for one filing season and must be renewed each year with the full CE requirement.' },
      { q: 'What is the AFTR?', a: 'The Annual Federal Tax Refresher is the six-hour course and exam at the heart of the AFSP, covering current-year federal tax law updates.' }
    ],
    summaryPoints: [
      'Voluntary annual IRS program for unenrolled preparers',
      '18 hours CE including a 6-hour AFTR exam',
      'Limited representation rights and directory listing',
      'Renewed every filing season'
    ],
    relatedSlugs: ['enrolled-agent', 'irs-certifying-acceptance-agent', 'see-part-1'],
    sourceUrl: 'https://www.irs.gov/tax-professionals/annual-filing-season-program',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'irs-certifying-acceptance-agent',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'The IRS-required training for agents who certify identity documents for ITIN applications.',
    description: 'The Certifying Acceptance Agent program authorizes individuals and entities to assist taxpayers with Form W-7 (Application for IRS Individual Taxpayer Identification Number) by reviewing and certifying identity documents so applicants do not have to mail originals to the IRS. After reopening applications in January 2024, the IRS requires both mandatory ITIN training and, for forensic document examiners, additional forensic training, all completed through the electronic application system. CAAs are a specialized, compliance-heavy role rather than a general tax credential.',
    quickAnswer: {
      summary: 'A Certifying Acceptance Agent is authorized by the IRS to certify identity documents for ITIN (Form W-7) applicants, sparing them from mailing originals. The role requires mandatory IRS ITIN training and, for forensic examiners, forensic training, completed through the electronic application after the program reopened in January 2024.',
      advantages: [
        'Authorized to certify documents, protecting applicant originals',
        'Serves a distinct, underserved ITIN applicant population',
        'Adds a paid service line to a tax or accounting practice',
        'Backed by formal IRS training and an agreement',
        'Renews through the IRS CAA program'
      ]
    },
    roadmap: ['Apply when the IRS opens the window', 'Complete mandatory ITIN training', 'Complete forensic training (if applicable)', 'Submit the electronic application', 'Sign the CAA agreement'],
    prerequisites: 'Acceptance by the IRS and completion of the required training; the application reopened in January 2024 after a multi-year pause.',
    examMeta: {
      questions: 'Training and certification, not a public exam',
      time: 'Training completed online',
      pass: 'Complete required training modules',
      fee: 'No standard public exam fee',
      format: 'Online training and application',
      admin: 'Internal Revenue Service'
    },
    topics: [
      { name: 'ITIN and Form W-7 procedures' },
      { name: 'Identity document review and certification' },
      { name: 'Forensic document examination (forensic CAAs)' }
    ],
    examEssentials: [
      ['Authorization', 'Certify ITIN identity documents'],
      ['Training', 'Mandatory ITIN + forensic (as applicable)'],
      ['Application', 'Electronic, via the IRS system'],
      ['Reopened', 'Applications reopened January 2024']
    ],
    timeline: [{ stage: 'Training', duration: 'before application' }, { stage: 'Application', duration: 'via IRS portal' }, { stage: 'Agreement', duration: 'on approval' }],
    costBreakdown: { items: [{ item: 'Training', fee: 'Provided by IRS' }], total: 'Varies by practice', footnote: 'The IRS does not charge a standard public exam fee; costs are the practice’s own time and any vendor training.' },
    difficulty: 'Moderate',
    audience: 'Tax pros serving ITIN applicants',
    time: 'Training completed before application',
    cost: 'Mostly time; no standard exam fee',
    faqs: [
      { q: 'What does a CAA actually do?', a: 'A CAA reviews an applicant’s identity documents in person, certifies them, and forwards the Form W-7 so the applicant never mails original passports or IDs to the IRS.' },
      { q: 'Is there a test?', a: 'There is required IRS training rather than a public exam; forensic document examiners also complete forensic training before certification.' },
      { q: 'Why did the program pause?', a: 'The IRS suspended new CAA applications for several years and reopened them in January 2024 with updated mandatory training requirements.' },
      { q: 'Do I need to be an EA or CPA?', a: 'No. The CAA is a distinct authorization; you apply through the IRS and complete its training, regardless of other credentials.' }
    ],
    summaryPoints: [
      'IRS authorization to certify ITIN identity documents',
      'Requires mandatory ITIN (and forensic) training',
      'Electronic application after the January 2024 reopening',
      'A specialized service, not a general tax license'
    ],
    relatedSlugs: ['irs-afsp-record-of-completion', 'enrolled-agent', 'see-part-3'],
    sourceUrl: 'https://www.irs.gov/individuals/international-taxpayers/certifying-acceptance-agent-program',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'see-part-1',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'SEE Part 1: the individual taxation paper that opens the Enrolled Agent path.',
    description: 'Part 1 of the Special Enrollment Examination covers federal taxation of individuals, including preliminary work, income, deductions, credits, specialized returns and taxpayer advising. It is the first of three SEE parts a candidate passes to become an Enrolled Agent, though parts may be taken in any order. As of the 2026 PSI transition the exam is 100 questions in 3.5 hours, scored on a 200 to 800 scale with a 500 passing mark.',
    quickAnswer: {
      summary: 'SEE Part 1 is the individuals paper of the enrolled-agent exam: 100 questions in 3.5 hours on individual income, deductions, credits and advising, scored 200 to 800 with a 500 pass. In 2026 it costs about $317 and is delivered by PSI.',
      advantages: [
        'First step toward unlimited IRS representation rights',
        'Focuses on individual tax, the most common return',
        'May be taken in any order with Parts 2 and 3',
        'Counts toward the EA credential once all three pass',
        'Strong prep for a tax-prep career'
      ]
    },
    roadmap: ['Hold a PTIN', 'Study individual taxation', 'Schedule Part 1 with PSI', 'Pass at scaled 500', 'Move to Parts 2 and 3'],
    prerequisites: 'An active PTIN to sit; no degree required. Parts may be attempted in any sequence.',
    examMeta: {
      questions: '100 questions (85 scored + 15 pretest)',
      time: '3.5 hours',
      pass: 'Scaled 500 / 800 (PSI, 2026)',
      fee: 'About $317 per part',
      format: 'Multiple-choice, computer-based',
      admin: 'PSI test centers and online'
    },
    topics: [
      { name: 'Preliminary work and taxpayer data' },
      { name: 'Income and assets' },
      { name: 'Deductions and credits' },
      { name: 'Specialized returns and taxpayer advising' }
    ],
    examEssentials: [
      ['Scope', 'Individuals only'],
      ['Scoring', '200 to 800; pass 500'],
      ['Format', '100 Q, 3.5 hours'],
      ['Order', 'May be taken before Parts 2 and 3']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 weeks' }, { stage: 'Test', duration: '3.5 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'Part fee', fee: '$317' }], total: '$317 per part', footnote: '2026 IRS-plus-PSI rate effective April 9, 2026.' },
    difficulty: 'Moderate',
    audience: 'Aspiring enrolled agents',
    time: '3 to 6 weeks per part',
    cost: '$317 per part',
    faqs: [
      { q: 'Can I take Part 1 first?', a: 'Yes. The three SEE parts may be taken in any order; many start with individuals because it is the most familiar.' },
      { q: 'How hard is Part 1?', a: 'Most candidates find Part 1 moderate. It rewards methodical study of the individual provisions rather than advanced calculations.' },
      { q: 'What score do I need?', a: 'Under PSI a scaled 500 on the 200 to 800 scale. The old Prometric scale used a 105 pass, but the 2026 transition changed scoring.' },
      { q: 'Does passing Part 1 make me an EA?', a: 'No. You must pass all three parts and then file Form 23 to be enrolled; a single part keeps its validity while you finish.' }
    ],
    summaryPoints: [
      'SEE Part 1 covers individual taxation',
      '100 questions, 3.5 hours, pass at scaled 500',
      'One of three parts needed for the EA',
      'Delivered by PSI in 2026'
    ],
    relatedSlugs: ['see-part-2', 'see-part-3', 'enrolled-agent'],
    sourceUrl: 'https://www.irs.gov/tax-professionals/enrolled-agents/special-enrollment-examination-see',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'see-part-2',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'SEE Part 2: the business taxation paper for the Enrolled Agent credential.',
    description: 'Part 2 of the Special Enrollment Examination covers federal taxation of business entities, business financial information, and specialized returns for trusts, estates and other entities. It is the second of three SEE parts, often considered the most technical because it reaches entity forms, basis and specialized filings. Like the other parts it is 100 questions in 3.5 hours on the 2026 PSI scale of 200 to 800, passing at 500.',
    quickAnswer: {
      summary: 'SEE Part 2 is the businesses paper of the enrolled-agent exam: 100 questions in 3.5 hours on entity taxation, business financials and specialized returns, scored 200 to 800 with a 500 pass. In 2026 it costs about $317 and is delivered by PSI.',
      advantages: [
        'Covers entity and trust/estate taxation',
        'Often the most technical SEE paper',
        'May be taken in any order with Parts 1 and 3',
        'Counts toward the EA credential once all three pass',
        'Builds depth for business-client work'
      ]
    },
    roadmap: ['Hold a PTIN', 'Study entity taxation', 'Schedule Part 2 with PSI', 'Pass at scaled 500', 'Move to remaining parts'],
    prerequisites: 'An active PTIN to sit; no degree required. Parts may be attempted in any sequence.',
    examMeta: {
      questions: '100 questions (85 scored + 15 pretest)',
      time: '3.5 hours',
      pass: 'Scaled 500 / 800 (PSI, 2026)',
      fee: 'About $317 per part',
      format: 'Multiple-choice, computer-based',
      admin: 'PSI test centers and online'
    },
    topics: [
      { name: 'Business entities and their taxation' },
      { name: 'Business financial information' },
      { name: 'Specialized returns (trusts, estates and more)' }
    ],
    examEssentials: [
      ['Scope', 'Businesses, trusts and estates'],
      ['Scoring', '200 to 800; pass 500'],
      ['Format', '100 Q, 3.5 hours'],
      ['Order', 'May be taken before or after Parts 1 and 3']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 7 weeks' }, { stage: 'Test', duration: '3.5 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'Part fee', fee: '$317' }], total: '$317 per part', footnote: '2026 IRS-plus-PSI rate effective April 9, 2026.' },
    difficulty: 'Hard',
    audience: 'Aspiring enrolled agents',
    time: '4 to 7 weeks per part',
    cost: '$317 per part',
    faqs: [
      { q: 'Is Part 2 the hardest SEE paper?', a: 'Many candidates find Part 2 the most technical because of entity rules, basis and specialized filings, so budget extra study time for it.' },
      { q: 'Can I take it before Part 1?', a: 'Yes. The order is up to you; some prefer to do businesses after individuals to build confidence.' },
      { q: 'What score do I need?', a: 'A scaled 500 on the 2026 PSI 200 to 800 scale; the older Prometric pass was 105.' },
      { q: 'Does passing Part 2 make me an EA?', a: 'No. All three parts plus Form 23 enrollment are required for the credential.' }
    ],
    summaryPoints: [
      'SEE Part 2 covers business and entity taxation',
      '100 questions, 3.5 hours, pass at scaled 500',
      'One of three parts needed for the EA',
      'Often the most technical SEE paper'
    ],
    relatedSlugs: ['see-part-1', 'see-part-3', 'enrolled-agent'],
    sourceUrl: 'https://www.irs.gov/tax-professionals/enrolled-agents/special-enrollment-examination-see',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'see-part-3',
    body: 'Internal Revenue Service (IRS)',
    tagline: 'SEE Part 3: the representation and procedures paper that completes the Enrolled Agent path.',
    description: 'Part 3 of the Special Enrollment Examination covers practitioner requirements, representation before the IRS, filing procedures and the ethical standards in Circular 230. It is the third SEE paper and the one most focused on practice rights and conduct rather than tax computation. At 100 questions in 3.5 hours on the 2026 PSI scale of 200 to 800, passing at 500, it is often the most straightforward for experienced preparers and completes the set needed to become an Enrolled Agent.',
    quickAnswer: {
      summary: 'SEE Part 3 is the representation paper of the enrolled-agent exam: 100 questions in 3.5 hours on IRS procedures, representation and Circular 230 ethics, scored 200 to 800 with a 500 pass. In 2026 it costs about $317 and is delivered by PSI.',
      advantages: [
        'Covers representation rights and Circular 230',
        'Often the most conceptual SEE paper',
        'May be taken in any order with Parts 1 and 2',
        'Completes the three parts needed for the EA',
        'Directly relevant to practitioner conduct'
      ]
    },
    roadmap: ['Hold a PTIN', 'Study procedures and ethics', 'Schedule Part 3 with PSI', 'Pass at scaled 500', 'File Form 23 to enroll'],
    prerequisites: 'An active PTIN to sit; no degree required. Parts may be attempted in any sequence.',
    examMeta: {
      questions: '100 questions (85 scored + 15 pretest)',
      time: '3.5 hours',
      pass: 'Scaled 500 / 800 (PSI, 2026)',
      fee: 'About $317 per part',
      format: 'Multiple-choice, computer-based',
      admin: 'PSI test centers and online'
    },
    topics: [
      { name: 'Practitioner requirements and responsibilities' },
      { name: 'Representation before the IRS' },
      { name: 'Filing procedures and penalties' },
      { name: 'Circular 230 ethics and practice standards' }
    ],
    examEssentials: [
      ['Scope', 'Procedures, representation, ethics'],
      ['Scoring', '200 to 800; pass 500'],
      ['Format', '100 Q, 3.5 hours'],
      ['Order', 'May be taken before or after Parts 1 and 2']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 weeks' }, { stage: 'Test', duration: '3.5 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'Part fee', fee: '$317' }], total: '$317 per part', footnote: '2026 IRS-plus-PSI rate effective April 9, 2026.' },
    difficulty: 'Easy',
    audience: 'Aspiring enrolled agents',
    time: '2 to 4 weeks per part',
    cost: '$317 per part',
    faqs: [
      { q: 'Is Part 3 the easiest SEE paper?', a: 'Many candidates find Part 3 the most straightforward because it is conceptual and procedural rather than calculation-heavy, though it still demands knowing Circular 230.' },
      { q: 'What does it cover?', a: 'Practitioner duties, how to represent clients before the IRS, filing and penalty procedures, and the ethical rules every practitioner must follow.' },
      { q: 'What score do I need?', a: 'A scaled 500 on the 2026 PSI 200 to 800 scale.' },
      { q: 'After passing all three, what next?', a: 'File Form 23 with the enrollment fee and clear a tax-compliance check; once approved you are an Enrolled Agent with unlimited representation rights.' }
    ],
    summaryPoints: [
      'SEE Part 3 covers procedures, representation and ethics',
      '100 questions, 3.5 hours, pass at scaled 500',
      'The final of three parts needed for the EA',
      'Strongest on Circular 230 practice standards'
    ],
    relatedSlugs: ['see-part-1', 'see-part-2', 'enrolled-agent'],
    sourceUrl: 'https://www.irs.gov/tax-professionals/enrolled-agents/special-enrollment-examination-see',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'aicpa-abv',
    body: 'American Institute of CPAs (AICPA)',
    tagline: 'The AICPA credential that certifies CPAs as business valuation specialists.',
    description: 'The Accredited in Business Valuation (ABV) credential is the AICPA’s specialty designation for CPAs who perform business valuations, attestation and litigation support. It combines a proctored exam with experience and CPE in valuation, and it signals to clients and courts that the holder meets the profession’s standards. ABV holders often work in transaction advisory, dispute resolution and fair-value reporting.',
    quickAnswer: {
      summary: 'The ABV is the AICPA’s business valuation credential for CPAs, earned through a proctored exam plus valuation experience and CPE. It certifies competence in engagement acceptance, valuation approaches, discounts and reporting for litigation, transaction and fair-value work.',
      advantages: [
        'AICPA-backed specialty for CPAs in valuation',
        'Recognized in litigation and expert testimony',
        'Covers engagement, approaches, discounts, reporting',
        'Builds on the CPA license you already hold',
        'Strong for transaction and dispute advisory'
      ]
    },
    roadmap: ['Hold a CPA', 'Meet valuation experience', 'Pass the ABV exam', 'Apply to AICPA', 'Maintain with CPE'],
    prerequisites: 'An active CPA license (or equivalent) plus valuation experience; the ABV is a CPA specialty credential.',
    examMeta: {
      questions: 'Proctored exam with multiple-choice and modules',
      time: 'Varies by format',
      pass: 'Pass the AICPA exam',
      fee: 'AICPA member exam and application fees',
      format: 'Proctored, computer-based',
      admin: 'AICPA testing partner'
    },
    topics: [
      { name: 'Engagement acceptance and scope' },
      { name: 'Valuation approaches and methods' },
      { name: 'Discounts and premiums' },
      { name: 'Report writing and standards' }
    ],
    examEssentials: [
      ['Credential', 'AICPA specialty for CPAs'],
      ['Requirement', 'CPA + exam + valuation experience'],
      ['Focus', 'Business valuation and reporting'],
      ['Maintain', 'AICPA CPE and membership']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Exam', duration: 'per format' }, { stage: 'Apply', duration: 'on pass' }],
    costBreakdown: { items: [{ item: 'Exam and application', fee: 'Varies by AICPA membership' }], total: '$300 to $1,000', footnote: 'AICPA members receive lower fees; study materials are an added cost.' },
    difficulty: 'Hard',
    audience: 'CPAs moving into valuation',
    time: '3 to 6 months prep',
    cost: '$300 to $1,000',
    faqs: [
      { q: 'Do I need a CPA for the ABV?', a: 'Yes, the ABV is an AICPA specialty built on an active CPA license, so it is intended for CPAs rather than general valuators.' },
      { q: 'What does the exam cover?', a: 'Engagement acceptance, the major valuation approaches and methods, discounts and premiums, and report writing to professional standards.' },
      { q: 'How does it compare to the NACVA CVA?', a: 'Both certify business valuators; the ABV is CPA-centric and AICPA-branded, while the CVA is offered by NACVA and also accepts non-CPAs with business degrees.' },
      { q: 'Is there a case requirement?', a: 'The ABV centers on the proctored exam plus experience; some candidates use a qualifying experience pathway instead of the full exam.' }
    ],
    summaryPoints: [
      'AICPA business-valuation specialty for CPAs',
      'Proctored exam plus valuation experience',
      'Covers approaches, discounts and reporting',
      'Strong for litigation and transaction work'
    ],
    relatedSlugs: ['ceiv-credential', 'aicpa-cff', 'nacva-cva'],
    sourceUrl: 'https://www.aicpa-cima.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ceiv-credential',
    body: 'American Institute of CPAs (AICPA)',
    tagline: 'The AICPA fair-value credential for valuing entities and intangible assets.',
    description: 'The Certified in Entity and Intangible Valuations (CEIV) is the AICPA credential focused on the fair-value measurement of entities and intangible assets for financial reporting under ASC 820. Holders commit to the Valuation for Financial Reporting (VFR) performance framework, which standardizes how fair-value estimates are documented and supported. The CEIV is pursued by valuation professionals whose work feeds audit opinions and SEC filings.',
    quickAnswer: {
      summary: 'The CEIV is the AICPA credential for fair-value measurement of entities and intangible assets, requiring completion of the VFR performance framework and a commitment to its standards. It targets valuation professionals whose estimates support financial reporting and audits.',
      advantages: [
        'AICPA credential for fair-value measurement',
        'Anchored in the VFR performance framework',
        'Trusted for ASC 820 financial reporting',
        'Signals consistent, auditable valuation work',
        'Pairs with the ABV for full coverage'
      ]
    },
    roadmap: ['Hold a relevant license', 'Complete VFR training', 'Commit to the performance framework', 'Apply to AICPA', 'Maintain with CPE'],
    prerequisites: 'A relevant professional license or qualification plus valuation experience; the CEIV is specialized for financial-reporting valuations.',
    examMeta: {
      questions: 'Performance framework and attestation, not a standard timed exam',
      time: 'Training and application',
      pass: 'Complete the VFR requirements',
      fee: 'AICPA member fees',
      format: 'Training and attestation',
      admin: 'American Institute of CPAs'
    },
    topics: [
      { name: 'Entity fair-value measurement' },
      { name: 'Intangible asset valuation' },
      { name: 'VFR performance framework compliance' }
    ],
    examEssentials: [
      ['Focus', 'Fair value under ASC 820'],
      ['Framework', 'Valuation for Financial Reporting (VFR)'],
      ['Credential', 'AICPA specialty'],
      ['Maintain', 'AICPA CPE and membership']
    ],
    timeline: [{ stage: 'Training', duration: 'weeks' }, { stage: 'Application', duration: 'on completion' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'Training and application', fee: 'Varies by AICPA membership' }], total: '$300 to $1,000', footnote: 'Fees depend on the training path and AICPA membership.' },
    difficulty: 'Hard',
    audience: 'Valuation pros in financial reporting',
    time: 'Weeks of training plus application',
    cost: '$300 to $1,000',
    faqs: [
      { q: 'What is the CEIV for?', a: 'It certifies that you can produce fair-value measurements of entities and intangibles that meet the AICPA’s Valuation for Financial Reporting framework, which auditors and filers rely on.' },
      { q: 'Is there a timed exam?', a: 'The CEIV is built around completing the VFR performance framework and an attestation of compliance rather than a conventional timed multiple-choice exam.' },
      { q: 'How does it differ from the ABV?', a: 'The ABV covers business valuation broadly, while the CEIV is narrowly focused on fair-value measurement for financial reporting.' },
      { q: 'Who needs it?', a: 'Professionals whose valuation estimates flow into audit opinions and SEC filings gain the most credibility from the CEIV.' }
    ],
    summaryPoints: [
      'AICPA fair-value credential for entities and intangibles',
      'Built on the VFR performance framework',
      'Targets ASC 820 financial reporting',
      'Complements the broader ABV'
    ],
    relatedSlugs: ['aicpa-abv', 'aicpa-cff', 'nacva-cva'],
    sourceUrl: 'https://www.aicpa-cima.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'aicpa-cff',
    body: 'American Institute of CPAs (AICPA)',
    tagline: 'The AICPA forensic accounting credential for fraud, damages and expert work.',
    description: 'The Certified in Financial Forensics (CFF) is the AICPA’s specialty credential for CPAs practicing forensic accounting, covering fraud prevention and detection, investigation techniques, damages calculation and expert testimony. It requires an active CPA plus forensic experience and a proctored exam, and it is respected in litigation, fraud and dispute engagements where a CPA’s credibility matters.',
    quickAnswer: {
      summary: 'The CFF is the AICPA forensic-accounting credential for active CPAs, earned through a proctored exam plus forensic experience and CPE. It covers fraud, investigation, damages and expert testimony for litigation and dispute work.',
      advantages: [
        'AICPA forensic specialty, CPA-only',
        'Covers fraud, investigation and damages',
        'Recognized for expert testimony',
        'Builds on the CPA license',
        'Strong for litigation and dispute work'
      ]
    },
    roadmap: ['Hold a CPA', 'Gain forensic experience', 'Pass the CFF exam', 'Apply to AICPA', 'Maintain with CPE'],
    prerequisites: 'An active CPA license plus forensic accounting experience; the CFF is restricted to CPAs.',
    examMeta: {
      questions: 'Proctored exam with multiple-choice and modules',
      time: 'Varies by format',
      pass: 'Pass the AICPA exam',
      fee: 'AICPA member exam and application fees',
      format: 'Proctored, computer-based',
      admin: 'AICPA testing partner'
    },
    topics: [
      { name: 'Fraud prevention and detection' },
      { name: 'Investigation techniques' },
      { name: 'Damages and lost-profit analysis' },
      { name: 'Expert testimony and reporting' }
    ],
    examEssentials: [
      ['Credential', 'AICPA forensic specialty for CPAs'],
      ['Requirement', 'CPA + exam + forensic experience'],
      ['Focus', 'Fraud, damages, testimony'],
      ['Maintain', 'AICPA CPE and membership']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Exam', duration: 'per format' }, { stage: 'Apply', duration: 'on pass' }],
    costBreakdown: { items: [{ item: 'Exam and application', fee: 'Varies by AICPA membership' }], total: '$300 to $1,000', footnote: 'AICPA members receive lower fees.' },
    difficulty: 'Hard',
    audience: 'CPAs in forensics and litigation',
    time: '3 to 6 months prep',
    cost: '$300 to $1,000',
    faqs: [
      { q: 'Is the CFF only for CPAs?', a: 'Yes. Unlike some forensics credentials, the CFF requires an active CPA license, which is part of why it carries weight in court.' },
      { q: 'What does the exam cover?', a: 'Fraud prevention and detection, investigation methods, damages and lost-profit analysis, and the mechanics of expert testimony.' },
      { q: 'How does it compare to the CFE?', a: 'The CFE (from the ACFE) is open to a broader audience and covers fraud examination, while the CFF is a CPA-only AICPA specialty with a forensic-accounting emphasis.' },
      { q: 'Do I need a case study?', a: 'The CFF is centered on the proctored exam and experience; some candidates use a qualifying experience pathway instead of the full exam.' }
    ],
    summaryPoints: [
      'AICPA forensic credential, CPA-only',
      'Proctored exam plus forensic experience',
      'Covers fraud, damages and testimony',
      'Respected in litigation engagements'
    ],
    relatedSlugs: ['aicpa-abv', 'aicpa-pfs', 'cfe-exam'],
    sourceUrl: 'https://www.aicpa-cima.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'aicpa-pfs',
    body: 'American Institute of CPAs (AICPA)',
    tagline: 'The AICPA personal financial planning credential for CPAs.',
    description: 'The Personal Financial Specialist (PFS) is the AICPA’s credential for CPAs who provide personal financial planning, integrating retirement, estate, insurance, investment and tax planning. It requires an active CPA plus planning experience and a block of personal-financial-planning CPE, and it lets a CPA market a holistic advisory practice that leans on their tax fluency.',
    quickAnswer: {
      summary: 'The PFS is the AICPA personal financial planning credential for active CPAs, earned through planning experience, personal-financial-planning CPE and an exam. It integrates retirement, estate, insurance, investment and tax planning for advisory practices.',
      advantages: [
        'AICPA planning specialty, CPA-only',
        'Integrates tax and financial planning',
        'Recognized for holistic advisory work',
        'Builds on the CPA license',
        'Strong for wealth and retirement planning'
      ]
    },
    roadmap: ['Hold a CPA', 'Meet planning experience', 'Complete PFP CPE', 'Pass the PFS exam', 'Maintain with CPE'],
    prerequisites: 'An active CPA license plus personal financial planning experience and CPE; the PFS is restricted to CPAs.',
    examMeta: {
      questions: 'Proctored exam',
      time: 'Varies by format',
      pass: 'Pass the AICPA exam',
      fee: 'AICPA member exam and application fees',
      format: 'Proctored, computer-based',
      admin: 'AICPA testing partner'
    },
    topics: [
      { name: 'Retirement and estate planning' },
      { name: 'Insurance and risk management' },
      { name: 'Investment planning' },
      { name: 'Tax planning integration' }
    ],
    examEssentials: [
      ['Credential', 'AICPA planning specialty for CPAs'],
      ['Requirement', 'CPA + PFP CPE + exam'],
      ['Focus', 'Integrated financial planning'],
      ['Maintain', 'AICPA CPE and membership']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Exam', duration: 'per format' }, { stage: 'Apply', duration: 'on pass' }],
    costBreakdown: { items: [{ item: 'Exam and application', fee: 'Varies by AICPA membership' }], total: '$300 to $1,000', footnote: 'AICPA members receive lower fees; planning CPE is an added cost.' },
    difficulty: 'Moderate',
    audience: 'CPAs in financial planning',
    time: '3 to 6 months prep',
    cost: '$300 to $1,000',
    faqs: [
      { q: 'Do I need a CPA for the PFS?', a: 'Yes. The PFS is an AICPA credential restricted to active CPAs, which distinguishes it from general financial planner designations.' },
      { q: 'What experience is required?', a: 'You need personal financial planning experience plus a set number of personal-financial-planning CPE hours, then the PFS exam.' },
      { q: 'How does it compare to the CFP?', a: 'The CFP is the broad financial-planning mark open to many, while the PFS is CPA-only and emphasizes the tax integration CPAs already know.' },
      { q: 'Is there an exam?', a: 'Yes, the PFS includes a proctored exam on top of the experience and CPE requirements.' }
    ],
    summaryPoints: [
      'AICPA personal financial planning credential, CPA-only',
      'Exam plus PFP experience and CPE',
      'Integrates tax, retirement and estate planning',
      'Distinct from the broader CFP mark'
    ],
    relatedSlugs: ['aicpa-abv', 'aicpa-cff', 'cma-part-2'],
    sourceUrl: 'https://www.aicpa-cima.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cgap-exam',
    body: 'Institute of Internal Auditors (IIA)',
    tagline: 'The retired IIA government-auditing certification, last offered in 2021.',
    description: 'The Certified Government Auditing Professional (CGAP) was a specialized IIA certification for public-sector internal auditors covering government audit standards, performance auditing and accountability. The IIA retired the CGAP and the last exams were offered through June 30, 2021; it is no longer bookable. Practitioners who once pursued the CGAP now focus on the Certified Internal Auditor (CIA) and relevant government-audit training instead.',
    quickAnswer: {
      summary: 'The CGAP was an IIA specialty certification for government internal auditors that has been retired; the final exams were available through June 30, 2021. It is no longer offered, and candidates should pursue the CIA and government-audit education instead.',
      advantages: [
        'Once signaled public-sector audit expertise',
        'Covered government standards and performance auditing',
        'Recognized historical government-audit credential',
        'Feeds naturally into the CIA path today',
        'Existing holders maintain via IIA CPE'
      ]
    },
    roadmap: ['Note: retired', 'Pursue the CIA instead', 'Add government-audit training', 'Maintain any existing CGAP with CPE'],
    prerequisites: 'No longer open to new candidates; the CGAP is retired as of June 30, 2021.',
    examMeta: {
      questions: 'Retired; formerly 125 multiple-choice',
      time: 'Retired; formerly about 3 hours',
      pass: 'Retired; formerly scaled pass mark',
      fee: 'Discontinued',
      format: 'Multiple-choice, computer-based (historical)',
      admin: 'IIA / Pearson VUE (historical)'
    },
    topics: [
      { name: 'Government audit standards' },
      { name: 'Performance auditing' },
      { name: 'Accountability and governance' }
    ],
    examEssentials: [
      ['Status', 'Retired June 30, 2021'],
      ['Bookable', 'No'],
      ['Successor', 'Certified Internal Auditor (CIA)'],
      ['Holders', 'Maintain with IIA CPE']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through June 30, 2021' }],
    costBreakdown: { items: [{ item: 'Former exam fee', fee: 'Discontinued' }], total: 'Discontinued', footnote: 'No longer bookable; shown for historical reference only.' },
    difficulty: 'Hard',
    audience: 'Former government internal auditors',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I still take the CGAP?', a: 'No. The IIA retired the CGAP and the last exams were offered through June 30, 2021; the credential cannot be registered for today.' },
      { q: 'What should I pursue instead?', a: 'Government internal auditors now pursue the CIA, the IIA’s flagship certification, plus government-audit and performance-audit training.' },
      { q: 'Are existing CGAP holders affected?', a: 'Holders maintain the designation through IIA continuing education and renewal; the retirement mainly affects new candidates.' },
      { q: 'Why was it retired?', a: 'The IIA consolidated its government-audit recognition into the CIA pathway and specialized training rather than a standalone credential.' }
    ],
    summaryPoints: [
      'Retired IIA government-audit certification',
      'Last exams offered through June 30, 2021',
      'No longer bookable; pursue the CIA instead',
      'Existing holders keep it current with CPE'
    ],
    relatedSlugs: ['cia-part-1', 'cia-part-2', 'cia-part-3'],
    sourceUrl: 'https://www.theiia.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cia-part-1',
    body: 'Institute of Internal Auditors (IIA)',
    tagline: 'CIA Part 1: the essentials of internal auditing every candidate must pass first.',
    description: 'CIA Part 1, Essentials of Internal Auditing, is the first of three Certified Internal Auditor exams and covers the mandate and function of internal audit, independence and objectivity, proficiency and due care, governance, risk management and control, and fraud risks. It is the foundational paper that every CIA candidate sits and carries the heaviest weight in the overall certification. Passing Part 1 demonstrates command of the principles that frame all internal audit work.',
    quickAnswer: {
      summary: 'CIA Part 1 is a 125-question, 2.5-hour multiple-choice exam on the essentials of internal auditing, scored on the IIA scale with a published pass mark. It is the first of three CIA parts and costs a member/non-member exam fee on top of the IIA application fee.',
      advantages: [
        'Foundational CIA paper every candidate takes',
        'Covers mandate, governance and risk basics',
        'Computer-based, available year-round',
        'Counts first toward the global CIA',
        'Strong base for Parts 2 and 3'
      ]
    },
    roadmap: ['Apply to the IIA', 'Pay application and part fee', 'Schedule Part 1', 'Pass the 125-Q exam', 'Continue to Parts 2 and 3'],
    prerequisites: 'An IIA application approved with education and character references; you may sit Part 1 once your candidacy window opens.',
    examMeta: {
      questions: '125 multiple-choice',
      time: '2.5 hours',
      pass: 'IIA published pass mark (scaled)',
      fee: 'Member and non-member exam fee (plus application fee)',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE test centers and online'
    },
    topics: [
      { name: 'Foundations of Internal Auditing (mandate and function)' },
      { name: 'Independence and Objectivity' },
      { name: 'Proficiency and Due Professional Care' },
      { name: 'Governance, Risk Management and Control' },
      { name: 'Fraud Risks' }
    ],
    examEssentials: [
      ['Questions', '125 multiple-choice'],
      ['Time', '2.5 hours'],
      ['Position', 'First of three CIA parts'],
      ['Window', 'All parts within 3 years of approval']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 10 weeks' }, { stage: 'Test', duration: '2.5 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'IIA application fee', fee: '$120 (member) / $240 (non)' }, { item: 'Part 1 exam fee', fee: '$310 (member) / $445 (non)' }], total: '$430 to $685 for Part 1', footnote: 'Member rates apply to IIA members; non-member rates are higher.' },
    difficulty: 'Moderate',
    audience: 'Aspiring internal auditors',
    time: '6 to 10 weeks prep',
    cost: '$430 to $685 (Part 1)',
    faqs: [
      { q: 'How hard is CIA Part 1?', a: 'Most candidates rate Part 1 moderate. It is conceptual and principle-based, so memorizing the IPPF and understanding governance and risk matter more than calculation.' },
      { q: 'How long should I study?', a: 'Plan six to ten weeks with the IIA study materials, focusing on the internal audit mandate and the fraud-risk area.' },
      { q: 'Can I take Part 1 alone?', a: 'Yes. Parts may be taken in any order, but most candidates start with Part 1 because it is the foundation for Parts 2 and 3.' },
      { q: 'What is the pass mark?', a: 'The IIA uses a scaled pass mark on its exams; you receive a result at the center and a diagnostic by topic.' },
      { q: 'How long are scores valid?', a: 'You must complete all three CIA parts within three years of your application approval, or the candidacy lapses.' }
    ],
    summaryPoints: [
      'First CIA part on essentials of internal auditing',
      '125 questions, 2.5 hours, computer-based',
      'Covers mandate, governance and fraud risk',
      'Foundation for the global CIA'
    ],
    relatedSlugs: ['cia-part-2', 'cia-part-3', 'cgap-exam'],
    sourceUrl: 'https://www.theiia.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cia-part-2',
    body: 'Institute of Internal Auditors (IIA)',
    tagline: 'CIA Part 2: the practice of internal auditing, from planning to follow-up.',
    description: 'CIA Part 2, Practice of Internal Auditing, covers how engagements are actually performed: planning, risk-based scoping, fieldwork and supervision, working papers, communicating results and follow-up. It is the applied paper of the Certified Internal Auditor program and builds directly on Part 1’s principles. Candidates who have done real internal audit work often find Part 2 the most intuitive of the three.',
    quickAnswer: {
      summary: 'CIA Part 2 is a 100-question, 2-hour multiple-choice exam on the practice of internal auditing, scored on the IIA scale with a published pass mark. It is the second of three CIA parts and sits alongside the member/non-member exam and application fees.',
      advantages: [
        'Applied CIA paper on engagement practice',
        'Covers planning, fieldwork and reporting',
        'Computer-based, available year-round',
        'Mirrors day-to-day internal audit work',
        'Builds on Part 1 principles'
      ]
    },
    roadmap: ['Apply to the IIA', 'Pay application and part fee', 'Schedule Part 2', 'Pass the 100-Q exam', 'Continue to Part 3'],
    prerequisites: 'An IIA application approved with education and character references; taken within the three-year candidacy window.',
    examMeta: {
      questions: '100 multiple-choice',
      time: '2 hours',
      pass: 'IIA published pass mark (scaled)',
      fee: 'Member and non-member exam fee (plus application fee)',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE test centers and online'
    },
    topics: [
      { name: 'Managing the Internal Audit Activity' },
      { name: 'Planning the Engagement' },
      { name: 'Performing the Engagement (fieldwork and supervision)' },
      { name: 'Communicating Engagement Results and Monitoring Progress' }
    ],
    examEssentials: [
      ['Questions', '100 multiple-choice'],
      ['Time', '2 hours'],
      ['Position', 'Second of three CIA parts'],
      ['Window', 'All parts within 3 years of approval']
    ],
    timeline: [{ stage: 'Study', duration: '5 to 8 weeks' }, { stage: 'Test', duration: '2 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'IIA application fee', fee: '$120 (member) / $240 (non)' }, { item: 'Part 2 exam fee', fee: '$280 (member) / $415 (non)' }], total: '$400 to $655 for Part 2', footnote: 'Member rates apply to IIA members; non-member rates are higher.' },
    difficulty: 'Moderate',
    audience: 'Aspiring and current internal auditors',
    time: '5 to 8 weeks prep',
    cost: '$400 to $655 (Part 2)',
    faqs: [
      { q: 'How hard is CIA Part 2?', a: 'Candidates with audit experience usually find Part 2 the most approachable because it tracks real engagement workflow; newcomers need to learn the IIA engagement standards.' },
      { q: 'How long should I study?', a: 'Five to eight weeks is typical, emphasizing planning, supervision and reporting communications.' },
      { q: 'Should I take it after Part 1?', a: 'Most do, but the order is your choice; Part 2 complements Part 1’s concepts with the practice layer.' },
      { q: 'What is the pass mark?', a: 'The IIA uses a scaled pass mark; results and a topic diagnostic appear at the center.' },
      { q: 'How long are scores valid?', a: 'All three parts must be passed within three years of application approval.' }
    ],
    summaryPoints: [
      'Second CIA part on engagement practice',
      '100 questions, 2 hours, computer-based',
      'Covers planning, fieldwork and reporting',
      'Most intuitive for active auditors'
    ],
    relatedSlugs: ['cia-part-1', 'cia-part-3', 'cgap-exam'],
    sourceUrl: 'https://www.theiia.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cia-part-3',
    body: 'Institute of Internal Auditors (IIA)',
    tagline: 'CIA Part 3: the business knowledge that rounds out the internal auditor.',
    description: 'CIA Part 3, Business Knowledge for Internal Auditing, covers the commercial and technical acumen internal auditors need: business acumen, organizational structure, information security, IT controls, financial management and data analytics. It is the third CIA paper and reaches beyond audit technique into the wider business context in which auditors operate. Candidates from non-accounting backgrounds often spend the most time here.',
    quickAnswer: {
      summary: 'CIA Part 3 is a 100-question, 2-hour multiple-choice exam on business knowledge for internal auditing, scored on the IIA scale with a published pass mark. It is the third of three CIA parts and completes the credential alongside the exam and application fees.',
      advantages: [
        'Completes the three-part CIA',
        'Covers IT, security and data analytics',
        'Computer-based, available year-round',
        'Broadens auditors beyond technique',
        'Pairs with Parts 1 and 2 for certification'
      ]
    },
    roadmap: ['Apply to the IIA', 'Pay application and part fee', 'Schedule Part 3', 'Pass the 100-Q exam', 'Certify once all three pass'],
    prerequisites: 'An IIA application approved with education and character references; taken within the three-year candidacy window.',
    examMeta: {
      questions: '100 multiple-choice',
      time: '2 hours',
      pass: 'IIA published pass mark (scaled)',
      fee: 'Member and non-member exam fee (plus application fee)',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE test centers and online'
    },
    topics: [
      { name: 'Business Acumen and Organizational Structure' },
      { name: 'Information Security and IT Controls' },
      { name: 'Financial Management' },
      { name: 'Data Analytics' }
    ],
    examEssentials: [
      ['Questions', '100 multiple-choice'],
      ['Time', '2 hours'],
      ['Position', 'Third of three CIA parts'],
      ['Window', 'All parts within 3 years of approval']
    ],
    timeline: [{ stage: 'Study', duration: '5 to 8 weeks' }, { stage: 'Test', duration: '2 hours' }, { stage: 'Result', duration: 'at center' }],
    costBreakdown: { items: [{ item: 'IIA application fee', fee: '$120 (member) / $240 (non)' }, { item: 'Part 3 exam fee', fee: '$280 (member) / $415 (non)' }], total: '$400 to $655 for Part 3', footnote: 'Member rates apply to IIA members; non-member rates are higher.' },
    difficulty: 'Moderate',
    audience: 'Aspiring internal auditors',
    time: '5 to 8 weeks prep',
    cost: '$400 to $655 (Part 3)',
    faqs: [
      { q: 'How hard is CIA Part 3?', a: 'It is broad rather than deep; candidates without a finance or IT background spend extra time on financial management and IT controls.' },
      { q: 'How long should I study?', a: 'Five to eight weeks, with emphasis on business acumen, security and analytics if those are newer to you.' },
      { q: 'Is Part 3 required?', a: 'Yes. All three parts are required for the CIA; Part 3 supplies the business context that frames audit judgments.' },
      { q: 'What is the pass mark?', a: 'The IIA uses a scaled pass mark; results and a topic diagnostic appear at the center.' },
      { q: 'How long are scores valid?', a: 'All three parts must be passed within three years of application approval, or the candidacy lapses.' }
    ],
    summaryPoints: [
      'Third CIA part on business knowledge',
      '100 questions, 2 hours, computer-based',
      'Covers IT, security, finance and analytics',
      'Completes the global CIA'
    ],
    relatedSlugs: ['cia-part-1', 'cia-part-2', 'cgap-exam'],
    sourceUrl: 'https://www.theiia.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'acat-aba-credential',
    body: 'Accreditation Council for Accountancy and Taxation (ACAT)',
    tagline: 'The ACAT accreditation proving full small-business accounting competence.',
    description: 'The Accredited Business Accountant/Advisor (ABA) is ACAT’s senior accreditation for practitioners who serve small and mid-sized businesses, covering financial accounting, reporting, taxation and business law across a two-part exam. It signals to clients and employers that the holder can handle the full accounting cycle and year-end work for a small business. The ABA is a recognized alternative to the CPA for practitioners who do not need audit and attestation rights.',
    quickAnswer: {
      summary: 'The ABA is ACAT’s two-part accreditation for small-business accounting, testing financial accounting, reporting, taxation and business law, with a scaled pass mark of 70. It suits practitioners who want recognized accounting competence without the CPA license path.',
      advantages: [
        'ACAT’s senior small-business accounting accreditation',
        'Covers the full accounting cycle and tax',
        'No CPA license required',
        'Recognized by the IRS for AFSP alignment',
        'Signals year-end and reporting competence'
      ]
    },
    roadmap: ['Confirm eligibility (~3 yrs experience)', 'Apply to ACAT', 'Schedule the two-part exam', 'Pass at scaled 70', 'Maintain with CPE'],
    prerequisites: 'About three years of accounting practice (or equivalent education and experience) is generally expected before sitting the ABA.',
    examMeta: {
      questions: 'Two parts, 100 questions each',
      time: '3 hours per part',
      pass: 'Scaled 70',
      fee: 'About $400 for the two parts (member/non-member rates vary)',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE or partner centers'
    },
    topics: [
      { name: 'Financial Accounting and Reporting' },
      { name: 'Taxation' },
      { name: 'Business Law' },
      { name: 'Accounting for Small Business' }
    ],
    examEssentials: [
      ['Parts', 'Two parts, 100 Q each'],
      ['Pass mark', 'Scaled 70'],
      ['Experience', '~3 years accounting'],
      ['Maintain', '120 CPE / 3 yrs + active fee']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '3 hrs per part' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'ABA exam fee', fee: '$400 (about)' }], total: '$400 to $650', footnote: 'ACAT member and non-member rates differ; an active-status fee applies annually.' },
    difficulty: 'Moderate',
    audience: 'Small-business accounting practitioners',
    time: '3 to 6 months prep',
    cost: '$400 to $650',
    faqs: [
      { q: 'Is the ABA the same as a CPA?', a: 'No. The ABA accredits small-business accounting competence without the 150-hour rule or audit rights; it is a strong credential for practitioners who do not need the full CPA license.' },
      { q: 'How is it structured?', a: 'Two 100-question parts of three hours each, with a scaled pass mark of 70.' },
      { q: 'What experience is needed?', a: 'ACAT generally expects about three years of accounting practice, or a mix of education and experience, before you sit.' },
      { q: 'How do I keep it?', a: 'Hold the ABA with about 120 hours of CPE over three years and an annual active-status fee.' }
    ],
    summaryPoints: [
      'ACAT senior small-business accounting accreditation',
      'Two 100-question parts, pass at scaled 70',
      'Covers accounting, tax and business law',
      'Maintained with CPE and an active fee'
    ],
    relatedSlugs: ['acat-ata', 'acat-atp', 'aipb-certified-bookkeeper'],
    sourceUrl: 'https://www.acatcredentials.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'acat-ata',
    body: 'Accreditation Council for Accountancy and Taxation (ACAT)',
    tagline: 'The ACAT credential for sophisticated tax planning.',
    description: 'The Accredited Tax Advisor (ATA) is ACAT’s advanced tax credential for practitioners handling complex individual and entity tax strategy, covering retirement, estate, business and multi-year planning. It sits above the entry-level ATP and targets advisors who give proactive, high-level tax guidance rather than simple return preparation. The ATA is recognized for its depth in planning and its alignment with IRS representation expectations.',
    quickAnswer: {
      summary: 'The ATA is ACAT’s advanced tax credential covering retirement, estate, business and multi-year tax planning, with a scaled pass mark of 70. It is the senior tax accreditation for advisors who move beyond routine return preparation.',
      advantages: [
        'ACAT’s advanced tax-planning credential',
        'Covers retirement, estate and entity strategy',
        'Above the entry-level ATP',
        'No CPA required to earn it',
        'Recognized for tax advisory work'
      ]
    },
    roadmap: ['Confirm tax experience', 'Apply to ACAT', 'Schedule the ATA exam', 'Pass at scaled 70', 'Maintain with CPE'],
    prerequisites: 'Tax preparation and planning experience; the ATA is the advanced tier above the Accredited Tax Preparer.',
    examMeta: {
      questions: '100 questions',
      time: '3 hours',
      pass: 'Scaled 70',
      fee: 'About $250 exam plus annual active fee',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE or partner centers'
    },
    topics: [
      { name: 'Individual and entity tax planning' },
      { name: 'Retirement and estate planning' },
      { name: 'Business tax strategy' },
      { name: 'Multi-year planning' }
    ],
    examEssentials: [
      ['Level', 'Advanced tax (above ATP)'],
      ['Pass mark', 'Scaled 70'],
      ['Type', 'Single exam'],
      ['Maintain', '40 CPE / year + active fee']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '3 hours' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'ATA exam fee', fee: '$250 (about)' }, { item: 'Annual active fee', fee: '$150 (about)' }], total: '$400 to $600', footnote: 'Rates vary by ACAT membership status.' },
    difficulty: 'Hard',
    audience: 'Tax advisors and planners',
    time: '3 to 6 months prep',
    cost: '$400 to $600',
    faqs: [
      { q: 'How is the ATA different from the ATP?', a: 'The ATP is the entry-level preparer accreditation; the ATA is the advanced credential for proactive, multi-year tax planning and strategy.' },
      { q: 'What does it cover?', a: 'Retirement, estate, business and entity tax planning, plus the multi-year thinking that distinguishes advisory work.' },
      { q: 'Do I need a CPA?', a: 'No. The ATA is open to experienced tax practitioners without a CPA, which is part of its appeal.' },
      { q: 'How do I keep it current?', a: 'About 40 hours of CPE per year plus an annual ACAT active-status fee.' }
    ],
    summaryPoints: [
      'ACAT advanced tax-planning credential',
      'Single 100-question exam, pass at scaled 70',
      'Covers retirement, estate and entity strategy',
      'Maintained with yearly CPE and a fee'
    ],
    relatedSlugs: ['acat-atp', 'acat-aba-credential', 'enrolled-agent'],
    sourceUrl: 'https://www.acatcredentials.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'acat-atp',
    body: 'Accreditation Council for Accountancy and Taxation (ACAT)',
    tagline: 'The ACAT entry-level tax accreditation for individual return preparers.',
    description: 'The Accredited Tax Preparer (ATP) is ACAT’s entry-level tax credential covering individual return preparation, deductions, credits and preparer ethics. It is designed for practitioners who prepare 1040s and want recognized competence without the depth of the ATA. The ATP is notable because the IRS recognizes it as satisfying the AFSP expectations, easing the annual filing-season program for holders.',
    quickAnswer: {
      summary: 'The ATP is ACAT’s entry-level tax accreditation for individual return preparers, covering 1040 preparation, deductions, credits and ethics, with a scaled pass mark of 70. The IRS treats it as meeting AFSP expectations for unenrolled preparers.',
      advantages: [
        'ACAT’s entry tax credential',
        'Covers individual returns, deductions, credits',
        'No experience barrier to sit',
        'IRS-recognized for AFSP alignment',
        'A stepping stone to the ATA'
      ]
    },
    roadmap: ['Confirm PTIN', 'Apply to ACAT', 'Schedule the ATP exam', 'Pass at scaled 70', 'Maintain with CPE'],
    prerequisites: 'An active PTIN and tax-preparation work; the ATP is the open entry point to ACAT’s tax credentials.',
    examMeta: {
      questions: '100 questions',
      time: '3 hours',
      pass: 'Scaled 70',
      fee: 'About $250 exam plus annual active fee',
      format: 'Multiple-choice, computer-based',
      admin: 'Pearson VUE or partner centers'
    },
    topics: [
      { name: 'Individual return preparation' },
      { name: 'Deductions and credits' },
      { name: 'Preparer ethics and procedures' }
    ],
    examEssentials: [
      ['Level', 'Entry tax (below ATA)'],
      ['Pass mark', 'Scaled 70'],
      ['IRS', 'Counts toward AFSP expectations'],
      ['Maintain', 'CPE + active fee']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '3 hours' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'ATP exam fee', fee: '$250 (about)' }, { item: 'Annual active fee', fee: '$150 (about)' }], total: '$400 to $600', footnote: 'Rates vary by ACAT membership status.' },
    difficulty: 'Easy',
    audience: 'Individual tax preparers',
    time: '4 to 8 weeks prep',
    cost: '$400 to $600',
    faqs: [
      { q: 'Who is the ATP for?', a: 'Preparers who file individual returns and want a recognized credential without the advanced planning scope of the ATA.' },
      { q: 'Does it satisfy the AFSP?', a: 'Yes. The IRS recognizes the ATP as meeting the Annual Filing Season Program expectations for unenrolled preparers.' },
      { q: 'What is the pass mark?', a: 'A scaled score of 70 on the 100-question exam.' },
      { q: 'How does it relate to the EA?', a: 'The ATP is an accreditation for individual return prep; the Enrolled Agent is the IRS credential with full representation rights after passing the three-part SEE.' }
    ],
    summaryPoints: [
      'ACAT entry-level individual tax accreditation',
      'Single exam, pass at scaled 70',
      'IRS-recognized toward the AFSP',
      'Stepping stone to the ATA'
    ],
    relatedSlugs: ['acat-ata', 'acat-aba-credential', 'irs-afsp-record-of-completion'],
    sourceUrl: 'https://www.acatcredentials.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'asa-accredited-member-valuation',
    body: 'American Society of Appraisers (ASA)',
    tagline: 'The ASA entry business-valuation designation for emerging valuators.',
    description: 'The Accredited Member (AM) in business valuation is the American Society of Appraisers’ first-tier BV designation, requiring the principles of valuation coursework, examinations and about two years of valuation experience. It is the natural entry point for professionals moving into business valuation and signals that the holder meets ASA’s standards at the member level. The AM precedes the senior ASA designation, which demands more experience and a report review.',
    quickAnswer: {
      summary: 'The ASA Accredited Member (AM) in business valuation is the entry BV designation requiring principles coursework, exams and about two years of experience. It is the first tier of ASA recognition for valuators and a step toward the senior ASA.',
      advantages: [
        'ASA’s entry business-valuation designation',
        'Built on the principles of valuation coursework',
        'About two years of experience to earn',
        'Recognized for valuation engagements',
        'Pathway to the senior ASA'
      ]
    },
    roadmap: ['Take BV 201-204 principles', 'Pass the AM exams', 'Document ~2 yrs experience', 'Apply to ASA', 'Reaccredit every 5 years'],
    prerequisites: 'Completion of the ASA principles of valuation series (or an approved challenge route) plus about two years of full-time valuation experience.',
    examMeta: {
      questions: 'Principles exams (multiple-choice plus case components)',
      time: 'Per exam',
      pass: 'ASA published pass standard',
      fee: 'ASA member exam and application fees',
      format: 'Proctored, computer-based',
      admin: 'American Society of Appraisers'
    },
    topics: [
      { name: 'Valuation principles and theory' },
      { name: 'Approaches and methods' },
      { name: 'Report fundamentals' }
    ],
    examEssentials: [
      ['Level', 'Entry ASA BV designation'],
      ['Experience', '~2 years'],
      ['Coursework', 'BV 201-204 principles'],
      ['Reaccredit', 'Every 5 years']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 12 months' }, { stage: 'Exams', duration: 'per exam' }, { stage: 'Reaccredit', duration: 'every 5 years' }],
    costBreakdown: { items: [{ item: 'Coursework and exam', fee: '$1,000 to $3,000' }], total: '$1,000 to $3,500', footnote: 'Costs reflect ASA education and exam fees; members receive discounts.' },
    difficulty: 'Hard',
    audience: 'Emerging business valuators',
    time: '6 to 12 months with coursework',
    cost: '$1,000 to $3,500',
    faqs: [
      { q: 'What is the AM?', a: 'The Accredited Member is ASA’s entry business-valuation designation, requiring principles coursework, exams and about two years of experience.' },
      { q: 'How does it differ from the ASA?', a: 'The senior ASA requires about five years of experience and a reviewed valuation report; the AM is the earlier tier.' },
      { q: 'Do I need the principles courses?', a: 'Most candidates complete BV 201 through 204; an approved challenge route can substitute for experienced valuators.' },
      { q: 'How do I keep it?', a: 'Reaccredit every five years with continuing education and an ethics attestation.' }
    ],
    summaryPoints: [
      'ASA entry business-valuation designation',
      'Principles coursework plus exams and ~2 yrs experience',
      'First tier toward the senior ASA',
      'Reaccredited every five years'
    ],
    relatedSlugs: ['asa-business-valuation', 'aicpa-abv', 'nacva-cva'],
    sourceUrl: 'https://www.appraisers.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'asa-business-valuation',
    body: 'American Society of Appraisers (ASA)',
    tagline: 'The senior ASA business-valuation designation for experienced valuators.',
    description: 'The Accredited Senior Appraiser (ASA) in business valuation is the American Society of Appraisers’ senior BV designation, requiring the valuation examinations, a submitted and reviewed valuation report, and about five years of full-time practice. It is the mark of an experienced valuator whose work meets ASA’s highest standards and is frequently relied on for expert testimony, transactions and litigation. The ASA sits above the AM and signals depth that clients and courts trust.',
    quickAnswer: {
      summary: 'The ASA (BV) is the senior business-valuation designation from the American Society of Appraisers, requiring exams, a reviewed valuation report and about five years of practice. It is the top-tier ASA mark for experienced valuators used in testimony and transactions.',
      advantages: [
        'ASA’s senior business-valuation designation',
        'Requires a reviewed valuation report',
        'About five years of full-time practice',
        'Trusted for expert testimony and M&A',
        'Builds on the AM tier'
      ]
    },
    roadmap: ['Hold the AM or equivalent', 'Complete BV exams', 'Submit and pass a report review', 'Document ~5 yrs experience', 'Reaccredit every 5 years'],
    prerequisites: 'About five years of full-time valuation experience plus the ASA examinations and a successful report review; the AM or equivalent generally precedes it.',
    examMeta: {
      questions: 'Exams plus a report-review demonstration',
      time: 'Per exam and review',
      pass: 'ASA published pass standard and report rubric',
      fee: 'ASA member exam and application fees',
      format: 'Proctored exams and submitted report',
      admin: 'American Society of Appraisers'
    },
    topics: [
      { name: 'Advanced valuation theory' },
      { name: 'Report writing and review' },
      { name: 'Specialized engagement practice' }
    ],
    examEssentials: [
      ['Level', 'Senior ASA BV designation'],
      ['Experience', '~5 years'],
      ['Report', 'Reviewed valuation report required'],
      ['Reaccredit', 'Every 5 years']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 years' }, { stage: 'Report review', duration: 'per review' }, { stage: 'Reaccredit', duration: 'every 5 years' }],
    costBreakdown: { items: [{ item: 'Coursework, exams and review', fee: '$2,000 to $5,000' }], total: '$2,000 to $6,000', footnote: 'Reflects ASA education, exam and report-review fees; members receive discounts.' },
    difficulty: 'Hard',
    audience: 'Experienced business valuators',
    time: '1 to 2 years with report review',
    cost: '$2,000 to $6,000',
    faqs: [
      { q: 'What makes the ASA senior?', a: 'Beyond the exams, you must submit and pass a valuation report review and document about five years of full-time practice, which is why it signals senior-level competence.' },
      { q: 'How does it differ from the AM?', a: 'The AM is the entry tier with about two years of experience; the ASA adds the report review and the deeper experience requirement.' },
      { q: 'Is it useful for court work?', a: 'Yes. The senior ASA is widely relied on for expert testimony and transaction valuations because of its rigorous standards.' },
      { q: 'How do I keep it?', a: 'Reaccredit every five years with continuing education, active practice and an ethics attestation.' }
    ],
    summaryPoints: [
      'ASA senior business-valuation designation',
      'Exams plus a reviewed report and ~5 yrs experience',
      'Trusted for testimony and M&A',
      'Reaccredited every five years'
    ],
    relatedSlugs: ['asa-accredited-member-valuation', 'aicpa-abv', 'nacva-cva'],
    sourceUrl: 'https://www.appraisers.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cpp-payroll',
    body: 'PayrollOrg',
    tagline: 'The senior payroll certification for experienced payroll professionals.',
    description: 'The Certified Payroll Professional (CPP) is PayrollOrg’s advanced credential for payroll professionals with three of the last five years of experience, covering wage and hour law, taxation, benefits, payroll systems, accounting and management. It is the standard senior mark in US payroll and is valued by employers who need someone to own compliance end to end. The CPP is renewed every five years with recertification credits or by retesting.',
    quickAnswer: {
      summary: 'The CPP is PayrollOrg’s senior payroll certification: 190 questions in four hours on compliance, tax, systems, accounting and management, requiring three of the last five years of payroll experience. It is valid five years and renewed with 120 recertification credits or by retesting.',
      advantages: [
        'The leading US senior payroll credential',
        'Covers compliance, tax, systems and accounting',
        'Signals ownership of end-to-end payroll',
        'Renewed with RCH credits or retesting',
        'Recognized across employers and industries'
      ]
    },
    roadmap: ['Confirm 3-of-5-yr experience', 'Study the 7-area outline', 'Register with PayrollOrg', 'Pass the 190-Q exam', 'Recertify every 5 years'],
    prerequisites: 'Three of the last five years in payroll or a related degree; the CPP is the advanced tier above the FPC.',
    examMeta: {
      questions: '190 (165 scored + 25 pretest)',
      time: '4 hours',
      pass: 'PayrollOrg scaled pass mark',
      fee: 'About $419 (member) / $609 (non-member)',
      format: 'Multiple-choice, computer-based',
      admin: 'Computer-based testing centers'
    },
    topics: [
      { name: 'Core Payroll', weight: '24%' },
      { name: 'Compliance', weight: '16%' },
      { name: 'Calculations', weight: '20%' },
      { name: 'Payroll Systems', weight: '12%' },
      { name: 'Administration', weight: '10%' },
      { name: 'Audits', weight: '9%' },
      { name: 'Accounting', weight: '9%' }
    ],
    examEssentials: [
      ['Questions', '190 (165 scored + 25 pretest)'],
      ['Time', '4 hours'],
      ['Experience', '3 of last 5 years'],
      ['Validity', '5 years; 120 RCH or retest']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Recertify', duration: 'every 5 years' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$419 (member) / $609 (non)' }, { item: 'Study materials', fee: '$200 to $500' }], total: '$419 to $1,100', footnote: '2026 fee ranges; members pay less than non-members.' },
    difficulty: 'Hard',
    audience: 'Experienced payroll professionals',
    time: '3 to 6 months prep',
    cost: '$419 to $1,100',
    faqs: [
      { q: 'How hard is the CPP?', a: 'Most candidates find it hard because of the breadth across law, tax, systems and accounting. Three to six months of steady study with the official outline is typical.' },
      { q: 'What experience is required?', a: 'Three of the last five years in payroll, or a related degree that substitutes for part of the experience.' },
      { q: 'How is it different from the FPC?', a: 'The FPC is the entry credential with no experience barrier; the CPP is the senior mark requiring recent payroll experience.' },
      { q: 'How do I keep it?', a: 'Renew every five years with 120 recertification credits (RCH) through approved education, or by retaking the exam.' },
      { q: 'What is the pass mark?', a: 'PayrollOrg uses a scaled scoring model; you receive a pass/fail result and a content-area score report.' }
    ],
    summaryPoints: [
      'PayrollOrg senior payroll certification',
      '190 questions, 4 hours, scaled pass',
      'Needs 3 of 5 years payroll experience',
      'Renew every 5 years with 120 RCH or retest'
    ],
    relatedSlugs: ['fpc-payroll', 'cpa-exam-reg', 'aipb-certified-bookkeeper'],
    sourceUrl: 'https://www.payroll.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'fpc-payroll',
    body: 'PayrollOrg',
    tagline: 'The entry-level payroll credential with no experience requirement.',
    description: 'The Fundamental Payroll Certification (FPC) is PayrollOrg’s entry-level credential covering core payroll concepts, compliance, calculations and payroll systems. It has no experience requirement, making it the right starting point for new payroll staff, generalists who touch payroll, and students. The FPC is valid three years and renewed through a simpler process than the CPP, and it often precedes the senior CPP.',
    quickAnswer: {
      summary: 'The FPC is PayrollOrg’s entry payroll credential: 150 questions in three hours on core payroll, compliance, calculations and systems, with no experience requirement. It is valid three years and is the natural step before the CPP.',
      advantages: [
        'No experience barrier to sit',
        'Covers core payroll and compliance',
        'Right start for new payroll staff',
        'Valid three years, simpler renewal',
        'Pathway to the senior CPP'
      ]
    },
    roadmap: ['Study the FPC outline', 'Register with PayrollOrg', 'Pass the 150-Q exam', 'Hold for 3 years', 'Step up to the CPP'],
    prerequisites: 'None; the FPC is open to anyone, which is why it suits newcomers and students.',
    examMeta: {
      questions: '150 (125 scored + 25 pretest)',
      time: '3 hours',
      pass: 'PayrollOrg scaled pass mark',
      fee: 'Lower than the CPP; member and non-member rates',
      format: 'Multiple-choice, computer-based',
      admin: 'Computer-based testing centers'
    },
    topics: [
      { name: 'Core Payroll' },
      { name: 'Compliance' },
      { name: 'Calculations' },
      { name: 'Payroll Systems' }
    ],
    examEssentials: [
      ['Questions', '150 (125 scored + 25 pretest)'],
      ['Time', '3 hours'],
      ['Experience', 'None required'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '3 hours' }, { stage: 'Renew', duration: 'every 3 years' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$300 to $400 (approx)' }, { item: 'Study materials', fee: '$100 to $300' }], total: '$300 to $700', footnote: 'FPC fees are lower than the CPP; member rates apply.' },
    difficulty: 'Moderate',
    audience: 'New and aspiring payroll staff',
    time: '4 to 8 weeks prep',
    cost: '$300 to $700',
    faqs: [
      { q: 'Who should take the FPC?', a: 'New payroll clerks, HR generalists who process payroll, and students; there is no experience requirement.' },
      { q: 'How is it different from the CPP?', a: 'The FPC is entry-level and shorter, while the CPP requires three years of recent experience and covers more breadth at a senior level.' },
      { q: 'How long is it valid?', a: 'Three years, after which you renew through PayrollOrg’s simpler FPC process.' },
      { q: 'Does it help get the CPP?', a: 'Yes. Many candidates use the FPC to build fundamentals and confidence before attempting the senior CPP.' }
    ],
    summaryPoints: [
      'PayrollOrg entry payroll credential',
      '150 questions, 3 hours, no experience needed',
      'Valid three years',
      'Natural precursor to the CPP'
    ],
    relatedSlugs: ['cpp-payroll', 'cpa-exam-reg', 'aipb-certified-bookkeeper'],
    sourceUrl: 'https://www.payroll.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'nacva-cva',
    body: 'National Association of Certified Valuators and Analysts (NACVA)',
    tagline: 'NACVA’s business valuation credential pairing an exam with a real case.',
    description: 'The Certified Valuation Analyst (CVA) is NACVA’s flagship business valuation credential, earned by passing a proctored multiple-choice exam and submitting a case study or a sanitized valuation report that demonstrates real engagement work. It is open to CPAs and to business-degree holders with valuation experience, making it one of the most accessible valuation credentials while still demanding applied proof of competence. The CVA is widely used in litigation, transaction and advisory valuation.',
    quickAnswer: {
      summary: 'The CVA is NACVA’s business valuation credential requiring a proctored exam plus a case study or sanitized report, open to CPAs and qualified business-degree holders. It proves applied valuation competence for litigation, transactions and advisory work.',
      advantages: [
        'NACVA’s flagship valuation credential',
        'Pairs an exam with a real case',
        'Open to CPAs and business-degree holders',
        'Recognized in litigation and M&A',
        'Foundation for the MAFF forensics track'
      ]
    },
    roadmap: ['Confirm eligibility', 'Complete NACVA training', 'Submit the case/report', 'Pass the proctored exam', 'Maintain with CPE'],
    prerequisites: 'A CPA or a business degree with valuation experience; the CVA accepts qualified non-CPAs, unlike some CPA-only credentials.',
    examMeta: {
      questions: 'Proctored multiple-choice exam plus a case submission',
      time: 'Per exam',
      pass: 'Pass the exam and case review',
      fee: 'NACVA member exam and application fees',
      format: 'Proctored exam and submitted case',
      admin: 'National Association of Certified Valuators and Analysts'
    },
    topics: [
      { name: 'Valuation approaches and methods' },
      { name: 'Report and case demonstration' },
      { name: 'Engagement standards' }
    ],
    examEssentials: [
      ['Credential', 'NACVA business valuation'],
      ['Requirement', 'Exam + case/report'],
      ['Eligibility', 'CPA or business degree + experience'],
      ['Maintain', 'NACVA CPE and membership']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 12 months' }, { stage: 'Case', duration: 'per submission' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'Training and exam', fee: '$1,000 to $2,500' }], total: '$1,000 to $3,000', footnote: 'NACVA members receive a discount on training and exam fees.' },
    difficulty: 'Hard',
    audience: 'Valuators and CPAs',
    time: '6 to 12 months with case',
    cost: '$1,000 to $3,000',
    faqs: [
      { q: 'Do I need a CPA for the CVA?', a: 'No. A CPA is the common path, but NACVA also accepts a business degree with sufficient valuation experience.' },
      { q: 'What is the case requirement?', a: 'Beyond the exam you submit a case study or a sanitized valuation report showing you can perform a real engagement to standard.' },
      { q: 'How does it compare to the ABV?', a: 'Both certify business valuators; the CVA adds a required case submission and is open to non-CPAs, while the ABV is AICPA and CPA-centric.' },
      { q: 'Is there a forensics track?', a: 'Yes. The MAFF builds on the CVA core with a financial-forensics specialty track.' }
    ],
    summaryPoints: [
      'NACVA business-valuation credential',
      'Proctored exam plus a required case',
      'Open to CPAs and business-degree holders',
      'Foundation for the MAFF track'
    ],
    relatedSlugs: ['nacva-maff', 'aicpa-abv', 'asa-accredited-member-valuation'],
    sourceUrl: 'https://www.nacva.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'nacva-maff',
    body: 'National Association of Certified Valuators and Analysts (NACVA)',
    tagline: 'NACVA’s financial-forensics credential built on the CVA core.',
    description: 'The Master Analyst in Financial Forensics (MAFF) is NACVA’s financial-forensics credential that builds on the CVA core with a specialty track such as commercial damages, bankruptcy and insolvency, or another approved focus. It is aimed at valuators and CPAs who want to demonstrate forensic depth beyond valuation, combining the core exam with specialty coursework and assessment. The MAFF signals readiness for litigation-support and dispute-engagement work.',
    quickAnswer: {
      summary: 'The MAFF is NACVA’s financial-forensics credential requiring the CVA core plus a specialty track (for example commercial damages or bankruptcy), combining exams and specialty assessment. It builds forensic depth on top of business valuation.',
      advantages: [
        'NACVA financial-forensics specialty',
        'Builds on the CVA core credential',
        'Specialty tracks (damages, bankruptcy, etc.)',
        'Signals litigation-support readiness',
        'For valuators moving into forensics'
      ]
    },
    roadmap: ['Earn or hold the CVA core', 'Choose a specialty track', 'Complete track coursework', 'Pass the specialty assessment', 'Maintain with CPE'],
    prerequisites: 'The CVA core (or equivalent) generally precedes the MAFF; the credential adds a specialty track on top of valuation fundamentals.',
    examMeta: {
      questions: 'Core exam plus specialty assessment',
      time: 'Per exam and track',
      pass: 'Pass the core and specialty components',
      fee: 'NACVA member fees',
      format: 'Proctored exam and track assessment',
      admin: 'National Association of Certified Valuators and Analysts'
    },
    topics: [
      { name: 'Core financial-forensics fundamentals' },
      { name: 'Specialty track (e.g., commercial damages, bankruptcy)' }
    ],
    examEssentials: [
      ['Credential', 'NACVA financial forensics'],
      ['Base', 'CVA core required'],
      ['Track', 'Specialty chosen by candidate'],
      ['Maintain', 'NACVA CPE and membership']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 12 months' }, { stage: 'Track', duration: 'per track' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'Track training and exam', fee: '$1,000 to $2,500' }], total: '$1,000 to $2,500', footnote: 'In addition to CVA costs; members receive discounts.' },
    difficulty: 'Hard',
    audience: 'Valuators and CPAs in forensics',
    time: '6 to 12 months',
    cost: '$1,000 to $2,500',
    faqs: [
      { q: 'What is the MAFF?', a: 'The Master Analyst in Financial Forensics is NACVA’s forensic specialty that extends the CVA valuation core with a focused track in areas like damages or bankruptcy.' },
      { q: 'Do I need the CVA first?', a: 'The CVA core generally underpins the MAFF, so most candidates earn or hold the CVA before adding the forensic specialty track.' },
      { q: 'What specialty tracks exist?', a: 'Common tracks include commercial damages, bankruptcy and insolvency, and other NACVA-approved forensic focuses.' },
      { q: 'How does it compare to the CFF?', a: 'The CFF is the AICPA’s CPA-only forensic credential; the MAFF is NACVA-based and builds on the CVA valuation foundation.' }
    ],
    summaryPoints: [
      'NACVA financial-forensics credential',
      'CVA core plus a specialty track',
      'Signals litigation-support depth',
      'Maintained with NACVA CPE'
    ],
    relatedSlugs: ['nacva-cva', 'aicpa-cff', 'cfe-exam'],
    sourceUrl: 'https://www.nacva.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cma-part-1',
    body: 'Institute of Management Accountants (IMA)',
    tagline: 'CMA Part 1: financial planning, performance and analytics for management accountants.',
    description: 'CMA Part 1, Financial Planning, Performance and Analytics, is the first of two Certified Management Accountant exams and covers external financial reporting, planning and budgeting, performance management, cost management and internal controls. It is the section most focused on the numbers side of management accounting and is typically taken first. Passing both parts, plus the experience requirement, earns the CMA, the leading global management accounting credential.',
    quickAnswer: {
      summary: 'CMA Part 1 is a four-hour IMA exam of 100 multiple-choice questions plus two essays on financial planning, budgeting, performance, cost and controls, scored 0 to 500 with a 360 pass. It is the first of two CMA parts.',
      advantages: [
        'First CMA part on planning and performance',
        'Covers budgeting, cost and controls',
        'Computer-based, available globally',
        'Pairs with Part 2 for the CMA',
        'Strong for corporate accounting roles'
      ]
    },
    roadmap: ['Join IMA and enroll', 'Study the Part 1 topics', 'Schedule with Prometric', 'Pass at 360/500', 'Move to Part 2'],
    prerequisites: 'An IMA membership and CMA entrance; a bachelor degree or qualifying credential is needed to certify, though you may sit before finishing experience.',
    examMeta: {
      questions: '100 multiple-choice + 2 essays',
      time: '4 hours',
      pass: 'Scaled 360 / 500',
      fee: 'Exam fee per part (member rates; entrance fee separate)',
      format: 'Multiple-choice and essay',
      admin: 'Prometric test centers and online'
    },
    topics: [
      { name: 'External Financial Reporting', weight: '15%' },
      { name: 'Planning, Budgeting and Forecasting', weight: '20%' },
      { name: 'Performance Management', weight: '20%' },
      { name: 'Cost Management', weight: '15%' },
      { name: 'Internal Controls', weight: '15%' },
      { name: 'Technology and Analytics', weight: '15%' }
    ],
    examEssentials: [
      ['Questions', '100 MCQ + 2 essays'],
      ['Time', '4 hours'],
      ['Pass', 'Scaled 360 / 500'],
      ['Part', 'First of two CMA parts']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Result', duration: 'weeks' }],
    costBreakdown: { items: [{ item: 'IMA entrance fee', fee: '$300 (professional)' }, { item: 'Part 1 exam fee', fee: '$495 (professional member)' }], total: '$795+ for Part 1', footnote: 'Student and academic rates are lower; entrance fee is one-time.' },
    difficulty: 'Hard',
    audience: 'Aspiring management accountants',
    time: '3 to 6 months prep',
    cost: '$795+ per part (pro)',
    faqs: [
      { q: 'How hard is CMA Part 1?', a: 'Most candidates find Part 1 demanding because of the breadth from reporting to cost to controls, but the essay section rewards structured answers.' },
      { q: 'How long should I study?', a: 'Three to six months of steady study with the official IMA materials is typical for Part 1.' },
      { q: 'Can I take Part 2 first?', a: 'Yes. The order is your choice; many start with Part 1 because it covers the core planning and performance topics.' },
      { q: 'What is the pass mark?', a: 'A scaled 360 on the 0 to 500 scale; the essay portion is a meaningful part of the score.' },
      { q: 'Does passing Part 1 certify me?', a: 'No. You must pass both parts and meet the two-year experience rule, then submit proof to be certified.' }
    ],
    summaryPoints: [
      'First CMA part on planning and performance',
      '100 MCQ + 2 essays, pass at 360/500',
      'Covers budgeting, cost and controls',
      'Pairs with Part 2 for the CMA'
    ],
    relatedSlugs: ['cma-part-2', 'cpa-exam-far', 'cpa-exam'],
    sourceUrl: 'https://www.imanet.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cma-part-2',
    body: 'Institute of Management Accountants (IMA)',
    tagline: 'CMA Part 2: strategic financial management for the corporate accountant.',
    description: 'CMA Part 2, Strategic Financial Management, is the second Certified Management Accountant exam and covers financial statement analysis, corporate finance, decision analysis, risk management, investment decisions and professional ethics. It is the strategy and finance half of the CMA and is especially relevant to controllers, finance managers and analysts. Together with Part 1 and the experience requirement it completes the CMA credential.',
    quickAnswer: {
      summary: 'CMA Part 2 is a four-hour IMA exam of 100 multiple-choice questions plus two essays on financial analysis, corporate finance, decision analysis, risk and ethics, scored 0 to 500 with a 360 pass. It is the second of two CMA parts.',
      advantages: [
        'Second CMA part on finance and strategy',
        'Covers analysis, corporate finance, risk',
        'Computer-based, available globally',
        'Completes the CMA with Part 1',
        'Strong for finance-manager roles'
      ]
    },
    roadmap: ['Join IMA and enroll', 'Study the Part 2 topics', 'Schedule with Prometric', 'Pass at 360/500', 'Certify with experience'],
    prerequisites: 'An IMA membership and CMA entrance; a bachelor degree or qualifying credential is needed to certify, though you may sit before finishing experience.',
    examMeta: {
      questions: '100 multiple-choice + 2 essays',
      time: '4 hours',
      pass: 'Scaled 360 / 500',
      fee: 'Exam fee per part (member rates; entrance fee separate)',
      format: 'Multiple-choice and essay',
      admin: 'Prometric test centers and online'
    },
    topics: [
      { name: 'Financial Statement Analysis', weight: '20%' },
      { name: 'Corporate Finance', weight: '20%' },
      { name: 'Decision Analysis', weight: '25%' },
      { name: 'Risk Management', weight: '10%' },
      { name: 'Investment Decisions', weight: '15%' },
      { name: 'Professional Ethics', weight: '15%' }
    ],
    examEssentials: [
      ['Questions', '100 MCQ + 2 essays'],
      ['Time', '4 hours'],
      ['Pass', 'Scaled 360 / 500'],
      ['Part', 'Second of two CMA parts']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '4 hours' }, { stage: 'Result', duration: 'weeks' }],
    costBreakdown: { items: [{ item: 'IMA entrance fee', fee: '$300 (professional)' }, { item: 'Part 2 exam fee', fee: '$495 (professional member)' }], total: '$795+ for Part 2', footnote: 'Student and academic rates are lower; entrance fee is one-time.' },
    difficulty: 'Hard',
    audience: 'Aspiring finance managers and analysts',
    time: '3 to 6 months prep',
    cost: '$795+ per part (pro)',
    faqs: [
      { q: 'How hard is CMA Part 2?', a: 'Candidates often find Part 2 slightly more conceptual than Part 1, with corporate finance and decision analysis carrying the most weight.' },
      { q: 'How long should I study?', a: 'Three to six months is typical, with extra time on decision analysis and investment decisions.' },
      { q: 'Should I take it after Part 1?', a: 'Most do, but the order is flexible; Part 2 stands on its own finance and strategy content.' },
      { q: 'What is the pass mark?', a: 'A scaled 360 on the 0 to 500 scale, including the essay component.' },
      { q: 'What experience is needed to certify?', a: 'Two years of management accounting or finance experience, which you may complete after passing both exams.' }
    ],
    summaryPoints: [
      'Second CMA part on finance and strategy',
      '100 MCQ + 2 essays, pass at 360/500',
      'Covers analysis, corporate finance, risk, ethics',
      'Completes the CMA with Part 1'
    ],
    relatedSlugs: ['cma-part-1', 'aipb-certified-bookkeeper', 'aicpa-pfs'],
    sourceUrl: 'https://www.imanet.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'intuit-academy-tax',
    body: 'Intuit',
    tagline: 'The free Intuit training-and-assessment path into seasonal tax-prep roles.',
    description: 'The Intuit Academy Tax track is a free, self-paced training and assessment program covering individual federal tax preparation, used by Intuit as a hiring and screening route for remote seasonal tax preparer roles. It spans Level 1 and Level 2, building from basic filing concepts to more complete individual returns, and ends in an assessment rather than a proctored exam. It is an accessible on-ramp for newcomers to tax work who want practical, job-oriented skills.',
    quickAnswer: {
      summary: 'Intuit Academy Tax is a free online training-and-assessment program (Level 1 and Level 2) in individual tax preparation that Intuit uses to screen candidates for seasonal tax preparer roles. It is self-paced and ends in an assessment, not a proctored exam.',
      advantages: [
        'Completely free, official Intuit training',
        'Self-paced online, no classroom needed',
        'Used as a hiring route into tax roles',
        'Practical, job-oriented tax skills',
        'Open to newcomers with no experience'
      ]
    },
    roadmap: ['Create an Intuit account', 'Complete Level 1', 'Complete Level 2', 'Pass the assessment', 'Apply for seasonal roles'],
    prerequisites: 'None; the program is open to anyone interested in tax preparation, with no prior experience required.',
    examMeta: {
      questions: 'Online assessment (Levels 1 and 2)',
      time: 'Self-paced',
      pass: 'Pass the Academy assessment',
      fee: 'Free',
      format: 'Online lessons and assessment',
      admin: 'Intuit'
    },
    topics: [
      { name: 'Individual tax fundamentals (Level 1)' },
      { name: 'Form 1040 and common schedules' },
      { name: 'More complete individual returns (Level 2)' }
    ],
    examEssentials: [
      ['Cost', 'Free'],
      ['Format', 'Self-paced online training'],
      ['Outcome', 'Assessment + hiring screen'],
      ['Levels', '1 and 2']
    ],
    timeline: [{ stage: 'Study', duration: 'weeks to months' }, { stage: 'Assessment', duration: 'per level' }, { stage: 'Outcome', duration: 'hiring screen' }],
    costBreakdown: { items: [{ item: 'Program', fee: 'Free' }], total: '$0', footnote: 'No fee; Intuit provides the training and assessment at no cost.' },
    difficulty: 'Easy',
    audience: 'Newcomers to tax preparation',
    time: 'Weeks to a few months',
    cost: '$0',
    faqs: [
      { q: 'Is Intuit Academy Tax a real certification?', a: 'It is a free training-and-assessment track Intuit uses to screen candidates for seasonal tax preparer roles; it signals readiness but is not a state license.' },
      { q: 'Do I need experience?', a: 'No. The program is designed for newcomers and starts from the fundamentals of individual tax.' },
      { q: 'What is the difference between Level 1 and 2?', a: 'Level 1 covers basic filing concepts; Level 2 builds to more complete individual returns before the assessment.' },
      { q: 'Does it lead to a job?', a: 'Completing it can qualify you for Intuit’s seasonal remote tax-prep roles, depending on hiring needs and location.' }
    ],
    summaryPoints: [
      'Free Intuit tax training and assessment',
      'Levels 1 and 2 in individual tax',
      'Hiring route into seasonal roles',
      'No experience or fee required'
    ],
    relatedSlugs: ['quickbooks-certified-proadvisor', 'irs-afsp-record-of-completion', 'enrolled-agent'],
    sourceUrl: 'https://www.intuit.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'quickbooks-certified-proadvisor',
    body: 'Intuit',
    tagline: 'The free QuickBooks product certification for bookkeepers and firms.',
    description: 'The QuickBooks Online Certified ProAdvisor is Intuit’s product certification that tests setup, banking, reporting and client management in QuickBooks Online. It is free and self-paced, and it certifies practical product proficiency that helps bookkeepers win clients and appear in Intuit’s advisor directory. Unlike a license, it validates tool knowledge rather than accounting judgment, but it is widely expected of QuickBooks-centric practices.',
    quickAnswer: {
      summary: 'The QuickBooks Online Certified ProAdvisor is a free, self-paced Intuit product certification testing QuickBooks Online setup, banking, reporting and client management. It certifies product proficiency and lists you in Intuit’s advisor directory.',
      advantages: [
        'Free, official Intuit certification',
        'Self-paced online training and exam',
        'Boosts visibility in the advisor directory',
        'Expected by QuickBooks-centric clients',
        'Renews as new versions release'
      ]
    },
    roadmap: ['Create an Intuit account', 'Complete the training', 'Pass the ProAdvisor exam', 'List in the directory', 'Renew with new versions'],
    prerequisites: 'None; open to bookkeepers, accountants and anyone who works in QuickBooks Online.',
    examMeta: {
      questions: 'Online product exam',
      time: 'Self-paced',
      pass: 'Pass the ProAdvisor assessment',
      fee: 'Free',
      format: 'Online training and exam',
      admin: 'Intuit'
    },
    topics: [
      { name: 'Company setup and settings' },
      { name: 'Banking and transactions' },
      { name: 'Reports and insights' },
      { name: 'Client management' }
    ],
    examEssentials: [
      ['Cost', 'Free'],
      ['Format', 'Self-paced online exam'],
      ['Renewal', 'With new software versions'],
      ['Directory', 'Listed as a ProAdvisor']
    ],
    timeline: [{ stage: 'Study', duration: 'days to weeks' }, { stage: 'Exam', duration: 'self-paced' }, { stage: 'Renew', duration: 'with versions' }],
    costBreakdown: { items: [{ item: 'Certification', fee: 'Free' }], total: '$0', footnote: 'No fee; Intuit provides the training and exam.' },
    difficulty: 'Easy',
    audience: 'Bookkeepers and accounting firms',
    time: 'Days to a few weeks',
    cost: '$0',
    faqs: [
      { q: 'Is the ProAdvisor cert worth it?', a: 'For anyone doing QuickBooks work it is effectively expected, and the free price plus directory listing make it an easy credibility boost.' },
      { q: 'Do I need accounting experience?', a: 'No. It tests product features, though bookkeeping knowledge helps you apply them well.' },
      { q: 'How do I keep it current?', a: 'You renew as Intuit releases new versions, usually by completing updated training and the exam.' },
      { q: 'Does it make me a licensed bookkeeper?', a: 'No. It certifies QuickBooks product skill, not a license; pair it with the AIPB CB for formal bookkeeping recognition.' }
    ],
    summaryPoints: [
      'Free QuickBooks Online product certification',
      'Self-paced setup, banking, reporting exam',
      'Directory listing for client visibility',
      'Renews with new versions'
    ],
    relatedSlugs: ['intuit-academy-tax', 'aipb-certified-bookkeeper', 'acat-aba-credential'],
    sourceUrl: 'https://www.intuit.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'aipb-certified-bookkeeper',
    body: 'American Institute of Professional Bookkeepers (AIPB)',
    tagline: 'The four-part national bookkeeping certification for working bookkeepers.',
    description: 'The Certified Bookkeeper (CB) is the American Institute of Professional Bookkeepers’ national credential covering the adjustments and controls that separate a professional bookkeeper from a data-entry clerk. It requires about two years of experience and is earned through two closed-book Prometric exams (adjusting entries, error correction) plus two open-book workbooks (payroll, depreciation, inventory, internal controls), and agreement to the AIPB Code of Ethics. The CB is the recognized benchmark for full-charge bookkeepers.',
    quickAnswer: {
      summary: 'The AIPB Certified Bookkeeper is a four-part credential needing about two years of experience: two Prometric exams (adjusting entries, error correction) plus two workbooks (payroll, depreciation, inventory, controls). It certifies professional bookkeeping competence.',
      advantages: [
        'National benchmark for bookkeepers',
        'Covers adjustments, controls and payroll',
        'Experience-based, not degree-based',
        'Recognized by employers and clients',
        'Backed by the AIPB Code of Ethics'
      ]
    },
    roadmap: ['Meet ~2 yrs experience', 'Enroll with AIPB', 'Pass the two Prometric exams', 'Complete the two workbooks', 'Certify under the Code'],
    prerequisites: 'About two years (3,000 hours) of bookkeeping experience, or a mix of experience and education, before certification.',
    examMeta: {
      questions: '2 Prometric exams + 2 workbooks',
      time: 'Per exam and workbook',
      pass: 'Pass all four parts',
      fee: 'AIPB enrollment and exam/workbook fees',
      format: 'Closed-book exams and open-book workbooks',
      admin: 'Prometric (exams) and AIPB (workbooks)'
    },
    topics: [
      { name: 'Adjusting entries' },
      { name: 'Error correction' },
      { name: 'Payroll and depreciation' },
      { name: 'Inventory and internal controls' }
    ],
    examEssentials: [
      ['Parts', '2 exams + 2 workbooks'],
      ['Experience', '~2 years (3,000 hrs)'],
      ['Ethics', 'AIPB Code of Ethics required'],
      ['Maintain', 'Annual CPE + fee']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 12 months' }, { stage: 'Exams', duration: 'per part' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'Enrollment and exams', fee: '$200 to $500' }], total: '$200 to $500', footnote: 'AIPB publishes current enrollment and per-part fees on its site.' },
    difficulty: 'Moderate',
    audience: 'Working bookkeepers',
    time: '6 to 12 months',
    cost: '$200 to $500',
    faqs: [
      { q: 'Do I need a degree?', a: 'No. The CB is experience-based; about two years (3,000 hours) of bookkeeping work generally satisfies eligibility, with education able to substitute for part of it.' },
      { q: 'How is it structured?', a: 'Two closed-book Prometric exams on adjusting entries and error correction, plus two open-book workbooks on payroll, depreciation, inventory and internal controls.' },
      { q: 'How is it different from QuickBooks cert?', a: 'The CB certifies bookkeeping competence and judgment; QuickBooks ProAdvisor certifies product skill. They complement each other.' },
      { q: 'How do I keep it?', a: 'Renew with annual continuing education and the AIPB membership/active fee, and stay within the Code of Ethics.' }
    ],
    summaryPoints: [
      'AIPB national bookkeeping certification',
      '2 exams + 2 workbooks, ~2 yrs experience',
      'Covers adjustments, payroll, controls',
      'Maintained with CPE and a fee'
    ],
    relatedSlugs: ['quickbooks-certified-proadvisor', 'acat-aba-credential', 'cpp-payroll'],
    sourceUrl: 'https://www.aipb.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cdfm-exams',
    body: 'American Society of Military Comptrollers (ASMC)',
    tagline: 'The defense financial-management certification across three modules.',
    description: 'The Certified Defense Financial Manager (CDFM) is the American Society of Military Comptrollers’ credential for defense and federal financial management professionals, earned through three module exams: defense resource management, budget and cost analysis, and accounting and finance. It is the standard mark for DoD comptroller-function staff, civilians, military and contractors, and it validates command of the defense financial management environment. The CDFM is maintained with continuing education and an annual fee.',
    quickAnswer: {
      summary: 'The CDFM is ASMC’s three-module certification for defense financial managers, covering resource management, budget and cost, and accounting and finance. Each module is a computer-based exam, and the credential is renewed with CPE and an annual fee.',
      advantages: [
        'Standard credential for DoD financial management',
        'Three focused modules',
        'Recognized across defense comptroller roles',
        'Open to civilians, military, contractors',
        'Renewed with CPE and a fee'
      ]
    },
    roadmap: ['Join ASMC', 'Study the three modules', 'Schedule the module exams', 'Pass all three', 'Maintain with CPE'],
    prerequisites: 'Interest and role in defense or federal financial management; ASMC membership gives a fee discount.',
    examMeta: {
      questions: 'Three module exams (computer-based)',
      time: 'Per module',
      pass: 'Pass each module',
      fee: 'ASMC enrollment and per-module fees',
      format: 'Multiple-choice, computer-based',
      admin: 'Computer-based testing centers or online'
    },
    topics: [
      { name: 'Module 1: Defense Resource Management' },
      { name: 'Module 2: Budget and Cost Analysis' },
      { name: 'Module 3: Accounting and Finance' }
    ],
    examEssentials: [
      ['Modules', 'Three (resource, budget, accounting)'],
      ['Format', 'Computer-based exams'],
      ['Audience', 'DoD financial management'],
      ['Maintain', 'CPE + annual fee']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Exams', duration: 'per module' }, { stage: 'Maintain', duration: 'annual' }],
    costBreakdown: { items: [{ item: 'Enrollment and exams', fee: '$300 to $700' }], total: '$300 to $700', footnote: 'ASMC member rates are lower than non-member rates.' },
    difficulty: 'Moderate',
    audience: 'Defense and federal financial managers',
    time: '3 to 6 months',
    cost: '$300 to $700',
    faqs: [
      { q: 'Who should pursue the CDFM?', a: 'Defense and federal financial management professionals, including civilians, military and contractors working in DoD comptroller functions, are the primary audience.' },
      { q: 'Can I take the modules separately?', a: 'Yes. Most candidates schedule the three module exams individually as they study, though they may also sit them together.' },
      { q: 'How is it different from the CGFM?', a: 'The CGFM (AGA) serves government financial managers broadly, while the CDFM focuses on the defense and DoD financial management environment.' },
      { q: 'How do I keep it?', a: 'Maintain with continuing education and the annual ASMC maintenance fee.' }
    ],
    summaryPoints: [
      'ASMC defense financial-management certification',
      'Three modules: resource, budget, accounting',
      'For DoD and federal finance roles',
      'Renewed with CPE and a fee'
    ],
    relatedSlugs: ['cgfm-exams', 'cpa-exam-far', 'aipb-certified-bookkeeper'],
    sourceUrl: 'https://www.asmconline.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cfe-exam',
    body: 'Association of Certified Fraud Examiners (ACFE)',
    tagline: 'The anti-fraud credential earned through the CFE exam and ACFE membership.',
    description: 'The Certified Fraud Examiner (CFE) is the Association of Certified Fraud Examiners’ flagship credential for fraud prevention, detection, investigation and deterrence. As of the June 2, 2026 update the exam has three sections, Fraud Schemes, Investigation and Legal, and Prevention and Deterrence, replacing the older four-section format. Candidates need ACFE membership, a points-based mix of education and experience, and then pass the computer-based exam to hold the credential.',
    quickAnswer: {
      summary: 'The CFE is the ACFE’s anti-fraud credential requiring membership, a points-based eligibility mix, and passing the computer-based exam. As of the 2026 update it has three sections (Fraud Schemes; Investigation and Legal; Prevention and Deterrence) rather than four.',
      advantages: [
        'World’s leading anti-fraud credential',
        'Covers schemes, investigation and deterrence',
        'Requires ACFE membership (a community)',
        'Recognized in compliance and audit roles',
        'Updated to a 3-section format in 2026'
      ]
    },
    roadmap: ['Join the ACFE', 'Meet the points requirement', 'Study the manual', 'Pass the exam', 'Maintain with CPE'],
    prerequisites: 'ACFE membership plus eligibility points from education, certifications and fraud experience (a bachelor degree and two years of experience is typical).',
    examMeta: {
      questions: 'Three sections (120 + 120 + 70 questions)',
      time: '2.5 + 2.5 + 1.5 hours',
      pass: 'ACFE published pass standard',
      fee: 'Exam and membership fees (retake $110)',
      format: 'Multiple-choice, computer-based',
      admin: 'ACFE testing partner'
    },
    topics: [
      { name: 'Fraud Schemes (2.5 hrs, 120 Q)' },
      { name: 'Fraud Investigation and Legal (2.5 hrs, 120 Q)' },
      { name: 'Fraud Prevention and Deterrence (1.5 hrs, 70 Q)' }
    ],
    examEssentials: [
      ['Sections', '3 (as of June 2, 2026)'],
      ['Questions', '120 + 120 + 70'],
      ['Membership', 'ACFE membership required'],
      ['Maintain', '20 CPE / year']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Exam', duration: '6.5 hrs total' }, { stage: 'Maintain', duration: 'annual CPE' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$475 (about)' }, { item: 'Retake', fee: '$110' }, { item: 'ACFE membership', fee: 'Annual' }], total: '$475+ plus membership', footnote: 'ACFE membership is required to hold the credential; exam fee reflects current ACFE pricing.' },
    difficulty: 'Hard',
    audience: 'Anti-fraud and audit professionals',
    time: '3 to 6 months prep',
    cost: '$475+ plus membership',
    faqs: [
      { q: 'How did the CFE change in 2026?', a: 'As of June 2, 2026 the exam moved from four sections to three: Fraud Schemes; Investigation and Legal; and Prevention and Deterrence, with adjusted lengths and question counts.' },
      { q: 'Do I need ACFE membership?', a: 'Yes. Active ACFE membership is a condition of holding the CFE, and you must keep membership current along with annual CPE.' },
      { q: 'What are the eligibility points?', a: 'You earn points from education, professional certifications and fraud-related experience; a bachelor degree plus about two years of relevant experience is a common path.' },
      { q: 'Is the CFE hard?', a: 'It is demanding because it spans law, investigation and schemes; most candidates study the Fraud Examiners Manual for three to six months.' },
      { q: 'How do I keep it?', a: 'Complete 20 hours of anti-fraud CPE each year and maintain ACFE membership.' }
    ],
    summaryPoints: [
      'ACFE anti-fraud credential, membership required',
      '3 sections since the 2026 update',
      'Points-based education and experience eligibility',
      '20 CPE hours per year to maintain'
    ],
    relatedSlugs: ['aicpa-cff', 'nacva-maff', 'cpa-exam-aud'],
    sourceUrl: 'https://www.acfe.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'cgfm-exams',
    body: 'Association of Government Accountants (AGA)',
    tagline: 'The three-exam government financial-management certification.',
    description: 'The Certified Government Financial Manager (CGFM) is the Association of Government Accountants’ credential for federal, state and local government financial professionals, earned through three computer-based exams: the governmental environment, government accounting and reporting, and financial management and control. It requires a bachelor degree plus two years of government financial management experience, and it is the recognized mark for public-sector finance careers. The CGFM is renewed with 80 CPE hours every two years.',
    quickAnswer: {
      summary: 'The CGFM is AGA’s three-exam credential for government financial managers, each exam 115 questions in 135 minutes on a 200 to 700 scale with a 500 pass. It requires a bachelor degree plus two years of government finance experience and is renewed with 80 CPE hours every two years.',
      advantages: [
        'Recognized government finance credential',
        'Three exams across the public sector',
        'Federal, state and local relevance',
        'Bachelor degree plus 2 yrs experience',
        'Renewed with 80 CPE / 2 yrs'
      ]
    },
    roadmap: ['Confirm degree + 2 yrs experience', 'Apply to AGA', 'Schedule the three exams', 'Pass at 500/700', 'Maintain with CPE'],
    prerequisites: 'A bachelor degree from an accredited school plus two years of government financial management experience, or an equivalent combination.',
    examMeta: {
      questions: '115 per exam',
      time: '135 minutes per exam',
      pass: 'Scaled 500 / 700',
      fee: 'Per-exam fee plus a one-time application fee',
      format: 'Multiple-choice, computer-based',
      admin: 'Computer-based testing centers or online'
    },
    topics: [
      { name: 'Exam 1: Governmental Environment' },
      { name: 'Exam 2: Government Accounting and Reporting' },
      { name: 'Exam 3: Government Financial Management and Control' }
    ],
    examEssentials: [
      ['Exams', 'Three (135 min, 115 Q each)'],
      ['Pass', 'Scaled 500 / 700'],
      ['Eligibility', 'Bachelor + 2 yrs gov finance'],
      ['Maintain', '80 CPE / 2 yrs']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 12 months' }, { stage: 'Exams', duration: 'per exam' }, { stage: 'Maintain', duration: 'every 2 years' }],
    costBreakdown: { items: [{ item: 'Application fee', fee: '$90 (about)' }, { item: 'Per-exam fee', fee: '$150 (about) x3' }], total: '$540+', footnote: 'AGA member rates differ; the figures reflect typical current AGA pricing.' },
    difficulty: 'Hard',
    audience: 'Government financial managers',
    time: '6 to 12 months',
    cost: '$540+',
    faqs: [
      { q: 'Is the CGFM only for federal workers?', a: 'No. It serves federal, state and local government financial professionals, and the three exams cover all levels of the governmental environment.' },
      { q: 'What experience is needed?', a: 'A bachelor degree plus two years of government financial management experience, or an equivalent combination of education and experience.' },
      { q: 'How is it structured?', a: 'Three 115-question exams of 135 minutes each, scored 200 to 700 with a 500 passing mark.' },
      { q: 'How do I keep it?', a: 'Complete 80 hours of CPE every two years and pay the annual AGA fee.' },
      { q: 'How does it compare to the CDFM?', a: 'The CGFM is the broad government finance mark; the CDFM focuses specifically on the defense and DoD environment.' }
    ],
    summaryPoints: [
      'AGA government financial-management credential',
      'Three 115-question exams, pass at 500/700',
      'Bachelor degree plus 2 years gov experience',
      'Renewed with 80 CPE every two years'
    ],
    relatedSlugs: ['cdfm-exams', 'cpa-exam-far', 'cgap-exam'],
    sourceUrl: 'https://www.agacgfm.org',
    reviewed: '2026-08',
    confidence: 'medium'
  }
];

export default { programs, exams };
