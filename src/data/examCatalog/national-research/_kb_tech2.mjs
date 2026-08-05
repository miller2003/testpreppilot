// Knowledge base — Technology (Google Cloud). Authoring format; gen_national.mjs
// expands these into schema-conformant batch files. Every fact below was checked
// against Google's official exam terms/guides and at least one aggregator;
// Google does not publish numeric cut scores for most exams (reported Pass/Fail).

export const kbBodies = [
  {
    id: 'google-cloud',
    body: 'Google Cloud',
    bodyUrl: 'https://cloud.google.com/certification',
    about: 'Google Cloud certifications validate the practical skills used to build, deploy and operate solutions on Google Cloud Platform. They range from the Foundational Cloud Digital Leader through Associate role-based exams to Professional-level architect, engineering and security credentials, and are backed by Google Cloud Skills Boost learning paths and official exam guides.',
    registrationSteps: [
      { title: 'Create a certification account', description: 'Sign in to Google Cloud Skills Boost (Webassessor) and confirm your profile and eligible language.', duration: '10 minutes' },
      { title: 'Register and pay', description: 'Select the exam, pay the fee, and choose a delivery method. A no-show forfeits the fee.', duration: '15 minutes' },
      { title: 'Schedule the exam', description: 'Book an online-proctored slot or a seat at a testing center. Identity verification is required at check-in.', duration: '15 minutes' },
      { title: 'Sit and pass', description: 'Complete the multiple-choice / multiple-select items. Most exams report Pass/Fail immediately; the Associate Cloud Engineer shows a scaled 700/1000.', duration: 'test day' },
      { title: 'Maintain', description: 'Foundational and Associate certs are valid 3 years; Professional certs 2 years. Recertify by retaking during the 60-day window before expiry — certified individuals get a 50% renewal discount.', duration: 'per cycle' }
    ],
    proctoring: 'Delivered online with remote proctoring from a private room, or in person at a testing center. A government-issued ID and a room/desk scan (online) are required.',
    retakePolicy: 'After a fail you may retake after 14 days; a second fail requires a 60-day wait; a third fail requires a 12-month wait. The full exam fee is charged on every attempt.',
    recertification: 'Cloud Digital Leader and Associate Cloud Engineer are valid 3 years; all Professional Cloud certifications are valid 2 years. Recertification is done by retaking and passing the exam during the eligibility window (starting 60 days before expiry). A 50% discount code is issued to certified individuals.',
    scoreReporting: 'Most exams report Pass/Fail with no published numeric cut score. The Associate Cloud Engineer reports a scaled score out of 1000 (pass mark 700). A digital badge and certificate are issued on pass.',
    refundPolicy: 'Fees are paid at booking; a no-show forfeits the fee. Rescheduling and cancellation follow the exam provider’s window and may forfeit the fee if done late.',
    providersNote: 'Google Cloud Skills Boost offers free exam-mapped learning paths; Coursera hosts Google professional certificates. Third parties such as Whizlabs, A Cloud Guru and official Google Cloud training provide labs and practice exams.',
    comparison: {
      title: 'Google Cloud certification tiers',
      columns: ['Tier', 'Typical fee', 'Validity', 'Audience'],
      rows: [
        { label: 'Foundational', values: ['$99', '3 years', 'Business / non-engineering'] },
        { label: 'Associate', values: ['$125', '3 years', 'Hands-on operators'] },
        { label: 'Professional', values: ['$200', '2 years', 'Experienced specialists'] }
      ]
    },
    orgFaqs: [
      { q: 'Do Google Cloud certifications expire?', a: 'Yes. Cloud Digital Leader and Associate Cloud Engineer are valid for three years; Professional certifications are valid for two years. You recertify by retaking the exam, and certified individuals receive a 50% discount on the renewal attempt.' },
      { q: 'What score do I need to pass?', a: 'Most Google Cloud exams are reported as Pass/Fail with no published numeric cut score; the Associate Cloud Engineer uses a scaled 700/1000. A common, unofficial study target is around 70%.' }
    ],
    sourceUrl: 'https://cloud.google.com/certification',
    confidence: 'high'
  }
];

export const kbExams = [
  // ───────────────────────── Google Cloud ─────────────────────────
  {
    slug: 'google-cloud-digital-leader',
    body: 'Google Cloud',
    tagline: 'The non-technical entry point to Google Cloud fluency',
    description: 'Google Cloud Digital Leader is the Foundational certification for people who need to understand cloud concepts and Google Cloud’s product portfolio without writing code. It is aimed at business, sales, marketing and junior technical roles, and is the recommended on-ramp before the Associate Cloud Engineer or any Professional exam. The exam rewards broad, balanced coverage of six content areas rather than deep engineering skill.',
    quickAnswer: { summary: 'Cloud Digital Leader is a Foundational, pass/fail Google Cloud exam (50–60 questions, 90 minutes, $99) that proves you understand cloud transformation, Google Cloud products, security and operations. No hands-on experience is required, and the credential is valid for three years.', advantages: ['No technical prerequisites', 'Strong first step toward ACE or Professional certs', 'Tests product knowledge, not coding', 'Recognised across business and technical teams'] },
    prerequisites: 'None — open to anyone aged 18 or older.',
    eligibility: 'Open to all; no cloud experience required, though familiarity with basic IT terms helps.',
    examMeta: { questions: '50–60', time: '90 minutes', pass: 'Pass/Fail (no published numeric cut score)', fee: '$99', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Digital transformation with Google Cloud', weight: '~17%', note: 'Cloud models, business drivers, Shared Fate' },
      { name: 'Innovating with data and Google Cloud', weight: '~17%', note: 'BigQuery, Spanner, Pub/Sub, Dataflow' },
      { name: 'Innovating with AI and machine learning', weight: '~17%', note: 'Vertex AI, pre-trained APIs, BigQuery ML' },
      { name: 'Modernizing infrastructure and applications', weight: '~17%', note: 'Compute Engine, GKE, Cloud Run, Anthos' },
      { name: 'Trust and security with Google Cloud', weight: '~17%', note: 'IAM, encryption, Cloud Armor, compliance' },
      { name: 'Scaling with Google Cloud operations', weight: '~17%', note: 'Pricing, SRE, support tiers, sustainability' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center, worldwide'],
      ['Result', 'Pass/Fail only — no per-domain score'],
      ['Validity', '3 years'],
      ['Level', 'Foundational']
    ],
    timeline: [{ stage: 'Study with Skills Boost path', duration: '2–4 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$99' }, { item: 'Optional practice exams', fee: '$0–$50' }], total: '$99–$150', footnote: 'Free official sample questions are available on the certification page.' },
    difficulty: 'Easy',
    audience: 'Business, sales, marketing and early-career technical readers',
    time: '2–4 weeks',
    cost: '$99 (plus optional prep)',
    salaryRange: '$78,000–$120,000',
    faqs: [
      { q: 'Do I need coding experience for Cloud Digital Leader?', a: 'No. The exam tests conceptual knowledge of cloud and Google Cloud products, not programming. It is explicitly designed for non-engineers and is the usual first step before hands-on certifications.' },
      { q: 'How hard is the exam and what is the pass mark?', a: 'It is the easiest Google Cloud exam. Google reports only Pass/Fail with no published numeric cut score; many candidates target roughly 70%. Because the six domains are weighted roughly evenly, broad coverage beats deep study of one area.' },
      { q: 'Which exam should I take next?', a: 'Most candidates move to the Associate Cloud Engineer if they want hands-on cloud work, or to a Professional cert in their speciality (architect, data, security) once they have practical experience.' },
      { q: 'How do I keep the certification active?', a: 'It is valid for three years. You recertify by retaking and passing the exam; as a certified individual you receive a 50% discount on the renewal attempt.' }
    ],
    summaryPoints: ['Foundational, non-coding Google Cloud exam covering six evenly weighted domains.', '50–60 questions, 90 minutes, $99, reported Pass/Fail.', 'Best starting point for business and technical learners new to GCP.', 'Valid 3 years; recertify by retaking with a 50% discount.'],
    relatedSlugs: ['google-associate-cloud-engineer', 'google-professional-cloud-architect', 'google-cloud-generative-ai-leader'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-digital-leader',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'google-cloud-generative-ai-leader',
    body: 'Google Cloud',
    tagline: 'Prove you can apply generative AI responsibly on Google Cloud',
    description: 'Google Cloud Generative AI Leader is a Foundational certification focused on generative AI concepts, responsible use and how Google Cloud’s AI products (Vertex AI, Model Garden, Gemini) solve business problems. It is aimed at decision-makers and practitioners who need to evaluate and adopt GenAI without necessarily training models themselves, and sits alongside Cloud Digital Leader as a non-engineering on-ramp.',
    quickAnswer: { summary: 'Generative AI Leader is a Foundational Google Cloud exam that validates understanding of generative AI concepts, responsible AI, and Google Cloud’s GenAI tooling. It is aimed at business and technical leaders, requires no coding, and follows Google’s standard Foundational exam format.', advantages: ['No coding required', 'Maps to the fastest-growing cloud skill area', 'Pairs with Cloud Digital Leader', 'Useful for AI buying decisions'] },
    prerequisites: 'None — open to anyone aged 18 or older.',
    eligibility: 'Open to all; comfortable with general technology concepts recommended.',
    examMeta: { questions: '50–60', time: '90 minutes', pass: 'Pass/Fail', fee: '$99', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Fundamentals of generative AI', weight: '', note: 'LLMs, prompts, diffusion, embeddings' },
      { name: 'Google Cloud GenAI products', weight: '', note: 'Vertex AI, Model Garden, Gemini, Agent Builder' },
      { name: 'Responsible and safe AI', weight: '', note: 'Bias, fairness, governance, data privacy' },
      { name: 'Applying GenAI to business', weight: '', note: 'Use cases, build vs buy, ROI' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Foundational'],
      ['Validity', '3 years (Google Foundational policy)'],
      ['Coding', 'Not required']
    ],
    timeline: [{ stage: 'Study GenAI learning path', duration: '2–4 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$99' }], total: '$99', footnote: 'Confirm current fee on the official page; Foundational exams are $99.' },
    difficulty: 'Easy',
    audience: 'Leaders and practitioners evaluating generative AI',
    time: '2–4 weeks',
    cost: '$99',
    salaryRange: '',
    faqs: [
      { q: 'Is this exam technical?', a: 'It is Foundational and conceptual. You are tested on GenAI concepts and Google Cloud’s AI products, not on writing code or training models, so it fits business and technical leaders alike.' },
      { q: 'How is it different from Cloud Digital Leader?', a: 'Cloud Digital Leader covers the whole Google Cloud product portfolio and cloud concepts, while Generative AI Leader zooms in on generative AI, responsible AI and Google’s Gemini/Vertex AI tooling.' },
      { q: 'What should I study?', a: 'Follow the official Generative AI Leader learning path on Google Cloud Skills Boost, focusing on LLM fundamentals, Vertex AI/Model Garden, responsible AI and common business use cases.' },
      { q: 'Does it expire?', a: 'Like other Google Foundational certifications it is valid for three years and renewed by retaking the exam.' }
    ],
    summaryPoints: ['Foundational, non-coding exam on generative AI and Google Cloud GenAI products.', 'Covers LLM fundamentals, Vertex AI/Gemini, and responsible AI.', 'Aimed at leaders making GenAI adoption decisions.', 'Valid 3 years; $99 exam fee.'],
    relatedSlugs: ['google-cloud-digital-leader', 'google-professional-machine-learning-engineer', 'google-professional-cloud-architect'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/generative-ai-leader',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-associate-cloud-engineer',
    body: 'Google Cloud',
    tagline: 'The hands-on operator’s Google Cloud certification',
    description: 'Associate Cloud Engineer (ACE) validates that you can deploy applications, manage enterprise solutions and keep them running on Google Cloud. It is the Associate-level, hands-on exam for people who implement solutions designed by architects: spinning up Compute Engine and GKE, configuring VPC networking, managing IAM and operating Cloud Monitoring. Google recommends at least six months of hands-on experience, and the credential is valid for three years.',
    quickAnswer: { summary: 'The Associate Cloud Engineer exam (50–60 questions, 2 hours, $125) proves you can deploy, secure and operate Google Cloud services. It targets hands-on operators with about six months of experience, reports a scaled 700/1000 pass mark, and is valid for three years.', advantages: ['Vendor-recognised hands-on credential', 'Strong foundation for Professional certs', 'Tests real operational tasks', 'Valid 3 years'] },
    prerequisites: 'None formally, but Google recommends 6+ months of hands-on Google Cloud experience.',
    eligibility: 'Open to anyone aged 18 or older; no degree required.',
    examMeta: { questions: '50–60', time: '2 hours', pass: '700 / 1000 scaled', fee: '$125', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Setting up a cloud solution environment', weight: '23%', note: 'Projects, IAM, billing, quotas' },
      { name: 'Planning and implementing a cloud solution', weight: '30%', note: 'Compute, storage, networking, IaC' },
      { name: 'Ensuring successful operation of a cloud solution', weight: '27%', note: 'Monitoring, logging, maintenance' },
      { name: 'Configuring access and security', weight: '20%', note: 'IAM, service accounts, least privilege' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Retake', '14-day wait; full fee each attempt'],
      ['Validity', '3 years'],
      ['Pass mark', 'Scaled 700/1000']
    ],
    timeline: [{ stage: 'Hands-on practice (Qwiklabs / Sandbox)', duration: '6–10 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$125' }, { item: 'Practice exams', fee: '$20–$50' }], total: '$145–$600', footnote: 'Employer sponsorship and the Innovators Plus program can offset the fee.' },
    difficulty: 'Moderate',
    audience: 'Cloud operators and junior engineers',
    time: '6–10 weeks',
    cost: '$125–$600',
    salaryRange: '$95,000–$140,000',
    faqs: [
      { q: 'How much hands-on experience do I need?', a: 'Google recommends at least six months working with Google Cloud, but motivated learners who complete the Skills Boost path and practice in the console or Cloud Shell can be ready sooner. The exam is task-based, so console and gcloud practice matters more than theory.' },
      { q: 'What is the pass mark?', a: 'The Associate Cloud Engineer is one of the few Google exams with a published scaled score: 700 out of 1000, roughly 70%.' },
      { q: 'Should I take Digital Leader first?', a: 'Not required. Digital Leader is conceptual and non-coding; ACE is hands-on. If you are new to GCP, Digital Leader helps with terminology, but engineers usually go straight to ACE.' },
      { q: 'What comes after ACE?', a: 'Most progress to a Professional certification in their track — Cloud Architect, Data Engineer, DevOps Engineer, Security Engineer or Network Engineer — once they have a year or more of experience.' }
    ],
    summaryPoints: ['Associate, hands-on exam: deploy, secure and operate GCP services.', '50–60 questions, 2 hours, $125, pass mark 700/1000.', 'Four weighted domains: setup, implement, operate, secure.', 'Valid 3 years; ideal bridge to Professional certs.'],
    relatedSlugs: ['google-cloud-digital-leader', 'google-professional-cloud-architect', 'google-professional-cloud-devops-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/associate-cloud-engineer',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'google-associate-data-practitioner',
    body: 'Google Cloud',
    tagline: 'The entry cert for working with data on Google Cloud',
    description: 'Associate Data Practitioner is Google’s Foundational/Associate exam for people who work with data on Google Cloud but are not yet data engineers. It covers ingesting, storing, analyzing and visualizing data with services like BigQuery, Cloud Storage and Looker, making it a good on-ramp toward the Professional Data Engineer or Machine Learning Engineer certifications.',
    quickAnswer: { summary: 'The Associate Data Practitioner exam validates practical, entry-level data skills on Google Cloud — moving, storing and analyzing data with BigQuery, Cloud Storage and Looker. It suits analysts and emerging data professionals and follows Google’s standard Associate exam format ($125, 2 hours, 3-year validity).', advantages: ['No heavy coding required', 'Bridges to Professional Data/ML certs', 'Covers the core GCP data stack', 'Valid 3 years'] },
    prerequisites: 'None formally; basic SQL and spreadsheet comfort help.',
    eligibility: 'Open to anyone aged 18 or older.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail (Associate-level)', fee: '$125', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Collecting and ingesting data', weight: '', note: 'Cloud Storage, transfer, ingestion' },
      { name: 'Storing and managing data', weight: '', note: 'BigQuery, Spanner, Firestore' },
      { name: 'Analyzing and visualizing data', weight: '', note: 'BigQuery, Looker, SQL' },
      { name: 'Governance and collaboration', weight: '', note: 'Dataplex, catalogs, sharing' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Associate'],
      ['Validity', '3 years'],
      ['Focus', 'Practical data tasks, light coding']
    ],
    timeline: [{ stage: 'Practice BigQuery and Looker', duration: '4–8 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$125' }], total: '$125–$400', footnote: 'Free BigQuery sandbox and Skills Boost labs support low-cost prep.' },
    difficulty: 'Moderate',
    audience: 'Data analysts and emerging data professionals',
    time: '4–8 weeks',
    cost: '$125–$400',
    salaryRange: '$80,000–$120,000',
    faqs: [
      { q: 'Is coding required for this exam?', a: 'Light SQL is helpful but the exam targets practical data tasks rather than software engineering. It is positioned below the Professional Data Engineer, which expects deeper engineering skills.' },
      { q: 'How does it relate to Professional Data Engineer?', a: 'It is the on-ramp. Associate Data Practitioner covers using the data stack; Professional Data Engineer covers designing, building and operating data pipelines at scale.' },
      { q: 'What should I practice?', a: 'Spend time in the BigQuery sandbox and Looker Studio, and review the official Associate Data Practitioner learning path for ingestion, storage, analysis and governance.' },
      { q: 'Does it expire?', a: 'Yes — three years, like other Google Associate certifications; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Associate-level data exam covering ingest, store, analyze and govern.', 'Built around BigQuery, Cloud Storage and Looker.', 'Good first step toward Professional Data/ML certs.', 'Valid 3 years; $125 exam fee.'],
    relatedSlugs: ['google-professional-data-engineer', 'google-professional-machine-learning-engineer', 'google-associate-cloud-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/associate-data-practitioner',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-associate-google-workspace-administrator',
    body: 'Google Cloud',
    tagline: 'Administer Google Workspace for your organization',
    description: 'The Associate Google Workspace Administrator certification proves you can configure and manage a Google Workspace environment — users, groups, mail, Drive, security and compliance — for an organization. It targets IT admins who keep Workspace running day to day and is the Associate-level entry into Workspace administration credentials.',
    quickAnswer: { summary: 'The Associate Google Workspace Administrator exam validates the skills to configure users, security, mail flow and shared services in Google Workspace. It is aimed at IT administrators and follows Google’s Associate format (2 hours, $125, 3-year validity).', advantages: ['Directly useful for IT admin roles', 'Covers security and compliance', 'No coding required', 'Valid 3 years'] },
    prerequisites: 'Familiarity with Google Workspace as an admin; no formal prerequisite.',
    eligibility: 'Open to anyone aged 18 or older with Workspace admin exposure.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$125', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'User and group management', weight: '', note: 'Provisioning, OUs, groups' },
      { name: 'Mail and collaboration services', weight: '', note: 'Gmail, Calendar, Drive, Meet' },
      { name: 'Security and compliance', weight: '', note: '2SV, DLP, Vault, audit logs' },
      { name: 'Operations and support', weight: '', note: 'Troubleshooting, reporting' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Associate'],
      ['Validity', '3 years'],
      ['Audience', 'IT administrators']
    ],
    timeline: [{ stage: 'Admin practice in a Workspace trial', duration: '4–8 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$125' }], total: '$125–$300', footnote: 'A Workspace trial or sandbox tenant supports hands-on prep.' },
    difficulty: 'Moderate',
    audience: 'IT administrators managing Google Workspace',
    time: '4–8 weeks',
    cost: '$125–$300',
    salaryRange: '$60,000–$95,000',
    faqs: [
      { q: 'Do I need to be a Workspace admin already?', a: 'Hands-on admin experience is strongly recommended. The exam assumes you can configure users, mail and security, so a trial tenant to practice in is the best preparation.' },
      { q: 'Is this a Google Cloud exam?', a: 'It is delivered through the Google Cloud certification program and shares the same exam platform, fees and validity, even though Workspace is a collaboration suite rather than a compute platform.' },
      { q: 'What does it cover?', a: 'User and group management, mail and collaboration services, security/compliance (2SV, DLP, Vault) and day-to-day operations.' },
      { q: 'What is the next step?', a: 'The Professional Google Workspace Administrator exam covers advanced configuration and governance for larger or regulated organizations.' }
    ],
    summaryPoints: ['Associate exam for day-to-day Workspace administration.', 'Covers users, mail, security and compliance.', 'Built for IT admins; no coding required.', 'Valid 3 years; $125 exam fee.'],
    relatedSlugs: ['google-professional-google-workspace-administrator', 'google-professional-chromeos-administrator', 'google-associate-cloud-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/associate-google-workspace-administrator',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-cloud-architect',
    body: 'Google Cloud',
    tagline: 'Design secure, scalable and cost-effective GCP solutions',
    description: 'Professional Cloud Architect is Google’s flagship Professional certification for designing cloud solutions. It proves you can translate business and technical requirements into secure, reliable, high-availability architectures on Google Cloud, and is consistently ranked among the highest-paying IT certifications. Candidates typically have a year or more of design and management experience on GCP. The exam is scenario- and case-study-heavy, and is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud Architect exam (about 50–63 questions, 2 hours, $200) validates end-to-end solution design on Google Cloud: planning, provisioning, security/compliance and reliability. It is scenario- and case-study-based, aimed at experienced architects, and is valid for two years.', advantages: ['Among the highest-paying cloud certs', 'Vendor-neutral design skills, GCP depth', 'Case-study format mirrors real work', 'Valid 2 years'] },
    prerequisites: 'No formal prerequisite; Google recommends 3+ years industry experience including 1+ year designing/managing on GCP.',
    eligibility: 'Open to anyone aged 18 or older with cloud architecture experience.',
    examMeta: { questions: '50–63 (scenario + case study)', time: '2 hours', pass: 'Pass/Fail (no published numeric cut score)', fee: '$200', format: 'Multiple choice, multiple select and case studies', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Designing and planning a cloud solution architecture', weight: '30%', note: 'Requirements, network/storage/compute, migration' },
      { name: 'Managing and provisioning a solution infrastructure', weight: '40%', note: 'Network topologies, storage, compute, monitoring' },
      { name: 'Designing for security and compliance', weight: '20%', note: 'IAM, encryption, VPC-SC, compliance' },
      { name: 'Analyzing, optimizing, reliability and implementation', weight: '10%', note: 'Processes, cost, deployment, operations' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Retake', '14-day → 60-day → 1-year waits'],
      ['Validity', '2 years'],
      ['Renewal', 'Retake with 50% discount']
    ],
    timeline: [{ stage: 'Hands-on design + case studies', duration: '10–16 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }, { item: 'Practice exams / courses', fee: '$50–$300' }], total: '$250–$700', footnote: 'A renewal exam option (1 hour, $100) exists for certified architects in their window.' },
    difficulty: 'Hard',
    audience: 'Experienced cloud and solution architects',
    time: '10–16 weeks',
    cost: '$200–$700',
    salaryRange: '$140,000–$200,000',
    faqs: [
      { q: 'How much experience do I need?', a: 'Google recommends three or more years in IT with at least one year designing and managing solutions on Google Cloud. The exam is scenario-heavy, so real architecture practice matters more than memorization.' },
      { q: 'What is the pass mark?', a: 'Google reports Pass/Fail with no published numeric cut score; a common, unofficial target is around 70%. Up to about 30% of questions can be based on the official case studies, which are published before the exam.' },
      { q: 'How should I prepare?', a: 'Study the four official case studies, build reference architectures in a sandbox, and drill service-selection trade-offs (Compute Engine vs GKE vs Cloud Run, BigQuery vs Spanner, networking and IAM). Timed practice exams help with pacing.' },
      { q: 'How do I renew?', a: 'The cert is valid two years. You can recertify by retaking the standard exam or, in your eligibility window, the shorter 1-hour Professional Cloud Architect Renewal exam at $100 — and certified individuals get a 50% discount on the standard attempt.' }
    ],
    summaryPoints: ['Flagship Professional cert for end-to-end GCP solution design.', '2 hours, ~50–63 scenario questions, $200, Pass/Fail.', 'Case-study format; design, provisioning, security and reliability domains.', 'Valid 2 years; renewal exam available at $100.'],
    relatedSlugs: ['google-associate-cloud-engineer', 'google-professional-cloud-devops-engineer', 'google-professional-cloud-security-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-architect',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'google-professional-cloud-database-engineer',
    body: 'Google Cloud',
    tagline: 'Design and manage Google Cloud databases at scale',
    description: 'Professional Cloud Database Engineer validates the ability to design, create and manage Google Cloud databases that meet availability, scalability and security requirements. It covers relational (Cloud SQL, AlloyDB, Spanner), NoSQL (Bigtable, Firestore) and analytical (BigQuery) services, and is aimed at database professionals migrating or running data tiers on GCP. The exam is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud Database Engineer exam proves you can design, deploy and operate Google Cloud databases (Cloud SQL, AlloyDB, Spanner, Bigtable, Firestore, BigQuery) for availability, scale and security. It targets database professionals and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Covers the full GCP database portfolio', 'Maps to high-demand data roles', 'Valid 2 years', 'Builds on Associate Cloud Engineer'] },
    prerequisites: 'Hands-on database and Google Cloud experience recommended.',
    eligibility: 'Open to anyone aged 18 or older with database background.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Designing and planning database solutions', weight: '', note: 'Workload fit, HA/DR, cost' },
      { name: 'Migrating data to Google Cloud', weight: '', note: 'DMS, transfer, cutover' },
      { name: 'Deploying and managing databases', weight: '', note: 'Cloud SQL, AlloyDB, Spanner' },
      { name: 'Security, reliability and operations', weight: '', note: 'IAM, encryption, monitoring' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Database design and operations']
    ],
    timeline: [{ stage: 'Build and migrate sample databases', duration: '8–12 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$600', footnote: 'Always-on database instances can add lab cost; use Free Tier where possible.' },
    difficulty: 'Hard',
    audience: 'Database administrators and data platform engineers',
    time: '8–12 weeks',
    cost: '$200–$600',
    salaryRange: '$130,000–$180,000',
    faqs: [
      { q: 'Which databases are in scope?', a: 'The exam spans relational (Cloud SQL, AlloyDB, Spanner), NoSQL (Bigtable, Firestore) and analytical (BigQuery) services, with emphasis on choosing the right engine for the workload and operating it for HA, DR and security.' },
      { q: 'Is this harder than Professional Data Engineer?', a: 'They overlap on data, but Database Engineer is narrower and deeper on database operations and migrations, while Data Engineer covers pipelines and processing more broadly. Many candidates hold both.' },
      { q: 'What experience helps most?', a: 'Running Cloud SQL/AlloyDB/Spanner in production, planning migrations with Database Migration Service, and applying IAM and CMEK for data security.' },
      { q: 'Does it expire?', a: 'Yes — two years, like all Google Professional certifications; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for Google Cloud database design and operations.', 'Covers Cloud SQL, AlloyDB, Spanner, Bigtable, Firestore, BigQuery.', 'Emphasis on HA/DR, migration and security.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-data-engineer', 'google-associate-cloud-engineer', 'google-professional-cloud-architect'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-database-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-cloud-developer',
    body: 'Google Cloud',
    tagline: 'Build and deploy cloud-native apps on GCP',
    description: 'Professional Cloud Developer validates the ability to design, build, test and deploy applications that run on Google Cloud, using services such as Cloud Run, GKE, App Engine and Cloud Functions, plus CI/CD and developer tooling. It targets software engineers building cloud-native applications and is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud Developer exam proves you can design, build and deploy cloud-native applications on Google Cloud (Cloud Run, GKE, App Engine, functions) with CI/CD and observability. It is for software engineers and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Directly relevant to app developers', 'Covers modern CI/CD and serverless', 'Valid 2 years', 'Pairs with DevOps cert'] },
    prerequisites: 'Software development experience and Google Cloud familiarity recommended.',
    eligibility: 'Open to anyone aged 18 or older with dev experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Designing cloud-native applications', weight: '', note: '12-factor, microservices, patterns' },
      { name: 'Building and testing apps', weight: '', note: 'Runtimes, GKE, Cloud Run, functions' },
      { name: 'Deploying and CI/CD', weight: '', note: 'Cloud Build, Deploy, Artifact Registry' },
      { name: 'Integration and observability', weight: '', note: 'Pub/Sub, Monitoring, Trace' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Application build and deploy']
    ],
    timeline: [{ stage: 'Build sample apps on Cloud Run/GKE', duration: '8–12 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$500', footnote: 'Serverless Free Tier keeps lab cost low.' },
    difficulty: 'Hard',
    audience: 'Software engineers building on Google Cloud',
    time: '8–12 weeks',
    cost: '$200–$500',
    salaryRange: '$130,000–$180,000',
    faqs: [
      { q: 'What services should I know?', a: 'Cloud Run and GKE for compute, App Engine and Cloud Functions for serverless, plus Cloud Build/Deploy and Artifact Registry for CI/CD and Pub/Sub, Cloud Tasks and observability tooling for integration.' },
      { q: 'How is this different from DevOps Engineer?', a: 'Cloud Developer centers on writing and deploying application code; DevOps Engineer centers on CI/CD, SRE and delivery pipeline reliability. They overlap on deployment but differ in emphasis.' },
      { q: 'What coding is expected?', a: 'You should be comfortable reading and reasoning about application code and deployment config, but the exam is multiple-choice/scenario rather than a live coding lab.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam during your eligibility window.' }
    ],
    summaryPoints: ['Professional cert for cloud-native application development on GCP.', 'Covers Cloud Run, GKE, App Engine, functions and CI/CD.', 'Focus on build, deploy and observability.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-cloud-devops-engineer', 'google-associate-cloud-engineer', 'google-professional-cloud-architect'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-developer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-cloud-devops-engineer',
    body: 'Google Cloud',
    tagline: 'Run reliable, automated delivery on Google Cloud',
    description: 'Professional Cloud DevOps Engineer validates the practices used to build and operate reliable software delivery pipelines on Google Cloud, applying SRE principles, CI/CD, and monitoring/observability. It targets engineers responsible for deployment velocity and production reliability and is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud DevOps Engineer exam proves you can apply SRE and CI/CD practices to deliver software reliably on Google Cloud. It covers pipeline automation, monitoring and incident response, targets DevOps/SRE engineers, and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['SRE principles are widely transferable', 'Strong for platform/DevOps roles', 'Valid 2 years', 'Pairs with Cloud Developer'] },
    prerequisites: 'Experience with CI/CD, SRE and Google Cloud recommended.',
    eligibility: 'Open to anyone aged 18 or older with DevOps experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Applying SRE principles', weight: '', note: 'SLIs/SLOs, error budgets' },
      { name: 'Implementing CI/CD', weight: '', note: 'Cloud Build, Deploy, GitOps' },
      { name: 'Monitoring and observability', weight: '', note: 'Monitoring, Logging, Trace, alerting' },
      { name: 'Reliability and incident response', weight: '', note: 'Toil, on-call, postmortems' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Delivery and reliability']
    ],
    timeline: [{ stage: 'Practice CI/CD + SRE on GCP', duration: '8–14 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$500', footnote: 'Sandbox and Free Tier support low-cost pipelines practice.' },
    difficulty: 'Hard',
    audience: 'DevOps and SRE engineers',
    time: '8–14 weeks',
    cost: '$200–$500',
    salaryRange: '$135,000–$185,000',
    faqs: [
      { q: 'Do I need to be a coder?', a: 'Comfort with pipelines and infrastructure-as-code helps, but the exam is scenario-based. It tests SRE and delivery concepts (SLIs/SLOs, CI/CD, monitoring) more than writing application code.' },
      { q: 'What Google tools are emphasized?', a: 'Cloud Build and Cloud Deploy for delivery, Artifact Registry, and the Cloud Operations suite (Monitoring, Logging, Trace, Profiler) plus error budgets and incident response practices.' },
      { q: 'How does it compare to Cloud Developer?', a: 'Developer is about building and deploying apps; DevOps Engineer is about the pipeline and reliability around them. Many engineers hold both to cover the full delivery lifecycle.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for SRE and CI/CD on Google Cloud.', 'Covers SLIs/SLOs, pipelines, observability and incident response.', 'Targets DevOps/SRE engineers.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-cloud-developer', 'google-associate-cloud-engineer', 'google-professional-cloud-architect'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-devops-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-cloud-network-engineer',
    body: 'Google Cloud',
    tagline: 'Architect and operate Google Cloud networking',
    description: 'Professional Cloud Network Engineer validates the ability to implement and manage network architectures on Google Cloud — VPC design, hybrid and multi-cloud connectivity, load balancing, security and observability. It targets network engineers and is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud Network Engineer exam proves you can design and operate Google Cloud networks: VPCs, hybrid/multicloud connectivity, load balancing and network security. It targets network engineers and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Deep GCP networking credential', 'Strong for hybrid/multi-cloud roles', 'Valid 2 years', 'Builds on ACE'] },
    prerequisites: 'Networking fundamentals and Google Cloud experience recommended.',
    eligibility: 'Open to anyone aged 18 or older with networking background.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Network design and VPC', weight: '', note: 'Subnets, firewall, Shared VPC, NGFW' },
      { name: 'Hybrid and multi-cloud connectivity', weight: '', note: 'VPN, Interconnect, Peering' },
      { name: 'Load balancing and CDN', weight: '', note: 'LB tiers, Cloud CDN, Cloud Armor' },
      { name: 'Observability and security', weight: '', note: 'Monitoring, flow logs, NACLs' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Cloud networking']
    ],
    timeline: [{ stage: 'Build VPC/hybrid labs', duration: '8–12 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$500', footnote: 'Interconnect lab costs can be high; use VPN and sandbox for most prep.' },
    difficulty: 'Hard',
    audience: 'Network engineers and cloud infrastructure specialists',
    time: '8–12 weeks',
    cost: '$200–$500',
    salaryRange: '$130,000–$180,000',
    faqs: [
      { q: 'What networking topics are tested?', a: 'VPC design and firewalling (including Cloud NGFW), hybrid connectivity (Cloud VPN, Interconnect, Peering), load balancing and CDN, Cloud Armor, and observability through flow logs and Monitoring.' },
      { q: 'Is this harder than the architect exam?', a: 'It is narrower and deeper on networking. If your role is network-focused, it is more directly relevant than the broader Cloud Architect cert.' },
      { q: 'What hands-on practice helps?', a: 'Stand up VPCs, configure VPN/Interconnect in a lab, deploy global load balancers, and apply firewall and Cloud Armor policies. Comfort with gcloud networking commands is key.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for Google Cloud networking.', 'Covers VPC, hybrid/multi-cloud, load balancing and security.', 'Targets network engineers.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-cloud-architect', 'google-associate-cloud-engineer', 'google-professional-cloud-security-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-network-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-cloud-security-engineer',
    body: 'Google Cloud',
    tagline: 'Secure Google Cloud infrastructure and data',
    description: 'Professional Cloud Security Engineer validates the ability to design and implement a secure Google Cloud environment — identity, data protection, network security, compliance and operations. It targets security engineers and is valid for two years.',
    quickAnswer: { summary: 'The Professional Cloud Security Engineer exam proves you can design and implement security on Google Cloud: IAM, encryption, network security, compliance and incident response. It targets security engineers and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['High-demand cloud security skill', 'Maps to security engineer roles', 'Valid 2 years', 'Pairs with Architect'] },
    prerequisites: 'Security fundamentals and Google Cloud experience recommended.',
    eligibility: 'Open to anyone aged 18 or older with security background.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Identity and access management', weight: '', note: 'IAM, groups, Workload Identity' },
      { name: 'Data protection', weight: '', note: 'KMS, CMEK, EKM, DLP, Secret Manager' },
      { name: 'Network and perimeter security', weight: '', note: 'VPC-SC, Cloud Armor, firewall' },
      { name: 'Compliance and operations', weight: '', note: 'Audit logs, SCC, SOAR' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Cloud security']
    ],
    timeline: [{ stage: 'Practice IAM, KMS, VPC-SC', duration: '8–12 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$500', footnote: 'Sandbox supports IAM/KMS practice at low cost.' },
    difficulty: 'Hard',
    audience: 'Cloud security engineers',
    time: '8–12 weeks',
    cost: '$200–$500',
    salaryRange: '$140,000–$190,000',
    faqs: [
      { q: 'What security areas are covered?', a: 'Identity and access (IAM, service accounts, Workload Identity Federation), data protection (Cloud KMS, CMEK/EKM, DLP, Secret Manager), perimeter security (VPC Service Controls, Cloud Armor, firewall) and compliance/operations (audit logs, Security Command Center).' },
      { q: 'How does it compare to the architect exam?', a: 'The architect exam touches security as one domain; this cert goes deep on security design and operations. Security-focused engineers often take both.' },
      { q: 'What hands-on practice helps most?', a: 'Configure least-privilege IAM, encrypt data with CMEK, lock down projects with VPC Service Controls, and review Security Command Center findings.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for Google Cloud security.', 'Covers IAM, encryption, VPC-SC, compliance and operations.', 'Targets security engineers.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-cloud-architect', 'google-professional-cloud-network-engineer', 'google-professional-security-operations-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/cloud-security-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-data-engineer',
    body: 'Google Cloud',
    tagline: 'Design and operate data pipelines on Google Cloud',
    description: 'Professional Data Engineer is one of Google’s most demanding and best-paid certifications. It proves you can design, build and operationalize data processing systems on Google Cloud — batch and streaming pipelines, storage selection, data quality, governance and ML preparation — using BigQuery, Dataflow, Dataproc, Pub/Sub and Vertex AI. It is scenario-heavy, valid for two years, and targets experienced data engineers.',
    quickAnswer: { summary: 'The Professional Data Engineer exam (50–60 questions, 2 hours, $200) validates designing, building and operating data systems on Google Cloud across five domains. It is scenario-based, aimed at experienced data engineers, and is valid for two years.', advantages: ['Among the highest-paying cloud certs', 'BigQuery-centric, broadly applicable', 'Covers streaming and batch', 'Valid 2 years'] },
    prerequisites: 'Google recommends 3+ years industry experience including 1+ year designing/managing on GCP, plus SQL and a language like Python.',
    eligibility: 'Open to anyone aged 18 or older with data engineering experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail (no published numeric cut score)', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Designing data processing systems', weight: '22%', note: 'Security, reliability, migration' },
      { name: 'Ingesting and processing the data', weight: '25%', note: 'Dataflow, Dataproc, Pub/Sub, CDC' },
      { name: 'Storing the data', weight: '', note: 'BigQuery, Spanner, Bigtable, storage classes' },
      { name: 'Preparing and using data for analysis', weight: '', note: 'Quality, governance, GenAI prep' },
      { name: 'Maintaining and automating pipelines', weight: '', note: 'Composer, CI/CD, monitoring' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Retake', '14-day → 60-day → 1-year waits'],
      ['Validity', '2 years'],
      ['Renewal', 'Retake with 50% discount']
    ],
    timeline: [{ stage: 'BigQuery + Dataflow labs', duration: '10–16 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }, { item: 'Courses / practice exams', fee: '$50–$300' }], total: '$250–$700', footnote: 'BigQuery sandbox keeps most prep cost low; streaming labs may add some spend.' },
    difficulty: 'Hard',
    audience: 'Experienced data engineers',
    time: '10–16 weeks',
    cost: '$200–$700',
    salaryRange: '$160,000–$200,000',
    faqs: [
      { q: 'How much BigQuery do I need to know?', a: 'A lot. BigQuery appears in a large share of questions — partitioning and clustering, materialized views, BigQuery ML, column-level security, federated queries and Dataform. Deep BigQuery knowledge is the single biggest readiness factor.' },
      { q: 'What is the pass mark?', a: 'Google reports Pass/Fail with no published numeric cut score; an unofficial target is around 70%. The five domains are weighted roughly (Designing ~22%, Ingesting/Processing ~25%, with the rest balanced), so study across the full data lifecycle.' },
      { q: 'How should I prepare?', a: 'Build pipelines with Dataflow/Apache Beam, practice streaming with Pub/Sub, model storage choices (BigQuery vs Bigtable vs Spanner), and use Cloud Composer for orchestration. Timed scenario practice exams help with pacing.' },
      { q: 'How do I renew?', a: 'Valid two years; recertify by retaking the exam during your eligibility window, with a 50% discount as a certified individual.' }
    ],
    summaryPoints: ['Flagship data cert: design, build and operate GCP data systems.', '2 hours, ~50–60 scenario questions, $200, Pass/Fail.', 'BigQuery-heavy across five lifecycle domains.', 'Valid 2 years; one of the highest-paying cloud certs.'],
    relatedSlugs: ['google-associate-data-practitioner', 'google-professional-machine-learning-engineer', 'google-professional-cloud-database-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/data-engineer',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'google-professional-machine-learning-engineer',
    body: 'Google Cloud',
    tagline: 'Build and deploy ML systems on Google Cloud',
    description: 'Professional Machine Learning Engineer validates the ability to design, build, productionize and monitor machine learning models on Google Cloud using Vertex AI, BigQuery ML and related services. It targets ML engineers and data scientists with hands-on GCP experience and is valid for two years.',
    quickAnswer: { summary: 'The Professional ML Engineer exam (50–60 questions, 2 hours, $200) proves you can design, build, deploy and monitor ML systems on Google Cloud with Vertex AI and BigQuery ML. It targets ML engineers and is valid for two years.', advantages: ['Directly relevant to ML engineering roles', 'Vertex AI-centric', 'Valid 2 years', 'Builds on Data Engineer'] },
    prerequisites: 'Google recommends 3+ years industry experience including 1+ year designing/managing ML on GCP, plus Python and ML fundamentals.',
    eligibility: 'Open to anyone aged 18 or older with ML experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Architecting low-code ML solutions', weight: '', note: 'BigQuery ML, AutoML' },
      { name: 'Collaborating on data and models', weight: '', note: 'Versioning, governance, access' },
      { name: 'Scaling prototypes to ML models', weight: '', note: 'Feature engineering, training, Vertex AI' },
      { name: 'Serving and monitoring models', weight: '', note: 'Online/batch prediction, drift, MLOps' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'ML systems on GCP']
    ],
    timeline: [{ stage: 'Vertex AI + BigQuery ML labs', duration: '10–14 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$600', footnote: 'Vertex AI training/endpoint costs can add lab spend; use Free Tier and credits.' },
    difficulty: 'Hard',
    audience: 'ML engineers and data scientists',
    time: '10–14 weeks',
    cost: '$200–$600',
    salaryRange: '$150,000–$200,000',
    faqs: [
      { q: 'What ML tools are in scope?', a: 'Vertex AI (Workbench, Model Registry, Pipelines, Endpoints), BigQuery ML, AutoML and the pre-trained APIs, plus MLOps practices like feature engineering, model monitoring and responsible AI.' },
      { q: 'How is it different from Data Engineer?', a: 'Data Engineer covers the data lifecycle broadly; ML Engineer focuses on building and productionizing models. They share BigQuery and data-prep knowledge but diverge on modeling and MLOps.' },
      { q: 'Do I need to be a Python expert?', a: 'Comfort with Python and ML concepts is expected, but the exam is scenario-based on GCP services rather than a coding test. Hands-on Vertex AI practice is the best prep.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for ML systems on Google Cloud.', 'Centered on Vertex AI, BigQuery ML and MLOps.', 'Targets ML engineers and data scientists.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-data-engineer', 'google-cloud-generative-ai-leader', 'google-associate-data-practitioner'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/machine-learning-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-security-operations-engineer',
    body: 'Google Cloud',
    tagline: 'Run detection and response with Google SecOps',
    description: 'Professional Security Operations Engineer validates the skills to design and operate security operations on Google Cloud using Chronicle/SecOps, detection engineering and incident response. It targets SOC and security operations engineers and is valid for two years.',
    quickAnswer: { summary: 'The Professional Security Operations Engineer exam proves you can design and run cloud security operations with Google SecOps/Chronicle — detection, investigation and response. It targets SOC engineers and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Niche, in-demand SecOps skill', 'Chronicle/SecOps focused', 'Valid 2 years', 'Pairs with Security Engineer'] },
    prerequisites: 'Security operations and Google Cloud exposure recommended.',
    eligibility: 'Open to anyone aged 18 or older with SOC experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Detection engineering', weight: '', note: 'Rules, YARA-L, use cases' },
      { name: 'Investigation and response', weight: '', note: 'Chronicle, SIEM, SOAR' },
      { name: 'Data ingestion and parsing', weight: '', note: 'Parsers, feeds, normalization' },
      { name: 'Operations and tuning', weight: '', note: 'Alerts, metrics, maturity' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Focus', 'Security operations']
    ],
    timeline: [{ stage: 'Practice Chronicle/SecOps', duration: '8–12 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$500', footnote: 'SecOps demo tenants support hands-on prep.' },
    difficulty: 'Hard',
    audience: 'SOC and security operations engineers',
    time: '8–12 weeks',
    cost: '$200–$500',
    salaryRange: '$130,000–$180,000',
    faqs: [
      { q: 'What platform is tested?', a: 'The exam centers on Google SecOps (formerly Chronicle SIEM/SOAR): detection engineering, data ingestion and parsing, investigation workflows and response automation.' },
      { q: 'How does it relate to Cloud Security Engineer?', a: 'Cloud Security Engineer is about building secure cloud environments; Security Operations Engineer is about detecting and responding to threats once systems run. They complement each other.' },
      { q: 'What should I practice?', a: 'Write and tune detection rules, normalize and parse logs, and run investigations in a SecOps/Chronicle demo environment.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for cloud security operations.', 'Centered on Google SecOps/Chronicle detection and response.', 'Targets SOC engineers.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-cloud-security-engineer', 'google-professional-cloud-architect', 'google-professional-cloud-network-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/security-operations-engineer',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-google-workspace-administrator',
    body: 'Google Cloud',
    tagline: 'Advanced Google Workspace governance and security',
    description: 'Professional Google Workspace Administrator validates advanced configuration, security and compliance for Google Workspace at scale — directory design, data governance, Vault, and enterprise change management. It builds on the Associate exam and targets senior Workspace administrators in larger or regulated organizations. Valid for two years under the Google certification program.',
    quickAnswer: { summary: 'The Professional Google Workspace Administrator exam validates advanced Workspace governance — directory, security, compliance, Vault and change management. It targets senior admins and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Advanced Workspace credential', 'Covers governance and compliance', 'Valid 2 years', 'Builds on Associate exam'] },
    prerequisites: 'Associate Workspace Administrator or equivalent hands-on experience recommended.',
    eligibility: 'Open to anyone aged 18 or older with senior admin experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Organizational structure and directory', weight: '', note: 'OUs, groups, domains' },
      { name: 'Security and compliance', weight: '', note: 'Vault, DLP, retention, audit' },
      { name: 'Data governance', weight: '', note: 'Classification, eDiscovery' },
      { name: 'Change and lifecycle management', weight: '', note: 'Deployment, support, training' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Audience', 'Senior Workspace admins']
    ],
    timeline: [{ stage: 'Advanced admin practice', duration: '6–10 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$400', footnote: 'A Workspace enterprise trial supports advanced hands-on prep.' },
    difficulty: 'Hard',
    audience: 'Senior IT administrators managing Google Workspace',
    time: '6–10 weeks',
    cost: '$200–$400',
    salaryRange: '$70,000–$110,000',
    faqs: [
      { q: 'How is this different from the Associate exam?', a: 'The Associate exam covers day-to-day administration; the Professional exam adds advanced directory design, data governance, Vault/eDiscovery, compliance and organizational change management.' },
      { q: 'What should I practice?', a: 'Model a realistic org structure, configure retention and DLP, run Vault eDiscovery, and plan a managed deployment across a large user base.' },
      { q: 'Is it delivered like other Google exams?', a: 'Yes — same platform, fees and two-year validity as the Professional Cloud certifications, even though Workspace is a collaboration suite.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional Workspace admin credential for governance at scale.', 'Covers directory design, Vault, DLP and change management.', 'Builds on the Associate exam.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-associate-google-workspace-administrator', 'google-professional-chromeos-administrator', 'google-professional-cloud-security-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/professional-google-workspace-administrator',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-professional-chromeos-administrator',
    body: 'Google Cloud',
    tagline: 'Manage ChromeOS fleets for organizations',
    description: 'Professional ChromeOS Administrator validates the ability to deploy, secure and manage ChromeOS devices and user access at organizational scale using the Google Admin console. It targets IT admins responsible for ChromeOS fleets in education and enterprise and is valid for two years under the Google certification program.',
    quickAnswer: { summary: 'The Professional ChromeOS Administrator exam proves you can deploy and manage ChromeOS devices and policies at scale via the Google Admin console. It targets IT admins and follows the Professional format (2 hours, $200, 2-year validity).', advantages: ['Niche ChromeOS credential', 'Strong for education/enterprise IT', 'Valid 2 years', 'Pairs with Workspace admin'] },
    prerequisites: 'ChromeOS and Admin console experience recommended.',
    eligibility: 'Open to anyone aged 18 or older with device-management experience.',
    examMeta: { questions: '50–60', time: '2 hours', pass: 'Pass/Fail', fee: '$200', format: 'Multiple choice and multiple select', admin: 'Online proctored or testing center' },
    topics: [
      { name: 'Device enrollment and policies', weight: '', note: 'Enrollment, OU policies' },
      { name: 'User and app management', weight: '', note: 'Accounts, extensions, kiosk' },
      { name: 'Security and updates', weight: '', note: 'Verified boot, auto-update' },
      { name: 'Operations and support', weight: '', note: 'Troubleshooting, reporting' }
    ],
    examEssentials: [
      ['Delivery', 'Online proctored or testing center'],
      ['Level', 'Professional'],
      ['Validity', '2 years'],
      ['Audience', 'ChromeOS IT admins']
    ],
    timeline: [{ stage: 'Manage a test ChromeOS fleet', duration: '4–8 weeks' }, { stage: 'Book and pass', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$200' }], total: '$200–$400', footnote: 'A test ChromeOS device or enrolled VM supports hands-on prep.' },
    difficulty: 'Moderate',
    audience: 'IT administrators managing ChromeOS',
    time: '4–8 weeks',
    cost: '$200–$400',
    salaryRange: '$55,000–$90,000',
    faqs: [
      { q: 'What do I need to practice?', a: 'A Google Workspace or Cloud Identity trial with the Admin console and at least one enrolled ChromeOS device (or a Pixel/ChromeOS Flex machine) lets you exercise enrollment and policy management.' },
      { q: 'Who should take this?', a: 'IT staff in schools and enterprises that standardize on ChromeOS, where fleet management, kiosk mode and policy enforcement are daily tasks.' },
      { q: 'How does it relate to Workspace admin?', a: 'ChromeOS administration shares the Admin console with Workspace; this cert drills deeper into device and fleet management specifically.' },
      { q: 'Does it expire?', a: 'Yes — two years; recertify by retaking the exam.' }
    ],
    summaryPoints: ['Professional cert for ChromeOS device fleet management.', 'Covers enrollment, policies, security and support.', 'Targets education/enterprise IT.', 'Valid 2 years; $200 exam fee.'],
    relatedSlugs: ['google-professional-google-workspace-administrator', 'google-associate-google-workspace-administrator', 'google-associate-cloud-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/guides/chromeos-administrator',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'google-it-support-professional-certificate',
    body: 'Google Cloud',
    tagline: 'Launch an IT support career with Google',
    description: 'The Google IT Support Professional Certificate is a beginner-friendly program (commonly delivered via Coursera) that teaches the fundamentals of IT support: hardware, operating systems, networking, system administration, security and customer service. It is a training certificate rather than a proctored exam, and is frequently used as a stepping stone into IT roles and toward CompTIA A+.',
    quickAnswer: { summary: 'The Google IT Support Professional Certificate is a beginner IT training program (typically on Coursera) covering hardware, OS, networking, sysadmin, security and support skills. It is a course completion certificate, not a proctored exam, and is a common on-ramp to IT careers and A+.', advantages: ['Zero experience required', 'Widely recognised beginner cred', 'Strong path into IT jobs', 'Prepares for A+'] },
    prerequisites: 'None — designed for career starters.',
    eligibility: 'Open to all learners.',
    examMeta: { questions: 'Course assessments (not a single proctored exam)', time: 'Self-paced (≈3–6 months)', pass: 'Pass course modules', fee: 'Coursera subscription (free trial available)', format: 'Quizzes and hands-on labs', admin: 'Coursera / Google' },
    topics: [
      { name: 'Hardware and operating systems', weight: '', note: 'Devices, Windows/Linux/macOS' },
      { name: 'Networking and system admin', weight: '', note: 'TCP/IP, Active Directory, CLI' },
      { name: 'IT security fundamentals', weight: '', note: 'Threats, encryption, policies' },
      { name: 'Customer support and troubleshooting', weight: '', note: 'Tickets, communication' }
    ],
    examEssentials: [
      ['Delivery', 'Coursera (online, self-paced)'],
      ['Type', 'Professional certificate (course)'],
      ['Proctored exam', 'No'],
      ['Next step', 'CompTIA A+']
    ],
    timeline: [{ stage: 'Complete course modules', duration: '3–6 months' }, { stage: 'Apply skills / pursue A+', duration: 'ongoing' }],
    costBreakdown: { items: [{ item: 'Coursera subscription', fee: '~$39/month' }], total: '$120–$240', footnote: 'Financial aid and free trials are available.' },
    difficulty: 'Easy',
    audience: 'Career starters in IT',
    time: '3–6 months',
    cost: '$120–$240',
    salaryRange: '$40,000–$60,000 (entry IT)',
    faqs: [
      { q: 'Is this a proctored certification exam?', a: 'No. It is a course-completion professional certificate delivered on Coursera through graded modules and labs, not a single supervised exam like the Google Cloud certifications.' },
      { q: 'What will I learn?', a: 'Core IT support skills: computer hardware, operating systems (Windows, Linux, macOS), networking, system administration, security fundamentals and customer-service troubleshooting.' },
      { q: 'Does it help get a job?', a: 'It is a recognised entry credential that many employers accept as evidence of foundational IT support knowledge, and it maps well to help-desk and technical-support roles.' },
      { q: 'What should I do next?', a: 'Many learners move on to CompTIA A+ for a vendor-neutral, exam-based IT support certification to strengthen their resume.' }
    ],
    summaryPoints: ['Beginner IT support training certificate (Coursera).', 'Covers hardware, OS, networking, security and support.', 'Not a proctored exam; self-paced course.', 'Common on-ramp to A+ and IT careers.'],
    relatedSlugs: ['comptia-a-plus', 'comptia-it-fundamentals', 'comptia-tech-plus'],
    sourceUrl: 'https://www.coursera.org/professional-certificates/google-it-support',
    reviewed: '2026-08',
    confidence: 'medium'
  }
];
