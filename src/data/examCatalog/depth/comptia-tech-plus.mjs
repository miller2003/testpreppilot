const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'IT entry-level & emerging-tech certifications desk',
    bio: 'We cover CompTIA certifications. Format and fee facts come from CompTIA official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CompTIA Tech+ exam structure, scoring and fees against CompTIA official pages; verified BLS IT-support wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Tech+ is the entry IT credential: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'CompTIA Tech+ (formerly ITF+) is CompTIA\u2019s entry-level certification, designed for people beginning an IT career - it covers IT fundamentals, hardware, software, networking, security and database basics without assuming prior IT experience. It is an entry-level certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the IT support occupations it leads toward. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, projected to grow 6 percent from 2024 to 2034, and computer user support specialists specifically about $57,910 (OEWS); help-desk and entry-level IT roles - the first jobs Tech+ holders target - sit in these ranges, and the certification\u2019s role is the first rung on the CompTIA ladder (Tech+ to A+ to Network+ and beyond). The structural point is that Tech+ is aimed at career changers and students with no IT background: it validates that the holder understands how computers, networks and software work, which is the baseline that help-desk and support employers expect, and it is a common first certification in workforce and academic IT programs. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the entry signal in a market where the first IT job rewards demonstrated fundamentals. The exam is a single test (exam code FC0-U11 for Tech+, succeeding the ITF+ FC0-U61), passes at 650/900, and costs about $134 (verify current pricing), with no experience prerequisite.',
    rows: [
      { label: 'Computer support specialists median, May 2024', value: '$61,550', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'Computer user support specialists median, May 2024', value: '~$57,910', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Tech+ exam', value: 'Single exam (FC0-U11)', note: 'CompTIA, 650/900 passing' }
    ],
    growth: 'Computer-support employment is projected to grow 6 percent from 2024 to 2034; entry-level IT roles remain a common entry path.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'CompTIA Tech+ requires a passing score of 650 on a 900-point scale; CompTIA publishes no pass rates',
    summary: 'CompTIA does not publish pass rates for its certifications, but the assessment mechanics are public. The CompTIA Tech+ exam (exam code FC0-U11, which succeeded the ITF+ FC0-U61) is a single computer-based test with about 85 questions and a time allowance near 60 minutes (verify the current question count and time on the CompTIA page, as details can be updated), with a passing score of 650 on a 900-point scale. The exam covers six domains published by CompTIA: IT concepts and terminology, infrastructure (hardware and networking), applications and software, software development concepts, database fundamentals, and security. The exam is designed for candidates with no prior IT experience - it is the certification CompTIA recommends before A+ - and the items test recognition and fundamentals rather than hands-on troubleshooting (which is the A+ tier). The exam is delivered by Pearson VUE online or at test centers, costs about $134 (verify current pricing), and includes a free retake with the CompTIA exam voucher purchase in most formats (CompTIA bundles one free retake with the standard voucher; verify the current offer). The certification does not expire (CompTIA\u2019s foundational certifications carry no mandatory renewal, unlike the CE-track certifications). The honest summary is that the passing bar is 650/900 on a fundamentals-level exam, no pass-rate data exists, and the published exam objectives are the authoritative preparation blueprint.',
    source: { label: 'CompTIA Tech+ certification', url: 'https://www.comptia.org/certifications/tech' },
    caveat: 'CompTIA publishes no pass rates; Tech+ requires 650/900 with ~85 questions (verify current details). The voucher typically includes one free retake.'
  },
  studyPlan: {
    summary: 'A realistic Tech+ plan runs 30-60 hours over 3-6 weeks for candidates with no IT background - the certification is designed to be achievable without prior experience. Week 1: review the published exam objectives (the six domains) and take a baseline assessment; candidates who are comfortable with basic computer use start ahead of the curve. Weeks 2-4: work through the six domains with a structured study resource - IT concepts and terminology (computing basics, components), infrastructure (hardware, networking and connectivity), applications and software (OS basics, application types), software development concepts (programming fundamentals, lifecycle), database fundamentals (database concepts, SQL basics), and security (threats, best practices) - using the official CompTIA study guide or a reputable course; the content is broad but shallow, so the goal is coverage, not depth. Week 5: hands-on reinforcement - use a virtual machine to practice OS basics and file management, because the fundamentals stick when touched; review the security best-practices section, which is the most job-relevant. Week 6: take the official practice questions and sample tests, drill the exposed gaps, and take the real exam. The dominant resources are the CompTIA study materials (official guide about $60-100, the CompTIA Learn subscription, or third-party books at $20-50), the free exam objectives PDF, and practice tests; the exam fee is about $134 with a free retake included in most vouchers.',
    totalHours: '30-60 hours over 3-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Objectives and baseline', tasks: ['Review the six domains', 'Baseline assessment'], hours: 5 },
      { label: 'Weeks 2-4', focus: 'Domain coverage', tasks: ['Study guide: all six domains', 'Security and networking emphasis'], hours: 35 },
      { label: 'Week 5', focus: 'Hands-on reinforcement', tasks: ['Virtual machine OS practice', 'Security best-practices review'], hours: 10 },
      { label: 'Week 6', focus: 'Practice and real exam', tasks: ['Official practice questions', 'Drill gaps; take the exam'], hours: 8 }
    ],
    variants: [
      { label: 'Experience track', detail: 'Candidates with some IT exposure can compress to 2-3 weeks and focus on the practice tests.' },
      { label: 'Path to A+', detail: 'Tech+ is the recommended precursor to A+, which is the standard first credential for help-desk roles.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Tech+ strategies exploit its breadth-without-depth design. Strategy one: use the published exam objectives as the checklist - the six domains define the scope exactly, and candidates who work through the objectives systematically cover the material without over-studying any single topic; the exam rewards breadth. Strategy two: prioritize the domains that carry the most job relevance and question weight - infrastructure (hardware and networking) and security are the two areas that also matter for the A+ and the first IT job, and the security items test practical best practices. Strategy three: reinforce the fundamentals hands-on - install a virtual machine and practice OS basics, file management and basic networking commands, because the fundamentals stick when touched, and the exam rewards recognition that hands-on exposure builds. Strategy four: learn the terminology precisely - the exam tests the vocabulary (RAM vs ROM, TCP/IP basics, the OSI model at a recognition level, SQL basics), and candidates who know the terms answer faster. Strategy five: use the official practice questions and a reputable question bank for exam-condition repetition, because the question style is distinctive. Strategy six: take the exam early enough in the career journey to use the free retake if needed, and plan the next step (A+) while the fundamentals are fresh, because the certification is the first rung, not the destination.',
    items: [
      { title: 'Work the objectives checklist', detail: 'The six domains define the scope; cover them systematically.' },
      { title: 'Prioritize infrastructure and security', detail: 'The most job-relevant and question-heavy domains.' },
      { title: 'Reinforce hands-on', detail: 'A virtual machine makes the fundamentals stick.' },
      { title: 'Learn the terminology precisely', detail: 'Recognition of terms is the exam\u2019s core.' },
      { title: 'Plan the A+ next', detail: 'Tech+ is the first rung; A+ is the standard help-desk credential.' }
    ]
  },
  resourceComparison: {
    summary: 'The Tech+ resource market has a clear official core and affordable commercial options. The free exam objectives PDF on the CompTIA website is the blueprint. The official CompTIA Tech+ study guide (about $60-100) and the CompTIA Learn subscription (which includes the guide, labs and practice questions) are the official study path; third-party study books ($20-50) and online courses ($50-300) cover the same scope, and the major publishers\u2019 Tech+/ITF+ books are serviceable. Practice tests and question banks ($20-100) provide exam-condition repetition. Hands-on practice requires only a virtual machine (free options like VirtualBox with a free OS), which is the recommended reinforcement. The exam fee is about $134 (verify current pricing), and the voucher typically includes one free retake. The honest ranking: the free objectives, the official study guide or a reputable third-party book, a practice-question bank, and a course only for structured learners. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA exam objectives', values: ['Free PDF', 'Downloadable', 'The exam blueprint'] },
      { label: 'Official study guide / Learn subscription', values: ['$60-$100+', 'Print/online', 'The official study path'] },
      { label: 'Third-party book / course', values: ['$20-$300', 'Print/online', 'Coverage and structure'] },
      { label: 'Practice-question bank', values: ['$20-$100', 'Online', 'Exam-condition repetition'] },
      { label: 'Virtual machine practice', values: ['Free', 'Desktop', 'Hands-on reinforcement'] }
    ],
    footnote: 'Prices dated 2025-26; the Tech+ exam fee is ~$134 with a free retake in most vouchers. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Tech+ mistakes come from over-studying or under-studying a fundamentals exam. Mistake one: over-preparing - treating a fundamentals exam like the A+; candidates who spend hundreds of hours are over-investing, because the content is recognition-level and the objectives PDF plus a study guide covers it. Mistake two: the opposite - skipping the study guide and testing on general knowledge; the exam tests specific terminology (RAM vs ROM, OSI layers at a recognition level, SQL basics) that casual knowledge does not fully cover. Mistake three: going too deep on single topics; the exam rewards breadth across the six domains, and candidates who dive deep into one area at the expense of coverage miss items in the others. Mistake four: using ITF+ (retired) materials without checking the Tech+ objectives; the exam codes differ (FC0-U61 vs FC0-U11), and the objectives should be verified. Mistake five: ignoring the security domain, which is the most job-relevant and carries solid weight. Mistake six: skipping the free retake planning; the voucher includes a free retake, and candidates who treat the first attempt as one-shot add stress - the plan should use the retake if the practice-test scores are borderline.',
    items: [
      { mistake: 'Over-preparing a fundamentals exam', fix: '30-60 hours is the realistic range.' },
      { mistake: 'Skipping the terminology study', fix: 'Learn the specific terms the objectives list.' },
      { mistake: 'Going deep instead of broad', fix: 'The exam rewards coverage across six domains.' },
      { mistake: 'Using retired ITF+ material', fix: 'Verify the Tech+ objectives and exam code.' },
      { mistake: 'Ignoring the free retake', fix: 'The voucher includes one free retake - plan for it.' }
    ]
  },
  questionTypes: {
    summary: 'The CompTIA Tech+ exam (FC0-U11) is a single computer-based test of about 85 questions in about 60 minutes (verify current details), passing at 650/900. The six domains: IT concepts and terminology, infrastructure (hardware and networking), applications and software, software development concepts, database fundamentals, and security. The exam is fundamentals-level, testing recognition and understanding rather than hands-on troubleshooting. Samples below are editor-written illustrations of the published exam objectives, not live exam items.',
    types: [
      { name: 'IT concepts and terminology', share: 'Domain', detail: 'Computing basics and components.' },
      { name: 'Infrastructure', share: 'Domain', detail: 'Hardware, networking and connectivity.' },
      { name: 'Applications and software', share: 'Domain', detail: 'OS basics and application types.' },
      { name: 'Software development, databases, security', share: 'Domains', detail: 'Dev concepts, SQL basics, security best practices.' }
    ],
    samples: [
      {
        prompt: 'Which component is the primary temporary working memory that a computer uses while running programs?',
        options: ['A. RAM', 'B. ROM', 'C. Hard drive', 'D. Cache controller'],
        answer: 'A',
        explanation: 'RAM (random access memory) is the volatile working memory used while programs run; ROM is read-only firmware, and the hard drive is permanent storage.'
      },
      {
        prompt: 'Which protocol is used to translate a domain name into an IP address?',
        options: ['A. DNS', 'B. DHCP', 'C. FTP', 'D. SMTP'],
        answer: 'A',
        explanation: 'DNS (Domain Name System) resolves domain names to IP addresses; DHCP assigns addresses, FTP transfers files, and SMTP sends mail.'
      },
      {
        prompt: 'Which security practice is most appropriate for protecting an account against unauthorized access?',
        options: ['A. Using a strong, unique password with multi-factor authentication', 'B. Sharing the password with the team for convenience', 'C. Using the same password for all accounts', 'D. Writing the password on the monitor'],
        answer: 'A',
        explanation: 'Strong unique passwords plus multi-factor authentication are core security best practices; the other options weaken account security.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam objectives, not live exam items.'
  },
  examDay: {
    summary: 'The CompTIA Tech+ exam is delivered by Pearson VUE at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; personal electronics are not permitted. The exam runs about 60 minutes, and the passing score is 650/900; results appear on screen immediately at the test center (official confirmation follows within a few days). For online delivery, complete the Pearson VUE system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. If the first attempt falls short, the voucher\u2019s free retake is used (retakes after the free one require a new voucher). After passing, the certification is added to the CompTIA account with a badge; the foundational certification does not carry a mandatory renewal (unlike the CE-track certifications). Afterwards, add the badge to LinkedIn and your resume, and plan the next step - typically the A+ certification, which is the standard credential for help-desk and support roles.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'CompTIA account sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~60 minutes; ~85 questions; 650/900 passes.' },
      { time: 'After the exam', detail: 'Score on screen; badge added to the CompTIA account.' },
      { time: 'Next', detail: 'Plan the A+ certification for the help-desk path.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The passing score is 650/900 (verify current).',
      'The voucher typically includes one free retake.',
      'The foundational certification does not require renewal.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, and plan the A+ certification as the standard next step for help-desk and support roles.'
  }
};

export default data;
