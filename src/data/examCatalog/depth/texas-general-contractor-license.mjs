// Depth content for: texas-general-contractor-license
// Texas is one of the few states with NO statewide general contractor license.
// This page is honest about that structure: specialty trades are licensed
// (TDLR electrical/HVAC, TSBPE plumbing), and cities run their own contractor
// registration and permit systems. There is no GC exam and no GC pass rate.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Construction & trade licensing desk',
    bio: 'This guide is compiled and maintained by our construction-licensing desk. The core fact here is that Texas has no statewide general contractor license, and we state that plainly and explain the real structure that replaces it: state licensing of specialty trades through TDLR and the Texas State Board of Plumbing Examiners, plus municipal contractor registration and permit systems that vary by city. Because there is no GC exam, there is also no pass rate, and we do not invent one. Wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook occupation page for Construction Managers (SOC 11-9021), May 2024 data, with the caveat that BLS classifies by job duties rather than by credential.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Texas Occupations Code summaries, TDLR and TSBPE program pages, Texas Secretary of State filing guidance, municipal contractor registration pages, and the BLS OOH Construction Managers page (SOC 11-9021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$106,980 median for construction managers (BLS, May 2024)',
    summary: 'The direct answer for a Texas general contractor is that no state license gates the job, so the wage question belongs to the role you perform, and the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $106,980 for SOC 11-9021 Construction Managers — the occupation that best matches the general contracting role — with the lowest 10 percent earning less than $65,160 and the highest 10 percent more than $176,990. Texas is one of the few states with no statewide general contractor license, which means there is no exam score or license number attached to pay data, and BLS classifies by job duties rather than by credential; the OOH even notes that people who qualify for management through field experience rather than a degree may be more likely to work as self-employed general contractors than as salaried construction managers, so a self-employed Texas GC\u2019s earnings reflect business revenue, project type and region rather than a salary schedule. BLS counted 550,300 construction manager jobs in 2024 and projects 9 percent growth from 2024 to 2034, much faster than the average for all occupations, with about 46,800 openings a year, driven by replacement demand and continuing investment in construction. The caveats anchor the picture: the construction manager median covers managers who plan, coordinate, budget and supervise projects, and pay varies sharply by sector — heavy and civil engineering construction pays a May 2024 median of $121,060 and nonresidential building $120,010, while residential building pays $91,150 — so a Texas GC running residential work should expect earnings below the national median, while commercial and infrastructure work tracks closer to or above it. For a candidate asking whether general contracting in Texas pays, the direct answer is that it pays like construction management, and the median of $106,980 is the destination the role climbs toward.',
    rows: [
      { label: 'Median annual wage, construction managers', value: '$106,980', note: 'BLS OOH, SOC 11-9021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Less than $65,160', note: 'BLS OOH, SOC 11-9021, May 2024' },
      { label: 'Highest 10 percent', value: 'More than $176,990', note: 'BLS OOH, SOC 11-9021, May 2024' },
      { label: 'Number of jobs, 2024', value: '550,300', note: 'BLS OOH Quick Facts, 2024 (SOC 11-9021)' },
      { label: 'Projected annual openings', value: '~46,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — 9% growth, much faster than average' }
    ],
    growth: 'BLS projects 9 percent growth for construction managers from 2024 to 2034, much faster than the average for all occupations.',
    source: { label: 'BLS Occupational Outlook Handbook - Construction Managers', url: 'https://www.bls.gov/ooh/management/construction-managers.htm' }
  },
  passRate: {
    headline: 'There is no Texas GC license and no GC exam, so there is no pass rate — the real structure is specialty trade exams and city registration',
    summary: 'The direct answer is that Texas has no statewide general contractor license, no GC exam and therefore no pass rate to report, and any website that quotes a "Texas GC pass rate" or sells "Texas GC exam prep" is describing something that does not exist at the state level. What is real, and what a candidate should study instead, is the structure that replaces a GC license: the Texas Department of Licensing and Regulation (TDLR) licenses specific trades — electrical contractors, air conditioning and refrigeration (HVAC) contractors, and others — and the Texas State Board of Plumbing Examiners (TSBPE) licenses plumbing contractors, and it is these trade exams that have actual pass requirements, published content outlines and application fees, such as the TDLR HVAC contractor competency exam, which requires documented experience (roughly 48 months under a licensed ACR contractor within the preceding 72 months) and a fee in the range of $115 to apply. The rest of the structure is municipal: major cities including Dallas, Austin, San Antonio and Fort Worth run their own contractor registration programs, with application fees, proof of insurance and sometimes background checks, but generally no exam — and Houston is among the most permissive major markets, with some sources reporting no general contractor registration requirement at all. Neither TDLR nor TSBPE nor the cities publish cohort pass-rate statistics for their trade exams, so any pass percentage you see online is a private estimate rather than an official figure. The honest reading for a candidate: if you plan to act strictly as a general contractor who hires licensed subs for electrical, plumbing and HVAC, there is no exam to pass in Texas, only business setup, city registration and permit compliance; if you plan to perform a licensed trade yourself, the relevant exam belongs to that trade and its agency, and you should confirm the current content outline, fee and retake rules on the agency\u2019s official page.',
    source: { label: 'Texas Department of Licensing and Regulation - contractor programs', url: 'https://www.tdlr.texas.gov/' },
    caveat: 'Texas has no statewide general contractor license and no GC exam, so there is no GC pass rate to publish. Specialty trade exams (TDLR electrical/HVAC, TSBPE plumbing) exist and are administered by their agencies, which do not publish cohort pass rates; municipal contractor registration generally requires no exam.'
  },
  studyPlan: {
    summary: 'Because Texas has no statewide general contractor license and no GC exam, the "study plan" is not exam preparation — it is legal and administrative setup, and the practical version runs 20-40 hours of work spread over one to three months, ending when your business can legally pull a permit in the city where you plan to work. The plan below is organized in the order the setup actually happens. First, form the business entity: file a Certificate of Formation with the Texas Secretary of State for an LLC or corporation ($300 filing fee as of this review), then apply for an IRS Employer Identification Number, which is free and immediate online, because you need an EIN to hire employees, open a business bank account and file federal taxes. Second, register for taxes: most contractors must register with the Texas Comptroller for a sales and use tax permit, because construction services and materials can carry sales tax obligations, and the permit is free. Third, decide on insurance: workers\u2019 compensation is optional for private employers in Texas — the only state where that is true — but non-subscribers lose common-law defenses and face unlimited liability, and most commercial projects and government contracts require coverage regardless; general liability insurance is effectively required by cities and prime contracts, and specialty trade contractors face minimums such as the $300,000 per occurrence and $600,000 aggregate that TDLR requires for electrical contractors. Fourth, check specialty trade requirements: if you or your business will perform electrical, HVAC or plumbing work, confirm the applicable TDLR or TSBPE license before the first job, because unlicensed work in those trades is illegal and carries fines. Fifth, register with the municipalities where you will work: contractor registration requirements, fees and renewal cycles vary by city and change frequently, so verify directly with each city\u2019s development services department before pulling permits. Finally, build the permit workflow: learn how the city assigns permits, how the registration links to your permit portal account, and what documents the inspector expects, because the permit system is the real gate on Texas construction work.',
    totalHours: '20-40 hours of administrative setup, typically over 1-3 months',
    weeks: [
      {
        label: 'Step 1 — Business formation',
        focus: 'Entity, EIN, tax registration',
        tasks: [
          'File a Certificate of Formation with the Texas Secretary of State ($300 for an LLC or corporation)',
          'Apply for an IRS EIN online (free)',
          'Register for a Texas sales and use tax permit with the Comptroller (free)',
          'Open a business bank account'
        ],
        hours: '4-8 hrs'
      },
      {
        label: 'Step 2 — Insurance and risk',
        focus: 'Liability, workers\u2019 comp, bonds',
        tasks: [
          'Obtain general liability insurance; compare city and contract minimums',
          'Decide on workers\u2019 compensation — optional for Texas private employers, but weigh the unlimited-liability exposure',
          'Check whether any target projects require a surety bond',
          'Confirm TDLR insurance minimums if performing electrical or HVAC work'
        ],
        hours: '4-8 hrs'
      },
      {
        label: 'Step 3 — Trade licensing check',
        focus: 'Confirm which trades are licensed',
        tasks: [
          'Identify which scope of work you will self-perform versus subcontract',
          'If self-performing electrical, HVAC or plumbing, confirm the TDLR or TSBPE license requirements and exam path',
          'Verify each prospective subcontractor\u2019s license status on the TDLR and TSBPE public lookups',
          'Document the license numbers for bid files'
        ],
        hours: '4-8 hrs'
      },
      {
        label: 'Step 4 — City registration and permits',
        focus: 'Municipal compliance',
        tasks: [
          'Register as a contractor with each city where you plan to work (Dallas, Austin, San Antonio, Fort Worth and others vary)',
          'Link the registration to the city\u2019s permit portal account',
          'Learn the permit application, inspection and fee process for your project type',
          'Verify requirements directly with each city\u2019s development services department'
        ],
        hours: '6-12 hrs'
      }
    ],
    variants: [
      { label: 'Company already formed', detail: 'Skip Step 1 and start with insurance, trade licensing and city registration; most of the time is in the permit workflow, not the paperwork.' },
      { label: 'Performing a licensed trade yourself', detail: 'Add the relevant trade exam path (TDLR HVAC competency exam, TDLR electrical exams, TSBPE master plumber exam) before the city work, because the trade license, not the city registration, is the state gate.' },
      { label: 'Returning from another state', detail: 'Your out-of-state GC license does not transfer to Texas because none exists; specialty trade licenses also do not transfer, so budget time to qualify for and pass the TDLR or TSBPE exam for any trade you will perform.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant strategy for working legally as a Texas general contractor is to stop looking for a state exam to pass and instead build the compliance stack that actually governs the work: a formed business entity, tax registration, insurance, city registration and a working permit process, with specialty trade licensing handled for any trade you perform yourself. First, verify the structure in your own city: Texas gives municipalities the authority to regulate construction, so requirements and fees differ from one city to the next — a contractor registered in Fort Worth cannot assume that registration is valid in Dallas or San Antonio — and the reliable move is to check each city\u2019s development services department directly before pulling permits, because city rules change more frequently than state rules. Second, formalize the business before the first contract: file the Certificate of Formation with the Secretary of State, obtain the EIN and the Comptroller sales tax permit, because cities and prime contracts check entity status and tax registration before they assign work. Third, carry insurance that matches the work: general liability is the baseline that cities and contracts demand, workers\u2019 compensation is optional for private employers but carries unlimited liability for non-subscribers and is required on most commercial and government projects, and any electrical or HVAC contractor must meet the TDLR minimums. Fourth, keep specialty trade licensing current: if your company performs electrical, HVAC or plumbing work, hold the applicable TDLR or TSBPE license, keep the responsible qualifier on record, and verify the licenses of every subcontractor through the public license lookups before bids go out. Fifth, learn the permit and inspection workflow in each market, because the permit system is the real gate: registration gaps in city portals have caused permit delays, and inspectors enforce the specialty trade requirements on site. Finally, understand Texas lien law — the Texas Property Code mechanics lien chapter — because protecting payment rights on private projects is a financial survival skill for a general contractor, not a legal nicety.',
    items: [
      { title: 'Verify the structure in your city', detail: 'Municipal registration, fees and renewal cycles vary by city and change frequently; check each city\u2019s development services department directly before pulling permits.' },
      { title: 'Formalize the business first', detail: 'File the Certificate of Formation, get the EIN and the Comptroller sales tax permit before the first contract; cities and prime contracts check these.' },
      { title: 'Carry insurance that matches the work', detail: 'General liability is the baseline; workers\u2019 comp is optional for Texas private employers but required on most commercial projects; TDLR sets minimums for electrical and HVAC contractors.' },
      { title: 'Keep specialty trade licenses current', detail: 'TDLR (electrical, HVAC) and TSBPE (plumbing) licenses are state gates; verify your licenses and every subcontractor\u2019s via the public lookups.' },
      { title: 'Learn the permit and inspection workflow', detail: 'The permit system is the real gate on Texas construction; registration gaps cause permit delays, and inspectors enforce trade licensing on site.' },
      { title: 'Understand Texas lien law', detail: 'The Texas Property Code mechanics lien chapter governs payment rights; using it correctly is a financial survival skill for a GC.' }
    ]
  },
  resourceComparison: {
    summary: 'The resource picture for a Texas general contractor is different from licensed states because there is no state license application, no exam provider and no prep industry to buy into — the resources that matter are the official agency pages, the city registration portals and the business formation steps, and the main advice is to spend money on entity formation and insurance, not on "Texas GC exam prep," which prepares for nothing real. The official sources are the foundation: the Texas Department of Licensing and Regulation (tdlr.texas.gov) publishes the licensed trade programs — electrical, air conditioning and refrigeration, and others — with application fees, experience requirements and exam information, and its public license search verifies any contractor; the Texas State Board of Plumbing Examiners (tsbpe.texas.gov) does the same for plumbing; and the Texas Secretary of State ($300 Certificate of Formation fee as of this review) and the Texas Comptroller (free sales tax permit) cover entity and tax setup. The city layer is next: Dallas charges around $120 for general contractor registration, Austin\u2019s Build + Connect registration is reported with no registration fee, and Houston is the most permissive major market, with sources reporting no general contractor registration requirement — but these fees and rules change frequently, so confirm on each city\u2019s site. Insurance is the recurring cost: general liability premiums vary with revenue and work type, workers\u2019 compensation is optional for private employers in Texas but required on most commercial projects, and specialty trade contractors must meet TDLR minimums such as the electrical contractor\u2019s $300,000 per occurrence and $600,000 aggregate. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Candidates should treat third-party "Texas contractor license" guides with caution, because some sell courses for an exam that does not exist at the state level.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'TDLR licensed trade programs + license search', values: ['Varies by trade; HVAC contractor application ~$115', 'Official state agency pages', 'Electrical, HVAC and other licensed trade requirements and verification'], note: '' },
      { label: 'TSBPE plumbing licensing', values: ['Master plumber application ~$345', 'Official state board pages', 'Plumbing contractor qualification and verification'], note: '' },
      { label: 'Texas Secretary of State business formation', values: ['$300 filing fee', 'SOSDirect online filing', 'LLC or corporation Certificate of Formation'], note: '' },
      { label: 'City contractor registration', values: ['Varies — Dallas ~$120, Austin reported free, Houston none reported', 'City development services portals', 'The real "license-like" gate for pulling permits'], note: '' },
      { label: 'General liability + workers\u2019 comp insurance', values: ['Varies with revenue and work type', 'Insurance carrier / broker', 'City and contract compliance; required for most commercial work'], note: '' },
      { label: 'Texas Comptroller sales tax permit', values: ['Free', 'Online registration', 'Collecting and remitting sales tax on taxable construction work'], note: '' }
    ],
    footnote: 'Prices checked 2026-08 in USD and change frequently; confirm fees on the official agency and city pages. We do not rank by commission.'
  },
  commonMistakes: {
    summary: 'The most common mistakes in Texas general contracting all trace back to the same root: assuming that because there is no state GC license, there are no rules — when the reality is that regulation is spread across specialty trade licensing, city registration and the permit system, and each layer carries enforcement. First, contractors treat "no license" as "no compliance" and pull permits or take work without registering with the city, and the practical risk is not criminal prosecution for being unlicensed but permit delays and citations in cities that require registration; the fix is to check the specific city\u2019s registration requirement before the first job, because Houston, Dallas, Austin, San Antonio and Fort Worth do not share one rule. Second, contractors perform electrical, HVAC or plumbing work without the applicable TDLR or TSBPE license, which is illegal in Texas and heavily enforced, with fines for unlicensed work; the fix is to hold the relevant trade license or subcontract the trade to a properly licensed contractor verified on the public lookups. Third, contractors operate without a formed business entity or tax registration, ignoring the Secretary of State filing and the Comptroller sales tax permit, which cities and prime contracts check; the fix is to form the entity and register for taxes before the first contract. Fourth, contractors skip insurance or misunderstand the workers\u2019 compensation choice: Texas is the only state where private employers may opt out, but non-subscribers lose common-law defenses and face unlimited liability, and most commercial projects and government contracts require coverage regardless; the fix is to treat the insurance decision as a liability decision, not a cost decision. Finally, contractors from other states assume their out-of-state GC license transfers, when no Texas GC license exists and specialty trade licenses do not transfer, leaving them unlicensed for any trade they self-perform; the fix is to confirm the Texas structure and qualify for the applicable trade license before working.',
    items: [
      { mistake: 'Treating "no license" as "no compliance"', fix: 'Check each city\u2019s contractor registration requirement before the first job; Houston, Dallas, Austin, San Antonio and Fort Worth do not share one rule, and unregistered permit pulls get delayed or cited.' },
      { mistake: 'Self-performing licensed trades without a license', fix: 'Electrical, HVAC and plumbing require TDLR or TSBPE licenses in Texas; hold the applicable license or subcontract the trade to a licensed contractor verified on the public lookups.' },
      { mistake: 'Operating without a formed entity or tax registration', fix: 'File the Certificate of Formation with the Secretary of State and register for the Comptroller sales tax permit before the first contract; cities and prime contracts check both.' },
      { mistake: 'Skipping insurance or missing the workers\u2019 comp choice', fix: 'Texas private employers may opt out of workers\u2019 comp, but non-subscribers face unlimited liability and lose common-law defenses; carry general liability and make the comp decision deliberately, because most commercial work requires coverage.' },
      { mistake: 'Assuming an out-of-state GC license transfers', fix: 'No Texas GC license exists, and specialty trade licenses do not transfer; confirm the Texas structure and qualify for the applicable TDLR or TSBPE trade license before self-performing any trade.' }
    ]
  },
  questionTypes: {
    summary: 'There is no statewide general contractor exam in Texas, so there is no official question format, time limit or passing score for the "Texas general contractor license" — and any question bank that claims to simulate one is selling preparation for a test that does not exist at the state level. What does exist is a set of real knowledge gates that a working GC must pass in practice: the specialty trade exams administered by TDLR and TSBPE for electrical, HVAC and plumbing, which have actual content outlines, application fees and pass requirements that candidates should confirm on the agency\u2019s official page; the municipal registration and permit processes, which verify entity status, insurance and trade licensing but generally administer no exam; and the working knowledge of Texas construction law and procedure — permits, inspections, insurance minimums, lien rights and subcontractor verification — that a GC applies on every project. Candidates who will self-perform a licensed trade should study the relevant agency\u2019s published content outline and sample questions as the closest thing to an official blueprint, because those exams are the only state-administered tests in the Texas construction space and their details — question format, time limit, fee, passing requirement and retake rules — are set by the agency and should be confirmed on its official page rather than assumed from third-party summaries. The municipal layer is different in kind: city registration programs verify a formed business entity, an EIN, insurance certificates and applicable trade license numbers, and they generally administer no written test at all, so the "test" at that level is simply having the documents in order before the permit department asks for them. The samples below are editor-written illustrations of that working knowledge, drawn from the Texas Occupations Code structure, the TDLR and TSBPE program requirements, the Texas Property Code mechanics lien chapter and common municipal permit rules; they are not items from a state exam, because no such exam exists. Candidates should treat these as a readiness check for operating legally in Texas rather than as exam practice, and should confirm the current specialty trade exam details on the relevant agency page if they plan to self-perform a licensed trade.',
    types: [
      { name: 'Specialty trade exams (TDLR / TSBPE)', share: 'The only real exams', detail: 'Electrical contractor, HVAC contractor and master plumber exams have published content outlines, experience requirements and fees; no cohort pass rates are published.' },
      { name: 'Municipal registration checks', share: 'No exam', detail: 'Cities verify entity status, insurance and trade licensing for registration and permits; generally no written test.' },
      { name: 'Day-to-day compliance knowledge', share: 'Applied on every project', detail: 'Permits, inspections, insurance minimums, subcontractor verification and lien law govern the work in practice.' }
    ],
    samples: [
      {
        prompt: 'Which statement is true about operating as a general contractor in Texas?',
        options: [
          'A. Texas issues no statewide general contractor license, so compliance shifts to specialty trade licensing and city registration',
          'B. A general contractor must pass a statewide GC exam before pulling a residential building permit',
          'C. Any out-of-state GC license is automatically valid in Texas',
          'D. General contracting work requires a TDLR license in every Texas county'
        ],
        answer: 'A',
        explanation: 'Texas is one of the few states with no statewide general contractor license, so there is no GC exam to pass. Regulation is split between state licensing of specialty trades (TDLR electrical and HVAC, TSBPE plumbing) and municipal contractor registration and permits. Options B, C and D each describe requirements Texas does not have.'
      },
      {
        prompt: 'A general contractor plans to self-perform electrical work on a commercial project. What must the business hold before doing that work?',
        options: [
          'A. A TDLR electrical contractor license, with a licensed Master Electrician serving as the qualifier',
          'B. Only the city contractor registration, since cities license all trade work',
          'C. A general contractor registration from the Texas Secretary of State',
          'D. A TSBPE plumbing license'
        ],
        answer: 'A',
        explanation: 'Electrical contracting in Texas is licensed by TDLR, and a business can hold an electrical contractor license only by employing or contracting with a licensed Master Electrician who serves as the qualifier; the contractor license is at risk if that relationship ends. City registration does not substitute for the state trade license, the Secretary of State registers entities rather than contractors, and plumbing is a different trade under TSBPE.'
      },
      {
        prompt: 'A subcontractor completes work on a private Texas project but the GC does not pay the final invoice. What protects the subcontractor\u2019s payment rights?',
        options: [
          'A. A properly filed mechanic\u2019s lien under the Texas Property Code',
          'B. The city\u2019s contractor registration automatically guarantees payment',
          'C. A claim against the GC\u2019s sales tax permit',
          'D. A complaint to TDLR, which is empowered to order payment'
        ],
        answer: 'A',
        explanation: 'The Texas Property Code mechanics lien chapter gives contractors and subcontractors a lien on private property when they are not paid, but the rights depend on following the statutory notice and filing steps correctly. City registration does not guarantee payment, the sales tax permit is unrelated, and TDLR licenses trades rather than resolving payment disputes, so the lien process is the real payment-protection tool.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'There is no Texas statewide GC exam, so there is no "exam day" in the traditional sense — the day that matters is the day your business becomes able to pull a permit legally, which is a registration and compliance event, not a test event, and it happens through the city\u2019s portal, not a testing center. The practical version of that day: you log into the city\u2019s development services or permit portal, complete or confirm your contractor registration — with your business entity documents, EIN, insurance certificate and any specialty trade licenses attached — and the city links the registration to your account so you can activate a building permit; in a city like Austin the registration is done through the Build + Connect portal, in Dallas through its contractor registration system, and the requirements, fees and renewal cycles vary by city and change frequently, so verify them directly before the day. If you are sitting an actual exam because you self-perform a licensed trade, the exam-day rules belong to that trade\u2019s agency: TDLR and TSBPE set their own application processes, exam formats, fees and retake rules, which candidates should confirm on the agency\u2019s official page, and neither agency publishes cohort pass rates. What both versions share is the paperwork checklist: the business must be formed with the Secretary of State, registered for taxes with the Comptroller, insured at levels the city and your contracts require, and licensed for any trade the business performs itself, because the permit department and inspectors check all of it. Afterwards, compliance is a cycle, not a one-time event: city registrations renew on schedules that vary by city, trade licenses renew on TDLR and TSBPE cycles, insurance renews annually, and the permit and inspection process repeats per project, so the effective GC keeps a compliance calendar rather than treating setup as finished. Confirm the current registration, fee, insurance and renewal requirements on each city\u2019s official page and the trade agency pages, because Texas rules move at the local level and change more often than the state statutes.',
    bring: [
      'Business entity documents (Certificate of Formation) and IRS EIN confirmation',
      'Texas Comptroller sales and use tax permit',
      'Insurance certificates (general liability, workers\u2019 comp where required)',
      'Applicable TDLR or TSBPE trade license numbers for any trade the business performs',
      'For a specialty trade exam: the agency\u2019s required identification and exam confirmation'
    ],
    leave: [
      'The assumption that a state GC license exists — no state exam or license will be issued in Texas',
      'An out-of-state GC license that you expect to transfer — it does not',
      'Unregistered work in cities that require registration, which causes permit delays and citations',
      'Third-party "Texas GC exam" study materials, which prepare for a test that does not exist at the state level'
    ],
    timeline: [
      { time: '1-3 months before', detail: 'Form the entity, get the EIN and sales tax permit, and obtain insurance; confirm specialty trade licensing needs.' },
      { time: 'Days before', detail: 'Register with each target city\u2019s contractor program and confirm current fees, insurance minimums and documents.' },
      { time: 'The registration day', detail: 'Complete the city registration in the portal, attach documents, and link the registration to your permit account.' },
      { time: 'First permit', detail: 'Apply for the building permit; the city reviews entity status, insurance and trade licensing before issuance.' },
      { time: 'On site', detail: 'Inspections enforce specialty trade licensing and code compliance at the scheduled inspection points.' }
    ],
    rules: [
      'Texas has no statewide general contractor license, exam or pass rate; compliance is city registration plus specialty trade licensing.',
      'Specialty trade exams (TDLR electrical and HVAC, TSBPE plumbing) have their own application, format, fee and retake rules set by the agency.',
      'Workers\u2019 compensation is optional for Texas private employers, but most commercial and government work requires coverage.',
      'City registration requirements and fees vary and change frequently; verify directly with each city\u2019s development services department.',
      'Permit issuance depends on a formed business entity, tax registration, insurance and any applicable trade licenses.'
    ],
    afterwards: 'After registration and your first permit, the work is a compliance cycle rather than a one-time setup: city contractor registrations renew on schedules that vary by city, specialty trade licenses renew on TDLR and TSBPE cycles, insurance renews annually, and every project runs its own permit and inspection sequence, so keep a compliance calendar with each city\u2019s renewal date and each license\u2019s expiration. Use the TDLR and TSBPE public license lookups before every bid to verify that your subcontractors are current, because a GC is exposed to fines and project risk when an unlicensed sub performs a licensed trade. Protect payment rights on private projects by following the Texas Property Code mechanics lien notice and filing steps on time, and treat the insurance and workers\u2019 compensation decisions as annual reviews rather than one-time purchases. If you self-perform a licensed trade, watch the agency\u2019s renewal deadlines and any continuing requirements, and confirm the current rules on the official pages, because Texas regulation runs at the local and trade-agency level and moves more often than the statutes.'
  }
};

export default data;
