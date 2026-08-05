export const programs = [
  {
    id: 'faa',
    body: 'Federal Aviation Administration',
    bodyUrl: 'https://www.faa.gov/training_testing/testing/',
    about: 'The Federal Aviation Administration (FAA) is the U.S. civil aviation authority that issues pilot, instructor, dispatcher and remote-pilot certificates. Most airman certificates require passing an FAA knowledge test, followed by a practical (flight or oral) test, both built around the Airman Certification Standards (ACS).',
    registrationSteps: [
      {
        title: 'Obtain an FAA Tracking Number (FTN)',
        description: 'Create an IACRA account at iacra.faa.gov and receive your FTN. You cannot open a PSI testing account without it, so do this first.',
        duration: '10 minutes',
        note: 'Enter your name exactly as it appears on your government photo ID, or the testing center will reject it.'
      },
      {
        title: 'Get the required instructor endorsement or authorization',
        description: 'Most pilot and instructor knowledge tests require a logbook or written endorsement from an authorized instructor certifying you are prepared. Some tests (dispatcher, ground instructor, remote pilot, flight navigator) need no endorsement.',
        subSteps: ['Flight/Ground instructor signs the endorsement', 'Canadian and military conversion tests use your foreign or service certificate as authorization']
      },
      {
        title: 'Create a PSI testing account',
        description: 'Register at faa.psiexams.com with your FTN and enable two-factor authentication. PSI is the FAA-contracted vendor that delivers every airman knowledge test.',
        duration: '10 minutes'
      },
      {
        title: 'Schedule and pay for the test',
        description: 'Choose your exam, verify eligibility, pick a testing center and date, and pay the $175 fee by credit card. You may reschedule up to 12 months later.',
        note: 'The fee is paid to PSI, not the FAA. The FAA charges nothing for the application or certificate.'
      },
      {
        title: 'Bring ID and authorization on test day',
        description: 'Arrive with a government photo ID showing your current address and your instructor endorsement or authorization form. Non-U.S. citizens must also bring a passport.'
      }
    ],
    proctoring: 'Knowledge tests are delivered on PSI computer workstations at hundreds of FAA-approved testing centers in the U.S. and abroad. You may use an aviation calculator, E6B, plotter, straightedge and the official FAA testing supplement (figures booklet). A government photo ID is required and the session is continuously monitored.',
    retakePolicy: 'If you score below 70% you must wait 30 days before retaking, and you must present a new endorsement from an authorized instructor certifying additional training in the subjects you failed. You may retest sooner than 30 days only if that instructor signs a statement that you are ready. There is no limit on the number of attempts, but each attempt costs a fresh $175.',
    recertification: 'A passed knowledge test is valid for 24 calendar months. To earn the certificate you must complete the practical test within that window; if it lapses you must retake the knowledge test. Pilot and instructor certificates themselves carry no expiration once issued, but flight instructors must renew every 24 months via a FIRC, and remote pilots must complete free recurrent training every 24 months.',
    scoreReporting: 'Your score displays on screen the moment you finish, and you receive an Airman Knowledge Test Report (AKTR) showing pass/fail and the ACS codes for any weak areas. A passing score is 70%. The DPE or examiner sees your score and weak-area codes before your practical test.',
    refundPolicy: 'You may cancel or reschedule through the PSI site. Rescheduling more than 48 hours ahead typically avoids penalty; the $175 is consumed only when the test is attempted. Check your specific center’s policy before the appointment.',
    providersNote: 'The FAA publishes free, official study material: the relevant Airman Certification Standards (ACS), the FAA-H-8083 handbooks, and the Airman Knowledge Testing Supplement with figures. Paid prep is available from King Schools, Sporty’s, Gleim, Gold Seal and others, but is optional.',
    comparison: {
      title: 'FAA certificate ladder (knowledge test only)',
      columns: ['Step', 'Example test', 'Questions', 'Typical prep'],
      rows: [
        { label: 'Sport / Recreational', values: ['SPA / RPA', '40-50', '2-6 weeks'] },
        { label: 'Private', values: ['PAR', '60', '6-12 weeks'] },
        { label: 'Instrument', values: ['IRA', '60', '4-8 weeks'] },
        { label: 'Commercial', values: ['CAX', '100', '8-16 weeks'] },
        { label: 'ATP', values: ['ATM', '125', '10-20 weeks'] }
      ]
    },
    orgFaqs: [
      { q: 'Who actually charges the $175 knowledge-test fee?', a: 'PSI Services, the FAA’s testing contractor, charges the $175 when you schedule. The FAA charges nothing for the application, the background check or the certificate itself.' },
      { q: 'Is the knowledge test the same as the checkride?', a: 'No. The knowledge test is the computer-based written exam. Earning a certificate also requires a practical test (flight test or oral exam) with a Designated Pilot Examiner (DPE) or FAA inspector.' }
    ],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'faa-adx-aircraft-dispatcher',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question written that qualifies you to plan and release flights as a certified aircraft dispatcher.',
    description: 'The Aircraft Dispatcher Knowledge Test (ADX) is the FAA written exam required for the aircraft dispatcher certificate, the ground-based partner to the captain who shares legal responsibility for a flight. It covers meteorology, flight planning, aircraft performance, mass and balance, and Part 121 airline operating rules. Dispatchers work for airlines and charter operators, and passing this test is the academic gate before the dispatcher practical (system) exam. It sits at the top of the career ladder for those who want aviation authority without flying the line.',
    quickAnswer: {
      summary: 'The ADX is an 80-question, computer-based FAA knowledge test that you schedule through PSI for a $175 fee and must pass at 70%. It covers weather, flight planning, performance and airline operations, and you have about 3 hours to finish. Passing it qualifies you to attempt the dispatcher practical test.',
      advantages: [
        'Grants an FAA certificate with real airline authority and legal flight-release responsibility',
        'A ground career in aviation that does not require being a pilot',
        'Strong resume credential for airline operations, control centers and dispatch',
        'One flat $175 test fee with no separate FAA application charge',
        'Pairs with the ATP knowledge areas, useful if you later pursue flying'
      ]
    },
    roadmap: ['Confirm eligibility (18+, English, practical within 24 months)', 'Study weather, planning and Part 121 rules', 'Get any required authorization', 'Pass the 80-question ADX at 70%', 'Complete the dispatcher practical (system) exam'],
    prerequisites: 'You must be at least 18, able to read, speak and understand English, and complete the dispatcher practical test within 24 months of passing the written.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Regulations (Part 121, 91, 61)' },
      { name: 'Meteorology and weather products' },
      { name: 'Aircraft performance and limitations' },
      { name: 'Mass and balance / weight and balance' },
      { name: 'Flight planning and fuel' },
      { name: 'Navigation and air traffic procedures' },
      { name: 'Human factors and CRM' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait after failure plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take ADX', duration: '1 day' },
      { stage: 'Dispatcher practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials / course', fee: '$50-$500' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$675',
      footnote: 'Unlike pilot tests, the dispatcher certificate has no separate DPE flight-test fee, but the practical (system) exam may carry training-center charges.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring airline dispatchers and operations-control-center staff',
    time: '8-16 weeks',
    cost: '$175-$675',
    faqs: [
      { q: 'How hard is the ADX?', a: 'It is one of the harder FAA writtens because it spans airline operations, deep meteorology and performance. Candidates with a dispatch or aviation-weather course background pass far more comfortably than those self-studying from scratch.' },
      { q: 'How long should I study?', a: 'Most candidates spend 8-16 weeks, often inside a formal dispatcher program, because the volume of weather and Part 121 material is large. A structured course shortens the path.' },
      { q: 'Does the ADX expire?', a: 'Yes. A passing score is valid for 24 calendar months, and you must complete the dispatcher practical test within that window or retake the written.' },
      { q: 'Is it worth it?', a: 'For anyone targeting airline dispatch or operations careers it is the mandatory credential, and dispatchers share flight-release authority with captains, a role respected across the industry.' },
      { q: 'How do I schedule it?', a: 'Get an FTN from IACRA, create a PSI account at faa.psiexams.com, select ADX, pay $175 and pick a center. No instructor endorsement is required for the dispatcher written.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass, $175 PSI fee',
      'Required for the FAA aircraft dispatcher certificate',
      'Covers weather, flight planning, performance and Part 121 rules',
      'Valid 24 months; must be followed by the practical exam'
    ],
    relatedSlugs: ['faa-atm-atp-multiengine-airplane', 'faa-cax-commercial-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-arh-atp-helicopter-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question add-on written for ATP-rated pilots picking up the rotorcraft-helicopter category.',
    description: 'The ATP Helicopter Added Rating (ARH) knowledge test is taken by pilots who already hold an Airline Transport Pilot certificate and want to add a rotorcraft-helicopter category and class rating. Because the applicant already holds an ATP, the test focuses only on the helicopter-specific gaps rather than re-covering airplane transport material. It is a shorter, targeted exam that supports careers flying helicopters under Part 135 or 121 operations. Treat it as a bridge test, not a full ATP rewrite.',
    quickAnswer: {
      summary: 'The ARH is a 50-question, computer-based FAA test for current ATP holders adding a helicopter rating, scheduled via PSI for $175 and passed at 70%. You get about 2 hours and it covers helicopter systems, performance and operations. No full ATP rewrite is required because you already hold the ATP certificate.',
      advantages: [
        'Adds helicopter category to an existing ATP certificate',
        'Much shorter than the full ATH (50 vs 80 questions)',
        'Supports Part 135 and 121 helicopter careers',
        'Same flat $175 PSI fee as every FAA knowledge test',
        'Builds on knowledge you already proved on the ATP'
      ]
    },
    roadmap: ['Hold an ATP certificate', 'Study helicopter-specific gaps', 'Schedule ARH with PSI', 'Pass 50 questions at 70%', 'Complete the helicopter ATP practical'],
    prerequisites: 'You must already hold an Airline Transport Pilot certificate; this test only adds the rotorcraft-helicopter rating.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter aerodynamics and systems' },
      { name: 'Helicopter performance and weight and balance' },
      { name: 'Rotorcraft weather and operations' },
      { name: 'Part 135/121 helicopter rules' },
      { name: 'Helicopter emergency procedures' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take ARH', duration: '1 day' },
      { stage: 'Helicopter ATP practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes helicopter flight-training and DPE practical-test costs, which vary by provider.'
    },
    difficulty: 'Moderate',
    audience: 'ATP-rated pilots adding a helicopter category',
    time: '3-6 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the ARH?', a: 'Easier than the full ATH because it assumes you already hold an ATP and only tests the helicopter-specific material. Pilots with helicopter time find it straightforward.' },
      { q: 'How long to study?', a: 'Plan 3-6 weeks if you already fly helicopters, focusing on the gaps your airplane ATP did not cover.' },
      { q: 'Does it expire?', a: 'Yes, like all FAA writtens it is valid 24 calendar months; finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes if your career needs helicopter flying at the ATP level, such as tour, offshore or corporate rotorcraft operations under Part 135 or 121.' },
      { q: 'How do I schedule it?', a: 'Use your existing FTN, log into faa.psiexams.com, select ARH, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '50 questions, about 2 hours, 70% to pass',
      'For current ATP holders only',
      'Adds rotorcraft-helicopter category',
      'Same $175 PSI fee and 24-month validity'
    ],
    relatedSlugs: ['faa-ath-atp-helicopter', 'faa-atm-atp-multiengine-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ach-atp-helicopter-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that turns a Canadian ATP helicopter licence into an FAA certificate.',
    description: 'The ATP Helicopter Canadian Conversion (ACH) knowledge test lets a holder of a Canadian airline transport helicopter licence obtain the equivalent FAA Airline Transport Pilot certificate without sitting the full U.S. test. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada rules. It exists under the FAA’s foreign-licence conversion path and is far shorter than the standard ATH. This is a recognition route, not a from-scratch certification.',
    quickAnswer: {
      summary: 'The ACH is a 40-question conversion test for Canadian ATP helicopter licence holders seeking the FAA equivalent, booked through PSI for $175 and passed at 70%. It reviews the U.S. rules and airspace that differ from Canadian practice and runs about 2 hours. It is a recognition path, not a full rewrite of the ATH.',
      advantages: [
        'Converts a Canadian ATP helicopter licence to an FAA certificate',
        'Only 40 questions versus 80 on the full ATH',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Opens U.S. helicopter career options'
      ]
    },
    roadmap: ['Hold a Canadian ATP helicopter licence', 'Verify conversion eligibility', 'Schedule ACH via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian airline transport helicopter licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91/135/121)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Helicopter performance under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take ACH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Additional FAA processing or practical steps for the foreign licence conversion may apply; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian ATP helicopter licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the ACH?', a: 'Moderate. You already hold the Canadian ATP, so the test mainly checks your knowledge of U.S.-specific rules and airspace rather than core helicopter theory.' },
      { q: 'How long to study?', a: 'Two to four weeks of focused study on Part 61/91/135/121 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, it is valid 24 calendar months like every FAA knowledge test.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly helicopters professionally in the U.S.; it converts your hard-earned Canadian licence into an FAA certificate efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select ACH, pay $175 and book a center; your Canadian licence is the authorization.' }
    ],
    summaryPoints: [
      '40 questions, about 2 hours, 70% to pass',
      'Converts a Canadian ATP helicopter licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-ath-atp-helicopter', 'faa-acm-atp-multiengine-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ath-atp-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question rotorcraft ATP written for pilots aiming at the top of the helicopter career ladder.',
    description: 'The ATP Helicopter (ATH) knowledge test is the FAA written required for the Airline Transport Pilot certificate in the rotorcraft-helicopter category, the highest pilot credential available. It examines helicopter aerodynamics, performance, weather, air carrier operations and the judgment expected of a captain. It is a prerequisite for flying helicopters under Part 121 or as a captain under Part 135, and is taken after meeting the ATP aeronautical-experience requirements. Compared with the airplane ATM, it is shorter but no less demanding on rotorcraft theory.',
    quickAnswer: {
      summary: 'The ATH is an 80-question, computer-based FAA test for the rotorcraft-helicopter ATP certificate, scheduled via PSI for $175 and passed at 70%. You have about 3 hours covering helicopter aerodynamics, performance, weather and air-carrier operations. Passing it is required before the ATP helicopter practical test.',
      advantages: [
        'Highest-level FAA pilot certificate in the helicopter category',
        'Required to captain helicopters under Part 121 or Part 135',
        'Signals command-level aeronautical judgment',
        'Flat $175 PSI fee',
        'Pairs with airplane ATP for full multi-category authority'
      ]
    },
    roadmap: ['Meet ATP aeronautical experience', 'Study helicopter ATP material', 'Get endorsement if required', 'Pass 80-question ATH at 70%', 'Complete the ATP helicopter practical'],
    prerequisites: 'You must meet the ATP aeronautical-experience and age requirements (generally 23, with the required helicopter hours) before taking the practical; the written may be taken earlier.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter aerodynamics and systems' },
      { name: 'Helicopter performance and weight and balance' },
      { name: 'Meteorology and helicopter weather' },
      { name: 'Part 135/121 air carrier operations' },
      { name: 'Crew resource management' },
      { name: 'Regulations (Part 61/91/135/121)' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Build hours', duration: 'varies' },
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take ATH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'ATP practical (DPE)', fee: '$800-$1,500' }
      ],
      total: '$175 up to ~$1,800',
      footnote: 'Excludes helicopter flight training needed to reach the ATP experience minimums.'
    },
    difficulty: 'Hard',
    audience: 'Helicopter pilots pursuing the ATP certificate',
    time: '8-16 weeks',
    cost: '$175-$1,800',
    faqs: [
      { q: 'How hard is the ATH?', a: 'Hard. It is the top certificate written and expects command-level understanding of helicopter performance, weather and air-carrier rules. Candidates with turbine and multi-crew experience do best.' },
      { q: 'How long to study?', a: 'Most spend 8-16 weeks on top of already holding commercial and instrument knowledge, because the bar is command judgment, not just facts.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the ATP practical within that window.' },
      { q: 'Is it worth it?', a: 'Essential for any helicopter captain role at an airline or Part 135 operator, and it is the credential that lets you act as PIC under Part 121.' },
      { q: 'How do I schedule it?', a: 'Via faa.psiexams.com with your FTN, select ATH, pay $175 and choose a center; confirm any endorsement need with your instructor.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass',
      'Top rotorcraft-helicopter pilot certificate',
      'Covers performance, weather and air-carrier ops',
      'Valid 24 months; precedes the ATP practical'
    ],
    relatedSlugs: ['faa-arh-atp-helicopter-added-rating', 'faa-atm-atp-multiengine-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-acm-atp-multiengine-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question conversion written that maps a Canadian ATP aeroplane licence to an FAA multiengine ATP.',
    description: 'The ATP Multiengine Airplane Canadian Conversion (ACM) knowledge test allows holders of a Canadian airline transport pilot aeroplane licence to obtain the equivalent FAA Airline Transport Pilot multiengine certificate. It is a 60-question conversion exam reviewing the U.S.-specific regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian ATP from sitting the full 125-question ATM. The test supports pilots moving into U.S. airline or corporate multiengine work.',
    quickAnswer: {
      summary: 'The ACM is a 60-question conversion test for Canadian ATP aeroplane licence holders seeking the FAA multiengine ATP, booked through PSI for $175 and passed at 70%. It covers U.S. rules, airspace and procedures that differ from Canadian practice and runs about 2.5 hours. It is a recognition path, not the full ATM.',
      advantages: [
        'Converts a Canadian ATP aeroplane licence to an FAA certificate',
        '60 questions versus 125 on the full ATM',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Opens U.S. multiengine airline careers'
      ]
    },
    roadmap: ['Hold a Canadian ATP aeroplane licence', 'Verify conversion eligibility', 'Schedule ACM via PSI', 'Pass 60 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian airline transport pilot aeroplane licence and meet FAA conversion requirements; the foreign licence is your authorization.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91/121)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Transport-category performance under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '3-6 weeks' },
      { stage: 'Take ACM', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian ATP aeroplane licence holders',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the ACM?', a: 'Moderate. It assumes you already hold the Canadian ATP and mainly checks U.S.-specific rules and airspace rather than core transport theory.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91/121 and U.S. airspace is typically enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly multiengine professionally in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select ACM, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Converts a Canadian ATP aeroplane licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-atm-atp-multiengine-airplane', 'faa-ach-atp-helicopter-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-atm-atp-multiengine-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 125-question, four-hour ATP written that is the gateway to flying for the airlines.',
    description: 'The ATP Multiengine Airplane (ATM) knowledge test, commonly called the ATP written, is the FAA exam required for the Airline Transport Pilot certificate in multiengine airplanes, the credential needed to act as an airline captain. It is the longest and most demanding FAA written, with 125 questions over four hours covering transport-category performance, meteorology, crew resource management and Part 121 operations. It is taken after meeting the ATP aeronautical-experience minimums and is required before the ATP practical test. It sits at the top of the pilot certificate ladder.',
    quickAnswer: {
      summary: 'The ATM is a 125-question, four-hour computer-based FAA test for the multiengine ATP certificate, scheduled via PSI for $175 and passed at 70%. It covers transport performance, weather, CRM and Part 121 operations. Passing it is mandatory before the ATP practical and is the standard airline-entry written.',
      advantages: [
        'Required to captain airliners under Part 121',
        'The definitive top-rung pilot certificate',
        'Recognized by every U.S. airline',
        'Flat $175 PSI fee',
        'Builds directly on commercial and instrument knowledge'
      ]
    },
    roadmap: ['Meet ATP aeronautical experience', 'Study transport performance and Part 121', 'Get endorsement if required', 'Pass 125-question ATM at 70%', 'Complete the ATP practical'],
    prerequisites: 'You must meet the ATP aeronautical-experience and age requirements (generally 23, with the required multiengine hours) before the practical; the written may be taken earlier. Many take it through an ATP-CTP course.',
    examMeta: {
      questions: '125',
      time: '4.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Transport-category aircraft performance' },
      { name: 'Meteorology and high-altitude weather' },
      { name: 'Crew resource management (CRM)' },
      { name: 'Part 121 air carrier operations' },
      { name: 'Regulations (Part 61/91/121)' },
      { name: 'Navigation and flight planning' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'ATP-CTP course (if used)', duration: '1-2 weeks' },
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take ATM', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'ATP-CTP course (often required)', fee: '$3,000-$5,000' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'ATP practical (DPE)', fee: '$1,500-$2,500' }
      ],
      total: '$175 up to ~$7,500',
      footnote: 'Airlines and many bridge programs cover the ATP-CTP and practical costs; the written fee alone is $175.'
    },
    difficulty: 'Hard',
    audience: 'Airline-bound multiengine pilots',
    time: '6-12 weeks',
    cost: '$175-$7,500',
    faqs: [
      { q: 'How hard is the ATM?', a: 'Hard. With 125 questions over four hours and command-level content, it is the toughest FAA written. Most candidates take an ATP-CTP course first and target well above 70% because airlines see the score.' },
      { q: 'How long to study?', a: 'Six to twelve weeks depending on experience, plus the ATP-CTP course that many employers require before the practical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must complete the ATP practical within that window.' },
      { q: 'Is it worth it?', a: 'It is mandatory for any airline captain role, and a strong score helps at competitive carriers, so it is absolutely worth it for that path.' },
      { q: 'How do I schedule it?', a: 'Via faa.psiexams.com with your FTN, select ATM, pay $175 and choose a center; confirm endorsement or ATP-CTP needs with your instructor.' }
    ],
    summaryPoints: [
      '125 questions, 4 hours, 70% to pass',
      'Required for the airline transport pilot certificate',
      'Covers transport performance, weather and Part 121',
      'Valid 24 months; precedes the ATP practical'
    ],
    relatedSlugs: ['faa-cax-commercial-pilot-airplane', 'faa-ira-instrument-rating-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-asc-atp-single-engine-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that turns a Canadian ATP aeroplane licence into an FAA single-engine ATP.',
    description: 'The ATP Single Engine Airplane Canadian Conversion (ASC) knowledge test lets a holder of a Canadian airline transport pilot aeroplane licence obtain the equivalent FAA single-engine airplane ATP certificate. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian ATP from the full ATS. It supports pilots who need single-engine ATP authority for U.S. operations.',
    quickAnswer: {
      summary: 'The ASC is a 40-question conversion test for Canadian ATP aeroplane licence holders seeking the FAA single-engine ATP, booked through PSI for $175 and passed at 70%. It reviews U.S. rules and airspace that differ from Canadian practice and runs about 2 hours. It is a recognition path, not the full ATS.',
      advantages: [
        'Converts a Canadian ATP aeroplane licence to an FAA single-engine ATP',
        'Only 40 questions versus 90 on the full ATS',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Opens U.S. single-engine ATP options'
      ]
    },
    roadmap: ['Hold a Canadian ATP aeroplane licence', 'Verify conversion eligibility', 'Schedule ASC via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian airline transport pilot aeroplane licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91/121)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Single-engine performance under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take ASC', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian ATP aeroplane licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the ASC?', a: 'Moderate. It assumes the Canadian ATP and mainly tests U.S.-specific rules and airspace rather than core transport theory.' },
      { q: 'How long to study?', a: 'Two to four weeks focused on Part 61/91/121 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like every FAA knowledge test.' },
      { q: 'Is it worth it?', a: 'Worth it if you need single-engine ATP authority in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select ASC, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian ATP aeroplane licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-ats-atp-single-engine-airplane', 'faa-acm-atp-multiengine-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ats-atp-single-engine-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 90-question ATP written for single-engine airplane command authority.',
    description: 'The ATP Single Engine Airplane (ATS) knowledge test is the FAA written required for the Airline Transport Pilot certificate in the single-engine airplane category. It examines advanced aerodynamics, weather, navigation and the regulations expected of a single-engine captain, over 90 questions. It is the single-engine counterpart to the multiengine ATM and is required before the single-engine ATP practical test. It suits pilots whose turbine single-engine or corporate work demands ATP-level certification without a multiengine rating.',
    quickAnswer: {
      summary: 'The ATS is a 90-question, computer-based FAA test for the single-engine airplane ATP certificate, scheduled via PSI for $175 and passed at 70%. You have about 3 hours covering advanced aerodynamics, weather, navigation and regulations. Passing it precedes the single-engine ATP practical test.',
      advantages: [
        'ATP-level certificate for single-engine airplanes',
        'Required for single-engine command roles',
        'Shorter than the 125-question ATM',
        'Flat $175 PSI fee',
        'Signals command-level aeronautical judgment'
      ]
    },
    roadmap: ['Meet ATP aeronautical experience', 'Study single-engine ATP material', 'Get endorsement if required', 'Pass 90-question ATS at 70%', 'Complete the ATP practical'],
    prerequisites: 'You must meet the ATP aeronautical-experience and age requirements before the practical; the written may be taken earlier.',
    examMeta: {
      questions: '90',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Advanced aerodynamics' },
      { name: 'Meteorology and weather' },
      { name: 'Navigation and flight planning' },
      { name: 'Part 121/135 operations' },
      { name: 'Regulations (Part 61/91)' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Build hours', duration: 'varies' },
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take ATS', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'ATP practical (DPE)', fee: '$1,200-$2,000' }
      ],
      total: '$175 up to ~$2,500',
      footnote: 'Excludes flight training needed to reach the ATP experience minimums.'
    },
    difficulty: 'Hard',
    audience: 'Single-engine pilots pursuing the ATP certificate',
    time: '6-12 weeks',
    cost: '$175-$2,500',
    faqs: [
      { q: 'How hard is the ATS?', a: 'Hard, but with 90 questions it is somewhat shorter than the ATM. It expects command-level understanding of aerodynamics, weather and operations.' },
      { q: 'How long to study?', a: 'Six to twelve weeks on top of commercial and instrument knowledge is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes if your flying requires single-engine ATP authority, such as certain corporate or turbine single operations.' },
      { q: 'How do I schedule it?', a: 'Via faa.psiexams.com with your FTN, select ATS, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '90 questions, 3 hours, 70% to pass',
      'Single-engine airplane ATP certificate',
      'Covers aerodynamics, weather and operations',
      'Valid 24 months; precedes the ATP practical'
    ],
    relatedSlugs: ['faa-atm-atp-multiengine-airplane', 'faa-cax-commercial-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-ccp-commercial-pilot-airplane-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that swaps a Canadian commercial aeroplane licence for an FAA commercial certificate.',
    description: 'The Commercial Pilot Airplane Canadian Conversion (CCP) knowledge test converts a Canadian commercial pilot aeroplane licence into an FAA commercial pilot certificate. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian commercial pilot from the full 100-question CAX. The test supports pilots moving into paid U.S. flying under Part 91 or 135.',
    quickAnswer: {
      summary: 'The CCP is a 40-question conversion test for Canadian commercial aeroplane licence holders seeking the FAA commercial certificate, booked through PSI for $175 and passed at 70%. It reviews U.S. rules and airspace differences and runs about 2 hours. It is a recognition path, not the full CAX.',
      advantages: [
        'Converts a Canadian commercial aeroplane licence to an FAA certificate',
        'Only 40 questions versus 100 on the full CAX',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables paid flying in the U.S.'
      ]
    },
    roadmap: ['Hold a Canadian commercial aeroplane licence', 'Verify conversion eligibility', 'Schedule CCP via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian commercial pilot aeroplane licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91/135)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Commercial privileges under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take CCP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian commercial aeroplane licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the CCP?', a: 'Moderate. It assumes the Canadian commercial licence and mainly checks U.S.-specific rules and airspace rather than core commercial theory.' },
      { q: 'How long to study?', a: 'Two to four weeks focused on Part 61/91/135 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like every FAA knowledge test.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly for compensation in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select CCP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian commercial aeroplane licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-cax-commercial-pilot-airplane', 'faa-acm-atp-multiengine-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-cax-commercial-pilot-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written that unlocks paid flying in airplanes.',
    description: 'The Commercial Pilot Airplane (CAX) knowledge test, often called the commercial written, is the FAA exam required for the commercial pilot certificate in airplanes. It has 100 questions covering commercial privileges, complex-aircraft systems, performance charts and Part 135 rules over about 3 hours. Passing it is required before the commercial practical test and is the step that lets a pilot fly for compensation or hire. It builds directly on the private and instrument knowledge already earned.',
    quickAnswer: {
      summary: 'The CAX is a 100-question, computer-based FAA test for the commercial pilot airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers commercial privileges, systems, performance and Part 135 rules and runs about 3 hours. Passing it precedes the commercial practical test.',
      advantages: [
        'Grants the certificate that allows flying for compensation',
        'Recognized by charter and corporate operators',
        'Builds on private and instrument knowledge',
        'Flat $175 PSI fee',
        'A standard rung toward the ATP'
      ]
    },
    roadmap: ['Hold private and instrument', 'Study commercial systems and Part 135', 'Get instructor endorsement', 'Pass 100-question CAX at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate and meet the commercial aeronautical-experience requirements before the practical; the written may be taken earlier with an instructor endorsement.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Regulations and commercial privileges' },
      { name: 'Aircraft systems (complex/technically advanced)' },
      { name: 'Performance and weight and balance' },
      { name: 'Part 135 operating rules' },
      { name: 'Meteorology' },
      { name: 'Navigation and flight planning' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CAX', duration: '1 day' },
      { stage: 'Commercial practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$600-$1,200' }
      ],
      total: '$175 up to ~$1,500',
      footnote: 'Excludes the airplane flight training needed to reach the commercial experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private pilots moving to paid airplane flying',
    time: '8-16 weeks',
    cost: '$175-$1,500',
    faqs: [
      { q: 'How hard is the CAX?', a: 'Challenging but very manageable if you already hold the instrument rating, because much material overlaps. The 100 questions test systems and Part 135 depth beyond the private level.' },
      { q: 'How long to study?', a: 'Most spend 8-16 weeks alongside flight training, since the certificate has real experience hour requirements.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes if you want to be paid to fly; the commercial certificate is the legal minimum for compensation or hire.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CAX, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Required for the commercial pilot airplane certificate',
      'Covers systems, performance and Part 135',
      'Valid 24 months; precedes the commercial practical'
    ],
    relatedSlugs: ['faa-par-private-pilot-airplane', 'faa-atm-atp-multiengine-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-cla-commercial-pilot-airship',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written for paying work in lighter-than-air airships.',
    description: 'The Commercial Pilot Airship (CLA) knowledge test is the FAA written required for the commercial pilot certificate in the airship class of lighter-than-air aircraft. It has 100 questions covering airship aerodynamics, ballonet management, ground handling and commercial operating rules over about 3 hours. Passing it precedes the airship commercial practical test and allows compensated flying in airships. It is a niche certificate for a small but specialized segment of aviation.',
    quickAnswer: {
      summary: 'The CLA is a 100-question, computer-based FAA test for the commercial pilot airship certificate, scheduled via PSI for $175 and passed at 70%. It covers airship aerodynamics, ballonets, ground handling and commercial rules and runs about 3 hours. Passing it precedes the airship commercial practical.',
      advantages: [
        'Commercial authority in the airship class',
        'Enables paid lighter-than-air flying',
        'Specialized, low-competition credential',
        'Flat $175 PSI fee',
        'Builds on private pilot airship knowledge'
      ]
    },
    roadmap: ['Hold private pilot airship', 'Study airship systems and commercial rules', 'Get endorsement', 'Pass 100-question CLA at 70%', 'Complete the airship commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with an airship rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Airship aerodynamics and ballonets' },
      { name: 'Ground handling and mooring' },
      { name: 'Performance and envelope pressure' },
      { name: 'Commercial operating rules' },
      { name: 'Meteorology for lighter-than-air' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CLA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$600-$1,200' }
      ],
      total: '$175 up to ~$1,400',
      footnote: 'Airship flight training availability is limited, which affects total cost more than the written fee.'
    },
    difficulty: 'Challenging',
    audience: 'Private airship pilots going commercial',
    time: '8-16 weeks',
    cost: '$175-$1,400',
    faqs: [
      { q: 'How hard is the CLA?', a: 'Challenging mainly because airship material is specialized and reference texts are scarce; the question count equals other commercial tests.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks, often longer if you have little lighter-than-air experience.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it only for those targeting airship work such as advertising, tourism or experimental flight, where qualified pilots are few.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CLA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Commercial pilot airship certificate',
      'Covers airship aerodynamics and ballonets',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pla-private-pilot-airship', 'faa-cbh-commercial-pilot-balloon-hot-air'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-cbg-commercial-pilot-balloon-gas',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question commercial written for paid gas-balloon flying.',
    description: 'The Commercial Pilot Balloon Gas (CBG) knowledge test is the FAA written required for the commercial pilot certificate in the gas balloon class. It has 60 questions covering gas balloon systems, ballast management, weather and commercial privileges over about 2.5 hours. Passing it precedes the gas balloon commercial practical and lets a pilot carry passengers or cargo for compensation. It is a niche lighter-than-air certificate.',
    quickAnswer: {
      summary: 'The CBG is a 60-question, computer-based FAA test for the commercial pilot gas balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers gas balloon systems, ballast and weather and runs about 2.5 hours. Passing it precedes the commercial practical.',
      advantages: [
        'Commercial authority in the gas balloon class',
        'Enables paid balloon flights',
        'Specialized lighter-than-air credential',
        'Flat $175 PSI fee',
        'Builds on private balloon knowledge'
      ]
    },
    roadmap: ['Hold private pilot balloon', 'Study gas systems and commercial rules', 'Get endorsement', 'Pass 60-question CBG at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a balloon rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gas balloon systems and ballast' },
      { name: 'Buoyancy and altitude control' },
      { name: 'Meteorology for ballooning' },
      { name: 'Commercial operating privileges' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CBG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$1,000',
      footnote: 'Gas balloon training opportunities are rare, which shapes total cost more than the written fee.'
    },
    difficulty: 'Moderate',
    audience: 'Private balloon pilots going commercial',
    time: '6-12 weeks',
    cost: '$175-$1,000',
    faqs: [
      { q: 'How hard is the CBG?', a: 'Moderate. The question count is lower than airplane commercial tests, but gas balloon physics and ballast management need focused study.' },
      { q: 'How long to study?', a: 'Six to twelve weeks alongside balloon time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for balloon pilots who want to be paid to fly passengers or for commercial balloon operators.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CBG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Commercial pilot gas balloon certificate',
      'Covers gas systems and ballast',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pbg-private-pilot-balloon-gas', 'faa-cbh-commercial-pilot-balloon-hot-air'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-cbh-commercial-pilot-balloon-hot-air',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written for paid hot-air balloon flying.',
    description: 'The Commercial Pilot Balloon Hot Air (CBH) knowledge test is the FAA written required for the commercial pilot certificate in the hot air balloon class. It has 100 questions covering envelopes, burners, launch-site selection and carrying passengers for compensation over about 3 hours. Passing it precedes the hot air balloon commercial practical and is the certificate most commercial balloon operators require. It is the most common balloon commercial rating.',
    quickAnswer: {
      summary: 'The CBH is a 100-question, computer-based FAA test for the commercial pilot hot air balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers envelopes, burners, launch sites and paid-passenger rules and runs about 3 hours. Passing it precedes the commercial practical.',
      advantages: [
        'Commercial authority in the hot air balloon class',
        'Required by most paid balloon operators',
        'Builds on private balloon knowledge',
        'Flat $175 PSI fee',
        'Enables passenger-for-hire flights'
      ]
    },
    roadmap: ['Hold private pilot balloon', 'Study hot air systems and commercial rules', 'Get endorsement', 'Pass 100-question CBH at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a balloon rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Hot air balloon envelopes and burners' },
      { name: 'Launch and landing site selection' },
      { name: 'Meteorology and surface winds' },
      { name: 'Carrying passengers for compensation' },
      { name: 'Regulations and privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CBH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$1,000',
      footnote: 'Excludes balloon flight training needed for the commercial experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private balloon pilots going commercial',
    time: '8-16 weeks',
    cost: '$175-$1,000',
    faqs: [
      { q: 'How hard is the CBH?', a: 'Challenging because of the 100-question length, but the material is accessible if you already fly balloons and study burner and weather detail.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside balloon time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for anyone who wants to be paid to fly passengers, since most commercial balloon work requires this rating.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CBH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Commercial pilot hot air balloon certificate',
      'Covers envelopes, burners and paid-passenger rules',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pbh-private-pilot-balloon-hot-air', 'faa-cbg-commercial-pilot-balloon-gas'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-cgx-commercial-pilot-glider',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written for paid glider flying.',
    description: 'The Commercial Pilot Glider (CGX) knowledge test is the FAA written required for the commercial pilot certificate in gliders. It has 100 questions covering soaring meteorology, tow procedures, glider performance and commercial operating limitations over about 3 hours. Passing it precedes the glider commercial practical and allows compensated glider instruction and flights. It is a focused certificate for the soaring community.',
    quickAnswer: {
      summary: 'The CGX is a 100-question, computer-based FAA test for the commercial pilot glider certificate, scheduled via PSI for $175 and passed at 70%. It covers soaring weather, tow procedures, performance and commercial limits and runs about 3 hours. Passing it precedes the commercial practical.',
      advantages: [
        'Commercial authority in gliders',
        'Enables paid glider instruction and flights',
        'Builds on private glider knowledge',
        'Flat $175 PSI fee',
        'Specialized soaring credential'
      ]
    },
    roadmap: ['Hold private pilot glider', 'Study soaring weather and commercial rules', 'Get endorsement', 'Pass 100-question CGX at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a glider rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Soaring meteorology and thermals' },
      { name: 'Aerotow and winch launch procedures' },
      { name: 'Glider performance' },
      { name: 'Commercial operating limitations' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CGX', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$1,000',
      footnote: 'Excludes glider flight training needed for the commercial experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private glider pilots going commercial',
    time: '8-16 weeks',
    cost: '$175-$1,000',
    faqs: [
      { q: 'How hard is the CGX?', a: 'Challenging due to the 100-question length and soaring-weather depth, but approachable for active glider pilots.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside glider time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for glider pilots who want to instruct for pay or fly commercially in the soaring community.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CGX, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Commercial pilot glider certificate',
      'Covers soaring weather and tow procedures',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pgl-private-pilot-glider', 'faa-fig-flight-instructor-glider'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-crg-commercial-pilot-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written for paid gyroplane flying.',
    description: 'The Commercial Pilot Gyroplane (CRG) knowledge test is the FAA written required for the commercial pilot certificate in gyroplanes. It has 100 questions covering autorotation, rotor systems, gyroplane performance and commercial pilot privileges over about 3 hours. Passing it precedes the gyroplane commercial practical and allows compensated gyroplane flying. It is a niche rotorcraft certificate.',
    quickAnswer: {
      summary: 'The CRG is a 100-question, computer-based FAA test for the commercial pilot gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers autorotation, rotor systems, performance and commercial privileges and runs about 3 hours. Passing it precedes the commercial practical.',
      advantages: [
        'Commercial authority in gyroplanes',
        'Enables paid gyroplane flying',
        'Builds on private gyroplane knowledge',
        'Flat $175 PSI fee',
        'Specialized rotorcraft credential'
      ]
    },
    roadmap: ['Hold private pilot gyroplane', 'Study rotor systems and commercial rules', 'Get endorsement', 'Pass 100-question CRG at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a gyroplane rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane rotor systems and autorotation' },
      { name: 'Gyroplane performance' },
      { name: 'Commercial pilot privileges' },
      { name: 'Meteorology' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CRG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$500-$900' }
      ],
      total: '$175 up to ~$1,100',
      footnote: 'Gyroplane training availability is limited, which affects total cost more than the written fee.'
    },
    difficulty: 'Challenging',
    audience: 'Private gyroplane pilots going commercial',
    time: '8-16 weeks',
    cost: '$175-$1,100',
    faqs: [
      { q: 'How hard is the CRG?', a: 'Challenging because of the 100-question length and rotor-system detail, but manageable for active gyroplane pilots.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside gyroplane time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for gyroplane pilots who want to fly for compensation or instruct.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CRG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Commercial pilot gyroplane certificate',
      'Covers autorotation and rotor systems',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-prg-private-pilot-gyroplane', 'faa-frg-flight-instructor-gyroplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-cch-commercial-pilot-helicopter-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that turns a Canadian commercial helicopter licence into an FAA certificate.',
    description: 'The Commercial Pilot Helicopter Canadian Conversion (CCH) knowledge test converts a Canadian commercial helicopter licence into an FAA commercial pilot rotorcraft certificate. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian commercial helicopter pilot from the full 100-question CRH. It supports pilots moving into paid U.S. helicopter work.',
    quickAnswer: {
      summary: 'The CCH is a 40-question conversion test for Canadian commercial helicopter licence holders seeking the FAA commercial certificate, booked through PSI for $175 and passed at 70%. It reviews U.S. rules and airspace differences and runs about 2 hours. It is a recognition path, not the full CRH.',
      advantages: [
        'Converts a Canadian commercial helicopter licence to an FAA certificate',
        'Only 40 questions versus 100 on the full CRH',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables paid U.S. helicopter flying'
      ]
    },
    roadmap: ['Hold a Canadian commercial helicopter licence', 'Verify conversion eligibility', 'Schedule CCH via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian commercial pilot helicopter licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91/135)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Commercial privileges under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take CCH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian commercial helicopter licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the CCH?', a: 'Moderate. It assumes the Canadian commercial licence and mainly checks U.S.-specific rules and airspace rather than core helicopter theory.' },
      { q: 'How long to study?', a: 'Two to four weeks focused on Part 61/91/135 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like every FAA knowledge test.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly helicopters for pay in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select CCH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian commercial helicopter licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-crh-commercial-pilot-helicopter', 'faa-ach-atp-helicopter-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-crh-commercial-pilot-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question commercial written for paid helicopter flying.',
    description: 'The Commercial Pilot Helicopter (CRH) knowledge test is the FAA written required for the commercial pilot certificate in helicopters. It has 100 questions covering helicopter performance, weight and balance, external loads and commercial rotorcraft operating rules over about 3 hours. Passing it precedes the helicopter commercial practical test and is the certificate that lets a pilot fly helicopters for compensation. It builds on the private helicopter and instrument knowledge already earned.',
    quickAnswer: {
      summary: 'The CRH is a 100-question, computer-based FAA test for the commercial pilot helicopter certificate, scheduled via PSI for $175 and passed at 70%. It covers performance, weight and balance, external loads and Part 135 rules and runs about 3 hours. Passing it precedes the commercial practical test.',
      advantages: [
        'Grants the certificate that allows flying helicopters for pay',
        'Required by charter and offshore operators',
        'Builds on private and instrument knowledge',
        'Flat $175 PSI fee',
        'A rung toward the ATP helicopter'
      ]
    },
    roadmap: ['Hold private helicopter and instrument', 'Study performance and Part 135', 'Get instructor endorsement', 'Pass 100-question CRH at 70%', 'Complete the commercial practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a rotorcraft rating and meet commercial experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter performance and weight and balance' },
      { name: 'External-load operations' },
      { name: 'Part 135 operating rules' },
      { name: 'Meteorology' },
      { name: 'Regulations and privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take CRH', duration: '1 day' },
      { stage: 'Commercial practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Commercial practical (DPE)', fee: '$600-$1,200' }
      ],
      total: '$175 up to ~$1,500',
      footnote: 'Excludes helicopter flight training needed to reach the commercial experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private helicopter pilots moving to paid flying',
    time: '8-16 weeks',
    cost: '$175-$1,500',
    faqs: [
      { q: 'How hard is the CRH?', a: 'Challenging but similar in feel to the airplane commercial test; the 100 questions test performance and external-load depth specific to helicopters.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside flight training is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes if you want to be paid to fly helicopters; the commercial certificate is the legal minimum for compensation.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select CRH, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Required for the commercial pilot helicopter certificate',
      'Covers performance and external loads',
      'Valid 24 months; precedes the commercial practical'
    ],
    relatedSlugs: ['faa-prh-private-pilot-helicopter', 'faa-cax-commercial-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-fer-flight-engineer-reciprocating-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question add-on written for flight engineers adding a reciprocating-engine rating.',
    description: 'The Flight Engineer Reciprocating Engine Added Rating (FER) knowledge test is taken by already-certificated flight engineers who want to add a reciprocating-engine class rating to their certificate. It is a 50-question exam covering the reciprocating-engine systems and performance that differ from the engineer’s existing rating. It is a focused add-on test, not a full basic flight engineer rewrite, and supports engineers qualifying on older piston-engine transports.',
    quickAnswer: {
      summary: 'The FER is a 50-question, computer-based FAA test for certificated flight engineers adding a reciprocating-engine class rating, scheduled via PSI for $175 and passed at 70%. It reviews piston powerplant and performance material and runs about 2 hours. It is an add-on, not the full basic exam.',
      advantages: [
        'Adds a reciprocating-engine class to a flight engineer certificate',
        'Only 50 questions versus 80 on the basic',
        'Recognizes an existing flight engineer certificate',
        'Flat $175 PSI fee',
        'Qualifies engineers on piston-engine aircraft'
      ]
    },
    roadmap: ['Hold a flight engineer certificate', 'Study reciprocating-engine material', 'Schedule FER via PSI', 'Pass 50 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight engineer certificate; this test only adds the reciprocating-engine class rating.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Reciprocating engine systems' },
      { name: 'Piston powerplant performance' },
      { name: 'Aircraft systems integration' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FER', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes any practical or training costs for the added rating.'
    },
    difficulty: 'Moderate',
    audience: 'Certificated flight engineers adding a reciprocating rating',
    time: '3-6 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FER?', a: 'Moderate. It assumes you already hold a flight engineer certificate and tests only the reciprocating-engine gaps.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on piston systems is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if your work involves piston-engine transports that require the reciprocating class rating.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select FER, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Adds reciprocating-engine rating to a flight engineer certificate',
      'Focuses on piston systems',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fen-flight-engineer-reciprocating-basic', 'faa-fex-flight-engineer-turbojet-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fen-flight-engineer-reciprocating-basic',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question basic written for the reciprocating flight engineer rating.',
    description: 'The Flight Engineer Reciprocating Engine Basic (FEN) knowledge test is the FAA written required for the basic flight engineer certificate with a reciprocating-engine rating. It has 80 questions covering piston powerplants, aircraft systems and performance over about 3 hours. Passing it precedes the flight engineer practical test and qualifies an engineer to crew piston-engine transports. The flight engineer certificate is a legacy rating now rarely sought but still valid.',
    quickAnswer: {
      summary: 'The FEN is an 80-question, computer-based FAA test for the basic flight engineer reciprocating rating, scheduled via PSI for $175 and passed at 70%. It covers piston powerplants, systems and performance and runs about 3 hours. Passing it precedes the flight engineer practical.',
      advantages: [
        'Basic flight engineer certificate, reciprocating class',
        'Qualifies engineers on piston transports',
        'Flat $175 PSI fee',
        'Recognized legacy airman certificate',
        'Builds toward turbojet/turboprop classes'
      ]
    },
    roadmap: ['Meet flight engineer eligibility', 'Study piston powerplants and systems', 'Get endorsement', 'Pass 80-question FEN at 70%', 'Complete the flight engineer practical'],
    prerequisites: 'You must meet the flight engineer aeronautical-experience requirements before the practical; the written may be taken earlier with an instructor endorsement.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Piston powerplants' },
      { name: 'Aircraft systems' },
      { name: 'Performance and limitations' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FEN', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes practical-test costs; flight engineer training is largely legacy today.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring reciprocating flight engineers',
    time: '8-16 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FEN?', a: 'Challenging because it covers deep piston powerplant and systems theory across 80 questions.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical given the systems depth.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it mainly for those targeting legacy piston transports or completing a full flight engineer certificate; the role is rare in modern airline fleets.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FEN, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass',
      'Basic flight engineer reciprocating rating',
      'Covers piston powerplants and systems',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-fer-flight-engineer-reciprocating-added-rating', 'faa-fex-flight-engineer-turbojet-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fej-flight-engineer-turbojet-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question add-on written for flight engineers adding a turbojet rating.',
    description: 'The Flight Engineer Turbojet Added Rating (FEJ) knowledge test is taken by already-certificated flight engineers who want to add a turbojet class rating. It is a 50-question exam covering turbojet systems and performance that differ from the engineer’s existing rating. It is a focused add-on test supporting engineers qualifying on jet transports, and assumes an existing flight engineer certificate.',
    quickAnswer: {
      summary: 'The FEJ is a 50-question, computer-based FAA test for certificated flight engineers adding a turbojet class rating, scheduled via PSI for $175 and passed at 70%. It reviews turbine systems and jet performance and runs about 2 hours. It is an add-on, not the full basic exam.',
      advantages: [
        'Adds a turbojet class to a flight engineer certificate',
        'Only 50 questions versus 80 on the basic',
        'Recognizes an existing flight engineer certificate',
        'Flat $175 PSI fee',
        'Qualifies engineers on jet transports'
      ]
    },
    roadmap: ['Hold a flight engineer certificate', 'Study turbojet material', 'Schedule FEJ via PSI', 'Pass 50 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight engineer certificate; this test only adds the turbojet class rating.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Turbojet engine systems' },
      { name: 'Jet performance and limitations' },
      { name: 'Aircraft systems integration' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FEJ', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes any practical or training costs for the added rating.'
    },
    difficulty: 'Moderate',
    audience: 'Certificated flight engineers adding a turbojet rating',
    time: '3-6 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FEJ?', a: 'Moderate. It assumes an existing flight engineer certificate and tests only the turbojet gaps.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on turbine systems is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if your work involves jet transports that require the turbojet class rating.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select FEJ, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Adds turbojet rating to a flight engineer certificate',
      'Focuses on turbine systems',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fex-flight-engineer-turbojet-basic', 'faa-fep-flight-engineer-turboprop-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fex-flight-engineer-turbojet-basic',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question basic written for the turbojet flight engineer rating.',
    description: 'The Flight Engineer Turbojet Basic (FEX) knowledge test is the FAA written required for the basic flight engineer certificate with a turbojet rating. It has 80 questions covering turbine engines, pressurization, hydraulics and electrical systems over about 3 hours. Passing it precedes the flight engineer practical test and qualifies an engineer to crew jet transports. The flight engineer certificate is a legacy rating now rarely sought but still valid.',
    quickAnswer: {
      summary: 'The FEX is an 80-question, computer-based FAA test for the basic flight engineer turbojet rating, scheduled via PSI for $175 and passed at 70%. It covers turbine engines, pressurization, hydraulics and electrical systems and runs about 3 hours. Passing it precedes the flight engineer practical.',
      advantages: [
        'Basic flight engineer certificate, turbojet class',
        'Qualifies engineers on jet transports',
        'Flat $175 PSI fee',
        'Recognized legacy airman certificate',
        'Builds toward turboprop classes'
      ]
    },
    roadmap: ['Meet flight engineer eligibility', 'Study turbine systems', 'Get endorsement', 'Pass 80-question FEX at 70%', 'Complete the flight engineer practical'],
    prerequisites: 'You must meet the flight engineer aeronautical-experience requirements before the practical; the written may be taken earlier with an instructor endorsement.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Turbine (turbojet) engines' },
      { name: 'Pressurization and hydraulics' },
      { name: 'Electrical systems' },
      { name: 'Performance and limitations' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FEX', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes practical-test costs; flight engineer training is largely legacy today.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring turbojet flight engineers',
    time: '8-16 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FEX?', a: 'Challenging because it spans turbine engines and multiple aircraft systems across 80 questions.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical given the systems depth.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it mainly for those targeting legacy jet transports or completing a full flight engineer certificate; the role is rare in modern fleets.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FEX, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass',
      'Basic flight engineer turbojet rating',
      'Covers turbine engines and systems',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-fej-flight-engineer-turbojet-added-rating', 'faa-fet-flight-engineer-turboprop-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fep-flight-engineer-turboprop-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question add-on written for flight engineers adding a turboprop rating.',
    description: 'The Flight Engineer Turboprop Added Rating (FEP) knowledge test is taken by already-certificated flight engineers who want to add a turbopropeller class rating. It is a 50-question exam covering turboprop systems and performance that differ from the engineer’s existing rating. It is a focused add-on test supporting engineers qualifying on turboprop transports and assumes an existing flight engineer certificate.',
    quickAnswer: {
      summary: 'The FEP is a 50-question, computer-based FAA test for certificated flight engineers adding a turboprop class rating, scheduled via PSI for $175 and passed at 70%. It reviews propeller control and turbine systems and runs about 2 hours. It is an add-on, not the full basic exam.',
      advantages: [
        'Adds a turboprop class to a flight engineer certificate',
        'Only 50 questions versus 80 on the basic',
        'Recognizes an existing flight engineer certificate',
        'Flat $175 PSI fee',
        'Qualifies engineers on turboprop transports'
      ]
    },
    roadmap: ['Hold a flight engineer certificate', 'Study turboprop material', 'Schedule FEP via PSI', 'Pass 50 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight engineer certificate; this test only adds the turboprop class rating.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Turbopropeller powerplants' },
      { name: 'Propeller control' },
      { name: 'Aircraft systems integration' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FEP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes any practical or training costs for the added rating.'
    },
    difficulty: 'Moderate',
    audience: 'Certificated flight engineers adding a turboprop rating',
    time: '3-6 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FEP?', a: 'Moderate. It assumes an existing flight engineer certificate and tests only the turboprop gaps.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on turboprop systems is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if your work involves turboprop transports that require the turboprop class rating.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select FEP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Adds turboprop rating to a flight engineer certificate',
      'Focuses on propeller control',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fet-flight-engineer-turboprop-basic', 'faa-fex-flight-engineer-turbojet-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fet-flight-engineer-turboprop-basic',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question basic written for the turboprop flight engineer rating.',
    description: 'The Flight Engineer Turboprop Basic (FET) knowledge test is the FAA written required for the basic flight engineer certificate with a turbopropeller rating. It has 80 questions covering turbopropeller powerplants, propeller control and transport aircraft systems over about 3 hours. Passing it precedes the flight engineer practical test and qualifies an engineer to crew turboprop transports. The flight engineer certificate is a legacy rating still valid but rarely sought.',
    quickAnswer: {
      summary: 'The FET is an 80-question, computer-based FAA test for the basic flight engineer turboprop rating, scheduled via PSI for $175 and passed at 70%. It covers turboprop powerplants, propeller control and transport systems and runs about 3 hours. Passing it precedes the flight engineer practical.',
      advantages: [
        'Basic flight engineer certificate, turboprop class',
        'Qualifies engineers on turboprop transports',
        'Flat $175 PSI fee',
        'Recognized legacy airman certificate',
        'Builds toward turbojet classes'
      ]
    },
    roadmap: ['Meet flight engineer eligibility', 'Study turboprop systems', 'Get endorsement', 'Pass 80-question FET at 70%', 'Complete the flight engineer practical'],
    prerequisites: 'You must meet the flight engineer aeronautical-experience requirements before the practical; the written may be taken earlier with an instructor endorsement.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Turbopropeller powerplants' },
      { name: 'Propeller control' },
      { name: 'Transport aircraft systems' },
      { name: 'Performance and limitations' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FET', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes practical-test costs; flight engineer training is largely legacy today.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring turboprop flight engineers',
    time: '8-16 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FET?', a: 'Challenging because it spans turboprop powerplants and transport systems across 80 questions.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical given the systems depth.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it mainly for those targeting legacy turboprop transports or completing a full flight engineer certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FET, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass',
      'Basic flight engineer turboprop rating',
      'Covers turboprop powerplants and systems',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-fep-flight-engineer-turboprop-added-rating', 'faa-fex-flight-engineer-turbojet-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-afa-flight-instructor-airplane-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 25-question add-on written for instructors adding an airplane rating.',
    description: 'The Flight Instructor Airplane Added Rating (AFA) knowledge test is taken by certificated flight instructors who already hold a CFI in another category and want to add an airplane rating. It is a 25-question exam covering the airplane-specific instruction material that differs from the instructor’s existing rating. It is a short add-on test, not a full CFI rewrite, and supports instructors broadening the aircraft they can teach.',
    quickAnswer: {
      summary: 'The AFA is a 25-question, computer-based FAA test for certificated flight instructors adding an airplane rating, scheduled via PSI for $175 and passed at 70%. It reviews airplane instruction specifics and runs about 1.5 hours. It is an add-on, not the full FIA.',
      advantages: [
        'Adds an airplane rating to an existing CFI certificate',
        'Only 25 questions versus 100 on the full FIA',
        'Recognizes an existing flight instructor certificate',
        'Flat $175 PSI fee',
        'Expands the aircraft you can instruct in'
      ]
    },
    roadmap: ['Hold a CFI certificate in another category', 'Study airplane instruction gaps', 'Schedule AFA via PSI', 'Pass 25 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight instructor certificate; this test only adds the airplane rating.',
    examMeta: {
      questions: '25',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Airplane instruction technique' },
      { name: 'Airplane systems and performance' },
      { name: 'Student endorsements (airplane)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take AFA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated flight instructors adding an airplane rating',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the AFA?', a: 'Easy. With only 25 questions and an existing CFI, it tests just the airplane-specific instruction gaps.' },
      { q: 'How long to study?', a: 'Two to four weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you instruct in more than one category and want to add airplane students.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select AFA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '25 questions, 1.5 hours, 70% to pass',
      'Adds airplane rating to a CFI certificate',
      'Short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fia-flight-instructor-airplane', 'faa-afg-flight-instructor-glider-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-fia-flight-instructor-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question CFI airplane written that qualifies you to teach pilots for hire.',
    description: 'The Flight Instructor Airplane (FIA) knowledge test, commonly the CFI airplane written, is the FAA exam required for the flight instructor certificate in airplanes. It has 100 questions covering flight-training procedures, stall and spin awareness, endorsements and instructor responsibilities over about 3 hours. Passing it precedes the CFI practical test and is the credential that lets you teach others to fly for compensation. It is widely regarded as one of the tougher writtens because of the teaching-theory depth.',
    quickAnswer: {
      summary: 'The FIA is a 100-question, computer-based FAA test for the flight instructor airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers training procedures, stall and spin awareness, endorsements and instructor duties and runs about 3 hours. Passing it precedes the CFI practical.',
      advantages: [
        'Lets you instruct airplane students for compensation',
        'A near-required step to build airline flight hours',
        'Deepens your own aeronautical knowledge',
        'Flat $175 PSI fee',
        'Foundation for CFII and multi-engine instructor'
      ]
    },
    roadmap: ['Hold commercial certificate', 'Study teaching theory and endorsements', 'Get endorsement', 'Pass 100-question FIA at 70%', 'Complete the CFI practical'],
    prerequisites: 'You must hold at least a commercial pilot certificate (or be within testing window) and meet instructor experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Flight training procedures' },
      { name: 'Stall and spin awareness' },
      { name: 'Student endorsements' },
      { name: 'Instructor responsibilities and regulations' },
      { name: 'Fundamentals of instructing' },
      { name: 'Meteorology and performance' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FIA', duration: '1 day' },
      { stage: 'CFI practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFI practical (DPE)', fee: '$600-$1,200' }
      ],
      total: '$175 up to ~$1,500',
      footnote: 'Excludes flight training needed to reach instructor proficiency.'
    },
    difficulty: 'Hard',
    audience: 'Commercial pilots training to become instructors',
    time: '8-16 weeks',
    cost: '$175-$1,500',
    faqs: [
      { q: 'How hard is the FIA?', a: 'Hard. Beyond flying facts it tests how to teach, including endorsements and stall/spin theory, so candidates who only memorize facts struggle.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical, often inside a formal CFI course.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes for most career pilots: instructing is the standard way to build hours toward the airlines while earning.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FIA, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Required for the flight instructor airplane certificate',
      'Covers teaching theory and endorsements',
      'Valid 24 months; precedes the CFI practical'
    ],
    relatedSlugs: ['faa-cax-commercial-pilot-airplane', 'faa-fii-flight-instructor-instrument-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-afg-flight-instructor-glider-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 25-question add-on written for instructors adding a glider rating.',
    description: 'The Flight Instructor Glider Added Rating (AFG) knowledge test is taken by certificated flight instructors who already hold a CFI in another category and want to add a glider rating. It is a 25-question exam covering the glider-specific instruction material that differs from the instructor’s existing rating. It is a short add-on test supporting instructors who want to teach soaring.',
    quickAnswer: {
      summary: 'The AFG is a 25-question, computer-based FAA test for certificated flight instructors adding a glider rating, scheduled via PSI for $175 and passed at 70%. It reviews glider instruction specifics and runs about 1.5 hours. It is an add-on, not the full FIG.',
      advantages: [
        'Adds a glider rating to an existing CFI certificate',
        'Only 25 questions versus 100 on the full FIG',
        'Recognizes an existing flight instructor certificate',
        'Flat $175 PSI fee',
        'Lets you teach soaring'
      ]
    },
    roadmap: ['Hold a CFI certificate in another category', 'Study glider instruction gaps', 'Schedule AFG via PSI', 'Pass 25 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight instructor certificate; this test only adds the glider rating.',
    examMeta: {
      questions: '25',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Glider instruction technique' },
      { name: 'Soaring weather and launches' },
      { name: 'Student endorsements (glider)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take AFG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated flight instructors adding a glider rating',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the AFG?', a: 'Easy. With 25 questions and an existing CFI, it tests only the glider-specific instruction gaps.' },
      { q: 'How long to study?', a: 'Two to four weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you want to instruct in gliders alongside your other CFI ratings.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select AFG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '25 questions, 1.5 hours, 70% to pass',
      'Adds glider rating to a CFI certificate',
      'Short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fig-flight-instructor-glider', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fig-flight-instructor-glider',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question CFI glider written for teaching soaring.',
    description: 'The Flight Instructor Glider (FIG) knowledge test is the FAA written required for the flight instructor certificate in gliders. It has 100 questions covering glider instruction techniques, tow signals, soaring weather and student endorsements over about 3 hours. Passing it precedes the glider CFI practical test and qualifies an instructor to teach soaring students. It is the glider equivalent of the airplane FIA.',
    quickAnswer: {
      summary: 'The FIG is a 100-question, computer-based FAA test for the flight instructor glider certificate, scheduled via PSI for $175 and passed at 70%. It covers instruction technique, tow signals, soaring weather and endorsements and runs about 3 hours. Passing it precedes the glider CFI practical.',
      advantages: [
        'Qualifies you to instruct glider students',
        'Builds on private glider knowledge',
        'Flat $175 PSI fee',
        'Recognized soaring credential',
        'Foundation for advanced glider instruction'
      ]
    },
    roadmap: ['Hold commercial glider', 'Study glider instruction theory', 'Get endorsement', 'Pass 100-question FIG at 70%', 'Complete the glider CFI practical'],
    prerequisites: 'You must hold at least a commercial pilot certificate with a glider rating and meet instructor experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Glider instruction techniques' },
      { name: 'Tow signals and launch methods' },
      { name: 'Soaring weather' },
      { name: 'Student endorsements' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FIG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFI practical (DPE)', fee: '$500-$900' }
      ],
      total: '$175 up to ~$1,100',
      footnote: 'Excludes glider flight training needed for instructor proficiency.'
    },
    difficulty: 'Challenging',
    audience: 'Commercial glider pilots becoming instructors',
    time: '8-16 weeks',
    cost: '$175-$1,100',
    faqs: [
      { q: 'How hard is the FIG?', a: 'Challenging because of the 100-question length and instruction-theory depth, but approachable for active glider pilots.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside glider time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for glider pilots who want to teach soaring students.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FIG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Flight instructor glider certificate',
      'Covers tow signals and soaring weather',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-cgx-commercial-pilot-glider', 'faa-afg-flight-instructor-glider-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-gfa-flight-instructor-gyroplane-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 25-question add-on written for instructors adding a gyroplane rating.',
    description: 'The Flight Instructor Gyroplane Added Rating (GFA) knowledge test is taken by certificated flight instructors who already hold a CFI in another category and want to add a gyroplane class rating. It is a 25-question exam covering the gyroplane-specific instruction material that differs from the instructor’s existing rating. It is a short add-on test supporting instructors who want to teach gyroplanes.',
    quickAnswer: {
      summary: 'The GFA is a 25-question, computer-based FAA test for certificated flight instructors adding a gyroplane rating, scheduled via PSI for $175 and passed at 70%. It reviews gyroplane instruction specifics and runs about 1.5 hours. It is an add-on, not the full FRG.',
      advantages: [
        'Adds a gyroplane rating to an existing CFI certificate',
        'Only 25 questions versus 100 on the full FRG',
        'Recognizes an existing flight instructor certificate',
        'Flat $175 PSI fee',
        'Lets you teach gyroplanes'
      ]
    },
    roadmap: ['Hold a CFI certificate in another category', 'Study gyroplane instruction gaps', 'Schedule GFA via PSI', 'Pass 25 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight instructor certificate; this test only adds the gyroplane rating.',
    examMeta: {
      questions: '25',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane instruction technique' },
      { name: 'Rotor blade management' },
      { name: 'Student endorsements (gyroplane)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take GFA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated flight instructors adding a gyroplane rating',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the GFA?', a: 'Easy. With 25 questions and an existing CFI, it tests only the gyroplane-specific instruction gaps.' },
      { q: 'How long to study?', a: 'Two to four weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you want to instruct in gyroplanes alongside your other CFI ratings.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select GFA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '25 questions, 1.5 hours, 70% to pass',
      'Adds gyroplane rating to a CFI certificate',
      'Short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-frg-flight-instructor-gyroplane', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-frg-flight-instructor-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question CFI gyroplane written for teaching rotorcraft.',
    description: 'The Flight Instructor Gyroplane (FRG) knowledge test is the FAA written required for the flight instructor certificate in gyroplanes. It has 100 questions covering gyroplane instruction, rotor blade management, autorotation training and student pilot endorsements over about 3 hours. Passing it precedes the gyroplane CFI practical test and qualifies an instructor to teach gyroplane students. It is a niche rotorcraft instructor credential.',
    quickAnswer: {
      summary: 'The FRG is a 100-question, computer-based FAA test for the flight instructor gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers gyroplane instruction, rotor management and endorsements and runs about 3 hours. Passing it precedes the gyroplane CFI practical.',
      advantages: [
        'Qualifies you to instruct gyroplane students',
        'Builds on private gyroplane knowledge',
        'Flat $175 PSI fee',
        'Specialized rotorcraft credential',
        'Foundation for advanced instruction'
      ]
    },
    roadmap: ['Hold commercial gyroplane', 'Study gyroplane instruction theory', 'Get endorsement', 'Pass 100-question FRG at 70%', 'Complete the gyroplane CFI practical'],
    prerequisites: 'You must hold at least a commercial pilot certificate with a gyroplane rating and meet instructor experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane instruction techniques' },
      { name: 'Rotor blade management' },
      { name: 'Autorotation training' },
      { name: 'Student endorsements' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FRG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFI practical (DPE)', fee: '$500-$900' }
      ],
      total: '$175 up to ~$1,100',
      footnote: 'Excludes gyroplane flight training needed for instructor proficiency.'
    },
    difficulty: 'Challenging',
    audience: 'Commercial gyroplane pilots becoming instructors',
    time: '8-16 weeks',
    cost: '$175-$1,100',
    faqs: [
      { q: 'How hard is the FRG?', a: 'Challenging due to the 100-question length and rotor-system instruction detail, but manageable for active gyroplane pilots.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside gyroplane time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for gyroplane pilots who want to teach; the community is small and instructors are valued.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FRG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Flight instructor gyroplane certificate',
      'Covers rotor management and autorotation',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-crg-commercial-pilot-gyroplane', 'faa-gfa-flight-instructor-gyroplane-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-hfa-flight-instructor-helicopter-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 25-question add-on written for instructors adding a helicopter rating.',
    description: 'The Flight Instructor Helicopter Added Rating (HFA) knowledge test is taken by certificated flight instructors who already hold a CFI in another category and want to add a rotorcraft-helicopter rating. It is a 25-question exam covering the helicopter-specific instruction material that differs from the instructor’s existing rating. It is a short add-on test supporting instructors who want to teach helicopters.',
    quickAnswer: {
      summary: 'The HFA is a 25-question, computer-based FAA test for certificated flight instructors adding a helicopter rating, scheduled via PSI for $175 and passed at 70%. It reviews helicopter instruction specifics and runs about 1.5 hours. It is an add-on, not the full FRH.',
      advantages: [
        'Adds a helicopter rating to an existing CFI certificate',
        'Only 25 questions versus 100 on the full FRH',
        'Recognizes an existing flight instructor certificate',
        'Flat $175 PSI fee',
        'Lets you teach helicopters'
      ]
    },
    roadmap: ['Hold a CFI certificate in another category', 'Study helicopter instruction gaps', 'Schedule HFA via PSI', 'Pass 25 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold a flight instructor certificate; this test only adds the helicopter rating.',
    examMeta: {
      questions: '25',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter instruction technique' },
      { name: 'Settling with power and autorotation' },
      { name: 'Student endorsements (helicopter)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take HFA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated flight instructors adding a helicopter rating',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the HFA?', a: 'Easy. With 25 questions and an existing CFI, it tests only the helicopter-specific instruction gaps.' },
      { q: 'How long to study?', a: 'Two to four weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you want to instruct in helicopters alongside your other CFI ratings.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select HFA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '25 questions, 1.5 hours, 70% to pass',
      'Adds helicopter rating to a CFI certificate',
      'Short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-frh-flight-instructor-helicopter', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-frh-flight-instructor-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question CFI helicopter written for teaching rotorcraft.',
    description: 'The Flight Instructor Helicopter (FRH) knowledge test, often the CFI helicopter written, is the FAA exam required for the flight instructor certificate in helicopters. It has 100 questions covering helicopter teaching methods, settling with power, autorotation instruction and instructor record keeping over about 3 hours. Passing it precedes the helicopter CFI practical test and qualifies an instructor to teach helicopter students for compensation.',
    quickAnswer: {
      summary: 'The FRH is a 100-question, computer-based FAA test for the flight instructor helicopter certificate, scheduled via PSI for $175 and passed at 70%. It covers teaching methods, settling with power, autorotation instruction and record keeping and runs about 3 hours. Passing it precedes the helicopter CFI practical.',
      advantages: [
        'Qualifies you to instruct helicopter students for pay',
        'Builds on commercial helicopter knowledge',
        'Flat $175 PSI fee',
        'Recognized rotorcraft credential',
        'Foundation for instrument instructor'
      ]
    },
    roadmap: ['Hold commercial helicopter', 'Study helicopter instruction theory', 'Get endorsement', 'Pass 100-question FRH at 70%', 'Complete the helicopter CFI practical'],
    prerequisites: 'You must hold at least a commercial pilot certificate with a rotorcraft rating and meet instructor experience requirements before the practical.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter teaching methods' },
      { name: 'Settling with power' },
      { name: 'Autorotation instruction' },
      { name: 'Instructor record keeping' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FRH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFI practical (DPE)', fee: '$600-$1,200' }
      ],
      total: '$175 up to ~$1,400',
      footnote: 'Excludes helicopter flight training needed for instructor proficiency.'
    },
    difficulty: 'Challenging',
    audience: 'Commercial helicopter pilots becoming instructors',
    time: '8-16 weeks',
    cost: '$175-$1,400',
    faqs: [
      { q: 'How hard is the FRH?', a: 'Challenging due to the 100-question length and rotor-specific teaching theory, but manageable for active helicopter pilots.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks alongside helicopter time is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for helicopter pilots who want to instruct; it builds hours and income.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FRH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Flight instructor helicopter certificate',
      'Covers settling with power and autorotation',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-crh-commercial-pilot-helicopter', 'faa-hfa-flight-instructor-helicopter-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-aif-flight-instructor-instrument-airplane-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 20-question add-on written for instrument instructors adding the airplane rating.',
    description: 'The Flight Instructor Instrument Airplane Added Rating (AIF) knowledge test is taken by certificated instrument instructors who already hold a CFII in another category and want to add the instrument-airplane rating. It is a 20-question exam covering the airplane-specific instrument instruction material that differs from the instructor’s existing rating. It is a very short add-on test supporting instructors who want to teach instrument airplane students.',
    quickAnswer: {
      summary: 'The AIF is a 20-question, computer-based FAA test for certificated instrument instructors adding the instrument-airplane rating, scheduled via PSI for $175 and passed at 70%. It reviews airplane instrument instruction specifics and runs about 1.5 hours. It is an add-on, not the full FII.',
      advantages: [
        'Adds an instrument-airplane rating to an existing CFII',
        'Only 20 questions versus 50 on the full FII',
        'Recognizes an existing instrument instructor certificate',
        'Flat $175 PSI fee',
        'Lets you teach instrument airplane students'
      ]
    },
    roadmap: ['Hold a CFII in another category', 'Study instrument-airplane gaps', 'Schedule AIF via PSI', 'Pass 20 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold an instrument instructor certificate; this test only adds the instrument-airplane rating.',
    examMeta: {
      questions: '20',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Instrument airplane instruction' },
      { name: 'Approach charts and procedures' },
      { name: 'Student endorsements (instrument airplane)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-3 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take AIF', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated instrument instructors adding an airplane rating',
    time: '2-3 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the AIF?', a: 'Easy. With 20 questions and an existing CFII, it tests only the airplane-specific instrument instruction gaps.' },
      { q: 'How long to study?', a: 'Two to three weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you instruct instrument students across categories and want to add airplane.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select AIF, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '20 questions, 1.5 hours, 70% to pass',
      'Adds instrument-airplane rating to a CFII',
      'Very short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fii-flight-instructor-instrument-airplane', 'faa-hif-flight-instructor-instrument-helicopter-added-rating'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-fii-flight-instructor-instrument-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question CFII written that qualifies you to teach instrument flying.',
    description: 'The Flight Instructor Instrument Airplane (FII) knowledge test, often the CFII written, is the FAA exam required for the instrument instructor certificate in airplanes. It has 50 questions covering teaching instrument procedures, approach charts, IFR regulations and partial-panel training over about 1.5 hours. Passing it precedes the CFII practical test and qualifies an instructor to train and endorse instrument students. It is shorter than the airplane FIA but demands precise IFR knowledge.',
    quickAnswer: {
      summary: 'The FII is a 50-question, computer-based FAA test for the instrument instructor airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers teaching instrument procedures, approach charts and IFR rules and runs about 1.5 hours. Passing it precedes the CFII practical.',
      advantages: [
        'Qualifies you to instruct and endorse instrument students',
        'Shorter than the airplane FIA (50 questions)',
        'Builds on your own instrument knowledge',
        'Flat $175 PSI fee',
        'Valuable for building airline-hours as an instructor'
      ]
    },
    roadmap: ['Hold an instrument rating and CFI', 'Study IFR teaching material', 'Get endorsement', 'Pass 50-question FII at 70%', 'Complete the CFII practical'],
    prerequisites: 'You must hold at least a commercial certificate with an instrument rating and a flight instructor certificate before the practical.',
    examMeta: {
      questions: '50',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Teaching instrument procedures' },
      { name: 'Approach charts and minima' },
      { name: 'IFR regulations' },
      { name: 'Partial-panel training' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FII', duration: '1 day' },
      { stage: 'CFII practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFII practical (DPE)', fee: '$500-$1,000' }
      ],
      total: '$175 up to ~$1,200',
      footnote: 'Excludes flight training needed to reach instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Instrument-rated CFIs adding the airplane instrument rating',
    time: '4-8 weeks',
    cost: '$175-$1,200',
    faqs: [
      { q: 'How hard is the FII?', a: 'Moderate. The material is precise IFR knowledge you already use, but the test asks how to teach it, including partial-panel scenarios.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical, lighter than the airplane FIA.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes for instructors who want to train instrument students; it is a strong hours-building credential.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FII, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '50 questions, 1.5 hours, 70% to pass',
      'Required for the instrument instructor airplane certificate',
      'Covers teaching IFR procedures and charts',
      'Valid 24 months; precedes the CFII practical'
    ],
    relatedSlugs: ['faa-ira-instrument-rating-airplane', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-hif-flight-instructor-instrument-helicopter-added-rating',
    body: 'Federal Aviation Administration',
    tagline: 'The 20-question add-on written for instrument instructors adding the helicopter rating.',
    description: 'The Flight Instructor Instrument Helicopter Added Rating (HIF) knowledge test is taken by certificated instrument instructors who already hold a CFII in another category and want to add the instrument-helicopter rating. It is a 20-question exam covering the helicopter-specific instrument instruction material that differs from the instructor’s existing rating. It is a very short add-on test supporting instructors who want to teach instrument helicopter students.',
    quickAnswer: {
      summary: 'The HIF is a 20-question, computer-based FAA test for certificated instrument instructors adding the instrument-helicopter rating, scheduled via PSI for $175 and passed at 70%. It reviews helicopter instrument instruction specifics and runs about 1.5 hours. It is an add-on, not the full FIH.',
      advantages: [
        'Adds an instrument-helicopter rating to an existing CFII',
        'Only 20 questions versus 50 on the full FIH',
        'Recognizes an existing instrument instructor certificate',
        'Flat $175 PSI fee',
        'Lets you teach instrument helicopter students'
      ]
    },
    roadmap: ['Hold a CFII in another category', 'Study instrument-helicopter gaps', 'Schedule HIF via PSI', 'Pass 20 questions at 70%', 'Complete the added-rating practical'],
    prerequisites: 'You must already hold an instrument instructor certificate; this test only adds the instrument-helicopter rating.',
    examMeta: {
      questions: '20',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Instrument helicopter instruction' },
      { name: 'IFR procedures (rotorcraft)' },
      { name: 'Student endorsements (instrument helicopter)' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '2-3 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take HIF', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Excludes the added-rating practical with a DPE.'
    },
    difficulty: 'Easy',
    audience: 'Certificated instrument instructors adding a helicopter rating',
    time: '2-3 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the HIF?', a: 'Easy. With 20 questions and an existing CFII, it tests only the helicopter-specific instrument instruction gaps.' },
      { q: 'How long to study?', a: 'Two to three weeks of focused review is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you instruct instrument students across categories and want to add helicopter.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select HIF, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '20 questions, 1.5 hours, 70% to pass',
      'Adds instrument-helicopter rating to a CFII',
      'Very short add-on test',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-fih-flight-instructor-instrument-helicopter', 'faa-fii-flight-instructor-instrument-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fih-flight-instructor-instrument-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question CFII helicopter written for teaching instrument rotorcraft.',
    description: 'The Flight Instructor Instrument Helicopter (FIH) knowledge test is the FAA written required for the instrument instructor certificate in helicopters. It has 50 questions covering instrument instruction in helicopters, IFR procedures and instrument student endorsement requirements over about 1.5 hours. Passing it precedes the instrument helicopter CFII practical test and qualifies an instructor to train instrument helicopter students.',
    quickAnswer: {
      summary: 'The FIH is a 50-question, computer-based FAA test for the instrument instructor helicopter certificate, scheduled via PSI for $175 and passed at 70%. It covers instrument instruction, IFR procedures and endorsements and runs about 1.5 hours. Passing it precedes the instrument helicopter CFII practical.',
      advantages: [
        'Qualifies you to instruct instrument helicopter students',
        'Flat $175 PSI fee',
        'Specialized rotorcraft credential',
        'Builds on instrument helicopter knowledge',
        'Valuable for IFR instruction'
      ]
    },
    roadmap: ['Hold instrument helicopter and CFI', 'Study IFR teaching material', 'Get endorsement', 'Pass 50-question FIH at 70%', 'Complete the instrument CFII practical'],
    prerequisites: 'You must hold at least a commercial certificate with an instrument helicopter rating and a flight instructor certificate before the practical.',
    examMeta: {
      questions: '50',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Instrument helicopter instruction' },
      { name: 'IFR procedures (rotorcraft)' },
      { name: 'Student endorsements' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FIH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'CFII practical (DPE)', fee: '$500-$1,000' }
      ],
      total: '$175 up to ~$1,200',
      footnote: 'Excludes helicopter flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Instrument-rated helicopter CFIs adding the instrument rating',
    time: '4-8 weeks',
    cost: '$175-$1,200',
    faqs: [
      { q: 'How hard is the FIH?', a: 'Moderate. Material is precise IFR knowledge you already use, but the test asks how to teach it in a helicopter context.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for helicopter instructors who want to train instrument students.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FIH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 1.5 hours, 70% to pass',
      'Instrument instructor helicopter certificate',
      'Covers IFR procedures and endorsements',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-irh-instrument-rating-helicopter', 'faa-frh-flight-instructor-helicopter'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-firc-flight-instructor-refresher-course',
    body: 'Federal Aviation Administration',
    tagline: 'The 16-hour refresher course every flight instructor completes to keep their certificate current.',
    description: 'The Flight Instructor Refresher Course (FIRC) is not a knowledge test but a 16-hour FAA-accepted refresher course that certificated flight instructors complete every 24 calendar months to renew their instructor certificate. It is delivered by FAA-accepted providers online or in person and covers regulation changes, teaching methods and safety. Completing an approved FIRC is the standard way instructors maintain their certificate without retaking a written exam.',
    quickAnswer: {
      summary: 'The FIRC is a 16-hour FAA-accepted refresher course (not a PSI knowledge test) that every flight instructor must finish every 24 calendar months to renew the certificate. Providers deliver it online or in person for a fee typically around $100-$200, and completion is reported to the FAA. It is the practical renewal path for a CFI.',
      advantages: [
        'Renews your flight instructor certificate every 24 months',
        'Accepted by the FAA when completed through an approved provider',
        'Available fully online at your own pace',
        'Covers current regs, teaching methods and safety',
        'Avoids retaking a knowledge test to stay current'
      ]
    },
    roadmap: ['Hold a flight instructor certificate', 'Choose an FAA-accepted provider', 'Complete 16 hours of refresher training', 'Provider reports completion to FAA', 'Certificate renewed for 24 months'],
    prerequisites: 'You must already hold a flight instructor certificate; the FIRC is the renewal mechanism, not an entry exam.',
    examMeta: {
      questions: 'Course (no fixed exam question count)',
      time: '16 hours',
      pass: 'Completion-based',
      fee: '$100-$200 (provider-set)',
      format: 'Online or in-person refresher course',
      admin: 'FAA-accepted FIRC providers'
    },
    topics: [
      { name: 'Regulation updates' },
      { name: 'Teaching and learning methods' },
      { name: 'Safety and risk management' },
      { name: 'CFI responsibilities' }
    ],
    examEssentials: [
      ['Delivery', 'FAA-accepted provider, online or in person'],
      ['Retake', 'Must be completed every 24 calendar months'],
      ['Validity', 'Renews CFI for 24 months']
    ],
    timeline: [
      { stage: 'Enroll', duration: '1 day' },
      { stage: 'Complete 16 hours', duration: '1-4 weeks' },
      { stage: 'FAA reports completion', duration: 'within days' }
    ],
    costBreakdown: {
      items: [
        { item: 'FIRC course fee (provider)', fee: '$100-$200' },
        { item: 'Retake / lapse reinstatement', fee: 'course fee again if lapsed' }
      ],
      total: '$100-$200',
      footnote: 'This is a training course, not a PSI knowledge test; the FAA does not charge a fee for the renewal itself.'
    },
    difficulty: 'Easy',
    audience: 'Current flight instructors renewing their certificate',
    time: '1-4 weeks',
    cost: '$100-$200',
    faqs: [
      { q: 'Is the FIRC a test?', a: 'No. It is a 16-hour refresher course from an FAA-accepted provider. You complete the lessons and the provider reports completion; there is no PSI written exam.' },
      { q: 'How long does it take?', a: 'The course is 16 hours of instruction, typically done self-paced online over one to four weeks.' },
      { q: 'Does it expire?', a: 'The renewal it grants lasts 24 calendar months; you must complete another FIRC before then to stay current.' },
      { q: 'Is it worth it?', a: 'Yes, it is mandatory to keep instructing legally; skipping it lapses your instructor certificate.' },
      { q: 'How do I enroll?', a: 'Pick an FAA-accepted FIRC provider (many offer online courses), pay their fee, finish the 16 hours, and they report it to the FAA.' }
    ],
    summaryPoints: [
      '16-hour refresher, not a PSI knowledge test',
      'Required every 24 months to renew a CFI',
      'Completed via FAA-accepted providers',
      'Provider fee typically $100-$200'
    ],
    relatedSlugs: ['faa-fia-flight-instructor-airplane', 'faa-foi-fundamentals-of-instructing'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-sia-flight-instructor-sport-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching light-sport airplane students.',
    description: 'The Flight Instructor Sport Airplane (SIA) knowledge test is the FAA written required for the sport flight instructor certificate in light-sport airplanes. It has 70 questions covering instruction technique and sport pilot rules over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot airplane students. It is the lighter-sport equivalent of the airplane FIA.',
    quickAnswer: {
      summary: 'The SIA is a 70-question, computer-based FAA test for the sport flight instructor airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers instruction technique and sport pilot rules and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct light-sport airplane students',
        'Lower barrier than the full airplane CFI',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Entry into flight instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study sport rules and instruction', 'Get endorsement', 'Pass 70-question SIA at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport pilot instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Light-sport airplane systems' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$975',
      footnote: 'Excludes light-sport flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport airplane instructors',
    time: '6-12 weeks',
    cost: '$175-$975',
    faqs: [
      { q: 'How hard is the SIA?', a: 'Moderate. It is shorter than the full FIA and focuses on sport pilot rules, but still tests instruction technique.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those wanting to instruct in light-sport airplanes with a lower barrier than the full CFI.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor airplane certificate',
      'Covers sport pilot rules and instruction',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spa-sport-pilot-airplane', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-sib-flight-instructor-sport-balloon',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching lighter-than-air balloon students.',
    description: 'The Flight Instructor Sport Balloon (SIB) knowledge test is the FAA written required for the sport flight instructor certificate in lighter-than-air balloons under Part 61 Subpart K. It has 70 questions covering instruction technique and sport pilot rules over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot balloon students.',
    quickAnswer: {
      summary: 'The SIB is a 70-question, computer-based FAA test for the sport flight instructor balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers balloon instruction technique and sport pilot rules and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport balloon students',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Lower barrier than the full CFI',
        'Entry into balloon instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study balloon rules and instruction', 'Get endorsement', 'Pass 70-question SIB at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport balloon instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Balloon systems' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIB', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes balloon flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport balloon instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIB?', a: 'Moderate. It focuses on sport pilot balloon rules and instruction technique across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for balloon pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIB, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor balloon certificate',
      'Covers sport pilot rules and instruction',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spb-sport-pilot-balloon', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-sig-flight-instructor-sport-glider',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching glider students.',
    description: 'The Flight Instructor Sport Glider (SIG) knowledge test is the FAA written required for the sport flight instructor certificate in gliders. It has 70 questions covering instruction technique, launch procedures and soaring safety over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot glider students.',
    quickAnswer: {
      summary: 'The SIG is a 70-question, computer-based FAA test for the sport flight instructor glider certificate, scheduled via PSI for $175 and passed at 70%. It covers instruction technique, launch procedures and soaring safety and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport glider students',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Lower barrier than the full CFI',
        'Entry into glider instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study glider rules and instruction', 'Get endorsement', 'Pass 70-question SIG at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport glider instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Launch procedures' },
      { name: 'Soaring safety' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes glider flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport glider instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIG?', a: 'Moderate. It focuses on sport pilot glider rules and instruction technique across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for glider pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor glider certificate',
      'Covers launch procedures and soaring safety',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spi-sport-pilot-glider', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-siy-flight-instructor-sport-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching gyroplane students.',
    description: 'The Flight Instructor Sport Gyroplane (SIY) knowledge test is the FAA written required for the sport flight instructor certificate in gyroplanes. It has 70 questions covering rotor handling and training methodology over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot gyroplane students.',
    quickAnswer: {
      summary: 'The SIY is a 70-question, computer-based FAA test for the sport flight instructor gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers rotor handling and training methodology and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport gyroplane students',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Lower barrier than the full CFI',
        'Entry into gyroplane instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study gyroplane rules and instruction', 'Get endorsement', 'Pass 70-question SIY at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport gyroplane instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Rotor handling' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIY', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes gyroplane flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport gyroplane instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIY?', a: 'Moderate. It focuses on sport pilot gyroplane rules and instruction technique across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for gyroplane pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIY, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor gyroplane certificate',
      'Covers rotor handling and methodology',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spy-sport-pilot-gyroplane', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-sil-flight-instructor-sport-airship',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching lighter-than-air airship students.',
    description: 'The Flight Instructor Sport Lighter-Than-Air Airship (SIL) knowledge test is the FAA written required for the sport flight instructor certificate in the lighter-than-air airship class. It has 70 questions covering buoyancy control and instruction over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot airship students. It is a niche sport aviation credential.',
    quickAnswer: {
      summary: 'The SIL is a 70-question, computer-based FAA test for the sport flight instructor airship certificate, scheduled via PSI for $175 and passed at 70%. It covers buoyancy control and instruction and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport airship students',
        'Flat $175 PSI fee',
        'Recognized niche sport credential',
        'Lower barrier than the full CFI',
        'Entry into airship instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study airship rules and instruction', 'Get endorsement', 'Pass 70-question SIL at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport airship instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Buoyancy control' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIL', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes airship flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport airship instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIL?', a: 'Moderate. It focuses on sport pilot airship rules and buoyancy instruction across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for airship pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIL, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor airship certificate',
      'Covers buoyancy control and instruction',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spl-sport-pilot-airship', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-sip-flight-instructor-sport-powered-parachute',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching powered-parachute students.',
    description: 'The Flight Instructor Sport Powered Parachute (SIP) knowledge test is the FAA written required for the sport flight instructor certificate in powered parachutes. It has 70 questions covering canopy handling, wind limits and endorsements over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot powered-parachute students.',
    quickAnswer: {
      summary: 'The SIP is a 70-question, computer-based FAA test for the sport flight instructor powered-parachute certificate, scheduled via PSI for $175 and passed at 70%. It covers canopy handling, wind limits and endorsements and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport powered-parachute students',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Lower barrier than the full CFI',
        'Entry into powered-parachute instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study powered-parachute rules and instruction', 'Get endorsement', 'Pass 70-question SIP at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport powered-parachute instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Canopy handling and wind limits' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes powered-parachute flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport powered-parachute instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIP?', a: 'Moderate. It focuses on sport pilot powered-parachute rules and canopy instruction across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for powered-parachute pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor powered-parachute certificate',
      'Covers canopy handling and wind limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spp-sport-pilot-powered-parachute', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-siw-flight-instructor-sport-weight-shift-control',
    body: 'Federal Aviation Administration',
    tagline: 'The 70-question sport-CFI written for teaching weight-shift-control students.',
    description: 'The Flight Instructor Sport Weight-Shift-Control (SIW) knowledge test is the FAA written required for the sport flight instructor certificate in weight-shift-control trikes. It has 70 questions covering control inputs, teaching technique and sport pilot limits over about 2.5 hours. Passing it precedes the sport CFI practical and qualifies an instructor to teach sport pilot weight-shift-control students.',
    quickAnswer: {
      summary: 'The SIW is a 70-question, computer-based FAA test for the sport flight instructor weight-shift-control certificate, scheduled via PSI for $175 and passed at 70%. It covers control inputs, teaching technique and sport pilot limits and runs about 2.5 hours. Passing it precedes the sport CFI practical.',
      advantages: [
        'Qualifies you to instruct sport weight-shift-control students',
        'Flat $175 PSI fee',
        'Recognized sport aviation credential',
        'Lower barrier than the full CFI',
        'Entry into trike instruction'
      ]
    },
    roadmap: ['Meet sport instructor eligibility', 'Study WSC rules and instruction', 'Get endorsement', 'Pass 70-question SIW at 70%', 'Complete the sport CFI practical'],
    prerequisites: 'You must meet the sport flight instructor aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '70',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Sport WSC instruction technique' },
      { name: 'Sport pilot rules (Part 61 Subpart K)' },
      { name: 'Control inputs' },
      { name: 'Student endorsements' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SIW', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport CFI practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes weight-shift-control flight training needed for instructor proficiency.'
    },
    difficulty: 'Moderate',
    audience: 'Pilots becoming sport weight-shift-control instructors',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the SIW?', a: 'Moderate. It focuses on sport pilot weight-shift-control rules and control-input instruction across 70 questions.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for trike pilots who want to instruct within the sport category.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SIW, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '70 questions, 2.5 hours, 70% to pass',
      'Sport flight instructor weight-shift-control certificate',
      'Covers control inputs and limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spw-sport-pilot-weight-shift-control', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-fnx-flight-navigator',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question written for the legacy flight navigator certificate.',
    description: 'The Flight Navigator (FNX) knowledge test is the FAA written required for the flight navigator certificate, a legacy credential for the crewmember who plots long-range flights by celestial and dead-reckoning navigation. It has 80 questions covering celestial and dead-reckoning navigation, charts and instruments over about 3 hours. Passing it precedes the flight navigator practical test. The certificate is rarely sought today but remains valid for those pursuing traditional navigation roles.',
    quickAnswer: {
      summary: 'The FNX is an 80-question, computer-based FAA test for the flight navigator certificate, scheduled via PSI for $175 and passed at 70%. It covers celestial and dead-reckoning navigation, charts and instruments and runs about 3 hours. Passing it precedes the flight navigator practical.',
      advantages: [
        'Flight navigator certificate, a specialized airman credential',
        'Covers celestial and dead-reckoning navigation',
        'Flat $175 PSI fee',
        'Recognized legacy certificate',
        'Builds deep navigation expertise'
      ]
    },
    roadmap: ['Meet flight navigator eligibility', 'Study celestial and DR navigation', 'Get endorsement', 'Pass 80-question FNX at 70%', 'Complete the flight navigator practical'],
    prerequisites: 'You must meet the flight navigator aeronautical-experience requirements before the practical; the written may be taken earlier with an instructor endorsement.',
    examMeta: {
      questions: '80',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Celestial navigation' },
      { name: 'Dead-reckoning navigation' },
      { name: 'Charts and instruments' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FNX', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Excludes practical-test costs; the flight navigator role is largely legacy.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring flight navigators and navigation enthusiasts',
    time: '8-16 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the FNX?', a: 'Challenging because it tests celestial and dead-reckoning navigation theory that most modern pilots never study.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical given the specialized navigation material.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it mainly for those pursuing the legacy flight navigator certificate or deep navigation knowledge; the role is rare in modern cockpits.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select FNX, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '80 questions, 3 hours, 70% to pass',
      'Flight navigator certificate',
      'Covers celestial and dead-reckoning navigation',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-foi-fundamentals-of-instructing', 'faa-agi-ground-instructor-advanced'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-foi-fundamentals-of-instructing',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question FOI written every flight and ground instructor must pass.',
    description: 'The Fundamentals of Instructing (FOI) knowledge test is the FAA written required of all flight and ground instructor applicants. It has 50 questions covering learning theory, human behavior, teaching methods and evaluation over about 1.5 hours. Passing it is a prerequisite for the flight instructor and ground instructor practical tests, and it does not require a separate instructor endorsement. It is the teaching-foundation exam that underpins every instructor certificate.',
    quickAnswer: {
      summary: 'The FOI is a 50-question, computer-based FAA test required of all instructor applicants, scheduled via PSI for $175 and passed at 70%. It covers learning theory, human behavior, teaching methods and evaluation and runs about 1.5 hours. Passing it is required before any instructor practical test.',
      advantages: [
        'Required for every flight and ground instructor certificate',
        'Covers the teaching foundation all instructors need',
        'Flat $175 PSI fee',
        'No instructor endorsement required',
        'Pairs with your specific instructor written'
      ]
    },
    roadmap: ['Decide your instructor path', 'Study learning theory and teaching methods', 'Schedule FOI via PSI', 'Pass 50-question FOI at 70%', 'Combine with your specific instructor written'],
    prerequisites: 'None beyond being an instructor applicant; the FOI has no separate endorsement requirement.',
    examMeta: {
      questions: '50',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Learning theory and processes' },
      { name: 'Human behavior and communication' },
      { name: 'Teaching methods' },
      { name: 'Evaluation and testing' },
      { name: 'Regulations for instructors' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take FOI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Taken alongside, not instead of, your specific instructor knowledge test.'
    },
    difficulty: 'Moderate',
    audience: 'All prospective flight and ground instructors',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the FOI?', a: 'Moderate. The material is educational psychology rather than flying, so pilot-only study habits do not transfer directly; memorizing the teaching concepts is key.' },
      { q: 'How long to study?', a: 'Three to six weeks is typical, often studied alongside your specific instructor written.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens; it must be current when you take the practical.' },
      { q: 'Is it worth it?', a: 'Yes, it is mandatory for every instructor certificate, so there is no path around it.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com (no endorsement needed), select FOI, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 1.5 hours, 70% to pass',
      'Required for all instructor certificates',
      'Covers learning theory and teaching methods',
      'Valid 24 months; no endorsement needed'
    ],
    relatedSlugs: ['faa-fia-flight-instructor-airplane', 'faa-bgi-ground-instructor-basic'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-agi-ground-instructor-advanced',
    body: 'Federal Aviation Administration',
    tagline: 'The 100-question advanced ground-instructor written for teaching nearly any subject.',
    description: 'The Ground Instructor Advanced (AGI) knowledge test is the FAA written required for the advanced ground instructor certificate, which lets the holder give ground instruction for any certificate or rating other than instrument. It has 100 questions covering weather, performance, regulations and instruction over about 3 hours. Passing it precedes the ground instructor practical and is the broadest of the three ground instructor ratings. It is valued by schools that need instructors who can teach ground school across the board.',
    quickAnswer: {
      summary: 'The AGI is a 100-question, computer-based FAA test for the advanced ground instructor certificate, scheduled via PSI for $175 and passed at 70%. It covers weather, performance, regulations and instruction and runs about 3 hours. Passing it lets you ground-instruct for any non-instrument certificate or rating.',
      advantages: [
        'Lets you ground-instruct for any certificate except instrument',
        'Broadest of the three ground instructor ratings',
        'Flat $175 PSI fee',
        'No flight training required',
        'Strong resume credential for flight schools'
      ]
    },
    roadmap: ['Study weather, performance and regs', 'Schedule AGI via PSI (no flight needed)', 'Pass 100-question AGI at 70%', 'Complete the ground instructor practical', 'Teach ground school'],
    prerequisites: 'No flight certificate is required to become a ground instructor; the AGI is knowledge-based.',
    examMeta: {
      questions: '100',
      time: '3.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Meteorology' },
      { name: 'Aircraft performance' },
      { name: 'Regulations (Part 61/91)' },
      { name: 'Instruction principles' },
      { name: 'Navigation' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '8-16 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take AGI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'No flight training or DPE flight test is required; the practical is an oral exam.'
    },
    difficulty: 'Challenging',
    audience: 'Aspiring ground instructors wanting broad authority',
    time: '8-16 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the AGI?', a: 'Challenging due to the 100-question breadth across weather, performance and regs, but it is ground knowledge with no flying required.' },
      { q: 'How long to study?', a: 'Eight to sixteen weeks is typical for those new to instruction.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for anyone who wants to teach ground school across most certificates without also being a flight instructor.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select AGI, pay $175 and book a center; no flight endorsement is needed.' }
      ]
    ,
    summaryPoints: [
      '100 questions, 3 hours, 70% to pass',
      'Advanced ground instructor certificate',
      'Covers weather, performance and regs',
      'Valid 24 months; ground-only practical'
    ],
    relatedSlugs: ['faa-bgi-ground-instructor-basic', 'faa-igi-ground-instructor-instrument'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-bgi-ground-instructor-basic',
    body: 'Federal Aviation Administration',
    tagline: 'The 80-question basic ground-instructor written for sport through private teaching.',
    description: 'The Ground Instructor Basic (BGI) knowledge test is the FAA written required for the basic ground instructor certificate, limited to giving ground instruction for sport, recreational and private pilot training. It has 80 questions covering fundamentals, regulations and weather over about 2.5 hours. Passing it precedes the ground instructor practical. It is the entry-level ground instructor rating for those who teach beginners.',
    quickAnswer: {
      summary: 'The BGI is an 80-question, computer-based FAA test for the basic ground instructor certificate, scheduled via PSI for $175 and passed at 70%. It covers fundamentals, regulations and weather and runs about 2.5 hours. Passing it lets you ground-instruct sport, recreational and private pilot students.',
      advantages: [
        'Lets you ground-instruct sport, recreational and private students',
        'Entry-level ground instructor rating',
        'Flat $175 PSI fee',
        'No flight training required',
        'Good first step toward the AGI'
      ]
    },
    roadmap: ['Study fundamentals and regs', 'Schedule BGI via PSI', 'Pass 80-question BGI at 70%', 'Complete the ground instructor practical', 'Teach beginner ground school'],
    prerequisites: 'No flight certificate is required to become a ground instructor; the BGI is knowledge-based.',
    examMeta: {
      questions: '80',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Pilot fundamentals' },
      { name: 'Regulations (Part 61/91)' },
      { name: 'Meteorology basics' },
      { name: 'Instruction principles' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take BGI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'No flight training or DPE flight test is required; the practical is an oral exam.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring ground instructors teaching beginners',
    time: '6-12 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the BGI?', a: 'Moderate. It is shorter than the AGI and limited to beginner material, so it is the most approachable ground instructor test.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those who want to teach ground school to sport, recreational and private students without a flight instructor certificate.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select BGI, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '80 questions, 2.5 hours, 70% to pass',
      'Basic ground instructor certificate',
      'Covers fundamentals and beginner regs',
      'Valid 24 months; ground-only practical'
    ],
    relatedSlugs: ['faa-agi-ground-instructor-advanced', 'faa-par-private-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-igi-ground-instructor-instrument',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question instrument ground-instructor written for teaching IFR ground school.',
    description: 'The Ground Instructor Instrument (IGI) knowledge test is the FAA written required for the instrument ground instructor certificate, which qualifies the holder to provide ground instruction for the instrument rating and instrument proficiency checks. It has 50 questions covering IFR regulations, approach charts and navigation over about 1.5 hours. Passing it precedes the ground instructor practical. It pairs naturally with the AGI for instructors who teach instrument ground school.',
    quickAnswer: {
      summary: 'The IGI is a 50-question, computer-based FAA test for the instrument ground instructor certificate, scheduled via PSI for $175 and passed at 70%. It covers IFR regulations, approach charts and navigation and runs about 1.5 hours. Passing it lets you ground-instruct for the instrument rating.',
      advantages: [
        'Lets you ground-instruct for the instrument rating',
        'Shorter than the AGI (50 questions)',
        'Flat $175 PSI fee',
        'No flight training required',
        'Pairs with the AGI for full ground authority'
      ]
    },
    roadmap: ['Study IFR material', 'Schedule IGI via PSI', 'Pass 50-question IGI at 70%', 'Complete the ground instructor practical', 'Teach instrument ground school'],
    prerequisites: 'No flight certificate is required to become a ground instructor; the IGI is knowledge-based.',
    examMeta: {
      questions: '50',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'IFR regulations' },
      { name: 'Approach charts and minima' },
      { name: 'Instrument navigation' },
      { name: 'Instruction principles' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take IGI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'No flight training or DPE flight test is required; the practical is an oral exam.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring instrument ground instructors',
    time: '4-8 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the IGI?', a: 'Moderate. It is a focused IFR knowledge test, more precise than the BGI but shorter than the AGI.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes if you want to teach instrument ground school, either alone or alongside the AGI.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select IGI, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 1.5 hours, 70% to pass',
      'Instrument ground instructor certificate',
      'Covers IFR regs and approach charts',
      'Valid 24 months; ground-only practical'
    ],
    relatedSlugs: ['faa-agi-ground-instructor-advanced', 'faa-ira-instrument-rating-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-icp-instrument-rating-airplane-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that maps a Canadian instrument rating to an FAA rating.',
    description: 'The Instrument Rating Airplane Canadian Conversion (ICP) knowledge test lets a holder of a Canadian instrument-rated aeroplane licence obtain the equivalent FAA instrument rating. It is a 40-question conversion exam covering the U.S.-specific IFR regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian pilot from the full 60-question IRA. It supports pilots who need the FAA instrument airplane rating for U.S. operations.',
    quickAnswer: {
      summary: 'The ICP is a 40-question conversion test for Canadian instrument-rated aeroplane pilots seeking the FAA instrument rating, booked through PSI for $175 and passed at 70%. It reviews U.S. IFR rules and airspace differences and runs about 2 hours. It is a recognition path, not the full IRA.',
      advantages: [
        'Converts a Canadian instrument rating to an FAA rating',
        '40 questions versus 60 on the full IRA',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables IFR flying in the U.S.'
      ]
    },
    roadmap: ['Hold a Canadian instrument aeroplane rating', 'Verify conversion eligibility', 'Schedule ICP via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian instrument-rated aeroplane licence and meet FAA conversion requirements; the foreign rating serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. IFR regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Approach charts and minima differences' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '3-6 weeks' },
      { stage: 'Take ICP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian instrument-rated aeroplane pilots',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the ICP?', a: 'Moderate. It assumes the Canadian instrument rating and mainly checks U.S.-specific IFR rules and airspace.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly IFR in the U.S.; it converts your Canadian rating efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select ICP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian instrument rating',
      'Focuses on U.S. IFR rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-ira-instrument-rating-airplane', 'faa-ach-atp-helicopter-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ira-instrument-rating-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question instrument written that unlocks flying in the clouds.',
    description: 'The Instrument Rating Airplane (IRA) knowledge test, commonly the instrument written, is the FAA exam required for the instrument rating in airplanes. It has 60 questions covering IFR regulations, approach plates, holding procedures, icing and instrument navigation systems over about 2.5 hours. Passing it is required before the instrument practical test and is what lets a pilot fly under instrument flight rules. It is one of the most career-relevant ratings a pilot can add.',
    quickAnswer: {
      summary: 'The IRA is a 60-question, computer-based FAA test for the instrument rating airplane, scheduled via PSI for $175 and passed at 70%. It covers IFR regs, approach plates, holding and icing and runs about 2.5 hours. Passing it precedes the instrument practical test.',
      advantages: [
        'Lets you fly under IFR and in instrument conditions',
        'A near-mandatory step for any airline career',
        'Builds on private pilot knowledge',
        'Flat $175 PSI fee',
        'Dramatically improves weather flexibility'
      ]
    },
    roadmap: ['Hold private certificate', 'Train under the hood and in sim', 'Get instructor endorsement', 'Pass 60-question IRA at 70%', 'Complete the instrument practical'],
    prerequisites: 'You must hold at least a private pilot certificate and meet the instrument aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'IFR regulations (Part 61/91)' },
      { name: 'Approach plates and procedures' },
      { name: 'Holding and intercept procedures' },
      { name: 'Icing and weather' },
      { name: 'Instrument navigation systems' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take IRA', duration: '1 day' },
      { stage: 'Instrument practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Instrument practical (DPE)', fee: '$500-$1,000' }
      ],
      total: '$175 up to ~$1,300',
      footnote: 'Excludes the flight and simulator training needed to reach the instrument experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private pilots adding instrument privileges',
    time: '6-12 weeks',
    cost: '$175-$1,300',
    faqs: [
      { q: 'How hard is the IRA?', a: 'Challenging for many because it is dense and procedural, but well-structured study and a written prep course make the 70% very achievable.' },
      { q: 'How long to study?', a: 'Six to twelve weeks alongside instrument flight training is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Absolutely. The instrument rating is required for most professional flying and gives you weather flexibility even as a hobby pilot.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select IRA, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Required for the instrument rating airplane',
      'Covers IFR regs, approaches and icing',
      'Valid 24 months; precedes the instrument practical'
    ],
    relatedSlugs: ['faa-par-private-pilot-airplane', 'faa-cax-commercial-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-ifp-instrument-rating-foreign-pilot',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question written for foreign licence holders adding an FAA instrument rating.',
    description: 'The Instrument Rating Foreign Pilot (IFP) knowledge test is taken by holders of a foreign pilot licence who are adding an FAA instrument rating on the basis of that foreign certificate. It has 50 questions covering the U.S.-specific IFR regulations, airspace and procedures that differ from the pilot’s home authority over about 2 hours. Passing it precedes the instrument practical and is the recognition route for experienced foreign pilots.',
    quickAnswer: {
      summary: 'The IFP is a 50-question, computer-based FAA test for foreign licence holders adding an FAA instrument rating, scheduled via PSI for $175 and passed at 70%. It reviews U.S. IFR rules and airspace differences and runs about 2 hours. Passing it precedes the instrument practical.',
      advantages: [
        'Adds an FAA instrument rating on the basis of a foreign licence',
        '50 questions focused on U.S. differences',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables IFR flying in the U.S.'
      ]
    },
    roadmap: ['Hold a foreign pilot licence with instrument', 'Verify eligibility', 'Schedule IFP via PSI', 'Pass 50 questions at 70%', 'Complete the instrument practical'],
    prerequisites: 'You must hold a foreign pilot licence with an instrument rating and meet FAA eligibility; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. IFR regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Approach charts and minima differences' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '3-6 weeks' },
      { stage: 'Take IFP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Foreign licence holders adding an FAA instrument rating',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the IFP?', a: 'Moderate. It assumes foreign instrument experience and mainly tests U.S.-specific IFR rules and airspace.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you hold a foreign licence and want to fly IFR in the U.S.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select IFP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'For foreign licence holders adding an instrument rating',
      'Focuses on U.S. IFR rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-ira-instrument-rating-airplane', 'faa-ich-instrument-rating-helicopter-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ich-instrument-rating-helicopter-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that maps a Canadian instrument-helicopter rating to an FAA rating.',
    description: 'The Instrument Rating Helicopter Canadian Conversion (ICH) knowledge test lets a holder of a Canadian instrument-rated helicopter licence obtain the equivalent FAA instrument-helicopter rating. It is a 40-question conversion exam covering the U.S.-specific IFR regulations, airspace and procedures that differ from Transport Canada. It is a recognition route that spares a qualified Canadian pilot from the full 60-question IRH. It supports pilots who need the FAA instrument helicopter rating for U.S. operations.',
    quickAnswer: {
      summary: 'The ICH is a 40-question conversion test for Canadian instrument-rated helicopter pilots seeking the FAA instrument-helicopter rating, booked through PSI for $175 and passed at 70%. It reviews U.S. IFR rules and airspace differences and runs about 2 hours. It is a recognition path, not the full IRH.',
      advantages: [
        'Converts a Canadian instrument helicopter rating to an FAA rating',
        '40 questions versus 60 on the full IRH',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables IFR helicopter flying in the U.S.'
      ]
    },
    roadmap: ['Hold a Canadian instrument helicopter rating', 'Verify conversion eligibility', 'Schedule ICH via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian instrument-rated helicopter licence and meet FAA conversion requirements; the foreign rating serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. IFR regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Helicopter IFR approach differences' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '3-6 weeks' },
      { stage: 'Take ICH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian instrument-rated helicopter pilots',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the ICH?', a: 'Moderate. It assumes the Canadian instrument helicopter rating and mainly checks U.S.-specific IFR rules and airspace.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly IFR helicopters in the U.S.; it converts your Canadian rating efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select ICH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian instrument helicopter rating',
      'Focuses on U.S. IFR rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-irh-instrument-rating-helicopter', 'faa-icp-instrument-rating-airplane-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-irh-instrument-rating-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question instrument written for flying helicopters on instruments.',
    description: 'The Instrument Rating Helicopter (IRH) knowledge test is the FAA written required for the instrument rating in helicopters. It has 60 questions covering IFR rules, helicopter instrument approaches, weather and navigation over about 2.5 hours. Passing it is required before the instrument helicopter practical test and lets a pilot fly rotorcraft under IFR. It is the helicopter counterpart to the airplane IRA.',
    quickAnswer: {
      summary: 'The IRH is a 60-question, computer-based FAA test for the instrument rating helicopter, scheduled via PSI for $175 and passed at 70%. It covers IFR rules, helicopter instrument approaches, weather and navigation and runs about 2.5 hours. Passing it precedes the instrument helicopter practical.',
      advantages: [
        'Lets you fly helicopters under IFR',
        'Builds on private helicopter knowledge',
        'Flat $175 PSI fee',
        'Career-relevant rotorcraft rating',
        'Improves weather flexibility'
      ]
    },
    roadmap: ['Hold private helicopter', 'Train under the hood', 'Get instructor endorsement', 'Pass 60-question IRH at 70%', 'Complete the instrument practical'],
    prerequisites: 'You must hold at least a private pilot certificate with a rotorcraft rating and meet the instrument experience requirements before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'IFR regulations (Part 61/91)' },
      { name: 'Helicopter instrument approaches' },
      { name: 'Weather' },
      { name: 'Instrument navigation' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take IRH', duration: '1 day' },
      { stage: 'Instrument practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Instrument practical (DPE)', fee: '$500-$1,000' }
      ],
      total: '$175 up to ~$1,300',
      footnote: 'Excludes the flight training needed to reach the instrument experience minimums.'
    },
    difficulty: 'Challenging',
    audience: 'Private helicopter pilots adding instrument privileges',
    time: '6-12 weeks',
    cost: '$175-$1,300',
    faqs: [
      { q: 'How hard is the IRH?', a: 'Challenging, similar to the airplane IRA but with rotorcraft approach nuances; dense procedural study is needed.' },
      { q: 'How long to study?', a: 'Six to twelve weeks alongside helicopter instrument training is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes for helicopter pilots who want IFR capability or an airline/EMS career path.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select IRH, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Required for the instrument rating helicopter',
      'Covers IFR rules and helicopter approaches',
      'Valid 24 months; precedes the instrument practical'
    ],
    relatedSlugs: ['faa-prh-private-pilot-helicopter', 'faa-crh-commercial-pilot-helicopter'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-mca-military-competence-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question military-competence written that converts military aeroplane experience to a civil certificate.',
    description: 'The Military Competence Airplane (MCA) knowledge test allows qualified military aeroplane pilots to obtain a civil FAA pilot certificate without taking the full private or commercial written. It is a 50-question regulations test covering the civil rules and airspace a military pilot must know, over about 2 hours. Passing it is the knowledge component of the military-competence conversion path. It recognizes service flight experience and speeds civil certification.',
    quickAnswer: {
      summary: 'The MCA is a 50-question, computer-based FAA regulations test for qualified military aeroplane pilots seeking a civil certificate, booked through PSI for $175 and passed at 70%. It covers civil regulations and airspace and runs about 2 hours. Passing it supports the military-competence conversion.',
      advantages: [
        'Converts military aeroplane experience to a civil FAA certificate',
        'Only 50 questions of civil regulations',
        'Recognizes service flight training',
        'Flat $175 PSI fee',
        'Faster than the full private/commercial written'
      ]
    },
    roadmap: ['Hold qualifying military aeroplane experience', 'Verify military-competence eligibility', 'Schedule MCA via PSI', 'Pass 50 questions at 70%', 'Complete the civil certificate paperwork'],
    prerequisites: 'You must be a qualified U.S. military aeroplane pilot meeting the FAA military-competence criteria; your service record serves as authorization.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Civil regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC' },
      { name: 'Civil certificates and privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study civil regs', duration: '3-6 weeks' },
      { stage: 'Take MCA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Military-competence conversion may still require a practical test; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Qualified military aeroplane pilots',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the MCA?', a: 'Moderate. It tests civil regulations rather than flying skill, so military pilots with strong systems knowledge adapt quickly.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91 and U.S. airspace is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it for military pilots leaving service who want a civil certificate efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select MCA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Military-competence conversion for aeroplane pilots',
      'Focuses on civil regulations',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-mch-military-competence-helicopter', 'faa-par-private-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-mch-military-competence-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question military-competence written that converts military helicopter experience to a civil certificate.',
    description: 'The Military Competence Helicopter (MCH) knowledge test allows qualified military helicopter pilots to obtain a civil FAA pilot certificate without the full private or commercial written. It is a 50-question regulations test covering civil rules and airspace over about 2 hours. Passing it is the knowledge component of the military-competence conversion path. It recognizes service rotorcraft experience and speeds civil certification.',
    quickAnswer: {
      summary: 'The MCH is a 50-question, computer-based FAA regulations test for qualified military helicopter pilots seeking a civil certificate, booked through PSI for $175 and passed at 70%. It covers civil regulations and airspace and runs about 2 hours. Passing it supports the military-competence conversion.',
      advantages: [
        'Converts military helicopter experience to a civil FAA certificate',
        'Only 50 questions of civil regulations',
        'Recognizes service flight training',
        'Flat $175 PSI fee',
        'Faster than the full private/commercial written'
      ]
    },
    roadmap: ['Hold qualifying military helicopter experience', 'Verify military-competence eligibility', 'Schedule MCH via PSI', 'Pass 50 questions at 70%', 'Complete the civil certificate paperwork'],
    prerequisites: 'You must be a qualified U.S. military helicopter pilot meeting the FAA military-competence criteria; your service record serves as authorization.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Civil regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC' },
      { name: 'Civil certificates and privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study civil regs', duration: '3-6 weeks' },
      { stage: 'Take MCH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Military-competence conversion may still require a practical test; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Qualified military helicopter pilots',
    time: '3-6 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the MCH?', a: 'Moderate. It tests civil regulations rather than flying skill, so military rotorcraft pilots adapt quickly.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on Part 61/91 and U.S. airspace is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it for military helicopter pilots leaving service who want a civil certificate efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select MCH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Military-competence conversion for helicopter pilots',
      'Focuses on civil regulations',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-mca-military-competence-airplane', 'faa-prh-private-pilot-helicopter'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-mci-military-competence-instructor',
    body: 'Federal Aviation Administration',
    tagline: 'The 125-question military-competence written for service instructor pilots seeking a civilian CFI.',
    description: 'The Military Competence Instructor (MCI) knowledge test lets military instructor pilots obtain a civilian flight instructor certificate on the basis of their service experience. It is a 125-question exam covering civil instructor regulations, teaching methods and the FOI-style material a civilian CFI must know, over about 3-4 hours. Passing it is the knowledge component of the military-competence instructor conversion. It recognizes military IP experience and speeds civilian certification.',
    quickAnswer: {
      summary: 'The MCI is a 125-question, computer-based FAA test for military instructor pilots seeking a civilian flight instructor certificate, booked through PSI for $175 and passed at 70%. It covers civil instructor regulations and teaching methods and runs about 3-4 hours. Passing it supports the military-competence instructor conversion.',
      advantages: [
        'Converts military instructor-pilot experience to a civilian CFI',
        'Covers civilian teaching requirements',
        'Recognizes service instructor time',
        'Flat $175 PSI fee',
        'Faster than the full CFI track'
      ]
    },
    roadmap: ['Hold qualifying military instructor-pilot experience', 'Verify eligibility', 'Schedule MCI via PSI', 'Pass 125 questions at 70%', 'Complete the civilian CFI practical'],
    prerequisites: 'You must be a qualified U.S. military instructor pilot meeting the FAA military-competence criteria; your service record serves as authorization.',
    examMeta: {
      questions: '125',
      time: '3.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Civil instructor regulations' },
      { name: 'Teaching methods and FOI material' },
      { name: 'Student endorsements' },
      { name: 'Civil certificates and privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study civil instructor material', duration: '6-12 weeks' },
      { stage: 'Take MCI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$375',
      footnote: 'Military-competence instructor conversion may still require a practical test; confirm with a FSDO.'
    },
    difficulty: 'Hard',
    audience: 'Qualified military instructor pilots',
    time: '6-12 weeks',
    cost: '$175-$375',
    faqs: [
      { q: 'How hard is the MCI?', a: 'Hard due to the 125-question length and civilian teaching-theory content that military IPs may not have studied.' },
      { q: 'How long to study?', a: 'Six to twelve weeks focused on FOI-style material and civil instructor regs is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it for military instructor pilots transitioning to civilian flight instruction.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select MCI, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '125 questions, 3.5 hours, 70% to pass',
      'Military-competence instructor conversion',
      'Covers civil instructor regulations',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-mca-military-competence-airplane', 'faa-fia-flight-instructor-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-part-107-initial-training-alc-451',
    body: 'Federal Aviation Administration',
    tagline: 'The free online course that lets current Part 61 pilots skip the Part 107 written.',
    description: 'The Part 107 Small UAS Initial Training (ALC-451) is a free online course on the FAA FAASTeam site that lets a current Part 61 pilot who holds a flight review earn a remote pilot certificate without sitting the UAG knowledge test. It covers the Part 107 rules, airspace, weather and operations in a self-paced online module. Completing ALC-451 and submitting the paperwork through IACRA is the recognition path for already-certificated pilots moving into drones. It is training, not a PSI exam.',
    quickAnswer: {
      summary: 'ALC-451 is a free, self-paced online FAASTeam course that current Part 61 pilots with a flight review take instead of the $175 UAG written to earn a Part 107 remote pilot certificate. It covers the Part 107 rules, airspace and weather, and you finish it online at your own pace. Completion is reported through IACRA; no PSI test is required.',
      advantages: [
        'Free and taken entirely online',
        'Spares a current Part 61 pilot the $175 UAG written',
        'Self-paced through the FAA FAASTeam site',
        'Counts toward the remote pilot certificate',
        'Recognizes existing pilot knowledge'
      ]
    },
    roadmap: ['Hold a current Part 61 certificate with flight review', 'Complete ALC-451 online', 'Submit the remote pilot application via IACRA', 'Pass the TSA background check', 'Receive the remote pilot certificate'],
    prerequisites: 'You must hold a Part 61 pilot certificate and have completed a flight review within the past 24 months; otherwise you take the UAG written instead.',
    examMeta: {
      questions: 'Course (no fixed exam question count)',
      time: 'Self-paced (about 2-3 hours)',
      pass: 'Completion-based',
      fee: 'Free',
      format: 'Online course (FAASTeam / FAASafety.gov)',
      admin: 'FAA FAASTeam online'
    },
    topics: [
      { name: 'Part 107 rules and operations' },
      { name: 'Airspace for small UAS' },
      { name: 'Weather and physiological factors' },
      { name: 'Loading and emergency procedures' }
    ],
    examEssentials: [
      ['Delivery', 'FAA FAASTeam online course'],
      ['Retake', 'Free to repeat as needed'],
      ['Validity', 'Supports a 24-month certificate; recurrent every 24 months']
    ],
    timeline: [
      { stage: 'Complete ALC-451', duration: '1-3 days' },
      { stage: 'IACRA application', duration: 'within days' },
      { stage: 'TSA check and certificate', duration: '1-2 weeks' }
    ],
    costBreakdown: {
      items: [
        { item: 'Course fee', fee: 'Free' },
        { item: 'UAG written (if not eligible)', fee: '$175' }
      ],
      total: 'Free (or $175 if you take the written instead)',
      footnote: 'This is an online training course, not a PSI knowledge test; the FAA charges nothing for the certificate.'
    },
    difficulty: 'Easy',
    audience: 'Current Part 61 pilots earning a remote pilot certificate',
    time: '1-3 days',
    cost: 'Free',
    faqs: [
      { q: 'Is ALC-451 a test?', a: 'No. It is a free online course on FAASafety.gov. You work through the modules and then apply for the remote pilot certificate via IACRA; there is no PSI written.' },
      { q: 'How long does it take?', a: 'Most pilots finish in two to three hours of self-paced study, often in one sitting.' },
      { q: 'Does it expire?', a: 'The course supports a remote pilot certificate valid 24 months; after that you complete the free ALC-677 recurrent training.' },
      { q: 'Is it worth it?', a: 'Yes if you already hold a Part 61 certificate with a flight review, because it saves the $175 UAG written and the trip to a test center.' },
      { q: 'How do I enroll?', a: 'Log into FAASafety.gov, find the Part 107 initial (ALC-451) course, complete it, then file the remote pilot application in IACRA.' }
    ],
    summaryPoints: [
      'Free online FAASTeam course, not a PSI test',
      'For current Part 61 pilots with a flight review',
      'Replaces the $175 UAG written',
      'Leads to a 24-month remote pilot certificate'
    ],
    relatedSlugs: ['faa-part-107-recurrent-training-alc-677', 'faa-uag-unmanned-aircraft-general'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-part-107-recurrent-training-alc-677',
    body: 'Federal Aviation Administration',
    tagline: 'The free online recurrent course every Part 107 pilot repeats every 24 months.',
    description: 'The Part 107 Small UAS Recurrent Training (ALC-677) is a free online course on the FAA FAASTeam site that remote pilots complete every 24 calendar months to keep their Part 107 certificate privileges current. It replaced the paid recurrent knowledge exam in 2021 and covers rule changes, airspace refreshers and safety. Completing it online satisfies the recurrent requirement; no separate test or fee is involved. It is training, not a PSI exam.',
    quickAnswer: {
      summary: 'ALC-677 is a free, self-paced online FAASTeam course that Part 107 remote pilots complete every 24 calendar months to keep their certificate current. It covers rule updates, airspace and safety, and replaces the old paid recurrent written. You finish it online and the completion is logged; no PSI test or fee is required.',
      advantages: [
        'Free and entirely online',
        'Required only every 24 months',
        'Replaced the old paid recurrent written',
        'Self-paced on FAASafety.gov',
        'Keeps your remote pilot privileges active'
      ]
    },
    roadmap: ['Hold a Part 107 certificate', 'Log into FAASafety.gov before expiry', 'Complete ALC-677 online', 'Keep the completion record', 'Stay current for another 24 months'],
    prerequisites: 'You must hold a Part 107 remote pilot certificate; complete the course before the 24-month window closes to avoid a lapse.',
    examMeta: {
      questions: 'Course (no fixed exam question count)',
      time: 'Self-paced (about 1-2 hours)',
      pass: 'Completion-based',
      fee: 'Free',
      format: 'Online course (FAASTeam / FAASafety.gov)',
      admin: 'FAA FAASTeam online'
    },
    topics: [
      { name: 'Part 107 rule updates' },
      { name: 'Airspace refresher' },
      { name: 'Safety and risk management' }
    ],
    examEssentials: [
      ['Delivery', 'FAA FAASTeam online course'],
      ['Retake', 'Free to repeat as needed'],
      ['Validity', 'Recurrent every 24 calendar months']
    ],
    timeline: [
      { stage: 'Complete ALC-677', duration: '1-2 days' },
      { stage: 'Logged as current', duration: 'immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'Course fee', fee: 'Free' }
      ],
      total: 'Free',
      footnote: 'This is an online training course, not a PSI knowledge test; the FAA charges nothing.'
    },
    difficulty: 'Easy',
    audience: 'Current Part 107 remote pilots maintaining currency',
    time: '1-2 days',
    cost: 'Free',
    faqs: [
      { q: 'Is ALC-677 a test?', a: 'No. It is a free online refresher course. You complete the modules and your completion is logged; there is no PSI written or fee.' },
      { q: 'How long does it take?', a: 'Most pilots finish in one to two hours of self-paced study.' },
      { q: 'Does it expire?', a: 'The currency it grants lasts 24 calendar months; you repeat the course before then to stay current.' },
      { q: 'Is it worth it?', a: 'Yes, it is mandatory to keep flying under Part 107, and it is free.' },
      { q: 'How do I enroll?', a: 'Log into FAASafety.gov, open the Part 107 recurrent (ALC-677) course, and complete it before your 24-month window ends.' }
    ],
    summaryPoints: [
      'Free online FAASTeam course, not a PSI test',
      'Required every 24 months to stay current',
      'Replaced the paid recurrent written',
      'Keeps Part 107 privileges active'
    ],
    relatedSlugs: ['faa-part-107-initial-training-alc-451', 'faa-uag-unmanned-aircraft-general'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-pcp-private-pilot-airplane-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that maps a Canadian private licence to an FAA private certificate.',
    description: 'The Private Pilot Airplane Canadian Conversion (PCP) knowledge test converts a Canadian private pilot aeroplane licence into an FAA private pilot certificate. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada over about 2 hours. It is a recognition route that spares a qualified Canadian private pilot from the full 60-question PAR. It supports pilots who want to fly privately in the U.S.',
    quickAnswer: {
      summary: 'The PCP is a 40-question conversion test for Canadian private aeroplane licence holders seeking the FAA private certificate, booked through PSI for $175 and passed at 70%. It reviews U.S. rules and airspace differences and runs about 2 hours. It is a recognition path, not the full PAR.',
      advantages: [
        'Converts a Canadian private licence to an FAA certificate',
        '40 questions versus 60 on the full PAR',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables private flying in the U.S.'
      ]
    },
    roadmap: ['Hold a Canadian private aeroplane licence', 'Verify conversion eligibility', 'Schedule PCP via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian private pilot aeroplane licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Private pilot privileges under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take PCP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian private aeroplane licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the PCP?', a: 'Moderate. It assumes the Canadian private licence and mainly checks U.S.-specific rules and airspace rather than core flying theory.' },
      { q: 'How long to study?', a: 'Two to four weeks focused on Part 61/91 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly privately in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select PCP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian private aeroplane licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-par-private-pilot-airplane', 'faa-acm-atp-multiengine-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-par-private-pilot-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written that starts almost every piloting career.',
    description: 'The Private Pilot Airplane (PAR) knowledge test, often called the private pilot written, is the FAA exam most student pilots take first. It has 60 questions covering airspace, weather, sectional charts, weight and balance and regulations over about 2.5 hours. Passing it is required before the private pilot practical test and is the foundation for every further rating. It is the entry point to flying for personal and recreational purposes.',
    quickAnswer: {
      summary: 'The PAR is a 60-question, computer-based FAA test for the private pilot airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers airspace, weather, charts, weight and balance and regulations and runs about 2.5 hours. Passing it precedes the private pilot practical test.',
      advantages: [
        'The standard first step to becoming a pilot',
        'Foundation for every later rating',
        'Flat $175 PSI fee',
        'Required for personal and recreational flying',
        'Recognized by every flight school'
      ]
    },
    roadmap: ['Start flight training', 'Study airspace, weather and regs', 'Get instructor endorsement', 'Pass 60-question PAR at 70%', 'Complete the private pilot practical'],
    prerequisites: 'You must be at least 17 (or 16 for gliders/balloons), able to read and speak English, and hold at least a student pilot certificate before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Airspace and ATC' },
      { name: 'Meteorology' },
      { name: 'Sectional charts and navigation' },
      { name: 'Weight and balance' },
      { name: 'Regulations (Part 61/91)' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PAR', duration: '1 day' },
      { stage: 'Private pilot practical', duration: 'within 24 months' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private pilot practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$1,100',
      footnote: 'Excludes the flight training that dominates the real cost of learning to fly.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots earning the private certificate',
    time: '6-12 weeks',
    cost: '$175-$1,100',
    faqs: [
      { q: 'How hard is the PAR?', a: 'Moderate. The material is broad but introductory; most students pass comfortably with a good written-prep course and consistent study.' },
      { q: 'How long to study?', a: 'Six to twelve weeks alongside flight lessons is typical, since the written and flying reinforce each other.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months; you must finish the practical within that window.' },
      { q: 'Is it worth it?', a: 'Yes, it is the mandatory gateway to a pilot certificate and to every rating that follows.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PAR, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Required for the private pilot airplane certificate',
      'Covers airspace, weather and charts',
      'Valid 24 months; precedes the private practical'
    ],
    relatedSlugs: ['faa-ira-instrument-rating-airplane', 'faa-pcp-private-pilot-airplane-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-pat-private-pilot-recreational-transition',
    body: 'Federal Aviation Administration',
    tagline: 'The 30-question bridge written for recreational pilots upgrading to private.',
    description: 'The Private Pilot Airplane Recreational Pilot Transition (PAT) knowledge test is a 30-question bridging exam for recreational pilots upgrading to a private pilot airplane certificate. It covers the additional regulations, airspace and operations a recreational pilot must learn to reach private privileges over about 1.5 hours. Passing it is the knowledge step that, with the appropriate flight training, upgrades a recreational certificate. It is a shorter, targeted test rather than the full PAR.',
    quickAnswer: {
      summary: 'The PAT is a 30-question, computer-based FAA test for recreational pilots upgrading to the private pilot airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers the added regs, airspace and operations beyond recreational limits and runs about 1.5 hours. It is a bridge test, not the full PAR.',
      advantages: [
        'Upgrades a recreational certificate to private',
        'Only 30 questions versus 60 on the full PAR',
        'Builds on recreational pilot knowledge',
        'Flat $175 PSI fee',
        'Removes recreational flying restrictions'
      ]
    },
    roadmap: ['Hold a recreational pilot certificate', 'Train for the private privileges gap', 'Get instructor endorsement', 'Pass 30-question PAT at 70%', 'Complete the private practical'],
    prerequisites: 'You must hold a recreational pilot certificate and meet the additional private aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '30',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Added regulations beyond recreational limits' },
      { name: 'Expanded airspace' },
      { name: 'Private pilot operations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study the gap', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PAT', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$975',
      footnote: 'Excludes the extra flight training needed to close the recreational-to-private gap.'
    },
    difficulty: 'Easy',
    audience: 'Recreational pilots upgrading to private',
    time: '3-6 weeks',
    cost: '$175-$975',
    faqs: [
      { q: 'How hard is the PAT?', a: 'Easy to moderate. It tests only the material beyond the recreational certificate, so it is shorter than the full private written.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on the gap areas is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes if you hold a recreational certificate and want the fewer restrictions of a private certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PAT, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '30 questions, 1.5 hours, 70% to pass',
      'Bridges recreational to private pilot airplane',
      'Covers added regs and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-rpa-recreational-pilot-airplane', 'faa-par-private-pilot-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pla-private-pilot-airship',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying lighter-than-air airships.',
    description: 'The Private Pilot Airship (PLA) knowledge test is the FAA written required for the private pilot certificate in the airship class of lighter-than-air aircraft. It has 60 questions covering airship buoyancy, envelope pressure, mooring and airspace rules over about 2.5 hours. Passing it precedes the private airship practical test and lets a pilot fly airships privately. It is a niche lighter-than-air certificate.',
    quickAnswer: {
      summary: 'The PLA is a 60-question, computer-based FAA test for the private pilot airship certificate, scheduled via PSI for $175 and passed at 70%. It covers buoyancy, envelope pressure, mooring and airspace and runs about 2.5 hours. Passing it precedes the private airship practical.',
      advantages: [
        'Private pilot authority in the airship class',
        'Builds on lighter-than-air knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private airship flying'
      ]
    },
    roadmap: ['Begin airship training', 'Study buoyancy and airspace', 'Get endorsement', 'Pass 60-question PLA at 70%', 'Complete the private airship practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for the airship class before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Airship buoyancy and envelope pressure' },
      { name: 'Mooring and ground handling' },
      { name: 'Airspace rules' },
      { name: 'Meteorology' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PLA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$975',
      footnote: 'Airship training availability is limited, which shapes total cost more than the written fee.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in airships',
    time: '6-12 weeks',
    cost: '$175-$975',
    faqs: [
      { q: 'How hard is the PLA?', a: 'Moderate. The 60 questions are standard for a private test, but airship material is specialized.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for those specifically pursuing airship flying, a small but distinct segment.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PLA, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot airship certificate',
      'Covers buoyancy and envelope pressure',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-cla-commercial-pilot-airship', 'faa-pbh-private-pilot-balloon-hot-air'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pbg-private-pilot-balloon-gas',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying gas balloons.',
    description: 'The Private Pilot Balloon Gas (PBG) knowledge test is the FAA written required for the private pilot certificate in the gas balloon class. It has 60 questions covering gas balloon inflation, ballast, valve operation and weather over about 2.5 hours. Passing it precedes the private gas balloon practical test and lets a pilot fly gas balloons privately. It is a niche lighter-than-air certificate.',
    quickAnswer: {
      summary: 'The PBG is a 60-question, computer-based FAA test for the private pilot gas balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers inflation, ballast, valve operation and weather and runs about 2.5 hours. Passing it precedes the private gas balloon practical.',
      advantages: [
        'Private pilot authority in the gas balloon class',
        'Builds on lighter-than-air knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private gas balloon flying'
      ]
    },
    roadmap: ['Begin balloon training', 'Study inflation and ballast', 'Get endorsement', 'Pass 60-question PBG at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for the balloon class before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gas balloon inflation and ballast' },
      { name: 'Valve operation' },
      { name: 'Weather for ballooning' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PBG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Gas balloon training opportunities are rare, which shapes total cost more than the written fee.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in gas balloons',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PBG?', a: 'Moderate. The 60 questions are standard for a private test, with specialized gas balloon physics.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for those pursuing gas balloon flying specifically.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PBG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot gas balloon certificate',
      'Covers inflation and ballast',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-cbg-commercial-pilot-balloon-gas', 'faa-pbh-private-pilot-balloon-hot-air'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pbh-private-pilot-balloon-hot-air',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying hot-air balloons.',
    description: 'The Private Pilot Balloon Hot Air (PBH) knowledge test is the FAA written required for the private pilot certificate in the hot air balloon class. It has 60 questions covering hot air balloon systems, launch and landing site selection, surface winds and balloon regulations over about 2.5 hours. Passing it precedes the private hot air balloon practical test and is the most common balloon private rating. It lets a pilot fly balloons privately.',
    quickAnswer: {
      summary: 'The PBH is a 60-question, computer-based FAA test for the private pilot hot air balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers systems, launch and landing sites, surface winds and regulations and runs about 2.5 hours. Passing it precedes the private balloon practical.',
      advantages: [
        'Private pilot authority in the hot air balloon class',
        'The most common balloon private rating',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private balloon flying'
      ]
    },
    roadmap: ['Begin balloon training', 'Study systems and wind', 'Get endorsement', 'Pass 60-question PBH at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for the balloon class before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Hot air balloon systems' },
      { name: 'Launch and landing site selection' },
      { name: 'Surface winds' },
      { name: 'Balloon regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PBH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes balloon flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in hot air balloons',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PBH?', a: 'Moderate. The 60 questions are standard for a private test, with balloon-specific systems and weather.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those who want to fly hot air balloons privately; it is the standard balloon private rating.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PBH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot hot air balloon certificate',
      'Covers systems and surface winds',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-cbh-commercial-pilot-balloon-hot-air', 'faa-pbg-private-pilot-balloon-gas'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-pgl-private-pilot-glider',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying gliders.',
    description: 'The Private Pilot Glider (PGL) knowledge test is the FAA written required for the private pilot certificate in gliders. It has 60 questions covering glider aerodynamics, aerotow and winch launch procedures, thermals and airspace over about 2.5 hours. Passing it precedes the private glider practical test and lets a pilot fly gliders privately. It is the soaring community’s entry certificate.',
    quickAnswer: {
      summary: 'The PGL is a 60-question, computer-based FAA test for the private pilot glider certificate, scheduled via PSI for $175 and passed at 70%. It covers aerodynamics, launch procedures, thermals and airspace and runs about 2.5 hours. Passing it precedes the private glider practical.',
      advantages: [
        'Private pilot authority in gliders',
        'Builds on soaring knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private glider flying'
      ]
    },
    roadmap: ['Begin glider training', 'Study aerodynamics and launches', 'Get endorsement', 'Pass 60-question PGL at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for gliders before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Glider aerodynamics' },
      { name: 'Aerotow and winch launches' },
      { name: 'Thermals and soaring' },
      { name: 'Airspace' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PGL', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes glider flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in gliders',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PGL?', a: 'Moderate. The 60 questions are standard for a private test, with soaring-specific aerodynamics and launch procedures.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those who want to fly gliders privately; it is the standard glider private rating.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PGL, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot glider certificate',
      'Covers launches and thermals',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-cgx-commercial-pilot-glider', 'faa-fig-flight-instructor-glider'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-prg-private-pilot-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying gyroplanes.',
    description: 'The Private Pilot Gyroplane (PRG) knowledge test is the FAA written required for the private pilot certificate in gyroplanes. It has 60 questions covering gyroplane rotor systems, prerotation, performance limits and general aviation regulations over about 2.5 hours. Passing it precedes the private gyroplane practical test and lets a pilot fly gyroplanes privately. It is a niche rotorcraft certificate.',
    quickAnswer: {
      summary: 'The PRG is a 60-question, computer-based FAA test for the private pilot gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers rotor systems, prerotation, performance limits and regs and runs about 2.5 hours. Passing it precedes the private gyroplane practical.',
      advantages: [
        'Private pilot authority in gyroplanes',
        'Builds on rotorcraft knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private gyroplane flying'
      ]
    },
    roadmap: ['Begin gyroplane training', 'Study rotor systems and regs', 'Get endorsement', 'Pass 60-question PRG at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for gyroplanes before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane rotor systems' },
      { name: 'Prerotation' },
      { name: 'Performance limits' },
      { name: 'General aviation regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PRG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes gyroplane flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in gyroplanes',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PRG?', a: 'Moderate. The 60 questions are standard for a private test, with rotor-system specifics.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those pursuing gyroplane flying specifically.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PRG, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot gyroplane certificate',
      'Covers rotor systems and prerotation',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-crg-commercial-pilot-gyroplane', 'faa-frg-flight-instructor-gyroplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pgt-private-pilot-gyroplane-recreational-transition',
    body: 'Federal Aviation Administration',
    tagline: 'The 30-question bridge written for recreational gyroplane pilots upgrading to private.',
    description: 'The Private Pilot Gyroplane Recreational Pilot Transition (PGT) knowledge test is a 30-question bridging exam for recreational gyroplane pilots upgrading to a private pilot gyroplane certificate. It covers the additional regulations, airspace and operations beyond recreational limits over about 1.5 hours. Passing it is the knowledge step that, with the appropriate flight training, upgrades a recreational gyroplane certificate. It is a shorter, targeted test rather than the full PRG.',
    quickAnswer: {
      summary: 'The PGT is a 30-question, computer-based FAA test for recreational gyroplane pilots upgrading to the private pilot gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers the added regs, airspace and operations beyond recreational limits and runs about 1.5 hours. It is a bridge test, not the full PRG.',
      advantages: [
        'Upgrades a recreational gyroplane certificate to private',
        'Only 30 questions versus 60 on the full PRG',
        'Builds on recreational pilot knowledge',
        'Flat $175 PSI fee',
        'Removes recreational flying restrictions'
      ]
    },
    roadmap: ['Hold a recreational gyroplane certificate', 'Train for the private gap', 'Get instructor endorsement', 'Pass 30-question PGT at 70%', 'Complete the private practical'],
    prerequisites: 'You must hold a recreational pilot certificate and meet the additional private aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '30',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Added regulations beyond recreational limits' },
      { name: 'Expanded airspace' },
      { name: 'Private pilot operations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study the gap', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PGT', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes the extra flight training needed to close the recreational-to-private gap.'
    },
    difficulty: 'Easy',
    audience: 'Recreational gyroplane pilots upgrading to private',
    time: '3-6 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PGT?', a: 'Easy to moderate. It tests only the material beyond the recreational certificate, so it is shorter than the full private written.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on the gap areas is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes if you hold a recreational gyroplane certificate and want the fewer restrictions of a private certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PGT, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '30 questions, 1.5 hours, 70% to pass',
      'Bridges recreational to private gyroplane',
      'Covers added regs and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-rpg-recreational-pilot-gyroplane', 'faa-prg-private-pilot-gyroplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pch-private-pilot-helicopter-canadian-conversion',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question conversion written that maps a Canadian private helicopter licence to an FAA certificate.',
    description: 'The Private Pilot Helicopter Canadian Conversion (PCH) knowledge test converts a Canadian private helicopter licence into an FAA private pilot rotorcraft certificate. It is a 40-question conversion exam covering the U.S.-specific regulations, airspace and procedures that differ from Transport Canada over about 2 hours. It is a recognition route that spares a qualified Canadian private helicopter pilot from the full 60-question PRH. It supports pilots who want to fly privately in the U.S.',
    quickAnswer: {
      summary: 'The PCH is a 40-question conversion test for Canadian private helicopter licence holders seeking the FAA private rotorcraft certificate, booked through PSI for $175 and passed at 70%. It reviews U.S. rules and airspace differences and runs about 2 hours. It is a recognition path, not the full PRH.',
      advantages: [
        'Converts a Canadian private helicopter licence to an FAA certificate',
        '40 questions versus 60 on the full PRH',
        'Recognizes existing foreign competence',
        'Flat $175 PSI fee',
        'Enables private flying in the U.S.'
      ]
    },
    roadmap: ['Hold a Canadian private helicopter licence', 'Verify conversion eligibility', 'Schedule PCH via PSI', 'Pass 40 questions at 70%', 'Complete any required practical steps'],
    prerequisites: 'You must hold a Canadian private pilot helicopter licence and meet FAA conversion requirements; the foreign licence serves as your authorization.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'U.S. regulations (Part 61/91)' },
      { name: 'U.S. airspace and ATC procedures' },
      { name: 'Private pilot privileges under U.S. rules' },
      { name: 'Weather and NOTAM differences' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Verify eligibility', duration: '1-2 weeks' },
      { stage: 'Study U.S. differences', duration: '2-4 weeks' },
      { stage: 'Take PCH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' }
      ],
      total: '$175-$325',
      footnote: 'Foreign-licence conversion may require extra FAA processing; confirm with a FSDO.'
    },
    difficulty: 'Moderate',
    audience: 'Canadian private helicopter licence holders',
    time: '2-4 weeks',
    cost: '$175-$325',
    faqs: [
      { q: 'How hard is the PCH?', a: 'Moderate. It assumes the Canadian private licence and mainly checks U.S.-specific rules and airspace rather than core flying theory.' },
      { q: 'How long to study?', a: 'Two to four weeks focused on Part 61/91 and U.S. airspace is usually enough.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA knowledge tests.' },
      { q: 'Is it worth it?', a: 'Worth it if you plan to fly privately in the U.S.; it converts your Canadian licence efficiently.' },
      { q: 'How do I schedule it?', a: 'Use your FTN, log into faa.psiexams.com, select PCH, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Converts a Canadian private helicopter licence',
      'Focuses on U.S. rules and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-prh-private-pilot-helicopter', 'faa-pcp-private-pilot-airplane-canadian-conversion'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-prh-private-pilot-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying helicopters.',
    description: 'The Private Pilot Helicopter (PRH) knowledge test is the FAA written required for the private pilot certificate in helicopters. It has 60 questions covering helicopter aerodynamics, height-velocity diagrams, weather and airspace over about 2.5 hours. Passing it precedes the private helicopter practical test and lets a pilot fly helicopters privately. It is the foundation for every helicopter rating that follows.',
    quickAnswer: {
      summary: 'The PRH is a 60-question, computer-based FAA test for the private pilot helicopter certificate, scheduled via PSI for $175 and passed at 70%. It covers aerodynamics, height-velocity diagrams, weather and airspace and runs about 2.5 hours. Passing it precedes the private helicopter practical.',
      advantages: [
        'Private pilot authority in helicopters',
        'Foundation for helicopter ratings',
        'Flat $175 PSI fee',
        'Recognized rotorcraft credential',
        'Entry to private helicopter flying'
      ]
    },
    roadmap: ['Begin helicopter training', 'Study aerodynamics and regs', 'Get endorsement', 'Pass 60-question PRH at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for helicopters before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter aerodynamics' },
      { name: 'Height-velocity diagrams' },
      { name: 'Weather' },
      { name: 'Airspace' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PRH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$200' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$975',
      footnote: 'Excludes helicopter flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in helicopters',
    time: '6-12 weeks',
    cost: '$175-$975',
    faqs: [
      { q: 'How hard is the PRH?', a: 'Moderate. The 60 questions are standard for a private test, with rotorcraft aerodynamics and height-velocity concepts.' },
      { q: 'How long to study?', a: 'Six to twelve weeks alongside helicopter lessons is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those who want to fly helicopters privately; it is the foundation for later helicopter ratings.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PRH, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot helicopter certificate',
      'Covers aerodynamics and height-velocity',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-crh-commercial-pilot-helicopter', 'faa-rph-recreational-pilot-helicopter'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pht-private-pilot-helicopter-recreational-transition',
    body: 'Federal Aviation Administration',
    tagline: 'The 30-question bridge written for recreational helicopter pilots upgrading to private.',
    description: 'The Private Pilot Helicopter Recreational Pilot Transition (PHT) knowledge test is a 30-question bridging exam for recreational helicopter pilots upgrading to a private pilot rotorcraft certificate. It covers the additional regulations, airspace and operations beyond recreational limits over about 1.5 hours. Passing it is the knowledge step that, with the appropriate flight training, upgrades a recreational helicopter certificate. It is a shorter, targeted test rather than the full PRH.',
    quickAnswer: {
      summary: 'The PHT is a 30-question, computer-based FAA test for recreational helicopter pilots upgrading to the private pilot rotorcraft certificate, scheduled via PSI for $175 and passed at 70%. It covers the added regs, airspace and operations beyond recreational limits and runs about 1.5 hours. It is a bridge test, not the full PRH.',
      advantages: [
        'Upgrades a recreational helicopter certificate to private',
        'Only 30 questions versus 60 on the full PRH',
        'Builds on recreational pilot knowledge',
        'Flat $175 PSI fee',
        'Removes recreational flying restrictions'
      ]
    },
    roadmap: ['Hold a recreational helicopter certificate', 'Train for the private gap', 'Get instructor endorsement', 'Pass 30-question PHT at 70%', 'Complete the private practical'],
    prerequisites: 'You must hold a recreational pilot certificate and meet the additional private aeronautical-experience requirements before the practical.',
    examMeta: {
      questions: '30',
      time: '1.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Added regulations beyond recreational limits' },
      { name: 'Expanded airspace' },
      { name: 'Private pilot operations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study the gap', duration: '3-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PHT', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$400-$800' }
      ],
      total: '$175 up to ~$975',
      footnote: 'Excludes the extra flight training needed to close the recreational-to-private gap.'
    },
    difficulty: 'Easy',
    audience: 'Recreational helicopter pilots upgrading to private',
    time: '3-6 weeks',
    cost: '$175-$975',
    faqs: [
      { q: 'How hard is the PHT?', a: 'Easy to moderate. It tests only the material beyond the recreational certificate, so it is shorter than the full private written.' },
      { q: 'How long to study?', a: 'Three to six weeks focused on the gap areas is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes if you hold a recreational helicopter certificate and want the fewer restrictions of a private certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PHT, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '30 questions, 1.5 hours, 70% to pass',
      'Bridges recreational to private helicopter',
      'Covers added regs and airspace',
      'Flat $175 PSI fee, 24-month validity'
    ],
    relatedSlugs: ['faa-rph-recreational-pilot-helicopter', 'faa-prh-private-pilot-helicopter'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-ppp-private-pilot-powered-parachute',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying powered parachutes.',
    description: 'The Private Pilot Powered Parachute (PPP) knowledge test is the FAA written required for the private pilot certificate in powered parachutes. It has 60 questions covering powered parachute canopies, launch technique, wind limitations and airspace over about 2.5 hours. Passing it precedes the private powered-parachute practical test and lets a pilot fly powered parachutes privately. It is a light-sport-style certificate.',
    quickAnswer: {
      summary: 'The PPP is a 60-question, computer-based FAA test for the private pilot powered parachute certificate, scheduled via PSI for $175 and passed at 70%. It covers canopies, launch technique, wind limits and airspace and runs about 2.5 hours. Passing it precedes the private practical.',
      advantages: [
        'Private pilot authority in powered parachutes',
        'Builds on light-sport knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private powered-parachute flying'
      ]
    },
    roadmap: ['Begin powered-parachute training', 'Study canopies and wind', 'Get endorsement', 'Pass 60-question PPP at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for powered parachutes before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Powered parachute canopies' },
      { name: 'Launch technique' },
      { name: 'Wind limitations' },
      { name: 'Airspace' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PPP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes powered-parachute flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in powered parachutes',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PPP?', a: 'Moderate. The 60 questions are standard for a private test, with powered-parachute canopy and wind specifics.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those pursuing powered-parachute flying specifically.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PPP, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot powered parachute certificate',
      'Covers canopies and wind limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spp-sport-pilot-powered-parachute', 'faa-pbh-private-pilot-balloon-hot-air'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-pws-private-pilot-weight-shift-control',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question private written for flying weight-shift-control trikes.',
    description: 'The Private Pilot Weight-Shift-Control (PWS) knowledge test is the FAA written required for the private pilot certificate in weight-shift-control aircraft. It has 60 questions covering trike handling, performance, weather and regulations over about 2.5 hours. Passing it precedes the private weight-shift-control practical test and lets a pilot fly trikes privately. It is a light-sport-style certificate.',
    quickAnswer: {
      summary: 'The PWS is a 60-question, computer-based FAA test for the private pilot weight-shift-control certificate, scheduled via PSI for $175 and passed at 70%. It covers trike handling, performance, weather and regulations and runs about 2.5 hours. Passing it precedes the private practical.',
      advantages: [
        'Private pilot authority in weight-shift-control',
        'Builds on light-sport knowledge',
        'Flat $175 PSI fee',
        'Specialized aviation credential',
        'Entry to private trike flying'
      ]
    },
    roadmap: ['Begin WSC training', 'Study handling and performance', 'Get endorsement', 'Pass 60-question PWS at 70%', 'Complete the private practical'],
    prerequisites: 'You must meet the private pilot aeronautical-experience requirements for weight-shift-control before the practical.',
    examMeta: {
      questions: '60',
      time: '2.5 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Trike handling and control inputs' },
      { name: 'Performance' },
      { name: 'Weather' },
      { name: 'Regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '6-12 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take PWS', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Private practical (DPE)', fee: '$300-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes weight-shift-control flight training needed for the private experience minimums.'
    },
    difficulty: 'Moderate',
    audience: 'Student pilots training in weight-shift-control',
    time: '6-12 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the PWS?', a: 'Moderate. The 60 questions are standard for a private test, with weight-shift-control handling specifics.' },
      { q: 'How long to study?', a: 'Six to twelve weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for those pursuing weight-shift-control flying specifically.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select PWS, pay $175 and book a center.' }
    ],
    summaryPoints: [
      '60 questions, 2.5 hours, 70% to pass',
      'Private pilot weight-shift-control certificate',
      'Covers trike handling and performance',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-spw-sport-pilot-weight-shift-control', 'faa-prg-private-pilot-gyroplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-rpa-recreational-pilot-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question recreational written for limited, nearby private flying.',
    description: 'The Recreational Pilot Airplane (RPA) knowledge test is the FAA written required for the recreational pilot certificate, which limits pilots to smaller single-engine aircraft and nearby airports. It has 50 questions covering the reduced regulation set, airspace near the home base and basicweather over about 2 hours. Passing it precedes the recreational pilot practical test. The recreational certificate is a lighter alternative to the private certificate with narrower privileges.',
    quickAnswer: {
      summary: 'The RPA is a 50-question, computer-based FAA test for the recreational pilot airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers the reduced reg set, nearby airspace and basic weather and runs about 2 hours. Passing it precedes the recreational pilot practical.',
      advantages: [
        'A lighter certificate than private with fewer requirements',
        'Lets you fly small aircraft near home',
        'Flat $175 PSI fee',
        'A stepping stone toward the private certificate',
        'Lower training burden than the PAR'
      ]
    },
    roadmap: ['Begin training under recreational limits', 'Study the reduced reg set', 'Get instructor endorsement', 'Pass 50-question RPA at 70%', 'Complete the recreational practical'],
    prerequisites: 'You must meet the recreational pilot aeronautical-experience requirements, which are fewer than for private, before the practical.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Reduced regulations for recreational pilots' },
      { name: 'Airspace near the home base' },
      { name: 'Basic weather' },
      { name: 'Privileges and limitations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take RPA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Recreational practical (DPE)', fee: '$350-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes the flight training needed for the recreational experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'Pilots wanting limited, local flying',
    time: '4-8 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the RPA?', a: 'Easy. It is shorter than the private written (50 questions) and covers a reduced regulation set.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for pilots who only want to fly small aircraft locally and plan to upgrade later; most now go straight to private.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select RPA, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Recreational pilot airplane certificate',
      'Covers reduced regs and nearby airspace',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-par-private-pilot-airplane', 'faa-pat-private-pilot-recreational-transition'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-rpg-recreational-pilot-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question recreational written for limited gyroplane flying.',
    description: 'The Recreational Pilot Gyroplane (RPG) knowledge test is the FAA written required for the recreational pilot certificate in gyroplanes. It has 50 questions covering gyroplane basics and the operating limitations that apply to recreational pilot certificate holders over about 2 hours. Passing it precedes the recreational gyroplane practical test. It is a lighter alternative to the private gyroplane certificate with narrower privileges.',
    quickAnswer: {
      summary: 'The RPG is a 50-question, computer-based FAA test for the recreational pilot gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers gyroplane basics and recreational operating limits and runs about 2 hours. Passing it precedes the recreational practical.',
      advantages: [
        'A lighter certificate than private with fewer requirements',
        'Lets you fly gyroplanes recreationally',
        'Flat $175 PSI fee',
        'A stepping stone toward the private certificate',
        'Lower training burden than the PRG'
      ]
    },
    roadmap: ['Begin training under recreational limits', 'Study gyroplane basics', 'Get instructor endorsement', 'Pass 50-question RPG at 70%', 'Complete the recreational practical'],
    prerequisites: 'You must meet the recreational pilot aeronautical-experience requirements for gyroplanes before the practical.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane basics' },
      { name: 'Recreational operating limitations' },
      { name: 'Weather' },
      { name: 'Privileges and limitations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take RPG', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Recreational practical (DPE)', fee: '$350-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes the flight training needed for the recreational experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'Pilots wanting limited gyroplane flying',
    time: '4-8 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the RPG?', a: 'Easy. It is shorter than the private written (50 questions) and covers gyroplane basics and limits.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for pilots who only want recreational gyroplane flying and may upgrade later.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select RPG, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Recreational pilot gyroplane certificate',
      'Covers gyroplane basics and limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-prg-private-pilot-gyroplane', 'faa-pgt-private-pilot-gyroplane-recreational-transition'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-rph-recreational-pilot-helicopter',
    body: 'Federal Aviation Administration',
    tagline: 'The 50-question recreational written for limited helicopter flying.',
    description: 'The Recreational Pilot Helicopter (RPH) knowledge test is the FAA written required for the recreational pilot certificate in helicopters. It has 50 questions covering helicopter fundamentals and the recreational pilot restrictions such as distance and passenger limits over about 2 hours. Passing it precedes the recreational helicopter practical test. It is a lighter alternative to the private helicopter certificate with narrower privileges.',
    quickAnswer: {
      summary: 'The RPH is a 50-question, computer-based FAA test for the recreational pilot helicopter certificate, scheduled via PSI for $175 and passed at 70%. It covers helicopter fundamentals and recreational restrictions and runs about 2 hours. Passing it precedes the recreational practical.',
      advantages: [
        'A lighter certificate than private with fewer requirements',
        'Lets you fly helicopters recreationally',
        'Flat $175 PSI fee',
        'A stepping stone toward the private certificate',
        'Lower training burden than the PRH'
      ]
    },
    roadmap: ['Begin training under recreational limits', 'Study helicopter fundamentals', 'Get instructor endorsement', 'Pass 50-question RPH at 70%', 'Complete the recreational practical'],
    prerequisites: 'You must meet the recreational pilot aeronautical-experience requirements for helicopters before the practical.',
    examMeta: {
      questions: '50',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Helicopter fundamentals' },
      { name: 'Recreational restrictions (distance, passengers)' },
      { name: 'Weather' },
      { name: 'Privileges and limitations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take RPH', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Recreational practical (DPE)', fee: '$350-$700' }
      ],
      total: '$175 up to ~$875',
      footnote: 'Excludes the flight training needed for the recreational experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'Pilots wanting limited helicopter flying',
    time: '4-8 weeks',
    cost: '$175-$875',
    faqs: [
      { q: 'How hard is the RPH?', a: 'Easy. It is shorter than the private written (50 questions) and covers helicopter fundamentals and limits.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Worth it for pilots who only want recreational helicopter flying and may upgrade later.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select RPH, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '50 questions, 2 hours, 70% to pass',
      'Recreational pilot helicopter certificate',
      'Covers fundamentals and restrictions',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-prh-private-pilot-helicopter', 'faa-pht-private-pilot-helicopter-recreational-transition'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spa-sport-pilot-airplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for the lightest path into airplane flying.',
    description: 'The Sport Pilot Airplane (SPA) knowledge test is the FAA written required for the sport pilot certificate in light-sport airplanes. It has 40 questions covering light-sport aircraft limits, airspace, weather and regulations under Part 61 Subpart J over about 2 hours. Passing it precedes the sport pilot practical test. The sport certificate is the lowest-barrier pilot certificate and does not require a third-class medical.',
    quickAnswer: {
      summary: 'The SPA is a 40-question, computer-based FAA test for the sport pilot airplane certificate, scheduled via PSI for $175 and passed at 70%. It covers light-sport limits, airspace, weather and regs and runs about 2 hours. Passing it precedes the sport pilot practical.',
      advantages: [
        'The lowest-barrier path to a pilot certificate',
        'No third-class medical required (driver license suffices in most cases)',
        'Flat $175 PSI fee',
        'Fewer experience hours than private',
        'A great entry to personal flying'
      ]
    },
    roadmap: ['Begin light-sport training', 'Study sport limits and airspace', 'Get instructor endorsement', 'Pass 40-question SPA at 70%', 'Complete the sport pilot practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements under Part 61 Subpart J; a driver license generally substitutes for a medical.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Light-sport aircraft limits' },
      { name: 'Airspace' },
      { name: 'Weather' },
      { name: 'Sport pilot regulations (Part 61 Subpart J)' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPA', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes light-sport flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPA?', a: 'Easy. With 40 questions and no medical requirement, it is the most approachable pilot written, but you still must learn airspace and weather.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational flyers who want the simplest certificate; many later upgrade to private for fewer limits.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPA, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot airplane certificate',
      'Covers light-sport limits and airspace',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-par-private-pilot-airplane', 'faa-sia-flight-instructor-sport-airplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spi-sport-pilot-glider',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying gliders under sport pilot rules.',
    description: 'The Sport Pilot Glider (SPI) knowledge test is the FAA written required for the sport pilot certificate in gliders. It has 40 questions covering glider operations within sport pilot privileges, including launch methods and airspace rules over about 2 hours. Passing it precedes the sport glider practical test. It is the lightest path to soaring.',
    quickAnswer: {
      summary: 'The SPI is a 40-question, computer-based FAA test for the sport pilot glider certificate, scheduled via PSI for $175 and passed at 70%. It covers glider operations, launch methods and airspace and runs about 2 hours. Passing it precedes the sport glider practical.',
      advantages: [
        'The lowest-barrier path to glider flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Fewer experience hours than private glider',
        'A great entry to soaring'
      ]
    },
    roadmap: ['Begin glider training', 'Study launch methods and airspace', 'Get instructor endorsement', 'Pass 40-question SPI at 70%', 'Complete the sport glider practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for gliders under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Glider operations within sport privileges' },
      { name: 'Launch methods' },
      { name: 'Airspace rules' },
      { name: 'Sport pilot regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPI', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes glider flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New glider pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPI?', a: 'Easy. With 40 questions it is the most approachable glider written, but launch methods and airspace still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational glider flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPI, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot glider certificate',
      'Covers launch methods and airspace',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pgl-private-pilot-glider', 'faa-sig-flight-instructor-sport-glider'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spy-sport-pilot-gyroplane',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying gyroplanes under sport pilot rules.',
    description: 'The Sport Pilot Gyroplane (SPY) knowledge test is the FAA written required for the sport pilot certificate in gyroplanes. It has 40 questions covering gyroplane handling and the sport pilot operating limitations set out in Part 61 Subpart J over about 2 hours. Passing it precedes the sport gyroplane practical test. It is the lightest path to flying gyroplanes.',
    quickAnswer: {
      summary: 'The SPY is a 40-question, computer-based FAA test for the sport pilot gyroplane certificate, scheduled via PSI for $175 and passed at 70%. It covers gyroplane handling and sport pilot limits and runs about 2 hours. Passing it precedes the sport gyroplane practical.',
      advantages: [
        'The lowest-barrier path to gyroplane flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Fewer experience hours than private gyroplane',
        'A great entry to rotorcraft'
      ]
    },
    roadmap: ['Begin gyroplane training', 'Study handling and limits', 'Get instructor endorsement', 'Pass 40-question SPY at 70%', 'Complete the sport gyroplane practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for gyroplanes under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Gyroplane handling' },
      { name: 'Sport pilot operating limitations' },
      { name: 'Weather' },
      { name: 'Sport pilot regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPY', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes gyroplane flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New gyroplane pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPY?', a: 'Easy. With 40 questions it is the most approachable gyroplane written, but handling and limits still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational gyroplane flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPY, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot gyroplane certificate',
      'Covers handling and sport limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-prg-private-pilot-gyroplane', 'faa-siy-flight-instructor-sport-gyroplane'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spl-sport-pilot-airship',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying light-sport airships.',
    description: 'The Sport Pilot Lighter-Than-Air Airship (SPL) knowledge test is the FAA written required for the sport pilot certificate in the lighter-than-air airship class. It has 40 questions covering light-sport airship operation, buoyancy control and sport pilot rules over about 2 hours. Passing it precedes the sport airship practical test. It is a niche light-sport certificate.',
    quickAnswer: {
      summary: 'The SPL is a 40-question, computer-based FAA test for the sport pilot lighter-than-air airship certificate, scheduled via PSI for $175 and passed at 70%. It covers airship operation, buoyancy control and sport rules and runs about 2 hours. Passing it precedes the sport practical.',
      advantages: [
        'The lowest-barrier path to airship flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Specialized light-sport credential',
        'A great entry to lighter-than-air'
      ]
    },
    roadmap: ['Begin airship training', 'Study buoyancy and limits', 'Get instructor endorsement', 'Pass 40-question SPL at 70%', 'Complete the sport practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for the airship class under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Light-sport airship operation' },
      { name: 'Buoyancy control' },
      { name: 'Sport pilot rules' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPL', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes airship flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New airship pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPL?', a: 'Easy. With 40 questions it is the most approachable airship written, but buoyancy and limits still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational airship flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPL, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot lighter-than-air airship certificate',
      'Covers buoyancy control and sport rules',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pla-private-pilot-airship', 'faa-sil-flight-instructor-sport-airship'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spb-sport-pilot-balloon',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying lighter-than-air balloons.',
    description: 'The Sport Pilot Lighter-Than-Air Balloon (SPB) knowledge test is the FAA written required for the sport pilot certificate in balloons. It has 40 questions covering balloon systems, launch site assessment and sport pilot privileges over about 2 hours. Passing it precedes the sport balloon practical test. It is the lightest path to balloon flying.',
    quickAnswer: {
      summary: 'The SPB is a 40-question, computer-based FAA test for the sport pilot balloon certificate, scheduled via PSI for $175 and passed at 70%. It covers balloon systems, launch site assessment and sport rules and runs about 2 hours. Passing it precedes the sport balloon practical.',
      advantages: [
        'The lowest-barrier path to balloon flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Specialized light-sport credential',
        'A great entry to lighter-than-air'
      ]
    },
    roadmap: ['Begin balloon training', 'Study systems and launch sites', 'Get instructor endorsement', 'Pass 40-question SPB at 70%', 'Complete the sport practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for balloons under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Balloon systems' },
      { name: 'Launch site assessment' },
      { name: 'Sport pilot privileges' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPB', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes balloon flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New balloon pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPB?', a: 'Easy. With 40 questions it is the most approachable balloon written, but systems and launch-site assessment still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational balloon flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPB, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot balloon certificate',
      'Covers systems and launch sites',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pbh-private-pilot-balloon-hot-air', 'faa-sib-flight-instructor-sport-balloon'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'faa-spp-sport-pilot-powered-parachute',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying powered parachutes.',
    description: 'The Sport Pilot Powered Parachute (SPP) knowledge test is the FAA written required for the sport pilot certificate in powered parachutes. It has 40 questions covering powered parachute operation, canopy inflation, surface wind limits and sport pilot regulations over about 2 hours. Passing it precedes the sport powered-parachute practical test. It is the lightest path to powered-parachute flying.',
    quickAnswer: {
      summary: 'The SPP is a 40-question, computer-based FAA test for the sport pilot powered parachute certificate, scheduled via PSI for $175 and passed at 70%. It covers canopy inflation, wind limits and sport rules and runs about 2 hours. Passing it precedes the sport practical.',
      advantages: [
        'The lowest-barrier path to powered-parachute flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Specialized light-sport credential',
        'A great entry to powered parachutes'
      ]
    },
    roadmap: ['Begin powered-parachute training', 'Study canopy and wind limits', 'Get instructor endorsement', 'Pass 40-question SPP at 70%', 'Complete the sport practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for powered parachutes under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Powered parachute operation' },
      { name: 'Canopy inflation' },
      { name: 'Surface wind limits' },
      { name: 'Sport pilot regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPP', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes powered-parachute flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New powered-parachute pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPP?', a: 'Easy. With 40 questions it is the most approachable powered-parachute written, but canopy and wind limits still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational powered-parachute flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPP, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot powered parachute certificate',
      'Covers canopy and wind limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-ppp-private-pilot-powered-parachute', 'faa-sip-flight-instructor-sport-powered-parachute'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-spw-sport-pilot-weight-shift-control',
    body: 'Federal Aviation Administration',
    tagline: 'The 40-question sport written for flying weight-shift-control trikes.',
    description: 'The Sport Pilot Weight-Shift-Control (SPW) knowledge test is the FAA written required for the sport pilot certificate in weight-shift-control aircraft. It has 40 questions covering weight-shift-control operation and sport pilot limitations on airspace, altitude and passengers over about 2 hours. Passing it precedes the sport weight-shift-control practical test. It is the lightest path to flying trikes.',
    quickAnswer: {
      summary: 'The SPW is a 40-question, computer-based FAA test for the sport pilot weight-shift-control certificate, scheduled via PSI for $175 and passed at 70%. It covers trike operation and sport pilot limits and runs about 2 hours. Passing it precedes the sport practical.',
      advantages: [
        'The lowest-barrier path to weight-shift-control flying',
        'No third-class medical required in most cases',
        'Flat $175 PSI fee',
        'Specialized light-sport credential',
        'A great entry to trikes'
      ]
    },
    roadmap: ['Begin WSC training', 'Study operation and limits', 'Get instructor endorsement', 'Pass 40-question SPW at 70%', 'Complete the sport practical'],
    prerequisites: 'You must meet the sport pilot aeronautical-experience requirements for weight-shift-control under Part 61 Subpart J.',
    examMeta: {
      questions: '40',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Weight-shift-control operation' },
      { name: 'Sport pilot limitations (airspace, altitude, passengers)' },
      { name: 'Weather' },
      { name: 'Sport pilot regulations' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take SPW', duration: '1 day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials', fee: '$0-$150' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Sport pilot practical (DPE)', fee: '$300-$600' }
      ],
      total: '$175 up to ~$775',
      footnote: 'Excludes weight-shift-control flight training needed for the sport experience minimums.'
    },
    difficulty: 'Easy',
    audience: 'New weight-shift-control pilots wanting the lowest-barrier certificate',
    time: '4-8 weeks',
    cost: '$175-$775',
    faqs: [
      { q: 'How hard is the SPW?', a: 'Easy. With 40 questions it is the most approachable WSC written, but operation and limits still need study.' },
      { q: 'How long to study?', a: 'Four to eight weeks is typical.' },
      { q: 'Does it expire?', a: 'Yes, valid 24 calendar months like all FAA writtens.' },
      { q: 'Is it worth it?', a: 'Yes for recreational trike flyers who want the simplest certificate.' },
      { q: 'How do I schedule it?', a: 'Get your instructor endorsement, log into faa.psiexams.com with your FTN, select SPW, pay $175 and choose a center.' }
    ],
    summaryPoints: [
      '40 questions, 2 hours, 70% to pass',
      'Sport pilot weight-shift-control certificate',
      'Covers operation and sport limits',
      'Valid 24 months; precedes the practical'
    ],
    relatedSlugs: ['faa-pws-private-pilot-weight-shift-control', 'faa-siw-flight-instructor-sport-weight-shift-control'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'faa-trust-recreational-uas-safety-test',
    body: 'Federal Aviation Administration',
    tagline: 'The free online safety test every recreational drone flyer must pass.',
    description: 'The Recreational UAS Safety Test (TRUST) is a free online safety test that every recreational drone flyer in the United States must pass and carry proof of completion. It is not a pass/fail exam in the usual sense: the course teaches the rules and you must answer each section correctly to move on, with unlimited retakes. There is no fee and no PSI appointment; you complete it through an FAA-approved test administrator online. It is the legal baseline for flying a drone for fun.',
    quickAnswer: {
      summary: 'TRUST is a free, untimed online safety course the FAA requires every recreational drone pilot to complete. You work through the lessons with an FAA-approved test administrator and must answer each section correctly to finish, but you can retake any part as needed. There is no fee and no appointment; when done you download a certificate of completion to carry while flying.',
      advantages: [
        'Free and taken entirely online',
        'Required for all recreational drone flying',
        'Unlimited retakes, untimed',
        'No PSI appointment or fee',
        'Immediate certificate of completion'
      ]
    },
    roadmap: ['Pick an FAA-approved TRUST administrator', 'Work through the online lessons', 'Answer each section correctly', 'Download your certificate', 'Carry proof when you fly'],
    prerequisites: 'You must be flying a drone recreationally under Part 44809 (the Exception for Recreational Flyers); no prior certificate is needed.',
    examMeta: {
      questions: 'Module-based (must answer each correctly)',
      time: 'Untimed (about 30-60 minutes)',
      pass: 'Correct answers required per section',
      fee: 'Free',
      format: 'Online safety test (FAA-approved administrator)',
      admin: 'FAA-approved online test administrator'
    },
    topics: [
      { name: 'Recreational drone rules' },
      { name: 'Airspace and airport proximity' },
      { name: 'Safety and right-of-way' },
      { name: 'Flying near people and emergencies' }
    ],
    examEssentials: [
      ['Delivery', 'FAA-approved online administrator'],
      ['Retake', 'Unlimited, free'],
      ['Validity', 'Certificate is kept on file; carry proof when flying']
    ],
    timeline: [
      { stage: 'Complete TRUST', duration: '1 day' },
      { stage: 'Keep certificate', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [
        { item: 'TRUST fee', fee: 'Free' }
      ],
      total: 'Free',
      footnote: 'This is a free online safety test, not a PSI knowledge test; the FAA charges nothing.'
    },
    difficulty: 'Easy',
    audience: 'Recreational drone flyers',
    time: '1 day',
    cost: 'Free',
    faqs: [
      { q: 'Is TRUST hard?', a: 'No. It is an educational safety course; you must answer each section correctly but can retake sections until you do, with no time limit.' },
      { q: 'How long does it take?', a: 'Most people finish in 30 to 60 minutes in a single online session.' },
      { q: 'Does it expire?', a: 'The certificate does not expire, but you must carry proof of completion every time you fly recreationally.' },
      { q: 'Is it worth it?', a: 'It is mandatory for legal recreational flying and costs nothing, so there is no reason to skip it.' },
      { q: 'How do I take it?', a: 'Choose any FAA-approved TRUST administrator online, complete the lessons, and download your certificate of completion.' }
    ],
    summaryPoints: [
      'Free online safety test, not a PSI exam',
      'Required for all recreational drone flying',
      'Unlimited retakes, untimed',
      'Certificate must be carried while flying'
    ],
    relatedSlugs: ['faa-uag-unmanned-aircraft-general', 'faa-part-107-recurrent-training-alc-677'],
    sourceUrl: 'https://www.faa.gov/uas/recreational_fliers_-_public/trust',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'faa-uag-unmanned-aircraft-general',
    body: 'Federal Aviation Administration',
    tagline: 'The 60-question Part 107 test that turns a hobbyist into a paid drone pilot.',
    description: 'The Unmanned Aircraft General Small (UAG) knowledge test, also called the Part 107 test or remote pilot exam, is the FAA written required for the Part 107 remote pilot certificate. It has 60 questions covering airspace, weather, loading and drone regulations over about 2 hours. Passing it at 70% is required before the FAA issues the remote pilot certificate, which lets you fly small drones for compensation. Unlike pilot certificates, there is no separate flight test.',
    quickAnswer: {
      summary: 'The UAG is a 60-question, computer-based FAA test for the Part 107 remote pilot certificate, scheduled via PSI for $175 and passed at 70%. It covers airspace, weather, loading and drone regulations and runs about 2 hours. Pass it and, with the TSA check, you receive the certificate; no flight test is required.',
      advantages: [
        'The certificate that lets you fly drones for pay',
        'No practical flight test required',
        'Flat $175 PSI fee',
        'Recognized for commercial drone work',
        'Open to anyone 16 or older who passes'
      ]
    },
    roadmap: ['Study Part 107 material', 'Schedule UAG via PSI', 'Pass 60 questions at 70%', 'File the IACRA application', 'Pass the TSA check and receive the certificate'],
    prerequisites: 'You must be at least 16 years old, able to read and speak English, and be of sound mind and body; no prior pilot certificate is required.',
    examMeta: {
      questions: '60',
      time: '2.0 hours',
      pass: '70%',
      fee: '$175',
      format: 'Computer-based multiple choice (PSI)',
      admin: 'PSI FAA-approved testing center'
    },
    topics: [
      { name: 'Airspace and airport operations' },
      { name: 'Weather and effects on small UAS' },
      { name: 'Loading and performance' },
      { name: 'Part 107 regulations' },
      { name: 'Emergency and radio procedures' }
    ],
    examEssentials: [
      ['Delivery', 'PSI computer test center'],
      ['Retake', '30-day wait plus instructor endorsement'],
      ['Validity', '24 calendar months (recurrent training required)']
    ],
    timeline: [
      { stage: 'Study', duration: '2-6 weeks' },
      { stage: 'Schedule with PSI', duration: '1-2 weeks' },
      { stage: 'Take UAG', duration: '1 day' },
      { stage: 'IACRA and TSA', duration: '1-2 weeks' }
    ],
    costBreakdown: {
      items: [
        { item: 'Knowledge test fee (PSI)', fee: '$175' },
        { item: 'Prep materials / course', fee: '$0-$300' },
        { item: 'Retake (if failed)', fee: '$175 each' },
        { item: 'Recurrent training (every 24 months)', fee: 'Free (ALC-677)' }
      ],
      total: '$175-$475',
      footnote: 'The FAA charges nothing for the certificate or the recurrent course; only the initial PSI test fee applies.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring commercial drone pilots',
    time: '2-6 weeks',
    cost: '$175-$475',
    faqs: [
      { q: 'How hard is the UAG?', a: 'Moderate. The 60 questions test airspace, weather and Part 107 rules; a good prep course makes the 70% very achievable even for non-pilots.' },
      { q: 'How long to study?', a: 'Two to six weeks is typical, depending on whether you already hold a Part 61 pilot certificate.' },
      { q: 'Does it expire?', a: 'The certificate is valid 24 months; you keep it current with the free ALC-677 recurrent training rather than retaking the test.' },
      { q: 'Is it worth it?', a: 'Yes if you want to earn money with a drone; Part 107 is the legal baseline for commercial small-UAS operations.' },
      { q: 'How do I schedule it?', a: 'Log into faa.psiexams.com with your FTN, select UAG, pay $175 and choose a PSI center; no instructor endorsement is needed.' }
    ],
    summaryPoints: [
      '60 questions, 2 hours, 70% to pass',
      'Required for the Part 107 remote pilot certificate',
      'Covers airspace, weather and Part 107 rules',
      'Valid 24 months; free recurrent training'
    ],
    relatedSlugs: ['faa-trust-recreational-uas-safety-test', 'faa-part-107-initial-training-alc-451'],
    sourceUrl: 'https://www.faa.gov/training_testing/testing/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  // __APPEND_HERE__
];

export default { programs, exams };
