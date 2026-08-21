const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Developer & systems certifications desk',
    bio: 'This desk covers developer and IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (LPI, Python Institute, AHIMA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against LPI\'s Linux Essentials exam page (010-160) and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Linux Essentials" — the LPI Linux Essentials credential certifies foundational Linux and open-source knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the systems-administration track is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420. The fit is deliberate but must be read with an honest caveat: Linux Essentials is an entry-level literacy credential, so the realistic benchmark for a new holder sits far below the administrator median — the credential typically appears on the resume of a student, a career-changer or an IT professional adding Linux skill, and the systems-administrator wage applies after the experience the median describes. BLS counted 217,500 network and computer systems administrator jobs in 2024, projecting 1 percent growth from 2024 to 2034 with about 15,100 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in BLS data. Read the number as the market for the occupation the certificate is a step toward.',
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
    headline: 'LPI publishes the passing standard — 500 of 800 — and no cohort pass rate',
    summary: 'The Linux Professional Institute does not publish cohort pass rates for the Linux Essentials exam, and third-party estimates are not official data, so we do not treat them as authoritative. What LPI does publish is the format and the passing standard: the Linux Essentials exam (010-160) has 40 multiple-choice questions with a 60-minute time limit, and a passing score of 500 on the 200-800 scale. The exam is delivered online through proctoring or at a testing centre, and the exam fee varies by country and purchasing channel, typically around $120 in the US at the time of writing. The exam content follows the published exam objectives: the Linux community and a career in open source; finding your way on a Linux system; the power of the command line; the Linux operating system; and security and file permissions. The absence of a published pass rate is not an absence of standards: the 500-of-800 line on a 40-question paper is an accessible bar for a genuinely entry-level exam, and the objectives are clearly published. The practical reading: a beginner with consistent command-line practice passes comfortably, and the credential is a stepping stone to the LPIC-1, which is the career-relevant certification.',
    source: { label: 'Linux Professional Institute - Linux Essentials (010-160)', url: 'https://www.lpi.org/our-certifications/exam-010-objectives' },
    caveat: 'LPI publishes the 500/800 cut score but no cohort pass rate; the fee varies by country and channel.'
  },
  studyPlan: {
    summary: 'The Linux Essentials exam (010-160) is a 40-question, 60-minute exam with a 500/800 passing score, built on the published exam objectives: the Linux community and open-source careers; finding your way on a Linux system; the power of the command line; the Linux operating system; and security and file permissions. The exam is genuinely entry-level — no prior Linux experience is required — and the key resource is hands-on practice with a Linux environment. A defensible plan runs 30 to 60 hours over 3 to 4 weeks. Week one: install a Linux distribution in a virtual machine and learn the fundamentals — the shell, filesystem layout, and navigation commands (cd, ls, pwd, cp, mv). Week two: command-line power — pipes, redirection, grep, and the text tools. Week three: the operating system — processes, packages, the kernel\'s role — and security and permissions (chmod, chown, sudo). Week four: drill the LPI sample questions and take the exam. The plan is hands-on-heavy because the exam rewards real command-line comfort, and a virtual machine is free.',
    totalHours: '30-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'System fundamentals', tasks: ['Install Linux in a virtual machine', 'Filesystem layout and navigation commands', 'Files, directories and basic operations'], hours: 12 },
      { label: 'Week 2', focus: 'Command-line power', tasks: ['Pipes, redirection and grep', 'Text tools and shell features', 'Hands-on command practice'], hours: 14 },
      { label: 'Week 3', focus: 'OS and security', tasks: ['Processes, packages and the kernel', 'Permissions: chmod, chown and sudo', 'Open-source and community concepts'], hours: 12 },
      { label: 'Week 4', focus: 'Drill and exam', tasks: ['LPI sample questions and practice exams', 'Review weak objectives', 'Schedule and sit the exam'], hours: 10 }
    ],
    variants: [
      { label: 'Everyday Linux user', detail: 'Compress the fundamentals; spend the extra time on permissions, processes and the exam style.' },
      { label: 'Complete beginner', detail: 'Stretch to 5-6 weeks; command-line comfort comes from daily practice.' }
    ]
  },
  prepStrategies: {
    summary: 'The Linux Essentials exam rewards real command-line comfort, so the dominant strategy is hands-on practice in a Linux environment: install a distribution in a free virtual machine and use it daily, because the exam items ask what a command does and when to use it — a skill that only practice builds. Second, use the published exam objectives as the scope map and audit every resource against them; LPI publishes sample questions that show the item style. Third, learn the command vocabulary deliberately: navigation, file operations, text tools, permissions and process management are the exam\'s core, and knowing the exact options and behaviours of the common commands matters. Fourth, understand the open-source and community concepts the exam covers — licensing, distributions and the career landscape — a block that surprises candidates who study only commands. Finally, plan the path: Linux Essentials is the entry rung, and the LPIC-1 is the certification that matters for systems-administration jobs, so treat the Essentials as structured momentum.',
    items: [
      { title: 'Practise in a virtual machine', detail: 'Free Linux practice daily; the exam rewards command-line comfort.' },
      { title: 'Audit against the objectives', detail: 'The published objectives and sample questions are the scope map.' },
      { title: 'Learn the command vocabulary', detail: 'Navigation, files, text tools, permissions and processes are the core.' },
      { title: 'Study the open-source concepts', detail: 'Licensing and community items surprise command-only candidates.' },
      { title: 'Plan for the LPIC-1', detail: 'Linux Essentials is the entry rung; the LPIC-1 matters for jobs.' }
    ]
  },
  resourceComparison: {
    summary: 'Linux Essentials prep is inexpensive because the core resource is free: a Linux distribution in a virtual machine costs nothing and is the essential hands-on environment. LPI\'s published exam objectives and sample questions are free and authoritative. Third-party resources — Linux books ($30-$60), video courses ($10-$100) and practice-question sites ($20-$60) — add value but are optional; the free official stack plus hands-on practice is sufficient for a disciplined beginner. The exam fee is typically about $120 in the US, varying by country and channel. A realistic total budget is $130 to $250 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'LPI exam objectives + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read them first'] },
      { label: 'Linux in a virtual machine', values: ['Free', 'Hands-on environment', 'The essential command-line practice'] },
      { label: 'Linux books', values: ['$30-$60', 'Printed or digital books', 'Structured reference for the objectives'] },
      { label: 'Video courses', values: ['$10-$100', 'Online video courses', 'Alternate explanations for beginners'] },
      { label: 'Practice-question sites', values: ['$20-$60', 'Online practice items', 'Volume drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the exam fee varies by country and channel; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Linux Essentials mistake is studying commands without practising them: candidates who read command lists but never open a terminal meet the exam unable to recall what a command does under pressure. The fix is daily virtual-machine practice. The second mistake is skipping the open-source and community concepts, a distinct objectives block that surprises command-only candidates. Third, beginners memorise commands without learning the exact behaviours and options the exam tests — knowing that ls -l shows permissions and that chmod uses octal modes is the level the items require. Fourth, some candidates meet the item style cold; work the LPI sample questions first. Finally, under-planning the career step is the quiet mistake: Linux Essentials is the entry rung, and the LPIC-1 is the certification employers recognise for systems-administration roles, so plan the path while the command-line comfort is fresh.',
    items: [
      { mistake: 'Studying without practising', fix: 'Open a terminal daily in a virtual machine; comfort comes from practice.' },
      { mistake: 'Skipping open-source concepts', fix: 'Licensing and community are a distinct objectives block.' },
      { mistake: 'Fuzzy command behaviour', fix: 'Learn exact options and outputs — ls -l, chmod octal modes and the rest.' },
      { mistake: 'Meeting the item style cold', fix: 'Work the LPI sample questions before the exam.' },
      { mistake: 'Under-planning the career step', fix: 'Plan the LPIC-1; that is the credential employers recognise.' }
    ]
  },
  questionTypes: {
    summary: 'The Linux Essentials exam (010-160) is a 40-question multiple-choice exam in 60 minutes, with most items single-answer and a share of multi-answer (select-all) items. The items test the published objectives: open-source and community concepts, system navigation, command-line power, the Linux operating system, and security and file permissions. Many items are command-focused — what a command does, which command fits a described task, or what a command output means. Samples below are editor-written illustrations of the published exam objectives, not live exam items; they show the command-focused style of the real items.',
    types: [
      { name: 'Command knowledge items', share: 'Majority', detail: 'What commands do, which fits a task, and how outputs read.' },
      { name: 'Concept items', share: 'Large minority', detail: 'Filesystem, processes, packages and permissions concepts.' },
      { name: 'Open-source and community items', share: 'Minority', detail: 'Licensing and the open-source ecosystem.' }
    ],
    samples: [
      {
        prompt: 'Which command displays a list of files in the current directory, including hidden files, in long format?',
        options: ['A. ls -la', 'B. cd -la', 'C. pwd -la', 'D. cat -la'],
        answer: 'A',
        explanation: 'ls -la lists all files including hidden ones (-a) in long format (-l). cd changes directories, pwd prints the working directory, and cat displays file contents — none lists files with those options.'
      },
      {
        prompt: 'Which permission value grants the owner read, write and execute on a file?',
        options: ['A. 7', 'B. 6', 'C. 5', 'D. 4'],
        answer: 'A',
        explanation: 'In octal permissions, read=4, write=2 and execute=1, so 7 (4+2+1) grants all three. 6 is read+write, 5 is read+execute, and 4 is read-only.'
      },
      {
        prompt: 'Which command shows the processes currently running on the system?',
        options: ['A. ps', 'B. cp', 'C. mv', 'D. rm'],
        answer: 'A',
        explanation: 'ps displays information about running processes. cp copies files, mv moves them, and rm removes them — none shows processes.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam objectives, not live exam items.'
  },
  examDay: {
    summary: 'The Linux Essentials exam is a 40-question, 60-minute computer-based exam, delivered online through proctoring or at a testing centre depending on your location and channel. Confirm the delivery method, bring the required ID matching your registration, and arrive early for a testing-centre session or complete the environment check for online proctoring. Pace at 90 seconds per item; there is no scheduled break. Your result is reported after the exam, and LPI issues the certificate and digital badge on a pass. If you do not pass, you can retake after the waiting period per LPI\'s policy. On a pass, the certification is valid for life — it does not expire or require renewal, which is a distinctive feature of LPI\'s entry credential. The afterwards matters: the credential is a foundation, so move to the LPIC-1 while the command-line comfort is fresh, and keep practising in your virtual machine.',
    bring: ['Required identification matching your registration', 'Exam confirmation', 'For online delivery: computer, webcam and a quiet space'],
    leave: ['Personal electronics and study materials', 'Any assumption that notes are allowed — the exam is closed book'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the delivery method and complete check-in or the environment test.' },
      { time: 'Exam', detail: '40 questions in 60 minutes; pace ~90 seconds per item.' },
      { time: 'After submit', detail: 'Result is reported; the certificate and badge are issued on a pass.' },
      { time: 'Next', detail: 'Move to the LPIC-1 and keep practising in your virtual machine.' }
    ],
    rules: [
      'The exam is closed book',
      '60 minutes for 40 questions; the clock does not pause',
      'The certification is valid for life with no renewal'
    ],
    afterwards: 'On a pass, your Linux Essentials is permanent; proceed to the LPIC-1. On a fail, retake after the waiting period and additional command-line practice.'
  }
};

export default data;
