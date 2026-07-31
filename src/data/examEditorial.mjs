// Editorial exam extras — single source of truth.
// Extracted from design-output/build-exam-pages.cjs (EXTRAS). Consumed by
// src/components/ExamGuide.astro and the standalone generator.
// Shape per slug:
//   factStrip: [{label, value}]
//   examMeta: {questions, time, pass, fee, format, admin}
//   examTopicsTitle, examTopicsIntro
//   topics? | parts? | modules?: content breakdown
//   examEssentials: [[label, value]]
//   faqs: [{q, a}]

export const examEditorial = {
  'california-real-estate-license': {
    factStrip: [{label:'Education',value:'135'},{label:'Exam',value:'150'},{label:'Exam Fee',value:'$100'},{label:'Pass Mark',value:'70%'}],
    examMeta: {questions:'150',time:'3 hours',pass:'70% (105/150)',fee:'$100',format:'Multiple-choice, in person (DRE/PSI)',admin:'California DRE'},
    examTopicsTitle: 'What\u2019s on the California exam',
    examTopicsIntro: 'The DRE salesperson exam covers seven subject areas. Weights are from the official DRE Examination Description (RE 425, Rev 6/25):',
    topics: [
      {name:'Practice of Real Estate & Disclosures',weight:'25%',note:'Trust funds, fair housing, advertising, TDS, ethics'},
      {name:'Laws of Agency & Fiduciary Duties',weight:'17%',note:'Creation/termination of agency, dual agency, disclosures'},
      {name:'Property Ownership & Land Use',weight:'15%',note:'Title, encumbrances, zoning, water rights'},
      {name:'Property Valuation & Financial Analysis',weight:'14%',note:'Appraisal approaches, economic principles'},
      {name:'Contracts',weight:'12%',note:'Listing agreements, purchase contracts, options'},
      {name:'Financing',weight:'9%',note:'Loan types, deeds of trust, TILA/RESPA'},
      {name:'Transfer of Property',weight:'8%',note:'Deeds, title insurance, escrow'}
    ],
    examEssentials: [
      ['Location','In person at a DRE/PSI testing center (Sacramento, Fresno, La Palma, Oakland, San Diego)'],
      ['Format','150 multiple-choice questions in 3 hours'],
      ['Passing score','70% (105/150); results given immediately'],
      ['Retake','Wait 18 days and repay the $100 fee; no limit on attempts'],
      ['Validity','You must apply for the license within 2 years of passing or retake']
    ],
    faqs: [
      {q:'Do I need a college degree to get a California real estate license?',a:'No. You only need three 45-hour DRE-approved courses (Principles, Practice, and one elective) plus a high-school diploma or equivalent.'},
      {q:'Can I take the California real estate exam online?',a:'No. The exam is administered in person at a DRE/PSI testing center only.'},
      {q:'What score do I need to pass?',a:'70%, which is 105 of the 150 questions. Results are available the moment you finish.'},
      {q:'How long is the California exam?',a:'Three hours for 150 multiple-choice questions.'},
      {q:'How much does it cost to get licensed in California?',a:'Plan for roughly $600\u2013$1,200 all-in: $100 exam fee, $350 original license fee, Live Scan fingerprints (~$49\u2013$90), and a 135-hour course ($100\u2013$700).'},
      {q:'How long does the whole process take?',a:'Most people finish in 2\u20136 months, depending on study pace and how fast DRE processes the file.'},
      {q:'Do I need a sponsoring broker before the exam?',a:'No \u2014 you can take and pass the exam first. But your license issues inactive until a California broker sponsors you.'},
      {q:'Is California real estate education available online?',a:'Yes. As long as the provider is DRE-approved, all 135 hours can be completed online at your own pace.'},
      {q:'What is the first-time pass rate?',a:'About 51% in recent years \u2014 California is one of the harder salesperson exams, so dedicated exam prep matters.'},
      {q:'Does California have reciprocity with other states?',a:'No. Out-of-state licensees must still pass the California exam; there is no reciprocal license.'}
    ]
  },
  'florida-real-estate-license': {
    factStrip: [{label:'Education',value:'63'},{label:'Exam',value:'100'},{label:'Exam Fee',value:'$36.75'},{label:'Pass Mark',value:'75%'}],
    examMeta: {questions:'100',time:'3.5 hours',pass:'75% (75/100)',fee:'$36.75',format:'Multiple-choice (Pearson VUE)',admin:'DBPR / FREC'},
    examTopicsTitle: 'What\u2019s on the Florida exam',
    examTopicsIntro: 'The 100-question exam mixes national principles, Florida-specific law, and math. Weights below are from the DBPR Candidate Information Booklet; 19 areas are tested \u2014 these are the heaviest:',
    topics: [
      {name:'Real Estate Brokerage Activities & Procedures',weight:'12%'},
      {name:'Real Estate Contracts',weight:'12%'},
      {name:'Residential Mortgages',weight:'9%'},
      {name:'Property Rights: Estates & Tenancies',weight:'8%'},
      {name:'Real Estate Appraisal',weight:'8%'},
      {name:'Authorized Relationships, Duties & Disclosures',weight:'7%'},
      {name:'Titles, Deeds & Ownership Restrictions',weight:'7%'},
      {name:'License Law & Qualifications',weight:'6%'},
      {name:'Real Estate Computations & Closing',weight:'6%'},
      {name:'Legal Descriptions',weight:'5%'},
      {name:'Federal & State Laws Pertaining to RE',weight:'4%'},
      {name:'Taxes Affecting Real Estate',weight:'3%'}
    ],
    examEssentials: [
      ['Location','Pearson VUE \u2014 Florida centers or online proctoring'],
      ['Format','100 multiple-choice questions (45 national + 45 FL + 10 math) in 3.5 hours'],
      ['Passing score','75/100 (75%); results given immediately'],
      ['Eligibility window','24 months from exam eligibility to pass'],
      ['Retake','Allowed within the 24-month window; repay $36.75 per attempt']
    ],
    faqs: [
      {q:'Do I need a degree to get a Florida real estate license?',a:'No. You need a high-school diploma or GED, be 18+, and hold a U.S. SSN. The only education required is the 63-hour FREC I course.'},
      {q:'Can I take the Florida real estate exam online?',a:'Yes. Pearson VUE offers both in-person centers and online proctoring for Florida candidates.'},
      {q:'What score do I need to pass?',a:'75%, which is 75 of the 100 questions.'},
      {q:'How much does it cost to get licensed in Florida?',a:'About $350\u2013$700 all-in: the 63-hour course ($100\u2013$450), the $83.75 DBPR fee, fingerprints (~$47\u2013$80), and the $36.75 exam fee.'},
      {q:'How long does the whole process take?',a:'Often 4\u201312 weeks \u2014 among the fastest of the large states.'},
      {q:'Do I need a broker before the exam?',a:'No. You only need a sponsoring broker to activate the license after you pass.'},
      {q:'What is the first-time pass rate?',a:'Roughly half of first-time takers pass; structured exam prep lifts that well above 50%.'},
      {q:'Does Florida have reciprocity?',a:'Florida has mutual recognition with several states \u2014 some out-of-state licensees take only the Florida-specific portion.'},
      {q:'What happens if I skip post-license education?',a:'Your license becomes null and void, not just inactive \u2014 you must complete 45 hours of post-license education before your first renewal.'}
    ]
  },
  'enrolled-agent': {
    factStrip: [{label:'Exam Parts',value:'3'},{label:'Questions',value:'100/part'},{label:'Fee',value:'$317/part'},{label:'Pass Mark',value:'500/800'}],
    examMeta: {questions:'100 per part',time:'3.5 hrs/part',pass:'Scaled 500/800',fee:'$317/part',format:'Multiple-choice (PSI)',admin:'IRS'},
    examTopicsTitle: 'What\u2019s on the SEE',
    examTopicsIntro: 'The Special Enrollment Examination has three independent parts. From 2026 it is delivered by PSI. Each part is 100 questions (85 scored + 15 experimental) in 3.5 hours; a scaled 500 of 800 passes.',
    parts: [
      {name:'Part 1 \u2014 Individuals',items:['Preliminary work with taxpayer data','Income and assets','Deductions and credits','Taxation','Advising the individual taxpayer','Specialized individual returns']},
      {name:'Part 2 \u2014 Businesses',items:['Business entities & considerations','Business tax preparation','Specialized returns & taxpayers']},
      {name:'Part 3 \u2014 Representation, Practices & Procedures',items:['Practices & procedures','Representation before the IRS','Specific areas of representation','Filing process']}
    ],
    examEssentials: [
      ['Vendor','PSI Services (took over from Prometric March 1, 2026)'],
      ['Per part','100 questions (85 scored + 15 experimental), 3.5 hours'],
      ['Passing score','Scaled 500 on an 800 scale'],
      ['Order','Take parts in any order; 3 years to pass all three'],
      ['Degree','None required \u2014 no 150 credit hours like the CPA']
    ],
    faqs: [
      {q:'Enrolled Agent vs CPA \u2014 what\u2019s the difference?',a:'An EA is federally licensed by the IRS and specializes in taxation nationwide; a CPA is licensed by a state board with a broader accounting scope. The EA needs no degree, the CPA typically needs 150 credit hours.'},
      {q:'Do I need a college degree to become an EA?',a:'No. You only need a PTIN and a passing SEE score, then Form 23. Many EAs come from non-accounting backgrounds.'},
      {q:'How much does it cost?',a:'About $1,110 in hard costs: three SEE parts at $317 each plus the $140 Form 23 enrollment fee. A review course adds $300\u2013$700.'},
      {q:'How long does it take?',a:'Most candidates finish in 6\u201312 months, depending on study time.'},
      {q:'How many exam parts are there?',a:'Three: Individuals, Businesses, and Representation, Practices & Procedures. Each is a separate 100-question test.'},
      {q:'What is the pass rate?',a:'The IRS does not publish official pass rates, but well-prepared candidates commonly clear each part on the first try.'},
      {q:'Where do I take the exam?',a:'At a PSI testing center (in person). Scheduling opened for the 2026 cycle in the U.S.; international scheduling opens Sept 1, 2026.'},
      {q:'Is the EA license portable across states?',a:'Yes. Because it is federal, an EA can represent clients in any state \u2014 unlike a CPA, which is state-specific.'},
      {q:'What continuing education is required?',a:'72 hours of IRS-approved CE every 3 years, including at least 16 hours per year (2 of which are ethics).'}
    ]
  },
  'osha-10-construction': {
    factStrip: [{label:'Duration',value:'10 hrs'},{label:'Card',value:'DOL'},{label:'Cost',value:'$25\u2013$89'},{label:'Expires',value:'No (federal)'}],
    examMeta: {questions:'n/a (awareness)',time:'10 hours',pass:'Provider quiz ~70%',fee:'$25\u2013$89',format:'Online or in person',admin:'OSHA (DOL card)'},
    examTopicsTitle: 'What the course covers',
    examTopicsIntro: 'OSHA 10 Construction (29 CFR 1926) is awareness training. The required modules below must be completed within 6 months, capped at 7.5 hours of training per day:',
    modules: ['Introduction to OSHA','OSHA Focus Four Hazards (Falls, Electrocution, Struck-By, Caught-In/Between)','Personal Protective Equipment (PPE)','Health Hazards in Construction','Stairways and Ladders','Cranes, Derricks, Hoists, Elevators & Conveyors','Excavations','Materials Handling, Use & Disposal','Scaffolds','Hand & Power Tools'],
    examEssentials: [
      ['Delivery','Online or in person; capped at 7.5 hrs/day, finish within 6 months'],
      ['Assessment','No federal pass/fail \u2014 most providers require ~70% on module quizzes'],
      ['Card','Official DOL wallet card mailed 6\u20138 weeks; temporary certificate immediately'],
      ['Version','Construction (29 CFR 1926) for job sites \u2014 not General Industry'],
      ['Requirement','Not federally mandated, but required by some states/cities (e.g., NYC LL196) and many employers']
    ],
    faqs: [
      {q:'What is the purpose of OSHA 10 Construction?',a:'It is entry-level hazard-awareness training that helps workers recognize and avoid the leading job-site dangers \u2014 falls, electrocution, struck-by, and caught-in/between.'},
      {q:'Can I take OSHA 10 online?',a:'Yes. OSHA-authorized trainers offer the full 10-hour course 100% online; you can also take it in person.'},
      {q:'How long does it take?',a:'The 10 required hours are spread over at least two days (7.5-hour daily cap); most finish in 1\u20132 days of focused study.'},
      {q:'Does the OSHA 10 card expire?',a:'Under federal OSHA the card never expires, but many employers and some jurisdictions require a refresher every 3\u20135 years.'},
      {q:'How much does it cost?',a:'Typically $25\u2013$89 online, with the official DOL card included. In-person courses run higher.'},
      {q:'OSHA 10 vs OSHA 30 \u2014 which do I need?',a:'OSHA 10 is for entry-level workers; OSHA 30 is for supervisors and anyone with safety responsibility. You can take 30 directly without 10.'},
      {q:'Is OSHA 10 required by law?',a:'Federal OSHA does not require it, but several states and cities mandate it for site access, and many contractors require it as a condition of employment.'},
      {q:'Is the DOL card the same as a certificate?',a:'The certificate proves completion; the official DOL wallet card is the industry-standard proof accepted on job sites.'}
    ]
  },
  'osha-30-construction': {
    factStrip: [{label:'Duration',value:'30 hrs'},{label:'Card',value:'DOL'},{label:'Cost',value:'$89–$189'},{label:'Expires',value:'No (federal)'}],
    examMeta: {questions:'n/a (awareness)',time:'30 hours',pass:'Provider quiz ~70%',fee:'$89–$189',format:'Online or in person',admin:'OSHA (DOL card)'},
    examTopicsTitle: 'What the course covers',
    examTopicsIntro: 'OSHA 30 Construction (29 CFR 1926) is the supervisor-level outreach course. It works through every OSHA 10 topic in greater depth and adds safety-program management. The modules below must be completed within 6 months, capped at 7.5 hours of training per day:',
    parts: [
      {name:'Mandatory modules (~14–15 hrs)',items:['Introduction to OSHA (2 hrs)','Managing Safety & Health (2 hrs)','OSHA Focus Four Hazards — Falls, Electrocution, Struck-By, Caught-In/Between (6 hrs)','Personal Protective Equipment (PPE)','Health Hazards in Construction — lead, silica, noise (1 hr)','Stairways and Ladders (1 hr)']},
      {name:'Elective modules (12 hrs, choose)',items:['Cranes, Derricks, Hoists, Elevators & Conveyors','Excavations','Materials Handling, Use & Disposal','Scaffolds','Hand & Power Tools','Concrete & Masonry Construction','Confined Space Entry','Fire Protection & Prevention']},
      {name:'Additional modules (4 hrs, choose)',items:['Safety & Health Programs','Recordkeeping & OSHA Reporting','Multi-employer Worksite Policy','Welding, Cutting & Brazing','Ergonomics','Hazwoper / Hazardous Materials']}
    ],
    examEssentials: [
      ['Delivery','Online or in person; capped at 7.5 hrs/day, finish within 6 months'],
      ['Assessment','No federal pass/fail — most providers require ~70% on module quizzes'],
      ['Card','Official DOL wallet card mailed 6–8 weeks; temporary certificate immediately'],
      ['Version','Construction (29 CFR 1926) for supervisors — not General Industry'],
      ['Requirement','Required for site supervisors/leads by many GCs and jurisdictions (e.g., NYC LL196)']
    ],
    faqs: [
      {q:'What is the difference between OSHA 10 and OSHA 30?',a:'OSHA 10 is core hazard awareness for entry-level workers; OSHA 30 adds safety-program management, recordkeeping, and multi-employer policies for supervisors. The DOL card is identical in form.'},
      {q:'Do I need OSHA 10 before OSHA 30?',a:'No. You can take OSHA 30 directly. Many supervisors skip the 10-hour course entirely.'},
      {q:'How long does OSHA 30 take?',a:'30 contact hours, spread over at least four days because of the 7.5-hour daily cap; most finish in 4–7 days of focused study.'},
      {q:'Can I take OSHA 30 online?',a:'Yes. OSHA-authorized trainers offer the full 30-hour Construction course online as well as in person.'},
      {q:'Does the OSHA 30 card expire?',a:'Under federal OSHA it never expires, but many employers and some jurisdictions require a refresher every 3–5 years.'},
      {q:'How much does OSHA 30 cost?',a:'Typically $89–$189 online (DOL card included); in-person courses run $300–$600.'},
      {q:'Is OSHA 30 required by law?',a:'Federal OSHA does not require it, but many general contractors and some cities (e.g., NYC Local Law 196) mandate it for supervisory and safety-leadership roles.'},
      {q:'Who needs OSHA 30?',a:'Site supervisors, foremen, safety coordinators, and anyone with responsibility for others’ safety on a construction project.'},
      {q:'Can I finish OSHA 30 in one day?',a:'No. The 7.5-hour daily training cap means the 30 hours must span at least four calendar days.'},
      {q:'Is the DOL card the same as the OSHA 10 card?',a:'It is the same style of official DOL wallet card; the difference is the depth of training behind it, which is what employers look at.'}
    ]
  },
  'epa-608-certification': {
    factStrip: [{label:'Types',value:'I / II / III'},{label:'Per Section',value:'25 Qs'},{label:'Pass Mark',value:'70%'},{label:'Expires',value:'Never'}],
    examMeta: {questions:'25 per section',time:'Self-paced',pass:'70% (18/25) per section',fee:'$20–$35/section',format:'Multiple-choice (proctored)',admin:'EPA-approved orgs'},
    examTopicsTitle: 'What’s on the EPA 608 exam',
    examTopicsIntro: 'EPA 608 is organized into a mandatory Core section plus up to three Type sections. Universal certification means Core + all three Types. Each section is 25 multiple-choice questions; you need 70% (18/25) on each, scored independently:',
    parts: [
      {name:'Core (mandatory for all)',items:['Ozone depletion & the Clean Air Act','Venting prohibition & recovery/recycle/reclaim','Refrigerants, oils & leak-rate thresholds','Safe handling & person certification','A2L low-GWP refrigerants (R-454B, R-32)']},
      {name:'Type I — Small appliances',items:['Equipment with ≤5 lb original charge','Leak repair & verification','Recovery & evacuation procedures','Type I appliance rules']},
      {name:'Type II — High-pressure',items:['Splits, rooftop units (R-410A, R-22)','High-pressure leak-rate standards','Recovery & evacuation requirements','MVAC-like equipment']},
      {name:'Type III — Low-pressure',items:['Centrifugal & low-pressure chillers','Recovery & purge procedures','Evacuation & leak repair','Low-pressure specific rules']},
      {name:'Universal = Core + I + II + III',items:['100 questions total (four 25-Q sections)','Most employers prefer Universal','Take sections together or separately']}
    ],
    examEssentials: [
      ['Sections','Core (mandatory) + Type I, II, and/or III; Universal = all four'],
      ['Length','25 questions per section; Universal = 100 total'],
      ['Passing','70% (18/25) on each section — scored independently'],
      ['Format','Type I may be open-book/mail-in (84%); II, III & Universal are closed-book and proctored'],
      ['Validity','Permanent under federal law — never expires, no CE required']
    ],
    faqs: [
      {q:'What is EPA 608 certification?',a:'It is the federal credential required under Section 608 of the Clean Air Act before a technician may open a refrigerant circuit on stationary AC, heat-pump, or refrigeration equipment.'},
      {q:'What is the difference between Type I, II, III, and Universal?',a:'Type I covers small appliances (≤5 lb), Type II high-pressure systems (splits, rooftop units), Type III low-pressure chillers. Universal is Core plus all three and is what most employers want.'},
      {q:'How many questions are on the exam and what is the passing score?',a:'Each section is 25 multiple-choice questions; you need 70% (18 correct) per section. Universal is 100 questions total across the four sections.'},
      {q:'Does EPA 608 certification expire?',a:'No. Under federal law it is permanent — there is no expiration, renewal, or continuing education.'},
      {q:'Do I need experience or classes to get EPA 608?',a:'No. There is no education or experience prerequisite; many technicians self-study and test for $20–$90.'},
      {q:'How much does it cost?',a:'About $20–$35 per section through an EPA-approved organization; free testing is available from some providers (e.g., SkillCat). Universal typically runs $25–$90.'},
      {q:'What is the difference between EPA 608 and 609?',a:'Section 608 covers stationary refrigeration and AC; Section 609 is a separate credential for motor-vehicle air conditioning. They do not substitute for each other.'},
      {q:'Can I take EPA 608 online or for free?',a:'Yes. Many approved organizations offer online proctored testing, and some (like SkillCat) offer the training and exam free via a mobile app.'},
      {q:'What are A2L refrigerants and are they on the exam?',a:'A2L refrigerants (R-454B, R-32) are the new low-GWP replacements being phased in as R-410A is retired. EPA 608 now includes A2L handling and safety, so they appear on current exams.'},
      {q:'Is EPA 608 required by law?',a:'Yes for the work it covers — technicians who handle refrigerants without it face penalties exceeding $44,000 per day under the Clean Air Act.'}
    ]
  },
  'cpa-exam': {
    factStrip: [{label:'Sections',value:'4'},{label:'Time/Section',value:'4 hrs'},{label:'Pass Mark',value:'75 / 99'},{label:'Window',value:'18–30 mo'}],
    examMeta: {questions:'Varies by section',time:'4 hours/section',pass:'Scaled 75 of 99',fee:'~$262.64/section',format:'MCQ + task-based simulations',admin:'AICPA / NASBA'},
    examTopicsTitle: 'What’s on the CPA Exam',
    examTopicsIntro: 'Under CPA Evolution (2024+), the exam has 3 mandatory Core sections and 1 Discipline you choose. Each section is 4 hours, mixing multiple-choice questions with task-based simulations (and a written task on some). A scaled 75 of 99 passes:',
    parts: [
      {name:'Core — AUD (Auditing & Attestation)',items:['Ethics, professional responsibilities & independence','Risk assessment & internal controls','Evidence & sampling','Audit procedures & reporting']},
      {name:'Core — FAR (Financial Accounting & Reporting)',items:['Conceptual framework & GAAP','Financial statements & disclosures','Governmental & non-profit accounting','Selected transactions & reporting']},
      {name:'Core — REG (Regulation)',items:['Federal taxation — individuals','Entity taxation (C-corp, S-corp, partnership)','Business law & commercial transactions','Ethics & professional responsibilities']},
      {name:'Discipline (choose 1) — BAR',items:['Business Analysis & Reporting','Deeper FAR topics & data analytics','Financial risk & capital markets','Information technology in reporting']},
      {name:'Discipline (choose 1) — ISC',items:['Information Systems & Controls','SOC engagements','Data governance & lifecycle','IT security & controls']},
      {name:'Discipline (choose 1) — TCP',items:['Tax Compliance & Planning','Advanced individual & entity tax','Personal financial planning','Estate & gift taxation']}
    ],
    examEssentials: [
      ['Administrator','AICPA writes the exam; NASBA handles scheduling; Prometric proctors it'],
      ['Per section','4 hours; multiple-choice + task-based simulations (+ written on some)'],
      ['Passing score','Scaled 75 on a 0–99 scale (not a raw percentage)'],
      ['Credit window','18 months (most states) / 30 months (some) from your first passed section'],
      ['Format','Closed-book, computer-based, at a Prometric testing center']
    ],
    faqs: [
      {q:'How many exam sections are there and what are they?',a:'Four: the three Core sections — AUD, FAR, REG — and one Discipline you pick: BAR, ISC, or TCP.'},
      {q:'What score do I need to pass?',a:'A scaled 75 on the 0–99 exam scale, per section. It is a scaled score, not the percentage of questions you answered correctly.'},
      {q:'How long is the CPA exam and how long does the whole process take?',a:'Each section is 4 hours. Start to finish, most candidates license in 12–18 months including education, testing, ethics, and experience.'},
      {q:'What is the 150-hour rule?',a:'Every U.S. jurisdiction requires 150 semester hours of college credit to sit — about 30 hours beyond a typical bachelor’s degree.'},
      {q:'How much does it cost?',a:'Plan for $1,400–$2,000+ in fees (Board application, ~$262.64/section NASBA fee, Ethics, license). A review course adds $1,500–$3,500.'},
      {q:'CPA vs Enrolled Agent — which should I pursue?',a:'The CPA is state-licensed with the broadest scope, including audit and attest, and needs 150 hours. The EA is IRS-licensed for federal tax only, needs no degree, and is faster and cheaper.'},
      {q:'Can I take the CPA exam without an accounting degree?',a:'You need 150 credit hours, but not necessarily an accounting degree — many candidates reach 150 with a non-accounting bachelor’s plus extra coursework.'},
      {q:'What is the 18-month window?',a:'Once you pass your first section, most states give you 18 months (some 30) to pass the remaining three before the first expires.'},
    {q:'How hard is the CPA exam and what are the pass rates?',a:'It is widely regarded as difficult. Recent pass rates run roughly AUD 48%, FAR 42%, REG 63%, BAR 42%, ISC 68%, and TCP 78%.'}
  ]
  },
  'texas-real-estate-license': {
    factStrip: [{label:'Exam',value:'125 Qs'},{label:'Time',value:'4 hrs'},{label:'Exam Fee',value:'$43'},{label:'Pass Mark',value:'70% ea.'}],
    examMeta: {questions:'125 (85 national + 40 state)',time:'4 hours',pass:'70% on each section (56/85 national, 28/40 state)',fee:'$43',format:'Multiple-choice, in person (Pearson VUE)',admin:'Texas Real Estate Commission (TREC)'},
    examTopicsTitle: 'What\u2019s on the Texas exam',
    examTopicsIntro: 'The 125-question Texas exam splits into an 85-question national portion and a 40-question state portion. You must score 70% on each independently \u2014 there is no averaging. Topic weights below follow the current Pearson VUE outlines (national effective 3/1/2025, state effective 1/1/2026):',
    parts: [
      {name:'National portion (85 questions)',items:['Real Property Characteristics & Legal Descriptions','Ownership, Transfer & Recording of Title','Property Value & Appraisal','Real Estate Contracts & Agency','Real Estate Practice','Property Disclosures & Environmental Issues','Financing & Settlement','Real Estate Math (commission, prorations, LTV)']},
      {name:'Texas State portion (40 questions)',items:['TREC Commission Duties & Powers','Licensing & qualifications','Standards of Conduct','Agency & Brokerage','Contracts & Promulgated Forms','Special Topics \u2014 community property, homestead, DTPA, wills/estates, landlord-tenant, foreclosure']}
    ],
    examEssentials: [
      ['Location','In person at a Pearson VUE testing center \u2014 Texas does not allow online proctoring'],
      ['Format','125 multiple-choice questions in 4 hours (85 national + 40 state)'],
      ['Passing score','70% on EACH section \u2014 56/85 national and 28/40 state, scored independently'],
      ['Retake','No waiting period; within your eligibility window you may retake only the failed section'],
      ['Education','180 hours of TREC-approved pre-licensing courses required before you schedule']
    ],
    faqs: [
      {q:'How many questions are on the Texas real estate exam?',a:'125 total \u2014 85 national and 40 Texas-specific state questions \u2014 completed in 4 hours at a Pearson VUE center.'},
      {q:'What score do I need to pass?',a:'You must score 70% on each section independently: 56 of 85 on the national portion and 28 of 40 on the state portion. There is no averaging the two.'},
      {q:'Can I take the Texas real estate exam online?',a:'No. Texas requires in-person testing at a Pearson VUE center; remote online proctoring is not available for the salesperson exam.'},
      {q:'How much does it cost?',a:'The exam fee is $43 per attempt. Add roughly $206 for the TREC application and about $37 for fingerprinting \u2014 plan for ~$286 in baseline fees before any course.'},
      {q:'How long is the Texas exam?',a:'Four hours total: about 150 minutes for the national section and 90 minutes for the state section.'},
      {q:'Do I need a sponsoring broker before the exam?',a:'No. You can take and pass the exam first; your license is issued inactive until a Texas broker sponsors you.'},
      {q:'What real estate education is required?',a:'180 hours of TREC-approved pre-licensing courses \u2014 six 30-hour classes covering principles, agency, contracts, finance, and Texas law.'},
      {q:'What is the first-time pass rate?',a:'About 57% of first-time Texas takers pass, so structured exam prep materially improves your odds.'},
      {q:'What changed for the Texas exam in 2026?',a:'Item counts and the passing standard did not change. Updates include a refreshed state-law outline (effective 1/1/2026) and SB 1968, which requires a written buyer agreement before showing property or presenting an offer.'}
    ]
  }
};

export default examEditorial;
