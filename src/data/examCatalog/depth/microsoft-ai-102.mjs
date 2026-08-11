const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & AI certifications desk',
    bio: 'Microsoft certification structure comes from Microsoft Learn official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AI-102 exam structure, domains, and scoring against Microsoft Learn official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect software-developer pay at a May 2024 median of $132,270 (BLS) — AI-102 is the Azure AI Engineer Associate certification, and the AI-engineering roles it serves sit at the top of the software occupations',
    summary: 'The direct answer is that the AI-102 (Azure AI Engineer Associate) certification serves AI engineering roles that BLS classifies within software developers (SOC 15-1252), at a May 2024 median annual wage of $132,270, with the lowest 10 percent under about $83,000 and the highest 10 percent above about $188,000 — and AI-specialist roles within software engineering are among the highest-demand segments, though BLS has no AI-specific code. The honest framing is that the certification does not set pay — AI engineer salaries are set by market, employer, and experience — but the credential signals applied Azure AI skills (Azure AI services, Azure OpenAI, prompt engineering, and responsible AI) that employers list for Azure AI roles, and it sits in the fastest-growing segment of IT: BLS projects about 17 percent employment growth for software developers from 2024 to 2034, with AI-related specialisation at the leading edge. The exam itself is the role-based Azure AI Engineer credential: AI-102 requires approximately 40 to 60 questions in about 150 minutes, scored pass/fail at 700 on the 100-900 scale, covering planning and implementing Azure AI solutions — AI services, natural language processing, computer vision, generative AI with Azure OpenAI, document intelligence, and responsible AI. The practical read: AI-102 is the flagship Azure AI engineering certification, typically pursued by developers and data professionals with Azure experience (the AZ-900 fundamentals or equivalent knowledge is a common precursor), and its value is the Azure-AI employability signal in a market where AI skill demand is outstripping supply. For candidates deciding whether to pursue it, the exam rewards hands-on Azure AI service experience, and the strongest preparation combines Microsoft Learn modules with an Azure subscription lab.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1252)' },
      { label: 'Lowest 10 percent', value: 'less than $83,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $188,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+17%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Role-based credential', note: 'Azure AI Engineer Associate; valid 1 year, renewable' }
    ],
    growth: 'BLS projects about 17% growth for software developers from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rates — AI-102 is scored pass/fail at 700/900 with a ~40-60 question, 150-minute exam, and Microsoft reports scores rather than cohort pass data',
    summary: 'The core fact is that Microsoft does not publish pass rates for AI-102, and none is available from an independent source, because Microsoft reports candidate scores rather than cohort pass percentages. What is published is the exam structure: AI-102 is a role-based exam of approximately 40 to 60 questions with about 150 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 700 on the 100-900 scale. The exam covers the measured skills: plan and manage an Azure AI solution; implement decision-support and computer-vision solutions; implement natural language processing solutions; implement generative AI solutions with Azure OpenAI; and implement document intelligence and knowledge mining solutions — with the generative AI section reflecting the current Azure OpenAI stack. Because Microsoft publishes the skills-measured document, the preparation is studying the official Microsoft Learn learning paths and validating with hands-on Azure subscription work; Microsoft\u2019s role-based exams reward applied skills, and the classic failure mode is studying documentation without building the solutions. The certification is valid for one year and renewable through Microsoft\u2019s short renewal assessment. The honest advice is to treat the skills-measured document as the syllabus, build Azure AI services in a trial subscription, and take Microsoft\u2019s official practice assessment to calibrate before booking — the exam rewards knowing which Azure service and configuration fits each scenario.',
    source: { label: 'Microsoft Learn — AI-102 exam page', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/900 and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 weeks and 80 to 140 hours of study for AI-102, structured around the measured skills — planning AI solutions, computer vision, natural language processing, generative AI with Azure OpenAI, and document intelligence — with hands-on Azure subscription labs as the highest-yield study tool. The exam\u2019s weights favour the generative AI and NLP sections in the current blueprint, so allocate study time there first. The most effective sequence is: first, complete the official Microsoft Learn learning paths for the exam in order; second, stand up an Azure subscription with a free trial and build each AI service — Azure AI Language, Azure AI Vision, Azure OpenAI, and Document Intelligence — practising the API calls and configuration; third, take Microsoft\u2019s official practice assessment to calibrate; fourth, re-study the weak skills; and fifth, book the exam. The highest-yield habit is the hands-on Azure work: the role-based exam rewards applied service knowledge, and candidates who build the solutions score well above those who only read. Budget the generative AI and prompt-engineering content the most time, since it is both current and scenario-heavy. The final week should be a light review of the skills-measured document and the lab notes. After passing, plan the annual renewal assessment within 12 months.',
    totalHours: '80-140 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Azure AI foundations', tasks: ['Complete the Learn paths for planning AI solutions', 'Set up an Azure subscription', 'Build Azure AI services'], hours: 40 },
      { label: 'Weeks 4-7', focus: 'Vision + NLP', tasks: ['Build computer-vision and NLP solutions', 'Practise the API configurations', 'Take the official practice assessment'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Generative AI + document intelligence', tasks: ['Build Azure OpenAI solutions', 'Practise prompt engineering', 'Re-study weak skills'], hours: 35 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Review the skills-measured document', 'Light lab review', 'Book the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Short-form exam option', detail: 'Microsoft offers a shortened version of some exams; check the AI-102 page for the current format.' },
      { label: 'AI-900 fundamentals', detail: 'The entry-level Azure AI Fundamentals exam, a common precursor to AI-102.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes AI-102 is "build every Azure AI service in a real subscription, weight generative AI, and calibrate with the official practice assessment," and the single biggest error is studying documentation without hands-on Azure work, which the role-based exam punishes heavily. A second proven approach is mastering the "which service" item format — the exam presents a scenario and asks which Azure AI service and configuration fits — so building a service-purpose map is the highest-yield study artifact. Third, weight the generative AI and prompt-engineering content, since the current blueprint allocates it a large share and the items are scenario-heavy. Fourth, use the official practice assessment to calibrate readiness: Microsoft\u2019s practice exams mirror the question style, and your score is the honest signal. Fifth, plan the annual renewal — the certification is valid 12 months with a short renewal assessment. Finally, confirm the exam delivery format (center or online proctored) and practise the scheduling logistics, since online proctoring has its own environment requirements.',
    items: [
      { title: 'Build in a real Azure subscription', detail: 'The role-based exam rewards applied service knowledge.' },
      { title: 'Master the which-service items', detail: 'Build a service-purpose map for the Azure AI portfolio.' },
      { title: 'Weight generative AI', detail: 'Azure OpenAI and prompt engineering are current and scenario-heavy.' },
      { title: 'Calibrate with the practice assessment', detail: 'Practice scores are the honest readiness signal.' },
      { title: 'Plan the annual renewal', detail: 'Certification renews in 12 months via a short assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'AI-102 preparation costs are modest relative to the career value: the exam fee is $165, Microsoft Learn paths are free, and an Azure free-trial subscription covers the labs, so the main optional spend is a practice-question bank. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to spend on the official practice assessment and an Azure subscription for labs, and treat commercial Q-banks as optional reinforcement.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning paths', values: ['Free', 'Online modules + labs', 'The official syllabus'] },
      { label: 'Azure free-trial subscription', values: ['Free tier', 'Hands-on AI services', 'Applied lab practice'] },
      { label: 'AI-102 exam registration', values: ['$165', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'Microsoft official practice assessment', values: ['~$0-25', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial Q-banks (e.g. MeasureUp, Whizlabs)', values: ['~$30-80', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually via a short assessment.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying documentation without building the Azure services, which the role-based exam punishes; the second is under-weighting the generative AI section in the current blueprint. A third recurring error is confusing the Azure AI services on the which-service items — mixing up AI Language, AI Vision, and Azure OpenAI use cases. Candidates also routinely book the exam without the official practice assessment, and many forget the one-year renewal, letting the certification lapse. Finally, some candidates skip the prompt-engineering depth, arriving weak on the Azure OpenAI items that dominate the modern exam.',
    items: [
      { mistake: 'Reading without building', fix: 'Build every AI service in an Azure subscription.' },
      { mistake: 'Under-weighting generative AI', fix: 'Study Azure OpenAI and prompt engineering deeply; it is the current core.' },
      { mistake: 'Confusing the AI services', fix: 'Build the service-purpose map for which-service items.' },
      { mistake: 'Booking without calibration', fix: 'Take the official practice assessment and read the score.' },
      { mistake: 'Missing the annual renewal', fix: 'Complete the renewal assessment within 12 months.' }
    ]
  },
  questionTypes: {
    summary: 'AI-102 contains approximately 40 to 60 questions in about 150 minutes, scored pass/fail at 700 on the 100-900 scale, covering planning Azure AI solutions, computer vision, natural language processing, generative AI with Azure OpenAI, and document intelligence. Item formats include multiple-choice, case-study items, and scenario questions. The samples below are editor-written illustrations of the published skills-measured document, not live exam items.',
    types: [
      { name: 'Plan & manage Azure AI', share: '~20%', detail: 'AI service selection, provisioning, and governance.' },
      { name: 'Computer vision', share: '~15%', detail: 'Image analysis, OCR, and video AI.' },
      { name: 'Natural language processing', share: '~20%', detail: 'Text analysis, language understanding, and translation.' },
      { name: 'Generative AI with Azure OpenAI', share: '~30%', detail: 'Model deployment, prompt engineering, and RAG.' },
      { name: 'Document intelligence & knowledge mining', share: '~15%', detail: 'Document extraction and search solutions.' }
    ],
    samples: [
      {
        prompt: 'Which Azure service would you use to extract key-value pairs from scanned forms?',
        options: ['A. Azure AI Language', 'B. Azure AI Document Intelligence', 'C. Azure AI Vision', 'D. Azure OpenAI'],
        answer: 'B',
        explanation: 'Document Intelligence extracts key-value pairs and structured data from forms and documents.'
      },
      {
        prompt: 'Which technique grounds an Azure OpenAI chat solution in an organisation\u2019s private documents?',
        options: ['A. Prompt tuning only', 'B. Retrieval-augmented generation (RAG)', 'C. Fine-tuning with public data', 'D. Static model retraining'],
        answer: 'B',
        explanation: 'RAG retrieves relevant content from private sources and grounds the model\u2019s responses in it.'
      },
      {
        prompt: 'Which Azure AI service performs sentiment analysis on customer reviews?',
        options: ['A. Azure AI Language', 'B. Azure AI Vision', 'C. Azure AI Search', 'D. Azure OpenAI Studio'],
        answer: 'A',
        explanation: 'Azure AI Language provides text analytics including sentiment analysis.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills-measured document, not live exam items.'
  },
  examDay: {
    summary: 'AI-102 is taken at a Pearson VUE testing center or online proctored: approximately 40 to 60 questions with 150 minutes, pass/fail at 700 on the 100-900 scale, with results typically available within a day. The core rules: bring valid photo ID for center delivery; for online proctoring complete the environment check with a quiet room, webcam, and no second screens. The exam is closed-book. After passing, the certification is valid for 12 months with a short renewal assessment. The most useful exam-day habits: pace at about 2.5 to 3 minutes per question, flag and return to case-study items, and on the which-service items match the scenario to the service\u2019s core capability rather than over-thinking. If you do not pass, Microsoft allows retakes after a 24-hour wait for the first retake. After the exam, plan the renewal and consider pairing AI-102 with the DP-100 (Azure Data Scientist) or other role-based exams for an AI specialisation profile.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Microsoft account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Learn paths, build Azure AI services, take the practice assessment.' },
      { time: 'Exam', detail: '40-60 questions in 150 minutes; 700/900 to pass.' },
      { time: 'Result', detail: 'Pass/fail in a day; certification valid 12 months.' },
      { time: 'Renewal', detail: 'Complete the renewal assessment before expiry.' }
    ],
    rules: ['~40-60 questions, 150 minutes', '700/900 passing score', 'Center or online proctored', 'Annual renewal assessment'],
    afterwards: 'Passing AI-102 earns the Azure AI Engineer Associate certification (valid 12 months), the flagship Azure AI engineering credential; renew annually and pair with data-scientist exams for an AI specialisation.'
  }
};

export default data;
