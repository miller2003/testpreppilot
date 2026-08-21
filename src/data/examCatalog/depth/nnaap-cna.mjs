// Depth content for: nnaap-cna
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied health & nurse-aide certification desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. The NNAAP (National Nurse Aide Assessment Program) is the nurse-aide competency evaluation used in many states, and since 2021 it has been administered by Credentia (Pearson VUE formerly ran it; some states still use Prometric or Headmaster). We track the published content outline by its revision — the current outline dates to 2024 — and we state plainly that fees, the exact skill list and the passing standard are set by each state\'s nurse-aide registry, so you must check your own state. Wage figures come from the Bureau of Labor Statistics occupation Nursing Assistants (SOC 31-1131), named by SOC code; BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'The two-part exam structure, the 70-item written composition, the 5-skill evaluation with hand hygiene, the 2024 content-outline weights and the OBRA \'87 training floor were taken from the NNAAP/Credentia candidate handbook and state nurse-aide registries, and checked against the 2024 outline revision.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$39,530 median for nursing assistants (BLS SOC 31-1131, May 2024)',
    summary:
      'The Bureau of Labor Statistics classifies nursing assistants under SOC code 31-1131, and passing the NNAAP is what makes you eligible to work in that occupation under most state nurse-aide registries. The May 2024 median wage was $39,530 a year, or roughly $19.00 an hour. This is an entry-level healthcare wage, and the distribution is fairly compressed. The lowest 10 percent earned less than $31,390, which is close to the federal and state minimum-wage floor and reflects settings and regions at the bottom of the pay scale, while the highest 10 percent earned more than $50,140, typically in higher-paying states, unionised facilities, or specialised units such as hospitals rather than long-term care. The 25th percentile sat at about $36,260 and the 75th at about $46,070, so most certified nurse aides cluster in the high-thirty-thousands to mid-forties range. BLS reported a mean annual wage of about $41,270. Employment was roughly 1,388,430 jobs in 2024, making nursing assistants one of the largest healthcare support occupations in the country. BLS projects about 2 percent employment growth from 2024 to 2034 — slower than the average for all occupations — but the openings number is the real story for a job-seeker: about 211,800 openings a year, on average, over the decade. That figure combines nursing assistants with orderlies and psychiatric aides, and it is driven overwhelmingly by replacement as experienced aides leave the field, not by new positions. For a candidate, the implication is favourable: demand for certified aides is steady, the barrier to entry is the training and the NNAAP exam rather than a shortage of jobs, and the certification is the gate. State-by-state pay varies substantially, and BLS publishes the figures for SOC 31-1131 by state and metro area; we have quoted national medians here for comparability across the exams on this site.',
    rows: [
      { label: 'Median annual wage, nursing assistants', value: '$39,530', note: 'BLS Occupational Outlook Handbook, May 2024 ($19.00/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $31,390', note: 'BLS OOH Pay tab, May 2024' },
      { label: '25th percentile', value: 'about $36,260', note: 'BLS OOH Pay tab, May 2024' },
      { label: '75th percentile', value: 'about $46,070', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $50,140', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Mean annual wage', value: 'about $41,270', note: 'BLS OES, May 2024' },
      { label: 'Employment, 2024', value: '~1,388,430 jobs', note: 'BLS OOH Quick Facts, 2024 (nursing assistants)' },
      { label: 'Projected annual openings', value: '~211,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — combines nursing assistants, orderlies and psychiatric aides' }
    ],
    growth: '+2% projected change 2024-34 (slower than average); about 211,800 openings a year, mostly replacement as aides leave the field',
    source: {
      label: 'BLS Occupational Outlook Handbook — Nursing Assistants',
      url: 'https://www.bls.gov/ooh/healthcare/nursing-assistants.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No single national NNAAP pass rate is published — each state sets its own standard',
    summary:
      'There is no single published national pass rate for the NNAAP nurse-aide competency evaluation, and anyone quoting one precise national percentage is combining figures that state registries keep separate by design. The reason is structural: the NNAAP is administered at the state level, and while many states use the Credentia NNAAP program (and a few use Prometric or Headmaster), each state\'s nurse-aide registry sets its own passing standard for both the knowledge (written or oral) section and the skills evaluation. Some states publish their own candidate pass rates through the registry or the administering vendor, but those are state-specific and not comparable into a clean national blend. What is published and verifiable is the structure of the standard rather than a single rate. The knowledge section is typically passed at roughly 70 to 75 percent correct, and the skills evaluation requires a satisfactory performance on every single skill performed — you do not get an average across skills, so one critical step missed on a critical element can fail the skills portion even if the rest is strong. That "every skill must pass" rule is the part candidates underestimate. For an honest read on your own odds, the best source is your state nurse-aide registry or the administering vendor\'s state-specific candidate handbook, which states the exact passing score and sometimes the historical pass rate for that state. We have deliberately not invented a national pass rate, because none is published and the state figures differ enough that a blend would be misleading. If you are preparing, treat the published state standard as the bar and practise to clear it on every skill, not on average.',
    source: {
      label: 'Credentia — NNAAP / state nurse-aide registries',
      url: 'https://www.credentia.com/'
    },
    caveat:
      'No single national pass rate is published for the NNAAP nurse-aide exam. Each state sets its own passing standard (commonly ~70-75% on the knowledge section and a satisfactory rating on every skill) and reports through its own nurse-aide registry. We have not invented a national figure; check your state registry for state-specific data.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The NNAAP is a two-part competency evaluation, and your preparation has to serve both parts or you will not be listed on the registry. Part one is a knowledge test: a written examination of 70 multiple-choice items (60 scored plus 10 unscored pretest) with a two-hour time limit, or an oral examination if you qualify for that accommodation — the oral version replaces the written with 60 multiple-choice items plus 10 reading-comprehension items. Part two is the skills evaluation, in which an evaluator watches you perform five randomly selected skills in about 30 minutes; hand hygiene is always one of the five, and the remaining four are drawn from the published skill list. The 2024 content outline organises everything into three areas: Physical Care Skills (Activities of Daily Living about 22%, Basic Nursing Skills about 35%, and Self-Care about 7%), Psychosocial Care Skills (Emotional and Mental Health Needs about 8% and Spiritual and Cultural Needs about 2%), and the Role of the Nurse Aide (Communication about 7%, Client Rights about 8%, Legal and Ethical Behaviour about 5%, and Member of the Health-Care Team about 6%). The plan below assumes you have completed or are completing a state-approved training program (OBRA \'87 sets a federal floor of 75 training hours including 16 clinical hours, though many states require more) and now need focused exam preparation. We run it over four weeks at roughly 10 to 12 hours a week; if you are studying independently without a program, double the timeline to cover the training hours themselves.',
    totalHours: '40-80 hours (exam-focused; longer if you are also completing the 75-hour training requirement)',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Physical Care Skills I — ADLs and Basic Nursing',
        tasks: [
          'Activities of Daily Living: bathing, dressing, grooming, feeding, toileting, transferring and ambulation — know the safety steps for each',
          'Basic Nursing Skills: vital signs (BP, pulse, respiration, temperature), measuring and recording, specimen collection, perineal care, catheter care',
          'Work the 2024 outline weights: Basic Nursing is the largest single block (~35%), so over-invest here',
          'Build a one-page checklist of the critical steps for each ADL skill, because the skills exam grades critical elements'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Role of the Nurse Aide, Psychosocial, and Self-Care',
        tasks: [
          'Client Rights: privacy, confidentiality, informed consent, the right to refuse care, abuse and neglect recognition and reporting',
          'Legal and Ethical Behaviour: scope of practice, following the care plan, documentation boundaries, never working outside the aide role',
          'Communication: therapeutic communication, active listening, reporting and observing, dealing with difficult behaviours',
          'Psychosocial: emotional and mental-health needs, and spiritual and cultural needs — lower weight but easy, reliable points'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Skills evaluation rehearsal',
        tasks: [
          'Practise every skill on your state\'s published list, not just the common ones; you can be assigned any of them',
          'Drill hand hygiene to perfection — it is always assigned and a missed critical step fails the skill',
          'Rehearse the full sequence: knock, introduce yourself, explain, privacy, gloves, perform, document, clean up, remove gloves',
          'Time yourself to about 30 minutes for five skills; the evaluator is watching method, safety and dignity, not speed alone'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Mock written exam, weak-area closing, and logistics',
        tasks: [
          'Take two or three full 70-item timed practice exams and review every rationale, correct or not',
          'Re-tag misses to the 2024 outline areas and close the bottom one or two with focused review',
          'Confirm your state\'s exact skill list, the passing standard, the test site, and what ID to bring',
          'One light review day before the exam; prioritise the critical steps of hand hygiene and vital signs'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Just finished a state-approved training program', detail: 'Three to four weeks. Your program covered the content; use the time for exam technique, full mock written exams, and skills rehearsal under observation rather than re-learning.' },
      { label: 'Studying independently without a program', detail: 'Eight to ten weeks, because you must also satisfy the training requirement (federal floor 75 hours, 16 clinical) before you are eligible. Cover the outline content first, then the exam-prep weeks above.' },
      { label: 'Retake after a failed attempt', detail: 'Two weeks, targeted. Read your score report: if you failed the knowledge section, drill the weak outline area; if you failed skills, rehearse the specific skill(s) you missed, especially any critical element.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The NNAAP rewards two different kinds of preparation, and candidates who train for only one of them fail the other. The knowledge section is a straightforward multiple-choice test on the 2024 content outline, and it rewards organised content review plus timed practice. The skills evaluation is a performance test graded on critical elements, and it rewards physical rehearsal under observation — you cannot read your way to a passing skills score. The throughline of both is the care process: identify the resident, explain what you are doing, protect privacy, use standard precautions (hand hygiene first), perform the task safely, and document. That sequence is what the evaluator is watching for on every skill, and it is also the logic behind many knowledge items about rights, safety and infection control. The strategies below are ordered by how many points they swing; the first two address the mistakes that actually cause failures, which are almost always about the skills evaluation rather than the written test.',
    items: [
      {
        title: 'Rehearse every skill, not just the common ones',
        detail: 'Five skills are assigned at random and you must pass every one. Hand hygiene is always included, but the other four can be any skill on your state\'s list, so practising only the "usual suspects" leaves a hole. Walk through each skill\'s critical steps out loud until the sequence is automatic, because the evaluator grades specific required actions, not general competence.'
      },
      {
        title: 'Treat hand hygiene as non-negotiable',
        detail: 'Hand hygiene is always one of your five skills and a missed critical step fails it outright, which can fail the whole skills portion regardless of how well you did on the other four. Make it the most over-practised skill you have: before, after, and at every transition. It is the cheapest and most reliable points on the entire exam.'
      },
      {
        title: 'Learn the care sequence, not isolated facts',
        detail: 'Every skill follows the same arc: knock and identify, explain, ensure privacy, apply standard precautions, perform, document, clean up, remove PPE. Internalising that arc helps both the skills evaluation and the knowledge items on rights, safety and infection control, because they test the same principles from different angles.'
      },
      {
        title: 'Use the 2024 outline weights to allocate study time',
        detail: 'Basic Nursing Skills is the largest block (~35%) and Activities of Daily Living is next (~22%), so most of your knowledge-study hours belong there. The Role of the Nurse Aide and Psychosocial areas are lower weight but easy, reliable points — do not skip them, just do not over-invest relative to the nursing-skills content.'
      },
      {
        title: 'Take timed full written mocks',
        detail: 'The written test is 70 items in two hours — about 100 seconds each. Timed practice builds the pacing and surfaces content gaps by outline area. Review every rationale, including on items you got right, because the distractors in rights and safety questions are deliberately plausible.'
      },
      {
        title: 'Practise skills with a real observer',
        detail: 'Rehearsing alone builds the motions but not the awareness of being watched. Have a friend, classmate or instructor score you against the critical steps. Candidates who only practise solo are surprised by how the evaluator\'s presence disrupts their routine on the day.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The first decision for NNAAP candidates is whether they even need to buy anything. Most candidates sit the NNAAP right after a state-approved training program, and that program supplies the curriculum, the skills lab, and usually a practice exam. If you are independent or retaking, the resources that matter are your state\'s candidate handbook (free, and the only authoritative source for your exact skill list and passing standard), a skills demonstration video set, and a written-practice qbank. Unlike the RN or EMT exams, there is no single dominant commercial qbank for the NNAAP; the market is small and state-specific, so the handbook plus free demonstration videos from reputable training organisations cover most needs. Be wary of any paid product that claims to contain "real" NNAAP questions — the skills and items are set by the state and the vendor, and no legitimate third party has live items.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state NNAAP candidate handbook', values: ['Free', 'PDF from your state registry or Credentia', 'The authoritative skill list, passing standard and test-day rules for your state'] },
      { label: 'State-approved training program', values: ['Often free via employer or workforce program; otherwise varies', 'In-person or hybrid, includes clinical hours', 'Required path for most candidates; supplies curriculum and skills lab'] },
      { label: 'Credentia NNAAP practice materials', values: ['Low cost / sometimes free', 'Online', 'Official-style practice aligned to the current outline'] },
      { label: 'Skills demonstration videos (state training org or reputable channel)', values: ['Free', 'Video', 'Seeing each skill performed to the critical-step standard'] },
      { label: 'Third-party CNA study guide (e.g., 4YourCNA, Mosby)', values: ['~$20-40', 'Book or video course', 'Extra written-practice structure if your program did not provide it'] },
      { label: 'Flashcards for the knowledge outline', values: ['Free to ~$15', 'Paper or app', 'Drilling rights, safety, and vital-sign normal ranges'] },
      { label: 'A practice partner to observe your skills', values: ['Free', 'In person', 'The closest thing to the real evaluated skills experience'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by state and vendor. Because the NNAAP is state-administered, always confirm your state registry\'s handbook before relying on any generic resource; we do not rank by commission and note that no third party sells live exam items.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The NNAAP has a lower-content ceiling than the RN or EMT exams, but it fails candidates in predictable, avoidable ways — almost always on the skills evaluation rather than the written test. The written section is a conventional multiple-choice exam on a published outline, and most trained candidates clear it. The skills portion is where people stumble, because it is performed under observation and graded on specific critical elements, and a single missed critical step can fail a skill that otherwise looked fine. The second theme is assuming the exam is the same in every state; it is not — the skill list, the exact number of skills, the passing percentage and even the administering vendor differ by state. The mistakes below are the ones we see most, and most are about performance and logistics rather than knowledge.',
    items: [
      {
        mistake: 'Assuming you only need to know the "common" skills',
        fix: 'You are assigned five random skills and must pass every one; hand hygiene is always included but the other four can be any skill on your state\'s list. Practise the full list, not a guessed subset, because a gap on an uncommon skill fails the evaluation outright.'
      },
      {
        mistake: 'Missing a critical step on hand hygiene or another skill',
        fix: 'The skills exam grades critical elements — specific required actions — and missing one on a critical element can fail that skill regardless of everything else you did well. Know the critical steps of every skill cold, and treat hand hygiene as the most over-rehearsed task you have.'
      },
      {
        mistake: 'Treating the NNAAP as identical in every state',
        fix: 'The skill list, the number of assigned skills, the passing standard and the vendor (Credentia in most states, but Prometric or Headmaster in some) all vary by state. Read your own state registry\'s candidate handbook; do not study from a generic or another-state guide and assume it matches.'
      },
      {
        mistake: 'Skipping the oral-exam option when reading is a barrier',
        fix: 'Candidates who struggle with written English can request the oral examination (60 multiple-choice items plus 10 reading-comprehension items). If reading speed or comprehension is a real risk to your score, request the accommodation through your registry before scheduling rather than fighting the written form on the day.'
      },
      {
        mistake: 'Forgetting the care sequence under observation',
        fix: 'Evaluators watch for the whole process: identify and explain to the resident, privacy, standard precautions, safe performance, and documentation. Candidates who perform the mechanical task but skip explaining, privacy or hand hygiene lose critical-element points. Rehearse the sequence, not just the motion.'
      },
      {
        mistake: 'Letting the training-hour requirement block eligibility',
        fix: 'Under OBRA \'87 a federal floor of 75 training hours including 16 clinical applies, and many states require more. You cannot sit the NNAAP without completing an approved program that meets your state\'s requirement. Confirm the exact hour and clinical minimum before you schedule, or you may be turned away.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The NNAAP has two components and they test in two different formats. The knowledge component is a written examination of 70 multiple-choice items (60 scored, 10 unscored pretest) with a two-hour limit; candidates who qualify may take the oral examination instead, which is 60 multiple-choice items plus 10 reading-comprehension items. The content follows the 2024 outline across three areas: Physical Care Skills (ADLs ~22%, Basic Nursing ~35%, Self-Care ~7%), Psychosocial Care Skills (Emotional/Mental ~8%, Spiritual/Cultural ~2%), and the Role of the Nurse Aide (Communication ~7%, Client Rights ~8%, Legal/Ethical ~5%, Team ~6%). The second component is the skills evaluation: you perform five randomly selected skills in about 30 minutes, with hand hygiene always included, and each skill is graded on critical elements — required actions that must all be present. There is no partial-credit averaging across skills; a failed critical element on any one skill can fail that skill. The three worked samples below illustrate the written multiple-choice style on the outline topics; they are editor-written to the published outline and are not live exam items.',
    types: [
      { name: 'Written multiple-choice (knowledge)', share: '70 items, 60 scored + 10 pretest, 2 hours', detail: 'Four-option items drawn from the 2024 content outline. Distractors in rights, safety and infection-control items are deliberately plausible, so knowing the principle matters more than recognising a term.' },
      { name: 'Oral examination', share: 'Alternative to written, by accommodation', detail: '60 multiple-choice items plus 10 reading-comprehension items for candidates who qualify; same content outline, different delivery.' },
      { name: 'Skills evaluation (performance)', share: '5 skills in ~30 minutes, hand hygiene always included', detail: 'Performed under an evaluator who grades critical elements. Passing requires a satisfactory rating on every skill; there is no averaging.' }
    ],
    samples: [
      {
        prompt: 'A nurse aide is assisting a resident who has a prescribed diet. The resident says, "I don\'t like this food and I\'m not going to eat it." According to the client\'s rights, the nurse aide should FIRST:',
        options: [
          'A. Tell the resident that refusing food is not allowed',
          'B. Notify the nurse and document the refusal',
          'C. Replace the tray with a forbidden favourite without telling anyone',
          'D. Insist the resident eat so the aide is not written up'
        ],
        answer: 'B',
        explanation: 'Residents have the right to refuse care and treatment, including food, and the aide\'s role is to respect that right, report the refusal to the nurse, and document it. A and D violate the resident\'s right to refuse and overstep the aide\'s scope. C is unsafe and dishonest — the aide cannot substitute a forbidden food or conceal the refusal. The correct action protects the resident\'s rights while keeping the care team informed.'
      },
      {
        prompt: 'When measuring a resident\'s blood pressure, the nurse aide should:',
        options: [
          'A. Use the smallest cuff that will fit the arm to get a tighter reading',
          'B. Place the cuff over the resident\'s clothing to save time',
          'C. Ensure the resident\'s arm is at heart level and the cuff is the correct size',
          'D. Take the reading immediately after the resident walked up the hall'
        ],
        answer: 'C',
        explanation: 'Accurate blood-pressure measurement requires the correct cuff size and the arm supported at heart level. A is wrong — a too-small cuff falsely raises the reading; B is wrong because the cuff must be on bare skin; D is wrong because activity raises the reading and the resident should rest first. This is a Basic Nursing Skills item, the largest outline block, and it tests the method rather than a fact.'
      },
      {
        prompt: 'A nurse aide enters a resident\'s room to help with morning care. Which action demonstrates proper use of standard precautions?',
        options: [
          'A. Performing hand hygiene before and after the task and wearing gloves for contact with bodily fluids',
          'B. Washing hands only at the end of the shift to save time',
          'C. Reusing gloves between two residents to avoid waste',
          'D. Skipping hand hygiene because the resident has no known infection'
        ],
        answer: 'A',
        explanation: 'Standard precautions apply to every resident regardless of known infection status, so hand hygiene before and after care and glove use for potential exposure are always required. B, C and D each violate standard precautions and would be failed critical elements on the skills evaluation as well as wrong answers on the written test. This principle underlies the hand-hygiene skill that is always assigned.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published 2024 content outline, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NNAAP is delivered at a state-approved test site — often a training facility, a community college, or a vendor-proctored location — and it is a same-day, two-part event: the knowledge test first, then the skills evaluation, typically with a short break between. Arrive with the identification your state registry requires (commonly a government photo ID, and sometimes a second form), and confirm the exact requirement in your handbook, because it varies by state and a mismatch means no exam. Wear clothes that let you demonstrate skills naturally, and avoid anything that interferes with glove use or movement. The knowledge section is a seated, timed, multiple-choice test; the skills evaluation is performed one candidate at a time in front of an evaluator, and it is the part most affected by nerves, so a calm, methodical routine matters more than speed. You will usually learn your knowledge-test result the same day or very soon after, but the skills result and your listing on the state nurse-aide registry may take a few business days to post. Plan transportation and time generously, because the whole appointment — check-in, written test, skills, and any wait between — can run several hours.',
    bring: [
      'The identification your state registry requires — commonly a government-issued photo ID, sometimes a second form; confirm in the handbook',
      'Your eligibility or program-completion paperwork and any ATT/confirmation number',
      'Comfortable clothing and closed, non-slip shoes suitable for demonstrating care skills',
      'Any required documentation of completed training hours (state-dependent)',
      'Reading glasses if you need them for the written test'
    ],
    leave: [
      'Phones and electronic devices in the testing area — usually locked away during the exam',
      'Notes, study sheets or any reference material; the exam is closed-book',
      'Excessive jewelry, long nails or anything that interferes with glove fit or hand hygiene',
      'Strong fragrances, which can distress residents in a care-skills setting',
      'A companion into the testing or skills area; observers are not permitted'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the ID rule, the skill list for your state, the passing standard, and the test-site address. Rehearse hand hygiene and your weakest skills one last time.' },
      { time: 'The morning of', detail: 'Eat and arrive early. A several-hour appointment with a skills wait is easier on a calm stomach and a clear head. Do not cram the skills sequence at the door.' },
      { time: 'Check-in', detail: 'ID verification against your registry record, sign-in, and assignment to a written-test seat or a skills slot.' },
      { time: 'Knowledge test', detail: '70 multiple-choice items in two hours (or the oral version if arranged). Pace to about 100 seconds per item and answer every question.' },
      { time: 'Break', detail: 'A short break before skills; use it to reset and mentally run the care sequence.' },
      { time: 'Skills evaluation', detail: 'You are assigned five skills (hand hygiene plus four random). Perform each with the full sequence: identify, explain, privacy, precautions, safe performance, document, clean up.' },
      { time: 'After', detail: 'Knowledge results are often available same day; skills and registry listing may take a few business days. Some states give a score report showing any failed skills for a retake.' }
    ],
    rules: [
      'Two parts required: a knowledge test (70 items, 2 hours, or the oral alternative) and a skills evaluation of five skills.',
      'Hand hygiene is always one of the five assigned skills; a missed critical element can fail that skill.',
      'Skills are graded on critical elements with no averaging across skills — every assigned skill must pass.',
      'The passing standard is set by your state (commonly ~70-75% on knowledge and satisfactory on every skill); confirm it in your handbook.',
      'Closed-book, no personal devices in the testing area; ID must match your state registry record.',
      'A federal floor of 75 training hours including 16 clinical (often more by state) is required for eligibility.',
      'If you fail, most states allow a defined number of retakes within a eligibility window; read your score report to target the retry.'
    ],
    afterwards:
      'Knowledge-test results are often available the same day, but your official result and your placement on the state nurse-aide registry are posted by the registry and may take a few business days. On a pass, you become a certified nurse aide and are listed on your state registry — that listing, not the exam score, is what employers verify, so confirm it appears and note the renewal/recertification cycle, which varies by state (commonly every two years with required continuing-education or work hours). Keep your certificate and any training documentation. On a fail, most states issue a score report identifying which knowledge area or which skill(s) you missed, and they allow a set number of retakes within an eligibility window; use the report precisely — if you failed a specific skill\'s critical element, rehearse that skill to standard, and if you failed the knowledge section, drill the weak outline area. Do not re-sit on the same preparation; the report tells you exactly where to aim, and a targeted two-week retake plan clears most failures.'
  }
};

export default data;
