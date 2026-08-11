const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers cloud and IT certifications. Exam structure, fees and rules come from the vendor certification pages (Google Cloud, AWS, CompTIA, Cisco, ISC2), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Google Cloud\'s Associate Cloud Engineer exam page and exam guide, and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Google Cloud Associate Cloud Engineer" — the certification validates hands-on cloud administration skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420, with Software Developers (SOC 15-1252, $132,270 median) as the adjacent senior track. The fit is deliberate: ACE holders work as cloud administrators, cloud operations staff and junior cloud engineers who deploy, configure and manage Google Cloud environments. BLS counted 217,500 network and computer systems administrator jobs in 2024, projecting 1 percent growth from 2024 to 2034 with about 15,100 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the ACE is an associate-level credential, so the realistic benchmark for a new holder sits around or below the median, climbing with experience. Read the number as the market for the occupation, and note that the credential is the hands-on rung of the Google Cloud ladder between the Digital Leader and the professional certifications.',
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
    headline: 'Google Cloud publishes no pass rate — it publishes the format: 50-60 questions in 2 hours, with the score reported against a passing line',
    summary: 'Google Cloud does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Google does publish is the format: the Associate Cloud Engineer exam has 50-60 multiple-choice and multiple-select questions with a 2-hour time limit, delivered at a testing centre or through online proctoring, and the result is reported as a score against Google\'s passing line (Google does not publish the passing percentage; third-party providers commonly estimate around 70 percent, which we do not present as official). The exam fee is about $125. The exam content follows the published exam guide, with domains covering setting up a cloud solution environment, planning and configuring compute resources, deploying and implementing workloads, ensuring reliable operation, configuring access and security, and managing cloud costs. The absence of a published pass rate is not an absence of standards: the ACE is the hands-on associate certification, and the exam rewards practical familiarity with the Google Cloud console, gcloud commands and core services. The practical reading: use Google\'s official exam guide and sample questions plus hands-on practice in a real project, because the exam rewards experience.',
    source: { label: 'Google Cloud - Associate Cloud Engineer certification', url: 'https://cloud.google.com/learn/certification/cloud-engineer' },
    caveat: 'Google publishes the format and fee but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Associate Cloud Engineer exam is a 50-60 question, 2-hour exam with a roughly $125 fee, built on the published exam guide domains: setting up a cloud solution environment; planning and configuring compute resources; deploying and implementing workloads; ensuring reliable operation; configuring access and security; and managing costs. The exam is hands-on — it rewards working knowledge of the console, gcloud, and the core services (Compute Engine, GKE, Cloud Storage, Cloud SQL, IAM, VPC) rather than theory. A defensible plan runs 80 to 120 hours over 6 to 8 weeks. Weeks 1-2 build the foundation: projects, billing, IAM and the console. Weeks 3-4 cover compute: Compute Engine, GKE and serverless options, with hands-on deployments in a free-trial project. Weeks 5-6 cover storage, databases, networking and operations: Cloud Storage, Cloud SQL, VPC and Cloud Monitoring. Weeks 7-8 add scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards experience; a free-trial Google Cloud project is the highest-value study resource.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Environment and IAM', tasks: ['Projects, billing and the console', 'IAM roles and service accounts', 'gcloud command basics'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Compute', tasks: ['Compute Engine instances and images', 'GKE and serverless options', 'Hands-on deployments in a free-trial project'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Storage, network, operations', tasks: ['Cloud Storage and Cloud SQL', 'VPC and networking', 'Cloud Monitoring and operational practices'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Drill and simulate', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 25 }
    ],
    variants: [
      { label: 'Working with Google Cloud', detail: 'Compress the foundation; spend the extra time on scenario drilling and simulations.' },
      { label: 'From another cloud', detail: 'Add 1-2 weeks on the Google-specific console and service names; the concepts transfer.' }
    ]
  },
  prepStrategies: {
    summary: 'The ACE exam rewards hands-on experience, so the dominant strategy is practice in a real Google Cloud project: create a free-trial project and deploy compute instances, Kubernetes clusters, storage buckets and databases yourself, because the exam items test what an engineer does. Second, learn the exam guide domains as the scope map and use Google\'s official sample questions, the closest thing to the real item style. Third, master the "best practice" choices: the exam frequently asks for the recommended configuration or the most appropriate service for a described requirement, so practise that decision style. Fourth, hold yourself to 80 percent-plus on practice exams, because Google\'s unpublished passing line leaves no margin for a borderline score. Fifth, take at least two full timed simulations; 50-60 questions in 2 hours is about 2 minutes per item, and the scenario items are reading-heavy. Finally, remember the certification is valid for two years and is the natural step after the Digital Leader — plan the path, and keep the free-trial project alive until exam day for last-minute hands-on review.',
    items: [
      { title: 'Practise in a real project', detail: 'Deploy compute, GKE, storage and databases yourself; the exam tests practice.' },
      { title: 'Use the official sample questions', detail: 'The closest thing to the real item style; audit resources against the guide.' },
      { title: 'Drill the best-practice choices', detail: '"Most appropriate service" items dominate the exam.' },
      { title: 'Hold to 80%+ on practice', detail: 'Google does not publish the pass line; leave no margin.' },
      { title: 'Run two full simulations', detail: '2 hours for 50-60 questions; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'ACE prep spans official Google resources and third-party courses. Google\'s own materials — the exam guide (free), sample questions, and the Google Cloud Skills Boost courses and labs — are the authoritative source; a Skills Boost subscription runs roughly $29-$99/month and its hands-on labs are the highest-value paid resource. Third-party providers sell ACE courses and practice exams at $50-$300; the market is mature because the ACE is a popular certification. The free-trial Google Cloud project is the essential hands-on resource and costs nothing. A realistic total budget is $200 to $700 including the $125 exam fee and one to three months of Skills Boost. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'Google Cloud Skills Boost', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'Google free-trial project', values: ['$0', 'Real cloud environment', 'Deploying the services the exam tests'] },
      { label: 'Third-party courses', values: ['$50-$300', 'Video courses and quizzes', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the ACE exam fee is about $125; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common ACE mistake is studying theory without touching the console: candidates who read about Compute Engine and IAM but never deploy anything find the hands-on items hard to answer confidently. The fix is practice in a free-trial project from the start. The second mistake is memorising service names without learning what they are for; the exam asks which service fits a requirement, so purpose-level knowledge matters. Third, candidates under-prepare the operations domain — monitoring, troubleshooting and operational best practices — which the exam weights alongside configuration. Fourth, many candidates skip full timed simulations and misjudge the 2-minute-per-item pace on reading-heavy scenarios. Finally, ignoring the two-year validity clock is a quiet mistake; Google Cloud certifications must be renewed, so plan the renewal cycle and the next rung of the ladder (a professional certification) early.',
    items: [
      { mistake: 'Studying without the console', fix: 'Deploy services in a free-trial project; the exam tests practice.' },
      { mistake: 'Memorising names, not purposes', fix: 'Learn which service fits which requirement.' },
      { mistake: 'Under-preparing operations', fix: 'Monitoring and troubleshooting are weighted alongside configuration.' },
      { mistake: 'Skipping timed simulations', fix: '2 hours for 50-60 questions; run two full simulations.' },
      { mistake: 'Ignoring the validity clock', fix: 'The certification is valid two years; plan renewal.' }
    ]
  },
  questionTypes: {
    summary: 'The ACE exam is 50-60 multiple-choice and multiple-select questions in 2 hours. The items are scenario-heavy: described operational requirements — deploy a workload, configure access, choose a service, respond to an operational issue — followed by the correct configuration, service or best practice. The exam tests the exam guide domains across the Google Cloud console and core services. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the hands-on, decision-based style of the real items.',
    types: [
      { name: 'Configuration scenario items', share: 'Majority', detail: 'Deploy and configure workloads with the correct service or setting.' },
      { name: 'Access and security items', share: 'Meaningful share', detail: 'IAM, service accounts and secure configuration.' },
      { name: 'Operations items', share: 'Meaningful share', detail: 'Monitoring, troubleshooting and operational best practices.' }
    ],
    samples: [
      {
        prompt: 'A company must run stateless containerised workloads on Google Cloud and scale them automatically. The most appropriate service is:',
        options: ['A. Google Kubernetes Engine with a HorizontalPodAutoscaler', 'B. A single Compute Engine instance', 'C. Cloud Storage', 'D. Cloud SQL'],
        answer: 'A',
        explanation: 'GKE with a HorizontalPodAutoscaler runs containerised workloads and scales them automatically — the standard answer. A single VM, object storage or a managed database each serve different needs.'
      },
      {
        prompt: 'An engineer must give an application running on Compute Engine permission to read objects in a Cloud Storage bucket. The recommended practice is to:',
        options: ['A. Use a service account with least-privilege roles', 'B. Store the access keys in the instance metadata', 'C. Share the project owner credentials', 'D. Make the bucket public'],
        answer: 'A',
        explanation: 'Service accounts with least-privilege roles are the recommended pattern for granting an instance access to Google Cloud resources. Storing keys in metadata, sharing owner credentials or making the bucket public each violate security best practice.'
      },
      {
        prompt: 'A database workload requires strong consistency and is already running in Cloud SQL. The most appropriate configuration for high availability is:',
        options: ['A. Enabling the Cloud SQL high-availability configuration with a standby instance', 'B. Exporting the database to Cloud Storage nightly', 'C. Running a single instance with no standby', 'D. Switching to Cloud Storage'],
        answer: 'A',
        explanation: 'Cloud SQL\'s high-availability configuration provisions a standby instance for automatic failover — the recommended HA pattern. Nightly exports, single instances or switching to object storage each miss the high-availability requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The ACE exam is a 50-60 question, 2-hour computer-based exam at a testing centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen at the end, with the official result and score report following; Google reports the result against its passing line without publishing a cohort pass rate. If you fail, Google allows retakes after a waiting period. On a pass, the certification is valid for two years; Google Cloud certifications are renewed by passing the current exam version or the renewal path. The afterwards matters: record the validity date, and plan the next rung of the ladder — typically a professional certification such as the Professional Cloud Architect.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '50-60 questions in 2 hours; pace ~2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Record the two-year validity date and plan the next rung.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 50-60 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your ACE is valid for two years; renew by passing the current version or the renewal path. On a fail, retake after additional hands-on study. Plan the next step, typically the Professional Cloud Architect.'
  }
};

export default data;
