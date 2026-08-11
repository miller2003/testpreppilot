const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CompTIA and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CompTIA\'s Server+ certification page (SK0-005) and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Server+" — the CompTIA Server+ certification validates server administration skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420. The fit is deliberate: Server+ holders work as server administrators, systems administrators and infrastructure technicians who install, configure, manage and troubleshoot servers — squarely inside this occupation. BLS counted 217,500 network and computer systems administrator jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 15,100 openings a year; the modest headline growth reflects infrastructure work shifting toward cloud and virtualised platforms, which the Server+ curriculum covers. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a vendor-neutral signal of server administration competency. Read the number as the relevant market benchmark for the occupation.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, computer support specialists (entry track)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'CompTIA publishes no pass rate — it publishes the passing score: 750 of 900, with a 100-question, 90-minute exam',
    summary: 'CompTIA does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What CompTIA does publish is the format and the passing standard: the Server+ exam (SK0-005) has a maximum of 100 questions, a 90-minute time limit, and a passing score of 750 on the 100-900 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years, renewable through CompTIA\'s continuing education program. The exam content follows the published exam objectives: server hardware; server administration; storage; security; networking; and disaster recovery. The absence of a published pass rate is not an absence of standards: the 750 line on a 100-900 scale is a meaningful bar, and the exam rewards practical knowledge of physical and virtual server environments. The practical reading: target well above 750 on practice — 80 percent-plus — and use CompTIA\'s official exam objectives and CertMaster practice materials, the closest thing to the real item style.',
    source: { label: 'CompTIA - Server+ certification', url: 'https://www.comptia.org/certifications/server' },
    caveat: 'CompTIA publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Server+ exam (SK0-005) is a 100-question, 90-minute exam with a 750/900 passing score, built on the published exam objectives: server hardware; server administration; storage; security; networking; and disaster recovery. The exam is vendor-neutral, covering physical and virtual servers, and rewards practical administration knowledge rather than product-specific recall. A defensible plan runs 80 to 120 hours over 6 to 8 weeks. Weeks 1-2 cover hardware: server form factors, components, and the build and upgrade process. Weeks 3-4 cover administration: operating system installation, configuration, the boot process, and routine administration tasks. Week 5 covers storage: RAID levels, storage types and provisioning. Weeks 6-7 cover security, networking and disaster recovery: hardening, network services, and backup and recovery planning. Week 8 adds question-bank drilling and a full timed practice exam at the real format. The plan is practical because the exam rewards hands-on administration knowledge; working with a real or virtual server environment at any scale accelerates every phase.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Server hardware', tasks: ['Form factors, components and the build process', 'Upgrade and hardware troubleshooting', 'Hands-on or virtual server work'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Server administration', tasks: ['OS installation, configuration and the boot process', 'Routine administration tasks and tools', 'User and resource management'], hours: 30 },
      { label: 'Week 5', focus: 'Storage', tasks: ['RAID levels and storage types', 'Storage provisioning and management'], hours: 15 },
      { label: 'Weeks 6-7', focus: 'Security, networking, DR', tasks: ['Server hardening and access control', 'Network services and troubleshooting', 'Backup and disaster recovery planning'], hours: 30 },
      { label: 'Week 8', focus: 'Drill and simulate', tasks: ['Question-bank drilling in volume', 'One full timed practice exam', 'Review weak objectives'], hours: 15 }
    ],
    variants: [
      { label: 'Working in IT support', detail: 'Compress the hardware phase; spend the extra time on storage, security and DR scenarios.' },
      { label: 'Career-changer', detail: 'Add 2 weeks of IT fundamentals; the exam assumes basic server familiarity.' }
    ]
  },
  prepStrategies: {
    summary: 'The Server+ exam rewards practical administration knowledge, so the dominant strategy is hands-on work: install, configure and troubleshoot a server — even a virtual one — because the exam items test what an administrator does. Second, master the exam objectives as the scope map: CompTIA publishes them for free, and they are the authoritative list of what can appear; use them to audit every study resource. Third, drill storage and disaster recovery deliberately: RAID levels, storage types and backup strategies are a distinct block, and candidates with no storage background routinely under-prepare it. Fourth, use CompTIA\'s official CertMaster practice products, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 750 line leaves no margin. Fifth, take at least one full timed practice exam; 100 questions in 90 minutes is under a minute per item, and the pacing matters. Finally, remember the certification is valid for three years with continuing education — plan the renewal cycle from the start.',
    items: [
      { title: 'Work a real or virtual server', detail: 'Install, configure and troubleshoot; the exam tests what an administrator does.' },
      { title: 'Audit against the objectives', detail: 'The free official objectives are the scope map; use them to audit resources.' },
      { title: 'Drill storage and DR', detail: 'RAID, storage types and backup planning are a distinct block.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 750/900 line leaves no margin.' },
      { title: 'Plan the three-year renewal', detail: 'The certification uses CompTIA CE; log credits as you earn them.' }
    ]
  },
  resourceComparison: {
    summary: 'Server+ prep spans official CompTIA resources and third-party courses. CompTIA\'s own products — the exam objectives (free), CertMaster Learn and CertMaster Practice — are the authoritative source; CertMaster bundles typically run $200-$500 depending on the combination. Third-party providers sell Server+ courses and question banks from roughly $50 to $500; the market is smaller than for A+ or Security+, so prices and quality vary more. Hands-on practice can be done at no cost with a virtual machine. A realistic total budget is $350 to $900 including the exam fee (about $369). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA exam objectives', values: ['Free', 'Official PDF', 'The authoritative scope; audit every resource against it'] },
      { label: 'CertMaster Learn + Practice', values: ['$200-$500', 'Online learning + practice', 'The official learning path'] },
      { label: 'Third-party courses', values: ['$100-$500', 'Video courses and labs', 'Structured walkthrough of the objectives'] },
      { label: 'Question banks', values: ['$50-$150', 'Online practice items', 'Volume drilling before the exam'] },
      { label: 'Virtual machines', values: ['$0', 'Hands-on environment', 'Practical server administration practice'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SK0-005 exam fee is about $369; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Server+ mistake is studying without hands-on work: candidates who read about server administration but never install or configure a server find the practical items hard to answer confidently. The fix is virtual-machine practice from the start. The second mistake is under-preparing storage and disaster recovery, a distinct block that candidates with no storage background routinely lose. Third, candidates ignore the free official objectives and rely on a single course, missing the exact scope; audit every resource against the objectives. Fourth, many candidates misjudge the pace — 100 questions in 90 minutes is under a minute per item, so a timed simulation is essential. Fifth, some candidates treat the exam as "the easy CompTIA exam" and under-study; the 750 line is a meaningful bar and the breadth is real. Finally, ignoring the three-year CE renewal cycle is a quiet mistake; plan it from the start.',
    items: [
      { mistake: 'Studying without hands-on work', fix: 'Install and configure a server in a VM; the exam tests practice.' },
      { mistake: 'Under-preparing storage and DR', fix: 'RAID, storage types and backup planning are a distinct block; drill them.' },
      { mistake: 'Relying on one course', fix: 'Audit every resource against the free official objectives.' },
      { mistake: 'Misjudging the pace', fix: '100 questions in 90 minutes; run a timed simulation.' },
      { mistake: 'Ignoring the renewal cycle', fix: 'The certification is valid three years with CE; plan it early.' }
    ]
  },
  questionTypes: {
    summary: 'The Server+ exam (SK0-005) has up to 100 questions in 90 minutes, with multiple-choice and performance-based items. The items are practical: a described server situation — a boot failure, a storage problem, a security issue, an administration task — followed by the correct diagnostic step, tool, configuration or practice. The exam covers server hardware, administration, storage, security, networking and disaster recovery across the published objectives. Samples below are editor-written illustrations of the published exam objectives, not live exam items; they show the practical administration style of the real items.',
    types: [
      { name: 'Multiple-choice items', share: 'Majority', detail: 'Concept, configuration and troubleshooting items across the objectives.' },
      { name: 'Performance-based items', share: 'Meaningful share', detail: 'Interactive tasks on configurations and diagnostics.' }
    ],
    samples: [
      {
        prompt: 'A server fails to boot and displays an error that no boot device was found. The most likely cause is:',
        options: ['A. The boot device order or a failed boot disk', 'B. A monitor failure', 'C. An incorrect time zone', 'D. A depleted UPS battery'],
        answer: 'A',
        explanation: 'A "no boot device" error points to the boot configuration — device order, cabling or a failed boot disk. Monitor, time-zone and UPS issues do not prevent the system from finding a boot device.'
      },
      {
        prompt: 'Which RAID level provides mirroring without parity for fault tolerance with the fewest disks?',
        options: ['A. RAID 1', 'B. RAID 0', 'C. RAID 5', 'D. RAID 6'],
        answer: 'A',
        explanation: 'RAID 1 mirrors data across two disks, providing fault tolerance without parity using the fewest disks. RAID 0 has no redundancy, and RAID 5/6 require parity with three or more disks.'
      },
      {
        prompt: 'An administrator must harden a new web server before production. The most appropriate first step is:',
        options: ['A. Remove unnecessary services and apply current patches', 'B. Connect it to the production network immediately', 'C. Disable the firewall to simplify access', 'D. Create a public admin account'],
        answer: 'A',
        explanation: 'Hardening begins with reducing the attack surface — removing unneeded services and applying patches — before connecting to production. Immediate connection, disabled firewalls and public admin accounts each increase exposure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam objectives, not live exam items.'
  },
  examDay: {
    summary: 'The Server+ exam is a 100-question, 90-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at under a minute per item, flag uncertain items for review, and budget extra time for the performance-based items. You receive your score on screen immediately, with the official result and score report following; CompTIA reports your scaled score against the 750 line. If you fail, CompTIA allows retakes after a waiting period. On a pass, the certification is valid for three years, renewable through continuing education units (CEUs) or by retaking. The afterwards matters: log your CEUs as you earn them, because CompTIA audits renewals, and record the expiration date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '100 questions in 90 minutes; pace under a minute per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 750/900 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and start logging CEUs.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '90 minutes for up to 100 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your Server+ is valid for three years; earn CEUs (or retake) to renew. On a fail, retake after additional objectives-focused study.'
  }
};

export default data;
