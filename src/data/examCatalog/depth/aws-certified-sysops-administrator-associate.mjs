const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers cloud and IT certifications. Exam structure, fees and rules come from the vendor certification pages (AWS, Google, CompTIA, Cisco, ISC2), which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s SysOps Administrator - Associate exam guide (SOA-C02) and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS SysOps Administrator" — the certification validates cloud operations skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420. The fit is deliberate: AWS SysOps Administrator - Associate holders work as cloud operations engineers, systems administrators and SRE-adjacent roles that run, monitor and troubleshoot AWS environments. BLS counted 217,500 network and computer systems administrator jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 15,100 openings a year, almost all replacement demand — the slow growth reflecting the shift of infrastructure administration toward cloud platforms, which is exactly the market this certification serves. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and cloud-ops pay varies widely by company; read the number as the relevant benchmark for the occupation, with cloud-platform roles typically at or above the median.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, software developers (senior track)', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate — it publishes the passing score: 720 of 1000, with a 65-question, 130-minute exam',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the SysOps Administrator - Associate exam (SOA-C02) has 65 questions, a 130-minute time limit, and a passing score of 720 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide, with domains covering the operations of cloud environments: monitoring, logging and remediation; reliability and business continuity; deployment, provisioning and automation; security and compliance; networking and content delivery; cost and performance optimisation. The absence of a published pass rate is not an absence of standards: the SysOps exam is the most hands-on of the Associate exams, rewarding operational troubleshooting — reading CloudWatch metrics, diagnosing failures, automating remediation — and the 720 line on 65 questions requires consistent performance. The practical reading: target 80 percent-plus on practice and use AWS\'s official exam guide and sample questions, the closest thing to the real item style.',
    source: { label: 'AWS - SysOps Administrator Associate certification (SOA-C02)', url: 'https://aws.amazon.com/certification/certified-sysops-cdoa-associate/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The SOA-C02 is a 65-question, 130-minute exam with a 720/1000 passing score, built on domains from the exam guide: monitoring, logging and remediation; reliability and business continuity; deployment, provisioning and automation; security and compliance; networking and content delivery; and cost and performance optimisation. The exam is operations-focused — it rewards knowing how to run, monitor, back up and troubleshoot AWS environments rather than design them. A defensible plan runs 80 to 120 hours over 8 to 10 weeks. Weeks 1-3 build the operations foundation: CloudWatch monitoring and logging, the core services you operate (EC2, VPC, S3, RDS), and IAM applied to operations. Weeks 4-5 cover reliability: backups, snapshots, high availability, disaster recovery and business continuity patterns. Weeks 6-7 cover automation and optimisation: CloudFormation, Systems Manager, cost optimisation, and the networking and content-delivery services. Weeks 8-10 add troubleshooting scenarios and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards real operational experience; building and breaking a small environment yourself converts service knowledge into the troubleshooting judgement the items test.',
    totalHours: '80-120 hours over 8-10 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Operations foundation', tasks: ['CloudWatch monitoring, alarms and logging', 'EC2, VPC, S3, RDS operations', 'IAM applied to operational tasks'], hours: 35 },
      { label: 'Weeks 4-5', focus: 'Reliability and continuity', tasks: ['Backups, snapshots and AMI management', 'High availability and disaster recovery patterns', 'Business continuity scenarios'], hours: 25 },
      { label: 'Weeks 6-7', focus: 'Automation and optimisation', tasks: ['CloudFormation and Systems Manager', 'Cost and performance optimisation', 'Networking and content delivery services'], hours: 25 },
      { label: 'Weeks 8-10', focus: 'Troubleshooting drills', tasks: ['Operational troubleshooting scenarios in volume', 'Two full 65-question, 130-minute practice exams', 'Review every miss; re-study weak domains'], hours: 25 }
    ],
    variants: [
      { label: 'Working in cloud operations', detail: 'Compress the foundation; spend the extra time on automation and troubleshooting drills.' },
      { label: 'Coming from on-prem sysadmin', detail: 'Add 2 weeks of AWS fundamentals; the operations mindset transfers, the services are new.' }
    ]
  },
  prepStrategies: {
    summary: 'The SOA-C02 rewards operational troubleshooting, so the dominant strategy is practising diagnosis: read the scenario — an alarm firing, an outage, a misconfigured resource — and select the correct identification and remediation, because the exam items are built around the troubleshooting loop. Second, master the monitoring and logging material thoroughly: CloudWatch metrics, alarms, log groups and the AWS services that feed them anchor the exam\'s operations focus. Third, learn the reliability patterns: backups, snapshots, failover and disaster recovery are a distinct block, and candidates who have never built a recovery plan under-prepare it. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 720 line leaves little margin. Fifth, take at least two full timed simulations; 65 questions in 130 minutes is exactly 2 minutes per item. Finally, hands-on experience matters: candidates who have actually operated AWS environments — created alarms, taken snapshots, automated with CloudFormation — answer the scenario items measurably better.',
    items: [
      { title: 'Practise the troubleshooting loop', detail: 'Alarm → diagnosis → remediation; the exam items are built around it.' },
      { title: 'Master monitoring and logging', detail: 'CloudWatch metrics, alarms and log groups anchor the operations focus.' },
      { title: 'Learn the reliability patterns', detail: 'Backups, snapshots, failover and DR are a distinct block.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 720/1000 line on 65 questions leaves little margin.' },
      { title: 'Operate a real environment', detail: 'Real CloudWatch-and-snapshot experience beats study-only prep on scenarios.' }
    ]
  },
  resourceComparison: {
    summary: 'SOA-C02 prep spans official AWS materials and third-party courses. AWS\'s own resources — the exam guide, sample questions, skill builder digital courses and labs — are the authoritative source and range from free to a few hundred dollars. Third-party video courses run from roughly $30/month subscriptions to several-hundred-dollar packages, and practice-exam products are essential for the troubleshooting-heavy format. Hands-on practice is non-negotiable: AWS\'s free tier supports realistic operations experiments — alarms, snapshots, a small CloudFormation stack — at low cost. A realistic total budget is $250 to $800 including the exam fee ($150) and one to three months of a course subscription. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder courses', values: ['$29-$99/month', 'Digital courses and labs', 'Official learning aligned to the exam'] },
      { label: 'Third-party video courses', values: ['$30-$300', 'Video subscriptions or packages', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'The troubleshooting format is essential to drill'] },
      { label: 'AWS free tier', values: ['$0', 'Hands-on environment', 'Building the operations experience'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SOA-C02 exam fee is $150; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SOA-C02 mistake is preparing like an architect: candidates study design patterns and then fail the operations items on monitoring, troubleshooting and remediation, which is what the exam actually concentrates on. The fix is to shift the plan to the operational loop. The second mistake is under-preparing automation — candidates with no CloudFormation or Systems Manager experience lose the deployment and automation block. Third, many candidates skip hands-on practice and cannot reason about alarms and snapshots the way the exam requires. Fourth, candidates skip full timed simulations and misjudge the 2-minutes-per-item pace on reading-heavy scenario items. Fifth, some candidates rely on a single third-party course without reading the official exam guide, losing the exact scope and weighting. Finally, ignoring the three-year validity clock is a quiet mistake; plan recertification early.',
    items: [
      { mistake: 'Preparing like an architect', fix: 'The exam is operations: monitoring, troubleshooting and remediation.' },
      { mistake: 'Under-preparing automation', fix: 'CloudFormation and Systems Manager are a distinct block; build one stack.' },
      { mistake: 'Skipping hands-on work', fix: 'Operate a real environment; the troubleshooting items reward experience.' },
      { mistake: 'Never running full simulations', fix: '65 questions in 130 minutes; run two full simulations.' },
      { mistake: 'Ignoring the validity clock', fix: 'The certification expires in three years; plan recertification.' }
    ]
  },
  questionTypes: {
    summary: 'The SOA-C02 is a 65-question multiple-choice and multiple-response exam in 130 minutes. The items are troubleshooting-heavy: a described operational situation — an alarm firing, an outage, a backup failure, a misconfigured resource — followed by the correct diagnosis and remediation, or the correct operational choice. The exam tests monitoring, reliability, deployment and automation, security and compliance, networking, and cost optimisation across the exam guide domains. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the operations and troubleshooting style of the real items.',
    types: [
      { name: 'Troubleshooting scenario items', share: 'Majority', detail: 'Operational situations with the correct diagnosis and remediation.' },
      { name: 'Reliability and continuity items', share: 'Meaningful share', detail: 'Backups, snapshots, failover and disaster recovery.' },
      { name: 'Automation and optimisation items', share: 'Meaningful share', detail: 'CloudFormation, Systems Manager, cost and performance.' }
    ],
    samples: [
      {
        prompt: 'An EC2 instance\'s CPU utilisation has been at 100% for two hours, triggering a CloudWatch alarm. The most appropriate first action is to:',
        options: ['A. Investigate the running processes and utilisation pattern before resizing', 'B. Terminate the instance immediately', 'C. Reboot the instance and ignore the alarm', 'D. Increase the alarm threshold to stop notifications'],
        answer: 'A',
        explanation: 'Operational practice investigates the cause — processes, utilisation pattern, whether the load is legitimate — before resizing or remediating. Termination, rebooting without diagnosis, or raising the threshold to silence the alarm each skip the diagnostic first step.'
      },
      {
        prompt: 'A workload on an EC2 instance must recover from an Availability Zone failure with minimal data loss. The most appropriate architecture is:',
        options: ['A. An Application Load Balancer with instances in two Availability Zones and automated snapshots', 'B. A single larger instance in one Availability Zone', 'C. A scheduled Lambda that restarts the instance daily', 'D. An EBS volume copied to S3 weekly'],
        answer: 'A',
        explanation: 'Multi-AZ placement behind an Application Load Balancer with automated snapshots delivers zone-failure recovery with minimal data loss. A single instance, a restart schedule, or weekly volume copies each leave the workload exposed to zone failure or extended data loss.'
      },
      {
        prompt: 'A team deploys infrastructure repeatedly and wants to eliminate manual configuration drift. The most appropriate tool is:',
        options: ['A. AWS CloudFormation templates managed as code', 'B. Manual console configuration with a checklist', 'C. Scheduled EC2 AMI refreshes', 'D. S3 versioning on the configuration files'],
        answer: 'A',
        explanation: 'CloudFormation treats infrastructure as code, making deployments repeatable and drift auditable — the standard answer to configuration drift. Manual checklists, AMI refreshes or versioned files each lack the declarative, reproducible deployment model the requirement specifies.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The SOA-C02 is a 65-question, 130-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $150 fee. Pace at exactly 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy troubleshooting scenarios. You receive your score immediately on screen, with the official result and score report following; AWS does not reveal a pass rate, only your 100-1000 scaled score against the 720 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years; recertify by passing the current exam or the recertification path. The afterwards matters: record the expiration date and plan recertification early.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '65 questions in 130 minutes; pace 2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 720/1000 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and plan recertification.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '130 minutes for 65 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years; recertify by passing the current exam or the recertification path. On a fail, wait 14 days and retake after additional domain study.'
  }
};

export default data;
