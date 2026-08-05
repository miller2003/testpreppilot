export const programs = [
  {
    id: 'college-board',
    body: 'College Board',
    bodyUrl: 'https://www.collegeboard.org',
    about: 'The College Board is a nonprofit membership association that runs two of the largest credit-earning programs in US higher education: the Advanced Placement (AP) Program and the College-Level Examination Program (CLEP). AP lets high-school students earn college credit through end-of-year exams tied to AP courses, while CLEP lets anyone — adult learners, transfer students, and military members — earn credit by exam, year-round, for material they already know.',
    registrationSteps: [
      { title: 'Create your College Board account', description: 'Sign in at clep.collegeboard.org (CLEP) or myap.collegeboard.org (AP) with a name that exactly matches your test-day photo ID.', duration: '10 minutes' },
      { title: 'Register for a CLEP exam', description: 'Choose your exam, pay the $97 registration fee, then schedule a seat at a test center or with CLEP with Remote Proctoring. You control the date.', duration: '15 minutes' },
      { title: 'Enroll in an AP course through your school', description: 'AP students join via a teacher-issued join code in My AP; the school orders and administers the exam in May. There is no public self-registration for AP.', duration: 'per school year' },
      { title: 'Prepare with official materials', description: 'Use the free CLEP practice questions and Modern States courses, or AP Classroom and AP Daily videos. Third-party guides are optional supplements.', duration: 'varies' },
      { title: 'Test and receive scores', description: 'CLEP scores appear immediately (composition essays take 1–2 weeks); AP exams are digital via Bluebook and scores release in early July.', duration: 'test day' }
    ],
    proctoring: 'CLEP exams are delivered at authorized test centers and through CLEP with Remote Proctoring, with a photo ID and standard check-in. AP exams are administered digitally in schools under AP security protocols using the Bluebook app.',
    retakePolicy: 'CLEP enforces a three-month waiting period between attempts at the same exam, and you pay the full fee each time. AP generally allows one attempt per subject per school year, with retesting arranged through the school only in limited cases.',
    recertification: 'College Board credit recommendations do not expire at the source; scores remain reportable for 20 years. Individual colleges set their own limits on how old a score they will post for credit.',
    scoreReporting: 'CLEP uses a scaled score of 20–80; the American Council on Education (ACE) recommends a score of 50 as the credit-granting threshold for most exams. AP uses a 1–5 scale, with 3 generally considered passing for credit.',
    refundPolicy: 'CLEP test-center fees are often refundable if you cancel at least 24 hours ahead; the $97 registration fee is generally nonrefundable. AP charges a $40 late order or unused/canceled exam fee.',
    providersNote: 'Start with College Board\'s own CLEP Official Study Guide and free practice questions, plus Modern States (free, vouchers available). For AP, use AP Classroom and AP Daily. Commercial publishers such as Kaplan, Princeton Review, and Barron\'s are widely used but not affiliated.',
    comparison: {
      title: 'Two College Board credit pathways compared',
      columns: ['Pathway', 'Best for', 'When offered', 'Fee'],
      rows: [
        { label: 'CLEP', values: ['Adults, transfers, military', 'Year-round', '$97 + center fee'] },
        { label: 'AP', values: ['High-school students', 'Each May', '$99 ($129 intl)'] }
      ]
    },
    orgFaqs: [
      { q: 'Will my college accept CLEP or AP credit?', a: 'Most US colleges accept some form of both, but policies vary widely — which scores count, how many credits, and minimum scores all differ. Always check the school\'s credit policy before testing.' },
      { q: 'Is CLEP or AP easier?', a: 'They are different. CLEP is self-paced and tests knowledge you may already have; AP is tied to a year-long course. Difficulty depends on your background, not the program.' }
    ],
    sourceUrl: 'https://www.collegeboard.org',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'clep-american-government',
    body: 'College Board',
    tagline: 'Bank three U.S. government credits in one 90-minute sitting instead of a semester of lectures.',
    description: `The CLEP American Government exam covers the material of a one-semester introductory political-science course: the Constitution, federal institutions, civil liberties, political parties, and voting behavior. It is a popular way for transfer, adult, and military students to satisfy a general-education requirement without retaking a class they largely understand. The test emphasizes how government works and how political behavior is explained, more than memorized dates.`,
    quickAnswer: {
      summary: `CLEP American Government is a 100-question, 90-minute credit-by-exam test equivalent to a first-semester college course in U.S. government and politics. A scaled score of 50 — the ACE credit-granting recommendation — typically earns three semester hours at schools that accept CLEP.`,
      advantages: [
        'Replaces a full semester course for about $97 plus a test-center fee',
        'Available year-round at test centers and online with remote proctoring',
        'Tests understanding of institutions and behavior rather than rote facts',
        'Accepted for general-education credit by roughly 2,900 colleges'
      ]
    },
    roadmap: ['Confirm your school accepts CLEP American Government', 'Register and pay the $97 fee at clep.collegeboard.org', 'Book a test center or remote-proctoring slot', 'Study institutions, civil liberties, and political behavior', 'Score 50+ to bank three credits'],
    prerequisites: 'None — open to anyone; no prior coursework is required.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Institutions and Policy Processes', weight: '30%–35%', note: 'Presidency, bureaucracy, Congress, federal courts' },
      { name: 'Civil Liberties and Civil Rights', weight: '10%–15%', note: 'Bill of Rights, incorporation, equal protection' },
      { name: 'Political Parties and Interest Groups', weight: '15%–20%', note: 'Elections, mobilization, group influence' },
      { name: 'Political Beliefs and Behavior', weight: '15%–20%', note: 'Public opinion, participation, political culture' },
      { name: 'Constitutional Underpinnings', weight: '15%–20%', note: 'Federalism, separation of powers, democracy' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Delivery', 'Year-round at centers or online']
    ],
    faqs: [
      { q: 'How many credits is CLEP American Government worth?', a: 'ACE recommends three lower-division semester hours for a score of 50 or higher. Your college decides whether to grant those credits and how they apply to your degree plan.' },
      { q: 'Is the exam hard?', a: 'Most test takers rate it moderate. It rewards understanding of how institutions function and interpreting political behavior. Students with any civics background usually need only a few weeks of review.' },
      { q: 'Can I take it online?', a: 'Yes. CLEP offers remote proctoring through its approved online proctor, and many schools also administer it at a campus testing center. Both report the same 20–80 scaled score.' },
      { q: 'What score do I need for credit?', a: 'ACE suggests 50, but each college sets its own minimum — some competitive schools require 60. Check your school’s CLEP policy before registering.' }
    ],
    summaryPoints: [
      'Equivalent to one semester of introductory U.S. government',
      '100 questions in 90 minutes; score 50 for the ACE credit recommendation',
      'Covers institutions, civil liberties, parties, and political behavior',
      'Year-round at test centers or online for $97 plus a center fee'
    ],
    relatedSlugs: ['clep-history-of-the-united-states-i', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/american-government',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-american-literature',
    body: 'College Board',
    tagline: 'Prove you know American writers from the colonial era to today and skip the survey course.',
    description: `The CLEP American Literature exam covers prose, poetry, and drama written in the United States from precolonial times to the present, equivalent to a college survey course. It tests your ability to interpret passages and recognize authors, periods, and literary movements. The exam emphasizes fiction and poetry and deals less with drama, the essay, and autobiography. A solid reading background is more useful here than memorization of specific texts.`,
    quickAnswer: {
      summary: `CLEP American Literature is a 100-question, 90-minute exam matching a one-semester American literature survey. A scaled score of 50 typically earns three semester hours where CLEP is accepted.`,
      advantages: [
        'Replaces a semester of literature survey for about $97 plus a center fee',
        'Emphasizes interpretation over memorizing specific titles',
        'Year-round at test centers and online with remote proctoring',
        'Strong fit for English, humanities, and general-education requirements'
      ]
    },
    roadmap: ['Confirm your school’s CLEP literature policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review major periods and authors', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone with broad reading experience in American literature.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Precolonial, Colonial and Early National (to 1800)', weight: '15%', note: 'Beginnings through 1800' },
      { name: 'Romantic Period (1800–1865)', weight: '20%', note: 'Transcendentalism, Romanticism' },
      { name: 'Realism and Naturalism (1865–1910)', weight: '20%', note: 'Realist and naturalist writers' },
      { name: 'Modernist Period (1910–1945)', weight: '20%', note: 'Modernist voices' },
      { name: 'Contemporary Period (1945–present)', weight: '25%', note: 'Postwar to contemporary' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Delivery', 'Year-round at centers or online']
    ],
    faqs: [
      { q: 'Do I need to have read specific books?', a: 'No. The exam is passage-based and tests interpretation, though familiarity with major authors and periods helps. Wide reading matters more than memorizing particular titles.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50. Your college sets the minimum score and how the credit applies.' },
      { q: 'Is this harder than English Literature?', a: 'They overlap in skills but differ in coverage — this exam is U.S.-focused, the other British. Difficulty is similar; pick the one matching your reading strengths.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, reporting the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester American literature survey',
      '100 questions in 90 minutes; score 50 for ACE credit',
      'Spans precolonial to contemporary, weighted toward recent periods',
      'Best for confident readers of U.S. fiction and poetry'
    ],
    relatedSlugs: ['clep-english-literature', 'clep-analyzing-and-interpreting-literature'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/american-literature',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-analyzing-and-interpreting-literature',
    body: 'College Board',
    tagline: 'Show you can read and analyze poetry, prose, and drama cold — no memorized titles required.',
    description: `The CLEP Analyzing and Interpreting Literature exam is entirely passage-based: you answer questions on supplied excerpts of American and British poetry, prose, and drama. It assumes wide, attentive reading and a working knowledge of literary terminology rather than familiarity with specific works. The test emphasizes comprehension, interpretation, and analysis of literary effects, making it ideal for strong readers who dislike memorization.`,
    quickAnswer: {
      summary: `CLEP Analyzing and Interpreting Literature is an ~80-question, 98-minute exam built entirely from passages. A scaled score of 50 typically earns three semester hours where CLEP is accepted.`,
      advantages: [
        'No memorization of authors or titles — every question is passage-based',
        'Rewards close reading and literary vocabulary',
        'Year-round at test centers and online with remote proctoring',
        'A clean fit for humanities and general-education requirements'
      ]
    },
    roadmap: ['Confirm your school’s CLEP literature policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice annotating passages quickly', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone who reads widely across genres.',
    examMeta: {
      questions: '~80 multiple choice',
      time: '98 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (passage-based)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Poetry', weight: '35%–45%', note: 'Meter, figurative language, tone, imagery' },
      { name: 'Prose (fiction and nonfiction)', weight: '35%–45%', note: 'Point of view, characterization, structure' },
      { name: 'Drama', weight: '15%–30%', note: 'Dialogue, conflict, dramatic irony' },
      { name: 'British and American traditions', weight: '40%–50% each', note: 'Small share in translation' },
      { name: 'Periods (Renaissance to 21st century)', weight: '20%–40% each band', note: 'Heavier on 18th–21st centuries' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Delivery', 'Year-round at centers or online']
    ],
    faqs: [
      { q: 'Do I need to know specific books or authors?', a: 'No. Every question is based on a passage supplied in the test, so you analyze what is in front of you rather than recall outside reading.' },
      { q: 'How long is the exam?', a: 'About 80 multiple-choice questions in 98 minutes. Pace yourself at roughly one minute per question, since passages take reading time.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50. Policies vary by college, so confirm your school’s minimum.' },
      { q: 'Can I take it online?', a: 'Yes, through CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Entirely passage-based — no memorized titles',
      '~80 questions in 98 minutes; score 50 for ACE credit',
      'Balances poetry, prose, and drama',
      'Best for strong, flexible readers'
    ],
    relatedSlugs: ['clep-american-literature', 'clep-english-literature'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/analyzing-and-interpreting-literature',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-biology',
    body: 'College Board',
    tagline: 'Cover a full year of general biology in one exam and earn up to six credits.',
    description: `The CLEP Biology exam covers the breadth of a one-year college general biology course, split almost evenly among molecular and cellular biology, organismal biology, and population biology. It tests facts and principles as well as the ability to interpret data and draw conclusions. Strong performers can place out of both introductory biology semesters, making it one of the higher-credit CLEP exams.`,
    quickAnswer: {
      summary: `CLEP Biology is an ~115-question, 90-minute exam equivalent to a year-long introductory biology course. ACE recommends a score of 50 for about six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards six semester hours — among the most credit-rich CLEP exams',
        'Covers molecular, organismal, and population biology equally',
        'Year-round at test centers and online with remote proctoring',
        'Strong choice for pre-health and science majors needing gen-ed credit'
      ]
    },
    roadmap: ['Confirm your school’s biology credit policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review cells, heredity, ecology, and evolution', 'Score 50+ for six credits'],
    prerequisites: 'None — open to anyone; a prior high-school biology course helps.',
    examMeta: {
      questions: '~115 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Molecular and Cellular Biology', weight: '33%', note: 'Cells, enzymes, energy, genetics' },
      { name: 'Organismal Biology', weight: '34%', note: 'Plant and animal structure, heredity' },
      { name: 'Population Biology', weight: '33%', note: 'Ecology, evolution, behavior' },
      { name: 'Scientific Skills and Inquiry', weight: 'Integrated', note: 'Data interpretation, hypothesis, science and society' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends ~6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Delivery', 'Year-round at centers or online']
    ],
    faqs: [
      { q: 'How many credits does CLEP Biology grant?', a: 'ACE recommends about six semester hours for a score of 50, reflecting its coverage of a full year of general biology. Your college sets the exact amount and minimum.' },
      { q: 'Is CLEP Biology hard?', a: 'It is broad and moderately challenging. Students with a prior biology course usually need four to six weeks of focused review across the three content areas.' },
      { q: 'Does it include lab work?', a: 'No. The exam is multiple choice and tests conceptual and applied knowledge, not a hands-on lab. Some colleges may still require their own lab component.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, reporting the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a year of introductory biology',
      '~115 questions in 90 minutes; score 50 for ~6 credits',
      'Even split across molecular, organismal, and population biology',
      'Among the highest-credit CLEP exams'
    ],
    relatedSlugs: ['clep-chemistry', 'clep-natural-sciences'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/biology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-calculus',
    body: 'College Board',
    tagline: 'Test out of first-semester calculus with 44 questions on limits, derivatives, and integrals.',
    description: `The CLEP Calculus exam covers the material of a one-semester college calculus course, about 60 percent limits and differential calculus and 40 percent integral calculus. It is computational and conceptual, with a graphing calculator allowed on part of the exam. A good score can place you directly into Calculus II or satisfy a math requirement.`,
    quickAnswer: {
      summary: `CLEP Calculus is a 44-question, 90-minute exam split between differential (50%) and integral (40%) calculus plus limits. ACE recommends a score of 50 for four semester hours at accepting schools.`,
      advantages: [
        'Typically awards four semester hours',
        'Clear 60/40 split between differential and integral calculus',
        'Graphing calculator built into the software for part of the exam',
        'Strong fit for STEM and business degree math requirements'
      ]
    },
    roadmap: ['Confirm your school’s calculus placement policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Drill derivatives, integrals, and limits', 'Score 50+ for four credits'],
    prerequisites: 'Assumes algebra, geometry, trigonometry, and analytic geometry prep.',
    examMeta: {
      questions: '44 multiple choice (27 no calculator, 17 calculator)',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (graphing calculator on Section 2)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Limits', weight: '10%', note: 'Properties, computation, continuity' },
      { name: 'Differential Calculus', weight: '50%', note: 'Derivatives, applications' },
      { name: 'Integral Calculus', weight: '40%', note: 'Antiderivatives, definite integrals' },
      { name: 'Problem-Solving Skills', weight: '50% routine / 50% nonroutine', note: 'Routine technique and applied understanding' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 4 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Calculator', 'TI-84 Plus CE on Section 2 only']
    ],
    faqs: [
      { q: 'How many credits does CLEP Calculus grant?', a: 'ACE recommends four semester hours for a score of 50. Many schools apply it to a first-semester calculus requirement or allow direct entry to Calculus II.' },
      { q: 'Do I need a calculator?', a: 'An online TI-84 Plus CE is built in for Section 2 only; Section 1 is no-calculator. Know when each tool applies.' },
      { q: 'Is this the same as AP Calculus?', a: 'No. CLEP Calculus is a single-semester, year-round exam; AP Calculus AB/BC are course-linked May exams. They are separate programs with separate credits.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to first-semester college calculus',
      '44 questions in 90 minutes; score 50 for 4 credits',
      '60% differential, 40% integral, 10% limits',
      'Calculator allowed on part of the exam'
    ],
    relatedSlugs: ['clep-precalculus', 'clep-college-algebra'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/calculus',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-chemistry',
    body: 'College Board',
    tagline: 'Clear a full year of general chemistry in one sitting for up to six credits.',
    description: `The CLEP Chemistry exam covers a one-year college general chemistry course: structure and states of matter, reactions, stoichiometry, equilibrium, kinetics, thermodynamics, and descriptive and experimental chemistry. An online scientific calculator and periodic table are built into the exam. It suits students who already have strong chemistry fundamentals and want to skip the sequence.`,
    quickAnswer: {
      summary: `CLEP Chemistry is an ~75-question, 90-minute exam covering a year of general chemistry. ACE recommends a score of 50 for about six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards six semester hours',
        'Built-in periodic table and scientific calculator',
        'Year-round at test centers and online with remote proctoring',
        'Fits science and pre-health general-education plans'
      ]
    },
    roadmap: ['Confirm your school’s chemistry credit policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review stoichiometry, equilibrium, and thermodynamics', 'Score 50+ for six credits'],
    prerequisites: 'Assumes prior high-school or college chemistry.',
    examMeta: {
      questions: '~75 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (calculator + periodic table in software)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Structure of Matter', weight: '20%', note: 'Atomic theory, bonding' },
      { name: 'States of Matter', weight: '19%', note: 'Gases, liquids, solids, solutions' },
      { name: 'Reaction Types', weight: '12%', note: 'Acid-base, redox, precipitation' },
      { name: 'Equations and Stoichiometry', weight: '10%', note: 'Balancing, mole concepts' },
      { name: 'Equilibrium', weight: '7%', note: 'Constants, buffers' },
      { name: 'Kinetics / Thermodynamics', weight: '4% / 5%', note: 'Rates, free energy' },
      { name: 'Descriptive and Experimental Chemistry', weight: '14% / 9%', note: 'Reactivity, lab methods' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends ~6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Tools', 'Periodic table and TI-30XS built in']
    ],
    faqs: [
      { q: 'How many credits does CLEP Chemistry grant?', a: 'ACE recommends about six semester hours for a score of 50, matching a year-long general chemistry sequence. Your college sets the exact credit and minimum.' },
      { q: 'Can I use a calculator?', a: 'Yes — an online TI-30XS scientific calculator and a periodic table are integrated into the exam software, available for the whole session.' },
      { q: 'Is there a lab component?', a: 'No hands-on lab. Some colleges that grant credit may still require their own lab course to complete the sequence.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, reporting the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a year of general chemistry',
      '~75 questions in 90 minutes; score 50 for ~6 credits',
      'Built-in periodic table and scientific calculator',
      'Strong prep option for pre-health students'
    ],
    relatedSlugs: ['clep-biology', 'clep-college-algebra'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/chemistry',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-college-algebra',
    body: 'College Board',
    tagline: 'Skip one-semester college algebra with 60 questions on functions, equations, and operations.',
    description: `The CLEP College Algebra exam covers a one-semester college algebra course: algebraic operations, equations and inequalities, functions, and number systems. About half the questions are routine problems and half require applying concepts to nonroutine situations. An online scientific calculator is available, and the exam is a common general-education or prerequisite math credit.`,
    quickAnswer: {
      summary: `CLEP College Algebra is a ~60-question, 90-minute exam matching a one-semester algebra course. A scaled score of 50 typically earns three semester hours at schools that accept CLEP.`,
      advantages: [
        'Replaces a semester of algebra for about $97 plus a center fee',
        'Even split of routine and applied problems',
        'Built-in scientific calculator',
        'Common math prerequisite and gen-ed credit'
      ]
    },
    roadmap: ['Confirm your school’s algebra policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review functions and equations', 'Score 50+ for three credits'],
    prerequisites: 'Assumes familiarity with algebraic vocabulary and notation.',
    examMeta: {
      questions: '~60 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (calculator in software)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Algebraic Operations', weight: '25%', note: 'Exponents, factoring, logarithms' },
      { name: 'Equations and Inequalities', weight: '25%', note: 'Linear, quadratic, exponential' },
      { name: 'Functions and Their Properties', weight: '30%', note: 'Domain, range, graphs, inverses' },
      { name: 'Number Systems and Operations', weight: '20%', note: 'Real, complex, binomial theorem' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Calculator', 'TI-30XS built in']
    ],
    faqs: [
      { q: 'How many credits does CLEP College Algebra grant?', a: 'ACE recommends three semester hours for a score of 50. Many schools apply it to a general-education or prerequisite math requirement.' },
      { q: 'Do I need a calculator?', a: 'An online TI-30XS scientific calculator is built into the exam software, though the test places little emphasis on arithmetic.' },
      { q: 'Is this easier than College Mathematics?', a: 'College Algebra is more focused on algebraic functions; College Mathematics is broader (probability, stats, finance). Choose based on your strengths and your school’s requirement.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to one semester of college algebra',
      '~60 questions in 90 minutes; score 50 for 3 credits',
      'Functions (30%) are the heaviest topic',
      'Built-in scientific calculator'
    ],
    relatedSlugs: ['clep-college-mathematics', 'clep-precalculus'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/college-algebra',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-college-composition',
    body: 'College Board',
    tagline: 'Earn composition credit through multiple choice plus two scored essays.',
    description: `The CLEP College Composition exam pairs multiple-choice questions on rhetoric and usage with two handwritten-then-typed essays scored by college faculty. It covers analysis, argumentation, synthesis, and source use — the skills of a first-year writing course. Because essays are scored centrally, scores take one to two weeks, but the credit (often six hours) is substantial.`,
    quickAnswer: {
      summary: `CLEP College Composition is a 125-minute exam: 50 multiple-choice questions plus two essays. ACE recommends a score of 50 for about six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards six semester hours — high credit for one exam',
        'Tests real writing: argument, synthesis, and source use',
        'Year-round at test centers and online with remote proctoring',
        'Satisfies many first-year writing requirements'
      ]
    },
    roadmap: ['Confirm your school’s writing-credit policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice timed essays with sources', 'Score 50+ for six credits'],
    prerequisites: 'None — open to anyone; college-level writing ability expected.',
    examMeta: {
      questions: '50 multiple choice + 2 essays',
      time: '125 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice and typed essays',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Conventions of Standard Written English', weight: '10%', note: 'Syntax, grammar, usage' },
      { name: 'Revision Skills', weight: '40%', note: 'Organization, evidence, coherence' },
      { name: 'Use of Source Materials', weight: '25%', note: 'Research, integration, citation' },
      { name: 'Rhetorical Analysis', weight: '25%', note: 'Appeals, tone, purpose' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends ~6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Scoring delay', 'Scores in 1–2 weeks (essays hand-scored)'],
      ['Retake', '3-month wait; full fee each attempt']
    ],
    faqs: [
      { q: 'How many credits does College Composition grant?', a: 'ACE recommends about six semester hours for a score of 50. Most colleges grant credit for a first-year composition or English course.' },
      { q: 'Why are scores delayed?', a: 'The two essays are read and scored by college English faculty twice a month, so scores arrive one to two weeks after the test date rather than immediately.' },
      { q: 'How is the essay scored?', a: 'Each essay is read by at least two faculty readers using a 0–6 rubric; the combined essay score is weighted equally with the multiple-choice score.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to first-year college composition',
      '50 questions + 2 essays in 125 minutes; score 50 for ~6 credits',
      'Revision and rhetoric make up 65% of the multiple choice',
      'Essays are faculty-scored; allow 1–2 weeks for results'
    ],
    relatedSlugs: ['clep-college-composition-modular', 'clep-american-literature'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/college-composition',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-college-composition-modular',
    body: 'College Board',
    tagline: 'The multiple-choice composition exam your school can pair with its own local essay.',
    description: `The CLEP College Composition Modular exam is the multiple-choice version of College Composition, assessing rhetoric, usage, research, and analysis across about 90 questions. Colleges may add their own locally scored essay if they wish. It is a flexible option when an institution wants a valid multiple-choice measure plus control over the writing component.`,
    quickAnswer: {
      summary: `CLEP College Composition Modular is a ~90-question, 95-minute multiple-choice exam matching a one-semester composition course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Multiple-choice only, with optional locally scored essay',
        'Same rhetoric and research content as College Composition',
        'Year-round at test centers and online with remote proctoring',
        'Lets schools tailor the writing assessment to their standards'
      ]
    },
    roadmap: ['Confirm your school’s modular policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review rhetoric and source use', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; college-level writing ability expected.',
    examMeta: {
      questions: '~90 multiple choice',
      time: '95 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Conventions of Standard Written English', weight: '10%', note: 'Syntax, grammar, usage' },
      { name: 'Revision Skills', weight: '40%', note: 'Organization, evidence, coherence' },
      { name: 'Use of Source Materials', weight: '25%', note: 'Research, integration, citation' },
      { name: 'Rhetorical Analysis', weight: '25%', note: 'Appeals, tone, purpose' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Optional essay', 'Added locally by some colleges'],
      ['Retake', '3-month wait; full fee each attempt']
    ],
    faqs: [
      { q: 'How is Modular different from College Composition?', a: 'Modular is multiple-choice only; College Composition adds two centrally scored essays. Schools may bolt on their own essay to Modular if they want a writing sample.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50. Credit and any local essay requirement depend on your college.' },
      { q: 'Is the multiple choice the same?', a: 'Yes — the content and weighting (revision, source use, rhetorical analysis) mirror College Composition’s multiple-choice section.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Multiple-choice equivalent of first-year composition',
      '~90 questions in 95 minutes; score 50 for 3 credits',
      'Schools may add a local essay component',
      'Flexible alternative to College Composition'
    ],
    relatedSlugs: ['clep-college-composition', 'clep-american-literature'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/college-composition-modular',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-college-mathematics',
    body: 'College Board',
    tagline: 'A broad quantitative-literacy exam for non-math majors worth three credits.',
    description: `The CLEP College Mathematics exam serves non-mathematics majors, covering logic, sets, numbers, algebra, functions, counting, probability, statistics, and financial mathematics. It emphasizes practical quantitative literacy over advanced computation. An online scientific calculator is available, and it is a popular general-education math credit.`,
    quickAnswer: {
      summary: `CLEP College Mathematics is a ~60-question, 90-minute exam for non-math majors. A scaled score of 50 typically earns three semester hours at schools that accept CLEP.`,
      advantages: [
        'Replaces a general-education math course for ~$97 plus a fee',
        'Broad, practical topics: finance, stats, logic, probability',
        'Built-in scientific calculator',
        'Lighter than algebra or precalculus for many students'
      ]
    },
    roadmap: ['Confirm your school’s math policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review finance, stats, and logic', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; basic math fluency assumed.',
    examMeta: {
      questions: '~60 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (calculator in software)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Algebra and Functions', weight: '20%', note: 'Equations, graphs, growth' },
      { name: 'Financial Mathematics', weight: '20%', note: 'Interest, present/future value' },
      { name: 'Logic and Sets', weight: '15%', note: 'Statements, Venn diagrams' },
      { name: 'Data Analysis and Statistics', weight: '15%', note: 'Graphs, mean, deviation' },
      { name: 'Counting and Probability', weight: '10%', note: 'Combinations, events' },
      { name: 'Geometry', weight: '10%', note: 'Triangles, circles' },
      { name: 'Numbers', weight: '10%', note: 'Properties, number theory' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Calculator', 'TI-30XS built in']
    ],
    faqs: [
      { q: 'How many credits does College Mathematics grant?', a: 'ACE recommends three semester hours at a score of 50. It commonly satisfies a quantitative-reasoning general-education requirement.' },
      { q: 'Is this easier than College Algebra?', a: 'For many students yes — it spreads across finance, statistics, and logic rather than focusing on algebraic functions. Pick the one your school requires.' },
      { q: 'Do I need a calculator?', a: 'An online TI-30XS scientific calculator is built into the exam software for the whole session.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Quantitative-literacy credit for non-math majors',
      '~60 questions in 90 minutes; score 50 for 3 credits',
      'Financial math and algebra each 20%',
      'Built-in scientific calculator'
    ],
    relatedSlugs: ['clep-college-algebra', 'clep-precalculus'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/college-mathematics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-english-literature',
    body: 'College Board',
    tagline: 'Demonstrate command of British literature from Beowulf to the twentieth century.',
    description: `The CLEP English Literature exam focuses on major British authors and works from the Anglo-Saxon period to the present, equivalent to a college survey. It tests both knowledge of writers and periods and the ability to analyze passages, tone, and form. Poetry, drama, and novels all appear, with poetry the heaviest component. A broad reading background is the best preparation.`,
    quickAnswer: {
      summary: `CLEP English Literature is a ~95-question, 90-minute exam matching a one-semester British literature survey. ACE recommends a score of 50 for six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards six semester hours',
        'Covers Anglo-Saxon to contemporary British works',
        'Year-round at test centers and online with remote proctoring',
        'Strong fit for English and humanities requirements'
      ]
    },
    roadmap: ['Confirm your school’s CLEP literature policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review periods and major authors', 'Score 50+ for six credits'],
    prerequisites: 'None — open to anyone with broad reading in British literature.',
    examMeta: {
      questions: '~95 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Middle Ages', weight: '10%', note: 'Anglo-Saxon to medieval' },
      { name: '16th and early 17th Century', weight: '15%', note: 'Renaissance, Shakespeare' },
      { name: 'Restoration and 18th Century', weight: '10%', note: 'Neoclassical' },
      { name: 'Romantic', weight: '20%', note: 'Romantic poets' },
      { name: 'Victorian', weight: '20%', note: '19th-century novel and verse' },
      { name: '20th Century to Present', weight: '25%', note: 'Modern and contemporary' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Genres', 'Poetry 45%, drama 20%, novels 15%'],
      ['Retake', '3-month wait; full fee each attempt']
    ],
    faqs: [
      { q: 'How many credits does English Literature grant?', a: 'ACE recommends six semester hours at a score of 50 — more than most CLEP exams. Your college sets the minimum and application.' },
      { q: 'Do I need to know specific authors?', a: 'Yes, more than the American Literature exam: you may identify authors from quotations and place excerpts in their period. Wide reading helps.' },
      { q: 'Is this harder than American Literature?', a: 'Coverage differs (British vs U.S.) but difficulty is similar. Choose the one matching your reading strengths.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, reporting the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester British literature survey',
      '~95 questions in 90 minutes; score 50 for 6 credits',
      'Poetry is the largest genre component',
      'Spans Anglo-Saxon to contemporary'
    ],
    relatedSlugs: ['clep-american-literature', 'clep-analyzing-and-interpreting-literature'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/english-literature',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-financial-accounting',
    body: 'College Board',
    tagline: 'Test out of first-semester financial accounting with three credits.',
    description: `The CLEP Financial Accounting exam covers the concepts and techniques of a first-semester undergraduate financial accounting course: the accounting cycle, financial statements, assets, liabilities, and equity. A four-function calculator is available in the software. It is a practical credit for business and general-education plans.`,
    quickAnswer: {
      summary: `CLEP Financial Accounting is a ~75-question, 90-minute exam matching a first-semester financial accounting course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of financial accounting for ~$97 plus a fee',
        'Covers statements, assets, liabilities, and equity',
        'Year-round at test centers and online with remote proctoring',
        'Useful for business and general-education requirements'
      ]
    },
    roadmap: ['Confirm your school’s accounting policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review statements and the accounting cycle', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; basic accounting familiarity helps.',
    examMeta: {
      questions: '~75 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (calculator in software)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'General Topics', weight: '20%–30%', note: 'GAAP, accounting cycle, forms of business' },
      { name: 'The Income Statement', weight: '20%–30%', note: 'Revenue, expenses, profitability' },
      { name: 'The Balance Sheet', weight: '30%–40%', note: 'Receivables, inventory, liabilities, equity' },
      { name: 'Statement of Cash Flows', weight: '5%–10%', note: 'Operating, financing, investing' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Calculator', 'Four-function built in']
    ],
    faqs: [
      { q: 'How many credits does Financial Accounting grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying a first-semester financial accounting requirement.' },
      { q: 'Do I need a calculator?', a: 'A four-function calculator is built into the exam software; the math is straightforward application of accounting concepts.' },
      { q: 'Will this count toward a business major?', a: 'Often yes for the introductory course, but check whether your program requires a graded class instead of pass/fail credit.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to first-semester financial accounting',
      '~75 questions in 90 minutes; score 50 for 3 credits',
      'Balance sheet is the heaviest topic',
      'Built-in four-function calculator'
    ],
    relatedSlugs: ['clep-introductory-business-law', 'clep-principles-of-management'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/financial-accounting',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-french-language',
    body: 'College Board',
    tagline: 'Prove two to three semesters of French and earn up to nine credits by score.',
    description: `The CLEP French Language exam measures listening and reading ability equivalent to two to three semesters of college French. Both levels are combined into one exam, and your score determines whether you earn Level 1 (six hours) or Level 2 (nine hours) credit. It is a strong credit option for language students who can demonstrate comprehension without a speaking test.`,
    quickAnswer: {
      summary: `CLEP French Language is a ~121-question, 90-minute exam of listening and reading. ACE recommends 50 for six semester hours (Level 1) and 59 for nine hours (Level 2).`,
      advantages: [
        'One exam can yield six or nine semester hours',
        'Tests listening and reading, not speaking',
        'Year-round at test centers and online with remote proctoring',
        'Efficient path through language requirements'
      ]
    },
    roadmap: ['Confirm your school’s language policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice listening and reading comprehension', 'Score 50+ for Level 1, 59+ for Level 2'],
    prerequisites: 'Open to anyone; equivalent to 2–3 semesters of college French.',
    examMeta: {
      questions: '~121 multiple choice',
      time: '90 minutes',
      pass: '50 (Level 1); 59 (Level 2)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (listening + reading)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Listening: Rejoinders', weight: '15%', note: 'Short spoken exchanges' },
      { name: 'Listening: Dialogues and Narratives', weight: '25%', note: 'Longer selections' },
      { name: 'Reading: Discrete Sentences', weight: '10%', note: 'Vocabulary and structure' },
      { name: 'Reading: Cloze Passages', weight: '20%', note: 'Context completion' },
      { name: 'Reading: Passages', weight: '30%', note: 'Reading comprehension' }
    ],
    examEssentials: [
      ['Credit', 'Level 1: 6 SH at 50; Level 2: 9 SH at 59'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Skills tested', 'Listening and reading only']
    ],
    faqs: [
      { q: 'How many credits can I earn?', a: 'ACE recommends six semester hours at score 50 (Level 1) and nine at 59 (Level 2). Your college decides which level it grants.' },
      { q: 'Is there a speaking or writing section?', a: 'No. The exam tests listening and reading comprehension only, which is why it can award credit efficiently without a production component.' },
      { q: 'How long is the exam?', a: 'About 121 questions in 90 minutes across three separately timed sections; audio plays once.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to 2–3 semesters of college French',
      '~121 questions in 90 minutes; 50 = 6 SH, 59 = 9 SH',
      'Listening (40%) and reading (60%)',
      'No speaking or writing required'
    ],
    relatedSlugs: ['clep-spanish-language', 'clep-german-language'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/french-language',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-german-language',
    body: 'College Board',
    tagline: 'Demonstrate two to three semesters of German for up to nine credits.',
    description: `The CLEP German Language exam measures listening and reading ability equivalent to two to three semesters of college German. Like the other language exams, both levels sit in one test, and your score sets Level 1 (six hours) or Level 2 (nine hours) credit. It is a practical way to clear a language requirement through comprehension alone.`,
    quickAnswer: {
      summary: `CLEP German Language is a ~120-question, 90-minute exam of listening and reading. ACE recommends 50 for six semester hours (Level 1) and 60 for nine hours (Level 2).`,
      advantages: [
        'One exam can yield six or nine semester hours',
        'Tests listening and reading, not speaking',
        'Year-round at test centers and online with remote proctoring',
        'Efficient route through language requirements'
      ]
    },
    roadmap: ['Confirm your school’s language policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice listening and reading comprehension', 'Score 50+ for Level 1, 60+ for Level 2'],
    prerequisites: 'Open to anyone; equivalent to 2–3 semesters of college German.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (Level 1); 60 (Level 2)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (listening + reading)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Listening: Rejoinders', weight: '15%', note: 'Short stimuli' },
      { name: 'Listening: Dialogues and Narratives', weight: '25%', note: 'Longer selections' },
      { name: 'Reading: Discrete Sentences', weight: '16%', note: 'Vocabulary and structure' },
      { name: 'Reading: Cloze Passages', weight: '20%', note: 'Context completion' },
      { name: 'Reading: Comprehension', weight: '24%', note: 'Authentic texts' }
    ],
    examEssentials: [
      ['Credit', 'Level 1: 6 SH at 50; Level 2: 9 SH at 60'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Skills tested', 'Listening and reading only']
    ],
    faqs: [
      { q: 'How many credits can I earn?', a: 'ACE recommends six semester hours at 50 (Level 1) and nine at 60 (Level 2). Your college sets which level it grants.' },
      { q: 'Is there a speaking section?', a: 'No. The exam evaluates listening and reading comprehension only.' },
      { q: 'How long is the exam?', a: 'About 120 questions in 90 minutes across three separately timed sections; audio plays once.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to 2–3 semesters of college German',
      '~120 questions in 90 minutes; 50 = 6 SH, 60 = 9 SH',
      'Listening 40%, reading 60%',
      'No speaking or writing required'
    ],
    relatedSlugs: ['clep-french-language', 'clep-spanish-language'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/german-language',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-history-of-the-united-states-i',
    body: 'College Board',
    tagline: 'Clear the first half of the U.S. history survey from colonization to 1877.',
    description: `The CLEP History of the United States I exam covers U.S. history from early European colonization to the end of Reconstruction in 1877, equivalent to the first semester of a two-semester survey. Most questions focus on 1790–1877. It balances political, social, economic, cultural, and diplomatic developments and is a common general-education credit.`,
    quickAnswer: {
      summary: `CLEP U.S. History I is a ~120-question, 90-minute exam covering colonization to 1877. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces the first U.S. history survey semester for ~$97 plus a fee',
        'Covers political, social, economic, and cultural history',
        'Year-round at test centers and online with remote proctoring',
        'Pairs naturally with U.S. History II'
      ]
    },
    roadmap: ['Confirm your school’s history policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Focus on 1790–1877 (70% of items)', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; high-school U.S. history helps.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Political Institutions and Public Policy', weight: '25%', note: 'Congress, presidency, courts' },
      { name: 'Social Developments', weight: '25%', note: 'Class, gender, reform' },
      { name: 'Economic Developments', weight: '15%', note: 'Growth, slavery’s economics' },
      { name: 'Cultural and Intellectual Developments', weight: '20%', note: 'Religion, arts, ideas' },
      { name: 'Diplomacy and Transnational Interactions', weight: '15%', note: 'Empire, war' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Chronology', '70% of items on 1790–1877'],
      ['Retake', '3-month wait; full fee each attempt']
    ],
    faqs: [
      { q: 'How many credits does U.S. History I grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying the first half of a U.S. history requirement.' },
      { q: 'What time period does it cover?', a: 'From early colonization through 1877, with about 70 percent of questions on 1790–1877.' },
      { q: 'Should I take History II too?', a: 'If your school requires the full survey, yes — the two exams together cover the standard two-semester sequence.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to first-semester U.S. history survey',
      '~120 questions in 90 minutes; score 50 for 3 credits',
      '70% of items cover 1790–1877',
      'Pairs with U.S. History II'
    ],
    relatedSlugs: ['clep-history-of-the-united-states-ii', 'clep-western-civilization-i'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/history-of-the-united-states-i',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-history-of-the-united-states-ii',
    body: 'College Board',
    tagline: 'Finish the U.S. history survey from Reconstruction to the present.',
    description: `The CLEP History of the United States II exam covers U.S. history from the end of the Civil War to the present, equivalent to the second semester of a two-semester survey. Most questions address the twentieth century. It spans political, social, economic, cultural, and diplomatic themes and is a standard general-education credit that follows U.S. History I.`,
    quickAnswer: {
      summary: `CLEP U.S. History II is a ~120-question, 90-minute exam covering 1865 to the present. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces the second U.S. history survey semester for ~$97 plus a fee',
        'Emphasizes the twentieth century and beyond',
        'Year-round at test centers and online with remote proctoring',
        'Natural follow-on to U.S. History I'
      ]
    },
    roadmap: ['Confirm your school’s history policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Focus on 1915–present (70% of items)', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; prior U.S. history helps.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Political Institutions and Public Policy', weight: '30%', note: 'Parties, government role' },
      { name: 'Social Developments', weight: '30%', note: 'Rights movements, demography' },
      { name: 'Economic Developments', weight: '10%', note: 'Growth, depression' },
      { name: 'Cultural and Intellectual Developments', weight: '20%', note: 'Arts, science, ideas' },
      { name: 'Diplomacy and International Relations', weight: '10%', note: 'Wars, engagement' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Chronology', '70% of items on 1915–present'],
      ['Retake', '3-month wait; full fee each attempt']
    ],
    faqs: [
      { q: 'How many credits does U.S. History II grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying the second half of a U.S. history requirement.' },
      { q: 'What time period does it cover?', a: 'From 1865 to the present, with about 70 percent of questions on 1915 onward.' },
      { q: 'Do I need to take History I first?', a: 'Not required, but together they complete the standard two-semester sequence if your school requires the full survey.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to second-semester U.S. history survey',
      '~120 questions in 90 minutes; score 50 for 3 credits',
      '70% of items cover 1915–present',
      'Natural sequel to U.S. History I'
    ],
    relatedSlugs: ['clep-history-of-the-united-states-i', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/history-of-the-united-states-ii',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-human-growth-and-development',
    body: 'College Board',
    tagline: 'Earn three credits covering the human lifespan from infancy to aging.',
    description: `The CLEP Human Growth and Development exam covers theories and research in physical, cognitive, and social development across the lifespan, equivalent to a one-semester developmental psychology course. It follows DSM-5 terminology and asks you to apply theories to real situations. It is a common credit for education, psychology, and nursing pathways.`,
    quickAnswer: {
      summary: `CLEP Human Growth and Development is a ~90-question, 90-minute exam matching a one-semester lifespan development course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of developmental psychology for ~$97 plus a fee',
        'Spans infancy through aging across three domains',
        'Year-round at test centers and online with remote proctoring',
        'Fits education, psychology, and nursing plans'
      ]
    },
    roadmap: ['Confirm your school’s policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review major theories and life stages', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; intro psych helps.',
    examMeta: {
      questions: '~90 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Theoretical Perspectives', weight: '10%', note: 'Cognitive, behavioral, psychodynamic' },
      { name: 'Biological Development', weight: '12%', note: 'Genetics, brain, maturation' },
      { name: 'Cognitive Development', weight: '12%', note: 'Piaget, Vygotsky, memory' },
      { name: 'Social Development', weight: '12%', note: 'Attachment, morality, self' },
      { name: 'Individual Differences and Family', weight: '17% / 8%', note: 'Intelligence, parenting, society' },
      { name: 'Language, Personality, Intervention, Psychopathology', weight: '8% / 8% / 6% / 6%', note: 'Across the lifespan' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Framework', 'Uses DSM-5 terminology']
    ],
    faqs: [
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying a lifespan development or child development requirement.' },
      { q: 'Is this the same as introductory psychology?', a: 'No — it focuses on development across the lifespan, while Introductory Psychology surveys the whole field. They often count as different credits.' },
      { q: 'What background helps?', a: 'A prior course in psychology or child development helps, but the exam is self-contained and emphasizes applying theories to scenarios.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a lifespan development course',
      '~90 questions in 90 minutes; score 50 for 3 credits',
      'Balances physical, cognitive, and social development',
      'Uses DSM-5 terminology'
    ],
    relatedSlugs: ['clep-introductory-psychology', 'clep-introduction-to-educational-psychology'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/human-growth-and-development',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-humanities',
    body: 'College Board',
    tagline: 'A broad survey of literature, art, and music for three general-education credits.',
    description: `The CLEP Humanities exam tests general knowledge of literature, visual art, music, and the performing arts from classical to contemporary times. It is broad rather than deep, asking you to recognize works, techniques, and periods. The exam rewards a well-rounded cultural background and is a popular way to satisfy a humanities or distribution requirement.`,
    quickAnswer: {
      summary: `CLEP Humanities is a ~140-question, 90-minute survey of literature and the arts. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a humanities distribution course for ~$97 plus a fee',
        'Covers literature, art, music, and performance',
        'Year-round at test centers and online with remote proctoring',
        'Rewards broad cultural knowledge over memorization'
      ]
    },
    roadmap: ['Confirm your school’s humanities policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review major periods and art forms', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone with general arts knowledge.',
    examMeta: {
      questions: '~140 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Literature', weight: '50%', note: 'Fiction 15–20%, poetry 10–15%, drama 10%, nonfiction 10%' },
      { name: 'Visual Arts (painting, sculpture)', weight: '20%', note: 'Plus architecture 5%' },
      { name: 'Performing Arts: Music', weight: '15%', note: 'Western and global traditions' },
      { name: 'Performing Arts: Film, Dance', weight: '10%', note: 'Plus other performance' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Scope', 'Classical to contemporary, all periods']
    ],
    faqs: [
      { q: 'How many credits does Humanities grant?', a: 'ACE recommends three semester hours at a score of 50, often applied to a humanities or general-education distribution requirement.' },
      { q: 'Do I need deep knowledge of every art form?', a: 'No. The exam is broad; it tests recognition of major works, styles, and periods rather than expertise in any one area.' },
      { q: 'Is it hard?', a: 'Most find it moderate if they have a general arts background. The 140 questions in 90 minutes make pacing the main challenge.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a broad humanities survey',
      '~140 questions in 90 minutes; score 50 for 3 credits',
      'Literature and the arts each about half',
      'Rewards general cultural literacy'
    ],
    relatedSlugs: ['clep-english-literature', 'clep-western-civilization-i'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/humanities',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-information-systems',
    body: 'College Board',
    tagline: 'Prove you understand how computers and information systems work in business.',
    description: `The CLEP Information Systems exam covers the role of information systems in organizations: hardware, software, networks, databases, security, and social/ethical issues. It is roughly a one-semester introductory course and a practical credit for business and general-education technology requirements. No programming is required — it is conceptual and applied.`,
    quickAnswer: {
      summary: `CLEP Information Systems is a ~100-question, 90-minute exam on business computing. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces an intro information-systems course for ~$97 plus a fee',
        'Covers hardware, software, networks, data, and security',
        'Year-round at test centers and online with remote proctoring',
        'Conceptual — no programming required'
      ]
    },
    roadmap: ['Confirm your school’s policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review hardware, networks, and security', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; basic computer literacy assumed.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Information Systems and Technology', weight: '20%', note: 'Role in organizations' },
      { name: 'Hardware and Software', weight: '15% / 10%', note: 'Devices, applications, development' },
      { name: 'Networks and the Internet', weight: '15% / 15%', note: 'Connectivity, web' },
      { name: 'Data Management', weight: '15%', note: 'Databases, information' },
      { name: 'Security and Social/Ethical Issues', weight: '10%–15%', note: 'Privacy, ethics' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Skills', 'Conceptual, not programming']
    ],
    faqs: [
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an introductory information-systems or computer-literacy requirement.' },
      { q: 'Do I need to know programming?', a: 'No. The exam is conceptual and applied, covering how systems support organizations, not coding.' },
      { q: 'Is this the same as a computer science course?', a: 'No — it is broader and more business-oriented. It will not substitute for a programming or CS principles course at most schools.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to intro information systems',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Networks, data, and security are heavily weighted',
      'Conceptual, no coding required'
    ],
    relatedSlugs: ['clep-college-mathematics', 'clep-principles-of-management'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/information-systems',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-introduction-to-educational-psychology',
    body: 'College Board',
    tagline: 'Earn three credits in how people learn, taught, and assessed.',
    description: `The CLEP Introduction to Educational Psychology exam covers a one-semester course on learning, cognition, teaching methods, child development, and assessment. It emphasizes applying theories to classroom situations and is a common requirement for education majors and aspiring teachers. The content overlaps with developmental and general psychology but is school-focused.`,
    quickAnswer: {
      summary: `CLEP Introduction to Educational Psychology is a ~100-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of educational psychology for ~$97 plus a fee',
        'Focuses on learning, motivation, and assessment',
        'Year-round at test centers and online with remote proctoring',
        'Key credit for education and teaching pathways'
      ]
    },
    roadmap: ['Confirm your school’s education policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review theories and classroom application', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; intro psych helps.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Cognitive and Behavioral Perspectives', weight: '15% / 11%', note: 'Memory, conditioning' },
      { name: 'Development', weight: '15%', note: 'Cognitive, social, moral' },
      { name: 'Individual Differences', weight: '17%', note: 'Intelligence, exceptionalities' },
      { name: 'Testing and Pedagogy', weight: '12% / 10%', note: 'Assessment, instruction' },
      { name: 'Motivation, Research, Multiculturalism', weight: '10% / 5% / 5%', note: 'Applied contexts' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Audience', 'Education and teaching majors']
    ],
    faqs: [
      { q: 'How many credits does it grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an educational psychology requirement for education programs.' },
      { q: 'How is it different from general psychology?', a: 'It centers on learning, teaching, and assessment in school contexts rather than surveying psychology broadly.' },
      { q: 'Is it hard?', a: 'Most education students find it manageable; the emphasis is applying theories to classroom scenarios.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester educational psychology course',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Individual differences and testing are heavily weighted',
      'Aimed at education and teaching majors'
    ],
    relatedSlugs: ['clep-human-growth-and-development', 'clep-introductory-psychology'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/introduction-to-educational-psychology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-introductory-business-law',
    body: 'College Board',
    tagline: 'Clear a semester of business law with three credits.',
    description: `The CLEP Introductory Business Law exam covers the material of a one-semester business law course: contracts, the legal environment, torts, agency, and the sources of American law. It emphasizes understanding how contract law functions in business and applying concepts to case problems. It is a standard credit for business and general-education plans.`,
    quickAnswer: {
      summary: `CLEP Introductory Business Law is a ~100-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of business law for ~$97 plus a fee',
        'Heavily weighted to contracts and the legal environment',
        'Year-round at test centers and online with remote proctoring',
        'Common business and pre-law credit'
      ]
    },
    roadmap: ['Confirm your school’s business policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Drill contracts and torts', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; no legal background required.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'History and Sources of American Law', weight: '5%–10%', note: 'Constitutional, statutory' },
      { name: 'American Legal Systems and Procedures', weight: '5%–10%', note: 'Courts, process' },
      { name: 'Contracts', weight: '30%–40%', note: 'Formation, performance, remedies' },
      { name: 'Legal Environment', weight: '20%–25%', note: 'Regulation, ethics, employment' },
      { name: 'Torts', weight: '10%–15%', note: 'Negligence, liability' },
      { name: 'Miscellaneous (agency, sales)', weight: '5%–10%', note: 'Agency, partnerships' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Contracts are the largest area']
    ],
    faqs: [
      { q: 'How many credits does Business Law grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an introductory business law requirement.' },
      { q: 'What is the heaviest topic?', a: 'Contracts make up 30–40 percent of the exam, followed by the legal environment at 20–25 percent.' },
      { q: 'Do I need a law background?', a: 'No. The exam is self-contained and tests understanding of concepts and their application to cases, not prior legal study.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester business law course',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Contracts dominate (30–40%)',
      'Useful for business and pre-law plans'
    ],
    relatedSlugs: ['clep-financial-accounting', 'clep-principles-of-management'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/introductory-business-law',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-introductory-psychology',
    body: 'College Board',
    tagline: 'Test out of introductory psychology with three broad credits.',
    description: `The CLEP Introductory Psychology exam covers the facts, concepts, and accepted principles of a one-semester introductory psychology course, from biological bases and learning to disorders and social psychology. It uses DSM-5 terminology and asks you to apply knowledge to new situations. It is one of the most popular CLEP exams for general-education credit.`,
    quickAnswer: {
      summary: `CLEP Introductory Psychology is a ~95-question, 90-minute exam matching a one-semester intro course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of introductory psychology for ~$97 plus a fee',
        'Broad coverage across the whole field',
        'Year-round at test centers and online with remote proctoring',
        'One of the most accepted CLEP exams'
      ]
    },
    roadmap: ['Confirm your school’s psychology policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review major subfields and disorders', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone.',
    examMeta: {
      questions: '~95 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'History, Approaches, and Methods', weight: '11%–12%', note: 'Perspectives, research' },
      { name: 'Biological Bases and Sensation/Perception', weight: '8%–9% / 7%–8%', note: 'Brain, senses' },
      { name: 'Learning, Cognition, Motivation/Emotion', weight: '8%–9% each', note: 'Key processes' },
      { name: 'Developmental, Personality, Disorders', weight: '8%–9% / 7%–8% / 8%–9%', note: 'Lifespan and abnormality' },
      { name: 'Treatment and Social Psychology', weight: '6%–7% / 9%–10%', note: 'Therapies, groups' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Framework', 'Uses DSM-5 terminology']
    ],
    faqs: [
      { q: 'How many credits does Introductory Psychology grant?', a: 'ACE recommends three semester hours at a score of 50, commonly satisfying a general psychology requirement.' },
      { q: 'Is this enough for a psychology major?', a: 'It usually covers the introductory course; upper-level majors still take methods, statistics, and specialized courses for a grade.' },
      { q: 'What topics are emphasized?', a: 'A little of everything — biological bases, learning, development, disorders, and social psychology each appear, with no single area above about 12 percent.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester intro psychology course',
      '~95 questions in 90 minutes; score 50 for 3 credits',
      'Even coverage across the major subfields',
      'Uses DSM-5 terminology'
    ],
    relatedSlugs: ['clep-human-growth-and-development', 'clep-introductory-sociology'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/introductory-psychology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-introductory-sociology',
    body: 'College Board',
    tagline: 'Earn three credits in the principles and perspectives of sociology.',
    description: `The CLEP Introductory Sociology exam assesses the material of a one-semester introductory sociology course: institutions, social patterns, processes, stratification, and the sociological perspective. It emphasizes basic concepts and theoretical approaches over specialized methodology. It is a standard social-science general-education credit.`,
    quickAnswer: {
      summary: `CLEP Introductory Sociology is a ~100-question, 90-minute exam matching a one-semester intro course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of introductory sociology for ~$97 plus a fee',
        'Covers institutions, stratification, and theory',
        'Year-round at test centers and online with remote proctoring',
        'Common social-science general-education credit'
      ]
    },
    roadmap: ['Confirm your school’s sociology policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review institutions and stratification', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Institutions', weight: '20%', note: 'Family, education, economy, religion' },
      { name: 'Social Processes', weight: '25%', note: 'Culture, deviance, socialization' },
      { name: 'Social Stratification', weight: '25%', note: 'Class, race, gender, mobility' },
      { name: 'The Sociological Perspective', weight: '20%', note: 'Theory, methods, history' },
      { name: 'Social Patterns', weight: '10%', note: 'Community, demography' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Emphasis', 'Concepts and theory, not methods']
    ],
    faqs: [
      { q: 'How many credits does Introductory Sociology grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an introductory sociology or social-science requirement.' },
      { q: 'What is the exam like?', a: 'About 100 multiple-choice questions testing facts, concepts, and the ability to apply theory to hypothetical situations.' },
      { q: 'How does it compare to psychology?', a: 'Sociology focuses on groups, institutions, and structure; psychology focuses on the individual. They usually count as separate credits.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester intro sociology course',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Processes and stratification are the heaviest areas',
      'Concept- and theory-focused'
    ],
    relatedSlugs: ['clep-introductory-psychology', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/introductory-sociology',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-natural-sciences',
    body: 'College Board',
    tagline: 'Satisfy a science distribution requirement with six credits, no lab required.',
    description: `The CLEP Natural Sciences exam is a survey for non-science majors spanning biological and physical sciences, equivalent to a two-semester freshman sequence. It emphasizes understanding principles and applying them to contemporary issues rather than recalling facts. It commonly awards six semester hours and is a broad science general-education credit.`,
    quickAnswer: {
      summary: `CLEP Natural Sciences is a ~120-question, 90-minute survey for non-science majors. ACE recommends a score of 50 for about six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards six semester hours',
        'Covers biology and physical science broadly',
        'Year-round at test centers and online with remote proctoring',
        'No lab component required'
      ]
    },
    roadmap: ['Confirm your school’s science policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review bio and physical principles', 'Score 50+ for six credits'],
    prerequisites: 'None — open to anyone; liberal-arts science background assumed.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Biological: Cells and Organisms', weight: '30%', note: 'Cell biology and organismal structure' },
      { name: 'Biological: Origins and Populations', weight: '20%', note: 'Evolution, ecology, population' },
      { name: 'Physical: Matter, Energy, and Earth', weight: '39%', note: 'Atoms, chemistry, thermodynamics, geology' },
      { name: 'Physical: Forces and the Universe', weight: '11%', note: 'Mechanics, waves, astronomy' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends ~6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Audience', 'Non-science majors']
    ],
    faqs: [
      { q: 'How many credits does Natural Sciences grant?', a: 'ACE recommends about six semester hours for a score of 50, reflecting its two-semester survey scope. Your college sets the exact amount.' },
      { q: 'Is there a lab?', a: 'No hands-on lab. The exam tests conceptual understanding and application, suitable for a distribution requirement rather than a major sequence.' },
      { q: 'Is it hard for non-science students?', a: 'It is designed for non-majors and emphasizes principles and contemporary issues over detailed memorization, but the breadth still rewards review.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a two-semester science survey',
      '~120 questions in 90 minutes; score 50 for ~6 credits',
      'Equal biological and physical science splits',
      'Built for non-science majors'
    ],
    relatedSlugs: ['clep-biology', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/natural-sciences',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-precalculus',
    body: 'College Board',
    tagline: 'Place into calculus by proving your command of functions and trigonometry.',
    description: `The CLEP Precalculus exam assesses the skills and concepts needed for first-semester calculus, with heavy emphasis on functions and their properties across algebraic, graphical, and tabular forms. A graphing calculator is allowed on part of the exam. A good score can satisfy a precalculus prerequisite or place you directly into calculus.`,
    quickAnswer: {
      summary: `CLEP Precalculus is a 48-question, 90-minute exam on functions, algebra, and trigonometry. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of precalculus for ~$97 plus a fee',
        'Deep focus on functions and their representations',
        'Graphing calculator built in for Section 1',
        'Common prerequisite or placement credit'
      ]
    },
    roadmap: ['Confirm your school’s placement policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Master functions and trig identities', 'Score 50+ for three credits'],
    prerequisites: 'Assumes algebra, geometry, and trigonometry preparation.',
    examMeta: {
      questions: '48 multiple choice (25 calculator, 23 no calculator)',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (graphing calculator on Section 1)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Algebraic Expressions, Equations, Inequalities', weight: '20%', note: 'Linear, quadratic, exponential' },
      { name: 'Functions: Concept, Properties, Operations', weight: '15%', note: 'Domain, range, inverses' },
      { name: 'Representations of Functions', weight: '30%', note: 'Symbolic, graphical, tabular' },
      { name: 'Analytic Geometry', weight: '10%', note: 'Lines, conics' },
      { name: 'Trigonometry and Applications', weight: '15%', note: 'Note: trig ~30–40% overall' },
      { name: 'Functions as Models', weight: '10%', note: 'Modeling, translation' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Calculator', 'TI-84 Plus CE on Section 1']
    ],
    faqs: [
      { q: 'How many credits does Precalculus grant?', a: 'ACE recommends three semester hours at a score of 50, often used to satisfy a prerequisite or place into calculus.' },
      { q: 'Do I need a calculator?', a: 'An online TI-84 Plus CE is available for Section 1 only; Section 2 is no-calculator.' },
      { q: 'How much trigonometry is on it?', a: 'Although listed at 15 percent, trigonometry actually permeates the exam and accounts for roughly 30–40 percent of questions.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester precalculus course',
      '48 questions in 90 minutes; score 50 for 3 credits',
      'Functions and their representations are central',
      'Calculator allowed on part of the exam'
    ],
    relatedSlugs: ['clep-calculus', 'clep-college-algebra'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/precalculus',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-principles-of-macroeconomics',
    body: 'College Board',
    tagline: 'Knock out introductory macroeconomics with three credits.',
    description: `The CLEP Principles of Macroeconomics exam covers the whole economy: aggregate demand and supply, measurement, the financial sector, and stabilization policy. It is graph-intensive and rewards understanding relationships between variables more than memorization. It commonly satisfies a social-science or economics general-education requirement.`,
    quickAnswer: {
      summary: `CLEP Principles of Macroeconomics is a ~80-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of macroeconomics for ~$97 plus a fee',
        'Heavy on AD-AS, policy, and the financial sector',
        'Year-round at test centers and online with remote proctoring',
        'Pairs with microeconomics for both econ requirements'
      ]
    },
    roadmap: ['Confirm your school’s econ policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Master graphs: AD-AS, money, Phillips curve', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; basic algebra helps.',
    examMeta: {
      questions: '~80 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Basic Economic Concepts', weight: '8%–12%', note: 'Scarcity, supply/demand' },
      { name: 'Measurement of Economic Performance', weight: '12%–16%', note: 'GDP, unemployment, inflation' },
      { name: 'National Income and Price Determination', weight: '15%–20%', note: 'AD-AS, equilibrium' },
      { name: 'Financial Sector', weight: '15%–20%', note: 'Money, Fed, banking' },
      { name: 'Inflation, Unemployment, Stabilization', weight: '20%–25%', note: 'Fiscal and monetary policy' },
      { name: 'Growth and Open Economy', weight: '5%–10% / 9%–13%', note: 'Productivity, trade' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Style', 'Graph-intensive']
    ],
    faqs: [
      { q: 'How many credits does Macroeconomics grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying a principles-of-macroeconomics or social-science requirement.' },
      { q: 'Is the exam hard?', a: 'It is moderate and graph-heavy. Understanding AD-AS, the money market, and the Phillips curve matters more than memorizing definitions.' },
      { q: 'Should I take micro too?', a: 'If your school requires both econ principles, yes — they are separate exams and together cover the standard sequence.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester macroeconomics course',
      '~80 questions in 90 minutes; score 50 for 3 credits',
      'Stabilization policy is the largest area',
      'Graph fluency is key'
    ],
    relatedSlugs: ['clep-principles-of-microeconomics', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/principles-of-macroeconomics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-principles-of-management',
    body: 'College Board',
    tagline: 'Earn three credits in the essentials of management and organization.',
    description: `The CLEP Principles of Management exam covers the material of an introductory management course: human resources, operational and functional aspects of management, and international and contemporary issues. It tests both knowledge of terminology and the ability to apply concepts to problems. It is a common business general-education credit.`,
    quickAnswer: {
      summary: `CLEP Principles of Management is a ~100-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of management for ~$97 plus a fee',
        'Functional aspects dominate (45–55%)',
        'Year-round at test centers and online with remote proctoring',
        'Standard business general-education credit'
      ]
    },
    roadmap: ['Confirm your school’s business policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review planning through controlling', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Organization and Human Resources', weight: '15%–25%', note: 'Staffing, motivation, development' },
      { name: 'Operational Aspects of Management', weight: '10%–20%', note: 'Operations, quality, planning' },
      { name: 'Functional Aspects of Management', weight: '45%–55%', note: 'Planning, organizing, leading, controlling' },
      { name: 'International and Contemporary Issues', weight: '10%–20%', note: 'Global, ethics, e-business' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Functional management is largest']
    ],
    faqs: [
      { q: 'How many credits does Principles of Management grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an introductory management requirement.' },
      { q: 'What is the heaviest topic?', a: 'Functional aspects of management — planning, organizing, leading, and controlling — make up 45–55 percent of the exam.' },
      { q: 'Does it help a business major?', a: 'It can cover the introductory management course, but check whether your program requires a graded class instead of pass/fail credit.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester management course',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Functional management is 45–55%',
      'Useful business gen-ed credit'
    ],
    relatedSlugs: ['clep-principles-of-marketing', 'clep-financial-accounting'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/principles-of-management',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-principles-of-marketing',
    body: 'College Board',
    tagline: 'Clear introductory marketing with three credits by mastering the mix.',
    description: `The CLEP Principles of Marketing exam covers a one-semester introductory marketing course: the role of marketing in society and the firm, target marketing, and the marketing mix. It is vocabulary- and concept-heavy, with the four Ps making up the largest block. It is a common business general-education credit.`,
    quickAnswer: {
      summary: `CLEP Principles of Marketing is a ~100-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of marketing for ~$97 plus a fee',
        'The marketing mix is 40–50% of the exam',
        'Year-round at test centers and online with remote proctoring',
        'Standard business general-education credit'
      ]
    },
    roadmap: ['Confirm your school’s business policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Drill the four Ps and targeting', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone.',
    examMeta: {
      questions: '~100 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Role of Marketing in Society', weight: '8%–13%', note: 'Ethics, nonprofit, international' },
      { name: 'Role of Marketing in the Firm', weight: '17%–24%', note: 'Strategy, research, environment' },
      { name: 'Target Marketing', weight: '22%–27%', note: 'Behavior, segmentation, positioning' },
      { name: 'Marketing Mix', weight: '40%–50%', note: 'Product, price, place, promotion' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Marketing mix is largest']
    ],
    faqs: [
      { q: 'How many credits does Principles of Marketing grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying an introductory marketing requirement.' },
      { q: 'What is the heaviest topic?', a: 'The marketing mix — product, price, place, and promotion — accounts for 40–50 percent of the exam.' },
      { q: 'Is memorization important?', a: 'Yes, more than some CLEP exams: terminology and the four Ps dominate, so focused vocab study pays off.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester marketing course',
      '~100 questions in 90 minutes; score 50 for 3 credits',
      'Marketing mix (the four Ps) is 40–50%',
      'Vocabulary-heavy exam'
    ],
    relatedSlugs: ['clep-principles-of-management', 'clep-introductory-business-law'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/principles-of-marketing',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-principles-of-microeconomics',
    body: 'College Board',
    tagline: 'Master consumers, firms, and markets for three microeconomics credits.',
    description: `The CLEP Principles of Microeconomics exam covers individual consumers and firms: supply and demand, consumer choice, production and costs, market structures, factor markets, and market failure. Over half the exam is product markets, so the four market structures are decisive. It commonly satisfies an economics general-education requirement.`,
    quickAnswer: {
      summary: `CLEP Principles of Microeconomics is a ~80-question, 90-minute exam matching a one-semester course. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces a semester of microeconomics for ~$97 plus a fee',
        'Over half the exam is product markets',
        'Year-round at test centers and online with remote proctoring',
        'Pairs with macroeconomics for both econ requirements'
      ]
    },
    roadmap: ['Confirm your school’s econ policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Master the four market structures', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; basic algebra helps.',
    examMeta: {
      questions: '~80 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Basic Economic Concepts', weight: '10%–16%', note: 'Scarcity, PPC, trade' },
      { name: 'Product Markets', weight: '55%–70%', note: 'Supply/demand, costs, market structure' },
      { name: 'Factor Markets', weight: '6%–12%', note: 'Labor, capital, distribution' },
      { name: 'Market Failure and Government', weight: '8%–14%', note: 'Externalities, intervention' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Product markets > half']
    ],
    faqs: [
      { q: 'How many credits does Microeconomics grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying a principles-of-microeconomics or social-science requirement.' },
      { q: 'What is the heaviest topic?', a: 'Product markets make up 55–70 percent, with firm behavior and market structure (23–33 percent) the single biggest sub-area.' },
      { q: 'Is it harder than macro?', a: 'Many find micro tougher because of market structures; know perfect competition, monopolistic competition, oligopoly, and monopoly well.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester microeconomics course',
      '~80 questions in 90 minutes; score 50 for 3 credits',
      'Product markets are over half the exam',
      'Market structures are decisive'
    ],
    relatedSlugs: ['clep-principles-of-macroeconomics', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/principles-of-microeconomics',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-social-sciences-and-history',
    body: 'College Board',
    tagline: 'Earn up to six credits across history, government, economics, and geography at once.',
    description: `The CLEP Social Sciences and History exam is a broad survey drawing on introductory college courses in U.S. history, Western civilization, world history, government, geography, and economics. It is designed for general-education distribution credit rather than a single course. Scoring 50 commonly yields about six semester hours.`,
    quickAnswer: {
      summary: `CLEP Social Sciences and History is a ~120-question, 90-minute interdisciplinary survey. ACE recommends a score of 50 for about six semester hours at accepting schools.`,
      advantages: [
        'Commonly awards about six semester hours in one exam',
        'Spans history, government, economics, and geography',
        'Year-round at test centers and online with remote proctoring',
        'Efficient general-education distribution credit'
      ]
    },
    roadmap: ['Confirm your school’s distribution policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Review history (40%) and the social sciences', 'Score 50+ for ~6 credits'],
    prerequisites: 'None — open to anyone; broad survey background helps.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'History', weight: '40%', note: 'U.S., Western civ, world (13–15% each)' },
      { name: 'Government / Political Science', weight: '20%', note: 'U.S. and comparative' },
      { name: 'Geography', weight: '20%', note: 'Physical, cultural, regional' },
      { name: 'Economics', weight: '20%', note: 'Markets, policy, measurement' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends ~6 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Scope', 'Four social-science disciplines']
    ],
    faqs: [
      { q: 'How many credits does it grant?', a: 'ACE recommends about six semester hours at a score of 50, often applied as a broad social-science or history distribution credit.' },
      { q: 'What is the heaviest area?', a: 'History is 40 percent of the exam, split among U.S., Western civilization, and world history. Government, geography, and economics are each 20 percent.' },
      { q: 'Is it better than taking individual exams?', a: 'It is efficient for a distribution requirement, but if your school requires specific courses (e.g., U.S. history), the single-subject CLEP exams may map more cleanly.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to a broad social-science survey',
      '~120 questions in 90 minutes; score 50 for ~6 credits',
      'History is 40%, other fields 20% each',
      'Strong general-education credit'
    ],
    relatedSlugs: ['clep-history-of-the-united-states-i', 'clep-western-civilization-i'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/social-sciences-and-history',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-spanish-language',
    body: 'College Board',
    tagline: 'Demonstrate one to two years of Spanish for up to nine credits.',
    description: `The CLEP Spanish Language exam measures listening and reading ability equivalent to one to two years of college Spanish. Both levels sit in one exam, and your score determines Level 1 (six hours) or Level 2 (nine hours) credit. Like the other language exams, it tests comprehension rather than speaking or writing.`,
    quickAnswer: {
      summary: `CLEP Spanish Language is a ~121-question, 90-minute exam of listening and reading. ACE recommends 50 for six semester hours (Level 1) and 63 for nine hours (Level 2).`,
      advantages: [
        'One exam can yield six or nine semester hours',
        'Tests listening and reading, not speaking',
        'Year-round at test centers and online with remote proctoring',
        'Efficient path through language requirements'
      ]
    },
    roadmap: ['Confirm your school’s language policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice listening and reading', 'Score 50+ for Level 1, 63+ for Level 2'],
    prerequisites: 'Open to anyone; equivalent to 1–2 years of college Spanish.',
    examMeta: {
      questions: '~121 multiple choice',
      time: '90 minutes',
      pass: '50 (Level 1); 63 (Level 2)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice (listening + reading)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Listening: Rejoinders', weight: '15%', note: 'Short exchanges' },
      { name: 'Listening: Dialogues and Narratives', weight: '25%', note: 'Longer selections' },
      { name: 'Reading: Discrete Sentences', weight: '16%', note: 'Vocabulary and structure' },
      { name: 'Reading: Cloze Passages', weight: '20%', note: 'Context completion' },
      { name: 'Reading: Passages', weight: '24%', note: 'Reading comprehension' }
    ],
    examEssentials: [
      ['Credit', 'Level 1: 6 SH at 50; Level 2: 9 SH at 63'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Skills tested', 'Listening and reading only']
    ],
    faqs: [
      { q: 'How many credits can I earn?', a: 'ACE recommends six semester hours at 50 (Level 1) and nine at 63 (Level 2). Your college decides which level it grants.' },
      { q: 'Is there a speaking section?', a: 'No. The exam evaluates listening and reading comprehension only.' },
      { q: 'How long is the exam?', a: 'About 121 questions in 90 minutes across three separately timed sections; audio plays once.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to 1–2 years of college Spanish',
      '~121 questions in 90 minutes; 50 = 6 SH, 63 = 9 SH',
      'Listening 40%, reading 60%',
      'No speaking or writing required'
    ],
    relatedSlugs: ['clep-spanish-with-writing', 'clep-french-language'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/spanish-language',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-spanish-with-writing',
    body: 'College Board',
    tagline: 'Add scored writing to Spanish and earn up to twelve credits.',
    description: `The CLEP Spanish with Writing exam measures listening, reading, and writing at first- and second-year college level. It combines multiple-choice sections with two scored writing tasks, so it can award more credit than the listening/reading-only Spanish Language exam. Your score sets Level 1 (six hours) or Level 2 (twelve hours) credit.`,
    quickAnswer: {
      summary: `CLEP Spanish with Writing is a ~100-question, ~110-minute exam (listening, reading, plus two writing tasks). ACE recommends 50 for six SH (Level 1) and 65 for twelve SH (Level 2).`,
      advantages: [
        'One exam can yield six or twelve semester hours',
        'Adds two scored writing tasks to listening and reading',
        'Year-round at test centers and online with remote proctoring',
        'Highest-credit of the Spanish CLEP options'
      ]
    },
    roadmap: ['Confirm your school’s language policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Practice listening, reading, and writing', 'Score 50+ for Level 1, 65+ for Level 2'],
    prerequisites: 'Open to anyone; equivalent to 1–2 years of college Spanish.',
    examMeta: {
      questions: '100 multiple choice (~80 min) + 2 writing tasks (~30 min)',
      time: '~110 minutes',
      pass: '50 (Level 1); 65 (Level 2)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice plus scored writing',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Listening: Rejoinders', weight: '10%', note: 'Short spoken exchanges' },
      { name: 'Listening: Dialogues and Narratives', weight: '20%', note: 'Longer spoken selections' },
      { name: 'Reading', weight: '45%', note: 'Sentences 13%, cloze 15%, passages 17%' },
      { name: 'Writing', weight: '25%', note: 'E-mail and composition tasks' }
    ],
    examEssentials: [
      ['Credit', 'Level 1: 6 SH at 50; Level 2: 12 SH at 65'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Writing', 'Two tasks, hand-scored biweekly']
    ],
    faqs: [
      { q: 'How many credits can I earn?', a: 'ACE recommends six semester hours at 50 (Level 1) and twelve at 65 (Level 2) — more than the listening/reading-only Spanish Language exam.' },
      { q: 'What is the writing section like?', a: 'Two tasks: a short e-mail (at least 60 words) and a composition (at least 100 words), each scored by college faculty.' },
      { q: 'Should I take this or Spanish Language?', a: 'If you write confidently in Spanish, this exam can award more credit. If not, the listening/reading exam may be the safer bet.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to 1–2 years of college Spanish with writing',
      '100 MCQ + 2 essays in ~110 minutes; 50 = 6 SH, 65 = 12 SH',
      'Writing is 25% of the exam',
      'Highest-credit Spanish CLEP option'
    ],
    relatedSlugs: ['clep-spanish-language', 'clep-french-language'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/spanish-with-writing',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-western-civilization-i',
    body: 'College Board',
    tagline: 'Cover Western history to 1648 for three credits in one exam.',
    description: `The CLEP Western Civilization I exam covers Western history from the ancient Near East through the Renaissance and Reformation to 1648, equivalent to the first semester of a two-semester survey. It tests factual knowledge, causes and effects, and the analysis of texts, maps, and images. Medieval history and the Renaissance together make up a large share.`,
    quickAnswer: {
      summary: `CLEP Western Civilization I is a ~120-question, 90-minute exam covering antiquity to 1648. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces the first Western civ semester for ~$97 plus a fee',
        'Spans Near East, Greece, Rome, and medieval/early modern Europe',
        'Year-round at test centers and online with remote proctoring',
        'Pairs with Western Civilization II'
      ]
    },
    roadmap: ['Confirm your school’s history policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Focus on medieval and Renaissance (two-thirds)', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; world history background helps.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Ancient Near East', weight: '8%–10%', note: 'Mesopotamia, Egypt, Hebrews' },
      { name: 'Ancient Greece and Hellenistic', weight: '15%–17%', note: 'Polis, philosophy, Alexander' },
      { name: 'Ancient Rome', weight: '15%–17%', note: 'Republic, Empire, Christianity' },
      { name: 'Medieval History', weight: '23%–27%', note: 'Byzantium, feudalism, Church' },
      { name: 'Renaissance and Reformation', weight: '13%–17%', note: 'Italy, Reformations' },
      { name: 'Early Modern Europe (1560–1648)', weight: '10%–15%', note: 'Commercial revolution, conflicts' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Medieval + Renaissance ≈ two-thirds']
    ],
    faqs: [
      { q: 'How many credits does Western Civ I grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying a Western civilization or history requirement.' },
      { q: 'What should I emphasize?', a: 'Medieval history (23–27%) and the Renaissance/Reformation (13–17%) together are about two-thirds of the exam, so prioritize them.' },
      { q: 'Do I need the sequel?', a: 'If your school requires the full sequence, Western Civilization II (1648–present) completes it.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to first-semester Western civilization',
      '~120 questions in 90 minutes; score 50 for 3 credits',
      'Medieval and Renaissance dominate',
      'Pairs with Western Civilization II'
    ],
    relatedSlugs: ['clep-western-civilization-ii', 'clep-history-of-the-united-states-i'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/western-civilization-i',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'clep-western-civilization-ii',
    body: 'College Board',
    tagline: 'Finish Western history from 1648 to the present for three credits.',
    description: `The CLEP Western Civilization II exam covers European history from the mid-seventeenth century through the post-Second World War period, equivalent to the second semester of a two-semester survey. It spans political, economic, and cultural developments including the Enlightenment, the French and Industrial Revolutions, and both world wars. Revolution/Napoleonic Europe and WWI/Russian Revolution are the largest blocks.`,
    quickAnswer: {
      summary: `CLEP Western Civilization II is a ~120-question, 90-minute exam covering 1648 to the present. ACE recommends a score of 50 for three semester hours at accepting schools.`,
      advantages: [
        'Replaces the second Western civ semester for ~$97 plus a fee',
        'Covers absolutism through contemporary Europe',
        'Year-round at test centers and online with remote proctoring',
        'Natural follow-on to Western Civilization I'
      ]
    },
    roadmap: ['Confirm your school’s history policy', 'Register and pay the $97 fee', 'Book a test center or remote-proctoring slot', 'Focus on revolution and the world wars', 'Score 50+ for three credits'],
    prerequisites: 'None — open to anyone; prior European history helps.',
    examMeta: {
      questions: '~120 multiple choice',
      time: '90 minutes',
      pass: '50 (ACE credit-granting score)',
      fee: '$97 (2025–26) + test-center fee',
      format: 'Multiple choice',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Absolutism and Constitutionalism (1648–1715)', weight: '7%–9%', note: 'Louis XIV, England' },
      { name: 'Scientific View and Enlightenment', weight: '5%–7% / 7%–9%', note: 'Newton, Locke, Rousseau' },
      { name: 'Revolution and Napoleonic Europe', weight: '10%–13%', note: 'France, Vienna' },
      { name: 'Industrial Revolution', weight: '7%–9%', note: 'Britain, reform' },
      { name: 'Nationalism (1850–1914)', weight: '8%–10%', note: 'Unification, diplomacy' },
      { name: 'WWI and Russian Revolution', weight: '10%–12%', note: 'War, Versailles, 1917' },
      { name: 'WWII and Contemporary Europe', weight: '8%–10%', note: 'War, Cold War, integration' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at score 50'],
      ['Score scale', '20–80 scaled'],
      ['Retake', '3-month wait; full fee each attempt'],
      ['Focus', 'Revolution and the world wars are largest']
    ],
    faqs: [
      { q: 'How many credits does Western Civ II grant?', a: 'ACE recommends three semester hours at a score of 50, typically satisfying the second half of a Western civilization requirement.' },
      { q: 'What should I emphasize?', a: 'Revolution and Napoleonic Europe (10–13%) and WWI with the Russian Revolution (10–12%) are the heaviest areas.' },
      { q: 'Do I need Western Civ I first?', a: 'Not required, but together they complete the standard two-semester sequence if your school requires it.' },
      { q: 'Can I take it online?', a: 'Yes, via CLEP with Remote Proctoring or at a test center, with the same 20–80 scaled score.' }
    ],
    summaryPoints: [
      'Equivalent to second-semester Western civilization',
      '~120 questions in 90 minutes; score 50 for 3 credits',
      'Revolution and world wars are the largest areas',
      'Natural sequel to Western Civilization I'
    ],
    relatedSlugs: ['clep-western-civilization-i', 'clep-history-of-the-united-states-ii'],
    sourceUrl: 'https://clep.collegeboard.org/clep-exams/western-civilization-ii',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-2d-art-and-design',
    body: 'College Board',
    tagline: 'Submit a portfolio of 2-D work instead of a written test for college credit.',
    description: `AP 2-D Art and Design is a portfolio-based assessment, not a written exam. You submit 15 images for a Sustained Investigation (60%) and 5 works for Selected Works (40%) through the AP Digital Portfolio. The focus is on two-dimensional design — graphic design, photography, painting, printmaking, and more. A strong portfolio can earn college credit and placement in foundation art courses.`,
    quickAnswer: {
      summary: `AP 2-D Art and Design is assessed by digital portfolio due each May (2026 deadline May 8). The score is 1–5; a 3 typically earns credit, though many selective schools prefer 4 or 5.`,
      advantages: [
        'No written exam — judged on a submitted portfolio',
        'Sustained Investigation rewards a developed inquiry',
        'Credit and placement in foundation art courses',
        'Open to any medium within 2-D design'
      ]
    },
    roadmap: ['Enroll via your school’s AP coordinator', 'Develop a sustained investigation theme', 'Create 15 investigation images + 5 selected works', 'Submit by the May deadline (2026: May 8)', 'Earn a 3+ for credit at most schools'],
    prerequisites: 'None — open to any student; the course is usually school-based.',
    examMeta: {
      questions: 'Portfolio (no written exam)',
      time: 'Due May 8, 2026 (8 PM ET)',
      pass: '3 (typically earns credit; many selective schools prefer 4–5)',
      fee: '$99 (US); $129 international',
      format: 'Digital portfolio submission',
      admin: 'AP coordinator at your school'
    },
    topics: [
      { name: 'Sustained Investigation: Images', weight: '60%', note: '15 digital images of a sustained inquiry' },
      { name: 'Sustained Investigation: Written Evidence', weight: 'within 60%', note: 'Inquiry statement and reflection' },
      { name: 'Selected Works', weight: '40%', note: '5 works shown as digital images' },
      { name: '2-D Design Elements and Principles', weight: 'assessed in both', note: 'Point, line, color, space, unity, etc.' }
    ],
    examEssentials: [
      ['Score', '1–5 scale; 3 usually = credit'],
      ['Submission', 'AP Digital Portfolio, May 8 2026'],
      ['Sections', 'Sustained Investigation (60%), Selected Works (40%)'],
      ['Fee', '$99 US / $129 international; $37 reduction available']
    ],
    faqs: [
      { q: 'How many credits do I get for a 3?', a: 'A score of 3 typically earns credit at many colleges, but policies vary and selective schools often require a 4 or 5 for credit or placement.' },
      { q: 'Is there a written test?', a: 'No. The entire assessment is a digital portfolio of images and written evidence submitted through the AP Digital Portfolio by the May deadline.' },
      { q: 'Can I self-study AP 2-D Art and Design?', a: 'It is possible but unusual — the portfolio requires sustained studio work, and most students develop it through a school course with a teacher’s feedback.' },
      { q: 'When is it due?', a: 'Portfolios are due in early May; for the 2026 exam the deadline is May 8 at 8 PM ET (your school may set an earlier date).' }
    ],
    summaryPoints: [
      'Portfolio-based, no written exam',
      'Sustained Investigation 60%, Selected Works 40%',
      'Score 3+ typically earns credit; 4–5 preferred by selective schools',
      '2026 deadline May 8'
    ],
    relatedSlugs: ['ap-3d-art-and-design', 'ap-african-american-studies'],
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-2-d-art-and-design/assessment',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-3d-art-and-design',
    body: 'College Board',
    tagline: 'Submit sculptural and spatial work for college credit — no written exam.',
    description: `AP 3-D Art and Design is a portfolio-based assessment focused on three-dimensional work — sculpture, ceramics, glasswork, metalwork, installation, and more. You submit 15 images for a Sustained Investigation (60%, with written evidence) and 5 works shown from two views each for Selected Works (40%). Like the other Art and Design portfolios, it is judged digitally, not by written test.`,
    quickAnswer: {
      summary: `AP 3-D Art and Design is assessed by digital portfolio due each May (2026 deadline May 8). The score is 1–5; a 3 typically earns credit, though many selective schools prefer 4 or 5.`,
      advantages: [
        'No written exam — judged on a 3-D portfolio',
        'Sustained Investigation rewards developed inquiry',
        'Credit and placement in foundation art courses',
        'Accepts sculpture, ceramics, installation, and more'
      ]
    },
    roadmap: ['Enroll via your school’s AP coordinator', 'Develop a 3-D sustained investigation', 'Create 15 investigation images + 5 selected works (2 views each)', 'Submit by the May deadline (2026: May 8)', 'Earn a 3+ for credit at most schools'],
    prerequisites: 'None — open to any student; the course is usually school-based.',
    examMeta: {
      questions: 'Portfolio (no written exam)',
      time: 'Due May 8, 2026 (8 PM ET)',
      pass: '3 (typically earns credit; many selective schools prefer 4–5)',
      fee: '$99 (US); $129 international',
      format: 'Digital portfolio submission',
      admin: 'AP coordinator at your school'
    },
    topics: [
      { name: 'Sustained Investigation: Images', weight: '60%', note: '15 digital images of a sustained inquiry' },
      { name: 'Sustained Investigation: Written Evidence', weight: 'within 60%', note: 'Inquiry statement and reflection' },
      { name: 'Selected Works', weight: '40%', note: '5 works, 2 views each (10 images)' },
      { name: '3-D Design Elements and Principles', weight: 'assessed in both', note: 'Form, space, mass, texture, etc.' }
    ],
    examEssentials: [
      ['Score', '1–5 scale; 3 usually = credit'],
      ['Submission', 'AP Digital Portfolio, May 8 2026'],
      ['Sections', 'Sustained Investigation (60%), Selected Works (40%)'],
      ['Fee', '$99 US / $129 international; $37 reduction available']
    ],
    faqs: [
      { q: 'How many credits do I get for a 3?', a: 'A score of 3 typically earns credit at many colleges, but selective schools often require a 4 or 5 for credit or placement in studio courses.' },
      { q: 'Is there a written test?', a: 'No. Assessment is a digital portfolio of 3-D works and written evidence submitted through the AP Digital Portfolio by the May deadline.' },
      { q: 'How is it different from AP 2-D?', a: 'Both use the same two-section structure, but 3-D centers on form, space, and materials such as sculpture, ceramics, and installation rather than two-dimensional media.' },
      { q: 'When is it due?', a: 'Portfolios are due in early May; for the 2026 exam the deadline is May 8 at 8 PM ET (your school may set an earlier date).' }
    ],
    summaryPoints: [
      'Portfolio-based, no written exam',
      'Sustained Investigation 60%, Selected Works 40% (5 works, 2 views)',
      'Score 3+ typically earns credit; 4–5 preferred by selective schools',
      '2026 deadline May 8'
    ],
    relatedSlugs: ['ap-2d-art-and-design', 'ap-african-american-studies'],
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-3-d-art-and-design/assessment',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ap-african-american-studies',
    body: 'College Board',
    tagline: 'An interdisciplinary AP covering the African diaspora from origins to today.',
    description: `AP African American Studies is an interdisciplinary course examining African American experiences through history, literature, the arts, geography, science, and law, from early African societies to the present. The exam is fully digital and includes multiple choice, a document-based question, short answers, and an Individual Student Project. A score of 3 typically earns college credit, with selective schools often wanting 4 or 5.`,
    quickAnswer: {
      summary: `AP African American Studies is a 2-hour-45-minute digital exam (2026 date May 7) plus an Individual Student Project. The score is 1–5; a 3 typically earns credit, though many selective schools prefer 4 or 5.`,
      advantages: [
        'Interdisciplinary: history, arts, law, and culture',
        'Digital exam with multiple choice and free response',
        'Credit and placement at many colleges',
        'Includes a student-driven research project'
      ]
    },
    roadmap: ['Enroll via your school’s AP coordinator', 'Study the four chronological units', 'Complete the Individual Student Project', 'Take the digital exam May 7, 2026', 'Earn a 3+ for credit at most schools'],
    prerequisites: 'None — open to any student; no prior course required.',
    examMeta: {
      questions: '60 multiple choice + 3 short answer + 1 DBQ (+ project)',
      time: '2 hours 45 minutes (exam date May 7, 2026)',
      pass: '3 (typically earns credit; many selective schools prefer 4–5)',
      fee: '$99 (US); $129 international',
      format: 'Digital exam (Bluebook)',
      admin: 'AP coordinator at your school'
    },
    topics: [
      { name: 'Unit 1: Origins of the African Diaspora', weight: '20%–25%', note: '~900 BCE–16th century' },
      { name: 'Unit 2: Freedom, Enslavement, and Resistance', weight: '30%–35%', note: '16th century–1865' },
      { name: 'Unit 3: The Practice of Freedom', weight: '20%–25%', note: '1865–1940s' },
      { name: 'Unit 4: Movements and Debates', weight: '20%–25%', note: '1940s–2000s' }
    ],
    examEssentials: [
      ['Score', '1–5 scale; 3 usually = credit'],
      ['Exam date', 'May 7, 2026 (digital)'],
      ['Sections', 'MC 60%, FRQ 30%, project ~10%'],
      ['Fee', '$99 US / $129 international; $37 reduction available']
    ],
    faqs: [
      { q: 'How many credits do I get for a 3?', a: 'A score of 3 typically earns credit at many colleges, but policies vary and selective schools often grant credit only at 4 or 5.' },
      { q: 'How hard is the exam?', a: 'It is source-heavy and rewards analyzing documents, art, music, and data, not just memorizing facts. Unit 2 carries the most weight at 30–35%.' },
      { q: 'Can I self-study AP African American Studies?', a: 'Yes — the course has no prerequisites and the CED is public, though the Individual Student Project is typically guided by a teacher.' },
      { q: 'When is the 2026 exam?', a: 'The regularly scheduled date is May 7, 2026, taken digitally via Bluebook; scores release in early July.' }
    ],
    summaryPoints: [
      'Interdisciplinary African American Studies AP',
      '2h45m digital exam + student project; 2026 date May 7',
      'Unit 2 (enslavement and resistance) is weighted 30–35%',
      'Score 3+ typically earns credit; 4–5 preferred by selective schools'
    ],
    relatedSlugs: ['ap-2d-art-and-design', 'clep-social-sciences-and-history'],
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-african-american-studies',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
