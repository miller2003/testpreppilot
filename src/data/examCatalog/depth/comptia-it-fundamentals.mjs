const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CompTIA and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CompTIA\'s IT Fundamentals (ITF+) certification page (FC0-U61) and BLS OOH Computer Support Specialists (SOC 15-1231), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$61,550 median for computer support specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "ITF+" — the CompTIA IT Fundamentals credential certifies entry-level IT literacy, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Computer Support Specialists, SOC 15-1231, which had a May 2024 median wage of $61,550, with the lowest 10 percent under $37,670 and the highest 10 percent above $101,440. The fit is deliberate: ITF+ holders typically move into help-desk, IT support and entry-level technical roles, and BLS counted 614,800 computer support specialist jobs in 2024, projecting 6 percent growth from 2024 to 2034 with about 62,900 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, and ITF+ is explicitly an entry-level literacy credential, so the realistic benchmark for a new holder sits at or below the median, climbing with experience and further certification. Read the number as the market for the support occupation, and note that ITF+ is usually a stepping stone — the A+ and beyond build directly on it, and the credential itself carries no wage premium in BLS data.',
    rows: [
      { label: 'Median annual wage, computer support specialists', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $37,670', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $101,440', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Median, network administrators (senior track)', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' }
    ],
    growth: 'BLS projects 6 percent growth for computer support specialists from 2024 to 2034, about 62,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'CompTIA publishes no pass rate — it publishes the passing score: 650 of 900, with a 75-question, 60-minute exam',
    summary: 'CompTIA does not publish cohort pass rates for the ITF+ exam, and third-party surveys are not official data, so we do not treat them as authoritative. What CompTIA does publish is the format and the passing standard: the IT Fundamentals exam (FC0-U61) has 75 questions, a 60-minute time limit, and a passing score of 650 on the 100-900 scale. The exam is delivered at Pearson VUE centres or through online proctoring. Unlike CompTIA\'s professional-track certifications, ITF+ is a non-expiring credential — it does not require renewal or continuing education, because it is positioned as a literacy certificate rather than a career-track certification. The exam content follows the published exam objectives: IT concepts and terminology; infrastructure; applications and software; software development; database fundamentals; and security. The absence of a published pass rate is not an absence of standards: the 650 line is an accessible bar for a literacy exam, but the breadth of the objectives is real. The practical reading: target 80 percent-plus on practice and use CompTIA\'s official exam objectives and sample questions, the closest thing to the real item style.',
    source: { label: 'CompTIA - IT Fundamentals (ITF+) certification', url: 'https://www.comptia.org/certifications/it-fundamentals' },
    caveat: 'CompTIA publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The ITF+ exam (FC0-U61) is a 75-question, 60-minute exam with a 650/900 passing score, built on the published exam objectives: IT concepts and terminology; infrastructure; applications and software; software development; database fundamentals; and security. The exam is a literacy test — it validates that you understand how computers, networks, software, databases and security work at a foundational level — and it has no prerequisites, making it the natural starting point for career-changers. A defensible plan runs 30 to 60 hours over 3 to 5 weeks. Weeks 1-2 cover IT concepts and infrastructure: hardware components, operating systems, networking basics and troubleshooting fundamentals. Week 3 covers applications, software and software development concepts. Week 4 covers database fundamentals and security basics. Week 5 adds practice-question drilling and a timed simulation at the real 60-minute format. The plan is short because the scope is foundational, and the exam rewards broad familiarity more than depth; a beginner with consistent study passes comfortably, and the same material forms the first phase of A+ preparation.',
    totalHours: '30-60 hours over 3-5 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Concepts and infrastructure', tasks: ['Hardware components and their roles', 'Operating systems and networking basics', 'Troubleshooting fundamentals'], hours: 25 },
      { label: 'Week 3', focus: 'Software and development', tasks: ['Applications and software concepts', 'Software development lifecycle basics', 'Licensing and installation'], hours: 10 },
      { label: 'Week 4', focus: 'Databases and security', tasks: ['Database fundamentals and structures', 'Security concepts and best practices', 'Threats and protection basics'], hours: 10 },
      { label: 'Week 5', focus: 'Drill and simulate', tasks: ['Practice-question drilling in volume', 'One timed 60-minute simulation', 'Review weak objectives'], hours: 10 }
    ],
    variants: [
      { label: 'Complete beginner', detail: 'Stretch to 6 weeks and add 1 week of computer-literacy orientation before the objectives.' },
      { label: 'A+-bound', detail: 'ITF+ material is the first phase of A+; study it with that depth in mind to avoid rework.' }
    ]
  },
  prepStrategies: {
    summary: 'The ITF+ exam rewards broad familiarity across six objective areas, so the dominant strategy is coverage: work every objective group rather than going deep on favourite topics, because the exam draws from all six. Second, use the free official exam objectives as the scope map and audit every study resource against them; for a literacy exam, scope discipline matters more than depth. Third, learn by doing at a low level: explore an operating system, break and fix a simple network configuration, and write a tiny script, because the exam items test applied understanding of how things work. Fourth, use CompTIA\'s official CertMaster practice or sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice. Fifth, take at least one timed simulation; 75 questions in 60 minutes is 48 seconds per item, and the pacing is the most common beginner failure mode. Finally, remember ITF+ does not expire — but treat it as the first step of a path, since employers hire on the professional-track credentials that follow it.',
    items: [
      { title: 'Cover all six objective areas', detail: 'The exam draws from every group; broad coverage beats deep dives.' },
      { title: 'Audit against the official objectives', detail: 'The free objectives are the scope map for a literacy exam.' },
      { title: 'Learn by doing', detail: 'Explore an OS, fix a network issue, write a small script.' },
      { title: 'Hold to 80%+ on practice', detail: '48 seconds per item; practise the pace.' },
      { title: 'Treat it as the first step', detail: 'ITF+ does not expire, but employers hire on the A+ and beyond.' }
    ]
  },
  resourceComparison: {
    summary: 'ITF+ prep is inexpensive because the entry tier has rich low-cost resources. CompTIA\'s official exam objectives are free; the CompTIA IT Fundamentals Study Guide costs roughly $50-$70; and CertMaster Learn + Practice for ITF+ runs around $150-$250. Third-party providers sell ITF+ courses and question banks at $30-$150, and there is a deep pool of free YouTube courses and practice-question sites because the exam is popular with beginners. A realistic total budget is $100 to $400 including the exam fee (about $134). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA exam objectives', values: ['Free', 'Official PDF', 'The authoritative scope; audit every resource against it'] },
      { label: 'ITF+ Study Guide', values: ['$50-$70', 'Printed or digital book', 'Structured self-study of the objectives'] },
      { label: 'CertMaster Learn + Practice', values: ['$150-$250', 'Online learning + practice', 'The official learning path'] },
      { label: 'Third-party courses', values: ['$30-$150', 'Video courses and quizzes', 'Low-cost structured instruction'] },
      { label: 'Free YouTube + quiz sites', values: ['$0', 'Videos and practice items', 'Supplementary volume for beginners'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the FC0-U61 exam fee is about $134; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common ITF+ mistake is treating it as trivially easy and skipping study, then failing on the breadth of the objectives — the exam draws from all six areas, and beginners under-prepare the database and security groups. The fix is full coverage. The second mistake is memorising definitions instead of understanding how things work; the exam items apply concepts to described situations. Third, candidates misjudge the pace — 75 questions in 60 minutes is 48 seconds per item, and beginners who have never timed themselves run out of minutes. Fourth, some candidates over-invest in expensive courses for a literacy exam, when the free objectives plus a study guide and practice questions are sufficient. Finally, treating ITF+ as the end of the path is the quiet mistake: the credential does not expire, but the professional-track certifications (A+ and beyond) are what employers hire on, so plan the next step while the momentum is fresh.',
    items: [
      { mistake: 'Skipping study as "too easy"', fix: 'The exam draws from all six objective areas; cover them all.' },
      { mistake: 'Memorising definitions', fix: 'The items apply concepts to described situations; learn how things work.' },
      { mistake: 'Misjudging the pace', fix: '75 questions in 60 minutes; run a timed simulation.' },
      { mistake: 'Over-investing in courses', fix: 'Free objectives plus a guide and practice questions suffice.' },
      { mistake: 'Treating ITF+ as the finish', fix: 'Employers hire on the A+ and beyond; plan the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The ITF+ exam (FC0-U61) is a 75-question multiple-choice exam in 60 minutes. The items test foundational understanding across six objective areas — IT concepts and terminology, infrastructure, applications and software, software development, database fundamentals, and security — with many items presenting a described situation and asking for the correct concept, component or practice. The exam rewards broad applied familiarity more than depth. Samples below are editor-written illustrations of the published exam objectives, not live exam items; they show the foundational, applied style of the real items.',
    types: [
      { name: 'Concept items', share: 'Majority', detail: 'Terminology, components and how things work across the six areas.' },
      { name: 'Applied situation items', share: 'Meaningful share', detail: 'Described situations with the correct concept, component or practice.' }
    ],
    samples: [
      {
        prompt: 'Which component is primarily responsible for temporarily storing data and instructions that the CPU is actively using?',
        options: ['A. RAM', 'B. The hard disk drive', 'C. The power supply', 'D. The network card'],
        answer: 'A',
        explanation: 'RAM holds data and instructions the CPU is actively using — volatile, fast storage. The hard disk provides persistent storage, the power supply delivers electricity, and the network card handles connectivity.'
      },
      {
        prompt: 'A user wants to prevent unauthorised access to a laptop if it is lost. Which practice is most effective?',
        options: ['A. Full-disk encryption with a strong passphrase', 'B. A screensaver with a company logo', 'C. Keeping the device in a padded case', 'D. Installing a second operating system'],
        answer: 'A',
        explanation: 'Full-disk encryption makes the data unreadable without the passphrase, protecting it if the device is lost. A screensaver, a padded case or a second OS do not protect the data from access.'
      },
      {
        prompt: 'Which of the following is an example of a relational database structure?',
        options: ['A. Tables linked by keys', 'B. A text file of comma-separated values', 'C. An image file', 'D. A web page'],
        answer: 'A',
        explanation: 'Relational databases organise data into tables linked by keys — the defining structure of the relational model. A CSV text file, an image or a web page are not relational database structures.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam objectives, not live exam items.'
  },
  examDay: {
    summary: 'The ITF+ exam is a 75-question, 60-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 48 seconds per item, flag uncertain items for review, and finish with time to spare. You receive your score on screen immediately, with the official result following; CompTIA reports your scaled score against the 650 line. If you fail, CompTIA allows retakes after a waiting period. On a pass, the ITF+ certification does not expire — it requires no renewal or continuing education, which is unusual among CompTIA credentials. The afterwards matters: the credential is a foundation, so plan the next step (typically the A+ for support roles) while the material is fresh, and add the certificate to your professional profile.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '75 questions in 60 minutes; pace ~48 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 650/900 passing line.' },
      { time: 'Next', detail: 'Plan the next step — typically the A+ — while the material is fresh.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '60 minutes for 75 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your ITF+ does not expire and needs no renewal. On a fail, retake after additional study. Use the credential as the foundation for the A+ and the professional track.'
  }
};

export default data;
