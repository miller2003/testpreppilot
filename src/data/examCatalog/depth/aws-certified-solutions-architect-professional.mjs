const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers cloud and IT certifications. Exam structure, fees and rules come from the vendor certification pages (AWS, Google, CompTIA, Cisco, ISC2), which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s Solutions Architect - Professional exam guide (SAP-C02) and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS Solutions Architect" — the certification validates cloud architecture skill, and the wage question belongs to the role you perform with it. The closest official BLS occupations are Software Developers, SOC 15-1252, which had a May 2024 median of $132,270, and Network and Computer Systems Administrators, SOC 15-1244, at a May 2024 median of $96,900; architects and senior cloud engineers benchmark against the developer series, while operational cloud roles benchmark against the administrator series. The fit for the Professional-level credential is the upper end of that market: AWS Solutions Architect - Professional holders typically work as senior cloud architects, cloud consultants and enterprise architects, where the relevant benchmark is the developer-series distribution — lowest 10 percent under $84,060 and highest 10 percent above $208,500 in the May 2024 data. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as a hiring signal for senior architecture roles; the professional-level credential signals exactly the experience level at which the developer-series wage applies.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $84,060', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $208,500', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Median, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' }
    ],
    growth: 'BLS projects 17 percent growth for software developers from 2024 to 2034, about 150,000 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate — it publishes the passing score: 750 of 1000, with a 75-question, 180-minute exam',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the Solutions Architect - Professional exam (SAP-C02) has 75 questions, a 180-minute time limit, and a passing score of 750 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years, renewable through recertification. The exam content follows the official exam guide: designing solutions for organizational complexity; designing for new solutions; continuous improvement of existing solutions; and accelerating workload migration and modernization — with a heavy weighting on architecture decisions that span multiple AWS services. The absence of a published pass rate is not an absence of standards: the Professional-level exam is widely regarded as one of the hardest AWS exams, and the 750 line on a 75-question paper leaves little margin for error. The practical reading: target well above 750 on practice — 80 percent-plus — and use AWS\'s official exam guide and sample questions, the closest thing to the real item style.',
    source: { label: 'AWS - Solutions Architect Professional certification (SAP-C02)', url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The SAP-C02 is a 75-question, 180-minute exam with a 750/1000 passing score, built on four domains: designing solutions for organizational complexity, designing for new solutions, continuous improvement of existing solutions, and accelerating workload migration and modernization. The Professional-level exam assumes the Associate-level foundation and tests architecture at enterprise scale: multi-account strategies, hybrid connectivity, migration patterns, and the trade-offs between services. A defensible plan runs 120 to 180 hours over 10 to 14 weeks. Weeks 1-4 rebuild the foundation with the exam guide as the map: core services (compute, storage, networking, databases, security) and their integration patterns. Weeks 5-8 drill the Professional-level topics: organization design (AWS Organizations, SCPs, landing zones), migration (Migration Hub, Application Discovery, database migration), and continuous improvement (cost optimisation, reliability and performance patterns). Weeks 9-12 shift to scenario drilling and practice exams at the real format. Weeks 13-14 are targeted re-study of weak domains plus a final full simulation. The plan is architecture-heavy because the exam rewards decisions, not recall; hands-on experience in a multi-account environment accelerates every phase.',
    totalHours: '120-180 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Foundation rebuild', tasks: ['Work the exam guide domains and service map', 'Reinforce compute, storage, networking, databases and security', 'Build integration-pattern notes'], hours: 45 },
      { label: 'Weeks 5-8', focus: 'Professional-level topics', tasks: ['Multi-account design: Organizations, SCPs, landing zones', 'Migration and modernization patterns', 'Continuous improvement: cost, reliability, performance'], hours: 50 },
      { label: 'Weeks 9-12', focus: 'Scenario drilling', tasks: ['Architecture scenario practice in volume', 'Two full practice exams at the real format', 'Error log mapped to the exam guide'], hours: 50 },
      { label: 'Weeks 13-14', focus: 'Final polish', tasks: ['One final full simulation', 'Re-study weak domains', 'Schedule the exam'], hours: 25 }
    ],
    variants: [
      { label: 'SAA-03 already earned', detail: 'Compress the foundation phase to 2 weeks; the Professional exam builds directly on the Associate material.' },
      { label: 'Limited multi-account experience', detail: 'Add 2 weeks of hands-on labs on Organizations, landing zones and migration tooling.' }
    ]
  },
  prepStrategies: {
    summary: 'The SAP-C02 rewards architecture judgement at enterprise scale, so the dominant strategy is scenario drilling: practise describing a business requirement and selecting the correct multi-service architecture, because the exam items are decision-based. Second, master the organization-design material — AWS Organizations, service control policies, landing zones and multi-account strategies — since it anchors the Professional-level distinction from the Associate exam. Third, learn migration and modernization patterns thoroughly: the exam tests the correct tool and approach for moving workloads, including database migration and re-platforming decisions. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 750 line leaves little margin. Fifth, take at least two full timed simulations; 75 questions in 180 minutes is about 2.4 minutes per item, and the scenario items are reading-heavy. Finally, hands-on experience matters: candidates who have built in a real multi-account environment answer the trade-off items measurably better than those who have only studied.',
    items: [
      { title: 'Drill architecture decisions', detail: 'The exam is decision-based; practise selecting multi-service architectures from requirements.' },
      { title: 'Master organization design', detail: 'Organizations, SCPs and landing zones anchor the Professional-level distinction.' },
      { title: 'Learn migration patterns', detail: 'Correct tooling and approach per workload type, including database migration.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 750/1000 line on 75 questions leaves no margin.' },
      { title: 'Get hands-on', detail: 'Real multi-account experience beats study-only preparation on trade-off items.' }
    ]
  },
  resourceComparison: {
    summary: 'SAP-C02 prep spans official AWS materials and third-party courses. AWS\'s own resources — the exam guide, sample questions, skill builder digital courses and hands-on labs — are the authoritative source and range from free to a few hundred dollars. The major third-party providers (such as the well-known cloud-cert training houses) sell full courses from roughly $30/month subscriptions to several-hundred-dollar packages, plus practice-exam products that are essential given the scenario-heavy format. Hands-on practice is non-negotiable: AWS\'s free tier and skill-builder labs allow realistic architecture experimentation at low cost. A realistic total budget is $300 to $900 including the exam fee ($300) and one to three months of a course subscription. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder courses', values: ['$29-$99/month', 'Digital courses and labs', 'Official learning aligned to the exam'] },
      { label: 'Third-party video courses', values: ['$30-$300', 'Video subscriptions or packages', 'Structured walkthrough of every domain'] },
      { label: 'Practice-exam products', values: ['$30-$150', 'Online simulated exams', 'The scenario format is essential to drill'] },
      { label: 'AWS free tier + labs', values: ['$0-$50', 'Hands-on AWS environment', 'Building the architecture experience'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SAP-C02 exam fee is $300; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SAP-C02 mistake is preparing at the Associate level: candidates who pass the SAA and assume the Professional exam is "more of the same" fail the enterprise-scale items on organization design, migration and cost optimisation. The fix is to shift the study plan to the Professional domains. The second mistake is studying services in isolation instead of integration patterns — the exam asks which combination of services meets a requirement, so pattern-level learning matters more than service-level recall. Third, candidates skip hands-on practice and then cannot reason about trade-offs the way the exam requires. Fourth, many candidates skip full timed simulations and misjudge the pace of reading-heavy scenario items — 75 questions in 180 minutes rewards efficient reading. Fifth, some candidates rely on a single third-party course without ever reading the official exam guide, losing the exact scope and weighting. Finally, ignoring the recertification clock is a quiet mistake: the certification expires after three years, so plan the recertification cycle.',
    items: [
      { mistake: 'Preparing at the Associate level', fix: 'Shift to the Professional domains: organization design, migration, continuous improvement.' },
      { mistake: 'Studying services in isolation', fix: 'Learn integration patterns; the exam asks which combination of services fits.' },
      { mistake: 'Skipping hands-on work', fix: 'Real multi-account experience is required to reason about trade-offs.' },
      { mistake: 'Never running full simulations', fix: '75 questions in 180 minutes with reading-heavy scenarios; drill the pace.' },
      { mistake: 'Ignoring the recertification clock', fix: 'The certification expires in three years; plan recertification.' }
    ]
  },
  questionTypes: {
    summary: 'The SAP-C02 is a 75-question multiple-choice and multiple-response exam in 180 minutes. The items are scenario-heavy: a business or technical requirement — a migration, a multi-account structure, a reliability problem, a cost optimisation — followed by the best architecture choice, often asking you to select multiple correct components or to choose the option with the fewest changes or best trade-off. The exam tests architecture decisions across AWS services, with the Professional domains of organizational complexity, new-solution design, continuous improvement and migration dominating. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the decision-based style of the real items.',
    types: [
      { name: 'Architecture scenario items', share: 'Majority', detail: 'Requirement-based choices of the best multi-service architecture.' },
      { name: 'Multiple-response items', share: 'Meaningful share', detail: 'Select all correct components or the fewest-changes option.' },
      { name: 'Migration and improvement items', share: 'Meaningful share', detail: 'Correct tooling and approach for migration and continuous improvement.' }
    ],
    samples: [
      {
        prompt: 'A company must govern resource usage across several business units while keeping a shared network foundation. The most appropriate architecture is:',
        options: ['A. One account per business unit with service control policies applied through AWS Organizations', 'B. A single account with IAM groups per business unit', 'C. Separate AWS accounts with no central governance', 'D. Resource tags only, with no account structure'],
        answer: 'A',
        explanation: 'AWS Organizations with service control policies delivers central governance with per-unit isolation and a shared foundation — the standard multi-account pattern. A single account, ungoverned accounts, or tags-only control each miss the governance and isolation requirements.'
      },
      {
        prompt: 'An application must migrate an on-premises Oracle database to AWS with minimal downtime and minimal application change. The most appropriate service is:',
        options: ['A. AWS Database Migration Service with ongoing replication', 'B. A manual export and import of the schema and data', 'C. Rebuilding the application on a new database engine', 'D. Copying the database files to Amazon S3'],
        answer: 'A',
        explanation: 'AWS Database Migration Service supports heterogeneous and homogeneous migrations with ongoing replication, enabling minimal-downtime migration with minimal application change. Manual export/import, rebuilding on a new engine, or copying files to S3 each create downtime or rework that the requirement excludes.'
      },
      {
        prompt: 'A workload\'s costs have risen because unused EC2 instances run 24/7. The most appropriate first optimisation is:',
        options: ['A. Purchase Savings Plans for all current usage', 'B. Review utilisation, stop or resize idle instances, and right-size the fleet', 'C. Move everything to Lambda', 'D. Upgrade instance types'],
        answer: 'B',
        explanation: 'Cost optimisation starts with utilisation review — stopping idle instances and right-sizing — before committing to Savings Plans or rearchitecting. Buying Savings Plans for idle capacity, moving everything to serverless, or upgrading types each skip the first corrective step.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The SAP-C02 is a 75-question, 180-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $300 fee. Pace at about 2.4 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. There is no scheduled break in most sessions. You receive your score immediately on screen, with the official result and score report following; AWS does not reveal a pass rate, only your 100-1000 scaled score against the 750 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years; you can recertify by passing the current exam again or earning the recertification credit path. The afterwards matters: record your expiration date and plan the recertification cycle early, because the credential loses validity at the three-year mark.',
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
