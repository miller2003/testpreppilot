const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Project management & methodology certifications desk',
    bio: 'We cover PeopleCert/Axelos project-management certifications. Format and fee facts come from PeopleCert and Axelos official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PRINCE2 Practitioner exam structure, scoring, fees and open-book policy against PeopleCert official pages; verified BLS project-management wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'PRINCE2 Practitioner certifies project-management method mastery: project management specialists earned a $100,750 median in May 2024 (BLS)',
    summary: 'PRINCE2 (Projects IN Controlled Environments) is one of the world\u2019s most widely used project-management methods, and the PRINCE2 Practitioner certification evidences the ability to apply the method to real projects. It is a methodology certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the project-management occupations that use it. BLS reported that project management specialists (SOC 13-1082) earned a median of $100,750 in May 2024, projected to grow 7 percent from 2024 to 2034; management occupations as a group carried a $122,090 median. The structural point is that PRINCE2 is the dominant project-management method in the UK, Europe, Australia and much of the public sector globally, and it is a common requirement in job postings and procurement for project-manager roles in those markets, which is where the certification\u2019s hireability value concentrates; in the US market, the PMP is more common, while PRINCE2 remains the recognized method credential for organizations running PRINCE2-based governance. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the method-specific signal that opens roles in PRINCE2-governed organizations and public-sector contracts. The certification sits on the PeopleCert/Axelos ladder: Foundation first, then Practitioner, with the Practitioner exam being open-book and scenario-based. For a project manager in a PRINCE2 environment, the Practitioner credential is the professional standard, and the honest framing is that it evidences method mastery whose market value follows the employing organization\u2019s governance model.',
    rows: [
      { label: 'Project management specialists median, May 2024', value: '$100,750', note: 'BLS OEWS, SOC 13-1082' },
      { label: 'Management occupations median, May 2024', value: '$122,090', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'PRINCE2 exam sequence', value: 'Foundation then Practitioner', note: 'PeopleCert/Axelos' }
    ],
    growth: 'Project-management-specialist employment is projected to grow 7 percent from 2024 to 2034 per BLS.',
    source: { label: 'BLS Occupational Outlook Handbook - Project Management Specialists', url: 'https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm' }
  },
  passRate: {
    headline: 'PRINCE2 Practitioner requires 55 percent (38 of 68) on an open-book, scenario-based exam; PeopleCert publishes no pass rates',
    summary: 'PeopleCert does not publish pass rates for PRINCE2 exams, but the assessment mechanics are public. The PRINCE2 Practitioner exam is an open-book, scenario-based test: 68 multiple-choice questions, 150 minutes (2.5 hours), with a passing score of 55 percent, meaning at least 38 of 68 correct; the official PRINCE2 manual (Managing Successful Projects with PRINCE2) is the only material permitted in the exam room and may be referenced during the test. The exam is objective-testing in format: each question is based on a scenario (a project description provided in the exam) and tests the candidate\u2019s ability to apply the method - the seven principles, seven themes and seven processes - to that scenario, rather than recall facts. The Practitioner exam requires the Foundation level as a prerequisite (candidates must hold a valid PRINCE2 Foundation certificate or an accepted equivalent). The exam is delivered by PeopleCert through online proctoring or test centers, and results are typically available within a few days. The certification is valid for three years; renewal options include taking the Practitioner re-registration exam or earning continuing professional development credits through PeopleCert. The honest summary is that the passing bar is 38 of 68 on an open-book, scenario-based exam, the Foundation prerequisite is firm, and the scenario-application format is what distinguishes Practitioner from Foundation; the numbers that matter are the 55 percent threshold and the three-year validity.',
    source: { label: 'PeopleCert PRINCE2 Practitioner exam information', url: 'https://www.peoplecert.org/browse-certifications/project-management/PRINCE2-7/PRINCE2-7-Practitioner' },
    caveat: 'PeopleCert publishes no pass rates; the Practitioner exam requires 55% (38/68) on an open-book scenario-based exam, with the Foundation prerequisite and 3-year validity.'
  },
  studyPlan: {
    summary: 'A realistic PRINCE2 Practitioner plan runs 40-60 hours over 3-6 weeks for candidates who already hold Foundation, and more if Foundation is included. The exam is scenario-based and open-book, so preparation is about learning to apply the method, not memorizing definitions. Week 1: review the seven principles (continued business justification, learn from experience, defined roles and responsibilities, manage by stages, manage by exception, focus on products, tailor to suit the project environment), the seven themes (business case, organization, quality, plans, risk, change, progress) and the seven processes (starting up, directing, initiating, controlling a stage, managing product delivery, managing a stage boundary, closing), and take a sample scenario exam to calibrate. Weeks 2-4: work through the official manual chapter by chapter with the scenario-application question style - the key skill is locating the relevant manual section during the open-book exam, so practice tabbing and searching the manual efficiently; complete practice exams under open-book conditions. Weeks 5-6: two full practice exams (68 questions, 150 minutes) and a review of every missed question, then the real exam. The dominant resources are the official PRINCE2 manual (the only permitted in-exam reference), the PeopleCert sample exams and question banks, and an accredited training course (optional but common, since many employers require accredited training or offer it). Candidates should confirm whether their organization expects the PRINCE2 7th edition version, because the exam tracks the current edition.',
    totalHours: '40-60 hours over 3-6 weeks (plus Foundation if required)',
    weeks: [
      { label: 'Week 1', focus: 'Method review and calibration', tasks: ['Review principles, themes, processes', 'Sample scenario exam'], hours: 10 },
      { label: 'Weeks 2-4', focus: 'Manual and scenario application', tasks: ['Chapter-by-chapter with the manual', 'Practice locating sections during open-book time'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Full practice exams', tasks: ['Two full 68-question exams', 'Review every missed question'], hours: 16 }
    ],
    variants: [
      { label: 'Foundation first', detail: 'Candidates without Foundation complete the Foundation course and exam (60 questions, 60 minutes, 55% passing) first.' },
      { label: 'PRINCE2 7th edition', detail: 'The exam tracks the current edition (PRINCE2 7th edition); confirm the edition in the exam specification.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective PRINCE2 Practitioner strategies exploit the open-book format. Strategy one: become fast at navigating the official manual - tab the key sections (processes, themes, management products, roles) and practice locating the relevant pages quickly, because the open-book advantage belongs to candidates who can find the answer, not those who page through randomly; timed practice with the manual open is essential. Strategy two: learn the scenario-application logic - each question presents a project scenario and asks which process, theme, action or product applies; the skill is matching the situation to the method\u2019s rules, so practice with the official question banks to internalize the mapping. Strategy three: master the management products (the documents the method defines - business case, project plan, risk register, etc.) and their content, because a large share of questions test which product is produced by which process. Strategy four: know the seven principles as decision rules, especially "manage by exception" and "tailor to suit the project environment," which anchor many scenario answers. Strategy five: use the official manual for study, not summaries alone, because the exam references it and the language must be familiar. Strategy six: take at least two full practice exams under open-book, timed conditions, because pacing in a 150-minute scenario exam is a learned skill, and the official sample exams are the closest match. Finally, confirm the current edition (PRINCE2 7th edition) and the PeopleCert delivery format (online proctored or test center) before booking.',
    items: [
      { title: 'Learn to use the manual fast', detail: 'Tab key sections; practice locating answers under time.' },
      { title: 'Internalize the scenario mapping', detail: 'Match situations to the method\u2019s rules with official questions.' },
      { title: 'Master the management products', detail: 'Which product each process produces is heavily tested.' },
      { title: 'Practice full open-book exams', detail: '150-minute pacing is a learned skill.' }
    ]
  },
  resourceComparison: {
    summary: 'The PRINCE2 resource market is anchored by the official manual and PeopleCert\u2019s materials. The official PRINCE2 manual (Managing Successful Projects with PRINCE2, current edition) is the required in-exam reference and the primary study text, priced around $50-80 (or included in accredited training). PeopleCert sells official sample exams and question banks (roughly $20-100 depending on the pack) that are the closest match to the real scenario format. Accredited training courses ($500-$2,000 for the combined Foundation and Practitioner or Practitioner-only) are common because many employers require accredited training, and they bundle the exam voucher; self-study with the manual plus official question banks is viable for disciplined candidates. Third-party study guides and question banks ($20-$60) exist but vary in currency with the edition, and candidates should verify they match the current PRINCE2 version. The exam fee itself (Practitioner, roughly $300-500 depending on region and bundle) is separate unless included in a training package. The honest ranking: the official manual, official sample exams, accredited training if required or desired, and third-party materials only as supplement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official PRINCE2 manual', values: ['$50-$80', 'Print/ebook', 'Required study text and in-exam reference'] },
      { label: 'PeopleCert official sample exams', values: ['$20-$100', 'Online', 'The closest match to the scenario format'] },
      { label: 'Accredited training course', values: ['$500-$2,000', 'Live/online', 'Required by many employers; bundles the exam'] },
      { label: 'Third-party study guides', values: ['$20-$60', 'Print/online', 'Supplement; verify edition currency'] }
    ],
    footnote: 'Prices dated 2025-26; the Practitioner exam fee is separate (~$300-500). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common PRINCE2 Practitioner mistakes come from preparing as if it were a recall exam. Mistake one: memorizing definitions instead of learning to apply them; the Practitioner exam is scenario-based and rewards application, and candidates who study like Foundation fail the application questions. Mistake two: not practicing the open-book navigation; the manual is permitted, and candidates who page through randomly waste the 150 minutes, while those who have tabbed and rehearsed locating sections finish comfortably. Mistake three: ignoring the management products; questions testing which product is produced by which process are a large share of the exam, and candidates who skip this layer miss a trainable cluster. Mistake four: taking the exam without the Foundation prerequisite; a candidate who books Practitioner without a valid Foundation certificate cannot sit it. Mistake five: using third-party material from an older edition; the exam tracks the current PRINCE2 edition, and outdated content trains the wrong answers. Mistake six: neglecting the three-year renewal; the certification expires, and renewal requires the re-registration exam or CPD credits, so candidates should plan the validity window. Finally, candidates should practice at least two full timed open-book exams, because pacing is the most common silent failure in the 68-question scenario format.',
    items: [
      { mistake: 'Studying like Foundation', fix: 'Practice scenario application, not definition recall.' },
      { mistake: 'Ignoring the open-book advantage', fix: 'Tab the manual and rehearse locating sections.' },
      { mistake: 'Skipping management products', fix: 'Learn which product each process produces.' },
      { mistake: 'Booking without the Foundation prerequisite', fix: 'Hold a valid Foundation certificate first.' },
      { mistake: 'Using older-edition material', fix: 'Match the current PRINCE2 edition.' }
    ]
  },
  questionTypes: {
    summary: 'The PRINCE2 Practitioner exam is 68 multiple-choice questions in 150 minutes with a passing score of 55 percent (38 of 68), delivered open-book with the official manual permitted. All questions are scenario-based: the exam provides a project scenario, and each question asks which process, theme, principle, management product or action applies to the situation. The content spans the seven principles, seven themes (business case, organization, quality, plans, risk, change, progress) and seven processes, plus the management products and tailoring guidance. Samples below are editor-written illustrations of the published exam specification, not live exam items.',
    types: [
      { name: 'Process questions', share: '~30% of items', detail: 'Which process is responsible for a given activity.' },
      { name: 'Theme questions', share: '~30% of items', detail: 'Applying the business case, risk, change and progress themes.' },
      { name: 'Management products', share: '~20% of items', detail: 'Which product is produced, updated or reviewed by which process.' },
      { name: 'Principles and tailoring', share: '~20% of items', detail: 'Applying the principles, especially manage by exception and tailoring.' }
    ],
    samples: [
      {
        prompt: 'A project is underway and the project board needs an up-to-date view of risks to decide whether to authorize the next stage. Which management product should be reviewed?',
        options: ['A. The risk register', 'B. The project brief', 'C. The lessons log', 'D. The benefits management approach'],
        answer: 'A',
        explanation: 'The risk register records identified risks and their status; it is the product the project board reviews for risk-based stage decisions. The other products serve different purposes.'
      },
      {
        prompt: 'The project manager discovers that a key team member is leaving mid-stage and the plan must change. Under PRINCE2, which theme is most directly engaged?',
        options: ['A. The change theme', 'B. The quality theme', 'C. The business case theme', 'D. The organization theme'],
        answer: 'A',
        explanation: 'The change theme manages issues and changes that affect baselined plans; a plan change triggered by a staffing issue is handled through the change theme\u2019s issue and change control.'
      },
      {
        prompt: 'The project board delegates day-to-day control to the project manager, who reports at defined checkpoints. Which PRINCE2 principle does this most directly illustrate?',
        options: ['A. Manage by exception', 'B. Focus on products', 'C. Learn from experience', 'D. Continued business justification'],
        answer: 'A',
        explanation: 'Manage by exception means the project board sets tolerances and delegates control, intervening only when tolerances are exceeded; checkpoint reporting is the mechanism.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam specification, not live exam items.'
  },
  examDay: {
    summary: 'The PRINCE2 Practitioner exam is delivered by PeopleCert through online proctoring or at authorized test centers. At a test center, arrive 30 minutes early with a valid ID; the exam is computer-based, 68 questions in 150 minutes, and the official manual (paper or the permitted e-book version per the center rules) is the only permitted reference. For online delivery, complete the PeopleCert system check ahead of time, use a quiet private room with no notes or second screens, and follow the proctor\u2019s rules; the manual rules for online delivery must be confirmed before booking. The passing score is 55 percent (38 of 68). Results are typically available within a few days through the PeopleCert portal, and the certification is recorded with a badge; it is valid three years, with renewal via the re-registration exam or CPD credits. Afterwards, add the badge to LinkedIn and your resume, note the expiry date for renewal planning, and confirm whether your employer expects the re-registration or CPD path.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'The official PRINCE2 manual (per center rules)', 'Online: verified system and quiet room'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or unofficial references', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '68 questions, 150 minutes, open-book with the official manual.' },
      { time: 'After the exam', detail: 'Results within a few days; 55% (38/68) passes.' },
      { time: 'Within 3 years', detail: 'Renew via the re-registration exam or CPD credits.' }
    ],
    rules: [
      'The Foundation prerequisite must be held.',
      'The exam is open-book with the official manual only.',
      'The passing score is 55% on 68 questions in 150 minutes.',
      'The certification is valid 3 years with renewal options.'
    ],
    afterwards: 'Add the badge to your profile, note the 3-year expiry for renewal planning, and confirm the employer\u2019s preferred renewal path (re-registration exam or CPD).'
  }
};

export default data;
