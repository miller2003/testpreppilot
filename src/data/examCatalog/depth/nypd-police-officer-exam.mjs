// Depth content for: nypd-police-officer-exam
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Public safety & law enforcement hiring desk',
    bio: 'This desk covers municipal and state law enforcement hiring exams. Exam structure, eligibility and process details come from the administering agency\u2019s official pages — for the NYPD that is the Department of Citywide Administrative Services (DCAS) and NYPD recruitment — and are revised with each exam announcement. Wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code, with the caveat that BLS classifies workers by job duties rather than by employer. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the DCAS-administered NYPD Police Officer written exam, the multi-stage hiring process and the Job Standards Test format against official NYC/DCAS and NYPD recruitment pages; wage context against BLS OOH Police and Detectives (SOC 33-3051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$76,290 median for police and sheriff\u2019s patrol officers (BLS, May 2024)',
    summary:
      'The national median wage for police and sheriff\u2019s patrol officers was $76,290 in May 2024 (BLS, SOC 33-3051), and that is the right benchmark for an NYPD Police Officer candidate because the exam is the entry gate to a patrol-officer occupation. The lowest 10 percent of police and detectives earned less than $48,230 and the highest 10 percent more than $120,460 in the same period, and BLS counted 698,800 patrol-officer jobs in 2024 with employment projected to grow 3 percent from 2024 to 2034 — about 53,700 openings over the decade, almost all arising from replacement need as officers retire or transfer. Read the national median with two strong caveats. First, NYPD pay is set by a collective bargaining contract, not the national market: starting and top-of-scale figures for New York City officers differ meaningfully from the national median, so check the department\u2019s published salary schedule rather than assuming the national number applies to the five boroughs. Second, BLS classifies workers by job duties, not by employer, so the $76,290 figure spans every patrol officer in the country, from small-town departments to large metropolitan forces like the NYPD. The credential logic is straightforward: the exam produces no wage premium by itself — the wage belongs to the job, and the exam is simply the competitive gate to reach it. The applicant pool is very large, with tens of thousands of candidates per exam cycle for a department of roughly 33,000 officers per the NYPD\u2019s recruiting pages, so the realistic reading of the salary data is less about the median than about the competition to reach it.',
    rows: [
      { label: 'Median annual wage, police and sheriff\u2019s patrol officers', value: '$76,290', note: 'BLS OOH, SOC 33-3051, May 2024' },
      { label: 'Lowest 10 percent, police and detectives', value: 'Under $48,230', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent, police and detectives', value: 'Above $120,460', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, patrol officers, 2024', value: '698,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected openings, 2024-2034', value: '~53,700 over the decade', note: 'BLS/O*NET projection, nearly all replacement need' }
    ],
    growth: 'BLS projects 3 percent growth for patrol officers from 2024 to 2034, with roughly 53,700 openings over the decade, almost entirely from replacement need.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Police and Detectives',
      url: 'https://www.bls.gov/ooh/protective-service/police-and-detectives.htm'
    }
  },
  passRate: {
    headline: 'No pass rate is published — the NYPD exam is a ranked civil-service list, not a pass/fail credential',
    summary:
      'No pass rate is published for the NYPD Police Officer exam, and we state that plainly: the Department of Citywide Administrative Services (DCAS), which administers the written exam, does not release pass-rate statistics, and the exam is scored as a competitive civil-service list rather than a pass/fail credential, so a single percentage would not even be a meaningful headline. What is published is the structure of the process. Candidates who pass the written exam are placed on a list ranked by score, and appointment depends on list number, departmental hiring needs, and completion of every later stage: the medical exam, the written and oral psychological exams, the background and character investigation, the Job Standards Test (a continuous physical course with a 4-minute-28-second pass time), and drug and alcohol screening. Because hiring is by list, the practical question is not what share of candidates passes but how high a score you need to be reached before the list expires — a cutoff figure DCAS announces for each exam after the list is established. The written exam measures cognitive ability, observational skills and memory as the first screen, and each later stage filters the pool further, so the effective rate of full appointment is lower than the written-exam pass rate precisely because so many stages follow it. The honest framing: no official percentage exists, a competitive list makes raw score matter more than a pass/fail line, and the correct target is the highest achievable score rather than a minimum. The final implication of the ranked-list model is that no candidate knows where the effective line sits until the eligible list is released, so the only rational preparation is to maximise raw score — every additional correct answer is real rank, and candidates who stop studying at "ready to pass" leave list positions on the table that the candidates ranked just above them will take. That is why every element of the process, from the written score to the physical and medical stages, should be treated as a competitive hurdle rather than a checkbox, and why a strong written score matters even for candidates who cleared it comfortably on a first pass.',
    source: {
      label: 'DCAS - NYPD Police Officer exam announcements and NYPD recruitment',
      url: 'https://www.nyc.gov/site/dcas/employment/police-officer.page'
    },
    caveat:
      'DCAS and the NYPD do not publish pass-rate statistics for the Police Officer exam; the exam produces a ranked list, and we have deliberately left the pass-rate table empty rather than citing a third-party estimate.'
  },
  studyPlan: {
    summary:
      'The NYPD written exam is a competitive civil-service test of cognitive ability, observational skills and memory, so the study plan runs 30 to 50 hours over four to six weeks and treats a high list number rather than a bare pass as the goal. Week 1 is reconnaissance: read the current DCAS exam announcement cover to cover for eligibility, deadlines and the allowed materials, and take the free DCAS practice exam to baseline. Weeks 2-3 build the three tested skills: reading comprehension and following written instructions (the exam rewards careful, literal reading under time pressure), memorization and recall of visual and written details (the memory items require retaining specifics from a presented scenario or image), and observation and situational judgment (recognizing what an officer would reasonably do in a described field situation). Week 4 shifts to speed work, because the exam is a fixed clock and the ranked-list format means the number of correct answers is everything. Week 5 adds the rest of the pipeline: the Job Standards Test is a physical course with a pass time of 4 minutes 28 seconds, so build running, stair climbing and functional strength alongside the written prep rather than leaving it for after the exam. Week 6 is two timed full practice exams and a gap-closing pass. The biggest planning error is treating the written exam as the whole job — candidates who pass the written exam then face medical, psychological, background and drug screenings, and the total timeline from application to academy entry commonly runs six to twelve months.',
    totalHours: '30-50 hours over 4-6 weeks, plus concurrent physical conditioning for the JST',
    weeks: [
      { label: 'Week 1', focus: 'Announcement and baseline', tasks: ['Read the current DCAS exam announcement for eligibility and deadlines', 'Take the free DCAS practice exam to baseline', 'Log weak item types from the practice run'], hours: 6 },
      { label: 'Weeks 2-3', focus: 'The three tested skills', tasks: ['Drill reading comprehension and following written instructions', 'Practise memorization and recall of visual and written details', 'Work situational-judgment and observation items'], hours: 12 },
      { label: 'Week 4', focus: 'Speed and accuracy', tasks: ['Timed drills on every item type', 'Find the pace that maximises correct answers per hour', 'Review every miss and rework the reasoning'], hours: 10 },
      { label: 'Week 5', focus: 'The full pipeline', tasks: ['Begin a JST-style training plan: running, stairs, push-ups, core', 'Collect medical, psychological and background documents', 'Confirm residency, ID and application fee requirements'], hours: 8 },
      { label: 'Week 6', focus: 'Timed full exams', tasks: ['Two full timed practice exams at real length', 'Re-lab every miss rather than re-reading it', 'Final review of instructions and eligibility checklist'], hours: 10 }
    ],
    variants: [
      { label: 'Active-duty or veteran candidate', detail: 'Military service can waive the 24-credit education requirement and, in some cases, extend the age limit by up to six or seven years; confirm the current DCAS rules for the specific exam cycle.' },
      { label: 'Candidate with the 24 college credits already', detail: 'You meet the education requirement; spend the recovered time on the physical Job Standards Test training that candidates routinely neglect.' }
    ]
  },
  prepStrategies: {
    summary:
      'The NYPD written exam rewards careful reading, disciplined observation and speed, and the dominant strategy is to practise exactly the item styles DCAS publishes. First, use the free official DCAS practice exam as the core tool: it is the closest published match to the real item format, and candidates who take it cold, then drill the item types they missed, outperform those who study generic civil-service books. Second, treat reading comprehension as a literal-reading skill rather than a reasoning skill — the exam tests whether you can extract exactly what the passage says and follow multi-step written instructions precisely, and the fastest way to lose points is reading meaning into the text. Third, build memorization deliberately: the memory items require holding details from a presented scenario or image, so practise recall drills under a timer and learn to write shorthand notes during the review period the exam allows. Fourth, manage the clock aggressively — this is a ranked-list exam, so a steady, complete pace beats a slow, perfect one, and leaving items blank is the only guaranteed wrong answer. Fifth, prepare the physical pipeline concurrently: the Job Standards Test has a published pass time and it is a pass/fail filter many written-only candidates fail, so running, stair climbing and functional strength belong in the plan from week one. Finally, treat the later stages as part of the prep: assemble identification, medical history and background documents before the exam so a paperwork delay does not cost you a list position. Finally, treat test-day execution as part of the preparation: arrive with the exact identification and admission materials the announcement requires, work the items in order, and keep a steady pace rather than second-guessing — on a machine-scored exam, changed answers rarely help and time wasted on re-reading items is rank lost. A candidate who treats the written exam as one stage of a multi-stage, competitive process, rather than as an isolated test to clear, is the candidate who converts preparation into an appointment.',
    items: [
      { title: 'Drill the official DCAS practice exam', detail: 'The free published practice exam is the closest match to the real item format; use it cold, then drill the types you missed.' },
      { title: 'Read literally', detail: 'The exam tests exact extraction and multi-step written instructions; reading meaning into the text loses points.' },
      { title: 'Train memory under a timer', detail: 'Memory items reward holding details from a scenario or image; practise timed recall and shorthand notes.' },
      { title: 'Race the clock deliberately', detail: 'A ranked list makes completed answers everything; steady pacing beats slow perfection.' },
      { title: 'Prepare the JST alongside', detail: 'The physical course has a 4:28 pass time and filters out written-only candidates; train running and stairs from week one.' },
      { title: 'Assemble paperwork early', detail: 'Medical, psychological, background and residency documents should be ready before the written exam, not after.' }
    ]
  },
  resourceComparison: {
    summary:
      'NYPD exam prep is inexpensive because the official materials are free and the exam itself is a low-cost civil-service application. The DCAS announcement and free practice exam are the authoritative sources and cost nothing. NYPD recruitment pages add the eligibility and process details. The application fee for the Police Officer exam is roughly $40, with waivers for qualifying candidates, and a fingerprinting fee applies later in the process. Beyond that, commercial civil-service prep books and courses range from about $20 to $200, and their value is mostly practice volume; the free official practice exam remains the best format match. A physical training plan for the Job Standards Test can be done free with running and bodyweight work. The honest budget is under $100 in fees and materials for most candidates, before the later-stage costs such as fingerprinting. Prices below are current as of mid-2026 and subject to change with each exam announcement; we rank nothing by commission. The pattern to notice is how little the paid options add on top of the free official core: the DCAS announcement, the free practice exam and the NYPD recruitment pages give a candidate everything needed to understand the format and the process, and the commercial materials primarily add repetition. For most candidates the correct buying sequence is the free official practice exam first, a commercial question bank or book only if additional volume is needed, and a prep course only if a structured schedule is the difference between studying and not studying. The physical side of the process has a similar shape: the Job Standards Test requires no gym membership to train for, because running, stair climbing and bodyweight work cover the movements the course tests, and the agency\u2019s own materials describe the course in detail. The one cost candidates routinely underestimate is time rather than money: from application to academy entry, the process commonly spans six to twelve months, and the fees attached to later stages, such as fingerprinting, are separate from the application fee.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DCAS exam announcement and free practice exam', values: ['Free', 'Official PDF and online practice', 'The authoritative format and eligibility rules'] },
      { label: 'NYPD recruitment pages', values: ['Free', 'Official website', 'Process steps, requirements and current deadlines'] },
      { label: 'Police Officer exam application fee', values: ['~$40 (waivers available)', 'DCAS application', 'The exam itself'] },
      { label: 'Civil-service prep books', values: ['~$20-40', 'Printed book', 'Extra practice volume beyond the official exam'] },
      { label: 'Commercial prep courses', values: ['~$50-200', 'Online course', 'Structured pacing for candidates who need it'] },
      { label: 'Self-built JST training plan', values: ['Free', 'Running, stairs, bodyweight', 'Passing the 4:28 physical course'] }
    ],
    footnote: 'Prices current as of mid-2026; application and fingerprinting fees are set by DCAS/NYPD for each exam cycle and waivers exist for qualifying candidates. No commission-based ranking.'
  },
  commonMistakes: {
    summary:
      'The most common NYPD mistake is treating the written exam as the entire process: candidates pass the written test and then fail the Job Standards Test or stall in the medical, psychological and background stages, all of which are pass/fail filters on the way to the academy. The fix is to train for the physical course and assemble documentation while the written prep runs. The second mistake is studying generic civil-service material instead of the free DCAS practice exam, which is the closest published match to the real item format. Third, candidates misread the scoring: because the result is a ranked list, a bare pass is not the goal — the score determines your list position, so finishing fast at the expense of accuracy and skipping items both cost real rank. Fourth, many candidates rush the reading-comprehension items by reading for gist instead of extracting exact details, which is the exam\u2019s core demand. Fifth, memory items are neglected entirely by candidates who never practise timed recall. Finally, paperwork errors are common and silent killers: missed deadlines, the wrong ID, or a residency or education requirement not met by the appointment date can remove a candidate who scored well. The seventh and subtlest mistake is misreading what the exam is for: because the result is a ranked list rather than a pass/fail, candidates who aim for a passing score rather than the highest score they can post are competing against themselves instead of against the pool, and the difference between a comfortable pass and a top-third score is exactly the difference between waiting for a list to expire and receiving an appointment. Candidates who treat the medical, psychological and background stages as pro-forma also underestimate them: the psychological evaluation in particular is a genuine filter, and preparation here means honesty and consistency in every document and interview rather than rehearsed answers. The final recurring error is timeline: candidates who begin the process without confirming the current announcement\u2019s deadlines, fee and eligibility end up missing a cycle and losing six months or more, which a ten-minute read of the DCAS announcement prevents.',
    items: [
      { mistake: 'Preparing only for the written exam', fix: 'Train for the JST and assemble medical, psychological and background documents concurrently.' },
      { mistake: 'Skipping the free DCAS practice exam', fix: 'Use the official practice exam cold, then drill the item types you missed.' },
      { mistake: 'Aiming for a bare pass', fix: 'The ranked list makes score the whole game; never skip and never rush the finish.' },
      { mistake: 'Reading for gist, not detail', fix: 'The exam tests exact extraction and following written instructions literally.' },
      { mistake: 'Neglecting memory items', fix: 'Practise timed recall and shorthand note-taking in the prep weeks.' },
      { mistake: 'Letting paperwork slip', fix: 'Confirm deadlines, ID, residency and the education or military requirement before the exam.' }
    ]
  },
  questionTypes: {
    summary:
      'The DCAS-administered NYPD Police Officer written exam is a timed multiple-choice test built around the abilities DCAS publishes for the position: reading comprehension and following written instructions, memorization and observation, and situational judgment in law enforcement contexts. Items are single-select multiple choice, and the exam is scored by the number of correct answers, which determines the candidate\u2019s position on the ranked eligible list. Reading items present a passage and ask for exact, literal information or the correct application of a written procedure. Memory and observation items present a scenario, image or set of details and ask what the candidate should recall from it. Situational-judgment items describe a field situation and ask what an officer should do first or which action is most appropriate, testing judgement rather than memorised law. Because the written exam is only the first screen, none of these item types maps to a single pass/fail threshold; the objective is the highest total score the clock permits. Within the reading items, expect the exam to test the ability to follow written instructions and procedures as they appear in departmental materials, which rewards precise, literal reading rather than inference. The memorization items typically present a scenario or image for a set review period and then ask specific recall questions, so candidates should practise taking structured notes during the allowed review time. The situational-judgment items are the closest the written exam comes to measuring field judgement: they describe a plausible incident and ask which action is most appropriate, and the correct choice follows from the priorities a police officer is trained to apply — safety first, assess before acting, and escalate when required. Because the exam is machine-scored and time-limited, the strategy across all three types is the same: move steadily, mark uncertain items mentally, and never leave a question blank. Candidates who understand the three ability areas as distinct skills, each trainable in isolation, prepare more efficiently than those who treat the exam as a single vague reading test. Samples below are editor-written illustrations of the published ability areas, not live exam items.',
    types: [
      { name: 'Reading comprehension and written instructions', share: 'A large, foundational block', detail: 'Passages followed by exact, literal questions; multi-step written instructions to apply precisely.' },
      { name: 'Memorization and observation', share: 'A significant block', detail: 'Recall of details from a presented scenario or image within the exam\u2019s memory format.' },
      { name: 'Situational judgment', share: 'A meaningful block', detail: 'What an officer should do first in a described field situation; judgement, not memorised law.' }
    ],
    samples: [
      {
        prompt: 'An officer is completing an incident report. The department requires that the report include the time the incident was reported, the location, and the names of all witnesses before it is submitted. Which entry is required before the report can be submitted?',
        options: ['A. The witness names', 'B. The suspect\u2019s prior record', 'C. The weather at the scene', 'D. The patrol car\u2019s mileage'],
        answer: 'A',
        explanation: 'The rule states the report must include the report time, location and the names of all witnesses before submission, so witness names are required. The other items are not listed as required for submission.'
      },
      {
        prompt: 'A caller reports a suspicious vehicle. The officer\u2019s dispatcher asks the officer to note the vehicle\u2019s colour, licence plate and the number of occupants before approaching. The officer should:',
        options: ['A. Note the three requested details before approaching', 'B. Approach immediately to speak with the driver', 'C. Call for backup and do nothing else', 'D. Write down only the licence plate'],
        answer: 'A',
        explanation: 'The dispatcher\u2019s request is explicit: record colour, licence plate and occupant count before approaching. Answering with the three details demonstrates following the written instruction, which is exactly what this ability area tests.'
      },
      {
        prompt: 'An officer observes two people arguing loudly in a public park at night. The officer has not yet determined whether a crime is occurring. The most appropriate first action is to:',
        options: ['A. Approach and assess the situation to determine if intervention is needed', 'B. Arrest both people immediately', 'C. Leave the area and continue patrol', 'D. Search both people without asking'],
        answer: 'A',
        explanation: 'With no confirmed crime, the reasonable first step is to approach and assess — observing, identifying and deciding whether intervention is warranted. Immediate arrest, ignoring the situation, or searching without basis are all disproportionate to the facts described.'
      },
      {
        prompt: 'A memory item presents a photograph of a street corner for 30 seconds. The most effective way to maximise recall for the questions that follow is to:',
        options: ['A. Study the scene systematically, noting details by category such as people, vehicles and signage', 'B. Focus only on the centre of the image', 'C. Memorise the colours one at a time', 'D. Close your eyes and repeat the street name'],
        answer: 'A',
        explanation: 'Systematic categorised observation spreads attention across the whole scene and produces the most usable recall. Concentrating on one spot or one feature leaves the majority of the image unrehearsed, which is how candidates miss tested details.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published ability areas, not live exam items.'
  },
  examDay: {
    summary:
      'The NYPD Police Officer written exam is administered by DCAS at designated test sites on the date printed in your admission notice, and the core rule is to follow that notice exactly: it states your site, your reporting time, the identification you must bring and the materials that are prohibited. Plan to arrive well before the reporting time, because late arrivals are not seated and a missed appointment means waiting for the next exam cycle. Bring the printed admission ticket or confirmation, a valid government-issued photo ID matching your registration name, and your DCAS account details in case check-in cannot locate the booking; leave phones, smartwatches, notes and personal bags at home or in your vehicle, because electronic devices are not permitted in the testing room. The exam itself is a timed, machine-scored multiple-choice test, so wear comfortable clothing and bring nothing else to the desk. After the exam, DCAS scores the paper and establishes the ranked eligible list, and candidates learn their score and list number through their DCAS account; reaching the list is not an appointment — the medical, psychological, background and Job Standards Test stages follow, and the whole process commonly runs six to twelve months from application to academy entry. Use that waiting period deliberately: train for the 4-minute-28-second Job Standards Test and keep your documents current. The exam itself is a machine-scored, multiple-choice session, so the skills that matter on the day are the ones you built in practice: reading items literally, managing the clock, and completing every question rather than leaving blanks. There is a small but meaningful set of behaviours that separate prepared candidates: verifying the site address and transit time the day before, arriving dressed for a long seated session, and keeping the admission notice within reach in case any detail is questioned at check-in. After the exam, resist the urge to obsess over the outcome — the score and list number appear in your DCAS account when the list is established, and nothing done after the exam changes them, while the weeks that follow are better spent preparing for the medical, psychological, background and physical stages that decide whether a good list number becomes an appointment.',
    bring: [
      'Your printed admission ticket or exam confirmation with the site and time',
      'A valid government-issued photo ID matching your registration name exactly',
      'Your DCAS account and application numbers in case check-in cannot find the booking',
      'A quiet reading/training plan for the week of the exam — the exam is machine-scored, so pacing is the skill',
      'Appropriate clothing for a timed seated test'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — not permitted in the testing room',
      'Notes, books and any study materials',
      'Personal bags beyond what the site allows; keep them locked in your vehicle if possible',
      'Food and drink beyond what the test site permits',
      'Any documentation you are not instructed to bring — follow the admission notice literally'
    ],
    timeline: [
      { time: 'Days before', detail: 'Re-read the admission notice: site, reporting time, ID requirements and prohibited items. Confirm travel time.' },
      { time: '1 hour before', detail: 'Arrive at the site. Late arrivals are not seated and forfeit the attempt for this cycle.' },
      { time: 'Check-in', detail: 'ID verification and seat assignment. Electronics are stored or left outside the room.' },
      { time: 'The exam', detail: 'A timed, machine-scored multiple-choice test. Work steadily, skip nothing, and keep the clock in view.' },
      { time: 'After the exam', detail: 'DCAS scores the paper and publishes the eligible list with your score and list number in your DCAS account.' },
      { time: 'The weeks after', detail: 'Prepare for the medical, psychological, background and Job Standards Test stages while the list is active.' }
    ],
    rules: [
      'Follow the admission notice exactly; it sets the site, time, ID and prohibited items for your cycle.',
      'The exam is machine-scored; the number of correct answers determines your position on the ranked list.',
      'Electronic devices are not permitted in the testing room.',
      'A passing written score is not an appointment — every later stage must be passed as well.',
      'The Job Standards Test has a published pass time of 4 minutes 28 seconds.',
      'Candidates must meet eligibility at appointment, not just at application: age, residency, ID and the education or military requirement.'
    ],
    afterwards:
      'Within weeks of the exam, DCAS establishes the ranked eligible list and your score and list number appear in your DCAS account. That number, not the pass/fail result, is the currency of the process: list positions are reached in score order as the department hires, and the list has a fixed lifespan, so a higher score means a real chance of an appointment before it expires. While you wait, treat the remaining stages as scheduled work rather than surprises — schedule nothing that conflicts with medical and psychological appointments, keep your background information truthful and complete, and train specifically for the Job Standards Test, whose 4-minute-28-second pass time is the most common physical filter for candidates who prepared only for the written paper. If you are not reached before the list expires, your score carries over only by re-taking the exam in a future cycle, so plan the next announcement date the day you see your list number. On appointment, academy training runs roughly six months before field training and probation begin, and the salary schedule that matters to you is the NYPD contract, not the national BLS median quoted on this page.'
  }
};

export default data;
