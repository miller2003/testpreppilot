const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers AWS and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s AI Practitioner exam guide (AIF-C01) and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS AI Practitioner" — the certification validates foundational AI and machine-learning knowledge on AWS, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the AI and data careers the credential serves is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit must be read with an honest caveat: AI Practitioner is an entry-level fundamentals credential, so the realistic benchmark for a new holder sits far below the data-scientist median — the credential typically appears on the resume of a business professional, a career-changer or an IT professional adding AI literacy, and the AI-career wage applies only after the experience the median describes. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in government data. Read the number as the market for the occupation the certificate is a step toward.',
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
    headline: 'AWS publishes no pass rate — it publishes the passing score: 700 of 1000, with a 65-question, 130-minute exam',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the AI Practitioner exam (AIF-C01) has 65 questions with a 130-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide, with domains covering fundamentals of AI and ML, fundamentals of generative AI, applications of foundation models, the AWS AI and ML services, and responsible AI. The absence of a published pass rate is not an absence of standards: the AI Practitioner is AWS\'s entry AI credential, and the 700 line rewards a working familiarity with the AI concepts and the AWS AI service family rather than deep technical depth. The practical reading: target 80 percent-plus on practice, use AWS\'s official exam guide and sample questions, and treat the credential as the entry rung toward the role-based AI certifications (such as the Machine Learning Engineer Associate) that benchmark the AI-career wages.',
    source: { label: 'AWS - AI Practitioner certification (AIF-C01)', url: 'https://aws.amazon.com/certification/certified-ai-practitioner/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The AIF-C01 is a 65-question, 130-minute exam with a 700/1000 passing score, built on the official exam guide domains: fundamentals of AI and ML, fundamentals of generative AI, applications of foundation models, the AWS AI and ML services, and responsible AI. The exam is AWS\'s entry AI credential and rewards a working familiarity with the concepts and services rather than deep technical depth. A defensible plan runs 60 to 100 hours over 6 to 8 weeks. Weeks 1-2: the AI and ML fundamentals — the core concepts (training, inference, supervised vs unsupervised, the ML lifecycle) and the generative-AI basics (foundation models, prompting, RAG). Weeks 3-4: the AWS AI and ML services — SageMaker, Bedrock, the AI services (Textract, Comprehend, Rekognition, Polly, Transcribe), and what each is for. Weeks 5-6: applications and responsible AI — the use cases for the services, and the responsible-AI principles (fairness, transparency, privacy). Weeks 7-8: scenario drilling and two full timed practice exams at the real format. The plan is coverage-based because the exam rewards breadth across the concepts and the service family; hands-on exploration in a free-tier project accelerates the service modules.',
    totalHours: '60-100 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'AI and ML fundamentals', tasks: ['Core ML concepts and the lifecycle', 'Generative AI: foundation models and prompting', 'RAG and model fine-tuning basics'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'AWS AI and ML services', tasks: ['SageMaker and the ML platform', 'Bedrock and the generative-AI stack', 'The AI services: Textract, Comprehend, Rekognition, Polly'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Applications and responsible AI', tasks: ['Use cases for each service', 'Responsible-AI principles', 'Scenario practice'], hours: 20 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 25 }
    ],
    variants: [
      { label: 'Working with AI tools', detail: 'Compress the concepts phase; the AWS service names and use cases are the new content.' },
      { label: 'New to AI/ML', detail: 'Add 2 weeks of general AI concepts before the AWS service modules.' }
    ]
  },
  prepStrategies: {
    summary: 'The AIF-C01 rewards breadth across the AI concepts and the AWS service family, so the dominant strategy is systematic coverage with a service-purpose focus: learn what each AWS AI and ML service is for — SageMaker for building models, Bedrock for foundation models, Textract for document extraction, Rekognition for vision — because the exam asks purpose-level questions. Second, master the generative-AI fundamentals deliberately: foundation models, prompting and RAG are a distinct and growing share of the exam. Third, learn the responsible-AI principles, a domain that candidates focused on the services often miss. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 700 line leaves little margin. Finally, take at least two full timed practice exams; 65 questions in 130 minutes is exactly 2 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Learn services by purpose', detail: 'What each AWS AI and ML service is for is the exam\'s core pattern.' },
      { title: 'Master generative-AI basics', detail: 'Foundation models, prompting and RAG are a distinct and growing share.' },
      { title: 'Cover responsible AI', detail: 'Fairness, transparency and privacy are a tested domain.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 700/1000 line leaves little margin.' },
      { title: 'Run two full simulations', detail: '65 questions in 130 minutes; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'AIF-C01 prep spans official AWS resources and third-party courses. AWS\'s own materials — the exam guide (free), sample questions and the AWS Skill Builder AI courses — are the authoritative source; a Skill Builder subscription runs roughly $29-$99/month. Third-party providers sell AI Practitioner courses and practice exams at $50-$300; the market is growing quickly because the certification is new and popular. The AWS free tier supports hands-on exploration of the AI services. A realistic total budget is $150 to $600 including the $100 exam fee and one to three months of Skill Builder. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'AWS free tier', values: ['$0', 'Real cloud environment', 'Exploring the AI services'] },
      { label: 'Third-party courses', values: ['$50-$300', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the AIF-C01 exam fee is $100; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AIF-C01 mistake is studying deep ML theory instead of the exam\'s breadth: candidates who dive into model mechanics miss the purpose-level service items, which dominate the exam. The fix is balanced concept-and-service coverage. The second mistake is under-preparing the generative-AI material, a distinct and growing share that newer study plans sometimes miss. Third, candidates skip the responsible-AI domain, treating it as soft when it is tested. Fourth, some candidates never run a full timed simulation and misjudge the reading-heavy pace. Finally, treating AI Practitioner as the destination misses the point: it is the entry rung of the AWS AI track, and the role-based certifications (Machine Learning Engineer Associate and beyond) are what benchmark the AI-career wages.',
    items: [
      { mistake: 'Studying deep ML theory', fix: 'The exam rewards breadth across concepts and service purposes.' },
      { mistake: 'Under-preparing generative AI', fix: 'Foundation models, prompting and RAG are a distinct growing share.' },
      { mistake: 'Skipping responsible AI', fix: 'A tested domain; cover fairness, transparency and privacy.' },
      { mistake: 'Never running full simulations', fix: '65 questions in 130 minutes; run two full timed exams.' },
      { mistake: 'Treating it as the finish', fix: 'Plan the role-based AI track as the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The AIF-C01 is a 65-question multiple-choice and multiple-response exam in 130 minutes. The items test the exam guide domains: AI and ML fundamentals, generative-AI fundamentals, applications of foundation models, the AWS AI and ML services, and responsible AI — with many scenario items asking which service or approach fits a described use case. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the concept-and-purpose style of the real items.',
    types: [
      { name: 'Concept items', share: 'Largest block', detail: 'ML lifecycle, generative AI, foundation models and prompting.' },
      { name: 'Service-purpose items', share: 'Large block', detail: 'Which AWS AI or ML service fits a described use case.' },
      { name: 'Responsible-AI items', share: 'Meaningful block', detail: 'Fairness, transparency, privacy and governance.' }
    ],
    samples: [
      {
        prompt: 'A company must extract text from scanned invoices and structure it for processing. The most appropriate AWS service is:',
        options: ['A. Amazon Textract', 'B. Amazon Rekognition', 'C. Amazon Polly', 'D. Amazon Transcribe'],
        answer: 'A',
        explanation: 'Textract extracts text and data from documents — the service for scanned-invoice processing. Rekognition analyses images and video, Polly converts text to speech, and Transcribe converts speech to text.'
      },
      {
        prompt: 'Which technique allows a generative-AI application to ground its answers in an organisation\'s private documents without retraining the model?',
        options: ['A. Retrieval-augmented generation (RAG)', 'B. Full model fine-tuning from scratch', 'C. Removing the model\'s guardrails', 'D. Using a larger training corpus'],
        answer: 'A',
        explanation: 'RAG retrieves relevant private documents and grounds the model\'s answers in them without retraining — the standard approach. Full fine-tuning is heavier, removing guardrails is a safety risk, and a larger corpus is not the grounding mechanism.'
      },
      {
        prompt: 'Under responsible-AI practice, before deploying a machine-learning model that makes hiring decisions, an organisation should:',
        options: ['A. Evaluate the model for bias and document the governance and transparency measures', 'B. Deploy immediately to maximise impact', 'C. Skip documentation to move faster', 'D. Only test the model on one demographic group'],
        answer: 'A',
        explanation: 'Responsible AI requires evaluating models for bias and documenting governance, transparency and fairness measures before deployment — especially for high-stakes decisions like hiring. Immediate deployment, skipped documentation or single-group testing each fail the responsible-AI principles.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The AIF-C01 is a 65-question, 130-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at exactly 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen immediately, with the official result following; AWS reports your scaled score against the 700 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years. The afterwards matters: record the expiration date, add the credential to your profile, and plan the next rung of the AWS AI track — typically the Machine Learning Engineer Associate.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '65 questions in 130 minutes; pace 2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Record the validity date and plan the next AI rung.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '130 minutes for 65 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years. On a fail, wait 14 days and retake after additional study. Plan the role-based AI track as the next step.'
  }
};

export default data;
