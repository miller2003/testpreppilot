const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers cloud and IT certifications. Exam structure, fees and rules come from the vendor certification pages (Google Cloud, AWS, CompTIA, Cisco, ISC2), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Google Cloud\'s Professional Cloud Architect exam page and exam guide, and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Google Cloud Professional Cloud Architect" — the certification validates enterprise cloud architecture skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500, with Network and Computer Systems Administrators (SOC 15-1244, $96,900 median) as the adjacent operations track. The fit is deliberate: PCA holders work as cloud architects, enterprise architects and senior cloud engineers who design multi-service Google Cloud solutions for business requirements, and the senior, architect-level roles this credential targets sit in the upper half of the developer-series distribution. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a seniority and architecture signal. Read the number as the market for the roles the credential serves.',
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
    headline: 'Google Cloud publishes no pass rate — it publishes the format: 50-60 questions in 2 hours, including case studies, with the score reported against a passing line',
    summary: 'Google Cloud does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Google does publish is the format: the Professional Cloud Architect exam has 50-60 multiple-choice and multiple-select questions with a 2-hour time limit, delivered at a testing centre or through online proctoring, and the result is reported as a score against Google\'s passing line (Google does not publish the passing percentage). The exam fee is about $200. A defining feature of the PCA exam is the case studies: the exam includes real-world case study scenarios that candidates must analyse and answer architecture questions about, reflecting the enterprise-architect job role. The exam content follows the published exam guide, covering designing and planning a cloud solution architecture, managing and provisioning infrastructure, designing for security and compliance, analysing and optimising technical and business processes, and managing implementations. The absence of a published pass rate is not an absence of standards: the PCA is one of Google Cloud\'s flagship professional certifications, and the exam rewards architecture judgement plus hands-on familiarity. The practical reading: use Google\'s official exam guide and sample questions, work the case studies, and practise architecture decisions.',
    source: { label: 'Google Cloud - Professional Cloud Architect certification', url: 'https://cloud.google.com/learn/certification/cloud-architect' },
    caveat: 'Google publishes the format and fee but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Professional Cloud Architect exam is a 50-60 question, 2-hour exam with a roughly $200 fee, built on the published exam guide: designing and planning a cloud solution architecture; managing and provisioning infrastructure; designing for security and compliance; analysing and optimising technical and business processes; and managing implementations. The exam is the flagship professional certification of the Google Cloud ladder, and its defining feature is the case studies — real-world architecture scenarios that candidates analyse before answering design questions. A defensible plan runs 120 to 180 hours over 10 to 14 weeks, assuming the Associate-level foundation. Weeks 1-3 build the architecture framework: compute, storage, databases, networking and security as design components. Weeks 4-6 cover the design decisions: reliability, scalability, cost and migration patterns, with hands-on labs. Weeks 7-9 cover the case studies: work the official case studies in depth and practise the design-reasoning the exam rewards. Weeks 10-14 add scenario drilling and two full timed practice exams. The plan is architecture-heavy because the exam rewards design judgement; hands-on experience in a real project accelerates every phase.',
    totalHours: '120-180 hours over 10-14 weeks (assuming the Associate-level foundation)',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Architecture framework', tasks: ['Compute, storage, database and networking design', 'Security and identity architecture', 'Hands-on labs in a real project'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Design decisions', tasks: ['Reliability, scalability and cost patterns', 'Migration and modernisation approaches', 'Architecture trade-off practice'], hours: 40 },
      { label: 'Weeks 7-9', focus: 'Case studies', tasks: ['Work the official case studies in depth', 'Practise design reasoning per case', 'Security and compliance scenarios'], hours: 40 },
      { label: 'Weeks 10-14', focus: 'Drill and simulate', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 40 }
    ],
    variants: [
      { label: 'ACE already earned', detail: 'Compress the framework phase; the architecture and case-study material is the new content.' },
      { label: 'Architect from another cloud', detail: 'Add 2 weeks on Google-specific services and the case studies; the design logic transfers.' }
    ]
  },
  prepStrategies: {
    summary: 'The PCA exam rewards architecture judgement, so the dominant strategy is practising design decisions: read the requirement, identify the trade-offs, and choose the architecture that best balances reliability, cost, security and business fit — because the exam items are built around that reasoning. Second, work the official case studies in depth: they are the defining feature of the exam, and analysing each case\'s requirements and constraints before studying the sample answers is the highest-yield preparation. Third, master the "why" of every design choice, because the exam frequently asks why one option is better than another, not just which is correct. Fourth, use Google\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the passing line is unpublished. Fifth, take at least two full timed simulations; 50-60 questions in 2 hours with case-study items is reading-heavy. Finally, remember the certification is valid for two years and renews through the current exam or the renewal path — plan the cycle.',
    items: [
      { title: 'Practise architecture trade-offs', detail: 'Requirement → trade-offs → best balance; the exam is built on that reasoning.' },
      { title: 'Work the case studies deeply', detail: 'They are the exam\'s defining feature; analyse each before reading answers.' },
      { title: 'Master the "why"', detail: 'The exam asks why one option is better, not just which is correct.' },
      { title: 'Hold to 80%+ on practice', detail: 'Google does not publish the pass line; leave no margin.' },
      { title: 'Plan the two-year renewal', detail: 'Renew through the current exam or the renewal path.' }
    ]
  },
  resourceComparison: {
    summary: 'PCA prep spans official Google resources and third-party courses. Google\'s own materials — the exam guide (free), sample questions, and the Google Cloud Skills Boost courses and labs — are the authoritative source; a Skills Boost subscription runs roughly $29-$99/month. Third-party providers sell PCA courses and practice exams at $100-$500; the market is mature because the PCA is one of the most popular cloud architecture certifications. The free-trial Google Cloud project supports the hands-on practice the exam rewards. A realistic total budget is $300 to $900 including the $200 exam fee and one to three months of Skills Boost. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'Google Cloud Skills Boost', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'Official case studies', values: ['Free', 'Published case study scenarios', 'The defining exam feature; work them deeply'] },
      { label: 'Third-party courses', values: ['$100-$500', 'Video courses and quizzes', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$40-$150', 'Online simulated exams', 'Architecture decision drilling'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the PCA exam fee is about $200; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PCA mistake is studying service features instead of architecture judgement: candidates who memorise what services do but never practise the trade-off reasoning fail the design items, which are the heart of the exam. The fix is decision drilling from the start. The second mistake is skipping the case studies — the exam\'s defining feature — and meeting them cold on exam day; work each case deeply before sitting. Third, candidates under-prepare the "why": the exam asks why one design is better than another, so studying only the correct answer without the reasoning leaves the follow-up reasoning items unanswered. Fourth, many candidates skip full timed simulations and misjudge the reading-heavy pace of case-study items in the 2-hour window. Finally, ignoring the two-year validity clock is a quiet mistake; plan the renewal path and the next certification while the architecture knowledge is fresh.',
    items: [
      { mistake: 'Studying features, not judgement', fix: 'Drill architecture trade-offs; the design items are the heart of the exam.' },
      { mistake: 'Skipping the case studies', fix: 'Work each official case deeply; they are the defining exam feature.' },
      { mistake: 'Ignoring the "why"', fix: 'Learn the reasoning behind every design choice.' },
      { mistake: 'Skipping timed simulations', fix: '2 hours with case-study items is reading-heavy; run two simulations.' },
      { mistake: 'Ignoring the validity clock', fix: 'The certification is valid two years; plan renewal.' }
    ]
  },
  questionTypes: {
    summary: 'The PCA exam is 50-60 multiple-choice and multiple-select questions in 2 hours, including case-study items built around published real-world scenarios. The items test architecture judgement: design a solution for a requirement, choose between approaches, analyse a trade-off, or recommend the best practice for a described enterprise situation. The exam covers designing and planning architecture, provisioning infrastructure, security and compliance, and business-process optimisation across the exam guide. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the design-decision style of the real items.',
    types: [
      { name: 'Architecture design items', share: 'Majority', detail: 'Design and choice of approach for described requirements.' },
      { name: 'Case-study items', share: 'Meaningful share', detail: 'Analysis and design questions tied to published scenarios.' },
      { name: 'Security and compliance items', share: 'Meaningful share', detail: 'Secure design and regulatory requirements.' }
    ],
    samples: [
      {
        prompt: 'A global application must serve users in multiple regions with low latency while keeping a single source of data consistency. The most appropriate architecture is:',
        options: ['A. A regional deployment with a global load balancer and a multi-region database strategy aligned to consistency needs', 'B. A single region for everything', 'C. Static content only, with no compute', 'D. Separate unconnected deployments per region'],
        answer: 'A',
        explanation: 'Global reach with consistency requires regional deployment behind a global load balancer plus a database strategy that matches the consistency requirements — multi-region replicas where availability matters and a single authoritative store where consistency does. Single-region, static-only or disconnected deployments each fail the latency or consistency requirement.'
      },
      {
        prompt: 'A workload has variable traffic and the team wants to pay only for what it uses. The most appropriate compute approach is:',
        options: ['A. Serverless compute with autoscaling', 'B. A large always-on Compute Engine instance', 'C. A dedicated bare-metal server', 'D. Pre-purchased reserved capacity'],
        answer: 'A',
        explanation: 'Serverless compute with autoscaling matches capacity to variable demand, so you pay only for what you use — the standard cost-efficient answer. Always-on instances, bare metal and reserved capacity all commit spend regardless of usage.'
      },
      {
        prompt: 'An organisation must ensure that only specific employees can access a sensitive dataset in Cloud Storage. The recommended control is:',
        options: ['A. IAM policies with least privilege plus bucket-level access controls', 'B. Making the bucket public', 'C. Storing the data unencrypted', 'D. Sharing credentials among employees'],
        answer: 'A',
        explanation: 'Least-privilege IAM with the appropriate bucket controls is the recommended pattern for restricting dataset access. Public buckets, unencrypted storage and shared credentials each violate security and access-control best practice.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The PCA exam is a 50-60 question, 2-hour computer-based exam at a testing centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 2 minutes per item, flag uncertain items for review, and budget extra time for the case-study items, which take longer to read and analyse. You receive your score on screen at the end, with the official result and score report following; Google reports the result against its passing line without publishing a cohort pass rate. If you fail, Google allows retakes after a waiting period. On a pass, the certification is valid for two years, renewed by passing the current exam version or the renewal path. The afterwards matters: record the validity date, and use the credential as the anchor of the Google Cloud professional track while planning the renewal cycle.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '50-60 questions in 2 hours, including case studies; pace ~2 minutes per item.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Record the two-year validity date and plan the renewal path.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 50-60 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your PCA is valid for two years; renew by passing the current version or the renewal path. On a fail, retake after additional architecture and case-study work.'
  }
};

export default data;
