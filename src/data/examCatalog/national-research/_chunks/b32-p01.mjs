// b32-p01 — Cybersecurity, vendor-neutral (GIAC + OffSec)
// Source of truth for chunk b32-p01. Covers all 38 catalog slugs.
// Research: giac.org/pricing, giac.org/certifications, help.offsec.com, offsec.com (2026-08).

export const programs = [
  {
    id: 'giac',
    body: 'GIAC',
    bodyUrl: 'https://www.giac.org/',
    about: 'GIAC (Global Information Assurance Certification) is the certification body of the SANS Institute. Its credentials are technical and increasingly hands-on, spanning six focus areas: offensive operations, cyber defense, cloud security, industrial control systems, cybersecurity leadership, and digital forensics and incident response. Most exams are proctored multiple-choice delivered open-book, and many now include CyberLive performance-based labs that test real tool use inside a virtual environment.',
    registrationSteps: [
      {
        title: 'Take a SANS course or self-study',
        description: 'Most candidates attend a SANS course, which includes a certification attempt, but self-study against the published exam outline is allowed.',
        duration: '4-6 days course'
      },
      {
        title: 'Activate the exam',
        description: 'You have 120 days from course completion or voucher issue to activate and schedule the exam.',
        duration: '120-day window'
      },
      {
        title: 'Schedule proctoring',
        description: 'Book a remote-proctored slot (ProctorU) or a Pearson VUE on-site appointment. GIAC exams are open book: printed books, notes and an index are allowed, but no electronic devices.',
        duration: '10 minutes'
      },
      {
        title: 'Take and pass the exam',
        description: 'Complete the timed exam (many include CyberLive labs) and receive a percentage pass/fail result on completion.',
        duration: '2-4 hours'
      }
    ],
    proctoring: 'GIAC exams are proctored: candidates choose remote proctoring via ProctorU or an on-site Pearson VUE centre. Exams are open book (printed materials only). Many credentials include CyberLive performance-based labs alongside the multiple-choice items.',
    retakePolicy: 'A single certification attempt costs $999 (Practitioner) or $1,299 (Applied Knowledge / GX tier). If you do not pass, a retake may be purchased for $899 (or $1,199 for GX) and must be completed within four months of the first attempt. A 120-day activation window applies to the initial attempt.',
    recertification: 'GIAC certifications are valid for four years. Renewal requires 36 CPE credits and a $499 renewal fee (additional renewals within two years of a full-price renewal are $249 each). Certifications placed in abeyance (for example GSNA, GCWN, GCPM, GEVA) cannot be newly earned and renew by CPE only for $199.',
    scoreReporting: 'Exams report a percentage score; the passing mark varies by certification (commonly 61% to 76%). Results are available on completion. CyberLive items are scored as part of the same percentage.',
    refundPolicy: 'GIAC orders are non-transferable and non-refundable once access is granted. A missed proctored appointment incurs a $175 reseating fee and a 7-day extension from the current deadline.',
    providersNote: 'SANS courseware and associated books are the primary, exam-aligned prep. The official GIAC practice test ($399) and index-building are widely used study tactics.',
    comparison: {
      title: 'GIAC certification tiers compared',
      columns: ['Tier', 'Attempt', 'Retake', 'Renewal'],
      rows: [
        { label: 'Practitioner (e.g. GSEC, GPEN)', values: ['$999', '$899', '$499'] },
        { label: 'Applied Knowledge / GX (e.g. GXPN)', values: ['$1,299', '$1,199', '$499'] }
      ]
    },
    orgFaqs: [
      {
        q: 'How long is a GIAC exam valid?',
        a: 'Four years. You renew by earning 36 CPE credits and paying the $499 renewal fee (or $199 for abeyance certs).'
      },
      {
        q: 'Are GIAC exams hands-on?',
        a: 'Many credentials include CyberLive performance-based labs that run real tools in a virtual environment; all are proctored and open book (printed materials only).'
      },
      {
        q: 'Can I retake a failed exam for free?',
        a: 'No. A retake costs $899 (Practitioner) or $1,199 (Applied Knowledge) and must be taken within four months of the first attempt.'
      }
    ],
    sourceUrl: 'https://www.giac.org/pricing',
    verified: false,
    confidence: 'high'
  },
  {
    id: 'offsec',
    body: 'OffSec',
    bodyUrl: 'https://www.offsec.com/',
    about: 'OffSec (formerly Offensive Security) is the hands-on, adversary-emulation training organisation behind Kali Linux and a family of practical, proctored cybersecurity certifications. Its exams are not multiple-choice knowledge tests — candidates connect to a private lab VPN, compromise real targets and submit a professional report. Credentials span offensive operations (OSCP, OSEP, OSWA, OSWE, OSED, OSEE, OSWP), defense (OSDA, OSIR, OSTH), applied AI (OSAI) and the CyberCore fundamentals (OSCC-SEC).',
    registrationSteps: [
      {
        title: 'Choose a learning path',
        description: 'Pick a course (PEN-200, WEB-200, etc.) via a Course + Exam Bundle, Learn One (one year, two attempts) or Learn Unlimited.',
        duration: 'per subscription'
      },
      {
        title: 'Complete the labs',
        description: 'Work through the course content and hands-on challenge labs; depth ranges from fundamentals to expert exploit development.',
        duration: 'weeks to months'
      },
      {
        title: 'Schedule the proctored exam',
        description: 'Book a start time in the OffSec portal and connect to the exam VPN under live webcam proctoring.',
        duration: 'set start time'
      },
      {
        title: 'Compromise the targets',
        description: 'Complete the practical exam — anywhere from 4 to 72 hours depending on the certification — and capture proof files from each target.',
        duration: '4 to 72 hours'
      },
      {
        title: 'Submit the report',
        description: 'Upload your written exploitation report within 24 hours of the exam window ending; grading follows review.',
        duration: '24-hour report window'
      }
    ],
    proctoring: 'All certification exams are live-proctored by an OffSec proctor over a private VPN; a webcam and a clear workspace are required. After the exam window you have a further 24 hours to upload your report.',
    retakePolicy: 'Attempts depend on the subscription: a Course + Exam Bundle includes one exam attempt; Learn One and Learn Unlimited include two attempts; CyberCore includes two. Additional attempts are purchased separately, and some certifications offer a discounted retake.',
    recertification: 'Most OffSec certifications are lifetime credentials and do not expire. Newer role-based certs — OSCP+ (the maintained version of OSCP), OffSec Incident Responder (OSIR) and OffSec Threat Hunter (OSTH) — are valid for three years and require 120 CPE credits plus an annual maintenance fee to stay active.',
    scoreReporting: 'Exams are graded pass/fail against a points threshold. OSCP requires 70 of 100 points (three standalone machines worth 60 points plus an Active Directory set worth 40). Candidates learn the result after their report is reviewed.',
    providersNote: 'Official OffSec courses and challenge labs are the only exam-aligned preparation; the labs are the real test. Third-party courses can supplement but will not match the exam environment.',
    comparison: {
      title: 'OffSec certification ladder compared',
      columns: ['Certification', 'Focus', 'Exam length'],
      rows: [
        { label: 'OSCP', values: ['Penetration testing', '24 hours'] },
        { label: 'OSEP', values: ['Experienced pentest / evasion', '48 hours'] },
        { label: 'OSWA', values: ['Web application assessment', '24 hours'] },
        { label: 'OSWE', values: ['Web exploitation (white-box)', '48 hours'] },
        { label: 'OSED', values: ['Windows exploit dev', '48 hours'] },
        { label: 'OSEE', values: ['Exploitation expert', '72 hours'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Do OffSec exams expire?',
        a: 'Most are lifetime credentials. OSCP+ (the maintained OSCP), OSIR and OSTH are valid for three years with CPE maintenance.'
      },
      {
        q: 'Are the exams multiple choice?',
        a: 'No. Every OffSec exam is a hands-on practical: you compromise live targets in a private lab and submit a report while a proctor watches via webcam.'
      },
      {
        q: 'How many attempts do I get?',
        a: 'A Course + Exam Bundle gives one attempt; Learn One and Learn Unlimited give two; CyberCore gives two for its 100-level exams.'
      }
    ],
    sourceUrl: 'https://www.offsec.com/courses/',
    verified: false,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'giac-gsec',
    body: 'GIAC',
    tagline: 'Broad, defensible-security essentials from GIAC.',
    description: 'GIAC Security Essentials (GSEC) is GIAC’s broad entry-level technical certification covering defensible network architecture, cryptography, incident handling, cloud and Windows/Linux security basics. It is a strong foundational credential for hands-on security practitioners who need to demonstrate practical, vendor-neutral security knowledge rather than a single product.',
    quickAnswer: {
      summary: 'GSEC is a 106-question, 4-hour GIAC exam with a 72% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 via giac.org and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Broad, practical security essentials',
        'Strong foundation for hands-on roles',
        'Vendor-neutral and SANS-aligned (SEC401)',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC401 or self-study', 'Activate exam (120 days)', 'Schedule proctor', 'Pass at 72%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; basic IT knowledge is assumed.',
    examMeta: {
      questions: '106',
      time: '4 hours',
      pass: '72%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Defensible Network Architecture', note: 'Segmentation and controls' },
      { name: 'Cryptography', note: 'Algorithms and use' },
      { name: 'Incident Handling', note: 'Detection and response' },
      { name: 'Cloud and OS Security', note: 'Windows, Linux, cloud' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-6 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '4 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'Most candidates sit GSEC bundled with a SANS course that includes the attempt; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Easy',
    audience: 'Entry to mid-level hands-on security practitioners.',
    time: '4-6 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$80,000-$120,000',
    faqs: [
      { q: 'What does GSEC cover?', a: 'A broad essentials curriculum: defensible architecture, cryptography, incident handling, and Windows, Linux and cloud security basics.' },
      { q: 'How is the exam delivered?', a: '106 questions over four hours, proctored remotely via ProctorU or at a Pearson VUE centre, with a 72% pass mark. It is open book with printed materials.' },
      { q: 'Do I need a SANS course?', a: 'No, but the exam attempt is included with SANS training; a standalone attempt costs $999.' },
      { q: 'How do I renew GSEC?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GSEC is GIAC’s broad security essentials cert',
      '106 questions, 4 hours, 72% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499 renewal'
    ],
    relatedSlugs: ['giac-gcih', 'giac-gcld', 'isc2-sscp'],
    sourceUrl: 'https://www.giac.org/certification/security-essentials-gsec/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcih',
    body: 'GIAC',
    tagline: 'Detect, contain and eradicate intrusions.',
    description: 'GIAC Certified Incident Handler (GCIH) validates the ability to detect, respond to and contain intrusions using common attack techniques and incident-handling methodology. It covers hacker exploits, incident handling and recovery, making it a core defensive certification for SOC analysts, incident responders and anyone on a security operations team.',
    quickAnswer: {
      summary: 'GCIH is a 106-question, 4-hour GIAC exam with a 69% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Core incident-handling credential',
        'Covers real attack techniques and response',
        'SANS SEC504 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC504 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 69%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; security operations familiarity helps.',
    examMeta: {
      questions: '106',
      time: '4 hours',
      pass: '69%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Incident Handling', note: 'Preparation and response' },
      { name: 'Common Attacks', note: 'Exploits and tools' },
      { name: 'Detection', note: 'Identifying compromise' },
      { name: 'Containment and Eradication', note: 'Recovery' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '4 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'Most candidates sit GCIH bundled with SANS SEC504, which includes the attempt; standalone attempt is $999.'
    },
    difficulty: 'Moderate',
    audience: 'Incident responders and SOC analysts.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$90,000-$130,000',
    faqs: [
      { q: 'What does GCIH cover?', a: 'Incident handling using common attack techniques: hacker exploits, detection, containment, eradication and recovery.' },
      { q: 'How is it scored?', a: '106 questions over four hours, with a 69% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GCIH hands-on?', a: 'GCIH includes CyberLive performance-based labs alongside the multiple-choice items, testing real incident-response actions in a lab.' },
      { q: 'How do I renew GCIH?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCIH is GIAC’s incident handler cert',
      '106 questions, 4 hours, 69% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499 renewal'
    ],
    relatedSlugs: ['giac-gsec', 'giac-gcfa', 'eccouncil-ecih'],
    sourceUrl: 'https://www.giac.org/certification/certified-incident-handler-gcih/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcfa',
    body: 'GIAC',
    tagline: 'Advanced forensics and intrusion analysis.',
    description: 'GIAC Certified Forensic Analyst (GCFA) is an advanced digital forensics and incident response certification covering memory forensics, timeline analysis and detecting advanced adversaries. It is aimed at responders who need deep evidence analysis skills and maps to the SANS FOR508 course.',
    quickAnswer: {
      summary: 'GCFA is an 82-question, 3-hour GIAC exam with a 71% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Advanced DFIR credential',
        'Covers memory and timeline forensics',
        'SANS FOR508 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take FOR508 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 71%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; forensics or IR experience is recommended.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '71%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Memory Forensics', note: 'Volatile artefact analysis' },
      { name: 'Timeline Analysis', note: 'Reconstructing events' },
      { name: 'Advanced Adversary Detection', note: 'Anti-forensics and TTPs' },
      { name: 'Evidence Handling', note: 'Chain of custody' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCFA is typically sat bundled with SANS FOR508; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Hard',
    audience: 'DFIR analysts and senior incident responders.',
    time: '6-10 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$100,000-$150,000',
    faqs: [
      { q: 'What does GCFA cover?', a: 'Advanced digital forensics and incident response: memory forensics, timeline analysis, anti-forensics and detecting sophisticated adversaries.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, proctored remotely or at Pearson VUE, with a 71% pass mark.' },
      { q: 'Is experience required?', a: 'Not formally, but DFIR or incident-response background is strongly recommended given the depth.' },
      { q: 'How do I renew GCFA?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCFA is GIAC’s advanced forensic analyst cert',
      '82 questions, 3 hours, 71% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcfe', 'giac-gcih', 'giac-grem'],
    sourceUrl: 'https://www.giac.org/certification/certified-forensic-analyst-gcfa/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcfe',
    body: 'GIAC',
    tagline: 'Windows forensic examination, end to end.',
    description: 'GIAC Certified Forensic Examiner (GCFE) focuses on Windows forensic examination: registry, browser and cloud artefacts, file system analysis and evidence reporting. It is the right credential for analysts investigating Windows-centric environments and maps to the SANS FOR500 course.',
    quickAnswer: {
      summary: 'GCFE is an 82-question, 3-hour GIAC exam with a 70% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Windows-focused digital forensics',
        'Registry, browser and cloud artefacts',
        'SANS FOR500 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take FOR500 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 70%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; Windows administration familiarity helps.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '70%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Windows File System', note: 'NTFS and artefacts' },
      { name: 'Registry Analysis', note: 'Configuration and history' },
      { name: 'Browser and Cloud Artefacts', note: 'Usage evidence' },
      { name: 'Evidence Reporting', note: 'Documentation' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCFE is typically sat bundled with SANS FOR500; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Digital forensic analysts working in Windows environments.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$90,000-$135,000',
    faqs: [
      { q: 'What does GCFE cover?', a: 'Windows forensic examination: file systems, registry, browser and cloud artefacts, and producing evidence reports.' },
      { q: 'How is it scored?', a: '82 questions over three hours, 70% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GCFE or GCFA better?', a: 'GCFE is Windows-examination focused; GCFA is broader and more advanced (memory, timeline, adversary detection). Many take GCFE first.' },
      { q: 'How do I renew GCFE?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCFE is GIAC’s Windows forensic examiner cert',
      '82 questions, 3 hours, 70% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcfa', 'giac-gcih', 'eccouncil-chfi'],
    sourceUrl: 'https://www.giac.org/certification/certified-forensic-examiner-gcfe/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcia',
    body: 'GIAC',
    tagline: 'Analyse network traffic and detect intrusions.',
    description: 'GIAC Certified Intrusion Analyst (GCIA) validates skill in network traffic analysis, packet dissection and intrusion detection signatures. It is aimed at analysts who monitor enterprise telemetry, tune detection and investigate suspicious traffic, and maps to the SANS SEC503 course.',
    quickAnswer: {
      summary: 'GCIA is a 106-question, 4-hour GIAC exam with a 67% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Network traffic and packet analysis',
        'Intrusion detection signature skills',
        'SANS SEC503 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC503 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 67%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; networking knowledge is assumed.',
    examMeta: {
      questions: '106',
      time: '4 hours',
      pass: '67%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Network Protocols', note: 'TCP/IP and analysis' },
      { name: 'Packet Dissection', note: 'Deep inspection' },
      { name: 'Intrusion Detection', note: 'Signatures and monitoring' },
      { name: 'Traffic Analysis', note: 'Telemetry review' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '4 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCIA is typically sat bundled with SANS SEC503; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Network security analysts and IDS/IPS tuners.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$90,000-$130,000',
    faqs: [
      { q: 'What does GCIA cover?', a: 'Network traffic analysis, packet dissection, intrusion detection signatures and monitoring enterprise telemetry.' },
      { q: 'How is it delivered?', a: '106 questions over four hours, 67% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'What knowledge is assumed?', a: 'Solid networking fundamentals, including TCP/IP, are expected.' },
      { q: 'How do I renew GCIA?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCIA is GIAC’s intrusion analyst cert',
      '106 questions, 4 hours, 67% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcih', 'giac-gmon', 'giac-gcfa'],
    sourceUrl: 'https://www.giac.org/certification/certified-intrusion-analyst-gcia/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gweb',
    body: 'GIAC',
    tagline: 'Secure web application design and defense.',
    description: 'GIAC Certified Web Application Defender (GWEB) is for developers and defenders covering secure web application design, input handling, authentication and mitigating OWASP-style flaws. It suits anyone who builds or defends web applications and maps to the SANS SEC522 course.',
    quickAnswer: {
      summary: 'GWEB is a 75-question, 3-hour GIAC exam with a 68% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Web application security for builders and defenders',
        'Covers OWASP-style flaws',
        'SANS SEC522 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC522 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 68%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; web development familiarity helps.',
    examMeta: {
      questions: '75',
      time: '3 hours',
      pass: '68%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Secure Design', note: 'Architecture and threats' },
      { name: 'Input Handling', note: 'Validation and encoding' },
      { name: 'Authentication', note: 'Session and identity' },
      { name: 'OWASP Flaws', note: 'Common web vulnerabilities' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GWEB is typically sat bundled with a SANS developer/security course; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Web developers and application defenders.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$140,000',
    faqs: [
      { q: 'What does GWEB cover?', a: 'Secure web application design, input handling, authentication and mitigating common OWASP-style flaws for both builders and defenders.' },
      { q: 'How is it delivered?', a: '75 questions over three hours, 68% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GWEB for developers or defenders?', a: 'Both — it is aimed at anyone who designs, builds or defends web applications.' },
      { q: 'How do I renew GWEB?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GWEB is GIAC’s web app defender cert',
      '75 questions, 3 hours, 68% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gwapt', 'offsec-oswe', 'isc2-csslp'],
    sourceUrl: 'https://www.giac.org/certification/certified-web-application-defender-gweb/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcpn',
    body: 'GIAC',
    tagline: 'Penetration testing of cloud environments.',
    description: 'GIAC Cloud Penetration Tester (GCPN) covers penetration testing of cloud environments, including cloud identity attacks, containers, serverless and CI/CD pipelines across AWS, Azure and GCP. It is the cloud-offensive counterpart to GCLD and maps to the SANS SEC510 course.',
    quickAnswer: {
      summary: 'GCPN is a 75-question, 2-hour GIAC exam with a 70% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Cloud-focused penetration testing',
        'Identity, containers, serverless, CI/CD',
        'SANS SEC510 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC510 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 70%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; cloud and pentest basics help.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '70%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Cloud Identity Attacks', note: 'IAM and tokens' },
      { name: 'Containers', note: 'Container escapes' },
      { name: 'Serverless', note: 'Function attacks' },
      { name: 'CI/CD Pipelines', note: 'Supply-chain testing' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCPN is typically sat bundled with SANS SEC510; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'Cloud penetration testers and offensive security engineers.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$105,000-$150,000',
    faqs: [
      { q: 'What does GCPN cover?', a: 'Penetration testing of cloud environments: identity attacks, containers, serverless functions and CI/CD pipelines across AWS, Azure and GCP.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 70% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'How does GCPN relate to GPEN?', a: 'GPEN covers traditional infrastructure penetration testing; GCPN extends the offensive methodology into cloud-native environments.' },
      { q: 'How do I renew GCPN?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCPN is GIAC’s cloud penetration tester cert',
      '75 questions, 2 hours, 70% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcld', 'giac-gpen', 'offsec-oscp'],
    sourceUrl: 'https://www.giac.org/certification/cloud-penetration-tester-gcpn/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcsa',
    body: 'GIAC',
    tagline: 'DevSecOps and cloud security automation.',
    description: 'GIAC Cloud Security Automation (GCSA) validates DevSecOps and cloud security automation skills: securing CI/CD pipelines, treating configuration as code, embedding automated security testing into build workflows, and running continuous compliance monitoring across cloud environments. It maps to the SANS SEC540 course and targets engineers who build security guardrails rather than audit them after release.',
    quickAnswer: {
      summary: 'GCSA is a 75-question, 2-hour GIAC exam with a 66% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'DevSecOps and automation focus',
        'Pipeline and config-as-code security',
        'SANS SEC540 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC540 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 66%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; DevOps familiarity helps.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '66%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Pipeline Security', note: 'CI/CD hardening' },
      { name: 'Configuration as Code', note: 'Immutable infra' },
      { name: 'Continuous Compliance', note: 'Automated guardrails' },
      { name: 'Cloud Automation', note: 'Orchestration security' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCSA is typically sat bundled with SANS SEC540; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'DevSecOps engineers and cloud security automators.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$110,000-$160,000',
    faqs: [
      { q: 'What does GCSA cover?', a: 'DevSecOps and cloud security automation: securing CI/CD pipelines, configuration as code and continuous compliance.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 66% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GCSA?', a: 'DevSecOps engineers and cloud security professionals who automate security controls.' },
      { q: 'How do I renew GCSA?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCSA is GIAC’s cloud security automation cert',
      '75 questions, 2 hours, 66% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcpn', 'giac-gcld', 'giac-grem'],
    sourceUrl: 'https://www.giac.org/certification/cloud-security-automation-gcsa/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'giac-gpen',
    body: 'GIAC',
    tagline: 'Structured, methodology-led penetration testing.',
    description: 'GIAC Penetration Tester (GPEN) validates the ability to plan, scope and execute penetration tests: reconnaissance, exploitation, password attacks and Azure/domain attacks. It is a recognised credential for professional pentesters and maps to the SANS SEC560 course.',
    quickAnswer: {
      summary: 'GPEN is an 82-question, 3-hour GIAC exam with a 73% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Recognised penetration testing credential',
        'Covers scoping, exploitation and AD attacks',
        'SANS SEC560 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC560 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 73%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; pentest fundamentals are expected.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '73%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Scoping and Planning', note: 'Rules of engagement' },
      { name: 'Reconnaissance', note: 'Discovery' },
      { name: 'Exploitation', note: 'Gaining access' },
      { name: 'Password and Domain Attacks', note: 'Azure and AD' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GPEN is typically sat bundled with SANS SEC560; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'Professional penetration testers.',
    time: '6-10 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$140,000',
    faqs: [
      { q: 'What does GPEN cover?', a: 'The full pentest methodology: scoping, planning, reconnaissance, exploitation, password attacks and Azure/Active Directory attacks.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, 73% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GPEN hands-on?', a: 'GPEN includes CyberLive performance-based labs alongside the multiple-choice items, exercising real pentest actions in a lab.' },
      { q: 'How do I renew GPEN?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GPEN is GIAC’s penetration tester cert',
      '82 questions, 3 hours, 73% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['offsec-oscp', 'giac-gxpn', 'eccouncil-cpent'],
    sourceUrl: 'https://www.giac.org/certification/penetration-tester-gpen/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gwapt',
    body: 'GIAC',
    tagline: 'Web application penetration testing, focused.',
    description: 'GIAC Web Application Penetration Tester (GWAPT) focuses on web application pentesting: injection, session flaws, client-side attacks and testing methodology. It is the right credential for application security testers and maps to the SANS SEC542 course.',
    quickAnswer: {
      summary: 'GWAPT is an 82-question, 3-hour GIAC exam with a 71% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Web application focus',
        'Covers injection, sessions, client-side',
        'SANS SEC542 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC542 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 71%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; web and scripting familiarity helps.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '71%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Injection Flaws', note: 'SQLi, command injection' },
      { name: 'Session Management', note: 'Flaws and attacks' },
      { name: 'Client-Side Attacks', note: 'XSS and beyond' },
      { name: 'Testing Methodology', note: 'Web pentest process' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GWAPT is typically sat bundled with SANS SEC542; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Web application security testers.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$140,000',
    faqs: [
      { q: 'What does GWAPT cover?', a: 'Web application penetration testing: injection, session management, client-side attacks and a structured testing methodology.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, 71% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'How does it compare to OSWE?', a: 'GWAPT is a proctored knowledge-and-analysis exam on web testing; OSWE is a fully hands-on white-box exploitation exam.' },
      { q: 'How do I renew GWAPT?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GWAPT is GIAC’s web app pentest cert',
      '82 questions, 3 hours, 71% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['offsec-oswe', 'offsec-oswa', 'giac-gpen'],
    sourceUrl: 'https://www.giac.org/certification/web-application-penetration-tester-gwapt/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcld',
    body: 'GIAC',
    tagline: 'Multi-cloud security fundamentals.',
    description: 'GIAC Cloud Security Essentials (GCLD) covers multi-cloud security fundamentals across AWS and Azure: identity and access management, storage and data protection, network segmentation, logging and monitoring, and the shared-responsibility boundaries that differ between providers. It maps to the SANS SEC488 course and suits practitioners moving from on-premise security into cloud roles.',
    quickAnswer: {
      summary: 'GCLD is a 75-question, 2-hour GIAC exam with a 61% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Multi-cloud security basics',
        'AWS and Azure focus',
        'SANS SEC488 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC488 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 61%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; cloud familiarity helps.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '61%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Cloud Identity', note: 'IAM across providers' },
      { name: 'Storage Security', note: 'Buckets and encryption' },
      { name: 'Networking', note: 'Cloud network controls' },
      { name: 'Logging', note: 'Telemetry and audit' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCLD is typically sat bundled with SANS SEC488; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Easy',
    audience: 'Cloud security practitioners.',
    time: '3-6 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$140,000',
    faqs: [
      { q: 'What does GCLD cover?', a: 'Multi-cloud security fundamentals across AWS and Azure: identity, storage, networking and logging controls.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 61% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GCLD an entry-level cloud cert?', a: 'Yes — it is GIAC’s essentials-level cloud security credential, a good on-ramp before GCPN or GCSA.' },
      { q: 'How do I renew GCLD?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCLD is GIAC’s cloud security essentials cert',
      '75 questions, 2 hours, 61% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcpn', 'giac-gcsa', 'isc2-ccsp'],
    sourceUrl: 'https://www.giac.org/certification/cloud-security-essentials-gcld/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gmon',
    body: 'GIAC',
    tagline: 'Continuous security monitoring and detection.',
    description: 'GIAC Continuous Monitoring Certification (GMON) validates the ability to implement and operate continuous security monitoring across networks, endpoints and logs. It covers audit trail analysis, alerting, log management and detection engineering, making it a strong fit for SOC and detection-engineering roles. It maps to the SANS SEC511 course.',
    quickAnswer: {
      summary: 'GMON is an 82-question, 3-hour GIAC exam with a 74% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Continuous monitoring and detection',
        'Log, network and endpoint visibility',
        'SANS SEC511 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC511 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 74%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; SOC or monitoring experience helps.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '74%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Log Management', note: 'Centralised collection' },
      { name: 'Network Monitoring', note: 'Traffic and flow' },
      { name: 'Endpoint Monitoring', note: 'Host telemetry' },
      { name: 'Alerting and Detection', note: 'Tuning and response' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GMON is typically sat bundled with SANS SEC511; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'SOC analysts and detection engineers.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$135,000',
    faqs: [
      { q: 'What does GMON cover?', a: 'Continuous security monitoring: log management, network and endpoint visibility, alerting and detection tuning.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, 74% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GMON?', a: 'SOC analysts, detection engineers and anyone operating continuous monitoring tooling.' },
      { q: 'How do I renew GMON?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GMON is GIAC’s continuous monitoring cert',
      '82 questions, 3 hours, 74% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcia', 'giac-gcih', 'giac-gcld'],
    sourceUrl: 'https://www.giac.org/certification/continuous-monitoring-certification-gmon/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gcti',
    body: 'GIAC',
    tagline: 'Turn threat intel into action.',
    description: 'GIAC Certified Threat Intelligence (GCTI) validates the ability to build and use cyber threat intelligence: requirements, collection, analysis, dissemination and the kill chain and diamond models. It suits intel analysts and CTI team members and maps to the SANS FOR578 course.',
    quickAnswer: {
      summary: 'GCTI is an 82-question, 3-hour GIAC exam with a 71% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Threat intelligence lifecycle',
        'Kill chain and diamond models',
        'SANS FOR578 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take FOR578 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 71%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; intelligence or analysis background helps.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '71%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Intelligence Requirements', note: 'Planning and direction' },
      { name: 'Collection and Analysis', note: 'Tradecraft' },
      { name: 'Frameworks', note: 'Kill chain, diamond' },
      { name: 'Dissemination', note: 'Reporting and use' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCTI is typically sat bundled with SANS FOR578; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Threat intelligence analysts and CTI team members.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$95,000-$140,000',
    faqs: [
      { q: 'What does GCTI cover?', a: 'The threat intelligence lifecycle: requirements, collection, analysis, the kill chain and diamond models, and dissemination.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, 71% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GCTI?', a: 'Cyber threat intelligence analysts and team members who produce or consume finished intelligence.' },
      { q: 'How do I renew GCTI?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCTI is GIAC’s threat intelligence cert',
      '82 questions, 3 hours, 71% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcfa', 'giac-gcih', 'giac-gmon'],
    sourceUrl: 'https://www.giac.org/certification/certified-threat-intelligence-gcti/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gdsa',
    body: 'GIAC',
    tagline: 'Secure the modern DevOps pipeline.',
    description: 'GIAC Defensive Security Architecture (GDSA) validates the ability to design and defend secure enterprise architectures: network segmentation, identity, cloud and hybrid environments, and embedding security into the development lifecycle. It maps to the SANS SEC530 course and targets architects and senior engineers.',
    quickAnswer: {
      summary: 'GDSA is a 75-question, 2-hour GIAC exam with a 63% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Defensive security architecture',
        'Segmentation, identity and cloud',
        'SANS SEC530 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC530 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 63%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; architecture or senior engineering experience helps.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '63%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Network Architecture', note: 'Segmentation and zero trust' },
      { name: 'Identity and Access', note: 'Centralised IAM' },
      { name: 'Cloud and Hybrid', note: 'Shared responsibility' },
      { name: 'Secure Development', note: 'Pipeline controls' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GDSA is typically sat bundled with SANS SEC530; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'Security architects and senior engineers.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$120,000-$165,000',
    faqs: [
      { q: 'What does GDSA cover?', a: 'Defensive security architecture: segmentation, identity, cloud/hybrid design and secure development lifecycle controls.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 63% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GDSA?', a: 'Security architects and senior engineers who design and defend enterprise environments.' },
      { q: 'How do I renew GDSA?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GDSA is GIAC’s defensive architecture cert',
      '75 questions, 2 hours, 63% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gsec', 'giac-gcsa', 'giac-gcld'],
    sourceUrl: 'https://www.giac.org/certification/defensive-security-architecture-gdsa/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gxpn',
    body: 'GIAC',
    tagline: 'Advanced exploit development and pentesting.',
    description: 'GIAC Exploit Researcher and Advanced Penetration Tester (GXPN) is the Applied Knowledge (GX) tier credential for advanced exploit development and offensive tradecraft, mapped to the SANS SEC660 course. It goes beyond GPEN into custom exploit crafting, advanced Windows and Linux exploitation, and bypassing modern defenses. As a GX cert it carries the higher $1,299 attempt fee.',
    quickAnswer: {
      summary: 'GXPN is a 60-question, 3-hour GIAC Applied Knowledge exam with a 67% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. The Applied Knowledge attempt costs $1,299 (retake $1,199) and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Advanced exploit development credential',
        'Custom payloads and modern bypasses',
        'SANS SEC660 aligned (GX tier)',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC660 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 67%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; strong pentest and scripting experience is expected.',
    examMeta: {
      questions: '60',
      time: '3 hours',
      pass: '67%',
      fee: '$1,299 (Applied Knowledge attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Exploit Development', note: 'Stack and heap' },
      { name: 'Windows and Linux', note: 'Platform tradecraft' },
      { name: 'Evasion', note: 'Bypassing defenses' },
      { name: 'Custom Payloads', note: 'Advanced techniques' }
    ],
    examEssentials: [
      ['Tier', 'Applied Knowledge (GX) — higher attempt fee'],
      ['Retake', '$1,199; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Applied Knowledge attempt', fee: '$1,299' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$1,299 (plus SANS course if taken)',
      footnote: 'GXPN is an Applied Knowledge (GX) certification; the attempt fee is $1,299 and retake $1,199, higher than Practitioner-tier GIAC exams.'
    },
    difficulty: 'Hard',
    audience: 'Advanced penetration testers and exploit developers.',
    time: '8-12 weeks',
    cost: '$1,299 plus course if taken',
    salaryRange: '$120,000-$170,000',
    faqs: [
      { q: 'What does GXPN cover?', a: 'Advanced exploit research and development: custom exploits, Windows and Linux tradecraft, and bypassing modern defensive controls.' },
      { q: 'How is it delivered?', a: '60 questions over three hours, 67% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Why is the fee higher than GPEN?', a: 'GXPN is an Applied Knowledge (GX) certification; the attempt is $1,299 and retake $1,199 versus $999/$899 for Practitioner-tier exams.' },
      { q: 'How do I renew GXPN?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee, the same as Practitioner certs.' }
    ],
    summaryPoints: [
      'GXPN is GIAC’s advanced exploit dev cert (GX tier)',
      '60 questions, 3 hours, 67% to pass',
      'Applied Knowledge attempt $1,299; retake $1,199',
      '4-year validity; 36 CPE + $499 renewal'
    ],
    relatedSlugs: ['giac-gpen', 'offsec-osed', 'offsec-osee'],
    sourceUrl: 'https://www.giac.org/certification/exploit-researcher-and-advanced-penetration-tester-gxpn/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gnfa',
    body: 'GIAC',
    tagline: 'Hunt threats in network flow and logs.',
    description: 'GIAC Network Forensic Analyst (GNFA) validates the ability to perform network forensics and threat hunting: extracting evidence from full packet captures, flow data and logs, and reconstructing attacker activity. It maps to the SANS FOR572 course and suits DFIR and hunt team members.',
    quickAnswer: {
      summary: 'GNFA is a 66-question, 3-hour GIAC exam with a 70% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Network forensics and threat hunting',
        'Packet, flow and log analysis',
        'SANS FOR572 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take FOR572 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 70%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; networking and forensics familiarity helps.',
    examMeta: {
      questions: '66',
      time: '3 hours',
      pass: '70%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Packet Capture', note: 'Full PCAP analysis' },
      { name: 'Flow Data', note: 'NetFlow and metadata' },
      { name: 'Log Analysis', note: 'Reconstruction' },
      { name: 'Threat Hunting', note: 'Proactive search' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GNFA is typically sat bundled with SANS FOR572; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Hard',
    audience: 'Network forensic analysts and threat hunters.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$100,000-$150,000',
    faqs: [
      { q: 'What does GNFA cover?', a: 'Network forensics and threat hunting: analysing full packet captures, flow data and logs to reconstruct attacker activity.' },
      { q: 'How is it delivered?', a: '66 questions over three hours, 70% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'How does GNFA differ from GCIA?', a: 'GCIA is focused on live intrusion detection and traffic analysis; GNFA is the forensic/hunt counterpart that reconstructs past activity from captures.' },
      { q: 'How do I renew GNFA?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GNFA is GIAC’s network forensic analyst cert',
      '66 questions, 3 hours, 70% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcfa', 'giac-gcia', 'giac-gcti'],
    sourceUrl: 'https://www.giac.org/certification/network-forensic-analyst-gnfa/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'giac-gced',
    body: 'GIAC',
    tagline: 'Defend the enterprise end to end.',
    description: 'GIAC Certified Enterprise Defender (GCED) validates the ability to defend enterprise environments: perimeter and network defenses, endpoint and data protection, and the architecture decisions that make an organisation defensible. It maps to the SANS SEC501 course and suits defenders and architects who operate across the full kill chain.',
    quickAnswer: {
      summary: 'GCED is a 115-question, 3-hour GIAC exam with a 69% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Enterprise-wide defense',
        'Perimeter, network, endpoint and data',
        'SANS SEC501 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC501 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 69%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; defensive security experience helps.',
    examMeta: {
      questions: '115',
      time: '3 hours',
      pass: '69%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Perimeter Defense', note: 'Network boundary' },
      { name: 'Endpoint Protection', note: 'Host hardening' },
      { name: 'Data Protection', note: 'Encryption and DLP' },
      { name: 'Architecture', note: 'Defensible design' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GCED is typically sat bundled with SANS SEC501; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'Enterprise defenders and security architects.',
    time: '6-10 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$110,000-$160,000',
    faqs: [
      { q: 'What does GCED cover?', a: 'Defending enterprise environments across perimeter, network, endpoint and data, plus the architecture that makes an organisation defensible.' },
      { q: 'How is it delivered?', a: '115 questions over three hours, 69% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'How does GCED compare to GSEC?', a: 'GSEC is the broader essentials cert; GCED goes deeper on enterprise defense and architecture for experienced defenders.' },
      { q: 'How do I renew GCED?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GCED is GIAC’s enterprise defender cert',
      '115 questions, 3 hours, 69% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gsec', 'giac-gcih', 'giac-gcld'],
    sourceUrl: 'https://www.giac.org/certification/certified-enterprise-defender-gced/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gosi',
    body: 'GIAC',
    tagline: 'Collect and analyse open-source intelligence.',
    description: 'GIAC Open Source Intelligence (GOSI) validates the ability to gather, verify and analyse information from publicly available sources — social media, domains, leaked-data sites and the deep/dark web — for investigative and defensive purposes. It maps to the SANS SEC497 course and suits analysts supporting threat intel, fraud and insider-risk work.',
    quickAnswer: {
      summary: 'GOSI is a 75-question, 2-hour GIAC exam with a 69% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Open-source intelligence tradecraft',
        'Public, social and dark-web sources',
        'SANS SEC497 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take SEC497 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 69%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; investigation or analysis background helps.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '69%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Source Collection', note: 'Public and social' },
      { name: 'Deep and Dark Web', note: 'Investigative use' },
      { name: 'Verification', note: 'Attribution and corroboration' },
      { name: 'Analysis', note: 'Turning OSINT into findings' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GOSI is typically sat bundled with SANS SEC497; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'OSINT and threat-intel analysts.',
    time: '3-6 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$90,000-$135,000',
    faqs: [
      { q: 'What does GOSI cover?', a: 'Open-source intelligence: collecting and verifying information from public, social, leaked-data and dark-web sources for investigations.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 69% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GOSI?', a: 'Analysts in threat intelligence, fraud, insider-risk and investigations who rely on publicly available data.' },
      { q: 'How do I renew GOSI?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GOSI is GIAC’s open-source intelligence cert',
      '75 questions, 2 hours, 69% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcti', 'giac-gcfa', 'giac-gmon'],
    sourceUrl: 'https://www.giac.org/certification/open-source-intelligence-gosi/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-grid',
    body: 'GIAC',
    tagline: 'Respond to industrial control incidents.',
    description: 'GIAC Response and Industrial Defense (GRID) validates the ability to respond to incidents in operational technology (OT) and industrial control system (ICS) environments, where availability and safety outweigh confidentiality. It maps to the SANS ICS515 course and suits ICS/OT incident responders and defenders.',
    quickAnswer: {
      summary: 'GRID is a 75-question, 2-hour GIAC exam with a 74% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'ICS/OT incident response',
        'Safety- and availability-first mindset',
        'SANS ICS515 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take ICS515 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 74%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; ICS/OT or response experience helps.',
    examMeta: {
      questions: '75',
      time: '2 hours',
      pass: '74%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'ICS Architecture', note: 'OT network and protocols' },
      { name: 'Incident Response', note: 'ICS-specific playbooks' },
      { name: 'Defense', note: 'Monitoring and hardening' },
      { name: 'Safety and Availability', note: 'OT priorities' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '2 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GRID is typically sat bundled with SANS ICS515; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'ICS/OT incident responders and defenders.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$105,000-$150,000',
    faqs: [
      { q: 'What does GRID cover?', a: 'Incident response and defense for industrial control and OT environments, where safety and availability are the priority.' },
      { q: 'How is it delivered?', a: '75 questions over two hours, 74% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GRID?', a: 'ICS/OT incident responders and defenders working in energy, manufacturing and critical infrastructure.' },
      { q: 'How do I renew GRID?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GRID is GIAC’s ICS/OT response cert',
      '75 questions, 2 hours, 74% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gicsp', 'giac-gcih', 'giac-gmon'],
    sourceUrl: 'https://www.giac.org/certification/response-and-industrial-defense-grid/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-grem',
    body: 'GIAC',
    tagline: 'Reverse engineer and analyse malware.',
    description: 'GIAC Reverse Engineering Malware (GREM) validates the ability to analyse malicious software: unpacking, disassembling and understanding behaviour across Windows and Linux to support detection and incident response. It maps to the SANS FOR610 course and is a respected credential for malware analysts.',
    quickAnswer: {
      summary: 'GREM is a 66-question, 3-hour GIAC exam with a 73% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Malware reverse engineering',
        'Unpacking and disassembly',
        'SANS FOR610 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take FOR610 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 73%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; reverse-engineering or programming background helps.',
    examMeta: {
      questions: '66',
      time: '3 hours',
      pass: '73%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Unpacking', note: 'Deobfuscation' },
      { name: 'Disassembly', note: 'Static analysis' },
      { name: 'Behavioural Analysis', note: 'Dynamic triage' },
      { name: 'Detection', note: 'Signatures and YARA' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GREM is typically sat bundled with SANS FOR610; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Hard',
    audience: 'Malware analysts and reverse engineers.',
    time: '6-10 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$105,000-$155,000',
    faqs: [
      { q: 'What does GREM cover?', a: 'Malware reverse engineering: unpacking, disassembly and behavioural analysis of malicious software on Windows and Linux.' },
      { q: 'How is it delivered?', a: '66 questions over three hours, 73% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GREM?', a: 'Malware analysts and reverse engineers supporting DFIR and threat-intel teams.' },
      { q: 'How do I renew GREM?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GREM is GIAC’s malware reverse-engineering cert',
      '66 questions, 3 hours, 73% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gcfa', 'giac-gnfa', 'giac-gcti'],
    sourceUrl: 'https://www.giac.org/certification/reverse-engineering-malware-grem/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gslc',
    body: 'GIAC',
    tagline: 'Lead security teams and programs.',
    description: 'GIAC Security Leadership (GSLC) validates security management and leadership skills: governance, risk, policy, incident leadership and building effective security teams. It maps to the SANS MGT512 course and targets managers and aspiring leaders rather than hands-on technicians.',
    quickAnswer: {
      summary: 'GSLC is a 115-question, 3-hour GIAC exam with a 70% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Security leadership and governance',
        'Risk, policy and team building',
        'SANS MGT512 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take MGT512 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 70%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; management or leadership experience helps.',
    examMeta: {
      questions: '115',
      time: '3 hours',
      pass: '70%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Governance', note: 'Strategy and policy' },
      { name: 'Risk Management', note: 'Assessment and treatment' },
      { name: 'Incident Leadership', note: 'Crisis response' },
      { name: 'Team Building', note: 'Effective security orgs' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GSLC is typically sat bundled with SANS MGT512; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Security managers and aspiring leaders.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$120,000-$175,000',
    faqs: [
      { q: 'What does GSLC cover?', a: 'Security leadership: governance, risk, policy, incident leadership and building effective security organisations.' },
      { q: 'How is it delivered?', a: '115 questions over three hours, 70% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Is GSLC for managers or technicians?', a: 'It is aimed at managers and aspiring leaders; hands-on technicians usually start with GSEC or GCIH.' },
      { q: 'How do I renew GSLC?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GSLC is GIAC’s security leadership cert',
      '115 questions, 3 hours, 70% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gstrt', 'giac-gsec', 'isc2-cism'],
    sourceUrl: 'https://www.giac.org/certification/security-leadership-gslc/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gstrt',
    body: 'GIAC',
    tagline: 'Set security strategy and policy.',
    description: 'GIAC Strategic Planning, Policy and Leadership (GSTRT) validates the ability to translate business goals into a security strategy: policy development, governance frameworks and communicating risk to executives. It maps to the SANS MGT514 course and targets senior leaders and strategists.',
    quickAnswer: {
      summary: 'GSTRT is a 75-question, 3-hour GIAC exam with a 76% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'Security strategy and policy',
        'Governance and executive communication',
        'SANS MGT514 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take MGT514 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 76%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; senior or strategic experience helps.',
    examMeta: {
      questions: '75',
      time: '3 hours',
      pass: '76%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'Strategy', note: 'Aligning to business' },
      { name: 'Policy', note: 'Development and rollout' },
      { name: 'Governance', note: 'Frameworks' },
      { name: 'Communication', note: 'Risk to executives' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GSTRT is typically sat bundled with SANS MGT514; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Moderate',
    audience: 'Senior security leaders and strategists.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$130,000-$185,000',
    faqs: [
      { q: 'What does GSTRT cover?', a: 'Security strategy, policy development, governance frameworks and communicating risk to executive stakeholders.' },
      { q: 'How is it delivered?', a: '75 questions over three hours, 76% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'How does GSTRT compare to GSLC?', a: 'GSLC covers leadership and team building; GSTRT is more about strategy, policy and executive alignment.' },
      { q: 'How do I renew GSTRT?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GSTRT is GIAC’s strategy and policy cert',
      '75 questions, 3 hours, 76% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-gslc', 'giac-gsec', 'isaca-cism'],
    sourceUrl: 'https://www.giac.org/certification/strategic-planning-policy-and-leadership-gstrt/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'giac-gsna',
    body: 'GIAC',
    tagline: 'Systems and network auditing (in abeyance).',
    description: 'GIAC Systems and Network Auditor (GSNA) was a credential for auditing systems and networks against policy and control frameworks. GIAC has placed GSNA in abeyance: it is no longer available to new candidates and cannot be newly earned. Holders of an active GSNA may continue to renew it by CPE only. This page is retained for those maintaining the credential and for anyone comparing audit certifications.',
    quickAnswer: {
      summary: 'GSNA is in abeyance and is no longer offered to new candidates; you cannot register for it today. Active holders renew by CPE only for a $199 fee. If you are starting fresh, consider GSEC, GSLC or an audit-focused credential such as ISACA CISA instead.',
      advantages: [
        'Formerly validated systems/network audit skills',
        'Still renewable by CPE for active holders',
        'Maps to SANS AUD507 material',
        'Useful historical comparison point'
      ]
    },
    roadmap: ['Confirm active holder status', 'Earn CPE only', 'Pay $199 renewal', 'Otherwise choose a current audit cert'],
    prerequisites: 'Not open to new candidates; only active holders may renew.',
    examMeta: {
      questions: '115 (historical)',
      time: '3 hours (historical)',
      pass: '72% (historical)',
      fee: 'Not available — certification in abeyance',
      format: 'Proctored multiple choice (open book)',
      admin: 'GIAC (no longer offered to new candidates)'
    },
    topics: [
      { name: 'Systems Auditing', note: 'Historical coverage' },
      { name: 'Network Auditing', note: 'Historical coverage' },
      { name: 'Control Frameworks', note: 'Policy alignment' }
    ],
    examEssentials: [
      ['Status', 'In abeyance — not available to new candidates'],
      ['Renewal (holders)', 'CPE only, $199'],
      ['Former validity', '4 years when actively offered']
    ],
    timeline: [
      { stage: 'Historical availability', duration: 'Through abeyance' },
      { stage: 'Current holders', duration: 'Renew by CPE only' },
      { stage: 'New candidates', duration: 'Use GSEC / GSLC / CISA' }
    ],
    costBreakdown: {
      items: [
        { item: 'Renewal (active holders only)', fee: '$199' }
      ],
      total: 'Held certs: $199 CPE renewal',
      footnote: 'GSNA is in abeyance; new candidates cannot sit the exam. Renewal is CPE-only at $199 for those who already hold it.'
    },
    difficulty: 'Moderate',
    audience: 'Active GSNA holders maintaining the credential.',
    time: 'Not currently offered',
    cost: 'Held certs: $199 renewal',
    faqs: [
      { q: 'Can I take the GSNA exam?', a: 'No. GIAC has placed GSNA in abeyance, so it is not available to new candidates and cannot be newly earned.' },
      { q: 'How do current holders keep it?', a: 'Active GSNA holders renew by earning CPE credits only, paying a $199 renewal fee rather than retaking the exam.' },
      { q: 'What should a new candidate use instead?', a: 'For auditing, consider ISACA CISA; for broader GIAC coverage, GSEC or GSLC are active alternatives.' },
      { q: 'Why was it placed in abeyance?', a: 'GIAC retires or pauses credentials when they no longer match the current certification portfolio; abeyance lets existing holders keep their investment.' }
    ],
    summaryPoints: [
      'GSNA is in abeyance and not open to new candidates',
      'Active holders renew by CPE only for $199',
      'Originally a 115-question, 3-hour systems/network audit exam',
      'New candidates should consider CISA, GSEC or GSLC'
    ],
    relatedSlugs: ['giac-gsec', 'giac-gslc', 'isaca-cisa'],
    sourceUrl: 'https://www.giac.org/certification/systems-and-network-auditor-gsna/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'giac-gicsp',
    body: 'GIAC',
    tagline: 'Secure industrial control systems.',
    description: 'GIAC Industrial Cybersecurity Professional (GICSP) validates cross-domain knowledge spanning IT, OT and the unique risks of industrial control systems (ICS). It is designed for personnel who bridge the operational and information security worlds — engineers, operators and defenders in critical infrastructure. It maps to the SANS ICS410 course.',
    quickAnswer: {
      summary: 'GICSP is an 82-question, 3-hour GIAC exam with a 71% pass mark, delivered remote-proctored or at Pearson VUE as an open-book test. A standalone certification attempt costs $999 and is valid four years with 36 CPE credits and a $499 renewal.',
      advantages: [
        'IT/OT cross-domain security',
        'Industrial control systems focus',
        'SANS ICS410 aligned',
        'Four-year validity with CPE renewal'
      ]
    },
    roadmap: ['Take ICS410 or self-study', 'Activate exam', 'Schedule proctor', 'Pass at 71%', 'Renew in 4 years with 36 CPE'],
    prerequisites: 'No formal prerequisite; ICS/OT or IT security familiarity helps.',
    examMeta: {
      questions: '82',
      time: '3 hours',
      pass: '71%',
      fee: '$999 (standalone attempt); included with a SANS course',
      format: 'Proctored multiple choice with CyberLive labs (open book)',
      admin: 'Remote proctored (ProctorU) or Pearson VUE'
    },
    topics: [
      { name: 'ICS Fundamentals', note: 'Protocols and architecture' },
      { name: 'Risk and Safety', note: 'OT priorities' },
      { name: 'Defense', note: 'Monitoring and hardening' },
      { name: 'Incident Response', note: 'ICS-specific' }
    ],
    examEssentials: [
      ['Delivery', 'Remote proctored or Pearson VUE'],
      ['Retake', '$899; must be taken within 4 months of first attempt'],
      ['Validity', '4 years; 36 CPE + $499 renewal']
    ],
    timeline: [
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Activate and schedule', duration: 'within 120 days' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Renew', duration: 'every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certification attempt', fee: '$999' },
        { item: 'Practice exam (optional)', fee: '$399' }
      ],
      total: '$999 (plus SANS course if taken)',
      footnote: 'GICSP is typically sat bundled with SANS ICS410; standalone attempt is $999 via giac.org.'
    },
    difficulty: 'Challenging',
    audience: 'IT/OT bridge roles in critical infrastructure.',
    time: '4-8 weeks',
    cost: '$999 plus course if taken',
    salaryRange: '$105,000-$155,000',
    faqs: [
      { q: 'What does GICSP cover?', a: 'Cross-domain industrial security: ICS fundamentals, risk and safety, defense and incident response for OT environments.' },
      { q: 'How is it delivered?', a: '82 questions over three hours, 71% pass mark, proctored remotely or at Pearson VUE.' },
      { q: 'Who should take GICSP?', a: 'Engineers, operators and defenders who work at the IT/OT boundary in critical infrastructure.' },
      { q: 'How do I renew GICSP?', a: 'Four years of validity with 36 CPE credits and a $499 renewal fee.' }
    ],
    summaryPoints: [
      'GICSP is GIAC’s industrial/OT security cert',
      '82 questions, 3 hours, 71% to pass',
      'Standalone attempt $999; included with SANS course',
      '4-year validity; 36 CPE + $499'
    ],
    relatedSlugs: ['giac-grid', 'giac-gcih', 'giac-gcld'],
    sourceUrl: 'https://www.giac.org/certification/industrial-cybersecurity-professional-gicsp/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'offsec-klcp',
    body: 'OffSec',
    tagline: 'Prove your Kali Linux fundamentals.',
    description: 'The Kali Linux Certified Professional (KLCP) is OffSec’s entry-level credential validating practical knowledge of the Kali Linux distribution: installation, tooling, and the workflow used across OffSec courses. It is the on-ramp to the OffSec ladder and maps to the PEN-103 (Kali Linux Revealed) course.',
    quickAnswer: {
      summary: 'KLCP is a 90-minute, hands-on exam taken over a private VPN under live proctoring. It is included with the PEN-103 course under OffSec’s fundamentals pricing; most learners sit it bundled with the training rather than as a standalone exam.',
      advantages: [
        'Foundational Kali Linux credential',
        'Hands-on, proctored assessment',
        'Gateway to the OffSec ladder',
        'Typically bundled with PEN-103'
      ]
    },
    roadmap: ['Complete PEN-103', 'Schedule the proctored exam', 'Pass the 90-minute practical', 'Move on to PEN-200 / OSCP'],
    prerequisites: 'No formal prerequisite; basic Linux familiarity is assumed.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set tasks)',
      time: '90 minutes',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Included with the PEN-103 course (OffSec fundamentals pricing)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Kali Installation', note: 'Setup and configuration' },
      { name: 'Tooling', note: 'Core pentest tools' },
      { name: 'Workflow', note: 'OffSec methodology' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '90 minutes'],
      ['Attempts', 'Per PEN-103 enrolment'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn PEN-103', duration: '1-3 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam', duration: '90 minutes' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'PEN-103 course + exam', fee: 'OffSec fundamentals pricing' }
      ],
      total: 'Bundled with PEN-103',
      footnote: 'KLCP is sold as part of OffSec fundamentals training; confirm current pricing on offsec.com.'
    },
    difficulty: 'Easy',
    audience: 'Beginners entering offensive security.',
    time: '1-3 weeks',
    cost: 'Bundled with PEN-103',
    faqs: [
      { q: 'What does KLCP test?', a: 'Practical command of Kali Linux: installation, configuration and the core tooling used throughout OffSec courses.' },
      { q: 'How long is the exam?', a: 'The KLCP exam is 90 minutes of hands-on, proctored work on a private VPN.' },
      { q: 'Is KLCP a prerequisite for OSCP?', a: 'No. OSCP maps to PEN-200; KLCP is a useful but optional on-ramp.' },
      { q: 'Does KLCP expire?', a: 'No — KLCP is a lifetime credential.' }
    ],
    summaryPoints: [
      'KLCP is OffSec’s Kali Linux fundamentals cert',
      '90-minute hands-on, proctored exam',
      'Bundled with the PEN-103 course',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oscp', 'offsec-oswa', 'giac-gsec'],
    sourceUrl: 'https://www.offsec.com/courses/pen-103/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osai',
    body: 'OffSec',
    tagline: 'Apply security to AI systems.',
    description: 'OffSec Applied AI (OSAI) is OffSec’s credential for securing and attacking AI systems, mapping to the AI-300 course. It covers practical assessment of AI applications, prompt-injection and model-targeted attacks, and the defenses organisations need as they adopt generative AI. As a newer OffSec certification, some exam specifics are not published in detail.',
    quickAnswer: {
      summary: 'OSAI is a hands-on, proctored OffSec practical exam focused on AI security, delivered over a private VPN with a 24-hour report window. It is taken via an OffSec Course + Exam Bundle (from $1,749); exact exam length and pass threshold are not publicly disclosed, so confirm current details with OffSec.',
      advantages: [
        'AI/ML security specialisation',
        'Hands-on, proctored practical',
        'Maps to the AI-300 course',
        'Part of the OffSec ladder'
      ]
    },
    roadmap: ['Complete AI-300', 'Schedule the proctored exam', 'Complete the practical', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; AI/ML and security familiarity helps.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set tasks)',
      time: 'Hands-on practical (OffSec does not publish the exact length)',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); confirm on OffSec pricing',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'AI Attack Surface', note: 'Prompt injection, model abuse' },
      { name: 'Assessment', note: 'Testing AI apps' },
      { name: 'Defense', note: 'Hardening AI systems' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Report', '24-hour upload window'],
      ['Attempts', 'Per bundle (Learn One gives 2)'],
      ['Validity', 'Lifetime (confirm with OffSec)']
    ],
    timeline: [
      { stage: 'Learn AI-300', duration: 'weeks to months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: 'OffSec-set' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'AI-300 exam details are newer and may change; verify length and pass threshold on OffSec’s site.'
    },
    difficulty: 'Challenging',
    audience: 'AI security practitioners and red-teamers.',
    time: 'weeks to months',
    cost: 'from $1,749',
    faqs: [
      { q: 'What does OSAI cover?', a: 'Practical security of AI systems: attacking and defending generative-AI applications, prompt injection and model-targeted techniques.' },
      { q: 'How is the exam delivered?', a: 'As a hands-on, live-proctored practical on OffSec’s exam VPN with a 24-hour report window.' },
      { q: 'Is the exam length published?', a: 'Not in detail; OffSec lists most exams but OSAI specifics are sparse, so confirm directly with OffSec.' },
      { q: 'Does OSAI expire?', a: 'OffSec treats most certs as lifetime; OSCP+, OSIR and OSTH are the three-year exceptions. Confirm OSAI’s status with OffSec.' }
    ],
    summaryPoints: [
      'OSAI is OffSec’s applied-AI security cert',
      'Hands-on proctored practical (AI-300)',
      'Bundle from $1,749; details may change',
      'Most OffSec certs are lifetime'
    ],
    relatedSlugs: ['offsec-oscp', 'offsec-oswa', 'giac-gsec'],
    sourceUrl: 'https://www.offsec.com/courses/ai-300/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'offsec-oscp',
    body: 'OffSec',
    tagline: 'The industry-standard penetration testing cert.',
    description: 'The OffSec Certified Professional (OSCP) is the most recognised hands-on penetration testing certification. Candidates compromise a set of live machines in a private lab — three standalone machines worth 60 points plus an Active Directory set worth 40 — and submit a professional report. It maps to the PEN-200 (PWK) course and is widely required or preferred for pentester and red-team roles.',
    quickAnswer: {
      summary: 'OSCP is a 24-hour, live-proctored hands-on exam plus a 24-hour report window. You need 70 of 100 points to pass. The PEN-200 Course + Exam Bundle is $1,749 (one attempt); a standalone exam is $1,699; Learn One is $2,749/year for two attempts. OSCP is a lifetime credential; the maintained OSCP+ version is valid three years.',
      advantages: [
        'Gold-standard hands-on pentest cert',
        'Real exploitation, not multiple choice',
        '24-hour exam + report',
        'Lifetime validity (OSCP+)'
      ]
    },
    roadmap: ['Complete PEN-200', 'Schedule the 24-hour proctored exam', 'Compromise the targets', 'Submit report in 24h', 'Pass at 70/100'],
    prerequisites: 'No formal prerequisite; solid Linux, networking and scripting basics are expected.',
    examMeta: {
      questions: 'Hands-on: 3 standalone machines (60 pts) + AD set (40 pts)',
      time: '24 hours',
      pass: '70 / 100 points',
      fee: '$1,749 (Course + Exam Bundle, 1 attempt); standalone $1,699; Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Reconnaissance', note: 'Enumeration' },
      { name: 'Exploitation', note: 'Initial access' },
      { name: 'Active Directory', note: 'AD set (40 pts)' },
      { name: 'Reporting', note: 'Professional write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '24 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime; OSCP+ 3-year']
    ],
    timeline: [
      { stage: 'Learn PEN-200', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam', duration: '24 hours' },
      { stage: 'Report + result', duration: '24h report' }
    ],
    costBreakdown: {
      items: [
        { item: 'PEN-200 Course + Exam Bundle', fee: '$1,749' },
        { item: 'Standalone exam', fee: '$1,699' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: '$1,749 (bundle)',
      footnote: 'PEN-200 labs run 90 days on the standard bundle; Learn One and Learn Unlimited extend lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Aspiring and working penetration testers.',
    time: '2-4 months',
    cost: '$1,749 bundle',
    salaryRange: '$95,000-$150,000',
    faqs: [
      { q: 'What does the OSCP exam involve?', a: 'A 24-hour proctored practical where you compromise live machines (three standalone, 60 points, plus an AD set, 40 points) and then submit a report within 24 hours.' },
      { q: 'What score do I need?', a: '70 of 100 points. The three standalone machines are worth 60 and the Active Directory set 40.' },
      { q: 'How much does OSCP cost?', a: 'The PEN-200 Course + Exam Bundle is $1,749 (one attempt); a standalone exam is $1,699; Learn One is $2,749/year for two attempts.' },
      { q: 'Does OSCP expire?', a: 'The base OSCP is a lifetime credential. OffSec also offers OSCP+, a maintained version valid three years with 120 CPE credits and an annual fee.' }
    ],
    summaryPoints: [
      'OSCP is the industry-standard hands-on pentest cert',
      '24-hour exam + 24-hour report; 70/100 to pass',
      'Bundle $1,749; standalone $1,699',
      'Lifetime validity (OSCP+)'
    ],
    relatedSlugs: ['offsec-osep', 'offsec-oswa', 'giac-gpen'],
    sourceUrl: 'https://www.offsec.com/courses/pen-200/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-oscc-sec',
    body: 'OffSec',
    tagline: 'Foundational security baseline, hands-on.',
    description: 'The OffSec CyberCore Certification – Security (OSCC-SEC) is the entry-level, hands-on cert from OffSec’s CyberCore track, validating foundational offensive and defensive security skills. It maps to the SEC-100 course and is delivered as a six-hour proctored practical, making it an accessible first OffSec exam before OSCP.',
    quickAnswer: {
      summary: 'OSCC-SEC is a 6-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the CyberCore bundle at $899 (365-day labs, two attempts). It is a lifetime credential.',
      advantages: [
        'Foundational, hands-on security cert',
        'Lower-cost CyberCore track',
        '6-hour proctored practical',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete SEC-100', 'Schedule the 6-hour proctored exam', 'Complete the practical', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; introductory security interest is enough.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set tasks)',
      time: '6 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: '$899 (CyberCore bundle: 365-day labs, 2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Foundational Offense', note: 'Basic attacks' },
      { name: 'Foundational Defense', note: 'Basic hardening' },
      { name: 'Core Concepts', note: 'Security baseline' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '6 hours + 24h report'],
      ['Attempts', '2 (CyberCore bundle)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn SEC-100', duration: '4-8 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '6h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'CyberCore bundle', fee: '$899 (365-day labs, 2 attempts)' }
      ],
      total: '$899',
      footnote: 'CyberCore includes two exam attempts and a year of lab access; OSCC-SJD is the sister Security-101 developer cert.'
    },
    difficulty: 'Easy',
    audience: 'Beginners to hands-on security.',
    time: '4-8 weeks',
    cost: '$899',
    faqs: [
      { q: 'What does OSCC-SEC cover?', a: 'Foundational, hands-on offensive and defensive security skills from the CyberCore / SEC-100 track.' },
      { q: 'How long is the exam?', a: 'Six hours of proctored practical work, with a 24-hour window to upload your report.' },
      { q: 'How much does it cost?', a: 'The CyberCore bundle is $899 and includes 365 days of labs and two exam attempts.' },
      { q: 'Does OSCC-SEC expire?', a: 'No — it is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSCC-SEC is OffSec’s foundational CyberCore cert',
      '6-hour hands-on proctored exam',
      'CyberCore bundle $899 (2 attempts)',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oscp', 'offsec-klcp', 'giac-gsec'],
    sourceUrl: 'https://www.offsec.com/courses/sec-100/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osda',
    body: 'OffSec',
    tagline: 'Prove your defensive SOC skills.',
    description: 'The OffSec Defense Analyst (OSDA) validates practical defensive security skills: triaging alerts, analysing logs and artefacts, and producing findings in a SOC or threat-hunting context. It maps to the SOC-200 course and is the defensive counterpart to OffSec’s offensive certs, delivered as a 24-hour proctored practical.',
    quickAnswer: {
      summary: 'OSDA is a 24-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the SOC-200 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Hands-on defensive certification',
        'SOC and threat-hunting focus',
        'Maps to SOC-200',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete SOC-200', 'Schedule the 24-hour proctored exam', 'Analyse the scenario', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; SOC or analysis familiarity helps.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set scenario)',
      time: '24 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Alert Triage', note: 'Prioritisation' },
      { name: 'Log Analysis', note: 'Artefact review' },
      { name: 'Threat Hunting', note: 'Proactive search' },
      { name: 'Reporting', note: 'Findings write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '24 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn SOC-200', duration: '6-10 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '24h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'SOC-200 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'SOC-200 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Challenging',
    audience: 'SOC analysts and defensive security engineers.',
    time: '6-10 weeks',
    cost: 'from $1,749',
    salaryRange: '$90,000-$140,000',
    faqs: [
      { q: 'What does OSDA cover?', a: 'Practical defense: alert triage, log and artefact analysis, threat hunting and writing up findings.' },
      { q: 'How is the exam delivered?', a: 'A 24-hour live-proctored practical on OffSec’s exam VPN, with a 24-hour report window.' },
      { q: 'How does it compare to OSCP?', a: 'OSDA is the defensive equivalent — you analyse and report rather than exploit — but it is just as hands-on.' },
      { q: 'Does OSDA expire?', a: 'No — OSDA is a lifetime credential (unlike OSCP+, OSIR and OSTH which are three-year).' }
    ],
    summaryPoints: [
      'OSDA is OffSec’s defensive analyst cert',
      '24-hour hands-on proctored exam',
      'SOC-200 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-osir', 'offsec-osth', 'giac-gmon'],
    sourceUrl: 'https://www.offsec.com/courses/soc-200/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osep',
    body: 'OffSec',
    tagline: 'Advanced evasion and pentesting.',
    description: 'The OffSec Experienced Penetration Tester (OSEP) certifies advanced penetration testing skill: evading antivirus and EDR, bypassing network filters, and compromising hardened Windows and Linux environments with custom tradecraft. It maps to the PEN-300 course and is aimed at testers moving beyond OSCP.',
    quickAnswer: {
      summary: 'OSEP is a 48-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the PEN-300 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Advanced, evasion-focused pentest cert',
        'EDR/AV bypass and custom tradecraft',
        'Maps to PEN-300',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete PEN-300', 'Schedule the 48-hour proctored exam', 'Compromise hardened targets', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; OSCP-level skill is strongly recommended.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '48 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Evasion', note: 'AV/EDR bypass' },
      { name: 'Network Bypass', note: 'Filters and segmentation' },
      { name: 'Post-Exploitation', note: 'Hardened environments' },
      { name: 'Reporting', note: 'Professional write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '48 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn PEN-300', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '48h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'PEN-300 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'PEN-300 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Experienced penetration testers.',
    time: '2-4 months',
    cost: 'from $1,749',
    salaryRange: '$110,000-$160,000',
    faqs: [
      { q: 'What does OSEP cover?', a: 'Advanced pentesting: antivirus/EDR evasion, network-filter bypass, and compromising hardened Windows and Linux environments.' },
      { q: 'How long is the exam?', a: 'A 48-hour live-proctored practical with a 24-hour report window.' },
      { q: 'Should I take OSCP first?', a: 'OSCP-level skill is strongly recommended; OSEP builds on that foundation with evasion and custom tradecraft.' },
      { q: 'Does OSEP expire?', a: 'No — OSEP is a lifetime credential (unlike OSCP+, OSIR and OSTH).' }
    ],
    summaryPoints: [
      'OSEP is OffSec’s experienced pentester cert',
      '48-hour hands-on proctored exam',
      'PEN-300 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oscp', 'offsec-oswe', 'giac-gpen'],
    sourceUrl: 'https://www.offsec.com/courses/pen-300/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osed',
    body: 'OffSec',
    tagline: 'Windows exploit development, proven.',
    description: 'The OffSec Exploit Developer (OSED) certifies practical Windows user-mode exploit development: stack and SEH overflows, egghunters, ROP and shellcode, culminating in a 48-hour proctored practical. It maps to the EXP-301 course and is a key step toward the elite OSCE³ triangle (OSED + OSEP + OSWE).',
    quickAnswer: {
      summary: 'OSED is a 48-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the EXP-301 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Windows exploit development credential',
        'Stack/SEH overflows, ROP, shellcode',
        'Maps to EXP-301',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete EXP-301', 'Schedule the 48-hour proctored exam', 'Build the exploit', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; OSCP-level skill and C/assembly basics help.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '48 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Stack Overflows', note: 'User-mode' },
      { name: 'SEH and Egghunters', note: 'Bypass techniques' },
      { name: 'ROP', note: 'Advanced control' },
      { name: 'Shellcode', note: 'Custom payloads' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '48 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn EXP-301', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '48h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'EXP-301 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'EXP-301 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Exploit developers and advanced offensive testers.',
    time: '2-4 months',
    cost: 'from $1,749',
    salaryRange: '$120,000-$170,000',
    faqs: [
      { q: 'What does OSED cover?', a: 'Windows user-mode exploit development: stack and SEH overflows, egghunters, ROP and custom shellcode.' },
      { q: 'How long is the exam?', a: 'A 48-hour live-proctored practical with a 24-hour report window.' },
      { q: 'How does OSED relate to OSCE³?', a: 'OSED is one vertex of the OSCE³ triangle alongside OSEP and OSWE; earning all three grants the OSCE³ expert designation.' },
      { q: 'Does OSED expire?', a: 'No — OSED is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSED is OffSec’s Windows exploit dev cert',
      '48-hour hands-on proctored exam',
      'EXP-301 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-osee', 'offsec-oswe', 'giac-gxpn'],
    sourceUrl: 'https://www.offsec.com/courses/exp-301/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osee',
    body: 'OffSec',
    tagline: 'The pinnacle of exploitation expertise.',
    description: 'The OffSec Exploitation Expert (OSEE) is OffSec’s most advanced certification, requiring deep binary exploitation, custom shellcode and creative tradecraft across a 72-hour proctored practical. It maps to the EXP-401 course and completes the OSCE³ expert triangle alongside OSED and OSEP.',
    quickAnswer: {
      summary: 'OSEE is a 72-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the EXP-401 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential and the capstone of OSCE³.',
      advantages: [
        'OffSec’s top exploitation cert',
        'Advanced binary exploitation',
        'Maps to EXP-401',
        'Lifetime validity; OSCE³ capstone'
      ]
    },
    roadmap: ['Complete EXP-401', 'Schedule the 72-hour proctored exam', 'Exploit the targets', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; OSED/OSWE-level skill is expected.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '72 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Advanced Exploitation', note: 'Bypassing mitigations' },
      { name: 'Custom Shellcode', note: 'Hand-crafted payloads' },
      { name: 'Creative Tradecraft', note: 'Novel paths' },
      { name: 'Reporting', note: 'Detailed write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '72 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn EXP-401', duration: '3-6 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '72h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'EXP-401 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'EXP-401 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Elite exploit developers and researchers.',
    time: '3-6 months',
    cost: 'from $1,749',
    salaryRange: '$130,000-$190,000',
    faqs: [
      { q: 'What does OSEE cover?', a: 'The deepest OffSec exploitation: advanced binary exploitation, custom shellcode and creative tradecraft across a 72-hour exam.' },
      { q: 'How long is the exam?', a: 'A 72-hour live-proctored practical — the longest OffSec exam — with a 24-hour report window.' },
      { q: 'What is OSCE³?', a: 'Earning OSEE together with OSED and OSEP grants the OSCE³ expert designation, OffSec’s top credential.' },
      { q: 'Does OSEE expire?', a: 'No — OSEE is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSEE is OffSec’s expert-level exploit cert',
      '72-hour hands-on proctored exam',
      'EXP-401 bundle from $1,749',
      'Lifetime validity; OSCE³ capstone'
    ],
    relatedSlugs: ['offsec-osed', 'offsec-osep', 'giac-gxpn'],
    sourceUrl: 'https://www.offsec.com/courses/exp-401/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'offsec-osir',
    body: 'OffSec',
    tagline: 'Respond to incidents, hands-on.',
    description: 'The OffSec Incident Responder (OSIR) certifies practical incident response: scoping an incident, collecting and analysing artefacts, containing and eradicating threats, and writing the response report. It maps to the IR-200 course and is one of OffSec’s role-based certs that carries a three-year validity with CPE maintenance.',
    quickAnswer: {
      summary: 'OSIR is an 8-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the IR-200 Course + Exam Bundle (from $1,749). Unlike most OffSec certs, OSIR is valid three years and requires 120 CPE credits plus an annual maintenance fee to stay active.',
      advantages: [
        'Hands-on incident response cert',
        'Artefact collection and analysis',
        'Maps to IR-200',
        'Three-year validity with CPE'
      ]
    },
    roadmap: ['Complete IR-200', 'Schedule the 8-hour proctored exam', 'Respond to the scenario', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; SOC or IR familiarity helps.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set scenario)',
      time: '8 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Scoping', note: 'Incident boundaries' },
      { name: 'Collection', note: 'Artefacts' },
      { name: 'Analysis', note: 'Triage and finding' },
      { name: 'Reporting', note: 'Response write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '8 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', '3 years (120 CPE + annual fee)']
    ],
    timeline: [
      { stage: 'Learn IR-200', duration: '6-10 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '8h + 24h' },
      { stage: 'Renew', duration: 'every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'IR-200 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'IR-200 labs run 90 days on the standard bundle. OSIR is one of three OffSec certs with a three-year (not lifetime) validity.'
    },
    difficulty: 'Challenging',
    audience: 'Incident responders and SOC analysts.',
    time: '6-10 weeks',
    cost: 'from $1,749',
    salaryRange: '$90,000-$145,000',
    faqs: [
      { q: 'What does OSIR cover?', a: 'Practical incident response: scoping, artefact collection and analysis, containment and writing the response report.' },
      { q: 'How long is the exam?', a: 'An 8-hour live-proctored practical with a 24-hour report window.' },
      { q: 'Does OSIR expire?', a: 'Yes — OSIR is valid three years and requires 120 CPE credits plus an annual maintenance fee, unlike most OffSec lifetime certs.' },
      { q: 'How does OSIR compare to OSDA?', a: 'OSDA is the broader defensive analyst cert (lifetime); OSIR is the incident-response specialist cert with a three-year validity.' }
    ],
    summaryPoints: [
      'OSIR is OffSec’s incident responder cert',
      '8-hour hands-on proctored exam',
      'IR-200 bundle from $1,749',
      '3-year validity (CPE + annual fee)'
    ],
    relatedSlugs: ['offsec-osda', 'offsec-osth', 'giac-gcih'],
    sourceUrl: 'https://www.offsec.com/courses/ir-200/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osmr',
    body: 'OffSec',
    tagline: 'macOS exploitation, expert level.',
    description: 'The OffSec macOS Researcher (OSMR) certifies advanced macOS offensive security: bypassing macOS defenses, exploiting logic vulnerabilities and escalating privileges to root. It maps to the EXP-312 course and is aimed at pentesters and researchers broadening into Apple platforms. The exam is a 48-hour proctored practical.',
    quickAnswer: {
      summary: 'OSMR is a 48-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the EXP-312 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Advanced macOS exploitation cert',
        'TCC, sandbox and XPC bypass',
        'Maps to EXP-312',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete EXP-312', 'Schedule the 48-hour proctored exam', 'Exploit macOS targets', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; C, 64-bit assembly and basic exploitation knowledge are expected.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '48 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'macOS Internals', note: 'Architecture and defenses' },
      { name: 'TCC and Sandbox', note: 'Privacy bypass' },
      { name: 'XPC and Injection', note: 'Privilege escalation' },
      { name: 'Shellcode', note: 'macOS payloads' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '48 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn EXP-312', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '48h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'EXP-312 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'EXP-312 labs run 90 days on the standard bundle. A retake fee of $249 applies if purchased separately.'
    },
    difficulty: 'Hard',
    audience: 'macOS-focused pentesters and researchers.',
    time: '2-4 months',
    cost: 'from $1,749',
    salaryRange: '$120,000-$170,000',
    faqs: [
      { q: 'What does OSMR cover?', a: 'Advanced macOS offensive security: bypassing TCC and the sandbox, XPC exploitation, dylib/Mach injection and privilege escalation to root.' },
      { q: 'How long is the exam?', a: 'A 48-hour live-proctored practical with a 24-hour report window.' },
      { q: 'Is a Mac required?', a: 'No — a Mac is not required to take the course or exam; the lab environment is provided.' },
      { q: 'Does OSMR expire?', a: 'No — OSMR is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSMR is OffSec’s macOS researcher cert',
      '48-hour hands-on proctored exam',
      'EXP-312 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-osed', 'offsec-osep', 'giac-gxpn'],
    sourceUrl: 'https://www.offsec.com/courses/exp-312/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-osth',
    body: 'OffSec',
    tagline: 'Hunt threats across the enterprise.',
    description: 'The OffSec Threat Hunter (OSTH) certifies practical threat hunting: forming hypotheses, interrogating telemetry, and uncovering adversaries that automated detection missed. It maps to the TH-200 course and is one of OffSec’s role-based certs with a three-year validity and CPE maintenance.',
    quickAnswer: {
      summary: 'OSTH is an 8-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the TH-200 Course + Exam Bundle (from $1,749). Like OSIR and OSCP+, OSTH is valid three years and requires 120 CPE credits plus an annual maintenance fee.',
      advantages: [
        'Hands-on threat hunting cert',
        'Hypothesis-driven hunting',
        'Maps to TH-200',
        'Three-year validity with CPE'
      ]
    },
    roadmap: ['Complete TH-200', 'Schedule the 8-hour proctored exam', 'Hunt the scenario', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; detection or SOC familiarity helps.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set scenario)',
      time: '8 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Hypotheses', note: 'Hunt planning' },
      { name: 'Telemetry', note: 'Interrogating data' },
      { name: 'Tradecraft', note: 'Adversary behaviour' },
      { name: 'Reporting', note: 'Findings write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '8 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', '3 years (120 CPE + annual fee)']
    ],
    timeline: [
      { stage: 'Learn TH-200', duration: '6-10 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '8h + 24h' },
      { stage: 'Renew', duration: 'every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'TH-200 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'TH-200 labs run 90 days on the standard bundle. OSTH is one of three OffSec certs with a three-year (not lifetime) validity.'
    },
    difficulty: 'Challenging',
    audience: 'Threat hunters and detection engineers.',
    time: '6-10 weeks',
    cost: 'from $1,749',
    salaryRange: '$100,000-$150,000',
    faqs: [
      { q: 'What does OSTH cover?', a: 'Practical threat hunting: building hypotheses, interrogating telemetry and uncovering adversaries missed by automated detection.' },
      { q: 'How long is the exam?', a: 'An 8-hour live-proctored practical with a 24-hour report window.' },
      { q: 'Does OSTH expire?', a: 'Yes — OSTH is valid three years and requires 120 CPE credits plus an annual maintenance fee, like OSIR and OSCP+.' },
      { q: 'How does OSTH compare to OSDA?', a: 'OSDA is the broader defensive analyst cert (lifetime); OSTH is the proactive hunting specialist cert with a three-year validity.' }
    ],
    summaryPoints: [
      'OSTH is OffSec’s threat hunter cert',
      '8-hour hands-on proctored exam',
      'TH-200 bundle from $1,749',
      '3-year validity (CPE + annual fee)'
    ],
    relatedSlugs: ['offsec-osda', 'offsec-osir', 'giac-gcti'],
    sourceUrl: 'https://www.offsec.com/courses/th-200/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-oswa',
    body: 'OffSec',
    tagline: 'Web application assessment, hands-on.',
    description: 'The OffSec Web Assessor (OSWA) certifies practical web application security assessment: finding and exploiting injection, XSS, SSRF, XXE, deserialization and other flaws, then reporting them. It maps to the WEB-200 course and is the offensive web counterpart to OSWE, delivered as a 24-hour proctored practical.',
    quickAnswer: {
      summary: 'OSWA is a 24-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the WEB-200 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Hands-on web app assessment cert',
        'Injection, XSS, SSRF, XXE',
        'Maps to WEB-200',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete WEB-200', 'Schedule the 24-hour proctored exam', 'Exploit the targets', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; web and scripting familiarity helps.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '24 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Injection', note: 'SQLi, command' },
      { name: 'Client-Side', note: 'XSS and CSRF' },
      { name: 'Server-Side', note: 'SSRF, XXE' },
      { name: 'Reporting', note: 'Findings write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '24 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn WEB-200', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '24h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'WEB-200 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'WEB-200 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Web application penetration testers.',
    time: '2-4 months',
    cost: 'from $1,749',
    salaryRange: '$95,000-$150,000',
    faqs: [
      { q: 'What does OSWA cover?', a: 'Practical web application assessment: injection, XSS, CSRF, SSRF, XXE, deserialization and reporting.' },
      { q: 'How long is the exam?', a: 'A 24-hour live-proctored practical with a 24-hour report window.' },
      { q: 'How does OSWA compare to OSWE?', a: 'OSWA is black-box web assessment (WEB-200); OSWE is advanced white-box source-code exploitation (WEB-300) and is a longer, harder exam.' },
      { q: 'Does OSWA expire?', a: 'No — OSWA is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSWA is OffSec’s web assessor cert',
      '24-hour hands-on proctored exam',
      'WEB-200 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oswe', 'offsec-oscp', 'giac-gwapt'],
    sourceUrl: 'https://www.offsec.com/courses/web-200/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-oswe',
    body: 'OffSec',
    tagline: 'Advanced web exploitation, white-box.',
    description: 'The OffSec Web Expert (OSWE) certifies advanced white-box web application exploitation: source-code review, custom exploit development and chaining complex vulnerabilities. It maps to the WEB-300 course and is a longer, harder successor to OSWA, delivered as a 48-hour proctored practical. OSWE does not expire.',
    quickAnswer: {
      summary: 'OSWE is a 48-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the WEB-300 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. Unlike OSIR and OSTH, OSWE is a lifetime credential.',
      advantages: [
        'Advanced white-box web exploitation',
        'Source review and custom exploits',
        'Maps to WEB-300',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete WEB-300', 'Schedule the 48-hour proctored exam', 'Exploit from source', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; strong web and coding skills expected.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '48 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'Source Review', note: 'White-box analysis' },
      { name: 'Custom Exploits', note: 'Chaining flaws' },
      { name: 'Advanced Flaws', note: 'Deserialization, blind bugs' },
      { name: 'Reporting', note: 'Detailed write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '48 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn WEB-300', duration: '2-4 months' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '48h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'WEB-300 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'WEB-300 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Hard',
    audience: 'Advanced web application security specialists.',
    time: '2-4 months',
    cost: 'from $1,749',
    salaryRange: '$110,000-$165,000',
    faqs: [
      { q: 'What does OSWE cover?', a: 'Advanced white-box web exploitation: reviewing source code, developing custom exploits and chaining complex vulnerabilities.' },
      { q: 'How long is the exam?', a: 'A 48-hour live-proctored practical with a 24-hour report window.' },
      { q: 'Does OSWE expire?', a: 'No — OffSec states OSWE does not expire, unlike OSIR, OSTH and OSCP+.' },
      { q: 'How does OSWE relate to OSCE³?', a: 'OSWE is one vertex of the OSCE³ triangle alongside OSEP and OSED.' }
    ],
    summaryPoints: [
      'OSWE is OffSec’s web expert cert',
      '48-hour hands-on proctored exam',
      'WEB-300 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oswa', 'offsec-osep', 'giac-gwapt'],
    sourceUrl: 'https://www.offsec.com/courses/web-300/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'offsec-oswp',
    body: 'OffSec',
    tagline: 'Wireless penetration testing, focused.',
    description: 'The OffSec Wireless Professional (OSWP) certifies practical wireless network penetration testing: attacking WPA/WPA2 handshakes, circumventing weak configurations and demonstrating real compromise. It maps to the PEN-210 course and is a shorter, focused OffSec exam at roughly four hours.',
    quickAnswer: {
      summary: 'OSWP is a 4-hour, live-proctored hands-on exam with a 24-hour report window, delivered over OffSec’s private VPN. It is taken via the PEN-210 Course + Exam Bundle (from $1,749); Learn One gives two attempts for $2,749/year. It is a lifetime credential.',
      advantages: [
        'Focused wireless pentest cert',
        'WPA/WPA2 attacks',
        'Maps to PEN-210',
        'Lifetime validity'
      ]
    },
    roadmap: ['Complete PEN-210', 'Schedule the 4-hour proctored exam', 'Compromise the wireless targets', 'Submit report within 24h'],
    prerequisites: 'No formal prerequisite; networking basics help.',
    examMeta: {
      questions: 'Hands-on practical (OffSec-set targets)',
      time: '4 hours',
      pass: 'OffSec points threshold (not publicly disclosed)',
      fee: 'Course + Exam Bundle (from $1,749); Learn One $2,749/yr (2 attempts)',
      format: 'Hands-on practical, live-proctored (private VPN)',
      admin: 'OffSec proctored exam VPN'
    },
    topics: [
      { name: 'WPA/WPA2', note: 'Handshake attacks' },
      { name: 'Weak Configs', note: 'Circumvention' },
      { name: 'Reconnaissance', note: 'Wireless survey' },
      { name: 'Reporting', note: 'Findings write-up' }
    ],
    examEssentials: [
      ['Delivery', 'Live-proctored private VPN'],
      ['Exam length', '4 hours + 24h report'],
      ['Attempts', '1 (bundle) / 2 (Learn One)'],
      ['Validity', 'Lifetime']
    ],
    timeline: [
      { stage: 'Learn PEN-210', duration: '2-4 weeks' },
      { stage: 'Schedule exam', duration: 'set start time' },
      { stage: 'Exam + report', duration: '4h + 24h' },
      { stage: 'Result', duration: 'after grading' }
    ],
    costBreakdown: {
      items: [
        { item: 'PEN-210 Course + Exam Bundle', fee: 'from $1,749' },
        { item: 'Learn One (optional)', fee: '$2,749/yr (2 attempts)' }
      ],
      total: 'from $1,749',
      footnote: 'PEN-210 labs run 90 days on the standard bundle; Learn One extends lab time and attempts.'
    },
    difficulty: 'Moderate',
    audience: 'Wireless penetration testers.',
    time: '2-4 weeks',
    cost: 'from $1,749',
    salaryRange: '$90,000-$140,000',
    faqs: [
      { q: 'What does OSWP cover?', a: 'Practical wireless pentesting: capturing and attacking WPA/WPA2 handshakes and exploiting weak wireless configurations.' },
      { q: 'How long is the exam?', a: 'About four hours of live-proctored practical work, with a 24-hour report window.' },
      { q: 'Is OSWP a good first OffSec cert?', a: 'It is shorter and more focused than OSCP, making it a reasonable early hands-on cert, though OSCP remains the flagship.' },
      { q: 'Does OSWP expire?', a: 'No — OSWP is a lifetime credential.' }
    ],
    summaryPoints: [
      'OSWP is OffSec’s wireless professional cert',
      '4-hour hands-on proctored exam',
      'PEN-210 bundle from $1,749',
      'Lifetime validity'
    ],
    relatedSlugs: ['offsec-oscp', 'offsec-oswa', 'giac-gcpn'],
    sourceUrl: 'https://www.offsec.com/courses/pen-210/',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
