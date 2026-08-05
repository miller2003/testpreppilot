// Research batch 1 — state-issued real estate, inspection, mortgage and auction credentials.
//
// Deep prose is written once per template and reused across every jurisdiction that
// issues the credential. Only agency, agencyUrl, fee, note and compactMember vary.
//
// Omission policy: a state code is absent from `states` when that jurisdiction does
// not issue the credential at all. Those omissions are deliberate and researched —
// see the `note` inside each dossier's overview/reciprocity prose for the reasoning.
//
// None of these six credentials is covered by an interstate compact in compacts.mjs,
// so `reciprocity.compact` is null throughout and every `compactMember` is false.

export default [
  // ══════════════════════════════════════════════════════════════════════
  // 1. Real Estate Salesperson
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'real-estate-salesperson',
    name: 'Real Estate Salesperson License',
    category: 'real-estate',
    group: 'Real Estate Licensing',
    type: 'License',
    blurb: 'The entry-level licence that lets you list, show and sell property for a client under the supervision of a sponsoring broker.',

    overview:
      'A real estate salesperson licence (called a "sales associate" in Florida and a "sales agent" in Texas) is the entry-level credential for anyone who wants to be paid to help another person buy, sell or lease real property. Every licensee begins under the supervision of a sponsoring or employing broker, who is legally responsible for the transactions the salesperson handles and who holds any escrow money. The licence is issued by the state real estate commission, not by the National Association of REALTORS® — "Realtor" is a private trade-association membership layered on top of a state licence, not a licence itself. Nine jurisdictions have retired the salesperson title entirely and issue a broker-style licence to brand-new licensees instead; those states are covered by the broker template rather than this one.',
    eligibility:
      'Applicants must generally be at least 18 years old (19 in Alabama and Nebraska) and hold a high school diploma or its equivalent, although a handful of states no longer require the diploma. Legal presence in the United States is required, but the great majority of states dropped their in-state residency requirement after 2000, and several now issue licences to non-residents who agree to jurisdiction in the state. Every state runs a fingerprint-based state and FBI criminal history check; felony and fraud-related convictions are not automatic bars but are reviewed case by case, and most commissions offer a pre-application "determination of eligibility" so candidates can find out before spending money on coursework.',
    exam: {
      admin: 'PSI, Pearson VUE or the state commission (California administers its own exam)',
      questions: '~100–150 total, split into a national portion and a state-law portion',
      time: '2–4 hours depending on jurisdiction',
      pass: 'Typically 70–75%; the two portions are scored and passed separately',
      fee: '$40–$100 per attempt',
      format: 'Multiple choice, computer-based at a proctored test centre; remote online proctoring is available in a growing number of states'
    },
    education: {
      hours: '40–180 hours of state-approved pre-licensing education',
      note: 'Hours vary enormously — Michigan requires 40, Alabama 60, Georgia 75, Arizona 90, California 135 and Texas 180. Coursework must come from a school approved by that state\u2019s commission; a course approved in one state almost never satisfies another state, although some commissions grant partial credit for a college real estate degree. Many states also mandate separate post-licensing education within the first 1–2 years.'
    },
    prerequisites:
      'High school diploma or equivalent in most states; minimum age of 18 (19 in Alabama and Nebraska); fingerprint-based criminal background check; and, before the licence can be activated, a written sponsorship from a broker licensed in that state.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing course (40–180 hours)', fee: '$150–$800' },
        { item: 'Licensing exam', fee: '$40–$100 per attempt' },
        { item: 'Fingerprints and background check', fee: '$35–$75' },
        { item: 'Initial licence application', fee: '$60–$250' },
        { item: 'Errors & omissions insurance (required in some states)', fee: '$150–$400/yr' },
        { item: 'Optional local MLS and REALTOR® association dues', fee: '$400–$1,200/yr' }
      ],
      total: '$500–$1,500 before association dues'
    },
    timeline: [
      { stage: 'Pre-licensing education', duration: '3 weeks to 6 months, depending on required hours and study pace' },
      { stage: 'Exam scheduling and passing', duration: '1–4 weeks' },
      { stage: 'Background check and application processing', duration: '2–8 weeks' },
      { stage: 'Broker sponsorship and licence activation', duration: '1–2 weeks once a brokerage is chosen' }
    ],
    route: [
      { title: 'Confirm eligibility with the state commission', description: 'Check the minimum age, education and criminal-history rules for your state. If you have a conviction on your record, request a pre-application eligibility determination before you pay for a course.' },
      { title: 'Complete state-approved pre-licensing education', description: 'Enrol with a school on the commission\u2019s approved-provider list and finish the required hours. Keep the certificate of completion — most states require you to upload or present it, and many certificates expire after one to five years.' },
      { title: 'Submit fingerprints and the exam application', description: 'Most states require a fingerprint-based state and FBI background check, either before you sit the exam or as part of the licence application. Schedule the exam through the state\u2019s testing vendor once you receive authorisation to test.' },
      { title: 'Pass the salesperson examination', description: 'The exam has a national portion covering general real estate principles, practice, contracts, finance and agency, plus a state portion on that jurisdiction\u2019s licence law and disclosure rules. The portions are scored separately, so a failure usually means retaking only the failed half.' },
      { title: 'Find a sponsoring broker', description: 'A salesperson licence cannot be activated without a broker. Compare commission split, training programme, desk fees, errors & omissions coverage and lead sources before signing an independent-contractor agreement.' },
      { title: 'Apply for and activate the licence', description: 'Submit the application, fee, exam results, education certificates and broker sponsorship to the commission. Once issued, note your first renewal date and any post-licensing education that must be completed inside the initial licence period.' }
    ],
    providersNote:
      'Every state real estate commission publishes a searchable list of approved pre-licensing schools and approved course providers on its own website — that list is the only authoritative source, because a course sold as "nationally accepted" may not be approved in your state. National online providers such as The CE Shop, Kaplan, Colibri/Real Estate Express and Aceable hold approvals in many but not all states, so verify the specific state approval before purchasing. Where a per-state fee is shown below it is the total the state itself collects — application, examination and fingerprinting — and excludes course tuition, E&O insurance and REALTOR® dues; boards revise these schedules regularly, so treat the figure as a budgeting estimate and confirm on the board\u2019s own fee page.',
    faqs: [
      {
        q: 'Is a "real estate agent" the same as a "Realtor"?',
        a: 'No. "Real estate agent" describes anyone holding a state salesperson or broker licence. "REALTOR®" is a registered trademark for a licensee who has also joined the National Association of REALTORS® through a local board and agreed to its Code of Ethics. Membership is voluntary in law, though many brokerages require it because MLS access is usually tied to it.'
      },
      {
        q: 'Can I use my salesperson licence in another state?',
        a: 'There is no interstate compact for real estate licensing. Some states have formal reciprocity or licence-recognition agreements that waive the national portion of the exam or the pre-licensing hours for an out-of-state licensee in good standing; others require you to start over. A few states have no agreements at all. Always check the target state\u2019s commission, and note that reciprocity is often conditional on holding a licence in the state where you actually reside.'
      },
      {
        q: 'Why do some states not have a salesperson licence?',
        a: 'Colorado, Illinois, Indiana, New Mexico, North Carolina, Oregon, South Dakota, Tennessee and Washington all retired the salesperson title and now issue a broker-style credential (Broker, Broker Associate, Associate Broker, Provisional Broker or Affiliate Broker) to brand-new licensees, who still work under a supervising Managing, Principal, Employing, Responsible or Qualifying Broker. The scope of practice is the same as a salesperson licence elsewhere — only the name changed.'
      },
      {
        q: 'How hard is the salesperson exam?',
        a: 'First-time pass rates published by state commissions typically fall between 50% and 70%, and the state-law portion is where most candidates fail. The national portion rewards vocabulary and maths practice (proration, commission splits, area calculations); the state portion rewards memorising that state\u2019s specific timelines, agency disclosure forms and trust-account rules. Most states allow unlimited retakes, but passing scores expire — commonly after 6 to 24 months.'
      },
      {
        q: 'Do I need errors & omissions insurance?',
        a: 'Several states, including Colorado, Iowa, Kentucky, Louisiana, Mississippi, Montana, Nebraska, New Mexico, North Dakota, South Dakota, Tennessee and Wyoming, make E&O coverage a condition of an active licence and offer a state group policy. In the remaining states it is not a licensing requirement, but nearly every brokerage requires it contractually.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'Real estate licensing has no interstate compact. Portability is handled through bilateral reciprocity, licence-recognition or "waiver of the national exam portion" agreements negotiated state by state, and these change frequently. Confirm current agreements directly with the commission in the state you are moving to before assuming any credit for your existing licence.'
    },

    defaultAgency: 'State Real Estate Commission',
    sourceUrl: 'https://www.arello.org/regulatory-agencies/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Real Estate Commission (AREC)', agencyUrl: 'https://arec.alabama.gov', fee: '≈$328.25 in state fees', note: 'Minimum age 19. 60 pre-licensing hours; a temporary licence is issued first and 30 hours of post-licensing must be completed within 12 months to convert it to a permanent licence.', compactMember: false },
      AK: { agency: 'Alaska Real Estate Commission, Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/professionallicensing/realestatecommission.aspx', fee: '≈$490 in state fees', note: '40 pre-licensing hours, the lowest in the country, but 30 hours of post-licensing education are required within the first licence period.', compactMember: false },
      AZ: { agency: 'Arizona Department of Real Estate (ADRE)', agencyUrl: 'https://azre.gov', fee: '≈$204 in state fees', note: '90 pre-licensing hours plus a separate 6-hour Contract Writing course; a fingerprint clearance card from DPS is required.', compactMember: false },
      AR: { agency: 'Arkansas Real Estate Commission (AREC)', agencyUrl: 'https://arec.arkansas.gov', fee: '≈$236.25 in state fees', note: '60 pre-licensing hours; 18 additional post-licensing hours are due within 12 months of the initial licence.', compactMember: false },
      CA: { agency: 'California Department of Real Estate (DRE)', agencyUrl: 'https://www.dre.ca.gov', fee: '≈$499 in state fees', note: '135 hours across three statutory college-level courses (Principles, Practice and one elective). California is one of the few states that writes and administers its own exam rather than using PSI or Pearson VUE.', compactMember: false },
      CT: { agency: 'Connecticut Real Estate Commission, Department of Consumer Protection', agencyUrl: 'https://portal.ct.gov/DCP/License-Services-Division/All-License-Applications/Real-Estate-Salesperson-License', fee: '≈$749 in state fees', note: '60 pre-licensing hours. Connecticut has reciprocity agreements with several neighbouring states.', compactMember: false },
      DE: { agency: 'Delaware Real Estate Commission, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/realestate/', fee: '≈$331 in state fees', note: '99 pre-licensing hours; 12 hours of post-licensing education are required in the first renewal cycle.', compactMember: false },
      DC: { agency: 'District of Columbia Real Estate Commission, Department of Licensing and Consumer Protection (DLCP)', agencyUrl: 'https://dlcp.dc.gov/service/real-estate-licensing', fee: '≈$414 in state fees', note: '60 pre-licensing hours. DC recognises licences from Maryland and Virginia under a long-standing regional arrangement; verify current terms with DLCP.', compactMember: false },
      FL: { agency: 'Florida Real Estate Commission (FREC), Department of Business and Professional Regulation', agencyUrl: 'https://www.myfloridalicense.com/DBPR/real-estate-commission/', fee: '≈$149.50 in state fees', note: 'Titled "Sales Associate". 63 pre-licensing hours, then 45 hours of post-licensing before the first renewal. Florida uses mutual recognition rather than full reciprocity — out-of-state licensees still sit a 40-question Florida law exam.', compactMember: false },
      GA: { agency: 'Georgia Real Estate Commission (GREC)', agencyUrl: 'https://grec.state.ga.us', fee: '≈$329.25 in state fees', note: '75 pre-licensing hours plus 25 hours of post-licensing within the first year of licensure.', compactMember: false },
      HI: { agency: 'Hawaii Real Estate Commission, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/reb/', fee: '≈$498 in state fees', note: '60 pre-licensing hours. Licences renew on a fixed two-year cycle ending 31 December of even-numbered years, so a licence issued late in the cycle expires quickly.', compactMember: false },
      ID: { agency: 'Idaho Real Estate Commission (IREC)', agencyUrl: 'https://irec.idaho.gov', fee: '≈$301 in state fees', note: '90 pre-licensing hours delivered as Modules 1 and 2; Idaho requires the Idaho-specific post-licensing "Business Conduct and Office Operations" course in the first two years.', compactMember: false },
      IA: { agency: 'Iowa Real Estate Commission, Professional Licensing Bureau', agencyUrl: 'https://plb.iowa.gov/board/real-estate-commission', fee: '≈$322 in state fees', note: '96 pre-licensing hours (60-hour principles course plus three 12-hour courses) and 36 hours of post-licensing within the first renewal. E&O insurance is mandatory.', compactMember: false },
      KS: { agency: 'Kansas Real Estate Commission (KREC)', agencyUrl: 'https://krec.ks.gov', fee: '≈$377 in state fees', note: '60 pre-licensing hours (30-hour principles plus 30-hour practice). A 30-hour post-licensing course is due within six months of licensure.', compactMember: false },
      KY: { agency: 'Kentucky Real Estate Commission (KREC)', agencyUrl: 'https://krec.ky.gov', fee: '≈$481 in state fees', note: '96 pre-licensing hours. E&O insurance is required and the commission sponsors a group policy.', compactMember: false },
      LA: { agency: 'Louisiana Real Estate Commission (LREC)', agencyUrl: 'https://lrec.gov', fee: '≈$377.75 in state fees', note: '90 pre-licensing hours plus 45 hours of post-licensing education in the first renewal year. E&O insurance is mandatory through the LREC group plan or an approved equivalent.', compactMember: false },
      ME: { agency: 'Maine Real Estate Commission, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/real-estate-brokers', fee: '≈$206 in state fees', note: '55-hour Sales Agent course. Maine\u2019s entry credential is formally titled "Sales Agent" and must be upgraded to Associate Broker within two years by completing a further 60-hour course.', compactMember: false },
      MD: { agency: 'Maryland Real Estate Commission, Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/mrec/', fee: '≈$160 in state fees', note: '60 pre-licensing hours. Maryland, DC and Virginia licensees frequently hold licences in all three jurisdictions; check MREC for current reciprocity terms.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Real Estate Brokers and Salespersons, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-real-estate-brokers-and-salespersons', fee: '≈$270 in state fees', note: '40 pre-licensing hours. Massachusetts has reciprocity with a limited set of states and requires applicants to provide three sponsor signatures on the application.', compactMember: false },
      MI: { agency: 'Michigan Department of Licensing and Regulatory Affairs (LARA), Board of Real Estate Brokers and Salespersons', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/real-estate', fee: '≈$227 in state fees', note: '40 pre-licensing hours including at least 4 hours of civil rights and fair housing law — the lowest requirement in the contiguous United States.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/licensees/real-estate/', fee: '≈$215 in state fees', note: '90 pre-licensing hours delivered as Courses I, II and III; Course I must be completed before sitting the exam and all three before the licence is issued.', compactMember: false },
      MS: { agency: 'Mississippi Real Estate Commission (MREC)', agencyUrl: 'https://www.mrec.ms.gov', fee: '≈$245 in state fees', note: '60 pre-licensing hours plus 30 hours of post-licensing within the first year. E&O insurance is required.', compactMember: false },
      MO: { agency: 'Missouri Real Estate Commission, Division of Professional Registration', agencyUrl: 'https://pr.mo.gov/realestate.asp', fee: '≈$196 in state fees', note: '72 hours total — a 48-hour Missouri Real Estate Practice course plus the 24-hour Missouri Real Estate Practice (MREP) course, which must be taken after passing the exam and before applying.', compactMember: false },
      MT: { agency: 'Montana Board of Realty Regulation, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/realty-regulation/', fee: '≈$222 in state fees', note: '70 pre-licensing hours. New salespersons must complete a supervising-broker mentorship and E&O insurance is mandatory.', compactMember: false },
      NE: { agency: 'Nebraska Real Estate Commission (NREC)', agencyUrl: 'https://nrec.nebraska.gov', fee: '≈$330 in state fees', note: 'Minimum age 19. 60 pre-licensing hours (two 30-hour courses) plus 12 hours of post-licensing in the first year. E&O insurance is required.', compactMember: false },
      NV: { agency: 'Nevada Real Estate Division, Department of Business and Industry', agencyUrl: 'https://red.nv.gov', fee: '≈$305 in state fees', note: '120 pre-licensing hours (raised from 90 in 2022) plus 30 hours of post-licensing in the first year.', compactMember: false },
      NH: { agency: 'New Hampshire Real Estate Commission, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/real-estate-commission', fee: '≈$207 in state fees', note: '40 pre-licensing hours.', compactMember: false },
      NJ: { agency: 'New Jersey Real Estate Commission (NJREC), Department of Banking and Insurance', agencyUrl: 'https://www.nj.gov/dobi/division_rec/', fee: '≈$271.05 in state fees', note: '75 pre-licensing hours, which must be completed within one year and followed by the exam within one year of course completion. New Jersey has no reciprocity agreements with any state.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services', agencyUrl: 'https://dos.ny.gov/real-estate-salesperson', fee: '≈$80 in state fees', note: '77 pre-licensing hours (raised from 75 in 2022 to add implicit-bias and cultural-competency training).', compactMember: false },
      ND: { agency: 'North Dakota Real Estate Commission (NDREC)', agencyUrl: 'https://www.realestatend.org', fee: '≈$351.85 in state fees', note: '90 pre-licensing hours. E&O insurance is mandatory through the commission\u2019s group carrier or an approved equivalent policy.', compactMember: false },
      OH: { agency: 'Ohio Division of Real Estate and Professional Licensing, Department of Commerce', agencyUrl: 'https://com.ohio.gov/divisions-and-programs/real-estate-and-professional-licensing', fee: '≈$214 in state fees', note: '120 pre-licensing hours delivered as four 40-hour college-level courses, plus a 20-hour post-licensing course in the first year.', compactMember: false },
      OK: { agency: 'Oklahoma Real Estate Commission (OREC)', agencyUrl: 'https://oklahoma.gov/orec.html', fee: '≈$270 in state fees', note: 'Entry licence is a "Provisional Sales Associate" — 90 pre-licensing hours, converting to full Sales Associate after a 45-hour post-licensing course within the first year.', compactMember: false },
      PA: { agency: 'Pennsylvania State Real Estate Commission, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/real-estate.html', fee: '≈$178 in state fees', note: '75 pre-licensing hours (30-hour Fundamentals plus 45-hour Practice).', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Division of Commercial Licensing', agencyUrl: 'https://dbr.ri.gov/real-estate', fee: '≈$335 in state fees', note: '45 pre-licensing hours.', compactMember: false },
      SC: { agency: 'South Carolina Real Estate Commission, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/re/', fee: '≈$178 in state fees', note: '90 hours pre-licensing (60-hour Unit I plus 30-hour Unit II) and a 30-hour post-licensing course in the first year.', compactMember: false },
      TX: { agency: 'Texas Real Estate Commission (TREC)', agencyUrl: 'https://www.trec.texas.gov', fee: '≈$297.25 in state fees', note: 'Titled "Sales Agent". 180 pre-licensing hours across six 30-hour courses — the highest in the country — plus 90 hours of post-licensing (SAE) before the first renewal.', compactMember: false },
      UT: { agency: 'Utah Division of Real Estate, Department of Commerce', agencyUrl: 'https://realestate.utah.gov', fee: '≈$238 in state fees', note: '120 pre-licensing hours; the exam must be passed within 12 months of finishing the course.', compactMember: false },
      VT: { agency: 'Vermont Real Estate Commission, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/real-estate-commission/', fee: '≈$160 in state fees', note: '40 pre-licensing hours plus an 8-hour new-licensee course in the first renewal period.', compactMember: false },
      VA: { agency: 'Virginia Real Estate Board, Department of Professional and Occupational Regulation (DPOR)', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Real-Estate', fee: '≈$342 in state fees', note: '60 pre-licensing hours plus a 30-hour post-licence education course within the first year.', compactMember: false },
      WV: { agency: 'West Virginia Real Estate Commission', agencyUrl: 'https://rec.wv.gov', fee: '≈$253.60 in state fees', note: '90 pre-licensing hours. Applicants must be sponsored by a West Virginia broker before the licence is issued.', compactMember: false },
      WI: { agency: 'Wisconsin Department of Safety and Professional Services (DSPS), Real Estate Examining Board', agencyUrl: 'https://dsps.wi.gov/pages/Professions/RealEstateSalesperson/Default.aspx', fee: '≈$125 in state fees', note: '72 pre-licensing hours.', compactMember: false },
      WY: { agency: 'Wyoming Real Estate Commission', agencyUrl: 'https://realestate.wyo.gov', fee: '≈$480 in state fees', note: '54 hours of pre-licensing plus a 30-hour post-licensing requirement. E&O insurance is mandatory.', compactMember: false }
      // OMITTED — these nine jurisdictions do NOT issue a salesperson licence; the entry-level
      // credential is broker-titled and is covered by the real-estate-broker dossier instead:
      // CO (Broker Associate), IL (Broker), IN (Broker), NC (Provisional Broker),
      // NM (Associate Broker), OR (Broker), SD (Broker Associate), TN (Affiliate Broker),
      // WA (Broker).
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. Real Estate Broker
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'real-estate-broker',
    name: 'Real Estate Broker License',
    category: 'real-estate',
    group: 'Real Estate Licensing',
    type: 'License',
    blurb: 'The senior real estate licence that allows you to open your own brokerage, hold escrow funds and supervise other licensees.',

    overview:
      'A real estate broker licence is the supervisory tier of real estate licensing. A broker may operate independently, open a brokerage, hold client funds in a trust or escrow account, and be legally accountable for the conduct of the salespersons or associates working under them. Every jurisdiction issues a broker-level credential, but the naming is inconsistent: in most states "broker" is the senior licence earned after two or more years as a salesperson, while in Colorado, Illinois, Indiana, New Mexico, North Carolina, Oregon, South Dakota, Tennessee and Washington the word "broker" is used for the entry-level licence and the supervisory role carries a different title — Managing Broker, Principal Broker, Employing Broker, Responsible Broker, Qualifying Broker or Broker-in-Charge. Read the per-state note carefully, because a "broker" in Illinois has roughly the same authority as a "salesperson" in Ohio.',
    eligibility:
      'Broker candidates must almost always hold an active salesperson or entry-level licence and have practised for a qualifying period — most commonly two years, though the range runs from one year (for example Alabama) to three years or a set number of completed transactions. Many commissions accept documented transaction volume or points in place of raw time, and several waive part of the experience requirement for applicants holding a bachelor\u2019s degree in real estate. Minimum age is 18 in most states (19 in Alabama and Nebraska), and a fresh fingerprint-based background check is normally required even for existing licensees.',
    exam: {
      admin: 'PSI, Pearson VUE or the state commission',
      questions: '~120–200 total across national and state-law portions',
      time: '3–5 hours',
      pass: 'Typically 70–75%, with the national and state portions scored separately',
      fee: '$50–$150 per attempt',
      format: 'Multiple choice, computer-based; the broker exam adds brokerage management, trust accounting, agency supervision and appraisal/valuation maths on top of the salesperson syllabus'
    },
    education: {
      hours: '45–360 hours of state-approved broker pre-licensing education',
      note: 'Broker education is layered on top of salesperson education and is heavily weighted toward brokerage management, trust-account handling, real estate finance, appraisal and law of agency. Requirements range widely: Texas requires 270 additional qualifying hours plus a 30-hour Real Estate Brokerage course, California requires eight statutory college-level courses, and New York requires 152 hours in total. Broker-entry states such as Colorado (168 hours) and Illinois (75 hours) front-load their hours into the first licence instead.'
    },
    prerequisites:
      'An active entry-level real estate licence held for the state-specified qualifying period (commonly two years or an equivalent transaction count), completion of broker-level qualifying education, a current criminal background check, and — for a broker who will hold client money — proof of a trust or escrow account and, in many states, a surety bond or errors & omissions coverage.',
    costBreakdown: {
      items: [
        { item: 'Broker pre-licensing education', fee: '$400–$1,500' },
        { item: 'Broker licensing exam', fee: '$50–$150 per attempt' },
        { item: 'Fingerprints and background check', fee: '$35–$75' },
        { item: 'Broker licence application', fee: '$100–$400' },
        { item: 'Brokerage/firm licence, if opening your own company', fee: '$100–$500' },
        { item: 'Surety bond or errors & omissions insurance', fee: '$200–$800/yr' }
      ],
      total: '$900–$2,800 depending on state and whether a firm licence is also needed'
    },
    timeline: [
      { stage: 'Accumulate qualifying experience as a salesperson', duration: '1–3 years, set by statute' },
      { stage: 'Broker qualifying education', duration: '2–8 months' },
      { stage: 'Exam and application', duration: '4–10 weeks' },
      { stage: 'Firm/brokerage registration, if forming your own company', duration: '2–6 weeks' }
    ],
    route: [
      { title: 'Verify your experience qualifies', description: 'Most commissions require an experience affidavit signed by your current supervising broker, listing transactions by type and date. Start the log early — reconstructing three years of closings from memory is the most common cause of a rejected broker application.' },
      { title: 'Complete broker-level qualifying education', description: 'Enrol in the specific broker courses your state names in statute. Salesperson continuing education does not count toward broker qualifying hours in any state.' },
      { title: 'Apply for exam authorisation and pass the broker exam', description: 'Expect substantially more trust-accounting arithmetic, agency-supervision scenarios and brokerage-management content than on the salesperson exam. The state portion tests your own commission\u2019s record-keeping, advertising and escrow rules in detail.' },
      { title: 'Decide between associate broker and managing broker status', description: 'Many states let a licensed broker stay affiliated with someone else\u2019s firm as an associate broker. Becoming the broker-of-record or broker-in-charge usually adds a separate designation application, extra experience, and sometimes a dedicated supervision course.' },
      { title: 'Register the brokerage entity if opening your own firm', description: 'A firm or company licence is separate from your personal broker licence. Expect to register the business with the secretary of state, open a dedicated non-interest-bearing trust account, file the account details with the commission, and post any required bond.' },
      { title: 'Set up compliant supervision and record-keeping', description: 'Broker liability is the core of the credential. Put written office policies, transaction file retention (typically 3–7 years), advertising review and monthly trust-account reconciliation in place before your first agent joins.' }
    ],
    providersNote:
      'Broker qualifying courses must be taken from a provider approved by the state commission for the broker level specifically — several states approve schools separately for salesperson and broker education. The commission\u2019s approved-provider search is authoritative. Accredited college real estate courses are accepted for broker credit in a number of states, including California, Ohio and Texas.',
    faqs: [
      {
        q: 'What can a broker do that a salesperson cannot?',
        a: 'A broker can operate independently rather than under someone else\u2019s licence, open and own a brokerage, hold client deposits in a trust or escrow account, and legally supervise other licensees. Brokers also carry vicarious liability for the acts of the agents they supervise, which is why the exam and education focus so heavily on trust accounting and supervision duties.'
      },
      {
        q: 'In my state the entry-level licence is already called "broker" — do I need this one?',
        a: 'In Colorado, Illinois, Indiana, New Mexico, North Carolina, Oregon, South Dakota, Tennessee and Washington the entry licence is broker-titled. The supervisory credential you would need to run your own firm in those states is the Managing Broker, Principal Broker, Employing Broker, Responsible Broker, Qualifying Broker or non-provisional Broker/Broker-in-Charge designation. The per-state note below names the correct upgrade for each.'
      },
      {
        q: 'Can I hold a broker licence in more than one state?',
        a: 'Yes, and it is common in metro areas that straddle state lines. There is no compact, so each state grants credit on its own terms: some waive the national exam portion for an out-of-state broker in good standing, some require the full state exam, and some require you to hold the licence in your state of residence first. Non-resident brokers usually must also file a consent-to-service-of-process and may need an in-state office or affiliated licensee.'
      },
      {
        q: 'Does a broker licence require errors & omissions insurance or a bond?',
        a: 'It depends. Around a dozen states make E&O insurance a condition of an active licence for all licensees, and several more require a surety bond specifically from the broker who controls the trust account. Even where neither is mandated, a broker who holds client escrow money is personally liable for shortfalls, so coverage is standard practice.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for broker licensing. Portability depends on bilateral reciprocity or licence-recognition agreements, which commonly waive only the national portion of the exam and often require that you hold a licence in your state of residence. Verify current terms with the destination state\u2019s commission — agreements are added and withdrawn regularly.'
    },

    defaultAgency: 'State Real Estate Commission',
    sourceUrl: 'https://www.arello.org/regulatory-agencies/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Real Estate Commission (AREC)', agencyUrl: 'https://arec.alabama.gov', note: 'Requires 24 months as an active salesperson plus a 60-hour broker pre-licence course.', fee: '≈$85 exam + $150 license (2 yr)', compactMember: false },
      AK: { agency: 'Alaska Real Estate Commission', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/professionallicensing/realestatecommission.aspx', note: '24 months of licensed experience within the prior 5 years plus a 15-hour broker course.', fee: '≈$255 application + $300 exam + $695 license (2 yr)', compactMember: false },
      AZ: { agency: 'Arizona Department of Real Estate (ADRE)', agencyUrl: 'https://azre.gov', note: '3 years of actual experience as a licensed salesperson or broker in the prior 5 years, plus a 90-hour broker course and a 9-hour Broker Management Clinic.', fee: '≈$75 exam + $1,000 license (2 yr)', compactMember: false },
      AR: { agency: 'Arkansas Real Estate Commission (AREC)', agencyUrl: 'https://arec.arkansas.gov', note: 'Requires an "executive broker" or "principal broker" designation; 24 months of experience in the prior 48 months plus 30 additional hours.', fee: '≈$125 application + $650 license (2 yr)', compactMember: false },
      CA: { agency: 'California Department of Real Estate (DRE)', agencyUrl: 'https://www.dre.ca.gov', note: '2 years of full-time salesperson experience in the prior 5 years (or a qualifying degree) plus eight statutory college-level courses. DRE writes and administers its own broker exam.', fee: '≈$245 exam + $1,305 license (4 yr)', compactMember: false },
      CO: { agency: 'Colorado Division of Real Estate, DORA', agencyUrl: 'https://dora.colorado.gov/division-of-real-estate', note: 'Broker-entry state: the 168-hour Broker licence IS the entry credential. To supervise others you upgrade to Independent Broker or Employing Broker, which requires 2 years of active experience plus a 24-hour Brokerage Administration course — a designation change, not a separate licence class.', fee: '≈$485 broker exam + $780 license (3 yr)', compactMember: false },
      CT: { agency: 'Connecticut Real Estate Commission, Department of Consumer Protection', agencyUrl: 'https://portal.ct.gov/DCP/License-Services-Division/All-License-Applications/Real-Estate-Broker-License', note: '2 years as an active salesperson plus 60 hours of broker courses (Real Estate Brokerage Principles and Practices, Legal Compliance and Appraisal).', fee: '≈$265 exam + $585 license (2 yr)', compactMember: false },
      DE: { agency: 'Delaware Real Estate Commission, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/realestate/', note: '5 years of active salesperson experience plus a 99-hour broker course.', fee: '≈$161 exam + $339 license (2 yr)', compactMember: false },
      DC: { agency: 'District of Columbia Real Estate Commission, DLCP', agencyUrl: 'https://dlcp.dc.gov/service/real-estate-licensing', note: '2 years as a licensed salesperson plus a 135-hour broker course.', fee: '≈$65 application + $170 license + $60 guaranty fund', compactMember: false },
      FL: { agency: 'Florida Real Estate Commission (FREC), DBPR', agencyUrl: 'https://www.myfloridalicense.com/DBPR/real-estate-commission/', note: '24 months as an active sales associate within the prior 5 years, a 72-hour broker course, and 60 hours of post-licensing before the first broker renewal.', fee: '≈$89.75 exam + $730.50 license (2 yr)', compactMember: false },
      GA: { agency: 'Georgia Real Estate Commission (GREC)', agencyUrl: 'https://grec.state.ga.us', note: 'Minimum age 21, 3 years of licensed experience in the prior 5 years, plus a 60-hour broker course.', fee: '≈$115 exam + $225 license (4 yr)', compactMember: false },
      HI: { agency: 'Hawaii Real Estate Commission, DCCA', agencyUrl: 'https://cca.hawaii.gov/reb/', note: '3 years of full-time licensed experience plus a 46-hour broker course.', fee: '≈$75 exam + $625 license (2 yr)', compactMember: false },
      ID: { agency: 'Idaho Real Estate Commission (IREC)', agencyUrl: 'https://irec.idaho.gov', note: '2 years of active licensed experience in the prior 5 years plus Broker Modules; a designated broker must also complete additional office-management education.', fee: '≈$160 exam + $520 license (2 yr)', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation (IDFPR), Division of Real Estate', agencyUrl: 'https://idfpr.illinois.gov/profs/realest.html', note: 'Broker-entry state: the 75-hour "Broker" licence is the entry credential. The supervisory licence is Managing Broker — 2 of the prior 3 years licensed plus a 165-hour managing broker course.', fee: '≈$100 exam + $375 license (2 yr)', compactMember: false },
      IN: { agency: 'Indiana Real Estate Commission, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/real-estate-commission/', note: 'Broker-entry state: since 2014 Indiana issues only "Broker" licences (90 hours). The supervisory credential is Managing Broker — 2 years as an active broker plus a 24-hour managing broker course.', fee: '≈$73 application + $700 license (3 yr)', compactMember: false },
      IA: { agency: 'Iowa Real Estate Commission', agencyUrl: 'https://plb.iowa.gov/board/real-estate-commission', note: '24 months of active salesperson experience in the prior 5 years plus 72 hours of broker education. E&O insurance is mandatory.', fee: '≈$125 exam + $545 license (3 yr)', compactMember: false },
      KS: { agency: 'Kansas Real Estate Commission (KREC)', agencyUrl: 'https://krec.ks.gov', note: '2 years of active salesperson experience in the prior 5 years plus a 24-hour Kansas broker course and a 30-hour Managing Kansas Real Estate Brokerage course.', fee: '≈$50 application + $70 background + $175 license', compactMember: false },
      KY: { agency: 'Kentucky Real Estate Commission (KREC)', agencyUrl: 'https://krec.ky.gov', note: 'Minimum age 21, 2 years of active experience averaging 20 hours per week, plus 21 additional college credit hours or 21 KREC-approved broker hours.', fee: '≈$100 exam + $250 license (2 yr)', compactMember: false },
      LA: { agency: 'Louisiana Real Estate Commission (LREC)', agencyUrl: 'https://lrec.gov', note: '4 years of licensed experience in the prior 5 years plus 150 hours of broker education. E&O insurance is mandatory.', fee: '≈$150 exam + $250 license (2 yr)', compactMember: false },
      ME: { agency: 'Maine Real Estate Commission', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/real-estate-brokers', note: 'Three-tier system: Sales Agent, then Associate Broker (60-hour course), then Designated Broker — which requires 2 years as an associate broker plus a 60-hour designated broker course.', fee: '≈$125 exam + $355 license (2 yr)', compactMember: false },
      MD: { agency: 'Maryland Real Estate Commission, Department of Labor', agencyUrl: 'https://labor.maryland.gov/license/mrec/', note: '3 years of active salesperson experience plus a 135-hour broker course.', fee: '≈$211 original broker license (incl. $20 guaranty fund)', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Real Estate Brokers and Salespersons', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-real-estate-brokers-and-salespersons', note: 'At least 1 year as an active salesperson with a minimum number of hours worked, plus a 40-hour broker course.', fee: '≈$103 exam + $467 license (2 yr)', compactMember: false },
      MI: { agency: 'Michigan Department of Licensing and Regulatory Affairs (LARA)', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/real-estate', note: '3 years of full-time salesperson experience (or equivalent) plus 90 hours of broker education.', fee: '≈$105 exam + $445 license (3 yr)', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/licensees/real-estate/', note: '3 years as an active licensed salesperson plus a 30-hour broker course.', fee: '≈$130 exam + $420 license (2 yr)', compactMember: false },
      MS: { agency: 'Mississippi Real Estate Commission (MREC)', agencyUrl: 'https://www.mrec.ms.gov', note: '12 months as an active salesperson plus 120 hours of broker education.', fee: '≈$100 exam + $400 license (2 yr)', compactMember: false },
      MO: { agency: 'Missouri Real Estate Commission', agencyUrl: 'https://pr.mo.gov/realestate.asp', note: '2 of the prior 3 years as an active licensee plus a 48-hour broker pre-examination course and the 24-hour Missouri Broker Practice course.', fee: '≈$95 exam + $355 license (2 yr)', compactMember: false },
      MT: { agency: 'Montana Board of Realty Regulation', agencyUrl: 'https://boards.bsd.dli.mt.gov/realty-regulation/', note: '2 years of active salesperson experience in the prior 3 years plus 60 hours of broker education. E&O insurance is mandatory.', fee: '≈$105 exam + $455 license (2 yr)', compactMember: false },
      NE: { agency: 'Nebraska Real Estate Commission (NREC)', agencyUrl: 'https://nrec.nebraska.gov', note: '2 years of active salesperson experience plus 60 additional hours. E&O insurance is required.', fee: '≈$130 exam + $470 license (2 yr)', compactMember: false },
      NV: { agency: 'Nevada Real Estate Division', agencyUrl: 'https://red.nv.gov', note: '2 years of active full-time licensed experience plus 64 semester units of real estate/business education, or an equivalent points-based experience record.', fee: '≈$130 exam + $470 license (2 yr)', compactMember: false },
      NH: { agency: 'New Hampshire Real Estate Commission, OPLC', agencyUrl: 'https://www.oplc.nh.gov/real-estate-commission', note: '1 year as an active salesperson plus a 60-hour broker course.', fee: '≈$121 broker application', compactMember: false },
      NJ: { agency: 'New Jersey Real Estate Commission (NJREC)', agencyUrl: 'https://www.nj.gov/dobi/division_rec/', note: '3 years of full-time licensed experience plus 150 hours (90-hour general broker course and two 30-hour courses in agency/ethics and office management). No reciprocity with any state.', fee: '≈$270 Broker of Record application & license', compactMember: false },
      NM: { agency: 'New Mexico Real Estate Commission, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/real-estate-commission/', note: 'Broker-entry state: the 90-hour "Associate Broker" licence is the entry credential. The supervisory licence is Qualifying Broker — 2 years of active experience in the prior 5 plus the Brokerage Office Administration course.', fee: '≈$95 exam + $270 Qualifying Broker license (3 yr)', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services', agencyUrl: 'https://dos.ny.gov/real-estate-broker', note: '2 years as a licensed salesperson (or 3 years of equivalent experience) and 152 total hours of qualifying education, plus a points-based experience record.', fee: '≈$155 application + $860 license (2 yr)', compactMember: false },
      NC: { agency: 'North Carolina Real Estate Commission (NCREC)', agencyUrl: 'https://www.ncrec.gov', note: 'Broker-only state: entry is "Provisional Broker" (75 hours). Provisional status is removed by completing 90 hours of post-licensing within 18 months, producing a full Broker. Supervising a firm requires the separate Broker-in-Charge (BIC) designation — 2 years of full-time experience plus the 12-hour BIC course.', fee: '≈$100 exam + $654 license (2 yr)', compactMember: false },
      ND: { agency: 'North Dakota Real Estate Commission', agencyUrl: 'https://www.realestatend.org', note: '2 years of active licensed experience plus a 90-hour broker course. E&O insurance is mandatory.', fee: '≈$150 application + $13 credit + $40 fingerprint + $20 recovery fund', compactMember: false },
      OH: { agency: 'Ohio Division of Real Estate and Professional Licensing', agencyUrl: 'https://com.ohio.gov/divisions-and-programs/real-estate-and-professional-licensing', note: '2 years as a licensed salesperson with at least 20 transactions, plus 4 additional 40-hour college-level courses.', fee: '≈$104 exam + $446 license (2 yr)', compactMember: false },
      OK: { agency: 'Oklahoma Real Estate Commission (OREC)', agencyUrl: 'https://oklahoma.gov/orec.html', note: '2 of the prior 5 years as an active sales associate plus a 90-hour broker course. Separate Broker Associate, Managing Broker and Proprietor Broker classifications exist.', fee: '≈$100 exam + $450 license (3 yr)', compactMember: false },
      OR: { agency: 'Oregon Real Estate Agency', agencyUrl: 'https://www.oregon.gov/rea', note: 'Broker-entry state: the 150-hour "Broker" licence is the entry credential. The supervisory licence is Principal Broker — 3 years of active experience plus a 40-hour Brokerage Administration and Sales Supervision course.', fee: '≈$225 application + $75 exam + $965 license (2 yr)', compactMember: false },
      PA: { agency: 'Pennsylvania State Real Estate Commission', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/real-estate.html', note: '3 years as a licensed salesperson plus 240 hours (16 credits) of broker education and a points-based experience record.', fee: '≈$129 exam + $621 license (2 yr)', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation', agencyUrl: 'https://dbr.ri.gov/real-estate', note: '2 years as an active salesperson plus a 90-hour broker course.', fee: '≈$105 exam + $445 license (2 yr)', compactMember: false },
      SC: { agency: 'South Carolina Real Estate Commission, LLR', agencyUrl: 'https://llr.sc.gov/re/', note: '3 years of active licensed experience plus 150 hours (Broker A, Broker B and Broker-in-Charge courses). A separate Broker-in-Charge designation is needed to supervise a firm.', fee: '≈$125 exam + $525 license (2 yr)', compactMember: false },
      SD: { agency: 'South Dakota Real Estate Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/realestate/', note: 'Broker-entry state: entry is "Broker Associate". The supervisory licence is Responsible Broker — 2 years of active experience plus the broker management course.', fee: '≈$225 application + $294 exam (3 portions) + $125 license (2 yr)', compactMember: false },
      TN: { agency: 'Tennessee Real Estate Commission (TREC)', agencyUrl: 'https://www.tn.gov/commerce/regboards/trec.html', note: 'Broker-entry state: entry is "Affiliate Broker" (90 hours). Broker requires 3 years as an active affiliate broker plus a 120-hour broker course including the 30-hour Office/Brokerage Management course.', fee: '≈$120 exam + $540 license (2 yr)', compactMember: false },
      TX: { agency: 'Texas Real Estate Commission (TREC)', agencyUrl: 'https://www.trec.texas.gov', note: '4 years of active experience in the prior 5 years, 3,600 experience points, and 270 additional qualifying hours (900 total) including the 30-hour Real Estate Brokerage course.', fee: '≈$305 exam + $743 license (2 yr)', compactMember: false },
      UT: { agency: 'Utah Division of Real Estate', agencyUrl: 'https://realestate.utah.gov', note: '3 years of full-time licensed experience with 60 experience points plus a 120-hour broker course.', fee: '≈$115 exam + $485 license (2 yr)', compactMember: false },
      VT: { agency: 'Vermont Real Estate Commission, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/real-estate-commission/', note: '1 year as an active salesperson plus a 40-hour broker course.', fee: '≈$105 exam + $445 license (2 yr)', compactMember: false },
      VA: { agency: 'Virginia Real Estate Board, DPOR', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Real-Estate', note: '36 months of active licensed experience in the prior 10 years plus 180 hours of broker education.', fee: '≈$135 exam + $565 license (2 yr)', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing', agencyUrl: 'https://dol.wa.gov/professional-licenses/real-estate-brokers', note: 'Broker-entry state: the 90-hour "Broker" licence is the entry credential. The supervisory licence is Managing Broker — 3 years of full-time experience in the prior 5 plus 90 hours of managing-broker education.', fee: '≈$138.25 exam + $1,056 license (2 yr)', compactMember: false },
      WV: { agency: 'West Virginia Real Estate Commission', agencyUrl: 'https://rec.wv.gov', note: '2 years of active salesperson experience plus 90 hours of broker education.', fee: '≈$25 application + $96 exam + $150 license/yr', compactMember: false },
      WI: { agency: 'Wisconsin DSPS, Real Estate Examining Board', agencyUrl: 'https://dsps.wi.gov/pages/Professions/RealEstateBroker/Default.aspx', note: '72-hour broker pre-licence course; Wisconsin does not impose a fixed years-of-experience requirement for the broker exam.', fee: '≈$120 exam + $480 license (2 yr)', compactMember: false },
      WY: { agency: 'Wyoming Real Estate Commission', agencyUrl: 'https://realestate.wyo.gov', note: '2 years of active licensed experience in the prior 5 years plus 64 hours of broker education. E&O insurance is mandatory.', fee: '≈$225 application + $300 exam + $740 license (2 yr)', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. Certified Residential Real Estate Appraiser
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'real-estate-appraiser',
    name: 'Certified Residential Real Property Appraiser Credential',
    category: 'real-estate',
    group: 'Appraisal & Valuation',
    type: 'License',
    blurb: 'The AQB-compliant credential that lets you appraise any one-to-four unit residential property regardless of value or complexity.',

    overview:
      'The Certified Residential Real Property Appraiser credential authorises the holder to appraise one-to-four unit residential properties without regard to transaction value or complexity, including the vacant land whose highest and best use is one-to-four unit residential. It sits above the Trainee and Licensed Residential credentials and below Certified General, which adds commercial property. Unlike most occupational licences, appraiser credentialing is federally anchored: Title XI of the Financial Institutions Reform, Recovery, and Enforcement Act (FIRREA) requires every state and territory to run an appraiser regulatory programme whose criteria are no less stringent than the Real Property Appraiser Qualification Criteria issued by the Appraiser Qualifications Board (AQB) of The Appraisal Foundation, with federal oversight from the Appraisal Subcommittee (ASC). That is why all 50 states and the District of Columbia issue this credential and why the education, experience and examination requirements are nearly identical everywhere.',
    eligibility:
      'Applicants must satisfy the AQB college-education requirement through one of five routes: a bachelor\u2019s degree in any field; an associate degree in business administration, accounting, finance, economics or real estate; 30 semester hours of specified college coursework; 30 semester hours of qualifying CLEP examinations; or a combination of the last two. A separate route exists for appraisers who have held a Licensed Residential credential in good standing for at least five years, who may upgrade without any college coursework by completing the additional qualifying education and experience. All applicants must complete 200 hours of AQB core-curriculum qualifying education, log 1,500 hours of supervised experience over no fewer than 12 months, and pass a background check administered by the state board.',
    exam: {
      admin: 'PSI or Pearson VUE under contract to the state appraiser board; the examination itself is the AQB-approved national Certified Residential Real Property Appraiser Examination',
      questions: '125 scored questions plus unscored pretest items',
      time: '4 hours',
      pass: 'Scaled score set by the AQB/exam vendor; states do not set their own cut score',
      fee: '$150–$400 depending on the state\u2019s vendor contract',
      format: 'Multiple choice, computer-based, closed book except for a permitted non-programmable calculator. Passing the Certified General examination is the only accepted alternative.'
    },
    education: {
      hours: '200 creditable hours of AQB core-curriculum qualifying education',
      note: 'The 200 hours comprise Basic Appraisal Principles (30), Basic Appraisal Procedures (30), the 15-hour National USPAP Course, Residential Market Analysis and Highest and Best Use (15), Residential Appraiser Site Valuation and Cost Approach (15), Residential Sales Comparison and Income Approaches (30), Residential Report Writing and Case Studies (15), Statistics/Modeling and Finance (15), Advanced Residential Applications and Case Studies (15) and electives. Effective 1 January 2026 the AQB Criteria add a mandatory 8-hour Valuation Bias and Fair Housing Laws and Regulations course, and several states also require a 4-hour supervisor/trainee course before experience hours may be logged.'
    },
    prerequisites:
      'One of the five AQB college-education options (or the five-year Licensed Residential upgrade route); 200 hours of qualifying education; 1,500 hours of appraisal experience obtained over at least 12 months under a Certified Residential or Certified General supervisory appraiser who has been credentialed in good standing for at least three years; and a documented, signed experience log.',
    costBreakdown: {
      items: [
        { item: '200 hours of qualifying education', fee: '$1,500–$3,500' },
        { item: 'Supervisor/trainee course (where required)', fee: '$50–$150' },
        { item: 'Trainee credential application', fee: '$100–$400' },
        { item: 'National Certified Residential examination', fee: '$150–$400' },
        { item: 'Certified Residential application and initial credential', fee: '$200–$600' },
        { item: 'Federal ASC national registry fee', fee: '$80/yr (statutory)' },
        { item: 'Background check and fingerprints', fee: '$35–$75' }
      ],
      total: '$2,300–$5,200 spread across two to three years'
    },
    timeline: [
      { stage: 'Qualifying education (200 hours)', duration: '6–18 months part-time' },
      { stage: 'Trainee credential and finding a supervisory appraiser', duration: '1–6 months — often the hardest step' },
      { stage: 'Logging 1,500 supervised experience hours', duration: 'Minimum 12 months; 18–30 months is typical part-time' },
      { stage: 'National examination and final application', duration: '2–4 months' }
    ],
    route: [
      { title: 'Meet the AQB college-education requirement', description: 'Confirm which of the five options you satisfy before spending anything on appraisal courses. A bachelor\u2019s degree in any subject is the simplest route; otherwise map your transcript against the 30-semester-hour topic list or plan CLEP examinations.' },
      { title: 'Complete the Trainee education and obtain a trainee credential', description: 'Most states require Basic Appraisal Principles, Basic Appraisal Procedures, the 15-hour National USPAP course and, from 2026, the 8-hour Valuation Bias and Fair Housing course before issuing a trainee credential. You cannot log experience hours before the trainee credential is active.' },
      { title: 'Find a supervisory appraiser', description: 'Your supervisor must hold a Certified Residential or Certified General credential in good standing for at least three years and must complete the AQB supervisor course. Finding one is the single biggest bottleneck in the profession; appraisal management companies, regional appraisal firms, assessors\u2019 offices and state coalitions are the usual routes.' },
      { title: 'Complete the remaining qualifying education to 200 hours', description: 'Work through the advanced residential, statistics/modeling/finance and report-writing courses. Course completion certificates typically remain valid for five years, so sequence them against your experience timeline.' },
      { title: 'Log 1,500 hours of experience over at least 12 months', description: 'Keep a contemporaneous log recording date, property address, property type, hours claimed and the specific tasks performed, countersigned by your supervisor. State boards audit these logs closely and vague entries are the most common reason applications are returned.' },
      { title: 'Pass the national examination and apply for the credential', description: 'Sit the AQB-approved Certified Residential examination at a PSI or Pearson VUE centre, then submit your application, log, education certificates and fee to the state appraiser board. Once issued, you appear on the ASC National Registry and owe the annual federal registry fee.' },
      { title: 'Consider the PAREA alternative', description: 'The Practical Applications of Real Estate Appraisal (PAREA) programme, adopted in a growing number of states, lets candidates substitute a simulated-practicum programme for part or all of the supervised experience requirement. Check whether your state board has approved PAREA before assuming it is available.' }
    ],
    providersNote:
      'Qualifying education must come from a provider whose courses are approved by the AQB through the Course Approval Program (CAP) or approved directly by your state appraiser board — the board\u2019s approved-course list is authoritative. McKissock, Appraisal Institute, Hondros and the various state appraiser coalitions are the most widely approved providers. The Appraisal Foundation publishes the current Criteria, and the ASC maintains the National Registry plus a directory of every state appraiser regulatory agency. Because Title XI forces every jurisdiction onto the same AQB floor, the per-state entries below carry a note only where that jurisdiction actually departs from the national criteria or has a live rule change in flight; a state with no note was checked and found to track the AQB criteria as written.',
    faqs: [
      {
        q: 'Why are appraiser requirements almost identical in every state?',
        a: 'Because Title XI of FIRREA (1989) requires each state to maintain an appraiser certification programme that is no less stringent than the AQB Real Property Appraiser Qualification Criteria, with the federal Appraisal Subcommittee monitoring compliance. States may add requirements — extra hours, a state law exam, fingerprinting — but they cannot fall below the national floor.'
      },
      {
        q: 'Do I really need a college degree?',
        a: 'For Certified Residential you need one of five education options, and a bachelor\u2019s degree in any field is only the first. An associate degree in business, accounting, finance, economics or real estate works, as do 30 semester hours of specified coursework or qualifying CLEP examinations. There is also a no-college route for someone who has held a Licensed Residential credential in good standing for five years. Certified General, by contrast, requires a bachelor\u2019s degree with no alternative.'
      },
      {
        q: 'What is the difference between Licensed Residential and Certified Residential?',
        a: 'Licensed Residential is limited to non-complex one-to-four unit properties under a $1,000,000 transaction value (and complex ones at $400,000 or less), needs 150 hours of education and 1,000 experience hours, and has no college requirement. Certified Residential covers any one-to-four unit property regardless of value or complexity, needs 200 hours and 1,500 experience hours, and is effectively the minimum for FHA and VA appraisal panels.'
      },
      {
        q: 'Can my credential transfer to another state?',
        a: 'There is no compact, but because every state implements the same AQB floor, reciprocity is unusually smooth. Most states grant reciprocity to an appraiser holding a credential of the same or higher level in good standing in another state, subject to an application fee, a background check and sometimes a state law/USPAP supplement. Your credential status is publicly verifiable on the ASC National Registry, which is what receiving states check.'
      },
      {
        q: 'Is there a way around the supervised-experience bottleneck?',
        a: 'Increasingly, yes. PAREA — the Practical Applications of Real Estate Appraisal programme approved by the AQB — allows a candidate to complete a structured simulated practicum in place of some or all of the 1,500 supervised hours. Adoption is state by state, so confirm with your board. Some states also count assessment, review or agency appraisal work toward the requirement.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'Appraisal has no interstate compact, but Title XI/AQB harmonisation makes it the most portable credential in this batch. Most state boards issue a reciprocal credential to an appraiser holding an equivalent or higher credential in good standing elsewhere, and the federal ASC National Registry provides the verification receiving states rely on. Temporary practice permits for a single out-of-state assignment are also available in essentially every jurisdiction under Title XI.'
    },

    defaultAgency: 'State Real Estate Appraiser Board',
    sourceUrl: 'https://www.asc.gov/appraiser-qualifications',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Real Estate Appraisers Board (AREAB)', agencyUrl: 'https://reab.alabama.gov', note: 'Alabama Real Estate Appraisers Board (AREAB) administers all four AQB credential levels and meets the AQB minimums without added education hours. Licenses renew every 2 years with 28 CE hours (7 per year; trainees 14 including the 7-hour National USPAP Update). Alabama issues per-assignment temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      AK: { agency: 'Alaska Board of Certified Real Estate Appraisers', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/professionallicensing/boardofcertifiedrealestateappraisers.aspx', note: 'Alaska Board of Certified Real Estate Appraisers sets no education above AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Alaska grants temporary permits for out-of-state appraisers on federally related transactions and requires a Board-approved supervisor agreement for trainees.', compactMember: false },
      AZ: { agency: 'Arizona State Board of Appraisal', agencyUrl: 'https://appraisal.az.gov', note: 'Arizona State Board of Appraisal follows AQB minimums with no added hours. Licenses renew every 2 years on the licensee birthday with 28 CE hours (14 for trainees). Arizona requires a Board-approved 4-hour Arizona law and rule course within renewal CE. Temporary permits are issued per assignment for non-resident Certified appraisers.', compactMember: false },
      AR: { agency: 'Arkansas Appraiser Licensing and Certification Board', agencyUrl: 'https://alcb.arkansas.gov', note: 'Arkansas Appraiser Licensing and Certification Board adheres to AQB minimums. Renewal is biennial with 28 CE hours (7 per year; trainees 14). Arkansas offers a temporary practice permit for out-of-state appraisers performing a single assignment and requires a supervising appraiser for trainees per AQB.', compactMember: false },
      CA: { agency: 'California Bureau of Real Estate Appraisers (BREA)', agencyUrl: 'https://www.brea.ca.gov', note: 'California Bureau of Real Estate Appraisers (BREA) EXCEEDS AQB: it requires 56 hours of continuing education per 4-year renewal cycle (vs. the typical 28 over 2 years) plus a 4-hour California appraiser law course, and a 4-hour supervisor training for trainee supervision. BREA also licenses appraisal management companies. Temporary permits are granted for out-of-state appraisers on federal assignments.', compactMember: false },
      CO: { agency: 'Colorado Board of Real Estate Appraisers, Division of Real Estate (DORA)', agencyUrl: 'https://dora.colorado.gov/division-of-real-estate', note: 'Colorado Board of Real Estate Appraisers (DORA) EXCEEDS AQB: Licensed Residential requires 158 qualifying hours and it adds a 3-hour Colorado law course plus a 4-hour supervisor/trainee course. Renewal is biennial with 28 CE hours (15 for trainees, including the 7-hour USPAP). Colorado issues temporary permits for non-resident Certified appraisers.', compactMember: false },
      CT: { agency: 'Connecticut Real Estate Appraisal Commission, Department of Consumer Protection', agencyUrl: 'https://portal.ct.gov/DCP/License-Services-Division/All-License-Applications/Real-Estate-Appraiser-Licenses', note: 'Connecticut Real Estate Appraisal Commission follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year). Connecticut requires trainees to register a supervisory appraiser before logging experience and offers temporary practice permits for out-of-state Certified appraisers on a per-assignment basis.', compactMember: false },
      DE: { agency: 'Delaware Council on Real Estate Appraisers, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/realestateappraisers/', note: 'Delaware Council on Real Estate Appraisers follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Delaware issues temporary practice permits allowing an out-of-state Certified appraiser to complete a specific assignment without full licensure, and requires a Board-approved supervisor agreement for trainees.', compactMember: false },
      DC: { agency: 'District of Columbia Board of Real Estate Appraisers, DLCP', agencyUrl: 'https://dlcp.dc.gov/service/real-estate-appraiser-licensing', note: 'District of Columbia Board of Real Estate Appraisers follows AQB minimums. Licenses renew biennially with 28 CE hours (14 for trainees). DC issues temporary permits for out-of-state Certified appraisers on federal or per-assignment work and requires trainees to file a supervision plan with the Board.', compactMember: false },
      FL: { agency: 'Florida Real Estate Appraisal Board (FREAB), DBPR', agencyUrl: 'https://www.myfloridalicense.com/DBPR/real-estate-appraisal-board/', note: 'Florida Real Estate Appraisal Board (FREAB) follows AQB minimums but adds a 2-hour Florida laws and rules course within the 28-hour biennial CE; trainees need 14 hours. Florida licenses AMCs and requires a 4-hour Florida-specific law module for initial licensure. Temporary permits are available for out-of-state Certified appraisers.', compactMember: false },
      GA: { agency: 'Georgia Real Estate Appraisers Board', agencyUrl: 'https://grec.state.ga.us/appraisers/', note: 'Georgia Real Estate Appraisers Board follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year; trainees 14). Georgia requires trainees to register a supervisor and log experience through the national registry. Georgia issues per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false },
      HI: { agency: 'Hawaii Real Estate Appraiser Program, DCCA Professional and Vocational Licensing', agencyUrl: 'https://cca.hawaii.gov/pvl/programs/reappraiser/', note: 'Hawaii Real Estate Appraiser Program follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). Hawaii issues temporary practice permits for out-of-state Certified appraisers performing a single assignment and accepts AQB-equivalent experience for all four levels.', compactMember: false },
      ID: { agency: 'Idaho Real Estate Appraiser Board, Division of Occupational and Professional Licenses', agencyUrl: 'https://dopl.idaho.gov/rea/', note: 'Idaho Real Estate Appraiser Board follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). Idaho requires a 4-hour supervisor/trainee course for trainee certification and offers temporary permits for out-of-state Certified appraisers on a per-assignment basis.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Real Estate Appraisal Division', agencyUrl: 'https://idfpr.illinois.gov/profs/appraisal.html', note: 'Illinois DFPR Real Estate Appraisal Division follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Illinois requires appraisers to complete a 3-hour Illinois appraiser law course as part of CE and issues temporary permits for out-of-state Certified appraisers on federal assignments.', compactMember: false },
      IN: { agency: 'Indiana Real Estate Appraiser Licensure and Certification Board, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/real-estate-appraiser-licensure-and-certification-board/', note: 'Indiana Real Estate Appraiser Licensure and Certification Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year; trainees 14). Indiana issues temporary practice permits for non-resident Certified appraisers per assignment and requires a registered supervisory appraiser for trainees.', compactMember: false },
      IA: { agency: 'Iowa Real Estate Appraiser Examining Board', agencyUrl: 'https://plb.iowa.gov/board/real-estate-appraiser-examining-board', note: 'Iowa Real Estate Appraiser Examining Board EXCEEDS AQB: Certified Residential requires 200 qualifying hours (vs. 150) and it adds a 4-hour Iowa law course. Renewal is biennial with 28 CE hours (15 for trainees). Iowa grants temporary permits for out-of-state Certified appraisers.', compactMember: false },
      KS: { agency: 'Kansas Real Estate Appraisal Board', agencyUrl: 'https://krea.ks.gov', note: 'Kansas Real Estate Appraisal Board follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). Kansas requires trainees to complete a 4-hour supervisor/trainee course and issues temporary practice permits for out-of-state Certified appraisers on a single-assignment basis.', compactMember: false },
      KY: { agency: 'Kentucky Real Estate Appraisers Board', agencyUrl: 'https://kreab.ky.gov', note: 'Kentucky Real Estate Appraisers Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). Kentucky requires a registered supervisor for trainees and offers per-assignment temporary permits for out-of-state Certified appraisers; Kentucky also licenses AMCs under state law.', compactMember: false },
      LA: { agency: 'Louisiana Real Estate Appraisers Board (LREAB)', agencyUrl: 'https://www.lreab.gov/become-licensed/certified-residential-appraiser', note: 'Louisiana Real Estate Appraisers Board (LREAB) EXCEEDS AQB: Trainee requires 83 qualifying hours and Licensed Residential 158 (vs. 75/150), and it adds a 4-hour Louisiana law course. Renewal is biennial with 28 CE hours (15 for trainees). Louisiana issues temporary permits for out-of-state Certified appraisers.', compactMember: false },
      ME: { agency: 'Maine Board of Real Estate Appraisers, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/real-estate-appraisers', note: 'Maine Board of Real Estate Appraisers follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). Maine requires trainees to register a supervisory appraiser and offers temporary practice permits for out-of-state Certified appraisers on a per-assignment basis.', compactMember: false },
      MD: { agency: 'Maryland Commission of Real Estate Appraisers, Appraisal Management Companies and Home Inspectors', agencyUrl: 'https://labor.maryland.gov/license/reappr/', note: 'Maryland Commission of Real Estate Appraisers EXCEEDS AQB on CE: it requires 42 continuing education hours per 2-year cycle (vs. 28) plus a 3-hour Maryland law course. All four levels otherwise follow AQB education minimums. Maryland issues temporary permits for out-of-state Certified appraisers and licenses AMCs.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Real Estate Appraisers, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-real-estate-appraisers', note: 'Massachusetts Board of Registration of Real Estate Appraisers follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). Massachusetts requires trainees to file a supervisor agreement and offers temporary practice permits for out-of-state Certified appraisers on a per-assignment basis.', compactMember: false },
      MI: { agency: 'Michigan Board of Real Estate Appraisers, LARA', agencyUrl: 'https://www.michigan.gov/lara/bureau-list/bpl/occ/prof/real-estate-appraisers', note: 'Michigan Board of Real Estate Appraisers follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). Michigan requires a 4-hour supervisor/trainee course for trainees and issues temporary permits for out-of-state Certified appraisers performing a single assignment.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/licensees/appraisers/', note: 'Minnesota Department of Commerce appraiser program EXCEEDS AQB on CE: it requires 30 continuing education hours per 2-year renewal (vs. 28) including the 7-hour USPAP course. Education minimums otherwise follow AQB. Minnesota grants temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      MS: { agency: 'Mississippi Real Estate Appraiser Licensing and Certification Board', agencyUrl: 'https://www.mrec.ms.gov/appraisal', note: 'Mississippi Real Estate Appraiser Licensing and Certification Board follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Mississippi requires trainees to register a supervisor and offers per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false },
      MO: { agency: 'Missouri Real Estate Appraisers Commission', agencyUrl: 'https://pr.mo.gov/appraisers.asp', note: 'Missouri codified the 2026 AQB criteria in 20 CSR 2245-6.018; applications postmarked on or after 1 January 2026 must meet the new education standard including the 8-hour valuation bias course. Missouri otherwise follows the AQB minimums, renews licenses biennially with 28 CE hours (trainees 14), and issues per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false },
      MT: { agency: 'Montana Board of Real Estate Appraisers, Department of Labor and Industry', agencyUrl: 'https://boards.bsd.dli.mt.gov/real-estate-appraisers/', note: 'Montana Board of Real Estate Appraisers EXCEEDS AQB on education hours at several levels and adds a 4-hour Montana law and supervisor/trainee course. Renewal is biennial with 28 CE hours (15 for trainees). Montana issues temporary practice permits for out-of-state Certified appraisers on federal and per-assignment work.', compactMember: false },
      NE: { agency: 'Nebraska Real Property Appraiser Board', agencyUrl: 'https://appraiser.nebraska.gov', note: 'Nebraska Real Property Appraiser Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year). Nebraska requires trainees to complete a 4-hour supervisor/trainee course and offers temporary permits for out-of-state Certified appraisers.', compactMember: false },
      NV: { agency: 'Nevada Real Estate Division, Appraisal Section', agencyUrl: 'https://red.nv.gov/Licensee_Information/Appraiser/', note: 'Nevada Real Estate Division Appraisal Section EXCEEDS AQB across all levels: Trainee 78 hours, Licensed Residential 153, Certified Residential 203, Certified General 303, plus 3,600 experience hours. Renewal is biennial with 28 CE hours and a 4-hour Nevada law course. Nevada issues temporary permits for out-of-state Certified appraisers.', compactMember: false },
      NH: { agency: 'New Hampshire Real Estate Appraiser Board, OPLC', agencyUrl: 'https://www.oplc.nh.gov/real-estate-appraiser-board', note: 'New Hampshire Real Estate Appraiser Board EXCEEDS AQB: it requires a 4-hour supervisor/trainee course and adds New Hampshire-specific law education beyond AQB minimums. Renewal is biennial with 28 CE hours (15 for trainees). New Hampshire grants temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      NJ: { agency: 'New Jersey State Board of Real Estate Appraisers, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/rea', note: 'New Jersey State Board of Real Estate Appraisers EXCEEDS AQB: it requires 204 qualifying hours with added New Jersey law education and a 4-hour supervisor/trainee module. Renewal is biennial with 28 CE hours. New Jersey issues temporary permits for out-of-state Certified appraisers.', compactMember: false },
      NM: { agency: 'New Mexico Real Estate Appraisers Board, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/real-estate-appraisers/', note: 'New Mexico Real Estate Appraisers Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). New Mexico requires trainees to register a supervisor and offers per-assignment temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services', agencyUrl: 'https://dos.ny.gov/certified-residential-real-estate-appraiser', note: 'New York Department of State follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). New York requires a 4-hour supervisor/trainee course for trainees and issues temporary permits for out-of-state Certified appraisers on a per-assignment basis; a 2-hour NYS law course is also required within CE.', compactMember: false },
      NC: { agency: 'North Carolina Appraisal Board', agencyUrl: 'https://www.ncappraisalboard.org', note: 'North Carolina Appraisal Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). North Carolina requires trainees to register a supervising appraiser and offers temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      ND: { agency: 'North Dakota Real Estate Appraiser Qualifications and Ethics Board', agencyUrl: 'https://www.ndreab.org', note: 'North Dakota Real Estate Appraiser Qualifications and Ethics Board follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). North Dakota requires a 4-hour supervisor/trainee course and issues temporary permits for out-of-state Certified appraisers on a single-assignment basis.', compactMember: false },
      OH: { agency: 'Ohio Division of Real Estate and Professional Licensing, Appraiser Section', agencyUrl: 'https://com.ohio.gov/divisions-and-programs/real-estate-and-professional-licensing', note: 'Ohio Division of Real Estate Appraiser Section follows AQB minimums. Licenses renew every 3 years with 28 CE hours (7 per year; trainees 14). Ohio requires trainees to register a supervisor and offers temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      OK: { agency: 'Oklahoma Real Estate Appraiser Board, Oklahoma Insurance Department', agencyUrl: 'https://www.oid.ok.gov/licensing-and-education/real-estate-appraisers/', note: 'Oklahoma Real Estate Appraiser Board EXCEEDS AQB on CE: it requires 42 continuing education hours per 3-year renewal cycle plus a 3-hour Oklahoma law course. Education minimums otherwise follow AQB. Oklahoma issues temporary permits for out-of-state Certified appraisers.', compactMember: false },
      OR: { agency: 'Oregon Appraiser Certification and Licensure Board (ACLB)', agencyUrl: 'https://www.oregon.gov/aclb', note: 'Oregon Appraiser Certification and Licensure Board (ACLB) follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Oregon requires a 4-hour supervisor/trainee course for trainees and issues temporary practice permits for out-of-state Certified appraisers on a per-assignment basis.', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Certified Real Estate Appraisers', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/certified-real-estate-appraisers.html', note: 'Pennsylvania State Board of Certified Real Estate Appraisers follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year). Pennsylvania requires trainees to register a supervisory appraiser and offers temporary permits for out-of-state Certified appraisers.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Real Estate Appraisers', agencyUrl: 'https://dbr.ri.gov/real-estate/real-estate-appraisers', note: 'Rhode Island Department of Business Regulation follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). Rhode Island requires a 4-hour supervisor/trainee course and issues temporary practice permits for out-of-state Certified appraisers on a single assignment.', compactMember: false },
      SC: { agency: 'South Carolina Real Estate Appraisers Board, LLR', agencyUrl: 'https://llr.sc.gov/reab/', note: 'South Carolina Real Estate Appraisers Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year). South Carolina requires trainees to register a supervisor and offers per-assignment temporary permits for out-of-state Certified appraisers; South Carolina also licenses AMCs.', compactMember: false },
      SD: { agency: 'South Dakota Appraiser Certification Program, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/appraisers/', note: 'South Dakota Appraiser Certification Program follows AQB minimums. Renewal is biennial with 28 CE hours (14 for trainees). South Dakota issues a $200 temporary permit for out-of-state Certified appraisers to perform a specific assignment and requires a registered supervisor for trainees.', compactMember: false },
      TN: { agency: 'Tennessee Real Estate Appraiser Commission', agencyUrl: 'https://www.tn.gov/commerce/regboards/trea.html', note: 'Tennessee Real Estate Appraiser Commission EXCEEDS AQB on education at multiple levels and adds a 4-hour Tennessee law and supervisor/trainee course. Renewal is biennial with 28 CE hours (15 for trainees). Tennessee grants temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      TX: { agency: 'Texas Appraiser Licensing and Certification Board (TALCB)', agencyUrl: 'https://www.talcb.texas.gov', note: 'Texas Appraiser Licensing and Certification Board (TALCB) EXCEEDS AQB: Trainee 83 and Licensed Residential 158 qualifying hours (vs. 75/150), plus a 4-hour TALCB law course. Trainee supervision requires a 4-hour supervisor course. Texas issues temporary permits for out-of-state Certified appraisers and licenses AMCs.', compactMember: false },
      UT: { agency: 'Utah Division of Real Estate, Appraiser Licensing and Certification Board', agencyUrl: 'https://realestate.utah.gov/appraiser/', note: 'Utah Division of Real Estate Appraiser Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (7 per year). Utah requires a 4-hour supervisor/trainee course for trainees and offers per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false },
      VT: { agency: 'Vermont Real Estate Appraiser Board, Office of Professional Regulation', agencyUrl: 'https://sos.vermont.gov/real-estate-appraisers/', note: 'Vermont requires 204 hours rather than the 200-hour AQB minimum, adding a 4-hour supervisor/trainee course. Renewal is biennial with 28 CE hours (14 for trainees). Vermont issues per-assignment temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      VA: { agency: 'Virginia Real Estate Appraiser Board, DPOR', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Appraisers', note: 'Virginia Real Estate Appraiser Board (DPOR) EXCEEDS AQB: Trainee requires 79 qualifying hours (vs. 75) plus a 4-hour Virginia law and supervisor/trainee course. Renewal is biennial with 28 CE hours (15 for trainees). Virginia issues temporary practice permits for out-of-state Certified appraisers.', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing, Real Estate Appraisers', agencyUrl: 'https://dol.wa.gov/professional-licenses/appraisers', note: 'Washington State Department of Licensing EXCEEDS AQB on education hours at several levels and adds a 4-hour Washington law and supervisor/trainee course. Renewal is biennial with 28 CE hours (15 for trainees). Washington grants temporary permits for out-of-state Certified appraisers.', compactMember: false },
      WV: { agency: 'West Virginia Real Estate Appraiser Licensing and Certification Board', agencyUrl: 'https://www.wvappraiserboard.org', note: 'West Virginia Real Estate Appraiser Licensing and Certification Board follows AQB minimums. Licenses renew every 2 years with 28 CE hours (14 for trainees). West Virginia requires trainees to register a supervisor and offers per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS, Real Estate Appraisers Board', agencyUrl: 'https://dsps.wi.gov/pages/Professions/AppraiserCertifiedResidential/Default.aspx', note: 'Wisconsin DSPS Real Estate Appraisers Board follows AQB minimums. Renewal is biennial with 28 CE hours (7 per year). Wisconsin requires a 4-hour supervisor/trainee course for trainees and issues temporary permits for out-of-state Certified appraisers on a single assignment.', compactMember: false },
      WY: { agency: 'Wyoming Certified Real Estate Appraiser Board', agencyUrl: 'https://realestate.wyo.gov', note: 'The Wyoming appraiser board is administered alongside the Real Estate Commission; confirm the current appraiser-specific page through the ASC directory at asc.gov. Wyoming EXCEEDS AQB on Licensed Residential education (158 hours) and renews credentials biennially with 28 CE hours; it issues per-assignment temporary permits for out-of-state Certified appraisers.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4. Home Inspector
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'home-inspector',
    name: 'Home Inspector License',
    category: 'real-estate',
    group: 'Inspection',
    type: 'License',
    blurb: 'The state licence, certification or registration required to perform residential property condition inspections for compensation.',

    overview:
      'A home inspector performs a non-invasive visual examination of a residential property\u2019s systems and components — roof, structure, exterior, plumbing, electrical, HVAC, insulation, interior and built-in appliances — and issues a written report, almost always during the contingency period of a sale. There is no federal licence and no single national standard; regulation is entirely state by state. Thirty-seven jurisdictions issue a state credential, variously called a licence (most states), a certification (Arizona, Nevada, Oregon, West Virginia) or a registration (Alaska, Arkansas, Montana, Nebraska, North Dakota, Wisconsin, and South Dakota\u2019s entry tier). Fourteen jurisdictions issue no state credential at all, and two of those — Iowa and Pennsylvania — nonetheless impose statutory duties such as mandatory membership of a recognised national inspection association, without any state licence to apply for.',
    eligibility:
      'Typical requirements are a minimum age of 18 (21 in Mississippi), a high school diploma or equivalent, completion of a state-approved training course, a passing score on the National Home Inspector Examination or an approved alternative, and proof of insurance. Nineteen of the regulated jurisdictions make errors & omissions or general liability coverage a condition of licensure, with minimum limits typically between $100,000 and $500,000. Several states add a field-experience component: New Jersey requires 40 hours of supervised field inspections or 250 paid inspections under supervision, North Carolina requires 80 field hours, Texas requires supervised practicum inspections, and South Dakota requires a year and 100 paid inspections to move from Registered to Licensed.',
    exam: {
      admin: 'PSI on behalf of the Examination Board of Professional Home Inspectors in most states; Florida, New York and a few others use a state-specific examination, and North Dakota accepts ASHI, InterNACHI, EBPHI or ICC examinations',
      questions: '200 (NHIE), of which 175 are scored',
      time: '4 hours',
      pass: 'Scaled score set by the Examination Board of Professional Home Inspectors; equates to roughly 70–75% correct',
      fee: '$225 for the NHIE, plus any separate state law component',
      format: 'Multiple choice, computer-based at a PSI test centre, closed book'
    },
    education: {
      hours: '40–200 hours of state-approved pre-licensing education, where required',
      note: 'The range is the widest of any credential in this batch: South Dakota, Connecticut, Montana, Nevada and Wisconsin sit at the 40-hour floor, while North Carolina requires 200 hours and Texas 194 hours across multiple modules. Some registration states — notably Nebraska and North Dakota — impose no education requirement at all, only an examination and insurance. Course approval is state-specific; InterNACHI, ASHI, ICA and Kaplan/AHIT hold approvals in many but not all jurisdictions.'
    },
    prerequisites:
      'Age 18 or over, a high school diploma or equivalent, completion of the state\u2019s approved education hours (where any are mandated), a passing examination score, proof of general liability and/or errors & omissions insurance where required, and a criminal background check in the states that impose one.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing training course', fee: '$400–$1,800 depending on required hours' },
        { item: 'National Home Inspector Examination', fee: '$225' },
        { item: 'State application and initial licence fee', fee: '$80–$600' },
        { item: 'Errors & omissions and general liability insurance', fee: '$1,200–$2,500/yr' },
        { item: 'Inspection tools and report-writing software', fee: '$1,000–$3,500 to start' },
        { item: 'Background check, where required', fee: '$35–$75' }
      ],
      total: '$3,000–$8,000 to become fully operational, of which state fees are a small share'
    },
    timeline: [
      { stage: 'Pre-licensing education', duration: '3 weeks to 4 months' },
      { stage: 'Examination', duration: '2–6 weeks to schedule and pass' },
      { stage: 'Field or supervised inspection requirement, where applicable', duration: '1–6 months' },
      { stage: 'Application, insurance and licence issuance', duration: '2–8 weeks' }
    ],
    route: [
      { title: 'Confirm whether your state issues a credential at all', description: 'Fourteen jurisdictions have no state home inspector licence. If you are in one of them, your path is a business licence plus a voluntary certification; if you are in Iowa or Pennsylvania, note that state law still imposes association-membership and standards-of-practice duties even though there is nothing to apply for.' },
      { title: 'Complete state-approved training', description: 'Take the specific number of hours your board requires from a provider on its approved list. If you intend to work in more than one state, check overlapping approvals before you pay — hours approved in one state frequently do not transfer.' },
      { title: 'Pass the National Home Inspector Examination', description: 'Thirty-five of the regulated states accept the NHIE, delivered by PSI for the Examination Board of Professional Home Inspectors. It covers property and building inspection, analysis and reporting, and professional responsibilities. Florida, New York and a handful of others use their own examination instead.' },
      { title: 'Complete any field or mentorship requirement', description: 'Where required, arrange supervised inspections with a licensed inspector early — like appraisal supervision, this is the most common scheduling bottleneck. Document each inspection with date, address and the supervising inspector\u2019s signature.' },
      { title: 'Obtain the required insurance', description: 'Nineteen states require E&O or general liability coverage as a licensing condition. Buy the policy before you apply, because the certificate of insurance must usually accompany the application and may need to name the state agency as certificate holder.' },
      { title: 'Apply, then set up standards-compliant reporting', description: 'Submit the application with certificates, exam results and insurance. Adopt the standards of practice and code of ethics your state names in rule — most states adopt or closely track the ASHI or InterNACHI standards, and reports that omit required sections are the leading source of complaints.' }
    ],
    providersNote:
      'Each regulating board publishes an approved course-provider list; that list, not a vendor\u2019s marketing, determines whether your hours count. InterNACHI, ASHI, AHIT/Kaplan, ICA and Professional Home Inspection Institute hold approvals in many states, and InterNACHI additionally publishes state-specific pre-licensing pages. For the examination itself, the Examination Board of Professional Home Inspectors (nationalhomeinspectorexam.org) is the authoritative source on where the NHIE is accepted. Where a per-state fee is shown below it is the total collected by the state (application, licence issuance and, where the board charges it, the examination); a trailing "+" means the state publishes further variable components such as endorsement or fingerprinting fees. States in this list with no fee shown do not publish a single consolidated figure — check the board page directly.',
    faqs: [
      {
        q: 'Which states do not license home inspectors?',
        a: 'As of 2026, California, Colorado, the District of Columbia, Georgia, Hawaii, Idaho, Iowa, Kansas, Maine, Michigan, Minnesota, Missouri, Pennsylvania and Wyoming issue no state home inspector credential. California and Georgia regulate inspector conduct through trade-practice statutes without licensing; Pennsylvania\u2019s Home Inspection Law requires membership of a recognised national association instead of a licence; Iowa\u2019s 2025 Home Inspection Accountability Act uses a similar association-membership model; Kansas let its licensing act expire in 2013; and Missouri has enacted licensing that is not yet in force.'
      },
      {
        q: 'Is the National Home Inspector Examination the same everywhere?',
        a: 'The NHIE itself is a single national examination developed by the Examination Board of Professional Home Inspectors and delivered by PSI, and about 35 regulated states accept it. What varies is whether a state also requires a separate state-law or standards-of-practice component, and what score report format the board will accept. Florida and New York use state-specific examinations rather than the NHIE.'
      },
      {
        q: 'Does an InterNACHI or ASHI certification substitute for a state licence?',
        a: 'No, except in the narrow cases where a state names association membership as the requirement. InterNACHI CPI and ASHI Certified Inspector are voluntary private credentials. In licensing states you still need the state licence; in Pennsylvania and Iowa, membership of a qualifying association is what the statute actually requires; and in fully unregulated states the certification is what buyers and agents use as a quality signal.'
      },
      {
        q: 'Can I inspect in a neighbouring state on my existing licence?',
        a: 'Not automatically — there is no home inspector compact and no national licence. Each licensing state requires its own credential. A minority of boards offer reciprocity or endorsement where the other state\u2019s requirements are substantially equivalent, but several, including Texas and North Carolina, effectively require you to meet their own education and examination standards from scratch.'
      },
      {
        q: 'How much insurance do I actually need?',
        a: 'Where the state sets a floor it is usually $100,000 per occurrence for E&O and general liability (Montana, Nevada, North Dakota), rising to $250,000 in Mississippi and $500,000 in New Jersey. Those are minimums for licensure, not a realistic assessment of exposure — most working inspectors carry higher limits, and brokerages and franchise networks often require $1,000,000.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact and no national home inspector licence. A handful of boards grant reciprocity or licensure by endorsement to inspectors credentialed in a state with substantially equivalent requirements, but the heavily regulated states generally require their own education, field work and examination. Plan on a separate credential for each state you intend to work in.'
    },

    defaultAgency: 'State home inspector licensing board',
    sourceUrl: 'https://www.nationalhomeinspectorexam.org',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Building Commission, Home Inspector Licensing', agencyUrl: 'https://bc.alabama.gov', fee: '$525+ in state fees', note: '120 hours plus the NHIE; E&O insurance required; annual renewal.', compactMember: false },
      AK: { agency: 'Alaska Division of Corporations, Business and Professional Licensing', agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/professionallicensing/homeinspectors.aspx', fee: '$575+ in state fees', note: 'Registration rather than licence; Associate Home Inspector tier available. Insurance required and a $10,000 bond applies.', compactMember: false },
      AZ: { agency: 'Arizona Board of Technical Registration', agencyUrl: 'https://btr.az.gov', fee: '≈$550 in state fees', note: 'Certified Home Inspector: 84 hours plus ride-along inspections and the NHIE.', compactMember: false },
      AR: { agency: 'Arkansas Home Inspector Registration Board', agencyUrl: 'https://www.arkansas.gov/hirb/', fee: '$475+ in state fees', note: 'Registration: 80 hours, NHIE and a background check; annual renewal by 31 December.', compactMember: false },
      CT: { agency: 'Connecticut Home Inspection Licensing Board, Department of Consumer Protection', agencyUrl: 'https://portal.ct.gov/DCP/License-Services-Division/All-License-Applications/Home-Inspector-Licensing', fee: '≈$465 in state fees', note: 'Two-tier: Home Inspector Intern permit, then licence after an apprenticeship or 100 inspections plus the NHIE. 40 education hours.', compactMember: false },
      DE: { agency: 'Delaware Board of Home Inspectors, Division of Professional Regulation', agencyUrl: 'https://dpr.delaware.gov/boards/homeinspectors/', fee: '≈$505 in state fees', note: '140 hours plus the NHIE and a background check; a Home Inspector Trainee registration is the prerequisite path.', compactMember: false },
      FL: { agency: 'Florida Department of Business and Professional Regulation', agencyUrl: 'https://www.myfloridalicense.com/DBPR/professions/home-inspectors/', fee: '≈$540 in state fees', note: '120 hours; Florida uses its own state examination rather than the NHIE. Biennial renewal.', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation', agencyUrl: 'https://idfpr.illinois.gov/profs/homeinspect.html', fee: '$250+ in state fees', note: '60 hours plus 5 supervised inspections and the state examination.', compactMember: false },
      IN: { agency: 'Indiana Home Inspectors Licensing Board, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/home-inspectors-licensing-board/', fee: '≈$275 in state fees', note: '60 hours plus the NHIE; biennial renewal expiring 1 October of odd-numbered years.', compactMember: false },
      KY: { agency: 'Kentucky Board of Home Inspectors', agencyUrl: 'https://bhi.ky.gov', fee: '≈$455 in state fees', note: '64 hours plus the NHIE.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Home Inspectors', agencyUrl: 'https://www.lsbhi.com', fee: '$425+ in state fees', note: '90 hours plus the NHIE and a mentorship requirement; E&O insurance required; annual renewal.', compactMember: false },
      MD: { agency: 'Maryland Commission of Real Estate Appraisers, Appraisal Management Companies and Home Inspectors', agencyUrl: 'https://labor.maryland.gov/license/homeinspect/', fee: '≈$600 in state fees', note: '72 hours plus the NHIE.', compactMember: false },
      MA: { agency: 'Massachusetts Board of Registration of Home Inspectors, Division of Occupational Licensure', agencyUrl: 'https://www.mass.gov/orgs/board-of-registration-of-home-inspectors', fee: '≈$615 in state fees', note: '75 hours plus 25 supervised inspections and an examination; associate-to-full inspector progression; insurance required.', compactMember: false },
      MS: { agency: 'Mississippi Home Inspector Board (administered with the Mississippi Real Estate Commission)', agencyUrl: 'https://www.mrec.ms.gov', fee: '≈$725 in state fees', note: 'Minimum age 21; 60 hours plus the NHIE; $250,000 general liability and $250,000 E&O coverage required.', compactMember: false },
      MT: { agency: 'Montana Department of Labor and Industry, Business Standards Division', agencyUrl: 'https://boards.bsd.dli.mt.gov', fee: '≈$305 in state fees (incl. $80 application)', note: 'Registration in force since 1 January 2020: 40 hours or an approved national examination, national association membership, $100,000 general liability and $100,000 E&O coverage, and an $80 application fee.', compactMember: false },
      NE: { agency: 'Nebraska Secretary of State, Licensing Division', agencyUrl: 'https://sos.nebraska.gov', fee: '≈$300 in state fees', note: 'Registration only, required since 1 January 2023. Nebraska mandates no pre-licensing education, no examination and no continuing education — inspectors simply register before performing inspections. Confidence medium on the current fee.', compactMember: false },
      NV: { agency: 'Nevada Real Estate Division, Department of Business and Industry', agencyUrl: 'https://red.nv.gov/Licensee_Information/Inspectors/', note: 'Certificate as an Inspector of Structures: 40 hours, observation of 25 inspections, the state Inspector of Structures examination, and $100,000 in E&O and general liability. Application fee approximately $365.', fee: '~$365', compactMember: false },
      NH: { agency: 'New Hampshire Board of Home Inspectors, Office of Professional Licensure and Certification', agencyUrl: 'https://www.oplc.nh.gov/home-inspectors', note: '80 hours plus the NHIE or an approved equivalent, proof of liability insurance, and a $200 fee.', fee: '$200', compactMember: false },
      NJ: { agency: 'New Jersey Home Inspection Advisory Committee, Division of Consumer Affairs', agencyUrl: 'https://www.njconsumeraffairs.gov/hii', fee: '≈$585 in state fees', note: '180 hours including at least 40 hours of unpaid supervised field inspections, or 250 supervised fee-paid inspections; $500,000 per occurrence E&O required. The heaviest education requirement outside Texas and North Carolina.', compactMember: false },
      NM: { agency: 'New Mexico Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov', fee: '≈$495 in state fees', note: '80 hours plus the NHIE; three-year renewal cycle; insurance required.', compactMember: false },
      NY: { agency: 'New York Department of State, Division of Licensing Services', agencyUrl: 'https://dos.ny.gov/home-inspector', fee: '≈$475 in state fees', note: '140 hours including 40 hours of unpaid field training; New York uses its own state examination rather than the NHIE.', compactMember: false },
      NC: { agency: 'North Carolina Home Inspector Licensure Board, Department of Insurance', agencyUrl: 'https://www.ncdoi.gov/licensees/home-inspectors', fee: '≈$275 in state fees', note: '200 hours plus 80 field hours and the state examination — the most demanding education requirement in the country. Insurance required.', compactMember: false },
      ND: { agency: 'North Dakota Office of the Secretary of State', agencyUrl: 'https://sos.nd.gov/home-inspector', fee: '≈$425 in state fees (incl. $200 registration)', note: 'Registration under NDCC ch. 43-54: pass an examination from ASHI, InterNACHI, EBPHI or ICC, carry at least $100,000 of liability and E&O cover, and pay the $200 registration fee. Renewal is annual by 30 June at $50; no continuing education is required.', compactMember: false },
      OH: { agency: 'Ohio Home Inspector Board, Division of Real Estate and Professional Licensing', agencyUrl: 'https://com.ohio.gov/divisions-and-programs/real-estate-and-professional-licensing/home-inspectors', fee: '$475+ in state fees', note: '80 hours plus the NHIE; three-year renewal cycle.', compactMember: false },
      OK: { agency: 'Oklahoma Construction Industries Board', agencyUrl: 'https://www.ok.gov/cib/Home_Inspectors/', fee: '≈$480 in state fees', note: '90 hours plus the NHIE and a background check; annual renewal.', compactMember: false },
      OR: { agency: 'Oregon Construction Contractors Board (CCB)', agencyUrl: 'https://www.oregon.gov/ccb/licensing/Pages/home-inspector.aspx', fee: '≈$375 in state fees', note: 'Oregon Certified Home Inspector: coursework plus the NHIE and field training; inspectors must also hold or work under a CCB contractor licence.', compactMember: false },
      RI: { agency: 'Rhode Island Contractors\u2019 Registration and Licensing Board', agencyUrl: 'https://dbr.ri.gov/divisions/contractors/', fee: '$200+ in state fees', note: 'Associate and full home inspector tiers; NHIE and insurance required.', compactMember: false },
      SC: { agency: 'South Carolina Residential Builders Commission, LLR', agencyUrl: 'https://llr.sc.gov/rbc/', fee: '$80+ in state fees', note: 'NHIE required; licence issued alongside the residential builder framework.', compactMember: false },
      SD: { agency: 'South Dakota Real Estate Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/realestate/home_inspector_how_to_become.aspx', fee: '$200+ in state fees', note: 'Two tiers under SDCL 36-21C: Registered Home Inspector (40-hour approved course plus a Commission examination), then Licensed Home Inspector after at least one year registered, 100 paid inspections and the NHIE. Biennial renewal with 24 CE hours.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/home-inspectors.html', fee: '≈$525 in state fees', note: '90 hours plus the NHIE; insurance required; state fees approximately $300 application plus the $225 examination fee.', compactMember: false },
      TX: { agency: 'Texas Real Estate Commission (TREC)', agencyUrl: 'https://www.trec.texas.gov/become-licensed/inspector', fee: '≈$412.25 in state fees', note: 'Three tiers — Apprentice Inspector, Real Estate Inspector, Professional Inspector. The Professional Inspector level requires 194 hours plus a supervised practicum and the state examination. TREC, not a separate inspection board, is the regulator.', compactMember: false },
      UT: { agency: 'Utah Division of Professional Licensing (DOPL)', agencyUrl: 'https://dpl.utah.gov', fee: '≈$525 in state fees', note: 'New credential: House Bill 58 (2025) created the Private Home Inspector licence under Utah Code 58-56-9, effective 1 January 2026. Qualification is by current ASHI, InterNACHI or ICC Residential Combination Inspector certification plus $500,000 each of liability and E&O insurance naming the Division as certificate holder. No state examination.', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation, Secretary of State', agencyUrl: 'https://sos.vermont.gov/property-inspectors/', fee: '≈$410 in state fees', note: 'Regulated under the OPR "advisor" model as property/home inspectors: 80 hours plus the NHIE, high school completion and liability/E&O insurance. Biennial renewal.', compactMember: false },
      VA: { agency: 'Virginia Board for Contractors, DPOR', agencyUrl: 'https://www.dpor.virginia.gov/Boards/HomeInspectors', fee: '≈$305 in state fees', note: 'Mandatory licence since 1 July 2017; approximately 70 hours plus the NHIE and field work. A separate New Residential Structures (NRS) specialty is needed to inspect newly built homes.', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing', agencyUrl: 'https://dol.wa.gov/professional-licenses/home-inspectors', fee: '≈$1,020 in state fees', note: '120 hours plus 40 hours of field training and the state examination; among the highest total state fees in the country.', compactMember: false },
      WV: { agency: 'West Virginia State Fire Marshal', agencyUrl: 'https://firemarshal.wv.gov', fee: '≈$435 in state fees', note: 'Certification: 80 hours plus the NHIE; annual renewal.', compactMember: false },
      WI: { agency: 'Wisconsin Department of Safety and Professional Services (DSPS)', agencyUrl: 'https://dsps.wi.gov/pages/Professions/HomeInspector/Default.aspx', fee: '≈$355 in state fees', note: 'Registration: 40 hours and the NHIE. Renewal by 14 December of each even-numbered year.', compactMember: false }
      // OMITTED — no state-issued home inspector credential exists in these 14 jurisdictions:
      // CA (trade-practice statute only, no licence), CO, DC, GA (trade-practice statute only),
      // HI, IA (Home Inspection Accountability Act 2025 uses association membership, no state licence),
      // ID, KS (licensing act expired 1 July 2013), ME, MI, MN (written-contract rule only),
      // MO (licensing enacted but not yet in force), PA (Home Inspection Law requires national
      // association membership, not a state licence), WY.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 5. Mortgage Loan Originator
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'mortgage-loan-originator',
    name: 'Mortgage Loan Originator (MLO) License',
    category: 'finance-securities',
    group: 'Mortgage Licensing',
    type: 'License',
    blurb: 'The SAFE Act state licence, obtained through NMLS, required to take a residential mortgage application or negotiate loan terms for compensation.',

    overview:
      'A mortgage loan originator takes residential mortgage loan applications or offers and negotiates loan terms for compensation. Since the federal Secure and Fair Enforcement for Mortgage Licensing Act of 2008 (the SAFE Act), every state and the District of Columbia must license MLOs who work for non-depository lenders and brokers, and every licensee must hold a unique NMLS identifier that follows them for life. The Nationwide Multistate Licensing System and Registry (NMLS), operated by the Conference of State Bank Supervisors, is the single application portal for all 51 jurisdictions — you complete one set of core requirements and then request a licence from each state you want to work in. MLOs employed by federally insured depository institutions are federally registered rather than state-licensed: they get an NMLS number and a background check but do not take the SAFE test or the pre-licensure course.',
    eligibility:
      'Applicants must be at least 18, have never had an MLO licence revoked in any jurisdiction, and must not have been convicted of a felony in the preceding seven years or of any felony involving fraud, dishonesty, breach of trust or money laundering at any time. Every applicant must demonstrate financial responsibility, character and general fitness, which state regulators assess using a credit report pulled through NMLS — outstanding judgments, tax liens and recent bankruptcies are reviewed and can result in denial or conditional approval. Fingerprints for an FBI criminal background check are submitted through NMLS, and each state licence also requires sponsorship by a licensed mortgage company before it becomes active.',
    exam: {
      admin: 'Prometric, under contract to NMLS/CSBS',
      questions: '120 (115 scored plus 5 unscored pretest items)',
      time: '190 minutes',
      pass: '75%',
      fee: '$110 for the National Test with Uniform State Content',
      format: 'Multiple choice, computer-based at a Prometric centre or by online proctored delivery. The single National Test Component with Uniform State Content satisfies the testing requirement for every jurisdiction; only a small number of states still add a separate state-specific test component.'
    },
    education: {
      hours: '20 hours of NMLS-approved pre-licensure education, plus state-specific hours where required',
      note: 'The federal 20-hour minimum covers 3 hours of federal law and regulation, 3 hours of ethics (including fraud, consumer protection and fair lending), 2 hours of non-traditional mortgage lending, and 12 hours of electives. A number of states add their own hours on top — for example Idaho, Massachusetts, Montana, North Carolina, Oregon, Texas, Utah, Vermont, Washington and West Virginia have all required state-specific pre-licensure content at various points. Because these state add-ons change frequently, the NMLS Resource Center state licensing checklist is the only reliable source. Eight hours of continuing education are required annually and the "successive years" rule prohibits repeating the same course two years running.'
    },
    prerequisites:
      'Age 18 or over; 20 hours of NMLS-approved pre-licensure education plus any state-specific hours; a passing score on the SAFE MLO National Test with Uniform State Content; an FBI criminal background check and a credit report through NMLS; company sponsorship; and, in most states, coverage under the employing company\u2019s surety bond, the amount of which usually scales with loan volume.',
    costBreakdown: {
      items: [
        { item: '20-hour NMLS pre-licensure course', fee: '$250–$500' },
        { item: 'State-specific education hours, where required', fee: '$40–$150' },
        { item: 'SAFE MLO National Test', fee: '$110 per attempt' },
        { item: 'NMLS processing fee', fee: '$30' },
        { item: 'FBI criminal background check', fee: '$36.25' },
        { item: 'Credit report', fee: '$15' },
        { item: 'State licence application fee', fee: '$30–$500 per state' },
        { item: 'Annual continuing education (8 hours)', fee: '$100–$250/yr' }
      ],
      total: '$500–$1,200 for a first state licence; each additional state typically adds $50–$500'
    },
    timeline: [
      { stage: 'Create an NMLS account and submit fingerprints', duration: '1–2 weeks' },
      { stage: '20-hour pre-licensure education', duration: '1–4 weeks' },
      { stage: 'SAFE MLO National Test', duration: '1–3 weeks to schedule and pass' },
      { stage: 'State application review and approval', duration: '2–8 weeks, varying widely by regulator' }
    ],
    route: [
      { title: 'Create an NMLS account and obtain your unique identifier', description: 'Register at the NMLS Resource Center to receive a permanent NMLS ID. This number follows you across employers and states for the rest of your career and must appear on your advertising and loan documents.' },
      { title: 'Submit fingerprints and authorise a credit report', description: 'Both are ordered inside NMLS. The credit report supports the SAFE Act "financial responsibility" standard, so clean up collections and unresolved judgments beforehand — this, not the exam, is the most common reason applications stall.' },
      { title: 'Complete 20 hours of NMLS-approved pre-licensure education', description: 'Use an NMLS-approved course provider; nothing else counts. If you plan to license in a state with additional state-specific hours, buy the combined package so the provider can bank all the hours to your NMLS record at once.' },
      { title: 'Pass the SAFE MLO National Test with Uniform State Content', description: 'One 120-question test satisfies the national and uniform state requirement for every jurisdiction. The passing score is 75%. If you fail, you must wait 30 days between the first three attempts and 180 days after three consecutive failures.' },
      { title: 'Apply for each state licence and get sponsored', description: 'File the individual MLO licence application (form MU4) in NMLS for each state, pay each state\u2019s fee, and answer that state\u2019s specific disclosure questions. Your licence is inactive until a licensed mortgage company files a sponsorship request naming you.' },
      { title: 'Maintain the licence with annual CE and renewal', description: 'Complete 8 hours of NMLS-approved continuing education each year — 3 federal law, 2 ethics, 2 non-traditional lending, 1 elective — plus any state-specific CE, and renew through NMLS during the 1 November to 31 December window. Missing the window means reinstatement fees or retaking education.' }
    ],
    providersNote:
      'Pre-licensure and continuing education must be taken from a provider approved by the NMLS Education Bureau; the NMLS Course Catalog at nationwidelicensingsystem.org is the authoritative list, and approved courses are credited directly to your NMLS record by the provider. Major approved providers include Mortgage Educators, OnCourse Learning, Diehl, Affinity and Cape School. Testing is delivered exclusively by Prometric.',
    faqs: [
      {
        q: 'Do I need a separate licence for every state?',
        a: 'Yes for the licence itself, but not for the education or the test. The 20-hour pre-licensure course and the SAFE MLO National Test with Uniform State Content are done once and count everywhere. After that you file a separate application and fee in NMLS for each state, answer that state\u2019s disclosure questions, and complete any state-specific education hours it still requires.'
      },
      {
        q: 'What is the difference between a state-licensed and a federally registered MLO?',
        a: 'If you originate for a bank, credit union or other federally insured depository (or its subsidiary), you are federally registered: you get an NMLS ID and a background check, but you do not take the SAFE test, do not complete the 20-hour course and do not hold a state licence. If you originate for an independent mortgage bank or broker, you must be state-licensed in every state where your borrowers\u2019 properties are located. Moving from a bank to a broker therefore means qualifying from scratch.'
      },
      {
        q: 'Will bad credit stop me from getting licensed?',
        a: 'Not automatically, but it is examined. The SAFE Act requires regulators to find that an applicant has demonstrated financial responsibility, and states pull a credit report through NMLS to assess it. There is no minimum score; regulators look for patterns — unpaid tax liens, outstanding judgments, recent foreclosures and delinquent child support are the items most likely to trigger a request for explanation or a conditional licence.'
      },
      {
        q: 'What happens if I fail the SAFE test?',
        a: 'You may retest after 30 days for each of your first three attempts. After three consecutive failures you must wait 180 days before trying again. There is no lifetime limit on attempts, and the $110 fee applies each time. The uniform state content is part of the same 120-question test, so there is normally nothing extra to sit.'
      },
      {
        q: 'How does the annual renewal work?',
        a: 'Renewal runs through NMLS between 1 November and 31 December each year. Before renewing you must complete 8 hours of NMLS-approved continuing education for that year, and the "successive years" rule bars you from taking the identical course you took the previous year. Licences not renewed by 31 December move to a terminated or reinstatement status, and reinstatement periods are short — typically ending in late February or early March.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no MLO compact, but the SAFE Act plus NMLS produces something close to functional portability: one national test, one federal education core, one background check and one credit report support applications in all 51 jurisdictions. What remains state-specific is the licence application, the fee, any additional pre-licensure or CE hours, and the surety bond. Several states have also adopted temporary authority to operate under the Economic Growth, Regulatory Relief, and Consumer Protection Act of 2018, which lets a qualifying MLO moving from a depository or from another state originate for up to 120 days while the new application is pending.'
    },

    defaultAgency: 'State financial regulator (banking, financial institutions or consumer credit department)',
    sourceUrl: 'https://mortgage.nationwidelicensingsystem.org/Pages/default.aspx',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama State Banking Department, Bureau of Loans', agencyUrl: 'https://banking.alabama.gov', note: 'No Alabama-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$178 state license + $93.25 NMLS/federal', compactMember: false },
      AK: { agency: 'Alaska Division of Banking and Securities', agencyUrl: 'https://www.commerce.alaska.gov/web/dbs/', note: 'No Alaska-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$157 state license + $93.25 NMLS/federal', compactMember: false },
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', note: 'Requires 4 hours of Arizona-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Arizona licence page before enrolling.', fee: '≈$603 state license + $93.25 NMLS/federal', compactMember: false },
      AR: { agency: 'Arkansas Securities Department', agencyUrl: 'https://securities.arkansas.gov', note: 'No Arkansas-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$153 state license + $93.25 NMLS/federal', compactMember: false },
      CA: { agency: 'California Department of Financial Protection and Innovation (DFPI); the Department of Real Estate licenses MLOs who hold a DRE licence', agencyUrl: 'https://dfpi.ca.gov', note: 'California is the only state with two MLO licensing routes — a DFPI licence under the CFL or CRMLA, or a DRE broker/salesperson MLO endorsement. Choose based on which licence your employer operates under.', fee: '≈$403 state license + $93.25 NMLS/federal', compactMember: false },
      CO: { agency: 'Colorado Division of Real Estate, DORA', agencyUrl: 'https://dora.colorado.gov/division-of-real-estate', note: 'Unusually, Colorado regulates MLOs through the Division of Real Estate rather than a banking department.', fee: '≈$151 state license + $93.25 NMLS/federal', compactMember: false },
      CT: { agency: 'Connecticut Department of Banking', agencyUrl: 'https://portal.ct.gov/DOB', note: 'Requires 1 hour of Connecticut-specific pre-licensing education that may not be counted inside the national course, so the education total is 21 hours.', fee: '≈$165 state license + $93.25 NMLS/federal', compactMember: false },
      DE: { agency: 'Delaware Office of the State Bank Commissioner', agencyUrl: 'https://banking.delaware.gov', note: 'No Delaware-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$595 state license + $93.25 NMLS/federal', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', note: 'Sources disagree on whether the District layers 3 hours of DC-specific content into the 20-hour curriculum; the District publishes no separate hour requirement, so confirm on the NMLS District of Columbia MLO page before enrolling. Treat this single data point as medium confidence.', fee: '≈$425 state license + $93.25 NMLS/federal', compactMember: false },
      FL: { agency: 'Florida Office of Financial Regulation (OFR)', agencyUrl: 'https://flofr.gov', note: 'Requires 2 hours of Florida-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Florida licence page before enrolling.', fee: '≈$195 state license + $93.25 NMLS/federal', compactMember: false },
      GA: { agency: 'Georgia Department of Banking and Finance', agencyUrl: 'https://dbf.georgia.gov', note: 'No Georgia-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$125 state license + $93.25 NMLS/federal', compactMember: false },
      HI: { agency: 'Hawaii Division of Financial Institutions, DCCA', agencyUrl: 'https://cca.hawaii.gov/dfi/', note: 'Requires 3 hours of Hawaii-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Hawaii licence page before enrolling.', fee: '≈$703 state license + $93.25 NMLS/federal', compactMember: false },
      ID: { agency: 'Idaho Department of Finance', agencyUrl: 'https://www.finance.idaho.gov', note: 'Requires 2 hours of Idaho-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Idaho licence page before enrolling.', fee: '≈$145 state license + $93.25 NMLS/federal', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation, Division of Banking', agencyUrl: 'https://idfpr.illinois.gov/banks.html', note: 'No Illinois-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$150 state license + $93.25 NMLS/federal', compactMember: false },
      IN: { agency: 'Indiana Department of Financial Institutions (DFI)', agencyUrl: 'https://www.in.gov/dfi/', note: 'Requires 2 hours of Indiana-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Indiana licence page before enrolling.', fee: '≈$152 state license + $93.25 NMLS/federal', compactMember: false },
      IA: { agency: 'Iowa Division of Banking', agencyUrl: 'https://dob.iowa.gov', note: 'No Iowa-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$154 state license + $93.25 NMLS/federal', compactMember: false },
      KS: { agency: 'Kansas Office of the State Bank Commissioner (OSBC)', agencyUrl: 'https://osbckansas.org', note: 'No Kansas-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$120 state license + $93.25 NMLS/federal', compactMember: false },
      KY: { agency: 'Kentucky Department of Financial Institutions', agencyUrl: 'https://kfi.ky.gov', note: 'No Kentucky-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$156 state license + $93.25 NMLS/federal', compactMember: false },
      LA: { agency: 'Louisiana Office of Financial Institutions (OFI)', agencyUrl: 'https://ofi.la.gov', note: 'No Louisiana-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$170 state license + $93.25 NMLS/federal', compactMember: false },
      ME: { agency: 'Maine Bureau of Consumer Credit Protection', agencyUrl: 'https://www.maine.gov/pfr/consumercredit/', note: 'No Maine-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$130 state license + $93.25 NMLS/federal', compactMember: false },
      MD: { agency: 'Maryland Office of Financial Regulation', agencyUrl: 'https://labor.maryland.gov/finance/', note: 'Requires 5 hours of Maryland-specific pre-licensing education, the largest state-specific block in the country, alongside the 20-hour national SAFE course.', fee: '≈$200 state license + $93.25 NMLS/federal', compactMember: false },
      MA: { agency: 'Massachusetts Division of Banks', agencyUrl: 'https://www.mass.gov/orgs/division-of-banks', note: 'Massachusetts has required state-specific pre-licensure education in addition to the federal 20 hours; verify current hours on the NMLS state checklist.', fee: '≈$718 state license + $93.25 NMLS/federal', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', note: 'Requires 2 hours of Michigan-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Michigan licence page before enrolling.', fee: '≈$140 state license + $93.25 NMLS/federal', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', note: 'No Minnesota-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$135 state license + $93.25 NMLS/federal', compactMember: false },
      MS: { agency: 'Mississippi Department of Banking and Consumer Finance', agencyUrl: 'https://www.dbcf.ms.gov', note: 'Requires 4 hours of Mississippi-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Mississippi licence page before enrolling.', fee: '≈$160 state license + $93.25 NMLS/federal', compactMember: false },
      MO: { agency: 'Missouri Division of Finance', agencyUrl: 'https://finance.mo.gov', note: 'No Missouri-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$158 state license + $93.25 NMLS/federal', compactMember: false },
      MT: { agency: 'Montana Division of Banking and Financial Institutions', agencyUrl: 'https://banking.mt.gov', note: 'Montana has required additional state-specific pre-licensure hours; verify on the NMLS state checklist.', fee: '≈$148 state license + $93.25 NMLS/federal', compactMember: false },
      NE: { agency: 'Nebraska Department of Banking and Finance', agencyUrl: 'https://ndbf.nebraska.gov', note: 'Requires 2 hours of Nebraska-specific pre-licensing education that may not be counted inside the national course, so the education total is 22 hours.', fee: '≈$142 state license + $93.25 NMLS/federal', compactMember: false },
      NV: { agency: 'Nevada Division of Mortgage Lending', agencyUrl: 'https://mld.nv.gov', note: 'Nevada is the education outlier: 30 total pre-licensing hours rather than the national 20, including 4 hours of Nevada-specific content.', fee: '≈$180 state license + $93.25 NMLS/federal', compactMember: false },
      NH: { agency: 'New Hampshire Banking Department', agencyUrl: 'https://www.nh.gov/banking/', note: 'Requires 2 hours of New Hampshire-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS New Hampshire licence page before enrolling.', fee: '≈$149 state license + $93.25 NMLS/federal', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance', agencyUrl: 'https://www.nj.gov/dobi/', note: 'Requires 4 hours of New Jersey-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS New Jersey licence page before enrolling.', fee: '≈$385 state license + $93.25 NMLS/federal', compactMember: false },
      NM: { agency: 'New Mexico Financial Institutions Division, Regulation and Licensing Department', agencyUrl: 'https://www.rld.nm.gov/financial-institutions/', note: 'Requires 3 hours of New Mexico-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS New Mexico licence page before enrolling.', fee: '≈$190 state license + $93.25 NMLS/federal', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', note: 'Requires 3 hours of New York-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS New York licence page before enrolling.', fee: '≈$300 state license + $93.25 NMLS/federal', compactMember: false },
      NC: { agency: 'North Carolina Office of the Commissioner of Banks (NCCOB)', agencyUrl: 'https://www.nccob.gov', note: 'One of the heaviest education loads in the country: N.C. Gen. Stat. \u00a7 53-244.070 requires 24 pre-licensing hours, not 20 \u2014 3 federal, 3 ethics, 2 non-traditional lending, 4 North Carolina statutes and rules and 12 electives \u2014 and the hours must be no more than 3 years old at application. An applicant already licensed in another state and current on CE is credited 20 hours but must still sit the 4-hour North Carolina block.', fee: '≈$185 state license + $93.25 NMLS/federal', compactMember: false },
      ND: { agency: 'North Dakota Department of Financial Institutions', agencyUrl: 'https://www.nd.gov/dfi/', note: 'No North Dakota-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$133 state license + $93.25 NMLS/federal', compactMember: false },
      OH: { agency: 'Ohio Division of Financial Institutions, Department of Commerce', agencyUrl: 'https://com.ohio.gov/divisions-and-programs/financial-institutions', note: 'Requires 4 hours of Ohio-specific law. Under the Ohio Residential Mortgage Lending Act this block sits on top of the 20-hour national course rather than inside it.', fee: '≈$175 state license + $93.25 NMLS/federal', compactMember: false },
      OK: { agency: 'Oklahoma Department of Consumer Credit', agencyUrl: 'https://oklahoma.gov/okdocc.html', note: 'Requires 1 hour of Oklahoma-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Oklahoma licence page before enrolling.', fee: '≈$131 state license + $93.25 NMLS/federal', compactMember: false },
      OR: { agency: 'Oregon Division of Financial Regulation, Department of Consumer and Business Services', agencyUrl: 'https://dfr.oregon.gov', note: 'Oregon has required additional state-specific pre-licensure education; verify current hours on the NMLS state checklist.', fee: '≈$220 state license + $93.25 NMLS/federal', compactMember: false },
      PA: { agency: 'Pennsylvania Department of Banking and Securities', agencyUrl: 'https://www.pa.gov/agencies/dobs.html', note: 'Requires 3 hours of Pennsylvania-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Pennsylvania licence page before enrolling.', fee: '≈$210 state license + $93.25 NMLS/federal', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Banking Division', agencyUrl: 'https://dbr.ri.gov/divisions/banking/', note: 'Requires 3 hours of Rhode Island-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Rhode Island licence page before enrolling.', fee: '≈$705 state license + $93.25 NMLS/federal', compactMember: false },
      SC: { agency: 'South Carolina Department of Consumer Affairs and the State Board of Financial Institutions', agencyUrl: 'https://consumer.sc.gov', note: 'South Carolina splits MLO oversight: originators working for mortgage brokers are licensed by the Department of Consumer Affairs, while those working for mortgage lenders/servicers fall under the Board of Financial Institutions. Confirm which applies to your employer.', fee: '≈$155 state license + $93.25 NMLS/federal', compactMember: false },
      SD: { agency: 'South Dakota Division of Banking, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/banking/', note: 'No South Dakota-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$122 state license + $93.25 NMLS/federal', compactMember: false },
      TN: { agency: 'Tennessee Department of Financial Institutions', agencyUrl: 'https://www.tn.gov/tdfi.html', note: 'Requires 2 hours of Tennessee-specific pre-licensing education alongside the 20-hour national SAFE course; providers differ on whether the state block sits inside or on top of the 20, so check the NMLS Tennessee licence page before enrolling.', fee: '≈$162 state license + $93.25 NMLS/federal', compactMember: false },
      TX: { agency: 'Texas Department of Savings and Mortgage Lending (SML); the Office of Consumer Credit Commissioner licenses MLOs at regulated lenders', agencyUrl: 'https://www.sml.texas.gov', note: 'Texas has required additional state-specific pre-licensure education. Which Texas regulator issues your licence depends on your employer\u2019s licence type.', fee: '≈$248 state license + $93.25 NMLS/federal', compactMember: false },
      UT: { agency: 'Utah Division of Real Estate, Department of Commerce', agencyUrl: 'https://realestate.utah.gov/mortgage/', note: 'Like Colorado, Utah regulates MLOs through its Division of Real Estate. Utah has required additional state-specific pre-licensure education.', fee: '≈$202 state license + $93.25 NMLS/federal', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', note: 'Vermont has required additional state-specific pre-licensure education; verify current hours on the NMLS state checklist.', fee: '≈$147 state license + $93.25 NMLS/federal', compactMember: false },
      VA: { agency: 'Virginia Bureau of Financial Institutions, State Corporation Commission', agencyUrl: 'https://scc.virginia.gov/pages/Bureau-of-Financial-Institutions', note: 'No Virginia-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$126 state license + $93.25 NMLS/federal', compactMember: false },
      WA: { agency: 'Washington State Department of Financial Institutions (DFI)', agencyUrl: 'https://dfi.wa.gov', note: 'Washington has required additional state-specific pre-licensure education; verify current hours on the NMLS state checklist.', fee: '≈$230 state license + $93.25 NMLS/federal', compactMember: false },
      WV: { agency: 'West Virginia Division of Financial Institutions', agencyUrl: 'https://dfi.wv.gov', note: 'West Virginia has required additional state-specific pre-licensure education; verify current hours on the NMLS state checklist.', fee: '≈$159 state license + $93.25 NMLS/federal', compactMember: false },
      WI: { agency: 'Wisconsin Department of Financial Institutions (DFI)', agencyUrl: 'https://dfi.wi.gov', note: 'No Wisconsin-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$137 state license + $93.25 NMLS/federal', compactMember: false },
      WY: { agency: 'Wyoming Division of Banking', agencyUrl: 'https://wyomingbankingdivision.wyo.gov', note: 'No Wyoming-specific pre-licensing hours beyond the 20-hour national SAFE course; state law is examined through the Uniform State Test component instead.', fee: '≈$128 state license + $93.25 NMLS/federal', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 6. Auctioneer
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'auctioneer',
    name: 'Auctioneer License',
    category: 'real-estate',
    group: 'Specialty Property Licences',
    type: 'License',
    blurb: 'The state licence, where one exists, required to call bids and conduct auctions of personal or real property for compensation.',

    overview:
      'An auctioneer conducts a public sale in which property is sold to the highest bidder, and in about half of the United States that activity requires a state licence. Twenty-six jurisdictions license auctioneers; the remaining twenty-five have no state auctioneer board at all, though city or county permits, a general business licence and a surety bond may still apply. Licensing states typically combine an apprenticeship or accredited auction-school course with a written examination, a surety bond or recovery-fund contribution, and continuing education. A crucial and frequently missed point is that an auctioneer licence generally does not authorise you to auction real estate: states including Alabama, Florida, North Carolina and Tennessee require a real estate broker licence for real property auctions, and South Dakota inverts the structure entirely by issuing its auctioneer credential as a restricted real estate broker licence.',
    eligibility:
      'Most licensing states require applicants to be at least 18 (21 in a few), of good moral character, and to have completed either an apprenticeship under a licensed auctioneer — commonly one to two years — or a course at an accredited auction school, typically 80 to 85 hours. A written examination covering state auction law, Uniform Commercial Code Article 2, contract law, ethics, trust-account handling and bid-calling procedure is required in most licensing states, though a handful (including the District of Columbia and Washington) license without an examination. Fourteen licensing states require a surety bond, commonly $5,000 to $50,000, and several operate a consumer recovery fund funded by a one-off contribution instead of or in addition to the bond. Charity, government-surplus, judicial and estate auctions are exempt in many states.',
    exam: {
      admin: 'State auctioneer board or commission, or its contracted testing vendor (PSI and Pearson VUE are both used)',
      questions: 'Typically 80–150, split between general auction practice and state law',
      time: '2–4 hours',
      pass: 'Generally 70–75%',
      fee: '$70–$125 per attempt',
      format: 'Written or computer-based multiple choice. A small number of states, including Texas and several apprenticeship states, also assess bid-calling ability.'
    },
    education: {
      hours: '0–85 hours, depending entirely on the state and the route chosen',
      note: 'Two routes dominate. The auction-school route requires attendance at a board-accredited auction school — Florida requires 80 hours, Alabama 85 hours where the apprenticeship is shortened to one year, and Georgia, Illinois (12 CE hours per cycle) and Indiana (16 CE hours) set their own figures. The apprenticeship route substitutes one to two years working under a licensed auctioneer, and states such as Kentucky, Ohio and Tennessee build their systems around it. Registration-style states like Washington and the District of Columbia impose no education requirement at all.'
    },
    prerequisites:
      'Minimum age (18 in most states); completion of an accredited auction school course or a documented apprenticeship under a licensed auctioneer; a passing examination score where required; a surety bond or recovery-fund contribution; a criminal background check in most states; and, for anyone auctioning real property, a real estate broker licence in the states that require one.',
    costBreakdown: {
      items: [
        { item: 'Accredited auction school (1–2 week residential course)', fee: '$1,500–$4,000 including travel' },
        { item: 'Licensing examination', fee: '$70–$125' },
        { item: 'Application and initial licence fee', fee: '$100–$400' },
        { item: 'Surety bond premium (on a $5,000–$50,000 bond)', fee: '$100–$500/yr' },
        { item: 'Recovery fund contribution, where applicable', fee: '$30–$150 one-off' },
        { item: 'Background check and fingerprints', fee: '$20–$60' },
        { item: 'Auction firm/business licence, if operating a company', fee: '$100–$400' }
      ],
      total: '$300–$700 in state fees alone; $2,000–$5,000 including auction school'
    },
    timeline: [
      { stage: 'Auction school (or start of apprenticeship)', duration: '1–2 weeks residential, or 1–2 years apprenticing' },
      { stage: 'Examination', duration: '2–6 weeks to schedule and pass' },
      { stage: 'Bond, background check and application', duration: '2–6 weeks' },
      { stage: 'Firm licence, if forming an auction company', duration: '2–4 weeks' }
    ],
    route: [
      { title: 'Check whether your state licenses auctioneers at all', description: 'Half the country does not. If you are in a non-licensing state, confirm city and county requirements instead — many municipalities require an auctioneer permit or bond even where the state does not, and New York delegates the whole question to city government.' },
      { title: 'Choose the auction-school or apprenticeship route', description: 'Auction school is faster and is usually the route that qualifies you for reciprocity, because reciprocal states often distinguish between school-trained and apprenticeship-trained licensees. Apprenticeship is cheaper and gives you real ring experience, but many states require an apprentice licence to be issued before you start.' },
      { title: 'Apply for an apprentice or associate licence if required', description: 'Alabama, Tennessee, Texas and several other states issue a separate apprentice or associate auctioneer licence that must be held before you can work under a sponsoring auctioneer. Do not start logging apprenticeship time until that licence is issued.' },
      { title: 'Pass the state auctioneer examination', description: 'Study state auction law, UCC Article 2 (particularly with-reserve versus absolute auctions and when the sale is complete), advertising rules, escrow and trust-account handling, and the state\u2019s exemptions. Several boards publish an official study guide — Alabama\u2019s AAA study guide and Florida\u2019s Candidate Information Booklet are examples.' },
      { title: 'Post the bond or pay into the recovery fund, then apply', description: 'Fourteen licensing states require a surety bond; others use a consumer recovery fund. Get a bond quote before applying, as premiums depend on personal credit. Submit the application with your school certificate or apprenticeship affidavit, exam result, bond and fee.' },
      { title: 'Add a real estate licence if you will sell real property', description: 'In several states an auctioneer licence does not cover real estate. Alabama and Florida both require a real estate broker licence to auction real property, and in Florida a licensed broker may auction real estate without an auctioneer licence. Resolve this before accepting a land or property consignment.' },
      { title: 'Register the auction firm and maintain the licence', description: 'Most licensing states require a separate auction firm or auction business licence for anything other than a sole proprietorship. Keep up with continuing education — typically 6 to 16 hours per renewal cycle — and maintain the bond continuously.' }
    ],
    providersNote:
      'Auction schools must be accredited or approved by the state board that will issue your licence; each board publishes its accepted-school list, and boards in reciprocal states frequently accept each other\u2019s accredited schools. The National Auctioneers Association maintains a directory of schools and awards designations such as CAI, BAS and AARE, which are voluntary and not a substitute for a state licence. The National Auctioneers License Law Officials Association (NALLOA) publishes a state-by-state summary of licence law, apprenticeship, examination, bond and reciprocity rules that is the best single starting point for cross-state work.',
    faqs: [
      {
        q: 'Which states do not require an auctioneer licence?',
        a: 'Twenty-five jurisdictions have no state auctioneer licence: Alaska, Arizona, California, Colorado, Connecticut, Delaware, Hawaii, Idaho, Iowa, Kansas, Maryland, Michigan, Minnesota, Missouri, Montana, Nebraska, Nevada, New Jersey, New Mexico, New York, Oklahoma, Oregon, Rhode Island, Utah and Wyoming. Some still regulate the conduct of auctions without licensing auctioneers — Oregon does this through the Secretary of State, California requires a $20,000 bond, Minnesota delegates licensing to counties, and New York delegates it to city governments such as New York City\u2019s Department of Consumer and Worker Protection.'
      },
      {
        q: 'Does my auctioneer licence let me auction real estate?',
        a: 'Often not. Alabama, Florida, North Carolina and Tennessee are among the states that require a real estate broker licence to auction real property, whether the auction is live or online. Florida goes further: a licensed real estate broker may auction real estate without an auctioneer licence, while a licensed auctioneer may not auction real estate without a broker licence. South Dakota\u2019s auctioneer credential is itself a restricted real estate broker licence issued by the Real Estate Commission.'
      },
      {
        q: 'How does auctioneer reciprocity work?',
        a: 'Reciprocity is unusually well developed for a profession with no compact. Most licensing states maintain published bilateral lists — Alabama, for example, has agreements with sixteen states, and Illinois, Texas and North Carolina publish their own. Conditions are strict: you normally must be licensed and resident in the reciprocal state, have held the licence for one or two years, and in some cases still sit the receiving state\u2019s examination. NALLOA and each board\u2019s reciprocity page carry the current lists.'
      },
      {
        q: 'Do online-only auctions need a licence?',
        a: 'It depends on the state and is one of the least settled areas of auction law. Alabama and South Dakota assert authority to regulate internet and online auctions; Florida, Tennessee, Michigan, Nebraska, New Jersey and Kansas have stated they do not, or that they lack jurisdiction. Illinois excludes pure "internet auction listing services" from most of its Auction License Act. If you run timed online sales across state lines, check each state where you solicit consignments.'
      },
      {
        q: 'Are charity auctions exempt?',
        a: 'Usually yes, but the exemption is narrower than people assume. Illinois, for instance, exempts an auction conducted solely by or for a not-for-profit for charitable purposes only where the individual receives no compensation. Sales by the property owner, judicial and government sales, and livestock auctions run by federally registered market agencies are also commonly exempt. Taking a fee for a charity gala auction can put you outside the exemption.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no auctioneer compact, but a dense web of bilateral reciprocity agreements exists among the licensing states, coordinated informally through the National Auctioneers License Law Officials Association. Typical conditions are current licensure in good standing plus residency in the granting state, a minimum period of licensure (often one to two years), and sometimes the receiving state\u2019s examination. Each board publishes its own current list, and those lists change; verify before advertising an out-of-state sale.'
    },

    defaultAgency: 'State auctioneer licensing board or commission',
    sourceUrl: 'https://nalloa.org/licensing-state-requirements/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama State Board of Auctioneers', agencyUrl: 'https://auctioneer.alabama.gov', note: 'Apprentice licence required. Pre-licensing education (85 hours) is required only if the apprenticeship is one year rather than two. $10,000 bond; 6 CE hours in odd-numbered years; licences expire 30 September annually. A real estate licence is required to auction real property, including online. Reciprocity with 16 states.', fee: '≈$350 (application + exam + 1-yr licence)', compactMember: false },
      AR: { agency: 'Arkansas Auctioneers Licensing Board', agencyUrl: 'https://www.aralb.arkansas.gov', note: '$2,000 bond, 6 CE hours, and a recovery-fund contribution. Total initial fees run to roughly $338 including the $100 examination, $100 licence, background check and recovery fund.', fee: '≈$338 ($100 exam + $100 licence + background + recovery fund)', compactMember: false },
      DC: { agency: 'District of Columbia Department of Licensing and Consumer Protection (DLCP)', agencyUrl: 'https://dlcp.dc.gov', note: 'Licence required but no examination and no pre-licensing education. Applicants must have been a bona fide DC resident or employed in DC for at least six months and be fingerprinted by the Metropolitan Police Department. Licence fee approximately $365.20; temporary licences for charitable organisations are available at about $50 for up to seven days.', fee: '~$365.20', compactMember: false },
      FL: { agency: 'Florida Board of Auctioneers, Department of Business and Professional Regulation', agencyUrl: 'https://www.myfloridalicense.com/DBPR/professions/auctioneers/', note: '80 hours at an approved auction school, or an apprenticeship. No continuing education. Recovery fund rather than a bond. Licences expire 30 November of odd-numbered years. A licensed auctioneer cannot auction real property without a real estate broker licence, but a licensed broker can auction real estate without an auctioneer licence. Fees are approximately $451 by examination, $444.50 by apprenticeship and $230 by reciprocity.', fee: '≈$451 by exam / $444.50 apprenticeship / $230 reciprocity', compactMember: false },
      GA: { agency: 'Georgia Auctioneers Commission, Office of the Secretary of State', agencyUrl: 'https://sos.ga.gov/georgia-auctioneers-commission', note: 'Pre-licence course plus apprenticeship; 8 CE hours. Total initial fees approximately $420 including a $70 examination, $200 application and $150 recovery-fund contribution.', fee: '≈$420 ($70 exam + $200 application + $150 recovery fund)', compactMember: false },
      IL: { agency: 'Illinois Department of Financial and Professional Regulation (IDFPR), Division of Real Estate', agencyUrl: 'https://idfpr.illinois.gov/profs/auction.html', note: 'Licensed under the Auction License Act (225 ILCS 407), which remains in force with a statutory sunset date of 1 January 2030. Associate auctioneer and auction firm licences also exist. 12 CE hours per 24-month pre-renewal period; licence fee approximately $200. Internet auction listing services are largely excluded from the Act.', fee: '≈$200 licence', compactMember: false },
      IN: { agency: 'Indiana Auctioneer Commission, Professional Licensing Agency', agencyUrl: 'https://www.in.gov/pla/professions/auctioneer-commission/', note: 'Education plus examination; 16 CE hours. Fees approximately $180 ($35 application, $75 examination, $70 licence) plus a recovery-fund contribution.', fee: '≈$180 ($35 app + $75 exam + $70 licence + recovery fund)', compactMember: false },
      KY: { agency: 'Kentucky Board of Auctioneers', agencyUrl: 'https://auctioneers.ky.gov', note: 'One-year apprenticeship under a licensed auctioneer. 6 CE hours. Fees approximately $280 including a $125 examination, $125 licence and $30 recovery fund.', fee: '≈$280 ($125 exam + $125 licence + $30 recovery fund)', compactMember: false },
      LA: { agency: 'Louisiana Auctioneers Licensing Board', agencyUrl: 'https://www.lalb.org', note: 'Auction school or apprenticeship route; $10,000 auctioneer bond, and from 1 January 2025 a $25,000 bond for auction businesses handling real estate. Licence fee approximately $300.', fee: '≈$300 licence', compactMember: false },
      ME: { agency: 'Maine Board of Licensure of Auctioneers, Office of Professional and Occupational Regulation', agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/auctioneers', note: 'Licence required; examination on Maine auction law and general auction practice.', fee: '≈$125 licence', compactMember: false },
      MA: { agency: 'Massachusetts Division of Standards, Office of Consumer Affairs and Business Regulation', agencyUrl: 'https://www.mass.gov/orgs/division-of-standards', note: 'Licensed through the Division of Standards rather than a dedicated auctioneer board. Bond required. Massachusetts distinguishes between licensees who attended an accredited auction school, a non-accredited school, or who were grandfathered in 1986 — a distinction that other states apply when granting reciprocity.', fee: '≈$150 licence', compactMember: false },
      MS: { agency: 'Mississippi Auctioneer Commission', agencyUrl: 'https://www.auctioneers.ms.gov', note: 'Licence and examination required; reciprocal applicants must be licensed and resident in Mississippi.', fee: '≈$400 (application + exam + licence)', compactMember: false },
      NH: { agency: 'New Hampshire Auctioneers Board, Office of the Secretary of State', agencyUrl: 'https://www.sos.nh.gov/licensing/auctioneers', note: 'Licence required. Bond required. Reciprocity with several southern licensing states via the NALLOA network.', fee: '≈$155 licence', compactMember: false },
      NC: { agency: 'North Carolina Auctioneer Licensing Board', agencyUrl: 'https://www.ncalb.org', note: 'Apprentice, auctioneer and auction firm licences. Recovery-fund contribution required. North Carolina requires reciprocal applicants from most states to pass the North Carolina auctioneer examination even where a reciprocity agreement exists.', fee: '≈$410 (application + exam + licence + recovery fund)', compactMember: false },
      ND: { agency: 'North Dakota Public Service Commission, Licensing Division', agencyUrl: 'https://psc.nd.gov/licensing/', note: 'Auctioneer and auction clerk licences are issued by the Public Service Commission rather than a professional board — an unusual arrangement shared with only a few states. Bond required.', fee: '≈$250 licence', compactMember: false },
      OH: { agency: 'Ohio Department of Agriculture, Auctioneer Program', agencyUrl: 'https://agri.ohio.gov/divisions/amusement-ride-safety/auctioneers', note: 'Apprenticeship required under a licensed auctioneer; the Department of Agriculture, not a commerce agency, regulates the profession. Recovery fund and CE apply.', fee: '≈$260 (application + exam + licence)', compactMember: false },
      PA: { agency: 'Pennsylvania State Board of Auctioneer Examiners, Department of State', agencyUrl: 'https://www.pa.gov/agencies/dos/programs/professional-licensing/boards-commissions/auctioneer-examiners.html', note: 'Auctioneer, apprentice auctioneer, auction house and auction company licences. Bond required.', fee: '≈$270 (application + exam + licence)', compactMember: false },
      SC: { agency: 'South Carolina Auctioneers Commission, Department of Labor, Licensing and Regulation', agencyUrl: 'https://llr.sc.gov/auct/', note: 'Auctioneer, apprentice and auction firm licences; bond and recovery fund apply.', fee: '≈$360 (application + exam + licence + recovery fund)', compactMember: false },
      SD: { agency: 'South Dakota Real Estate Commission, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/realestate/', note: 'Structurally different from every other licensing state: under ARSD 20:69:06:02 the "auctioneer\u2019s licence" is a restricted real estate broker licence, required only of a person who is not already a licensed real estate broker and who acts as a real estate auctioneer. Applicants must show 116 classroom hours in real estate principles and practices within the prior two years; a real estate broker may obtain it without examination. There is no general personal-property auctioneer licence in South Dakota, which is why some national surveys list the state as unlicensed. Confidence medium — treat this page as a real-estate-auction credential.', fee: '≈$160 (restricted broker licence)', compactMember: false },
      TN: { agency: 'Tennessee Auctioneer Commission, Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/regboards/auctioneers.html', note: 'Apprentice licence required; 6 CE hours per two-year renewal. Firm and gallery licences were abolished effective 1 July 2019. A real estate licence is required in addition to the auctioneer licence to sell real estate at auction. Reciprocity with 17 states.', fee: '≈$345 (application + exam + apprentice/licence)', compactMember: false },
      TX: { agency: 'Texas Department of Licensing and Regulation (TDLR)', agencyUrl: 'https://www.tdlr.texas.gov/auc/auc.htm', note: 'Auctioneer and associate auctioneer licences; the associate auctioneer programme was restored by House Bill 2481 effective 1 September 2015. Education or apprenticeship plus examination, and a contribution to the Texas Auctioneer Education and Recovery Fund.', fee: '≈$335 (application + exam + licence + recovery fund)', compactMember: false },
      VT: { agency: 'Vermont Office of Professional Regulation, Secretary of State', agencyUrl: 'https://sos.vermont.gov/auctioneers/', note: 'Regulated under the OPR advisor model alongside property inspectors and real estate appraisers.', fee: '≈$145 licence', compactMember: false },
      VA: { agency: 'Virginia Board for Professional and Occupational Regulation, Auctioneers, DPOR', agencyUrl: 'https://www.dpor.virginia.gov/Boards/Auctioneers', note: 'Individual auctioneer and auction firm licences; bond required. Approved auction school or apprenticeship route.', fee: '≈$355 (application + exam + licence)', compactMember: false },
      WA: { agency: 'Washington State Department of Licensing', agencyUrl: 'https://dol.wa.gov/professional-licenses/auctioneers', note: 'Licensed under RCW 18.11. Separate auctioneer and auction company licences; a surety bond is required but there is no state examination or education requirement, making Washington the least demanding of the licensing states.', fee: '≈$209 licence', compactMember: false },
      WV: { agency: 'West Virginia Department of Agriculture', agencyUrl: 'https://agriculture.wv.gov', note: 'Like Ohio, West Virginia places auctioneer licensing with its agriculture department rather than a professional-licensing agency. Bond required.', fee: '≈$210 licence', compactMember: false },
      WI: { agency: 'Wisconsin Department of Safety and Professional Services (DSPS)', agencyUrl: 'https://dsps.wi.gov/pages/Professions/Auctioneer/Default.aspx', note: 'Registered auctioneer and auction company credentials. Wisconsin appears on the reciprocity lists of Alabama, Florida, Illinois and Tennessee.', fee: '≈$242 (registration + licence)', compactMember: false }
      // OMITTED — no state auctioneer licence exists in these 25 jurisdictions (city/county permits,
      // general business licences or bonds may still apply):
      // AK, AZ, CA ($20,000 bond required but no licence), CO, CT, DE, HI, IA, ID, KS, MD, MI,
      // MN (counties license), MO, MT, NE, NJ, NM, NV, NY (delegated to city governments),
      // OK, OR (conduct regulated by the Secretary of State but no licence), RI, UT, WY.
    }
  }
];
