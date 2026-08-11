const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'IT service management & ITSM desk',
    bio: 'We cover PeopleCert/Axelos ITIL 4 certifications. Format and fee facts come from PeopleCert official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ITIL 4 DSV exam structure, scoring and prerequisites against PeopleCert official pages; verified BLS IT wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'ITIL 4 DSV certifies stakeholder and customer-engagement skill: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'ITIL 4 Specialist: Drive Stakeholder Value (DSV) is one of the ITIL 4 Managing Professional module certifications, covering the customer-facing side of service management - understanding stakeholder needs, managing customer journeys, designing and improving customer experience, and building relationships. It is a methodology certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the IT service and customer-success occupations that use it. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, and customer service representatives (43-4051) about $41,000; service-management and customer-success roles in enterprise IT - service desk leadership, customer relationship management, service delivery - span these ranges, with ITIL knowledge a common requirement in service-management job postings. The structural point is that DSV evidences the stakeholder-facing half of service management: the customer journey from onboarding through value realization, the practices of relationship management and supplier management, and the soft skills (communication, empathy, negotiation) that differentiate service professionals; it is one module in the ITIL 4 Managing Professional stream, and the full MP designation is the recognized advanced credential. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the framework signal in a market where customer-facing service roles reward both technical and relational competence. The DSV exam requires the ITIL 4 Foundation as a prerequisite, runs 40 questions in 90 minutes, and passes at 65 percent.',
    rows: [
      { label: 'Computer support specialists median, May 2024', value: '$61,550', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'Customer service representatives median, May 2024', value: '~$41,000', note: 'BLS OEWS, SOC 43-4051' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'ITIL 4 MP module', value: 'DSV (Drive Stakeholder Value)', note: 'PeopleCert, requires ITIL 4 Foundation' }
    ],
    growth: 'IT-support employment is projected to grow 6 percent from 2024 to 2034; stakeholder- and customer-engagement skills remain in demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'The ITIL 4 DSV exam requires 65 percent (26 of 40) in 90 minutes; PeopleCert publishes no pass rates',
    summary: 'PeopleCert does not publish pass rates for ITIL 4 module exams, but the assessment mechanics are public and identical across the MP modules. The ITIL 4 Specialist: Drive Stakeholder Value (DSV) exam consists of 40 multiple-choice questions with a time allowance of 90 minutes (or 113 minutes with additional time for non-native-language delivery), and the passing score is 65 percent, meaning at least 26 of 40 correct. The exam is closed-book, scenario-based, and delivered by PeopleCert through online proctoring or test centers; results are typically available within a few days. The DSV exam requires the ITIL 4 Foundation certificate as a prerequisite. The DSV module covers: understanding stakeholder needs and expectations (the "stakeholder" includes customers, users and other parties), the customer journey (from exploration and onboarding through value realization and potential offboarding), the practices of relationship management, supplier management, and the service-level management elements relevant to stakeholder value, and the techniques for improving customer experience and communication. The exam content is scenario-application: items present stakeholder and customer situations and ask which journey stage, practice or communication approach applies. The honest summary is that the passing bar is 26 of 40 on a closed-book, scenario-based exam, the Foundation prerequisite is firm, and the four MP modules (CDS, DSV, HVIT, DPI) together lead to the ITIL 4 Managing Professional designation.',
    source: { label: 'PeopleCert ITIL 4 Specialist DSV exam', url: 'https://www.peoplecert.org/browse-certifications/itil/ITIL-4/ITIL-4-Specialist-Drive-Stakeholder-Value' },
    caveat: 'PeopleCert publishes no pass rates; the DSV exam requires 65% (26/40) in 90 minutes, with the ITIL 4 Foundation prerequisite.'
  },
  studyPlan: {
    summary: 'A realistic DSV plan runs 30-50 hours over 2-4 weeks for candidates who already hold ITIL 4 Foundation. The DSV content: the stakeholder concept (customers, users, and other stakeholders) and how to identify and understand their needs and expectations; the customer journey (the stages from exploration and engagement, onboarding, service delivery, value realization, and offboarding) and how the organization shapes each stage; the practices of relationship management and supplier management; service-level management elements as they drive stakeholder value; and the soft skills and communication techniques (empathy, listening, negotiation) that the module frames as professional capabilities. Week 1: review the ITIL 4 Foundation core concepts and take a sample DSV exam to calibrate; the module builds on Foundation, so a quick refresh of the SVS and the practice model pays. Weeks 2-3: work through the official DSV course materials or study guide with scenario practice - the exam is scenario-based, so the skill is mapping stakeholder situations to journey stages and practices; use the official sample exams and question banks. Week 4: two full practice exams (40 questions, 90 minutes) and a review of every missed question, then the real exam. The dominant resources are the official PeopleCert/Axelos DSV course materials (or an accredited training course), the official sample exams, and a question bank; self-study with the official guide and sample exams is viable for disciplined candidates.',
    totalHours: '30-50 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Foundation refresh and calibration', tasks: ['Review the SVS and practice model', 'Sample DSV exam'], hours: 8 },
      { label: 'Weeks 2-3', focus: 'Module content and scenarios', tasks: ['Customer journey and practices', 'Scenario practice with sample exams'], hours: 30 },
      { label: 'Week 4', focus: 'Full practice exams', tasks: ['Two full 40-question exams', 'Review every missed question'], hours: 10 }
    ],
    variants: [
      { label: 'MP stream', detail: 'DSV is one of four MP modules (CDS, DSV, HVIT, DPI); passing all four plus the Strategic Leader stream leads to the Managing Professional designation.' },
      { label: 'Accredited training', detail: 'Many employers require or provide accredited training; the exam can be taken with or without it.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective DSV strategies treat it as a stakeholder-journey exam rather than a technical one. Strategy one: master the customer journey as the organizing frame - the stages (explore, onboard, deliver, value realization, offboard) and what the organization should do at each stage, because many items test which stage a described situation belongs to and what should happen there. Strategy two: learn the practices by their stakeholder role - relationship management (building and maintaining relationships with stakeholders), supplier management (managing external suppliers), and the service-level elements - because the exam tests when each applies. Strategy three: study the stakeholder concept broadly: customers, users, and other stakeholders (regulators, partners, internal groups) have different needs, and items test identifying whose need is at stake. Strategy four: practice the scenario style with official materials, because the items present stakeholder situations and the skill is mapping them to the framework. Strategy five: refresh the Foundation concepts first, because the module assumes fluency in the SVS and the practice model. Strategy six: plan the MP stream from the start - DSV pairs naturally with CDS (the delivery-side module), HVIT and DPI, and candidates aiming for the Managing Professional designation should sequence the modules while Foundation knowledge is fresh.',
    items: [
      { title: 'Master the customer journey', detail: 'The stages and what happens at each are heavily tested.' },
      { title: 'Learn practices by stakeholder role', detail: 'Relationship and supplier management when they apply.' },
      { title: 'Understand the stakeholder concept', detail: 'Customers, users and other stakeholders have different needs.' },
      { title: 'Use official scenario materials', detail: 'The items map situations to the framework.' },
      { title: 'Plan the MP sequence', detail: 'DSV, CDS, HVIT and DPI lead to the Managing Professional.' }
    ]
  },
  resourceComparison: {
    summary: 'The DSV resource market is anchored by PeopleCert/Axelos official materials. The official ITIL 4 DSV publication (the course book, about $50-80) is the authoritative study text; the official sample exams and question banks (roughly $20-100) are the closest match to the scenario format. Accredited training courses ($500-$2,000 for the module, often bundled with the exam voucher) are common because many employers require or provide accredited training; self-study with the official guide plus sample exams is viable for disciplined candidates. The exam fee itself (DSV, roughly $300-500 depending on region and bundling) is separate unless included. Third-party study guides ($20-$60) vary in currency with the ITIL 4 edition; candidates should verify they match the current syllabus. The honest ranking: the official DSV publication, official sample exams, accredited training if required or desired, and third-party materials only as supplement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official DSV course publication', values: ['$50-$80', 'Print/ebook', 'The authoritative study text'] },
      { label: 'Official sample exams / question bank', values: ['$20-$100', 'Online', 'The closest match to the scenario format'] },
      { label: 'Accredited training course', values: ['$500-$2,000', 'Live/online', 'Required by many employers; bundles the exam'] },
      { label: 'Third-party study guides', values: ['$20-$60', 'Print/online', 'Supplement; verify syllabus currency'] }
    ],
    footnote: 'Prices dated 2025-26; the DSV exam fee is separate (~$300-500). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common DSV mistakes come from treating it as a technical module and from weak Foundation grounding. Mistake one: studying practices in isolation without the customer journey frame; the module is organized around stakeholder journeys, and candidates who learn definitions without the journey stages miss the organizing logic. Mistake two: narrowing "stakeholder" to the customer; the exam tests customers, users and other stakeholders, and items probe whose need is at stake. Mistake three: neglecting the soft-skills and communication content; DSV explicitly covers empathy, listening and communication techniques, and candidates who treat it as "not technical enough to study" miss a trainable cluster. Mistake four: rusty Foundation grounding; the module assumes fluency in the SVS and the practice model. Mistake five: using third-party material that predates the current syllabus. Mistake six: skipping the Foundation prerequisite or the full timed practice exams; both are common failure points. Finally, candidates should plan the MP stream deliberately - DSV, CDS, HVIT and DPI together lead to the Managing Professional designation, and sequencing them while Foundation is fresh is the efficient path.',
    items: [
      { mistake: 'Practices without the journey', fix: 'Learn the customer journey stages as the frame.' },
      { mistake: 'Narrowing stakeholders to customers', fix: 'Customers, users and other stakeholders all matter.' },
      { mistake: 'Skipping the soft-skills content', fix: 'Communication, empathy and listening are tested.' },
      { mistake: 'Rusty Foundation grounding', fix: 'Refresh the SVS and practice model first.' },
      { mistake: 'Using outdated material', fix: 'Match the current ITIL 4 syllabus.' }
    ]
  },
  questionTypes: {
    summary: 'The ITIL 4 DSV exam is 40 multiple-choice questions in 90 minutes (or 113 minutes with additional time for non-native-language delivery), closed-book, with a passing score of 65 percent (26 of 40). The content covers understanding stakeholder needs and expectations, the customer journey (exploration, onboarding, service delivery, value realization, offboarding), the practices of relationship management and supplier management, service-level elements, and the communication and soft skills that drive stakeholder value. The exam requires the ITIL 4 Foundation certificate. Samples below are editor-written illustrations of the published exam topics, not live exam items.',
    types: [
      { name: 'Stakeholder needs and expectations', share: '~25% of items', detail: 'Identifying customers, users and other stakeholders.' },
      { name: 'Customer journey', share: '~35% of items', detail: 'Stages from exploration through offboarding.' },
      { name: 'Practices (relationship, supplier)', share: '~25% of items', detail: 'When and how the stakeholder practices apply.' },
      { name: 'Communication and soft skills', share: '~15% of items', detail: 'Empathy, listening, negotiation, service-level communication.' }
    ],
    samples: [
      {
        prompt: 'A service provider is helping a new customer define what they want from the service before onboarding begins. Which customer journey stage is this?',
        options: ['A. Exploration', 'B. Value realization', 'C. Offboarding', 'D. Service delivery'],
        answer: 'A',
        explanation: 'Exploration is the early journey stage where the provider understands and shapes the customer\u2019s needs and expectations before onboarding and delivery.'
      },
      {
        prompt: 'A service provider learns that users are frustrated because support requests are hard to submit. Which practice is most directly responsible for improving this experience?',
        options: ['A. Relationship management', 'B. Supplier management', 'C. Incident management', 'D. Workforce planning'],
        answer: 'A',
        explanation: 'Relationship management owns the ongoing relationship and the experience of the stakeholder, including improving how users engage; the other practices serve different functions.'
      },
      {
        prompt: 'A provider\u2019s service depends on an external vendor, and the vendor\u2019s delivery quality is declining. Which practice should manage the response?',
        options: ['A. Supplier management', 'B. Service request management', 'C. Problem management', 'D. Change enablement'],
        answer: 'A',
        explanation: 'Supplier management oversees external suppliers\u2019 performance and relationships, including addressing declining delivery quality; the other practices do not own vendor performance.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The ITIL 4 DSV exam is delivered by PeopleCert through online proctoring or at authorized test centers. At a test center, arrive 30 minutes early with a valid ID; the exam is computer-based, 40 questions in 90 minutes, closed-book, with the passing score of 65 percent (26 of 40). For online delivery, complete the PeopleCert system check ahead of time, use a quiet private room with no notes or second screens, and follow the proctor\u2019s rules. Results are typically available within a few days through the PeopleCert portal, and the certification is recorded with a badge; the module counts toward the ITIL 4 Managing Professional designation when combined with the other MP modules and the Strategic Leader stream. Afterwards, add the badge to LinkedIn and your resume, and plan the next module (commonly CDS or HVIT) while the Foundation and DSV knowledge is fresh, if the Managing Professional designation is the goal.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Foundation certificate record (prerequisite)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials (closed-book)', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '40 questions, 90 minutes, closed-book; 65% (26/40) passes.' },
      { time: 'After the exam', detail: 'Results within a few days; badge recorded.' },
      { time: 'Next', detail: 'Plan the next MP module (CDS, HVIT, DPI) for the Managing Professional.' }
    ],
    rules: [
      'The ITIL 4 Foundation prerequisite must be held.',
      'The exam is closed-book; 65% on 40 questions in 90 minutes.',
      'Valid ID is mandatory; personal electronics are prohibited.',
      'DSV is one of four MP modules toward the Managing Professional.'
    ],
    afterwards: 'Add the badge to your profile, and if the Managing Professional is the goal, sequence the remaining MP modules (CDS, HVIT, DPI) while the knowledge is fresh.'
  }
};

export default data;
