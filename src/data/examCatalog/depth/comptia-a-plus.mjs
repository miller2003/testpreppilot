// Depth content for: comptia-a-plus
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
  reviewedBy: 'Objectives, exam codes, fees, scoring, retake rules and renewal terms were taken from CompTIA’s current A+ certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$61,550 median for computer support specialists (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics has no occupation literally called "A+ certified", and no government wage series tracks a certificate, so any salary page that quotes a figure for the certification itself is a job-board aggregate, not official data. The closest official occupation to the role A+ prepares you for is Computer Support Specialists, SOC 15-1231, which BLS splits into two measurable groups: network support specialists and user support specialists. We have used the parent occupation deliberately because A+ is the industry’s baseline technician credential and its holders sit across both groups. The overall May 2024 median was $61,550; within that, network support specialists had a median of $73,340 and user support specialists $60,340. The lowest 10 percent for network support was under $46,010 and the highest 10 percent over $124,470; for user support the lowest 10 percent was under $38,780 and the highest 10 percent over $98,010. The spread matters because A+ is a genuine entry credential — a first help-desk role lands toward the lower end — but an A+ holder who pairs it with the networking and troubleshooting depth the exam now contains can move into the network-support group and its higher median within a couple of years. The occupational headwind should be stated plainly: BLS projects a 3 percent decline for computer support specialists from 2024 to 2034, with about 50,500 openings a year driven largely by replacement as workers move on or retire. The routine, break-fix support work that is shrinking is exactly why the current A+ blueprint leans harder into networking, virtualization, cloud and security — the parts of the role that are not being automated away. We have not quoted a job-board aggregate here because it would not isolate A+ holders and would not be comparable to the BLS figure.',
    rows: [
      { label: 'Median annual wage, computer support specialists (overall)', value: '$61,550', note: 'BLS Occupational Outlook Handbook, May 2024 ($29.59/hr)' },
      { label: 'Median — network support specialists', value: '$73,340', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — user support specialists', value: '$60,340', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent — network support', value: 'more than $124,470', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '882,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~50,500 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement need' }
    ],
    growth: '-3% projected change 2024-34 (decline), with ~50,500 replacement openings a year; networking, virtualization, cloud and security skills are what move you off the shrinking support side',
    source: {
      label: 'BLS Occupational Outlook Handbook — Computer Support Specialists',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'CompTIA publishes no pass rate — but it does publish the passing scores: 675 and 700 out of 900',
    summary:
      'CompTIA does not release pass-rate statistics for A+ or any of its certifications, and it never has. Unlike Cisco, however, it does publish the cut scores for both of the two exams that make up A+. Core 1 (220-1201) is scored on a 100-900 scale and you need 675; Core 2 (220-1202) uses the same scale and you need 700. Neither is a clean percentage of the questions — 675 is 75 percent of the scale but the scale is not the paper. CompTIA equates every exam form so that a harder set of items demands the same underlying ability as an easier one, and performance-based questions carry more weight than a single multiple-choice item, so the raw-to-scaled conversion is not linear and cannot be reverse-engineered. Aiming for "75 percent on practice tests" is a heuristic that does not map onto the scoring model; aim instead to complete every performance-based task type unaided. Because A+ is two separate exams, the pass-rate question is really two questions, and the failure pattern is well known: candidates clear Core 1 and then let Core 2 lapse, or book both too close together and run out of study time on the second. Two policies matter more than a pass rate. First, retakes: CompTIA imposes no waiting period between your first and second attempt on an exam, but from the third attempt onward you must wait 14 calendar days, and every attempt is paid at full price unless you bought a retake bundle. Second, the score report: unlike Cisco, CompTIA gives you the outcome and your scaled score on screen the moment you finish, plus a printed report showing relative performance by domain — genuinely diagnostic, and the single biggest administrative advantage A+ has over the Cisco exams on this site.',
    source: {
      label: 'CompTIA — A+ exam scoring and retake policies',
      url: 'https://www.comptia.org/en-us/certifications/a/'
    },
    caveat:
      'No pass rate is published by CompTIA, by Pearson VUE, or by the accreditation that A+ carries. We have deliberately left the pass-rate table empty. What is published and verifiable are the 675/900 (Core 1) and 700/900 (Core 2) cut scores and the retake schedule, which the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The first thing to establish is which A+ you are studying for, because A+ is two exams, not one. The current version is A+ V15, exams 220-1201 (Core 1) and 220-1202 (Core 2), which launched on 25 March 2025. The immediately preceding version, V14 (220-1101 and 220-1102), was retired for English-language testing on 25 September 2025 and for other languages on 19-20 December 2025, so any V14 book still on sale is now superseded and any V14 voucher is no longer usable. CompTIA typically retires a version about three years after launch, so V15 is expected to remain live until around 2028, but confirm at the CompTIA site before committing to a long study window. Core 1 covers Mobile Devices 13 percent, Networking 23 percent, Hardware 25 percent, Virtualization and Cloud 11 percent, and Hardware and Network Troubleshooting 28 percent. Core 2 covers Operating Systems 28 percent, Security 28 percent, Software Troubleshooting 23 percent, and Operational Procedures 21 percent. Notice that troubleshooting is the heaviest single theme across both exams — Hardware and Network Troubleshooting is 28 percent of Core 1 and Software Troubleshooting is 23 percent of Core 2 — and that the whole certification now leans into networking, virtualization and security rather than pure box-building. The plan below runs ten weeks at roughly 10-12 hours a week, split so Core 1 and Core 2 each get a real block, and assumes you have at least one physical or virtual machine you can build and break. If you have no PC you are allowed to take apart, borrow or buy a cheap one before Week 1; this exam rewards people who have actually seated a DIMM and installed an OS.',
    totalHours: '100-130 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Core 1 — lab build and hardware foundations',
        tasks: [
          'Get a PC or a strong VM you can rebuild; learn to seat RAM, storage and expansion cards without static damage',
          'Motherboards, CPUs, chipsets, and the difference between form factors',
          'Storage: HDD vs SSD, NVMe vs SATA, RAID levels at a conceptual level',
          'Peripherals and connectors — know what plugs into what, the most-tested recall topic on Core 1'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Core 1 — Networking (23%) and Mobile Devices (13%)',
        tasks: [
          'TCP/IP basics, private vs public addressing, and the purpose of each common port',
          'Cabling, wall jacks, and the difference between a switch, a router and an access point',
          'Wireless standards and the 2.4 vs 5 GHz trade-off, plus basic SOHO router configuration',
          'Laptops, tablets and mobile device components, and the differences from desktop hardware'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Core 1 — Virtualization, Cloud (11%) and Hardware Troubleshooting (28%)',
        tasks: [
          'Virtualization concepts: hypervisors, VMs, and resource allocation',
          'Cloud models and the client-side support role for cloud services',
          'A fixed troubleshooting method: identify, establish theory, test, plan, verify, document',
          'Troubleshoot RAM, storage, displays and network faults using that method on real hardware'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Core 1 exam readiness and first sitting',
        tasks: [
          'Two full 90-minute Core 1 practice exams weighted to the five Core 1 domains',
          'Rebuild every lab you missed rather than re-reading the explanation',
          'Book and sit Core 1 — do not let it lapse while you study Core 2',
          'Note the domain breakdown from your score report to confirm weak areas'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 6-7',
        focus: 'Core 2 — Operating Systems (28%)',
        tasks: [
          'Windows versions, editions and the upgrade paths between them',
          'Command-line: ipconfig, ping, netstat, sfc, chkdsk, and the recovery environment',
          'macOS and Linux basics at a support level — file systems, shells, and common commands',
          'OS installation, licensing, and the difference between an image and a clean install'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 8',
        focus: 'Core 2 — Security (28%)',
        tasks: [
          'Physical and logical security controls, and the difference between them',
          'Malware types and the removal and prevention workflow',
          'Social engineering and phishing, and the user-side controls that counter them',
          'Authentication, MFA, and basic encryption concepts at a support level'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Core 2 — Software Troubleshooting (23%) and Operational Procedures (21%)',
        tasks: [
          'Troubleshoot OS, application and malware problems using the fixed method',
          'Documentation, change management and the discipline of a ticket',
          'Safety, environmental handling, and the basics of a support professional’s conduct',
          'Run timed Core 2 practice tasks with the tool only, no browser open'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Core 2 timed exams and gap closing',
        tasks: [
          'Three full 90-minute Core 2 practice exams weighted to the four Core 2 domains',
          'Re-lab every miss rather than re-reading it',
          'Final pass over OS commands and the troubleshooting method — the two highest-density sources of cheap points',
          'Book and sit Core 2; both cores passed = the A+ certification'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Building or fixing PCs already', detail: 'Seven to eight weeks. Your hands-on covers Core 1 hardware and much of Core 2 OS work; spend the recovered time on networking, virtualization, security vocabulary and the Operational Procedures domain, which working technicians routinely under-read.' },
      { label: 'Complete beginner', detail: 'Twelve to fourteen weeks at 8 hrs/week. Add two weeks before Week 1 on pure foundations — what a motherboard does, what an IP address is. The concepts are learnable; the hardware familiarity is not, and the exam expects you to have touched the parts.' },
      { label: 'Holding V14 (220-1101/1102) partially', detail: 'Four to five weeks, mainly a delta read. V15 raised networking, virtualization, cloud and security weighting and trimmed pure hardware; if you passed one V14 core, confirm whether it still counts toward V15 — it does not, the codes changed — and sit the matching V15 core.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'A+ is two exams stitched into one credential, and the most common failure is treating it as a single study project. The Prep strategy that matters most is simply sitting Core 1 before you start Core 2, so the first pass is banked and the second has a real deadline. Beyond that, A+ rewards people who have actually done the tasks, not people who recognise them in a list.',
    items: [
      {
        title: 'Sit Core 1 before you study Core 2',
        detail: 'A+ is not awarded until both 220-1201 and 220-1202 are passed, but there is no rule that you must study them in parallel. Clear Core 1, bank the pass, then focus Core 2 with a real deadline. Candidates who study both at once often run out of time on the second and let the first lapse, which wastes the voucher.'
      },
      {
        title: 'Touch the hardware, do not just watch it',
        detail: 'Core 1 is built on physical reality — seating RAM, identifying a connector, telling an M.2 from a SATA drive. A candidate who has only watched videos will freeze on a matching or identification item. Get a cheap PC or a strong VM and actually build, break and rebuild it. The performance-based items grade that familiarity.'
      },
      {
        title: 'Drill the command line until it is reflex',
        detail: 'Core 2 leans hard on commands: ipconfig, ping, netstat, sfc, chkdsk, and the recovery environment. Know what each returns and when to use it. The troubleshooting domains reward candidates who can move from a symptom to the right command without thinking, and that only comes from typing them.'
      },
      {
        title: 'Learn the fixed troubleshooting method and use it everywhere',
        detail: 'Both exams test a structured approach: identify the problem, establish a theory, test, plan, verify, and document. The distractors in scenario questions are usually plausible shortcuts that skip a step — especially verification and documentation. Recite the method and apply it to every fault you practise, hardware or software.'
      },
      {
        title: 'Do the PBQs last, and know that you can',
        detail: 'CompTIA front-loads performance-based questions but lets you skip and return — the opposite of the Cisco exams. Mark every PBQ, clear the multiple choice at a fast tempo, then come back with the remaining time divided by the tasks. Candidates who work in presented order burn the clock on the first PBQs and rush the rest.'
      },
      {
        title: 'Confirm you are on V15 before buying anything',
        detail: 'V14 (220-1101/1102) was retired for English testing on 25 September 2025 and for other languages in December 2025; V14 material is still on sale and superseded. Anything you buy must say 220-1201 / 220-1202 or "V15". And with about a three-year lifecycle, V15 is expected to retire around 2028 — plan your sittings before that window.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision is which version, then whether to pay for CompTIA’s own bundles that add labs and a retake to each voucher. V14 material is retired and still ranks in search; anything you buy must say 220-1201 / 220-1202. Each exam is a separate voucher — about $274 at the 2026 US list per core, with a retake bundle around $359 per core — so the full certification is two vouchers, and that total is the firm reference point against which reseller and sale prices move.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam voucher (220-1201 Core 1)', values: ['~$274 US list per core; bundles and resellers vary', 'Pearson VUE, test centre or online', 'Required for Core 1 — budget two vouchers for the full cert'], },
      { label: 'Exam voucher (220-1202 Core 2)', values: ['~$274 US list per core; bundles and resellers vary', 'Pearson VUE, test centre or online', 'Required for Core 2 — the second half of the credential'], },
      { label: 'CompTIA CertMaster bundles (Perform + Practice)', values: ['Bundle pricing per core at the CompTIA Store; includes voucher and often a retake', 'eLearning with labs plus adaptive practice', 'Candidates with no lab of their own and no employer training budget'], },
      { label: 'A cheap PC or a strong VM', values: ['Free to ~$100', 'Self-built lab', 'The most valuable resource for Core 1 hardware and PBQs'], },
      { label: 'Professor Messer A+ videos and notes', values: ['Free videos; low-cost notes and practice', 'Video with downloadable notes', 'A zero-cost complete path, widely used by first-timers'], },
      { label: 'Mike Meyers / Sybex A+ Study Guide', values: ['~$50-60 list per volume', 'Print + eBook with test bank', 'A single ordered reference — confirm the 220-1201/1202 edition'], },
      { label: 'Jason Dion practice tests (Udemy)', values: ['~$15-30 during Udemy sales', 'Timed practice exams with explanations', 'Cheap readiness checks for both cores'], } 
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the ~$274 per-core voucher is CompTIA’s US list and the firm reference, while Udemy and bundle prices swing with promotion. Two vouchers are required for the full certification. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most A+ failures come from three things: studying a retired version, treating the two exams as one project and letting the first lapse, or mismanaging a 90-minute clock against performance-based tasks. The version trap here is recent and live — V14 retired in 2025 and V14 material is still for sale.',
    items: [
      {
        mistake: 'Studying V14 (220-1101/1102) material for a V15 exam',
        fix: 'V15 (220-1201 / 220-1202) launched 25 March 2025. V14 was retired for English testing on 25 September 2025 and for other languages in December 2025, so V14 books and vouchers are now unusable. V15 raised networking, virtualization, cloud and security weighting and trimmed pure hardware. Check for "220-1201 / 220-1202" or "V15" on the cover, and plan your sittings within the expected ~2028 retirement window.'
      },
      {
        mistake: 'Treating A+ as one exam and letting Core 1 lapse',
        fix: 'A+ requires both 220-1201 and 220-1202, each a separate voucher and sitting. Study and sit Core 1 first, bank it, then focus Core 2 with a deadline. Candidates who study both at once frequently run out of time on Core 2 and let the Core 1 pass sit unused, wasting the first voucher. There is no rule forcing parallel study.'
      },
      {
        mistake: 'Preparing only with multiple-choice practice tests',
        fix: 'The performance-based questions put you in front of a task — identify a component, run a command, fix a fault — and carry more weight than a single multiple-choice item. A candidate who scores 90 percent on a question bank but has never seated a DIMM or run sfc under a clock is not ready. Convert study time into real, timed tasks.'
      },
      {
        mistake: 'Skipping the command line and the troubleshooting method',
        fix: 'Core 2 leans on commands and on a structured troubleshooting method, and the scenario distractors are usually shortcuts that skip a step. Know ipconfig, ping, netstat, sfc and chkdsk cold, and apply identify-theory-test-verify-document to every fault. Rote learners answer the obvious item and fail the scenario that inverts it.'
      },
      {
        mistake: 'Spending the first forty minutes on the performance-based questions',
        fix: 'CompTIA presents PBQs early but allows you to skip and return — unlike the Cisco exams. Skip them on the first pass, clear the multiple choice quickly, then allocate the remaining time across the PBQs. Candidates who work in presented order run out of clock on the bulk of the paper.'
      },
      {
        mistake: 'Forgetting the certification expires and the retake clock',
        fix: 'A+ is a CompTIA CE certification, valid for three years, renewed with 20 continuing-education units plus the CE fee (about $75 over the cycle). Also remember the retake rule: no wait between attempts one and two, but a 14-day wait from the third attempt, each paid unless you bought a retake bundle. Diary the expiry the week you pass.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each A+ exam — Core 1 (220-1201) and Core 2 (220-1202) — is a maximum of 90 questions in 90 minutes, in English, scored on a 100-900 scale. The cut scores differ by exam: you need 675 for Core 1 and 700 for Core 2. The papers mix multiple choice — single-answer and multiple-response — with performance-based questions that put you in front of a task and ask you to complete it. PBQs are typically presented at the start and weighted more heavily than individual multiple-choice items, but you may skip them and return, so the presented order is not the order you should work in. Core 1 domains are Mobile Devices (13%), Networking (23%), Hardware (25%), Virtualization and Cloud (11%) and Hardware and Network Troubleshooting (28%). Core 2 domains are Operating Systems (28%), Security (28%), Software Troubleshooting (23%) and Operational Procedures (21%). Because CompTIA equates forms, your scaled score is not a percentage of items correct and cannot be converted into one — which is why we have not quoted a pass rate. The practical implication for pacing is simple: multiple-choice items should average well under a minute so the PBQs, which can consume several minutes each, have time to breathe. Remember you must pass both exams for the credential; a passed Core 1 alone is not the certification.',
    types: [
      { name: 'Performance-based questions (PBQs)', share: 'A small number of items carrying disproportionate weight', detail: 'A simulated environment or task — identify a component from a photo, configure a setting, run a command to fix a fault. Only the tool and built-in help are available. Skippable and returnable, the key tactical difference from a Cisco exam.' },
      { name: 'Single-answer multiple choice', share: 'The bulk of each paper', detail: 'Recall and concept discrimination — connector types, command output, port purposes. Distractors are usually real items used in the wrong context, so partial familiarity is punished.' },
      { name: 'Multiple response', share: 'A meaningful minority', detail: 'The stem states how many to select and scoring is all-or-nothing. Common where several steps together complete a configuration or a fix.' },
      { name: 'Scenario-based multiple choice', share: 'Heaviest in the troubleshooting domains', detail: 'A described symptom asking for the cause or the next step. These reward applying the fixed troubleshooting method rather than pattern-matching to a remembered fix.' }
    ],
    samples: [
      {
        prompt: 'A user reports that a laptop will not power on and the battery indicator shows no charge even when the AC adapter is plugged in. After confirming the wall outlet works, which of the following is the most logical next step in the troubleshooting method?',
        options: [
          'A. Replace the motherboard immediately',
          'B. Establish a theory of probable cause by inspecting the DC jack and adapter cable for damage',
          'C. Document the solution before testing anything',
          'D. Reinstall the operating system'
        ],
        answer: 'B',
        explanation: 'The structured troubleshooting method is identify, establish a theory, test, plan, verify, document. With the outlet confirmed good, the next step is to form a theory — a damaged DC jack or broken adapter cable is the most probable cause for "no charge" — and inspect it, not to replace the motherboard (A), which skips theory and testing entirely. C documents before any diagnosis, which is backwards, and D (reinstalling the OS) addresses a software fault when the symptom is a power failure. The exam repeatedly rewards following the method over the most drastic fix.'
      },
      {
        prompt: 'Which command would a technician use on a Windows machine to verify the current IP configuration and confirm whether the host received an address from DHCP?',
        options: [
          'A. ping 127.0.0.1',
          'B. ipconfig /all',
          'C. netstat -a',
          'D. sfc /scannow'
        ],
        answer: 'B',
        explanation: 'ipconfig /all displays the full adapter configuration, including the assigned IPv4 address, subnet mask, gateway and whether DHCP is enabled and which server issued the lease — exactly what confirms DHCP addressing. A (ping 127.0.0.1) only tests the TCP/IP stack internally and says nothing about the assigned address. C (netstat -a) lists active connections and listening ports, not the configuration. D (sfc /scannow) checks system file integrity and is unrelated to IP configuration. The Core 2 command-line set is heavily tested, and knowing what each command returns is the difference between a pass and a near-miss.'
      },
      {
        prompt: 'A technician is building a small office network and needs a device that forwards traffic between the local network and the internet, assigns private IP addresses to internal clients, and provides a basic firewall. Which single device best fulfils all three roles?',
        options: [
          'A. An unmanaged switch',
          'B. A wireless access point',
          'C. A SOHO router',
          'D. A modem only'
        ],
        answer: 'C',
        explanation: 'A SOHO (small office / home office) router combines routing to the internet, a DHCP server that assigns private addresses, and NAT with a basic firewall — all three roles in one device. A (unmanaged switch) only connects devices at layer 2 and assigns no addresses. B (access point) provides wireless connectivity but not routing or DHCP on its own. D (modem) bridges to the ISP but does no addressing or firewalling. The Networking domain of Core 1 tests precisely this separation of device functions, and the exam expects you to place each role correctly.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Two separate 90-minute sittings, up to 90 questions each, delivered through Pearson VUE either at a test centre or online with OnVUE proctoring — Core 1 (220-1201) and Core 2 (220-1202) are booked and taken independently, though both must be passed for the credential. Two things about a CompTIA exam day differ sharply from the Cisco exams and both are in your favour. First, you can navigate: performance-based questions are presented early and you are permitted to skip them and return, and you can review and change multiple-choice answers before submitting. Build your pacing around that — mark every PBQ, sweep the multiple choice at a brisk tempo, then divide what remains across the outstanding tasks. Second, you get your result immediately. The scaled score appears on screen the moment you submit, and you receive a score report showing relative performance by domain, which is genuinely diagnostic if you have to come back. The administrative trap is identical across vendors: CompTIA requires two forms of identification, one a government-issued photo ID, with the name matching your CompTIA account exactly. Check your account spelling the week before, because correcting it on the day is not possible and the seat is lost. Note also that Core 1 and Core 2 are independent bookings — make sure both are scheduled, because passing one and forgetting to sit the other means no certification.',
    bring: [
      'Two forms of identification, both unexpired, with names matching your CompTIA account exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit card or bank card is usually accepted)',
      'Your CompTIA ID, in case check-in cannot locate the booking',
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
      { time: 'The week before', detail: 'Log into your CompTIA account and confirm your name is spelled exactly as it appears on your ID. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk. Confirm BOTH Core 1 and Core 2 bookings exist.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for photographs of your face, both IDs and the whole room.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the current domain weights for the core you are sitting and the troubleshooting method on the noteboard. Two minutes here buys back far more later.' },
      { time: '0-5 minutes', detail: 'Work through the opening PBQs only far enough to see what each asks, then skip them all. Do not start yet.' },
      { time: '5-55 minutes', detail: 'Sweep the multiple-choice items at pace. Answer everything; flag anything unsure rather than dwelling, because you can review later.' },
      { time: '55-85 minutes', detail: 'Return to the PBQs with a known time budget. Divide the remaining minutes by the number of tasks and hold to it — a partial task can still earn credit, an untouched one cannot.' },
      { time: '85-90 minutes', detail: 'Review flagged multiple-choice items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      'Navigation is permitted: you may skip performance-based questions and return, and review multiple-choice answers before submitting.',
      'Passing scores are 675/900 for Core 1 (220-1201) and 700/900 for Core 2 (220-1202); neither is a percentage of items correct.',
      'Two forms of ID are required, one government-issued with photo, names matching your CompTIA account exactly.',
      'No scheduled breaks in a 90-minute exam, and the clock does not stop if you leave.',
      'Erasable noteboard only at a test centre; OnVUE candidates get a digital whiteboard and no physical writing materials.',
      'Inside a PBQ you have only the tool and its on-system help — no browser, no external reference.',
      'No waiting period between your first and second attempt; from the third attempt onward you must wait 14 calendar days, and each attempt is paid unless you bought a retake bundle.'
    ],
    afterwards:
      'Your pass or fail and your scaled score appear on screen the instant you submit, and you leave a test centre with a printed score report showing how you performed relative to each domain. That report is the most useful artefact any of these exams produces, so read it properly. On passing a core, note it and move to the other — only both passed earns the A+ credential. On a full pass of both cores, the certification appears in your CompTIA account within a few days; A+ is valid for three years under the CompTIA Continuing Education programme, renewed with 20 CEUs plus the CE fee (about $75 over the cycle), or automatically by passing a higher-level CompTIA certification. Log the expiry the week you pass. On a fail of a core, resist booking the immediate retake the no-waiting-period policy makes possible. Take the domain breakdown, identify the area that dragged the scaled score down, and spend a fortnight on it specifically. The score report tells you precisely where to aim, which is a luxury a Cisco candidate does not get, and wasting it by re-sitting on the same knowledge is how a $274 voucher becomes a $548 one.'
  }
};

export default data;
