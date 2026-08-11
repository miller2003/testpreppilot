const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud-native & Kubernetes certifications desk',
    bio: 'This guide is compiled and maintained by our cloud-native certifications desk. KCNA exam structure, domain weights, passing score, fee, retake entitlement and validity come from the CNCF certification page and the Linux Foundation candidate FAQ, which is the authoritative source for Linux Foundation exam policy. We state plainly when a pass rate is not published rather than quoting third-party estimates. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam duration, question count, passing score, fee, retake entitlement, domain weights and three-year validity were checked against the official CNCF KCNA page and the Linux Foundation KCNA FAQ.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$132,270 median for software developers (SOC 15-1252, BLS May 2024) — the closest official occupation to KCNA-related roles',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Kubernetes administrator" or "cloud native engineer", so the honest anchor for this credential is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent earning less than $79,850 and the highest 10 percent more than $211,450. We have chosen that code deliberately: KCNA is positioned by CNCF as a pre-professional, knowledge-based credential for students and early-career IT professionals, and the day-to-day work it feeds into — deploying applications with kubectl, understanding pods and the control plane, reasoning about microservices, GitOps and CI/CD — sits inside the developer ecosystem that SOC 15-1252 describes. BLS projects 15 percent employment growth for the combined software developers, quality assurance analysts and testers occupation from 2024 to 2034, with about 129,200 openings a year, the strongest tailwind of any occupation quoted here. Two caveats belong in the same paragraph. First, KCNA is explicitly the conceptual stepping stone toward the CKA, CKAD and CKS exams; employers hiring for Kubernetes administration typically list CKA rather than KCNA, so the salary distribution above reflects the occupation, not KCNA holders specifically, and we will not invent a certificate premium BLS does not measure. Second, candidates who earn KCNA and stop there are earning a vocabulary credential; the roles that justify the top of the developer range require the hands-on professional exams that follow. Treat the wage figure as career context for a job family that is growing, not as a promise attached to this one test.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Employment, 2024', value: '1,895,500 jobs (combined software dev/QA)', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~129,200 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '15% projected change 2024-34 for software developers, QA analysts and testers — much faster than the 3% all-occupations average',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers, Quality Assurance Analysts, and Testers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  passRate: {
    headline: 'CNCF publishes no pass rate for KCNA — but it does publish the passing score, 75%, along with a $250 fee that includes one free retake',
    summary:
      'The core fact is that the Cloud Native Computing Foundation does not release pass-rate statistics for the Kubernetes and Cloud Native Associate exam, and neither does the Linux Foundation which administers it, so no pass-rate figure exists to quote and we will not estimate one. What is published and verifiable is the cut score: the Linux Foundation candidate FAQ states that a score of 75 percent or above is required to pass the KCNA exam, and the exam is scored automatically with results emailed within 24 hours of completion. The official CNCF page confirms the fee of $250, which includes one free retake, and the Linux Foundation FAQ confirms the exam lasts 90 minutes, is delivered online and proctored, is offered in English or Japanese, and that the certification is valid for three years, renewed by retaking and passing the exam before the expiration date. The exam contains approximately 60 multiple-choice, multiple-response and scenario-based questions, and the CNCF page publishes the domain weights: Kubernetes Fundamentals 44 percent, Container Orchestration 28 percent, Cloud Native Application Delivery 16 percent, and Cloud Native Architecture 12 percent. Two further policy details belong in the same planning picture: the free retake included in the $250 fee is valid for twelve months from registration, and the exam may include unscored questions used for research that are not identified and have no effect on the score, so every item on screen must be treated as if it counts. Because there is no pass rate to guide planning, the practical reading of the published threshold is that a candidate should aim well above 75 percent on practice items, since the paper mixes single-answer, multi-select and scenario questions and the threshold is applied to the whole form rather than per domain.',
    source: {
      label: 'Linux Foundation — KCNA frequently asked questions',
      url: 'https://docs.linuxfoundation.org/tc-docs/certification/frequently-asked-questions-kcna'
    },
    caveat:
      'No pass rate is published by CNCF or the Linux Foundation. The 75% passing score, $250 fee with one free retake, 90-minute duration and three-year validity are the published figures this narrative relies on instead.'
  },

  studyPlan: {
    summary:
      'Plan for six to eight weeks and 45 to 60 hours of study for a candidate with any IT background, or ten to twelve weeks at about five hours a week for a true newcomer, and spend the largest share of the time building a small hands-on Kubernetes cluster rather than reading the landscape map. The exam is approximately 60 questions in 90 minutes, delivered online and proctored, and it is a knowledge-based paper — CNCF is explicit that there are no hands-on, terminal-based questions on KCNA — so the balance is conceptual understanding plus vocabulary precision plus a modest amount of kubectl familiarity. The published domain weights on the official CNCF page are Kubernetes Fundamentals 44 percent, Container Orchestration 28 percent, Cloud Native Application Delivery 16 percent, and Cloud Native Architecture 12 percent, which tells you the single most important planning fact: nearly three-quarters of the paper is Kubernetes and orchestration, so a candidate who scatters effort across the whole cloud-native landscape is studying in the wrong proportions. The plan below runs in four blocks — fundamentals and orchestration first, application delivery and architecture next, then a final timed-rehearsal phase — and it assumes you can run Docker or a lightweight cluster locally. If you cannot, at minimum follow the interactive kubectl exercises, because scenario items about deployments, pods, services and namespaces read far more easily after you have watched a pod actually get scheduled, and a candidate who has seen a Deployment reconcile has internalised the concept that the exam keeps circling back to.',
    totalHours: '45-60 hours over 6-8 weeks (5-10 weeks for newcomers)',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Kubernetes fundamentals (44%)',
        tasks: [
          'Learn the architecture cold: control plane components, nodes, pods, namespaces, Deployments, Services and ConfigMaps',
          'Run a local cluster or cloud playground and deploy a sample app with basic kubectl commands',
          'Understand scheduling, self-healing and the difference between a pod and a Deployment',
          'Practise describing what each resource does in one sentence — the paper is heavily vocabulary-weighted here'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Container orchestration (28%)',
        tasks: [
          'Work containers, runtimes, orchestration fundamentals, networking and storage concepts end to end',
          'Understand service discovery, scaling, and how an orchestrator reconciles desired state',
          'Cover service mesh and the role of projects like Envoy and Fluentd in the ecosystem',
          'Drill scenario items that ask which behaviour a Deployment, Service or Ingress provides'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Application delivery and cloud-native architecture',
        tasks: [
          'Cover CI/CD concepts, GitOps, container images and immutable infrastructure',
          'Map the remaining 28%: microservices, autoscaling, serverless, open standards and community governance',
          'Learn the CNCF landscape projects by category — observability, storage, networking, service mesh',
          'Re-do practice questions on the two smallest domains until they stop costing points'
        ],
        hours: '7-9 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Timed rehearsal',
        tasks: [
          'Take two or three full 90-minute practice exams and log every miss to a domain',
          'Re-drill the highest-weight domains, Kubernetes fundamentals and orchestration, with fresh scenario practice',
          'Final pass over the cloud-native security concepts and the CNCF project categories',
          'One quiet day before the exam; results arrive by email within 24 hours of sitting'
        ],
        hours: '7-9 hrs/week'
      }
    ],
    variants: [
      { label: 'Already using Kubernetes at work', detail: 'Three to four weeks. Your hands-on time covers most of the Kubernetes and orchestration domains; spend the recovered hours on the CNCF landscape, GitOps, service mesh and observability concepts that daily kubectl work does not exercise.' },
      { label: 'Complete newcomer to cloud native', detail: 'Ten to twelve weeks at 4-5 hrs/week. Front-load the fundamentals domain and build the local cluster early; the vocabulary is the real barrier, and scenario items are unreadable without it.' },
      { label: 'Preparing for CKA/CKAD after KCNA', detail: 'Use KCNA as the survey layer and go deeper on hands-on kubectl throughout, since the professional exams replace concept questions with terminal-based performance tasks. Keep the local cluster you build here.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves a KCNA score is "weight the two big domains, build a tiny cluster, and rehearse the 90-minute clock", and the single biggest error is studying the entire cloud-native landscape evenly when three-quarters of the paper is Kubernetes and orchestration. The official CNCF domain weights are the planning document: Kubernetes Fundamentals is 44 percent and Container Orchestration is 28 percent, so a candidate who masters pods, nodes, clusters, the control plane, Deployments, Services, ConfigMaps, scheduling and service discovery has already covered the majority of the exam before touching the wider ecosystem. The second proven approach is hands-on exposure through a local cluster or a managed playground: the exam is explicitly knowledge-based with no terminal questions, but scenario items about deploying an application, exposing it, and scaling it read completely differently after you have done those things once, and the behavioural memory of watching a cluster react is what the scenario items reward. Third, learn the CNCF landscape by category rather than project-by-project, because the exam asks you to reason about what kind of tool fills a role — observability, storage, networking, service mesh, GitOps — more often than it quizzes you on a specific logo. Fourth, drill the vocabulary precisely: terms like pod, Deployment, namespace, immutable infrastructure, control plane, and desired state come up in distractors, and imprecise vocabulary is how candidates lose otherwise-answerable items. Finally, rehearse timing with full 90-minute practice exams, because the format mixes single-answer and multi-select items, the threshold is a 75 percent cut across the whole form, and the free-retake entitlement in the $250 fee is worth protecting by arriving ready the first time.',
    items: [
      {
        title: 'Weight the two big domains first',
        detail: 'Kubernetes Fundamentals (44%) and Container Orchestration (28%) together are 72% of the paper. Master pods, nodes, clusters, the control plane, Deployments, Services, ConfigMaps, scheduling and scaling before spending a single hour on the wider landscape, and the majority of the exam is already handled.'
      },
      {
        title: 'Build a tiny cluster, even though the exam is theory',
        detail: 'KCNA has no terminal-based questions, but scenario items about deploying, exposing and scaling an application are far easier after you have done those actions once. Run a local cluster or a cloud playground and use kubectl on a real workload; the memory of the behaviour is what the scenario items reward.'
      },
      {
        title: 'Learn the CNCF landscape by category',
        detail: 'The exam reasons about what kind of tool fills a role — observability, storage, networking, service mesh, GitOps — more than it quizzes individual projects. Learn the categories and the canonical project in each, and you can reason out items you have never seen before.'
      },
      {
        title: 'Be precise with the vocabulary',
        detail: 'The paper is heavy on near-miss distractors: pod vs Deployment, node vs control plane, namespace vs cluster, GitOps vs plain CI/CD. Practise stating the exact definition and the exact boundary of each term, because imprecision is how answerable items get dropped.'
      },
      {
        title: 'Rehearse the 90-minute clock',
        detail: 'About 60 questions in 90 minutes with multi-select items scored all-or-nothing means pace matters. Run full timed practice exams and build the habit of answering, flagging and returning, so the real paper feels like a rehearsal rather than a first exposure.'
      },
      {
        title: 'Use the free official curriculum',
        detail: 'CNCF has open-sourced the KCNA curriculum that the exam is built from. Working the official curriculum before any commercial course guarantees you are studying the actual syllabus rather than a vendor\u2019s compression of it.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The KCNA buying decision is dominated by free official resources — CNCF open-sourced the curriculum the exam is built from, the Linux Foundation publishes a detailed FAQ, and the $250 exam fee itself includes one free retake. The only genuinely necessary purchase is the exam voucher; everything else is optional acceleration. The table below compares the main options with prices current to this review, and the honest cost ranking is: the official curriculum and a small lab are the value core, practice exams are optional calibration, and video courses are conveniences rather than necessities. Three buying rules follow from how the exam actually works. First, because the exam is knowledge-based and blueprint-driven, anything that teaches you to reason about the four domains in the published proportions is worth more per dollar than a general Kubernetes course that teaches a different exam. Second, the free retake included in the $250 fee is real value, but it is only valuable if a failed first attempt teaches you something — so the money is better spent on practice exams that tell you honestly where you stand than on a course that only reassures you. Third, the one category to treat with suspicion is braindump-style question banks: the exam is knowledge-based and CNCF rotates items, so memorising recycled questions trains you for a paper that no longer exists, and the free official curriculum plus a small lab covers the material more honestly. If you are preparing for CKA or CKAD afterwards, the KCNA curriculum is the survey layer, so the materials you buy for it carry forward into the professional track.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'KCNA exam registration (Linux Foundation/CNCF)', values: ['$250, includes one free retake', 'Online proctored exam', 'The exam itself — the only required purchase'] },
      { label: 'Open-sourced KCNA curriculum', values: ['Free', 'Official curriculum on GitHub', 'The authoritative syllabus the exam is built from'] },
      { label: 'Linux Foundation KCNA candidate FAQ', values: ['Free', 'Documentation pages', 'Policies: duration, cut score, retakes, validity, ID rules'] },
      { label: 'Local cluster or managed playground (minikube, kind, cloud sandboxes)', values: ['Free to ~$30/month', 'Hands-on environment', 'Building the behavioural memory the scenario items reward'] },
      { label: 'Video and practice-exam courses (e.g. Udemy, KodeKloud-style)', values: ['~$15-40 during sales', 'Video lectures plus timed mock exams', 'Candidates who learn by watching; use them to supplement the curriculum, not replace it'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the $250 fee includes one free retake valid for 12 months, and Udemy-style list prices are close to meaningless outside a sale. Country-specific taxes may apply on top of the base fee.'
  },

  commonMistakes: {
    summary:
      'The most common KCNA mistakes are conceptual rather than technical: studying the whole cloud-native landscape evenly when Kubernetes Fundamentals and Container Orchestration together are 72 percent of the paper, and treating the exam as if it had terminal questions when it is explicitly knowledge-based. Candidates also lose points to imprecise vocabulary, to multi-select items scored all-or-nothing, and to the belief that one practice test at a passing score means readiness for a paper that mixes three question styles across a 90-minute clock. A sixth pattern is ignoring the free retake entirely by treating a failed first attempt as the end of the road, when the $250 fee includes one free retake valid for twelve months and the failure itself is the most diagnostic data available. The common thread across these failures is preparing in a way that ignores the published weights and the published exam description: the paper rewards proportionally weighted study of the two big domains, precise vocabulary, and pace under the 90-minute clock, and every mistake above is a way of avoiding one of those demands. A candidate who builds a small cluster, weights study hours to the 72 percent that Kubernetes and orchestration represent, drills the near-miss vocabulary, and rehearses the full timed format has addressed the entire list at once — and has protected the free retake by arriving ready the first time.',
    items: [
      {
        mistake: 'Studying the landscape evenly',
        fix: 'The published domain weights make the allocation obvious: Kubernetes Fundamentals is 44% and Container Orchestration is 28%, so 72% of the exam is Kubernetes and orchestration. Weight your study hours in those proportions and treat observability, GitOps and the wider ecosystem as the 28% they actually are.'
      },
      {
        mistake: 'Preparing as if it were a hands-on exam',
        fix: 'CNCF is explicit that KCNA contains no terminal-based questions — it is a knowledge-based paper. A candidate who spends months memorising command syntax is mis-training; spend the hours on concepts, scenario reasoning and vocabulary precision, with light kubectl exposure for the behaviour it teaches.'
      },
      {
        mistake: 'Imprecise vocabulary in near-miss items',
        fix: 'Distractors rely on terms that sound adjacent: pod vs Deployment, node vs control plane, namespace vs cluster, GitOps vs CI/CD. Drill one-sentence definitions and the exact boundary of each term until you can state what separates each pair without hesitation.'
      },
      {
        mistake: 'Dropping multi-select items to partial knowledge',
        fix: 'Multi-select and multiple-response items are scored as a whole, so knowing most of the answer loses the item. When a multi-select is uncertain, reason from what each option actually does rather than selecting every plausible-sounding choice.'
      },
      {
        mistake: 'Judging readiness from one passing practice score',
        fix: 'A single practice test at 75-80% is not evidence of readiness across the full domain set. Take two or three full timed papers, log misses to domains, and re-drill the two big domains specifically before booking the $250 seat.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The KCNA exam is approximately 60 questions in 90 minutes, delivered online and proctored, and it is explicitly knowledge-based: CNCF states there are no hands-on, terminal-based questions. The paper mixes single-answer multiple choice, multiple-response items, and scenario-based questions, and a passing score of 75 percent is required on the whole form, with results emailed within 24 hours. The published domain weights are Kubernetes Fundamentals 44 percent, Container Orchestration 28 percent, Cloud Native Application Delivery 16 percent, and Cloud Native Architecture 12 percent, and those weights are the single most useful planning fact because they tell you where the bulk of the items live — a candidate strong in Kubernetes Fundamentals and Container Orchestration has already covered 72 percent of the paper before touching the wider ecosystem. Single-answer items dominate and test conceptual understanding and vocabulary, with near-miss distractors built on terms that sound adjacent, such as pod versus Deployment and namespace versus cluster; multiple-response items ask which statements are true and are scored all-or-nothing; and scenario items present a small situation — an application that must be exposed, a workload that must scale, a deployment that must be rolled out — and ask which resource, concept or behaviour applies. The exam may also include unscored questions used for research, which are not identified and have no effect on the score, so every question must be treated as if it counts. Because the exam is scored automatically and no score breakdown by domain is published to candidates, the practical preparation target is comfort with all four domains at well above the 75 percent cut. The samples below are editor-written illustrations of the published blueprint\u2019s question styles, not live exam items.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Conceptual and vocabulary questions across all four domains, with near-miss distractors. These reward precise definitions of pod, Deployment, namespace, control plane, immutable infrastructure and the rest of the core vocabulary.' },
      { name: 'Multiple response', share: 'A consistent minority', detail: 'A list of statements or options with several true, scored all-or-nothing. Common where multiple behaviours are simultaneously true, such as what a Service provides or what the control plane does.' },
      { name: 'Scenario-based items', share: 'Meaningful across the big domains', detail: 'A described situation — deploy and expose an app, scale a workload, roll out an update — with a choice of the correct resource, concept or behaviour. These reward having watched a real cluster react to those actions.' },
      { name: 'Landscape and ecosystem items', share: 'Concentrated in the 28%', detail: 'Questions about the CNCF landscape, project categories, GitOps, CI/CD, observability and service mesh. Learn categories rather than logos and most of these become reasoning items.' }
    ],
    samples: [
      {
        prompt: 'A team needs to run several replicas of a stateless web application, keep them running if one fails, and update them without downtime. Which Kubernetes resource is designed for this?',
        options: [
          'A. A single Pod',
          'B. A Deployment',
          'C. A ConfigMap',
          'D. A Namespace'
        ],
        answer: 'B',
        explanation: 'A Deployment manages a set of identical pod replicas, provides self-healing by replacing failed pods, and supports rolling updates without downtime — exactly the stated requirement. A is wrong because a single pod has no replica management or update strategy. C is wrong because a ConfigMap only stores configuration data. D is wrong because a Namespace is a scoping mechanism for cluster resources, not a workload controller.'
      },
      {
        prompt: 'Which statement about the Kubernetes control plane is correct?',
        options: [
          'A. It runs the workload pods on worker nodes',
          'B. It makes global decisions about the cluster, such as scheduling',
          'C. It stores secrets and ConfigMaps only',
          'D. It is a single process with no replicas'
        ],
        answer: 'B',
        explanation: 'The control plane makes global cluster decisions — scheduling workloads, maintaining desired state, and exposing the API that controllers and users interact with. A is wrong because pods run on worker nodes, not on the control plane. C is wrong because the control plane includes the API server, scheduler and controller manager, not just configuration stores. D is wrong because production control planes run multiple replicas for high availability.'
      },
      {
        prompt: 'An application\u2019s configuration values must change without rebuilding the container image. Which mechanism supports this?',
        options: [
          'A. Baking the values into the image at build time',
          'B. A ConfigMap mounted into the pod',
          'C. A new Namespace per environment',
          'D. Running the pod with a fixed node'
        ],
        answer: 'B',
        explanation: 'A ConfigMap decouples configuration from the container image, allowing values to be supplied at runtime and changed by redeploying with the new ConfigMap — precisely the stated requirement. A is wrong because baking values into the image forces a rebuild for any change. C is wrong because namespaces scope resources; they do not supply configuration. D is wrong because a fixed node affects placement, not configuration.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The KCNA exam is an online, proctored, 90-minute, approximately 60-question multiple-choice test delivered through the Linux Foundation platform via PSI, so exam day is a remote-proctoring exercise: the practical preparation is your room, your machine and your identification. You need a valid, unexpired, government-issued original photo ID whose name exactly matches the verified name on your exam checklist, a private space with a clear work area and no paper, writing implements, electronic devices or printed materials on or around the desk, and a well-lit room with no bright lights or windows behind you. Plan to begin check-in roughly 30 minutes early, because the ID verification and room scan take time and the proctor must approve the space before the exam releases — and a candidate who has not tested the platform in the actual exam room risks losing the appointment to a technical failure. The 90-minute clock starts once the exam begins, the passing cut is 75 percent, and results are scored automatically and emailed within 24 hours of completion. Pace at roughly one and a half minutes per question, flag multi-select and scenario items you are unsure of, and use the closing minutes to revisit flagged questions. The exam is offered in English or Japanese, and the $250 fee includes one free retake valid for twelve months, so a calm, tested environment protects both the appointment and the retake entitlement. The certification, once passed, is valid for three years and is renewed by retaking and passing the current exam before expiry.',
    bring: [
      'A valid, unexpired, government-issued original photo ID — a passport, driver\u2019s license or national ID — with no photocopies or electronic versions',
      'The exact machine you system-tested, with a working webcam, microphone and a stable connection',
      'A quiet, private, well-lit room with a clear desk, no posters or papers on the walls, and no bright light behind you',
      'A phone only if the proctor requires it for check-in, then out of reach',
      'Confirmation of your exam time and your login details for the Linux Foundation platform'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — out of the room or out of reach after check-in',
      'All paper, notes, writing implements, books and printed materials, including under the desk',
      'Second monitors, which must be unplugged and turned away, and any other person in the room',
      'Snacks and drinks at the desk unless the proctor permits them, and any background audio',
      'Anything hanging on the walls behind the work area'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your verified name on the exam checklist matches your government ID exactly, and run the platform system test on the machine and network you will use.' },
      { time: '24 hours before', detail: 'Re-run the system test, clean the desk and the visible walls, and confirm you have a quiet private space for the full 90 minutes.' },
      { time: '30 minutes before', detail: 'Begin check-in: expect photo ID verification, a face photograph, and a full room scan by the proctor before the exam is released.' },
      { time: '0-15 minutes', detail: 'Work the first questions at a steady pace — about one and a half minutes per question across the paper — and mark anything uncertain rather than dwelling.' },
      { time: '15-75 minutes', detail: 'Cover all four domains in proportion to their weight, treating multi-select items as all-or-nothing and returning to flagged questions as time allows.' },
      { time: '75-90 minutes', detail: 'Revisit flagged items, apply domain reasoning to any remaining doubts, and submit. Results are scored automatically and emailed within 24 hours.' }
    ],
    rules: [
      'The exam is online and proctored; there is no offline delivery.',
      '90 minutes for approximately 60 questions; the clock does not stop once it starts.',
      'A score of 75% or above is required to pass the KCNA exam.',
      'One valid, unexpired, government-issued original photo ID is required, with name exactly matching the exam checklist.',
      'The exam is closed-book: no paper, notes, electronic devices, or printed materials in the work area.',
      'The exam is offered in English or Japanese.',
      'The certification is valid for 3 years and renewed by retaking and passing the current exam before expiration; the $250 fee includes one free retake.'
    ],
    afterwards:
      'Your result is scored automatically and emailed within 24 hours of completing the exam, so you will not know the outcome on the spot the way you would at some test centres. On a pass, your digital certificate and Credly badge are issued through the Linux Foundation, and the certification is valid for three years; renewal is by retaking and passing the current KCNA exam before the expiration date, which restarts the three-year clock. Because KCNA is positioned as the conceptual stepping stone, the natural next step is the hands-on professional track — CKA, CKAD or CKS — and the local cluster you built during preparation is the foundation for that work. On a fail, use the free retake entitlement included in the $250 fee, and spend the gap re-drilling the two big domains — Kubernetes Fundamentals and Container Orchestration — by the published weights, because the score you cannot see is almost always lost in the 72 percent of the paper those two domains represent.'
  }
};

export default data;
