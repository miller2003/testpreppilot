export const programs = [
  {
    id: 'cambridge-international',
    body: 'Cambridge International Education',
    bodyUrl: 'https://www.cambridgeinternational.org',
    about: 'Cambridge International Education, part of the University of Cambridge, runs the Cambridge International AS & A Level program — a subject-based pre-university qualification taken by 16-19 year-olds in more than 10,000 schools across 160-plus countries. Each subject is graded on an A* to E scale at A Level (a to e at AS Level), and US evaluators such as ACE, AACRAO, WES and IEE recommend college credit for grades at or above the minimum pass. It is accepted for admission and course credit by a growing list of US colleges and universities.',
    registrationSteps: [
      { title: 'Enroll at a Cambridge International school', description: 'Students do not register as individuals; they join a school or approved center that offers Cambridge International AS & A Level courses and enters candidates for the exam series.', duration: 'per school year' },
      { title: 'Choose your subjects', description: 'Pick from 50-plus subjects across mathematics, sciences, languages, humanities, arts and interdisciplinary study. Most students take three A Levels or a mix of AS and A Levels.', duration: 'before the series opens' },
      { title: 'Register for an exam series', description: 'The school enters you for the May/June or October/November series. Exact entry deadlines and fees are set by the school or center, not centrally.', duration: 'school sets the window' },
      { title: 'Prepare with official materials', description: 'Use Cambridge past papers, subject schemes of work, and example candidate responses. US credit guidance is published on the Cambridge International US higher-ed pages.', duration: '1-2 years' },
      { title: 'Sit the papers and receive results', description: 'Exams are written at your school or an approved center; results are released in August (May/June series) or January (Oct/Nov series).', duration: 'test day' }
    ],
    proctoring: 'Cambridge International AS & A Level exams are administered at Cambridge International schools and approved centers under Cambridge exam-board security and invigilation rules. Some subjects include a practical or coursework component marked separately.',
    retakePolicy: 'Candidates who are unhappy with a grade can re-enter the subject in a later exam series; each entry is a fresh registration and fee. There is no limit on the number of series a candidate may sit.',
    recertification: 'Cambridge International AS & A Level is a school-leaving qualification with no expiry. Individual US colleges set their own limits on how old a result they will still post for credit.',
    scoreReporting: 'A Level results use grades A* (highest) through E (minimum pass), with a Percentage Uniform Mark shown alongside. AS Level uses grades a through e and has no A*. Each subject is reported on its own certificate.',
    refundPolicy: 'Entry fees are set and refunded by the school or test center according to its own policy and the exam-series withdrawal deadlines.',
    providersNote: 'The most authoritative prep is free: Cambridge past papers, mark schemes, and example candidate responses on cambridgeinternational.org. The US higher-education guide there lists credit recommendations and participating colleges.',
    comparison: {
      title: 'Cambridge AS and A Level at a glance',
      columns: ['Level', 'Typical length', 'US credit at pass', 'Grade scale'],
      rows: [
        { label: 'AS Level', values: ['1 year / 180 hrs', '3-4 semester credits', 'a-e (no A*)'] },
        { label: 'A Level', values: ['2 years / 360 hrs', '6-8 semester credits', 'A*-E'] }
      ]
    },
    orgFaqs: [
      { q: 'Do US colleges give credit for Cambridge A Levels?', a: 'Many do. ACE recommends credit for grades of E or higher on 25-plus titles, and evaluators such as IEE and WES suggest 5-10 semester credits per subject. Each college publishes its own policy, so check the school before you sit the exam.' },
      { q: 'Is the A Level harder than AP?', a: 'They are different systems. A Levels are taken over two years and go deep in a few subjects, while AP exams are one-shot end-of-course tests. US universities recognize both; which is "easier" depends on your study style.' }
    ],
    sourceUrl: 'https://www.cambridgeinternational.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'modern-states',
    body: 'Modern States Education Alliance',
    bodyUrl: 'https://modernstates.org',
    about: 'The Modern States Education Alliance is a nonprofit that offers free, professor-taught online courses preparing learners for CLEP and AP exams. Anyone who completes a course can claim a voucher that covers the CLEP exam fee, and the organization\'s "Freshman Year for Free" goal is to let motivated learners earn a year of college credit at no cost. More than 30 courses map to the major CLEP titles.',
    registrationSteps: [
      { title: 'Create a free account', description: 'Anyone 13 or older can register at register.modernstates.org. There is no cost and no application to complete.', duration: '5 minutes' },
      { title: 'Enroll in a course', description: 'Pick from 32 self-paced courses, each aligned to a CLEP exam (and many to AP). All videos, textbooks, and practice material are included free.', duration: 'per course' },
      { title: 'Complete the coursework', description: 'To qualify for a voucher you must complete at least 75% of the course and average 75% or higher on the final assessment. You may retry quizzes and the final.', duration: 'days to months' },
      { title: 'Request your CLEP voucher', description: 'Request the voucher code from inside the completed course. Modern States covers the $97 CLEP exam fee; some test-center fees may be reimbursed.', duration: 'up to 10 business days' },
      { title: 'Register and take the CLEP exam', description: 'Use the voucher at clep.collegeboard.org, book a test center or remote-proctoring slot, and sit the exam. AP exams are booked separately through a school AP coordinator.', duration: 'test day' }
    ],
    proctoring: 'Modern States itself does not proctor; the exams it prepares you for are delivered by the College Board. CLEP uses test centers or CLEP with Remote Proctoring; AP is administered digitally in schools via Bluebook.',
    retakePolicy: 'CLEP enforces a three-month wait between attempts and the full fee each time; the Modern States voucher applies to a first attempt. AP generally allows one attempt per subject per school year.',
    recertification: 'Modern States courses do not expire and there is no recertification. College Board credit recommendations remain reportable for up to 20 years; individual colleges set their own age limits.',
    scoreReporting: 'CLEP uses a 20-80 scaled score, with ACE recommending 50 for credit. AP uses a 1-5 scale, with 3 generally considered passing for credit.',
    refundPolicy: 'All Modern States courses and the CLEP voucher are free; you only pay any test-center administration fee the voucher does not cover.',
    providersNote: 'Start at modernstates.org for the free courses and voucher. Pair them with the College Board\'s free CLEP practice questions and official study guide. Commercial prep from Kaplan, Princeton Review, and Barron\'s is optional.',
    comparison: {
      title: 'Modern States vs paying out of pocket',
      columns: ['Path', 'Course cost', 'Exam fee', 'Eligibility'],
      rows: [
        { label: 'Modern States', values: ['Free', 'Covered by voucher', 'Complete 75% of course'] },
        { label: 'Self-pay', values: ['Varies', '$97 + center fee', 'Anyone'] }
      ]
    },
    orgFaqs: [
      { q: 'How do I get the free CLEP exam?', a: 'Finish at least 75% of a Modern States course and score 75% or higher on its final. The voucher request button then appears in the course and covers the $97 CLEP exam fee.' },
      { q: 'Can I really earn a free freshman year?', a: 'In principle, yes — if you pass about eight CLEP exams, each accepted for credit by your college, you can bank a freshman year\'s worth of credit. Your school decides which scores and how many credits count.' }
    ],
    sourceUrl: 'https://modernstates.org/freshman-year-free/',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'thomas-edison-state',
    body: 'Thomas Edison State University',
    bodyUrl: 'https://www.tesu.edu',
    about: 'Thomas Edison State University (TESU) runs TECEP, the Thomas Edison Credit-by-Examination Program, a catalog of roughly 100 subject exams that let adult learners, transfer students, and service members convert knowledge into TESU or transfer credit. Each TECEP is written and graded by TESU faculty and is charged per credit, making it one of the lowest-cost credit-by-exam options.',
    registrationSteps: [
      { title: 'Confirm your school accepts the title', description: 'Check with TESU advisement or your home institution that the specific TECEP will transfer and satisfy a requirement.', duration: '1-3 days' },
      { title: 'Create a TESU or guest account', description: 'Register as a guest or matriculated student. Guests can take TECEP exams without enrolling in a degree program.', duration: '10 minutes' },
      { title: 'Select and pay for the exam', description: 'Choose your TECEP title and pay the per-credit fee — $54 per credit for lower-level (100-200) and $81 per credit for upper-level (300-400) exams as of the 2026 term.', duration: '15 minutes' },
      { title: 'Schedule your exam', description: 'TESU offers online proctoring and approved test-center delivery. Book a slot that fits your study plan.', duration: '1 week' },
      { title: 'Study and sit the exam', description: 'Use the official TECEP study guide and content outline, then take the exam. Many titles are multiple choice and run about two hours.', duration: '2-6 weeks' }
    ],
    proctoring: 'TECEP exams are delivered through online proctoring or at approved proctor sites under TESU testing rules, with a government-issued photo ID and a room scan for remote sittings.',
    retakePolicy: 'A failed or withdrawn TECEP can be retaken after a required waiting period on a new registration and full per-credit fee; only passing scores are posted to the TESU transcript for credit.',
    recertification: 'TECEP is a one-time credit-by-exam; there is no recertification. As with other exams, individual colleges set how old a score they will still accept.',
    scoreReporting: 'Multiple-choice TECEPs typically post a score promptly through the TESU portal, and official results can be sent to a home institution on request.',
    refundPolicy: 'TECEP fees follow TESU\'s published tuition schedule and refund windows; review the term policy before registering, as the per-credit fee is generally nonrefundable once the exam is opened.',
    providersNote: 'TESU publishes a free content outline and study guide for every TECEP title. Pair it with the subject\'s standard introductory textbook; commercial TECEP-specific guides are limited.',
    comparison: {
      title: 'TECEP cost by level (2026)',
      columns: ['Level', 'Fee per credit', 'Typical exam'],
      rows: [
        { label: 'Lower (100-200)', values: ['$54', '~3 credits, about $162'] },
        { label: 'Upper (300-400)', values: ['$81', '~3 credits, about $243'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I have to be a TESU student to take a TECEP?', a: 'No. Guest students can register for TECEP exams without enrolling in a degree program, and the credits transfer to many other colleges that accept TECEP.' },
      { q: 'How cheap is TECEP compared with CLEP or DSST?', a: 'TECEP is charged per credit at $54-$81, so a three-credit exam runs roughly $162-$243 including no separate vendor fee. That is often less than CLEP or DSST once center fees are added.' }
    ],
    sourceUrl: 'https://www.tesu.edu',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'excelsior-university',
    body: 'Excelsior University',
    bodyUrl: 'https://www.excelsior.edu',
    about: 'Excelsior University (formerly Excelsior College) operated UExcel, the UExcel / Excelsior College Examinations credit-by-exam program, for decades as a low-cost way to earn college credit by exam. The program was retired after August 21, 2022, but credits earned before that date remain valid and transferable to accepting institutions. Excelsior still accepts many other exams, including CLEP, DSST, and AP.',
    registrationSteps: [
      { title: 'Confirm your school accepts legacy UExcel credit', description: 'Because UExcel is retired, the key step is verifying that your receiving college will still post credit for an exam taken before August 21, 2022.', duration: '1-3 days' },
      { title: 'Locate your historical score', description: 'If you tested while UExcel was active, request your official score report or transcript from Excelsior\'s records office.', duration: '1-2 weeks' },
      { title: 'Send scores to the receiving school', description: 'Have Excelsior transmit the official record to your current college so the credits can be evaluated and posted.', duration: 'per school' },
      { title: 'Choose a live alternative if you need new credit', description: 'For new credit, consider CLEP, DSST, or TECEP titles that cover the same subject, since UExcel can no longer be taken.', duration: 'varies' }
    ],
    proctoring: 'UExcel exams were delivered at Excelsior-approved test centers and online proctoring while the program was active. New registrations are no longer accepted.',
    retakePolicy: 'The program is retired, so no new attempts can be registered. Previously earned passing scores remain on the student record permanently.',
    recertification: 'Retired; no recertification. Legacy credits do not expire at the source, though the receiving college may set its own age limit.',
    scoreReporting: 'Historical UExcel results are retained by Excelsior and can be re-sent on request; passing performances typically earned three credits per exam.',
    refundPolicy: 'No longer applicable; the program is closed to new registrations.',
    providersNote: 'For current credit-by-exam needs, use CLEP, DSST, or TECEP. Excelsior publishes transfer-credit equivalencies for those programs on its website.',
    comparison: {
      title: 'UExcel vs live alternatives',
      columns: ['Program', 'Status', 'Use for'],
      rows: [
        { label: 'UExcel', values: ['Retired 8/21/2022', 'Legacy credit only'] },
        { label: 'CLEP / DSST', values: ['Active', 'New credit-by-exam'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I still take a UExcel exam?', a: 'No. Excelsior stopped offering UExcel exams after August 21, 2022, and no new registrations are accepted. Credits you earned before that date are still valid and transferable.' },
      { q: 'What should I take instead?', a: 'For the same subjects, use an active CLEP or DSST title, or a TECEP exam. Excelsior and most other colleges publish equivalencies that map those scores to the same courses UExcel used to cover.' }
    ],
    sourceUrl: 'https://www.excelsior.edu/exams/content-guides/',
    verified: true,
    confidence: 'high'
  },
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
    slug: 'cambridge-international-as-a-level',
    body: 'Cambridge International Education',
    tagline: 'Earn 3-8 US college credits per subject by taking the same A Levels recognized by universities worldwide.',
    description: `Cambridge International AS & A Level is a subject-based pre-university qualification taken by 16-19 year-olds in more than 10,000 schools across 160-plus countries. A student chooses three or four subjects and studies each over one year (AS Level) or two years (A Level), ending in externally marked written papers. US evaluators — ACE, AACRAO, WES, and IEE — recommend college credit for grades at or above the minimum pass, so a strong set of results can satisfy general-education or introductory course requirements at accepting US colleges. Because it is a school-leaving qualification rather than a single test, the program suits students already in a Cambridge International school or a US high school that offers the curriculum.`,
    quickAnswer: {
      summary: `Cambridge International AS & A Level is a subject-based qualification graded A* to E at A Level (a to e at AS Level), with US credit recommended by ACE and others for grades at or above the minimum pass. A single A Level typically maps to 6-8 semester credits and an AS Level to 3-4, but the exact total is set by each receiving college.`,
      advantages: [
        'Recognized by US colleges for admission and course credit, with ACE recommending credit at grade E/e or higher',
        'Deep subject study over one or two years rather than a single high-stakes test',
        '50-plus subjects across sciences, math, languages, humanities, and the arts',
        'Credit recommendations of roughly 5 credits per AS subject and 10 per A Level (per IEE)'
      ]
    },
    roadmap: ['Enroll at a Cambridge International school', 'Choose 3-4 subjects', 'Study across the school year(s)', 'Enter the May/June or Oct/Nov series', 'Receive results and send them to your college'],
    prerequisites: 'None formally — open to any student at a Cambridge International school; subject prior study helps but is not required.',
    examMeta: {
      questions: 'Multiple papers per subject (typically 3-5, by subject)',
      time: 'About 1.5-3 hours per paper, across the exam series',
      pass: 'Grade E (A Level) or e (AS Level) minimum pass',
      fee: 'Set by the school or test center (varies by subject and country)',
      format: 'Written papers; some subjects add coursework or practical',
      admin: 'Cambridge International school or approved exam center'
    },
    topics: [
      { name: 'Mathematics and Further Mathematics', note: 'Pure, mechanics, statistics, and further modules' },
      { name: 'Sciences', note: 'Biology, chemistry, physics, and others, some with practical assessment' },
      { name: 'Languages', note: 'Reading, writing, listening, and speaking where applicable' },
      { name: 'Humanities and social sciences', note: 'History, geography, economics, psychology, and more' },
      { name: 'Arts and interdisciplinary', note: 'Art, music, and Global Perspectives & Research' }
    ],
    examEssentials: [
      ['Grading', 'A*-E (A Level), a-e (AS Level)'],
      ['US credit', 'ACE/IEE recommend credit at grade E/e or higher'],
      ['Retake', 'Re-enter in a later series; fresh fee'],
      ['Delivery', 'May/June and Oct/Nov series worldwide']
    ],
    timeline: [
      { stage: 'Enroll and choose subjects', duration: '1-2 years before exam' },
      { stage: 'Study the course', duration: '1 year (AS) or 2 years (A Level)' },
      { stage: 'Register for a series', duration: 'by school deadline' },
      { stage: 'Sit the papers', duration: 'exam window' },
      { stage: 'Receive results', duration: 'August or January' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam entry fee per subject', fee: 'Set by school (varies)' },
        { item: 'School tuition or course fees', fee: 'Varies by school' },
        { item: 'Practical/coursework component (some subjects)', fee: 'Included or per component' }
      ],
      total: 'Varies widely by school and country',
      footnote: 'Cambridge does not publish a single US fee; the school or test center sets the entry fee. US students register through a Cambridge International school rather than directly.'
    },
    difficulty: 'Challenging',
    audience: 'High-school students in Cambridge International schools seeking US admission and credit',
    time: '1-2 years of study',
    cost: 'Varies by school',
    faqs: [
      { q: 'Do US colleges give credit for Cambridge A Levels?', a: 'Many do. ACE recommends credit for grades of E or higher on 25-plus titles, and IEE suggests about 5 semester credits per AS subject and 10 per A Level. Each college publishes its own policy, so confirm before you sit the exam.' },
      { q: 'How many credits is an A Level worth?', a: 'It depends on the school. Evaluators commonly suggest 6-8 semester credits for a full A Level and 3-4 for an AS Level, but your receiving college decides the final total and how it applies.' },
      { q: 'How long does it take to study?', a: 'An AS Level is typically one year of study and an A Level two years, taken alongside other subjects in school. Private candidates follow the same exam timeline through a center.' },
      { q: 'Can I retake a subject?', a: 'Yes. You re-enter the subject in a later exam series and pay the entry fee again. There is no cap on how many series you may sit.' },
      { q: 'Is the A Level the same as AP?', a: 'No. A Levels are taken over two years and go deep in a few subjects, while AP exams are single end-of-course tests. US universities recognize both for admission and credit.' }
    ],
    summaryPoints: [
      'Subject-based qualification graded A*-E (A Level) or a-e (AS Level)',
      'ACE and US evaluators recommend college credit at grade E/e or higher',
      'An A Level typically maps to 6-8 US semester credits; an AS Level to 3-4',
      'Taken at Cambridge International schools in May/June and Oct/Nov series'
    ],
    relatedSlugs: ['ap-biology', 'clep-biology'],
    sourceUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-level/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'dsst-introduction-to-geology',
    body: 'Prometric',
    tagline: 'Prove a semester of introductory geology in two hours and bank three science credits.',
    description: `DSST Introduction to Geology covers the material of a one-semester introductory college geology course: minerals, rocks, plate tectonics, surface processes, geologic time, and Earth resources. The exam emphasizes how the solid Earth works — the rock cycle, the movement of continents, and the processes that shape landscapes — rather than memorized definitions. It is a practical credit for students who already understand basic Earth-science concepts and want to satisfy a science or general-education requirement without sitting a full course.`,
    quickAnswer: {
      summary: `DSST Introduction to Geology is a 100-question, two-hour credit-by-exam test on introductory geology. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of geology for $100 plus a test-site fee',
        'Available year-round rather than once a term',
        'Clear content outline makes self-study straightforward',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST geology credit', 'Download the official fact sheet', 'Review minerals, rocks, and plate tectonics', 'Study surface processes and geologic time', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; high-school Earth science helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Minerals and rocks', note: 'Identification, classification, rock cycle' },
      { name: 'Plate tectonics and Earth structure', note: 'Crust, mantle, continental drift' },
      { name: 'Surface processes and landforms', note: 'Weathering, erosion, rivers, glaciers' },
      { name: 'Geologic time and Earth history', note: 'Stratigraphy, fossils, dating' },
      { name: 'Earth resources and environment', note: 'Energy, minerals, hazards' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Adult learners and transfer students needing a science or general-education credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. A few set a higher bar, so confirm the number with your registrar before registering.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. Whether that satisfies a science or general-education requirement is your school\'s decision.' },
      { q: 'How long should I study?', a: 'Most test takers with some Earth-science background need three to five weeks of review using the official fact sheet and a standard intro textbook.' },
      { q: 'Will my college accept the credit?', a: 'Roughly 1,900 institutions accept DSST, but acceptance is title by title. Ask the registrar to confirm this specific exam is on the approved list before you pay.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day waiting period, and you pay the full $100 again. A failed attempt is not reported on your college transcript.' }
    ],
    summaryPoints: [
      'Covers minerals, rocks, plate tectonics, surface processes, and geologic time',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-physical-science-i', 'dsst-introduction-to-geography'],
    sourceUrl: 'https://getcollegecredit.com/exam/introduction-to-geology/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-introduction-to-law-enforcement',
    body: 'Prometric',
    tagline: 'Convert your knowledge of policing into three criminal-justice credits in one sitting.',
    description: `DSST Introduction to Law Enforcement surveys the American police system from its historical roots to modern practice. The exam covers the development of policing, agency organization, patrol and investigative operations, constitutional limits on police power, and contemporary issues such as community policing and accountability. It rewards a working understanding of how law enforcement is structured and constrained, which makes it a strong fit for criminal-justice and public-administration students who already know the basics.`,
    quickAnswer: {
      summary: `DSST Introduction to Law Enforcement is a 100-question, two-hour credit-by-exam test on the US police system. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of policing coursework for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Strong match for criminal-justice and public-administration plans',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST law-enforcement credit', 'Download the official fact sheet', 'Study police history and organization', 'Review patrol, investigation, and constitutional limits', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; a background in criminal justice helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'History and organization of policing', note: 'Development of US law enforcement, agency types' },
      { name: 'Patrol and investigative operations', note: 'Field operations, investigations, tactics' },
      { name: 'The police and the law', note: 'Constitutional limits, search and seizure, due process' },
      { name: 'Contemporary issues', note: 'Community policing, accountability, reform' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Criminal-justice and public-administration students needing a policing credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. Whether it counts as a criminal-justice elective or required course is your school\'s call.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical for someone with a basic grasp of US policing; lean on the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but always confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers police history, organization, operations, and constitutional limits',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-criminal-justice', 'dsst-introduction-to-world-religions'],
    sourceUrl: 'https://getcollegecredit.com/exam/introduction-to-law-enforcement/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-introduction-to-world-religions',
    body: 'Prometric',
    tagline: 'Survey the world\'s major faiths and earn three humanities credits without a semester of lectures.',
    description: `DSST Introduction to World Religions introduces the beliefs, practices, and historical development of the major religious traditions, with the heaviest emphasis on Hinduism, Buddhism, Judaism, Christianity, and Islam. The exam asks you to recognize core teachings, sacred texts, key figures, and the cultural settings of each tradition rather than debate theology. It is a good general-education or humanities credit for students with broad reading in comparative religion.`,
    quickAnswer: {
      summary: `DSST Introduction to World Religions is a 100-question, two-hour credit-by-exam test surveying the major faith traditions. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of comparative religion for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Good humanities or general-education credit',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST world-religions credit', 'Download the official fact sheet', 'Study the five major traditions', 'Review texts, figures, and practices', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; general knowledge of major religions helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Hinduism', note: 'Vedas, dharma, major deities, practice' },
      { name: 'Buddhism', note: 'Life of Buddha, Four Noble Truths, schools' },
      { name: 'Judaism', note: 'Torah, covenant, holidays, history' },
      { name: 'Christianity', note: 'Bible, creeds, denominations, history' },
      { name: 'Islam', note: 'Quran, Five Pillars, Sunni/Shia, history' },
      { name: 'Other and indigenous traditions', note: 'Brief coverage beyond the five major faiths' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Humanities and general-education students with broad comparative-religion reading',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Check for any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. Your school decides whether it satisfies a humanities or general-education requirement.' },
      { q: 'How long should I study?', a: 'Plan three to five weeks if you already know the basics of the five major faiths; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Surveys Hinduism, Buddhism, Judaism, Christianity, and Islam',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-ethics-in-america', 'clep-humanities'],
    sourceUrl: 'https://getcollegecredit.com/exam/introduction-to-world-religions/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-lifespan-developmental-psychology',
    body: 'Prometric',
    tagline: 'Cover human development from womb to late adulthood and bank three psychology credits.',
    description: `DSST Lifespan Developmental Psychology covers physical, cognitive, and social-emotional development across the entire human life span, from prenatal stages through infancy, childhood, adolescence, adulthood, and late life. The exam emphasizes the major theories and research findings at each stage rather than clinical treatment. It is a solid credit for psychology, education, and nursing students who already understand introductory psychology.`,
    quickAnswer: {
      summary: `DSST Lifespan Developmental Psychology is a 100-question, two-hour credit-by-exam test on human development from conception to late adulthood. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of developmental psychology for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Spans the whole life span, not just childhood',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST lifespan-development credit', 'Download the official fact sheet', 'Study the theories of development', 'Review each life-stage milestone', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; introductory psychology helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Physical development', note: 'Growth, motor skills, health across the life span' },
      { name: 'Cognitive development', note: 'Piaget, Vygotsky, language, memory' },
      { name: 'Social and personality development', note: 'Attachment, identity, relationships' },
      { name: 'Life stages', note: 'Prenatal, infancy, childhood, adolescence, adulthood, aging' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Psychology, education, and nursing students needing a development credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. Whether it satisfies a psychology requirement is your school\'s decision.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical for someone with an intro-psychology background; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but always confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers physical, cognitive, and social development across the life span',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-fundamentals-of-counseling', 'clep-human-growth-and-development'],
    sourceUrl: 'https://getcollegecredit.com/exam/lifespan-developmental-psychology/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-management-information-systems',
    body: 'Prometric',
    tagline: 'Show you understand how IT serves business and earn three upper-level credits.',
    description: `DSST Management Information Systems is an upper-level exam on how organizations use information technology for strategy, operations, and decision-making. The exam covers hardware and software fundamentals, databases and networks, systems development, and the management of IT as a business resource. It is aimed at business and IT students who can connect technical concepts to organizational goals rather than write code.`,
    quickAnswer: {
      summary: `DSST Management Information Systems is a 100-question, two-hour upper-level credit-by-exam test on IT in organizations. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'An upper-level credit for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Bridges business and technology for management-minded students',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST MIS credit', 'Download the official fact sheet', 'Study databases, networks, and systems development', 'Review IT strategy and management', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; intro business or computing helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Information systems in organizations', note: 'Role of IS, types of systems' },
      { name: 'Hardware and software', note: 'Components, platforms, applications' },
      { name: 'Databases and networks', note: 'Data management, communications' },
      { name: 'Systems development', note: 'SDLC, project management' },
      { name: 'IT strategy and management', note: 'Governance, security, planning' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400 (upper-level)'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Business and IT students needing an upper-level MIS credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Is this an upper-level credit?', a: 'Yes. ACE classifies it as upper-level (300-400), so it can satisfy a junior or senior business or IT requirement where your school allows.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you understand basic business and computing concepts; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Upper-level exam on IT strategy, databases, networks, and systems',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the upper level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-computing-and-information-technology', 'dsst-principles-of-supervision'],
    sourceUrl: 'https://getcollegecredit.com/exam/management-information-systems/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-math-for-liberal-arts',
    body: 'Prometric',
    tagline: 'Satisfy the math requirement with reasoning, not calculus, and earn three credits.',
    description: `DSST Math for Liberal Arts is a credit-by-exam test of quantitative reasoning for non-STEM majors, covering logic, sets, number theory, algebra, geometry, probability, statistics, and personal finance. The exam stresses practical problem-solving over symbolic manipulation, making it a common way to meet a general-education math requirement without taking calculus or college algebra. It rewards comfort with everyday numbers more than advanced technique.`,
    quickAnswer: {
      summary: `DSST Math for Liberal Arts is a 100-question, two-hour credit-by-exam test of practical quantitative reasoning. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Meets a general-education math requirement for $100 plus a site fee',
        'Emphasizes reasoning over advanced technique',
        'Available year-round at DSST sites and online',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST math-for-liberal-arts credit', 'Download the official fact sheet', 'Review logic, sets, and algebra', 'Study probability, statistics, and finance', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; basic high-school math helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Logic and sets', note: 'Arguments, Venn diagrams, set operations' },
      { name: 'Number theory and real numbers', note: 'Properties, operations' },
      { name: 'Algebra and functions', note: 'Linear, exponential, graphs' },
      { name: 'Geometry and measurement', note: 'Shapes, area, volume' },
      { name: 'Probability and statistics', note: 'Counting, distributions, data' },
      { name: 'Finance', note: 'Interest, budgeting, loans' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Non-STEM students meeting a general-education math requirement',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a general-education quantitative-reasoning requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical for someone comfortable with everyday math; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Quantitative reasoning: logic, sets, algebra, probability, statistics, finance',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-fundamentals-of-college-algebra', 'clep-college-mathematics'],
    sourceUrl: 'https://getcollegecredit.com/exam/math-for-liberal-arts/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-money-and-banking',
    body: 'Prometric',
    tagline: 'Master the Federal Reserve and financial markets and earn three upper-level credits.',
    description: `DSST Money and Banking is an upper-level exam on the US financial system: the nature of money, commercial banking, the Federal Reserve, monetary policy, and financial markets. The exam asks you to connect theory to real institutions — how the Fed sets policy, how banks create credit, and how interest rates and exchange rates move. It suits finance, economics, and business students who already know introductory macroeconomics.`,
    quickAnswer: {
      summary: `DSST Money and Banking is a 100-question, two-hour upper-level credit-by-exam test on money, banking, and monetary policy. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'An upper-level finance/econ credit for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Connects theory to the Federal Reserve and real markets',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST money-and-banking credit', 'Download the official fact sheet', 'Study money, banking, and the Fed', 'Review monetary policy and markets', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; intro macroeconomics helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Money and financial institutions', note: 'Functions of money, bank types' },
      { name: 'Central banking and the Federal Reserve', note: 'Structure, tools, mandates' },
      { name: 'Monetary policy', note: 'Open market operations, money supply' },
      { name: 'Financial markets and interest rates', note: 'Bonds, yields, risk' },
      { name: 'International finance', note: 'Exchange rates, balance of payments' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400 (upper-level)'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Finance, economics, and business students needing an upper-level credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Is this an upper-level credit?', a: 'Yes. ACE classifies it as upper-level, so it can satisfy a junior or senior finance or economics requirement where your school allows.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with an intro-macro background; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Upper-level exam on money, banking, the Fed, and monetary policy',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the upper level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-finance', 'clep-principles-of-macroeconomics'],
    sourceUrl: 'https://getcollegecredit.com/exam/money-and-banking/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-organizational-behavior',
    body: 'Prometric',
    tagline: 'Understand what makes teams and leaders effective and earn three upper-level credits.',
    description: `DSST Organizational Behavior is an upper-level exam on how individuals and groups act inside organizations. The exam covers motivation, perception, and personality; group dynamics and teams; leadership and power; communication; and organizational culture and change. It connects psychological and sociological ideas to real workplace behavior, making it a common management and human-resources credit for students who can reason about people, not just memorize models.`,
    quickAnswer: {
      summary: `DSST Organizational Behavior is a 100-question, two-hour upper-level credit-by-exam test on behavior in organizations. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'An upper-level management credit for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Directly useful for HR and leadership paths',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST organizational-behavior credit', 'Download the official fact sheet', 'Study motivation and groups', 'Review leadership and culture', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; intro psychology or management helps but is not required.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Individual behavior', note: 'Motivation, perception, personality, attitudes' },
      { name: 'Group dynamics and teams', note: 'Norms, roles, conflict, cohesion' },
      { name: 'Leadership and power', note: 'Styles, influence, decision making' },
      { name: 'Communication', note: 'Process, barriers, networks' },
      { name: 'Organizational culture and change', note: 'Structure, culture, change models' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400 (upper-level)'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Management and HR students needing an upper-level behavior credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Is this an upper-level credit?', a: 'Yes. ACE classifies it as upper-level, so it can satisfy a junior or senior management requirement where your school allows.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with a basic understanding of people at work; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Upper-level exam on motivation, teams, leadership, and culture',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the upper level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-supervision', 'dsst-human-resource-management'],
    sourceUrl: 'https://getcollegecredit.com/exam/organizational-behavior/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-personal-finance',
    body: 'Prometric',
    tagline: 'Learn to budget, borrow, insure, and invest, and earn three practical credits.',
    description: `DSST Personal Finance covers the money skills adults actually use: budgeting, credit and debt, insurance, investing, taxes, and retirement planning. The exam emphasizes applied decision-making — comparing loans, building a portfolio, choosing coverage — more than theory. It is a useful general-education or life-skills credit for any student, and a natural fit for business and family-studies programs.`,
    quickAnswer: {
      summary: `DSST Personal Finance is a 100-question, two-hour credit-by-exam test on practical money management. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a personal-finance course for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Practical life skill with broad applicability',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST personal-finance credit', 'Download the official fact sheet', 'Study budgeting and credit', 'Review insurance and investing', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; basic arithmetic helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Budgeting and money management', note: 'Income, expenses, planning' },
      { name: 'Credit and debt', note: 'Loans, cards, interest, scores' },
      { name: 'Insurance', note: 'Life, health, property, auto' },
      { name: 'Investing', note: 'Stocks, bonds, funds, risk' },
      { name: 'Taxes and retirement', note: 'Filing, Social Security, planning' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Any student needing a practical personal-finance credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It often satisfies a general-education or elective requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical; the material is practical, so real-world familiarity with bills and banking helps.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers budgeting, credit, insurance, investing, taxes, retirement',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-finance', 'dsst-business-mathematics'],
    sourceUrl: 'https://getcollegecredit.com/exam/personal-finance/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-advanced-english-composition',
    body: 'Prometric',
    tagline: 'Go past first-year writing with research and rhetoric and earn three upper-level credits.',
    description: `DSST Principles of Advanced English Composition is an upper-level exam that builds on first-year writing: rhetorical strategy, research methods, source evaluation, argumentation, and revision. The exam assumes you can already write a competent essay and instead tests whether you can plan, research, and revise sophisticated prose. It is a strong credit for students who have writing experience but never took an advanced college composition course.`,
    quickAnswer: {
      summary: `DSST Principles of Advanced English Composition is a 100-question, two-hour upper-level credit-by-exam test on advanced writing and rhetoric. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'An upper-level writing credit for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Builds on, rather than repeats, first-year composition',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST advanced-composition credit', 'Download the official fact sheet', 'Study rhetoric and research', 'Review argumentation and revision', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; first-year composition experience helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Rhetorical analysis and strategy', note: 'Purpose, audience, genre' },
      { name: 'Research and source evaluation', note: 'Finding, judging, citing sources' },
      { name: 'Argumentation and structure', note: 'Thesis, organization, logic' },
      { name: 'Document design and revision', note: 'Style, editing, drafting' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400 (upper-level)'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Students with writing experience seeking an upper-level composition credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Is this different from first-year composition?', a: 'Yes. It is upper-level and assumes you already write competently; it tests research, rhetoric, and revision rather than basic sentence and paragraph skills.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you write regularly; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Upper-level exam on rhetoric, research, and revision',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the upper level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-technical-writing', 'dsst-principles-of-advanced-english-composition'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-advanced-english-composition/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-finance',
    body: 'Prometric',
    tagline: 'Prove you understand valuation, risk, and budgeting and earn three upper-level credits.',
    description: `DSST Principles of Finance is an upper-level exam on the core of corporate and personal finance: the time value of money, valuation of stocks and bonds, risk and return, capital budgeting, and financial markets. The exam rewards applied calculation and judgment rather than definitions, so it fits students who can work with formulas and interpret financial decisions. It is a common upper-level business credit.`,
    quickAnswer: {
      summary: `DSST Principles of Finance is a 100-question, two-hour upper-level credit-by-exam test on finance fundamentals. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'An upper-level finance credit for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Emphasizes applied calculation over memorization',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST principles-of-finance credit', 'Download the official fact sheet', 'Study time value of money', 'Review valuation and capital budgeting', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; algebra and intro business help.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Time value of money', note: 'Present and future value, annuities' },
      { name: 'Valuation', note: 'Stocks, bonds, cash flows' },
      { name: 'Risk and return', note: 'Portfolio theory, CAPM' },
      { name: 'Capital budgeting', note: 'NPV, IRR, payback' },
      { name: 'Financial markets and institutions', note: 'Structure, instruments' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400 (upper-level)'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Business students needing an upper-level finance credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Is this an upper-level credit?', a: 'Yes. ACE classifies it as upper-level, so it can satisfy a junior or senior finance requirement where your school allows.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you are comfortable with algebra and basic business ideas; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Upper-level exam on TVM, valuation, risk, and capital budgeting',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the upper level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-money-and-banking', 'clep-financial-accounting'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-finance/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-financial-accounting',
    body: 'Prometric',
    tagline: 'Demonstrate the accounting cycle and earn three credits without the lecture hall.',
    description: `DSST Principles of Financial Accounting covers the material of a first-semester financial accounting course: the accounting equation, the accounting cycle, preparation of financial statements, and the recognition of assets, liabilities, and equity. The exam emphasizes the mechanics of recording and reporting transactions rather than theory. It is a standard business and accounting credit for students who already understand debits and credits.`,
    quickAnswer: {
      summary: `DSST Principles of Financial Accounting is a 100-question, two-hour credit-by-exam test on introductory financial accounting. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of financial accounting for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Clear, mechanics-focused content outline',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST financial-accounting credit', 'Download the official fact sheet', 'Study the accounting cycle', 'Review statements and account types', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; basic arithmetic helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'The accounting cycle', note: 'Journals, ledgers, adjusting, closing' },
      { name: 'Financial statements', note: 'Income statement, balance sheet, cash flow' },
      { name: 'Assets', note: 'Cash, receivables, inventory, fixed assets' },
      { name: 'Liabilities and equity', note: 'Payables, debt, owner\'s equity' },
      { name: 'Recognition and measurement', note: 'Revenue, expense, GAAP basics' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Business and accounting students needing a financial-accounting credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a first-semester accounting requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you know debits and credits; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers the accounting cycle, statements, and account types',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['clep-financial-accounting', 'dsst-principles-of-finance'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-financial-accounting/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-physical-science-i',
    body: 'Prometric',
    tagline: 'Combine physics and chemistry basics into one three-credit science exam.',
    description: `DSST Principles of Physical Science I is an introductory exam blending the foundations of physics and chemistry: motion and mechanics, energy, matter and materials, waves, and basic chemical concepts. The exam is pitched at the non-science major and stresses concepts and everyday applications over heavy math. It is a flexible way to meet a physical-science or general-education requirement.`,
    quickAnswer: {
      summary: `DSST Principles of Physical Science I is a 100-question, two-hour credit-by-exam test on introductory physics and chemistry. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of intro physical science for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Blends physics and chemistry for non-science majors',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST physical-science credit', 'Download the official fact sheet', 'Study motion and energy', 'Review matter and waves', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; high-school science helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Motion and mechanics', note: 'Kinematics, forces, Newton\'s laws' },
      { name: 'Energy', note: 'Work, power, conservation' },
      { name: 'Matter and materials', note: 'Atoms, elements, phases' },
      { name: 'Waves and sound', note: 'Properties, behavior' },
      { name: 'Introductory chemistry concepts', note: 'Reactions, bonding basics' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Non-science students meeting a physical-science requirement',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a general-education physical-science requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with a basic science background; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Blends introductory physics and chemistry concepts',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-introduction-to-geology', 'clep-natural-sciences'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-physical-science-i/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-public-speaking',
    body: 'Prometric',
    tagline: 'Turn presentations into three credits by mastering audience, structure, and delivery.',
    description: `DSST Principles of Public Speaking covers the planning and performance of effective speeches: audience analysis, speech organization, evidence and support, delivery, and listening. Unlike a purely written exam, this title includes a recorded speech component, so it tests both knowledge and applied skill. It is a strong communication or general-education credit for students comfortable presenting.`,
    quickAnswer: {
      summary: `DSST Principles of Public Speaking is a credit-by-exam test on speech preparation and delivery, including a recorded speech component. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of public speaking for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Includes a practical recorded-speech component',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST public-speaking credit', 'Download the official fact sheet', 'Study audience and organization', 'Prepare your recorded speech', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; comfort speaking helps.',
    examMeta: {
      questions: '100 multiple choice plus recorded speech',
      time: '2 hours plus speech',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice and recorded speech',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Audience analysis', note: 'Demographics, occasion, purpose' },
      { name: 'Speech organization', note: 'Outlining, introductions, conclusions' },
      { name: 'Evidence and support', note: 'Research, examples, reasoning' },
      { name: 'Delivery and listening', note: 'Voice, body, audience reception' },
      { name: 'Recorded speech', note: 'Applied presentation component' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
      { stage: 'Register and schedule at a DSST site', duration: '1-2 weeks' },
      { stage: 'Sit the exam and record your speech', duration: 'Test day' },
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
    audience: 'Students needing a communication or public-speaking credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'Does this exam include a speech?', a: 'Yes. Besides the multiple-choice section, the title includes a recorded speech component, so you prepare and deliver a presentation as part of the assessment.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical; build in time to draft and rehearse your recorded speech using the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers audience, organization, evidence, and delivery, plus a speech',
      'Multiple choice plus recorded speech; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-technical-writing', 'clep-humanities'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-public-speaking/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-statistics',
    body: 'Prometric',
    tagline: 'Conquer descriptive stats, inference, and regression for three credits.',
    description: `DSST Principles of Statistics covers the material of a first-semester statistics course: descriptive statistics, probability, sampling distributions, hypothesis testing, and regression. The exam emphasizes interpreting results and choosing the right procedure rather than deriving formulas. It is a common quantitative-methods credit for social-science, business, and health students.`,
    quickAnswer: {
      summary: `DSST Principles of Statistics is a 100-question, two-hour credit-by-exam test on introductory statistics. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of statistics for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Emphasizes interpretation over derivation',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST statistics credit', 'Download the official fact sheet', 'Study descriptive stats and probability', 'Review inference and regression', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; algebra helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Descriptive statistics', note: 'Graphs, central tendency, spread' },
      { name: 'Probability', note: 'Rules, distributions, expected value' },
      { name: 'Sampling and distributions', note: 'Sampling, CLT, error' },
      { name: 'Hypothesis testing', note: 'Tests, p-values, confidence intervals' },
      { name: 'Regression and correlation', note: 'Linear models, strength' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Social-science, business, and health students needing a stats credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a quantitative-methods or statistics requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you are comfortable with algebra; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers descriptive stats, probability, inference, and regression',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-math-for-liberal-arts', 'clep-college-mathematics'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-statistics/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-principles-of-supervision',
    body: 'Prometric',
    tagline: 'Step into the supervisor\'s role on paper and earn three credits.',
    description: `DSST Principles of Supervision covers the foundational skills of first-line management: the supervisory role, planning and organizing work, staffing and training, motivating employees, and managing performance. The exam is aimed at aspiring and new supervisors rather than senior executives, and it rewards practical understanding of how to get work done through people. It is a common lower-level management credit.`,
    quickAnswer: {
      summary: `DSST Principles of Supervision is a 100-question, two-hour credit-by-exam test on first-line management. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of supervision for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Practical management credit for aspiring supervisors',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST supervision credit', 'Download the official fact sheet', 'Study planning and staffing', 'Review motivation and performance', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; any work experience helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'The supervisory role', note: 'Responsibilities, authority, transition' },
      { name: 'Planning and organizing', note: 'Objectives, scheduling, delegating' },
      { name: 'Staffing and training', note: 'Hiring, onboarding, development' },
      { name: 'Motivating employees', note: 'Needs, incentives, engagement' },
      { name: 'Managing performance', note: 'Appraisal, coaching, discipline' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Students and workers seeking a first-line management credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a lower-level management requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with any work experience; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers the supervisor\'s role, planning, staffing, and performance',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-supervision', 'dsst-organizational-behavior'],
    sourceUrl: 'https://getcollegecredit.com/exam/principles-of-supervision/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-substance-abuse',
    body: 'Prometric',
    tagline: 'Study drugs, addiction, and treatment and earn three behavioral-health credits.',
    description: `DSST Substance Abuse covers drug classifications and pharmacology, major theories of addiction, treatment and recovery approaches, and prevention policy. The exam is pitched at the introductory level for students in psychology, counseling, social work, and health fields. It rewards a factual grasp of how substances affect the body and what works in treatment rather than clinical practice.`,
    quickAnswer: {
      summary: `DSST Substance Abuse is a 100-question, two-hour credit-by-exam test on drugs, addiction, and treatment. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of substance-abuse study for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Strong fit for psychology, counseling, and health majors',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST substance-abuse credit', 'Download the official fact sheet', 'Study drug classes and pharmacology', 'Review theories and treatment', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; intro psychology helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Drug classifications and pharmacology', note: 'Categories, effects, dependence' },
      { name: 'Theories of addiction', note: 'Biological, psychological, social models' },
      { name: 'Treatment approaches', note: 'Therapy, medication, recovery' },
      { name: 'Prevention and policy', note: 'Education, law, public health' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Psychology, counseling, and health students needing a substance-abuse credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a behavioral-health or elective requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with an intro-psychology background; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers drug classes, addiction theory, treatment, and prevention',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-fundamentals-of-counseling', 'dsst-lifespan-developmental-psychology'],
    sourceUrl: 'https://getcollegecredit.com/exam/substance-abuse/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-technical-writing',
    body: 'Prometric',
    tagline: 'Learn to write instructions, reports, and docs, and earn three credits.',
    description: `DSST Technical Writing covers the principles of clear professional communication: audience and purpose, document design, instructions and procedures, reports, and technical style and editing. The exam emphasizes producing usable documents rather than literary expression, so it suits business, science, engineering, and technical-communication students. It is usually a lower-level writing credit.`,
    quickAnswer: {
      summary: `DSST Technical Writing is a 100-question, two-hour credit-by-exam test on professional and technical communication. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of technical writing for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Directly useful for business and STEM fields',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST technical-writing credit', 'Download the official fact sheet', 'Study audience and design', 'Review instructions and reports', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; college-level writing helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Audience and purpose', note: 'Analyzing readers, goals' },
      { name: 'Document design', note: 'Layout, visuals, usability' },
      { name: 'Instructions and procedures', note: 'Steps, clarity, safety' },
      { name: 'Reports', note: 'Structure, data, recommendations' },
      { name: 'Technical style and editing', note: 'Plain language, revision' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'Business, STEM, and communication students needing a writing credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a lower-level writing or communication requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical if you write regularly; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers audience, document design, instructions, and reports',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-principles-of-advanced-english-composition', 'dsst-principles-of-public-speaking'],
    sourceUrl: 'https://getcollegecredit.com/exam/technical-writing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dsst-the-civil-war-and-reconstruction',
    body: 'Prometric',
    tagline: 'Master the war and its aftermath and earn three US-history credits.',
    description: `DSST The Civil War and Reconstruction covers the causes, conduct, and consequences of the American Civil War and the Reconstruction era that followed. The exam moves from the sectional crisis and secession through the major campaigns, emancipation, and the political and social struggles of Reconstruction. It rewards a grasp of causation and change over memorized battle dates, and it is a strong US-history or general-education credit.`,
    quickAnswer: {
      summary: `DSST The Civil War and Reconstruction is a 100-question, two-hour credit-by-exam test on the war and its aftermath. A scaled score of 400 on the 200-500 scale earns the ACE recommendation of 3 semester hours at schools that accept DSST.`,
      advantages: [
        'Replaces a semester of Civil War history for $100 plus a site fee',
        'Available year-round at DSST sites and online',
        'Focuses on causation and reconstruction, not just battles',
        'DANTES funds the first attempt for eligible service members'
      ]
    },
    roadmap: ['Confirm your school accepts DSST Civil War credit', 'Download the official fact sheet', 'Study causes and secession', 'Review the war and emancipation', 'Score 400+ to bank three credits'],
    prerequisites: 'None — open to anyone; US history background helps.',
    examMeta: {
      questions: '100 multiple choice',
      time: '2 hours',
      pass: '400 (ACE credit-granting score)',
      fee: '$100 + test-site administration fee',
      format: 'Multiple choice',
      admin: 'DSST-approved test center or online proctoring'
    },
    topics: [
      { name: 'Causes of the war', note: 'Sectionalism, slavery, secession' },
      { name: 'The war years', note: 'Strategy, major campaigns, home front' },
      { name: 'Emancipation', note: 'Abolition, the Emancipation Proclamation' },
      { name: 'Reconstruction', note: 'Amendments, readmission, backlash' }
    ],
    examEssentials: [
      ['Credit', 'ACE recommends 3 semester hours at 400'],
      ['Score scale', '200-500 scaled'],
      ['Retake', '30-day wait; full fee each attempt'],
      ['Delivery', 'Year-round at DSST sites or online']
    ],
    timeline: [
      { stage: 'Check your school\'s DSST policy', duration: '1 week' },
      { stage: 'Study the content outline', duration: '3-5 weeks' },
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
    audience: 'History and general-education students needing a US-history credit',
    time: '3-5 weeks self-study',
    cost: '$120-$150',
    faqs: [
      { q: 'What score do I need to pass?', a: 'ACE recommends 400 on the 200-500 scale as the credit-granting score, and most schools follow that. Confirm any higher minimum with your registrar.' },
      { q: 'How many credits is it worth?', a: 'Three semester hours under the ACE recommendation. It commonly satisfies a US-history or general-education requirement.' },
      { q: 'How long should I study?', a: 'Three to five weeks is typical with a basic US-history background; use the reference texts in the official fact sheet.' },
      { q: 'Will my college accept the credit?', a: 'About 1,900 institutions accept DSST, but confirm this specific title is on your school\'s approved list before paying.' },
      { q: 'Can I retake it if I fail?', a: 'Yes, after a 30-day wait, paying the full $100 again. Failed attempts are not posted to your transcript.' }
    ],
    summaryPoints: [
      'Covers causes, war, emancipation, and Reconstruction',
      '100 questions in two hours; score 400 for the ACE credit recommendation',
      'Worth 3 semester hours at the baccalaureate level where accepted',
      '$100 plus a site fee, free first attempt for DANTES-eligible military'
    ],
    relatedSlugs: ['dsst-a-history-of-the-vietnam-war', 'clep-history-of-the-united-states-i'],
    sourceUrl: 'https://getcollegecredit.com/exam/the-civil-war-and-reconstruction/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'modern-states-freshman-year-for-free',
    body: 'Modern States Education Alliance',
    tagline: 'Take free professor-led courses, get a CLEP voucher, and earn credit at zero exam cost.',
    description: `Modern States Freshman Year for Free is a nonprofit program that offers free, professor-taught online courses aligned to CLEP (and many AP) exams, then issues a voucher covering the CLEP exam fee once you finish the coursework. The goal is to let a motivated learner bank roughly a freshman year of college credit without paying for the exams. Anyone 13 or older can enroll, and completing about eight accepted exams can add up to a year of credit at a participating college.`,
    quickAnswer: {
      summary: `Modern States Freshman Year for Free provides free online courses that prepare you for CLEP exams; finishing a course earns a voucher that covers the $97 CLEP exam fee. Pass about eight accepted exams and you can potentially earn a freshman year of college credit at no exam cost.`,
      advantages: [
        'All courses are free and taught by college professors',
        'Voucher covers the $97 CLEP exam fee after 75% course completion',
        'About 32 courses map to the major CLEP titles',
        'Open to anyone 13 or older, fully self-paced'
      ]
    },
    roadmap: ['Create a free Modern States account', 'Enroll in a CLEP-aligned course', 'Complete 75% and pass the final', 'Request your CLEP voucher', 'Book and pass the CLEP exam'],
    prerequisites: 'None — open to anyone 13 or older; no prior college experience required.',
    examMeta: {
      questions: 'Varies by CLEP exam (typically ~100 questions)',
      time: 'Varies by CLEP exam (typically 90-120 minutes)',
      pass: 'CLEP 50 (ACE credit-granting score)',
      fee: '$0 for the exam via voucher; possible test-center fee',
      format: 'CLEP multiple choice (and essays for some titles)',
      admin: 'CLEP test center or CLEP with Remote Proctoring'
    },
    topics: [
      { name: 'Free CLEP-aligned courses', note: '32 courses across social science, math, science, business, languages' },
      { name: 'Voucher eligibility', note: 'Complete 75% of coursework and score 75% on the final' },
      { name: 'Exam delivery', note: 'CLEP centers or remote proctoring via College Board' },
      { name: 'Credit transfer', note: 'Each college sets scores and totals accepted' }
    ],
    examEssentials: [
      ['Cost', 'Exam fee covered by voucher; center fee may apply'],
      ['Eligibility', 'Age 13+, free account'],
      ['Target', 'Up to a freshman year of credit via ~8 exams'],
      ['Delivery', 'Year-round CLEP testing']
    ],
    timeline: [
      { stage: 'Create account and enroll', duration: 'Day 1' },
      { stage: 'Complete a course (75%+ and final 75%+)', duration: 'days to months' },
      { stage: 'Request and use the CLEP voucher', duration: 'up to 10 business days' },
      { stage: 'Schedule and take the CLEP exam', duration: '1-2 weeks' },
      { stage: 'Send scores to your college', duration: 'after results' }
    ],
    costBreakdown: {
      items: [
        { item: 'Modern States course', fee: '$0' },
        { item: 'CLEP exam fee (covered by voucher)', fee: '$0 ($97 value)' },
        { item: 'Test-center administration fee', fee: '$0-$40 (may apply)' },
        { item: 'Retake if needed', fee: 'Full CLEP fee unless re-vouchered' }
      ],
      total: '$0 if voucher covers the exam; possible small center fee',
      footnote: 'Modern States covers the $97 CLEP exam fee with a voucher. Some test centers charge a separate administration fee that the voucher may not cover; review the site policy before booking.'
    },
    difficulty: 'Moderate',
    audience: 'High-school, college, adult, and military learners seeking free credit',
    time: 'Varies by number of courses attempted',
    cost: '$0-$40',
    faqs: [
      { q: 'How do I get the free CLEP exam?', a: 'Finish at least 75% of a Modern States course and average 75% or higher on its final. A voucher request then appears in the course and covers the $97 CLEP exam fee.' },
      { q: 'Can I really earn a free freshman year?', a: 'If you pass about eight CLEP exams that your college accepts for credit, you can accumulate roughly a freshman year\'s worth. The college decides which scores and how many credits count.' },
      { q: 'How long does it take to finish a course?', a: 'Courses are self-paced; some learners finish in a few days, others take months. Completion time depends on your schedule and the subject.' },
      { q: 'Does the voucher cover everything?', a: 'It covers the $97 CLEP exam fee. A test-center administration fee may still apply and is sometimes reimbursable; check Modern States\' reimbursement terms.' },
      { q: 'Who is eligible?', a: 'Anyone 13 or older can create a free account and take courses. You book the actual CLEP exam through the College Board using the voucher.' }
    ],
    summaryPoints: [
      'Free professor-taught courses aligned to CLEP and AP exams',
      'Voucher covers the $97 CLEP exam fee after 75% course completion',
      'About eight accepted exams can add up to a freshman year of credit',
      'Open to anyone 13+ and fully self-paced'
    ],
    relatedSlugs: ['clep-american-government', 'clep-college-algebra'],
    sourceUrl: 'https://modernstates.org/freshman-year-free/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'tecep-thomas-edison-credit-by-exam',
    body: 'Thomas Edison State University',
    tagline: 'Earn TESU or transfer credit by exam for as little as $54 per credit.',
    description: `TECEP, the Thomas Edison Credit-by-Examination Program, is a catalog of roughly 100 subject exams written and graded by Thomas Edison State University faculty. Each exam lets a learner earn three or more credits in business, humanities, science, and applied fields without taking a course, and TESU posts passing scores directly to its transcript. Because fees are charged per credit at $54 (lower-level) or $81 (upper-level) as of the 2026 term, TECEP is often the lowest-cost credit-by-exam option available.`,
    quickAnswer: {
      summary: `TECEP is Thomas Edison State University\'s credit-by-exam program of about 100 titles, each typically worth three credits. Fees are $54 per credit for lower-level exams and $81 for upper-level (2026 term), so a three-credit exam runs roughly $162-$243 with no separate vendor fee.`,
      advantages: [
        'Among the lowest-cost credit-by-exam options at $54-$81 per credit',
        'About 100 titles across business, humanities, and science',
        'Open to guest students, not just TESU enrollees',
        'Passing scores post directly to a TESU transcript for transfer'
      ]
    },
    roadmap: ['Confirm your school accepts the TECEP title', 'Create a TESU or guest account', 'Pay the per-credit fee', 'Schedule online or at a proctor site', 'Study and pass the exam'],
    prerequisites: 'None — open to guest and matriculated students; no prior coursework required.',
    examMeta: {
      questions: 'Varies by title (commonly 50-100 multiple choice)',
      time: 'Varies by title (commonly about 2 hours)',
      pass: 'Set per title by TESU (typically a C equivalent)',
      fee: '$54/lower-level credit; $81/upper-level credit (2026)',
      format: 'Multiple choice and some essay components',
      admin: 'Online proctoring or approved test center'
    },
    topics: [
      { name: 'Business and management', note: 'Accounting, marketing, management titles' },
      { name: 'Humanities and social science', note: 'History, literature, psychology titles' },
      { name: 'Science and applied', note: 'Biology, computer, technical titles' },
      { name: 'General education', note: 'Math, writing, and interdisciplinary titles' }
    ],
    examEssentials: [
      ['Fee', '$54/lower credit, $81/upper credit (2026)'],
      ['Credits', 'Most titles worth 3 credits'],
      ['Delivery', 'Online proctoring or test center'],
      ['Transfer', 'Accepted by many colleges']
    ],
    timeline: [
      { stage: 'Confirm your school\'s TECEP policy', duration: '1-3 days' },
      { stage: 'Register and pay the per-credit fee', duration: '15 minutes' },
      { stage: 'Study the official content outline', duration: '2-6 weeks' },
      { stage: 'Schedule and sit the exam', duration: 'test day' },
      { stage: 'Receive your score', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'TECEP exam (3 lower-level credits)', fee: '$162' },
        { item: 'TECEP exam (3 upper-level credits)', fee: '$243' },
        { item: 'Retake after waiting period', fee: 'Full per-credit fee again' },
        { item: 'Prep materials (optional)', fee: '$0-$60' }
      ],
      total: '$162-$243 for a typical three-credit exam',
      footnote: 'Fees are per credit and follow TESU\'s published tuition schedule, approved June 2026 for the August 2026 term. Some titles carry different credit totals; confirm the exact fee before registering.'
    },
    difficulty: 'Moderate',
    audience: 'Adult learners, transfer students, and service members seeking low-cost credit',
    time: '2-6 weeks self-study',
    cost: '$162-$243 per three-credit exam',
    faqs: [
      { q: 'Do I have to be a TESU student to take a TECEP?', a: 'No. Guest students can register for TECEP exams without enrolling in a degree program, and the credits transfer to many other colleges that accept TECEP.' },
      { q: 'How much does a TECEP cost?', a: 'Fees are per credit: $54 for lower-level (100-200) and $81 for upper-level (300-400) exams as of the 2026 term. A typical three-credit exam runs about $162-$243, with no separate vendor fee.' },
      { q: 'How many credits is each exam worth?', a: 'Most TECEP titles are worth three credits. Your home college decides how the credit transfers and which requirement it satisfies.' },
      { q: 'Can I retake a TECEP if I fail?', a: 'Yes, after the required waiting period, on a new registration and full per-credit fee. Only passing scores are posted to the TESU transcript for credit.' },
      { q: 'Is TECEP cheaper than CLEP or DSST?', a: 'Often yes. Because TECEP is charged per credit with no separate vendor fee, a three-credit exam can cost less than CLEP or DSST once center fees are added, though delivery options differ.' }
    ],
    summaryPoints: [
      'About 100 TESU-written credit-by-exam titles',
      'Fees $54/$81 per credit (2026); ~$162-$243 for three credits',
      'Open to guests; passing scores post for transfer',
      'Covers business, humanities, science, and general education'
    ],
    relatedSlugs: ['clep-financial-accounting', 'dsst-principles-of-financial-accounting'],
    sourceUrl: 'https://www.tesu.edu/academics/tecep',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'uexcel-excelsior-college-examinations',
    body: 'Excelsior University',
    tagline: 'Retired in 2022 — UExcel credits you already earned still transfer; use CLEP/DSST for new credit.',
    description: `UExcel (the UExcel / Excelsior College Examinations, formerly Regents College Exams) was Excelsior University\'s long-running credit-by-exam program offering low-cost subject tests across business, science, humanities, and nursing. The program was retired after August 21, 2022, and no new exams can be registered. Credits earned before that date remain valid and transferable to accepting institutions, and Excelsior still accepts many other exams such as CLEP, DSST, and AP for current credit needs.`,
    quickAnswer: {
      summary: `UExcel was Excelsior University\'s credit-by-exam program, now retired as of August 21, 2022. Exams taken before that date still earn transferable credit (typically three credits each at a passing performance). For new credit, use an active CLEP, DSST, or TECEP title, which Excelsior and other schools map to the same courses.`,
      advantages: [
        'Legacy UExcel credits remain valid and transferable',
        'One of the lowest-cost programs in its era',
        'Excelsior maps current CLEP/DSST/AP scores to the same courses',
        'Broad subject list from nursing to business to humanities'
      ]
    },
    roadmap: ['Confirm your school accepts legacy UExcel credit', 'Locate your historical UExcel score', 'Send the official record to your college', 'Pick a live alternative (CLEP/DSST/TECEP) for new credit', 'Map the new score to the same course'],
    prerequisites: 'None for legacy credit; the program is closed to new registrations.',
    examMeta: {
      questions: 'Varied by title (commonly multiple choice)',
      time: 'Varied by title (commonly about 2-3 hours)',
      pass: 'Passing performance, typically a C equivalent (program retired)',
      fee: 'Discontinued — no new registrations',
      format: 'Multiple choice and some essay components',
      admin: 'Retired; formerly test centers and online proctoring'
    },
    topics: [
      { name: 'Business and management', note: 'Accounting, marketing, management (legacy)' },
      { name: 'Science and nursing', note: 'Anatomy, chemistry, nursing titles (legacy)' },
      { name: 'Humanities and social science', note: 'Psychology, sociology, philosophy (legacy)' },
      { name: 'Mathematics and technology', note: 'Calculus, statistics, programming (legacy)' }
    ],
    examEssentials: [
      ['Status', 'Retired August 21, 2022'],
      ['Legacy credit', 'Still valid and transferable'],
      ['Typical credit', '3 credits per passed exam'],
      ['Successor', 'CLEP, DSST, or TECEP for new credit']
    ],
    timeline: [
      { stage: 'Confirm acceptance of legacy credit', duration: '1-3 days' },
      { stage: 'Request your historical score report', duration: '1-2 weeks' },
      { stage: 'Send records to your college', duration: 'per school' },
      { stage: 'Choose a live alternative for new credit', duration: 'varies' }
    ],
    costBreakdown: {
      items: [
        { item: 'New UExcel registration', fee: 'Not available (retired)' },
        { item: 'Legacy score report request', fee: 'Per Excelsior records policy' },
        { item: 'Live alternative (CLEP/DSST)', fee: '$100 plus site fee' }
      ],
      total: 'Legacy credit free to use; new credit via other programs',
      footnote: 'UExcel closed to new registrations on August 21, 2022. Fees below reflect the live alternatives (CLEP/DSST) you would now use; Excelsior publishes equivalencies mapping those scores to former UExcel courses.'
    },
    difficulty: 'Moderate',
    audience: 'Students with legacy UExcel credit, or anyone needing a live credit-by-exam alternative',
    time: 'n/a (retired)',
    cost: 'Legacy credit free; alternatives $100+',
    faqs: [
      { q: 'Can I still take a UExcel exam?', a: 'No. Excelsior stopped offering UExcel exams after August 21, 2022, and no new registrations are accepted. Credits you earned before that date are still valid and transferable.' },
      { q: 'What should I take instead?', a: 'For the same subjects, use an active CLEP or DSST title, or a TECEP exam. Excelsior and most other colleges publish equivalencies that map those scores to the courses UExcel used to cover.' },
      { q: 'How many credits did UExcel exams grant?', a: 'Almost every UExcel title granted three credits for a passing performance. Your receiving college decides how the legacy credit transfers today.' },
      { q: 'Do my old UExcel credits expire?', a: 'They do not expire at the source; Excelsior retains the record permanently. The receiving college may set its own age limit on how old a score it will still post.' },
      { q: 'Is UExcel the same as ECE or Regents College Exams?', a: 'Yes. UExcel was also known as Excelsior College Examinations (ECE) and, earlier, Regents College Exams; all refer to the same retired program.' }
    ],
    summaryPoints: [
      'UExcel was Excelsior\'s credit-by-exam program, retired August 21, 2022',
      'Legacy credits earned before that date remain valid and transferable',
      'Most titles granted three credits for a passing performance',
      'Use CLEP, DSST, or TECEP for current credit-by-exam needs'
    ],
    relatedSlugs: ['clep-financial-accounting', 'dsst-principles-of-financial-accounting'],
    sourceUrl: 'https://www.excelsior.edu/exams/content-guides/',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
