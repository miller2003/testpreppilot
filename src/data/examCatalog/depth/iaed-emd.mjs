const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Public safety & emergency communications desk',
    bio: 'We cover emergency-dispatch certification programs including the International Academies of Emergency Dispatch. Format and fee facts come from IAED official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IAED EMD certification structure and requirements against IAED official pages; verified BLS dispatcher wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'EMD certification is the standard for 911 dispatch roles: public safety telecommunicators earned a mean of about $48,670 in May 2024 (BLS)',
    summary: 'The IAED Emergency Medical Dispatch (EMD) certification is the international standard for emergency dispatchers who take 911 calls and provide pre-arrival medical instructions; the related EFD (fire) and EPD (police) certifications cover the other dispatch disciplines. It is a professional certification rather than a job license for one occupation, so no single BLS SOC code attaches to it; the salary story belongs to the dispatch occupation it serves. BLS reported that public safety telecommunicators (SOC 43-5031) - the occupational title for 911 dispatchers - had a mean wage of about $48,670 in May 2024, with the occupation employing about 300,000 people and projected to grow roughly 3 percent from 2024 to 2034; public-safety agencies across the US and internationally embed IAED certification in their hiring and continuing-education requirements, and many agencies require the EMD (and often EFD/EPD) certifications as conditions of employment or promotion within the dispatch center. BLS classifies workers by job duty, not certifications, so no certificate maps to a specific wage; the value is the professional standard in a role where certification is a de facto hiring requirement and where agencies pay dispatcher wages set by municipal salary schedules. For a candidate entering dispatch, the EMD certification (earned through an agency-sponsored or open course) is the recognized entry credential, and the honest framing is that the certificate evidences the protocol-driven dispatch competency that agencies require, with the wage following the agency job.',
    rows: [
      { label: 'Public safety telecommunicators mean wage, May 2024', value: '~$48,670', note: 'BLS OEWS, SOC 43-5031 (mean; median similar)' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Protective service occupations median, May 2024', value: '$50,580', note: 'BLS OEWS occupational group' },
      { label: 'IAED certification family', value: 'EMD, EFD, EPD', note: 'International Academies of Emergency Dispatch' }
    ],
    growth: 'Public-safety-telecommunicator employment is projected to grow about 3 percent from 2024 to 2034; certification is a standard hiring requirement in dispatch centers.',
    source: { label: 'BLS Occupational Outlook Handbook - Public Safety Telecommunicators', url: 'https://www.bls.gov/ooh/office-and-administrative-support/public-safety-telecommunicators.htm' }
  },
  passRate: {
    headline: 'The IAED EMD certification requires a passing score of 80 percent on a 50-question exam after a 2-4 day course; IAED publishes no pass rates',
    summary: 'The International Academies of Emergency Dispatch (IAED) does not publish a national pass-rate statistic for the EMD certification, but the certification mechanics are public. The EMD certification is earned by completing the Emergency Medical Dispatch course (typically 2-4 days, delivered in person by IAED-accredited instructors or through the approved online pathway), which trains dispatchers in the Medical Priority Dispatch System (MPDS): structured call-taking, the Chief Complaint codes, the Key Questions, post-dispatch and pre-arrival instructions, and the dispatch-life-support protocols. The course ends with a certification exam - commonly 50 multiple-choice questions with a passing score of 80 percent (40 of 50) - and candidates who pass become certified EMDs. The certification is valid for two years, and renewal requires completing continuing education (the IAED requires a specified number of continuing-dispatch-education hours within the two-year cycle) and re-certification. In practice, most candidates who complete the course pass, because the content is protocol-driven and the course is the preparation, but the exam is real and the 80 percent bar means the protocol details must be learned, not skimmed. The honest summary is that the bar is 40 of 50 on the certification exam, the certification is valid two years with continuing education for renewal, and the MPDS protocols are the exam\u2019s entire content.',
    source: { label: 'IAED EMD certification information', url: 'https://www.emergencydispatch.org/what-we-do/education-certification' },
    caveat: 'IAED publishes no pass rates; the EMD exam requires 80% (40/50) with a 2-year validity and continuing-education renewal.'
  },
  studyPlan: {
    summary: 'The EMD certification plan is driven by the course: 2-4 days of in-person (or approved online) training followed by the certification exam, with 10-20 hours of self-study around it. The content is the Medical Priority Dispatch System: the structure of the emergency call (caller verification, Chief Complaint selection), the 32 Chief Complaint codes and their Key Questions, the response determinants (which units are dispatched), and the pre-arrival instructions and dispatch-life-support protocols (CPR, hemorrhage control, childbirth, airway management). A realistic plan: before the course, review the MPDS protocol cards and the course materials the agency or IAED provides (2-4 hours), because the course moves fast and prior familiarity with the protocol structure doubles retention. During the course, complete the practical call-taking drills and the scenario practice, because the exam includes protocol-application items and the drills are the practice. After the course, study the protocol cards with a focus on the Key Questions and the dispatch-life-support instructions (5-10 hours), then take the certification exam. The single most important thing to master is the protocol flow: Chief Complaint selection, Key Questions in order, and the pre-arrival instructions that follow, because the exam tests whether the candidate applies the protocols in the prescribed sequence. Renewal every two years requires continuing-education hours, so the study habit should continue through the certification cycle.',
    totalHours: 'Course (2-4 days) + 10-20 hours self-study',
    weeks: [
      { label: 'Before the course', focus: 'Protocol familiarity', tasks: ['Review the MPDS protocol cards', 'Course materials from the provider'], hours: 3 },
      { label: 'The course', focus: 'EMD training', tasks: ['Attend the 2-4 day course', 'Call-taking drills and scenario practice'], hours: 24 },
      { label: 'After the course', focus: 'Exam preparation', tasks: ['Key Questions and dispatch-life-support review', 'Take the 50-question exam (80%)'], hours: 8 }
    ],
    variants: [
      { label: 'Agency-sponsored', detail: 'Most dispatchers are certified through agency-sponsored courses; open-enrollment courses are also available.' },
      { label: 'EFD and EPD', detail: 'Fire (EFD) and police (EPD) dispatch certifications follow the same structure with their own protocol systems.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective EMD strategies treat the MPDS protocols as the entire curriculum. Strategy one: learn the protocol flow as a sequence - caller verification, Chief Complaint selection, Key Questions in order, and pre-arrival instructions - because the exam tests whether the candidate applies the steps in the prescribed order, and dispatchers who memorize facts without the flow miss the application items. Strategy two: memorize the dispatch-life-support instructions (CPR, airway, hemorrhage, childbirth) because they carry the highest stakes and recur across the exam; the exact instruction sequence must be learned, not paraphrased. Strategy three: practice with scenario calls, because the exam presents call situations and asks which Chief Complaint code, Key Question or instruction applies; working through real-style scenarios with the protocol cards is the highest-yield practice. Strategy four: complete the course\u2019s practical drills seriously - the call-taking practice is where the protocol flow becomes automatic. Strategy five: study the protocol cards between sessions rather than only during the course, because the volume of codes and questions is large and steady review beats cramming. Strategy six: plan the two-year renewal from the start - track the continuing-education requirements - because lapsed certification matters in a role where certification is a condition of employment.',
    items: [
      { title: 'Learn the protocol flow', detail: 'Verification, Chief Complaint, Key Questions, instructions - in order.' },
      { title: 'Memorize dispatch-life-support', detail: 'CPR, airway, hemorrhage and childbirth sequences.' },
      { title: 'Practice scenario calls', detail: 'Match call situations to codes and questions.' },
      { title: 'Plan the 2-year renewal', detail: 'Continuing-education hours keep the certification current.' }
    ]
  },
  resourceComparison: {
    summary: 'The EMD resource market is organized around IAED and the accredited training providers. The IAED website provides the certification overview, the course catalog and the MPDS information - the protocol system itself is proprietary to IAED, and the protocol cards and materials are provided through the course (included in the course fee, which is typically $300-$800 depending on the provider and delivery, with agency-sponsored courses often paid by the employer). The certification exam is included in the course. Free resources are limited because the MPDS protocols are proprietary, but the IAED site and the course preview materials provide orientation. Continuing education for renewal is delivered through IAED-approved channels. Third-party study guides for the EMD exam are scarce and unnecessary because the course materials are the complete content. The honest ranking: the accredited course and its materials (the required purchase), the protocol cards for study, and IAED\u2019s renewal channels. Prices here are current as of 2025-26 and vary by provider.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Accredited EMD course', values: ['$300-$800 typical', 'In-person/approved online', 'The required training, exam, and materials'] },
      { label: 'MPDS protocol cards', values: ['Included with course', 'Print/electronic', 'The complete study content'] },
      { label: 'IAED continuing education', values: ['Per renewal cycle', 'IAED channels', 'Renewal every 2 years'] },
      { label: 'Third-party study guides', values: ['Rare/unnecessary', 'Print/online', 'The course materials suffice'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by provider; agency-sponsored courses are often employer-paid. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common EMD mistakes come from studying facts instead of the protocol flow. Mistake one: memorizing Chief Complaint codes without the sequence; the exam tests whether the dispatcher applies the Key Questions in order and gives the right pre-arrival instructions, and candidates who know the codes but not the flow miss the application items. Mistake two: paraphrasing the dispatch-life-support instructions; the exam and the real role require the exact instruction sequence, and paraphrasing fails both. Mistake three: skipping the scenario practice; the exam presents call situations, and candidates who only read the cards without practicing scenarios underperform. Mistake four: treating the course as passive attendance; the practical call-taking drills are where the flow becomes automatic, and candidates who coast through them struggle on the exam. Mistake five: ignoring the two-year renewal and continuing-education requirements; a lapsed certification is a compliance problem in a role where certification is a condition of employment. Mistake six: underestimating the exam\u2019s specificity; the 80 percent bar (40 of 50) means the protocol details must be learned precisely, and candidates who study casually retake. Finally, dispatchers should practice the calm, structured call-taking voice, because the certification and the job both reward protocol discipline under pressure.',
    items: [
      { mistake: 'Memorizing codes without the flow', fix: 'Learn the protocol sequence and application.' },
      { mistake: 'Paraphrasing life-support instructions', fix: 'Memorize the exact instruction sequences.' },
      { mistake: 'Skipping scenario practice', fix: 'Work call scenarios with the protocol cards.' },
      { mistake: 'Coasting through the drills', fix: 'The call-taking practice builds the automatic flow.' },
      { mistake: 'Ignoring the renewal cycle', fix: 'Track continuing-education hours for the 2-year renewal.' }
    ]
  },
  questionTypes: {
    summary: 'The IAED EMD certification exam is commonly 50 multiple-choice questions with a passing score of 80 percent (40 of 50), delivered at the end of the accredited course. Content covers the Medical Priority Dispatch System: call structure and caller verification, Chief Complaint code selection, Key Questions in the prescribed order, response determinants, pre-arrival instructions, and dispatch-life-support protocols. Most items are scenario-application questions presenting a call situation. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Call structure and verification', share: '~15% of items', detail: 'Verifying the caller and the situation.' },
      { name: 'Chief Complaint and Key Questions', share: '~35% of items', detail: 'Code selection and the questions in order.' },
      { name: 'Response determinants', share: '~15% of items', detail: 'Which dispatch resources the case warrants.' },
      { name: 'Pre-arrival and life-support instructions', share: '~35% of items', detail: 'The exact instruction sequences (CPR, hemorrhage, airway, childbirth).' }
    ],
    samples: [
      {
        prompt: 'A caller reports an adult is not breathing after collapsing. After verifying the address, which is the most appropriate next step in the dispatch protocol?',
        options: ['A. Begin the CPR dispatch-life-support instructions', 'B. Ask about the person\u2019s insurance', 'C. Ask the caller\u2019s age', 'D. End the call after dispatching'],
        answer: 'A',
        explanation: 'A non-breathing adult is a priority medical dispatch case requiring immediate dispatch-life-support instructions (CPR); the protocol prioritizes life-support instructions over administrative questions.'
      },
      {
        prompt: 'A caller describes a child who is choking and unable to speak. Which Chief Complaint category is most appropriate?',
        options: ['A. Choking', 'B. Breathing problems', 'C. Falls', 'D. Sick person'],
        answer: 'A',
        explanation: 'Choking is a distinct Chief Complaint category with its own Key Questions and pre-arrival instructions; the protocol requires selecting the most specific applicable category.'
      },
      {
        prompt: 'After dispatching for a hemorrhage case, the dispatcher should ______.',
        options: ['A. Give the hemorrhage control instructions while units are en route', 'B. End the call immediately', 'C. Transfer the caller to another line', 'D. Ask for the caller\u2019s phone number again'],
        answer: 'A',
        explanation: 'The protocol requires giving the appropriate pre-arrival instructions (here, hemorrhage control) while units are en route; ending the call or transferring abandons the caller during the emergency.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The EMD certification exam is delivered at the end of the accredited course - the final session of the 2-4 day training - in person or through the approved online pathway with proctoring. Candidates must complete the full course before the exam, bring photo ID, and follow the provider\u2019s rules (no notes or protocol cards during the closed-book exam). The exam is commonly 50 questions with an 80 percent passing line, and results are typically available shortly after. After passing, the certification is valid two years, and renewal requires the continuing-education hours within the cycle plus re-certification. For dispatchers, the certification is usually part of agency employment or training requirements, so the record must be maintained with the agency. Afterwards, continue the continuing-education schedule from the start of the cycle, and if the agency requires the EFD or EPD certifications as well, plan those courses on the same rhythm.',
    bring: ['Photo ID', 'Course completion record', 'Provider instructions', 'A rested, focused mindset for the exam'],
    leave: ['Protocol cards or notes (closed-book exam)', 'Phone and personal electronics', 'Distractions - the exam follows the course directly'],
    timeline: [
      { time: 'Days 1-4', detail: 'Complete the accredited EMD course and drills.' },
      { time: 'Final session', detail: 'Take the certification exam (50 questions, 80%).' },
      { time: 'After passing', detail: 'Certification valid 2 years.' },
      { time: 'Within 2 years', detail: 'Complete continuing-education hours; re-certify.' }
    ],
    rules: [
      'The full course must be completed before the exam.',
      'The exam is closed-book; 80% (40/50) passes.',
      'The certification is valid 2 years with continuing education.',
      'Agency requirements may add the EFD and EPD certifications.'
    ],
    afterwards: 'Maintain the certification record with the agency, schedule the continuing-education hours across the 2-year cycle, and plan the EFD/EPD certifications if the agency requires them.'
  }
};

export default data;
