const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CompTIA and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CompTIA\'s AI Essentials certification page and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AI Essentials" — the CompTIA AI Essentials certification validates foundational AI literacy, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the AI and data careers the credential serves is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit must be read with an honest caveat: AI Essentials is an entry-level literacy credential, so the realistic benchmark for a new holder sits far below the data-scientist median — the credential typically appears on the resume of a business professional, a career-changer or an IT professional adding AI literacy, and the AI-career wage applies only after the experience the median describes. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in government data. Read the number as the market for the occupation the certificate is a step toward.',
    rows: [
      { label: 'Median annual wage, data scientists (destination market)', value: '$112,590', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $68,170', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $172,270', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Median, computer support specialists (entry benchmark)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 34 percent growth for data scientists from 2024 to 2034, about 23,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'CompTIA publishes no pass rate — the AI Essentials exam has 50 questions in 60 minutes, with the result reported as pass/fail',
    summary: 'CompTIA does not publish cohort pass rates for the AI Essentials exam, and third-party surveys are not official data, so we do not treat them as authoritative. What CompTIA does publish is the format: the AI Essentials exam (AI-001) has 50 multiple-choice questions with a 60-minute time limit, delivered at Pearson VUE centres or through online proctoring, and the result is reported as pass/fail on CompTIA\'s scale. The exam content follows the published exam objectives: the fundamentals of artificial intelligence, the AI process and workflows, the applications of AI, and the ethical and governance considerations. The absence of a published pass rate is not an absence of standards: the 50-question format rewards broad AI literacy rather than deep technical depth, and the exam is positioned as the entry credential for AI. The practical reading: the AI Essentials is an accessible entry exam, and preparation uses the free official training resources and the exam objectives, with the recognition that the credential is a literacy signal, not a technical certification.',
    source: { label: 'CompTIA - AI Essentials certification', url: 'https://www.comptia.org/certifications/ai-essentials' },
    caveat: 'CompTIA publishes the format and pass/fail reporting but no cohort pass rate.'
  },
  studyPlan: {
    summary: 'The AI Essentials exam (AI-001) is a 50-question, 60-minute exam built on the published objectives: the fundamentals of AI, the AI process and workflows, the applications of AI, and the ethical and governance considerations. A defensible plan runs 15 to 30 hours over one to two weeks, using CompTIA\'s free official training. Week one: the AI fundamentals — the definitions, the AI types (narrow vs general), the machine-learning basics and the generative-AI concepts, using the free official training modules. Week two: the applications and the ethics — the AI use cases across industries, the AI process and workflows, and the ethical and governance considerations — then the practice questions and a timed run at the real 50-question, 60-minute format. The plan is literacy-based because the exam rewards breadth across the objectives; a candidate with basic AI exposure moves quickly through the modules.',
    totalHours: '15-30 hours over 1-2 weeks',
    weeks: [
      { label: 'Week 1', focus: 'AI fundamentals', tasks: ['The AI definitions and types', 'Machine learning and generative AI basics', 'The free official training modules'], hours: 10 },
      { label: 'Week 2', focus: 'Applications, ethics, drill', tasks: ['AI use cases and workflows', 'Ethics and governance', 'Practice questions and one timed run'], hours: 12 }
    ],
    variants: [
      { label: 'Working with AI tools', detail: 'Compress the fundamentals; the ethics and governance material is the new content.' },
      { label: 'New to AI', detail: 'Add a week of general AI concepts before the official modules.' }
    ]
  },
  prepStrategies: {
    summary: 'The AI Essentials rewards broad AI literacy, so the dominant strategy is using the free official training and the published objectives as the scope map: the exam draws from the fundamentals, the workflows, the applications and the ethics, and candidates who study only one area miss the others. Second, learn the AI terminology precisely — the AI types, the machine-learning concepts and the generative-AI basics — because the exam tests the vocabulary. Third, cover the applications and the workflows deliberately, including the real-world use cases the exam presents. Fourth, study the ethical and governance considerations, a distinct objective area that candidates focused on the technology often miss. Finally, take at least one timed practice run at the real 50-question, 60-minute format; the pace is part of the test, and the practice questions from CompTIA mirror the item style.',
    items: [
      { title: 'Cover all four objective areas', detail: 'Fundamentals, workflows, applications and ethics.' },
      { title: 'Learn the AI terminology', detail: 'AI types, ML concepts and generative-AI basics are tested.' },
      { title: 'Study the applications and workflows', detail: 'The use cases and the AI process are tested.' },
      { title: 'Cover ethics and governance', detail: 'A distinct objective area; technology-only study misses it.' },
      { title: 'Run one timed practice exam', detail: '50 questions in 60 minutes; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'AI Essentials prep is inexpensive because CompTIA provides free official resources. The free official training, the published exam objectives and the practice questions cover the scope at no cost. Third-party providers sell AI Essentials courses and practice exams at roughly $30-$150; the free official stack is sufficient for a disciplined candidate. The exam fee is about $139. A realistic total budget is $150 to $300 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA free official training', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Exam objectives', values: ['Free', 'Official PDF', 'The exam-scope reference'] },
      { label: 'Practice questions', values: ['Free or included', 'Official practice items', 'The closest item style'] },
      { label: 'Third-party courses', values: ['$30-$150', 'Video courses and quizzes', 'Structured alternatives'] },
      { label: 'AI Essentials exam', values: ['~$139', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the AI-001 exam fee is about $139; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AI Essentials mistake is studying one objective area: candidates who focus on the AI fundamentals miss the applications, workflows and ethics items, which are real shares of the exam. The fix is full-objective coverage. The second mistake is treating the credential as a technical certification and studying deep ML theory; the exam is a literacy test, and the terminology and use cases are what score. Third, candidates skip the ethics and governance material, a distinct objective area. Fourth, some candidates never take a timed practice run and misjudge the 60-minute pace. Finally, treating AI Essentials as the destination misses the point: it is an entry literacy credential, and the technical AI certifications are what benchmark the AI-career wages.',
    items: [
      { mistake: 'Studying one objective area', fix: 'Cover fundamentals, workflows, applications and ethics.' },
      { mistake: 'Studying deep ML theory', fix: 'The exam is a literacy test; the terminology and use cases score.' },
      { mistake: 'Skipping ethics and governance', fix: 'A distinct objective area; cover it.' },
      { mistake: 'Never timing a practice run', fix: '50 questions in 60 minutes; run a timed practice exam.' },
      { mistake: 'Treating it as the finish', fix: 'Plan the technical AI certifications as the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The AI Essentials exam is a 50-question multiple-choice exam in 60 minutes. The items test the published objectives: the AI fundamentals, the AI process and workflows, the applications of AI, and the ethical and governance considerations — with many items asking for the correct concept, use case or consideration. Samples below are editor-written illustrations of the published objectives, not live exam items; they show the AI-literacy style of the real items.',
    types: [
      { name: 'Concept items', share: 'Largest block', detail: 'AI types, ML concepts and generative-AI basics.' },
      { name: 'Application items', share: 'Large block', detail: 'AI use cases and the AI process and workflows.' },
      { name: 'Ethics and governance items', share: 'Meaningful block', detail: 'The ethical considerations and governance.' }
    ],
    samples: [
      {
        prompt: 'Which term describes an AI system that can perform a specific task, such as image recognition, without being able to generalise beyond that task?',
        options: ['A. Narrow (weak) AI', 'B. General (strong) AI', 'C. Superintelligence', 'D. Robotics'],
        answer: 'A',
        explanation: 'Narrow AI performs a specific task without generalising beyond it — the definition the exam rewards. General AI would match human cognitive abilities across tasks, and superintelligence exceeds them.'
      },
      {
        prompt: 'A bank uses an AI model to approve loan applications. Under responsible-AI practice, the bank should:',
        options: ['A. Evaluate the model for bias and ensure transparency and accountability in the decisions', 'B. Deploy the model without review', 'C. Hide the model\'s role from regulators', 'D. Skip the governance'],
        answer: 'A',
        explanation: 'Responsible AI requires evaluating models for bias and ensuring transparency, accountability and governance — especially for high-stakes decisions like lending. Unreviewed deployment, concealment or skipped governance each fail the responsible-AI principles.'
      },
      {
        prompt: 'Which statement best describes the AI process in a typical workflow?',
        options: ['A. Identifying the problem, preparing the data, training and evaluating the model, and deploying and monitoring it', 'B. Deploying models before any data work', 'C. Writing code without data', 'D. Skipping evaluation'],
        answer: 'A',
        explanation: 'The AI workflow is problem definition, data preparation, model training and evaluation, and deployment with monitoring — the process the exam rewards. The other options skip the structured steps.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The AI Essentials exam is a 50-question, 60-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 72 seconds per item, flag uncertain items for review, and finish with time to spare. You receive your score on screen immediately, with the official result following. If you fail, CompTIA allows retakes after a waiting period. On a pass, the AI Essentials certification does not expire in the traditional sense (it is a non-renewable entry credential — confirm the current policy on the CompTIA site). The afterwards matters: add the credential to your profile, and plan the technical AI certifications as the next step.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '50 questions in 60 minutes; pace ~72 seconds per item.' },
      { time: 'After submit', detail: 'Score appears on screen; the official result follows.' },
      { time: 'Next', detail: 'Add the credential to your profile and plan the next step.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '60 minutes for 50 questions; the clock does not pause',
      'The entry credential has no traditional renewal — confirm the current policy'
    ],
    afterwards: 'On a pass, add the credential to your profile. On a fail, retake after additional study. Plan the technical AI certifications as the next step.'
  }
};

export default data;
