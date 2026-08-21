const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers security and IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (EC-Council), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against EC-Council\'s Certified Ethical Hacker (CEH) pages and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CEH" — the Certified Ethical Hacker credential validates offensive-security knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780. The fit is deliberate: CEH holders work as penetration testers, security analysts and red-team members, all inside or directly adjacent to the information-security occupation, and BLS counted 182,300 information security analyst jobs in 2024, projecting a striking 30 percent growth from 2024 to 2034 with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the CEH\'s value is as a recognised offensive-security signal that many employers — especially government contractors and MSSPs — require or prefer for penetration-testing roles. Read the number as the market for the occupation, with the CEH concentrated in the security-testing segment of it.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $71,280', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $173,780', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Projected openings per year', value: '~17,500', note: 'BLS OOH, SOC 15-1212, 2024-2034' }
    ],
    growth: 'BLS projects 30 percent growth for information security analysts from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'EC-Council publishes no official pass rate — the CEH exam format is 125 questions in 4 hours, with the score reported against EC-Council\'s passing standard',
    summary: 'EC-Council does not publish cohort pass rates for the CEH exam, and third-party estimates are not official data, so we do not treat them as authoritative. What EC-Council does publish is the format: the CEH (312-50) exam has 125 multiple-choice questions with a 4-hour time limit, delivered by computer through Pearson VUE or ECC exam centres, and the result is reported against EC-Council\'s passing standard (the scaled passing score is not published as a simple percentage). The exam content follows the published blueprint: the 20 CEH modules covering information security threats and attack vectors, reconnaissance, scanning, enumeration, vulnerability analysis, system hacking, malware threats, sniffing, social engineering, denial of service, session hijacking, web application attacks, wireless attacks, cryptography, and the CEH practical toolkit. The absence of a published pass rate is not an absence of standards: the CEH is a breadth exam, and the 125-question format rewards systematic coverage of the full blueprint rather than deep skill in one area. The practical reading: prepare with the blueprint as the scope map, drill the tool-and-technique items, and budget for the retake possibility, because candidates who study only their favourite topics fail the breadth items.',
    source: { label: 'EC-Council - Certified Ethical Hacker (CEH)', url: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/' },
    caveat: 'EC-Council publishes the format but no official pass rate; the passing standard is reported as a scaled score rather than a published percentage.'
  },
  studyPlan: {
    summary: 'The CEH exam is a 125-question, 4-hour exam built on the 20-module blueprint, and it is a breadth exam: the modules span reconnaissance through system hacking, web attacks, wireless, cryptography and the CEH toolkit. A defensible plan runs 120 to 200 hours over 8 to 12 weeks, typically built around an EC-Council training course or a structured alternative. Weeks 1-2: the foundations — networking and security fundamentals, the threat-and-attack-vector model, and the recon, scanning and enumeration modules. Weeks 3-4: the attack modules — system hacking, malware threats, sniffing, social engineering and denial of service. Weeks 5-6: the application and infrastructure modules — session hijacking, web application attacks, SQL injection, wireless attacks and IoT. Weeks 7-8: the crypto and tooling modules — cryptography, cloud security, and the CEH toolkit of tools and their uses. Weeks 9-12: question-bank drilling in volume and full timed practice exams at the real 125-question, 4-hour format. The plan is breadth-driven because the exam rewards coverage; candidates who front-load the modules they enjoy and skip the rest fail the breadth items.',
    totalHours: '120-200 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Foundations and recon', tasks: ['Network and security fundamentals', 'Reconnaissance, scanning and enumeration', 'Vulnerability analysis'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Attack modules', tasks: ['System hacking and privilege escalation', 'Malware threats and sniffing', 'Social engineering and denial of service'], hours: 35 },
      { label: 'Weeks 5-6', focus: 'Applications and infrastructure', tasks: ['Session hijacking and web attacks', 'SQL injection and XSS', 'Wireless attacks and IoT'], hours: 35 },
      { label: 'Weeks 7-8', focus: 'Crypto and tools', tasks: ['Cryptography and PKI', 'Cloud and mobile security', 'The CEH toolkit and tools'], hours: 30 },
      { label: 'Weeks 9-12', focus: 'Drill and mocks', tasks: ['Question-bank drilling in volume', 'Two full timed practice exams', 'Review weak modules and schedule'], hours: 50 }
    ],
    variants: [
      { label: 'Working security professional', detail: 'The recon and system-hacking modules accelerate; spend extra time on web attacks, wireless and crypto.' },
      { label: 'IT professional entering security', detail: 'Add 2-3 weeks of networking and security fundamentals before the blueprint work.' }
    ]
  },
  prepStrategies: {
    summary: 'The CEH rewards breadth across the 20-module blueprint, so the dominant strategy is systematic coverage with tool-and-technique drilling: the exam asks what a tool does, which technique fits an attack phase, and which countermeasure applies — so practise the tool names, their purposes and the attack-phase mapping. Second, use the official blueprint as the scope map and audit every study resource against it, because the exam is built from the blueprint and third-party courses drift. Third, drill the attack chains deliberately: the exam rewards knowing the sequence of an attack — recon, scanning, enumeration, exploitation, post-exploitation — and which tool belongs at each step. Fourth, take at least two full timed practice exams at the real 125-question, 4-hour format; the length and the breadth reward stamina and coverage. Finally, plan the practical exam: the CEH has a separate practical (hands-on) component in the current program, so understand both parts of the certification path before you start.',
    items: [
      { title: 'Drill tools and techniques', detail: 'Which tool fits which attack phase is the exam\'s core pattern.' },
      { title: 'Audit against the blueprint', detail: 'The 20-module blueprint is the authoritative scope.' },
      { title: 'Learn the attack chains', detail: 'Recon to exploitation sequences and their tools are tested directly.' },
      { title: 'Run two full timed mocks', detail: '125 questions in 4 hours; stamina and coverage are part of the test.' },
      { title: 'Plan the practical component', detail: 'The CEH path includes a hands-on practical exam.' }
    ]
  },
  resourceComparison: {
    summary: 'CEH prep spans official EC-Council training and third-party resources. EC-Council\'s official training courses run roughly $850 to $2,500 depending on format (self-paced, instructor-led or the bundle with the exam voucher); the official courseware is the source the exam is built from. Third-party alternatives — books ($40-$100), video courses ($50-$300) and question banks ($50-$200) — are popular because the official training is expensive; many candidates use a book-plus-question-bank stack. The exam fee is about $100-$150 if you have a voucher from training, or $550-$1,199 without, depending on the purchase path. A realistic total budget is $200 to $2,800 depending on whether you take official training. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'EC-Council official training', values: ['$850-$2,500', 'Self-paced or instructor-led + voucher', 'The source the exam is built from'] },
      { label: 'CEH books', values: ['$40-$100', 'Printed or digital book', 'Structured blueprint coverage'] },
      { label: 'Third-party video courses', values: ['$50-$300', 'Video courses and quizzes', 'Lower-cost structured alternatives'] },
      { label: 'Question banks', values: ['$50-$200', 'Online practice items', 'Tool-and-technique drilling'] },
      { label: 'CEH exam', values: ['~$550-$1,199 (or ~$100 with training voucher)', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; EC-Council pricing varies by path; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CEH mistake is studying favourite topics and skipping the breadth: candidates who drill hacking techniques but ignore cryptography or IoT meet the breadth items unprepared, because the 125-question format draws from all 20 modules. The fix is systematic blueprint coverage. The second mistake is memorising tools without learning what they do and when to use them — the exam rewards the tool-to-phase mapping, not the names. Third, candidates study from a single course that drifts from the blueprint; audit every resource against the official blueprint. Fourth, many candidates never run a full timed practice exam and underestimate the 4-hour stamina. Finally, some candidates overlook the practical component of the current CEH path and plan only for the multiple-choice exam; understand both parts before starting.',
    items: [
      { mistake: 'Studying favourite topics only', fix: 'The 125-question format draws from all 20 modules; cover the blueprint.' },
      { mistake: 'Memorising tool names', fix: 'Learn what each tool does and which attack phase it fits.' },
      { mistake: 'Relying on drifting courses', fix: 'Audit every resource against the official blueprint.' },
      { mistake: 'Skipping timed mocks', fix: '125 questions in 4 hours; run two full timed practice exams.' },
      { mistake: 'Ignoring the practical exam', fix: 'The CEH path includes a hands-on component; plan for both.' }
    ]
  },
  questionTypes: {
    summary: 'The CEH exam is a 125-question multiple-choice exam in 4 hours. The items span the 20-module blueprint with a heavy concentration on tools and techniques: which tool performs a described action, which technique fits an attack phase, and which countermeasure or detection applies. Scenario items describe an attack in progress and ask for the correct identification, tool or response. Samples below are editor-written illustrations of the published blueprint, not live exam items; they show the tool-and-technique style of the real items.',
    types: [
      { name: 'Tool and technique items', share: 'Largest block', detail: 'Which tool or technique fits a described attack phase.' },
      { name: 'Attack-chain scenario items', share: 'Large block', detail: 'Attack situations with the correct identification or response.' },
      { name: 'Countermeasure and crypto items', share: 'Meaningful block', detail: 'Defences, detection and cryptographic concepts.' }
    ],
    samples: [
      {
        prompt: 'An attacker wants to discover live hosts and open ports on a target network before exploitation. The most appropriate phase and tool pairing is:',
        options: ['A. Scanning — using a tool such as Nmap', 'B. Cryptography — using a hash function', 'C. Post-exploitation — using a rootkit', 'D. Social engineering — using a phishing template'],
        answer: 'A',
        explanation: 'Host and port discovery is the scanning phase, and Nmap is the standard tool for it. Hashing, rootkits and phishing belong to different phases and purposes.'
      },
      {
        prompt: 'Which attack technique tricks a user into revealing credentials by impersonating a trusted entity?',
        options: ['A. Phishing', 'B. SQL injection', 'C. Buffer overflow', 'D. Session replay'],
        answer: 'A',
        explanation: 'Phishing impersonates a trusted entity to trick users into revealing credentials or other sensitive information. SQL injection attacks databases, buffer overflows exploit memory, and session replay reuses captured sessions.'
      },
      {
        prompt: 'To protect data at rest on a stolen laptop, the most appropriate control is:',
        options: ['A. Full-disk encryption', 'B. A strong password alone', 'C. A firewall', 'D. Antivirus software'],
        answer: 'A',
        explanation: 'Full-disk encryption protects data at rest — without the key, the data is unreadable even if the device is stolen. A password alone is bypassable, and firewalls and antivirus protect the device while running, not the data at rest.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The CEH exam is a 125-question, 4-hour computer-based exam at a Pearson VUE centre or through an ECC exam centre. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 1.9 minutes per item, flag uncertain items for review, and budget time for the reading-heavy scenario items. Your result is reported after the exam, with the official score report following. If you do not pass, the retake policy and fee apply. On a pass, the CEH is valid for three years and is renewed by earning 120 continuing education credits (ECEs) or retaking. The afterwards matters: log your ECEs as you earn them, because EC-Council audits renewals, and plan the practical component of the certification path if you have not completed it.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '125 questions in 4 hours; pace ~1.9 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Result is reported; the official score report follows.' },
      { time: 'Next', detail: 'Plan the ECE renewal cycle and the practical component.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '4 hours for 125 questions; the clock does not pause',
      'The certification renews every 3 years with 120 ECEs (or a retake)'
    ],
    afterwards: 'On a pass, your CEH is valid for three years; earn 120 ECEs (or retake) to renew. On a fail, retake per the EC-Council policy after additional blueprint study.'
  }
};

export default data;
