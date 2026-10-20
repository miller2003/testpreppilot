export default { key: 'private-investigator', compiledOn: '2026-10-20', states: {

SC: {
  agency: "South Carolina Law Enforcement Division (SLED), Regulatory Services",
  agencyUrl: "https://www.sled.sc.gov",
  experience: "At least three years of experience as a private investigator employed by a licensed private investigation agency, as an investigator for a law firm, government agency, private corporation, or nonprofit organization, or as a sworn officer with a federal, state, county, or municipal law enforcement agency (S.C. Code Ann. Section 40-18-70(E)). A criminal justice degree does not substitute for the three years under the statute.",
  eligibility: { minAge: 21, citizenship: "US citizen", education: "High school diploma or equivalent", other: "No felony or crime of moral turpitude conviction, good moral character, no unlawful drug use, honorable military discharge if applicable. Employee registration (working under a licensed agency) requires age 18 instead of 21 and has no minimum experience." },
  background: { method: "Two complete sets of fingerprint cards submitted with the application; SLED conducts a background investigation", fee: "Included in license fee; no separate fingerprint fee published", disqualifiers: "Felony convictions and crimes of moral turpitude are disqualifying", sourceUrl: "https://www.scstatehouse.gov/code/t40c018.php" },
  fees: [
    { item: "Private investigation business license (annual)", fee: "$350", sourceUrl: "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf" },
    { item: "Private investigator employee registration (annual)", fee: "$350", sourceUrl: "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408" },
    { item: "Replacement registration card", fee: "$20", sourceUrl: "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408" },
    { item: "Surety bond", fee: "$10,000 bond posted with SLED (about $100-$300 annual premium)", sourceUrl: "https://www.scstatehouse.gov/code/t40c018.php" }
  ],
  application: { portal: "SLED paper application by mail", portalUrl: "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf", steps: ["Complete the SLED application and have it signed and notarized (partnerships require an application from every partner; corporations designate a qualifying officer in writing).", "Attach two complete fingerprint card sets, a recent digital photograph, DD-214 if you served in the military, notarized Form PD/PS-9, a Disclosure of Principal(s) form, and a judgment statement affidavit or clerk-of-court certification.", "Post a $10,000 surety bond with SLED on the approved form and include a sample client contract for SLED approval.", "Pay the $350 annual license fee by cashier's check, money order, or company check payable to SLED; personal checks and cash are not accepted.", "Mail the packet to SLED Regulatory Services, P.O. Box 21398, Columbia, SC 29221-1398. SLED does not publish a processing timeline.", "No written licensing examination is required in South Carolina."], processingTime: "Not published; SLED reviews competency, integrity, and qualifications after receiving the complete packet", sourceUrl: "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf" },
  renewal: { cycle: "1 year", ce: "6 hours annually, or 12 hours in every 24-month period", fee: "$350", late: "Renewal applications must reach SLED 30 to 60 days before expiration; a lapsed license invalidates the holder's authority to work", sourceUrl: "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$51,530", p25: "$40,140", p75: "$73,430", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=SC" },
  localNuance: "SLED issues two separate credentials: a PI employee registration for people working under a licensed agency (age 18+, no experience minimum) and a PI business license for agency owners (age 21+, three years of experience). Licensed investigators must use SLED-approved written client contracts describing services, fees, and report delivery, and keep contract records.",
  recentChanges: [
    { year: 2025, change: "House Bill 4141, introduced March 5, 2025, would add three years of experience as an investigator or in a role with investigation duties in the US Armed Forces to the qualifying experience list under Section 40-18-70(E). The bill remained in committee as of the 2025-2026 session.", sourceUrl: "https://www.scstatehouse.gov/sess126_2025-2026/bills/4141.htm" }
  ],
  stateFaqs: [
    { q: "Does South Carolina require a private investigator exam?", a: "No. SLED does not administer a written licensing examination for private investigators or investigation businesses. Licensure turns on the experience, background, bond, and application requirements in S.C. Code Section 40-18-70." },
    { q: "How much does a South Carolina PI license cost?", a: "Both the private investigation business license and the PI employee registration cost $350 per year, non-refundable. Applicants must also post a $10,000 surety bond with SLED, which typically costs about $100 to $300 per year in premium." },
    { q: "What experience do I need to open my own PI agency in South Carolina?", a: "Three years of qualifying investigative experience: employment by a licensed PI agency, investigative work for a law firm, government agency, corporation, or nonprofit, or service as a sworn law enforcement officer. The statute provides no education-based substitute for the three years." },
    { q: "Is continuing education mandatory for South Carolina private investigators?", a: "Yes. Renewal packets must include documentation of 6 hours of continuing education annually, or 12 hours of credit in every 24-month period, per SLED's renewal requirements." },
    { q: "Can I work as an investigator before my registration is approved?", a: "While a registration application is pending, a person may not perform investigative duties unless accompanied by a registered private investigator. Registration certificates expire when employment ends and are not transferable between employers." }
  ],
  sources: [
    { label: "SLED -- Private Investigation Business License Renewal Requirements (PDF)", url: "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf", checkedOn: "2026-10" },
    { label: "South Carolina Code Title 40, Chapter 18 -- Private Security and Investigation Agencies", url: "https://www.scstatehouse.gov/code/t40c018.php", checkedOn: "2026-10" },
    { label: "SC Code of Regulations 73-408 -- License and Registration Period; Fees", url: "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408", checkedOn: "2026-10" },
    { label: "South Carolina General Assembly -- H.4141 (2025-2026)", url: "https://www.scstatehouse.gov/sess126_2025-2026/bills/4141.htm", checkedOn: "2026-10" }
  ]
},

TN: {
  agency: "Tennessee Department of Commerce and Insurance -- Private Investigation Program (Private Investigation and Polygraph Commission rules)",
  agencyUrl: "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html",
  exam: {
    vendor: "PSI",
    vendorUrl: "https://test-takers.psiexams.com/tnpi",
    parts: [ { name: "Tennessee laws and rules", questions: "60 scored items", time: "Shared 120-minute total", pass: "70% overall" },
             { name: "Practical knowledge", questions: "40 scored items", time: "Shared 120-minute total", pass: "70% overall" } ],
    fee: "$140",
    practical: null,
    languages: ["English"],
    sourceUrl: "https://www.tn.gov/commerce/regboards/pi/license/psi.html", sourceNote: "Tennessee Private Investigator and Polygraph Examinations Candidate Information Bulletin; exam is closed-book and computer-administered at PSI centers"
  },
  experience: "2,000 hours of compensated, verifiable investigative experience, or one year of applicable related experience or education in a related area of study approved by the Commissioner (T.C.A. Section 62-26-206). Applicants without the hours may apply for apprentice status limited to 6 months, sponsored by a licensed investigative company.",
  eligibility: { minAge: 21, citizenship: "US citizen or resident alien", education: "No fixed degree requirement; related education can substitute for part of the experience requirement", other: "Good moral character; no court declaration of mental incompetence; no habitual drunkenness or narcotics addiction or dependence; every PI must be affiliated with a licensed Tennessee investigations company or hold a company license" },
  background: { method: "Fingerprint cards or electronic prints submitted for TBI and FBI criminal history processing", fee: "Paid to the fingerprint vendor and TBI/FBI; amount not set by TDCI", disqualifiers: "Statutory character and fitness grounds under T.C.A. Title 62, Chapter 26", sourceUrl: "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html" },
  fees: [
    { item: "Application (private investigator)", fee: "$150", sourceUrl: "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11" },
    { item: "Private investigator license (initial)", fee: "$100", sourceUrl: "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11" },
    { item: "Examination (PSI)", fee: "$140", sourceUrl: "https://www.tn.gov/commerce/regboards/pi/license/psi.html" },
    { item: "Investigation company application / license", fee: "$250-$1,000 application and $125-$500 license depending on number of investigators (sole practitioner through over five employees)", sourceUrl: "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11" }
  ],
  application: { portal: "TDCI licensing (CORE portal); PSI examination registration online", portalUrl: "https://www.tn.gov/commerce/regboards/pi/license/psi.html", steps: ["Meet the age, character, and experience requirements and secure affiliation with a licensed investigations company, or apply for your own company license.", "Register with PSI (online at test-takers.psiexams.com/tnpi or by phone at 855-746-8173) and pay the $140 exam fee; the fee is forfeited if you do not test within one year.", "Pass the 100-question Private Investigator examination at a PSI test center.", "Submit fingerprint cards for TBI and FBI processing.", "File the application through TDCI and pay the $150 application fee and $100 license fee.", "Applicants without 2,000 hours may seek 6-month apprentice status sponsored by a licensed company."], processingTime: "Not published; budget several weeks for TBI/FBI processing", sourceUrl: "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html" },
  renewal: { cycle: "2 years", ce: "12 hours of continuing education per two-year renewal period", fee: "$100", late: "Licenses may be renewed late within the grace period allowed by rule, with penalty fees added", sourceUrl: "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$49,360", p25: "$38,520", p75: "$99,170", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=TN" },
  localNuance: "Tennessee has no independent individual license: every private investigator must be employed by or be the qualifying person of a licensed investigations company. Company application and license fees scale with headcount ($250 application/$125 license for a sole practitioner up to $1,000/$500 for over five investigators).",
  recentChanges: [
    { year: 2026, change: "Tennessee ceased regulating polygraph examiners as of July 1, 2026; private investigator licensing under T.C.A. Title 62, Chapter 26 and Rule Chapter 1175-01 continues through TDCI.", sourceUrl: "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview" },
    { year: 2021, change: "Since July 1, 2021 the private investigation licensing program has been administered by the Department of Commerce and Insurance through its Detection Services Licensing Program rather than a standalone nine-member commission.", sourceUrl: "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview" }
  ],
  stateFaqs: [
    { q: "What is on the Tennessee private investigator exam?", a: "The PSI-administered exam has 100 scored questions in 120 minutes with a 70% passing score. About 60% covers Tennessee laws and rules (Title 62, Chapter 26 and Rule Chapter 1175-01) and 40% covers practical investigative knowledge." },
    { q: "How much does a Tennessee PI license cost in total?", a: "State-controlled fees are $150 for the application, $100 for the initial license, and $140 for the PSI exam, or $390 plus fingerprinting costs paid separately to the vendor and TBI/FBI. Renewal is $100 every two years." },
    { q: "Can I become a Tennessee PI without 2,000 hours of experience?", a: "The statute accepts one year of applicable related experience or approved related education as an alternative to 2,000 compensated hours. If you have neither, a licensed company can sponsor you for apprentice status, which is limited to 6 months." },
    { q: "Do I need my own company license to work as a Tennessee PI?", a: "No, but you must be affiliated with a licensed investigations company. Working independently requires an investigations company license, with fees scaled to the number of investigators employed ($250-$1,000 application, $125-$500 license)." },
    { q: "What continuing education does Tennessee require?", a: "Licensees complete 12 hours of continuing education in each two-year renewal cycle, and the biennial renewal fee is $100." }
  ],
  sources: [
    { label: "TDCI -- Private Investigation: Get a License", url: "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html", checkedOn: "2026-10" },
    { label: "TDCI -- Tennessee Private Investigator and Polygraph Examinations Candidate Information Bulletin (PSI)", url: "https://www.tn.gov/commerce/regboards/pi/license/psi.html", checkedOn: "2026-10" },
    { label: "Tennessee Rule 1175-01-.11 -- License Fees", url: "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11", checkedOn: "2026-10" },
    { label: "T.C.A. Section 62-26-206 experience and examination requirements (2009 amendment text)", url: "http://thepigroup.com/tennessee_private_investigator_license.html", checkedOn: "2026-10" },
    { label: "Tennessee PI program and exam blueprint overview", url: "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview", checkedOn: "2026-10" }
  ]
},

TX: {
  agency: "Texas Department of Public Safety -- Private Security Program (Private Security Bureau)",
  agencyUrl: "https://www.dps.texas.gov/node/610",
  exam: {
    vendor: "Texas DPS Private Security Program (state-written exam)",
    vendorUrl: "https://www.dps.texas.gov/node/610",
    parts: [ { name: "Written examination on the Private Security Act and Texas Administrative Code Chapter 35", questions: "Question count not published", time: "Not published", pass: "Not published" } ],
    fee: null,
    practical: null,
    languages: ["English"],
    sourceUrl: "https://www.dps.texas.gov/node/610", sourceNote: "The exam is open-book: applicants must bring a government-issued ID, a printed copy of the statutes and rules, and two sharpened pencils; the department does not supply the statutes at the test site"
  },
  experience: "Company representatives (qualifying managers) need one of: three consecutive years of investigation-related experience; a bachelor's degree in criminal justice or a related field; a bachelor's degree plus 12 months of investigation-related experience; an associate degree in criminal justice plus 24 months of investigation-related experience; or a specialized 200-hour university investigations course endorsed by the school's criminal justice department. Other education and experience combinations may be substituted at the department's discretion.",
  eligibility: { minAge: 18, citizenship: "US citizenship or legal residency", education: "See experience paths", other: "Individual investigators under Occ. Code Section 1702.113 must have no felony conviction, no Class A (or equivalent) misdemeanor, no Class B misdemeanor within the past 5 years, no pending felony or Class A misdemeanor charge, no dishonorable discharge, and no sex-offender registration requirement" },
  background: { method: "Fingerprint-based background check submitted through the DPS application process", fee: "Paid with the application per the current DPS fee schedule", disqualifiers: "Felony convictions, Class A misdemeanors, recent Class B misdemeanors, and sex-offender registration are disqualifying under Occ. Code Section 1702.113", sourceUrl: "https://www.tali.org/texas-licensing-reqs/" },
  fees: [
    { item: "Subscription fee (individual application or renewal)", fee: "$2-$3 depending on the base fee", sourceUrl: "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132" },
    { item: "Subscription fee (company application or renewal)", fee: "$7-$16 depending on the base fee", sourceUrl: "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132" }
  ],
  application: { portal: "Texas DPS Private Security Online Licensing System (TOPS self-service)", portalUrl: "https://tops.portal.texas.gov/psp-self-service/login/auth", steps: ["Decide your path: work as a registered individual investigator for a licensed investigations company, or qualify as the company representative of your own agency.", "If qualifying a company, document the required experience or education and register to take the DPS company representative examination.", "Study the Private Security Act (Occ. Code Chapter 1702) and Administrative Code Chapter 35, print them, and bring the printed copy plus ID and pencils to the open-book exam.", "Submit the application, fingerprint-based background check, and fees through the DPS online portal.", "Companies must show proof of liability insurance before approval.", "There is no standalone independent individual PI license: individuals must be affiliated with a licensed company."], processingTime: "Not published; DPS reviews complete applications in the order received", sourceUrl: "https://www.dps.texas.gov/node/610" },
  renewal: { cycle: "Individual investigator licenses renew every 2 years; company licenses renew annually", ce: null, fee: "Per the current DPS fee schedule", late: null, sourceUrl: "https://www.dps.texas.gov/node/610" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$51,810", p25: "$36,810", p75: "$72,660", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=TX" },
  localNuance: "Texas has no independent individual PI license. Everyone performing investigative work must be an owner of, or registered employee affiliated with, an investigations company licensed under Occupations Code Chapter 1702. Only the company representative (qualifying manager) takes the open-book DPS exam; registered employees do not.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.dps.texas.gov/node/610" }
  ],
  stateFaqs: [
    { q: "Do all Texas private investigators take an exam?", a: "No. Only each company representative (the qualifying manager) must pass the DPS written examination on the Private Security Act and Texas Administrative Code Chapter 35. The exam is open-book -- applicants bring their own printed copy of the statutes and rules -- and every company representative must pass it." },
    { q: "Can I work as an independent private investigator in Texas?", a: "No. Texas licenses investigations companies rather than independent individuals. You must either hold or work for a licensed investigations company as a registered individual investigator." },
    { q: "What qualifies someone as a Texas investigations company manager?", a: "Three consecutive years of investigation-related experience, or qualifying education: a criminal justice bachelor's degree, a bachelor's degree plus 12 months of experience, an associate degree in criminal justice plus 24 months, or a 200-hour university investigations course endorsed by the school's criminal justice department. The department may approve other combinations." },
    { q: "How often do Texas PI credentials renew?", a: "Individual investigator licenses renew every two years, while company licenses renew annually by the last day of the month of issuance, each with fees set in the DPS fee schedule." },
    { q: "Does Texas recognize other states' PI licenses?", a: "Texas has no reciprocity agreements for private investigators. However, investigative experience lawfully obtained in another state may count toward Texas experience qualifications when you apply." }
  ],
  sources: [
    { label: "Texas DPS -- Company Representative Experience and Examination Information", url: "https://www.dps.texas.gov/node/610", checkedOn: "2026-10" },
    { label: "Texas Administrative Code 35.132 -- Subscription Fees", url: "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132", checkedOn: "2026-10" },
    { label: "Texas Association of Licensed Investigators -- Texas Licensing Requirements (Occ. Code Ch. 1702 summary)", url: "https://www.tali.org/texas-licensing-reqs/", checkedOn: "2026-10" },
    { label: "Harbor Compliance -- Texas Private Investigator License", url: "https://www.harborcompliance.com/texas-private-investigator-license", checkedOn: "2026-10" }
  ]
},

UT: {
  agency: "Utah Department of Public Safety -- Bureau of Criminal Identification (BCI), Private Investigator Licensing",
  agencyUrl: "https://bci.utah.gov/",
  experience: "Registrant license: 2,000 hours of documented investigative experience verified on the BCI Verification of Investigative Experience form (applicants who held a Utah registrant or apprentice license on or before May 1, 2010 qualify with 2,000 hours; new agency applicants document 10,000 hours per the BCI application). Apprentice license: no experience requirement; apprentices work under direct supervision of a licensed agency.",
  eligibility: { minAge: 21, citizenship: "No explicit citizenship requirement published; applicants must be of good moral character", education: "No formal education requirement", other: "Age 18 for apprentice, 21 for registrant and agency licenses. Disqualifiers under Utah Code 53-9-108 include felony convictions, violent crime, dishonesty or fraud, moral turpitude within the past 10 years (unless expunged), weapons and protected-records offenses, current probation or parole, and outstanding warrants" },
  background: { method: "Fingerprint card submitted with the application; BCI offers fingerprint card services at its Taylorsville office", fee: "$15 per set of BCI fingerprint cards, increased to $20 effective July 1, 2025", disqualifiers: "Felony, violent crime, dishonesty/fraud, and moral-turpitude convictions under Utah Code 53-9-108; the Private Investigator Hearing and Licensure Board reviews each application", sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah" },
  fees: [
    { item: "Application (registrant or apprentice license)", fee: "$142 (includes the FBI fee)", sourceUrl: "https://www.suretybonds.com/guide/utah/private-investigator-license" },
    { item: "Application (agency license)", fee: "$242 (licenses one agency and its owner or primary investigator)", sourceUrl: "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-utah" },
    { item: "Renewal (registrant or apprentice)", fee: "$65", sourceUrl: "https://www.suretybonds.com/guide/utah/private-investigator-license" },
    { item: "Renewal (agency)", fee: "$115", sourceUrl: "https://www.suretybonds.com/guide/utah/private-investigator-license" },
    { item: "Surety bond (registrant and apprentice)", fee: "$10,000 bond under Utah Code 53-9-110 (about $100 annual premium)", sourceUrl: "https://bci.utah.gov/" },
    { item: "Liability insurance (agency)", fee: "At least $500,000 coverage under Utah Code 53-9-109", sourceUrl: "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7" }
  ],
  application: { portal: "BCI paper application submitted in person or by mail to the Bureau of Criminal Identification, 3888 West 5400 South, Taylorsville, UT 84129", portalUrl: "https://bci.utah.gov/", steps: ["Choose your tier: apprentice (no experience, supervised), registrant (2,000 hours), or agency (10,000 hours plus insurance).", "Complete the BCI Application for Private Investigator License and attach a 2-inch by 2-inch passport-quality photo taken within 90 days and a photocopy of your driver license or state ID.", "Submit one completed fingerprint card (BCI charges $20 for card services as of July 2025) and the Verification of Investigative Experience form if applying as a registrant.", "Attach a $10,000 surety bond (registrant and apprentice) or a certificate of $500,000 liability insurance and workers' compensation coverage if applicable (agency).", "Pay the application fee by cash, check, money order, or credit card; fees are non-refundable.", "BCI conducts a background investigation and the Private Investigator Hearing and Licensure Board, which meets quarterly, reviews registrant and agency applications; Utah does not require a licensing examination."], processingTime: "Up to 90 days for registrant and agency applications, depending on the board's quarterly meeting schedule; apprentice applications without disqualifying history are typically issued within 5 business days", sourceUrl: "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7" },
  renewal: { cycle: "2 years", ce: null, fee: "$65 registrant or apprentice; $115 agency", late: "A license expired more than 90 days cannot be renewed; the holder must reapply and meet all initial requirements", sourceUrl: "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7" },
  reciprocity: { rule: "Utah grants no general reciprocity for out-of-state PI licenses, but exemptions from licensure apply to federal investigators working within their duties and to military spouses who hold a current, valid PI license from another state and are in good standing.", agreements: null, sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$57,910", p25: "$48,460", p75: "$61,090", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=UT" },
  localNuance: "Utah licenses PIs through the Department of Public Safety's Bureau of Criminal Identification (not DOPL) in three tiers: apprentice, registrant, and agency. Registrant and agency files go to the Private Investigator Hearing and Licensure Board, which meets once per quarter, so filing just before a board meeting can shorten the wait. Applicants appear in person at the Taylorsville BCI office.",
  recentChanges: [
    { year: 2025, change: "BCI raised its fingerprint card service fee from $15 to $20 effective July 1, 2025.", sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah" },
    { year: 2026, change: "Utah law adds a 16-hour continuing education requirement for private investigator license renewals beginning May 7, 2027.", sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah" }
  ],
  stateFaqs: [
    { q: "Does Utah require an exam to become a private investigator?", a: "No. Utah does not administer a licensing examination. Licensure is based on documented experience hours, fingerprints, the $10,000 surety bond (registrant and apprentice) or $500,000 liability insurance (agency), and review by the Private Investigator Hearing and Licensure Board." },
    { q: "Who regulates private investigators in Utah?", a: "The Bureau of Criminal Identification (BCI) within the Utah Department of Public Safety handles PI licensing, under Utah Code Title 53, Chapter 9 and Administrative Rule R722-330. Applications are handled at 3888 West 5400 South in Taylorsville." },
    { q: "What are the experience tiers in Utah?", a: "Apprentices need no experience and work under direct supervision of a licensed agency; registrants must document 2,000 hours of investigative experience; agency applicants document 10,000 hours per the BCI application and carry at least $500,000 in liability insurance." },
    { q: "How long does Utah PI licensing take?", a: "Registrant and agency applications take up to 90 days because the review board meets quarterly. Apprentice applications with no disqualifying criminal history are typically issued within 5 business days of a complete application." },
    { q: "What happens if my Utah PI license lapses?", a: "If your license has been expired for more than 90 days you cannot renew it; you must reapply as a new applicant and meet every initial requirement again. Working on a lapsed license is treated as working unlicensed, a class A misdemeanor." }
  ],
  sources: [
    { label: "Utah DPS BCI -- Application for Private Investigator License (PDF)", url: "https://demosite.utah.gov/dps-criminal/wp-content/uploads/sites/15/2015/01/Application-for-Private-Investigator-License.pdf", checkedOn: "2026-10" },
    { label: "Utah DPS BCI -- Private Investigator Licensing program site", url: "https://bci.utah.gov/", checkedOn: "2026-10" },
    { label: "Utah Admin Code R722-330-7 -- Renewal of a License", url: "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7", checkedOn: "2026-10" },
    { label: "SuretyBonds.com -- Utah Private Investigator License Guide (fees)", url: "https://www.suretybonds.com/guide/utah/private-investigator-license", checkedOn: "2026-10" },
    { label: "PrivateInvestigatorEdu.org -- Utah PI licensing process and board review", url: "https://privateinvestigatoredu.org/utah/", checkedOn: "2026-10" },
    { label: "LegalClarity -- Utah PI licensing, exemptions, and fee administration", url: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah", checkedOn: "2026-10" }
  ]
},

VT: {
  agency: "Vermont Office of Professional Regulation (Secretary of State) -- Private Investigative and Security Services",
  agencyUrl: "https://sos.vermont.gov/private-investigative-security-services/",
  exam: {
    vendor: "Vermont Office of Professional Regulation (state exam)",
    vendorUrl: "https://sos.vermont.gov/private-investigative-security-services/",
    parts: [ { name: "Vermont PI and security licensing law, public records law, FCRA, and general investigative knowledge", questions: "Question count not published", time: "Not published", pass: "Not published" } ],
    fee: null,
    practical: null,
    languages: ["English"],
    sourceUrl: "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf", sourceNote: "26 V.S.A. Section 3173(a)(2) conditions licensure on passing the rule-required examination; the exam covers 1 V.S.A. Sections 310-320 (public records), the Fair Credit Reporting Act, 26 V.S.A. Sections 3151-3183, and the administrative rules"
  },
  experience: "Independent practice (qualifying agent or sole proprietor) requires at least two years of appropriate investigative experience as determined by the Director -- for example, regular employment as a licensed PI in another state, work for a licensed agency in this or another state, or service as a sworn member of a federal, state, or municipal law enforcement agency (26 V.S.A. Section 3173(c)). Registered employees of a licensed agency have no minimum experience.",
  eligibility: { minAge: 18, citizenship: "Not specified in statute; character, integrity, and reputation are reviewed", education: "Not specified in statute", other: "The Director may deny licensure for failure to provide required information, failure to meet the high character standard, or unprofessional conduct under 26 V.S.A. Section 3181" },
  background: { method: "Fingerprinting and a Vermont Criminal Information Center background check completed through the Office of Professional Regulation", fee: "Amount set by OPR and vendors; not published in statute", disqualifiers: "Denial based on failure to meet the high standard of character, integrity, and reputation, or unprofessional conduct", sourceUrl: "https://privateinvestigatoredu.org/?p=791" },
  fees: [
    { item: "Application and renewal fees", fee: "Set on the OPR fee schedule; amounts differ by unarmed/armed registration and license tier and are published on the OPR website", sourceUrl: "https://sos.vermont.gov/private-investigative-security-services/" }
  ],
  application: { portal: "OPR online licensing services", portalUrl: "https://sos.vermont.gov/private-investigative-security-services/", steps: ["Choose your credential: registration as an employee of a licensed agency (no exam) or licensure as a qualifying agent or sole proprietor (exam and two years of experience required).", "Submit the electronic application through OPR's online services with the application fee and a recent passport-sized photo.", "Have your supervisor sign the Temporary Registration/Statement of Supervisor form if entering as a registered employee.", "Complete fingerprinting arranged through OPR; the Vermont Criminal Information Center runs the background check.", "After the background check clears, registered employees receive a 60-day temporary registration to complete the required 40 hours of approved private security training.", "Qualifying agent and sole proprietor applicants schedule the Vermont PI examination with OPR and submit character references and experience verifications directly from the references."], processingTime: "Not published; temporary registration is issued for 60 days while training and review complete", sourceUrl: "https://privateinvestigatoredu.org/?p=791" },
  renewal: { cycle: "2 years", ce: "No general CE requirement; armed licensees must complete at least 6 hours of firearms requalification training and requalify on the firing range every 2 years", fee: "Per the OPR fee schedule", late: null, sourceUrl: "https://privateinvestigatoredu.org/?p=791" },
  reciprocity: { rule: "Vermont issues transitory permits under Rule 4-6 to out-of-state investigators licensed in a jurisdiction that regulates PI practice, limited to continuing an investigative engagement that originated in another state; practice under a transitory permit may not exceed 30 days in any calendar year.", agreements: null, sourceUrl: "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$67,910", p25: "$44,640", p75: "$76,960", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=VT" },
  localNuance: "Vermont splits its credentials two ways: a registration for employees of licensed agencies (no exam, 40 hours of approved training) and a full license for qualifying agents and sole proprietors (exam plus two years of investigative experience under 26 V.S.A. Section 3173). Armed status requires a separate FBI fingerprint check, firearms verification forms, and biennial requalification.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.vermont.gov/private-investigative-security-services/" }
  ],
  stateFaqs: [
    { q: "Does Vermont require an exam for all private investigators?", a: "No. Only applicants for a full license as a qualifying agent or sole proprietor must pass the OPR examination required by 26 V.S.A. Section 3173. Registered employees of a licensed agency complete 40 hours of approved training instead and take no exam." },
    { q: "What experience is needed to run my own PI practice in Vermont?", a: "At least two years of appropriate investigative experience, which can include regular employment as a licensed PI in another state, work for a licensed agency, or service as a sworn law enforcement officer." },
    { q: "What does the Vermont PI exam cover?", a: "The multiple-choice exam covers Vermont public records law (1 V.S.A. Sections 310-320), the Fair Credit Reporting Act, Vermont PI and security licensing law (26 V.S.A. Sections 3151-3183 and the administrative rules), and general investigative knowledge from study and practical experience." },
    { q: "Can an out-of-state PI work a case in Vermont temporarily?", a: "Yes. Rule 4-6 provides transitory permits for investigators licensed in another regulating jurisdiction, but only to continue an engagement that originated out of state, and the permit caps practice at 30 days per calendar year." },
    { q: "How do Vermont PI credentials renew?", a: "Registrations and licenses renew on two-year cycles through OPR. Armed investigators must also complete at least 6 hours of firearms requalification training and requalify on the range every two years, listing the course date and instructor on the renewal." }
  ],
  sources: [
    { label: "Vermont Administrative Rules for Private Investigators and Security Guards (OPR, PDF)", url: "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf", checkedOn: "2026-10" },
    { label: "26 V.S.A. Section 3173 -- Private investigator licenses", url: "https://law.justia.com/codes/vermont/title-26/chapter-59/section-3173", checkedOn: "2026-10" },
    { label: "Vermont OPR -- Private Investigative and Security Services program page", url: "https://sos.vermont.gov/private-investigative-security-services/", checkedOn: "2026-10" },
    { label: "PrivateInvestigatorEdu.org -- Vermont PI licensing process, exam topics, and renewals", url: "https://privateinvestigatoredu.org/?p=791", checkedOn: "2026-10" }
  ]
},

VA: {
  agency: "Virginia Department of Criminal Justice Services (DCJS) -- Private Security Services",
  agencyUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator",
  education: { hours: "60", breakdown: "02E Private Investigator Entry-Level course (60 hours) from a DCJS-certified training school; 8 hours of 02I Private Investigator In-Service training each renewal", onlineAllowed: "Training schools determine delivery; DCJS certifies the schools and publishes the course list", apprenticeship: "Training exemptions under 6VAC20-174-190 may waive part of entry-level training for prior private security training or qualified law enforcement officers", sourceUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator" },
  experience: "No investigative experience is required. Virginia uses a training-based path: complete the 60-hour DCJS-approved entry-level course and pass the fingerprint background check.",
  eligibility: { minAge: 18, citizenship: "US citizen or legal resident alien", education: "No minimum education requirement published", other: "Felony or disqualifying misdemeanor convictions (including military court martial) and active protective orders require a Criminal History Supplemental Form and may bar registration" },
  background: { method: "Fingerprint appointment through Fieldprint Virginia (fieldprintvirginia.com or 877-614-4364); DCJS is notified automatically", fee: "$50 fingerprint processing application", disqualifiers: "Felony convictions and disqualifying misdemeanors; applicants with such history must submit a Criminal History Supplemental Form", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
  fees: [
    { item: "Fingerprint processing application", fee: "$50", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
    { item: "Initial registration (private investigator)", fee: "$25", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
    { item: "Registration renewal", fee: "$20", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
    { item: "Firearm endorsement", fee: "$10 (renewed every 12 months)", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
    { item: "Private security services business license (if opening your own firm)", fee: "$555 for 1 year or $800 for 2 years, plus a $50 category fee for each additional category", sourceUrl: "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/private-security/forms/private-security-services-initial-business-license-application-pss-la.pdf" }
  ],
  application: { portal: "DCJS Online Regulatory Licensing System", portalUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/online-regulatory-licensing", steps: ["Complete the 60-hour 02E Private Investigator Entry-Level course at a DCJS-certified training school.", "Apply online through the DCJS Online Regulatory Licensing System and pay the non-refundable fees; the Criminal History Processing form is part of the online initial application with a separate $50 processing fee on your invoice.", "Schedule and complete fingerprinting through Fieldprint Virginia; DCJS is notified automatically.", "To work, join a DCJS-licensed private security services business, or license your own business (with a surety bond or at least $1,000,000 general liability insurance and a licensed compliance agent).", "If you will have firearm access, complete the Firearms Endorsement requirements; the endorsement renews every 12 months.", "There is no state examination for the private investigator registration itself; eligibility rests on training completion, background check, and fees."], processingTime: "Not published; applications complete after training, fingerprint results, and fees clear", sourceUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator" },
  renewal: { cycle: "2 years", ce: "8 hours of 02I Private Investigator In-Service training each renewal cycle", fee: "$20 renewal plus training costs; late renewals add a reinstatement fee of 50% above the renewal fee", late: "Reinstatement fee equal to 50% of the renewal fee applies after expiration", sourceUrl: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$56,160", p25: "$41,200", p75: "$76,680", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=VA" },
  localNuance: "Virginia is a training-first state: a 60-hour entry-level course replaces the experience requirements most states impose, making it one of the easiest entry paths in the country. Individual investigators hold a DCJS registration tied to a licensed private security services business; running your own firm requires a separate business license with $1,000,000 liability insurance or a surety bond.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator" }
  ],
  stateFaqs: [
    { q: "Does Virginia require an exam for private investigators?", a: "No state licensing exam is administered for the private investigator registration. Instead, applicants must complete the 60-hour 02E entry-level course at a DCJS-certified training school and pass the course requirements before registration is issued." },
    { q: "How much does a Virginia PI registration cost?", a: "The initial registration costs $25 and renewal costs $20, plus a $50 fingerprint processing fee. A firearm endorsement adds $10 and renews annually. Opening your own firm requires a business license of $555 for one year or $800 for two years." },
    { q: "What training must Virginia PIs complete?", a: "Initial registration requires the 60-hour 02E Private Investigator Entry-Level course. Each two-year renewal requires 8 hours of 02I in-service training, with the school submitting the roster to DCJS." },
    { q: "Can prior law enforcement experience waive Virginia training?", a: "Possibly. DCJS may grant training exemptions under 6VAC20-174-190 for applicants who completed comparable private security training or who are qualified law enforcement officers." },
    { q: "How do I renew a Virginia PI registration?", a: "Renew online through the DCJS Online Regulatory Licensing System, pay the $20 fee, and complete the 8-hour in-service course. Renewals filed after expiration incur a reinstatement fee equal to 50% of the renewal fee." }
  ],
  sources: [
    { label: "Virginia DCJS -- Private Investigator registration page", url: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator", checkedOn: "2026-10" },
    { label: "6VAC20-174-20 -- Fees (Virginia Administrative Code)", url: "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/", checkedOn: "2026-10" },
    { label: "DCJS -- Private Security Services Initial Business License Application (PDF)", url: "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/private-security/forms/private-security-services-initial-business-license-application-pss-la.pdf", checkedOn: "2026-10" },
    { label: "Virginia Professional Investigators and Security Association -- Become a Private Investigator", url: "https://vapisa.com/become-a-private-investigator", checkedOn: "2026-10" }
  ]
},

WA: {
  agency: "Washington State Department of Licensing (DOL) -- Private Investigator Program",
  agencyUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf",
  exam: {
    vendor: "Washington State DOL (state exam)",
    vendorUrl: "https://dol.wa.gov/sites/default/files/forms/689002.pdf",
    parts: [ { name: "Principal qualification examination (agency owners and partners who do not qualify by experience)", questions: "Question count not published", time: "Not published", pass: "Not published" } ],
    fee: null,
    practical: null,
    languages: ["English"],
    sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689002.pdf", sourceNote: "Only agency principals and partners choose between the experience path and the examination path on the application; exams are given at driver licensing offices statewide. Individual investigators qualify by employer-certified training instead of a state exam."
  },
  experience: "Agency principals and partners who do not take the exam need at least three years of experience in private investigation or a related field; a year means at least 2,000 hours of actual compensated work, substantiated by written certifications from previous employers or, failing that, from professional persons with personal professional knowledge.",
  eligibility: { minAge: 18, citizenship: "US citizen or resident alien", education: "No education requirement; individual applicants must complete state-specified pre-assignment training and pass the employer-certified test (WAC 308-17-300)", other: "Applicants must answer legal-background questions covering license discipline and gross misdemeanor or felony convictions within the past 5 years; armed endorsement requires age 21, a Washington concealed pistol license, and CJTC firearms certification" },
  background: { method: "Fingerprint-based background check; fingerprints are submitted electronically through IdentoGO following DOL instructions", fee: "Included in the license fee schedule", disqualifiers: "Gross misdemeanor or felony convictions and prior license discipline within the past 5 years require a detailed explanation and may lead to denial", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
  fees: [
    { item: "New unarmed private investigator license", fee: "$220", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
    { item: "Armed endorsement", fee: "$110 (in addition to the $220 new applicant fee)", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
    { item: "Renewal", fee: "$193", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
    { item: "Late renewal", fee: "$228", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
    { item: "Agency endorsement (new agency principal)", fee: "$640 unarmed or $750 armed; change of principal $150", sourceUrl: "https://dor.wa.gov/sites/default/files/legacy/Docs/forms/BLS/700320.pdf" }
  ],
  application: { portal: "DOL online licensing (professions.dol.wa.gov) or paper form by mail", portalUrl: "https://professions.dol.wa.gov", steps: ["Decide your path: individual PI employed by a licensed agency, or agency principal qualifying by three years of experience or by examination.", "Individual applicants complete the pre-assignment training and pass the required test, certified by a DOL-certified trainer on the application (Form PI-689-012).", "Complete the fingerprint-based background check through IdentoGO.", "Agency principals file the Private Investigative Agency/Principal addendum with the $640 (unarmed) or $750 (armed) endorsement fee and proof of a surety bond or liability insurance.", "Armed applicants complete the 8-hour CJTC-certified firearms certification course and submit the certificate; the endorsement cannot issue without it.", "Apply online at professions.dol.wa.gov or mail the form with check or money order payable to the Department of Licensing; a printed and mailed license costs $5 extra."], processingTime: "Not published", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
  renewal: { cycle: "1 year", ce: null, fee: "$193 ($228 late); certified trainer endorsement renewal adds $15", late: "$228 late renewal fee", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$64,080", p25: "$46,580", p75: "$84,700", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=WA" },
  localNuance: "Washington requires every PI to be employed by or be the principal of a licensed PI agency. Armed status is layered: age 21, a Washington CPL, and an 8-hour Criminal Justice Training Commission firearms certificate before DOL issues the $110 armed endorsement. Agency principals choose between 3 years (6,000+ hours) of documented compensated experience and the DOL examination given at driver licensing offices.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dol.wa.gov/sites/default/files/forms/689012.pdf" }
  ],
  stateFaqs: [
    { q: "Do individual private investigators take a state exam in Washington?", a: "No. Individual PIs complete state-specified pre-assignment training and pass the required test certified by a DOL-certified trainer on the application. Only agency principals and partners who cannot document three years of experience take the DOL examination." },
    { q: "How much does a Washington PI license cost?", a: "A new unarmed individual license is $220 and renews annually for $193 ($228 if late). The armed endorsement adds $110. Agency principals pay a $640 unarmed or $750 armed endorsement fee." },
    { q: "What qualifies someone as a Washington PI agency principal?", a: "Three years of experience in private investigation or a related field -- at least 2,000 compensated hours per year, substantiated by written employer certifications -- or passing the DOL examination given at driver licensing offices across the state." },
    { q: "What does it take to carry a firearm as a Washington PI?", a: "You must be at least 21, hold a Washington concealed pistol license, and complete the 8-hour firearms certification course certified by the Criminal Justice Training Commission. DOL cannot issue the armed endorsement without the CJTC certificate (RCW 18.170.040(c))." },
    { q: "How long is a Washington PI license valid?", a: "One year. Renewal costs $193 and late renewal costs $228; licenses self-print free online or cost $5 for a DOL-printed copy." }
  ],
  sources: [
    { label: "WA DOL -- Apply for or renew a private investigator license, Form PI-689-012 (PDF)", url: "https://dol.wa.gov/sites/default/files/forms/689012.pdf", checkedOn: "2026-10" },
    { label: "WA DOL -- Private Investigator License Application, Form PI-689-002 (PDF)", url: "https://www.dol.wa.gov/sites/default/files/forms/689002.pdf", checkedOn: "2026-10" },
    { label: "WA DOR -- Private Investigative Agency/Principal Addendum (PDF)", url: "https://dor.wa.gov/sites/default/files/legacy/Docs/forms/BLS/700320.pdf", checkedOn: "2026-10" },
    { label: "WA DOL -- Add a private investigator to an agency, Form PI-689-014 (PDF)", url: "https://dol.wa.gov/sites/default/files/forms/689014.pdf", checkedOn: "2026-10" },
    { label: "License Navigator -- Washington State PI license guide (WAC 308-17-150 fee summary)", url: "https://licensenavigator.ai/blog/private-investigator-washington-state-license-guide", checkedOn: "2026-10" }
  ]
},

WV: {
  agency: "West Virginia Secretary of State -- Licensing Section (Private Investigators and Security Guards)",
  agencyUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf",
  experience: "A minimum of one year of experience, education, or training, or a combination, in: relevant coursework at an accredited college or university; employment with any US government investigative agency or a state or local law enforcement agency or as a sheriff; employment by a licensed private investigative agency; service as a West Virginia magistrate; military service; or other substantially equivalent training or experience.",
  eligibility: { minAge: 18, citizenship: "US citizen or legally residing alien", education: "Qualifying coursework or equivalent training counts toward the one-year requirement", other: "Good moral character; no prior revocation or denial of a PI or security guard license; no felony conviction; no convictions for weapons offenses, receiving stolen property, burglary, aiding escape, illicit drugs, or misdemeanor domestic violence; no habitual drunkenness or narcotics dependence" },
  background: { method: "Fingerprinting for both state and federal background checks through the process designated by the Secretary of State", fee: "$50 non-refundable criminal history background check fee", disqualifiers: "Felony convictions and the enumerated misdemeanor offenses (weapons, stolen property, burglary, drugs, domestic violence) are disqualifying under WV Code 30-18", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
  fees: [
    { item: "Criminal history background check", fee: "$50 (non-refundable)", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
    { item: "License -- individual (2-year initial term)", fee: "$100", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
    { item: "License -- firm (2-year initial term)", fee: "$200", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
    { item: "Combined PI and security guard license", fee: "$200 individual or $400 firm", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
    { item: "Surety bond or liability insurance", fee: "$5,000 surety bond on the approved form, or sufficient liability insurance as required by the Secretary of State", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" }
  ],
  application: { portal: "Paper application by mail to the WV Secretary of State, Bldg. 1, Suite 157-K, 1900 Kanawha Blvd. East, Charleston, WV 25305", portalUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf", steps: ["Complete the initial application (Form PISG_APP) -- do not staple; file one original, or two if you want a filed-stamped copy returned.", "Gather character references from five reputable citizens who have known you for at least five years, written specifically for the application, none related to you by blood or marriage.", "Attach one recent passport-size full-face photograph and complete fingerprinting for state and federal checks.", "Document your qualifications: a sworn notarized employer statement, transcripts or degree, or military training verification.", "File a $5,000 surety bond on the enclosed form or proof of sufficient liability insurance.", "Pay the $50 background check fee plus the $100 individual or $200 firm license fee by check or money order payable to the West Virginia Secretary of State.", "There is no licensing examination; approval rests on the application, references, background check, and qualifications review. Approved licensees must also register for a business license with the WV State Tax Department."], processingTime: "Not published", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
  renewal: { cycle: "2 years", ce: null, fee: "License fee repeats at renewal ($100 individual, $200 firm)", late: null, sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$46,410", p25: "$37,060", p75: "$60,740", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=WV" },
  localNuance: "The Secretary of State -- not a dedicated board -- licenses private investigators in West Virginia, and the application requires character references from five citizens who have known you for at least five years. Applicants can combine the PI and security guard licenses on one application ($200 individual / $400 firm). Out-of-state firms must attach a certificate of good standing from their home state.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf" }
  ],
  stateFaqs: [
    { q: "Does West Virginia require an exam for private investigators?", a: "No. The Secretary of State issues PI licenses without a written examination. Approval is based on the one-year experience, education, or training requirement, five character references, fingerprints, the background check, and the surety bond or liability insurance." },
    { q: "How much does a West Virginia PI license cost?", a: "The non-refundable background check fee is $50, and the license fee is $100 for an individual or $200 for a firm (initial term two years). A combined private investigator and security guard license costs $200 individual or $400 firm." },
    { q: "What experience qualifies for a West Virginia PI license?", a: "One year of experience, education, or training in any qualifying area: relevant college coursework, government investigative agency or law-enforcement employment, work for a licensed PI agency, service as a West Virginia magistrate, military service, or substantially equivalent training or experience." },
    { q: "What bond or insurance do West Virginia PIs need?", a: "Applicants must file a $5,000 surety bond on the Secretary of State's approved form or submit sufficient proof of liability insurance as required by the office." },
    { q: "Who must provide character references in West Virginia?", a: "Every applicant needs references from at least five reputable citizens who have known the applicant for at least five years, written specifically for the license application, and none may be related to the applicant by blood or marriage." }
  ],
  sources: [
    { label: "WV Secretary of State -- Initial Application for License as a Private Investigator and/or Security Guard (PDF)", url: "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf", checkedOn: "2026-10" },
    { label: "WV Code of State Rules Title 153 Series 34 -- Private Investigators (bond, fees, references)", url: "https://apps.sos.wv.gov/adlaw/csr/readfile.aspx?DocId=49641&Format=WORD&KeyWord=", checkedOn: "2026-10" },
    { label: "West Virginia Legislature -- SB 597 (2018) amendments to WV Code 30-18", url: "https://www.wvlegislature.gov/Bill_Text_HTML/2018_SESSIONS/RS/Bills/SB597%20SUB1%20ENG.htm", checkedOn: "2026-10" },
    { label: "Harbor Compliance -- West Virginia PI licensing summary", url: "https://www.harborcompliance.com/private-investigator-license", checkedOn: "2026-10" }
  ]
},

WI: {
  agency: "Wisconsin Department of Safety and Professional Services (DSPS) -- Private Detective credentialing",
  agencyUrl: "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Default.aspx",
  exam: {
    vendor: "DSPS (state exam, taken online)",
    vendorUrl: "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Exams.aspx",
    parts: [ { name: "Wisconsin statutes and administrative code with investigative practice", questions: "Question count not published", time: "Not published", pass: "84%" } ],
    fee: "$127",
    practical: null,
    languages: ["English"],
    sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin", sourceNote: "Online, open-book-style state law exam covering Wis. Stat. Section 440.26 and Administrative Code chapters SPS 31-35; results are valid for one year"
  },
  experience: "Wisconsin sets no minimum experience or education hour requirement for the individual private detective license; qualification rests on the exam, background standards, and agency employment or agency licensure.",
  eligibility: { minAge: 18, citizenship: "US citizen, permanent resident, or otherwise lawfully authorized to work in the United States", education: "No minimum education requirement", other: "Able to read, write, and understand English; no felony convictions unless pardoned (absolute bar under Wis. Stat. Section 440.26); misdemeanor convictions substantially related to detective work can support denial; must be employed by a licensed private detective agency or license your own agency" },
  background: { method: "Electronic fingerprinting through Fieldprint after DSPS receives the application and Form 2687 (FBI information release); results go to the Wisconsin Department of Justice and DSPS", fee: "Paid to the fingerprint vendor; amount set by vendor", disqualifiers: "Felony conviction unless pardoned; substantially related misdemeanor convictions; applicants must disclose all convictions and pending charges with certified records on Form 2254", sourceUrl: "https://privateinvestigatoredu.org/wisconsin/" },
  fees: [
    { item: "Application (private detective)", fee: "$8", sourceUrl: "https://privateinvestigatoredu.org/wisconsin/" },
    { item: "State law examination", fee: "$127", sourceUrl: "https://privateinvestigatoredu.org/wisconsin/" },
    { item: "Renewal", fee: "$8 (total $33 if late)", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin" },
    { item: "Employer transfer (Form 1329)", fee: "$10", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin" },
    { item: "Bond or insurance", fee: "$2,000 individual surety bond, or coverage under the agency's general liability policy; agencies carry at least $100,000 liability insurance or a $100,000 bond", sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin" }
  ],
  application: { portal: "LicensE (Wisconsin DSPS online licensing portal)", portalUrl: "https://license.wi.gov", steps: ["Create a LicensE account and submit the Private Detective application (Form 469) with the $8 fee.", "Upload the FBI information release (Form 2687) with a recent head-and-shoulders photo, the convictions and pending charges form (Form 2254) with certified records if applicable, and the employer statement (Form 3038).", "Provide proof of financial security: a certificate of the agency's general liability coverage (Form 1482) or a $2,000 individual surety bond (Form 1483).", "After DSPS processes the application, schedule electronic fingerprinting with Fieldprint and complete the prints.", "Pay the $127 exam fee in LicensE and pass the online state law exam on Wisconsin statutes and SPS 31-35; the passing score is 84% and results are valid for one year.", "To operate your own firm, file the separate Private Detective Agency application (Form 456) and maintain at least $100,000 liability coverage or a $100,000 bond."], processingTime: "Varies by applicant; the credential issues after the application, fingerprints, employment and insurance documentation, and passing exam result all clear DSPS review", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin" },
  renewal: { cycle: "Expires August 31 of even-numbered years", ce: null, fee: "$8 ($33 total if late)", late: "Late renewal total is $33; DSPS runs a criminal background check at each renewal and the licensee must remain employed by a licensed agency", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin" },
  reciprocity: { rule: "Wisconsin provides reciprocal licensing provisions for qualifying service members, former service members, and their spouses under Wis. Stat. Section 440.09 and SPS 31.037; no general reciprocity for out-of-state PI licenses is published.", agreements: null, sourceUrl: "https://privateinvestigatoredu.org/wisconsin/" },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,850", p25: "$38,580", p75: "$58,210", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=WI" },
  localNuance: "Wisconsin has unusually low state fees ($8 application, $8 renewal) but a demanding 84% exam pass mark and a $100,000 agency-level bond or insurance requirement. Every private detective must be employed by a licensed agency or hold their own agency license; employer changes are reported on Form 1329 with a $10 fee.",
  recentChanges: [
    { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Default.aspx" }
  ],
  stateFaqs: [
    { q: "What is the Wisconsin private detective exam like?", a: "DSPS administers an online state law exam covering Wis. Stat. Section 440.26 and Administrative Code chapters SPS 31 through 35 plus investigative practice. The passing score is 84%, results are valid for one year, and it can be taken from any computer -- no test center required." },
    { q: "How much does a Wisconsin PI license cost?", a: "State fees are unusually low: $8 for the application, $127 for the exam, and $8 to renew (total $33 if late). Fingerprinting and the $2,000 individual bond, if needed, are paid separately to vendors." },
    { q: "Does Wisconsin require investigative experience?", a: "No. Wisconsin imposes no minimum experience or education hours. Qualification rests on the exam, the criminal-background standards (no felonies unless pardoned), agency employment, and bond or insurance coverage." },
    { q: "Can I work independently as a Wisconsin private detective?", a: "Only if you also hold a Private Detective Agency license (Form 456) and maintain at least $100,000 in liability insurance or a $100,000 bond. Otherwise you must be employed by a licensed agency, which covers you under its policy so the individual $2,000 bond is not required." },
    { q: "When do Wisconsin PI licenses renew?", a: "All private detective credentials expire on a fixed cycle -- August 31 of even-numbered years -- regardless of when issued, with the first term prorated. Renewal costs $8, and DSPS runs a criminal background check at each renewal." }
  ],
  sources: [
    { label: "Wisconsin Stat. Section 440.26 -- Private detectives, investigators and security personnel", url: "https://law.justia.com/codes/wisconsin/2024/chapter-440/section-440-26", checkedOn: "2026-10" },
    { label: "Wisconsin Admin Code SPS 31.02 -- Qualifications", url: "https://regulations.justia.com/states/wisconsin/sps/sps-1-299/sps-30-49/chapter-sps-31/section-sps-31-02", checkedOn: "2026-10" },
    { label: "DSPS program page and Form 469 links (via PAWLI)", url: "https://pawli.com/become-a-pi", checkedOn: "2026-10" },
    { label: "License Navigator -- Wisconsin PI license guide (fees, renewal dates, forms)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin", checkedOn: "2026-10" },
    { label: "LegalClarity -- Wisconsin PI licensing, exam, and bond requirements", url: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin", checkedOn: "2026-10" },
    { label: "PrivateInvestigatorEdu.org -- Wisconsin PI licensing process", url: "https://privateinvestigatoredu.org/wisconsin/", checkedOn: "2026-10" }
  ]
}

} };
