const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Environmental & construction-compliance desk',
    bio: 'We cover EPA lead-safety training programs under the Renovation, Repair and Painting rule. Format and fee facts come from EPA official pages and authorized trainers and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the EPA RRP certification requirements and course structure against EPA official pages and 40 CFR 745; verified BLS construction wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'RRP certification is a legal requirement for renovation work in pre-1978 housing: construction laborer and painter medians sit in the $46,000-$52,000 range (BLS, May 2024)',
    summary: 'The EPA RRP (Renovation, Repair and Painting) certification is a federal training requirement under the Toxic Substances Control Act (40 CFR 745) for contractors and firms that perform renovation, repair or painting activities for compensation in pre-1978 housing and child-occupied facilities. It is a compliance credential, not a job license for one occupation, so no single BLS SOC code attaches to it; the salary story belongs to the construction and painting occupations that must hold it. BLS reported that construction laborers (SOC 47-2061) earned a median of $46,050 in May 2024 and painters, construction and maintenance (47-2141) about $48,660; renovation and remodeling contractors and house painters are the primary occupations covered by the rule. The structural point for workers is that RRP certification is a market-access requirement: a firm cannot legally perform covered renovation work without an EPA-certified renovator on the job and a certified firm, and many homeowner and property-management contracts now require proof of certification, so the credential functions as a hireability gate in the residential renovation market. The training is modest - an 8-hour initial course (or 5 hours for refresher) with a certification exam - and affordable (typically $50-$150), and the certification is valid for five years. BLS classifies workers by job duty, not certificates, so no completion maps to a specific wage; the certificate preserves legal access to the renovation market whose wage medians BLS documents. For firms, the parallel requirement is firm certification (with an annual fee), and candidates should confirm which role they need: certified renovator (individual) or certified firm.',
    rows: [
      { label: 'Construction laborers median, May 2024', value: '$46,050', note: 'BLS OEWS, SOC 47-2061' },
      { label: 'Painters, construction and maintenance median, May 2024', value: '~$48,660', note: 'BLS OEWS, SOC 47-2141' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'RRP certification validity', value: '5 years', note: 'EPA, 40 CFR 745.225 (refresher course required to renew)' }
    ],
    growth: 'Construction and extraction employment is projected to grow about 5 percent from 2024 to 2034 per BLS, with renovation demand tied to the aging housing stock.',
    source: { label: 'EPA RRP program information', url: 'https://www.epa.gov/lead/renovation-repair-and-painting-program' }
  },
  passRate: {
    headline: 'The RRP certification exam requires 80 percent (18 of 23 questions); EPA does not publish cohort pass rates',
    summary: 'EPA does not publish a national pass-rate statistic for the RRP renovator certification exam, but the assessment mechanics are defined by the training requirements. The initial renovator course is 8 hours (a 5-hour refresher course renews the certification), delivered by EPA-authorized training providers, and it ends with a certification exam of 23 multiple-choice questions; the passing score is 80 percent, meaning a candidate must answer at least 18 of 23 correctly. The exam covers the course\u2019s core content: the health effects of lead exposure, the regulatory requirements (40 CFR 745), the work practices that must be followed (containing dust, minimizing the work area, cleaning thoroughly, and verifying cleaning with the required cleaning verification techniques), and record-keeping. Candidates who do not pass may typically retake the exam as the provider allows. The certification is valid for five years, and renewal requires completing the 5-hour refresher course (with its own exam) before the certification expires. Because the exam is drawn from the course and the course is short and practical, the realistic completion picture is that most candidates who attend the full course pass; the number that matters is the 18-of-23 threshold, and the legally important facts are the 8-hour initial course, the five-year validity, and the refresher requirement. EPA\u2019s rule also requires the firm itself to be certified (a separate firm certification with an annual fee), and EPA inspects compliance, so both the individual renovator certificate and the firm certificate must be current.',
    source: { label: 'EPA RRP training requirements', url: 'https://www.epa.gov/lead/renovation-repair-and-painting-program-trainers' },
    caveat: 'EPA does not publish pass rates; the exam requires 80% (18/23), with a 5-year validity and 5-hour refresher for renewal.'
  },
  studyPlan: {
    summary: 'The RRP renovator course is short - 8 hours for initial certification, delivered in one day or split sessions by an EPA-authorized training provider - so a study plan is about absorbing the work practices rather than weeks of preparation. The course content covers: the health effects of lead exposure (especially in children), the scope of the RRP rule (pre-1978 housing and child-occupied facilities), the required containment and work practices (covering floors and furniture, sealing doorways and vents, minimizing dust during demolition, wet methods, and HEPA vacuuming), the cleaning verification requirements (visual inspection plus the required cleaning verification cloths), and record-keeping (maintaining documentation for three years). A realistic plan: before the course, review the EPA RRP summary materials available free on epa.gov (1 hour); during the course, follow the instructor\u2019s demonstrations and complete the hands-on exercises - the course includes practical components such as the cleaning verification cloth demonstration - because the exam includes applied questions; then take the 23-question exam and retake if needed. The single most important thing to memorize is the sequence of the work-practice standard: contain the work area, minimize dust, clean with wet methods and HEPA vacuuming, and verify the cleaning with the required verification cloths, because these steps are the exam\u2019s recurring theme and the compliance standard EPA enforces. The certification is valid for five years, and the 5-hour refresher course (with exam) renews it.',
    totalHours: '8-hour initial course + 1-2 hours self-study; 5-hour refresher for renewal',
    weeks: [
      { label: 'Before the course', focus: 'EPA basics', tasks: ['Review EPA RRP summary materials', 'Know the 1978 threshold'], hours: 1 },
      { label: 'The course (1 day)', focus: '8-hour initial training', tasks: ['Work practices and containment', 'Hands-on exercises', '23-question exam (18/23)'], hours: 8 },
      { label: 'Renewal (every 5 years)', focus: '5-hour refresher', tasks: ['Complete the refresher course', 'Pass its exam before expiry'], hours: 5 }
    ],
    variants: [
      { label: 'Refresher timing', detail: 'Renew the certification with the 5-hour refresher before the five-year expiry; a lapsed certification requires the full initial course in some cases.' },
      { label: 'Firm certification', detail: 'The employer must also hold EPA firm certification (annual fee); the individual renovator certificate is separate.' }
    ]
  },
  prepStrategies: {
    summary: 'The effective RRP strategies are about learning the work-practice sequence and the regulatory details. Strategy one: memorize the four-step work-practice standard - contain, minimize dust, clean (wet methods and HEPA vacuum), and verify with the cleaning verification cloths - because it is the exam\u2019s recurring theme and the compliance standard EPA enforces on the job. Strategy two: learn the scope of the rule precisely: pre-1978 housing (built before January 1, 1978) and child-occupied facilities; the exam tests when the rule applies, and candidates who blur the threshold miss items. Strategy three: know the containment specifics - covering floors and furniture with plastic, sealing doorways and vents, and containing the work area to prevent dust migration - because scenario items test the application. Strategy four: understand the cleaning verification steps (visual inspection, then the cleaning verification cloths wiped across windowsills and floors, with re-cleaning if the cloth shows dust) because they are the rule\u2019s most distinctive requirement. Strategy five: review the record-keeping requirement (maintain records for three years), which appears on the exam and in EPA inspections. Strategy six: complete the course with the instructor\u2019s demonstrations and hands-on exercises rather than just listening, because the exam includes applied items, and ask questions about the practical steps. Finally, confirm the role you need - certified renovator versus certified firm - because the two are separate EPA requirements with different fees.',
    items: [
      { title: 'Memorize the four-step standard', detail: 'Contain, minimize dust, clean, verify with the cleaning cloths.' },
      { title: 'Know the 1978 threshold', detail: 'The rule applies to pre-1978 housing and child-occupied facilities.' },
      { title: 'Learn the containment specifics', detail: 'Plastic coverings, sealed vents, contained work areas.' },
      { title: 'Master cleaning verification', detail: 'Visual check plus the verification cloths; re-clean on dust.' }
    ]
  },
  resourceComparison: {
    summary: 'The RRP resource market is anchored by EPA\u2019s free official materials and the authorized training providers. The EPA website publishes the RRP rule (40 CFR 745), the renovator course outline, the "Lead-Safe Certified" guide, and the cleaning-verification guidance - all free and sufficient for understanding the rule. The certification itself is purchased through an EPA-authorized training provider: the 8-hour initial renovator course costs roughly $50-$150 (online and in-person options exist), the 5-hour refresher about $30-$100, and the exam is included in the course. The firm certification is a separate EPA fee (annual). Commercial study guides and practice quizzes exist at $10-$40 but are largely unnecessary because the course contains the exam content and the EPA materials are complete; candidates should verify the provider is EPA-authorized, because a certificate from an unauthorized provider does not satisfy the rule. The honest ranking: free EPA materials, the authorized provider\u2019s course (the required purchase), and nothing else. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'EPA RRP rule and guides', values: ['Free', 'Web PDFs at epa.gov', 'Understanding the rule and work practices'] },
      { label: '8-hour renovator course', values: ['$50-$150', 'Online/in-person', 'The required certification'] },
      { label: '5-hour refresher course', values: ['$30-$100', 'Online/in-person', 'Renewal every 5 years'] },
      { label: 'Commercial study guides', values: ['$10-$40', 'Print/online', 'Unnecessary; EPA materials and course suffice'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by provider; verify EPA authorization. Firm certification is a separate EPA fee. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common RRP mistakes are compliance errors rather than exam failures. Mistake one: taking a course from a provider that is not EPA-authorized; the certificate does not satisfy the rule, and EPA and its state partners reject it during inspections. Mistake two: letting the five-year certification lapse; working on a covered job without a current renovator certificate is a violation, and a lapsed certificate may require the full initial course rather than the refresher. Mistake three: confusing the renovator and firm requirements; the individual renovator certificate and the firm certification are separate, and a firm cannot legally work with only one of them. Mistake four: memorizing the work practices without the sequence; the exam and the compliance standard require contain-then-minimize-then-clean-then-verify in order, and applying the steps out of order fails both the exam item and the inspection. Mistake five: skipping the cleaning verification details - the visual inspection and the verification cloths - which are the rule\u2019s most distinctive and most-tested requirement. Mistake six: ignoring record-keeping; the rule requires retaining documentation for three years, and missing records are treated as non-compliance even when the work was performed correctly.',
    items: [
      { mistake: 'Using an unauthorized provider', fix: 'Verify EPA authorization before paying.' },
      { mistake: 'Letting the certification lapse', fix: 'Complete the 5-hour refresher before the 5-year expiry.' },
      { mistake: 'Confusing renovator and firm requirements', fix: 'Both the individual and firm certifications are required.' },
      { mistake: 'Applying steps out of sequence', fix: 'Contain, minimize, clean, verify - in that order.' },
      { mistake: 'Skipping record-keeping', fix: 'Retain documentation for 3 years.' }
    ]
  },
  questionTypes: {
    summary: 'The RRP renovator certification exam consists of 23 multiple-choice questions with a passing score of 80 percent (18 of 23). Items are drawn from the 8-hour course content: the health effects of lead exposure, the scope of the rule (pre-1978 housing and child-occupied facilities), the containment and work practices (covering, sealing, wet methods, HEPA vacuuming), cleaning verification (visual inspection and verification cloths), and record-keeping. Most items are either direct knowledge questions or scenario questions about the correct work practice. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Health effects and rule scope', share: '~25% of items', detail: 'Lead risks and when the rule applies.' },
      { name: 'Containment and work practices', share: '~35% of items', detail: 'Covering, sealing, wet methods, HEPA vacuuming.' },
      { name: 'Cleaning verification', share: '~25% of items', detail: 'Visual inspection and the verification cloths.' },
      { name: 'Record-keeping and compliance', share: '~15% of items', detail: 'Documentation and inspection requirements.' }
    ],
    samples: [
      {
        prompt: 'A renovator is about to perform work that will disturb painted surfaces in a home built in 1965. Which requirement applies?',
        options: ['A. No certification is needed because the work is small', 'B. The firm and the renovator must both be EPA-certified under the RRP rule', 'C. Only the firm must be certified', 'D. The work is exempt because the house is occupied'],
        answer: 'B',
        explanation: 'The RRP rule requires both firm certification and a certified renovator for paid renovation in pre-1978 housing; occupancy does not exempt the work.'
      },
      {
        prompt: 'After completing the work, the renovator performs a visual inspection and then wipes the windowsill with a cleaning verification cloth. The cloth shows visible dust. What must happen next?',
        options: ['A. The job is complete because the visual check passed', 'B. Re-clean the area and repeat the verification', 'C. Document the dust and leave it', 'D. Use a dry broom to remove the dust'],
        answer: 'B',
        explanation: 'If the verification cloth shows dust, the area must be re-cleaned and the verification repeated until it passes; the visual inspection alone is not sufficient.'
      },
      {
        prompt: 'Which method is required for cleaning dust from surfaces during RRP work?',
        options: ['A. Dry sweeping', 'B. Wet methods and HEPA vacuuming', 'C. Compressed air', 'D. Household broom and dustpan'],
        answer: 'B',
        explanation: 'The rule requires wet cleaning methods and HEPA vacuums; dry sweeping and compressed air spread lead dust and are prohibited.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The RRP renovator certification has no EPA-administered test center: the course and exam are delivered by EPA-authorized training providers, with both in-person and online (proctored) options. In-person courses run one day (8 hours) with the exam at the end; online courses are self-paced within the provider\u2019s window and end with a proctored online exam. Candidates must complete the full course before the exam, and the passing line is 80 percent (18 of 23). After passing, the provider issues the renovator certificate (valid five years), and EPA\u2019s database records the certification; the employer\u2019s firm certification is separate. Candidates should keep the certificate and the course documentation, because EPA and state inspectors verify both during jobs. Set a reminder for the five-year renewal and complete the 5-hour refresher before expiry. Afterwards, workers should confirm with the employer that the firm certification is current and that the job-site documentation (records of the work practices and cleaning verification) is maintained per the rule.',
    bring: ['Photo ID', 'Course enrollment confirmation', 'Online: verified system and quiet room', 'A reminder for the 5-year renewal date'],
    leave: ['An assumption that one certificate covers the firm - it does not', 'A lapsed certificate - renew before the 5-year expiry', 'Compliance shortcuts - the work-practice sequence is enforced'],
    timeline: [
      { time: 'Course day', detail: 'Complete the 8-hour course (or online modules).' },
      { time: 'Exam', detail: '23 questions; 80% (18/23) passes.' },
      { time: 'After passing', detail: 'Provider issues the 5-year renovator certificate.' },
      { time: 'Before 5-year expiry', detail: 'Complete the 5-hour refresher course to renew.' }
    ],
    rules: [
      'The provider must be EPA-authorized.',
      'The passing score is 80% on 23 questions.',
      'The certificate is valid 5 years; the refresher renews it.',
      'The firm certification is separate and annual.'
    ],
    afterwards: 'Keep the certificate and job records, confirm the firm certification is current, and schedule the 5-hour refresher before the five-year expiry.'
  }
};

export default data;
