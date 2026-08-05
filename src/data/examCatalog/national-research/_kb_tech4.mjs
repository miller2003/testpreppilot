// Knowledge base — Technology (Red Hat). Authoring format; gen_national.mjs
// expands these into schema-conformant batch files. Every fact below was checked
// against Red Hat’s official certification pages and corroborated with at least one
// aggregator. Note: Red Hat restructured its program on 2026-05-11 into a 5-tier
// framework (Technologist -> Administrator/Developer -> Engineer -> Specialist ->
// Architect) across 5 specializations (Enterprise Linux, Ansible, OpenShift,
// Cloud-native Applications, AI). All Red Hat certifications are valid 3 years.

export const kbBodies = [
  {
    id: 'red-hat',
    body: 'Red Hat',
    bodyUrl: 'https://www.redhat.com/en/services/certification',
    about: 'Red Hat certifications are 100% performance-based: instead of multiple-choice questions you configure real Red Hat Enterprise Linux (RHEL), OpenShift and Ansible systems to solve live tasks. Since the 2026-05-11 restructure the program follows a five-tier path — Technologist, Administrator/Developer, Engineer, Specialist and Architect — within five product specializations (Enterprise Linux, Ansible, OpenShift, Cloud-native Applications and AI). Every credential is valid for three years and is renewed by passing your highest-level exam, which automatically renews the lower credentials in that track.',
    registrationSteps: [
      { title: 'Create a Red Hat account', description: 'Register at Red Hat Certification Central and confirm your profile and eligible language.', duration: '10 minutes' },
      { title: 'Purchase and schedule', description: 'Buy the exam (often bundled with one included retake) and book a remote-proctored slot or a seat at a Red Hat testing center.', duration: '15 minutes' },
      { title: 'Verify identity and environment', description: 'For remote exams, check in with a government ID and scan your room/desk. The product documentation ships with the exam but no internet access is allowed.', duration: 'test day' },
      { title: 'Sit the performance-based exam', description: 'Complete hands-on tasks on live systems; your environment is evaluated automatically after the session.', duration: '3–4 hours' },
      { title: 'Receive results and maintain', description: 'Scores post to Certification Central within ~3 business days as Pass/Fail. Recertify within 3 years by passing your top exam.', duration: 'per cycle' }
    ],
    proctoring: 'Delivered as a remote-proctored exam from a private room or in person at a Red Hat authorized testing center. A government-issued ID is required; for remote exams a room/desk scan is performed. Internet and personal materials are not permitted, but product documentation that ships with RHEL/OpenShift is available.',
    retakePolicy: 'The standard Red Hat exam bundle includes one retake at no extra charge if you fail the first attempt. Additional attempts are charged the full exam fee; some exams impose a short waiting period before a retake.',
    recertification: 'All Red Hat certifications are valid for three years from the date earned. You renew by passing the exam for your highest-level credential, which automatically renews that certification and all lower-level certifications in the same specialization track. Once a credential lapses you must start over.',
    scoreReporting: 'Exams are reported as Pass/Fail; Red Hat does not publish per-item scores. Official results appear in Red Hat Certification Central, usually within three U.S. business days. A digital badge and certificate are issued on pass.',
    refundPolicy: 'Red Hat exams are non-refundable once ordered; rescheduling and cancellation follow the exam provider’s window and may forfeit the fee if done late.',
    providersNote: 'Red Hat Learning Subscription and official courses (RH124/RH134, RH294, DO180, DO280, DO374, RH415) are the most aligned preparation. Widely used third-party resources include Sander van Vugt’s video courses, KodeKloud labs and a free Red Hat Developer subscription for home-lab RHEL.',
    comparison: {
      title: 'Red Hat certification tiers (2026 framework)',
      columns: ['Tier', 'Typical exam', 'Duration', 'Validity'],
      rows: [
        { label: 'Technologist', values: ['Entry hands-on', '~2–3 h', '3 years'] },
        { label: 'Administrator', values: ['EX200 RHCSA', '3 h', '3 years'] },
        { label: 'Engineer', values: ['EX294 RHCE', '4 h', '3 years'] },
        { label: 'Specialist', values: ['EX280/EX288/EX374…', '3–4 h', '3 years'] },
        { label: 'Architect (RHCA)', values: ['5 exams in a track', 'n/a', '3 years'] }
      ]
    },
    orgFaqs: [
      { q: 'How long are Red Hat certifications valid?', a: 'Three years from the date earned. You renew by passing the exam for your highest-level credential, which automatically renews the lower credentials in that specialization track. There is no separate renewal fee beyond the exam.' },
      { q: 'Are Red Hat exams multiple choice?', a: 'No. Every Red Hat exam is 100% performance-based: you perform real administration tasks on live systems and are scored on whether the configuration works and persists after reboot. This is why the credentials are trusted by employers.' },
      { q: 'What is the path to RHCA?', a: 'Since the 2026 restructure, RHCA in any track requires exactly five exams: one Administrator/Developer exam, one Engineer exam, and three Specialist (elective) exams within the same specialization (Enterprise Linux, Ansible, OpenShift, Cloud-native Applications or AI).' }
    ],
    sourceUrl: 'https://www.redhat.com/en/services/certification',
    confidence: 'high'
  }
];

export const kbExams = [
  // ───────────────────────── Red Hat ─────────────────────────
  {
    slug: 'red-hat-certified-system-administrator',
    body: 'Red Hat',
    tagline: 'Red Hat’s hands-on Linux administration foundation',
    description: 'The Red Hat Certified System Administrator (RHCSA), earned by passing the EX200 exam, is Red Hat’s foundational, 100% performance-based Linux credential. You sit in front of a live RHEL system with no internet and no multiple-choice questions and must complete real administration tasks — storage, users, services, SELinux, networking — that persist after reboot. RHCSA is the hard prerequisite for the RHCE and the on-ramp to the entire Red Hat certification ladder.',
    quickAnswer: { summary: 'RHCSA (EX200) is Red Hat’s foundational, fully performance-based Linux administration exam: three hours of hands-on tasks on a live RHEL system, a 70% pass mark (210/300), about $400, and valid for three years. It is the required prerequisite for the RHCE.', advantages: ['100% hands-on — no memorized multiple choice', 'Industry-trusted proof of real Linux skill', 'Mandatory prerequisite for RHCE and the RHCA track', 'Tests tasks that survive a reboot'] },
    prerequisites: 'Red Hat recommends RH124/RH134 training or 6–12 months of hands-on Linux experience; there is no mandatory prerequisite to register.',
    eligibility: 'Open to all; no degree required, though comfort at the Linux command line is expected.',
    examMeta: { questions: 'Performance-based tasks (no multiple choice)', time: '3 hours (180 minutes)', pass: '70% (210/300 points)', fee: '$400 USD (varies by region; often ~€500/$600)', format: 'Performance-based, hands-on lab', admin: 'Remote proctored or Red Hat testing center' },
    topics: [
      { name: 'Understand and use essential tools', weight: '20%', note: 'Shell, file management, grep/sed/awk, SSH, permissions, links' },
      { name: 'Operate running systems', weight: '15%', note: 'Boot targets, systemd, processes, tuning, logging' },
      { name: 'Configure local storage', weight: '20%', note: 'Partitions, LVM (PV/VG/LV), swap' },
      { name: 'Create and configure file systems', weight: '15%', note: 'XFS/ext4, /etc/fstab, NFS, autofs, ACLs' },
      { name: 'Deploy, configure and maintain systems', weight: '15%', note: 'dnf/yum, cron/at, chrony, networking with nmcli' },
      { name: 'Manage users, groups and security', weight: '15%', note: 'User/group admin, sudo, SELinux, firewalld' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on, no multiple choice'],
      ['Pass mark', '210 / 300 points (70%)'],
      ['Validity', '3 years'],
      ['Prerequisite for', 'RHCE (EX294)']
    ],
    timeline: [{ stage: 'RH124 + RH134 courses or self-study with a RHEL lab', duration: '6–12 weeks' }, { stage: 'Book and pass EX200', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX200)', fee: '$400' }, { item: 'Optional official training', fee: '$2,000–$4,000' }], total: '$400 (plus optional training)', footnote: 'A free Red Hat Developer subscription provides a no-cost RHEL license for home-lab practice.' },
    difficulty: 'Hard',
    audience: 'System administrators, DevOps and cloud engineers',
    time: '6–12 weeks',
    cost: '$400 (exam only)',
    salaryRange: '$85,000–$120,000',
    faqs: [
      { q: 'Do I need RHCSA before RHCE?', a: 'Yes. The RHCE (EX294) requires you to hold a current RHCSA certification, and RHCSA is also the practical foundation for every Red Hat specialist and architect credential. It is not optional if you plan to go further.' },
      { q: 'How long is the exam and what is the pass mark?', a: 'EX200 runs three hours and is graded on a 300-point scale with a 210 (70%) passing score. Because it is performance-based, there is no published list of multiple-choice questions — you are scored on whether your system meets the task criteria.' },
      { q: 'Is it multiple choice or hands-on?', a: 'Entirely hands-on. You receive a running RHEL system with a set of tasks and must make them work. Internet access and personal notes are not allowed, though the RHEL documentation that ships with the product is available.' },
      { q: 'How should I prepare?', a: 'Practice on a real (or virtual) RHEL system daily: partitions and LVM, users and sudo, firewalld, and especially SELinux (restorecon, semanage fcontext, audit2allow). The RH124/RH134 courses and Sander van Vugt’s RHCSA video course are the most aligned resources.' }
    ],
    summaryPoints: ['Red Hat’s foundational Linux credential, earned by passing the performance-based EX200 exam.', '100% hands-on on a live RHEL system — no multiple-choice questions.', 'Three hours, 70% pass mark (210/300), about $400, valid three years.', 'Mandatory prerequisite for RHCE and the gateway to specialist and RHCA credentials.'],
    relatedSlugs: ['red-hat-certified-engineer', 'red-hat-certified-specialist-in-security-linux', 'red-hat-certified-specialist-in-containers'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-engineer',
    body: 'Red Hat',
    tagline: 'Automate RHEL at scale with Ansible',
    description: 'The Red Hat Certified Engineer (RHCE), earned by passing EX294, is the engineer-tier Red Hat credential and focuses entirely on automating RHEL administration with Red Hat Ansible Automation Platform. You are given multiple live systems and must write Ansible playbooks and roles that configure them to a specified state; your work is re-run against fresh systems to verify it. RHCE builds directly on RHCSA and is one of the five exams required for RHCA.',
    quickAnswer: { summary: 'RHCE (EX294) is Red Hat’s engineer-level, fully performance-based Ansible automation exam: four hours of writing and running playbooks on live systems, a 70% pass mark (210/300), about $400–$450, and valid for three years. It requires an active RHCSA.', advantages: ['Proves real infrastructure-as-code skill', 'Builds directly on RHCSA', 'Highly valued for DevOps and platform roles', 'Counts toward RHCA'] },
    prerequisites: 'An active Red Hat Certified System Administrator (RHCSA / EX200) certification is required.',
    eligibility: 'Must hold a current RHCSA; no degree required.',
    examMeta: { questions: 'Performance-based Ansible tasks', time: '4 hours (240 minutes)', pass: '70% (210/300 points)', fee: '$400–$450 USD', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'Ansible fundamentals', weight: '20%', note: 'Inventory, ansible.cfg, ad-hoc commands, privilege escalation' },
      { name: 'Playbooks', weight: '30%', note: 'Tasks, handlers, variables, conditionals (when), loops, tags' },
      { name: 'Roles and collections', weight: '15%', note: 'Role structure, ansible-galaxy init, Galaxy, dependencies' },
      { name: 'Advanced automation', weight: '20%', note: 'Jinja2 templates, ansible-vault, registered vars, error handling' },
      { name: 'System configuration automation', weight: '15%', note: 'Users, storage, services, firewalld, SELinux via modules' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Requires', 'Active RHCSA (EX200)'],
      ['Pass mark', '210 / 300 points (70%)'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'RH294 course and daily Ansible practice in a multi-VM lab', duration: '3–6 months' }, { stage: 'Book and pass EX294', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX294)', fee: '$400–$450' }, { item: 'Optional official training', fee: '$3,000+' }], total: '$400–$450 (plus optional training)', footnote: 'The standard bundle includes one included retake if you fail the first attempt.' },
    difficulty: 'Hard',
    audience: 'Senior system administrators, DevOps and automation engineers',
    time: '3–6 months',
    cost: '$400–$450',
    salaryRange: '$110,000–$150,000',
    faqs: [
      { q: 'Do I have to be RHCSA certified first?', a: 'Yes. You must hold a current RHCSA to earn the RHCE. The exam assumes RHCSA-level administration skill and simply adds Ansible automation on top.' },
      { q: 'What exactly is tested on EX294?', a: 'Writing and running Ansible automation: installing and configuring a control node, building inventories, authoring idempotent playbooks and roles, using Jinja2 templates and ansible-vault, and automating users, storage, services, firewalld and SELinux. All tasks are performed on live systems.' },
      { q: 'How long is the exam?', a: 'EX294 is a single four-hour section. You are given a list of tasks and must deliver working playbooks; your solutions are re-applied to freshly installed systems to confirm they meet the criteria.' },
      { q: 'How do I prepare effectively?', a: 'Practice writing playbooks from scratch every day against 3–4 managed nodes, build roles with proper directory structure, encrypt secrets with ansible-vault, and practice without documentation first. The RH294 course and Jeff Geerling’s Ansible material are commonly used.' }
    ],
    summaryPoints: ['Engineer-tier Red Hat credential earned by passing the performance-based EX294 exam.', '100% Ansible automation on live systems — no multiple-choice questions.', 'Four hours, 70% pass mark (210/300), about $400–$450, valid three years.', 'Requires active RHCSA and counts as the Engineer exam toward RHCA.'],
    relatedSlugs: ['red-hat-certified-system-administrator', 'red-hat-certified-specialist-in-advanced-automation', 'red-hat-certified-architect'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam-red-hat-enterprise-linux-8',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-architect',
    body: 'Red Hat',
    tagline: 'Red Hat’s pinnacle: prove mastery across a specialization',
    description: 'The Red Hat Certified Architect (RHCA) is the highest credential in the Red Hat program. Rather than a single exam, it is awarded when an RHCE passes five exams within one specialization track — one Administrator/Developer exam, one Engineer exam, and three Specialist (elective) exams — in Enterprise Linux, Ansible, OpenShift, Cloud-native Applications or AI. RHCA signals deep, multi-domain mastery and is renewed by passing your highest-level exam.',
    quickAnswer: { summary: 'RHCA is Red Hat’s top credential, earned by passing five exams in a single specialization (Enterprise Linux, Ansible, OpenShift, Cloud-native Applications or AI): one Administrator/Developer, one Engineer, and three Specialist exams. It is valid three years and renewed by passing your highest exam.', advantages: ['Top-tier industry recognition', 'Demonstrates depth across multiple domains', 'Five clear specialization tracks', 'Renewed by a single top-level exam'] },
    prerequisites: 'Active RHCE (or equivalent engineer-level) certification in the chosen specialization track.',
    eligibility: 'Must hold the engineer-level credential in the track; specialists may be taken in any order.',
    examMeta: { questions: 'Five exams across one track', time: 'Varies (5 × 3–4 h exams)', pass: '70% per exam', fee: '$400–$500 per exam (~$2,000+ total)', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'Administrator/Developer exam', weight: '1 of 5', note: 'e.g. RHCSA (EX200) or a developer exam' },
      { name: 'Engineer exam', weight: '1 of 5', note: 'e.g. RHCE (EX294) or equivalent' },
      { name: 'Specialist electives (×3)', weight: '3 of 5', note: 'e.g. OpenShift, Ansible Platform, Security, HA, Containers' }
    ],
    examEssentials: [
      ['Tracks', 'Enterprise Linux, Ansible, OpenShift, Cloud-native, AI'],
      ['Composition', '1 admin/dev + 1 engineer + 3 specialists'],
      ['Validity', '3 years'],
      ['Renewal', 'Pass your highest-level exam']
    ],
    timeline: [{ stage: 'Earn RHCSA, then RHCE', duration: '6–12 months' }, { stage: 'Pass three specialist exams', duration: '6–12 months' }],
    costBreakdown: { items: [{ item: 'Five exams @ ~$400–$500', fee: '~$2,000–$2,500' }], total: '~$2,000+ (five exams)', footnote: 'Cost excludes optional training; many learners sponsor exams individually as they progress.' },
    difficulty: 'Expert',
    audience: 'Senior architects and principal engineers',
    time: '12–24 months',
    cost: '~$2,000+ (five exams)',
    salaryRange: '$130,000–$175,000',
    faqs: [
      { q: 'What exactly is RHCA?', a: 'It is not one exam but a title: you must pass five exams within a single Red Hat specialization — one Administrator/Developer exam, one Engineer exam, and three Specialist electives. The combination proves broad, multi-domain mastery.' },
      { q: 'Which specialization tracks exist?', a: 'Five: Enterprise Linux, Ansible, OpenShift, Cloud-native Applications, and AI. You pick one track and complete its five-exam combination; for example an OpenShift RHCA pairs RHCSA + RHCE + three OpenShift/specialist exams.' },
      { q: 'How do I keep RHCA active?', a: 'By passing the exam for your highest-level credential in the track. That single pass renews the top certification and automatically extends all lower certifications in that same track for another three years.' },
      { q: 'How long does it take to earn?', a: 'Typically 12–24 months of progressive study: RHCSA and RHCE first (6–12 months), then three specialist exams (another 6–12 months). Specialists can be taken in any order once you are RHCE.' }
    ],
    summaryPoints: ['Red Hat’s highest credential — a title, not a single exam.', 'Requires five exams in one track: 1 admin/dev + 1 engineer + 3 specialists.', 'Valid three years; renewed by passing your highest-level exam.', 'Signals deep, multi-domain Red Hat mastery valued by employers.'],
    relatedSlugs: ['red-hat-certified-engineer', 'red-hat-certified-system-administrator', 'red-hat-certified-specialist-in-openshift-administration', 'red-hat-certified-specialist-in-advanced-automation'],
    sourceUrl: 'https://www.redhat.com/certification/rhca/first_rhca/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-specialist-in-containers',
    body: 'Red Hat',
    tagline: 'Build and run containers with Podman',
    description: 'The Red Hat Certified Specialist in Containers (EX188, also positioned as the Red Hat Certified Developer in Cloud-native Applications) is a performance-based exam on building, running and managing containers with Podman on RHEL. It validates practical cloud-native skills — Containerfiles, image management, multi-container applications and persistent configuration — and is a natural on-ramp to the OpenShift specialist exams.',
    quickAnswer: { summary: 'EX188 validates hands-on Podman container skills — building images, running and managing containers, and deploying multi-container apps — in a 2.5-hour performance-based exam, about $400, valid for three years.', advantages: ['Podman-focused, no vendor lock-in to one engine', 'Fully hands-on', 'Strong foundation for OpenShift exams', 'Recognized Red Hat specialist badge'] },
    prerequisites: 'RHCSA is helpful and DO188 (Containers with Podman) is recommended; there is no strict mandatory prerequisite.',
    eligibility: 'Open to all with command-line comfort; no degree required.',
    examMeta: { questions: 'Performance-based tasks', time: '2.5 hours (150 minutes)', pass: 'Pass/Fail (Red Hat does not publish a numeric cut)', fee: '$400 USD (varies by region)', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'Build container images', weight: '', note: 'Containerfiles, layers, caching' },
      { name: 'Manage container images', weight: '', note: 'Pull/push, registries, tagging' },
      { name: 'Run and manage containers', weight: '', note: 'podman run, ports, users, working dir' },
      { name: 'Configure the container runtime', weight: '', note: 'User, working directory, persistent config' },
      { name: 'Deploy multi-container applications', weight: '', note: 'Compose/pods, networking' },
      { name: 'Troubleshoot and persist', weight: '', note: 'Logs, storage, survive reboot' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on, no multiple choice'],
      ['Result', 'Pass/Fail'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'DO188 course or self-study with Podman', duration: '3–6 weeks' }, { stage: 'Book and pass EX188', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX188)', fee: '$400' }], total: '$400', footnote: 'A free Red Hat Developer subscription provides RHEL for lab practice.' },
    difficulty: 'Moderate',
    audience: 'Developers, DevOps and container platform admins',
    time: '3–6 weeks',
    cost: '$400',
    salaryRange: '$95,000–$135,000',
    faqs: [
      { q: 'What does EX188 cover?', a: 'Practical Podman container skills: authoring Containerfiles, building and managing images, running and configuring containers (ports, users, runtime), deploying multi-container applications, and making configurations persist. It is entirely hands-on on RHEL.' },
      { q: 'How long is the exam and how is it graded?', a: 'EX188 runs 2.5 hours and is reported as Pass/Fail; Red Hat does not publish a numeric cut score. You are scored on whether your containers and configuration actually work.' },
      { q: 'Is this a good step toward OpenShift?', a: 'Yes. Container fundamentals are the foundation for both OpenShift Administration (EX280) and OpenShift Application Development (EX288), and many learners take EX188 first.' },
      { q: 'How should I prepare?', a: 'Install Podman on a RHEL lab (free via the Red Hat Developer subscription) and practice daily: build images from Containerfiles, run multi-container apps, mount persistent storage, and troubleshoot. The DO188 course maps directly to the objectives.' }
    ],
    summaryPoints: ['Red Hat specialist exam on Podman containers (EX188).', '2.5-hour performance-based exam, reported Pass/Fail, about $400.', 'Covers image builds, running/managing containers, multi-container apps.', 'Valid three years; strong on-ramp to the OpenShift specialist exams.'],
    relatedSlugs: ['red-hat-certified-specialist-in-openshift-administration', 'red-hat-certified-specialist-in-openshift-application-development', 'red-hat-certified-system-administrator'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex188-red-hat-certified-specialist-containers-exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-specialist-in-openshift-application-development',
    body: 'Red Hat',
    tagline: 'Deploy cloud-native apps on OpenShift',
    description: 'The Red Hat Certified Specialist in OpenShift Application Development (EX288) is a performance-based exam for developers who deploy and manage applications on Red Hat OpenShift. It covers the OpenShift CLI, deployments, ConfigMaps and Secrets, builds and image streams, scaling and troubleshooting — the day-to-day workflow of a cloud-native application developer on the platform.',
    quickAnswer: { summary: 'EX288 validates deploying and managing applications on Red Hat OpenShift in a three-hour performance-based exam, about $400, valid for three years. It targets developers rather than cluster admins.', advantages: ['Developer-focused OpenShift credential', 'Fully hands-on', 'Builds on container fundamentals', 'In demand for cloud-native roles'] },
    prerequisites: 'Familiarity with containers (EX188/DO188) and application development is recommended; no strict mandatory prerequisite.',
    eligibility: 'Open to developers and platform engineers; no degree required.',
    examMeta: { questions: 'Performance-based tasks', time: '3 hours (180 minutes)', pass: 'Pass/Fail', fee: '$400 USD', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'OpenShift CLI and projects', weight: '', note: 'oc, projects, namespaces' },
      { name: 'Deploy applications', weight: '', note: 'Deployments, replicas, rollouts' },
      { name: 'Configuration', weight: '', note: 'ConfigMaps, Secrets, environment' },
      { name: 'Builds and images', weight: '', note: 'BuildConfig, ImageStreams, Source-to-Image' },
      { name: 'Scaling and self-healing', weight: '', note: 'ReplicaSets, autoscaling' },
      { name: 'Troubleshooting', weight: '', note: 'Logs, events, probes' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on'],
      ['Result', 'Pass/Fail'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'DO288 course or self-study on OpenShift', duration: '4–8 weeks' }, { stage: 'Book and pass EX288', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX288)', fee: '$400' }], total: '$400', footnote: 'A no-cost OpenShift Local / Developer Sandbox can be used for practice.' },
    difficulty: 'Moderate',
    audience: 'Application developers and DevOps engineers',
    time: '4–8 weeks',
    cost: '$400',
    salaryRange: '$100,000–$140,000',
    faqs: [
      { q: 'Who is EX288 for?', a: 'Application developers who build and deploy workloads on OpenShift. It is distinct from EX280 (OpenShift Administration), which targets cluster operators. EX288 focuses on the developer workflow: deployments, ConfigMaps/Secrets, builds and troubleshooting.' },
      { q: 'How is the exam structured?', a: 'A three-hour performance-based exam on a live OpenShift cluster. You complete tasks such as deploying apps, configuring them with ConfigMaps and Secrets, managing builds and image streams, and scaling and troubleshooting — all scored on working results.' },
      { q: 'What should I study?', a: 'The OpenShift CLI (oc), Deployments and rollouts, ConfigMaps/Secrets, BuildConfigs and ImageStreams, scaling, and log/event troubleshooting. The DO288 course maps directly to the exam.' },
      { q: 'Is it a good follow-on to the containers exam?', a: 'Yes. EX188 (Podman containers) gives you the image-building fundamentals that EX288 builds on; many developers take EX188 first, then EX288.' }
    ],
    summaryPoints: ['Red Hat specialist exam for OpenShift application developers (EX288).', 'Three-hour performance-based exam, reported Pass/Fail, about $400.', 'Covers the developer workflow: deployments, ConfigMaps/Secrets, builds, scaling.', 'Valid three years; complements the OpenShift Administration specialist.'],
    relatedSlugs: ['red-hat-certified-specialist-in-openshift-administration', 'red-hat-certified-specialist-in-containers', 'red-hat-certified-architect'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex288-red-hat-certified-specialist-openshift-application-development-exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-specialist-in-openshift-administration',
    body: 'Red Hat',
    tagline: 'Run and secure OpenShift clusters',
    description: 'The Red Hat Certified Specialist in OpenShift Administration (EX280) is a performance-based exam for platform administrators who deploy, configure and operate Red Hat OpenShift Container Platform clusters. It covers cluster and node management, users and RBAC, networking and routes, application deployment, storage and security — the skills needed to keep a Kubernetes-based platform running in production.',
    quickAnswer: { summary: 'EX280 validates deploying and managing OpenShift clusters — users, projects, networking, routes and application workloads — in a three-hour performance-based exam of roughly 22 tasks, about $400, valid for three years.', advantages: ['Cluster administrator credential', 'Fully hands-on OpenShift', 'Complements RHCSA', 'Strong demand for platform roles'] },
    prerequisites: 'RHCSA or solid container knowledge is recommended; the DO280 course is the aligned preparation.',
    eligibility: 'Open to platform and cluster administrators; no degree required.',
    examMeta: { questions: '~22 performance-based tasks', time: '3 hours (180 minutes)', pass: '70% (210/300 points)', fee: '$400 USD', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'Cluster installation and configuration', weight: '', note: 'Install, nodes, operators' },
      { name: 'Users, roles and RBAC', weight: '', note: 'Identity, projects, permissions' },
      { name: 'Networking and routes', weight: '', note: 'Services, routes, ingress' },
      { name: 'Application deployment', weight: '', note: 'Deployments, scaling, rollouts' },
      { name: 'Storage', weight: '', note: 'Persistent volumes, PVCs' },
      { name: 'Security', weight: '', note: 'SCCs, secrets, policies' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on'],
      ['Pass mark', '210 / 300 points (70%)'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'DO280 course and a practice cluster', duration: '6–10 weeks' }, { stage: 'Book and pass EX280', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX280)', fee: '$400' }], total: '$400', footnote: 'OpenShift Local or a lab cluster can be used for hands-on practice.' },
    difficulty: 'Hard',
    audience: 'Cluster and platform administrators',
    time: '6–10 weeks',
    cost: '$400',
    salaryRange: '$110,000–$150,000',
    faqs: [
      { q: 'What is the difference between EX280 and EX288?', a: 'EX280 is for cluster administrators — installing, configuring and operating the OpenShift platform (users, RBAC, networking, storage, security). EX288 is for application developers who deploy workloads on top of it. They are complementary, not competing.' },
      { q: 'How long is the exam and what is the pass mark?', a: 'EX280 runs three hours with roughly 22 performance-based tasks, graded on a 300-point scale with a 210 (70%) passing score. As with all Red Hat exams, it is hands-on with no multiple choice.' },
      { q: 'What should I study?', a: 'Cluster and node operations, user/role management and RBAC, Services and Routes, deploying and scaling applications, persistent storage, and security context constraints. The DO280 course maps directly to the objectives.' },
      { q: 'Is RHCSA required?', a: 'Not strictly mandatory, but RHCSA-level Linux skill is strongly recommended because OpenShift runs on RHEL nodes and many tasks assume core Linux administration knowledge.' }
    ],
    summaryPoints: ['Red Hat specialist exam for OpenShift cluster administrators (EX280).', 'Three-hour performance-based exam (~22 tasks), 70% pass, about $400.', 'Covers cluster ops, RBAC, networking, storage and security.', 'Valid three years; pairs with the OpenShift developer specialist.'],
    relatedSlugs: ['red-hat-certified-specialist-in-openshift-application-development', 'red-hat-certified-architect', 'red-hat-certified-system-administrator'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex280-red-hat-certified-specialist-openshift-administration-exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-specialist-in-advanced-automation',
    body: 'Red Hat',
    tagline: 'Enterprise automation with Ansible Automation Platform',
    description: 'The Red Hat Certified Specialist in Developing Automation with Ansible Automation Platform (EX374) is a performance-based exam on operating Red Hat Ansible Automation Platform at enterprise scale. It covers the automation controller, inventories and credentials, job templates and surveys, workflows, roles and collections, and RBAC — the building blocks platform teams use to deliver self-service automation.',
    quickAnswer: { summary: 'EX374 validates advanced automation with Red Hat Ansible Automation Platform — controller, inventories, credentials, job templates, workflows and RBAC — in a four-hour performance-based exam, about $400, valid for three years.', advantages: ['Platform-level automation skill', 'Builds on RHCE/Ansible', 'Enterprise scale and self-service', 'High value for platform teams'] },
    prerequisites: 'RHCE (EX294) or strong Ansible experience is recommended; no strict mandatory prerequisite.',
    eligibility: 'Open to automation and platform engineers; no degree required.',
    examMeta: { questions: 'Performance-based tasks', time: '4 hours (240 minutes)', pass: 'Pass/Fail (Red Hat does not publish a numeric cut)', fee: '$400 USD', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'Automation controller', weight: '', note: 'Install, configure, organizations' },
      { name: 'Inventories and credentials', weight: '', note: 'Inventory sources, credential types' },
      { name: 'Job templates and surveys', weight: '', note: 'Templates, extra vars, surveys' },
      { name: 'Workflows', weight: '', note: 'Workflows, approvals, convergence' },
      { name: 'Roles and collections', weight: '', note: 'Reusable content, Galaxy' },
      { name: 'RBAC and teams', weight: '', note: 'Roles, permissions, team access' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on'],
      ['Result', 'Pass/Fail'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'DO374 course and platform practice', duration: '2–3 months' }, { stage: 'Book and pass EX374', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX374)', fee: '$400' }], total: '$400', footnote: 'A lab with Ansible Automation Platform (or AWX) is needed for practice.' },
    difficulty: 'Hard',
    audience: 'Automation and platform engineers',
    time: '2–3 months',
    cost: '$400',
    salaryRange: '$115,000–$155,000',
    faqs: [
      { q: 'How is EX374 different from RHCE (EX294)?', a: 'EX294 tests writing Ansible playbooks and roles on the command line; EX374 tests operating Ansible Automation Platform — the controller, job templates, workflows, inventories, credentials and RBAC that deliver automation as a service to a whole organization.' },
      { q: 'How long is the exam?', a: 'EX374 runs four hours and is reported as Pass/Fail (Red Hat does not publish a numeric cut score). You perform platform configuration tasks that are evaluated on working results.' },
      { q: 'What should I study?', a: 'Automation controller setup, inventory and credential management, job templates and surveys, workflows with approvals, reusable roles/collections, and role-based access control. The DO374 course is the aligned preparation.' },
      { q: 'Is RHCE required?', a: 'Not strictly, but RHCE-level Ansible fluency is strongly recommended because EX374 assumes you can already author playbooks and roles and simply extends that to the platform layer.' }
    ],
    summaryPoints: ['Red Hat specialist exam for Ansible Automation Platform (EX374).', 'Four-hour performance-based exam, reported Pass/Fail, about $400.', 'Covers controller, job templates, workflows, inventories, RBAC.', 'Valid three years; builds on RHCE for platform-scale automation.'],
    relatedSlugs: ['red-hat-certified-engineer', 'red-hat-certified-architect', 'red-hat-certified-specialist-in-openshift-application-development'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex374-red-hat-certified-specialist-developing-automation-ansible-automation-platform-exam',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'red-hat-certified-specialist-in-security-linux',
    body: 'Red Hat',
    tagline: 'Harden Red Hat systems and manage compliance',
    description: 'The Red Hat Certified Specialist in Security: Linux (EX415) is a performance-based exam on Linux security and host hardening for Red Hat Enterprise Linux. It covers SELinux, firewalld and nftables, disk and file encryption, SSH and GPG, auditing, account security and vulnerability scanning — the practical skills a security-focused administrator needs to harden and monitor RHEL systems.',
    quickAnswer: { summary: 'EX415 validates Linux security skills on RHEL — SELinux, firewalls, encryption, auditing and host hardening — in a four-hour performance-based exam, about $400, valid for three years.', advantages: ['Security-focused specialist badge', 'Fully hands-on', 'Complements RHCSA', 'Directly relevant to compliance'] },
    prerequisites: 'RHCSA is recommended; a systems-administration or security background is helpful.',
    eligibility: 'Open to security and systems administrators; no degree required.',
    examMeta: { questions: 'Performance-based tasks', time: '4 hours (240 minutes)', pass: 'Pass/Fail', fee: '$400 USD', format: 'Performance-based, hands-on', admin: 'Remote proctored or testing center' },
    topics: [
      { name: 'SELinux', weight: '', note: 'Modes, contexts, booleans, ports' },
      { name: 'Firewalls', weight: '', note: 'firewalld, nftables rules' },
      { name: 'Encryption', weight: '', note: 'LUKS, GPG, SSH keys' },
      { name: 'Auditing', weight: '', note: 'auditd, watching files, reports' },
      { name: 'Account and host security', weight: '', note: 'Password policy, PAM, hardening' },
      { name: 'Scanning and compliance', weight: '', note: 'Vulnerability scans, remediations' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or testing center'],
      ['Format', '100% hands-on'],
      ['Result', 'Pass/Fail'],
      ['Validity', '3 years']
    ],
    timeline: [{ stage: 'RH415 course or self-study on RHEL security', duration: '4–8 weeks' }, { stage: 'Book and pass EX415', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (EX415)', fee: '$400' }], total: '$400', footnote: 'A RHEL lab (free via Red Hat Developer) is used for hands-on practice.' },
    difficulty: 'Hard',
    audience: 'Security and systems administrators',
    time: '4–8 weeks',
    cost: '$400',
    salaryRange: '$100,000–$140,000',
    faqs: [
      { q: 'What does EX415 cover?', a: 'Practical RHEL security: SELinux modes/contexts/booleans, firewalld and nftables, LUKS and GPG encryption, SSH key management, auditd, account and password hardening, and vulnerability scanning/remediation. All tasks are performed on live systems.' },
      { q: 'How long is the exam?', a: 'EX415 runs four hours and is reported as Pass/Fail (Red Hat does not publish a numeric cut). You are scored on whether your hardening and security configuration actually works.' },
      { q: 'Is RHCSA required?', a: 'Not strictly mandatory, but RHCSA-level Linux administration skill is strongly recommended because the exam assumes you can already manage users, services, storage and networking before layering security on top.' },
      { q: 'How should I prepare?', a: 'Build a RHEL lab and practice SELinux troubleshooting (restorecon, semanage, audit2allow), firewalld/nftables rules, LUKS encryption, SSH key setup, auditd rules and password/hardening policies. The RH415 course maps to the objectives.' }
    ],
    summaryPoints: ['Red Hat specialist exam for Linux security on RHEL (EX415).', 'Four-hour performance-based exam, reported Pass/Fail, about $400.', 'Covers SELinux, firewalls, encryption, auditing, host hardening.', 'Valid three years; complements RHCSA for security-focused roles.'],
    relatedSlugs: ['red-hat-certified-system-administrator', 'red-hat-certified-engineer', 'red-hat-certified-specialist-in-advanced-automation'],
    sourceUrl: 'https://www.redhat.com/en/services/training/ex415-red-hat-certified-specialist-security-linux-exam',
    reviewed: '2026-08',
    confidence: 'high'
  }
];
