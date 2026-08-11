const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'IT service management & ITSM desk',
    bio: 'We cover PeopleCert/Axelos ITIL 4 certifications. Format and fee facts come from PeopleCert official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ITIL 4 CDS exam structure, scoring and prerequisites against PeopleCert official pages; verified BLS IT wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'ITIL 4 CDS certifies service-management skill: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'ITIL 4 Specialist: Create, Deliver and Support (CDS) is one of the ITIL 4 Managing Professional module certifications, covering how IT service delivery and support actually run - value streams, practices, prioritization, and the operational work of creating and supporting services. It is a methodology certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the IT operations and support occupations that use it. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, and network and computer systems administrators (15-1244) about $96,800; IT service-management roles - service desk, incident and problem management, service operations - span these ranges, and ITIL is the dominant service-management framework in enterprise IT, with ITIL knowledge a common requirement in service-management and operations job postings. The structural point is that the CDS module evidences practical service-delivery knowledge - value streams, the practices of incident, problem, change and service request management, and continual improvement - which is the day-to-day vocabulary of IT operations roles; it is one module in the ITIL 4 Managing Professional stream, and the full MP designation (four modules plus the Strategic Leader stream) is the recognized advanced credential. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the framework signal in a market where service-management knowledge differentiates operations candidates. The CDS exam requires the ITIL 4 Foundation as a prerequisite, runs 40 questions in 90 minutes, and passes at 65 percent.',
    rows: [
      { label: 'Computer support specialists median, May 2024', value: '$61,550', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'Network and systems administrators median, May 2024', value: '$96,800', note: 'BLS OEWS, SOC 15-1244' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'ITIL 4 MP module', value: 'CDS (Create, Deliver and Support)', note: 'PeopleCert, requires ITIL 4 Foundation' }
    ],
    growth: 'IT-support employment is projected to grow 6 percent from 2024 to 2034; service-management knowledge remains in demand in enterprise operations.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'The ITIL 4 CDS exam requires 65 percent (26 of 40) in 90 minutes; PeopleCert publishes no pass rates',
    summary: 'PeopleCert does not publish pass rates for ITIL 4 module exams, but the assessment mechanics are public and identical across the MP modules. The ITIL 4 Specialist: Create, Deliver and Support (CDS) exam consists of 40 multiple-choice questions with a time allowance of 90 minutes (or 113 minutes for candidates taking it in a non-native language setting where the exam is delivered with additional time), and the passing score is 65 percent, meaning at least 26 of 40 correct. The exam is closed-book, scenario-based, and delivered by PeopleCert through online proctoring or test centers; results are typically available within a few days. The CDS exam requires the ITIL 4 Foundation certificate as a prerequisite - the Foundation is the entry point to the ITIL 4 stream, and candidates must hold it before any MP module exam. The CDS module covers: how to plan and build a service value stream, the practices of ITIL (with a focus on the service-delivery and support practices - incident, problem, service request, change, service desk, and continual improvement), prioritization and workforce planning, and how to integrate the practices into value streams. The exam content is scenario-application: items present service-management situations and ask which practice, value-stream element or improvement approach applies. The honest summary is that the passing bar is 26 of 40 on a closed-book, scenario-based exam, the Foundation prerequisite is firm, and the four MP modules (CDS, DSV, HVIT, DPI) together lead to the ITIL 4 Managing Professional designation.',
    source: { label: 'PeopleCert ITIL 4 Specialist CDS exam', url: 'https://www.peoplecert.org/browse-certifications/itil/ITIL-4/ITIL-4-Specialist-Create-Deliver-and-Support' },
    caveat: 'PeopleCert publishes no pass rates; the CDS exam requires 65% (26/40) in 90 minutes, with the ITIL 4 Foundation prerequisite.'
  },
  studyPlan: {
    summary: 'A realistic CDS plan runs 30-50 hours over 2-4 weeks for candidates who already hold ITIL 4 Foundation; the module assumes Foundation-level fluency. The CDS content: the service value stream (planning and building value streams that create, deliver and support services), the relevant ITIL practices (incident, problem, service request, change enablement, service configuration, service desk, and continual improvement - with the emphasis on how they work together in value streams), prioritization and workforce management, and the "three types of value" and the operating model concepts that tie the stream together. Week 1: review the ITIL 4 Foundation core concepts (the service value system, the four dimensions, the 34 practices, the value chain) and take a sample CDS exam to calibrate; because the module builds on Foundation, candidates who are rusty on the SVS should refresh first. Weeks 2-3: work through the official CDS course materials or study guide chapter by chapter, with scenario practice - the exam is scenario-based, so the skill is matching situations to practices and value-stream elements; use the official sample exams and question banks. Week 4: two full practice exams (40 questions, 90 minutes) and a review of every missed question, then the real exam. The dominant resources are the official PeopleCert/Axelos CDS course materials (or an accredited training course, which many employers require or provide), the official sample exams, and a question bank; self-study with the official guide and sample exams is viable for disciplined candidates.',
    totalHours: '30-50 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Foundation refresh and calibration', tasks: ['Review the SVS and four dimensions', 'Sample CDS exam'], hours: 8 },
      { label: 'Weeks 2-3', focus: 'Module content and scenarios', tasks: ['Value streams and practices', 'Scenario practice with sample exams'], hours: 30 },
      { label: 'Week 4', focus: 'Full practice exams', tasks: ['Two full 40-question exams', 'Review every missed question'], hours: 10 }
    ],
    variants: [
      { label: 'MP stream', detail: 'CDS is one of four MP modules (CDS, DSV, HVIT, DPI); passing all four plus the Strategic Leader stream leads to the Managing Professional designation.' },
      { label: 'Accredited training', detail: 'Many employers require or provide accredited training; the exam can be taken with or without it.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective CDS strategies treat it as a scenario-application exam built on Foundation fluency. Strategy one: refresh the ITIL 4 Foundation concepts before the module, because the exam assumes fluency in the service value system, the four dimensions, and the practice model; candidates who are rusty on Foundation struggle with the module\u2019s framing. Strategy two: learn the practices by what they do and when they are used, not by rote definitions - the exam presents service situations and asks which practice or value-stream element applies, so the skill is mapping situations to practices (incident vs problem vs service request is the most-tested distinction). Strategy three: study the value-stream concept as the organizing frame - CDS is about how services are created, delivered and supported through value streams, and the exam tests the flow, the steps and the practices within the stream. Strategy four: use the official sample exams and question banks, because the scenario style is distinctive and PeopleCert\u2019s materials are the closest match. Strategy five: practice the 90-minute pacing with full exams, because 40 scenario questions reward time management. Strategy six: plan the MP stream from the start - CDS pairs naturally with DSV (Drive Stakeholder Value), HVIT and DPI, and candidates aiming for the Managing Professional designation should sequence the modules while the Foundation knowledge is fresh.',
    items: [
      { title: 'Refresh Foundation first', detail: 'The module assumes fluency in the SVS and four dimensions.' },
      { title: 'Learn practices by use', detail: 'Incident vs problem vs service request is the key distinction.' },
      { title: 'Master the value stream', detail: 'CDS is about creating, delivering and supporting through streams.' },
      { title: 'Use official sample exams', detail: 'The scenario style is distinctive and official materials match.' },
      { title: 'Plan the MP sequence', detail: 'CDS, DSV, HVIT and DPI lead to the Managing Professional.' }
    ]
  },
  resourceComparison: {
    summary: 'The CDS resource market is anchored by PeopleCert/Axelos official materials. The official ITIL 4 CDS publication (the course book, about $50-80) is the authoritative study text; the official sample exams and question banks (roughly $20-100) are the closest match to the scenario format. Accredited training courses ($500-$2,000 for the module, often bundled with the exam voucher) are common because many employers require or provide accredited training; self-study with the official guide plus sample exams is viable for disciplined candidates. The exam fee itself (CDS, roughly $300-500 depending on region and whether it is bundled with training) is separate unless included. Third-party study guides and question banks ($20-$60) exist and vary in currency with the ITIL 4 edition; candidates should verify they match the current syllabus. The honest ranking: the official CDS publication, official sample exams, accredited training if required or desired, and third-party materials only as supplement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official CDS course publication', values: ['$50-$80', 'Print/ebook', 'The authoritative study text'] },
      { label: 'Official sample exams / question bank', values: ['$20-$100', 'Online', 'The closest match to the scenario format'] },
      { label: 'Accredited training course', values: ['$500-$2,000', 'Live/online', 'Required by many employers; bundles the exam'] },
      { label: 'Third-party study guides', values: ['$20-$60', 'Print/online', 'Supplement; verify syllabus currency'] }
    ],
    footnote: 'Prices dated 2025-26; the CDS exam fee is separate (~$300-500). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common CDS mistakes come from weak Foundation grounding and definition-level study. Mistake one: taking the module without refreshing Foundation; the exam assumes fluency in the SVS and the four dimensions, and candidates who passed Foundation years ago struggle with the framing. Mistake two: memorizing practice definitions instead of learning when each practice is used; the exam is scenario-based, and the incident-problem-service request distinction is the most-tested and most-missed cluster. Mistake three: ignoring the value-stream concept; CDS is organized around how services flow through value streams, and candidates who study practices in isolation miss the organizing frame. Mistake four: using third-party material that predates the current ITIL 4 syllabus; outdated content trains the wrong answers. Mistake five: skipping the full timed practice exams; 40 scenario questions in 90 minutes reward pacing rehearsal. Mistake six: forgetting the Foundation prerequisite; a candidate who books CDS without a valid ITIL 4 Foundation certificate cannot sit it. Finally, candidates should plan the MP stream deliberately - CDS, DSV, HVIT and DPI together lead to the Managing Professional designation, and sequencing them while Foundation is fresh is the efficient path.',
    items: [
      { mistake: 'Rusty Foundation grounding', fix: 'Refresh the SVS and four dimensions first.' },
      { mistake: 'Definition-level study', fix: 'Learn when each practice is used in scenarios.' },
      { mistake: 'Ignoring the value stream', fix: 'CDS is organized around service value streams.' },
      { mistake: 'Using outdated material', fix: 'Match the current ITIL 4 syllabus.' },
      { mistake: 'Skipping the Foundation prerequisite', fix: 'Hold a valid ITIL 4 Foundation certificate.' }
    ]
  },
  questionTypes: {
    summary: 'The ITIL 4 CDS exam is 40 multiple-choice questions in 90 minutes (or 113 minutes with additional time for non-native-language delivery), closed-book, with a passing score of 65 percent (26 of 40). The content covers planning and building service value streams, the service-delivery and support practices (incident, problem, service request, change enablement, service configuration, service desk, continual improvement), prioritization and workforce planning, and the operating model concepts. The exam requires the ITIL 4 Foundation certificate. Samples below are editor-written illustrations of the published exam topics, not live exam items.',
    types: [
      { name: 'Service value streams', share: '~30% of items', detail: 'Planning and building value streams for delivery and support.' },
      { name: 'Practices in action', share: '~40% of items', detail: 'Incident, problem, request, change, service desk, improvement.' },
      { name: 'Prioritization and workforce', share: '~15% of items', detail: 'Prioritizing work and planning capacity.' },
      { name: 'Operating model concepts', share: '~15% of items', detail: 'Value, outcomes, and the flow of work.' }
    ],
    samples: [
      {
        prompt: 'A user reports an application error, and the service desk creates a record and routes it. Later, the same root cause affects multiple users. Which practice should own the analysis of the underlying cause?',
        options: ['A. Incident management', 'B. Problem management', 'C. Service request management', 'D. Change enablement'],
        answer: 'B',
        explanation: 'Problem management analyzes the root cause of incidents (especially recurring ones affecting multiple users); incident management restores service, and the other practices serve different purposes.'
      },
      {
        prompt: 'A service team has documented a value stream showing how a service is delivered and supported. What is the primary purpose of the value stream view?',
        options: ['A. To optimize the flow of work that creates value', 'B. To replace the service catalogue', 'C. To record financial budgets', 'D. To list all incidents'],
        answer: 'A',
        explanation: 'A value stream maps the flow of work that creates and supports a service, enabling optimization of that flow; it is a flow view, not a catalogue, budget or incident list.'
      },
      {
        prompt: 'During a service outage, the team restores service quickly but does not document the root cause. Which practice is being neglected?',
        options: ['A. Problem management', 'B. Service desk', 'C. Service request management', 'D. Supplier management'],
        answer: 'A',
        explanation: 'Restoring service without root-cause analysis skips the problem-management responsibility; the incident may recur without the underlying cause addressed.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The ITIL 4 CDS exam is delivered by PeopleCert through online proctoring or at authorized test centers. At a test center, arrive 30 minutes early with a valid ID; the exam is computer-based, 40 questions in 90 minutes, closed-book, with the passing score of 65 percent (26 of 40). For online delivery, complete the PeopleCert system check ahead of time, use a quiet private room with no notes or second screens, and follow the proctor\u2019s rules. Results are typically available within a few days through the PeopleCert portal, and the certification is recorded with a badge; the module counts toward the ITIL 4 Managing Professional designation when combined with the other MP modules and the Strategic Leader stream. Afterwards, add the badge to LinkedIn and your resume, and plan the next module (commonly DSV or HVIT) while the Foundation and CDS knowledge is fresh, if the Managing Professional designation is the goal.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Foundation certificate record (prerequisite)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials (closed-book)', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '40 questions, 90 minutes, closed-book; 65% (26/40) passes.' },
      { time: 'After the exam', detail: 'Results within a few days; badge recorded.' },
      { time: 'Next', detail: 'Plan the next MP module (DSV, HVIT, DPI) for the Managing Professional.' }
    ],
    rules: [
      'The ITIL 4 Foundation prerequisite must be held.',
      'The exam is closed-book; 65% on 40 questions in 90 minutes.',
      'Valid ID is mandatory; personal electronics are prohibited.',
      'CDS is one of four MP modules toward the Managing Professional.'
    ],
    afterwards: 'Add the badge to your profile, and if the Managing Professional is the goal, sequence the remaining MP modules (DSV, HVIT, DPI) while the knowledge is fresh.'
  }
};

export default data;
