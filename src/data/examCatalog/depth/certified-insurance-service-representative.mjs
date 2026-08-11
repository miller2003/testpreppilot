const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Insurance & risk-management education desk',
    bio: 'We cover insurance-industry designation programs including the CISR. Format and fee facts come from The Institutes official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CISR program structure and exam requirements against The Institutes official pages; verified BLS insurance wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'CISR is the agency-staff standard: insurance sales agents earned a $60,370 median in May 2024 (BLS)',
    summary: 'The Certified Insurance Service Representative (CISR) designation, offered by The Institutes, is the leading education program for insurance agency and company staff - customer service representatives, account managers and support professionals in property-casualty insurance. It is a designation rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the insurance occupations it serves. BLS reported that insurance sales agents (SOC 41-3021) earned a median of $60,370 in May 2024, and insurance underwriters (13-2053) about $77,860 (OEWS May 2024); agency service and account-management roles span these ranges, with pay varying by agency size, book of business and market. The structural point is that the CISR is the standard education credential for agency staff - the program\u2019s five courses cover personal and commercial lines, agency operations and ethics - and many agencies embed it in hiring and promotion criteria, with some offering pay bumps or bonuses for completion; it is also a common stepping stone toward the CPCU designation for career advancement. BLS classifies workers by occupation, not designations, so no certificate maps to a specific wage; the value is the professional standard in an industry where education credentials are recognized in hiring and advancement. The CISR consists of five courses (each a one-day seminar plus a 50-question exam at 70 percent passing) completed within five years, plus an ethics course for the full designation.',
    rows: [
      { label: 'Insurance sales agents median, May 2024', value: '$60,370', note: 'BLS OEWS, SOC 41-3021' },
      { label: 'Insurance underwriters median, May 2024', value: '~$77,860', note: 'BLS OEWS, SOC 13-2053' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'CISR structure', value: '5 courses + ethics within 5 years', note: 'The Institutes' }
    ],
    growth: 'Insurance-sales employment is projected to grow about 5 percent from 2024 to 2034; agency education credentials remain a recognized differentiator.',
    source: { label: 'BLS Occupational Outlook Handbook - Insurance Sales Agents', url: 'https://www.bls.gov/ooh/sales/insurance-sales-agents.htm' }
  },
  passRate: {
    headline: 'Each CISR course exam requires 70 percent (35 of 50); The Institutes publishes no pass rates',
    summary: 'The Institutes does not publish pass rates for the CISR designation, but the assessment mechanics are public. The CISR consists of five courses, each delivered as a one-day seminar (in person or live online) followed by an exam of 50 multiple-choice questions; the passing score is 70 percent, meaning at least 35 of 50 correct. Candidates who do not pass an exam may retake it (a retake fee applies after the first attempt in most formats; verify the current policy), and the exam is based on the course workbook, which candidates receive with the course. The five courses cover: personal residential property, personal automobile, commercial casualty, commercial property, and agency operations (with an ethics course required for the full designation in addition to the five). Candidates must complete the five courses and the ethics component within five years to earn the designation; each course can be taken in any order, and the designation remains in effect as long as the completion requirements are met (continuing education for renewal varies by state, and some states recognize CISR courses for their own CE credit). Because the exam is drawn from the course workbook and the courses are one-day seminars, the realistic pass picture is strong for candidates who attend and study the workbook; the 70 percent bar is the number that matters, and the workbook is the complete study source.',
    source: { label: 'The Institutes - CISR program', url: 'https://www.theinstitutes.org/designations/cisr' },
    caveat: 'The Institutes publishes no pass rates; each course exam requires 70% (35/50), with 5 courses plus ethics completed within 5 years.'
  },
  studyPlan: {
    summary: 'The CISR is a course-based designation, and a study plan runs alongside the course schedule: each course is a one-day seminar with a 50-question exam, and the full designation is five courses plus ethics within five years. A realistic per-course plan: before the seminar, read the course workbook chapter by chapter (3-5 hours), because the seminar moves fast and the workbook is the exam source; during the seminar, attend fully and take notes on the instructor\u2019s emphasis, which flags the high-yield content; after the seminar, review the workbook\u2019s key concepts and take the exam (2-4 hours of review). The five courses cover: personal residential property (homeowners coverage), personal automobile (auto policies and coverages), commercial casualty (general liability, workers comp, commercial auto), commercial property (commercial property forms and coverages), and agency operations (agency workflow, errors and omissions, ethics). Candidates typically take one course per quarter or per renewal cycle, spreading the designation over one to three years; the five-year completion window is generous. The ethics course is a separate requirement for the full designation. The dominant resources are the course workbook (included) and the instructor-led seminar; third-party study materials are unnecessary because the exam is drawn from the workbook.',
    totalHours: '~10-12 hours per course (reading + seminar + review + exam); 5 courses over 1-3 years',
    weeks: [
      { label: 'Before the seminar', focus: 'Workbook reading', tasks: ['Read the course workbook chapter by chapter'], hours: 4 },
      { label: 'Seminar day', focus: 'Instructor-led course', tasks: ['Attend the one-day seminar', 'Note the instructor\u2019s high-yield emphasis'], hours: 8 },
      { label: 'After the seminar', focus: 'Review and exam', tasks: ['Review the workbook key concepts', 'Take the 50-question exam (70%)'], hours: 3 }
    ],
    variants: [
      { label: 'Order flexibility', detail: 'The five courses can be taken in any order; many agencies schedule them in a recommended sequence.' },
      { label: 'Ethics requirement', detail: 'The full CISR designation requires the ethics course in addition to the five courses.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective CISR strategies are workbook-driven. Strategy one: read the course workbook before the seminar, because the seminar moves fast and the workbook is the exam source; candidates who arrive having read the chapters retain the instructor\u2019s emphasis far better than those seeing the material for the first time. Strategy two: take notes on the instructor\u2019s emphasis during the seminar, because the instructor flags the high-yield content and the exam rewards that emphasis. Strategy three: learn the coverage distinctions that the exams most test - personal auto vs commercial auto, the homeowners forms, the commercial property forms, general liability basics - because the courses test applied coverage knowledge, not just definitions. Strategy four: review the workbook\u2019s key concepts after the seminar and take the exam promptly, because the material is fresh and the 70 percent bar is achievable with a focused review. Strategy five: use the exam retake option strategically - a first attempt is a real data point, and a targeted review of the failed areas beats a rushed retake. Strategy six: plan the five-course sequence with the five-year window in mind - one course per quarter spreads the work and keeps the material applicable to the job, which is the point of the designation.',
    items: [
      { title: 'Read the workbook first', detail: 'The seminar moves fast; arrive having read the chapters.' },
      { title: 'Note the instructor\u2019s emphasis', detail: 'The instructor flags the high-yield content.' },
      { title: 'Learn the coverage distinctions', detail: 'The exams test applied coverage knowledge.' },
      { title: 'Take the exam promptly', detail: 'Fresh material and a focused review clear the 70% bar.' }
    ]
  },
  resourceComparison: {
    summary: 'The CISR resource market is organized around The Institutes, the official provider. Each course includes the workbook and the one-day seminar, with the exam included in the course registration; the per-course cost is roughly $300-$500 (seminar plus materials; verify current pricing), with the ethics course similarly priced. The Institutes offers the courses in-person and live-online, and many agencies pay for staff education as a professional-development benefit, so candidates should ask their employer before paying. The workbook is the complete study source, and no third-party materials are needed; free resources are limited to the program description and course outlines on The Institutes website. State continuing-education credit varies by state, and some states recognize CISR courses toward their CE requirements, which adds value for licensed staff. The honest ranking: the official course and workbook (the required purchase), employer reimbursement if available, and nothing else. Prices here are current as of 2025-26 and vary by delivery format.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CISR course (seminar + workbook + exam)', values: ['$300-$500 per course', 'In-person/live online', 'The required path to each course exam'] },
      { label: 'Ethics course', values: ['~$300-$400', 'In-person/live online', 'The designation requirement'] },
      { label: 'Employer sponsorship', values: ['Often available', 'Workplace benefit', 'Reducing out-of-pocket cost'] },
      { label: 'Third-party materials', values: ['Unnecessary', 'Print/online', 'The workbook is the complete source'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by format; verify current fees on The Institutes site. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common CISR mistakes come from treating the courses as attendance events. Mistake one: skipping the pre-seminar reading; the seminar moves fast, and candidates who see the workbook for the first time in class retain less and struggle on the exam. Mistake two: not taking the exam promptly after the seminar; the material fades, and a delayed exam means re-reviewing from scratch. Mistake three: studying definitions instead of coverage applications; the exams test applied coverage knowledge (which form covers what, in which situation), and candidates who memorize without applying miss the scenario items. Mistake four: ignoring the five-year completion window; candidates who start the designation and let years pass without finishing lose the investment and may need to re-take courses under the current editions. Mistake five: skipping the ethics course and assuming the five courses are the whole designation; the ethics requirement is part of earning the CISR. Mistake six: paying out of pocket without checking employer sponsorship; many agencies fund CISR education, and asking first is the obvious step.',
    items: [
      { mistake: 'Skipping the pre-reading', fix: 'Read the workbook before the seminar.' },
      { mistake: 'Delaying the exam', fix: 'Take it promptly while the material is fresh.' },
      { mistake: 'Definitions without application', fix: 'Learn which coverage applies in which situation.' },
      { mistake: 'Losing the five-year window', fix: 'Complete the 5 courses plus ethics within 5 years.' },
      { mistake: 'Forgetting the ethics course', fix: 'It is part of earning the designation.' }
    ]
  },
  questionTypes: {
    summary: 'Each CISR course exam is 50 multiple-choice questions with a passing score of 70 percent (35 of 50), based on the course workbook. The five courses cover personal residential property (homeowners coverages), personal automobile (auto policy and coverages), commercial casualty (general liability, commercial auto, workers compensation), commercial property (commercial property forms), and agency operations (workflow, E&O, ethics). Most items are coverage-application scenarios. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Personal lines coverage', share: 'Two courses', detail: 'Homeowners and personal auto coverages.' },
      { name: 'Commercial lines coverage', share: 'Two courses', detail: 'General liability, commercial auto, property forms.' },
      { name: 'Agency operations', share: 'One course', detail: 'Workflow, errors and omissions, ethics.' }
    ],
    samples: [
      {
        prompt: 'A homeowner\u2019s policy covers the dwelling for fire damage. Which coverage section also applies to detached structures such as a shed?',
        options: ['A. Other Structures', 'B. Personal Property', 'C. Loss of Use', 'D. Medical Payments'],
        answer: 'A',
        explanation: 'Other Structures (Coverage B) covers detached structures like sheds and garages; Personal Property covers contents, Loss of Use covers extra living costs, and Medical Payments covers guest injuries.'
      },
      {
        prompt: 'A commercial auto policy is being reviewed for a business whose employees drive their own cars for work. Which coverage addresses this exposure?',
        options: ['A. Hired and Non-Owned Auto coverage', 'B. Commercial property coverage', 'C. General liability coverage', 'D. Crime coverage'],
        answer: 'A',
        explanation: 'Hired and Non-Owned Auto (HNOA) coverage addresses liability for vehicles the business hires or that employees drive on company business; the other coverages address different exposures.'
      },
      {
        prompt: 'An agency must handle a customer complaint about a coverage dispute. Which agency-operations concept is most directly relevant?',
        options: ['A. Errors and omissions exposure management', 'B. Commercial property rating', 'C. Personal auto underwriting', 'D. Claims reserving'],
        answer: 'A',
        explanation: 'Handling complaints and coverage disputes is part of errors-and-omissions exposure management for agencies; the other options concern different operational areas.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'Each CISR course exam is delivered at the end of the one-day seminar - in person for classroom delivery or proctored online for live-online delivery. Candidates receive the exam at the course site or through the online proctoring platform; the exam is 50 multiple-choice questions with a 70 percent passing line (35 of 50), and the time allowance is set by the course format (typically about an hour). Candidates who do not pass may retake (a retake fee applies after the first attempt in most formats; verify the current policy). Results are typically available shortly after, and the course completion is recorded with The Institutes. Candidates complete five courses plus the ethics course within five years to earn the designation; each course counts toward the designation as completed. Afterwards, track the completion record, ask the employer about reimbursement and any pay-scale recognition, and plan the next course in the sequence.',
    bring: ['Course registration confirmation', 'Photo ID', 'The course workbook for study', 'Online: verified system and quiet room'],
    leave: ['Notes during the proctored exam (verify the policy)', 'Phone and personal electronics', 'An assumption that attendance alone earns the course'],
    timeline: [
      { time: 'Seminar day', detail: 'Complete the one-day course.' },
      { time: 'Exam', detail: '50 questions; 70% (35/50) passes.' },
      { time: 'After passing', detail: 'Course recorded with The Institutes.' },
      { time: 'Within 5 years', detail: 'Complete all 5 courses plus ethics for the designation.' }
    ],
    rules: [
      'Each course requires passing the 50-question exam at 70%.',
      'The designation requires 5 courses plus ethics within 5 years.',
      'Retakes are available (fees apply after the first attempt).',
      'Employer sponsorship is commonly available.'
    ],
    afterwards: 'Track the completion record, ask about employer reimbursement and pay recognition, and plan the next course in the five-course sequence.'
  }
};

export default data;
