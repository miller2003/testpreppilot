const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, security & DevOps certifications desk',
    bio: 'This guide is compiled and maintained by our cloud-and-security certifications desk. HashiCorp exam structure, fees, delivery, language and credential validity come from the vendor\u2019s own certification pages, and we state plainly when a figure such as a pass rate or an official cut score is not published rather than repeating third-party estimates as fact. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam format, duration, fee, delivery method and credential validity were checked against the official HashiCorp certification page for Vault Associate (003); wage context against BLS OEWS May 2024 for SOC 15-1252.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$132,270 median for software developers (SOC 15-1252, BLS May 2024) — the closest official occupation to the Vault Associate role',
    summary:
      'There is no Bureau of Labor Statistics occupation called "secrets engineer" or "Vault administrator", so the honest answer is that the closest official fit for the Vault Associate role is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent earning less than $79,850 and the highest 10 percent more than $211,450. We have chosen this code deliberately over infrastructure or security-analyst categories: the exam\u2019s own target audience is the cloud engineer with security, development or operations responsibility, and the day-to-day work of standing up Vault, writing policies, enabling auth methods, managing leases and building dynamic secrets sits closer to developer-platform work than to pure network security. BLS projects 15 percent employment growth for the combined software developers, quality assurance analysts and testers occupation from 2024 to 2034, with about 129,200 openings a year, which is the strongest tailwind of any occupation quoted on this page. The caveats matter. First, the credential is an associate-level, foundational certificate aimed at people with basic terminal skills and a basic grasp of cloud or on-premises architecture; it is not a senior-security ticket on its own, and the salary distribution above reflects the occupation, not Vault holders specifically. Second, the actual earning effect of holding the certificate is not something BLS measures, and we will not invent a salary premium for it. Third, most of the work that justifies the top of that range — production Vault clustering, disaster recovery replication, auto-unseal design, integration with Kubernetes and cloud KMS — is examined in the separate Vault Operations Professional exam, so candidates who want the high end of the developer distribution should plan past this credential rather than stopping at it.',
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
    headline: 'HashiCorp publishes no pass rate for Vault Associate — and no official cut score either; third-party sources consistently estimate a ~70% passing threshold',
    summary:
      'The core fact is that HashiCorp does not publish pass-rate statistics for the Vault Associate exam, and it also does not publish an official cut score in its public certification materials — the exam is reported as a pass or fail, and third-party training sites consistently estimate the passing threshold at roughly 70 percent of questions correct, which is what a "700 out of 1000" framing refers to on a normalised 1,000-point scale. Because HashiCorp equates exam forms to keep difficulty constant, a raw percentage and a scaled threshold are not interchangeable, and we present 70 percent as an estimate rather than as a vendor-published number. What is published and verifiable on the official page: the exam is multiple choice, delivered online and proctored, lasts one hour, costs $70.50 USD plus local taxes, is offered in English, and carries a credential expiration of two years from the pass date. The retake policy is also documented in the HashiCorp support knowledge base: there is a seven-day wait between attempts, and the number of attempts in a year is limited. Because there is no pass rate to quote, the practical planning guidance is to treat the domain weights as the syllabus — authentication methods, policies, tokens, leases, secrets engines, encryption as a service, architecture fundamentals, deployment architecture, and access management — and to aim for sustained scores meaningfully above 70 percent on practice items, since the real exam mixes single-answer and multi-select items and the clock is only sixty minutes. Two further policy details belong in the same planning picture: the $70.50 fee includes no free retake, so a failed attempt is a full-price re-sit, and the two-year validity is renewed by retaking the current exam or by passing the Vault Operations Professional exam, which extends the Associate credential. Candidates who treat the credential as a set of applied objectives rather than a memory test, and who rehearse the one-minute-per-question clock, are preparing for the exam that actually exists rather than for a rumour of it.',
    source: {
      label: 'HashiCorp Developer — Vault Associate (003) certification page',
      url: 'https://developer.hashicorp.com/certifications/security-automation'
    },
    caveat:
      'No pass rate is published by HashiCorp, and no official cut score appears in the vendor\u2019s public materials. The ~70% threshold is a consistent third-party estimate, not a vendor figure, and the two-year validity and $70.50 fee are the officially published details this narrative relies on instead.'
  },

  studyPlan: {
    summary:
      'Plan for four to six weeks and 40 to 60 hours of study if you already work in cloud or infrastructure, or eight to ten weeks at roughly six hours a week if you are coming in cold, and spend the largest share of that time actually running Vault locally rather than reading about it. The exam is 60 minutes for 60 multiple-choice questions in a single sitting, which is the tightest time-per-question ratio of any exam in this group, so the pacing plan matters as much as the content plan. The current objectives for Vault Associate (003) group the material into nine areas — authentication methods, Vault policies, Vault tokens, leases, secrets engines, encryption as a service, architecture fundamentals, deployment architecture, and access management architecture — and every objective is written as an action ("choose an auth method based on use case", "explain orphaned tokens") which tells you the exam tests applied judgment rather than recall. The plan below runs in four blocks: fundamentals and architecture in the first two weeks, secrets engines, encryption and tokens in the middle, deployment and access management in week five, and timed rehearsal in the final week — a shape that front-loads the concepts and closes with the clock. The plan assumes you have a local Vault instance you can start, seal, unseal and break freely. If you do not, the first task on the list is to install the open-source binary and take it through the official tutorials, because a candidate who has only watched videos will struggle with the scenario items that ask you to reason through a policy or an auth method under a one-minute clock. Candidates who already operate Vault in production can compress the plan to two or three weeks, while newcomers to secrets management entirely should take the upper end of the range; either way, the exam rewards having typed the commands, so the lab is the plan.',
    totalHours: '40-60 hours over 4-8 weeks depending on experience',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Vault fundamentals and architecture',
        tasks: [
          'Install Vault locally, initialise it, capture the unseal keys and root token, and seal and unseal it repeatedly until the lifecycle is reflex',
          'Work the official Vault Associate tutorial path: auth methods, policies, tokens, leases',
          'Start and stop the dev server, understand the difference between dev mode and a real production config',
          'Set up environment variables and the VAULT_ADDR flow the exam objectives call out'
        ],
        hours: '6-8 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Secrets engines, encryption and tokens',
        tasks: [
          'Enable and use the KV v2 engine; write, read, list and delete secrets via CLI, API and UI',
          'Configure database dynamic secrets end to end so you can watch short-lived credentials get issued and revoked',
          'Use the transit engine to encrypt and decrypt, and rotate the encryption key',
          'Work service tokens versus batch tokens, TTLs, orphaned tokens and accessors — the highest-density token facts on the paper'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Deployment, access management and gaps',
        tasks: [
          'Explain cluster strategy for self-managed versus HashiCorp-managed clusters, storage backends, and Shamir sharing',
          'Cover Vault Agent and the Vault Secrets Operator, which are explicit objectives under access management',
          'Identify your weakest domain from practice-test results and re-do that section of the objectives literally',
          'Write a one-page sheet of the distinctions the exam repeats: service vs batch tokens, dynamic vs static secrets, seal vs unseal, performance vs DR replication'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Timed rehearsal',
        tasks: [
          'Two or three full 60-minute practice exams under real timing — this is where the 60-seconds-per-question clock is learned',
          'Re-lab every miss to the specific objective it came from rather than just reviewing the topic',
          'Drill the "choose the auth method" and "choose the secrets engine" scenario items, which punish guessing',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Already operating Vault in production', detail: 'Two to three weeks. Your day job covers most of objectives 1 through 6; spend the recovered time on architecture fundamentals, deployment architecture, Vault Agent and the Secrets Operator, which hands-on operators routinely under-study.' },
      { label: 'Coming from Terraform Associate or another HashiCorp exam', detail: 'Three to four weeks. The exam-style and delivery are identical, so you only need content time; concentrate on the Vault-specific token and lease model, which nothing in the Terraform syllabus covers.' },
      { label: 'No prior Vault experience', detail: 'Eight to ten weeks at 5-6 hrs/week. Front-load the local lab before any theory: install, initialise, unseal, write a policy, generate a dynamic secret, then read the objectives with the feel of the tool already in your hands.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves a Vault Associate score is "run a local Vault, reason from use cases, and rehearse the one-minute clock", and the single biggest error is reading documentation without ever issuing a token. Every objective on the current blueprint is an action verb — choose, explain, configure, differentiate — which means the exam rewards candidates who have performed the actions, not candidates who have memorised the glossary. The highest-yield habit is the local lab: install the open-source binary, initialise it, unseal it, and then deliberately exercise each objective through the CLI and UI until the token lifecycle, policy syntax and seal process are reflexive. The second proven approach is learning the "which one" scenarios: the exam repeatedly asks you to select an authentication method or a secrets engine for a stated use case, so build a decision table of when to reach for AppRole versus Kubernetes versus LDAP, and KV v2 versus database versus transit, and drill it until the distinctions are automatic. Third, use the official HashiCorp tutorials and documentation as your primary reference — they are the same material the objectives are built from, and third-party summaries drift. Fourth, practise the time discipline: sixty questions in sixty minutes is a real constraint, and candidates who treat practice exams as untimed review arrive at the test without a pacing instinct. Finally, understand that multi-select items are scored all-or-nothing, so a candidate who knows 80 percent of a question loses it entirely; when in doubt, apply the policy and least-privilege lens that runs through the whole paper.',
    items: [
      {
        title: 'Build a local Vault before touching theory',
        detail: 'Install the open-source binary, initialise it, capture the unseal keys, and work every objective through the CLI and UI. The exam\u2019s objectives are action verbs, and a candidate who has issued a token and written a policy reads scenario items differently from one who has only studied them.'
      },
      {
        title: 'Learn the "which one" decision tables',
        detail: 'The exam repeatedly asks you to choose an auth method or a secrets engine for a use case. Build and drill tables — when AppRole, when Kubernetes auth, when LDAP; when KV v2, when database, when transit — until the choice is a reflex rather than a debate.'
      },
      {
        title: 'Study the official tutorials and docs, not summaries',
        detail: 'HashiCorp\u2019s official tutorials and documentation are the source material the objectives are written from. Third-party study guides compress and occasionally misstate the token and lease model, which is the area candidates lose the most points on.'
      },
      {
        title: 'Rehearse the 60-minute clock',
        detail: 'Sixty questions in sixty minutes leaves no room to dwell. Run full timed practice exams and build the instinct to answer and move on; a flagged question returned to in the final minutes beats an unfinished paper.'
      },
      {
        title: 'Respect all-or-nothing multi-select items',
        detail: 'Multi-select questions are scored as a whole, so partial knowledge loses the entire item. When a multi-select answer is uncertain, apply the least-privilege and policy lens the exam is built around rather than selecting every plausible-sounding option.'
      },
      {
        title: 'Memorise the distinctions, not the definitions',
        detail: 'Service vs batch tokens, dynamic vs static secrets, seal vs unseal, performance vs disaster-recovery replication, Shamir sharing vs auto-unseal with cloud KMS — the paper is full of paired concepts and rewards candidates who can state what separates the two halves in one sentence.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision here is unusually simple because the vendor publishes everything you need: the official certification page, the free official tutorials, the free open-source Vault binary and a $70.50 exam. That means the cheapest competent study path is a local Vault installation plus the official tutorial track, and the only paid resources worth considering are practice exams and video courses that accelerate time to readiness for candidates who learn better by watching or who need a readiness calibration before spending the exam fee. The table below compares the main options with prices current to this review, and the honest cost ranking is: the official materials and the lab are the value core, practice exams are optional calibration, and video courses are conveniences rather than necessities. Three buying rules follow from how the exam actually works. First, because the objectives are written as action verbs and the paper is scenario-based, anything that gives you hands-on time in a real Vault environment is worth more per dollar than anything that just explains concepts. Second, the $70.50 fee is low enough that the voucher itself is rarely the financial risk — the risk is a wasted attempt followed by a seven-day wait, so the money is better spent on a practice-exam pass that tells you honestly whether you are ready than on a course that only reassures you. Third, the one thing to avoid paying for is a "braindump" or leaked-question bank: HashiCorp retires and replaces items, and memorising recycled questions trains you for a paper that no longer exists while the applied, scenario-style objectives reward genuine lab time. If you already hold Terraform Associate, the exam-style and delivery will feel familiar, which shortens the learning curve on everything except the Vault-specific content.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'HashiCorp official certification page + exam registration', values: ['$70.50 + local taxes', 'Official vendor site; online proctored via PSI', 'The exam itself and the authoritative syllabus'] },
      { label: 'HashiCorp official Vault tutorials (Associate path)', values: ['Free', 'Interactive online tutorials with live terminal', 'Learning every objective hands-on before reading about it'] },
      { label: 'Open-source Vault binary + your own machine', values: ['Free', 'Local lab', 'The single highest-value resource; a broken-and-rebuilt lab is what the exam rewards'] },
      { label: 'Practice exams (e.g. Whizlabs, ExamTopics-style sites)', values: ['~$20-60', 'Online timed exams with explanations', 'Calibrating readiness against the 60-minute, 60-question format'] },
      { label: 'Video courses (e.g. Udemy Vault Associate)', values: ['~$15-30 during sales', 'Video lectures with demonstrations', 'Candidates who learn by watching; use them to supplement, not replace, the lab'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; Udemy-style list prices are near-meaningless outside a sale and practice-question sites vary widely in quality, so confirm what you are buying and prefer vendors that cite the official objectives. The exam fee of $70.50 does not include a free retake.'
  },

  commonMistakes: {
    summary:
      'The two most damaging mistakes on Vault Associate are studying from compressed third-party summaries instead of the official materials, and never running Vault locally — the exam\u2019s applied, scenario-style objectives punish both. A third recurring error is mismanaging the 60-minute clock by spending minutes debating a single item, which is how candidates run out of time on the final stretch of a paper that gives roughly one minute per question. Candidates also routinely conflate the paired concepts the paper is built on, particularly service versus batch tokens, dynamic versus static secrets, and seal versus unseal, and the near-miss distractors are engineered to catch exactly that confusion. A fifth pattern is treating the exam as a beginner certificate: the objectives assume basic terminal skills and a working grasp of cloud or on-premises architecture, and candidates who book the seat without either arrive under-equipped for the scenario items that expect applied judgment. Finally, some candidates spend their study budget on braindump-style question banks, which train them for recycled items that HashiCorp has already retired, instead of building the policy, token and secrets reasoning the current form actually tests. The common thread across all six failures is preparing for a different exam than the one that exists: the paper rewards hands-on familiarity with the tool, precision on the paired concepts, and pace under the clock, and every mistake above is a way of avoiding one of those three demands. A candidate who runs the local lab, drills the distinctions until they are instant, and rehearses the 60-minute format has addressed the entire list at once.',
    items: [
      {
        mistake: 'Studying summaries instead of official materials',
        fix: 'The objectives are written from the official HashiCorp tutorials and documentation, and third-party guides compress and sometimes misstate the token and lease model. Use the vendor\u2019s own pages as the primary syllabus and treat third-party content as revision, not as the source of truth.'
      },
      {
        mistake: 'Never running Vault locally',
        fix: 'Every objective is an action verb — configure, choose, explain, differentiate. Install the open-source binary, initialise and unseal it, write a policy, generate a dynamic secret, and rotate a transit key. A candidate who has done these things reads scenario items entirely differently from one who has only read about them.'
      },
      {
        mistake: 'Burning the clock on single items',
        fix: 'Sixty questions in sixty minutes means about one minute per question with no slack. Mark anything you are unsure of, move on, and return only if time allows. Candidates who dwell on early items are the ones who rush the final stretch of the paper.'
      },
      {
        mistake: 'Conflating the paired concepts',
        fix: 'Service vs batch tokens, dynamic vs static secrets, seal vs unseal, performance vs DR replication, Shamir sharing vs cloud KMS auto-unseal — the exam returns to these pairs repeatedly. Practise stating what separates the two halves in one sentence until the distinction is instant.'
      },
      {
        mistake: 'Treating it as a beginner certificate',
        fix: 'The exam assumes basic terminal skills and a working grasp of cloud or on-premises architecture, and the scenario items expect applied judgment. If you have neither, add hands-on time before booking the seat — the $70.50 fee is cheap, but a wasted attempt costs a seven-day retake wait as well.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The Vault Associate exam is 60 minutes long and made up of multiple-choice questions, mixing single-answer items with multi-select items, all delivered online through a proctored PSI environment in English. The exact question count is not listed on the official page, but sixty is the figure consistently cited across public materials and matches the one-hour duration, so the pacing reality is roughly one question per minute. The paper is organised around nine objective areas — authentication methods, Vault policies, Vault tokens, Vault leases, secrets engines, encryption as a service, architecture fundamentals, deployment architecture, and access management architecture — and the dominant question style is scenario-based: a described use case followed by a choice of auth method, secrets engine, token type or operational decision. These scenario items are the reason the official objectives are written as action verbs: the exam wants you to choose between AppRole and Kubernetes auth for a workload, or between KV v2 and the transit engine for a stated need, and the distractors are usually real options that fit a slightly different scenario, so reading for the deciding condition is the skill being tested. Single-answer items make up the bulk of the paper, multi-select items are scored all-or-nothing, which makes partial knowledge expensive, and a smaller share of items test the paired-concept distinctions the syllabus repeats, such as service versus batch tokens and seal versus unseal. Because HashiCorp does not publish a score breakdown or an official cut score, the practical preparation target is to answer accurately across all nine areas rather than to chase a percentage; the samples below are editor-written illustrations of the published blueprint\u2019s question styles, not live exam items.',
    types: [
      { name: 'Single-answer scenario items', share: 'The bulk of the paper', detail: 'A described use case followed by one correct choice — which auth method, which secrets engine, which token type, which operational action. Distractors are usually real options that fit a slightly different scenario, so reading for the deciding condition is the skill being tested.' },
      { name: 'Multi-select items', share: 'A consistent minority', detail: 'The stem lists several statements or options and asks you to select all that apply; scoring is all-or-nothing, so partial knowledge loses the entire item. These cluster in policies, tokens and leases where multiple conditions are true at once.' },
      { name: 'Concept-contrast items', share: 'Common', detail: 'Direct questions on the paired concepts the blueprint repeats — service vs batch tokens, dynamic vs static secrets, seal vs unseal, Shamir sharing vs auto-unseal. They reward one-sentence precision over deep exposition.' },
      { name: 'Factual recall items', share: 'A minority', detail: 'Straight questions on lease IDs, accessors, TTL behaviour and storage backends. These are the cheapest points on the paper and are usually won by drilling the official objective list.' }
    ],
    samples: [
      {
        prompt: 'An application running in a Kubernetes cluster must authenticate to Vault without using a long-lived token or static credentials. Which authentication method fits this use case?',
        options: [
          'A. Username and password auth (userpass)',
          'B. Kubernetes auth method',
          'C. LDAP auth method',
          'D. Root token authentication'
        ],
        answer: 'B',
        explanation: 'The Kubernetes auth method is designed for exactly this case: it lets a pod authenticate through its Kubernetes service account, issuing short-lived, per-workload tokens without static credentials. A is wrong because userpass is for human users with managed usernames and passwords. C is for centralising human identity against an existing directory. D is a security anti-pattern — the root token is meant for initial setup and recovery only, never for application workloads.'
      },
      {
        prompt: 'A secrets engine must store versioned key-value data that can be written, read, listed and deleted via CLI, API and UI. Which secrets engine fits?',
        options: [
          'A. The database secrets engine',
          'B. The transit secrets engine',
          'C. The KV v2 secrets engine',
          'D. The PKI secrets engine'
        ],
        answer: 'C',
        explanation: 'KV v2 is the key-value secrets engine and supports versioning, plus read, write, list and delete operations through every interface the objective names. A is wrong because the database engine generates dynamic, short-lived credentials for database users rather than storing versioned key-value data. B is wrong because transit performs encryption as a service on data passed through Vault and stores no secrets. D is wrong because the PKI engine issues and manages certificates.'
      },
      {
        prompt: 'A Vault cluster must remain available if the primary storage backend fails, and the configuration must be kept in sync across two separate clusters in different geographic regions. Which capability addresses this?',
        options: [
          'A. Performance replication',
          'B. Disaster recovery replication',
          'C. Shamir secret sharing',
          'D. A single storage backend'
        ],
        answer: 'B',
        explanation: 'Disaster recovery replication copies encrypted data to a second cluster so it can be promoted in a regional failure, which is exactly the described requirement. A is wrong because performance replication is about scaling read throughput to local sites, not about failover. C is wrong because Shamir sharing is how unseal keys are split among operators, not a replication mechanism. D inverts the requirement — one backend is a single point of failure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The Vault Associate exam is a 60-minute, multiple-choice, online proctored test delivered through PSI, so exam day is a remote-proctoring exercise rather than a test-centre visit, and the practical preparation is mostly about your room and your machine. You must complete the system check on the exact computer, webcam, microphone and network you will use, in a private room with a closed door and a clear desk; PSI proctors require a full room scan and the space must be free of phones, smartwatches, second monitors and any printed material. Plan to begin check-in at least 15 to 30 minutes early, because the identity verification and room scan happen before the clock starts, and a proctor who cannot approve the space will not release the exam. Your 60-minute clock begins once the exam loads, and the paper is all multiple choice, so there is no whiteboard-heavy component — but pacing is everything: roughly one question per minute, mark anything uncertain, and use the final minutes to revisit flagged items. The exam is delivered in English only, and the candidate name on the registration must match the photo ID presented, so check the spelling of your name in your HashiCorp account the week before. The fee is $70.50 plus local taxes and includes no free retake, and retakes carry a seven-day wait, so a calm, tested environment is the cheapest insurance you can buy — a candidate who has rehearsed the room, the machine and the clock is far less likely to waste the fee on a proctor or connection failure. After you submit, the pass or fail result is reported through the proctoring platform, and a passed credential is valid for two years from the pass date.',
    bring: [
      'A valid, government-issued photo ID whose name matches your registration exactly',
      'The same laptop or desktop you system-tested, with webcam, microphone and a stable wired or strong wireless connection',
      'A quiet, private room with a door you can close and a clean desk surface',
      'A phone only for the check-in process if PSI requires it, then out of reach',
      'A bottle of water placed outside the immediate work area if allowed by the proctor'
    ],
    leave: [
      'Phones, smartwatches and fitness trackers — out of the room or placed far out of reach after check-in',
      'Any notes, cheat sheets, printed documentation or open browser tabs — the exam is fully closed-book',
      'Second monitors, which must be unplugged and turned away, and any other person in the room',
      'Headphones and earbuds unless medically approved, and any background audio',
      'Any exam materials or books on the desk surface'
    ],
    timeline: [
      { time: 'The week before', detail: 'Run the PSI system check on the exact machine, webcam, microphone and network you will use, and confirm your name on the registration matches your photo ID letter for letter.' },
      { time: '24 hours before', detail: 'Re-run the system check, close unneeded applications, and test your connection in the same room you will take the exam in.' },
      { time: '30 minutes before', detail: 'Begin the check-in process. Expect identity verification and a full room scan; the proctor must approve the space before the exam starts.' },
      { time: '0-10 minutes', detail: 'Answer carefully but do not dwell — the whole paper is multiple choice, and the 60-minute clock makes dwelling the main threat.' },
      { time: '10-50 minutes', detail: 'Work through the paper at roughly a minute per question, marking any item you are unsure of so you can return to it.' },
      { time: '50-60 minutes', detail: 'Return to flagged items, apply the use-case and least-privilege lens to any remaining doubts, and submit before the clock expires.' }
    ],
    rules: [
      'The exam is online and proctored via PSI; there is no test-centre delivery option for this exam.',
      '60 minutes for the paper; the clock does not stop once it starts.',
      'The exam is delivered in English only.',
      'The exam is closed-book: no external reference material, no open browser tabs, no printed notes.',
      'Multi-select items are scored all-or-nothing, so treat every option as load-bearing.',
      'Retakes require a seven-day wait between attempts, and the number of attempts in a year is limited.',
      'A passed credential is valid for two years from the pass date; renewal is by retaking the current exam or advancing to Vault Operations Professional.'
    ],
    afterwards:
      'Your pass or fail result is reported through the proctoring platform, and the credential is valid for two years from the pass date. On a pass, update your résumé and profile with the full credential name and the exam version you passed (the three-digit code on the credential), because the version tells employers which Vault product line your knowledge aligns with. HashiCorp recertification is exam-based rather than CEU-based: you renew by passing the current Vault Associate exam within six months before expiry, or by passing the Vault Operations Professional exam, which extends the Associate credential while adding a professional-level badge. On a fail, respect the seven-day retake wait and use it properly: take the score context you have, re-run the specific objective areas you know were weak in your practice results, and re-sit — the $70.50 fee makes this the cheapest retake economics of any exam on this site, which is all the more reason not to burn attempts on unprepared sittings.'
  }
};

export default data;
