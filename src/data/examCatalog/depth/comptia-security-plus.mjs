// Depth content for: comptia-security-plus
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam code, fees, scoring, retake rules and renewal terms were taken from CompTIA’s current Security+ certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics has no occupation literally called "Security+ holder", and no government wage series tracks a certificate, so any salary page that attributes a figure to the certification itself is quoting a job-board aggregate rather than official data. The closest official occupation to the role Security+ prepares you for is Information Security Analysts, SOC 15-1212, and we have used it deliberately: Security+ is the baseline DoD 8570 compliance credential for many security roles, and the analyst occupation is where its holders most often land. That occupation had a May 2024 median annual wage of $124,910, with the lowest 10 percent under $69,660 and the highest 10 percent over $186,420. The spread is worth reading because Security+ sits at the entry of a steep curve: a first analyst or compliance role lands toward the lower end, while the same credential paired with a few years of operations experience and a higher cert moves you decisively toward the top decile. The occupational tailwind here is the strongest of any exam covered on this site and should be stated plainly. BLS projects 29 percent growth for information security analysts from 2024 to 2034 — far faster than the average for all occupations — with about 16,000 openings a year arising from both growth and replacement. The driver is not abstract: every organisation that stores data and faces a regulatory regime now carries a security headcount, and the federal 8570 / 8140 directive that names Security+ as an approved baseline for many contractor and military roles keeps demand structurally high. What the median does not capture is geography and clearance: a cleared analyst in a high-cost region sits well above the national median, and Security+ is frequently the gate to those cleared roles. We have not quoted a job-board aggregate here because it does not isolate Security+ holders and would not be comparable to the BLS figure.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 ($60.05/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $69,660', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $186,420', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '182,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~16,000 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+29% projected change 2024-34 (much faster than average), with ~16,000 openings a year; DoD 8570/8140 baseline compliance keeps structural demand high',
    source: {
      label: 'BLS Occupational Outlook Handbook — Information Security Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'CompTIA publishes no pass rate — but it does publish the passing score: 750 out of 900',
    summary:
      'CompTIA does not release pass-rate statistics for Security+ or any of its certifications, and it never has. Unlike Cisco, however, it does publish the cut score, and understanding what that number means is more useful than any rumoured pass rate. SY0-701 is scored on a scale of 100 to 900 and you need 750. That is not 83 percent of the questions. CompTIA equates every exam form so that a harder set of items demands the same underlying ability as an easier one, and performance-based questions carry more weight than a single multiple-choice item, so the raw-to-scaled conversion is not linear and cannot be reverse-engineered. Candidates who aim for "83 percent on practice tests" are using a heuristic that does not map onto the scoring model; aim instead to be able to complete every performance-based task type unaided. Two documented policies matter more than a pass rate. First, retakes: CompTIA imposes no waiting period between your first and second attempt, so a narrow fail can be re-sat almost immediately, but from the third attempt onward you must wait 14 calendar days between sittings, and every attempt is paid at full price unless you bought a retake bundle. Second, the score report: unlike Cisco, CompTIA gives you the outcome and your scaled score on screen the moment you finish, plus a printed report showing relative performance by domain, which is genuinely diagnostic. That report turns a failed attempt into an actionable study plan rather than guesswork, and it is the single biggest administrative advantage Security+ has over the Cisco exams on this site.',
    source: {
      label: 'CompTIA — Security+ exam scoring and retake policies',
      url: 'https://www.comptia.org/en-us/certifications/security/'
    },
    caveat:
      'No pass rate is published by CompTIA, by Pearson VUE, or by the accreditation that Security+ carries. We have deliberately left the pass-rate table empty. What is published and verifiable is the 750/900 cut score and the retake schedule, which is what the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The first thing to establish is which exam you are actually studying for. The current version is SY0-701, the seventh iteration of Security+, which launched on 7 November 2023. CompTIA typically retires an exam version about three years after launch, so SY0-701 is expected to be retired around late 2026; a next version (widely referred to as SY0-801) was in development as of our review, but its exact preview and general-availability dates were not finalised and should be confirmed at the CompTIA site before you commit to a study window. Do not buy material for an older version — and note that SY0-601 was retired earlier and any SY0-601 book still on sale is now superseded. The current SY0-701 domain weightings are General Security Concepts 12 percent, Threats, Vulnerabilities and Mitigations 22 percent, Security Architecture 18 percent, Security Operations 28 percent, and Security Program Management and Oversight 20 percent. Notice that Security Operations and Program Management together are 48 percent of the paper — this is an operations and governance exam more than a hacker exam, and candidates who over-index on offensive tooling misread it. The plan below runs eight weeks at roughly 10-12 hours a week and assumes you have a way to run a couple of virtual machines so the performance-based items are not your first taste of a real tool. If you have never touched a hypervisor, sort that out before Week 1; Security+ has performance-based questions that put you in front of a tool, and reading about a port scan is not the same as running one.',
    totalHours: '80-110 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Domain 1 — General Security Concepts (12%)',
        tasks: [
          'CIA triad, non-repudiation, and the difference between confidentiality, integrity and availability in practice',
          'Authentication, authorisation and accounting; the factor types and what makes a strong MFA design',
          'Security frameworks and control types — prevent, detect, respond, and the difference between a control and a framework',
          'Zero trust, supply-chain and the vocabulary CompTIA expects you to use precisely'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Domain 2 — Threats, Vulnerabilities and Mitigations (22%)',
        tasks: [
          'Threat actors and their motivations, attack vectors, and the kill chain / MITRE ATT&CK framing',
          'Common vulnerabilities — injection, XSS, overflows — at a conceptual level, and how each is mitigated',
          'Malware categories and social-engineering types, and the controls that counter each',
          'Vulnerability scanning versus penetration testing, and the basics of a risk assessment'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Domain 3 — Security Architecture (18%)',
        tasks: [
          'Security architectures for networks, cloud and on-prem, and the differences between IaaS, PaaS and SaaS responsibilities',
          'Key management, PKI, certificates and the trust models behind them',
          'Secure application development concepts and the secure-by-design vocabulary',
          'Physical security controls and the human-side controls around them'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domain 4 — Security Operations (28%)',
        tasks: [
          'Monitoring with logs, SIEM, SOAR and the difference between them',
          'Incident response: the lifecycle from identification through eradication and lessons learned',
          'Digital forensics basics and evidence handling',
          'Vulnerability management and the hands-on tools — run an actual scan and read the output in your lab'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Domain 5 — Security Program Management & Oversight (20%)',
        tasks: [
          'Governance, risk and compliance: policies, standards, laws and regulations',
          'Third-party risk, vendor assessment and the shared-responsibility model',
          'Security awareness training and the human element as a control',
          'Business continuity, disaster recovery and the difference between the two plans'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Performance-based rehearsal and timed exams',
        tasks: [
          'Timed tasks with real tools: read a PCAP, configure a firewall rule, match a control to a framework',
          'Three full 90-minute practice exams weighted to the five current domains',
          'Re-lab every miss rather than re-reading the explanation',
          'Final pass over the operations and program-management domains, which together are 48 percent of the paper'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Working in IT or help-desk already', detail: 'Five to six weeks. Your operations background covers much of Domain 4; spend the recovered time on governance and architecture, which working technicians routinely under-read because they live in the operations layer.' },
      { label: 'Career changer with no IT background', detail: 'Ten to twelve weeks at 8 hrs/week. Add two weeks before Week 1 on pure terminology — the exam assumes you know what a port and a protocol are. The concepts are learnable; the vocabulary density is the early wall.' },
      { label: 'Holding an older Security+ (SY0-501/601)', detail: 'Three to four weeks, mainly a delta read. The newer versions reweighted toward operations and governance and added zero-trust and supply-chain material. Skip the fundamentals and work the changed weighting hard.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Security+ is broader than it is deep, and the mistake most candidates make is treating it like a technical deep-dive. It is a compliance and operations vocabulary exam with a performance-based layer, not an offensive-security practical. Study the words the way the exam uses them, and practise the handful of tools it actually puts in front of you.',
    items: [
      {
        title: 'Learn the vocabulary at exam precision',
        detail: 'Security+ lives or dies on control types, framework names and the exact meaning of terms like non-repudiation, least privilege and defense in depth. Distractors in the multiple choice are usually real terms used in the wrong place, so fuzzy definitions cost points. Build a one-page glossary from the objectives and drill it weekly.'
      },
      {
        title: 'Weight your time to Operations and Program Management',
        detail: 'Domains 4 and 5 together are 48 percent of SY0-701. Candidates who spend weeks on offensive tooling misread the exam — it is an operations and governance test. Give incident response, monitoring, GRC and continuity planning the largest share of your hours, not the hacking lab.'
      },
      {
        title: 'Get hands-on with the few tools it actually tests',
        detail: 'The performance-based questions put you in front of a real tool — a scanner, a firewall interface, a packet capture. Run an actual vulnerability scan in your lab, open a PCAP in Wireshark, and configure a rule in a firewall. Reading about these is not the same as doing them under a clock, and PBQs carry more weight than a single multiple-choice item.'
      },
      {
        title: 'Practise with man pages and the tool only',
        detail: 'The performance-based environment gives you the tool and its built-in help — no browser, no search. For the last two weeks, ban search engines while doing the PBQ-style tasks and force yourself through the tool’s own interface. You will be slower for a week and much faster on exam day.'
      },
      {
        title: 'Do the PBQs last, and know that you can',
        detail: 'CompTIA front-loads performance-based questions but lets you skip them and return — the opposite of the Cisco exams. Mark every PBQ, clear the multiple choice at a fast tempo, then come back with the remaining time divided by the number of tasks. Candidates who work in presented order burn forty minutes on the first two PBQs and rush the rest.'
      },
      {
        title: 'Confirm you are on SY0-701 before buying anything',
        detail: 'SY0-601 material is retired and still on sale; a SY0-701 book with the right revision is what you need. And watch the clock: SY0-701 is expected to retire around three years after its November 2023 launch, with a successor in development, so do not start a long study plan on a version you cannot sit before it retires.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision is which version, then whether to pay for CompTIA’s own bundles that add labs and a retake to the voucher. SY0-601 material is still widely listed and still ranks in search; anything you buy must say SY0-701. The voucher price is the firm reference point — about $439 at the US list in 2026, with a retake-assurance bundle around $579 — and resellers and sales move the effective price.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam voucher (SY0-701)', values: ['~$439 US list; resellers and promotions vary', 'Pearson VUE, test centre or online', 'Required — buy the voucher alone if you already have a lab'] },
      { label: 'CompTIA CertMaster bundles (Perform + Practice)', values: ['Bundle pricing at the CompTIA Store; includes voucher and often a retake', 'eLearning with labs plus adaptive practice', 'Candidates with no lab of their own and no employer training budget'] },
      { label: 'Your own VMs — a scanner and a firewall in VirtualBox', values: ['Free', 'Self-built lab', 'The most valuable resource for the performance-based items'] },
      { label: 'Jason Dion Security+ course and tests (Udemy)', values: ['~$15-30 during Udemy sales', 'Video plus timed practice exams', 'A complete, affordable path with readiness checks'] },
      { label: 'CompTIA Security+ Study Guide (Sybex)', values: ['~$50-60 list', 'Print + eBook with online test bank', 'A single ordered reference — confirm the SY0-701 edition'] },
      { label: 'Professor Messer SY0-701 videos and notes', values: ['Free videos; low-cost notes and practice', 'Video with downloadable notes', 'A zero-cost complete path, widely used by first-timers'] },
      { label: 'TryHackMe / CyberDefenders labs', values: ['Free tier plus paid plans', 'Browser-based hands-on labs', 'Real tool practice for the PBQ layer'], } 
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the ~$439 voucher is CompTIA’s US list and the firm reference, while Udemy and bundle prices swing with promotion. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most Security+ failures come from misreading the exam as a technical deep-dive, studying a retired version, or mismanaging a 90-minute clock against performance-based tasks. The version trap here is live: SY0-601 is retired and SY0-701 has a retirement window on the horizon.',
    items: [
      {
        mistake: 'Studying SY0-601 or older material for an SY0-701 exam',
        fix: 'SY0-701 launched 7 November 2023 with reweighted domains — Operations at 28 percent and Program Management at 20 percent are the heaviest — and added zero-trust and supply-chain emphasis. SY0-601 books are retired and still on sale. Check for "SY0-701" on the cover, and remember the version is expected to retire around three years after launch, so plan your sitting before that window.'
      },
      {
        mistake: 'Over-investing in offensive tooling',
        fix: 'Security+ is an operations and governance exam, not a pentest practical. Domains 4 and 5 are 48 percent of the paper. Candidates who spend weeks in a hacking lab and skim GRC and incident response lose more points than they gain. Balance your hours toward operations and oversight.'
      },
      {
        mistake: 'Preparing only with multiple-choice practice tests',
        fix: 'The performance-based questions put you in front of a real tool and carry more weight than a single multiple-choice item. A candidate who scores 90 percent on a question bank but has never opened a PCAP or configured a firewall rule under a clock is not ready. Convert study time into real-tool tasks.'
      },
      {
        mistake: 'Using fuzzy definitions of security terms',
        fix: 'The multiple choice punishes imprecise vocabulary: a real control name used in the wrong category is the standard distractor. Know the exact differences between prevention, detection and response controls, between a framework and a control, and between the CIA properties. A tight glossary beats re-reading chapters.'
      },
      {
        mistake: 'Spending the first forty minutes on the performance-based questions',
        fix: 'CompTIA presents PBQs early but allows you to skip and return — unlike the Cisco exams. Skip them on the first pass, clear the multiple choice quickly, then allocate the remaining time across the PBQs. Candidates who work in presented order run out of clock on the bulk of the paper.'
      },
      {
        mistake: 'Forgetting the certification expires and the retake clock',
        fix: 'Security+ is a CompTIA CE certification, valid for three years, renewed with 50 continuing-education units plus the annual CE fee (about $150 over the cycle). Also remember the retake rule: no wait between attempts one and two, but a 14-day wait from the third attempt, each paid unless you bought a retake bundle. Diary the expiry the week you pass.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'A maximum of 90 questions in 90 minutes, in English, scored on a 100-900 scale with a 750 cut. The paper mixes multiple choice — single-answer and multiple-response — with performance-based questions that put you in front of a tool or a simulated environment and ask you to complete a task. PBQs are typically presented at the start and weighted more heavily than individual multiple-choice items, but you may skip them and return, so the presented order is not the order you should work in. The five current domains are General Security Concepts (12%), Threats, Vulnerabilities and Mitigations (22%), Security Architecture (18%), Security Operations (28%) and Security Program Management and Oversight (20%). Because CompTIA equates forms, your scaled score is not a percentage of items correct and cannot be converted into one — which is why we have not quoted a pass rate. The practical implication for pacing is simple: multiple-choice items should average well under a minute so the PBQs, which can consume several minutes each, have time to breathe.',
    types: [
      { name: 'Performance-based questions (PBQs)', share: 'A small number of items carrying disproportionate weight', detail: 'A simulated tool or environment with a task to complete — match a control to a framework, configure a firewall rule, read a packet capture. Only the tool and built-in help are available. Skippable and returnable, the key tactical difference from a Cisco exam.' },
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Concept discrimination and vocabulary precision. Distractors are usually real terms used in the wrong place, so fuzzy definitions are punished.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'The stem states how many to select and scoring is all-or-nothing. Common where several controls together meet a requirement.' },
      { name: 'Scenario-based multiple choice', share: 'Heaviest in Operations and Program Management', detail: 'A described incident or governance situation asking for the next step or the correct control. These reward knowing the lifecycle and frameworks rather than pattern-matching.' }
    ],
    samples: [
      {
        prompt: 'An organisation wants to ensure that a message received over an untrusted network can be proven to have originated from the claimed sender and has not been altered in transit. Which security property does a digital signature primarily provide?',
        options: [
          'A. Confidentiality',
          'B. Non-repudiation and integrity',
          'C. Availability',
          'D. Obfuscation'
        ],
        answer: 'B',
        explanation: 'A digital signature is created with the sender’s private key and verified with the public key, which proves the sender possessed the private key (non-repudiation — the sender cannot later deny having signed it) and, because the signature is over a hash of the message, that the content was not altered (integrity). A is wrong: confidentiality comes from encryption with the recipient’s key, not a signature. C is availability, which a signature does nothing for. D is not a security property in this sense. The exam repeatedly tests whether you can separate these CIA-adjacent properties precisely.'
      },
      {
        prompt: 'During an incident, an analyst discovers a workstation exhibiting strange outbound traffic. According to a standard incident-response lifecycle, what is the correct first action after the incident has been detected and confirmed?',
        options: [
          'A. Eradication of the malware and recovery of the system',
          'B. Containment of the affected system to limit spread',
          'C. Lessons learned and reporting to management',
          'D. Permanent deletion of all logs on the host'
        ],
        answer: 'B',
        explanation: 'A standard incident-response lifecycle runs identification, containment, eradication, recovery, and lessons learned (with the NIST framing adding analysis). Once an incident is confirmed, the immediate priority is containment — isolating the affected system to stop spread — before eradication and recovery. A jumps to eradication before the blast radius is controlled. C is the final phase, not the first. D is actively harmful: destroying logs destroys evidence and is the opposite of sound response. The exam rewards knowing the sequence, not just the terms.'
      },
      {
        prompt: 'A company is moving from an on-premises email server to a cloud service where the provider manages the mail application, operating system and infrastructure, while the company manages its own mailboxes, users and data. Which cloud service model best describes this?',
        options: [
          'A. Infrastructure as a Service (IaaS)',
          'B. Platform as a Service (PaaS)',
          'C. Software as a Service (SaaS)',
          'D. Function as a Service (FaaS)'
        ],
        answer: 'C',
        explanation: 'In SaaS the provider runs the application and the customer simply consumes it and manages its own data and users — exactly the shared-responsibility split described. A (IaaS) would leave the customer managing the OS and application too. B (PaaS) gives the customer a runtime to deploy code into, not a finished application. D is a serverless subset of PaaS. The shared-responsibility model and these three acronyms are tested heavily in the Architecture domain, and the exam expects you to place each party’s obligations precisely.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Ninety minutes, up to 90 questions, delivered through Pearson VUE either at a test centre or online with OnVUE proctoring. Two things about a CompTIA exam day differ sharply from the Cisco exams and both are in your favour. First, you can navigate: performance-based questions are presented early and you are permitted to skip them and return, and you can review and change multiple-choice answers before submitting. Build your pacing around that — mark every PBQ, sweep the multiple choice at a brisk tempo, then divide what remains across the outstanding tasks. Second, you get your result immediately. The scaled score appears on screen the moment you submit, and you receive a score report showing relative performance by domain, which is genuinely diagnostic if you have to come back. The administrative trap is identical across vendors: CompTIA requires two forms of identification, one a government-issued photo ID, with the name matching your CompTIA account exactly. Check your account spelling the week before, because correcting it on the day is not possible and the seat is lost.',
    bring: [
      'Two forms of identification, both unexpired, with names matching your CompTIA account exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit card or bank card is usually accepted)',
      'Your CompTIA ID, in case check-in cannot locate the booking',
      'For OnVUE: a phone for check-in photographs, a completely clear desk, and a private room with a door you can close',
      'For OnVUE: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, cheat sheets and printed reference cards',
      'Your own paper and pens; a test centre issues an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for OnVUE, and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Log into your CompTIA account and confirm your name is spelled exactly as it appears on your ID. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for photographs of your face, both IDs and the whole room.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the five domain weights and the CIA properties plus the IR lifecycle on the noteboard. Two minutes here buys back far more later.' },
      { time: '0-5 minutes', detail: 'Work through the opening PBQs only far enough to see what each asks, then skip them all. Do not start yet.' },
      { time: '5-55 minutes', detail: 'Sweep the multiple-choice items at pace. Answer everything; flag anything unsure rather than dwelling, because you can review later.' },
      { time: '55-85 minutes', detail: 'Return to the PBQs with a known time budget. Divide the remaining minutes by the number of tasks and hold to it — a partial task can still earn credit, an untouched one cannot.' },
      { time: '85-90 minutes', detail: 'Review flagged multiple-choice items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      'Navigation is permitted: you may skip performance-based questions and return, and review multiple-choice answers before submitting.',
      'Passing score is 750 on a 100-900 scale; it is not a percentage of items correct.',
      'Two forms of ID are required, one government-issued with photo, names matching your CompTIA account exactly.',
      'No scheduled breaks in a 90-minute exam, and the clock does not stop if you leave.',
      'Erasable noteboard only at a test centre; OnVUE candidates get a digital whiteboard and no physical writing materials.',
      'Inside a PBQ you have only the tool and its on-system help — no browser, no external reference.',
      'No waiting period between your first and second attempt; from the third attempt onward you must wait 14 calendar days, and each attempt is paid unless you bought a retake bundle.'
    ],
    afterwards:
      'Your pass or fail and your scaled score appear on screen the instant you submit, and you leave a test centre with a printed score report showing how you performed relative to each of the five domains. That report is the most useful artefact any of these exams produces, so read it properly rather than filing it. On a pass, your certification appears in your CompTIA account within a few days and you can claim the digital badge and download the certificate; Security+ is valid for three years under the CompTIA Continuing Education programme, renewed with 50 CEUs plus the CE fee (about $150 over the cycle), or automatically by passing a higher-level CompTIA or approved certification. Log the expiry date immediately. On a fail, resist booking the immediate retake the no-waiting-period policy makes possible. Take the domain breakdown, identify the one or two areas that dragged the scaled score down — usually Operations or Program Management — and spend a fortnight on those specifically. The score report tells you precisely where to aim, which is a luxury a Cisco candidate does not get, and wasting it by re-sitting on the same knowledge is how a $439 voucher becomes an $878 one.'
  }
};

export default data;
