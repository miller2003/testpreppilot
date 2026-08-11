const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Insurance & financial services designations desk',
    bio: 'This desk covers professional designations awarded by The American College and other financial-services educators. Program structure, course counts and grading standards come from the issuing institution\u2019s official program pages and student handbook, which were revised in April 2026; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When the College does not publish a figure, such as a program pass rate, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CLU program structure and April 1, 2026 curriculum change against The American College\u2019s CLU program page and tuition schedule, and wage context against BLS OOH Insurance Sales Agents (SOC 41-3021) and Insurance Underwriters (SOC 13-2053), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$60,370 median for insurance sales agents (BLS, May 2024) — the primary role CLU designees hold',
    summary:
      'The direct answer is that there is no BLS occupation called "chartered life underwriter", so the CLU salary story is benchmarked to the two closest official occupations. The primary fit is Insurance Sales Agents, SOC 41-3021, which had a May 2024 median wage of $60,370, because the CLU is held almost entirely by advisors who sell and advise on life insurance, annuities and related planning products. The adjacent fit is Insurance Underwriters, SOC 13-2053, which had a May 2024 median of $79,880, but that occupation evaluates applications rather than advising clients, so it is the secondary comparison. Both distributions are wide and commission-sensitive: BLS puts the lowest 10 percent of insurance sales agents below $36,390 and the highest 10 percent above $135,660, and The American College itself publishes survey claims that CLU designees see higher production and client retention than undesignated peers — figures the College reports but which are not independently verifiable government data. BLS counted 568,800 insurance sales agent jobs in 2024 and projects about 4 percent growth from 2024 to 2034, roughly as fast as the average for all occupations, with about 47,000 openings a year, almost all from replacement need. Underwriters, by contrast, are projected to decline 3 percent over the same decade. The honest framing is that the CLU is a human-capital investment: the designation does not change which occupation BLS classifies you in, it changes how you sell and advise within it, and the wage you benchmark is the role, not the certificate.',
    rows: [
      { label: 'Median annual wage, insurance sales agents', value: '$60,370', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Lowest 10 percent, insurance sales agents', value: 'Below $36,390', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Highest 10 percent, insurance sales agents', value: 'Above $135,660', note: 'BLS OOH, SOC 41-3021, May 2024' },
      { label: 'Median annual wage, insurance underwriters (adjacent role)', value: '$79,880', note: 'BLS OOH, SOC 13-2053, May 2024' },
      { label: 'Employment, insurance sales agents, 2024', value: '568,800 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: 'BLS projects 4 percent growth for insurance sales agents (SOC 41-3021) from 2024 to 2034 with about 47,000 openings a year; insurance underwriters (SOC 13-2053) are projected to decline 3 percent.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Insurance Sales Agents',
      url: 'https://www.bls.gov/ooh/sales/insurance-sales-agents.htm'
    }
  },
  passRate: {
    headline: 'The American College publishes no program pass rate — the published standard is a 70 percent passing grade on each course',
    summary:
      'The direct answer is that The American College of Financial Services does not publish pass rates for the CLU program or its courses, and no authoritative aggregate exists, so the honest headline is the grading standard instead. Each CLU course is pass/fail at a minimum final grade of 70 percent — a "C" — and a score of 60 to 69 percent is a "D", which does not count as passing. How the grade is calculated depends on the delivery format: in the Personal Pathway, a 14-week structured format, coursework and quizzes count toward the final grade alongside the final exam, giving candidates a cushion; in the Self-Study and Live Webinar formats, the final exam carries the entire grade, leaving no margin for a bad test day. The program structure itself changed on April 1, 2026: the CLU was streamlined from five core courses plus electives — eight exams in the old format, each a 100-question two-hour paper — down to four required courses, each with its own final exam. The four are HS 311 Fundamentals of Insurance Planning, HS 323 The Tools and Techniques of Life Insurance Planning, HS 330 Fundamentals of Estate Planning, and HS 331 Planning for Business Owners and Professionals. Exams are proctored, at a Prometric testing centre or through live remote proctoring, and a failed course can be retaken by purchasing a retake window. Because this is a course-anchored designation rather than a single high-stakes exam, the practical implication is that consistent performance across four courses matters more than one exam performance, and the self-study format is the riskiest route because a single exam determines the outcome.',
    source: {
      label: 'The American College - Chartered Life Underwriter (CLU) program',
      url: 'https://www.theamericancollege.edu/designations-degrees/CLU'
    },
    caveat:
      'The American College publishes no pass rate for the CLU program or its courses. What is published is the 70 percent passing grade per course and the delivery-format grading rules, which the narrative above covers instead.'
  },
  studyPlan: {
    summary:
      'The CLU is a course-anchored designation, so the plan is not "study for one exam" but "sequence four courses and pass each at 70 percent or higher". The current program, effective April 1, 2026, requires HS 311 Fundamentals of Insurance Planning, HS 323 The Tools and Techniques of Life Insurance Planning, HS 330 Fundamentals of Estate Planning, and HS 331 Planning for Business Owners and Professionals. The College advertises that experienced professionals — particularly those who already hold the CFP certification or the Chartered Financial Consultant (ChFC) designation — can finish in as little as two months, and that a four-month pace is realistic for everyone else. The plan below runs sixteen weeks at roughly 8-10 hours a week and assumes the Personal Pathway format, where coursework counts toward the final grade; if you choose Self-Study, add two weeks and be aware that the final exam carries the entire grade. The sensible order is HS 311 first as the foundation, then HS 323 for the life insurance product depth the designation is named for, then HS 330 for estate planning, and finally HS 331 for the business-owner content. Each course deserves three to four weeks of steady work rather than a cram, because the graded coursework in the Personal Pathway rewards consistent effort, and the final exam still requires you to be comfortable with the whole course. The three-year experience requirement runs in parallel — you can complete coursework before you hit the three-year mark, but the designation is conferred only once the experience clock is satisfied.',
    totalHours: '130-160 hours over 16 weeks (4 courses, ~32-40 hours each)',
    weeks: [
      {
        label: 'Weeks 1-4',
        focus: 'HS 311 - Fundamentals of Insurance Planning',
        tasks: [
          'Work the full course module by module: risk management principles, insurance mechanics, and evaluating risks across human capital, liability, property and financial wealth',
          'Complete every graded quiz and discussion requirement in the Personal Pathway so the coursework component banks toward the final grade',
          'Build a one-page summary of the core risk-management framework for final-exam review',
          'Take the practice assessments until you score 80 percent-plus before the final'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 5-8',
        focus: 'HS 323 - Tools and Techniques of Life Insurance Planning',
        tasks: [
          'Study individual life insurance products in depth: whole life, universal life, term, and how insurers operate, reserve and invest',
          'Learn how the products map to client needs — income replacement, estate liquidity, business continuity, key-person coverage',
          'Complete all graded coursework; this is the course the designation is named for, so it deserves the most depth',
          'Drill the product-comparison tables until you can match a client situation to the right policy type'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-12',
        focus: 'HS 330 - Fundamentals of Estate Planning',
        tasks: [
          'Master the estate and gift tax system: gross estate, deductions, the marital deduction, valuation, and transfers through wills and trusts',
          'Learn the basic transfer-of-assets-at-death framework and how life insurance death benefits interact with estate taxes',
          'Complete the graded coursework and work every case study',
          'Prepare for the final by explaining each estate-planning concept in plain language from memory'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 13-16',
        focus: 'HS 331 - Planning for Business Owners and Professionals',
        tasks: [
          'Study buy-sell agreements, business succession, key-person and employee benefits, and the tax and legal side of business structures',
          'Learn how business structures affect tax outcomes and insurance needs — the connective tissue between HS 330 and this course',
          'Complete the graded coursework and the case studies',
          'Finish the program by revisiting your one-page summaries for all four courses before the final exam'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'CFP or ChFC holder', detail: 'The College counts prior designations: CFP professionals and ChFC designees may complete the CLU with only two courses, HS 323 and HS 331, saving roughly two months and about $1,200.' },
      { label: 'Self-study route', detail: 'Add two weeks per course and plan to be exam-ready with no coursework cushion, because the final exam carries the entire grade in this format.' },
      { label: 'Early-career candidate', detail: 'Complete the coursework while building the three years of experience required to use the designation; the courses can be finished first, but the designation is conferred only once the experience clock is satisfied.' }
    ]
  },
  prepStrategies: {
    summary:
      'The strategy that reliably gets candidates through the CLU is "choose the Personal Pathway, work the coursework steadily, and treat each final exam as the capstone of the course rather than a standalone test", because in the Personal Pathway the graded coursework cushions the final grade and the exam still demands command of the whole course. Second, sequence the courses deliberately: HS 311 builds the risk-management foundation, HS 323 gives the life insurance depth, HS 330 the estate framework, and HS 331 the business-owner application, and each course assumes the one before it. Third, build one-page summaries per course and revisit them before each final — the four courses are cumulative in practice, and the estate and business content reappears in later finals. Fourth, in the self-study or live webinar formats, plan to be exam-ready with no coursework cushion, because the final exam carries the entire grade and a bad test day is unrecoverable. Fifth, use the College\u2019s own practice assessments and course materials rather than third-party question banks, because the exams are written from the curriculum and the curriculum is the syllabus. Finally, track the three-year experience requirement in parallel with coursework, and confirm the recertification obligation — annual participation in the Professional Recertification Program — so the designation stays current after it is conferred.',
    items: [
      {
        title: 'Choose the Personal Pathway when possible',
        detail: 'In the 14-week Personal Pathway, quizzes, discussions and coursework count toward the final grade, giving you a cushion. In Self-Study and Live Webinar, the final exam carries the entire grade.'
      },
      {
        title: 'Sequence the four courses deliberately',
        detail: 'HS 311 to HS 323 to HS 330 to HS 331. Each course builds on the one before it, and the estate and business content reappears in later finals.'
      },
      {
        title: 'Keep one-page summaries per course',
        detail: 'The four courses are cumulative in practice. A one-page framework per course, revisited before each final, is the highest-yield review tool.'
      },
      {
        title: 'Plan for a no-cushion format honestly',
        detail: 'If you choose Self-Study or Live Webinar, the final exam is your entire grade — add review weeks and rehearse the final format before sitting.'
      },
      {
        title: 'Use the College\u2019s own materials',
        detail: 'Exams are written from the curriculum. Work the College\u2019s practice assessments and course materials before turning to any third-party question bank.'
      },
      {
        title: 'Track experience and recertification in parallel',
        detail: 'You need three years of financial-planning experience to use the designation, and annual participation in the Professional Recertification Program to maintain it.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'The CLU buying decision is simpler than for vendor exams because The American College is the sole curriculum owner: the courses themselves, at $985 each or $3,395 for the four-course package, are the primary cost, and the package saves roughly $545 over buying courses individually. The College also sells a two-course package at $1,850 for CFP and ChFC holders who qualify for the shortened path. Everything else is support: the College\u2019s own practice assessments and course materials are included in the course purchase and should be used first, and the optional SPARK AI study assistant is built into the platform. Third-party study guides and question banks exist but are supplementary, because the exams are written from the curriculum and the curriculum is the syllabus. The retake cost is a separate line item: a failed course in the Personal Pathway allows a four-week retake window purchased for a fee, so a realistic budget should include the possibility of one retake. Textbooks and reference materials are bundled rather than separate purchases. A defensible total budget is $3,400 to $4,500 including the four-course package and a possible retake, or roughly $2,000 for CFP and ChFC holders on the two-course path. Prices below are current as of mid-2026 and change at the College\u2019s discretion; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CLU four-course package (HS 311, 323, 330, 331)', values: ['$3,395 (vs $985 per course individually)', 'Online courses with final exams', 'The designation itself — buy the package to save ~$545'] },
      { label: 'Two-course package (HS 323, HS 331)', values: ['$1,850', 'Online courses with final exams', 'CFP and ChFC holders on the shortened path'] },
      { label: 'Single course', values: ['$985', 'Online course with final exam', 'Sequencing one course at a time'] },
      { label: 'College practice assessments and course materials', values: ['Included with each course', 'Built into the learning platform', 'Final-exam rehearsal aligned to the curriculum'] },
      { label: 'Retake window after a failed course', values: ['Retake fee per the College\u2019s schedule', 'Four-week window, Personal Pathway', 'Budget for one possible retake'] },
      { label: 'Third-party study guides and question banks', values: ['$30-$150', 'Print or online', 'Supplementary review — use the curriculum first'] }
    ],
    footnote:
      'Prices current as of mid-2026 from The American College\u2019s published tuition schedule and are subject to change. The College is the sole curriculum owner; we rank nothing by commission.'
  },
  commonMistakes: {
    summary:
      'The most common mistake on the CLU is studying for the designation as if it were one exam, when it is four course finals with a 70 percent passing grade each — candidates who cram one course then move on leave the cumulative estate and business content weak by the fourth final. The fix is to build one-page summaries per course and revisit them throughout. The second mistake is choosing the Self-Study format and treating it like the Personal Pathway; in self-study the final exam is the entire grade, and candidates who do not build in review weeks fail a course they could have passed. Third, candidates overlook the curriculum-anchored nature of the exams and lean on third-party question banks instead of the College\u2019s own practice assessments. Fourth, many candidates start coursework without confirming their three-year experience clock, then finish the courses and discover they cannot yet use the designation. Fifth, candidates ignore the recertification obligation — annual participation in the Professional Recertification Program — and let the designation lapse. Finally, CFP and ChFC holders sometimes complete the full four-course path out of habit when the College allows a two-course path, spending roughly $1,500 more than necessary.',
    items: [
      { mistake: 'Treating the CLU as one exam', fix: 'It is four course finals with a 70 percent passing grade each. Keep one-page summaries per course and revisit them before every final.' },
      { mistake: 'Choosing Self-Study without planning for it', fix: 'In Self-Study and Live Webinar the final exam carries the entire grade. Build in review weeks and rehearse the final format before sitting.' },
      { mistake: 'Leaning on third-party question banks', fix: 'Exams are written from the College\u2019s curriculum. Work the College\u2019s practice assessments and course materials first.' },
      { mistake: 'Ignoring the three-year experience requirement', fix: 'You need three years of financial-planning experience to use the designation. Track the clock from day one so coursework and experience finish together.' },
      { mistake: 'Letting the designation lapse after conferral', fix: 'The CLU requires annual participation in the Professional Recertification Program. Diary it at conferral, not after it lapses.' },
      { mistake: 'CFP and ChFC holders completing all four courses', fix: 'Holders of these designations can complete the CLU with two courses, HS 323 and HS 331, at $1,850 instead of $3,395.' }
    ]
  },
  questionTypes: {
    summary:
      'The CLU does not have a single exam paper with published question-type statistics — it is a program of four courses, each ending in a proctored final exam written from that course\u2019s curriculum. Historically, the course exams were 100-question, two-hour objective papers combining straight-answer, multiple-option and all-except item styles, and that is the shape the current course finals follow: objective questions that reward precise knowledge of the reading rather than applied scenarios alone. Grading is a minimum 70 percent per course, with the final exam carrying either the whole grade (self-study and live webinar) or a share of it (Personal Pathway). Because the exams are curriculum-anchored, the practical implication is that the highest-yield preparation is mastering the course materials themselves and the College\u2019s practice assessments, and that candidates should expect items drawn directly from the assigned reading, including the all-except format that penalises partial recall. The samples below are editor-written illustrations of the style of objective items used in the CLU course finals, written from the published course descriptions, not live exam items.',
    types: [
      { name: 'Straight-answer objective items', share: 'The core of each course final', detail: 'A direct question with one correct answer drawn from the course reading, testing precise recall of product, legal and tax content.' },
      { name: 'Multiple-option items', share: 'A regular share', detail: 'One best answer among four or five options, often with two plausible-sounding distractors from adjacent course content.' },
      { name: 'All-except items', share: 'A distinguishing style', detail: 'The item asks which option is NOT correct or which does NOT apply — the format that punishes partial recall and rewards complete frameworks.' }
    ],
    samples: [
      {
        prompt: 'Which statement about life insurance death benefits is most accurate?',
        options: [
          'A. Death benefits are generally excluded from a beneficiary\u2019s gross income under Internal Revenue Code Section 101',
          'B. Death benefits are always included in the insured\u2019s gross estate at full value',
          'C. Death benefits are taxable as ordinary income to the beneficiary in all cases',
          'D. Death benefits are never subject to estate tax under any circumstances'
        ],
        answer: 'A',
        explanation:
          'Amounts paid by reason of the insured\u2019s death are generally excluded from the beneficiary\u2019s gross income under Section 101, which is the foundation for much of the CLU planning curriculum. B is wrong because inclusion in the insured\u2019s gross estate depends on incidents of ownership, not automatic inclusion. C is wrong because the Section 101 exclusion applies in the normal case. D overstates the rule — proceeds can be drawn into the estate where the insured holds incidents of ownership.'
      },
      {
        prompt: 'In a buy-sell agreement funded with life insurance, which party is typically the owner and beneficiary of a policy on each owner?',
        options: [
          'A. The insured owner\u2019s spouse',
          'B. The other owner or owners (or the entity, in an entity-purchase arrangement)',
          'C. The insured owner personally',
          'D. The insurance company'
        ],
        answer: 'B',
        explanation:
          'In a funded buy-sell, the policy is typically owned and payable to the other owner (cross-purchase) or the entity (entity purchase) so the proceeds fund the purchase of the deceased owner\u2019s interest. A is wrong because the spouse is not typically the owner in a buy-sell funding arrangement. C is wrong because the insured personally owning the policy on their own life would not fund the purchase of their interest at death. D is wrong because the insurance company is the issuer, not the owner.'
      },
      {
        prompt: 'Which of the following is NOT a component of the federal estate tax framework as taught in the CLU estate-planning course?',
        options: [
          'A. The gross estate',
          'B. The marital deduction',
          'C. The unified credit',
          'D. The capital gains exclusion on all estate assets'
        ],
        answer: 'D',
        explanation:
          'The federal estate tax framework is built on the gross estate, deductions such as the marital deduction, and the unified credit. A capital gains exclusion that applies to all estate assets is not part of the estate tax framework — capital gains treatment is a separate income-tax concept. A, B and C are each components taught in the estate-planning course, which makes D the correct answer to the all-except item.'
      }
    ],
    note: 'Samples are editor-written illustrations of the objective item styles used in CLU course finals, based on the published course descriptions; they are not live exam items.'
  },
  examDay: {
    summary:
      'The CLU has no single exam day — it has four course-final exam days, one at the end of each course, proctored at a Prometric testing centre or through live remote proctoring, and each final is written from that course\u2019s curriculum. For the in-person option you need two forms of identification; for remote proctoring you need a webcam, a private room with a clear desk, and a quiet space, and you should run the system check before the appointment. Each final is time-limited — the historical course exams were two hours for 100 objective questions, and the current finals follow that format — so pace to about 72 seconds per item and flag uncertain answers rather than dwelling. Because the delivery format determines the stakes, the most important exam-day variable is which format you chose at registration: in self-study and live webinar the final is your entire grade, so there is no coursework cushion to fall back on and you should be at your most exam-ready; in the Personal Pathway a modest portion of the grade is already banked, but the final still requires command of the whole course. Results are available immediately upon completion for the objective finals, and a failed course can be retaken by purchasing a retake window. The afterwards matters as much as the pass: the designation is conferred only once you also satisfy the three-year experience requirement and agree to the Code of Ethics, and maintaining it requires annual participation in the Professional Recertification Program.',
    bring: [
      'Two forms of identification for a testing centre, per the College\u2019s requirements',
      'Appointment confirmation and your registration details',
      'For remote proctoring: a webcam, a private cleared room, and a system already tested on the machine you will use'
    ],
    leave: [
      'Phones, smartwatches and all electronics',
      'Notes, textbooks and study materials — the exams are closed-book',
      'Personal writing materials where centre policy requires; the centre provides what is permitted'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your delivery format (Personal Pathway vs self-study) and its grading stakes; in self-study the final is your entire grade.' },
      { time: 'The day before', detail: 'For remote proctoring, run the system check on the exact machine and network you will use; confirm the testing centre address if in person.' },
      { time: '30 minutes before', detail: 'Arrive for check-in and identification verification, or begin the remote check-in process.' },
      { time: 'During the final', detail: 'Work the objective items at roughly 72 seconds each; flag uncertain answers and return to them.' },
      { time: 'After submit', detail: 'Results are available immediately for the objective finals; a failed course can be retaken by purchasing a retake window.' }
    ],
    rules: [
      'Closed-book, proctored finals at a Prometric centre or through live remote proctoring',
      'Two forms of identification at a centre; webcam and private room for remote proctoring',
      'Minimum passing grade of 70 percent per course; 60-69 percent is a non-passing "D"',
      'In Self-Study and Live Webinar formats the final exam carries the entire course grade',
      'The designation is conferred only with three years of experience and the Code of Ethics agreement'
    ],
    afterwards:
      'On a pass, the course is banked and you move to the next one — the designation is earned only when all four courses are complete and the experience requirement is met. On a fail, purchase the retake window, review the course curriculum rather than re-cramming notes, and re-sit. Once conferred, maintain the designation through annual participation in the Professional Recertification Program and diary the requirement at conferral rather than at lapse.'
  }
};

export default data;
