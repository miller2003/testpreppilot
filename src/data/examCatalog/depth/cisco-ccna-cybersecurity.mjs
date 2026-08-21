// Depth content for: cisco-ccna-cybersecurity
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
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024) — but tier-1 SOC starts well below it',
    summary:
      'The occupation this exam points at is Information Security Analysts, and the headline number for that group is genuinely strong: a median of $124,910 in May 2024, and a projected 29 percent employment increase from 2024 to 2034, which is one of the fastest growth rates BLS publishes for any occupation. Two caveats matter enormously if you are using this page to decide whether to spend $300. First, that median describes the whole occupation, including people with a decade of experience and a CISSP. The job 200-201 qualifies you for is tier-1 SOC analyst — alert triage on a rota, often on nights or weekends — and that seat sits nearer the bottom decile than the median. BLS reports that the lowest 10 percent of information security analysts earned less than $69,660, and that is the realistic band for a first monitoring job, with the network-support figure of $73,340 a useful cross-check for what employers pay someone doing shift work with a single associate-level credential. Second, the credential does not do the pay lifting on its own. What moves a tier-1 analyst to tier-2 within eighteen months is demonstrable artefact work — being the person who can open a PCAP and say what happened — and 200-201 is valuable precisely because it is the only associate exam that tests that directly. No published survey isolates holders of this specific credential: Skillsoft\'s IT Skills and Salary Report reports averages for Cisco certifications generally, but it does not break out CCNA Cybersecurity separately, so we have not quoted a figure that would really be measuring a different exam.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $69,660', note: 'BLS OOH Pay tab, May 2024 — the band a first tier-1 SOC role sits in' },
      { label: 'Highest 10 percent', value: 'more than $186,420', note: 'BLS OOH Pay tab, May 2024 — senior/architect roles, not associate-level' },
      { label: 'Cross-check: computer network support specialists (median)', value: '$73,340', note: 'BLS OOH, May 2024 — comparable pay for shift-based technical monitoring work' }
    ],
    growth: '29% projected growth 2024-34 for information security analysts (much faster than average)',
    source: {
      label: 'BLS Occupational Outlook Handbook — Information Security Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Cisco publishes no pass rate and no cut score for 200-201',
    summary:
      'Cisco does not publish pass rates for any exam and does not publish the passing score for 200-201 CCNACBR. Its exam pages state only that "grading is pass/fail and results are available online within 48 hours". The underlying mechanism is a scaled score derived from the live item pool, with the cut point set by standard-setting rather than fixed at a round percentage, which is why it is not published and why it can shift when the pool is refreshed — and the pool has just been refreshed, because v1.2 went live in January 2026 with new AI-related objectives. Anyone quoting a specific percentage pass mark for this exam is repeating folklore. What is documented and worth planning around is the retake rule: fail an associate-level exam and you must wait five calendar days, beginning the day after the failed attempt, before you can sit the same exam number again, and you pay the full $300 a second time. Cisco sells an Exam Safeguard product that covers a retake, but it is tied to CCNA, not to this exam, so check the terms before assuming you are covered. There is also a rule in the other direction that surprises people: once you pass, you must wait a minimum of 180 days before taking the same exam number again, which matters if you were planning to re-sit purely to reset a recertification clock. Practically, the useful proxy for readiness is not a rumoured pass rate but your own performance on timed, mixed-domain practice sets that include artefact interpretation rather than definitions.',
    source: {
      label: 'Cisco Exam, Testing, and Certification Policies (retake, scoring and recertification)',
      url: 'https://cisco.com/go/exampolicy'
    },
    caveat:
      'No first-time or cumulative pass rate exists in any Cisco publication for 200-201, and Pearson VUE does not release per-exam statistics either. We have left the pass-rate table empty rather than reprint an unsourced number, and any site quoting "the CCNA Cybersecurity pass rate" should be treated with suspicion.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Two hundred and one is a single 120-minute exam with no second paper, which sounds forgiving until you notice what it actually asks for. This is a defender\'s exam built around interpreting evidence: reading a packet capture, correlating a NetFlow record against a firewall log, deciding whether a process tree on a Windows or Linux host is normal. You cannot memorise your way to that. The plan below assumes roughly 120-160 hours spread over ten weeks, with the explicit rule that at least a third of your time is spent in front of real data rather than a book. It also assumes you are studying the v1.2 blueprint, live since January 2026, which added AI-focused objectives — AI-assisted threat monitoring, AI-generated social engineering, security risks specific to AI deployments — that are absent from every CyberOps-branded resource published before 2026. If your material says "CyberOps Associate" on the cover, the core five domains are still valid but you must layer the v1.2 additions on top.',
    totalHours: '120-160 hours',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Domain 1 — Security Concepts, and the vocabulary the other four domains assume',
        tasks: [
          'CIA triad, defence in depth, threat actors and attack surface, then the risk vocabulary Cisco uses precisely: risk, threat, vulnerability, exploit',
          'Learn the alert classification matrix cold — true positive, true negative, false positive, false negative — with a worked example of each',
          'Access control models (DAC, MAC, RBAC, ABAC) and where each is actually deployed',
          'Read the v1.2 AI objectives directly from the Cisco exam-topics PDF and note which sub-topics your book predates'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Domain 2 — Security Monitoring, the heaviest-weighted domain on the paper',
        tasks: [
          'Understand what each data source can and cannot tell you: NetFlow, session data, full packet capture, transaction data, alert data, statistical data',
          'Install Wireshark and open real captures from a public malware-traffic archive; practise following a TCP stream and extracting an object',
          'Learn why encryption, NAT, tunnelling, TOR and P2P each degrade visibility, and what compensating source you reach for',
          'Set up Security Onion or Splunk Free and generate then hunt your own events'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domain 3 — Host-Based Analysis',
        tasks: [
          'Build one Windows and one Linux VM and deliberately generate the evidence: failed logons, a scheduled task, a process launched from a temp directory',
          'Read Windows event logs, Sysmon output, and Linux /var/log entries until the field names are familiar rather than novel',
          'Learn endpoint technology roles: host firewall, antimalware, application allow-listing, systems-based sandboxing',
          'Practise reading a process tree and saying which parent-child relationship is suspicious and why'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Domain 4 — Network Intrusion Analysis',
        tasks: [
          'Work through capture files and identify the attack from the traffic alone: port scan, brute force, SQL injection attempt, DNS tunnelling, beaconing',
          'Read IDS alert output alongside the packets that generated it, so signature text stops being abstract',
          'Learn protocol header fields that carry investigative value — TTL, TCP flags, HTTP headers, DNS query type',
          'Practise extracting files from a capture and hashing them'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Week 9',
        focus: 'Domain 5 — Security Policies and Procedures, plus the frameworks',
        tasks: [
          'NIST SP 800-61 incident response lifecycle as an ordered, questionable list',
          'Chain of custody, evidence handling, and the order of volatility',
          'Map an attack narrative onto the Cyber Kill Chain and onto the Diamond Model — the exam expects both',
          'SOC metrics and the tier-1 to tier-3 escalation model'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Timed mixed drilling and the v1.2 delta',
        tasks: [
          'Full 120-minute timed practice exams, shuffled across all five domains, at least three of them',
          'Go back over every AI-related v1.2 objective — these are the items your older resources did not cover',
          'Re-drill only the domains where your timed score sits lowest; ignore the ones already comfortable',
          'One light revision day before the exam, then stop'
        ],
        hours: '12-14 hrs'
      }
    ],
    variants: [
      { label: 'Already working tier-1 in a SOC', detail: 'Six to seven weeks is realistic. Your daily work covers Domains 2 and 5 by osmosis, but your tooling is probably one vendor deep — spend the saved weeks on Domain 4 packet analysis with raw Wireshark rather than your employer\'s console, because the exam is vendor-neutral in that domain.' },
      { label: 'Coming from CompTIA Security+ or CySA+', detail: 'Eight weeks. CySA+ overlaps substantially on monitoring and IR, but 200-201 goes deeper on raw packet and host artefact interpretation and shallower on governance. Cut Weeks 1 and 9 to half, and put every recovered hour into Weeks 3-8.' },
      { label: 'Career changer with no operational IT background', detail: 'Sixteen to eighteen weeks at 8 hrs/week. Add a preliminary month on networking fundamentals first — you cannot analyse traffic you cannot read, and candidates who skip TCP/IP basics stall permanently in Domain 4.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The failure mode on 200-201 is a candidate who can define every term on the blueprint and still cannot answer a question that shows them evidence. Cisco writes this exam from the analyst\'s chair: here is what you can see, what do you conclude. Everything below is aimed at closing the gap between knowing a concept and recognising it in output.',
    items: [
      {
        title: 'Live in Wireshark, not in a chapter about Wireshark',
        detail: 'Download real capture files from a public malware-traffic archive and work them without reading the write-up first. Follow the TCP stream, identify the user agent, spot the beacon interval, extract the payload. Then read the analyst\'s write-up and see what you missed. Twenty captures worked this way will teach you more about Domain 4 than any video course, because the exam shows you evidence and asks for a conclusion, which is precisely the motion you are rehearsing.'
      },
      {
        title: 'Build a data-source decision table',
        detail: 'The single most repeated question shape in Domain 2 is "the analyst needs to determine X — which data source?" Make a table with the sources down one side (NetFlow, session data, full packet capture, transaction data, alert data, statistical data) and the questions across the top (who talked to whom, how much data moved, what was in the file, which signature fired, is this volume abnormal). Fill it in yourself. The distinction that decides most items is metadata versus payload.'
      },
      {
        title: 'Do not skip the AI objectives added in v1.2',
        detail: 'The version live since January 2026 added objectives on AI-assisted monitoring and threat intelligence, identifying AI-generated social engineering, and the security risks introduced by AI deployments themselves. Every book, video course and question bank branded "CyberOps Associate" predates that. Download the current CCNACBR exam-topics document from Cisco and diff it against your resource\'s table of contents; the delta is small enough to cover in a weekend and large enough to cost you the exam if you ignore it.'
      },
      {
        title: 'Learn the Kill Chain and the Diamond Model as tools, not trivia',
        detail: 'Both appear in Domain 5, and candidates memorise the phase names without ever applying them. Take one real intrusion write-up and map it twice — once onto each model. Doing this three or four times means that when the exam gives you a narrative and asks which phase or which vertex, you are recognising a pattern instead of reciting a list.'
      },
      {
        title: 'Practise under forward-only conditions',
        detail: 'Cisco presents questions one at a time and does not allow you to return to an item once you have moved past it. Most practice engines let you flag and review, which trains a habit the real exam will punish. Turn review off. Force yourself to commit to an answer, especially on the long artefact items where the temptation to defer is strongest, and get used to the discomfort before exam day rather than during it.'
      },
      {
        title: 'Keep a "why the distractor was tempting" log',
        detail: 'For every practice question you get wrong, write one line explaining what made the wrong option attractive. Over ten weeks this becomes a personalised map of how Cisco builds distractors on this exam — usually a real technique that answers a slightly different question, or a data source that would work if the analyst had one more piece of access. Reviewing that log the night before is worth more than another practice test.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'Everything on the market for this exam is still branded CyberOps Associate, because the rename to CCNA Cybersecurity only happened in February 2026 and publishers move slower than Cisco marketing. That is fine for the five core domains and a real gap on the v1.2 AI objectives. Budget most of your money for a question bank and none of it for a boot camp — the free lab material is where the actual learning happens on this exam.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco 200-201 exam-topics PDF (official blueprint)', values: ['Free', 'PDF from Cisco Learning Network', 'The only authoritative statement of what v1.2 covers'] },
      { label: 'CBROPS 200-201 Official Cert Guide (Cisco Press)', values: ['~$60-70 list', 'Print + eBook with practice engine', 'Ordered coverage of the five core domains'] },
      { label: 'Cisco U. (free tier plus paid subscriptions)', values: ['Free tier; subscriptions extra', 'Video, labs, practice assessments', 'Cisco-authored labs and the pre/post assessments'] },
      { label: 'Cisco Networking Academy — Junior Cybersecurity Analyst path', values: ['Free', 'Self-paced course with badges', 'Structure if you are starting without a SOC background'] },
      { label: 'Boson ExSim-Max for Cisco 200-201', values: ['$99 per exam title', 'Practice-exam engine', 'Distractor-level explanations, the best readiness signal available'] },
      { label: 'CBT Nuggets', values: ['~$30-80/month by plan and billing term', 'Video subscription', 'Candidates who need someone talking them through captures'] },
      { label: 'Wireshark + public malware-traffic capture archives', values: ['Free', 'Self-directed lab', 'Domain 4 — the highest-value free resource for this exam'] },
      { label: 'Security Onion or Splunk Free', values: ['Free', 'Self-hosted SIEM lab', 'Domain 2 monitoring, generating and hunting your own events'] },
      { label: 'Exam voucher (200-201 CCNACBR)', values: ['$300 USD, or Cisco Learning Credits', 'Pearson VUE', 'Required'] }
    ],
    footnote: 'Prices checked 2026-08 and shown as USD list price before tax; subscription tiers and Cisco Learning Credit rates change, so confirm at the vendor before purchase. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The mistakes on this exam cluster into two groups: people who bought the wrong exam entirely, and people who studied it like a knowledge test instead of an analysis test.',
    items: [
      {
        mistake: 'Confusing CCNA Cybersecurity with CCNA 200-301',
        fix: 'These are completely different certifications that now share a brand prefix, and the confusion got worse in February 2026 when Cisco renamed CyberOps Associate to CCNA Cybersecurity. CCNA 200-301 is routing, switching, IP services and automation. CCNA Cybersecurity is exam 200-201 CCNACBR, Understanding Cisco Cybersecurity Operations Fundamentals, and it is a SOC-analyst exam with no configuration content at all. Passing one does not count toward the other. Check the exam number on your voucher, not the certification name.'
      },
      {
        mistake: 'Studying from CyberOps-branded material without checking the v1.2 delta',
        fix: 'The exam moved from v1.1 to v1.2 in January 2026 and the update was not cosmetic — it added AI-focused objectives across monitoring, threat intelligence and AI-specific risk. Every resource printed before 2026 misses them. Download the current exam topics from Cisco, list the objectives your book does not have a chapter for, and cover them separately. Your existing prep is not wasted, but it is incomplete.'
      },
      {
        mistake: 'Treating the exam as a vocabulary test',
        fix: 'Candidates who pass consistently report that the hard items show them something — a log excerpt, a described capture, an alert with context — and ask for a judgement. Definition-level recall gets you through Domain 1 and abandons you in Domains 2 through 4. If your study time is more than two-thirds reading, rebalance it toward hands-on artefact work now.'
      },
      {
        mistake: 'Never opening a packet capture because "the exam has no simulations"',
        fix: 'True, there are no lab simulations, and it is the wrong conclusion. The exam tests whether you can interpret evidence in a static presentation, and the only way to build that skill is to have handled the real thing. Working twenty public captures costs nothing but time and directly converts into Domain 4 points.'
      },
      {
        mistake: 'Assuming a CCNA or any other certification is a prerequisite',
        fix: 'Cisco requires no prerequisite for 200-201 — you can book it as your first Cisco exam. That said, the exam assumes you can read an IP header and reason about TCP behaviour. If you cannot, the fix is a month of networking fundamentals, not a CCNA voucher. Do not spend $300 on 200-301 first out of a mistaken belief that you have to.'
      },
      {
        mistake: 'Booking with no plan for the 48-hour result wait',
        fix: 'Cisco states that grading is pass/fail and results are available online within 48 hours, and its score reporting is far less granular than CompTIA\'s. Do not expect an immediate percentage breakdown to plan a retake around. Instead, write down the topic areas that felt weakest the moment you leave the centre — not the questions, which the NDA forbids you from recording — because that list will be more useful than anything Cisco sends you.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'One hundred and twenty minutes, delivered in English, graded pass/fail. There are no configuration simulations on 200-201 — this is not a CLI exam — but that does not make it a multiple-choice memory test. The characteristic item presents evidence and asks for an analytical judgement: which data source answers this question, what does this process tree indicate, how should this alert be classified. Expect single-answer multiple choice as the bulk of the paper, multiple-response items that state how many options to select and score all-or-nothing, and drag-and-drop matching for things like kill chain phases, Diamond Model vertices and incident-response steps. A meaningful number of stems are exhibit-driven: a log excerpt, a table of flow records, a described capture. Cisco presents one question at a time and does not permit backward navigation, so budget time by checkpoint rather than planning to review at the end.',
    types: [
      { name: 'Single-answer multiple choice', share: 'Majority of items', detail: 'Four to five options with a single correct answer. On this exam the distractors are almost always genuine analyst techniques that answer a subtly different question — the discrimination is about scope and access, not about right versus nonsense.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'The stem specifies the count. Scored as a single unit, so two of three correct earns nothing. Common on data-source and evidence-handling objectives.' },
      { name: 'Drag and drop / matching', share: 'A minority of items', detail: 'Match attack narratives to kill chain phases, artefacts to Diamond Model vertices, or place incident-response steps in order. Rewards ordered-list memorisation that pure multiple-choice practice skips.' },
      { name: 'Exhibit-based analysis items', share: 'A substantial share of Domains 2-4', detail: 'A log excerpt, flow table or capture summary is shown and you interpret it. These take disproportionate time — practise on real output so the format itself is not what slows you down.' }
    ],
    samples: [
      {
        prompt: 'A SOC analyst must confirm whether a specific spreadsheet was actually transferred out of the network during a suspected exfiltration window. The organisation collects NetFlow from its edge routers, firewall connection logs, IDS alert data, and full packet capture at the internet egress. Which data source can answer the question?',
        options: [
          'A. NetFlow records, because they show the byte count of each conversation',
          'B. Firewall connection logs, because they record the source, destination and duration of each session',
          'C. Full packet capture, because it retains the payload and the file can be extracted and hashed',
          'D. IDS alert data, because an exfiltration signature would have fired on the transfer'
        ],
        answer: 'C',
        explanation: 'Only full packet capture retains payload. To confirm that a specific file left the network you have to reconstruct it from the stream and compare its hash to the original, which requires the bytes themselves. A and B are the tempting answers because both NetFlow and firewall logs will show that a large transfer occurred to that destination at that time — but they are metadata, and metadata can establish that something moved without establishing what. D is wrong because signature-based alerting fires on known patterns; the absence of an alert proves nothing about a novel or benign-looking transfer, and its presence would not identify the file.'
      },
      {
        prompt: 'An IDS generates an alert for a SQL injection signature against an internal web application. Investigation shows the traffic originated from the security team\'s authorised vulnerability scanner during a scheduled scan window, and no malicious activity took place. How should the analyst classify this alert?',
        options: [
          'A. True positive',
          'B. True negative',
          'C. False positive',
          'D. False negative'
        ],
        answer: 'C',
        explanation: 'A false positive is an alert raised on activity that is not actually a security incident. The signature matched a real pattern in the traffic, but the underlying event was authorised testing, so the alert is not actionable and the classification is false positive. A is the trap: candidates reason that the signature correctly matched what it was written to match, so it must be a true positive. Classification in SOC practice is about whether the alert represents a genuine incident, not whether the pattern-matching worked. B describes correctly staying silent on benign traffic, which did not happen here. D describes malicious activity that produced no alert, which is the opposite situation.'
      },
      {
        prompt: 'On a Linux web server, an analyst observes a bash process executing from /tmp with its parent process being the web server daemon, initiated shortly after an unusual POST request to an upload endpoint. What does this most likely indicate?',
        options: [
          'A. Routine package management activity, since package managers use temporary directories',
          'B. A web shell, where an exploited web application is spawning a shell under its own service account',
          'C. A scheduled cron job, since cron frequently executes scripts staged in temporary directories',
          'D. A kernel module being loaded to support a newly attached device'
        ],
        answer: 'B',
        explanation: 'The parent-child relationship is the whole answer. A web server daemon has no legitimate reason to spawn an interactive shell, and the correlation with a POST to an upload endpoint is the classic web-shell signature: attacker uploads a script through a file-handling flaw, then invokes it, and the resulting process inherits the web server\'s service account. A is tempting because package managers genuinely do use temporary directories, but their parent would be a package tool or a shell run by root, not httpd or nginx. C fails the same test — cron-launched processes have cron as the parent. D is unrelated: kernel module loading is not a bash process and would not descend from a web daemon.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Two hours in the chair, delivered through Pearson VUE at a test centre or online with OnVUE proctoring, in English only. This is long enough that fatigue becomes a real factor and short enough that there is no scheduled break — Cisco does not build breaks into a 120-minute exam, and the clock does not stop if you leave, so hydration and caffeine timing are genuine tactical decisions rather than fussiness. The single most important thing to internalise before you sit down is that Cisco presents questions one at a time and does not allow you to go back. On a paper with a substantial number of exhibit-driven analysis items, that means the instinct to skip the hard packet question and return to it later simply does not exist here. You must decide, commit and advance. Candidates who have only practised in an engine with flag-and-review lose ten to fifteen minutes rediscovering this on the day. Book a time of day when you are genuinely sharp; a 7pm slot after a full shift is a bad trade for a $300 exam.',
    bring: [
      'A valid, unexpired government-issued photo ID with signature, name matching your Cisco registration exactly',
      'A second form of ID with your name and signature — bring it whether or not you think your centre requires it',
      'Your Cisco ID and Pearson VUE username',
      'For OnVUE: a phone for check-in photos, a completely clear desk, and a private room with a door',
      'For OnVUE: a system-tested webcam and connection, checked on the same machine and network you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, earbuds — locker at a centre, out of the room entirely for OnVUE',
      'All notes, printouts and reference material; Cisco exams are strictly closed book',
      'Your own paper and pens — centres issue an erasable noteboard and marker, and OnVUE gives you a digital whiteboard only, with no physical writing material permitted',
      'Bags, coats, hats and food',
      'Any second person; an OnVUE session is terminated if someone else appears on camera or is heard in the room'
    ],
    timeline: [
      { time: '24-48 hours before', detail: 'For OnVUE, complete the system test on the actual machine and network. For a centre, confirm the address and how long the journey really takes at that time of day.' },
      { time: '30 minutes before', detail: 'Arrive at the centre, or start OnVUE check-in. Online check-in involves photographing your face, your ID, and all four walls plus the desk surface, and typically runs about 15 minutes.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture depending on the centre, and lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 3 minutes at the seat', detail: 'Before starting, write your ordered lists on the noteboard: kill chain phases, NIST SP 800-61 IR lifecycle, order of volatility, and your data-source-to-question mapping. These are the items you do not want to be reconstructing at minute 100.' },
      { time: '0-40 minutes', detail: 'First third. Aim to be roughly a third of the way through the item count. Exhibit items will run long; concept items should be quick, so bank time on them deliberately.' },
      { time: '40-100 minutes', detail: 'Middle stretch, where most of the artefact interpretation lands. Watch the clock every ten items. If you are behind, start making faster commitments on the exhibit questions — an educated commit beats an unanswered item, and there is no return path.' },
      { time: '100-120 minutes', detail: 'Final stretch. There is no review screen to fall back on, so the only defence against running out of time is having managed the first hundred minutes.' },
      { time: 'Immediately after', detail: 'Surrender the noteboard, collect your belongings and leave. Do not discuss content with anyone; you accepted an NDA on screen before question one.' }
    ],
    rules: [
      'Cisco exams do not permit backward navigation — you cannot flag, skip or return to an item.',
      'Grading is pass/fail and Cisco states results are available online within 48 hours; the cut score is not published.',
      'No scheduled breaks on a 120-minute exam, and the timer continues if you leave the room.',
      'The exam is delivered in English only.',
      'The erasable noteboard is provided and must be surrendered; you may not bring your own paper, and OnVUE candidates get a digital whiteboard only.',
      'Fail and you must wait five calendar days from the day after your attempt before retesting, at the full $300 fee.',
      'Pass and you must wait a minimum of 180 days before sitting the same exam number again.'
    ],
    afterwards:
      'Cisco grades 200-201 pass/fail and states that results are available online within 48 hours, so do not build your plans around an immediate detailed breakdown the way a CompTIA candidate would. Check the Cisco Certification Tracking System for your official status and, once posted, claim the digital badge through Credly. A pass earns CCNA Cybersecurity, valid for three years; you renew by earning 30 Continuing Education credits, by re-taking a qualifying exam, or by passing any higher-level exam, and Cisco explicitly notes that 200-201 itself can be used toward recertification of other credentials. If you fail, the five-day wait starts the day after your attempt, and the most productive thing you can do in that window is rebuild your weakest domain from primary material rather than grinding the same question bank that already told you what you knew. Write your subject-area impressions down within an hour of finishing — memory of which topics felt shaky decays fast, and Cisco will not give you a granular enough report to reconstruct it later.'
  }
};

export default data;
