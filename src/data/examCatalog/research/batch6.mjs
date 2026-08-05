// Research batch 6 — state-issued transportation credentials (driver / commercial / motorcycle).
//
// Deep prose is written once per template and reused across all 51 jurisdictions.
// Only agency, agencyUrl, fee, note and compactMember vary per state.
//
// None of these three credentials is covered by an interstate compact in compacts.mjs
// (the compacts listed there are healthcare / legal / accounting licences), so
// `reciprocity.compact` is null throughout and every `compactMember` is false.
//
// All 51 jurisdictions (50 states + DC) issue these credentials, so `states` has 51
// entries in every dossier. Where a per-state fee is shown it is the total the state
// itself collects for the licence/permit/exam, excluding commercial driving school or
// third-party skills-test fees. Fees are estimates verified against public fee schedules
// and should be confirmed on the agency site before publication.

export default [
  // ══════════════════════════════════════════════════════════════════════
  // 1. Commercial Driver's License (CDL)
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'cdl',
    name: "Commercial Driver's License (CDL)",
    category: 'transportation',
    group: 'Commercial Driving',
    type: 'License',
    blurb: "The federal FMCSA-regulated licence required to drive large trucks and buses (Class A, B or C) in every U.S. state.",

    overview:
      "A Commercial Driver's License (CDL) is the federal standard for operating large or hazardous vehicles — combination trucks (Class A), single heavy vehicles (Class B) and buses or hazmat placarded vehicles (Class C). The programme is governed nationally by FMCSA under 49 CFR Part 383, so the knowledge and skills tests are nearly identical in every state; a CDL issued by any state is valid nationwide. The path is uniform: obtain a Commercial Learner's Permit (CLP), hold it for at least 14 days, complete Entry-Level Driver Training (ELDT) with an FMCSA-listed provider, then pass a three-part skills test (pre-trip inspection, basic controls and road). A DOT medical certificate is required for most CDL holders. Many states let you take the skills test through a state-approved third-party tester instead of the DMV, and several also allow commercial driving schools to administer it.",
    eligibility:
      "You must already hold a valid non-commercial driver licence. The minimum age is 18 for intrastate (within-state) commercial driving and 21 for interstate driving and for hauling hazardous materials. You must pass a DOT physical and hold a valid medical examiner's certificate (with a few exempt categories), then obtain a CLP and hold it for a minimum of 14 days before the skills test. Certain disqualifying offenses (major traffic violations, felony involving a vehicle, controlled-substance offenses) bar or suspend CDL eligibility.",
    exam: {
      admin: 'State DMV / motor-vehicle agency; skills test often given by an approved third-party tester or driving school',
      questions: '~50–70 for General Knowledge, plus separate tests for each endorsement (air brakes, combination, tanker, doubles/triples, hazmat, passenger, school bus)',
      time: 'Knowledge tests untimed/limited; skills test runs ~1.5–2.5 hours',
      pass: 'Knowledge 80%; skills test is pass/fail on critical items',
      fee: 'See per-state total below (CLP + CDL + skills test)',
      format: 'Computerized multiple-choice knowledge exams, then a hands-on pre-trip, basic-controls and road skills test in the class of vehicle'
    },
    education: {
      hours: 'ELDT theory course (no fixed classroom hour count) plus behind-the-wheel with an FMCSA-listed provider',
      note: 'Entry-Level Driver Training (ELDT) has been mandatory since 7 February 2022 for a first Class A or B CDL, for adding passengers (P), school bus (S) or hazmat (H) endorsements, and for upgrading from Class B to A. Training must come from a provider on the FMCSA Training Provider Registry; there is no federal minimum classroom hour number — the curriculum is defined by FMCSA. ELDT is NOT required to obtain the CLP or to renew an existing CDL.'
    },
    prerequisites:
      'Valid regular driver licence; pass the CLP knowledge exams; hold the CLP at least 14 days; complete ELDT (for first CDL / P-S-H / upgrade); obtain a DOT medical certificate. Proof of identity, SSN and residency per the state REAL ID rules.',
    costBreakdown: {
      items: [
        { item: 'Commercial Learner\'s Permit (CLP)', fee: 'State fee, see below' },
        { item: 'CDL application / license', fee: 'State fee, see below' },
        { item: 'Skills (road) test — state or third-party', fee: '$0–$200 (third-party testers charge separately)' },
        { item: 'ELDT theory & behind-the-wheel training', fee: '$1,500–$6,000 (paid to a driving school; not a state fee)' },
        { item: 'DOT physical & medical card', fee: '$80–$150 (paid to a certified medical examiner)' },
        { item: 'Endorsement knowledge tests (hazmat, etc.)', fee: '$0–$45 each, see below' }
      ],
      total: 'State fees typically $36–$345 (see per-state); training excluded'
    },
    timeline: [
      { stage: 'Obtain CLP and hold 14 days', duration: '15–30 days' },
      { stage: 'Complete ELDT with an FMCSA-listed provider', duration: '2–6 weeks' },
      { stage: 'Pass the three-part skills test', duration: '1 day (scheduled 1–8 weeks out)' },
      { stage: 'CDL issuance', duration: 'Same day to 2 weeks' }
    ],
    route: [
      { title: 'Get a CLP', description: 'Pass the General Knowledge test (and any planned endorsement tests) at your state DMV to receive a Commercial Learner\'s Permit. You must hold it for at least 14 days.' },
      { title: 'Complete ELDT', description: 'Enrol with a school on the FMCSA Training Provider Registry and finish the mandated theory and behind-the-wheel curriculum. The provider uploads your completion to the FMCSA database — you cannot book the skills test until that record appears.' },
      { title: 'Pass the skills test', description: 'Take the pre-trip inspection, basic controls and road test in the proper class of vehicle. Many states let an approved third-party tester or your driving school administer it; a few states test only at the DMV.' },
      { title: 'Apply for the CDL', description: 'Surrender the CLP, pay the CDL fee, show your medical certificate and receive the license. Add endorsements (P, S, H, N, T, X) as needed — hazmat also requires a TSA background check and fingerprints.' }
    ],
    providersNote:
      'The only authoritative training directory is the FMCSA Training Provider Registry (tpr.fmcsa.dot.gov). A school that is not on the registry cannot satisfy the ELDT requirement, no matter what it advertises. The DMV list of approved third-party CDL skills-testers (where offered) is published on each state agency site; see the per-state note for whether third-party testing is available in that jurisdiction.',
    faqs: [
      {
        q: 'Is a CDL valid in every state?',
        a: 'Yes. Because the CDL program is standardized by federal regulation (49 CFR Part 383), a CDL issued by any one state is recognized in all 50 states and DC. This is federal uniformity, not an interstate compact — real-estate-style "reciprocity" does not apply because the tests and standards are already identical.'
      },
      {
        q: 'What is ELDT and do I need it?',
        a: 'Entry-Level Driver Training became mandatory on 7 February 2022 for a first Class A or B CDL, for adding the passenger (P), school bus (S) or hazmat (H) endorsement, and for upgrading Class B to Class A. You must train with an FMCSA-listed provider. It is not required to get the CLP or to renew an existing CDL.'
      },
      {
        q: 'How long must I hold the CLP?',
        a: 'A minimum of 14 days in every state before you may take the skills test. Some drivers wait longer to train, but the 14-day federal floor cannot be shortened.'
      },
      {
        q: 'Can I take the road test somewhere other than the DMV?',
        a: 'In most states yes — approved third-party CDL testers and commercial driving schools can administer the skills test. A small number of states (including NH, HI, KY, MA, OK, NJ, IL and RI) test only through the state agency. See the per-state note for your jurisdiction.'
      },
      {
        q: 'What is the minimum age?',
        a: '18 for intrastate commercial driving, 21 for interstate driving and for hazmat. Under-21 drivers get an "intrastate only" restriction.'
      },
      {
        q: 'Do I need a medical card?',
        a: 'Almost always. Most CDL holders must certify and carry a valid DOT medical examiner\'s certificate. A few exceptions (certain intrastate agriculture and emergency vehicles) are state-defined; check your agency.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for commercial drivers. The CDL is nationally standardized under 49 CFR Part 383, so a CDL issued by any state is valid in all jurisdictions without reciprocity agreements. Endorsements (P/S/H/N/T/X) transfer with the license; hazmat still requires the TSA background check in the new state.'
    },

    defaultAgency: 'State DMV / Motor Vehicle Agency',
    sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama Law Enforcement Agency (ALEA) — Driver License Division', agencyUrl: 'https://www.alea.gov', fee: '≈$147.50 total (CLP $36.25 + CDL $66.25 + skills $20 + $25 issuance)', note: 'CLP $36.25, CDL $66.25, skills test $20. Third-party CDL skills testing is available.', compactMember: false },
      AK: { agency: 'Alaska Division of Motor Vehicles (DMV)', agencyUrl: 'https://doa.alaska.gov/dmv/', fee: '≈$140 total (CLP $15 + CDL $100 + skills $25)', note: 'Third-party skills testing available.', compactMember: false },
      AZ: { agency: 'Arizona Motor Vehicle Division (MVD)', agencyUrl: 'https://azmvdnow.gov', fee: '≈$75 total (CLP $25 + CDL $25 + skills $25)', note: 'Third-party skills testing available.', compactMember: false },
      AR: { agency: 'Arkansas Office of Motor Vehicle (OMV)', agencyUrl: 'https://www.dfa.arkansas.gov/motor-vehicle/', fee: '≈$142 total (CLP $50 + CDL $42 + skills $50)', note: 'Third-party skills testing available.', compactMember: false },
      CA: { agency: 'California Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ca.gov', fee: '≈$100 total (CLP $100 covers CDL; skills $0 at DMV)', note: 'CLP fee is $100 and includes the original CDL issuance; skills test given by the DMV (no state third-party program of the same kind).', compactMember: false },
      CO: { agency: 'Colorado Division of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.colorado.gov', fee: '≈$36.50 total (CLP $19 + CDL $17.50)', note: 'Third-party skills testing available; skills fee often bundled with training.', compactMember: false },
      CT: { agency: 'Connecticut Department of Motor Vehicles (DMV)', agencyUrl: 'https://portal.ct.gov/dmv', fee: '≈$120 total (CLP $20 + CDL $70 + skills $30)', note: 'Third-party skills testing available.', compactMember: false },
      DE: { agency: 'Delaware Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.de.gov', fee: '≈$65 total (CLP $10 + CDL $55)', note: 'Third-party skills testing available.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Motor Vehicles (DC DMV)', agencyUrl: 'https://dmv.dc.gov', fee: '≈$215 total (CLP $78 + CDL $117 + skills $10 + $10)', note: 'Third-party skills testing available.', compactMember: false },
      FL: { agency: 'Florida Department of Highway Safety and Motor Vehicles (FLHSMV)', agencyUrl: 'https://www.flhsmv.gov', fee: '≈$150 total (CLP $75 + CDL $75)', note: 'CLP and CDL are each $75 for the commercial fee; third-party skills testing available.', compactMember: false },
      GA: { agency: 'Georgia Department of Driver Services (DDS)', agencyUrl: 'https://dds.georgia.gov', fee: '≈$127 total (CLP $10 + CDL $32 + skills $50 + $35)', note: 'Third-party skills testing available.', compactMember: false },
      HI: { agency: 'Hawaii Department of Transportation / County DMVs', agencyUrl: 'https://hidot.hawaii.gov', fee: '≈$120 total (CLP $30 + CDL $40 + skills $50)', note: 'Hawaii driver licensing is county-administered; skills test given by the state only — no third-party CDL testing.', compactMember: false },
      ID: { agency: 'Idaho Transportation Department — Division of Motor Vehicles', agencyUrl: 'https://itd.idaho.gov/divisions/vehicle/', fee: '≈$269 total (CLP $29 + CDL $40 + skills $200)', note: 'Third-party skills testing available; skills-test fee is high.', compactMember: false },
      IL: { agency: 'Illinois Secretary of State — Driver Services', agencyUrl: 'https://www.ilsos.gov', fee: '≈$170 total (CLP $50 + CDL $60 + skills $60)', note: 'Skills test given by the Secretary of State only — no third-party CDL testing.', compactMember: false },
      IN: { agency: 'Indiana Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.in.gov/bmv/', fee: '≈$52 total (CLP $17 + CDL $35)', note: 'Third-party skills testing available.', compactMember: false },
      IA: { agency: 'Iowa Department of Transportation — Motor Vehicle Division (MVD)', agencyUrl: 'https://iowadot.gov/mvd', fee: '≈$52 total (CLP $12 + CDL $40)', note: 'Third-party skills testing available.', compactMember: false },
      KS: { agency: 'Kansas Division of Vehicles (DOV)', agencyUrl: 'https://www.ksrevenue.gov/dovindex.html', fee: '≈$48 total (CLP $13 + CDL $20 + skills $15)', note: 'Third-party skills testing available.', compactMember: false },
      KY: { agency: 'Kentucky Transportation Cabinet — Division of Driver Licensing', agencyUrl: 'https://drive.ky.gov', fee: '≈$125 total (CLP $35 + CDL $40 + skills $50)', note: 'Skills test given by the state only — no third-party CDL testing.', compactMember: false },
      LA: { agency: 'Louisiana Office of Motor Vehicles (OMV)', agencyUrl: 'https://www.omv.la.gov', fee: '≈$76.50 total (CLP $15 + CDL $61.50)', note: 'Third-party skills testing available.', compactMember: false },
      ME: { agency: 'Maine Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.maine.gov/sos/bmv/', fee: '≈$104 total (CLP $35 + CDL $34 + skills $35)', note: 'Third-party skills testing available.', compactMember: false },
      MD: { agency: 'Maryland Motor Vehicle Administration (MVA)', agencyUrl: 'https://mva.maryland.gov', fee: '≈$155 total (CLP $90 + CDL $65)', note: 'Third-party skills testing available.', compactMember: false },
      MA: { agency: 'Massachusetts Registry of Motor Vehicles (RMV)', agencyUrl: 'https://www.mass.gov/rmv', fee: '≈$140 total (CLP $30 + CDL $75 + skills $35)', note: 'Skills test given by the RMV only — no third-party CDL testing.', compactMember: false },
      MI: { agency: 'Michigan Secretary of State — Driver and Vehicle Services', agencyUrl: 'https://www.michigan.gov/sos', fee: '≈$50 total (CLP $25 + CDL $25)', note: 'Third-party skills testing available.', compactMember: false },
      MN: { agency: 'Minnesota Driver and Vehicle Services (DVS)', agencyUrl: 'https://dps.mn.gov/divisions/dvs', fee: '≈$72 total (CLP $26.75 + CDL $45.25)', note: 'Third-party skills testing available.', compactMember: false },
      MS: { agency: 'Mississippi Department of Public Safety — Driver Service Bureau', agencyUrl: 'https://www.dps.ms.gov', fee: '≈$126 total (CLP $16 + CDL $55 + skills $55)', note: 'Third-party skills testing available.', compactMember: false },
      MO: { agency: 'Missouri Department of Revenue — Motor Vehicle Bureau', agencyUrl: 'https://dor.mo.gov/motorv/', fee: '≈$109 total (CLP $44 + CDL $40 + skills $25)', note: 'Third-party skills testing available.', compactMember: false },
      MT: { agency: 'Montana Motor Vehicle Division (MVD)', agencyUrl: 'https://doj.mt.gov/driverlicense/', fee: '≈$83.44 total (CLP $41.72 + CDL $41.72)', note: 'Third-party skills testing available.', compactMember: false },
      NE: { agency: 'Nebraska Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nebraska.gov', fee: '≈$75 total (CLP $15 + CDL $60)', note: 'Third-party skills testing available.', compactMember: false },
      NV: { agency: 'Nevada Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nv.gov', fee: '≈$139.50 total (CLP $57.25 + CDL $57.25 + skills $25)', note: 'Third-party skills testing available.', compactMember: false },
      NH: { agency: 'New Hampshire Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.nh.gov/safety/divisions/dmv/', fee: '≈$100 total (CLP $20 + CDL $60 + skills $20)', note: 'Skills test given by the state only — no third-party CDL testing.', compactMember: false },
      NJ: { agency: 'New Jersey Motor Vehicle Commission (MVC)', agencyUrl: 'https://www.nj.gov/mvc/', fee: '≈$167 total (CLP $125 + CDL $42)', note: 'Skills test given by the MVC only — no third-party CDL testing.', compactMember: false },
      NM: { agency: 'New Mexico Motor Vehicle Division (MVD)', agencyUrl: 'https://www.mvd.newmexico.gov', fee: '≈$28 total (CLP $10 + CDL $18)', note: 'Third-party skills testing available.', compactMember: false },
      NY: { agency: 'New York State Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.ny.gov', fee: '≈$214.50 total (CLP $10 + CDL $164.50 + skills $40)', note: 'Third-party skills testing available.', compactMember: false },
      NC: { agency: 'North Carolina Division of Motor Vehicles (NCDMV)', agencyUrl: 'https://www.ncdot.gov/dmv', fee: '≈$150.75 total (CLP $43.25 + CDL $107.50)', note: 'Third-party skills testing available.', compactMember: false },
      ND: { agency: 'North Dakota Driver License Division (DLD)', agencyUrl: 'https://www.dot.nd.gov/divisions/driver', fee: '≈$75 total (CLP $15 + CDL $50 + skills $5)', note: 'Third-party skills testing available.', compactMember: false },
      OH: { agency: 'Ohio Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.bmv.ohio.gov', fee: '≈$125 total (CLP $28.50 + CDL $46.50 + skills $50)', note: 'Third-party skills testing available.', compactMember: false },
      OK: { agency: 'Oklahoma Department of Public Safety (DPS) / Service Oklahoma', agencyUrl: 'https://oklahoma.gov/dps.html', fee: '≈$153 total (CLP $71.50 + CDL $81.50)', note: 'Skills test given by the state only — no third-party CDL testing.', compactMember: false },
      OR: { agency: 'Oregon Driver and Motor Vehicle Services (DMV)', agencyUrl: 'https://www.oregon.gov/odot/dmv', fee: '≈$345 total (CLP $40 + CDL $160 + skills $145)', note: 'Third-party skills testing available; skills-test fee is high.', compactMember: false },
      PA: { agency: 'Pennsylvania Department of Transportation (PennDOT)', agencyUrl: 'https://www.dot.state.pa.us', fee: '≈$273 total (CLP $30 + CDL $151.50 + skills $91.50)', note: 'Third-party skills testing available.', compactMember: false },
      RI: { agency: 'Rhode Island Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ri.gov', fee: '≈$223 total (CLP $41.50 + CDL $81.50 + skills $100)', note: 'Skills test given by the state only — no third-party CDL testing.', compactMember: false },
      SC: { agency: 'South Carolina Department of Motor Vehicles (SCDMV)', agencyUrl: 'https://www.scdmvonline.com', fee: '≈$69.50 total (CLP $19.50 + CDL $25 + skills $25)', note: 'Third-party skills testing available.', compactMember: false },
      SD: { agency: 'South Dakota Driver Licensing Program (DLP)', agencyUrl: 'https://dps.sd.gov/driver_licensing', fee: '≈$86 total (CLP $43 + CDL $43)', note: 'Third-party skills testing available.', compactMember: false },
      TN: { agency: 'Tennessee Department of Safety & Homeland Security — Driver Services', agencyUrl: 'https://www.tn.gov/safety/driver-services.html', fee: '≈$60 total (CLP $14 + CDL $46)', note: 'Third-party skills testing available.', compactMember: false },
      TX: { agency: 'Texas Department of Public Safety (DPS)', agencyUrl: 'https://www.dps.texas.gov', fee: '≈$122 total (CLP $25 + CDL $97)', note: 'Third-party skills testing available.', compactMember: false },
      UT: { agency: 'Utah Driver License Division (DLD)', agencyUrl: 'https://dmv.utah.gov', fee: '≈$130 total (CLP $52 + CDL $78)', note: 'Third-party skills testing available.', compactMember: false },
      VT: { agency: 'Vermont Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.vermont.gov', fee: '≈$197–$233 total (CLP $18 + CDL $72–$108 + skills $68)', note: 'Third-party skills testing available.', compactMember: false },
      VA: { agency: 'Virginia Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.virginia.gov', fee: '≈$67 total (CLP $3 + CDL $64)', note: 'Third-party skills testing available.', compactMember: false },
      WA: { agency: 'Washington Department of Licensing (DOL)', agencyUrl: 'https://www.dol.wa.gov', fee: '≈$317 total (CLP $40 + CDL $102 + skills $175)', note: 'Third-party skills testing available; skills-test fee is high.', compactMember: false },
      WV: { agency: 'West Virginia Division of Motor Vehicles (DMV)', agencyUrl: 'https://transportation.wv.gov/dmv', fee: '≈$186.25 total (CLP $25 + CDL $61.25 + skills $100)', note: 'Third-party skills testing available.', compactMember: false },
      WI: { agency: 'Wisconsin Division of Motor Vehicles (DMV)', agencyUrl: 'https://wisconsindot.gov', fee: '≈$104 total (CLP $30 + CDL $74)', note: 'Third-party skills testing available.', compactMember: false },
      WY: { agency: 'Wyoming Driver Services Program (DSP)', agencyUrl: 'https://www.dot.state.wy.us/divisions/dmv', fee: '≈$175 total (CLP $45 + CDL $45 + skills $85)', note: 'Third-party skills testing available.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. Driver's License Written Test (learner's permit knowledge exam)
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'drivers-permit',
    name: "Driver's License Written Test",
    category: 'transportation',
    group: 'Passenger Driving',
    type: 'Exam',
    blurb: 'The written knowledge exam every new driver must pass to earn a learner\'s permit before driving under supervision.',

    overview:
      "The driver's license written test is the first step of Graduated Driver Licensing (GDL) in every state. New drivers pass a computer-based knowledge exam on traffic laws, signs and safe-driving principles to receive a learner's permit, which lets them practice behind the wheel only while supervised by a licensed adult. From there most states require a holding period (often 6–12 months for minors), supervised driving hours and a driver-education course before the road test. The number of questions and the passing score are set by each state and vary widely — typically 18 to 50 questions with a pass mark between 70% and 88%. The minimum age to take the test also varies by state, generally 14 to 16. The test is written and administered by the state DMV; the driver handbook is the free, official study source.",
    eligibility:
      'The minimum age to take the test ranges from 14 (e.g., Alaska, Arkansas, Idaho, Iowa, Kansas, North Dakota, South Dakota) to 16 (e.g., Connecticut, Delaware, DC, Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island). Applicants under 18 need parental consent and usually must be enrolled in or complete driver education before the road test. You must provide proof of identity, date of birth, Social Security number and state residency per REAL ID rules.',
    exam: {
      admin: 'State DMV / motor-vehicle agency (computerized at the office or online by appointment)',
      questions: 'Varies by state: 18–50 questions (see per-state note)',
      time: 'Untimed or 20–60 minutes, varies by state',
      pass: 'Varies by state: 70%–88% (see per-state note)',
      fee: 'Included in the learner\'s-permit application fee — see per-state total',
      format: 'Multiple-choice, computerized; some states also offer audio or oral versions'
    },
    education: {
      hours: 'Often a state-approved driver-ed course, but usually required before the ROAD test, not the written test',
      note: 'Most states let you take the knowledge test to get a permit before any classroom instruction. Driver education (30–50 hours classroom plus supervised driving) is typically a precondition for the behind-the-wheel road test and license, not for the permit itself.'
    },
    prerequisites:
      'Meet the state minimum age; provide identity/residency/SSN documents; parental consent if a minor. The knowledge test fee is paid with the learner\'s-permit application.',
    costBreakdown: {
      items: [
        { item: 'Learner\'s permit application + knowledge test', fee: 'State fee, see below' },
        { item: 'Driver-education course (if taken before road test)', fee: '$200–$600 (paid to a driving school; not a state fee)' },
        { item: 'Road test / license fee (paid later)', fee: 'Often bundled or separate, see agency' }
      ],
      total: 'Permit/test fee typically $2.50–$80 (see per-state)'
    },
    timeline: [
      { stage: 'Pass the knowledge test and get a learner\'s permit', duration: 'Same day' },
      { stage: 'Supervised practice + driver ed (minors)', duration: '6–12 months holding period' },
      { stage: 'Pass the road test and receive a license', duration: 'After holding period and required hours' }
    ],
    route: [
      { title: 'Study the official driver handbook', description: 'Download the free handbook from your state DMV. It is the only official source for the laws and signs on the exam.' },
      { title: 'Gather identity and residency documents', description: 'Bring proof of age, SSN and residency per your state REAL ID document list. Minors need a parent or guardian to sign the application.' },
      { title: 'Take the knowledge exam', description: 'At the DMV (or online where offered), answer the state\'s set of questions. See the per-state note for the exact question count and passing score.' },
      { title: 'Receive the learner\'s permit', description: 'Pay the permit fee; you may now practice driving only with a qualified supervising adult. Observe the state\'s permit restrictions (night curfews, passenger limits).' },
      { title: 'Complete the GDL steps and road test', description: 'Hold the permit for the required period, finish driver ed and supervised hours, then pass the behind-the-wheel test for a full or provisional license.' }
    ],
    providersNote:
      'The single authoritative study resource is your state DMV\'s free driver handbook and online practice tests. Commercial permit-prep sites are optional. Driver-education providers are listed on each state agency site; enrollment is usually required before the road test for minors, not before the written test.',
    faqs: [
      {
        q: 'At what age can I take the test?',
        a: 'It varies by state. The youngest minimum ages are 14 (Alaska, Arkansas, Idaho, Iowa, Kansas, North Dakota, South Dakota); most states set 15 or 15½; a handful require 16 (Connecticut, Delaware, DC, Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island). See the per-state note for your jurisdiction.'
      },
      {
        q: 'How many questions are on the test and what score do I need?',
        a: 'Both are set by each state. Question counts range from about 18 (Pennsylvania) to 50 (Indiana, Nevada, New Jersey, Utah, Wisconsin), and the passing score runs from 70% (DC, New York, Texas, New Mexico, Massachusetts) up to 88% (Maryland). The exact figures are in each per-state note.'
      },
      {
        q: 'Is the knowledge test the same as getting my license?',
        a: 'No. Passing the written test earns only a learner\'s permit. You must then hold the permit for the state\'s required period, complete supervised driving (and often driver ed), and pass a separate behind-the-wheel road test to get a license.'
      },
      {
        q: 'Can I take the test online?',
        a: 'A growing number of states offer the permit knowledge exam online by appointment (often with identity-verification and proctoring), but many still require it in person at a DMV office. Check your state agency\'s current policy.'
      },
      {
        q: 'What if I fail?',
        a: 'Every state allows retakes, typically after a short wait (same day or a few days) and sometimes with a re-test fee. There is usually no limit, but the passing score and question set are unchanged on retake.'
      },
      {
        q: 'Do other states accept my learner\'s permit?',
        a: 'Not automatically. A learner\'s permit is issued by one state and is generally valid only in that state; some states honor out-of-state permits for visiting drivers, but you must obey the home state\'s restrictions. There is no interstate compact for permits.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for driver\'s permits or non-commercial licenses. Each state issues its own learner\'s permit under its own GDL rules; a permit from one state is generally valid only there. New residents must typically obtain that state\'s license within a set period (often 30–90 days).'
    },

    defaultAgency: 'State DMV / Motor Vehicle Agency',
    sourceUrl: 'https://www.iihs.org/topics/graduated-licensing',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Law Enforcement Agency (ALEA) — Driver License Division', agencyUrl: 'https://www.alea.gov', fee: '≈$36.25 (permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15. Knowledge test included in the learner permit fee.', compactMember: false },
      AK: { agency: 'Alaska Division of Motor Vehicles (DMV)', agencyUrl: 'https://doa.alaska.gov/dmv/', fee: '≈$15 (instruction permit)', note: '20 questions, 16 correct (80%) to pass; minimum age 14.', compactMember: false },
      AZ: { agency: 'Arizona Motor Vehicle Division (MVD)', agencyUrl: 'https://azmvdnow.gov', fee: '≈$7 (instruction permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15½.', compactMember: false },
      AR: { agency: 'Arkansas Office of Motor Vehicle (OMV)', agencyUrl: 'https://www.dfa.arkansas.gov/motor-vehicle/', fee: '≈$40 (learner\'s permit, includes test)', note: '25 questions, 20 correct (80%) to pass; minimum age 14.', compactMember: false },
      CA: { agency: 'California Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ca.gov', fee: '≈$38 (permit)', note: '46 questions, 38 correct (83%) to pass; minimum age 15½. Permit valid 12 months.', compactMember: false },
      CO: { agency: 'Colorado Division of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.colorado.gov', fee: '≈$17 (instruction permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false },
      CT: { agency: 'Connecticut Department of Motor Vehicles (DMV)', agencyUrl: 'https://portal.ct.gov/dmv', fee: '≈$40 (learner\'s permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 16.', compactMember: false },
      DE: { agency: 'Delaware Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.de.gov', fee: '≈$40 (learner\'s permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 16.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Motor Vehicles (DC DMV)', agency: 'District of Columbia Department of Motor Vehicles (DC DMV)', agencyUrl: 'https://dmv.dc.gov', fee: '≈$10 (learner\'s permit)', note: '25 questions, 18 correct (70%) to pass; minimum age 16.', compactMember: false },
      FL: { agency: 'Florida Department of Highway Safety and Motor Vehicles (FLHSMV)', agencyUrl: 'https://www.flhsmv.gov', fee: '≈$48 (learner\'s license)', note: '50 questions, 40 correct (80%) to pass; minimum age 15.', compactMember: false },
      GA: { agency: 'Georgia Department of Driver Services (DDS)', agencyUrl: 'https://dds.georgia.gov', fee: '≈$10 (learner\'s permit, includes test)', note: '40 questions, 30 correct (75%) to pass; minimum age 15.', compactMember: false },
      HI: { agency: 'Hawaii Department of Transportation / County DMVs', agencyUrl: 'https://hidot.hawaii.gov', fee: '≈$8 (instruction permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15½. County-administered.', compactMember: false },
      ID: { agency: 'Idaho Transportation Department — Division of Motor Vehicles', agencyUrl: 'https://itd.idaho.gov/divisions/vehicle/', fee: '≈$15 (instruction permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 14½.', compactMember: false },
      IL: { agency: 'Illinois Secretary of State — Driver Services', agencyUrl: 'https://www.ilsos.gov', fee: '≈$20 (instruction permit)', note: '35 questions, 28 correct (80%) to pass; minimum age 15.', compactMember: false },
      IN: { agency: 'Indiana Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.in.gov/bmv/', fee: '≈$9 (learner\'s permit)', note: '50 questions, 42 correct (84%) to pass; minimum age 15.', compactMember: false },
      IA: { agency: 'Iowa Department of Transportation — Motor Vehicle Division (MVD)', agencyUrl: 'https://iowadot.gov/mvd', fee: '≈$6 (instruction permit)', note: '35 questions, 28 correct (80%) to pass; minimum age 14.', compactMember: false },
      KS: { agency: 'Kansas Division of Vehicles (DOV)', agencyUrl: 'https://www.ksrevenue.gov/dovindex.html', fee: '≈$20 (instruction permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 14.', compactMember: false },
      KY: { agency: 'Kentucky Transportation Cabinet — Division of Driver Licensing', agencyUrl: 'https://drive.ky.gov', fee: '≈$10 (learner\'s permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 15.', compactMember: false },
      LA: { agency: 'Louisiana Office of Motor Vehicles (OMV)', agencyUrl: 'https://www.omv.la.gov', fee: '≈$32.50 (learner\'s permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 15.', compactMember: false },
      ME: { agency: 'Maine Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.maine.gov/sos/bmv/', fee: '≈$10 (instruction permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15.', compactMember: false },
      MD: { agency: 'Maryland Motor Vehicle Administration (MVA)', agencyUrl: 'https://mva.maryland.gov', fee: '≈$30 (learner\'s permit)', note: '25 questions, 22 correct (88%) to pass; minimum age 15 years 9 months.', compactMember: false },
      MA: { agency: 'Massachusetts Registry of Motor Vehicles (RMV)', agencyUrl: 'https://www.mass.gov/rmv', fee: '≈$30 (learner\'s permit)', note: '25 questions, 18 correct (72%) to pass; minimum age 16.', compactMember: false },
      MI: { agency: 'Michigan Secretary of State — Driver and Vehicle Services', agencyUrl: 'https://www.michigan.gov/sos', fee: '≈$25 (instruction permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 14 years 9 months.', compactMember: false },
      MN: { agency: 'Minnesota Driver and Vehicle Services (DVS)', agencyUrl: 'https://dps.mn.gov/divisions/dvs', fee: '≈$15.50 (instruction permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 15.', compactMember: false },
      MS: { agency: 'Mississippi Department of Public Safety — Driver Service Bureau', agencyUrl: 'https://www.dps.ms.gov', fee: '≈$7 (learner\'s permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15.', compactMember: false },
      MO: { agency: 'Missouri Department of Revenue — Motor Vehicle Bureau', agencyUrl: 'https://dor.mo.gov/motorv/', fee: '≈$10 (instruction permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false },
      MT: { agency: 'Montana Motor Vehicle Division (MVD)', agencyUrl: 'https://doj.mt.gov/driverlicense/', fee: '≈$5 (traffic education learner\'s permit)', note: '33 questions, 27 correct (82%) to pass; minimum age 14½.', compactMember: false },
      NE: { agency: 'Nebraska Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nebraska.gov', fee: '≈$10 (learner\'s permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false },
      NV: { agency: 'Nevada Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nv.gov', fee: '≈$22.25 (instruction permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 15½.', compactMember: false },
      NH: { agency: 'New Hampshire Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.nh.gov/safety/divisions/dmv/', fee: '≈$10 (youth operator permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 15½.', compactMember: false },
      NJ: { agency: 'New Jersey Motor Vehicle Commission (MVC)', agencyUrl: 'https://www.nj.gov/mvc/', fee: '≈$10 (knowledge test + permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 16.', compactMember: false },
      NM: { agency: 'New Mexico Motor Vehicle Division (MVD)', agencyUrl: 'https://www.mvd.newmexico.gov', fee: '≈$10 (instructional permit)', note: '25 questions, 18 correct (72%) to pass; minimum age 15.', compactMember: false },
      NY: { agency: 'New York State Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.ny.gov', fee: '≈$80 (includes 5-year license for under-18)', note: '20 questions, 14 correct (70%) to pass; minimum age 16.', compactMember: false },
      NC: { agency: 'North Carolina Division of Motor Vehicles (NCDMV)', agencyUrl: 'https://www.ncdot.gov/dmv', fee: '≈$20 (learner\'s permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false },
      ND: { agency: 'North Dakota Driver License Division (DLD)', agencyUrl: 'https://www.dot.nd.gov/divisions/driver', fee: '≈$15 (instruction permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 14.', compactMember: false },
      OH: { agency: 'Ohio Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.bmv.ohio.gov', fee: '≈$27 (temporary instruction permit)', note: '40 questions, 30 correct (75%) to pass; minimum age 15½.', compactMember: false },
      OK: { agency: 'Oklahoma Department of Public Safety (DPS) / Service Oklahoma', agencyUrl: 'https://oklahoma.gov/dps.html', fee: '≈$38.50 (learner\'s permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 15½.', compactMember: false },
      OR: { agency: 'Oregon Driver and Motor Vehicle Services (DMV)', agencyUrl: 'https://www.oregon.gov/odot/dmv', fee: '≈$23 (instruction permit)', note: '35 questions, 28 correct (80%) to pass; minimum age 15.', compactMember: false },
      PA: { agency: 'Pennsylvania Department of Transportation (PennDOT)', agencyUrl: 'https://www.dot.state.pa.us', fee: '≈$35.50 (learner\'s permit)', note: '18 questions, 15 correct (83%) to pass; minimum age 16.', compactMember: false },
      RI: { agency: 'Rhode Island Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ri.gov', fee: '≈$11.50 (instructional permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 16.', compactMember: false },
      SC: { agency: 'South Carolina Department of Motor Vehicles (SCDMV)', agencyUrl: 'https://www.scdmvonline.com', fee: '≈$2.50 (beginner\'s permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15.', compactMember: false },
      SD: { agency: 'South Dakota Driver Licensing Program (DLP)', agencyUrl: 'https://dps.sd.gov/driver_licensing', fee: '≈$28 (instruction permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 14.', compactMember: false },
      TN: { agency: 'Tennessee Department of Safety & Homeland Security — Driver Services', agencyUrl: 'https://www.tn.gov/safety/driver-services.html', fee: '≈$10.50 (learner\'s permit)', note: '30 questions, 24 correct (80%) to pass; minimum age 15.', compactMember: false },
      TX: { agency: 'Texas Department of Public Safety (DPS)', agencyUrl: 'https://www.dps.texas.gov', fee: '≈$16 (learner\'s license)', note: '30 questions, 21 correct (70%) to pass; minimum age 15.', compactMember: false },
      UT: { agency: 'Utah Driver License Division (DLD)', agencyUrl: 'https://dmv.utah.gov', fee: '≈$19 (learner\'s permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 15.', compactMember: false },
      VT: { agency: 'Vermont Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.vermont.gov', fee: '≈$32 (learner\'s permit)', note: '20 questions, 16 correct (80%) to pass; minimum age 15.', compactMember: false },
      VA: { agency: 'Virginia Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.virginia.gov', fee: '≈$3 (learner\'s permit, two-year)', note: '40 questions (10 signs + 30 general), need 10/10 signs and 24/30 general to pass (~86%); minimum age 15½.', compactMember: false },
      WA: { agency: 'Washington Department of Licensing (DOL)', agencyUrl: 'https://www.dol.wa.gov', fee: '≈$25 (instruction permit)', note: '40 questions, 32 correct (80%) to pass; minimum age 15.', compactMember: false },
      WV: { agency: 'West Virginia Division of Motor Vehicles (DMV)', agencyUrl: 'https://transportation.wv.gov/dmv', fee: '≈$5 (instructional permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false },
      WI: { agency: 'Wisconsin Division of Motor Vehicles (DMV)', agencyUrl: 'https://wisconsindot.gov', fee: '≈$35 (instruction permit)', note: '50 questions, 40 correct (80%) to pass; minimum age 15½.', compactMember: false },
      WY: { agency: 'Wyoming Driver Services Program (DSP)', agencyUrl: 'https://www.dot.state.wy.us/divisions/dmv', fee: '≈$20 (learner\'s permit)', note: '25 questions, 20 correct (80%) to pass; minimum age 15.', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. Motorcycle License Test
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'motorcycle-license',
    name: 'Motorcycle License Test',
    category: 'transportation',
    group: 'Passenger Driving',
    type: 'Exam',
    blurb: 'The knowledge and on-cycle exams (or an approved rider-course waiver) needed to add a motorcycle endorsement or licence.',

    overview:
      "A motorcycle credential lets you legally ride a motorcycle on public roads. States handle this two ways: most add a motorcycle endorsement (often class M) to a regular driver licence, while a few issue a separate motorcycle-only licence. The standard path is a written knowledge test plus an on-cycle skills test at the DMV. In 49 of the 51 jurisdictions, however, completing an approved rider-training course — typically the Motorcycle Safety Foundation (MSF) Basic RiderCourse or its state equivalent — waives the DMV riding-skills test, and in many states also the written test. Only Montana and New Mexico still require the DMV road test even after a course. Minimum ages for a motorcycle learner's permit range from 13 (New Mexico) to 17 (Georgia, Nebraska), with most states at 16. Helmet and insurance rules vary by state.",
    eligibility:
      'You generally need a regular driver licence or a motorcycle learner\'s permit first. The motorcycle permit minimum age varies: 13 in New Mexico, 14 in Alaska/Arkansas/North Dakota/South Dakota, 15 in Arizona/Kansas/Montana/Vermont, and 16 in most others (17 in Georgia and Nebraska). Minors usually need parental consent and must complete rider training. Some states require a separate written test specifically on motorcycle laws.',
    exam: {
      admin: 'State DMV, or an approved rider-training provider (MSF / state program) that waives the DMV tests',
      questions: 'Varies by state: 15–50 knowledge questions (see per-state note)',
      time: 'Knowledge untimed/limited; on-cycle skills ~2–4 hours for a course',
      pass: 'Varies by state: 70%–88% on knowledge',
      fee: 'See per-state (permit, endorsement, or course-related fee)',
      format: 'Multiple-choice written knowledge exam plus an on-cycle skills test — or course completion certificate waiver'
    },
    education: {
      hours: 'State-approved rider-training course (MSF Basic RiderCourse ≈ 15 hours, or state equivalent)',
      note: 'Most states waive the DMV on-cycle skills test (and often the written test) upon completion of an approved course. Montana and New Mexico are the exceptions that still require the DMV road test. Many state programs are low-cost or free to residents (e.g., California CMSP, Texas via TDLR, Florida FRTP, Pennsylvania PAMSP, Motorcycle Ohio, Michigan Rider Education Program, Team Oregon, Colorado MOST, Idaho STAR).'
    },
    prerequisites:
      'Valid driver licence or motorcycle learner\'s permit; parental consent if a minor. For a course-based waiver, enroll with an approved provider and pass its evaluation.',
    costBreakdown: {
      items: [
        { item: 'Motorcycle learner\'s permit (if taken)', fee: 'State fee, see below' },
        { item: 'Motorcycle endorsement / licence addition', fee: 'State fee, see below' },
        { item: 'Approved rider-training course', fee: '$0–$350 (free or subsidized in many states; higher at private MSF sites)' }
      ],
      total: 'State fees typically $7–$175 (see per-state); course often separate'
    },
    timeline: [
      { stage: 'Get a motorcycle learner\'s permit (or licence)', duration: 'Same day after knowledge test' },
      { stage: 'Complete approved rider training', duration: '1 weekend (≈15 hours)' },
      { stage: 'Waive DMV tests and receive endorsement', duration: 'On course completion or at DMV' }
    ],
    route: [
      { title: 'Decide between the DMV path and the course path', description: 'In 49 states, an approved rider-training course waives the DMV riding-skills test; in Montana and New Mexico you must still take the DMV road test. The course is usually the faster, safer route and is free or low-cost in many states.' },
      { title: 'Pass the motorcycle knowledge test (or let the course cover it)', description: 'If going straight to the DMV, pass the written motorcycle exam (question counts vary — see per-state). Many courses include their own knowledge evaluation that substitutes for the DMV test.' },
      { title: 'Complete the on-cycle skills requirement', description: 'Either pass the DMV riding test or finish the approved course\'s range exercises. The course certificate is taken to the DMV to add the endorsement.' },
      { title: 'Add the endorsement / receive the licence', description: 'Pay the state fee to add class M to your licence (or issue a motorcycle-only licence). Observe your state\'s helmet, eye-protection and insurance rules.' }
    ],
    providersNote:
      'Find an approved course through the Motorcycle Safety Foundation (msf-usa.org) or your state program (California CMSP, Texas TDLR, Florida FRTP, New York SMSP, Pennsylvania PAMSP, Motorcycle Ohio, Michigan Rider Ed, Team Oregon, Colorado MOST, Idaho STAR, and others). These are the only courses that trigger the DMV skills-test waiver; confirm the list with your state DMV.',
    faqs: [
      {
        q: 'Do I have to take the DMV riding test?',
        a: 'In 49 of 51 jurisdictions, completing an approved rider-training course (MSF Basic RiderCourse or the state equivalent) waives the DMV on-cycle skills test. Montana and New Mexico are the only states that still require the DMV road test even after a course.'
      },
      {
        q: 'Is it a separate licence or just an endorsement?',
        a: 'Most states add a motorcycle endorsement (class M) to your existing driver licence. A few issue a standalone motorcycle-only licence. Either way the testing and training requirements are essentially the same.'
      },
      {
        q: 'How old do I have to be?',
        a: 'Motorcycle permit minimum ages vary: as young as 13 (New Mexico) and 14 (Alaska, Arkansas, North Dakota, South Dakota), 15 in several states, and 16 in most; Georgia and Nebraska set 17. A regular driver licence or permit is usually required first.'
      },
      {
        q: 'Are helmet laws the same everywhere?',
        a: 'No. Helmet requirements differ by state — some require helmets for all riders, others only for riders under a certain age, and a few have no helmet law. Eye protection and insurance rules also vary. Check your state DMV.'
      },
      {
        q: 'Is the rider course free?',
        a: 'Many states subsidize or fully fund rider training for residents (e.g., Pennsylvania PAMSP, Motorcycle Ohio, Florida FRTP, Idaho STAR, Team Oregon), while private MSF sites typically charge $200–$350. The course fee is separate from any state endorsement fee.'
      },
      {
        q: 'Does my motorcycle endorsement work in other states?',
        a: 'Yes. A motorcycle endorsement added to a state licence is recognized in every other state, just like the underlying licence. There is no interstate compact specific to motorcycles, but full faith and credit applies to driver licences.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'There is no interstate compact for motorcycle licensing. A motorcycle endorsement on a state driver licence is honored in all states under general driver-licence recognition. New residents must transfer their licence (and endorsement) within the state\'s move-in window, usually 30–90 days.'
    },

    defaultAgency: 'State DMV / Motor Vehicle Agency',
    sourceUrl: 'https://msf-usa.org',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Law Enforcement Agency (ALEA) — Driver License Division', agencyUrl: 'https://www.alea.gov', fee: '≈$36.25 (licence incl. M)', note: '30-question motorcycle knowledge test, 24 correct (80%) to pass. MSF Basic RiderCourse waives the DMV skills test.', compactMember: false },
      AK: { agency: 'Alaska Division of Motor Vehicles (DMV)', agencyUrl: 'https://doa.alaska.gov/dmv/', fee: '≈$15 (permit) + licence fee', note: 'Minimum motorcycle permit age 14. MSF course waives the road test.', compactMember: false },
      AZ: { agency: 'Arizona Motor Vehicle Division (MVD)', agencyUrl: 'https://azmvdnow.gov', fee: '≈$7 (instruction permit) + endorsement fee', note: 'Minimum permit age 15. MSF (or state) course waives skills test; MVD rider program available.', compactMember: false },
      AR: { agency: 'Arkansas Office of Motor Vehicle (OMV)', agencyUrl: 'https://www.dfa.arkansas.gov/motor-vehicle/', fee: '≈$40 (licence incl. M)', note: 'Minimum motorcycle permit age 14. Approved rider course waives the DMV road test.', compactMember: false },
      CA: { agency: 'California Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ca.gov', fee: '≈$39–$46 (M1/M2 endorsement)', note: 'M1/M2: 30 questions, 24 correct (80%) to pass. California Motorcyclist Safety Program (CMSP) is mandatory for riders under 21 and waives tests; older riders may also use it.', compactMember: false },
      CO: { agency: 'Colorado Division of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.colorado.gov', fee: '≈$19 (M endorsement) or $14 permit + $2', note: '25 questions, 21 correct (84%) to pass. Colorado Motorcycle Operator Safety Training (MOST) waives the skills test.', compactMember: false },
      CT: { agency: 'Connecticut Department of Motor Vehicles (DMV)', agencyUrl: 'https://portal.ct.gov/dmv', fee: '≈$40 (M endorsement)', note: '16 questions, 12 correct (75%) to pass. Approved rider course waives the DMV skills test.', compactMember: false },
      DE: { agency: 'Delaware Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.de.gov', fee: '≈$12 (M endorsement)', note: '25 questions, 20 correct (80%) to pass. Approved course waives the skills test.', compactMember: false },
      DC: { agency: 'District of Columbia Department of Motor Vehicles (DC DMV)', agencyUrl: 'https://dmv.dc.gov', fee: '≈$10+ (M endorsement)', note: 'Approved rider course waives the DMV skills test. Minimum permit age 16.', compactMember: false },
      FL: { agency: 'Florida Department of Highway Safety and Motor Vehicles (FLHSMV)', agencyUrl: 'https://www.flhsmv.gov', fee: '≈$7 (M endorsement)', note: '50-question test; Florida Rider Training Program (FRTP) has been mandatory for new riders since 2008 and waives the DMV tests.', compactMember: false },
      GA: { agency: 'Georgia Department of Driver Services (DDS)', agencyUrl: 'https://dds.georgia.gov', fee: '≈$32 (licence incl. M)', note: '20 questions, 15 correct (75%) to pass. Approved course (Georgia Motorcycle Safety Program) waives the skills test. Minimum permit age 17.', compactMember: false },
      HI: { agency: 'Hawaii Department of Transportation / County DMVs', agencyUrl: 'https://hidot.hawaii.gov', fee: '≈$8 (permit) + licence fee', note: 'Approved rider course waives the DMV skills test. County-administered.', compactMember: false },
      ID: { agency: 'Idaho Transportation Department — Division of Motor Vehicles', agencyUrl: 'https://itd.idaho.gov/divisions/vehicle/', fee: '≈$15 (permit) + endorsement', note: 'Idaho STAR rider course waives the DMV skills test.', compactMember: false },
      IL: { agency: 'Illinois Secretary of State — Driver Services', agencyUrl: 'https://www.ilsos.gov', fee: '≈$10 (M permit) + $30–$60 licence', note: '15 questions, 12 correct (80%) to pass. Free state-approved motorcycle training waives the DMV road test.', compactMember: false },
      IN: { agency: 'Indiana Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.in.gov/bmv/', fee: '≈$17 (licence incl. M)', note: 'Approved rider course waives the DMV skills test. Minimum permit age 16.', compactMember: false },
      IA: { agency: 'Iowa Department of Transportation — Motor Vehicle Division (MVD)', agencyUrl: 'https://iowadot.gov/mvd', fee: '≈$12 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      KS: { agency: 'Kansas Division of Vehicles (DOV)', agencyUrl: 'https://www.ksrevenue.gov/dovindex.html', fee: '≈$20 (permit) + endorsement', note: '25 questions, 20 correct (80%) to pass. Approved course waives both written and skills tests. Minimum permit age 15.', compactMember: false },
      KY: { agency: 'Kentucky Transportation Cabinet — Division of Driver Licensing', agencyUrl: 'https://drive.ky.gov', fee: '≈$35 (licence incl. M)', note: '30-question test. Approved rider course waives the DMV skills test.', compactMember: false },
      LA: { agency: 'Louisiana Office of Motor Vehicles (OMV)', agencyUrl: 'https://www.omv.la.gov', fee: '≈$61.50 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      ME: { agency: 'Maine Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.maine.gov/sos/bmv/', fee: '≈$34 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      MD: { agency: 'Maryland Motor Vehicle Administration (MVA)', agencyUrl: 'https://mva.maryland.gov', fee: '≈$65 (licence incl. M)', note: 'Approved rider course (Maryland Motorcycle Safety Program) waives the DMV skills test.', compactMember: false },
      MA: { agency: 'Massachusetts Registry of Motor Vehicles (RMV)', agencyUrl: 'https://www.mass.gov/rmv', fee: '≈$75 (licence incl. M)', note: 'Approved rider course (MREP) waives the DMV skills test.', compactMember: false },
      MI: { agency: 'Michigan Secretary of State — Driver and Vehicle Services', agencyUrl: 'https://www.michigan.gov/sos', fee: '≈$16 (CY endorsement)', note: '25 questions, 20 correct (80%) to pass. Michigan Rider Education Program (MI-REP) waives the DMV skills test.', compactMember: false },
      MN: { agency: 'Minnesota Driver and Vehicle Services (DVS)', agencyUrl: 'https://dps.mn.gov/divisions/dvs', fee: '≈$45.25 (licence incl. M)', note: '40-question test. Approved rider course waives the DMV skills test.', compactMember: false },
      MS: { agency: 'Mississippi Department of Public Safety — Driver Service Bureau', agencyUrl: 'https://www.dps.ms.gov', fee: '≈$55 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      MO: { agency: 'Missouri Department of Revenue — Motor Vehicle Bureau', agencyUrl: 'https://dor.mo.gov/motorv/', fee: '≈$40 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      MT: { agency: 'Montana Motor Vehicle Division (MVD)', agencyUrl: 'https://doj.mt.gov/driverlicense/', fee: '≈$41.72 (licence incl. M)', note: 'Minimum permit age 15. NOTE: Montana requires the DMV on-cycle road test even after a rider course — no skills-test waiver. 33-question test.', compactMember: false },
      NE: { agency: 'Nebraska Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nebraska.gov', fee: '≈$60 (licence incl. M)', note: 'Approved rider course waives the DMV skills test. Minimum permit age 17.', compactMember: false },
      NV: { agency: 'Nevada Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.nv.gov', fee: '≈$57.25 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      NH: { agency: 'New Hampshire Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.nh.gov/safety/divisions/dmv/', fee: '≈$60 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      NJ: { agency: 'New Jersey Motor Vehicle Commission (MVC)', agencyUrl: 'https://www.nj.gov/mvc/', fee: '≈$42 (licence incl. M)', note: '50 questions, 40 correct (80%) to pass. Approved rider course waives the DMV skills test.', compactMember: false },
      NM: { agency: 'New Mexico Motor Vehicle Division (MVD)', agencyUrl: 'https://www.mvd.newmexico.gov', fee: '≈$18 (licence incl. M)', note: 'Minimum permit age 13 (lowest in the country). NOTE: New Mexico requires the DMV on-cycle road test even after a rider course — no skills-test waiver.', compactMember: false },
      NY: { agency: 'New York State Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.ny.gov', fee: '≈$10 (M/MJ endorsement) + licence fee', note: '20 questions, 14 correct (70%, including 2 of 4 sign questions) to pass. New York State Motorcycle Safety Program (NYSMSP) waives the DMV tests.', compactMember: false },
      NC: { agency: 'North Carolina Division of Motor Vehicles (NCDMV)', agencyUrl: 'https://www.ncdot.gov/dmv', fee: '≈$20 (permit) + licence fee', note: '37 questions, 29 correct (78%) to pass, or 30/80%. Approved rider course waives the DMV skills test.', compactMember: false },
      ND: { agency: 'North Dakota Driver License Division (DLD)', agencyUrl: 'https://www.dot.nd.gov/divisions/driver', fee: '≈$50 (licence incl. M)', note: 'Minimum permit age 14. Approved rider course waives the DMV skills test.', compactMember: false },
      OH: { agency: 'Ohio Bureau of Motor Vehicles (BMV)', agencyUrl: 'https://www.bmv.ohio.gov', fee: '≈$16–$27.50 (CY endorsement by age)', note: '25 questions, 20 correct (80%) to pass. Motorcycle Ohio (MOP) waives the DMV skills test.', compactMember: false },
      OK: { agency: 'Oklahoma Department of Public Safety (DPS) / Service Oklahoma', agencyUrl: 'https://oklahoma.gov/dps.html', fee: '≈$81.50 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      OR: { agency: 'Oregon Driver and Motor Vehicle Services (DMV)', agencyUrl: 'https://www.oregon.gov/odot/dmv', fee: '≈$7 (knowledge) + $98 (endorsement)', note: '25–35 questions, 20–28 correct (80%) to pass. Team Oregon waives both written and skills tests.', compactMember: false },
      PA: { agency: 'Pennsylvania Department of Transportation (PennDOT)', agencyUrl: 'https://www.dot.state.pa.us', fee: '≈$10.50 (M endorsement)', note: '20-question test. Pennsylvania Motorcycle Safety Program (PAMSP) is free to residents and waives the DMV tests.', compactMember: false },
      RI: { agency: 'Rhode Island Division of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.ri.gov', fee: '≈$81.50 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      SC: { agency: 'South Carolina Department of Motor Vehicles (SCDMV)', agencyUrl: 'https://www.scdmvonline.com', fee: '≈$25 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      SD: { agency: 'South Dakota Driver Licensing Program (DLP)', agencyUrl: 'https://dps.sd.gov/driver_licensing', fee: '≈$43 (licence incl. M)', note: 'Minimum permit age 14. Approved rider course waives the DMV skills test.', compactMember: false },
      TN: { agency: 'Tennessee Department of Safety & Homeland Security — Driver Services', agencyUrl: 'https://www.tn.gov/safety/driver-services.html', fee: '≈$46 (licence incl. M)', note: '30-question test. Approved rider course waives the DMV skills test.', compactMember: false },
      TX: { agency: 'Texas Department of Public Safety (DPS)', agencyUrl: 'https://www.dps.texas.gov', fee: '≈$26 (Class M)', note: 'Class M: 20 questions, 14 correct (70%) to pass. Rider training (via TDL is the Texas DPS-approved course) is mandatory under 18 and waives tests; older riders may use it too.', compactMember: false },
      UT: { agency: 'Utah Driver License Division (DLD)', agencyUrl: 'https://dmv.utah.gov', fee: '≈$78 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      VT: { agency: 'Vermont Department of Motor Vehicles (DMV)', agencyUrl: 'https://dmv.vermont.gov', fee: '≈$72–$108 (licence incl. M)', note: 'Minimum permit age 15. Approved rider course waives the DMV skills test.', compactMember: false },
      VA: { agency: 'Virginia Department of Motor Vehicles (DMV)', agencyUrl: 'https://www.dmv.virginia.gov', fee: '≈$64 (licence incl. M)', note: 'Approved rider course (Virginia Rider Training Program) waives the DMV skills test.', compactMember: false },
      WA: { agency: 'Washington Department of Licensing (DOL)', agencyUrl: 'https://www.dol.wa.gov', fee: '≈$102 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      WV: { agency: 'West Virginia Division of Motor Vehicles (DMV)', agencyUrl: 'https://transportation.wv.gov/dmv', fee: '≈$61.25 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      WI: { agency: 'Wisconsin Division of Motor Vehicles (DMV)', agencyUrl: 'https://wisconsindot.gov', fee: '≈$74 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false },
      WY: { agency: 'Wyoming Driver Services Program (DSP)', agencyUrl: 'https://www.dot.state.wy.us/divisions/dmv', fee: '≈$45 (licence incl. M)', note: 'Approved rider course waives the DMV skills test.', compactMember: false }
    }
  }
];
