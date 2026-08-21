const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers networking and IT certifications. Exam structure, fees and rules come from the vendor certification pages (Cisco, CompTIA, AWS, Google), which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Cisco\'s CCNP Enterprise certification pages and the 350-401 ENCOR exam topics, and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CCNP" — the Cisco Certified Network Professional credential validates professional-level networking skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420. The fit is deliberate: CCNP Enterprise holders work as senior network engineers, network architects and infrastructure leads — the professional tier above the network administrator baseline — so the realistic benchmark for the credential sits in the upper half of the distribution. BLS counted 217,500 network and computer systems administrator jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 15,100 openings a year; the modest headline growth reflects the shift of infrastructure work toward cloud and automation, which is precisely the direction the modern CCNP Enterprise curriculum pushes. The limitation to state plainly: the BLS median covers the whole occupation at all levels, and senior network engineers typically earn well above it in employer surveys, which are not BLS data; read the government figure as the market floor for the occupation.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, software developers (adjacent track)', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'Cisco publishes no pass rate — it publishes the passing score: 825 of 1000, with a 102-question, 120-minute core exam',
    summary: 'Cisco does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Cisco does publish is the format and the passing standard: the CCNP Enterprise core exam (350-401 ENCOR) has 102 questions, a 120-minute time limit, and a passing score of 825 on the 300-1000 scale. Earning the CCNP Enterprise requires passing the core exam plus one concentration exam (such as 300-410 ENARSI), each with its own item count, time limit and passing score. The exams are delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years, renewable through continuing education credits or recertification exams. The absence of a published pass rate is not an absence of standards: the ENCOR 825 line on a 300-1000 scale is high, and the exam rewards hands-on configuration knowledge of routing, switching, wireless, automation and security fundamentals. The practical reading: target 85 percent-plus on practice exams and use Cisco\'s official exam topics and practice materials, the closest thing to the real item style.',
    source: { label: 'Cisco - CCNP Enterprise certification', url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise.html' },
    caveat: 'Cisco publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CCNP Enterprise is a two-exam certification: the 350-401 ENCOR core exam (102 questions, 120 minutes, 825/1000 passing) plus one concentration exam such as 300-410 ENARSI. ENCOR covers the enterprise network at the professional level: architecture, virtualisation and network assurance; dual-stack routing and switching; wireless; automation and programmability (Python, APIs, controller-based networking); and security fundamentals. A defensible plan runs 150 to 250 hours over 12 to 16 weeks. Weeks 1-4 build the routing and switching core: OSPF, EIGRP, BGP at the professional level, with heavy lab work. Weeks 5-7 cover architecture, virtualisation and wireless: SD-Access/SD-WAN concepts, device virtualisation and wireless design and operations. Weeks 8-10 cover automation and programmability: Python fundamentals for network engineers, REST APIs, NETCONF/RESTCONF and controller-based automation. Weeks 11-12 drill security fundamentals and integration scenarios. Weeks 13-16 add question-bank drilling and two full timed practice exams, then the concentration exam plan. The plan is lab-heavy because ENCOR rewards configuration knowledge, and the concentration exam adds another 6-8 weeks on top for most candidates.',
    totalHours: '150-250 hours over 12-16 weeks (core), plus 40-80 hours for the concentration exam',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Routing and switching core', tasks: ['OSPF, EIGRP and BGP at the professional level', 'Layer 2 technologies and redundancy', 'Lab every protocol until configuration is fluent'], hours: 60 },
      { label: 'Weeks 5-7', focus: 'Architecture, virtualisation, wireless', tasks: ['SD-Access and SD-WAN concepts', 'Device virtualisation and network assurance', 'Wireless design and operations'], hours: 45 },
      { label: 'Weeks 8-10', focus: 'Automation and programmability', tasks: ['Python for network engineers', 'REST APIs, NETCONF/RESTCONF', 'Controller-based automation labs'], hours: 45 },
      { label: 'Weeks 11-12', focus: 'Security fundamentals', tasks: ['Security controls in the enterprise network', 'Integration scenarios across the domains', 'First full practice exam'], hours: 30 },
      { label: 'Weeks 13-16', focus: 'Drill and mocks', tasks: ['Question-bank drilling in volume', 'Second full timed practice exam', 'Concentration exam study plan'], hours: 40 }
    ],
    variants: [
      { label: 'CCNA already earned', detail: 'Compress the foundation; the professional-level depth and automation are the new material.' },
      { label: 'Choosing the concentration', detail: 'ENARSI (advanced routing) is the most common pick; review the concentration exam topics before committing.' }
    ]
  },
  prepStrategies: {
    summary: 'The ENCOR exam rewards hands-on configuration knowledge, so the dominant strategy is lab work: every protocol should be configured in a lab environment until the configuration is fluent, because the exam items test what a professional network engineer does, not what a textbook says. Second, treat automation and programmability as a first-class domain: candidates with no Python or API experience routinely under-prepare this block, which is a large part of what distinguishes the modern CCNP. Third, use the official Cisco exam topics as the scope map, and Cisco\'s practice materials where available, because third-party courses drift from the current exam. Fourth, take at least two full timed practice exams; 102 questions in 120 minutes is about 70 seconds per item, and the scenario items are reading-heavy. Fifth, plan the concentration exam deliberately: the two-exam structure means the certification timeline includes the concentration choice, and candidates who pick a concentration aligned with their job (advanced routing for enterprise engineers, security for security-focused roles) study more efficiently. Finally, budget for the three-year renewal cycle from the start.',
    items: [
      { title: 'Lab everything', detail: 'Configure every protocol until fluent; the exam tests professional practice.' },
      { title: 'Master automation', detail: 'Python, APIs and controller-based automation are first-class ENCOR domains.' },
      { title: 'Use the official exam topics', detail: 'The authoritative scope; third-party courses drift from the current exam.' },
      { title: 'Run two full simulations', detail: '102 questions in 120 minutes; drill the pace.' },
      { title: 'Plan the concentration', detail: 'Pick the concentration aligned with your job; it shapes the whole study timeline.' }
    ]
  },
  resourceComparison: {
    summary: 'CCNP Enterprise prep centres on lab access plus a course. Cisco\'s official learning resources include the official exam topics (free), Cisco U. courses and the Cisco Learning Network; the official Cisco Press books for ENCOR are the standard reference (roughly $50-$80). Third-party training companies offer full ENCOR courses and labs from roughly $100 to $1,000 depending on format (self-paced vs instructor-led). Lab access is non-negotiable — either a paid lab subscription (roughly $50-$200) or a local virtual lab environment — because the exam rewards configuration practice. A realistic total budget is $400 to $1,500 per exam attempt including the $400 core exam fee and the $300 concentration fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Cisco exam topics + Learning Network', values: ['Free', 'Official scope and community', 'The authoritative map; read it first'] },
      { label: 'Cisco Press ENCOR Official Cert Guide', values: ['$50-$80', 'Printed or digital book', 'The standard structured reference'] },
      { label: 'Cisco U. / official courses', values: ['$100-$800', 'Self-paced or instructor-led', 'Official instruction aligned to the exam'] },
      { label: 'Third-party courses + labs', values: ['$100-$1,000', 'Video courses with lab environments', 'Structured learners needing lab time'] },
      { label: 'Standalone lab subscriptions', values: ['$50-$200', 'Online lab environments', 'Hands-on configuration practice'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ENCOR is $400 and concentration exams about $300; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common ENCOR mistake is studying without labs: candidates who read the official guide but never configure OSPF, BGP or an automation script find the exam\'s configuration-heavy items impossible to answer confidently. The fix is lab time from week one. The second mistake is under-preparing automation and programmability, the domain that most distinguishes the modern CCNP from older-generation exams. Third, candidates underestimate the two-exam structure and plan only the core, then stall on the concentration choice; decide the concentration early. Fourth, many candidates skip full timed simulations and misjudge the 70-second-per-item pace on reading-heavy scenarios. Fifth, some candidates rely on a single third-party course without reading the official exam topics, losing the exact scope. Finally, ignoring the three-year renewal cycle is a quiet mistake: the certification expires, and continuing-education credits must be earned or a recertification exam passed.',
    items: [
      { mistake: 'Studying without labs', fix: 'Configure every protocol in a lab until fluent; the exam tests practice.' },
      { mistake: 'Under-preparing automation', fix: 'Python, APIs and controller automation are first-class domains; drill them.' },
      { mistake: 'Planning only the core exam', fix: 'The CCNP is two exams; decide the concentration early.' },
      { mistake: 'Skipping timed simulations', fix: '102 questions in 120 minutes; run two full simulations.' },
      { mistake: 'Ignoring the renewal cycle', fix: 'The certification expires in three years; plan CE credits or recert.' }
    ]
  },
  questionTypes: {
    summary: 'The 350-401 ENCOR exam has 102 questions in 120 minutes, with a mix of multiple-choice, drag-and-drop, and simulation-based items that present router and switch configurations or automation scenarios. The exam tests professional-level knowledge across the domains: architecture, virtualisation and network assurance; dual-stack routing and switching; wireless; automation and programmability; and security fundamentals. Many items present an actual configuration or topology and ask for the correct command, fix, or analysis — the style that rewards hands-on practice. Samples below are editor-written illustrations of the published exam topics, not live exam items; they show the configuration-flavoured style of the real items.',
    types: [
      { name: 'Multiple-choice and multiple-response', share: 'Majority', detail: 'Concept, configuration and troubleshooting items across the domains.' },
      { name: 'Simulation / lab-style items', share: 'Meaningful share', detail: 'Configurations and topologies with the correct command or fix.' },
      { name: 'Drag-and-drop items', share: 'Minority', detail: 'Matching concepts, steps or components.' }
    ],
    samples: [
      {
        prompt: 'A network engineer must advertise a directly connected route into an OSPF process. The most appropriate configuration is:',
        options: ['A. network 192.168.1.0 0.0.0.255 area 0', 'B. ip route 192.168.1.0 255.255.255.0 null 0', 'C. redistribute static', 'D. default-information originate'],
        answer: 'A',
        explanation: 'The network statement with the wildcard mask and area places the directly connected prefix into the OSPF process — the standard configuration. A static null route, static redistribution or default-origination each address different needs, not this one.'
      },
      {
        prompt: 'Which technology provides loop prevention and redundancy in a switched enterprise network?',
        options: ['A. Spanning Tree Protocol (STP)', 'B. NAT', 'C. DNS', 'D. DHCP'],
        answer: 'A',
        explanation: 'STP prevents loops in switched networks while maintaining redundancy. NAT, DNS and DHCP are addressing and naming services with no loop-prevention role in the switching plane.'
      },
      {
        prompt: 'A network engineer automates device configuration using a model-driven approach. Which protocol is designed for this purpose?',
        options: ['A. NETCONF/YANG', 'B. Telnet', 'C. SNMPv1 polling', 'D. TFTP'],
        answer: 'A',
        explanation: 'NETCONF with YANG data models is the standard model-driven configuration protocol. Telnet and TFTP are legacy tools without structured data models, and SNMPv1 polling is primarily monitoring, not configuration.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The 350-401 ENCOR exam is a 102-question, 120-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $400 fee. Pace at about 70 seconds per item, flag uncertain items for review, and budget extra time for the simulation-style items, which take longer than multiple-choice. You receive your score immediately on screen against the 825/1000 passing line. If you fail, Cisco allows retakes after a waiting period. On a pass, you must also pass the chosen concentration exam to earn the CCNP Enterprise; the certification is then valid for three years, renewable through continuing education credits or recertification exams. The afterwards matters: schedule the concentration exam while the core material is fresh, and record the certification\'s expiration date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '102 questions in 120 minutes; pace ~70 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 825/1000 passing line.' },
      { time: 'Next', detail: 'Schedule the concentration exam; record the three-year validity date.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '120 minutes for 102 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'Pass the core exam, then pass one concentration exam to earn the CCNP Enterprise. The certification is valid for three years; renew with continuing education credits or recertification exams.'
  }
};

export default data;
