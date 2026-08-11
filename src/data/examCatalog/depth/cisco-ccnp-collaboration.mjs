// Depth content for: cisco-ccnp-collaboration
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Cisco professional-level exams are revised on a published cycle, so we track the current exam version by its official exam code and revision number — the single most common way candidates waste money here is studying a superseded blueprint. Exam fees, durations, question formats, prerequisites and retake rules come from Cisco\u2019s own certification pages and the official exam-topics pages on the Cisco Learning Network. Cisco does not publish pass rates or numeric passing scores for these exams and reports results as pass or fail, which we state plainly. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the official Cisco Learning Network exam-topics page for 350-801 CLCOR v2.0, the Cisco CCNP Collaboration certification pages, the Cisco recertification policy, and the BLS OOH Computer Network Architects page (SOC 15-1241, May 2024).',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$130,390 median for computer network architects (BLS SOC 15-1241, May 2024), the closest official series to the unified-communications engineering roles CCNP Collaboration supports',
    summary:
      "CCNP Collaboration pays through the network-engineering job market, and the closest official BLS figure is the May 2024 median annual wage of $130,390 for SOC 15-1241 Computer Network Architects — BLS has no occupation literally called 'collaboration engineer' or 'unified communications engineer', so we cite the architect series for this credential and say plainly that the fit is partial rather than exact. The lowest 10 percent in that occupation earned less than $79,520 and the highest 10 percent earned more than $198,030 in May 2024, a very wide spread driven by seniority, employer and location far more than by any certificate. BLS counted 179,200 computer-network-architect jobs in 2024 and projects 12 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 11,200 openings a year, most of them replacement demand. Three caveats anchor the picture. First, BLS classifies by job duties rather than by certification, so the series includes architects without a CCNP and excludes CCNP holders working under other titles, which means the credential’s specific wage premium cannot be read off this page. Second, CCNP Collaboration is a specialist credential for voice and collaboration engineers, and the relevant comparison for a holder is typically the voice-network or unified-communications salary band rather than the architect median; employer listings rather than BLS set any premium for the collaboration concentration specifically. Third, the certificate gates nothing legally — unlike a state license it is an employer-recognized credential, so its value is realized through hiring, specialization and promotion decisions. For a candidate asking whether CCNP Collaboration pays, the direct answer is that it certifies skills inside a job family with a $130,390 national median and double-digit projected growth, and voice and collaboration experience continues to be one of the harder infrastructure skills to hire for.",
    rows: [
      { label: 'Median annual wage, computer network architects', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1241, $62.69/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $79,520', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $198,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '179,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~11,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement demand' }
    ],
    growth: '+12% projected change 2024-34 (much faster than average), with about 11,200 openings a year; collaboration and hybrid-work infrastructure remain a specialized hiring area',
    source: {
      label: 'BLS Occupational Outlook Handbook - Computer Network Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm'
    }
  },

  passRate: {
    headline: 'Cisco publishes no pass rate and no numeric passing score for CCNP Collaboration — results are pass or fail, reported online within 48 hours',
    summary:
      "Cisco publishes no pass-rate statistics for CCNP Collaboration or any of its certification exams, and the current official exam-topics page for the core does not list a numeric passing score either — candidates get a pass or fail result online, typically within 48 hours, and any percentage circulating on forums or third-party sites is a private estimate, not Cisco data. What Cisco does publish is the full structure of the credential: CCNP Collaboration requires passing two exams, a core and one concentration of your choice. The core is 350-801 CLCOR, Implementing and Operating Cisco Collaboration Core Technologies, a 120-minute, $400 exam, while the concentrations — 300-810 CLICA for collaboration applications, 300-815 CLACCM for advanced call control, 300-820 CLCEI for cloud and edge, 300-825 CLCNF for conferencing, and 300-835 CLAUTO for collaboration automation — are each 90-minute, $300 exams. The official CLCOR v2.0 topics page lists the question mix as performance-based questions, multiple choice and drag-and-drop, with domain weightings of 30 percent on-premises call control, 25 percent cloud and hybrid services, 15 percent infrastructure and design, 10 percent protocols and endpoints, 10 percent voice gateways and session border controllers, and 10 percent media and QoS. Two things matter more than a pass rate. First, Cisco states there are no formal prerequisites, so the exam is gated by knowledge rather than by a prior certificate, and Cisco recommends three to five years of relevant experience. Second, the retake rules are published: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days. The honest reading is that CCNP Collaboration is a two-exam, roughly $700 commitment with no official pass-rate information, so readiness is best judged by timed practice on performance-based items rather than by any claimed pass percentage.",
    source: {
      label: 'Cisco Learning Network - 350-801 CLCOR exam topics',
      url: 'https://learningnetwork.cisco.com/s/clcor-exam-topics'
    },
    caveat: 'Cisco publishes no pass rates and no numeric passing scores for CCNP exams; results are pass or fail, reported online within 48 hours. Any percentage quoted online is a private estimate, not an official figure.'
  },

  studyPlan: {
    summary:
      "CCNP Collaboration is two exams — the 350-801 CLCOR core and one concentration — and the efficient plan runs 16 to 20 weeks at 10 to 14 hours a week, roughly 180 to 240 hours in total, with the core consuming about 60 percent of the time because it is the 120-minute, $400 exam covering the broadest ground. The two exams are sequential in practice: most candidates pass the core first, since CLCOR v2.0 covers infrastructure and design, protocols and endpoints, on-premises call control, voice gateways, cloud and hybrid services, and media and QoS, and the concentration then deepens one area — advanced call control with CLACCM, applications with CLICA, cloud and edge with CLCEI, conferencing with CLCNF, or automation with CLAUTO. Weeks one through four cover the infrastructure and design and protocols content, including SIP, codecs and endpoint registration. Weeks five through eight work the on-premises call control domain in depth — Cisco UCM call routing, dial plans, partitions and calling search spaces, Unity Connection and user management — which is 30 percent of the paper. Weeks nine through eleven cover voice gateways, session border controllers, media and QoS, and weeks twelve through fourteen work the cloud and hybrid services domain, including Webex Calling, meetings, messaging, cloud APIs and hybrid services. Weeks fifteen through seventeen are full timed practice exams at the real formats — 120 minutes for the core and 90 minutes for the concentration — with a miss log driving final gap-closing. Candidates with strong voice and UC experience can compress to twelve weeks, spending recovered time in a lab on dial-plan and gateway configuration rather than on concept review; candidates coming from pure data networking should add four weeks of voice fundamentals before the core. The plan’s anchor is the lab: dial-plan configuration, gateway dial peers, QoS policies and Webex integration are hands-on skills, and candidates who configure them rather than read about them finish the performance-based questions inside the clock.",
    totalHours: '180-240 hours over 16-20 weeks',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Infrastructure, design, protocols and endpoints (25%)', tasks: ['Cover solution design elements, dial plans, high availability and disaster recovery from the CLCOR v2.0 topics', 'Study SIP call setup and teardown, SDP, DTMF, and endpoint registration and provisioning', 'Learn codecs and media: G.711, G.722, G.729 and the bandwidth math of a call', 'Set up a lab with CUCM, a voice gateway and a soft client'], hours: '11-14 hrs/week' },
      { label: 'Weeks 5-8', focus: 'On-premises call control (30%)', tasks: ['Configure call routing in Cisco UCM: route patterns, route groups, route lists and translation patterns', 'Work partitions and calling search spaces, time-of-day routing and forced authorization codes', 'Implement toll fraud prevention and globalized call routing with +E.164', 'Configure Unity Connection: mailboxes, MWI, call handlers and routing rules'], hours: '12-14 hrs/week' },
      { label: 'Weeks 9-11', focus: 'Voice gateways, session border controllers, media and QoS (20%)', tasks: ['Configure dial peers, voice translation rules, codec preference lists and DTMF on IOS XE gateways', 'Study Cisco Unified Border Element and redundancy features such as server groups and DNS SRV', 'Configure LLQ with class maps, policy maps and service policies, and troubleshoot media quality'], hours: '11-13 hrs/week' },
      { label: 'Weeks 12-14', focus: 'Cloud and hybrid services (25%)', tasks: ['Describe the Webex Suite: calling, meetings and messaging', 'Configure call routing in Webex Calling: locations, numbers, translation patterns, trunks and dial plans', 'Study cloud APIs and webhooks, Control Hub user management and Webex hybrid services'], hours: '12-14 hrs/week' },
      { label: 'Weeks 15-17', focus: 'Timed practice exams and gap closing', tasks: ['Take timed practice sittings at the real durations: 120 minutes for the core, 90 minutes for your chosen concentration', 'Re-drill the miss log by domain until clean', 'Book the core and the concentration with the five-day retake rule and your schedule in mind'], hours: '10-12 hrs/week' }
    ],
    variants: [
      { label: 'Strong voice and UC background', detail: 'Compress to 12 weeks. Spend recovered time on the cloud and hybrid services domain, which is 25% of the current CLCOR paper and the area most candidates from on-premises voice know least.' },
      { label: 'Coming from pure data networking', detail: 'Add four weeks of voice fundamentals — SIP, codecs, dial plans and gateway concepts — before the core. The exam is voice-specific by design, so data knowledge transfers only partially.' },
      { label: 'Choosing a concentration early', detail: 'Pick the concentration in week 12 based on your work: CLACCM for dial-plan depth, CLCEI for cloud and Webex, CLAUTO for Python and APIs. A lab built around your choice doubles as core practice.' }
    ]
  },

  prepStrategies: {
    summary:
      "Five tactics drive most of the score gains on CCNP Collaboration, and they all follow from one fact: Cisco reports results as pass or fail without publishing a passing score, so the only reliable readiness signal is how you perform on timed, performance-based practice — not how many multiple-choice questions you can answer from memory. First, build the published exam topics into a lab plan before studying: the CLCOR v2.0 weightings of 30 percent on-premises call control, 25 percent cloud and hybrid services, 15 percent infrastructure and design, and 10 percent each for protocols and endpoints, gateways, and media and QoS tell you exactly where hours belong. Second, configure rather than read. The exam’s stated question mix includes performance-based items, and the blueprint names specific objects — route patterns, translation patterns, dial peers, LLQ policies, Webex Calling locations — so a lab where you build dial plans and gateways is the highest-yield study investment. Third, drill the dial-plan math and the signaling flows, because call routing is the single largest domain and items frequently present a partial configuration and ask what breaks — candidates who can trace a call through partitions, route lists and translation patterns answer these correctly. Fourth, study the cloud and hybrid services domain seriously even if your job is on-premises: Webex Calling, Control Hub, cloud APIs and hybrid services are 25 percent of the current paper, and candidates who dismiss them as a trend give away a full quarter of the exam. Fifth, use timed practice exams with performance-based simulations and log every miss by domain, because the 120-minute core and 90-minute concentration formats reward pacing discipline, and the pass-fail result means you cannot see a score to learn from. Plan the certification as two paid seats — about $400 for the core and $300 for the concentration — and use the published retake rules, including the five-calendar-day wait after a failed attempt, to time when you sit.",
    items: [
      { title: 'Build the exam topics into a weighting-aware schedule', detail: 'CLCOR v2.0 publishes weights: 30% on-premises call control, 25% cloud and hybrid services, 15% infrastructure and design, and 10% each for the other domains. Allocate hours in those proportions.' },
      { title: 'Configure in a lab rather than reading', detail: 'The exam includes performance-based items. Build dial plans, gateway dial peers, QoS policies and Webex Calling routing in a lab; the blueprint names the exact objects to practise.' },
      { title: 'Drill call-routing and signaling flow', detail: 'Call control is the largest domain. Practise tracing a call through partitions, calling search spaces, route lists and translation patterns so partial-configuration items feel familiar.' },
      { title: 'Cover the cloud and hybrid services domain', detail: 'Cloud and hybrid services is 25% of CLCOR, covering Webex Calling, meetings, messaging, APIs, Control Hub and hybrid services. Treat it as scored content, not a trend.' },
      { title: 'Train with timed, performance-based simulations', detail: 'With no passing score published and a pass-or-fail result, readiness is judged by finishing tasks inside 120 minutes (core) or 90 minutes (concentration). Log every miss by domain.' }
    ]
  },

  resourceComparison: {
    summary:
      "The buying logic for CCNP Collaboration is anchored by the fact that Cisco publishes the official exam topics for free — the CLCOR v2.0 topics page is the definitive scope map — so the first resource every candidate needs costs nothing, and no paid product can claim to define the blueprint better than Cisco’s own documents. The exam seats themselves are the biggest line item: the 350-801 core costs $400 and each concentration costs $300, both paid to Pearson VUE at scheduling, and retakes are full price with a five-calendar-day wait after a failure. Beyond Cisco’s free topics, the market splits into three tiers. Cisco’s own paid training — Cisco U. learning paths, the official courses and practice tests — typically runs several hundred dollars and is the closest match to the exam style, including performance-based questions. Cisco Press books for collaboration, such as the official cert guides for CLCOR and the concentrations, are usually $50 to $70 and are strongest for the dial-plan and gateway fundamentals. Third-party question banks from providers such as Boson and Pearson, typically $100 to $150, are the best timed-readiness check because they simulate the performance-based item mix, and the ones that explicitly track the current exam version are the ones to choose. A free or low-cost lab — Cisco Modeling Labs, the DevNet sandbox or a virtual CUCM environment — is worth more than any course for a performance-based exam, because the blueprint names objects you must actually configure. Prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission; confirm the current price on the Cisco and Pearson VUE pages before buying.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco exam-topics PDF (350-801 CLCOR v2.0)', values: ['Free', 'Official PDF on the Cisco Learning Network', 'The definitive scope map; download before buying anything'], note: '' },
      { label: 'Core exam seat: 350-801 CLCOR', values: ['$400', 'Pearson VUE, 120 minutes', 'Required for CCNP Collaboration'], note: '' },
      { label: 'Concentration exam seat (e.g. 300-815 CLACCM, 300-820 CLCEI)', values: ['$300', 'Pearson VUE, 90 minutes', 'Required for CCNP Collaboration'], note: '' },
      { label: 'Cisco U. training paths and practice tests', values: ['~$300-800 depending on path', 'Guided learning with labs and assessments', 'Candidates who want vendor-style performance items'], note: '' },
      { label: 'Cisco Press official cert guides', values: ['~$50-70', 'Print + ebook', 'Dial-plan, gateway and application fundamentals'], note: '' },
      { label: 'Third-party question banks (e.g. Boson ExSim, Pearson Practice Test)', values: ['~$100-150', 'Timed simulations', 'Readiness checks with performance-based items'], note: '' },
      { label: 'Labs: Cisco Modeling Labs, DevNet sandboxes, virtual CUCM', values: ['Free sandbox; CML tiers vary', 'Hands-on environments', 'Configuring dial plans, gateways and Webex routing'], note: '' }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The $400 core and $300 concentration fees are Cisco\u2019s published prices; prep-product list prices change frequently, so confirm at the source before buying. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      "The five most common mistakes on CCNP Collaboration are all process errors rather than knowledge gaps, and the biggest is studying the wrong version: the CLCOR exam now uses v2.0 topics that reweight the blueprint toward cloud and hybrid services, so material written for the previous version underweights the newer content and leaves candidates unprepared for the current paper. The second mistake is treating the exam like a multiple-choice test: Cisco’s own topics page lists performance-based questions in the mix, and candidates who prepare exclusively with flashcards freeze when asked to trace a dial plan or configure a gateway dial peer, so lab time is non-negotiable. Third, candidates skip the cloud and hybrid services domain — 25 percent of the CLCOR paper — because their job is on-premises voice, then lose a quarter of the exam from content they never studied; the fix is studying every domain in the published weightings. Fourth, candidates assume a passing score exists to aim at, but Cisco reports only pass or fail, so training to a number such as 80 percent on practice tests is a heuristic that does not map to the real result; the fix is pacing and performance on timed simulations. Fifth, candidates underestimate the retake rules: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days, so booking the core and concentration back-to-back without planning for the wait is a scheduling trap. The thread is simple: verify the current exam version, allocate hours by the published weightings, build a real lab, train to performance on pass-fail formats rather than to a score, and read the retake policy before you book.",
    items: [
      { mistake: 'Studying a superseded CLCOR blueprint', fix: 'Use the current v2.0 exam topics, which reweight the paper toward cloud and hybrid services; check the version on the official page before buying any material.' },
      { mistake: 'Preparing with multiple choice only', fix: 'Cisco lists performance-based questions in the mix. Build a lab and configure dial plans, gateways and QoS policies; typed skills carry the exam.' },
      { mistake: 'Skipping the cloud and hybrid services domain', fix: 'Cloud and hybrid services is 25% of CLCOR. Study Webex Calling, Control Hub, cloud APIs and hybrid services as scored content.' },
      { mistake: 'Training to a practice percentage', fix: 'Cisco publishes no passing score and reports only pass or fail. Judge readiness by finishing timed performance-based simulations, not a multiple-choice percentage.' },
      { mistake: 'Booking retakes without reading the retake rules', fix: 'After a failed attempt you must wait five calendar days before retesting the same exam, and 180 days after passing it. Plan the seat schedule around those published waits.' }
    ]
  },

  questionTypes: {
    summary:
      "CCNP Collaboration exams are delivered on computer through Pearson VUE, and the official topics page describes the item mix as performance-based questions, multiple choice and drag-and-drop — Cisco publishes the formats but reports only a pass or fail result, with no numeric passing score and no cohort pass-rate statistics. The core exam, 350-801 CLCOR, runs 120 minutes and costs $400, while each concentration exam runs 90 minutes and costs $300; the core is offered in English and the question count is not fixed in the published topics, so pacing discipline matters more than counting questions. Performance-based questions drop you into a task — trace a call through partitions and route lists, configure a dial peer, or set an LLQ policy — and carry disproportionate weight because they test whether you can do the work rather than recognize it. Multiple-choice items test concepts from the blueprint, from SIP signaling and codecs to Unity Connection and Webex Calling routing, while drag-and-drop items typically ask you to order configuration steps or match API concepts. The CLCOR v2.0 blueprint weights on-premises call control at 30 percent, cloud and hybrid services at 25 percent, infrastructure and design at 15 percent, and protocols and endpoints, voice gateways and session border controllers, and media and QoS at 10 percent each, which tells candidates where the item mass sits. Cisco also publishes a free exam tutorial that walks candidates through each item format before exam day, which is worth taking once so the first performance-based task you see is not a surprise. The three samples below are editor-written illustrations of the published blueprint, not live exam items; one shows the call-control domain, one the infrastructure domain, and one the cloud and hybrid services domain.",
    types: [
      { name: 'Performance-based questions', share: 'A significant part of the mix', detail: 'Configure or trace dial plans, gateway dial peers, QoS policies or Webex routing in a simulated environment. Cisco exams allow forward navigation only.' },
      { name: 'Multiple choice', share: 'A substantial share', detail: 'Concepts across the blueprint: SIP, codecs, Unity Connection, UCM call routing, cloud APIs and media quality.' },
      { name: 'Drag-and-drop', share: 'A smaller share', detail: 'Order configuration steps or match protocol, codec and API concepts to their descriptions.' },
      { name: 'Scenario items in the cloud and hybrid services domain', share: 'Within the 25% weight', detail: 'Webex Calling routing, Control Hub administration, hybrid services and toll fraud prevention in cloud environments.' }
    ],
    samples: [
      {
        prompt: 'A Cisco UCM cluster routes calls using partitions and calling search spaces. A user can reach internal extensions but every call to an external +E.164 number fails. Which check is the most likely fix?',
        options: [
          'A. Move the external route pattern to a partition that is not in the user\u2019s calling search space',
          'B. Place the external route pattern in a partition that is in the user\u2019s calling search space',
          'C. Disable the translation pattern for emergency calls',
          'D. Remove the route group from the route list'
        ],
        answer: 'B',
        explanation: 'A calling search space determines which partitions a user can reach. If the external +E.164 route pattern sits in a partition outside the user\u2019s calling search space, calls to it fail while internal extensions still complete — exactly the symptom described. Moving the pattern into a reachable partition restores external calls; the other options either make reachability worse or touch unrelated objects.'
      },
      {
        prompt: 'Which codec offers wideband audio quality at roughly the bit rate needed for a high-definition voice call over a limited WAN link?',
        options: [
          'A. G.711',
          'B. G.722',
          'C. G.729',
          'D. LPC-10'
        ],
        answer: 'B',
        explanation: 'G.722 is the high-definition wideband codec, delivering better audio quality than G.711 while still fitting on most WAN links. G.711 is uncompressed PCM at about 64 kbps, G.729 is a narrowband low-bit-rate codec used for bandwidth savings at the cost of quality, and LPC-10 is an old, very low-bit-rate speech codec not used in modern Cisco collaboration deployments.'
      },
      {
        prompt: 'An organization moves a site to Webex Calling and needs users at that site to reach numbers through a specific trunk. Per the cloud and hybrid services blueprint, which set of objects must be configured in order?',
        options: [
          'A. Location, numbers, translation patterns, trunks and dial plans',
          'B. Only a location, with no dial plan needed',
          'C. A gateway dial peer and nothing else',
          'D. A syslog server and an SRST reference'
        ],
        answer: 'A',
        explanation: 'The CLCOR v2.0 topics for Webex Calling call routing list operating modes, locations, numbers, translation patterns, trunks and route groups, and dial plans as the objects to configure, in that logical order. A location alone cannot route calls, a gateway dial peer is an on-premises concept rather than the Webex Calling control plane, and SRST and syslog are unrelated to basic cloud call routing.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      "On CCNP Collaboration exam day you sit a single computer-based test through Pearson VUE — either at a test center or online with remote proctoring — with performance-based questions, multiple choice and drag-and-drop in the mix, a 120-minute clock for the 350-801 core or 90 minutes for a concentration exam, and a pass-or-fail result typically online within 48 hours. Arrive early with a government-issued photo ID whose name exactly matches your Pearson VUE and Cisco accounts, because check-in verifies identity and a mismatch can cost you the seat; personal electronics, notes and reference materials go in a locker at a center or out of the room for online testing. The exam begins with a tutorial on the testing software, then the clock starts; Cisco exams do not let you return to previous questions once you move on, so answer each item deliberately and treat the performance-based tasks as the pacing anchor — they take real time to complete, and the pass-fail result means an unfinished simulation is a certain miss. You receive a preliminary result at the end of the appointment, and the official pass or fail appears in the Cisco Certification Tracking System within about 48 hours; each passed exam also earns a Specialist certification, a tangible intermediate credential. If you fail, the published rule is a five-calendar-day wait before retesting the same exam at full price, so book the retake deliberately after targeted study rather than immediately; if you pass, you must wait 180 days before sitting the identical exam number again. On passing both the core and a concentration, your CCNP Collaboration is valid for three years, recertified by earning 80 CE credits, passing a qualifying exam or advancing to CCIE, and an expired certification requires repeating the full exam process.",
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
      'Two exams are required for CCNP Collaboration: a core (350-801 CLCOR) and one concentration exam of your choice.',
      'Cisco exams do not allow returning to previously answered questions; each item is final when you move on.',
      'Results are pass or fail, reported online within 48 hours; Cisco publishes no passing score and no pass-rate statistics.',
      'The core is 120 minutes and $400; each concentration is 90 minutes and $300.',
      'Retake rule: five calendar days after a failed attempt, and 180 days after passing the identical exam.',
      'The certification is valid for three years; professional-level recertification requires 80 CE credits or a qualifying exam path, and expired certifications require the full exam process again.',
      'A valid photo ID with an exact-name match is required; personal electronics and notes are not permitted at the workstation.'
    ],
    afterwards:
      "Your preliminary result appears at the end of the appointment and the official pass or fail posts in the Cisco Certification Tracking System within about 48 hours; each exam you pass also earns a Specialist certification, so even before the full CCNP you have a marketable intermediate credential. If you fail, respect the published five-calendar-day wait before retesting at full price and re-study from the current exam topics rather than the same material — the pass-fail result means you get no diagnostic score, so rebuild around the domains your practice logs flagged. If you pass both the core and a concentration, your CCNP Collaboration is active for three years from the date you complete the requirements. Recertify by earning 80 continuing education credits through approved Cisco training, by passing a qualifying exam, or by advancing to CCIE, and diarize the expiration date immediately, because an expired certification is not renewed — Cisco requires the full exam process again. Keep your account profile current, track CE credit claims through the Cisco Continuing Education portal within 365 days of completing an activity, and remember that recertifying the highest-level credential renews the certifications beneath it automatically."
  }
};

export default data;
