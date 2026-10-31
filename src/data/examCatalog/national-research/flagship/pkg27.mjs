// Flagship rewrite - pkg27 Cisco Systems (6 pages) + Cisco program dossier.
// Sources read 2026-10-20: Cisco exam pages (cisco.com/site/us/en/learn/training-certifications/exams/*),
// CCNP Data Center / Collaboration / Cybersecurity "Exams and training" pages, CCNA certification page,
// Cisco Recertification Policy page, Exam Registration page, Cisco CE Portal user guide (2026),
// and the official exam-topics PDFs on learningcontent.cisco.com (200-301 v1.1 and v2.0, 200-201 v1.2,
// 350-901 v2.0, 350-801 v2.0, 350-601 v1.2, 350-201 v1.2, 300-215 v1.2, 300-220 v1.0).
// Cisco does not publish question counts, passing scores or pass rates; none are stated here.

const BODY = 'Cisco Systems';
const EXAMS_PAGE = 'https://www.cisco.com/site/us/en/learn/training-certifications/exams/index.html';
const RECERT_PAGE = 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/recertification/index.html';
const REG_PAGE = 'https://www.cisco.com/site/us/en/learn/training-certifications/exams/registration.html';

export const programs = [
  {
    id: 'cisco',
    body: BODY,
    bodyUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/index.html',
    about: 'Cisco Systems runs one of the longest-standing vendor certification programs in networking, now organized into Entry (CCST), Associate (CCNA), Professional (CCNP) and Expert (CCIE, CCDE) levels across enterprise, security, data center, collaboration, service provider and automation tracks. Each Professional certification is earned by passing one core exam and one concentration exam, and every exam you pass also earns a Cisco Certified Specialist credential. Cisco sets the passing standard for each exam internally and reports only pass or fail, with results online within 48 hours.',
    registrationSteps: [
      {
        title: 'Choose the exam and confirm its code and version',
        description: 'Pick the exact exam code from the Cisco exam list, for example 200-301 CCNA or 350-601 DCCOR, and open its exam-topics PDF to check the version number on the cover. Cisco publishes version cutover dates, such as the last day to test on CCNA v1.1 (February 2, 2027) and the first day of v2.0 (February 3, 2027), so study material must match the version you will sit.',
        subSteps: ['Open the exam page on cisco.com and note the code, duration and price', 'Download the exam-topics PDF and read the version and domain weights', 'Check that your study material names the same version'],
        duration: '15 minutes',
        note: 'Study material written for a retired blueprint is the most common avoidable cost.'
      },
      {
        title: 'Create a Cisco Certification profile',
        description: 'Cisco requires a Cisco Certification profile before you register or contact Pearson VUE. Enter your legal name exactly as it appears on your government-issued ID, a valid email address and, if you have taken a Cisco exam before, your existing Cisco Certification ID or Test ID.',
        subSteps: ['Sign in with a Cisco.com account', 'Create or confirm your certification profile in the Certification Tracking System', 'Keep the email address current, because Cisco sends expiration reminders there'],
        duration: '10-20 minutes',
        note: 'A name mismatch with your ID can mean you are turned away on exam day.'
      },
      {
        title: 'Register and pay through Pearson VUE',
        description: 'Cisco exams are scheduled through the Cisco Certification Tracker portal, by phone with Pearson VUE (1-877-404-EXAM in the U.S. and Canada), or in person at a Pearson VUE test center where offered. In the U.S. and Canada you can schedule up to six weeks ahead and as late as the same day.',
        subSteps: ['Choose a test center or online proctoring', 'Pay by card, a Cisco voucher or Cisco Learning Credits', 'Save the appointment confirmation'],
        duration: '10 minutes',
        note: 'Cisco and Pearson VUE do not guarantee vouchers or promo codes bought from anyone other than Pearson VUE, and fraudulent vouchers can lead to a lifetime exam ban.'
      },
      {
        title: 'Prepare for check-in',
        description: 'Bring a valid government-issued photo ID that matches your profile name. For online proctoring, run the system test on the exact computer and network you will use. Refund and reschedule terms are set by the delivery partner, so read them in your appointment confirmation before you book.',
        subSteps: ['Read the Pearson VUE rules for ID and the testing area', 'Run the online-proctoring system test if testing from home', 'Plan to arrive or check in early'],
        duration: '30 minutes before the appointment',
        note: ''
      },
      {
        title: 'Sit the exam and read your result',
        description: 'Cisco grades every exam pass or fail and states that results are available online within 48 hours. Cisco also emails next steps within 24 hours of a pass. A pass is recorded in the Certification Tracking System and earns a Specialist credential for core and concentration exams.',
        subSteps: ['Complete the exam within the stated duration', 'Check the Certification Tracking System for your result', 'Claim the digital badge when it is issued'],
        duration: '90 or 120 minutes of testing',
        note: ''
      }
    ],
    proctoring: 'Cisco exams are delivered by Pearson VUE at test centers and through Pearson VUE online proctoring. You must present valid government-issued photo ID whose name matches your Cisco Certification profile. Exam durations are 120 minutes for associate-level and core exams and 90 minutes for concentration exams.',
    retakePolicy: 'After a failed attempt you must wait five calendar days, counted from the day after the attempt, before retaking the same exam (15 days for CCIE and CCDE written exams). After a pass you must wait at least 180 days before retaking the same exam number. A retake costs the full exam fee again unless you bought CCNA Exam Safeguard Plus ($450, which includes a second attempt).',
    recertification: 'Most Cisco certifications are active for three years and Cisco does not grant extensions: if one expires you repeat the full exam process. You can recertify by passing the exam again, advancing to the next certification level, or earning Continuing Education credits (Associate 30, Specialist 40, Professional 80, CCIE and CCDE 120). Passing a core exam awards 80 CE credits and a Professional concentration exam awards 40. Cisco emails reminders at 2 years, 1 year, 90, 60 and 30 days before expiration.',
    scoreReporting: 'Cisco grades exams pass or fail and does not publish passing scores or pass rates for associate or professional exams. Results are available online within 48 hours, and passing candidates receive an email with next steps within 24 hours. A score report shows performance by exam section, not a numeric cut score.',
    refundPolicy: 'Cisco states that refund and cancellation terms vary by authorized test delivery partner, so the terms in your Pearson VUE confirmation apply. Cisco exam vouchers purchased from Cisco are valid for 365 days from purchase, and CCNA Exam Safeguard Plus costs $450.',
    providersNote: 'Cisco publishes a free exam-topics PDF for every exam and sells official training through Cisco U. and authorized Learning Partners. Training from authorized deliveries also earns CE credits, but gray-market deliveries do not. Cisco Press publishes the Official Cert Guide for most exams, and Cisco DevNet Sandbox and dCloud provide reservable lab environments.',
    comparison: {
      title: 'Cisco certification levels compared',
      columns: ['Level', 'What you pass', 'Exam fees', 'Validity and renewal'],
      rows: [
        { label: 'Entry (CCST)', values: ['One CCST exam (Networking or Cybersecurity)', 'See the Cisco exam page', 'Five-year cycle for CCST earned after July 15, 2025; CE credits do not apply'] },
        { label: 'Associate (CCNA)', values: ['One exam, for example 200-301 CCNA or 200-201 CCNACBR', '$300 per exam', 'Three years; 30 CE credits or a higher-level exam'] },
        { label: 'Professional (CCNP)', values: ['One core exam plus one concentration exam', '$400 core + $300 concentration = $700', 'Three years; 80 CE credits, or a core exam, or a combination'] },
        { label: 'Specialist', values: ['Any single core or concentration exam', '$400 core or $300 concentration', 'Three years; 40 CE credits'] },
        { label: 'Expert (CCIE, CCDE)', values: ['Core exam plus a lab or practical exam', 'See the Cisco exam page', 'Three years; 120 CE credits'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Do I need CCNA before CCNP?',
        a: 'No. Cisco lists no prerequisites for the CCNP core and concentration exams, so you can sit a core exam such as 350-601 DCCOR without holding CCNA. CCNA still teaches the routing, switching and addressing that every CCNP core exam assumes, and passing a professional core exam also counts toward renewing a lower-level credential.'
      },
      {
        q: 'What is the Cisco retake policy?',
        a: 'After a failed attempt you wait five calendar days, starting the day after the attempt, before retaking the same exam, and you pay the full fee again. After a pass you must wait at least 180 days before retaking the same exam number. CCIE and CCDE written exams carry a 15-day wait after a fail.'
      },
      {
        q: 'How do I renew a Cisco certification?',
        a: 'Most Cisco certifications last three years and cannot be extended. Before expiry you can retake the exam, pass an exam at a higher level, or earn Continuing Education credits: 30 for Associate, 40 for Specialist and 80 for Professional. Passing a core exam gives 80 credits and a Professional concentration exam gives 40, applied automatically.'
      }
    ],
    sourceUrl: RECERT_PAGE,
    confidence: 'high'
  }
];

const SHARED = {
  retake: 'After a failed attempt Cisco requires a wait of five calendar days, counted from the day after the attempt, before you can sit the same exam again, and the retake costs the full fee. After a pass you must wait at least 180 days before taking the same exam number again.',
  results: 'Cisco grades the exam pass or fail and states that results are available online within 48 hours. Passing candidates also receive an email with next steps within 24 hours. Cisco does not publish a numeric passing score, so the result is a pass or fail plus a performance breakdown by exam section.',
  pearson: 'Cisco exams are scheduled through the Cisco Certification Tracker portal or Pearson VUE, by phone on 1-877-404-EXAM in the U.S. and Canada, or at a Pearson VUE test center. In the U.S. and Canada you can book up to six weeks ahead and as late as the same day. Your ID name must match your Cisco profile.'
};

const ESSENTIALS_COMMON = [
  ['Retake after a fail', 'Wait 5 calendar days from the day after the attempt; full fee each time'],
  ['Retake after a pass', 'At least 180 days before the same exam number can be retaken'],
  ['Result', 'Pass or fail only; online within 48 hours; no numeric passing score published']
];

export const exams = [
  // ------------------------------------------------------------------ CCNA
  {
    slug: 'cisco-ccna',
    body: BODY,
    tagline: 'The Cisco associate-level networking exam: one 120-minute test, six domains, valid for three years.',
    description: 'The Cisco CCNA is earned by passing one 120-minute exam, 200-301, which costs $300 and is graded pass or fail. Cisco will retire the current v1.1 blueprint after February 2, 2027, when v2.0 begins on February 3, 2027. The v1.1 exam covers Network Fundamentals (20%), Network Access (20%), IP Connectivity (25%), IP Services (10%), Security Fundamentals (15%) and Automation and Programmability (10%). It is the standard entry credential for network administrator and support engineer roles, and it is the base of the Cisco ladder below CCNP.',
    quickAnswer: {
      summary: 'The Cisco CCNA requires one exam, 200-301 Implementing and Administering Cisco Solutions: 120 minutes, $300, English and Japanese, graded pass or fail with Cisco publishing no passing score. The v1.1 blueprint can be tested through February 2, 2027, and v2.0 starts February 3, 2027. The certification is valid for three years.',
      advantages: [
        'One exam, 200-301, with no prerequisites, so the full cost is a single $300 voucher.',
        'Valid for three years, and passing any higher-level Cisco exam or earning 30 CE credits renews it.',
        'The v1.1 weights are public: IP Connectivity is the largest domain at 25%.',
        'Cisco publishes the retake rules in advance: 5 calendar days after a fail and 180 days after a pass.'
      ]
    },
    roadmap: [
      'Decide between v1.1 (testable to February 2, 2027) and v2.0 (from February 3, 2027)',
      'Study the six domains with a hands-on lab, weighting IP Connectivity first',
      'Buy the $300 voucher and book through Pearson VUE',
      'Sit the 120-minute 200-301 exam and check your result online within 48 hours',
      'Renew in three years by passing a higher exam or earning 30 CE credits'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for the CCNA, and the exam page states only the exam code, 120-minute duration, $300 price and languages.',
    eligibility: 'Anyone can register for 200-301. Cisco recommends hands-on familiarity with networking equipment, but it is not enforced. Register with the legal name on your government-issued ID and keep your Cisco Certification profile current, since Cisco emails expiration reminders there.',
    examMeta: {
      questions: 'Cisco does not publish the number of questions or the scored/unscored split for 200-301',
      time: '120 minutes (single timed section)',
      pass: 'Pass or fail; Cisco does not publish a passing score or pass rate',
      fee: '$300 per attempt (U.S. price as of October 2026); Cisco Learning Credits accepted; retake costs $300 again; optional Exam Safeguard Plus $450 includes a second attempt',
      format: 'Computer-based Pearson VUE exam; item types are not itemized by Cisco; English and Japanese',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Network Fundamentals', weight: '20%', note: 'v1.1 domain 1.0. Network components, topology architectures, physical interfaces and cabling, TCP and UDP, IPv4 and IPv6 addressing and subnetting, wireless principles, virtualization, switching concepts.' },
      { name: 'Network Access', weight: '20%', note: 'v1.1 domain 2.0. VLANs, trunking, CDP and LLDP, EtherChannel, Rapid PVST+ spanning tree, Cisco wireless architectures and WLC management.' },
      { name: 'IP Connectivity', weight: '25%', note: 'v1.1 domain 3.0. Routing table interpretation, static routing, single-area OSPFv2 and first hop redundancy concepts. The largest domain.' },
      { name: 'IP Services', weight: '10%', note: 'v1.1 domain 4.0. NAT, NTP, DHCP, DNS, SNMP, syslog, QoS and SSH.' },
      { name: 'Security Fundamentals', weight: '15%', note: 'v1.1 domain 5.0. Threats and vulnerabilities, access control lists, Layer 2 security features, AAA and VPN concepts, wireless security.' },
      { name: 'Automation and Programmability', weight: '10%', note: 'v1.1 domain 6.0. Controller-based networking, REST APIs, configuration management tools and JSON. v1.1 also added generative AI and cloud network management topics.' }
    ],
    examEssentials: [
      ['Exam code and version', '200-301 CCNA v1.1; last day to test v1.1 is February 2, 2027'],
      ['Next version', 'v2.0 begins February 3, 2027 with five domains: Network Infrastructure and Connectivity 25%, Switching and Network Access 25%, IP Routing 20%, Network Services and Security 20%, AI and Network Operations and Management 10%'],
      ['Voucher validity', 'Exam vouchers are valid for 365 days from purchase'],
      ['Certification validity', '3 years; renew with 30 CE credits or a higher-level exam'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Study and lab practice', duration: 'Commonly 8-12 weeks at 10-12 hours a week (editorial estimate; Cisco publishes no required hours)' },
      { stage: 'Book through Pearson VUE', duration: 'Up to six weeks ahead, or same day where available (U.S. and Canada)' },
      { stage: 'Exam', duration: '120 minutes' },
      { stage: 'Result', duration: 'Online within 48 hours' }
    ],
    costBreakdown: {
      items: [
        { item: '200-301 CCNA exam voucher', fee: '$300' },
        { item: 'Retake after a fail (full fee again)', fee: '$300' },
        { item: 'Exam Safeguard Plus (optional, includes a second attempt)', fee: '$450' },
        { item: 'Renewal in three years', fee: '30 CE credits, or the cost of a higher-level exam' }
      ],
      total: '$300 for a first-attempt pass; $600 if you need one retake',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude study materials and lab tools.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring network administrators and support engineers, IT staff moving into networking, and students who want the standard vendor networking credential.',
    time: 'Commonly 8-12 weeks of study',
    cost: '$300 per attempt',
    faqs: [
      { q: 'How many questions are on the CCNA 200-301 exam?', a: 'Cisco does not publish the number of questions on the 200-301 CCNA exam. Its exam page states only the 120-minute duration, the $300 price and the languages. Figures of roughly 100 to 120 questions on forums are unofficial candidate reports. Plan for the 120-minute clock and practice pacing with simulations and drag-and-drop style items rather than counting questions.' },
      { q: 'What is the passing score for the CCNA?', a: 'Cisco does not publish a passing score for the CCNA. The result is pass or fail, available online within 48 hours. Numbers such as 825 out of 1000 that circulate on forums are not confirmed by Cisco. Your score report shows performance by section instead, which is more useful for planning a retake than any quoted percentage.' },
      { q: 'Is the CCNA exam hard?', a: 'The CCNA is a broad associate exam rather than an easy one. Domain 3.0, IP Connectivity, is 25% of the v1.1 blueprint and covers subnetting, routing tables and OSPF, which most candidates find hardest. Cisco publishes no pass rate, so difficulty depends on lab practice. Candidates who configure VLANs, trunks and OSPF themselves tend to find the hands-on items manageable.' },
      { q: 'How much does the CCNA exam cost?', a: 'The CCNA 200-301 exam costs $300 in the United States as of October 2026, payable by card or with Cisco Learning Credits. A retake costs the full $300 again. Cisco also sells Exam Safeguard Plus for $450, which includes a second attempt if you do not pass the first. Vouchers are valid for 365 days from purchase.' },
      { q: 'How long is the CCNA certification valid?', a: 'The CCNA is valid for three years from the date you earn it. Cisco does not grant extensions. Before it expires you can pass the current CCNA exam, pass any higher-level Cisco exam, or earn 30 Continuing Education credits through approved Cisco training. If it lapses, you must repeat the full exam process.' },
      { q: 'What is changing in CCNA v2.0 in February 2027?', a: 'Cisco will make 200-301 v2.0 available on February 3, 2027, and the last day to test v1.1 is February 2, 2027. The exam code stays 200-301. Version 2.0 reorganizes the blueprint into five domains, adds AI and network operations content and more troubleshooting tasks. A CCNA earned on v1.1 carries the same three-year validity.' },
      { q: 'How soon can I retake the CCNA if I fail?', a: SHARED.retake + ' Budget for a second $300 voucher in case the first attempt does not pass.' },
      { q: 'Do I need any certification or experience before the CCNA?', a: 'No. Cisco lists no prerequisites for the CCNA, and anyone can register for 200-301 with a Cisco Certification profile. Hands-on familiarity with routers and switches is strongly advised because the exam tests configuration and troubleshooting. Packet Tracer and Cisco Modeling Labs let you practice without owning equipment.' }
    ],
    summaryPoints: [
      'The CCNA requires one exam, 200-301, which is 120 minutes and $300.',
      'v1.1 domain weights are 20, 20, 25, 10, 15 and 10 percent; v1.1 testing ends February 2, 2027.',
      'Cisco publishes no passing score, question count or pass rate; results are pass or fail within 48 hours.',
      'Retake wait is 5 calendar days after a fail and 180 days after a pass.',
      'The certification is valid for three years and renews with 30 CE credits or a higher-level exam.'
    ],
    relatedSlugs: ['cisco-ccna-cybersecurity', 'cisco-ccna-automation', 'cisco-ccnp-enterprise', 'cisco-ccst-networking'],
    sourceUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  // ------------------------------------------------------- CCNA Cybersecurity
  {
    slug: 'cisco-ccna-cybersecurity',
    body: BODY,
    tagline: 'The Cisco associate credential for security operations center analysts, earned with the 200-201 CCNACBR exam.',
    description: 'The Cisco CCNA Cybersecurity is earned with one exam, 200-201 CCNACBR v1.2, which runs 120 minutes and costs $300. It is the credential Cisco previously branded CyberOps Associate, renamed in early 2026 with the exam code unchanged. The blueprint covers Security Concepts (20%), Security Monitoring (25%), Host-Based Analysis (20%), Network Intrusion Analysis (20%) and Security Policies and Procedures (15%). It targets entry-level SOC analysts who read packet captures, NetFlow and endpoint evidence, and it sits below CCNP Cybersecurity.',
    quickAnswer: {
      summary: 'The Cisco CCNA Cybersecurity requires one exam, 200-201 CCNACBR v1.2: 120 minutes, $300, English, pass or fail with no published cut score. The blueprint is five domains led by Security Monitoring at 25%. It is the renamed CyberOps Associate and is the associate-level entry to the Cisco cybersecurity track.',
      advantages: [
        'One $300 exam and no prerequisites, so it is the cheapest route into the Cisco cybersecurity track.',
        'The five domain weights are published: Security Monitoring is the largest at 25%.',
        'The v1.2 blueprint includes AI-era topics such as generative AI social engineering.',
        'It is an associate certification, so it renews with 30 CE credits or a higher-level exam.'
      ]
    },
    roadmap: [
      'Confirm the exam is 200-201 CCNACBR v1.2 and not an older CyberOps resource',
      'Study the five domains, putting Security Monitoring and evidence interpretation first',
      'Buy the $300 voucher and book through Pearson VUE',
      'Sit the 120-minute exam and read the pass or fail result online within 48 hours',
      'Move to CCNP Cybersecurity (350-201 CBRCOR plus a concentration) when ready'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for 200-201 CCNACBR. Basic networking knowledge, such as what the CCNA covers, helps with the packet and flow analysis items.',
    eligibility: 'Open to anyone with a Cisco Certification profile. The legal name on your profile must match your government-issued photo ID at the test center or online-proctoring check-in.',
    examMeta: {
      questions: 'Cisco does not publish the number of questions or scored/unscored split for 200-201',
      time: '120 minutes (single timed section)',
      pass: 'Pass or fail; Cisco does not publish a passing score or pass rate',
      fee: '$300 per attempt (U.S. price as of October 2026); Cisco Learning Credits accepted; retake costs the full $300 again',
      format: 'Computer-based Pearson VUE exam; English only; item types are not itemized by Cisco',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Security Concepts', weight: '20%', note: 'CIA triad, security deployments, SIEM and SOAR, threat intelligence, defense in depth, access control models, CVSS terms and the 5-tuple.' },
      { name: 'Security Monitoring', weight: '25%', note: 'Data types such as NetFlow and full packet capture, network, web application, social engineering (including generative AI) and endpoint attacks, evasion, and certificate and PKI impact.' },
      { name: 'Host-Based Analysis', weight: '20%', note: 'Endpoint protection, Windows and Linux host artifacts, logs and forensic evidence interpretation.' },
      { name: 'Network Intrusion Analysis', weight: '20%', note: 'Mapping events to source technologies, interpreting protocol headers, packet captures, and IDS and firewall events.' },
      { name: 'Security Policies and Procedures', weight: '15%', note: 'Incident response management concepts, NIST SP 800-61 incident handling and evidence collection.' }
    ],
    examEssentials: [
      ['Exam code and version', '200-201 CCNACBR v1.2 (formerly CBROPS, CyberOps Associate)'],
      ['Exam length', '120 minutes'],
      ['Language', 'English'],
      ['Certification validity', '3 years; renew with 30 CE credits or a higher-level exam'],
      ['Voucher validity', 'Cisco exam vouchers are valid for 365 days from purchase'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Study with real captures and logs', duration: 'Commonly 8-10 weeks (editorial estimate; Cisco publishes no required hours)' },
      { stage: 'Book through Pearson VUE', duration: 'Up to six weeks ahead, or same day where available (U.S. and Canada)' },
      { stage: 'Exam', duration: '120 minutes' },
      { stage: 'Result', duration: 'Online within 48 hours' }
    ],
    costBreakdown: {
      items: [
        { item: '200-201 CCNACBR exam voucher', fee: '$300' },
        { item: 'Retake after a fail (full fee again)', fee: '$300' },
        { item: 'Official Cert Guide or course (optional)', fee: 'Set by the publisher or Learning Partner' },
        { item: 'Renewal in three years', fee: '30 CE credits, or the cost of a higher-level exam' }
      ],
      total: '$300 for a first-attempt pass; $600 with one retake',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude study materials.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring SOC analysts, helpdesk and network staff moving toward security operations, and graduates who want a vendor security-operations credential.',
    time: 'Commonly 8-10 weeks of study',
    cost: '$300 per attempt',
    faqs: [
      { q: 'What is the CCNA Cybersecurity exam code?', a: 'The CCNA Cybersecurity exam is 200-201 CCNACBR, Understanding Cisco Cybersecurity Operations Fundamentals, currently on version 1.2. The code did not change when Cisco renamed the CyberOps Associate certification to CCNA Cybersecurity in early 2026. Older study material labeled CBROPS or CyberOps covers most domains but may miss the added AI-related objectives.' },
      { q: 'How many questions are on the 200-201 CCNACBR exam?', a: 'Cisco does not publish a question count for 200-201 CCNACBR. The exam page states a 120-minute duration, a $300 price and English as the language. Forum figures are unofficial. Because the exam is built around interpreting evidence such as packet captures and NetFlow records, practice with real data matters more than guessing the item count.' },
      { q: 'What is the passing score for CCNA Cybersecurity?', a: 'Cisco does not publish a passing score for 200-201 CCNACBR. Grading is pass or fail, and results are online within 48 hours. Any specific percentage quoted on forums is not from Cisco. Use your section-level feedback after an attempt to direct your study, and weight your time using the published domain percentages.' },
      { q: 'Is the CCNA Cybersecurity exam hard?', a: 'It is a demanding associate exam because it tests interpretation of evidence, not memorized definitions. Security Monitoring is 25% of the blueprint and expects you to read NetFlow, packet and firewall data and identify attacks. Cisco publishes no pass rate, so difficulty depends on your hands-on practice with Wireshark, logs and host artifacts.' },
      { q: 'How much does the CCNA Cybersecurity exam cost?', a: 'The 200-201 CCNACBR exam costs $300 in the United States as of October 2026, payable by card or with Cisco Learning Credits. A retake after a fail costs the full $300 again. Cisco exam vouchers purchased from Cisco are valid for 365 days. CCNA Exam Safeguard Plus is sold for the CCNA exam, so check its terms before assuming it covers this one.' },
      { q: 'How long is CCNA Cybersecurity valid?', a: 'Cisco associate certifications are active for three years. You can renew CCNA Cybersecurity by retaking the exam, passing a higher-level Cisco exam, or earning 30 Continuing Education credits. Passing a Professional core exam such as 350-201 CBRCOR awards 80 CE credits, which is more than enough. Cisco does not grant extensions after expiration.' },
      { q: 'What is the difference between CCNA Cybersecurity and CCNP Cybersecurity?', a: 'CCNA Cybersecurity needs one 120-minute exam, 200-201, and covers security operations fundamentals. CCNP Cybersecurity needs two exams: the 120-minute core 350-201 CBRCOR ($400) plus a 90-minute concentration, either 300-215 CBRFIR or 300-220 CBRTHD ($300). The professional level adds playbooks, forensics, threat hunting and automation with Python and APIs.' }
    ],
    summaryPoints: [
      'CCNA Cybersecurity requires one exam, 200-201 CCNACBR v1.2: 120 minutes and $300.',
      'The five published domain weights are 20, 25, 20, 20 and 15 percent, with Security Monitoring the largest.',
      'Cisco publishes no passing score, question count or pass rate; the result is pass or fail within 48 hours.',
      'The credential is the renamed CyberOps Associate and renews every three years with 30 CE credits or a higher-level exam.'
    ],
    relatedSlugs: ['cisco-ccnp-cybersecurity', 'cisco-ccna', 'cisco-ccst-cybersecurity', 'cisco-ccnp-security'],
    sourceUrl: 'https://learningcontent.cisco.com/documents/marketing/exam-topics/200-201-CCNACBR-v1.2_02July2025.pdf',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  // --------------------------------------------------------- CCNP Automation
  {
    slug: 'cisco-ccnp-automation',
    body: BODY,
    tagline: 'The Cisco professional-level automation certification: one core exam plus one enterprise or data center concentration.',
    description: 'The Cisco CCNP Automation requires two exams: the 120-minute core 350-901 AUTOCOR v2.0 ($400) and one 90-minute concentration ($300), for $700 in exam fees. AUTOCOR tests Network Automation (30%), Infrastructure as Code (30%), Operations (20%) and AI in Automation (20%) using Ansible, Terraform, RESTCONF with YANG, Python, Git and GitLab CI/CD. Concentrations are 300-435 ENAUTO for enterprise or 300-635 DCNAUTO for data center. It is the successor path for DevNet Professional and sits between CCNA Automation and CCIE Automation.',
    quickAnswer: {
      summary: 'CCNP Automation requires the 350-901 AUTOCOR core exam (120 minutes, $400) and one concentration, 300-435 ENAUTO or 300-635 DCNAUTO (90 minutes, $300 each). Total exam fees are $700 with no prerequisites. Cisco grades pass or fail and publishes no cut score. Each passed exam also earns a Specialist certification.',
      advantages: [
        'AUTOCOR v2.0 weights are public: Network Automation 30%, Infrastructure as Code 30%, Operations 20%, AI in Automation 20%.',
        'You choose an enterprise (ENAUTO) or data center (DCNAUTO) concentration to match your work.',
        'The core exam alone earns the Cisco Certified Specialist - Automation Core style credential and 80 CE credits.',
        'No prerequisites, and the exams can be taken in either order.'
      ]
    },
    roadmap: [
      'Choose the concentration that matches your platform: ENAUTO (enterprise) or DCNAUTO (data center)',
      'Study the AUTOCOR v2.0 domains: Python, Ansible, Terraform, RESTCONF, Git and CI/CD',
      'Pass 350-901 AUTOCOR (120 minutes, $400)',
      'Pass the concentration exam (90 minutes, $300)',
      'Renew in three years with 80 CE credits or by passing a core exam'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for 350-901 AUTOCOR or for either automation concentration exam.',
    eligibility: 'Open to anyone with a Cisco Certification profile. Working knowledge of Python, REST APIs, JSON and YANG is assumed by the exam content even though Cisco does not enforce a prior certificate.',
    examMeta: {
      questions: 'Cisco does not publish question counts for 350-901 AUTOCOR or the concentration exams',
      time: 'Core 350-901: 120 minutes. Concentration (300-435 or 300-635): 90 minutes.',
      pass: 'Pass or fail for each exam; Cisco does not publish passing scores or pass rates',
      fee: '$400 core + $300 concentration = $700 (U.S. price as of October 2026); each retake costs that exam fee again',
      format: 'Computer-based Pearson VUE exams; core available in English and Japanese; item types not itemized by Cisco',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Network Automation', weight: '30%', note: 'AUTOCOR v2.0 domain 1.0. Ansible, Terraform, RESTCONF (RFC 8040) with YANG, Python, REST API consumption with pagination, authentication and rate limiting.' },
      { name: 'Infrastructure as Code', weight: '30%', note: 'AUTOCOR v2.0 domain 2.0. Git operations, GitLab CE CI/CD pipelines (build, prevalidation, deploy, post-validation), Cisco Modeling Labs simulation.' },
      { name: 'Operations', weight: '20%', note: 'AUTOCOR v2.0 domain 3.0. Docker Compose, source of truth, model-driven telemetry, logging, pyATS change validation, TLS certificates and secure coding.' },
      { name: 'AI in Automation', weight: '20%', note: 'AUTOCOR v2.0 domain 4.0. Benefits and risks of AI-assisted code, MCP servers with Python FastMCP, LLM conversational agents, evaluating AI recommendations.' }
    ],
    examEssentials: [
      ['Required exams', 'One core (350-901 AUTOCOR) plus one concentration (300-435 ENAUTO or 300-635 DCNAUTO)'],
      ['Core length', '120 minutes; core exam awards a Specialist certification and 80 CE credits'],
      ['Concentration length', '90 minutes; concentration exam awards a Specialist certification and 40 CE credits'],
      ['Certification validity', '3 years; renew with 80 CE credits or a core exam'],
      ['Migration', 'Cisco announced that active DevNet certifications migrated to CCNA, CCNP and CCIE Automation from February 3, 2026'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Core study (AUTOCOR)', duration: 'Commonly 8-10 weeks (editorial estimate)' },
      { stage: 'Concentration study', duration: 'Commonly 4-6 weeks (editorial estimate)' },
      { stage: 'Exams', duration: '120 minutes (core) plus 90 minutes (concentration)' },
      { stage: 'Results', duration: 'Online within 48 hours for each exam' }
    ],
    costBreakdown: {
      items: [
        { item: '350-901 AUTOCOR core exam', fee: '$400' },
        { item: '300-435 ENAUTO or 300-635 DCNAUTO concentration exam', fee: '$300' },
        { item: 'Retake of a failed exam', fee: 'Full fee again ($400 core, $300 concentration)' },
        { item: 'Renewal in three years', fee: '80 CE credits, or the cost of a core exam' }
      ],
      total: '$700 for both exams on first attempts',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude training, which Cisco sells separately through Cisco U. and Learning Partners.'
    },
    difficulty: 'Challenging',
    audience: 'Network engineers and DevOps-minded developers who build Python, Ansible, Terraform and CI/CD automation for Cisco platforms, including former DevNet Professional candidates.',
    time: 'Commonly 12-16 weeks across both exams',
    cost: '$700 in exam fees',
    faqs: [
      { q: 'What exams are required for CCNP Automation?', a: 'CCNP Automation requires two exams: the core 350-901 AUTOCOR (120 minutes, $400) and one concentration. The concentration options are 300-435 ENAUTO for enterprise automation or 300-635 DCNAUTO for data center automation, each 90 minutes and $300. Cisco lists no prerequisites, and you can take the core and concentration in either order.' },
      { q: 'How much does CCNP Automation cost?', a: 'CCNP Automation exam fees total $700 as of October 2026: $400 for the 350-901 AUTOCOR core and $300 for the concentration. A failed exam costs its full fee again on retake. Cisco Learning Credits can pay for exams, and training is extra. Optional training from Cisco U. or a Learning Partner is not required.' },
      { q: 'What is on the 350-901 AUTOCOR exam?', a: 'The 350-901 AUTOCOR v2.0 exam has four domains: Network Automation 30%, Infrastructure as Code 30%, Operations 20% and AI in Automation 20%. It covers Ansible, Terraform, RESTCONF with YANG models, Python, Git, GitLab CI/CD pipelines, pyATS, telemetry and building MCP servers and LLM agents for network tasks.' },
      { q: 'Is the CCNP Automation exam hard?', a: 'It is one of the harder professional exams because it tests building and debugging automation, not recognizing terms. The 60% of the core blueprint in Network Automation and Infrastructure as Code expects working Python, Git and pipeline skills. Cisco publishes no pass rate, so judge readiness by timed practice and by whether you can write and troubleshoot code in a lab.' },
      { q: 'What is the passing score for 350-901 AUTOCOR?', a: 'Cisco does not publish a passing score for 350-901 AUTOCOR or for the concentration exams. Each exam is graded pass or fail with results online within 48 hours. Passing the core also earns a Specialist certification, so it is worth recording even before you finish the concentration.' },
      { q: 'How long is CCNP Automation valid?', a: 'CCNP Automation is valid for three years. To renew it you can pass a core exam again, advance to the next level, or earn 80 Continuing Education credits. Passing a core exam awards 80 credits and a concentration exam awards 40, applied automatically. Cisco does not grant extensions, and an expired certification means repeating the full exam process.' },
      { q: 'What happened to DevNet Professional?', a: 'Cisco announced that from February 3, 2026, active DevNet certifications were migrated to the Automation track: DevNet Associate to CCNA Automation, DevNet Professional to CCNP Automation and DevNet Expert to CCIE Automation. The core exam is now 350-901 AUTOCOR v2.0, which adds an AI in Automation domain.' }
    ],
    summaryPoints: [
      'CCNP Automation needs the 350-901 AUTOCOR core (120 minutes, $400) plus one 90-minute, $300 concentration.',
      'AUTOCOR v2.0 weights are 30% Network Automation, 30% Infrastructure as Code, 20% Operations and 20% AI in Automation.',
      'Cisco publishes no passing score or pass rate; each exam is pass or fail within 48 hours.',
      'The certification is valid for three years and renews with 80 CE credits or a core exam.'
    ],
    relatedSlugs: ['cisco-ccna-automation', 'cisco-ccie-automation', 'cisco-ccnp-enterprise', 'cisco-ccnp-data-center'],
    sourceUrl: 'https://learningcontent.cisco.com/documents/marketing/exam-topics/350-901-AUTOCOR-v2.0-7-9-2025.pdf',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  // ----------------------------------------------------- CCNP Collaboration
  {
    slug: 'cisco-ccnp-collaboration',
    body: BODY,
    tagline: 'The Cisco professional-level collaboration certification: CLCOR core plus one of three call control, hybrid or customer experience concentrations.',
    description: 'The Cisco CCNP Collaboration requires two exams: the 120-minute core 350-801 CLCOR v2.0 ($400) and one 90-minute concentration ($300), for $700. CLCOR weights Call Control at 30%, Cloud and Hybrid Services at 25%, Infrastructure and Design at 15%, and Protocols and Endpoints, Voice Gateways and Session Border Controllers, and Media and QoS at 10% each. Concentrations are 300-815 CLACC, 300-820 CLHCT and 300-830 CLCCE. It targets engineers who run Cisco Unified Communications Manager and Webex Calling deployments.',
    quickAnswer: {
      summary: 'CCNP Collaboration requires the 350-801 CLCOR core exam (120 minutes, $400, English) and one concentration of 300-815 CLACC, 300-820 CLHCT or 300-830 CLCCE (90 minutes, $300 each). Exam fees total $700, there are no prerequisites, and Cisco grades pass or fail without publishing a cut score.',
      advantages: [
        'CLCOR v2.0 weights are published, with Call Control the largest at 30%.',
        'Three concentrations let you specialize in on-premises call control, hybrid and cloud, or customer experience.',
        'Passing CLCOR alone earns the Cisco Certified Specialist - Collaboration Core credential.',
        'No prerequisite exams, and the core and concentration can be taken in either order.'
      ]
    },
    roadmap: [
      'Pick a concentration: CLACC, CLHCT or CLCCE',
      'Study the six CLCOR v2.0 domains, starting with Call Control (30%)',
      'Pass 350-801 CLCOR (120 minutes, $400)',
      'Pass your concentration exam (90 minutes, $300)',
      'Renew in three years with 80 CE credits or a core exam'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for 350-801 CLCOR or for the collaboration concentration exams.',
    eligibility: 'Open to anyone with a Cisco Certification profile. CLCOR assumes you can reason about SIP, dial plans, gateways and QoS, even though no prior certificate is required.',
    examMeta: {
      questions: 'Cisco does not publish question counts for 350-801 CLCOR or the concentration exams',
      time: 'Core 350-801: 120 minutes. Concentration: 90 minutes.',
      pass: 'Pass or fail for each exam; Cisco does not publish passing scores or pass rates',
      fee: '$400 core + $300 concentration = $700 (U.S. price as of October 2026); each retake costs that exam fee again',
      format: 'Computer-based Pearson VUE exams; English; item types not itemized by Cisco',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Infrastructure and Design', weight: '15%', note: 'CLCOR v2.0 domain 1.0. Collaboration architecture, dial plan design, network design considerations and deployment models.' },
      { name: 'Protocols and Endpoints', weight: '10%', note: 'CLCOR v2.0 domain 2.0. SIP and other signaling, device onboarding including bulk provisioning and activation codes, Webex App.' },
      { name: 'Call Control', weight: '30%', note: 'CLCOR v2.0 domain 3.0. Cisco Unified Communications Manager call routing, partitions, calling search spaces and user management. The largest domain.' },
      { name: 'Voice Gateways and Session Border Controllers', weight: '10%', note: 'CLCOR v2.0 domain 4.0. Cisco IOS XE voice gateways, dial peers and SBC concepts.' },
      { name: 'Cloud and Hybrid Services', weight: '25%', note: 'CLCOR v2.0 domain 5.0. Webex Calling, Webex hybrid services, cloud integration and APIs.' },
      { name: 'Media and QoS', weight: '10%', note: 'CLCOR v2.0 domain 6.0. Codecs, media resources and QoS for voice and video.' }
    ],
    examEssentials: [
      ['Required exams', 'One core (350-801 CLCOR v2.0) plus one concentration'],
      ['Concentrations', '300-815 CLACC (advanced call control), 300-820 CLHCT (hybrid and cloud), 300-830 CLCCE (cloud customer experience)'],
      ['Core length', '120 minutes; passing earns the Specialist - Collaboration Core credential and 80 CE credits'],
      ['Concentration length', '90 minutes; each passes earns a Specialist credential and 40 CE credits'],
      ['Certification validity', '3 years; renew with 80 CE credits or a core exam'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Core study (CLCOR)', duration: 'Commonly 8-10 weeks (editorial estimate)' },
      { stage: 'Concentration study', duration: 'Commonly 4-6 weeks (editorial estimate)' },
      { stage: 'Exams', duration: '120 minutes (core) plus 90 minutes (concentration)' },
      { stage: 'Results', duration: 'Online within 48 hours for each exam' }
    ],
    costBreakdown: {
      items: [
        { item: '350-801 CLCOR core exam', fee: '$400' },
        { item: 'Concentration exam (CLACC, CLHCT or CLCCE)', fee: '$300' },
        { item: 'Retake of a failed exam', fee: 'Full fee again ($400 core, $300 concentration)' },
        { item: 'Renewal in three years', fee: '80 CE credits, or the cost of a core exam' }
      ],
      total: '$700 for both exams on first attempts',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude training and lab costs.'
    },
    difficulty: 'Challenging',
    audience: 'Voice and collaboration engineers who administer Cisco Unified Communications Manager, voice gateways and Webex services.',
    time: 'Commonly 12-16 weeks across both exams',
    cost: '$700 in exam fees',
    faqs: [
      { q: 'What exams do I need for CCNP Collaboration?', a: 'CCNP Collaboration requires the core 350-801 CLCOR (120 minutes, $400) and one concentration exam. Cisco currently lists three concentrations: 300-815 CLACC, 300-820 CLHCT and 300-830 CLCCE, each 90 minutes and $300. There are no prerequisites. Check the Cisco exams-and-training page before booking because concentration lists change.' },
      { q: 'How much does CCNP Collaboration cost?', a: 'CCNP Collaboration exam fees total $700 as of October 2026, which is $400 for 350-801 CLCOR and $300 for a concentration. Failing an exam means paying its full fee again after a five-day wait. Cisco Learning Credits can be used for exams, and optional training is billed separately.' },
      { q: 'What is on the 350-801 CLCOR exam?', a: 'The 350-801 CLCOR v2.0 exam has six domains: Call Control 30%, Cloud and Hybrid Services 25%, Infrastructure and Design 15%, and Protocols and Endpoints, Voice Gateways and Session Border Controllers, and Media and QoS at 10% each. It covers CUCM call routing, SIP, dial peers, Webex Calling and QoS.' },
      { q: 'Is the CCNP Collaboration exam hard?', a: 'It is a demanding professional exam because Call Control and Cloud and Hybrid Services together are 55% of CLCOR and require configuration-level knowledge of CUCM and Webex. Cisco publishes no pass rate. Engineers with daily CUCM and gateway experience tend to find it manageable, while data-networking specialists need extra voice fundamentals and lab time.' },
      { q: 'What is the passing score for 350-801 CLCOR?', a: 'Cisco does not publish a passing score for 350-801 CLCOR or any collaboration concentration. Each exam is graded pass or fail, with results online within 48 hours. Because the cut score is hidden, use the published domain percentages to allocate study time, and spend the most on Call Control at 30%.' },
      { q: 'Which CCNP Collaboration concentration should I choose?', a: 'Choose the concentration that matches your daily platform. 300-815 CLACC suits engineers who run on-premises call control and mobility, 300-820 CLHCT suits hybrid and cloud deployments, and 300-830 CLCCE suits cloud customer experience work. Each is 90 minutes and $300, and each earns its own Specialist certification.' },
      { q: 'How long is CCNP Collaboration valid?', a: 'CCNP Collaboration is valid for three years. You can renew by passing the CLCOR core again, advancing to the next level, or earning 80 Continuing Education credits. A core exam awards 80 credits and a concentration awards 40. Cisco does not grant extensions, so an expired certification means repeating the exams.' }
    ],
    summaryPoints: [
      'CCNP Collaboration needs 350-801 CLCOR (120 minutes, $400) plus one 90-minute, $300 concentration.',
      'CLCOR v2.0 weights are Call Control 30%, Cloud and Hybrid Services 25%, Infrastructure and Design 15%, and three domains at 10%.',
      'Current concentrations are 300-815 CLACC, 300-820 CLHCT and 300-830 CLCCE.',
      'Cisco publishes no passing score or pass rate; the certification is valid for three years.'
    ],
    relatedSlugs: ['cisco-ccie-collaboration', 'cisco-ccna', 'cisco-ccnp-enterprise', 'cisco-ccnp-wireless'],
    sourceUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/collaboration/ccnp-collaboration/exams-and-training.html',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  // ----------------------------------------------------- CCNP Cybersecurity
  {
    slug: 'cisco-ccnp-cybersecurity',
    body: BODY,
    tagline: 'The Cisco professional-level security operations certification: CBRCOR core plus a forensics or threat hunting concentration.',
    description: 'The Cisco CCNP Cybersecurity requires two exams: the 120-minute core 350-201 CBRCOR v1.2 ($400) and one 90-minute concentration ($300), for $700 in exam fees. CBRCOR tests Fundamentals (20%), Techniques (30%), Processes (30%) and Automation (20%), covering playbooks, SIEM and SOAR, malware analysis and Python scripting. Concentrations are 300-215 CBRFIR for forensics and incident response or 300-220 CBRTHD for threat hunting. It is the renamed CyberOps Professional and is separate from CCNP Security, which uses 350-701 SCOR.',
    quickAnswer: {
      summary: 'CCNP Cybersecurity requires the 350-201 CBRCOR core exam (120 minutes, $400) and one concentration, 300-215 CBRFIR or 300-220 CBRTHD (90 minutes, $300). Exam fees total $700, there are no prerequisites, and Cisco grades pass or fail without a published cut score. It is distinct from CCNP Security.',
      advantages: [
        'CBRCOR v1.2 weights are public: Techniques 30%, Processes 30%, Fundamentals 20%, Automation 20%.',
        'Two focused concentrations: forensics and incident response, or threat hunting.',
        'Passing CBRCOR alone earns the Cisco Certified Specialist - Cybersecurity Core credential.',
        'Built for SOC analysts and incident responders, with Python and API automation tested explicitly.'
      ]
    },
    roadmap: [
      'Confirm you want CCNP Cybersecurity (350-201) and not CCNP Security (350-701)',
      'Study the four CBRCOR domains, weighting Techniques and Processes first',
      'Pass 350-201 CBRCOR (120 minutes, $400)',
      'Pass 300-215 CBRFIR or 300-220 CBRTHD (90 minutes, $300)',
      'Renew in three years with 80 CE credits or a core exam'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for 350-201 CBRCOR, 300-215 CBRFIR or 300-220 CBRTHD.',
    eligibility: 'Open to anyone with a Cisco Certification profile. CBRCOR assumes SOC experience with incident response playbooks, SIEM tools and basic scripting even though Cisco enforces no prior certificate.',
    examMeta: {
      questions: 'Cisco does not publish question counts for 350-201 CBRCOR or the concentration exams',
      time: 'Core 350-201: 120 minutes. Concentration (300-215 or 300-220): 90 minutes.',
      pass: 'Pass or fail for each exam; Cisco does not publish passing scores or pass rates',
      fee: '$400 core + $300 concentration = $700 (U.S. price as of October 2026); each retake costs that exam fee again',
      format: 'Computer-based Pearson VUE exams; English; item types not itemized by Cisco',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Fundamentals', weight: '20%', note: 'CBRCOR v1.2 domain 1.0. Incident response playbooks, compliance standards, cyber risk, risk analysis, incident response metrics, cloud environments.' },
      { name: 'Techniques', weight: '30%', note: 'CBRCOR v1.2 domain 2.0. AI-powered analytics, system hardening, segmentation, threat intelligence platforms, data loss prevention, SIEM, UEBA and packet capture analysis.' },
      { name: 'Processes', weight: '30%', note: 'CBRCOR v1.2 domain 3.0. Threat models, malware analysis steps, IOCs and IOAs, endpoint intrusion, data loss investigation, CVSS-based vulnerability triage.' },
      { name: 'Automation', weight: '20%', note: 'CBRCOR v1.2 domain 4.0. SOAR, Python scripts, JSON and XML, REST API constraints and authentication, Bash, CI/CD and infrastructure as code.' }
    ],
    examEssentials: [
      ['Required exams', 'One core (350-201 CBRCOR v1.2) plus one concentration'],
      ['Concentrations', '300-215 CBRFIR (forensics and incident response, v1.2) or 300-220 CBRTHD (threat hunting, v1.0)'],
      ['Core length', '120 minutes; passing earns the Specialist - Cybersecurity Core credential and 80 CE credits'],
      ['Concentration length', '90 minutes; passing earns a Specialist credential and 40 CE credits'],
      ['Certification validity', '3 years; renew with 80 CE credits or a core exam'],
      ['Naming', 'Renamed from Cisco Certified CyberOps Professional; CCNP Security (350-701 SCOR) is a different track'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Core study (CBRCOR)', duration: 'Commonly 8-10 weeks (editorial estimate)' },
      { stage: 'Concentration study', duration: 'Commonly 4-6 weeks (editorial estimate)' },
      { stage: 'Exams', duration: '120 minutes (core) plus 90 minutes (concentration)' },
      { stage: 'Results', duration: 'Online within 48 hours for each exam' }
    ],
    costBreakdown: {
      items: [
        { item: '350-201 CBRCOR core exam', fee: '$400' },
        { item: '300-215 CBRFIR or 300-220 CBRTHD concentration exam', fee: '$300' },
        { item: 'Retake of a failed exam', fee: 'Full fee again ($400 core, $300 concentration)' },
        { item: 'Renewal in three years', fee: '80 CE credits, or the cost of a core exam' }
      ],
      total: '$700 for both exams on first attempts',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude training and lab costs.'
    },
    difficulty: 'Challenging',
    audience: 'Experienced SOC analysts, incident responders and threat hunters who want a vendor professional credential, including CyberOps Professional holders.',
    time: 'Commonly 12-16 weeks across both exams',
    cost: '$700 in exam fees',
    faqs: [
      { q: 'What exams are required for CCNP Cybersecurity?', a: 'CCNP Cybersecurity requires two exams: the core 350-201 CBRCOR (120 minutes, $400) and one concentration, either 300-215 CBRFIR for forensic analysis and incident response or 300-220 CBRTHD for threat hunting. Each concentration is 90 minutes and $300. Cisco lists no prerequisites and each exam also earns a Specialist certification.' },
      { q: 'Is CCNP Cybersecurity the same as CCNP Security?', a: 'No. CCNP Cybersecurity is the renamed CyberOps Professional track built on 350-201 CBRCOR for security operations, incident response and threat hunting. CCNP Security uses the 350-701 SCOR core and covers implementing Cisco security products such as firewalls and identity services. The names are close, so confirm the exam code on your voucher before paying.' },
      { q: 'What is on the 350-201 CBRCOR exam?', a: 'The 350-201 CBRCOR v1.2 exam has four domains: Fundamentals 20%, Techniques 30%, Processes 30% and Automation 20%. It covers incident response playbooks, SIEM and SOAR, UEBA, malware analysis, IOCs and IOAs, CVSS triage, and reading and modifying Python scripts that call REST APIs.' },
      { q: 'How much does CCNP Cybersecurity cost?', a: 'CCNP Cybersecurity exam fees total $700 as of October 2026: $400 for 350-201 CBRCOR and $300 for the concentration. A failed exam costs its full fee again after a five-calendar-day wait. Cisco Learning Credits can pay for exams, and training is optional and billed separately.' },
      { q: 'Is the CCNP Cybersecurity exam hard?', a: 'It is a hard professional exam because Techniques and Processes make up 60% of CBRCOR and test applied analysis of alerts, packet captures and malware evidence. Cisco publishes no pass rate. Candidates with real SOC experience and Python practice find the scenarios familiar, while theory-only study leaves gaps in the Automation domain.' },
      { q: 'What is the passing score for 350-201 CBRCOR?', a: 'Cisco does not publish a passing score for 350-201 CBRCOR or the concentration exams. Each is graded pass or fail, with results online within 48 hours. Any percentage quoted on forums is not from Cisco. Use the published domain weights to plan study time rather than chasing a rumored cut score.' },
      { q: 'How long is CCNP Cybersecurity valid?', a: 'CCNP Cybersecurity is valid for three years. You can renew it by passing the CBRCOR core again, advancing to the next level, or earning 80 Continuing Education credits. A core exam awards 80 credits and a concentration awards 40. Cisco does not grant extensions after expiration.' }
    ],
    summaryPoints: [
      'CCNP Cybersecurity needs 350-201 CBRCOR (120 minutes, $400) plus 300-215 CBRFIR or 300-220 CBRTHD (90 minutes, $300).',
      'CBRCOR v1.2 weights are Fundamentals 20%, Techniques 30%, Processes 30% and Automation 20%.',
      'It is the renamed CyberOps Professional and is not the same as CCNP Security (350-701 SCOR).',
      'Cisco publishes no passing score or pass rate; the certification is valid for three years.'
    ],
    relatedSlugs: ['cisco-ccna-cybersecurity', 'cisco-ccnp-security', 'cisco-ccie-security', 'cisco-ccst-cybersecurity'],
    sourceUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cybersecurity/ccnp-cybersecurity/exams-and-training.html',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  // -------------------------------------------------------- CCNP Data Center
  {
    slug: 'cisco-ccnp-data-center',
    body: BODY,
    tagline: 'The Cisco professional-level data center certification: DCCOR core plus one of five concentrations including ACI and AI infrastructure.',
    description: 'The Cisco CCNP Data Center requires two exams: the 120-minute core 350-601 DCCOR v1.2 ($400) and one 90-minute concentration ($300), for $700 in exam fees. DCCOR weights Network (25%), Compute (25%), Storage Network (20%), Automation and Artificial Intelligence (15%) and Security (15%), covering VXLAN EVPN, ACI, UCS and Fibre Channel. Concentrations are 300-610 DCID, 300-615 DCIT, 300-620 DCACI, 300-635 DCNAUTO and 300-640 DCAI. It is aimed at engineers who run Nexus, UCS and ACI environments.',
    quickAnswer: {
      summary: 'CCNP Data Center requires the 350-601 DCCOR core exam (120 minutes, $400, English and Japanese) and one concentration from five options (90 minutes, $300 each). Exam fees total $700, there are no prerequisites, and Cisco grades pass or fail without publishing a cut score.',
      advantages: [
        'DCCOR v1.2 weights are public: Network 25%, Compute 25%, Storage Network 20%, Automation and AI 15%, Security 15%.',
        'Five concentrations cover design, troubleshooting, ACI, automation and AI infrastructure.',
        'Passing DCCOR alone earns the Cisco Certified Specialist - Data Center Core credential.',
        'No prerequisites, and the core and concentration can be taken in either order.'
      ]
    },
    roadmap: [
      'Choose a concentration: DCID, DCIT, DCACI, DCNAUTO or DCAI',
      'Study the five DCCOR v1.2 domains, starting with Network and Compute (25% each)',
      'Pass 350-601 DCCOR (120 minutes, $400)',
      'Pass your concentration exam (90 minutes, $300)',
      'Renew in three years with 80 CE credits or a core exam'
    ],
    prerequisites: 'None. Cisco lists no prerequisites for 350-601 DCCOR or any data center concentration exam.',
    eligibility: 'Open to anyone with a Cisco Certification profile. DCCOR assumes working knowledge of routing, switching, and server and storage fundamentals even though Cisco does not require a prior certificate.',
    examMeta: {
      questions: 'Cisco does not publish question counts for 350-601 DCCOR or the concentration exams',
      time: 'Core 350-601: 120 minutes. Concentration: 90 minutes.',
      pass: 'Pass or fail for each exam; Cisco does not publish passing scores or pass rates',
      fee: '$400 core + $300 concentration = $700 (U.S. price as of October 2026); each retake costs that exam fee again',
      format: 'Computer-based Pearson VUE exams; DCCOR available in English and Japanese, concentrations in English; item types not itemized by Cisco',
      admin: 'Cisco Systems; delivered by Pearson VUE at test centers and online proctoring'
    },
    topics: [
      { name: 'Network', weight: '25%', note: 'DCCOR v1.2 domain 1.0. OSPF, MP-BGP, PIM, FHRP, RSTP+, LACP and vPC, VXLAN EVPN overlays, ACI fabric setup and access policies, software updates.' },
      { name: 'Compute', weight: '25%', note: 'DCCOR v1.2 domain 2.0. Cisco UCS rack and blade servers, fabric interconnects, service profiles and Intersight management.' },
      { name: 'Storage Network', weight: '20%', note: 'DCCOR v1.2 domain 3.0. Fibre Channel, zoning, VSANs, NPV and NPIV, and network storage protocols.' },
      { name: 'Automation and Artificial Intelligence', weight: '15%', note: 'DCCOR v1.2 domain 4.0. On-box Python, EEM, Ansible, REST APIs and AI-powered monitoring tools.' },
      { name: 'Security', weight: '15%', note: 'DCCOR v1.2 domain 5.0. ACI contracts and microsegmentation, device hardening and access control in the data center.' }
    ],
    examEssentials: [
      ['Required exams', 'One core (350-601 DCCOR v1.2) plus one concentration'],
      ['Concentrations', '300-610 DCID, 300-615 DCIT, 300-620 DCACI, 300-635 DCNAUTO, 300-640 DCAI'],
      ['Core length', '120 minutes; passing earns the Specialist - Data Center Core credential and 80 CE credits'],
      ['Concentration length', '90 minutes; each earns its own Specialist credential and 40 CE credits'],
      ['Certification validity', '3 years; renew with 80 CE credits or a core exam'],
      ...ESSENTIALS_COMMON
    ],
    timeline: [
      { stage: 'Core study (DCCOR)', duration: 'Commonly 8-10 weeks (editorial estimate)' },
      { stage: 'Concentration study', duration: 'Commonly 4-6 weeks (editorial estimate)' },
      { stage: 'Exams', duration: '120 minutes (core) plus 90 minutes (concentration)' },
      { stage: 'Results', duration: 'Online within 48 hours for each exam' }
    ],
    costBreakdown: {
      items: [
        { item: '350-601 DCCOR core exam', fee: '$400' },
        { item: 'Concentration exam (DCID, DCIT, DCACI, DCNAUTO or DCAI)', fee: '$300' },
        { item: 'Retake of a failed exam', fee: 'Full fee again ($400 core, $300 concentration)' },
        { item: 'Renewal in three years', fee: '80 CE credits, or the cost of a core exam' }
      ],
      total: '$700 for both exams on first attempts',
      footnote: 'Prices are U.S. list prices as of October 2026 and exclude training and lab costs.'
    },
    difficulty: 'Challenging',
    audience: 'Data center network and infrastructure engineers who operate Nexus, ACI, UCS and Fibre Channel environments.',
    time: 'Commonly 12-16 weeks across both exams',
    cost: '$700 in exam fees',
    faqs: [
      { q: 'What exams are required for CCNP Data Center?', a: 'CCNP Data Center requires the core 350-601 DCCOR (120 minutes, $400) and one concentration. Cisco lists five concentrations: 300-610 DCID, 300-615 DCIT, 300-620 DCACI, 300-635 DCNAUTO and 300-640 DCAI, each 90 minutes and $300. There are no prerequisites, and each passed exam earns a Specialist certification.' },
      { q: 'How much does CCNP Data Center cost?', a: 'CCNP Data Center exam fees total $700 as of October 2026: $400 for 350-601 DCCOR plus $300 for a concentration. A failed exam costs its full fee again after a five-calendar-day wait. Cisco Learning Credits can pay for exams, and optional training from Cisco U. or Learning Partners is extra.' },
      { q: 'What is on the 350-601 DCCOR exam?', a: 'The 350-601 DCCOR v1.2 exam has five domains: Network 25%, Compute 25%, Storage Network 20%, Automation and Artificial Intelligence 15% and Security 15%. Topics include OSPF, MP-BGP, vPC, VXLAN EVPN, ACI fabric and access policies, UCS, Fibre Channel zoning, on-box Python and ACI contracts.' },
      { q: 'Is the CCNP Data Center exam hard?', a: 'It is a broad professional exam. Network and Compute are half of DCCOR, and the Storage Network domain at 20% surprises candidates who have only worked on Ethernet. Cisco publishes no pass rate. Engineers who already run Nexus, UCS and ACI daily are best placed, while campus engineers need extra lab time on Fibre Channel and VXLAN.' },
      { q: 'What is the passing score for 350-601 DCCOR?', a: 'Cisco does not publish a passing score for 350-601 DCCOR or any data center concentration. Each exam is graded pass or fail, with results online within 48 hours. Because no cut score is published, spread study across all five domains according to the published weights.' },
      { q: 'Which CCNP Data Center concentration should I choose?', a: 'Pick the concentration that matches your daily work. 300-620 DCACI suits ACI implementers, 300-615 DCIT suits operations and troubleshooting, 300-610 DCID suits design roles, 300-635 DCNAUTO suits automation, and 300-640 DCAI covers AI infrastructure. Cisco lists all five on its exams-and-training page, each 90 minutes and $300.' },
      { q: 'How long is CCNP Data Center valid?', a: 'CCNP Data Center is valid for three years. You can renew it by passing the DCCOR core again, advancing to the next level, or earning 80 Continuing Education credits. A core exam awards 80 credits and a concentration awards 40. Cisco does not grant extensions, so an expired certification means repeating the full exam process.' }
    ],
    summaryPoints: [
      'CCNP Data Center needs 350-601 DCCOR (120 minutes, $400) plus one 90-minute, $300 concentration.',
      'DCCOR v1.2 weights are Network 25%, Compute 25%, Storage Network 20%, Automation and AI 15%, Security 15%.',
      'Current concentrations are DCID, DCIT, DCACI, DCNAUTO and DCAI.',
      'Cisco publishes no passing score or pass rate; the certification is valid for three years.'
    ],
    relatedSlugs: ['cisco-ccie-data-center', 'cisco-ccnp-enterprise', 'cisco-ccnp-automation', 'cisco-ccna'],
    sourceUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccnp-data-center/exams-and-training.html',
    reviewed: '2026-10',
    confidence: 'medium'
  }
];

export default { programs, exams };
