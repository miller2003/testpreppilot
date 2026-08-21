// Depth content for: comptia-cysa-plus
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Agile, securities & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from CompTIA’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there — CySA+ CS0-004 (V4) is the current exam as of its 23 June 2026 launch.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Cybersecurity Analyst" exactly, but Information Security Analysts (SOC 15-1212) is the official category that maps most directly to the CySA+ role, and we have chosen it deliberately because CompTIA positions CySA+ as the mid-level, analyst-side certification — the one you sit after the entry-level Security+ and before the expert-level CASP+. A CySA+ holder works in a security operations centre or on a defensive security team: monitoring, detecting, analysing and responding to threats, which is precisely the day-to-day described under the information security analyst occupation. That occupation had a May 2024 median wage of $124,910, with the lowest 10 percent earning under $69,660 and the highest 10 percent earning more than $186,420. The distribution is worth reading carefully because the CySA+ is the credential that typically moves someone from a general IT or junior SOC role into the higher band of this occupation — the 29 percent projected growth is the strongest of any occupation covered on this site, and it reflects sustained demand for defensive analysts rather than for any single certificate. BLS projects 29 percent employment growth for information security analysts from 2024 to 2034, far faster than the average for all occupations, with roughly 16,000 openings a year arising from both growth and replacement. The most important caveat for a CySA+ candidate is that the certificate is a validation of analyst capability, not a job title in itself — the wage figure above measures the whole information-security-analyst occupation, not CySA+ holders narrowly, and should be read as the destination role’s compensation rather than a guaranteed CySA+ outcome. It is also the role most exposed to the AI-in-security shift that V4 now tests explicitly.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $69,660', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $186,420', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '182,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~16,000 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '29% projected change 2024-34 (much faster than average), ~16,000 openings a year; CySA+ is the mid-level analyst credential for this occupation, and V4 now tests AI-in-security explicitly',
    source: {
      label: 'BLS Occupational Outlook Handbook — Information Security Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'CompTIA publishes no pass rate — but it does publish the passing score: 750 out of 900',
    summary:
      'CompTIA does not release pass-rate statistics for CySA+ or any of its certifications, and it never has. Unlike some vendors, however, it does publish the cut score, and understanding what that number means is more useful than any rumoured pass rate. CS0-004 is scored on a scale of 100 to 900 and you need 750. That is not a percentage of the questions. CompTIA equates every exam form so that a harder set of items demands the same underlying ability as an easier one, and performance-based questions carry more weight than a single multiple-choice item, so the raw-to-scaled conversion is not linear and cannot be reverse-engineered. Candidates who aim for "83 percent on practice tests" are using a heuristic that does not map onto the scoring model; aim instead to be able to complete every performance-based analysis task unaided. The retake policy matters more than a pass rate: CompTIA imposes no waiting period between your first and second attempt, so a narrow fail can be re-sat almost immediately, but from the third attempt onward you must wait 14 calendar days between sittings, and every attempt is paid at full price unless you bought a retake bundle or a voucher with a retry. The score report gives you the outcome and your scaled score on screen the moment you finish, plus a printed report showing relative performance by domain — that report is the closest thing to diagnostic feedback available, and it turns a failed attempt into an actionable study plan rather than guesswork. We have deliberately left the pass-rate table empty because no authoritative figure exists.',
    source: {
      label: 'CompTIA — CySA+ certification and exam scoring',
      url: 'https://www.comptia.org/en-us/certifications/cybersecurity-analyst/'
    },
    caveat:
      'No pass rate is published by CompTIA, by Pearson VUE, or by the accreditation that CySA+ carries. We have deliberately left the pass-rate table empty. What is published and verifiable is the 750/900 cut score and the retake schedule, which is what the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The first thing to establish is which exam you are actually studying for, and for CySA+ this is now the most important sentence on the page. CS0-004 — CySA+ version 4 — launched on 23 June 2026 and is the current exam. CS0-003 (version 3) remains available for English testing until 22 December 2026, after which English candidates must sit CS0-004; translated-language versions of CS0-003 retire on 23 March 2027. CS0-004 is not a light refresh: it added explicit coverage of artificial intelligence in security operations — AI used in defensive tooling, AI governance, and AI-specific risks such as model hallucination and data exposure — alongside the traditional analyst domains. If you buy a 2024 or earlier CySA+ book you are studying version 3 and will have real gaps. The current domain weights are Security Operations 34 percent, Vulnerability Management 26 percent, Incident Response and Management 24 percent, and Reporting and Communication 16 percent. Notice that Security Operations plus Vulnerability Management are 60 percent of the paper — together they are the core of the analyst job — while Reporting and Communication, though only 16 percent, is where version 4 candidates most often lose cheap points because it is easy to under-prepare the communication side. CompTIA recommends about four years of hands-on security or SOC-analyst experience before sitting, so the plan below assumes you have that baseline or its equivalent in lab work. A realistic window is ten to twelve weeks at 10-12 hours a week, and it must include log, packet and vulnerability-data analysis practice, because the performance-based questions hand you real-looking telemetry and ask you to interpret it.',
    totalHours: '100-130 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Confirm version and build the analysis lab',
        tasks: [
          'Confirm you are registered for CS0-004 (V4), not CS0-003 — check the exam code on your voucher',
          'Stand up a lab: a SIEM or log-source you can query, a packet capture tool, and a vulnerability scanner trial',
          'Read the official CS0-004 objectives end to end and map every task to a domain weight',
          'If you own V3 material, set it aside except where the domain content is unchanged'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Domain 1 — Security Operations (34%)',
        tasks: [
          'Process and analyse security telemetry: logs, alerts, network flow and endpoint data',
          'Tune and interpret detection logic; understand false positives and the analyst’s triage workflow',
          'Cover the V4 AI-in-security operations material: how defensive tooling uses AI and where it helps or misleads',
          'Practise reading a packet capture and a SIEM query result until interpreting them is routine'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domain 2 — Vulnerability Management (26%)',
        tasks: [
          'Run a vulnerability scan in your lab and prioritise findings by exploitability and asset value',
          'Map findings to frameworks (e.g., CVE/CVSS) and to remediation, not just detection',
          'Understand assessment methodology: authenticated vs unauthenticated scans, scope and false negatives',
          'Practise writing a prioritised remediation recommendation from a raw scan export'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Domain 3 — Incident Response and Management (24%)',
        tasks: [
          'Learn the incident-response lifecycle: preparation, detection, analysis, containment, eradication, recovery, lessons learned',
          'Practise analysing an incident from indicators to a containment decision using provided data',
          'Cover the V4 AI risk material: model hallucination, data exposure and governance of AI use in security',
          'Drill the communication handoffs between detection, response and reporting stages'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 9',
        focus: 'Domain 4 — Reporting and Communication (16%)',
        tasks: [
          'Practise writing an incident report and a vulnerability summary for both technical and executive audiences',
          'Learn stakeholder communication, severity rating and the structure of a clear post-incident review',
          'Do not skip this domain — it is small but where V4 candidates lose avoidable points',
          'Rehearse explaining a technical finding to a non-technical reader in plain language'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 10-12',
        focus: 'Performance-based question rehearsal and timed exams',
        tasks: [
          'Sit three full 165-minute practice exams weighted to the four current domains',
          'Rehearse performance-based items: interpret a log or capture and state the attack and the next step',
          'Re-lab every miss against the V4 objectives rather than re-reading it',
          'One quiet day before the exam; confirm your V4 registration and ID details'
        ],
        hours: '10-12 hrs/week'
      }
    ],
    variants: [
      { label: 'Working SOC analyst with 4+ years', detail: 'Six to eight weeks. The domain content is your day job; spend the recovered time on the V4 AI additions and on the Reporting/Communication domain, which practising analysts often under-prepare.' },
      { label: 'Security+ holder moving up', detail: 'Twelve to fourteen weeks. You have the security fundamentals but lack analyst depth; invest the extra weeks in hands-on telemetry and vulnerability analysis, because CySA+ tests interpretation, not definitions.' },
      { label: 'Career-changer with a homelab, no SOC experience', detail: 'Sixteen or more weeks. You must build the analyst intuition from scratch in a lab — packet captures, SIEM queries, scan outputs — because the performance-based questions assume you have interpreted real telemetry before.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'CySA+ is the exam on this site that most rewards hands-on interpretation over memorisation. Where Security+ tests that you know a concept exists, CySA+ hands you a log, a packet capture or a vulnerability scan and asks you to read it and decide. The single most useful habit is therefore to train interpretation deliberately: every time you study a detection or a vulnerability, generate or obtain the actual data it produces and practise drawing the conclusion the exam expects. Candidates who read about SIEM rules but have never written a query, or who memorise CVSS formulas but have never prioritised a real scan, consistently lose the performance-based points that decide a 750/900 pass.',
    items: [
      {
        title: 'Study the current CS0-004 blueprint, not version 3',
        detail: 'CS0-004 launched 23 June 2026 and adds explicit AI-in-security coverage — AI used in defensive operations, AI governance, and AI risks such as hallucination and data exposure. CS0-003 English retires 22 December 2026. Version 3 books and courses are still on sale and still rank in search; check the exam code on your voucher and any material you buy, and treat V3 resources as partially obsolete.'
      },
      {
        title: 'Interpret real telemetry, not descriptions of it',
        detail: 'The performance-based questions give you logs, packet captures or scan output and ask what is happening and what to do next. Build a lab with a SIEM or log source, a packet tool and a scanner, and practise reading the actual artefacts. The candidate who has queried a SIEM and prioritised a real scan answers these items from experience; the one who only read about them freezes.'
      },
      {
        title: 'Weight study to Security Operations and Vulnerability Management',
        detail: 'Those two domains are 34% and 26% — 60% of the paper together. They are also the most performance-based-heavy. Allocate accordingly and resist over-investing in the 16% Reporting domain at their expense, while still not skipping it, because it is where V4 candidates drop cheap points.'
      },
      {
        title: 'Learn the V4 AI-in-security material as a real domain, not a footnote',
        detail: 'Version 4 made AI explicit: how defensive tooling uses AI, the governance of that use, and the new risks AI introduces — model hallucination producing false conclusions, and data exposure through AI-assisted analysis. These appear as both knowledge and scenario items. Treat them as examinable content equal to any other, not as a token update.'
      },
      {
        title: 'Do the performance-based questions last, and know that you can',
        detail: 'CompTIA presents PBQs early but allows you to skip and return, which is the key tactical difference from a fixed-order exam. Mark every PBQ, clear the multiple-choice at a fast tempo, then divide remaining time across the outstanding tasks. Candidates who work in presented order spend the first hour on two PBQs and then rush the multiple choice.'
      },
      {
        title: 'Use the post-exam score report as a study instrument',
        detail: 'CompTIA gives your scaled score and a domain-by-domain breakdown on screen and in a printed report. If you must retake, that breakdown is the most actionable diagnostic available anywhere on this site — identify the one or two domains that dragged the 750 down and drill those specifically rather than re-sitting on the same preparation.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision for CySA+ is, as with every CompTIA exam, first and foremost about version: CS0-004 material is new as of its June 2026 launch, and CS0-003 books and courses are still widely sold and ranked. Buy anything labelled CS0-004 or "V4", and verify the AI-in-security content is actually present rather than promised. The other decision is whether to pay for CompTIA’s own bundles, which add labs and a retake to the voucher at a premium. The exam voucher itself carries a list price around $439, and the certification is renewed over three years with 60 continuing-education units and a $150 CE fee.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam voucher (CS0-004)', values: ['~$439 CompTIA US list; resellers often lower', 'Pearson VUE, test centre or online', 'Required — buy the voucher alone if you already have a lab'] },
      { label: 'CompTIA CertMaster bundles (Perform + Practice)', values: ['Bundle pricing at the CompTIA Store; includes voucher and often a retake', 'eLearning with labs plus adaptive practice', 'Candidates without their own SOC-style lab'] },
      { label: 'Your own lab — SIEM/log source, packet tool, scanner trial', values: ['Free to low cost', 'Self-built', 'The most valuable resource for a performance-based-heavy exam'] },
      { label: 'Jason Dion CySA+ course (Udemy)', values: ['~$15-30 in Udemy sales', 'Video + practice exams', 'Structured video with a large practice-question bank — verify it is the V4 edition'] },
      { label: 'CySA+ Study Guide (Sybex / Wiley)', values: ['~$50-60 list', 'Print + eBook with test bank', 'Ordered reference — confirm the CS0-004 edition before buying'] },
      { label: 'Official CompTIA CySA+ objectives and CertMaster Practice', values: ['Objectives free; Practice paid', 'PDF / web + online', 'The authoritative blueprint to study against'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. CompTIA voucher list is ~$439 and varies by region and promotion; Udemy sale prices are far below list. Confirm any course is the CS0-004 (V4) edition, since CS0-003 material remains on sale. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'CySA+ mistakes divide into two groups: version errors that did not exist a year ago, and the perennial ones — studying an interpretation exam by reading, and mismanaging a 165-minute clock against performance-based items that take real time. The version trap is especially sharp here because CS0-004 is new and its AI content is genuinely new, so a candidate using a 2024 book is not merely slightly behind but missing an examinable domain.',
    items: [
      {
        mistake: 'Studying CS0-003 (V3) material for a CS0-004 (V4) exam',
        fix: 'CS0-004 launched 23 June 2026 with explicit AI-in-security coverage; CS0-003 English retires 22 December 2026. V3 books and courses are still on sale and rank highly in search, and they omit the V4 AI material entirely. Check the exam code on your voucher and any resource you buy, and treat V3 material as partially obsolete rather than a syllabus.'
      },
      {
        mistake: 'Preparing by reading instead of interpreting telemetry',
        fix: 'CySA+ performance-based questions hand you logs, packet captures and scan output and ask you to read them. A candidate who has read about SIEM rules but never queried one, or memorised CVSS but never prioritised a real scan, is not ready. Convert at least a third of study hours into interpreting actual artefacts in a lab.'
      },
      {
        mistake: 'Skipping or under-preparing the Reporting and Communication domain',
        fix: 'At 16% it looks small, but it is where V4 candidates lose cheap, avoidable points because technical analysts neglect communication. Practise writing an incident report and a vulnerability summary for both technical and executive readers; the exam tests that you can explain a finding, not just find it.'
      },
      {
        mistake: 'Treating the V4 AI content as a token update',
        fix: 'Version 4 made AI explicit and examinable: AI in defensive operations, AI governance, and AI risks — hallucination and data exposure. Candidates who read "AI" in a changelog and move on miss scenario items. Study it as a real content area equal to any other domain.'
      },
      {
        mistake: 'Spending the first hour on the performance-based questions',
        fix: 'CompTIA presents PBQs early but allows skipping and return. Mark them all, clear the multiple-choice quickly, then allocate remaining time deliberately across the outstanding tasks. Candidates who work in presented order run out of clock on the items that decide the 750 pass.'
      },
      {
        mistake: 'Forgetting the certification expires and costs to renew',
        fix: 'CySA+ is valid three years under CompTIA CE, renewed with 60 CEUs and a $150 CE fee over that period. Candidates often treat it as permanent. Diary the expiry on the day you pass and bank CEUs from real security work rather than scrambling in year three; a higher CompTIA certification can renew it automatically.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'A maximum of 85 questions in 165 minutes (two hours and forty-five minutes), scored on a 100-900 scale with a 750 cut. The paper mixes multiple choice — single-answer and multiple-response — with performance-based questions that present a realistic analyst artefact: a log extract, a packet capture, a vulnerability scan, or an incident timeline, and ask you to interpret it and state the attack, the root cause, or the next response step. PBQs carry more weight than a single multiple-choice item, but you may skip them and return, so the presented order is not the order to work in. The four current domains are Security Operations (34%), Vulnerability Management (26%), Incident Response and Management (24%), and Reporting and Communication (16%). Because CompTIA equates forms, your scaled score is not a percentage of items correct and cannot be converted into one. Version 4 added explicit AI-in-security items — both knowledge questions about AI use in defensive operations and governance, and scenario items about AI-introduced risks such as hallucinated conclusions and data exposure. The practical pacing implication is that multiple-choice items should average well under a minute so the PBQs, which can consume several minutes each, have somewhere to come from within the 165-minute window.',
    types: [
      { name: 'Performance-based questions (PBQs)', share: 'A small number carrying disproportionate weight', detail: 'A realistic artefact — log, capture, scan, timeline — with an interpretation or response task. Skippable and returnable, which is the key tactical difference from a fixed-order exam.' },
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Detection logic, framework knowledge, tool purpose, policy. Distractors are usually plausible analyst actions that are subtly wrong in sequencing or scope.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'The stem states how many to select and scoring is all-or-nothing. Common where several steps together complete an investigation or remediation.' },
      { name: 'AI-in-security scenario items (V4 new)', share: 'Spread across domains in V4', detail: 'Knowledge and scenario items on AI use in defensive operations, AI governance, and AI risks such as hallucination and data exposure. Genuinely new in CS0-004 and easy to miss if studying V3 material.' }
    ],
    samples: [
      {
        prompt: 'An analyst reviews a SIEM alert showing a sudden spike in outbound DNS queries from a single workstation to many random subdomains of an unknown domain, with each response under 200 bytes. The workstation’s egress to the internet is otherwise normal. Which conclusion is most supported?',
        options: [
          'A. A DNS tunneling exfiltration is likely occurring from the workstation',
          'B. The workstation is performing a normal recursive DNS cache refresh',
          'C. A distributed denial-of-service attack is being launched by the workstation',
          'D. The DNS server itself has been misconfigured with a too-short TTL'
        ],
        answer: 'A',
        explanation: 'High-volume DNS queries to many random subdomains with small response sizes is a classic DNS-tunneling exfiltration pattern: an attacker encodes data in subdomain labels to smuggle it out past egress controls that permit DNS. B is wrong because a cache refresh does not target random unknown subdomains at volume. C is wrong because a DDoS would aim traffic at a victim, not generate random lookups from one host. D is wrong because TTL misconfiguration would not produce this query pattern. The V4 exam rewards reading the telemetry rather than recognising a buzzword.'
      },
      {
        prompt: 'A vulnerability scanner reports a finding with CVSS base score 9.8 on an internet-facing web server, and a separate finding scored 7.5 on an internal print server. From a remediation-prioritisation standpoint, which action is correct?',
        options: [
          'A. Fix the 7.5 internal finding first because internal assets are easier to reach',
          'B. Fix the 9.8 internet-facing finding first, weighting exposure and asset criticality, not score alone',
          'C. Fix neither until a formal pen test confirms both',
          'D. Fix the lower score first to clear volume quickly'
        ],
        answer: 'B',
        explanation: 'Prioritisation weights exploitability and exposure alongside the CVSS score; a 9.8 on an internet-facing asset is both highly severe and directly exposed, so it leads. A is a common trap — ease of remediation is not a prioritisation criterion. C invents a requirement the analyst role does not impose; scanning findings drive remediation directly. D confuses throughput with risk. This is the Vulnerability Management domain (26%), where CySA+ tests judgement, not just score recall.'
      },
      {
        prompt: 'A security team begins using an AI-assisted analysis tool that ingests case data, including customer PII, to draft incident summaries. Which risk introduced specifically by the AI use must the governance process address?',
        options: [
          'A. The AI model will refuse to process PII and shut down the workflow',
          'B. The model may hallucinate false findings and the PII may be exposed to the model provider',
          'C. The AI will automatically encrypt the data at rest',
          'D. The AI removes the need for any human review of the summary'
        ],
        answer: 'B',
        explanation: 'Two V4-specific risks are in play: the model can hallucinate — produce confident but false conclusions an analyst might accept — and sending customer PII to an externally hosted model can expose that data to the provider, a governance and compliance concern. A is false; models do not typically refuse PII outright. C is false; AI does not autonomously encrypt. D is dangerous practice, not a feature — human review remains required. This item reflects the explicit AI-in-security coverage new to CS0-004.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published CS0-004 blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'One hundred sixty-five minutes, up to 85 questions, delivered through Pearson VUE either at a test centre or online with OnVUE proctoring. Two things about a CompTIA exam day differ sharply from a fixed-order exam and both are in your favour. First, you can navigate: performance-based questions are presented early and you are permitted to skip them and return, and you can review and change multiple-choice answers before submitting. Build your pacing plan around that — mark every PBQ, sweep the multiple choice at a brisk tempo, then divide what remains across the outstanding tasks. Second, you get your result immediately: the scaled score appears on screen the moment you submit, plus a report showing relative performance by domain, which is genuinely diagnostic if you have to come back. For CySA+ specifically, the performance-based items hand you telemetry — logs, captures, scans — so the single biggest on-the-day risk is spending the first hour on two PBQs and rushing the multiple choice that decides the 750. The thing that goes wrong most often has nothing to do with security: CompTIA requires two forms of identification, one government-issued photo ID, and the name must match your CompTIA account exactly. Check your account spelling the week before; correcting it on the day is not possible and the seat is lost. Confirm you are booked for CS0-004, not CS0-003, before you travel.',
    bring: [
      'Two forms of identification, both unexpired, with names matching your CompTIA account exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit card is usually accepted)',
      'Your CompTIA ID, in case check-in cannot locate the booking',
      'For OnVUE: a phone for check-in photographs, a completely clear desk, and a private room with a door you can close',
      'For OnVUE: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, cheat sheets and printed command or framework references',
      'Your own paper and pens; a test centre issues an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for OnVUE, and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Log into your CompTIA account and confirm your name is spelled exactly as on your ID, and that your booking is for CS0-004 (V4), not CS0-003.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for photographs of your face, both IDs and the room.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the four domain weights and the 750/900 target on the noteboard as a pacing anchor.' },
      { time: '0-5 minutes', detail: 'Work the opening PBQs only far enough to see what each asks, then skip them all. Do not start interpreting yet.' },
      { time: '5-120 minutes', detail: 'Sweep the multiple-choice items at pace. Answer everything; flag uncertain items rather than dwelling, since you can review later.' },
      { time: '120-160 minutes', detail: 'Return to the PBQs with a known budget. Divide remaining minutes by the number of tasks and hold to it — partial work can still earn credit, an untouched task cannot.' },
      { time: '160-165 minutes', detail: 'Review flagged multiple-choice items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      'Navigation is permitted: you may skip performance-based questions and return, and review multiple-choice answers before submitting.',
      'Passing score is 750 on a 100-900 scale; it is not a percentage of items correct.',
      'Two forms of ID are required, one government-issued with photo, names matching your CompTIA account exactly.',
      'No scheduled breaks in a 165-minute exam, and the clock does not stop if you leave.',
      'Erasable noteboard only at a test centre; OnVUE candidates get a digital whiteboard and no physical writing materials.',
      'No waiting period between first and second attempt; from the third attempt onward you must wait 14 calendar days; each attempt is paid unless a retake was bundled.',
      'CS0-004 is the current exam (launched 23 June 2026); CS0-003 English retires 22 December 2026.'
    ],
    afterwards:
      'Your pass or fail and your scaled score appear on screen the instant you submit, and you leave a test centre with a printed score report showing how you performed relative to each of the four domains. That report is the most useful artefact any of these exams produces, so read it properly rather than filing it. On a pass, your certification appears in your CompTIA account within a few days and you can claim the digital badge and download the certificate; CySA+ is valid for three years under the CompTIA Continuing Education programme, renewed with 60 CEUs plus the $150 CE fee, or automatically by passing a higher-level CompTIA certification — diary the expiry immediately. On a fail, resist booking the immediate retake that the no-waiting-period policy makes possible; take the domain breakdown, identify the one or two areas that dragged the 750 down — often the Reporting/Communication domain for V4 candidates, or the new AI-in-security content — and spend a fortnight on those specifically. If you discover you were somehow booked for CS0-003 rather than CS0-004, that is a version error to correct before any retake, since CS0-004 is the current exam and CS0-003 English retires 22 December 2026. The score report tells you precisely where to aim, which is a luxury, and wasting it by re-sitting on the same knowledge is how a ~$439 voucher becomes a ~$878 one.'
  }
};

export default data;
