const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'IT service management & ITSM desk',
    bio: 'We cover PeopleCert/Axelos ITIL 4 certifications. Format and fee facts come from PeopleCert official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Format, pass mark, prerequisites, USD prices, renewal, rescheduling and sunset terms were read from the PeopleCert ITIL 4 Drive Stakeholder Value product page, the PeopleCert help centre FAQ and the PeopleCert ITIL FAQ in October 2026; wage figures come from BLS.',
  lastReviewed: '2026-10',
  salaryOutlook: {
    headline: 'ITIL 4 DSV certifies stakeholder and customer-engagement skill: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'ITIL 4 Specialist: Drive Stakeholder Value (DSV) is one of the ITIL 4 Managing Professional module certifications, covering the customer-facing side of service management - understanding stakeholder needs, managing customer journeys, designing and improving customer experience, and building relationships. It is a methodology certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the IT service and customer-success occupations that use it. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, and customer service representatives (43-4051) about $41,000; service-management and customer-success roles in enterprise IT - service desk leadership, customer relationship management, service delivery - span these ranges, with ITIL knowledge a common requirement in service-management job postings. The structural point is that DSV evidences the stakeholder-facing half of service management: the customer journey from onboarding through value realization, the practices of relationship management and supplier management, and the soft skills (communication, empathy, negotiation) that differentiate service professionals; it is one module in the ITIL 4 Managing Professional stream, and the full MP designation is the recognized advanced credential. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the framework signal in a market where customer-facing service roles reward both technical and relational competence. The DSV exam requires a listed prerequisite (an ITIL v3 certificate, ITIL 4 Foundation or Managing Professional) plus accredited training, runs 40 questions in 90 minutes, and passes at 70 percent.',
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
    headline: 'The ITIL 4 DSV exam requires 70 percent (28 of 40) in 90 minutes; PeopleCert publishes no pass rates',
    summary: 'PeopleCert does not publish pass rates for ITIL 4 module exams, but the assessment mechanics are public and identical across the MP modules. The ITIL 4 Specialist: Drive Stakeholder Value (DSV) exam consists of 40 multiple-choice questions with a time allowance of 90 minutes (or about 113 minutes with the 25 percent extra time PeopleCert gives candidates whose first language differs from the exam language), and the passing score is 70 percent, meaning at least 28 of 40 correct. The exam is closed-book, scenario-based, and delivered by PeopleCert through online proctoring or test centers; official results are issued within 2 business days of submission, after an on-screen preliminary result. PeopleCert lists any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional as the prerequisite for the DSV exam, plus accredited training or ITIL Official eLearning; results are not released without proof of that training. The DSV module covers: understanding stakeholder needs and expectations (the "stakeholder" includes customers, users and other parties), the customer journey (from exploration and onboarding through value realization and potential offboarding), the practices of relationship management, supplier management, and the service-level management elements relevant to stakeholder value, and the techniques for improving customer experience and communication. The exam content is scenario-application: items present stakeholder and customer situations and ask which journey stage, practice or communication approach applies. The honest summary is that the passing bar is 28 of 40 on a closed-book, scenario-based exam, the prerequisite and training proof are firm, and the four MP modules (CDS, DSV, HVIT, DPI) together lead to the ITIL 4 Managing Professional designation.',
    source: { label: 'PeopleCert ITIL 4 Specialist DSV exam', url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-specialist-drive-stakeholder-value-2812' },
    caveat: 'PeopleCert publishes no pass rates; the DSV exam requires 70% (28/40) in 90 minutes, with a listed prerequisite (ITIL v3 certificate, Foundation or Managing Professional) and required accredited training.'
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
      { label: 'MP stream', detail: 'DSV is one of four MP modules (CDS, DSV, HVIT, DPI); passing all four leads to the Managing Professional designation.' },
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
    summary: 'The DSV resource market is anchored by PeopleCert/Axelos official materials. The official PeopleCert eBook and Learning Resource Kit come with the PeopleCert bundles and are the authoritative study text; the Official Mock Exam is included in eLearning+. Accredited training is required before results are released: on PeopleCert’s USD page (October 2026, incl. VAT) eLearning with the exam voucher is DSV,338 and eLearning+ is DSV,647, while the $865 exam bundle is for retakes only, and an Accredited Training Organization sets its own course price. Third-party study guides vary in currency with the ITIL 4 edition; candidates should verify they match the current syllabus. The honest ranking: the official DSV publication, official sample exams, accredited training if required or desired, and third-party materials only as supplement. PeopleCert prices are as of October 2026 and vary by country and partner.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official DSV course publication', values: ['Included in PeopleCert bundles', 'Print/ebook', 'The authoritative study text'] },
      { label: 'Official sample exams / question bank', values: ['Official Mock Exam included in eLearning+', 'Online', 'The closest match to the scenario format'] },
      { label: 'Accredited training course', values: ['Set by each Accredited Training Organization; PeopleCert eLearning $1,338', 'Live/online', 'Required by many employers; bundles the exam'] },
      { label: 'Third-party study guides', values: ['Varies by retailer', 'Print/online', 'Supplement; verify syllabus currency'] }
    ],
    footnote: 'PeopleCert USD prices as of October 2026 incl. VAT; no exam-only voucher is listed for a first attempt. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common DSV mistakes come from treating it as a technical module and from weak Foundation grounding. Mistake one: studying practices in isolation without the customer journey frame; the module is organized around stakeholder journeys, and candidates who learn definitions without the journey stages miss the organizing logic. Mistake two: narrowing "stakeholder" to the customer; the exam tests customers, users and other stakeholders, and items probe whose need is at stake. Mistake three: neglecting the soft-skills and communication content; DSV explicitly covers empathy, listening and communication techniques, and candidates who treat it as "not technical enough to study" miss a trainable cluster. Mistake four: rusty Foundation grounding; the module assumes fluency in the SVS and the practice model. Mistake five: using third-party material that predates the current syllabus. Mistake six: skipping the prerequisite and training proof or the full timed practice exams; both are common failure points. Finally, candidates should plan the MP stream deliberately - DSV, CDS, HVIT and DPI together lead to the Managing Professional designation, and sequencing them while Foundation is fresh is the efficient path.',
    items: [
      { mistake: 'Practices without the journey', fix: 'Learn the customer journey stages as the frame.' },
      { mistake: 'Narrowing stakeholders to customers', fix: 'Customers, users and other stakeholders all matter.' },
      { mistake: 'Skipping the soft-skills content', fix: 'Communication, empathy and listening are tested.' },
      { mistake: 'Rusty Foundation grounding', fix: 'Refresh the SVS and practice model first.' },
      { mistake: 'Using outdated material', fix: 'Match the current ITIL 4 syllabus.' }
    ]
  },
  questionTypes: {
    summary: 'The ITIL 4 DSV exam is 40 multiple-choice questions in 90 minutes (or about 113 minutes with the 25 percent extra time PeopleCert gives candidates whose first language differs from the exam language), closed-book, with a passing score of 70 percent (28 of 40). The content covers understanding stakeholder needs and expectations, the customer journey (exploration, onboarding, service delivery, value realization, offboarding), the practices of relationship management and supplier management, service-level elements, and the communication and soft skills that drive stakeholder value. The exam requires the ITIL 4 Foundation certificate. Samples below are editor-written illustrations of the published exam topics, not live exam items.',
    types: [
      { name: 'Stakeholder needs and expectations', share: 'Not published by PeopleCert', detail: 'Identifying customers, users and other stakeholders.' },
      { name: 'Customer journey', share: 'Not published by PeopleCert', detail: 'Stages from exploration through offboarding.' },
      { name: 'Practices (relationship, supplier)', share: 'Not published by PeopleCert', detail: 'When and how the stakeholder practices apply.' },
      { name: 'Communication and soft skills', share: 'Not published by PeopleCert', detail: 'Empathy, listening, negotiation, service-level communication.' }
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
    summary: 'The ITIL 4 DSV exam is delivered by PeopleCert through online proctoring or at authorized test centers. Exams are mainly taken online with a live proctor; have a valid original photo ID ready for onboarding; the exam is computer-based, 40 questions in 90 minutes, closed-book, with the passing score of 70 percent (28 of 40). For online delivery, complete the PeopleCert system check ahead of time, use a quiet private room with no notes or second screens, and follow the proctor\u2019s rules. A preliminary result shows on screen and official results are issued within 2 business days through your PeopleCert account, and the certification is recorded with a badge; the module counts toward the ITIL 4 Managing Professional designation when combined with the other three MP modules. Afterwards, add the badge to LinkedIn and your resume, and plan the next module (commonly CDS or HVIT) while the Foundation and DSV knowledge is fresh, if the Managing Professional designation is the goal. PeopleCert rules shape the day more than the content does. Run the system compatibility check at least 24 hours before on the same computer, network and room, and again about two hours before, because operating system updates can change your configuration. Your ID must be an original government-issued photo ID showing your full date of birth in Latin characters, and an electronic ID is not accepted. You must be alone in a private room with one visible doorway and one active screen, the microphone stays on, and note-taking is not allowed. Exams under two hours have no breaks. If your connection drops, the proctor pauses the timer until you reconnect. Rescheduling is free up to 48 hours before the start, USD 60 from 48 to 4 hours before, and USD 120 inside 4 hours. Official results are issued within 2 business days of submission, after the on-screen preliminary result.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Proof of the prerequisite certificate and accredited training on your PeopleCert account'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials (closed-book)', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Launch the proctor session (online), or arrive early if you booked a test center.' },
      { time: 'Exam', detail: '40 questions, 90 minutes, closed-book; 70% (28/40) passes.' },
      { time: 'After the exam', detail: 'Preliminary result on screen; official results within 2 business days; badge recorded.' },
      { time: 'Next', detail: 'Plan the next MP module (CDS, HVIT, DPI) for the Managing Professional.' }
    ],
    rules: [
      'A listed prerequisite certificate and proof of accredited training are required for results to be released.',
      'The exam is closed-book; 70% on 40 questions in 90 minutes.',
      'Valid ID is mandatory; personal electronics are prohibited.',
      'DSV is one of four MP modules toward the Managing Professional.'
    ],
    afterwards: 'Add the badge to your profile, and if the Managing Professional is the goal, sequence the remaining MP modules (CDS, HVIT, DPI) while the knowledge is fresh.'
  }
};

export default data;
