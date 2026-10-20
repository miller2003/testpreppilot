export default {
  key: "security-guard",
  compiledOn: "2026-10-20",
  states: {
    GA: {
      agency: "Georgia Board of Private Detective and Security Agencies (Secretary of State, Professional Licensing Boards Division)",
      agencyUrl: "https://sos.ga.gov/index.php/licensing/plb/42",
      exam: {
        vendor: "Board-licensed firearms instructor (armed weapon permit applicants only)",
        vendorUrl: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html",
        parts: [
          { name: "Firearms written exam (armed registration only)", questions: "Not published", time: "Not published", pass: "80%" },
          { name: "Range qualification (48-round course of fire, fired twice)", questions: "Not applicable", time: "8 hours of the 15-hour firearms course", pass: "80%" }
        ],
        fee: "Included in instructor course cost; the board sets no exam fee",
        practical: "Range qualification: 24 rounds at 3 yards, 18 at 7 yards, 6 at 15 yards",
        languages: ["English"],
        sourceUrl: "https://securitydogma.com/?p=1710",
        sourceNote: "Board Rule 509-3 firearms curriculum: 15 hours (deadly force 1 hr, liability 2 hrs, ballistics 1 hr, handgun types 3 hrs, range 8 hrs)"
      },
      education: {
        hours: "24",
        breakdown: "Board-mandated basic security officer training (Rule 509-3-.02) before providing security services: role of private security, legal aspects (arrest, use of force, liability), patrol and observation, incident response, customer service, first aid overview. Armed employees add a 15-hour firearms course under Rule 509-3-.10. Effective January 1, 2022.",
        onlineAllowed: "Instructors must be licensed by the board; the employer keeps training certificates on file for 5 years",
        apprenticeship: "No apprenticeship path; training is delivered by board-licensed instructors",
        sourceUrl: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html"
      },
      experience: "No experience requirement for security employee registration; unarmed guards are not registered at all and armed registrations are filed by the licensed employer.",
      eligibility: {
        minAge: "18 (21 for armed registration and weapon permit)",
        citizenship: "US citizen, legal permanent resident, or qualified alien with DHS-issued alien number; secure and verifiable document required",
        education: "No education requirement published",
        other: "Good moral character; no felony, no crime involving illegal use of a dangerous weapon, no crime of moral turpitude; 5 years of address and employment history with no gaps"
      },
      background: {
        method: "GAPS (Georgia Applicant Processing Service) electronic fingerprint submission, scheduled through Fieldprint; results come from GCIC/GBI and FBI, typically within about 48 hours of printing",
        fee: "Paid to the fingerprint vendor at scheduling (third-party summaries list about $52.75: $44.25 state and federal plus $8.50 GAPS fee)",
        disqualifiers: "Felony conviction, crime involving illegal use or possession of a dangerous weapon, or crime of moral turpitude may bar registration, though the board may approve case by case; no weapon permit may issue to a felon without a pardon or rights restoration specifically restoring the right to carry firearms",
        sourceUrl: "https://www.padlockpatrol.com/security-guard-georgia/"
      },
      fees: [
        { item: "Armed security employee registration", fee: "$70 plus $5 online processing surcharge ($10 paper)", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-georgia" },
        { item: "Registration renewal", fee: "$65 (late fee $80)", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-georgia" },
        { item: "Additional weapon or change of weapon type", fee: "$25", sourceUrl: "https://www.padlockpatrol.com/security-guard-georgia/" },
        { item: "Replacement registration card", fee: "$25", sourceUrl: "https://www.padlockpatrol.com/security-guard-georgia/" },
        { item: "Fingerprint background check", fee: "Vendor-set (about $52.75 per third-party summaries)", sourceUrl: "https://www.padlockpatrol.com/security-guard-georgia/" }
      ],
      application: {
        portal: "Georgia SOS Professional Licensing Boards (employer files for the employee)",
        portalUrl: "https://sos.ga.gov/index.php/licensing/plb/42",
        steps: [
          "Complete 24 hours of board-mandated basic training with a board-licensed instructor before working",
          "Be hired by a company licensed by the board as a private security agency",
          "For armed work, complete the 15-hour firearms course and pass the 80% written exam and 80% range qualification",
          "The licensed employer files the armed employee registration and weapon permit application with the board, including two fingerprint sets and a photo",
          "Schedule GAPS fingerprinting through Fieldprint and pay the vendor fee",
          "Do not work armed until the registration card and weapon permit are issued"
        ],
        processingTime: "About 25 business days per third-party summaries",
        sourceUrl: "https://www.padlockpatrol.com/security-guard-georgia/"
      },
      renewal: {
        cycle: "2 years; employee registrations and weapon permits expire August 31 of odd-numbered years",
        ce: "8 hours of continuing education per renewal period for registered security employees; first renewal exempt (Rule 509-3-.12). Weapon permit holders must qualify annually with the carried weapon.",
        fee: "$65",
        late: "$80 late renewal fee",
        sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-georgia"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$34,980", p25: "$30,920", p75: "$39,060", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=GA" },
      localNuance: "Georgia licenses security companies and registers armed employees, but unarmed security guards are NOT individually registered with the board. Unarmed guards must still complete the 24-hour board-standard training and work for a licensed company, which keeps their training and registration records (O.C.G.A. 43-38-7.1). Armed guards must be registered by their employer and hold a board-issued weapon permit; the registration is valid only for the listed employer, so changing companies requires a new application and fee. In-house proprietary security forces (guards employed directly by a company for its own property) are exempt from the chapter under O.C.G.A. 43-38-14(c). A Georgia weapons carry license does not qualify a guard to carry armed on duty.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.ga.gov/index.php/licensing/plb/42" }
      ],
      stateFaqs: [
        { q: "Do unarmed security guards need a license in Georgia?", a: "No. Unarmed guards are not registered with the board, but they must complete 24 hours of board-standard training before working and may only work for a board-licensed security company, which keeps their training records." },
        { q: "What does armed guard registration cost?", a: "The licensed employer files the registration: $70 to the board plus a $5 online processing surcharge ($10 on paper), plus the fingerprint vendor fee. Renewal is $65 every two years, and an additional-weapon or weapon-change filing is $25." },
        { q: "What firearms training is required for a Georgia weapon permit?", a: "15 hours beyond the 24-hour basic course, including 8 hours of range qualification. Applicants must score at least 80% on both the written exam and the 48-round course of fire, and must requalify annually with the weapon carried." },
        { q: "When do Georgia registrations renew?", a: "All employee registrations and weapon permits expire August 31 of odd-numbered years. On-time renewal is $65 with 8 hours of continuing education (first renewal exempt); the late fee is $80." },
        { q: "Can a felon become a registered armed guard in Georgia?", a: "The board may register someone with a felony or moral-turpitude conviction at its discretion after reviewing the circumstances, but it cannot issue a weapon permit to a felon without proof of a pardon or restoration that specifically restores the right to carry firearms." }
      ],
      sources: [
        { label: "O.C.G.A. § 43-38-7.1 - Registration records and training for unarmed guards", url: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html", checkedOn: "2026-10" },
        { label: "Georgia Board Rules 509-2-.03 - Issuance of Licenses and Registrations", url: "https://regulations.justia.com/states/georgia/department-509/chapter-509-2/rule-509-2-03", checkedOn: "2026-10" },
        { label: "Georgia Security Guard License: Requirements and Fees (Security Dogma)", url: "https://securitydogma.com/?p=1710", checkedOn: "2026-10" },
        { label: "Georgia Security Guard License Costs (License Navigator)", url: "https://licensenavigator.ai/blog/security-guard-license-cost-georgia", checkedOn: "2026-10" },
        { label: "Georgia Armed Security Guard Registration Guide (Padlock Patrol)", url: "https://www.padlockpatrol.com/security-guard-georgia/", checkedOn: "2026-10" }
      ]
    },
    HI: {
      agency: "Hawaii Board of Private Detectives and Guards (DCCA Professional and Vocational Licensing Division)",
      agencyUrl: "https://cca.hawaii.gov/pvl/boards/private/",
      exam: {
        vendor: "Hawaii DCCA PVL - Board of Private Detectives and Guards (individual Guard (GD) and Private Detective license applicants only)",
        vendorUrl: "https://cca.hawaii.gov/pvl/boards/private/application-deadline-examination-dates/",
        parts: [
          { name: "Board licensing examination for individual Guard license", questions: "Not published", time: "Not published", pass: "Not published" }
        ],
        fee: "$50 examination fee for principal/sole proprietor applicants",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
        sourceNote: "Guard EMPLOYEE registrations (GDE) require no examination; the exam applies to individual Guard and Private Detective license applicants"
      },
      education: {
        hours: "8",
        breakdown: "Guard employee applicants must complete 8 hours of classroom instruction with a board-approved instructor and curriculum before registration, covering power to arrest, access control, fire detection and reporting, emergency response, observation and reporting, patrol, ethics and conduct",
        onlineAllowed: "Board-approved instructors and curriculum providers may use remote technologies for the 8-hour initial and 4-hour continuing education courses",
        apprenticeship: "No apprenticeship path",
        sourceUrl: "https://cca.hawaii.gov/wp-content/uploads/2026/01/PDG-190718-Private-Detectives-Guards.pdf"
      },
      experience: "No experience requirement for guard employee registration. Individual Guard (GD) license and agency principal applicants must document 4 years of full-time guard work experience; the board does not accept education in lieu of it.",
      eligibility: {
        minAge: 18,
        citizenship: "No citizenship requirement published; criminal history record check required",
        education: "High school education or equivalent",
        other: "No psychiatric or psychological disorder; no conviction reflecting unfavorably on fitness to act as a guard; history of honesty, truthfulness, financial integrity and fair dealing"
      },
      background: {
        method: "Fingerprinting through Fieldprint; FBI and State of Hawaii criminal history record checks",
        fee: "$17.50 Fieldprint + $16.50 FBI + $30.00 State of Hawaii criminal history",
        disqualifiers: "Conviction of a crime reflecting unfavorably on fitness to act as a guard; assessed case by case by the board",
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      fees: [
        { item: "Guard employee registration application", fee: "$151 in year 1 of the triennium, $116 in year 2, $81 in year 3 (triennium began July 1, 2024)", sourceUrl: "https://guardtraining.net/?p=987521631/" },
        { item: "Guard employee renewal (3 years)", fee: "$105 active status / $12 inactive status", sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/" },
        { item: "Late renewal (restore within 1 year)", fee: "$120 active / $27 inactive", sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/" },
        { item: "Guard agency license application", fee: "$100 entity / $50 principal or sole proprietor", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "Guard agency license fee", fee: "$260 (licensed July 1 even year - June 30 odd year) or $105 (licensed July 1 odd year - June 30 even year)", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" }
      ],
      application: {
        portal: "MyPVL (Hawaii DCCA online licensing)",
        portalUrl: "https://mypvl.dcca.hawaii.gov/",
        steps: [
          "Complete 8 hours of classroom instruction with a board-approved instructor and obtain the training certificate",
          "Submit the guard employee registration application through MyPVL or on the PDG forms from the board's application publications page",
          "Complete Fieldprint fingerprinting and the FBI and state criminal history record checks",
          "The employing guard agency must be licensed; the principal guard reports employees to the board on the semiannual PDG-16a employee registration form (Jan-June due July 31, July-Dec due Jan 31)",
          "Receive the registration before beginning guard work"
        ],
        processingTime: "Not published by the board",
        sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/"
      },
      renewal: {
        cycle: "3 years; guard employee registrations renew by June 30 every third year (2024, 2027, 2030)",
        ce: "4 hours of board-approved continuing competency training from an approved provider before renewal",
        fee: "$105 active / $12 inactive",
        late: "Restore within 1 year after expiration: $120 active / $27 inactive; forfeited licenses not restored within 1 year are terminated",
        sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/"
      },
      reciprocity: {
        rule: "Hawaii has no reciprocal agreements with other states; all applicants must meet the same licensing and examination requirements. Out-of-state experience counts only as guard work experience toward a license.",
        agreements: null,
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$42,820", p25: "$37,140", p75: "$46,160", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=HI" },
      localNuance: "Hawaii issues several credentials: guard employee (GDE) registration for line officers, individual Guard (GD) licenses, and Guard Agency (GDA) licenses. Individual GD applicants and agency principals pass a board examination and interview before the board; agency licensees must post a $5,000 surety bond and maintain a definite place of business (a PO box is not acceptable). Uniform, badge, and emblem photographs require approval from the board and from the police department of each county where the uniform will be used, and no uniform may resemble a government law enforcement agency. The principal guard must file an employee registration report semiannually even if no employees were hired or terminated.",
      recentChanges: [
        { year: 2024, change: "Guard employee registrations renew on a three-year cycle by June 30 (the 2024 cycle ran with the 4-hour continuing education requirement; the next renewal is June 30, 2027, with a $105 on-time fee).", sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/" }
      ],
      stateFaqs: [
        { q: "What is the difference between a guard employee registration and a Guard license in Hawaii?", a: "A guard employee (GDE) registration requires 8 hours of board-approved training, a high school education or equivalent, and a criminal history record check - no exam. An individual Guard (GD) license requires 4 years of full-time guard experience, a $50 board examination, and a board interview, and it allows working as a principal or sole proprietor." },
        { q: "How much does a Hawaii guard employee registration cost?", a: "The application fee depends on where you are in the three-year licensing triennium that began July 1, 2024: $151 in the first year, $116 in the second, and $81 in the third. Renewal is $105 every three years, and fingerprint and criminal history checks add $64 in state and vendor fees." },
        { q: "Does Hawaii accept security licenses from other states?", a: "No. The Board of Private Detectives and Guards states it has no reciprocal agreements, so every applicant must meet Hawaii's training, experience, and examination requirements directly." },
        { q: "What continuing education do Hawaii guards need?", a: "Guard employees must complete 4 hours of board-approved continuing competency training before each triennial renewal. Approved providers may deliver the course remotely, and the board publishes lists of approved instructors and curricula." },
        { q: "Who registers Hawaii guard employees with the board?", a: "The licensed guard agency's principal guard does. Employee registration forms (PDG-16a) are due semiannually - January-June hires by July 31 and July-December hires by January 31 - and must be filed even when no employees were hired or terminated." }
      ],
      sources: [
        { label: "Hawaii Board of Private Detectives and Guards (DCCA PVL)", url: "https://cca.hawaii.gov/pvl/boards/private/", checkedOn: "2026-10" },
        { label: "Hawaii PDG Frequently Asked Questions (fees, bonds, reciprocity)", url: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf", checkedOn: "2026-10" },
        { label: "Hawaii Private Detectives and Guards licensing brochure (requirements)", url: "https://cca.hawaii.gov/wp-content/uploads/2026/01/PDG-190718-Private-Detectives-Guards.pdf", checkedOn: "2026-10" },
        { label: "Hawaii Guard or Private Detective requirements and instructions packet", url: "https://cca.hawaii.gov/pvl/files/2013/06/Require-Instruct-App-for-Guard-or-Private-Detective_12.16R.pdf", checkedOn: "2026-10" },
        { label: "US Security Guard Licensing Requirements (Guard Training.net, Hawaii section)", url: "https://guardtraining.net/?p=987521631/", checkedOn: "2026-10" }
      ]
    },
    IL: {
      agency: "Illinois Department of Financial and Professional Regulation (IDFPR) - Security Professions",
      agencyUrl: "https://idfpr.illinois.gov/profs/securitycont.html",
      education: {
        hours: "20",
        breakdown: "20 hours of basic training from an IDFPR-approved program within 30 days of employment (225 ILCS 447/25-20), plus 8 additional hours within 6 months of hire, plus an 8-hour annual refresher each calendar year after the first employment anniversary. Armed officers complete a 48-hour firearm course (20 hrs core + 8 hrs live fire + 20 hrs legal and safety topics) under 225 ILCS 447/35-40.",
        onlineAllowed: "Training must use an IDFPR-approved program and qualified instructor; the department publishes the list of approved 20-hour basic training providers",
        apprenticeship: "No apprenticeship path",
        sourceUrl: "https://idfpr.illinois.gov/profs/securitycont.html"
      },
      experience: "No experience requirement for a PERC; the PERC is an employee registration. Licensed Private Security Contractor Agencies must have a qualifying license holder meeting the Act's experience requirements.",
      eligibility: {
        minAge: "18 for a PERC (21 for armed work and the Firearm Control Card)",
        citizenship: "US citizen or legally authorized to work in the United States",
        education: "No education requirement published",
        other: "IDFPR may refuse a PERC for disqualifying convictions under 225 ILCS 447/35-30, including a presumption of unfitness for felonies involving bodily harm, weapons, violence or theft within the past 10 years; registered sex offenders are barred; rehabilitation evidence is considered"
      },
      background: {
        method: "Live-scan electronic fingerprints through an IDFPR-licensed fingerprint vendor, submitted to the Illinois State Police and FBI; applicants confirm the prints posted to IDFPR before applying",
        fee: "Vendor-set; the state publishes no fixed amount (68 Ill. Adm. Code 1240.570(c)(2))",
        disqualifiers: "Felony convictions involving bodily harm, weapons, violence or theft within 10 years create a rebuttable presumption of unfitness; registered sex offenders are disqualified; other convictions reviewed case by case with rehabilitation evidence considered",
        sourceUrl: "https://idfpr.illinois.gov/profs/securitycont.html"
      },
      fees: [
        { item: "PERC application (Permanent Employee Registration Card)", fee: "$55", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-illinois" },
        { item: "PERC renewal (every 3 years)", fee: "$45", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-illinois" },
        { item: "Firearm Control Card (armed only)", fee: "$75 (renewal $45)", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-illinois" },
        { item: "FOID card (armed only, Illinois State Police)", fee: "$10", sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-illinois" }
      ],
      application: {
        portal: "IDFPR CORE online licensing system",
        portalUrl: "https://idfpr.illinois.gov/profs/securitycont.html",
        steps: [
          "Complete the 20-hour basic training course with an IDFPR-approved provider and keep the certificate",
          "Register on IDFPR's online system and get live-scan fingerprinted at an IDFPR-approved vendor for the purpose of Security Guards",
          "Confirm IDFPR received the fingerprint results before submitting the application",
          "Submit the PERC application under the Detective, Security Fingerprint and Alarm Contractor Board category and pay the $55 fee",
          "There is no state examination for the PERC; armed officers separately obtain a FOID card ($10, Illinois State Police) and a Firearm Control Card ($75) after the 48-hour firearm course",
          "Work as an employee of a licensed Private Security Contractor Agency"
        ],
        processingTime: "Not published by IDFPR",
        sourceUrl: "https://www.americansecurityservices.com/wp-content/uploads/2025/09/Applying-for-your-PERC-WEB.pdf"
      },
      renewal: {
        cycle: "3 years; PERC expires May 31 on the three-year cycle",
        ce: "8 hours of refresher training every calendar year after the first employment anniversary (employer keeps records); armed officers complete an 8-hour firearm refresher each year",
        fee: "$45 (Firearm Control Card renewal also $45)",
        late: "If the renewal window is missed, the licensee must request a reinstatement application from IDFPR",
        sourceUrl: "https://idfpr.illinois.gov/profs/securitycont.html"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$39,490", p25: "$37,060", p75: "$46,360", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=IL" },
      localNuance: "The PERC belongs to the officer and stays valid when changing employers, but it only permits guard work while employed by or registered under a licensed Private Security Contractor Agency. The Firearm Control Card is employment-tied: renewal requires proof of continued employment with the issuing agency plus a valid FOID card. No state examination is given for the PERC - qualification is training- and background-based. Employers who knowingly hire unregistered guards face penalties under the Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act of 2004 (225 ILCS 447).",
      recentChanges: [
        { year: 2024, change: "IDFPR launched CORE, a new online licensing system, on October 30, 2024; new applications for Private Security Contractor licenses moved to CORE, and the legacy electronic batch PERC renewal process was retired in favor of a manual batch form.", sourceUrl: "https://idfpr.illinois.gov/profs/securitycont.html" }
      ],
      stateFaqs: [
        { q: "What is a PERC card in Illinois?", a: "The Permanent Employee Registration Card is IDFPR's employee registration that every unarmed security officer needs to work for a licensed Private Security Contractor Agency. It costs $55, requires 20 hours of basic training and live-scan fingerprints, and renews every 3 years for $45." },
        { q: "Is there an exam to become a security guard in Illinois?", a: "No state exam is required for the PERC. Qualification is based on the 20-hour IDFPR-approved basic training course and a fingerprint background check. Armed officers instead complete the 48-hour firearm training course with its exam and range requirement to earn a Firearm Control Card." },
        { q: "What extra steps apply to armed security officers?", a: "Armed officers need a valid Illinois FOID card ($10 from the State Police) and a Firearm Control Card ($75) on top of the PERC, including the 48-hour firearm course with an 8-hour live-fire component. The FCC is tied to employment and renews for $45 with proof of continued agency employment and an annual 8-hour firearm refresher." },
        { q: "How much training does an Illinois guard need in the first year?", a: "20 hours of basic training within 30 days of hire, 8 more hours within 6 months, then 8 hours of refresher training each calendar year after the first employment anniversary. Employers keep the records and IDFPR can audit them." },
        { q: "Can a felony conviction disqualify a PERC applicant?", a: "A felony involving bodily harm, weapons, violence or theft within the past 10 years creates a presumption of unfitness that the applicant can try to rebut, and registered sex offenders are barred. Older or minor convictions are reviewed case by case, and Illinois law requires consideration of rehabilitation evidence." }
      ],
      sources: [
        { label: "IDFPR Security Professions (PERC, FCC, training program lists)", url: "https://idfpr.illinois.gov/profs/securitycont.html", checkedOn: "2026-10" },
        { label: "IDFPR news release - online PERC application transition", url: "https://idfpr.illinois.gov/news/2016/11022016IDFPRTransitionOnlineAppSecPHTApplicants.asp", checkedOn: "2026-10" },
        { label: "Illinois Security Guard License Costs (License Navigator, citing 68 Ill. Adm. Code 1240)", url: "https://licensenavigator.ai/blog/security-guard-license-cost-illinois", checkedOn: "2026-10" },
        { label: "Illinois Security Guard License Requirements (Security Dogma, citing 225 ILCS 447)", url: "https://securitydogma.com/licensing/illinois", checkedOn: "2026-10" },
        { label: "Applying for your PERC - employer step-by-step guide (American Security Services)", url: "https://www.americansecurityservices.com/wp-content/uploads/2025/09/Applying-for-your-PERC-WEB.pdf", checkedOn: "2026-10" }
      ]
    },
    IN: {
      agency: "Indiana Professional Licensing Agency (PLA) - Private Investigator and Security Guard Licensing Board",
      agencyUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/",
      education: {
        hours: "None set by the state",
        breakdown: "Indiana sets no state training hours for individual guards; training is set by the employing agency or client. State training rules apply only to the agency qualifier, who must document 4,000 hours of W-2 experience or a criminal justice bachelor's degree (874 IAC 1-3-1).",
        onlineAllowed: "At the employer's discretion",
        apprenticeship: "No state apprenticeship path",
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
      },
      experience: "No experience requirement for individual guards. The agency qualifier needs at least 2 years (4,000 verifiable hours) of W-2 experience in security or investigations - law enforcement, military police, and managing a proprietary force of 20+ employees qualify - or a bachelor's degree in criminal justice or a related field. 1099 experience is not accepted.",
      eligibility: {
        minAge: "No state minimum for line guards (employers typically require 18, and 21 for armed posts); the agency qualifier must be at least 21",
        citizenship: "No state requirement published for line guards",
        education: "No state requirement for line guards; a criminal justice bachelor's degree can substitute for the qualifier's experience",
        other: "The board can deny an agency qualifier with a felony conviction, a directly related misdemeanor, an active warrant, or who is on probation or parole"
      },
      background: {
        method: "The licensed agency keeps a photograph (taken within 30 days of hire) and a complete set of fingerprints for each employee (IC 25-30-1.3-13). The agency qualifier submits an Indiana State Police fingerprint-based check plus criminal history records from every city, county and state of residence in the past 7 years.",
        fee: "No state fee for line guards; qualifier background check costs paid to the issuing agencies",
        disqualifiers: "No statutory conviction list for line guards because they are not licensed; employer and contract client standards apply. The board reviews qualifier criminal history at the agency level.",
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
      },
      fees: [
        { item: "Security Guard Agency license application", fee: "$300 ($150 if applying less than 1 year before the quadrennial renewal date)", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information" },
        { item: "Agency renewal (every 4 years)", fee: "$300 ($50 late fee if postmarked after expiration)", sourceUrl: "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf" },
        { item: "Individual guard license", fee: "None - Indiana issues no individual guard license or guard card", sourceUrl: "https://securitydogma.com/?p=1736" },
        { item: "General liability insurance (agency)", fee: "$100,000 minimum policy listing the State of Indiana as additional insured (IC 25-30-1.3-16)", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information" }
      ],
      application: {
        portal: "MyLicense One (Access Indiana)",
        portalUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information",
        steps: [
          "There is no individual guard license, exam, or state application in Indiana - apply directly to licensed security guard agencies or in-house security departments",
          "Provide the agency your fingerprints, a photo, and consent to its background check; the agency keeps these on file under IC 25-30-1.3-13",
          "Complete the agency's own pre-post training (state law sets none)",
          "Aspiring agency owners file the Security Guard Agency application with $300, the 7-year criminal history checks, ISP fingerprint results, verification of experience (W-2 based), and the $100,000 liability certificate naming the State of Indiana as additional insured"
        ],
        processingTime: "About 4 weeks for agency renewals by mail; new agency applications reviewed by the board",
        sourceUrl: "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf"
      },
      renewal: {
        cycle: "4 years; agency licenses share a common expiration on October 1 of the quadrennial cycle (next 2027)",
        ce: "No continuing education; renewal requires a limited criminal background check and a current insurance certificate",
        fee: "$300 (plus $50 late fee if postmarked after expiration)",
        late: "Reinstatement after 3 or more years expired is $600",
        sourceUrl: "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$36,490", p25: "$31,240", p75: "$44,440", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=IN" },
      localNuance: "Indiana is a pure company-license state: the Private Investigator and Security Guard Licensing Board licenses Security Guard Agencies under IC 25-30-1.3 and issues nothing to line officers - no guard card, no state training hours, no exam. A licensed agency may employ as many unlicensed guards as it needs and is civilly responsible for their conduct; it must keep each employee's photo and fingerprints on file. The agency license itself does not authorize anyone to carry a weapon (IC 25-30-1.3-20); armed authority flows from Indiana's general firearms law (permitless carry since July 1, 2022), and employers and insurers typically require armed officers to be 21. In-house guards employed directly by a hospital, retailer, or factory fall outside agency licensing entirely.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/" }
      ],
      stateFaqs: [
        { q: "Do I need a security guard license in Indiana?", a: "No. Indiana licenses security guard agencies, not individual guards. You work under the employing agency's license, which keeps your photo and fingerprints on file and is civilly responsible for your conduct on the job." },
        { q: "Is there a state exam or training requirement for Indiana guards?", a: "No. The state sets no exam and no minimum training hours for line officers; the employing agency or its clients set training. The 4,000-hour or criminal justice degree experience rule applies only to the agency qualifier." },
        { q: "Can Indiana security guards carry weapons?", a: "The security licensing chapter does not authorize carrying a weapon (IC 25-30-1.3-20). Armed work is governed by Indiana's general firearms law - permitless carry took effect July 1, 2022 - plus employer and insurer policies, which usually require armed officers to be at least 21." },
        { q: "What does a security guard agency license cost?", a: "$300 to apply ($150 if within a year of the renewal date), $300 to renew every 4 years on the October 1 cycle, and a $100,000 general liability policy naming the State of Indiana as an additional insured. Reinstatement after 3 or more years expired is $600." },
        { q: "How do Indiana agencies vet their guards?", a: "Under IC 25-30-1.3-13 the agency keeps a photograph taken within 30 days of hire and a complete set of each employee's fingerprints, and must provide a roster of unlicensed employees to the board on request. Most agencies also run state police limited criminal history checks and drug screens." }
      ],
      sources: [
        { label: "Indiana PLA - Private Investigator and Security Guard Licensing Information", url: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information", checkedOn: "2026-10" },
        { label: "Indiana PLA - Private Investigator and Security Guard Board", url: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-board/", checkedOn: "2026-10" },
        { label: "Indiana PI Firm and Security Guard Agency Renewal Form (fees, insurance)", url: "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf", checkedOn: "2026-10" },
        { label: "Indiana Security Guard License Requirements (Security Dogma, citing IC 25-30-1.3)", url: "https://securitydogma.com/?p=1736", checkedOn: "2026-10" },
        { label: "Indiana Security Guard Company License Guide (CGuardPro, citing 874 IAC 1)", url: "https://cguardpro.com/en/blog/indiana-security-guard-company-license", checkedOn: "2026-10" }
      ]
    },
    LA: {
      agency: "Louisiana State Board of Private Security Examiners (LSBPSE)",
      agencyUrl: "http://www.lsbpse.com/security-officer-registration",
      exam: {
        vendor: "LSBPSE Security Officer Safety Training (S.O.S.T.) program",
        vendorUrl: "https://www.lsbpse.com/training",
        parts: [
          { name: "S.O.S.T. 1101 and 1102 examinations", questions: "Not published", time: "Not published", pass: "Pass required before the first work assignment" }
        ],
        fee: "Included in training provider costs; the board publishes no separate exam fee",
        practical: "Armed officers complete firearms training and range qualification per weapon type before armed duties",
        languages: ["English"],
        sourceUrl: "http://www.lsbpse.com/faq-security-officer"
      },
      education: {
        hours: "16",
        breakdown: "Standard first-time security officers complete S.O.S.T. 1101 and S.O.S.T. 1102 (16 hours total) and pass the required examinations before the first work assignment. Qualifying out-of-state officers may use the 4-hour S.O.S.T. pathway; retired officers 5+ years take the 4-hour S.O.S.T. 1401 course.",
        onlineAllowed: "Not stated on the board's registration pages",
        apprenticeship: "No apprenticeship path",
        sourceUrl: "http://www.lsbpse.com/security-officer-registration"
      },
      experience: "No experience requirement for security officer registration; retired law-enforcement officers receive training exemptions based on POST credentials.",
      eligibility: {
        minAge: 18,
        citizenship: "Standard identification required: government photo ID, Social Security number, signed Form I-9",
        education: "No education requirement published",
        other: "Must be affiliated with a licensed security company; all training must be completed before the first work assignment"
      },
      background: {
        method: "Criminal background check through IdentoGO using LSBPSE service code 27N43R",
        fee: "Paid to IdentoGO at scheduling; the board publishes no fixed amount on its registration page",
        disqualifiers: "The board will not issue a registration card until its investigation confirms the applicant meets registration requirements (La. Admin. Code Title 46, Part LIX)",
        sourceUrl: "http://www.lsbpse.com/faq-security-officer"
      },
      fees: [
        { item: "Security officer registration", fee: "$75 (either the applicant or the company may pay; 3% processing fee on electronic payments)", sourceUrl: "http://www.lsbpse.com/security-officer-registration" },
        { item: "Registration renewal (2 years)", fee: "$65", sourceUrl: "http://www.lsbpse.com/security-officer-registration" },
        { item: "Replacement card (lost or mutilated)", fee: "$10", sourceUrl: "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf" },
        { item: "Status change (unarmed to armed)", fee: "Status change fee per board fee schedule; firearms training verification required first", sourceUrl: "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf" }
      ],
      application: {
        portal: "LSBPSE Registration and Licensing Portal",
        portalUrl: "https://www.lsbpselicense.com/lms/public/portal#/login",
        steps: [
          "Create a portal profile using a passport-quality photo",
          "Complete the Initial Security Officer Application and request affiliation with a licensed security company",
          "The hiring company accepts the affiliation and uploads your ID and Form I-9",
          "Complete payment, the IdentoGO background check (service code 27N43R), and the S.O.S.T. 1101/1102 training and exams before the first work assignment",
          "Receive the registration card showing the company name and issue/expiration dates - you cannot work armed or unarmed on a pending application"
        ],
        processingTime: "Not published by the board",
        sourceUrl: "http://www.lsbpse.com/faq-security-officer"
      },
      renewal: {
        cycle: "2 years from date of hire; the card displays issue and expiration dates",
        ce: "The board's 2026 rule changes update training requirements; armed officers must maintain firearms qualification for their weapon classification",
        fee: "$65",
        late: "Reinstatement through the Registration and Licensing Portal under board requirements",
        sourceUrl: "http://www.lsbpse.com/security-officer-registration"
      },
      reciprocity: {
        rule: "Louisiana's Welcome Home Act gives applicants who hold a security officer registration or similar credential from another state a registration pathway, potentially including the 4-hour S.O.S.T. training pathway instead of the full 16 hours.",
        agreements: null,
        sourceUrl: "http://www.lsbpse.com/security-officer-registration"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$32,240", p25: "$29,430", p75: "$38,310", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=LA" },
      localNuance: "Every security officer working for a licensed Louisiana company must hold an LSBPSE registration card, which displays the employing company's name and is valid for that employer. Registration cards carry weapon classifications (revolver, 9mm, 40 caliber, 45 caliber, shotgun, straight baton, PR-24 baton, or unarmed), and moving between employers requires a reapplication; a change-of-employment window applies. Unarmed officers may work emergency assignments up to 20 calendar days in a six-month period. Active law-enforcement officers working as independent contractors within their jurisdiction are exempt from registration, but all retired officers must register.",
      recentChanges: [
        { year: 2026, change: "Updated LSBPSE rules take effect October 20, 2026, touching application requirements, training, registration expiration, less-lethal device training, and employment transfers; the change-of-employment period increases from 30 to 60 days, with no new background check required solely for the move.", sourceUrl: "https://www.lsbpse.com/rules-update" },
        { year: 2025, change: "Changes to Louisiana's private security law under HB 921, including employee classification requirements for employees of private contract security companies, are reflected in board updates and new applications.", sourceUrl: "https://lsbpse.com/" }
      ],
      stateFaqs: [
        { q: "What training does a first-time Louisiana security officer need?", a: "16 hours total: LSBPSE S.O.S.T. 1101 and S.O.S.T. 1102, plus the required examinations, all completed before the first work assignment. Out-of-state officers with a comparable credential may qualify for the 4-hour pathway." },
        { q: "How much does Louisiana security officer registration cost?", a: "$75 for the initial registration and $65 for the two-year renewal, payable by either the officer or the company. Electronic payments carry a 3% processing fee, and a replacement card is $10." },
        { q: "Can I start working while my Louisiana registration is pending?", a: "No. Once the company accepts your affiliation you may appear on its roster, but you cannot work until you receive a valid registration card showing the company name and your registration dates." },
        { q: "What happens when I change security companies in Louisiana?", a: "Your registration and company affiliation must be updated through the board's portal before working under the new company. Starting October 20, 2026, officers who join another licensed company within 60 days of leaving one no longer need a new background check solely because of the move." },
        { q: "Do active or retired police officers need Louisiana registration?", a: "Active officers employed by a licensed security company must register (within or outside their jurisdiction), though those working within their jurisdiction as independent contractors need not. Retired officers must always register; those retired 5 or more years also take the 4-hour S.O.S.T. 1401 course and exam." }
      ],
      sources: [
        { label: "LSBPSE - Security Officer Registration", url: "http://www.lsbpse.com/security-officer-registration", checkedOn: "2026-10" },
        { label: "LSBPSE - Security Officers FAQ", url: "http://www.lsbpse.com/faq-security-officer", checkedOn: "2026-10" },
        { label: "Louisiana Administrative Code Title 46, Part LIX - Private Security Examiners", url: "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf", checkedOn: "2026-10" },
        { label: "LSBPSE homepage (2026 rule changes, HB 921)", url: "https://lsbpse.com/", checkedOn: "2026-10" },
        { label: "LSBPSE Security Officer FAQ page (background check service code)", url: "http://www.lsbpse.com/faq-security-officer", checkedOn: "2026-10" }
      ]
    },
    ME: {
      agency: "Maine State Police - Special Investigations Unit, Weapons and Professional Licensing Division",
      agencyUrl: "http://www.maine.gov/dps/msp/node/52",
      education: {
        hours: "None set by the state",
        breakdown: "Chapter 93 (32 M.R.S. 9401-9418) sets no training-hour requirement for security guards and no exam; the employing contract security company sets and documents training.",
        onlineAllowed: "At the employer's discretion",
        apprenticeship: "No state apprenticeship path",
        sourceUrl: "https://www.mainelegislature.org/LEGIS/STATUTES/32/title32ch93.pdf"
      },
      experience: "No experience requirement for guards. The company license applicant must show good moral character and meet the statutory qualifications of 32 M.R.S. 9405-A; no experience, exam, or training hours are required for the license itself.",
      eligibility: {
        minAge: "18 (statutory qualifications for the license holder; employers set guard minimums)",
        citizenship: "US citizen or resident alien (license qualification)",
        education: "No education requirement published",
        other: "No dishonorable military discharge within 5 years; no conviction punishable by 1 year or more imprisonment (with 5-year lookbacks for enumerated crimes); not a fugitive, drug abuser, or subject of specified mental health adjudications"
      },
      background: {
        method: "The employer notifies the Commissioner before a guard's first shift and files a signed background statement within 60 days of hire; the license applicant submits a Maine State Bureau of Identification record check plus state criminal history records from every state of residence in the past 5 years and authorizes releases (Forms P-3E and 577) for court, law enforcement, military, and mental health records.",
        fee: "$21 State Bureau of Identification record check (included in the $121 application fee); no state fee for individual guards",
        disqualifiers: "Conviction of a crime punishable by 1 year or more (or within 5 years, an enumerated crime under 32 M.R.S. 9412), three or more lesser convictions in 5 years, fugitive status, drug abuse, certain mental health findings, dishonorable discharge within 5 years",
        sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf"
      },
      fees: [
        { item: "Contract Security Company license application", fee: "$121 with application ($100 fee + $21 background check), then $300 due upon issuance", sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf" },
        { item: "Company license renewal (annual)", fee: "$221 ($200 + $21 background check)", sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf" },
        { item: "Surety bond", fee: "$10,000 for Maine residents; $50,000 for non-residents (32 M.R.S. 9409)", sourceUrl: "https://safetrac.io/how-to-start-a-security-company-in-maine" },
        { item: "Individual guard license", fee: "None - Maine issues no individual guard license", sourceUrl: "https://securitydogma.com/licensing/maine" }
      ],
      application: {
        portal: "Maine State Police Weapons and Professional Licensing (paper application packet)",
        portalUrl: "http://www.maine.gov/dps/msp/node/52",
        steps: [
          "There is no individual guard license or state exam in Maine - apply to a licensed contract security company or proprietary security organization",
          "Before your first shift, the employer notifies the Commissioner of Public Safety that you are working as a guard",
          "The employer files your signed background statement within 60 days of hire (before starting work at strike or labor dispute sites)",
          "Companies file the Contract Security Company License packet (8 pages, photo, birth certificate or resident alien card, 5 release forms, out-of-state criminal records) to State House Station 164 in Augusta with a $121 fee",
          "Do not carry a weapon on duty until the employer confirms your background statement has been filed and its firearms requirements are met"
        ],
        processingTime: "6 to 8 weeks for the company license application",
        sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_Coverletter_New.pdf"
      },
      renewal: {
        cycle: "1 year for the company license (guards have no license to renew)",
        ce: "No continuing education requirement",
        fee: "$221 company renewal plus continuation bond and a list of guards hired since the last license",
        late: "Not published by the State Police",
        sourceUrl: "https://safetrac.io/how-to-start-a-security-company-in-maine"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$39,100", p25: "$34,760", p75: "$45,360", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=ME" },
      localNuance: "Maine licenses the company, not the guard: no person may act as a security guard except an employee of a licensed contract security company or a proprietary security organization (32 M.R.S. 9404). Guards have no police powers and rely on citizen's arrest and shopkeeper's privilege authority under 17-A M.R.S. 16. Carrying a dangerous weapon at a strike or labor dispute site is generally a crime, and the background investigation must be complete before working such a post. Proprietary in-house security organizations and their employees are exempt from licensing. A concealed carry permit does not create any on-duty armed authorization.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "http://www.maine.gov/dps/msp/node/52" }
      ],
      stateFaqs: [
        { q: "Do security guards need a license in Maine?", a: "No individual license exists. The contract security company must be licensed by the Maine State Police under 32 M.R.S. Chapter 93, and the employer must report each guard to the Commissioner before the guard's first shift." },
        { q: "How much does security licensing cost in Maine?", a: "Individual guards pay nothing. The company pays $121 with the application, $300 upon issuance, and $221 to renew annually, plus a $10,000 surety bond ($50,000 if the company is not a Maine resident entity)." },
        { q: "Is there a Maine security guard exam or training requirement?", a: "No. Chapter 93 contains no exam, no experience minimum, and no mandated training hours; employers set and document their own guard training." },
        { q: "What is the 60-day background rule?", a: "The employer must file a signed background statement with the State Police within 60 days of a guard starting work. At strike or labor dispute sites the investigation must be finished before the guard starts, and being armed at such a site is generally a crime." },
        { q: "What disqualifies someone from security work in Maine?", a: "The statutory qualifications include no conviction punishable by a year or more imprisonment, no enumerated-crime conviction in the past 5 years, no dishonorable discharge within 5 years, and no fugitive, drug abuse, or specified mental health findings. Prior out-of-state licenses cannot transfer because Maine has no guard license." }
      ],
      sources: [
        { label: "Maine State Police - Professional Investigator and Contract Security Licenses", url: "http://www.maine.gov/dps/msp/node/52", checkedOn: "2026-10" },
        { label: "Maine Contract Security Company License Application (fees, procedure)", url: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf", checkedOn: "2026-10" },
        { label: "Maine Revised Statutes Title 32, Chapter 93 - Private Security Guards", url: "https://www.mainelegislature.org/LEGIS/STATUTES/32/title32ch93.pdf", checkedOn: "2026-10" },
        { label: "Maine Security Guard License Requirements (Security Dogma)", url: "https://securitydogma.com/licensing/maine", checkedOn: "2026-10" },
        { label: "How To Start A Security Company in Maine (Safetrac, bond and fee detail)", url: "https://safetrac.io/how-to-start-a-security-company-in-maine", checkedOn: "2026-10" }
      ]
    },
    MD: {
      agency: "Maryland State Police - Licensing Division, Professional Licensing Unit",
      agencyUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification",
      education: {
        hours: "12",
        breakdown: "12 hours of initial security training approved by the Maryland Police Training and Standards Commission before certification (or employment as a police officer within the 3 years preceding application). Renewal requires 8 hours of MPTSC-approved continuing security training every 3 years.",
        onlineAllowed: "MPTSC-approved providers deliver the training; the commission lists approved security guard training on its site",
        apprenticeship: "No apprenticeship path",
        sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      experience: "No experience requirement for guard certification; applicants must be employed by or an applicant for employment with a licensed security guard agency or security guard employer.",
      eligibility: {
        minAge: 18,
        citizenship: "Not expressly stated; sworn application and criminal history declarations required",
        education: "No education requirement published",
        other: "Good moral character and reputation; no conviction of a disqualifying crime (Public Safety § 5-101) or crime of violence (Criminal Law § 14-101); no formal excessive-force or false-statement findings for current or former police officers; armed guards must hold a valid Maryland handgun permit"
      },
      background: {
        method: "Live-scan fingerprints submitted to the Maryland Criminal Justice Information System (CJIS) and the FBI (agency authorization 9300000802, ORI MDMSP6000); prints are valid only 30 days, so the application must reach MSP within that window. A signed FBI Privacy Act Statement is required.",
        fee: "Fingerprint vendor fee paid separately; the $15 application fee does not include it",
        disqualifiers: "Conviction of a disqualifying crime under Public Safety § 5-101 or a crime of violence under Criminal Law § 14-101; COMAR 29.04.08.02 also lists crimes of violence, felonies, habitual drunkenness, fugitive status, narcotics addiction, and certain mental institutional commitments",
        sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      fees: [
        { item: "Security Guard Certification application", fee: "$15 (nonrefundable)", sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification" },
        { item: "Certification renewal (3 years)", fee: "$10", sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification" },
        { item: "Renewal late fee", fee: "$5 per day, up to $150 maximum", sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification" },
        { item: "Security Guard Agency license (for context)", fee: "$200 individual unincorporated / $375 firm incorporated; renewal $200 / $400", sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx" },
        { item: "Ink fingerprint cards (non-Maryland residents)", fee: "$30", sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx" }
      ],
      application: {
        portal: "Maryland State Police Licensing Portal",
        portalUrl: "https://licensingportal.mdsp.maryland.gov/MspBridgeClient/#/home",
        steps: [
          "Complete 12 hours of MPTSC-approved initial security training or document police employment within the prior 3 years",
          "Submit live-scan fingerprints to CJIS and the FBI and sign the FBI Privacy Act Statement - prints expire 30 days after submission",
          "Create a Licensing Portal account and complete the Security Guard Certification application with a passport-style photo taken within 30 days",
          "Your employing agency or security guard employer reviews and submits the application with the fees",
          "MSP reviews, completes the background investigation, and notifies you of approval within 90 days; the certification is mailed and valid 3 years"
        ],
        processingTime: "90 days (completeness review within 5-10 business days; 15 days to respond or the application is cancelled)",
        sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      renewal: {
        cycle: "3 years from year of issuance",
        ce: "8 hours of MPTSC-approved continuing security training (guards first certified without the 12-hour course must complete it for renewal)",
        fee: "$10",
        late: "$5 per day if the renewal is not filed at least 30 days before expiration, capped at $150; outstanding late fees block certification",
        sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      reciprocity: {
        rule: "None. Maryland State Police states that an out-of-state security certificate cannot be used to work in Maryland; applicants must earn a Maryland Security Guard Certification.",
        agreements: null,
        sourceUrl: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$38,220", p25: "$35,700", p75: "$46,750", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=MD" },
      localNuance: "Maryland certifies individual guards through the State Police, and since January 1, 2025 the certification requirement also covers in-house guards employed directly by businesses ('security guard employers'), not just agency guards. Employers of armed guards must carry commercial general liability insurance ($500,000 aggregate if fewer than 5 guards, $1,000,000 if 5 or more), and guards plus employers must report uses of force to MSP within 48 hours. Exemptions apply to marine guards and ship watchmen, special police officers under Public Safety Title 3, Subtitle 3, and unarmed bar, tavern, and restaurant employees. Armed guards need a separate Maryland handgun permit (wear and carry).",
      recentChanges: [
        { year: 2024, change: "Senate Bill 760 (2023), delayed by Senate Bill 729 (2024) to January 1, 2025, requires all security guards - including in-house security guard employer staff - to hold MSP certification, mandates 12 hours of MPTSC-approved initial training, adds liability insurance minimums for employers, and creates use-of-force reporting.", sourceUrl: "https://mdsp.maryland.gov/Organization/Documents/LD-PLU-24-001%20Senate%20Bill%20760%20%282023%29%20and%20Senate%20Bill%20729%20%282024%29%20Updates.pdf" }
      ],
      stateFaqs: [
        { q: "How much does Maryland security guard certification cost?", a: "$15 for the initial certification and $10 for each 3-year renewal, collected electronically through the MSP Licensing Portal. Fingerprint vendor fees are separate, and late renewals accrue $5 per day up to $150." },
        { q: "What training is required for a Maryland guard card?", a: "12 hours of initial security training approved by the Maryland Police Training and Standards Commission, unless you were employed as a police officer within the 3 years before applying. Renewals need 8 hours of MPTSC-approved continuing training every 3 years." },
        { q: "Can I use an out-of-state security license in Maryland?", a: "No. The Maryland State Police states that a security guard certification issued by another state cannot be used to work in Maryland; you must earn the Maryland certification, and the agency must submit your application." },
        { q: "Do in-house (non-agency) guards need Maryland certification?", a: "Yes, as of January 1, 2025. Senate Bill 760 (2023) as delayed by SB 729 (2024) extends certification to guards employed directly by businesses and nonprofits, requires those employers to register with MSP and carry $500,000 or $1,000,000 liability insurance, and adds use-of-force reporting." },
        { q: "How long does Maryland guard certification take?", a: "MSP issues a decision within 90 days of a complete application. Live-scan fingerprints expire 30 days after submission, so the application must reach the Licensing Division inside that window, and incomplete applications are cancelled if not corrected within 15 days." }
      ],
      sources: [
        { label: "Maryland State Police - Security Guard Certification", url: "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification", checkedOn: "2026-10" },
        { label: "COMAR 29.04.08.02 - Security Guard Certification Card", url: "https://regs.maryland.gov/us/md/exec/comar/29.04.08.01", checkedOn: "2026-10" },
        { label: "Md. Code, Business Occupations and Professions § 19-402 (guard certification qualifications)", url: "http://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gbo&section=19-402", checkedOn: "2026-10" },
        { label: "MSP Advisory LD-PLU-24-001 - SB 760 (2023) and SB 729 (2024)", url: "https://mdsp.maryland.gov/Organization/Documents/LD-PLU-24-001%20Senate%20Bill%20760%20%282023%29%20and%20Senate%20Bill%20729%20%282024%29%20Updates.pdf", checkedOn: "2026-10" },
        { label: "MDSP - Security Guard Agency License (agency fees)", url: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx", checkedOn: "2026-10" }
      ]
    },
    MI: {
      agency: "Michigan Department of Licensing and Regulatory Affairs (LARA) - Corporations, Securities and Commercial Licensing Bureau",
      agencyUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards",
      education: {
        hours: "None set by the state",
        breakdown: "The Private Security Business and Security Alarm Act (1968 PA 330, MCL 338.1051 et seq.) sets no pre-assignment or continuing training hours for line security employees; the employing agency sets training. Qualification requirements attach to the agency's qualifying officer.",
        onlineAllowed: "At the employer's discretion",
        apprenticeship: "No state apprenticeship path",
        sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/employee-requirements"
      },
      experience: "No experience requirement for line guards. The agency's qualifying officer must satisfy MCL 338.1056(1)(g): 4 years of supervisory-level security experience, 4 years as a certified police officer, 2 years of security experience plus a relevant bachelor's degree, military police experience with an affidavit, or other statutory routes.",
      eligibility: {
        minAge: "No state minimum published for line employees (employers set it); the qualifying officer must be at least 21",
        citizenship: "Not expressly published for line employees",
        education: "Qualifying officer needs a high school education or equivalent",
        other: "Qualifying officer must have no felony conviction, no listed offense conviction in the prior 5 years (MCL 338.1060(1)(c)), and no insanity adjudication without restoration"
      },
      background: {
        method: "The agency application requires five reference statements, two passport photos of the qualifying officer, and approval of the county sheriff or chief of police AND the county prosecuting attorney where the principal office sits (MCL 338.1057(3)). Agencies file employee rosters quarterly (MCL 338.1067).",
        fee: "No separate state fingerprint fee published for line employees",
        disqualifiers: "Felony conviction bars the qualifying officer; the license may be revoked for good cause; employees are vetted by the employer",
        sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license"
      },
      fees: [
        { item: "Security Guard Agency license (initial)", fee: "$300 (2-year term)", sourceUrl: "https://www.michigan.gov/securityguard" },
        { item: "Security Guard Agency renewal", fee: "$150 ($175 late renewal)", sourceUrl: "https://www.michigan.gov/securityguard" },
        { item: "Security Guard Sole Proprietor license (initial)", fee: "$200 (renewal $100, late $125)", sourceUrl: "https://www.michigan.gov/securityguard" },
        { item: "Branch office license", fee: "$50", sourceUrl: "https://www.michigan.gov/securityguard" },
        { item: "Surety bond or insurance", fee: "$25,000 bond, or a policy naming licensee and state as coinsured ($25,000 property / $100,000 per person / $200,000 per occurrence) (MCL 338.1059(4))", sourceUrl: "https://legislature.mi.gov/documents/mcl/archive/2024/June/mcl-Act-330-of-1968.pdf" }
      ],
      application: {
        portal: "MiCLEAR (LARA licensing system)",
        portalUrl: "https://aca-prod.accela.com/MICLEAR/Default.aspx",
        steps: [
          "There is no individual guard license or state exam in Michigan - apply to a licensed Security Guard Agency or sole proprietor",
          "The employer adds you to its quarterly employee roster filed with LARA under MCL 338.1067",
          "The employer must hold an active agency or sole proprietor license, including a $25,000 bond or qualifying insurance and local sheriff/police and prosecutor approvals",
          "Companies wanting their own license file the Security Guard Agency application in MiCLEAR with a $300 fee, a Michigan physical office, five reference statements, entity documents, and the local approvals"
        ],
        processingTime: "LARA must issue or deny a completed application within 180 days under MCL 338.1059",
        sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license"
      },
      renewal: {
        cycle: "2 years (MCL 338.1059(2))",
        ce: "No continuing education requirement",
        fee: "$150 agency / $100 sole proprietor / $50 branch",
        late: "Late renewal: $175 agency / $125 sole proprietor / $75 branch; lapsed licenses require relicensure ($300 agency)",
        sourceUrl: "https://www.michigan.gov/securityguard"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$37,080", p25: "$34,230", p75: "$46,480", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=MI" },
      localNuance: "Michigan licenses security guard companies, not individual officers: the Private Security Business and Security Alarm Act (1968 PA 330, MCL 338.1051 et seq.) regulates agencies, sole proprietors, and branch offices, while line guards appear on the employer's quarterly employee roster with no personal credential. Every agency needs a qualifying officer meeting MCL 338.1056 experience routes, a $25,000 bond or equivalent insurance, and sign-off from the county sheriff or chief of police plus the prosecuting attorney. The Department of State Police administers the act for private security police and private college security forces (MCL 338.1052(1)(b)). A Michigan CPL does not by itself create on-duty armed authority.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards" }
      ],
      stateFaqs: [
        { q: "Do individual security guards need a license in Michigan?", a: "No. Michigan licenses the company - Security Guard Agency, sole proprietor, or branch - under the Private Security Business and Security Alarm Act (MCL 338.1051 et seq.). Individual officers work under the employer's license and are listed on its quarterly employee roster." },
        { q: "What does a Michigan security guard agency license cost?", a: "$300 for the initial 2-year agency license and $150 to renew ($175 if late). Sole proprietors pay $200 initially and $100 to renew, and each branch office license is $50." },
        { q: "Is there an exam or state training requirement for Michigan guards?", a: "No. The act sets no exam and no training hours for line security employees; the employer sets training. The statutory experience routes (4 years supervisory, police service, or 2 years plus a degree) apply to the agency's qualifying officer." },
        { q: "What makes Michigan agency applications unusual?", a: "The application needs five reference statements, two passport photos of the qualifying officer, proof of a $25,000 bond or qualifying insurance, and written approval from both the county sheriff or chief of police and the county prosecuting attorney where the principal office is located." },
        { q: "How long is a Michigan security license valid?", a: "Two years. LARA must issue or deny a completed application within 180 days, and licenses not renewed by expiration move to late renewal fees or relicensure status." }
      ],
      sources: [
        { label: "Michigan LARA - Private Security Guard Agencies", url: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards", checkedOn: "2026-10" },
        { label: "Michigan LARA - Employee Requirements of the Private Security Business and Security Alarm Act", url: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/employee-requirements", checkedOn: "2026-10" },
        { label: "Michigan LARA - Security Guard Agency Initial License (qualifying officer, documents)", url: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license", checkedOn: "2026-10" },
        { label: "Michigan Compiled Laws - Private Security Business and Security Alarm Act (1968 PA 330)", url: "https://legislature.mi.gov/documents/mcl/archive/2024/June/mcl-Act-330-of-1968.pdf", checkedOn: "2026-10" },
        { label: "Michigan LARA - Private Security Guards fees page", url: "https://www.michigan.gov/securityguard", checkedOn: "2026-10" }
      ]
    },
    MN: {
      agency: "Minnesota Private Detective and Protective Agent Services Board (PDB), Department of Public Safety",
      agencyUrl: "https://mn.gov/elicense/a-z/?id=1083-231155",
      education: {
        hours: "12",
        breakdown: "Employees of licensed protective agents complete at least 12 hours of pre-assignment training within the first 21 days of employment (or show equivalent prior experience); someone who leaves the profession for 3 or more years must repeat it. All license holders, managers, and employees complete 6 hours of certified continuing training each year; armed personnel add 6 hours of annual firearm training with range qualification plus an annual first aid course with CPR.",
        onlineAllowed: "The board certifies training providers; it does not publish a single format policy on the pages cited",
        apprenticeship: "No apprenticeship path",
        sourceUrl: "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf"
      },
      experience: "No experience requirement for employees. Protective agent license applicants need at least 6,000 hours of prior security experience (Minn. Stat. 326.3382); a license holder may hire employees who are not licensed.",
      eligibility: {
        minAge: 18,
        citizenship: "Not expressly published; criminal background check required",
        education: "No education requirement published for employees",
        other: "No felony convictions or other statutorily listed offenses (Minn. Stat. 326.3381 subd. 3); good character, honesty and integrity; employees carry a photo identification card issued by the license holder while on duty"
      },
      background: {
        method: "Criminal background check required for license holders and their employees; the license holder issues a signed photo ID card containing the company name, address, and employee photograph and description, which must be carried on duty and presented on request",
        fee: "Included in company licensing; no separate employee background fee published",
        disqualifiers: "Felony convictions and offenses listed in Minn. Stat. 326.3381, subd. 3",
        sourceUrl: "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf"
      },
      fees: [
        { item: "Protective agent license - new individual", fee: "$800 (2-year term)", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155" },
        { item: "Protective agent license - new corporation/LLC", fee: "$1,800", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155" },
        { item: "Protective agent license renewal (by employee count)", fee: "$480 (1 employee) to $1,160 (51+ employees)", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155" },
        { item: "Individual employee registration", fee: "None published - employees are not individually licensed; the employer issues the ID card", sourceUrl: "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf" }
      ],
      application: {
        portal: "Minnesota eLicense / Private Detective and Protective Agents Board application packets",
        portalUrl: "https://mn.gov/elicense/a-z/?id=1083-231155",
        steps: [
          "There is no individual guard license or state exam in Minnesota - apply to a licensed protective agent company (or a proprietary employer's in-house security department)",
          "Complete 12 hours of pre-assignment training within your first 21 days of employment through a board-certified provider",
          "Pass the employer's criminal background check and receive the company's signed photo ID card, which you must carry on duty",
          "Companies file the PAI packet (protective agent individual) or PAC packet (corporation/LLC) with the board and pay the fee; qualifiers document 6,000 hours of security experience",
          "Armed employees are certified by the board for weapon carriage after approved firearms training"
        ],
        processingTime: "Varies; the board says to contact the board office",
        sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155"
      },
      renewal: {
        cycle: "2 years for the protective agent license; continuing training is annual",
        ce: "6 hours of certified continuing training each year for license holders, qualified representatives, managers, and employees; armed personnel add 6 hours of firearm training with annual range qualification and an annual first aid/CPR course",
        fee: "$480-$1,160 depending on employee count",
        late: "Not published on the eLicense page",
        sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$43,380", p25: "$37,020", p75: "$46,110", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=MN" },
      localNuance: "Minnesota licenses protective agent companies through the PDB and does not individually license line guards, who work under the company's license and carry the employer-issued photo ID card. The proprietary employer exception (Minn. Stat. 326.32, subd. 10c) lets a private business guard only its own property without a license, though it must run the same background checks; independent contractors of a proprietor must be licensed. Unarmed guards need 12 hours of pre-assignment training within 21 days of hire, and 6 hours of continuing training every year for everyone - a heavier annual CE load than most states. Carrying a firearm requires board certification plus annual firearms and first aid/CPR training. Unlicensed protective agent work is a gross misdemeanor.",
      recentChanges: [
        { year: 2026, change: "The board published refreshed 2026 application packets (PDI/PAI/PDC/PAC) and updated the eLicense fee schedule for protective agent licenses, with the license detail page modified September 8, 2026.", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-231155" }
      ],
      stateFaqs: [
        { q: "Do Minnesota security guards need a personal license?", a: "No. The Private Detective and Protective Agents Services Board licenses protective agent companies; employees work under the company's license, complete 12 hours of pre-assignment training within 21 days of hire, and carry the employer-issued photo ID card on duty." },
        { q: "How much does a Minnesota protective agent license cost?", a: "New protective agent licenses are $800 for an individual and $1,800 for a corporation or LLC, renewable every 2 years on a sliding scale from $480 (1 employee) to $1,160 (51 or more employees). Line employees have no individual fee." },
        { q: "What continuing training do Minnesota guards need?", a: "6 hours of board-certified continuing training every year - an annual requirement heavier than most states. Anyone carrying a firearm adds 6 hours of annual firearms training with range qualification plus an annual first aid course with CPR certification." },
        { q: "What experience does a protective agent license applicant need?", a: "At least 6,000 hours of prior security experience, a $10,000 surety bond, proof of financial responsibility, good character, and no felony or statutorily listed convictions. Employees themselves need no experience hours, only the training and background check." },
        { q: "Does in-house security need a Minnesota license?", a: "No, under the proprietary employer exception: a business employing guards solely on its own property is not licensed, though it must conduct the same background checks. Independent contractors hired by such a business must be licensed by the board." }
      ],
      sources: [
        { label: "Minnesota eLicense - Protective Agent Services License (fees, forms)", url: "https://mn.gov/elicense/a-z/?id=1083-231155", checkedOn: "2026-10" },
        { label: "Minnesota House Research - Licensing Authority: Protective Agents (statutes and training)", url: "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf", checkedOn: "2026-10" },
        { label: "Minnesota Security Guard License Information (Guard Card Education)", url: "https://www.guardcardeducation.com/minnesota-security-guard-license.shtml", checkedOn: "2026-10" },
        { label: "Minnesota Private Detective and Protective Agents Board (via eLicense requirements links)", url: "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board", checkedOn: "2026-10" },
        { label: "How To Start Your Security Guard Career In Minnesota (Security Guard School)", url: "https://securityguardschool.com/blogs/all-minnestota-security-guard-insights/how-to-start-your-security-guard-career-in-minnesota-1", checkedOn: "2026-10" }
      ]
    }
  }
};
