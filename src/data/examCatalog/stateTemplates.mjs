// State-multiplied exam templates.
//
// Everything in this file is expanded across all 50 states + DC by
// `index.mjs`, producing one exam entry (and therefore one page) per
// jurisdiction. Only credentials that are genuinely issued and examined
// state-by-state belong here — national credentials live in ./national/.
//
// Placeholders inside patterns:
//   {state}  -> state slug   (e.g. "north-carolina")
//   {State}  -> state name   (e.g. "North Carolina")
//   {CODE}   -> state code   (e.g. "NC")
//
// `skip`      : state codes where the credential does not exist at all.
// `replacedBy`: state code -> slug of an already-written full page in
//               src/data/credentials.ts, so we never publish a duplicate.

export const stateTemplates = [
  // ─────────────────────────── Real Estate ───────────────────────────
  {
    key: 'real-estate-salesperson',
    slug: '{state}-real-estate-salesperson-license',
    name: '{State} Real Estate Salesperson License',
    short: '{CODE} RE Salesperson',
    category: 'real-estate',
    group: 'Real Estate Licensing',
    type: 'License',
    blurb: 'Pre-licensing education, background check and state examination required to sell real estate under a sponsoring broker in {State}.',
    aka: ['{State} real estate agent license', '{State} realtor exam'],
    replacedBy: { TX: 'texas-real-estate-license', CA: 'california-real-estate-license', FL: 'florida-real-estate-license' }
  },
  {
    key: 'real-estate-broker',
    slug: '{state}-real-estate-broker-license',
    name: '{State} Real Estate Broker License',
    short: '{CODE} RE Broker',
    category: 'real-estate',
    group: 'Real Estate Licensing',
    type: 'License',
    blurb: 'Advanced licence allowing you to operate your own brokerage and supervise agents in {State}, with extra education and experience requirements.',
    aka: ['{State} broker exam']
  },
  {
    key: 'real-estate-appraiser',
    slug: '{state}-certified-residential-appraiser',
    name: '{State} Certified Residential Appraiser License',
    short: '{CODE} Appraiser',
    category: 'real-estate',
    group: 'Appraisal & Valuation',
    type: 'License',
    blurb: 'AQB-compliant coursework, supervised experience hours and the national appraiser exam as administered for licensure in {State}.',
    aka: ['{State} appraisal license', '{State} appraiser exam']
  },
  {
    key: 'home-inspector',
    slug: '{state}-home-inspector-license',
    name: '{State} Home Inspector License',
    short: '{CODE} Home Inspector',
    category: 'real-estate',
    group: 'Inspection',
    type: 'License',
    blurb: 'Requirements, approved training and examination pathway for practising as a residential home inspector in {State}.',
    aka: ['{State} NHIE requirements']
  },
  {
    key: 'mortgage-loan-originator',
    slug: '{state}-mortgage-loan-originator-license',
    name: '{State} Mortgage Loan Originator License',
    short: '{CODE} MLO',
    category: 'finance-securities',
    group: 'Mortgage Licensing',
    type: 'License',
    blurb: 'NMLS pre-licensure hours, the SAFE MLO test and any additional state-specific education needed to originate mortgages in {State}.',
    aka: ['{State} NMLS license', '{State} SAFE MLO']
  },
  {
    key: 'auctioneer',
    slug: '{state}-auctioneer-license',
    name: '{State} Auctioneer License',
    short: '{CODE} Auctioneer',
    category: 'real-estate',
    group: 'Specialty Property Licences',
    type: 'License',
    blurb: 'Apprenticeship, auction-school hours and the written examination required to conduct auctions legally in {State}.',
    aka: ['{State} auction license']
  },

  // ──────────────────────────── Insurance ────────────────────────────
  {
    key: 'insurance-life-health',
    slug: '{state}-life-and-health-insurance-license',
    name: '{State} Life & Health Insurance Producer License',
    short: '{CODE} Life & Health',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'Pre-licensing hours and the state producer examination needed to sell life, annuity and health products in {State}.',
    aka: ['{State} life insurance exam', '{State} health insurance license']
  },
  {
    key: 'insurance-property-casualty',
    slug: '{state}-property-and-casualty-insurance-license',
    name: '{State} Property & Casualty Insurance Producer License',
    short: '{CODE} P&C',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'State examination covering personal and commercial property, liability and auto lines for insurance producers in {State}.',
    aka: ['{State} P&C exam', '{State} casualty insurance license']
  },
  {
    key: 'insurance-personal-lines',
    slug: '{state}-personal-lines-insurance-license',
    name: '{State} Personal Lines Insurance Producer License',
    short: '{CODE} Personal Lines',
    category: 'insurance',
    group: 'Producer Licensing',
    type: 'License',
    blurb: 'Limited property and casualty licence covering homeowners, personal auto and umbrella policies for individual clients in {State}.',
    aka: ['{State} personal lines exam']
  },
  {
    key: 'insurance-adjuster',
    slug: '{state}-insurance-adjuster-license',
    name: '{State} Insurance Adjuster License',
    short: '{CODE} Adjuster',
    category: 'insurance',
    group: 'Claims & Adjusting',
    type: 'License',
    blurb: 'Requirements and examination for independent and company claims adjusters handling losses in {State}, including reciprocity rules.',
    aka: ['{State} claims adjuster exam', '{State} all-lines adjuster']
  },
  {
    key: 'insurance-public-adjuster',
    slug: '{state}-public-adjuster-license',
    name: '{State} Public Adjuster License',
    short: '{CODE} Public Adjuster',
    category: 'insurance',
    group: 'Claims & Adjusting',
    type: 'License',
    blurb: 'Licence allowing you to represent policyholders rather than insurers when negotiating claims in {State}, with bonding requirements.',
    aka: ['{State} public adjusting license']
  },
  {
    key: 'title-insurance-producer',
    slug: '{state}-title-insurance-license',
    name: '{State} Title Insurance Producer License',
    short: '{CODE} Title Producer',
    category: 'insurance',
    group: 'Specialty Lines',
    type: 'License',
    blurb: 'Licensing pathway for title agents and closing officers handling real property title insurance transactions in {State}.',
    aka: ['{State} title agent license']
  },

  // ────────────────────────── Skilled Trades ─────────────────────────
  {
    key: 'general-contractor',
    slug: '{state}-general-contractor-license',
    name: '{State} General Contractor License',
    short: '{CODE} GC',
    category: 'trades',
    group: 'Contractor Licensing',
    type: 'License',
    blurb: 'Trade, business and law examinations plus bonding and insurance thresholds required to contract construction work in {State}.',
    aka: ['{State} contractor exam', '{State} builder license']
  },
  {
    key: 'contractor-business-law',
    slug: '{state}-contractor-business-and-law-exam',
    name: '{State} Contractor Business & Law Exam',
    short: '{CODE} Business & Law',
    category: 'trades',
    group: 'Contractor Licensing',
    type: 'Exam',
    blurb: 'The business, finance and construction-law portion every contractor candidate must pass alongside their trade exam in {State}.',
    aka: ['{State} business and law test']
  },
  {
    key: 'journeyman-electrician',
    slug: '{state}-journeyman-electrician-license',
    name: '{State} Journeyman Electrician License',
    short: '{CODE} Journeyman Electrician',
    category: 'trades',
    group: 'Electrical',
    type: 'License',
    blurb: 'Apprenticeship hours and the National Electrical Code based examination required to work as a journeyman electrician in {State}.',
    aka: ['{State} electrician exam', '{State} NEC test']
  },
  {
    key: 'master-electrician',
    slug: '{state}-master-electrician-license',
    name: '{State} Master Electrician License',
    short: '{CODE} Master Electrician',
    category: 'trades',
    group: 'Electrical',
    type: 'License',
    blurb: 'Senior electrical licence permitting design, permit pulling and supervision of journeymen, with additional experience and exam depth in {State}.',
    aka: ['{State} master electrical license']
  },
  {
    key: 'journeyman-plumber',
    slug: '{state}-journeyman-plumber-license',
    name: '{State} Journeyman Plumber License',
    short: '{CODE} Journeyman Plumber',
    category: 'trades',
    group: 'Plumbing',
    type: 'License',
    blurb: 'Documented apprenticeship and plumbing-code examination required before working unsupervised as a plumber in {State}.',
    aka: ['{State} plumbing exam']
  },
  {
    key: 'master-plumber',
    slug: '{state}-master-plumber-license',
    name: '{State} Master Plumber License',
    short: '{CODE} Master Plumber',
    category: 'trades',
    group: 'Plumbing',
    type: 'License',
    blurb: 'Top-tier plumbing licence allowing you to run a plumbing business, pull permits and supervise journeymen in {State}.',
    aka: ['{State} master plumbing license']
  },
  {
    key: 'hvac-contractor',
    slug: '{state}-hvac-contractor-license',
    name: '{State} HVAC Contractor License',
    short: '{CODE} HVAC',
    category: 'trades',
    group: 'Mechanical & HVAC',
    type: 'License',
    blurb: 'Mechanical trade licence covering heating, ventilation, air conditioning and refrigeration work performed for hire in {State}.',
    aka: ['{State} mechanical contractor license', '{State} HVAC exam']
  },

  // ───────────────────────── Beauty & Wellness ───────────────────────
  {
    key: 'cosmetologist',
    slug: '{state}-cosmetology-license',
    name: '{State} Cosmetology License',
    short: '{CODE} Cosmetology',
    category: 'beauty-wellness',
    group: 'Cosmetology & Barbering',
    type: 'License',
    blurb: 'Required training hours plus the written theory and practical examinations set by the board of cosmetology in {State}.',
    aka: ['{State} cosmetologist exam', '{State} state board cosmetology']
  },
  {
    key: 'barber',
    slug: '{state}-barber-license',
    name: '{State} Barber License',
    short: '{CODE} Barber',
    category: 'beauty-wellness',
    group: 'Cosmetology & Barbering',
    type: 'License',
    blurb: 'Barbering school hours, written theory test and hands-on practical assessment required to cut hair professionally in {State}.',
    aka: ['{State} barbering exam']
  },
  {
    key: 'esthetician',
    slug: '{state}-esthetician-license',
    name: '{State} Esthetician License',
    short: '{CODE} Esthetician',
    category: 'beauty-wellness',
    group: 'Skin & Nail Care',
    type: 'License',
    blurb: 'Skin-care training hours and the state board examinations needed to perform facials, waxing and related services in {State}.',
    aka: ['{State} skin care license', '{State} esthetics exam']
  },
  {
    key: 'nail-technician',
    slug: '{state}-nail-technician-license',
    name: '{State} Nail Technician License',
    short: '{CODE} Nail Tech',
    category: 'beauty-wellness',
    group: 'Skin & Nail Care',
    type: 'License',
    blurb: 'Manicuring programme hours plus written and practical testing required to work as a licensed nail technician in {State}.',
    aka: ['{State} manicurist license', '{State} nail tech exam']
  },
  {
    key: 'cosmetology-instructor',
    slug: '{state}-cosmetology-instructor-license',
    name: '{State} Cosmetology Instructor License',
    short: '{CODE} Instructor',
    category: 'beauty-wellness',
    group: 'Instructor Credentials',
    type: 'License',
    blurb: 'Teaching credential for licensed cosmetologists who want to instruct at a beauty school in {State}, with its own methodology exam.',
    aka: ['{State} beauty instructor license']
  },
  {
    key: 'massage-therapist',
    slug: '{state}-massage-therapy-license',
    name: '{State} Massage Therapy License',
    short: '{CODE} Massage',
    category: 'beauty-wellness',
    group: 'Bodywork & Wellness',
    type: 'License',
    blurb: 'Programme hours, MBLEx or state examination and background screening required to practise massage therapy in {State}.',
    aka: ['{State} LMT license', '{State} MBLEx requirements']
  },

  // ───────────────────────────── Legal ───────────────────────────────
  {
    key: 'bar-exam',
    slug: '{state}-bar-exam',
    name: '{State} Bar Exam',
    short: '{CODE} Bar',
    category: 'legal',
    group: 'Bar Admission',
    type: 'Exam',
    blurb: 'Format, scoring, character-and-fitness process and admission requirements for the attorney licensing examination in {State}.',
    aka: ['{State} attorney licensing exam', '{State} bar admission']
  },
  {
    key: 'notary-public',
    slug: '{state}-notary-public-commission',
    name: '{State} Notary Public Commission',
    short: '{CODE} Notary',
    category: 'legal',
    group: 'Notary & Signing',
    type: 'License',
    blurb: 'Application, bonding, training and (where required) examination steps to be commissioned as a notary public in {State}.',
    aka: ['{State} notary exam', '{State} notary license']
  },

  // ──────────────────────────── Education ────────────────────────────
  {
    key: 'teacher-certification',
    slug: '{state}-teacher-certification-exams',
    name: '{State} Teacher Certification Exams',
    short: '{CODE} Teacher Cert',
    category: 'education-teaching',
    group: 'State Teacher Licensure',
    type: 'Exam',
    blurb: 'Which basic-skills, subject-area and pedagogy tests {State} requires for an initial teaching licence, and how they are scored.',
    aka: ['{State} teaching license test', '{State} educator certification']
  },

  // ────────────────────────── Transportation ─────────────────────────
  {
    key: 'cdl',
    slug: '{state}-cdl-commercial-drivers-license',
    name: '{State} Commercial Driver\u2019s License (CDL)',
    short: '{CODE} CDL',
    category: 'transportation',
    group: 'Commercial Driving',
    type: 'License',
    blurb: 'ELDT training, knowledge tests, endorsements and the road skills examination needed for a commercial driver\u2019s licence in {State}.',
    aka: ['{State} CDL test', '{State} truck driving license']
  },
  {
    key: 'drivers-permit',
    slug: '{state}-drivers-license-written-test',
    name: '{State} Driver\u2019s License Written Test',
    short: '{CODE} Permit Test',
    category: 'transportation',
    group: 'Passenger Driving',
    type: 'Exam',
    blurb: 'Question count, passing score and manual coverage for the learner permit and driver licence knowledge test in {State}.',
    aka: ['{State} permit test', '{State} DMV written exam']
  },
  {
    key: 'motorcycle-license',
    slug: '{state}-motorcycle-license-test',
    name: '{State} Motorcycle License Test',
    short: '{CODE} Motorcycle',
    category: 'transportation',
    group: 'Passenger Driving',
    type: 'Exam',
    blurb: 'Motorcycle knowledge test, rider-course waiver options and skills evaluation required for a motorcycle endorsement in {State}.',
    aka: ['{State} motorcycle permit test', '{State} M endorsement']
  },

  // ───────────────────────── Public Safety ───────────────────────────
  {
    key: 'police-officer',
    slug: '{state}-police-officer-exam',
    name: '{State} Police Officer Exam',
    short: '{CODE} Police Exam',
    category: 'public-safety',
    group: 'Law Enforcement Entry',
    type: 'Exam',
    blurb: 'Written entrance test, physical ability standards and academy certification route used by law enforcement agencies in {State}.',
    aka: ['{State} POST exam', '{State} law enforcement test']
  },
  {
    key: 'firefighter',
    slug: '{state}-firefighter-exam',
    name: '{State} Firefighter Exam',
    short: '{CODE} Firefighter',
    category: 'public-safety',
    group: 'Fire Service Entry',
    type: 'Exam',
    blurb: 'Entry-level written examination, CPAT requirement and Firefighter I/II certification pathway for fire departments in {State}.',
    aka: ['{State} fire department test', '{State} firefighter certification']
  },

  // ───────────────────────────── Health ──────────────────────────────
  {
    key: 'rn-licensure',
    slug: '{state}-registered-nurse-license',
    name: '{State} Registered Nurse License',
    short: '{CODE} RN License',
    category: 'healthcare-clinical',
    group: 'State Nursing Licensure',
    type: 'License',
    blurb: 'Board of nursing application, NCLEX-RN authorisation, background check and compact-state status for RN licensure in {State}.',
    aka: ['{State} NCLEX requirements', '{State} nursing license']
  },
  {
    key: 'cna-certification',
    slug: '{state}-certified-nursing-assistant-certification',
    name: '{State} Certified Nursing Assistant Certification',
    short: '{CODE} CNA',
    category: 'allied-health',
    group: 'Nurse Aide Registry',
    type: 'Certification',
    blurb: 'Approved training hours plus the written and skills competency evaluation required to join the nurse aide registry in {State}.',
    aka: ['{State} nurse aide exam', '{State} CNA test']
  },
  {
    key: 'pharmacy-technician',
    slug: '{state}-pharmacy-technician-registration',
    name: '{State} Pharmacy Technician Registration',
    short: '{CODE} Pharm Tech',
    category: 'allied-health',
    group: 'Pharmacy Support',
    type: 'License',
    blurb: 'Board of pharmacy registration rules, training expectations and whether PTCB or ExCPT certification is mandatory in {State}.',
    aka: ['{State} pharmacy tech license']
  },
  {
    key: 'emt-certification',
    slug: '{state}-emt-certification',
    name: '{State} EMT Certification',
    short: '{CODE} EMT',
    category: 'allied-health',
    group: 'Emergency Medical Services',
    type: 'Certification',
    blurb: 'Course approval, NREMT cognitive and psychomotor testing and state licensure steps for emergency medical technicians in {State}.',
    aka: ['{State} EMT license', '{State} paramedic certification']
  },

  // ──────────────────────── Food & Hospitality ───────────────────────
  {
    key: 'food-handler',
    slug: '{state}-food-handler-card',
    name: '{State} Food Handler Card',
    short: '{CODE} Food Handler',
    category: 'food-hospitality',
    group: 'Food Safety',
    type: 'Certification',
    blurb: 'Who needs a food handler permit in {State}, which providers are accepted, how long training takes and when it must be renewed.',
    aka: ['{State} food worker card', '{State} food safety certificate']
  },
  {
    key: 'food-manager',
    slug: '{state}-food-protection-manager-certification',
    name: '{State} Food Protection Manager Certification',
    short: '{CODE} Food Manager',
    category: 'food-hospitality',
    group: 'Food Safety',
    type: 'Certification',
    blurb: 'ANSI-accredited manager certification rules, approved exams and person-in-charge requirements for food establishments in {State}.',
    aka: ['{State} ServSafe manager', '{State} CFPM']
  },
  {
    key: 'alcohol-server',
    slug: '{state}-alcohol-server-certification',
    name: '{State} Alcohol Server Certification',
    short: '{CODE} Alcohol Server',
    category: 'food-hospitality',
    group: 'Responsible Beverage Service',
    type: 'Training',
    blurb: 'Responsible beverage service training rules, approved course providers and renewal periods for anyone serving alcohol in {State}.',
    aka: ['{State} bartending license', '{State} RBS training']
  },

  // ───────────────────────── Environmental ───────────────────────────
  {
    key: 'pesticide-applicator',
    slug: '{state}-pesticide-applicator-license',
    name: '{State} Pesticide Applicator License',
    short: '{CODE} Pesticide',
    category: 'environment',
    group: 'Pesticide & Agriculture',
    type: 'License',
    blurb: 'Core and category examinations, private versus commercial classification and recertification credits for applicators in {State}.',
    aka: ['{State} pesticide certification', '{State} applicator exam']
  },
  {
    key: 'water-operator',
    slug: '{state}-water-treatment-operator-certification',
    name: '{State} Water Treatment Operator Certification',
    short: '{CODE} Water Operator',
    category: 'environment',
    group: 'Water & Wastewater',
    type: 'Certification',
    blurb: 'Operator grade levels, experience substitution rules and examination content for drinking water treatment plants in {State}.',
    aka: ['{State} water operator exam']
  },
  {
    key: 'wastewater-operator',
    slug: '{state}-wastewater-operator-certification',
    name: '{State} Wastewater Operator Certification',
    short: '{CODE} Wastewater',
    category: 'environment',
    group: 'Water & Wastewater',
    type: 'Certification',
    blurb: 'Grade structure, prerequisites and testing schedule for wastewater treatment and collection system operators in {State}.',
    aka: ['{State} wastewater exam']
  },

  // ───────────────── Security, Investigation & Firearms ──────────────
  {
    key: 'security-guard',
    slug: '{state}-security-guard-license',
    name: '{State} Security Guard License',
    short: '{CODE} Security Guard',
    category: 'security-investigation',
    group: 'Private Security',
    type: 'License',
    blurb: 'Mandatory training hours, fingerprinting and armed versus unarmed endorsement rules for security officers in {State}.',
    aka: ['{State} guard card', '{State} security officer license']
  },
  {
    key: 'private-investigator',
    slug: '{state}-private-investigator-license',
    name: '{State} Private Investigator License',
    short: '{CODE} PI',
    category: 'security-investigation',
    group: 'Investigations',
    type: 'License',
    blurb: 'Experience requirements, written examination and bonding rules for obtaining a private investigator licence in {State}.',
    aka: ['{State} PI license', '{State} detective license']
  },
  {
    key: 'concealed-carry',
    slug: '{state}-concealed-carry-permit',
    name: '{State} Concealed Carry Permit',
    short: '{CODE} CCW',
    category: 'security-investigation',
    group: 'Firearms',
    type: 'License',
    blurb: 'Training curriculum, live-fire qualification, reciprocity and application process for a concealed carry permit in {State}.',
    aka: ['{State} CCW permit', '{State} concealed handgun license']
  },

  // ──────────────────────── Professional Boards ──────────────────────
  {
    key: 'professional-engineer',
    slug: '{state}-professional-engineer-licensure',
    name: '{State} Professional Engineer Licensure',
    short: '{CODE} PE Licensure',
    category: 'engineering-design',
    group: 'State Engineering Boards',
    type: 'License',
    blurb: 'How {State} handles FE and PE examinations, experience verification, comity licensure and any state-specific jurisprudence test.',
    aka: ['{State} PE license', '{State} engineering board']
  },
  {
    key: 'land-surveyor',
    slug: '{state}-professional-land-surveyor-licensure',
    name: '{State} Professional Land Surveyor Licensure',
    short: '{CODE} PLS',
    category: 'engineering-design',
    group: 'State Engineering Boards',
    type: 'License',
    blurb: 'FS and PS examination requirements plus the state-specific surveying law exam needed to practise land surveying in {State}.',
    aka: ['{State} surveyor license']
  },
  {
    key: 'cpa-licensure',
    slug: '{state}-cpa-license-requirements',
    name: '{State} CPA License Requirements',
    short: '{CODE} CPA',
    category: 'accounting',
    group: 'State CPA Boards',
    type: 'License',
    blurb: 'Education hours, experience, ethics exam and CPE rules {State} applies on top of the national Uniform CPA Examination.',
    aka: ['{State} CPA exam requirements', '{State} board of accountancy']
  },
  {
    key: 'funeral-director',
    slug: '{state}-funeral-director-license',
    name: '{State} Funeral Director License',
    short: '{CODE} Funeral Director',
    category: 'personal-services',
    group: 'Funeral Service',
    type: 'License',
    blurb: 'Mortuary science education, apprenticeship, National Board Examination and state law exam required for funeral directors in {State}.',
    aka: ['{State} mortician license', '{State} embalmer license']
  },
  {
    key: 'nursing-home-administrator',
    slug: '{state}-nursing-home-administrator-license',
    name: '{State} Nursing Home Administrator License',
    short: '{CODE} NHA',
    category: 'personal-services',
    group: 'Long-Term Care Administration',
    type: 'License',
    blurb: 'NAB core and line-of-service examinations plus the state jurisprudence test and internship hours required in {State}.',
    aka: ['{State} NHA license', '{State} LNHA']
  }
];

export default stateTemplates;
