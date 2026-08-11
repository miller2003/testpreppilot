const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Maritime safety & licensing desk',
    bio: 'Boating-safety course structure and state requirements come from NASBLA member-state pages and the U.S. Coast Guard, which are revised. Wage figures come from the BLS OEWS series named by code, with the most recent available OEWS release noted. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NASBLA-approved course model, state reciprocity, and USCG relevance against NASBLA and state boater-education pages; wages against BLS OEWS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Recreational boater education is a legal gate, not a job credential — but it is the entry requirement for maritime work where captains and mates earn a median of $92,456 (BLS OEWS, May 2025)',
    summary: 'The direct answer is that a NASBLA-approved boating safety course does not lead to a salary, because it is a recreational-safety credential most states require before you can operate a boat legally — no BLS occupation corresponds to holding the certificate. The honest salary story is the maritime career path the course sits at the front of: the BLS reports a median annual wage of $92,456 for captains, mates, and pilots of water vessels (SOC 53-5021) in the May 2025 OEWS release, with the highest 10 percent earning well above $170,000. That occupation almost always requires a U.S. Coast Guard license, which itself builds on documented boating experience, and many professional mariners begin exactly where this course sits — learning rules of the road, navigation basics, and safety fundamentals. The distinction matters: a NASBLA-approved course is not a substitute for USCG licensing, and it will not place you in an occupation by itself, but it is a genuine first step and in many states a prerequisite for the experience you will need later. For the majority of course-takers, the financial relevance is indirect — avoiding fines, unlocking boat ownership and rental eligibility, and in some states qualifying for insurance discounts — rather than a wage effect. BLS employment for the captain and mate occupation is essentially flat over the projection decade (little or no change, with annual openings driven almost entirely by replacement), so the maritime wage story is about a stable, well-paid niche rather than a booming field. The practical read: take the course for the legal and safety value it delivers, and treat it as the on-ramp if your real goal is the licensed-mariner path.',
    rows: [
      { label: 'Median annual wage, captains, mates & pilots of water vessels', value: '$92,456', note: 'BLS OEWS, May 2025 release (SOC 53-5021)' },
      { label: 'Highest 10 percent', value: '$170,643+', note: 'BLS OEWS, May 2025 release' },
      { label: 'Employment, 2024', value: '~41,000 jobs', note: 'BLS Employment Projections, SOC 53-5021' },
      { label: 'The course itself', value: 'No direct occupation', note: 'Recreational boater-education certificate, not a job credential' }
    ],
    growth: 'BLS projects little or no change (about 0.5%) for captains and mates from 2024 to 2034, with roughly 4,000 openings per year, almost all from replacement.',
    source: { label: 'BLS OEWS — Captains, Mates, and Pilots of Water Vessels (53-5021)', url: 'https://www.bls.gov/oes/current/oes535021.htm' }
  },
  passRate: {
    headline: 'Course completion, not a single pass rate: NASBLA-approved courses are graded by the provider, and states publish no unified national pass rate',
    summary: 'The core fact is that there is no national pass rate for NASBLA-approved boating safety courses, because the National Association of State Boating Law Administrators does not publish one and each state recognizes courses from many providers, each with its own quiz and final-exam design. What NASBLA actually does is approve courses against a shared set of learning objectives — the National Boating Education Standards — covering navigation rules, buoys, emergency procedures, PFDs, and legal responsibilities; each approved provider then administers its own assessment, typically an online final exam that most states require at roughly 70 to 80 percent to pass, with unlimited or limited retakes. The numbers that are published are the completion figures: states report hundreds of thousands of course completions per year nationally, and several states require the certificate for anyone born after a specific year before operating a powerboat. Because the assessment is provider-run and untimed or lightly timed, the realistic pass rate is very high — these are education courses, not licensing exams — and failing usually means reviewing the missed modules and retaking the quiz rather than a formal retest window. The practical preparation is therefore straightforward: complete the course modules actively, take notes on the rules-of-the-road and navigation-light sections where the questions cluster, and treat the final quiz as a comprehension check rather than a gate. If a provider advertises a "guaranteed pass" or an absurdly high cut score, treat that as a marketing signal to check that the course is genuinely on the NASBLA-approved list for your state before paying.',
    source: { label: 'NASBLA — National Boating Education Standards', url: 'https://www.nasbla.org/' },
    caveat: 'No unified national pass rate is published; each approved provider sets its own assessment and cut score.'
  },
  studyPlan: {
    summary: 'Plan for roughly four to ten hours of total course time — most approved providers allow you to complete the material in one sitting or across several sessions — and expect a final assessment of around 40 to 60 questions that most states require you to pass at about 75 to 80 percent. The syllabus is organized around the National Boating Education Standards and covers the same core blocks regardless of provider: vessel basics and terminology, navigation rules and right-of-way, aids to navigation (buoys and markers), required safety equipment, PFD and fire-extinguisher rules, emergency procedures including man-overboard and distress signaling, weather awareness, and state-specific legal requirements such as age, engine-size, and towing rules. The most efficient study order is to complete the modules in sequence the provider gives you, because later modules assume vocabulary from earlier ones, then use the provider\u2019s practice quiz to find weak areas before the final. The highest-yield sections to over-learn are navigation rules and buoy identification — they account for the largest share of exam questions across most providers and are the sections beginners most often confuse. If you are preparing for the course specifically to satisfy a state requirement, check your state\u2019s course list first, because reciprocity varies: many states accept any NASBLA-approved course, but a handful impose age or residency conditions, and a few states issue their own endorsement. Budget two short sessions rather than one long night: retention on the rules-of-the-road material measurably improves when you sleep between study and the final assessment.',
    totalHours: '4-10 hours total course time',
    weeks: [
      { label: 'Session 1', focus: 'Core modules', tasks: ['Complete vessel basics, terminology, and required equipment modules', 'Take notes on navigation rules and buoy system', 'Begin practice quiz'], hours: 3 },
      { label: 'Session 2', focus: 'Rules & state law + final', tasks: ['Re-drill navigation rules and emergency procedures', 'Review your state\u2019s specific requirements', 'Take the provider\u2019s final assessment'], hours: 3 },
      { label: 'Follow-up', focus: 'Certificate & reciprocity', tasks: ['Save/download the completion certificate', 'Confirm your state accepts the course', 'Note the certificate\u2019s validity (some states require renewal)'], hours: 1 }
    ],
    variants: [
      { label: 'Classroom-delivered courses', detail: 'Offered by the U.S. Coast Guard Auxiliary and local squadrons; often free or low-cost, with an in-person final.' },
      { label: 'Online approved courses', detail: 'Most common format; self-paced, typically $20-40, with an online proctored or open-book final.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that works for a NASBLA-approved course is "active note-taking on rules and buoys, then a practice-quiz pass before the final," and the single biggest error is treating it as a skim-and-click course. Because the final is comprehension-based, candidates who read passively and guess through practice questions miss the navigation-light and right-of-way items that dominate the exam. A second proven approach is to learn the buoy system as a visual set rather than a list — draw the red/red-striped and green/green-striped channel markers, memorise "red right returning," and practise applying it to a map — because these items are almost always diagram-based. Third, memorise the emergency-procedure order for man-overboard and distress signaling; questions on these appear across providers in slightly different wording, and the underlying sequence is stable. Fourth, pay attention to the state-specific add-on module if your state requires one; the national standards are the shared core, but state law questions (age, PWC rules, towing) are where local variation shows up on the exam. Fifth, use the provider\u2019s practice mode before the final even if it feels redundant — question sets are typically drawn from a larger bank, and the practice pass surfaces the exact vocabulary the final uses. Finally, save your certificate in two places and confirm the state\u2019s record-keeping: many states now link course completions electronically, but keeping your own copy avoids the awkward situation of being stopped without proof.',
    items: [
      { title: 'Learn buoys visually', detail: 'Draw and label the navigation marker system; most questions are diagram-based.' },
      { title: 'Drill rules of the road', detail: 'Right-of-way and navigation-light items account for the largest question share.' },
      { title: 'Memorise emergency sequences', detail: 'Man-overboard and distress procedures are asked in slightly different wording across providers.' },
      { title: 'Do the practice pass', detail: 'Provider practice quizzes surface the exact vocabulary the final uses.' },
      { title: 'Check state reciprocity', detail: 'Confirm your state accepts the course and whether a state add-on module is required.' }
    ]
  },
  resourceComparison: {
    summary: 'NASBLA-approved course pricing clusters in the $20 to $40 range for online providers, with free classroom options from the U.S. Coast Guard Auxiliary, and the official source of truth — the NASBLA course list — is free. The comparison below separates approved online providers, classroom courses, free official references, and state boater-education pages, with prices current to this review. The critical buying rule is to confirm a provider is on the NASBLA-approved list for your state before paying, because a cheap non-approved certificate is worthless for legal purposes.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NASBLA-approved online providers (e.g. BoatUS, BOATERexam, Boat-Ed)', values: ['~$30-40', 'Self-paced online course + final', 'The standard route for most boaters'] },
      { label: 'U.S. Coast Guard Auxiliary classroom courses', values: ['Free (suggested donation)', 'In-person classroom', 'Learners who prefer an instructor'] },
      { label: 'NASBLA course list', values: ['Free', 'Online directory', 'Verifying a course is approved in your state'] },
      { label: 'U.S. Coast Guard Boating Safety site', values: ['Free', 'Reference content', 'Reviewing federal requirements'] },
      { label: 'State boater-education pages', values: ['Free', 'State portal', 'State-specific age/law requirements and reciprocity'] }
    ],
    footnote: 'Prices approximate and dated to this review; always verify a provider is on the NASBLA-approved list for your state.'
  },
  commonMistakes: {
    summary: 'The most common error is paying for a course that is not NASBLA-approved for your state and discovering the certificate is invalid only after the purchase; the second is assuming the certificate is a job credential when it is a recreational-safety requirement. A third recurring mistake is memorising the rules without learning the buoy system visually, which costs the diagram-based questions that make up a large share of most finals. Candidates also routinely skip the state-specific module and then miss the state-law questions on the final, and many fail to keep a copy of their certificate, assuming the state has it on record. Finally, some boaters confuse NASBLA approval with a U.S. Coast Guard license and expect the course to cover professional licensing requirements it does not — the course is a legal gate for recreational operation, and professional mariner credentials are a separate, longer pathway.',
    items: [
      { mistake: 'Buying a non-approved course', fix: 'Check the NASBLA course list for your state before paying; invalid certificates are worthless.' },
      { mistake: 'Treating it as a job credential', fix: 'It is a legal gate for recreational operation; USCG licensing is a separate pathway.' },
      { mistake: 'Learning rules as lists, not visuals', fix: 'Draw the buoy system and practise diagram-based questions.' },
      { mistake: 'Skipping the state add-on module', fix: 'State-law questions appear on the final; complete the state module.' },
      { mistake: 'Not keeping the certificate', fix: 'Save two copies; states link completions but your own copy is your proof.' }
    ]
  },
  questionTypes: {
    summary: 'A typical NASBLA-approved course final contains roughly 40 to 60 multiple-choice questions drawn from the National Boating Education Standards, with the heaviest concentration on navigation rules, aids to navigation, and required safety equipment. Question formats include direct factual items (e.g. PFD requirements by vessel length), rule-application items (who has right-of-way in a crossing situation), and diagram-based items (identifying a channel marker). There are no written essays or practical skill stations on the online versions, though classroom courses may include a brief on-water or equipment demonstration component. The samples below are editor-written illustrations of the standard curriculum, not live exam items.',
    types: [
      { name: 'Navigation rules & right-of-way', share: '~25-30%', detail: 'Crossing, meeting, and overtaking situations; give-way and stand-on vessels.' },
      { name: 'Aids to navigation', share: '~15-20%', detail: 'Buoy shapes, colours, and lights; channel navigation.' },
      { name: 'Required equipment & PFDs', share: '~15%', detail: 'What must be carried by vessel length and type.' },
      { name: 'Emergency procedures', share: '~15%', detail: 'Man-overboard, distress signals, capsizing response.' },
      { name: 'State law & general safety', share: '~15-20%', detail: 'Age requirements, PWC rules, weather and environmental responsibility.' }
    ],
    samples: [
      {
        prompt: 'When two powerboats are crossing so that risk of collision exists, which vessel is the give-way vessel?',
        options: ['A. The vessel on the starboard side', 'B. The vessel on the port side', 'C. The faster vessel', 'D. The larger vessel'],
        answer: 'B',
        explanation: 'The vessel on the port side must give way; the vessel on the starboard side is the stand-on vessel.'
      },
      {
        prompt: 'What does a red-and-white striped buoy with a topmark indicate?',
        options: ['A. A channel marker to keep on the right', 'B. A danger or obstruction to be avoided', 'C. A preferred-channel marker', 'D. A mooring buoy'],
        answer: 'B',
        explanation: 'Red-and-white vertically striped buoys mark dangers, such as rocks or shoals, and should be passed well clear.'
      },
      {
        prompt: 'Which vessels must carry a wearable life jacket for each person on board?',
        options: ['A. Only recreational vessels over 16 feet', 'B. All recreational vessels', 'C. Only vessels with engines', 'D. Only sailboats'], 
        answer: 'B',
        explanation: 'All recreational vessels must carry one U.S. Coast Guard-approved wearable PFD per person on board.'
      }
    ],
    note: 'Samples are editor-written illustrations of the standard NASBLA curriculum, not live exam items.'
  },
  examDay: {
    summary: 'For online NASBLA-approved courses, exam day is the day you finish the final assessment at your own pace — most providers let you retake it after reviewing missed modules, and the certificate is typically emailed or available for download immediately after passing. The core rules vary slightly by provider: some are closed-book with a time window, most are open-book by design since they are education courses, and several allow unlimited retakes. Bring your course notes for review before starting, have your registration email handy, and use a stable connection — many states require the assessment to be completed on a single device session. If you took a classroom course, arrive early with your photo ID and complete any state-specific paperwork. After passing, download the certificate immediately and save it in two places; if your state requires proof at registration or renewal, the PDF is your document of record. The most common post-exam mistake is assuming the certificate never expires — several states now require periodic renewal or a one-time course plus refresher for specific age groups, so confirm your state\u2019s validity window.',
    bring: ['Course notes and rules summary', 'Registration email / provider login', 'Photo ID (classroom courses)'],
    leave: ['Distractions — the online final is a single-session assessment', 'The assumption that no state renewal applies'],
    timeline: [
      { time: 'Before the final', detail: 'Complete all modules; run the provider\u2019s practice quiz; review navigation rules and buoys.' },
      { time: 'Final assessment', detail: '40-60 questions, typically untimed or lightly timed; retakes allowed by most providers.' },
      { time: 'Pass', detail: 'Certificate downloads or emails immediately; save two copies.' },
      { time: 'After', detail: 'Confirm your state\u2019s validity and renewal policy; link the certificate where required.' }
    ],
    rules: ['Provider rules differ — confirm open-book vs closed-book', 'Single-session assessment on most platforms', 'Retakes typically unlimited after module review'],
    afterwards: 'Passing yields a completion certificate valid in your state if the provider is NASBLA-approved; keep the PDF and check state renewal rules before the season.'
  }
};

export default data;
