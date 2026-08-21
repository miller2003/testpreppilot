const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & ML certifications desk',
    bio: 'AWS certification structure comes from Amazon Web Services official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AWS Machine Learning – Specialty exam structure, domains, and scoring against AWS official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect data-scientist pay at a May 2024 median of $112,590 (BLS) — the AWS ML Specialty is the advanced machine-learning certification, and ML-engineering roles sit in the fastest-growing segment of the data occupations',
    summary: 'The direct answer is that the AWS Certified Machine Learning – Specialty certification is an advanced-level credential for ML and data roles, and the occupations it serves — data scientists (SOC 15-2051), at a May 2024 median annual wage of $112,590, and the software-developer roles ML engineers sit within — place ML-specialist holders in the well-compensated tier of the data and software fields, with ML engineers typically earning above the occupation medians in many markets, though BLS has no ML-specific code. The honest framing is that the certification does not set pay — ML salaries are set by market, employer, and experience — but the credential signals AWS machine-learning competence (data engineering, exploratory data analysis, modeling, and ML implementation on AWS) that employers list for AWS ML roles, and it sits in one of the fastest-growing segments of technology: BLS projects about 30 percent growth for data scientists from 2024 to 2034, much faster than average. The exam itself is an advanced specialty exam: 65 questions with 180 minutes, scored pass/fail on a 100-1000 scale with a passing score of 750, and AWS recommends 2 years of hands-on ML experience on AWS before sitting. The practical read: the ML Specialty is the flagship AWS ML certification, typically pursued by data scientists, ML engineers, and data engineers with AWS experience (the SAA-C03 or a comparable foundation is a common precursor), and its value is the AWS-ML employability signal in a high-demand field. For candidates deciding whether to pursue it, the exam rewards applied AWS ML knowledge, and the strongest preparation combines the AWS official training with hands-on SageMaker practice.',
    rows: [
      { label: 'Median annual wage, data scientists', value: '$112,590', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-2051)' },
      { label: 'Lowest 10 percent', value: 'less than $70,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $167,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Advanced credential', note: '65 questions, 180 minutes, passing score 750/1000' }
    ],
    growth: 'BLS projects about 30% growth for data scientists from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rates — the ML Specialty is 65 questions in 180 minutes with a passing score of 750/1000, and AWS reports pass/fail rather than cohort data',
    summary: 'The core fact is that AWS does not publish pass rates for the Machine Learning – Specialty exam, and none is available from an independent source, because AWS reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the exam contains 65 multiple-choice and multiple-response questions with 180 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 750 on the 100-1000 scale; the exam covers four domains — data engineering, exploratory data analysis, modeling, and ML implementation and operations — weighted across the paper. AWS recommends two years of hands-on ML experience on AWS before sitting, and the exam assumes familiarity with SageMaker and the AWS ML stack. Because AWS publishes the exam guide and the official practice exam, the preparation is studying the exam guide and calibrating with the official practice set; the classic failure mode is under-practising the SageMaker-specific items, which reward applied AWS knowledge. The certification is valid for three years and renewable by recertification. The honest advice is to treat the exam guide as the syllabus, complete the AWS official training or an equivalent course, and practise with SageMaker hands-on before booking, since the exam rewards applied AWS ML knowledge.',
    source: { label: 'AWS — Machine Learning – Specialty certification', url: 'https://aws.amazon.com/certification/' },
    caveat: 'AWS publishes no pass rates; the passing score is 750/1000 and certification is valid 3 years.'
  },
  studyPlan: {
    summary: 'Plan for roughly 10 to 14 weeks and 120 to 180 hours of study for the ML Specialty, structured around the four domains — data engineering, exploratory data analysis, modeling, and ML implementation — with hands-on SageMaker practice as the highest-yield study tool. The exam\u2019s weight favours the modeling and data-engineering content, so allocate study time there first. The most effective sequence is: first, obtain the exam guide and take the official practice exam to baseline; second, complete the AWS official training or an equivalent ML course; third, build hands-on SageMaker experience — pipelines, training jobs, and deployment; fourth, study the four domains with the exam guide; and fifth, take the official practice exam again and book. The highest-yield habit is the hands-on SageMaker work: the exam rewards applied AWS ML knowledge, and candidates who build the workflows score well above those who only read. Budget the modeling and data-engineering domains the most time, since they carry the largest shares. After passing, note the three-year validity and plan the recertification.',
    totalHours: '120-180 study hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Baseline + training', tasks: ['Get the exam guide and take the practice exam', 'Complete AWS ML training', 'Log weak domains'], hours: 45 },
      { label: 'Weeks 4-7', focus: 'SageMaker hands-on', tasks: ['Build SageMaker pipelines and training jobs', 'Practise deployment and inference', 'Study data engineering'], hours: 55 },
      { label: 'Weeks 8-11', focus: 'Domains + practice', tasks: ['Study modeling and EDA content', 'Take the official practice exam again', 'Re-study weak domains'], hours: 50 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Light exam-guide review', 'Confirm exam logistics', 'Book the exam'], hours: 20 }
    ],
    variants: [
      { label: 'AWS AI Practitioner (entry)', detail: 'The entry-level AI credential, a common precursor for candidates new to AWS AI.' },
      { label: 'ML Engineer – Associate', detail: 'The newer associate-level ML credential, complementary to the specialty.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the ML Specialty is "build hands-on SageMaker experience, weight modeling and data engineering, and calibrate with the official practice exam," and the single biggest error is studying ML theory without AWS-specific practice, which the exam punishes. A second proven approach is mastering the SageMaker-specific items — the exam rewards knowing which SageMaker feature fits each scenario, so build the workflows hands-on. Third, weight the modeling and data-engineering domains, the largest question shares. Fourth, use the official practice exam as the calibration tool and re-study until your score is comfortable. Fifth, confirm the recommended 2-years-of-experience baseline is met or that you have strong AWS foundations, since the exam assumes it. Finally, plan the three-year recertification, since AWS credentials expire and recertification is part of the credential\u2019s lifecycle.',
    items: [
      { title: 'Build SageMaker hands-on', detail: 'The exam rewards applied AWS ML knowledge.' },
      { title: 'Weight modeling and data engineering', detail: 'The largest question shares.' },
      { title: 'Master the which-service items', detail: 'Know which AWS ML feature fits each scenario.' },
      { title: 'Calibrate with the official practice exam', detail: 'Practice scores are the honest readiness signal.' },
      { title: 'Plan the 3-year recertification', detail: 'AWS credentials expire; plan the renewal.' }
    ]
  },
  resourceComparison: {
    summary: 'ML Specialty preparation runs $200 to $1,000 depending on the package, with the AWS official training and exam guide as the core investment. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for the AWS training and a practice-exam package, since the exam rewards the applied and calibrated approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ML Specialty exam registration', values: ['$300', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'AWS exam guide', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'AWS official practice exam', values: ['~$40', 'Online practice set', 'Readiness calibration'] },
      { label: 'AWS training / third-party courses', values: ['~$200-800', 'Online courses', 'Structured review'] },
      { label: 'AWS Free Tier SageMaker practice', values: ['Free tier', 'Hands-on service usage', 'Applied practice'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification is valid 3 years and requires recertification.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying machine-learning theory without AWS-specific practice, which the exam punishes because its items are built around the AWS ML stack — candidates who know general ML but have never touched SageMaker consistently lose the which-service and which-feature items. A second recurring error is under-weighting the modeling and data-engineering domains, which carry the largest question shares, in favour of the more familiar EDA material. Third, candidates routinely confuse the SageMaker features — Automatic Model Tuning, Model Monitor, Clarify, and Ground Truth each serve a distinct purpose, and the exam\u2019s scenario items reward knowing exactly which one fits the described situation. Fourth, many candidates book the exam without taking the official practice set, converting a calibratable exam into a gamble; the practice set mirrors the question style, and your score on it is the honest readiness signal. Fifth, candidates with less than the recommended two years of hands-on AWS ML experience find the applied items beyond them, so the preparation should include real SageMaker builds, not just reading. Finally, some candidates ignore the three-year validity and let the credential lapse, or skip the recertification planning that keeps an advanced AWS credential current in a fast-moving field.',
    items: [
      { mistake: 'Theory without AWS practice', fix: 'Build SageMaker workflows hands-on.' },
      { mistake: 'Under-weighting modeling', fix: 'The modeling domain is the largest share.' },
      { mistake: 'Confusing SageMaker features', fix: 'Master which feature fits each scenario.' },
      { mistake: 'Skipping practice calibration', fix: 'Take the official practice exam and read the score.' },
      { mistake: 'Missing the 3-year renewal', fix: 'Plan recertification before expiry.' }
    ]
  },
  questionTypes: {
    summary: 'The ML Specialty contains 65 multiple-choice and multiple-response questions in 180 minutes, scored pass/fail at 750/1000, covering four domains: data engineering, exploratory data analysis, modeling, and ML implementation and operations. Item formats include direct knowledge and applied scenario items about which AWS service or approach fits. The samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Data engineering', share: '~20%', detail: 'Data collection, storage, and transformation on AWS.' },
      { name: 'Exploratory data analysis', share: '~24%', detail: 'EDA and data visualisation.' },
      { name: 'Modeling', share: '~36%', detail: 'Model selection, training, and tuning.' },
      { name: 'ML implementation & operations', share: '~20%', detail: 'Deployment, monitoring, and MLOps.' }
    ],
    samples: [
      {
        prompt: 'Which AWS service is the fully managed platform for building, training, and deploying ML models?',
        options: ['A. Amazon SageMaker', 'B. Amazon EC2', 'C. AWS Lambda', 'D. Amazon S3'],
        answer: 'A',
        explanation: 'Amazon SageMaker is the fully managed ML platform covering the build-train-deploy lifecycle.'
      },
      {
        prompt: 'Which approach is most appropriate for tuning a model\u2019s hyperparameters automatically?',
        options: ['A. SageMaker Automatic Model Tuning', 'B. Manual trial and error', 'C. Random deployment', 'D. Fixed default values'],
        answer: 'A',
        explanation: 'SageMaker Automatic Model Tuning automates hyperparameter optimisation.'
      },
      {
        prompt: 'Which SageMaker feature monitors models for data drift after deployment?',
        options: ['A. SageMaker Model Monitor', 'B. SageMaker Notebooks', 'C. SageMaker Ground Truth', 'D. SageMaker Clarify'],
        answer: 'A',
        explanation: 'SageMaker Model Monitor detects data drift and quality issues in production models.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The ML Specialty is taken at a Pearson VUE testing center or online proctored: 65 multiple-choice and multiple-response questions with 180 minutes, pass/fail at 750 on the 100-1000 scale, with results typically available within a few days. The core rules: bring valid photo ID for center delivery; for online proctoring complete the environment check. The exam is closed-book. After passing, the certification is valid for three years. The most useful exam-day habits: pace at about 2.5 to 3 minutes per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, AWS requires a 14-day wait for the first retake. After the exam, plan the three-year recertification and consider the complementary ML Engineer – Associate credential for the ML career path.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'AWS account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '10-14 weeks; SageMaker hands-on with practice-exam calibration.' },
      { time: 'Exam', detail: '65 questions in 180 minutes; 750/1000 to pass.' },
      { time: 'Result', detail: 'Pass/fail within a few days.' },
      { time: 'Renewal', detail: 'Recertify within 3 years.' }
    ],
    rules: ['65 questions, 180 minutes', '750/1000 passing score', 'Center or online proctored', 'Valid 3 years, recertify'],
    afterwards: 'Passing the ML Specialty earns the AWS Certified Machine Learning – Specialty credential, the advanced AWS ML certification, valid 3 years.'
  }
};

export default data;
