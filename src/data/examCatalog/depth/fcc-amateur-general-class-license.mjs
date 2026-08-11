// Depth content for: fcc-amateur-general-class-license
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Technology & federal licensing desk',
    bio: 'This guide is compiled and maintained by our federal-licensing desk. Amateur radio licensing is governed by the Federal Communications Commission under 47 CFR Part 97, and we take the exam structure and passing standards from the regulations themselves — Element 3 is 35 questions with a minimum passing score of 26, as codified in 47 CFR \u00a797.503(b)(2). The question pool, its effective dates and its size come from the National Conference of Volunteer Examiner Coordinators (NCVEC), which publishes the pool used by all Volunteer Examiner teams. The $35 FCC application fee is per FCC Order DA-22-389, in effect since 19 April 2022, and the volunteer-examiner session fee is set by each VEC, so we state the range and flag that it varies. The FCC does not publish pass rates for amateur examinations, and we state that plainly rather than inventing a figure. There is no Bureau of Labor Statistics occupation for amateur radio operators, so the salary section states that honestly and does not fabricate a wage.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam element structure, the 26/35 passing standard, the question-pool dates, and the $35 FCC application fee were taken from 47 CFR Part 97 and FCC Order DA-22-389, with pool information from the NCVEC.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: 'No BLS occupation exists for the General class license — it is a federal operating authorization, not a job credential, and no legitimate salary figure is published for it.',
    summary:
      'The honest answer is that the FCC Amateur Radio General Class license has no salary attached to it, and any source quoting one is fabricating data. The license is an authorization from the Federal Communications Commission to transmit on amateur radio frequencies, governed by 47 CFR Part 97, and the Bureau of Labor Statistics does not classify workers by amateur radio licensure — amateur radio is a hobby and public service permitted for anyone, with no age or citizenship requirement, and no occupation in the Standard Occupational Classification is tied to it. Anyone who claims a "General class license salary" is combining the license with something else, such as a radio operator job that actually maps to a BLS occupation like broadcast or telecommunications technicians, which have their own SOC codes and their own wages — and the license is not required for those jobs. What the license does confer is real but non-monetary: access to most of the high-frequency spectrum (160 through 10 meters) for voice, CW and digital modes, the ability to participate in international DX operations, contesting and public-service and emergency communications networks, and a credential that demonstrates technical and regulatory competence in radio. Some holders use the skills toward careers in RF engineering, broadcasting or telecommunications, and the hobby is a genuine entry point for learning radio theory, propagation and electronics, but that is an educational pathway, not a wage category. The practical financial profile is the opposite of most exams on this site: the license costs about $50 all-in — a $35 FCC application fee plus a volunteer-examiner session fee that typically runs $15 — and lasts ten years with a free renewal, so the value proposition is access and skill at near-zero cost, not employment. We have deliberately not quoted a salary figure, because none exists in official data.',
    rows: [
      { label: 'FCC application fee', value: '$35', note: 'Per FCC Order DA-22-389, in effect since 19 April 2022; paid after passing' },
      { label: 'VE session fee', value: 'Typically ~$15', note: 'Set by each Volunteer Examiner Coordinator; ranges from $0 to about $25' },
      { label: 'Total typical out-of-pocket', value: 'About $50', note: 'FCC fee plus session fee; paid only after you pass' },
      { label: 'License term', value: '10 years', note: 'Renewal carries no FCC application fee' },
      { label: 'Salary impact', value: 'None published', note: 'Amateur radio has no BLS occupation; the license is an operating authorization, not a job credential' }
    ],
    growth: 'No employment outlook exists for amateur radio operators because no occupation exists. The service itself is stable and popular, with hundreds of thousands of active US licensees and no sign of the hobby declining.',
    source: {
      label: 'FCC - Amateur Radio Service (47 CFR Part 97)',
      url: 'https://www.fcc.gov/wireless/bureau-divisions/mobility-division/amateur-radio-service'
    }
  },

  passRate: {
    headline: 'The FCC publishes no pass rate for amateur examinations — the published facts are a fully public question pool and a passing standard of 26 of 35 (74%)',
    summary:
      'The FCC does not publish pass rates for amateur radio examinations, and neither does any VEC in a comprehensive way, so any specific pass-rate figure for the General class exam is either anecdotal or invented — and because the exam is drawn verbatim from a published question pool, pass rates for candidates who study are near-universal without the FCC ever reporting a statistic. The structure is set in regulation: under 47 CFR \u00a797.503(b)(2), Element 3 consists of 35 questions concerning the privileges of a General class operator license, with a minimum passing score of 26 questions answered correctly — exactly 74 percent. The current question pool is published by the National Conference of Volunteer Examiner Coordinators (NCVEC) and is effective from 1 July 2023 through 30 June 2027, containing roughly 429 questions organised across ten sub-elements, from FCC rules and operating procedures through propagation, electrical principles, practical circuits, signals and emissions, antennas and RF safety. Every question on the real exam is drawn from this public pool, which is the defining fact of amateur radio testing: unlike the exams elsewhere on this site, there is no undisclosed item bank, no scaled equating across forms, and no black-box cut score — the exact questions and answers are available to anyone before test day. That is why the pass rate question is almost meaningless for a prepared candidate: the exam does not test your ability to reason about unseen material so much as your command of a known, finite set of 429 questions. The practical metrics are the ones that matter — you need 26 of 35, you may miss up to nine, and the exam is graded on the spot by volunteer examiners. We have deliberately stated that no official pass rate exists and covered the published standard and the public-pool design instead.',
    source: {
      label: '47 CFR Part 97 - Amateur Radio Service (FCC) and NCVEC question pool',
      url: 'https://www.fcc.gov/wireless/bureau-divisions/mobility-division/amateur-radio-service'
    },
    caveat:
      'The FCC publishes no pass rate for amateur examinations. What is published is the 26-of-35 (74%) passing standard in 47 CFR \u00a797.503(b)(2) and a fully public NCVEC question pool, which makes the exam highly passable for prepared candidates without any official statistic. We have not invented a pass rate.'
  },

  studyPlan: {
    summary:
      'A realistic study plan for the General class license is 30 to 60 hours over six to eight weeks, because Element 3 is a 35-question exam drawn entirely from a published pool of roughly 429 questions, and the entire preparation problem is converting that finite pool into recognition speed — most candidates who treat it as a set to be mastered pass, and those who study sporadically or skip the math sub-elements fail narrowly. The exam covers ten sub-elements: G1 Commission\u2019s Rules, G2 Operating Procedures, G3 Radio Wave Propagation, G4 Amateur Radio Practices, G5 Electrical Principles, G6 Circuit Components, G7 Practical Circuits, G8 Signals and Emissions, G9 Antennas and Feed Lines, and G0 Electrical and RF Safety, with the exam drawing its 35 questions across those groups. You need 26 correct, so you may miss up to nine — which makes the arithmetic generous but not a free pass, because the higher-frequency sub-elements such as propagation and antennas reward actual understanding. The plan below works through the pool by sub-element, then switches to full-pool practice exams, because pool questions repeat verbatim on the real exam and recognition speed is the skill being tested. Two structural facts shape the plan: first, you must already hold a valid Technician class license, or pass Element 2, before Element 3 credit counts — many candidates take both at the same session; second, the FCC sets no fixed time limit for the element in its regulations, and VE teams typically allow a reasonable window of roughly 30 to 60 minutes, so the pacing risk is low. Candidates upgrading from Technician usually need the lower end of the hour range, because the operating and rules content overlaps; candidates starting fresh on the theory should budget the upper end.',
    totalHours: '30-60 hours over 6-8 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Rules, operating procedures and practices (G1, G2, G4)',
        tasks: [
          'Commission\u2019s Rules: Part 97 sub-bands, power limits, identification, and the privileges the General class adds over Technician',
          'Operating procedures: HF operating, nets, DX and contest etiquette, and emergency communications practices',
          'Amateur practices: station setup, interference, and the practical operating scenarios the pool asks about',
          'Complete the rules and operating sub-elements in a question-by-question review of the pool'
        ],
        hours: '5-7 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Propagation, electrical principles and circuit components (G3, G5, G6)',
        tasks: [
          'Radio wave propagation: MUF and LUF, solar indices and the A/K index, and the ionosphere\u2019s layers at HF',
          'Electrical principles: Ohm\u2019s law, reactance, impedance, resonance, Q, and decibels — work the math until it is mechanical',
          'Circuit components: capacitors, inductors, diodes, transistors and the practical circuits built from them',
          'Drill the calculation sub-elements daily; a few minutes of math practice removes the most avoidable misses'
        ],
        hours: '6-8 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Practical circuits, signals and emissions, antennas and safety (G7, G8, G9, G0)',
        tasks: [
          'Practical circuits: power supplies, oscillators, amplifiers and receivers at the block-diagram level',
          'Signals and emissions: modulation types, bandwidths, and the digital modes and their requirements',
          'Antennas and feed lines: impedance, SWR, antenna types, and transmission-line behaviour — the highest-yield technical sub-element',
          'Electrical and RF safety: RF exposure limits, grounding, and station safety practices'
        ],
        hours: '6-8 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Full-pool practice exams and logistics',
        tasks: [
          'Take full 35-question practice exams drawn from the current pool at least three times a week',
          'Aim for 85 percent or better on three consecutive practice exams, well above the 74 percent passing mark',
          'Re-drill the sub-elements where the practice exams show misses, especially the math and antenna groups',
          'Register for an FCC FRN, find a VE session, and prepare the Technician prerequisite, ID and session fee'
        ],
        hours: '5-7 hrs/week'
      }
    ],
    variants: [
      { label: 'Technician licensee upgrading', detail: 'Four to six weeks. The rules and operating content overlaps with Technician; spend the recovered time on propagation, antennas and the electrical-principles math, which are the sub-elements that separate General from Technician.' },
      { label: 'New to amateur radio with no license yet', detail: 'Ten to twelve weeks. Pass Element 2 first or take both elements at the same session; budget the full hour range and add the Technician rules content, because the General exam assumes the operating basics.' },
      { label: 'Engineer or RF professional', detail: 'Two to four weeks. The technical sub-elements will be familiar; concentrate on the Part 97 rules, the band-plan specifics, and the exact pool wording, which trips up professionals who understand the theory but not the regulation.' }
    ]
  },

  prepStrategies: {
    summary:
      'The General class exam is the one exam on this site where the entire content is public knowledge before test day, so the dominant strategy is systematic mastery of the published question pool — the roughly 429 NCVEC questions for the 2023-2027 cycle contain every question that can appear, verbatim, and candidates who work the pool until they can answer reliably convert recognition into a pass far more efficiently than candidates who try to learn radio theory from first principles. The highest-yield habits are, first, using a pool-based study tool — HamStudy.org, a printed pool or an app — because these organise the exact questions by sub-element and let you drill the ones you miss; second, targeting the three sub-elements that decide most outcomes: Commission\u2019s Rules, propagation, and antennas and feed lines, with the electrical-principles math as the fourth, because the math questions are pure, avoidable points if you do a little practice and pure losses if you skip them; third, taking full 35-question practice exams until you score 85 percent or better on three consecutive attempts, giving yourself margin over the 74 percent passing standard, since the real exam is just another draw from the same pool; fourth, understanding rather than memorising the antenna and propagation sub-elements, because those questions reward reasoning and the pool questions on them have fewer memorisable patterns; and fifth, handling the logistics — obtaining an FCC Registration Number, confirming your Technician license is in the FCC database, and bringing the session fee and ID to a VE session — because the exam is trivial to take once you are in the room. Because the FCC sets no strict time limit and most candidates finish in 20 to 30 minutes, pacing is the least of your problems; pool mastery is everything.',
    items: [
      {
        title: 'Master the published pool, not radio theory',
        detail: 'Every question on the real exam comes verbatim from the NCVEC 2023-2027 pool of about 429 questions. Working the pool until recognition is automatic converts preparation directly into a pass; studying general radio theory is useful for understanding but far less efficient for this specific exam.'
      },
      {
        title: 'Use a pool-based study tool',
        detail: 'HamStudy.org, the ARRL Exam Review, or a printed pool organises the exact questions by sub-element and tracks your misses. These tools are the difference between studying and drilling, and the drilling mode is what builds the recognition speed the exam rewards.'
      },
      {
        title: 'Drill the math sub-elements daily',
        detail: 'The electrical-principles questions — Ohm\u2019s law, reactance, impedance, resonance and decibels — are pure, avoidable points for anyone who practises the calculations and pure losses for anyone who skips them. A few minutes of calculation practice most days removes an entire category of cheap misses.'
      },
      {
        title: 'Aim for 85% on practice exams, not 74%',
        detail: 'You need 26 of 35, but practising to exactly the passing mark leaves no margin for an off day. Take full-pool practice exams until you score 85 percent or better on three consecutive attempts, which puts real distance between you and the 26-question threshold.'
      },
      {
        title: 'Understand antennas and propagation, do not just memorise',
        detail: 'The G3 propagation and G9 antennas sub-elements reward reasoning more than the rules questions do, and the pool questions on them have fewer simple patterns. Spend the extra hour understanding SWR, feed-line behaviour and the ionosphere\u2019s layers rather than pattern-matching answers.'
      },
      {
        title: 'Sort the logistics before the exam session',
        detail: 'Get an FCC Registration Number, confirm your Technician license appears in the FCC ULS database, and bring a photo ID plus the session fee to a VE session — many teams also let you take Element 3 right after Element 2 in the same sitting. A candidate who is in the room is a candidate who passes.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The General class license is the cheapest exam on this site to prepare for, because the entire content is a published question pool and most of the best resources are free — the buying decision is not which course to buy but which pool-based tool to drill with and whether to add a printed manual. The exam itself costs about $35 as the FCC application fee, paid only after you pass, plus a volunteer-examiner session fee that typically runs about $15 but ranges from $0 at some VECs to about $25 at others, for a total of roughly $50; there is no test-centre fee because amateur exams are administered by volunteer examiner teams at hamfests, clubs and remote video sessions. On preparation, the free pool-based tools — HamStudy.org\u2019s web practice and the free ARRL Exam Review — cover the entire content and are the single best value in the category, because drilling the exact pool is the whole game. The popular study manuals — the ARRL General Class License Manual at roughly $30-40 and the KB6NU No-Nonsense General Class Study Guide, which is free or donation-supported — add explanation around the pool, with the KB6NU guide being the most cost-effective printed option. Mobile apps such as the HamStudy app at a few dollars add offline drilling. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and a candidate can prepare completely for free or nearly so, since the pool, free practice exams and free study guides cover every question that can appear. The only unavoidable spend is the FCC fee and the session fee, and both are paid only after you pass, which makes this exam the lowest-risk credential purchase on this site.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FCC application fee + VE session fee', values: ['~$35 FCC + ~$15 session (ranges $0-25)', 'Paid after you pass, direct to FCC and the VE team', 'Required — the only unavoidable costs'] },
      { label: 'HamStudy.org / ARRL Exam Review', values: ['Free (web); optional app ~$5-10', 'Online pool drilling and full practice exams', 'The core study tool — drill the exact pool'] },
      { label: 'KB6NU No-Nonsense General Study Guide', values: ['Free (donation suggested)', 'Plain-English PDF', 'The most concise free explanation of the pool'] },
      { label: 'ARRL General Class License Manual', values: ['~$30-40', 'Print or eBook', 'Comprehensive textbook for candidates who want the theory explained'] },
      { label: 'HamStudy mobile app', values: ['~$5-10 one-time', 'Offline pool drilling on a phone', 'Candidates who study on the go'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and change infrequently; we rank nothing by commission. The FCC application fee is $35 and the VE session fee is set by each VEC, typically about $15. Because the entire question pool is public, a candidate can prepare for free with pool-based practice tools.'
  },

  commonMistakes: {
    summary:
      'Failures on the General class exam are not failures of radio knowledge — they are failures of preparation method and logistics, and all of them are avoidable because the entire exam is drawn from a published pool. The single most common error is studying radio theory from textbooks instead of drilling the question pool, which wastes hours on material that will not appear and leaves the actual 35 questions unpractised; candidates who work the NCVEC pool until recognition is automatic pass, and candidates who read general theory gamble. The second is skipping the electrical-principles math sub-elements, which are pure, avoidable points — a few minutes of Ohm\u2019s-law and decibel practice a day removes an entire category of misses, while skipping them costs exactly the margin that separates 26 of 35 from a fail. The third is practising only the rules questions that feel comfortable and leaving propagation and antennas under-prepared, when those sub-elements reward the understanding that separates a narrow pass from a comfortable one. The fourth is ignoring the Technician prerequisite: a candidate without a valid Element 2 credit cannot use an Element 3 pass, so showing up without having passed Technician first — or without confirming the license is in the FCC database — turns a passed exam into a non-result. The fifth is failing to register for an FCC FRN before the session, which delays the whole application. And the sixth is assuming the exam is timed against you, when the FCC sets no fixed time limit and VE teams typically allow a generous window — the actual risk is not running out of time but running out of preparation. None of these are technical gaps; every one is fixed by drilling the pool and sorting the logistics the week before.',
    items: [
      {
        mistake: 'Studying radio theory instead of the question pool',
        fix: 'Every exam question comes verbatim from the NCVEC 2023-2027 pool of about 429 questions. Drill the pool until recognition is automatic; general radio theory is useful context but the wrong primary resource, because the exam tests the pool, not a textbook.'
      },
      {
        mistake: 'Skipping the electrical-principles math',
        fix: 'The Ohm\u2019s-law, reactance, resonance and decibel questions are pure, avoidable points. Practice the calculations a few minutes a day and they stop being losses; skip them and they cost exactly the margin that separates a pass from a narrow fail.'
      },
      {
        mistake: 'Under-preparing propagation and antennas',
        fix: 'The G3 and G9 sub-elements reward understanding more than the rules questions do and have fewer memorisable patterns. Spend the extra hour on SWR, feed-line behaviour and the ionosphere rather than only drilling the comfortable rules content.'
      },
      {
        mistake: 'Ignoring the Technician prerequisite',
        fix: 'Element 3 credit requires a valid Element 2 (Technician) credit or license. Confirm your Technician license is in the FCC ULS database before the session, or plan to take both elements at the same sitting — a General pass without the prerequisite is a non-result.'
      },
      {
        mistake: 'Forgetting the FCC FRN registration',
        fix: 'You need an FCC Registration Number before any license action. Register on the FCC CORES system in advance and bring the FRN to the session; without it, the application cannot be filed and the session is wasted.'
      },
      {
        mistake: 'Worrying about the clock instead of the content',
        fix: 'The FCC sets no fixed time limit for Element 3, and VE teams typically allow a generous window — most candidates finish in 20 to 30 minutes. The real risk is not pacing but preparation, so spend the worry time on the pool.'
      }
    ]
  },

  questionTypes: {
    summary:
      'Element 3, the General class written examination, is 35 multiple-choice questions drawn entirely from the published NCVEC question pool, and the entire exam is a single format — every item has four answer choices labelled A through D, exactly one correct answer, and you need 26 correct to pass under 47 CFR \u00a797.503(b)(2). Because the pool is public, the practical question-type distinction is by sub-element rather than by format: the exam draws its 35 questions across ten groups — G1 Commission\u2019s Rules, G2 Operating Procedures, G3 Radio Wave Propagation, G4 Amateur Radio Practices, G5 Electrical Principles, G6 Circuit Components, G7 Practical Circuits, G8 Signals and Emissions, G9 Antennas and Feed Lines, and G0 Electrical and RF Safety — and the sub-elements behave differently. The rules and procedures questions test memorisable regulation and convention, and the exact pool wording is the safest study target. The propagation and antennas questions test understanding of the ionosphere, MUF, SWR and feed-line behaviour, and reward reasoning over pattern-matching. The electrical-principles and circuit questions test calculation — Ohm\u2019s law, reactance, impedance, resonance, Q and decibels — and are pure credit for anyone who practises the arithmetic. The signals-and-emissions and safety questions test definitions and limits, including RF-exposure categories. There are no essay questions, no performance tasks, no audio components and no time-pressure surprises, because the FCC sets no fixed time limit and VE teams typically allow a generous window. The exam is graded on the spot by the volunteer examiners, and the result is known immediately. The three samples below illustrate the rules, the calculation and the understanding item styles; they are editor-written illustrations of the published pool format and are not live pool questions.',
    types: [
      { name: 'Rules and operating-procedure items (G1, G2, G4)', share: 'A large share of the 35 questions', detail: 'Part 97 sub-bands, power limits, identification, nets, DX and emergency operating. Memorisable regulation, best mastered by drilling the exact pool wording.' },
      { name: 'Calculation items (G5, part of G6-G7)', share: 'A smaller but pure-credit share', detail: 'Ohm\u2019s law, reactance, impedance, resonance, Q and decibels. Practising the arithmetic makes these automatic; skipping them gives away the easiest points on the exam.' },
      { name: 'Understanding items (G3, G9, G8)', share: 'The deciding share', detail: 'Propagation, antennas, feed lines and signals — the sub-elements that reward reasoning over memorisation and separate a narrow pass from a comfortable one.' },
      { name: 'Safety and practice items (G0, part of G4)', share: 'A modest but mandatory share', detail: 'RF exposure limits, grounding and station safety. Straightforward definitions and limits that cost nothing to learn.' }
    ],
    samples: [
      {
        prompt: 'Which of the following operating practices is correct when using a repeater for the first time?',
        options: [
          'A. Announce "monitoring" and wait for a response before transmitting your call sign',
          'B. Transmit your call sign and listen for a response before making a longer transmission',
          'C. Key the transmitter and hold it open to confirm the repeater is active',
          'D. Begin a full conversation immediately so the repeater is used efficiently'
        ],
        answer: 'B',
        explanation: 'The correct practice for a first transmission on a repeater is to identify with your call sign and listen for a response before proceeding — this confirms the repeater is active and that you are not interrupting an existing conversation, which is why the phrase "listening" with your call sign is standard. A is incomplete because the identification, not the word "monitoring", is what establishes your presence legally and practically. C, keying and holding the transmitter open, is poor operating practice that ties up the repeater and is the kind of behaviour that operating-procedure questions are written to correct. D assumes access without confirming the channel is clear. This is a rules-and-operating item from the pool style: the correct answer is the practice that combines legal identification with consideration for other operators.'
      },
      {
        prompt: 'What is the RMS voltage across a 50-ohm resistor when a sine wave of 100 volts peak is applied?',
        options: [
          'A. 100 volts',
          'B. 70.7 volts',
          'C. 141.4 volts',
          'D. 50 volts'
        ],
        answer: 'B',
        explanation: 'The RMS value of a sine wave is the peak value divided by the square root of two, approximately 0.707 times the peak. For a 100-volt peak sine wave, the RMS voltage is 100 multiplied by 0.707, which is about 70.7 volts. A confuses peak with RMS; the peak value is the maximum of the waveform, not its effective heating value. C multiplies by the square root of two instead of dividing, which gives the peak-to-peak relationship misapplied; 141.4 volts is actually 100 volts peak converted the wrong direction. D is the average of peak and zero, which is not the RMS definition. This is a calculation item of exactly the kind the pool rewards: a one-line formula and a clean number, pure credit for a candidate who has drilled the electrical-principles arithmetic.'
      },
      {
        prompt: 'Why do HF radio signals sometimes travel farther at night than during the day?',
        options: [
          'A. The ionosphere\u2019s D layer, which absorbs signals during the day, largely disappears at night',
          'B. The sun heats the ionosphere at night, increasing its reflective height',
          'C. Atmospheric noise is reduced at night, making signals seem stronger',
          'D. The Earth\u2019s rotation increases propagation speed after sunset'
        ],
        answer: 'A',
        explanation: 'The D layer of the ionosphere, which forms under solar radiation during the day and heavily absorbs HF signals, largely disappears at night, so lower frequencies that were absorbed during daylight propagate farther by reflecting off the higher E and F layers. This is why nighttime is the classic window for long-distance HF communication on the lower bands. B is backwards: solar radiation creates the ionosphere, so at night there is less ionisation, not more heating that raises the reflecting layer. C describes a real effect on noise but does not explain the underlying propagation change; reduced atmospheric noise accompanies the night rather than causing the extra distance. D is false. This is an understanding item from the propagation sub-element, the type that rewards knowing why the layers behave as they do rather than memorising a fact in isolation.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The General class exam is administered by volunteer examiners at a VE session — at a hamfest, a club meeting, or a remote video session — rather than at a commercial test centre, and the direct exam-day answer is that you will sit a 35-question, four-option multiple-choice paper drawn from the public NCVEC pool, need 26 correct to pass, and know your result on the spot, because volunteer examiners grade it immediately after you finish. There is no fixed time limit set by the FCC; VE teams typically allow a generous window, and most candidates finish in 20 to 30 minutes, so pacing is not the stressor. Before the session, confirm you have an FCC Registration Number, a valid photo ID, and, if you are upgrading, that your Technician license is in the FCC ULS database — bring a printout or screenshot as proof if there is any doubt. Expect to pay the VE session fee, typically about $15, at the session; the $35 FCC application fee is paid later, directly to the FCC online after your volunteer examiners submit your application and you receive the payment link. At a remote session, you will give the examiners a virtual tour of the room, share your screen, and be monitored by three or more accredited volunteer examiners. Calculators that are basic and non-programmable are typically permitted; phones and programmable calculators are not. If you pass, you receive a Certificate of Successful Completion of Examination (CSCE), which is proof you can operate with General privileges (using the /AG suffix on HF) once your upgrade is filed, and the new license grant appears in the FCC database after the application and fee are processed. Many teams let you take Element 3 right after Element 2 in the same session, so upgrading and first-time candidates can leave licensed.',
    bring: [
      'A photo ID (driver\u2019s license or passport) and your FCC Registration Number (FRN)',
      'The VE session fee, typically about $15 in cash, unless the team is free',
      'Proof of your current Technician license — a printout or screenshot if it may not be in the FCC database',
      'For remote sessions: a computer with camera and microphone, and a private room with a clear desk'
    ],
    leave: [
      'Programmable calculators, smartphones, smartwatches and any device with wireless capability — prohibited during the exam',
      'Reference materials and study notes; the exam is closed-book',
      'For remote sessions: any other person in the room and any second monitor or unapproved device',
      'Morse code practice — no element of any US amateur exam has required Morse code since 2007'
    ],
    timeline: [
      { time: 'The week before', detail: 'Register for an FCC FRN, confirm your Technician license is in the FCC ULS database, and find and register for a VE session — many are remote.' },
      { time: 'At the session', detail: 'Check in with ID, FRN and session fee; three or more volunteer examiners are present for every candidate.' },
      { time: 'The exam', detail: '35 multiple-choice questions drawn from the public pool; no fixed time limit, and most candidates finish in 20-30 minutes. You need 26 correct.' },
      { time: 'Immediately after', detail: 'The examiners grade on the spot and announce the result. On a pass you receive the CSCE, your proof of successful completion.' },
      { time: 'The days after', detail: 'Your team files the application; you receive an FCC email with a payment link for the $35 fee, and the license grant appears in ULS after payment.' }
    ],
    rules: [
      'Element 3 is 35 multiple-choice questions; the minimum passing score is 26 of 35, per 47 CFR \u00a797.503(b)(2).',
      'You must hold a Technician class license or have passed Element 2 for the General pass to count.',
      'The FCC sets no fixed time limit for the element; VE teams typically allow a generous window.',
      'The exam is closed-book; basic non-programmable calculators are typically permitted, and programmable or wireless devices are not.',
      'The $35 FCC application fee is paid after passing, directly to the FCC; the VE session fee is paid at the session.',
      'On a pass you receive a CSCE, which authorises you to use the new privileges with an /AG suffix once filed.'
    ],
    afterwards:
      'The result is immediate: the volunteer examiners grade the paper on the spot and hand you a Certificate of Successful Completion of Examination if you passed. Within about a week, the team files your application with the FCC, you receive an email with a payment link for the $35 application fee, and once paid, the new General class grant appears in the FCC ULS database, typically within a few days. Until the upgrade appears, you may use General privileges on HF by adding the /AG (Authorized General) suffix to your call sign, which is how the CSCE works in practice. Your license is valid for ten years, and renewal carries no FCC application fee — renew through ULS when the time comes, within the two-year grace period. There is no ongoing continuing-education requirement, no maintenance exam, and nothing to renew annually, which makes this one of the lowest-maintenance credentials on this site. If you did not pass, the examiners will tell you your score on the spot, you can usually retake the element at another session, and because the pool is public, the fix is specific: re-drill the sub-elements where you dropped below 26 and come back within weeks. The cost of failure is small — just another session fee — and the pathway is completely transparent, which is exactly why the pool, not the pass rate, is the thing to master.'
  }
};

export default data;
