// Depth content for: epa-608-universal
// EPA Section 608 Universal Certification
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Trades & technical certification desk',
    bio: 'EPA Section 608 exam structure, passing scores, section requirements and provider practices are verified against EPA regulatory requirements under 40 CFR Part 82, the EPA-approved testing organizations that administer the exam (including ESCO Institute, Mainstream Engineering and HVAC Excellence), and provider-published scoring documentation. Because the EPA sets requirements rather than publishing pass-rate statistics, we state plainly what is and is not published. Wage figures come from the Bureau of Labor Statistics occupational series for heating, air conditioning, and refrigeration mechanics and installers, named by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Universal certification structure (Core plus Types I, II and III), the 70% closed-book and 84% open-book passing scores, the lifetime validity and the exam fee range were checked against EPA 608 provider materials.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$59,810 median for heating, air conditioning, and refrigeration mechanics and installers (SOC 49-9021, BLS May 2024)',
    summary:
      'The wage that fits the EPA 608 Universal certification is the median for heating, air conditioning, and refrigeration mechanics and installers (SOC 49-9021), which was $59,810 per year in May 2024, with the lowest 10 percent earning less than $37,260 and the highest 10 percent earning more than $87,910. EPA 608 certification is the federal credential every technician who handles refrigerants must hold under the Clean Air Act, so the honest framing is that Universal certification is an employment gate rather than a salary lever: an HVAC employer cannot legally let you work on systems containing refrigerants unless you hold the appropriate EPA 608 type, and Universal — which covers all equipment types by passing Core plus Type I, Type II and Type III — is the version most employers expect, because it never limits the work a technician can accept. The wage story is therefore about the occupation the gate leads into: HVAC technician pay varies meaningfully by specialization and sector, with commercial and industrial work and experience moving technicians toward the top of the range, and the credential that matters for the money is the one that gets you hired and keeps you deployable across equipment types. Employment of HVAC mechanics and installers is projected to grow 6 percent from 2024 to 2034, faster than the average for all occupations, with about 34,300 openings a year, driven by new construction, aging infrastructure and the transition to heat pump systems — and the refrigerant transition itself matters here, because the AIM Act phasedown of high-GWP refrigerants means the regulatory landscape the EPA 608 exam covers is actively changing. The practical takeaway for candidates is that Universal certification is a one-time, lifetime credential priced around $20 to $40 at most approved providers, and it is one of the most cost-effective entry gates in the trades: the exam fee is trivial next to the employment requirement it satisfies.',
    rows: [
      { label: 'Median annual wage, HVAC mechanics and installers (49-9021)', value: '$59,810', note: 'BLS OOH Quick Facts, May 2024 ($28.76/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $37,260', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $87,910', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '377,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~34,300 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '6% projected change 2024-34 (faster than average); EPA 608 Universal is an employment gate every refrigerant-handling technician must pass, and the AIM Act HFC phasedown is actively reshaping the regulatory content',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heating, Air Conditioning, and Refrigeration Mechanics and Installers',
      url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm'
    }
  },

  passRate: {
    headline: 'The EPA publishes no pass rate — it sets passing scores: 70% per closed-book section and 84% for the open-book Core/Type I path, and the "84%" applies to that open-book path, not to Universal',
    summary:
      'The EPA does not publish pass-rate statistics for the Section 608 certification, and no approved testing organization publishes national pass rates either, so any figure you see online is a provider estimate rather than official data — but the EPA and its approved organizations do publish the passing scores, and the most common confusion in the prep market is about what those numbers are. The rule is: every section (Core, Type I, Type II and Type III) is scored independently, and on the closed-book path you must answer 70 percent correctly — 18 of 25 questions on the most common 25-question format — in each section you take. The higher figure, 84 percent (21 of 25), applies specifically to the open-book Core or Type I mail-in path offered by some providers, and an open-book Core cannot count toward Universal certification, which requires a proctored Core. So the phrasing "84 percent for universal" is backwards: Universal is earned by passing all four sections on the proctored path at 70 percent each, which is 100 questions total on the 25-per-section format, and the 84 percent line is the stricter open-book alternative for technicians certifying on a single type without proctoring. The practical implications matter more than the numbers game: sections are scored independently, so a strong Core does not carry a failed Type II; passed sections are retained, so you only retake what you failed; the certification is valid for life with no renewal; and providers vary in detail — ESCO Institute, Mainstream Engineering and HVAC Excellence all administer the exam, with slightly different question counts (some use 30-question sections, needing 21 correct) and fees. Because no official pass rate exists, the useful published numbers are the 70 percent and 84 percent lines, the section retention rule and the lifetime validity.',
    source: {
      label: 'EPA — Section 608 Certification for Technicians (Clean Air Act)',
      url: 'https://www.epa.gov/section608/section-608-certification-technicians'
    },
    caveat:
      'No pass-rate statistic is published by the EPA or by approved testing organizations; the 70% closed-book and 84% open-book passing scores, the 18-of-25 (or 21-of-30, by provider) section requirements, the section-retention rule and the lifetime validity are the published, verifiable facts. The common claim that "84% is the Universal pass score" misstates the rules: 84% applies to the open-book Core/Type I path, and Universal requires 70% on each proctored section.'
  },

  studyPlan: {
    summary:
      'Plan for 2 to 4 weeks and 15 to 30 hours of study for the EPA 608 Universal exam, because the exam tests a bounded body of regulatory and mechanical knowledge — 100 questions total on the common 25-per-section format across Core, Type I, Type II and Type III, passed at 70 percent on each section — and most of the content is learnable fact rather than deep theory. The Core section covers ozone depletion, the Clean Air Act and 40 CFR Part 82 regulations, refrigerant safety and the refrigeration cycle; Type I covers small appliances with five pounds or less of refrigerant; Type II covers high-pressure systems using refrigerants like R-410A and R-22; and Type III covers low-pressure centrifugal chillers. The effective sequence is: first, learn the Core material cold, because Core is mandatory for every technician and covers the regulatory items that are the highest-density memorization on the exam — leak-rate requirements, recovery levels, penalties and the ozone-depletion story; second, study the sections you need — Universal means all three types, so work Type II first because it is the most commonly attempted and most commonly failed, covering the residential and commercial high-pressure systems most technicians actually service; third, drill recovery requirements and pressure-temperature relationships, which are heavily tested in every section; fourth, take a full 100-question practice exam and confirm you are at 70 percent or better in every section independently, because sections do not average; and fifth, schedule with an approved provider — ESCO, Mainstream or HVAC Excellence — at a fee typically around $20 to $40, and understand that passed sections are retained if you fail one, so a failed section means retaking only that section. Note that Universal requires a proctored Core, so the open-book mail-in path cannot produce a Universal certification, and the certification never expires once earned.',
    totalHours: '15-30 hours over 2-4 weeks (many candidates with HVAC background pass in a weekend of review)',
    weeks: [
      { label: 'Week 1', focus: 'Core section', tasks: ['Learn ozone depletion, the Clean Air Act and 40 CFR Part 82 regulation structure', 'Memorize leak-repair requirements, recovery levels and penalty provisions', 'Study the refrigeration cycle and pressure-temperature relationships'], hours: '6-8 hrs' },
      { label: 'Week 2', focus: 'Type I and Type II', tasks: ['Type I: small-appliance recovery procedures, equipment certification, common refrigerants', 'Type II: high-pressure systems — R-410A and R-22, evacuation levels, leak rates', 'Drill the recovery-level numbers: inches of mercury vacuum and percentages'], hours: '6-8 hrs' },
      { label: 'Week 3', focus: 'Type III and full practice', tasks: ['Type III: low-pressure centrifugal chillers, purge units, vacuum operation', 'Take a full 100-question practice exam scored per section', 'Re-study any section below the 70% line — sections do not average'], hours: '5-7 hrs' },
      { label: 'Final days', focus: 'Taper and scheduling', tasks: ['Drill the weakest section once more', 'Schedule with an approved provider (ESCO, Mainstream, HVAC Excellence)', 'Confirm the proctored Core requirement and the fee'], hours: '3-5 hrs' }
    ],
    variants: [
      { label: 'Working HVAC technician', detail: 'One to two weeks. Your field experience covers much of Type II; focus on Core regulatory memorization and Type III, the section most technicians skip because they never work on chillers — Universal requires it.' },
      { label: 'Type I-only path (small appliances)', detail: 'One week at most. If you only service small appliances, Core plus Type I at 70% each qualifies you, and the open-book 84% path is available from some providers — but it cannot count toward Universal later.' },
      { label: 'Pre-employment, no HVAC background', detail: 'Three to four weeks. Start with the refrigeration cycle and refrigerant types before the regulatory content, and take a structured course or study guide, because the mechanical concepts need more time when you have no field context.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that passes the EPA 608 Universal exam is "memorize the regulations, know your recovery levels, and drill every section to 70 percent independently," because roughly 40 percent of the exam is regulatory memorization — leak rates, recovery requirements, penalties and ozone-depletion facts that are straightforward points when learned cold — and because sections are scored independently, a strong Core cannot carry a weak Type II. The highest-yield habit is studying the recovery requirements as exact numbers: the required recovery levels in inches of mercury vacuum and percentages differ by equipment size and refrigerant, and they are the most heavily tested specific figures on the exam, so drill them until the numbers are reflex. A second proven approach is knowing your pressure-temperature charts: understand saturation temperatures for common refrigerants and how they relate to gauge readings, because pressure-temperature questions recur across sections. Third, do not overthink Type III — it is considered the easiest section by most technicians and its content is a bounded set (purge units, water-tube condensers, operating in a vacuum), so a few focused hours close it completely. Fourth, use free practice exams and the EPA\u2019s published sample questions, and take at least three or four full practice exams before the real one, scored section by section. Finally, schedule with a reputable approved provider, understand the section-retention rule (a passed section stays passed, so a failure costs one retake, not the whole exam), and read the current regulations, because the AIM Act HFC phasedown has changed what the exam covers.',
    items: [
      { title: 'Memorize the regulatory content cold', detail: 'Roughly 40 percent of the exam is regulation-based: leak-rate requirements, recovery levels, penalties, ozone-depletion science. These are straightforward memorization and the easiest points on the paper — do not leave them on the table.' },
      { title: 'Drill recovery levels as exact numbers', detail: 'The required recovery levels — in inches of mercury vacuum and percentages — differ by equipment type and refrigerant, and they are the most heavily tested specific figures. Know them exactly; approximate knowledge fails on the precise-number items.' },
      { title: 'Master pressure-temperature relationships', detail: 'Understand saturation temperatures for common refrigerants and how they relate to gauge readings. Pressure-temperature items recur across sections, and technicians who work by feel lose points that chart knowledge would have won.' },
      { title: 'Do not skip Type III', detail: 'Universal requires all three types, and Type III — low-pressure centrifugal chillers — is the section most residential technicians skip because they never work on chillers. It is a bounded topic (purge units, vacuum operation) and a few focused hours close it.' },
      { title: 'Take full section-scored practice exams', detail: 'Sections are scored independently, so a full-length practice exam must be scored per section, not as a total. Take three or four and confirm every section is at 70 percent or better before scheduling.' },
      { title: 'Read the current regulations', detail: 'The AIM Act phasedown of high-GWP HFCs has changed the regulatory content of the exam. Use current study material and check the EPA\u2019s Section 608 pages, because a study guide written before the phasedown will have stale content.' }
    ]
  },

  resourceComparison: {
    summary:
      'The EPA 608 Universal exam is one of the cheapest certifications in the trades to prepare for because the regulatory content is bounded and the official materials are free: the EPA publishes Section 608 guidance and sample questions, and the approved testing organizations publish their own exam-prep materials, with exam fees typically around $20 to $40 at most providers. The comparison below separates the exam, the free official materials and the paid prep options, with prices current to this review. The rule that works: use the EPA\u2019s free materials and one good study guide for the regulatory content, take free practice exams for volume, and keep the total cost under about $75 including the exam — anything more is paying for structure, not content.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'The EPA 608 Universal exam itself', values: ['~$20-40 at most providers (ESCO ~$30)', 'Proctored exam at an approved organization', 'Required — Core plus Types I, II and III at 70% each'] },
      { label: 'EPA Section 608 guidance and sample questions', values: ['Free', 'Web guidance and published sample questions', 'The authoritative regulatory content'] },
      { label: 'Approved-provider study guides (ESCO, Mainstream, HVAC Excellence)', values: ['~$15-40', 'Printed or digital manual with practice questions', 'Structure aligned to the exact exam format'] },
      { label: 'Online EPA 608 prep courses', values: ['~$30-150', 'Video and interactive practice', 'Candidates without an HVAC background who want instruction; the content is otherwise learnable free'] },
      { label: 'Free practice-exam sites', values: ['Free', 'Web-based practice questions with explanations', 'Volume drilling and section-scored practice'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; provider fees vary and some approved organizations bundle study materials with the exam fee. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The most common mistake is misreading the passing scores — treating 84 percent as the Universal requirement when Universal requires 70 percent on each proctored section and 84 percent applies to the open-book Core or Type I path. The second is treating the exam as one test with one total score, when sections are scored independently and a strong Core cannot carry a failed Type II. A third recurring error is skipping Type III because a residential technician never touches chillers, losing the whole Universal designation over one bounded section. Candidates also routinely study recovery levels as approximate knowledge, losing the precise-number items that dominate, and many fail to take section-scored practice exams, arriving without knowing which section sits below the line. Finally, some technicians take the open-book mail-in Core to save time and then discover it cannot count toward Universal, which requires a proctored Core.',
    items: [
      { mistake: 'Believing 84% is the Universal passing score', fix: '84% (21 of 25) applies to the open-book Core or Type I path. Universal requires 70% (18 of 25) on each proctored section — Core plus Types I, II and III — and an open-book Core cannot count toward Universal.' },
      { mistake: 'Averaging sections instead of scoring them independently', fix: 'Every section is scored on its own 70% line, and passed sections are retained while failed sections must be retaken. A 95% Core does not rescue a 65% Type II, so practice exams must be scored per section, not as a total.' },
      { mistake: 'Skipping Type III', fix: 'Universal requires all three types. Type III — low-pressure centrifugal chillers — is a bounded topic (purge units, vacuum operation) and a few focused hours close it; skipping it turns the whole Universal designation into a single-type certification.' },
      { mistake: 'Studying recovery levels approximately', fix: 'The most heavily tested specific figures are the recovery levels — inches of mercury vacuum and percentages — which differ by equipment type and refrigerant. Learn them as exact numbers; approximate knowledge fails the precise-number items.' },
      { mistake: 'Never taking a section-scored practice exam', fix: 'Take at least three or four full-length practice exams scored per section before scheduling. You need to know which section sits below the 70% line, and a total-score habit hides that.' },
      { mistake: 'Using the open-book path for Universal', fix: 'Universal requires a proctored Core. The open-book mail-in Core or Type I path (the 84% line) is fine for single-type certification but cannot count toward Universal, so if Universal is your goal, take the proctored path from the start.' }
    ]
  },

  questionTypes: {
    summary:
      'The EPA 608 Universal exam is 100 multiple-choice questions on the common format — 25 questions each in Core, Type I, Type II and Type III — completed in roughly two hours with a passing score of 70 percent (18 of 25) per section on the proctored path, and the sections are scored independently with passed sections retained. Core covers the Clean Air Act and 40 CFR Part 82 regulations, ozone depletion, refrigerant safety and the refrigeration cycle; Type I covers small appliances; Type II covers high-pressure systems with refrigerants like R-410A and R-22; and Type III covers low-pressure centrifugal chillers. Some approved organizations use 30-question sections needing 21 correct, so confirm your provider\u2019s format. The question mix is regulatory memorization, mechanical knowledge and pressure-temperature calculations, and recovery-level figures are the most heavily tested specific content. The samples below are editor-written illustrations of the published question styles, not live exam items.',
    types: [
      { name: 'Core: regulations and environmental science', share: '25 questions (25%)', detail: 'Ozone depletion, the Clean Air Act, 40 CFR Part 82, leak-repair requirements, recovery levels and penalties. The highest-density memorization on the exam.' },
      { name: 'Type I: small appliances', share: '25 questions (25%)', detail: 'Systems with five pounds or less of refrigerant, small-appliance recovery procedures and equipment certification.' },
      { name: 'Type II: high-pressure systems', share: '25 questions (25%)', detail: 'R-410A and R-22 residential and commercial systems, pressure-temperature relationships, evacuation and leak rates. The most commonly failed section.' },
      { name: 'Type III: low-pressure chillers', share: '25 questions (25%)', detail: 'Centrifugal chillers, purge units, water-tube condensers and operating in a vacuum. Considered the easiest by most technicians.' }
    ],
    samples: [
      {
        prompt: 'What is the primary environmental concern associated with CFC and HCFC refrigerants that the Clean Air Act regulations address?',
        options: [
          'A. They are toxic to humans when inhaled',
          'B. They deplete the stratospheric ozone layer',
          'C. They cause acid rain',
          'D. They contribute to smog formation'
        ],
        answer: 'B',
        explanation: 'CFC and HCFC refrigerants contain chlorine, and when released, chlorine atoms destroy stratospheric ozone — which is the environmental harm the Clean Air Act Section 608 regulations exist to prevent, so B is the reason the whole certification regime exists. A is wrong because the regulatory concern is ozone depletion, not acute inhalation toxicity. C and D describe other pollutant effects that are not the ozone story at the centre of Section 608. Core items reward knowing the causal chain: chlorine atoms from CFCs and HCFCs break down ozone, which is why the recovery, recycling and reclamation requirements exist.'
      },
      {
        prompt: 'When a technician is preparing to ship a recovered refrigerant cylinder for reclamation, which labeling requirement is correct?',
        options: [
          'A. No label is required if the cylinder is clearly a refrigerant cylinder',
          'B. Label the cylinder with the refrigerant type and a recovery-status label such as "Used CFC Refrigerant — For Reclamation Only"',
          'C. Label the cylinder as hazardous waste only',
          'D. The shipping label is the responsibility of the reclamation facility, not the technician'
        ],
        answer: 'B',
        explanation: 'Regulations require recovered refrigerant cylinders to be labeled with the refrigerant type and a recovery-status designation such as "Used CFC Refrigerant — For Reclamation Only" before shipping, so the receiving facility and anyone handling the cylinder know exactly what it contains — which B states. A fails the labeling requirement entirely. C is wrong because recovered refrigerant for reclamation is not labeled as hazardous waste; it is labeled with its status for reclamation. D shifts a duty the regulation places on the technician who recovers and ships. This is the type of precise regulatory item where the exact labeling language is the tested fact.'
      },
      {
        prompt: 'R-134a has a global warming potential (GWP) of approximately 1,430 relative to carbon dioxide. Why does this matter under current EPA regulation?',
        options: [
          'A. R-134a must be recovered and recycled because it depletes the ozone layer',
          'B. High-GWP HFCs like R-134a are subject to the AIM Act phasedown of HFC refrigerants',
          'C. R-134a is exempt from all Section 608 requirements',
          'D. The GWP of R-134a only matters for international shipping, not domestic service'
        ],
        answer: 'B',
        explanation: 'R-134a does not deplete ozone (it is an HFC, with no chlorine), but its high GWP makes it subject to the AIM Act phasedown that is reducing high-GWP HFC production and use over time — so B connects the GWP fact to the regulation that now governs it. A is wrong because ozone depletion is not the R-134a story; that is a CFC/HCFC story. C is wrong because HFCs are covered by Section 608 recovery requirements. D is wrong because the phasedown is domestic and affects normal service. The question reflects how the exam has modernized: GWP and the AIM Act are current regulatory content, and knowing which refrigerant class each rule targets is the tested distinction.'
      }
    ],
    note: 'Samples are editor-written illustrations of the EPA 608 question styles; they are not live exam items.'
  },

  examDay: {
    summary:
      'The EPA 608 Universal exam is a proctored multiple-choice test of 100 questions on the common format — 25 per section across Core, Type I, Type II and Type III — completed in roughly two hours at an EPA-approved testing organization, with each section passed independently at 70 percent (18 of 25) on the proctored path, and the certification is valid for life once all sections pass. The first thing to confirm is your provider\u2019s exact format, because approved organizations vary: ESCO Institute, Mainstream Engineering and HVAC Excellence all administer the exam, fees run around $20 to $40, and some providers use 30-question sections needing 21 correct, so check the provider\u2019s published format before the day. Bring a valid photo ID and the payment method your provider accepts, and confirm whether the exam is on paper or computer at your site; most providers proctor in person, and some offer online proctored testing. Leave phones, smartwatches and study materials in your vehicle, and leave any notes on pressure-temperature charts or recovery levels at home, because the exam is closed book on the proctored path — the open-book option exists only for the single-type mail-in path that cannot produce Universal. Arrive early, and on the exam work section by section: the regulatory Core items are fast if you memorized them, Type II is the section candidates run slowest on, and Type III is usually quick. Sections are scored independently and passed sections are retained, so if one section fails, you retake only that section rather than the whole exam. The result is typically available immediately or within a few days depending on your provider, and once all four sections pass, your Universal certification is permanent with no renewal.',
    bring: [
      'Valid government-issued photo ID',
      'The payment method your provider accepts (the fee is typically ~$20-40)',
      'Your provider\u2019s scheduling confirmation and any pre-exam registration paperwork',
      'Nothing else — the exam is closed book on the proctored path'
    ],
    leave: [
      'Phones, smartwatches and earbuds',
      'All notes, study guides and pressure-temperature charts — closed book',
      'The expectation that the open-book mail-in path can produce Universal certification — it cannot',
      'Bags and coats beyond what the testing site permits'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your provider\u2019s format (25 or 30 questions per section), the fee, and the proctoring method. Confirm every section is above 70% on practice.' },
      { time: '24 hours before', detail: 'Drill the recovery levels and leak-rate numbers one final time, then stop. Get a normal night of sleep; the regulatory numbers are memorized, not re-learned at the desk.' },
      { time: '30 minutes before', detail: 'Arrive, check in, complete ID verification and payment, and get seated.' },
      { time: 'The exam', detail: 'Work section by section: Core first, then Type II (the slowest), then Type I and Type III. Answer every question — blanks are zeros.' },
      { time: 'After the exam', detail: 'Collect your per-section results. Passed sections are retained; if one failed, schedule a retake of only that section. Once all four pass, the certification is permanent.' }
    ],
    rules: [
      'The exam is closed book on the proctored path; no notes or references are permitted.',
      'Universal requires passing Core, Type I, Type II and Type III — 100 questions on the common 25-per-section format — at 70% (18 of 25) each, scored independently.',
      'The open-book Core or Type I path requires 84% (21 of 25) and cannot count toward Universal, which requires a proctored Core.',
      'Passed sections are retained; failed sections can be retaken alone, and the certification is valid for life with no renewal.',
      'Some approved organizations use 30-question sections requiring 21 correct — confirm your provider\u2019s format.',
      'The AIM Act HFC phasedown has updated the regulatory content; be sure your study material is current.'
    ],
    afterwards:
      'Passing all four sections earns the EPA 608 Universal certification, which is permanent under federal law — no renewal, no continuing education, and your card from the approved provider is the document employers and inspectors verify, usually mailed within a few weeks or emailed as a digital credential. Universal means you can legally handle refrigerants on any equipment type, which is why most HVAC employers treat it as the default hiring credential, and it never limits the work you can accept the way a single-type certification can. If you failed a section, the section-retention rule means you retake only that section at the provider\u2019s per-section retake fee (often $10 to $30), so the path back is a targeted one: re-drill the failed section\u2019s content and schedule the retake within days if your provider allows. From there the next rungs in the trade are state HVAC licensure where your state requires it, the NATE certification that employers use for specialty competence, and the manufacturer certifications that warranty work increasingly demands — with the EPA 608 card as the permanent federal credential underneath them all.'
  }
};

export default data;
