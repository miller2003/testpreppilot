const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CNCF and other IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (CNCF/Linux Foundation), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the CNCF Certified Kubernetes Administrator pages and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CKA" — the Certified Kubernetes Administrator credential validates Kubernetes administration skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420, with Software Developers (SOC 15-1252, $132,270) as the adjacent senior series. The fit is deliberate: CKA holders work as platform engineers, DevOps engineers and Kubernetes administrators who run containerised infrastructure, and the platform-engineering roles this credential serves sit between the administrator and developer series in the labour market. BLS counted 217,500 network and computer systems administrator jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 15,100 openings a year — the modest headline reflecting infrastructure work shifting toward cloud and platform roles, which is precisely the direction the CKA points. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the CKA\'s value is as a recognised platform-engineering signal that employers running Kubernetes require or prefer. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, software developers (adjacent senior series)', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'CNCF publishes no pass rate — the CKA is a 100% hands-on, performance-based exam with 15-20 tasks in 2 hours',
    summary: 'The Cloud Native Computing Foundation (CNCF), which administers the CKA through the Linux Foundation, does not publish cohort pass rates, and third-party estimates are not official data, so we do not treat them as authoritative. What the CNCF does publish is the format: the CKA is a performance-based, hands-on exam of 15-20 tasks completed in a live Kubernetes environment within a 2-hour time limit, delivered through the Linux Foundation\'s remote proctoring platform. There are no multiple-choice questions — every task requires performing real administrative actions (creating and managing workloads, configuring networking, managing storage, troubleshooting clusters) in a live cluster. The exam content follows the published curriculum: cluster architecture, installation and configuration; workloads and scheduling; services and networking; storage; troubleshooting; and cluster maintenance. The absence of a published pass rate is not an absence of standards: the performance-based format means the exam tests actual skill, and a candidate either can perform the tasks or cannot. The practical reading: preparation is hands-on practice, not study — the exam rewards real Kubernetes experience, and candidates who train in a live environment pass at far higher rates than those who only read documentation.',
    source: { label: 'CNCF - Certified Kubernetes Administrator (CKA)', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
    caveat: 'CNCF publishes the format and curriculum but no pass rate; the CKA is a hands-on performance exam, not a written test.'
  },
  studyPlan: {
    summary: 'The CKA is a hands-on, performance-based exam of 15-20 tasks in a live Kubernetes environment within 2 hours, built on the published curriculum: cluster architecture, installation and configuration; workloads and scheduling; services and networking; storage; troubleshooting; and cluster maintenance. Because the exam is 100 percent hands-on, the plan is a practice plan, not a reading plan. A defensible plan runs 120 to 200 hours of hands-on practice over 8 to 12 weeks, using a practice environment (kind, minikube or a cloud cluster). Weeks 1-2: the fundamentals — cluster architecture, kubectl fluency and the workload resources (Pods, Deployments, StatefulSets), practising every command in a live cluster. Weeks 3-4: scheduling, services and networking — node selectors, taints and tolerations, the service types and the Ingress resources. Weeks 5-6: storage and configuration — volumes, persistent volumes and claims, ConfigMaps and Secrets. Weeks 7-8: troubleshooting and cluster maintenance — the kubectl troubleshooting workflow, backups with etcd, and upgrades. Weeks 9-12: timed practice exams using the killer.sh-style simulators, which mirror the real exam environment. The plan is practice-heavy because the exam rewards real skill; candidates who only read documentation fail the live tasks.',
    totalHours: '120-200 hours of hands-on practice over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Architecture and workloads', tasks: ['Cluster architecture and kubectl fluency', 'Pods, Deployments and StatefulSets', 'Practise every resource in a live cluster'], hours: 35 },
      { label: 'Weeks 3-4', focus: 'Scheduling, services, networking', tasks: ['Node selectors, taints and tolerations', 'Service types and Ingress', 'Network policies'], hours: 35 },
      { label: 'Weeks 5-6', focus: 'Storage and configuration', tasks: ['Volumes, PVs and PVCs', 'ConfigMaps and Secrets', 'Storage classes'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Troubleshooting and maintenance', tasks: ['The kubectl troubleshooting workflow', 'etcd backup and restore', 'Cluster upgrades'], hours: 30 },
      { label: 'Weeks 9-12', focus: 'Timed simulators', tasks: ['killer.sh-style practice exams', 'Two full timed runs', 'Review weak domains'], hours: 45 }
    ],
    variants: [
      { label: 'Working with Kubernetes', detail: 'The daily work accelerates the plan; focus study on the exam-specific tasks and the timed simulators.' },
      { label: 'From traditional sysadmin', detail: 'Add 2-3 weeks of container and Docker fundamentals before the Kubernetes phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CKA rewards real Kubernetes skill, so the dominant strategy is hands-on practice in a live environment: build a practice cluster, perform every curriculum task yourself, and repeat until the kubectl workflow is fluent, because the exam tasks are real administrative actions in a live cluster. Second, master the troubleshooting workflow: the exam includes troubleshooting tasks, and a systematic kubectl-based approach — describe, logs, events — is the skill the exam measures. Third, use the timed simulators (the killer.sh-style environment is the closest match to the real exam) and run them under the real 2-hour constraint, because the performance format and the time pressure are part of the test. Fourth, learn the exam-critical commands and shortcuts by heart, since the live terminal has no autocomplete assistance beyond what you know. Finally, budget for the retake possibility: the CKA includes a free retake in some purchase paths, and candidates who fail typically fail on time management rather than knowledge, so the timed simulators are the highest-value preparation.',
    items: [
      { title: 'Practise in a live cluster', detail: 'The exam tasks are real administrative actions; practice is the preparation.' },
      { title: 'Master the troubleshooting workflow', detail: 'Describe, logs and events — the systematic kubectl approach.' },
      { title: 'Run the timed simulators', detail: 'The killer.sh-style environment mirrors the real exam under 2 hours.' },
      { title: 'Know the commands by heart', detail: 'The live terminal has no assistance beyond what you know.' },
      { title: 'Budget for the retake', detail: 'Failures are usually timing, not knowledge; the simulators fix timing.' }
    ]
  },
  resourceComparison: {
    summary: 'CKA prep costs are dominated by the exam and the practice environment. The CKA exam costs $395 (including one free retake) at the time of writing. The official Kubernetes documentation (free) is the authoritative reference, and the killer.sh simulator (about $45 for the exam-prep bundle) is the standard practice environment that mirrors the real exam; the Linux Foundation\'s CKA course ($300-$500) provides structured instruction. Free resources include the Kubernetes docs, the kubectl cheatsheet and kind/minikube for local practice clusters. A realistic total budget is $400 to $1,000 including the exam and one simulator run. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CKA exam', values: ['$395 (incl. one retake)', 'Remote-proctored hands-on exam', 'The certification itself'] },
      { label: 'killer.sh simulator', values: ['~$45', 'Timed exam-style environment', 'The closest match to the real exam'] },
      { label: 'Linux Foundation CKA course', values: ['$300-$500', 'Online course + labs', 'Structured instruction'] },
      { label: 'Kubernetes documentation', values: ['Free', 'Official reference', 'The authoritative source for every task'] },
      { label: 'Local practice clusters (kind/minikube)', values: ['Free', 'Local Kubernetes environments', 'Everyday hands-on practice'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CKA fee is $395 including one retake; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CKA mistake is studying documentation instead of practising: candidates who read the Kubernetes docs but never perform the tasks in a live cluster fail the performance-based exam, which has no written questions at all. The fix is hands-on practice from the start. The second mistake is mismanaging time: the 2-hour window with 15-20 tasks punishes candidates who spend too long on one task — the timed simulators are the fix. Third, candidates under-practise troubleshooting, a distinct task category that rewards a systematic kubectl workflow. Fourth, some candidates rely on browser bookmarks and lose time; the exam environment limits what is available, so know the commands. Finally, candidates underestimate the exam\'s hands-on nature and arrive without simulator practice; the killer.sh-style run is the closest thing to the real experience.',
    items: [
      { mistake: 'Reading instead of practising', fix: 'The exam is 100% hands-on; practise every task in a live cluster.' },
      { mistake: 'Mismanaging the time', fix: '2 hours for 15-20 tasks; run the timed simulators.' },
      { mistake: 'Under-practising troubleshooting', fix: 'A distinct task category; drill the kubectl workflow.' },
      { mistake: 'Depending on bookmarks', fix: 'Know the commands by heart; the environment is limited.' },
      { mistake: 'Skipping the simulator', fix: 'The killer.sh-style run mirrors the real exam experience.' }
    ]
  },
  questionTypes: {
    summary: 'The CKA has no multiple-choice questions — it is a performance-based exam of 15-20 hands-on tasks performed in a live Kubernetes cluster within 2 hours. Each task requires real administrative actions: create a Deployment with specific settings, expose it correctly, configure storage, apply a network policy, or troubleshoot a broken cluster — and the candidate is graded on the resulting cluster state. Samples below are editor-written illustrations of the kind of tasks the exam presents, not live exam items; they show the hands-on, task-based style of the exam.',
    types: [
      { name: 'Workload tasks', share: 'Large share', detail: 'Create and configure Deployments, Pods, StatefulSets and Jobs.' },
      { name: 'Network and storage tasks', share: 'Large share', detail: 'Services, Ingress, network policies, volumes and PVCs.' },
      { name: 'Troubleshooting tasks', share: 'Meaningful share', detail: 'Diagnose and fix broken clusters and workloads.' }
    ],
    samples: [
      {
        prompt: 'Create a Deployment named "web" with 3 replicas running the image nginx:1.25, then expose it as a ClusterIP service named "web-svc" on port 80. Which kubectl sequence accomplishes this?',
        options: ['A. kubectl create deployment web --image=nginx:1.25 --replicas=3 && kubectl expose deployment web --name=web-svc --port=80', 'B. kubectl run web nginx:1.25', 'C. docker run -d nginx:1.25', 'D. kubectl apply -f pod.yaml only'],
        answer: 'A',
        explanation: 'The task requires a Deployment with 3 replicas and a ClusterIP service — the create-deployment plus expose sequence accomplishes it. The other options create the wrong resources or none at all.'
      },
      {
        prompt: 'A Pod in the default namespace cannot reach the internet. The most appropriate first troubleshooting step is:',
        options: ['A. Inspect the Pod status, events and logs with kubectl describe and kubectl logs', 'B. Delete and recreate the Pod', 'C. Reboot the node', 'D. Ignore it and move on'],
        answer: 'A',
        explanation: 'Systematic troubleshooting starts with kubectl describe (status and events) and kubectl logs to identify the cause. Deletion, reboots or ignoring skip the diagnostic first step the exam rewards.'
      },
      {
        prompt: 'A StatefulSet requires persistent storage that survives Pod rescheduling. The correct approach is:',
        options: ['A. A PersistentVolumeClaim with a StorageClass that provisions persistent volumes', 'B. EmptyDir volumes', 'C. hostPath with no claim', 'D. No storage at all'],
        answer: 'A',
        explanation: 'Persistent storage for a StatefulSet uses PersistentVolumeClaims with a StorageClass that provisions PVs — the standard pattern. EmptyDir is ephemeral, hostPath is node-specific, and no storage fails the persistence requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the exam\'s task style, not live exam items — the CKA is a hands-on performance exam.'
  },
  examDay: {
    summary: 'The CKA is a remote-proctored, hands-on exam: 15-20 tasks performed in a live Kubernetes environment within 2 hours, delivered through the Linux Foundation\'s platform. Confirm the system requirements — a stable internet connection, a working webcam and a quiet space — and complete the environment check before the session; the proctor monitors the whole exam. Time management is the exam\'s hardest skill: scan the task list first, do the tasks you know, and return to the hard ones. Your result is reported after grading, typically within a day, and the certificate follows. If you do not pass, the CKA purchase includes one free retake in most paths, within a 12-month window. On a pass, the CKA is valid for three years and is renewed by passing the current exam or the recertification path. The afterwards matters: record the expiry, and plan the CKAD or CKS as the next step in the CNCF track.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your Linux Foundation account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is proctored and performance-based'],
    timeline: [
      { time: 'Before the session', detail: 'Run the environment check; confirm the proctoring setup.' },
      { time: 'Exam', detail: '15-20 tasks in 2 hours; scan the tasks, do the known ones first.' },
      { time: 'After submit', detail: 'Result is reported after grading, typically within a day.' },
      { time: 'Next', detail: 'Record the three-year validity and plan the CNCF track.' }
    ],
    rules: [
      'The exam is remote-proctored and 100% hands-on',
      '2 hours for 15-20 tasks; time management is part of the test',
      'The certification is valid 3 years, with one free retake in most purchase paths'
    ],
    afterwards: 'On a pass, your CKA is valid for three years; recertify by passing the current exam. On a fail, use the free retake within the window after additional hands-on practice.'
  }
};

export default data;
