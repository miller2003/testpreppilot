// Depth content for: nic-cosmetology-theory
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Beauty, trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our skilled-licensure desk, which covers exams that sit between a vocational program and a state licence. Cosmetology is a good example of why these exams deserve their own treatment: there is no single national "cosmetology exam". The National-Interstate Council of State Boards of Cosmetology (NIC) publishes model written and practical examinations that individual states adopt, modify or replace, and the exact item count, domain weightings and passing score depend on the state board that administers them. We therefore cite the NIC Candidate Information Bulletin (CIB) and name the testing vendor (PSI, Prov, or Prometric) and the state board where figures differ, and we state plainly when a number is a model specification rather than a universal rule. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, domain weightings and item counts were taken from the NIC Cosmetology Candidate Information Bulletin and cross-checked against state-board-hosted CIBs; wage data from the BLS Occupational Outlook Handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$35,420 median for hairdressers, hairstylists and cosmetologists (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics does not track a separate profession called "cosmetologist"; the closest official classification is Hairdressers, Hairstylists and Cosmetologists, SOC 39-5012. That is the occupation the NIC Cosmetology Theory Examination feeds into, because holding the licence the exam gates is what lets you perform these services for pay in every U.S. state. The May 2024 median was $35,420 a year, or $17.03 an hour. The spread is wide and worth reading honestly: the lowest 10 percent earned under $11.82 an hour and the highest 10 percent earned more than $33.76 an hour. Two things drive that range. First, a large share of cosmetologists are paid on commission or booth-rent, so reported wages capture a part-time and entry-heavy workforce rather than a full-time median earner. Second, the ceiling is set by where you work and what you sell — chair renters in high-volume metro salons and specialists in colour correction or extension work sit at the top decile, while hourly floor staff in low-cost areas sit at the bottom. BLS counted 651,200 jobs in 2024 and projects 5 percent growth from 2024 to 2034, about average, with roughly 84,200 openings a year arising from both growth and replacement as workers leave the field. The replacement figure is the real story: turnover in personal-appearance work is high, which keeps entry routes open but also tells you that wage growth comes from building a client book, not from the licence alone. BLS lists the typical entry credential as a postsecondary nondegree award, and every state licenses the occupation.',
    rows: [
      { label: 'Median annual wage, hairdressers/hairstylists/cosmetologists', value: '$35,420', note: 'BLS Occupational Outlook Handbook, May 2024 ($17.03/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $11.82/hr', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $33.76/hr', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '651,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~84,200 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'Projected employment change', value: '+5% (2024-2034)', note: 'BLS OOH Job Outlook, about average' }
    ],
    growth: '+5% projected 2024-34 (about average), with ~84,200 openings a year; the licence is the entry requirement, but earnings track clientele and commission structure rather than the credential itself',
    source: {
      label: 'BLS Occupational Outlook Handbook — Barbers, Hairstylists, and Cosmetologists',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/barbers-hairstylists-and-cosmetologists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NIC publishes no national pass rate — the passing standard is set by each state board',
    summary:
      'The National-Interstate Council of State Boards of Cosmetology does not publish a national pass rate for its written (theory) cosmetology examination, and neither do the testing vendors that deliver it. This is a structural fact rather than an oversight: NIC produces model written and practical exams that states adopt voluntarily, and each member board sets its own cut score and reports its own outcomes, so there is no single figure that describes "the cosmetology exam pass rate" the way there might be for a vendor-owned certification. The model written examination is scored as a percentage of the 100 operational items, and state boards overwhelmingly set the passing standard around 75 percent correct, with several using 70 percent; the exact threshold is a board-by-board decision, so a candidate in one state may need a slightly different raw score than a candidate in another even though the item bank is the same and the content is functionally identical. What you will sometimes see quoted online are school-level licensure passage rates published by accreditors such as NACCAS, which run roughly from the low 70s into the high 90s depending on the institution. Those figures describe how well a school\'s graduates performed on the state exam, not the exam pass rate itself, and they should not be read as your personal odds of passing. The honest statement is that there is no single published pass-rate statistic for the NIC theory exam, and that the number that actually governs you is your state board\'s published cut score, which is what you should look up before you sit rather than a national average that does not exist.',
    source: {
      label: 'NIC Candidate Information Bulletin (cosmetology) and state-member board policies',
      url: 'https://www.nictesting.org/'
    },
    caveat:
      'No national or vendor-published pass rate exists for the NIC Cosmetology Theory Examination. We have deliberately left the pass-rate table empty and reported the verifiable facts instead: the exam is criterion-referenced on 100 operational items, and state boards set the cut score, most commonly near 75 percent. School-level NACCAS rates are not exam pass rates and are not presented as such here.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Before you plan a single hour, confirm which exam you are actually sitting, because the term "NIC Cosmetology Theory" hides more variation than most candidates expect and the single most common way to waste a study cycle is to prepare for a blueprint your state does not use. The National-Interstate Council of State Boards of Cosmetology publishes a model written examination, but your state board may adopt it as-is, adopt it with different domain weightings, add a state-law section, or use a different exam entirely, and only the Candidate Information Bulletin from your own board tells you which of those applies to you. The model written exam is 110 items total — 100 scored operational items plus 10 unscored pretest items used to validate future forms — delivered in 90 minutes, and the standard NIC blueprint weights four content domains: Scientific Concepts (anatomy, physiology, chemistry, infection control, and safety) at 35 percent, Hair Care and Services at 45 percent, Skin Care and Services at 10 percent, and Nail Care and Services at 10 percent. Hair Care is therefore close to half the paper and the single most efficient place to spend study time, while the 35 percent scientific foundation is where careless points are most often lost. The plan below runs eight weeks at roughly 8-10 hours a week and assumes you have completed or are near completing your state-mandated training hours, so this is exam preparation on top of, not a substitute for, your program. If you are still in training, lean on your school\'s curriculum to carry the content and use these weeks to convert it into the multiple-choice discipline the exam actually tests rather than re-reading service procedures you already know.',
    totalHours: '65-80 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Blueprint mapping and infection control',
        tasks: [
          'Obtain your specific state board\'s Candidate Information Bulletin and write down the exact item count, time limit and domain weightings — confirm whether your state adds a laws/rules section',
          'Study infection control first: decontamination, disinfection, sterilization, OSHA and state sanitation rules, and the distinction between cleaning, disinfecting and sterilizing',
          'Learn the EPA-registered disinfectant requirement and why universal precautions apply to every client',
          'Make one page of definitions (bactericide, virucide, fungicide, parasiticide) you can recite cold'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Scientific Concepts — the 35% foundation (part 1)',
        tasks: [
          'Anatomy and physiology: the layers of the skin, the hair follicle structure, the growth cycle of hair (anagen, catagen, telogen)',
          'The skin\'s functions, common skin disorders and conditions you must recognize versus refer',
          'Basic chemistry: pH scale, acids and alkalis, the pH of skin, hair and common products',
          'The structure of the hair shaft (cuticle, cortex, medulla) and how it behaves under chemical service'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Hair Care and Services — the 45% core',
        tasks: [
          'Haircutting: elevations, angles, sectioning, and the terminology of lines and shapes',
          'Shampooing, conditioning and scalp care, and the chemistry of cleansing',
          'Hair colouring: the colour wheel, level and tone, permanent vs demi/semi, the role of developer volume, and strand/patch tests',
          'Chemical texture services: permanent waving, relaxing, and the safety and timing of each'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Skin Care and Nail Care — the 20% combined',
        tasks: [
          'Facial care: skin analysis, cleansing, exfoliation, massage movements and mask types',
          'Hair removal basics and the contraindications that require referral',
          'Manicure and pedicure: nail anatomy, disorders, and sanitation of implements',
          'Nail technology: product chemistry (acrylic, gel, polish) at a recognition level, not a service-performance level (that is the practical exam)'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Full-domain multiple-choice rehearsal',
        tasks: [
          'Take timed 90-minute practice exams weighted to the NIC blueprint (Scientific 35 / Hair 45 / Skin 10 / Nail 10)',
          'Log every miss by domain and rebuild the weakest area first; most candidates lose points in chemistry and infection control, not in hair',
          'Drill the definitions and the numerical facts (pH values, developer volumes, timer minutes) that the exam asks directly',
          'Re-read your state\'s laws/rules section if your board adds one'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Gap closing and exam-day logistics',
        tasks: [
          'Re-test the two weakest domains with fresh questions, not repeats you have memorized',
          'Confirm your testing vendor (PSI, Prov, or Prometric), location, ID requirements and check-in rules',
          'One light review day of definitions and chemistry constants, then rest',
          'Pack ID and any required documentation the night before — the theory exam is timed from check-in'
        ],
        hours: '7-9 hrs'
      }
    ],
    variants: [
      { label: 'Still in cosmetology school', detail: 'Six weeks at 6 hrs/week. Your coursework carries the content; use these weeks purely to convert it into multiple-choice discipline and to drill the chemistry and infection-control constants the exam loves. Confirm your state board weighting before you start.' },
      { label: 'Graduate retaking after a gap', detail: 'Ten to twelve weeks at 8 hrs/week. The content is familiar but the format discipline has faded; the risk is over-confidence on hair and under-preparation on the 35 percent scientific foundation. Weight your early weeks to Scientific Concepts and infection control.' },
      { label: 'Licensed in another state, seeking reciprocity', detail: 'Four weeks. You know the services; you need the written discipline and your new state\'s laws/rules section if it adds one. Front-load the CIB for the receiving state and spend the saved time on its specific sanitation-code wording.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The NIC theory exam is a criterion-referenced multiple-choice test, not a performance test, and the single biggest mistake candidates make is treating it like one. You are not in a salon; you are answering items about why a process works and what the rule says, and the distractors are written to catch people who know the service but not the rationale or the regulation. Preparation should therefore be built around recognition of precise terminology and constants, not around hands-on repetition. The most efficient study habit is to convert your school content into the exact language the exam uses: "disinfect" versus "sterilize" are not interchangeable on the paper, and a near-synonym in an option is usually the trap rather than the answer. Because the model blueprint is 45 percent hair, 35 percent scientific foundation, and 20 percent skin and nails combined, your study hours should follow those weights rather than your personal comfort, and the chemistry and infection-control material that sits in that 35 percent is where rote learners lose the most cheap points. Timed practice matters more than many candidates believe: with 110 items in 90 minutes you have under a minute each including the ten unscored pretests, so the candidate who never practices under the clock knows the material but cannot deploy it fast enough. Use your state board\'s Candidate Information Bulletin as the syllabus above all commercial products, and drill the numerical constants — pH values, developer volumes, contact times — every day for the last three weeks, because those are free points that disciplined recognition captures and conceptual studying drops. The strategies below turn that general approach into a weekly routine.',
    items: [
      {
        title: 'Study the domain weights, not your comfort zone',
        detail: 'The NIC model blueprint is 45 percent Hair Care, 35 percent Scientific Concepts, and 20 percent Skin and Nail combined. Most candidates over-practice hair because it is what they enjoyed in school and under-practice chemistry and infection control, which is where the cheap points and the careless losses both live. Allocate study time to match the weights, not your preferences.'
      },
      {
        title: 'Memorize the numbers the exam asks directly',
        detail: 'Theory items reward exact recall: pH of skin (~5.5) and hair, developer volumes and their lift, disinfection contact times, and the minute counts for chemical tests. Build a single cheat sheet of constants and recite it daily for the last three weeks. These are free points that rote learners capture and conceptual learners drop.'
      },
      {
        title: 'Learn infection control as a regulated system',
        detail: 'Infection control is heavily tested and heavily misunderstood. Know the difference between cleaning, disinfecting and sterilizing; know which implements are disinfected versus discarded; know OSHA and your state board\'s sanitation rules by name. The exam frames these as compliance questions, and guessing from salon habit fails them.'
      },
      {
        title: 'Use your state board\'s Candidate Information Bulletin as the syllabus',
        detail: 'NIC is a model exam; your state board may adjust weightings or add a laws/rules section. The CIB is the only document that tells you the exact item count, time, domains and cut score you face. Everything else — including this guide — is secondary to it. Read it before you buy any commercial product.'
      },
      {
        title: 'Practice under the 90-minute clock',
        detail: 'With 110 items in 90 minutes you have under a minute per item including the 10 unscored pretest questions. Timed practice builds the reflex to answer, flag and move rather than to over-deliberate. Candidates who study untimed routinely run out of minutes on the real form even when they know the material.'
      },
      {
        title: 'Treat pretest items as real and move on',
        detail: 'Ten of the 110 items are unscored pretests used to validate future exams. You cannot tell them apart on the day, so answer every item as if it counts and do not waste time trying to identify which are which. The 90-minute limit applies to all 110 regardless.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The first buying decision for this exam is whether you need a paid product at all, and for most candidates the honest answer is no — at least not at first. If you are enrolled in or recently graduated from a state-approved cosmetology program, your school materials already cover the NIC blueprint, and the gap that costs people the theory exam is multiple-choice discipline and memorized constants, not missing content. Commercial test banks and the Milady textbook (the dominant theory text, commonly around $100 or more new) are the two paid products worth considering, but neither is required to sit, and your state board\'s free Candidate Information Bulletin should be your baseline syllabus before you purchase anything. The CIB is the only document that tells you the exact item count, time limit, domain weightings and cut score you will face, and every commercial product is, at best, an interpretation of it; a generic "cosmetology exam" book that does not match your state\'s weighting or laws section can actively mislead you. For candidates still in training, the school\'s own exam-prep modules are usually included in tuition and are the highest-value resource because they are keyed to the same state requirement. Third-party mobile question banks are cheap and useful for commuting-time drilling of definitions, but their quality varies and they should be vetted against your CIB rather than trusted blindly. The table below compares the resources by what they are actually for, not by commission or by what ranks highest in a search result, because the search results are dominated by vendors selling exactly the product you may not need.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state board Candidate Information Bulletin (CIB)', values: ['Free', 'PDF from the state board or NIC site', 'The authoritative syllabus — item count, time, domains and cut score for your state'] },
      { label: 'Milady Standard Cosmetology textbook', values: ['~$100+ new (often bought through your school)', 'Print + digital, the dominant theory text', 'A complete content reference; confirm it matches your state\'s current edition'] },
      { label: 'NIC / vendor practice test banks (PSI, Prov, Prometric)', values: ['Varies; some included with exam fee, others sold separately', 'Timed online practice', 'Format rehearsal closest to the delivered exam'] },
      { label: 'School-provided exam-prep modules', values: ['Often included in tuition', 'Courseware and in-class review', 'Candidates still in training who need structure, not new content'] },
      { label: 'Third-party cosmetology exam apps and question banks', values: ['~$10-40', 'Mobile app or web', 'Commuting-time drilling of definitions and constants; quality varies, vet against your CIB'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; textbook and app prices fluctuate with edition and promotion. We do not rank by commission. Your state board CIB is free and authoritative and should be read before any purchase.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most failures on the NIC theory exam are not content failures — they are orientation failures, and that distinction matters because orientation failures are almost entirely preventable before you sit. Candidates study the wrong document, weight their time to the wrong domains, or treat a regulated multiple-choice exam like a practical skills test, and each of those errors is made weeks in advance of the test rather than on the day. The most damaging is studying a generic "cosmetology exam" product instead of the Candidate Information Bulletin from your own state board, because NIC is a model exam that states adopt with modifications and a generic product may ignore your state\'s weighting or its added laws-and-rules section. The second is neglecting the 35 percent Scientific Concepts domain in favour of hair, which feels natural because hair is what candidates enjoyed in school, but the chemistry constants and infection-control rules in that foundation are directly tested and easily drilled. A third is practicing untimed and then running out of the 90-minute clock, which punishes candidates who know the material but cannot deploy it fast enough across 110 items. Assuming the passing score is universal is another quiet error, because the cut is set by each state board rather than by NIC, and aiming at another state\'s number is aiming at the wrong target. Treating the theory and practical as one study job dilutes both. The six mistakes below are the ones we see most often, and each has a specific fix you can apply before you book the seat.',
    items: [
      {
        mistake: 'Studying a generic "cosmetology exam" instead of your state board\'s blueprint',
        fix: 'NIC is a model exam that states adopt with modifications. Your state may shift domain weightings or add a laws/rules section that a generic product ignores. Download your specific state board\'s Candidate Information Bulletin and use it as the syllabus; treat everything else as supplementary. This is the single most common and most costly error.'
      },
      {
        mistake: 'Neglecting the 35 percent Scientific Concepts domain',
        fix: 'Hair Care is 45 percent and gets most of the attention, but Scientific Concepts (anatomy, physiology, chemistry, infection control) is 35 percent and is where careless points are lost. Chemistry constants and infection-control rules are directly tested and easily drilled. Weight your early study to this domain rather than to the services you already enjoy.'
      },
      {
        mistake: 'Confusing cleaning, disinfecting and sterilizing',
        fix: 'These are distinct regulated steps with distinct tools and outcomes, and the exam tests the distinction precisely. Cleaning removes debris; disinfection kills most pathogens on non-porous surfaces using an EPA-registered product; sterilization is reserved for certain implements and uses an autoclave. Learn which implements are disinfected versus discarded, and know your state board\'s sanitation code by name.'
      },
      {
        mistake: 'Practicing untimed and running out of clock',
        fix: 'The form is 110 items in 90 minutes, under a minute per item including 10 unscored pretests. Candidates who never practice under the clock know the material but cannot deploy it fast enough. Build timed sets from week seven onward so the pacing reflex is automatic.'
      },
      {
        mistake: 'Assuming the passing score is universal',
        fix: 'NIC sets no single national cut. The model exam is scored on the 100 operational items, and state boards set the standard, most commonly near 75 percent, some at 70 percent. Look up your own board\'s published cut score rather than aiming at a number you saw quoted for another state.'
      },
      {
        mistake: 'Treating the practical and theory as one study job',
        fix: 'They are separate examinations with separate blueprints and, in several states, separate vendors and even separate pass standards. The theory exam tests why and what; the practical tests that you can perform. Mixing the two dilutes both. Prepare the theory as a multiple-choice discipline first, then shift to hands-on rehearsal for the practical.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The model NIC Cosmetology Theory Examination is 110 multiple-choice items — 100 operational plus 10 unscored pretests — in a 90-minute sitting, and everything on it is selected-response; there is no performance component on the written exam, because performing services is what the separate practical examination tests. Items are criterion-referenced and scored as a percentage of the 100 operational items, with the cut score set by the administering state board rather than by NIC nationally, so the "passing mark" is a board decision and not a fixed national line. The four content domains are Scientific Concepts (35%), Hair Care and Services (45%), Skin Care and Services (10%), and Nail Care and Services (10%), and that weighting is the single most useful fact for allocating your effort: because 45 percent of the paper is hair and 35 percent is scientific foundation, a disciplined candidate who is merely adequate at skin and nails but strong on hair and science will clear the bar more comfortably than a hair specialist who neglects the foundations. The ten unscored pretest items are embedded to validate future forms and are indistinguishable from scored ones on the day, so you should answer all 110 as if each counts and never waste time trying to identify which are which. The practical implication for pacing is that you should not allow a single ambiguous chemistry or infection-control item to consume five minutes; answer, flag and move, because the clock is tight across all 110 and under a minute per item is the pace you must protect. The item types below show how the blueprint is actually expressed in questions.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The entire written exam', detail: 'One correct response selected from four options. Distractors are usually plausible near-synonyms or half-true statements about procedure or regulation, so partial familiarity is punished.' },
      { name: 'Definitions and terminology items', share: 'Heavy in Scientific Concepts', detail: 'Direct recall of terms — cuticle, cortex, medulla, anagen/catagen/telogen, pH, disinfectant classes. These are free points for anyone who built the cheat sheet.' },
      { name: 'Applied scenario items', share: 'Heavy in Hair Care and infection control', detail: 'A described client situation or service step asking for the correct action, product or safety response. These reward knowing the rationale and the rule, not just the motion.' },
      { name: 'Unscored pretest items', share: '10 of the 110 items', detail: 'Embedded for form validation and not counted toward your score, but indistinguishable on the day. Answer them as if they count and do not try to identify them.' }
    ],
    samples: [
      {
        prompt: 'A cosmetologist must disinfect a non-porous comb that has been used on a client. Which step must precede disinfection?',
        options: [
          'A. Immerse the comb directly in an EPA-registered disinfectant for the required contact time',
          'B. Rinse the comb in clean water and store it for later use',
          'C. Remove all visible debris by cleaning the comb before applying the disinfectant',
          'D. Place the comb in the autoclave for sterilization'
        ],
        answer: 'C',
        explanation: 'Disinfection only works on a surface that has been cleaned of visible debris; organic matter blocks the disinfectant from contacting pathogens, so cleaning must come first. A skips the required cleaning step and is the classic trap — many candidates reach for the disinfectant without the prerequisite. B only rinses and stores, which does not disinfect at all. D is wrong because a comb is a non-porous implement that is disinfected, not autoclaved; sterilization is reserved for specific implements and is not the routine step for a comb.'
      },
      {
        prompt: 'Which layer of the hair shaft is responsible for the strength and elasticity of the hair and contains the pigment that gives hair its colour?',
        options: [
          'A. The cuticle',
          'B. The cortex',
          'C. The medulla',
          'D. The follicle'
        ],
        answer: 'B',
        explanation: 'The cortex is the middle layer and makes up most of the hair shaft; it provides strength and elasticity and houses the melanin pigment that determines natural colour. A, the cuticle, is the outermost protective scale layer and does not contain pigment. C, the medulla, is the innermost core and is often absent in fine hair; it is not the source of strength or colour. D, the follicle, is below the skin surface and is not part of the shaft at all.'
      },
      {
        prompt: 'A client requests a colour service. Before applying any product, the cosmetologist performs a strand test primarily to:',
        options: [
          'A. Determine whether the client\'s hair will achieve the desired colour and tolerate the process',
          'B. Measure the exact pH of the client\'s scalp',
          'C. Confirm the client\'s preferred appointment length',
          'D. Replace the need for a patch (skin) test'
        ],
        answer: 'A',
        explanation: 'A strand test evaluates how the hair reacts to the colour formula and whether the target result is achievable without damage, which is why it is performed before a full application. B is not what a strand test measures. C is a scheduling detail, not a safety or formulation purpose. D is wrong because a strand test assesses the hair, not an allergic skin reaction; a separate patch test is required to screen for sensitivity and the two are not interchangeable.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published NIC blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NIC Cosmetology Theory Examination is delivered by computer at a testing site run by the state board\'s chosen vendor — most commonly PSI, Prov, or Prometric — and the practical is usually a separate sitting with its own check-in, so do not assume the two share a location, a vendor or even a date. You will be timed from check-in, and the written form is 110 items in 90 minutes with no scheduled break, so the clock does not stop once it starts and there is no pausing to collect your thoughts. The most common way candidates lose the theory exam has nothing to do with cosmetology: the testing vendors enforce strict ID and check-in rules, and a name mismatch or missing ID means a forfeited seat and a forfeited fee that is rarely refunded, which is why confirming the exact ID requirements for your specific vendor the week before is the highest-leverage exam-day action you can take. Arrive early, expect a security screening that is stricter than a salon\'s and is applied without exception, and plan to sit the full 90 minutes — leaving early is allowed but the time is yours to use, and a rushed first pass is the usual cause of avoidable misses on the chemistry and infection-control items that decide the result. Bring only what the vendor permits; notes, phones and personal items go in a locker, and the terminal gives you nothing beyond the exam and any permitted tools. Treat the day as a timed performance of recognition, not a test of how well you do hair, and the logistics above will keep the avoidable failures away from your score.',
    bring: [
      'One or two forms of unexpired government-issued photo identification, exactly as your testing vendor requires — confirm the list for PSI, Prov or Prometric before the day',
      'The name on your ID must match your exam registration exactly, including middle initials and any hyphens',
      'Your exam confirmation or authorization number from the state board or vendor',
      'Any required documentation your state board specifies (for example, proof of training-hour completion)',
      'Layers you can remove, because testing rooms are kept cool and you may not bring outerwear, bags or notes to the seat'
    ],
    leave: [
      'All notes, textbooks, flashcards and printed references — none are permitted at the seat',
      'Phones, smartwatches, earbuds and any electronic device; these go in a locker or are barred entirely',
      'Bags, coats, food and drink beyond what the vendor permits in the waiting area',
      'Any cosmetic products or tools — this is a written exam, not the practical',
      'A calculator or writing materials; the vendor provides what you are allowed to use'
    ],
    timeline: [
      { time: 'The week before', detail: 'Download your state board CIB and confirm the vendor, ID rules, item count and cut score. Mismatched names are the leading cause of a lost seat.' },
      { time: 'The night before', detail: 'Pack ID and confirmation; do one light review of definitions and chemistry constants only. Do not cram new material.' },
      { time: '30 minutes before', detail: 'Arrive at the testing center. Check-in includes ID verification, a signature or biometric capture, and a locker for your belongings.' },
      { time: 'Seated', detail: 'You are assigned a terminal; a short tutorial may precede the timed section. The 90-minute clock starts with the exam, not the tutorial.' },
      { time: '0-75 minutes', detail: 'Work the 110 items at under a minute each. Answer, flag and move on ambiguous items; return to flagged ones only if time remains.' },
      { time: '75-90 minutes', detail: 'Review flagged items and any you rushed. Submit before the clock expires rather than letting it run out.' },
      { time: 'After submission', detail: 'Some vendors show a result immediately or on a printed report; others release the score through the state board. Follow your board\'s notification process.' }
    ],
    rules: [
      'The written exam is 110 multiple-choice items in 90 minutes, including 10 unscored pretest items; the clock does not stop for breaks.',
      'The exam is criterion-referenced and scored on the 100 operational items; your state board sets the passing percentage, commonly near 75 percent.',
      'ID must match your registration exactly; a mismatch can forfeit the seat and the fee with no refund.',
      'No personal materials, electronics or notes at the seat; the vendor provides any permitted items.',
      'You may usually review and change answers before submitting, within the time limit.',
      'The theory and practical are separate examinations; this guide covers the written sitting only.'
    ],
    afterwards:
      'Result delivery varies by state and vendor: some centers show a pass/fail at the terminal or on a printed report, while others route the score through your state board\'s licensing system within days or weeks. If you pass, the theory result is one component of your licence application — you still must clear the practical examination (where your state requires one) and meet your board\'s training-hour and fee requirements before a licence is issued. If you do not pass, read the score report by domain if one is provided, identify whether the loss came from Hair Care, Scientific Concepts, or the smaller Skin and Nail domains, and re-weight your study to the gap rather than re-reading everything. Because the cut score is set by your board and the exam is criterion-referenced, a narrow fail usually reflects a specific domain weakness, not a general one, and a focused four-week rebuild is typically enough. Book the retake through your vendor once your board\'s waiting period (if any) has elapsed, and confirm the current fee, because retake policies and costs differ by state.'
  }
};

export default data;
