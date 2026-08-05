export const programs = [
  {
    id: 'college-board',
    body: 'College Board',
    bodyUrl: 'https://apstudents.collegeboard.org',
    about: 'The College Board is a nonprofit membership association that runs the Advanced Placement (AP) Program, through which high-school students take college-level courses and earn credit or placement by exam each May. AP exams are administered digitally through the Bluebook app in schools, scored 1 to 5, and accepted for credit or advanced standing by most US colleges.',
    registrationSteps: [
      { title: 'Join through your school and My AP', description: 'AP exams are school-administered. Your teacher gives you a join code for the course in My AP; you generally cannot register for the exam independently.', duration: 'per school year' },
      { title: 'Confirm your exam order with the school', description: 'Schools submit exam orders to the College Board in the fall, with a late-order window that adds a $40 fee. Exam-only and self-studied students usually register through a local school that accepts outside testers.', duration: 'fall' },
      { title: 'Pay the exam fee', description: 'The 2025-26 fee is $99 in the US, US territories, Canada and DoDEA schools, and $129 elsewhere. Eligible students receive a $37 fee reduction.', duration: 'at order' },
      { title: 'Prepare with official materials', description: 'Use AP Classroom, AP Daily videos, and the free Course and Exam Description (CED) for your subject. Commercial guides from Kaplan, Princeton Review, and Barron\'s are optional.', duration: 'varies' },
      { title: 'Take the digital exam in May', description: 'Most exams run in Bluebook at your school under AP security; portfolio and language-performance tasks are submitted through the AP Digital Portfolio.', duration: 'May' },
      { title: 'Receive scores in early July', description: 'Scores post in early July on your College Board account and can be sent to colleges for free during the four years after your exam.', duration: 'early July' }
    ],
    proctoring: 'AP exams are administered digitally on school-managed devices through the Bluebook app under AP security protocols. A few subjects (portfolio art, Capstone, and some language speaking tasks) use the AP Digital Portfolio instead of Bluebook.',
    retakePolicy: 'Students generally take each AP exam once per school year. There is no open retake; a later attempt simply adds another score to the record. Score verification or rescore requests cost $30.',
    recertification: 'AP scores do not expire at the source and remain on your College Board record indefinitely. Colleges set their own limits on how old a score they will accept for credit.',
    scoreReporting: 'AP uses a 1-5 scale; a 3 is generally considered passing for college credit, though selective schools often want 4 or 5. Scores release in early July.',
    refundPolicy: 'A $40 fee applies to late exam orders and to unused or canceled exams. The $37 fee reduction lowers the cost to about $53 in the US or $83 internationally for eligible students.',
    providersNote: 'Start with AP Classroom, AP Daily videos, and the official CED and practice exams. Well-known third-party publishers (Kaplan, Princeton Review, Barron\'s, Fiveable) are widely used but not affiliated with the College Board.',
    comparison: {
      title: 'How AP exams are delivered',
      columns: ['Delivery', 'Subjects', 'Notes'],
      rows: [
        { label: 'Fully digital', values: ['Most history, English, government, psych, stats', 'All sections in Bluebook'] },
        { label: 'Hybrid digital', values: ['Calculus, physics, economics, precalc', 'MCQ in Bluebook, FRQ on paper'] },
        { label: 'Portfolio or performance', values: ['Art, Seminar, Research, languages', 'Submitted via AP Digital Portfolio'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I take an AP exam without taking the AP course?', a: 'Usually the exam is taken through your school, but many schools let independent and homeschooled students register as exam-only testers. You still sit the same digital exam in May.' },
      { q: 'Will my college accept AP credit?', a: 'Most US colleges grant credit or placement for AP scores of 3 and above, but minimum scores and credit amounts vary widely. Check each school\'s AP credit policy before testing.' }
    ],
    sourceUrl: 'https://apstudents.collegeboard.org',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'ap-art-history',
    body: 'College Board',
    tagline: 'Master 250 works across global cultures and earn college art-history credit by exam.',
    description: 'AP Art History asks you to study 250 required works of art and architecture from prehistory to the present, then analyze them through visual, contextual, and comparative lenses. The exam pairs 80 multiple-choice questions with six free-response essays that test attribution, contextualization, and comparison across cultures. A score of 3 typically earns college credit, though selective schools often want a 4 or 5.',
    quickAnswer: {
      summary: 'AP Art History is a fully digital exam built around 250 required works. You answer 80 multiple-choice questions in one hour and six free-response essays in two hours; a score of 3 usually earns college credit, with many schools granting three to six credits.',
      advantages: [
        'Covers global art, not just Western canon, across 10 chronological and thematic units',
        'A 3 generally earns credit; strong scores can place out of a full survey course',
        'Fully digital in Bluebook with stable question types year to year',
        'Strong fit for art, design, architecture, and humanities majors'
      ]
    },
    roadmap: ['Join the AP Art History course via My AP', 'Study the 250 required works across the 10 units', 'Practice attribution and comparison essays', 'Use AP Classroom progress checks', 'Take the digital exam in early May'],
    prerequisites: 'None required, though a year of high-school art history or studio art helps.',
    examMeta: {
      questions: '80 multiple choice + 6 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Global Prehistory', weight: '4%', note: 'Works before 30,000 BCE' },
      { name: 'Unit 2: Ancient Mediterranean', weight: '15%', note: 'Near East, Egypt, Greece, Rome' },
      { name: 'Unit 3: Early Europe and Colonial Americas', weight: '21%', note: 'Byzantium through 1750 CE' },
      { name: 'Unit 4: Later Europe and Americas', weight: '21%', note: '1750-1980 CE' },
      { name: 'Unit 5: Indigenous Americas', weight: '6%', note: 'Arts of Native American peoples' },
      { name: 'Unit 6: Africa', weight: '6%', note: 'Sub-Saharan artistic traditions' },
      { name: 'Unit 7: West and Central Asia', weight: '4%', note: 'Islamic and regional art' },
      { name: 'Unit 8: South, East, and Southeast Asia', weight: '8%', note: 'India, China, Japan, Southeast Asia' },
      { name: 'Unit 9: The Pacific', weight: '4%', note: 'Oceanic arts' },
      { name: 'Unit 10: Global Contemporary', weight: '11%', note: '1980 CE to present' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns credit; selective schools often want 4-5'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Required works', '250 images across 10 units'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the 250 required works', duration: 'Aug-May' },
      { stage: 'Practice essay comparisons', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students pursuing art, design, or humanities credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Art History worth?', a: 'Policies vary, but most colleges grant three to six credits for a 3 or higher, often satisfying a general-education arts or humanities requirement. Selective schools may require a 4 or 5 for credit or placement.' },
      { q: 'Is the exam hard?', a: 'The content load is the challenge: you must know 250 specific works cold. Students who build flashcards and practice comparison essays find the multiple-choice and free-response sections very predictable.' },
      { q: 'Can I self-study AP Art History?', a: 'Yes. The 250-work image set and past free-response prompts are public, so motivated students can self-study, though they must still register for the exam through a school.' },
      { q: 'What score do I need for college credit?', a: 'A 3 is the usual credit-granting threshold, but check your target school. Many public universities accept 3, while highly selective colleges prefer 4 or 5.' },
      { q: 'When is the exam?', a: 'AP Art History is administered once a year in early May, with scores released in early July.' }
    ],
    summaryPoints: [
      'Built around 250 required works of global art and architecture',
      '80 multiple-choice questions plus six free-response essays in three hours',
      'Scored 1-5; a 3 usually earns college credit',
      'Fully digital and delivered through Bluebook'
    ],
    relatedSlugs: ['ap-european-history', 'ap-world-history-modern', 'ap-english-literature-and-composition'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-art-history',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-biology',
    body: 'College Board',
    tagline: 'Prove first-year college biology mastery and skip intro bio with a 3 or higher.',
    description: 'AP Biology covers the full sweep of a first-year college biology course: evolution, cellular processes, genetics, information transfer, ecology, and interactions among biological systems. The exam blends 60 multiple-choice questions with six free-response questions that reward experimental design and data analysis. A 3 typically earns credit at public universities, while selective schools often require a 4 or 5 for placement out of introductory biology.',
    quickAnswer: {
      summary: 'AP Biology is a hybrid digital exam: 60 multiple-choice questions in 90 minutes and six free-response questions in 90 minutes. Scored 1-5, a 3 generally earns college credit, with many schools granting four to eight credits.',
      advantages: [
        'Maps to a full year of introductory college biology',
        'Free-response section emphasizes experimental design and data analysis',
        'Widely accepted for credit and pre-med or biology majors',
        'Official AP Classroom and AP Daily resources are free'
      ]
    },
    roadmap: ['Join the AP Biology course via My AP', 'Work through the 8 CED units', 'Practice grid-in and data FRQs', 'Take progress checks in AP Classroom', 'Sit the hybrid digital exam in May'],
    prerequisites: 'High-school biology and chemistry are recommended before attempting the course.',
    examMeta: {
      questions: '60 multiple choice + 6 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Chemistry of Life', weight: '8-11%', note: 'Water, macromolecules, enzymes' },
      { name: 'Unit 2: Cell Structure and Function', weight: '10-13%', note: 'Membranes, organelles, transport' },
      { name: 'Unit 3: Cellular Energetics', weight: '12-16%', note: 'Photosynthesis and respiration' },
      { name: 'Unit 4: Cell Communication and Cell Cycle', weight: '10-15%', note: 'Signaling and division' },
      { name: 'Unit 5: Heredity', weight: '8-11%', note: 'Meiosis and Mendelian genetics' },
      { name: 'Unit 6: Gene Expression and Regulation', weight: '12-16%', note: 'Central dogma, biotechnology' },
      { name: 'Unit 7: Natural Selection', weight: '13-20%', note: 'Evolution and speciation' },
      { name: 'Unit 8: Ecology', weight: '10-15%', note: 'Populations, communities, ecosystems' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns credit; selective schools often want 4-5'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Lab expectation', 'Inquiry-based lab work expected'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the 8 units with labs', duration: 'Aug-May' },
      { stage: 'Drill free-response data questions', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Challenging',
    audience: 'High-school students planning biology, pre-med, or health-science study',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Biology worth?', a: 'Most colleges grant four to eight credits for a 3 or higher, often covering a full semester of introductory biology. Policies differ, so confirm with your target school.' },
      { q: 'Is AP Biology harder than regular biology?', a: 'Yes, in depth and pace. It assumes comfort with chemistry and algebra and emphasizes experimental reasoning over memorization, which many students find harder than a standard high-school course.' },
      { q: 'Can I self-study AP Biology?', a: 'It is possible but demanding because of the lab-oriented free-response questions. Self-studiers should use the CED, practice exams, and a structured review book, and still register through a school.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold for credit at public universities; selective schools usually want 4 or 5 for placement out of introductory biology.' },
      { q: 'How long should I study?', a: 'Plan on the full school year if taking the course, or three to six focused months of self-study with regular practice free-response questions.' }
    ],
    summaryPoints: [
      'Equivalent to a year of introductory college biology',
      '60 multiple-choice plus six free-response questions in three hours',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-chemistry', 'ap-environmental-science', 'ap-human-geography'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-biology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-calculus-ab',
    body: 'College Board',
    tagline: 'Bank first-semester college calculus credit with limits, derivatives, and integrals.',
    description: 'AP Calculus AB covers the material of a first-semester college calculus course: limits, derivatives, integrals, and the Fundamental Theorem of Calculus. The exam is hybrid digital, with 42 multiple-choice questions in Bluebook and six free-response questions answered by hand. A 3 typically earns credit for Calculus I at public universities, while engineering and selective schools often expect a 4 or 5.',
    quickAnswer: {
      summary: 'AP Calculus AB is a hybrid digital exam: 42 multiple-choice questions in 100 minutes and six free-response questions in 90 minutes. Scored 1-5, a 3 generally earns Calculus I credit.',
      advantages: [
        'Equivalent to a first-semester college calculus course',
        'Clear, stable format with calculator and non-calculator portions',
        'Strongly valued for STEM, business, and economics majors',
        'Free official practice through AP Classroom'
      ]
    },
    roadmap: ['Join AP Calculus AB via My AP', 'Master limits, derivatives, integrals', 'Practice FRQs with and without a calculator', 'Take progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Completion of precalculus is expected before starting the course.',
    examMeta: {
      questions: '42 multiple choice + 6 free response',
      time: '3 hours 10 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Limits and Continuity', weight: '10-15%', note: 'Definition, properties, continuity' },
      { name: 'Unit 2: Differentiation', weight: '10-15%', note: 'Definitions and basic rules' },
      { name: 'Unit 3: Composite and Implicit Functions', weight: '5-10%', note: 'Chain rule, implicit differentiation' },
      { name: 'Unit 4: Contextual Applications', weight: '10-15%', note: 'Related rates, motion' },
      { name: 'Unit 5: Analytical Applications', weight: '15-20%', note: 'Extrema, concavity' },
      { name: 'Unit 6: Integration', weight: '15-20%', note: 'Accumulation, FTC' },
      { name: 'Unit 7: Differential Equations', weight: '5-10%', note: 'Slope fields, separation' },
      { name: 'Unit 8: Applications of Integration', weight: '10-15%', note: 'Area, volume' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns Calculus I credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Calculator', 'Required for one part of each section'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the 8 units', duration: 'Aug-May' },
      { stage: 'Practice calculator and non-calculator FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students needing college calculus for STEM or business',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Calculus AB worth?', a: 'Most colleges grant three to five credits for a 3 or higher, typically placing you out of Calculus I. Selective schools may require a 4 or 5.' },
      { q: 'Should I take AB or BC?', a: 'AB covers a single semester of calculus; BC covers a full year plus series and vectors and includes an AB subscore. Take BC if you have strong algebra foundations and want more credit.' },
      { q: 'Can I self-study Calculus AB?', a: 'Yes, many students self-study successfully using the CED and practice exams, since the format is highly predictable. You still register for the exam through a school.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual credit threshold for Calculus I at public universities; engineering programs often want 4 or 5.' },
      { q: 'How long is the exam?', a: 'Three hours and ten minutes total: 100 minutes of multiple choice and 90 minutes of free response.' }
    ],
    summaryPoints: [
      'Equivalent to first-semester college calculus',
      '42 multiple-choice and six free-response questions',
      'Hybrid digital with calculator and non-calculator parts',
      'Scored 1-5; a 3 generally earns Calculus I credit'
    ],
    relatedSlugs: ['ap-calculus-bc', 'ap-precalculus', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-calculus-bc',
    body: 'College Board',
    tagline: 'Earn a full year of college calculus credit plus an automatic AB subscore.',
    description: 'AP Calculus BC covers everything in Calculus AB plus parametric, polar, and vector functions, advanced integration techniques, sequences, and series. The exam is hybrid digital with 42 multiple-choice questions and six free-response questions. Because BC includes all AB topics, students receive both a BC score and an AB subscore, making it possible to earn credit for Calculus I and II at most colleges.',
    quickAnswer: {
      summary: 'AP Calculus BC is a hybrid digital exam: 42 multiple-choice questions in 100 minutes and six free-response questions in 90 minutes. You earn a BC score plus an AB subscore. A 3 or higher often grants credit for two semesters of calculus.',
      advantages: [
        'Covers a full year of college calculus in one exam',
        'Includes an automatic AB subscore for flexible credit',
        'Highly valued by engineering and physical-science programs',
        'Same stable format as Calculus AB'
      ]
    },
    roadmap: ['Join AP Calculus BC via My AP', 'Master AB topics plus series and vectors', 'Practice both FRQ types', 'Take progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Strong precalculus and Calculus AB foundations are recommended.',
    examMeta: {
      questions: '42 multiple choice + 6 free response',
      time: '3 hours 10 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Units 1-4: Limits through Contextual Applications', weight: '5-10% each', note: 'Shared with Calculus AB' },
      { name: 'Unit 5: Analytical Applications', weight: '10-15%', note: 'Extrema, optimization' },
      { name: 'Unit 6: Integration', weight: '15-20%', note: 'Accumulation, FTC' },
      { name: 'Unit 7: Differential Equations', weight: '5-10%', note: 'Logistic growth, Euler' },
      { name: 'Unit 8: Applications of Integration', weight: '5-10%', note: 'Arc length, area' },
      { name: 'Unit 9: Parametric, Polar, Vector', weight: '10-15%', note: 'Motion in planes' },
      { name: 'Unit 10: Infinite Series', weight: '15-20%', note: 'Convergence, Taylor' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Subscore', 'AB subscore reported automatically'],
      ['Credit', '3+ often grants Calculus I and II credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study all 10 units', duration: 'Aug-May' },
      { stage: 'Practice series and polar FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'High-school students targeting engineering or physical-science majors',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Calculus BC worth?', a: 'Many colleges grant six to ten credits for a 3 or higher, covering both Calculus I and II. The AB subscore also lets schools award Calculus I credit even if the BC score is low.' },
      { q: 'Is BC much harder than AB?', a: 'BC moves faster and adds series, vectors, and polar functions. If you are comfortable with AB material, the extra topics are manageable with steady practice.' },
      { q: 'What is the AB subscore?', a: 'Because BC contains all AB topics, the College Board reports a separate AB subscore (1-5) alongside your BC score, giving schools flexibility in awarding credit.' },
      { q: 'What score do I need for credit?', a: 'A 3 usually earns at least Calculus I credit, and many schools grant both semesters at 4 or 5. Check each college\'s policy.' },
      { q: 'Can I self-study BC?', a: 'Yes, though it is demanding. Use the CED, full-length practice exams, and a review book, and register for the exam through a school.' }
    ],
    summaryPoints: [
      'Full-year college calculus plus an AB subscore',
      '42 multiple-choice and six free-response questions',
      'Hybrid digital with calculator and non-calculator parts',
      'Scored 1-5; a 3 often grants two semesters of credit'
    ],
    relatedSlugs: ['ap-calculus-ab', 'ap-precalculus', 'ap-physics-c-mechanics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-calculus-bc',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-chemistry',
    body: 'College Board',
    tagline: 'Skip freshman chemistry with a strong score on the AP Chemistry exam.',
    description: 'AP Chemistry is equivalent to a first-year college general chemistry course, covering atomic structure, bonding, kinetics, thermodynamics, equilibrium, and acid-base chemistry through both multiple-choice and free-response questions. The exam is hybrid digital, with 60 multiple-choice questions and seven free-response questions that emphasize quantitative reasoning and lab data. A 3 typically earns credit at public universities, while selective schools often require a 4 or 5.',
    quickAnswer: {
      summary: 'AP Chemistry is a hybrid digital exam: 60 multiple-choice questions in 90 minutes and seven free-response questions in 105 minutes. Scored 1-5, a 3 generally earns general chemistry credit.',
      advantages: [
        'Maps to a full year of introductory college chemistry',
        'Free-response questions reward problem solving and lab analysis',
        'Widely accepted for STEM and pre-health credit',
        'Official AP Classroom and AP Daily resources are free'
      ]
    },
    roadmap: ['Join AP Chemistry via My AP', 'Work through the 9 CED units', 'Practice stoichiometry and equilibrium FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'High-school chemistry and algebra are expected before the course.',
    examMeta: {
      questions: '60 multiple choice + 7 free response',
      time: '3 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Atomic Structure', weight: '7-9%', note: 'Moles, electrons' },
      { name: 'Unit 2: Molecular and Ionic Bonding', weight: '7-9%', note: 'Structures, VSEPR' },
      { name: 'Unit 3: Intermolecular Forces', weight: '18-22%', note: 'Solids, liquids, solutions' },
      { name: 'Unit 4: Chemical Reactions', weight: '7-9%', note: 'Stoichiometry, net ionic' },
      { name: 'Unit 5: Kinetics', weight: '7-9%', note: 'Rates, mechanisms' },
      { name: 'Unit 6: Thermodynamics', weight: '7-9%', note: 'Energy, enthalpy' },
      { name: 'Unit 7: Equilibrium', weight: '7-9%', note: 'K, Le Chatelier' },
      { name: 'Unit 8: Acids and Bases', weight: '11-15%', note: 'pH, buffers' },
      { name: 'Unit 9: Applications', weight: '7-9%', note: 'Electrochemistry, environmental' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns general chemistry credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Calculator', 'Allowed on both sections'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the 9 units with labs', duration: 'Aug-May' },
      { stage: 'Drill quantitative FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Challenging',
    audience: 'High-school students planning chemistry, engineering, or pre-health study',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Chemistry worth?', a: 'Most colleges grant four to eight credits for a 3 or higher, often covering general chemistry I. Selective schools may require a 4 or 5 for placement.' },
      { q: 'Is AP Chemistry hard?', a: 'It is considered one of the more difficult AP exams because of the math-heavy free-response section, but steady problem-solving practice makes the format predictable.' },
      { q: 'Can I self-study AP Chemistry?', a: 'Possible but tough given the lab-based free-response questions. Use the CED, a strong review book, and practice exams, and register through a school.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical public-university threshold; many engineering and pre-med tracks want 4 or 5.' },
      { q: 'How long should I prepare?', a: 'A full school year in the course, or three to six months of focused self-study with regular quantitative practice.' }
    ],
    summaryPoints: [
      'Equivalent to introductory college general chemistry',
      '60 multiple-choice plus seven free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-biology', 'ap-physics-1-algebra-based', 'ap-physics-2-algebra-based'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-chemistry',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-chinese-language-and-culture',
    body: 'College Board',
    tagline: 'Demonstrate Mandarin proficiency and earn language-credit by exam.',
    description: 'AP Chinese Language and Culture assesses listening, reading, speaking, and writing at roughly the fourth-semester college level. The exam is computer-delivered and pairs four free-response tasks (presentational and interpersonal speaking and writing) with 55 multiple-choice questions split between listening and reading. A 3 typically earns college language credit, and heritage and immersion students often reach higher scores.',
    quickAnswer: {
      summary: 'AP Chinese Language and Culture is a computer-delivered exam: four free-response tasks worth 50 percent and 55 multiple-choice questions worth 50 percent. Scored 1-5, a 3 generally earns college Chinese credit.',
      advantages: [
        'Tests all four language skills at intermediate-high proficiency',
        'Strong credit value for heritage and immersion learners',
        'Accepted for language requirements and placement',
        'Speaking and writing tasks mirror real communication'
      ]
    },
    roadmap: ['Join AP Chinese via My AP', 'Build listening, reading, speaking, writing', 'Practice the free-response tasks', 'Use authentic audio and texts', 'Take the computer-delivered exam in May'],
    prerequisites: 'Roughly four years of high-school Chinese or equivalent immersion experience is expected.',
    examMeta: {
      questions: '55 multiple choice + 4 free response',
      time: 'About 1 hour 45 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Computer-delivered (moving to Bluebook in 2026-27)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Computer-delivered; Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Practice speaking and writing tasks', duration: '2-3 months' },
      { stage: 'Take the exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'Heritage, immersion, and advanced high-school Chinese students',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Chinese worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher, and may place you into advanced coursework. Check each school\'s language policy.' },
      { q: 'Is the exam hard for non-heritage students?', a: 'It is demanding for learners with only classroom exposure, since it expects intermediate-high proficiency across all four skills. Heritage and immersion students tend to do best.' },
      { q: 'What is the format?', a: 'Section I is four free-response tasks (50 percent); Section II is 55 multiple-choice questions in listening and reading (50 percent). It is computer-delivered, moving to Bluebook from May 2027.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold, though language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible if you already have strong speaking and listening skills; regular conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in Mandarin',
      'Four free-response tasks plus 55 multiple-choice questions',
      'Computer-delivered, moving to Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-japanese-language-and-culture', 'ap-spanish-language-and-culture', 'ap-french-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-chinese-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-comparative-government-and-politics',
    body: 'College Board',
    tagline: 'Compare six nations and political systems for intro comparative-politics credit.',
    description: 'AP Comparative Government and Politics is a fully digital exam that compares the political institutions and behavior of China, Iran, Mexico, Nigeria, Russia, and the United Kingdom. It pairs 55 multiple-choice questions with four free-response questions covering concepts, quantitative analysis, and country comparisons. A 3 typically earns credit for an introductory comparative-politics course at public universities.',
    quickAnswer: {
      summary: 'AP Comparative Government and Politics is a fully digital exam: 55 multiple-choice questions in 60 minutes and four free-response questions in 90 minutes. Scored 1-5, a 3 generally earns introductory comparative-politics credit.',
      advantages: [
        'Compares six core countries across political systems',
        'Strong fit for political science and international studies',
        'Fully digital and stable in format year to year',
        'Pairs well with AP U.S. Government for a politics sequence'
      ]
    },
    roadmap: ['Join AP Comparative Gov via My AP', 'Learn the six countries and key concepts', 'Practice country-comparison FRQs', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; an interest in current affairs helps.',
    examMeta: {
      questions: '55 multiple choice + 4 free response',
      time: '2 hours 30 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Political Systems and Institutions', weight: '18-27%', note: 'Regimes, constitutions, branches' },
      { name: 'Unit 2: Public Interest and Political Participation', weight: '22-33%', note: 'Elections, parties, civil society' },
      { name: 'Unit 3: Political and Economic Change', weight: '11-18%', note: 'Development, globalization' },
      { name: 'Unit 4: Conflict and Political Stability', weight: '13-18%', note: 'Violence, terrorism, revolution' },
      { name: 'Unit 5: Intermestic and Foreign Policy', weight: '16-24%', note: 'Domestic-foreign links' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro comparative-politics credit'],
      ['Countries', 'China, Iran, Mexico, Nigeria, Russia, UK'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the five units and six countries', duration: 'Aug-May' },
      { stage: 'Practice comparison FRQs', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in political science and global affairs',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Comparative Government worth?', a: 'Most colleges grant three credits for a 3 or higher toward a political-science or government requirement. Selective schools may require 4 or 5.' },
      { q: 'Is the exam hard?', a: 'The content is broad but conceptual rather than math-heavy. Students who learn the six countries as comparative case studies find the free-response questions manageable.' },
      { q: 'Can I self-study it?', a: 'Yes, the country frameworks and past free-response prompts are public. Register for the exam through a school and use a review book.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some schools want 4 or 5 for upper-level placement.' },
      { q: 'How is it different from AP U.S. Government?', a: 'Comparative Gov studies six foreign political systems side by side, while AP U.S. Government focuses on American institutions and law.' }
    ],
    summaryPoints: [
      'Compares China, Iran, Mexico, Nigeria, Russia, and the UK',
      '55 multiple-choice plus four free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-united-states-government-and-politics', 'ap-world-history-modern', 'ap-human-geography'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-comparative-government-and-politics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-computer-science-a',
    body: 'College Board',
    tagline: 'Prove Java programming skill and earn college intro-CS credit by exam.',
    description: 'AP Computer Science A is a fully digital exam focused on object-oriented programming in Java. It covers data types, control structures, classes and objects, arrays, ArrayList, 2D arrays, recursion, and inheritance through 42 multiple-choice questions and four free-response questions. A 3 typically earns credit for a first-semester college computer-science course, and the 2025-26 course framework keeps the exam fully digital.',
    quickAnswer: {
      summary: 'AP Computer Science A is a fully digital exam: 42 multiple-choice questions in 90 minutes and four free-response questions in 90 minutes. Scored 1-5, a 3 generally earns introductory computer-science credit.',
      advantages: [
        'Equivalent to a first-semester college Java course',
        'Strong credential for CS, engineering, and data majors',
        'Fully digital in Bluebook with predictable question types',
        'Free official practice through AP Classroom'
      ]
    },
    roadmap: ['Join AP CSA via My AP', 'Learn Java classes, arrays, recursion', 'Code daily practice problems', 'Take progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'Algebra and basic programming exposure are helpful but not required.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Primitive Types', weight: '15-25%', note: 'Variables, operators, input' },
      { name: 'Unit 2: Using Objects', weight: '25-35%', note: 'Strings, classes, methods' },
      { name: 'Unit 3: Boolean and Iteration', weight: '10-18%', note: 'Conditionals, loops' },
      { name: 'Unit 4: Arrays and ArrayLists', weight: '30-40%', note: '1D and 2D arrays, traversal' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro CS credit'],
      ['Language', 'Java (object-oriented)'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the four units and code daily', duration: 'Aug-May' },
      { stage: 'Practice FRQ coding problems', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students pursuing computer science or engineering',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP CSA worth?', a: 'Most colleges grant three to four credits for a 3 or higher, typically covering an introductory programming course. Selective programs may want 4 or 5.' },
      { q: 'Is AP CSA hard?', a: 'It is approachable if you enjoy logic and practice coding regularly. The free-response section rewards clean, correct Java, so consistent coding practice is the key.' },
      { q: 'CSA or CSP - which should I take?', a: 'CSA is programming-intensive in Java and better for CS majors; CSP is broader and conceptual. Take CSA if you want a true intro-CS credit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold for intro CS credit; many universities require 4 or 5 for placement into a second course.' },
      { q: 'Can I self-study CSA?', a: 'Yes, with disciplined coding practice using the CED and a Java environment. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Object-oriented programming in Java',
      '42 multiple-choice plus four free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns intro CS credit'
    ],
    relatedSlugs: ['ap-computer-science-principles', 'ap-calculus-ab', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-computer-science-principles',
    body: 'College Board',
    tagline: 'Show breadth in computing ideas and build a real project for college credit.',
    description: 'AP Computer Science Principles is a fully digital exam that surveys the big ideas of computing: abstraction, data, algorithms, the internet, and the societal impact of technology. The grade combines a through-course Create performance task with a 70-question end-of-course exam. A 3 typically earns credit for a broad introductory computing course, and the exam rewards conceptual understanding over any one language.',
    quickAnswer: {
      summary: 'AP Computer Science Principles is a fully digital exam: 70 multiple-choice questions in 120 minutes plus a through-course Create performance task. Scored 1-5, a 3 generally earns introductory computing credit.',
      advantages: [
        'Surveys computing broadly rather than one language',
        'Includes a real programming project (Create task)',
        'Welcoming entry point for non-CS majors',
        'Fully digital in Bluebook plus the AP Digital Portfolio'
      ]
    },
    roadmap: ['Join AP CSP via My AP', 'Study the five big ideas', 'Submit the Create performance task', 'Prepare for the end-of-course exam', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; curiosity about computing is the main prerequisite.',
    examMeta: {
      questions: '70 multiple choice + Create performance task',
      time: '2 hours (exam) + project during year',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital + Digital Portfolio',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Big Idea 1: Creative Development', weight: '10-13%', note: 'Programming, collaboration' },
      { name: 'Big Idea 2: Data', weight: '17-22%', note: 'Storage, compression, analysis' },
      { name: 'Big Idea 3: Algorithms and Programming', weight: '30-35%', note: 'Abstraction, iteration, recursion' },
      { name: 'Big Idea 4: Computer Systems and Networks', weight: '11-15%', note: 'Internet, cybersecurity' },
      { name: 'Big Idea 5: Impact of Computing', weight: '21-26%', note: 'Social, legal, ethical' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro computing credit'],
      ['Create task', 'Submitted via AP Digital Portfolio'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the five big ideas', duration: 'Aug-May' },
      { stage: 'Build and submit the Create task', duration: 'Winter-spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students wanting a broad computing introduction',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP CSP worth?', a: 'Most colleges grant three credits for a 3 or higher toward a general-education computing requirement. Some schools count it as a CS elective rather than a programming course.' },
      { q: 'Is CSP easier than CSA?', a: 'CSP is broader and more conceptual, while CSA is intensive Java programming. CSP suits students who want computing literacy; CSA suits aspiring CS majors.' },
      { q: 'What is the Create performance task?', a: 'It is a programming project you build during the course and submit through the AP Digital Portfolio, demonstrating abstraction, algorithms, and iteration. It counts toward your score.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold, though some colleges require 4 or 5 for a computing elective.' },
      { q: 'Can I self-study CSP?', a: 'Yes, though the Create task needs a programming environment. Use the CED and a language like Python, then register for the exam through a school.' }
    ],
    summaryPoints: [
      'Broad survey of computing big ideas',
      '70 multiple-choice questions plus a Create performance task',
      'Fully digital in Bluebook with a portfolio component',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-computer-science-a', 'ap-calculus-ab', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-drawing',
    body: 'College Board',
    tagline: 'Build a portfolio of drawn work and earn studio-art credit without a timed test.',
    description: 'AP Drawing is a portfolio-based assessment with no timed exam. During the course you assemble a Sustained Investigation of 15 works showing inquiry and development, plus five Selected Works that demonstrate skill and quality. The portfolio is submitted digitally in the spring and scored 1-5. A 3 typically earns college studio-art or foundations credit, and the work doubles as a college application portfolio.',
    quickAnswer: {
      summary: 'AP Drawing is assessed entirely by portfolio: a Sustained Investigation (60 percent) and five Selected Works (40 percent), submitted through the AP Digital Portfolio. Scored 1-5, a 3 generally earns studio-art credit.',
      advantages: [
        'No timed exam; judged on a body of work',
        'Builds a portfolio useful for college applications',
        'Emphasizes inquiry, revision, and craft',
        'Counts toward AP Art and Design credit'
      ]
    },
    roadmap: ['Join AP Drawing via My AP', 'Develop a sustained investigation question', 'Create and refine 15 investigation works', 'Select and present five best works', 'Submit the portfolio in the spring'],
    prerequisites: 'Prior drawing or studio-art experience is expected.',
    examMeta: {
      questions: 'No timed exam; portfolio assessment',
      time: 'School year (submitted in spring)',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Portfolio via AP Digital Portfolio',
      admin: 'School submissions'
    },
    topics: [
      { name: 'Sustained Investigation', weight: '60%', note: '15 works showing inquiry and development' },
      { name: 'Selected Works', weight: '40%', note: '5 works demonstrating skill and quality' },
      { name: 'Big Idea 1: Investigate', weight: 'Assessed', note: 'Materials, processes, ideas' },
      { name: 'Big Idea 2: Make', weight: 'Assessed', note: 'Practice, experimentation, revision' },
      { name: 'Big Idea 3: Present', weight: 'Assessed', note: 'Communication and reflection' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns studio-art credit'],
      ['No exam', 'Portfolio only, submitted digitally'],
      ['Works', '15 investigation + 5 selected'],
      ['Submission', 'Spring via AP Digital Portfolio']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Develop the sustained investigation', duration: 'Aug-spring' },
      { stage: 'Create and refine drawings', duration: 'School year' },
      { stage: 'Submit the portfolio', duration: 'Spring' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Art supplies (course-dependent)', fee: '$0-$150' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); materials vary',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school art students building a drawing portfolio',
    time: '1 school year',
    cost: '$99-$319',
    faqs: [
      { q: 'How many credits is AP Drawing worth?', a: 'Many colleges grant three studio-art or foundations credits for a 3 or higher, and some use the portfolio for placement or admission review.' },
      { q: 'Is there a timed exam?', a: 'No. AP Drawing is assessed entirely by the portfolio you submit through the AP Digital Portfolio in the spring.' },
      { q: 'What goes in the portfolio?', a: 'A Sustained Investigation of 15 works that develop a single inquiry, plus five Selected Works that show your strongest drawing skill and quality.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; art programs may review the portfolio itself for placement regardless of score.' },
      { q: 'Can I submit without taking the course?', a: 'Typically the portfolio is submitted through your school, but independent students may arrange submission via a participating school.' }
    ],
    summaryPoints: [
      'Portfolio-based with no timed exam',
      'Sustained Investigation (60%) plus five Selected Works (40%)',
      'Submitted digitally via the AP Digital Portfolio',
      'Scored 1-5; a 3 generally earns studio-art credit'
    ],
    relatedSlugs: ['ap-english-literature-and-composition', 'ap-art-history', 'ap-world-history-modern'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-drawing',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-english-language-and-composition',
    body: 'College Board',
    tagline: 'Earn freshman-composition credit by mastering rhetoric and argument.',
    description: 'AP English Language and Composition is a fully digital exam that tests rhetorical analysis, argument, and synthesis writing. It pairs 45 multiple-choice questions on prose passages with three free-response essays: a synthesis essay, a rhetorical analysis, and an argument. A 3 typically earns credit for first-year college composition, and strong writing skills transfer to every subject.',
    quickAnswer: {
      summary: 'AP English Language and Composition is a fully digital exam: 45 multiple-choice questions in 60 minutes and three free-response essays in 135 minutes. Scored 1-5, a 3 generally earns freshman composition credit.',
      advantages: [
        'Equivalent to a first-year college writing course',
        'Builds rhetorical and argument skills useful everywhere',
        'Fully digital in Bluebook',
        'Broadly accepted for English composition credit'
      ]
    },
    roadmap: ['Join AP Lang via My AP', 'Study rhetoric and argument structures', 'Practice the three essay types', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'Strong high-school writing skills are expected.',
    examMeta: {
      questions: '45 multiple choice + 3 free response',
      time: '3 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Reading and Writing: Argument', weight: '11-16%', note: 'Claims, evidence, reasoning' },
      { name: 'Reading and Writing: Rhetorical Analysis', weight: '11-16%', note: 'Purpose, audience, devices' },
      { name: 'Reading and Writing: Synthesis', weight: '11-16%', note: 'Source integration' },
      { name: 'Reading: Comprehension', weight: '11-16%', note: 'Main idea, purpose' },
      { name: 'Writing: Development and Organization', weight: '11-16%', note: 'Thesis, structure' },
      { name: 'Writing: Style and Convention', weight: '11-16%', note: 'Language, grammar' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns composition credit'],
      ['Essays', 'Synthesis, rhetorical analysis, argument'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study rhetoric and argument', duration: 'Aug-May' },
      { stage: 'Practice all three essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students wanting college writing credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Lang worth?', a: 'Most colleges grant three to six credits for a 3 or higher, typically satisfying a freshman composition requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Lang hard?', a: 'The challenge is writing well under time pressure. Students who practice the three essay types and read nonfiction analytically do well.' },
      { q: 'Lang or Lit - which should I take?', a: 'Lang focuses on nonfiction rhetoric and argument; Lit focuses on fiction and poetry. Lang is often taken junior year, Lit senior year.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold for composition credit; many universities want 4 or 5 to place out.' },
      { q: 'Can I self-study?', a: 'Yes, with regular timed essay practice using past prompts. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'First-year college writing equivalent',
      '45 multiple-choice plus three free-response essays',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns composition credit'
    ],
    relatedSlugs: ['ap-english-literature-and-composition', 'ap-united-states-history', 'ap-seminar'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-english-language-and-composition',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-english-literature-and-composition',
    body: 'College Board',
    tagline: 'Close-read poetry, prose, and drama for college literature credit.',
    description: 'AP English Literature and Composition is a fully digital exam centered on close reading of fiction, poetry, and drama. It pairs 55 multiple-choice questions on literary passages with three free-response essays that analyze a poem, a prose passage, and a chosen work of literary merit. A 3 typically earns credit for an introductory college literature course.',
    quickAnswer: {
      summary: 'AP English Literature and Composition is a fully digital exam: 55 multiple-choice questions in 60 minutes and three free-response essays in 120 minutes. Scored 1-5, a 3 generally earns introductory literature credit.',
      advantages: [
        'Equivalent to a college introduction to literature',
        'Trains close reading of poetry, prose, and drama',
        'Fully digital in Bluebook',
        'Strong preparation for humanities majors'
      ]
    },
    roadmap: ['Join AP Lit via My AP', 'Read widely across genres', 'Practice prose, poetry, and open essays', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'Strong reading and writing skills are expected.',
    examMeta: {
      questions: '55 multiple choice + 3 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Short Fiction (Narrative Prose)', weight: '42-49%', note: 'Novels, short stories' },
      { name: 'Poetry', weight: '36-45%', note: 'Forms, devices, voice' },
      { name: 'Long Fiction or Drama', weight: '15-18%', note: 'Plays and longer works' },
      { name: 'Reading Skill: Character', weight: 'Skill', note: 'Motivation, development' },
      { name: 'Reading Skill: Setting and Structure', weight: 'Skill', note: 'Form and function' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns literature credit'],
      ['Essays', 'Poetry, prose, open question'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Read across genres with annotation', duration: 'Aug-May' },
      { stage: 'Practice the three essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students pursuing literature or humanities credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Lit worth?', a: 'Most colleges grant three credits for a 3 or higher toward a literature or English requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Lit hard?', a: 'It rewards careful reading and evidence-based writing under time pressure. Students who read widely and practice timed essays find it manageable.' },
      { q: 'What is on the open essay?', a: 'The third free-response question asks you to analyze a work of literary merit you choose, so many students prepare a few familiar books in advance.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; many universities want 4 or 5 for placement out of introductory literature.' },
      { q: 'Can I self-study?', a: 'Yes, by reading broadly and writing practice essays on past prompts. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'College-level introduction to literature',
      '55 multiple-choice plus three free-response essays',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns literature credit'
    ],
    relatedSlugs: ['ap-english-language-and-composition', 'ap-art-history', 'ap-world-history-modern'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-environmental-science',
    body: 'College Board',
    tagline: 'Earn intro environmental-science credit while studying the planet.',
    description: 'AP Environmental Science is a fully digital exam that integrates biology, chemistry, earth science, and economics to study ecosystems, biodiversity, pollution, energy, and global change. It pairs 80 multiple-choice questions with three free-response questions emphasizing data and quantitative analysis. A 3 typically earns credit for an introductory environmental-science course.',
    quickAnswer: {
      summary: 'AP Environmental Science is a fully digital exam: 80 multiple-choice questions in 90 minutes and three free-response questions in 70 minutes. Scored 1-5, a 3 generally earns introductory environmental-science credit.',
      advantages: [
        'Interdisciplinary intro course with real-world relevance',
        'Strong fit for environmental and policy interests',
        'Fully digital in Bluebook',
        'Widely accepted for science credit'
      ]
    },
    roadmap: ['Join APES via My AP', 'Work through the 9 CED units', 'Practice data and math FRQs', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'High-school biology, chemistry, and algebra are helpful.',
    examMeta: {
      questions: '80 multiple choice + 3 free response',
      time: '2 hours 40 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: The Living World - Ecosystems', weight: '6-8%', note: 'Energy and nutrient cycles' },
      { name: 'Unit 2: The Living World - Biodiversity', weight: '6-8%', note: 'Speciation, diversity' },
      { name: 'Unit 3: Populations', weight: '10-15%', note: 'Population ecology' },
      { name: 'Unit 4: Earth Systems', weight: '10-15%', note: 'Geology, tectonics' },
      { name: 'Unit 5: Land and Water Use', weight: '10-15%', note: 'Agriculture, forestry' },
      { name: 'Unit 6: Energy Resources', weight: '10-15%', note: 'Fossil and renewable' },
      { name: 'Unit 7: Atmospheric Pollution', weight: '7-10%', note: 'Air quality, climate' },
      { name: 'Unit 8: Aquatic and Terrestrial Pollution', weight: '7-10%', note: 'Waste, toxins' },
      { name: 'Unit 9: Global Change', weight: '15-20%', note: 'Climate, biodiversity loss' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro environmental-science credit'],
      ['Math', 'Quantitative analysis expected'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the 9 units', duration: 'Aug-May' },
      { stage: 'Drill data-analysis FRQs', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in environment and sustainability',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is APES worth?', a: 'Most colleges grant three to four credits for a 3 or higher toward a science or environmental requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Environmental Science hard?', a: 'It is interdisciplinary and includes math on the free-response section, but the concepts are concrete. Students who practice quantitative problems do well.' },
      { q: 'Can I self-study APES?', a: 'Yes, using the CED and practice exams. Register for the exam through a school and keep up with current environmental examples.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; some schools want 4 or 5 for upper-level placement.' },
      { q: 'Does it count as a lab science?', a: 'Many colleges accept it as a science credit, though some require a lab component; policies vary by institution.' }
    ],
    summaryPoints: [
      'Interdisciplinary introductory environmental science',
      '80 multiple-choice plus three free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-biology', 'ap-human-geography', 'ap-chemistry'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-environmental-science',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-european-history',
    body: 'College Board',
    tagline: 'Cover European history from 1450 to today for college history credit.',
    description: 'AP European History is a fully digital exam spanning roughly 1450 to the present. It pairs 55 multiple-choice questions and three short-answer questions with a document-based question and a long essay that test historical reasoning. A 3 typically earns credit for a Western-civilization or European-history survey at public universities.',
    quickAnswer: {
      summary: 'AP European History is a fully digital exam: 55 multiple-choice questions, three short-answer questions, a document-based question, and a long essay. Scored 1-5, a 3 generally earns European-history credit.',
      advantages: [
        'Equivalent to a college survey of European history',
        'Builds document analysis and essay skills',
        'Fully digital in Bluebook',
        'Strong humanities and pre-law preparation'
      ]
    },
    roadmap: ['Join AP Euro via My AP', 'Study the 9 units chronologically', 'Practice DBQ and LEQ essays', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'World history background is helpful but not required.',
    examMeta: {
      questions: '55 MCQ + 3 SAQ + DBQ + LEQ',
      time: '3 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Renaissance and Exploration', weight: '10-15%', note: 'c. 1450-1648' },
      { name: 'Unit 2: Age of Reformation', weight: '10-15%', note: 'c. 1450-1648' },
      { name: 'Unit 3: Absolutism to Enlightenment', weight: '10-15%', note: 'c. 1648-1815' },
      { name: 'Unit 4: 19th-Century Revolution', weight: '10-15%', note: 'c. 1815-1914' },
      { name: 'Unit 5: Conflict and Crisis', weight: '10-15%', note: 'c. 1914-1950' },
      { name: 'Unit 6: Cold War and Unification', weight: '10-15%', note: 'c. 1945-2000' },
      { name: 'Unit 7: 20th-Century Culture', weight: '10-15%', note: 'c. 1914-2000' },
      { name: 'Unit 8: 21st Century', weight: '10-15%', note: 'c. 2000-present' },
      { name: 'Unit 9: Global Interactions', weight: '10-15%', note: 'Cross-unit themes' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns European-history credit'],
      ['Essays', 'DBQ and long essay (LEQ)'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the nine units in order', duration: 'Aug-May' },
      { stage: 'Practice DBQ and LEQ essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in history and the humanities',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Euro worth?', a: 'Most colleges grant three to six credits for a 3 or higher toward a history or Western-civilization requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP European History hard?', a: 'The content volume is large, but the essay rubrics are consistent. Students who practice the DBQ and LEQ formats do well.' },
      { q: 'What is the DBQ?', a: 'The document-based question gives you seven sources and asks you to build an argument using them, demonstrating historical reasoning under a time limit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; many universities want 4 or 5 for placement out of introductory history.' },
      { q: 'Can I self-study?', a: 'Yes, with a timeline-based review book and past DBQ/LEQ practice. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'College survey of European history since 1450',
      '55 MCQ, 3 SAQ, a DBQ, and a long essay',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-world-history-modern', 'ap-united-states-history', 'ap-art-history'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-european-history',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-french-language-and-culture',
    body: 'College Board',
    tagline: 'Show French proficiency across speaking, listening, reading, and writing for credit.',
    description: 'AP French Language and Culture assesses French at the intermediate-high level across the four skills, organized around six course themes. Under the 2026-27 revisions the exam is fully digital and includes a research project component alongside multiple-choice listening and reading and free-response speaking and writing. A 3 typically earns college French credit.',
    quickAnswer: {
      summary: 'AP French Language and Culture is a fully digital exam: 55 multiple-choice questions (listening and reading) and three free-response tasks including a project presentation and argumentative essay. Scored 1-5, a 3 generally earns college French credit.',
      advantages: [
        'Tests all four language skills at intermediate-high level',
        'Accepted for language requirements and placement',
        'Fully digital in Bluebook from May 2027',
        'Themes connect language to culture and global issues'
      ]
    },
    roadmap: ['Join AP French via My AP', 'Build the four skills around the six themes', 'Complete the research project prep', 'Practice speaking and writing tasks', 'Take the digital exam in May'],
    prerequisites: 'Roughly three to four years of high-school French or equivalent is expected.',
    examMeta: {
      questions: '55 multiple choice + 3 free response',
      time: 'About 2 hours 25 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital (Bluebook from May 2027)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Fully digital in Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Complete the research project', duration: 'Spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school French students at intermediate-high proficiency',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP French worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher and may place you into intermediate or advanced coursework. Check each school\'s policy.' },
      { q: 'What is the exam format?', a: 'Section I is three free-response tasks worth 50 percent, including a project presentation, a project Q&A, and an argumentative essay. Section II is 55 multiple-choice questions in listening and reading, also 50 percent.' },
      { q: 'Is the exam hard?', a: 'It expects intermediate-high proficiency across all four skills. Consistent speaking practice is the biggest factor in success.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible if you already speak and read French well; regular conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in French',
      '55 multiple-choice plus three free-response tasks',
      'Fully digital in Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-spanish-language-and-culture', 'ap-german-language-and-culture', 'ap-italian-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-french-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-german-language-and-culture',
    body: 'College Board',
    tagline: 'Demonstrate German proficiency and earn language-credit by exam.',
    description: 'AP German Language and Culture assesses German at the intermediate-high level across listening, reading, speaking, and writing, organized around six course themes. Under the 2026-27 revisions the exam is fully digital with a research project component alongside multiple-choice and free-response tasks. A 3 typically earns college German credit.',
    quickAnswer: {
      summary: 'AP German Language and Culture is a fully digital exam: 55 multiple-choice questions (listening and reading) and three free-response tasks including a project presentation and argumentative essay. Scored 1-5, a 3 generally earns college German credit.',
      advantages: [
        'Tests all four language skills at intermediate-high level',
        'Accepted for language requirements and placement',
        'Fully digital in Bluebook from May 2027',
        'Connects language study to culture and global themes'
      ]
    },
    roadmap: ['Join AP German via My AP', 'Build the four skills around the six themes', 'Complete the research project prep', 'Practice speaking and writing tasks', 'Take the digital exam in May'],
    prerequisites: 'Roughly three to four years of high-school German or equivalent is expected.',
    examMeta: {
      questions: '55 multiple choice + 3 free response',
      time: 'About 2 hours 25 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital (Bluebook from May 2027)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Fully digital in Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Complete the research project', duration: 'Spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school German students at intermediate-high proficiency',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP German worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher and may place you into intermediate coursework. Confirm with each school.' },
      { q: 'What is the exam format?', a: 'Section I is three free-response tasks worth 50 percent, including a project presentation, project Q&A, and argumentative essay. Section II is 55 multiple-choice questions in listening and reading, also 50 percent.' },
      { q: 'Is the exam hard?', a: 'It expects intermediate-high proficiency in all four skills. Regular speaking practice is the strongest predictor of success.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study works if you already read and speak German well; conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in German',
      '55 multiple-choice plus three free-response tasks',
      'Fully digital in Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-french-language-and-culture', 'ap-spanish-language-and-culture', 'ap-italian-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-german-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  }
,
  {
    slug: 'ap-human-geography',
    body: 'College Board',
    tagline: 'Earn intro human-geography credit by mapping people, place, and space.',
    description: 'AP Human Geography is a fully digital exam that applies geographic concepts to population, culture, politics, agriculture, urbanization, and economic development. It pairs 60 multiple-choice questions with three free-response questions that ask you to analyze maps, data, and models. A 3 typically earns credit for an introductory human-geography or social-science course.',
    quickAnswer: {
      summary: 'AP Human Geography is a fully digital exam: 60 multiple-choice questions in 60 minutes and three free-response questions in 75 minutes. Scored 1-5, a 3 generally earns introductory human-geography credit.',
      advantages: [
        'Equivalent to a first-year college human-geography course',
        'Builds map, data, and spatial-thinking skills',
        'Fully digital in Bluebook',
        'Strong social-science and pre-law preparation'
      ]
    },
    roadmap: ['Join AP Human Geography via My AP', 'Study the 7 CED units', 'Practice FRQs with maps and data', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; an interest in current affairs helps.',
    examMeta: {
      questions: '60 multiple choice + 3 free response',
      time: '2 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Thinking Geographically', weight: '8-10%', note: 'Maps, data, scale' },
      { name: 'Unit 2: Population and Migration', weight: '12-17%', note: 'Demographics, movement' },
      { name: 'Unit 3: Culture', weight: '12-17%', note: 'Language, religion, identity' },
      { name: 'Unit 4: Political Geography', weight: '12-17%', note: 'States, boundaries, devolution' },
      { name: 'Unit 5: Agriculture', weight: '12-17%', note: 'Food, rural land use' },
      { name: 'Unit 6: Cities and Urbanization', weight: '12-17%', note: 'Models, development' },
      { name: 'Unit 7: Economic Development', weight: '12-17%', note: 'Industry, globalization' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro human-geography credit'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Skills', 'Map and data analysis'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the seven units', duration: 'Aug-May' },
      { stage: 'Practice FRQs with maps', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in geography and social science',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Human Geography worth?', a: 'Most colleges grant three credits for a 3 or higher toward a social-science or geography requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Human Geography hard?', a: 'It is concept-heavy but math-light. Success comes from learning models and practicing free-response questions that interpret maps and data.' },
      { q: 'Can I self-study?', a: 'Yes, it is one of the more self-study-friendly APs. Use the CED, a review book, and practice FRQs, then register through a school.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some schools want 4 or 5 for placement.' },
      { q: 'How long should I prepare?', a: 'A full school year in the course, or two to four months of focused self-study.' }
    ],
    summaryPoints: [
      'Introductory college human geography',
      '60 multiple-choice plus three free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-world-history-modern', 'ap-comparative-government-and-politics', 'ap-environmental-science'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-human-geography',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-italian-language-and-culture',
    body: 'College Board',
    tagline: 'Show Italian proficiency across the four skills for college language credit.',
    description: 'AP Italian Language and Culture assesses Italian at the intermediate-high level across listening, reading, speaking, and writing, organized around six course themes. Under the 2026-27 revisions the exam is fully digital with a research project component alongside multiple-choice and free-response tasks. A 3 typically earns college Italian credit.',
    quickAnswer: {
      summary: 'AP Italian Language and Culture is a fully digital exam: 55 multiple-choice questions (listening and reading) and three free-response tasks including a project presentation and argumentative essay. Scored 1-5, a 3 generally earns college Italian credit.',
      advantages: [
        'Tests all four language skills at intermediate-high level',
        'Accepted for language requirements and placement',
        'Fully digital in Bluebook from May 2027',
        'Connects language to culture and global themes'
      ]
    },
    roadmap: ['Join AP Italian via My AP', 'Build the four skills around the six themes', 'Complete the research project prep', 'Practice speaking and writing tasks', 'Take the digital exam in May'],
    prerequisites: 'Roughly three to four years of high-school Italian or equivalent is expected.',
    examMeta: {
      questions: '55 multiple choice + 3 free response',
      time: 'About 2 hours 25 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital (Bluebook from May 2027)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Fully digital in Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Complete the research project', duration: 'Spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school Italian students at intermediate-high proficiency',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Italian worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher and may place you into intermediate coursework. Confirm with each school.' },
      { q: 'What is the exam format?', a: 'Section I is three free-response tasks worth 50 percent, including a project presentation, project Q&A, and argumentative essay. Section II is 55 multiple-choice questions in listening and reading, also 50 percent.' },
      { q: 'Is the exam hard?', a: 'It expects intermediate-high proficiency in all four skills. Regular speaking practice is the strongest predictor of success.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study works if you already read and speak Italian well; conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in Italian',
      '55 multiple-choice plus three free-response tasks',
      'Fully digital in Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-french-language-and-culture', 'ap-spanish-language-and-culture', 'ap-german-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-italian-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-japanese-language-and-culture',
    body: 'College Board',
    tagline: 'Demonstrate Japanese proficiency and earn language-credit by exam.',
    description: 'AP Japanese Language and Culture assesses listening, reading, speaking, and writing at roughly the fourth-semester college level. The exam is computer-delivered and pairs free-response speaking and writing tasks with multiple-choice listening and reading questions. A 3 typically earns college Japanese credit, and heritage and immersion students often reach higher scores.',
    quickAnswer: {
      summary: 'AP Japanese Language and Culture is a computer-delivered exam: four free-response tasks worth 50 percent and 55 multiple-choice questions (listening and reading) worth 50 percent. Scored 1-5, a 3 generally earns college Japanese credit.',
      advantages: [
        'Tests all four language skills at intermediate-high proficiency',
        'Strong credit value for heritage and immersion learners',
        'Accepted for language requirements and placement',
        'Typing and audio tasks mirror real communication'
      ]
    },
    roadmap: ['Join AP Japanese via My AP', 'Build listening, reading, speaking, writing', 'Practice the free-response tasks', 'Use authentic audio and texts', 'Take the computer-delivered exam in May'],
    prerequisites: 'Roughly four years of high-school Japanese or equivalent immersion experience is expected.',
    examMeta: {
      questions: '55 multiple choice + 4 free response',
      time: 'About 1 hour 50 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Computer-delivered (moving to Bluebook in 2026-27)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Computer-delivered; Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Practice speaking and writing tasks', duration: '2-3 months' },
      { stage: 'Take the exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'Heritage, immersion, and advanced high-school Japanese students',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Japanese worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher, and may place you into advanced coursework. Check each school\'s language policy.' },
      { q: 'Is the exam hard for non-heritage students?', a: 'It is demanding for classroom-only learners because it expects intermediate-high proficiency across all four skills. Heritage and immersion students tend to do best.' },
      { q: 'What is the format?', a: 'Section I is four free-response tasks (50 percent); Section II is 55 multiple-choice questions in listening and reading (50 percent). It is computer-delivered, moving to Bluebook from May 2027.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold, though language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible with strong speaking and listening skills; regular conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in Japanese',
      'Four free-response tasks plus 55 multiple-choice questions',
      'Computer-delivered, moving to Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-chinese-language-and-culture', 'ap-spanish-language-and-culture', 'ap-french-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-japanese-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-latin',
    body: 'College Board',
    tagline: 'Translate Vergil and Caesar and earn classical-language credit by exam.',
    description: 'AP Latin requires you to translate and analyze set passages from Vergil\'s Aeneid and Caesar\'s Gallic War, plus sight reading of Latin prose and poetry. The fully digital exam combines 52 multiple-choice questions with five free-response questions covering translation, short answers, and analytical essays, plus a small course-project component. A 3 typically earns college classical-language or literature credit.',
    quickAnswer: {
      summary: 'AP Latin is a fully digital exam: 52 multiple-choice questions in 65 minutes and five free-response questions in 115 minutes, plus a 2 percent course-project component. Scored 1-5, a 3 generally earns classical-language credit.',
      advantages: [
        'Rigorous study of Vergil and Caesar set texts',
        'Builds translation and literary-analysis skills',
        'Fully digital in Bluebook',
        'Strong preparation for classics and literature majors'
      ]
    },
    roadmap: ['Join AP Latin via My AP', 'Master the set Vergil and Caesar passages', 'Practice sight reading and translation', 'Complete the course-project checkpoints', 'Sit the fully digital exam in May'],
    prerequisites: 'Several years of Latin study are expected before the course.',
    examMeta: {
      questions: '52 multiple choice + 5 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Sight Prose and Poetry', weight: 'Multiple choice', note: 'Unseen translation and comprehension' },
      { name: 'Syllabus Prose (Caesar)', weight: 'Multiple choice + FRQ', note: 'Gallic War set passages' },
      { name: 'Syllabus Poetry (Vergil)', weight: 'Multiple choice + FRQ', note: 'Aeneid set passages' },
      { name: 'Translation and Analysis', weight: 'Free response', note: 'Literal translation, essays' },
      { name: 'Roman Culture and History', weight: 'Assessed', note: 'Myth, history, context' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns classical-language credit'],
      ['Set texts', 'Vergil Aeneid, Caesar Gallic War'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study set passages and grammar', duration: 'Aug-May' },
      { stage: 'Practice translation and essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'High-school Latin students with several years of study',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Latin worth?', a: 'Many colleges grant three to six credits for a 3 or higher toward a classics, literature, or language requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Latin hard?', a: 'It is demanding because of the translation and literary-analysis load, but the set texts are fixed, so focused study of Vergil and Caesar pays off.' },
      { q: 'What texts are required?', a: 'The syllabus centers on selected books of Vergil\'s Aeneid and Caesar\'s Gallic War, plus sight passages of Latin prose and poetry.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; classics departments may require 4 or 5 for placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible with strong Latin, but the set texts and essays need guided practice. Register through a school.' }
    ],
    summaryPoints: [
      'Translation and analysis of Vergil and Caesar',
      '52 multiple-choice plus five free-response questions',
      'Fully digital in Bluebook, plus a course-project component',
      'Scored 1-5; a 3 generally earns classical-language credit'
    ],
    relatedSlugs: ['ap-english-literature-and-composition', 'ap-art-history', 'ap-world-history-modern'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-latin',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-macroeconomics',
    body: 'College Board',
    tagline: 'Earn intro macroeconomics credit with national income and policy.',
    description: 'AP Macroeconomics is a hybrid digital exam covering national income, inflation, unemployment, fiscal and monetary policy, and international trade at the introductory college level. It pairs 60 multiple-choice questions with three free-response questions that often include graphs. A 3 typically earns credit for a first-semester macroeconomics course at public universities.',
    quickAnswer: {
      summary: 'AP Macroeconomics is a hybrid digital exam: 60 multiple-choice questions in 70 minutes and three free-response questions in 60 minutes. Scored 1-5, a 3 generally earns introductory macroeconomics credit.',
      advantages: [
        'Equivalent to a first-semester college macro course',
        'Graph-driven free-response rewards clear models',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Pairs naturally with AP Microeconomics'
      ]
    },
    roadmap: ['Join AP Macro via My AP', 'Study the 6 CED units', 'Practice graph-based FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Algebra and basic graph-reading skills are expected.',
    examMeta: {
      questions: '60 multiple choice + 3 free response',
      time: '2 hours 10 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Basic Economic Concepts', weight: '5-10%', note: 'Scarcity, opportunity cost' },
      { name: 'Unit 2: Economic Indicators', weight: '12-17%', note: 'GDP, inflation, unemployment' },
      { name: 'Unit 3: National Income and Price', weight: '17-27%', note: 'AD/AS model' },
      { name: 'Unit 4: Financial Sector', weight: '18-23%', note: 'Money, banking, monetary policy' },
      { name: 'Unit 5: Stabilization', weight: '20-30%', note: 'Fiscal policy, multipliers' },
      { name: 'Unit 6: Open Economy', weight: '10-13%', note: 'Trade, exchange rates' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro macro credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Graphs', 'Expected on free response'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the six units', duration: 'Aug-May' },
      { stage: 'Practice graph FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students needing economics or business credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Macroeconomics worth?', a: 'Most colleges grant three credits for a 3 or higher toward an introductory macroeconomics requirement. Selective schools may require 4 or 5.' },
      { q: 'Should I take Macro or Micro?', a: 'They are separate half-year courses and exams. Many students take both; Macro covers the whole economy while Micro covers firms and markets.' },
      { q: 'Is AP Macro hard?', a: 'The concepts are logical and graph-based. Students who practice drawing AD/AS and loanable-funds graphs do well on the free-response section.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; economics programs often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Yes, the content is well-defined. Use the CED, practice FRQs, and a review book, then register through a school.' }
    ],
    summaryPoints: [
      'Introductory college macroeconomics',
      '60 multiple-choice plus three free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-microeconomics', 'ap-statistics', 'ap-calculus-ab'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-macroeconomics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-microeconomics',
    body: 'College Board',
    tagline: 'Earn intro microeconomics credit with markets, costs, and behavior.',
    description: 'AP Microeconomics is a hybrid digital exam covering supply and demand, elasticity, production costs, market structures, factor markets, and market failure at the introductory college level. It pairs 60 multiple-choice questions with three free-response questions that emphasize graphs. A 3 typically earns credit for a first-semester microeconomics course at public universities.',
    quickAnswer: {
      summary: 'AP Microeconomics is a hybrid digital exam: 60 multiple-choice questions in 70 minutes and three free-response questions in 60 minutes. Scored 1-5, a 3 generally earns introductory microeconomics credit.',
      advantages: [
        'Equivalent to a first-semester college micro course',
        'Graph-driven free-response rewards clear models',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Pairs naturally with AP Macroeconomics'
      ]
    },
    roadmap: ['Join AP Micro via My AP', 'Study the 6 CED units', 'Practice graph-based FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Algebra and basic graph-reading skills are expected.',
    examMeta: {
      questions: '60 multiple choice + 3 free response',
      time: '2 hours 10 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Basic Economic Concepts', weight: '12-15%', note: 'Scarcity, trade-offs' },
      { name: 'Unit 2: Supply and Demand', weight: '20-25%', note: 'Markets, elasticity' },
      { name: 'Unit 3: Production and Costs', weight: '22-25%', note: 'Firm behavior' },
      { name: 'Unit 4: Market Structures', weight: '15-22%', note: 'Competition, monopoly' },
      { name: 'Unit 5: Factor Markets', weight: '10-13%', note: 'Labor, capital' },
      { name: 'Unit 6: Market Failure', weight: '8-13%', note: 'Externalities, public goods' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro micro credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Graphs', 'Expected on free response'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the six units', duration: 'Aug-May' },
      { stage: 'Practice graph FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students needing economics or business credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Microeconomics worth?', a: 'Most colleges grant three credits for a 3 or higher toward an introductory microeconomics requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Micro hard?', a: 'It is logical and graph-based. Students who practice drawing supply/demand and cost curves handle the free-response section well.' },
      { q: 'Should I take Macro or Micro?', a: 'They are separate exams. Micro focuses on firms and markets; Macro on the whole economy. Many students take both for a full economics sequence.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; economics programs often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Yes, the content is well-defined. Use the CED, practice FRQs, and a review book, then register through a school.' }
    ],
    summaryPoints: [
      'Introductory college microeconomics',
      '60 multiple-choice plus three free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-macroeconomics', 'ap-statistics', 'ap-calculus-ab'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-microeconomics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-music-theory',
    body: 'College Board',
    tagline: 'Prove aural and written musicianship for college music-theory credit.',
    description: 'AP Music Theory assesses both written harmony and aural skills, combining multiple-choice questions on notation and listening with free-response melodic and harmonic dictation and recorded sight-singing. The exam is paper-based, with sight-singing recorded on a school device, and moves to a hybrid Bluebook format from May 2027. A 3 typically earns credit for a first-semester college music-theory course.',
    quickAnswer: {
      summary: 'AP Music Theory is a paper-based exam: 75 multiple-choice questions (about 45 percent), seven written free-response questions (about 45 percent), and two sight-singing tasks (about 10 percent). Scored 1-5, a 3 generally earns introductory music-theory credit.',
      advantages: [
        'Equivalent to a first-semester college music-theory course',
        'Tests both aural and written musicianship',
        'Strong credential for music and composition majors',
        'Moving to hybrid digital (Bluebook) from May 2027'
      ]
    },
    roadmap: ['Join AP Music Theory via My AP', 'Study the 8 CED units', 'Practice dictation and sight-singing', 'Use AP Classroom aural drills', 'Sit the exam in May'],
    prerequisites: 'Ability to read music and basic piano or instrumental experience are expected.',
    examMeta: {
      questions: '75 multiple choice + 7 written + 2 sight-singing',
      time: 'About 2 hours 40 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Paper (hybrid Bluebook from May 2027)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Unit 1: Music Fundamentals I', weight: 'Assessed', note: 'Pitch, scales, rhythm, meter' },
      { name: 'Unit 2: Music Fundamentals II', weight: 'Assessed', note: 'Minor keys, melody, timbre' },
      { name: 'Unit 3: Music Fundamentals III', weight: 'Assessed', note: 'Triads, seventh chords' },
      { name: 'Unit 4: Harmony and Voice Leading I', weight: 'Assessed', note: 'Cadences, phrase' },
      { name: 'Unit 5: Harmony and Voice Leading II', weight: 'Assessed', note: 'Progressions' },
      { name: 'Unit 6: Harmony and Voice Leading III', weight: 'Assessed', note: 'Embellishments' },
      { name: 'Unit 7: Harmony and Voice Leading IV', weight: 'Assessed', note: 'Secondary function' },
      { name: 'Unit 8: Modes and Form', weight: 'Assessed', note: 'Form analysis' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro music-theory credit'],
      ['Sections', 'Aural, written, sight-singing'],
      ['Delivery', 'Paper; hybrid Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study theory and train the ear', duration: 'Aug-May' },
      { stage: 'Practice dictation and sight-singing', duration: '2-3 months' },
      { stage: 'Take the exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'High-school musicians pursuing music or composition study',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Music Theory worth?', a: 'Many colleges grant three to six credits for a 3 or higher toward a music-theory or musicianship requirement. Conservatories may require 4 or 5 for placement.' },
      { q: 'Is AP Music Theory hard?', a: 'It is challenging if you cannot read music or hear intervals, but dedicated ear training makes the aural section manageable. Prior keyboard experience helps.' },
      { q: 'What is on the exam?', a: 'Multiple-choice on notation and listening, written dictation and harmonization, and recorded sight-singing of two melodies.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; music programs often want 4 or 5 for advanced placement.' },
      { q: 'Can I self-study?', a: 'Self-study is tough because of the aural component. Strong readers can try with ear-training software, but a teacher is recommended.' }
    ],
    summaryPoints: [
      'First-semester college music theory',
      'Aural, written, and sight-singing components',
      'Paper-based; moving to hybrid Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-art-history', 'ap-english-literature-and-composition', 'ap-drawing'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-music-theory',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-physics-1-algebra-based',
    body: 'College Board',
    tagline: 'Earn algebra-based intro physics credit covering motion through fluids.',
    description: 'AP Physics 1: Algebra-Based is a hybrid digital exam covering kinematics, dynamics, energy, momentum, rotation, oscillations, and fluids at the level of a first-semester college physics course. It pairs 42 multiple-choice questions with four free-response questions emphasizing reasoning and lab skills. A 3 typically earns credit for an introductory algebra-based physics course.',
    quickAnswer: {
      summary: 'AP Physics 1 is a hybrid digital exam: 42 multiple-choice questions in 85 minutes and four free-response questions in 95 minutes. Scored 1-5, a 3 generally earns introductory algebra-based physics credit.',
      advantages: [
        'Equivalent to first-semester college physics (algebra-based)',
        'Reasoning and lab-skills emphasis over plug-and-chug',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Common prerequisite for health and life-science majors'
      ]
    },
    roadmap: ['Join AP Physics 1 via My AP', 'Study the 8 CED units', 'Practice FRQs and lab reasoning', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Concurrent or prior algebra and trigonometry are expected.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Kinematics', weight: '10-15%', note: 'Motion in 1-2 dimensions' },
      { name: 'Unit 2: Force and Dynamics', weight: '18-23%', note: 'Newton\'s laws' },
      { name: 'Unit 3: Work, Energy, Power', weight: '18-23%', note: 'Conservation of energy' },
      { name: 'Unit 4: Linear Momentum', weight: '10-15%', note: 'Impulse, collisions' },
      { name: 'Unit 5: Torque and Rotation', weight: '10-15%', note: 'Rotational dynamics' },
      { name: 'Unit 6: Rotating Energy and Momentum', weight: '5-8%', note: 'Angular conservation' },
      { name: 'Unit 7: Oscillations', weight: '5-8%', note: 'Simple harmonic motion' },
      { name: 'Unit 8: Fluids', weight: '10-15%', note: 'Pressure, buoyancy' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro physics credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Math', 'Algebra and trig; no calculus'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the eight units', duration: 'Aug-May' },
      { stage: 'Practice reasoning FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students needing algebra-based physics credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Physics 1 worth?', a: 'Most colleges grant three to four credits for a 3 or higher toward an introductory algebra-based physics course. Selective schools may require 4 or 5.' },
      { q: 'Is AP Physics 1 hard?', a: 'It emphasizes conceptual reasoning and lab skills more than calculation, which many students find harder than expected. Strong free-response practice is key.' },
      { q: 'Physics 1 or Physics 2?', a: 'Physics 1 is the first semester (mechanics plus fluids); Physics 2 is the second semester (thermo, E&M, optics, modern). Take them in sequence.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; engineering and physics programs often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Yes, with steady problem solving and FRQ practice. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'First-semester algebra-based college physics',
      '42 multiple-choice plus four free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-physics-2-algebra-based', 'ap-calculus-ab', 'ap-chemistry'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-1-algebra-based',
    reviewed: '2026-08',
    confidence: 'high'
  }
,
  {
    slug: 'ap-physics-2-algebra-based',
    body: 'College Board',
    tagline: 'Earn second-semester algebra-based physics credit across E&M and modern topics.',
    description: 'AP Physics 2: Algebra-Based is a hybrid digital exam covering thermodynamics, fluids, electricity and magnetism, optics, and modern physics at the level of a second-semester college physics course. It pairs 42 multiple-choice questions with four free-response questions emphasizing reasoning and lab skills. A 3 typically earns credit for an introductory algebra-based physics II course.',
    quickAnswer: {
      summary: 'AP Physics 2 is a hybrid digital exam: 42 multiple-choice questions in 85 minutes and four free-response questions in 95 minutes. Scored 1-5, a 3 generally earns introductory algebra-based physics II credit.',
      advantages: [
        'Equivalent to second-semester college physics (algebra-based)',
        'Reasoning and lab-skills emphasis over pure calculation',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Common prerequisite for science and engineering majors'
      ]
    },
    roadmap: ['Join AP Physics 2 via My AP', 'Study the 7 CED units', 'Practice FRQs and lab reasoning', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'AP Physics 1 or equivalent algebra-based physics is recommended first.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 9: Thermodynamics', weight: '15-18%', note: 'Laws, entropy' },
      { name: 'Unit 10: Electric Force, Field, Potential', weight: '15-18%', note: 'Coulomb, circuits intro' },
      { name: 'Unit 11: Electric Circuits', weight: '15-18%', note: 'DC circuits' },
      { name: 'Unit 12: Magnetism and Electromagnetism', weight: '12-15%', note: 'Fields, induction' },
      { name: 'Unit 13: Geometric Optics', weight: '12-15%', note: 'Reflection, refraction' },
      { name: 'Unit 14: Waves, Sound, Physical Optics', weight: '12-15%', note: 'Interference, diffraction' },
      { name: 'Unit 15: Modern Physics', weight: '12-15%', note: 'Quantum, nuclear' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro physics II credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Math', 'Algebra and trig; no calculus'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the seven units', duration: 'Aug-May' },
      { stage: 'Practice reasoning FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Challenging',
    audience: 'High-school students needing algebra-based physics II credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Physics 2 worth?', a: 'Most colleges grant three to four credits for a 3 or higher toward an introductory algebra-based physics II course. Selective schools may require 4 or 5.' },
      { q: 'Is AP Physics 2 hard?', a: 'It is conceptual and reasoning-heavy. Students who build strong intuition from Physics 1 tend to do well, but the free-response section rewards careful explanation.' },
      { q: 'Physics 2 or Physics C?', a: 'Physics 2 is algebra-based and broader; Physics C is calculus-based and deeper in mechanics and E&M. Engineering students usually take Physics C.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; engineering and physics programs often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Yes, with steady problem solving and FRQ practice. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Second-semester algebra-based college physics',
      '42 multiple-choice plus four free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-physics-1-algebra-based', 'ap-physics-c-electricity-and-magnetism', 'ap-calculus-ab'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-2-algebra-based',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-physics-c-electricity-and-magnetism',
    body: 'College Board',
    tagline: 'Earn calculus-based E&M credit for engineering and physics majors.',
    description: 'AP Physics C: Electricity and Magnetism is a calculus-based, hybrid digital exam covering electrostatics, conductors and capacitors, circuits, magnetic fields, and electromagnetic induction at the level of a second-semester college physics course. It pairs 42 multiple-choice questions with four free-response questions. A 3 typically earns credit for a calculus-based physics E&M course.',
    quickAnswer: {
      summary: 'AP Physics C: E&M is a hybrid digital exam: 42 multiple-choice questions in 85 minutes and four free-response questions in 95 minutes. Scored 1-5, a 3 generally earns calculus-based physics E&M credit.',
      advantages: [
        'Equivalent to second-semester calculus-based college physics',
        'Strong credential for engineering and physical-science majors',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Often taken alongside AP Physics C: Mechanics'
      ]
    },
    roadmap: ['Join AP Physics C E&M via My AP', 'Study the 6 CED units', 'Practice calculus-based FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Calculus (concurrent AP Calculus) and prior physics are expected.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 8: Electric Charges, Fields, Gauss\'s Law', weight: '15-25%', note: 'Coulomb, flux' },
      { name: 'Unit 9: Electric Potential', weight: '10-20%', note: 'Potential, energy' },
      { name: 'Unit 10: Conductors and Capacitors', weight: '10-15%', note: 'Capacitance' },
      { name: 'Unit 11: Electric Circuits', weight: '15-25%', note: 'RC circuits' },
      { name: 'Unit 12: Magnetic Fields and Electromagnetism', weight: '10-20%', note: 'Biot-Savart, Ampere' },
      { name: 'Unit 13: Electromagnetic Induction', weight: '10-20%', note: 'Faraday, Lenz' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns calculus-based E&M credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Math', 'Calculus required'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the six units with calculus', duration: 'Aug-May' },
      { stage: 'Practice derivations and FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'High-school students targeting engineering or physics majors',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Physics C E&M worth?', a: 'Many colleges grant three to four credits for a 3 or higher toward a calculus-based physics E&M course. Engineering programs often want 4 or 5.' },
      { q: 'Is Physics C E&M hard?', a: 'It is one of the more difficult AP exams because it assumes fluency in calculus and strong E&M intuition. Consistent problem solving is essential.' },
      { q: 'Should I take both Physics C exams?', a: 'Engineering and physics majors usually take both Mechanics and E&M, often in the same year, to maximize credit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; selective engineering schools often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Self-study is possible with strong calculus, but the derivations are demanding. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Calculus-based second-semester college physics (E&M)',
      '42 multiple-choice plus four free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-physics-c-mechanics', 'ap-calculus-bc', 'ap-physics-2-algebra-based'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-physics-c-mechanics',
    body: 'College Board',
    tagline: 'Earn calculus-based mechanics credit for engineering and physics majors.',
    description: 'AP Physics C: Mechanics is a calculus-based, hybrid digital exam covering kinematics, dynamics, work and energy, momentum, rotation, oscillations, and gravitation at the level of a first-semester college physics course. It pairs 42 multiple-choice questions with four free-response questions. A 3 typically earns credit for a calculus-based physics mechanics course.',
    quickAnswer: {
      summary: 'AP Physics C: Mechanics is a hybrid digital exam: 42 multiple-choice questions in 85 minutes and four free-response questions in 95 minutes. Scored 1-5, a 3 generally earns calculus-based physics mechanics credit.',
      advantages: [
        'Equivalent to first-semester calculus-based college physics',
        'Strong credential for engineering and physical-science majors',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Often paired with AP Physics C: E&M'
      ]
    },
    roadmap: ['Join AP Physics C Mechanics via My AP', 'Study the 7 CED units', 'Practice calculus-based FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Calculus (concurrent AP Calculus) and prior physics are expected.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Kinematics', weight: '10-15%', note: 'Motion in 1-2-3 dimensions' },
      { name: 'Unit 2: Force and Dynamics', weight: '20-25%', note: 'Newton\'s laws' },
      { name: 'Unit 3: Work, Energy, Power', weight: '15-25%', note: 'Conservation' },
      { name: 'Unit 4: Linear Momentum', weight: '10-20%', note: 'Impulse, collisions' },
      { name: 'Unit 5: Torque and Rotation', weight: '10-15%', note: 'Rotational dynamics' },
      { name: 'Unit 6: Rotating Energy and Momentum', weight: '10-15%', note: 'Angular conservation' },
      { name: 'Unit 7: Oscillations', weight: '10-15%', note: 'Simple harmonic motion' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns calculus-based mechanics credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Math', 'Calculus required'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the seven units with calculus', duration: 'Aug-May' },
      { stage: 'Practice derivations and FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'High-school students targeting engineering or physics majors',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Physics C Mechanics worth?', a: 'Many colleges grant three to four credits for a 3 or higher toward a calculus-based physics mechanics course. Engineering programs often want 4 or 5.' },
      { q: 'Is Physics C Mechanics hard?', a: 'It assumes calculus fluency and strong mechanics intuition. Students concurrently in calculus who practice derivations do well.' },
      { q: 'Should I take both Physics C exams?', a: 'Engineering and physics majors usually take both Mechanics and E&M, often in the same year, to maximize credit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; selective engineering schools often want 4 or 5.' },
      { q: 'Can I self-study?', a: 'Self-study is possible with strong calculus, but the derivations are demanding. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Calculus-based first-semester college physics (mechanics)',
      '42 multiple-choice plus four free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-physics-c-electricity-and-magnetism', 'ap-calculus-bc', 'ap-physics-1-algebra-based'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-precalculus',
    body: 'College Board',
    tagline: 'Bank college precalculus credit and strengthen your math foundation.',
    description: 'AP Precalculus prepares students for college calculus and science courses through deep work with polynomial, rational, exponential, logarithmic, trigonometric, and polar functions. The hybrid digital exam pairs 42 multiple-choice questions with four free-response questions. A 3 typically earns credit for a college precalculus or quantitative-reasoning course.',
    quickAnswer: {
      summary: 'AP Precalculus is a hybrid digital exam: 42 multiple-choice questions in 105 minutes and four free-response questions in 70 minutes. Scored 1-5, a 3 generally earns college precalculus credit.',
      advantages: [
        'Equivalent to a college precalculus course',
        'Builds the modeling foundation for calculus and STEM',
        'Hybrid digital (Bluebook MCQ, paper FRQ)',
        'Good stepping stone before AP Calculus'
      ]
    },
    roadmap: ['Join AP Precalculus via My AP', 'Study Units 1-3 (Unit 4 optional)', 'Practice graphing-calculator FRQs', 'Use AP Classroom progress checks', 'Sit the hybrid digital exam in May'],
    prerequisites: 'Strong algebra II and trigonometry background are expected.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '2 hours 55 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Hybrid digital',
      admin: 'School-administered, Bluebook + paper FRQ'
    },
    topics: [
      { name: 'Unit 1: Polynomial and Rational Functions', weight: '30-40%', note: 'Rate of change, zeros' },
      { name: 'Unit 2: Exponential and Logarithmic Functions', weight: '25-40%', note: 'Growth, logarithms' },
      { name: 'Unit 3: Trigonometric and Polar Functions', weight: '30-35%', note: 'Periodic, polar' },
      { name: 'Unit 4: Parametric, Vector, Matrix Functions', weight: 'Not assessed', note: 'Optional enrichment' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns college precalculus credit'],
      ['Delivery', 'Hybrid digital (Bluebook MCQ, paper FRQ)'],
      ['Calculator', 'Required for parts of both sections'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the three assessed units', duration: 'Aug-May' },
      { stage: 'Practice calculator FRQs', duration: '2-3 months' },
      { stage: 'Take the hybrid exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students strengthening math before calculus',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Precalculus worth?', a: 'Many colleges grant three credits for a 3 or higher toward a precalculus or quantitative-reasoning requirement. Policies vary, so check each school.' },
      { q: 'Should I take Precalculus or Calculus?', a: 'Take Precalculus if you need the modeling foundation first; move to AP Calculus AB or BC afterward. Strong students may skip directly to Calculus.' },
      { q: 'Is the exam hard?', a: 'It is algebra-intensive and calculator-heavy. Students comfortable with function transformations and trig do well.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some schools want 4 or 5 for placement.' },
      { q: 'Can I self-study?', a: 'Yes, using the CED and a graphing calculator. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'College precalculus equivalent',
      '42 multiple-choice plus four free-response questions',
      'Hybrid digital: Bluebook for multiple choice, paper for free response',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-calculus-ab', 'ap-calculus-bc', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-precalculus',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-psychology',
    body: 'College Board',
    tagline: 'Earn intro psychology credit by exploring behavior and mental processes.',
    description: 'AP Psychology is a fully digital exam introducing the systematic, scientific study of behavior and mental processes. It covers biological bases, cognition, development, learning, social psychology, personality, and health across five units, pairing 75 multiple-choice questions with two free-response questions that analyze research. A 3 typically earns credit for an introductory psychology course.',
    quickAnswer: {
      summary: 'AP Psychology is a fully digital exam: 75 multiple-choice questions in 90 minutes and two free-response questions in 70 minutes. Scored 1-5, a 3 generally earns introductory psychology credit.',
      advantages: [
        'Equivalent to a first-year college psychology course',
        'Fully digital in Bluebook',
        'Strong fit for psychology, health, and social-science interests',
        'Widely accepted for social-science credit'
      ]
    },
    roadmap: ['Join AP Psychology via My AP', 'Study the 5 CED units', 'Practice the article and evidence free responses', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; an interest in human behavior helps.',
    examMeta: {
      questions: '75 multiple choice + 2 free response',
      time: '2 hours 40 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Biological Bases of Behavior', weight: '15-25%', note: 'Brain, neurotransmitters' },
      { name: 'Unit 2: Cognition', weight: '15-25%', note: 'Memory, thinking, language' },
      { name: 'Unit 3: Development and Learning', weight: '15-25%', note: 'Lifespan, conditioning' },
      { name: 'Unit 4: Social Psychology and Personality', weight: '15-25%', note: 'Attribution, traits' },
      { name: 'Unit 5: Mental and Physical Health', weight: '15-25%', note: 'Disorders, treatment' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro psychology credit'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['FRQ', 'Article analysis and evidence-based question'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the five units', duration: 'Aug-May' },
      { stage: 'Practice the two FRQ types', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in psychology and social science',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Psychology worth?', a: 'Most colleges grant three credits for a 3 or higher toward an introductory psychology requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Psychology hard?', a: 'The vocabulary load is the main challenge. With consistent review of terms and practice on the research-based free responses, most students do well.' },
      { q: 'What are the free-response questions?', a: 'One asks you to analyze a summarized research article; the other asks you to build an evidence-based claim using several sources.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some schools want 4 or 5 for placement.' },
      { q: 'Can I self-study?', a: 'Yes, it is one of the more self-study-friendly APs. Use the CED, flashcards, and practice FRQs, then register through a school.' }
    ],
    summaryPoints: [
      'Introductory college psychology',
      '75 multiple-choice plus two free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-biology', 'ap-human-geography', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-psychology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-research',
    body: 'College Board',
    tagline: 'Complete an original academic paper and earn AP Capstone credit.',
    description: 'AP Research is the second AP Capstone course, assessed entirely by a 4,000-5,000 word academic paper on a topic of your choosing, plus a presentation and oral defense. There is no timed exam. The paper is 75 percent of the score and the presentation and defense are 25 percent. A 3 typically earns credit for a first-year college research or writing seminar.',
    quickAnswer: {
      summary: 'AP Research has no timed exam. Your grade comes from a 4,000-5,000 word academic paper (75 percent) and a presentation with oral defense (25 percent), submitted through the AP Digital Portfolio. Scored 1-5, a 3 generally earns research-seminar credit.',
      advantages: [
        'Builds original research and academic-writing skills',
        'Second course of the AP Capstone diploma',
        'No timed exam; judged on a sustained project',
        'Valued by colleges for demonstrated rigor'
      ]
    },
    roadmap: ['Join AP Research via My AP', 'Choose and refine a research question', 'Conduct and write the academic paper', 'Prepare the presentation and defense', 'Submit through the AP Digital Portfolio'],
    prerequisites: 'AP Seminar is recommended but not strictly required beforehand.',
    examMeta: {
      questions: 'No timed exam; paper and presentation',
      time: 'School year (submitted in spring)',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Portfolio via AP Digital Portfolio',
      admin: 'School submissions'
    },
    topics: [
      { name: 'Academic Paper (4000-5000 words)', weight: '75%', note: 'Original research and argument' },
      { name: 'Presentation and Oral Defense', weight: '25%', note: 'Defend methods and findings' },
      { name: 'Research Skills', weight: 'Assessed', note: 'Methods, sources, analysis' },
      { name: 'Communication', weight: 'Assessed', note: 'Written and spoken argument' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns research-seminar credit'],
      ['No exam', 'Assessed by paper and defense'],
      ['Paper length', '4,000-5,000 words'],
      ['Submission', 'Spring via AP Digital Portfolio']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Develop the research question', duration: 'Fall-winter' },
      { stage: 'Write and revise the paper', duration: 'School year' },
      { stage: 'Present and defend', duration: 'Spring' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Research costs (course-dependent)', fee: '$0-$50' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83)',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students pursuing the AP Capstone diploma',
    time: '1 school year',
    cost: '$99-$179',
    faqs: [
      { q: 'How many credits is AP Research worth?', a: 'Many colleges grant three credits for a 3 or higher toward a first-year research or writing seminar. Some offerCapstone-specific recognition.' },
      { q: 'Is there a timed exam?', a: 'No. AP Research is assessed entirely by your academic paper and a presentation with oral defense submitted through the AP Digital Portfolio.' },
      { q: 'Do I need AP Seminar first?', a: 'Seminar is recommended as the Capstone introduction, but schools may allow Research on its own. Check your school\'s sequence.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some honors programs want 4 or 5.' },
      { q: 'How is the paper graded?', a: 'College Board readers score the paper on argument, methods, and analysis (75 percent) and your presentation and defense on communication (25 percent).' }
    ],
    summaryPoints: [
      'AP Capstone research course with no timed exam',
      'Academic paper (75%) plus presentation and defense (25%)',
      'Submitted through the AP Digital Portfolio',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-seminar', 'ap-english-language-and-composition', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-research',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-seminar',
    body: 'College Board',
    tagline: 'Build researched argument and presentation skills for AP Capstone credit.',
    description: 'AP Seminar is the first AP Capstone course, assessed by two performance tasks and an end-of-course exam. The team project is 20 percent, the individual research project is 35 percent, and the two-hour end-of-course exam is 45 percent. A 3 typically earns credit for a first-year college seminar or writing course.',
    quickAnswer: {
      summary: 'AP Seminar combines a team project and presentation (20 percent), an individual research essay and presentation (35 percent), and a two-hour end-of-course exam in Bluebook (45 percent). Scored 1-5, a 3 generally earns first-year seminar credit.',
      advantages: [
        'Builds research, argument, and presentation skills',
        'First course of the AP Capstone diploma',
        'End-of-course exam is fully digital in Bluebook',
        'Valued by colleges for demonstrated rigor'
      ]
    },
    roadmap: ['Join AP Seminar via My AP', 'Complete the team project', 'Complete the individual research project', 'Study for the end-of-course exam', 'Take the digital exam in May'],
    prerequisites: 'None required; strong reading and writing help.',
    examMeta: {
      questions: 'Team project + individual project + 2-hour EOC exam',
      time: 'School year + 2-hour exam',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Portfolio + Bluebook EOC',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Team Project and Presentation', weight: '20%', note: 'Collaborative research and defense' },
      { name: 'Individual Research-Based Essay and Presentation', weight: '35%', note: '2,000-word argument plus talk' },
      { name: 'End-of-Course Exam', weight: '45%', note: 'Argument analysis and evidence essay' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns first-year seminar credit'],
      ['Components', 'Team 20%, individual 35%, exam 45%'],
      ['Delivery', 'Portfolio tasks plus Bluebook exam'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Complete team and individual projects', duration: 'Fall-spring' },
      { stage: 'Prepare for the EOC exam', duration: 'Spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students pursuing the AP Capstone diploma',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Seminar worth?', a: 'Many colleges grant three credits for a 3 or higher toward a first-year seminar or writing course. Some offer Capstone-specific recognition.' },
      { q: 'Is there a single timed exam?', a: 'No single exam covers everything. The grade is 20 percent team project, 35 percent individual project, and 45 percent a two-hour end-of-course exam.' },
      { q: 'Do I need Seminar before Research?', a: 'Seminar is the recommended first Capstone course, but schools may allow either order. The diploma requires both plus four AP exams at 3 or higher.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some honors programs want 4 or 5.' },
      { q: 'What is on the end-of-course exam?', a: 'A short-answer argument-analysis section and a longer evidence-based argument essay, all in Bluebook.' }
    ],
    summaryPoints: [
      'First AP Capstone course, skills-based',
      'Team 20%, individual 35%, EOC exam 45%',
      'Portfolio tasks plus a Bluebook end-of-course exam',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-research', 'ap-english-language-and-composition', 'ap-statistics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-seminar',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-spanish-language-and-culture',
    body: 'College Board',
    tagline: 'Show Spanish proficiency across the four skills for college language credit.',
    description: 'AP Spanish Language and Culture assesses Spanish at the intermediate-high level across listening, reading, speaking, and writing, organized around six course themes. Under the 2026-27 revisions the exam is fully digital and includes a research project component alongside multiple-choice and free-response tasks. A 3 typically earns college Spanish credit.',
    quickAnswer: {
      summary: 'AP Spanish Language and Culture is a fully digital exam: 55 multiple-choice questions (listening and reading) and three free-response tasks including a project presentation and argumentative essay. Scored 1-5, a 3 generally earns college Spanish credit.',
      advantages: [
        'Tests all four language skills at intermediate-high level',
        'Accepted for language requirements and placement',
        'Fully digital in Bluebook from May 2027',
        'Themes connect language to culture and global issues'
      ]
    },
    roadmap: ['Join AP Spanish via My AP', 'Build the four skills around the six themes', 'Complete the research project prep', 'Practice speaking and writing tasks', 'Take the digital exam in May'],
    prerequisites: 'Roughly three to four years of high-school Spanish or equivalent is expected.',
    examMeta: {
      questions: '55 multiple choice + 3 free response',
      time: 'About 2 hours 25 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital (Bluebook from May 2027)',
      admin: 'School-administered'
    },
    topics: [
      { name: 'Families and Communities', weight: 'Theme', note: 'Personal and community life' },
      { name: 'Personal and Public Identities', weight: 'Theme', note: 'Self, identity, beliefs' },
      { name: 'Beauty and Aesthetics', weight: 'Theme', note: 'Arts and expression' },
      { name: 'Science and Technology', weight: 'Theme', note: 'Innovation and society' },
      { name: 'Contemporary Life', weight: 'Theme', note: 'Daily life and leisure' },
      { name: 'Global Challenges', weight: 'Theme', note: 'Environment, health, society' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns language credit'],
      ['Skills tested', 'Listening, reading, speaking, writing'],
      ['Delivery', 'Fully digital in Bluebook from May 2027'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Build all four skills', duration: 'Aug-May' },
      { stage: 'Complete the research project', duration: 'Spring' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school Spanish students at intermediate-high proficiency',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Spanish worth?', a: 'Most colleges grant three to eight language credits for a 3 or higher and may place you into intermediate or advanced coursework. Check each school\'s policy.' },
      { q: 'What is the exam format?', a: 'Section I is three free-response tasks worth 50 percent, including a project presentation, project Q&A, and argumentative essay. Section II is 55 multiple-choice questions in listening and reading, also 50 percent.' },
      { q: 'Is the exam hard?', a: 'It expects intermediate-high proficiency across all four skills. Consistent speaking practice is the biggest factor in success.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the usual threshold; language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible if you already speak and read Spanish well; regular conversation practice is essential, and you register through a school.' }
    ],
    summaryPoints: [
      'Assesses listening, reading, speaking, and writing in Spanish',
      '55 multiple-choice plus three free-response tasks',
      'Fully digital in Bluebook from May 2027',
      'Scored 1-5; a 3 generally earns language credit'
    ],
    relatedSlugs: ['ap-spanish-literature-and-culture', 'ap-french-language-and-culture', 'ap-italian-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-spanish-language-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  }
,
  {
    slug: 'ap-spanish-literature-and-culture',
    body: 'College Board',
    tagline: 'Analyze Peninsular, Latin American, and US Hispanic texts for college literature credit.',
    description: 'AP Spanish Literature and Culture is a fully digital exam centered on a required reading list of Peninsular, Latin American, and US Hispanic literature. It pairs multiple-choice questions on audio and texts with four free-response questions that analyze poetry, prose, and a required reading in comparison. A 3 typically earns credit for a college Spanish literature or advanced-language course.',
    quickAnswer: {
      summary: 'AP Spanish Literature and Culture is a fully digital exam: 65 multiple-choice questions in 80 minutes and four free-response questions in 100 minutes. Scored 1-5, a 3 generally earns college Spanish literature credit.',
      advantages: [
        'Deep study of the required Spanish-language reading list',
        'Builds literary analysis in Spanish',
        'Fully digital in Bluebook',
        'Strong credential for Spanish and literature majors'
      ]
    },
    roadmap: ['Join AP Spanish Lit via My AP', 'Read the required authors and works', 'Practice text analysis and comparison essays', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'Strong Spanish reading and writing ability, usually after AP Spanish Language, is expected.',
    examMeta: {
      questions: '65 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Section I: Audio Texts (MCQ)', weight: '10%', note: 'Interview, poem, presentation' },
      { name: 'Section I: Reading Texts (MCQ)', weight: '40%', note: 'Required and non-required texts' },
      { name: 'Section II: Text Explanation', weight: 'Free response', note: 'Short-answer on a required text' },
      { name: 'Section II: Text and Art Comparison', weight: 'Free response', note: 'Compare text with an image' },
      { name: 'Section II: Analysis and Comparison Essays', weight: 'Free response', note: 'Two longer literary essays' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns Spanish literature credit'],
      ['Required list', 'Peninsular, Latin American, US Hispanic works'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Read the required works', duration: 'Aug-May' },
      { stage: 'Practice analysis and comparison essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Hard',
    audience: 'Advanced Spanish students pursuing literature credit',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Spanish Literature worth?', a: 'Many colleges grant three to six credits for a 3 or higher toward a Spanish literature or advanced-language requirement. Selective schools may require 4 or 5.' },
      { q: 'Is the exam hard?', a: 'It demands strong literary Spanish and familiarity with the required reading list. Students who read the works closely and practice timed essays do best.' },
      { q: 'Do I need AP Spanish Language first?', a: 'Not required, but most students take Language first because Literature assumes advanced reading and writing fluency.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; language departments may require 4 or 5 for upper-level placement.' },
      { q: 'Can I self-study?', a: 'Self-study is possible if your Spanish is strong; read the required list and practice essays, then register through a school.' }
    ],
    summaryPoints: [
      'College-level Spanish literature and culture',
      '65 multiple-choice plus four free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-spanish-language-and-culture', 'ap-english-literature-and-composition', 'ap-french-language-and-culture'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-spanish-literature-and-culture',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-statistics',
    body: 'College Board',
    tagline: 'Earn intro college statistics credit with data, probability, and inference.',
    description: 'AP Statistics is a fully digital exam equivalent to a first-year college statistics course, covering exploratory data analysis, sampling and experimentation, probability, and statistical inference. It pairs 42 multiple-choice questions with four free-response questions that require a graphing calculator. A 3 typically earns credit for an introductory statistics course.',
    quickAnswer: {
      summary: 'AP Statistics is a fully digital exam: 42 multiple-choice questions in 90 minutes and four free-response questions in 90 minutes. Scored 1-5, a 3 generally earns introductory statistics credit.',
      advantages: [
        'Equivalent to a first-year college statistics course',
        'Widely useful across science, business, and social science',
        'Fully digital in Bluebook',
        'Calculator allowed throughout'
      ]
    },
    roadmap: ['Join AP Statistics via My AP', 'Study the 5 CED units', 'Practice FRQs with a graphing calculator', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'Algebra II is recommended before the course.',
    examMeta: {
      questions: '42 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Exploring One-Variable Data', weight: '20-30%', note: 'Graphs, distributions' },
      { name: 'Unit 2: Probability and Distributions', weight: '15-25%', note: 'Random variables' },
      { name: 'Unit 3: Inference for Proportions', weight: '15-25%', note: 'Categorical data' },
      { name: 'Unit 4: Inference for Means', weight: '10-20%', note: 'Quantitative data' },
      { name: 'Unit 5: Regression Inference', weight: '10-20%', note: 'Bivariate data' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro statistics credit'],
      ['Calculator', 'Graphing calculator required'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the five units', duration: 'Aug-May' },
      { stage: 'Practice FRQs with a calculator', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students needing statistics for any major',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP Statistics worth?', a: 'Most colleges grant three to four credits for a 3 or higher toward an introductory statistics requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP Statistics hard?', a: 'The math is not advanced, but the vocabulary of inference and the free-response justification are tricky. Practice explaining conclusions in context.' },
      { q: 'Stats or Calculus?', a: 'Statistics suits data-oriented fields; calculus suits engineering and physical science. Many students take both.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; many universities want 4 or 5 for placement.' },
      { q: 'Can I self-study?', a: 'Yes, using the CED and a graphing calculator. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Introductory college statistics',
      '42 multiple-choice plus four free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-calculus-ab', 'ap-precalculus', 'ap-microeconomics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-statistics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-united-states-government-and-politics',
    body: 'College Board',
    tagline: 'Earn intro American-government credit with institutions and the Constitution.',
    description: 'AP United States Government and Politics is a fully digital exam covering constitutional foundations, the branches of government, civil liberties, political behavior, and required Supreme Court cases. It pairs 55 multiple-choice questions with four free-response questions, including a SCOTUS comparison and an argument essay. A 3 typically earns credit for an introductory American-government course.',
    quickAnswer: {
      summary: 'AP U.S. Government and Politics is a fully digital exam: 55 multiple-choice questions in 80 minutes and four free-response questions in 100 minutes. Scored 1-5, a 3 generally earns introductory U.S. government credit.',
      advantages: [
        'Equivalent to a first-year college American-government course',
        'Builds understanding of the Constitution and the Court',
        'Fully digital in Bluebook',
        'Strong preparation for civics, law, and policy study'
      ]
    },
    roadmap: ['Join AP U.S. Gov via My AP', 'Study the 5 CED units and required cases', 'Practice FRQs and SCOTUS comparison', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; an interest in civics helps.',
    examMeta: {
      questions: '55 multiple choice + 4 free response',
      time: '3 hours',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: Foundations of American Democracy', weight: '15-22%', note: 'Constitution, federalism' },
      { name: 'Unit 2: Branches of Government', weight: '25-36%', note: 'Congress, presidency, courts' },
      { name: 'Unit 3: Civil Liberties and Rights', weight: '13-18%', note: 'Bill of Rights, equal protection' },
      { name: 'Unit 4: Political Ideologies and Beliefs', weight: '10-15%', note: 'Public opinion' },
      { name: 'Unit 5: Political Participation', weight: '20-27%', note: 'Elections, parties, interest groups' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns intro U.S. government credit'],
      ['Required cases', 'Landmark Supreme Court cases'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the five units and cases', duration: 'Aug-May' },
      { stage: 'Practice SCOTUS comparison and essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in government, law, and policy',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP U.S. Government worth?', a: 'Most colleges grant three credits for a 3 or higher toward an introductory American-government requirement. Selective schools may require 4 or 5.' },
      { q: 'Is the exam hard?', a: 'The content is conceptual. Success comes from knowing the required Supreme Court cases and practicing the argument essay and SCOTUS comparison.' },
      { q: 'What is the SCOTUS comparison?', a: 'A free-response question asking you to compare a required Supreme Court case with a non-required one you read on exam day, explaining relevance.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; some schools want 4 or 5 for placement.' },
      { q: 'Can I self-study?', a: 'Yes, using the CED and a list of required cases. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'Introductory college American government',
      '55 multiple-choice plus four free-response questions',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-comparative-government-and-politics', 'ap-united-states-history', 'ap-human-geography'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-united-states-government-and-politics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-united-states-history',
    body: 'College Board',
    tagline: 'Cover U.S. history from 1491 to today for college history credit.',
    description: 'AP United States History is a fully digital exam covering U.S. history from 1491 to the present, organized in nine periods. It pairs 55 multiple-choice questions and three short-answer questions with a document-based question and a long essay that test historical reasoning. A 3 typically earns credit for a U.S. history survey at public universities.',
    quickAnswer: {
      summary: 'AP United States History is a fully digital exam: 55 multiple-choice questions, three short-answer questions, a document-based question, and a long essay. Scored 1-5, a 3 generally earns U.S. history credit.',
      advantages: [
        'Equivalent to a college U.S. history survey',
        'Builds document analysis and essay skills',
        'Fully digital in Bluebook',
        'Strong humanities and pre-law preparation'
      ]
    },
    roadmap: ['Join APUSH via My AP', 'Study the 9 periods chronologically', 'Practice DBQ and LEQ essays', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'World history background is helpful but not required.',
    examMeta: {
      questions: '55 MCQ + 3 SAQ + DBQ + LEQ',
      time: '3 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Period 1: 1491-1607', weight: '4-6%', note: 'Indigenous Americas, contact' },
      { name: 'Period 2: 1607-1754', weight: '6-8%', note: 'Colonies' },
      { name: 'Period 3: 1754-1800', weight: '10-17%', note: 'Revolution, early republic' },
      { name: 'Period 4: 1800-1848', weight: '10-17%', note: 'Expansion, sectionalism' },
      { name: 'Period 5: 1844-1877', weight: '10-17%', note: 'Civil War, Reconstruction' },
      { name: 'Period 6: 1865-1898', weight: '10-17%', note: 'Industrialization' },
      { name: 'Period 7: 1890-1945', weight: '10-17%', note: 'Empire, depression, war' },
      { name: 'Period 8: 1945-1980', weight: '10-17%', note: 'Cold War, civil rights' },
      { name: 'Period 9: 1980-present', weight: '4-6%', note: 'Contemporary US' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns U.S. history credit'],
      ['Essays', 'DBQ and long essay (LEQ)'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the nine periods in order', duration: 'Aug-May' },
      { stage: 'Practice DBQ and LEQ essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in U.S. history and the humanities',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is APUSH worth?', a: 'Most colleges grant three to six credits for a 3 or higher toward a U.S. history requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP U.S. History hard?', a: 'The content volume is large, but the essay rubrics are consistent. Students who practice the DBQ and LEQ formats do well.' },
      { q: 'What is the DBQ?', a: 'The document-based question gives you seven sources and asks you to build an argument using them, demonstrating historical reasoning under a time limit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; many universities want 4 or 5 for placement out of introductory history.' },
      { q: 'Can I self-study?', a: 'Yes, with a timeline-based review book and past DBQ/LEQ practice. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'College survey of U.S. history since 1491',
      '55 MCQ, 3 SAQ, a DBQ, and a long essay',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-world-history-modern', 'ap-european-history', 'ap-united-states-government-and-politics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-united-states-history',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-world-history-modern',
    body: 'College Board',
    tagline: 'Cover global history from 1200 CE to today for college world-history credit.',
    description: 'AP World History: Modern is a fully digital exam covering global history from about 1200 CE to the present, organized in nine units that emphasize comparison, causation, and continuity and change. It pairs 55 multiple-choice questions and three short-answer questions with a document-based question and a long essay. A 3 typically earns credit for a world-history survey at public universities.',
    quickAnswer: {
      summary: 'AP World History: Modern is a fully digital exam: 55 multiple-choice questions, three short-answer questions, a document-based question, and a long essay. Scored 1-5, a 3 generally earns world-history credit.',
      advantages: [
        'Equivalent to a college modern world-history survey',
        'Builds document analysis and comparative reasoning',
        'Fully digital in Bluebook',
        'Strong humanities and international-studies preparation'
      ]
    },
    roadmap: ['Join AP World via My AP', 'Study the 9 units chronologically', 'Practice DBQ and LEQ essays', 'Use AP Classroom progress checks', 'Sit the fully digital exam in May'],
    prerequisites: 'None required; an interest in global history helps.',
    examMeta: {
      questions: '55 MCQ + 3 SAQ + DBQ + LEQ',
      time: '3 hours 15 minutes',
      pass: '3 (1-5 scale)',
      fee: '$99 (US) / $129 (intl)',
      format: 'Fully digital',
      admin: 'School-administered via Bluebook'
    },
    topics: [
      { name: 'Unit 1: The Global Tapestry', weight: '8-10%', note: 'c. 1200-1450' },
      { name: 'Unit 2: Networks of Exchange', weight: '8-10%', note: 'c. 1200-1450' },
      { name: 'Unit 3: Land-Based Empires', weight: '12-15%', note: 'c. 1450-1750' },
      { name: 'Unit 4: Transoceanic Interconnections', weight: '12-15%', note: 'c. 1450-1750' },
      { name: 'Unit 5: Revolutions', weight: '12-15%', note: 'c. 1750-1900' },
      { name: 'Unit 6: Consequences of Industrialization', weight: '12-15%', note: 'c. 1750-1900' },
      { name: 'Unit 7: Global Conflict', weight: '8-10%', note: 'c. 1900-2001' },
      { name: 'Unit 8: Cold War and Decolonization', weight: '8-10%', note: 'c. 1900-2001' },
      { name: 'Unit 9: Globalization', weight: '8-10%', note: 'c. 2001-present' }
    ],
    examEssentials: [
      ['Score scale', '1 to 5'],
      ['Credit', '3+ typically earns world-history credit'],
      ['Essays', 'DBQ and long essay (LEQ)'],
      ['Delivery', 'Fully digital in Bluebook'],
      ['Exam timing', 'Early May']
    ],
    timeline: [
      { stage: 'Enroll in the AP course', duration: 'Fall' },
      { stage: 'Study the nine units in order', duration: 'Aug-May' },
      { stage: 'Practice DBQ and LEQ essays', duration: '2-3 months' },
      { stage: 'Take the digital exam', duration: 'May' },
      { stage: 'Receive scores', duration: 'Early July' }
    ],
    costBreakdown: {
      items: [
        { item: 'AP exam fee (US, territories, Canada, DoDEA)', fee: '$99' },
        { item: 'AP exam fee (international)', fee: '$129' },
        { item: 'Late order or unused/canceled exam', fee: '$40' },
        { item: 'Fee reduction for eligible students', fee: '-$37' },
        { item: 'Prep materials (optional)', fee: '$0-$40' }
      ],
      total: '$99 US / $129 intl (eligible students pay ~$53 / ~$83); late or canceled adds $40',
      footnote: 'Fees are the 2025-26 AP charges. Schools may add a local administrative fee; the College Board fee reduction lowers the base by $37.'
    },
    difficulty: 'Moderate',
    audience: 'High-school students interested in global history and the humanities',
    time: '1 school year',
    cost: '$99-$169',
    faqs: [
      { q: 'How many credits is AP World History worth?', a: 'Most colleges grant three to six credits for a 3 or higher toward a world-history requirement. Selective schools may require 4 or 5.' },
      { q: 'Is AP World History hard?', a: 'The content spans 800 years across regions, but the essay rubrics are consistent. Students who practice the DBQ and LEQ formats do well.' },
      { q: 'What is the DBQ?', a: 'The document-based question gives you seven sources and asks you to build an argument using them, demonstrating historical reasoning under a time limit.' },
      { q: 'What score do I need for credit?', a: 'A 3 is the typical threshold; many universities want 4 or 5 for placement out of introductory history.' },
      { q: 'Can I self-study?', a: 'Yes, with a timeline-based review book and past DBQ/LEQ practice. Register for the exam through a school.' }
    ],
    summaryPoints: [
      'College survey of modern world history since 1200 CE',
      '55 MCQ, 3 SAQ, a DBQ, and a long essay',
      'Fully digital in Bluebook',
      'Scored 1-5; a 3 generally earns credit'
    ],
    relatedSlugs: ['ap-united-states-history', 'ap-european-history', 'ap-comparative-government-and-politics'],
    sourceUrl: 'https://apcentral.collegeboard.org/courses/ap-world-history-modern',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
