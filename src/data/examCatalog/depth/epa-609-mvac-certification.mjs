const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Skilled trades & manufacturing certifications desk',
    bio: 'This desk covers skilled-trade and environmental certifications. Program structure and rules come from the certifying body\'s official pages (EPA, Section 609 program), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the EPA Section 609 program pages and BLS OOH Automotive Service Technicians (SOC 49-3023), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$55,040 median for automotive service technicians and mechanics (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "EPA 609" — the Section 609 certification is a federal requirement for technicians who service motor-vehicle air-conditioning systems, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Automotive Service Technicians and Mechanics, SOC 49-3023, which had a May 2024 median wage of $55,040, with the lowest 10 percent under $33,010 and the highest 10 percent above $84,760. The fit is direct: Section 609-certified technicians work in auto shops, dealerships and repair chains servicing vehicle HVAC systems, and the Clean Air Act requires the certification to handle refrigerant. BLS counted 733,900 automotive service technician jobs in 2024 and projects 2 percent growth from 2024 to 2034, with about 62,700 openings a year, almost all replacement demand. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the 609 certification carries no wage premium in government data; its value is legal necessity — you cannot work on vehicle AC systems for pay without it, so it is an employability gate for automotive HVAC work. Read the number as the market for the occupation the certification serves.',
    rows: [
      { label: 'Median annual wage, automotive service technicians', value: '$55,040', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $33,010', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $84,760', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Projected openings per year', value: '~62,700', note: 'BLS OOH, SOC 49-3023, 2024-2034' }
    ],
    growth: 'BLS projects 2 percent growth for automotive service technicians from 2024 to 2034, about 62,700 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Automotive Service Technicians and Mechanics', url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm' }
  },
  passRate: {
    headline: 'EPA publishes the passing standard — 84% (21 of 25) — and the Section 609 program does not publish cohort pass rates',
    summary: 'The EPA\'s Section 609 technician certification program does not publish cohort pass rates for the certification test, and third-party estimates are not official data, so we do not treat them as authoritative. What the program does publish is the format and the passing standard: the Section 609 certification exam has 25 questions with a 60-minute time limit, and a passing score of 84 percent — at least 21 correct answers. The test is administered by EPA-authorized test providers, either on paper or by computer, and passing it is the federal requirement for anyone who services, repairs or disposes of motor-vehicle air-conditioning systems that use refrigerant. The exam content covers the Clean Air Act requirements: the stratospheric-ozone protection rules, the refrigerant types and their environmental effects, proper recovery, recycling and reclamation procedures, and the leak-repair and recordkeeping requirements. The absence of a published pass rate is not an absence of standards: the 84 percent line on 25 questions is a meaningful bar for an entry-level regulatory test, and the exam rewards knowing the procedures exactly, since the law is specific about recovery and recordkeeping. The practical reading: study the official Section 609 training materials, which the test is built from, and aim for 90 percent-plus on practice.',
    source: { label: 'EPA - Section 609 Technician Certification', url: 'https://www.epa.gov/mvac' },
    caveat: 'EPA publishes the 84% passing standard but no cohort pass rate; the test is administered by EPA-authorized providers.'
  },
  studyPlan: {
    summary: 'The Section 609 certification is a 25-question, 60-minute test with an 84 percent passing line, and its curriculum is the federal requirements for motor-vehicle AC refrigerant handling: the Clean Air Act and ozone-protection rules, refrigerant identification and the environmental impact of the different refrigerants, the recovery, recycling and reclamation procedures, and the leak-repair, containment and recordkeeping requirements. A defensible plan runs 3 to 8 hours over one to three days, built on the official training materials provided by the test provider. Step one: study the official Section 609 training manual or online module, which covers the procedures the test is built from. Step two: master the refrigerant rules — which refrigerants (R-12, R-134a, R-1234yf) are used, how they affect the ozone layer and climate, and why recovery is required rather than venting. Step three: learn the equipment and procedure specifics — the recovery machine setup, the evacuated-container rules, the leak-repair obligations and the recordkeeping for recovered refrigerant. Step four: take the practice test if the provider offers one, then sit the exam. The plan is short because the scope is a single regulatory program; the exam rewards knowing the procedures precisely.',
    totalHours: '3-8 hours over 1-3 days',
    weeks: [
      { label: 'Step 1 (1-2 hours)', focus: 'The Clean Air Act rules', tasks: ['The ozone-protection requirements', 'Why venting refrigerant is prohibited', 'The technician certification requirement'], hours: 2 },
      { label: 'Step 2 (2-3 hours)', focus: 'Refrigerants and equipment', tasks: ['R-12, R-134a and R-1234yf characteristics', 'Recovery, recycling and reclamation differences', 'Recovery equipment setup and evacuated containers'], hours: 3 },
      { label: 'Step 3 (1-2 hours)', focus: 'Leaks, records, exam', tasks: ['Leak-repair obligations and recordkeeping', 'Practice questions and review', 'Sit the certification test'], hours: 2 }
    ],
    variants: [
      { label: 'Working auto technician', detail: 'The equipment and procedures are familiar from the job; focus study on the regulatory details and recordkeeping.' },
      { label: 'Student or new technician', detail: 'Add a session on refrigerant chemistry and the recovery procedure before the exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The Section 609 test rewards precise knowledge of the regulatory procedures, so the dominant strategy is studying the official training materials the test is built from — the test providers all use EPA-aligned content, and the exam items mirror the training module. Second, learn the refrigerant distinctions exactly: R-12, R-134a and R-1234yf differ in their environmental effects and handling, and the exam tests which refrigerant is which and why recovery matters. Third, master the procedure specifics: recovery vs recycling vs reclamation, the evacuated-container rules, and the correct equipment setup, because the exam rewards the exact steps. Fourth, learn the leak-repair and recordkeeping obligations, a distinct block that candidates focused on equipment mechanics often miss. Finally, aim for 90 percent-plus on any practice material, because the 84 percent line on 25 questions leaves only four wrong answers of margin — and remember the certification is one of the few federal requirements in the trade, so the procedures are legally binding, not optional best practice.',
    items: [
      { title: 'Use the official training material', detail: 'The test is built from the provider\'s EPA-aligned module.' },
      { title: 'Learn the refrigerant distinctions', detail: 'R-12, R-134a and R-1234yf differ in effects and handling.' },
      { title: 'Master the procedure steps', detail: 'Recovery vs recycling vs reclamation, and the equipment setup.' },
      { title: 'Know the leak and record rules', detail: 'Leak repair and recordkeeping are a distinct tested block.' },
      { title: 'Aim for 90%+ on practice', detail: 'The 84% line leaves only four wrong answers of margin.' }
    ]
  },
  resourceComparison: {
    summary: 'Section 609 prep is inexpensive because the certification cost is dominated by the test itself, and the training materials are bundled or free. The EPA-authorized test providers charge roughly $20 to $50 for the certification test, and most include the training material in the fee or sell a study module for a few dollars. Free resources include the EPA\'s Section 609 pages, which describe the requirements, and the refrigerant fact sheets. Many trade schools and employers bundle the 609 certification with training or onboarding. A realistic total budget is $25 to $75 including the test. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'EPA Section 609 pages', values: ['Free', 'Official government pages', 'The requirements and program rules'] },
      { label: 'Authorized test provider exam', values: ['~$20-$50', 'Paper or computer test', 'The certification itself'] },
      { label: 'Provider training module', values: ['Often included or ~$10', 'Online study material', 'The content the test is built from'] },
      { label: 'Trade-school or employer training', values: ['Varies', 'Classroom training', 'Bundled with technician training'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; provider fees vary; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Section 609 mistake is assuming the exam is about AC repair mechanics rather than the regulatory rules: candidates who know how to fix AC systems but not the refrigerant-handling requirements fail the items on recovery procedures and recordkeeping. The fix is studying the regulatory material, not the mechanical. The second mistake is confusing recovery, recycling and reclamation — the exam tests the distinctions precisely. Third, candidates mislearn which refrigerants are covered and their environmental effects; R-12, R-134a and R-1234yf are tested by name. Fourth, some candidates skip the leak-repair and recordkeeping block, which is a real share of the test. Finally, treating the certification as optional is the costliest misunderstanding — the Clean Air Act requires it for paid work on vehicle AC systems, and employers check for it before hiring.',
    items: [
      { mistake: 'Studying mechanics, not regulations', fix: 'The test is about refrigerant-handling requirements, not AC repair.' },
      { mistake: 'Confusing recovery, recycling, reclamation', fix: 'The three processes are tested by their distinct definitions.' },
      { mistake: 'Mislearning the refrigerants', fix: 'R-12, R-134a and R-1234yf are tested by name and effect.' },
      { mistake: 'Skipping leak and record rules', fix: 'Leak repair and recordkeeping are a real tested block.' },
      { mistake: 'Treating it as optional', fix: 'The Clean Air Act requires it for paid vehicle-AC work.' }
    ]
  },
  questionTypes: {
    summary: 'The Section 609 certification test is a 25-question multiple-choice exam in 60 minutes. The items test the regulatory procedures: the Clean Air Act requirements, refrigerant identification and environmental effects, the recovery, recycling and reclamation procedures, and the leak-repair and recordkeeping obligations. The exam rewards exact procedural knowledge. Samples below are editor-written illustrations of the program content, not live exam items; they show the regulatory style of the real items.',
    types: [
      { name: 'Recovery and procedure items', share: 'Largest block', detail: 'Correct recovery, recycling and reclamation procedures.' },
      { name: 'Refrigerant items', share: 'Large block', detail: 'R-12, R-134a, R-1234yf and their environmental effects.' },
      { name: 'Leak and record items', share: 'Meaningful block', detail: 'Leak-repair obligations and recordkeeping.' }
    ],
    samples: [
      {
        prompt: 'Under Section 609, a technician servicing a motor-vehicle AC system containing refrigerant must:',
        options: ['A. Recover the refrigerant using approved equipment before servicing the system', 'B. Vent the refrigerant if the system is partially charged', 'C. Release the refrigerant into a well-ventilated area', 'D. Refrigerant handling is optional if the system is small'],
        answer: 'A',
        explanation: 'Section 609 requires recovery of refrigerant with approved equipment before servicing — venting is prohibited under the Clean Air Act. Venting partially charged systems or small systems, or treating the requirement as optional, each violate the law.'
      },
      {
        prompt: 'Which refrigerant is an ozone-depleting substance (ODS) that triggered the Section 609 rules?',
        options: ['A. R-12', 'B. R-134a', 'C. R-1234yf', 'D. CO2'],
        answer: 'A',
        explanation: 'R-12 (CFC-12) is the ozone-depleting refrigerant whose phase-out drove the Section 609 program. R-134a and R-1234yf are later refrigerants with much lower or no ozone-depletion potential, and CO2 is not a refrigerant in this context.'
      },
      {
        prompt: 'The difference between refrigerant recovery and recycling is that recycling:',
        options: ['A. Removes contaminants for reuse in the same system or equipment, without chemical reprocessing', 'B. Chemically reprocesses the refrigerant to virgin specifications', 'C. Destroys the refrigerant', 'D. Vents the refrigerant safely'],
        answer: 'A',
        explanation: 'Recycling removes contaminants (oil, moisture) for reuse without chemical reprocessing; reclamation is the chemical reprocessing to virgin specification, and recovery is simply removing the refrigerant. The exam tests these three distinctions precisely.'
      }
    ],
    note: 'Samples are editor-written illustrations of the program content, not live exam items.'
  },
  examDay: {
    summary: 'The Section 609 certification test is a 25-question, 60-minute exam administered by an EPA-authorized test provider, on paper or by computer. Bring the required identification matching your registration; the provider sets the check-in procedure. Pace at about 2.4 minutes per item and review flagged questions; the 84 percent line (21 of 25) leaves only four wrong answers of margin, so use the full window. Your result is reported after scoring, and the provider issues the Section 609 certificate on a pass. If you do not pass, the provider defines the retake policy and fee. On a pass, the certification is valid for life — it does not expire — and it travels with you across employers, who ask to see the certificate. The afterwards matters: keep the certificate on file and carry a copy, because employers and some state regulators verify the 609 credential before allowing work on vehicle AC systems.',
    bring: ['Required identification matching your registration', 'Test confirmation from your provider'],
    leave: ['Phone and personal electronics', 'Notes and study materials — the test is closed book'],
    timeline: [
      { time: 'Before the test', detail: 'Confirm the provider, location and ID requirements.' },
      { time: 'Test', detail: '25 questions in 60 minutes; pace ~2.4 minutes per item.' },
      { time: 'After submit', detail: 'Result is reported; the certificate is issued on a pass.' },
      { time: 'Next', detail: 'Keep the certificate for employer and regulator verification.' }
    ],
    rules: [
      'The test is closed book',
      '25 questions in 60 minutes; the clock does not pause',
      'The certification is valid for life'
    ],
    afterwards: 'On a pass, your Section 609 certification is permanent; keep it for employer verification. On a fail, retake per the provider\'s policy after additional study.'
  }
};

export default data;
