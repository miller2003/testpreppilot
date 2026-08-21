// Depth content for: itil-4-foundation
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'IT service management & framework certifications desk',
    bio: 'This guide is compiled and maintained by our IT-service-management desk. ITIL 4 is owned by AXELOS and delivered through PeopleCert; exam structure, question formats, fees and renewal terms come from PeopleCert’s ITIL 4 Foundation page and the published syllabus. ITIL is revised on a multi-year cycle, and the launch of ITIL (Version 5) in early 2026 is the single most important version fact for anyone buying material now — we state plainly that ITIL 4 remains valid and available but is scheduled for sunset, and we name the replacement and its date. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, question types, fees and renewal terms were taken from PeopleCert’s ITIL 4 Foundation page and the published syllabus; the ITIL (Version 5) launch and ITIL 4 sunset date were checked against PeopleCert/AXELOS announcements.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$60,340 median for computer user support specialists (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "ITIL-certified professional" — ITIL is a framework for IT service management, not a job, and its practitioners work as service desk analysts, IT support staff, service delivery coordinators, and increasingly as managers and consultants who run IT as a service. BLS therefore classifies by job duties, and the closest official entry-point fit for the people who most often sit ITIL 4 Foundation is Computer User Support Specialists, SOC 15-1232 (part of the broader Computer Support Specialists group, 15-1230). We have chosen it deliberately: Foundation is explicitly an awareness-level certification aimed at anyone working in an IT organisation, not a senior role, so the support-specialist category is the honest labour-market anchor rather than a management occupation. That occupation had a May 2024 median wage of $60,340, with the lowest 10 percent under $38,780 and the highest 10 percent over $98,010. The broader Computer Support Specialists group (15-1230) counted 882,300 jobs in 2024 and is projected to decline about 3 percent by 2034, with roughly 50,500 openings a year from replacement need. The ITIL credential’s value here is practical rather than a salary lever on its own: it signals that a support or operations person understands the service-value language (incidents versus problems, the service desk, the value chain) used by the IT organisation they work in, which helps in internal mobility toward service-delivery and coordination roles. The limitation to state plainly is that BLS does not isolate ITIL holders, and the median covers all support specialists regardless of certification, so read the figure as the relevant labour-market level for the typical Foundation candidate, not as a measure of the certificate’s premium. More senior ITIL roles map to management occupations the BLS treats separately.',
    rows: [
      { label: 'Median annual wage, computer user support specialists', value: '$60,340', note: 'BLS OOH, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $98,010', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, computer support specialists (15-1230)', value: '882,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~50,500 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement' }
    ],
    growth: '-3% projected change 2024-34 (slight decline) for computer support specialists, ~50,500 replacement openings a year; the BLS figure covers all support specialists, not just ITIL holders, so treat it as the role’s labour-market level',
    source: {
      label: 'BLS Occupational Outlook Handbook — Computer Support Specialists',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'PeopleCert publishes no ITIL 4 Foundation pass rate',
    summary:
      'PeopleCert, which delivers ITIL 4 on behalf of AXELOS, does not publish a pass rate for ITIL 4 Foundation or for any ITIL module, and it never has. Unlike CFA Institute, which releases cohort pass rates by window, PeopleCert reports only a pass or fail outcome to the candidate, and the passing score (26 of 40, or 65 percent) is published while the cohort rate is not. We have therefore deliberately left any pass-rate figure out rather than repeating the unverified percentages that float around training forums. What is published and verifiable is the exam shape: 40 multiple-choice questions in 60 minutes (75 minutes for candidates whose first language differs from the exam language), closed book, with a published pass mark of 26 correct answers out of 40 (65 percent). The closed-book nature is the key difference from many IT certs — you cannot rely on looking anything up, so the Foundation syllabus must be memorised, not merely understood. The practical implication for a candidate is that, because the standard is fixed at 65 percent and the items are straightforward multiple choice drawn from a published syllabus, the exam is highly passable with disciplined recall; the risk is not difficulty but complacency and version confusion. The version caveat matters here more than for most exams: ITIL (Version 5) launched in early 2026, and PeopleCert has scheduled the ITIL 4 modules for sunset on 31 December 2027. ITIL 4 Foundation remains valid and available through that date and continues to serve as the prerequisite for Version 5, so a pass now is not wasted — but candidates buying material in 2026 must choose knowingly between the still-current ITIL 4 and the newer V5 track, and not mix the two syllabi.',
    source: {
      label: 'PeopleCert — ITIL 4 Foundation',
      url: 'https://www.peoplecert.org/itil-4-foundation'
    },
    caveat:
      'No ITIL 4 Foundation pass rate is published by PeopleCert, by AXELOS, or by the accrediting body. We have deliberately left the pass-rate table empty. What is published and verifiable is the 40-question / 60-minute / 26-of-40 (65%) closed-book structure. The ITIL (Version 5) launch in early 2026 and the ITIL 4 sunset date of 31 December 2027 are separate version facts candidates must track.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'ITIL 4 Foundation is an awareness-level exam: it tests whether you understand the ITIL 4 service-value system, the four dimensions, the service value chain, the guiding principles, and the 34 practices at a conceptual level — not whether you can implement them. It is short and closed book: 40 multiple-choice questions in 60 minutes (75 for non-native speakers of the exam language), and you need 26 correct (65 percent) to pass. The syllabus is published and stable, so the study plan is about memorisation and concept discrimination rather than hands-on labs. The plan below runs about three to four weeks at 6-8 hours a week (roughly 20-30 hours total), which matches the commonly cited prep time for Foundation; many accelerated learners sit it in a single intensive week. The single most important planning fact in 2026 is the version choice. ITIL (Version 5) launched in early 2026, and PeopleCert has scheduled the ITIL 4 modules for sunset on 31 December 2027. ITIL 4 Foundation remains valid and bookable through that date and continues to act as the prerequisite for the Version 5 track, so studying ITIL 4 now is not wasted — but you must buy ITIL 4 material knowingly and not accidentally mix in V5 content, because the two syllabi differ. The biggest scheduling error is treating Foundation as trivial and under-preparing the terminology: the distractors are deliberately drawn from near-synonyms (incident vs problem, event vs alert, warranty vs utility), and candidates who skim the language fail on recognition, not comprehension. Build the plan around active recall of definitions and the value-chain flow, and rehearse the practice names until they are instant.',
    totalHours: '20-30 hours (commonly cited for Foundation)',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Service value system & guiding principles',
        tasks: [
          'The ITIL service value system (SVS) as a whole and how its components connect',
          'The four dimensions of service management (organisations/people, information/technology, partners/suppliers, value streams/processes)',
          'The seven guiding principles — focus on value, start where you are, progress iteratively, collaborate, think holistically, keep it simple, optimise/automate',
          'Key definitions: service, value, outcomes, costs, risks, utility and warranty'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Service value chain & general management practices',
        tasks: [
          'The six value-chain activities: plan, improve, engage, design/deliver, obtain/build, and the relationships between them',
          'The 34 practices at a recognition level — know what each broadly covers',
          'The general management practices: most heavily tested, including Continual Improvement, Change Enablement, Incident, Problem, Service Request Management',
          'Incident vs Problem vs Service Request vs Event — drill the distinctions until they are automatic'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Remaining practices & terminology discrimination',
        tasks: [
          'Service management practices (e.g. Service Desk, Capacity/Availability, IT Asset, Knowledge) and technical management practices (e.g. Deployment, Infrastructure, Software Development)',
          'Build a one-page glossary of near-synonyms the exam confuses',
          'Practise free-recall: cover the definition and name the term, and vice versa',
          'Confirm your exam version (ITIL 4) and that your voucher matches it, not V5'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Mock exams & gap closing',
        tasks: [
          'Two or three timed 40-question mocks at 60 minutes (or 75 if you qualify for the language accommodation)',
          'Log every term you hesitated on as a miss, even if you got it right',
          'Re-read the guiding principles and value chain daily — they anchor many scenario items',
          'A quiet day before the exam; Foundation rewards rested recall over last-minute cramming'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'Accelerated / bootcamp learner', detail: 'Five to seven days of full-time study (25-30 hrs). Foundation is short and conceptual; an intensive week with daily mocks is enough if you commit to active recall rather than passive reading.' },
      { label: 'Working in an IT service desk already', detail: 'Two to three weeks at 6 hrs/week. The concepts are familiar from the job; what you lack is the formal terminology and the value-chain map, so protect the glossary and the practice names rather than the big ideas.' },
      { label: 'Choosing between ITIL 4 and Version 5 in 2026', detail: 'If you need the credential soon, ITIL 4 Foundation is valid and bookable through 31 December 2027 and remains the V5 prerequisite — sit ITIL 4. If you are starting a longer multi-module track and can wait, evaluate the V5 track deliberately. Either way, do not study a mixed syllabus; pick one version’s material and stick to it.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'ITIL 4 Foundation rewards active recall of terminology more than any analytical skill, because the exam is closed book and the distractors are near-synonyms drawn from the syllabus. The candidate who can name the difference between an incident and a problem, or between utility and warranty, on sight will pass comfortably; the candidate who "understands the gist" will hesitate and run out of the 60 minutes. The strategies below are built around memorisation discipline and version clarity, which are the two things that actually move the result.',
    items: [
      {
        title: 'Build and rehearse a glossary of near-synonyms',
        detail: 'The exam’s favourite trap is confusing concepts that sound alike: incident vs problem, event vs alert, warranty vs utility, service request vs incident, change vs release. Write each pair on a card with a one-line distinction and free-recall both directions daily. This single habit defeats the majority of distractors, because most wrong answers are a plausible neighbouring term, not an absurd one.'
      },
      {
        title: 'Memorise the value chain and the seven principles cold',
        detail: 'The six value-chain activities and the seven guiding principles appear in scenario items that ask "which principle applies" or "which activity follows". You cannot look them up in a closed-book exam, so they must be instant. Draw the value-chain flow from memory and recite the principles until you can write them unprompted; many items are won or lost on this recall.'
      },
      {
        title: 'Use official or syllabus-aligned mocks only',
        detail: 'Because the syllabus is published and stable, good mocks are closely aligned to it. Avoid question banks that pad with ITIL v3 terminology (incident "priority" vs "urgency/impact" language differs) or, in 2026, that leak Version 5 content into an ITIL 4 voucher. Confirm the mock matches the ITIL 4 syllabus you are sitting; a mismatched bank teaches the wrong vocabulary.'
      },
      {
        title: 'Know your language accommodation before booking',
        detail: 'Non-native speakers of the exam language get 75 minutes instead of 60 for the same 40 questions. If you qualify, book accordingly and practise at 75 minutes; if you do not, practise strictly at 60. Candidates who rehearse at the wrong time limit either rush or dawdle on the day. The pass mark is 26/40 (65%) either way.'
      },
      {
        title: 'Choose your version deliberately in 2026',
        detail: 'ITIL (Version 5) launched in early 2026 and PeopleCert has scheduled ITIL 4 for sunset on 31 December 2027. ITIL 4 Foundation is still valid and bookable and remains the V5 prerequisite, so sitting it now is not wasted — but decide knowingly and use only ITIL 4 material. Mixing V5 syllabus content into an ITIL 4 voucher is the avoidable error of the year for this exam.'
      },
      {
        title: 'Rehearse the practice names at recognition level',
        detail: 'The 34 practices are tested by name and broad purpose, especially the general-management practices (Continual Improvement, Change Enablement, Incident, Problem, Service Request Management). You do not need implementation depth, but you must recognise each practice and what it covers. Flashcards of "practice name -> one-line purpose" are sufficient and high-yield.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The decisive buying decision in 2026 is version: ITIL 4 material versus ITIL (Version 5) material, because PeopleCert scheduled ITIL 4 for sunset on 31 December 2027 while V5 is the new track. ITIL 4 Foundation remains valid and bookable through that date and is still the prerequisite for V5, so either is defensible — but buy one version’s resources and use them, not a mix. The second decision is the PeopleCert voucher-plus-eBook bundle, which is effectively mandatory because PeopleCert bundles the official eBook with the voucher.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ITIL 4 Foundation exam voucher + eBook (PeopleCert)', values: ['Voucher ~$715-750 incl. mandatory official eBook', 'Online proctored or test centre', 'Required — PeopleCert bundles the eBook with the voucher'], },
      { label: 'PeopleCert Plus membership', values: ['~$129/year', 'Subscription', 'Annual renewal (20 CPD/yr) and member pricing on vouchers; worth it if you will sit more ITIL modules'], },
      { label: 'Accredited ITIL 4 Foundation course (ATP)', values: ['~$300-800 depending on provider', 'Self-paced or live online with mock exams', 'Structured path guaranteed aligned to the ITIL 4 syllabus'], },
      { label: 'Jason Dion / Dion Training ITIL 4 course (Udemy)', values: ['~$15-30 during Udemy sales', 'Video + practice exams', 'Low-cost entry; confirm it is ITIL 4, not v3 or V5'], },
      { label: 'Official AXELOS ITIL 4 Foundation book', values: ['~$40-60 retail', 'Print + eBook', 'The syllable source; pairs with the bundled PeopleCert eBook'], },
      { label: 'Free glossary / flashcard sets', values: ['Free', 'Web / app', 'Near-synonym drilling — the highest-yield free resource for a terminology exam'], } 
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. PeopleCert voucher pricing varies by region and promotion, and the eBook is bundled rather than optional. Udemy list prices are near-meaningless outside a sale. Confirm every resource is ITIL 4 (not v3, not Version 5) unless you have deliberately chosen the V5 track. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'ITIL 4 Foundation is often underestimated because it is conceptual and short, and that underestimation is the root of most failures. The exam is closed book with near-synonym distractors, so "I get the idea" is not the same as "I can name the term under a 60-minute clock". The mistakes below are the reliable failure modes, and the version one is specific to 2026.',
    items: [
      {
        mistake: 'Studying a mixed or wrong-version syllabus in 2026',
        fix: 'ITIL (Version 5) launched in early 2026 and PeopleCert scheduled ITIL 4 for sunset on 31 December 2027. ITIL 4 Foundation stays valid and bookable and remains the V5 prerequisite, so either track is fine — but use only ITIL 4 material for an ITIL 4 voucher. Mixing V5 content, or buying leftover v3 material, teaches vocabulary that does not match your exam.'
      },
      {
        mistake: 'Skimming terminology and failing on recognition',
        fix: 'The distractors are near-synonyms: incident vs problem, event vs alert, utility vs warranty, service request vs incident. Candidates who understand the gist but cannot name the exact term hesitate and lose the clock. Build a glossary and free-recall it both directions daily; this defeats most distractors.'
      },
      {
        mistake: 'Assuming the exam is open book',
        fix: 'ITIL 4 Foundation is closed book: 40 questions in 60 minutes (75 for eligible non-native speakers), no reference. Candidates who plan to "look it up" have no such option and run out of time. Memorise the value chain, the seven principles and the practice names; there is nothing to consult on the day.'
      },
      {
        mistake: 'Under-estimating prep because it is "just Foundation"',
        fix: 'The awareness-level label leads candidates to cram in two days and fail on terminology precision. Budget 20-30 hours with timed mocks. Foundation is passable but unforgiving of complacency, and a failed attempt still costs the full voucher plus the bundled eBook.'
      },
      {
        mistake: 'Forgetting the renewal / CPD requirement',
        fix: 'ITIL 4 Foundation is valid for three years and renewed via PeopleCert’s Continuing Professional Development scheme — 20 CPD points per year, commonly through a PeopleCert Plus membership (~$129/year). Candidates who ignore this find the credential lapsed when they need it. Diary the renewal the week you pass.'
      },
      {
        mistake: 'Practising at the wrong time limit',
        fix: 'If you qualify for the 75-minute language accommodation, book and rehearse at 75; otherwise rehearse strictly at 60. Candidates who rehearse at the wrong limit either rush or dawdle on the day, and the pass mark (26/40, 65%) is unchanged either way.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'ITIL 4 Foundation is a single short, closed-book, multiple-choice exam: 40 questions in 60 minutes (75 minutes for candidates whose first language is not the exam language), and you need 26 correct answers out of 40 — a published 65 percent pass mark. There is no separate practical or essay component at Foundation. PeopleCert uses several item styles drawn from its item-writing guidance: classical multiple choice (one correct answer from four), negative-choice (select the incorrect statement), "missing word" (complete a sentence from the syllabus), and "list" items (put options in the correct order or match them). All are scored as straightforward right/wrong; there is no partial credit and the exam is closed book, so recall is everything. The syllabus is published and stable, which means good mocks align closely to it and the distractors are predictable — they are neighbouring terms, not trick questions. The practical pacing implication is simple: with 40 items in 60 minutes you have 90 seconds each, but most items are quick terminology recognition, so a candidate who has memorised the glossary finishes with time to spare, while one who hesitates on every near-synonym runs short. Because the standard is a fixed 65 percent and PeopleCert publishes no pass rate, your preparation competes with the syllabus, not a cohort. The 2026 version caveat still applies: these item styles describe ITIL 4 Foundation; the newer ITIL (Version 5) track uses a different exam (reported around 40 questions, 60 minutes, 65 percent) and a different syllabus, so do not assume V5 item wording matches ITIL 4 when you sit the Foundation paper.',
    types: [
      { name: 'Classical multiple choice', share: 'The majority of items', detail: 'One correct answer from four options, testing a definition or concept from the published syllabus. Distractors are near-synonyms (incident vs problem, utility vs warranty).' },
      { name: 'Negative-choice ("which is NOT...")', share: 'A regular minority', detail: 'Asks you to identify the incorrect statement. Easy to misread under time pressure; the skill is the same terminology recall, inverted.' },
      { name: 'Missing word', share: 'A regular minority', detail: 'A sentence from the syllabus with one term omitted; select the correct term. Rewards verbatim familiarity with the official wording.' },
      { name: 'List / ordering', share: 'Occasional', detail: 'Place items in the correct sequence (e.g. value-chain activities) or match terms to definitions. Tests the structure, not just isolated facts.' }
    ],
    samples: [
      {
        prompt: 'Which ITIL concept is defined as the assurance that a service will meet agreed requirements, concerning how the service performs (not what it does)?',
        options: [
          'A. Utility',
          'B. Warranty',
          'C. Outcome',
          'D. Service request'
        ],
        answer: 'B',
        explanation: 'Warranty is the assurance that a service will meet agreed requirements and is about how the service performs (fitness for use) — availability, capacity, security, continuity. Utility is what the service does (fitness for purpose), so A is the neighbouring term and the classic trap. C (outcome) is the result for a stakeholder, and D (service request) is a user’s request for a standard service action. This is exactly the utility-versus-warranty distinction the exam tests.'
      },
      {
        prompt: 'A user reports that a service is unavailable, and the cause is a failed configuration change made earlier that day. Once the service is restored, which ITIL practice should be used to identify and address the underlying cause so it does not recur?',
        options: [
          'A. Incident Management',
          'B. Problem Management',
          'C. Service Request Management',
          'D. Event Management'
        ],
        answer: 'B',
        explanation: 'Problem Management is the practice for identifying the underlying cause of one or more incidents and preventing recurrence — exactly the "root cause so it does not recur" wording. A (Incident Management) restores service but does not address root cause. C handles standard user requests, and D deals with detected events/notifications, not root-cause analysis. The incident-versus-problem split is the most-tested distinction in the syllabus.'
      },
      {
        prompt: 'Which of the following is NOT one of the seven ITIL guiding principles?',
        options: [
          'A. Focus on value',
          'B. Start where you are',
          'C. Maximise documentation',
          'D. Keep it simple and practical'
        ],
        answer: 'C',
        explanation: 'The seven guiding principles are: focus on value, start where you are, progress iteratively with feedback, collaborate and promote visibility, think and work holistically, keep it simple and practical, and optimise and automate. "Maximise documentation" is not one of them — in fact "keep it simple and practical" points the opposite way. This is a negative-choice item testing verbatim familiarity with the principle list. A, B and D are all genuine principles.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published ITIL 4 Foundation syllabus, not live exam items. Item styles (classical, negative, missing word, list) follow PeopleCert’s item-writing guidance for ITIL 4. Do not assume these match the separate ITIL (Version 5) Foundation exam.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'ITIL 4 Foundation is delivered by PeopleCert either online with remote proctoring or at a test centre, as a single 40-question, 60-minute (or 75-minute) closed-book multiple-choice exam with a published pass mark of 26/40 (65 percent). The exam-day risks are few but specific. First, the closed-book rule: you may bring nothing to consult, so everything must be in memory — there is no noteboard strategy to lean on for terminology, only for the value-chain sketch if permitted. Second, the version: in 2026 you are sitting ITIL 4 Foundation (valid and bookable through 31 December 2027, and still the prerequisite for ITIL Version 5), so confirm at check-in that your voucher is the ITIL 4 paper and not a V5 booking if you prepared for ITIL 4. Third, the ID and name must match your PeopleCert account exactly, or you lose the seat. You receive a result on screen at the centre (and by email), with a pass/fail and your score; PeopleCert does not publish a pass rate. Because the standard is a fixed 65 percent and the items are straightforward recall, the day is mostly about rested terminology recall and steady pacing — read each item once, eliminate the near-synonym distractors, and keep moving, because the clock (not difficulty) is the only pressure.',
    bring: [
      'One government-issued photo ID whose name matches your PeopleCert account exactly',
      'Your PeopleCert exam booking confirmation',
      'For online proctoring: a phone for check-in, a clear desk, and a private room with a door',
      'For online proctoring: webcam, microphone and a connection already system-tested on the exact machine',
      'A layer you can remove; centre temperature is not under your control'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — away from the desk for both formats',
      'All notes, the bundled eBook, and any printed ITIL reference — the exam is closed book',
      'Your own paper and pens unless the centre issues an erasable noteboard',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors (unplugged and turned away for online) and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your PeopleCert account exactly. Confirm your voucher is ITIL 4 Foundation (not V5) if that is what you studied. Rehearse the glossary one last time.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. Light recall only — value chain, seven principles, practice names.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in (photograph of face, ID, and the room).' },
      { time: 'Check-in', detail: 'ID verification, photograph, locker for personal items. Seated; the exam interface loads with a short tutorial.' },
      { time: '0-2 min', detail: 'If a noteboard is issued, sketch the value chain and the seven principles. Otherwise, settle and begin; the clock is 60 min (or 75 if you qualified for the language accommodation).' },
      { time: 'First 40 min', detail: 'Work the 40 items at a steady tempo. Eliminate near-synonym distractors; flag unsure items rather than stalling. Most items are quick recognition.' },
      { time: 'Final 15-20 min', detail: 'Return to flagged items, then review. You need 26/40 (65%); submit rather than letting the clock expire.' },
      { time: 'On submission', detail: 'Pass/fail and score appear on screen (and by email). Save the result; PeopleCert does not publish a cohort pass rate.' }
    ],
    rules: [
      'The exam is closed book: 40 multiple-choice questions, 60 minutes (75 for eligible non-native speakers).',
      'Pass mark is published: 26 of 40 correct (65 percent).',
      'ID name must match your PeopleCert account exactly or you will be denied the seat.',
      'Item styles include classical, negative-choice, missing word and list/ordering; all are right/wrong, no partial credit.',
      'PeopleCert publishes no pass rate; your preparation competes with the syllabus, not a cohort.',
      'ITIL 4 Foundation remains valid and bookable through 31 December 2027 and is the prerequisite for ITIL Version 5 — confirm you are sitting the version you studied.',
      'Renewal requires 20 CPD points per year for three years, commonly via PeopleCert Plus (~$129/year).'
    ],
    afterwards:
      'Your pass/fail and score appear on screen at the centre and by email from PeopleCert; there is no published pass rate, so your own mock trend is the better preparation check. On a pass, the credential is valid for three years and renewed via PeopleCert’s CPD scheme — 20 CPD points per year, typically through a PeopleCert Plus membership (~$129/year) — so diary the renewal the week you pass rather than discovering a lapse later. Importantly for 2026 candidates: ITIL 4 Foundation stays valid and bookable through 31 December 2027 and continues to serve as the prerequisite for the ITIL (Version 5) track, so a pass now is not wasted even if you later move to V5. On a fail, the exam is short and the gap is almost always terminology recall, not comprehension — re-drill the glossary of near-synonyms (incident/problem, utility/warranty, event/alert, service request/incident) and the value chain, then re-sit; the failed attempt still cost the full voucher plus the bundled eBook, so a clean first pass is also the cheap one. Whatever version you sat, protect the renewal clock immediately on a pass, and if you are deliberating between ITIL 4 and Version 5, remember the two syllabi differ and should not be mixed in one study plan.'
  }
};

export default data;
