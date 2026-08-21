// Depth content for: cisco-ccnp-data-center
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Cisco professional-level exams are revised on a published cycle, so we track the current exam version by its official exam code and revision number — the single most common way candidates waste money here is studying a superseded blueprint. Exam fees, durations, question formats, prerequisites and retake rules come from Cisco\u2019s own certification pages and the official exam-topics pages on the Cisco Learning Network. Cisco does not publish pass rates or numeric passing scores for these exams and reports results as pass or fail, which we state plainly. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the official Cisco Learning Network exam-topics page for 350-601 DCCOR v1.2, the Cisco CCNP Data Center certification pages, the Cisco recertification policy, and the BLS OOH Computer Network Architects page (SOC 15-1241, May 2024).',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$130,390 median for computer network architects (BLS SOC 15-1241, May 2024), the closest official series to the data-center engineering roles CCNP Data Center supports',
    summary:
      "CCNP Data Center pays through the network-infrastructure job market, and the closest official BLS figure is the May 2024 median annual wage of $130,390 for SOC 15-1241 Computer Network Architects — BLS has no occupation literally called 'data center engineer', so we cite the architect series for this credential and say plainly that the fit is partial rather than exact. The lowest 10 percent in that occupation earned less than $79,520 and the highest 10 percent earned more than $198,030 in May 2024, a very wide spread driven by seniority, employer and location far more than by any certificate. BLS counted 179,200 computer-network-architect jobs in 2024 and projects 12 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 11,200 openings a year, most of them replacement demand. Three caveats anchor the picture. First, BLS classifies by job duties rather than by certification, so the series includes architects without a CCNP and excludes CCNP holders working under other titles, which means the credential’s specific wage premium cannot be read off this page. Second, CCNP Data Center is a specialist credential for data-center and infrastructure engineers, and the relevant comparison for a holder is typically the data-center-engineering salary band rather than the architect median; employer listings rather than BLS set any premium for the data-center concentration specifically. Third, the certificate gates nothing legally — unlike a state license it is an employer-recognized credential, so its value is realized through hiring, specialization and promotion decisions. For a candidate asking whether CCNP Data Center pays, the direct answer is that it certifies skills inside a job family with a $130,390 national median and double-digit projected growth, and the Nexus, UCS, storage and ACI technologies in the blueprint are exactly the infrastructure employers are modernizing as workloads move between data centers and the cloud.",
    rows: [
      { label: 'Median annual wage, computer network architects', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1241, $62.69/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $79,520', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $198,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '179,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~11,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement demand' }
    ],
    growth: '+12% projected change 2024-34 (much faster than average), with about 11,200 openings a year; data-center infrastructure and cloud integration are the skills employers are modernizing fastest',
    source: {
      label: 'BLS Occupational Outlook Handbook - Computer Network Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm'
    }
  },

  passRate: {
    headline: 'Cisco publishes no pass rate and no numeric passing score for CCNP Data Center — results are pass or fail, reported online within 48 hours',
    summary:
      "Cisco publishes no pass-rate statistics for CCNP Data Center or any of its certification exams, and the current official exam-topics page for the core does not list a numeric passing score either — candidates get a pass or fail result online, typically within 48 hours, and any percentage circulating on forums or third-party sites is a private estimate, not Cisco data. What Cisco does publish is the full structure of the credential: CCNP Data Center requires passing two exams, a core and one concentration of your choice. The core is 350-601 DCCOR, Implementing and Operating Cisco Data Center Core Technologies, a 120-minute, $400 exam available in English and Japanese, while the concentrations — 300-610 DCID for design, 300-615 DCIT for troubleshooting, 300-620 DCACI for ACI, 300-625 DCSAN for storage networking, 300-630 DCACIA for advanced ACI, and 300-635 DCAUTO for automation — are each 90-minute, $300 exams. The official DCCOR v1.2 topics page lists the question mix as performance-based questions, multiple choice and drag-and-drop, with domain weightings of 25 percent network, 25 percent compute, 20 percent storage network, 15 percent automation and artificial intelligence, and 15 percent security. Two things matter more than a pass rate. First, Cisco states there are no formal prerequisites, so the exam is gated by knowledge rather than by a prior certificate, and Cisco recommends three to five years of relevant experience. Second, the retake rules are published: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days. The honest reading is that CCNP Data Center is a two-exam, roughly $700 commitment with no official pass-rate information, so readiness is best judged by timed practice on performance-based items rather than by any claimed pass percentage.",
    source: {
      label: 'Cisco Learning Network - 350-601 DCCOR exam topics',
      url: 'https://learningnetwork.cisco.com/s/dccor-exam-topics'
    },
    caveat: 'Cisco publishes no pass rates and no numeric passing scores for CCNP exams; results are pass or fail, reported online within 48 hours. Any percentage quoted online is a private estimate, not an official figure.'
  },

  studyPlan: {
    summary:
      "CCNP Data Center is two exams — the 350-601 DCCOR core and one concentration — and the efficient plan runs 16 to 20 weeks at 10 to 14 hours a week, roughly 180 to 240 hours in total, with the core consuming about 60 percent of the time because it is the 120-minute, $400 exam covering the broadest ground. The two exams are sequential in practice: most candidates pass the core first, since DCCOR v1.2 covers network, compute, storage network, automation and AI, and security, and the concentration then deepens one area — ACI with DCACI, storage with DCSAN, troubleshooting with DCIT, design with DCID, or automation with DCAUTO. Weeks one through four cover the network domain: routing protocols such as OSPF and MP-BGP, switching with RSTP and vPC, overlay protocols such as VXLAN EVPN, and ACI concepts. Weeks five through eight work the compute domain in depth — UCS rack and blade servers, UCS-X in Intersight Managed Mode, server pools, boot policies and firmware — which is 25 percent of the paper. Weeks nine through eleven cover the storage network domain: Fibre Channel, zoning, VSANs, NPV and NPIV, and network storage systems such as NFS and iSCSI. Weeks twelve through fourteen cover automation and AI, and security, including EEM, Python on NX-OS, Ansible, ACI contracts and microsegmentation. Weeks fifteen through seventeen are full timed practice exams at the real formats — 120 minutes for the core and 90 minutes for the concentration — with a miss log driving final gap-closing. Candidates with strong data-center experience can compress to twelve weeks, spending recovered time in a lab on UCS, Nexus and ACI configuration rather than on concept review; candidates coming from campus networking should add four weeks of data-center concepts before the core. The plan’s anchor is the lab: UCS setup, Fibre Channel zoning, VXLAN EVPN and ACI are hands-on skills, and candidates who configure them rather than read about them finish the performance-based questions inside the clock.",
    totalHours: '180-240 hours over 16-20 weeks',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Network domain (25%)', tasks: ['Cover routing protocols: OSPFv2/v3, MP-BGP, PIM and FHRP', 'Study switching with RSTP+, LACP and vPC, and overlay protocols such as VXLAN EVPN', 'Apply ACI concepts: fabric setup, access policies and VMM', 'Practise analyzing packet flow and implementing network configuration management'], hours: '11-14 hrs/week' },
      { label: 'Weeks 5-8', focus: 'Compute domain (25%)', tasks: ['Implement UCS rack servers and blade chassis: initial setup, VLANs, pools and policies, templates and QoS', 'Configure server management: server pools, boot policies, SAN connectivity and Fibre Channel zoning', 'Describe UCS-X in Intersight Managed Mode and the impact of firmware and software updates', 'Practise compute configuration management with backup and restore, and monitoring with Cisco Intersight'], hours: '12-14 hrs/week' },
      { label: 'Weeks 9-11', focus: 'Storage network domain (20%)', tasks: ['Implement Fibre Channel: fabric initialization, port channels, zoning, FCNS, device aliases, NPV and NPIV', 'Configure and explain VSANs, and describe NFS and iSCSI network storage systems', 'Understand disruptive and nondisruptive software updates and EPLDs'], hours: '11-13 hrs/week' },
      { label: 'Weeks 12-14', focus: 'Automation, AI and security (15% + 15%)', tasks: ['Implement automation tools: EEM, scheduler, bash and guest shell on NX-OS, REST APIs and on-box Python', 'Evaluate Ansible, Python, POAP, Terraform CLI and Intersight for orchestration', 'Apply security: AAA and RBAC, ACI contracts and microsegmentation, keychain authentication and MACsec', 'Describe AI-enabling technologies in data-center infrastructure'], hours: '12-14 hrs/week' },
      { label: 'Weeks 15-17', focus: 'Timed practice exams and gap closing', tasks: ['Take timed practice sittings at the real durations: 120 minutes for the core, 90 minutes for your chosen concentration', 'Re-drill the miss log by domain until clean', 'Book the core and the concentration with the five-day retake rule and your schedule in mind'], hours: '10-12 hrs/week' }
    ],
    variants: [
      { label: 'Strong data-center background', detail: 'Compress to 12 weeks. Spend recovered time on the automation and AI domain, which is the newest 15% of the DCCOR paper and the area most operators from classic Nexus shops know least.' },
      { label: 'Coming from campus networking', detail: 'Add four weeks of data-center concepts — UCS, Fibre Channel, ACI — before the core. The exam assumes data-center vocabulary that campus routing and switching does not cover.' },
      { label: 'Choosing a concentration early', detail: 'Pick the concentration in week 12 based on your work: DCACI for ACI depth, DCSAN for storage, DCIT for operations, DCAUTO for programmability. A lab built around your choice doubles as core practice.' }
    ]
  },

  prepStrategies: {
    summary:
      "Five tactics drive most of the score gains on CCNP Data Center, and they all follow from one fact: Cisco reports results as pass or fail without publishing a passing score, so the only reliable readiness signal is how you perform on timed, performance-based practice — not how many multiple-choice questions you can answer from memory. First, build the published exam topics into a lab plan before studying: the DCCOR v1.2 weightings of 25 percent network, 25 percent compute, 20 percent storage network, 15 percent automation and AI, and 15 percent security tell you exactly where hours belong. Second, configure rather than read. The exam’s stated question mix includes performance-based items, and the blueprint names specific objects — UCS pools and policies, Fibre Channel zones, VSANs, VXLAN EVPN, ACI contracts — so a lab where you build a UCS chassis, zone a fabric and spin up an ACI fabric is the highest-yield study investment. Third, drill the storage network domain seriously, because Fibre Channel zoning, VSANs, NPV and NPIV are concepts that campus-network candidates have never seen, and the 20 percent weight punishes that blind spot specifically. Fourth, cover the automation and AI domain even if you have never written an NX-OS script: EEM, guest shell, on-box Python, REST APIs, Ansible and Terraform are scored content, and the AI-enabling technologies items are new to the current version. Fifth, use timed practice exams with performance-based simulations and log every miss by domain, because the 120-minute core and 90-minute concentration formats reward pacing discipline, and the pass-fail result means you cannot see a score to learn from. Plan the certification as two paid seats — about $400 for the core and $300 for the concentration — and use the published retake rules, including the five-calendar-day wait after a failed attempt, to time when you sit.",
    items: [
      { title: 'Build the exam topics into a weighting-aware schedule', detail: 'DCCOR v1.2 publishes weights: 25% network, 25% compute, 20% storage network, 15% automation and AI, and 15% security. Allocate hours in those proportions.' },
      { title: 'Configure in a lab rather than reading', detail: 'The exam includes performance-based items. Build a UCS chassis, zone a Fibre Channel fabric, and configure VXLAN EVPN and ACI in a lab; the blueprint names the exact objects.' },
      { title: 'Drill the storage network domain', detail: 'Fibre Channel, zoning, VSANs, NPV and NPIV are 20% of the paper and unfamiliar to most campus-network candidates. Study them as scored content, not an appendix.' },
      { title: 'Cover the automation and AI domain', detail: 'Automation and AI is 15% of DCCOR, covering EEM, guest shell, on-box Python, REST APIs, Ansible, Terraform and AI-enabling infrastructure. Treat it as scored content.' },
      { title: 'Train with timed, performance-based simulations', detail: 'With no passing score published and a pass-or-fail result, readiness is judged by finishing tasks inside 120 minutes (core) or 90 minutes (concentration). Log every miss by domain.' }
    ]
  },

  resourceComparison: {
    summary:
      "The buying logic for CCNP Data Center is anchored by the fact that Cisco publishes the official exam topics for free — the DCCOR v1.2 topics page is the definitive scope map — so the first resource every candidate needs costs nothing, and no paid product can claim to define the blueprint better than Cisco’s own documents. The exam seats themselves are the biggest line item: the 350-601 core costs $400 and each concentration costs $300, both paid to Pearson VUE at scheduling, and retakes are full price with a five-calendar-day wait after a failure. Beyond Cisco’s free topics, the market splits into three tiers. Cisco’s own paid training — Cisco U. learning paths, the official courses and practice tests — typically runs several hundred dollars and is the closest match to the exam style, including performance-based questions. Cisco Press books for data center, such as the official cert guides for DCCOR and the concentrations, are usually $50 to $70 and are strongest for the UCS, storage and ACI fundamentals. Third-party question banks from providers such as Boson and Pearson, typically $100 to $150, are the best timed-readiness check because they simulate the performance-based item mix, and the ones that explicitly track the current exam version are the ones to choose. A lab — Cisco Modeling Labs, the DevNet sandbox, or virtual UCS and Nexus environments — is worth more than any course for a performance-based exam, because the blueprint names objects you must actually configure. Prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission; confirm the current price on the Cisco and Pearson VUE pages before buying.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco exam-topics PDF (350-601 DCCOR v1.2)', values: ['Free', 'Official PDF on the Cisco Learning Network', 'The definitive scope map; download before buying anything'], note: '' },
      { label: 'Core exam seat: 350-601 DCCOR', values: ['$400', 'Pearson VUE, 120 minutes', 'Required for CCNP Data Center'], note: '' },
      { label: 'Concentration exam seat (e.g. 300-620 DCACI, 300-625 DCSAN)', values: ['$300', 'Pearson VUE, 90 minutes', 'Required for CCNP Data Center'], note: '' },
      { label: 'Cisco U. training paths and practice tests', values: ['~$300-800 depending on path', 'Guided learning with labs and assessments', 'Candidates who want vendor-style performance items'], note: '' },
      { label: 'Cisco Press official cert guides', values: ['~$50-70', 'Print + ebook', 'UCS, storage and ACI fundamentals'], note: '' },
      { label: 'Third-party question banks (e.g. Boson ExSim, Pearson Practice Test)', values: ['~$100-150', 'Timed simulations', 'Readiness checks with performance-based items'], note: '' },
      { label: 'Labs: Cisco Modeling Labs, DevNet sandboxes, virtual UCS/Nexus', values: ['Free sandbox; CML tiers vary', 'Hands-on environments', 'Configuring UCS, zoning, VXLAN EVPN and ACI'], note: '' }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The $400 core and $300 concentration fees are Cisco\u2019s published prices; prep-product list prices change frequently, so confirm at the source before buying. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      "The five most common mistakes on CCNP Data Center are all process errors rather than knowledge gaps, and the biggest is studying the wrong version: the DCCOR exam now uses v1.2 topics that add automation and AI as a scored domain and rebalance the blueprint, so material written for the previous version underweights the newer content and leaves candidates unprepared for the current paper. The second mistake is treating the exam like a multiple-choice test: Cisco’s own topics page lists performance-based questions in the mix, and candidates who prepare exclusively with flashcards freeze when asked to zone a fabric or configure a UCS pool, so lab time is non-negotiable. Third, candidates skip the storage network domain — 20 percent of the DCCOR paper — because their background is routing and switching, then lose a fifth of the exam from content they never studied; the fix is studying every domain in the published weightings. Fourth, candidates assume a passing score exists to aim at, but Cisco reports only pass or fail, so training to a number such as 80 percent on practice tests is a heuristic that does not map to the real result; the fix is pacing and performance on timed simulations. Fifth, candidates underestimate the retake rules: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days, so booking the core and concentration back-to-back without planning for the wait is a scheduling trap. The thread is simple: verify the current exam version, allocate hours by the published weightings, build a real lab, train to performance on pass-fail formats rather than to a score, and read the retake policy before you book.",
    items: [
      { mistake: 'Studying a superseded DCCOR blueprint', fix: 'Use the current v1.2 exam topics, which add automation and AI as a scored domain; check the version on the official page before buying any material.' },
      { mistake: 'Preparing with multiple choice only', fix: 'Cisco lists performance-based questions in the mix. Build a lab and configure UCS, zoning and VXLAN EVPN; typed skills carry the exam.' },
      { mistake: 'Skipping the storage network domain', fix: 'Storage network is 20% of DCCOR. Study Fibre Channel, zoning, VSANs, NPV and NPIV as scored content, even if your background is routing.' },
      { mistake: 'Training to a practice percentage', fix: 'Cisco publishes no passing score and reports only pass or fail. Judge readiness by finishing timed performance-based simulations, not a multiple-choice percentage.' },
      { mistake: 'Booking retakes without reading the retake rules', fix: 'After a failed attempt you must wait five calendar days before retesting the same exam, and 180 days after passing it. Plan the seat schedule around those published waits.' }
    ]
  },

  questionTypes: {
    summary:
      "CCNP Data Center exams are delivered on computer through Pearson VUE, and the official topics page describes the item mix as performance-based questions, multiple choice and drag-and-drop — Cisco publishes the formats but reports only a pass or fail result, with no numeric passing score and no cohort pass-rate statistics. The core exam, 350-601 DCCOR, runs 120 minutes and costs $400, while each concentration exam runs 90 minutes and costs $300; the core is offered in English and Japanese and the question count is not fixed in the published topics, so pacing discipline matters more than counting questions. Performance-based questions drop you into a task — zone a Fibre Channel fabric, configure a UCS server pool, or apply an ACI contract — and carry disproportionate weight because they test whether you can do the work rather than recognize it. Multiple-choice items test concepts from the blueprint, from OSPF and VXLAN EVPN to UCS management, storage networking and security, while drag-and-drop items typically ask you to order configuration steps or match technology concepts. The DCCOR v1.2 blueprint weights network and compute at 25 percent each, storage network at 20 percent, and automation and AI and security at 15 percent each, which tells candidates where the item mass sits. Cisco also publishes a free exam tutorial that walks candidates through each item format before exam day, which is worth taking once so the first performance-based task you see is not a surprise. The three samples below are editor-written illustrations of the published blueprint, not live exam items; one shows the network domain, one the storage domain, and one the security domain.",
    types: [
      { name: 'Performance-based questions', share: 'A significant part of the mix', detail: 'Configure or trace UCS, Fibre Channel zoning, VXLAN EVPN or ACI objects in a simulated environment. Cisco exams allow forward navigation only.' },
      { name: 'Multiple choice', share: 'A substantial share', detail: 'Concepts across the blueprint: routing and switching, UCS, storage networking, automation tools and security.' },
      { name: 'Drag-and-drop', share: 'A smaller share', detail: 'Order configuration steps or match technology and API concepts to their descriptions.' },
      { name: 'Scenario items in the automation and AI domain', share: 'Within the 15% weight', detail: 'EEM, guest shell, on-box Python, REST APIs, Ansible and AI-enabling infrastructure in data-center designs.' }
    ],
    samples: [
      {
        prompt: 'A storage administrator must allow two host servers to see each other and their shared storage array while isolating them from every other device in the fabric. Which Fibre Channel mechanism achieves this?',
        options: [
          'A. Zoning',
          'B. NPV',
          'C. Device aliasing alone',
          'D. Port channels'
        ],
        answer: 'A',
        explanation: 'Zoning controls which Fibre Channel devices can communicate, so a zone containing the two hosts and the array permits exactly that traffic while blocking everything else in the fabric. NPV lets N-port devices attach to a fabric without their own domain ID, device aliases give names to WWNs but do not restrict traffic, and port channels bundle physical links rather than control device visibility.'
      },
      {
        prompt: 'Which overlay technology extends Layer 2 and Layer 3 segments across a data-center fabric using BGP EVPN as its control plane?',
        options: [
          'A. VXLAN EVPN',
          'B. OSPFv3',
          'C. Spanning Tree Protocol',
          'D. FHRP'
        ],
        answer: 'A',
        explanation: 'VXLAN EVPN uses VXLAN for data-plane encapsulation and BGP EVPN as the control plane to distribute MAC and IP reachability across the fabric, which is exactly how modern data-center fabrics extend segments. OSPFv3 is an interior routing protocol, Spanning Tree blocks loops in classic Layer 2 designs and does not build overlays, and FHRP provides first-hop redundancy rather than overlay connectivity.'
      },
      {
        prompt: 'A data-center policy must let an application tier communicate only with its own database tier and with nothing else in the fabric. In an ACI fabric, which construct enforces this segmentation?',
        options: [
          'A. A contract between the two endpoint groups',
          'B. A spanning-tree root guard',
          'C. A single flat VLAN',
          'D. A MACsec key chain'
        ],
        answer: 'A',
        explanation: 'In ACI, contracts govern the traffic allowed between endpoint groups (EPGs), so a contract permitting only the application-to-database flows enforces exactly the segmentation described. Root guard protects the spanning-tree root, a flat VLAN allows all members to communicate, and MACsec encrypts links but does not segment which flows are allowed.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      "On CCNP Data Center exam day you sit a single computer-based test through Pearson VUE — either at a test center or online with remote proctoring — with performance-based questions, multiple choice and drag-and-drop in the mix, a 120-minute clock for the 350-601 core or 90 minutes for a concentration exam, and a pass-or-fail result typically online within 48 hours. Arrive early with a government-issued photo ID whose name exactly matches your Pearson VUE and Cisco accounts, because check-in verifies identity and a mismatch can cost you the seat; personal electronics, notes and reference materials go in a locker at a center or out of the room for online testing. The exam begins with a tutorial on the testing software, then the clock starts; Cisco exams do not let you return to previous questions once you move on, so answer each item deliberately and treat the performance-based tasks as the pacing anchor — they take real time to complete, and the pass-fail result means an unfinished simulation is a certain miss. You receive a preliminary result at the end of the appointment, and the official pass or fail appears in the Cisco Certification Tracking System within about 48 hours; each passed exam also earns a Specialist certification, a tangible intermediate credential. If you fail, the published rule is a five-calendar-day wait before retesting the same exam at full price, so book the retake deliberately after targeted study rather than immediately; if you pass, you must wait 180 days before sitting the identical exam number again. On passing both the core and a concentration, your CCNP Data Center is valid for three years, recertified by earning 80 CE credits, passing a qualifying exam or advancing to CCIE, and an expired certification requires repeating the full exam process.",
    bring: [
      'A current government-issued photo ID with a name that exactly matches your Pearson VUE and Cisco accounts',
      'Your Pearson VUE registration confirmation, in case check-in cannot locate the booking',
      'For online testing: a private room, a working webcam and microphone, and a system already tested against the Pearson VUE requirements',
      'Any accommodation approvals you requested in advance',
      'A list of the test center address and your appointment time, if testing at a center'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a center, out of the room for online testing',
      'Notes, cheat sheets, books and flashcards',
      'Your own paper and pens; the testing software provides the tools you need',
      'Bags, coats and food or drink beyond what the center permits',
      'Any other person in the room for online testing, and second monitors'
    ],
    timeline: [
      { time: 'The week before', detail: 'Log into your Cisco and Pearson VUE accounts and confirm your name is spelled exactly as on your ID; confirm the center address and appointment time.' },
      { time: '30 minutes before', detail: 'Arrive at the center or begin online check-in, which takes about 15 minutes including identity verification.' },
      { time: 'Check-in', detail: 'Present your photo ID, store personal items, and complete the security check before being seated.' },
      { time: 'First minutes at the seat', detail: 'Complete the tutorial on the testing software; then the clock starts.' },
      { time: 'Exam clock', detail: 'Work the 120-minute core or 90-minute concentration deliberately. You cannot return to previous questions, so answer each item fully before moving on.' },
      { time: 'After the exam', detail: 'Receive a preliminary result; the official pass or fail posts in the Certification Tracking System within about 48 hours.' },
      { time: 'Next steps', detail: 'On a pass, log the three-year validity and plan recertification; on a fail, respect the five-calendar-day retake wait before scheduling.' }
    ],
    rules: [
      'Two exams are required for CCNP Data Center: a core (350-601 DCCOR) and one concentration exam of your choice.',
      'Cisco exams do not allow returning to previously answered questions; each item is final when you move on.',
      'Results are pass or fail, reported online within 48 hours; Cisco publishes no passing score and no pass-rate statistics.',
      'The core is 120 minutes and $400; each concentration is 90 minutes and $300.',
      'Retake rule: five calendar days after a failed attempt, and 180 days after passing the identical exam.',
      'The certification is valid for three years; professional-level recertification requires 80 CE credits or a qualifying exam path, and expired certifications require the full exam process again.',
      'A valid photo ID with an exact-name match is required; personal electronics and notes are not permitted at the workstation.'
    ],
    afterwards:
      "Your preliminary result appears at the end of the appointment and the official pass or fail posts in the Cisco Certification Tracking System within about 48 hours; each exam you pass also earns a Specialist certification, so even before the full CCNP you have a marketable intermediate credential. If you fail, respect the published five-calendar-day wait before retesting at full price and re-study from the current exam topics rather than the same material — the pass-fail result means you get no diagnostic score, so rebuild around the domains your practice logs flagged. If you pass both the core and a concentration, your CCNP Data Center is active for three years from the date you complete the requirements. Recertify by earning 80 continuing education credits through approved Cisco training, by passing a qualifying exam, or by advancing to CCIE, and diarize the expiration date immediately, because an expired certification is not renewed — Cisco requires the full exam process again. Keep your account profile current, track CE credit claims through the Cisco Continuing Education portal within 365 days of completing an activity, and remember that recertifying the highest-level credential renews the certifications beneath it automatically."
  }
};

export default data;
