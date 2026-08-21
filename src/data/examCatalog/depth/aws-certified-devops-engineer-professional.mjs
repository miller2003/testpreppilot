const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers AWS and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s DevOps Engineer - Professional exam guide (DOP-C02) and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS DevOps Engineer" — the certification validates advanced DevOps engineering skill on AWS, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500. The fit is deliberate: AWS DevOps Engineer - Professional holders work as senior DevOps engineers, platform engineers and release engineers who design and run CI/CD, infrastructure as code and observability on AWS, and the Professional-level credential signals the senior tier of that market. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a senior-hiring signal in AWS shops. Read the number as the market for the occupation the credential serves, with Professional-level holders concentrated in the upper half of the distribution.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $84,060', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $208,500', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Projected openings per year', value: '~150,000', note: 'BLS OOH, SOC 15-1252, 2024-2034' }
    ],
    growth: 'BLS projects 17 percent growth for software developers from 2024 to 2034, about 150,000 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate — the DevOps Engineer Professional exam (DOP-C02) has 75 questions in 180 minutes, passing 750 of 1000',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the DevOps Engineer - Professional exam (DOP-C02) has 75 questions with a 180-minute time limit, and a passing score of 750 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide: SDLC automation; configuration management and infrastructure as code; observability, monitoring and logging; and compliance, security and governance for the DevOps pipeline. The absence of a published pass rate is not an absence of standards: the 750 line on a Professional-level exam is a demanding bar, and the exam rewards hands-on knowledge of CodePipeline, CodeBuild, CloudFormation, the observability stack and the CI/CD toolchain on AWS. The practical reading: target 80 percent-plus on practice, use AWS\'s official exam guide and sample questions, and build the pipelines the exam rewards.',
    source: { label: 'AWS - DevOps Engineer Professional certification (DOP-C02)', url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The DOP-C02 is a 75-question, 180-minute Professional-level exam with a 750/1000 passing score, built on the official exam guide domains: SDLC automation, configuration management and infrastructure as code, observability, and compliance and governance. A defensible plan runs 120 to 180 hours over 10 to 14 weeks. Weeks 1-3: the SDLC automation — CodeCommit, CodeBuild, CodePipeline and CodeDeploy, with hands-on pipeline labs. Weeks 4-6: infrastructure as code — CloudFormation, the drift and change management, and the configuration tools. Weeks 7-9: observability — CloudWatch, X-Ray and the logging and monitoring patterns, plus the incident response. Weeks 10-11: compliance, security and governance — IAM for the pipeline, the security scanning and the governance patterns. Weeks 12-14: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the Professional exam rewards real pipeline and IaC experience; building the toolchain in a lab accelerates every phase.',
    totalHours: '120-180 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'SDLC automation', tasks: ['CodeCommit, CodeBuild, CodePipeline, CodeDeploy', 'Build and release pipelines', 'Hands-on pipeline labs'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Infrastructure as code', tasks: ['CloudFormation and the stacks', 'Drift and change management', 'Configuration management tools'], hours: 40 },
      { label: 'Weeks 7-9', focus: 'Observability', tasks: ['CloudWatch and X-Ray', 'Logging and monitoring patterns', 'Incident response'], hours: 40 },
      { label: 'Weeks 10-11', focus: 'Security and governance', tasks: ['IAM for the pipeline', 'Security scanning and compliance', 'Governance patterns'], hours: 25 },
      { label: 'Weeks 12-14', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 30 }
    ],
    variants: [
      { label: 'Working DevOps engineer', detail: 'The toolchain work accelerates the plan; focus study on the governance domain and the exam format.' },
      { label: 'From the Associate level', detail: 'Add 2-3 weeks of CI/CD and IaC depth before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The DOP-C02 rewards hands-on DevOps experience at the Professional level, so the dominant strategy is building the full toolchain in a lab: a CodePipeline-driven release with CloudFormation infrastructure and CloudWatch observability, because the exam items test the toolchain in practice. Second, master the infrastructure-as-code material deeply — CloudFormation, drift detection and change management — a core Professional domain. Third, learn the observability patterns: the exam asks how to monitor, log and respond, and the CloudWatch and X-Ray stack is a distinct domain. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 750 line leaves little margin. Finally, take at least two full timed practice exams; 75 questions in 180 minutes is about 2.4 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Build the full toolchain', detail: 'Pipeline, IaC and observability in a lab — the exam tests the stack.' },
      { title: 'Master infrastructure as code', detail: 'CloudFormation, drift and change management are a core domain.' },
      { title: 'Learn the observability patterns', detail: 'Monitoring, logging and response are a distinct domain.' },
      { title: 'Hold to 80%+ on practice', detail: 'The Professional-level 750 line leaves little margin.' },
      { title: 'Run two full simulations', detail: '75 questions in 180 minutes; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'DOP-C02 prep spans official AWS resources and third-party courses. AWS\'s own materials — the exam guide (free), sample questions and the AWS Skill Builder DevOps courses and labs — are the authoritative source; a Skill Builder subscription runs roughly $29-$99/month. Third-party providers sell DevOps Professional courses and practice exams at $50-$400. The AWS free tier supports the hands-on pipeline labs. A realistic total budget is $200 to $700 including the $300 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'AWS free tier', values: ['$0', 'Real cloud environment', 'Building the pipeline labs'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the DOP-C02 exam fee is $300; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common DOP-C02 mistake is preparing at the Associate level: candidates who pass the Developer or SysOps Associate and assume the Professional exam is "more of the same" fail the advanced items on observability, governance and the end-to-end toolchain. The fix is shifting the plan to the Professional domains. The second mistake is studying the services in isolation instead of the pipeline integration — the exam asks how the pieces work together. Third, candidates under-prepare the governance and security domain, a distinct Professional-level area. Fourth, many candidates skip full timed simulations and misjudge the reading-heavy pace. Finally, some candidates rely on a single third-party course without reading the official exam guide, losing the exact scope and weighting.',
    items: [
      { mistake: 'Preparing at the Associate level', fix: 'Shift to the Professional domains: observability, governance and the toolchain.' },
      { mistake: 'Studying services in isolation', fix: 'The exam tests the pipeline integration; build the full toolchain.' },
      { mistake: 'Under-preparing governance and security', fix: 'A distinct Professional-level domain; cover it.' },
      { mistake: 'Skipping full simulations', fix: '75 questions in 180 minutes; run two full timed exams.' },
      { mistake: 'Relying on one course', fix: 'Audit against the official exam guide for the exact scope.' }
    ]
  },
  questionTypes: {
    summary: 'The DOP-C02 is a 75-question multiple-choice and multiple-response exam in 180 minutes. The items are scenario-heavy: a described DevOps need — automate a release, manage infrastructure drift, implement observability, secure the pipeline — followed by the correct service combination, configuration or practice across the exam guide domains. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the toolchain-integration style of the real items.',
    types: [
      { name: 'Pipeline scenario items', share: 'Majority', detail: 'The correct CI/CD service combination for a described need.' },
      { name: 'Infrastructure-as-code items', share: 'Meaningful share', detail: 'CloudFormation, drift and change management.' },
      { name: 'Observability and governance items', share: 'Meaningful share', detail: 'Monitoring, logging, security and compliance.' }
    ],
    samples: [
      {
        prompt: 'A team must automate the release of an application to multiple AWS accounts with approvals at each environment. The most appropriate service combination is:',
        options: ['A. AWS CodePipeline with manual approval actions and cross-account deployments', 'B. Manual deployments to each account', 'C. A single shared account', 'D. Scheduled overnight builds'],
        answer: 'A',
        explanation: 'CodePipeline with approval actions and cross-account deployment patterns automates the multi-environment release with approvals — the standard approach. Manual deployments, a shared account or scheduled builds each fail the automation and approval requirements.'
      },
      {
        prompt: 'A stack deployed with CloudFormation shows drift from the template. The most appropriate first step is:',
        options: ['A. Detect and assess the drift, then remediate it back to the template state', 'B. Ignore the drift', 'C. Delete the stack', 'D. Recreate the resources by hand'],
        answer: 'A',
        explanation: 'Drift detection identifies template-state differences; the correct practice is assessing and remediating the drift to the template state. Ignoring it, deleting the stack or manual recreation each fail the IaC discipline.'
      },
      {
        prompt: 'To gain insight into application performance issues spanning multiple services, the most appropriate AWS tool is:',
        options: ['A. AWS X-Ray for distributed tracing', 'B. An S3 bucket for logs', 'C. A static dashboard', 'D. Manual log review'],
        answer: 'A',
        explanation: 'X-Ray provides distributed tracing across services — the tool for cross-service performance insight. Log storage, static dashboards or manual review each lack the trace-level analysis.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The DOP-C02 is a 75-question, 180-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $300 fee. Pace at about 2.4 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen immediately, with the official result and score report following; AWS reports your scaled score against the 750 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years. The afterwards matters: record the expiration date and plan the recertification cycle early.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '75 questions in 180 minutes; pace ~2.4 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 750/1000 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and plan recertification.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '180 minutes for 75 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years; recertify by passing the current exam or the recertification path. On a fail, wait 14 days and retake after additional domain study.'
  }
};

export default data;
