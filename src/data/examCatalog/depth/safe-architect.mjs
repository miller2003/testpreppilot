// Depth content for: safe-architect
// Sources: support.scaledagile.com Exam Study Guide ARCH (6.0) — SAFe for Architects
// (45 questions, 90 minutes, passing score 71% = 32/45, web-based closed book, retake fee
// $50, first attempt included in course fee), Scaled Agile renewal FAQs (certifications
// valid one year; practitioner-level renewal $100/year), bls.gov Occupational Outlook
// Handbook (May 2024 wage data). All facts checked 2026-08-05.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor\u2019s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor\u2019s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$133,080 median for software developers (BLS, May 2024) — the closest occupation to the architecture-adjacent roles SAFe Architects work in',
    summary:
      'The salary answer for the SAFe Architect certification is $133,080, the May 2024 median for Software Developers (SOC 15-1252), the closest Bureau of Labor Statistics occupation to the enterprise and systems architecture work this certification covers — and the caveats matter, because BLS has no occupation called enterprise architect and the people earning this credential sit at the technical leadership end of software and IT delivery. The honest framing is that SAFe Architect certifies the role of system, solution and enterprise architects inside a Scaled Agile Framework enterprise — the person who aligns architecture with business value, enables continuous delivery and leads the technical side of a Lean-Agile transformation — so its salary impact flows through the software and IT occupations those roles inhabit, and Software Developers at $133,080 is the closest official anchor, with the lowest 10 percent below $79,850 and the highest 10 percent above $211,450. BLS projects software developer employment to grow 16 percent from 2024 to 2034, much faster than the all-occupations average, with roughly 115,000 openings a year, so the underlying field has a genuinely strong outlook. Where the credential shows its value most concretely is in enterprises running SAFe at scale: certified architects are part of the leadership trio — with the product manager and the Release Train Engineer — that guides Agile Release Trains, and organisations in regulated industries or large-scale transformation programmes increasingly look for SAFe credentials when filling technical leadership roles. The practical reading for a candidate is that the certification is an upskilling and signalling credential rather than a direct wage trigger: it documents that you can do architecture the way a scaled-agile enterprise expects — architectural runway, solution intent, non-functional requirements and continuous delivery — and it positions a senior developer or architect to move into enterprise architecture roles where compensation runs above the developer median.',
    rows: [
      { label: 'Median annual wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to the architecture and technical-leadership roles SAFe Architects work in.' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — computer network architects (SOC 15-1241)', value: '$130,390', note: 'BLS OOH, May 2024. Adjacent architecture-focused occupation.' },
      { label: 'Employment, 2024 / projected change (SOC 15-1252)', value: '1,693,800 jobs / +16% (2024-34)', note: 'BLS OOH; roughly 115,000 openings a year' }
    ],
    growth: '+16% projected change 2024-34 for software developers (SOC 15-1252, BLS OOH), with roughly 115,000 openings a year; SAFe architecture skills track this growth inside enterprises scaling agile delivery',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Scaled Agile publishes no pass rate for the SAFe Architect exam — but it does publish the passing score: 32 of 45 questions (71%)',
    summary:
      'Scaled Agile does not publish pass-rate statistics for the SAFe Architect exam, and the pass percentages attached to the ARCH 6.0 certification on blogs and training-provider pages are anecdote or marketing rather than official data. What Scaled Agile does publish — on the official Exam Study Guide for ARCH 6.0 — is the passing score and the format, and those are the numbers that matter for planning. The exam is 45 questions in 90 minutes, delivered web-based in a single browser, closed book, and you need 32 correct answers, which Scaled Agile expresses as a 71 percent passing score. Like the other SAFe exams, this is a plain percentage threshold rather than a scaled score, so the arithmetic is direct: 32 of 45 means missing more than 13 questions fails the exam, and at 90 minutes that is exactly two minutes per question on average. The structural facts that accompany the published threshold matter more than any rumoured pass rate. First, the exam is only accessible after you complete the official three-day SAFe for Architects course; the first attempt is included in the course registration fee when taken within 60 days of course completion, and each retake costs $50 with a wait structure — the first retake is available immediately, the second 10 days after that, and the third 30 days after that. Second, the exam is closed book with no outside assistance, and unanswered questions are marked incorrect, so leaving a blank is never an advantage. Third, the certification is valid for one year and renews through the SAFe Studio platform, with practitioner-level renewal running about $100 a year. The exam itself is domain-weighted heavily toward Architecture with Business Value at 31-35 percent and PI Execution at 34-38 percent, which is worth knowing before you allocate study time.',
    source: {
      label: 'Scaled Agile — Exam Study Guide: ARCH (6.0) SAFe for Architects',
      url: 'https://support.scaledagile.com/s/article/Exam-Details-SAFe-for-Architects-SAFe-Architect-ARCH-6-0'
    },
    caveat:
      'No pass rate is published by Scaled Agile for the SAFe Architect exam; treat every pass percentage you see outside the official exam study guide as unverified. What is published and verifiable: 45 questions, 90 minutes, passing score of 32 of 45 (71%), web-based closed book, first attempt included in the course fee within 60 days, $50 retakes, one-year validity with a practitioner-level renewal fee of about $100.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the SAFe Architect certification is that the classroom is the syllabus, just as it is for the other SAFe credentials: Scaled Agile requires you to attend the three-day SAFe for Architects course to gain access to the exam, so the plan below runs around 50 to 70 hours of total effort, of which roughly 24 hours is the course itself and the rest is deliberate exam preparation against the published study guide. The ARCH 6.0 exam is 45 questions in 90 minutes, you need 32 correct (71 percent), and it draws from five domain areas with the weights published in the official study guide: PI Execution at 34-38 percent — the heaviest area — Architecture with Business Value at 31-35 percent, Leading during a Lean-Agile Transformation at 11-15 percent, DevOps and Release on Demand at 9-13 percent, and Agile Architecture and SAFe at 5-7 percent. Note what the weights tell you: more than two-thirds of the paper is PI Execution and Architecture with Business Value, so a candidate who studies all five domains evenly underinvests in the two that carry the exam. The plan below therefore uses the course materials and the practice test on the SAFe Community Platform as the core, then drills the two heavy domains first, works the transformation and DevOps material, and leaves the lightest domain — Agile Architecture and SAFe fundamentals — for last. The practice test is unlimited and mirrors the real exam\u2019s question count, difficulty and timebox, so a passing practice score is a strong readiness signal; run at least two full timed attempts before booking, and book within the 60-day window so the first attempt is included in the course fee.',
    totalHours: '50-70 hours including the 3-day course',
    weeks: [
      {
        label: 'Before the course',
        focus: 'Orientation and reading',
        tasks: [
          'Read the ARCH 6.0 study guide and the candidate agreement so you know the exam format and rules before the classroom days',
          'Review the SAFe principles and the role of the architect versus the product manager and Release Train Engineer',
          'If you can, take the practice test once cold to see the format'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Course days 1-3',
        focus: 'The required 3-day SAFe for Architects course',
        tasks: [
          'Attend all three days — attendance is required to qualify for the exam',
          'Work the in-class exercises on architectural runway, solution intent, non-functional requirements and continuous delivery',
          'Download the course materials and study guide from the SAFe Community Platform for post-course revision',
          'Schedule your exam for within 60 days so the first attempt is included in the course fee'
        ],
        hours: '24 hrs (course)'
      },
      {
        label: 'Week 1 after the course',
        focus: 'PI Execution (34-38%)',
        tasks: [
          'Drill the heaviest domain: preparing for PI Planning, contributing to it, and guiding architecture through the event',
          'Cover Management Review, Problem-Solving and post-PI planning from the architect\u2019s seat',
          'Learn how architecture supports continuous delivery through iterations and system and solution demos',
          'Take the practice test once and log which domains you miss'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 2 after the course',
        focus: 'Architecture with Business Value (31-35%)',
        tasks: [
          'Drill how Strategic Themes, the Portfolio Canvas and Portfolio Vision influence architecture',
          'Cover value streams, ART and Solution Train delivery, and aligning architecture to enterprise strategy',
          'Learn the enabler epic and portfolio kanban flow, solution intent and NFR management',
          'Take the practice test a second time and chase the two weakest domains'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Transformation, DevOps and full rehearsal',
        tasks: [
          'Drill Leading during a Lean-Agile Transformation (11-15%) and DevOps and Release on Demand (9-13%)',
          'Learn how to lead the transition to agile architecture and build an action plan',
          'Two full 90-minute practice attempts, scored to the 32-of-45 pass mark',
          'Confirm the exam booking within the 60-day window and the platform access works'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'Experienced system or solution architect in a SAFe shop', detail: 'Compress to 30-40 hours. The concepts are familiar from your day job; spend the time on the published vocabulary and the two heavy domains, and confirm you can articulate the architect\u2019s role in PI Planning precisely.' },
      { label: 'Senior developer moving into architecture', detail: 'Extend to 70-80 hours and read the SAFe principles before the course, so the classroom is revision rather than first exposure to the framework.' },
      { label: 'Employer funds the course', detail: 'Use the free-attempt window deliberately: book the exam in weeks 3-4 rather than the final week, leaving room for a $50 retake if you fall short, and keep the unlimited practice test as the readiness gate.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move a SAFe Architect score are the ones that convert course content into exam-style reasoning, because the exam asks what an architect should do in a described enterprise situation, and the winning preparation is practising that decision rather than re-reading the slides. The single highest-yield strategy is to make the official practice test the centre of preparation: it mirrors the real exam\u2019s 45 questions, 90 minutes and difficulty, it is unlimited, and it is the most accurate readiness signal available — take it cold before the course, then after each study week, and chase the domains it shows as weak. Second, study the domain weights as an allocation map rather than trivia: PI Execution at 34-38 percent and Architecture with Business Value at 31-35 percent together are more than two-thirds of the paper, so they deserve roughly seven times the hours of Agile Architecture and SAFe at 5-7 percent; candidates who spread effort evenly across the five domains underinvest in the two that carry the exam. Third, rehearse the role-clarity items deliberately, because the exam leans on the architect\u2019s position in the leadership trio and on what the architect owns versus what the product manager and Release Train Engineer own — the boundary questions are where experienced practitioners blur the lines. Fourth, practise the PI Planning narrative as a sequence you can narrate, since the heaviest domain is framed around the event: how an architect prepares for PI Planning, contributes during it, and guides architecture through execution. Fifth, rehearse the scenario items in writing — for each practice question you miss, write the reasoning the correct answer uses, because the exam rewards the framework vocabulary — architectural runway, solution intent, non-functional requirements, enabler epics — used correctly in context.',
    items: [
      {
        title: 'Make the official practice test the centre of your prep',
        detail: 'It mirrors the real exam\u2019s 45 questions, 90 minutes and difficulty, and it is unlimited. Take it cold before the course, then after each study week, and spend the following days only on the domains it shows as weak.'
      },
      {
        title: 'Allocate study hours by domain weight',
        detail: 'PI Execution (34-38%) and Architecture with Business Value (31-35%) together are more than two-thirds of the paper and deserve roughly seven times the hours of Agile Architecture and SAFe (5-7%). Weighting to the blueprint is a free score gain.'
      },
      {
        title: 'Drill the architect role boundaries',
        detail: 'The exam asks what the architect owns versus the product manager and Release Train Engineer. Practise stating the boundary precisely — architecture runway and NFRs belong to the architect; prioritisation and delivery belong to the PM and RTE.'
      },
      {
        title: 'Learn the PI Planning narrative as a sequence',
        detail: 'The heaviest domain is framed around the event. Be able to narrate how an architect prepares for PI Planning, contributes during it, and guides architecture through execution and the problem-solving session.'
      },
      {
        title: 'Rehearse scenario reasoning in writing',
        detail: 'For every practice question you miss, write out the reasoning the correct answer uses. The exam rewards the framework vocabulary — architectural runway, solution intent, enabler epics — used correctly in a described situation.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for the SAFe Architect certification is the same as the other SAFe credentials and different from most of the exams on this site: the exam is not sold separately, because Scaled Agile requires you to attend the three-day SAFe for Architects course, and the course fee — typically $700 to $1,200 depending on provider and format — includes the first exam attempt when taken within 60 days of course completion, plus one year of SAFe Community Platform access. That makes the real purchase decision the choice of training provider rather than the choice of study resource, and the comparison below treats the course as the anchor. The course itself is the only required resource and the source of the study materials, and the official practice test on the Community Platform is included and unlimited, so the base programme is the course plus its materials. The incremental spend most candidates consider is retakes at $50 each and the renewal fee of roughly $100 per year, both small relative to the course cost, so the rational strategy is to book the exam within the 60-day window to keep the first attempt free and leave room for a paid retake rather than treating the first attempt as a practice run. On the supplementary side, some providers bundle coaching or extra practice into the course fee, and those bundles are worth comparing across providers for candidates who struggle with the scenario format. Books on SAFe provide useful framework background beyond the course but are supplementary, not required, because the exam draws from the course materials and the study guide\u2019s reading list. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and format; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SAFe for Architects course (required)', values: ['~$700-1,200 by provider', 'Three-day instructor-led, in-person or virtual', 'Required for exam access; includes first attempt, materials and one year of platform access'] },
      { label: 'Official ARCH practice test (SAFe Community Platform)', values: ['Included with the course', 'Unlimited online test mirroring the exam format', 'The most accurate readiness signal — take it cold, then repeatedly'] },
      { label: 'ARCH study guide and course materials', values: ['Included with the course', 'Downloadable PDFs and reading list', 'The official scope map and the reading list the exam draws from'] },
      { label: 'Exam retakes', values: ['$50 each', 'Web-based, same format', 'Second and later attempts; book the first attempt within the 60-day window'] },
      { label: 'Annual renewal', values: ['~$100 per year', 'SAFe Studio renewal', 'Keeping the certification valid after its one-year term'] },
      { label: 'SAFe books (e.g. SAFe Distilled)', values: ['~$30-50', 'Print + eBook', 'Framework background beyond the course; useful for candidates new to SAFe'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; Scaled Agile course pricing varies by provider, region and format. The exam is not sold separately — the course is required for exam access. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistakes around the SAFe Architect certification are process errors rather than content gaps, and the first one is the most expensive: missing the 60-day window and paying a $50 retake fee for what should have been a free first attempt, because Scaled Agile includes the first attempt in the course fee only when the exam is taken within 60 days of course completion. The second is treating the course as sufficient and skipping the practice test, when the official practice test mirrors the real exam and is the single most accurate readiness signal available; candidates who sit the real exam cold after the classroom routinely find the scenario format harder than expected. The third is misreading the passing score as a scaled score and doing useless arithmetic, when the ARCH pass mark is a plain 32 of 45 questions (71 percent) — you can budget directly for 13 allowable misses. The fourth is leaving questions unanswered; unanswered questions are marked incorrect, so a guess is always better than a blank. The fifth is neglecting the domain weights and studying all five domains evenly, which underinvests in PI Execution at 34-38 percent and Architecture with Business Value at 31-35 percent — together more than two-thirds of the paper — and overinvests in Agile Architecture and SAFe at 5-7 percent. The sixth is blurring the architect role boundaries: the exam repeatedly asks what the architect owns versus the product manager and Release Train Engineer, and candidates who cannot state the boundary precisely drop marks on otherwise familiar material. The seventh is letting the certification lapse after the one-year term because renewal is a paid process; renewing in the SAFe Studio platform costs roughly $100 a year, and a lapsed credential cannot be listed. Finally, some candidates buy expensive third-party question banks when the official practice test, which is included, is the better-calibrated resource.',
    items: [
      {
        mistake: 'Missing the 60-day free-attempt window',
        fix: 'The first exam attempt is included in the course fee only if you sit within 60 days of course completion. Book the exam in weeks 3-4 after the course, not in the final week, and treat a $50 retake as a backstop, not a plan.'
      },
      {
        mistake: 'Treating the course as sufficient preparation',
        fix: 'Use the official practice test, which mirrors the real exam\u2019s 45 questions, 90 minutes and difficulty. Sit it cold, then repeatedly, and chase the domains it shows as weak — the scenario format is the part candidates underestimate.'
      },
      {
        mistake: 'Treating the pass mark as a scaled score',
        fix: 'The ARCH pass mark is 32 of 45 questions, a plain 71 percent. You can miss 13 questions, so budget the exam arithmetic directly instead of guessing at a scaled threshold.'
      },
      {
        mistake: 'Leaving questions unanswered',
        fix: 'Unanswered questions are marked incorrect on the ARCH exam. Never leave a blank; a guess carries no penalty and always beats an empty response.'
      },
      {
        mistake: 'Studying all five domains evenly',
        fix: 'PI Execution (34-38%) and Architecture with Business Value (31-35%) are more than two-thirds of the paper and deserve roughly seven times the hours of Agile Architecture and SAFe (5-7%). Weight your study to the published domain weights.'
      },
      {
        mistake: 'Blurring the architect role boundaries',
        fix: 'The exam asks what the architect owns versus the product manager and Release Train Engineer. Practise stating the boundary — architectural runway, solution intent and NFRs sit with the architect; prioritisation and delivery sit with the PM and RTE.'
      },
      {
        mistake: 'Letting the certification lapse after one year',
        fix: 'SAFe certifications are valid for one year and renew through the SAFe Studio platform for roughly $100. Set a reminder before expiry; a lapsed credential cannot be listed and renewal is far cheaper than re-taking the course.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The SAFe Architect 6.0 exam is 45 questions in 90 minutes, delivered web-based in a single browser, closed book with no outside assistance, and you need 32 correct answers to pass — a plain 71 percent threshold rather than a scaled score, which makes the pacing arithmetic direct: two minutes per question on average, with unanswered questions marked incorrect. The question formats are multiple choice with a single correct answer and multiple-select items that specify how many answers are required, consistent with the format used across the SAFe certification exams. The content draws from the five published domain areas, with the two heavy domains dominating: PI Execution at 34-38 percent and Architecture with Business Value at 31-35 percent together account for more than two-thirds of the paper, followed by Leading during a Lean-Agile Transformation at 11-15 percent, DevOps and Release on Demand at 9-13 percent, and Agile Architecture and SAFe at 5-7 percent. The distinguishing feature of the paper is that most items are scenario-based: a described enterprise situation — a PI Planning preparation problem, a non-functional requirement conflict, an architectural runway decision, a transformation leadership moment — followed by what the architect should do or decide next, and the answer usually hinges on applying the SAFe vocabulary and role definitions rather than on general architecture intuition. The practice test on the SAFe Community Platform mirrors the real exam\u2019s question count, difficulty and timebox, and because it is unlimited, a passing practice score is a strong readiness signal. The samples below are editor-written illustrations of the published format and domain areas, not live exam items, and candidates should remember that the exam rewards using the framework\u2019s terminology correctly in context.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Scenario-based items asking what an architect should do or decide in a described enterprise situation. Most are drawn from the two heavy domains, PI Execution and Architecture with Business Value.' },
      { name: 'Multiple select', share: 'A significant minority', detail: 'Items that specify how many answers are required — commonly two or three. All required answers must be selected; there is no partial credit.' },
      { name: 'Role-clarity and boundary items', share: 'Spread across all domains', detail: 'What the architect owns versus the product manager and Release Train Engineer, and how the architect engages in PI Planning. These reward precise role definitions.' },
      { name: 'Vocabulary and framework items', share: 'Concentrated in the lighter domains', detail: 'Terms and concepts — architectural runway, solution intent, enabler epics, non-functional requirements. These reward precise use of the SAFe terminology.' }
    ],
    samples: [
      {
        prompt: 'Before an upcoming PI Planning event, a system architect discovers that a major architectural initiative requires significantly more effort than the team estimates available. The solution must keep the business\u2019s committed value outcomes intact while allowing the architecture work to proceed. What should the architect do?',
        options: [
          'A. Add the architecture work as an enabler epic in the Portfolio Kanban and coordinate the necessary investment through the value stream',
          'B. Force the architectural work into the existing team capacity regardless of the impact on committed value',
          'C. Drop the architectural initiative until after the PI and hope capacity appears later',
          'D. Delegate the architectural decision to the Release Train Engineer'
        ],
        answer: 'A',
        explanation: 'Architecture work that needs coordination and investment above team capacity belongs in the portfolio as an enabler epic, which is how SAFe sequences large architectural initiatives alongside committed value outcomes — the enabler epic flows through the Portfolio Kanban and is funded and sequenced deliberately. A applies that mechanism and preserves the committed value outcomes by managing the trade-off at the portfolio level rather than inside a single team. B is the failure mode the blueprint warns against — the architecture work is not committed by force-feeding it into team capacity. C defers a strategic need indefinitely instead of managing it deliberately. D mislocates the decision: the architect, not the RTE, owns architectural guidance, while the RTE owns delivery. When the stem describes architecture work exceeding team capacity, the answer is the portfolio-level enabler mechanism.'
      },
      {
        prompt: 'A solution has conflicting non-functional requirements: one stakeholder requires sub-second response times for a new feature, while another requires the feature to run on infrastructure that historically cannot meet that latency. How should the architect resolve the conflict?',
        options: [
          'A. Treat the non-functional requirements as fixed constraints and design the architecture to meet both, documenting the trade-offs',
          'B. Ignore the sub-second requirement because the infrastructure constraint came first',
          'C. Accept the slower response and tell the first stakeholder it is not possible',
          'D. Leave the conflict unresolved until the Release Train Engineer raises it during PI Planning'
        ],
        answer: 'A',
        explanation: 'Non-functional requirements are architectural responsibilities, and resolving the conflict is the architect\u2019s job: the architect designs for both constraints where feasible, and where they genuinely conflict, documents the trade-off and brings the decision to the relevant business owners rather than silently picking one. A applies that — NFRs are managed as first-class architecture inputs, and the trade-off is surfaced deliberately. B and C resolve the conflict unilaterally in favour of one stakeholder without the documentation and escalation the blueprint requires. D defers an architectural decision to the delivery role, inverting the role boundaries. When the stem describes an NFR conflict, the answer is the one that treats NFRs as architecture inputs and manages the trade-off explicitly.'
      },
      {
        prompt: 'An enterprise is transforming to agile delivery, and the architecture team still works as a separate group that hands finished designs to development teams. How should the architect begin to lead the change?',
        options: [
          'A. Demonstrate Lean-Agile architecture behaviours — building architectural runway incrementally, collaborating with teams during PI Planning, and coaching rather than handing off',
          'B. Publish a complete enterprise architecture document and require teams to follow it',
          'C. Stop doing architecture entirely until the teams ask for it',
          'D. Keep the hand-off model but make the documents shorter'
        ],
        answer: 'A',
        explanation: 'Leading a Lean-Agile transformation as an architect means changing behaviour, not just documentation: architects build architectural runway incrementally, participate in PI Planning with the teams, and coach on emergent design rather than delivering finished designs. A is the behaviour change the transformation domain describes. B preserves the big-design-up-front model the transformation is meant to replace. C abdicates the architectural role entirely. D keeps the hand-off model and only changes the artefact length, which is cosmetic rather than transformational. When the stem describes an architecture team that needs to lead change, the answer is the one that changes the architect\u2019s working model rather than the format of its outputs.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The SAFe Architect exam is taken online, not at a test centre: Scaled Agile delivers it as a timed, closed-book, single-browser exam on the SAFe Community Platform, and the direct exam-day answer is 45 questions in 90 minutes with a passing score of 32 correct answers, which the platform calculates automatically the moment you submit. The environment is strict — the exam must run in a single browser with no outside assistance, no other tabs, no books, and unanswered questions are marked incorrect — so the practical preparation is technical as much as content-based: use a machine with a stable connection and a browser that behaves, close everything else before launching, and confirm your platform access is live in the days before rather than discovering a login problem on the day. Check the candidate agreement before you start, because it governs what is permitted and what invalidates an attempt. The pacing arithmetic is the same one used throughout this page: 45 questions in 90 minutes is exactly two minutes per question, and because you can miss 13 and still pass, the winning rhythm is a steady sweep that never leaves a question unanswered — with the two heavy domains carrying most of the marks, budget your time so the PI Execution and Architecture with Business Value items get their full two minutes and the lighter vocabulary items move faster. Plan to sit the exam within the 60-day window from course completion so the attempt is included in your course fee, and if you do not pass, the first retake is available immediately, the second 10 days later, and the third 30 days after that, each at $50. After the exam, your score and pass or fail are presented on the platform, and a pass makes you a Certified SAFe Architect with a one-year certification term.',
    bring: [
      'A stable internet connection and a desktop or laptop that has successfully accessed the SAFe Community Platform before',
      'A single browser session with no other tabs, extensions or tools running',
      'Your login credentials for the SAFe Community Platform, confirmed working in advance',
      'The course materials and study guide open in a separate app only if the exam rules for your attempt permit reference materials — check the candidate agreement, because the standard rules are closed book',
      'A quiet room with no one else present, since the exam is invigilated remotely'
    ],
    leave: [
      'Other browser tabs, instant messaging, email and any software that could flag as outside assistance',
      'Books and notes if your attempt is closed book, which is the standard rule',
      'A second screen with a second browser session',
      'Any attempt to copy or photograph exam content — the candidate agreement prohibits it and invalidates the attempt',
      'Relying on the 60-day window on the final day; technical issues on exam day do not extend it'
    ],
    timeline: [
      { time: 'During the course', detail: 'Confirm your exam eligibility and the 60-day free-attempt window; note the exact date the window closes.' },
      { time: 'A few days before', detail: 'Log into the SAFe Community Platform, open the practice test, and confirm your browser and connection handle the exam interface. This rehearsal prevents day-of login failures.' },
      { time: '30 minutes before', detail: 'Close all other applications and tabs, settle in a quiet room, and have the candidate agreement reviewed so you know the closed-book rules.' },
      { time: '0-45 minutes', detail: 'Work the first half of the exam at the steady pace of two minutes per question, answering every item as you go and moving faster on the lighter vocabulary items.' },
      { time: '45-90 minutes', detail: 'Continue the sweep; the PI Execution and Architecture with Business Value items deserve their full two minutes, and you can miss 13 of 45, so never leave a blank.' },
      { time: 'On submission', detail: 'The platform calculates your score immediately and shows pass or fail on screen.' }
    ],
    rules: [
      '45 questions in 90 minutes; passing score is 32 of 45 (71 percent).',
      'Web-based, single-browser, closed book with no outside assistance; the timer runs continuously once the exam starts.',
      'Unanswered questions are marked incorrect — never leave a blank.',
      'The first attempt is included in the course fee only if taken within 60 days of course completion; retakes cost $50 each.',
      'Retake waits: the first retake is available immediately, the second 10 days after that, and the third 30 days after that.',
      'The exam is delivered on the SAFe Community Platform; results are shown on the platform immediately on submission.',
      'A pass earns the Certified SAFe Architect credential, valid for one year and renewable for roughly $100 a year.'
    ],
    afterwards:
      'Your score and pass or fail are presented on the SAFe Community Platform immediately when you submit, and if you pass you can download the certificate and claim the digital badge to promote on LinkedIn and your CV. The certification is valid for one year, and renewal runs through the SAFe Studio platform for roughly $100 a year with no retake required — set a reminder before expiry, because a lapsed credential cannot be listed, and renewal is far cheaper than re-attending the course. If you fail, do not waste the retake structure: the first retake is available immediately, so you could theoretically re-sit the same day, but the $50 fee and the pattern of results make a deliberate week of practice-test drilling on the domains you missed the better use of the attempt. The official practice test is unlimited, so use it to reproduce the exam conditions — 45 questions in 90 minutes, scored to 32 — and only re-sit when you are consistently passing it, because a failed second attempt followed by 10- and 30-day waits stretches the process into months and the $50 fees into a habit.'
  }
};

export default data;
