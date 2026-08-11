const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud & cybersecurity certifications desk',
    bio: 'We cover Cloud Security Alliance certifications. Format and fee facts come from the CSA official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CCSK exam structure, scoring and fees against the Cloud Security Alliance official pages; verified BLS cybersecurity wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'CCSK certifies cloud-security fundamentals: information security analysts earned a $124,910 median in May 2024 (BLS)',
    summary: 'The Certificate of Cloud Security Knowledge (CCSK) is the Cloud Security Alliance\u2019s foundational cloud-security certification, covering the CSA Guidance for Critical Areas of Focus in Cloud Computing - cloud architecture, governance, data security, identity, and the shared-responsibility model. It is a vendor-neutral certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the security occupations it serves. BLS reported that information security analysts (SOC 15-1212) earned a median of $124,910 in May 2024, projected to grow 30 percent from 2024 to 2034 - one of the fastest-growing occupations BLS tracks; cloud-security roles (cloud security analyst, cloud security engineer, security architect) sit within and above this range, and the shared-responsibility and cloud-architecture knowledge the CCSK certifies is the vocabulary of those roles. The structural point is that the CCSK is the most widely recognized vendor-neutral cloud-security credential - it is commonly paired with vendor cloud certifications (AWS, Azure, GCP security) and is a common requirement or preference in cloud-security job postings; it is also the natural precursor to the CCSP (Certified Cloud Security Professional) for the advanced credential. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the domain signal in a market where cloud security expertise is in high demand. The CCSK exam is 60 questions in 90 minutes (verify the current format), passes at 80 percent, and costs about $395, with the voucher including the exam and the training materials access.',
    rows: [
      { label: 'Information security analysts median, May 2024', value: '$124,910', note: 'BLS OEWS, SOC 15-1212' },
      { label: 'Computer and mathematical occupations median, May 2024', value: '$105,850', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'CCSK exam', value: '60 questions / 90 min (verify)', note: 'CSA, 80% passing' }
    ],
    growth: 'Information-security-analyst employment is projected to grow 30 percent from 2024 to 2034; cloud security is a leading demand area.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'CCSK requires 80 percent (48 of 60) on the exam; the CSA publishes no pass rates',
    summary: 'The Cloud Security Alliance does not publish pass-rate statistics for the CCSK, but the assessment mechanics are public. The CCSK exam is a computer-based test of 60 multiple-choice questions with a time allowance of 90 minutes, and the passing score is 80 percent, meaning at least 48 of 60 correct (verify the current question count and format on the CSA site, as the exam has been updated over the years, including versions covering the CSA Guidance v4 and v5). The exam is delivered through the CSA\u2019s online proctored format, and the voucher price of about $395 includes the exam plus access to the official training materials (the CSA Security Guidance and the training modules); candidates who do not pass may purchase a retake voucher. The exam covers the domains of the CSA Guidance: cloud computing concepts and architecture, governance and enterprise risk management, legal and compliance, data security, information governance, management plane and business continuity, infrastructure security, virtualization and containers, incident response, application security, data and encryption, identity and access management, security as a service, and the related cloud technology areas. The certification is valid for two years, and renewal requires re-certification (CSA moved CCSK to a two-year validity with recertification; verify the current policy). The honest summary is that the passing bar is 48 of 60, the voucher includes the official training access, and the published CSA Guidance is the authoritative study source.',
    source: { label: 'Cloud Security Alliance - CCSK', url: 'https://cloudsecurityalliance.org/education/ccsk/' },
    caveat: 'The CSA publishes no pass rates; CCSK requires 80% (48/60) with a 2-year validity (verify current format and policy).'
  },
  studyPlan: {
    summary: 'A realistic CCSK plan runs 40-80 hours over 3-6 weeks for a security professional with some cloud exposure, and more for newcomers. The exam is based on the CSA Security Guidance (the free PDF is the official body of knowledge) and the CSA Cloud Controls Matrix, covering: cloud architecture and the shared-responsibility model, governance and risk management, legal and compliance, data security and encryption, identity and access management, infrastructure and network security, virtualization and containers, incident response, application security, and the management plane. Week 1: read the CSA Security Guidance v4/v5 summary and the Cloud Controls Matrix overview, and take a baseline assessment; candidates with AWS/Azure/GCP experience start with the architecture domain largely covered. Weeks 2-4: work through the guidance domains with the official training modules (included with the voucher) - the key concepts are the shared-responsibility model (what the provider secures vs what the customer secures), the cloud deployment and service models, data protection and encryption strategies, IAM, and the governance and compliance domains. Week 5: review the Cloud Controls Matrix and practice with the official practice questions and third-party question banks. Week 6: take the exam. The dominant resources are the free CSA Security Guidance PDF, the training modules included with the voucher, and a practice-question bank; candidates who combine the guidance reading with the training modules and hands-on cloud experience are the realistic pass profile.',
    totalHours: '40-80 hours over 3-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Guidance and baseline', tasks: ['Read the CSA Security Guidance summary', 'Cloud Controls Matrix overview'], hours: 8 },
      { label: 'Weeks 2-4', focus: 'Domain coverage', tasks: ['Training modules per domain', 'Shared responsibility, data security, IAM emphasis'], hours: 40 },
      { label: 'Week 5', focus: 'Review and practice', tasks: ['Cloud Controls Matrix review', 'Official and third-party practice questions'], hours: 15 },
      { label: 'Week 6', focus: 'Exam', tasks: ['Take the proctored exam (80%)'], hours: 3 }
    ],
    variants: [
      { label: 'Experience track', detail: 'Security professionals with cloud exposure can compress to 3-4 weeks with the guidance and practice questions.' },
      { label: 'Path to CCSP', detail: 'CCSK is the natural precursor to the CCSP; many candidates take CCSK first and CCSP after.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective CCSK strategies center on the shared-responsibility model and the guidance\u2019s domain structure. Strategy one: master the shared-responsibility model cold - what the cloud provider secures (physical infrastructure, the hypervisor, the management plane) versus what the customer secures (data, configurations, IAM, application security) - because it is the conceptual spine of the exam and the framing for many scenario items. Strategy two: read the CSA Security Guidance as the primary source, because the exam is written against it and the Cloud Controls Matrix is the control-by-control companion; the guidance PDF is free and is the official body of knowledge. Strategy three: learn the cloud models precisely - the deployment models (public, private, hybrid, community), the service models (IaaS, PaaS, SaaS) and their security implications, and the management plane concept - because these recur across the exam. Strategy four: master the data-security and IAM domains, which carry heavy weight: encryption strategies (encrypting data at rest, in transit, in use), key management, and identity federation and access control. Strategy five: use the training modules included with the voucher and a practice-question bank, because the question style is distinctive and exam-condition repetition is the final checkpoint. Strategy six: plan the two-year renewal and the CCSP path, because the certification\u2019s career value compounds with the advanced credential.',
    items: [
      { title: 'Master shared responsibility', detail: 'The conceptual spine of the exam and many scenario items.' },
      { title: 'Read the CSA Guidance', detail: 'The free official body of knowledge.' },
      { title: 'Learn the cloud models precisely', detail: 'Deployment and service models and their security implications.' },
      { title: 'Weight data security and IAM', detail: 'Encryption, key management and identity are heavily tested.' },
      { title: 'Use the included training', detail: 'The voucher includes the official training modules.' }
    ]
  },
  resourceComparison: {
    summary: 'The CCSK resource market is anchored by the Cloud Security Alliance\u2019s official materials. The CSA Security Guidance (free PDF) and the Cloud Controls Matrix (free) are the official body of knowledge and the authoritative study sources. The exam voucher (about $395) includes the exam plus access to the official training modules, which makes the voucher the core purchase; retake vouchers are separate. Official practice questions and the training modules are included with the voucher or available through CSA channels. Third-party courses and question banks ($100-$500) add structure and practice volume, and the honest caveat is that only the CSA materials match the exam\u2019s domain scope precisely. The certification is valid two years, and renewal requires re-certification (verify the current policy). The honest ranking: the free CSA Guidance and CCM, the exam voucher with the included training (the required purchase), a practice-question bank for volume, and a course only for structured learners. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CSA Security Guidance', values: ['Free PDF', 'Downloadable', 'The official body of knowledge'] },
      { label: 'Cloud Controls Matrix', values: ['Free', 'Online', 'Control-by-control reference'] },
      { label: 'CCSK exam voucher (incl. training)', values: ['~$395', 'Online proctored', 'The exam plus the official training modules'] },
      { label: 'Third-party course / question bank', values: ['$100-$500', 'Online', 'Structure and practice volume'] }
    ],
    footnote: 'Prices dated 2025-26; the CCSK voucher is ~$395 and includes the training access. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common CCSK mistakes come from misreading the shared-responsibility model and skipping the guidance. Mistake one: blurring the shared-responsibility boundaries; the exam\u2019s most-tested concept is what the provider secures versus what the customer secures, and candidates who answer from a generic "cloud is secure" mindset miss the scenario items. Mistake two: studying vendor materials only; the CCSK is vendor-neutral and based on the CSA Guidance, and candidates who study AWS or Azure security content without the guidance miss the framework items. Mistake three: skipping the governance and compliance domains as "boring"; legal, compliance and risk domains carry real weight and are commonly skipped by technical candidates. Mistake four: under-preparing data security and IAM; encryption strategies and identity are heavily tested, and candidates who skim them lose the largest clusters. Mistake five: using outdated guidance; the exam tracks the current CSA Guidance version (v4/v5), and older materials train the wrong scope. Mistake six: ignoring the two-year renewal; the certification expires and requires re-certification, so the validity window should be planned from the start.',
    items: [
      { mistake: 'Blurring shared responsibility', fix: 'Master what the provider secures vs the customer.' },
      { mistake: 'Vendor-only study', fix: 'The exam is based on the CSA Guidance, vendor-neutral.' },
      { mistake: 'Skipping governance and compliance', fix: 'Legal and risk domains carry real weight.' },
      { mistake: 'Skimming data security and IAM', fix: 'Encryption and identity are the heaviest clusters.' },
      { mistake: 'Using outdated guidance', fix: 'Match the current CSA Guidance version.' }
    ]
  },
  questionTypes: {
    summary: 'The CCSK exam is 60 multiple-choice questions in 90 minutes (verify the current format), passing at 80 percent (48 of 60), delivered online with proctoring. The content follows the CSA Security Guidance domains: cloud architecture and shared responsibility, governance and risk, legal and compliance, data security and encryption, information governance, infrastructure and network security, virtualization and containers, incident response, application security, identity and access management, and the Cloud Controls Matrix. Samples below are editor-written illustrations of the published exam domains, not live exam items.',
    types: [
      { name: 'Architecture and shared responsibility', share: '~25% of items', detail: 'Models, management plane, who secures what.' },
      { name: 'Data security and encryption', share: '~20% of items', detail: 'At rest, in transit, in use; key management.' },
      { name: 'IAM and governance', share: '~20% of items', detail: 'Identity, federation, risk and compliance.' },
      { name: 'Infrastructure, applications, incident response', share: '~35% of items', detail: 'Network, containers, app security, IR.' }
    ],
    samples: [
      {
        prompt: 'In an IaaS deployment, which responsibility typically remains with the cloud customer?',
        options: ['A. Securing the physical data center', 'B. Configuring the guest operating system and its security', 'C. Patching the hypervisor', 'D. Maintaining the network fabric'],
        answer: 'B',
        explanation: 'Under shared responsibility in IaaS, the customer secures the guest OS, applications and data configurations; the provider secures the physical infrastructure, hypervisor and network fabric.'
      },
      {
        prompt: 'Which approach best protects data at rest in a cloud object store?',
        options: ['A. Server-side encryption with customer-managed keys', 'B. Relying on the provider\u2019s public settings', 'C. Storing the data in plain text for simplicity', 'D. Only encrypting the access logs'],
        answer: 'A',
        explanation: 'Server-side encryption with customer-managed keys protects data at rest while giving the customer control over the keys; the other options do not protect the data.'
      },
      {
        prompt: 'An organization wants to centralize access control across cloud services using existing corporate identities. Which approach is most appropriate?',
        options: ['A. Identity federation with single sign-on', 'B. Separate admin accounts per service', 'C. Shared credentials across the team', 'D. Disabling MFA for convenience'],
        answer: 'A',
        explanation: 'Identity federation with SSO links corporate identity to cloud services with centralized access control; the other options fragment or weaken access management.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam domains, not live exam items.'
  },
  examDay: {
    summary: 'The CCSK exam is delivered online with proctoring through the CSA\u2019s exam platform (and at some events with in-person delivery; verify the current options). Candidates register on the CSA site, pay the voucher fee (about $395), complete the official training access, and schedule the proctored exam window. On the day, complete the proctor system check ahead of time, use a quiet private room with a stable connection, and follow the proctor\u2019s rules (no notes, no second screens, no assistance); the exam runs 60 questions in 90 minutes with an 80 percent passing line. Results are typically available shortly after. The certification is valid two years, and renewal requires re-certification (verify the current policy). Afterwards, add the badge to LinkedIn and your resume, note the expiry for renewal planning, and consider the CCSP as the advanced next step, because the CCSK-to-CCSP path is the standard progression for cloud-security careers.',
    bring: ['CSA account sign-in', 'Verified system and quiet room for proctoring', 'Appointment confirmation', 'Stable internet connection'],
    leave: ['Notes or study materials (prohibited)', 'Second monitors or devices', 'Distractions - the exam is proctored'],
    timeline: [
      { time: 'Before', detail: 'Register, pay the voucher, and complete the training access.' },
      { time: 'Exam', detail: '60 questions, 90 minutes, proctored; 80% (48/60) passes.' },
      { time: 'After', detail: 'Result on screen; badge issued.' },
      { time: 'Within 2 years', detail: 'Renew by re-certification (verify the current policy).' }
    ],
    rules: [
      'The exam is online and proctored.',
      'The passing score is 80% on 60 questions.',
      'No notes, second monitors, or assistance are permitted.',
      'The certification is valid 2 years with re-certification.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, note the expiry for renewal planning, and plan the CCSP as the advanced cloud-security step.'
  }
};

export default data;
