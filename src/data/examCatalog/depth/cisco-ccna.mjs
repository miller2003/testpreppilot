// Depth content for: cisco-ccna
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam code, fees, scoring model, retake rules and retirement dates were taken from Cisco’s current CCNA certification and exam pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$96,800 median for network and computer systems administrators (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics does not track a job titled "CCNA" — no government wage series does — so any salary figure attributed to the certification itself is a job-board aggregate, not government data. The closest official occupation to the role a CCNA holder is hired into is Network and Computer Systems Administrators, SOC 15-1244, and we have used it deliberately because that is the occupational family the CCNA blueprint serves: routing, switching, IP connectivity, and network device administration. That occupation recorded a May 2024 median annual wage of $96,800, with the lowest 10 percent under $60,320 and the highest 10 percent over $150,320. The spread matters because the CCNA sits at an interesting point on it: it is an entry-to-mid level credential, so a first networking job lands you toward the lower end, typically as a network administrator or support engineer, while a CCNA holder who converts the automation and programmability objectives into real network-automation work climbs toward the top decile far faster than a peer who treats the cert as a checkbox. The occupational headline is a clear headwind and should be stated plainly. BLS projects a 4 percent decline for network and computer systems administrators from 2024 to 2034, with about 14,300 openings a year driven entirely by replacement need as incumbents retire or move on. The work that is shrinking is manual, per-device configuration and break-fix administration — which is exactly why the Automation and Programmability domain, and the IP Connectivity domain that underpins modern routing, are the parts of the CCNA most worth over-investing in. The Cisco Certified Network Associate is widely treated as the industry’s baseline networking credential, and employers still list it as a preferred or required qualification for network operations roles even as the occupation’s headcount shrinks.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 ($46.54/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $60,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '331,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~14,300 per year', note: 'BLS OOH Job Outlook, 2024-34 — all from replacement need' }
    ],
    growth: '-4% projected change 2024-34 (decline), with ~14,300 replacement openings a year; automation, cloud and programmability skills are what move you off the shrinking side of this occupation',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Cisco publishes no pass rate and no passing score — only a scaled score range',
    summary:
      'Cisco does not publish a pass rate for the CCNA, and unlike CompTIA it also does not publish the passing score. The only scoring fact Cisco states for the 200-301 exam is that results use a scaled range of 300 to 1000, and that you must meet a passing threshold Cisco sets internally for each exam form. You will see "825 out of 1000" repeated across forums and bootcamp sites as the CCNA cut score; treat it as folklore, not a published figure. Cisco has never confirmed it, and the company’s own position is that the passing standard is determined per form and is not disclosed. Chasing a rumoured percentage is the wrong mental model anyway, because Cisco equates every exam form: a harder combination of items and simulations demands the same underlying ability as an easier one, so the raw-to-scaled conversion is not linear and cannot be reverse-engineered from practice-test percentages. What Cisco does publish, and what matters more than any pass rate, is the retake schedule. If you fail, you must wait five calendar days before sitting again. If you pass, you cannot retake the same exam code for 180 days — a rule that exists to stop score inflation, not to punish you. The score report you receive at the end is more useful than a pass rate would be: it breaks your performance down by the six domains, so a failed attempt produces an exact study plan rather than a guess. Note also that the CCNA is a forward-only exam — once you submit a question and move on, you cannot return to it — so you cannot "review and change" answers the way you can on a CompTIA exam, and that structural fact shapes how you should pace the 120 minutes far more than any rumoured cut score does.',
    source: {
      label: 'Cisco — CCNA exam policies and scoring',
      url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html'
    },
    caveat:
      'No pass rate and no passing score are published by Cisco, by Pearson VUE, or by any accrediting body for the CCNA. We have deliberately left the pass-rate table empty. What is verifiable is the 300-1000 scaled score range, the five-day retake wait after a fail, and the 180-day wait after a pass, which the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Start by confirming which CCNA you are studying for. The current exam is 200-301, version 1.1. Version 1.1 has a last day to test of 2 February 2027, and version 2.0 is scheduled to begin on 3 February 2027, at which point the existing 1.1 blueprint is retired and a new one takes its place. This is the single most expensive mistake available to a CCNA candidate: study material written for any earlier revision will leave real gaps, and a voucher bought for 1.1 is no use once 2.0 is live. The current 1.1 domain weightings are Network Fundamentals 20 percent, Network Access 20 percent, IP Connectivity 25 percent, IP Services 10 percent, Security Fundamentals 15 percent, and Automation and Programmability 10 percent. Read those weights as a time budget. IP Connectivity alone is a quarter of the paper and it is the domain most candidates underestimate, because it is where subnetting, OSPF, and static and dynamic routing either click or do not. Network Fundamentals and Network Access together are 40 percent and they are the foundation everything else builds on. The plan below runs ten weeks at roughly 10-12 hours a week and assumes you have a lab you can break — Packet Tracer is free and sufficient for most of the blueprint, but you should run at least some real device images if your machine can handle it. If you have never opened Packet Tracer, do that before Week 1; this exam is hands-on and a candidate who has only read about configuring a trunk port will not complete the simulations in the time allowed.',
    totalHours: '100-130 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Network fundamentals and lab build',
        tasks: [
          'Install Cisco Packet Tracer and build a small multi-switch, multi-router topology you can reuse all ten weeks',
          'OSI and TCP/IP models, encapsulation, and where each protocol lives',
          'IPv4 and IPv6 addressing and subnetting drills until you can derive a network range without a calculator',
          'MAC addresses, ARP, and the difference between a switch and a router at frame level'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Domain 2 — Network Access (20%)',
        tasks: [
          'VLANs and trunking: create VLANs, assign access ports, configure 802.1Q trunks and verify with show commands',
          'Spanning Tree Protocol: root bridge election, port states, and why a loop takes the network down',
          'EtherChannel and first-hop redundancy concepts',
          'Wireless LAN basics: AP modes, SSIDs, and the difference between a controller-based and autonomous AP'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Domain 3 — IP Connectivity (25%)',
        tasks: [
          'Routing fundamentals: the routing table, administrative distance, and longest-prefix match',
          'Static routing and default routes, and when each is appropriate',
          'OSPF: neighbour formation, router and network LSAs, and a single-area configuration from scratch',
          'Subnetting at speed under a clock — this domain is where timed practice separates passes from fails'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Domain 4 — IP Services (10%)',
        tasks: [
          'DHCP and DNS behaviour on a network, and how to verify them',
          'NAT: static, dynamic and PAT, and reading a translation table',
          'First-hop redundancy protocols and the role of SNMP, syslog and NetFlow as monitoring tools',
          'QoS concepts at a high level — know the vocabulary, the exam asks conceptually here'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Domain 5 — Security Fundamentals (15%)',
        tasks: [
          'The CIA triad and the difference between threats, vulnerabilities and exploits',
          'Device security: console and VTY lines, SSH, and why telnet is a fail',
          'ACLs: standard versus extended, numbered versus named, and where in the path they filter',
          'VPN concepts, wireless security (WPA versus WPA2/WPA3), and the basics of 802.1X'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Domain 6 — Automation and Programmability (10%)',
        tasks: [
          'The difference between traditional and controller-based network architectures',
          'REST APIs conceptually: methods, data encoding with JSON and XML, and what a call returns',
          'Configuration management and automation tools (Ansible, Puppet, Chef, Terraform) at a conceptual level',
          'Cisco DNA Center, SD-Access and the intent-based networking vocabulary — know the terms, not the CLI'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Simulation and hands-on question rehearsal',
        tasks: [
          'Timed Packet Tracer tasks with no reference open: configure a trunk, fix a broken OSPF adjacency, write an ACL',
          'Practise reading show and debug output fast — the simulations give you the CLI and nothing else',
          'Drill subnetting under a 60-second-per-question limit',
          'Time each task — simulations are the main reason candidates run out of the 120 minutes'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Three full 120-minute practice exams weighted to the six current domains',
          'Rebuild every lab you missed rather than re-reading the explanation',
          'Final pass over OSPF neighbour requirements and ACL placement — the two highest-density sources of cheap points',
          'One quiet day before the exam'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Working in networking or help-desk already', detail: 'Six to seven weeks. Your day job covers fundamentals and access; spend the recovered time on IP Connectivity and the Automation domain, which working administrators routinely under-practise because they configure by hand.' },
      { label: 'Career changer with no network experience', detail: 'Fourteen to sixteen weeks at 8 hrs/week. Add three weeks before Week 1 purely on subnetting and the OSI model. The concepts are learnable quickly; the speed to apply them under a clock is not, and the simulations punish slow hands.' },
      { label: 'Coming from a CCNP or strong routing background', detail: 'Three to four weeks. You already have the depth; what you lack is the 1.1 weighting and the breadth across wireless, security and automation. Skip Weeks 2-5 and work the lighter domains hard so they do not cost you points.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The CCNA rewards candidates who can configure and verify, not candidates who recognise the right answer in a list. The exam is heavy on hands-on simulations inside a real CLI, and a candidate who has only watched videos will freeze in front of a terminal with a running clock. Build the muscle memory before the theory outruns it.',
    items: [
      {
        title: 'Live-lab every protocol, do not just read about it',
        detail: 'Spin up the topology in Packet Tracer and actually type the commands: create the VLAN, trunk it, break OSPF on purpose and watch the adjacency drop, then fix it. The simulations grade configuration and verification, and verification — reading show output to confirm what you did — is the skill most often missing from video-only learners.'
      },
      {
        title: 'Subnet at speed, on paper, under a clock',
        detail: 'IP Connectivity is 25 percent of the paper and subnetting shows up inside simulations and multiple choice alike. Drill until you can derive a network range, broadcast address and usable host count in under a minute without a calculator. This is the single highest-leverage timed skill on the exam.'
      },
      {
        title: 'Learn to read show and debug output fast',
        detail: 'The simulations give you the device CLI and nothing else — no browser, no documentation pane like a CompTIA PBQ. Being able to parse show ip ospf neighbor, show interfaces trunk and show access-lists quickly is what lets you diagnose and fix within the time budget. Practise with the reference closed from Week 7 onward.'
      },
      {
        title: 'Treat the exam as forward-only when you pace it',
        detail: 'The CCNA does not let you return to a question once you move past it, so you cannot mark-and-review the way you can on a CompTIA exam. Answer in the order presented, commit to each one, and do not burn the clock hoping to come back. Spend the first pass clearing the multiple choice briskly so the simulations have time to breathe.'
      },
      {
        title: 'Do not over-invest in the automation domain too early',
        detail: 'Automation and Programmability is only 10 percent and it is conceptual, not hands-on — you need the vocabulary (REST, JSON, infrastructure-as-code tools, controller-based architectures), not the ability to write code. Learn it last so it does not crowd out IP Connectivity and Network Access, which together are 45 percent of the paper.'
      },
      {
        title: 'Verify you are studying 200-301 v1.1, not an old revision',
        detail: 'Confirm the version on the cover of any book or course. Material for superseded revisions covers different weightings and can omit current content; and remember the 1.1 last-day-to-test of 2 February 2027, after which 2.0 takes over. Booking a 1.1 voucher with no time to sit it before that date is a wasted purchase.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision is less about which author and more about which version and which lab. Packet Tracer is free and covers most of the blueprint, so a lab is not a cost you need to incur. What you should not cheap out on is current-edition material — anything not explicitly "200-301 v1.1" risks teaching retired content. Cisco’s own bundles add training and a discount versus buying pieces separately.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam voucher (200-301)', values: ['$300 USD list', 'Pearson VUE, test centre or online', 'Required — the standard single-attempt voucher'] },
      { label: 'Cisco Learning Network CCNA training', values: ['Free overview, paid courses via Cisco U.', 'eLearning and labs', 'Official content aligned to the current 1.1 blueprint'] },
      { label: 'Cisco Packet Tracer', values: ['Free', 'Desktop simulator', 'The single most valuable hands-on resource for the simulations'] },
      { label: 'Neil Anderson CCNA course (Udemy)', values: ['~$15-30 during Udemy sales', 'Video with labs', 'A complete, affordable walkthrough with a bundled lab guide'] },
      { label: 'David Bombal CCNA labs (Udemy / own site)', values: ['~$15-40', 'Video and Packet Tracer labs', 'Practice-heavy learners who want to type, not just watch'] },
      { label: 'CCNA 200-301 Official Cert Guide (Odom, Cisco Press)', values: ['~$45-60 per volume, ~$90 for both', 'Print + eBook with labs', 'The canonical reference — confirm the v1.1 edition'] },
      { label: 'Boson ExSim practice exams', values: ['~$99-179 for the full simulator', 'Simulated exam engine', 'The closest non-Cisco practice to the real simulation grading'] },
      { label: 'Jeremy’s IT Lab (YouTube + free exams)', values: ['Free', 'Video and Anki flashcards', 'A zero-cost complete path, widely used by first-timers'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the $300 voucher price is Cisco’s US list and is the firm reference point, while Udemy and course prices swing with promotion. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most CCNA failures trace back to three things: studying an old blueprint, reading instead of labbing, and mismanaging a forward-only 120-minute clock against simulations that take real time to type. The version trap is the one that was not a mistake two years ago and now is.',
    items: [
      {
        mistake: 'Studying a superseded CCNA revision',
        fix: 'The current exam is 200-301 v1.1, with a last day to test of 2 February 2027 and version 2.0 starting 3 February 2027. Old books, courses and question banks still sell and still rank well in search but cover different weightings. Confirm "200-301" and the v1.1 revision on the cover, and do not book a 1.1 voucher you cannot sit before the cutover date.'
      },
      {
        mistake: 'Preparing entirely with video and practice questions',
        fix: 'The exam grades configuration and verification inside a real-device CLI. A candidate who scores well on a question bank but has never built an OSPF adjacency from scratch under a clock is not ready. Convert at least a third of your hours into typed, timed lab tasks in Packet Tracer.'
      },
      {
        mistake: 'Under-practising subnetting and IP Connectivity',
        fix: 'IP Connectivity is 25 percent of the paper and subnetting threads through multiple domains. Candidates who can explain OSPF but cannot derive a subnet in under a minute lose points in both the simulations and the multiple choice. Drill subnetting daily from Week 1; it is the highest-leverage timed skill on the exam.'
      },
      {
        mistake: 'Treating the exam as reviewable like a CompTIA test',
        fix: 'The CCNA is forward-only — once you submit a question and advance, you cannot return to it or change the answer. There is no mark-and-review pass. Answer in order, commit, and pace so the simulations get their share of the 120 minutes rather than being rushed at the end.'
      },
      {
        mistake: 'Neglecting verification commands',
        fix: 'Many candidates configure correctly but cannot prove it, and the simulations expect both. Know show ip ospf neighbor, show interfaces trunk, show vlan brief, show access-lists and show ip nat translations cold. Being able to confirm your own work is what turns a partial task into full credit.'
      },
      {
        mistake: 'Forgetting the certification expires and the retake clock',
        fix: 'The CCNA is valid for three years and renewed with 30 continuing-education credits (or by passing a higher certification). Also remember the retake rule: a fail needs a five-calendar-day wait, and a pass locks you out of the same code for 180 days. Diary the expiry the week you pass, and do not assume you can immediately resit a passed exam.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 200-301 exam is delivered in English in a single 120-minute block and is scored on Cisco’s 300-to-1000 scaled range, with the passing threshold set internally per form and not disclosed. The paper mixes multiple-choice and multiple-response items with hands-on simulations inside a real device CLI, and Cisco’s own description puts the item count in the range of roughly 90 to 110 questions plus the simulations, though Cisco does not publish an exact fixed total. The simulations are the strategic heart of the exam: you are dropped into a terminal and asked to configure or verify something — a trunk, an OSPF adjacency, an ACL — and you are graded on the result, not on recognising the right line in a list. Crucially, the exam is forward-only: you cannot return to a question after you advance. That means the order you work in is fixed, and pacing is about holding a steady tempo across all items so the simulations are not rushed. The six current domains are Network Fundamentals (20%), Network Access (20%), IP Connectivity (25%), IP Services (10%), Security Fundamentals (15%) and Automation and Programmability (10%). Because Cisco equates forms, your scaled score is not a percentage of items correct and cannot meaningfully be converted into one, which is why we have not quoted a pass rate.',
    types: [
      { name: 'Multiple-choice (single answer)', share: 'A large share of the paper', detail: 'Concept and configuration recognition — protocol behaviour, show-output interpretation, "which command" items. Distractors are usually real commands or real outputs that do something adjacent, so partial familiarity is punished.' },
      { name: 'Multiple-response', share: 'A meaningful minority', detail: 'The stem states how many to select and scoring is all-or-nothing. Common where several steps together complete a configuration or a troubleshooting sequence.' },
      { name: 'Simulations (hands-on CLI)', share: 'A small number of high-weight items', detail: 'A real device CLI in Packet Tracer-like or real IOS. Configure or verify a task; graded on the resulting state. No browser, no documentation pane — only the terminal.' },
      { name: 'Drag-and-drop / testlet', share: 'A minority', detail: 'Ordering steps or matching items to categories; common in the fundamentals and security domains.' }
    ],
    samples: [
      {
        prompt: 'A network administrator needs to allow only traffic from the 192.168.10.0/24 subnet to reach a web server at 10.0.0.5 on TCP port 80, and deny all other traffic from that subnet. Which standard access-list configuration achieves this when applied inbound on the server-facing interface?',
        options: [
          'A. access-list 10 permit 192.168.10.0 0.0.0.255\\naccess-list 10 deny any',
          'B. access-list 100 permit tcp 192.168.10.0 0.0.0.255 host 10.0.0.5 eq 80\\naccess-list 100 deny ip any any',
          'C. access-list 100 permit tcp host 10.0.0.5 eq 80 192.168.10.0 0.0.0.255\\naccess-list 100 deny ip any any',
          'D. access-list 10 permit tcp 192.168.10.0 0.0.0.255 host 10.0.0.5 eq 80'
        ],
        answer: 'B',
        explanation: 'Filtering on both a source subnet and a destination address plus port requires an extended ACL (100-199), not a standard one, so A and D are out. B correctly places the source first (192.168.10.0 0.0.0.255), the destination host (host 10.0.0.5) and the port (eq 80), then ends with an explicit deny ip any any — which is the implicit behaviour anyway but should be stated. C reverses the source and destination order in the extended syntax, which is invalid for this topology: the source must come before the destination. Applied inbound on the server-facing interface, B permits exactly the intended flow and denies the rest.'
      },
      {
        prompt: 'Two routers are configured for OSPF but the adjacency between them stays in a state other than FULL. The administrator issues show ip ospf neighbor and sees the peer in EXSTART. Which of the following is the most likely cause?',
        options: [
          'A. The routers have mismatched OSPF process IDs',
          'B. The routers have mismatched MTU sizes on the connecting interfaces',
          'C. The routers are in different autonomous systems',
          'D. A passive-interface command was applied on the link'
        ],
        answer: 'B',
        explanation: 'EXSTART is the state where masters and slaves are chosen and the initial database descriptor exchange begins; a mismatch in interface MTU causes the exchange to stall there, because the neighbour cannot acknowledge a DBD packet larger than its MTU, which is the classic EXSTART-stuck symptom. A is wrong: OSPF process IDs are local to each router and do not need to match for an adjacency. C confuses OSPF (an IGP, no AS concept in this sense) with BGP. D — a passive-interface on the link — would prevent hellos entirely and the neighbour would never appear in the neighbor table at all, rather than appearing stuck in EXSTART.'
      },
      {
        prompt: 'Given the IPv4 address 172.16.34.137 with a /26 mask, which of the following is the correct network (subnet) address?',
        options: [
          'A. 172.16.34.0',
          'B. 172.16.34.128',
          'C. 172.16.34.136',
          'D. 172.16.34.192'
        ],
        answer: 'B',
        explanation: 'A /26 mask is 255.255.255.192, giving blocks of 64 addresses (0-63, 64-127, 128-191, 192-255) in the fourth octet. The host value 137 falls inside the 128-191 block, so the network address is 172.16.34.128 and the broadcast is 172.16.34.191. A is the start of the previous block, C is the host value rounded down incorrectly, and D is the next block’s start. Being able to do this in under a minute without a calculator is exactly the timed skill the IP Connectivity domain rewards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'One 120-minute block, delivered through Pearson VUE at a test centre or online with OnVUE proctoring, in English. The thing candidates most often get wrong about a Cisco exam day is the navigation model: this is a forward-only exam. You cannot skip a question and return to it, and you cannot review and change multiple-choice answers before submitting the way you can on a CompTIA exam. Once you advance, that item is locked. Build your pacing around that single fact — work in the presented order, commit to each answer, and hold a steady tempo so the hands-on simulations get the time they need. You do get a score report at the end showing performance by domain, available through your Cisco profile, but it is not printed on the spot the way a CompTIA result is; plan for the result to appear online, typically within 48 hours, rather than expecting it on screen the moment you finish. The administrative trap is identical across vendors: Cisco requires two forms of identification, one a government-issued photo ID, with the name matching your Cisco account exactly. Check the spelling the week before, because a mismatch costs you the seat and the voucher.',
    bring: [
      'Two forms of identification, both unexpired, with names matching your Cisco account exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit card is usually accepted)',
      'Your Cisco ID or the exam appointment confirmation number, in case check-in cannot locate the booking',
      'For OnVUE: a phone for check-in photographs, a completely clear desk, and a private room with a door you can close',
      'For OnVUE: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, cheat sheets and printed command references',
      'Your own paper and pens; a test centre issues an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for OnVUE, and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Log into your Cisco profile and confirm your name is spelled exactly as it appears on your ID. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for photographs of your face, both IDs and the whole room.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the six domain weights and a subnetting quick-reference (block sizes for /26, /27, /28) on the noteboard. Two minutes here buys back far more later.' },
      { time: '0-90 minutes', detail: 'Work in presented order at a steady tempo. Answer each item and advance — there is no going back. Keep an eye on the clock so the simulations are not rushed in the final minutes.' },
      { time: 'Final minutes', detail: 'Finish the last simulation with care; once you submit, the exam is locked and you cannot revisit anything. Submit rather than letting the clock expire.' }
    ],
    rules: [
      'Forward-only navigation: you cannot return to a question or change an answer once you advance past it.',
      'Scored on a 300-1000 scaled range; the passing threshold is set per form and is NOT published by Cisco.',
      'Two forms of ID are required, one government-issued with photo, names matching your Cisco account exactly.',
      'No scheduled breaks in a 120-minute exam, and the clock does not stop if you leave.',
      'Erasable noteboard only at a test centre; OnVUE candidates get a digital whiteboard and no physical writing materials.',
      'Inside a simulation you have only the device CLI — no browser, no documentation pane.',
      'After a fail you must wait five calendar days to retake; after a pass you cannot retake the same code for 180 days.'
    ],
    afterwards:
      'You will not get a printed pass/fail on the spot the way a CompTIA candidate does; Cisco posts your result to your profile, usually within 48 hours, with a score report that breaks performance down by the six domains. On a pass, your CCNA is valid for three years from the date you pass and is managed through Cisco’s CE programme — renew it with 30 continuing-education credits or by passing a higher-level Cisco certification before it lapses. Log the expiry date the week you pass. On a fail, the domain breakdown is your roadmap: identify the one or two areas that dragged the scaled score down — usually IP Connectivity or Network Access — and spend two to three weeks labbing those specifically before using the five-day retake window. Do not book the immediate retake on the same weak knowledge; the report tells you precisely where to aim, and a second fail inside the 300-1000 range costs another $300 voucher with nothing to show for it.'
  }
};

export default data;
