const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers AWS and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s Security - Specialty exam guide (SCS-C02) and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS Security Specialty" — the certification validates security-engineering skill on AWS, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780. The fit is deliberate: AWS Security Specialty holders work as cloud security engineers, security architects and cloud security analysts in AWS environments, all inside or directly adjacent to the information-security occupation, and BLS counted 182,300 information security analyst jobs in 2024, projecting a striking 30 percent growth from 2024 to 2034 with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a recognised cloud-security signal that employers in AWS shops require or prefer for security roles. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $71,280', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $173,780', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Projected openings per year', value: '~17,500', note: 'BLS OOH, SOC 15-1212, 2024-2034' }
    ],
    growth: 'BLS projects 30 percent growth for information security analysts from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate — the Security Specialty exam (SCS-C02) has 65 questions in 170 minutes, passing 750 of 1000',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the Security - Specialty exam (SCS-C02) has 65 questions with a 170-minute time limit, and a passing score of 750 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide: threat detection and incident response; security logging and monitoring; infrastructure security; identity and access management; and data protection and compliance. The absence of a published pass rate is not an absence of standards: the 750 line on a Specialty exam is a demanding bar, and the exam rewards hands-on knowledge of the AWS security services — GuardDuty, Security Hub, CloudTrail, IAM, KMS and the detective and preventive controls. The practical reading: target 80 percent-plus on practice, use AWS\'s official exam guide and sample questions, and build the security experience the exam rewards.',
    source: { label: 'AWS - Security Specialty certification (SCS-C02)', url: 'https://aws.amazon.com/certification/certified-security-specialty/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The SCS-C02 is a 65-question, 170-minute Specialty exam with a 750/1000 passing score, built on the official exam guide domains: threat detection and incident response, security logging and monitoring, infrastructure security, identity and access management, and data protection and compliance. A defensible plan runs 120 to 180 hours over 10 to 14 weeks. Weeks 1-3: identity and access management — IAM, the policies, the roles and the federation, because the identity domain anchors the exam. Weeks 4-6: detection and response — GuardDuty, Security Hub, CloudTrail, the detective controls and the incident-response patterns. Weeks 7-9: infrastructure and logging — the network security (VPC, security groups, WAF), the logging and monitoring stack, and the workload security. Weeks 10-11: data protection and compliance — KMS and encryption, the data-protection controls and the compliance frameworks. Weeks 12-14: scenario drilling and two full timed practice exams at the real format. The plan is security-service-heavy because the exam rewards hands-on knowledge of the AWS security stack.',
    totalHours: '120-180 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Identity and access', tasks: ['IAM policies, roles and federation', 'Least privilege and the access patterns', 'Hands-on IAM labs'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Detection and response', tasks: ['GuardDuty, Security Hub and CloudTrail', 'Detective controls and findings', 'Incident-response patterns'], hours: 40 },
      { label: 'Weeks 7-9', focus: 'Infrastructure and logging', tasks: ['VPC, security groups and WAF', 'Logging and monitoring stack', 'Workload security'], hours: 40 },
      { label: 'Weeks 10-11', focus: 'Data protection and compliance', tasks: ['KMS and encryption patterns', 'Data-protection controls', 'Compliance frameworks'], hours: 25 },
      { label: 'Weeks 12-14', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 30 }
    ],
    variants: [
      { label: 'Working security engineer', detail: 'The security stack accelerates the plan; focus study on the domains outside your daily work and the exam format.' },
      { label: 'From general cloud administration', detail: 'Add 2-3 weeks of security fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The SCS-C02 rewards hands-on knowledge of the AWS security services, so the dominant strategy is practising with the services in a lab: set up GuardDuty, CloudTrail and IAM policies, and work the detective-and-preventive control patterns, because the exam items test the services in practice. Second, master the identity domain deeply — IAM policies, roles, federation and least privilege — because it anchors the exam. Third, learn the detection and response patterns: which service detects what, and how the incident-response workflow operates, a distinct and heavily weighted domain. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 750 line leaves little margin. Finally, take at least two full timed practice exams; 65 questions in 170 minutes is about 2.6 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Practise with the services', detail: 'GuardDuty, CloudTrail and IAM in a lab — the exam tests the stack.' },
      { title: 'Master the identity domain', detail: 'IAM policies, roles and federation anchor the exam.' },
      { title: 'Learn detection and response', detail: 'Which service detects what and the response workflow.' },
      { title: 'Hold to 80%+ on practice', detail: 'The Specialty-level 750 line leaves little margin.' },
      { title: 'Run two full simulations', detail: '65 questions in 170 minutes; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'SCS-C02 prep spans official AWS resources and third-party courses. AWS\'s own materials — the exam guide (free), sample questions and the AWS Skill Builder security courses — are the authoritative source; a Skill Builder subscription runs roughly $29-$99/month. Third-party providers sell Security Specialty courses and practice exams at $50-$400. The AWS free tier supports hands-on security-lab practice. A realistic total budget is $200 to $700 including the $300 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'AWS free tier', values: ['$0', 'Real cloud environment', 'Security-service labs'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SCS-C02 exam fee is $300; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SCS-C02 mistake is studying the services in isolation: candidates who learn each AWS security service alone cannot answer the integration items, which ask which combination of services detects or prevents a described threat. The fix is studying the control patterns. The second mistake is under-preparing the identity domain, which anchors the exam and rewards precise IAM knowledge. Third, candidates new to AWS security under-prepare the detection and response domain, treating it as secondary when it is heavily weighted. Fourth, many candidates skip full timed simulations and misjudge the reading-heavy pace. Finally, some candidates rely on a single third-party course without reading the official exam guide, losing the exact scope and weighting.',
    items: [
      { mistake: 'Studying services in isolation', fix: 'Study the control patterns: which combination detects or prevents.' },
      { mistake: 'Under-preparing identity', fix: 'IAM anchors the exam; master the policies, roles and federation.' },
      { mistake: 'Treating detection as secondary', fix: 'Detection and response is a heavily weighted domain.' },
      { mistake: 'Skipping full simulations', fix: '65 questions in 170 minutes; run two full timed exams.' },
      { mistake: 'Relying on one course', fix: 'Audit against the official exam guide for the exact scope.' }
    ]
  },
  questionTypes: {
    summary: 'The SCS-C02 is a 65-question multiple-choice and multiple-response exam in 170 minutes. The items are scenario-heavy: a described security need — detect a threat, respond to an incident, secure access, protect data — followed by the correct service combination, configuration or practice across the exam guide domains. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the security-service style of the real items.',
    types: [
      { name: 'Detection and response items', share: 'Largest block', detail: 'Which service detects what and the response workflow.' },
      { name: 'Identity and access items', share: 'Large block', detail: 'IAM policies, roles, federation and least privilege.' },
      { name: 'Data protection and compliance items', share: 'Meaningful block', detail: 'KMS, encryption and the compliance frameworks.' }
    ],
    samples: [
      {
        prompt: 'A security team must continuously monitor for suspicious API activity across an AWS environment. The most appropriate service combination is:',
        options: ['A. AWS CloudTrail with Amazon GuardDuty for detection', 'B. A single S3 bucket', 'C. Manual log review', 'D. A static dashboard'],
        answer: 'A',
        explanation: 'CloudTrail records the API activity and GuardDuty detects suspicious patterns — the standard monitoring-and-detection combination. Log storage, manual review or a static dashboard each lack the detection capability.'
      },
      {
        prompt: 'An application running on EC2 needs to access an S3 bucket without long-term credentials on the instance. The most appropriate approach is:',
        options: ['A. An IAM role attached to the instance with a least-privilege policy', 'B. Access keys stored on the instance', 'C. The root account credentials', 'D. Making the bucket public'],
        answer: 'A',
        explanation: 'An instance profile with a least-privilege IAM role grants the EC2 instance temporary credentials — the secure pattern. Stored keys, root credentials or a public bucket each violate security best practice.'
      },
      {
        prompt: 'To protect sensitive data at rest in S3, the most appropriate control is:',
        options: ['A. Server-side encryption with AWS KMS', 'B. Making the bucket public', 'C. No encryption', 'D. A bucket name that hides the content'],
        answer: 'A',
        explanation: 'Server-side encryption with KMS protects data at rest — the standard control. Public buckets, no encryption or obfuscated names each fail the data-protection requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The SCS-C02 is a 65-question, 170-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $300 fee. Pace at about 2.6 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen immediately, with the official result and score report following; AWS reports your scaled score against the 750 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years. The afterwards matters: record the expiration date and plan the recertification cycle early.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '65 questions in 170 minutes; pace ~2.6 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 750/1000 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and plan recertification.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '170 minutes for 65 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years; recertify by passing the current exam or the recertification path. On a fail, wait 14 days and retake after additional domain study.'
  }
};

export default data;
