// batch3.mjs — Trade license / exam dossiers (research-grade, factual)
//
// SCOPE: 7 trade templates. Each dossier lists ONLY jurisdictions that issue the
// credential at the STATE level. States that license the trade only at city/county
// level (or not at all) are intentionally OMITTED from `states` and explained in
// `providersNote` / per-state notes. No trade license uses an interstate compact
// (see compacts.mjs — none apply to construction trades), so `reciprocity.compact`
// is null for every dossier; reciprocity is handled via NASCLA and state-to-state
// agreements described in prose.
//
// CONFIDENCE: template-level `confidence:'medium'`. State agency names and official
// board URLs are sourced from state .gov portals; per-state `fee` values are
// approximate (prefixed "≈") because they vary by classification/limit and change
// frequently — verify exact figures with the listed agency before publishing.
//
// Dependency-free ESM: only `export default [...]` is exported; no imports.

export default [
  /* =====================================================================
   * 1) GENERAL CONTRACTOR LICENSE
   * States that require a STATE-level general (or prime/residential) contractor
   * license. Excluded (local-only / none): CO, IL, IN, IA, KS, KY, ME, MA, MO,
   * NE, NH, NY, OH, OK, PA, SD, TX, VT, WY. (31 jurisdictions)
   * ===================================================================== */
  {
    key: 'general-contractor',
    name: 'General Contractor License',
    category: 'trades',
    group: 'Contractor Licensing',
    type: 'License',
    blurb: 'A state-issued license permitting a business or individual to contract for general building construction, alteration, and renovation above a dollar threshold set by each state.',
    overview: 'A General Contractor (GC) license is the foundational credential for professionals who oversee and contract for building construction, remodeling, and heavy repair work. Roughly 30 U.S. states require contractors to hold a state-issued GC or prime-contractor license before they may lawfully advertise, bid on, or pull permits for projects above a state-defined dollar threshold (commonly $500–$50,000). The remaining states delegate contractor regulation to cities and counties, so a "general contractor license" in those states is a municipal credential rather than a state one. State GC licensing almost always pairs a trade/specific examination with a Business & Law (or Business & Finance) examination, proof of experience, insurance, and a surety bond. Many states accept the NASCLA Accredited Examination for Commercial General Building Contractors as the trade portion, letting one exam serve multiple jurisdictions. Because requirements differ sharply by state — classification limits, financial-stability rules, bond amounts, and renewal cycles all vary — candidates must confirm the exact pathway with the relevant state board.',
    eligibility: 'Eligibility generally requires being at least 18, possessing a Social Security Number or ITIN, and demonstrating 2–4 years of qualifying construction experience (sometimes substituted by education). Applicants must show financial responsibility (credit report or bond), carry general liability and workers’ compensation insurance, and designate a qualifying individual who passed the required exams. Some states separate "residential" and "commercial" classifications with different experience and bond thresholds.',
    exam: {
      admin: 'State licensing board, typically administered by PSI or Pearson VUE; trade portion often satisfied by the NASCLA Accredited Examination.',
      questions: 'Varies by state; NASCLA trade exam = 115 scored (+10 pretest). Business & Law exams commonly 80–120 questions.',
      time: 'NASCLA: 330 minutes (5.5 hrs, open-book). State Business & Law exams 2–4 hrs.',
      pass: 'Typically 70% (NASCLA 81/115).',
      fee: '≈$50–$400 per exam section, paid to the testing vendor and/or board.',
      format: 'Computer-based, mostly open-book for trade portions; closed-book for some Business & Law sections.'
    },
    education: {
      hours: 0,
      note: 'No formal classroom hour requirement at the state level, though college construction credits may substitute for up to 3 years of experience in several states (e.g., California, Florida).'
    },
    prerequisites: 'Qualifying experience (often 2–4 yrs), financial-stability documentation, liability & workers’ comp insurance, assigned qualifying individual, and (in some states) a surety bond before application.',
    costBreakdown: {
      items: [
        { item: 'Application / license fee', cost: '≈$100–$700' },
        { item: 'Trade exam (e.g., NASCLA)', cost: '≈$165 ($35 app + $130 PSI)' },
        { item: 'Business & Law exam', cost: '≈$50–$150' },
        { item: 'Fingerprint / background check', cost: '≈$40–$100' },
        { item: 'Surety bond (annual premium)', cost: '≈$100–$1,500' },
        { item: 'Insurance (GL + WC)', cost: '≈$500–$3,600/yr' }
      ],
      total: '≈$400–$3,000 first year depending on state, bond, and classification.'
    },
    timeline: [
      { stage: 'Confirm state classification and dollar threshold', duration: '1–2 weeks of board research' },
      { stage: 'Accumulate and document qualifying experience', duration: '2–4 years, set by state statute' },
      { stage: 'Trade exam (NASCLA or state-specific)', duration: '4–8 weeks including application approval and study' },
      { stage: 'State Business & Law exam', duration: '2–6 weeks' },
      { stage: 'Assemble bond, insurance and financial statements', duration: '2–4 weeks' },
      { stage: 'Board review and license issuance', duration: '4–12 weeks, depending on the board meeting cycle' },
      { stage: 'Renewal', duration: 'Every 1–2 years, with 6–14 hours of CE in most states' }
    ],
    route: [
      { title: 'Determine whether your state licenses general contractors', description: 'Roughly 30 states issue a state-level GC or prime-contractor license; the rest (CO, IL, IN, IA, KS, KY, ME, MA, MO, NE, NH, NY, OH, OK, PA, SD, TX, VT, WY) regulate contractors only through cities and counties. Confirm the dollar threshold that triggers licensure — it ranges from about $500 to $50,000 — and the classification (residential, commercial, limited or unlimited) that matches the work you intend to bid.' },
      { title: 'Document your qualifying experience early', description: 'Most boards require 2–4 years of verifiable construction experience attested by a supervisor, former employer or licensed contractor, usually on a notarized affidavit listing projects by type, dollar value and date. Several states, including California and Florida, let accredited construction-management or engineering coursework substitute for up to three years. Reconstructing an undocumented work history is the single most common cause of application delay.' },
      { title: 'Pass the trade exam — use NASCLA where it is accepted', description: 'Apply through the NASCLA National Examination Database (ned.nascla.org) for a $65 application fee; applications are processed in about seven business days and stay valid for one year, allowing three exam attempts. PSI then delivers the open-book Commercial General Building exam: 115 scored questions in 330 minutes, with 81 correct answers required to pass. One passing score waives the trade exam in 15+ participating states.' },
      { title: 'Pass your state Business & Law exam', description: 'NASCLA satisfies only the trade portion — every participating state still requires its own Business & Law or Business & Finance exam covering lien law, contracts, labor rules, OSHA and state statutes. These are typically closed-book, 80–120 questions, with a 70%–75% pass mark, and scores do not transfer between states.' },
      { title: 'Secure the bond, insurance and financial documentation', description: 'Obtain the surety bond your classification requires (commonly $10,000–$50,000), general liability coverage, and workers’ compensation if you have employees. Many boards also run a credit check or require a reviewed financial statement — Florida, for example, requires a $20,000 bond when the qualifying individual’s FICO score falls below 660.' },
      { title: 'File the application, then track renewal and CE', description: 'Submit the application with exam transcripts, experience affidavits, bond, insurance certificates and fingerprints. NASCLA transcripts are purchased separately for each state agency at $45 apiece and remain viewable to that agency for two years. Once licensed, calendar the renewal date — most states renew every one or two years and require 6–14 hours of continuing education per cycle.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. The following states do NOT issue a state general-contractor license and are omitted: CO, IL, IN, IA, KS, KY, ME, MA, MO, NE, NH, NY, OH, OK, PA, SD, TX, VT, WY — contractor regulation there is municipal/county or absent. The NASCLA Accredited Examination (admin by PSI; $35 application + $130 exam; 115 Q, 5.5 hrs, 70% pass) is accepted as the trade exam by AL, AZ, AR, FL, GA, LA, MS, NV, NM, NC, OR, SC, TN, UT, VA, WV, VI and admin by several of these. Fees and classifications vary widely — always confirm with the state board.',
    faqs: [
      { q: 'Is a general contractor license required in every state?', a: 'No. About 30 states require a state-level GC license; the rest regulate contractors at the city/county level or not at all. Check your state before assuming a state license exists.' },
      { q: 'What is the NASCLA exam and why does it matter?', a: 'The NASCLA Accredited Examination for Commercial General Building Contractors is a single open-book trade exam accepted by 15+ states in lieu of their own trade exam, dramatically simplifying multi-state licensing. Each state still requires its own Business & Law exam and application.' },
      { q: 'How much does a GC license cost?', a: 'First-year cost typically ranges $400–$3,000 including application, exams, bond premium, and insurance, varying by state and license classification.' },
      { q: 'Do I need a bond and insurance?', a: 'Almost every state requires a surety bond and general liability insurance; workers’ compensation is required if you have employees. Financial-stability (credit) thresholds also apply in many states.' },
      { q: 'How long is a GC license valid?', a: 'Most states renew every one or two years and require continuing education (commonly 6–14 hours per cycle).' },
      { q: 'Can I use an out-of-state license via reciprocity?', a: 'Some states grant reciprocity or exam waivers to contractors licensed in neighboring states (e.g., FL with LA/NC/MS; AL with MS/TN/AR/LA). NASCLA acceptance is the broadest mobility path.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No interstate compact covers general contractors. Mobility comes through the NASCLA Accredited Examination (accepted by 15+ states) and individual state reciprocity/exam-waiver agreements (e.g., Florida↔Louisiana/North Carolina/Mississippi; Alabama↔Mississippi/Tennessee/Arkansas/Louisiana).'
    },
    defaultAgency: 'State Contractors Licensing Board',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Licensing Board for General Contractors', agencyUrl: 'https://www.lbgc.alabama.gov', fee: '≈$300 app + $200 license (commercial)', note: 'Trade + Business & Law exams; reciprocity with MS, TN, AR, LA.', compactMember: false },
      AK: { agency: 'Alaska Department of Commerce — Division of Corporations, Business & Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$250 license + $100 app (residential endorsement optional)', note: 'Bond required ($20k–$25k).', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$200 app + $580 license (commercial)', note: 'B-1/B-2 commercial; NASCLA accepted as trade exam.', compactMember: false },
      AR: { agency: 'Arkansas Contractors Licensing Board', agencyUrl: 'https://www.aclb.arkansas.gov', fee: '≈$50–$500 by class', note: 'Commercial >$50k; residential >$2k. NASCLA administered.', compactMember: false },
      CA: { agency: 'California Contractors State License Board (CSLB)', agencyUrl: 'https://www.cslb.ca.gov', fee: '≈$450 app + $200 initial license', note: 'Class B General Building; Law & Business + trade exams; bond $25k.', compactMember: false },
      CT: { agency: 'Connecticut Department of Consumer Protection', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$150–$375', note: 'Home Improvement / New Home Construction classifications.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Construction Trades Licensing', agencyUrl: 'https://dcra.dc.gov', fee: '≈$200–$500', note: 'Class A/B/C contractor tiers by project value.', compactMember: false },
      FL: { agency: 'Florida Department of Business & Professional Regulation — Construction Industry Licensing Board', agencyUrl: 'https://www.myfloridalicense.com', fee: '≈$145–$249 app + exams ≈$295', note: 'Certified (statewide) vs Registered (local). 4 yrs experience; bond $20k if credit <660.', compactMember: false },
      GA: { agency: 'Georgia Secretary of State — State Licensing Board for Residential & General Contractors', agencyUrl: 'https://sos.ga.gov', fee: '≈$200–$400', note: 'Residential & general classifications; NASCLA accepted.', compactMember: false },
      HI: { agency: 'Hawaii Department of Commerce & Consumer Affairs — Professional & Vocational Licensing', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$100–$350', note: 'Class A/B/C; Business & Law required.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$100–$300', note: 'Public works contractor registration + specialty.', compactMember: false },
      LA: { agency: 'Louisiana State Licensing Board for Contractors', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$100–$400', note: 'Commercial/residential; NASCLA accepted. Plumbing/mechanical separate.', compactMember: false },
      MD: { agency: 'Maryland Department of Labor — Division of Occupational & Professional Licensing', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$50–$300', note: 'Home Improvement & contractor classifications; Business & Law.', compactMember: false },
      MI: { agency: 'Michigan Department of Licensing & Regulatory Affairs — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$100–$500', note: 'Residential builder license includes business/law.', compactMember: false },
      MN: { agency: 'Minnesota Department of Labor & Industry', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$100–$400', note: 'Residential & commercial contractor licenses.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Contractors', agencyUrl: 'https://www.msbc.state.ms.us', fee: '≈$100–$400', note: 'NASCLA accepted; reciprocal with several southern states.', compactMember: false },
      MT: { agency: 'Montana Department of Labor & Industry', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$100–$300', note: 'General contractor registration by tier.', compactMember: false },
      NV: { agency: 'Nevada State Contractors Board', agencyUrl: 'https://www.nvcontractorsboard.com', fee: '≈$300–$1,000 by limit', note: 'Classification limits; NASCLA accepted.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Community Affairs — Home Improvement & Construction', agencyUrl: 'https://www.nj.gov/dca', fee: '≈$100–$350', note: 'HIC registration + commercial contractor license.', compactMember: false },
      NM: { agency: 'New Mexico Regulation & Licensing Department — Construction Industries Division', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$100–$500', note: 'GB/GH classes; NASCLA accepted (GB98).', compactMember: false },
      NC: { agency: 'North Carolina Licensing Board for General Contractors', agencyUrl: 'https://www.ncblgc.org', fee: '≈$100–$300', note: 'Limited/Intermediate/Unlimited; NASCLA accepted.', compactMember: false },
      ND: { agency: 'North Dakota Secretary of State — Contractor Licensing', agencyUrl: 'https://www.nd.gov', fee: '≈$50–$200', note: 'Registration by threshold.', compactMember: false },
      OR: { agency: 'Oregon Construction Contractors Board', agencyUrl: 'https://www.oregon.gov/ccb', fee: '≈$100–$300', note: 'NASCLA accepted in lieu of 16-hr pre-licensure training.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation — Contractors’ Registration', agencyUrl: 'https://dbr.ri.gov', fee: '≈$50–$200', note: 'Registration-based.', compactMember: false },
      SC: { agency: 'South Carolina Residential Builders Commission / Contractors’ Licensing Board (LLR)', agencyUrl: 'https://www.llr.sc.gov', fee: '≈$100–$400', note: 'Residential & commercial; NASCLA accepted.', compactMember: false },
      TN: { agency: 'Tennessee Board for Licensing Contractors', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$100–$400', note: 'Limited/Unlimited by dollar limit; NASCLA accepted.', compactMember: false },
      UT: { agency: 'Utah Division of Occupational & Professional Licensing — Construction Trades', agencyUrl: 'https://dopl.utah.gov', fee: '≈$100–$400', note: 'NASCLA accepted to satisfy experience.', compactMember: false },
      VA: { agency: 'Virginia Department of Professional & Occupational Regulation — Board for Contractors', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$100–$400', note: 'Class A/B/C; NASCLA accepted (commercial building).', compactMember: false },
      WA: { agency: 'Washington Department of Labor & Industries — Contractor Registration', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$120–$240', note: 'Registration + surety bond; no trade exam for GC.', compactMember: false },
      WV: { agency: 'West Virginia Contractors Licensing Board (Division of Labor)', agencyUrl: 'https://www.wvcontractorlicensing.org', fee: '≈$100–$400', note: 'NASCLA accepted (scores after 9/1/2013).', compactMember: false },
      WI: { agency: 'Wisconsin Department of Safety & Professional Services', agencyUrl: 'https://dsps.wi.gov', fee: '≈$100–$300', note: 'Dwelling/contractor license.', compactMember: false }
    }
  },

  /* =====================================================================
   * 2) CONTRACTOR BUSINESS & LAW EXAM
   * States that require a dedicated Business & Law (Business & Finance)
   * examination as part of contractor licensing. (24 jurisdictions)
   * ===================================================================== */
  {
    key: 'contractor-business-law',
    name: 'Contractor Business & Law Exam',
    category: 'trades',
    group: 'Contractor Licensing',
    type: 'Exam',
    blurb: 'The required business-management and statutes examination that contractor candidates must pass alongside their trade exam in states that license contractors at the state level.',
    overview: 'The Contractor Business & Law (often "Business & Finance") examination is a mandatory component of contractor licensing in many states. It tests knowledge of contracting law, lien rights, labor regulations, estimating, business organization, OSHA, and state-specific statutes — competencies distinct from the technical trade exam. States that administer this exam generally require it for every contractor classification, whether the trade portion is state-specific or satisfied by the NASCLA Accredited Examination. Because each state writes its own Business & Law content, a candidate working across multiple states must typically pass a separate Business & Law exam per state even when the trade exam is shared via NASCLA. The exam is usually closed-book, computer-delivered, and administered by PSI or Pearson VUE, with a 70%–75% passing standard. Preparing with the state’s candidate bulletin and approved reference books is essential.',
    eligibility: 'Eligibility follows the underlying contractor license: the candidate must meet the state’s experience, insurance, and bond prerequisites for the desired classification before or concurrent with sitting the Business & Law exam. Some states allow taking the exam before submitting the full license application.',
    exam: {
      admin: 'State contractor board, delivered by PSI or Pearson VUE.',
      questions: 'Commonly 80–120 multiple-choice questions.',
      time: 'Typically 2–4 hours.',
      pass: 'Usually 70%–75%.',
      fee: '≈$50–$150 per attempt, paid to the testing vendor.',
      format: 'Computer-based, closed-book; some states provide statutes/reference tabs.'
    },
    education: {
      hours: 0,
      note: 'No standalone education hour requirement; content is learned through exam-prep courses and reference materials.'
    },
    prerequisites: 'Qualifying experience for the trade license, financial-stability documentation, and (often) submission of the license application packet referencing the exam score.',
    costBreakdown: {
      items: [
        { item: 'Business & Law exam fee', cost: '≈$50–$150' },
        { item: 'Exam-prep course / books', cost: '≈$100–$500' },
        { item: 'Trade exam (if also required)', cost: '≈$100–$400' }
      ],
      total: '≈$150–$1,000 depending on prep materials and whether a trade exam is taken separately.'
    },
    timeline: [
      { stage: 'Identify your state’s classification and exam requirement', duration: '1 week' },
      { stage: 'Study the candidate bulletin and approved references', duration: '3–8 weeks of part-time study' },
      { stage: 'Register with PSI or Pearson VUE and secure a seat', duration: '1–3 weeks' },
      { stage: 'Sit the Business & Law exam', duration: '2–4 hours; results usually issued same day' },
      { stage: 'Attach the score to the contractor license application', duration: '2–8 weeks of board processing' },
      { stage: 'Renewal and continuing education', duration: 'Every 1–2 years' }
    ],
    route: [
      { title: 'Confirm your state requires a separate Business & Law exam', description: 'About two dozen jurisdictions — including AL, AZ, AR, CT, FL, GA, HI, LA, MD, MS, NV, NJ, NM, NC, OH, OK, OR, SC, TN, UT, VA, WV and VI — require a dedicated Business & Law or Business & Finance exam in addition to the trade exam. Michigan is an exception: it embeds the same content inside the residential builder exam rather than testing it separately.' },
      { title: 'Download the official candidate information bulletin', description: 'The bulletin published by the state board, or by PSI/Pearson VUE on its behalf, lists the exact content outline, question count, time limit, passing score and the reference books questions are drawn from. Buy the specific editions named — exams are written against a fixed edition, and an older printing will cost you points on statute and code questions.' },
      { title: 'Study the four recurring content blocks', description: 'Nearly every state weights the exam toward contracting and lien law; business organization and finance (estimating, cash flow, payroll and tax); labor and employment rules including OSHA; and state-specific licensing statutes. The state-law block is where out-of-state candidates most often fail, because it cannot be learned from generic national contractor study guides.' },
      { title: 'Schedule and sit the exam', description: 'Register through the state’s testing vendor, typically PSI or Pearson VUE, and expect 80–120 multiple-choice questions in 2–4 hours. Most states run this section closed-book, though some provide on-screen statute tabs. The pass mark is usually 70%–75%, and results are generally issued at the test center immediately after you finish.' },
      { title: 'File the license application with your score attached', description: 'A Business & Law score is not a credential on its own — it attaches to a specific license application. Submit it with your trade exam result or NASCLA transcript, experience affidavits, bond and insurance. Watch the score-validity window: many boards accept a Business & Law result for only one to four years before requiring a retake.' },
      { title: 'Repeat per state, and keep the license current', description: 'Business & Law exams are written state by state and are not portable, so a multi-state contractor must sit one in each jurisdiction even when a single NASCLA trade score covers them all. The only common exception is full-license reciprocity, where a handful of neighboring states waive both exams for an established out-of-state licensee. Renewal cycles run one to two years, usually with continuing education.' }
    ],
    providersNote: 'INCLUDED are states whose contractor licensing requires a dedicated Business & Law / Business & Finance exam: AL, AZ, AR, CT, FL, GA, HI, LA, MD, MS, NV, NJ, NM, NC, OR, SC, TN, UT, VI, VA, WV (NASCLA Commercial GC participant/accepting states) plus OH (OCILB requires Business & Law for all commercial electrical, HVAC, plumbing, hydronics, refrigeration), OK (Mechanical Business & Law for plumbing/mechanical/electrical contractors), and MI (residential builder exam embeds business/law). States omitted license contractors only locally (CO, IL, IN, IA, KS, KY, ME, MA, MO, NE, NH, NY, PA, SD, TX, VT, WY) or have no state exam requirement.',
    faqs: [
      { q: 'What does the Business & Law exam cover?', a: 'Contracting law, lien law, labor/employment rules, business organization, project management, estimating, OSHA, and state-specific statutes.' },
      { q: 'Is the Business & Law exam open-book?', a: 'Usually no — it is closed-book and computer-based, though some states let you reference provided statute tabs.' },
      { q: 'If I pass NASCLA, do I still need Business & Law?', a: 'Yes. NASCLA only satisfies the trade portion. Every participating state still requires its own Business & Law exam and application.' },
      { q: 'How much does it cost?', a: 'Typically $50–$150 per attempt plus optional prep materials ($100–$500).' },
      { q: 'Does the Business & Law exam transfer between states?', a: 'No. Each state writes its own; you must pass it separately per state even when sharing the NASCLA trade exam.' },
      { q: 'What passing score is needed?', a: 'Most states require 70%–75%.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact applies. Business & Law exams are state-specific and non-transferable; only the NASCLA trade exam provides multi-state portability. Some states reciprocate the full license (including waiving exams) with neighboring states.'
    },
    defaultAgency: 'State Contractors Licensing Board',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Licensing Board for General Contractors', agencyUrl: 'https://www.lbgc.alabama.gov', fee: '≈$50–$100', note: 'Business & Law required for all GC classes.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$60', note: 'Business Management exam required per classification.', compactMember: false },
      AR: { agency: 'Arkansas Contractors Licensing Board', agencyUrl: 'https://www.aclb.arkansas.gov', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      CT: { agency: 'Connecticut Department of Consumer Protection', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$50', note: 'Business & Law portion required.', compactMember: false },
      FL: { agency: 'Florida DBPR — Construction Industry Licensing Board', agencyUrl: 'https://www.myfloridalicense.com', fee: '≈$150 (Business & Finance)', note: 'Closed-book; 70% pass.', compactMember: false },
      GA: { agency: 'Georgia Secretary of State — Residential & General Contractors Board', agencyUrl: 'https://sos.ga.gov', fee: '≈$75', note: 'Business & Law required.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      LA: { agency: 'Louisiana State Licensing Board for Contractors', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$50–$100', note: 'Business & Law; also Plumbing Business & Law.', compactMember: false },
      MD: { agency: 'Maryland DLLR — Occupational & Professional Licensing', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$50', note: 'Business & Law for HVAC & Home Improvement.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Contractors', agencyUrl: 'https://www.msbc.state.ms.us', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      NV: { agency: 'Nevada State Contractors Board', agencyUrl: 'https://www.nvcontractorsboard.com', fee: '≈$75', note: 'Business & Law required per classification.', compactMember: false },
      NJ: { agency: 'New Jersey DCA — Construction Licensing', agencyUrl: 'https://www.nj.gov/dca', fee: '≈$50', note: 'Business & Law for contractors.', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries Division', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      NC: { agency: 'North Carolina Licensing Board for General Contractors', agencyUrl: 'https://www.ncblgc.org', fee: '≈$75', note: 'Business & Law required.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69', note: 'Business & Law required for all commercial trade licenses.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$50–$75', note: 'Mechanical Business & Law for plumbing/mechanical/electrical contractors.', compactMember: false },
      OR: { agency: 'Oregon Construction Contractors Board', agencyUrl: 'https://www.oregon.gov/ccb', fee: '≈$60', note: 'Business & Law required (or NASCLA + training).', compactMember: false },
      SC: { agency: 'South Carolina LLR — Contractors’ Licensing Board', agencyUrl: 'https://www.llr.sc.gov', fee: '≈$75', note: 'Business & Law required.', compactMember: false },
      TN: { agency: 'Tennessee Board for Licensing Contractors', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$60', note: 'Business & Law required.', compactMember: false },
      UT: { agency: 'Utah DOPL — Construction Trades', agencyUrl: 'https://dopl.utah.gov', fee: '≈$60', note: 'Business & Law required.', compactMember: false },
      VI: { agency: 'US Virgin Islands Department of Licensing & Consumer Affairs', agencyUrl: 'https://www.dlca.vi.gov', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Board for Contractors', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$75', note: 'Business & Law required.', compactMember: false },
      WV: { agency: 'West Virginia Contractors Licensing Board', agencyUrl: 'https://www.wvcontractorlicensing.org', fee: '≈$50', note: 'Business & Law required.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$75', note: 'Residential builder exam embeds business/law.', compactMember: false }
    }
  },

  /* =====================================================================
   * 3) JOURNEYMAN ELECTRICIAN LICENSE
   * State-level journeyman electrician licensing. Excluded (local-only / none):
   * IL, IN, KS, MO, NY, PA. (45 jurisdictions)
   * ===================================================================== */
  {
    key: 'journeyman-electrician',
    name: 'Journeyman Electrician License',
    category: 'trades',
    group: 'Electrical',
    type: 'License',
    blurb: 'A state-issued credential certifying an electrician has completed the required apprenticeship hours and passed a trade exam, permitting them to perform electrical work under a master or contractor.',
    overview: 'A Journeyman Electrician license is the mid-tier credential in the electrical trade, sitting between apprentice and master. Most U.S. states license journeyman electricians at the STATE level through an electrical board or professional-licensing division, requiring roughly 8,000 hours (about four years) of supervised on-the-job training plus classroom instruction, followed by a closed-book trade exam based on the National Electrical Code (NEC). A journeyman may install, repair, and maintain wiring but generally must work under the supervision of or be employed by a licensed master electrician or electrical contractor. A handful of states — Illinois, Indiana, Kansas, Missouri, New York, and Pennsylvania — do NOT license electricians at the state level; there, licensing is entirely municipal, so no state journeyman credential exists. Electricians in those states must comply with the rules of each city or county. Many states participate in the NERA (National Electrical Reciprocal Alliance) or bilateral agreements that waive the trade exam for journeymen licensed in member states.',
    eligibility: 'Typically 18+ with a high-school diploma or equivalent; completion of a state-approved apprenticeship (commonly 8,000 hours / 4 years) or equivalent combination of training and experience; some states accept military or degree credit. Proof of NEC familiarity.',
    exam: {
      admin: 'State electrical board, often via PSI, Pearson VUE, or Prov.',
      questions: 'Commonly 60–100 multiple-choice questions.',
      time: 'Typically 3–4 hours.',
      pass: 'Usually 70% (some states 75%).',
      fee: '≈$30–$120 exam fee, plus license fee ≈$25–$150.',
      format: 'Computer-based, closed-book, NEC-referenced.'
    },
    education: {
      hours: 576,
      note: 'Most states require ~576 classroom hours (e.g., 144/yr over 4 yrs) alongside 8,000 OJT hours. Some accept approved apprenticeship program completion in lieu of separate hours.'
    },
    prerequisites: 'Documented apprenticeship/OJT hours, application, fee, and sometimes a passing score sent directly from the testing vendor.',
    costBreakdown: {
      items: [
        { item: 'Application fee', cost: '≈$25–$100' },
        { item: 'Examination fee', cost: '≈$30–$120' },
        { item: 'License issuance', cost: '≈$25–$150' },
        { item: 'Apprenticeship tuition (if program-based)', cost: '≈$0–$5,000' }
      ],
      total: '≈$100–$400 in fees (excludes apprenticeship program costs).'
    },
    timeline: [
      { stage: 'Register as an electrical apprentice with the state board', duration: '1–4 weeks' },
      { stage: 'Supervised on-the-job training', duration: '4 years (≈8,000 hours)' },
      { stage: 'Related classroom instruction, taken in parallel', duration: '≈576 hours (about 144 hours per year)' },
      { stage: 'Exam application and hour verification by the board', duration: '2–8 weeks' },
      { stage: 'Schedule and pass the NEC-based journeyman exam', duration: '2–6 weeks to get a seat; 3–4 hours to sit' },
      { stage: 'License issuance', duration: '2–4 weeks after passing' },
      { stage: 'Renewal', duration: 'Annually or biennially, with 4–16 hours of code-update CE' }
    ],
    route: [
      { title: 'Confirm your state licenses electricians at the state level', description: 'Forty-five jurisdictions issue a state journeyman electrician license. Illinois, Indiana, Kansas, Missouri, New York and Pennsylvania do not — there the credential comes from a city or county, and Chicago, New York City and Philadelphia each run their own exam. Hours earned under a purely local program may not transfer cleanly if you later move to a state-licensed jurisdiction.' },
      { title: 'Register as an apprentice before you start logging hours', description: 'Most boards count only hours worked after your apprentice or trainee registration is on file, so registering late can silently cost you a year of credit. File with the state electrical board and enroll in an approved program — an IBEW/NECA joint apprenticeship (JATC), an IEC or ABC non-union program, or an employer-sponsored plan registered with the U.S. Department of Labor.' },
      { title: 'Accumulate roughly 8,000 supervised hours plus classroom instruction', description: 'The common standard is four years of on-the-job training under a licensed journeyman or master, paired with about 576 hours of related classroom instruction (roughly 144 hours a year). Submit hour affidavits signed by your supervising licensee on the board’s schedule rather than all at once — boards routinely reject bulk retroactive logs, and many cap the hours you may claim in a single week.' },
      { title: 'Apply for exam eligibility and get your hours verified', description: 'File the exam application with the board along with signed hour verification and the fee. Verification is the slow step, typically two to eight weeks, because the board contacts your employers directly. Once approved you receive an authorization to test from the state’s vendor — usually PSI, Pearson VUE or Prov — and you generally must schedule within a fixed eligibility window.' },
      { title: 'Prepare for and pass the NEC-based trade exam', description: 'Expect 60–100 multiple-choice questions in 3–4 hours with a 70% pass mark (75% in some states), written against the National Electrical Code edition your state has actually adopted — often one or two cycles behind the newest NFPA 70. Content centers on wiring methods, box and conduit fill, ampacity and load calculations, grounding and bonding, motors, and state amendments. Tab and index your code book if the exam is code-referenced.' },
      { title: 'Obtain the license, then maintain and transfer it', description: 'Pay the issuance fee and note the renewal cycle — most states renew annually or biennially and require continuing education tied to each new NEC edition. If you plan to work across state lines, check NERA (National Electrical Reciprocal Alliance) and bilateral agreements: states such as CO, ID, MT, ND, OK, SD, UT and WY will waive the trade exam for a journeyman who has held an active license in a member state for at least one year.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. Omitted (no state journeyman electrician license — municipal/local only): IL, IN, KS, MO, NY, PA. In these states electricians are licensed by cities/counties (e.g., Chicago, NYC, Philadelphia). Colorado licenses electricians at state level via DORA (included). Reciprocity: many states honor NERA / bilateral agreements (e.g., CO, ID, MT, ND, OK, SD, UT, WY among NERA members) waiving the trade exam for out-of-state journeymen with ≥1 yr active license.',
    faqs: [
      { q: 'How long does it take to become a journeyman electrician?', a: 'Typically 4 years (about 8,000 hours of supervised work plus classroom instruction) after registering as an apprentice.' },
      { q: 'Which states do NOT license electricians at the state level?', a: 'Illinois, Indiana, Kansas, Missouri, New York, and Pennsylvania license electricians only at the city/county level; no state journeyman credential exists there.' },
      { q: 'What does the journeyman exam test?', a: 'The National Electrical Code (NEC), wiring methods, calculations, safety, and state rules — usually closed-book, 70% pass.' },
      { q: 'Can I transfer my license to another state?', a: 'Often via NERA or state reciprocity, which may waive the trade exam if you hold an active license from a member state for at least a year. Business/licensing steps still apply.' },
      { q: 'What is the difference between journeyman and master?', a: 'A journeyman works under a master/contractor; a master has additional experience and may supervise, pull permits, and run a contracting business.' },
      { q: 'How much does licensing cost?', a: 'Roughly $100–$400 in exam and license fees, excluding apprenticeship program tuition.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact. Mobility via NERA (National Electrical Reciprocal Alliance) and bilateral state agreements; e.g., Colorado reciprocates with AK, AR, ID, IA, MN, MT, NE, NH, NM, ND, OK, SD, UT, WY for journeyman electricians (≥1 yr active license, no written exam).'
    },
    defaultAgency: 'State Electrical Board / Licensing Division',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Electrical Contractors Board (AECB)', agencyUrl: 'https://www.aecb.alabama.gov', fee: '≈$35 license + $115 exam', note: '8,000 hrs; Prov exam; reciprocity list maintained.', compactMember: false },
      AK: { agency: 'Alaska DCCED — CBPL', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$50–$150', note: 'Journeyman electrician; NERA member.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$100', note: 'Electrician licenses via ROC.', compactMember: false },
      AR: { agency: 'Arkansas Department of Labor — Electrical', agencyUrl: 'https://www.arkansas.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      CA: { agency: 'California CSLB', agencyUrl: 'https://www.cslb.ca.gov', fee: '≈$200', note: 'State licenses electricians at contractor level (C-10); no separate journeyman tier — verify.', compactMember: false },
      CO: { agency: 'Colorado DORA — State Electrical Board', agencyUrl: 'https://dpo.colorado.gov/ElectricalBoard', fee: '≈$120–$195', note: 'Journeyman, Residential Wireman, Master classes; NERA member.', compactMember: false },
      CT: { agency: 'Connecticut DCP — Electrical', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$75', note: 'Journeyman electrician.', compactMember: false },
      DE: { agency: 'Delaware Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov', fee: '≈$100', note: 'Journeyman electrician.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Electrician Licensing', agencyUrl: 'https://dcra.dc.gov', fee: '≈$100–$200', note: 'Journeyman electrician.', compactMember: false },
      FL: { agency: 'Florida DBPR — Electrical Contractors', agencyUrl: 'https://www.myfloridalicense.com', fee: '≈$150', note: 'State licenses electrical CONTRACTORS; individual journeyman via local EC — verify.', compactMember: false },
      GA: { agency: 'Georgia State Financing & Investment Commission — Electrical', agencyUrl: 'https://sos.ga.gov', fee: '≈$75', note: 'Journeyman electrician.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$60', note: 'Journeyman; NERA member.', compactMember: false },
      IA: { agency: 'Iowa Department of Inspections, Appeals & Licensing', agencyUrl: 'https://dia.iowa.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      KY: { agency: 'Kentucky Department of Housing, Buildings & Construction', agencyUrl: 'https://dhbc.ky.gov', fee: '≈$50', note: 'Electrician licensing.', compactMember: false },
      LA: { agency: 'Louisiana State Licensing Board for Contractors (LSLBC)', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$75', note: 'Electrical contractor/state certification.', compactMember: false },
      ME: { agency: 'Maine PFR — Electricians', agencyUrl: 'https://www.maine.gov/pfr', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      MD: { agency: 'Maryland DLLR — Electrical', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Professional Licensure — Electricians', agencyUrl: 'https://www.mass.gov', fee: '≈$100', note: 'Journeyman electrician.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$75', note: 'Journeyman electrician.', compactMember: false },
      MN: { agency: 'Minnesota DLI — Electrical', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$60', note: 'Journeyman; NERA member.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Contractors (Electrical)', agencyUrl: 'https://www.msbc.state.ms.us', fee: '≈$50', note: 'Electrical contractor/state license.', compactMember: false },
      MT: { agency: 'Montana DLI — Electricians', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      NE: { agency: 'Nebraska Electrical Division', agencyUrl: 'https://www.nebraska.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      NV: { agency: 'Nevada State Contractors Board', agencyUrl: 'https://www.nvcontractorsboard.com', fee: '≈$75', note: 'Journeyman electrician via NV SCB.', compactMember: false },
      NH: { agency: 'New Hampshire OPLC — Electricians', agencyUrl: 'https://www.oplc.nh.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      NJ: { agency: 'New Jersey DCA — Electrical', agencyUrl: 'https://www.nj.gov/dca', fee: '≈$100', note: 'Journeyman electrician.', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      NC: { agency: 'North Carolina State Board of Examiners of Electrical Contractors', agencyUrl: 'https://www.ncbec.org', fee: '≈$75', note: 'Journeyman (limited/unlimited).', compactMember: false },
      ND: { agency: 'North Dakota Secretary of State — Electricians', agencyUrl: 'https://www.nd.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69 exam', note: 'State licenses commercial electricians; residential local.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$75', note: 'Journeyman electrician; NERA member; reciprocity with NM.', compactMember: false },
      OR: { agency: 'Oregon Building Codes Division — Electrical', agencyUrl: 'https://www.oregon.gov/bcd', fee: '≈$50', note: 'General journeyman electrician.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation', agencyUrl: 'https://dbr.ri.gov', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      SC: { agency: 'South Carolina LLR — Contractors’ Licensing', agencyUrl: 'https://www.llr.sc.gov', fee: '≈$75', note: 'Electrical contractor/state license.', compactMember: false },
      SD: { agency: 'South Dakota DLR — Electricians', agencyUrl: 'https://dlr.sd.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce & Insurance — Electricians', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$75', note: 'Journeyman electrician.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing & Regulation — Electricians', agencyUrl: 'https://www.tdlr.texas.gov', fee: '≈$50', note: 'Journeyman lineman/electrician.', compactMember: false },
      UT: { agency: 'Utah DOPL — Electricians', agencyUrl: 'https://dopl.utah.gov', fee: '≈$60', note: 'Journeyman; NERA member.', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation — Electricians', agencyUrl: 'https://www.sec.state.vt.us', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Electrical', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$80', note: 'Journeyman electrician.', compactMember: false },
      WA: { agency: 'Washington L&I — Electrical', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$50–$100', note: 'Journey level (01); reciprocity with 17 states (ID, OR, MT, etc.).', compactMember: false },
      WV: { agency: 'West Virginia Fire Marshal — Electrical', agencyUrl: 'https://www.wv.gov', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS — Electricians', agencyUrl: 'https://dsps.wi.gov', fee: '≈$50', note: 'Journeyman electrician.', compactMember: false },
      WY: { agency: 'Wyoming Department of Fire Prevention & Electrical', agencyUrl: 'https://www.wyoming.gov', fee: '≈$50', note: 'Journeyman; NERA member.', compactMember: false }
    }
  },

  /* =====================================================================
   * 4) MASTER ELECTRICIAN LICENSE
   * State-level master electrician licensing. Same geographic scope as
   * journeyman (excl. IL, IN, KS, MO, NY, PA) but requires additional
   * experience and a higher-level exam. (45 jurisdictions)
   * ===================================================================== */
  {
    key: 'master-electrician',
    name: 'Master Electrician License',
    category: 'trades',
    group: 'Electrical',
    type: 'License',
    blurb: 'The highest individual electrical credential in most states, permitting the holder to supervise journeymen, design electrical systems, pull permits, and operate an electrical contracting business.',
    overview: 'A Master Electrician license is the top-tier individual credential in the electrical trade. It authorizes the holder to supervise journeyman and apprentice electricians, design and lay out electrical systems, obtain permits, and — in most states — own and operate an electrical contracting business. To qualify, a candidate generally must first hold a journeyman license and accumulate additional supervised experience (commonly 1–4 more years, for a total of roughly 6–8 years), or present equivalent education plus experience. The master exam is more advanced than the journeyman exam, with deeper coverage of the National Electrical Code, load calculations, design, and code interpretation. As with journeyman licensing, a minority of states — Illinois, Indiana, Kansas, Missouri, New York, and Pennsylvania — do not license electricians at the state level, so no state master credential exists; there, "master" status (if any) is granted locally. Master electrician licenses are frequently a prerequisite for an electrical contractor license.',
    eligibility: 'Usually requires a current journeyman license plus 1–4 additional years of experience (often totaling 6–8 years), or a bachelor’s degree in electrical engineering with reduced experience. Some states allow direct application after many years of documented experience.',
    exam: {
      admin: 'State electrical board via PSI / Pearson VUE / Prov.',
      questions: 'Commonly 70–100 questions, more advanced than journeyman.',
      time: 'Typically 3–4 hours.',
      pass: 'Usually 70%–75%.',
      fee: '≈$50–$150 exam + ≈$50–$200 license.',
      format: 'Computer-based, closed-book, NEC-referenced.'
    },
    education: {
      hours: 576,
      note: 'Builds on journeyman prerequisites; no separate classroom mandate beyond the journeyman apprenticeship, but advanced code courses are common.'
    },
    prerequisites: 'Active journeyman license (or equivalent experience), documented additional years, application, and exam.',
    costBreakdown: {
      items: [
        { item: 'Application fee', cost: '≈$50–$100' },
        { item: 'Examination fee', cost: '≈$50–$150' },
        { item: 'License issuance', cost: '≈$50–$200' }
      ],
      total: '≈$150–$450 in fees.'
    },
    timeline: [
      { stage: 'Hold an active journeyman electrician license', duration: 'Prerequisite in nearly every licensing state' },
      { stage: 'Accumulate additional supervised experience beyond journeyman', duration: '1–4 years (≈6–8 years total in the trade)' },
      { stage: 'Application and experience verification by the board', duration: '3–8 weeks' },
      { stage: 'Schedule and pass the advanced NEC exam', duration: '2–6 weeks to get a seat; 3–4 hours to sit' },
      { stage: 'Master license issuance', duration: '2–4 weeks after passing' },
      { stage: 'Optional: qualify an electrical contractor license as the master', duration: '4–10 weeks for bond, insurance and entity filings' },
      { stage: 'Renewal', duration: 'Annually or biennially, with code-update CE' }
    ],
    route: [
      { title: 'Earn and maintain journeyman status first', description: 'Virtually every state requires an active journeyman electrician license as the entry ticket to the master exam — see the journeyman-electrician pathway for the ~8,000-hour apprenticeship route. Illinois, Indiana, Kansas, Missouri, New York and Pennsylvania have no state master credential at all; "master" there is a municipal designation granted by the local electrical board.' },
      { title: 'Log the additional post-journeyman experience your state requires', description: 'Typically one to four more years working as a licensed journeyman, bringing total trade experience to roughly six to eight years. Boards generally want that experience to include layout, design and supervision rather than installation alone, so ask your employer to describe your role in those terms on the verification form. Several states shorten the requirement to one or two years for holders of an electrical engineering degree.' },
      { title: 'Submit the master application with verified experience', description: 'File with the state electrical board along with employer affidavits, your current journeyman license number and the fee. Verification usually takes three to eight weeks because the board contacts prior employers directly. Any lapse in your journeyman license during the qualifying period can disqualify those months, so renew on time while you are accumulating experience.' },
      { title: 'Prepare for the advanced code and calculations exam', description: 'The master exam goes well beyond the journeyman test, with heavy emphasis on service and feeder load calculations, voltage-drop and short-circuit work, transformer and motor sizing, overcurrent coordination, and interpreting rather than merely locating NEC articles. Many states add a business or law section covering permits, supervision duties and licensing statutes. Expect 70–100 questions in 3–4 hours at a 70%–75% pass mark.' },
      { title: 'Obtain the master license and use it to qualify a business', description: 'In most states an electrical contractor license is issued to a company only if a licensed master serves as its qualifying party. Converting to contractor status normally adds a surety bond, general liability and workers’ compensation insurance, entity registration, and sometimes a separate business and law exam. A master may usually qualify only one company at a time, and withdrawing as qualifier can suspend that company’s license.' },
      { title: 'Renew and plan for interstate mobility', description: 'Master licenses renew annually or biennially and generally require continuing education keyed to each new NEC edition. Reciprocity is thinner at master level than at journeyman level: NERA and bilateral agreements (CO, ID, MT, ND, OK, SD, UT and WY among them) may waive the exam, but several states reciprocate journeyman status only and will still make you sit their own master exam. Confirm with the target board in writing before relocating.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. Omitted (no state master electrician license — municipal/local only): IL, IN, KS, MO, NY, PA. Colorado licenses masters at state level via DORA (included). The master credential is the usual qualifying party for an electrical contractor license. Reciprocity for masters follows the same NERA/bilateral patterns as journeymen in many states, though some states restrict master reciprocity.',
    faqs: [
      { q: 'What can a master electrician do that a journeyman cannot?', a: 'A master may supervise others, design systems, pull permits, and typically own an electrical contracting business; a journeyman works under a master/contractor.' },
      { q: 'How much experience is required?', a: 'Generally a journeyman license plus 1–4 more years (≈6–8 years total), though some states accept an engineering degree with reduced hours.' },
      { q: 'Which states do not license master electricians at the state level?', a: 'Illinois, Indiana, Kansas, Missouri, New York, and Pennsylvania — licensing there is local only.' },
      { q: 'Is the master exam harder than journeyman?', a: 'Yes — it covers the NEC in greater depth, including design, load calculations, and code interpretation, and usually has a 70%–75% pass bar.' },
      { q: 'Do I need a master license to start an electrical business?', a: 'In most states, yes — the electrical contractor license requires a qualifying master electrician.' },
      { q: 'How much does it cost?', a: 'About $150–$450 in exam and license fees, excluding any prep courses.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact. NERA and bilateral agreements may waive exams for masters from member states (e.g., CO, ID, MT, ND, OK, SD, UT, WY), though some states limit master-level reciprocity. Verify with the target board.'
    },
    defaultAgency: 'State Electrical Board / Licensing Division',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Electrical Contractors Board (AECB)', agencyUrl: 'https://www.aecb.alabama.gov', fee: '≈$35 + $115 exam', note: 'Master; 8,000 hrs + additional experience.', compactMember: false },
      AK: { agency: 'Alaska DCCED — CBPL', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$100–$200', note: 'Master electrician.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$150', note: 'Master/classifications via ROC.', compactMember: false },
      AR: { agency: 'Arkansas Department of Labor — Electrical', agencyUrl: 'https://www.arkansas.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      CA: { agency: 'California CSLB', agencyUrl: 'https://www.cslb.ca.gov', fee: '≈$200', note: 'State licenses at contractor level (C-10); no separate master tier — verify.', compactMember: false },
      CO: { agency: 'Colorado DORA — State Electrical Board', agencyUrl: 'https://dpo.colorado.gov/ElectricalBoard', fee: '≈$120–$195', note: 'Master Electrician class; qualifying party for contractors.', compactMember: false },
      CT: { agency: 'Connecticut DCP — Electrical', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      DE: { agency: 'Delaware Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov', fee: '≈$150', note: 'Master electrician.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Electrician Licensing', agencyUrl: 'https://dcra.dc.gov', fee: '≈$150–$250', note: 'Master electrician.', compactMember: false },
      FL: { agency: 'Florida DBPR — Electrical Contractors', agencyUrl: 'https://www.myfloridalicense.com', fee: '≈$200', note: 'State licenses electrical CONTRACTORS; master equivalency via local — verify.', compactMember: false },
      GA: { agency: 'Georgia Electrical Board', agencyUrl: 'https://sos.ga.gov', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$80', note: 'Master electrician.', compactMember: false },
      IA: { agency: 'Iowa Department of Inspections, Appeals & Licensing', agencyUrl: 'https://dia.iowa.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      KY: { agency: 'Kentucky Department of Housing, Buildings & Construction', agencyUrl: 'https://dhbc.ky.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      LA: { agency: 'Louisiana State Licensing Board for Contractors', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$100', note: 'Master electrical contractor.', compactMember: false },
      ME: { agency: 'Maine PFR — Electricians', agencyUrl: 'https://www.maine.gov/pfr', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      MD: { agency: 'Maryland DLLR — Electrical', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Professional Licensure — Electricians', agencyUrl: 'https://www.mass.gov', fee: '≈$150', note: 'Master electrician.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      MN: { agency: 'Minnesota DLI — Electrical', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Contractors (Electrical)', agencyUrl: 'https://www.msbc.state.ms.us', fee: '≈$75', note: 'Master electrical contractor.', compactMember: false },
      MT: { agency: 'Montana DLI — Electricians', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      NE: { agency: 'Nebraska Electrical Division', agencyUrl: 'https://www.nebraska.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      NV: { agency: 'Nevada State Contractors Board', agencyUrl: 'https://www.nvcontractorsboard.com', fee: '≈$100', note: 'Master electrician via NV SCB.', compactMember: false },
      NH: { agency: 'New Hampshire OPLC — Electricians', agencyUrl: 'https://www.oplc.nh.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      NJ: { agency: 'New Jersey DCA — Electrical', agencyUrl: 'https://www.nj.gov/dca', fee: '≈$150', note: 'Master electrician.', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      NC: { agency: 'North Carolina State Board of Examiners of Electrical Contractors', agencyUrl: 'https://www.ncbec.org', fee: '≈$100', note: 'Master (unlimited).', compactMember: false },
      ND: { agency: 'North Dakota Secretary of State — Electricians', agencyUrl: 'https://www.nd.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69 exam', note: 'State master (commercial); residential local.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$100', note: 'Master electrician; reciprocity with NM.', compactMember: false },
      OR: { agency: 'Oregon Building Codes Division — Electrical', agencyUrl: 'https://www.oregon.gov/bcd', fee: '≈$75', note: 'Supervising electrician (master equiv.).', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation', agencyUrl: 'https://dbr.ri.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      SC: { agency: 'South Carolina LLR — Contractors’ Licensing', agencyUrl: 'https://www.llr.sc.gov', fee: '≈$100', note: 'Master electrical contractor.', compactMember: false },
      SD: { agency: 'South Dakota DLR — Electricians', agencyUrl: 'https://dlr.sd.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce & Insurance — Electricians', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing & Regulation — Electricians', agencyUrl: 'https://www.tdlr.texas.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      UT: { agency: 'Utah DOPL — Electricians', agencyUrl: 'https://dopl.utah.gov', fee: '≈$90', note: 'Master electrician.', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation — Electricians', agencyUrl: 'https://www.sec.state.vt.us', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Electrical', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$100', note: 'Master electrician.', compactMember: false },
      WA: { agency: 'Washington L&I — Electrical', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$100', note: 'Master (07) electrician; requires 4 yrs journey + exam.', compactMember: false },
      WV: { agency: 'West Virginia Fire Marshal — Electrical', agencyUrl: 'https://www.wv.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS — Electricians', agencyUrl: 'https://dsps.wi.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false },
      WY: { agency: 'Wyoming Department of Fire Prevention & Electrical', agencyUrl: 'https://www.wyoming.gov', fee: '≈$75', note: 'Master electrician.', compactMember: false }
    }
  },

  /* =====================================================================
   * 5) JOURNEYMAN PLUMBER LICENSE
   * State-level journeyman plumber licensing. Excluded (local-only / none /
   * contractor-only, no state journeyman/master tier): CA, FL, IN, KS, MO, MS,
   * NE, NV, NY, PA, SC, WY. (39 jurisdictions)
   * ===================================================================== */
  {
    key: 'journeyman-plumber',
    name: 'Journeyman Plumber License',
    category: 'trades',
    group: 'Plumbing',
    type: 'License',
    blurb: 'A state-issued credential certifying a plumber has completed an apprenticeship and passed a trade exam, permitting them to perform plumbing work under a master plumber or contractor.',
    overview: 'A Journeyman Plumber license is the mid-tier plumbing credential in states that license plumbers individually at the state level. It typically requires about 4–5 years (6,000–8,000 hours) of supervised apprenticeship plus classroom instruction, followed by a trade exam based on the Uniform Plumbing Code (UPC) or International Plumbing Code (IPC). A journeyman may install, repair, and maintain plumbing systems but must generally work under a master plumber or licensed plumbing contractor. Some states — including California (C-36 is a contractor license, not a journeyman tier), Florida (only plumbing *contractors* are state-licensed; journeyman/master are local), and Kansas, Missouri, Nebraska, Nevada, New York, Pennsylvania, Wyoming (municipal only), plus Indiana, Mississippi, and South Carolina — do NOT issue a state journeyman plumber license, so those are omitted. Plumber reciprocity is narrower than electrician reciprocity; the most common waiver is the Washington–Idaho journeyman agreement.',
    eligibility: 'Usually 18+, high-school diploma/GED, and completion of a state-approved plumbing apprenticeship (≈6,000–8,000 OJT hours + classroom). Some states accept equivalent experience.',
    exam: {
      admin: 'State plumbing board, often via PSI, Pearson VUE, or Prometric.',
      questions: 'Commonly 60–100 questions.',
      time: 'Typically 3–4 hours.',
      pass: 'Usually 70% (Alabama 70%, Tennessee 73%).',
      fee: '≈$30–$120 exam + ≈$25–$150 license.',
      format: 'Computer-based, commonly open-book with approved code book.'
    },
    education: {
      hours: 576,
      note: 'Most states require ~576 classroom hours across the apprenticeship (e.g., 144/yr). Some accept apprenticeship completion in lieu of separate hours.'
    },
    prerequisites: 'Documented apprenticeship hours, application, fee, and code-reference familiarity (UPC or IPC).',
    costBreakdown: {
      items: [
        { item: 'Application fee', cost: '≈$25–$100' },
        { item: 'Examination fee', cost: '≈$30–$120' },
        { item: 'License issuance', cost: '≈$25–$150' }
      ],
      total: '≈$100–$370 in fees (excludes apprenticeship tuition).'
    },
    timeline: [
      { stage: 'Register as a plumbing apprentice or trainee with the state board', duration: '1–4 weeks' },
      { stage: 'Supervised on-the-job training', duration: '4–5 years (≈6,000–8,000 hours)' },
      { stage: 'Related classroom instruction, taken in parallel', duration: '≈576 hours (about 144 hours per year)' },
      { stage: 'Exam application and hour verification', duration: '2–8 weeks' },
      { stage: 'Schedule and pass the plumbing code exam', duration: '2–6 weeks to get a seat; 3–4 hours to sit' },
      { stage: 'License issuance', duration: '2–4 weeks after passing' },
      { stage: 'Renewal', duration: 'Annually or biennially, often with 4–8 hours of code CE' }
    ],
    route: [
      { title: 'Check whether your state issues an individual plumber license', description: 'Most states license journeyman plumbers directly, but California (the C-36 is a contractor license only), Florida, Nevada and South Carolina license plumbing contractors only, while Indiana, Kansas, Missouri, Mississippi, Nebraska, New York, Pennsylvania and Wyoming leave plumber licensing to municipalities. In those states the local building department, not a state board, sets the hour and exam rules.' },
      { title: 'Register as an apprentice or trainee before you start work', description: 'Many plumbing boards require registration before you may legally work on a job site and will not credit hours logged before the registration date. Enroll in a state-approved program — a UA local union apprenticeship, a PHCC or ABC non-union program, or a registered employer-sponsored plan — and confirm the board itself recognizes it, not merely that a trade school advertises it.' },
      { title: 'Accumulate 6,000–8,000 supervised hours plus classroom work', description: 'That is roughly four to five years under a licensed journeyman or master plumber, alongside about 576 hours of related instruction. Boards commonly require hours spread across defined categories — DWV, water supply, gas piping, fixtures, backflow and service work — so a candidate who only ever did new-construction rough-in can fall short in a category despite having the total. Submit signed affidavits periodically rather than at the end.' },
      { title: 'Apply for exam eligibility with verified hours', description: 'File the application, fee and employer-signed hour verification with the state plumbing board. After approval the vendor — commonly PSI, Pearson VUE or Prometric — issues an authorization to test. Confirm which code your state has adopted at the same time: western states generally use the Uniform Plumbing Code (UPC), while much of the east and south uses the International Plumbing Code (IPC).' },
      { title: 'Prepare for and pass the trade exam', description: 'Expect 60–100 questions in 3–4 hours at roughly a 70% pass mark (Tennessee sets 73%). Plumbing exams are usually open-book with the approved code book, so speed at locating tables — fixture units, drainage and vent sizing, water-heater relief valves, backflow protection and gas pipe sizing — matters more than memorization. Tab your code book to the exact edition named in the candidate bulletin.' },
      { title: 'Get licensed, then renew and plan any move carefully', description: 'Pay the issuance fee and track the renewal cycle, which is annual or biennial in most states and often carries a modest continuing-education requirement. Plumber reciprocity is far narrower than electrician reciprocity — the clearest waiver is the Washington–Idaho journey-level agreement, and most other states will require their own exam regardless of how long you have been licensed elsewhere.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. Omitted because no state journeyman/master plumber license exists (licensing is municipal, contractor-only, or none): CA (C-36 contractor only), FL (plumbing contractor only; JM/master local), IN, KS, MO, MS, NE, NV (C-1 contractor only), NY, PA, SC (plumbing contractor only), WY. Colorado licenses plumbers at state level via DORA (included). Plumber reciprocity is limited — most states require their own exam; Washington–Idaho journeyman reciprocity is a notable exception.',
    faqs: [
      { q: 'How long does it take to become a journeyman plumber?', a: 'Typically 4–5 years (about 6,000–8,000 hours of supervised work plus classroom instruction).' },
      { q: 'Which states do NOT have a state journeyman plumber license?', a: 'California (contractor-only C-36), Florida (contractor-only), Indiana, Kansas, Missouri, Mississippi, Nebraska, Nevada (contractor-only), New York, Pennsylvania, South Carolina, and Wyoming — plumbing there is licensed locally or not at the individual level.' },
      { q: 'What code does the exam use?', a: 'Either the Uniform Plumbing Code (UPC, common in western states) or the International Plumbing Code (IPC); exams are usually open-book with the approved code book.' },
      { q: 'Is plumber reciprocity common?', a: 'No — it is narrower than electrician reciprocity. Most states require their own exam; Washington and Idaho waive the trade portion for each other\'s journey-level plumbers.' },
      { q: 'What is the difference between journeyman and master plumber?', a: 'A journeyman works under a master/contractor; a master has additional experience, may supervise, and can own a plumbing contracting business and pull permits.' },
      { q: 'How much does licensing cost?', a: 'Roughly $100–$370 in exam and license fees, excluding apprenticeship tuition.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact. Plumber reciprocity is limited; the clearest state-to-state waiver is Washington–Idaho journey-level plumber reciprocity. Some southeastern states (e.g., TN) extend contractor-level exam waivers to neighboring states but rarely for the individual journeyman exam.'
    },
    defaultAgency: 'State Plumbing Board / Licensing Division',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Plumbers & Gas Fitters Examining Board', agencyUrl: 'https://www.plumbers.alabama.gov', fee: '≈$235 (app + exam + license)', note: '2 yrs experience option; 70% pass.', compactMember: false },
      AK: { agency: 'Alaska DCCED — CBPL', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$100–$150', note: 'Journeyman plumber.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$100', note: 'Plumbing contractor/tech licensing.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health / Licensing', agencyUrl: 'https://www.arkansas.gov', fee: '≈$75', note: 'Journeyman plumber.', compactMember: false },
      CO: { agency: 'Colorado DORA — State Plumbing Board', agencyUrl: 'https://dpo.colorado.gov/Plumbers', fee: '≈$120', note: 'Journeyman, Residential, Master classes.', compactMember: false },
      CT: { agency: 'Connecticut DCP — Plumbing', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$75', note: 'Journeyman plumber.', compactMember: false },
      DE: { agency: 'Delaware Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov', fee: '≈$100', note: 'Journeyman plumber.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Plumbing', agencyUrl: 'https://dcra.dc.gov', fee: '≈$100–$200', note: 'Journeyman plumber.', compactMember: false },
      GA: { agency: 'Georgia State Plumbing Commission', agencyUrl: 'https://sos.ga.gov', fee: '≈$75', note: 'Journeyman plumber.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$50', note: 'Journeyman plumber.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$60', note: 'Journeyman plumber; reciprocal with WA.', compactMember: false },
      IL: { agency: 'Illinois Department of Public Health — Plumbing', agencyUrl: 'https://dph.illinois.gov', fee: '≈$175', note: 'State-licensed plumber (IDPH); Illinois Licensed Plumber is the state credential.', compactMember: false },
      IA: { agency: 'Iowa Department of Inspections, Appeals & Licensing', agencyUrl: 'https://dia.iowa.gov', fee: '≈$100', note: 'Journeyman/master plumber.', compactMember: false },
      KY: { agency: 'Kentucky Department of Housing, Buildings & Construction', agencyUrl: 'https://dhbc.ky.gov', fee: '≈$100', note: 'Journeyman/master plumber.', compactMember: false },
      LA: { agency: 'Louisiana State Plumbing Board (LSPB)', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$125', note: 'Master/journeyman via LSPB.', compactMember: false },
      ME: { agency: 'Maine PFR — Plumbers', agencyUrl: 'https://www.maine.gov/pfr', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      MD: { agency: 'Maryland DLLR — Plumbing', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$37', note: 'Master plumber (state); journeyman via local boards.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Professional Licensure — Plumbers', agencyUrl: 'https://www.mass.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      MN: { agency: 'Minnesota DLI — Plumbing', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$80', note: 'Journeyman/master plumber.', compactMember: false },
      MT: { agency: 'Montana DLI — Plumbing', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      NH: { agency: 'New Hampshire OPLC — Plumbers', agencyUrl: 'https://www.oplc.nh.gov', fee: '≈$100', note: 'Journeyman/master plumber.', compactMember: false },
      NJ: { agency: 'New Jersey Board of Examiners of Master Plumbers', agencyUrl: 'https://www.nj.gov', fee: '≈$150', note: 'Master plumber (state); journeyman local.', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries (Plumbing)', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$100', note: 'JP-1 journeyman plumber; MM-98 contractor.', compactMember: false },
      NC: { agency: 'North Carolina State Board of Plumbing', agencyUrl: 'https://www.nclicensing.org', fee: '≈$75', note: 'Plumbing contractor (P-I/P-II).', compactMember: false },
      ND: { agency: 'North Dakota State Plumbing Board', agencyUrl: 'https://www.nd.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69 exam', note: 'State licenses commercial plumbers; residential local.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$75', note: 'Journeyman plumber.', compactMember: false },
      OR: { agency: 'Oregon Building Codes Division — Plumbing', agencyUrl: 'https://www.oregon.gov/bcd', fee: '≈$60', note: 'Journey-level plumber.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation — Plumbers', agencyUrl: 'https://dbr.ri.gov', fee: '≈$50', note: 'Journeyperson/master plumber.', compactMember: false },
      SD: { agency: 'South Dakota DLR — Plumbing', agencyUrl: 'https://dlr.sd.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce & Insurance — Plumbing', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$100', note: 'CMC-A plumbing contractor; LLP for <$25k.', compactMember: false },
      TX: { agency: 'Texas State Board of Plumbing Examiners (TSBPE)', agencyUrl: 'https://www.tsbpe.texas.gov', fee: '≈$75', note: 'Journeyman/master plumber; Responsible Master required for business.', compactMember: false },
      UT: { agency: 'Utah DOPL — Plumbers', agencyUrl: 'https://dopl.utah.gov', fee: '≈$80', note: 'Journeyman/master plumber.', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation — Plumbers', agencyUrl: 'https://www.sec.state.vt.us', fee: '≈$100', note: 'Journeyman/master plumber.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Plumbing & Mechanical', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$100', note: 'Master plumber / plumbing contractor.', compactMember: false },
      WA: { agency: 'Washington L&I — Plumbing', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$95', note: 'Journey level (PL01); reciprocal with ID.', compactMember: false },
      WV: { agency: 'West Virginia Division of Labor — Plumbers', agencyUrl: 'https://www.wv.gov', fee: '≈$75', note: 'Journeyman/master plumber.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS — Plumbers', agencyUrl: 'https://dsps.wi.gov', fee: '≈$75', note: 'Master plumber (state).', compactMember: false }
    }
  },

  /* =====================================================================
   * 6) MASTER PLUMBER LICENSE
   * State-level master plumber licensing. Same geographic scope as journeyman
   * plumber (excl. CA, FL, IN, KS, MO, MS, NE, NV, NY, PA, SC, WY). (39)
   * ===================================================================== */
  {
    key: 'master-plumber',
    name: 'Master Plumber License',
    category: 'trades',
    group: 'Plumbing',
    type: 'License',
    blurb: 'The highest individual plumbing credential in most states, permitting the holder to supervise plumbers, design plumbing systems, pull permits, and own a plumbing contracting business.',
    overview: 'A Master Plumber license is the top-tier individual plumbing credential in states that license plumbers at the state level. It authorizes the holder to supervise journeyman and apprentice plumbers, design plumbing systems, obtain permits, and operate a plumbing contracting business. Qualification usually requires a journeyman plumber license plus additional experience (commonly 1–3 more years, often totaling 5–8 years) or equivalent education. The master exam is more advanced, covering system design, code interpretation, and business responsibilities. As with journeyman licensing, states that do not issue a state master plumber license — California (contractor-only C-36), Florida (plumbing-contractor only; master is local), Indiana, Kansas, Missouri, Mississippi, Nebraska, Nevada (contractor-only), New York, Pennsylvania, South Carolina (contractor-only), and Wyoming (municipal only) — are omitted. A master plumber is generally the qualifying party required to obtain a plumbing contractor license.',
    eligibility: 'Usually a journeyman plumber license plus 1–3 additional years (≈5–8 years total), or a plumbing engineering degree with reduced experience. Documented installation and supervision history.',
    exam: {
      admin: 'State plumbing board via PSI / Pearson VUE / Prometric.',
      questions: 'Commonly 70–100 questions, advanced.',
      time: 'Typically 3–4 hours.',
      pass: 'Usually 70%.',
      fee: '≈$50–$150 exam + ≈$50–$200 license.',
      format: 'Computer-based, commonly open-book with approved code book.'
    },
    education: {
      hours: 576,
      note: 'Builds on journeyman apprenticeship; no separate classroom mandate beyond that, though advanced code courses are typical.'
    },
    prerequisites: 'Active journeyman license (or equivalent), additional documented experience, application, exam.',
    costBreakdown: {
      items: [
        { item: 'Application fee', cost: '≈$50–$100' },
        { item: 'Examination fee', cost: '≈$50–$150' },
        { item: 'License issuance', cost: '≈$50–$200' }
      ],
      total: '≈$150–$450 in fees.'
    },
    timeline: [
      { stage: 'Hold an active journeyman plumber license', duration: 'Prerequisite in nearly every licensing state' },
      { stage: 'Accumulate additional experience beyond journeyman', duration: '1–3 years (≈5–8 years total in the trade)' },
      { stage: 'Application and experience verification', duration: '3–8 weeks' },
      { stage: 'Schedule and pass the advanced plumbing exam', duration: '2–6 weeks to get a seat; 3–4 hours to sit' },
      { stage: 'Master license issuance', duration: '2–4 weeks after passing' },
      { stage: 'Optional: qualify a plumbing contractor license as the master', duration: '4–10 weeks for bond, insurance and entity filings' },
      { stage: 'Renewal', duration: 'Annually or biennially, with code-update CE' }
    ],
    route: [
      { title: 'Earn journeyman status and confirm a state master tier exists', description: 'The master exam almost always requires an active journeyman plumber license first — see the journeyman-plumber pathway. Twelve states issue no state master plumber license: California, Florida, Indiana, Kansas, Missouri, Mississippi, Nebraska, Nevada, New York, Pennsylvania, South Carolina and Wyoming, where the top credential is either a contractor license or a purely municipal one.' },
      { title: 'Log the additional post-journeyman experience', description: 'Usually one to three further years as a licensed journeyman, taking total trade experience to roughly five to eight years. Boards increasingly want evidence of design and supervisory work — sizing systems, laying out DWV and water distribution, and directing apprentices — rather than installation hours alone, so have employers describe your duties in those terms on the affidavit.' },
      { title: 'File the master application with verified experience', description: 'Submit employer affidavits, your journeyman license number and the fee to the state plumbing board; verification typically takes three to eight weeks. Keep the journeyman license continuously active throughout the qualifying period, because months worked while it was lapsed are commonly disallowed. Some boards also require a criminal background check at this stage.' },
      { title: 'Prepare for the advanced code and design exam', description: 'The master exam emphasizes system design and code interpretation over installation technique: drainage and vent sizing, water-supply and pressure-loss calculations, storm drainage, gas pipe sizing, backflow-preventer selection, and in some states medical gas or special-waste systems. Many boards add questions on supervision duties, permits and state plumbing statutes. Expect 70–100 questions in 3–4 hours at about 70% to pass, usually open-book with the adopted UPC or IPC.' },
      { title: 'Use the master license to qualify a contracting business', description: 'In most states a plumbing contractor license is issued to a company only when a licensed master plumber serves as its qualifying individual. Expect to add a surety bond, general liability and workers’ compensation insurance, entity registration, and in some states a plumbing business and law exam. A master can normally qualify only one firm at a time, and resigning as qualifier can suspend that company’s license until a replacement is named.' },
      { title: 'Renew, keep CE current, and verify before relocating', description: 'Master licenses renew annually or biennially, often with continuing education tied to the adopted code edition. Master-level reciprocity is rare — the Washington–Idaho agreement covers journey level and does not by itself convey master status — so assume you will sit the destination state’s master exam, and confirm in writing with that board before you move or bid work across the line.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. Omitted (no state master plumber license — municipal, contractor-only, or none): CA, FL, IN, KS, MO, MS, NE, NV, NY, PA, SC, WY. Colorado licenses masters at state level via DORA (included). The master is typically the qualifying individual for a plumbing contractor license.',
    faqs: [
      { q: 'What can a master plumber do that a journeyman cannot?', a: 'A master may supervise plumbers, design systems, pull permits, and own a plumbing contracting business; a journeyman works under a master/contractor.' },
      { q: 'How much experience is required?', a: 'Generally a journeyman license plus 1–3 more years (≈5–8 years total), though some states accept a plumbing degree with reduced hours.' },
      { q: 'Which states do not license master plumbers at the state level?', a: 'California (contractor-only), Florida (contractor-only), Indiana, Kansas, Missouri, Mississippi, Nebraska, Nevada (contractor-only), New York, Pennsylvania, South Carolina (contractor-only), and Wyoming.' },
      { q: 'Do I need a master license to run a plumbing business?', a: 'In most states, yes — the plumbing contractor license requires a qualifying master plumber.' },
      { q: 'Is plumber reciprocity common?', a: 'No. Most states require their own exam; Washington–Idaho is a notable journeyman-level waiver, but master reciprocity is rare.' },
      { q: 'How much does it cost?', a: 'About $150–$450 in exam and license fees, excluding prep courses.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact. Master plumber reciprocity is rare; most states require their own exam. Washington–Idaho journey-level reciprocity is the main interstate waiver and does not by itself convey master status.'
    },
    defaultAgency: 'State Plumbing Board / Licensing Division',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Plumbers & Gas Fitters Examining Board', agencyUrl: 'https://www.plumbers.alabama.gov', fee: '≈$200 (master)', note: 'Master plumber; 70% pass.', compactMember: false },
      AK: { agency: 'Alaska DCCED — CBPL', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$150', note: 'Plumbing contractor/master.', compactMember: false },
      AR: { agency: 'Arkansas Department of Health / Licensing', agencyUrl: 'https://www.arkansas.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      CO: { agency: 'Colorado DORA — State Plumbing Board', agencyUrl: 'https://dpo.colorado.gov/Plumbers', fee: '≈$120', note: 'Master Plumber class.', compactMember: false },
      CT: { agency: 'Connecticut DCP — Plumbing', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      DE: { agency: 'Delaware Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Plumbing', agencyUrl: 'https://dcra.dc.gov', fee: '≈$150–$250', note: 'Master plumber.', compactMember: false },
      GA: { agency: 'Georgia State Plumbing Commission', agencyUrl: 'https://sos.ga.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$75', note: 'Master plumber.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      IL: { agency: 'Illinois Department of Public Health — Plumbing', agencyUrl: 'https://dph.illinois.gov', fee: '≈$175', note: 'State-licensed plumber (IDPH) — Illinois Licensed Plumber is the top state credential.', compactMember: false },
      IA: { agency: 'Iowa Department of Inspections, Appeals & Licensing', agencyUrl: 'https://dia.iowa.gov', fee: '≈$120', note: 'Master plumber.', compactMember: false },
      KY: { agency: 'Kentucky Department of Housing, Buildings & Construction', agencyUrl: 'https://dhbc.ky.gov', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      LA: { agency: 'Louisiana State Plumbing Board (LSPB)', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$175', note: 'Master plumber.', compactMember: false },
      ME: { agency: 'Maine PFR — Plumbers', agencyUrl: 'https://www.maine.gov/pfr', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      MD: { agency: 'Maryland DLLR — Plumbing', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$100', note: 'Master plumber (state).', compactMember: false },
      MA: { agency: 'Massachusetts Division of Professional Licensure — Plumbers', agencyUrl: 'https://www.mass.gov', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      MN: { agency: 'Minnesota DLI — Plumbing', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$120', note: 'Master plumber.', compactMember: false },
      MT: { agency: 'Montana DLI — Plumbing', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      NH: { agency: 'New Hampshire OPLC — Plumbers', agencyUrl: 'https://www.oplc.nh.gov', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      NJ: { agency: 'New Jersey Board of Examiners of Master Plumbers', agencyUrl: 'https://www.nj.gov', fee: '≈$240', note: 'Master plumber (state).', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries (Plumbing)', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$150', note: 'MM-98 plumbing contractor/master.', compactMember: false },
      NC: { agency: 'North Carolina State Board of Plumbing', agencyUrl: 'https://www.nclicensing.org', fee: '≈$100', note: 'Plumbing contractor (P-I/P-II).', compactMember: false },
      ND: { agency: 'North Dakota State Plumbing Board', agencyUrl: 'https://www.nd.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69 exam', note: 'State master (commercial); residential local.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      OR: { agency: 'Oregon Building Codes Division — Plumbing', agencyUrl: 'https://www.oregon.gov/bcd', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation — Plumbers', agencyUrl: 'https://dbr.ri.gov', fee: '≈$96', note: 'Master plumber.', compactMember: false },
      SD: { agency: 'South Dakota DLR — Plumbing', agencyUrl: 'https://dlr.sd.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce & Insurance — Plumbing', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$150', note: 'CMC-A plumbing contractor.', compactMember: false },
      TX: { agency: 'Texas State Board of Plumbing Examiners (TSBPE)', agencyUrl: 'https://www.tsbpe.texas.gov', fee: '≈$100', note: 'Master plumber; Responsible Master required for business.', compactMember: false },
      UT: { agency: 'Utah DOPL — Plumbers', agencyUrl: 'https://dopl.utah.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation — Plumbers', agencyUrl: 'https://www.sec.state.vt.us', fee: '≈$150', note: 'Master plumber.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Plumbing & Mechanical', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$150', note: 'Master plumber / plumbing contractor.', compactMember: false },
      WA: { agency: 'Washington L&I — Plumbing', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$130', note: 'Master plumber.', compactMember: false },
      WV: { agency: 'West Virginia Division of Labor — Plumbers', agencyUrl: 'https://www.wv.gov', fee: '≈$100', note: 'Master plumber.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS — Plumbers', agencyUrl: 'https://dsps.wi.gov', fee: '≈$100', note: 'Master plumber (state).', compactMember: false }
    }
  },

  /* =====================================================================
   * 7) HVAC CONTRACTOR LICENSE
   * State-level HVAC/mechanical contractor licensing. Excluded (local-only /
   * none): CO, IL, IN, KS, MO, NE, NH, NY, PA, SD, VT, WY. (39 jurisdictions)
   * ===================================================================== */
  {
    key: 'hvac-contractor',
    name: 'HVAC Contractor License',
    category: 'trades',
    group: 'Mechanical & HVAC',
    type: 'License',
    blurb: 'A state-issued license permitting an individual or business to contract for heating, ventilation, air conditioning, and refrigeration (HVAC/R) installation and service.',
    overview: 'An HVAC Contractor license authorizes a business or qualifying individual to install, service, and repair heating, ventilation, air conditioning, and refrigeration systems. About 39 U.S. states license HVAC contractors at the STATE level through a mechanical/HVAC board, a contractor board, or a professional-licensing division. Requirements typically include documented experience (often 2–5 years), passage of a trade exam covering mechanical codes (IPC/IMC/state codes) and sometimes a Business & Law exam, plus insurance and bonding. A critical federal layer also applies nationwide: the EPA Section 608 certification is required for anyone handling refrigerants, regardless of state license. States that do NOT license HVAC contractors at the state level — Colorado, Illinois, Indiana, Kansas, Missouri, Nebraska, New Hampshire, New York, Pennsylvania, South Dakota, Vermont, and Wyoming — regulate it locally or not at all, so those are omitted. Some states also require a separate mechanical/HVAC Business & Law exam (e.g., Oklahoma, Maryland).',
    eligibility: 'Generally 18+, documented HVAC experience (often 2–5 years or ~4,000–8,000 hours), proof of insurance and bond, and a qualifying individual who passed required exams. EPA 608 certification is required to handle refrigerants.',
    exam: {
      admin: 'State mechanical/HVAC board or contractor board, often via PSI or Pearson VUE.',
      questions: 'Commonly 50–100 questions.',
      time: 'Typically 2–4 hours.',
      pass: 'Usually 70%.',
      fee: '≈$50–$200 exam + ≈$50–$400 license.',
      format: 'Computer-based, often open-book with mechanical code references.'
    },
    education: {
      hours: 0,
      note: 'No universal classroom-hour mandate at the state level, though apprenticeship/experience substitutes apply. EPA 608 (federal) is mandatory to handle refrigerants.'
    },
    prerequisites: 'Documented HVAC experience, liability/workers’ comp insurance, bond (in many states), Business & Law exam where required, and EPA 608 certification.',
    costBreakdown: {
      items: [
        { item: 'Application / license fee', cost: '≈$50–$400' },
        { item: 'Trade exam', cost: '≈$50–$200' },
        { item: 'Business & Law exam (if required)', cost: '≈$50–$150' },
        { item: 'EPA 608 certification', cost: '≈$20–$150' },
        { item: 'Bond + insurance', cost: '≈$200–$2,000/yr' }
      ],
      total: '≈$300–$2,500 first year depending on state, bond, and classification.'
    },
    timeline: [
      { stage: 'Confirm your state licenses HVAC contractors at state level', duration: '1–2 weeks' },
      { stage: 'Accumulate documented HVAC field experience', duration: '2–5 years (≈4,000–8,000 hours)' },
      { stage: 'Obtain EPA Section 608 certification', duration: '1 day to 4 weeks; the certification never expires' },
      { stage: 'Trade exam application and experience verification', duration: '2–8 weeks' },
      { stage: 'Pass the mechanical trade exam and any Business & Law section', duration: '2–6 weeks to schedule; 2–4 hours per exam' },
      { stage: 'Secure bond, liability and workers’ compensation insurance', duration: '1–3 weeks' },
      { stage: 'Board review and license issuance', duration: '3–10 weeks' },
      { stage: 'Renewal', duration: 'Every 1–2 years, with CE in most states' }
    ],
    route: [
      { title: 'Verify that HVAC is licensed at state level where you work', description: 'About 39 states license HVAC or mechanical contractors through a state board. Colorado, Illinois, Indiana, Kansas, Missouri, Nebraska, New Hampshire, New York, Pennsylvania, South Dakota, Vermont and Wyoming do not — note that Colorado licenses electricians and plumbers through DORA but leaves HVAC to local jurisdictions. Also check whether your state splits classifications by tonnage, BTU capacity or residential versus commercial scope.' },
      { title: 'Earn EPA Section 608 certification before anything else', description: 'This federal certification under the Clean Air Act is mandatory in all 50 states for anyone who opens a refrigerant circuit, and it is entirely separate from state licensing. Choose the right type: Type I for small appliances, Type II for high-pressure systems, Type III for low-pressure chillers, or Universal for all three. It is inexpensive, proctored, and once earned it does not expire.' },
      { title: 'Document your field experience', description: 'States typically require two to five years (roughly 4,000–8,000 hours) of verifiable HVAC/R work, evidenced by employer affidavits, W-2s or tax records. Some boards want the experience split between installation and service, and several accept a technical-school diploma or an apprenticeship completion certificate in place of one to two years. Gather proof before applying — undocumented self-employment is the usual sticking point.' },
      { title: 'Pass the mechanical trade exam', description: 'Expect 50–100 questions in 2–4 hours at about 70% to pass, usually open-book against the mechanical and fuel-gas codes your state has adopted (commonly the IMC and IFGC, or the UMC in western states). Content covers load calculation, duct and equipment sizing, refrigeration cycles, combustion venting, ventilation rates and safety controls. Buy the exact code editions listed in the candidate bulletin, not the newest printing.' },
      { title: 'Pass the Business & Law exam if your state requires one', description: 'States including Oklahoma and Maryland require a mechanical or HVAC-specific Business & Law exam alongside the trade test, covering contracts, lien law, employment rules, OSHA and state licensing statutes. Where a general contractor Business & Law exam exists, the HVAC classification usually has to sit it too — ask whether your board will accept a score you already hold under another classification.' },
      { title: 'File the contractor application with bond and insurance, then renew', description: 'Submit exam results, experience verification, the surety bond, general liability coverage, and workers’ compensation if you employ technicians, plus entity registration and often fingerprints. Budget roughly $300–$2,500 for the first year all-in. After issuance, track the renewal cycle — most states renew every one or two years with continuing education — and remember that EPA 608 stays valid for life while the state license does not.' }
    ],
    providersNote: 'STATE-LEVEL ONLY. Omitted (no state HVAC contractor license — municipal/local or none): CO, IL, IN, KS, MO, NE, NH, NY, PA, SD, VT, WY. Note Colorado DOES license electricians and plumbers at state level (DORA) but NOT HVAC contractors. EPA Section 608 certification is required in ALL states to handle refrigerants and is separate from the state contractor license. Some states (OK, MD) require a mechanical/HVAC Business & Law exam.',
    faqs: [
      { q: 'Is an HVAC contractor license required in every state?', a: 'No — about 39 states license HVAC contractors at the state level; Colorado, Illinois, Indiana, Kansas, Missouri, Nebraska, New Hampshire, New York, Pennsylvania, South Dakota, Vermont, and Wyoming do not (local or none).' },
      { q: 'What is EPA 608 certification and do I need it?', a: 'It is a federal certification required for anyone who handles refrigerants, in every state, independent of the state contractor license. Type I/II/III or Universal based on equipment.' },
      { q: 'How much experience is required?', a: 'Typically 2–5 years (≈4,000–8,000 hours) of documented HVAC work, varying by state and classification.' },
      { q: 'What does the HVAC exam cover?', a: 'Mechanical codes (IMC/IPC/state), load calculations, refrigeration, ventilation, and often a Business & Law section; usually 70% pass.' },
      { q: 'How much does it cost?', a: 'Roughly $300–$2,500 first year including application, exams, bond premium, insurance, and EPA 608.' },
      { q: 'Does HVAC licensing transfer between states?', a: 'Rarely. There is no compact; most states require their own exam, though some grant limited reciprocity. EPA 608 is nationally recognized.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No compact for HVAC contractors. Mobility is limited and state-specific; some states offer exam waivers to licensees from neighboring states. The federal EPA 608 certification is recognized in all states but is separate from contractor licensing.'
    },
    defaultAgency: 'State Mechanical / HVAC / Contractor Board',
    sourceUrl: 'https://www.nascla.org',
    verified: false,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Board of Heating, Air Conditioning & Refrigeration Contractors', agencyUrl: 'https://www.abhacr.alabama.gov', fee: '≈$100–$300', note: 'State HVAC contractor license.', compactMember: false },
      AK: { agency: 'Alaska DCCED — CBPL', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl', fee: '≈$100–$300', note: 'Mechanical contractor.', compactMember: false },
      AZ: { agency: 'Arizona Registrar of Contractors', agencyUrl: 'https://www.azroc.gov', fee: '≈$200–$580', note: 'CR-11 HVAC/refrigeration classifications.', compactMember: false },
      AR: { agency: 'Arkansas Contractors Licensing Board', agencyUrl: 'https://www.aclb.arkansas.gov', fee: '≈$100–$400', note: 'HVAC contractor classification.', compactMember: false },
      CA: { agency: 'California CSLB', agencyUrl: 'https://www.cslb.ca.gov', fee: '≈$450 app + $200', note: 'C-20 HVAC contractor license.', compactMember: false },
      CT: { agency: 'Connecticut DCP — Heating & Cooling', agencyUrl: 'https://www.ct.gov/dcp', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false },
      DE: { agency: 'Delaware Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false },
      DC: { agency: 'DC Department of Buildings — Mechanical', agencyUrl: 'https://dcra.dc.gov', fee: '≈$200–$400', note: 'Mechanical/HVAC contractor.', compactMember: false },
      FL: { agency: 'Florida DBPR — Mechanical Contractors', agencyUrl: 'https://www.myfloridalicense.com', fee: '≈$150–$250', note: 'State mechanical (HVAC) contractor.', compactMember: false },
      GA: { agency: 'Georgia Secretary of State — Construction Industry Licensing', agencyUrl: 'https://sos.ga.gov', fee: '≈$150–$300', note: 'Conditioned Air contractor.', compactMember: false },
      HI: { agency: 'Hawaii DCCA — PVL', agencyUrl: 'https://cca.hawaii.gov/pvl', fee: '≈$100', note: 'HVAC contractor.', compactMember: false },
      ID: { agency: 'Idaho Division of Occupational & Professional Licenses', agencyUrl: 'https://www.ibol.idaho.gov', fee: '≈$100', note: 'HVAC contractor.', compactMember: false },
      IA: { agency: 'Iowa Department of Inspections, Appeals & Licensing', agencyUrl: 'https://dia.iowa.gov', fee: '≈$100', note: 'Mechanical contractor.', compactMember: false },
      KY: { agency: 'Kentucky Department of Housing, Buildings & Construction', agencyUrl: 'https://dhbc.ky.gov', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false },
      LA: { agency: 'Louisiana State Licensing Board for Contractors', agencyUrl: 'https://www.lslbc.louisiana.gov', fee: '≈$100–$300', note: 'HVAC/mechanical contractor.', compactMember: false },
      ME: { agency: 'Maine PFR — Electricians/Plumbers/HVAC', agencyUrl: 'https://www.maine.gov/pfr', fee: '≈$100', note: 'HVAC contractor.', compactMember: false },
      MD: { agency: 'Maryland DLLR — HVAC', agencyUrl: 'https://www.dllr.state.md.us/license', fee: '≈$100–$200', note: 'HVAC contractor; Business & Law required.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Professional Licensure — HVAC', agencyUrl: 'https://www.mass.gov', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false },
      MI: { agency: 'Michigan LARA — Bureau of Construction Codes', agencyUrl: 'https://www.michigan.gov', fee: '≈$100–$300', note: 'Mechanical contractor.', compactMember: false },
      MN: { agency: 'Minnesota DLI — Mechanical', agencyUrl: 'https://www.dli.mn.gov', fee: '≈$100–$300', note: 'Mechanical (HVAC) contractor.', compactMember: false },
      MS: { agency: 'Mississippi State Board of Contractors', agencyUrl: 'https://www.msbc.state.ms.us', fee: '≈$100–$300', note: 'HVAC contractor classification.', compactMember: false },
      MT: { agency: 'Montana DLI — Mechanical', agencyUrl: 'https://www.dli.mt.gov', fee: '≈$100', note: 'Mechanical contractor.', compactMember: false },
      NV: { agency: 'Nevada State Contractors Board', agencyUrl: 'https://www.nvcontractorsboard.com', fee: '≈$300–$1,000', note: 'C-21 HVAC contractor.', compactMember: false },
      NJ: { agency: 'New Jersey DCA — HVAC', agencyUrl: 'https://www.nj.gov/dca', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false },
      NM: { agency: 'New Mexico RLD — Construction Industries', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$100–$300', note: 'Mechanical (HVAC) contractor.', compactMember: false },
      NC: { agency: 'North Carolina State Board of HVAC/Refrigeration', agencyUrl: 'https://www.nclicensing.org', fee: '≈$100–$200', note: 'HVAC contractor (H-1/H-2/H-3).', compactMember: false },
      ND: { agency: 'North Dakota Secretary of State — Contractors', agencyUrl: 'https://www.nd.gov', fee: '≈$50–$200', note: 'Mechanical contractor.', compactMember: false },
      OH: { agency: 'Ohio Construction Industry Licensing Board (OCILB)', agencyUrl: 'https://com.ohio.gov', fee: '≈$69 exam + license', note: 'State HVAC (commercial); residential local. Business & Law required.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib', fee: '≈$100–$300', note: 'Mechanical/HVAC contractor; Mechanical Business & Law required.', compactMember: false },
      OR: { agency: 'Oregon Building Codes Division — Mechanical', agencyUrl: 'https://www.oregon.gov/bcd', fee: '≈$100', note: 'HVAC/mechanical contractor.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation', agencyUrl: 'https://dbr.ri.gov', fee: '≈$100', note: 'Mechanical contractor.', compactMember: false },
      SC: { agency: 'South Carolina LLR — Contractors’ Licensing', agencyUrl: 'https://www.llr.sc.gov', fee: '≈$100–$300', note: 'Mechanical/HVAC contractor.', compactMember: false },
      TN: { agency: 'Tennessee Board for Licensing Contractors', agencyUrl: 'https://www.tn.gov/commerce', fee: '≈$100–$300', note: 'Mechanical (HVAC) contractor.', compactMember: false },
      TX: { agency: 'Texas Department of Licensing & Regulation — HVAC', agencyUrl: 'https://www.tdlr.texas.gov', fee: '≈$50–$150', note: 'HVAC contractor (air conditioning/refrigeration).', compactMember: false },
      UT: { agency: 'Utah DOPL — Mechanical', agencyUrl: 'https://dopl.utah.gov', fee: '≈$100–$300', note: 'HVAC/mechanical contractor.', compactMember: false },
      VA: { agency: 'Virginia DPOR — Plumbing & Mechanical', agencyUrl: 'https://www.dpor.virginia.gov', fee: '≈$100–$300', note: 'HVAC contractor.', compactMember: false },
      WA: { agency: 'Washington L&I — Contractor Registration', agencyUrl: 'https://www.lni.wa.gov', fee: '≈$120–$240', note: 'Contractor registration covers HVAC businesses.', compactMember: false },
      WV: { agency: 'West Virginia Division of Labor — Contractors', agencyUrl: 'https://www.wv.gov', fee: '≈$100–$300', note: 'HVAC/mechanical contractor.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS — HVAC', agencyUrl: 'https://dsps.wi.gov', fee: '≈$100–$200', note: 'HVAC contractor.', compactMember: false }
    }
  }
];
