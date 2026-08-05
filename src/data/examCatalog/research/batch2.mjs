// Research batch 2 — state-issued insurance producer, adjuster and title credentials.
//
// Deep prose is written once per template and reused across every jurisdiction that
// issues the credential. Only agency, agencyUrl, fee, note and compactMember vary.
//
// Omission policy: a state code is absent from `states` when that jurisdiction does
// not issue the credential at all. Those omissions are deliberate and researched —
// the reasoning is recorded in a trailing comment inside each dossier's `states` block.
//
// There is no interstate compact for insurance licensing in compacts.mjs (nlc, emsc,
// ptc, psypact, aslp, otc, counseling, aswb, ube, cpa-mobility), so `reciprocity.compact`
// is null throughout and every `compactMember` is false. Multi-state practice runs on
// the NAIC Producer Licensing Model Act reciprocity regime and non-resident filings
// through NIPR instead.
//
// Per-state fee figures are the state's own application fee plus that state's flat
// examination fee, with an all-in estimate that also includes fingerprinting where
// required. They are budgeting estimates — departments revise schedules regularly.

export default [
  // ══════════════════════════════════════════════════════════════════════
  // 1. Life & Health Insurance Producer
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'insurance-life-health',
    name: 'Life & Health Insurance Producer License',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'The state licence that authorises you to solicit, negotiate and sell life insurance, annuities, and accident & health products including Medicare and ACA plans.',

    overview:
      'A Life & Health producer licence is issued by the insurance regulator of each individual state — there is no federal insurance licence and no national body that grants one. In NAIC terminology "Life" and "Accident & Health or Sickness" are two separate lines of authority (LOAs) attached to a single Insurance Producer licence, which is why most candidates sit a combined L&H examination and receive both LOAs at once. The licence covers term and permanent life insurance, fixed annuities, disability income, long-term care, major medical, Medicare Supplement and Medicare Advantage, and employer group health. It does not by itself authorise the sale of variable life or variable annuities: those are securities as well as insurance, so they require an additional Variable LOA plus a FINRA registration (Series 6 or 7) held through a broker-dealer. Every state runs the same basic sequence — pre-licensing education where required, a proctored multiple-choice examination delivered by PSI, Pearson VUE or Prometric, a fingerprint-based criminal history check in most jurisdictions, and an application filed electronically through NIPR or Sircon. Once resident licensure is in place, selling in additional states is a paperwork exercise rather than a re-examination, because virtually every jurisdiction grants non-resident licences reciprocally.',
    eligibility:
      'Applicants must be at least 18 years old and, in almost every jurisdiction, must be legally authorised to work in the United States; a small number of departments require an employment authorisation document or permanent resident card to be filed separately. No degree is required and no sponsorship by a carrier is needed to obtain the licence itself, although an appointment from at least one insurer is required before you can actually write business in most states. About four fifths of jurisdictions require fingerprint-based state and FBI background screening; roughly a dozen — including Colorado, Connecticut, Indiana, Maryland, Michigan, Nebraska, New Hampshire, New York, Oklahoma, South Dakota and Vermont — do not fingerprint resident producers at all. Criminal history is reviewed case by case, but felonies involving dishonesty, breach of trust or insurance business trigger the federal bar in 18 U.S.C. §1033 and require a written 1033 consent waiver from the commissioner before any licence can issue.',
    exam: {
      admin: 'PSI Services, Pearson VUE or Prometric under contract to the state insurance department',
      questions: 'Roughly 100–150 scored items plus unscored pretest questions; combined Life & Health forms sit at the top of that range, single-line Life or Health forms at the bottom',
      time: '2–3 hours, allocated per line of authority',
      pass: '70% in the large majority of states; scoring is scaled and each line of authority is passed separately',
      fee: '$29–$184 per attempt — Missouri is the cheapest at $29, Illinois the most expensive because it charges for a two-part exam',
      format: 'Multiple choice, computer-based at a proctored test centre; remote online proctoring is offered in a growing number of states'
    },
    education: {
      hours: '0–200 hours of state-approved pre-licensing education',
      note: 'Roughly half the states require no pre-licensing education at all for the major lines. Where it is required the usual figure is 20 hours per line of authority. The outliers matter: Florida requires 60 hours for the 2-15 Health & Life class, New York around 40 hours for combined Life & Health, Colorado 50 hours, Tennessee 30 and Pennsylvania 24. The trend is toward removal — Washington dropped pre-licensing in 2023, Mississippi in 2024, and California repealed its 20-hour line-specific requirement effective 1 January 2026, leaving only the 12-hour Code & Ethics course. Wisconsin is unusual in ending each pre-licensing course with its own proctored certification exam that must be passed before the state exam. Course approval is state-specific: a course approved in one jurisdiction almost never satisfies another.'
    },
    prerequisites:
      'Minimum age 18; completion of any state-mandated pre-licensing hours from an approved provider; a passing score on the state examination for each requested line of authority; fingerprint-based background screening in most jurisdictions; and an electronic application through NIPR or Sircon. Variable Life and Variable Annuity authority additionally requires a FINRA CRD number and an active Series 6 or Series 7 registration.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing course (where required)', fee: '$49–$400' },
        { item: 'Licensing examination', fee: '$29–$92 per attempt per line' },
        { item: 'State licence application', fee: '$10–$225' },
        { item: 'NIPR electronic transaction fee', fee: '$5.60' },
        { item: 'Fingerprinting and background check', fee: '$5–$75 where required' },
        { item: 'Errors & omissions insurance (carrier requirement, not a licence requirement)', fee: '$300–$700/yr' },
        { item: 'Continuing education, 24 hours per two-year cycle', fee: '$30–$150 per cycle' }
      ],
      total: '$57 in Michigan to about $405 in Illinois for mandatory state and exam fees, before course tuition'
    },
    timeline: [
      { stage: 'Pre-licensing education, where required', duration: '1–4 weeks of study for a 20-hour course; longer for Florida and New York' },
      { stage: 'Scheduling and passing the examination', duration: '1–3 weeks; most states allow a retake within 24 hours to 7 days' },
      { stage: 'Fingerprinting and background check', duration: '3–10 business days for electronic capture to post' },
      { stage: 'Application review and licence issue', duration: '1–10 business days for a clean electronic NIPR filing' },
      { stage: 'Carrier appointment before you may write business', duration: '1–3 weeks per carrier' }
    ],
    route: [
      { title: 'Confirm your resident state and the lines you need', description: 'Your resident licence is issued by the state where you live or, if you live outside the United States, where you principally do business. Decide whether you want Life only, Accident & Health only, or both — the combined exam earns both lines in one sitting and is almost always the better value.' },
      { title: 'Complete pre-licensing education if your state requires it', description: 'Use a provider on the department\u2019s approved list and keep the certificate of completion. Certificates expire — Indiana\u2019s is valid six months, Maryland\u2019s and many others one year — so schedule the exam promptly after finishing.' },
      { title: 'Register and sit the state examination', description: 'Book directly with the state\u2019s vendor (PSI, Pearson VUE or Prometric). Bring a non-expired government photo ID with signature. Expect three question formats: direct questions, incomplete sentences, and "all of the following EXCEPT" items, which cause the most avoidable point losses.' },
      { title: 'Submit fingerprints and the background check', description: 'Most states use a named vendor and a state-specific code — using the wrong code sends your results nowhere and stalls the application. Watch the validity windows: several states require prints to be less than 90 days old at the time you apply.' },
      { title: 'File the licence application through NIPR or Sircon', description: 'The NAIC Uniform Individual Application is filed electronically. Answer the background-disclosure questions honestly and upload court documents through NIPR\u2019s Attachments Warehouse if you answer yes to any. Passing exam scores expire — commonly after 90 to 183 days — so file inside that window.' },
      { title: 'Obtain carrier appointments and start selling', description: 'A licence permits you to be appointed; the appointment is what authorises you to represent a specific insurer. Contracting with a carrier or an FMO/IMO triggers its own background and E&O checks.' },
      { title: 'Add non-resident licences as your book grows', description: 'File the Non-Resident Licence application through NIPR for each additional state. No new examination and no new pre-licensing education is required, provided your resident licence stays in good standing and carries the equivalent lines of authority.' }
    ],
    providersNote:
      'Each state insurance department publishes its own list of approved pre-licensing and continuing-education providers, and that list is the only authoritative source — national providers such as Kaplan Financial Education, ExamFX, A.D. Banker, America\u2019s Professor and Achievable hold approvals in many but not all jurisdictions. Candidate handbooks published by PSI, Pearson VUE and Prometric give the exact content outline, item counts and reference list for each state form and are free to download; Prometric also publishes a free generic Life/Health practice test. Where a per-state fee is shown below it is the state application fee plus that state\u2019s flat examination fee, with an all-in estimate that includes fingerprinting where it is mandatory; it excludes course tuition, E&O premiums and NIPR transaction charges.',
    faqs: [
      {
        q: 'Is there a national insurance licence?',
        a: 'No. Insurance is regulated state by state under the McCarran-Ferguson Act, so every producer holds one resident licence plus a non-resident licence in each additional state where they sell. The NAIC writes model law and the NIPR runs the shared electronic filing infrastructure, but neither issues licences. What feels national is the reciprocity regime: once you hold a resident licence, the other 50 jurisdictions will issue you a non-resident licence on a paperwork filing alone.'
      },
      {
        q: 'Do I have to retake the exam to sell in another state?',
        a: 'Almost never. Under the NAIC Producer Licensing Model Act, a state must issue a non-resident licence to a producer whose home-state licence is in good standing and who holds the equivalent line of authority, without a further examination or pre-licensing course. The main exceptions are title insurance and, in some states, adjuster and public adjuster lines. If you move house and change resident states you must apply for a new resident licence within a set window — usually 90 days — and most states waive retesting if you do so promptly.'
      },
      {
        q: 'What is the difference between Life & Health and Property & Casualty?',
        a: 'They are different lines of authority with different examinations. Life & Health covers products that pay on death, disability, illness or longevity — life insurance, annuities, disability income, long-term care, major medical and Medicare. Property & Casualty covers damage to property and legal liability — homeowners, auto, commercial property, general liability and workers\u2019 compensation. Many producers eventually hold both, which requires passing both exams; they are added as extra LOAs to the same producer licence rather than as a second licence.'
      },
      {
        q: 'Can I sell Medicare plans with this licence?',
        a: 'The state Accident & Health line of authority is the legal prerequisite, but it is not sufficient on its own. To sell Medicare Advantage or Part D you must additionally pass the AHIP Medicare training and exam (or an equivalent carrier-approved course) annually, complete each carrier\u2019s own product certification, and be appointed by that carrier. Medicare Supplement is state-regulated only and needs no AHIP, though most carriers still require product training.'
      },
      {
        q: 'How hard is the exam and what happens if I fail?',
        a: 'Published first-time pass rates for combined Life & Health forms typically sit around 60–70%. Candidates lose most points on state-specific law, on the "EXCEPT" question format, and on annuity and tax treatment items. Every state allows retakes; the waiting period ranges from 24 hours to 30 days and the full fee is charged again. Passing scores are perishable — commonly 90 to 183 days — so apply for the licence immediately after you pass.'
      },
      {
        q: 'Do I need errors & omissions insurance?',
        a: 'E&O is rarely a statutory licensing requirement for life and health producers, but it is a contractual requirement of virtually every carrier, FMO and IMO, so in practice you will need it before you can be appointed. Expect $300–$700 a year for a $1 million per-claim limit, more if you sell annuities to seniors.'
      },
      {
        q: 'How often do I renew?',
        a: 'Most states run a two-year cycle, frequently tied to your birth month or birth year, with 24 hours of continuing education per cycle including 3 hours of ethics. Arizona is a notable outlier with a four-year renewal. Continuing education must be posted to your state record before the renewal will process, and letting a licence lapse beyond 12 months normally means re-examining.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'Insurance producer licensing is not governed by any interstate compact. Portability instead runs on the reciprocity provisions of the NAIC Producer Licensing Model Act, which the Gramm-Leach-Bliley Act effectively forced the states to adopt: a state must issue a non-resident licence to a producer who holds an equivalent resident licence in good standing, without a further exam or pre-licensing course. Filings are made electronically through the National Insurance Producer Registry (NIPR), which is jointly owned by the NAIC and the state departments and connects to every jurisdiction. Practical caveats: your non-resident licences all hang off your resident licence, so if the resident licence lapses the non-resident ones follow; continuing education is generally satisfied by meeting your home state\u2019s requirement; and a change of residence requires a new resident licence, usually within 90 days.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Department of Insurance', agencyUrl: 'https://www.aldoi.gov', fee: '$80 licence + $50 exam (≈$184 all-in)', note: '20 hours of pre-licensing education per line of authority. Fingerprinting is required and costs about $48.', compactMember: false },
      AK: { agency: 'Alaska Division of Insurance, Department of Commerce, Community and Economic Development', agencyUrl: 'https://www.commerce.alaska.gov/web/ins/', fee: '$75 licence + $89 exam (≈$233 all-in)', note: 'No pre-licensing education requirement, but Alaska has one of the higher examination fees in the country.', compactMember: false },
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', fee: '$120 licence + $38 exam (≈$206 all-in)', note: 'No pre-licensing education. Fingerprints are captured at the PSI exam site. Arizona is unusual in renewing producer licences every four years rather than every two.', compactMember: false },
      AR: { agency: 'Arkansas Insurance Department', agencyUrl: 'https://insurance.arkansas.gov', fee: '$15 licence + $50 exam (≈$95 all-in)', note: '20 hours of pre-licensing education. One of the five cheapest states to get licensed in.', compactMember: false },
      CA: { agency: 'California Department of Insurance (CDI)', agencyUrl: 'https://www.insurance.ca.gov', fee: '$188 licence + $88 exam (≈$358 all-in)', note: 'From 1 January 2026 California requires only the 12-hour Code & Ethics course; the former 20-hour line-specific pre-licensing requirement was repealed. PSI administers the exam and Live Scan fingerprinting is mandatory.', compactMember: false },
      CO: { agency: 'Colorado Division of Insurance, Department of Regulatory Agencies (DORA)', agencyUrl: 'https://doi.colorado.gov', fee: '$47 licence + $47 exam (≈$100 all-in)', note: '50 hours of pre-licensing education, one of the highest requirements in the country, but no fingerprinting and very low state fees.', compactMember: false },
      CT: { agency: 'Connecticut Insurance Department', agencyUrl: 'https://portal.ct.gov/cid', fee: '$140 licence + $65 exam (≈$211 all-in)', note: '20 hours of pre-licensing education. No fingerprinting for resident producers.', compactMember: false },
      DE: { agency: 'Delaware Department of Insurance', agencyUrl: 'https://insurance.delaware.gov', fee: '$100 licence + $90 exam (≈$271 all-in)', note: 'No pre-licensing education requirement, but Delaware charges among the highest combined exam and fingerprint costs.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', fee: '$105 licence + $75 exam (≈$236 all-in)', note: 'Pre-licensing hours vary by line of authority. DISB offers the full range of major and limited lines through NIPR.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '$50 licence + $44 exam (≈$147 all-in)', note: 'Issued as licence class 2-15 Health & Life (including Annuities & Variable Contracts), which requires 60 hours of pre-licensing education. Pearson VUE administers the exam. Florida uses its own numeric licence-class codes rather than NAIC LOA names.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '$100 licence + $63 exam (≈$235 all-in)', note: 'Resident applicants apply through Sircon rather than NIPR. A pre-licensing course is required for each line; the requirement is waived for holders of the CLU or FLMI designation.', compactMember: false },
      HI: { agency: 'Hawaii Insurance Division, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/ins/', fee: '$150 licence + $75 exam (≈$298 all-in)', note: 'No pre-licensing education, but Hawaii charges one of the highest application fees in the country.', compactMember: false },
      ID: { agency: 'Idaho Department of Insurance', agencyUrl: 'https://doi.idaho.gov', fee: '$80 licence + $60 exam (≈$210 all-in)', note: 'No pre-licensing education requirement. Fingerprinting costs about $70.', compactMember: false },
      IL: { agency: 'Illinois Department of Insurance, Department of Financial and Professional Regulation', agencyUrl: 'https://idfpr.illinois.gov/insurance.html', fee: '$215 licence + $184 exam (≈$405 all-in)', note: 'The most expensive jurisdiction in the country. 20 hours of pre-licensing education and a two-part examination, each part charged separately.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '$40 licence + $69 exam (≈$115 all-in)', note: '20 hours of pre-licensing education; the completion certificate is valid for six months. No fingerprinting. Applications may be filed through Sircon or NIPR.', compactMember: false },
      IA: { agency: 'Iowa Insurance Division', agencyUrl: 'https://iid.iowa.gov', fee: '$50 licence + $49 exam (≈$105 all-in)', note: 'No pre-licensing education. Fingerprint-based background screening was introduced for resident applicants in 2025.', compactMember: false },
      KS: { agency: 'Kansas Insurance Department', agencyUrl: 'https://insurance.kansas.gov', fee: '$30 licence + $57 exam (≈$153 all-in)', note: 'No pre-licensing education requirement; fingerprinting costs about $60.', compactMember: false },
      KY: { agency: 'Kentucky Department of Insurance', agencyUrl: 'https://insurance.ky.gov', fee: '$40 licence + $50 exam (≈$121 all-in)', note: '20 hours of pre-licensing education. Kentucky uses a name-based rather than fingerprint-based criminal history check for producers.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '$75 licence + $30 exam (≈$150 all-in)', note: 'No pre-licensing education requirement and one of the lowest examination fees in the country.', compactMember: false },
      ME: { agency: 'Maine Bureau of Insurance, Department of Professional and Financial Regulation', agencyUrl: 'https://www.maine.gov/pfr/insurance/', fee: '$25 licence + $55 exam (≈$86 all-in)', note: 'No pre-licensing education requirement. Among the five cheapest jurisdictions overall.', compactMember: false },
      MD: { agency: 'Maryland Insurance Administration (MIA)', agencyUrl: 'https://insurance.maryland.gov', fee: '$54 licence + $62 exam (≈$122 all-in)', note: 'Prometric administers the exam, in person or remotely through ProProctor, and Maryland forms are also offered in Spanish. No fingerprinting for resident producers. A four-day wait applies before a retake.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Insurance', agencyUrl: 'https://www.mass.gov/orgs/division-of-insurance', fee: '$225 licence + $39 exam (≈$270 all-in)', note: 'No pre-licensing education, but the $225 producer application fee is the highest flat producer fee in the country. Adding a line of authority is free for Life and Accident & Health.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '$10 licence + $41 exam (≈$57 all-in)', note: 'The cheapest jurisdiction in the country to get licensed. 20 hours of pre-licensing education; no fingerprinting.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '$50 licence + $45 exam (≈$186 all-in)', note: '20 hours of pre-licensing education. A $20 surcharge is added to the application and fingerprinting costs about $65. Minnesota issues a Tennessen Warning about the private data collected on the application.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '$100 licence + $52 exam (≈$153 all-in)', note: 'Mississippi removed its pre-licensing education requirement in 2024.', compactMember: false },
      MO: { agency: 'Missouri Department of Commerce and Insurance', agencyUrl: 'https://insurance.mo.gov', fee: '$100 licence + $29 exam (≈$135 all-in)', note: 'No pre-licensing education requirement, and at $29 the lowest examination fee in the country.', compactMember: false },
      MT: { agency: 'Montana Commissioner of Securities and Insurance (CSI)', agencyUrl: 'https://csimt.gov', fee: 'No state licence fee + $59 exam (≈$119 all-in)', note: 'Montana charges no state application fee for the producer licence — only the NIPR transaction charge — but requires fingerprinting at about $54. No pre-licensing education.', compactMember: false },
      NE: { agency: 'Nebraska Department of Insurance', agencyUrl: 'https://doi.nebraska.gov', fee: '$50 licence + $45 exam (≈$101 all-in)', note: 'No pre-licensing education and no fingerprinting for resident producers.', compactMember: false },
      NV: { agency: 'Nevada Division of Insurance', agencyUrl: 'https://doi.nv.gov', fee: '$185 licence + $39 exam (≈$284 all-in)', note: '20 hours of pre-licensing education. Nevada charges one of the highest application fees despite a low exam fee.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '$215 licence + $59 exam (≈$280 all-in)', note: 'A single $210–$215 Insurance Producer fee covers all lines of authority on one application, so adding Life and Accident & Health together costs no more than one. No pre-licensing education and no fingerprinting.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance (DOBI)', agencyUrl: 'https://www.state.nj.us/dobi/', fee: '$170 licence + $45 exam (≈$287 all-in)', note: 'The $170 Insurance Producer fee covers the major-line combination (Life, Accident & Health, Variable, Property, Casualty, Personal Lines, Surplus Lines, Title); adding a line later costs $20. 20 hours of pre-licensing education. Resident disabled veterans are exempt from the fee.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '$35 licence + $42 exam (≈$127 all-in)', note: 'No pre-licensing education requirement; fingerprinting costs about $44.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '$40 licence + $33 exam (≈$73 all-in)', note: 'Pre-licensing education is required — about 40 hours for combined Life & Health — but there is no fingerprinting and the state fees are among the lowest in the country. Licences run on a fixed two-year cycle.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '$82 application incl. fingerprints + $50 per line + $44 exam (≈$176 all-in)', note: '20 hours of pre-licensing education per line. North Carolina charges a separate $50 fee for each line of authority requested on top of the base application.', compactMember: false },
      ND: { agency: 'North Dakota Insurance Department', agencyUrl: 'https://www.insurance.nd.gov', fee: '$100 licence + $64 exam (≈$240 all-in)', note: 'No pre-licensing education requirement; fingerprinting costs about $70.', compactMember: false },
      OH: { agency: 'Ohio Department of Insurance', agencyUrl: 'https://insurance.ohio.gov', fee: '$15 licence + $42 exam (≈$135 all-in)', note: '20 hours of pre-licensing education. The $15 application fee is among the lowest in the country, but WebCheck fingerprinting adds about $72.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '$60 licence + $41 exam (≈$107 all-in)', note: 'No pre-licensing education and, unusually, no fingerprinting — a state and federal record check is run as part of the application instead. PSI administers the exam.', compactMember: false },
      OR: { agency: 'Oregon Division of Financial Regulation, Department of Consumer and Business Services', agencyUrl: 'https://dfr.oregon.gov', fee: '$75 licence + $45 exam (≈$187 all-in)', note: '20 hours of pre-licensing education. Producers representing an agency must file the Firm or Corporation Affiliation form within 30 days.', compactMember: false },
      PA: { agency: 'Pennsylvania Insurance Department', agencyUrl: 'https://www.insurance.pa.gov', fee: '$55 licence + $43 exam (≈$128 all-in)', note: '24 hours of pre-licensing education, an unusual figure that is neither 20 nor zero. Fingerprinting costs about $24.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '$125 licence + $80 exam (≈$216 all-in)', note: 'No pre-licensing education, but Rhode Island has both a high application fee and a high examination fee.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '$25 licence + $44 exam (≈$125 all-in)', note: 'No pre-licensing education requirement; fingerprinting costs about $50.', compactMember: false },
      SD: { agency: 'South Dakota Division of Insurance, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/insurance/', fee: '$25 licence + $85 exam (≈$110 all-in)', note: 'No pre-licensing education and no fingerprinting, but South Dakota charges one of the highest examination fees in the country.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/insurance.html', fee: '$50 licence + $49 exam (≈$147 all-in)', note: '30 hours of pre-licensing education, more than the usual 20.', compactMember: false },
      TX: { agency: 'Texas Department of Insurance (TDI)', agencyUrl: 'https://www.tdi.texas.gov', fee: '$50 licence + $33 exam (≈$123 all-in)', note: 'Issued as the General Lines — Life, Accident, Health and HMO licence. No pre-licensing education; Pearson VUE administers the exam and captures fingerprints.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '$75 licence + $32 exam (≈$135 all-in)', note: 'No pre-licensing education. Prometric administers the exam; applications are filed through Sircon or NIPR.', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', fee: '$60 licence + $48 exam (≈$108 all-in)', note: 'No pre-licensing education and no fingerprinting for resident producers.', compactMember: false },
      VA: { agency: 'Virginia State Corporation Commission, Bureau of Insurance', agencyUrl: 'https://www.scc.virginia.gov/pages/Insurance', fee: '$15 licence + $35 exam (≈$86 all-in)', note: 'Virginia repealed mandatory pre-licensing education for the major lines in 2001. Prometric administers the exam. Fingerprints go through Fieldprint using code FPVABOIProducer and must be under 90 days old when you apply; passing scores are valid 183 days.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '$60 licence + $35 exam (≈$150 all-in)', note: 'Washington removed its pre-licensing education requirement in 2023. Fingerprinting costs about $49.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '$55 licence + $44 exam (≈$105 all-in)', note: '20 hours of pre-licensing education.', compactMember: false },
      WI: { agency: 'Wisconsin Office of the Commissioner of Insurance (OCI)', agencyUrl: 'https://oci.wi.gov', fee: '$90 licence + $75 exam (≈$207 all-in)', note: '20 hours of pre-licensing education per line, and Wisconsin is unique in requiring each course to end with a proctored closed-book certification exam at 70% before you may sit the PSI licensing exam. Fingerprints go through Fieldprint using code FPWIOCIInsurance ($36).', compactMember: false },
      WY: { agency: 'Wyoming Department of Insurance', agencyUrl: 'https://doi.wyo.gov', fee: '$100 licence + $50 exam (≈$189 all-in)', note: 'No pre-licensing education requirement; fingerprinting costs about $39.', compactMember: false }
      // All 51 jurisdictions issue a Life and an Accident & Health line of authority
      // under an Insurance Producer licence, so none is omitted from this template.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. Property & Casualty Insurance Producer
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'insurance-property-casualty',
    name: 'Property & Casualty Insurance Producer License',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'The state licence that authorises you to sell homeowners, auto, commercial property, general liability and workers\u2019 compensation insurance to individuals and businesses.',

    overview:
      'A Property & Casualty producer licence is the broadest of the standard insurance credentials, covering everything that protects physical assets and legal liability: personal auto and homeowners, renters and dwelling fire, commercial property, business owners policies, general and professional liability, commercial auto, inland marine, surety and workers\u2019 compensation. In NAIC terminology "Property" and "Casualty" are two distinct lines of authority attached to one Insurance Producer licence. Most states let you take them together in a single combined examination, but a handful — Wisconsin most prominently — have no combined form and require each line to be tested separately, while Georgia goes the other way and refuses to license Property or Casualty on its own, insisting that applicants take both. The licence is issued by the state insurance regulator, which is variously called a Department of Insurance, a Division of Insurance inside a broader commerce agency, or an Office of the Insurance Commissioner. Because P&C material spans both personal and commercial risk, the examination is usually the longest of the producer forms — 130 to 155 scored items in two to three hours — and the pre-licensing hour requirements, where they exist, are the heaviest. Florida is the extreme case, demanding 200 hours of coursework for the 2-20 General Lines class.',
    eligibility:
      'Applicants must be at least 18 years old and legally authorised to work in the United States. No degree, experience or carrier sponsorship is required to obtain the licence, although an appointment from an insurer is needed before you can write business for that insurer. Around four fifths of states run fingerprint-based state and FBI background checks; Colorado, Connecticut, Indiana, Maryland, Michigan, Nebraska, New Hampshire, New York, Oklahoma, South Dakota and Vermont do not fingerprint resident producers. Convictions are assessed individually, but any felony involving dishonesty, breach of trust or the business of insurance triggers the federal prohibition in 18 U.S.C. §1033 and requires a written 1033 consent order from the commissioner before licensure. Massachusetts adds a distinctive twist: a $75 lead-paint surcharge is payable whenever Property, Casualty or Personal Lines authority is added.',
    exam: {
      admin: 'PSI Services, Pearson VUE or Prometric under contract to the state insurance department',
      questions: 'Typically 130–155 items on a combined Property & Casualty form; 100–110 on a single-line Property or Casualty form',
      time: '2 hours 30 minutes to 3 hours for the combined form',
      pass: '70% in the large majority of states, scored separately for each line where the lines are tested separately',
      fee: '$29–$184 per attempt depending on the state',
      format: 'Multiple choice, computer-based at a proctored test centre; remote online proctoring is available in a growing number of states'
    },
    education: {
      hours: '0–200 hours of state-approved pre-licensing education',
      note: 'About half the states require nothing. Where education is required the standard figure is 20 hours per line, so a combined P&C licence often means 32–40 hours. Wisconsin is explicit about the arithmetic: 20 hours per line, of which the 8-hour general core need not be repeated for a second line taken within 12 months, giving a 32-hour regulatory minimum that providers usually package as 40. Georgia requires a 16-hour P&C course (8 property plus 8 casualty). Florida requires 200 hours for the 2-20 General Lines Agent class, by far the heaviest in the country. Colorado requires 50 hours, Pennsylvania 24, Tennessee 30, and New York around 90 across the property and casualty subjects. Waivers exist for professional designations — Georgia waives the P&C course and exam for CPCU holders.'
    },
    prerequisites:
      'Minimum age 18; completion of any state-mandated pre-licensing hours from an approved provider; a passing score on the state Property & Casualty examination; fingerprint-based screening in most jurisdictions; and an electronic application filed through NIPR or Sircon. Surplus lines authority is layered on top and requires an active P&C licence first in every state that offers it.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing course (where required)', fee: '$99–$500, higher in Florida because of the 200-hour requirement' },
        { item: 'Licensing examination', fee: '$29–$92 per attempt' },
        { item: 'State licence application', fee: '$10–$225' },
        { item: 'NIPR electronic transaction fee', fee: '$5.60' },
        { item: 'Fingerprinting and background check', fee: '$5–$75 where required' },
        { item: 'Massachusetts lead-paint surcharge (Property, Casualty or Personal Lines only)', fee: '$75' },
        { item: 'Errors & omissions insurance', fee: '$400–$900/yr' },
        { item: 'Continuing education, 24 hours per two-year cycle', fee: '$30–$150 per cycle' }
      ],
      total: '$57 in Michigan to about $405 in Illinois for mandatory state and exam fees, before course tuition'
    },
    timeline: [
      { stage: 'Pre-licensing education, where required', duration: '2–6 weeks for 32–40 hours; several months for Florida\u2019s 200-hour class' },
      { stage: 'Scheduling and passing the examination', duration: '1–3 weeks' },
      { stage: 'Fingerprinting and background check', duration: '3–10 business days to post' },
      { stage: 'Application review and licence issue', duration: '1–10 business days for a clean electronic filing' },
      { stage: 'Carrier appointments and agency contracting', duration: '2–4 weeks' }
    ],
    route: [
      { title: 'Decide between combined P&C and a single line', description: 'Most producers take the combined exam because commercial accounts eventually appear. Choose a single Property or Casualty line only if your role is genuinely restricted — and note that Georgia does not permit single-line P&C licensure at all.' },
      { title: 'Complete pre-licensing education if required', description: 'Check whether your state counts hours per line or in total. In Wisconsin the 8-hour general core carries over between lines taken within 12 months; in Florida the 200-hour General Lines course is a months-long commitment.' },
      { title: 'Register and sit the examination', description: 'Book with the state vendor, and download the state candidate handbook for the content outline and item weights. P&C forms are long — pace yourself at roughly one minute per question and flag rather than agonise.' },
      { title: 'Complete fingerprinting where required', description: 'Use the exact state vendor code so results route to the insurance department. Several states impose 90-day validity windows on both prints and the application.' },
      { title: 'File the application through NIPR or Sircon', description: 'Submit the NAIC Uniform Individual Application with your exam results. Answer all background questions honestly and upload supporting court documents where required. File before the passing score expires.' },
      { title: 'Get appointed and, if needed, add surplus lines', description: 'Carrier appointments authorise you to represent specific insurers. If you intend to place business with non-admitted carriers, apply for the surplus lines licence — it requires an active P&C licence and, in several states, a bond and monthly premium-tax filings.' },
      { title: 'Extend into other states as needed', description: 'Non-resident P&C licences are issued reciprocally through NIPR with no additional exam. Commercial producers should also check each state\u2019s exemption for non-resident producers working on multi-state commercial contracts.' }
    ],
    providersNote:
      'Approved-provider lists are maintained by each state insurance department and are the only authoritative source; Kaplan Financial Education, ExamFX, A.D. Banker, America\u2019s Professor and Achievable are widely but not universally approved. The state candidate handbooks published by PSI, Pearson VUE and Prometric give exact content outlines and are free — download the one for your state before buying any prep product, because the state-law section is where most candidates fail. Prometric publishes a free generic Property & Casualty practice exam that mirrors the test interface. Where a per-state fee appears below it combines the state application fee with that state\u2019s flat examination fee and, in the all-in estimate, mandatory fingerprinting; it excludes tuition, E&O premiums and NIPR transaction charges.',
    faqs: [
      {
        q: 'Should I take the combined P&C exam or a single line?',
        a: 'Take the combined exam unless you are certain your role will never touch commercial business. The combined form is longer but earns both lines of authority in one sitting for the same application fee in most states, and adding a line later means another exam and, in some states, another fee. Georgia removes the choice entirely by refusing to license Property or Casualty separately.'
      },
      {
        q: 'What is the difference between an agent, a broker and a producer?',
        a: 'Under the NAIC Producer Licensing Model Act the states consolidated the old agent and broker categories into a single "insurance producer" licence, so in most jurisdictions the words are interchangeable in law. The practical distinction survives in the market: an agent represents one or more insurers under appointment, while a broker represents the buyer and shops multiple carriers. A few states, including Arizona, still describe brokers as a class but include them in the producer licence, and California retains the "broker-agent" terminology.'
      },
      {
        q: 'Do I need a separate licence to place business with non-admitted carriers?',
        a: 'Yes. Surplus lines business — coverage placed with insurers not licensed in the state — requires a separate Surplus Lines Broker or Surplus Lines Producer licence in every state that regulates it. You must hold an active P&C licence first, and several states add a bond, an annual affidavit and monthly or quarterly premium-tax filings. Surplus lines is not reciprocal in the same easy way as producer lines: the Nonadmitted and Reinsurance Reform Act of 2010 assigns premium tax to the insured\u2019s home state, which simplifies tax but not licensing.'
      },
      {
        q: 'Can I sell flood or crop insurance with a P&C licence?',
        a: 'A P&C licence is the legal foundation, but both lines carry federal add-ons. To write National Flood Insurance Program policies you must complete the NFIP agent training required by section 207 of the Flood Insurance Reform Act. To write federal crop insurance you must meet the USDA Risk Management Agency training and competency requirements, typically at least 12 hours of structured training plus a competency test.'
      },
      {
        q: 'How hard is the P&C exam?',
        a: 'It is generally regarded as the hardest of the standard producer exams because it spans personal lines, commercial lines, and a large body of state-specific law and forms. Published first-time pass rates commonly sit in the 55–70% band. The reliable failure points are state auto financial-responsibility minimums, workers\u2019 compensation rules, cancellation and non-renewal notice periods, and the "all of the following EXCEPT" question format.'
      },
      {
        q: 'What happens if I let the licence lapse?',
        a: 'Most states allow late renewal or reinstatement within 12 months on payment of the licence fee plus a reinstatement penalty, with no re-examination. Past 12 months you are usually treated as a new applicant and must retake the exam and repeat any pre-licensing education. Because non-resident licences depend on your resident licence, a lapse at home can cascade across every state you write in.'
      },
      {
        q: 'Do I have to be appointed by a carrier before I can be licensed?',
        a: 'No — licensure and appointment are separate steps in every state, and you can hold an unappointed licence indefinitely. You simply cannot transact business for an insurer until that insurer files an appointment. A few states, including Arizona, have moved to a registry model in which carriers keep an internal list of authorised producers instead of filing individual appointments.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for insurance producer licensing. Multi-state practice is handled through the NAIC Producer Licensing Model Act reciprocity regime, which requires each state to issue a non-resident licence to a producer holding an equivalent resident licence in good standing without a further examination or pre-licensing course. Applications are filed electronically through the National Insurance Producer Registry (NIPR). Two P&C-specific points are worth noting: several states, Arizona among them, recognise an exemption from non-resident licensing for producers working on multi-state commercial contracts; and surplus lines authority, though it sits on top of a P&C licence, is separately licensed and less uniformly reciprocal, so verify it state by state.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Department of Insurance', agencyUrl: 'https://www.aldoi.gov', fee: '$80 licence + $50 exam (≈$184 all-in)', note: '20 hours of pre-licensing education per line; Property and Casualty are separate lines of authority. Fingerprinting about $48.', compactMember: false },
      AK: { agency: 'Alaska Division of Insurance, Department of Commerce, Community and Economic Development', agencyUrl: 'https://www.commerce.alaska.gov/web/ins/', fee: '$75 licence + $89 exam (≈$233 all-in)', note: 'No pre-licensing education requirement.', compactMember: false },
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', fee: '$120 licence + $38 exam (≈$206 all-in)', note: 'No pre-licensing education. PSI administers the exam and captures fingerprints on site. Arizona recognises a licensing exemption for non-resident commercial-lines producers on multi-state contracts, and renews producer licences every four years.', compactMember: false },
      AR: { agency: 'Arkansas Insurance Department', agencyUrl: 'https://insurance.arkansas.gov', fee: '$15 licence + $50 exam (≈$95 all-in)', note: '20 hours of pre-licensing education per line.', compactMember: false },
      CA: { agency: 'California Department of Insurance (CDI)', agencyUrl: 'https://www.insurance.ca.gov', fee: '$188 licence + $88 exam (≈$358 all-in)', note: 'Issued as the Property Broker-Agent and Casualty Broker-Agent licence. From 1 January 2026 only the 12-hour Code & Ethics course is required. PSI administers the exam; Live Scan fingerprinting is mandatory.', compactMember: false },
      CO: { agency: 'Colorado Division of Insurance, Department of Regulatory Agencies (DORA)', agencyUrl: 'https://doi.colorado.gov', fee: '$47 licence + $47 exam (≈$100 all-in)', note: '50 hours of pre-licensing education, one of the highest in the country, but no fingerprinting and very low state fees.', compactMember: false },
      CT: { agency: 'Connecticut Insurance Department', agencyUrl: 'https://portal.ct.gov/cid', fee: '$140 licence + $65 exam (≈$211 all-in)', note: '20 hours of pre-licensing education. No fingerprinting for resident producers.', compactMember: false },
      DE: { agency: 'Delaware Department of Insurance', agencyUrl: 'https://insurance.delaware.gov', fee: '$100 licence + $90 exam (≈$271 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $75.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', fee: '$105 licence + $75 exam (≈$236 all-in)', note: 'Pre-licensing hours vary by line of authority. DISB offers Property, Casualty and a standalone Personal Lines authority.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '$50 licence + $44 exam (≈$147 all-in)', note: 'Issued as licence class 2-20 General Lines (Property & Casualty), which carries the heaviest pre-licensing requirement in the country at 200 hours. Pearson VUE administers the exam.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '$100 licence + $63 exam (≈$235 all-in)', note: 'Georgia does not license Property or Casualty separately — applicants must apply for both. A 16-hour P&C course (8 property plus 8 casualty) is required, waived for CPCU holders. Residents apply through Sircon.', compactMember: false },
      HI: { agency: 'Hawaii Insurance Division, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/ins/', fee: '$150 licence + $75 exam (≈$298 all-in)', note: 'No pre-licensing education, but one of the highest application fees in the country.', compactMember: false },
      ID: { agency: 'Idaho Department of Insurance', agencyUrl: 'https://doi.idaho.gov', fee: '$80 licence + $60 exam (≈$210 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $70.', compactMember: false },
      IL: { agency: 'Illinois Department of Insurance, Department of Financial and Professional Regulation', agencyUrl: 'https://idfpr.illinois.gov/insurance.html', fee: '$215 licence + $184 exam (≈$405 all-in)', note: 'The most expensive jurisdiction in the country. 20 hours of pre-licensing education and a two-part examination charged separately.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '$40 licence + $69 exam (≈$115 all-in)', note: '20 hours of pre-licensing education; certificate valid six months. Applicants may not hold both the combined "Property & Casualty" authority and the separate Property and Casualty authorities. No fingerprinting.', compactMember: false },
      IA: { agency: 'Iowa Insurance Division', agencyUrl: 'https://iid.iowa.gov', fee: '$50 licence + $49 exam (≈$105 all-in)', note: 'No pre-licensing education. Fingerprint screening introduced for resident applicants in 2025.', compactMember: false },
      KS: { agency: 'Kansas Insurance Department', agencyUrl: 'https://insurance.kansas.gov', fee: '$30 licence + $57 exam (≈$153 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $60.', compactMember: false },
      KY: { agency: 'Kentucky Department of Insurance', agencyUrl: 'https://insurance.ky.gov', fee: '$40 licence + $50 exam (≈$121 all-in)', note: '20 hours of pre-licensing education. Name-based rather than fingerprint-based background check.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '$75 licence + $30 exam (≈$150 all-in)', note: 'No pre-licensing education and one of the lowest exam fees in the country.', compactMember: false },
      ME: { agency: 'Maine Bureau of Insurance, Department of Professional and Financial Regulation', agencyUrl: 'https://www.maine.gov/pfr/insurance/', fee: '$25 licence + $55 exam (≈$86 all-in)', note: 'No pre-licensing education requirement; among the cheapest jurisdictions overall.', compactMember: false },
      MD: { agency: 'Maryland Insurance Administration (MIA)', agencyUrl: 'https://insurance.maryland.gov', fee: '$54 licence + $62 exam (≈$122 all-in)', note: 'Prometric administers the exam (Series 20-32 combined P&C, 130 items, 2 hr 30 min) in person or remotely via ProProctor. No fingerprinting; four-day wait before a retake.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Insurance', agencyUrl: 'https://www.mass.gov/orgs/division-of-insurance', fee: '$225 licence + $39 exam + $75 lead-paint surcharge (≈$345 all-in)', note: 'No pre-licensing education, but a $75 lead-paint surcharge applies specifically when Property, Casualty or Personal Lines authority is added — including on an otherwise free amendment.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '$10 licence + $41 exam (≈$57 all-in)', note: 'The cheapest jurisdiction in the country. 20 hours of pre-licensing education; no fingerprinting.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '$50 licence + $45 exam (≈$186 all-in)', note: '20 hours of pre-licensing education. Minnesota also offers a distinct Farm Property & Liability line of authority alongside Property and Casualty.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '$100 licence + $52 exam (≈$153 all-in)', note: 'Pre-licensing education was removed in 2024.', compactMember: false },
      MO: { agency: 'Missouri Department of Commerce and Insurance', agencyUrl: 'https://insurance.mo.gov', fee: '$100 licence + $29 exam (≈$135 all-in)', note: 'No pre-licensing education and the lowest examination fee in the country.', compactMember: false },
      MT: { agency: 'Montana Commissioner of Securities and Insurance (CSI)', agencyUrl: 'https://csimt.gov', fee: 'No state licence fee + $59 exam (≈$119 all-in)', note: 'No state application fee beyond the NIPR transaction charge; fingerprinting about $54. Montana offers Property and Casualty but no standalone Personal Lines authority.', compactMember: false },
      NE: { agency: 'Nebraska Department of Insurance', agencyUrl: 'https://doi.nebraska.gov', fee: '$50 licence + $45 exam (≈$101 all-in)', note: 'No pre-licensing education and no fingerprinting.', compactMember: false },
      NV: { agency: 'Nevada Division of Insurance', agencyUrl: 'https://doi.nv.gov', fee: '$185 licence + $39 exam (≈$284 all-in)', note: '20 hours of pre-licensing education; high application fee.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '$215 licence + $59 exam (≈$280 all-in)', note: 'A single Insurance Producer fee of about $210–$215 covers all lines of authority on one application. Property, Casualty and a combined Property & Casualty authority are all offered. No pre-licensing education, no fingerprinting.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance (DOBI)', agencyUrl: 'https://www.state.nj.us/dobi/', fee: '$170 licence + $45 exam (≈$287 all-in)', note: 'The $170 producer fee covers the major-line combination; adding a line later costs $20. 20 hours of pre-licensing education. Surplus Lines applicants must hold Property or Casualty.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '$35 licence + $42 exam (≈$127 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $44.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '$40 licence + $33 exam (≈$73 all-in)', note: 'Substantial pre-licensing education is required across the property and casualty subjects, but there is no fingerprinting and state fees are among the lowest in the country.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '$82 application incl. fingerprints + $50 per line + $44 exam (≈$176 all-in)', note: '20 hours of pre-licensing education per line, and a separate $50 fee for each line of authority requested.', compactMember: false },
      ND: { agency: 'North Dakota Insurance Department', agencyUrl: 'https://www.insurance.nd.gov', fee: '$100 licence + $64 exam (≈$240 all-in)', note: 'No pre-licensing education. North Dakota offers an unusually wide LOA menu including Crop, Surety, Legal Expense and Self-Service Storage alongside Property and Casualty.', compactMember: false },
      OH: { agency: 'Ohio Department of Insurance', agencyUrl: 'https://insurance.ohio.gov', fee: '$15 licence + $42 exam (≈$135 all-in)', note: '20 hours of pre-licensing education. WebCheck fingerprinting adds about $72 to a very low $15 application fee.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '$60 licence + $41 exam (≈$107 all-in)', note: 'No pre-licensing education and no fingerprinting; a state and federal record check runs as part of the application. PSI administers the exam; the combined P&C form is 155 items in 2 hr 30 min.', compactMember: false },
      OR: { agency: 'Oregon Division of Financial Regulation, Department of Consumer and Business Services', agencyUrl: 'https://dfr.oregon.gov', fee: '$75 licence + $45 exam (≈$187 all-in)', note: '20 hours of pre-licensing education. Surplus lines applicants must also hold property and casualty authority.', compactMember: false },
      PA: { agency: 'Pennsylvania Insurance Department', agencyUrl: 'https://www.insurance.pa.gov', fee: '$55 licence + $43 exam (≈$128 all-in)', note: '24 hours of pre-licensing education; fingerprinting about $24.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '$125 licence + $80 exam (≈$216 all-in)', note: 'No pre-licensing education, but both the application and examination fees are high.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '$25 licence + $44 exam (≈$125 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $50.', compactMember: false },
      SD: { agency: 'South Dakota Division of Insurance, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/insurance/', fee: '$25 licence + $85 exam (≈$110 all-in)', note: 'No pre-licensing education and no fingerprinting, but one of the highest exam fees in the country.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/insurance.html', fee: '$50 licence + $49 exam (≈$147 all-in)', note: '30 hours of pre-licensing education.', compactMember: false },
      TX: { agency: 'Texas Department of Insurance (TDI)', agencyUrl: 'https://www.tdi.texas.gov', fee: '$50 licence + $33 exam (≈$123 all-in)', note: 'Issued as the General Lines — Property and Casualty licence. No pre-licensing education; Pearson VUE administers the exam and captures fingerprints.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '$75 licence + $32 exam (≈$135 all-in)', note: 'No pre-licensing education. Prometric administers the exam; filings go through Sircon or NIPR.', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', fee: '$60 licence + $48 exam (≈$108 all-in)', note: 'No pre-licensing education and no fingerprinting.', compactMember: false },
      VA: { agency: 'Virginia State Corporation Commission, Bureau of Insurance', agencyUrl: 'https://www.scc.virginia.gov/pages/Insurance', fee: '$15 licence + $35 exam (≈$86 all-in)', note: 'Pre-licensing education was repealed in 2001. Prometric administers the combined Property & Casualty form (Series 11-03, 145 items, 2 hr 30 min) — Virginia\u2019s only P&C exam. Fieldprint code FPVABOIProducer.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '$60 licence + $35 exam (≈$150 all-in)', note: 'Pre-licensing education was removed in 2023; fingerprinting about $49.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '$55 licence + $44 exam (≈$105 all-in)', note: '20 hours of pre-licensing education.', compactMember: false },
      WI: { agency: 'Wisconsin Office of the Commissioner of Insurance (OCI)', agencyUrl: 'https://oci.wi.gov', fee: '$90 licence + $75 exam per line (≈$207 all-in)', note: 'Wisconsin has no combined P&C exam — every line of authority is tested separately, so a full P&C licence means two PSI exams. 20 hours of pre-licensing per line, of which the 8-hour general core carries over if both lines are completed within 12 months (a 32-hour minimum). Each course ends with its own proctored certification exam. Fieldprint code FPWIOCIInsurance ($36).', compactMember: false },
      WY: { agency: 'Wyoming Department of Insurance', agencyUrl: 'https://doi.wyo.gov', fee: '$100 licence + $50 exam (≈$189 all-in)', note: 'No pre-licensing education requirement; fingerprinting about $39.', compactMember: false }
      // All 51 jurisdictions issue Property and Casualty lines of authority under an
      // Insurance Producer licence, so none is omitted from this template.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. Personal Lines Insurance Producer
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'insurance-personal-lines',
    name: 'Personal Lines Insurance Producer License',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'A narrower alternative to the full P&C licence, authorising the sale of homeowners, renters, personal auto and personal umbrella coverage to individuals and families — but not to businesses.',

    overview:
      'Personal Lines is a subset of the Property & Casualty category, restricted to non-commercial risks: personal auto, homeowners, renters, dwelling fire, personal inland marine and floaters, watercraft, motorcycle, mobile home and personal umbrella. It exists as its own line of authority so that captive agency staff, call-centre producers and service representatives who will never touch a commercial account can be licensed on roughly half the material and in a fraction of the study time. Critically, this line does not exist everywhere. Roughly two thirds of jurisdictions carry a standalone Personal Lines LOA in the NAIC uniform framework; the remainder issue only a combined Property & Casualty licence, so a new producer there must study and test on commercial property, general liability and workers\u2019 compensation whether or not they will ever sell them. Montana is a clear example of a state with Property and Casualty authority but no Personal Lines option. Where the line does exist the pathway is identical to any other producer line — pre-licensing where required, a proctored exam, a background check, and an electronic filing through NIPR — and the licence sits as an additional LOA on the same Insurance Producer licence rather than as a separate document. Producers who later want commercial authority simply pass the full P&C examination and amend the licence.',
    eligibility:
      'Applicants must be at least 18 and legally authorised to work in the United States. There is no degree, experience or sponsorship requirement. Fingerprint-based background screening applies in most states on the same terms as any other producer line. Two eligibility quirks are worth flagging: Massachusetts levies a $75 lead-paint surcharge whenever Personal Lines authority is added, and Massachusetts also requires non-resident Personal Lines applicants to already hold a Producer/Travel, Property and Casualty, or Limited Lines Property and Casualty licence in their resident state. Because Personal Lines is not offered everywhere, a producer whose home state has no such line cannot obtain a non-resident Personal Lines licence by reciprocity and will normally need the full P&C authority instead.',
    exam: {
      admin: 'PSI Services, Pearson VUE or Prometric under contract to the state insurance department',
      questions: '100–110 items, typically 100 scored plus 5–10 unscored pretest questions',
      time: '2 hours to 2 hours 15 minutes',
      pass: '70% in essentially every state that offers the line',
      fee: '$32–$80 per attempt; Virginia charges $35, Oklahoma $38, Florida $44, Maryland $62, Wisconsin $75',
      format: 'Multiple choice, computer-based at a proctored test centre; remote online proctoring is available in several states'
    },
    education: {
      hours: '0–60 hours of state-approved pre-licensing education',
      note: 'Most states that offer Personal Lines require either nothing (Maryland, Oklahoma, Virginia) or a reduced course relative to full P&C. Georgia requires an 8-hour Personal Lines course, half its 16-hour P&C requirement. Wisconsin requires the full 20 hours for the line and ends the course with a proctored certification exam. Florida is the outlier again, requiring 60 hours for the 20-44 Personal Lines Agent class — still far below the 200 hours its 2-20 General Lines class demands, which is exactly why Personal Lines is a popular Florida entry point. California requires the 12-hour Code & Ethics course from 2026 for its Personal Lines Broker-Agent licence.'
    },
    prerequisites:
      'Minimum age 18; completion of any state-mandated pre-licensing hours; a passing score on that state\u2019s Personal Lines examination; fingerprint-based screening where required; and an electronic application through NIPR or Sircon. Confirm before you begin that your state actually offers the line — check the State Offerings table on the NIPR state requirements page for your jurisdiction, because in roughly a third of jurisdictions the only route is the full Property & Casualty licence.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing course (where required)', fee: '$49–$300' },
        { item: 'Personal Lines examination', fee: '$32–$80 per attempt' },
        { item: 'State licence application', fee: '$10–$225' },
        { item: 'NIPR electronic transaction fee', fee: '$5.60' },
        { item: 'Fingerprinting and background check', fee: '$5–$75 where required' },
        { item: 'Massachusetts lead-paint surcharge', fee: '$75 (Massachusetts only)' },
        { item: 'Continuing education, 24 hours per two-year cycle', fee: '$30–$150 per cycle' }
      ],
      total: 'Roughly $60–$350 in mandatory state and exam fees, before course tuition — typically $30–$60 cheaper than the full P&C route because the exam is shorter and the coursework lighter'
    },
    timeline: [
      { stage: 'Confirming the line exists in your state', duration: 'Same day, via the NIPR State Offerings table' },
      { stage: 'Pre-licensing education, where required', duration: '1–2 weeks for 8–20 hours; several weeks for Florida\u2019s 60 hours' },
      { stage: 'Scheduling and passing the examination', duration: '1–2 weeks' },
      { stage: 'Background check and application processing', duration: '1–3 weeks' },
      { stage: 'Carrier appointment', duration: '1–3 weeks' }
    ],
    route: [
      { title: 'Verify that your state issues a Personal Lines line of authority', description: 'Open the NIPR state requirements page for your jurisdiction and read the State Offerings table. If Personal Lines is not listed, the full Property & Casualty licence is your only option and this template does not apply to you.' },
      { title: 'Decide whether Personal Lines or full P&C is the better buy', description: 'Take the single-line exam only if your role genuinely never touches commercial business. In most states the combined P&C exam costs the same fee and earns both lines at once, so the saving is in study time rather than money. Adding commercial authority later means another exam.' },
      { title: 'Complete the pre-licensing course if required', description: 'Personal Lines courses are typically shorter than P&C ones. Keep the certificate — it usually expires after one year.' },
      { title: 'Register and sit the Personal Lines exam', description: 'Book with the state vendor; forms are commonly around 100 scored questions in two hours. Expect heavy weighting on personal auto financial-responsibility minimums, homeowners forms HO-2 through HO-8, and that state\u2019s cancellation and non-renewal notice rules.' },
      { title: 'Complete fingerprinting and file the application', description: 'Use the state\u2019s designated fingerprint vendor code, then file the NAIC Uniform Individual Application through NIPR or Sircon inside the validity window for your passing score.' },
      { title: 'Get appointed and consider upgrading later', description: 'Once appointed you can write personal business immediately. If your book starts attracting small-commercial enquiries, sit the full P&C exam and amend the licence — in most states adding a line of authority costs little or nothing.' }
    ],
    providersNote:
      'Because Personal Lines is not a universal line of authority, be careful when buying prep material: a product advertised as "Personal Lines" may be built around another state\u2019s form and content outline. Download the state candidate handbook from PSI, Pearson VUE or Prometric first — it lists the exact item counts and the weighting between general insurance concepts, personal lines coverages and state law. Approved pre-licensing providers are listed by each department; Kaplan, ExamFX, A.D. Banker, America\u2019s Professor and Achievable carry Personal Lines courses in most of the states that need them. The per-state fee shown below is the state application fee plus that state\u2019s flat examination fee, with an all-in estimate including mandatory fingerprinting.',
    faqs: [
      {
        q: 'Which states do not offer a Personal Lines licence?',
        a: 'Roughly a third of jurisdictions issue only a combined Property & Casualty licence with no standalone Personal Lines line of authority — Montana is a documented example, and the line is also absent from the State Offerings tables of several smaller jurisdictions. Because departments add and retire lines of authority over time, the authoritative check is the State Offerings table on the NIPR state requirements page for your state. Where the line does not exist, the full P&C licence is the only route to selling homeowners and personal auto.'
      },
      {
        q: 'Is Personal Lines easier than Property & Casualty?',
        a: 'Yes, materially. The exam is usually 100 scored questions in two hours against 130–155 in two and a half to three hours for combined P&C, and it drops commercial property, commercial general liability, commercial auto, surety, and in most states workers\u2019 compensation. The pass mark is the same 70%, and the state-law section is just as detailed, so it is easier only in scope, not in rigour.'
      },
      {
        q: 'Can I upgrade from Personal Lines to full P&C later?',
        a: 'Yes. You pass the full Property & Casualty examination and file an amendment to add the Property and Casualty lines of authority to your existing producer licence. In many states adding a line costs nothing or a small amendment fee; New Jersey charges $20, Massachusetts charges nothing except the $75 lead-paint surcharge. You do not surrender or reapply for the licence.'
      },
      {
        q: 'Will a Personal Lines licence work in other states?',
        a: 'Only in states that also offer the line. Reciprocity requires the target state to have an equivalent line of authority, so a Personal Lines producer cannot obtain non-resident authority in a state that issues only combined P&C — you would need the full P&C licence at home first. Massachusetts adds an explicit rule requiring non-resident Personal Lines applicants to hold a Producer/Travel, P&C or Limited Lines P&C licence in their resident state.'
      },
      {
        q: 'What can I not sell with this licence?',
        a: 'Anything commercial: business owners policies, commercial property and auto, general and professional liability, workers\u2019 compensation, surety and commercial umbrella. You also cannot sell life, annuity or health products, which require the Life and Accident & Health lines. Flood policies written through the NFIP need the separate federal agent training, and crop insurance needs USDA RMA certification.'
      },
      {
        q: 'Why does Florida push new agents toward Personal Lines?',
        a: 'Because of the coursework gap. Florida\u2019s 2-20 General Lines (P&C) class requires 200 hours of pre-licensing education, while the 20-44 Personal Lines Agent class requires 60. For someone joining a captive personal-lines agency, the 20-44 gets them producing months earlier at a fraction of the tuition, and it can be upgraded later.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'No interstate compact covers insurance producer licensing. Non-resident Personal Lines authority is granted under the NAIC Producer Licensing Model Act reciprocity regime through NIPR, without a further exam — but with an important structural limit specific to this line: reciprocity only works where the target state actually offers a Personal Lines line of authority. Because roughly a third of jurisdictions do not, producers who expect to write in multiple states are generally better served by taking the full Property & Casualty examination, which is universally recognised. Massachusetts additionally conditions non-resident Personal Lines licences on the applicant holding Producer/Travel, Property and Casualty, or Limited Lines Property and Casualty authority in their home state.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Department of Insurance', agencyUrl: 'https://www.aldoi.gov', fee: '$80 licence + $50 exam (≈$184 all-in)', note: 'Personal Lines is listed as an available line of authority in Alabama\u2019s NIPR State Offerings table and requires an examination.', compactMember: false },
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', fee: '$120 licence + $38 exam (≈$206 all-in)', note: 'Arizona carries a Personal Lines line of authority. No pre-licensing education; PSI administers the exam and captures fingerprints on site.', compactMember: false },
      AR: { agency: 'Arkansas Insurance Department', agencyUrl: 'https://insurance.arkansas.gov', fee: '$15 licence + $50 exam (≈$95 all-in)', note: 'Arkansas is one of the long-standing standalone Personal Lines states. Very low state fees.', compactMember: false },
      CA: { agency: 'California Department of Insurance (CDI)', agencyUrl: 'https://www.insurance.ca.gov', fee: '$188 filing + $55 exam (≈$290 all-in)', note: 'Issued as the Personal Lines Broker-Agent licence, a distinct California licence type rather than an LOA. PSI administers the exam; from 2026 only the 12-hour Code & Ethics course is required.', compactMember: false },
      CO: { agency: 'Colorado Division of Insurance, Department of Regulatory Agencies (DORA)', agencyUrl: 'https://doi.colorado.gov', fee: '$47 licence + $47 exam (≈$100 all-in)', note: 'Colorado offers a standalone Personal Lines authority with a roughly 90-question exam. No fingerprinting.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', fee: '$105 licence + $75 exam (≈$236 all-in)', note: 'Personal Lines appears in the District\u2019s NIPR State Offerings table as an examinable line of authority.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '$50 licence + $44 exam (≈$147 all-in)', note: 'Licence class 20-44 Personal Lines Agent: 60 hours of pre-licensing education and a 100-question, 2-hour Pearson VUE exam at a 70% cut. A 24-hour wait applies before a retake. Far lighter than the 200-hour 2-20 General Lines route.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '$120 licence + exam (≈$235 all-in)', note: 'Georgia lists Personal Lines as its own agent class with an 8-hour pre-licensing course and its own examination. The course and exam are waived for CPCU holders. Residents apply through Sircon.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '$40 licence + $69 exam (≈$115 all-in)', note: 'Personal Lines is one of the lines of authority under Indiana\u2019s Producer - Individual licence class. 20 hours of pre-licensing education; no fingerprinting.', compactMember: false },
      KY: { agency: 'Kentucky Department of Insurance', agencyUrl: 'https://insurance.ky.gov', fee: '$40 licence + $50 exam (≈$121 all-in)', note: 'Kentucky carries a Personal Lines line of authority alongside Property and Casualty. 20 hours of pre-licensing education.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '$75 licence + $30 exam (≈$150 all-in)', note: 'Louisiana is a standalone Personal Lines state. No pre-licensing education and a low $30 exam fee.', compactMember: false },
      MD: { agency: 'Maryland Insurance Administration (MIA)', agencyUrl: 'https://insurance.maryland.gov', fee: '$54 licence + $62 exam (≈$122 all-in)', note: 'Prometric Series 20-29 Personal Lines Producer: 110 items (100 scored plus 10 unscored) in 2 hr 15 min at 70%. No pre-licensing education and no fingerprinting. Four-day wait before a retake; exams also offered in Spanish.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Insurance', agencyUrl: 'https://www.mass.gov/orgs/division-of-insurance', fee: '$225 licence + $39 exam + $75 lead-paint surcharge (≈$345 all-in)', note: 'Personal Lines is a line of authority under the Massachusetts Insurance Producer licence. The $75 lead-paint surcharge is charged specifically for Property, Casualty or Personal Lines. Non-resident applicants must already hold Producer/Travel, P&C or Limited Lines P&C authority at home.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '$10 licence + $41 exam (≈$57 all-in)', note: 'Michigan offers a standalone Personal Lines authority and is the cheapest jurisdiction in the country overall. 20 hours of pre-licensing education.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '$50 licence + $45 exam (≈$186 all-in)', note: 'Personal Lines appears in Minnesota\u2019s NIPR State Offerings table alongside Property, Casualty and Farm Property & Liability. 20 hours of pre-licensing education.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '$100 licence + $52 exam (≈$153 all-in)', note: 'Mississippi is a standalone Personal Lines state; pre-licensing education was removed in 2024.', compactMember: false },
      NE: { agency: 'Nebraska Department of Insurance', agencyUrl: 'https://doi.nebraska.gov', fee: '$50 licence + $45 exam (≈$101 all-in)', note: 'No pre-licensing education and no fingerprinting, making Nebraska one of the fastest Personal Lines routes.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '$215 licence + $59 exam (≈$280 all-in)', note: 'Personal Lines is listed in New Hampshire\u2019s NIPR State Offerings table. The single Insurance Producer fee covers all lines of authority on one application, so Personal Lines costs no less than a full producer filing.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance (DOBI)', agencyUrl: 'https://www.state.nj.us/dobi/', fee: '$170 licence + $45 exam (≈$287 all-in)', note: 'Personal Lines is an exam-required line of authority within the $170 major-line producer combination. 20 hours of pre-licensing education; adding the line to an existing licence costs $20.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '$35 licence + $42 exam (≈$127 all-in)', note: 'New Mexico carries a Personal Lines line of authority; no pre-licensing education.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '$40 licence + $33 exam (≈$73 all-in)', note: 'New York offers a standalone Personal Lines authority and has the lowest combined state and exam fees in the country, offset by a substantial pre-licensing requirement.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '$82 application incl. fingerprints + $50 per line + $44 exam (≈$176 all-in)', note: 'North Carolina charges $50 for each line of authority, so a Personal Lines-only filing is genuinely cheaper than taking Property and Casualty as two lines.', compactMember: false },
      ND: { agency: 'North Dakota Insurance Department', agencyUrl: 'https://www.insurance.nd.gov', fee: '$100 licence + $64 exam (≈$240 all-in)', note: 'Personal Lines is listed in North Dakota\u2019s NIPR lines of authority for the Insurance Producer licence. No pre-licensing education.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '$60 licence + $38 exam (≈$107 all-in)', note: 'PSI P&C — Personal Lines Only Producer: 105 items (100 scored plus 5 pretest) in 2 hours at 70%. No pre-licensing education and no fingerprinting. The combined P&C alternative is 155 items for the same $38.', compactMember: false },
      PA: { agency: 'Pennsylvania Insurance Department', agencyUrl: 'https://www.insurance.pa.gov', fee: '$55 licence + $43 exam (≈$128 all-in)', note: 'Pennsylvania offers a Personal Lines line of authority; 24 hours of pre-licensing education.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '$125 licence + $80 exam (≈$216 all-in)', note: 'Rhode Island carries a Personal Lines authority; no pre-licensing education but high application and exam fees.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '$25 licence + $44 exam (≈$125 all-in)', note: 'South Carolina offers a Personal Lines line of authority with no pre-licensing education requirement.', compactMember: false },
      TX: { agency: 'Texas Department of Insurance (TDI)', agencyUrl: 'https://www.tdi.texas.gov', fee: '$50 licence + $33 exam (≈$123 all-in)', note: 'Issued as the Personal Lines Property and Casualty licence, a distinct TDI licence type. No pre-licensing education; Pearson VUE administers the exam.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '$75 licence + $32 exam (≈$135 all-in)', note: 'Utah carries a Personal Lines line of authority; no pre-licensing education. Prometric administers the exam.', compactMember: false },
      VA: { agency: 'Virginia State Corporation Commission, Bureau of Insurance', agencyUrl: 'https://www.scc.virginia.gov/pages/Insurance', fee: '$15 licence + $35 exam (≈$86 all-in)', note: 'Prometric Series 11-07 Personal Lines: 105 items including unscored trial questions in 2 hours at 70%, $35 per attempt. No pre-licensing education. Registration valid 90 days; passing score valid 183 days; Fieldprint code FPVABOIProducer.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '$60 licence + $35 exam (≈$150 all-in)', note: 'Washington offers a Personal Lines line of authority and removed pre-licensing education in 2023.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '$55 licence + $44 exam (≈$105 all-in)', note: 'West Virginia carries a Personal Lines authority; 20 hours of pre-licensing education.', compactMember: false },
      WI: { agency: 'Wisconsin Office of the Commissioner of Insurance (OCI)', agencyUrl: 'https://oci.wi.gov', fee: '$90 licence + $75 exam (≈$207 all-in)', note: 'PSI Personal Lines P&C Producer (Series 22-09): 100 questions plus 5–10 unscored trial items in 2 hours at 70%, $75 per attempt. 20 hours of pre-licensing education ending in a proctored certification exam. Wisconsin has no combined exam — each line is tested on its own. Fieldprint code FPWIOCIInsurance ($36).', compactMember: false }
      // Omitted because the jurisdiction issues only a combined Property & Casualty
      // authority with no standalone Personal Lines line of authority in its NIPR
      // State Offerings table: AK, CT, DE, HI, ID, IL, IA, KS, ME, MO, MT, NV, OH,
      // OR, SD, TN, VT, WY. Montana is the clearest documented case — its State
      // Offerings table lists Property and Casualty but no Personal Lines. Because
      // departments add and retire lines of authority over time, candidates in these
      // states should re-check NIPR before assuming the full P&C exam is required.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 4. Insurance Adjuster (Independent / Company)
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'insurance-adjuster',
    name: 'Insurance Adjuster License',
    category: 'insurance',
    group: 'Claims & Adjusting',
    type: 'License',
    blurb: 'The licence held by claims professionals who investigate, evaluate and settle insurance claims on behalf of an insurer — required in about two thirds of jurisdictions and, notably, not at all in the rest.',

    overview:
      'An insurance adjuster investigates a loss, determines whether the policy covers it, quantifies the damage and negotiates the settlement. The role divides into three categories that the states treat very differently. A company or staff adjuster is an employee of the insurer. An independent adjuster is a contractor engaged by the insurer, often through a third-party administrator or a catastrophe-response firm. A public adjuster works for the policyholder and is licensed separately and far more strictly. The critical structural fact about this credential is that adjuster licensing is not universal: roughly 34 jurisdictions license adjusters, while about 17 — including Colorado, Illinois, Iowa, Kansas, Maryland, Massachusetts, Missouri, Nebraska, New Jersey, North Dakota, Ohio, Pennsylvania, South Dakota, Tennessee, Virginia, Wisconsin and the District of Columbia — impose no adjuster licence requirement at all. That gap created the Designated Home State mechanism: an adjuster who lives in a non-licensing state may designate a licensing state as their home state, meet that state\u2019s resident requirements, and then use the resulting licence as the basis for reciprocal non-resident licences everywhere else. Texas and Florida are the most commonly chosen DHS states because their licences are widely reciprocal and their exams can be satisfied through approved pre-licensing designation courses.',
    eligibility:
      'Applicants must be at least 18 and legally authorised to work in the United States. Most licensing states run fingerprint-based state and FBI background checks and apply the 18 U.S.C. §1033 bar to felonies involving dishonesty or breach of trust. Beyond that, requirements diverge sharply by state. California requires documented claims experience — generally two years of full-time work within the preceding five, or an equivalent combination of experience and education — before it will issue an independent adjuster licence, which makes it one of the hardest states to enter cold. New York requires a specific line of authority per claims type. Several states, including Florida and Texas, waive the state examination for candidates who complete an approved designation or pre-licensing course such as the Florida 6-20 All-Lines Adjuster designation programme. Residents of the 17 non-licensing jurisdictions are eligible to apply as Designated Home State applicants in a licensing state.',
    exam: {
      admin: 'Prometric, PSI or Pearson VUE, depending on the state; several states accept an approved designation course in place of the state exam',
      questions: 'Typically 100–150 multiple-choice items covering claims handling, policy interpretation and state adjuster law',
      time: '2–3 hours',
      pass: '70% in most states',
      fee: '$30–$90 per attempt, at the same vendor rate the state charges for producer exams',
      format: 'Multiple choice, computer-based at a proctored test centre; remote proctoring available in some states'
    },
    education: {
      hours: '0–60 hours depending on the state and the route chosen',
      note: 'There is no national pre-licensing standard for adjusters. Florida\u2019s 6-20 All-Lines Adjuster designation course runs roughly 40 hours and, when completed with an approved provider, substitutes for the state examination. Texas offers an equivalent pre-licensing course that waives its exam. Most other licensing states require only that you pass the exam. Continuing education is generally 24 hours per two-year cycle including ethics, and catastrophe adjusters commonly add voluntary industry credentials — Xactimate certification, the IICRC water and fire restoration certifications, or the AIC and SCLA designations — because carriers and IA firms use them as hiring filters even though no state requires them.'
    },
    prerequisites:
      'Minimum age 18; a passing score on the state adjuster examination or completion of an approved designation course where that substitutes; fingerprint-based background screening in most licensing states; and an electronic application through NIPR or the state portal. California additionally requires documented claims experience. Residents of non-licensing states must first choose and qualify in a Designated Home State. A surety bond is required in a minority of states.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing or designation course (Florida, Texas and optional elsewhere)', fee: '$200–$600' },
        { item: 'State adjuster examination', fee: '$30–$90 per attempt' },
        { item: 'State licence application', fee: '$50–$200' },
        { item: 'NIPR electronic transaction fee', fee: '$5.60' },
        { item: 'Fingerprinting and background check', fee: '$35–$75' },
        { item: 'Surety bond where required', fee: '$50–$250/yr premium' },
        { item: 'Non-resident licences in additional states', fee: '$25–$200 each' },
        { item: 'Xactimate or IICRC certification (industry expectation, not a licence requirement)', fee: '$300–$1,200' }
      ],
      total: '$300–$900 for a first licence including a designation course, plus $25–$200 for each additional state'
    },
    timeline: [
      { stage: 'Choosing a home or Designated Home State', duration: '1 week of research' },
      { stage: 'Designation or pre-licensing course, where used', duration: '2–6 weeks' },
      { stage: 'Examination or course-completion filing', duration: '1–3 weeks' },
      { stage: 'Background check and licence issue', duration: '1–4 weeks' },
      { stage: 'Adding non-resident licences across the states you will deploy to', duration: '1–3 weeks per batch through NIPR' }
    ],
    route: [
      { title: 'Determine whether your state licenses adjusters at all', description: 'About 17 jurisdictions do not. If you live in one of them you cannot obtain a resident adjuster licence, and the correct move is to select a Designated Home State — most commonly Texas or Florida — and qualify there as though you were a resident.' },
      { title: 'Decide between company, independent and public adjusting', description: 'Company adjusters are employees and in several states are covered by the insurer\u2019s authority rather than an individual licence. Independent adjusters contract to carriers and need the licence in every state where they physically adjust. Public adjusting is a separate and more heavily regulated licence with bonds and contract-form rules.' },
      { title: 'Complete the exam or an approved designation course', description: 'In Florida the 6-20 All-Lines Adjuster designation course with an approved provider replaces the state exam; Texas has an equivalent. Elsewhere, book the state exam through Prometric, PSI or Pearson VUE and study the state\u2019s claims-handling and unfair-claims-practices statutes closely, because that is where the state-law questions concentrate.' },
      { title: 'Submit fingerprints and file the application', description: 'Use the state\u2019s designated fingerprint vendor. File through NIPR or the state portal, disclose any criminal history, and attach a 1033 consent order if one is required.' },
      { title: 'Add non-resident licences for the territory you will work', description: 'Catastrophe deployment is unpredictable, so most independent adjusters hold a dozen or more non-resident licences. They are issued reciprocally through NIPR off your resident or DHS licence, with no further examination in most states.' },
      { title: 'Build the industry credentials carriers actually screen for', description: 'Xactimate proficiency is close to mandatory for property claims work, and the IICRC, AIC and SCLA credentials open doors on complex losses. None is a licensing requirement, but IA firms filter on them.' },
      { title: 'Keep the licence current', description: 'Continuing education is typically 24 hours per two-year cycle. Because non-resident licences depend on the home or DHS licence, let that one lapse and the whole portfolio falls with it.' }
    ],
    providersNote:
      'The most reliable starting point is the state insurance department\u2019s adjuster licensing page plus the NIPR state requirements table, which shows exactly which adjuster lines of authority a state offers — New Hampshire, for example, splits them into Workers Compensation, Property & Casualty excluding Workers Comp, and Property & Casualty including Workers Comp. For the designation route, only providers on the Florida or Texas approved list can issue the certificate that substitutes for the exam, so verify approval before buying. AdjusterPro, Kaplan, ExamFX and A.D. Banker are the widely used national providers. Xactimate training is sold by Verisk directly. The per-state figure below shows that state\u2019s flat insurance examination fee; the licence application fee is set separately by each department and is generally $50–$200.',
    faqs: [
      {
        q: 'Which states do not require an adjuster licence?',
        a: 'Approximately 17 jurisdictions have no adjuster licensing requirement: Colorado, the District of Columbia, Illinois, Iowa, Kansas, Maryland, Massachusetts, Missouri, Nebraska, New Jersey, North Dakota, Ohio, Pennsylvania, South Dakota, Tennessee, Virginia and Wisconsin. Adjusters can and do work in those states without a state adjuster licence, though the carrier or IA firm will still impose its own vetting. Note that several of these states nonetheless license public adjusters, who represent policyholders rather than insurers.'
      },
      {
        q: 'What is a Designated Home State licence?',
        a: 'If you live in a state that does not license adjusters, you have no resident licence to base reciprocity on. The DHS mechanism lets you nominate a licensing state as your home state, meet that state\u2019s full resident requirements including its exam or designation course, and receive a resident-equivalent licence there. Every other state then treats that DHS licence as your home licence for non-resident reciprocity. Texas and Florida are the usual choices because of the breadth of their reciprocal agreements and the availability of exam-waiving designation courses.'
      },
      {
        q: 'Do I need a licence to be a staff adjuster for my employer?',
        a: 'It depends on the state. Some licensing states exempt salaried employees of an admitted insurer who adjust only that insurer\u2019s claims, on the theory that the carrier\u2019s own licence covers the activity. Others, including Florida and Texas, license company adjusters as a distinct class. Because the exemptions are narrow and vary, check the specific statute rather than assuming employment status protects you.'
      },
      {
        q: 'How many state licences does a catastrophe adjuster need?',
        a: 'In practice, as many as they can afford. Deployment follows storms, and an adjuster who is not licensed in the affected state cannot be rostered. Independent adjusters commonly maintain 10–25 non-resident licences covering the Gulf and Atlantic coasts, the hail belt and the wildfire states. Once the home or DHS licence exists, each additional state is a NIPR filing and a fee rather than another exam.'
      },
      {
        q: 'Is California harder than other states?',
        a: 'Yes. California requires documented claims experience — broadly two years of full-time claims work within the previous five years, or an approved combination of experience and education — before it will issue an independent adjuster licence. Most other states will license a complete beginner who passes the exam. That experience gate means new adjusters typically qualify elsewhere first and add California later.'
      },
      {
        q: 'What is the difference between this licence and a public adjuster licence?',
        a: 'Loyalty and regulation. An independent or company adjuster works for the insurer; a public adjuster is retained by the policyholder and is paid a percentage of the settlement. Because of that fee structure, public adjuster licensing is significantly stricter — surety bonds, contract-form filing, fee caps, cooling-off periods and separate examinations are common. Several states that do not license ordinary adjusters, such as Maryland, Ohio and Pennsylvania, nonetheless license public adjusters.'
      },
      {
        q: 'Do I need Xactimate certification?',
        a: 'No state requires it, but it functions as a de facto entry requirement for property claims. Carriers and independent adjusting firms price and audit estimates in Xactimate, so an adjuster who cannot produce a clean sketch and estimate is unemployable on residential property losses regardless of licensure.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for adjuster licensing. Reciprocity operates under the NAIC framework: a licensing state will issue a non-resident adjuster licence to someone holding an equivalent licence in good standing in their home state, generally without a further examination. The complication unique to this credential is that about 17 jurisdictions do not license adjusters at all, so residents of those states have no home licence to reciprocate from. The Designated Home State mechanism solves this — the adjuster qualifies fully in a licensing state, usually Texas or Florida, and that becomes the anchor for every non-resident filing thereafter. Adjusters should also note that a lapse of the home or DHS licence invalidates the entire chain of non-resident licences hanging off it.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Department of Insurance', agencyUrl: 'https://www.aldoi.gov', fee: '≈$50 exam + state licence fee', note: 'Alabama licenses independent and public adjusters through the Department of Insurance.', compactMember: false },
      AK: { agency: 'Alaska Division of Insurance, Department of Commerce, Community and Economic Development', agencyUrl: 'https://www.commerce.alaska.gov/web/ins/', fee: '≈$89 exam + state licence fee', note: 'Alaska requires an independent adjuster licence; fingerprinting is part of the application.', compactMember: false },
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', fee: '≈$38 exam + state licence fee', note: 'Adjuster is one of Arizona\u2019s individual licence classes, separate from the producer licence. PSI administers the exam.', compactMember: false },
      AR: { agency: 'Arkansas Insurance Department', agencyUrl: 'https://insurance.arkansas.gov', fee: '≈$50 exam + state licence fee', note: 'Arkansas licenses insurance adjusters; the state does not license public adjusters.', compactMember: false },
      CA: { agency: 'California Department of Insurance (CDI)', agencyUrl: 'https://www.insurance.ca.gov', fee: '≈$88 exam + state licence fee', note: 'California is the strictest entry point: an independent adjuster applicant must document roughly two years of full-time claims experience within the previous five years, or an approved combination of experience and education, in addition to passing the exam.', compactMember: false },
      CT: { agency: 'Connecticut Insurance Department', agencyUrl: 'https://portal.ct.gov/cid', fee: '≈$65 exam + state licence fee', note: 'Connecticut licenses casualty and property adjusters through the Insurance Department.', compactMember: false },
      DE: { agency: 'Delaware Department of Insurance', agencyUrl: 'https://insurance.delaware.gov', fee: '≈$90 exam + state licence fee', note: 'Delaware requires an adjuster licence and fingerprint-based screening.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '≈$44 exam + $55 licence (fingerprints ≈$48)', note: 'The 6-20 All-Lines Adjuster licence is the industry benchmark and one of the two usual Designated Home State choices. Completing an approved 6-20 designation course with a DFS-approved provider substitutes for the state examination. Florida licenses company, independent and public adjusters as separate classes.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '≈$63 exam + state licence fee', note: 'Georgia licenses adjusters through the Commissioner\u2019s office; resident applications go through Sircon.', compactMember: false },
      HI: { agency: 'Hawaii Insurance Division, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/ins/', fee: '≈$75 exam + state licence fee', note: 'Hawaii requires an adjuster licence; application fees are among the highest in the country.', compactMember: false },
      ID: { agency: 'Idaho Department of Insurance', agencyUrl: 'https://doi.idaho.gov', fee: '≈$60 exam + state licence fee', note: 'Idaho licenses independent adjusters through the Department of Insurance.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '≈$69 exam + state licence fee', note: 'Indiana licenses independent adjusters and, separately, public adjusters, who need a certificate of authority renewed each 31 December. Some third-party lists wrongly show Indiana as a non-licensing state — IDOI\u2019s own resident licensing guidance confirms it licenses adjusters.', compactMember: false },
      KY: { agency: 'Kentucky Department of Insurance', agencyUrl: 'https://insurance.ky.gov', fee: '≈$50 exam + state licence fee', note: 'Kentucky licenses adjusters and uses a name-based rather than fingerprint-based criminal history check.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '≈$30 exam + state licence fee', note: 'Louisiana licenses claims adjusters and is a frequent catastrophe-deployment state, so non-resident filings are common.', compactMember: false },
      ME: { agency: 'Maine Bureau of Insurance, Department of Professional and Financial Regulation', agencyUrl: 'https://www.maine.gov/pfr/insurance/', fee: '≈$55 exam + state licence fee', note: 'Maine requires an adjuster licence through the Bureau of Insurance.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '≈$41 exam + state licence fee', note: 'Michigan licenses adjusters through DIFS; state fees are the lowest in the country.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '≈$45 exam + state licence fee', note: 'Minnesota licenses adjusters under Minnesota Statutes chapter 72B, administered by the Department of Commerce.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '≈$52 exam + state licence fee', note: 'Mississippi requires an adjuster licence; pre-licensing education was removed statewide in 2024.', compactMember: false },
      MT: { agency: 'Montana Commissioner of Securities and Insurance (CSI)', agencyUrl: 'https://csimt.gov', fee: '≈$59 exam + state licence fee', note: 'Montana licenses adjusters through the Commissioner of Securities and Insurance.', compactMember: false },
      NV: { agency: 'Nevada Division of Insurance', agencyUrl: 'https://doi.nv.gov', fee: '≈$39 exam + state licence fee', note: 'Nevada licenses independent and public adjusters; application fees are on the high side.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '≈$59 exam + state licence fee', note: 'New Hampshire splits adjuster authority into three lines: Workers Compensation, Property & Casualty excluding Workers Comp, and Property & Casualty including Workers Comp.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '≈$42 exam + state licence fee', note: 'New Mexico requires an adjuster licence through OSI.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '≈$33 exam + state licence fee', note: 'New York licenses independent adjusters by claims category, so the licence must carry the correct line of authority for the type of loss being handled.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '≈$44 exam + $50 per line', note: 'North Carolina licenses adjusters and charges per line of authority on top of the base application.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '≈$41 exam + state licence fee', note: 'Oklahoma licenses adjusters; no fingerprinting, with a state and federal record check run as part of the application.', compactMember: false },
      OR: { agency: 'Oregon Division of Financial Regulation, Department of Consumer and Business Services', agencyUrl: 'https://dfr.oregon.gov', fee: '≈$45 exam + state licence fee', note: 'Oregon licenses adjusters and insurance consultants; agency affiliation must be filed on Form 2139 within 30 days.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '≈$80 exam + state licence fee', note: 'Rhode Island licenses adjusters through the Insurance Division of DBR.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '≈$44 exam + state licence fee', note: 'South Carolina licenses adjusters with no pre-licensing education requirement.', compactMember: false },
      TX: { agency: 'Texas Department of Insurance (TDI)', agencyUrl: 'https://www.tdi.texas.gov', fee: '≈$33 exam + $50 licence (fingerprints ≈$40)', note: 'The All Lines Adjuster licence is the other standard Designated Home State choice. Completing a TDI-approved pre-licensing course waives the state examination, and Texas maintains broad reciprocity, which is why most out-of-state catastrophe adjusters anchor their portfolio here.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '≈$32 exam + state licence fee', note: 'Utah licenses independent and public adjusters; Prometric administers the exams.', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', fee: '≈$48 exam + state licence fee', note: 'Vermont licenses adjusters through the Department of Financial Regulation; no fingerprinting.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '≈$35 exam + state licence fee', note: 'Washington licenses independent and public adjusters; pre-licensing education was removed in 2023.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '≈$44 exam + state licence fee', note: 'West Virginia licenses adjusters through the Offices of the Insurance Commissioner.', compactMember: false },
      WY: { agency: 'Wyoming Department of Insurance', agencyUrl: 'https://doi.wyo.gov', fee: '≈$50 exam + state licence fee', note: 'Wyoming licenses adjusters and also issues an insurance consultant licence that covers some adjusting activity.', compactMember: false }
      // Omitted because the jurisdiction does not license insurance adjusters at all:
      // CO, DC, IL, IA, KS, MD, MA, MO, NE, NJ, ND, OH, PA, SD, TN, VA, WI.
      // Adjusters may work in these states without a state adjuster licence.
      // Residents of these jurisdictions who need reciprocal non-resident licences
      // elsewhere should obtain a Designated Home State licence, usually in Texas or
      // Florida. Several of these states — including MD, NJ, OH, PA, TN and VA —
      // do license PUBLIC adjusters; see the public-adjuster template.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 5. Public Adjuster
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'insurance-public-adjuster',
    name: 'Public Adjuster License',
    category: 'insurance',
    group: 'Claims & Adjusting',
    type: 'License',
    blurb: 'The licence for claims professionals who represent the policyholder — not the insurer — in negotiating a property insurance settlement, typically for a percentage fee.',

    overview:
      'A public adjuster is the only category of adjuster who works for the insured. Retained under a written contract, usually for a percentage of the eventual settlement, the public adjuster documents the loss, prepares the claim, interprets the policy on the policyholder\u2019s behalf and negotiates with the carrier\u2019s adjuster. Because the fee is contingent and the clients are often distressed homeowners immediately after a hurricane, fire or hailstorm, the states regulate this licence far more heavily than any other adjusting credential: surety bonds, mandatory contract language, fee caps, cooling-off and rescission periods, prohibitions on soliciting during specified hours or at loss sites, and in several states a ban on any financial interest in the repair contractor. About 46 jurisdictions issue a public adjuster licence. A small group does not — Alabama and Alaska have no public adjuster licence, Arkansas prohibits the activity outright, and South Dakota and Wisconsin do not require one. Several jurisdictions license public adjusters even though they do not license ordinary company or independent adjusters, including Maryland, Massachusetts, New Jersey, Ohio, Pennsylvania and Virginia, so this is genuinely a separate regulatory track rather than an add-on to the adjuster licence.',
    eligibility:
      'Applicants must be at least 18, legally authorised to work in the United States and of good character; fingerprint-based state and FBI screening is near-universal for this licence even in states that skip it for producers. Almost every issuing state requires a surety bond, commonly $10,000 to $50,000, and many require proof of it before the licence will issue — New Jersey, for instance, requires a $10,000 bond from an admitted surety plus two passport photographs. A number of states impose an experience or apprenticeship requirement, and several restrict the licence to residents or to applicants with an in-state office. The 18 U.S.C. §1033 bar applies with particular force here given the fiduciary character of the role. Kansas is a notable partial case: it licenses public adjusters for commercial lines only.',
    exam: {
      admin: 'Prometric, PSI or Pearson VUE, depending on the state; a minority of states license on application and bond without an examination',
      questions: 'Typically 100–150 items covering property policy interpretation, claims documentation, ethics, contract requirements and that state\u2019s public adjuster statute',
      time: '2–3 hours',
      pass: '70% in most states',
      fee: '$30–$90 per attempt at the state\u2019s standard insurance exam rate',
      format: 'Multiple choice, computer-based at a proctored test centre'
    },
    education: {
      hours: '0–40 hours plus, in several states, a supervised apprenticeship',
      note: 'Pre-licensing hours are less common than for producer lines, but the substitute is often stiffer: a number of states require a period of apprenticeship or documented claims experience under a licensed public adjuster before granting a full licence, and Florida runs an apprentice public adjuster class explicitly for that purpose. Continuing education is generally 24 hours per two-year cycle, frequently with an enhanced ethics component reflecting the fiduciary nature of the role. Industry designations — the NAPIA-affiliated Certified Professional Public Adjuster (CPPA), the SPPA, and Xactimate proficiency — are not licensing requirements but are widely expected in the market.'
    },
    prerequisites:
      'Minimum age 18; a passing score on the state public adjuster examination where one is required; a surety bond in most states; fingerprint-based background screening; proof of any required apprenticeship or experience; filed contract forms in states that regulate them; and an electronic application through NIPR or the state portal. Confirm your state issues the licence before starting — five jurisdictions do not.',
    costBreakdown: {
      items: [
        { item: 'Pre-licensing or apprenticeship period, where required', fee: '$0–$600 in course costs; the apprenticeship itself is unpaid time' },
        { item: 'Public adjuster examination', fee: '$30–$90 per attempt' },
        { item: 'State licence application', fee: '$50–$200 — New Jersey $70, North Dakota $100, Massachusetts $200' },
        { item: 'Surety bond, commonly $10,000–$50,000 penal sum', fee: '$100–$500/yr premium' },
        { item: 'Fingerprinting and background check', fee: '$35–$75' },
        { item: 'Errors & omissions insurance', fee: '$1,000–$3,000/yr' },
        { item: 'Continuing education per two-year cycle', fee: '$30–$150' }
      ],
      total: '$400–$1,200 for a first licence including the bond premium, materially more than a producer or ordinary adjuster licence'
    },
    timeline: [
      { stage: 'Confirming the state issues the licence and reading its statute', duration: '1 week' },
      { stage: 'Apprenticeship or experience period where required', duration: '6 months to 1 year in the states that mandate it' },
      { stage: 'Examination', duration: '1–3 weeks to schedule and pass' },
      { stage: 'Obtaining the surety bond and filing contract forms', duration: '1–3 weeks' },
      { stage: 'Background check and licence issue', duration: '2–6 weeks; many states defer these applications to manual review' }
    ],
    route: [
      { title: 'Check whether your state issues the licence at all', description: 'Alabama and Alaska do not license public adjusters, Arkansas prohibits the practice, and South Dakota and Wisconsin do not require a licence. Kansas licenses public adjusters for commercial lines only. Everywhere else, read the statute before anything else — the conduct rules are unusually prescriptive.' },
      { title: 'Complete any apprenticeship or experience requirement', description: 'Several states require you to work under a licensed public adjuster first. Florida uses a formal apprentice public adjuster licence for this. Where no apprenticeship is required, time spent as a carrier or independent adjuster is still the fastest way to learn the estimating and documentation skills the role demands.' },
      { title: 'Pass the state examination', description: 'The exam concentrates on property policy interpretation, proof-of-loss and appraisal procedure, and the state\u2019s own public adjuster conduct statute — solicitation restrictions, contract content, fee caps and rescission rights. That statutory section is where candidates fail.' },
      { title: 'Arrange the surety bond', description: 'Most states require a bond before issuing the licence. Penal sums commonly run $10,000 to $50,000; the annual premium is a small percentage of that and depends on your credit. Get the bond in hand early — several states will not process the application without proof.' },
      { title: 'File your contract form if the state requires approval', description: 'Many states prescribe mandatory contract language: the fee percentage, a cooling-off or rescission window, cancellation rights and specified disclosures. Some require the form to be filed with or approved by the department before use.' },
      { title: 'Submit the application and expect manual review', description: 'Public adjuster filings are routinely deferred to the department for individual review rather than auto-approved, so allow more time than for a producer licence. Attach the bond, photographs and any experience affidavits requested.' },
      { title: 'Add non-resident licences where you plan to deploy', description: 'Reciprocity for public adjusters is real but less uniform than for producers — some states require the bond and contract filing again, and a few impose residency or in-state office conditions. Check each target state individually rather than assuming a clean NIPR filing.' }
    ],
    providersNote:
      'Start with the state statute and the department\u2019s public adjuster page rather than a prep vendor, because the conduct rules differ more between states than the technical claims content does. NIPR\u2019s state requirements tables show the licence class, fee and any special documentation the state demands — New Jersey\u2019s entry, for example, spells out the $10,000 bond and two passport photographs. The National Association of Public Insurance Adjusters (NAPIA) publishes state-by-state regulatory summaries and runs the CPPA designation. AdjusterPro, Kaplan and A.D. Banker offer public adjuster exam prep in the larger states. The per-state figure below shows the state application fee where it is published and otherwise that state\u2019s standard insurance examination rate; bond premiums and E&O are additional.',
    faqs: [
      {
        q: 'Which states do not license public adjusters?',
        a: 'Alabama and Alaska have no public adjuster licence. Arkansas prohibits public adjusting outright. South Dakota and Wisconsin do not require a licence to act as a public adjuster, though Wisconsin offers a voluntary resident registration. Kansas is a partial case, licensing public adjusters for commercial lines only. Everywhere else a licence is required before you may solicit or negotiate a claim on a policyholder\u2019s behalf.'
      },
      {
        q: 'How are public adjusters paid, and are fees capped?',
        a: 'Almost always a percentage of the settlement, typically 5–15%. Many states cap it by statute, and several impose lower caps for declared catastrophes — Florida limits fees on claims arising from a declared state of emergency, for example. Some states also prohibit charging a fee on amounts the insurer had already offered before the public adjuster was retained. The cap, the contract language and the rescission window are the three most commonly litigated points, so read the statute carefully.'
      },
      {
        q: 'Can I be both a public adjuster and a contractor?',
        a: 'In most states, no — not on the same loss. A large majority of jurisdictions prohibit a public adjuster from having a financial interest in the repair contractor, from receiving referral fees from contractors, or from performing the repairs they adjusted. Several states make it an explicit criminal offence. This is the single most common enforcement action against public adjusters.'
      },
      {
        q: 'Why do some states license public adjusters but not ordinary adjusters?',
        a: 'Because the consumer-protection rationale is different. A company or independent adjuster is accountable to a licensed insurer that the department already regulates. A public adjuster contracts directly with a distressed consumer for a contingent fee, so the state inserts itself with bonds, fee caps and contract rules. Maryland, Massachusetts, New Jersey, Ohio, Pennsylvania and Virginia all take this approach — no adjuster licence, but a full public adjuster regime.'
      },
      {
        q: 'What bond do I need?',
        a: 'It varies by state, commonly $10,000 to $50,000 in penal sum. New Jersey requires $10,000 from a surety admitted in the state and will not issue the licence without proof. The bond protects clients against misappropriation, so the annual premium depends on your personal credit — usually a small single-digit percentage of the penal sum.'
      },
      {
        q: 'Is this a good route into the industry for a beginner?',
        a: 'It is a harder start than company or independent adjusting. Several states require an apprenticeship or documented experience, the bond and E&O costs are meaningful before you earn anything, and the income is contingent on settlements you have not yet negotiated. Most successful public adjusters come from a carrier claims, independent adjusting, restoration contracting or estimating background.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'No interstate compact applies. Non-resident public adjuster licences are available in most issuing states under the NAIC reciprocity framework and can be filed through NIPR, but reciprocity is noticeably less clean than for producer lines. Recurring obstacles include a separate surety bond in the target state, re-filing of the contract form for state approval, residency or in-state office conditions, and states that defer every public adjuster application to manual review. Residents of the jurisdictions that issue no public adjuster licence — Alabama, Alaska, Arkansas, South Dakota and Wisconsin — have no home licence to reciprocate from and generally need to qualify as a resident-equivalent applicant in an issuing state. Verify each target state individually before quoting work there.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'medium',

    states: {
      AZ: { agency: 'Arizona Department of Insurance and Financial Institutions (DIFI)', agencyUrl: 'https://difi.az.gov', fee: '≈$38 exam + state licence fee + bond', note: 'Arizona regulates public adjusters under the Adjuster licence class with its own conduct rules.', compactMember: false },
      CA: { agency: 'California Department of Insurance (CDI)', agencyUrl: 'https://www.insurance.ca.gov', fee: '≈$88 exam + state licence fee + bond', note: 'California requires a public insurance adjuster licence, a surety bond and fingerprinting, and prescribes mandatory contract content including a rescission period.', compactMember: false },
      CO: { agency: 'Colorado Division of Insurance, Department of Regulatory Agencies (DORA)', agencyUrl: 'https://doi.colorado.gov', fee: '≈$47 exam + state licence fee + bond', note: 'Colorado licenses public adjusters even though it does not license company or independent adjusters.', compactMember: false },
      CT: { agency: 'Connecticut Insurance Department', agencyUrl: 'https://portal.ct.gov/cid', fee: '≈$65 exam + state licence fee + bond', note: 'Connecticut licenses public adjusters and regulates their contracts and fees.', compactMember: false },
      DE: { agency: 'Delaware Department of Insurance', agencyUrl: 'https://insurance.delaware.gov', fee: '≈$90 exam + state licence fee + bond', note: 'Delaware requires a public adjuster licence with bond and fingerprinting.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', fee: '≈$75 exam + state licence fee + bond', note: 'The District licenses public adjusters through DISB although it does not license ordinary adjusters.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '≈$44 exam + $55 licence + $50,000 bond', note: 'Licence class 3-20 Public Adjuster, with a 3-21 Apprentice Public Adjuster class used as a formal apprenticeship route. Florida caps fees and applies a lower cap to claims arising from a declared state of emergency, and prohibits solicitation at loss sites during specified hours.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '≈$63 exam + state licence fee + bond', note: 'Georgia licenses public adjusters; resident applications are filed through Sircon.', compactMember: false },
      HI: { agency: 'Hawaii Insurance Division, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/ins/', fee: '≈$75 exam + state licence fee + bond', note: 'Hawaii licenses public adjusters through the Insurance Division of DCCA.', compactMember: false },
      ID: { agency: 'Idaho Department of Insurance', agencyUrl: 'https://doi.idaho.gov', fee: '≈$60 exam + state licence fee + bond', note: 'Idaho requires a public adjuster licence with a surety bond.', compactMember: false },
      IL: { agency: 'Illinois Department of Insurance, Department of Financial and Professional Regulation', agencyUrl: 'https://idfpr.illinois.gov/insurance.html', fee: '≈$184 exam + state licence fee + bond', note: 'Illinois licenses public adjusters despite having no ordinary adjuster licence, and prescribes contract content and fee disclosure.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '≈$69 exam + state licence fee + bond', note: 'Indiana requires a certificate of authority to act as a public adjuster; no person or corporation may take compensation for adjusting a claim without one. Public adjuster licences expire every 31 December and renew in the preceding 90 days.', compactMember: false },
      IA: { agency: 'Iowa Insurance Division', agencyUrl: 'https://iid.iowa.gov', fee: '≈$49 exam + state licence fee + bond', note: 'Iowa licenses public adjusters through the Insurance Division.', compactMember: false },
      KS: { agency: 'Kansas Insurance Department', agencyUrl: 'https://insurance.kansas.gov', fee: '≈$57 exam + state licence fee', note: 'Kansas licenses public adjusters for commercial lines only — there is no residential public adjusting licence, which materially narrows the market compared with other states.', compactMember: false },
      KY: { agency: 'Kentucky Department of Insurance', agencyUrl: 'https://insurance.ky.gov', fee: '≈$50 exam + state licence fee + bond', note: 'Kentucky licenses public adjusters and regulates their contracts.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '≈$30 exam + state licence fee + bond', note: 'Louisiana licenses public adjusters and, as a hurricane state, applies detailed post-catastrophe solicitation restrictions.', compactMember: false },
      ME: { agency: 'Maine Bureau of Insurance, Department of Professional and Financial Regulation', agencyUrl: 'https://www.maine.gov/pfr/insurance/', fee: '≈$55 exam + state licence fee + bond', note: 'Maine licenses public adjusters through the Bureau of Insurance.', compactMember: false },
      MD: { agency: 'Maryland Insurance Administration (MIA)', agencyUrl: 'https://insurance.maryland.gov', fee: '≈$62 exam + state licence fee + bond', note: 'Maryland licenses public adjusters even though it does not license company or independent adjusters. Prometric administers the exam.', compactMember: false },
      MA: { agency: 'Massachusetts Division of Insurance', agencyUrl: 'https://www.mass.gov/orgs/division-of-insurance', fee: '$200 licence + ≈$39 exam + bond', note: 'The Public Insurance Adjuster licence costs $200 and requires an examination. Massachusetts licenses public adjusters although it has no ordinary adjuster licence, and requires supplemental documentation to be filed through the NIPR Attachment Warehouse.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '≈$41 exam + state licence fee + bond', note: 'Michigan licenses public adjusters through DIFS.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '≈$45 exam + state licence fee + bond', note: 'Minnesota licenses public adjusters under chapter 72B and applies solicitation restrictions after severe-weather events.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '≈$52 exam + state licence fee + bond', note: 'Mississippi licenses public adjusters through the Insurance Department.', compactMember: false },
      MO: { agency: 'Missouri Department of Commerce and Insurance', agencyUrl: 'https://insurance.mo.gov', fee: '≈$29 exam + state licence fee + bond', note: 'Missouri licenses public adjusters although it does not license ordinary adjusters.', compactMember: false },
      MT: { agency: 'Montana Commissioner of Securities and Insurance (CSI)', agencyUrl: 'https://csimt.gov', fee: '≈$59 exam + state licence fee + bond', note: 'Montana licenses public adjusters through the Commissioner of Securities and Insurance.', compactMember: false },
      NE: { agency: 'Nebraska Department of Insurance', agencyUrl: 'https://doi.nebraska.gov', fee: '≈$45 exam + state licence fee + bond', note: 'Nebraska licenses public adjusters although it does not license company or independent adjusters.', compactMember: false },
      NV: { agency: 'Nevada Division of Insurance', agencyUrl: 'https://doi.nv.gov', fee: '≈$39 exam + state licence fee + bond', note: 'Nevada licenses public adjusters and applies bond and contract requirements.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '≈$59 exam + state licence fee + bond', note: 'New Hampshire licenses public adjusters through the Insurance Department.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance (DOBI)', agencyUrl: 'https://www.state.nj.us/dobi/', fee: '$70 licence + ≈$45 exam + $10,000 bond', note: 'The Public Adjusters\u2019 Licensing Act requires a $10,000 bond from a surety admitted in New Jersey plus two passport photographs before the licence issues, and every public adjuster application is deferred to the department for review. New Jersey licenses public adjusters despite having no ordinary adjuster licence for individuals.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '≈$42 exam + state licence fee + bond', note: 'New Mexico licenses public adjusters through OSI.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '≈$33 exam + state licence fee + bond', note: 'New York licenses public adjusters and caps compensation, with tighter limits and mandatory contract provisions for losses in declared disaster areas.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '≈$44 exam + $50 per line + bond', note: 'North Carolina licenses public adjusters and charges per line of authority.', compactMember: false },
      ND: { agency: 'North Dakota Insurance Department', agencyUrl: 'https://www.insurance.nd.gov', fee: '$100 licence + ≈$64 exam', note: 'North Dakota issues a distinct Public Adjuster licence class at $100, with a $100 reinstatement fee, even though it does not license ordinary adjusters.', compactMember: false },
      OH: { agency: 'Ohio Department of Insurance', agencyUrl: 'https://insurance.ohio.gov', fee: '≈$42 exam + state licence fee + bond', note: 'Ohio requires a public insurance adjuster licence and bond although it does not license company or independent adjusters.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '≈$41 exam + state licence fee + bond', note: 'Oklahoma licenses public adjusters and applies post-catastrophe solicitation rules.', compactMember: false },
      OR: { agency: 'Oregon Division of Financial Regulation, Department of Consumer and Business Services', agencyUrl: 'https://dfr.oregon.gov', fee: '≈$45 exam + state licence fee + bond', note: 'Oregon licenses public adjusters through the Division of Financial Regulation.', compactMember: false },
      PA: { agency: 'Pennsylvania Insurance Department', agencyUrl: 'https://www.insurance.pa.gov', fee: '≈$43 exam + state licence fee + bond', note: 'Pennsylvania regulates public adjusters under the Public Adjuster Regulatory Act, with prescribed contract language and a rescission period, despite having no ordinary adjuster licence.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '≈$80 exam + state licence fee + bond', note: 'Rhode Island licenses public adjusters through the Insurance Division of DBR.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '≈$44 exam + state licence fee + bond', note: 'South Carolina licenses public adjusters through the Department of Insurance.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/insurance.html', fee: '≈$49 exam + state licence fee + bond', note: 'Tennessee licenses public adjusters although it does not license company or independent adjusters.', compactMember: false },
      TX: { agency: 'Texas Department of Insurance (TDI)', agencyUrl: 'https://www.tdi.texas.gov', fee: '≈$33 exam + $50 licence + $10,000 bond', note: 'Texas licenses public insurance adjusters separately from its All Lines Adjuster licence, caps fees at 10% of the settlement, and prohibits a public adjuster from participating in the repair work.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '≈$32 exam + state licence fee + bond', note: 'Utah licenses public adjusters; Prometric administers the exam.', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', fee: '≈$48 exam + state licence fee + bond', note: 'Vermont licenses public adjusters through the Department of Financial Regulation.', compactMember: false },
      VA: { agency: 'Virginia State Corporation Commission, Bureau of Insurance', agencyUrl: 'https://www.scc.virginia.gov/pages/Insurance', fee: '≈$35 exam + state licence fee + bond', note: 'Virginia licenses public adjusters through the Bureau of Insurance even though it does not license company or independent adjusters.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '≈$35 exam + state licence fee + bond', note: 'Washington licenses public adjusters through the OIC and applies solicitation restrictions after declared disasters.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '≈$44 exam + state licence fee + bond', note: 'West Virginia licenses public adjusters through the Offices of the Insurance Commissioner.', compactMember: false },
      WY: { agency: 'Wyoming Department of Insurance', agencyUrl: 'https://doi.wyo.gov', fee: '≈$50 exam + state licence fee + bond', note: 'Wyoming regulates public adjusting through its adjuster and insurance consultant licensing framework.', compactMember: false }
      // Omitted: AL and AK issue no public adjuster licence; AR prohibits public
      // adjusting outright; SD and WI require no licence to act as a public adjuster
      // (Wisconsin offers only a voluntary resident registration). Kansas is included
      // but licenses public adjusters for commercial lines only.
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 6. Title Insurance Producer
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'title-insurance-producer',
    name: 'Title Insurance Producer License',
    category: 'insurance',
    group: 'Specialty Lines',
    type: 'License',
    blurb: 'The specialty licence for individuals who search title, issue title insurance commitments and policies, and handle real estate closings and escrow on behalf of a title underwriter.',

    overview:
      'Title insurance protects an owner or lender against defects in the chain of title — undisclosed heirs, forged deeds, unpaid liens, boundary errors and recording mistakes. Unlike other property coverages it is written once, paid for with a single premium at closing, and looks backwards rather than forwards. The person who searches the record, clears the exceptions, issues the commitment and conducts the closing is a title insurance producer, sometimes called a title agent, title insurance agent or, where escrow is a separate function, an escrow officer. This is the most jurisdictionally fragmented of the insurance credentials, and it is the one where the false-positive risk is greatest. Some states issue a Title line of authority on an ordinary Insurance Producer licence; some run a bespoke title producer licence with its own pre-licensing hours and examination; some license only business entities, requiring a title plant, a per-county bond and corporate form, with no individual credential at all; some treat title work as the practice of law and reserve it to attorneys; some do not license title agents in any form; and one state has abolished private title insurance altogether. Iowa is the outlier there — Iowa Code prohibits private title insurance and substitutes the state-run Iowa Title Guaranty programme.',
    eligibility:
      'Where an individual licence exists, applicants must be at least 18 and legally authorised to work in the United States, and must pass a background check. Beyond that the requirements are state-specific to an unusual degree. Indiana requires 10 hours of instruction in title marketing ethics, Indiana insurance law, title underwriting and escrow principles, and the federal Real Estate Settlement Procedures Act, with a completion certificate valid for six months. Virginia, which exempts every other major line from pre-licensing education, imposes a 16-hour requirement for title. Utah divides the credential into Title Examination and Title Escrow sublines and requires a $250,000 fidelity bond or professional liability policy at agency level. Several states require affiliation with a licensed title insurer or agency before the licence becomes operative — in Utah a title producer\u2019s licence shows as active but is not "authorised" until affiliated. Connecticut requires title agents to be attorneys admitted in the state.',
    exam: {
      admin: 'Prometric, PSI or Pearson VUE depending on the state; a significant minority of states issue the title authority without any examination',
      questions: 'Typically 75–120 items covering title searching and examination, commitments and policies, escrow and closing procedure, RESPA and TRID, and state recording law',
      time: '1 hour 30 minutes to 2 hours 30 minutes',
      pass: '70% in most states that examine',
      fee: '$30–$90 per attempt at the state\u2019s standard insurance exam rate',
      format: 'Multiple choice, computer-based at a proctored test centre'
    },
    education: {
      hours: '0–40 hours, with title-specific requirements in states that waive education for other lines',
      note: 'The pattern here is the reverse of the producer lines: states that require no pre-licensing education for Life, Health, Property or Casualty frequently do require it for title. Virginia is the clearest example — pre-licensing was repealed for the major lines in 2001, but title retains a 16-hour requirement. Indiana requires 10 hours covering ethics, state insurance law, title underwriting, escrow and RESPA, and applies the same requirement to Designated Home State applicants from non-licensing states. Florida requires 40 hours for its 4-14 Title Agent class. Continuing education is generally 24 hours per two-year cycle with title-specific content, and several states mandate an escrow or trust-accounting module because misuse of closing funds is the dominant enforcement risk in this line.'
    },
    prerequisites:
      'An individual title producer licence, where one exists, generally requires minimum age 18, completion of any title-specific pre-licensing hours, a passing score on the title examination where required, a background check, affiliation with a licensed title insurer or agency, and in many states a fidelity bond or errors & omissions policy. Agency-level licensure adds a surety or escrow bond, a title plant in some states, and financial reporting — Utah requires an annual report from agency title insurance producers. Verify first that your state licenses individuals at all: several license only business entities, and residents of those states must use the Designated Home State route if they need a title licence elsewhere.',
    costBreakdown: {
      items: [
        { item: 'Title pre-licensing education where required (10–40 hours)', fee: '$150–$500' },
        { item: 'Title examination where required', fee: '$30–$90 per attempt' },
        { item: 'State licence application', fee: '$25–$170 — Indiana $40 resident and $90 non-resident DHS, Idaho $50 per county at agency level' },
        { item: 'NIPR electronic transaction fee', fee: '$5.60' },
        { item: 'Fingerprinting and background check', fee: '$35–$75 where required' },
        { item: 'Fidelity bond or professional liability cover (agency level, e.g. $250,000 in Utah)', fee: '$500–$2,500/yr' },
        { item: 'Escrow or surety bond where required (Idaho $10,000 per county, rising with escrow officers)', fee: '$100–$1,000/yr' },
        { item: 'Continuing education per two-year cycle', fee: '$50–$200' }
      ],
      total: '$250–$700 for an individual licence in a typical state; substantially more where agency licensure, bonds and a title plant are involved'
    },
    timeline: [
      { stage: 'Confirming your state licenses individual title producers', duration: '1 week' },
      { stage: 'Title pre-licensing education where required', duration: '1–4 weeks' },
      { stage: 'Examination where required', duration: '1–3 weeks' },
      { stage: 'Application, bond and affiliation filings', duration: '2–6 weeks' },
      { stage: 'Underwriter appointment before you may issue policies', duration: '2–8 weeks' }
    ],
    route: [
      { title: 'Establish how your state regulates title at all', description: 'Check whether your jurisdiction issues a Title line of authority to individuals, licenses only entities, reserves the work to attorneys, or does not license title agents. Arizona licenses only corporations and limited liability companies; Idaho licenses agencies with a title plant and per-county bond; Illinois registers agents through the underwriter rather than licensing them; Kentucky and Massachusetts do not license title agents; and Iowa prohibits private title insurance entirely.' },
      { title: 'Complete the title-specific pre-licensing course', description: 'Even in states that waive education for other lines, title usually has its own requirement. Indiana\u2019s 10-hour course expires after six months, so file the application promptly.' },
      { title: 'Pass the title examination where the state requires one', description: 'Content concentrates on title searching and examination, commitment and policy forms, escrow and settlement procedure, RESPA and TRID disclosure rules, and state recording and lien priority law.' },
      { title: 'Obtain the required bond or fidelity cover', description: 'Requirements are agency-level in most states — Utah requires a fidelity bond or professional liability policy of at least $250,000; Idaho requires an escrow surety bond of $10,000 per county rising by $10,000 per escrow officer to a $50,000 cap.' },
      { title: 'Affiliate with a title insurer or agency', description: 'A title producer licence is frequently inert until affiliation is filed. In Utah the licence shows as active but the producer is not authorised to transact until affiliated with a title agency or insurer, and the agency in turn must be affiliated with an underwriter.' },
      { title: 'File the application and any annual reports', description: 'Apply through NIPR or Sircon where accepted. Agency licensees should diarise recurring obligations — Utah requires an annual report on financials and branch offices; Idaho renews per county each 1 January.' },
      { title: 'Use the Designated Home State route if you live in a non-licensing state', description: 'Residents of Arizona, California, Illinois, Kentucky and Texas cannot obtain a reciprocal non-resident title producer licence in states such as Indiana, and must instead apply for a Non-Resident Title Designated Home State licence, meeting the target state\u2019s full resident pre-licensing and continuing education requirements.' }
    ],
    providersNote:
      'Because attribution varies so much, the department\u2019s own title page is the only safe starting point — the NIPR state requirements table will show whether Title appears as a line of authority for individuals, for business entities, or not at all. The American Land Title Association (ALTA) publishes state-by-state regulatory summaries and the standard commitment and policy forms the exam is built around, and its ALTA Registry is a useful cross-check on how a given state identifies licensees. State land title associations run most of the approved pre-licensing and continuing education, and in the attorney states they are the practical route into the business. The per-state figure below shows the state application fee where published and otherwise that state\u2019s standard insurance examination rate; bonds and fidelity cover are additional and are usually assessed at agency rather than individual level.',
    faqs: [
      {
        q: 'Which states do not issue an individual title insurance producer licence?',
        a: 'Iowa prohibits private title insurance altogether and operates the state-run Iowa Title Guaranty programme instead. Kentucky\u2019s Department of Insurance has confirmed in writing that it does not license title agents, and Kentucky does not license escrow agents either. Massachusetts does not license title agents or agencies and treats most closing activity as the practice of law reserved to attorneys. Illinois registers title agents through a licensed underwriter rather than licensing them. Arizona licenses only corporations and limited liability companies as title agents, Idaho licenses agencies with a title plant and per-county bond, Oregon licenses escrow agents rather than title producers, and California and Texas license title entities and escrow officers rather than individual title producers. Indiana\u2019s own non-resident rules confirm the point: applicants resident in Arizona, California, Illinois, Kentucky or Texas cannot apply for a reciprocal Producer/Title licence and must use the Designated Home State route instead.'
      },
      {
        q: 'Why is Iowa different?',
        a: 'Iowa is the only state that prohibits private title insurance. Instead the legislature created Iowa Title Guaranty, a state programme administered through the Iowa Finance Authority, which issues title guaranty certificates that function economically like title policies but are backed by the state and priced far below typical title premiums. Iowa attorneys issue title opinions and participating abstracters maintain the records. There is consequently no Iowa title insurance producer licence to obtain.'
      },
      {
        q: 'What is a Designated Home State title licence?',
        a: 'If you live in a state that does not issue an individual title producer licence, you have no resident licence for other states to reciprocate with. States that license title therefore offer a DHS route: you apply as a non-resident, meet that state\u2019s full resident requirements including its title pre-licensing hours and continuing education, and pay the non-resident fee. Indiana, for example, charges $40 for a resident title licence and $90 for a Non-Resident Title DHS licence, with the same 10-hour education requirement either way.'
      },
      {
        q: 'What is the difference between a title producer and an escrow officer?',
        a: 'The title producer searches and examines title and issues the commitment and policy on behalf of an underwriter. The escrow officer holds and disburses the closing funds and handles the settlement mechanics. Some states combine them in one credential; others deliberately separate them. Utah splits the licence into Title Examination and Title Escrow sublines and requires a non-resident whose home-state licence covers only search to sit the Utah escrow examination before receiving escrow authority. Oregon and Idaho license escrow agents as a distinct category.'
      },
      {
        q: 'Do I need to be a lawyer?',
        a: 'In some states, effectively yes. Connecticut requires title insurance agents to be attorneys admitted in Connecticut. Massachusetts does not license title agents at all but treats closing work as the practice of law, so an attorney must conduct the closing. Georgia, South Carolina, North Carolina and West Virginia are attorney-involvement states where a licensed title agency may exist but a lawyer must handle defined parts of the transaction. In most other states no legal qualification is required.'
      },
      {
        q: 'Is a title licence reciprocal like a producer licence?',
        a: 'Much less so. Title is the standard exception to insurance reciprocity: because the substantive law of recording, conveyancing and lien priority is genuinely different in each state, most jurisdictions require their own pre-licensing education and examination even for experienced out-of-state title professionals, and several route non-resident applicants into a Designated Home State process instead of ordinary reciprocity. Assume you will have to qualify afresh in each state rather than file a simple NIPR non-resident application.'
      },
      {
        q: 'Who actually employs title producers?',
        a: 'Independent title agencies, title underwriters writing direct, real estate law firms in the attorney states, and the in-house title operations of large brokerages and lenders. The licence is held by the individual but is normally inert without an affiliation and an appointment from an underwriter, so employment and licensure move together in this line more than in any other.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'No interstate compact covers title insurance licensing, and title is the standard carve-out from ordinary NAIC producer reciprocity. Because recording, conveyancing, lien priority and closing practice are substantively different in every state, most jurisdictions require their own title pre-licensing education and examination even from experienced out-of-state licensees. Where the home state does not license individual title producers at all — Arizona, California, Illinois, Kentucky and Texas are the states Indiana names explicitly, and Massachusetts and Iowa fall outside the system for different reasons — the applicant cannot use ordinary non-resident reciprocity and must instead apply through a Designated Home State process, meeting the target state\u2019s full resident pre-licensing and continuing education requirements and paying the non-resident fee. Utah illustrates a narrower version of the same problem: a non-resident whose home-state title licence authorises search but not escrow must sit the Utah escrow examination before receiving that subline.'
    },

    defaultAgency: 'State Department of Insurance',
    sourceUrl: 'https://nipr.com/licensing-center/state-requirements',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Department of Insurance', agencyUrl: 'https://www.aldoi.gov', fee: '$80 licence + ≈$50 exam', note: 'Alabama\u2019s NIPR State Offerings table lists Title Insurance Agent as an examinable licence class for individuals.', compactMember: false },
      AK: { agency: 'Alaska Division of Insurance, Department of Commerce, Community and Economic Development', agencyUrl: 'https://www.commerce.alaska.gov/web/ins/', fee: '$75 licence + ≈$89 exam', note: 'Title insurance is regulated by the Division of Insurance under AS 21.66; confirm the current licence class with the Division before applying.', compactMember: false },
      AR: { agency: 'Arkansas Insurance Department', agencyUrl: 'https://insurance.arkansas.gov', fee: '$15 licence + ≈$50 exam', note: 'Arkansas licenses title insurance agents through the Insurance Department.', compactMember: false },
      CO: { agency: 'Colorado Division of Insurance, Department of Regulatory Agencies (DORA)', agencyUrl: 'https://doi.colorado.gov', fee: '$47 licence + ≈$47 exam', note: 'Colorado licenses title insurance agents through the Division of Insurance and applies its own title-specific continuing education.', compactMember: false },
      CT: { agency: 'Connecticut Insurance Department', agencyUrl: 'https://portal.ct.gov/cid', fee: '$140 licence + ≈$65 exam', note: 'Connecticut General Statutes §38a-402 requires title insurance agents to be attorneys admitted in Connecticut, and prohibits rebates and inducements for referrals. This is effectively an attorney-only credential.', compactMember: false },
      DE: { agency: 'Delaware Department of Insurance', agencyUrl: 'https://insurance.delaware.gov', fee: '$100 licence + ≈$90 exam', note: 'Delaware licenses title insurance producers through the Department of Insurance.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Insurance, Securities and Banking (DISB)', agencyUrl: 'https://disb.dc.gov', fee: '$105 licence + ≈$75 exam', note: 'Title appears as a line of authority in the District\u2019s NIPR State Offerings table.', compactMember: false },
      FL: { agency: 'Florida Department of Financial Services (DFS)', agencyUrl: 'https://myfloridacfo.com/division/agents', fee: '$50 licence + ≈$44 exam', note: 'Licence class 4-14 Title Agent, requiring 40 hours of pre-licensing education and a Pearson VUE examination. Florida separately licenses title insurance agencies.', compactMember: false },
      GA: { agency: 'Georgia Office of Insurance and Safety Fire Commissioner', agencyUrl: 'https://oci.georgia.gov', fee: '$120 licence + exam', note: 'Title is one of the agent classes Georgia lists on its resident licensing page. Georgia is also an attorney-involvement state: a licensed attorney must handle defined parts of the closing.', compactMember: false },
      HI: { agency: 'Hawaii Insurance Division, Department of Commerce and Consumer Affairs', agencyUrl: 'https://cca.hawaii.gov/ins/', fee: '$150 licence + ≈$75 exam', note: 'Hawaii regulates title insurance through the Insurance Division of DCCA.', compactMember: false },
      ID: { agency: 'Idaho Department of Insurance', agencyUrl: 'https://doi.idaho.gov', fee: '$50 per county application and renewal', note: 'Idaho\u2019s Title Agent licence is agency-level rather than individual: applicants file a title plant (inspected and approved by the Department), a certified escrow surety bond of $10,000 per county rising $10,000 per escrow officer to a $50,000 cap, business filings and documented industry experience. A separate renewal packet is required for each county and licences expire 1 January.', compactMember: false },
      IN: { agency: 'Indiana Department of Insurance (IDOI)', agencyUrl: 'https://www.in.gov/idoi/', fee: '$40 resident application; $90 non-resident DHS', note: 'A limited insurance producer licence under IC 27-1-15.6-18(4). Requires 10 hours of instruction in title marketing ethics, Indiana insurance law and rules, title underwriting and escrow principles, and RESPA; the completion certificate is valid six months. Anyone conducting a real estate closing on behalf of a title producer or insurer must hold this licence. Applicants resident in AZ, CA, IL, KY or TX must use the Non-Resident Title Designated Home State route instead of reciprocity.', compactMember: false },
      KS: { agency: 'Kansas Insurance Department', agencyUrl: 'https://insurance.kansas.gov', fee: '$30 licence + ≈$57 exam', note: 'Kansas licenses title insurance agents through the Insurance Department.', compactMember: false },
      LA: { agency: 'Louisiana Department of Insurance', agencyUrl: 'https://www.ldi.la.gov', fee: '$75 licence + ≈$30 exam', note: 'Louisiana licenses title insurance producers; notaries play a distinctive role in Louisiana closings under its civil-law system.', compactMember: false },
      ME: { agency: 'Maine Bureau of Insurance, Department of Professional and Financial Regulation', agencyUrl: 'https://www.maine.gov/pfr/insurance/', fee: '$25 licence + ≈$55 exam', note: 'Maine licenses title insurance producers through the Bureau of Insurance.', compactMember: false },
      MD: { agency: 'Maryland Insurance Administration (MIA)', agencyUrl: 'https://insurance.maryland.gov', fee: '$54 licence + ≈$62 exam', note: 'Maryland licenses title insurance producers and title insurance producer agencies; Prometric administers the examination.', compactMember: false },
      MI: { agency: 'Michigan Department of Insurance and Financial Services (DIFS)', agencyUrl: 'https://www.michigan.gov/difs', fee: '$10 licence + ≈$41 exam', note: 'Michigan licenses title insurance agents through DIFS at the lowest state fees in the country.', compactMember: false },
      MN: { agency: 'Minnesota Department of Commerce', agencyUrl: 'https://mn.gov/commerce/', fee: '$50 licence + ≈$45 exam', note: 'Title is listed as a line of authority on the Minnesota Insurance Producer licence in the NIPR State Offerings table.', compactMember: false },
      MS: { agency: 'Mississippi Insurance Department', agencyUrl: 'https://www.mid.ms.gov', fee: '$100 licence + ≈$52 exam', note: 'Mississippi licenses title insurance agents through the Insurance Department.', compactMember: false },
      MO: { agency: 'Missouri Department of Commerce and Insurance', agencyUrl: 'https://insurance.mo.gov', fee: '$100 licence + ≈$29 exam', note: 'Missouri licenses title insurance agents and agencies and regulates escrow and settlement conduct.', compactMember: false },
      MT: { agency: 'Montana Commissioner of Securities and Insurance (CSI)', agencyUrl: 'https://csimt.gov', fee: 'No state licence fee + NIPR transaction fee', note: 'Title appears as a line of authority on the Montana producer licence, and Montana\u2019s State Offerings table shows no examination requirement for it. Montana charges no state application fee for the producer licence itself.', compactMember: false },
      NE: { agency: 'Nebraska Department of Insurance', agencyUrl: 'https://doi.nebraska.gov', fee: '$50 licence + ≈$45 exam', note: 'Nebraska licenses title insurance agents through the Department of Insurance.', compactMember: false },
      NV: { agency: 'Nevada Division of Insurance', agencyUrl: 'https://doi.nv.gov', fee: '$185 licence + ≈$39 exam', note: 'Nevada licenses title agents and escrow officers through the Division of Insurance.', compactMember: false },
      NH: { agency: 'New Hampshire Insurance Department', agencyUrl: 'https://www.nh.gov/insurance/', fee: '$215 producer licence covering all LOAs', note: 'Title is listed as a line of authority on the New Hampshire Insurance Producer licence for both individuals and business entities. A single $210–$215 fee covers all lines on one application.', compactMember: false },
      NJ: { agency: 'New Jersey Department of Banking and Insurance (DOBI)', agencyUrl: 'https://www.state.nj.us/dobi/', fee: '$170 producer licence + ≈$45 exam', note: 'Title is an exam-required line of authority within New Jersey\u2019s $170 major-line producer combination; adding it to an existing licence costs $20.', compactMember: false },
      NM: { agency: 'New Mexico Office of Superintendent of Insurance (OSI)', agencyUrl: 'https://www.osi.state.nm.us', fee: '$35 licence + ≈$42 exam', note: 'New Mexico licenses title insurance agents and is unusual in setting title insurance rates by administrative hearing.', compactMember: false },
      NY: { agency: 'New York State Department of Financial Services (DFS)', agencyUrl: 'https://www.dfs.ny.gov', fee: '$40 licence + ≈$33 exam', note: 'New York title insurance agents were expressly exempt from licensing under Insurance Law §2101(4) until the legislature reversed that position and brought them under DFS licensing with pre-licensing and continuing education requirements. Older reference material still describes New York as a non-licensing state — confirm current requirements with DFS.', compactMember: false },
      NC: { agency: 'North Carolina Department of Insurance', agencyUrl: 'https://www.ncdoi.gov', fee: '$82 application incl. fingerprints + $50 per line', note: 'North Carolina licenses title insurance agents and is an attorney-involvement state: a licensed attorney must handle defined parts of the closing.', compactMember: false },
      ND: { agency: 'North Dakota Insurance Department', agencyUrl: 'https://www.insurance.nd.gov', fee: '$100 licence + ≈$64 exam', note: 'Title is one of the lines of authority on the North Dakota Insurance Producer licence, alongside Crop, Surety, Legal Expense and Self-Service Storage.', compactMember: false },
      OH: { agency: 'Ohio Department of Insurance', agencyUrl: 'https://insurance.ohio.gov', fee: '$15 licence + ≈$42 exam', note: 'Ohio licenses title insurance agents through the Department of Insurance; WebCheck fingerprinting adds about $72.', compactMember: false },
      OK: { agency: 'Oklahoma Insurance Department (OID)', agencyUrl: 'https://oid.ok.gov', fee: '$60 licence + ≈$41 exam', note: 'Oklahoma licenses title insurance agents; no fingerprinting is required, with a record check run as part of the application.', compactMember: false },
      PA: { agency: 'Pennsylvania Insurance Department', agencyUrl: 'https://www.insurance.pa.gov', fee: '$55 licence + ≈$43 exam', note: 'Pennsylvania licenses title insurance agents and agencies through the Insurance Department; abstracting entities may be licensed under their own name.', compactMember: false },
      RI: { agency: 'Rhode Island Department of Business Regulation, Insurance Division', agencyUrl: 'https://dbr.ri.gov/insurance', fee: '$125 licence + ≈$80 exam', note: 'Rhode Island licenses individual title producers but does not issue agency-level title insurance licences, so title businesses operate through their individually licensed staff.', compactMember: false },
      SC: { agency: 'South Carolina Department of Insurance', agencyUrl: 'https://doi.sc.gov', fee: '$25 licence + ≈$44 exam', note: 'South Carolina licenses title insurance agents and is an attorney-involvement state where a licensed attorney must supervise the closing.', compactMember: false },
      SD: { agency: 'South Dakota Division of Insurance, Department of Labor and Regulation', agencyUrl: 'https://dlr.sd.gov/insurance/', fee: '$25 licence + ≈$85 exam', note: 'South Dakota licenses title insurance agents through the Division of Insurance; no fingerprinting is required.', compactMember: false },
      TN: { agency: 'Tennessee Department of Commerce and Insurance', agencyUrl: 'https://www.tn.gov/commerce/insurance.html', fee: '$50 licence + ≈$49 exam', note: 'Tennessee licenses title insurance agents through the Department of Commerce and Insurance.', compactMember: false },
      UT: { agency: 'Utah Insurance Department', agencyUrl: 'https://insurance.utah.gov', fee: '$75 licence + ≈$32 exam per subline', note: 'Utah splits the credential into Title Examination and Title Escrow sublines, each of which also carries title marketing representative authority. A licence shows as active but the producer is not authorised until affiliated with a title agency or insurer. Agencies need a $250,000 fidelity bond or professional liability policy, an in-state physical office staffed by an escrow-licensed person, and must file an annual report. Non-residents whose home-state licence covers search only must sit the Utah escrow exam at Prometric.', compactMember: false },
      VT: { agency: 'Vermont Department of Financial Regulation', agencyUrl: 'https://dfr.vermont.gov', fee: '$60 licence + ≈$48 exam', note: 'Vermont licenses individual title insurance producers but does not issue agency-level title licences, so title companies operate through their licensed employees.', compactMember: false },
      VA: { agency: 'Virginia State Corporation Commission, Bureau of Insurance', agencyUrl: 'https://www.scc.virginia.gov/pages/Insurance', fee: '$15 licence + ≈$35 exam', note: 'Title is the sole exception to Virginia\u2019s 2001 repeal of pre-licensing education and carries a 16-hour requirement. Virginia also licenses title settlement agencies separately under the Consumer Real Estate Settlement Protection Act.', compactMember: false },
      WA: { agency: 'Washington State Office of the Insurance Commissioner (OIC)', agencyUrl: 'https://www.insurance.wa.gov', fee: '$60 licence + ≈$35 exam', note: 'Washington licenses title insurance agents through the OIC; pre-licensing education for other lines was removed in 2023.', compactMember: false },
      WV: { agency: 'West Virginia Offices of the Insurance Commissioner', agencyUrl: 'https://www.wvinsurance.gov', fee: '$55 licence + ≈$44 exam', note: 'West Virginia licenses title insurance agents and is an attorney-involvement state for defined parts of the closing.', compactMember: false },
      WI: { agency: 'Wisconsin Office of the Commissioner of Insurance (OCI)', agencyUrl: 'https://oci.wi.gov', fee: '$90 licence + ≈$75 exam', note: 'Wisconsin licenses individual title insurance producers but does not issue agency-level title insurance licences, so title companies transact through their individually licensed employees. Fieldprint code FPWIOCIInsurance ($36).', compactMember: false },
      WY: { agency: 'Wyoming Department of Insurance', agencyUrl: 'https://doi.wyo.gov', fee: '$100 licence + ≈$50 exam', note: 'Wyoming licenses title insurance agents through the Department of Insurance.', compactMember: false }
      // Omitted, with reasons:
      // IA — Iowa prohibits private title insurance by statute; the state-run Iowa
      //      Title Guaranty programme issues title guaranty certificates instead, so
      //      there is no title insurance producer licence to obtain.
      // KY — the Kentucky Department of Insurance has confirmed in writing that it
      //      does not license title agents, and it does not license escrow agents.
      // MA — Massachusetts licenses neither title agents nor title agencies; closing
      //      work is treated as the practice of law reserved to attorneys.
      // IL — title insurance agents are not licensed; they are registered by a
      //      licensed title insurance underwriter (IDFPR Title Insurance Section).
      // AZ — the Title Agent licence is issued only to corporations and limited
      //      liability companies under ARS §20-1562; there is no individual licence.
      // CA — California licenses title entities and title insurance adjusters rather
      //      than issuing an individual title producer line of authority.
      // TX — Texas licenses title insurance agents as entities and individuals as
      //      escrow officers; there is no individual title producer licence.
      // OR — Oregon licenses escrow agents rather than title insurance producers.
      // Indiana's non-resident rules confirm the AZ, CA, IL, KY and TX position:
      // residents of those five states must apply for a Non-Resident Title
      // Designated Home State licence rather than a reciprocal title licence.
    }
  }
];