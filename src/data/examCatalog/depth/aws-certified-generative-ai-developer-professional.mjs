const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, AI & software certifications desk',
    bio: 'The AWS Generative AI Developer - Professional exam structure and availability are drawn from the AWS official certification announcement (November 2025) and the AWS exam guide, which are revised on AWS\u2019s published cycle; AWS does not publish pass rates, and we state that plainly. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where AWS or BLS does not publish a figure, we say so rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the AWS certification portfolio announcement (November 2025) covering the Generative AI Developer - Professional beta launch, and the BLS OOH Software Developers page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Software developers earned a May 2024 BLS median of $132,270, and the Generative AI Developer credential targets the fastest-growing specialization in the field.',
    summary: 'The salary conclusion for the Generative AI Developer - Professional is anchored in the strongest tech occupation: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $132,270 for SOC 15-1252 Software Developers, with the lowest 10 percent earning below $76,510 and the highest 10 percent above $208,620. The BLS classifies by job duty rather than certificate, so the AWS credential does not appear as its own wage line, but the value of the exam is positioning: generative-AI engineering — building production applications on foundation models, RAG architectures, vector databases, and agents — is the specialization with the most acute talent shortage of the mid-2020s, and employers pay a premium for candidates who can demonstrate it with a professional-grade credential. AWS itself reported that active AWS certifications exceeded 1.42 million as of January 2025 across more than one million certified individuals, and the AI-specific certifications are the fastest-growing slice of that portfolio. The BLS projects about 17 percent growth for software developers from 2024 to 2034 — more than triple the average occupation — with roughly 140,000 openings per year, and AI application development is a major share of that demand. Two caveats anchor the picture: first, the credential is new — the beta launched in November 2025 — so the market signal is still forming, and candidates should weigh the certification against demonstrated portfolio work, which employers weight heavily in AI hiring; second, the professional-level exam presumes existing AWS and software-development experience, so the certification is an amplifier for an experienced developer rather than an entry ticket. For a candidate asking whether the credential pays, the direct answer is that it certifies the highest-premium specialization in an occupation with a $132,270 median and triple-average growth, but the pay follows the demonstrated skill, and the certification is the signal, not the skill itself.',
    rows: [
      { label: 'Median annual wage', value: '$132,270', note: 'BLS OOH, Software Developers (SOC 15-1252), May 2024' },
      { label: 'Lowest 10%', value: '$76,510', note: 'Entry-level developer roles' },
      { label: 'Highest 10%', value: '$208,620', note: 'Senior and specialized developers' },
      { label: 'Projected growth', value: 'About 17% (2024-2034)', note: 'More than triple the average occupation' }
    ],
    growth: 'BLS projects about 17 percent growth for software developers (2024-2034), with roughly 140,000 openings per year from growth plus replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate for the Generative AI Developer exam; the professional-level passing score is 750 on the 100-1000 scale.',
    summary: 'The direct answer on pass rates is that AWS does not publish cohort pass-rate statistics for any certification, including the new Generative AI Developer - Professional, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the passing standard: AWS scores certification exams on a 100-to-1000 scale, and professional-level exams require a score of 750, which is not a percentage of questions answered correctly — AWS uses psychometric scaling that adjusts for form difficulty, so the raw number of correct answers needed varies by exam form. The exam itself launched in beta in November 2025: the AWS announcement specified a beta exam of 85 questions over 204 minutes, with an Early Adopter badge for beta passers, and the general-availability exam specification (question count and time) is published on the official AWS exam page — candidates should confirm the current GA figures there, because AWS adjusts exam formats on its published cycle. The content validates a developer\u2019s ability to integrate foundation models into production applications and business workflows: RAG architectures, vector databases, model evaluation, agents, guardrails, and the AWS services that support them (Amazon Bedrock and the related AI services), at the professional level, which presumes hands-on experience building with AWS. The practical read on difficulty: this is a professional-tier exam sitting above the AI Practitioner and associate levels, and AWS recommends substantial AWS experience before attempting it; the beta cohort of late 2025 is the first public signal, and early reports from exam-focused communities suggest a demanding, scenario-heavy paper consistent with other AWS professional exams. Candidates should study the current AWS exam guide and skill areas, use the official Exam Prep Plan (available from launch on AWS Skill Builder), and treat the 750 passing score as a scaled target rather than a raw percentage.',
    source: { label: 'AWS certification announcement - Generative AI Developer - Professional and AWS exam guide', url: 'https://aws.amazon.com/blogs/training-and-certification/big-news-aws-expands-ai-certification-portfolio-and-updates-security-certification/' },
    caveat: 'AWS publishes no pass-rate statistics for any exam; the 750/1000 passing score for professional-level exams and the beta format (85 questions / 204 minutes) are the published, verifiable facts.'
  },
  studyPlan: {
    summary: 'An efficient Generative AI Developer - Professional study plan is 8-12 weeks of about 120-180 total hours for an experienced AWS developer, because the exam is a professional-tier breadth-and-depth test that presumes existing cloud and software skills, and the study window should build the generative-AI layer on top of that foundation: foundation-model integration, RAG and vector databases, agents, guardrails, evaluation, and the AWS services that deliver them. The published exam guide and the official Exam Prep Plan on AWS Skill Builder are the scope map — AWS released the prep plan at launch with practice assessments, hands-on SimuLearn labs, and lessons mapped to each exam domain and task statement — and candidates should complete those official resources before spending on third-party material. Candidates who already hold the AWS AI Practitioner or associate-level certifications should budget the lower end, because the service vocabulary is familiar; candidates coming from non-AWS AI work should budget the upper end and should add hands-on lab time in Amazon Bedrock, because the exam tests applied integration, not theory. The 204-minute beta format (85 questions) signals a long, scenario-heavy paper, so two or three full-length timed mocks against the current format are essential. A note on sequencing: the beta ran from November 2025 with a special Early Adopter badge, and the general-availability exam follows on AWS\u2019s launch cycle — candidates should confirm which phase is live when scheduling, because the beta and GA formats can differ slightly in published specification.',
    totalHours: '120-180 hours over 8-12 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Foundation-model foundations', tasks: ['Review foundation-model concepts: models, tokens, context windows, temperature and sampling', 'Study RAG: chunking, embeddings, retrieval, and generation pipelines', 'Cover prompt engineering and model selection criteria'], hours: 30 },
      { label: 'Week 3-5', focus: 'AWS services deep dive', tasks: ['Build hands-on labs in Amazon Bedrock: models, knowledge bases, agents, guardrails', 'Work vector databases and the data pipeline behind RAG on AWS', 'Study evaluation: model evaluation, hallucination detection, and quality metrics'], hours: 45 },
      { label: 'Week 6-8', focus: 'Architecture and integration', tasks: ['Study production patterns: streaming, async, cost optimization, observability', 'Cover security: data isolation, PII, access control, and compliance', 'Complete the AWS Skill Builder Exam Prep Plan with its practice assessments'], hours: 40 },
      { label: 'Week 9-10', focus: 'Practice exams and gaps', tasks: ['Take the official practice assessments and score by domain', 'Re-study weak domains using the exam guide task statements', 'Run one full-length timed mock at the current format'], hours: 25 },
      { label: 'Week 11-12', focus: 'Mocks and readiness', tasks: ['Take two more full-length timed mocks scoring above 750', 'Re-drill the miss log until clean', 'Confirm the Pearson VUE or online-proctored booking and IDs'], hours: 30 }
    ],
    variants: [
      { label: 'Beta phase', detail: 'If the beta is live, expect 85 questions over 204 minutes and an Early Adopter badge on passing; confirm current phase on the AWS exam page.' },
      { label: 'Associate-level holders', detail: 'Fastest path; the service vocabulary is familiar, so weight time toward the generative-AI-specific architecture and evaluation content.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the Generative AI Developer - Professional is hands-on building plus official-material study, because AWS professional exams reward applied experience and the exam guide\u2019s task statements map to real workflows: foundation-model integration, RAG with vector databases, agents, guardrails, and evaluation. First, complete the official AWS Skill Builder Exam Prep Plan — released at launch with practice assessments, SimuLearn hands-on labs, and domain-mapped lessons — because AWS\u2019s own materials define the scope more precisely than anything third-party. Second, build: set up an AWS account and work through Amazon Bedrock hands-on — create a knowledge base, build a RAG pipeline, configure an agent, add guardrails, and evaluate the model output — because the exam tests applied integration, and the lab time converts the task statements into working knowledge. Third, drill the official practice assessments and any current question bank, and build a miss log tied to the exam guide domains; the scenario-heavy items reward rehearsal of the reasoning pattern. Fourth, run at least three full-length timed mocks at the current format, because the beta\u2019s 204-minute profile signals a long paper and pacing is part of the test. Fifth, study the evaluation and quality-assurance content deliberately — model evaluation, hallucination detection, and quality metrics — because production readiness is a professional-level theme and the exam tests it directly. Finally, confirm which phase (beta or GA) is live when scheduling, and verify the current exam guide revision on the AWS certification page, because the exam is new and the published specification is the authoritative source. A further high-yield tactic is to study the RAG architecture in depth — chunking strategy, embedding choice, retrieval quality, and the vector database integration — because it is the core pattern the credential validates, and candidates who can reason about a RAG pipeline end to end are answering the exam\u2019s central question across multiple domains.',
    items: [
      { title: 'Complete the official Exam Prep Plan', detail: 'AWS released the prep plan at launch: practice assessments, SimuLearn labs, and domain-mapped lessons.' },
      { title: 'Build in Bedrock', detail: 'Create knowledge bases, RAG pipelines, agents, and guardrails hands-on; the exam tests applied integration.' },
      { title: 'Study evaluation and quality content', detail: 'Model evaluation, hallucination detection, and quality metrics are professional-level themes.' },
      { title: 'Master the RAG pattern end to end', detail: 'Chunking, embeddings, retrieval quality, and vector-database integration is the exam\u2019s core question.' },
      { title: 'Run full-length timed mocks', detail: 'Three mocks at the current format build the pacing the long paper demands.' }
    ]
  },
  resourceComparison: {
    summary: 'Generative AI Developer - Professional prep resources are anchored by the official AWS set because the exam is new: AWS released the Exam Prep Plan at launch on AWS Skill Builder with practice assessments, hands-on SimuLearn labs, and domain-mapped lessons, and that official bundle is the highest-value purchase or subscription. AWS Skill Builder itself offers subscription tiers — free and paid (roughly $29-49 per month, with the paid tier unlocking full exam-prep content) — and the paid tier is the standard recommendation for professional-level AWS exams. Third-party question banks and courses for the generative-AI developer exam are emerging but uneven because the exam launched in late 2025, so candidates should verify that any third-party material references the current exam-guide revision rather than the older AI Practitioner or associate-level content. Hands-on AWS account costs are a real budget line: building RAG pipelines, agents, and evaluations in Amazon Bedrock incurs pay-as-you-go service charges, typically tens of dollars over a study window with careful shutdown of resources. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee itself is $300 per attempt (standard AWS professional-level pricing), with a 50-percent-off retake voucher available for failed attempts — candidates should check the current retake policy on the AWS certification page because it changes on AWS\u2019s policy cycle. A cheap readiness check is the free tier of AWS Skill Builder and the free AWS practice-question set before paying for anything, because experienced AWS developers often score closer to 750 than they expect and need mainly the official prep plan and hands-on labs.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS Skill Builder Exam Prep Plan', values: ['Free on the paid tier', 'Practice assessments + SimuLearn labs', 'The authoritative scope map and hands-on labs'], note: '' },
      { label: 'AWS Skill Builder subscription', values: ['$29-49/month', 'Online learning + labs', 'All AWS candidates; unlocks the prep plan'], note: '' },
      { label: 'Third-party bank/course', values: ['$50-200', 'Online, emerging', 'Extra reps — verify current exam-guide alignment'], note: '' },
      { label: 'AWS account hands-on costs', values: ['Tens of $ (pay-as-you-go)', 'Real AWS services', 'Bedrock RAG, agents, and evaluation labs'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Exam fee is $300 per attempt; confirm the current retake policy on the AWS certification page.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the Generative AI Developer - Professional exam is studying AI theory instead of AWS applied integration, because the exam validates building production applications on AWS services — candidates who know foundation-model concepts cold but have never built a knowledge base in Bedrock find the scenario items abstract; the second is relying on third-party material written for the AI Practitioner or associate-level exams, which tests a different scope and leaves the professional-level architecture, evaluation, and security content uncovered. A third recurring error is skipping the official Exam Prep Plan and its practice assessments, which AWS mapped directly to the exam domains — the most precise scope signal available for a new exam. Candidates also routinely underestimate the hands-on requirement, reading about RAG and agents without running the labs, and then miss the applied reasoning the scenario items reward. Another pattern is treating the 750 passing score as 75 percent correct: AWS professional exams use scaled scoring, so the raw equivalent varies by form. Finally, some candidates ignore the evaluation and quality-assurance domain because it feels peripheral, when production-readiness evaluation is a professional-level theme that the exam tests directly.',
    items: [
      { mistake: 'Studying AI theory instead of AWS applied work', fix: 'Build in Bedrock: knowledge bases, RAG pipelines, agents, and guardrails hands-on.' },
      { mistake: 'Using material written for other AWS AI exams', fix: 'Verify any third-party material references the current Generative AI Developer exam guide.' },
      { mistake: 'Skipping the official Exam Prep Plan', fix: 'Complete the AWS Skill Builder prep plan and its practice assessments; they map to the domains.' },
      { mistake: 'Treating 750 as 75 percent correct', fix: 'AWS professional exams use scaled scoring; target mastery of the domains, not a raw percentage.' },
      { mistake: 'Ignoring evaluation and quality content', fix: 'Study model evaluation, hallucination detection, and quality metrics; the exam tests production readiness.' }
    ]
  },
  questionTypes: {
    summary: 'The Generative AI Developer - Professional exam is a computer-based AWS certification test delivered at Pearson VUE centers or online-proctored, with the beta format set at 85 questions over 204 minutes and the general-availability specification published on the official exam page; all items are multiple-choice and multiple-response, and AWS professional exams are scenario-heavy, presenting an application requirement and asking which architecture, service configuration, or sequence applies. The content follows the exam guide\u2019s domains: building production-ready AI solutions with foundation models, RAG architectures and vector databases, agents, guardrails, evaluation, and the AWS services that support them. The sample items below illustrate the published style across three areas — a RAG architecture item, an agent/guardrails item, and an evaluation item. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'Majority of items', detail: 'An application requirement followed by the best architecture or configuration.' },
      { name: 'Multiple-response items', share: 'Substantial minority', detail: 'Select all correct options; the AWS professional-exam standard format.' },
      { name: 'Service-selection items', share: 'Throughout', detail: 'Which AWS service or feature fits the described generative-AI workflow.' }
    ],
    samples: [
      {
        prompt: 'A team must build a RAG application over thousands of internal documents that are updated continuously. Which architecture keeps the knowledge base current with the least operational overhead?',
        options: [
          'A. Retrain the foundation model nightly on the full document set',
          'B. Automate document ingestion into a vector store and refresh the index on updates',
          'C. Store all documents in the prompt context window at query time',
          'D. Hard-code the answers from the documents into the application'
        ],
        answer: 'B',
        explanation: 'Continuous document updates are handled by automating ingestion into a vector store and refreshing the index on changes, which keeps the RAG knowledge base current without retraining the model or expanding the context window. The other options do not scale or do not keep the source current.'
      },
      {
        prompt: 'Which mechanism should be added to a generative-AI application to prevent it from producing outputs on prohibited topics while still allowing legitimate queries?',
        options: [
          'A. A guardrail with configured denied topics and filters',
          'B. Increasing the model temperature to maximum',
          'C. Removing all system prompts',
          'D. Disabling the vector database'
        ],
        answer: 'A',
        explanation: 'Guardrails let an application deny specific topics and filter content while permitting legitimate queries, which is the production-standard control for this requirement. The other options change generation behavior or remove capability without enforcing the policy.'
      },
      {
        prompt: 'Which practice is the most direct way to measure whether a generative-AI application\u2019s answers remain grounded in the provided source documents?',
        options: [
          'A. Tracking model-evaluation metrics for hallucination and grounding on test sets',
          'B. Measuring the model\u2019s training dataset size',
          'C. Increasing the number of tokens in the context window',
          'D. Checking the model\u2019s licensing terms'
        ],
        answer: 'A',
        explanation: 'Groundedness and hallucination are measured through model evaluation against test sets, which quantifies whether answers stay faithful to the sources. Dataset size, context length, and licensing do not measure output grounding.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Generative AI Developer - Professional exam is a computer-based AWS certification test delivered at Pearson VUE centers or online-proctored, and the direct exam-day answer is that you will sit a professional-level paper — the beta was 85 questions over 204 minutes, and the general-availability specification is published on the official AWS exam page — with a passing score of 750 on the 100-1000 scale, and a preliminary pass/fail result shown at the end of the appointment. Arrive with the required government-issued photo ID, or complete the online-proctoring environment check if you chose remote delivery; check the exam confirmation email for the specific rules, because Pearson VUE centers and online proctoring have different check-in procedures. The appointment includes a tutorial before the clock starts, and there is a scheduled break option mid-exam for AWS professional-level tests — confirm the current break policy on the exam page, because AWS\u2019s break rules have changed across exam versions. Expect a scenario-heavy paper with multiple-choice and multiple-response items; flag items for review and manage the long format\u2019s pacing, because professional-level exams reward time discipline as much as knowledge. A preliminary pass/fail appears on screen immediately after submission, with the official score report following in the AWS Certification account within about a week; a passing score validates the certification for three years, after which recertification is required. If you do not pass, AWS offers a discounted retake voucher (commonly 50 percent off) for a second attempt within the eligibility window — check the current retake policy — and candidates should use the domain-level feedback in the score report to re-target study.',
    bring: ['Government-issued photo ID (Pearson VUE centers) or validated ID for online proctoring', 'Exam confirmation email with the appointment details', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules or out of reach for remote)', 'Study materials and notes', 'Scratch paper from home (Pearson VUE supplies its own; online proctoring forbids it)', 'Any item on the proctoring rules list'],
    timeline: [
      { time: '15-30 min before', detail: 'Check in at the Pearson VUE center or complete the online-proctoring environment check' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '0-204 min (beta format)', detail: 'Work the exam; flag items, manage pacing, and take the scheduled break if available' },
      { time: 'Immediately after', detail: 'Preliminary pass/fail on screen; official score report in the AWS account within ~1 week' }
    ],
    rules: ['Valid photo ID required (center or proctored)', 'Scheduled-break policy per the current AWS exam page — confirm before the appointment', 'No personal electronics in the testing environment', 'Multiple-choice and multiple-response items; answer every question'],
    afterwards: 'A passing score of 750 certifies the credential for three years. Maintain it with AWS recertification, and use the domain-level feedback in the score report to re-target study if you need a retake with the discounted voucher.'
  }
};

export default data;
