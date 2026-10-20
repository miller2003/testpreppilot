// Flagship rewrite - FINRA package pkg31 (Series 4, 6, 7, 24).
// Sources read 2026-10-20: FINRA exam pages (finra.org/registration-exams-ce/qualification-exams/series4, series6,
// series7, series24), FINRA content outlines (Series 7 2025, Series 6 2020, Series 4 2021, Series 24 2023),
// FINRA "Prepare for Your Test Center Appointment", "Prepare for Your Online Test Appointment",
// "Schedule an Exam", "Reschedule or Cancel Your Appointment", "Qualification Exam FAQ",
// Regulatory Notice 26-18 (retake waiting periods), FINRA Continuing Education page.
// FINRA does not publish pass rates or the raw number of correct answers needed; neither is stated here.

const FINRA = 'Financial Industry Regulatory Authority (FINRA)';
const RETAKE_NOTE = 'Waiting period before a retake: 30 calendar days after a failed attempt, and 180 calendar days after three or more consecutive failures within two years (FINRA Rule 1210.06). Regulatory Notice 26-18 shortens these to 15 and 60 calendar days effective January 19, 2027.';

export const programs = [
  {
    id: 'financial-industry-regulatory-authority-finra-',
    body: FINRA,
    bodyUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams',
    about: 'FINRA is the self-regulatory organization that writes and administers the securities industry qualification exams used to register brokers, representatives and principals in the United States. Its exams, including the Securities Industry Essentials (SIE), Series 6, Series 7, Series 4 and Series 24, are developed with industry committees and mapped to job functions in public content outlines. FINRA sets one passing score per exam through standard setting and equates scores across exam forms so every candidate meets the same standard.',
    registrationSteps: [
      {
        title: 'Pass the SIE and secure a sponsor',
        description: 'The Securities Industry Essentials (SIE) exam is the corequisite for the Series 6, Series 7, Series 4 and Series 24 registrations. Anyone can take the SIE without sponsorship, but a top-off exam such as the Series 7 requires association with, and sponsorship by, a FINRA member firm or another applicable SRO member firm under FINRA Rule 1210.',
        subSteps: ['Confirm which registration category your job requires', 'Ask your firm to file Form U4 in CRD for that category', 'Pass the SIE before or alongside the top-off exam'],
        duration: '',
        note: 'Principal exams add a representative-level prerequisite: FINRA lists SIE plus Series 7 for the General Securities Principal (Series 24) and Registered Options Principal (Series 4) registrations.'
      },
      {
        title: 'Have your firm enroll you through CRD',
        description: 'After the firm files the Form U4, it requests the exam in the Central Registration Depository (CRD). FINRA then opens an enrollment. The scheduling window opens the day after enrollment, and you must take the exam within the 120-day window FINRA posts. FINRA does not grant extensions.',
        subSteps: ['Confirm the exam appears in your FINRA enrollment record', 'Note the last day of the 120-day window', 'Use the same legal name on your ID and your Form U4'],
        duration: 'A 120-day enrollment window',
        note: 'Self-enrolled candidates, for example for the SIE, enroll and pay through the Test Enrollment Services System (TESS) at testenrollment.finra.org.'
      },
      {
        title: 'Schedule with Prometric',
        description: 'FINRA exams are delivered by Prometric. Book online on the Prometric scheduling page or by phone at (800) 578-6273. Have your name, FINRA ID (CRD number or the T or U ID from TESS) and the exam name ready. Request any testing accommodation or Limited English Proficiency (LEP) support from FINRA before you book, because it cannot be added after an appointment exists.',
        subSteps: ['Choose a test center or, if eligible, online delivery', 'Avoid overlapping appointments if you book two exams', 'Schedule as early as possible in the 120-day window'],
        duration: '',
        note: 'Only the SIE is open to online remote proctoring for everyone; other qualification exams need an approved accommodation, for example living more than 150 miles from a test center or being immunocompromised.'
      },
      {
        title: 'Check in and sit the exam',
        description: 'Arrive 30 minutes before your appointment with one valid, unexpired, government-issued ID that carries your signature and photo, and whose name exactly matches your appointment. Electronic copies, photocopies and faxes are not accepted. A tutorial precedes the timed exam, and a four-function calculator is provided and returned at the end.',
        subSteps: ['Bring ID only; store phones and notes in a locker', 'Reference materials are not permitted', 'Online candidates check in 30 minutes early and show a 360-degree view of the room'],
        duration: '',
        note: 'If you arrive more than 30 minutes late and no seat can fit your full testing time, you cannot test and a new enrollment must be opened and paid for.'
      },
      {
        title: 'Read your result and let the firm complete registration',
        description: 'Results appear on screen shortly after you finish and you receive a printed pass or fail report. A candidate who passes receives no additional score details. A candidate who fails sees an overall score and performance by topic section. Your firm then completes the registration through CRD once all required exams are passed.',
        subSteps: ['Keep the printed report', 'If you failed, note the weakest content sections', 'Wait out the retake period before the firm requests another attempt'],
        duration: 'Same day',
        note: ''
      }
    ],
    proctoring: 'Exams are delivered by Prometric at test centers, and the SIE can also be taken online with ProProctor remote proctoring. Test center candidates arrive 30 minutes early and show one government-issued photo and signature ID whose name exactly matches the appointment. Reference materials are not allowed, a four-function calculator is supplied, and online sessions are video and audio recorded with a 360-degree room scan.',
    retakePolicy: RETAKE_NOTE + ' Each retake needs a new exam request and a new full exam fee: firm enrollments are re-requested through CRD, and self-enrolled candidates pay again through TESS. The wait applies only to the exam that was failed; failing the SIE does not delay the Series 7.',
    recertification: 'FINRA registrations stay active through continuing education under FINRA Rule 1240: the Regulatory Element must be completed annually by December 31 for each registration held, and the firm runs an annual Firm Element training program. If a registration terminates, FINRA exams generally stay valid for two years, the SIE for up to four years, and the Maintaining Qualifications Program (effective March 15, 2022) lets eligible people stay qualified for up to five years through annual CE.',
    scoreReporting: 'Results are displayed on the Prometric screen shortly after the exam, with a printed pass or fail report. Passing candidates receive no further detail. Failing candidates receive their overall score and performance by topic section. Scores are equated across exam forms. FINRA publishes the passing score for each exam but does not publish pass rates.',
    refundPolicy: 'FINRA has no hardship policy and does not refund or transfer exam fees if an enrollment window expires. Cancel or reschedule at least 10 business days ahead to avoid a fee. A change made 3 to 10 business days ahead costs half the exam fee, and a change within 2 business days or a no-show costs the full exam fee. Firms are charged for firm enrollments; self-enrolled candidates forfeit the prepaid fee.',
    providersNote: 'FINRA publishes a free content outline, sample items and the full rule text for every exam, and those documents define what can be tested. Most candidates also use a vendor course through their sponsoring firm. Check any vendor material against the current FINRA outline and recent rule changes, because outlines and item counts are revised.',
    comparison: {
      title: 'FINRA exams compared (fees as listed by FINRA, October 2026)',
      columns: ['Exam', 'Items and time', 'Passing score', 'Exam fee'],
      rows: [
        { label: 'Series 6 (Investment Company and Variable Contracts Products Representative)', values: ['50 scored plus 5 unscored; 1 hour 30 minutes', '70', '$100'] },
        { label: 'Series 7 (General Securities Representative)', values: ['125 scored plus 5 unscored; 3 hours 45 minutes', '72', '$395'] },
        { label: 'Series 4 (Registered Options Principal)', values: ['125 scored plus 10 unscored; 3 hours 15 minutes', '72', '$200'] },
        { label: 'Series 24 (General Securities Principal)', values: ['150 scored plus 10 unscored; 3 hours 45 minutes', '70', '$235'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Does FINRA publish exam pass rates?',
        a: 'No. FINRA publishes the passing score, the number of items and the content outline for each qualification exam, but it does not release pass rates. Any percentage you see online comes from prep vendors, forums or estimates and is not an official statistic. Use the published passing score and your timed practice results to judge readiness instead.'
      },
      {
        q: 'How long do I have to schedule a FINRA exam after enrollment?',
        a: 'After enrollment, FINRA posts a 120-day window in which the exam must be taken, and the window opens the day after enrollment. You cannot book an appointment past the expiration date and FINRA does not grant extensions. If the window lapses, a new enrollment and a new exam fee are required.'
      },
      {
        q: 'Can I take FINRA exams online from home?',
        a: 'Only the SIE is open to online delivery for any candidate with an open enrollment window. Other FINRA qualification exams such as the Series 7 must be taken at a Prometric test center unless FINRA approves an accommodation, for example because you live more than 150 miles from a center or are immunocompromised. Request approval before booking.'
      }
    ],
    sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams',
    confidence: 'high'
  }
];

const BASE_ESSENTIALS = (extra) => [
  ...extra,
  ['Enrollment window', '120 days from enrollment; FINRA does not grant extensions'],
  ['Retake rule', '30 calendar days after a failure; 180 calendar days after three or more consecutive failures within two years. Regulatory Notice 26-18 cuts these to 15 and 60 days on January 19, 2027'],
  ['Score report', 'On screen shortly after the exam plus a printed report; passers get no detail, failers get overall score and topic-section performance']
];

export const exams = [
  {
    slug: 'series-7',
    body: FINRA,
    tagline: 'The General Securities Representative license: 125 scored questions, a passing score of 72, and the gate to selling stocks, bonds, options and funds.',
    description: 'The FINRA Series 7 exam has 125 scored questions (130 delivered) in 3 hours 45 minutes, with a passing score of 72 and an exam fee of $395. The Series 7 is the General Securities Representative qualification: together with the SIE it lets a sponsored person solicit, buy and sell corporate securities, municipal fund securities, options, direct participation programs, investment company products and variable contracts. Its content outline is dominated by one job function, Provides Customers with Information About Investments, Makes Recommendations, Transfers Assets and Maintains Appropriate Records, at 91 of 125 scored items. The exam is the usual top-off after the SIE and the prerequisite for several principal exams.',
    quickAnswer: {
      summary: 'The Series 7 is FINRA’s 130-item multiple-choice exam (125 scored, 5 unscored) given in 3 hours 45 minutes, with a passing score of 72 and a $395 fee. You must be sponsored by a FINRA member firm and pass the SIE as a corequisite. Results are shown the same day, and a retake needs a new fee after a 30-day wait.',
      advantages: [
        'The content outline is public and gives exact item counts per job function: 9, 11, 91 and 14 scored items.',
        'Results appear on screen the same day, so you know immediately whether the registration can proceed.',
        'One passing score of 72 applies to every exam form because FINRA equates scores across forms.',
        'The credential covers the widest product range of any FINRA representative exam, from equities and bonds to options and variable contracts.'
      ]
    },
    roadmap: [
      'Pass the SIE, or schedule it with the Series 7',
      'Have your sponsoring firm file Form U4 and enroll you in CRD',
      'Study from the FINRA Series 7 content outline, weighted to Function 3',
      'Book a Prometric appointment inside your 120-day window',
      'Sit the exam, then let the firm complete registration and start continuing education'
    ],
    prerequisites: 'Association with and sponsorship by a FINRA member firm or another applicable SRO member firm (FINRA Rule 1210), plus passing the Securities Industry Essentials (SIE) exam as a corequisite.',
    eligibility: 'FINRA requires sponsorship for the Series 7, so a firm must file Form U4 before you can enroll. Both the SIE and the Series 7 must be passed to obtain the General Securities registration under FINRA Rules 1210 and 1220(b)(2). People who passed the Series 7 before November 7, 2011 may trade municipal securities and sit the Series 53; later passers may only sell municipal securities to and buy them from customers unless they also pass the Series 52.',
    examMeta: {
      questions: '125 scored multiple-choice items plus 5 unscored pretest items (130 delivered), four answer choices each',
      time: '3 hours 45 minutes (225 minutes) for the whole exam, after a tutorial',
      pass: 'Passing score of 72, set by FINRA standard setting; scores are equated across forms and the raw cut is not published',
      fee: '$395 per attempt, paid again on every retake (as of October 2026); the SIE is a separate fee',
      format: 'Computer-based, closed book, no penalty for guessing; a calculator is provided at the test center',
      admin: 'FINRA (content and scoring); Prometric (test centers)'
    },
    topics: [
      { name: 'Seeks Business for the Broker-Dealer from Customers and Potential Customers', weight: '7%', note: '9 scored items. Public communications and approvals, seminars, new issue and underwriting process, Regulation D and Regulation A offerings, private placements.' },
      { name: 'Opens Accounts After Obtaining and Evaluating Customers’ Financial Profile and Investment Objectives', weight: '9%', note: '11 scored items. Account types and restrictions, customer documentation, suspicious activity, investment profile, supervisory approval to open accounts.' },
      { name: 'Provides Customers with Information About Investments, Makes Recommendations, Transfers Assets and Maintains Appropriate Records', weight: '73%', note: '91 scored items. Product knowledge, suitability and best-interest recommendations, required disclosures, customer communication and records. Options, equities, bonds, funds and variable products sit here.' },
      { name: 'Obtains and Verifies Customers’ Purchase and Sales Instructions and Agreements; Processes, Completes and Confirms Transactions', weight: '11%', note: '14 scored items. Quotes, order processing, confirmations and settlement, error and complaint resolution, margin issues.' }
    ],
    examEssentials: BASE_ESSENTIALS([
      ['Content outline', 'FINRA Series 7 outline copyright 2025: 125 scored items in four functions (9, 11, 91, 14)'],
      ['Unscored items', '5 unidentified pretest items, reduced from 10 effective October 27, 2025; exam time did not change'],
      ['Exam on record since', 'September 1974 (FINRA exam page)'],
      ['Corequisite', 'SIE must also be passed to obtain the General Securities registration']
    ]),
    timeline: [
      { stage: 'SIE preparation and exam', duration: 'Self-paced; the SIE needs no sponsor' },
      { stage: 'Sponsorship and CRD enrollment', duration: 'Depends on the firm; window opens the day after enrollment' },
      { stage: 'Series 7 study', duration: 'Self-paced, planned around your 120-day window' },
      { stage: 'Exam window', duration: '120 days from enrollment' },
      { stage: 'Result', duration: 'Same day, on screen with a printed report' }
    ],
    costBreakdown: {
      items: [
        { item: 'Series 7 exam fee, one attempt', fee: '$395' },
        { item: 'SIE exam fee (corequisite, separate attempt)', fee: '$100 (the late-change fee FINRA lists for the SIE equals its exam fee)' },
        { item: 'Retake after a failed attempt', fee: '$395 again, after the waiting period' },
        { item: 'Late cancel or no-show (within 2 business days)', fee: 'Full exam fee ($395)' },
        { item: 'Cancel or reschedule 3 to 10 business days ahead', fee: 'Half the exam fee' }
      ],
      total: '$495 for the SIE plus one Series 7 attempt, before any course or retake',
      footnote: 'Most sponsoring firms pay exam fees and provide a training vendor. Fees are as listed by FINRA in October 2026 and can change.'
    },
    difficulty: 'Hard',
    audience: 'New and experienced broker-dealer associates, financial advisors who sell securities, and career changers hired by a member firm that will sponsor them.',
    time: 'The exam is 3 hours 45 minutes; you have 120 days from enrollment to take it',
    cost: '$395 exam fee plus the SIE',
    faqs: [
      { q: 'How many questions are on the Series 7 exam?', a: 'The Series 7 exam has 125 scored multiple-choice questions plus 5 unscored pretest questions, so you see 130 items. FINRA cut the unscored pretest items from 10 to 5 effective October 27, 2025, and the exam time did not change. You cannot tell which questions are unscored, so answer every one as if it counts.' },
      { q: 'What is a passing score on the Series 7?', a: 'The passing score on the Series 7 is 72. FINRA sets it through standard setting by a committee of industry professionals, and it equates scores across exam forms so the standard is the same for everyone. FINRA does not publish how many raw items you must answer correctly, so aim well above 72 percent on timed practice exams.' },
      { q: 'Is the Series 7 exam hard?', a: 'Yes, the Series 7 is widely regarded as one of the harder FINRA representative exams because it covers equities, bonds, options, funds and rules in 3 hours 45 minutes. FINRA publishes no pass rate, so no official difficulty statistic exists. Most of the weight, 91 of 125 scored items, sits in one function covering recommendations, disclosures and records.' },
      { q: 'How much does the Series 7 exam cost?', a: 'FINRA lists the Series 7 exam fee at $395 per attempt as of October 2026, and you pay it again for every retake. The SIE is a separate exam with its own fee. Late cancellations within 2 business days cost the full fee, and changes made 3 to 10 business days ahead cost half. Many firms pay these fees for sponsored candidates.' },
      { q: 'Do I need the SIE before the Series 7?', a: 'Yes, the SIE is a corequisite, so you must pass both the SIE and the Series 7 to hold the General Securities Representative registration. You can take the SIE first without a sponsor or in the same period as the Series 7. The Series 7 itself requires sponsorship by a FINRA member firm, which the SIE does not.' },
      { q: 'How long after failing can I retake the Series 7?', a: 'Under the rule in force in October 2026 you wait 30 calendar days after a failed attempt and 180 calendar days after three or more consecutive failures within two years. FINRA Regulatory Notice 26-18 shortens these to 15 and 60 days effective January 19, 2027. Each retake needs a new exam request and a full fee.' },
      { q: 'Can I take the Series 7 online at home?', a: 'Usually not. FINRA allows online delivery of the SIE to any candidate, but the Series 7 is given at Prometric test centers unless FINRA approves an accommodation, for example if you live more than 150 miles from a center or are immunocompromised. Ask FINRA for approval before you book, because accommodations cannot be added later.' },
      { q: 'How long is a Series 7 registration valid?', a: 'The Series 7 registration stays active while you are associated with a member firm and complete the annual Regulatory Element by December 31 under FINRA Rule 1240. If your registration ends, the exam generally stays valid for two years, and the Maintaining Qualifications Program can extend that to up to five years if you enroll and complete annual CE.' }
    ],
    summaryPoints: [
      'The Series 7 has 125 scored questions plus 5 unscored pretest questions and a 3 hour 45 minute time limit.',
      'The passing score is 72, and the exam fee is $395 per attempt as of October 2026.',
      'One job function holds 91 of the 125 scored items; the other three hold 9, 11 and 14.',
      'The current retake wait is 30 calendar days, dropping to 15 days on January 19, 2027.',
      'The SIE is a corequisite, and a FINRA member firm must sponsor you before you can enroll.'
    ],
    relatedSlugs: ['sie-exam', 'series-6', 'series-24', 'series-63'],
    sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams/series7',
    reviewed: '2026-10',
    confidence: 'high'
  },
  {
    slug: 'series-24',
    body: FINRA,
    tagline: 'The General Securities Principal exam: 150 scored supervision questions, passing score 70, for people who run a broker-dealer desk.',
    description: 'The FINRA Series 24 exam has 150 scored questions in 3 hours 45 minutes, with a passing score of 70 and an exam fee of $235. The Series 24 qualifies a person to supervise a broker-dealer’s general securities business, including advertising, market making, trading and underwriting. It tests supervision rather than selling: General Broker-Dealer Activities alone carries 45 items, and municipal securities and options are outside its scope. Candidates are typically Series 7 holders promoted into branch manager, compliance or supervisory roles, which makes it the next rung after the representative license.',
    quickAnswer: {
      summary: 'The Series 24 is FINRA’s General Securities Principal exam: 150 scored multiple-choice items plus 10 unscored (160 delivered), 3 hours 45 minutes, passing score 70, fee $235. FINRA’s page lists the SIE plus Series 7 as the pairing for the principal registration, and a member firm must sponsor you.',
      advantages: [
        'It is the entry-level supervisory license for general securities and unlocks branch manager and compliance principal roles.',
        'The outline gives exact item counts: 9, 45, 32, 32 and 32 across five supervisory functions.',
        'The passing score of 70 is lower than the Series 7 and Series 4, though the question pool is broader.',
        'The $235 fee is lower than the Series 7 fee, and results are shown on screen the same day.'
      ]
    },
    roadmap: [
      'Hold the SIE and Series 7 qualifications FINRA requires for the principal registration',
      'Have your firm request the General Securities Principal (GP) position on Form U4',
      'Study the five supervisory functions in the FINRA outline',
      'Book a Prometric appointment within the 120-day window',
      'Sit the exam and have your firm complete the GP registration'
    ],
    prerequisites: 'Association with and sponsorship by a FINRA member firm, plus the SIE and Series 7 qualifications FINRA lists for the General Securities Principal registration.',
    eligibility: 'FINRA’s Series 24 page lists SIE plus Series 7 as the pairing for the General Securities Principal (GP) registration and requires member-firm sponsorship under FINRA Rule 1210. The 2023 content outline names other representative qualifications that open the route as well, including the Series 57, 62, 79 and 82. The firm requests the GP position on Form U4 in CRD. Check your exact route with your compliance department before enrolling.',
    examMeta: {
      questions: '150 scored multiple-choice items plus 10 unscored pretest items (160 delivered), each scored item worth one point',
      time: '3 hours 45 minutes (225 minutes), after a tutorial',
      pass: 'Passing score of 70 percent, set by FINRA standard setting and equated across forms',
      fee: '$235 per attempt, paid again on every retake (as of October 2026)',
      format: 'Computer-based, closed book, no penalty for guessing; calculator and whiteboard supplied at the test center',
      admin: 'FINRA (content and scoring); Prometric (test centers)'
    },
    topics: [
      { name: 'Supervision of Registration of the Broker-Dealer and Personnel Management Activities', weight: '', note: '9 scored items. Registering the firm and offices in CRD, hiring and registration of associated persons.' },
      { name: 'Supervision of General Broker-Dealer Activities', weight: '', note: '45 scored items, the largest function. Written supervisory procedures, conduct of associated persons, compensation, product development, discipline, books and records, financial responsibility and cash management.' },
      { name: 'Supervision of Retail and Institutional Customer-Related Activities', weight: '', note: '32 scored items. New account opening and ongoing account maintenance, customer-related supervision.' },
      { name: 'Supervision of Trading and Market Making Activities', weight: '', note: '32 scored items. Order entry, routing and execution, booking and settlement, trade reporting.' },
      { name: 'Supervision of Investment Banking and Research', weight: '', note: '32 scored items. Underwriting and offering supervision, investor disclosure materials and pitch books, research activities.' }
    ],
    examEssentials: BASE_ESSENTIALS([
      ['Content outline', 'FINRA Series 24 outline copyright 2023: 150 scored items across five functions'],
      ['Unscored items', '10 unidentified pretest items per the 2023 outline, 160 items delivered'],
      ['Scope limit', 'FINRA only; does not cover municipal securities or options, which have separate principal exams'],
      ['Exam on record since', 'January 1979 (FINRA exam page)']
    ]),
    timeline: [
      { stage: 'Qualify as a representative (SIE and Series 7)', duration: 'Already complete for most candidates' },
      { stage: 'Firm requests the GP position and enrolls you', duration: 'Days; window opens the day after enrollment' },
      { stage: 'Series 24 study', duration: 'Self-paced, planned around your 120-day window' },
      { stage: 'Exam window', duration: '120 days from enrollment' },
      { stage: 'Result', duration: 'Same day, on screen with a printed report' }
    ],
    costBreakdown: {
      items: [
        { item: 'Series 24 exam fee, one attempt', fee: '$235' },
        { item: 'Retake after a failed attempt', fee: '$235 again, after the waiting period' },
        { item: 'Late cancel or no-show (within 2 business days)', fee: 'Full exam fee ($235)' },
        { item: 'Cancel or reschedule 3 to 10 business days ahead', fee: 'Half the exam fee' }
      ],
      total: '$235 for one attempt, plus any firm-provided or purchased course',
      footnote: 'Principals usually test through an employer that pays the fee. Fees are as listed by FINRA in October 2026.'
    },
    difficulty: 'Hard',
    audience: 'Series 7 holders moving into branch manager, supervisory principal, compliance or operations oversight roles at a broker-dealer.',
    time: 'The exam is 3 hours 45 minutes; you have 120 days from enrollment to take it',
    cost: '$235 exam fee',
    faqs: [
      { q: 'How many questions are on the Series 24 exam?', a: 'The Series 24 has 150 scored multiple-choice questions, split 9, 45, 32, 32 and 32 across five supervisory functions. The 2023 FINRA outline adds 10 unscored pretest items, so 160 are delivered in 3 hours 45 minutes. The unscored items are not identified, so treat each question as scored.' },
      { q: 'What is the passing score for the Series 24?', a: 'The passing score for the Series 24 is 70. FINRA sets it by standard setting with a committee of industry professionals who hold the registration and equates scores across forms. FINRA does not publish the raw number of correct answers needed, so train above 70 percent on timed practice exams to keep a margin.' },
      { q: 'Is the Series 24 harder than the Series 7?', a: 'Many candidates find the Series 24 harder because it tests supervision judgment across five functions rather than product knowledge, and 45 of 150 items cover general broker-dealer activities. FINRA publishes no pass rate, so there is no official comparison. Its passing score is 70 versus 72 for the Series 7.' },
      { q: 'How much does the Series 24 cost?', a: 'FINRA lists the Series 24 exam fee at $235 per attempt as of October 2026. A retake requires a new request and the full fee again. Cancelling within 2 business days or not showing up costs the full fee, and a change 3 to 10 business days ahead costs half. Employers commonly pay it.' },
      { q: 'What do I need before taking the Series 24?', a: 'You need sponsorship from a FINRA member firm and the qualifications FINRA lists for the principal registration. FINRA’s exam page pairs the SIE with the Series 7 for the General Securities Principal registration. Your firm requests the GP position on Form U4. Confirm your route with compliance before enrolling.' },
      { q: 'What does a Series 24 principal supervise?', a: 'A General Securities Principal supervises a broker-dealer’s advertising, market making, trading and underwriting activity within the limits of the representative registrations held. The Series 24 does not cover municipal securities or options, so supervising those needs other principal exams such as the Series 53 or the Series 4.' },
      { q: 'How long can I wait to retake the Series 24 after failing?', a: 'You can retake the Series 24 after 30 calendar days following a failed attempt, or after 180 days following three or more consecutive failures within two years. Regulatory Notice 26-18 shortens these waits to 15 and 60 days effective January 19, 2027. Each retake needs a new request and fee.' },
      { q: 'Do my Series 24 results show which sections I missed?', a: 'Only if you fail. Passing candidates receive a pass report with no additional score detail, while failing candidates see their overall score and performance by content area. The score profile is the best study guide for a retake, so photograph or save the printed report before you leave the test center.' }
    ],
    summaryPoints: [
      'The Series 24 has 150 scored questions plus 10 unscored pretest questions and a 3 hour 45 minute time limit.',
      'The passing score is 70 and the exam fee is $235 per attempt as of October 2026.',
      'General Broker-Dealer Activities is the largest function at 45 of 150 scored items.',
      'The exam does not cover municipal securities or options, which have separate principal exams.',
      'The retake wait is 30 calendar days now and 15 days from January 19, 2027.'
    ],
    relatedSlugs: ['series-7', 'series-4', 'series-9', 'series-79'],
    sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams/series24',
    reviewed: '2026-10',
    confidence: 'high'
  },
  {
    slug: 'series-4',
    body: FINRA,
    tagline: 'The Registered Options Principal exam: 125 scored items on supervising options accounts, passing score 72, in 3 hours 15 minutes.',
    description: 'The FINRA Series 4 exam has 125 scored questions in 3 hours 15 minutes, with a passing score of 72 and an exam fee of $200. The Series 4 qualifies a person as a Registered Options Principal, who supervises options sales practices with the public for equity, foreign currency, interest rate, index, and government and mortgage-backed securities options. Its largest functions are Supervise General Options Trading (30 items) and Supervise Associated Persons and Personnel Management Activities (28 items). It is a supervisory add-on for Series 7 holders at firms that handle customer options business.',
    quickAnswer: {
      summary: 'The Series 4 is FINRA’s Registered Options Principal exam: 125 scored items plus 10 unscored (135 delivered), 3 hours 15 minutes, passing score 72, fee $200. FINRA lists the SIE and Series 7 as corequisites, and a member firm must sponsor you and request the OP position on Form U4.',
      advantages: [
        'It is the narrowest and shortest FINRA principal exam, at 3 hours 15 minutes and $200.',
        'The outline gives exact item counts across six functions: 21, 25, 30, 9, 12 and 28.',
        'It authorizes supervision of options accounts, trading and communications at a firm with options business.',
        'Results appear on screen the same day, and failers see performance by content area.'
      ]
    },
    roadmap: [
      'Hold the SIE and Series 7 qualifications FINRA lists as corequisites',
      'Have your firm request the Registered Options Principal (OP) position on Form U4',
      'Study the six supervisory functions in the FINRA Series 4 outline',
      'Book a Prometric appointment within the 120-day window',
      'Sit the exam and have your firm complete the OP registration'
    ],
    prerequisites: 'Association with and sponsorship by a FINRA member firm or other applicable SRO member firm, plus the SIE and Series 7 qualifications FINRA lists as corequisites.',
    eligibility: 'FINRA’s Series 4 page lists the SIE and the Series 7 as corequisites for the Registered Options Principal registration and requires sponsorship under FINRA Rule 1210. The 2021 content outline also lists the Series 17, the Series 37 or 38, or a combination of the Series 62 and Series 42 as qualifying representative routes under FINRA Rule 1220(a). The firm files Form U4 requesting the OP position.',
    examMeta: {
      questions: '125 scored multiple-choice items plus 10 unscored pretest items (135 delivered)',
      time: '3 hours 15 minutes (195 minutes), after a tutorial',
      pass: 'Passing score of 72 percent, set by FINRA standard setting and equated across forms',
      fee: '$200 per attempt, paid again on every retake (as of October 2026)',
      format: 'Computer-based, closed book, no penalty for guessing; calculator and whiteboard supplied at the test center',
      admin: 'FINRA (content and scoring); Prometric (test centers)'
    },
    topics: [
      { name: 'Supervise the Opening of New Options Accounts', weight: '', note: '21 scored items. Reviewing new account paperwork, required disclosures, trading objectives and risk levels, signed options agreements.' },
      { name: 'Supervise Options Account Activities', weight: '', note: '25 scored items. Margin accounts, customer risk exposure, complaint investigation and corrective action.' },
      { name: 'Supervise General Options Trading', weight: '', note: '30 scored items, the largest function. Operational process of options trades, exception review, trade error correction, customer market access.' },
      { name: 'Supervise Options Communications', weight: '', note: '9 scored items. Options telemarketing, retail and institutional communications, correspondence approval.' },
      { name: 'Implement Practices and Adhere to Regulatory Requirements', weight: '', note: '12 scored items. Supervisory control functions and required books and records.' },
      { name: 'Supervise Associated Persons and Personnel Management Activities', weight: '', note: '28 scored items. Verifying qualifications of new hires, registrations and disclosures, product and regulatory knowledge, conduct of associated persons.' }
    ],
    examEssentials: BASE_ESSENTIALS([
      ['Content outline', 'FINRA Series 4 outline copyright 2021: 125 scored items across six functions'],
      ['Unscored items', '10 unidentified pretest items per the 2021 outline, 135 items delivered'],
      ['Scope', 'Supervision of options sales practices with the public: equity, foreign currency, interest rate, index and government and mortgage-backed securities options'],
      ['Exam on record since', 'April 1975 (FINRA exam page)']
    ]),
    timeline: [
      { stage: 'Hold the SIE and Series 7', duration: 'Already complete for most candidates' },
      { stage: 'Firm requests the OP position and enrolls you', duration: 'Days; window opens the day after enrollment' },
      { stage: 'Series 4 study', duration: 'Self-paced, planned around your 120-day window' },
      { stage: 'Exam window', duration: '120 days from enrollment' },
      { stage: 'Result', duration: 'Same day, on screen with a printed report' }
    ],
    costBreakdown: {
      items: [
        { item: 'Series 4 exam fee, one attempt', fee: '$200' },
        { item: 'Retake after a failed attempt', fee: '$200 again, after the waiting period' },
        { item: 'Late cancel or no-show (within 2 business days)', fee: 'Full exam fee ($200)' },
        { item: 'Cancel or reschedule 3 to 10 business days ahead', fee: 'Half the exam fee' }
      ],
      total: '$200 for one attempt, plus any firm-provided or purchased course',
      footnote: 'The firm usually pays the exam fee. Fees are as listed by FINRA in October 2026.'
    },
    difficulty: 'Hard',
    audience: 'Series 7 holders at firms with retail options business who are becoming the supervising principal for options accounts, trading and communications.',
    time: 'The exam is 3 hours 15 minutes; you have 120 days from enrollment to take it',
    cost: '$200 exam fee',
    faqs: [
      { q: 'How many questions are on the Series 4 exam?', a: 'The Series 4 has 125 scored multiple-choice questions across six job functions, with 21, 25, 30, 9, 12 and 28 items. FINRA’s 2021 outline adds 10 unscored pretest items, so 135 are delivered in 3 hours 15 minutes. The pretest items are not identified, so answer every question carefully.' },
      { q: 'What is the passing score on the Series 4?', a: 'The passing score on the Series 4 is 72. FINRA sets it through standard setting by a committee of registered principals and equates scores across exam forms so every candidate faces the same standard. FINRA does not publish a raw number of correct answers, so use 72 percent on timed practice as a floor, not a target.' },
      { q: 'How hard is the Series 4 exam?', a: 'The Series 4 is a hard exam for its length because it tests supervision rules for options accounts, trading and communications at a 72 passing score. FINRA publishes no pass rate, so any figure online is an estimate. It rewards firm knowledge of options rules more than product trivia, and fewer items than the Series 7 make each miss count more.' },
      { q: 'How much does the Series 4 exam cost?', a: 'FINRA lists the Series 4 exam fee at $200 per attempt as of October 2026, with the full fee due again on each retake. A late cancellation within 2 business days or a no-show costs the full fee, and a change 3 to 10 business days ahead costs half. Firms usually pay for sponsored candidates.' },
      { q: 'What do I need before I can take the Series 4?', a: 'You need sponsorship by a FINRA member firm and the SIE and Series 7, which FINRA names as corequisites. The firm files Form U4 requesting the Registered Options Principal position. The 2021 outline also accepts other routes, such as the Series 17, 37 or 38, or the Series 62 plus Series 42 combination.' },
      { q: 'What can a Registered Options Principal do after passing the Series 4?', a: 'A Registered Options Principal can supervise options sales practices with the public for equity, foreign currency, interest rate, index, and government and mortgage-backed securities options. That includes approving options accounts, reviewing options communications and overseeing options trading. The Series 4 does not by itself authorize supervising other securities business; that needs the Series 24 or another principal exam.' },
      { q: 'How soon can I retake the Series 4 after failing?', a: 'You can retake the Series 4 30 calendar days after a failed attempt, or 180 calendar days after three or more consecutive failures within two years. FINRA Regulatory Notice 26-18 shortens these to 15 and 60 days on January 19, 2027. Each retake needs a new request and a full $200 fee.' }
    ],
    summaryPoints: [
      'The Series 4 has 125 scored questions plus 10 unscored pretest questions and a 3 hour 15 minute limit.',
      'The passing score is 72 and the exam fee is $200 per attempt as of October 2026.',
      'Supervise General Options Trading is the largest function at 30 of 125 scored items.',
      'The SIE and Series 7 are listed by FINRA as corequisites, and sponsorship is required.',
      'The retake wait is 30 calendar days now and 15 days from January 19, 2027.'
    ],
    relatedSlugs: ['series-7', 'series-24', 'sie-exam', 'series-9'],
    sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams/series4',
    reviewed: '2026-10',
    confidence: 'high'
  },
  {
    slug: 'series-6',
    body: FINRA,
    tagline: 'The Series 6 license: 50 scored questions in 90 minutes, passing score 70, for mutual funds and variable annuities only.',
    description: 'The FINRA Series 6 exam has 50 scored questions in 1 hour 30 minutes, with a passing score of 70 and an exam fee of $100. The Series 6 is the limited Investment Company and Variable Contracts Products Representative qualification, so a passer can sell mutual funds, variable annuities, variable life insurance, unit investment trusts and municipal fund securities such as 529 plans, but not stocks, corporate bonds or options. Half the scored items, 25 of 50, fall in the information and recommendations function. It is the shortest FINRA representative exam and a common start for bank and insurance-channel sales staff.',
    quickAnswer: {
      summary: 'The Series 6 is FINRA’s Investment Company and Variable Contracts Products Representative exam: 50 scored items plus 5 unscored (55 delivered) in 1 hour 30 minutes, passing score 70, fee $100. You must pass the SIE as well and be sponsored by a member firm.',
      advantages: [
        'It has the lowest fee ($100) and shortest time (90 minutes) of any FINRA representative exam in this group.',
        'The scope is narrow: mutual funds, variable annuities, variable life, UITs and municipal fund securities.',
        'The outline publishes weights of 24%, 16%, 50% and 10%, so study time can be allocated exactly.',
        'A passing score of 70 is lower than the 72 required for the Series 7.'
      ]
    },
    roadmap: [
      'Pass the SIE, which is the corequisite',
      'Have your sponsoring firm file Form U4 and enroll you',
      'Study the four-function Series 6 content outline',
      'Book a Prometric appointment within the 120-day window',
      'Sit the exam, then add state registration and continuing education through your firm'
    ],
    prerequisites: 'Association with and sponsorship by a FINRA member firm or another applicable SRO member firm, plus passing the Securities Industry Essentials (SIE) exam as a corequisite.',
    eligibility: 'FINRA requires both the Series 6 and the SIE to obtain the Investment Company and Variable Contracts Products registration (FINRA Rules 1210 and 1220(b)(7)). A member firm must sponsor you and file Form U4 before you can enroll in the Series 6. The SIE does not require a sponsor. Closed-end funds qualify only on their initial offering.',
    examMeta: {
      questions: '50 scored multiple-choice items plus 5 unscored pretest items (55 delivered), four answer choices each',
      time: '1 hour 30 minutes (90 minutes), after a tutorial',
      pass: 'Passing score of 70, set by FINRA standard setting; scores are equated across forms',
      fee: '$100 per attempt, paid again on every retake (as of October 2026); the SIE is a separate fee',
      format: 'Computer-based, closed book, no penalty for guessing; a calculator is provided at the test center',
      admin: 'FINRA (content and scoring); Prometric (test centers)'
    },
    topics: [
      { name: 'Seeks Business for the Broker-Dealer from Customers and Potential Customers', weight: '24%', note: '12 scored items. Public communications and approvals, seminars, describing products and soliciting business.' },
      { name: 'Opens Accounts After Obtaining and Evaluating Customers’ Financial Profile and Investment Objectives', weight: '16%', note: '8 scored items. Account types and disclosures, customer documentation, investment profile, supervisory approval.' },
      { name: 'Provides Customers with Information About Investments, Makes Recommendations, Transfers Assets and Maintains Appropriate Records', weight: '50%', note: '25 scored items. Investment strategies, risks and rewards, suitability of recommendations, product disclosures, account communication and records.' },
      { name: 'Obtains and Verifies Customers’ Purchase and Sales Instructions; Processes, Completes and Confirms Transactions', weight: '10%', note: '5 scored items. Quotes, processing and confirming transactions, resolving discrepancies.' }
    ],
    examEssentials: BASE_ESSENTIALS([
      ['Content outline', 'FINRA Series 6 outline copyright 2020: 50 scored items in four functions (12, 8, 25, 5)'],
      ['Unscored items', '5 unidentified pretest items, 55 items delivered'],
      ['Products covered', 'Mutual funds (closed-end only at initial offering), variable annuities, variable life insurance, UITs and municipal fund securities'],
      ['Exam on record since', 'August 1980 (FINRA exam page)']
    ]),
    timeline: [
      { stage: 'SIE preparation and exam', duration: 'Self-paced; the SIE needs no sponsor' },
      { stage: 'Sponsorship and CRD enrollment', duration: 'Depends on the firm; window opens the day after enrollment' },
      { stage: 'Series 6 study', duration: 'Self-paced, planned around your 120-day window' },
      { stage: 'Exam window', duration: '120 days from enrollment' },
      { stage: 'Result', duration: 'Same day, on screen with a printed report' }
    ],
    costBreakdown: {
      items: [
        { item: 'Series 6 exam fee, one attempt', fee: '$100' },
        { item: 'SIE exam fee (corequisite, separate attempt)', fee: '$100 (the late-change fee FINRA lists for the SIE equals its exam fee)' },
        { item: 'Retake after a failed attempt', fee: '$100 again, after the waiting period' },
        { item: 'Late cancel or no-show (within 2 business days)', fee: 'Full exam fee ($100)' }
      ],
      total: '$200 for the SIE plus one Series 6 attempt, before any course or retake',
      footnote: 'Employers usually pay both exam fees. Fees are as listed by FINRA in October 2026 and can change.'
    },
    difficulty: 'Moderate',
    audience: 'Bank, insurance-channel and fund-company sales staff who sell mutual funds and variable annuities but not individual stocks or bonds.',
    time: 'The exam is 90 minutes; you have 120 days from enrollment to take it',
    cost: '$100 exam fee plus the SIE',
    faqs: [
      { q: 'How many questions are on the Series 6 exam?', a: 'The Series 6 has 50 scored multiple-choice questions plus 5 unscored pretest questions, so you see 55 items in 1 hour 30 minutes. The scored items split 12, 8, 25 and 5 across four job functions. The pretest items are not identified, so answer every question as if it counts.' },
      { q: 'What is a passing score on the Series 6?', a: 'The passing score on the Series 6 is 70. FINRA sets it through standard setting and equates scores across forms so every candidate meets the same standard. FINRA does not publish the raw number of correct answers needed, so score comfortably above 70 percent on timed practice exams.' },
      { q: 'Is the Series 6 easier than the Series 7?', a: 'Yes, the Series 6 is shorter and narrower: 50 scored items in 90 minutes against 125 in 3 hours 45 minutes for the Series 7, with a passing score of 70 versus 72. It covers only investment company and variable contracts products. FINRA publishes no pass rate, so ease is judged by scope, not statistics.' },
      { q: 'What can I sell with a Series 6 license?', a: 'The Series 6 lets you sell mutual funds, with closed-end funds only on their initial offering, variable annuities, variable life insurance, unit investment trusts and municipal fund securities such as 529 plans. It does not cover stocks, corporate bonds or options, which require the Series 7.' },
      { q: 'How much does the Series 6 exam cost?', a: 'FINRA lists the Series 6 exam fee at $100 per attempt as of October 2026, and you pay it again for every retake. The SIE is a separate exam you must also pass. A late cancellation within 2 business days costs the full fee, and a change made 3 to 10 business days ahead costs half.' },
      { q: 'Do I need the SIE for the Series 6?', a: 'Yes, the SIE is a corequisite. FINRA requires you to pass both the SIE and the Series 6 to obtain the Investment Company and Variable Contracts Products registration. The SIE needs no sponsor and can be taken first, while the Series 6 requires a FINRA member firm to sponsor you.' },
      { q: 'How long must I wait to retake the Series 6?', a: 'You can retake the Series 6 after 30 calendar days following a failed attempt, or after 180 calendar days following three or more consecutive failures within two years. FINRA Regulatory Notice 26-18 shortens these to 15 and 60 days on January 19, 2027. Each attempt needs a new request and the full $100 fee.' }
    ],
    summaryPoints: [
      'The Series 6 has 50 scored questions plus 5 unscored pretest questions and a 90-minute time limit.',
      'The passing score is 70 and the exam fee is $100 per attempt as of October 2026.',
      'The recommendations function holds 25 of the 50 scored items, or 50 percent of the exam.',
      'The license covers mutual funds, variable annuities, variable life, UITs and 529 plans, not stocks.',
      'The SIE is a corequisite and a FINRA member firm must sponsor you before enrollment.'
    ],
    relatedSlugs: ['sie-exam', 'series-7', 'series-63', 'series-65'],
    sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams/series6',
    reviewed: '2026-10',
    confidence: 'high'
  }
];

export default { programs, exams };
