const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers networking and IT certifications. Exam structure, fees and rules come from the vendor certification pages (Cisco, CompTIA, AWS, Google), which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Cisco\'s CCST Networking certification page and exam topics, and BLS OOH Computer Support Specialists (SOC 15-1231), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$61,550 median for computer support specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CCST" — the Cisco Certified Support Technician credential certifies entry-level networking support skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Computer Support Specialists, SOC 15-1231, which had a May 2024 median wage of $61,550, with the lowest 10 percent under $37,670 and the highest 10 percent above $101,440. The fit is deliberate: CCST holders work in help-desk, NOC technician and entry-level support roles, and BLS counted 614,800 computer support specialist jobs in 2024, projecting 6 percent growth from 2024 to 2034 with about 62,900 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, and the CCST is explicitly an entry-level credential, so the realistic benchmark for a new holder sits at or below the median, climbing with experience and further certification. Read the number as the market for the support occupation, and note that the CCST is often the first rung on the Cisco ladder toward the CCNA and beyond.',
    rows: [
      { label: 'Median annual wage, computer support specialists', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $37,670', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $101,440', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Median, network administrators (senior track)', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' }
    ],
    growth: 'BLS projects 6 percent growth for computer support specialists from 2024 to 2034, about 62,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'Cisco publishes no pass rate — it publishes the format: roughly 50 questions in 60 minutes, with a passing score set by Cisco',
    summary: 'Cisco does not publish cohort pass rates for the CCST exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Cisco does publish is the format: the CCST Networking exam (100-150) has roughly 50 questions with a 60-minute time limit, delivered at Pearson VUE centres or through online proctoring, with a passing score set by Cisco (the exam reports a scaled result). The CCST certifications — Networking, Cybersecurity and IT Support — are Cisco\'s entry-level tier, positioned below the CCNA, and each is a single-exam credential. The exam content follows the published exam topics: networking fundamentals (the OSI model, IP addressing, common protocols), basic network security concepts, and troubleshooting common connectivity issues. The absence of a published pass rate is not an absence of standards: the CCST is an accessible entry exam, but it is still a certification with a passing standard, and candidates should target well above the minimum on practice. The practical reading: use Cisco\'s official exam topics and free study resources, which are plentiful for the entry tier, and treat the CCST as the foundation of a longer certification path.',
    source: { label: 'Cisco - CCST Networking certification', url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/specialist/ccst-networking.html' },
    caveat: 'Cisco publishes the format but no pass rate; the passing score is reported as a scaled result without a published cohort rate.'
  },
  studyPlan: {
    summary: 'The CCST Networking exam (100-150) is a roughly 50-question, 60-minute single-exam credential, and its curriculum is the published exam topics: networking fundamentals — the OSI model, TCP/IP, IPv4/IPv6 addressing and subnetting, common protocols and network devices; basic network security concepts — threats, authentication and best practices; and troubleshooting common connectivity issues. A defensible plan runs 30 to 60 hours over 3 to 5 weeks. Weeks 1-2 build the fundamentals: the OSI model, IP addressing and subnetting, and the role of switches, routers and access points. Weeks 3-4 cover security basics and troubleshooting: common threats, authentication, and the systematic steps for diagnosing connectivity problems, with hands-on work in a virtual lab or packet-tracer-style tool. Week 5 adds practice-question drilling and a timed simulation. The plan is short because the scope is entry-level, but the exam rewards real understanding of addressing and troubleshooting, so hands-on practice with a network simulator matters more than memorisation. Candidates who pass the CCST typically move to the CCNA next, and the CCST material forms the first section of CCNA study.',
    totalHours: '30-60 hours over 3-5 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Networking fundamentals', tasks: ['OSI model and TCP/IP layers', 'IPv4/IPv6 addressing and subnetting', 'Switches, routers and access points'], hours: 20 },
      { label: 'Weeks 3-4', focus: 'Security and troubleshooting', tasks: ['Common threats and authentication basics', 'Troubleshooting steps for connectivity issues', 'Hands-on labs in a simulator'], hours: 20 },
      { label: 'Week 5', focus: 'Drill and simulate', tasks: ['Practice-question drilling in volume', 'One timed 60-minute simulation', 'Review weak topics'], hours: 10 }
    ],
    variants: [
      { label: 'Complete beginner', detail: 'Add 2 weeks of IT fundamentals before the networking material; the CCST assumes basic computer literacy.' },
      { label: 'CCNA-bound', detail: 'The CCST material is the first CCNA section; study it with the CCNA depth in mind to avoid rework.' }
    ]
  },
  prepStrategies: {
    summary: 'The CCST Networking exam rewards genuine understanding of addressing and troubleshooting, so the dominant strategy is hands-on practice in a network simulator: build small networks, break them and fix them, because the exam items test what a support technician does. Second, master subnetting and IP addressing until they are reflexive — the exam asks addressing questions directly, and every troubleshooting scenario depends on them. Third, learn the OSI model as a troubleshooting tool: identify which layer a described problem sits at, because the exam rewards systematic diagnosis. Fourth, use Cisco\'s official exam topics and the free learning resources on the Cisco Learning Network, which are the authoritative scope for the entry tier. Fifth, take at least one timed simulation at the real 60-minute format; the pace is forgiving but only if you have practised it. Finally, treat the CCST as the start of a path: the CCNA builds directly on this material, so study for understanding rather than a checkbox, and the time will be reused.',
    items: [
      { title: 'Practise in a simulator', detail: 'Build, break and fix small networks; the exam tests what a technician does.' },
      { title: 'Automate subnetting', detail: 'Addressing is tested directly and underpins every troubleshooting scenario.' },
      { title: 'Use the OSI model to diagnose', detail: 'Identify the layer of a described problem; the exam rewards systematic diagnosis.' },
      { title: 'Use the official topics and Learning Network', detail: 'Free and authoritative for the entry tier.' },
      { title: 'Run one timed simulation', detail: '60 minutes for ~50 questions; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'CCST Networking prep is inexpensive because the entry tier has rich free resources. Cisco\'s official exam topics, the Cisco Learning Network and Cisco\'s free networking courses cover most of the scope at no cost; packet-tracer-style simulators and network simulation tools are free for learners. Third-party prep is a smaller market than for the CCNA: a few providers sell CCST courses (roughly $50-$200) and question banks ($30-$100). The exam fee itself is about $125. A realistic total budget is $150 to $400 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco exam topics + Learning Network', values: ['Free', 'Official scope and community', 'The authoritative map; read it first'] },
      { label: 'Cisco free courses', values: ['Free', 'Online learning', 'Fundamentals and security basics'] },
      { label: 'Network simulators', values: ['Free-$50', 'Virtual lab tools', 'Hands-on practice building and troubleshooting'] },
      { label: 'Third-party CCST courses', values: ['$50-$200', 'Self-paced video courses', 'Structured walkthrough of the topics'] },
      { label: 'Question banks', values: ['$30-$100', 'Online practice items', 'Volume drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CCST exam fee is about $125; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CCST mistake is memorising definitions instead of learning to troubleshoot: candidates who can recite the OSI layers but cannot diagnose a described connectivity problem fail the scenario items. The fix is simulator practice from the start. The second mistake is skipping subnetting, the highest-yield topic on the exam — every addressing and troubleshooting item depends on it. Third, candidates rush the exam because it is entry-level and then find the 60-minute window tight if they have never timed themselves; run one simulation. Fourth, some candidates study only one source and miss topics that the official exam topics list but a single course under-weights; read the official topics as the scope map. Finally, treating the CCST as an end rather than a foundation wastes the momentum — the material is the first section of the CCNA, so study for understanding and continue the path.',
    items: [
      { mistake: 'Memorising instead of troubleshooting', fix: 'Diagnose described problems in a simulator; the exam tests practice.' },
      { mistake: 'Skipping subnetting', fix: 'Automate addressing; it underpins every troubleshooting item.' },
      { mistake: 'Rushing without a timed run', fix: 'One timed 60-minute simulation before the real exam.' },
      { mistake: 'Studying one source only', fix: 'Use the official exam topics as the scope map.' },
      { mistake: 'Treating CCST as the finish', fix: 'The material is the first CCNA section; study for understanding and continue.' }
    ]
  },
  questionTypes: {
    summary: 'The CCST Networking exam is a roughly 50-question multiple-choice exam in 60 minutes, with some items using diagrams of small networks. The items test networking fundamentals, basic security concepts and troubleshooting: identify the correct device, addressing value, protocol behaviour, or the systematic step for diagnosing a described connectivity problem. The exam is scenario-flavoured for a support technician: "a user cannot reach the internet from a workstation — what is the most likely first check?" style items. Samples below are editor-written illustrations of the published exam topics, not live exam items; they show the support-role style of the real items.',
    types: [
      { name: 'Knowledge items', share: 'Roughly half', detail: 'OSI model, addressing, protocols and device roles.' },
      { name: 'Troubleshooting scenario items', share: 'Roughly half', detail: 'Connectivity problems with the correct diagnostic step or fix.' }
    ],
    samples: [
      {
        prompt: 'A user\'s workstation cannot reach the internet but can reach the local server. The most likely first check is:',
        options: ['A. The default gateway configuration', 'B. The display driver', 'C. The power supply', 'D. The monitor connection'],
        answer: 'A',
        explanation: 'Local reachability with no internet reachability points to the gateway — the router or its configuration — as the first check. The display driver, power supply and monitor affect the workstation locally, not connectivity to the internet.'
      },
      {
        prompt: 'Which device connects different networks and forwards packets based on IP addresses?',
        options: ['A. A router', 'B. A switch', 'C. A hub', 'D. An access point'],
        answer: 'A',
        explanation: 'Routers connect networks and forward packets by IP address. Switches forward frames within a LAN, hubs repeat electrical signals, and access points provide wireless attachment — none routes between networks.'
      },
      {
        prompt: 'A technician suspects a device\'s credentials were exposed in a phishing attack. The most appropriate immediate response is:',
        options: ['A. Change the credentials and review for unauthorised access', 'B. Ignore it since no data loss is confirmed', 'C. Reboot the device', 'D. Disable the firewall'],
        answer: 'A',
        explanation: 'After suspected credential exposure, the standard response is to change the credentials and check for unauthorised access. Ignoring it, rebooting, or disabling the firewall each leave the exposure open or worsen it.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The CCST Networking exam is a roughly 50-question, 60-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 70 seconds per item, flag uncertain items for review, and finish with time to spare — the window is generous if you have practised. You receive your score on screen, with official results following. If you fail, retake per Cisco scheduling rules. On a pass, the CCST Networking certification is valid for three years; Cisco\'s entry-tier certifications have a defined validity period, and the credential does not require the continuing-education load of the professional tier. The afterwards matters: the CCST is a foundation — plan the next step on the Cisco ladder (typically the CCNA), and use the momentum while the material is fresh.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '~50 questions in 60 minutes; pace ~70 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Plan the next step — typically the CCNA — while the material is fresh.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '60 minutes for ~50 questions; the clock does not pause',
      'Retake rules apply after a fail'
    ],
    afterwards: 'On a pass, your CCST Networking is valid for three years. On a fail, retake after additional study. Use the material as the foundation for the CCNA.'
  }
};

export default data;
