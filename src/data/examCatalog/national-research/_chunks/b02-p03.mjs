export const programs = [
  {
    id: 'prometric',
    body: 'Prometric',
    bodyUrl: 'https://getcollegecredit.com',
    about: 'Prometric owns and administers the DSST program (originally the DANTES Subject Standardized Tests), a catalog of roughly 30 credit-by-exam titles that let adult learners, transfer students, and service members convert existing knowledge into college credit. Each DSST is a 100-question, two-hour multiple-choice exam scored on a 200-500 scale, and the American Council on Education (ACE) reviews every title and publishes a credit recommendation. DSST began as a Department of Defense benefit delivered through DANTES and is still funded for eligible military test takers, but it is open to any civilian who can reach a DSST-approved test site.',
    registrationSteps: [
      { title: 'Confirm your school accepts the title', description: 'Check the registrar or credit-by-exam policy for the specific DSST you want. Schools set their own minimum score, credit total, and how the credit applies to a degree plan.', duration: '1-3 days' },
      { title: 'Find a DSST test site', description: 'Use the test-center locator at getcollegecredit.com. Sites include community colleges, universities, military education centers, and Prometric locations; online proctoring is available in many areas.', duration: '30 minutes' },
      { title: 'Create an account and pay', description: 'Register through the DSST portal, pay the $100 exam fee, and choose your test title. DANTES-eligible service members are funded for a first attempt at each title.', duration: '20 minutes' },
      { title: 'Schedule with the test site', description: 'Contact the site directly to book a seat. Most sites charge their own administration fee on top of the $100 and set their own testing windows.', duration: '1 week' },
      { title: 'Study the official content outline', description: 'Every DSST publishes a fact sheet with content areas, percentage weights, reference books, and sample questions. Peterson\'s and EBSCO LearningExpress practice tests are linked from the official exam page.', duration: '2-6 weeks' },
      { title: 'Test and get your score', description: 'Multiple-choice DSSTs return an unofficial scaled score at the test center immediately. Official results go to the school you designate.', duration: 'Test day' }
    ],
    proctoring: 'DSST exams are delivered at DSST-approved test centers — colleges, universities, military education centers, and Prometric sites — under standard proctoring with a government-issued photo ID. Online proctored delivery is available for many titles through the DSST online testing option, using a webcam, room scan, and live proctor.',
    retakePolicy: 'You must wait 30 days before retaking the same DSST title, and you pay the full $100 fee for each attempt. A failed attempt does not appear on your college transcript, because only passing scores are usually posted for credit.',
    recertification: 'DSST results do not expire at the source and there is no recertification requirement — the ACE credit recommendation is tied to the score, not to a renewal cycle. Individual colleges decide how old a score they will still accept for posting credit.',
    scoreReporting: 'DSST uses a scaled score of 200-500. ACE recommends 400 as the credit-granting score for essentially every title, normally worth 3 semester hours at the baccalaureate level. Multiple-choice results are shown immediately at the test center, and official score reports are sent to the institution you name at registration.',
    refundPolicy: 'The $100 DSST exam fee is generally nonrefundable once an exam is opened. Test-site administration fees follow each site\'s own cancellation rules, so reschedule directly with the site as early as possible.',
    providersNote: 'Start with the free official fact sheet for your title, which lists content weights, reference texts, and sample items. DSST links to Peterson\'s and EBSCO LearningExpress practice tests; both are free through many base and public library systems. Commercial guides from InstantCert, REA, and Mometrix are widely used but not affiliated with Prometric.',
    comparison: {
      title: 'DSST compared with CLEP',
      columns: ['Program', 'Owner', 'Scale', 'Credit score', 'Retake wait'],
      rows: [
        { label: 'DSST', values: ['Prometric', '200-500', '400', '30 days'] },
        { label: 'CLEP', values: ['College Board', '20-80', '50', '3 months'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I have to be in the military to take a DSST?', a: 'No. DSST grew out of a Department of Defense program and DANTES still funds attempts for eligible service members, but any civilian can register and test at a DSST-approved site by paying the $100 fee.' },
      { q: 'How many credits does one DSST earn?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher on almost every title. Your college decides whether to post those credits and which requirement they satisfy.' },
      { q: 'How is DSST different from CLEP?', a: 'They are parallel credit-by-exam programs. DSST is run by Prometric on a 200-500 scale with a 400 credit score and a 30-day retake wait; CLEP is run by the College Board on a 20-80 scale with a 50 credit score and a three-month wait. DSST covers more upper-level and applied subjects.' }
    ],
    sourceUrl: 'https://getcollegecredit.com',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'dsst-a-history-of-the-vietnam-war',
    body: 'Prometric',
    tagline: 'Turn a semester of Vietnam War history into one two-hour sitting worth three credits.',
    description: 'DSST A History of the Vietnam War covers the conflict from its colonial roots through American withdrawal and the legacies that followed. The exam runs chronologically — French Indochina, the Diem years, the Johnson escalation, Tet, Vietnamization, Cambodia and Laos, and the fall of Saigon — while devoting a sixth of the questions to the American home front and antiwar movement. It rewards a working grasp of causes, decisions, and consequences far more than memorized dates or unit designations.',
    quickAnswer: {
      summary: 'DSST A History of the Vietnam War is a 100-question, two-hour credit-by-exam test on the Vietnam conflict from 1940 through its aftermath. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.',
      advantages: [
        'Replaces a full history course for $100 plus a test-site fee',
        'Available year-round rather than once a term',
        'Twelve clearly weighted chronological sections make study planning easy',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST Vietnam War credit', 'Download the official fact sheet and reference list', 'Work through the war chronologically, 1940 to 1975', 'Review the two home-front sections carefully', 'Score 400 or higher to bank three credits'],
    prerequisites: 'None — open to anyone; no prior coursework or military service is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Vietnam Before 1940', weight: '5%', note: 'Precolonial Vietnam and French Indochina' },
      { name: 'World War II, the Cold War, and the First Indochina War (1940-1955)', weight: '9%', note: 'Ho Chi Minh, Dien Bien Phu, Geneva' },
      { name: 'Diem and Nation-State Building (1955-1963)', weight: '10%', note: 'Republic of Vietnam, Buddhist crisis, coup' },
      { name: 'L.B. Johnson Americanizes the War (1964-1965)', weight: '10%', note: 'Tonkin Gulf, Rolling Thunder, ground troops' },
      { name: 'America Takes Charge (1965-1967)', weight: '10%', note: 'Search and destroy, attrition, pacification' },
      { name: 'Home Front USA (1963-1967)', weight: '8%', note: 'Early dissent, media, Great Society strain' },
      { name: 'Tet (1968)', weight: '9%', note: 'Planning, offensive, political fallout' },
      { name: 'Vietnamizing the War (1969-1973)', weight: '10%', note: 'Nixon, Kissinger, troop withdrawal, Paris talks' },
      { name: 'The War at Home (1968-1972)', weight: '8%', note: 'Antiwar movement, Kent State, Pentagon Papers' },
      { name: 'Cambodia and Laos', weight: '8%', note: 'Incursions, bombing, regional spillover' },
      { name: '"A Decent Interval"', weight: '8%', note: 'Paris Accords through the fall of Saigon' },
      { name: 'U.S. Legacies and Lessons', weight: '5%', note: 'Vietnam Syndrome, veterans, memory' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the twelve chronological sections', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. DANTES funding covers one attempt per title for eligible service members, who may still owe the site fee.'
    },
    difficulty: 'Moderate',
    audience: 'Adult learners, transfer students, and service members needing a history or general-education credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. A handful set a higher bar, so confirm the number with your registrar before you register.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours at the baccalaureate level under the ACE recommendation. Whether that satisfies a history requirement or counts as a general elective is your school\'s decision.' },
      { q: 'How long should I study?', a: 'Most test takers with some U.S. history background need three to five weeks. If the Cold War is new to you, plan closer to two months and lean on the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'Roughly 1,900 institutions accept DSST, but acceptance is title by title. Ask the registrar to confirm this specific exam is on the approved list before you pay.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day waiting period, and you pay the full $100 again. A failed attempt is not reported on your college transcript.' }
    ],
    summaryPoints: [
      'Covers Vietnam from French Indochina through the war\'s legacy in twelve weighted sections',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-history-of-the-soviet-union', 'dsst-criminal-justice'],
    sourceUrl: 'https://getcollegecredit.com/exam/a-history-of-the-vietnam-war/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-art-of-the-western-world',
    body: 'Prometric',
    tagline: 'Recognize the Western canon from the Parthenon to postmodernism and skip the survey course.',
    description: 'DSST Art of the Western World is a chronological survey of painting, sculpture, and architecture from the ancient Mediterranean through contemporary practice. Nearly half the exam sits in the Ancient World, Renaissance, and Middle Ages, so period style recognition matters more than artist trivia. Questions ask you to place works, identify techniques and materials, and connect movements to their cultural context, which makes visual familiarity with major works the single best preparation.',
    quickAnswer: {
      summary: 'DSST Art of the Western World is a 100-question, two-hour credit-by-exam test covering Western art from antiquity to the present. A scaled score of 400 earns the ACE recommendation of 3 semester hours in art history or humanities.',
      advantages: [
        'Satisfies a humanities or fine-arts general-education slot for about $120',
        'Heavily weighted toward the periods most people already recognize',
        'No studio work, essays, or slide-identification writing required',
        'Testable year-round at DSST sites rather than once a semester'
      ]
    },
    roadmap: ['Confirm the humanities requirement it will satisfy', 'Download the official content outline', 'Build image flashcards period by period', 'Drill Ancient, Renaissance, and Baroque hardest', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no studio or art-history coursework is assumed.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice with images',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Ancient World', weight: '15%', note: 'Egypt, Greece, Rome' },
      { name: 'Middle Ages', weight: '12%', note: 'Byzantine, Romanesque, Gothic' },
      { name: 'Renaissance', weight: '15%', note: 'Early, High, Northern Renaissance' },
      { name: 'Baroque', weight: '10%', note: 'Caravaggio, Bernini, Dutch painting' },
      { name: 'Rococo and Neoclassicism', weight: '9%', note: 'Eighteenth-century style shift' },
      { name: 'Romanticism and Realism', weight: '8%', note: 'Goya, Delacroix, Courbet' },
      { name: 'Impressionism and Post-Impressionism', weight: '8%', note: 'Monet through Cezanne and Van Gogh' },
      { name: 'Early Twentieth Century', weight: '12%', note: 'Cubism, Expressionism, Surrealism' },
      { name: 'Postwar to Postmodern', weight: '6%', note: 'Abstract Expressionism, Pop' },
      { name: 'Contemporary', weight: '5%', note: 'Recent movements and media' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the humanities requirement', duration: '1 week' },
      { stage: 'Build a period-by-period image set', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Peterson\'s and EBSCO practice tests are free through many library systems.'
    },
    difficulty: 'Moderate',
    audience: 'Students needing a humanities or fine-arts general-education credit',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Do I need to memorize specific artworks?', a: 'You need to recognize style and period more than titles. Building flashcards of two or three signature works per movement gets most test takers to the 400 threshold.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400. Most schools apply it to a humanities or fine-arts general-education slot.' },
      { q: 'How long should I study?', a: 'Three to four weeks is typical. Anyone who has taken a high-school art or European history course often needs less.' },
      { q: 'Will my college accept it?', a: 'DSST is accepted at roughly 1,900 institutions, but each one approves specific titles. Verify this exam appears on your school\'s credit-by-exam list first.' },
      { q: 'Can I retake the exam?', a: 'Yes. DSST requires a 30-day wait between attempts at the same title, and the $100 fee applies each time.' }
    ],
    summaryPoints: [
      'Chronological survey from the Ancient World to contemporary art',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Ancient, Renaissance, and Middle Ages carry 42% of the exam',
      'Common route to a humanities general-education credit'
    ],
    relatedSlugs: ['dsst-ethics-in-america', 'dsst-introduction-to-geography'],
    sourceUrl: 'https://getcollegecredit.com/exam/art-of-the-western-world/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-astronomy',
    body: 'Prometric',
    tagline: 'Earn a lab-free science credit by testing out of introductory astronomy in two hours.',
    description: 'DSST Astronomy covers the material of a one-semester introductory astronomy course: the scientific method, gravitation and relativity, celestial motions, the physics of light, the solar system and exoplanets, stellar birth and death, galaxies, and cosmology. Planetary systems carry the single largest weight at 20%, with astrophysics and the science of light close behind. Simple quantitative reasoning appears, but the exam favors conceptual understanding over heavy calculation.',
    quickAnswer: {
      summary: 'DSST Astronomy is a 100-question, two-hour credit-by-exam test equivalent to a first-semester college astronomy course. A scaled score of 400 earns the ACE recommendation of 3 semester hours, often satisfying a non-lab science requirement.',
      advantages: [
        'Covers a natural-science requirement without a lab component',
        'Conceptual emphasis rather than calculus-based physics',
        'Planetary systems and light account for 35% of the exam',
        'Year-round scheduling at DSST-approved sites'
      ]
    },
    roadmap: ['Confirm your school counts it as a science credit', 'Download the official content outline', 'Study light, gravity, and stellar evolution first', 'Drill solar-system and exoplanet content', 'Score 400 or higher to bank three credits'],
    prerequisites: 'None, though comfort with basic algebra and scientific notation helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Introduction to the Science of Astronomy', weight: '5%', note: 'Scientific method and early astronomy' },
      { name: 'Astrophysics', weight: '15%', note: 'Kepler, Newtonian gravity, relativity' },
      { name: 'Celestial Systems', weight: '10%', note: 'Celestial motions, Earth-Moon, seasons' },
      { name: 'The Science of Light', weight: '15%', note: 'EM spectrum, telescopes, spectroscopy' },
      { name: 'Planetary Systems: Our Solar System and Others', weight: '20%', note: 'Solar-system contents, formation, exoplanets' },
      { name: 'The Sun and Stars: Nature and Evolution', weight: '15%', note: 'Stellar structure, life cycles, remnants' },
      { name: 'Galaxies', weight: '10%', note: 'Types, structure, active galaxies' },
      { name: 'The Universe: Contents, Structure, and Evolution', weight: '10%', note: 'Big Bang, dark matter, cosmology' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Calculator', 'Non-programmable calculator permitted'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Verify it satisfies your science requirement', duration: '1 week' },
      { stage: 'Study the eight content areas', duration: '4-6 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. A non-programmable calculator is allowed but not supplied by every site.'
    },
    difficulty: 'Moderate',
    audience: 'Students filling a non-lab natural-science requirement',
    time: '4-6 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Does this count as a lab science?', a: 'Usually not. Most schools post it as a non-lab natural-science credit, which is enough for many general-education requirements but not for science majors who need lab hours.' },
      { q: 'What score do I need?', a: 'ACE recommends 400 on the 200-500 scale. Confirm your school does not set a higher threshold before you register.' },
      { q: 'How much math is on it?', a: 'Light. You need scientific notation, proportional reasoning, and an intuition for inverse-square relationships. A non-programmable calculator is permitted.' },
      { q: 'How long should I study?', a: 'Four to six weeks for most people. Prior physics or earth-science coursework can cut that in half.' },
      { q: 'Can I retake it?', a: 'Yes, after 30 days, at the full $100 fee. Failed attempts do not go on your college transcript.' }
    ],
    summaryPoints: [
      'Equivalent to a one-semester introductory astronomy course',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Planetary systems, light, and astrophysics carry half the exam',
      'Non-programmable calculator allowed; no lab component'
    ],
    relatedSlugs: ['dsst-environmental-science', 'dsst-fundamentals-of-college-algebra'],
    sourceUrl: 'https://getcollegecredit.com/exam/astronomy/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-business-ethics-and-society',
    body: 'Prometric',
    tagline: 'Bank three business credits by proving you can reason through workplace and corporate ethics.',
    description: 'DSST Business Ethics and Society tests the moral reasoning side of a business degree: why ethics matters commercially, the major moral philosophies applied to firms, stakeholder theory, corporate social responsibility, government regulation, and the duties running between employers and employees. Employer-employee relations alone carry a fifth of the exam, with information ethics and global business ethics taking another third. Questions are applied scenarios more often than definitions.',
    quickAnswer: {
      summary: 'DSST Business Ethics and Society is a 100-question, two-hour credit-by-exam test covering moral philosophy applied to business, stakeholders, regulation, and employment ethics. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Common substitute for a required business-ethics course',
        'Applied, scenario-driven questions rather than heavy theory',
        'Employer-employee relations and information ethics are 36% of the exam',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Check whether it substitutes for your required ethics course', 'Download the official content outline', 'Learn the main moral philosophies and stakeholder theory', 'Practice applied employment and privacy scenarios', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though an introductory business or management course makes the vocabulary familiar.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'The Importance of Business Ethics', weight: '7%', note: 'Why ethics matters to firms' },
      { name: 'Moral Philosophies and Business Ethics', weight: '9%', note: 'Utilitarianism, deontology, virtue ethics' },
      { name: 'Corporations and Stakeholders', weight: '13%', note: 'Governance, stakeholder theory' },
      { name: 'Social Responsibilities of a Business', weight: '10%', note: 'CSR models, sustainability, philanthropy' },
      { name: 'Regulation of Business', weight: '9%', note: 'Government oversight and compliance' },
      { name: 'Employer-Employee Relations', weight: '20%', note: 'Rights, discrimination, whistleblowing' },
      { name: 'Ethics of Information', weight: '16%', note: 'Privacy, disclosure, data handling' },
      { name: 'Business Ethics in a Global Economy', weight: '16%', note: 'Cross-cultural norms, bribery, labor standards' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm it replaces your ethics requirement', duration: '1 week' },
      { stage: 'Study the eight content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Peterson\'s and EBSCO practice tests are linked from the official exam page.'
    },
    difficulty: 'Moderate',
    audience: 'Business and management students replacing a required ethics course',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400. Many business programs accept it directly for the required ethics course, but confirm with your advisor.' },
      { q: 'Is it a theory exam?', a: 'Only partly. You need the major moral philosophies, but two-thirds of the questions apply them to workplace, privacy, and international scenarios rather than testing philosophy for its own sake.' },
      { q: 'How long should I study?', a: 'Three to four weeks is typical. If you have taken any management or business-law course, two weeks of focused review is often enough.' },
      { q: 'Will my school accept the credit?', a: 'Acceptance is title by title even at DSST-friendly schools. Ask the business department whether this exam clears the ethics requirement or only counts as an elective.' },
      { q: 'What happens if I fail?', a: 'You can retest after 30 days for the full $100 fee. Failed attempts are not reported to your college.' }
    ],
    summaryPoints: [
      'Applied business ethics across stakeholders, regulation, and employment',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Employer-employee relations is the single largest area at 20%',
      'Frequently accepted in place of a required business-ethics course'
    ],
    relatedSlugs: ['dsst-ethics-in-technology', 'dsst-introduction-to-business', 'dsst-human-resource-management'],
    sourceUrl: 'https://getcollegecredit.com/exam/business-ethics-and-society/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-business-mathematics',
    body: 'Prometric',
    tagline: 'Half the exam is applied business math — payroll, discounts, interest, depreciation.',
    description: 'DSST Business Mathematics is the most application-heavy math title in the catalog: 50% of the questions sit in business applications such as markup and markdown, discounts, payroll, taxes, depreciation, and inventory valuation. The rest splits between algebraic manipulation, descriptive statistics, and financial mathematics covering simple and compound interest, annuities, and present value. A non-programmable calculator is permitted, so the challenge is knowing which formula fits the scenario.',
    quickAnswer: {
      summary: 'DSST Business Mathematics is a 100-question, two-hour credit-by-exam test on applied business calculations, algebra, statistics, and financial math. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Half the exam is practical arithmetic most working adults already use',
        'Non-programmable calculator is permitted throughout',
        'Clears a quantitative requirement for many business programs',
        'Cheaper and faster than a semester of business math'
      ]
    },
    roadmap: ['Confirm it satisfies your quantitative requirement', 'Download the official content outline', 'Drill markup, discount, payroll, and depreciation problems', 'Review interest, annuities, and present value', 'Score 400 or higher to bank three credits'],
    prerequisites: 'Comfort with high-school algebra and percentages; no calculus is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Number Sense', weight: '5%', note: 'Fractions, decimals, percentages, estimation' },
      { name: 'Algebraic Concepts', weight: '15%', note: 'Equations, ratios, proportions, formulas' },
      { name: 'Statistics', weight: '16%', note: 'Descriptive measures, graphs, probability basics' },
      { name: 'Business Applications', weight: '50%', note: 'Markup, discounts, payroll, taxes, depreciation, inventory' },
      { name: 'Financial Mathematics', weight: '14%', note: 'Simple and compound interest, annuities, present value' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Calculator', 'Non-programmable calculator permitted'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the quantitative requirement it clears', duration: '1 week' },
      { stage: 'Drill the five content areas with practice sets', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Bring an approved non-programmable calculator, since not every site supplies one.'
    },
    difficulty: 'Moderate',
    audience: 'Business students and adult learners clearing a quantitative or business-math requirement',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Can I use a calculator?', a: 'Yes. A non-programmable calculator is permitted. Confirm with your test site whether one is provided or whether you must bring your own approved model.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher, usually posted as business mathematics or a quantitative elective.' },
      { q: 'How hard is the math?', a: 'It stops at algebra. The difficulty is recognizing which business formula a word problem calls for — depreciation method, discount series, or interest type — not the arithmetic itself.' },
      { q: 'How long should I study?', a: 'Three to five weeks of problem sets. People who work in accounting, retail, or payroll often need much less.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee each attempt.' }
    ],
    summaryPoints: [
      'Business applications alone make up 50% of the exam',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Non-programmable calculator permitted; algebra is the ceiling',
      'Covers interest, annuities, payroll, depreciation, and inventory'
    ],
    relatedSlugs: ['dsst-fundamentals-of-college-algebra', 'dsst-introduction-to-business'],
    sourceUrl: 'https://getcollegecredit.com/exam/business-mathematics/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-computing-and-information-technology',
    body: 'Prometric',
    tagline: 'One exam covers hardware, software, networks, and the social history of computing.',
    description: 'DSST Computing and Information Technology, formerly titled Introduction to Computing, surveys the material of a first college IT course. Four areas — hardware, application software, data communications and networks, and the social impact and history of computing — each carry a fifth of the exam, with systems software and software development filling the rest. The questions are broad rather than deep, so wide familiarity beats specialist knowledge of any one platform.',
    quickAnswer: {
      summary: 'DSST Computing and Information Technology is a 100-question, two-hour credit-by-exam test covering computer hardware, software, networking, development, and the social history of computing. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Clears an introductory computing or technology-literacy requirement',
        'Four equally weighted 20% areas make study planning simple',
        'Broad coverage rewards general IT familiarity over specialization',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school\'s computing requirement accepts it', 'Download the official content outline', 'Review hardware, networks, and application software', 'Study the social impact and history section', 'Score 400 or higher for three credits'],
    prerequisites: 'None — general familiarity with computers and office software is enough to start.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Computer Organization and Hardware', weight: '20%', note: 'CPU, memory, storage, peripherals' },
      { name: 'Systems Software', weight: '10%', note: 'Operating systems, utilities, file management' },
      { name: 'Application Software', weight: '20%', note: 'Productivity suites, databases, specialized apps' },
      { name: 'Data Communications and Networks', weight: '20%', note: 'Topologies, protocols, the internet, wireless' },
      { name: 'Software Development', weight: '10%', note: 'Programming concepts, SDLC, testing' },
      { name: 'Social Impact and History', weight: '20%', note: 'Computing history, ethics, privacy, society' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Also known as', 'DSST Introduction to Computing'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the computing requirement it satisfies', duration: '1 week' },
      { stage: 'Study the six content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Published content weights differ slightly between the DSST fact sheet and the ACE National Guide entry.'
    },
    difficulty: 'Moderate',
    audience: 'IT and business students clearing an introductory computing requirement',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this the same as Introduction to Computing?', a: 'Yes. DSST renamed Introduction to Computing to Computing and Information Technology; older school credit policies may still list the previous title.' },
      { q: 'What score do I need?', a: 'ACE recommends 400 on the 200-500 scale for 3 semester hours. Check whether your school posts it as an IT course or a general elective.' },
      { q: 'Do I need programming experience?', a: 'No. Software development is only 10% of the exam and tests concepts such as the development lifecycle and language categories, not writing code.' },
      { q: 'How long should I study?', a: 'Three to four weeks for most people. Anyone with an IT support background or a CompTIA certification often needs only a review pass.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day waiting period, paying the full $100 fee again.' }
    ],
    summaryPoints: [
      'Formerly titled DSST Introduction to Computing',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Hardware, application software, networks, and social impact are 20% each',
      'No programming experience required'
    ],
    relatedSlugs: ['dsst-fundamentals-of-cybersecurity', 'dsst-ethics-in-technology'],
    sourceUrl: 'https://getcollegecredit.com/exam/computing-and-information-technology/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-criminal-justice',
    body: 'Prometric',
    tagline: 'Test out of intro criminal justice — police, courts, and corrections in one sitting.',
    description: 'DSST Criminal Justice mirrors a first-semester survey of the American criminal justice system. A quarter of the exam covers the system as a whole — its structure, process, and the flow of a case from arrest to disposition — with police, courts, and corrections each taking a fifth and criminal behavior theory the remaining 15%. It suits working officers, corrections staff, and military police who already know the vocabulary and want the credit without the seat time.',
    quickAnswer: {
      summary: 'DSST Criminal Justice is a 100-question, two-hour credit-by-exam test covering criminological theory, system structure, policing, courts, and corrections. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Strong fit for people already working in law enforcement or corrections',
        'Four of the five content areas are practical system knowledge',
        'Replaces an introductory criminal justice course for about $120',
        'Available year-round rather than once a term'
      ]
    },
    roadmap: ['Confirm your program accepts it for the intro course', 'Download the official content outline', 'Review criminological theory, the weakest area for practitioners', 'Study court process and sentencing structures', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no prior coursework or law-enforcement experience is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Criminal Behavior', weight: '15%', note: 'Theories of crime, measurement, typologies' },
      { name: 'Criminal Justice System', weight: '25%', note: 'Structure, process, victims, due process' },
      { name: 'Police', weight: '20%', note: 'Organization, patrol, investigation, discretion' },
      { name: 'Court System', weight: '20%', note: 'Prosecution, defense, pretrial, trial, sentencing' },
      { name: 'Corrections', weight: '20%', note: 'Prisons, jails, probation, parole, reentry' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm your program accepts the title', duration: '1 week' },
      { stage: 'Study the five content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Many military education centers and academy programs cover both.'
    },
    difficulty: 'Moderate',
    audience: 'Criminal justice majors, officers, corrections staff, and military police',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400. Many criminal justice programs accept it for the introductory survey course.' },
      { q: 'Is field experience enough to pass?', a: 'Often not on its own. Practitioners tend to lose points on criminological theory and court procedure outside their own jurisdiction, so review those two areas specifically.' },
      { q: 'How long should I study?', a: 'Three to four weeks. Experienced officers frequently pass with a one- to two-week theory refresher.' },
      { q: 'Will my school accept the credit?', a: 'DSST is accepted at roughly 1,900 institutions, but each approves specific titles. Confirm with the criminal justice department before paying.' },
      { q: 'What if I fail?', a: 'Wait 30 days and retest at the full $100 fee. The failed attempt is not posted to your college transcript.' }
    ],
    summaryPoints: [
      'Survey of criminal behavior, system structure, police, courts, and corrections',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'System structure and process is the largest area at 25%',
      'Popular with working officers and military police'
    ],
    relatedSlugs: ['dsst-a-history-of-the-vietnam-war', 'dsst-fundamentals-of-counseling'],
    sourceUrl: 'https://getcollegecredit.com/exam/criminal-justice/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-environmental-science',
    body: 'Prometric',
    tagline: 'Ecology, pollution, and policy in one two-hour science credit with no lab required.',
    description: 'DSST Environmental Science, previously titled Environment and Humanity: The Race to Save the Planet, tests the content of an introductory environmental science course. Ecological concepts carry the largest share at 30%, covering ecosystems, energy flow, biogeochemical cycles, biomes, and succession. The remainder splits across habitat destruction and pollution, resource management and conservation practice, and the social side of environmental law, policy, and competing cultural values.',
    quickAnswer: {
      summary: 'DSST Environmental Science is a 100-question, two-hour credit-by-exam test on ecosystems, pollution, resource management, and environmental policy. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Satisfies a non-lab natural-science requirement at many schools',
        'Four clean content areas with predictable weighting',
        'Concept-driven rather than calculation-heavy',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Confirm it counts toward your science requirement', 'Download the official content outline', 'Master ecological concepts, the largest 30% block', 'Review pollution, conservation, and policy', 'Score 400 or higher for three credits'],
    prerequisites: 'None — high-school biology is helpful but not assumed.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Ecological Concepts', weight: '30%', note: 'Ecosystems, energy flow, cycles, biomes, succession' },
      { name: 'Habitat Destruction', weight: '25%', note: 'Population, climate, ozone, pollution, desertification' },
      { name: 'Environmental Management and Conservation', weight: '25%', note: 'Resources, agriculture, waste, water, risk assessment' },
      { name: 'Social Processes and the Environment', weight: '20%', note: 'Law, policy, ethics, international agreements' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Former title', 'Environment and Humanity: The Race to Save the Planet'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Verify it satisfies your science requirement', duration: '1 week' },
      { stage: 'Study the four content areas', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Older credit policies may still list the exam as Environment and Humanity.'
    },
    difficulty: 'Moderate',
    audience: 'Students filling a non-lab science or sustainability requirement',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this the same as Environment and Humanity?', a: 'Yes. DSST renamed Environment and Humanity: The Race to Save the Planet to Environmental Science, so older school credit lists may still show the previous title.' },
      { q: 'What score do I need for credit?', a: 'ACE recommends 400 on the 200-500 scale for 3 semester hours. Individual colleges can require more, so verify before you register.' },
      { q: 'Does it count as a lab science?', a: 'Generally no. Most schools post it as a non-lab natural-science credit, which covers many general-education requirements but not science-major lab hours.' },
      { q: 'How long should I study?', a: 'Three to five weeks. If you have taken biology or earth science recently, two to three weeks of review is usually enough.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee. Failed attempts are not reported to your college.' }
    ],
    summaryPoints: [
      'Formerly Environment and Humanity: The Race to Save the Planet',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Ecological concepts are the largest block at 30%',
      'Non-lab natural-science credit at most accepting schools'
    ],
    relatedSlugs: ['dsst-astronomy', 'dsst-introduction-to-geography', 'dsst-health-and-human-development'],
    sourceUrl: 'https://getcollegecredit.com/exam/environmental-science/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-ethics-in-america',
    body: 'Prometric',
    tagline: 'Half the exam is applying ethical theory to real cases, not reciting philosophers.',
    description: 'DSST Ethics in America asks you to recognize the major ethical traditions — virtue ethics, deontology, utilitarianism, natural law, social contract, and relativism — and then apply them to concrete moral problems in American public and professional life. Half the questions are pure applied analysis of real-world issues, with another 35% on the traditions themselves and 15% on contemporary foundational questions such as moral relativism and the sources of moral authority.',
    quickAnswer: {
      summary: 'DSST Ethics in America is a 100-question, two-hour credit-by-exam test on ethical traditions and their application to contemporary moral problems. A scaled score of 400 earns the ACE recommendation of 3 semester hours in ethics or philosophy.',
      advantages: [
        'Frequently clears a philosophy or humanities general-education slot',
        'Half the exam rewards reasoning rather than memorization',
        'Only three content areas to prepare',
        'Costs about $120 against a full semester of tuition'
      ]
    },
    roadmap: ['Check which requirement it satisfies at your school', 'Download the official content outline', 'Learn the six major ethical traditions cold', 'Practice applying each tradition to case scenarios', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no prior philosophy coursework is assumed.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Contemporary Foundational Issues', weight: '15%', note: 'Relativism, moral authority, ethical language' },
      { name: 'Ethical Traditions', weight: '35%', note: 'Virtue, natural law, deontology, utilitarianism, social contract' },
      { name: 'Ethical Analysis of Real World Issues', weight: '50%', note: 'Applied cases in law, medicine, business, and civic life' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the requirement it satisfies', duration: '1 week' },
      { stage: 'Learn the ethical traditions', duration: '2-3 weeks' },
      { stage: 'Drill applied case scenarios', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Peterson\'s and EBSCO practice tests are linked from the official exam page.'
    },
    difficulty: 'Moderate',
    audience: 'Students clearing a philosophy, ethics, or humanities general-education requirement',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400. Schools usually post it as an ethics or philosophy general-education credit.' },
      { q: 'Do I need to know philosophers by name?', a: 'Recognizing the major figures behind each tradition helps, but half the exam is applying the frameworks to cases. Understanding how each tradition reaches a conclusion matters more than biography.' },
      { q: 'How long should I study?', a: 'Three to four weeks. Two weeks on the traditions and one to two weeks of applied practice questions is a reliable split.' },
      { q: 'Will my college accept the credit?', a: 'Acceptance is decided title by title. Ask the philosophy department or registrar whether this exam clears the ethics requirement or counts only as an elective.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after 30 days, paying the full $100 fee again. Nothing appears on your transcript for a failed attempt.' }
    ],
    summaryPoints: [
      'Half the exam is applied ethical analysis of real-world issues',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Only three content areas, led by ethical traditions at 35%',
      'Common route to a philosophy or humanities credit'
    ],
    relatedSlugs: ['dsst-business-ethics-and-society', 'dsst-ethics-in-technology'],
    sourceUrl: 'https://getcollegecredit.com/exam/ethics-in-america/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-ethics-in-technology',
    body: 'Prometric',
    tagline: 'Privacy, cybercrime, IP, and professional duty — five near-equal blocks worth three credits.',
    description: 'DSST Ethics in Technology examines the moral and legal questions that arise from computing and networked systems. The exam is unusually evenly weighted: cyberspace and privacy, domestic and international security, and legal issues in cyberspace each carry 21%, with professional ethics at 20% and technological innovation at 17%. Expect intellectual property, surveillance, data protection, computer crime, and the codes of conduct that govern IT professionals rather than abstract philosophy.',
    quickAnswer: {
      summary: 'DSST Ethics in Technology is a 100-question, two-hour credit-by-exam test on privacy, security, cyberlaw, innovation, and professional responsibility in technology. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Often accepted for an IT ethics or professional-issues requirement',
        'Five near-equal content blocks make pacing straightforward',
        'Overlaps heavily with security and privacy training many IT workers already have',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your IT program accepts the title', 'Download the official content outline', 'Study privacy, IP, and cybercrime law', 'Review professional codes such as ACM and IEEE', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though familiarity with IT concepts and basic law is helpful.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Cyberspace and Privacy', weight: '21%', note: 'Data protection, surveillance, anonymity' },
      { name: 'Domestic and International Security', weight: '21%', note: 'Cyberwar, terrorism, national security tradeoffs' },
      { name: 'Legal Issues in Cyberspace', weight: '21%', note: 'Intellectual property, computer crime, jurisdiction' },
      { name: 'Technological Innovation and Ethics', weight: '17%', note: 'Emerging tech, automation, social consequences' },
      { name: 'Professional Ethics', weight: '20%', note: 'Codes of conduct, whistleblowing, responsibility' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the requirement it clears', duration: '1 week' },
      { stage: 'Study the five content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Content weights come from the DSST fact sheet revised June 2018.'
    },
    difficulty: 'Moderate',
    audience: 'IT, cybersecurity, and computer science students needing an ethics credit',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How is this different from Business Ethics and Society?', a: 'Ethics in Technology focuses on computing — privacy, IP, cybercrime, and IT professional codes. Business Ethics and Society covers corporate governance, CSR, and employment ethics across all industries.' },
      { q: 'What score do I need?', a: 'ACE recommends 400 on the 200-500 scale for 3 semester hours. Some programs set a higher internal minimum, so confirm first.' },
      { q: 'Do I need a legal background?', a: 'No. You need working familiarity with copyright, patents, computer-crime statutes, and privacy regulation at a survey level, not case-law depth.' },
      { q: 'How long should I study?', a: 'Three to four weeks. Security professionals who handle privacy and compliance daily often need only a week or two.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day waiting period, at the full $100 fee.' }
    ],
    summaryPoints: [
      'Five near-equal blocks spanning privacy, security, law, innovation, and professional duty',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Strong overlap with IT compliance and privacy training',
      'Often accepted for an IT professional-issues requirement'
    ],
    relatedSlugs: ['dsst-fundamentals-of-cybersecurity', 'dsst-computing-and-information-technology', 'dsst-ethics-in-america'],
    sourceUrl: 'https://getcollegecredit.com/exam/ethics-in-technology/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-foundations-of-education',
    body: 'Prometric',
    tagline: 'Half the exam is contemporary school issues — equity, governance, curriculum, technology.',
    description: 'DSST Foundations of Education covers what a first education course teaches future teachers: the philosophies and social forces that shaped American schooling, and the issues facing schools now. Contemporary issues dominate at 50%, covering equity, governance, curriculum, professional questions, and technology. Past and current influences take 30%, and the final fifth asks you to connect the two — tradition versus progress, national versus local control, secular versus religious, and civil rights.',
    quickAnswer: {
      summary: 'DSST Foundations of Education is a 100-question, two-hour credit-by-exam test on the history, philosophy, governance, and current issues of American schooling. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Common substitute for an introductory education course',
        'Half the exam is present-day school issues rather than history',
        'Useful for paraprofessionals and career changers entering teaching',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Ask the education department whether it substitutes for the intro course', 'Download the official content outline', 'Study contemporary issues, the 50% block', 'Review educational philosophies and social influences', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no teaching experience or education coursework is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Contemporary Issues in Education', weight: '50%', note: 'Equity, governance, curriculum, professional and technology issues' },
      { name: 'Past and Current Influences on Education', weight: '30%', note: 'Philosophies, democratic ideals, social and economic forces' },
      { name: 'Interrelationships Between Contemporary Issues and Influences', weight: '20%', note: 'Tradition vs progress, national vs local control, civil rights' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm it substitutes for the intro course', duration: '1-2 weeks' },
      { stage: 'Study the three content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Teacher-preparation programs sometimes restrict credit by exam for required education courses.'
    },
    difficulty: 'Moderate',
    audience: 'Education majors, paraprofessionals, and career changers entering teaching',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Will an education program accept this for the intro course?', a: 'Some will, but teacher-preparation programs are stricter than most about credit by exam for required courses. Confirm with the education department before you register.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher.' },
      { q: 'How much history is on it?', a: 'Less than the title suggests. Half the questions are on present-day issues such as equity, governance, curriculum, and technology; historical philosophy is 30%.' },
      { q: 'How long should I study?', a: 'Three to four weeks. Classroom aides and substitute teachers often need less because the contemporary-issues block is familiar.' },
      { q: 'Can I retake it?', a: 'Yes, after 30 days, at the full $100 fee each attempt.' }
    ],
    summaryPoints: [
      'Contemporary school issues carry 50% of the exam',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Covers educational philosophy, governance, equity, and civil rights',
      'Verify acceptance with teacher-preparation programs specifically'
    ],
    relatedSlugs: ['dsst-fundamentals-of-counseling', 'dsst-general-anthropology'],
    sourceUrl: 'https://getcollegecredit.com/exam/foundations-of-education/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-fundamentals-of-college-algebra',
    body: 'Prometric',
    tagline: 'Clear the college algebra requirement in two hours with a calculator on the desk.',
    description: 'DSST Fundamentals of College Algebra covers a standard college algebra course across eleven weighted areas. Functions dominate at 20%, followed by two-dimensional graphing at 14% and linear and quadratic equations at 12% each. Smaller blocks handle factoring, rational expressions, radicals, absolute value, and complex numbers. A non-programmable calculator is permitted, and the exam rewards fluent manipulation and graph interpretation over memorized special cases.',
    quickAnswer: {
      summary: 'DSST Fundamentals of College Algebra is a 100-question, two-hour credit-by-exam test covering equations, inequalities, functions, exponents, logarithms, and graphing. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Clears the college algebra prerequisite blocking many degree plans',
        'Non-programmable calculator permitted throughout',
        'Eleven clearly weighted areas make gap analysis easy',
        'About $120 against a full semester of tuition'
      ]
    },
    roadmap: ['Confirm college algebra credit by exam is allowed', 'Download the official content outline', 'Diagnose weak areas with a practice test', 'Drill functions and graphing, the largest 34%', 'Score 400 or higher to bank three credits'],
    prerequisites: 'Solid intermediate algebra; the exam assumes fluency with high-school algebra II material.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Fundamental Algebraic Operations', weight: '4%', note: 'Order of operations, polynomial arithmetic' },
      { name: 'Factoring Polynomials over Real Numbers', weight: '6%', note: 'Common factors, trinomials, special forms' },
      { name: 'Rational Expressions', weight: '7%', note: 'Simplifying, operations, complex fractions' },
      { name: 'Exponential and Radical Expressions', weight: '8%', note: 'Laws of exponents, rational exponents' },
      { name: 'Linear Equations', weight: '12%', note: 'Solving, systems, applications' },
      { name: 'Absolute Value Equations and Inequalities', weight: '6%', note: 'Solution sets and interval notation' },
      { name: 'Quadratic Equations and Inequalities', weight: '12%', note: 'Factoring, formula, completing the square' },
      { name: 'Equations Involving Radicals', weight: '6%', note: 'Isolating radicals, extraneous roots' },
      { name: 'Complex Numbers', weight: '5%', note: 'Conjugates and basic operations' },
      { name: 'Functions', weight: '20%', note: 'Domain, range, composition, inverses, logarithms' },
      { name: 'Two Dimensional Graphing', weight: '14%', note: 'Lines, parabolas, transformations, conics' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Calculator', 'Non-programmable calculator permitted'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm credit by exam is allowed for algebra', duration: '1 week' },
      { stage: 'Take a diagnostic practice test', duration: '1 day' },
      { stage: 'Drill weak areas, especially functions and graphing', duration: '4-6 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Bring an approved non-programmable calculator, since not every site supplies one.'
    },
    difficulty: 'Moderate to hard',
    audience: 'Students clearing a college algebra prerequisite or quantitative requirement',
    time: '4-6 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Can I use a calculator?', a: 'Yes, a non-programmable calculator is permitted. Check with your test site about whether one is supplied or you should bring an approved model.' },
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400, typically posted as college algebra.' },
      { q: 'Is it harder than other DSSTs?', a: 'For most people, yes. It is a skills exam, so you cannot pass on general familiarity — you need to work problems until the manipulations are automatic.' },
      { q: 'How long should I study?', a: 'Four to six weeks of daily practice if your algebra is rusty. Take a diagnostic first, then target the function and graphing blocks that carry 34% together.' },
      { q: 'What if I fail?', a: 'Retake after 30 days for the full $100 fee. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Eleven weighted areas led by functions at 20% and graphing at 14%',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Non-programmable calculator permitted',
      'A skills exam — problem practice matters more than reading'
    ],
    relatedSlugs: ['dsst-business-mathematics', 'dsst-astronomy'],
    sourceUrl: 'https://getcollegecredit.com/exam/fundamentals-of-college-algebra/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-fundamentals-of-counseling',
    body: 'Prometric',
    tagline: 'Counselor roles and theoretical approaches carry 40% of this three-credit exam.',
    description: 'DSST Fundamentals of Counseling maps an introductory counseling course. Counselor roles and functions and theoretical approaches each carry 20%, with the counseling relationship and social and cultural foundations at 15% each. Smaller blocks cover the field\'s historical development, career development, human growth across the lifespan, and assessment and appraisal techniques including diagnostic classification. It suits human-services, social work, and psychology students who already know the vocabulary.',
    quickAnswer: {
      summary: 'DSST Fundamentals of Counseling is a 100-question, two-hour credit-by-exam test on counseling theories, the helping relationship, cultural foundations, assessment, and ethics. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Fits human-services, psychology, and social-work degree plans',
        'Theory and counselor roles are 40% and highly predictable',
        'No practicum or supervised hours involved',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Confirm your program accepts it for the intro course', 'Download the official content outline', 'Learn the major theoretical approaches', 'Review assessment, ethics, and multicultural foundations', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though an introductory psychology course makes the theory sections easier.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Historical Development', weight: '5%', note: 'Origins and evolution of the counseling profession' },
      { name: 'Counselor Roles and Functions', weight: '20%', note: 'Settings, credentialing, ethics, professional identity' },
      { name: 'The Counseling Relationship', weight: '15%', note: 'Rapport, stages, communication skills' },
      { name: 'Theoretical Approaches', weight: '20%', note: 'Psychodynamic, behavioral, cognitive, humanistic, family' },
      { name: 'Social and Cultural Foundations', weight: '15%', note: 'Multicultural competence, diversity, advocacy' },
      { name: 'Career Development', weight: '7%', note: 'Career theories and vocational counseling' },
      { name: 'Human Growth and Development', weight: '8%', note: 'Child, adolescent, and adult development' },
      { name: 'Assessment and Appraisal Techniques', weight: '10%', note: 'Testing, measurement, diagnostic classification' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm your program accepts the title', duration: '1-2 weeks' },
      { stage: 'Study the eight content areas', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Counseling programs may restrict credit by exam for courses in the licensure sequence.'
    },
    difficulty: 'Moderate',
    audience: 'Human-services, psychology, and social-work students plus helping-profession staff',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Does this count toward counselor licensure?', a: 'It earns general college credit, not licensure hours. Graduate counseling licensure requires accredited coursework and supervised practice, so treat this as an undergraduate survey credit.' },
      { q: 'What score do I need?', a: 'ACE recommends 400 on the 200-500 scale for 3 semester hours. Programs in a licensure sequence may set stricter internal rules.' },
      { q: 'How long should I study?', a: 'Three to five weeks. If you have had introductory psychology, focus on theoretical approaches and assessment and cut that to two or three weeks.' },
      { q: 'Will my school accept the credit?', a: 'Acceptance is title by title. Ask the human-services or psychology department whether it substitutes for the intro counseling course.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee each attempt.' }
    ],
    summaryPoints: [
      'Counselor roles and theoretical approaches carry 20% each',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Includes multicultural foundations, career development, and assessment',
      'Earns college credit, not licensure hours'
    ],
    relatedSlugs: ['dsst-foundations-of-education', 'dsst-health-and-human-development', 'dsst-human-resource-management'],
    sourceUrl: 'https://getcollegecredit.com/exam/fundamentals-of-counseling/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-fundamentals-of-cybersecurity',
    body: 'Prometric',
    tagline: 'Seven security domains, two hours, three credits — and heavy overlap with Security+.',
    description: 'DSST Fundamentals of Cybersecurity spans seven weighted domains that will look familiar to anyone holding an entry-level security certification. Network security leads at 19%, followed by applications and systems security at 17% and operational security and vulnerability management at 15% each. Authentication and authorization, compliance and governance, and physical and environmental security round it out. The exam tests conceptual command of defensive practice rather than vendor-specific configuration.',
    quickAnswer: {
      summary: 'DSST Fundamentals of Cybersecurity is a 100-question, two-hour credit-by-exam test covering network and systems security, access control, governance, operations, and vulnerability management. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Overlaps closely with CompTIA Security+ domain knowledge',
        'Turns existing security experience into transcript credit',
        'Seven domains with published weights simplify a study plan',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your program accepts the title for credit', 'Download the official content outline', 'Map your Security+ knowledge onto the seven domains', 'Shore up governance, compliance, and physical security', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though IT fundamentals or an entry-level security certification makes preparation much faster.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Applications and Systems Security', weight: '17%', note: 'Secure development, hardening, malware' },
      { name: 'Authentication and Authorization', weight: '13%', note: 'Identity, access control models, credentials' },
      { name: 'Compliance and Governance', weight: '13%', note: 'Frameworks, regulation, policy, audit' },
      { name: 'Operational Security', weight: '15%', note: 'Monitoring, incident response, continuity' },
      { name: 'Network Security', weight: '19%', note: 'Firewalls, segmentation, protocols, cryptography in transit' },
      { name: 'Physical and Environmental Security', weight: '8%', note: 'Facility controls, media handling, environmental risk' },
      { name: 'Vulnerability Management', weight: '15%', note: 'Scanning, patching, risk assessment, remediation' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Overlap', 'Substantial with CompTIA Security+ domains'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the credit your program will post', duration: '1 week' },
      { stage: 'Study the seven domains', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Military education centers frequently cover both for eligible members.'
    },
    difficulty: 'Moderate',
    audience: 'IT and cybersecurity students, and security practitioners converting experience into credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this equivalent to Security+?', a: 'No. Security+ is an industry certification; this DSST is a college credit exam. The domains overlap heavily, so Security+ holders usually need only a short review, but the two credentials serve different purposes.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher, generally posted as an introductory cybersecurity course.' },
      { q: 'How long should I study?', a: 'Three to five weeks from scratch, or one to two weeks if you hold a current entry-level security certification.' },
      { q: 'Will my school accept it?', a: 'Cybersecurity programs vary in how they treat credit by exam for major coursework. Confirm with the department whether it clears a required course or an elective.' },
      { q: 'Can I retake it?', a: 'Yes, after 30 days, paying the full $100 fee again.' }
    ],
    summaryPoints: [
      'Seven weighted domains led by network security at 19%',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Strong overlap with entry-level security certification content',
      'Conceptual defense knowledge, not vendor-specific configuration'
    ],
    relatedSlugs: ['dsst-computing-and-information-technology', 'dsst-ethics-in-technology'],
    sourceUrl: 'https://getcollegecredit.com/exam/fundamentals-of-cybersecurity/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-general-anthropology',
    body: 'Prometric',
    tagline: 'All four anthropology subfields in one exam, with no single block above 14%.',
    description: 'DSST General Anthropology surveys the discipline\'s four subfields — physical anthropology, archaeology, linguistics, and cultural anthropology — plus applied work. The weighting is unusually flat, with cultural systems and processes the largest area at 14% and physical anthropology next at 13%. That balance means you cannot skip a subfield: expect genetics and human evolution alongside kinship, religion, economic and political organization, and cultural change.',
    quickAnswer: {
      summary: 'DSST General Anthropology is a 100-question, two-hour credit-by-exam test covering physical anthropology, archaeology, linguistics, and cultural anthropology. A scaled score of 400 earns the ACE recommendation of 3 semester hours in social science.',
      advantages: [
        'Satisfies a social-science general-education requirement',
        'Nine evenly weighted areas — no single subfield dominates',
        'Concept and vocabulary driven with no math',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Confirm it satisfies your social-science requirement', 'Download the official content outline', 'Cover all four subfields, not just cultural', 'Review kinship, religion, and economic organization terms', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no prior anthropology or biology coursework is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Anthropology: Methodologies and Disciplines', weight: '8%', note: 'The four subfields plus applied anthropology' },
      { name: 'History and Theory', weight: '11%', note: 'Ethnography, gender, race and ethnicity, cultural ecology' },
      { name: 'Physical Anthropology', weight: '13%', note: 'Genetics, evolution, primates, human variation' },
      { name: 'Archaeology', weight: '10%', note: 'Methods, dating, prehistory, material culture' },
      { name: 'Cultural Systems and Processes', weight: '14%', note: 'Language, enculturation, cultural change' },
      { name: 'Social Organization', weight: '10%', note: 'Kinship, marriage, descent, stratification' },
      { name: 'Economic and Political Organization', weight: '11%', note: 'Subsistence, exchange, political systems, globalization' },
      { name: 'Religion', weight: '11%', note: 'Belief systems, ritual, practitioners' },
      { name: 'Modernization and Application', weight: '12%', note: 'Applied work, cultural preservation, directed change' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the social-science requirement it clears', duration: '1 week' },
      { stage: 'Study the nine content areas', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Peterson\'s and EBSCO practice tests are linked from the official exam page.'
    },
    difficulty: 'Moderate',
    audience: 'Students filling a social-science general-education requirement',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400, usually posted as a social-science or anthropology credit.' },
      { q: 'Do I need biology for the physical anthropology section?', a: 'Only basic genetics — dominant and recessive traits, natural selection, and primate classification. That block is 13% of the exam and is the most common weak spot.' },
      { q: 'How long should I study?', a: 'Three to five weeks. The flat weighting means you should budget time across all four subfields rather than deep-diving cultural anthropology alone.' },
      { q: 'Will my college accept the credit?', a: 'DSST is accepted at roughly 1,900 institutions, but each approves specific titles. Confirm this one is on your school\'s list before registering.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee each attempt.' }
    ],
    summaryPoints: [
      'Covers all four anthropology subfields plus applied work',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Flat weighting — the largest block is only 14%',
      'Common social-science general-education credit'
    ],
    relatedSlugs: ['dsst-introduction-to-geography', 'dsst-foundations-of-education'],
    sourceUrl: 'https://getcollegecredit.com/exam/general-anthropology/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-health-and-human-development',
    body: 'Prometric',
    tagline: 'One of the most approachable DSSTs — general health knowledge for three credits.',
    description: 'DSST Health and Human Development, long known as Here\'s to Your Health, covers a general college health course. Three blocks carry 20% each: wellness and the mind-body connection, human development and relationships, and risk factors and disease prevention. Fitness and nutrition plus safety, consumer awareness, and environmental concerns take 15% each, and substance use and abuse 10%. The breadth is wide but the depth is shallow, which makes it a frequent first DSST.',
    quickAnswer: {
      summary: 'DSST Health and Human Development is a 100-question, two-hour credit-by-exam test on wellness, human development, substance use, fitness and nutrition, disease prevention, and safety. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Often clears a health, wellness, or physical-education requirement',
        'No scientific or clinical background needed',
        'Broad but shallow coverage suits a short study window',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm which requirement the credit satisfies', 'Download the official content outline', 'Study the three 20% blocks first', 'Drill disease, nutrition, and substance vocabulary', 'Score 400 or higher for three credits'],
    prerequisites: 'None — general life knowledge of health topics is enough to start.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Health, Wellness, and Mind/Body Connection', weight: '20%', note: 'Lifestyle, mental health, stress, addictive behaviors' },
      { name: 'Human Development and Relationships', weight: '20%', note: 'Reproduction, sexuality, aging, death and bereavement' },
      { name: 'Substance Use and Abuse', weight: '10%', note: 'Alcohol, tobacco, other drugs, use behaviors' },
      { name: 'Fitness and Nutrition', weight: '15%', note: 'Fitness components, nutrition and its effects' },
      { name: 'Risk Factors, Disease, and Disease Prevention', weight: '20%', note: 'Infectious disease, cardiovascular, cancer, chronic disorders' },
      { name: 'Safety, Consumer Awareness, and Environmental Concerns', weight: '15%', note: 'Injury prevention, violence, consumer and environmental health' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Former title', 'Here\'s to Your Health'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the requirement it satisfies', duration: '1 week' },
      { stage: 'Study the six content areas', duration: '2-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Older school credit lists may still show the title Here\'s to Your Health.'
    },
    difficulty: 'Easy to moderate',
    audience: 'Students clearing a health, wellness, or physical-education requirement',
    time: '2-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this the same as Here\'s to Your Health?', a: 'Yes. The exam was renamed Health and Human Development, and some school credit policies still list the older title.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher, generally posted as a health or wellness credit.' },
      { q: 'How hard is it?', a: 'It is considered one of the easier DSSTs because the content is general health knowledge rather than clinical detail. The disease and risk-factor block is where most points are lost.' },
      { q: 'How long should I study?', a: 'Two to four weeks. Focus on disease terminology, nutrition specifics, and the human-development block, which is broader than most people expect.' },
      { q: 'Can I retake it?', a: 'Yes, after 30 days, at the full $100 fee. A failed attempt does not appear on your transcript.' }
    ],
    summaryPoints: [
      'Formerly titled Here\'s to Your Health',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Three blocks at 20% each: wellness, human development, disease prevention',
      'Widely regarded as one of the more approachable DSST titles'
    ],
    relatedSlugs: ['dsst-fundamentals-of-counseling', 'dsst-environmental-science'],
    sourceUrl: 'https://getcollegecredit.com/exam/health/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-history-of-the-soviet-union',
    body: 'Prometric',
    tagline: 'From the tsars to 1991 — reform and collapse alone is a fifth of the exam.',
    description: 'DSST History of the Soviet Union traces Russia from the late imperial period through revolution, Stalinism, the Great Patriotic War, the Khrushchev thaw, the Brezhnev stagnation, and the Gorbachev reforms that ended the USSR. Reform and collapse is the heaviest block at 20%, with the Second World War at 14% and pre-war Stalinism at 13%. The exam asks about causes, policies, and consequences rather than battlefield or biographical detail.',
    quickAnswer: {
      summary: 'DSST History of the Soviet Union is a 100-question, two-hour credit-by-exam test covering Russian and Soviet history from the old regime to the 1991 collapse. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Covers a European or world-history requirement in one sitting',
        'Chronological structure with published weights per era',
        'Rewards understanding of policy and causation over dates',
        'Available year-round rather than once a term'
      ]
    },
    roadmap: ['Confirm your school accepts the title for history credit', 'Download the official content outline', 'Work era by era from the old regime to 1991', 'Concentrate on reform and collapse, the 20% block', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though a background in modern European history makes the material easier.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Russia Under the Old Regime', weight: '10%', note: 'Late imperial society, reform, and unrest' },
      { name: 'The Revolutionary Period 1914-1921', weight: '12%', note: 'War, 1917 revolutions, civil war, war communism' },
      { name: 'Pre-War Stalinism', weight: '13%', note: 'Collectivization, five-year plans, purges' },
      { name: 'The Second World War', weight: '14%', note: 'Nazi-Soviet Pact, invasion, mobilization, victory' },
      { name: 'Postwar Stalinism', weight: '11%', note: 'Reconstruction, Cold War origins, late Stalin repression' },
      { name: 'The Khrushchev Years', weight: '10%', note: 'De-Stalinization, thaw, Cuban Missile Crisis' },
      { name: 'The Brezhnev Era', weight: '10%', note: 'Stagnation, detente, dissent, Afghanistan' },
      { name: 'Reform and Collapse', weight: '20%', note: 'Gorbachev, glasnost, perestroika, 1991 dissolution' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Also known as', 'Rise and Fall of the Soviet Union'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the history requirement it clears', duration: '1 week' },
      { stage: 'Study the eight eras in order', duration: '4-6 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Older credit lists may show the title Rise and Fall of the Soviet Union.'
    },
    difficulty: 'Moderate to hard',
    audience: 'History majors and students filling a European or world-history requirement',
    time: '4-6 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this the same as Rise and Fall of the Soviet Union?', a: 'Yes. The exam has appeared under both titles, so check for either name on your school\'s approved credit-by-exam list.' },
      { q: 'What score do I need?', a: 'ACE recommends 400 on the 200-500 scale for 3 semester hours. Some history departments set a higher internal bar for major credit.' },
      { q: 'How hard is it compared with other DSSTs?', a: 'Harder than average. The content is dense and unfamiliar to most Americans, so plan on reading a full survey text rather than relying on flashcards alone.' },
      { q: 'How long should I study?', a: 'Four to six weeks. Weight your time toward reform and collapse, the war years, and pre-war Stalinism, which together are 47% of the exam.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day waiting period, paying the full $100 fee again.' }
    ],
    summaryPoints: [
      'Eight chronological eras from the old regime to the 1991 collapse',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Reform and collapse is the heaviest block at 20%',
      'Also listed by some schools as Rise and Fall of the Soviet Union'
    ],
    relatedSlugs: ['dsst-a-history-of-the-vietnam-war', 'dsst-art-of-the-western-world'],
    sourceUrl: 'https://getcollegecredit.com/exam/history-of-the-soviet-union/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-human-resource-management',
    body: 'Prometric',
    tagline: 'Ten HR functions, 99 questions, and employment law as the single biggest block.',
    description: 'DSST Human Resource Management covers the full HR function as taught in an introductory course: planning, staffing, training, performance appraisal, compensation, safety and health, labor relations, and current trends. Employment law is the largest single area at 15%, reflecting how much of the job is regulatory. Uniquely among DSST titles, this exam contains 99 questions rather than 100, still answered within the standard two hours.',
    quickAnswer: {
      summary: 'DSST Human Resource Management is a 99-question, two-hour credit-by-exam test covering HR planning, staffing, training, appraisal, compensation, safety, employment law, and labor relations. A score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Frequently accepted for the introductory HR course in business degrees',
        'Overlaps with SHRM and HRCI foundational knowledge',
        'Ten clearly weighted functions make a study plan straightforward',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your business program accepts the title', 'Download the official content outline', 'Study employment law, the largest 15% block', 'Review compensation, staffing, and appraisal methods', 'Score 400 or higher for three credits'],
    prerequisites: 'None, though an introductory management course or HR work experience helps.',
    examMeta: {
      questions: '99 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'An Overview of the Human Resource Management Field', weight: '10%', note: 'History, functions, motivation, leadership, ethics' },
      { name: 'Human Resource Planning', weight: '8%', note: 'Strategic HR, job analysis, job design' },
      { name: 'Staffing', weight: '10%', note: 'Recruiting, selection, placement' },
      { name: 'Training and Development', weight: '8%', note: 'Needs analysis, methods, evaluation' },
      { name: 'Performance Appraisals', weight: '10%', note: 'Methods, rater errors, feedback' },
      { name: 'Compensation Issues', weight: '10%', note: 'Job evaluation, pay structures, benefits' },
      { name: 'Safety and Health', weight: '10%', note: 'OSHA, workplace hazards, wellness' },
      { name: 'Employment Law', weight: '15%', note: 'EEO, ADA, FLSA, FMLA, discrimination' },
      { name: 'Labor Relations', weight: '9%', note: 'Unions, collective bargaining, grievances' },
      { name: 'Current Issues and Trends', weight: '10%', note: 'Global HR, technology, workforce change' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Questions', '99 items — one fewer than most DSSTs'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm your business program accepts it', duration: '1 week' },
      { stage: 'Study the ten HR functions', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Employment-law questions reflect US federal statutes.'
    },
    difficulty: 'Moderate',
    audience: 'Business and management students plus HR staff converting experience into credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Why does this exam have 99 questions?', a: 'The published DSST fact sheet lists 99 items for Human Resource Management rather than the usual 100. The time limit is still two hours and the 200-500 scoring scale is unchanged.' },
      { q: 'How many credits is it worth?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400, often accepted for the introductory HR management course.' },
      { q: 'Does HR work experience carry me through?', a: 'Partly. Practitioners usually know staffing, appraisal, and compensation but lose points on labor relations and federal employment statutes outside their own industry.' },
      { q: 'How long should I study?', a: 'Three to five weeks, with the heaviest time on employment law at 15% and compensation, staffing, appraisal, and safety at 10% each.' },
      { q: 'Can I retake it?', a: 'Yes, after 30 days, paying the full $100 fee again. Failed attempts are not reported to your college.' }
    ],
    summaryPoints: [
      '99 questions in two hours — one fewer than most DSST titles',
      'Score 400 for the ACE recommendation of 3 semester hours',
      'Employment law is the largest area at 15%',
      'Commonly accepted for an introductory HR course'
    ],
    relatedSlugs: ['dsst-introduction-to-business', 'dsst-business-ethics-and-society', 'dsst-fundamentals-of-counseling'],
    sourceUrl: 'https://getcollegecredit.com/exam/human-resource-management/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-introduction-to-business',
    body: 'Prometric',
    tagline: 'Sixty percent of the exam is the core business functions — management, marketing, finance.',
    description: 'DSST Introduction to Business surveys the material of a first business course and is one of the most heavily concentrated titles in the catalog: 60% of the questions sit in the functions of business, covering management, marketing, operations, accounting, finance, and information systems. Foundations of business and contemporary issues take 20% each, adding forms of ownership, the economic environment, ethics and social responsibility, and global competition.',
    quickAnswer: {
      summary: 'DSST Introduction to Business is a 100-question, two-hour credit-by-exam test covering business foundations, the core business functions, and contemporary issues. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Clears the introductory business course in most business degree plans',
        'Concentrated weighting — 60% is the core functions',
        'Vocabulary-driven rather than calculation-heavy',
        'About $120 against a full semester of tuition'
      ]
    },
    roadmap: ['Confirm it substitutes for your intro business course', 'Download the official content outline', 'Focus 60% of study on the business functions', 'Review ownership forms and the economic environment', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no prior business coursework or work experience is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Foundations of Business', weight: '20%', note: 'Forms of ownership, economics, ethics and social responsibility' },
      { name: 'Functions of Business', weight: '60%', note: 'Management, marketing, operations, accounting, finance, information systems' },
      { name: 'Contemporary Issues', weight: '20%', note: 'Global business, technology, workforce and regulatory trends' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Military', 'DANTES funds a first attempt for eligible members'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm it substitutes for the intro course', duration: '1 week' },
      { stage: 'Study the three content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. A semester of the equivalent course typically costs several hundred dollars or more.'
    },
    difficulty: 'Easy to moderate',
    audience: 'Business majors and adult learners clearing the introductory business course',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a score of 400 or higher, usually posted as introduction to business.' },
      { q: 'How hard is it?', a: 'Moderate at worst. The content is broad survey vocabulary across management, marketing, and finance, with little calculation. Most people find it one of the friendlier business titles.' },
      { q: 'How long should I study?', a: 'Three to four weeks, with roughly 60% of that time on the functions of business, which carry 60% of the questions.' },
      { q: 'Will my business school accept it?', a: 'Many do, but AACSB-accredited programs sometimes cap credit by exam for major coursework. Check with your advisor before you register.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee each attempt.' }
    ],
    summaryPoints: [
      'Functions of business alone carry 60% of the exam',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Covers ownership forms, management, marketing, finance, and global issues',
      'One of the more approachable business DSST titles'
    ],
    relatedSlugs: ['dsst-business-ethics-and-society', 'dsst-human-resource-management', 'dsst-business-mathematics'],
    sourceUrl: 'https://getcollegecredit.com/exam/introduction-to-business/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-introduction-to-geography',
    body: 'Prometric',
    tagline: 'Culture, environment, and spatial processes make up two-thirds of this social-science credit.',
    description: 'DSST Introduction to Geography, formerly listed as Human/Cultural Geography, covers physical and human geography at introductory college level. Culture and environment is the largest block at 35%, with spatial processes — population, migration, settlement, and economic activity — at 30%. Basic earth facts and concepts take 20% and regional geography the final 15%. Map interpretation and the logic of spatial distribution matter more than place-name memorization.',
    quickAnswer: {
      summary: 'DSST Introduction to Geography is a 100-question, two-hour credit-by-exam test on earth systems, culture and environment, spatial processes, and regional geography. A scaled score of 400 earns the ACE recommendation of 3 semester hours.',
      advantages: [
        'Satisfies a social-science or geography general-education slot',
        'Culture and spatial processes are 65% of the exam',
        'Concept and map driven, with minimal memorization of place names',
        'Testable year-round for $100 plus a site fee'
      ]
    },
    roadmap: ['Confirm it satisfies your social-science requirement', 'Download the official content outline', 'Study culture, environment, and spatial processes first', 'Review climate, landforms, and regional patterns', 'Score 400 or higher for three credits'],
    prerequisites: 'None — no prior geography coursework is required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'The Earth, Basic Facts and Concepts', weight: '20%', note: 'Maps, landforms, climate, soils, vegetation, water' },
      { name: 'Culture and Environment', weight: '35%', note: 'Cultural landscapes, language, religion, human-environment interaction' },
      { name: 'Spatial Processes', weight: '30%', note: 'Population, migration, settlement, economic activity, urbanization' },
      { name: 'Regional Geography', weight: '15%', note: 'World regions and their defining characteristics' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Former title', 'Human/Cultural Geography'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Confirm the social-science requirement it clears', duration: '1 week' },
      { stage: 'Study the four content areas', duration: '3-4 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the two-hour exam', duration: 'Test day' },
      { stage: 'Receive your unofficial score', duration: 'Immediately' }
    ],
    costBreakdown: {
      items: [
        { item: 'DSST exam fee', fee: '$100' },
        { item: 'Test-site administration fee', fee: '$20-$50' },
        { item: 'DANTES-funded first attempt (eligible military)', fee: '$0' },
        { item: 'Retake after 30 days', fee: '$100' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$120-$150 for most civilians; often $0-$50 for DANTES-eligible service members',
      footnote: 'The $100 exam fee goes to Prometric; each test site sets its own administration fee. Older school credit lists may show the title Human/Cultural Geography.'
    },
    difficulty: 'Moderate',
    audience: 'Students filling a social-science or geography general-education requirement',
    time: '3-4 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'Is this the same as Human/Cultural Geography?', a: 'Yes. DSST renamed the exam Introduction to Geography, so some school credit policies still list the previous title.' },
      { q: 'Do I need to memorize countries and capitals?', a: 'No. Regional geography is only 15% of the exam and tests regional characteristics rather than place-name recall. The bulk of the test is cultural and spatial reasoning.' },
      { q: 'How many credits does it grant?', a: 'ACE recommends 3 semester hours at the baccalaureate level for a 400, typically posted as a social-science or geography credit.' },
      { q: 'How long should I study?', a: 'Three to four weeks. Weight your time toward culture and environment plus spatial processes, which together are 65% of the exam.' },
      { q: 'Can I retake it?', a: 'Yes, after a 30-day wait, at the full $100 fee. Failed attempts do not appear on your transcript.' }
    ],
    summaryPoints: [
      'Formerly titled Human/Cultural Geography',
      '100 questions in two hours; 400 earns the ACE credit recommendation',
      'Culture and environment plus spatial processes are 65% of the exam',
      'Little place-name memorization required'
    ],
    relatedSlugs: ['dsst-general-anthropology', 'dsst-environmental-science', 'dsst-art-of-the-western-world'],
    sourceUrl: 'https://getcollegecredit.com/exam/introduction-to-geography/',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
