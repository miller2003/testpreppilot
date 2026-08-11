const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Skilled trades licensure desk',
    bio: 'The California electrician certification facts below are drawn from the California Department of Industrial Relations (DIR) Division of Labor Standards Enforcement (DLSE) Electrician Certification Unit requirements and the PSI candidate information for the certification exam; where a fee or retake detail is not confirmed on the official page, we say so plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation page for Electricians (May 2024 data), cited by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the CA DIR/DLSE electrician certification requirements, the PSI candidate bulletin for the General Electrician exam, and the BLS OOH Electricians page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Electricians earned a May 2024 BLS median of $62,350, and the California General Electrician certification is the state gate for independent electrical work in California.',
    summary: 'The salary answer for the California electrician certification is a strong trade-story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $62,350 for SOC 47-2111 Electricians, with the lowest 10 percent earning below $39,430 and the highest 10 percent above $106,030, and the certification itself does not appear in wage data because the BLS classifies by job duty rather than by certificate. The credential gates the work in a specific way: California does not issue a single statewide journeyman electrician license, so the state-level credential is the General Electrician certification issued by the DIR Division of Labor Standards Enforcement, and many local jurisdictions issue their own journey-level cards that reference the state certification, while the C-10 Electrical Contractor license from the Contractors State License Board is the separate business license for electrical contractors. Passing the DLSE exam is what converts roughly 8,000 documented hours of supervised experience into a portable state certification, and that certification is what employers and inspectors expect for independent electrical work in California. The BLS growth picture is unusually strong: the OOH projects 9 percent employment growth for electricians from 2024 to 2034, much faster than the all-occupation average, with about 81,000 openings per year driven largely by replacement demand and by alternative-power installation work. California is consistently among the higher-paying states for electricians in the OEWS state data, which matters because the certification is statewide even though wages vary by metro and by sector, with BLS showing government and manufacturing employers paying above the electrical-contractor median. For a candidate asking whether the certification pays, the direct answer is that it gates a $62,350-median trade with a 9 percent projected growth rate, and the strongest earnings path runs through certification, continuing education, and the move toward contractor licensing.',
    rows: [
      { label: 'Median annual wage, electricians', value: '$62,350', note: 'BLS OOH, SOC 47-2111, May 2024' },
      { label: 'Lowest 10%', value: 'under $39,430', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10%', value: 'over $106,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '818,700 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~81,000/year', note: 'BLS OOH Job Outlook, 2024-2034' }
    ],
    growth: 'BLS projects 9 percent employment growth for electricians (2024-2034), much faster than the all-occupation average, with about 81,000 openings per year, mostly from replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Electricians', url: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm' }
  },
  passRate: {
    headline: 'The DLSE publishes no pass rate for the California General Electrician exam, so no official percentage exists; what is published is the exam format and the 70 percent passing requirement.',
    summary: 'The direct answer on pass rates is that the California Division of Labor Standards Enforcement does not publish cohort pass-rate statistics for the General Electrician certification exam, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the exam structure: the General Electrician exam is a computer-based test of 100 multiple-choice questions with a 270-minute (4.5-hour) time limit, a 70 percent passing score, and open-book access to the National Electrical Code, delivered at PSI test centers after the DIR approves your application and forwards an eligibility notice. The exam is currently based on the 2020 NEC, with the DIR implementing new exam procedures for tests scheduled on or after June 1, 2026, which may include transitioning to the 2023 NEC, so candidates should confirm the current code edition on the official page before scheduling. Eligibility is the practical gate: you must document 8,000 hours of qualified electrical work in at least two work areas for the General Electrician certification, and the application total is reported at about $175, made up of a $75 application processing fee and a $100 examination fee, with payment by check or money order to the DIR Electrician Certification Fund and the exact amounts to confirm on the official page. Because the state publishes no pass rate, the honest read is that the exam rewards code-navigation skill in an open-book setting: candidates who tab their code book and drill NEC-based calculation items reliably clear the 70 percent bar, while candidates who sit cold on the code lookup questions underperform, and retakes after a documented wait period are part of the normal path.',
    source: { label: 'CA DIR - Division of Labor Standards Enforcement electrician certification', url: 'https://www.dir.ca.gov/dlse/' },
    caveat: 'DLSE publishes no pass rate for the General Electrician exam. What is published is the format (100 questions, 4.5 hours, 70 percent passing, open NEC book) and the fee structure (about $175 total for application and exam); confirm the exact fees and the current NEC edition on the official page.'
  },
  studyPlan: {
    summary: 'An efficient California General Electrician study plan is 60-90 hours over 6-8 weeks, because the exam is an open-book code test and the fastest score gains come from learning to navigate the NEC efficiently while drilling the calculation items that the 4.5-hour format rewards. The open-book format is the single most important fact: candidates who tab their code book by article, practice finding sections under time pressure, and rehearse the standard calculation workflows score far higher than candidates who try to memorize the code, and the study plan should reflect that with dedicated code-navigation drills each week. The plan should split into content coverage of the published subject areas, with wiring methods and materials, grounding and bonding, and calculations receiving the largest shares (the exam structure emphasizes installation practices and system requirements), followed by calculation drilling and full timed practice exams. Candidates should budget the lower end if they have been working in the trade for years and know the code sections; they should budget the upper end if the exam is their first open-book code test, and add daily tab-and-index drills. The final two weeks should include at least two full 100-question timed practice exams with the open NEC book, because pacing at roughly 2.7 minutes per question including lookups is the real constraint, and the 70 percent bar is best targeted when practice scores clear it with margin. One more planning fact matters: the certification is valid for three years, renewal requires 2,000 hours of work experience and 32 hours of approved continuing education, and a lapsed certification means re-taking the entire exam, so the study investment should be protected with a renewal calendar.',
    totalHours: '60-90 hours over 6-8 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Code navigation fundamentals', tasks: ['Tab your NEC book by article and practice the index', 'Review definitions, chapter structure, and the tables', 'Drill finding grounding, wiring, and calculation sections fast'], hours: 18 },
      { label: 'Week 3-4', focus: 'Wiring methods and grounding', tasks: ['Study wiring methods, conduit and box fill, and cable types', 'Cover grounding and bonding per NEC Article 250', 'Review services, feeders, and overcurrent protection'], hours: 20 },
      { label: 'Week 5', focus: 'Calculations', tasks: ['Drill conductor sizing, ampacity, and voltage drop', 'Practice box fill, conduit fill, and service calculations', 'Use the NEC tables for every answer'], hours: 14 },
      { label: 'Week 6-7', focus: 'Question-bank drilling', tasks: ['Work 400-600 items from a current CA electrician bank', 'Log every miss and re-read the code section', 'Practice special occupancies and equipment items'], hours: 16 },
      { label: 'Week 8', focus: 'Full timed exams', tasks: ['Take two full 100-question timed exams with the code book', 'Re-drill the miss log until clean', 'Confirm the PSI booking and the current NEC edition'], hours: 10 }
    ],
    variants: [
      { label: 'Working electrician with years in the trade', detail: 'Budget the lower end and weight time toward code-navigation speed and the calculation items.' },
      { label: 'First open-book code test', detail: 'Budget the upper end and add daily tab-and-index drills before the content review.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the California General Electrician exam is to treat it as an open-book code exam rather than a memory test, because 100 questions in 4.5 hours with a 70 percent bar rewards fast NEC navigation and calculation fluency, and candidates who rehearse lookups under a clock outscore candidates who read the code passively. First, confirm eligibility and the fee before studying: the DIR requires 8,000 documented hours in at least two work areas, the application and exam fee is reported at about $175 total, and the current code edition should be confirmed on the official page because the DIR is transitioning exam procedures as of June 1, 2026. Second, tab and index your NEC book early and drill lookup speed daily, because the open-book format means the point is finding the right section quickly, and the tables in Chapter 9 and Article 310 carry a disproportionate share of the calculation answers. Third, study the content in proportion to the exam structure, with wiring methods, grounding and bonding, and calculations receiving the largest share, and the installation-practice material covering about two-thirds of the exam. Fourth, drill a current question bank with explanations and a miss log tied to the NEC article, and rehearse the standard calculation workflows until the tables are automatic. Fifth, take full timed practice exams with the code book open, because pacing is the real constraint and the 70 percent bar is best targeted when practice scores clear it with margin. Finally, plan for the renewal before the exam: the three-year certification requires 2,000 hours of work and 32 hours of continuing education, so build the renewal calendar the week you pass rather than rediscovering it in year three.',
    items: [
      { title: 'Confirm eligibility and fees first', detail: 'Document 8,000 hours in two or more work areas; confirm the current fee total and NEC edition on the official page.' },
      { title: 'Tab the code book and drill lookups', detail: 'Fast NEC navigation is the skill the open-book format actually rewards.' },
      { title: 'Study in proportion to the blueprint', detail: 'Wiring methods, grounding and bonding, and calculations carry the exam.' },
      { title: 'Drill calculations and a question bank', detail: 'Rehearse sizing, fill, and service workflows with a miss log tied to the code.' },
      { title: 'Take full timed practice exams', detail: '100 questions in 4.5 hours with lookups; clear the 70 percent bar with margin.' }
    ]
  },
  resourceComparison: {
    summary: 'California electrician prep resources split into the official DLSE and PSI set, code-focused study guides, and question banks, and the buying logic is anchored by the open-book format: the NEC code book itself is the primary resource, and the best spend is practice that builds lookup speed and calculation fluency rather than a large memorization library. The official DLSE candidate information and the PSI bulletin are free and define eligibility, the fee structure, the 100-question format, and the 4.5-hour time limit, and they are the authoritative scope for what is actually on the exam. The current edition of the National Electrical Code, roughly $100 to $200 depending on binding and bundle, is the essential tool because the exam is open-book, and candidates should bring the edition the DLSE specifies and tab it before test day. Code-focused study guides and review courses, roughly $50 to $300, add structured coverage of wiring methods, grounding, and the calculation workflows, and the well-regarded options track the CA exam structure and the NEC edition in use. Question banks from reputable providers, roughly $40 to $90, add volume with explanations and code references, which is the format-specific rehearsal that converts code familiarity into exam speed, and the banks that reference the current NEC and the CA certification structure are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The state fees are reported at about $175 for application and exam, with the renewal fee reported at $100, and all exact amounts should be confirmed on the official DLSE page before payment.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official DLSE + PSI candidate information', values: ['Free', 'Official requirements and bulletin', 'Eligibility, fees, and the exam format'], note: '' },
      { label: 'Current NEC code book', values: ['$100-200', 'Tabbed reference, open-book on exam', 'The essential exam tool and lookup source'], note: '' },
      { label: 'CA electrician study guide or course', values: ['$50-300', 'Book or course with code coverage', 'Structured review of the tested subjects'], note: '' },
      { label: 'Question bank', values: ['$40-90', 'Online, with code references', 'Lookup speed and calculation rehearsal'], note: '' },
      { label: 'DLSE application and exam fees', values: ['~$175 total', 'DIR Electrician Certification Fund', 'The real exam'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. State fees are reported at about $175 total for application and exam and $100 for renewal; confirm the exact amounts on the DLSE page.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the California General Electrician exam all trace to misunderstanding the open-book format or the credential structure: candidates who try to memorize the NEC instead of practicing lookup speed waste the 4.5 hours, candidates who bring the wrong code edition or no tabs lose time on every lookup item, and candidates who study only content without timing themselves run out of clock on the calculation items. A second cluster is eligibility: candidates apply before documenting 8,000 hours in at least two work areas, or let the one-year eligibility window from the eligibility notice lapse and face a full reapplication with new fees. Candidates also confuse the state certification with the contractor license, expecting a C-10 Electrical Contractor license from the CSLB when the DLSE certification is the individual credential, and a few misunderstand renewal, assuming a lapsed three-year certification can be fixed with a fee when a lapse means re-taking the entire exam. Finally, some candidates use outdated study material tied to an older NEC edition, when the DLSE is transitioning exam procedures as of June 1, 2026 and the current edition determines which code book you should carry. The money compounds the errors: the application and exam total is about $175, paid by check or money order to the DIR Electrician Certification Fund, so a lapsed eligibility window means paying that total again, and each PSI retake after the documented wait carries a fresh exam fee. Candidates who do fail also waste the score report, which shows performance by subject area and is the map for re-study, and combined with the roughly 2.7 minutes per question including lookups, the winning habit is drilling the NEC tables in Chapter 9 and Article 310 under a clock and re-tabbing the code book after every miss.',
    items: [
      { mistake: 'Memorizing the code instead of navigating it', fix: 'Drill tab-and-index lookup speed under a clock; the open-book format rewards finding sections fast.' },
      { mistake: 'Bringing the wrong NEC edition', fix: 'Confirm the current edition the DLSE specifies and tab that exact book before test day.' },
      { mistake: 'Under-documenting the 8,000 hours', fix: 'Verify your hours span at least two work areas and keep the SSA earnings history or supervisor letters.' },
      { mistake: 'Letting the eligibility window lapse', fix: 'Schedule the PSI exam within one year of the eligibility notice or face a full reapplication.' },
      { mistake: 'Confusing certification with the C-10 license', fix: 'The DLSE certification is the individual credential; the CSLB C-10 is the separate contractor license.' }
    ]
  },
  questionTypes: {
    summary: 'The California General Electrician exam is a computer-based, open-book test of 100 multiple-choice questions in 270 minutes (4.5 hours), delivered at PSI test centers, with a 70 percent passing score and the NEC available as a reference. The content follows the DLSE exam structure, with a large share on installation practices and wiring methods, grounding and bonding, and the determination of electrical system requirements, which includes the calculation items on conductor sizing, ampacity, voltage drop, box fill, and conduit fill that candidates must solve using the NEC tables. The exam is currently based on the 2020 NEC, with the DIR transitioning exam procedures as of June 1, 2026, so candidates should confirm the current edition before scheduling. The item style is single-best-answer, mixing direct code-knowledge questions with applied scenarios that describe an installation and ask for the code-compliant choice, and the calculation items require working through the tables rather than recalling a number. The three content pillars match the published structure, with installation-practice items covering about two-thirds of the paper and the NEC tables in Chapter 9 and Article 310 carrying a disproportionate share of the calculation answers. Because the format is open book, the arithmetic is table-driven rather than memorized, and pacing at roughly 2.7 minutes per item including lookups makes the flag-for-review feature and a permitted basic calculator matter on test day. After the test, the subject-area score report becomes the retake study plan if the 70 percent bar is not cleared. The samples below illustrate three recurring styles: a grounding item, a conductor sizing calculation, and an installation-methods item. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'Code knowledge items', share: 'Large share', detail: 'Grounding and bonding, wiring methods, and equipment requirements.' },
      { name: 'Calculation items', share: 'Substantial share', detail: 'Conductor sizing, ampacity, voltage drop, box and conduit fill.' },
      { name: 'Installation-practice items', share: 'About two-thirds of the paper', detail: 'Services, feeders, special occupancies, and equipment installation.' }
    ],
    samples: [
      {
        prompt: 'A service must have a grounding electrode conductor connected to a metal underground water pipe. Which additional condition must be met under the NEC?',
        options: [
          'A. The connection must be made within five feet of the water pipe entry into the building',
          'B. The water pipe must be supplemented by an additional electrode, such as a ground rod',
          'C. The grounding electrode conductor may be connected to any accessible water pipe in the building',
          'D. No additional electrode is required if the water pipe is metallic'
        ],
        answer: 'B',
        explanation: 'The NEC requires a metal underground water pipe used as a grounding electrode to be supplemented by an additional electrode, such as a ground rod. Options A and C misstate the bonding and connection rules, and D ignores the supplement requirement.'
      },
      {
        prompt: 'A 120-volt branch circuit serves a continuous 1,440-watt load. Before applying the continuous-load adjustment, what is the minimum circuit ampacity required?',
        options: [
          'A. 10 amperes',
          'B. 12 amperes',
          'C. 15 amperes',
          'D. 20 amperes'
        ],
        answer: 'C',
        explanation: 'A continuous load must be treated at 125 percent: 1,440 watts divided by 120 volts is 12 amperes, and 12 x 1.25 is 15 amperes, so the circuit must be rated at least 15 amperes. Option B is the base load without the continuous-load adjustment, and options A and D mis-apply the arithmetic.'
      },
      {
        prompt: 'Which wiring method is generally permitted to be run exposed where subject to physical damage?',
        options: [
          'A. Nonmetallic sheathed cable without protection',
          'B. Rigid metal conduit',
          'C. Open wiring on insulators in a wet location',
          'D. Flat conductor cable on a wall surface'
        ],
        answer: 'B',
        explanation: 'Rigid metal conduit is a permitted wiring method where conductors are exposed and subject to physical damage, because the conduit provides mechanical protection. Nonmetallic sheathed cable without protection, open wiring on insulators in wet locations, and flat conductor cable do not meet the physical-damage requirement as described.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The California General Electrician exam is a computer-based, open-book test delivered at PSI test centers, and the direct exam-day answer is that you will sit 100 multiple-choice questions over 4.5 hours with your NEC code book as the reference, aiming for the 70 percent passing score, with the result and score report available shortly after the appointment. Bring the PSI admission confirmation, a valid government-issued photo ID, and your tabbed copy of the current NEC edition, and arrive early because the PSI center enforces strict identification and security procedures with personal items stored before you enter the testing room. A basic calculator is permitted for the calculation items, and the exam software supports flagging questions for review, so sweep the code-knowledge items first, then work the lookups and calculations, then return to the flagged items rather than leaving anything blank. Budget about 2.7 minutes per question including lookups, check the clock after the first hour, and protect the final 30 minutes for the calculation items, which take the longest. Expect a quiet, proctored environment with a countdown clock and no scheduled breaks, and use the flag feature liberally because the open-book items reward finishing the paper over perfection on any single question. If the score falls short of 70 percent, retakes are available through PSI after the documented waiting period with a fresh exam fee, and the score report shows your performance by subject area, which is the diagnostic tool for the retake study plan. Afterwards, the passing result supports the three-year General Electrician certification, and the renewal calendar with 2,000 work hours and 32 continuing-education hours should be set the week you pass.',
    bring: ['PSI admission confirmation and valid government-issued photo ID', 'Your tabbed copy of the current NEC edition specified by DLSE', 'A basic calculator permitted by the PSI bulletin', 'Layers or a quiet snack for the lobby only'],
    leave: ['Phone, smartwatch, and other electronics (stored per PSI center rules)', 'Study materials and notes', 'Personal stationery beyond the center-provided noteboard', 'Any item on the PSI prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present ID and admission confirmation, and complete PSI check-in' },
      { time: '0-270 min', detail: 'Work 100 multiple-choice items; sweep known items, then lookups and calculations' },
      { time: 'After the test', detail: 'Score report by subject area; retake after the documented wait if under 70 percent' },
      { time: 'Within 3 years', detail: 'Complete 2,000 work hours and 32 CE hours for renewal' }
    ],
    rules: ['Valid photo ID and PSI admission confirmation required', 'Open book: only the specified NEC edition and permitted references', 'No scheduled breaks; the 4.5-hour clock runs continuously', '70 percent passing score on a 100-question paper'],
    afterwards: 'A passing score supports the three-year General Electrician certification. If the score falls short, use the subject-area score report to re-study and retake after the documented wait period, and set the renewal calendar the week you pass.'
  }
};

export default data;
