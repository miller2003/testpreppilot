// Depth content for: faa-air-traffic-controller
// The AT-SA is the FAA aptitude screening gate in the air traffic controller hiring process.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Government & civil-service assessments desk',
    bio: 'This guide is compiled by our government and civil-service assessments desk. Air traffic controller hiring is run through USAJOBS vacancy announcements and is governed by FAA hiring policy, which changes by bid cycle, so we track the active announcement and state plainly which parts of the process are published and which are not. The Air Traffic Skills Assessment (AT-SA) itself is a proprietary, FAA-validated aptitude instrument; the FAA does not publish pass rates, item-level detail, or raw scoring formulas, and we do not pretend otherwise. Wage figures come from the Bureau of Labor Statistics occupational series that matches the job, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, hiring bands, and eligibility were checked against FAA hiring-policy pages, the official AT-SA invitation language, and the Department of Transportation Office of Inspector General report on ATSA validation.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$144,580 median for air traffic controllers (BLS, May 2024) — among the highest-paid federal civilian occupations, gated by an aptitude screen, not a test of aviation knowledge',
    summary:
      'The AT-SA is a pre-employment aptitude assessment, not a certification that leads to a job title, so the salary story is the occupation it gates: air traffic controllers (SOC 53-2021), who earned a median of $144,580 in May 2024 per the BLS Occupational Outlook Handbook. That puts the occupation well above the all-occupation median of $49,500 and in the same range as high-end technology and medical roles. The distribution is worth reading carefully because the wage ladder is defined by the FAA, not by the market: the lowest 10 percent of controllers earned under $76,090 in May 2024, the highest 10 percent earned more than $210,410, and the federal government \u2014 the dominant employer \u2014 paid a median of about $154,000. Pay climbs as trainees complete successive levels: academy trainees start on a training wage, and the FAA states that certified controllers commonly pass $155,000 within about three years of academy graduation, with location and facility complexity driving the spread above that. BLS counted about 24,100 air traffic controller jobs in 2024 and projects essentially flat employment (1 percent growth) from 2024 to 2034, with roughly 2,200 openings a year arising almost entirely from retirements and attrition. That flatness is the key planning fact: this is not a growing occupation, but it is a strongly paid one, and the binding constraint is getting hired \u2014 which is exactly what the AT-SA sits in front of. The FAA hires in occasional, large, off-the-street vacancy windows rather than continuously, so applicants must wait for a USAJOBS announcement and meet hard eligibility rules, including U.S. citizenship and being under 31 at application for those without prior air traffic experience.',
    rows: [
      { label: 'Median annual wage, air traffic controllers', value: '$144,580', note: 'BLS Occupational Outlook Handbook, May 2024 ($69.51/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $76,090', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $210,410', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Federal government median', value: '~$154,000', note: 'BLS OOH Pay tab, May 2024 \u2014 the dominant employer' },
      { label: 'Employment, 2024', value: '24,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~2,200 per year', note: 'BLS OOH Job Outlook, 2024-34 \u2014 mostly replacement need' }
    ],
    growth: '1% projected change 2024-34 (little or no change), with ~2,200 replacement-driven openings a year; the constraint is the competitive hiring pipeline, not headcount growth',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Air Traffic Controllers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/air-traffic-controllers.htm'
    }
  },
  passRate: {
    headline: 'The FAA publishes no AT-SA pass rate \u2014 instead it publishes hiring bands: recent campaigns require Well-Qualified (about 85 percent or above) to advance',
    summary:
      'There is no published pass rate for the Air Traffic Skills Assessment, and there never has been. The FAA does not release aggregate candidate outcomes for the AT-SA, and third-party estimates circulating online are unverified. What the FAA does publish is more useful: the hiring bands it uses to sort applicants. The DOT Office of Inspector General\u2019s review of the ATSA (the test\u2019s predecessor-era validation work) documented that FAA groups scores into Best Qualified (90 percent or above), Well Qualified (85-89 percent), and Qualified (70-84 percent), and FAA hiring-page language for recent off-the-street bids has stated that a Well-Qualified result is required to advance in the process. Treat the exact cut points as announcement-dependent, because the FAA can adjust them between hiring cycles, but treat the strategic implication as stable: this is a competitive, rank-ordered screen, not a pass/fail hurdle where any qualifying score will do. A strong band improves referral odds but guarantees nothing \u2014 thousands of applicants apply to each open bid, and the FAA then weighs medical, security, and academy performance before a controller is actually hired. The assessment itself runs about 3.5 hours at a Pearson VUE center and deliberately tests no aviation knowledge; it measures memory, numerical reasoning, spatial reasoning, multitasking under time pressure, decision-making, reading comprehension, logical reasoning, and a biographical/personality component. Because the FAA treats the instrument as protected test content, do not trust anyone selling "actual AT-SA questions," and do not spend study time on controller procedure manuals \u2014 the skills the assessment samples are the ones to practise.',
    source: {
      label: 'FAA Air Traffic Control Hiring \u2014 official program page',
      url: 'https://www.faa.gov/atc-hiring/'
    },
    caveat:
      'The FAA does not publish AT-SA pass rates or aggregate scores. Published material is limited to the hiring bands described in FAA campaign language and the DOT OIG\u2019s ATSA review, and band thresholds can change between vacancy announcements. We have deliberately left any pass-rate percentage out of this table.'
  },
  studyPlan: {
    summary:
      'Plan for four to six weeks of targeted practice at 4-6 hours a week for the AT-SA, and understand that the preparation is for a cognitive skills test, not an aviation-knowledge exam. The assessment runs about 3.5 hours at a Pearson VUE center and samples memory, mental math, spatial reasoning, a radar-style collision-prevention simulation, logical reasoning, reading comprehension, and a biographical component. There is no official FAA syllabus and no licensed question bank, so your study plan should mirror the skill list, not a textbook. The most important hardware decision comes first: many sections force numeric-keypad input with no mouse, so spend the first week drilling 10-key speed and accuracy on a number pad until it is automatic \u2014 candidates lose points to the clock, not to the math. Week one should also include a realistic timed diagnostic so you can see which skill blocks drag you down. Weeks two through four are the core: alternate between focused drill on individual skill types (number differences, variable memory, spatial rotation, reading speed) and mixed timed sets that force you to switch demands, because the real test is a marathon of shifting tasks. The collision-prevention radar simulation deserves its own dedicated sessions \u2014 it is the section candidates most often describe as overwhelming, and it rewards a rehearsed strategy of prioritising the nearest conflicts rather than reacting to everything. Week five should shift to full 3.5-hour dress rehearsals under test conditions, with no scratch paper, since the FAA provides none and all working must happen in your head. Week six is taper: light mixed practice, sleep discipline, and confirming your test-centre logistics. You can only sit the assessment when the FAA invites you after you apply to an open bid, so your calendar is built backward from the invitation window the announcement specifies.',
    totalHours: '24-36 hours over 4-6 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Hardware, baseline, and diagnosis',
        tasks: [
          'Build 10-key numeric-pad speed and accuracy \u2014 many sections allow no mouse, so this is your answer device',
          'Take a full-length timed diagnostic to map which skill blocks are weakest',
          'Practise number-difference and quick-arithmetic drills daily',
          'Confirm your eligibility and application status for the current USAJOBS bid and the invitation window'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Memory and mental math',
        tasks: [
          'Drill variable-memory tasks where values shift and you must recompute under time pressure',
          'Practise holding multi-part instructions and relationships in working memory',
          'Move from untimed accuracy to timed speed gradually \u2014 accuracy first, then pace',
          'Log every error type so you can see whether misses are memory or arithmetic failures'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Spatial and collision-prevention skills',
        tasks: [
          'Practise spatial rotation and visual-relationship tasks from different viewpoints',
          'Begin the radar-style collision simulation \u2014 learn to prioritise the nearest conflicts and ignore noise',
          'Rehearse calm responses to intentional overload; the section is designed to pressure you',
          'Time yourself: the goal is sustained performance, not one perfect run'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Reading, logic, and mixed switching',
        tasks: [
          'Drill rapid reading comprehension with short passages and quick decisions',
          'Practise logical reasoning and rule-following under a clock',
          'Run mixed sets that rotate task types every few minutes to simulate the real switching load',
          'Revisit your week-one weak areas with the drills that specifically target them'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Full dress rehearsals',
        tasks: [
          'Complete two full ~3.5-hour simulations under test conditions',
          'Do all working in your head \u2014 no scratch paper, exactly like the real environment',
          'Practise the personality/biographical section honestly and consistently',
          'Review where pacing broke down and rebuild a time-budget strategy'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Taper and logistics',
        tasks: [
          'Light mixed practice only \u2014 no new material, no cramming',
          'Confirm the test centre address, check-in rules, and required ID',
          'Prioritise sleep across the last three days; the assessment is an endurance test',
          'Prepare your mind for the band result, not a pass/fail verdict'
        ],
        hours: '3-4 hrs'
      }
    ],
    variants: [
      { label: 'Air traffic collegiate training initiative (CTI) graduate', detail: 'CTI graduates follow a Track 1 path with defined hiring steps and, in some cycles, reduced experience expectations. Preparation time is the same 4-6 weeks; the difference is your pipeline. Track the FAA\u2019s CTI-specific guidance for the active bid.' },
      { label: 'Prior military or prior ATC experience', detail: 'Candidates with prior controller or military air traffic experience may qualify under a different track or age rule. You may need less skill drilling \u2014 focus on the written subtest formats you have not seen in years, especially the radar simulation.' },
      { label: 'Completely new to air traffic work', detail: 'Give yourself 6-8 weeks. The skills are learnable but the mixed-task stamina is not; add a week of pure 10-key work and an extra dress rehearsal before test day.' }
    ]
  },
  prepStrategies: {
    summary:
      'The single highest-yield strategy for the AT-SA is to rehearse the exact cognitive demands the FAA names, under the exact conditions \u2014 timed, numeric-keypad input, no mouse in several sections, no scratch paper, and several hours of sustained effort. Reading about memory tasks or watching someone else run a radar simulation produces candidates who recognise the format but cannot hold up for 3.5 hours. Build accuracy first and speed second: the fastest way to lose the assessment is to practise fast-but-wrong until it becomes a habit. Practise task switching deliberately, because the real test rotates demands the way a live position does. Treat the collision-prevention simulation as its own discipline with a rehearsed prioritisation rule, rather than reacting to every blip. Sleep is a test-prep tool here \u2014 the FAA explicitly designs the assessment to be gruelling, and a rested, calm candidate beats a crammed one. And be disciplined about what you do not study: no aviation procedure manuals, no radar phraseology, no tower operations, because none of it is on the assessment, and the FAA has said plainly that the AT-SA is a measure of aptitude and multitasking, not knowledge.',
    items: [
      {
        title: 'Master the numeric keypad before anything else',
        detail: 'Several sections do not accept mouse input and expect fast, accurate 10-key entry. If you are hunting for keys, the clock eats you. Spend your first week on daily 10-key drills until entry is automatic, then keep a light warm-up in every session.'
      },
      {
        title: 'Do all working memory arithmetic in your head',
        detail: 'The test centre provides no pen or scratch paper, and FAA material describes no note-taking. Practise computing number differences, variable substitutions, and quick arithmetic entirely mentally from week one, so you never discover the constraint for the first time on test day.'
      },
      {
        title: 'Rehearse the collision simulation with a prioritisation rule',
        detail: 'The radar-style section is the one candidates most often call overwhelming. Develop a fixed rule \u2014 resolve the nearest or most imminent conflict, ignore everything else, then reassess \u2014 and drill it until it is automatic. Panic is the failure mode, not speed.'
      },
      {
        title: 'Practise switching, not just individual skills',
        detail: 'The AT-SA is a marathon of shifting task types. A candidate who only drills number-difference exercises in isolation will fatigue when the format changes every few minutes. Run mixed sets that rotate memory, spatial, reading, and logic tasks under a clock.'
      },
      {
        title: 'Treat the personality component as honest and consistent',
        detail: 'The biographical/personality section has no right answers, but inconsistent responses are flagged. Answer as your actual work self \u2014 calm under pressure, decisive, rule-following \u2014 rather than as the candidate you imagine the FAA wants, because consistency is part of what is evaluated.'
      },
      {
        title: 'Run at least two full dress rehearsals',
        detail: 'A 3.5-hour cognitive marathon is an endurance event. Schedule two complete timed simulations in the final two weeks, under realistic conditions, and review where pacing and stamina broke down. The rehearsal is the only way to learn what sustained attention actually costs you.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'There is no official FAA study guide for the AT-SA and no licensed question bank, which is exactly why the resource decision matters \u2014 the market is full of third-party simulators of widely varying fidelity, and the FAA publishes no real items for them to mirror. Your cheapest and most defensible resources are the free skill drills you can build yourself (10-key practice, mental arithmetic, reading speed) plus the FAA\u2019s own hiring-page description of the skill areas. The only fee that is mandatory is the assessment itself, and current FAA hiring language indicates invited candidates are not charged for the AT-SA; any commercial product you buy is entirely optional. Commercial AT-SA prep packages range from around $20 practice-test products to several hundred dollars for a full simulator plus coaching, and the honest evaluation is that the simulator fidelity \u2014 especially on the radar and spatial sections \u2014 is the variable worth paying for if you pay for anything. The personality component needs no commercial product at all. Your employer will not reimburse this; the FAA does not sponsor prep. Treat third-party pass-rate claims with suspicion, because those figures cannot be sourced, and check the FAA\u2019s current hiring page before buying anything to confirm the assessment still matches the description.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'The AT-SA itself (invited candidates)', values: ['No fee per current FAA hiring language', 'In-person, Pearson VUE, ~3.5 hours', 'The only mandatory step \u2014 invited after applying to an open bid'] },
      { label: 'FAA ATC hiring page', values: ['Free', 'Official web page', 'The skill list, eligibility rules, and current bid requirements \u2014 read this first'] },
      { label: 'Free 10-key and mental-math drills', values: ['Free', 'Browser apps and typing sites', 'Building the hardware and arithmetic fluency the test assumes'] },
      { label: 'Commercial AT-SA practice tests', values: ['~$20-60', 'Online question sets', 'Cheap format familiarisation; treat with caution since real items are protected'] },
      { label: 'Full AT-SA simulator packages', values: ['~$100-400', 'Interactive software with timed modules', 'The radar/spatial simulation experience \u2014 the one thing worth paying a premium for'] },
      { label: 'ATC prep books and PDF guides', values: ['~$15-40', 'Print or ebook', 'Background on the hiring process, not licensed test content \u2014 read for process, not items'] },
      { label: 'Controller procedure manuals', values: ['Varies', 'Print or PDF', 'Avoid for prep \u2014 the FAA states the AT-SA is not a knowledge test'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate. The FAA does not endorse any commercial prep product, and AT-SA items are protected test content, so any seller claiming "real questions" is misrepresenting the source. Confirm current hiring language on the FAA page before buying anything.'
  },
  commonMistakes: {
    summary:
      'The most damaging mistakes on the AT-SA are about preparation strategy, not intelligence \u2014 studying the wrong material, neglecting the numeric keypad, and failing to rehearse the endurance conditions. The most common single error is spending weeks on aviation-knowledge material, which the FAA explicitly says is not tested, while ignoring the memory, math, and multitasking skills that actually carry the assessment. A close second is preparing exclusively with untimed single-skill drills and never simulating the mixed, timed, mouse-free environment, so the first time a candidate feels the real load is on test day. Candidates also routinely under-practise the collision-prevention simulation, panic under its designed overload, and lose entire sections to an unprioritised scramble. The personality component trips up people who answer as an imagined ideal rather than consistently, producing flagged responses. And many applicants misunderstand the result entirely: they treat a Qualified band as a pass, when recent campaigns have required Well-Qualified to advance \u2014 so they apply, score, and never move forward because they aimed at the wrong target.',
    items: [
      {
        mistake: 'Studying aviation knowledge and controller procedures',
        fix: 'The FAA states the AT-SA is an aptitude assessment, not a knowledge test. None of the separation standards, phraseology, or facility procedures you might study appear on it. Replace that time with memory, mental-math, spatial, reading-speed, and multitasking practice.'
      },
      {
        mistake: 'Preparing only with untimed single-skill drills',
        fix: 'The assessment is timed, mixed, and about endurance. Run full-length timed sessions that rotate task types and force switching, and finish at least two complete ~3.5-hour dress rehearsals with no scratch paper before test day.'
      },
      {
        mistake: 'Ignoring numeric-keypad fluency',
        fix: 'Several sections are answered almost entirely with the numeric keypad and do not accept mouse input. Practise 10-key entry until it is automatic, or you will lose points to the interface rather than the content.'
      },
      {
        mistake: 'Scrambling through the radar simulation',
        fix: 'The collision-prevention section is designed to overwhelm. Develop a fixed prioritisation rule \u2014 handle the nearest or most imminent conflict, ignore the rest, reassess \u2014 and drill it until panic is not part of the reaction.'
      },
      {
        mistake: 'Answering the personality section as an imagined ideal',
        fix: 'The biographical component evaluates consistency and fit. Answer honestly and consistently about how you actually behave under pressure; contradictory responses are flagged, and there is no "perfect" profile to fake.'
      },
      {
        mistake: 'Treating a Qualified band as success',
        fix: 'Recent FAA campaign language has required Well-Qualified to advance. Aim well above the minimum Qualified threshold, and understand that even a top band does not guarantee a selection \u2014 medical, security, and academy performance follow.'
      }
    ]
  },
  questionTypes: {
    summary:
      'The AT-SA is a single computer-based assessment run in person at Pearson VUE centres, typically about 3.5 hours, and it is deliberately not a knowledge test: the FAA describes it as measuring aptitude relevant to controller training. The subtest list can vary by hiring announcement, but published descriptions consistently include number differences, variable memory and mental arithmetic, spatial and visual relationships, a radar-style collision-prevention simulation, reading comprehension, logical reasoning, and a biographical or personality questionnaire. Scoring places candidates into hiring bands \u2014 Best Qualified, Well Qualified, Qualified, or Not Referred \u2014 rather than producing a single pass/fail percentage, and the FAA does not publish raw-score formulas. Because the test content is protected, the samples below are editor-written illustrations of the published skill categories, not live items. There is no scratch paper, many sections run on numeric-keypad input, and the pacing pressure is intentional, so preparation should mirror the format rather than the content.',
    types: [
      { name: 'Number differences and mental arithmetic', share: 'A core component of the assessment', detail: 'Quick comparison and calculation of numbers under time pressure \u2014 often on the numeric keypad. Accuracy first, then speed.' },
      { name: 'Variable memory', share: 'A core component', detail: 'Variables with shifting values that you must hold in working memory and recompute as conditions change.' },
      { name: 'Spatial and visual relationships', share: 'A core component', detail: 'Determining relative positions of aircraft or objects from changing viewpoints, including from a cockpit-style perspective.' },
      { name: 'Radar-style collision simulation', share: 'Often described as the hardest section', detail: 'Managing moving objects on a screen to prevent collisions under pressure \u2014 rewards a rehearsed prioritisation rule.' },
      { name: 'Reading comprehension and logical reasoning', share: 'A core component', detail: 'Extracting information quickly and drawing conclusions under a clock; deductive reasoning and rule-following.' },
      { name: 'Biographical/personality questionnaire', share: 'Unscored in a traditional sense', detail: 'Work-style questions with no right answers; consistency and fit with controller traits are what matter.' }
    ],
    samples: [
      {
        prompt: 'A memory-and-math exercise asks you to track the value of variable X. X starts at 40. A prompt reads "X increases by 15," then "X decreases by 7," then "X is doubled." What is the final value of X?',
        options: [
          'A. 88',
          'B. 96',
          'C. 76',
          'D. 104'
        ],
        answer: 'B',
        explanation: 'Work the steps in order: 40 + 15 = 55; 55 \u2013 7 = 48; 48 doubled is 96. The most common error is doubling 40 early or mis-ordering the changes, which produces 76 or 88. Holding all three instructions in working memory without scratch paper is the actual skill being tested.'
      },
      {
        prompt: 'A spatial reasoning prompt asks you to imagine a small aircraft positioned directly ahead of you at your 12 o\u2019clock, level with your own aircraft. Which of the following statements is true?',
        options: [
          'A. The aircraft is to your left',
          'B. The aircraft is to your right',
          'C. The aircraft is directly in front of you',
          'D. The aircraft is directly behind you'
        ],
        answer: 'C',
        explanation: '12 o\u2019clock in aviation relative-direction terms is straight ahead, so the aircraft is directly in front. The trap in these items is viewpoint shift \u2014 reading "12 o\u2019clock" as a clock position on paper rather than as the pilot\u2019s own reference. Practising viewpoint shifts is what improves these items.'
      },
      {
        prompt: 'In a decision-making exercise, you are told: "If a conflict is imminent, resolve it before handling any advisory message. If no conflict is imminent, answer the advisory message first." A new advisory message arrives while one aircraft is on a direct collision course with another. What should you do?',
        options: [
          'A. Answer the advisory message first',
          'B. Resolve the conflict first, then answer the advisory',
          'C. Ignore both until more information arrives',
          'D. Answer the advisory and resolve the conflict simultaneously'
        ],
        answer: 'B',
        explanation: 'The stated rule makes conflict resolution the priority whenever a conflict is imminent, which it is here. A inverts the priority, C wastes time the scenario does not grant, and D is not a supported option in a single-task format \u2014 the point of the item is applying a prioritisation rule under pressure rather than reasoning from first principles.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill categories, not live AT-SA items. Test content is protected, and exact subtests vary by hiring announcement.'
  },
  examDay: {
    summary:
      'The AT-SA is taken in person at a Pearson VUE test centre, lasts about 3.5 hours, and is scheduled only after the FAA invites you following an application to an open off-the-street or CTI bid \u2014 you cannot simply register for it. Read the invitation carefully because it controls the scheduling window, the rescheduling deadline, the identification requirements, and the arrival rules, and check the test centre location and travel time well in advance, because appointments near the end of the window are scarce. On the day, bring the exact identification the invitation names \u2014 typically a valid government-issued photo ID whose name matches your application exactly \u2014 and arrive early enough to complete check-in. Leave phones, smartwatches, notes, and any study materials at home or in a locker; the test environment provides no scratch paper, so your working memory is the only calculation tool you have. Several sections require fast numeric-keypad entry with no mouse, so your hands have been warmed up by your drill work, not by caffeine. Use the opening moments to settle into the first subtest\u2019s rules rather than racing. When the collision simulation arrives, apply your rehearsed prioritisation rule and accept that it is designed to feel overwhelming \u2014 the candidates who perform are the ones who stay calm, not the ones who react to everything. Your result comes back as a hiring band \u2014 Best Qualified, Well Qualified, Qualified, or Not Referred \u2014 and a strong band improves referral odds but does not guarantee a selection, because medical evaluation, security clearance, and FAA Academy training follow for candidates who advance.',
    bring: [
      'The exact identification the invitation requires \u2014 typically a valid government-issued photo ID',
      'A name on the ID that matches your application and invitation exactly',
      'Comfortable, calm clothing for a ~3.5-hour computer session',
      'A clear picture of the test centre address, arrival time, and check-in rules'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, and earbuds \u2014 locker or at home',
      'All notes, study materials, and commercial prep printouts',
      'Scratch paper and pens \u2014 none are provided or permitted',
      'Calculators and any other electronic aids',
      'Any expectation that you can reschedule at the desk \u2014 that window closes earlier per the invitation'
    ],
    timeline: [
      { time: 'After the invitation', detail: 'Schedule your appointment early in the window at a convenient Pearson VUE centre; late scheduling can mean limited availability.' },
      { time: 'A few days before', detail: 'Confirm the centre address and travel time, review the ID and arrival requirements, and shift to sleep prioritisation.' },
      { time: '30 minutes before', detail: 'Arrive at the centre with time for check-in, identification verification, and settling in.' },
      { time: 'Check-in', detail: 'ID verification and any centre formalities; personal items are secured outside the testing room.' },
      { time: 'The assessment (~3.5 hrs)', detail: 'A battery of timed aptitude subtests \u2014 memory, mental math, spatial, radar simulation, reading, logic, and the biographical component.' },
      { time: 'After submission', detail: 'Your result is returned as a hiring band (Best Qualified / Well Qualified / Qualified / Not Referred), and the FAA\u2019s process determines referral.' }
    ],
    rules: [
      'You cannot register for the AT-SA on your own \u2014 it is taken only on FAA invitation after applying to an open hiring bid.',
      'The assessment is in person at a Pearson VUE centre and typically lasts about 3.5 hours.',
      'It is an aptitude assessment; no aviation knowledge is required or tested.',
      'No scratch paper or writing materials are provided; working memory is the only tool.',
      'Several sections use numeric-keypad input and do not accept mouse input.',
      'Eligibility rules for the bid include U.S. citizenship and, for applicants without prior air traffic experience, being under 31 at application.',
      'Results come back as hiring bands, and recent campaigns have required Well-Qualified to advance.'
    ],
    afterwards:
      'Your AT-SA result comes back as one of the hiring bands \u2014 Best Qualified, Well Qualified, Qualified, or Not Referred \u2014 rather than a simple pass or fail, and a strong band raises your referral odds without guaranteeing selection. Candidates who advance then move through the FAA\u2019s next steps: medical evaluation, psychological evaluation, drug testing, and a federal security clearance, followed by assignment to the FAA Academy in Oklahoma City for several months of paid training, then on-the-job training toward Certified Professional Controller status. Do not treat the assessment as the finish line, because the academy and facility training have their own significant pass thresholds. If you did not land the band the campaign required, review the active announcement to see whether a future bid is realistic \u2014 some candidates reapply in later cycles \u2014 and use the intervening months to keep the specific skills sharp rather than starting over cold. On a strong band, begin preparing the medical and security documentation immediately, because those clearances are where well-qualified candidates most often lose momentum. Your score is typically considered valid for several years, but hiring rules and announcements change, so always verify against the current bid before committing time and money to another cycle.'
  }
};

export default data;
