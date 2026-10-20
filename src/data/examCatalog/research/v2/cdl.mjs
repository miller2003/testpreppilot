// v2 per-state research increment — cdl (Commercial Driver's License)
// Compiled 2026-10-20. Federal layer verified from FMCSA (ELDT regulations, Training
// Provider Registry) and state DMV fee schedules. Wages: BLS OEWS via O*NET OnLine,
// SOC 53-3032 (Heavy and Tractor-Trailer Truck Drivers), May 2025 — the current OEWS
// release at compile time; per-state medians stored as CSV under reports/oews/533032/.

export default {
  key: 'cdl',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      agency: 'Alabama Law Enforcement Agency (ALEA) \u2014 Driver License Division',
      agencyUrl: 'https://www.alea.gov/dps/driver-license/',
      exam: {
        vendor: 'Alabama Law Enforcement Agency (state examiners)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard General Knowledge exam (80% pass mark)', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests (Air Brakes, Combination, Tanker, Doubles/Triples, Hazmat, Passenger, School Bus)', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip inspection, basic vehicle control, on-road driving', questions: 'Hands-on', time: 'By appointment', pass: 'Pass/fail' }
        ],
        fee: '$25 testing fee plus a $20 skills-test fee; CLP $36.25',
        practical: 'Skills test by appointment only, $20; a $15 retest fee applies to the written portion.',
        languages: ['English'],
        sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'None beyond a valid Alabama driver license', other: 'Current DOT long medical form unless medically exempt; Social Security card; proof of Alabama domicile for non-citizens.' },
      background: { method: 'TSA hazmat threat assessment (fingerprint-based) for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL knowledge (testing) fee', fee: '$25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Commercial learner license', fee: '$36.25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Skills test', fee: '$20', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Class A CDL', fee: '$66.25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Class B CDL', fee: '$56.25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Class C CDL', fee: '$36.25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
        { item: 'Written retest', fee: '$15', sourceUrl: 'https://www.legislature.state.al.us/pdf/lsa/Fiscal/TaxGuide/2024_Tax_Guide.pdf' }
      ],
      application: {
        portal: 'ALEA Driver License Division (in-person district offices)',
        portalUrl: 'https://www.alea.gov/dps/driver-license',
        steps: ['Study the Alabama CDL manual and pass the General Knowledge test plus any endorsement tests', 'Receive the commercial learner license and hold it at least 14 days', 'Complete ELDT with an FMCSA-registered provider if required', 'Schedule and pass the three-part skills test by appointment', 'Purchase the CDL at an ALEA office with medical certification on file'],
        sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards'
      },
      renewal: { cycle: '4 years', medical: 'DOT medical certification is transmitted electronically to ALEA for non-excepted interstate drivers', fee: 'Class A $66.25 / B $56.25 / C $36.25', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
      reciprocity: { rule: 'Out-of-state CDL holders transfer at an ALEA office with one primary identification document, the Social Security card, a $5 transfer fee and the license purchase fee; TSA background check applies if transferring with a hazmat endorsement.', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$52,120', p25: '$44,640', p75: '$64,870', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=AL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.alea.gov/dps/driver-license/license-and-id-cards' }],
      stateFaqs: [
        { q: 'What does an Alabama CDL cost end to end?', a: 'State charges come to $147.50 for a first Class A: a $25 testing fee, the $36.25 commercial learner license, the $20 skills test and the $66.25 Class A purchase. Credit card payments add a 4% convenience fee.' },
        { q: 'Do CDL fees differ by class in Alabama?', a: 'Yes \u2014 the purchase fee is $66.25 for Class A, $56.25 for Class B and $36.25 for Class C, while the $25 testing fee, $20 skills test and $36.25 learner license are the same regardless of class.' },
        { q: 'How do I schedule the Alabama skills test?', a: 'Skills tests are administered by ALEA by appointment only, with a $20 fee; the written portion carries a $15 retest fee if you fail a knowledge exam.' },
        { q: 'What do Alabama truck drivers earn?', a: 'BLS OEWS reports a May 2025 Alabama median of $52,120 for Heavy and Tractor-Trailer Truck Drivers, below the $58,640 national median.' }
      ],
      sources: [
        { label: 'ALEA \u2014 License and ID Cards (CDL fees)', url: 'https://www.alea.gov/dps/driver-license/license-and-id-cards', checkedOn: '2026-10' },
        { label: 'ALEA \u2014 Document Requirements and Fees', url: 'https://www.alea.gov/dps/document-requirements-and-fees', checkedOn: '2026-10' },
        { label: 'Alabama Legislature \u2014 Driver\u2019s License Fees (2024 Tax Guide)', url: 'https://www.legislature.state.al.us/pdf/lsa/Fiscal/TaxGuide/2024_Tax_Guide.pdf', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    AK: {
      agency: 'Alaska Division of Motor Vehicles',
      agencyUrl: 'https://dmv.alaska.gov',
      exam: {
        vendor: 'Alaska DMV; commercial road tests in Anchorage administered by the Center for Employment Education (third party)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement sought', time: 'Untimed', pass: '80%' },
          { name: 'Commercial road test', questions: 'Pre-trip, basic controls and on-road', time: 'Scheduled appointment', pass: 'Pass/fail' }
        ],
        fee: '$25 non-refundable road-test fee; CDL issuance $100 (standard) or $120 (REAL ID compliant)',
        practical: 'Road-test appointments can be scheduled at any State DMV office or through Online Services; in the Municipality of Anchorage commercial tests are run by the Center for Employment Education.',
        languages: ['English'],
        sourceUrl: 'https://www.akleg.gov/basis/get_documents.asp?session=27&docid=12402'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the road test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '19 for an intrastate Alaska CDL; 21 at application for interstate', education: 'Valid driver license held for at least one year', other: 'Social Security number required; vision 20/40 or better (intrastate-only waiver possible).' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement, renewed every 5 years', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL issuance (standard)', fee: '$100', sourceUrl: 'http://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf' },
        { item: 'CDL issuance (REAL ID compliant)', fee: '$120', sourceUrl: 'https://dmv.alaska.gov/credential-services/realidupdate/' },
        { item: 'Commercial road test', fee: '$25 (non-refundable)', sourceUrl: 'https://www.akleg.gov/basis/get_documents.asp?session=27&docid=12402' },
        { item: 'Commercial instruction permit', fee: '$15', sourceUrl: 'http://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf' }
      ],
      application: {
        portal: 'Alaska DMV Online Services',
        portalUrl: 'https://doa.alaska.gov/dmv/',
        steps: ['Submit Forms 413 and 415 with proof of date of birth, legal name, Social Security number and Alaska physical address', 'Pass the General Knowledge and endorsement tests', 'Complete ELDT if required and hold the commercial instruction permit 14 days', 'Schedule the $25 road test online, at a DMV office, or with an approved third-party tester', 'Pay the $100 ($120 REAL ID) issuance fee'],
        sourceUrl: 'https://www.akleg.gov/basis/get_documents.asp?session=27&docid=12402'
      },
      renewal: { cycle: 'Alaska CDLs follow the standard license cycle; school bus licenses expire after 5 years under AS 28.15.046', medical: 'DOT medical card on file with the DMV; an expired medical card cancels commercial privileges until re-certified', fee: '$100 standard / $120 REAL ID', sourceUrl: 'https://dmv.alaska.gov/credential-services/realidupdate/' },
      reciprocity: { rule: 'Transferring drivers obtain an Alaska license within 30 days of establishing residency, pass a 20-question rules-of-the-road test, the vision test, and the hazmat test plus background check if keeping the H endorsement; an out-of-state CDL expired over one year requires all written tests again, and over five years a new road test.', sourceUrl: 'https://www.akleg.gov/basis/get_documents.asp?session=27&docid=12402' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$70,100', p25: '$48,080', p75: '$78,060', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=AK' },
      recentChanges: [{ year: 2019, change: 'State law requires every new, transferred, upgraded or renewed CDL issued from 2 January 2019 to be federally compliant (REAL ID); standard CDLs cost $100 and federally compliant cards $120.', sourceUrl: 'https://dmv.alaska.gov/credential-services/realidupdate/' }],
      localNuance: 'In the Municipality of Anchorage, commercial road tests are delivered by the Center for Employment Education rather than DMV examiners; elsewhere the DMV and listed third-party testers cover the state.',
      stateFaqs: [
        { q: 'How much is an Alaska CDL?', a: '$100 for the standard card or $120 for the federally compliant version, plus the $25 non-refundable road-test fee; since 2019 every new or renewed Alaska CDL must be federally compliant.' },
        { q: 'Can I take my commercial road test outside the DMV in Alaska?', a: 'Yes \u2014 road tests may be given by third-party testers at driving schools and DMV Business Partner offices, and in Anchorage the Center for Employment Education administers commercial tests.' },
        { q: 'What does transferring a CDL to Alaska involve?', a: 'Apply within 30 days of becoming a resident, surrender your valid out-of-state license, pass a 20-question rules test and vision check, and re-take the hazmat test with a new TSA background check if you keep the H endorsement.' },
        { q: 'What do Alaska truck drivers earn?', a: 'BLS OEWS reports a May 2025 Alaska median of $70,100 for Heavy and Tractor-Trailer Truck Drivers \u2014 well above the $58,640 national median.' }
      ],
      sources: [
        { label: 'Alaska Statutes AS 28.33.100 \u2014 CDL requirements and fees', url: 'https://www.akleg.gov/basis/get_documents.asp?session=27&docid=12402', checkedOn: '2026-10' },
        { label: 'State of Alaska Driver Manual (fee table)', url: 'http://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf', checkedOn: '2026-10' },
        { label: 'Alaska DMV \u2014 REAL ID update and CDL compliance rules', url: 'https://dmv.alaska.gov/credential-services/realidupdate/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      agency: 'Arizona Department of Transportation \u2014 Motor Vehicle Division (MVD)',
      agencyUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license',
      exam: {
        vendor: 'Arizona MVD (knowledge tests at any MVD office; skills tests by appointment at CDL offices)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80% on each knowledge test' },
          { name: 'Endorsement tests (Doubles/Triples, Tank, Hazmat, Passenger, School Bus)', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: vehicle inspection, basic controls, road', questions: 'Hands-on', time: 'By appointment', pass: 'Pass/fail' }
        ],
        fee: 'Class A or B skills test $25; Class C $12.50; adding Passenger or School Bus to an existing CDL $5',
        practical: 'Skills testing is conducted by appointment only (call 602-255-0072); failed knowledge tests may be retaken the next business day.',
        languages: ['English'],
        sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 for an intrastate-only Arizona CDL; 21 for interstate and placarded hazmat', education: 'Valid operator license plus one year of driving experience in a vehicle other than a motorcycle', other: 'Valid DOT medical certificate, Social Security card, proof of status and Arizona domicile; English proficiency required by A.R.S. 28-3153.' },
      background: { method: 'TSA Security Threat Assessment through the IDEMIA enrollment site before the HME is issued; valid 5 years and MVD notifies holders 60 days before expiry', fee: '$86.50', sourceUrl: 'https://www.mvd.newmexico.gov/commercial/commercial-drivers-licenses-cdl/hazardous-material-endorsement' },
      fees: [
        { item: 'Class A or B CLP', fee: '$25', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'Class C CLP (must include Passenger endorsement)', fee: '$12.50', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'Skills test, Class A or B vehicle', fee: '$25', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'Skills test, Class C vehicle', fee: '$12.50', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'New or transferred CDL, Class A or B', fee: '$25', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'New or transferred CDL, Class C', fee: '$12.50', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'Endorsements \u2014 Doubles/Triples, Tank, Hazmat, Passenger', fee: '$10 each', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'School Bus endorsement', fee: 'No fee', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
        { item: 'CDL renewal \u2014 Class A/B $15, Class C $10', fee: '$15 or $10', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/managing-your-commercial-driver-license' },
        { item: 'Duplicate CDL', fee: '$12', sourceUrl: 'https://apps.azdot.gov/files/mvd/mvd-forms-lib/48-4506.pdf' }
      ],
      application: {
        portal: 'AZ MVD Now (ServiceArizona)',
        portalUrl: 'https://azmvdnow.gov',
        steps: ['Gather the DOT medical certificate, Social Security card, operator license and proof of status, identification and Arizona domicile', 'Schedule and pass the knowledge tests for the class and endorsements, paying the class fee first', 'Hold the CLP at least 14 days and complete ELDT if required', 'Book the skills test at a CDL office (602-255-0072) and pass the pre-trip, basic-controls and road portions', 'Return to MVD for issuance; HME holders return again after TSA approval'],
        sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license'
      },
      renewal: { cycle: 'Up to 8 years', medical: 'Medical certificate renewed at least every 24 months; a lapse suspends commercial privileges', fee: 'Class A/B $15; Class C $10 ($25 for Travel ID versions)', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/managing-your-commercial-driver-license' },
      reciprocity: { rule: 'Out-of-state transfers pay the same $25 (Class A/B) or $12.50 (Class C) new-CDL fee and must present a Motor Vehicle Record from the prior state issued within the past 30 days; no third-party MVRs accepted.', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$58,080', p25: '$42,580', p75: '$65,580', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=AZ' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license' }],
      stateFaqs: [
        { q: 'How much does an Arizona CDL cost?', a: 'Class A and B applicants pay $25 for the permit, $25 for the skills test and $25 for the license; Class C applicants pay $12.50 at each step. Endorsements are $10 each except School Bus, which is free.' },
        { q: 'When can I retake a failed Arizona CDL knowledge test?', a: 'You must wait until the next business day, then book the retest with a CDL office; the pass mark is 80% on every knowledge test.' },
        { q: 'How does the Arizona hazmat endorsement work?', a: 'You pass the written tests first and receive a CLP without the HME, complete the TSA Security Threat Assessment ($86.50), then return to a designated MVD office for issuance after approval \u2014 which can take up to 45 days.' },
        { q: 'What do Arizona truck drivers earn?', a: 'BLS OEWS reports a May 2025 Arizona median of $58,080 for Heavy and Tractor-Trailer Truck Drivers, essentially level with the $58,640 national median.' }
      ],
      sources: [
        { label: 'ADOT MVD \u2014 Getting Your Commercial Driver License', url: 'https://azdot.gov/mvd/services/driver-license-ID/getting-your-commercial-driver-license', checkedOn: '2026-10' },
        { label: 'ADOT MVD \u2014 Managing Your Commercial Driver License (renewals)', url: 'https://azdot.gov/mvd/services/driver-license-ID/managing-your-commercial-driver-license', checkedOn: '2026-10' },
        { label: 'Arizona Commercial Driver License Manual (40-7802)', url: 'https://apps.azdot.gov/files/mvd/mvd-forms-lib/40-7802.pdf', checkedOn: '2026-10' },
        { label: 'ADOT MVD \u2014 Fees and Services schedule (48-4506)', url: 'https://apps.azdot.gov/files/mvd/mvd-forms-lib/48-4506.pdf', checkedOn: '2026-10' }
      ]
    },
    AR: {
      agency: 'Arkansas Department of Finance and Administration \u2014 Office of Driver Services (tests administered by Arkansas State Police)',
      agencyUrl: 'https://www.dfa.arkansas.gov/driver-services/',
      exam: {
        vendor: 'Arkansas State Police administers CDL knowledge and skills tests',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test', questions: 'Pre-trip, basic controls, road', time: 'Included in the initial application window', pass: 'Pass/fail' }
        ],
        fee: 'The $50 initial CDL application covers the knowledge and skills testing; a $10 fee applies to each additional endorsement knowledge-test application',
        practical: 'Skills testing follows the federal three-part format; the initial $50 application covers the testing window, and a new application is required after three failed attempts.',
        languages: ['English'],
        sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 to hold a CLP and drive intrastate; 21 for interstate', education: 'Valid Arkansas driver license from the same jurisdiction', other: 'Self-certification of commercial-driving category at every transaction; the K (intrastate-only) restriction is applied for non-excepted/excepted intrastate certification; only the MCSA-5876 medical certificate is accepted.' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement; Arkansas does not accept remaining out-of-state TSA validity \u2014 a new threat assessment is required', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Initial CDL application (covers knowledge and skills tests)', fee: '$50', sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/' },
        { item: 'CDL (five-year license, Act 753 of 2021)', fee: '$50', sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/' },
        { item: 'Additional endorsement knowledge-test application', fee: '$10', sourceUrl: 'https://codeofarrules.arkansas.gov/' },
        { item: 'Renewal', fee: '$50', sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/' }
      ],
      application: {
        portal: 'Arkansas DFA Office of Driver Services',
        portalUrl: 'https://www.dfa.arkansas.gov/driver-services/',
        steps: ['Pass the General Knowledge and endorsement tests through Arkansas State Police testing', 'Receive the CLP (valid 12 months) and hold it at least 14 days', 'Complete ELDT if required', 'Pass the three-part skills test within the initial application window', 'Pay the $50 fee and receive the five-year CDL'],
        sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/'
      },
      renewal: { cycle: '5 years (extended from 4 by Act 753 of 2021, effective 1 January 2022)', medical: 'Non-excepted interstate and intrastate drivers must remain medically certified; the CDL is downgraded 60 days after the medical card expires', fee: '$50', sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/' },
      reciprocity: { rule: 'Arkansas cancels any license or ID you hold in another state when it issues an Arkansas credential; a CDL expired or downgraded for one year or more requires retaking all phases of the CDL exam.', sourceUrl: 'https://www.dfa.arkansas.gov/driver-services/' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$51,550', p25: '$36,770', p75: '$69,700', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=AR' },
      recentChanges: [{ year: 2022, change: 'Act 753 of 2021 took effect 1 January 2022, extending the Arkansas CDL from four to five years and raising the fee from $40 to $50.', sourceUrl: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/' }],
      stateFaqs: [
        { q: 'What does an Arkansas CDL cost?', a: 'The initial application is $50 and covers the knowledge and skills tests; the license itself is $50 for five years. Adding an endorsement knowledge test costs $10 per application.' },
        { q: 'How long is the Arkansas CDL valid?', a: 'Five years \u2014 Act 753 of 2021 extended the cycle from four years and raised the fee from $40 to $50 effective 1 January 2022.' },
        { q: 'What happens if my Arkansas medical card expires?', a: 'Your CDL or CLP is downgraded 60 days after the medical card lapses and you cannot operate a commercial vehicle until you re-certify with the accepted MCSA-5876 form.' },
        { q: 'What do Arkansas truck drivers earn?', a: 'BLS OEWS reports a May 2025 Arkansas median of $51,550 for Heavy and Tractor-Trailer Truck Drivers, below the $58,640 national median.' }
      ],
      sources: [
        { label: 'Arkansas DFA \u2014 Recent Changes in the Law (Act 753)', url: 'https://www.dfa.arkansas.gov/office/motor-vehicle/recent-changes-in-the-law/', checkedOn: '2026-10' },
        { label: 'Arkansas DFA \u2014 Office of Driver Services', url: 'https://www.dfa.arkansas.gov/driver-services/', checkedOn: '2026-10' },
        { label: 'Arkansas Code \u00a7 27-23-110 (CDL fees, as amended by Act 753)', url: 'https://www.arkleg.state.ar.us/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    CA: {
      agency: 'California Department of Motor Vehicles (DMV)',
      agencyUrl: 'https://www.dmv.ca.gov',
      exam: {
        vendor: 'California DMV (knowledge tests at field offices; skills tests at a limited set of commercial drive-test sites, by appointment)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip inspection, basic vehicle control, road test', questions: 'Hands-on', time: 'By appointment', pass: 'Pass/fail' }
        ],
        fee: 'The $100 original Class A/B application covers the knowledge and skills testing; a commercial driving or skill retest costs $46',
        practical: 'The three-part skills test is administered by DMV examiners at a limited set of field offices and dedicated commercial drive-test centers, all by appointment.',
        languages: ['English', 'Spanish'],
        sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement; hazmat theory only)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 for intrastate; 21 for interstate and hazmat', education: 'Valid California driver license', other: 'DOT medical certificate and self-certification (form DL 694) on file with the DMV; a lapse downgrades the CDL to non-commercial until a current certificate is filed.' },
      background: { method: 'TSA hazmat threat assessment (fingerprint-based) for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial Class A or B application (original, includes knowledge and skills testing)', fee: '$100', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Commercial Class A/B renewal', fee: '$59', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Commercial Class C original or renewal', fee: '$59', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Commercial driving or skill retest', fee: '$46', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Adding Tank, Doubles/Triples or Hazmat endorsement', fee: '$59', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Adding Passenger endorsement (Class A/B)', fee: '$100', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
        { item: 'Replacement CDL', fee: '$44', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' }
      ],
      application: {
        portal: 'California DMV (DMV online services and field offices)',
        portalUrl: 'https://www.dmv.ca.gov',
        steps: ['Pass the knowledge tests and receive the CLP; hold it at least 14 days', 'Complete ELDT with an FMCSA-registered provider if required', 'File the DL 694 self-certification and keep a valid medical certificate on file', 'Book the skills test at a commercial drive-test location and pass the pre-trip, basic-controls and road portions', 'Pay the license fee and receive the CDL'],
        sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/'
      },
      renewal: { cycle: '5 years', medical: 'Current DOT medical certificate must remain on file; the DMV downgrades the CDL when it expires', fee: '$59 (Class A/B or Commercial Class C)', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
      reciprocity: { rule: 'Out-of-state CDL holders transfer through the standard California application; federal rules (49 CFR 383) govern disqualifications such as DUI, which disqualifies for one year even when committed in a personal vehicle.', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$60,230', p25: '$41,830', p75: '$72,330', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=CA' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/' }],
      stateFaqs: [
        { q: 'What does a California CDL cost?', a: 'The original Class A or B application is $100 and bundles the knowledge tests and skills testing; renewals are $59, a skills retest $46, and adding a Passenger endorsement to a Class A/B costs $100.' },
        { q: 'Where does California give the CDL skills test?', a: 'Only at a limited set of DMV field offices and dedicated commercial drive-test centers, all by appointment \u2014 California does not have a third-party skills-test program of the kind other states run.' },
        { q: 'What happens if my medical card expires in California?', a: 'The DMV downgrades your CDL to a regular non-commercial license until you file a current medical certificate; keeping the card on file is what keeps the commercial privilege active.' },
        { q: 'What do California truck drivers earn?', a: 'BLS OEWS reports a May 2025 California median of $60,230 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median.' }
      ],
      sources: [
        { label: 'California DMV \u2014 Licensing Fees', url: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/', checkedOn: '2026-10' },
        { label: 'California DMV \u2014 CDL program pages', url: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/commercial-driver-licenses-cdl/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 53-3032', url: 'https://www.onetonline.org/link/localwages/53-3032.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      agency: 'Colorado Division of Motor Vehicles',
      agencyUrl: 'https://dmv.colorado.gov',
      exam: {
        vendor: 'Colorado DMV for knowledge tests; CDL skills tests administered by Department-approved third-party testing units',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: vehicle inspection, basic vehicle control, on-road driving', questions: 'Hands-on', time: 'Scheduled through the testing unit', pass: 'Pass/fail' }
        ],
        fee: 'CDL $35; commercial instruction permit $20; skills-test fee is charged by the third-party testing unit',
        practical: 'All three portions must be administered by the same licensed driving tester in sequential order, in daylight, with no more than a 15-minute break between portions.',
        languages: ['English'],
        sourceUrl: 'https://dmv.colorado.gov/node/11526'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'Valid Colorado driver license', other: 'Valid USDOT medical card and CLP in immediate possession for testing; Class A applicants trained at certified commercial driving schools must complete human-trafficking-awareness training before the skills test.' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial Driver\u2019s License', fee: '$35', sourceUrl: 'https://dmv.colorado.gov/node/11526' },
        { item: 'Commercial instruction permit', fee: '$20', sourceUrl: 'https://dmv.colorado.gov/node/11526' },
        { item: 'Duplicate license or permit', fee: '$12.30', sourceUrl: 'https://dmv.colorado.gov/node/11526' }
      ],
      application: {
        portal: 'Colorado DMV (county driver license offices)',
        portalUrl: 'https://dmv.colorado.gov',
        steps: ['Pass the knowledge tests and receive the $20 commercial instruction permit', 'Hold the permit at least 14 days and complete ELDT if required', 'Schedule the skills test with a Department-approved third-party testing unit', 'Pass the three sequential portions with the same tester', 'Pay the $35 CDL fee'],
        sourceUrl: 'https://dmv.colorado.gov/node/11526'
      },
      renewal: { cycle: 'Follows Colorado license cycle; duplicate $12.30', medical: 'Valid USDOT medical card required', fee: '$35', sourceUrl: 'https://dmv.colorado.gov/node/11526' },
      reciprocity: { rule: 'Military personnel may qualify for skills-test exemptions under the federal rules; third-party testers must verify the CLP has been held 14 days and compare photo identification before testing, matching federal transfer standards.', sourceUrl: 'https://www.coloradosos.gov/CCR/Upload/AGORequest/Redline2020-00899.doc' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$61,500', p25: '$47,010', p75: '$70,220', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=CO' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://dmv.colorado.gov/node/11526' }],
      localNuance: 'Colorado\u2019s CDL rule (1 CCR 204-30, Rule 7) caps what a third-party testing unit may charge for a skills test or retest and requires the entire test in daylight English-only administration \u2014 interpreters are not allowed for any portion.',
      stateFaqs: [
        { q: 'How much does a Colorado CDL cost?', a: 'The license is $35 and the commercial instruction permit $20; the skills test itself is charged by the approved third-party testing unit you book with.' },
        { q: 'Who gives the Colorado CDL skills test?', a: 'State-licensed third-party testing units. One licensed tester must administer the vehicle inspection, basic controls and road portions sequentially, in daylight, with no more than a 15-minute break between portions.' },
        { q: 'Can I use an interpreter on my Colorado skills test?', a: 'No \u2014 Colorado rule requires every portion of the CDL skills test to be administered in English and prohibits interpreters.' },
        { q: 'What do Colorado truck drivers earn?', a: 'BLS OEWS reports a May 2025 Colorado median of $61,500 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median.' }
      ],
      sources: [
        { label: 'Colorado DMV \u2014 State DMV fees', url: 'https://dmv.colorado.gov/node/11526', checkedOn: '2026-10' },
        { label: 'Colorado Rule 7 \u2014 CDL Program (third-party tester requirements)', url: 'https://www.coloradosos.gov/CCR/Upload/AGORequest/Redline2020-00899.doc', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 53-3032', url: 'https://www.onetonline.org/link/localwages/53-3032.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      agency: 'Connecticut Department of Motor Vehicles (DMV)',
      agencyUrl: 'https://portal.ct.gov/dmv',
      exam: {
        vendor: 'Connecticut DMV (knowledge tests and skills tests at DMV locations)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement; $5 each', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip inspection, static course, on-road driving', questions: 'Hands-on', time: 'Appointment requested via Form R-405; test date provided within three business days', pass: 'Pass/fail on all sections' }
        ],
        fee: 'General Knowledge test $16; skills test $30; CLP $20; CDL new issue $70',
        practical: 'Failing any part of the skills test fails the entire test; retesting requires a new application, the $30 fee again, and at least seven days between skills tests. The skills-test and knowledge-test fees are waived for school bus drivers presenting a letter of employment from a school bus company.',
        languages: ['English'],
        sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first CDL A/B, or first Passenger/School Bus endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'Valid verified (gold star) REAL ID Connecticut driver license', other: 'Valid DOT medical certificate uploaded by the medical provider \u2014 paper certificates are no longer accepted since 16 June 2025; self-certification required.' },
      background: { method: 'TSA hazmat threat assessment via IDEMIA for new, renewed or transferred H endorsements; a 90-day temporary endorsement is available at renewal with a passing hazmat knowledge test and IDEMIA receipt', fee: '$86.50 plus a $30 state fee to add the endorsement', sourceUrl: 'https://portal.ct.gov/DMV/Licenses/Licenses/Hazardous-Materials-Endorsement-Applicants---Important-Notice' },
      fees: [
        { item: 'General Knowledge test', fee: '$16', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'Endorsement tests', fee: '$5 each', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'Skills test', fee: '$30', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'Commercial learner\u2019s permit', fee: '$20', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'New commercial driver\u2019s license', fee: '$70 (issued 3.5\u20135 years, expiring on birthday)', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'CDL upgrade', fee: '$22', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'CDL renewal', fee: '$70 (four years)', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
        { item: 'CDL duplicate', fee: '$30', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' }
      ],
      application: {
        portal: 'Connecticut DMV online portal',
        portalUrl: 'https://portal.ct.gov/dmv',
        steps: ['Get a CLP by passing the knowledge tests', 'Complete ELDT if required', 'Email the CDL exam request (Form R-405) to dmv-detu@ct.gov; the DMV returns a test date within three business days', 'Pass the pre-trip, static-course and road portions in a representative vehicle', 'Wait two business days after passing, then collect the license at the office where you tested'],
        sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail'
      },
      renewal: { cycle: '4 years', medical: 'Medical certificate must be electronically uploaded by the provider; paper certificates no longer accepted', fee: '$70 (late fee $25)', sourceUrl: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail' },
      reciprocity: { rule: 'CDL holders changing their state of record to Connecticut pay a variable new-issue fee ($70 or $87.50) based on the issuance date and birthday; military personnel with qualifying federal licenses can receive the skills-test exemption and free knowledge tests.', sourceUrl: 'https://portal.ct.gov/DMV/Licenses/Licenses/Commercial-Drivers/CDL---Fee-Schedule' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$60,490', p25: '$47,160', p75: '$69,970', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=CT' },
      recentChanges: [{ year: 2025, change: 'From 16 June 2025 Connecticut no longer accepts paper medical certificates \u2014 the medical provider must upload the DOT certificate electronically before testing.', sourceUrl: 'https://portal.ct.gov/dmv/fees/registration-refund-requests-by-mail' }],
      stateFaqs: [
        { q: 'How much do the Connecticut CDL tests cost?', a: 'The General Knowledge test is $16, each endorsement test $5 and the skills test $30; school bus drivers with a company employment letter are exempt from the test fees.' },
        { q: 'What happens if I fail the Connecticut skills test?', a: 'Failing any section fails the whole test. You submit a new application, pay another $30, and wait at least seven days before the next attempt.' },
        { q: 'How long does the Connecticut CDL last?', a: 'The initial license runs 3.5 to 5 years, expiring on your birthday; renewals are $70 for four years.' },
        { q: 'What do Connecticut truck drivers earn?', a: 'BLS OEWS reports a May 2025 Connecticut median of $60,490 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median.' }
      ],
      sources: [
        { label: 'Connecticut DMV \u2014 Fees (driver licenses and CDL)', url: 'https://portal.ct.gov/dmv/Fees/Registration-Refund-Requests-by-Mail', checkedOn: '2026-10' },
        { label: 'Connecticut DMV \u2014 Get a commercial driver\u2019s license', url: 'https://portal.ct.gov/dmv/commercial-and-industry-services/get-commercial-driver-license', checkedOn: '2026-10' },
        { label: 'Connecticut DMV \u2014 CDL Fee Schedule', url: 'https://portal.ct.gov/DMV/Licenses/Licenses/Commercial-Drivers/CDL---Fee-Schedule', checkedOn: '2026-10' },
        { label: 'Connecticut DMV \u2014 Hazmat Endorsement Applicants', url: 'https://portal.ct.gov/DMV/Licenses/Licenses/Hazardous-Materials-Endorsement-Applicants---Important-Notice', checkedOn: '2026-10' }
      ]
    },
    DE: {
      agency: 'Delaware Division of Motor Vehicles (DMV)',
      agencyUrl: 'https://www.dmv.de.gov',
      exam: {
        vendor: 'Delaware DMV (CDL knowledge tests walk-in at any DMV facility)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test', questions: 'Pre-trip, basic controls, road', time: 'Scheduled after the 14-day CLP hold', pass: 'Pass/fail' }
        ],
        fee: 'CLP $10; CDL new and renewal $55; endorsements $10 each',
        practical: 'The three-part skills test follows the federal format; the CLP is valid one year and cannot be extended beyond one year from original issuance.',
        languages: ['English'],
        sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat, with at least one year of driving experience', education: 'Valid Delaware driver license', other: 'DOT medical certification and self-certification on file.' },
      background: { method: 'TSA hazmat threat assessment (fingerprint-based) for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial Driver License permit', fee: '$10', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' },
        { item: 'Commercial Driver License (new and renewal, 8-year)', fee: '$55', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' },
        { item: 'CDL endorsement', fee: '$10', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' },
        { item: 'CDL restriction', fee: '$10', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' }
      ],
      application: {
        portal: 'Delaware DMV (MyDMV online services and facility walk-ins)',
        portalUrl: 'https://www.dmv.de.gov',
        steps: ['Pass the knowledge tests walk-in at any DMV facility', 'Receive the CLP and hold it 14 full days', 'Complete ELDT if required', 'Schedule and pass the three-part skills test', 'Pay the $55 fee for the eight-year CDL'],
        sourceUrl: 'https://www.dmv.de.gov'
      },
      renewal: { cycle: '8 years ($55); a hazmat CDL is issued for 5 years at $30', medical: 'DOT medical certification on file', fee: '$55 (standard) / $30 (hazmat CDL)', sourceUrl: 'https://www.dmv.de.gov' },
      reciprocity: { rule: 'Out-of-state CDL holders transfer through the standard Delaware CDL process; endorsement and restriction changes are $10 each.', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$57,590', p25: '$46,850', p75: '$58,900', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=DE' },
      recentChanges: [{ year: 2025, change: 'Under HB 164, Delaware DMV fees rose on 10 October 2025: the CDL (new and renewal) to $55, the CLP to $10, and CDL endorsements and restrictions to $10 each.', sourceUrl: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/' }],
      stateFaqs: [
        { q: 'What does a Delaware CDL cost in 2026?', a: 'The CLP is $10 and the eight-year CDL $55, following the October 2025 fee increase under HB 164; endorsements and restrictions are $10 each.' },
        { q: 'Why is a Delaware hazmat CDL cheaper and shorter?', a: 'A hazmat CDL is issued for five years at $30 instead of eight years at $55, matching the five-year TSA threat-assessment cycle.' },
        { q: 'How long is the Delaware CLP valid?', a: 'One year from original issuance, with no extensions \u2014 you retake the knowledge tests if it expires before you earn the CDL.' },
        { q: 'What do Delaware truck drivers earn?', a: 'BLS OEWS reports a May 2025 Delaware median of $57,590 for Heavy and Tractor-Trailer Truck Drivers, just under the $58,640 national median.' }
      ],
      sources: [
        { label: 'Delaware News \u2014 DMV Fees Increase in October 2025 (HB 164)', url: 'https://news.delaware.gov/2025/09/30/dmv-fees-increase-in-october-2025/', checkedOn: '2026-10' },
        { label: 'DelDOT \u2014 Statewide DMV fee increase announcement', url: 'https://deldot.gov/About/news/index.shtml?dc=release&id=10712&type=News', checkedOn: '2026-10' },
        { label: 'Delaware DMV \u2014 Fees', url: 'https://dmv.de.gov/Common/DMVFees/index.shtml', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    FL: {
      agency: 'Florida Department of Highway Safety and Motor Vehicles (FLHSMV)',
      agencyUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-driver-license-cdl/',
      exam: {
        vendor: 'FLHSMV for knowledge tests; skills tests through FLHSMV-contracted third-party examiners statewide',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests (Air Brakes, Combination, Tanker, Doubles/Triples, Hazmat, Passenger, School Bus)', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip inspection, basic vehicle control, on-road driving', questions: 'Hands-on', time: 'Scheduled with the contracted examiner', pass: 'Pass/fail' }
        ],
        fee: 'CDL $75 initial and renewal; endorsements $7 each; written retest $10; driving retest $20',
        practical: 'Florida contracts with private testing sites for the CDL skills exam; third-party examiners set their own prices, which vary by class and location.',
        languages: ['English', 'Spanish'],
        sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 to apply; under-21 CDLs are restricted to Florida-only driving', education: 'Valid Florida driver license', other: 'DOT medical certificate for non-excepted interstate drivers; an out-of-state CDL expired one year or more requires additional Florida testing.' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL (initial or renewal)', fee: '$75', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' },
        { item: 'Service fee at tax collector offices', fee: '$6.25', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' },
        { item: 'Endorsements', fee: '$7 each', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' },
        { item: 'Written re-exam', fee: '$10', sourceUrl: 'https://www.enrole.com/ptc/resources/f22daccd-e1ac-417a-871b-4b3619aa8347.pdf' },
        { item: 'Driving re-exam', fee: '$20', sourceUrl: 'https://www.enrole.com/ptc/resources/f22daccd-e1ac-417a-871b-4b3619aa8347.pdf' },
        { item: 'School-bus-employed CDL (initial or renewal)', fee: '$48', sourceUrl: 'https://www.enrole.com/ptc/resources/f22daccd-e1ac-417a-871b-4b3619aa8347.pdf' },
        { item: 'Replacement CDL', fee: '$25', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' }
      ],
      application: {
        portal: 'FLHSMV online application plus county tax collector or FLHSMV service centers',
        portalUrl: 'https://www.flhsmv.gov',
        steps: ['Complete the online driver license application before the office visit', 'Pass the General Knowledge and endorsement exams at a service center', 'Receive the CLP (no separate CLP fee; the $75 transaction covers it) and hold it at least 14 days', 'Complete ELDT if required', 'Schedule and pass the skills test with a FLHSMV-contracted third-party examiner'],
        sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469'
      },
      renewal: { cycle: '4 years (standard credential cycle)', medical: 'Current DOT medical certificate in the state database; non-current medicals downgrade the CLP/CDL', fee: '$75', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' },
      reciprocity: { rule: 'Out-of-state CDL holders apply as original Florida applicants; an out-of-state CDL expired one year or more requires additional testing to restore commercial privileges.', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$50,640', p25: '$37,700', p75: '$62,380', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=FL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469' }],
      stateFaqs: [
        { q: 'What does a Florida CDL cost?', a: 'The license is $75 for initial issuance and renewal, endorsements are $7 each, and a $6.25 service fee applies at county tax collector offices. A written retest is $10 and a driving retest $20.' },
        { q: 'Who gives the Florida CDL skills test?', a: 'FLHSMV-contracted third-party examiners deliver the skills test statewide, and they set their own prices \u2014 many training schools bundle the test into tuition.' },
        { q: 'Is there a cheaper Florida CDL for school employees?', a: 'Yes \u2014 applicants who received school bus training and work for (or are applying to) a public or non-public school system pay $48 instead of $75.' },
        { q: 'What do Florida truck drivers earn?', a: 'BLS OEWS reports a May 2025 Florida median of $50,640 for Heavy and Tractor-Trailer Truck Drivers, below the $58,640 national median.' }
      ],
      sources: [
        { label: 'Manatee County Tax Collector (FLHSMV agent) \u2014 CDL/CLP fees', url: 'https://helpcenter.taxcollector.com/hc/en-us/articles/26710576707469', checkedOn: '2026-10' },
        { label: 'FLHSMV Commercial Driver License Manual (fee schedule)', url: 'https://www.enrole.com/ptc/resources/f22daccd-e1ac-417a-871b-4b3619aa8347.pdf', checkedOn: '2026-10' },
        { label: 'FLHSMV \u2014 Commercial Driver License', url: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-driver-license-cdl/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    GA: {
      agency: 'Georgia Department of Driver Services (DDS)',
      agencyUrl: 'https://dds.georgia.gov',
      exam: {
        vendor: 'Georgia DDS (state examiners)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Road Skills Test: vehicle inspection, basic skills, on-the-road driving', questions: 'Hands-on', time: 'Online appointment; $50 per attempt', pass: 'Pass/fail' }
        ],
        fee: '$50 road skills test per attempt; $35 application; $10 permit; $32 license',
        practical: 'The skills test covers pre-trip inspection, basic vehicle control and on-road driving in the class of vehicle sought; the $50 fee applies to every attempt and the license fee paid at scheduling is retained if you no-show.',
        languages: ['English'],
        sourceUrl: 'http://dds.georgia.gov/cdl-licensing-information-faqs'
      },
      education: { hours: 'ELDT must be completed before being allowed to take the CDL skills tests (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'Valid Georgia driver license', other: 'DOT medical certificate; since mid-2025 DDS accepts medical certificates only electronically from the certified examiner via the National Registry \u2014 no paper certificates.' },
      background: { method: 'TSA hazmat threat assessment (application, fingerprinting, FBI check) before the hazmat knowledge test; results reach DDS directly and can take 60\u201390 days', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL application', fee: '$35', sourceUrl: 'https://legalclarity.org/how-long-does-it-take-to-get-a-cdl-in-georgia-full-timeline' },
        { item: 'Commercial learner\u2019s permit', fee: '$10', sourceUrl: 'https://legalclarity.org/how-long-does-it-take-to-get-a-cdl-in-georgia-full-timeline' },
        { item: 'Road Skills Test (per attempt)', fee: '$50', sourceUrl: 'http://dds.georgia.gov/cdl-licensing-information-faqs' },
        { item: 'CDL license (8-year)', fee: '$32', sourceUrl: 'https://legalclarity.org/how-long-does-it-take-to-get-a-cdl-in-georgia-full-timeline' },
        { item: 'Knowledge retest', fee: '$10', sourceUrl: 'https://legalclarity.org/how-long-does-it-take-to-get-a-cdl-in-georgia-full-timeline' },
        { item: 'Endorsement added after initial issuance', fee: '$5 each', sourceUrl: 'https://legalclarity.org/how-old-do-you-have-to-be-to-get-a-cdl-in-georgia' }
      ],
      application: {
        portal: 'Georgia DDS Online Services',
        portalUrl: 'https://dds.georgia.gov',
        steps: ['Pay the $35 application and $10 permit fees and pass the knowledge tests at a Customer Service Center', 'Hold the 365-day CLP at least 14 days and complete ELDT', 'Schedule the road skills test online and pay the $50 fee', 'Pass vehicle inspection, basic skills and on-road driving', 'Pay the $32 fee and receive a temporary license the same day'],
        sourceUrl: 'https://dds.georgia.gov/book/export/html/34121'
      },
      renewal: { cycle: '8 years', medical: 'Medical certificates accepted only electronically via the FMCSA National Registry; expired medicals or variances can require retesting', fee: '$32', sourceUrl: 'https://legalclarity.org/how-old-do-you-have-to-be-to-get-a-cdl-in-georgia' },
      reciprocity: { rule: 'Active-duty military, Guard and Reserve members (or within one year of separation) can apply for the Military Skills Test Waiver with the DDS application; other out-of-state CDL holders transfer through the standard Georgia process.', sourceUrl: 'https://dds.georgia.gov/book/export/html/34121' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$57,050', p25: '$38,150', p75: '$68,780', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=GA' },
      recentChanges: [{ year: 2025, change: 'Georgia DDS stopped accepting paper medical certificates \u2014 certified examiners now submit results electronically through the FMCSA National Registry.', sourceUrl: 'https://legalclarity.org/how-old-do-you-have-to-be-to-get-a-cdl-in-georgia' }],
      stateFaqs: [
        { q: 'How much is the Georgia road skills test?', a: 'Fifty dollars per attempt under O.C.G.A. 40-5-25 and DDS Rule 1-1-.10(7) \u2014 the fee is charged each time you take the test, and the license fee paid at scheduling is kept if you miss the appointment.' },
        { q: 'What happens after I fail a Georgia CDL knowledge test?', a: 'You must retake and pass the failed test before skills testing; the retest waiting period is two days for a first failure and for each failure after that.' },
        { q: 'Does Georgia offer a military skills-test waiver?', a: 'Yes \u2014 current-duty military, Guard and Reserve members, and personnel out of the military less than one year can apply for the Military Skills Test Waiver through the DDS website.' },
        { q: 'What do Georgia truck drivers earn?', a: 'BLS OEWS reports a May 2025 Georgia median of $57,050 for Heavy and Tractor-Trailer Truck Drivers, slightly below the $58,640 national median.' }
      ],
      sources: [
        { label: 'Georgia DDS \u2014 CDL Licensing Information FAQs', url: 'http://dds.georgia.gov/cdl-licensing-information-faqs', checkedOn: '2026-10' },
        { label: 'Georgia DDS \u2014 Traditional CDL Testing Study Guide', url: 'https://dds.georgia.gov/book/export/html/34121', checkedOn: '2026-10' },
        { label: 'Georgia DDS \u2014 Drivers\u2019 Manual (road test and fees)', url: 'https://www.dds.georgia.gov/drivers-manual', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    HI: {
      agency: 'Hawaii county driver licensing offices (state HDOT Motor Vehicle Safety Office sets procedure)',
      agencyUrl: 'https://hidot.hawaii.gov/highways/mvso/',
      exam: {
        vendor: 'County CDL offices (state examiners only \u2014 no third-party CDL testing in Hawaii)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Written tests administered 8:00 a.m.\u20132:30 p.m. weekdays', pass: '80%' },
          { name: 'Special knowledge tests (Air Brakes, Combination, Doubles/Triples, Tank, Hazmat, Passenger, School Bus)', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip, basic skills, road test', questions: 'Hands-on', time: 'In-person appointment; all three parts at the same appointment', pass: 'Pass/fail' }
        ],
        fee: 'CLP application $30; General Knowledge $15; each special knowledge test $5; skills test $50; CDL $5 per year or fraction',
        practical: 'The $50 skills fee covers the pre-trip inspection, basic skills and road test for the scheduled date; it is non-refundable, missed appointments forfeit the fee, and no rescheduling is allowed once booked. Failing any test requires at least a one-week wait before retesting.',
        languages: ['English'],
        sourceUrl: 'https://www.honolulu.gov/csd/commercial-driver-licensing-office/'
      },
      education: { hours: 'FMCSA ELDT required before the skills test (Class A/B and upgrades) and before the P/S skills test or H knowledge test; not retroactive to licenses issued before 7 February 2022', sourceUrl: 'https://www.honolulu.gov/csd/commercial-driver-licensing-office/' },
      eligibility: { minAge: '18 for a CDL permit; 21 for the CDL license', education: 'Valid basic Hawaii driver license', other: 'DOT Certificate (Form MCSA-5876); vision 20/40 minimum in both eyes; certified U.S. birth certificate and original Social Security card (SSN documentation optional since 18 June 2021).' },
      background: { method: 'TSA hazmat threat assessment; proof of U.S. citizenship or lawful permanent residency required for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL permit application', fee: '$30', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'General Knowledge test', fee: '$15', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'Special knowledge test (each endorsement)', fee: '$5', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'Skills test (all three parts, one date)', fee: '$50 (non-refundable)', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'CDL new license or renewal', fee: '$5 per year or fraction ($40 for the standard 8-year card, ages 25\u201371)', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'CDL duplicate', fee: '$15', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
        { item: 'CDL reinstatement', fee: '$20', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' }
      ],
      application: {
        portal: 'County CDL offices (Oahu CDL Unit at Pearl City/Kapalama; Maui, Hawaii County, Kauai offices)',
        portalUrl: 'https://www.honolulu.gov/csd/commercial-driver-licensing-office/',
        steps: ['Complete the Hawaii CDL application (DOT 4-764) with photo, license, Social Security and medical documents', 'Pass vision and knowledge tests and receive the one-year instruction permit', 'Complete ELDT with a registered provider if required', 'Book the skills test in person no earlier than 14 days after permit issuance and pay the $50 fee', 'Pass pre-trip, basic skills and road at the same appointment, then pay the per-year license fee'],
        sourceUrl: 'https://hidot.hawaii.gov/highways/files/2017/10/mvso-Obtaining-a-CDL-10-2017.pdf'
      },
      renewal: { cycle: 'Priced per year \u2014 $40 for the standard 8-year renewal (ages 25\u201371), $20 for ages 21\u201324, $10 for age 72+', medical: 'DOT medical certificate (MCSA-5876) required', fee: '$5 per year or fraction', sourceUrl: 'https://www.honolulu.gov/csd?p=3555' },
      reciprocity: { rule: 'Hawaii has no third-party CDL testing and no reciprocal skills-test sharing; transferring drivers complete the county application, knowledge and skills testing locally.', sourceUrl: 'https://hidot.hawaii.gov/highways/files/2017/10/mvso-Obtaining-a-CDL-10-2017.pdf' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$59,820', p25: '$47,480', p75: '$64,910', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=HI' },
      recentChanges: [{ year: 2021, change: 'Since 18 June 2021, presenting Social Security Number documentation is optional for Hawaii CDL permit applicants (the SSN remains on file from the basic license).', sourceUrl: 'https://www.honolulu.gov/csd/commercial-driver-licensing-office/' }],
      localNuance: 'Driver licensing is county-administered: the City and County of Honolulu runs the Oahu CDL Unit (Pearl City office, appointments at 8 a.m., 10 a.m. and 1 p.m.), while Hawaii County, Maui and Kauai set identical fee schedules through their own offices. Skills-test appointments must be made in person and cannot be rescheduled after payment.',
      stateFaqs: [
        { q: 'How much does a Hawaii CDL cost?', a: 'Hawaii prices the license per year: $5 per year or fraction, so the standard 8-year card for drivers 25\u201371 is $40, plus $30 for the permit application, $15 for General Knowledge, $5 per endorsement test and the $50 skills test.' },
        { q: 'Can I reschedule my Hawaii skills test?', a: 'No \u2014 once the appointment is booked and the $50 fee paid, no rescheduling is allowed, and missing the appointment forfeits the fee.' },
        { q: 'Do any Hawaii testing offices use third-party testers?', a: 'No \u2014 Hawaii licenses through county CDL offices only, with state examiners administering every knowledge and skills test.' },
        { q: 'What do Hawaii truck drivers earn?', a: 'BLS OEWS reports a May 2025 Hawaii median of $59,820 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median.' }
      ],
      sources: [
        { label: 'City and County of Honolulu \u2014 Commercial Driver Licensing Office', url: 'https://www.honolulu.gov/csd/commercial-driver-licensing-office/', checkedOn: '2026-10' },
        { label: 'City and County of Honolulu \u2014 CSD fee table', url: 'https://www.honolulu.gov/csd?p=3555', checkedOn: '2026-10' },
        { label: 'Hawaii DOT \u2014 How to Apply for a CDL', url: 'https://hidot.hawaii.gov/highways/files/2017/10/mvso-Obtaining-a-CDL-10-2017.pdf', checkedOn: '2026-10' },
        { label: 'Hawaii County \u2014 Commercial Driver\u2019s License fees', url: 'http://www.hawaiicounty.gov/driver-s-licensing/commercial-driver-s-license', checkedOn: '2026-10' }
      ]
    },
    ID: {
      agency: 'Idaho Transportation Department \u2014 Division of Motor Vehicles (ITD)',
      agencyUrl: 'https://itd.idaho.gov/?p=2731',
      exam: {
        vendor: 'County DMV offices for knowledge tests; skills tests by private CDL Skills Test Examiners plus a county office fee',
        parts: [
          { name: 'General Knowledge', questions: '50 questions', time: 'Untimed', pass: '40 correct' },
          { name: 'Hazmat', questions: '30 questions', time: 'Untimed', pass: '24 correct' },
          { name: 'Air Brakes', questions: '25 questions', time: 'Untimed', pass: '20 correct' },
          { name: 'Combination Vehicles / Tank / Doubles-Triples / Passenger / School Bus', questions: '20 questions each', time: 'Untimed', pass: '16 correct each' },
          { name: 'Skills test: pre-trip, basic controls, road', questions: 'Hands-on', time: 'Scheduled with the examiner', pass: 'Pass/fail' }
        ],
        fee: 'Written tests $5 each; skills test $200 total ($10 to the county office plus up to $190 to the examiner)',
        practical: 'The skills test is delivered by state-certified private examiners; the $200 ceiling splits into a $10 county fee and up to $190 in examiner charges under Idaho Code 49-306(10), and retests cost the same as the original.',
        languages: ['English'],
        sourceUrl: 'https://itd.idaho.gov/?p=2731'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat (one-year licenses are issued at age 20 with an intrastate K restriction)', education: 'Idaho Class D license required for the CLP', other: 'Self-certification in one of four FMCSA categories \u2014 in person or online through the ITD self-certification portal; medical exams are accepted only when the provider submits them directly to FMCSA (electronic-only after 23 June 2025).' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'CDL, 1 year (age 20, K/intrastate restriction)', fee: '$15', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'CDL, 3 years (ages 18\u201321)', fee: '$30', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'CDL, 4 years (age 21+)', fee: '$40', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'CDL, 8 years (age 21+)', fee: '$60', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Seasonal CDL (6 months)', fee: '$44', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Knowledge written test or endorsement knowledge test', fee: '$5 each', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Skills test', fee: '$200 ($10 county + up to $190 examiner)', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Commercial learner\u2019s permit', fee: '$29', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'License upgrade', fee: '$30', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Duplicate license or permit', fee: '$20', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
        { item: 'Endorsement addition after issuance', fee: '$20', sourceUrl: 'https://itd.idaho.gov/?p=2731' }
      ],
      application: {
        portal: 'Idaho DMV (dmv.idaho.gov; self-certification at dmvapps.itd.idaho.gov/cdlselfcertification)',
        portalUrl: 'https://dmv.idaho.gov',
        steps: ['Complete CDL self-certification online or at a county office', 'Pay $5 per test and pass the knowledge exams at a county DMV', 'Buy the $29 CLP and hold it at least 14 days', 'Complete ELDT if required', 'Book a certified skills-test examiner, pay the $10 county fee plus the examiner charge, and pass all three portions'],
        sourceUrl: 'https://itd.idaho.gov/?p=2731'
      },
      renewal: { cycle: '1, 3, 4 or 8 years by age and choice', medical: 'Medical certificates accepted only electronically through FMCSA after 23 June 2025', fee: '$15\u2013$60 by term', sourceUrl: 'https://itd.idaho.gov/?p=2731' },
      reciprocity: { rule: 'Out-of-state CDL holders transfer through the county DMV process with Idaho self-certification; the seasonal restricted CDL ($44, 180 days) covers farm-related service industry drivers without full testing.', sourceUrl: 'http://www.itd.idaho.gov/DMV/DriverServices/documents/cdl_manual.pdf' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$58,770', p25: '$43,360', p75: '$64,260', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=ID' },
      recentChanges: [{ year: 2025, change: 'From 23 June 2025, Idaho accepts medical certificates only when the medical provider submits them electronically to FMCSA \u2014 drivers can no longer turn in the forms themselves.', sourceUrl: 'https://itd.idaho.gov/?p=2731' }],
      stateFaqs: [
        { q: 'How much is the Idaho CDL skills test?', a: 'Two hundred dollars at most: $10 goes to the county driver license office and up to $190 to the private skills-test examiner under Idaho Code 49-306(10); many examiners charge less than the ceiling.' },
        { q: 'How many questions are on the Idaho CDL knowledge tests?', a: 'General Knowledge has 50 questions (40 correct to pass), Hazmat 30 (24), Air Brakes 25 (20), and the Combination, Tank, Doubles/Triples, Passenger and School Bus tests 20 questions each (16 to pass).' },
        { q: 'What is the Idaho seasonal CDL?', a: 'A 180-day restricted license for farm-related service industry driving, priced at $44 and issued without the full knowledge and skills testing sequence.' },
        { q: 'What do Idaho truck drivers earn?', a: 'BLS OEWS reports a May 2025 Idaho median of $58,770 for Heavy and Tractor-Trailer Truck Drivers, essentially level with the $58,640 national median.' }
      ],
      sources: [
        { label: 'Idaho ITD \u2014 Commercial Driver\u2019s License (fees)', url: 'https://itd.idaho.gov/?p=2731', checkedOn: '2026-10' },
        { label: 'Idaho CDL Manual (test counts and fee schedule)', url: 'http://www.itd.idaho.gov/DMV/DriverServices/documents/cdl_manual.pdf', checkedOn: '2026-10' },
        { label: 'Idaho ITD \u2014 CDL Types and Fee Schedule brochure', url: 'https://itd.idaho.gov/wp-content/uploads/2021/09/DMV_CDL_Types.pdf', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    IL: {
      agency: 'Illinois Secretary of State \u2014 Driver Services',
      agencyUrl: 'https://www.ilsos.gov/departments/drivers/',
      exam: {
        vendor: 'Illinois Secretary of State (state examiners only \u2014 no third-party CDL skills testing)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test', questions: 'Pre-trip, basic controls, road', time: 'Scheduled with the Secretary of State', pass: 'Pass/fail' }
        ],
        fee: 'CDL $60 (renewal or transfer-in); CLP $50; upgrade or correction $5',
        practical: 'All skills testing runs through Secretary of State facilities \u2014 Illinois does not certify third-party CDL skills testers.',
        languages: ['English'],
        sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'Valid Illinois driver license', other: 'DOT medical certification and self-certification on file with the Secretary of State.' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial Driver\u2019s License (renewal or transfer-in)', fee: '$60 ($50 at ages 69+)', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
        { item: 'Commercial Learner\u2019s Permit (original or renewal)', fee: '$50', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
        { item: 'CDL upgrade or correction (classification, endorsement, restriction)', fee: '$5', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
        { item: 'CLP upgrade or correction', fee: '$5', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
        { item: 'CDL duplicate or corrected license', fee: '$5', sourceUrl: 'http://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=100-0590&GA=100' }
      ],
      application: {
        portal: 'Illinois Secretary of State (Driver Services facilities; many fees payable online)',
        portalUrl: 'https://www.ilsos.gov',
        steps: ['Pass the knowledge tests at a Driver Services facility and buy the $50 CLP', 'Hold the CLP at least 14 days and complete ELDT if required', 'Schedule the skills test with the Secretary of State', 'Pass the three-part skills test', 'Pay the $60 CDL fee at issuance'],
        sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html'
      },
      renewal: { cycle: '4 years (standard Illinois license cycle)', medical: 'DOT medical certification and self-certification on file', fee: '$60', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
      reciprocity: { rule: 'The $60 CDL fee applies to renewals and transfers in from another state alike; transferring drivers complete Secretary of State testing for any new class or endorsement.', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$60,320', p25: '$39,710', p75: '$75,600', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=IL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.ilsos.gov/departments/drivers/basicfees.html' }],
      stateFaqs: [
        { q: 'How much does an Illinois CDL cost?', a: 'The commercial learner\u2019s permit is $50 and the license itself $60 for renewal or transfer-in, with $5 charges for upgrades, corrections or duplicates; drivers 69 and older renew at $50.' },
        { q: 'Can I take the Illinois CDL skills test at a trucking school?', a: 'No \u2014 the Secretary of State administers all CDL skills testing in Illinois; there is no third-party tester program.' },
        { q: 'What is inside the Illinois $60 CDL fee?', a: 'Under 625 ILCS 5/6-118 it decomposes into $6 for the CDLIS/AAMVAnet/NMVTIS Trust Fund, $20 for the Motor Carrier Safety Inspection Fund, $10 for the driver license and $24 for the CDL.' },
        { q: 'What do Illinois truck drivers earn?', a: 'BLS OEWS reports a May 2025 Illinois median of $60,320 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median.' }
      ],
      sources: [
        { label: 'Illinois Secretary of State \u2014 Fees', url: 'https://www.ilsos.gov/departments/drivers/basicfees.html', checkedOn: '2026-10' },
        { label: 'Illinois Vehicle Code 625 ILCS 5/6-118 (CDL fee schedule)', url: 'http://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=100-0590&GA=100', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 53-3032', url: 'https://www.onetonline.org/link/localwages/53-3032.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      agency: 'Indiana Bureau of Motor Vehicles (BMV)',
      agencyUrl: 'https://www.in.gov/bmv/',
      exam: {
        vendor: 'Indiana BMV branches for knowledge tests; skills test at BMV-authorized third-party CDL skills test sites',
        parts: [
          { name: 'General Knowledge test', questions: '50 multiple-choice questions', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests (Air Brakes, Combination, Tanker, Doubles/Triples, Hazmat, Passenger, School Bus)', questions: 'Separate test per endorsement', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip inspection, basic control skills, road test', questions: 'Hands-on', time: 'Appointment booked at least two days in advance', pass: 'Pass/fail' }
        ],
        fee: 'CLP $17; CDL $35 (4-year); add or remove an endorsement $19; skills-test fee is set by the third-party site',
        practical: 'The three-part skills exam runs at authorized third-party sites; the skills test may be taken only once per business day, and the applicant pays the site\u2019s charge for every attempt.',
        languages: ['English'],
        sourceUrl: 'https://www.getcdllicense.com/indiana'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 to transport property intrastate; 21 for interstate and for a CLP intended for school bus operation', education: 'Valid Indiana driver license', other: 'Valid Medical Examiner\u2019s Certificate on file with the BMV; knowledge exam results and CLP each valid one year.' },
      background: { method: 'TSA fingerprint-based threat assessment at an approved enrollment center (not at BMV branches); approval valid five years and re-run at each renewal carrying the endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial learner\u2019s permit', fee: '$17', sourceUrl: 'https://www.in.gov/bmv/' },
        { item: 'Commercial driver\u2019s license (4-year, expires on birthday)', fee: '$35', sourceUrl: 'https://www.in.gov/dwd/files/industry-certifications/CDL-B-.pdf' },
        { item: 'Add or remove a CDL endorsement (H, N, P, S, T or X)', fee: '$19', sourceUrl: 'https://www.getcdllicense.com/indiana' },
        { item: 'CDL renewal', fee: '$35 (online up to 2 years early, in person up to 1 year early)', sourceUrl: 'https://www.in.gov/dwd/files/industry-certifications/CDL-B-.pdf' }
      ],
      application: {
        portal: 'Indiana BMV (in.gov/bmv; renewals online)',
        portalUrl: 'https://www.in.gov/bmv/',
        steps: ['Bring license, legal-presence proof, Social Security card, residency proof and the DOT medical certificate to a BMV branch', 'Pass the knowledge tests and buy the $17 CLP', 'Hold the CLP 14 days and complete ELDT if required', 'Book a third-party skills test site at least two days ahead and pass the three parts', 'Pay the $35 fee at a branch and receive the 4-year CDL'],
        sourceUrl: 'https://www.in.gov/bmv/'
      },
      renewal: { cycle: '4 years, expiring on the holder\u2019s birthday', medical: 'Updated Medical Examination Report and certificate must reach a BMV branch before renewal; a lapsed medical downgrades the CDL to non-commercial', fee: '$35', sourceUrl: 'https://www.in.gov/dwd/files/industry-certifications/CDL-B-.pdf' },
      reciprocity: { rule: 'Transferring an unexpired out-of-state CDL into Indiana requires no retest; drivers surrender the old license and meet REAL ID residency, identity and lawful-presence proof. Endorsements transfer except Hazmat, which always requires a new TSA threat assessment.', sourceUrl: 'https://cdlcoachup.com/cdl-by-state/indiana' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$60,290', p25: '$42,060', p75: '$72,260', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=IN' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.in.gov/bmv/' }],
      stateFaqs: [
        { q: 'How much does an Indiana CDL cost?', a: 'The CLP is $17, the four-year CDL $35, and adding or removing any endorsement $19. The skills-test fee itself is charged by the BMV-authorized third-party site you book with.' },
        { q: 'Where do I take the Indiana CDL skills test?', a: 'At a BMV-authorized third-party CDL skills test site \u2014 appointments must be booked at least two days in advance, and the test can only be attempted once per business day.' },
        { q: 'How long are Indiana knowledge test results valid?', a: 'One year from issuance \u2014 the same window applies to the CLP, so a lapsed permit means retaking the written tests.' },
        { q: 'What do Indiana truck drivers earn?', a: 'BLS OEWS reports a May 2025 Indiana median of $60,290 for Heavy and Tractor-Trailer Truck Drivers, above the $58,640 national median \u2014 Indiana sits in one of the country\u2019s busiest freight corridors.' }
      ],
      sources: [
        { label: 'Indiana BMV \u2014 Licenses, Permits and IDs (CDL)', url: 'https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-probationary-licenses/obtaining-a-commercial-drivers-license/', checkedOn: '2026-10' },
        { label: 'Indiana DWD \u2014 CDL-B industry certification sheet (fees and renewal)', url: 'https://www.in.gov/dwd/files/industry-certifications/CDL-B-.pdf', checkedOn: '2026-10' },
        { label: 'Indiana BMV \u2014 Fee Chart', url: 'https://www.in.gov/bmv/licenses-permits-ids/fee-chart/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    IA: {
      agency: 'Iowa Department of Transportation \u2014 Motor Vehicle Division (MVD)',
      agencyUrl: 'https://iowadot.gov/drivers-licenses-ids/commercial-drivers',
      exam: {
        vendor: 'Iowa DOT driver\u2019s license service centers, select county treasurer locations, and DOT-authorized third-party testers',
        parts: [
          { name: 'General Knowledge', questions: '50 questions', time: 'Untimed', pass: '40 correct (10 misses allowed)' },
          { name: 'Combination Vehicles (Class A)', questions: '20 questions', time: 'Untimed', pass: '16 correct' },
          { name: 'Air Brakes', questions: '25 questions', time: 'Untimed', pass: '20 correct' },
          { name: 'Hazmat', questions: '30 questions', time: 'Untimed', pass: '24 correct' },
          { name: 'Tank, Passenger, School Bus, Doubles/Triples', questions: '20 questions each', time: 'Untimed', pass: '16 correct each' },
          { name: 'Skills test: pre-trip inspection, basic control skills, on-road driving', questions: 'Hands-on', time: 'Scheduled appointment; air-brake check demonstrated first', pass: 'Pass/fail' }
        ],
        fee: 'Pre-trip scheduling fee $25 (DOT) or $25 per segment at county treasurers; CDL $8 per year of term',
        practical: 'Applicants supply a registered, roadworthy representative vehicle. If the air-brake check or pre-trip inspection is failed, the whole test must be rebooked \u2014 Iowa DOT notes rebooking can run two or three weeks out.',
        languages: ['English'],
        sourceUrl: 'https://rules.iowa.gov/Notice/Details/6065C'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school; Iowa DOT confirms the ELDT record before administering the skills test', sourceUrl: 'https://iowadot.gov/drivers-licenses-ids/commercial-drivers/get-cdl/commercial-learner-permits-clp' },
      eligibility: { minAge: '18 for a CDL; 21 for interstate operation', education: 'Existing Iowa license (the CLP is added to it)', other: 'Proof of citizenship or lawful presence and Iowa residency unless already REAL ID marked; self-certification of commercial driving type.' },
      background: { method: 'TSA fingerprint-based background check through the HazPrint program; the hazmat knowledge test must be passed at every renewal', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial learner\u2019s permit', fee: '$12 (one year, no renewal)', sourceUrl: 'https://iowadot.gov/drivers-licenses-ids/commercial-drivers/get-cdl/commercial-learner-permits-clp' },
        { item: 'CDL', fee: '$8 per year of term (standard 8-year term, $64)', sourceUrl: 'https://www.getcdllicense.com/iowa' },
        { item: 'Skills test at a DOT service center (pre-trip scheduling fee)', fee: '$25', sourceUrl: 'https://rules.iowa.gov/Notice/Details/6065C' },
        { item: 'Skills test at a county treasurer (pre-trip + basic control + on-road)', fee: '$25 per segment', sourceUrl: 'https://rules.iowa.gov/Notice/Details/6065C' },
        { item: 'Endorsements T, N, H', fee: '$5 each', sourceUrl: 'https://www.getcdllicense.com/iowa' },
        { item: 'Endorsements P, S', fee: '$10 each', sourceUrl: 'https://www.getcdllicense.com/iowa' },
        { item: 'Endorsement added outside renewal (card reissue)', fee: '$10', sourceUrl: 'https://www.getcdllicense.com/iowa' },
        { item: 'Restricted farm-related CDL', fee: '$8 per year (valid up to 210 days per calendar year)', sourceUrl: 'https://www.getcdllicense.com/iowa' }
      ],
      application: {
        portal: 'Iowa DOT MVD (appointment scheduling online)',
        portalUrl: 'https://iowadot.gov/mvd/drivers-license',
        steps: ['Gather citizenship, residency and Social Security documents and self-certify', 'Book a knowledge-test appointment and pass the required exams', 'Buy the $12 CLP and hold it at least 14 days', 'Complete ELDT if required \u2014 Iowa verifies the record before testing', 'Schedule the skills test with the DOT, a county treasurer or an authorized third party and pass all three phases'],
        sourceUrl: 'https://iowadot.gov/drivers-licenses-ids/commercial-drivers/get-cdl/commercial-learner-permits-clp'
      },
      renewal: { cycle: '8 years (2-year card at 78 or older)', medical: 'Current medical certificate for non-excepted categories', fee: '$8 per year of term', sourceUrl: 'https://www.getcdllicense.com/iowa' },
      reciprocity: { rule: 'Third-party examiners must hold a $50,000 surety bond, provide a compliant basic-controls site and road route, and pass the AAMVA Certified Commercial Examiner course; skills-test fees follow the schedule adopted under 2021 Iowa Acts, House File 828.', sourceUrl: 'https://rules.iowa.gov/Notice/Details/6065C' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$58,070', p25: '$42,390', p75: '$64,190', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=IA' },
      recentChanges: [{ year: 2021, change: 'House File 828 (2021) authorized skills-test fees: $25 to schedule the pre-trip inspection segment with the DOT, and $25 per test segment at county treasurer locations, with government-agency employees and volunteers exempted.', sourceUrl: 'https://rules.iowa.gov/Notice/Details/6065C' }],
      stateFaqs: [
        { q: 'How much does an Iowa CDL cost?', a: 'Iowa charges $8 per year of the license term \u2014 normally $64 for the standard 8-year card \u2014 plus a $12 CLP and the $25-per-segment skills-test fees.' },
        { q: 'What if I fail the pre-trip inspection in Iowa?', a: 'You must rebook the whole test; Iowa DOT warns appointments can be two or three weeks out, and the fees are non-refundable.' },
        { q: 'Does Iowa have a restricted farm CDL?', a: 'Yes \u2014 a farm-related service industry CDL costs $8 per year, requires no CDL knowledge or skills test, and is valid up to 210 days per calendar year within 150 miles of the employer\u2019s place of business.' },
        { q: 'What do Iowa truck drivers earn?', a: 'BLS OEWS reports a May 2025 Iowa median of $58,070 for Heavy and Tractor-Trailer Truck Drivers, essentially level with the $58,640 national median.' }
      ],
      sources: [
        { label: 'Iowa DOT \u2014 Commercial Learner Permits (CLP)', url: 'https://iowadot.gov/drivers-licenses-ids/commercial-drivers/get-cdl/commercial-learner-permits-clp', checkedOn: '2026-10' },
        { label: 'Iowa DOT rulemaking ARC 6065C (skills-test fees, HF 828)', url: 'https://rules.iowa.gov/Notice/Details/6065C', checkedOn: '2026-10' },
        { label: 'Iowa DOT \u2014 CDL Manual', url: 'https://iowadot.gov/mvd/drivers-license/cdl-manual.pdf', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    KS: {
      agency: 'Kansas Department of Revenue \u2014 Division of Vehicles',
      agencyUrl: 'https://www.ksrevenue.gov/dovindex.html',
      exam: {
        vendor: 'Kansas Division of Vehicles for knowledge tests; skills tests by appointment at state offices or state-authorized third parties including community and technical colleges',
        parts: [
          { name: 'General Knowledge test', questions: '50 questions', time: 'Untimed', pass: '80%' },
          { name: 'Passenger (P) / School Bus (S) endorsement tests', questions: '20 questions each', time: 'Untimed', pass: '80%' },
          { name: 'Air Brakes test', questions: '25 questions', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip, basic controls, road', questions: 'Hands-on', time: 'Appointment only; no online scheduling at state offices', pass: 'Pass/fail' }
        ],
        fee: 'New CDL $41 ($18 issuance + $15 test + $8 photo); skills exam $15; skills retest $10; knowledge retest within 6 months $1.50',
        practical: 'The $15 skills-exam fee buys one attempt; retests are $10 and a knowledge retest within six months costs $1.50. Kansas law directs the Division to authorize any community or technical college that requests it to administer skills tests.',
        languages: ['English'],
        sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test (first Class A/B, B-to-A upgrade, or first P/S/H endorsement); Kansas adds a state mandate for Attorney General-approved human trafficking identification training before issuance or renewal (K.S.A. 8-2,157)', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate; Kansas also issues a farm custom harvesting CDL from age 16 (Class B/C, K.S.A. 8-2,147) and a seasonal CDL from 18 (K.S.A. 8-2,146)', education: 'Valid driver license', other: 'Only the P, S and N endorsements may appear on a Kansas CLP; P or S permits carry a no-passengers restriction and N permits an empty-tank restriction.' },
      background: { method: 'TSA hazmat threat assessment for the H endorsement', fee: '$86.50', sourceUrl: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/programs/hme' },
      fees: [
        { item: 'Commercial learner\u2019s permit (regular CDL permit)', fee: '$13 ($5 issuance + $8 photo)', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'New CDL with testing (age 21+)', fee: '$41 ($18 issuance + $15 test + $8 photo)', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'CDL issuance under 21', fee: '$20 + test and photo fees', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'CDL renewal (any class)', fee: '$26 ($18 issuance + $8 photo)', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'CDL skills exam', fee: '$15', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'CDL skills retest', fee: '$10', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'Knowledge retest within 6 months', fee: '$1.50', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
        { item: 'Endorsement (each, new issuance or renewal)', fee: '$10', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' }
      ],
      application: {
        portal: 'Kansas iKAN / Division of Vehicles driver license stations',
        portalUrl: 'https://www.ksrevenue.gov/dovindex.html',
        steps: ['Study the Kansas CDL Manual and pass the knowledge tests (80% each)', 'Buy the $13 CLP at a CDL licensing station and hold it at least 14 days', 'Complete ELDT and the state human-trafficking training requirement', 'Book the $15 skills exam by appointment and pass all three portions', 'Pay the issuance, test and photo fees at issuance'],
        sourceUrl: 'https://www.ksrevenue.gov/dovindex.html'
      },
      renewal: { cycle: '5 years, expiring on the licensee\u2019s birthday', medical: 'Current DOT medical certificate for non-excepted categories; human trafficking re-training required at renewal', fee: '$26', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' },
      reciprocity: { rule: 'Kansas authorizes employers, private driver-training facilities, other state agencies and local governments to administer skills tests under 49 CFR 383.75 agreements, and is directed by statute to authorize any requesting community or technical college; a farm custom harvesting CDL is available from age 16.', sourceUrl: 'https://www.getcdllicense.com/kansas' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$58,920', p25: '$43,760', p75: '$71,080', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=KS' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf' }],
      stateFaqs: [
        { q: 'How is the Kansas CDL fee structured?', a: 'As an itemized stack: $18 issuance + $15 test fee + $8 photo for a $41 total on a new license, a $13 CLP ($5 + $8 photo), a $26 renewal, and $10 per endorsement.' },
        { q: 'How much is a Kansas skills test and retest?', a: 'The skills exam is $15 for one attempt, a retest is $10, and a knowledge retest within six months is $1.50.' },
        { q: 'What extra training does Kansas require beyond ELDT?', a: 'Kansas law (K.S.A. 8-2,157) requires Attorney General-approved human trafficking identification training before a CDL is issued or renewed \u2014 on top of the federal ELDT curriculum.' },
        { q: 'What do Kansas truck drivers earn?', a: 'BLS OEWS reports a May 2025 Kansas median of $58,920 for Heavy and Tractor-Trailer Truck Drivers, slightly above the $58,640 national median.' }
      ],
      sources: [
        { label: 'Kansas Division of Vehicles \u2014 Credential Fee Chart', url: 'https://www.ksrevenue.gov/pdf/dmvlicfees.pdf', checkedOn: '2026-10' },
        { label: 'Kansas Department of Revenue \u2014 Driver Licensing', url: 'https://www.ksrevenue.gov/dovindex.html', checkedOn: '2026-10' },
        { label: 'Kansas CDL Manual (ksrevenue.gov)', url: 'https://www.ksrevenue.gov/pdf/cdlmanual.pdf', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    },
    KY: {
      agency: 'Kentucky Transportation Cabinet \u2014 Division of Driver Licensing (testing by Kentucky State Police)',
      agencyUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true',
      exam: {
        vendor: 'Kentucky State Police Driver Testing (state examiners only \u2014 no third-party CDL skills testing)',
        parts: [
          { name: 'General Knowledge test', questions: 'Federal-standard exam', time: 'Untimed', pass: '80%' },
          { name: 'Endorsement tests', questions: 'Separate test per endorsement; $5 each', time: 'Untimed', pass: '80%' },
          { name: 'Skills test: pre-trip, basic controls, road', questions: 'Hands-on', time: 'Appointment through KSP', pass: 'Pass/fail' }
        ],
        fee: 'Skills test $50 (or $150 depending on how long you have held your Kentucky operator license); retests $50 each; NCIC check $3 at renewal',
        practical: 'The skills-test fee buys one attempt; every further attempt costs another $50 under KRS 281A.160(6)(e). Failing to cancel an appointment at least 48 hours ahead, arriving without documents, or bringing a non-representative vehicle counts as a failed attempt.',
        languages: ['English'],
        sourceUrl: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2025/06/2025-CDL-Manual-6-4-2025.pdf'
      },
      education: { hours: 'ELDT theory and behind-the-wheel from an FMCSA Training Provider Registry school before the skills test; hazmat-specific ELDT must be completed before taking the Hazmat written test', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
      eligibility: { minAge: '18 intrastate / 21 interstate and hazmat', education: 'Valid Kentucky operator license', other: 'DOT medical certificate uploaded to the FMCSA National Registry; self-certification online through the myDrive account or in person; NCIC criminal-history check required by KRS 281A.300.' },
      background: { method: 'Kentucky State Police fingerprinting and FBI/TSA background review for the H endorsement; TSA security threat assessment renewed every 5 years with a state notification letter 60 days ahead; a TWIC card can substitute as threat-assessment proof', fee: '$138.25 (fingerprint-based check, payable to the Kentucky State Treasurer)', sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true' },
      fees: [
        { item: 'Skills test (one attempt)', fee: '$50, or $150 depending on tenure of the Kentucky operator license', sourceUrl: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2018/12/2019CDLDriverManual.pdf' },
        { item: 'Skills retest (each attempt)', fee: '$50', sourceUrl: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2025/06/2025-CDL-Manual-6-4-2025.pdf' },
        { item: 'Hazmat fingerprint background check', fee: '$138.25', sourceUrl: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2025/06/2025-CDL-Manual-6-4-2025.pdf' },
        { item: 'Hazmat knowledge test', fee: '$5', sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true' },
        { item: 'NCIC check at renewal', fee: '$3', sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true' },
        { item: 'CDL renewal', fee: 'Ranges from $18.75 to $50 by term', sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true' }
      ],
      application: {
        portal: 'Kentucky myDrive portal and Driver Licensing Regional offices',
        portalUrl: 'https://drive.ky.gov',
        steps: ['Submit application, self-certification and medical certificate through the CDL portal (processing typically 7\u201310 business days)', 'Pay the application fee and pass KSP knowledge testing for the CLP', 'Hold the CLP 14 days and complete ELDT if required', 'Schedule the KSP skills test, pay the fee, and pass the three portions', 'Complete self-certification and the $3 NCIC check, pay the renewal fee, and receive a temporary paper CDL until the card arrives'],
        sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true'
      },
      renewal: { cycle: 'Follows the Kentucky license cycle; hazmat endorsement holders retake the written hazmat and vision tests at renewal unless the last test was under two years ago', medical: 'Medical Examiner\u2019s Certificate uploaded to the FMCSA National Registry', fee: '$18.75\u2013$50 by term', sourceUrl: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true' },
      reciprocity: { rule: 'Transferring drivers with a hazmat endorsement must take the Kentucky hazmat knowledge and vision tests ($5) and complete the state background process; other transfers follow the standard KSP testing path.', sourceUrl: 'https://test.wp.kentuckystatepolice.ky.gov/driver-testing/' },
      wages: { soc: '53-3032', socName: 'Heavy and Tractor-Trailer Truck Drivers', median: '$56,340', p25: '$38,670', p75: '$70,020', national: '$58,640', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/53-3032.00?st=KY' },
      recentChanges: [{ year: 2025, change: 'The 2025 Kentucky CDL Manual updates the hazmat fingerprint payment to $138.25 (online card payment with processing fees or certified check/cashier\u2019s check/money order), up from the $115 shown in earlier manuals.', sourceUrl: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2025/06/2025-CDL-Manual-6-4-2025.pdf' }],
      stateFaqs: [
        { q: 'How much is the Kentucky CDL skills test?', a: 'Fifty dollars for one attempt \u2014 or $150 depending on how long you have held your Kentucky operator license \u2014 and every retest costs another $50 under KRS 281A.160(6)(e).' },
        { q: 'What does the Kentucky hazmat background check cost?', a: '$138.25, paid to the Kentucky State Treasurer by certified check, cashier\u2019s check or money order, or online by card through the KSP driver-testing site; the hazmat knowledge test itself is $5.' },
        { q: 'Who administers Kentucky CDL testing?', a: 'The Kentucky State Police runs all CDL testing \u2014 Kentucky has no third-party skills-test program \u2014 with appointments through the KSP Driver Testing Branch.' },
        { q: 'What do Kentucky truck drivers earn?', a: 'BLS OEWS reports a May 2025 Kentucky median of $56,340 for Heavy and Tractor-Trailer Truck Drivers, slightly below the $58,640 national median.' }
      ],
      sources: [
        { label: 'Kentucky Transportation Cabinet \u2014 Commercial Driver\u2019s License', url: 'https://drive.ky.gov/Drivers/Pages/CDL.aspx?app=true', checkedOn: '2026-10' },
        { label: 'Kentucky State Police \u2014 2025 CDL Manual', url: 'https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2025/06/2025-CDL-Manual-6-4-2025.pdf', checkedOn: '2026-10' },
        { label: 'Kentucky State Police \u2014 Driver Testing FAQs', url: 'https://test.wp.kentuckystatepolice.ky.gov/driver-testing/', checkedOn: '2026-10' },
        { label: 'FMCSA \u2014 Entry-Level Driver Training', url: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', checkedOn: '2026-10' }
      ]
    }
  }
};
