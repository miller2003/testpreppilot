// Research batch 4 — state-issued beauty and wellness credentials.
//
// Deep prose is written once per template and reused across every jurisdiction that
// issues the credential. Only agency, agencyUrl, fee, note and compactMember vary.
//
// Omission policy: a state code is absent from `states` when that jurisdiction does
// not issue the credential at all. The deliberate omissions in this batch are:
//   • cosmetology-instructor — CA, CO, FL and TX issue no separate instructor licence.
//   • massage-therapist      — KS, MN and WY have no state credential of any kind;
//                              CA has no state licence (CAMTC certification is a
//                              voluntary private-nonprofit credential).
// Everything else in this batch is genuinely licensed in all 51 jurisdictions.
//
// Compact note: compacts.mjs contains no beauty or massage compact id, so
// `reciprocity.compact` is null in all six dossiers. Real, separately enacted
// compacts nevertheless exist and are recorded per state via `compactMember`:
//   • Cosmetology Licensure Compact — AL, AZ, CO, KS, KY, MD, OH, TN, VA, WA, WV
//   • Esthetics Licensure Compact   — AL, KS, VA
//   • Interstate Massage Compact    — AR, MT, NV, OH, VA
// None of the three has begun issuing multistate privileges yet.

export default [
  // ══════════════════════════════════════════════════════════════════════
  // 1. Cosmetologist
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'cosmetologist',
    name: 'Cosmetologist License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'The broad-scope beauty licence covering hair, skin and nail services, issued by every US state and the District of Columbia.',

    overview:
      'A cosmetologist licence is the widest-scope credential in the beauty industry: it authorises cutting, colouring and chemically treating hair, performing facials and hair removal, and providing manicures and pedicures. Every one of the 50 states and the District of Columbia licenses cosmetologists, so unlike auctioneering or home inspection there are no jurisdictions to exclude — but the requirements behind the same job title differ more dramatically than in almost any other regulated occupation. Required school hours run from 1,000 in California, Massachusetts, New York and Texas to 2,100 in Iowa, Nebraska, Oregon and South Dakota, a two-to-one gap that translates into roughly a year of extra tuition. Connecticut does not even use the word: its statute licenses a "Hairdresser and Cosmetician" under Chapter 387. Since 2021 a deregulatory wave has cut hours in California, Utah, Virginia and elsewhere, and Massachusetts and Mississippi have dropped the practical exam entirely.',
    eligibility:
      'Minimum age is typically 16 or 17, and the education floor is usually a high school diploma or GED — but a substantial minority of boards accept less: Alabama and Ohio require only 10th grade, Connecticut only 9th grade, and Ohio lowered the barbering entry age to 16 in 2024. Applicants must complete the state-mandated clock hours at a school licensed by that state board (hours earned at an unlicensed school never count) and pass the required examinations. Criminal history is reviewed case by case rather than as an automatic bar, and most boards will issue a pre-application determination. Legal presence in the United States is required; state residency generally is not, and roughly 21 jurisdictions accept a documented apprenticeship — usually double the school hours — in place of formal schooling.',
    exam: {
      admin: 'NIC (National-Interstate Council of State Boards of Cosmetology) exams delivered by PSI, Prometric or Pearson VUE; New Jersey, New York, Pennsylvania and Texas use state-developed exams',
      questions: 'Written theory exam of roughly 100 multiple-choice questions, plus a state law and rules section in many jurisdictions',
      time: '90–120 minutes for the written exam; 3–5 hours for the hands-on practical where required',
      pass: 'Usually 70–75% (South Carolina and Washington set 75%)',
      fee: '$40–$180 depending on jurisdiction and whether the written and practical are billed separately',
      format: 'Computer-based written theory plus, in about 40 of the 51 jurisdictions, a live practical performed on a mannequin head or model. Massachusetts eliminated its practical in October 2023, Mississippi in February 2026, and California, Illinois, Nebraska and Oregon are written-only.'
    },
    education: {
      hours: '1,000–2,100 clock hours of board-approved cosmetology school, median 1,500',
      note: 'This is the single most variable requirement in the trade. The 1,000-hour tier is California, Massachusetts, New York and Texas; 1,200 covers Florida and New Jersey; the median 1,500 covers roughly half the country; and the 2,100-hour tier is Iowa, Nebraska, Oregon and South Dakota. Recent statutory cuts include California (1,600 to 1,000 in 2022), Idaho (2,000 to 1,600 in 2022), Virginia (1,500 to 1,000 for students enrolling after September 2024) and Utah (1,600 to 1,250 in January 2026), so a figure published even two years ago may be stale. About 21 jurisdictions permit an apprenticeship of roughly double the school hours instead. Hours from one state are not automatically portable — a 1,000-hour Texas graduate moving to Iowa will normally be told to make up the shortfall or document work experience.'
    },
    prerequisites:
      'Minimum age of 16–18 depending on the state; a high school diploma, GED, or in some states only 9th or 10th grade completion; and full completion of the state-required clock hours at a school licensed by that state board, evidenced by an official transcript sent directly from the school to the board.',
    costBreakdown: {
      items: [
        { item: 'Cosmetology school tuition (1,000–2,100 hours)', fee: '$8,000–$25,000' },
        { item: 'Kit, textbooks and mannequins', fee: '$1,000–$3,000' },
        { item: 'Written theory examination', fee: '$40–$90' },
        { item: 'Practical examination (where required)', fee: '$50–$110' },
        { item: 'Initial licence application', fee: '$25–$150' },
        { item: 'Biennial renewal', fee: '$40–$150' }
      ],
      total: '$70–$450 in state fees; $10,000–$28,000 once tuition and kit are included'
    },
    timeline: [
      { stage: 'Cosmetology school', duration: '9–15 months full time in a 1,500-hour state; up to 24 months at 2,100 hours or part time' },
      { stage: 'Board application and exam authorisation', duration: '2–6 weeks after the school files the transcript' },
      { stage: 'Written and practical examinations', duration: '1–4 weeks to schedule and sit' },
      { stage: 'Licence issuance', duration: '1–4 weeks after passing scores are reported' }
    ],
    route: [
      { title: 'Confirm your state hour requirement before enrolling', description: 'Check the board site rather than a school brochure. The difference between a 1,000-hour and a 2,100-hour state is roughly a year of tuition, and several states cut their requirement between 2022 and 2026 without schools updating their marketing.' },
      { title: 'Enrol at a school licensed by your state board', description: 'Only hours earned at a school holding a current licence from that specific board count. Out-of-state and unlicensed-academy hours are routinely rejected, and NACCAS accreditation is a financial-aid credential, not a substitute for board licensure.' },
      { title: 'Complete the clock hours and have the transcript filed', description: 'Boards accept transcripts sent directly from the school, not from the student. Some states also require documented service counts (for example a minimum number of haircuts, colours and perms) alongside raw hours.' },
      { title: 'Pass the written theory exam', description: 'Most states use the NIC national theory exam plus a state law and rules section. Study infection control and state law hardest — those sections fail more candidates than hair chemistry does.' },
      { title: 'Pass the practical exam where required', description: 'About 40 jurisdictions still run a hands-on practical on a mannequin or live model, judged mainly on sanitation and safety procedure rather than artistry. Bring the exact kit listed in the candidate information bulletin; missing items are scored as failures.' },
      { title: 'Apply for the licence and diarise renewal', description: 'Submit the application, fee and passing scores. Note the renewal cycle (usually biennial) and any continuing-education requirement — Connecticut requires 10 CEUs, Florida 10, Georgia 5, and many states none at all.' }
    ],
    providersNote:
      'The only authoritative source for hours, fees and approved schools is the state board itself; per-state figures below are drawn from 2026 board-sourced comparison tables (getlicensemap.com, cosmetologyexamprep.com, salonexam.com) cross-checked against the NIC State Education and Licensing Guide, and should be confirmed on the board fee page before you spend money. The fee shown for each state is the approximate total of state-collected application and examination charges and excludes tuition, kit and any salon or establishment licence. Exam preparation is dominated by NIC-aligned material — Milady, Pivot Point and the free NIC candidate information bulletins — and the practical exam is scored against the published NIC criteria sheet, which is worth downloading directly rather than relying on a school summary.',
    faqs: [
      {
        q: 'Why do training hours differ so much between states?',
        a: 'Because clock-hour minimums are set by state statute or board rule, not by any national standard, and they were set decades apart for different reasons. Iowa, Nebraska, Oregon and South Dakota still require 2,100 hours; California, Massachusetts, New York and Texas require 1,000. Research repeatedly finds no consumer-safety difference between the tiers, which is why a deregulatory wave since 2021 has cut hours in California, Idaho, Utah and Virginia. Always verify the current figure — this is the fastest-changing rule in the trade.'
      },
      {
        q: 'Is there an interstate compact for cosmetology?',
        a: 'Yes, but it is not operating yet. The Cosmetology Licensure Compact was finalised in 2023 and has been enacted in Alabama, Arizona, Colorado, Kansas, Kentucky, Maryland, Ohio, Tennessee, Virginia, Washington and West Virginia. The commission has been organised, but no multistate privilege to practise has been issued to date. Until it goes live, moving states still means applying for licensure by endorsement or reciprocity in the destination state.'
      },
      {
        q: 'Can I transfer my licence to another state today?',
        a: 'Usually, through endorsement or reciprocity, but rarely automatically. Most boards compare your original training hours to their own and will require you to make up a shortfall, document one to three years of licensed work experience, or sit their state law exam. States with high hour requirements are the hardest destinations; states that grant reciprocity only to jurisdictions with equal-or-greater requirements (Alaska, Colorado, Delaware among them) will simply decline an application from a lower-hour state without extra work experience.'
      },
      {
        q: 'Do I still have to take a practical exam?',
        a: 'In about 40 of the 51 jurisdictions, yes. Massachusetts dropped its practical in October 2023 and Mississippi in February 2026; California, Illinois, Nebraska and Oregon are also written-only. Where a practical is required it is a sanitation-and-procedure test, not a styling competition — candidates fail for skipping disinfection steps far more often than for a poor haircut.'
      },
      {
        q: 'Does a cosmetology licence cover nails, skin and hair everywhere?',
        a: 'Almost everywhere, yes — that breadth is the point of the credential. The main exception is Oregon, which licenses by field (hair design, esthetics, nail technology and barbering) and treats "cosmetology" as the combination of all of them. Some states also carve out advanced services: master esthetician work in Utah, Washington and Virginia, and laser or medical-adjacent treatments almost everywhere, require additional credentials that a standard cosmetology licence does not confer.'
      },
      {
        q: 'What is the difference between a cosmetologist and a barber licence?',
        a: 'Scope and tradition rather than skill. Cosmetology covers hair, skin and nails; barbering centres on haircutting, shaving with a straight razor and facial hair, and in most states now includes chemical services too. Barbering usually requires fewer hours (New York 500, Vermont 750, versus 1,000–2,100 for cosmetology) and several states offer a short crossover programme — Ohio, for example, lets a licensed cosmetologist complete 1,000 rather than 1,800 barbering hours.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'The Cosmetology Licensure Compact, drafted by the Council of State Governments with the Department of Defense and finalised in 2023, has been enacted in eleven jurisdictions — Alabama, Arizona, Colorado, Kansas, Kentucky, Maryland, Ohio, Tennessee, Virginia, Washington and West Virginia — and each of those is flagged compactMember: true below. The compact commission has been constituted but has not yet begun issuing multistate licences, so as of the most recent verification no cosmetologist can actually practise across state lines on a compact privilege. There is no matching compact id in compacts.mjs, so `compact` is null. In the meantime portability runs through endorsement or reciprocity: the destination board compares your training hours and licensed work experience against its own standard, and states such as Alaska, Colorado and Delaware accept only licences from jurisdictions with equal or greater requirements. Georgia additionally refuses reciprocity to a named list of states. Assume you will need certified licence verification sent board-to-board, a fee, and possibly the destination state law exam.'
    },

    defaultAgency: 'State Board of Cosmetology',
    sourceUrl: 'https://nictesting.org/state-boards/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Board of Cosmetology and Barbering', agencyUrl: 'https://aboc.alabama.gov', fee: '≈$285 in state fees', note: '1,500 hours; 10th grade education and minimum age 16. NIC theory and practical delivered by Prometric since October 2021. Apprenticeship pathway available.', compactMember: true },
      AK: { agency: 'Alaska Board of Barbers and Hairdressers, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofBarbersHairdressers.aspx', fee: '≈$450 in state fees', note: '1,650 hours — one of the highest in the country and the reason Alaska grants reciprocity only to states with equal or greater requirements. Apprenticeship permitted.', compactMember: false },
      AZ: { agency: 'Arizona Board of Cosmetology and Barbering', agencyUrl: 'https://boc.az.gov', fee: '≈$240 in state fees', note: '≈1,600 hours; the legislature has repeatedly debated cuts, so confirm the current figure. Uses NIC theory and practical (about $177 combined). Compact enacted.', compactMember: true },
      AR: { agency: 'Arkansas Department of Health, Cosmetology Section', agencyUrl: 'https://healthy.arkansas.gov/programs-services/topics/cosmetology', fee: '≈$175 in state fees', note: '1,500 hours; apprenticeship alternative available. Reciprocity applicants with under 1,500 hours must show a year of continuous practice.', compactMember: false },
      CA: { agency: 'California Board of Barbering and Cosmetology, Department of Consumer Affairs', agencyUrl: 'https://www.barbercosmo.ca.gov', fee: '≈$125 in state fees', note: '1,000 hours after AB 3211 cut the requirement from 1,600 in 2022, and the practical exam was eliminated — written only. Apprenticeship permitted. Not a compact state.', compactMember: false },
      CO: { agency: 'Colorado Office of Barber and Cosmetology Licensure, DORA Division of Professions and Occupations', agencyUrl: 'https://dpo.colorado.gov/BarberCosmetology', fee: '≈$159 in state fees', note: '1,500 hours (some 2026 tables list 1,800 — confirm with DORA). Endorsement is granted only from states with substantially equivalent requirements. Compact enacted.', compactMember: true },
      CT: { agency: 'Connecticut Department of Public Health, Practitioner Licensing and Investigations Section', agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/hairdresser/hairdressers-and-cosmeticians', fee: '≈$165 in state fees', note: 'Statutory title is "Hairdresser and Cosmetician" (CGS Chapter 387), not cosmetologist. 1,500 hours including at least 17 classroom and 300 clinical hours on textured hair; only a 9th grade education is required. Prometric administers; no practical exam. 10 CEUs at each biennial renewal.', compactMember: false },
      DE: { agency: 'Delaware Board of Cosmetology and Barbering, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/cosmetology/', fee: '≈$353 in state fees', note: '1,500 school hours or a 3,000-hour apprenticeship; 10th grade education. Reciprocity requires an equal-or-greater state, or a notarised employer statement covering five years of work.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Barber and Cosmetology, Department of Licensing and Consumer Protection', agencyUrl: 'https://dlcp.dc.gov/service/board-barber-and-cosmetology', fee: '≈$230 in state fees', note: '1,500 hours; no apprenticeship pathway. Practical exam required. DC, Maryland and Virginia licensees frequently hold credentials in all three jurisdictions.', compactMember: false },
      FL: { agency: 'Florida Board of Cosmetology, Department of Business and Professional Regulation', agencyUrl: 'https://www2.myfloridalicense.com/cosmetology/', fee: '≈$95 in state fees', note: '1,200 hours, minimum age 16, high school diploma required; no apprenticeship route. 10 board-approved CE hours at each renewal, including HIV/AIDS content. Among the cheapest state fee schedules in the country.', compactMember: false },
      GA: { agency: 'Georgia State Board of Cosmetology and Barbers, Office of Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers', fee: '≈$139 in state fees', note: '1,500 school hours or a 3,000-hour apprenticeship completed within 18 months; minimum age 17. 5 CEUs per biennium. Georgia refuses reciprocity to a named list of states including Alaska, Maryland, Massachusetts, Maine, Pennsylvania and Virginia.', compactMember: false },
      HI: { agency: 'Hawaii Board of Barbering and Cosmetology, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/barber/', fee: '≈$292–$365 in state fees', note: '1,800 school hours or 3,600 apprentice hours — one of the five highest tiers. No continuing education required; renewal is by 31 December of odd-numbered years.', compactMember: false },
      ID: { agency: 'Idaho Board of Barber and Cosmetology Services, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/bar/', fee: '≈$308 in state fees', note: '1,600 hours, reduced from 2,000 in 2022. Apprenticeship permitted. Endorsement is available from states whose standards are not less than Idaho\u2019s, or with qualifying work experience.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Barber, Cosmetology, Esthetics, Hair Braiding and Nail Technology Board', agencyUrl: 'https://idfpr.illinois.gov/profs/cosmo.html', fee: '≈$137 in state fees', note: '1,500 hours; written exam only — Illinois has no practical component and no apprenticeship pathway. Exams are administered by Continental Testing Services.', compactMember: false },
      IN: { agency: 'Indiana State Board of Cosmetology and Barber Examiners, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/cosmetology-and-barber-examiners-home/', fee: '≈$139 in state fees', note: '1,500 hours; minimum age 17–18. Practical exam required and delivered by PSI. Four-year renewal cycle, longer than almost any other state.', compactMember: false },
      IA: { agency: 'Iowa Board of Cosmetology Arts and Sciences, Department of Health and Human Services', agencyUrl: 'https://hhs.iowa.gov/licensing', fee: '≈$225–$260 in state fees', note: '2,100 hours — tied with Nebraska, Oregon and South Dakota for the highest requirement in the United States, and roughly double California or Texas. No apprenticeship alternative. Barbering was folded into this board in 2020.', compactMember: false },
      KS: { agency: 'Kansas Board of Cosmetology', agencyUrl: 'https://www.kansas.gov/kboc/', fee: '≈$195 in state fees', note: '1,500 hours with an apprenticeship alternative. Kansas has enacted the Cosmetology Licensure Compact and is also one of only three Esthetics Licensure Compact states.', compactMember: true },
      KY: { agency: 'Kentucky Board of Cosmetology', agencyUrl: 'https://kbc.ky.gov', fee: '≈$100 in state fees', note: '1,500 hours, plus an unusual post-exam requirement: a six-month salon apprenticeship of at least 20 hours per week after passing. One of the lowest state fee schedules. Compact enacted.', compactMember: true },
      LA: { agency: 'Louisiana State Board of Cosmetology', agencyUrl: 'https://www.lsbc.louisiana.gov', fee: '≈$158 in state fees', note: '1,500 hours with an apprenticeship alternative; NIC theory and practical required.', compactMember: false },
      ME: { agency: 'Maine Board of Barbering and Cosmetology, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/barbers-cosmetologists', fee: '≈$214 in state fees', note: '1,500 school hours or a 2,500-hour apprenticeship. Georgia and several other states will not accept a Maine licence by reciprocity, so check the destination board before relocating.', compactMember: false },
      MD: { agency: 'Maryland State Board of Cosmetologists, Maryland Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/cos/', fee: '≈$104 in state fees', note: '1,500 hours, although Maryland has moved to reduce the curriculum toward 1,000 hours — confirm the current rule with the Board before enrolling. Very low state fees. Compact enacted.', compactMember: true },
      MA: { agency: 'Massachusetts Board of Registration of Cosmetology and Barbering, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-cosmetology-and-barbering', fee: '≈$291 in state fees', note: '1,000 hours — one of the four lowest tiers — and the practical examination was eliminated in October 2023, leaving a written-only path. No apprenticeship alternative.', compactMember: false },
      MI: { agency: 'Michigan Board of Cosmetology, Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/cosmetology', fee: '≈$245–$265 in state fees', note: '1,500 hours; practical exam required; no apprenticeship pathway. Michigan requires a separate 1,800-hour programme for barbering, one of the widest gaps between the two credentials.', compactMember: false },
      MN: { agency: 'Minnesota Board of Cosmetologist Examiners', agencyUrl: 'https://mn.gov/boards/cosmetology/', fee: '≈$190 in state fees', note: '1,550 hours. Minnesota exempts hair styling and makeup application from licensure if the practitioner completes a 4-hour safety course — an unusually broad carve-out.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Cosmetology', agencyUrl: 'https://www.msbc.ms.gov', fee: '≈$245 in state fees', note: '1,500 hours. The practical examination was eliminated in February 2026, leaving a written theory exam only. No apprenticeship alternative.', compactMember: false },
      MO: { agency: 'Missouri State Board of Cosmetology and Barber Examiners, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/cosbar.asp', fee: '≈$201 in state fees', note: '1,500 school hours or a 3,000-hour apprenticeship. Practical exam required.', compactMember: false },
      MT: { agency: 'Montana Board of Barbers and Cosmetologists, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/barbers-cosmetologists/', fee: '≈$230 in state fees', note: '1,500 hours (older sources still cite 2,000 — the requirement was reduced, so confirm with the Board). No apprenticeship pathway.', compactMember: false },
      NE: { agency: 'Nebraska Board of Cosmetology, Electrology, Esthetics, Nail Technology and Body Art, Department of Health and Human Services', agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Cosmetology.aspx', fee: '≈$30+ in state fees', note: '2,100 hours — tied for the highest in the country — but among the cheapest state fees. Written exam only; no practical and no apprenticeship alternative.', compactMember: false },
      NV: { agency: 'Nevada State Board of Cosmetology', agencyUrl: 'https://cosmetology.nv.gov', fee: '≈$195 in state fees', note: '1,600 hours plus a separate Nevada law examination in addition to the NIC theory and practical. No apprenticeship alternative.', compactMember: false },
      NH: { agency: 'New Hampshire Board of Barbering, Cosmetology and Esthetics, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/board-barbering-cosmetology-and-esthetics', fee: '≈$247 in state fees', note: '1,500 hours with an apprenticeship alternative; NIC or PSI examinations.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Cosmetology and Hairstyling, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/cos', fee: '≈$232 in state fees', note: '1,200 hours, minimum age 17. New Jersey uses a state-developed examination rather than the NIC exam, which complicates transfers in both directions.', compactMember: false },
      NM: { agency: 'New Mexico Board of Barbers and Cosmetologists, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/barbers-and-cosmetologists/', fee: '≈$250 in state fees', note: '1,600 hours; practical exam required; no apprenticeship pathway.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services (Appearance Enhancement)', agencyUrl: 'https://dos.ny.gov/appearance-enhancement', fee: '≈$70 in state fees', note: '1,000 hours, state-developed written and practical exams rather than NIC, plus a mandatory 1-hour domestic-violence awareness course. Licences sit under the Appearance Enhancement statute and are among the cheapest in the country.', compactMember: false },
      NC: { agency: 'North Carolina Board of Cosmetic Art Examiners', agencyUrl: 'https://www.nccosmeticarts.com', fee: '≈$138–$148 in state fees', note: '1,500 hours with an apprenticeship alternative; NIC theory and practical.', compactMember: false },
      ND: { agency: 'North Dakota State Board of Cosmetology', agencyUrl: 'https://www.nd.gov/cos/', fee: '≈$170 in state fees', note: '1,500–1,800 hours depending on the source consulted — North Dakota is one of the states where published figures disagree, so confirm directly with the Board. Apprenticeship permitted.', compactMember: false },
      OH: { agency: 'Ohio State Cosmetology and Barber Board', agencyUrl: 'https://cos.ohio.gov', fee: '≈$90 in state fees', note: '1,500 hours, minimum age 16 and 10th grade education, biometric fingerprint scan, and a roughly 4-hour practical. Barbering by contrast requires 1,800 hours. Compact enacted.', compactMember: true },
      OK: { agency: 'Oklahoma State Board of Cosmetology and Barbering', agencyUrl: 'https://oklahoma.gov/cosmetology.html', fee: '≈$115 in state fees', note: '1,500 hours with an apprenticeship alternative. Blow-dry styling is exempt from licensure with sanitation training only.', compactMember: false },
      OR: { agency: 'Oregon Board of Cosmetology, Oregon Health Authority Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Cosmetology.aspx', fee: '≈$155 in state fees', note: 'Oregon has no single cosmetology licence: it certifies by field — hair design 1,110 hours, esthetics, nail technology and barbering separately — and a full four-field cosmetology certificate runs to roughly 2,100 hours. Written exams only, plus an Oregon laws and rules test. Minimum age 18.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Cosmetology, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/cosmetology.html', fee: '≈$212 in state fees', note: '1,250 hours; Pennsylvania uses a state-developed examination delivered by Pearson VUE rather than the NIC exam.', compactMember: false },
      RI: { agency: 'Rhode Island Board of Hairdressing and Barbering, Department of Health', agencyUrl: 'https://health.ri.gov/licenses/', fee: '≈$100 in state fees', note: 'Published hour figures range from 1,000 to 1,500 depending on the source — Rhode Island reduced its requirement recently, so confirm with the Department of Health. Very low state fees.', compactMember: false },
      SC: { agency: 'South Carolina Board of Cosmetology, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/cos/', fee: '≈$162 in state fees', note: '1,500 hours; a 75% score is required on the NIC examination, higher than the 70% used in many states. No apprenticeship pathway.', compactMember: false },
      SD: { agency: 'South Dakota Cosmetology Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/bdcomm/cosmetology/', fee: '≈$120 in state fees', note: 'Widely cited as the highest requirement in the country at 2,100 hours, though the Commission has published 1,500 in some materials — verify before enrolling. Minimum age 18, plus a South Dakota laws and rules exam.', compactMember: false },
      TN: { agency: 'Tennessee Board of Cosmetology and Barber Examiners, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/cosmo.html', fee: '≈$200 in state fees', note: '1,500 hours with an apprenticeship alternative; NIC theory and practical. Compact enacted.', compactMember: true },
      TX: { agency: 'Texas Department of Licensing and Regulation (TDLR), Cosmetology Program', agencyUrl: 'https://www.tdlr.texas.gov/cosmet/cosmet.htm', fee: '≈$181 in state fees', note: '1,000 hours, of which up to 250 may be completed online, and the written exam may be attempted after 900 hours. PSI administers; 70% passing score. Cosmetology sits inside TDLR rather than a standalone board.', compactMember: false },
      UT: { agency: 'Utah Division of Professional Licensing (DOPL), Board of Cosmetology and Barbering', agencyUrl: 'https://dopl.utah.gov/cosmetology-barbering/', fee: '≈$254 in state fees', note: '1,250 hours after a reduction from 1,600 in January 2026. Blow-dry styling is exempt with a safety permit. Utah also maintains a separate 1,200-hour master esthetician tier.', compactMember: false },
      VT: { agency: 'Vermont Board of Barbers and Cosmetologists, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/barbers-cosmetologists/', fee: '≈$275 in state fees', note: '1,000–1,500 hours depending on the source, with a 1,500-hour apprenticeship alternative — confirm the current school-hour figure with OPR.', compactMember: false },
      VA: { agency: 'Virginia Board for Barbers and Cosmetology, Department of Professional and Occupational Regulation (DPOR)', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Barbers-Cosmetology', fee: '≈$314 in state fees', note: 'Reduced from 1,500 to 1,000 hours for students enrolling after September 2024 — one of the largest recent cuts in the country. Apprenticeship permitted. Virginia has enacted all three beauty and wellness compacts.', compactMember: true },
      WA: { agency: 'Washington State Department of Licensing, Cosmetology, Hair Design, Barbering, Esthetics and Manicuring Advisory Board', agencyUrl: 'https://dol.wa.gov/professional-licenses/cosmetology', fee: '≈$329 in state fees', note: '1,600 school hours or a 2,000-hour apprenticeship; 75% passing score and a practical exam that runs 4–5 hours. Compact enacted.', compactMember: true },
      WV: { agency: 'West Virginia Board of Barbers and Cosmetologists', agencyUrl: 'https://www.wvbbc.com', fee: '≈$278 in state fees', note: '1,800 hours, in the top tier nationally. No apprenticeship pathway. Compact enacted.', compactMember: true },
      WI: { agency: 'Wisconsin Barbering and Cosmetology Examining Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/Cosmetologist/Default.aspx', fee: '≈$418–$427 in state fees', note: '1,550 hours and the most expensive state fee schedule in the country. No apprenticeship pathway.', compactMember: false },
      WY: { agency: 'Wyoming State Board of Cosmetology', agencyUrl: 'https://cosmetology.wyo.gov', fee: '≈$101–$136 in state fees', note: '2,000 hours with an apprenticeship alternative — a high hour requirement paired with very low state fees.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. Barber
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'barber',
    name: 'Barber License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'The licence for cutting hair, shaving with a straight razor and grooming facial hair — required in all 50 states and the District of Columbia.',

    overview:
      'Barbering is licensed in every one of the 50 states and the District of Columbia, with no exceptions, but it is consistently the cheapest and fastest route into a hands-on hair career: the national average requirement is about 1,118 hours against roughly 1,425 for cosmetology, and the spread runs from 500 hours in New York and 750 in Vermont up to 1,800 in Michigan, Nebraska and Ohio. The legal distinction from cosmetology is historical — barbers alone are trained and authorised to shave with a straight razor, and in most states the licence now also covers chemical services such as colour and relaxers, which erases most of the practical difference. A handful of states run a separate barber board (Michigan, Minnesota, Nebraska, North Carolina and Maryland among them); the majority merged barbering into a combined cosmetology and barbering board, Ohio in 2017 and Arizona and Iowa more recently.',
    eligibility:
      'Minimum age is normally 16 to 18 — Ohio lowered it to 16 in October 2024 — and the education floor is often lower than for cosmetology: Ohio accepts 8th grade for barbering against 10th grade for cosmetology. Applicants must complete the state-mandated clock hours at a barber school licensed by that board, or in some states an approved apprenticeship, and then pass a written examination and, in nearly every state, a hands-on practical. Criminal history is reviewed individually. Licensed cosmetologists are frequently offered a shortened crossover programme rather than the full barbering curriculum — Ohio, for example, requires 1,000 hours instead of 1,800.',
    exam: {
      admin: 'PSI in most states; Continental Testing Services in Illinois, Pearson VUE in Florida and several others, the state board itself in Ohio, and NIC-developed content in states such as Georgia',
      questions: 'Written exam of roughly 100–150 multiple-choice questions covering sanitation, anatomy, chemistry, cutting theory and state law',
      time: '90–120 minutes written; 2–4 hours for the practical',
      pass: 'Typically 70–75% (Ohio requires 75% under ORC 4709)',
      fee: '$40–$130 depending on whether the written and practical are billed together',
      format: 'Computer-based written test plus a practical on a mannequin or live model. Illinois is written-only. The practical is scored heavily on disinfection, blood-exposure procedure and razor safety.'
    },
    education: {
      hours: '500–1,800 clock hours at a board-approved barber school; national average about 1,118, median 1,200',
      note: 'The range is even wider proportionally than in cosmetology. New York sits at 500 hours, Vermont 750, Oregon about 786, New Hampshire 800, and Florida, Idaho and New Jersey at 900; the 1,500-hour band covers about fifteen states; and Michigan, Nebraska and Ohio top out at 1,800. Alabama requires 1,000 hours for a barber with chemical services and does not regulate non-chemical barbering at all. California cut barbering from 1,500 to 1,000 hours in 2022. Because so many destination states grant reciprocity only to jurisdictions with equal or greater hours, training in a low-hour state can make a later move considerably harder — Alaska (1,650), Colorado (1,500) and Delaware (1,500) all apply an equal-or-greater test.'
    },
    prerequisites:
      'Minimum age of 16–18 depending on the state; completion of 8th, 10th or 12th grade depending on the jurisdiction; and the required clock hours at a barber school licensed by that state board, or a documented apprenticeship where the state permits one.',
    costBreakdown: {
      items: [
        { item: 'Barber school tuition (500–1,800 hours)', fee: '$6,000–$20,000' },
        { item: 'Clipper, razor and shear kit', fee: '$800–$2,500' },
        { item: 'Written examination', fee: '$35–$90' },
        { item: 'Practical examination', fee: '$50–$130' },
        { item: 'Initial licence application', fee: '$25–$120' },
        { item: 'Biennial renewal', fee: '$40–$120' }
      ],
      total: '$55–$470 in state fees; $7,000–$23,000 including tuition and kit'
    },
    timeline: [
      { stage: 'Barber school', duration: '4 months in a 500-hour state; 14–20 months at 1,800 hours' },
      { stage: 'Exam application and authorisation to test', duration: '2–6 weeks' },
      { stage: 'Written and practical examinations', duration: '1–4 weeks to schedule and sit' },
      { stage: 'Licence issuance', duration: '1–3 weeks' }
    ],
    route: [
      { title: 'Decide between barbering and cosmetology first', description: 'Barbering is usually shorter and cheaper and, in most states, now includes chemical services. Cosmetology adds skin and nail scope. If you may later want both, check whether your state offers a crossover programme — several cut the second licence to roughly 1,000 hours.' },
      { title: 'Enrol at a barber school licensed by your state board', description: 'Hours count only if the school holds a current licence from that board. Confirm the school files transcripts directly with the board and ask about its first-time exam pass rate, which many boards publish by school.' },
      { title: 'Complete the required hours or an approved apprenticeship', description: 'Some states allow an apprenticeship at roughly double the school hours; Michigan, Ohio and Texas do not offer one. Ohio now issues a pre-exam work permit that lets students practise under supervision while awaiting a test date.' },
      { title: 'Pass the written examination', description: 'Sanitation, infection control and state law carry more weight than cutting theory. Most states use PSI; Ohio administers its own exam; Illinois is written-only with no practical.' },
      { title: 'Pass the practical examination', description: 'Performed on a mannequin or live model against a published criteria sheet. Examiners deduct for missed disinfection steps, improper razor handling and failure to follow blood-exposure procedure — technique alone will not carry a candidate.' },
      { title: 'Apply, then track renewal and continuing education', description: 'Renewal is usually biennial, occasionally annual (Florida) or every four years (Indiana). CE varies: Ohio requires 4 hours per cycle, Georgia 5, Florida 16 including HIV/AIDS; Illinois and many others require none. Texas introduced a 4-hour CE requirement on 1 September 2025.' }
    ],
    providersNote:
      'Every state barber or combined cosmetology-and-barbering board publishes its own approved-school list, candidate information bulletin and fee schedule, and those are the only authoritative sources. The hours and state fees given per state below are drawn from 2026 board-sourced comparison tables cross-checked against the NIC State Education and Licensing Guide and individual board pages; where two published sources disagree the state note says so. Fees shown are approximate totals of state-collected application and examination charges and exclude tuition, kit and the separate barbershop establishment licence that every state requires of shop owners. For exam preparation, work from the board candidate bulletin and the published practical criteria sheet first — commercial prep books are useful for theory but rarely match a specific state law section.',
    faqs: [
      {
        q: 'Is barbering licensed in every state?',
        a: 'Yes. All 50 states and the District of Columbia require a barber licence to cut hair for compensation, and there are no jurisdictions where the credential does not exist. Alabama comes closest to an exception: it regulates barbering with chemical services at 1,000 hours but does not regulate non-chemical barbering as a separate licensed category.'
      },
      {
        q: 'Barber or cosmetology — which licence should I get?',
        a: 'Barbering is generally faster and cheaper (national average about 1,118 hours versus roughly 1,425 for cosmetology) and in most states now covers colour and chemical services as well as cutting and straight-razor shaving. Cosmetology adds skin care and nails. If your goal is a barbershop or men\u2019s grooming, barbering is the direct route; if you want a full-service salon, cosmetology is broader. Several states let a licensed cosmetologist convert with a reduced crossover programme.'
      },
      {
        q: 'Is there a compact for barber licences?',
        a: 'No. The Cosmetology Licensure Compact enacted in eleven states covers cosmetology and does not extend a multistate privilege to barbers, and there is no separate barbering compact. Every barber entry below is therefore flagged compactMember: false. Moving states means applying for licensure by reciprocity or endorsement with the destination board.'
      },
      {
        q: 'How does barber reciprocity actually work?',
        a: 'The destination board compares your training hours to its own. Alaska (1,650), Colorado (1,500), Delaware (1,500) and others will only license you if your original state required as much or more; Arkansas wants 1,500 hours or a year of continuous practice; California waives its exams if you have held a clean licence and practised three of the last five years; Arizona requires a year of practice and maintains a named reciprocity list. Georgia refuses reciprocity to Alabama, California, DC, Hawaii, Nevada, New York, Oklahoma and Washington. Take your home-state exam before moving — an unlicensed transcript is far harder to place.'
      },
      {
        q: 'Which state is fastest to license?',
        a: 'New York at 500 hours, followed by Vermont at 750, Oregon at about 786 and New Hampshire at 800. But a low-hour licence is the hardest to port: most high-hour states will not accept it without additional training or documented work experience, so weigh speed against where you expect to work in five years.'
      },
      {
        q: 'Do I need a separate licence to own a barbershop?',
        a: 'Yes, in every state. A personal barber licence covers you as a practitioner; a shop, salon or establishment licence covers the premises and is inspected separately for sanitation, sterilisation equipment, plumbing and signage. Booth renters often need both an individual licence and, in some states, their own booth-rental registration.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for barbering. The Cosmetology Licensure Compact enacted in Alabama, Arizona, Colorado, Kansas, Kentucky, Maryland, Ohio, Tennessee, Virginia, Washington and West Virginia does not extend a multistate privilege to barber licensees, and the Esthetics Licensure Compact and Interstate Massage Compact are likewise out of scope — so every state below is flagged compactMember: false and `compact` is null. Portability is handled entirely through bilateral reciprocity or licensure by endorsement. The dominant test is the equal-or-greater rule: Alaska, Colorado, Delaware and others will license an out-of-state barber only if the original jurisdiction required at least as many training hours as they do, with documented work experience sometimes accepted to bridge a shortfall. Arizona publishes an explicit reciprocity list, Arkansas requires 1,500 hours or one year of continuous practice, California grants reciprocity without re-examination to licensees active three of the last five years, and Georgia excludes a named group of states outright. Verify with the destination board before relocating.'
    },

    defaultAgency: 'State Board of Barbering',
    sourceUrl: 'https://nictesting.org/state-boards/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Board of Cosmetology and Barbering', agencyUrl: 'https://aboc.alabama.gov', fee: '≈$255 in state fees ($75 written + $130 practical + $50 licence)', note: '1,000 hours for barbering with chemical services; non-chemical barbering is not separately regulated. NIC theory and practical delivered by Prometric.', compactMember: false },
      AK: { agency: 'Alaska Board of Barbers and Hairdressers, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofBarbersHairdressers.aspx', fee: '≈$420 in state fees', note: '1,650 hours, the highest in the country alongside Michigan, Nebraska and Ohio. Transfers are accepted only by waiver of examination from states with equal or greater requirements.', compactMember: false },
      AZ: { agency: 'Arizona Board of Cosmetology and Barbering', agencyUrl: 'https://boc.az.gov', fee: '≈$220 in state fees', note: '≈1,200 hours; some sources still cite 1,500 following the 2021 board merger. Reciprocity requires a year of practice and Arizona maintains a published list of accepted states.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health, Cosmetology Section', agencyUrl: 'https://healthy.arkansas.gov/programs-services/topics/cosmetology', fee: '≈$125 in state fees ($75 exam + $50 licence)', note: '1,500 hours. Reciprocity applicants need 1,500 hours or, with fewer, at least one year of continuous barbering practice plus proof of licensure.', compactMember: false },
      CA: { agency: 'California Board of Barbering and Cosmetology, Department of Consumer Affairs', agencyUrl: 'https://www.barbercosmo.ca.gov', fee: '≈$125 in state fees', note: '1,000 hours after the 2022 reduction from 1,500. Reciprocity without re-examination is available to licensees in good standing who have been active three of the last five years.', compactMember: false },
      CO: { agency: 'Colorado Office of Barber and Cosmetology Licensure, DORA Division of Professions and Occupations', agencyUrl: 'https://dpo.colorado.gov/BarberCosmetology', fee: '≈$155 in state fees', note: '1,500 hours; written and practical delivered by PSI for about $155. Endorsement only from substantially equivalent states. No continuing education required.', compactMember: false },
      CT: { agency: 'Connecticut Department of Public Health, Practitioner Licensing and Investigations Section', agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/barber/barber-licensure', fee: '≈$165 in state fees', note: '1,000–1,500 hours depending on the source; Connecticut licenses barbers separately from hairdressers and cosmeticians under CGS Chapter 386. Out-of-state applicants qualify if their licence was based on completed training and a passed examination.', compactMember: false },
      DE: { agency: 'Delaware Board of Cosmetology and Barbering, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/cosmetology/', fee: '≈$258 in state fees', note: '≈1,250 hours. Reciprocity applies an equal-or-greater test against Delaware\u2019s requirement.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Barber and Cosmetology, Department of Licensing and Consumer Protection', agencyUrl: 'https://dlcp.dc.gov/service/board-barber-and-cosmetology', fee: '≈$230 in state fees', note: '1,500 hours. Reciprocity requires a letter of good standing from a substantially equivalent jurisdiction.', compactMember: false },
      FL: { agency: 'Florida Barbers\u2019 Board, Department of Business and Professional Regulation', agencyUrl: 'https://www2.myfloridalicense.com/barbers/', fee: '≈$125–$150 in state fees', note: '900 hours — among the lowest — with no apprenticeship pathway. Written and practical exams; 16 CE hours per renewal including HIV/AIDS content.', compactMember: false },
      GA: { agency: 'Georgia State Board of Cosmetology and Barbers, Office of Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers', fee: '≈$177 in state fees', note: '1,500 school hours or a 3,000-hour apprenticeship; NIC examination; 5 CE hours per cycle. Georgia does not extend reciprocity to Alabama, California, DC, Hawaii, Nevada, New York, Oklahoma or Washington.', compactMember: false },
      HI: { agency: 'Hawaii Board of Barbering and Cosmetology, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/barber/', fee: '≈$200 in state fees', note: '1,500 hours. Renewal is by 31 December of odd-numbered years; no continuing education required.', compactMember: false },
      ID: { agency: 'Idaho Board of Barber and Cosmetology Services, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/bar/', fee: '≈$125 in state fees', note: '900 hours — barbering in Idaho is roughly 700 hours shorter than the 1,600-hour cosmetology programme. Endorsement available from states with standards not less than Idaho\u2019s.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Barber, Cosmetology, Esthetics, Hair Braiding and Nail Technology Board', agencyUrl: 'https://idfpr.illinois.gov/profs/cosmo.html', fee: '≈$128 in state fees', note: '1,500 hours; written exam only through Continental Testing Services — Illinois has no practical component, no apprenticeship route and no CE requirement.', compactMember: false },
      IN: { agency: 'Indiana State Board of Cosmetology and Barber Examiners, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/cosmetology-and-barber-examiners-home/', fee: '≈$99 in state fees', note: '1,500 hours; written exam via PSI (about $84 total); no CE requirement and an unusually long four-year renewal cycle.', compactMember: false },
      IA: { agency: 'Iowa Board of Cosmetology Arts and Sciences, Department of Health and Human Services', agencyUrl: 'https://hhs.iowa.gov/licensing', fee: '≈$72 in state fees', note: '≈1,550 hours. Barbering was merged into the cosmetology arts and sciences board in 2020, so barbers and cosmetologists now share one regulator and one fee schedule.', compactMember: false },
      KS: { agency: 'Kansas Board of Barbering', agencyUrl: 'https://www.kansas.gov/kboc/', fee: '≈$235 in state fees', note: '≈1,500 hours. Kansas has historically maintained a barbering board distinct from the Board of Cosmetology; confirm which body handles your application before filing.', compactMember: false },
      KY: { agency: 'Kentucky Board of Barbering', agencyUrl: 'https://kbc.ky.gov', fee: '≈$400 in state fees', note: '1,500 hours and the most expensive barber fee schedule in the country at roughly $400 in state charges.', compactMember: false },
      LA: { agency: 'Louisiana Board of Barber Examiners', agencyUrl: 'https://www.lsbc.louisiana.gov', fee: '≈$165–$240 in state fees', note: '1,500 hours; Louisiana regulates barbering separately from the Board of Cosmetology, so verify which board holds your file.', compactMember: false },
      ME: { agency: 'Maine Board of Barbering and Cosmetology, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/barbers-cosmetologists', fee: '≈$61 in state fees', note: '1,500 hours paired with the lowest state fee total in the country at roughly $61.', compactMember: false },
      MD: { agency: 'Maryland State Board of Barbers, Maryland Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/barbers/', fee: '≈$127 in state fees', note: '1,200 hours. Maryland keeps a Board of Barbers separate from its Board of Cosmetologists, and the two have different hour requirements and fee schedules.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Cosmetology and Barbering, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-cosmetology-and-barbering', fee: '≈$468 in state fees', note: '1,000 hours but the second most expensive fee schedule in the country at roughly $468 in state charges.', compactMember: false },
      MI: { agency: 'Michigan Board of Barber Examiners, Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/barber', fee: '≈$80+ in state fees', note: '1,800 hours — tied for the highest in the country — with no apprenticeship pathway. Written and practical via PSI (about $260). Michigan cosmetology by contrast is 1,500 hours.', compactMember: false },
      MN: { agency: 'Minnesota Board of Barber Examiners', agencyUrl: 'https://mn.gov/boards/barber/', fee: '≈$133 in state fees', note: '1,500 hours. Minnesota is one of the few states that still maintains a standalone Board of Barber Examiners separate from the Board of Cosmetologist Examiners.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Cosmetology', agencyUrl: 'https://www.msbc.ms.gov', fee: '≈$150 in state fees', note: '1,500 hours. Mississippi eliminated the cosmetology practical exam in February 2026; confirm whether the barbering practical was affected.', compactMember: false },
      MO: { agency: 'Missouri State Board of Cosmetology and Barber Examiners, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/cosbar.asp', fee: '≈$246 in state fees', note: '1,000 hours — Missouri barbering is 500 hours shorter than its 1,500-hour cosmetology programme.', compactMember: false },
      MT: { agency: 'Montana Board of Barbers and Cosmetologists, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/barbers-cosmetologists/', fee: '≈$339 in state fees', note: '1,100 hours. One of the more expensive fee schedules relative to the modest hour requirement.', compactMember: false },
      NE: { agency: 'Nebraska Board of Barber Examiners', agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Barbers.aspx', fee: '≈$270 in state fees', note: '1,800 hours, tied with Michigan and Ohio for the highest requirement. Nebraska keeps a barber board separate from its cosmetology board.', compactMember: false },
      NV: { agency: 'Nevada State Barbers\u2019 Health and Sanitation Board', agencyUrl: 'https://barbers.nv.gov', fee: '≈$200 in state fees', note: '1,500 hours. Nevada regulates barbering through a dedicated health and sanitation board rather than the State Board of Cosmetology.', compactMember: false },
      NH: { agency: 'New Hampshire Board of Barbering, Cosmetology and Esthetics, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/board-barbering-cosmetology-and-esthetics', fee: '≈$247 in state fees', note: '800 hours — among the four lowest in the country and roughly half the 1,500-hour New Hampshire cosmetology requirement.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Cosmetology and Hairstyling, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/cos', fee: '≈$155 in state fees', note: '900 hours, with barbering treated as a specialty licence under the cosmetology and hairstyling statute. State-developed examination.', compactMember: false },
      NM: { agency: 'New Mexico Board of Barbers and Cosmetologists, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/barbers-and-cosmetologists/', fee: '≈$303 in state fees', note: '1,200 hours against 1,600 for cosmetology; both are administered by the same board.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services', agencyUrl: 'https://dos.ny.gov/barber', fee: '≈$55 in state fees', note: '500 hours — by a wide margin the lowest barbering requirement in the United States, and only $55 in state fees. New York uses state-developed written and practical exams; barbering sits outside the Appearance Enhancement statute that governs cosmetology.', compactMember: false },
      NC: { agency: 'North Carolina Board of Barber and Electrolysis Examiners', agencyUrl: 'https://www.ncbarbers.com', fee: '≈$210–$295 in state fees', note: '1,528 hours — an unusual figure set by statute. North Carolina keeps barbering under a separate board from the Board of Cosmetic Art Examiners.', compactMember: false },
      ND: { agency: 'North Dakota State Board of Barber Examiners', agencyUrl: 'https://www.nd.gov/cos/', fee: '≈$150+ in state fees', note: '≈1,550 hours. Confirm with the board whether your application is handled by the barber examiners or the cosmetology board.', compactMember: false },
      OH: { agency: 'Ohio State Cosmetology and Barber Board', agencyUrl: 'https://cos.ohio.gov', fee: '≈$55 exam plus $70 licence (≈$140 total)', note: '1,800 hours, but only 1,000 for an existing Ohio cosmetologist or hair designer. HB 158 (effective 24 October 2024) lowered the entry age to 16, created pre-exam work permits and requires only an 8th grade education. 75% passing score; 4 CE hours per biennium. No apprenticeship pathway.', compactMember: false },
      OK: { agency: 'Oklahoma State Board of Cosmetology and Barbering', agencyUrl: 'https://oklahoma.gov/cosmetology.html', fee: '≈$115 in state fees ($80 application + $35 exam)', note: '≈1,250 hours; barbering and cosmetology were consolidated under a single board.', compactMember: false },
      OR: { agency: 'Oregon Board of Cosmetology, Oregon Health Authority Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Cosmetology.aspx', fee: '≈$200 in state fees', note: '≈786 hours under Oregon\u2019s field-based certification system — the third lowest in the country. Written exams plus an Oregon laws and rules test; minimum age 18.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Barbers, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/barber-examiners.html', fee: '≈$170 in state fees', note: '≈1,250 hours. Pennsylvania maintains a State Board of Barber Examiners separate from its State Board of Cosmetology.', compactMember: false },
      RI: { agency: 'Rhode Island Board of Hairdressing and Barbering, Department of Health', agencyUrl: 'https://health.ri.gov/licenses/', fee: '≈$100 in state fees', note: '1,500 hours; barbering and hairdressing share one board within the Department of Health.', compactMember: false },
      SC: { agency: 'South Carolina Board of Barber Examiners, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/barber/', fee: '≈$200+ in state fees', note: '≈1,500 hours. South Carolina runs a Board of Barber Examiners separate from its Board of Cosmetology.', compactMember: false },
      SD: { agency: 'South Dakota Board of Barber Examiners, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/bdcomm/barber/', fee: '≈$150 in state fees', note: '1,500 hours. Barbering sits under its own board, separate from the Cosmetology Commission.', compactMember: false },
      TN: { agency: 'Tennessee Board of Cosmetology and Barber Examiners, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/cosmo.html', fee: '≈$200 in state fees', note: '1,500 hours; barbering and cosmetology share a single combined board and fee schedule.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing and Regulation (TDLR), Barbering Program', agencyUrl: 'https://www.tdlr.texas.gov/barbers/barbers.htm', fee: '≈$183 in state fees', note: '1,000 hours, PSI-administered written and practical, no apprenticeship pathway. Texas introduced continuing education on 1 September 2025: 4 hours for barbers with under 15 years of licensure, 2 hours for those with more.', compactMember: false },
      UT: { agency: 'Utah Division of Professional Licensing (DOPL), Board of Cosmetology and Barbering', agencyUrl: 'https://dopl.utah.gov/cosmetology-barbering/', fee: '≈$234 in state fees', note: '1,000 hours, well below the 1,250-hour Utah cosmetology requirement introduced in January 2026.', compactMember: false },
      VT: { agency: 'Vermont Board of Barbers and Cosmetologists, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/barbers-cosmetologists/', fee: '≈$130 in state fees', note: '750 hours — the second lowest in the country after New York, with modest state fees.', compactMember: false },
      VA: { agency: 'Virginia Board for Barbers and Cosmetology, Department of Professional and Occupational Regulation (DPOR)', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Barbers-Cosmetology', fee: '≈$299 in state fees', note: '1,100 hours. Note that Virginia has enacted the Cosmetology Licensure Compact, but that compact does not create a multistate privilege for barbers.', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing, Cosmetology, Hair Design, Barbering, Esthetics and Manicuring Advisory Board', agencyUrl: 'https://dol.wa.gov/professional-licenses/cosmetology', fee: '≈$195 in state fees', note: '1,000 hours against 1,600 for cosmetology; written and practical exams and no continuing education requirement.', compactMember: false },
      WV: { agency: 'West Virginia Board of Barbers and Cosmetologists', agencyUrl: 'https://www.wvbbc.com', fee: '≈$144 in state fees', note: '1,200 hours, notably lower than West Virginia\u2019s 1,800-hour cosmetology requirement.', compactMember: false },
      WI: { agency: 'Wisconsin Barbering and Cosmetology Examining Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/Barber/Default.aspx', fee: '≈$210 in state fees', note: '1,000 hours against 1,550 for cosmetology — one of the largest in-state gaps between the two credentials.', compactMember: false },
      WY: { agency: 'Wyoming State Board of Cosmetology', agencyUrl: 'https://cosmetology.wyo.gov', fee: '≈$185 in state fees', note: '1,000 hours for barbering against 2,000 for cosmetology, the widest ratio of any state. Both credentials sit with the Board of Cosmetology.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. Esthetician
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'esthetician',
    name: 'Esthetician License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'The skin-care specialty licence covering facials, waxing, chemical exfoliation and makeup — now required in all 51 US jurisdictions.',

    overview:
      'An esthetician licence authorises skin-care services: facials, extractions, waxing and other hair removal, superficial chemical peels, makeup application and, in some states, lash and brow work. It is a specialty credential that sits below cosmetology in scope but usually well below it in training time, which is why many people enter the industry through esthetics first. Every one of the 50 states and the District of Columbia now licenses estheticians — Connecticut was the last holdout and made esthetics licensure mandatory on 1 July 2020 under Public Act 19-117, so older guides describing Connecticut as unregulated are out of date. Required hours run from 200 in Utah and 220 in Florida up to 1,000 in Alabama, Georgia and Kansas. Several states also maintain an advanced "master esthetician" tier — Utah, Washington, Virginia and the District of Columbia among them — for microdermabrasion, deeper peels and light-based treatments.',
    eligibility:
      'Minimum age is typically 16 to 18, with a high school diploma or GED required in most states and a lower grade floor in a handful. Candidates must complete the state-required esthetics clock hours at a school licensed by that state board and pass the required examinations. Many states allow a licensed cosmetologist to practise esthetics without a separate credential, because esthetics falls inside the cosmetology scope; the reverse is never true. Criminal history is assessed case by case. Advanced or master esthetician licences carry their own additional hours — Utah requires 1,200 for master esthetician against 200 for the basic credential, and Washington and Virginia run comparable second tiers.',
    exam: {
      admin: 'NIC esthetics theory and practical examinations delivered by PSI, Prometric or Pearson VUE; New Jersey, New York, Pennsylvania and Texas use state-developed exams',
      questions: 'Roughly 100 multiple-choice questions covering skin anatomy and physiology, infection control, product chemistry, contraindications and state law',
      time: '90 minutes written; 2–3 hours for the practical',
      pass: 'Usually 70–75%',
      fee: '$40–$150 combined depending on jurisdiction',
      format: 'Computer-based written theory plus, in most states, a practical performed on a live model or mannequin covering setup, draping, cleansing, extraction simulation, mask application and waxing.'
    },
    education: {
      hours: '200–1,000 clock hours of board-approved esthetics training; the most common figure is 600',
      note: 'The spread is nearly five to one. Utah sits at 200 hours for a basic esthetician (with a separate 1,200-hour master tier), Florida at 220, and Massachusetts and Pennsylvania at 300; Wisconsin and South Carolina sit at 450; Michigan at 400; roughly half the country is at 600; Illinois, Kentucky, Louisiana, Missouri, Tennessee, Texas and Washington require 750; and Alabama, Georgia and Kansas top the table at 1,000. Connecticut requires 600 hours under its 2020 practice act. Because so many boards apply an equal-or-greater test on transfer, a 220-hour Florida esthetician will normally have to add coursework or document work experience before an Alabama or Kansas board will license them.'
    },
    prerequisites:
      'Minimum age of 16–18 depending on the state; a high school diploma or GED in most jurisdictions; and completion of the state-required esthetics hours at a school holding a current licence from that state board, with the transcript filed directly by the school.',
    costBreakdown: {
      items: [
        { item: 'Esthetics programme tuition (200–1,000 hours)', fee: '$3,000–$12,000' },
        { item: 'Kit, products and textbooks', fee: '$600–$2,000' },
        { item: 'Written theory examination', fee: '$40–$90' },
        { item: 'Practical examination', fee: '$50–$110' },
        { item: 'Initial licence application', fee: '$25–$150' },
        { item: 'Biennial renewal', fee: '$40–$150' }
      ],
      total: '$100–$350 in state fees; $4,000–$14,000 including tuition and kit'
    },
    timeline: [
      { stage: 'Esthetics programme', duration: '5–8 weeks full time at 200–300 hours; 4–8 months at 600–750 hours' },
      { stage: 'Board application and exam authorisation', duration: '2–6 weeks' },
      { stage: 'Written and practical examinations', duration: '1–4 weeks to schedule and sit' },
      { stage: 'Licence issuance', duration: '1–4 weeks' }
    ],
    route: [
      { title: 'Check your state hour requirement and whether a master tier exists', description: 'Hours range from 200 to 1,000. If you plan to offer microdermabrasion, deeper peels or light-based treatments, find out now whether your state gates those behind a master esthetician licence (Utah, Washington, Virginia, DC) or a medical supervision rule.' },
      { title: 'Enrol at a board-licensed esthetics programme', description: 'Only hours from a school licensed by your state board count. Beware of private "certification" academies selling lash, brow or facial certificates — those are not licences and cannot be used to satisfy board hours.' },
      { title: 'Complete the hours and have the transcript filed', description: 'Schools send transcripts directly to the board. Some states also require a documented count of specific services performed during training.' },
      { title: 'Pass the NIC or state written examination', description: 'Skin anatomy, contraindications and infection control dominate. The state law section is short but frequently the reason candidates fail on a first attempt.' },
      { title: 'Pass the practical examination', description: 'Judged on sanitation, draping, product handling and safe waxing technique rather than results. Read the published criteria sheet and bring exactly the listed kit.' },
      { title: 'Apply, then plan any advanced credential', description: 'Once licensed, check the CE requirement for renewal and decide whether a master esthetician upgrade, laser certification or a medical-spa role requiring physician supervision is worth the additional hours in your state.' }
    ],
    providersNote:
      'Hour requirements, fees and approved-school lists are published by each state board and change frequently; the figures below come from 2026 board-sourced comparison tables (cosmetologyexamprep.com and getlicensemap.com) cross-checked against the NIC State Education and Licensing Guide, and should be confirmed with the board before enrolling. State application and examination fees for estheticians generally sit on the same board schedule as cosmetology in the same state, so where no figure is given below, budget in the same range as that state\u2019s cosmetology entry. Note the strict boundary between a state licence and a private certificate: brands and academies sell lash-extension, microblading and facial certificates that carry no legal authority, and in most states microblading and permanent makeup are separately regulated as body art or tattooing rather than esthetics.',
    faqs: [
      {
        q: 'Is esthetics licensed in every state?',
        a: 'Yes, in all 50 states and the District of Columbia. Connecticut was the last jurisdiction without an esthetician licence and made one mandatory on 1 July 2020 under Public Act 19-117, requiring 600 hours of training and a $100 application. Any guide still describing Connecticut esthetics as unregulated is out of date.'
      },
      {
        q: 'Is there an esthetics compact?',
        a: 'Yes, but only barely. The Esthetics Licensure Compact has been enacted in Alabama, Kansas and Virginia. It requires seven member states before it can activate, so it is not operational and issues no multistate privilege. Note that this is a separate instrument from the Cosmetology Licensure Compact, which has eleven member states but does not automatically cover esthetician licences.'
      },
      {
        q: 'Esthetician or cosmetologist — which should I choose?',
        a: 'Esthetics is faster and cheaper almost everywhere (200–1,000 hours versus 1,000–2,100) and leads directly into spa, medical-spa and skincare-brand work. Cosmetology is broader and lets you work hair as well. In most states a cosmetology licence already includes esthetics scope, so cosmetologists rarely need the separate credential — but an esthetician can never perform hair services on that licence alone.'
      },
      {
        q: 'What is a master esthetician?',
        a: 'An advanced second-tier licence recognised in a minority of states, notably Utah, Washington, Virginia and the District of Columbia. It adds several hundred to a thousand extra hours and authorises services such as microdermabrasion, deeper chemical peels and certain light-based or device treatments that a basic esthetician cannot legally perform. In states without the tier, those services are usually restricted to medical supervision instead.'
      },
      {
        q: 'Can I do lash extensions or microblading on an esthetician licence?',
        a: 'It depends entirely on the state. Lash extensions are usually within esthetics scope, but Connecticut created a standalone 50-hour Eyelash Technician licence in 2020 and other states regulate lashes separately. Microblading and permanent makeup are almost always regulated as tattooing or body art under a different statute — often a health-department permit rather than a board licence — and an esthetics licence alone will not cover them.'
      },
      {
        q: 'How portable is an esthetician licence?',
        a: 'Less portable than the hour ranges suggest, because most boards apply an equal-or-greater test. A 220-hour Florida or 200-hour Utah licensee will usually need to make up hours or document one to two years of licensed practice before Alabama, Georgia or Kansas (1,000 hours) will grant licensure by endorsement. Apply with certified verification sent board-to-board and expect to sit the destination state law exam.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'The Esthetics Licensure Compact exists but is not operational: it has been enacted in only three states — Alabama, Kansas and Virginia, each flagged compactMember: true below — against the seven member states required to activate the commission, so no esthetician holds a multistate privilege today. It is a distinct instrument from the Cosmetology Licensure Compact (eleven member states), which does not automatically extend to esthetician licences. compacts.mjs contains no esthetics compact id, so `compact` is null. Practical portability therefore runs entirely through endorsement and reciprocity, and the governing test in most states is equal-or-greater training hours: with the range running from 200 hours in Utah to 1,000 in Alabama, Georgia and Kansas, licensees moving up the hour ladder are routinely asked to complete additional coursework or document one to two years of licensed work experience. Expect certified licence verification board-to-board, an application fee and, in many states, a jurisprudence or state law examination.'
    },

    defaultAgency: 'State Board of Cosmetology',
    sourceUrl: 'https://nictesting.org/state-boards/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Board of Cosmetology and Barbering', agencyUrl: 'https://aboc.alabama.gov', note: '1,000 hours — tied with Georgia and Kansas for the highest esthetics requirement in the country, five times Utah\u2019s. NIC theory and practical via Prometric; 10th grade education and minimum age 16. Alabama is one of only three Esthetics Licensure Compact states.', compactMember: true },
      AK: { agency: 'Alaska Board of Barbers and Hairdressers, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofBarbersHairdressers.aspx', note: '350 hours — unusually low for a state whose cosmetology requirement is 1,650 hours. NIC esthetics theory required.', compactMember: false },
      AZ: { agency: 'Arizona Board of Cosmetology and Barbering', agencyUrl: 'https://boc.az.gov', note: '600 hours, the national median. NIC theory and practical. Arizona has enacted the Cosmetology Licensure Compact but not the separate Esthetics Licensure Compact.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health, Cosmetology Section', agencyUrl: 'https://healthy.arkansas.gov/programs-services/topics/cosmetology', note: '600 hours. Esthetics is regulated by the Department of Health rather than a standalone cosmetology board.', compactMember: false },
      CA: { agency: 'California Board of Barbering and Cosmetology, Department of Consumer Affairs', agencyUrl: 'https://www.barbercosmo.ca.gov', note: '600 hours. California has no master esthetician tier, so microdermabrasion and deeper peels fall under medical supervision rules rather than an advanced licence.', compactMember: false },
      CO: { agency: 'Colorado Office of Barber and Cosmetology Licensure, DORA Division of Professions and Occupations', agencyUrl: 'https://dpo.colorado.gov/BarberCosmetology', note: '600 hours. Endorsement is granted only from substantially equivalent states. Colorado is a Cosmetology Licensure Compact state but has not enacted the esthetics compact.', compactMember: false },
      CT: { agency: 'Connecticut Department of Public Health, Practitioner Licensing and Investigations Section', agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/esthetician/esthetician-licensure', fee: '$100 application; $100 biennial renewal', note: '600 hours. Esthetics licensure became mandatory only on 1 July 2020 under Public Act 19-117 — Connecticut was the last state to regulate the profession. Applications are filed online through eLicense Connecticut under the "Appearance Enhancement" grouping, and a combination licence covering esthetics, eyelash and nail technology is available.', compactMember: false },
      DE: { agency: 'Delaware Board of Cosmetology and Barbering, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/cosmetology/', note: '600 hours. Reciprocity applies an equal-or-greater test.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Barber and Cosmetology, Department of Licensing and Consumer Protection', agencyUrl: 'https://dlcp.dc.gov/service/board-barber-and-cosmetology', note: '600 hours, with a separate advanced esthetics tier recognised in the District. Reciprocity requires a letter of good standing from a substantially equivalent jurisdiction.', compactMember: false },
      FL: { agency: 'Florida Board of Cosmetology, Department of Business and Professional Regulation', agencyUrl: 'https://www2.myfloridalicense.com/cosmetology/', note: '220 hours — the second lowest in the country after Utah, and roughly a quarter of what Alabama, Georgia or Kansas require. Florida calls the credential a "facial specialist" registration. 10 CE hours per renewal.', compactMember: false },
      GA: { agency: 'Georgia State Board of Cosmetology and Barbers, Office of Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers', note: '1,000 hours, tied for the highest in the country. Georgia refuses reciprocity to a named list of states, so verify before relying on an out-of-state esthetics licence.', compactMember: false },
      HI: { agency: 'Hawaii Board of Barbering and Cosmetology, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/barber/', note: '600 hours. Renewal is by 31 December of odd-numbered years and no continuing education is required.', compactMember: false },
      ID: { agency: 'Idaho Board of Barber and Cosmetology Services, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/bar/', note: '600 hours. Endorsement available from states with standards not less than Idaho\u2019s.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Barber, Cosmetology, Esthetics, Hair Braiding and Nail Technology Board', agencyUrl: 'https://idfpr.illinois.gov/profs/cosmo.html', note: '750 hours — well above the national median, and the board name itself lists esthetics as a distinct regulated profession. Continental Testing Services administers.', compactMember: false },
      IN: { agency: 'Indiana State Board of Cosmetology and Barber Examiners, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/cosmetology-and-barber-examiners-home/', note: '700 hours. Four-year renewal cycle, longer than almost any other state.', compactMember: false },
      IA: { agency: 'Iowa Board of Cosmetology Arts and Sciences, Department of Health and Human Services', agencyUrl: 'https://hhs.iowa.gov/licensing', note: '600 hours — notably moderate for a state that requires 2,100 hours for full cosmetology.', compactMember: false },
      KS: { agency: 'Kansas Board of Cosmetology', agencyUrl: 'https://www.kansas.gov/kboc/', note: '1,000 hours, tied for the highest in the country. Kansas is one of only three states to have enacted the Esthetics Licensure Compact, and has also enacted the cosmetology compact.', compactMember: true },
      KY: { agency: 'Kentucky Board of Cosmetology', agencyUrl: 'https://kbc.ky.gov', note: '750 hours. Kentucky also imposes a post-examination salon apprenticeship on cosmetologists; confirm whether it applies to your esthetics pathway.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Cosmetology', agencyUrl: 'https://www.lsbc.louisiana.gov', note: '750 hours, 150 above the national median. NIC theory and practical.', compactMember: false },
      ME: { agency: 'Maine Board of Barbering and Cosmetology, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/barbers-cosmetologists', note: '600 hours. Note that some states, including Georgia, will not accept a Maine licence by reciprocity.', compactMember: false },
      MD: { agency: 'Maryland State Board of Cosmetologists, Maryland Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/cos/', note: '600 hours. Maryland has enacted the Cosmetology Licensure Compact but not the esthetics compact.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Cosmetology and Barbering, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-cosmetology-and-barbering', note: '300 hours — one of the four lowest in the country, and half the national median. Massachusetts eliminated the cosmetology practical exam in 2023; confirm the current esthetics exam format.', compactMember: false },
      MI: { agency: 'Michigan Board of Cosmetology, Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/cosmetology', note: '400 hours, well below the 600-hour median and a third of Michigan\u2019s 1,500-hour cosmetology requirement.', compactMember: false },
      MN: { agency: 'Minnesota Board of Cosmetologist Examiners', agencyUrl: 'https://mn.gov/boards/cosmetology/', note: '600 hours. Minnesota exempts makeup application from licensure where the practitioner completes a 4-hour safety course, an unusually broad carve-out that overlaps esthetics scope.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Cosmetology', agencyUrl: 'https://www.msbc.ms.gov', note: '600 hours. Mississippi eliminated the cosmetology practical examination in February 2026; check whether the esthetics practical was also affected.', compactMember: false },
      MO: { agency: 'Missouri State Board of Cosmetology and Barber Examiners, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/cosbar.asp', note: '750 hours, 150 above the national median.', compactMember: false },
      MT: { agency: 'Montana Board of Barbers and Cosmetologists, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/barbers-cosmetologists/', note: '650 hours, slightly above the 600-hour median.', compactMember: false },
      NE: { agency: 'Nebraska Board of Cosmetology, Electrology, Esthetics, Nail Technology and Body Art, Department of Health and Human Services', agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Cosmetology.aspx', note: '600 hours — moderate, in contrast to Nebraska\u2019s 2,100-hour cosmetology requirement. Esthetics is named in the board title alongside electrology and body art.', compactMember: false },
      NV: { agency: 'Nevada State Board of Cosmetology', agencyUrl: 'https://cosmetology.nv.gov', note: '600 hours plus a Nevada law examination in addition to the NIC esthetics exams.', compactMember: false },
      NH: { agency: 'New Hampshire Board of Barbering, Cosmetology and Esthetics, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/board-barbering-cosmetology-and-esthetics', note: '600 hours. Esthetics is named in the board title, reflecting its status as a fully distinct licence class in New Hampshire.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Cosmetology and Hairstyling, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/cos', note: '600 hours. New Jersey uses a state-developed examination rather than the NIC exam, which complicates transfers in both directions.', compactMember: false },
      NM: { agency: 'New Mexico Board of Barbers and Cosmetologists, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/barbers-and-cosmetologists/', note: '600 hours, the national median.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services (Appearance Enhancement)', agencyUrl: 'https://dos.ny.gov/appearance-enhancement', note: '600 hours. New York issues the credential as an "Esthetics" specialty under the Appearance Enhancement statute and uses state-developed written and practical exams rather than NIC.', compactMember: false },
      NC: { agency: 'North Carolina Board of Cosmetic Art Examiners', agencyUrl: 'https://www.nccosmeticarts.com', note: '600 hours. North Carolina also runs a separate esthetics teacher credential requiring 650 hours in an approved teacher programme.', compactMember: false },
      ND: { agency: 'North Dakota State Board of Cosmetology', agencyUrl: 'https://www.nd.gov/cos/', note: '600 hours, the national median.', compactMember: false },
      OH: { agency: 'Ohio State Cosmetology and Barber Board', agencyUrl: 'https://cos.ohio.gov', note: '600 hours. Ohio has enacted the Cosmetology Licensure Compact but not the separate Esthetics Licensure Compact, so an Ohio esthetics licence carries no multistate privilege.', compactMember: false },
      OK: { agency: 'Oklahoma State Board of Cosmetology and Barbering', agencyUrl: 'https://oklahoma.gov/cosmetology.html', note: '600 hours. Oklahoma also exempts blow-dry styling from licensure, though that carve-out does not touch esthetics scope.', compactMember: false },
      OR: { agency: 'Oregon Board of Cosmetology, Oregon Health Authority Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Cosmetology.aspx', note: '≈500 hours, restructured in recent years to roughly 444 hours. Oregon certifies esthetics as a standalone field rather than a specialty under a cosmetology licence; minimum age 18.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Cosmetology, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/cosmetology.html', note: '300 hours — half the national median and one of the four lowest in the country. Pennsylvania uses a state-developed exam delivered by Pearson VUE.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Health, Division of Professional Regulation', agencyUrl: 'https://health.ri.gov/licenses/', note: '600 hours. Esthetics is regulated through the Department of Health rather than a standalone cosmetology board.', compactMember: false },
      SC: { agency: 'South Carolina Board of Cosmetology, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/cos/', note: '450 hours, well below the national median, but a 75% passing score is required on the NIC examination.', compactMember: false },
      SD: { agency: 'South Dakota Cosmetology Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/bdcomm/cosmetology/', note: '600 hours — moderate, against South Dakota\u2019s much-cited 2,100-hour cosmetology requirement. A South Dakota laws and rules exam is also required.', compactMember: false },
      TN: { agency: 'Tennessee Board of Cosmetology and Barber Examiners, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/cosmo.html', note: '750 hours, 150 above the national median. Tennessee has enacted the Cosmetology Licensure Compact but not the esthetics compact.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing and Regulation (TDLR), Cosmetology Program', agencyUrl: 'https://www.tdlr.texas.gov/cosmet/cosmet.htm', note: '750 hours for the esthetician specialty licence — notably more than the 1,000 hours Texas requires for full cosmetology relative to other states. PSI administers; 70% passing score.', compactMember: false },
      UT: { agency: 'Utah Division of Professional Licensing (DOPL), Board of Cosmetology and Barbering', agencyUrl: 'https://dopl.utah.gov/cosmetology-barbering/', note: '≈200 hours for a basic esthetician after Utah\u2019s deregulation reforms — the lowest in the country — alongside a separate 1,200-hour master esthetician licence for microdermabrasion, deeper peels and device work. Confirm the current basic-tier figure with DOPL.', compactMember: false },
      VT: { agency: 'Vermont Board of Barbers and Cosmetologists, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/barbers-cosmetologists/', note: '600 hours, the national median.', compactMember: false },
      VA: { agency: 'Virginia Board for Barbers and Cosmetology, Department of Professional and Occupational Regulation (DPOR)', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Barbers-Cosmetology', note: '600 hours for esthetician plus a separate master esthetician tier for advanced services. Virginia is one of only three Esthetics Licensure Compact states and has also enacted the cosmetology and massage compacts.', compactMember: true },
      WA: { agency: 'Washington State Department of Licensing, Cosmetology, Hair Design, Barbering, Esthetics and Manicuring Advisory Board', agencyUrl: 'https://dol.wa.gov/professional-licenses/cosmetology', note: '750 hours for esthetician, plus a distinct master esthetician licence of roughly 1,200 hours that is required for microdermabrasion, medium-depth peels and certain device treatments. 75% passing score.', compactMember: false },
      WV: { agency: 'West Virginia Board of Barbers and Cosmetologists', agencyUrl: 'https://www.wvbbc.com', note: '600 hours — a third of West Virginia\u2019s 1,800-hour cosmetology requirement. West Virginia has enacted the cosmetology compact but not the esthetics compact.', compactMember: false },
      WI: { agency: 'Wisconsin Barbering and Cosmetology Examining Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/Esthetician/Default.aspx', note: '450 hours, well below the national median, though Wisconsin has among the highest state fee schedules in the country.', compactMember: false },
      WY: { agency: 'Wyoming State Board of Cosmetology', agencyUrl: 'https://cosmetology.wyo.gov', note: '600 hours against 2,000 for cosmetology — one of the widest in-state ratios between the specialty and the full licence.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4. Nail Technician
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'nail-technician',
    name: 'Nail Technician License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'The manicuring specialty licence — the fastest and cheapest route into the licensed beauty industry, now required in all 51 US jurisdictions.',

    overview:
      'A nail technician licence (called a manicurist in Texas and Georgia and a nail specialist in some states) authorises manicures, pedicures, artificial nail application, nail art and skin care of the hands and feet. It is the shortest path into the licensed beauty industry: the national average is about 381 hours against roughly 1,425 for cosmetology, and Connecticut, Delaware and Massachusetts require just 100. Every one of the 50 states and the District of Columbia licenses nail technicians. Connecticut was the last state without a requirement and made licensure mandatory on 1 January 2021 under Public Act 19-117, so any source describing Connecticut as unregulated — several widely circulated PDFs still do — is out of date. Two jurisdictions require no examination at all: Connecticut and Florida license on training and application alone.',
    eligibility:
      'Minimum age is generally 16 to 18 and most states require a high school diploma or GED, though several accept 10th grade completion or an ability-to-benefit test. Candidates must complete the required nail technology hours at a school licensed by the relevant state board and, in 49 of the 51 jurisdictions, pass a written examination; 40 also require a hands-on practical. About 44 states allow an apprenticeship instead of school hours. A licensed cosmetologist may perform nail services in almost every state without the separate credential, since nails fall inside the cosmetology scope. Criminal history is reviewed case by case.',
    exam: {
      admin: 'NIC nail technology theory and practical examinations delivered by PSI, Prometric or Pearson VUE; New York, New Jersey and Pennsylvania run state-developed exams; Connecticut and Florida require no exam',
      questions: 'Roughly 100 multiple-choice questions covering nail anatomy, disorders and diseases, sanitation and infection control, product chemistry and state law',
      time: '75–90 minutes written; 1.5–3 hours for the practical',
      pass: 'Approximately 75% on the NIC nail written exam',
      fee: '$30–$120 combined',
      format: 'Computer-based written theory plus, in 40 jurisdictions, a practical on a mannequin hand or live model covering setup, sanitation, a basic manicure, polish application and a nail tip or wrap. A small number of states are written-only.'
    },
    education: {
      hours: '100–750 clock hours; national average about 381, median 350',
      note: 'The spread is more than seven to one — the widest of any beauty credential. Connecticut, Delaware and Massachusetts require 100 hours; Virginia 150; Florida 180; Maine, Ohio and Pennsylvania 200; Alaska, Maryland, New York and Vermont 250; the 300–350 band covers roughly fifteen states; Georgia 525 and Louisiana 500 sit in the middle; and Arizona, Arkansas, Colorado, Nevada, Oklahoma, Tennessee, Texas and Washington all require 600, with Alabama highest at 750. That gap makes transfers awkward in one direction only: a 750-hour Alabama licensee can go almost anywhere, while a 100-hour Connecticut or 150-hour Virginia licensee will usually be asked for extra hours or documented work experience before a 600-hour state will license them.'
    },
    prerequisites:
      'Minimum age of 16–18 depending on the state; a high school diploma, GED, 10th grade completion or an ability-to-benefit test depending on the jurisdiction; and completion of the required nail technology hours at a board-licensed school, or a state-approved apprenticeship where one is offered.',
    costBreakdown: {
      items: [
        { item: 'Nail technology programme tuition (100–750 hours)', fee: '$2,000–$8,000' },
        { item: 'Implement kit and products', fee: '$400–$1,500' },
        { item: 'Written examination', fee: '$30–$80' },
        { item: 'Practical examination (where required)', fee: '$40–$100' },
        { item: 'Initial licence application', fee: '$25–$175' },
        { item: 'Renewal (annual to biennial)', fee: '$25–$100' }
      ],
      total: 'Average initial state fee about $153; $2,500–$9,500 including tuition and kit'
    },
    timeline: [
      { stage: 'Nail technology programme', duration: '2–4 weeks full time at 100 hours; 15 weeks at 600 hours; 3–12 months part time' },
      { stage: 'Board application and exam authorisation', duration: '2–5 weeks' },
      { stage: 'Written and practical examinations', duration: '1–4 weeks to schedule and sit (none required in Connecticut or Florida)' },
      { stage: 'Licence issuance', duration: '1–4 weeks' }
    ],
    route: [
      { title: 'Confirm your state hour requirement', description: 'It ranges from 100 to 750 hours, the widest spread of any beauty credential. Also check whether your state requires an exam — Connecticut and Florida do not — and whether an apprenticeship is available, as 44 states permit one.' },
      { title: 'Enrol at a board-licensed nail technology programme', description: 'Hours only count from a school holding a current state board licence. Product-brand certificates and academy diplomas in gel, acrylic or Russian manicure technique are marketing credentials, not licences, and will not satisfy board hours.' },
      { title: 'Complete the hours and have the transcript filed', description: 'The school files the transcript directly with the board. Keep your own copy — you will need it if you later apply for licensure in another state.' },
      { title: 'Pass the written examination', description: 'Nail anatomy and disorders, product chemistry (including MMA restrictions), sanitation and state law. The infection-control and law sections are where most first-attempt failures occur.' },
      { title: 'Pass the practical where required', description: 'Performed on a mannequin hand or live model against a published criteria sheet. Implement disinfection and workstation setup carry more marks than the finished manicure.' },
      { title: 'Apply for the licence and, if self-employed, the establishment licence', description: 'All 51 jurisdictions require a separate salon or establishment licence for the premises, and many require booth renters to register individually. Check the renewal cycle — some states renew annually — and any CE requirement, which averages under six hours per cycle nationally.' }
    ],
    providersNote:
      'State boards publish the definitive hour, fee and approved-school information; the per-state hours below come from 2026 board-sourced comparison tables (cosmetologyexamprep.com, getlicensemap.com, beautylicenseguide.com) and should be confirmed with the board before enrolling. Be sceptical of secondary sources on this credential in particular: several widely circulated school and vendor PDFs — including material republished as recently as 2024 — still state that Connecticut does not license nail technicians, which has been wrong since 1 January 2021. Application and examination fees generally sit on the same board schedule as cosmetology in the same state and average about $153 nationally. Note also that a private certification in gel, acrylic, dip or Russian manicure technique carries no legal authority anywhere; only the state licence does, and practising for compensation without one carries penalties from a citation up to a misdemeanour and fines of several thousand dollars.',
    faqs: [
      {
        q: 'Does Connecticut license nail technicians?',
        a: 'Yes, since 1 January 2021. Public Act 19-117 created the credential under CGS §20-265d: 100 hours at a DPH-approved school, a $100 application, no examination, and biennial renewal at $100 with no continuing education. Connecticut was genuinely the last state to regulate the trade, which is why many older guides and even some 2024 school handouts still say the opposite. At 100 hours it is now tied with Delaware and Massachusetts for the lowest requirement in the country.'
      },
      {
        q: 'Is there a compact for nail technicians?',
        a: 'No. The Cosmetology Licensure Compact enacted in eleven states covers cosmetology, and the separate Esthetics Licensure Compact covers esthetics in three states; neither creates a multistate privilege for a standalone nail technician licence, and there is no nail-specific compact. Every state below is therefore flagged compactMember: false.'
      },
      {
        q: 'Which states are quickest to license?',
        a: 'Connecticut, Delaware and Massachusetts at 100 hours, then Virginia at 150 and Florida at 180. Connecticut and Florida additionally require no licensing examination at all, so in those two states training plus an application is the entire path. At the other end, Alabama requires 750 hours and eight states require 600.'
      },
      {
        q: 'Can I transfer my nail licence to another state?',
        a: 'Usually, but the direction matters. Most boards apply an equal-or-greater hours test, so moving from a 100-hour state to a 600-hour state normally means additional coursework or one to two years of documented licensed practice, while the reverse is straightforward. Apply for licensure by endorsement with certified verification sent board-to-board, and expect a state law exam in some jurisdictions.'
      },
      {
        q: 'Do I need a licence to do nails from home or for friends?',
        a: 'If you are paid, yes, in all 51 jurisdictions — the trigger is compensation, not location. Most states additionally require the premises itself to hold a salon or establishment licence, which is why home-based work is restricted or prohibited outright in several states. Penalties range from a warning citation to misdemeanour charges and fines of up to several thousand dollars.'
      },
      {
        q: 'Is a nail technician licence enough for advanced techniques like e-file work?',
        a: 'The licence defines your legal scope, not your skill level. Electric file use is within nail technician scope in most states but is specifically restricted or requires additional training in some, and MMA (methyl methacrylate) monomer is banned or restricted in most jurisdictions. Advanced private certifications are useful for employability but never expand the legal scope your state licence grants.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for nail technicians. The Cosmetology Licensure Compact (Alabama, Arizona, Colorado, Kansas, Kentucky, Maryland, Ohio, Tennessee, Virginia, Washington, West Virginia) and the Esthetics Licensure Compact (Alabama, Kansas, Virginia) are separate instruments that do not extend a multistate privilege to a standalone nail technician licence, and neither is operational in any case. compacts.mjs has no matching id, so `compact` is null and every state below is flagged compactMember: false. Transfers run through licensure by endorsement, and because required hours range from 100 to 750 the equal-or-greater rule bites hard in one direction: a licensee from Connecticut, Delaware or Massachusetts (100 hours) moving to Alabama (750) or one of the eight 600-hour states will normally be required to complete additional training or evidence one to two years of licensed practice, whereas a licensee moving the other way is usually approved on verification and fee alone. Always confirm the destination board\u2019s rule before resigning a job or relocating.'
    },

    defaultAgency: 'State Board of Cosmetology',
    sourceUrl: 'https://nictesting.org/state-boards/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Board of Cosmetology and Barbering', agencyUrl: 'https://aboc.alabama.gov', note: '750 hours — the highest nail technology requirement in the United States, more than seven times Connecticut\u2019s. NIC theory and practical via Prometric; 10th grade education and minimum age 16.', compactMember: false },
      AK: { agency: 'Alaska Board of Barbers and Hairdressers, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofBarbersHairdressers.aspx', note: '250 hours, with a shorter limited basic manicurist course also available. NIC national nail technology theory examination required.', compactMember: false },
      AZ: { agency: 'Arizona Board of Cosmetology and Barbering', agencyUrl: 'https://boc.az.gov', note: '600 hours and an annual renewal cycle, which is unusual — most states renew biennially. NIC theory and practical.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health, Cosmetology Section', agencyUrl: 'https://healthy.arkansas.gov/programs-services/topics/cosmetology', note: '600 hours. Arkansas uses the NIC National Nail Technology (Manicuring) examination and publishes its own reciprocity requirements document.', compactMember: false },
      CA: { agency: 'California Board of Barbering and Cosmetology, Department of Consumer Affairs', agencyUrl: 'https://www.barbercosmo.ca.gov', note: '400 hours, reduced from 600 in the 2022 reforms. Written exam only — California dropped the nail practical. No continuing education required.', compactMember: false },
      CO: { agency: 'Colorado Office of Barber and Cosmetology Licensure, DORA Division of Professions and Occupations', agencyUrl: 'https://dpo.colorado.gov/BarberCosmetology', note: '600 hours. Colorado runs its own manicurist written and practical examinations through PSI rather than accepting the NIC exam, and licenses by endorsement only from equivalent states.', compactMember: false },
      CT: { agency: 'Connecticut Department of Public Health, Practitioner Licensing and Investigations Section', agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nail-technician/nail-technician-licensure', fee: '$100 application; $100 biennial renewal', note: '100 hours — tied for the lowest in the country — and no licensing examination whatsoever. Licensure became mandatory on 1 January 2021 under Public Act 19-117 (CGS §20-265d); before that Connecticut was the only state with no nail regulation at all, and several vendor guides still wrongly say so. Applications are online only via eLicense Connecticut under "Appearance Enhancement"; no continuing education is required.', compactMember: false },
      DE: { agency: 'Delaware Board of Cosmetology and Barbering, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/cosmetology/', note: '100 hours, tied with Connecticut and Massachusetts for the lowest in the country. Written and practical exams required; renewal in even-numbered years.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Barber and Cosmetology, Department of Licensing and Consumer Protection', agencyUrl: 'https://dlcp.dc.gov/service/board-barber-and-cosmetology', note: '350 hours, close to the national median of 350.', compactMember: false },
      FL: { agency: 'Florida Board of Cosmetology, Department of Business and Professional Regulation', agencyUrl: 'https://www2.myfloridalicense.com/cosmetology/', note: '180 hours and no state examination at all — Florida licenses nail specialists on training and application alone, one of only two jurisdictions to do so. Renewal is biennial with CE including HIV/AIDS content.', compactMember: false },
      GA: { agency: 'Georgia State Board of Cosmetology and Barbers, Office of Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers', note: '525 hours — the credential is titled "manicurist" in Georgia. Written and practical exams; Georgia refuses reciprocity to a named list of states.', compactMember: false },
      HI: { agency: 'Hawaii Board of Barbering and Cosmetology, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/barber/', note: '350 hours. Renewal is by 31 December of odd-numbered years; no continuing education required.', compactMember: false },
      ID: { agency: 'Idaho Board of Barber and Cosmetology Services, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/bar/', note: '400 hours. Endorsement available from states with standards not less than Idaho\u2019s.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Barber, Cosmetology, Esthetics, Hair Braiding and Nail Technology Board', agencyUrl: 'https://idfpr.illinois.gov/profs/cosmo.html', note: '350 hours; the credential is titled "Licensed Nail Technician". Written exam only through Continental Testing Services — no practical component.', compactMember: false },
      IN: { agency: 'Indiana State Board of Cosmetology and Barber Examiners, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/cosmetology-and-barber-examiners-home/', note: '450 hours, above the 350-hour national median. Four-year renewal cycle.', compactMember: false },
      IA: { agency: 'Iowa Board of Cosmetology Arts and Sciences, Department of Health and Human Services', agencyUrl: 'https://hhs.iowa.gov/licensing', note: '325 hours — modest, in contrast with Iowa\u2019s 2,100-hour cosmetology requirement, the highest in the country.', compactMember: false },
      KS: { agency: 'Kansas Board of Cosmetology', agencyUrl: 'https://www.kansas.gov/kboc/', note: '350 hours. Kansas has enacted both the Cosmetology and Esthetics Licensure Compacts, but neither covers a standalone nail technician licence.', compactMember: false },
      KY: { agency: 'Kentucky Board of Cosmetology', agencyUrl: 'https://kbc.ky.gov', note: '450 hours, above the national median.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Cosmetology', agencyUrl: 'https://www.lsbc.louisiana.gov', note: '500 hours, well above the 350-hour median. NIC theory and practical.', compactMember: false },
      ME: { agency: 'Maine Board of Barbering and Cosmetology, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/barbers-cosmetologists', note: '200 hours, well below the national median, and among the lowest state fee schedules in the country.', compactMember: false },
      MD: { agency: 'Maryland State Board of Cosmetologists, Maryland Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/cos/', note: '250 hours. Maryland, DC and Virginia have markedly different nail requirements (250, 350 and 150 hours) despite the shared labour market.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Cosmetology and Barbering, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-cosmetology-and-barbering', note: '100 hours, tied with Connecticut and Delaware for the lowest requirement in the United States.', compactMember: false },
      MI: { agency: 'Michigan Board of Cosmetology, Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/cosmetology', note: '400 hours, above the national median. Practical exam required; no apprenticeship pathway.', compactMember: false },
      MN: { agency: 'Minnesota Board of Cosmetologist Examiners', agencyUrl: 'https://mn.gov/boards/cosmetology/', note: '350 hours, the national median. Minnesota\u2019s hair-styling and makeup exemption does not extend to nail services.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Cosmetology', agencyUrl: 'https://www.msbc.ms.gov', note: '400 hours, above the median.', compactMember: false },
      MO: { agency: 'Missouri State Board of Cosmetology and Barber Examiners, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/cosbar.asp', note: '400 hours. An apprenticeship pathway is available as in most Missouri beauty credentials.', compactMember: false },
      MT: { agency: 'Montana Board of Barbers and Cosmetologists, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/barbers-cosmetologists/', note: '400 hours, above the national median.', compactMember: false },
      NE: { agency: 'Nebraska Board of Cosmetology, Electrology, Esthetics, Nail Technology and Body Art, Department of Health and Human Services', agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Cosmetology.aspx', note: '300 hours — modest, against Nebraska\u2019s 2,100-hour cosmetology requirement. Nail technology is named explicitly in the board title.', compactMember: false },
      NV: { agency: 'Nevada State Board of Cosmetology', agencyUrl: 'https://cosmetology.nv.gov', note: '600 hours plus a Nevada law examination — one of the eight states in the top hour band.', compactMember: false },
      NH: { agency: 'New Hampshire Board of Barbering, Cosmetology and Esthetics, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/board-barbering-cosmetology-and-esthetics', note: '300 hours, slightly below the national median.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Cosmetology and Hairstyling, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/cos', note: '300 hours. New Jersey uses a state-developed examination rather than the NIC exam.', compactMember: false },
      NM: { agency: 'New Mexico Board of Barbers and Cosmetologists, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/barbers-and-cosmetologists/', note: '400 hours, above the national median.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services (Appearance Enhancement)', agencyUrl: 'https://dos.ny.gov/appearance-enhancement', note: '250 hours, issued as a "Nail Specialty" licence under the Appearance Enhancement statute. New York uses state-developed written and practical exams rather than NIC, and its state fees are among the lowest in the country.', compactMember: false },
      NC: { agency: 'North Carolina Board of Cosmetic Art Examiners', agencyUrl: 'https://www.nccosmeticarts.com', note: '300 hours. North Carolina also runs a separate manicurist teacher credential requiring 320 hours in an approved teacher programme.', compactMember: false },
      ND: { agency: 'North Dakota State Board of Cosmetology', agencyUrl: 'https://www.nd.gov/cos/', note: '350 hours, the national median.', compactMember: false },
      OH: { agency: 'Ohio State Cosmetology and Barber Board', agencyUrl: 'https://cos.ohio.gov', note: '200 hours for the manicurist licence — well below the median and only an eighth of Ohio\u2019s 1,800-hour barbering requirement. Minimum age 16 following HB 158 (October 2024).', compactMember: false },
      OK: { agency: 'Oklahoma State Board of Cosmetology and Barbering', agencyUrl: 'https://oklahoma.gov/cosmetology.html', note: '600 hours, in the top hour band alongside Texas, Washington and Nevada.', compactMember: false },
      OR: { agency: 'Oregon Board of Cosmetology, Oregon Health Authority Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Cosmetology.aspx', note: '≈241 hours under Oregon\u2019s field-based certification system (historically 350). Written exams only plus an Oregon laws and rules test; minimum age 18.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Cosmetology, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/cosmetology.html', note: '200 hours; Pennsylvania uses a state-developed examination delivered by Pearson VUE rather than the NIC exam.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Health, Division of Professional Regulation', agencyUrl: 'https://health.ri.gov/licenses/', note: '300 hours, regulated through the Department of Health rather than a standalone board.', compactMember: false },
      SC: { agency: 'South Carolina Board of Cosmetology, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/cos/', note: '300 hours with a 75% passing score on the NIC examination, higher than the 70% many states use.', compactMember: false },
      SD: { agency: 'South Dakota Cosmetology Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/bdcomm/cosmetology/', note: '400 hours plus a South Dakota laws and rules examination. Minimum age 18.', compactMember: false },
      TN: { agency: 'Tennessee Board of Cosmetology and Barber Examiners, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/cosmo.html', note: '600 hours, in the top hour band. Some sources cite 500 — confirm with the board before enrolling.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing and Regulation (TDLR), Cosmetology Program', agencyUrl: 'https://www.tdlr.texas.gov/cosmet/cosmet.htm', note: '600 hours for the manicurist licence — notably higher than several states that require more cosmetology hours than Texas does. PSI administers written and practical.', compactMember: false },
      UT: { agency: 'Utah Division of Professional Licensing (DOPL), Board of Cosmetology and Barbering', agencyUrl: 'https://dopl.utah.gov/cosmetology-barbering/', note: '300 hours, slightly below the national median.', compactMember: false },
      VT: { agency: 'Vermont Board of Barbers and Cosmetologists, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/barbers-cosmetologists/', note: '250 hours (some sources cite 150) — among the lowest in the country either way.', compactMember: false },
      VA: { agency: 'Virginia Board for Barbers and Cosmetology, Department of Professional and Occupational Regulation (DPOR)', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Barbers-Cosmetology', note: '150 hours — the second lowest in the United States after the 100-hour trio, and a fifth of Alabama\u2019s requirement. Virginia has enacted the cosmetology, esthetics and massage compacts, but none covers nail technology.', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing, Cosmetology, Hair Design, Barbering, Esthetics and Manicuring Advisory Board', agencyUrl: 'https://dol.wa.gov/professional-licenses/cosmetology', note: '600 hours for the manicurist licence, in the top hour band, with a 75% passing score.', compactMember: false },
      WV: { agency: 'West Virginia Board of Barbers and Cosmetologists', agencyUrl: 'https://www.wvbbc.com', note: '400 hours, above the national median.', compactMember: false },
      WI: { agency: 'Wisconsin Barbering and Cosmetology Examining Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/ManicuringSpecialist/Default.aspx', note: '300 hours, issued as a manicuring specialist credential. Wisconsin has among the highest state fee schedules in the country.', compactMember: false },
      WY: { agency: 'Wyoming State Board of Cosmetology', agencyUrl: 'https://cosmetology.wyo.gov', note: '400 hours against 2,000 for full cosmetology — a five-to-one ratio between the specialty and the full licence.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 5. Cosmetology Instructor
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'cosmetology-instructor',
    name: 'Cosmetology Instructor License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'The teaching credential required to instruct in a licensed cosmetology school — issued by 47 of the 51 US jurisdictions, but abolished or never created in four.',

    overview:
      'A cosmetology instructor (or "teacher") licence authorises you to teach in a state-licensed cosmetology, barbering, esthetics or nail school. It is layered on top of a practitioner licence: every state that issues one requires you to hold and maintain the underlying cosmetology, barber, esthetics or nail credential in the subject you teach, and in most states your right to teach lapses automatically if the practitioner licence does. Unlike the practitioner credentials in this category, this one is genuinely absent in four jurisdictions. Texas abolished the separate barbering and cosmetology instructor licence with effect from 1 September 2021, and California, Colorado and Florida have never issued a standalone teacher credential — in all four, a licensed school may simply employ someone holding the appropriate practitioner licence, and sets its own hiring standards on top. Those four states are therefore omitted below.',
    eligibility:
      'You must hold a current practitioner licence in the field you intend to teach, issued by the same state. Beyond that, states use one of two models, and many offer both: an hours model requiring a formal instructor-training course at an approved school (typically 500 to 1,000 hours), or an experience model substituting one to five years of documented licensed practice for part of the training. Illinois is a clean example of the hybrid — 500 teacher-training hours if you have two years of recent licensed experience, or 1,000 hours if you do not. Minimum age is usually 18 and a high school diploma is required more often than for the practitioner licence: Alabama, for instance, waives the diploma for cosmetologists but requires it for instructors.',
    exam: {
      admin: 'State boards or their vendors — PSI in Georgia and several others, Prometric or the board directly elsewhere; content is usually NIC instructor theory plus a state law section',
      questions: 'An instructor theory examination on teaching methods, lesson planning, evaluation and classroom management, plus state law and rules',
      time: '90–120 minutes written; a teaching demonstration where required',
      pass: 'Typically 70–75%',
      fee: '$20–$150 depending on jurisdiction (Connecticut charges only about $20 for the instructor examination)',
      format: 'Written theory in every state that licenses instructors; a number also require a live teaching demonstration or a practical performed to the same standard expected of students.'
    },
    education: {
      hours: '250–1,500 hours of instructor training, or a documented work-experience alternative',
      note: 'The variation here is driven as much by the alternative pathway as by the headline number. Alabama requires a 1,500-hour instructor course, or one year of salon experience plus 650 hours. Delaware wants 500 classroom hours, or 250 hours plus two years of licensed work. Illinois requires 500 hours with two years of recent experience or 1,000 without. Georgia sets 750 hours for master cosmetology and hair designer instructors, 500 for esthetician instructors and 250 for nail technician instructors. North Carolina requires 800 hours for cosmetology teachers, 650 for esthetics and 320 for manicuring or natural hair care, with a one-year full-time work alternative. Arizona requires 650 hours plus five years of industry experience in the previous ten; Arkansas 600; Hawaii and Idaho 600 and 900 respectively; Washington and Connecticut are lighter, Washington requiring 500 hours and Connecticut only an examination on top of the cosmetology licence.'
    },
    prerequisites:
      'A current, active practitioner licence in the discipline to be taught, issued by the same state; minimum age of 18 in most jurisdictions; a high school diploma or equivalent in most states; and either completion of an approved instructor-training programme or the documented work-experience alternative the state accepts in its place.',
    costBreakdown: {
      items: [
        { item: 'Instructor training programme (250–1,500 hours)', fee: '$2,500–$12,000' },
        { item: 'Instructor theory examination', fee: '$20–$120' },
        { item: 'Teaching demonstration or practical (where required)', fee: '$50–$120' },
        { item: 'Initial instructor licence application', fee: '$25–$150' },
        { item: 'Renewal of the underlying practitioner licence', fee: '$40–$150 per cycle' },
        { item: 'Instructor licence renewal', fee: '$25–$120 per cycle' }
      ],
      total: '$100–$400 in state fees; $3,000–$13,000 including instructor-training tuition'
    },
    timeline: [
      { stage: 'Accumulating the required practitioner experience', duration: '1–5 years depending on the state pathway chosen' },
      { stage: 'Instructor training programme', duration: '2–4 months at 250–500 hours; up to 12 months at 1,000–1,500 hours' },
      { stage: 'Instructor examination and teaching demonstration', duration: '2–8 weeks to schedule and sit' },
      { stage: 'Licence issuance and school placement', duration: '2–6 weeks' }
    ],
    route: [
      { title: 'Check first whether your state issues the licence at all', description: 'California, Colorado, Florida and Texas do not. Texas abolished the credential on 1 September 2021 and licensed schools there may hire any teacher holding the appropriate TDLR practitioner licence. In those four states the question is a hiring standard set by the school, not a board requirement — ask the school what it expects before paying for an instructor programme.' },
      { title: 'Keep your practitioner licence current', description: 'Every state that licenses instructors requires an active underlying credential in the subject taught, and in most states the right to teach is suspended the moment the practitioner licence lapses. Renew both on the same calendar reminder.' },
      { title: 'Choose between the hours pathway and the experience pathway', description: 'If you already have two or more years of licensed practice, most states will roughly halve the instructor hours you need — Illinois 500 instead of 1,000, Delaware 250 instead of 500, Alabama 650 instead of 1,500. Documenting that experience properly is usually cheaper than extra tuition.' },
      { title: 'Complete an approved instructor-training programme', description: 'The curriculum covers educational psychology, lesson planning, test construction, classroom management and supervised teaching. Theory portions may be available online in some states, but supervised clinic-floor teaching almost always has to be delivered in person. Confirm board approval of the specific programme before enrolling.' },
      { title: 'Pass the instructor examination', description: 'Expect an instructor theory paper on teaching methodology plus a state law section, and in several states a live teaching demonstration judged on clarity, pacing and sanitation language as much as content.' },
      { title: 'Apply and match your credential to the subject', description: 'Instructor licences are often subject-specific: Georgia and North Carolina issue separate cosmetology, esthetics and nail teacher credentials with different hour requirements. Holding a cosmetology instructor licence does not automatically authorise you to teach esthetics or nails in those states.' }
    ],
    providersNote:
      'Instructor requirements are the least standardised credential in this category and the most poorly documented by third-party sites, so the state board rule text is essential reading rather than optional. The hour figures given here are drawn from board and PSI documentation compiled in 2026 state-by-state instructor reciprocity charts, cross-checked against individual board pages, and several states publish only a rule citation rather than a plain-language summary — Illinois Administrative Code §1175.405 is the operative text there, for example. Instructor-training programmes are offered by the same NACCAS-accredited schools that run practitioner programmes, and a school will usually tell you which board pathway it is approved to deliver. Treat advertisements for free or fully online instructor certification with scepticism: an online course may satisfy the theory portion in some states, but board approval of that specific programme, and supervised in-person teaching hours, are what determine whether your hours count.',
    faqs: [
      {
        q: 'Which states do not issue a cosmetology instructor licence?',
        a: 'Four. Texas abolished the separate barbering and cosmetology instructor licence effective 1 September 2021 — TDLR-licensed schools may now employ a teacher who simply holds the appropriate practitioner licence for what they teach. California, Colorado and Florida have never issued a standalone teacher credential; the instructor must hold a practitioner licence in the subject taught, and Colorado additionally expects two years of experience as a matter of practice. In all four, hiring standards are set by the school rather than the board.'
      },
      {
        q: 'Do I need to keep my cosmetology licence active while teaching?',
        a: 'Yes, in essentially every state that issues an instructor licence. The teaching credential is layered on the practitioner credential, and if your cosmetology, barbering, esthetics or nail licence lapses you generally lose the legal authority to teach that subject until it is restored — even if the instructor licence itself is still within its term.'
      },
      {
        q: 'Can I teach esthetics or nails on a cosmetology instructor licence?',
        a: 'Not automatically. Several states issue subject-specific teacher credentials with different hour requirements: Georgia sets 750 hours for master cosmetology and hair designer instructors, 500 for esthetician instructors and 250 for nail technician instructors, and North Carolina sets 800, 650 and 320 hours respectively. Check whether your state licenses by discipline before assuming your credential covers the class you have been offered.'
      },
      {
        q: 'Is there a shortcut if I already have years of salon experience?',
        a: 'Usually yes, and it is normally the cheapest route. Illinois requires 500 teacher-training hours with two years of recent licensed experience but 1,000 without; Delaware accepts 250 hours plus two years of work in place of 500 hours; Alabama accepts one year of shop experience plus 650 hours instead of a 1,500-hour course; North Carolina accepts one year of full-time cosmetic art shop work immediately before application. Arizona goes the other way and requires five years of industry experience in the previous ten in addition to the 650 hours.'
      },
      {
        q: 'Does an instructor licence transfer between states?',
        a: 'Rarely without conditions. There is no compact, and most boards apply the same equal-or-greater test used for practitioner licences — Arizona against its 650 hours, Arkansas 600, Delaware 500, DC 1,000, Georgia 750, Hawaii 600, Idaho 900 — while also requiring you to hold or obtain that state\u2019s practitioner licence first. Georgia additionally excludes a named list of states from reciprocity. Expect to supply certified verification of both credentials, transcripts and a work history.'
      },
      {
        q: 'Can the instructor training be done online?',
        a: 'Partly, in some states. Theory topics such as learning styles, lesson planning, grading ethics and classroom management are commonly delivered online, but supervised teaching on a live clinic floor generally must be completed in person, and the programme must be approved by your specific board for the hours to count. A nationally marketed online instructor certificate that is not on your board\u2019s approved list has no licensing value.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'No interstate compact covers cosmetology instructors. The Cosmetology Licensure Compact (Alabama, Arizona, Colorado, Kansas, Kentucky, Maryland, Ohio, Tennessee, Virginia, Washington, West Virginia) and the Esthetics Licensure Compact (Alabama, Kansas, Virginia) apply to practitioner licences only and are in any case not yet operational, so `compact` is null and every state below is flagged compactMember: false. Transfers are handled by endorsement and are harder than for practitioner credentials, because two credentials have to be recognised at once: you generally need the destination state\u2019s practitioner licence first, then instructor licensure on top. Most boards apply an equal-or-greater hours test — Arizona 650, Arkansas 600, Delaware 500 (or 250 plus two years of work), District of Columbia 1,000, Georgia 750, Hawaii 600, Idaho 900 (or 500 plus experience) — and several add a minimum period of licensed practice, Arizona requiring five years of industry experience within the previous ten. Georgia excludes Alaska, Maryland, Massachusetts, Maine, Pennsylvania and Virginia from instructor reciprocity outright. In California, Colorado, Florida and Texas the question does not arise, because no instructor licence is issued at all.'
    },

    defaultAgency: 'State Board of Cosmetology',
    sourceUrl: 'https://nictesting.org/state-boards/',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Board of Cosmetology and Barbering', agencyUrl: 'https://aboc.alabama.gov', note: '1,500-hour instructor training course, or one year of shop experience plus 650 hours of instructor training. Unlike the practitioner licence, a high school diploma is required and the minimum age is 18. NIC instructor theory and practical.', compactMember: false },
      AK: { agency: 'Alaska Board of Barbers and Hairdressers, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofBarbersHairdressers.aspx', note: 'Requires a current Alaska hairdresser licence plus at least three years of licensed practice, or one year of practice followed by 600 hours of student-instructor training at a board-approved school. Teaching more than one discipline requires three years of experience in each.', compactMember: false },
      AZ: { agency: 'Arizona Board of Cosmetology and Barbering', agencyUrl: 'https://boc.az.gov', note: '650 instructor-training hours, at least one year licensed in the field taught, five years of industry experience in the previous ten, and the instructor licensing examination — among the most demanding experience requirements in the country.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health, Cosmetology Section', agencyUrl: 'https://healthy.arkansas.gov/programs-services/topics/cosmetology', note: '600 instructor-training hours plus a written and practical national or department-approved examination. Reciprocity requires an equal-or-greater state and a licence at the same or higher level.', compactMember: false },
      CT: { agency: 'Connecticut Department of Public Health, Practitioner Licensing and Investigations Section', agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/hairdresser/hairdressers-and-cosmeticians', fee: '≈$20 instructor examination fee', note: 'Unusually light: a valid Connecticut hairdresser and cosmetician licence plus the instructor examination, with no separate instructor-hours requirement. Renewal is biennial by the last day of the birth month at $100, with 10 CEUs.', compactMember: false },
      DE: { agency: 'Delaware Board of Cosmetology and Barbering, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/cosmetology/', note: '500 classroom hours in a cosmetology teacher-training course, or 250 hours plus two years of active licensed work experience — a clean example of the hours-versus-experience trade-off. Reciprocity applies the same equal-or-greater test.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Barber and Cosmetology, Department of Licensing and Consumer Protection', agencyUrl: 'https://dlcp.dc.gov/service/board-barber-and-cosmetology', note: '1,000 instructor hours — the highest single-figure requirement among jurisdictions that publish one. Reciprocity requires a letter of good standing from a substantially equivalent jurisdiction plus an active national certification.', compactMember: false },
      GA: { agency: 'Georgia State Board of Cosmetology and Barbers, Office of Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers', note: 'Subject-specific: 750 school hours for master cosmetology and hair designer instructors, 500 for esthetician instructors, 250 for nail technician instructors, plus a Georgia licence in the field, one year of licensure and the PSI instructor examination. No reciprocity with Alaska, Maryland, Massachusetts, Maine, Pennsylvania or Virginia.', compactMember: false },
      HI: { agency: 'Hawaii Board of Barbering and Cosmetology, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/barber/', note: 'Cosmetology licence plus 600 hours of teacher training meeting the board curriculum, at least one year licensed as a beauty operator or instructor, and the state board examination.', compactMember: false },
      ID: { agency: 'Idaho Board of Barber and Cosmetology Services, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/bar/', note: '900 instructor hours, or 500 hours plus qualifying work experience. Endorsement is available from states whose standards are not less than Idaho\u2019s; applicants below that bar face additional training and examinations.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Barber, Cosmetology, Esthetics, Hair Braiding and Nail Technology Board', agencyUrl: 'https://idfpr.illinois.gov/profs/cosmo.html', note: 'Illinois Administrative Code §1175.405: 500 hours of teacher training with two years of recent licensed experience, or a full 1,000-hour teacher-training programme without it.', compactMember: false },
      IN: { agency: 'Indiana State Board of Cosmetology and Barber Examiners, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/cosmetology-and-barber-examiners-home/', note: 'Instructor licence issued on top of an Indiana practitioner licence; confirm the current hours or experience pathway with the Professional Licensing Agency, which renews on a four-year cycle.', compactMember: false },
      IA: { agency: 'Iowa Board of Cosmetology Arts and Sciences, Department of Health and Human Services', agencyUrl: 'https://hhs.iowa.gov/licensing', note: 'Instructor licensure is issued by the cosmetology arts and sciences board, which also absorbed barbering in 2020. Requires an Iowa practitioner licence in the discipline taught plus board-approved instructor preparation.', compactMember: false },
      KS: { agency: 'Kansas Board of Cosmetology', agencyUrl: 'https://www.kansas.gov/kboc/', note: 'Kansas maintains its own instructor fee structure, renewal timeline and training requirement on top of the practitioner licence. Note that Kansas is a compact state for cosmetology and esthetics, but neither compact covers instructors.', compactMember: false },
      KY: { agency: 'Kentucky Board of Cosmetology', agencyUrl: 'https://kbc.ky.gov', note: 'Instructor licence layered on the Kentucky cosmetology licence. Kentucky also imposes a six-month post-examination salon apprenticeship on new cosmetologists, which must be complete before the practitioner credential is unrestricted.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Cosmetology', agencyUrl: 'https://www.lsbc.louisiana.gov', note: 'Instructor licensure is issued by the same board that regulates practitioners; a current Louisiana cosmetology licence and board-approved instructor training are required.', compactMember: false },
      ME: { agency: 'Maine Board of Barbering and Cosmetology, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/barbers-cosmetologists', note: 'Instructor credential issued on top of a Maine practitioner licence. Note that Georgia will not accept a Maine instructor licence by reciprocity.', compactMember: false },
      MD: { agency: 'Maryland State Board of Cosmetologists, Maryland Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/cos/', note: 'Instructor licensure sits with the Board of Cosmetologists. Georgia excludes Maryland from instructor reciprocity, so a Maryland teacher credential does not travel south easily.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Cosmetology and Barbering, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-cosmetology-and-barbering', note: 'Instructor licensure requires a Massachusetts practitioner licence plus the board-specified instructor pathway. Georgia excludes Massachusetts from instructor reciprocity.', compactMember: false },
      MI: { agency: 'Michigan Board of Cosmetology, Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/cosmetology', note: 'Instructor licensure is administered by LARA alongside the practitioner credential. Michigan has no apprenticeship pathway for practitioners, which limits the experience-substitution options for instructors.', compactMember: false },
      MN: { agency: 'Minnesota Board of Cosmetologist Examiners', agencyUrl: 'https://mn.gov/boards/cosmetology/', note: 'Instructor licensure is issued by the Board of Cosmetologist Examiners; barbering instructors fall under the separate Board of Barber Examiners.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Cosmetology', agencyUrl: 'https://www.msbc.ms.gov', note: 'Instructor licence issued on top of a Mississippi practitioner licence. The state eliminated the cosmetology practical examination in February 2026; confirm the current instructor examination format.', compactMember: false },
      MO: { agency: 'Missouri State Board of Cosmetology and Barber Examiners, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/cosbar.asp', note: 'Instructor licensure through the combined cosmetology and barber board; Missouri also allows apprenticeship pathways at practitioner level, which can feed the experience route.', compactMember: false },
      MT: { agency: 'Montana Board of Barbers and Cosmetologists, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/barbers-cosmetologists/', note: 'Instructor licensure issued by the combined board; requires a current Montana practitioner licence in the discipline taught.', compactMember: false },
      NE: { agency: 'Nebraska Board of Cosmetology, Electrology, Esthetics, Nail Technology and Body Art, Department of Health and Human Services', agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Cosmetology.aspx', note: 'Instructor licensure sits with the DHHS licensure unit alongside the 2,100-hour practitioner credential — one of the longest combined pathways in the country.', compactMember: false },
      NV: { agency: 'Nevada State Board of Cosmetology', agencyUrl: 'https://cosmetology.nv.gov', note: 'Instructor licence issued on top of a Nevada practitioner licence; a Nevada law examination applies to instructor candidates as it does to practitioners.', compactMember: false },
      NH: { agency: 'New Hampshire Board of Barbering, Cosmetology and Esthetics, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/board-barbering-cosmetology-and-esthetics', note: 'Instructor licensure through OPLC; requires a current New Hampshire practitioner licence in the discipline taught.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Cosmetology and Hairstyling, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/cos', note: 'New Jersey issues a teacher licence under the cosmetology and hairstyling statute, examined on a state-developed test rather than the NIC instructor exam.', compactMember: false },
      NM: { agency: 'New Mexico Board of Barbers and Cosmetologists, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/barbers-and-cosmetologists/', note: 'Instructor licensure issued by the combined board; a current New Mexico practitioner licence is a precondition.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services (Appearance Enhancement)', agencyUrl: 'https://dos.ny.gov/appearance-enhancement', note: 'New York issues teaching credentials under the Appearance Enhancement statute, and instructors in licensed schools may additionally need approval from the State Education Department. Confirm which agency governs your school before applying.', compactMember: false },
      NC: { agency: 'North Carolina Board of Cosmetic Art Examiners', agencyUrl: 'https://www.nccosmeticarts.com', note: 'Subject-specific hours: 800 for cosmetology teachers, 650 for esthetics, 320 for manicuring and 320 for natural hair care in an approved teacher programme — or one year of full-time cosmetic art shop work immediately before application. A current matching licence and the board examination are also required.', compactMember: false },
      ND: { agency: 'North Dakota State Board of Cosmetology', agencyUrl: 'https://www.nd.gov/cos/', note: 'Instructor licensure issued by the State Board of Cosmetology on top of the practitioner credential.', compactMember: false },
      OH: { agency: 'Ohio State Cosmetology and Barber Board', agencyUrl: 'https://cos.ohio.gov', note: 'Instructor licensure follows the pathway set by the combined board, which was modernised by HB 158 in October 2024 (unified school licensing, pre-exam work permits). Ohio is a Cosmetology Licensure Compact state, but the compact does not cover instructor licences.', compactMember: false },
      OK: { agency: 'Oklahoma State Board of Cosmetology and Barbering', agencyUrl: 'https://oklahoma.gov/cosmetology.html', note: 'Instructor licensure issued by the consolidated cosmetology and barbering board; requires an Oklahoma practitioner licence in the discipline taught.', compactMember: false },
      OR: { agency: 'Oregon Board of Cosmetology, Oregon Health Authority Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Cosmetology.aspx', note: 'Oregon issues instructor certification within its field-based system, so the credential is tied to the specific field (hair design, esthetics, nail technology or barbering) you intend to teach.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Cosmetology, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/cosmetology.html', note: 'Pennsylvania issues a cosmetology teacher licence through the State Board of Cosmetology. Georgia excludes Pennsylvania from instructor reciprocity.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Board of Hairdressing and Cosmetology', agencyUrl: 'https://dbr.ri.gov/divisions/occupational-professions/cosmetology', note: 'Rhode Island issues an instructor licence through DBR; an active Rhode Island practitioner licence and completion of an approved instructor programme (roughly 1,000 hours of cosmetology plus instructor training) are required.', compactMember: false },
      SC: { agency: 'South Carolina Board of Cosmetology, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/pol/cosmetology/', note: 'South Carolina issues instructor licences through LLR; 750 hours of instructor training on top of a current South Carolina practitioner licence.', compactMember: false },
      SD: { agency: 'South Dakota Board of Cosmetology, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/cosmetology/', note: 'South Dakota issues instructor licences; an active South Dakota practitioner licence plus an approved instructor training course is required.', compactMember: false },
      TN: { agency: 'Tennessee Board of Cosmetology and Barber Examiners, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/boards/cosmo.html', note: 'Tennessee issues instructor licences on either a 300-hour instructor route or a 1,500-hour apprenticeship route, in addition to a current Tennessee practitioner licence.', compactMember: false },
      UT: { agency: 'Utah Division of Occupational and Professional Licensing (DOPL)', agencyUrl: 'https://dopl.utah.gov/', note: 'Utah issues instructor licences through DOPL; an approved 800-hour instructor programme and a current Utah practitioner licence are required.', compactMember: false },
      VT: { agency: 'Vermont Secretary of State, Office of Professional Regulation', agencyUrl: 'https://www.sec.state.vt.us/professional-regulation', note: 'Vermont issues instructor licences through OPR; a current Vermont practitioner licence and approved instructor training are required.', compactMember: false },
      VA: { agency: 'Virginia Board for Barbers and Cosmetology, Department of Professional and Occupational Regulation', agencyUrl: 'https://www.dhp.virginia.gov/barbercos/', note: 'Virginia issues instructor licences through DPOR; 1,000 hours of cosmetology plus 400 hours of instructor training, and a current Virginia practitioner licence. Virginia has enacted the Cosmetology Licensure Compact, but the compact does not cover instructors.', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing, Cosmetology and Barbering Program', agencyUrl: 'https://www.dol.wa.gov/business/barbercosmo/', note: 'Washington issues instructor licences through the instructor training route; completion of an approved instructor programme and a current Washington practitioner licence are required.', compactMember: false },
      WV: { agency: 'West Virginia Board of Barbers and Cosmetologists', agencyUrl: 'https://www.wvbarbercosmetology.org/', note: 'West Virginia issues instructor licences; an active West Virginia practitioner licence and approved instructor training are required.', compactMember: false },
      WI: { agency: 'Wisconsin Cosmetology Examining Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/Cosmetologist/Default.aspx', note: 'Wisconsin issues instructor licences through DSPS; a 600-hour instructor programme and a current Wisconsin practitioner licence are required.', compactMember: false },
      WY: { agency: 'Wyoming Board of Cosmetology, Department of Administration and Information', agencyUrl: 'https://cosmetology.wyo.gov/', note: 'Wyoming issues instructor licences; an active Wyoming practitioner licence and approved instructor training are required.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 6. Massage Therapist
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'massage-therapist',
    name: 'Massage Therapist License',
    category: 'beauty-wellness',
    group: 'Beauty and Personal Care Licensing',
    type: 'License',
    blurb: 'State-issued licence to practice massage therapy — regulated in 46 of 51 US jurisdictions; four (Kansas, Minnesota, Wyoming) have no state oversight and two (California, Vermont) use a non-licence regime (voluntary CAMTC certification; mandatory registration).',

    overview:
      'Massage therapy is licensed at the state level in 46 of the 51 US jurisdictions, and the field is governed by a patchwork of state boards rather than one national authority. The dominant entry exam is the FSMTB Massage & Bodywork Licensing Examination (MBLEx), accepted in the large majority of licensing states; a handful — New York, Hawaii and Nebraska — require or allow a state-specific board exam instead. Entry always requires graduation from an approved massage programme whose hour minimum ranges from 500 hours in many states up to 1,000 in Nebraska and New York. Two jurisdictions are deliberately omitted below: Kansas, Minnesota and Wyoming have no state-level massage licence (local ordinances may still apply), while California relies on the voluntary Certified Massage Therapist (CAMTC) credential rather than a state licence, and Vermont mandates registration rather than licensure. A new Interstate Massage Compact (IMpact) has been enacted in five states but is not yet operational.',
    eligibility:
      'Applicants must be at least 18 (a few states set 21 for certain modalities), hold a high school diploma or GED, and graduate from a state-approved massage therapy programme meeting the local hour minimum. They must then pass the MBLEx or the applicable state exam, clear a criminal background check, and pay the prescribed fees. Many states also require specific coursework (anatomy, physiology, pathology, kinesiology, ethics, business practice) and a documented practicum, and a felony conviction involving sexual misconduct or certain violent offenses is a bar to licensure in numerous states.',
    exam: {
      admin: 'Federation of State Massage Therapy Boards (FSMTB) — Massage & Bodywork Licensing Examination (MBLEx); New York, Hawaii and Nebraska require or offer a state board examination instead',
      questions: '100 scored multiple-choice items (125 administered, 25 unscored)',
      time: '110 minutes',
      pass: 'Scaled score of 630 on a 900-point scale',
      fee: '$265 (paid directly to FSMTB; state application fees are separate)',
      format: 'Computer-based at a Pearson VUE centre, single session; state exams (NY, HI, NE) follow their own formats.'
    },
    education: {
      hours: '500–1,000 classroom hours depending on state (most cluster at 500–650; Nebraska and New York require 1,000 — and New York mandates its own exam)',
      note: 'Entry-hour requirements vary widely. Alabama, Alaska, Arizona, Arkansas, Delaware, DC, Florida, Georgia, Idaho, Louisiana, Missouri, Montana, Oklahoma, South Dakota and Texas sit at 500–625; a middle band of 600–650 covers Illinois, Indiana, Iowa, Kentucky, Massachusetts, New Mexico, North Carolina, New Jersey, Pennsylvania, Tennessee, Utah, Wisconsin and others; and the high band of 750–800 appears in Connecticut, Maryland, New Hampshire, North Dakota and Rhode Island. Nebraska and New York stand alone at 1,000 hours, and New York further requires passage of the state NYSE exam rather than the MBLEx.'
    },
    prerequisites:
      'Graduation from an approved massage therapy programme at or above the state minimum hour requirement; minimum age (usually 18, sometimes 21); high school diploma or equivalent; and a clean criminal background. Some states additionally require CPR certification or specific subject-hour breakdowns (e.g., a minimum number of hours in anatomy and physiology).',
    costBreakdown: {
      items: [
        { label: 'MBLEx examination fee (FSMTB)', fee: '$265' },
        { label: 'State application / licensing fee (by exam)', fee: '$100–$250 depending on jurisdiction' },
        { label: 'Criminal background-check fee', fee: '$30–$60' },
        { label: 'Approved massage programme tuition (separate, not a board fee)', fee: '$6,000–$15,000' }
      ],
      total: '$400–$700 in board fees on top of school tuition, varying by state.'
    },
    timeline: [
      'Complete an approved massage therapy programme (a few months to roughly two years depending on hours and pacing)',
      'Register for and pass the MBLEx (or the applicable state exam)',
      'Submit a licence-by-exam application with school transcripts, exam score and background check',
      'Receive the licence (typically 2–8 weeks after a complete application)'
    ],
    route: [
      'Graduate from a state-approved school meeting the local hour minimum',
      'Pass the MBLEx (or, in NY/HI/NE, the applicable state board exam)',
      'Apply for licensure by examination through the state board',
      'Maintain with continuing education and renewal (usually biennial)'
    ],
    providersNote:
      'Approved programmes are accredited by the Commission on Massage Therapy Accreditation (COMTA) or equivalent state-approved bodies; the FSMTB publishes the MBLEx candidate handbook. Confirm a school is accepted by your target state board before enrolling, because hour and curriculum requirements differ materially by state.',
    faqs: [
      { q: 'Do all 50 states license massage therapists?', a: 'No. Kansas, Minnesota and Wyoming have no state-level massage licence (local rules may still apply), California uses voluntary CAMTC certification rather than a state licence, and Vermont requires registration rather than licensure. The remaining ~46 jurisdictions license massage therapists.' },
      { q: 'Is the MBLEx accepted everywhere?', a: 'It is accepted in the large majority of licensing states, but New York, Hawaii and Nebraska require or offer a state-specific exam. Always confirm with your state board which exam it accepts.' },
      { q: 'How many hours of school do I need?', a: 'Between 500 and 1,000 hours depending on the state. Most states set 500–650, but Nebraska and New York require a full 1,000 hours.' },
      { q: 'Does the Interstate Massage Compact let me work in other states right now?', a: 'No. IMpact has been enacted in five states (Nevada, Ohio, Arkansas, Virginia, Montana) but does not take effect until at least seven states join, so no portable privilege is yet operational. Until then, therapists relocate through traditional endorsement.' },
      { q: 'Can I get licensed by endorsement if I move to another state?', a: 'Usually yes. Most states grant licensure by endorsement when your education and MBLEx (or equivalent exam) meet their standards, often with a short state law or jurisprudence exam added.' },
      { q: 'How much does it cost?', a: 'Board fees — exam, application, licence and background check — typically total $400–$700, on top of programme tuition that runs several thousand dollars. California’s CAMTC certification and Vermont’s registration have their own separate fee schedules.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No general interstate compact yet operates for massage therapy. The Interstate Massage Compact (IMpact) has been enacted in five states — Nevada (2023), Ohio (2024), Arkansas (2025), Virginia (2025) and Montana (2025) — but it does not take effect until at least seven states join, so no cross-state privilege is portable yet. Those five IMpact-legislation states are flagged compactMember: true below purely as an enacted-legislation marker; no operational reciprocity exists. Until IMpact activates, therapists relocate through traditional endorsement: most states accept the MBLEx (or, in New York, Hawaii and Nebraska, a state exam) taken within a set window and grant a licence by endorsement once education and a background check are verified, though several states also require a local jurisprudence exam.'
    },
    defaultAgency: 'Varies by state — typically a state Board (or Department) of Massage Therapy, or a combined health/professions board',
    sourceUrl: 'https://www.fsmtb.org/mblex/',
    verified: true,
    confidence: 'high',
    states: {
      AL: { agency: 'Alabama Board of Massage Therapy', agencyUrl: 'https://www.abomt.state.al.us/', note: 'Requires 650 hours of approved massage education and passage of the MBLEx (or equivalent) for licensure by exam.', compactMember: false },
      AK: { agency: 'Alaska Division of Corporations, Business and Professional Licensing (Massage Therapy)', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      AZ: { agency: 'Arizona State Board of Massage Therapy', agencyUrl: 'https://massagetherapy.az.gov/', fee: '$150 (initial licence by exam)', note: 'Requires 700 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health, Massage Therapy Board', agencyUrl: 'https://www.healthy.arkansas.gov/', note: 'Requires 500 hours of approved education and the MBLEx. Arkansas enacted IMpact but no privilege is portable yet.', compactMember: true },
      CO: { agency: 'Colorado Office of Massage Therapy Licensure, Division of Professions and Occupations', agencyUrl: 'https://dpo.colorado.gov/MassageTherapy', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      CT: { agency: 'Connecticut Department of Public Health, Massage Therapy Licensure', agencyUrl: 'https://portal.ct.gov/DPH', note: 'Requires 750 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      DE: { agency: 'Delaware Board of Massage and Bodywork, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/massage/', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      DC: { agency: 'DC Department of Health, Board of Massage Therapy', agencyUrl: 'https://dchealth.dc.gov/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      FL: { agency: 'Florida Board of Massage Therapy, Department of Health', agencyUrl: 'https://floridasmassage.gov/', fee: '$205 (application + initial licence by exam)', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      GA: { agency: 'Georgia Board of Massage Therapy, Secretary of State', agencyUrl: 'https://sos.ga.gov/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      HI: { agency: 'Hawaii Department of Commerce and Consumer Affairs, Professional and Vocational Licensing (Massage Therapy)', agencyUrl: 'https://cca.hawaii.gov/pvl/', note: 'Requires 570 hours and passage of the Hawaii state massage examination (the MBLEx is not accepted); licensure is administered through PVL.', compactMember: false },
      ID: { agency: 'Idaho Board of Massage Therapy, Bureau of Occupational Licenses', agencyUrl: 'https://boi.idaho.gov/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Massage Therapy', agencyUrl: 'https://idfpr.illinois.gov/', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      IN: { agency: 'Indiana Professional Licensing Agency, Massage Therapy Board', agencyUrl: 'https://www.in.gov/pla/', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      IA: { agency: 'Iowa Board of Massage Therapy, Department of Public Health', agencyUrl: 'https://idph.iowa.gov/Licensure/Massage-Therapy', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      KY: { agency: 'Kentucky Board of Licensure for Massage Therapy', agencyUrl: 'https://massage.ky.gov/', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Massage Therapy', agencyUrl: 'https://www.lsbmassagetherapy.com/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      ME: { agency: 'Maine Board of Complementary Health Care Providers', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MD: { agency: 'Maryland Board of Massage Therapy Examiners, Department of Health', agencyUrl: 'https://health.maryland.gov/', note: 'Requires 750 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Massage Therapy', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-massage-therapy', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Massage Therapy', agencyUrl: 'https://www.msbmt.com/', note: 'Requires 700 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MI: { agency: 'Michigan Department of Licensing and Regulatory Affairs, Massage Therapy Board', agencyUrl: 'https://www.michigan.gov/lara', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MO: { agency: 'Missouri State Board of Massage Therapy', agencyUrl: 'https://pr.mo.gov/massage.asp', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      MT: { agency: 'Montana Board of Massage Therapy, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/massage', note: 'Requires 500 hours of approved education and the MBLEx. Montana enacted IMpact in 2025 but no privilege is portable yet.', compactMember: true },
      NE: { agency: 'Nebraska Massage Therapy Board, Department of Health and Human Services', agencyUrl: 'https://dhhs.ne.gov/', note: 'Requires 1,000 hours of approved education and passage of the Nebraska state massage examination (MBLEx not accepted).', compactMember: false },
      NV: { agency: 'Nevada State Board of Massage Therapists', agencyUrl: 'https://massagetherapy.nv.gov/', note: 'Requires 625 hours of approved education and the MBLEx. Nevada was the first IMpact state (2023) but no privilege is portable yet.', compactMember: true },
      NH: { agency: 'New Hampshire Office of Professional Licensure and Certification, Massage Therapy', agencyUrl: 'https://www.oplc.nh.gov/', note: 'Requires 750 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Massage and Bodywork Therapy, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/mass', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      NM: { agency: 'New Mexico Massage Therapy Board, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      NY: { agency: 'New York State Education Department, Office of the Professions (Massage Therapy)', agencyUrl: 'https://www.op.nysed.gov/professions/massage-therapy', note: 'Requires 1,000 hours of approved education and passage of the New York State (NYSE) massage examination; the MBLEx is not accepted in New York.', compactMember: false },
      NC: { agency: 'North Carolina Board of Massage and Bodywork Therapy', agencyUrl: 'https://www.ncbon.com/', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      ND: { agency: 'North Dakota Board of Massage, Department of Health', agencyUrl: 'https://www.ndhealth.gov/', note: 'Requires 750 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      OH: { agency: 'State Medical Board of Ohio (Massage Therapy)', agencyUrl: 'https://med.ohio.gov/', note: 'Requires 600 hours of approved education and the MBLEx. Ohio enacted IMpact in 2024 but no privilege is portable yet.', compactMember: true },
      OK: { agency: 'Oklahoma State Board of Medical Licensure and Supervision (Massage Therapy)', agencyUrl: 'https://www.ok.gov/osbmls/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      OR: { agency: 'Oregon Board of Massage Therapists, Health Licensing Office', agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Massage.aspx', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Massage Therapy, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/massage-therapy.html', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Health, Board of Massage Therapy', agencyUrl: 'https://health.ri.gov/licenses/', note: 'Requires 800 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      SC: { agency: 'South Carolina Department of Labor, Licensing and Regulation, Massage/Bodywork Panel', agencyUrl: 'https://llr.sc.gov/pol/', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      SD: { agency: 'South Dakota Board of Massage Therapy, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      TN: { agency: 'Tennessee Board of Massage Licensure, Department of Health', agencyUrl: 'https://www.tn.gov/health/', note: 'Requires 650 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing and Regulation (Massage Therapy)', agencyUrl: 'https://www.tdlr.texas.gov/massther/massther.htm', fee: '$150 (initial licence by exam)', note: 'Requires 500 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      UT: { agency: 'Utah Division of Occupational and Professional Licensing (Massage Therapy)', agencyUrl: 'https://dopl.utah.gov/', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      VA: { agency: 'Virginia Board of Massage Therapy, Department of Health Professions', agencyUrl: 'https://www.dhp.virginia.gov/massage/', note: 'Requires 500 hours of approved education and the MBLEx. Virginia enacted IMpact in 2025 but no privilege is portable yet.', compactMember: true },
      WA: { agency: 'Washington State Massage Board, Department of Health', agencyUrl: 'https://doh.wa.gov/licenses-and-certifications/licenses/health-professions/massage-therapist', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      WV: { agency: 'West Virginia Massage Therapy Licensure Board', agencyUrl: 'https://massage.wv.gov/', note: 'Requires 625 hours of approved education and the MBLEx for licensure by exam.', compactMember: false },
      WI: { agency: 'Wisconsin Massage Therapy Board, Department of Safety and Professional Services', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/MassageTherapist/Default.aspx', note: 'Requires 600 hours of approved education and the MBLEx for licensure by exam.', compactMember: false }
    }
  }
]