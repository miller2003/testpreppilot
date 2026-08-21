const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, data & analytics certifications desk',
    bio: 'We cover AWS certifications. Format and fee facts come from AWS official pages and are revised frequently; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AWS ML Engineer Associate exam structure, scoring and fees against AWS official pages; verified BLS data-science wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'AWS ML Engineer Associate certifies applied ML skill: data scientists earned a $112,590 median in May 2024 (BLS)',
    summary: 'The AWS Certified Machine Learning Engineer - Associate (MLA-C01) certification, launched in 2024, certifies the skills to build, train, tune and deploy machine learning models on AWS. It is a role-based certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the data and ML occupations it serves. BLS reported that data scientists (SOC 15-2051) earned a median of $112,590 in May 2024, projected to grow 22 percent from 2024 to 2034, and software developers (15-1252) about $127,260 (OEWS); ML engineering sits between these fields - part data science, part software engineering - and is one of the highest-demand specializations in the cloud market. The structural point is that the MLA-C01 is AWS\u2019s new associate-level ML certification, positioned as the practical ML credential (replacing the older ML specialty for the associate tier), and it is common in job postings for ML engineer and applied-data roles that use AWS; the exam is hands-on and scenario-based, covering data preparation, model training and tuning, deployment, and MLOps. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the cloud-specific skill signal in a market where ML demand is strong. The exam runs about 130 minutes with 65 questions, passes at 720/1000 (verify the current score), costs about $150, and the certification is valid for three years.',
    rows: [
      { label: 'Data scientists median, May 2024', value: '$112,590', note: 'BLS OEWS, SOC 15-2051' },
      { label: 'Software developers median, May 2024', value: '~$127,260', note: 'BLS OEWS, SOC 15-1252' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'MLA-C01 exam', value: '65 questions / ~130 min', note: 'AWS, 720/1000 passing (verify current)' }
    ],
    growth: 'Data-scientist employment is projected to grow 22 percent from 2024 to 2034; ML demand remains strong in the cloud market.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'MLA-C01 requires a passing score of 720 on a 1000-point scale; AWS publishes no pass rates',
    summary: 'AWS does not publish pass rates for its certification exams, but the assessment mechanics are public. The AWS Certified Machine Learning Engineer - Associate (MLA-C01) exam is a computer-based test of about 130 minutes with 65 questions (multiple choice and multiple response, plus scenario-based items), delivered by Pearson VUE online or at test centers, with a passing score of 720 on a 1000-point scale (verify the current score and question count on the AWS certification page, as details can be updated). The exam covers four domains published by AWS: data preparation (preparing and transforming data for ML), model development (training, tuning and evaluating models with Amazon SageMaker), model deployment and monitoring (deploying models, endpoints, and monitoring for drift), and MLOps (automating pipelines, CI/CD for ML, and governance). The exam replaced the older AWS ML specialty as the associate-tier ML credential and includes both conceptual and scenario-based items; candidates with prior AWS experience (the AWS Practitioner or a related associate certification is not required but is commonly held) and ML fundamentals are the target audience. The certification is valid for three years, and renewal requires passing the current exam again (AWS moved certifications to three-year validity with recertification). The honest summary is that the passing bar is 720/1000, no pass-rate data exists, and the published exam guide with the four domains is the authoritative preparation blueprint.',
    source: { label: 'AWS Certified Machine Learning Engineer - Associate', url: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/' },
    caveat: 'AWS publishes no pass rates; the passing score is 720/1000 with ~65 questions in ~130 minutes. Verify current details on the AWS certification page.'
  },
  studyPlan: {
    summary: 'A realistic MLA-C01 plan runs 80-150 hours over 6-10 weeks for candidates with some AWS and ML foundation, and more for newcomers. Week 1: review the published exam guide with the four domains and take a baseline assessment; candidates without AWS fundamentals should first complete the free Cloud Practitioner-level training to establish the vocabulary. Weeks 2-4: data preparation - AWS data services (S3, Glue, Athena), feature engineering, and the SageMaker data processing patterns; build hands-on practice with the free AWS skill builder labs and a personal AWS account (free tier). Weeks 5-7: model development - SageMaker training jobs, hyperparameter tuning, model evaluation and the built-in algorithms and frameworks (PyTorch, TensorFlow), plus the core ML concepts (bias-variance, regularization, evaluation metrics). Weeks 8-9: deployment and MLOps - SageMaker endpoints, model monitoring and drift detection, inference pipelines, and CI/CD for ML; these are the domains most candidates under-prepare. Week 10: full practice exams (the official practice test and third-party question banks), targeted review, and the real exam. The dominant resources are the AWS Skill Builder training (including the official exam prep course), hands-on labs in a personal AWS account, and the official practice test; the exam fee is about $150.',
    totalHours: '80-150 hours over 6-10 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Exam guide and baseline', tasks: ['Review the four domains', 'Baseline assessment; AWS fundamentals refresh'], hours: 10 },
      { label: 'Weeks 2-4', focus: 'Data preparation', tasks: ['S3, Glue, Athena, SageMaker data patterns', 'Hands-on labs in a personal account'], hours: 40 },
      { label: 'Weeks 5-7', focus: 'Model development', tasks: ['SageMaker training and tuning', 'ML concepts and evaluation'], hours: 40 },
      { label: 'Weeks 8-9', focus: 'Deployment and MLOps', tasks: ['Endpoints, monitoring, drift', 'CI/CD for ML'], hours: 30 },
      { label: 'Week 10', focus: 'Practice exams', tasks: ['Official practice test', 'Targeted review; real exam'], hours: 15 }
    ],
    variants: [
      { label: 'Prerequisites', detail: 'No formal prerequisite, but AWS fundamentals and basic ML concepts are assumed; take the Cloud Practitioner-level training first if new.' },
      { label: 'Renewal', detail: 'The certification is valid 3 years; renewal requires passing the current exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective MLA-C01 strategies combine hands-on SageMaker practice with the scenario-question style. Strategy one: practice in SageMaker hands-on - the exam is scenario-based and rewards knowing where features live in the service (training jobs, tuning, endpoints, monitoring), and a personal AWS account with hands-on labs embeds the interface in a way reading cannot; the free tier covers the basics. Strategy two: learn the four domains as the organizing map - data preparation, model development, deployment and monitoring, and MLOps - because every item maps to a domain and the exam guide\u2019s domain weights set the study priority. Strategy three: master the ML fundamentals the exam assumes - bias-variance, regularization, evaluation metrics (precision, recall, AUC), overfitting and drift - because the scenario items test these concepts applied to AWS situations. Strategy four: understand the SageMaker components and when each is used (Processing jobs, Training jobs, Hyperparameter tuning, Model Registry, Endpoints, Model Monitor, Pipelines), because component-selection items are the largest cluster. Strategy five: use the official practice test and the AWS Skill Builder exam-prep course, which are the closest match to the real format. Strategy six: plan the three-year renewal from the start, and take the exam when hands-on practice and practice-test scores align, because the scenario style rewards applied readiness.',
    items: [
      { title: 'Practice in SageMaker', detail: 'Hands-on labs embed the interface knowledge.' },
      { title: 'Use the four-domain map', detail: 'Every item maps to a published domain.' },
      { title: 'Master the ML fundamentals', detail: 'Bias-variance, metrics, overfitting, drift.' },
      { title: 'Learn the component roles', detail: 'Processing, training, tuning, endpoints, monitoring.' },
      { title: 'Use the official practice test', detail: 'The closest match to the real format.' }
    ]
  },
  resourceComparison: {
    summary: 'The MLA-C01 resource market is anchored by AWS\u2019s free and official content. The AWS Skill Builder platform provides the exam guide, the exam-prep course, and free digital training aligned to the certification (some labs require a subscription, roughly $29/month for the full Skill Builder subscription), and the official practice test is available for a small fee (about $29 or included in some subscriptions). Hands-on practice requires a personal AWS account (the free tier covers much of the basics), which is free to set up. Third-party courses and question banks ($100-$500) add structure and volume, and their value is practice-test exposure and syllabus coverage; the honest caveat is that only AWS materials and hands-on practice match the scenario style. The exam fee is about $150 (with beta pricing when new). The honest ranking: the free exam guide and Skill Builder training, a personal AWS account for hands-on labs, the official practice test, and a question bank for volume. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS Skill Builder exam-prep course', values: ['Free-subscription', 'Online', 'The official training aligned to the exam'] },
      { label: 'Personal AWS account (free tier)', values: ['Free', 'Cloud console', 'Hands-on SageMaker practice'] },
      { label: 'Official practice test', values: ['~$29', 'Online', 'Format calibration'] },
      { label: 'Third-party course / question bank', values: ['$100-$500', 'Online', 'Practice volume and structure'] }
    ],
    footnote: 'Prices dated 2025-26; the MLA-C01 exam fee is ~$150. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common MLA-C01 mistakes come from reading without hands-on practice and from under-preparing the MLOps domain. Mistake one: studying services from documentation without practicing in SageMaker; the scenario items reward knowing where features live, and candidates who have never run a training job or deployed an endpoint guess on the component-selection items. Mistake two: under-preparing deployment and MLOps; the exam domain weights give deployment and monitoring and MLOps a large combined share, and candidates who focus on model training skip the domains that differentiate the exam. Mistake three: weak ML fundamentals; the exam assumes bias-variance, metrics and drift concepts, and candidates without them struggle to apply the AWS scenarios. Mistake four: confusing the SageMaker components; knowing when to use Processing vs Training vs the Model Registry vs Endpoints is the largest cluster, and blurring them loses items. Mistake five: using outdated content that reflects the retired ML specialty exam; the MLA-C01 has its own exam guide and domains, and old materials train the wrong scope. Mistake six: ignoring the renewal; the certification is valid three years, and renewal requires the current exam.',
    items: [
      { mistake: 'Reading without practicing', fix: 'Run hands-on labs in a personal AWS account.' },
      { mistake: 'Under-preparing MLOps', fix: 'Deployment, monitoring and pipelines carry a large share.' },
      { mistake: 'Weak ML fundamentals', fix: 'Master bias-variance, metrics and drift.' },
      { mistake: 'Confusing the components', fix: 'Learn when to use each SageMaker component.' },
      { mistake: 'Using retired-exam content', fix: 'Use the MLA-C01 exam guide and current materials.' }
    ]
  },
  questionTypes: {
    summary: 'The MLA-C01 exam is a computer-based test of about 130 minutes with 65 questions (multiple choice, multiple response, and scenario-based), delivered by Pearson VUE, passing at 720/1000. The four domains: data preparation, model development, model deployment and monitoring, and MLOps. The certification is valid three years. Samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Data preparation', share: '~30% of skills', detail: 'Preparing and transforming data for ML.' },
      { name: 'Model development', share: '~30% of skills', detail: 'Training, tuning and evaluating with SageMaker.' },
      { name: 'Deployment and monitoring', share: '~20% of skills', detail: 'Endpoints, inference, drift monitoring.' },
      { name: 'MLOps', share: '~20% of skills', detail: 'Pipelines, CI/CD for ML, governance.' }
    ],
    samples: [
      {
        prompt: 'A data scientist needs to transform raw CSV files in S3 into a training-ready dataset with feature engineering, as a repeatable step in a pipeline. Which SageMaker component is most appropriate?',
        options: ['A. SageMaker Processing jobs', 'B. SageMaker Endpoints', 'C. SageMaker Model Registry', 'D. SageMaker Ground Truth'],
        answer: 'A',
        explanation: 'SageMaker Processing jobs run data-transformation and feature-engineering steps as repeatable pipeline components; endpoints serve inference, the registry manages model versions, and Ground Truth labels data.'
      },
      {
        prompt: 'A deployed model\u2019s prediction accuracy is declining over time as real-world data shifts. Which AWS capability directly addresses detecting this?',
        options: ['A. SageMaker Model Monitor', 'B. SageMaker Ground Truth', 'C. SageMaker Autopilot', 'D. AWS DataSync'],
        answer: 'A',
        explanation: 'SageMaker Model Monitor detects data and model-quality drift in production, flagging the shift; the other options label data, automate model building, or transfer data.'
      },
      {
        prompt: 'A team needs to automate the ML workflow so that new data triggers preprocessing, training and evaluation, with approvals before deployment. Which AWS service is most appropriate?',
        options: ['A. SageMaker Pipelines', 'B. SageMaker Notebooks', 'C. S3 lifecycle rules', 'D. Amazon QuickSight'],
        answer: 'A',
        explanation: 'SageMaker Pipelines orchestrates the ML workflow (preprocessing, training, evaluation, and approval gates for deployment); the other options serve development, storage management, and visualization.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The MLA-C01 exam is delivered by Pearson VUE at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; personal electronics are not permitted. The exam runs about 130 minutes, and the passing score is 720/1000; results appear on screen shortly after (official results confirm within a few days). For online delivery, complete the Pearson VUE system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. After passing, the certification is added to the AWS Certification account with a badge and is valid three years; renewal requires passing the current exam before expiry. Afterwards, add the badge to LinkedIn and your resume, note the expiry date for renewal planning, and consider the next AWS certification (such as the ML Specialty or the Solutions Architect Associate) for the career path.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'AWS Certification account sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~130 minutes; 65 questions; 720/1000 passes.' },
      { time: 'After the exam', detail: 'Score on screen; badge added to the AWS account.' },
      { time: 'Within 3 years', detail: 'Renew by passing the current exam.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The passing score is 720/1000 (verify current).',
      'The certification is valid 3 years with recertification.',
      'Verify current exam details on the AWS certification page.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, note the 3-year expiry for renewal planning, and consider the next AWS certification for the career path.'
  }
};

export default data;
