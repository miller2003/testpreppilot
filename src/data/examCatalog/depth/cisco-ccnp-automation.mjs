// Depth content for: cisco-ccnp-automation
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Cisco professional-level exams are revised on a published cycle, so we track the current exam version by its official exam code and revision number — the single most common way candidates waste money here is studying a superseded blueprint. Exam fees, durations, question formats, prerequisites and retake rules come from Cisco\u2019s own certification pages and the official exam-topics pages on the Cisco Learning Network. Cisco does not publish pass rates or numeric passing scores for these exams and reports results as pass or fail, which we state plainly. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the official Cisco Learning Network exam-topics pages for 350-901 AUTOCOR and 300-435 ENAUTO v2.0, the Cisco CCNP Enterprise and CCNP Automation certification pages, the Cisco recertification policy, and the BLS OOH Computer Network Architects page (SOC 15-1241, May 2024).',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$130,390 median for computer network architects (BLS SOC 15-1241, May 2024), the closest official series to the roles CCNP Automation supports',
    summary:
      "CCNP Automation pays through the network-engineering job market, and the closest official BLS figure is the May 2024 median annual wage of $130,390 for SOC 15-1241 Computer Network Architects — BLS has no occupation literally called 'network engineer', so we cite the architect series for this credential and say plainly that the fit is partial rather than exact. The lowest 10 percent in that occupation earned less than $79,520 and the highest 10 percent earned more than $198,030 in May 2024, a very wide spread driven by seniority, employer and location far more than by any certificate. BLS counted 179,200 computer-network-architect jobs in 2024 and projects 12 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 11,200 openings a year, most of them replacement demand. Three caveats anchor the picture. First, BLS classifies by job duties rather than by certification, so the series includes architects without a CCNP and excludes CCNP holders working under other titles, which means the credential’s specific wage premium cannot be read off this page. Second, CCNP Automation is a specialist credential aimed at engineers already pursuing networking or automation careers, so the relevant comparison for a holder is typically the network-engineering salary band rather than the architect median, and employer listings rather than BLS set any premium for the automation concentration specifically. Third, the certificate gates nothing legally — unlike a state license it is an employer-recognized credential, so its value is realized through hiring and promotion decisions. For a candidate asking whether CCNP Automation pays, the direct answer is that it certifies skills in a job family with a $130,390 national median and double-digit projected growth, and the automation and programmability angle is the part of that family employers are actively modernizing.",
    rows: [
      { label: 'Median annual wage, computer network architects', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1241, $62.69/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $79,520', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $198,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '179,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~11,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement demand' }
    ],
    growth: '+12% projected change 2024-34 (much faster than average), with about 11,200 openings a year; automation and programmability are the skills employers are adding fastest',
    source: {
      label: 'BLS Occupational Outlook Handbook - Computer Network Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm'
    }
  },

  passRate: {
    headline: 'Cisco publishes no pass rate and no numeric passing score for CCNP Automation — results are pass or fail, reported online within 48 hours',
    summary:
      "Cisco publishes no pass-rate statistics for CCNP Automation or any of its certification exams, and the current official exam-topics pages do not list a numeric passing score either — candidates get a pass or fail result online, typically within 48 hours, and any percentage circulating on forums or third-party sites is a private estimate, not Cisco data. What Cisco does publish is the full structure of the credential: CCNP Automation requires passing two exams, a core and a concentration. The core is 350-901 AUTOCOR, Designing, Deploying and Managing Network Automation Systems, a 120-minute, $400 exam available in English and Japanese, while the concentration options are 300-435 ENAUTO, Automating and Programming Cisco Enterprise Solutions, and 300-635 DCNAUTO, Automating Cisco Data Center Networking Solutions, both 90-minute, $300 exams. The official ENAUTO v2.0 topics page lists the question mix as performance-based questions, multiple choice and drag-and-drop, with domain weightings of 30 percent controller-based network automation, 25 percent device-level network automation, 20 percent operations, 15 percent AI in automation and 10 percent network automation foundation. Two things matter more than a pass rate. First, Cisco states there are no formal prerequisites, so the exam is gated by knowledge rather than by a prior certificate, and Cisco recommends three to five years of relevant experience. Second, the retake rules are published: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days before sitting the identical exam again. The honest reading is that CCNP Automation is a two-exam, roughly $700 commitment with no official pass-rate information, so readiness is best judged by timed practice scores on performance-based items rather than by any claimed pass percentage.",
    source: {
      label: 'Cisco Learning Network - 300-435 ENAUTO exam topics',
      url: 'https://learningnetwork.cisco.com/s/enauto-exam-topics'
    },
    caveat: 'Cisco publishes no pass rates and no numeric passing scores for CCNP exams; results are pass or fail, reported online within 48 hours. Any percentage quoted online is a private estimate, not an official figure.'
  },

  studyPlan: {
    summary:
      "CCNP Automation is two exams — the 350-901 AUTOCOR core and one concentration such as 300-435 ENAUTO — and the efficient plan runs 16 to 20 weeks at 10 to 14 hours a week, roughly 180 to 240 hours in total, with the core consuming about 60 percent of the time because it is the 120-minute, $400 exam covering the broadest ground. The two exams are sequential in practice: most candidates pass the core first, because AUTOCOR tests the foundation — network automation systems, infrastructure as code, operations and AI in automation — and the concentration then deepens one area, with ENAUTO’s published v2.0 weightings of 30 percent controller-based automation, 25 percent device-level automation, 20 percent operations, 15 percent AI in automation and 10 percent foundation acting as the scope map for the second half of the plan. Weeks one through four cover Python, REST APIs, JSON and YANG foundations, which both exams assume. Weeks five through eight work the AUTOCOR core in depth, including infrastructure-as-code concepts and operations, with a timed 120-minute practice sit to close. Weeks nine through twelve move to the ENAUTO device-level and controller-based domains in the lab — Netmiko, ncclient, RESTCONF, Ansible, Jinja2 templates and model-driven telemetry. Week thirteen covers the operations and AI-in-automation domains, and weeks fourteen through sixteen are full timed practice exams at the real formats with a miss log driving final gap-closing. Candidates with strong Python and automation backgrounds can compress to twelve weeks, spending recovered time on hands-on labs rather than syntax review; candidates coming from pure routing and switching should add four weeks of Python and REST API fundamentals before touching the core topics, because the exam is automation-heavy by design. The plan’s anchor is the lab: every concentration domain is a hands-on skill, and candidates who type the code rather than read about it are the ones who finish the performance-based questions inside the clock.",
    totalHours: '180-240 hours over 16-20 weeks',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Python, REST APIs, JSON and YANG foundations', tasks: ['Learn Python fundamentals: data structures, requests, scripts, and error handling', 'Drill JSON and XML payload construction and interpretation against YANG models using tools such as YANG Suite and pyang', 'Study NETCONF and RESTCONF and the OpenConfig/IETF/native model families', 'Set up a lab: a DevNet sandbox, Cisco Modeling Labs or local VMs with IOS XE images'], hours: '11-14 hrs/week' },
      { label: 'Weeks 5-8', focus: 'Core exam depth — 350-901 AUTOCOR', tasks: ['Cover network automation systems development and design, infrastructure as code, and operations topics from the official AUTOCOR topics', 'Study the AI in automation content that appears on the core', 'Take one timed 120-minute practice sit on the core format and log every miss'], hours: '12-14 hrs/week' },
      { label: 'Weeks 9-12', focus: 'ENAUTO device-level and controller-based domains (25% + 30%)', tasks: ['Construct device-level automation with Netmiko, ncclient and RESTCONF, and Ansible playbooks', 'Work controller-based automation with Catalyst Center, SD-WAN Manager and Jinja2 templates', 'Build Day-0 provisioning solutions and on-box automations with EEM, guest shell and on-box Python', 'Practise troubleshooting RESTCONF, NETCONF and REST API solutions'], hours: '12-14 hrs/week' },
      { label: 'Week 13', focus: 'Operations and AI in automation (20% + 15%)', tasks: ['Configure model-driven telemetry subscriptions on IOS XE (CLI, NETCONF and RESTCONF)', 'Implement webhook-based monitoring and platform-API testing workflows', 'Study AI-assisted code development, AI in controller-based platforms, and security risks in AI-based automation'], hours: '11-13 hrs' },
      { label: 'Weeks 14-16', focus: 'Timed practice exams and gap closing', tasks: ['Take two timed practice sittings per exam at the real durations: 120 minutes for the core, 90 minutes for ENAUTO', 'Re-drill the miss log by domain until clean', 'Book the core and then the concentration with the five-day retake rule and your own schedule in mind'], hours: '10-12 hrs/week' }
    ],
    variants: [
      { label: 'Strong Python and automation background', detail: 'Compress to 12 weeks. Skip most of the syntax review in weeks 1-4 and spend the recovered time in the lab on controller-based automation, where the 30 percent ENAUTO weight sits.' },
      { label: 'Coming from pure routing and switching', detail: 'Add four weeks of Python, REST API and JSON fundamentals before the core. The exam is automation-heavy by design, so treat programming as scored content rather than a nice-to-have.' },
      { label: 'Already a DevNet or DevNet Associate holder', detail: 'You have the programmability base; plan 12-14 weeks and weight time toward the Cisco-platform specifics — Catalyst Center, SD-WAN Manager, ISE and ThousandEyes APIs — that the ENAUTO blueprint names.' }
    ]
  },

  prepStrategies: {
    summary:
      "Five tactics drive most of the score gains on CCNP Automation, and they all follow from one fact: Cisco reports results as pass or fail without publishing a passing score, so the only reliable readiness signal is how you perform on timed, performance-based practice — not how many multiple-choice questions you can answer from memory. First, build the published exam topics into a lab plan before studying: the ENAUTO v2.0 weightings of 30 percent controller-based, 25 percent device-level, 20 percent operations, 15 percent AI in automation and 10 percent foundation tell you exactly where hours belong, and the same weighting logic applies to the 350-901 core. Second, type the code. The exam’s stated question mix includes performance-based items, and the blueprint names specific tools — Netmiko, ncclient, RESTCONF, Ansible, Jinja2, YANG Suite — so a DevNet sandbox or local virtual environment where you run actual scripts against devices is the highest-yield study investment. Third, drill JSON and YANG payload construction, because the blueprint explicitly requires building and interpreting JSON and XML payloads from YANG models, and these items punish candidates who can read a payload but cannot construct one under a clock. Fourth, use timed practice exams with performance-based simulations and log every miss by domain, because the 120-minute core and 90-minute concentration formats reward pacing discipline, and the pass-fail result means you cannot see a score to learn from. Fifth, study the AI in automation content seriously rather than dismissing it: 15 percent of ENAUTO is AI-related, including AI-assisted code development and security risks in AI-based network automation, and candidates who skip it give away a full domain. Plan the certification as two paid seats — about $400 for the core and $300 for the concentration — and use the published retake rules, including the five-calendar-day wait after a failed attempt, to time when you sit.",
    items: [
      { title: 'Build the exam topics into a weighting-aware schedule', detail: 'The official ENAUTO v2.0 topics publish weights: 30% controller-based, 25% device-level, 20% operations, 15% AI in automation, 10% foundation. Allocate hours in those proportions for the concentration and apply the same logic to the core.' },
      { title: 'Type the code in a real lab', detail: 'The blueprint names Netmiko, ncclient, RESTCONF, Ansible, Jinja2 and YANG Suite, and the exam includes performance-based items. Run actual scripts against a DevNet sandbox or local VMs rather than reading about them.' },
      { title: 'Drill JSON and YANG payload construction', detail: 'The foundation domain requires building and interpreting JSON and XML payloads from YANG models. Practise constructing payloads under a clock, not just reading them.' },
      { title: 'Train with timed, performance-based simulations', detail: 'With no passing score published and a pass-or-fail result, readiness is judged by finishing performance-based tasks inside 120 minutes (core) or 90 minutes (concentration). Log every miss by domain.' },
      { title: 'Cover the AI in automation domain', detail: 'AI in automation is a scored 15% of ENAUTO, covering AI-assisted code development, AI in controller-based platforms, and security risks. Treat it as scored content, not a trend.' }
    ]
  },

  resourceComparison: {
    summary:
      "The buying logic for CCNP Automation is anchored by the fact that Cisco publishes the official exam topics for free — the ENAUTO v2.0 and AUTOCOR topics pages are the definitive scope map — so the first resource every candidate needs costs nothing, and no paid product can claim to define the blueprint better than Cisco’s own documents. The exam seats themselves are the biggest line item: the 350-901 core costs $400 and each concentration costs $300, both paid to Pearson VUE at scheduling, and retakes are full price with a five-calendar-day wait after a failure. Beyond Cisco’s free topics, the market splits into three tiers. Cisco’s own paid training — Cisco U. learning paths, the official courses and practice tests — typically runs several hundred dollars and is the closest match to the exam style, including performance-based questions. Cisco Press books for automation, such as the official cert guides, are usually $50 to $70 and are strongest for the foundational concepts. Third-party question banks from providers such as Boson and Pearson, typically $100 to $150, are the best timed-readiness check because they simulate the performance-based item mix, and the ones that explicitly track the current exam version are the ones to choose. A free lab — DevNet sandboxes, Cisco Modeling Labs or local virtual machines running IOS XE images — is worth more than any course for a performance-based exam, because the blueprint names tools you must actually run. Prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission; confirm the current price on the Cisco and Pearson VUE pages before buying.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco exam-topics PDFs (AUTOCOR, ENAUTO v2.0)', values: ['Free', 'Official PDFs on the Cisco Learning Network', 'The definitive scope map; download before buying anything'], note: '' },
      { label: 'Core exam seat: 350-901 AUTOCOR', values: ['$400', 'Pearson VUE, 120 minutes', 'Required for CCNP Automation'], note: '' },
      { label: 'Concentration exam seat: 300-435 ENAUTO', values: ['$300', 'Pearson VUE, 90 minutes', 'Required for CCNP Automation'], note: '' },
      { label: 'Cisco U. training paths and practice tests', values: ['~$300-800 depending on path', 'Guided learning with labs and assessments', 'Candidates who want vendor-style performance items'], note: '' },
      { label: 'Cisco Press official cert guides', values: ['~$50-70', 'Print + ebook', 'Foundational concepts for the core'], note: '' },
      { label: 'Third-party question banks (e.g. Boson ExSim, Pearson Practice Test)', values: ['~$100-150', 'Timed simulations', 'Readiness checks with performance-based items'], note: '' },
      { label: 'Free labs: DevNet sandboxes, Cisco Modeling Labs, local VMs', values: ['Free sandbox; CML tiers vary', 'Hands-on environments', 'Typing the code the blueprint names'], note: '' }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The $400 core and $300 concentration fees are Cisco\u2019s published prices; prep-product list prices change frequently, so confirm at the source before buying. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      "The five most common mistakes on CCNP Automation are all process errors rather than knowledge gaps, and the biggest is studying the wrong version: the ENAUTO exam now uses v2.0 topics that add AI in automation as a scored domain and reweight the blueprint, so material written for the previous version overweights the old areas and leaves candidates unprepared for the current paper. The second mistake is treating the exam like a multiple-choice test: Cisco’s own topics page lists performance-based questions in the mix, and candidates who prepare exclusively with flashcard-style multiple choice freeze when asked to construct a JSON payload or run a Netmiko script, so lab time is non-negotiable. Third, candidates skip the operations and AI domains — 20 percent and 15 percent of ENAUTO respectively — because they feel newer or less familiar, then lose a large share of the paper from content they never studied; the fix is studying every domain in the published weightings. Fourth, candidates assume a passing score exists to aim at, but Cisco reports only pass or fail, so training to a number such as 80 percent on practice tests is a heuristic that does not map to the real result; the fix is pacing and performance on timed simulations. Fifth, candidates underestimate the retake rules: after a failed attempt you must wait five calendar days before retesting the same exam, and after passing you must wait 180 days, so booking the core and concentration back-to-back without planning for the wait is a scheduling trap. The thread is simple: verify the current exam version, allocate hours by the published weightings, build a real lab, train to performance on pass-fail formats rather than to a score, and read the retake policy before you book.",
    items: [
      { mistake: 'Studying a superseded ENAUTO blueprint', fix: 'Use the current v2.0 exam topics, which add AI in automation as a scored domain and reweight the old outline; check the version on the official page before buying any material.' },
      { mistake: 'Preparing with multiple choice only', fix: 'Cisco lists performance-based questions in the mix. Build a lab and run Netmiko, RESTCONF, Ansible and YANG payload tasks under a clock; typed skills carry the exam.' },
      { mistake: 'Skipping the operations and AI domains', fix: 'Operations is 20% and AI in automation 15% of ENAUTO. Study the full published weighting set, including webhooks, telemetry and AI-assisted code development.' },
      { mistake: 'Training to a practice percentage', fix: 'Cisco publishes no passing score and reports only pass or fail. Judge readiness by finishing timed performance-based simulations, not by a multiple-choice percentage.' },
      { mistake: 'Booking retakes without reading the retake rules', fix: 'After a failed attempt you must wait five calendar days before retesting the same exam, and 180 days after passing it. Plan the seat schedule around those published waits.' }
    ]
  },

  questionTypes: {
    summary:
      "CCNP Automation exams are delivered on computer through Pearson VUE, and the official topics pages describe the item mix as performance-based questions, multiple choice and drag-and-drop — Cisco publishes the formats but reports only a pass or fail result, with no numeric passing score and no cohort pass-rate statistics. The core exam, 350-901 AUTOCOR, runs 120 minutes and costs $400, while the concentration exams, such as 300-435 ENAUTO, run 90 minutes and cost $300; both are available in English and Japanese, and the question count is not fixed in the published topics, so pacing discipline matters more than counting questions. Performance-based questions drop you into a task — construct a JSON payload from a YANG model, write a Netmiko script to manage configurations, or configure a model-driven telemetry subscription — and carry disproportionate weight because they test whether you can do the work rather than recognize it. Multiple-choice items test concepts from the blueprint, from OpenConfig and NETCONF to controller-based architecture, while drag-and-drop items typically ask you to order workflow steps or match API concepts. The ENAUTO v2.0 blueprint weights controller-based network automation at 30 percent, device-level automation at 25 percent, operations at 20 percent, AI in automation at 15 percent and network automation foundation at 10 percent, which tells candidates where the item mass sits. Cisco also publishes a free exam tutorial that walks candidates through each item format before exam day, which is worth taking once so the first performance-based task you see is not a surprise. The three samples below are editor-written illustrations of the published blueprint, not live exam items; one shows the device-level automation domain, one the foundation domain, and one the AI in automation domain.",
    types: [
      { name: 'Performance-based questions', share: 'A significant part of the mix', detail: 'Construct payloads, write Python automation scripts, or configure telemetry subscriptions in a simulated environment. Skippable only in the sense that Cisco exams allow navigation forward, never backward to prior items.' },
      { name: 'Multiple choice', share: 'A substantial share', detail: 'Concepts across the blueprint: YANG models, NETCONF and RESTCONF, controller architecture, API authentication, and operations tools.' },
      { name: 'Drag-and-drop', share: 'A smaller share', detail: 'Order workflow steps or match API concepts and capabilities to their descriptions.' },
      { name: 'Scenario items in the operations and AI domains', share: 'Within the 20% + 15% weight', detail: 'Webhook-based monitoring, telemetry design, AI-assisted code development and security risks in AI-based automation.' }
    ],
    samples: [
      {
        prompt: 'A network engineer must push a configuration change to 200 IOS XE devices and needs a Python library that logs in over SSH and executes commands device by device. Which tool matches the requirement?',
        options: [
          'A. Netmiko',
          'B. pyang',
          'C. YANG Suite',
          'D. Ansible Tower'
        ],
        answer: 'A',
        explanation: 'Netmiko is a Python library that simplifies SSH-based network device interaction, letting you connect to each IOS XE device and send configuration commands in a loop — exactly the multi-device push described. pyang validates and compiles YANG models, YANG Suite is a payload construction and testing tool, and Ansible Tower is an automation controller, not a Python library for per-device SSH.'
      },
      {
        prompt: 'A YANG module defines a container for interface configuration. Which data-encoding statement is correct about RESTCONF payloads?',
        options: [
          'A. RESTCONF supports JSON and XML payloads over HTTP methods such as GET, POST, PUT and DELETE',
          'B. RESTCONF requires the proprietary native models only',
          'C. RESTCONF cannot carry configuration data',
          'D. RESTCONF is a terminal-based protocol with no HTTP mapping'
        ],
        answer: 'A',
        explanation: 'RESTCONF is a REST-like protocol that maps YANG data models to HTTP methods and supports both JSON and XML payload encoding, which is why it is the natural pairing with the blueprint\u2019s requirement to construct JSON and XML payloads based on YANG models. The other options misstate the protocol: RESTCONF works with standard models such as OpenConfig and IETF as well as native ones, it carries configuration and operational data, and it is HTTP-based.'
      },
      {
        prompt: 'An organization wants an AI agent to answer network questions by fetching live device status from a controller. Per the ENAUTO v2.0 topics, which construct provides network information to an AI agent?',
        options: [
          'A. An MCP server built with Python FastMCP',
          'B. A static PDF of the configuration',
          'C. A syslog-only server with no API',
          'D. An EEM applet that never exposes data'
        ],
        answer: 'A',
        explanation: 'The v2.0 topics explicitly include constructing an MCP server to provide network information to an AI agent using Python FastMCP, which gives the agent a controlled, API-based channel to live controller data. A static PDF and a syslog-only server are not programmatic access for an agent, and an EEM applet that never exposes data defeats the purpose of giving the agent current information.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      "On CCNP Automation exam day you sit a single computer-based test through Pearson VUE — either at a test center or online with remote proctoring — with performance-based questions, multiple choice and drag-and-drop in the mix, a 120-minute clock for the 350-901 core or 90 minutes for a concentration exam, and a pass-or-fail result typically online within 48 hours. Arrive early with a government-issued photo ID whose name exactly matches your Pearson VUE and Cisco accounts, because check-in verifies identity and a mismatch can cost you the seat; personal electronics, notes and reference materials go in a locker at a center or out of the room for online testing. The exam begins with a tutorial on the testing software, then the clock starts; Cisco exams do not let you return to previous questions once you move on, so answer each item deliberately and treat the performance-based tasks as the pacing anchor — they take real time to complete, and the pass-fail result means an unfinished simulation is a certain miss. You receive a preliminary result at the end of the appointment, and the official pass or fail appears in the Cisco Certification Tracking System within about 48 hours; each passed exam also earns a Specialist certification, a tangible intermediate credential. If you fail, the published rule is a five-calendar-day wait before retesting the same exam at full price, so book the retake deliberately after targeted study rather than immediately; if you pass, you must wait 180 days before sitting the identical exam number again. On passing both the core and a concentration, your CCNP Automation is valid for three years, recertified by earning 80 CE credits, passing a qualifying exam or advancing to CCIE, and an expired certification requires repeating the full exam process.",
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
      'Two exams are required for CCNP Automation: a core (350-901 AUTOCOR) and a concentration (300-435 ENAUTO or 300-635 DCNAUTO).',
      'Cisco exams do not allow returning to previously answered questions; each item is final when you move on.',
      'Results are pass or fail, reported online within 48 hours; Cisco publishes no passing score and no pass-rate statistics.',
      'The core is 120 minutes and $400; each concentration is 90 minutes and $300.',
      'Retake rule: five calendar days after a failed attempt, and 180 days after passing the identical exam.',
      'The certification is valid for three years; professional-level recertification requires 80 CE credits or a qualifying exam path, and expired certifications require the full exam process again.',
      'A valid photo ID with an exact-name match is required; personal electronics and notes are not permitted at the workstation.'
    ],
    afterwards:
      "Your preliminary result appears at the end of the appointment and the official pass or fail posts in the Cisco Certification Tracking System within about 48 hours; each exam you pass also earns a Specialist certification, so even before the full CCNP you have a marketable intermediate credential. If you fail, respect the published five-calendar-day wait before retesting at full price and re-study from the current exam topics rather than the same material — the pass-fail result means you get no diagnostic score, so rebuild around the domains your practice logs flagged. If you pass both the core and a concentration, your CCNP Automation is active for three years from the date you complete the requirements. Recertify by earning 80 continuing education credits through approved Cisco training, by passing a qualifying exam, or by advancing to CCIE, and diarize the expiration date immediately, because an expired certification is not renewed — Cisco requires the full exam process again. Keep your account profile current, track CE credit claims through the Cisco Continuing Education portal within 365 days of completing an activity, and remember that recertifying the highest-level credential renews the certifications beneath it automatically."
  }
};

export default data;
