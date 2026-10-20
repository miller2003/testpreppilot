// Flagship rewrite - Amazon Web Services (pkg20): Advanced Networking Specialty, AI Practitioner,
// Cloud Practitioner, Data Engineer Associate, Database Specialty (retired).
// Sources read 2026-10-20:
//   AWS exam pages and docs.aws.amazon.com/aws-certification exam guides (ANS-C01, AIF-C01 v1.1,
//   CLF-C02, DEA-C01 v1.1, DBS-C01 v2.2 PDF), AWS Certification policies (before/after/during testing),
//   Recertification page, Benefits page, AWS Training and Certification blog (retirement notice).
// Not published by AWS and therefore omitted: pass rates, first-attempt statistics, DBS-C01 exam
// duration in the exam guide (taken from the earlier checked depth file, confidence medium).

const AWS_BODY = 'Amazon Web Services';
const CERT_HOME = 'https://aws.amazon.com/certification/';
const POLICIES = 'https://aws.amazon.com/certification/policies/before-testing/';

export const programs = [
  {
    id: 'amazon-web-services',
    body: AWS_BODY,
    bodyUrl: CERT_HOME,
    about: 'AWS Certification is the credentialing program run by Amazon Web Services for its own cloud platform. Exams are grouped into Foundational ($100), Associate ($150), and Professional and Specialty ($300) price tiers, each with a scaled passing score of 700, 720 or 750 on a 100-1,000 scale. Every credential is valid for three years and is issued as a Credly digital badge.',
    registrationSteps: [
      {
        title: 'Create an AWS Certification account with an AWS Builder ID',
        description: 'Sign in at aws.training/Certification using an AWS Builder ID. The AWS Certification account is separate from the AWS account you use to run cloud resources, and it holds your exam history, score reports, vouchers and accommodation requests.',
        subSteps: ['Create or sign in with an AWS Builder ID', 'Enter your legal name exactly as it appears on your government ID', 'Check the Exam History tab is available after sign-in'],
        duration: '10 minutes',
        note: 'The first and last name on your ID must match the name on your AWS Certification account exactly, or you can be refused at check-in.'
      },
      {
        title: 'Request accommodations before you schedule',
        description: 'Non-native English speakers can request a one-time 30-minute extension under Request Exam Accommodations in the Certification account, and it applies to all future registrations. Accommodations for documented disabilities must be requested through the test delivery provider before scheduling each exam.',
        subSteps: ['Open Request Exam Accommodations in your Certification account', 'Select the ESL +30 minutes option if it applies', 'Wait for approval before you book the appointment'],
        duration: '',
        note: 'Disability accommodations are requested per exam, not once for the account.'
      },
      {
        title: 'Schedule through Pearson VUE: test center or OnVUE online',
        description: 'Choose the exam in your Certification account and complete scheduling and payment on the Pearson VUE dashboard. Online proctoring (OnVUE) is available for all AWS exams, with English offered 24 hours a day; Japanese, Spanish (Latin America) and Mandarin have set hours.',
        subSteps: ['Pick test center or online delivery', 'Pay with Visa, American Express, Mastercard, JCB or a voucher', 'Run the OnVUE system test before exam day if testing online'],
        duration: '15 minutes',
        note: 'Exam prices are reviewed at least annually in May and are listed in USD plus applicable taxes.'
      },
      {
        title: 'Check in with the right ID',
        description: 'Online candidates need one valid, unexpired primary government ID and can launch the exam up to 30 minutes early; arriving more than 15 minutes late forfeits the fee. Test center candidates need two primary IDs or one primary and one secondary, and should arrive 15 to 30 minutes early.',
        subSteps: ['Use an original ID, not a photocopy, digital ID or laminated paper ID', 'Online: complete the self check-in and room scan, then wait for the proctor', 'Test center: store belongings as staff direct'],
        duration: '15 to 30 minutes',
        note: 'Online exams have no breaks. At a test center you may take unscheduled breaks, but the exam timer keeps running.'
      },
      {
        title: 'Sit the exam and download the score report',
        description: 'Results are posted to your AWS Certification account within five business days after the exam closes, and may take longer if the attempt is under security or technical review. Open the Exam History tab, select Score Report, then Download for a PDF with your scaled score and section-level classifications.',
        subSteps: ['Open Exam History in your Certification account', 'Download the PDF score report', 'Accept the Credly digital badge if you passed'],
        duration: 'Within 5 business days',
        note: 'After you pass, your account shows a 50% discount voucher for a future AWS exam.'
      }
    ],
    proctoring: 'All AWS exams are delivered by Pearson VUE at test centers or through OnVUE online proctoring. Online candidates may launch up to 30 minutes early, need one primary government ID, cannot take breaks and cannot leave the camera view. Test center candidates need two IDs (two primary, or one primary plus one secondary) and may take unscheduled breaks while the timer keeps running.',
    retakePolicy: 'After a failed attempt you must wait 14 calendar days before retaking the same exam, and there is no limit on the number of attempts. The full exam fee is charged every time. After you pass, you cannot retake the same exam for two years unless it receives a new exam guide and series code. Beta exams can be taken only once.',
    recertification: 'AWS certifications are valid for three years. You renew for another three years by passing the latest version of your exam or a higher-level exam in the same track, and the clock restarts from the date you complete the action, not from the old expiry date. A separate maintain option adds one year and requires an active AWS Skill Builder subscription. Cloud Practitioner holders can also complete the free AWS Cloud Quest: Recertify Cloud Practitioner game within 6 months of expiry. A certification must be active to renew.',
    scoreReporting: 'Results are posted to your AWS Certification account within five business days after the exam closes, under Exam History, as a downloadable PDF score report. Scores are scaled from 100 to 1,000; the passing score is 700 for Foundational, 720 for Associate and 750 for Professional and Specialty exams. Section-level classifications are indicative only because scoring is compensatory.',
    refundPolicy: 'You can reschedule up to 24 hours before the appointment, and each appointment can be rescheduled twice. Cancel at least 24 hours ahead; cancelling later or missing the appointment forfeits the exam fee. Pearson VUE may waive the fee for personal illness or an unforeseen emergency with appropriate documentation. Voucher expiry dates cannot be extended.',
    providersNote: 'AWS publishes a free exam guide with domains and weights for every exam, plus official practice question sets and exam prep courses on AWS Skill Builder. Third-party practice exams are optional and vary in how current they are; check that the product was updated for the exam guide version you will sit, since AWS revises guides about one month before the exam changes.',
    comparison: {
      title: 'AWS certifications in this guide compared',
      columns: ['Level', 'AWS target candidate', 'Exam fee (USD)', 'Passing score', 'Status in October 2026'],
      rows: [
        { label: 'AWS Certified Cloud Practitioner (CLF-C02)', values: ['Foundational', 'Up to 6 months of AWS Cloud exposure', '$100', '700 / 1,000', 'Open'] },
        { label: 'AWS Certified AI Practitioner (AIF-C01)', values: ['Foundational', 'Up to 6 months of AI/ML exposure on AWS', '$100', '700 / 1,000', 'Open; exam guide v1.1 dated April 30, 2026'] },
        { label: 'AWS Certified Data Engineer - Associate (DEA-C01)', values: ['Associate', '2-3 years in data engineering plus 1-2 years of hands-on AWS', '$150', '720 / 1,000', 'Open; exam guide v1.1 dated December 12, 2025'] },
        { label: 'AWS Certified Advanced Networking - Specialty (ANS-C01)', values: ['Specialty', '5+ years of networking, 2+ years of cloud and hybrid networking', '$300', '750 / 1,000', 'Retiring; last test day December 31, 2026'] },
        { label: 'AWS Certified Database - Specialty (DBS-C01)', values: ['Specialty', '5+ years of database experience, 2+ years on AWS', '$300', '750 / 1,000', 'Retired April 30, 2024'] }
      ]
    },
    orgFaqs: [
      {
        q: 'How much do AWS certification exams cost?',
        a: 'AWS charges by tier in USD, plus applicable taxes: $100 for Foundational and Business exams, $150 for Associate exams, and $300 for Professional and Specialty exams. AWS reviews prices at least annually in May and gives at least 30 days notice of exchange-rate changes. Passing any AWS exam earns a 50% discount voucher toward a later exam.'
      },
      {
        q: 'How long is an AWS certification valid and how do you renew it?',
        a: 'Every AWS certification is valid for three years. To renew, pass the latest version of the same exam or a higher-level exam in the same track, which restarts a three-year clock from the day you pass. Cloud Practitioner holders can instead complete the free AWS Cloud Quest: Recertify Cloud Practitioner game. A one-year maintain option exists through an AWS Skill Builder subscription.'
      },
      {
        q: 'What is the AWS exam retake policy?',
        a: 'You must wait 14 calendar days after a failed AWS exam before retaking it, and there is no cap on attempts. Each attempt costs the full exam fee. If you pass, you cannot take the same exam again for two years unless AWS has released a new exam guide and series code for it. Beta exams can be sat only once.'
      }
    ],
    sourceUrl: POLICIES,
    verified: true,
    confidence: 'high'
  }
];

const REC_COMMON = {
  body: AWS_BODY,
  reviewed: '2026-10'
};

export const exams = [
  // ---------------------------------------------------------------- Cloud Practitioner
  {
    ...REC_COMMON,
    slug: 'aws-certified-cloud-practitioner',
    tagline: 'The AWS Certified Cloud Practitioner (CLF-C02) is the entry-level, role-independent AWS credential.',
    description: 'The AWS Certified Cloud Practitioner (CLF-C02) exam has 65 questions in 90 minutes and a passing scaled score of 700 out of 1,000. It is the entry point to AWS Certification for people with up to six months of AWS exposure, including non-engineers such as sales, finance, project and management staff who work with cloud teams. The exam guide splits the 50 scored questions across four domains: Cloud Concepts, Security and Compliance, Cloud Technology and Services, and Billing, Pricing, and Support. It costs $100, has no prerequisites, and a pass can later be renewed by passing any Associate or Professional AWS exam.',
    quickAnswer: {
      summary: 'The AWS Certified Cloud Practitioner exam (CLF-C02) has 65 questions (50 scored, 15 unscored) in 90 minutes and needs a scaled score of 700 out of 1,000. It costs $100, has no prerequisites, and is taken at a Pearson VUE center or online. The certification is valid for three years.',
      advantages: [
        'No prerequisites: AWS says prior IT experience is not required, and the exam excludes coding, architecture design, troubleshooting and implementation.',
        'The lowest AWS price tier at $100, with a 50% voucher on your next AWS exam after you pass.',
        'Services is the biggest domain at 34%, followed by Security and Compliance at 30%, so study effort can follow published weights.',
        'Free renewal route: AWS Cloud Quest: Recertify Cloud Practitioner extends validity by three years without sitting the exam.'
      ]
    },
    roadmap: [
      'Create an AWS Certification account with an AWS Builder ID',
      'Read the CLF-C02 exam guide and its four domain weights',
      'Book the 90-minute exam with Pearson VUE (test center or OnVUE)',
      'Pass at a scaled score of 700 out of 1,000',
      'Renew after three years or step up to an Associate exam'
    ],
    prerequisites: 'None. AWS states the exam is for candidates new to the cloud and no prior IT experience is required; the target candidate has up to 6 months of exposure to AWS Cloud design, implementation or operations.',
    eligibility: 'There are no education or experience gates. The target candidate might be early in an AWS Cloud career or might work with people in AWS Cloud roles. AWS lists coding, designing cloud architecture, troubleshooting, implementation, and load and performance testing as job tasks outside the scope of the exam.',
    examMeta: {
      questions: '65 total: 50 scored plus 15 unscored items that are not identified on the exam',
      time: '90 minutes for the whole exam (a single section)',
      pass: 'Scaled score of 700 on a 100-1,000 scale; compensatory scoring, so no per-domain minimum',
      fee: '$100 USD plus applicable taxes per attempt; a retake costs the full $100',
      format: 'Multiple choice (one correct of four) and multiple response (two or more correct of five or more options); no penalty for guessing',
      admin: 'AWS Certification; delivered by Pearson VUE at test centers or via OnVUE online proctoring'
    },
    topics: [
      { name: 'Cloud Concepts', weight: '24%', note: 'The value of the AWS Cloud, the AWS Well-Architected Framework and cloud economics.' },
      { name: 'Security and Compliance', weight: '30%', note: 'The AWS shared responsibility model and security best practices.' },
      { name: 'Cloud Technology and Services', weight: '34%', note: 'Core AWS compute, network, database and storage services and choosing a service for a common use case.' },
      { name: 'Billing, Pricing, and Support', weight: '12%', note: 'AWS cloud costs, pricing models, billing practices and support options.' }
    ],
    examEssentials: [
      ['Exam code and version', 'CLF-C02; the German and Italian versions are retired after December 31, 2026'],
      ['Scored questions', '50 scored plus 15 unscored of 65 total; unanswered questions are marked wrong'],
      ['Retake rule', '14 calendar days after a failed attempt, no attempt limit, full $100 each time'],
      ['Retake after passing', 'Not allowed for two years unless a new exam guide and series code is released'],
      ['Validity', '3 years; renew by passing the latest exam, any Associate or Professional exam, or the free Cloud Quest recertification game'],
      ['Score report', 'Posted within 5 business days after the exam closes, as a PDF in Exam History'],
      ['Accommodations', 'One-time ESL +30 minutes request in your Certification account; disability accommodations per exam']
    ],
    timeline: [
      { stage: 'Study', duration: 'Self-paced; AWS sets no minimum hours for the Foundational exam' },
      { stage: 'Schedule and sit the exam', duration: '90 minutes of exam time plus 15 to 30 minutes for check-in' },
      { stage: 'Results', duration: 'Within 5 business days after the exam closes' },
      { stage: 'Waiting period if you fail', duration: '14 calendar days before a retake' },
      { stage: 'Certification validity', duration: '3 years, renewable' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (Foundational tier)', fee: '$100 plus applicable taxes' },
        { item: 'Retake after a failed attempt (after the 14-day wait)', fee: '$100, full fee again' },
        { item: 'Next exam after passing', fee: '50% discount voucher from your Certification account' },
        { item: 'Renewal via AWS Cloud Quest: Recertify Cloud Practitioner', fee: 'Free (eligible within 6 months of expiry)' }
      ],
      total: '$100 for a first-attempt pass, plus taxes and any study materials you choose',
      footnote: 'Prices are in USD as of October 2026 and are reviewed by AWS at least once a year in May. Prep materials are optional and priced by their providers.'
    },
    difficulty: 'Easy',
    audience: 'Career changers, students and non-engineers such as sales, finance and project staff who work with AWS teams, and engineers starting an AWS certification path.',
    time: 'Self-paced; AWS publishes no required study hours',
    cost: '$100',
    faqs: [
      {
        q: 'How many questions are on the AWS Cloud Practitioner exam?',
        a: 'The AWS Certified Cloud Practitioner (CLF-C02) exam has 65 questions: 50 scored and 15 unscored. AWS does not mark the unscored items, so answer every question. You have 90 minutes. Items are multiple choice with one correct answer or multiple response with two or more correct answers, and unanswered questions are counted wrong with no guessing penalty.'
      },
      {
        q: 'What is a passing score on the AWS Cloud Practitioner exam?',
        a: 'The passing score for AWS Certified Cloud Practitioner is 700 on a scaled range of 100 to 1,000. It is not 70 percent of questions, because AWS equates different exam forms, so the raw number of correct answers varies. Scoring is compensatory: you pass on the overall score and do not need to clear each of the four domains.'
      },
      {
        q: 'Is the AWS Cloud Practitioner exam hard?',
        a: 'It is the easiest AWS exam by design, aimed at candidates with up to six months of AWS exposure and excluding coding and architecture design. Questions are scenario-based with similar-looking options, and study sites commonly flag the shared responsibility model and pricing wording as sticking points. AWS publishes no pass rate, so ignore percentages quoted online.'
      },
      {
        q: 'How much does the AWS Cloud Practitioner exam cost?',
        a: 'The AWS Certified Cloud Practitioner exam costs $100 USD plus applicable taxes as of October 2026, the lowest AWS price tier. Each retake costs the full $100 again. After you pass, your AWS Certification account provides a 50% discount voucher you can apply to a later exam, which makes a $150 Associate exam cheaper.'
      },
      {
        q: 'How long is the AWS Cloud Practitioner certification valid?',
        a: 'The AWS Certified Cloud Practitioner certification is valid for three years. You can renew it by passing the latest CLF exam version, by passing any Associate or Professional exam, or by completing the free AWS Cloud Quest: Recertify Cloud Practitioner game, which opens when your certification is within six months of expiring. Renewal adds three years from completion.'
      },
      {
        q: 'Can I take the AWS Cloud Practitioner exam online from home?',
        a: 'Yes. AWS delivers the Cloud Practitioner exam through Pearson VUE OnVUE online proctoring as well as test centers. Online candidates need one valid primary government ID, can launch the exam 30 minutes early, cannot take breaks, and forfeit the fee if more than 15 minutes late or if the system test fails. Run the Pearson system test beforehand.'
      },
      {
        q: 'Which topics are weighted most on the AWS Cloud Practitioner exam?',
        a: 'Cloud Technology and Services is the largest CLF-C02 domain at 34% of scored content, then Security and Compliance at 30%, Cloud Concepts at 24%, and Billing, Pricing, and Support at 12%. Together, services and security make up 64% of the scored questions, so start with core services and the shared responsibility model.'
      },
      {
        q: 'How many times can I retake the AWS Cloud Practitioner exam?',
        a: 'There is no limit on attempts. After a failed Cloud Practitioner attempt you wait 14 calendar days and pay the full $100 fee again. If you pass, you cannot take the same exam for two years unless AWS releases a new exam guide and series code. Reschedules are allowed up to 24 hours before the appointment, twice per appointment.'
      }
    ],
    summaryPoints: [
      'AWS Certified Cloud Practitioner (CLF-C02): 65 questions (50 scored) in 90 minutes, passing score 700 out of 1,000.',
      'The exam costs $100 plus taxes and has no prerequisites; the target candidate has up to 6 months of AWS exposure.',
      'Domain weights: Cloud Technology and Services 34%, Security and Compliance 30%, Cloud Concepts 24%, Billing, Pricing, and Support 12%.',
      'The credential is valid for 3 years and can be renewed free through AWS Cloud Quest: Recertify Cloud Practitioner.'
    ],
    relatedSlugs: ['aws-certified-ai-practitioner', 'aws-certified-solutions-architect-associate', 'aws-certified-data-engineer-associate', 'aws-certified-developer-associate'],
    sourceUrl: 'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
    confidence: 'high'
  },

  // ---------------------------------------------------------------- AI Practitioner
  {
    ...REC_COMMON,
    slug: 'aws-certified-ai-practitioner',
    tagline: 'The AWS Certified AI Practitioner (AIF-C01) validates foundational AI, ML and generative AI knowledge on AWS.',
    description: 'The AWS Certified AI Practitioner (AIF-C01) exam has 65 questions in 90 minutes, costs $100 and requires a scaled score of 700 out of 1,000. It is for people who use, but do not necessarily build, AI/ML solutions on AWS, with up to six months of exposure to AI/ML on AWS. Its five domains run from Fundamentals of AI and ML to Guidelines for Responsible AI and Security, Compliance, and Governance for AI Solutions, and Applications of Foundation Models is the largest at 28%. Exam guide version 1.1 was published April 30, 2026 and adds agentic AI, token-based pricing and context engineering to the objectives.',
    quickAnswer: {
      summary: 'The AWS Certified AI Practitioner (AIF-C01) exam has 65 questions (50 scored) in 90 minutes, costs $100, and needs a scaled score of 700 out of 1,000. It tests AI, ML and generative AI concepts and AWS services such as Amazon Bedrock and SageMaker AI, with no prerequisites. The certification is valid for three years.',
      advantages: [
        'It is non-coding: AWS lists developing models, tuning hyperparameters and building ML pipelines as out of scope for the target candidate.',
        'The largest domain is Applications of Foundation Models at 28%, followed by Fundamentals of GenAI at 24%, so generative AI carries most of the exam.',
        'Exam guide version 1.1 (April 30, 2026) is current, and it adds agentic AI, Model Context Protocol and token-based pricing, so recent material matters.',
        'At $100 it sits in the Foundational tier, and a pass earns a 50% voucher toward a $150 Associate exam such as Data Engineer.'
      ]
    },
    roadmap: [
      'Read the AIF-C01 exam guide, version 1.1, and its five domain weights',
      'Learn core AI, ML and generative AI terms and the AWS services in scope',
      'Book the 90-minute exam with Pearson VUE',
      'Pass at a scaled score of 700 out of 1,000',
      'Renew in three years or move to an Associate-level AWS exam'
    ],
    prerequisites: 'None required. AWS advises candidates new to IT and AWS to start with AWS Cloud Practitioner Essentials or AWS Technical Essentials; holders of Cloud Practitioner or an Associate certification can skip those courses.',
    eligibility: 'The target candidate has up to 6 months of exposure to AI/ML technologies on AWS and uses, but does not necessarily build, AI/ML solutions. AWS expects familiarity with Amazon EC2, S3, Lambda, Amazon Bedrock and SageMaker AI, the shared responsibility model, IAM and service pricing models.',
    examMeta: {
      questions: '65 total: 50 scored plus 15 unscored items that are not identified on the exam',
      time: '90 minutes for the whole exam (a single section)',
      pass: 'Scaled score of 700 on a 100-1,000 scale; compensatory scoring, so no per-domain minimum',
      fee: '$100 USD plus applicable taxes per attempt; a retake costs the full $100',
      format: 'Multiple choice, multiple response, ordering (3-5 steps) and matching (3-7 prompts); no penalty for guessing',
      admin: 'AWS Certification; delivered by Pearson VUE at test centers or via OnVUE online proctoring'
    },
    topics: [
      { name: 'Fundamentals of AI and ML', weight: '20%', note: 'AI terms, types of learning, inferencing, ML pipeline stages and model metrics.' },
      { name: 'Fundamentals of GenAI', weight: '24%', note: 'Generative AI concepts, foundation model capabilities, token-based pricing, context engineering and agentic AI basics.' },
      { name: 'Applications of Foundation Models', weight: '28%', note: 'Selecting and customizing foundation models, prompt engineering, RAG, agents and evaluating model performance.' },
      { name: 'Guidelines for Responsible AI', weight: '14%', note: 'Bias, fairness, transparency and explainable models, including SageMaker Model Cards and Clarify.' },
      { name: 'Security, Compliance, and Governance for AI Solutions', weight: '14%', note: 'Securing AI systems, privacy, prompt injection, governance and hallucination detection and grounding.' }
    ],
    examEssentials: [
      ['Exam code and guide version', 'AIF-C01; exam guide v1.0 published March 26, 2026, v1.1 published April 30, 2026'],
      ['Scored questions', '50 scored plus 15 unscored of 65 total; unanswered questions are marked wrong'],
      ['Question types', 'Multiple choice, multiple response, ordering and matching'],
      ['Retake rule', '14 calendar days after a failed attempt, no attempt limit, full $100 each time'],
      ['Validity', '3 years; renew by passing the latest AIF-C01 exam or a higher-level AWS exam in the same track'],
      ['Score report', 'Posted within 5 business days after the exam closes, as a PDF in Exam History'],
      ['Out of scope', 'Developing or coding models, hyperparameter tuning, building ML pipelines and statistical analysis of models']
    ],
    timeline: [
      { stage: 'Study', duration: 'Self-paced; AWS publishes no required hours' },
      { stage: 'Exam appointment', duration: '90 minutes of exam time plus 15 to 30 minutes for check-in' },
      { stage: 'Results', duration: 'Within 5 business days after the exam closes' },
      { stage: 'Retake wait after a fail', duration: '14 calendar days' },
      { stage: 'Certification validity', duration: '3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (Foundational tier)', fee: '$100 plus applicable taxes' },
        { item: 'Retake after a failed attempt (after the 14-day wait)', fee: '$100, full fee again' },
        { item: 'Next AWS exam after passing', fee: '50% discount voucher from your Certification account' },
        { item: 'Exam guide and AWS Skill Builder introductory training', fee: 'Exam guide is free; paid subscription tiers exist on Skill Builder' }
      ],
      total: '$100 for a first-attempt pass, plus taxes and any optional study materials',
      footnote: 'Prices are in USD as of October 2026. Practice material last updated before April 2026 may not cover the agentic AI and Model Context Protocol objectives added in guide v1.1.'
    },
    difficulty: 'Moderate',
    audience: 'Business analysts, product and project managers, marketers, sales engineers and early-career technologists who work with AI/ML and generative AI projects on AWS without building the models.',
    time: 'Self-paced; AWS publishes no required study hours',
    cost: '$100',
    faqs: [
      {
        q: 'How many questions are on the AWS AI Practitioner exam?',
        a: 'The AWS Certified AI Practitioner (AIF-C01) exam has 65 questions, of which 50 are scored and 15 are unscored. You get 90 minutes. Question types are multiple choice, multiple response, ordering and matching, and unanswered questions count as wrong with no penalty for guessing, so answer everything even when unsure.'
      },
      {
        q: 'What is the passing score for AWS Certified AI Practitioner?',
        a: 'The AIF-C01 passing score is 700 on a scaled range of 100 to 1,000, the same as the other AWS Foundational exam. It is not a percentage of correct answers, because AWS equates exam forms. Scoring is compensatory, so you pass or fail on the overall score and do not need a minimum in each of the five domains.'
      },
      {
        q: 'Is the AWS AI Practitioner exam hard?',
        a: 'It is a foundational exam but is harder than Cloud Practitioner for candidates without AI vocabulary, because ordering and matching items need exact concepts such as RAG, fine-tuning and Bedrock Guardrails. AWS excludes coding and model building, and publishes no pass rate, so judge readiness with the official practice questions rather than percentages found online.'
      },
      {
        q: 'Has the AWS AI Practitioner exam changed in 2026?',
        a: 'Yes. AWS published exam guide v1.0 on March 26, 2026 and v1.1 on April 30, 2026. Version 1.1 adds objectives on agentic AI, Model Context Protocol, token-based pricing, context engineering, prompt versioning and hallucination detection, and adds Amazon Bedrock AgentCore, Kiro, Strands Agents and Amazon Q to the in-scope services. Older practice banks may be out of date.'
      },
      {
        q: 'Which domain is weighted most on AIF-C01?',
        a: 'Applications of Foundation Models is the largest AIF-C01 domain at 28% of scored content. Fundamentals of GenAI follows at 24% and Fundamentals of AI and ML at 20%, while Guidelines for Responsible AI and Security, Compliance, and Governance for AI Solutions each carry 14%. Generative AI topics therefore account for roughly half the scored questions.'
      },
      {
        q: 'How much does the AWS AI Practitioner exam cost?',
        a: 'The AWS Certified AI Practitioner exam costs $100 USD plus applicable taxes as of October 2026. Retakes are the full $100 each time, after a 14-day wait. Once you pass, your AWS Certification account gives a 50% discount voucher for another AWS exam, which lowers the cost of an Associate exam from $150 to $75.'
      },
      {
        q: 'How long is the AWS AI Practitioner certification valid?',
        a: 'The AWS Certified AI Practitioner certification is valid for three years. To renew, pass the latest version of the AIF-C01 exam or a higher-level exam in the same track; the new three years start on the date you complete the renewal. AWS also offers a one-year maintain option that needs an active AWS Skill Builder subscription.'
      }
    ],
    summaryPoints: [
      'AWS Certified AI Practitioner (AIF-C01): 65 questions (50 scored) in 90 minutes, passing score 700 out of 1,000.',
      'The exam costs $100 plus taxes; target candidates have up to 6 months of exposure to AI/ML on AWS and use but do not build solutions.',
      'Domain weights: Applications of Foundation Models 28%, Fundamentals of GenAI 24%, Fundamentals of AI and ML 20%, Responsible AI 14%, Security, Compliance, and Governance 14%.',
      'Exam guide v1.1 (April 30, 2026) added agentic AI, Model Context Protocol and token-based pricing objectives; the certification is valid for 3 years.'
    ],
    relatedSlugs: ['aws-certified-cloud-practitioner', 'aws-certified-machine-learning-engineer-associate', 'aws-certified-generative-ai-developer-professional', 'aws-certified-data-engineer-associate'],
    sourceUrl: 'https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html',
    confidence: 'high'
  },

  // ---------------------------------------------------------------- Data Engineer Associate
  {
    ...REC_COMMON,
    slug: 'aws-certified-data-engineer-associate',
    tagline: 'The AWS Certified Data Engineer - Associate (DEA-C01) validates building and operating data pipelines on AWS.',
    description: 'The AWS Certified Data Engineer - Associate (DEA-C01) exam has 65 questions in 130 minutes, costs $150 and needs a scaled passing score of 720 out of 1,000. It targets data engineers with 2-3 years of data engineering experience and 1-2 years of hands-on AWS work, and it covers Data Ingestion and Transformation (34%), Data Store Management (26%), Data Operations and Support (22%), and Data Security and Governance (18%). The role-based exam launched in March 2024, and exam guide version 1.1 of December 12, 2025 added open table formats such as Apache Iceberg, vector indexes and SageMaker Unified Studio topics.',
    quickAnswer: {
      summary: 'The AWS Certified Data Engineer - Associate (DEA-C01) exam has 65 questions (50 scored) in 130 minutes, costs $150, and requires a scaled score of 720 out of 1,000. It covers ingestion and transformation, data stores, operations and security for AWS data pipelines. The certification is valid for three years.',
      advantages: [
        'Data Ingestion and Transformation carries 34% of scored content, so pipeline building with services such as AWS Glue is the first study priority.',
        'The Associate tier price is $150, half the $300 charged for Specialty and Professional exams, with a 50% voucher available if you already hold another AWS certification.',
        'Exam guide v1.1 (December 12, 2025) added Apache Iceberg open table formats, vector index types and LLM integration for data processing.',
        'Passing any Associate exam, this one included, renews an active Cloud Practitioner certification for another three years.'
      ]
    },
    roadmap: [
      'Check your fit: 2-3 years of data engineering and 1-2 years of hands-on AWS work',
      'Read the DEA-C01 exam guide, version 1.1, and its four domain weights',
      'Lab the in-scope services: ingestion, storage, orchestration and governance',
      'Book the 130-minute exam with Pearson VUE and pass at 720 out of 1,000',
      'Renew after three years with the latest exam or a higher-level AWS exam'
    ],
    prerequisites: 'No formal prerequisite. AWS recommends the equivalent of 2-3 years of experience in data engineering plus at least 1-2 years of hands-on experience with AWS services.',
    eligibility: 'The target candidate understands how data volume, variety and velocity affect ingestion, transformation, modeling, security, governance, privacy and schema design. AWS expects ETL pipeline experience, language-agnostic programming concepts, Git, data lake concepts and SQL. ML training and inference, language-specific syntax and drawing business conclusions from data are out of scope.',
    examMeta: {
      questions: '65 total: 50 scored plus 15 unscored items that are not identified on the exam',
      time: '130 minutes for the whole exam (a single section)',
      pass: 'Scaled score of 720 on a 100-1,000 scale; compensatory scoring, so no per-domain minimum',
      fee: '$150 USD plus applicable taxes per attempt; a retake costs the full $150',
      format: 'Multiple choice (one correct of four) and multiple response (two or more correct of five or more options); no penalty for guessing',
      admin: 'AWS Certification; delivered by Pearson VUE at test centers or via OnVUE online proctoring'
    },
    topics: [
      { name: 'Data Ingestion and Transformation', weight: '34%', note: 'Ingesting and transforming data, orchestrating pipelines and applying programming concepts.' },
      { name: 'Data Store Management', weight: '26%', note: 'Choosing a data store, designing data models, cataloging schemas and managing data lifecycles.' },
      { name: 'Data Operations and Support', weight: '22%', note: 'Operationalizing, maintaining and monitoring pipelines, analyzing data and ensuring data quality.' },
      { name: 'Data Security and Governance', weight: '18%', note: 'Authentication, authorization, encryption, privacy, governance and logging for data in pipelines.' }
    ],
    examEssentials: [
      ['Exam code and guide version', 'DEA-C01; exam guide v1.1 published December 12, 2025; guides are revised about one month before exam changes'],
      ['Launch', 'Available to schedule and take from March 12, 2024'],
      ['Scored questions', '50 scored plus 15 unscored of 65 total; unanswered questions are marked wrong'],
      ['Retake rule', '14 calendar days after a failed attempt, no attempt limit, full $150 each time'],
      ['Validity', '3 years; renew by passing the latest DEA-C01 exam or a higher-level AWS exam'],
      ['Score report', 'Posted within 5 business days after the exam closes, as a PDF in Exam History'],
      ['Accommodations', 'One-time ESL +30 minutes request in your Certification account; disability accommodations per exam']
    ],
    timeline: [
      { stage: 'Study and hands-on labs', duration: 'Self-paced; AWS recommends 1-2 years of hands-on AWS experience' },
      { stage: 'Exam appointment', duration: '130 minutes of exam time plus 15 to 30 minutes for check-in' },
      { stage: 'Results', duration: 'Within 5 business days after the exam closes' },
      { stage: 'Retake wait after a fail', duration: '14 calendar days' },
      { stage: 'Certification validity', duration: '3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (Associate tier)', fee: '$150 plus applicable taxes' },
        { item: 'Retake after a failed attempt (after the 14-day wait)', fee: '$150, full fee again' },
        { item: 'Discount if you already passed another AWS exam', fee: '50% voucher, which brings the exam to $75' },
        { item: 'Hands-on AWS lab usage while studying', fee: 'Billed by AWS at standard service rates; set budget alerts' }
      ],
      total: '$150 for a first-attempt pass (or $75 with a 50% voucher), plus taxes and lab costs',
      footnote: 'Prices are in USD as of October 2026 and reviewed by AWS each May. Lab costs depend on the services and time you use.'
    },
    difficulty: 'Challenging',
    audience: 'Data engineers, ETL developers, analytics engineers and database or BI professionals moving to AWS-based data pipelines.',
    time: 'Self-paced; AWS recommends 2-3 years data engineering plus 1-2 years hands-on AWS',
    cost: '$150',
    faqs: [
      {
        q: 'How many questions are on the AWS Data Engineer Associate exam?',
        a: 'The AWS Certified Data Engineer - Associate (DEA-C01) exam has 65 questions: 50 scored and 15 unscored. You have 130 minutes, which is about two minutes per question. Items are multiple choice or multiple response, unanswered questions are scored as incorrect, and there is no penalty for guessing, so never leave an item blank.'
      },
      {
        q: 'What is the passing score for AWS Certified Data Engineer - Associate?',
        a: 'The DEA-C01 passing score is 720 on a scaled range of 100 to 1,000. It is a scaled score, not 72 percent correct, because AWS equates difficulty across exam forms. Scoring is compensatory across the four domains, so a weak area such as governance can be offset by strength elsewhere, though the domain classification still shows weak spots.'
      },
      {
        q: 'Is the AWS Data Engineer Associate exam hard?',
        a: 'It is one of the harder Associate exams for people without pipeline experience, because AWS recommends 2-3 years of data engineering plus 1-2 years of hands-on AWS work. Scenario questions test service trade-offs among Glue, Kinesis, Redshift, Athena and Lake Formation. AWS publishes no pass rate, so rely on official practice questions and labs.'
      },
      {
        q: 'Which domains are weighted most on DEA-C01?',
        a: 'Data Ingestion and Transformation is the largest DEA-C01 domain at 34% of scored content. Data Store Management follows at 26%, Data Operations and Support at 22%, and Data Security and Governance at 18%. Ingestion and storage together make up 60% of the scored questions, so build and compare pipelines before studying governance.'
      },
      {
        q: 'What changed in the AWS Data Engineer Associate exam guide in December 2025?',
        a: 'AWS published exam guide v1.1 on December 12, 2025. It merged separate knowledge and skills lists into one skills list per task and added skills for LLM integration in data processing, open table formats such as Apache Iceberg, vector index types such as HNSW and IVF, and SageMaker Catalog governance. Amazon Bedrock and Amazon S3 Tables joined the in-scope services.'
      },
      {
        q: 'How much does the AWS Data Engineer Associate exam cost?',
        a: 'The AWS Certified Data Engineer - Associate exam costs $150 USD plus applicable taxes as of October 2026, the Associate price tier. Each retake is the full $150 after a 14-day wait. If you already hold an AWS certification, a 50% discount voucher from your Certification account can bring the cost to $75.'
      },
      {
        q: 'How long is the AWS Data Engineer Associate certification valid?',
        a: 'The AWS Certified Data Engineer - Associate certification is valid for three years. You renew it by passing the latest version of DEA-C01 or a higher-level exam in the same track, which restarts a three-year clock on the day you pass. A one-year maintain option exists for holders with an active AWS Skill Builder subscription.'
      },
      {
        q: 'Is AWS Data Engineer Associate the replacement for Database Specialty?',
        a: 'No official replacement exists, but AWS launched the Data Engineer - Associate on March 12, 2024, just before it retired Database - Specialty on April 30, 2024. The two overlap on data stores and migration but differ in focus: DEA-C01 tests pipelines, ingestion and governance, while the retired DBS-C01 tested database design and administration across five domains.'
      }
    ],
    summaryPoints: [
      'AWS Certified Data Engineer - Associate (DEA-C01): 65 questions (50 scored) in 130 minutes, passing score 720 out of 1,000.',
      'The exam costs $150 plus taxes; AWS recommends 2-3 years of data engineering and 1-2 years of hands-on AWS experience.',
      'Domain weights: Data Ingestion and Transformation 34%, Data Store Management 26%, Data Operations and Support 22%, Data Security and Governance 18%.',
      'Exam guide v1.1 (December 12, 2025) added Apache Iceberg, vector indexes and LLM-in-pipeline skills; the certification is valid for 3 years.'
    ],
    relatedSlugs: ['aws-certified-machine-learning-engineer-associate', 'aws-certified-solutions-architect-associate', 'aws-certified-database-specialty', 'aws-certified-security-specialty'],
    sourceUrl: 'https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.html',
    confidence: 'high'
  },

  // ---------------------------------------------------------------- Advanced Networking Specialty
  {
    ...REC_COMMON,
    slug: 'aws-certified-advanced-networking-specialty',
    tagline: 'The AWS Certified Advanced Networking - Specialty (ANS-C01) is retiring; the last test day is December 31, 2026.',
    description: 'The AWS Certified Advanced Networking - Specialty (ANS-C01) exam is being retired, and the last day to take it is December 31, 2026. It has 65 questions in 170 minutes, costs $300 and needs a scaled passing score of 750 out of 1,000. The exam validates the ability to design, implement, manage and secure AWS and hybrid network architectures at scale, for candidates with 5 or more years of networking experience and 2 or more years of cloud and hybrid networking. Its four domains are Network Design (30%), Network Implementation (26%), Network Security, Compliance, and Governance (24%), and Network Management and Operation (20%).',
    quickAnswer: {
      summary: 'The AWS Certified Advanced Networking - Specialty (ANS-C01) exam has 65 questions (50 scored) in 170 minutes, costs $300, and needs 750 out of 1,000. AWS is retiring it; the last test day is December 31, 2026 and no new certifications are issued afterwards. Existing certifications stay valid for their three-year term.',
      advantages: [
        'The last test day is December 31, 2026, so the exam is still bookable in October 2026 with a firm cutoff that candidates can plan against.',
        'Network Design carries 30% of scored content, the largest domain, followed by Network Implementation at 26%.',
        'It uses only multiple response and matching items, so partial answers earn nothing and every option needs to be evaluated.',
        'Passing earns a 50% voucher for another AWS exam, and AWS Skill Builder digital training is the learning path AWS points to.'
      ]
    },
    roadmap: [
      'Confirm you can finish before the December 31, 2026 retirement date',
      'Read the ANS-C01 exam guide and its four domain weights',
      'Book the 170-minute exam with Pearson VUE (test center or OnVUE)',
      'Pass at a scaled score of 750 out of 1,000',
      'Plan alternatives: the certification cannot be renewed with ANS-C01 after retirement'
    ],
    prerequisites: 'No formal prerequisite. AWS recommends 5 or more years of networking experience with 2 or more years of cloud and hybrid networking experience.',
    eligibility: 'The target candidate knows AWS networking nuances and how they integrate with other AWS services, AWS security best practices, and AWS compute and storage options with their consistency models. The exam validates designing hybrid and cloud networking, implementing core AWS networking services, operating and maintaining network architecture, automating network tasks and implementing secure networks.',
    examMeta: {
      questions: '65 total: 50 scored plus 15 unscored items that are not identified on the exam',
      time: '170 minutes for the whole exam (a single section)',
      pass: 'Scaled score of 750 on a 100-1,000 scale; compensatory scoring, so no per-domain minimum',
      fee: '$300 USD plus applicable taxes per attempt; a retake costs the full $300',
      format: 'Multiple response (two or more correct of five or more options) and matching (3-7 prompts); no penalty for guessing',
      admin: 'AWS Certification; delivered by Pearson VUE at test centers or via OnVUE online proctoring'
    },
    topics: [
      { name: 'Network Design', weight: '30%', note: 'Designing hybrid and cloud-based networking solutions on AWS at scale.' },
      { name: 'Network Implementation', weight: '26%', note: 'Implementing core AWS networking services to AWS best practices and automating deployment.' },
      { name: 'Network Management and Operation', weight: '20%', note: 'Operating and maintaining hybrid and cloud network architecture for AWS services.' },
      { name: 'Network Security, Compliance, and Governance', weight: '24%', note: 'Securing networks with AWS native networking constructs and services.' }
    ],
    examEssentials: [
      ['Retirement', 'ANS-C01 is being retired; the last day to take the exam is December 31, 2026 and no new certifications are issued afterwards'],
      ['Exam code', 'ANS-C01; available in English, Japanese, Korean and Simplified Chinese'],
      ['Scored questions', '50 scored plus 15 unscored of 65 total; unanswered questions are marked wrong'],
      ['Retake rule', '14 calendar days after a failed attempt, no attempt limit, full $300 each time'],
      ['Validity', '3 years; recertification is by passing the latest version of the exam, which will not exist after retirement'],
      ['Score report', 'Posted within 5 business days after the exam closes, as a PDF in Exam History'],
      ['Accommodations', 'One-time ESL +30 minutes request in your Certification account; disability accommodations per exam']
    ],
    timeline: [
      { stage: 'Study and hands-on practice', duration: 'Self-paced; AWS recommends 5+ years of networking and 2+ years of cloud and hybrid networking' },
      { stage: 'Exam appointment', duration: '170 minutes of exam time plus 15 to 30 minutes for check-in' },
      { stage: 'Results', duration: 'Within 5 business days after the exam closes' },
      { stage: 'Retake wait after a fail', duration: '14 calendar days, which must still end before December 31, 2026' },
      { stage: 'Final test day', duration: 'December 31, 2026' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (Specialty tier)', fee: '$300 plus applicable taxes' },
        { item: 'Retake after a failed attempt (after the 14-day wait)', fee: '$300, full fee again' },
        { item: 'Discount if you already passed another AWS exam', fee: '50% voucher, which brings the exam to $150' },
        { item: 'Hands-on lab usage for VPC, Transit Gateway, Direct Connect and VPN practice', fee: 'Billed by AWS at standard service rates' }
      ],
      total: '$300 for a first-attempt pass (or $150 with a 50% voucher), plus taxes and lab costs',
      footnote: 'Prices are in USD as of October 2026. A failed attempt in December 2026 may leave no time for a retake before the December 31 cutoff because of the 14-day wait.'
    },
    difficulty: 'Hard',
    audience: 'Experienced network engineers and architects who design and operate AWS and hybrid networks and want the credential before the exam is retired.',
    time: 'Self-paced; AWS recommends 5+ years of networking experience',
    cost: '$300',
    faqs: [
      {
        q: 'Is the AWS Advanced Networking Specialty exam being retired?',
        a: 'Yes. AWS lists AWS Certified Advanced Networking - Specialty (ANS-C01) as retiring, and the last day to take the exam is December 31, 2026. No new certifications are issued after retirement. AWS did not name a replacement exam on its certification pages as of October 2026, so check the AWS Certification site for later announcements.'
      },
      {
        q: 'How many questions are on the AWS Advanced Networking Specialty exam?',
        a: 'The ANS-C01 exam has 65 questions: 50 scored and 15 unscored, in 170 minutes. All items are multiple response or matching, which means you must select every correct option or match every pair to earn credit. Unanswered questions are scored as incorrect and there is no penalty for guessing.'
      },
      {
        q: 'What is the passing score on the AWS Advanced Networking Specialty exam?',
        a: 'The passing score for ANS-C01 is 750 on a scaled range of 100 to 1,000, the standard for Professional and Specialty exams. It is a scaled score rather than a percentage, since AWS equates exam forms. Scoring is compensatory: you pass on the overall score, with no minimum required in each of the four domains.'
      },
      {
        q: 'Is the AWS Advanced Networking Specialty exam hard?',
        a: 'Yes, it is among the hardest AWS exams. AWS recommends 5 or more years of networking experience plus 2 or more years of cloud and hybrid networking, and the exam allows no single-answer items: every question needs several correct selections or matches. AWS publishes no pass rate, so treat quoted percentages as unofficial.'
      },
      {
        q: 'How much does the AWS Advanced Networking Specialty exam cost?',
        a: 'The AWS Certified Advanced Networking - Specialty exam costs $300 USD plus applicable taxes as of October 2026, the Professional and Specialty price tier. A failed attempt requires a 14-day wait and another full $300. If you hold another AWS certification, a 50% discount voucher can reduce the price to $150.'
      },
      {
        q: 'Which domains are weighted most on ANS-C01?',
        a: 'Network Design is the largest ANS-C01 domain at 30% of scored content. Network Implementation follows at 26%, Network Security, Compliance, and Governance at 24%, and Network Management and Operation at 20%. Design and implementation together are 56% of the 50 scored questions, so hybrid connectivity and routing design deserve the most time.'
      },
      {
        q: 'How long is the AWS Advanced Networking Specialty certification valid?',
        a: 'A passed ANS-C01 certification is valid for three years, but it cannot be renewed with the same exam after retirement because recertification requires the latest version of the exam. AWS stated for the earlier specialty retirements that existing certifications stay valid for three years from the date earned, and a higher-level exam can renew others.'
      }
    ],
    summaryPoints: [
      'AWS Certified Advanced Networking - Specialty (ANS-C01): 65 questions (50 scored) in 170 minutes, passing score 750 out of 1,000.',
      'The exam is retiring: the last day to take it is December 31, 2026, and no new certifications are issued after that date.',
      'Domain weights: Network Design 30%, Network Implementation 26%, Network Security, Compliance, and Governance 24%, Network Management and Operation 20%.',
      'The fee is $300 plus taxes with a 14-day wait before a retake; AWS recommends 5+ years of networking and 2+ years of cloud and hybrid networking.'
    ],
    relatedSlugs: ['aws-certified-security-specialty', 'aws-certified-solutions-architect-professional', 'aws-certified-solutions-architect-associate', 'aws-certified-devops-engineer-professional'],
    sourceUrl: 'https://docs.aws.amazon.com/aws-certification/latest/advanced-networking-specialty-01/advanced-networking-specialty-01.html',
    confidence: 'high'
  },

  // ---------------------------------------------------------------- Database Specialty (retired)
  {
    ...REC_COMMON,
    slug: 'aws-certified-database-specialty',
    tagline: 'The AWS Certified Database - Specialty (DBS-C01) was retired on April 30, 2024 and can no longer be taken.',
    description: 'The AWS Certified Database - Specialty (DBS-C01) exam was retired by AWS on April 30, 2024; the last day to take it was April 29, 2024, and AWS has not announced a direct replacement. When it was offered it had 65 questions (50 scored) at a $300 fee and a passing scaled score of 750 out of 1,000. It targeted database professionals with at least 5 years of database experience and 2 years on AWS, across five domains led by Workload-Specific Database Design at 26%. Certifications earned before retirement stayed valid for three years from the date earned.',
    quickAnswer: {
      summary: 'The AWS Certified Database - Specialty (DBS-C01) exam is retired: the last test day was April 29, 2024 and it cannot be booked. It had 65 questions (50 scored) and a 750 out of 1,000 passing score. Holders keep the credential for three years from the date earned; AWS announced no direct replacement.',
      advantages: [
        'Existing holders keep the certification and the Credly badge for three years from the date earned, even though the exam is gone.',
        'The retired exam guide still maps the AWS database landscape: Workload-Specific Database Design 26%, Deployment and Migration 20%, then three domains at 18%.',
        'AWS launched Data Engineer - Associate on March 12, 2024 as the nearest current exam for data stores and pipelines.',
        'Recertifying DBS-C01 is not possible, so renewal means passing a different current AWS exam.'
      ]
    },
    roadmap: [
      'Confirm the exam is retired (last test day April 29, 2024)',
      'If you hold DBS-C01, check your expiry date in your AWS Certification account',
      'Pick a current AWS exam: Data Engineer - Associate is the nearest',
      'Use the DBS-C01 domains as a study map for database topics',
      'Book the current exam with Pearson VUE'
    ],
    prerequisites: 'Not applicable: the exam can no longer be scheduled. When it was offered, AWS listed at least 5 years of experience with common database technologies, at least 2 years of hands-on AWS experience, and experience with on-premises and AWS relational and NoSQL databases.',
    eligibility: 'No new candidates can take DBS-C01. The target candidate described in the version 2.2 exam guide worked in a database-focused role and understood the key features of AWS database services. Developing ETL operations, designing data pipelines, designing data lake architectures and developing complex stored procedures were out of scope.',
    examMeta: {
      questions: '65 total when offered: 50 scored plus 15 unscored items (exam retired)',
      time: '180 minutes when offered (exam retired)',
      pass: 'Scaled score of 750 on a 100-1,000 scale when offered; compensatory scoring',
      fee: '$300 USD per attempt when offered (Specialty tier); no longer bookable',
      format: 'Multiple choice and multiple response when offered; retired April 30, 2024',
      admin: 'AWS Certification; was delivered by Pearson VUE (test center and online proctoring)'
    },
    topics: [
      { name: 'Workload-Specific Database Design', weight: '26%', note: 'Selecting and designing the right AWS database for a workload; the heaviest domain of the retired exam.' },
      { name: 'Deployment and Migration', weight: '20%', note: 'Deploying databases and migrating to AWS, such as with AWS Database Migration Service.' },
      { name: 'Management and Operations', weight: '18%', note: 'Maintaining, automating and operating AWS database environments.' },
      { name: 'Monitoring and Troubleshooting', weight: '18%', note: 'Monitoring database performance and diagnosing faults.' },
      { name: 'Database Security', weight: '18%', note: 'Protecting database access, data and compliance on AWS.' }
    ],
    examEssentials: [
      ['Retirement', 'Retired April 30, 2024; the last day to take the exam was April 29, 2024'],
      ['Exam code and guide', 'DBS-C01; the final exam guide is version 2.2'],
      ['Questions when offered', '65 total: 50 scored plus 15 unscored'],
      ['Existing holders', 'Credentials earned before retirement stay valid for 3 years from the date earned; the Credly badge can still be displayed'],
      ['Recertification', 'Not possible with DBS-C01 after April 29, 2024 because the exam is no longer offered'],
      ['Nearest current exam', 'AWS Certified Data Engineer - Associate (DEA-C01), available since March 12, 2024'],
      ['Retirement context', 'AWS retired Database - Specialty with Data Analytics - Specialty and SAP on AWS - Specialty to reduce the number of specialty certifications']
    ],
    timeline: [
      { stage: 'Last day to take DBS-C01', duration: 'April 29, 2024' },
      { stage: 'Official retirement', duration: 'April 30, 2024' },
      { stage: 'Validity of certifications earned before retirement', duration: '3 years from the date earned' },
      { stage: 'Move to a current exam', duration: 'Self-paced; plan around the target exam guide' }
    ],
    costBreakdown: {
      items: [
        { item: 'DBS-C01 exam fee when offered (Specialty tier)', fee: '$300' },
        { item: 'DBS-C01 exam today', fee: 'Not available; retired April 30, 2024' },
        { item: 'Nearest current exam, Data Engineer - Associate (Associate tier)', fee: '$150 plus applicable taxes' },
        { item: 'Voucher after passing any current AWS exam', fee: '50% discount toward another AWS exam' }
      ],
      total: 'Nothing to pay for DBS-C01; the nearest current exam, Data Engineer - Associate, costs $150',
      footnote: 'The $300 figure is the AWS Specialty price tier; current prices as of October 2026 are on the AWS exam pricing page.'
    },
    difficulty: 'Hard',
    audience: 'Existing DBS-C01 holders and database administrators and architects deciding which current AWS exam to take instead.',
    time: 'Not applicable; the exam is retired',
    cost: 'Not applicable (retired); nearest current exam $150',
    faqs: [
      {
        q: 'Is the AWS Certified Database Specialty exam still available?',
        a: 'No. AWS retired the Database - Specialty (DBS-C01) exam on April 30, 2024, and the last day to take it was April 29, 2024. It cannot be scheduled. AWS did not announce a direct replacement, though it launched Data Engineer - Associate on March 12, 2024, which covers data stores and pipelines.'
      },
      {
        q: 'Is my AWS Database Specialty certification still valid?',
        a: 'Yes, until it expires. AWS stated that certifications earned before the retirement stay valid for three years from the date earned, and holders can keep displaying the Credly digital badge. You cannot recertify by retaking DBS-C01 because the exam is no longer offered. To keep an active AWS credential, pass a current exam.'
      },
      {
        q: 'What replaced the AWS Certified Database Specialty?',
        a: 'AWS announced no direct replacement. The nearest current exam is AWS Certified Data Engineer - Associate (DEA-C01), which launched March 12, 2024, but it tests data pipelines, ingestion and governance rather than database administration. Candidates focused on managed databases can also use the retired DBS-C01 domains as a study map.'
      },
      {
        q: 'What was the passing score of the AWS Database Specialty exam?',
        a: 'The DBS-C01 passing score was 750 on a scaled range of 100 to 1,000. It was a scaled score rather than a percentage, and scoring was compensatory across the five domains, so candidates passed on the overall score. The exam had 65 questions, of which 50 were scored and 15 were unscored research items.'
      },
      {
        q: 'What were the domains of the AWS Database Specialty exam?',
        a: 'DBS-C01 had five domains: Workload-Specific Database Design at 26%, Deployment and Migration at 20%, and Management and Operations, Monitoring and Troubleshooting, and Database Security at 18% each. The final exam guide, version 2.2, listed in-scope services and described a target candidate with at least 5 years of database experience and 2 years on AWS.'
      },
      {
        q: 'Can I renew an AWS Database Specialty certification?',
        a: 'No, not with DBS-C01. AWS recertification requires passing the latest version of the exam or a higher-level exam, and the Database - Specialty exam is no longer offered. Your existing certification remains valid for three years from the date earned. After that, a different current AWS certification is the way to hold an active credential.'
      },
      {
        q: 'Why did AWS retire the Database Specialty certification?',
        a: 'AWS said it retired Database - Specialty, Data Analytics - Specialty and SAP on AWS - Specialty to reduce the number of specialty certifications and strengthen the foundational, associate and professional levels. The Database - Specialty last test day was April 29, 2024, with official retirement on April 30, 2024.'
      }
    ],
    summaryPoints: [
      'AWS Certified Database - Specialty (DBS-C01) was retired on April 30, 2024; the last test day was April 29, 2024.',
      'When offered, it had 65 questions (50 scored), a 750 out of 1,000 passing score and a $300 fee.',
      'Domains were Workload-Specific Database Design 26%, Deployment and Migration 20%, and Management and Operations, Monitoring and Troubleshooting, and Database Security at 18% each.',
      'Credentials earned before retirement stay valid for 3 years from the date earned and cannot be renewed with DBS-C01; Data Engineer - Associate is the nearest current exam.'
    ],
    relatedSlugs: ['aws-certified-data-engineer-associate', 'aws-certified-solutions-architect-associate', 'aws-certified-machine-learning-engineer-associate', 'aws-certified-security-specialty'],
    sourceUrl: 'https://aws.amazon.com/blogs/training-and-certification/aws-certification-retirements-and-launches',
    confidence: 'medium'
  }
];

export default { programs, exams };
