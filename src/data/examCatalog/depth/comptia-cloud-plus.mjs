const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CompTIA and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CompTIA\'s Cloud+ certification page (CV0-004) and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Cloud+" — the CompTIA Cloud+ certification validates vendor-neutral cloud operations skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420. The fit is deliberate: Cloud+ holders work as cloud systems administrators and cloud operations engineers who deploy, manage and secure cloud environments across platforms, and BLS counted 217,500 network and computer systems administrator jobs in 2024, projecting 1 percent growth from 2024 to 2034 with about 15,100 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a vendor-neutral signal of cloud operations competency — distinct from the vendor-specific cloud credentials, which employers often stack with it. Read the number as the relevant market benchmark for the occupation, with cloud-platform roles typically at or above the median.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, computer support specialists (entry track)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'CompTIA publishes no pass rate — it publishes the passing score: 750 of 900, with up to 90 questions in 90 minutes',
    summary: 'CompTIA does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What CompTIA does publish is the format and the passing standard: the Cloud+ exam (CV0-004) has a maximum of 90 questions, a 90-minute time limit, and a passing score of 750 on the 100-900 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years, renewable through CompTIA\'s continuing education program. The exam content follows the published exam objectives: cloud architecture and design; deployment; operations; security; DevOps fundamentals; and troubleshooting. The absence of a published pass rate is not an absence of standards: the 750 line is a meaningful bar, and the exam rewards practical, vendor-neutral cloud operations knowledge — how to deploy, manage and secure cloud workloads regardless of platform. The practical reading: target well above 750 on practice — 80 percent-plus — and use CompTIA\'s official exam objectives and CertMaster practice materials, the closest thing to the real item style.',
    source: { label: 'CompTIA - Cloud+ certification', url: 'https://www.comptia.org/certifications/cloud' },
    caveat: 'CompTIA publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Cloud+ exam (CV0-004) has up to 90 questions in 90 minutes with a 750/900 passing score, built on the published exam objectives: cloud architecture and design; deployment; operations; security; DevOps fundamentals; and troubleshooting. The exam is vendor-neutral — it covers concepts that apply across AWS, Azure and Google Cloud, plus private cloud — and rewards practical operations knowledge. A defensible plan runs 80 to 120 hours over 6 to 8 weeks. Weeks 1-2 cover architecture and design: cloud models, service models, and the design decisions for workloads. Weeks 3-4 cover deployment and operations: provisioning, configuration management, scaling, backup and monitoring. Week 5 covers security: identity, encryption, compliance and vulnerability management. Weeks 6-7 cover DevOps fundamentals and troubleshooting: CI/CD concepts, automation, and systematic problem diagnosis. Week 8 adds question-bank drilling and a full timed practice exam. The plan is operations-heavy because the exam rewards hands-on cloud knowledge; free-tier cloud accounts and virtual labs accelerate every phase.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Architecture and design', tasks: ['Cloud models, service models and workload design', 'Capacity, availability and cost considerations', 'Free-tier hands-on exploration'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Deployment and operations', tasks: ['Provisioning and configuration management', 'Scaling, backup, monitoring and lifecycle', 'Hands-on deployment practice'], hours: 30 },
      { label: 'Week 5', focus: 'Security', tasks: ['Identity and access management', 'Encryption, compliance and vulnerability management', 'Security operations scenarios'], hours: 20 },
      { label: 'Weeks 6-7', focus: 'DevOps and troubleshooting', tasks: ['CI/CD fundamentals and automation', 'Systematic troubleshooting methodology', 'Integration scenarios'], hours: 25 },
      { label: 'Week 8', focus: 'Drill and simulate', tasks: ['Question-bank drilling in volume', 'One full timed practice exam', 'Review weak objectives'], hours: 15 }
    ],
    variants: [
      { label: 'Experienced sysadmin', detail: 'Compress the architecture phase; spend the extra time on DevOps and troubleshooting scenarios.' },
      { label: 'Vendor-certified in one cloud', detail: 'Add 1-2 weeks on the vendor-neutral comparisons; single-platform experience is narrower than the exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The Cloud+ exam rewards vendor-neutral operations knowledge, so the dominant strategy is hands-on practice across at least one cloud platform plus deliberate study of the concepts that transfer across platforms. Second, master the exam objectives as the scope map: CompTIA publishes them for free, and they are the authoritative list of what can appear; audit every study resource against them. Third, drill the security and DevOps blocks deliberately — identity, encryption, CI/CD and automation are where candidates with a pure-admin background routinely lose points. Fourth, use CompTIA\'s official CertMaster practice products, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 750 line leaves no margin. Fifth, take at least one full timed practice exam; 90 questions in 90 minutes is exactly one minute per item, and the pacing matters. Finally, remember the certification is valid for three years with continuing education — plan the renewal cycle from the start.',
    items: [
      { title: 'Get hands-on in a cloud', detail: 'Free-tier accounts support realistic deployment practice; the exam rewards operations experience.' },
      { title: 'Audit against the objectives', detail: 'The free official objectives are the scope map; use them to audit resources.' },
      { title: 'Drill security and DevOps', detail: 'Identity, encryption, CI/CD and automation are where admin-only candidates lose points.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 750/900 line leaves no margin.' },
      { title: 'Plan the three-year renewal', detail: 'The certification uses CompTIA CE; log credits as you earn them.' }
    ]
  },
  resourceComparison: {
    summary: 'Cloud+ prep spans official CompTIA resources and third-party courses. CompTIA\'s own products — the exam objectives (free), CertMaster Learn and CertMaster Practice — are the authoritative source, typically $200-$500 for bundles. Third-party providers sell Cloud+ courses and question banks from roughly $50 to $500; because the exam is vendor-neutral, some candidates instead use the free learning paths of a single cloud provider, which cover the platform-specific material but must be supplemented with the vendor-neutral concepts. Free-tier cloud accounts support hands-on practice at no cost. A realistic total budget is $350 to $900 including the exam fee (about $358). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA exam objectives', values: ['Free', 'Official PDF', 'The authoritative scope; audit every resource against it'] },
      { label: 'CertMaster Learn + Practice', values: ['$200-$500', 'Online learning + practice', 'The official learning path'] },
      { label: 'Third-party courses', values: ['$100-$500', 'Video courses and labs', 'Structured walkthrough of the objectives'] },
      { label: 'Cloud provider free tiers', values: ['$0', 'Hands-on cloud environments', 'Platform practice for the operations items'] },
      { label: 'Question banks', values: ['$50-$150', 'Online practice items', 'Volume drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CV0-004 exam fee is about $358; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Cloud+ mistake is preparing for a single platform: candidates who study one cloud vendor\'s tools assume the exam is that vendor\'s exam, then meet vendor-neutral items they cannot answer. The fix is to study the transferable concepts deliberately. The second mistake is studying without hands-on practice — the exam rewards operations experience, and reading alone does not build it. Third, candidates with a pure-admin background under-prepare security and DevOps; identity, encryption, CI/CD and automation are distinct blocks. Fourth, many candidates misjudge the pace — 90 questions in 90 minutes is exactly a minute per item, so a timed simulation is essential. Fifth, some candidates ignore the free official objectives and rely on a single course, missing the exact scope. Finally, ignoring the three-year CE renewal cycle is a quiet mistake; plan it from the start.',
    items: [
      { mistake: 'Preparing for one platform', fix: 'The exam is vendor-neutral; study the transferable concepts deliberately.' },
      { mistake: 'Studying without hands-on practice', fix: 'Use a free-tier cloud account; the exam rewards operations experience.' },
      { mistake: 'Under-preparing security and DevOps', fix: 'Identity, encryption, CI/CD and automation are distinct blocks; drill them.' },
      { mistake: 'Misjudging the pace', fix: '90 questions in 90 minutes; run a timed simulation.' },
      { mistake: 'Ignoring the renewal cycle', fix: 'The certification is valid three years with CE; plan it early.' }
    ]
  },
  questionTypes: {
    summary: 'The Cloud+ exam (CV0-004) has up to 90 questions in 90 minutes, with multiple-choice and performance-based items. The items are scenario-heavy: a described cloud situation — a deployment, an outage, a security issue, a scaling problem — followed by the correct service choice, configuration, diagnostic step or operational practice. The exam covers architecture, deployment, operations, security, DevOps fundamentals and troubleshooting across the published objectives, in a vendor-neutral frame. Samples below are editor-written illustrations of the published exam objectives, not live exam items; they show the operations style of the real items.',
    types: [
      { name: 'Multiple-choice items', share: 'Majority', detail: 'Concept, configuration and scenario items across the objectives.' },
      { name: 'Performance-based items', share: 'Meaningful share', detail: 'Interactive tasks on deployments, configurations and diagnostics.' }
    ],
    samples: [
      {
        prompt: 'A cloud workload must remain available during a regional outage. The most appropriate design practice is:',
        options: ['A. Deploy across multiple availability zones with a load balancer', 'B. Run everything in a single availability zone', 'C. Back up to a local disk nightly', 'D. Increase instance sizes'],
        answer: 'A',
        explanation: 'Multi-AZ deployment behind a load balancer provides redundancy across failure domains — the standard high-availability practice. A single zone, local backups or larger instances each leave the workload exposed to a zone outage.'
      },
      {
        prompt: 'A team wants to automate the build and deployment pipeline for a cloud application. Which practice group does this fall under?',
        options: ['A. DevOps fundamentals — CI/CD and automation', 'B. Cloud architecture design', 'C. Storage provisioning', 'D. Disaster recovery planning'],
        answer: 'A',
        explanation: 'CI/CD pipelines and deployment automation are the core of DevOps fundamentals — the objective group covering build and deployment automation. The other groups describe design, storage and recovery concerns, not the pipeline itself.'
      },
      {
        prompt: 'An organisation must restrict which users can terminate cloud resources. The most appropriate control is:',
        options: ['A. Identity and access management policies with least privilege', 'B. Encrypting the resources at rest', 'C. Monitoring resource usage', 'D. Tagging resources by department'],
        answer: 'A',
        explanation: 'Restricting destructive actions is an IAM matter — least-privilege policies define who may terminate resources. Encryption, monitoring and tagging are complementary controls but do not authorise or restrict the action.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam objectives, not live exam items.'
  },
  examDay: {
    summary: 'The Cloud+ exam is a 90-question, 90-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at one minute per item, flag uncertain items for review, and budget extra time for the performance-based items. You receive your score on screen immediately, with the official result and score report following; CompTIA reports your scaled score against the 750 line. If you fail, CompTIA allows retakes after a waiting period. On a pass, the certification is valid for three years, renewable through continuing education units (CEUs) or by retaking. The afterwards matters: log your CEUs as you earn them, because CompTIA audits renewals, and record the expiration date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '90 questions in 90 minutes; pace 1 minute per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 750/900 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and start logging CEUs.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '90 minutes for up to 90 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your Cloud+ is valid for three years; earn CEUs (or retake) to renew. On a fail, retake after additional objectives-focused study.'
  }
};

export default data;
