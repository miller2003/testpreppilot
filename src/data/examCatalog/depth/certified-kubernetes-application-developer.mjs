const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CNCF and other IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (CNCF/Linux Foundation), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the CNCF Certified Kubernetes Application Developer pages and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CKAD" — the Certified Kubernetes Application Developer credential validates containerised-application development skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500. The fit is deliberate: CKAD holders work as developers and platform engineers who build and deploy containerised applications on Kubernetes, and the credential targets the developer side of the platform-engineering market. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a recognised Kubernetes-development signal that employers running containerised platforms require or prefer. Read the number as the market for the occupation the credential serves.',
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
    headline: 'CNCF publishes no pass rate — the CKAD is a 100% hands-on exam of 15-20 tasks in 2 hours',
    summary: 'The Cloud Native Computing Foundation (CNCF), which administers the CKAD through the Linux Foundation, does not publish cohort pass rates, and third-party estimates are not official data, so we do not treat them as authoritative. What the CNCF does publish is the format: the CKAD is a performance-based, hands-on exam of 15-20 tasks completed in a live Kubernetes environment within a 2-hour time limit, delivered through the Linux Foundation\'s remote proctoring platform. There are no multiple-choice questions — every task requires performing real development-and-deployment actions (designing and building applications, working with the core resources, configuring services and networking, and troubleshooting) in a live cluster. The exam content follows the published curriculum: core concepts, configuration, multi-container pods, observability, services and networking, and the state persistence. The absence of a published pass rate is not an absence of standards: the performance-based format means the exam tests actual skill, and the exam rewards the developer-focused subset of Kubernetes — building and deploying applications rather than cluster administration. The practical reading: preparation is hands-on practice, not study, and the developer focus means practising the resource definitions and the deployment workflows.',
    source: { label: 'CNCF - Certified Kubernetes Application Developer (CKAD)', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/' },
    caveat: 'CNCF publishes the format and curriculum but no pass rate; the CKAD is a hands-on performance exam, not a written test.'
  },
  studyPlan: {
    summary: 'The CKAD is a hands-on, performance-based exam of 15-20 tasks in a live Kubernetes environment within 2 hours, built on the published curriculum: core concepts, configuration, multi-container pods, observability, services and networking, and state persistence. Because the exam is 100 percent hands-on and developer-focused, the plan is a practice plan. A defensible plan runs 100 to 160 hours of hands-on practice over 8 to 10 weeks, using a practice environment (kind, minikube or a cloud cluster). Weeks 1-2: the core concepts — Pods, Deployments, Services and the kubectl fluency, practising every resource in a live cluster. Weeks 3-4: configuration — ConfigMaps, Secrets, the resource limits and the security contexts. Weeks 5-6: multi-container pods, observability and state — the sidecar patterns, the probes and logging, and the persistent volumes. Weeks 7-8: services and networking — the service types, the ingress and the network policies. Weeks 9-10: timed practice exams using the killer.sh-style simulators. The plan is practice-heavy because the exam rewards real skill; candidates who only read documentation fail the live tasks.',
    totalHours: '100-160 hours of hands-on practice over 8-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Core concepts', tasks: ['Pods, Deployments and Services', 'kubectl fluency', 'Practise every resource in a live cluster'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Configuration', tasks: ['ConfigMaps and Secrets', 'Resource limits and requests', 'Security contexts'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Pods, observability, state', tasks: ['Multi-container pod patterns', 'Probes and logging', 'Persistent volumes and claims'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Services and networking', tasks: ['Service types and Ingress', 'Network policies', 'Application exposure'], hours: 25 },
      { label: 'Weeks 9-10', focus: 'Timed simulators', tasks: ['killer.sh-style practice exams', 'Two full timed runs', 'Review weak domains'], hours: 35 }
    ],
    variants: [
      { label: 'Working Kubernetes developer', detail: 'The daily work accelerates the plan; focus study on the exam-specific tasks and the timed simulators.' },
      { label: 'New to Kubernetes', detail: 'Add 2 weeks of container and Docker fundamentals before the Kubernetes phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CKAD rewards real Kubernetes development skill, so the dominant strategy is hands-on practice in a live environment: build and deploy applications, create the resource definitions and troubleshoot them, because the exam tasks are real development actions in a live cluster. Second, master the resource definitions by heart — the YAML for Pods, Deployments, Services, ConfigMaps and Secrets — because the exam has no autocomplete beyond what you know and the time is tight. Third, use the timed simulators (the killer.sh-style environment is the closest match to the real exam) and run them under the real 2-hour constraint, because the performance format and the time pressure are part of the test. Fourth, focus on the developer scope: the CKAD tests building and deploying applications, not cluster administration, so practising the deployment workflows is the highest-yield preparation. Finally, budget for the retake possibility: the CKAD includes a free retake in some purchase paths, and failures are usually timing, which the simulators fix.',
    items: [
      { title: 'Practise in a live cluster', detail: 'Build, deploy and troubleshoot — the exam tasks are real actions.' },
      { title: 'Know the YAML by heart', detail: 'The resource definitions have no autocomplete; the time is tight.' },
      { title: 'Run the timed simulators', detail: 'The killer.sh-style environment mirrors the real exam under 2 hours.' },
      { title: 'Focus on the developer scope', detail: 'Building and deploying applications, not cluster administration.' },
      { title: 'Budget for the retake', detail: 'Failures are usually timing; the simulators fix timing.' }
    ]
  },
  resourceComparison: {
    summary: 'CKAD prep costs are dominated by the exam and the practice environment. The CKAD exam costs $395 (including one free retake) at the time of writing. The official Kubernetes documentation (free) is the authoritative reference, and the killer.sh simulator (about $45 for the exam-prep bundle) is the standard practice environment that mirrors the real exam; the Linux Foundation\'s CKAD course ($300-$500) provides structured instruction. Free resources include the Kubernetes docs and kind/minikube for local practice clusters. A realistic total budget is $400 to $1,000 including the exam and one simulator run. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CKAD exam', values: ['$395 (incl. one retake)', 'Remote-proctored hands-on exam', 'The certification itself'] },
      { label: 'killer.sh simulator', values: ['~$45', 'Timed exam-style environment', 'The closest match to the real exam'] },
      { label: 'Linux Foundation CKAD course', values: ['$300-$500', 'Online course + labs', 'Structured instruction'] },
      { label: 'Kubernetes documentation', values: ['Free', 'Official reference', 'The authoritative source for every task'] },
      { label: 'Local practice clusters (kind/minikube)', values: ['Free', 'Local Kubernetes environments', 'Everyday hands-on practice'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CKAD fee is $395 including one retake; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CKAD mistake is studying documentation instead of practising: candidates who read the Kubernetes docs but never perform the tasks in a live cluster fail the performance-based exam, which has no written questions at all. The fix is hands-on practice from the start. The second mistake is studying the wrong scope: candidates prepare like cluster administrators, but the CKAD tests the developer scope — building and deploying applications — so the deployment workflows are the priority. Third, candidates mismanage time: the 2-hour window with 15-20 tasks punishes slow YAML writing, and the timed simulators are the fix. Fourth, some candidates rely on bookmarks and lose time; the exam environment is limited, so know the definitions. Finally, candidates underestimate the hands-on nature and arrive without simulator practice.',
    items: [
      { mistake: 'Reading instead of practising', fix: 'The exam is 100% hands-on; practise every task in a live cluster.' },
      { mistake: 'Studying the admin scope', fix: 'The CKAD tests the developer scope; practise the deployment workflows.' },
      { mistake: 'Writing YAML too slowly', fix: 'Know the definitions by heart; the time is tight.' },
      { mistake: 'Depending on bookmarks', fix: 'The environment is limited; know the commands and YAML.' },
      { mistake: 'Skipping the simulator', fix: 'The killer.sh-style run mirrors the real exam experience.' }
    ]
  },
  questionTypes: {
    summary: 'The CKAD has no multiple-choice questions — it is a performance-based exam of 15-20 hands-on tasks performed in a live Kubernetes cluster within 2 hours. Each task requires real development-and-deployment actions: create a Deployment with specific settings, configure a ConfigMap or Secret, set up a multi-container pod, expose the application, or troubleshoot a deployment — and the candidate is graded on the resulting cluster state. Samples below are editor-written illustrations of the kind of tasks the exam presents, not live exam items; they show the hands-on, task-based style of the exam.',
    types: [
      { name: 'Resource-definition tasks', share: 'Large share', detail: 'Create and configure Pods, Deployments, Services and ConfigMaps.' },
      { name: 'Application-lifecycle tasks', share: 'Large share', detail: 'Build, expose and update applications.' },
      { name: 'Troubleshooting tasks', share: 'Meaningful share', detail: 'Diagnose and fix broken deployments.' }
    ],
    samples: [
      {
        prompt: 'Create a Deployment named "app" running 2 replicas of the image nginx:1.25 and expose it as a NodePort service named "app-svc" on port 80. Which resource definitions accomplish this?',
        options: ['A. A Deployment YAML plus a Service YAML with the NodePort type', 'B. A single Pod', 'C. A ConfigMap only', 'D. A secret only'],
        answer: 'A',
        explanation: 'The task requires a Deployment with 2 replicas and a NodePort Service — two resource definitions. A single Pod, a ConfigMap or a Secret each miss the required resources.'
      },
      {
        prompt: 'An application Pod fails because it cannot read its configuration. The most appropriate first troubleshooting step is:',
        options: ['A. Inspect the Pod events and logs with kubectl describe and kubectl logs', 'B. Delete the Pod immediately', 'C. Recreate the cluster', 'D. Ignore the failure'],
        answer: 'A',
        explanation: 'Systematic troubleshooting starts with kubectl describe (events) and kubectl logs to identify the cause — often a missing ConfigMap or Secret. Deletion, cluster recreation or ignoring skip the diagnostic first step.'
      },
      {
        prompt: 'A container in a multi-container pod needs to signal readiness before receiving traffic. The appropriate configuration is:',
        options: ['A. A readiness probe on the container', 'B. No probe', 'C. A liveness probe only', 'D. A resource limit'],
        answer: 'A',
        explanation: 'A readiness probe signals when the container is ready to receive traffic — the correct configuration for the requirement. No probe, a liveness-only probe or a resource limit each fail the readiness signal.'
      }
    ],
    note: 'Samples are editor-written illustrations of the exam\'s task style, not live exam items — the CKAD is a hands-on performance exam.'
  },
  examDay: {
    summary: 'The CKAD is a remote-proctored, hands-on exam: 15-20 tasks performed in a live Kubernetes environment within 2 hours, delivered through the Linux Foundation\'s platform. Confirm the system requirements — a stable internet connection, a working webcam and a quiet space — and complete the environment check before the session; the proctor monitors the whole exam. Time management is the exam\'s hardest skill: scan the task list first, do the tasks you know, and return to the hard ones. Your result is reported after grading, typically within a day, and the certificate follows. If you do not pass, the CKAD purchase includes one free retake in most paths, within a 12-month window. On a pass, the CKAD is valid for three years and is renewed by passing the current exam or the recertification path. The afterwards matters: record the expiry, and plan the CKA or CKS as the next step in the CNCF track.',
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
    afterwards: 'On a pass, your CKAD is valid for three years; recertify by passing the current exam. On a fail, use the free retake within the window after additional hands-on practice.'
  }
};

export default data;
