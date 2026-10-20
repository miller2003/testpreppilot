// security-guard -- Part A: AL, AK, AZ, AR, CA, CT, DE, DC, FL
// Compiled 2026-10-20. Fragment merged by scripts/quality/merge-v2.mjs.

export default {
  key: "security-guard",
  compiledOn: "2026-10-20",
  states: {
    AL: {
      agency: "Alabama Security Regulatory Board (ASRB)",
      agencyUrl: "https://asrb.alabama.gov/",
      exam: null,
      education: {
        hours: "8",
        breakdown: "Minimum 8 hours of board-approved basic security officer training from an ASRB-certified trainer, including use of force, required before licensure under Code of Alabama Section 34-27C-8. Armed officers complete additional firearms classroom training and must qualify with their firearm at least once each calendar year.",
        onlineAllowed: "No. Training must be delivered in person by a trainer certified by the Board.",
        apprenticeship: null,
        sourceUrl: "https://asrb.alabama.gov/training"
      },
      experience: "No security experience is required for an individual security guard license. Applicants must apply within 30 days of being hired by a licensed contract security company.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or legal resident (proof of age/citizenship such as a driver's license is submitted with the application)",
        education: "No education requirement is published.",
        other: "Applicants must carry no disqualifying criminal history; armed officers (21 or older) must also hold a pistol permit issued by the sheriff of their county of residence."
      },
      background: {
        method: "Two applicant fingerprint cards submitted with the paper application to the Board",
        fee: "$37 background check fee (state ABI and FBI review)",
        disqualifiers: "Felony or disqualifying misdemeanor convictions disclosed on the application; the Board reviews criminal history from the Alabama Bureau of Investigation and the FBI.",
        sourceUrl: "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
      },
      fees: [
        { item: "Personal application and license fee", fee: "$75 (effective July 1, 2025)", sourceUrl: "https://asrb.alabama.gov/" },
        { item: "Background check", fee: "$37", sourceUrl: "https://asrb.alabama.gov/" },
        { item: "Total due with initial application", fee: "$112", sourceUrl: "https://asrb.alabama.gov/" },
        { item: "Renewal (2 years)", fee: "$75", sourceUrl: "https://legalclarity.org/how-much-does-an-alabama-security-license-cost" }
      ],
      application: {
        portal: "Paper application by mail (no online portal)",
        portalUrl: "https://asrb.alabama.gov/forms",
        steps: [
          "Complete 8 hours of training with an ASRB-certified trainer and obtain the certification of training.",
          "Complete the ASRB Personal License Application, listing 10 years of residence and employment history, criminal history, and three unrelated references.",
          "Attach two passport-style color photos, proof of age and citizenship, the authorization for release of information, the certification of experience/training, the ALEA criminal history release form, and two fingerprint cards.",
          "Submit the packet with a check for $112 payable to the ASRB; applications must be typed or printed in ink and incomplete packets are returned without consideration.",
          "There is no written examination; licensure is based on the completed packet, training certification, and the ABI/FBI background check. Officers typically work on a temporary basis while the Board processes the application."
        ],
        processingTime: "Weeks; the Board processes after the criminal history report is received",
        sourceUrl: "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "Refresher training from a certified trainer is required at renewal; armed officers complete an annual armed refresher and must qualify with their firearm each calendar year.",
        fee: "$75",
        late: "A late fee applies; the Board's current form lists a $25 late fee for qualifying agents.",
        sourceUrl: "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$33,720", p25: "$28,060", p75: "$37,420", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=AL" },
      localNuance: "State law (Section 34-27C-18) preempts city and county security licensing, so there is no separate Birmingham or Mobile guard card, but armed officers must obtain a county sheriff's pistol permit. Occasional staff who perform regulated work fewer than 30 calendar days in a year are exempt from individual licensure.",
      recentChanges: [
        { year: 2025, change: "Effective July 1, 2025, the personal application and license fee rose to $75 plus the $37 background fee, for a total of $112 per license application.", sourceUrl: "https://asrb.alabama.gov/" }
      ],
      stateFaqs: [
        { q: "How much does an Alabama guard card cost?", a: "The ASRB charges $75 for the personal application and license plus a $37 background check fee, $112 total, effective July 1, 2025. The 8-hour training course is paid separately to a certified trainer, typically $150 to $200." },
        { q: "Is there a written exam for the Alabama security guard license?", a: "No. Alabama does not administer a state examination for individual guards. Licensure turns on completing board-approved training, the application packet, and the ABI and FBI fingerprint review." },
        { q: "How long is an Alabama security guard license valid?", a: "Individual licenses are issued for two years from the date of issuance and renew on the anniversary for $75. No renewal photos are required, but refresher training documentation from a certified trainer is." },
        { q: "Can I carry a firearm as an Alabama security officer?", a: "Only with additional board firearms training, annual firearms qualification, and a pistol permit from the sheriff of the county where you live. The armed minimum age is 21, compared to 18 for unarmed officers." },
        { q: "Do I need a license before my first shift?", a: "You must apply within 30 days of being hired by a licensed contract security company. Applications filed after the 30th day draw a late fee, and working unregistered beyond that window exposes both the officer and the company to Board action." }
      ],
      sources: [
        { label: "Alabama Security Regulatory Board - Home (fee notice)", url: "https://asrb.alabama.gov/", checkedOn: "2026-10" },
        { label: "ASRB Qualifying Agent / Guard License Checklist and Application (PDF)", url: "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf", checkedOn: "2026-10" },
        { label: "ASRB Forms and Applications", url: "https://asrb.alabama.gov/forms", checkedOn: "2026-10" },
        { label: "LegalClarity - Alabama Security License Costs (renewal fee, training cost range)", url: "https://legalclarity.org/how-much-does-an-alabama-security-license-cost", checkedOn: "2026-10" },
        { label: "CGuardPro - Alabama Security Guard Company License Guide (age rules, 30-day rule, preemption)", url: "https://cguardpro.com/en/blog/alabama-security-guard-company-license", checkedOn: "2026-10" }
      ]
    },
    AK: {
      agency: "Alaska Department of Public Safety (DPS), Division of Statewide Services - Permits and Licensing",
      agencyUrl: "https://dps.alaska.gov/statewide/permits-licensing/",
      exam: null,
      education: {
        hours: "8 pre-assignment + 40 in-service + 8 annual refresher",
        breakdown: "At least 8 hours of general pre-assignment training before a temporary permit or application (13 AAC 60.110(a)); at least 40 hours of in-service training within 180 days after employment covering law of arrest, search and seizure, duties to employer and client, fire prevention, first aid, and patrol techniques (13 AAC 60.110(b)); and an annual refresher course of at least 8 hours on the same topics (13 AAC 60.110(c)).",
        onlineAllowed: "The regulation does not restrict delivery format; training is arranged through the employing licensed agency.",
        apprenticeship: null,
        sourceUrl: "https://regulations.justia.com/states/alaska/title-13/part-3/chapter-60/article-3/section-13-aac-60-110"
      },
      experience: "No prior experience is required. The application asks for five years of residence and employment history and three character references, at least one an Alaska resident.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or resident alien holding a valid work permit",
        education: "No education requirement is published.",
        other: "Applicants must not be dependent on alcohol or narcotics, must be free of any mental condition impairing memory, reason, judgment, or perception, and must have no felony conviction within the 10 years before application unless pardoned."
      },
      background: {
        method: "One set of classifiable fingerprints submitted with the paper application; DPS conducts state and FBI criminal history checks",
        fee: "$47 fingerprint fee payable to the State of Alaska",
        disqualifiers: "Felony conviction, crime of moral turpitude, or any crime preventing firearm possession within 10 years of application unless a full pardon was granted; domestic violence convictions and protective orders are separately screened on the form.",
        sourceUrl: "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
      },
      fees: [
        { item: "Security guard license application", fee: "$50", sourceUrl: "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf" },
        { item: "Fingerprint processing", fee: "$47", sourceUrl: "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf" },
        { item: "Renewal (2 years)", fee: "$50", sourceUrl: "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf" }
      ],
      application: {
        portal: "Paper application (DPS form 12-183) submitted through the employing security guard agency",
        portalUrl: "https://dps.alaska.gov/statewide/permits-licensing/",
        steps: [
          "Complete 8 hours of pre-assignment training through the agency before applying.",
          "Complete the notarized DPS application (form 12-183, revised January 2025) with a waist-up photo taken within 30 days, one classifiable fingerprint set, and proof of the bond or insurance required by 13 AAC 60.120.",
          "Attach the $50 license fee and $47 fingerprint fee, each by check or money order payable to the State of Alaska.",
          "Armed applicants attach firearm qualification or certification documents from an instructor certified under 13 AAC 60.110(f).",
          "There is no written state examination; a licensed agency may employ a new hire on a temporary basis for up to 30 days once the completed application and fee are submitted (13 AAC 60.130)."
        ],
        processingTime: "Not published; the department processes after fingerprint results clear",
        sourceUrl: "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "Renewal applications must certify completion of the annual 8-hour refresher course required by 13 AAC 60.110(c), and armed guards must document current firearm competence.",
        fee: "$50",
        late: "Renewal applications should reach DPS at least 30 days before expiration (13 AAC 60.040).",
        sourceUrl: "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$47,480", p25: "$44,370", p75: "$60,400", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=AK" },
      localNuance: "The license is employment-tied: guards report a change of employer to DPS within five days, and agencies file semiannual guard rosters with DPS by March 31 and September 30 (13 AAC 60.140). Alaska also has daily overtime law (AS 23.10.060), time and a half after 8 hours in a day, which shapes guard scheduling. A CCW permit does not authorize armed guard work.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dps.alaska.gov/statewide/permits-licensing/" }
      ],
      stateFaqs: [
        { q: "How many training hours does an Alaska security guard need?", a: "Three layers: 8 hours of pre-assignment training before applying, 40 hours of in-service training within 180 days of hire covering arrest law, search and seizure, first aid, fire prevention, and patrol, and an 8-hour refresher every year. Failing the refresher can be grounds for revocation." },
        { q: "What does an Alaska guard license cost?", a: "The DPS application form requires a $50 license fee plus a $47 fingerprint fee, both payable to the State of Alaska, along with proof of the required bond or insurance. Renewal is $50 every two years." },
        { q: "Can I start working before my Alaska guard license arrives?", a: "Yes. Under 13 AAC 60.130 a licensed agency may employ a guard on a temporary basis for up to 30 days once the completed application and fee have been submitted and the agency has made reasonable inquiries into qualifications." },
        { q: "What are the armed security requirements in Alaska?", a: "Armed guards need at least 8 hours of pre-assignment firearms training from an instructor certified by a law enforcement agency or a nationally recognized organization, must demonstrate competence with the specific firearm issued, and must pass an annual practice firing review. A concealed carry permit does not substitute." },
        { q: "Who is disqualified from an Alaska guard license?", a: "Anyone with a felony, crime of moral turpitude, or firearm-prohibiting conviction within the previous 10 years unless pardoned, anyone dependent on alcohol or narcotics, and anyone with a mental condition impairing judgment or perception. The application also screens for domestic violence orders and convictions." }
      ],
      sources: [
        { label: "Alaska DPS - Permits and Licensing (Security Guard License)", url: "https://dps.alaska.gov/statewide/permits-licensing/", checkedOn: "2026-10" },
        { label: "Alaska DPS Security Guard License Application 12-183 (rev. 1/2025, PDF)", url: "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf", checkedOn: "2026-10" },
        { label: "Alaska DPS Security Guard Renewal Application 12-183-1 (PDF)", url: "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf", checkedOn: "2026-10" },
        { label: "13 AAC 60.110 - Training required (regulation text)", url: "https://regulations.justia.com/states/alaska/title-13/part-3/chapter-60/article-3/section-13-aac-60-110", checkedOn: "2026-10" },
        { label: "CGuardPro - Alaska Security Guard Company License Guide (temporary employment, rosters, insurance)", url: "https://cguardpro.com/en/blog/alaska-security-guard-company-license", checkedOn: "2026-10" }
      ]
    },
    AZ: {
      agency: "Arizona Department of Public Safety (AZDPS), Security Guard and Private Investigator Licensing Unit",
      agencyUrl: "https://www.azdps.gov/services/public-services-center/licensing",
      exam: null,
      education: {
        hours: "8 (unarmed) plus 16 firearms (armed)",
        breakdown: "Unarmed applicants complete the 8-hour required curriculum - orientation, criminal law, communications, use of force, general procedures, crime scene, ethics, and first response - from a DPS-registered training instructor. Armed applicants add a 16-hour firearms training course, and armed renewal requires an 8-hour firearms continuing training course. DPS publishes the syllabus and lesson plans on its licensing page.",
        onlineAllowed: "Yes, provided the course is delivered by an instructor registered with DPS and approved to teach the required curriculum.",
        apprenticeship: null,
        sourceUrl: "https://www.azdps.gov/node/109"
      },
      experience: "No experience requirement for individual guard registration.",
      eligibility: {
        minAge: 18,
        citizenship: "Not restricted by citizenship, but fingerprints drive an FBI criminal history review",
        education: "No education requirement is published.",
        other: "Precluding offenses are defined in A.R.S. Section 32-2622. A first-time-applicant fee waiver is available for veterans discharged within two years, active-duty military spouses, and applicants whose family income is at or below 200 percent of the federal poverty level (A.R.S. 41-1080.01); the $22 fingerprint fee still applies."
      },
      background: {
        method: "Fingerprints plus a fingerprint affidavit; electronic prints via Fieldprint kiosks or paper cards mailed to the Licensing Unit with the PSP reference number",
        fee: "$22 fingerprint processing fee",
        disqualifiers: "The precluding offenses listed in A.R.S. Section 32-2622 disqualify guard registrations.",
        sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing"
      },
      fees: [
        { item: "Unarmed Security Guard (new / renew)", fee: "$50", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Armed Security Guard (new / renew)", fee: "$100", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Upgrade to armed (one-time)", fee: "$50", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Fingerprint processing", fee: "$22", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Replacement card", fee: "$10", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" }
      ],
      application: {
        portal: "Public Services Portal (PSP)",
        portalUrl: "https://www.azdps.gov/services/public-services-center/licensing",
        steps: [
          "Create a secure PSP account and submit the unarmed or armed security guard application online.",
          "After submission, use the reference number provided in the PSP message center for electronic fingerprinting at a Fieldprint kiosk or mail a completed paper fingerprint card to the Licensing Unit.",
          "Include the $22 fingerprint processing fee with every application; fees must be by cashier's check, certified check, credit card, or money order payable to the Arizona Department of Public Safety.",
          "Provide the training verification form documenting the 8-hour curriculum completed with a DPS-registered instructor.",
          "Allow at least 15 business days before checking status; approved identification cards are generally mailed within about two business days of printing."
        ],
        processingTime: "At least 15 business days after submission",
        sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing"
      },
      renewal: {
        cycle: "4 years for certificates received on or after September 26, 2025 (2 years for those received before that date)",
        ce: "An 8-hour refresher through the employing agency using the DPS-approved curriculum is required before renewal; armed guards use the 8-hour firearms continuing training lesson plan.",
        fee: "$50 unarmed / $100 armed",
        late: "A $100 late fee applies to agency renewals; renewal applications are accepted up to 180 days before expiration.",
        sourceUrl: "https://www.azdps.gov/node/109"
      },
      reciprocity: {
        rule: "Arizona does not transfer guard registrations. Per the DPS licensing FAQ, security guard registrations are not transferable between states or persons, so out-of-state guards must meet Arizona requirements.",
        agreements: null,
        sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$38,290", p25: "$35,670", p75: "$44,010", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=AZ" },
      localNuance: "Correspondence and identification cards go directly between the applicant and DPS, so an employer's address cannot be used as the mailing address. Registration cards are not proof on their own - DPS posts validity on the Public Services Portal, and photocopies are not accepted as evidence of registration.",
      recentChanges: [
        { year: 2025, change: "Licenses and registration certificates received on or after September 26, 2025 are valid for a four-year term rather than two years, per recent legislation (A.R.S. 32-2624).", sourceUrl: "https://www.azdps.gov/node/109" }
      ],
      stateFaqs: [
        { q: "How much is an Arizona guard card?", a: "Unarmed registration is $50 new or renewing, armed registration is $100, and the fingerprint processing fee of $22 applies to every application. An unarmed-to-armed upgrade is a one-time $50." },
        { q: "How long is an Arizona security guard registration valid?", a: "Certificates received on or after September 26, 2025 run four years under A.R.S. 32-2624; those issued before that date run two years. The expiration date printed on the card controls." },
        { q: "What training do I need before applying in Arizona?", a: "The 8-hour DPS-required curriculum covering orientation, criminal law, communications, use of force, procedures, crime scene, ethics, and first response, delivered by a DPS-registered instructor. Armed applicants add a 16-hour firearms course; renewals add an 8-hour refresher." },
        { q: "Can I transfer my security guard registration from another state to Arizona?", a: "No. DPS states plainly that security guard registrations are not transferable between states or persons; you must complete Arizona's registration process, including the training, fingerprints, and fees." },
        { q: "Do any applicants get the fee waived?", a: "First-time applicants who are honorably discharged veterans within two years, active-duty military spouses, or whose family income is at or below 200 percent of the federal poverty level can have initial licensing fees waived under A.R.S. 41-1080.01, though the $22 fingerprint fee still applies." }
      ],
      sources: [
        { label: "Arizona DPS - Licensing (fees and FAQ)", url: "https://www.azdps.gov/services/public-services-center/licensing", checkedOn: "2026-10" },
        { label: "Arizona DPS - Security Guard and Private Investigator Licensing (forms, term change, training syllabi)", url: "https://www.azdps.gov/node/109", checkedOn: "2026-10" },
        { label: "Arizona DPS Licensing - Fee schedule and waiver program", url: "https://licensing.azdps.gov/contact-0", checkedOn: "2026-10" },
        { label: "GuardTraining.net - State-by-state guard requirements (AZ training curriculum)", url: "https://guardtraining.net/?p=987521631/", checkedOn: "2026-10" }
      ]
    },
    AR: {
      agency: "Arkansas State Police, Regulatory Services Division (Arkansas Board of Private Investigators and Private Security Agencies)",
      agencyUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
      exam: {
        vendor: "state board (administered through the approved training program)",
        vendorUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
        parts: [ { name: "Private Security Officer exam (Phase I topics)", questions: "At least 70 questions on Phase I subjects", time: "Not published", pass: "70%" } ],
        fee: "Included with the initial application fee; a $50 re-examination fee applies if the exam is administered by the State Police",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas",
        sourceNote: "17 CAR 350-1017, as summarized by secondary sources"
      },
      education: {
        hours: "8 (unarmed PSO) plus 16 firearms (armed CSO)",
        breakdown: "Private Security Officers complete Phase I training of at least 8 hours covering legal authority, Arkansas private security rules, and note taking and report writing, with a test on each area (17 CAR 350-1004). Commissioned (armed) officers add Phase II firearms training of 16 hours, split 8 classroom and 8 range (17 CAR 350-1005). Current certified law enforcement officers are exempt from training with documentation (17 CAR 350-1007).",
        onlineAllowed: "Not addressed in the rules summarized here.",
        apprenticeship: null,
        sourceUrl: "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas"
      },
      experience: "No experience requirement for individual credentials. The application must reach the State Police within 14 calendar days of hire, and the applicant may work under line-of-sight supervision by a licensee or credential holder until processed.",
      eligibility: {
        minAge: 18,
        citizenship: "Non-US citizens must attach current, valid proof of eligibility to work in the United States",
        education: "No education requirement is published.",
        other: "Commissioned (armed) officers must be 21. Applicants must disclose all arrests, pending charges, pleas, and convictions for listed offenses - including sealed or expunged records with the sealing order and original judgment attached."
      },
      background: {
        method: "Two classifiable fingerprint cards submitted with the application for Arkansas State Police and FBI checks",
        fee: "$22 state background check plus $13 in federal background check line items ($10 + $1 + $2)",
        disqualifiers: "Convictions or guilty/nolo pleas to offenses listed in A.C.A. 17-39-202, 17-39-206, 17-39-304, 17-40-306, or 17-40-337; armed officers must not be barred from firearm possession under state or federal law.",
        sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      fees: [
        { item: "Security officer credential (unarmed or commissioned)", fee: "$40", sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf" },
        { item: "State background check", fee: "$22", sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf" },
        { item: "Federal background check (three line items)", fee: "$13", sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf" },
        { item: "Total due with application", fee: "$75", sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf" },
        { item: "Employer transfer", fee: "$20", sourceUrl: "https://legalclarity.org/arkansas-security-guard-training-and-license-requirements/" }
      ],
      application: {
        portal: "Paper application submitted to the Arkansas State Police Private Security Section, generally through the employing agency",
        portalUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
        steps: [
          "Get hired by a licensed Arkansas security agency and complete Phase I training (and Phase II firearms training for a commission) with a board-approved trainer.",
          "Pass the written exam at the end of the training program; the initial fee covers one attempt.",
          "Complete the notarized application with two passport-style photos and full disclosure of criminal history, including sealed or expunged matters.",
          "Attach two classifiable fingerprint cards and pay the $75 total ($40 credential + $22 state check + $13 federal fees).",
          "Submit to the State Police within 14 calendar days of hire; until processed, you may work only under the immediate line-of-sight supervision of a licensee or credential holder."
        ],
        processingTime: "Not published; processing follows the state and FBI fingerprint results",
        sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "Renewal training must be completed within the 12 months before expiration: at least 6 hours for PSOs and 12 hours for CSOs including range requalification and a safety course. CSOs also complete 12 hours of refresher training annually.",
        fee: "$40",
        late: "Renewal is allowed within 90 days before expiration; a lapsed credential cannot be used to work.",
        sourceUrl: "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal"
      },
      reciprocity: {
        rule: "Rule 2.4 of the State Police rules allows an applicant holding a substantially similar license from another US state, territory, or the District of Columbia to apply for a reciprocal or temporary Arkansas credential, evaluated case by case based on comparable requirements, good standing, and no adverse disciplinary history. Arkansas does not publish a list of specific agreement states.",
        agreements: null,
        sourceUrl: "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,770", p25: "$29,750", p75: "$41,210", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=AR" },
      localNuance: "Uniforms and vehicle markings that could be confused with the Arkansas State Police - including similar design or color schemes - are prohibited under A.C.A. 12-8-121. Credentials are employer-tied, so changing companies requires a $20 transfer application with new background check fees.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf" }
      ],
      stateFaqs: [
        { q: "How much does an Arkansas security license cost?", a: "The State Police collect $75 with the application: a $40 credential fee, $22 state background check, and $13 in federal check fees. Renewal is $40 every two years, and transferring the credential to a new employer costs $20." },
        { q: "What is the difference between a PSO and a CSO in Arkansas?", a: "A Private Security Officer is the unarmed credential requiring 8 hours of Phase I training; a Commissioned Security Officer is the armed credential requiring age 21, an additional 16 hours of firearms training split between classroom and range, and stricter felony disqualification rules." },
        { q: "Is there an exam?", a: "Yes. Applicants pass a written exam on Phase I topics with at least 70 percent, administered as part of the approved training program. The initial application fee covers one attempt; a State Police-administered re-exam carries a $50 fee." },
        { q: "Can I work while my Arkansas application is pending?", a: "Only under direct supervision: a current licensee or credential holder must watch and direct your activities while remaining within line-of-sight proximity at all times. The application must also be filed within 14 calendar days of your hire date." },
        { q: "Does Arkansas recognize out-of-state guard licenses?", a: "Partially. Rule 2.4 provides a case-by-case reciprocal or temporary licensing path for holders of substantially similar licenses in good standing, but Arkansas publishes no list of agreement states." }
      ],
      sources: [
        { label: "Arkansas DPS - Commissioned Security Officer Application (rev. 02/2026, PDF)", url: "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf", checkedOn: "2026-10" },
        { label: "Licensing Navigator - Arkansas Security Guard License Costs (17 CAR citations)", url: "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas", checkedOn: "2026-10" },
        { label: "LegalClarity - Arkansas Security License Requirements, Fees, and Renewal", url: "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal", checkedOn: "2026-10" },
        { label: "LegalClarity - Arkansas Security Guard Training and License Requirements (renewal training, transfer fee)", url: "https://legalclarity.org/arkansas-security-guard-training-and-license-requirements/", checkedOn: "2026-10" },
        { label: "Security Dogma - Arkansas Security Guard Requirements (credential structure)", url: "https://securitydogma.com/licensing/arkansas", checkedOn: "2026-10" }
      ]
    },
    CA: {
      agency: "California Bureau of Security and Investigative Services (BSIS)",
      agencyUrl: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml",
      exam: {
        vendor: "state board (exam delivered by BSIS-approved training schools at the end of the course)",
        vendorUrl: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml",
        parts: [ { name: "Power to Arrest and Appropriate Use of Force examination", questions: "Not published by BSIS", time: "Untimed", pass: "100% (retakes permitted)" } ],
        fee: "Included in the training course cost; BSIS does not charge a separate exam fee",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.preppass.org/en/guard-card/guide",
        sourceNote: "16 CCR 628(b) passing standard as documented by secondary sources"
      },
      education: {
        hours: "8 before registration + 32 within 6 months + 8 annually",
        breakdown: "The 8-hour Power to Arrest and Appropriate Use of Force course must be completed before registration issues (BPC 7583.6 and 7583.8). Thirty-two hours of security officer skills training must be completed within the first six months of registration - 16 hours within the first 30 days and 16 more by six months. Eight hours of continuing training is required every year thereafter (BPC 7583.6, CCR 643).",
        onlineAllowed: "Training may be administered by the employing private patrol operator, a BSIS-certified training facility, or a BSIS-approved course provider; under SB 652 (effective January 1, 2026) the initial 8-hour course must come from a single licensed provider and be completed within 6 months before applying.",
        apprenticeship: null,
        sourceUrl: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
      },
      experience: "No experience requirement for guard registration.",
      eligibility: {
        minAge: 18,
        citizenship: "Not restricted by citizenship; work authorization applies as with any employment",
        education: "No education requirement is published.",
        other: "Applicants must clear criminal history checks with the California DOJ and FBI (BPC 7581, 7583.9)."
      },
      background: {
        method: "Live Scan fingerprinting at a California location using the Security Guard Request for Live Scan Service form (out-of-state applicants may submit hard cards)",
        fee: "DOJ and FBI processing fees plus the Live Scan operator's rolling fee, paid at the time of fingerprinting",
        disqualifiers: "Criminal history determinations are made by BSIS after DOJ and FBI responses; specific statutory disqualifier lists are not published on the fact sheet.",
        sourceUrl: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
      },
      fees: [
        { item: "Registration application", fee: "$60 (effective October 1, 2025; previously $50)", sourceUrl: "https://www.preppass.org/en/guard-card/guide" },
        { item: "Renewal (2 years)", fee: "$44 (effective October 1, 2025; previously $35)", sourceUrl: "https://www.preppass.org/en/guard-card/guide" },
        { item: "Live Scan (DOJ + FBI + rolling fee)", fee: "About $49-$124 depending on the site", sourceUrl: "https://www.preppass.org/en/guard-card/guide" }
      ],
      application: {
        portal: "BreEZe (breeze.ca.gov) or paper application by mail",
        portalUrl: "https://www.breeze.ca.gov/",
        steps: [
          "Complete the 8-hour Power to Arrest and Appropriate Use of Force course with a BSIS-licensed provider within 6 months before applying and pass the end-of-course exam.",
          "Submit the application online in BreEZe (recommended; can cut processing by up to two weeks) or mail the paper application with the fee to BSIS in West Sacramento.",
          "Complete Live Scan fingerprinting with the correct BSIS-coded form so DOJ and FBI results route to the Bureau.",
          "Allow roughly 4-6 weeks for processing, which depends on DOJ and FBI response times.",
          "Once approved, you may work using a website printout of the Bureau's approval plus valid photo ID while waiting for the hard-copy registration card, which arrives by mail in about three weeks."
        ],
        processingTime: "About 4-6 weeks",
        sourceUrl: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
      },
      renewal: {
        cycle: "2 years",
        ce: "8 hours of continuing training every year, administered by a private patrol operator, BSIS-certified facility, or approved provider.",
        fee: "$44",
        late: "Renewal fee schedule published by BSIS; a lapsed registration cannot be used for guard work.",
        sourceUrl: "https://www.preppass.org/en/guard-card/guide"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$43,240", p25: "$37,180", p75: "$46,760", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=CA" },
      localNuance: "A guard must physically carry the registration card on duty (BPC 7583.3). Separate BSIS permits exist for exposed firearms, tear gas, and batons, each with its own training facility approval. BSIS publishes current processing timelines on its website.",
      recentChanges: [
        { year: 2025, change: "BSIS guard card fees changed effective October 1, 2025: the initial application fee rose to $60 and the renewal fee to $44.", sourceUrl: "https://www.preppass.org/en/guard-card/guide" },
        { year: 2026, change: "SB 652 took effect January 1, 2026, requiring the 8-hour Power to Arrest and Use of Force course to be completed with a single BSIS-licensed provider within six months before applying.", sourceUrl: "https://www.preppass.org/en/guard-card/guide" }
      ],
      stateFaqs: [
        { q: "How long does it take to get a California guard card?", a: "About 4-6 weeks after BSIS receives the application and clears the DOJ and FBI background checks. Submitting online in BreEZe can shorten processing by up to two weeks, and the Live Scan form must carry BSIS's correct coding or processing stalls." },
        { q: "What is the 40-hour California training structure?", a: "Eight hours of Power to Arrest and Use of Force before the card issues, 32 hours of security officer skills within the first six months (16 within 30 days of employment), then 8 hours of continuing training every year the registration is held." },
        { q: "Can I work before my physical card arrives?", a: "Yes, if BSIS has approved the registration and you carry a printout of the Bureau's website approval together with valid picture identification while on duty (BPC 7583.17)." },
        { q: "How much does a California guard card cost in total?", a: "Plan for roughly $250-$300: $60 application fee, about $49-$124 in Live Scan and DOJ/FBI fees, plus the 8-hour course tuition (commonly $30-$80). Renewal is $44 every two years." },
        { q: "What is the pass standard for the guard card exam?", a: "The Power to Arrest and Appropriate Use of Force exam administered at the end of the 8-hour course requires 100 percent under 16 CCR 628(b), with retakes permitted. BSIS does not publish the question count." }
      ],
      sources: [
        { label: "BSIS - Security Guard Registration Fact Sheet", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml", checkedOn: "2026-10" },
        { label: "BSIS - Security Guard Registration Fact Sheet (PDF, rev. Oct 2025)", url: "http://bsis.ca.gov/forms_pubs/guard_fact.pdf", checkedOn: "2026-10" },
        { label: "PrepPass - California Guard Card Guide (2025 fee schedule and SB 652 summary)", url: "https://www.preppass.org/en/guard-card/guide", checkedOn: "2026-10" },
        { label: "BSIS - BreEZe online application portal", url: "https://www.breeze.ca.gov/", checkedOn: "2026-10" }
      ]
    },
    CT: {
      agency: "Connecticut Department of Emergency Services and Public Protection (DESPP), Special Licensing and Firearms Unit (SLFU)",
      agencyUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers",
      exam: null,
      education: {
        hours: "8",
        breakdown: "At least 8 hours of classroom instruction from a DESPP-approved instructor covering basic first aid, search and seizure, use of force, and basic criminal justice and public safety issues, required by CGS 29-161q. The instructor signs the reverse of application form DPS-135-C on completion.",
        onlineAllowed: "The statute requires a course of instruction approved by the Commissioner; DESPP publishes a list of approved instructors.",
        apprenticeship: null,
        sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
      },
      experience: "No experience requirement for the security officer identification card.",
      eligibility: {
        minAge: 18,
        citizenship: "No citizenship requirement is stated for the card; naturalization papers are requested if applicable",
        education: "No education requirement is published.",
        other: "Armed security officers must be 21. No person convicted of a felony, any sexual offense, or any crime questioning honesty and integrity may be certified. Active military and those honorably separated within two years qualify for a waiver of both the training course and the $100 fee under Public Act 14-131."
      },
      background: {
        method: "Fingerprint fees paid online in advance through the Connecticut FlexCheck portal (ct.flexcheck.us.idemia.io/cchrspreenroll); the fingerprint card and a copy of the applicant tracking number accompany the application",
        fee: "About $75 state criminal history check plus $13.25 FBI check, paid online before submission",
        disqualifiers: "Felony convictions, sexual offenses, crimes of moral turpitude, prior security license denial (except for lack of experience), and police decertification all bar certification under CGS 29-161q.",
        sourceUrl: "https://legalclarity.org/ct-security-license-requirements-and-application-steps"
      },
      fees: [
        { item: "Security Officer Training Certification Identification Card application", fee: "$100 (payable to Treasurer, State of Connecticut)", sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers" },
        { item: "State and FBI criminal history checks", fee: "About $88.25 combined, paid online before fingerprinting", sourceUrl: "https://legalclarity.org/ct-security-license-requirements-and-application-steps" },
        { item: "Employer registration of each licensed officer", fee: "$40", sourceUrl: "https://cguardpro.com/en/blog/connecticut-security-guard-company-license" }
      ],
      application: {
        portal: "Paper application (DPS-135-C) mailed to the Special Licensing and Firearms Unit",
        portalUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers",
        steps: [
          "Complete the 8-hour DESPP-approved course with a public instructor; the instructor signs the DPS-135-C application form.",
          "Pay fingerprint fees online at the FlexCheck portal and keep the applicant tracking number or receipt.",
          "Mail the completed DPS-135-C with the $100 check or money order payable to Treasurer, State of Connecticut, one 2-inch by 2-inch color photo on a solid background, the fingerprint card, a copy of your Connecticut driver's license, and the signed FBI Privacy Act statement to SLFU in Middletown.",
          "There is no separate written state examination - the 8-hour course is the qualifying requirement.",
          "Once issued, the Security Officer Training Certification Identification Card is valid for five years unless suspended or revoked, and the employer then registers the officer with SLFU."
        ],
        processingTime: "Not published; incomplete or incorrect packets are returned",
        sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
      },
      renewal: {
        cycle: "5 years",
        ce: "No continuing education requirement for unarmed officers is set in the statute; armed officers must complete an annual firearms refresher course.",
        fee: "Not published on the SLFU page; a late renewal carries an additional $25 and a license expired more than 90 days cannot be renewed",
        late: "The license remains valid for 90 days after expiration, and DESPP sends notice at least 90 days ahead.",
        sourceUrl: "https://cguardpro.com/en/blog/connecticut-security-guard-company-license"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$39,920", p25: "$36,100", p75: "$47,510", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=CT" },
      localNuance: "Connecticut runs a two-step system: the officer's personal five-year card from SLFU, then the Security Service Agency registers each officer ($40). Pending applicants may work only if the employer ran its own state and national background check, and never at preschools, K-12 schools, or licensed child care centers. Armed officers additionally need a permit under CGS 29-161z plus annual refresher training.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers" }
      ],
      stateFaqs: [
        { q: "How much does a Connecticut guard card cost?", a: "The SLFU application fee is $100, payable to the Treasurer, State of Connecticut, plus roughly $88 in state and FBI fingerprint check fees paid online before submission. The 8-hour training course is paid separately to the private instructor." },
        { q: "Is there an exam for the Connecticut security officer card?", a: "No state examination is administered. Qualification rests on completing the 8-hour DESPP-approved course in first aid, search and seizure, use of force, and criminal justice topics, with the instructor signing the application." },
        { q: "How long is the Connecticut card valid?", a: "Five years unless suspended or revoked. DESPP mails renewal notice at least 90 days ahead, the license stays valid for 90 days after expiration, late renewal adds $25, and a license expired more than 90 days cannot be renewed at all." },
        { q: "Can I work while my Connecticut application is pending?", a: "Only if the employing Security Service Agency runs a state and national criminal history check and finds you qualified, you completed the 8-hour training, and you are not a decertified officer. Pending applicants may not work at preschools, K-12 schools, or licensed child care centers." },
        { q: "What disqualifies a Connecticut security officer applicant?", a: "Any felony conviction, any sexual offense, any crime that questions honesty or integrity, a prior security service license denial (unless based on lack of experience), and revocation or refusal of police certification. Only Commissioner-approved badges and insignia may be worn." }
      ],
      sources: [
        { label: "Connecticut DESPP SLFU - How do I get licensed as a security officer?", url: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers", checkedOn: "2026-10" },
        { label: "LegalClarity - CT Security License Requirements and Application Steps", url: "https://legalclarity.org/ct-security-license-requirements-and-application-steps", checkedOn: "2026-10" },
        { label: "CGuardPro - Connecticut Security Guard Company License Guide (renewal, armed permit, registration fee)", url: "https://cguardpro.com/en/blog/connecticut-security-guard-company-license", checkedOn: "2026-10" },
        { label: "Connecticut FlexCheck fingerprint pre-enrollment portal", url: "https://ct.flexcheck.us.idemia.io/cchrspreenroll", checkedOn: "2026-10" }
      ]
    },
    DE: {
      agency: "Delaware State Police, Professional Licensing Section (Board of Examiners of Private Investigators and Private Security Agencies)",
      agencyUrl: "https://dsp.delaware.gov/security-guard-faqs/",
      exam: {
        vendor: "Delaware Technical and Community College (DTCC)",
        vendorUrl: "https://dsp.delaware.gov/security-guard-faqs/",
        parts: [ { name: "Security guard exam", questions: "Not published by DSP", time: "Not published", pass: "Not published by DSP" } ],
        fee: "$49",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/"
      },
      education: {
        hours: "16 (unarmed) plus 40 firearms (armed)",
        breakdown: "Unarmed applicants must complete a 16-hour training course with a DSP-approved instructor before applying; armed (Red Card) applicants must complete a 40-hour firearms course including daylight and low-light shoot certifications. The Professional Licensing Section may waive the 40-hour firearms requirement for applicants with prior law enforcement credentials who demonstrate proficiency.",
        onlineAllowed: "Not addressed; instructors must be individually approved by the Professional Licensing Section.",
        apprenticeship: null,
        sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/"
      },
      experience: "No experience requirement for the security guard license.",
      eligibility: {
        minAge: 21,
        citizenship: "Not stated on the DSP FAQ pages",
        education: "No education requirement is published.",
        other: "The unarmed card requires no stated minimum age on the DSP FAQ; 21 is the stated minimum for the armed (Red Card) endorsement, which also requires a valid unarmed license and legally compliant firearm possession under the Gun Control Act."
      },
      background: {
        method: "Fingerprint registration through IdentoGO; the State and federal criminal history check runs through the State Bureau of Identification as part of the $105 application payment",
        fee: "Included in the $105 license fee paid when registering with IdentoGO",
        disqualifiers: "Disqualifying charges are listed in Title 24, Chapter 13, Section 1314 of the Delaware Code; an arrest for a potentially disqualifying offense must be reported to the Professional Licensing Section within 5 business days.",
        sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/"
      },
      fees: [
        { item: "Security guard license (initial, includes fingerprinting)", fee: "$105", sourceUrl: "https://legalclarity.org/how-to-get-your-delaware-security-guard-license" },
        { item: "DTCC security guard exam", fee: "$49", sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/" },
        { item: "Renewal (5 years, includes fingerprinting)", fee: "$105", sourceUrl: "https://legalclarity.org/how-to-get-your-delaware-security-guard-license" },
        { item: "Replacement license", fee: "$10", sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/" },
        { item: "Armed (Red Card) added with the initial unarmed application", fee: "No additional charge if applied for together", sourceUrl: "https://dsp.delaware.gov/unarmed-security-guard-firearms-faqs/" }
      ],
      application: {
        portal: "IdentoGO fingerprint registration, then email application documents to the DSP Professional Licensing Section",
        portalUrl: "https://dsp.delaware.gov/security-guard-faqs/",
        steps: [
          "Complete the 16-hour training with a DSP-approved instructor and obtain the training certificate.",
          "Take the security guard exam at Delaware Technical and Community College, presenting the 16-hour certificate for admittance and paying the $49 fee.",
          "Register with IdentoGO for fingerprinting and pay the $105 application fee at that step.",
          "Email the application plus both the training certificate and the DTCC exam certification to the Professional Licensing Section - certificates are due with the application or within 30 days of fingerprinting.",
          "Processing takes a minimum of about two weeks after fingerprints; there is no reciprocity, so out-of-state guards must complete the full Delaware process."
        ],
        processingTime: "Minimum of about two weeks after fingerprinting",
        sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/"
      },
      renewal: {
        cycle: "5 years",
        ce: "No continuing education requirement is published; the armed firearms endorsement renews annually with qualifying shoots rather than with the base license.",
        fee: "$105",
        late: "DSP recommends starting renewal at least two months before expiration; working on an expired license is prohibited.",
        sourceUrl: "https://legalclarity.org/how-to-get-your-delaware-security-guard-license"
      },
      reciprocity: {
        rule: "Delaware does not honor other states' guard licenses. The DSP FAQ states: you must apply for a Delaware license; the state has no reciprocity with any other state.",
        agreements: null,
        sourceUrl: "https://dsp.delaware.gov/security-guard-faqs/"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$36,360", p25: "$36,000", p75: "$44,450", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=DE" },
      localNuance: "Armed guards hold a separate Red Card firearms endorsement valid only to the end of the calendar year, requiring three qualifying shoots per year (at least one in low light, on at least two separate days with minimum spacing). Separate certifications are required for batons, chemical sprays, and handcuffs, and DSP conducts unannounced site inspections checking for the license and credential cards.",
      recentChanges: [
        { year: 2025, change: "In November 2025 the Board of Examiners proposed amendments to 24 DE Admin. Code 1300 covering the firearms policy (professionalizing instructor requirements and adjusting shoot spacing), training requirements, and use of animals, with comments due December 1, 2025.", sourceUrl: "https://regulations.delaware.gov/api/register/november2025/55744879-7f12-48e8-8bbf-bc5850ea85f8" }
      ],
      stateFaqs: [
        { q: "How much does a Delaware security guard license cost?", a: "The license itself is $105, paid when registering with IdentoGO for fingerprints, and the DTCC exam is $49 - about $154 in state charges before the 16-hour training course tuition. Renewal after five years is another $105 with new fingerprints." },
        { q: "Do I need an exam to become a Delaware security guard?", a: "Yes. After the 16-hour approved training course, you take the security guard exam at Delaware Technical and Community College for $49, presenting your training certificate for admittance. Both certificates go to the Professional Licensing Section within 30 days of fingerprinting." },
        { q: "Can I use my out-of-state guard license in Delaware?", a: "No. The DSP Professional Licensing FAQ states plainly that Delaware has no reciprocity with any other state; every guard completes the Delaware training, exam, and background process." },
        { q: "How does the armed (Red Card) endorsement work?", a: "You must hold the unarmed Yellow Card (or apply for both together, at no extra application charge), be at least 21, and complete a 40-hour firearms course with daylight and low-light shoots. The firearms endorsement is valid for one calendar year and requires three qualifying shoots annually." },
        { q: "What happens if I'm arrested while licensed in Delaware?", a: "You must notify the Professional Licensing Section within 5 business days, excluding weekends and holidays; failure to report can result in suspension or revocation. The Section can also suspend anyone licensed under Chapter 13 arrested for an offense that could disqualify them." }
      ],
      sources: [
        { label: "Delaware State Police - Security Guard FAQs", url: "https://dsp.delaware.gov/security-guard-faqs/", checkedOn: "2026-10" },
        { label: "Delaware State Police - Armed (Red Card) / Firearms FAQs", url: "https://dsp.delaware.gov/unarmed-security-guard-firearms-faqs/", checkedOn: "2026-10" },
        { label: "Delaware Register of Regulations - Proposed amendments to 24 DE Admin. Code 1300 (Nov 2025)", url: "https://regulations.delaware.gov/api/register/november2025/55744879-7f12-48e8-8bbf-bc5850ea85f8", checkedOn: "2026-10" },
        { label: "LegalClarity - How to Get Your Delaware Security Guard License ($105 fee, 5-year term)", url: "https://legalclarity.org/how-to-get-your-delaware-security-guard-license", checkedOn: "2026-10" }
      ]
    },
    DC: {
      agency: "DC Department of Licensing and Consumer Protection (Security Program), with final signoff by the Metropolitan Police Department Security Officers Management Branch (SOMB)",
      agencyUrl: "https://mpdc.dc.gov/page/security-officers-management-branch-somb",
      exam: {
        vendor: "Pearson VUE",
        vendorUrl: "https://home.pearsonvue.com/",
        parts: [ { name: "DC security officer exam (DCMR Title 17, Chapter 21 topics)", questions: "About 40 multiple-choice", time: "60 minutes", pass: "70%" } ],
        fee: "$65 application fee plus $38 license fee (about $103 total), paid at Pearson VUE registration",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics",
        sourceNote: "Fee split and format as documented by secondary sources; DLCP does not publish a candidate bulletin"
      },
      education: {
        hours: "24 pre-assignment + 16 on-the-job (unarmed Security Officer); 40 pre-assignment + 16 on-the-job (Special Police Officer)",
        breakdown: "Unarmed Security Officers complete 24 hours of pre-assignment training covering basic security, legal authority, emergency response including terrorism awareness, and customer service, plus 16 hours of on-the-job training within the first 90 working days. Special Police Officers (SPOs) complete 40 hours of pre-assignment training - 16 hours on arrest powers, search and seizure, the DC Official Code, and use of force, plus 24 hours on operational skills - plus the same 16-hour on-the-job requirement. Armed SPOs add a 40-hour firearms course and equipment-specific certification for batons, handcuffs, or OC spray.",
        onlineAllowed: "Approved providers offer the pre-assignment coursework online; firearms phases are delivered in person.",
        apprenticeship: null,
        sourceUrl: "https://legalclarity.org/dc-special-police-officers-authority-and-requirements"
      },
      experience: "No experience requirement, but no one may apply for a commission without a sponsor: a licensed private security agency, DC government agency, college or university, law enforcement agency, or another employer authorized under Title 6A, Chapter 11.",
      eligibility: {
        minAge: 18,
        citizenship: "Special Police Officer commissions require US citizenship (a valid INS work permit is not sufficient for SPOs); unarmed security officer applicants may document lawful status",
        education: "No education requirement is published.",
        other: "SPO applicants must pass a physical examination by a physician, a drug screening, and a criminal background investigation; felony convictions bar an SPO commission (training providers cite 10 years for felonies and permanent bars for crimes of violence)."
      },
      background: {
        method: "Fingerprinting at the MPD Civilian Fingerprint Section with the background investigation conducted by MPD SOMB",
        fee: "$35 paid to the DC Metropolitan Police Department for fingerprinting and background investigation",
        disqualifiers: "Felony history and crimes of violence bar SPO commissions; failed drug screens and disqualifying mental or physical findings also bar issuance.",
        sourceUrl: "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
      },
      fees: [
        { item: "Unarmed Security Officer application and license (via Pearson VUE)", fee: "$103 ($65 application + $38 license)", sourceUrl: "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics" },
        { item: "Special Police Officer application", fee: "$84", sourceUrl: "https://legalclarity.org/dc-spo-license-requirements-training-and-application" },
        { item: "Fingerprinting and background investigation", fee: "$35", sourceUrl: "https://legalclarity.org/dc-spo-license-requirements-training-and-application" },
        { item: "SPO renewal (annual)", fee: "$84", sourceUrl: "https://legalclarity.org/dc-spo-license-requirements-training-and-application" }
      ],
      application: {
        portal: "DLCP Occupational and Professional Licensing (Security Programs); fingerprinting at MPD SOMB, 441 4th Street NW",
        portalUrl: "https://mpdc.dc.gov/page/security-officers-management-branch-somb",
        steps: [
          "Secure sponsorship from a licensed security agency or other authorized employer under Title 6A, Chapter 11.",
          "Complete the required pre-assignment training and keep the completion certificate; training proof must be submitted to SOMB within 90 calendar days or the certificate expires.",
          "Pass the Pearson VUE security officer exam (for unarmed Security Officer licensure) or complete the SPO track, and complete the physician's physical and drug screening.",
          "File the application at DLCP with the $84 SPO fee (or the $103 Pearson VUE total for security officers), sponsorship letter, physician's certificate, drug test results, photographs, and training certificates.",
          "Complete fingerprinting at the MPD Civilian Fingerprint Section; MPD SOMB gives final signoff before the commission card is issued, and no police powers may be exercised until the physical pocket card is in hand."
        ],
        processingTime: "Several weeks at minimum, driven by FBI fingerprint results and the MPD background investigation",
        sourceUrl: "https://mpdc.dc.gov/page/security-officers-management-branch-somb"
      },
      renewal: {
        cycle: "2 years for unarmed Security Officer commissions; annual for Special Police Officers",
        ce: "SPOs complete 8 hours of in-service training annually covering DC regulation updates, laws, and use of force; armed SPOs requalify on the MPD course of fire. The District has proposed raising the in-service requirement to 24 hours.",
        fee: "$84 for SPO renewal",
        late: "SPO renewals should be filed at least 30 days before expiration; a lapsed commission may require restarting the full certification process.",
        sourceUrl: "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$64,210", p25: "$45,510", p75: "$74,200", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=DC" },
      localNuance: "DC licenses two distinct officer types. Unarmed Security Officers are regulated under DCMR Title 17, Chapter 21 with limited private-citizen authority. Special Police Officers hold arrest powers under DCMR Title 6A, Chapter 11, wear distinctive 'Special Police' full-circle patches, and their commissions specify the property they may protect. SPO uniforms must be distinctly different from MPD's, including white cap covers.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://mpdc.dc.gov/page/security-officers-management-branch-somb" }
      ],
      stateFaqs: [
        { q: "How much does a DC security officer license cost?", a: "The unarmed Security Officer route runs about $103 through Pearson VUE ($65 application plus $38 license) plus $35 to MPD for fingerprinting and background. A Special Police Officer commission costs $84 to apply, the same $84 annually to renew, plus the $35 background fee, drug screening, and physician exam." },
        { q: "What is the difference between a Security Officer and a Special Police Officer in DC?", a: "Security Officers work unarmed with limited private authority under DCMR Title 17, Chapter 21. SPOs hold arrest powers under Title 6A, Chapter 11, need US citizenship, complete 40 pre-assignment hours plus firearms training if armed, and their commission authorizes them only for the specific property named on it." },
        { q: "What exam must DC security officers pass?", a: "The Pearson VUE computer-based exam covering DCMR Title 17 Chapter 21 topics: about 40 multiple-choice questions in 60 minutes with a 70 percent minimum passing score. Retakes are allowed after a waiting period and require repurchasing the exam portion." },
        { q: "Can I apply for a DC security license without a job offer?", a: "No. A sponsor is mandatory - a licensed private security agency, DC government agency, university, law enforcement agency, or other employer authorized under Title 6A Chapter 11. Private citizens cannot petition for a commission on their own." },
        { q: "How often do DC commissions renew?", a: "Unarmed Security Officer commissions renew every two years. SPO commissions renew annually with the $84 fee and 8 hours of in-service training; armed SPOs also requalify twice a year on the MPD firearms course of fire." }
      ],
      sources: [
        { label: "MPD - Security Officers Management Branch (SOMB)", url: "https://mpdc.dc.gov/page/security-officers-management-branch-somb", checkedOn: "2026-10" },
        { label: "LegalClarity - DC SPO License Requirements, Training, and Application", url: "https://legalclarity.org/dc-spo-license-requirements-training-and-application", checkedOn: "2026-10" },
        { label: "LegalClarity - DC Special Police Officers: Authority and Requirements", url: "https://legalclarity.org/dc-special-police-officers-authority-and-requirements", checkedOn: "2026-10" },
        { label: "OpenExamPrep - Pearson VUE Exam and Licensing Logistics (DC security officer)", url: "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics", checkedOn: "2026-10" }
      ]
    },
    FL: {
      agency: "Florida Department of Agriculture and Consumer Services (FDACS), Division of Licensing",
      agencyUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
      exam: {
        vendor: "state board (exam administered by the FDACS-licensed school at the end of the Class D course)",
        vendorUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
        parts: [ { name: "Class D security officer course exam", questions: "170 (no more than half true/false)", time: "At least 2 hours", pass: "128 correct (about 75%)" } ],
        fee: "Included in the school's course tuition; FDACS charges no separate exam fee",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://securitydogma.com/?p=1699",
        sourceNote: "Exam structure per FDACS rule 5N-1.140 as summarized by secondary sources"
      },
      education: {
        hours: "40 (Class D) plus 28 firearms (Class G)",
        breakdown: "The Class D Security Officer License requires 40 hours of professional training at a school holding a Class DS license, taught by a Class DI instructor, following the state curriculum covering legal limits of authority, emergency procedures, patrol and observation, access control, report writing, interviewing, terrorism awareness, and professional conduct. The Class G Statewide Firearm License requires an additional 28 hours of classroom and range training from a Class K firearms instructor (up to 20 hours may be live online) with a 144-round qualification course of fire, plus 4 hours of annual requalification.",
        onlineAllowed: "Yes for the Class D course if taught live in real time by a licensed school with identity checks - self-paced video does not qualify (rule 5N-1.140). Class G training may be up to 20 hours live online, with at least 8 hours in person on the range.",
        apprenticeship: null,
        sourceUrl: "https://securitydogma.com/?p=1699"
      },
      experience: "No experience requirement for the Class D license.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen, permanent legal resident alien, or holder of federal work authorization; non-citizens submit immigration documents with the application",
        education: "No education requirement is published.",
        other: "Applicants must disclose physical and mental health history on the application. A Class D holder must be 21 to carry a concealed firearm on duty under a Class G; a Class G applicant must not be barred from firearm possession under state or federal law."
      },
      background: {
        method: "Electronic fingerprint submission through an FDLE-registered Live Scan provider; results route to FDACS",
        fee: "$42 fingerprint processing plus $10.75 fingerprint retention fee (one set of prints covers simultaneous applications for multiple Chapter 493 license classes)",
        disqualifiers: "Felony convictions bar issuance unless civil rights are restored and at least 10 years have passed since final release from supervision (Section 493.6118); violent, dishonesty, or weapons misdemeanors and disqualifying drug or alcohol history can also bar issuance, and an undisclosed record is itself grounds for denial.",
        sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      fees: [
        { item: "Class D license fee", fee: "$45", sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf" },
        { item: "Fingerprint processing", fee: "$42", sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf" },
        { item: "Fingerprint retention", fee: "$10.75", sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf" },
        { item: "Class D total due at application", fee: "$97.75", sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf" },
        { item: "Class G statewide firearm license (plus the same $52.75 fingerprint fees)", fee: "$112", sourceUrl: "https://legalclarity.org/how-much-is-a-class-g-security-license-in-florida" }
      ],
      application: {
        portal: "FDACS Division of Licensing online portal (laso.fdacs.gov), by mail, or in person at a regional office",
        portalUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
        steps: [
          "Complete 40 hours of Class D training at an FDACS-licensed school and obtain the Certificate of Security Officer Training (form FDACS-16103), which the school must issue within three business days of passing the exam.",
          "Submit the application with proof of training, a color photograph meeting the specifications, and fingerprints via a registered Live Scan provider.",
          "Pay the $97.75 total ($45 license + $42 fingerprint processing + $10.75 retention); fees are nonrefundable and the initial license fee is waived for eligible veterans and active-duty members with a DD-214.",
          "Once a complete application is filed, you may begin working as an unarmed officer for a licensed agency while the background investigation proceeds; if the application is deemed incomplete, employment must stop until errors are fixed.",
          "For armed work, apply for the Class G in parallel (one fingerprint set covers both) and complete the 28-hour firearms course, physical, and mental health screening; the Class G does not replace the Class D."
        ],
        processingTime: "Several weeks for the background investigation; Live Scan results can take up to five days to reach the department",
        sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "Class G holders must complete 4 hours of firearms requalification training every year, including a passing 48-round qualification course of fire; the Class D has no continuing education requirement.",
        fee: "$45 for Class D renewal plus a $16.75 fingerprint retention fee",
        late: "A 90-day grace window applies after expiration with a late fee equal to the renewal fee; after 90 days a new application is required, and working on an expired license is a criminal offense.",
        sourceUrl: "https://legalclarity.org/florida-security-license-class-d-and-g-requirements"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,900", p25: "$32,340", p75: "$39,510", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=FL" },
      localNuance: "A Class D licensee must own or work for a Class B security agency, Class BB or AB branch office, or fall under a Section 493.6102 exemption - some proprietary officers hold a Class D solely to support a Class G. Applicants denied or revoked for the same license class are ineligible to reapply for at least one year after final agency action.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf" }
      ],
      stateFaqs: [
        { q: "How much does a Florida Class D security license cost?", a: "The state total is $97.75: a $45 license fee, $42 fingerprint processing, and $10.75 fingerprint retention. The mandatory 40-hour course is paid separately to the licensed school, typically $100 to $150." },
        { q: "Can I work while my Florida Class D application is pending?", a: "Yes. You may begin unarmed work upon submission of a complete application, but if FDACS sends a Notice of Errors or Omissions, your employment must stop until the deficiencies are resolved. In-person applicants at regional offices may receive a temporary license the same day." },
        { q: "What is the Florida Class D exam like?", a: "The school administers the exam during or after the 40-hour course: 170 questions, no more than half true/false, at least two hours long, with 128 correct answers (about 75 percent) needed to pass. The school issues the training certificate within three business days." },
        { q: "What does the Class G armed license require?", a: "Twenty-eight hours of classroom and range training from a Class K firearms instructor with a 144-round qualification, plus a physical exam and mental health screening. State fees are $112 plus the $52.75 fingerprint fees, and 4 hours of annual requalification are required to keep the endorsement active." },
        { q: "What criminal history bars a Florida security license?", a: "FDACS must deny applicants convicted of a felony unless civil rights were restored and at least 10 years have passed since final release from supervision. Violent, dishonesty, or weapons-related misdemeanors can also lead to denial, and failing to disclose a record is independently grounds for denial." }
      ],
      sources: [
        { label: "FDACS - Class D Application Instructions (official fees and work-pending rules, PDF)", url: "https://laso.fdacs.gov/documents/D_App_Instructions.pdf", checkedOn: "2026-10" },
        { label: "Security Dogma - Florida Class D and Class G Requirements (course and exam detail)", url: "https://securitydogma.com/?p=1699", checkedOn: "2026-10" },
        { label: "LegalClarity - Class G Security License Costs (Class G fees, requalification)", url: "https://legalclarity.org/how-much-is-a-class-g-security-license-in-florida", checkedOn: "2026-10" },
        { label: "LegalClarity - Florida Class D and Class G Requirements (renewal, grace period)", url: "https://legalclarity.org/florida-security-license-class-d-and-g-requirements", checkedOn: "2026-10" },
        { label: "GuardTraining.net - State-by-state guard requirements (FL renewal fees)", url: "https://guardtraining.net/?p=987521631/", checkedOn: "2026-10" }
      ]
    }
  }
};
