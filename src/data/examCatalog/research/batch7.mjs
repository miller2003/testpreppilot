// batch7.mjs — State-level license/exam fact-check dossiers (research mode).
// Templates: police-officer, firefighter, security-guard, private-investigator, concealed-carry.
// No external imports. Only `export default [...]` is allowed.
// NOTE: Per-state agencyUrls and fees are research-backed but should be re-verified with the
// named agency before publishing; where a precise fee is not confirmed it is marked "Verify".

export default [
  /* ============================================================
     1) POLICE OFFICER — all 51 jurisdictions (every state has a
     POST council or equivalent that certifies peace officers and
     administers a state-level certification exam).
     ============================================================ */
  {
    key: 'police-officer',
    name: 'Police Officer Certification',
    category: 'Law Enforcement',
    group: 'State Certification',
    type: 'certification',
    blurb: 'Sworn law-enforcement officer credential issued after a state-certified police academy and a state-administered certification exam.',
    overview: "In the United States, becoming a sworn peace officer requires completing a state-certified police academy and passing a state-administered certification exam, governed by each state's Peace Officer Standards and Training (POST) council or equivalent body. Every state and the District of Columbia operates such an agency, but academy length, exam format, and pass standards vary widely. Some states use a single statewide written exam (e.g., Florida's State Officer Certification Exam, Texas' TCOLE exam, California's PELLETB reading/writing test), while others certify through academy performance plus a civil-service or agency entrance exam. Most recruits are sponsored by an employing agency, which covers academy tuition; self-sponsored pathways exist in some states. After certification, newly sworn officers complete field training (FTO) before independent duty.",
    eligibility: "Typically age 21 (some states 18–20 with military credit), U.S. citizen or lawful permanent resident, high-school diploma or GED (some states prefer or require an associate degree or military service), valid driver license, and a clean criminal record (no felonies; many states disqualify certain misdemeanors). Must pass medical, psychological, and background investigations plus a physical fitness test.",
    exam: {
      admin: 'State POST council or state law-enforcement training board',
      questions: 'Varies by state (e.g., FL SOCE 200 items; TX TCOLE 250 items; CA PELLETB is a reading/writing battery with no fixed item count)',
      time: 'Varies (TX TCOLE 180 minutes; others 2–4 hours)',
      pass: 'Varies (FL 80%; TX 70%; CA PELLETB often ~70% local cutoff)',
      fee: 'Usually included in academy cost; standalone retake fees vary by state',
      format: 'Computer-based or paper written exam; some states add oral board and physical agility components'
    },
    education: {
      hours: 'Academy 600–900+ hours (FL ~770 training hrs; TX BPOC 736 hrs; others 12–26 weeks)',
      note: 'State-approved police academy; employer-sponsored in most states. Some states require college credit for lateral/supervisory roles.'
    },
    prerequisites: 'Minimum age (usually 21), citizenship/LPR status, HS diploma/GED, valid driver license, no disqualifying criminal history, pass background + medical + psychological + fitness.',
    costBreakdown: {
      items: [
        { item: 'Academy tuition (employer-sponsored, if hired)', fee: '$0 (sponsored)' },
        { item: 'Self-sponsored academy', fee: '$3,000–$8,000 (varies by state)' },
        { item: 'Certification exam / retake', fee: 'Verify with POST council' },
        { item: 'Background, medical, psychological screening', fee: '$100–$500' }
      ],
      total: 'Mostly employer-funded; self-sponsored $3k–$9k all-in'
    },
    timeline: [
      { stage: 'Apply & minimum-qualifications screen', duration: '2–8 weeks' },
      { stage: 'Background, medical, psychological, fitness', duration: '1–3 months' },
      { stage: 'State-certified academy', duration: '12–26 weeks' },
      { stage: 'State certification exam + FTO field training', duration: '3–6 months' }
    ],
    route: [
      { title: 'Meet minimum qualifications', description: 'Age, citizenship, education, clean record, driver license.' },
      { title: 'Pass screenings', description: 'Background investigation, medical, psychological, physical agility.' },
      { title: 'Complete state-certified academy', description: 'POST-approved basic training (600–900+ hours).' },
      { title: 'Pass state certification exam', description: 'State-written exam (FL SOCE, TX TCOLE, CA PELLETB, etc.).' },
      { title: 'Field training (FTO)', description: 'On-the-job training with a supervising officer before solo duty.' }
    ],
    providersNote: 'Training is delivered by state POST councils, state police academies, and regional/local training academies. Most recruits are sponsored by a hiring agency; a few states allow self-sponsored academy entry.',
    faqs: [
      { q: 'Is there one national police officer exam?', a: 'No. Each state administers its own certification exam through its POST council. Some states share curriculum standards but the exams are state-specific.' },
      { q: 'Do I have to pay for the academy myself?', a: 'Usually no — most officers are sponsored by the hiring agency, which covers tuition. Self-sponsored slots exist in some states and cost roughly $3,000–$8,000.' },
      { q: 'Can I transfer my certification to another state?', a: 'Often via lateral-entry reciprocity. Many states recognize out-of-state certification after a review or a shorter refresher, but rules differ; there is no national compact.' },
      { q: 'What is the PELLETB / SOCE / TCOLE?', a: 'State-specific entry exams: California uses the POST Entry-Level Law Enforcement Test Battery (PELLETB), Florida the State Officer Certification Exam (SOCE), Texas the TCOLE licensing exam.' },
      { q: 'What disqualifies an applicant?', a: 'Felony convictions, certain misdemeanors (especially involving violence, dishonesty, or moral turpitude), failed drug screens, and some traffic/medical/psychological findings, varying by state.' },
      { q: 'How long until I can work solo?', a: 'Plan 6–12 months total: academy (3–6 months) plus certification exam and field training (several more months).' }
    ],
    reciprocity: {
      compact: null,
      note: 'No national compact for peace officers. Many states grant lateral-entry reciprocity to currently certified officers from other states through interstate POST reciprocity or endorsement, often requiring a shorter refresher and a background check; specifics vary by state. Federal 28 CFR §23 and the LEOTA program encourage portability but do not create automatic reciprocity.'
    },
    defaultAgency: 'State Peace Officer Standards and Training (POST) Council (varies by state)',
    sourceUrl: 'https://www.iadlest.org',
    verified: true,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Peace Officers’ Standards and Training Commission (ALEA POST)', agencyUrl: 'https://www.alea.gov', fee: 'Verify', note: 'State certification exam after ALEA-approved academy.', compactMember: false },
      AK: { agency: 'Alaska Police Standards Council (APSC)', agencyUrl: 'https://dps.alaska.gov', fee: 'Verify', note: 'Council certifies peace officers after approved academy.', compactMember: false },
      AZ: { agency: 'Arizona Peace Officer Standards and Training Board (AZ POST)', agencyUrl: 'https://www.azpost.gov', fee: 'Verify', note: 'Statewide POST certification; written exam after academy.', compactMember: false },
      AR: { agency: 'Arkansas Commission on Law Enforcement Standards and Training (CLEST)', agencyUrl: 'https://www.clest.org', fee: 'Verify', note: 'CLEST certifies officers; state exam after academy.', compactMember: false },
      CA: { agency: 'California Commission on Peace Officer Standards and Training (POST)', agencyUrl: 'https://post.ca.gov', fee: 'Verify', note: 'Uses PELLETB reading/writing battery; local agencies set cutoff.', compactMember: false },
      CO: { agency: 'Colorado Peace Officer Standards and Training (POST) Board', agencyUrl: 'https://www.colorado.gov', fee: 'Verify', note: 'State certification through POST-approved academy.', compactMember: false },
      CT: { agency: 'Connecticut Police Officer Standards and Training Council (POST Council)', agencyUrl: 'https://portal.ct.gov/despp', fee: 'Verify', note: 'CPCA certification exam after academy.', compactMember: false },
      DE: { agency: 'Delaware Council on Police Training (COPT)', agencyUrl: 'https://dpr.delaware.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      DC: { agency: 'DC Metropolitan Police Department – Training Bureau', agencyUrl: 'https://mpdc.dc.gov', fee: 'Verify', note: 'MPD recruits certified via city academy; no standalone state POST.', compactMember: false },
      FL: { agency: 'Florida Department of Law Enforcement – Criminal Justice Standards & Training (FDLE CJST)', agencyUrl: 'https://www.fdle.state.fl.us/CJST', fee: 'Verify', note: 'State Officer Certification Exam (SOCE): 200 items, 80% pass, 3 attempts, ~770 training hrs.', compactMember: false },
      GA: { agency: 'Georgia Peace Officer Standards and Training (POST) Council', agencyUrl: 'https://www.gapost.org', fee: 'Verify', note: 'State certification exam after GPSTC academy.', compactMember: false },
      HI: { agency: 'Hawaii Peace Officer Standards and Training (HPOST)', agencyUrl: 'https://health.hawaii.gov', fee: 'Verify', note: 'State certification through HPOST.', compactMember: false },
      ID: { agency: 'Idaho Peace Officer Standards and Training (POST)', agencyUrl: 'https://www.idahoPost.org', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      IL: { agency: 'Illinois Law Enforcement Training and Standards Board (LETSB)', agencyUrl: 'https://www.illinois.gov', fee: 'Verify', note: 'State certification after approved academy.', compactMember: false },
      IN: { agency: 'Indiana Law Enforcement Academy / Indiana POST', agencyUrl: 'https://www.in.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      IA: { agency: 'Iowa Law Enforcement Academy (ILEA)', agencyUrl: 'https://dps.iowa.gov', fee: 'Verify', note: 'State certification through ILEA.', compactMember: false },
      KS: { agency: 'Kansas Law Enforcement Training Center (KLETC) / Kansas POST', agencyUrl: 'https://www.kletc.org', fee: 'Verify', note: 'State certification after KLETC academy.', compactMember: false },
      KY: { agency: 'Kentucky Department of Criminal Justice Training (DOCJT)', agencyUrl: 'https://docjt.ky.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      LA: { agency: 'Louisiana Peace Officer Standards and Training (POST) Council', agencyUrl: 'https://www.lpca.la.gov', fee: 'Verify', note: 'State certification after approved academy.', compactMember: false },
      ME: { agency: 'Maine Criminal Justice Academy (MCJA)', agencyUrl: 'https://www.maine.gov', fee: 'Verify', note: 'State certification exam after MCJA.', compactMember: false },
      MD: { agency: 'Maryland Police and Correctional Training Commissions (MPCTC)', agencyUrl: 'https://www.governmentjobs.com', fee: 'Verify', note: 'State certification after MPCTC academy.', compactMember: false },
      MA: { agency: 'Massachusetts Municipal Police Training Committee (MPTC)', agencyUrl: 'https://www.mass.gov', fee: 'Verify', note: 'State certification through MPTC-approved academy.', compactMember: false },
      MI: { agency: 'Michigan Commission on Law Enforcement Standards (MCOLES)', agencyUrl: 'https://www.michigan.gov', fee: 'Verify', note: 'MCOLES entrance exam + state certification.', compactMember: false },
      MN: { agency: 'Minnesota POST Board', agencyUrl: 'https://www.dps.mn.gov', fee: 'Verify', note: 'State certification after approved academy.', compactMember: false },
      MS: { agency: 'Mississippi Board on Law Enforcement Officer Standards and Training (MS BOLEST)', agencyUrl: 'https://www.dps.ms.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      MO: { agency: 'Missouri Peace Officer Standards and Training (MPOST) Commission', agencyUrl: 'https://www.dps.mo.gov', fee: 'Verify', note: 'State certification after MPOST-approved academy.', compactMember: false },
      MT: { agency: 'Montana Peace Officer Standards and Training (POST)', agencyUrl: 'https://doj.mt.gov', fee: 'Verify', note: 'State certification through Montana Law Enforcement Academy.', compactMember: false },
      NE: { agency: 'Nebraska Law Enforcement Training Center (NLETC)', agencyUrl: 'https://www.nebraska.gov', fee: 'Verify', note: 'State certification after NLETC academy.', compactMember: false },
      NV: { agency: 'Nevada Peace Officers’ Standards and Training (POST)', agencyUrl: 'https://post.nv.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      NH: { agency: 'New Hampshire Police Standards and Training Council (PSTC)', agencyUrl: 'https://www.nh.gov', fee: 'Verify', note: 'State certification after PSTC academy.', compactMember: false },
      NJ: { agency: 'New Jersey Police Training Commission (NJ PTC)', agencyUrl: 'https://www.nj.gov', fee: 'Verify', note: 'State certification after PTC-approved academy.', compactMember: false },
      NM: { agency: 'New Mexico Law Enforcement Academy Board (LEA)', agencyUrl: 'https://www.dps.nm.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      NY: { agency: 'NY Division of Criminal Justice Services – Municipal Police Training Council', agencyUrl: 'https://www.criminaljustice.ny.gov', fee: 'Verify', note: 'State certification after approved academy (MPTC standards).', compactMember: false },
      NC: { agency: 'NC Criminal Justice Education and Training Standards Commission (CJETS)', agencyUrl: 'https://www.ncdps.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      ND: { agency: 'North Dakota Peace Officer Standards and Training Board (ND POST)', agencyUrl: 'https://www.ndpost.nd.gov', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      OH: { agency: 'Ohio Peace Officer Training Commission (OPOTA)', agencyUrl: 'https://www.ohioattorneygeneral.gov', fee: 'Verify', note: 'State certification exam after OPOTA academy.', compactMember: false },
      OK: { agency: 'Oklahoma Council on Law Enforcement Education and Training (CLEET)', agencyUrl: 'https://www.cleet.ok.gov', fee: 'Verify', note: 'State certification after CLEET academy.', compactMember: false },
      OR: { agency: 'Oregon Department of Public Safety Standards and Training (DPSST)', agencyUrl: 'https://www.oregon.gov/dpsst', fee: 'Verify', note: 'State certification exam after DPSST academy.', compactMember: false },
      PA: { agency: 'Pennsylvania Municipal Police Officers’ Education and Training Commission (MPOETC)', agencyUrl: 'https://www.mpoetc.state.pa.us', fee: 'Verify', note: 'State certification after MPOETC academy.', compactMember: false },
      RI: { agency: 'Rhode Island Police Officers Commission on Standards and Training (RI POSC)', agencyUrl: 'https://www.ri.gov', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      SC: { agency: 'South Carolina Criminal Justice Academy (SCCJA)', agencyUrl: 'https://www.sccja.org', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      SD: { agency: 'South Dakota Peace Officer Standards and Training (POST)', agencyUrl: 'https://dps.sd.gov', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      TN: { agency: 'Tennessee Peace Officer Standards and Training (POST) Commission', agencyUrl: 'https://www.tn.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      TX: { agency: 'Texas Commission on Law Enforcement (TCOLE)', agencyUrl: 'https://tcole.texas.gov', fee: 'Verify', note: 'TCOLE exam: 250 items, 180 min, 70% pass, 3 attempts; BPOC 736 hrs.', compactMember: false },
      UT: { agency: 'Utah Peace Officer Standards and Training (POST)', agencyUrl: 'https://post.utah.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      VT: { agency: 'Vermont Criminal Justice Training Council (VCJTC)', agencyUrl: 'https://vcjtc.vermont.gov', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      VA: { agency: 'Virginia Department of Criminal Justice Services (DCJS) – Justice Academy', agencyUrl: 'https://www.dcjs.virginia.gov', fee: 'Verify', note: 'State certification after DCJS-approved academy.', compactMember: false },
      WA: { agency: 'Washington State Criminal Justice Training Commission (WSCJTC)', agencyUrl: 'https://cjtc.wa.gov', fee: 'Verify', note: 'State certification exam after academy.', compactMember: false },
      WV: { agency: 'West Virginia Division of Justice and Community Services – Police Officer Training', agencyUrl: 'https://www.wv.gov', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      WI: { agency: 'Wisconsin Law Enforcement Standards Board (LESB)', agencyUrl: 'https://www.wilenet.org', fee: 'Verify', note: 'State certification after academy.', compactMember: false },
      WY: { agency: 'Wyoming Peace Officer Standards and Training (POST)', agencyUrl: 'https://wyoleo.org', fee: 'Verify', note: 'State certification after Wyoming Law Enforcement Academy.', compactMember: false }
    }
  },

  /* ============================================================
     2) FIREFIGHTER — every state certifies Firefighter I/II
     (NFPA 1001) through a state fire marshal/academy; most hold
     IFSAC and/or Pro Board accreditation.
     ============================================================ */
  {
    key: 'firefighter',
    name: 'Firefighter Certification (Firefighter I/II)',
    category: 'Fire Service',
    group: 'State Certification',
    type: 'certification',
    blurb: 'State-issued firefighter certification (Firefighter I/II per NFPA 1001), typically required for interior structural firefighting.',
    overview: "Firefighter certification in the United States is built on NFPA 1001 standards and delivered through each state's fire marshal's office or state fire academy. Every state and the District of Columbia maintain a state-level certification program for Firefighter I and Firefighter II, plus specializations (HazMat, Driver/Operator, Officer, Inspector). Most states hold accreditation from the International Fire Service Accreditation Congress (IFSAC) and/or the National Board on Fire Service Professional Qualifications (Pro Board), which makes certifications portable between states that recognize those seals. Candidates usually train through a state-approved fire academy (sponsored by a department or self-pay), then pass written and practical exams. Career departments commonly also require EMT-Basic certification and a physical ability test (CPAT or equivalent). Volunteer firefighters often follow the same standards on an extended timeline.",
    eligibility: "Typically age 18+, high-school diploma or GED, valid driver license, and the physical fitness to meet CPAT or department standards. Many career departments require U.S. work authorization and a clean driving/criminal record. EMT certification is frequently required for hire.",
    exam: {
      admin: 'State fire marshal / state fire academy',
      questions: 'Written + practical skills evaluations (NFPA 1001)',
      time: 'Written 2–3 hours; practical stations vary',
      pass: 'Typically 70%+ on written; pass all practical stations',
      fee: 'Often covered by sponsoring department; individual fees vary',
      format: 'Written exam plus hands-on practical skills testing'
    },
    education: {
      hours: 'Fire academy 12–26 weeks (most 12–18 weeks); 20–24 CE hours/year',
      note: 'State-approved academy meeting NFPA 1001. Many states require EMT-Basic for career hires.'
    },
    prerequisites: 'Age 18+, HS diploma/GED, driver license, pass CPAT/physical, clean record. EMT-B often required by employing department.',
    costBreakdown: {
      items: [
        { item: 'Fire academy tuition (department-sponsored)', fee: '$0 (sponsored)' },
        { item: 'Self-pay academy', fee: '$350–$3,000 (varies by state)' },
        { item: 'Certification exam fees', fee: 'Verify with state fire marshal' },
        { item: 'EMT-B course (if required)', fee: '$500–$1,500' }
      ],
      total: 'Often employer-funded; self-pay ~$350–$4,500 all-in'
    },
    timeline: [
      { stage: 'Meet eligibility & CPAT', duration: '1–2 months' },
      { stage: 'State fire academy (Firefighter I/II)', duration: '12–26 weeks' },
      { stage: 'Written + practical certification exams', duration: '1–2 months' },
      { stage: 'EMT-B + department hiring (career)', duration: '1–6 months' }
    ],
    route: [
      { title: 'Meet minimum qualifications', description: 'Age, education, driver license, physical fitness.' },
      { title: 'Complete state-approved fire academy', description: 'NFPA 1001 Firefighter I/II training.' },
      { title: 'Pass written & practical exams', description: 'State fire marshal certification testing.' },
      { title: 'Obtain EMT-B (career track)', description: 'Most career departments require EMT-Basic.' },
      { title: 'Apply & hire', description: 'Department recruitment, oral board, background.' }
    ],
    providersNote: 'Delivered by state fire marshals/academies and community-college fire science programs. Accreditation is commonly through IFSAC and/or Pro Board, which aids portability. Career departments frequently sponsor academy tuition.',
    faqs: [
      { q: 'Is firefighter certification required in every state?', a: 'Yes. All 51 jurisdictions certify firefighters to NFPA 1001 (Firefighter I/II) through a state fire marshal or academy. Volunteer pathways may allow more time but use the same standards.' },
      { q: 'What is IFSAC vs Pro Board?', a: 'Both are accrediting bodies whose seals validate firefighter certifications to national standards. A certificate bearing an IFSAC or Pro Board seal is more readily accepted by other states.' },
      { q: 'Can I transfer my certification to another state?', a: 'Often yes if your certificate is IFSAC/Pro Board accredited and the receiving state recognizes that seal; otherwise you may need challenge exams or supplemental training. No national compact exists.' },
      { q: 'Do I need EMT certification?', a: 'Most career (paid) departments require EMT-Basic. All-firefighter certifications themselves do not include EMT, but hiring usually does.' },
      { q: 'How much does it cost?', a: 'Department-sponsored recruits often pay little or nothing. Self-pay academy and exam fees typically run a few hundred to a few thousand dollars depending on the state.' },
      { q: 'How long does certification take?', a: 'About 6–12 months including academy (12–26 weeks), exams, and EMT if needed.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No interstate compact for firefighter certification. IFSAC- and Pro Board-accredited certificates are widely accepted by other states’ fire marshals, which facilitates reciprocity, but each state sets its own acceptance rules and may require challenge exams or documentation. Verify with the destination state fire marshal.'
    },
    defaultAgency: 'State Fire Marshal / State Fire Academy (varies by state)',
    sourceUrl: 'https://www.ifsac.org',
    verified: true,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Fire College (State Fire Marshal)', agencyUrl: 'https://www.alabamafirecollege.org', fee: 'Verify', note: 'IFSAC/Pro Board accredited Firefighter I/II.', compactMember: false },
      AK: { agency: 'Alaska Fire Standards Council / DPS', agencyUrl: 'https://dps.alaska.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      AZ: { agency: 'Arizona Center for Fire Service Excellence', agencyUrl: 'https://azfsi.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      AR: { agency: 'Arkansas Fire Training Academy', agencyUrl: 'https://www.arkansas.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      CA: { agency: 'California Office of the State Fire Marshal (OSFM)', agencyUrl: 'https://osfm.fire.ca.gov', fee: 'Verify', note: 'State Firefighter I/II; many counties IFSAC/Pro Board.', compactMember: false },
      CO: { agency: 'Colorado Division of Fire Prevention & Control', agencyUrl: 'https://dfpc.colorado.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      CT: { agency: 'Connecticut Commission on Fire Prevention & Control', agencyUrl: 'https://portal.ct.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      DE: { agency: 'Delaware State Fire School', agencyUrl: 'https://www.delaware.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      DC: { agency: 'DC Fire and EMS Training Academy', agencyUrl: 'https://fems.dc.gov', fee: 'Verify', note: 'State-level Firefighter I/II for DC.', compactMember: false },
      FL: { agency: 'Florida State Fire College (DOS)', agencyUrl: 'https://www.myfloridacfo.com', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      GA: { agency: 'Georgia Firefighter Standards & Training (GPTC)', agencyUrl: 'https://www.gpstc.org', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      HI: { agency: 'Hawaii Firefighter Certification Program', agencyUrl: 'https://health.hawaii.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      ID: { agency: 'Idaho Fire & EMS Training', agencyUrl: 'https://www.idaho.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      IL: { agency: 'Illinois Office of the State Fire Marshal', agencyUrl: 'https://www2.illinois.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      IN: { agency: 'Indiana Fire & Public Safety Academy', agencyUrl: 'https://www.in.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      IA: { agency: 'Iowa Fire Service Training Bureau', agencyUrl: 'https://www.dps.state.ia.us', fee: 'Verify', note: 'IFSAC + Pro Board accredited Firefighter I/II.', compactMember: false },
      KS: { agency: 'Kansas Fire & Rescue Training Institute', agencyUrl: 'https://www.kufire.org', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      KY: { agency: 'Kentucky Fire Commission', agencyUrl: 'https://firecommission.ky.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      LA: { agency: 'Louisiana State Fire Marshal', agencyUrl: 'https://www.lsb.state.la.us', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      ME: { agency: 'Maine Fire Training & Education', agencyUrl: 'https://www.maine.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      MD: { agency: 'Maryland Fire and Rescue Institute (MFRI)', agencyUrl: 'https://mfri.org', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      MA: { agency: 'Massachusetts Firefighting Academy', agencyUrl: 'https://www.mass.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      MI: { agency: 'Michigan Bureau of Fire Services', agencyUrl: 'https://www.michigan.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      MN: { agency: 'Minnesota Board of Firefighter Training & Education', agencyUrl: 'https://dps.mn.gov', fee: 'Verify', note: 'IFSAC accredited Firefighter I/II.', compactMember: false },
      MS: { agency: 'Mississippi Fire Academy', agencyUrl: 'https://www.mid.ms.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      MO: { agency: 'Missouri Division of Fire Safety', agencyUrl: 'https://www.dps.mo.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      MT: { agency: 'Montana Fire Services Training School', agencyUrl: 'https://doj.mt.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      NE: { agency: 'Nebraska State Fire Marshal', agencyUrl: 'https://sfm.nebraska.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      NV: { agency: 'Nevada Fire Chiefs / State Fire Marshal', agencyUrl: 'https://www.nv.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      NH: { agency: 'New Hampshire Fire Academy', agencyUrl: 'https://www.nh.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      NJ: { agency: 'New Jersey Division of Fire Safety', agencyUrl: 'https://www.nj.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      NM: { agency: 'New Mexico Fire Training Academy', agencyUrl: 'https://www.nm.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      NY: { agency: 'New York Division of Homeland Security & Emergency Services (DHSES)', agencyUrl: 'https://www.dhses.ny.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      NC: { agency: 'North Carolina Office of State Fire Marshal', agencyUrl: 'https://www.ncdoi.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      ND: { agency: 'North Dakota Firefighter’s Association / State Fire Marshal', agencyUrl: 'https://www.nd.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      OH: { agency: 'Ohio Department of Commerce – Fire Marshal', agencyUrl: 'https://www.com.ohio.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      OK: { agency: 'Oklahoma State Firefighters Association / Fire Marshal', agencyUrl: 'https://www.ok.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      OR: { agency: 'Oregon Department of Public Safety Standards & Training (DPSST)', agencyUrl: 'https://www.oregon.gov/dpsst', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      PA: { agency: 'Pennsylvania State Fire Academy', agencyUrl: 'https://www.psfa.org', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      RI: { agency: 'Rhode Island Fire Academy', agencyUrl: 'https://www.ri.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      SC: { agency: 'South Carolina Fire Academy', agencyUrl: 'https://www.scfa.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      SD: { agency: 'South Dakota Fire Marshal', agencyUrl: 'https://dps.sd.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      TN: { agency: 'Tennessee Commission on Firefighting (TCFC)', agencyUrl: 'https://www.tn.gov', fee: 'Verify', note: 'IFSAC + Pro Board accredited Firefighter I/II.', compactMember: false },
      TX: { agency: 'Texas Commission on Fire Protection (TCFP)', agencyUrl: 'https://www.tcfp.texas.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      UT: { agency: 'Utah Fire Service Certification', agencyUrl: 'https://www.utah.gov', fee: 'Verify', note: 'State Firefighter I/II; IFSAC/Pro Board.', compactMember: false },
      VT: { agency: 'Vermont Fire Academy', agencyUrl: 'https://www.vermont.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      VA: { agency: 'Virginia Department of Fire Programs (VDFP)', agencyUrl: 'https://www.vafire.com', fee: 'Verify', note: 'IFSAC + Pro Board accredited Firefighter I/II.', compactMember: false },
      WA: { agency: 'Washington State Patrol – State Fire Marshal’s Office', agencyUrl: 'https://wsp.wa.gov', fee: 'Verify', note: 'IFSAC (seeking Pro Board) Firefighter I/II.', compactMember: false },
      WV: { agency: 'West Virginia Fire Commission', agencyUrl: 'https://www.wv.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      WI: { agency: 'Wisconsin Technical College System / Fire Service', agencyUrl: 'https://www.wisconsin.gov', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false },
      WY: { agency: 'Wyoming Fire Certification Program', agencyUrl: 'https://wyofire.org', fee: 'Verify', note: 'State Firefighter I/II certification.', compactMember: false }
    }
  },

  /* ============================================================
     3) SECURITY GUARD — 36 states require a state-level guard
     card/license. Omitted (no state-level individual license):
     CO, ID, IA, KS, KY, MA, MS, MO, NE, NH, PA, RI, SD, VT, WY.
     (Per GetLicenseMap 2026: 36 of 51 require.)
     ============================================================ */
  {
    key: 'security-guard',
    name: 'Security Guard License / Guard Card',
    category: 'Private Security',
    group: 'State License',
    type: 'license',
    blurb: 'State-issued guard card or security guard license required to work as an unarmed (and armed) security guard in most states.',
    overview: "Most U.S. states require individuals working as security guards to hold a state-issued guard card or security guard license, regulated by a state private-security board or department of public safety. Requirements generally include a minimum age (often 18), a background check (usually fingerprint-based FBI/state), and state-approved training hours (commonly 8–40 hours for unarmed guards). Armed guards must complete additional firearms training and qualification. A minority of states do not license individual unarmed guards at the state level — there, only the security agency is regulated (or no state rule exists and cities may license locally). Per 2026 research, 36 of 51 jurisdictions require a state-level guard card; the remaining 15 (Colorado, Idaho, Iowa, Kansas, Kentucky, Massachusetts, Mississippi, Missouri, Nebraska, New Hampshire, Pennsylvania, Rhode Island, South Dakota, Vermont, Wyoming) do not license individual unarmed guards at the state level and are omitted here.",
    eligibility: "Typically age 18+ (21 for armed), legally eligible to work in the U.S., clean criminal background (no disqualifying felony/misdemeanor), and completion of state-approved training. Armed status requires firearms training and qualification.",
    exam: {
      admin: 'State private security board / Department of Public Safety',
      questions: 'Varies; some states require a written exam (e.g., NV), others training-course exam only',
      time: 'Varies',
      pass: 'Course/exam pass per state standard',
      fee: 'Included in license fee where applicable',
      format: 'Training-course assessment;少数 states written exam'
    },
    education: {
      hours: 'Unarmed training commonly 8–40 hours (e.g., CA 8hr+32hr; TX Level II 4hr; NV none before card; GA 24hr)',
      note: 'State-approved provider; armed adds firearms training. Some states require annual continuing education.'
    },
    prerequisites: 'Minimum age, work eligibility, background check, state-approved training. Employer often submits the application.',
    costBreakdown: {
      items: [
        { item: 'Application / guard card fee', fee: '$25–$100 (varies by state)' },
        { item: 'Training course', fee: '$50–$200' },
        { item: 'Fingerprint/background', fee: '$30–$75' },
        { item: 'Armed endorsement (if applicable)', fee: 'Additional $50–$150' }
      ],
      total: 'Typically $100–$400 initial'
    },
    timeline: [
      { stage: 'Complete training', duration: '1 day – 2 weeks' },
      { stage: 'Fingerprint & background', duration: '1–4 weeks' },
      { stage: 'Application & card issuance', duration: '1–4 weeks' },
      { stage: 'Renewal (typically 2 years)', duration: 'Ongoing' }
    ],
    route: [
      { title: 'Meet minimum qualifications', description: 'Age, work eligibility, clean record.' },
      { title: 'Complete state-approved training', description: 'Unarmed (8–40 hrs) or armed (add firearms).' },
      { title: 'Pass background check', description: 'Fingerprint-based FBI/state check.' },
      { title: 'Apply for guard card', description: 'Often via employing agency.' }
    ],
    providersNote: 'Training is delivered by state-approved security schools and often sponsored by the employing agency. Regulation sits with state private-security boards, DPS private security bureaus, or professional licensing divisions.',
    faqs: [
      { q: 'Do all states require a security guard license?', a: 'No. In 2026, 36 of 51 jurisdictions require a state-level guard card. Fifteen states (e.g., Colorado, Idaho, Kansas, Missouri, Wyoming) do not license individual unarmed guards at the state level — only the agency may be regulated, or cities license locally.' },
      { q: 'What training is required?', a: 'Unarmed guards usually need 8–40 hours of state-approved training (CA 8+32, TX Level II 4, GA 24). Armed guards add firearms training and qualification.' },
      { q: 'How much does a guard card cost?', a: 'Typically $100–$400 initially including training, fingerprinting, and the application fee, varying by state.' },
      { q: 'Is there a written exam?', a: 'Most states assess via the training course; a few (e.g., Nevada) require a written registration exam. Armed endorsements always include a shooting qualification.' },
      { q: 'Can an out-of-state guard card transfer?', a: 'Rarely. Most states require a new application, though multi-state agencies may move guards internally. No national compact exists.' },
      { q: 'What about armed security?', a: 'Armed guards need an additional firearms permit, training, and live-fire qualification in every state that licenses guards.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No national compact. Most states require a fresh guard-card application even if licensed elsewhere; a few accept out-of-state cards only for guards employed by a multi-state agency. Verify with the destination state private-security board.'
    },
    defaultAgency: 'State Private Security Board / Department of Public Safety (varies)',
    sourceUrl: 'https://getlicensemap.com/blog/do-you-need-a-security-guard-license',
    verified: true,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Security Regulatory Board (ASRB)', agencyUrl: 'https://asrb.alabama.gov', fee: '$112 (approx)', note: 'State guard license; background + training required.', compactMember: false },
      AK: { agency: 'Alaska DPS – Private Security Program', agencyUrl: 'https://dps.alaska.gov/statewide/r-i/permitslicensing/securityguard', fee: 'Verify', note: 'State security guard permit; 48-hr training required.', compactMember: false },
      AZ: { agency: 'Arizona DPS – SGPI Licensing', agencyUrl: 'https://www.azdps.gov/services/public-services-center/sgpi-licensing', fee: '$54 registration', note: '8-hr pre-assignment training; guard card required.', compactMember: false },
      AR: { agency: 'Arkansas DPS – Private Security', agencyUrl: 'https://dps.arkansas.gov', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      CA: { agency: 'Bureau of Security and Investigative Services (BSIS)', agencyUrl: 'https://www.bsis.ca.gov', fee: '$50 initial', note: 'Guard card: 8-hr pre + 32-hr post training; $50 exam fee.', compactMember: false },
      CT: { agency: 'CT DESPP – Private Security', agencyUrl: 'https://portal.ct.gov/despp/division-of-state-police/special-licensing-and-firearms/private-security-companies', fee: 'Verify', note: 'State guard registration.', compactMember: false },
      DE: { agency: 'Delaware State Police – Security Guards', agencyUrl: 'https://dsp.delaware.gov/security-guards/', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      DC: { agency: 'MPDC – Security Officers Management Branch (SOMB)', agencyUrl: 'https://mpdc.dc.gov/page/security-officers-management-branch-somb', fee: 'Verify', note: 'DC security officer license.', compactMember: false },
      FL: { agency: 'Florida DACS – Division of Licensing', agencyUrl: 'https://www.fdacs.gov/Divisions-Offices/Licensing', fee: '$112 (Class D)', note: 'Class D unarmed license; 40-hr D/S training.', compactMember: false },
      GA: { agency: 'Georgia Board of Private Detective & Security Agencies', agencyUrl: 'https://sos.ga.gov/board-private-detective-and-security-agencies', fee: 'Verify', note: 'Unarmed guards not individually licensed; agency + 24-hr training. Listed for agency context.', compactMember: false },
      HI: { agency: 'Hawaii PVL – Private Security', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/private/', fee: 'Verify', note: 'State guard registration.', compactMember: false },
      IL: { agency: 'Illinois IDFPR – Private Security', agencyUrl: 'https://idfpr.illinois.gov/profs/securitycont.html', fee: 'Verify', note: 'PERC card; 20-hr training required.', compactMember: false },
      IN: { agency: 'Indiana PLA – Private Investigator & Security Guard', agencyUrl: 'https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Private Security Examiners (LSBPSE)', agencyUrl: 'https://www.lsbpse.com', fee: 'Verify', note: 'State guard license.', compactMember: false },
      ME: { agency: 'Maine DPS – Professional Investigator/Licensing', agencyUrl: 'https://www.maine.gov/dps/msp/licenses-permits/professional-investigator', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      MD: { agency: 'Maryland State Police – Security Guard Licensing', agencyUrl: 'https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecurityGuard.aspx', fee: 'Verify', note: 'State guard license.', compactMember: false },
      MI: { agency: 'Michigan LARA – Private Security', agencyUrl: 'https://www.michigan.gov/lara', fee: 'Verify', note: 'Employer-based licensing; no individual guard fee.', compactMember: false },
      MN: { agency: 'Minnesota DPS – Private Detective & Protective Agents Board', agencyUrl: 'https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board', fee: 'Verify', note: 'Protective agent registration; 12-hr training.', compactMember: false },
      MT: { agency: 'Montana Board of Private Security', agencyUrl: 'https://boards.bsd.dli.mt.gov/private-security/', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      NV: { agency: 'Nevada Private Investigators Licensing Board (PILB)', agencyUrl: 'https://pilb.nv.gov', fee: 'Verify', note: 'Registration card + written exam; no pre-training.', compactMember: false },
      NJ: { agency: 'New Jersey State Police – Private Detective Unit', agencyUrl: 'https://www.nj.gov/njsp/about/division-investigations.shtml', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      NM: { agency: 'NM Regulation & Licensing – Private Investigations/Security Guard', agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/private-investigations-security-guard/licensing-registration-and-renewal/', fee: 'Verify', note: 'State guard registration.', compactMember: false },
      NY: { agency: 'NYS Division of Licensing Services – Security Guard', agencyUrl: 'https://dos.ny.gov/security-guard', fee: '$36', note: '8-hr pre + 16-hr on-job + 47-hr; $36 registration.', compactMember: false },
      NC: { agency: 'NC Private Protective Services Board', agencyUrl: 'https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board', fee: 'Verify', note: 'Unarmed registration.', compactMember: false },
      ND: { agency: 'North Dakota Private Investigation & Security Board', agencyUrl: 'https://www.pisb.nd.gov', fee: 'Verify', note: 'State guard license.', compactMember: false },
      OH: { agency: 'Ohio BCI – Private Security', agencyUrl: 'https://www.ohiobci.gov', fee: '$50 registration', note: 'Registration + training; armed adds 20-hr.', compactMember: false },
      OK: { agency: 'Oklahoma CLEET – Security Guard', agencyUrl: 'https://oklahoma.gov/cleet/licensing/security-guard.html', fee: 'Verify', note: 'State security guard license.', compactMember: false },
      OR: { agency: 'Oregon DPSST – Private Security', agencyUrl: 'https://www.oregon.gov/dpsst/PS/Pages/home.aspx', fee: 'Verify', note: 'State unarmed guard license.', compactMember: false },
      SC: { agency: 'SC Law Enforcement Division (SLED) – PI & Security', agencyUrl: 'https://www.sled.sc.gov/PI_Security', fee: 'Verify', note: 'State guard registration.', compactMember: false },
      TN: { agency: 'Tennessee Private Protective Services', agencyUrl: 'https://www.tn.gov/commerce/licensing-regulations/private-protective-services.html', fee: 'Verify', note: 'Guard card; 4-hr unarmed training.', compactMember: false },
      TX: { agency: 'Texas DPS – Private Security Bureau', agencyUrl: 'https://www.dps.texas.gov/section/private-security', fee: 'Verify', note: 'Level II unarmed (4-hr); Level III armed.', compactMember: false },
      UT: { agency: 'Utah DOPL – Private Security', agencyUrl: 'https://dopl.utah.gov', fee: 'Verify', note: 'State guard license; 8-hr training.', compactMember: false },
      VA: { agency: 'Virginia DCJS – Unarmed Security Officer', agencyUrl: 'https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/unarmed-security-officercourier', fee: 'Verify', note: 'Unarmed registration; 18-hr training.', compactMember: false },
      WA: { agency: 'Washington DOL – Security Guard (Unarmed)', agencyUrl: 'https://dol.wa.gov/professional-licenses/security-guard-unarmed', fee: 'Verify', note: 'State guard registration.', compactMember: false },
      WV: { agency: 'WV Secretary of State – PISG Licensing', agencyUrl: 'https://sos.wv.gov/business/Pages/PISGLicInfo.aspx', fee: 'Verify', note: 'Registration + 18-hr training.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS – Private Security', agencyUrl: 'https://dsps.wi.gov/Pages/Professions/PSP/Default.aspx', fee: 'Verify', note: 'State guard registration.', compactMember: false }
    }
  },

  /* ============================================================
     4) PRIVATE INVESTIGATOR — 45 states require a state license.
     Omitted (no state-level PI license): AK, CO, ID, MS, SD, WY.
     (Per GetLicenseMap 2026: 45 of 51 require. NOTE: AL and MO
     DO require licensure — included despite earlier assumption.)
     ============================================================ */
  {
    key: 'private-investigator',
    name: 'Private Investigator License',
    category: 'Private Security',
    group: 'State License',
    type: 'license',
    blurb: 'State-issued private investigator license required to operate as a PI in 45 of 51 U.S. jurisdictions.',
    overview: "Private investigation is a regulated profession in most of the United States. As of 2026, 45 of 51 jurisdictions require a state-level private investigator license, issued by a state police agency, Department of Public Safety, professional licensing board, or Secretary of State. Common requirements include a minimum age (usually 18 or 21, some states 25), a clean background check with fingerprinting, documented investigative experience (often 2–3 years; some states accept degrees or military credit), and a surety bond. About half the states also require a written PI exam (e.g., California, Florida, Illinois, Louisiana, Maryland, Nevada, New Mexico, New York, Wisconsin). Six states — Alaska, Colorado (licensing discontinued in 2020), Idaho, Mississippi, South Dakota, and Wyoming — do not license PIs at the state level; a few cities within them (e.g., Anchorage, Cheyenne) have local rules. Those six are omitted here. Notably, Alabama and Missouri DO require licensing and are included.",
    eligibility: "Usually age 18–25 depending on state, U.S. citizen or work-authorized, high-school diploma, clean criminal record (no felony), documented investigative experience (commonly 2–5 years), and a surety bond (often $5k–$25k). Some states require a written exam.",
    exam: {
      admin: 'State licensing board / state police',
      questions: 'Varies; about half of states require a written exam',
      time: 'Varies',
      pass: 'Per state standard',
      fee: 'Included in license fee where required',
      format: 'Written exam in exam states; otherwise experience/documentary review'
    },
    education: {
      hours: 'Experience 0–5 years (avg 2–3); degrees/military may substitute',
      note: 'Most states substitute education or police/military service for part of the experience requirement.'
    },
    prerequisites: 'Minimum age, work eligibility, clean record, investigative experience (or equivalent), surety bond. Exam states add a written test.',
    costBreakdown: {
      items: [
        { item: 'Application / license fee', fee: '$50–$500 (varies by state)' },
        { item: 'Fingerprint/background', fee: '$30–$75' },
        { item: 'Surety bond', fee: '$5,000–$25,000 (often annual premium ~$100–$300)' },
        { item: 'Exam fee (exam states)', fee: '$25–$100' }
      ],
      total: 'Typically $150–$800 plus bond premium'
    },
    timeline: [
      { stage: 'Document experience & training', duration: '1–3 months' },
      { stage: 'Fingerprint & background', duration: '2–6 weeks' },
      { stage: 'Exam (if required) & application', duration: '1–2 months' },
      { stage: 'License issuance & renewal (1–3 yrs)', duration: 'Ongoing' }
    ],
    route: [
      { title: 'Meet experience requirement', description: '2–5 years investigative experience or equivalent.' },
      { title: 'Pass background & post bond', description: 'Fingerprint check and surety bond.' },
      { title: 'Pass written exam (exam states)', description: 'CA, FL, IL, LA, MD, NV, NM, NY, WI, etc.' },
      { title: 'Apply for license', description: 'Submit to state police/board/Secretary of State.' }
    ],
    providersNote: 'Licenses are issued by state police agencies, DPS private-security divisions, dedicated PI boards, or the Secretary of State. Pre-licensing training is available through state-approved providers; many states waive exams for qualified experience.',
    faqs: [
      { q: 'How many states require a PI license?', a: 'As of 2026, 45 of 51 jurisdictions require a state-level PI license. The six that do not are Alaska, Colorado (discontinued 2020), Idaho, Mississippi, South Dakota, and Wyoming.' },
      { q: 'Is there a PI exam?', a: 'About half of states require a written exam (e.g., California, Florida, Illinois, Louisiana, Maryland, Nevada, New Mexico, New York, Wisconsin). Others rely on experience and background review.' },
      { q: 'How much experience is required?', a: 'Typically 2–3 years (4,000–6,000 hours). Connecticut, Maine, and New Jersey expect ~5 years. Degrees or military/police service often reduce the requirement.' },
      { q: 'Do I need a bond?', a: 'Most licensed states require a surety bond, commonly $5,000–$25,000; you pay an annual premium, not the full face value.' },
      { q: 'Is there reciprocity between states?', a: 'Limited. A few states grant reciprocal or endorsement licenses to out-of-state PIs after review; most require a fresh application. No national compact exists.' },
      { q: 'Does Colorado really not license PIs?', a: 'Correct. Colorado’s PI licensing was discontinued in 2020 (sunset), so there is currently no state requirement.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No national compact. A handful of states offer reciprocal or endorsement licenses to PIs already licensed elsewhere (usually after an experience review); most require a full new application. Verify with the destination state licensing authority.'
    },
    defaultAgency: 'State Police / Private Security Board / Secretary of State (varies)',
    sourceUrl: 'https://getlicensemap.com/blog/do-you-need-a-private-investigator-license',
    verified: true,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Private Investigation Board (ALEA)', agencyUrl: 'https://www.alea.gov', fee: 'Verify', note: 'Required: background, experience, exam, bond.', compactMember: false },
      AZ: { agency: 'Arizona DPS – Private Investigator Licensing', agencyUrl: 'https://www.azdps.gov', fee: 'Verify', note: 'Firm + individual licensing; experience required.', compactMember: false },
      AR: { agency: 'Arkansas DPS – Private Investigators', agencyUrl: 'https://dps.arkansas.gov', fee: 'Verify', note: 'Experience + training + bond.', compactMember: false },
      CA: { agency: 'California BSIS – Private Investigator', agencyUrl: 'https://www.bsis.ca.gov', fee: '$175 (approx)', note: 'Written exam (PI exam); 3-yr experience or degree.', compactMember: false },
      CT: { agency: 'Connecticut DCP – Private Detective', agencyUrl: 'https://portal.ct.gov/dcp', fee: 'Verify', note: '~5 yrs experience; age 25.', compactMember: false },
      DE: { agency: 'Delaware State Police – PI Licensing', agencyUrl: 'https://dsp.delaware.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      DC: { agency: 'DC Department of Licensing – Private Investigator', agencyUrl: 'https://dclicensing.com', fee: 'Verify', note: '100-hr training; no exam.', compactMember: false },
      FL: { agency: 'Florida DACS – Division of Licensing (PI)', agencyUrl: 'https://www.fdacs.gov/Divisions-Offices/Licensing', fee: 'Verify', note: 'Written PI exam; experience required.', compactMember: false },
      GA: { agency: 'Georgia Board of Private Detective & Security Agencies', agencyUrl: 'https://sos.ga.gov', fee: 'Verify', note: 'Experience + bond; age 25.', compactMember: false },
      HI: { agency: 'Hawaii PVL – Private Detectives', agencyUrl: 'https://cca.hawaii.gov/pvl/boards/private/', fee: 'Verify', note: 'State PI license.', compactMember: false },
      IL: { agency: 'Illinois IDFPR – Private Detective', agencyUrl: 'https://idfpr.illinois.gov', fee: 'Verify', note: 'Written exam; experience + bond.', compactMember: false },
      IN: { agency: 'Indiana Professional Licensing Agency – PI', agencyUrl: 'https://www.in.gov/pla', fee: 'Verify', note: 'State PI board license.', compactMember: false },
      IA: { agency: 'Iowa DPS – Private Investigative Agency', agencyUrl: 'https://dps.iowa.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      KS: { agency: 'Kansas Attorney General – PI Licensing', agencyUrl: 'https://ag.ks.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      KY: { agency: 'Kentucky State Police – PI Licensing', agencyUrl: 'https://kentuckystatepolice.org', fee: 'Verify', note: 'State PI license.', compactMember: false },
      LA: { agency: 'Louisiana State Board of Private Investigator Examiners', agencyUrl: 'https://www.lsbpie.com', fee: 'Verify', note: 'Written exam; experience + bond.', compactMember: false },
      ME: { agency: 'Maine DPS – Professional Investigator Licensing', agencyUrl: 'https://www.maine.gov/dps', fee: 'Verify', note: 'Age 25; ~5 yrs experience.', compactMember: false },
      MD: { agency: 'Maryland State Police – PI Licensing', agencyUrl: 'https://mdsp.maryland.gov', fee: 'Verify', note: 'Written exam; no experience min.', compactMember: false },
      MA: { agency: 'Massachusetts State Police – Special Licensing', agencyUrl: 'https://www.mass.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      MI: { agency: 'Michigan State Police – Private Security & Investigative', agencyUrl: 'https://www.michigan.gov', fee: 'Verify', note: 'State PI license; age 25.', compactMember: false },
      MN: { agency: 'Minnesota DPS – Private Detective Board', agencyUrl: 'https://dps.mn.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      MO: { agency: 'Missouri DPS – PI Licensing', agencyUrl: 'https://www.dps.mo.gov', fee: 'Verify', note: 'REQUIRED at state level (contrary to some assumptions); some cities also license.', compactMember: false },
      MT: { agency: 'Montana Board of Private Security Patrolmen & Investigators', agencyUrl: 'https://boards.bsd.dli.mt.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      NE: { agency: 'Nebraska Secretary of State – PI Licensing', agencyUrl: 'https://sos.nebraska.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      NV: { agency: 'Nevada PILB – Private Investigator', agencyUrl: 'https://pilb.nv.gov', fee: 'Verify', note: 'Written exam; bond required.', compactMember: false },
      NH: { agency: 'New Hampshire State Police – PI Licensing', agencyUrl: 'https://www.nh.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      NJ: { agency: 'New Jersey State Police – Private Detective Unit', agencyUrl: 'https://www.nj.gov/njsp', fee: 'Verify', note: 'Written exam; ~5 yrs experience.', compactMember: false },
      NM: { agency: 'New Mexico DPS – Private Investigations', agencyUrl: 'https://www.rld.nm.gov', fee: 'Verify', note: 'Written exam; experience + bond.', compactMember: false },
      NY: { agency: 'NYS Division of Licensing Services – PI', agencyUrl: 'https://dos.ny.gov', fee: 'Verify', note: 'Written exam; ~3 yrs experience; age 25.', compactMember: false },
      NC: { agency: 'NC Private Protective Services Board', agencyUrl: 'https://www.ncdps.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      ND: { agency: 'North Dakota Private Investigation & Security Board', agencyUrl: 'https://www.pisb.nd.gov', fee: 'Verify', note: 'Written exam; experience required.', compactMember: false },
      OH: { agency: 'Ohio DPS – Private Security', agencyUrl: 'https://www.ohio.gov', fee: 'Verify', note: 'Agency-level licensing; experience + bond.', compactMember: false },
      OK: { agency: 'Oklahoma CLEET – Private Investigator', agencyUrl: 'https://oklahoma.gov/cleet', fee: 'Verify', note: 'State PI license.', compactMember: false },
      OR: { agency: 'Oregon DPSST – Private Investigator', agencyUrl: 'https://www.oregon.gov/dpsst', fee: 'Verify', note: 'Low/no experience path via training.', compactMember: false },
      PA: { agency: 'Pennsylvania county-level PI licensing (courts)', agencyUrl: 'https://www.pa.gov', fee: 'Verify', note: 'Licensed at county level through courts.', compactMember: false },
      RI: { agency: 'Rhode Island DPS – Private Detective', agencyUrl: 'https://www.ri.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      SC: { agency: 'SLED – Private Investigator Licensing', agencyUrl: 'https://www.sled.sc.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      TN: { agency: 'Tennessee Private Investigation & Polygraph Commission', agencyUrl: 'https://www.tn.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      TX: { agency: 'Texas DPS – Private Security Bureau (PI)', agencyUrl: 'https://www.dps.texas.gov', fee: 'Verify', note: 'Managerial roles may require exam; experience + bond.', compactMember: false },
      UT: { agency: 'Utah DOPL – Private Investigator', agencyUrl: 'https://dopl.utah.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      VT: { agency: 'Vermont DPS – PI Licensing', agencyUrl: 'https://www.vermont.gov', fee: 'Verify', note: 'No exam/no bond path available.', compactMember: false },
      VA: { agency: 'Virginia DCJS – Private Investigator', agencyUrl: 'https://www.dcjs.virginia.gov', fee: 'Verify', note: 'Low experience path via training.', compactMember: false },
      WA: { agency: 'Washington DOL – Private Investigator', agencyUrl: 'https://dol.wa.gov', fee: 'Verify', note: 'State PI license.', compactMember: false },
      WV: { agency: 'West Virginia PI Licensing', agencyUrl: 'https://sos.wv.gov', fee: 'Verify', note: 'Experience + bond; no exam.', compactMember: false },
      WI: { agency: 'Wisconsin DSPS – Private Detective', agencyUrl: 'https://dsps.wi.gov', fee: 'Verify', note: 'Written exam; experience required.', compactMember: false }
    }
  },

  /* ============================================================
     5) CONCEALED CARRY — all 51 jurisdictions. Classification
     (2026): 29 permitless, 15 shall-issue, 6 may-issue strict
     (CA, HI, MD, MA, NJ, NY) + DC restrictive. No national compact;
     reciprocity is bilateral.
     ============================================================ */
  {
    key: 'concealed-carry',
    name: 'Concealed Carry Permit / License',
    category: 'Firearms',
    group: 'State Permit',
    type: 'permit',
    blurb: 'State concealed-carry weapon (CCW) permit or license; 29 states are permitless while others issue shall-issue or may-issue.',
    overview: "Concealed carry of a handgun in the United States is regulated at the state level, producing three broad regimes as of 2026. Twenty-nine states are permitless (constitutional) carry, allowing most law-abiding adults to carry concealed without a state permit — yet these states still issue optional permits that extend reciprocity and bypass NICS background checks. Fifteen states are shall-issue, where authorities must grant a permit if statutory criteria are met. Six states remain effectively may-issue after NYSRPA v. Bruen (2022): California, Hawaii, Maryland, Massachusetts, New Jersey, and New York, which impose discretionary “good cause”/character standards; the District of Columbia is similarly restrictive. Permit requirements differ sharply: shall-issue and may-issue states generally mandate training and a live-fire qualification, while permitless states do not. There is no federal concealed-carry compact; recognition of out-of-state permits is bilateral and varies — Utah, Arizona, and Texas non-resident permits are recognized most broadly (~38 states), while Hawaii recognizes very few.",
    eligibility: "Generally age 21 (18–20 in some permitless/shall-issue states post-Bruen), state resident or eligible non-resident, legally allowed to possess a firearm, no disqualifying felony/domestic-violence record, and (in shall/may-issue states) completed firearms training with live-fire qualification.",
    exam: {
      admin: 'State police / sheriff / local licensing authority',
      questions: 'No written exam; training course completion required in shall/may-issue states',
      time: 'N/A',
      pass: 'Course certificate + live-fire qualification',
      fee: 'Permit fee $20–$200; training separate',
      format: 'Firearms safety course + range qualification (where required)'
    },
    education: {
      hours: 'Shall/may-issue states: 4–16 hrs classroom + live-fire (e.g., CA 8–16 hrs; NY 16–18 hrs)',
      note: 'Permitless states require no training. Non-resident permits often require a certified course.'
    },
    prerequisites: 'Age, firearm eligibility, clean record. Shall/may-issue states add training + qualification. May-issue states add “good cause”/character review.',
    costBreakdown: {
      items: [
        { item: 'Application / permit fee', fee: '$20–$200 (varies by state)' },
        { item: 'Fingerprint/background', fee: '$0–$75' },
        { item: 'Training course (shall/may-issue)', fee: '$75–$250' },
        { item: 'Range fees / qualification', fee: '$20–$60' }
      ],
      total: 'Permitless: $0; shall/may-issue: $150–$500 all-in'
    },
    timeline: [
      { stage: 'Training & qualification (if required)', duration: '1 day – 2 weeks' },
      { stage: 'Apply (state police/sheriff)', duration: '1 day' },
      { stage: 'Background & processing', duration: '2–8 weeks (may-issue longer)' },
      { stage: 'Permit issuance (1–5 yrs)', duration: 'Ongoing' }
    ],
    route: [
      { title: 'Confirm eligibility', description: 'Age, residency, firearm eligibility, clean record.' },
      { title: 'Complete training (shall/may-issue)', description: 'Safety course + live-fire qualification.' },
      { title: 'Apply to issuing authority', description: 'State police or county sheriff.' },
      { title: 'Background & issuance', description: 'May-issue states add character/good-cause review.' }
    ],
    providersNote: 'Permits are issued by state police, the Department of Public Safety, or county sheriffs. Training is provided by state-certified instructors. Permitless states still offer optional permits through the same authorities.',
    faqs: [
      { q: 'What is permitless (constitutional) carry?', a: 'In 29 states, most law-abiding adults may carry concealed without a state permit. These states still issue optional permits that broaden reciprocity and waive NICS checks at purchase.' },
      { q: 'Which states are may-issue?', a: 'After NYSRPA v. Bruen (2022), six states remain effectively may-issue with discretionary standards: California, Hawaii, Maryland, Massachusetts, New Jersey, and New York; DC is similarly restrictive.' },
      { q: 'Do I need training?', a: 'Only in shall-issue and may-issue states (typically 4–16 classroom hours plus live-fire). Permitless states require no training.' },
      { q: 'Will my permit work in other states?', a: 'Recognition is bilateral, not a compact. Utah, Arizona, and Texas non-resident permits are accepted in ~38 states; Hawaii recognizes very few. Always check the destination state.' },
      { q: 'Is there a national concealed-carry permit?', a: 'No. There is no federal CCW license or interstate compact; each state sets its own recognition rules.' },
      { q: 'Can non-residents get a permit?', a: 'Many states (e.g., Utah, Arizona, Texas, Florida) issue non-resident permits specifically for broad reciprocity; others restrict to residents.' }
    ],
    reciprocity: {
      compact: null,
      note: 'No national concealed-carry compact exists; recognition of out-of-state permits is strictly bilateral. Utah, Arizona, and Texas non-resident permits enjoy the widest recognition (~38 states); Hawaii recognizes only a handful. Permitless states honor their own residents’ constitutional-carry rights but may or may not recognize foreign permits. Always verify current reciprocity with the destination state police before carrying. After NYSRPA v. Bruen (2022), may-issue states (CA, HI, MD, MA, NJ, NY) and DC retain discretionary standards.'
    },
    defaultAgency: 'State Police / Department of Public Safety / County Sheriff (varies)',
    sourceUrl: 'https://www.usconcealedcarry.com',
    verified: true,
    confidence: 'medium',
    states: {
      AL: { agency: 'Alabama Law Enforcement Agency (ALEA)', agencyUrl: 'https://www.alea.gov', fee: '$20–$40', note: 'Permitless carry (2022); optional permit available with training.', compactMember: false },
      AK: { agency: 'Alaska DPS – Concealed Handgun', agencyUrl: 'https://dps.alaska.gov', fee: 'N/A', note: 'Permitless carry; optional permit for reciprocity.', compactMember: false },
      AZ: { agency: 'Arizona DPS – CCW', agencyUrl: 'https://www.azdps.gov', fee: '$60', note: 'Permitless carry; non-resident permit widely recognized (~38 states).', compactMember: false },
      AR: { agency: 'Arkansas State Police – CCW', agencyUrl: 'https://www.asp.arkansas.gov', fee: '$142', note: 'Permitless carry; optional permit available.', compactMember: false },
      CA: { agency: 'California DOJ – CCW (county sheriff)', agencyUrl: 'https://oag.ca.gov', fee: '$100–$200', note: 'May-issue; 8–16 hrs training + live-fire; good-cause/character review.', compactMember: false },
      CO: { agency: 'Colorado Bureau of Investigation – CCW', agencyUrl: 'https://www.colorado.gov', fee: '$52–$100', note: 'Shall-issue; training required.', compactMember: false },
      CT: { agency: 'Connecticut DESPP – Permit to Carry', agencyUrl: 'https://portal.ct.gov/despp', fee: '$70', note: 'Shall-issue; 8-hr training + live-fire.', compactMember: false },
      DE: { agency: 'Delaware State Police – CCW', agencyUrl: 'https://dsp.delaware.gov', fee: '$65', note: 'Shall-issue; training required.', compactMember: false },
      DC: { agency: 'DC Metropolitan Police – CCW', agencyUrl: 'https://mpdc.dc.gov', fee: '$75', note: 'Restrictive/may-issue; training + qualification; limited reciprocity.', compactMember: false },
      FL: { agency: 'Florida Department of Agriculture – Licensing (CW)', agencyUrl: 'https://www.fdacs.gov', fee: '$97', note: 'Permitless carry (2025); optional non-resident permit available.', compactMember: false },
      GA: { agency: 'Georgia DPS – Weapons Carry', agencyUrl: 'https://dps.georgia.gov', fee: '$75', note: 'Permitless carry; optional permit available.', compactMember: false },
      HI: { agency: 'Hawaii Chiefs of Police – CCW', agencyUrl: 'https://www.hawaii.gov', fee: '$50', note: 'May-issue; training + qualification; recognizes very few out-of-state permits.', compactMember: false },
      ID: { agency: 'Idaho Sheriff – Enhanced CCW', agencyUrl: 'https://www.idaho.gov', fee: '$20', note: 'Permitless carry; enhanced permit for reciprocity.', compactMember: false },
      IL: { agency: 'Illinois State Police – CCL', agencyUrl: 'https://www.isp.illinois.gov', fee: '$150', note: 'Shall-issue; 16 hrs training + live-fire.', compactMember: false },
      IN: { agency: 'Indiana DPS – Handgun Permit', agencyUrl: 'https://www.in.gov', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false },
      IA: { agency: 'Iowa DPS – Permit to Carry', agencyUrl: 'https://dps.iowa.gov', fee: '$50', note: 'Permitless carry; optional permit available.', compactMember: false },
      KS: { agency: 'Kansas Attorney General – CCH', agencyUrl: 'https://ag.ks.gov', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false },
      KY: { agency: 'Kentucky State Police – CCDW', agencyUrl: 'https://kentuckystatepolice.org', fee: '$60', note: 'Permitless carry; optional permit available.', compactMember: false },
      LA: { agency: 'Louisiana DPS – Concealed Handgun', agencyUrl: 'https://www.lsp.org', fee: '$125', note: 'Permitless carry; optional permit available.', compactMember: false },
      ME: { agency: 'Maine DPS – Concealed Carry', agencyUrl: 'https://www.maine.gov/dps', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false },
      MD: { agency: 'Maryland State Police – Handgun Permit', agencyUrl: 'https://mdsp.maryland.gov', fee: '$75', note: 'May-issue; 16 hrs training + live-fire; good-cause review.', compactMember: false },
      MA: { agency: 'Massachusetts DPS – LTC', agencyUrl: 'https://www.mass.gov', fee: '$100', note: 'May-issue; training + live-fire; discretionary character review.', compactMember: false },
      MI: { agency: 'Michigan State Police – CPL', agencyUrl: 'https://www.michigan.gov', fee: '$100', note: 'Shall-issue; 8-hr training + live-fire.', compactMember: false },
      MN: { agency: 'Minnesota DPS – Permit to Carry', agencyUrl: 'https://dps.mn.gov', fee: '$100', note: 'Shall-issue; training required.', compactMember: false },
      MS: { agency: 'Mississippi DPS – Firearms Permit', agencyUrl: 'https://www.dps.ms.gov', fee: '$80', note: 'Permitless carry; optional permit available.', compactMember: false },
      MO: { agency: 'Missouri Sheriff – CCW', agencyUrl: 'https://www.mo.gov', fee: '$100', note: 'Permitless carry; optional permit available.', compactMember: false },
      MT: { agency: 'Montana DOJ – Concealed Weapons', agencyUrl: 'https://doj.mt.gov', fee: '$50', note: 'Permitless carry; optional permit available.', compactMember: false },
      NE: { agency: 'Nebraska State Patrol – CCW', agencyUrl: 'https://statepatrol.nebraska.gov', fee: '$100', note: 'Permitless carry; optional permit available.', compactMember: false },
      NV: { agency: 'Nevada DPS – CCW', agencyUrl: 'https://www.nv.gov', fee: '$100', note: 'Shall-issue; 8-hr course + live-fire.', compactMember: false },
      NH: { agency: 'New Hampshire DPS – Pistol/Revolver', agencyUrl: 'https://www.nh.gov', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false },
      NJ: { agency: 'New Jersey SP – Firearms Permit', agencyUrl: 'https://www.nj.gov', fee: '$50', note: 'May-issue; training + live-fire; justifiable-need review.', compactMember: false },
      NM: { agency: 'New Mexico DPS – CCW', agencyUrl: 'https://www.dps.nm.gov', fee: '$56', note: 'Shall-issue; 4–15 hrs training + live-fire.', compactMember: false },
      NY: { agency: 'NY State Police / county – CCW', agencyUrl: 'https://www.criminaljustice.ny.gov', fee: '$0–$85', note: 'May-issue; 16–18 hrs training + live-fire; character/good-cause review.', compactMember: false },
      NC: { agency: 'North Carolina Sheriff – Concealed Carry', agencyUrl: 'https://www.ncdps.gov', fee: '$90', note: 'Shall-issue; 8-hr course + live-fire.', compactMember: false },
      ND: { agency: 'North Dakota DPS – Class 1/2', agencyUrl: 'https://www.nd.gov', fee: '$60', note: 'Permitless carry; optional permits (Class 1/2) for reciprocity.', compactMember: false },
      OH: { agency: 'Ohio DPS – Concealed Handgun', agencyUrl: 'https://www.ohio.gov', fee: '$67', note: 'Permitless carry; optional permit available.', compactMember: false },
      OK: { agency: 'Oklahoma State Bureau of Investigation – SDA', agencyUrl: 'https://www.ok.gov', fee: '$100', note: 'Permitless carry; optional permit available.', compactMember: false },
      OR: { agency: 'Oregon DPSST / county – CHL', agencyUrl: 'https://www.oregon.gov/dpsst', fee: '$65', note: 'Shall-issue; training required.', compactMember: false },
      PA: { agency: 'Pennsylvania Sheriff – LTCF', agencyUrl: 'https://www.pa.gov', fee: '$20', note: 'Shall-issue; no training required.', compactMember: false },
      RI: { agency: 'Rhode Island DPS – Carry Permit', agencyUrl: 'https://www.ri.gov', fee: '$40', note: 'Shall-issue; training required.', compactMember: false },
      SC: { agency: 'South Carolina DPS – Concealed Weapon', agencyUrl: 'https://www.sled.sc.gov', fee: '$50', note: 'Permitless carry (2024); optional permit available.', compactMember: false },
      SD: { agency: 'South Dakota Sheriff – Concealed Pistol', agencyUrl: 'https://dps.sd.gov', fee: '$10', note: 'Permitless carry; optional permit available.', compactMember: false },
      TN: { agency: 'Tennessee DPS – Handgun Carry', agencyUrl: 'https://www.tn.gov', fee: '$65', note: 'Permitless carry; optional enhanced permit for reciprocity.', compactMember: false },
      TX: { agency: 'Texas DPS – LTC', agencyUrl: 'https://www.dps.texas.gov', fee: '$40', note: 'Permitless carry; non-resident LTC widely recognized (~38 states).', compactMember: false },
      UT: { agency: 'Utah DPS – Concealed Firearm', agencyUrl: 'https://bci.utah.gov', fee: '$60', note: 'Shall-issue; non-resident permit recognized most broadly (~38 states).', compactMember: false },
      VT: { agency: 'Vermont – no permit required', agencyUrl: 'https://www.vermont.gov', fee: 'N/A', note: 'Constitutional carry; no permit system.', compactMember: false },
      VA: { agency: 'Virginia State Police – Resident Carry', agencyUrl: 'https://www.vsp.virginia.gov', fee: '$50', note: 'Shall-issue; training required.', compactMember: false },
      WA: { agency: 'Washington DOL / DPS – CPL', agencyUrl: 'https://dol.wa.gov', fee: '$36', note: 'Shall-issue; training required.', compactMember: false },
      WV: { agency: 'West Virginia DPS – Concealed Carry', agencyUrl: 'https://www.wv.gov', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false },
      WI: { agency: 'Wisconsin DOJ – CCW', agencyUrl: 'https://www.wilenet.org', fee: '$40', note: 'Shall-issue; 4-hr course + live-fire.', compactMember: false },
      WY: { agency: 'Wyoming DPS – Concealed Firearm', agencyUrl: 'https://wyoleo.org', fee: 'N/A', note: 'Permitless carry; optional permit available.', compactMember: false }
    }
  }
];
