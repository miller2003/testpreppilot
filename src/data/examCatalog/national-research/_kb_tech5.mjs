// Knowledge base — Technology (LPI). Authoring format; gen_national.mjs expands
// these into schema-conformant batch files. Facts checked against LPI’s official
// exam-pricing/objectives pages and corroborated with aggregators. LPI is the
// world’s largest vendor-neutral Linux/open-source certification body (350k+
// certified, 180+ countries). Essentials exams do NOT expire; LPIC and Open
// Technology (DevOps, BSD) exams are valid 5 years. Pass scale is 200–800 (500 pass).

export const kbBodies = [
  {
    id: 'lpi',
    body: 'LPI',
    bodyUrl: 'https://www.lpi.org',
    about: 'The Linux Professional Institute (LPI) is the world’s first and largest vendor-neutral Linux and open-source certification body. Its certifications are distribution-neutral, so they prove skills that transfer across Red Hat, Debian, SUSE and beyond. LPI runs two families: the Essentials track (Linux Essentials, Security Essentials, Web Development Essentials, Open Source Essentials), which are inexpensive entry certificates that do not expire, and the professional Linux Professional (LPIC-1/2/3) and Open Technology (DevOps Tools Engineer, BSD Specialist) tracks, which are valid for five years and follow a progressive ladder.',
    registrationSteps: [
      { title: 'Create a free LPI ID', description: 'Register at lpi.org to get an LPI ID used to record your certifications.', duration: '5 minutes' },
      { title: 'Buy a voucher or schedule directly', description: 'Purchase an exam voucher from the LPI Marketplace or schedule and pay through Pearson VUE.', duration: '10 minutes' },
      { title: 'Choose delivery', description: 'Book an in-person slot at a Pearson VUE test center or an OnVUE online-proctored appointment.', duration: '10 minutes' },
      { title: 'Sit the exam', description: 'Answer 40 (Essentials) or 60 (professional) multiple-choice / fill-in-the-blank questions within 60 or 90 minutes.', duration: 'test day' },
      { title: 'Maintain', description: 'Essentials never expire. LPIC/Open Technology certs are valid 5 years; recertify by retaking, advancing a level, or earning CE credits.', duration: 'per cycle' }
    ],
    proctoring: 'Delivered at Pearson VUE test centers worldwide or via Pearson VUE’s OnVUE online proctoring from home. A valid photo ID is required; online proctoring includes a room/desk scan.',
    retakePolicy: 'If you fail, you may retake after a short waiting period (commonly about 7 days); the full exam fee is charged on every attempt. There is no limit on attempts beyond the waiting period.',
    recertification: 'LPIC-1/2/3 and the Open Technology exams (DevOps Tools Engineer, BSD Specialist) are valid for five years. You recertify by passing the current exam again, passing a higher-level LPI exam, or accumulating Continuing Education (CE) credits. The Essentials certificates do not expire.',
    scoreReporting: 'Exams use a scaled score of 200–800; the pass mark is 500. Results are reported immediately at the test center (or on completion for OnVUE), and a digital certificate is issued on pass.',
    refundPolicy: 'Exam vouchers are generally non-refundable; Pearson VUE requires at least 24 hours’ notice to reschedule without forfeiting the fee. Check the specific voucher terms at purchase.',
    providersNote: 'LPI publishes free study materials (LPI Learning), official exam objectives on its wiki, and a large global training-partner network. Community resources such as IBM Developer tutorials and Linux Journey are commonly used for practice.',
    comparison: {
      title: 'LPI certification tracks',
      columns: ['Track / exam', 'Questions', 'Fee', 'Validity'],
      rows: [
        { label: 'Essentials (Linux/Security/Web/Open Source)', values: ['40', '$120', 'Lifetime'] },
        { label: 'LPIC-1 (101 + 102)', values: ['60 each', '$400', '5 years'] },
        { label: 'LPIC-2 (201 + 202)', values: ['60 each', '$400', '5 years'] },
        { label: 'LPIC-3 (one specialty)', values: ['60', '$200', '5 years'] },
        { label: 'DevOps Tools Engineer / BSD Specialist', values: ['60', '$200', '5 years'] }
      ]
    },
    orgFaqs: [
      { q: 'How long are LPI certifications valid?', a: 'The LPIC-1/2/3 ladder and the Open Technology exams (DevOps Tools Engineer, BSD Specialist) are valid for five years. The Essentials certificates — Linux, Security, Web Development and Open Source Essentials — do not expire.' },
      { q: 'What is the passing score?', a: 'LPI uses a scaled score of 200 to 800; the pass mark is 500 (about 62.5%). Essentials exams have 40 questions in 60 minutes; professional exams have 60 questions in 90 minutes.' },
      { q: 'Are LPI exams distribution-specific?', a: 'No. LPI is deliberately vendor-neutral and distribution-neutral, so the skills you prove apply across Red Hat, Debian, SUSE and other Linux families — a key difference from single-vendor programs.' }
    ],
    sourceUrl: 'https://www.lpi.org',
    confidence: 'high'
  }
];

export const kbExams = [
  // ───────────────────────── LPI ─────────────────────────
  {
    slug: 'lpi-linux-essentials',
    body: 'LPI',
    tagline: 'The vendor-neutral first step into Linux',
    description: 'Linux Essentials (010-160) is LPI’s entry-level, vendor-neutral introduction to Linux and open source. It confirms basic command-line literacy and an understanding of the open-source ecosystem, making it ideal for students, career changers and anyone who needs to show foundational Linux awareness without committing to the full LPIC ladder. It is inexpensive, short, and — unlike the professional exams — it never expires.',
    quickAnswer: { summary: 'Linux Essentials (010-160) is LPI’s entry-level, vendor-neutral intro to Linux and open source: 40 multiple-choice/fill-in questions in 60 minutes, $120, pass 500/800, and it does not expire.', advantages: ['Vendor-neutral and distribution-independent', 'No expiration date', 'Low-cost, low-time entry', 'Ideal on-ramp before LPIC-1'] },
    prerequisites: 'None — open to absolute beginners.',
    eligibility: 'Open to all; aimed at students, career changers and non-technical learners.',
    examMeta: { questions: '40', time: '60 minutes', pass: '500 / 800 (scaled)', fee: '$120 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'The Linux community and open source', weight: '', note: 'History, licenses, philosophy' },
      { name: 'Finding your way on a Linux system', weight: '', note: 'Filesystem layout, navigation' },
      { name: 'The power of the command line', weight: '', note: 'Shell, basic commands, pipes' },
      { name: 'Users, groups and permissions', weight: '', note: 'Ownership, rwx, sudo basics' },
      { name: 'Security and best practices', weight: '', note: 'Updates, safe habits' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Format', 'MC & fill-in-the-blank'],
      ['Pass mark', '500 / 800'],
      ['Expiry', 'None (lifetime)']
    ],
    timeline: [{ stage: 'Self-study with LPI Learning / Linux Journey', duration: '2–4 weeks' }, { stage: 'Book and pass 010-160', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam fee (010-160)', fee: '$120' }], total: '$120', footnote: 'No training required; free study resources are available.' },
    difficulty: 'Easy',
    audience: 'Students, career changers and beginners',
    time: '2–4 weeks',
    cost: '$120',
    salaryRange: '',
    faqs: [
      { q: 'Do I need any Linux experience?', a: 'No. Linux Essentials is designed for complete beginners and assumes no prior experience. It tests conceptual familiarity with Linux and open source rather than deep administration skill.' },
      { q: 'Does Linux Essentials expire?', a: 'No. Unlike the LPIC ladder, the Essentials certificates are entry-level educational credentials that do not expire, so they remain on your record permanently.' },
      { q: 'How hard is the exam?', a: 'It is LPI’s easiest exam: 40 questions in 60 minutes, pass mark 500/800. Comfort with basic command-line concepts and open-source terminology is enough to prepare.' },
      { q: 'Should I take it before LPIC-1?', a: 'It is a good confidence-builder and a low-cost way to confirm basics, but it is not a prerequisite for LPIC-1. Many learners go straight to LPIC-1 if they already have some command-line experience.' }
    ],
    summaryPoints: ['LPI’s entry-level, vendor-neutral Linux introduction (010-160).', '40 questions, 60 minutes, $120, pass 500/800.', 'Covers command line, filesystem, users/permissions, open source.', 'Does not expire; ideal first step before LPIC-1.'],
    relatedSlugs: ['lpic-1-system-administrator', 'lpi-open-source-essentials', 'lpi-security-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/linux-essentials',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpic-1-system-administrator',
    body: 'LPI',
    tagline: 'The vendor-neutral Linux administrator certification',
    description: 'LPIC-1 (Linux Administrator) is LPI’s foundational professional certification, earned by passing two exams — 101-500 and 102-500 — that together validate the ability to perform maintenance tasks on the command line, install and configure a Linux computer, and set up basic networking. Because LPI is distribution-neutral, LPIC-1 proves portable skills across Red Hat, Debian and SUSE, and it is valid for five years.',
    quickAnswer: { summary: 'LPIC-1 (Linux Administrator) is LPI’s entry professional cert, earned by passing two exams (101 and 102) of 60 questions each over 90 minutes, $200 per exam, pass 500/800, valid for five years.', advantages: ['Vendor-neutral across all distros', 'Two-exam, flexible path', 'Five-year validity', 'Foundation for LPIC-2'] },
    prerequisites: 'No formal prerequisite; basic Linux command-line experience is recommended.',
    eligibility: 'Open to all; suited to junior Linux administrators.',
    examMeta: { questions: '60 per exam (101 & 102)', time: '90 minutes per exam', pass: '500 / 800 (scaled)', fee: '$200 per exam ($400 total)', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Exam 101 — system architecture & install', weight: '', note: 'Boot, runlevels, partitioning, package mgmt' },
      { name: 'Exam 101 — GNU/Unix commands', weight: '', note: 'grep/sed/awk, pipes, file ops' },
      { name: 'Exam 101 — devices & filesystems', weight: '', note: 'fstab, mount, ext4/xfs, quota' },
      { name: 'Exam 102 — shells & scripting', weight: '', note: 'Shell env, simple scripts, cron/at' },
      { name: 'Exam 102 — networking & security', weight: '', note: 'TCP/IP, firewall basics, SSH, security' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Exams', '101 and 102 (any order)'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Study both exams with labs', duration: '8–12 weeks' }, { stage: 'Pass 101 then 102', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 101-500', fee: '$200' }, { item: 'Exam 102-500', fee: '$200' }], total: '$400 (two exams)', footnote: 'Many regions offer exam-bundle discounts when buying multiple LPI vouchers.' },
    difficulty: 'Moderate',
    audience: 'Junior Linux administrators and IT support',
    time: '8–12 weeks',
    cost: '$400 (two exams)',
    salaryRange: '$60,000–$85,000',
    faqs: [
      { q: 'How many exams make up LPIC-1?', a: 'Two: 101-500 and 102-500. Each is 60 questions in 90 minutes and costs $200. You can take them in any order; once both are passed you earn LPIC-1.' },
      { q: 'Does LPIC-1 expire?', a: 'Yes, like all professional LPI exams it is valid for five years. You renew by retaking the current exams, passing LPIC-2, or earning Continuing Education credits.' },
      { q: 'Is LPIC-1 tied to one Linux distribution?', a: 'No. LPI is deliberately vendor-neutral, so LPIC-1 skills apply across Red Hat, Debian, Ubuntu, SUSE and others — a key advantage over single-vendor certs.' },
      { q: 'What should I study?', a: 'Exam 101 covers system architecture, installation, package management, GNU commands, devices and filesystems. Exam 102 covers shells/scripting, user interfaces, admin tasks, system services, networking and security. The official objectives on LPI’s wiki are the authoritative guide.' }
    ],
    summaryPoints: ['LPI’s foundational professional Linux cert (LPIC-1).', 'Two exams (101 + 102), 60 questions each, 90 minutes, $200 each.', 'Pass 500/800; valid five years; vendor-neutral.', 'Prerequisite-free on-ramp to the LPIC-2/3 ladder.'],
    relatedSlugs: ['lpi-linux-essentials', 'lpic-2-linux-engineer', 'lpi-security-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/lpic-1',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpic-2-linux-engineer',
    body: 'LPI',
    tagline: 'Administer mixed Linux networks',
    description: 'LPIC-2 (Linux Engineer) is LPI’s intermediate professional certification for administrators of small to medium-sized mixed networks. It requires an active LPIC-1 and is earned by passing exams 201-450 and 202-450, which cover advanced topics such as the Linux kernel, capacity planning, networking configuration, DNS, file sharing, email services and security. It is valid for five years and is the gateway to the LPIC-3 specialties.',
    quickAnswer: { summary: 'LPIC-2 (Linux Engineer) is the intermediate LPI cert, earned by passing exams 201 and 202 (60 questions, 90 min each, $200 each) with an active LPIC-1; pass 500/800, valid five years.', advantages: ['Advanced administration depth', 'Requires LPIC-1', 'Five-year validity', 'Path to LPIC-3 specialties'] },
    prerequisites: 'An active LPIC-1 certification is required.',
    eligibility: 'Must hold current LPIC-1; suited to experienced administrators.',
    examMeta: { questions: '60 per exam (201 & 202)', time: '90 minutes per exam', pass: '500 / 800 (scaled)', fee: '$200 per exam ($400 total)', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Exam 201 — kernel & boot', weight: '', note: 'Kernel components, init, capacity planning' },
      { name: 'Exam 201 — filesystems & devices', weight: '', note: 'Advanced FS, LVM, device mgmt' },
      { name: 'Exam 201 — networking & maintenance', weight: '', note: 'Network config, system maintenance' },
      { name: 'Exam 202 — network services', weight: '', note: 'DNS, web, file sharing, email' },
      { name: 'Exam 202 — security & clients', weight: '', note: 'Network client mgmt, hardening' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Requires', 'Active LPIC-1'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Deepen admin skills; study 201 & 202', duration: '3–6 months' }, { stage: 'Pass 201 then 202', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 201-450', fee: '$200' }, { item: 'Exam 202-450', fee: '$200' }], total: '$400 (two exams)', footnote: 'Active LPIC-1 must be maintained to be awarded LPIC-2.' },
    difficulty: 'Hard',
    audience: 'Experienced Linux administrators',
    time: '3–6 months',
    cost: '$400',
    salaryRange: '$80,000–$110,000',
    faqs: [
      { q: 'Do I need LPIC-1 first?', a: 'Yes. You must hold an active LPIC-1 to be awarded LPIC-2. The 201 and 202 exams may be taken in any order, but the LPIC-1 credential must be current.' },
      { q: 'What is the difference between LPIC-1 and LPIC-2?', a: 'LPIC-1 covers core administration of a single system; LPIC-2 adds advanced topics — kernel, capacity planning, networking services (DNS, web, email, file sharing) and security — for administering small to medium mixed networks.' },
      { q: 'How long is each exam?', a: 'Both 201 and 202 are 60 questions in 90 minutes, $200 each, pass mark 500/800. Plan for a few months of hands-on practice given the depth.' },
      { q: 'What comes after LPIC-2?', a: 'LPIC-3, LPI’s senior level, where you choose one specialty (Mixed Environments, Security, or High Availability & Storage Clusters). You need an active LPIC-2 to be awarded LPIC-3.' }
    ],
    summaryPoints: ['LPI’s intermediate professional Linux cert (LPIC-2).', 'Two exams (201 + 202), 60 questions each, 90 minutes, $200 each.', 'Requires active LPIC-1; pass 500/800; valid five years.', 'Gateway to the LPIC-3 senior specialties.'],
    relatedSlugs: ['lpic-1-system-administrator', 'lpic-3-mixed-environments', 'lpi-devops-tools-engineer'],
    sourceUrl: 'https://www.lpi.org/our-certifications/lpic-2',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpic-3-mixed-environments',
    body: 'LPI',
    tagline: 'Enterprise Linux: Windows + Linux integration',
    description: 'LPIC-3 Mixed Environments (Exam 300) is a senior-level LPI specialty focused on integrating Linux with other platforms, especially Windows, using OpenLDAP, Samba and Active Directory. It is one exam (60 questions, 90 minutes, $200), requires an active LPIC-2, passes at 500/800, and is valid for five years. It suits administrators who run heterogeneous enterprise directory and file-sharing environments.',
    quickAnswer: { summary: 'LPIC-3 Mixed Environments (300) is an LPI senior specialty exam (60 questions, 90 min, $200, pass 500/800, valid 5 years) requiring active LPIC-2; it centers on OpenLDAP, Samba and Active Directory integration.', advantages: ['Senior-level credential', 'Linux/Windows integration focus', 'Requires LPIC-2', 'Five-year validity'] },
    prerequisites: 'An active LPIC-2 certification is required.',
    eligibility: 'Must hold current LPIC-2; suited to senior administrators.',
    examMeta: { questions: '60', time: '90 minutes', pass: '500 / 800 (scaled)', fee: '$200 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'OpenLDAP administration', weight: '', note: 'Directory design, replication, schemas' },
      { name: 'Samba and Active Directory', weight: '', note: 'File/print, AD member, Kerberos' },
      { name: 'Authentication & authorization', weight: '', note: 'PAM, NSS, centralized auth' },
      { name: 'Name services', weight: '', note: 'DNS, DHCP integration' },
      { name: 'File and print sharing', weight: '', note: 'Cross-platform sharing' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Requires', 'Active LPIC-2'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Build an LDAP/Samba lab', duration: '2–4 months' }, { stage: 'Book and pass 300', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 300', fee: '$200' }], total: '$200', footnote: 'LPIC-2 must remain active to hold the LPIC-3 title.' },
    difficulty: 'Expert',
    audience: 'Senior administrators and infrastructure engineers',
    time: '2–4 months',
    cost: '$200',
    salaryRange: '$95,000–$130,000',
    faqs: [
      { q: 'What does LPIC-3 Mixed Environments cover?', a: 'Integrating Linux with other systems — primarily Windows — through OpenLDAP directory services, Samba file/print sharing, and Active Directory membership and authentication. It is the specialty for heterogeneous enterprise environments.' },
      { q: 'Do I need LPIC-2?', a: 'Yes. LPIC-3 requires an active LPIC-2. You may sit the 300 exam before finishing LPIC-2, but the LPIC-3 title is only awarded once LPIC-2 is current.' },
      { q: 'How is LPIC-3 structured?', a: 'LPIC-3 is a single specialty exam. You choose one of three: Mixed Environments (300), Security (303), or High Availability & Storage Clusters (306). Each is 60 questions, 90 minutes, $200.' },
      { q: 'How should I prepare?', a: 'Stand up a lab with OpenLDAP and Samba, practice joining Linux to Active Directory, configure PAM/NSS for centralized auth, and rehearse DNS/DHCP integration. The official LPIC-3 objectives are the authoritative study list.' }
    ],
    summaryPoints: ['LPI senior specialty: Linux/Windows integration (Exam 300).', '60 questions, 90 minutes, $200, pass 500/800.', 'Requires active LPIC-2; valid five years.', 'Focuses on OpenLDAP, Samba and Active Directory.'],
    relatedSlugs: ['lpic-2-linux-engineer', 'lpic-3-security', 'lpic-3-high-availability-and-storage-clusters'],
    sourceUrl: 'https://www.lpi.org/our-certifications/lpic-3',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpic-3-security',
    body: 'LPI',
    tagline: 'Harden and secure Linux enterprise systems',
    description: 'LPIC-3 Security (Exam 303) is a senior-level LPI specialty covering cryptography, network and host security, access control and application hardening on Linux. It is one exam (60 questions, 90 minutes, $200), requires an active LPIC-2, passes at 500/800, and is valid for five years — a strong credential for Linux security engineers.',
    quickAnswer: { summary: 'LPIC-3 Security (303) is an LPI senior specialty exam (60 questions, 90 min, $200, pass 500/800, valid 5 years) requiring active LPIC-2; it covers cryptography, network/host security, access control and application hardening.', advantages: ['Senior security specialty', 'Requires LPIC-2', 'Five-year validity', 'High demand for security roles'] },
    prerequisites: 'An active LPIC-2 certification is required.',
    eligibility: 'Must hold current LPIC-2; suited to security-focused administrators.',
    examMeta: { questions: '60', time: '90 minutes', pass: '500 / 800 (scaled)', fee: '$200 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Cryptography', weight: '', note: 'Sym/asymmetric, hashes, PKI, GPG' },
      { name: 'Network security', weight: '', note: 'Firewalls, IDS, hardening' },
      { name: 'Access control', weight: '', note: 'PAM, ACLs, MAC, RBAC' },
      { name: 'Application security', weight: '', note: 'Hardening services, patching' },
      { name: 'Encryption & compliance', weight: '', note: 'Disk/transport encryption, audits' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Requires', 'Active LPIC-2'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Study crypto, network and host security', duration: '2–4 months' }, { stage: 'Book and pass 303', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 303', fee: '$200' }], total: '$200', footnote: 'LPIC-2 must remain active to hold the LPIC-3 title.' },
    difficulty: 'Expert',
    audience: 'Linux security administrators and engineers',
    time: '2–4 months',
    cost: '$200',
    salaryRange: '$100,000–$135,000',
    faqs: [
      { q: 'What does LPIC-3 Security cover?', a: 'Cryptography (PKI, GPG, hashing), network and host security (firewalls, IDS, service hardening), access control (PAM, ACLs, MAC/RBAC), and application and data security — the practical Linux security stack.' },
      { q: 'Is LPIC-2 required?', a: 'Yes, an active LPIC-2 is required to be awarded the LPIC-3 Security title, though you may take the 303 exam earlier.' },
      { q: 'How does it compare to the Essentials security cert?', a: 'Security Essentials (020) is a cheap, non-expiring awareness cert for everyone. LPIC-3 Security (303) is a senior, five-year professional specialty requiring LPIC-2 and real administration depth.' },
      { q: 'How should I prepare?', a: 'Practice with GPG/PKI, configure PAM/ACLs and MAC, harden network services, and rehearse disk/transport encryption and auditing in a lab. Use the official LPIC-3 Security objectives as your checklist.' }
    ],
    summaryPoints: ['LPI senior specialty: Linux security (Exam 303).', '60 questions, 90 minutes, $200, pass 500/800.', 'Requires active LPIC-2; valid five years.', 'Covers crypto, network/host security, access control.'],
    relatedSlugs: ['lpic-3-mixed-environments', 'lpic-3-high-availability-and-storage-clusters', 'lpi-security-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/lpic-3',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpic-3-high-availability-and-storage-clusters',
    body: 'LPI',
    tagline: 'Build resilient, highly available Linux infrastructure',
    description: 'LPIC-3 High Availability and Storage Clusters (Exam 306) is a senior-level LPI specialty for engineers who design resilient infrastructure. It covers the Pacemaker/Corosync cluster stack, shared and replicated storage (iSCSI, DRBD, clustered filesystems), and high-availability networking. It is one exam (60 questions, 90 minutes, $200), requires an active LPIC-2, and is valid for five years.',
    quickAnswer: { summary: 'LPIC-3 High Availability & Storage Clusters (306) is an LPI senior specialty exam (60 questions, 90 min, $200, pass 500/800, valid 5 years) requiring active LPIC-2; it covers Pacemaker/Corosync, shared/replicated storage and HA networking.', advantages: ['Senior HA/storage specialty', 'Requires LPIC-2', 'Five-year validity', 'Infrastructure/ops focus'] },
    prerequisites: 'An active LPIC-2 certification is required.',
    eligibility: 'Must hold current LPIC-2; suited to infrastructure and storage engineers.',
    examMeta: { questions: '60', time: '90 minutes', pass: '500 / 800 (scaled)', fee: '$200 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Cluster stack', weight: '', note: 'Pacemaker, Corosync, fencing' },
      { name: 'Shared storage', weight: '', note: 'iSCSI, cluster FS, GFS2' },
      { name: 'Replicated storage', weight: '', note: 'DRBD, replication' },
      { name: 'High-availability networking', weight: '', note: 'Bonding, failover, VIPs' },
      { name: 'Resource management', weight: '', note: 'Constraints, failover, recovery' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Requires', 'Active LPIC-2'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Build a 2-node cluster lab', duration: '2–4 months' }, { stage: 'Book and pass 306', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 306', fee: '$200' }], total: '$200', footnote: 'LPIC-2 must remain active to hold the LPIC-3 title.' },
    difficulty: 'Expert',
    audience: 'Infrastructure and storage engineers',
    time: '2–4 months',
    cost: '$200',
    salaryRange: '$100,000–$135,000',
    faqs: [
      { q: 'What does LPIC-3 HA & Storage Clusters cover?', a: 'The Pacemaker/Corosync cluster stack, fencing, shared storage (iSCSI, clustered filesystems), replicated storage (DRBD), high-availability networking (bonding, failover, virtual IPs) and resource management — everything needed to keep services up.' },
      { q: 'Is LPIC-2 required?', a: 'Yes. LPIC-3 requires an active LPIC-2; the 306 exam may be taken earlier but the title is awarded only with current LPIC-2.' },
      { q: 'How long is the exam?', a: '306 is 60 questions in 90 minutes, $200, pass mark 500/800 — the same format as the other LPIC-3 specialties.' },
      { q: 'How should I prepare?', a: 'Stand up a two-node cluster with Pacemaker/Corosync, practice fencing and failover, configure iSCSI/DRBD and a clustered filesystem, and rehearse resource constraints. Use the official LPIC-3 objectives as your guide.' }
    ],
    summaryPoints: ['LPI senior specialty: HA & storage clusters (Exam 306).', '60 questions, 90 minutes, $200, pass 500/800.', 'Requires active LPIC-2; valid five years.', 'Covers Pacemaker/Corosync, DRBD, HA networking.'],
    relatedSlugs: ['lpic-3-mixed-environments', 'lpic-3-security', 'lpic-2-linux-engineer'],
    sourceUrl: 'https://www.lpi.org/our-certifications/lpic-3',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpi-devops-tools-engineer',
    body: 'LPI',
    tagline: 'Prove your open-source DevOps toolchain skills',
    description: 'The LPI DevOps Tools Engineer (Exam 701) validates practical knowledge of the open-source DevOps toolchain: Git, CI/CD, containers and virtualization, configuration management (notably Ansible), monitoring and build tools. It is one exam (60 questions, 90 minutes, $200), passes at 500/800, is valid for five years, and recommends LPIC-1 or equivalent Linux experience.',
    quickAnswer: { summary: 'LPI DevOps Tools Engineer (701) validates open-source DevOps tooling — Git, CI/CD, containers, Ansible, monitoring — in a 60-question, 90-minute exam, $200, pass 500/800, valid five years (LPIC-1 or equivalent recommended).', advantages: ['Broad toolchain coverage', 'Vendor-neutral', 'Five-year validity', 'Complements the LPIC ladder'] },
    prerequisites: 'LPIC-1 or equivalent Linux experience is recommended.',
    eligibility: 'Open to engineers with a Linux background.',
    examMeta: { questions: '60', time: '90 minutes', pass: '500 / 800 (scaled)', fee: '$200 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Git and version control', weight: '', note: 'Branching, merging, remotes' },
      { name: 'CI/CD', weight: '', note: 'Pipelines, automation' },
      { name: 'Containers & virtualization', weight: '', note: 'Docker, Podman, basic virt' },
      { name: 'Configuration management', weight: '', note: 'Ansible, idempotent automation' },
      { name: 'Monitoring & build tools', weight: '', note: 'Metrics, logging, build systems' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Recommended', 'LPIC-1 or equivalent'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Hands-on with Git, CI/CD, Ansible', duration: '6–10 weeks' }, { stage: 'Book and pass 701', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 701', fee: '$200' }], total: '$200', footnote: 'No mandatory prerequisite, but LPIC-1-level Linux helps.' },
    difficulty: 'Moderate',
    audience: 'DevOps and platform engineers',
    time: '6–10 weeks',
    cost: '$200',
    salaryRange: '$95,000–$130,000',
    faqs: [
      { q: 'What tools does the DevOps Tools Engineer exam cover?', a: 'The open-source DevOps stack: Git, continuous integration/delivery, containers and virtualization, configuration management (especially Ansible), and monitoring/build tooling. It is tool-focused rather than theory-focused.' },
      { q: 'Is LPIC-1 required?', a: 'Not strictly mandatory, but LPI recommends LPIC-1 or equivalent Linux experience because the exam assumes comfort at the command line and with basic administration.' },
      { q: 'How long is the exam?', a: '701 is 60 questions in 90 minutes, $200, pass mark 500/800, valid five years — the standard LPI professional format.' },
      { q: 'How should I prepare?', a: 'Get hands-on: use Git daily (branching, merging, remotes), build a simple CI pipeline, run containers with Docker/Podman, write Ansible playbooks, and set up basic monitoring. The official 701 objectives list the exact tools.' }
    ],
    summaryPoints: ['LPI Open Technology cert for the DevOps toolchain (701).', '60 questions, 90 minutes, $200, pass 500/800.', 'Covers Git, CI/CD, containers, Ansible, monitoring.', 'Valid five years; LPIC-1 or equivalent recommended.'],
    relatedSlugs: ['lpic-1-system-administrator', 'lpic-2-linux-engineer', 'lpi-open-source-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/devops-tools-engineer',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpi-security-essentials',
    body: 'LPI',
    tagline: 'Practical security awareness for everyone',
    description: 'LPI Security Essentials (Exam 020) is an entry-level, vendor-neutral certificate that builds practical security awareness for any IT role or student. It covers the threat landscape, encryption, device and account security, network security and safe computing habits. It is short (40 questions, 60 minutes, $120), passes at 500/800, and — like all Essentials — it does not expire.',
    quickAnswer: { summary: 'LPI Security Essentials (020) is an entry-level, vendor-neutral security awareness cert: 40 questions, 60 minutes, $120, pass 500/800, and it does not expire.', advantages: ['Vendor-neutral', 'No expiration', 'Affordable', 'Broad, practical awareness'] },
    prerequisites: 'None — open to all.',
    eligibility: 'Open to all; aimed at every IT role and students.',
    examMeta: { questions: '40', time: '60 minutes', pass: '500 / 800 (scaled)', fee: '$120 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'Threat landscape', weight: '', note: 'Malware, social engineering, phishing' },
      { name: 'Encryption', weight: '', note: 'Basics, when to use it' },
      { name: 'Device security', weight: '', note: 'Updates, lock screens, loss' },
      { name: 'Account & password security', weight: '', note: 'Strong passwords, MFA' },
      { name: 'Network & safe practices', weight: '', note: 'Wi-Fi, browsing, hygiene' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Format', 'MC & fill-in-the-blank'],
      ['Pass mark', '500 / 800'],
      ['Expiry', 'None (lifetime)']
    ],
    timeline: [{ stage: 'Self-study the objectives', duration: '1–3 weeks' }, { stage: 'Book and pass 020', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 020', fee: '$120' }], total: '$120', footnote: 'No expiration; a permanent entry on your record.' },
    difficulty: 'Easy',
    audience: 'All IT roles, students, non-technical staff',
    time: '1–3 weeks',
    cost: '$120',
    salaryRange: '',
    faqs: [
      { q: 'Who is Security Essentials for?', a: 'Everyone. It is an awareness-level cert for any role that touches technology — not just security specialists — covering threats, encryption, device/account safety and safe habits.' },
      { q: 'Does it expire?', a: 'No. Like all LPI Essentials exams, Security Essentials does not expire, so it remains valid permanently.' },
      { q: 'How is it different from LPIC-3 Security?', a: 'Security Essentials (020) is a cheap, non-expiring awareness cert for all staff. LPIC-3 Security (303) is a senior, five-year professional specialty requiring LPIC-2 and real administration depth.' },
      { q: 'How should I prepare?', a: 'Review the official 020 objectives: the threat landscape, encryption basics, device and account security, network safety and everyday hygiene. Free LPI study resources are sufficient for most learners.' }
    ],
    summaryPoints: ['LPI entry-level security awareness cert (020).', '40 questions, 60 minutes, $120, pass 500/800.', 'Covers threats, encryption, account/device and network safety.', 'Does not expire; for all roles.'],
    relatedSlugs: ['lpi-linux-essentials', 'lpi-web-development-essentials', 'lpic-3-security'],
    sourceUrl: 'https://www.lpi.org/our-certifications/security-essentials',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpi-web-development-essentials',
    body: 'LPI',
    tagline: 'The open-standard entry to web development',
    description: 'LPI Web Development Essentials (Exam 030) is an entry-level, vendor-neutral certificate covering the fundamentals of building for the web: HTML, CSS, JavaScript basics, web architecture, accessibility and common tooling. It is 40 questions in 60 minutes, $120, passes at 500/800, and does not expire — a low-cost way to validate foundational web skills.',
    quickAnswer: { summary: 'LPI Web Development Essentials (030) is an entry-level, vendor-neutral web cert: 40 questions, 60 minutes, $120, pass 500/800, and it does not expire. It covers HTML, CSS, JavaScript, web architecture and accessibility.', advantages: ['Vendor-neutral', 'No expiration', 'Affordable', 'Solid dev foundation'] },
    prerequisites: 'None — open to beginners.',
    eligibility: 'Open to all; aimed at aspiring web developers and students.',
    examMeta: { questions: '40', time: '60 minutes', pass: '500 / 800 (scaled)', fee: '$120 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'HTML', weight: '', note: 'Structure, semantics, forms' },
      { name: 'CSS', weight: '', note: 'Layout, selectors, responsiveness' },
      { name: 'JavaScript basics', weight: '', note: 'DOM, events, syntax' },
      { name: 'Web architecture', weight: '', note: 'Client/server, HTTP' },
      { name: 'Accessibility & tooling', weight: '', note: 'A11y, editors, dev tools' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Format', 'MC & fill-in-the-blank'],
      ['Pass mark', '500 / 800'],
      ['Expiry', 'None (lifetime)']
    ],
    timeline: [{ stage: 'Build small sample pages', duration: '1–3 weeks' }, { stage: 'Book and pass 030', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 030', fee: '$120' }], total: '$120', footnote: 'No expiration; a permanent entry on your record.' },
    difficulty: 'Easy',
    audience: 'Aspiring web developers and students',
    time: '1–3 weeks',
    cost: '$120',
    salaryRange: '',
    faqs: [
      { q: 'What does Web Development Essentials cover?', a: 'The building blocks of the web: HTML structure and semantics, CSS layout and responsiveness, JavaScript fundamentals (DOM, events), web architecture (client/server, HTTP), accessibility and basic tooling.' },
      { q: 'Does it expire?', a: 'No. As an LPI Essentials exam, it does not expire and stays on your record permanently.' },
      { q: 'Is it framework-specific?', a: 'No. It is deliberately vendor-neutral and focuses on core web standards (HTML/CSS/JS) rather than any single framework, so the knowledge transfers anywhere.' },
      { q: 'How should I prepare?', a: 'Build a few small pages by hand using semantic HTML, style them with CSS, and add basic JavaScript for interactivity. Review the official 030 objectives and practice accessibility basics.' }
    ],
    summaryPoints: ['LPI entry-level web development cert (030).', '40 questions, 60 minutes, $120, pass 500/800.', 'Covers HTML, CSS, JavaScript, architecture, accessibility.', 'Does not expire; framework-neutral.'],
    relatedSlugs: ['lpi-linux-essentials', 'lpi-open-source-essentials', 'lpi-security-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/web-development-essentials',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpi-open-source-essentials',
    body: 'LPI',
    tagline: 'Understand open source and free software',
    description: 'LPI Open Source Essentials (Exam 050) is an entry-level certificate on the open-source software movement — its history and philosophy, software licenses, communities and collaboration models, and the practical use of open source in business. It is 40 questions in 60 minutes, $120, passes at 500/800, and does not expire.',
    quickAnswer: { summary: 'LPI Open Source Essentials (050) is an entry-level cert on open-source software — its history, licenses, communities and collaboration — 40 questions, 60 minutes, $120, pass 500/800, and it does not expire.', advantages: ['Vendor-neutral', 'No expiration', 'Affordable', 'Broad open-source literacy'] },
    prerequisites: 'None — open to all.',
    eligibility: 'Open to all; aimed at students, professionals and advocates.',
    examMeta: { questions: '40', time: '60 minutes', pass: '500 / 800 (scaled)', fee: '$120 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'OSS history & philosophy', weight: '', note: 'Free software movement, principles' },
      { name: 'Licenses', weight: '', note: 'Copyleft vs permissive, compliance' },
      { name: 'Communities', weight: '', note: 'Governance, etiquette' },
      { name: 'Collaboration', weight: '', note: 'Git, issues, mailing lists' },
      { name: 'OSS in business', weight: '', note: 'Adoption, strategy' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Format', 'MC & fill-in-the-blank'],
      ['Pass mark', '500 / 800'],
      ['Expiry', 'None (lifetime)']
    ],
    timeline: [{ stage: 'Read the objectives and OSS primers', duration: '1–2 weeks' }, { stage: 'Book and pass 050', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 050', fee: '$120' }], total: '$120', footnote: 'No expiration; a permanent entry on your record.' },
    difficulty: 'Easy',
    audience: 'Students, professionals and open-source advocates',
    time: '1–2 weeks',
    cost: '$120',
    salaryRange: '',
    faqs: [
      { q: 'What does Open Source Essentials cover?', a: 'The open-source ecosystem: its history and philosophy, the difference between copyleft and permissive licenses, how communities and governance work, collaboration via git/issues, and how organizations adopt open source.' },
      { q: 'Does it expire?', a: 'No. Like the other LPI Essentials exams, it does not expire and remains on your record permanently.' },
      { q: 'Is it technical?', a: 'It is conceptual rather than hands-on — it tests understanding of open-source principles, licensing and collaboration, not programming. Accessible to non-engineers.' },
      { q: 'How should I prepare?', a: 'Review the official 050 objectives and skim the LPI/opensource.com primers on licenses (GPL, MIT, Apache), community governance and contribution workflows. Free resources are sufficient.' }
    ],
    summaryPoints: ['LPI entry-level open-source literacy cert (050).', '40 questions, 60 minutes, $120, pass 500/800.', 'Covers OSS history, licenses, communities, collaboration.', 'Does not expire; accessible to non-engineers.'],
    relatedSlugs: ['lpi-linux-essentials', 'lpi-web-development-essentials', 'lpi-security-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/open-source-essentials',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'lpi-bsd-specialist',
    body: 'LPI',
    tagline: 'Prove your BSD systems expertise',
    description: 'The LPI BSD Specialist (Exam 702) validates administration of BSD-family operating systems such as FreeBSD and OpenBSD. It covers installation, package management (pkg/ports), system administration, networking and security. It is one exam (60 questions, 90 minutes, $200), passes at 500/800, is valid for five years, and recommends LPIC-1 or equivalent experience.',
    quickAnswer: { summary: 'LPI BSD Specialist (702) validates BSD-family systems administration — FreeBSD, OpenBSD and friends — in a 60-question, 90-minute exam, $200, pass 500/800, valid five years (LPIC-1 or equivalent recommended).', advantages: ['Niche BSD expertise', 'Vendor-neutral', 'Five-year validity', 'Complements the LPIC ladder'] },
    prerequisites: 'LPIC-1 or equivalent Linux/BSD experience is recommended.',
    eligibility: 'Open to engineers with a Unix-like background.',
    examMeta: { questions: '60', time: '90 minutes', pass: '500 / 800 (scaled)', fee: '$200 USD', format: 'Multiple choice & fill-in-the-blank', admin: 'Pearson VUE center or OnVUE online' },
    topics: [
      { name: 'BSD installation', weight: '', note: 'Installer, disk layout, boot' },
      { name: 'Package management', weight: '', note: 'pkg, ports, updates' },
      { name: 'System administration', weight: '', note: 'Services, users, config' },
      { name: 'Networking', weight: '', note: 'Interfaces, firewall (pf), routing' },
      { name: 'Security', weight: '', note: 'Hardening, jails, privileges' }
    ],
    examEssentials: [
      ['Delivery', 'Pearson VUE center or OnVUE'],
      ['Recommended', 'LPIC-1 or equivalent'],
      ['Pass mark', '500 / 800'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Hands-on with a BSD system', duration: '6–10 weeks' }, { stage: 'Book and pass 702', duration: 'test day' }],
    costBreakdown: { items: [{ item: 'Exam 702', fee: '$200' }], total: '$200', footnote: 'No mandatory prerequisite, but Unix-like experience helps.' },
    difficulty: 'Moderate',
    audience: 'BSD administrators and infrastructure engineers',
    time: '6–10 weeks',
    cost: '$200',
    salaryRange: '$85,000–$120,000',
    faqs: [
      { q: 'What does the BSD Specialist exam cover?', a: 'Administration of BSD-family systems (FreeBSD, OpenBSD and similar): installation, package management with pkg/ports, system administration, networking (including the pf firewall) and security such as jails and privilege separation.' },
      { q: 'Is LPIC-1 required?', a: 'Not strictly, but LPI recommends LPIC-1 or equivalent Unix-like experience because the exam assumes comfort with command-line administration.' },
      { q: 'How long is the exam?', a: '702 is 60 questions in 90 minutes, $200, pass mark 500/800, valid five years — the standard LPI professional format.' },
      { q: 'How should I prepare?', a: 'Install a BSD system (FreeBSD is the most common) and practice package management, service/network configuration, the pf firewall and jails. The official 702 objectives list the exact topics.' }
    ],
    summaryPoints: ['LPI Open Technology cert for BSD systems (702).', '60 questions, 90 minutes, $200, pass 500/800.', 'Covers install, pkg/ports, networking, pf, jails.', 'Valid five years; LPIC-1 or equivalent recommended.'],
    relatedSlugs: ['lpic-1-system-administrator', 'lpi-devops-tools-engineer', 'lpi-open-source-essentials'],
    sourceUrl: 'https://www.lpi.org/our-certifications/bsd-specialist',
    reviewed: '2026-08',
    confidence: 'high'
  }
];
