const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud-native & DevOps certifications desk',
    bio: 'The Docker Certified Associate exam structure and program status are drawn from Docker\u2019s official certification materials and announcements, which are updated on Docker\u2019s published cycle; Docker does not publish cohort pass rates, and we state that plainly. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where Docker or BLS does not publish a figure, we say so rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against Docker\u2019s official DCA exam materials and program announcements (2024-2025), and the BLS OOH Software Developers page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Software developers earned a May 2024 BLS median of $132,270, and container skills remain a core requirement in DevOps and platform-engineering roles.',
    summary: 'The salary conclusion for the Docker Certified Associate is tied to the DevOps and platform-engineering labor market rather than to the certificate itself: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $132,270 for SOC 15-1252 Software Developers, and containerization is a baseline expectation across DevOps, site-reliability, and platform-engineering roles, which sit at or above that median in most markets. The BLS classifies by job duty rather than certificate, so the DCA designation does not appear as its own wage line, and the practical value of the credential has always been signal value: Docker skills — images, containers, Compose, Swarm, networking, storage, and security — are among the most-transferable skills in modern software delivery, and a recognized credential differentiated candidates in a crowded field. The honest caveat is that the DCA\u2019s market position changed in late 2024 when Docker announced it was retiring the certification program, with the exam retired during 2025 — candidates should verify the current program status on Docker\u2019s certification page before investing in prep, because the credential\u2019s currency matters to how employers read it. The underlying skills remain in demand regardless of the certificate: Docker and container skills appear across DevOps job descriptions, and the shift to Kubernetes and cloud-native platforms means candidates who know containers deeply are still hired for the same roles. The BLS projects about 17 percent growth for software developers from 2024 to 2034 with roughly 140,000 openings per year, and DevOps and platform roles are a major share of that demand. For a candidate asking whether the DCA pays, the direct answer is that the skills it certified pay very well, but the specific credential has been retired by its owner, so the certification\u2019s shelf value is limited and the practical move is to carry the skills into a current certification such as Kubernetes or a cloud-native credential instead.',
    rows: [
      { label: 'Median annual wage', value: '$132,270', note: 'BLS OOH, Software Developers (SOC 15-1252), May 2024' },
      { label: 'Lowest 10%', value: '$76,510', note: 'Entry-level developer roles' },
      { label: 'Highest 10%', value: '$208,620', note: 'Senior and specialized developers' },
      { label: 'Program status', value: 'Retired (2025)', note: 'Docker announced the DCA program retirement in 2024; confirm current status on Docker\u2019s page' }
    ],
    growth: 'BLS projects about 17 percent growth for software developers (2024-2034), with roughly 140,000 openings per year from growth plus replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'Docker publishes no pass rate for the DCA; the retired exam was 50 questions over 90 minutes with a fixed percentage passing standard.',
    summary: 'The direct answer on pass rates is that Docker never published cohort pass-rate statistics for the DCA, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What was published is the exam structure: the DCA was a computer-based exam of 50 questions with a 90-minute time limit, delivered at Pearson VUE centers or online-proctored, and scored against a fixed passing percentage that Docker stated in its exam materials — candidates should treat the current official page as authoritative on any exact threshold, because Docker has retired the program and its archived materials vary. The more important status fact is the retirement: Docker announced in late 2024 that it was retiring the DCA certification program, with the exam retired during 2025, and Docker shifted its validation focus toward its skills and learning products — so a candidate researching the DCA in 2026 should confirm the current program status on Docker\u2019s certification page before spending any money on prep, because the credential is no longer being issued on the same basis as before. The content the exam covered remains the durable value: container fundamentals (images, containers, registries), Docker Compose, orchestration concepts, networking, storage and volumes, security, and the containerized-application lifecycle. The practical read on difficulty: the DCA was an applied, scenario-heavy exam that rewarded hands-on Docker experience, and candidates with real container workflow practice passed reliably while candidates who studied theory without running containers found the applied items hard. For candidates today, the honest recommendation is to treat the DCA as a legacy credential: the skills it tested are still marketable, but the current certification path for container and cloud-native skills runs through Kubernetes (CKA, CKAD, KCNA) and cloud-native vendor credentials rather than the retired Docker exam.',
    source: { label: 'Docker official certification materials and program announcements', url: 'https://www.docker.com/certification/' },
    caveat: 'Docker publishes no pass-rate statistics; the 50-question, 90-minute format is the published structure. Docker announced the DCA program retirement in 2024 — confirm current program status on Docker\u2019s official page.'
  },
  studyPlan: {
    summary: 'The first planning decision for the DCA in 2026 is confirmation: because Docker announced the program\u2019s retirement in 2024, a candidate should verify on Docker\u2019s certification page whether the exam is still being offered, whether only legacy credentials are maintained, or whether Docker\u2019s skills products have fully replaced it — and only then commit study time to the DCA outline. If pursuing the exam (or its archived curriculum for skills value), an efficient plan is 4-6 weeks of about 60-90 total hours, because the 50-question, 90-minute exam is a breadth-and-depth test of applied Docker knowledge: container fundamentals, images and registries, Compose, networking, storage, security, and the application lifecycle. The official Docker curriculum — the Docker documentation, the Docker Certified Associate study guide, and the official training materials — is the scope map, and the single most important element of the plan is hands-on time: candidates should run containers, build images, use Compose, and practice the networking and storage patterns on a real or test environment, because the exam rewarded applied experience. Candidates with daily Docker workflow experience should budget the lower end; candidates new to containers should budget the upper end and should expect the applied items to dominate. The final two weeks should be question-bank work and timed mocks at the 50-question, 90-minute format, because the pacing and the scenario-heavy style are best rehearsed under the clock. Candidates should also decide deliberately whether the DCA is the right credential at all: if the goal is a current container credential with active market recognition, the CKA, CKAD, or KCNA paths are the standard alternatives, and the study hours may be better spent there.',
    totalHours: '60-90 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Container fundamentals', tasks: ['Study images, containers, registries, and the container lifecycle', 'Run hands-on: pull, run, stop, remove, and inspect containers', 'Cover Dockerfile basics: FROM, RUN, COPY, ENTRYPOINT, CMD'], hours: 15 },
      { label: 'Week 2', focus: 'Compose and orchestration', tasks: ['Build multi-service apps with Docker Compose', 'Study services, networks, and volumes in Compose', 'Cover orchestration concepts: Swarm basics and workload scheduling'], hours: 15 },
      { label: 'Week 3', focus: 'Networking, storage, security', tasks: ['Study Docker networking models: bridge, host, overlay', 'Work storage: volumes, bind mounts, and persistence', 'Cover security: image scanning, secrets, and least privilege'], hours: 15 },
      { label: 'Week 4-5', focus: 'Question-bank drilling', tasks: ['Drill 300-500 items from a current DCA bank', 'Log every miss and re-run the associated hands-on pattern', 'Take one timed 50-question mock'], hours: 20 },
      { label: 'Week 6', focus: 'Mocks and readiness', tasks: ['Take two more timed 50-question mocks', 'Re-drill the miss log and re-run weak hands-on patterns', 'Confirm the exam booking and IDs, or pivot to a current certification'], hours: 15 }
    ],
    variants: [
      { label: 'Experienced container users', detail: 'Fastest path; weight time toward the less-common topics (networking models, security) and full timed mocks.' },
      { label: 'Candidates wanting a current credential', detail: 'Consider CKA/CKAD/KCNA or a cloud-native vendor credential instead; the DCA is a retired program.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the DCA — if pursuing it before or alongside the program retirement — is hands-on work plus official-material study, because the 50-question, 90-minute exam rewarded applied Docker knowledge and the scenario items assumed real container experience. First, confirm the program status on Docker\u2019s certification page before buying anything; if the exam is still available, use the official Docker documentation and the Docker Certified Associate study guide as the scope map, because Docker\u2019s own materials define the domains more precisely than third-party summaries. Second, build a hands-on practice environment — Docker Desktop or a Linux host — and run through every pattern the exam covers: building images, managing containers, Compose stacks, networking modes, volumes, and security practices; the exam rewarded having done the work, and the lab time converts the outline into applied knowledge. Third, drill a current question bank, 300-500 items with explanations, and build a miss log tied to the exam domains; the scenario-heavy style is best rehearsed against a large item set. Fourth, run at least three timed mocks at the 50-question, 90-minute format, because the pace is part of the test and candidates who only drill untimed mis-pace on the real paper. Finally, make the strategic call explicitly: because Docker retired the program in 2024, candidates should weigh whether the study hours are better invested in a current container credential — CKA, CKAD, or KCNA — which has active employer recognition and a live exam. A further high-yield tactic for either path is to master the networking and storage models conceptually, because those are the domains where candidates who know the basics still miss items, and the scenario questions reward understanding why a pattern works, not just what the command is.',
    items: [
      { title: 'Confirm the program status first', detail: 'Docker announced the DCA retirement in 2024; verify on Docker\u2019s page before investing in prep.' },
      { title: 'Build a hands-on practice environment', detail: 'Run through images, containers, Compose, networking, volumes, and security on a real environment.' },
      { title: 'Use the official materials as the scope map', detail: 'The Docker documentation and DCA study guide define the domains more precisely than third-party content.' },
      { title: 'Drill a current bank with a miss log', detail: '300-500 items with explanations, tied to the exam domains.' },
      { title: 'Decide the credential strategically', detail: 'Consider CKA/CKAD/KCNA for a current container credential with active recognition.' }
    ]
  },
  resourceComparison: {
    summary: 'DCA prep resources were anchored by the official Docker set — the Docker documentation, the Docker Certified Associate study guide, and Docker\u2019s official training courses — because Docker\u2019s own materials defined the exam domains most precisely, and that remains true for the archived curriculum even as the program retires. The Docker documentation is free and is the foundation of every plan; the official study guide and practice material ran roughly $50-150 depending on the bundle. Third-party question banks ran $30-100 and added volume and explanations, which helped candidates who needed more reps than the official material provided. Official Docker training courses and exam-prep workshops ran $200-500 and added instructor-led structure, which helped candidates wanting pacing or a classroom format. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The critical new purchase consideration is the retirement: before buying any DCA-specific material, candidates should confirm whether the exam is still offered and whether Docker\u2019s skills products have replaced the certification — and if the goal is a current credential, the money is better spent on CKA, CKAD, or KCNA prep material, whose ecosystems are active. The exam fee itself was $195 per attempt for the DCA, with the exam delivered at Pearson VUE centers or online-proctored. A cheap readiness check is the free Docker documentation and the free Docker quick-start labs before paying for anything, because candidates with daily Docker workflow experience often score higher than expected and need mainly a bank and timed mocks.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Docker documentation (official)', values: ['Free', 'Online docs + labs', 'The authoritative scope map'], note: '' },
      { label: 'DCA study guide + practice', values: ['$50-150', 'Official bundle', 'Candidates committed to the DCA path'], note: '' },
      { label: 'Third-party question bank', values: ['$30-100', 'Online, current items', 'Extra reps beyond the official set'], note: '' },
      { label: 'Docker official training course', values: ['$200-500', 'Instructor-led or online', 'Candidates wanting structure and pacing'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Confirm the current DCA program status and exam fee on Docker\u2019s official page before purchase.'
  },
  commonMistakes: {
    summary: 'The most common mistake around the DCA in 2026 is not a study error but a strategy error: investing time and money in a certification program that Docker announced it was retiring in 2024, without first confirming the current status on Docker\u2019s page — candidates should check whether the exam is still offered and whether Docker\u2019s skills products have replaced it before buying any prep material. For candidates who do sit the exam, the classic study mistake is learning commands without the underlying models: the exam\u2019s scenario items reward understanding why a networking or storage pattern works, and candidates who memorise command syntax without the concepts miss those items. A third recurring error is skipping hands-on practice entirely — studying the documentation and banks without running containers, when the applied items were the exam\u2019s core. Candidates also routinely underweight the security and networking domains because they feel secondary, when the exam tested them deliberately. Another pattern is mis-pacing the 50-question, 90-minute format, running out of time on the scenario-heavy second half because they never ran a timed mock. Finally, some candidates treat a retired credential as equivalent to a current one on a resume, which employers who track certification currency may read differently — the honest framing matters.',
    items: [
      { mistake: 'Investing in a retiring program without checking status', fix: 'Confirm the DCA\u2019s current status on Docker\u2019s page first; consider CKA/CKAD/KCNA for a current credential.' },
      { mistake: 'Memorising commands without the models', fix: 'Study why networking, storage, and security patterns work; the scenario items test understanding.' },
      { mistake: 'Skipping hands-on practice', fix: 'Run containers, build images, and use Compose on a real environment; the applied items reward experience.' },
      { mistake: 'Underweighting networking and security', fix: 'These domains were tested deliberately; allocate proportional study time.' },
      { mistake: 'Misrepresenting credential currency', fix: 'Framing matters on a resume: a retired credential reads differently from a current one; be honest and pair it with current skills.' }
    ]
  },
  questionTypes: {
    summary: 'The DCA was a computer-based exam of 50 multiple-choice questions with a 90-minute time limit, delivered at Pearson VUE centers or online-proctored, and the item style was applied and scenario-heavy: the exam presented a container-workflow situation and asked which command, configuration, or architecture applies, with a minority of direct knowledge-recall items on Docker components. The content followed the DCA domains — container fundamentals, image and registry management, Compose and orchestration, networking, storage, and security. The sample items below illustrate the published style across three areas — a container-lifecycle item, a networking item, and a security item. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'Majority of items', detail: 'A container-workflow situation followed by the best command or configuration.' },
      { name: 'Knowledge-recall items', share: 'Substantial minority', detail: 'Direct questions on Docker components, commands, and architecture.' },
      { name: 'Conceptual why-items', share: 'Throughout', detail: 'Items testing understanding of networking, storage, and security models.' }
    ],
    samples: [
      {
        prompt: 'A team needs to run a container that writes files which must survive the container\u2019s removal and recreation. Which approach provides the persistence?',
        options: [
          'A. Run the container with a volume or bind mount',
          'B. Copy the files into the image with a COPY instruction',
          'C. Keep the container running indefinitely',
          'D. Increase the container\u2019s memory limit'
        ],
        answer: 'A',
        explanation: 'Volumes and bind mounts persist data outside the container\u2019s writable layer, so the data survives removal and recreation. COPY bakes files into the image, keeping the container running does not persist on removal, and memory limits are unrelated.'
      },
      {
        prompt: 'Which Docker networking mode gives a container its own network namespace and direct access to the host\u2019s network stack?',
        options: [
          'A. Host networking',
          'B. Bridge networking (default)',
          'C. None networking',
          'D. Overlay networking'
        ],
        answer: 'A',
        explanation: 'Host networking places the container in the host\u2019s network namespace, giving it direct access to the host stack. Bridge is the default isolated network, none removes networking, and overlay connects nodes in a swarm.'
      },
      {
        prompt: 'Which practice reduces the attack surface of a containerized application at runtime?',
        options: [
          'A. Running the container as root with full privileges',
          'B. Running with a non-root user and least-privilege capabilities',
          'C. Disabling image scanning',
          'D. Storing secrets in the image layers'
        ],
        answer: 'B',
        explanation: 'Running as a non-root user with least-privilege capabilities is a core container-security practice. Root with full privileges, disabled scanning, and secrets in image layers all increase risk.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The DCA exam-day experience — for candidates who confirm the exam is still being offered — is a computer-based, 50-question multiple-choice appointment with a 90-minute time limit, delivered at Pearson VUE centers or online-proctored, with a fixed passing percentage per Docker\u2019s exam materials and a pass/fail result reported after the appointment. Arrive with the required government-issued photo ID (or complete the online-proctoring environment check), and follow the exam confirmation email\u2019s instructions, because center and remote delivery have different check-in rules. The appointment includes a brief tutorial before the clock starts; there are no scheduled breaks, so the timed-mock discipline matters. Expect scenario-heavy items that assume hands-on Docker experience; flag items for review and manage the pace, because the 50-question, 90-minute format rewards time discipline. A preliminary pass/fail appears at the end of the appointment, with the official result following in the Docker account. The most important exam-day consideration in 2026 is upstream: confirm the DCA\u2019s current status on Docker\u2019s certification page before scheduling, because Docker announced the program\u2019s retirement in 2024 and the availability of new exam appointments has been phased out — candidates who cannot confirm an active path should pivot to a current container credential such as CKA, CKAD, or KCNA, where the exam-day process is live and the credential has current market recognition.',
    bring: ['Government-issued photo ID (center) or validated ID for online proctoring', 'Exam confirmation email with the appointment details', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per rules or out of reach for remote)', 'Study materials and notes', 'Scratch paper from home (center supplies its own; online proctoring forbids it)', 'Any item on the proctoring rules list'],
    timeline: [
      { time: '15-30 min before', detail: 'Check in at the Pearson VUE center or complete the online-proctoring environment check' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '0-90 min', detail: 'Work the 50 questions; flag items and manage pacing on the scenario-heavy items' },
      { time: 'After submission', detail: 'Pass/fail result reported; official result follows in the Docker account' }
    ],
    rules: ['Valid photo ID required (center or proctored)', 'No scheduled breaks; the 90-minute clock runs continuously', 'No personal electronics in the testing environment', 'Confirm the DCA\u2019s current program status before scheduling'],
    afterwards: 'A passing result certifies the DCA, which was valid for two years under the Docker program. Given the 2024 retirement announcement, verify current credential validity on Docker\u2019s page, and consider a current container certification (CKA, CKAD, KCNA) for active market recognition.'
  }
};

export default data;
